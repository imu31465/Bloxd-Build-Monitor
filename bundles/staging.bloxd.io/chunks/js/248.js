export const id = 248;
export const ids = [248];
export const modules = {
  39316: (tt, et, Vt) => {
    function Ot(tt) {
      return !(!tt.lobbyLeaderboardInfo && !tt.lobbyManage)
    }
    Vt.d(et, {
      d: () => Ot
    })
  },
  39221: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(31),
      qt = Vt(2043);

    function Dt(tt) {
      let {
        taskId: et,
        progress: Vt
      } = tt;
      const Ot = qt.b.get("_tasks");
      null !== Ot && void 0 !== Ot && Ot[et] && qt.b.apply({
        _tasks: {
          ...Ot,
          [et]: {
            ...Ot[et],
            progress: Vt
          }
        }
      })
    }
    Ot.j.subscribe("clientTaskProgress", (tt => {
      Dt(tt)
    }))
  },
  39152: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => eV,
      f: () => ne,
      g: () => tV
    });
    var Ot = Vt(3751),
      qt = Vt(184),
      Dt = Vt(229),
      mt = Vt(712),
      dt = Vt(39),
      jt = Vt(2848),
      Ht = Vt(3820),
      Xt = Vt(3800),
      Qt = Vt(1308);
    const lt = new WeakMap;
    class Et {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          mXt: !0
        };
        this.callbacks = et, this.options = Vt, this.tOt = void 0, this.sessionId = void 0, this.DW = [], this.dXt = !1, this.df = !1, this.jXt = void 0, this.OW = 0, this.sqt = 0, this.HXt = (tt, et) => {
          if (this.df) return;
          const Vt = Number(tt);
          this.dXt ? this.XXt(Vt, et) : this.DW.push({
            id: Vt,
            payload: et
          })
        }, this.dispose = () => {
          this.df || (this.df = !0, lt.delete(this), this.DW.length = 0, this.jXt())
        }, this.tOt = tt, this.sessionId = tt.sessionId, lt.set(this, []), this.jXt = this.QXt()
      }
      lXt(tt) {
        this.jXt(), this.tOt = tt, this.sessionId = tt.sessionId, this.OW = 0, this.sqt = 0, this.jXt = this.QXt()
      }
      get Fv() {
        return this.sqt
      }
      QXt() {
        const tt = this.tOt.gM("*", this.HXt);
        return this.options.mXt && this.tOt.eJ(this.dispose), tt
      }
      XXt(tt, et) {
        try {
          (0, Ht.lc)(tt) && (et = (0, Ht.e)(tt, Xt.mf.from(et)));
          const Vt = lt.get(this)[tt];
          if ("function" !== typeof Vt) {
            if (this.callbacks.EXt) return void this.callbacks.EXt(tt, et);
            throw new Error(`No onMessage handler registered for message id ${tt}`)
          }
          Vt(et)
        } catch (Vt) {
          this.callbacks.fXt(`Error in onMessage ${tt} with payload ${JSON.stringify(et)}`, Vt)
        } finally {
          this.OW++
        }
      }
      wXt() {
        for (const {
            id: tt,
            payload: et
          }
          of this.DW) {
          if (this.df) break;
          this.XXt(tt, et)
        }
        this.DW.length = 0
      }
      bC() {
        return this.df
      }
      yXt() {
        if (this.dXt || this.df) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          gM: (tt, et) => {
            if (this.dXt || this.df) throw new Error("Trying to call onMessage after registration finished");
            this.gM(tt, et)
          },
          finishRegistration: () => {
            if (this.df) throw new Error("Cannot finish message registration after disposal");
            this.dXt = !0, this.wXt()
          }
        }
      }
      gM(tt, et) {
        var Vt, Ot;
        null === (Vt = (Ot = this.callbacks).NXt) || void 0 === Vt || Vt.call(Ot);
        const qt = lt.get(this);
        for (; tt > qt.length;) qt[qt.length] = null;
        qt[tt] = et
      }
      send(tt, et) {
        this.aXt(), (0, Qt.J)(et) ? this.tOt.vW(tt, et) : this.tOt.send(tt, et)
      }
      aXt() {
        var tt, et;
        (this.sqt++, 5 === ft++) && (null === (tt = (et = this.callbacks).NXt) || void 0 === tt || tt.call(et), ft = 0)
      }
      vN() {
        this.dispose(), this.tOt.vN()
      }
      leave() {
        this.dispose(), this.tOt.leave()
      }
    }
    let ft = 0;
    var wt = Vt(3765);
    class yt extends Et {
      constructor(tt) {
        super(tt, {
          NXt: () => {
            (0, dt.i)(!0) && (0, Ot.Qv)()
          },
          fXt: (tt, et) => {
            var Vt;
            null === (Vt = (0, jt.e)()) || void 0 === Vt || Vt.yw(tt, et)
          }
        }, {
          mXt: !1
        }), (0, wt.d)(tt)
      }
      dW(tt, et) {
        return !!(0, wt.i)((0, wt.c)(), this.tOt, tt, et) && (this.aXt(), !0)
      }
      lXt(tt) {
        this.MXt(), super.lXt(tt), (0, wt.d)(tt)
      }
      vN() {
        super.vN(), this.MXt()
      }
      MXt() {
        this.tOt.ZN.xE.kR = void 0
      }
    }
    var Nt = Vt(31),
      Mt = Vt(2043),
      bt = Vt(1826),
      Jt = Vt(36701),
      Ct = Vt(39158),
      ut = Vt(38285),
      Kt = Vt(38056),
      ht = Vt(710),
      vt = Vt(38632);

    function Wt(tt, et, Vt) {
      const Ot = function(tt) {
          const et = new Int32Array(tt.length * vt.g);
          return tt.forEach(((tt, Vt) => {
            const Ot = Vt * vt.g;
            if (4 === tt.length) {
              const [Vt, qt, Dt, mt] = tt;
              et.set([Vt, qt, Dt, Vt, qt, Dt, mt], Ot)
            } else {
              const [Vt, qt, Dt, mt, dt, jt, Ht] = tt;
              et.set([Vt, Dt, dt, qt, mt, jt, Ht], Ot)
            }
          })), et
        }(Vt),
        qt = (et, Vt, Ot, qt) => {
          tt.setBlockNoMulti(et, Vt, Ot, qt, !0)
        };
      tt.client.gameRecorder.isCapturing() ? (0, vt.nb)(Ot, (0, vt.mb)(Ot), qt) : tt.ql.sQ.YC(Ot, {
        Vr: qt,
        isHookId: et => tt.blockChangeHasHooks(et),
        watched: () => function(tt, et, Vt) {
          const Ot = [],
            qt = (tt, et, Vt) => {
              Ot.push(tt, et, Vt)
            },
            Dt = new Set;
          for (let mt = 0; mt < Vt.length; mt += vt.g)
            for (let et = (0, ht.H)(Vt[mt]); et <= (0, ht.H)(Vt[mt + 3]); et++)
              for (let Ot = (0, ht.H)(Vt[mt + 1]); Ot <= (0, ht.H)(Vt[mt + 4]); Ot++)
                for (let dt = (0, ht.H)(Vt[mt + 2]); dt <= (0, ht.H)(Vt[mt + 5]); dt++) {
                  const Vt = `${et}|${Ot}|${dt}`;
                  Dt.has(Vt) || (Dt.add(Vt), tt.blockDataOwner.forEachDataCell(et, Ot, dt, qt))
                }
          return et.forEachCell(qt), Int32Array.from(Ot)
        }(tt, et, Ot)
      }), tt.ql.Ztt()
    }

    function St(tt) {
      tt.UVt = new Set, tt.YVt = new Set, tt.AVt = new Set, tt.BVt = new Set, tt.iVt = [], tt.pVt = [], tt.WG = new Set, tt.Uq = [], tt.rG = []
    }
    class ct {
      constructor(tt) {
        this.ql = tt
      }
      register(tt) {
        const et = this.ql,
          Vt = (0, jt.c)();
        tt.gM(Ht.$, (tt => {
          et.sQ.UVt.add(tt), et.sQ.YVt.delete(tt)
        })), tt.gM(Ht.eb, (tt => {
          et.sQ.YVt.add(tt), et.sQ.UVt.delete(tt)
        })), tt.gM(Ht.ge, (tt => {
          et.sQ.YVt.delete(tt), et.sQ.UVt.delete(tt)
        })), tt.gM(Ht.cb, (tt => {
          et.sQ.AVt.add(tt), et.sQ.BVt.delete(tt)
        })), tt.gM(Ht.jb, (tt => {
          et.sQ.BVt.add(tt), et.sQ.AVt.delete(tt)
        })), tt.gM(Ht.ke, (tt => {
          et.sQ.BVt.delete(tt), et.sQ.AVt.delete(tt)
        })), tt.gM(Ht.bb, (tt => {
          (0, Qt.ib)(tt, et.sQ.pVt), (0, Qt.ib)(tt, et.sQ.iVt), et.sQ.iVt.push(tt)
        })), tt.gM(Ht.fb, (tt => {
          (0, Qt.ib)(tt, et.sQ.iVt), (0, Qt.ib)(tt, et.sQ.pVt), et.sQ.pVt.push(tt)
        })), tt.gM(Ht.ie, (tt => {
          (0, Qt.ib)(tt, et.sQ.iVt), (0, Qt.ib)(tt, et.sQ.pVt)
        })), tt.gM(Ht.Bf, (tt => {
          let {
            lq: Vt,
            Eq: Ot
          } = tt;
          Ot ? et.sQ.WG.delete(Vt) : et.sQ.WG.add(Vt)
        })), tt.gM(Ht.Af, (tt => {
          let {
            Uq: Ot,
            Aq: qt
          } = tt;
          Vt.updateWalkThroughRect(et.lL, Ot, qt)
        })), (0, Ot.onGameResetOnce)((() => {
          St(et.sQ)
        })), tt.gM(Ht.gc, (tt => {
          ut.e.applyServerUpdate(tt)
        })), tt.gM(Ht.pb, (tt => {
          Vt.applyServerBlocks((() => {
            ! function(tt, et) {
              for (const {
                  bt: Vt,
                  Jt: Ot
                }
                of et) {
                const et = Kt.d[Ot];
                if (et) {
                  const {
                    compX: Ot,
                    compY: qt,
                    compZ: Dt,
                    mainMultiblock: mt
                  } = et;
                  tt.fR(Vt[0] - Ot, Vt[1] - qt, Vt[2] - Dt, mt)
                }
              }
              for (const {
                  bt: Vt,
                  Jt: Ot,
                  Ct: qt
                }
                of et) tt.setBlockNoMulti(Vt[0], Vt[1], Vt[2], Ot, !0), tt.blockDataOwner.setBlockData(Vt[0], Vt[1], Vt[2], null === qt ? void 0 : JSON.parse(qt)), tt.blockAdded(Vt[0], Vt[1], Vt[2], Ot)
            }(Vt, tt)
          })), Nt.j.sw("changeBlockFail", tt), Vt.client.triggerGameCallback("onChangeBlockFail", tt), Nt.j.sw("EditBoard", {
            pos: null
          }), Nt.j.sw("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), tt.gM(Ht.Jb, (tt => {
          Vt.applyServerBlocks((() => {
            Wt(Vt, ut.e, tt)
          }))
        })), tt.gM(Ht.tf, (tt => {
          let {
            ut: et,
            Kt: Ot
          } = tt;
          if (Vt.hA(et[0], et[1], et[2])) {
            const tt = (0, jt.c)().XM(et[0], et[1], et[2]);
            (0, jt.c)().updateMailboxContents(et[0], et[1], et[2], tt, Ot)
          }
        })), tt.gM(Ht.Ae, (tt => {
          let {
            pos: et,
            data: Ot
          } = tt;
          Vt.blockDataOwner.setBlockData(et[0], et[1], et[2], Ot), Vt.blockAdded(et[0], et[1], et[2], Vt.XM(et[0], et[1], et[2]))
        }))
      }
    }
    var Rt = Vt(37401),
      It = Vt(37002),
      Pt = Vt(38316),
      Zt = Vt(38172),
      Lt = Vt(38335);
    class Ft {
      constructor(tt, et) {
        this.ql = tt, this.setUpQueuedEntity = et
      }
      register(tt) {
        const et = this.ql,
          Vt = (0, jt.c)();
        tt.gM(Ht.Y, (tt => {
          let {
            IV: et,
            PV: Vt
          } = tt;
          this.setUpQueuedEntity(et), et = (0, It.c)(et), (0, jt.c)().client.gameRecorder.recordBulletShot(et, Vt), Nt.j.sw(`bulletShot|${et}`, {
            bulletDirections: Vt
          })
        })), tt.gM(Ht.kc, (tt => {
          let {
            WV: et,
            SV: Vt
          } = tt;
          Nt.j.sw("damagedByOtherPlayer", {
            WV: et,
            direction: Vt
          }, !0)
        })), tt.gM(Ht.Bd, (tt => {
          Nt.j.sw("playerKilled", tt, !0), (0, jt.c)().client.gameRecorder.recordPlayerKilled(tt.deadEId, tt.killerEId, tt.withItem, tt.killstreak)
        })), tt.gM(Ht.Ub, (tt => {
          Nt.j.sw("customKillfeed", tt, !0), (0, jt.c)().client.gameRecorder.recordCustomKillfeed(tt.killer, tt.victim, tt.withItem)
        })), tt.gM(Ht.Md, (tt => {
          let {
            xt: Vt,
            Tt: Ot
          } = tt;
          this.setUpQueuedEntity(Vt);
          const qt = et.mJ.bVt(Vt);
          null !== qt && void 0 !== qt && qt.isGun() && qt.reload(Date.now(), Ot)
        })), tt.gM(Ht.ue, (tt => {
          let {
            ne: Vt,
            St: Ot
          } = tt;
          const qt = Ot ? (0, Lt.h)(et, Ot) : void 0;
          Nt.j.sw("sendHitmarker", {
            ne: Vt,
            screenPos: qt
          }, !0)
        })), tt.gM(Ht.Kc, (tt => {
          let {
            ht: Ot,
            vt: qt,
            ct: Dt,
            Rt: mt,
            Pt: dt,
            Zt: jt,
            Lt: Ht
          } = tt;
          this.setUpQueuedEntity(Ot), Ot = (0, It.c)(Ot);
          const Xt = et.mJ.EVt(Ot);
          if (Xt && (Xt.lastHurtTime = performance.now()), (0, Pt.playRigHurt)(et, Ot, jt), Nt.j.sw("lifeformHurt", {
              eId: Ot,
              Lt: Ht
            }), qt) {
            const tt = (0, Lt.h)(et, qt.St);
            Nt.j.sw("yourAttackHit", {
              ne: mt,
              screenPos: tt,
              hitSelf: Ot === et.lL
            })
          }
          Ot === et.lL && (Vt.shakePlayerCamera(Ot, dt / 40, 200), Nt.j.sw("closeShopOnDamaged", null), Nt.j.sw("damagedByOtherPlayer", {
            WV: null,
            direction: jt,
            Pt: dt
          }, !0));
          const Qt = et.mJ.YM(Ot);
          if (Qt && (Dt || mt)) {
            const tt = [Qt[0], Qt[1] + 1, Qt[2]];
            Dt && (0, Zt.l)(et, Zt.z, tt, 15), mt && (0, Zt.l)(et, Zt.o, tt, 10)
          }
        })), tt.gM(Ht.Hc, (tt => {
          let {
            Le: Vt,
            Fe: Ot,
            ke: qt
          } = tt;
          (0, Rt.e)(et).setHealthFrac((0, It.c)(Vt), qt), Nt.j.sw("lifeformHealthChanged", {
            eId: (0, It.c)(Vt),
            Fe: Ot,
            ke: qt
          })
        })), tt.gM(Ht.R, (tt => {
          let {
            bD: Vt,
            JD: Ot
          } = tt;
          (0, jt.c)().playerAttacked(et.lL, Vt, Ot)
        })), tt.gM(Ht.sb, (() => {
          const tt = et.mJ.bVt(et.lL);
          null !== tt && void 0 !== tt && tt.isChargeable() && tt.finishCharging(!1, Date.now())
        })), tt.gM(Ht._b, (tt => {
          let {
            Ft: et,
            kt: Vt,
            Gt: Ot,
            tV: qt,
            eV: Dt,
            VV: mt
          } = tt;
          et = (0, It.c)(et), (0, jt.c)().client.updateEffect(et, Vt, {
            displayName: Ot,
            icon: qt,
            duration: Dt,
            level: mt
          })
        })), tt.gM(Ht.Qd, (tt => {
          let {
            Ft: et,
            kt: Vt
          } = tt;
          et = (0, It.c)(et), (0, jt.c)().client.removeEffect(et, Vt)
        })), tt.gM(Ht.of, (tt => {
          Nt.j.sw("ttbEffectMultiplier", tt)
        }))
      }
    }
    var kt = Vt(39179),
      Gt = Vt(37398),
      zt = Vt(4322),
      ot = Vt(38347),
      rt = Vt(36992),
      Ut = Vt(36996),
      At = Vt(37314),
      it = Vt(37480),
      Yt = Vt(38356),
      Bt = Vt(39187);
    class pt {
      constructor(tt, et) {
        this.ql = tt, this.setUpQueuedEntity = et
      }
      register(tt) {
        const et = this.ql,
          Vt = (0, jt.c)();
        tt.gM(Ht.Zc, (tt => {
          let {
            eId: Vt,
            settings: Ot
          } = tt;
          (0, it.e)(Vt);
          for (const et in Ot)(0, it.c)(Vt, et, Ot[et]);
          if ("canSee" in Ot && et.mJ.ptt(Vt, "hidingMeshManager")) {
            const tt = et.mJ.getState(Vt, "hidingMeshManager");
            tt.canSee = (0, Yt.b)("canSee", Ot.canSee), tt._forceUpdate = !0
          }
        })), tt.gM(Ht.J, (tt => {
          let {
            pO: Vt,
            xO: Ot,
            animationScript: qt,
            TO: Dt,
            gO: mt,
            sO: dt,
            nO: Ht
          } = tt;
          Vt = (0, It.c)(Vt);
          const Xt = null === qt && null !== dt ? (0, kt.d)(dt, Ht) : qt;
          (0, jt.c)().client.gameRecorder.recordAnimateEntity(Vt, Ot, Xt, Dt, mt), (0, Rt.e)(et).animations.animateEntity(Vt, Ot, qt, Dt, mt, dt, Ht), null !== qt || Vt === et.lL && Ot === Gt.g.Emote && (0, jt.c)().client.cameraController.endTemporaryThirdPerson()
        })), tt.gM(Ht.te, (tt => {
          (0, Bt.d)(tt)
        })), tt.gM(Ht.yd, (tt => {
          for (const et of tt)(0, ot.x)(et);
          Nt.j.sw("playerCosmeticsUpdated", tt, !0)
        })), tt.gM(Ht.N, (tt => {
          for (const Vt of tt)(0, At.g)(et, Vt)
        })), tt.gM(Ht._c, (tt => {
          (0, Zt.m)(et, (0, Qt.r)(tt))
        })), tt.gM(Ht.bd, (tt => {
          zt.g[tt.WD] ? (0, Zt.m)(et, {
            ...zt.g[tt.WD],
            pos1: tt.pos1,
            pos2: tt.pos2
          }) : console.error(`Unknown preset id: ${tt.WD}`)
        })), tt.gM(Ht.vd, (tt => {
          var et, Vt;
          let {
            tt: Ot,
            et: qt,
            Vt: Dt,
            Ot: mt
          } = tt, {
            Dt: dt,
            dt: Ht
          } = null !== mt && void 0 !== mt ? mt : {};
          const {
            qt: Xt
          } = null !== mt && void 0 !== mt ? mt : {};
          dt = null !== (et = dt) && void 0 !== et ? et : void 0, Ht = null !== (Vt = Ht) && void 0 !== Vt ? Vt : void 0, "string" === typeof Xt && this.setUpQueuedEntity(Xt), (0, jt.c)().client.gameRecorder.recordPlaySound(Ot, qt, Dt, mt), rt.e.play((0, Ut.g)(Ot), qt, Xt, dt, Ht).rate(Dt)
        })), tt.gM(Ht.uf, (tt => {
          for (const et in tt) {
            const Ot = tt[et];
            for (const tt in Ot) Vt.client.meshCreator.handleParticleSystemUpdate(et, tt, Ot[tt])
          }
        }))
      }
    }
    var xt = Vt(38040),
      Tt = Vt(38005);
    class gt {
      constructor(tt) {
        this.ql = tt
      }
      register(tt) {
        const et = this.ql,
          Vt = (0, jt.c)();

        function Ot() {
          return et.mJ.tVt(et.lL)
        }
        tt.gM(Ht.tc, (tt => {
          let {
            Sq: Vt,
            cq: Ot,
            Rq: qt,
            Iq: Dt,
            Pq: mt,
            Zq: dt,
            Lq: jt,
            Fq: Ht,
            kq: Xt
          } = tt;
          if (!et.mJ.ptt(Vt, "itemState")) return void(0, xt.k)(et, Vt, [mt, dt, jt], Ot, {
            amount: qt,
            attributes: JSON.parse(Dt),
            Fq: Ht,
            size: Xt
          });
          const Qt = et.mJ.getState(Vt, "itemState");
          Qt.amount = qt, Qt.Fq = Ht, Qt.creationTime = Date.now(), (0, Tt.setServerPosition)(et.mJ.getState(Vt, "smoothToServerPos"), mt, dt, jt)
        })), tt.gM(Ht.mb, (tt => {
          (0, Rt.e)(et).setCantPickUp(tt, !0), et.mJ.ptt(tt, "itemState") && (et.mJ.getState(tt, "itemState").Fq = !0)
        })), tt.gM(Ht.ce, (tt => {
          (0, Rt.e)(et).setCantPickUp(tt, !1), et.mJ.ptt(tt, "itemState") && (et.mJ.getState(tt, "itemState").Fq = !1)
        })), tt.gM(Ht.qd, (tt => {
          let {
            pickUpItems: et,
            pickUpAckSeq: Vt
          } = tt;
          for (const {
              name: qt,
              amount: Dt,
              attributes: mt
            }
            of et) Ot().pickUpItem({
            name: qt,
            amount: Dt,
            typeObj: xt.A[qt],
            attributes: mt
          });
          (0, jt.c)().client.inventoryPrediction.serverChangeApplied(Vt)
        })), tt.gM(Ht.Ue, (tt => {
          let {
            index: Vt,
            name: Ot,
            amount: qt,
            attributes: Dt,
            setSlotAckSeq: mt
          } = tt;
          const dt = et.mJ.eVt(et.lL);
          (Vt < dt.playerInventory.numSlots || dt.cD || dt.inCreative) && dt.setItemSlot(Vt, Ot, qt, Dt), (0, jt.c)().client.inventoryPrediction.serverChangeApplied(mt)
        })), tt.gM(Ht.sc, (tt => {
          (0, jt.c)().client.inventoryPrediction.acknowledge(tt)
        })), tt.gM(Ht.I, (tt => {
          let {
            pV: et,
            xV: Vt,
            TV: Ot,
            gV: qt
          } = tt;
          (0, jt.c)().client.itemDropPrediction.onActionItemDrops(et, Vt, Ot, qt)
        })), tt.gM(Ht.Eb, (tt => {
          Ot().clearInventory(), (0, jt.c)().client.inventoryPrediction.serverChangeApplied(tt)
        })), tt.gM(Ht.Ve, (tt => {
          Nt.j.sw("setSelectedInventorySlotI", tt, !0)
        })), tt.gM(Ht.wb, (tt => {
          let {
            Bq: Vt,
            pq: Ot,
            xq: qt,
            Tq: Dt,
            nq: mt,
            tD: dt,
            eD: Ht,
            VD: Xt
          } = tt;
          const Qt = et.mJ.eVt(et.lL);
          if (dt) {
            const {
              qD: tt,
              DD: et
            } = Xt;
            return (0, jt.c)().client.inventoryPrediction.K9(et, (() => {
              Qt.chestRefreshed(Ot, qt, Dt, Ht, tt)
            })) && Nt.j.sw("chestToggleFromServer", !1, !0), void Nt.j.sw("chestRefreshedFromServer")
          }(Vt || Qt.cD) && (Vt ? (Qt.chestOpened(Ot, qt, Dt, mt, Ht), null !== mt && (0, jt.c)().client.ironChestPasskeyCache.onChestOpened(Dt, mt)) : Qt.chestClosed(), Nt.j.sw("chestToggleFromServer", Vt, !0))
        })), tt.gM(Ht.Wb, (tt => {
          let {
            craftingRecipeItemName: Ot,
            recipesForItem: qt
          } = tt;
          Ot ? Vt.craftingManager.editRecipesForPlayer(et.lL, Ot, qt) : Vt.craftingManager.resetAllPlayerRecipes(et.lL), Nt.j.sw("craftingRecipesEdited", {
            itemName: Ot,
            recipesForItem: qt
          })
        })), tt.gM(Ht.Xd, (tt => {
          let {
            iV: et,
            YV: Vt,
            BV: qt
          } = tt;
          Ot().removeItemName(et, Vt), (0, jt.c)().client.inventoryPrediction.serverChangeApplied(qt)
        })), tt.gM(Ht.Ud, (tt => {
          let {
            Gq: Ot
          } = tt;
          Vt.craftingManager.removeRecipes(et.lL, Ot), Nt.j.sw("craftingRecipesEdited", {
            itemName: Ot,
            recipesForItem: []
          })
        }))
      }
    }
    var st = Vt(6667),
      nt = Vt(37654),
      te = Vt(404),
      ee = Vt.n(te),
      Ve = Vt(4655),
      Oe = Vt(37951),
      qe = Vt(38495),
      De = Vt(37647);
    class me {
      constructor(tt, et) {
        this.ql = tt, this.setUpQueuedEntity = et
      }
      register(tt) {
        const et = this.ql,
          Vt = (0, jt.c)();
        tt.gM(Ht.jf, (tt => {
          let {
            Ge: Vt,
            ze: qt,
            oe: Dt,
            Ue: mt
          } = tt;
          const dt = [qt, Dt, mt];
          et.mJ.setPosition(et.lL, dt), (0, Ot.sendColyMessage)(Ht.Ng, {
            Qj: Vt,
            lj: Ve.h
          }), Nt.j.sw("localPlayerTeleported", {
            pos: dt,
            isCorrection: !1
          })
        })), tt.gM(Ht.jd, (tt => {
          let {
            UD: et,
            AD: Vt,
            iD: Ot,
            YD: qt
          } = tt;
          this.setUpQueuedEntity(et);
          const Dt = [Vt, Ot, qt];
          Nt.j.sw(`otherPlayerTeleported|${et}`, {
            pos: Dt
          })
        })), tt.gM(Ht.Ed, (tt => {
          let {
            fq: Vt,
            wq: qt,
            yq: Dt,
            Nq: mt,
            aq: dt,
            Mq: jt,
            bq: Xt,
            Cq: Qt,
            Jq: lt,
            hq: Et
          } = tt;
          const ft = [qt, Dt, mt];
          et.mJ.setPosition(et.lL, ft);
          const wt = et.mJ.fet(et.lL),
            yt = et.mJ.YG(et.lL);
          ee().set(yt.QG, 0, 0, 0), ee().set(yt.lG, 0, 0, 0), ee().set(yt.Dy, dt, jt, Xt), yt.wG(), wt._flying = null !== Et, Et ? (wt.flyAccel.vq = Et.vq, wt.flyAccel.Wq = Et.Wq) : wt.flyAccel.reset(), Qt && wt.movementType === st.m.GLIDING && (wt.uq = Qt.uq, ee().copy(wt.Kq, Qt.Kq)), (0, Ot.sendColyMessage)(Ht.Ng, {
            Qj: Vt,
            lj: Ve.h
          }), Nt.j.sw("localPlayerTeleported", {
            pos: ft,
            isCorrection: !0
          })
        })), tt.gM(Ht.Xe, (tt => {
          let {
            vehicleEId: et,
            overrides: Vt
          } = tt;
          (0, jt.c)().applyRiddenVehicleSettingOverrides(et, Vt)
        })), tt.gM(Ht.wf, (tt => {
          let {
            GV: Vt,
            zV: Ot,
            oV: qt
          } = tt;
          const Dt = et.mJ.fet(et.lL).physicsState.type === st.n.SLEEPING && Vt === st.n.DEFAULT;
          (0, jt.c)().updatePositionAndPhysics(et.lL, {
            type: Vt,
            tier: Ot
          }, !0, qt), Dt && (0, jt.c)().updateHeldVehicleStatus()
        })), tt.gM(Ht.qb, (tt => {
          let {
            Pe: Vt,
            Ze: Ot
          } = tt;
          et.mJ.xet(et.lL).setPose(Vt, Ot)
        })), tt.gM(Ht.De, (tt => {
          const {
            nX: Vt,
            RVt: Ot
          } = (0, nt.d)([tt[0], tt[1], tt[2]]);
          De.c.setLookDirection(et, Vt, Ot), (0, Oe.r)(Vt, Ot);
          const qt = et.mJ.xet(et.lL);
          qt && (qt.heading = Vt)
        })), tt.gM(Ht.He, (tt => {
          Vt.client.cameraController.setCameraZoom(tt)
        })), tt.gM(Ht.af, (tt => {
          let {
            cV: Ot,
            RV: qt
          } = tt;
          Vt.shakePlayerCamera(et.lL, Ot, qt)
        })), tt.gM(Ht.zc, (tt => {
          et.mJ.xet(et.lL).jumpMultiplier.setMultiplierType("jumpEffectAmount", tt)
        })), (0, Ot.onGameResetOnce)((() => {
          et.mJ.xet(et.lL).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), tt.gM(Ht.L, (tt => {
          et.mJ.YG(et.lL).applyImpulse(tt)
        })), tt.gM(Ht.$e, (tt => {
          const Vt = et.mJ.YG(et.lL);
          ee().set(Vt.QG, 0, 0, 0), ee().set(Vt.lG, 0, 0, 0), ee().copy(Vt.Dy, tt), Vt.wG()
        })), (0, Ot.onGameResetOnce)((() => {
          (0, qe.setFloatingYValue)(et.mJ.getState(et.lL, "physics"), et.mJ.RY(et.lL), null)
        })), tt.gM(Ht.$b, (tt => {
          let {
            rV: Vt,
            UV: Ot,
            AV: qt
          } = tt;
          const Dt = (0, It.c)(Vt);
          if (Dt === et.lL) {
            const tt = et.mJ.RY(et.lL).position;
            qt ??= Math.floor(tt[1]) - 1, (0, qe.setFloatingYValue)(et.mJ.getState(et.lL, "physics"), et.mJ.RY(et.lL), Ot ? qt : null)
          }(0, Rt.e)(et).setFloating(Dt, Ot, qt);
          const mt = et.mJ.getState(Dt, "floating");
          mt && (mt.isFloating = Ot, mt.AV = Ot ? qt : null)
        }))
      }
    }

    function de(tt, et, Vt, Ot, qt) {
      let Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!tt.mJ.Tet(tt.lL)) return console.log("Got resync inven but don't have inven component"), void et.acknowledge(Ot);
      Dt && console.error("Had to sync inven"), et.K9(Ot, qt) && Vt.sw("chestToggleFromServer", !1, !0), Vt.sw("syncedInvenFromServer")
    }
    var je = Vt(39202),
      He = Vt(39208),
      Xe = Vt(2047);
    var Qe = Vt(4641);

    function le(tt) {
      const et = tt.sQ;
      let Vt = 0,
        qt = -1,
        mt = -1 / 0,
        dt = null,
        jt = !0;
      const Xt = () => {
        if (++Vt % 10 !== 0) return;
        const Xt = (0, Ot.getLastReceivedPacketId)();
        if (Xt <= qt) return;
        const [Qt, lt, Et] = tt.mJ.YM(tt.lL), ft = ! function(tt) {
          var et;
          let Vt = null === (et = tt.mJ.ZVt(tt.lL)) || void 0 === et ? void 0 : et.nE;
          if (void 0 === Vt) return !1;
          const Ot = new Set;
          for (; void 0 !== Vt && !Ot.has(Vt);) {
            var qt;
            Ot.add(Vt);
            const et = tt.mJ.getState(Vt, "smoothToServerPos"),
              Dt = Array.isArray(et) ? null : null === et || void 0 === et ? void 0 : et.serverPosition;
            if (Dt) {
              const et = tt.mJ.YM(Vt);
              if (Math.abs(et[0] - Dt[0]) > 10 || Math.abs(et[1] - Dt[1]) > 10 || Math.abs(et[2] - Dt[2]) > 10) return !0
            }
            Vt = null === (qt = tt.mJ.ZVt(Vt)) || void 0 === qt ? void 0 : qt.nE
          }
          return !1
        }(tt) && function(tt, et, Vt, Ot) {
          const qt = Dt.e.ff;
          for (let Dt = 0; Dt < tt.length; Dt++) {
            const mt = tt[Dt];
            if (!(0, Qe.i)(et, Vt, Ot, mt[0] * qt, mt[1] * qt, mt[2] * qt)) return !1
          }
          return !0
        }(et.Bw.jf, Qt, lt, Et), wt = null === dt || Math.abs(Qt - dt[0]) > 8 || Math.abs(lt - dt[1]) > 8 || Math.abs(Et - dt[2]) > 8, yt = !jt || wt || performance.now() - mt >= 1e4;
        jt = ft, ft && yt && (qt = Xt, mt = performance.now(), dt = [Qt, lt, Et], (0, Ot.sendColyMessage)(Ht.vg, {
          Nd: Xt
        }))
      };
      return tt.on("BQ", Xt), () => {
        tt.off("BQ", Xt)
      }
    }
    var Ee = Vt(39216),
      fe = Vt(1613),
      we = Vt(2839),
      ye = Vt(1894),
      Ne = Vt(2990),
      ae = Vt(4948);
    class Me {
      constructor(tt, et, Vt) {
        this.ql = tt, this.gameNameWithVariation = et, this.connectionResume = Vt, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        ae.d.reset(), (0, je.e)()
      }
      startChunkReports() {
        const tt = function(tt) {
            let et = null,
              Vt = -1 / 0,
              qt = null;
            const Dt = () => {
                qt = null;
                const Dt = Math.ceil(tt.rW[0]),
                  mt = Math.ceil(tt.rW[1]);
                et && et[0] === Dt && et[1] === mt || (et = [Dt, mt], Vt = performance.now(), (0, Ot.sendColyMessage)(Ht.tg, {
                  gm: Dt,
                  sm: mt
                }))
              },
              mt = () => {
                null === qt && (qt = setTimeout(Dt, Math.max(0, Vt + 250 - performance.now())))
              };
            return Dt(), tt.on("addRemoveDistanceChanged", mt), () => {
              tt.off("addRemoveDistanceChanged", mt), null !== qt && (clearTimeout(qt), qt = null)
            }
          }(this.ql.sQ),
          et = le(this.ql);
        this.stopChunkReports = () => {
          tt(), et()
        }
      }
      restartChunkStreaming() {
        (0, Oe.k)(this.ql, (0, jt.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Ee.e)), this.startChunkReports()
      }
      register(tt) {
        const et = this.ql,
          Vt = (0, jt.c)();
        tt.gM(Ht.Wc, (tt => {
          Mt.b.applyNewClientOptions(tt)
        })), tt.gM(Ht.td, (tt => {
          we.c.onReceiveColyseusPing(tt)
        })), tt.gM(Ht.Je, (tt => {
          let {
            key: et,
            value: Vt
          } = tt;
          (0, bt.setCookie)(this.gameNameWithVariation, et, Vt)
        })), tt.gM(Ht.Qe, (tt => {
          Nt.j.sw("setDiscordReportKey", tt)
        })), (0, Ot.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), tt.gM(Ht.nc, (qt => {
          const {
            Xt: Dt,
            Qt: mt
          } = qt;
          if ((0, Ot.setAdjustment)(mt), this.connectionResume.onInitialInfo(qt.lt, qt.Et), Ot.offlineInputReplay.Av(qt.ft), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Dt);
            try {
              null === qt.wt && (0, jt.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), St(et.sQ), Mt.b.apply({
                shopInfo: null,
                _shopVersion: Xe.e
              });
              const Vt = et.mJ.eVt(et.lL);
              Vt.cD && (Vt.chestClosed(), Nt.j.sw("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Nt.j.sw("initInfoReceived", tt)
            } finally {
              const tt = null === qt.wt ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = tt, this.connectionResume.onResumeInitialInfo(qt.wt, (() => {
                tt.endSeq = (0, jt.c)().client.inventoryPrediction.lastActionSeq
              })), null === tt && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Dt), ye.c.markAdmitted(), (0, Oe.m)(et), Nt.j.sw("loadingScreenState", "loadingPage:loadingWorld"), et.Ttt = Dt, et.mJ.ptt(et.lL, et.mJ.names.entityName) && et.mJ.ZZ(et.lL, et.mJ.names.entityName), (0, jt.c)().setEntityName(et.Ttt, (0, jt.c)().getRawEntityName(et.lL)), et.dL[et.Ttt] = {}, et.mJ.RZ(et.lL, et.mJ.names.entityName), Nt.j.sw("initInfoReceived", tt), this.startChunkReports(), Vt.client.onServerConnectionFinalised()
        })), tt.gM(Ht.se, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const tt = this.replayResume;
            if (this.replayResume = null, !tt) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: Vt
            } = (0, jt.c)().client, {
              sync: qt
            } = tt, Dt = new Set(Ot.offlineInputReplay.takeDroppedActions());
            if (qt) {
              var mt;
              const Ot = null !== (mt = tt.endSeq) && void 0 !== mt ? mt : Vt.lastActionSeq;
              Vt.forget((tt => tt > qt.DD && tt <= Ot || Dt.has(tt))), de(et, Vt, Nt.j, qt.DD, qt.load)
            } else Vt.dropPending(), Vt.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), tt.gM(Ht.gf, (tt => {
          let {
            SD: Vt,
            LD: Ot,
            DD: qt
          } = tt;
          const {
            inventoryPrediction: Dt
          } = (0, jt.c)().client, mt = () => {
            et.mJ.eVt(et.lL).loadFromString(Vt)
          };
          this.replayResume && (this.replayResume.sync = {
            DD: qt,
            load: mt
          }), de(et, Dt, Nt.j, qt, mt, Ot)
        })), tt.gM(Ht.Jd, (tt => {
          let {
            type: et,
            location1: Vt,
            location2: Ot,
            location3: qt,
            score: Dt
          } = tt;
          (0, Ne.logProgressionEvent)({
            type: et,
            location1: Vt,
            location2: Ot,
            location3: qt,
            score: Dt
          })
        })), tt.gM(Ht.qe, (tt => {
          let {
            type: et,
            resourceType: Vt,
            amount: Ot,
            category: qt,
            itemName: Dt
          } = tt;
          (0, Ne.logResourceEvent)({
            type: et,
            resourceType: Vt,
            amount: Ot,
            category: qt,
            itemName: Dt
          })
        })), tt.gM(Ht.Ec, (tt => {
          let {
            leaveEventType: et,
            category: Vt,
            subCategory: Ot,
            value: qt
          } = tt;
          (0, Ne.updateLeaveValue)({
            leaveEventType: et,
            category: Vt,
            subCategory: Ot,
            value: qt
          })
        })), tt.gM(Ht.Rb, (tt => {
          let {
            cat1: et,
            cat2: Vt,
            cat3: Ot,
            value: qt
          } = tt;
          (0, Ne.logCustomAnalyticsEvent)({
            cat1: et,
            cat2: Vt,
            cat3: Ot,
            value: qt
          })
        })), tt.gM(Ht.Bc, (tt => {
          (0, jt.c)().client.leaveGameUnwanted({
            reason: tt,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, fe.navigatePreserveSearch)("/")
        })), tt.gM(Ht.ye, (tt => {
          Nt.j.sw("serverUpdating", Date.now() + tt, !0)
        })), tt.gM(Ht.Uc, He.e), tt.gM(Ht.Oc, (tt => {
          console.error(`[logErrorToConsole]: ${tt}`)
        }))
      }
    }
    var be = Vt(39221),
      Je = Vt(39226),
      Ce = Vt(1103),
      ue = Vt(39224),
      Ke = Vt(2486),
      he = Vt(3722);
    class ve {
      constructor(tt, et) {
        this.ql = tt, this.clientApi = et
      }
      register(tt) {
        const et = this.ql,
          Vt = (0, jt.c)();
        tt.gM(Ht.vb, (tt => {
          let {
            chatMsgId: et,
            content: Vt,
            chatterEId: Ot
          } = tt;
          Nt.j.sw("chat", {
            serverChatMsgId: et,
            content: Vt,
            chatterEId: Ot
          }, !0)
        })), tt.gM(Ht.mf, (tt => {
          Nt.j.sw("TopRightHelper", tt, !0)
        })), tt.gM(Ht.if, (tt => {
          (0, be.c)(tt)
        })), tt.gM(Ht.Cc, (tt => {
          let {
            category: et,
            timeframe: Vt,
            data: Ot
          } = tt;
          Nt.j.sw("leaderboardResponse", {
            category: et,
            timeframe: Vt,
            data: Ot
          })
        })), tt.gM(Ht.ef, (() => {
          Nt.j.sw("showShopTutorial", null, !0)
        })), tt.gM(Ht.Gd, (tt => {
          Nt.j.sw("progressBarUpdate", tt, !0)
        })), tt.gM(Ht.rc, (tt => {
          Nt.j.sw("middleScreenBarInitiate", {
            duration: tt.zq,
            oq: tt.oq,
            horizBarRemOffset: tt.rq
          }, !0)
        })), tt.gM(Ht._d, (() => {
          Nt.j.sw("middleScreenBarRemove", !0)
        })), tt.gM(Ht.Ne, (tt => {
          let {
            id: et,
            position: Vt,
            style: Ot,
            Ae: qt,
            Ye: Dt
          } = tt;
          Nt.j.sw("setDirectionArrow", {
            id: et,
            position: Vt,
            style: Ot,
            text: (0, Ht.v)(qt),
            Ye: Dt
          }, !0)
        })), tt.gM(Ht.Bb, (tt => {
          let {
            id: et
          } = tt;
          Nt.j.sw("clearDirectionArrow", {
            id: et
          }, !0)
        })), tt.gM(Ht.Nb, (tt => {
          (0, he.onCosmeticPackGranted)(tt)
        })), tt.gM(Ht.ed, (tt => {
          let {
            id: et,
            gt: Vt
          } = tt;
          const {
            type: qt,
            params: Dt
          } = (0, Je.f)(Vt), mt = {
            ...Dt
          };
          for (const Ot of Je.e) Ot in mt && mt[Ot] && (mt[Ot] = (0, Ht.v)(mt[Ot]));
          ae.d.queueQTE(et, qt, mt).getResult().then((tt => {
            "boolean" === typeof tt && (0, Ot.sendColyMessage)(Ht.qi, {
              qteId: et,
              qteResponse: tt
            })
          }))
        })), tt.gM(Ht.$d, (tt => {
          ae.d.cancelQTE(tt)
        })), (0, Ot.onGameResetOnce)((() => {
          ae.d.reset()
        })), tt.gM(Ht.gd, (tt => {
          let {
            id: et,
            clientParameters: Vt
          } = tt;
          (0, je.i)(et, Vt)
        })), tt.gM(Ht.ae, (tt => {
          (0, je.l)(tt)
        })), tt.gM(Ht.pf, (tt => {
          let {
            text: et,
            id: Vt,
            destructive: qt
          } = tt;
          (0, je.n)(Vt, et, qt, (tt => {
            (0, Ot.sendColyMessage)(Ht.Oj, {
              aj: Vt,
              Mj: tt,
              bj: 5
            })
          }))
        })), tt.gM(Ht.nd, (tt => {
          let {
            info: et
          } = tt;
          Nt.j.sw("overShopInfo", et, !0)
        })), tt.gM(Ht.cc, (tt => {
          let {
            jt: Vt,
            Ht: Ot
          } = tt;
          this.clientApi.openShop(et.lL, Vt, Ot)
        })), tt.gM(Ht.ac, (tt => {
          let {
            zD: et,
            oD: Vt,
            rD: Ot
          } = tt;
          Nt.j.sw("flyingMiddleMessage", {
            content: (0, Ht.v)(et),
            oD: Vt,
            rD: Ot
          }, !0)
        })), tt.gM(Ht.Ff, (tt => {
          const et = tt === Ce.h ? null : {
            message: `Currently loaded as variation: ${tt}`,
            type: "Warning"
          };
          Nt.j.sw("showPermanentBottomMessage", et, !0)
        })), tt.gM(Ht.ec, (tt => {
          let {
            messageType: et,
            data: Ot
          } = tt;
          (0, ue.f)(et) ? (0, ue.b)(et, Ot) : ("freeCamPerms" === et && Vt.client.freeCameraController.setPerms(Ot.key, Ot.value), Vt.client.triggerGameCallback("onReceivedMessageFromServer", et, Ot))
        })), tt.gM(Ht.Ib, Ke.h)
      }
    }
    class We {
      constructor(tt, et, Vt, Ot) {
        this.gameNameWithVariation = tt, this.ql = Vt, this.connectionResume = Ot, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new Ct.e(et, this.ql)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Ot.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      lXt(tt) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Ct.e(tt, this.ql), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(tt, et) {
        const Vt = this.ql,
          Ot = tt => {
            this.stateReplicationHandler.setUpIfQueued(tt)
          };
        new Me(Vt, this.gameNameWithVariation, this.connectionResume).register(tt), new ct(Vt).register(tt), new gt(Vt).register(tt), new Ft(Vt, Ot).register(tt), new pt(Vt, Ot).register(tt), new ve(Vt, et).register(tt), new me(Vt, Ot).register(tt)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Se = Vt(39232),
      ce = Vt(39241),
      Re = Vt(738),
      Ie = Vt(3012);
    class Pe {
      constructor(tt, et, Vt, Ot) {
        this.msgHandler = Vt, this.listener = Ot, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Se.c({
          reconnect: tt,
          isLive: () => Ot.isLive(),
          onReconnected: tt => {
            this.resumeOnRoom(tt)
          },
          onGaveUp: (tt, et) => {
            Ot.onGaveUp(tt, et)
          },
          freeze: et,
          releaseSeat: et => {
            tt(et).then((tt => {
              tt.leave(!0)
            }), (tt => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", tt)
            }))
          }
        })
      }
      onInitialInfo(tt, et) {
        this.session.onInitialInfo(tt, et)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(tt, et) {
        if (this.session.onResuming(), null === tt) {
          try {
            (0, jt.c)().client.itemDropPrediction.reset()
          } catch (Vt) {
            console.error("Error dropping the item drop predictions on resuming", Vt)
          }
          return Ot.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, jt.c)().client.itemDropPrediction.onResumeReplayOffered(), Ot.offlineInputReplay.replayFrom(tt.Nt, et)
      }
      onResumed(tt) {
        this.setSuspended(!1), (0, Ot.resendBeacons)();
        try {
          tt()
        } catch (et) {
          console.error("Error completing the resume", et)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(tt) {
        const et = (0, Re.i)((() => tt.connection.isOpen));
        tt.eJ(et);
        const Vt = new ce.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(tt, "silent"), tt.leave(!1))
        }));
        tt.onStateChange((() => {
          Vt.heard()
        }));
        const Ot = et => {
          et.persisted || tt.leave(!0)
        };
        window.addEventListener("pagehide", Ot), tt.eJ(((et, Vt) => {
          if (tt === this.attachedRoom && this.listener.isLive()) return (0, Dt.h)(et) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${et}, reconnecting`), this.listener.onDropped(et, Vt), void this.onConnectionDropped(tt, String(et))) : void this.listener.onRoomLeft(et, Vt)
        })), this.attachedRoom = tt, this.detachRoomListeners = () => {
          et(), Vt.dispose(), window.removeEventListener("pagehide", Ot)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(tt) {
        tt !== this.suspended && (this.suspended = tt, (0, Ot.setConnectionSuspended)(tt), (0, jt.c)().client.itemDropPrediction.setSuspended(tt))
      }
      detachRoom() {
        var tt;
        null === (tt = this.detachRoomListeners) || void 0 === tt || tt.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(tt, et) {
        (0, Ie.reportClientError)("disconnect", "Left room", et), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Ot.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(tt.reconnectionToken)
      }
      resumeOnRoom(tt) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), tt.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, Bt.r)(), Ot.offlineInputReplay.onConnectionReplaced(), this.msgHandler.lXt(tt), this.listener.onReconnected(tt), this.attachRoom(tt)
      }
    }
    var Ze = Vt(3055),
      Le = Vt(3059),
      Fe = Vt(1423),
      ke = Vt(1397),
      Ge = Vt(4830),
      ze = Vt(3217),
      oe = Vt(1167),
      re = Vt(37967),
      Ue = Vt(39249),
      Ae = Vt(9133),
      ie = Vt(39257),
      Ye = Vt(1298),
      Be = Vt(36738),
      pe = Vt(39263),
      xe = Vt(1820),
      Te = Vt(2854);

    function ge(tt) {
      var et, Vt;
      if ("object" !== typeof tt || null === tt) return {
        errType: typeof tt
      };
      const Ot = tt;
      return {
        errType: null !== (et = null === (Vt = tt.constructor) || void 0 === Vt ? void 0 : Vt.name) && void 0 !== et ? et : "",
        errName: "string" === typeof Ot.name ? Ot.name : "",
        eventType: "string" === typeof Ot.type ? Ot.type : "",
        errStack: "string" === typeof Ot.stack ? Ot.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function se(tt) {
      if ("undefined" !== typeof ProgressEvent && tt instanceof ProgressEvent) return !0;
      if (!(tt instanceof Error)) return !1;
      const et = tt.code;
      return "ServerError" === tt.name && void 0 === et || "AbortError" === tt.name || "seat reservation expired." === tt.message || "early_leave" === tt.message
    }(0, wt.k)((tt => {
      (0, Ie.reportClientError)("wasm_net", tt)
    }));
    let ne = !0;

    function tV() {
      ne = !1
    }
    class eV {
      constructor(tt) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.ql = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = tt.gameNameWithVariation, this.lobbyName = tt.lobbyName, this.colyClient = tt.colyClient, this.userContext = tt.userContext
      }
      async connectToServer(tt, et, Vt) {
        Mt.b.reset(), tt.dL = {
          [tt.lL]: {}
        }, tt.Ttt = void 0, (0, Bt.r)(), (0, jt.c)().removeAllEntityNames(), (0, jt.c)().setEntityName(tt.lL, this.userContext.getPlayerName()), (0, Fe.o)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, xe.h)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const mt = performance.now();
        Vt.aborted || (0, ke.q)("wasm_core_ready", mt);
        const dt = (0, ie.c)(this.userContext, (() => {
          const {
            roomName: Ot,
            joinOptions: qt
          } = (0, Jt.e)(this.userContext, this.gameNameWithVariation, this.lobbyName, et, (tt => ze.e.isUsingCustomGameTexturePack(tt)));
          return qt.joinAdHold = this.joinAdHold, qt.renderBackend = (0, Te.e)(tt.Bf), (0, Ue.g)((() => this.colyClient.joinOrCreateUntil(Vt, Ot, qt)), Vt)
        }));
        return Nt.j.sw("loadingScreenState", "loadingPage:joiningLobby"), await dt.then((et => {
          if (this.joinedAt = performance.now(), (0, ke.q)("wasm_joined", this.joinedAt), this.ql = tt, this.joinAdHold) {
            const tt = (0, xe.v)((() => {
              et.send(qt.h), (0, ke.i)(), ye.c.markJoinAdEnded()
            }));
            et.eJ(tt), (0, Ot.onGameResetOnce)(tt)
          }
          const Vt = new yt(et);
          this.connectionResume = new Pe((tt => this.colyClient.reconnect(tt)), (et => {
            tt.oW(et)
          }), Vt, {
            isLive: () => (0, jt.c)().client.getMsgHandler() === Vt,
            onDropped: (tt, et) => {
              (0, Le.h)(tt) || this.logUnrecognisedConnectionLoss(tt, void 0, {
                site: "drop",
                closeReason: null !== et && void 0 !== et ? et : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (tt, et) => {
              this.onRoomLeft(tt, et)
            },
            onReconnected: tt => {
              this.incomingMsgInitialisor.lXt(tt), this.checkSendPath = (0, re.i)(Vt, tt, wt.l)
            },
            onGaveUp: (tt, et) => {
              this.onResumeGaveUp(tt, et)
            }
          }), this.connectionResume.attachRoom(et), (0, Ot.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Dt = Vt.send,
            mt = Vt.gM,
            dt = Vt.tOt.send,
            Ht = Vt.tOt.gM,
            Xt = Vt.XXt;
          this.checkSendPath = (0, re.i)(Vt, et, wt.l);
          const Qt = setInterval((() => {
            Dt === Vt.send && mt === Vt.gM && dt === Vt.tOt.send && Ht === Vt.tOt.gM && Xt === Vt.XXt || tV(), this.checkSendPath()
          }), 1e4);
          return (0, Ot.onGameResetOnce)((() => {
            clearInterval(Qt)
          })), {
            success: !0,
            successDetails: Vt
          }
        })).catch((et => {
          if (Vt.aborted && et === (0, Ye.f)(Vt)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (et instanceof Be.c) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: et.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, pe.b)(et, et.leg)
            }
          };
          tt.yw(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${et.code}\n`, et);
          const Ot = et.code;
          return Ot === Dt.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Dt.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Ot, et.message, {
                site: "join",
                sinceJoinStart: (0, Le.d)(performance.now() - mt),
                ...ge(et)
              }, se(et)),
              rematch: (0, Ue.c)(et),
              gameRefused: (0, Ae.e)(et),
              joinFailure: (0, pe.b)(et, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(tt, et, Vt) {
        Nt.j.sw("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new We(this.gameNameWithVariation, et.tOt, tt, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const qt = et.yXt();
        this.incomingMsgInitialisor.setupOnMessageListeners(qt, Vt), (0, Ot.onConnectionToServerReady)(qt, et), this.joinAdHold && ye.c.markAdmissionAwaited(), qt.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(tt, et) {
        (0, oe.Nw)(new Error("Reconnect failed"), {
          ...(0, Ze.i)(et),
          game: this.gameNameWithVariation
        }), (0, Ie.reportClientError)("disconnect", "Reconnect failed", et.reason), (0, jt.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !tt,
          canPlayAgain: tt,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, fe.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Le.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(tt, et) {
        var Vt;
        if (tt === Dt.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${tt}`), tt === Dt.b.serverUpdating.code) return (0, Ie.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, jt.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.ql.yw(`Kicked from server with code ${tt}`, new Error);
        const Ot = Object.keys(Dt.b).find((et => Dt.b[et].code === tt));
        (0, Ie.reportClientError)("disconnect", "Left room", null !== Ot && void 0 !== Ot ? Ot : String(tt));
        const qt = this.onConnectionToServerLost(tt, void 0, {
          site: "leave",
          closeReason: null !== et && void 0 !== et ? et : "",
          sinceJoined: this.sinceJoined()
        });
        (0, jt.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${qt.reason}`,
          canReconnect: qt.canReconnect,
          requiresRefresh: qt.requiresRefresh,
          automaticallyReconnect: null !== (Vt = qt.automaticallyReconnect) && void 0 !== Vt && Vt
        }), (0, fe.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Ge.B)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, fe.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(tt, et, Vt) {
        var Ot;
        let qt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Ot = et) && void 0 !== Ot && Ot.endsWith(Dt.l) && (this.userContext.invalidateTrafficCode(), et = et.replace(Dt.l, "")), tt === Dt.b.outdatedVersion.code) return console.error("Outdated client with version ", mt.d, ", refreshing page"), (0, bt.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (tt === Dt.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, bt.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const mt in Dt.b) {
          const {
            code: Vt,
            text: Ot,
            canReconnect: qt
          } = Dt.b[mt];
          if (Vt === tt) {
            console.log("matched known error", tt, "leaving game");
            return {
              reason: "" !== Ot ? Ot : et || `Code: ${tt}`,
              requiresRefresh: !1,
              canReconnect: qt,
              automaticallyReconnect: Vt === Dt.b.customGameUpdated.code || Vt === Dt.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Le.e)(tt) || qt ? console.warn("Connection lost", tt, et) : this.logUnrecognisedConnectionLoss(tt, et, Vt), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${tt}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: qt ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(tt, et, Vt) {
        (0, oe.Nw)(new Error("Unrecognised connection loss"), {
          code: String(tt),
          cause: null !== et && void 0 !== et ? et : "",
          ...Vt,
          game: this.gameNameWithVariation,
          ...(0, Le.k)()
        })
      }
    }
  },
  39158: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => pV,
      g: () => tO
    });
    var Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt, It, Pt, Zt, Lt, Ft, kt, Gt, zt, ot, rt, Ut, At, it, Yt, Bt, pt, xt, Tt, gt, st, nt, te, ee, Ve, Oe, qe, De, me, de, je, He, Xe, Qe, le, Ee, fe, we, ye, Ne, ae, Me, be, Je, Ce, ue, Ke, he, ve, We, Se, ce, Re, Ie, Pe, Ze, Le, Fe, ke, Ge, ze, oe, re, Ue, Ae, ie, Ye, Be, pe, xe, Te, ge, se, ne = Vt(31),
      tV = Vt(37401),
      eV = Vt(39169),
      VV = Vt(39177),
      OV = Vt(9348),
      qV = Vt(707),
      DV = Vt(705),
      mV = Vt(37028);
    let dV = (Ot = (0, OV.type)("number"), qt = (0, OV.type)("number"), Dt = (0, OV.type)("number"), mt = (0, OV.type)("number"), dt = (0, OV.type)("number"), jt = (0, OV.type)("number"), Ht = (0, OV.type)("string"), Xt = class extends OV.Schema {
        constructor() {
          super(...arguments), (0, eV.b)(this, "id", Qt, this), (0, eV.b)(this, "amount", lt, this), (0, eV.b)(this, "x", Et, this), (0, eV.b)(this, "y", ft, this), (0, eV.b)(this, "z", wt, this), (0, eV.b)(this, "size", yt, this), (0, eV.b)(this, "attributes", Nt, this)
        }
      }, Qt = (0, VV.e)(Xt.prototype, "id", [Ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lt = (0, VV.e)(Xt.prototype, "amount", [qt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Et = (0, VV.e)(Xt.prototype, "x", [Dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ft = (0, VV.e)(Xt.prototype, "y", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wt = (0, VV.e)(Xt.prototype, "z", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yt = (0, VV.e)(Xt.prototype, "size", [jt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Nt = (0, VV.e)(Xt.prototype, "attributes", [Ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Xt),
      jV = (Mt = (0, OV.type)("string"), bt = (0, OV.type)("string"), Jt = class extends OV.Schema {
        constructor() {
          super(...arguments), (0, eV.b)(this, "itemName", Ct, this), (0, eV.b)(this, "enchantmentTier", ut, this)
        }
      }, Ct = (0, VV.e)(Jt.prototype, "itemName", [Mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ut = (0, VV.e)(Jt.prototype, "enchantmentTier", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Jt),
      HV = (Kt = (0, OV.type)("string"), ht = (0, OV.type)("string"), vt = (0, OV.type)("number"), Wt = (0, OV.type)("number"), St = (0, OV.type)("number"), ct = (0, OV.type)("float32"), Rt = (0, OV.type)("float32"), It = (0, OV.type)("float32"), Pt = (0, OV.type)("string"), Zt = (0, OV.type)(["number"]), Lt = (0, OV.type)("boolean"), Ft = class extends OV.Schema {
        constructor() {
          super(...arguments), (0, eV.b)(this, "type", kt, this), (0, eV.b)(this, "name", Gt, this), (0, eV.b)(this, "x", zt, this), (0, eV.b)(this, "y", ot, this), (0, eV.b)(this, "z", rt, this), (0, eV.b)(this, "xRotation", Ut, this), (0, eV.b)(this, "yRotation", At, this), (0, eV.b)(this, "zRotation", it, this), (0, eV.b)(this, "followingEId", Yt, this), (0, eV.b)(this, "followingOffset", Bt, this), (0, eV.b)(this, "shouldMatchFollowingEntityRotation", pt, this)
        }
      }, kt = (0, VV.e)(Ft.prototype, "type", [Kt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Gt = (0, VV.e)(Ft.prototype, "name", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), zt = (0, VV.e)(Ft.prototype, "x", [vt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ot = (0, VV.e)(Ft.prototype, "y", [Wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rt = (0, VV.e)(Ft.prototype, "z", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ut = (0, VV.e)(Ft.prototype, "xRotation", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), At = (0, VV.e)(Ft.prototype, "yRotation", [Rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), it = (0, VV.e)(Ft.prototype, "zRotation", [It], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Yt = (0, VV.e)(Ft.prototype, "followingEId", [Pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Bt = (0, VV.e)(Ft.prototype, "followingOffset", [Zt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new OV.ArraySchema(0, 0, 0)
        }
      }), pt = (0, VV.e)(Ft.prototype, "shouldMatchFollowingEntityRotation", [Lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Ft),
      XV = (xt = (0, OV.type)("float32"), Tt = (0, OV.type)("float32"), gt = (0, OV.type)("boolean"), st = (0, OV.type)("boolean"), nt = (0, OV.type)("float32"), te = (0, OV.type)("boolean"), ee = (0, OV.type)("string"), Ve = (0, OV.type)("string"), Oe = (0, OV.type)("string"), qe = (0, OV.type)("string"), De = (0, OV.type)(["number"]), me = (0, OV.type)("number"), de = (0, OV.type)({
        map: jV
      }), je = class extends HV {
        constructor() {
          super(...arguments), (0, eV.b)(this, "scale", He, this), (0, eV.b)(this, "speed", Xe, this), (0, eV.b)(this, "jumping", Qe, this), (0, eV.b)(this, "crouching", le, this), (0, eV.b)(this, "cameraPitch", Ee, this), (0, eV.b)(this, "armSwinging", fe, this), (0, eV.b)(this, "heldItemName", we, this), (0, eV.b)(this, "heldItemEnchantmentTier", ye, this), (0, eV.b)(this, "pose", Ne, this), (0, eV.b)(this, "ridingVehicleEId", ae, this), (0, eV.b)(this, "meshOffset", Me, this), (0, eV.b)(this, "baseRenderHeading", be, this), (0, eV.b)(this, "armour", Je, this)
        }
      }, He = (0, VV.e)(je.prototype, "scale", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Xe = (0, VV.e)(je.prototype, "speed", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Qe = (0, VV.e)(je.prototype, "jumping", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), le = (0, VV.e)(je.prototype, "crouching", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Ee = (0, VV.e)(je.prototype, "cameraPitch", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fe = (0, VV.e)(je.prototype, "armSwinging", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), we = (0, VV.e)(je.prototype, "heldItemName", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ye = (0, VV.e)(je.prototype, "heldItemEnchantmentTier", [Ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ne = (0, VV.e)(je.prototype, "pose", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), ae = (0, VV.e)(je.prototype, "ridingVehicleEId", [qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Me = (0, VV.e)(je.prototype, "meshOffset", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new OV.ArraySchema(0, 0, 0)
        }
      }), be = (0, VV.e)(je.prototype, "baseRenderHeading", [me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Je = (0, VV.e)(je.prototype, "armour", [de], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new OV.MapSchema
        }
      }), je),
      QV = (Ce = (0, OV.type)("string"), ue = (0, OV.type)("string"), Ke = (0, OV.type)("string"), he = (0, OV.type)("uint8"), ve = class extends XV {
        constructor() {
          super(...arguments), (0, eV.b)(this, "variation", We, this), (0, eV.b)(this, "ownerDbId", Se, this), (0, eV.b)(this, "metaInfo", ce, this), (0, eV.b)(this, "aiState", Re, this)
        }
      }, We = (0, VV.e)(ve.prototype, "variation", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Se = (0, VV.e)(ve.prototype, "ownerDbId", [ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), ce = (0, VV.e)(ve.prototype, "metaInfo", [Ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Re = (0, VV.e)(ve.prototype, "aiState", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ve);
    Ie = (0, OV.type)("string"), Pe = (0, OV.type)("string"), Ze = (0, OV.type)("string"), Le = (0, OV.type)("string"), Fe = class extends HV {
      constructor() {
        super(...arguments), (0, eV.b)(this, "meshKind", ke, this), (0, eV.b)(this, "meshOpts", Ge, this), (0, eV.b)(this, "pose", ze, this), (0, eV.b)(this, "leaderboardTop", oe, this)
      }
    }, ke = (0, VV.e)(Fe.prototype, "meshKind", [Ie], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Ge = (0, VV.e)(Fe.prototype, "meshOpts", [Pe], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ze = (0, VV.e)(Fe.prototype, "pose", [Ze], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), oe = (0, VV.e)(Fe.prototype, "leaderboardTop", [Le], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function lV(tt) {
      return Object.keys(OV.Metadata.getFields(tt))
    }
    const EV = lV(QV);
    for (const eO of qV.t)
      if (!EV.includes(eO)) throw new Error(`Mob Schema is missing a networked property: "${eO}"`);
    const fV = lV((re = (0, OV.type)("string"), Ue = (0, OV.type)("float32"), Ae = (0, OV.type)("float32"), ie = (0, OV.type)("float32"), Ye = (0, OV.type)("float32"), Be = class extends HV {
      constructor() {
        super(...arguments), (0, eV.b)(this, "soundName", pe, this), (0, eV.b)(this, "volume", xe, this), (0, eV.b)(this, "refDistance", Te, this), (0, eV.b)(this, "maxHearDist", ge, this), (0, eV.b)(this, "rate", se, this)
      }
    }, pe = (0, VV.e)(Be.prototype, "soundName", [re], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), xe = (0, VV.e)(Be.prototype, "volume", [Ue], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Te = (0, VV.e)(Be.prototype, "refDistance", [Ae], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return mV.f
      }
    }), ge = (0, VV.e)(Be.prototype, "maxHearDist", [ie], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return mV.b
      }
    }), se = (0, VV.e)(Be.prototype, "rate", [Ye], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Be));
    for (const eO of DV.d)
      if (!fV.includes(eO)) throw new Error(`AudioEntity Schema is missing a replicated property: "${eO}"`);
    var wV = Vt(38657),
      yV = Vt(1325),
      NV = Vt(710),
      aV = Vt(38457),
      MV = Vt(4339),
      bV = Vt(391),
      JV = Vt(37510),
      CV = Vt(38347),
      uV = Vt(2290),
      KV = Vt(37480),
      hV = Vt(38686),
      vV = Vt(37634),
      WV = Vt(404),
      SV = Vt.n(WV),
      cV = Vt(38192),
      RV = Vt(37317),
      IV = Vt(38321),
      PV = Vt(38363);
    class ZV {
      constructor(tt, et) {
        this.bloxd = tt, this.eId = et, this.ql = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.df = !1, this.ql = tt.ql
      }
      initClient(tt) {
        var et, Vt, Ot;
        this.colyseusEntity = tt, this.meshKind = tt.meshKind, this.meshOpts = tt.meshOpts, this.leaderboardTop = tt.leaderboardTop, this.ql.mJ.add([tt.x, tt.y, tt.z], 1, 1, null, null, !1, !1, this.eId), this.ql.mJ.RZ(this.eId, "smoothToServerPos");
        const qt = "Person" === this.meshKind;
        this.ql.mJ.RZ(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...qt ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: qt ? [{
            nodeName: "HeadMesh",
            softTolerance: hV.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = ne.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (tt => {
          this.updateHidingMeshMgr()
        }));
        const Dt = () => {
          const tt = this.ql.mJ.oet(this.eId);
          if (!tt) return;
          const et = (0, vV.k)(this.eId);
          if ("number" === typeof tt.RP) {
            var Vt, Ot, qt, Dt;
            const mt = null === (Vt = (0, uV.n)("head", null === (qt = this.getSpec()) || void 0 === qt || null === (Dt = qt.opts.textures) || void 0 === Dt ? void 0 : Dt.head)) || void 0 === Vt || null === (Ot = Vt.personModel) || void 0 === Ot ? void 0 : Ot.fullBody;
            return this.ql.Bf.xI.setPickable(tt.RP, et && !mt), void(0, RV.updatePersonAttachmentPickability)(this.ql, this.eId, et)
          }
          const mt = tt.mesh;
          if (mt)
            for (const dt of [mt, ...mt.getChildMeshes(!1)]) "Gw" in dt && !dt.name.startsWith("Cape|") && (dt.Gw = et)
        };
        this.canAttackSub = ne.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Dt), this.interactableSub = ne.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, Dt), this.overlayColourSub = ne.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (tt => {
          this.updateOverlayColour(tt)
        })), this.opacitySub = ne.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (tt => {
          this.updateOpacity(tt)
        })), this.zIndexSub = ne.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (tt => {
          this.updateZIndex(tt)
        }));
        const mt = this.ql.dL[this.ql.lL][this.eId];
        this.updateOverlayColour(null !== (et = null === mt || void 0 === mt ? void 0 : mt.overlayColour) && void 0 !== et ? et : null), this.updateOpacity(null !== (Vt = null === mt || void 0 === mt ? void 0 : mt.opacity) && void 0 !== Vt ? Vt : 1), this.updateZIndex(null !== (Ot = null === mt || void 0 === mt ? void 0 : mt.zIndex) && void 0 !== Ot ? Ot : 0), this.multilineTextBoxSub = (0, KV.p)(this.ql, this.eId)
      }
      onChangeClient(tt, et) {
        if ("xRotation" === tt || "yRotation" === tt || "zRotation" === tt)(0, KV.t)(this.ql, this.eId, tt, et);
        else if ("pose" === tt) {
          const tt = this.ql.mJ.xet(this.eId);
          tt && (tt.pose = et || "standing")
        } else "meshKind" === tt || "meshOpts" === tt ? (this[tt] = et, this.queueMeshRebuild()) : "name" === tt && "" !== et ? this.updateHidingMeshMgr() : "leaderboardTop" === tt && (this.leaderboardTop = et, ne.j.sw(`leaderboardTop|${this.eId}`, et))
      }
      disposeClient() {
        this.df = !0, this.ql.mJ.deleteEntity(this.eId), ne.j.unsubscribe(this.canSeeSub), ne.j.unsubscribe(this.canAttackSub), ne.j.unsubscribe(this.interactableSub), ne.j.unsubscribe(this.overlayColourSub), ne.j.unsubscribe(this.opacitySub), ne.j.unsubscribe(this.zIndexSub), ne.j.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var tt, et;
        return {
          canSee: null !== (tt = null === (et = this.ql.dL[this.ql.lL][this.eId]) || void 0 === et ? void 0 : et.canSee) && void 0 !== tt && tt,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var tt, et, Vt;
        const {
          ql: Ot
        } = this, {
          mJ: qt
        } = Ot, Dt = this.getCurrentHidingMeshMgrState();
        if ((0, bV.te)(this.previousHidingMeshManagerState, Dt)) return;
        if (this.previousHidingMeshManagerState = Dt, qt.ZZ(this.eId, "hidingMeshManager"), null === (tt = Ot.dL[Ot.lL][this.eId]) || void 0 === tt || !tt.canSee) return;
        const mt = this.getSpec();
        if (!mt) return;
        const {
          type: dt,
          opts: jt
        } = mt;
        "Person" === dt && (jt.textures = (0, uV.v)(jt.textures)), jt.eId = this.eId, qt.RZ(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var tt, et, Vt;
            "Leaderboard" === dt && (jt.leaderboardTop = this.leaderboardTop);
            const Dt = this.bloxd.client.meshCreator.getEntityMesh(dt, jt, (tt => {
              var et, Vt;
              if ("number" === typeof tt) {
                var qt, Dt, mt;
                const et = Ot.Bf.xI;
                et.setEntityId(tt, this.eId);
                const Vt = "Person" === dt && (null === (qt = (0, uV.n)("head", null === (mt = jt.textures) || void 0 === mt ? void 0 : mt.head)) || void 0 === qt || null === (Dt = qt.personModel) || void 0 === Dt ? void 0 : Dt.fullBody);
                return void et.setPickable(tt, (0, vV.k)(this.eId) && !Vt)
              }
              const Ht = tt;
              for (const dt of [Ht, ...Ht.getChildMeshes(!1)]) void 0 === dt.Gw || dt.name.startsWith("Cape|") || (dt.Gw = (0, vV.k)(this.eId), dt.metadata ??= new Ot.Bf.zw, dt.metadata.eId = this.eId);
              this.updateOpacity(null !== (et = null === (Vt = Ot.dL[Ot.lL][this.eId]) || void 0 === Vt ? void 0 : Vt.opacity) && void 0 !== et ? et : 1)
            }));
            if (!Dt) return;
            const {
              RP: mt,
              mesh: Ht,
              meshOffset: Xt,
              nameYOffset: Qt,
              modelLoaded: lt
            } = Dt;
            null === lt || void 0 === lt || lt.then((() => {
              var tt;
              (null === (tt = qt.oet(this.eId)) || void 0 === tt ? void 0 : tt.mesh) === Ht && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Et = null === mt ? null : Ot.Bf.xI.FOt(mt, 0);
            if (qt.RZ(this.eId, qt.names.mesh, {
                RP: mt,
                DOt: Et,
                mesh: Ht,
                kdt: !1,
                dOt: "Leaderboard" !== dt,
                offset: Xt.slice(),
                Fdt: "ParticleEmitter" === dt && jt.followTargetMeshOffset ? tt => {
                  var et;
                  SV().copy(tt, Xt);
                  const Vt = null === (et = qt.ZVt(this.eId)) || void 0 === et ? void 0 : et.nE,
                    Ot = void 0 === Vt ? null : qt.xet(Vt);
                  if (Ot) {
                    var Dt, mt;
                    const et = this.bloxd.getEntityHeading(null !== (Dt = Ot.ridingVehicleEId) && void 0 !== Dt ? Dt : Vt, !0),
                      qt = Math.sin(et),
                      dt = Math.cos(et);
                    tt[0] += Ot.meshOffset[0] * dt + Ot.meshOffset[2] * qt, tt[1] += Ot.meshOffset[1], tt[2] += Ot.meshOffset[2] * dt - Ot.meshOffset[0] * qt;
                    const jt = null !== (mt = Ot.ridingVehicleEId) && void 0 !== mt ? mt : null;
                    null !== jt && (0, PV.e)(this.ql, jt, tt)
                  }
                } : null
              }), "Person" === dt) {
              var ft, wt, yt, Nt;
              qt.RZ(this.eId, qt.names.meshAttachments, {
                personFullBody: null !== (ft = null === (wt = (0, uV.n)("head", null === (Nt = jt.textures) || void 0 === Nt ? void 0 : Nt.head)) || void 0 === wt || null === (yt = wt.personModel) || void 0 === yt ? void 0 : yt.fullBody) && void 0 !== ft && ft
              });
              for (const tt of yV.A) {
                var Mt, bt, Jt;
                const et = null === (Mt = jt.textures) || void 0 === Mt ? void 0 : Mt[tt];
                et && null !== (bt = (0, uV.n)(tt, et)) && void 0 !== bt && null !== (Jt = bt.attachments) && void 0 !== Jt && Jt.length && CV.b.Player.meshApi.updatePlayerCosmetic(this.eId, mt, tt, et)
              }
              qt.RZ(this.eId, qt.names.moveState), qt.RZ(this.eId, "updateWalkingState", {
                RP: mt,
                DOt: Et,
                walkingLegSwingDuration: hV.v
              }), qt.RZ(this.eId, "humanoidMesh", {
                RP: mt,
                DOt: Et,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), qt.RZ(this.eId, "animator", {
                RP: mt,
                DOt: Et,
                modelLifeformType: "Player"
              }), IV.g.hasAnimation("Person") && qt.RZ(this.eId, "rigAnimation", {
                target: "Person",
                RP: mt
              }), qt.xet(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === dt && null !== mt) {
              qt.RZ(this.eId, "animator", {
                RP: mt,
                DOt: Et,
                modelLifeformType: null
              });
              const tt = (0, aV.m)(jt.blockName);
              null !== tt && qt.RZ(this.eId, "rigAnimation", {
                target: tt,
                RP: mt
              })
            }
            qt.djt(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Qt
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === jt.autoRotate && (qt.ZZ(this.eId, "meshRotation"), qt.RZ(this.eId, "autoRotate"));
            const {
              lineToEId: Ct
            } = jt;
            (0, NV.B)(Ct) || qt.RZ(this.eId, "lineToEntity", {
              lineToEId: Ct
            });
            const ut = Ot.dL[Ot.lL][this.eId];
            this.updateOverlayColour(null !== (tt = null === ut || void 0 === ut ? void 0 : ut.overlayColour) && void 0 !== tt ? tt : null), this.updateOpacity(null !== (et = null === ut || void 0 === ut ? void 0 : ut.opacity) && void 0 !== et ? et : 1), this.updateZIndex(null !== (Vt = null === ut || void 0 === ut ? void 0 : ut.zIndex) && void 0 !== Vt ? Vt : 0)
          },
          removeMeshComponent: () => {
            "Person" !== dt && "BloxdBlock" !== dt || qt.ZZ(this.eId, "rigAnimation"), qt.ZZ(this.eId, qt.names.mesh), qt.ptt(this.eId, qt.names.meshAttachments) && qt.ZZ(this.eId, qt.names.meshAttachments), qt.ZZ(this.eId, "entityName"), qt.ZZ(this.eId, "autoRotate"), qt.ZZ(this.eId, "lineToEntity"), "Person" === dt ? (qt.ZZ(this.eId, qt.names.moveState), qt.ZZ(this.eId, "updateWalkingState"), qt.ZZ(this.eId, "humanoidMesh"), qt.ZZ(this.eId, "animator")) : "BloxdBlock" === dt && qt.ZZ(this.eId, "animator")
          },
          hideDist: null !== (et = jt.hideDist) && void 0 !== et ? et : 80,
          movingHideDist: null !== (Vt = jt.hideDist) && void 0 !== Vt ? Vt : 120,
          displayOutsideLoadedChunk: jt.hideDist > 100,
          immediatelyUpdate: !0,
          mj: "BloxdBlock" === dt ? jt.blockName : dt
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.df || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, MV.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(tt) {
        var et, Vt;
        if ("Person" !== this.meshKind) return;
        let Ot = new JV.e(0, 0, 0, 0);
        if (null !== tt) {
          const et = (0, bV.cb)(tt);
          Ot = new JV.e(et[0] / 255, et[1] / 255, et[2] / 255, .5)
        }
        const qt = null !== (et = null === (Vt = this.ql.mJ.oet(this.eId)) || void 0 === Vt ? void 0 : Vt.RP) && void 0 !== et ? et : null;
        null !== qt && CV.b.Player.meshApi.updateMeshOverlayColour(qt, Ot)
      }
      updateZIndex(tt) {
        var et;
        if ("Person" !== this.meshKind) return;
        const Vt = null === (et = this.ql.mJ.oet(this.eId)) || void 0 === et ? void 0 : et.RP;
        "number" === typeof Vt && this.ql.Bf.xI.setRenderingGroupId(Vt, tt)
      }
      updateOpacity(tt) {
        const et = this.ql.mJ.oet(this.eId);
        et && ("number" !== typeof et.RP ? et.mesh && "ParticleEmitter" !== this.meshKind && (0, cV.g)(et.mesh, tt) : CV.b.Player.meshApi.updateMeshOpacity(et.RP, tt))
      }
    }
    var LV = Vt(39167);
    class FV {
      constructor(tt, et) {
        this.eId = et, this.ql = void 0, this.schema = void 0, this.ql = tt.ql
      }
      initClient(tt) {
        this.schema = tt, this.ql.mJ.add([tt.x, tt.y, tt.z], .1, .1, null, null, !1, !1, this.eId), this.ql.mJ.RZ(this.eId, "smoothToServerPos"), LV.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(tt) {
        DV.d.includes(tt) && LV.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        LV.c.remove(this.eId), this.ql.mJ.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: tt,
          volume: et,
          refDistance: Vt,
          maxHearDist: Ot,
          rate: qt
        } = this.schema;
        return {
          soundName: tt,
          volume: et,
          refDistance: Vt,
          maxHearDist: Ot,
          rate: qt
        }
      }
    }
    var kV = Vt(3751),
      GV = Vt(37002),
      zV = Vt(6667),
      oV = Vt(38040),
      rV = Vt(2848),
      UV = Vt(38404),
      AV = Vt(9308),
      iV = Vt(38697),
      YV = Vt(38005),
      BV = Vt(3012);
    class pV {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.tOt = tt, this.ql = et, this.setupBudgetMs = Vt, this.now = Ot, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.df = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.bM = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const tt of this.promotedSetups) {
            this.promotedSetups.delete(tt);
            const et = this.queuedSetups.get(tt);
            et && (this.queuedSetups.delete(tt), this.timedSetup(et, tt))
          }
        }, this.createStateCallbacks = (0, AV.getStateCallbacks)(tt), this.roomStateCallbacks = this.createStateCallbacks(tt.state), this.roomState = tt.state, this.setupBudgetLeftMs = Vt, this.lastRefillMs = Ot()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.tOt.onStateChange(this.setUpPromoted), this.ql.on("beforeInputs", this.onFrame), this.ql.on("BQ", this.bM)
      }
      setUpQueuedEntities(tt) {
        var et;
        if ((null === (et = (0, rV.c)().client.getMsgHandler()) || void 0 === et ? void 0 : et.tOt) !== this.tOt) return this.ql.off("beforeInputs", this.onFrame), this.ql.off("BQ", this.bM), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (tt && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (SV().copy(xV, this.ql.mJ.YM(this.ql.lL)); this.setupBudgetLeftMs > 0;) {
            const tt = this.nearestQueued(xV);
            if (null === tt) return;
            this.setUpIfQueued(tt), this.setUpPromoted()
          }
      }
      nearestQueued(tt) {
        let et = null,
          Vt = 1 / 0;
        return this.queuedSetups.forEach(((Ot, qt) => {
          const Dt = function(tt, et) {
            return (et.x - tt[0]) ** 2 + (et.y - tt[1]) ** 2 + (et.z - tt[2]) ** 2
          }(tt, Ot);
          (null === et || Dt < Vt) && (et = qt, Vt = Dt)
        })), et
      }
      setUpOrQueue(tt, et) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(tt, et) ? this.timedSetup(tt, et) : this.queuedSetups.set(et, tt)
      }
      mustSetUpNow(tt, et) {
        const Vt = this.ql.Ttt;
        if (et === Vt) return !0;
        const Ot = this.roomState.entities.get(Vt);
        return !(!Ot || Ot.ridingVehicleEId !== et && Ot.followingEId !== et) || (TV(tt.type) === wV.d || (0, rV.c)().getFollowingEntities(et).length > 0)
      }
      setUpIfQueued(tt) {
        const et = this.queuedSetups.get(tt);
        et && (this.queuedSetups.delete(tt), this.timedSetup(et, tt))
      }
      promoteIfQueued(tt) {
        null !== tt && this.queuedSetups.has(tt) && this.promotedSetups.add(tt)
      }
      timedSetup(tt, et) {
        const Vt = this.now();
        this.setupEntity(tt, et), this.setupBudgetLeftMs -= this.now() - Vt
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.qJ(((tt, et) => {
          this.ql.Ttt ? this.setUpOrQueue(tt, et) : this.deferEntitySetupUntilInitInfo(tt, et)
        })), this.roomStateCallbacks.entities.nS(((tt, et) => {
          const Vt = this.deferredSetups.get(et);
          Vt && (ne.j.unsubscribe(Vt), this.deferredSetups.delete(et)), this.queuedSetups.delete(et), this.detach(et), (0, rV.c)().client.disposeEntity(et)
        }))
      }
      deferEntitySetupUntilInitInfo(tt, et) {
        const Vt = ne.j.yN("initInfoReceived", (() => {
          this.deferredSetups.delete(et), this.setUpOrQueue(tt, et)
        }));
        this.deferredSetups.set(et, Vt), (0, kV.onGameResetOnce)((() => {
          this.deferredSetups.get(et) === Vt && (ne.j.unsubscribe(Vt), this.deferredSetups.delete(et)), (0, rV.c)().updatePositionAndPhysics(this.ql.lL, {
            type: zV.n.DEFAULT,
            tier: null
          }, !0), (0, rV.c)().takeHeldPlayerBodySize(this.ql.lL);
          const tt = this.ql.mJ.fet(this.ql.lL);
          tt && (tt.movementType = zV.m.NORMAL)
        }))
      }
      setupEntity(tt, et) {
        const Vt = et === this.ql.Ttt;
        if (Vt)(0, rV.c)().client.vY(this.ql.lL, null, null);
        else {
          const {
            type: Vt
          } = tt, Ot = TV(Vt);
          if (void 0 === Ot) return void
          function(tt, et) {
            const Vt = String(tt);
            if (gV.has(Vt)) return;
            gV.add(Vt);
            const Ot = Vt.length > 80 ? `${Vt.slice(0,80)}...` : Vt,
              qt = `No client handler for entity type ${JSON.stringify(Ot)}, so entity ${et} is not set up`;
            console.warn(qt), (0, BV.reportClientError)("uncaught", qt, "unknown_entity_type")
          }(Vt, et);
          (0, rV.c)().client.vY(et, tt, new Ot((0, rV.c)(), et, Vt))
        }
        const Ot = this.createStateCallbacks(tt);
        if (Vt) return this.setupMapSchemaCallbacks(et, tt, Ot, "armour"), this.setupScalarField(et, tt, Ot, "scale"), this.setupScalarField(et, tt, Ot, "ridingVehicleEId"), this.setupScalarField(et, tt, Ot, "followingEId"), this.setupScalarField(et, tt, Ot, "followingOffset"), void this.setupScalarField(et, tt, Ot, "shouldMatchFollowingEntityRotation");
        for (const qt of lV(tt.constructor)) tt[qt] instanceof OV.MapSchema ? this.setupMapSchemaCallbacks(et, tt, Ot, qt) : this.setupScalarField(et, tt, Ot, qt)
      }
      setupMapSchemaCallbacks(tt, et, Vt, Ot) {
        const qt = Vt[Ot],
          Dt = new Map;
        qt.qJ(((Vt, qt) => {
          if (this.onEntityFieldChange(tt, et, Ot, {
              key: qt,
              value: Vt
            }), !(Vt instanceof OV.Schema)) return;
          const mt = this.createStateCallbacks(Vt),
            dt = [];
          for (const Dt of lV(Vt.constructor)) dt.push(this.listenForFutureChanges(mt, Dt, (() => {
            this.onEntityFieldChange(tt, et, Ot, {
              key: qt,
              value: Vt
            })
          })));
          Dt.set(qt, (() => {
            for (const tt of dt) tt()
          }))
        })), qt.nS(((Vt, qt) => {
          var mt;
          null === (mt = Dt.get(qt)) || void 0 === mt || mt(), Dt.delete(qt), this.onEntityFieldChange(tt, et, Ot, {
            key: qt,
            value: null
          })
        })), this.addDetacher(tt, (() => {
          for (const tt of Dt.values()) tt();
          Dt.clear()
        }))
      }
      setupScalarField(tt, et, Vt, Ot) {
        this.onEntityFieldChange(tt, et, Ot, et[Ot]);
        const qt = this.listenForFutureChanges(Vt, Ot, (Vt => {
          this.onEntityFieldChange(tt, et, Ot, Vt)
        }));
        this.addDetacher(tt, qt)
      }
      addDetacher(tt, et) {
        let Vt = this.detachers.get(tt);
        Vt || (Vt = [], this.detachers.set(tt, Vt)), Vt.push(et)
      }
      detach(tt) {
        for (const Vt of null !== (et = this.detachers.get(tt)) && void 0 !== et ? et : []) {
          var et;
          Vt()
        }
        this.detachers.delete(tt)
      }
      listenForFutureChanges(tt, et, Vt) {
        return tt.listen(et, Vt, !1)
      }
      onEntityFieldChange(tt, et, Vt, Ot) {
        switch (Vt) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Ot);
            const et = this.ql.mJ.xet((0, GV.c)(tt));
            et && (et.ridingVehicleEId = Ot);
            break
          }
          case "armour":
            this.handleArmourChange(tt, Ot);
            break;
          case "followingEId":
            this.promoteIfQueued(Ot), this.handleFollowingEIdChange(tt, et, Ot);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(tt, Vt, Ot);
            break;
          case "scale":
            this.handleScaleChange(tt, Ot);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(tt, Ot);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(tt, Ot);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(tt, Ot);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(tt, Vt, Ot)
        }(0, rV.c)().client.updateEntityField(tt, Vt, Ot)
      }
      handleArmourChange(tt, et) {
        var Vt, Ot;
        const {
          key: qt,
          value: Dt
        } = et;
        (0, CV.w)(tt, qt, null !== (Vt = null === Dt || void 0 === Dt ? void 0 : Dt.itemName) && void 0 !== Vt ? Vt : null, null !== (Ot = null === Dt || void 0 === Dt ? void 0 : Dt.enchantmentTier) && void 0 !== Ot ? Ot : null)
      }
      handleFollowingEIdChange(tt, et, Vt) {
        const Ot = (0, GV.c)(tt),
          qt = Ot === this.ql.lL;
        if (this.ql.mJ.ZZ(Ot, this.ql.mJ.names.GJ), Vt) this.ql.mJ.ZZ(Ot, "smoothToServerPos"), this.ql.mJ.RZ(Ot, this.ql.mJ.names.GJ, {
          nE: (0, GV.c)(Vt),
          offset: Array.from(et.followingOffset),
          LVt: et.shouldMatchFollowingEntityRotation,
          zVt: !0,
          oVt: (tt, Ot) => {
            if (SV().copy(tt, et.followingOffset), et.ridingVehicleEId === Vt) {
              const et = (0, GV.c)(Vt),
                qt = (0, rV.c)().getEntityHeading(et, Ot);
              SV().tm(tt, tt, SV().ZERO, qt)
            }
          }
        });
        else if (!qt) {
          this.ql.mJ.ptt(Ot, "smoothToServerPos") || this.ql.mJ.RZ(Ot, "smoothToServerPos");
          const tt = this.ql.mJ.getState(Ot, "smoothToServerPos"),
            et = this.ql.mJ.RY(Ot).position;
          (0, YV.setServerPosition)(tt, et[0], et[1], et[2])
        }
      }
      handleRotationChange(tt, et, Vt) {
        const Ot = "xRotation" === et ? 0 : "yRotation" === et ? 1 : 2;
        for (const qt of (0, rV.c)().getFollowingEntities(tt)) {
          const tt = this.ql.mJ.getState(qt, "meshRotation"),
            et = this.ql.mJ.ZVt(qt);
          tt && et.LVt && (tt.serverSetRotation[Ot] = Vt)
        }
      }
      handleScaleChange(tt, et) {
        const Vt = (0, GV.c)(tt);
        if (ne.j.sw(`entityScale|${Vt}`, et), Vt === this.ql.lL) {
          var Ot;
          (0, rV.c)().removeFromEyeHeightCache(Vt);
          const tt = this.ql.mJ.fet(this.ql.lL),
            et = null !== (Ot = null === tt || void 0 === tt ? void 0 : tt.physicsState) && void 0 !== Ot ? Ot : {
              type: zV.n.DEFAULT,
              tier: null
            };
          return void(0, rV.c)().updatePositionAndPhysics(this.ql.lL, et, !1)
        }
        const qt = (0, rV.c)().getLifeformType(Vt);
        if (null === qt) return;
        const {
          physicsBodyWidth: Dt,
          physicsBodyHeight: mt
        } = (0, iV.d)(et, qt);
        this.ql.mJ.IVt(Vt, Dt, mt, Dt)
      }
      handleBaseRenderHeadingChange(tt, et) {
        const Vt = this.ql.mJ.getState(tt, "meshRotation");
        Vt && (Vt.baseRenderRotation[1] = et);
        for (const Ot of (0, rV.c)().getFollowingEntities(tt)) {
          const tt = this.ql.mJ.getState(Ot, "meshRotation"),
            Vt = this.ql.mJ.ZVt(Ot);
          tt && Vt.LVt && (tt.baseRenderRotation[1] = et)
        }
      }
      handleFollowingOffsetChange(tt, et) {
        const Vt = this.ql.mJ.ZVt((0, GV.c)(tt));
        if (Vt && Vt.offset) {
          const tt = et ? Array.from(et) : SV().ZERO;
          Vt.offset[0] = tt[0], Vt.offset[1] = tt[1], Vt.offset[2] = tt[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(tt, et) {
        const Vt = this.ql.mJ.ZVt((0, GV.c)(tt));
        Vt && (Vt.LVt = null === et || void 0 === et || et)
      }
      handlePositionChange(tt, et, Vt) {
        if (this.ql.mJ.ptt(tt, "smoothToServerPos")) {
          const Ot = this.ql.mJ.getState(tt, "smoothToServerPos");
          (0, YV.setServerPositionAxis)(Ot, sV[et], Vt)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.qJ(((tt, et) => {
          this.allItems[et] = tt, (0, oV.k)(this.ql, et, [tt.x, tt.y, tt.z], tt.id, {
            amount: tt.amount,
            attributes: JSON.parse(tt.attributes),
            Fq: (0, tV.e)(this.ql).cantPickUpItem(et),
            size: tt.size,
            predictedAt: (0, rV.c)().client.itemDropPrediction.onServerItemAdded(et)
          });
          const Vt = this.createStateCallbacks(tt);
          for (const Ot of lV(dV)) this.onItemFieldChange(et, Ot, tt[Ot]), this.addDetacher(et, this.listenForFutureChanges(Vt, Ot, (tt => {
            this.onItemFieldChange(et, Ot, tt)
          })))
        })), this.roomStateCallbacks.items.nS(((tt, et) => {
          delete this.allItems[et], this.detach(et), (0, rV.c)().client.itemDropPrediction.onServerItemRemoved(et), this.ql.mJ.ptt(et, this.ql.mJ.names.itemState) && this.ql.mJ.deleteEntity(et), (0, tV.e)(this.ql).disposeEntity(et)
        }))
      }
      onItemFieldChange(tt, et, Vt) {
        if (et in sV) {
          if (this.ql.mJ.ptt(tt, "itemState")) {
            const Ot = this.ql.mJ.getState(tt, "smoothToServerPos");
            (0, YV.setServerPositionAxis)(Ot, sV[et], Vt), (0, rV.c)().client.itemDropPrediction.onServerItemMoved(tt)
          }
          return
        }
        if (!this.ql.mJ.ptt(tt, "itemState")) return;
        const Ot = this.ql.mJ.getState(tt, "itemState");
        "amount" === et && Vt !== Ot.amount && (Ot.creationTime = Date.now()), Ot[et] = "attributes" === et ? JSON.parse(Vt) : Vt
      }
      dispose() {
        if (!this.df) {
          this.df = !0, this.ql.off("beforeInputs", this.onFrame), this.ql.off("BQ", this.bM), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const tt of this.deferredSetups.values()) ne.j.unsubscribe(tt);
          this.deferredSetups.clear(), this.ql.mJ.ZZ(this.ql.lL, this.ql.mJ.names.GJ);
          for (const tt in this.allItems) this.ql.mJ.deleteEntity(tt), delete this.allItems[tt];
          for (const tt of [...this.detachers.keys()]) this.detach(tt);
          (0, tV.e)(this.ql).clear();
          for (const tt of (0, rV.c)().client.iterateEntityIds())(0, rV.c)().client.disposeEntity(tt)
        }
      }
    }
    const xV = [0, 0, 0];

    function TV(tt) {
      if ("string" !== typeof tt) return;
      const et = tt.indexOf("|"),
        Vt = -1 === et ? tt : tt.slice(0, et),
        Ot = tO();
      return Object.hasOwn(Ot, Vt) ? Ot[Vt] : void 0
    }
    const gV = new Set;
    const sV = {
      x: 0,
      y: 1,
      z: 2
    };
    let nV = null;

    function tO() {
      return null !== nV || (nV = {
        ...Object.fromEntries(DV.f.map((tt => {
          const {
            mj: et
          } = (0, UV.c)(tt);
          return [tt, et]
        }))),
        Pebble: wV.d,
        Snowball: wV.d,
        "Snowball Launcher": wV.d,
        "Reinforced Pebble": wV.d,
        Bullet: wV.d,
        "Reinforced Ball": wV.d,
        Ball: wV.d,
        Mango: wV.d,
        "Moonstone Orb": wV.d,
        ...Object.fromEntries(qV.w.map((tt => [(0, bV.ec)(tt), wV.d]))),
        Arrow: wV.d,
        "Arrow of Speed": wV.d,
        "Arrow of Poison": wV.d,
        "Arrow of Slowness": wV.d,
        "Arrow of Weakness": wV.d,
        "Arrow of Knockback": wV.d,
        "Arrow of Strength": wV.d,
        "Arrow of Invisibility": wV.d,
        "Arrow of Jumping": wV.d,
        "Arrow of Defense": wV.d,
        "Arrow of Instant Healing": wV.d,
        "Arrow of Instant Damage": wV.d,
        "Arrow of Regeneration": wV.d,
        "Arrow of Haste": wV.d,
        "Arrow of Shield": wV.d,
        "Arrow of Double Jump": wV.d,
        "Arrow of Heat Resistance": wV.d,
        "Arrow of X-Ray Vision": wV.d,
        "Arrow of Mining Yield": wV.d,
        "Arrow of Brain Rot": wV.d,
        "Arrow of Milk": wV.d,
        Fireball: wV.d,
        "Bouncy Bomb": wV.d,
        RPG: wV.d,
        "Obby RPG": wV.d,
        "Super RPG": wV.d,
        "Grenade Launcher": wV.d,
        Iceball: wV.d,
        Coconut: wV.d,
        "Splash Speed Potion": wV.d,
        "Splash Defense Potion": wV.d,
        "Splash Strength Potion": wV.d,
        "Splash Invisibility Potion": wV.d,
        "Splash Jump Potion": wV.d,
        "Splash Knockback Potion": wV.d,
        "Splash Poison Potion": wV.d,
        "Splash Speed Potion II": wV.d,
        "Splash Defense Potion II": wV.d,
        "Splash Strength Potion II": wV.d,
        "Splash Jump Potion II": wV.d,
        "Splash Knockback Potion II": wV.d,
        "Splash Poison Potion II": wV.d,
        "Splash Slowness Potion": wV.d,
        "Splash Slowness Potion II": wV.d,
        "Splash Weakness Potion": wV.d,
        "Splash Weakness Potion II": wV.d,
        "Splash Milk Potion": wV.d,
        "Splash Instant Damage Potion": wV.d,
        "Splash Instant Damage Potion II": wV.d,
        "Splash Instant Healing Potion": wV.d,
        "Splash Instant Healing Potion II": wV.d,
        "Splash Regeneration Potion": wV.d,
        "Splash Regeneration Potion II": wV.d,
        "Splash Haste Potion": wV.d,
        "Splash Haste Potion II": wV.d,
        "Splash Shield Potion": wV.d,
        "Splash Shield Potion II": wV.d,
        "Splash Double Jump Potion": wV.d,
        "Splash Heat Resistance Potion": wV.d,
        "Splash X-Ray Vision Potion": wV.d,
        "Splash Mining Yield Potion": wV.d,
        "Splash Mining Yield Potion II": wV.d,
        "Splash Brain Rot Potion": wV.d,
        "Yellow Paintball Gun": wV.d,
        "White Paintball Gun": wV.d,
        "Red Paintball Gun": wV.d,
        "Purple Paintball Gun": wV.d,
        "Pink Paintball Gun": wV.d,
        "Orange Paintball Gun": wV.d,
        "Magenta Paintball Gun": wV.d,
        "Lime Paintball Gun": wV.d,
        "Light Gray Paintball Gun": wV.d,
        "Light Blue Paintball Gun": wV.d,
        "Green Paintball Gun": wV.d,
        "Gray Paintball Gun": wV.d,
        "Cyan Paintball Gun": wV.d,
        "Brown Paintball Gun": wV.d,
        "Blue Paintball Gun": wV.d,
        "Black Paintball Gun": wV.d,
        "Yellow Heavy Paintball Gun": wV.d,
        "White Heavy Paintball Gun": wV.d,
        "Red Heavy Paintball Gun": wV.d,
        "Purple Heavy Paintball Gun": wV.d,
        "Pink Heavy Paintball Gun": wV.d,
        "Orange Heavy Paintball Gun": wV.d,
        "Magenta Heavy Paintball Gun": wV.d,
        "Lime Heavy Paintball Gun": wV.d,
        "Light Gray Heavy Paintball Gun": wV.d,
        "Light Blue Heavy Paintball Gun": wV.d,
        "Green Heavy Paintball Gun": wV.d,
        "Gray Heavy Paintball Gun": wV.d,
        "Cyan Heavy Paintball Gun": wV.d,
        "Brown Heavy Paintball Gun": wV.d,
        "Blue Heavy Paintball Gun": wV.d,
        "Black Heavy Paintball Gun": wV.d,
        "Toxin Ball": wV.d,
        "Splash Aura XP Potion": wV.d,
        "Splash Aura XP Potion II": wV.d,
        "Arrow of Aura XP": wV.d,
        Firecracker: wV.d,
        "Rainbow Firecracker": wV.d,
        "White Firecracker": wV.d,
        "Orange Firecracker": wV.d,
        "Magenta Firecracker": wV.d,
        "Light Blue Firecracker": wV.d,
        "Yellow Firecracker": wV.d,
        "Lime Firecracker": wV.d,
        "Pink Firecracker": wV.d,
        "Gray Firecracker": wV.d,
        "Light Gray Firecracker": wV.d,
        "Cyan Firecracker": wV.d,
        "Purple Firecracker": wV.d,
        "Blue Firecracker": wV.d,
        "Brown Firecracker": wV.d,
        "Green Firecracker": wV.d,
        "Red Firecracker": wV.d,
        "Black Firecracker": wV.d,
        "Firecracker Pebble": wV.d,
        "Rainbow Firecracker Pebble": wV.d,
        "White Firecracker Pebble": wV.d,
        "Orange Firecracker Pebble": wV.d,
        "Magenta Firecracker Pebble": wV.d,
        "Light Blue Firecracker Pebble": wV.d,
        "Yellow Firecracker Pebble": wV.d,
        "Lime Firecracker Pebble": wV.d,
        "Pink Firecracker Pebble": wV.d,
        "Gray Firecracker Pebble": wV.d,
        "Light Gray Firecracker Pebble": wV.d,
        "Cyan Firecracker Pebble": wV.d,
        "Purple Firecracker Pebble": wV.d,
        "Blue Firecracker Pebble": wV.d,
        "Brown Firecracker Pebble": wV.d,
        "Green Firecracker Pebble": wV.d,
        "Red Firecracker Pebble": wV.d,
        "Black Firecracker Pebble": wV.d,
        "Blinding Pebble": wV.d,
        Poop: wV.d,
        "Wood Boomerang": wV.d,
        "Stone Boomerang": wV.d,
        "Iron Boomerang": wV.d,
        "Gold Boomerang": wV.d,
        "Diamond Boomerang": wV.d,
        "Amethite Boomerang": wV.d,
        "Magmasteel Boomerang": wV.d,
        "Rubellite Boomerang": wV.d,
        "Serpentite Boomerang": wV.d,
        "Moonstone Boomerang": wV.d,
        "67 Base Projectile": wV.d,
        "67 Boosted Projectile": wV.d,
        "Capitano Grenade": wV.d,
        "Scatter Pellet": wV.d,
        "Lucky Bomb": wV.d,
        "Unlucky Bomb": wV.d,
        "Swap Orb": wV.d,
        Mesh: ZV,
        AudioEntity: FV
      }), nV
    }
  },
  39216: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      h: () => mt
    });
    var Ot = Vt(710),
      qt = Vt(37972);
    const Dt = 4e4;
    class mt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = tt, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(tt, et, Vt) {
        const Dt = (0, Ot.H)(tt),
          mt = (0, Ot.H)(et),
          dt = (0, Ot.H)(Vt),
          jt = this.now();
        if (Dt !== this.lastChunkX || mt !== this.lastChunkY || dt !== this.lastChunkZ) {
          this.lastChunkX = Dt, this.lastChunkY = mt, this.lastChunkZ = dt, this.lastChunkId = (0, qt.e)(Dt, mt, dt), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, jt);
          for (const [tt, et] of this.editedAt) {
            if (et >= jt - 3e5) break;
            this.editedAt.delete(tt)
          }
        } else this.editedAt.set(this.lastChunkId, jt)
      }
      chunksEditedSince(tt) {
        const et = [];
        for (const [Vt, Ot] of this.editedAt) Ot >= tt && et.push(Vt);
        return et
      }
    }
  },
  39278: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => fe,
      g: () => re,
      j: () => Ie,
      k: () => Ue
    });
    var Ot = Vt(3751),
      qt = Vt(9005),
      Dt = Vt(36925),
      mt = Vt(1543),
      dt = Vt(36992),
      jt = Vt(39167),
      Ht = Vt(39152),
      Xt = Vt(3820),
      Qt = Vt(38126),
      lt = Vt(39282),
      Et = Vt(1325),
      ft = Vt(377),
      wt = Vt(31),
      yt = Vt(2043),
      Nt = Vt(106),
      Mt = Vt(39),
      bt = Vt(2074),
      Jt = Vt(1993),
      Ct = Vt(3046);
    class ut {
      constructor(tt) {
        this.storeForMs = tt, this.clicks = new Ct.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const tt = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < tt;) this.clicks.dequeue()
      }
      getNumClicksInMs(tt) {
        let et = 0;
        return this.clicks.forEach((Vt => {
          Vt > Date.now() - tt && et++
        })), et
      }
      getMaxClickSeparationInMs(tt) {
        if (0 === this.clicks.size) return this.storeForMs;
        let et = 0,
          Vt = Date.now() - tt;
        this.clicks.forEach((Ot => {
          Ot < Date.now() - tt || (et = Math.max(et, Math.abs(Ot - Vt)), Vt = Ot)
        }));
        const Ot = Math.abs(Date.now() - Vt);
        return Math.max(et, Ot)
      }
    }
    class Kt {
      constructor(tt) {
        this.storeForMs = tt, this.clickDownDurations = new Ct.b
      }
      registerClickDownDuration(tt) {
        this.clickDownDurations.enqueue({
          dur: tt,
          atTime: Date.now()
        });
        const et = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < et;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(tt) {
        if (tt > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let et = 0,
          Vt = 0;
        return this.clickDownDurations.forEach((Ot => {
          Ot.atTime > Date.now() - tt && (et++, Vt = Math.max(Vt, Ot.dur))
        })), `${et}:${Vt}`
      }
    }
    var ht = Vt(36745),
      vt = Vt(39288),
      Wt = Vt(26),
      St = Vt(2848),
      ct = Vt(1423),
      Rt = Vt(2486),
      It = Vt(4576),
      Pt = Vt(153),
      Zt = Vt(38406),
      Lt = Vt(38610),
      Ft = Vt(710),
      kt = Vt(36742),
      Gt = Vt(17),
      zt = Vt(9425),
      ot = Vt(1308),
      rt = Vt(229),
      Ut = Vt(39297),
      At = Vt(39305),
      it = Vt(39313),
      Yt = Vt(38437),
      Bt = Vt(39322),
      pt = Vt(38335),
      xt = Vt(3470),
      Tt = Vt(1732),
      gt = Vt(36861),
      st = Vt(2902),
      nt = Vt(36610),
      te = Vt(36616),
      ee = Vt(39316),
      Ve = Vt(38200);
    const Oe = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function qe() {
      var tt, et;
      return !(null === (tt = (0, St.c)().client) || void 0 === tt || null === (et = tt.freeCameraController) || void 0 === et || !et.movesFly())
    }

    function De(tt) {
      const et = tt.on.bind(tt);
      tt.on = (tt, Vt) => {
        bt.C.has(tt) ? et(tt, Vt) : et(tt, (et => {
          var Ot;
          return null !== (Ot = (0, St.c)().client) && void 0 !== Ot && Ot.isReplayMode() ? function(tt) {
            return tt in Oe
          }(tt) && qe() ? Vt(et) : void 0 : Vt(et)
        }))
      }
    }
    const me = 5e3,
      de = 1;
    let je, He = de,
      Xe = 0;
    const Qe = !0;
    let le = Qe;
    yt.b.subscribe("_ignoreBasicBoards", (tt => {
      le = tt
    })), (0, Ot.onGameReset)((() => {
      le = Qe
    }));
    let Ee = null;
    const fe = () => Ee;
    let we, ye, Ne;
    var ae, Me, be, Je, Ce, ue, Ke, he, ve;
    const We = [1, 2, 0, "h", 3, 85, "g", 5, 99, "d", 8, 255, "length", 81, 17, 73, 4, "undefined", void 0, 199, 103, 63, 6, "fromCodePoint", 7, 12, "push", 220, 87, 91, 8191, 88, 13, 14, 111, 227, 211, "f", 131, !1, 56, 203, 9, 39, 123, "b", "c", "a", 144, "e", 221, 225, 162, 68, 138, 76, 106, 24, 65, 201, 125, "i", !0, 197, 189, null, 231, 178, 172, 61, 236, 38, 246, 10, 230, 19, 244, "_", 193, 222, 94, 173, 83, 127, 33554432, 67108864, 104, 22, 149, 128, 148, 84];

    function Se(...tt) {
      return tt[We[12]] = We[0], typeof Je !== We[17] && Je ? (new Je).decode(new Ce(tt[We[2]])) : typeof ue !== We[17] && ue ? ue.from(tt[We[2]]).toString("utf-8") : ve(tt[We[2]])
    }

    function ce() {}

    function Re() {
      Re = function() {}
    }

    function Ie(tt) {
      function et() {
        return tt.mJ.bVt(tt.lL)
      }
      De(tt.inputs.down), De(tt.inputs.up);
      for (const Ot of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const et = (et, Vt) => {
          var qt, Dt;
          if (qe()) {
            var mt;
            const qt = Oe[Ot];
            var dt, jt;
            if (qt) null === (dt = (0, St.c)().client) || void 0 === dt || null === (jt = dt.freeCameraController) || void 0 === jt || jt.handlefreeCamKeyPress(qt, et, Vt);
            return void(Vt || null !== (mt = (0, St.c)().client) && void 0 !== mt && mt.isReplayMode() || (tt.mJ.hVt()[Ot] = !1))
          }
          if (null !== (qt = (0, St.c)().client) && void 0 !== qt && null !== (Dt = qt.freeCameraController) && void 0 !== Dt && Dt.isKeyPressOverriden(et)) return;
          tt.mJ.hVt()[Ot] = Vt
        };
        tt.inputs.down.on(Ot, (tt => et(tt, !0))), tt.inputs.up.on(Ot, (tt => et(tt, !1)))
      }
      tt.inputs.down.on("crouch", (() => {
        if (qe()) return;
        if (!tt.OJ.canCrouch) return;
        const et = tt.mJ.hVt();
        Wt.b.get("clientEscMenuOptions").crouchIsToggle && (et.crouchToggled = !et.crouchToggled && !et.padSneakToggled), et.padSneakToggled = !1
      }));
      const Vt = () => {
        const tt = et();
        tt.isGun() && tt.inaccuracyCalculator.jump()
      };
      tt.inputs.down.on("jump", (tt => {
        qe() || (Vt(), we(tt))
      }));
      for (const Ot of bt.h) tt.inputs.down.on(Ot, (tt => {
        var et, Vt;
        null !== (et = (0, St.c)().client) && void 0 !== et && null !== (Vt = et.freeCameraController) && void 0 !== Vt && Vt.handlefreeCamKeyPress(Ot, tt, !0) && (tt.preventDefault(), tt.stopPropagation())
      })), tt.inputs.up.on(Ot, (tt => {
        var et, Vt;
        null !== (et = (0, St.c)().client) && void 0 !== et && null !== (Vt = et.freeCameraController) && void 0 !== Vt && Vt.handlefreeCamKeyPress(Ot, tt, !1) && (tt.preventDefault(), tt.stopPropagation())
      }));
      tt.inputs.down.on("recordGame", (() => {
        var tt, et;
        null === (tt = (0, St.c)().client) || void 0 === tt || null === (et = tt.gameRecorder) || void 0 === et || et.toggleRecording()
      })), tt.inputs.down.on("recordClip", (() => {
        var tt, et;
        (0, ht.e)() || null === (tt = (0, St.c)().client) || void 0 === tt || null === (et = tt.gameRecorder) || void 0 === et || et.saveClip()
      }));
      for (const Ot of bt.C) tt.inputs.down.on(Ot, (() => {
        var tt;
        if ((0, vt.c)()) return;
        if ("replayViewerOpen" === Ot) return void wt.j.sw("replayViewer|requested", "toggle");
        const et = null === (tt = (0, St.c)().client) || void 0 === tt ? void 0 : tt.gameReplayer;
        ((0, ht.e)() || null !== et && void 0 !== et && et.isReplayMode()) && (null === et || void 0 === et || et.handleAction(Ot))
      }));
      const mt = new ut(3e4),
        Qt = new Kt(4e4);
      let lt = 0;
      const Mt = tt => {
          let et = 0,
            Vt = null;
          const Ot = et => null !== et && et === Vt && (Vt = null, tt(), !0);
          return {
            press: () => (et++, (0, Ut.e)() || (Ot(Vt), Vt = et), et),
            owns: tt => tt === Vt,
            release: Ot
          }
        },
        Ct = (tt, Vt) => {
          Vt && Ue(Et.c.TouchDownFirePrimary), tt ? zt() : ((0, Lt.f)(), et().wOt()), Vt || Ue(Et.c.DownFirePrimary), re(!0), mt.click();
          const qt = mt.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Dt = mt.getMaxClickSeparationInMs(1e4) < 20,
            dt = mt.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (qt || Dt || dt) {
            let tt;
            if (qt) tt = 30;
            else if (Dt) tt = 50;
            else {
              if (!dt) throw new Error("???");
              tt = 70
            }(0, Ot.sendColyMessage)(Xt.dk, tt)
          }
        },
        It = new At.d,
        Pt = Mt((() => {
          At.d.stopRunning();
          const tt = Date.now() - lt;
          Qt.registerClickDownDuration(tt), et().lOt(), Ue(Et.c.UpFirePrimary), re(!1);
          const Vt = Qt.clickDownDurationsCheck(4e4);
          (0, Ot.sendColyMessage)(Xt.wg, Vt)
        }));
      let Zt = 0;
      tt.inputs.down.on("primary-fire", (function(tt) {
        Zt = Pt.press(), Pt.owns(Zt) && (lt = Date.now(), Math.abs(performance.now() - tt.timeStamp) > 5e3 || (Ct(tt.altKey, "changedTouches" in tt), we(tt)))
      })), tt.inputs.up.on("primary-fire", (function(tt) {
        Pt.release(Zt) && we(tt, !0)
      }));
      const Ft = () => {
          et().VXt(), Ue(Et.c.DownFireSecondary), re(!0), tt.Itt && !tt.Itt.position && (0, Ht.g)()
        },
        kt = Mt((() => {
          et().QOt(), Ue(Et.c.UpFireSecondary), re(!1)
        }));
      let Gt = 0;
      tt.inputs.down.on("alt-fire", (function(tt) {
        Gt = kt.press(), kt.owns(Gt) && (Ft(), we(tt))
      })), tt.inputs.up.on("alt-fire", (function(tt) {
        kt.release(Gt) && we(tt, !0)
      }));
      const zt = () => et().DXt();
      tt.inputs.down.on("mid-fire", (() => {
        (0, Ut.e)() || zt()
      }));
      const Bt = tt => {
          (0, Ot.sendColyMessage)(Xt.Fh, tt, !0)
        },
        je = tt => {
          (0, Ot.sendColyMessage)(Xt.Gh, {
            Id: tt,
            Pd: Qe()
          }, !0)
        };
      for (const Ot of ["SpecialAction1", "SpecialAction2"]) tt.inputs.down.on(Ot, (() => {
        Bt(Ot)
      })), tt.inputs.up.on(Ot, (() => {
        je(Ot)
      }));
      const Xe = () => {
        const tt = et();
        tt.isGun() && tt.reload(Date.now())
      };
      tt.inputs.down.on("ReloadGun", Xe);
      const Qe = () => {
        let et = "a";
        return tt.physics.testSolid.toString().includes("Cl") || (et = "b"), et
      };
      tt.inputs.down.on("OpenInventory", (tt => {
        tt.preventDefault(), (0, Tt.C)(tt, "inventory", (0, it.d)((0, St.e)()))
      })), tt.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const le = tt => {
        wt.j.sw("DropItemKeyPressed", tt)
      };
      tt.inputs.down.on("DropItem", (() => {
        le(tt.mJ.hVt().crouch)
      })), tt.inputs.down.on("OpenShop", (et => {
        (0, ht.e)() || "inGame" === Wt.b.get("gameState") && (0, Tt.y)(et, ft.o.SHOP, !(0, qt.c)(tt.OJ.shopInfo))
      })), tt.inputs.down.on("OpenLobbyLeaderboard", (et => {
        (0, ht.e)() || "inGame" === Wt.b.get("gameState") && (0, Tt.y)(et, ft.o.LOBBY_LEADERBOARD, (0, ee.d)(tt.OJ))
      })), tt.inputs.down.on("HideUi", (() => {
        wt.j.sw("showUi", !1)
      })), tt.inputs.up.on("HideUi", (() => {
        wt.j.sw("showUi", !0)
      }));
      const fe = tt => {
        0 === tt && (tt = 10), wt.j.sw("setSelectedInventorySlotI", tt - 1), wt.j.sw("numkeyPressed", tt)
      };
      for (let Ot = 1; Ot <= 10; Ot++) tt.inputs.down.on("HotBarSlot" + Ot.toString(), (() => {
        fe(Ot)
      }));
      tt.inputs.down.on("OpenTasksAndLeaderboard", (et => {
        const Vt = (0, gt.i)();
        Vt ? (0, Tt.G)(et, !0, Vt) : (0, Tt.C)(et, "retentionFeatures", !(!tt.OJ._tasks && !tt.OJ._availableLeaderboards))
      })), tt.inputs.down.on("OpenCodeEditor", (et => {
        (0, Tt.G)(et, (0, Rt.b)((0, ct.c)()), (() => {
          (0, Rt.f)(tt.mJ.YM(tt.lL))
        }))
      })), tt.inputs.bind("ToggleFullCoordinateOverlay", "F3"), tt.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        wt.j.sw("toggleFullCoordinateOverlay")
      }));
      const Ne = () => {
        (0, St.c)().client.cameraController.swapCameraZoom()
      };
      tt.inputs.down.on("SwapCameraZoom", Ne), tt.inputs.down.on("OpenInviteLink", (tt => {
        (0, Tt.C)(tt, "inviteLink", Nt.featureFlags.canUseInviteLinks)
      })), tt.inputs.bind("Y", "KeyY"), tt.inputs.down.on("Y", (tt => {
        (0, ht.e)() || wt.j.sw("YKeyPressed")
      })), tt.inputs.bind("X", "KeyX"), tt.inputs.down.on("X", (tt => {
        (0, ht.e)() || wt.j.sw("XKeyPressed")
      })), tt.inputs.down.on("OpenEmoteWheel", (() => {
        wt.j.sw("requestEmoteWheelHoldOpen")
      })), tt.inputs.up.on("OpenEmoteWheel", (() => {
        wt.j.sw("requestEmoteWheelHoldRelease")
      })), tt.inputs.down.on("Zoom", (() => {
        if ("inGame" === Wt.b.get("gameState")) {
          tt.mJ.getState(tt.lL, "playerCameraAdjustment").zoomKeyPressed = !0, (0, St.c)().client.cameraController.handleZoomKeyPressed()
        }
      })), tt.inputs.up.on("Zoom", (() => {
        tt.mJ.getState(tt.lL, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Pe();
      const ae = tt => function() {
        return ye(), tt(...arguments)
      };

      function Me(tt) {
        "inGame" !== Wt.b.get("gameState") || (0, Tt.u)() || (wt.j.sw("ctrlCrouchWithoutFullscreen"), tt.preventDefault())
      }
      Ee = {
        primaryFireDown: ae((tt => {
          const et = Pt.press();
          return Pt.owns(et) && (lt = Date.now(), Ct(!1, !1), tt && It.start()), et
        })),
        primaryFireUp: ae((tt => {
          Pt.release(tt)
        })),
        altFireDown: ae((() => {
          const tt = kt.press();
          return kt.owns(tt) && Ft(), tt
        })),
        altFireUp: ae((tt => {
          kt.release(tt)
        })),
        jumpDown: ae(Vt),
        specialActionDown: ae(Bt),
        specialActionUp: ae(je),
        reloadGun: ae(Xe),
        dropItem: ae(le),
        swapCameraZoom: ae(Ne),
        pickBlock: ae(zt)
      }, tt.inputs.down.on("ctrlCrouch", Me), tt.inputs.up.on("ctrlCrouch", Me), tt.inputs.bind("ctrlCrouch", "ControlLeft");
      const be = tt => {
        "inGame" === Wt.b.get("gameState") && tt.ctrlKey && !(0, Tt.u)() && tt.preventDefault()
      };
      document.addEventListener("keydown", be), document.addEventListener("keyup", be), document.addEventListener("keypress", be), tt.inputs.bind("Alt", "AltLeft", "AltRight"), tt.inputs.down.on("Alt", (tt => {
        tt.preventDefault()
      }));
      const Je = et => (0, pt.i)(tt, et),
        Ce = et => (0, pt.k)(tt, et),
        ue = [0, 0, 0],
        Ke = [0, 0, 1];
      tt.on("afterRender", (et => {
        te.o.frame(et, tt.camera.heading, tt.camera.pitch, te.j.drawn), (0, Dt.g)(tt.camera.heading), (0, pt.m)(tt, ue, Ke), (0, St.c)().client.triggerGameCallback("onAfterRender", et, {
          cameraHeading: tt.camera.heading,
          cameraPitch: tt.camera.pitch,
          cameraPosition: ue,
          cameraDirection: Ke,
          tanHalfFovX: (0, pt.d)(tt),
          tanHalfFovY: Math.tan(tt.Bf.XT().fov / 2),
          screenBandPct: {
            x: xt.d,
            y: (0, xt.m)()
          },
          projectWorldPosToScreenPos: Je,
          projectWorldPosToViewport: Ce
        })
      })), tt.camera.pR = (0, nt.startLookDebug)("js"), tt.inputs.HI = nt.noteLookDroppedCopy, (0, st.v)("remesh") && (0, Ve.j)(tt), tt.on("beforeInputs", (() => {
        if ((0, vt.c)()) return tt.inputs.rU.dx = 0, void(tt.inputs.rU.dy = 0);
        if (tt.camera.rU.dx += tt.inputs.rU.dx, tt.camera.rU.dy += tt.inputs.rU.dy, 0 !== tt.inputs.rU.dx || 0 !== tt.inputs.rU.dy) {
          tt.mJ.getState(tt.lL, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        tt.inputs.rU.dx = 0, tt.inputs.rU.dy = 0
      }));
      let he = 0;
      const ve = [0, 0, 0],
        We = [0, 0, 0],
        Se = {
          base: ve,
          max: We
        },
        ce = tt => {
          const et = rt.e.droppedBlockSize / 2;
          return [0, 1, 2].every((Vt => tt[Vt] >= ve[Vt] - et && tt[Vt] <= We[Vt] + et))
        };
      tt.on("BQ", (function(et) {
        wt.j.sw("noaTick", et);
        const Vt = (0, St.c)().client;
        if (Vt.triggerGameCallback("BQ", et), Vt.isClientGameSessionActive()) try {
          jt.c.BQ(et)
        } catch (mt) {
          console.error("Error ticking audio entities", mt)
        }
        if (!tt.mJ.aVt(tt.lL).isAlive) return;
        Date.now() - he > 9e3 && (! function() {
          const tt = (0, St.e)();
          "number" === typeof tt.OJ.speedMultiplier && "number" === typeof tt.OJ.jumpAmount && (0, Ot.sendColyMessage)(Xt.bi, {
            Md: (0, ot.f)(tt.OJ.speedMultiplier),
            bd: (0, ot.d)(tt.OJ.jumpAmount),
            Jd: (0, ot.f)(tt.OJ.crouchingSpeed),
            Cd: (0, ot.f)(tt.OJ.walkingSpeed),
            ud: (0, ot.f)(tt.OJ.runningSpeed),
            Kd: (0, ot.d)(tt.utt),
            hd: tt.mJ.fet(tt.lL).jumpForce,
            vd: tt.mJ.RY(1).width,
            Wd: tt.mJ.RY(1).height,
            Sd: tt.mJ.YG(1).Sd
          }, !0)
        }(), he = Date.now());
        const qt = tt.mJ.hVt();
        if ((qt.jump || qt.forward || qt.backward || qt.left || qt.right || qt.sprint) && wt.j.sw("usedKeyboard"), tt.mJ.VVt(tt.lL) && !0 === tt.OJ.canPickUpItems) {
          const et = tt.mJ.YM(tt.lL),
            Vt = (0, Jt.q)(He),
            qt = (0, Jt.t)(He);
          ve[0] = et[0] - Vt, ve[1] = et[1] - .6 * qt, ve[2] = et[2] - Vt, We[0] = et[0] + Vt, We[1] = et[1] + rt.e.Yy + .6 * qt, We[2] = et[2] + Vt;
          const Dt = tt.mJ.jjt(Se, tt.mJ.names.autoRotate),
            {
              itemDropPrediction: mt
            } = (0, St.c)().client,
            jt = Ot.offlineInputReplay.holdsInput();
          if (Dt.length > 0)
            for (const Qt of Dt) {
              const et = tt.mJ.getState(Qt, "itemState");
              if (void 0 === et || Date.now() - et.creationTime < 500) continue;
              let Vt = Qt,
                qt = null;
              if (et.Fq) {
                const tt = mt.pickupTarget(Qt, ce, jt);
                if (null === tt) continue;
                ({
                  pd: Vt,
                  sd: qt
                } = tt)
              }
              const Dt = tt.mJ.getState(Vt, "itemState");
              if (Dt.Fq && null === qt) continue;
              let lt = 0,
                Et = null,
                ft = !1;
              if (0 === Dt.amount) ft = !0;
              else {
                const {
                  amountPickedUp: et
                } = tt.mJ.tVt(tt.lL).pickUpItem({
                  name: Dt.name,
                  typeObj: Dt.typeObj,
                  amount: Dt.amount,
                  attributes: Dt.attributes
                });
                if (lt = et, 0 === lt) continue;
                Et = Yt.d.pickUp(Dt, lt), Dt.amount -= lt, Dt.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Dt.amount ? ft = !0 : Dt.creationTime = Date.now() + me
              }
              const wt = (0, St.c)().client.inventoryPrediction.record(Et);
              (0, Ot.sendColyMessage)(Xt.yh, {
                pd: null === qt ? Vt : "",
                xd: lt,
                Td: Ht.f,
                Tm: wt,
                sd: qt
              }, !0), ft && (jt && mt.onPickedUpOffline(Vt, wt, qt), null === qt && tt.mJ.deleteEntity(Vt));
              dt.e.play("pickUp", rt.e.pickupSoundVol).rate(1 + Math.random() * rt.e.pickupSoundRateVariation)
            }
        }
        if (!tt.mJ.oet(tt.lL)) return;
        const Dt = tt.inputs.rU.het;
        if (0 !== Dt) {
          const et = Dt > 0 ? 1 : -1;
          tt.inputs.state["mid-fire"] || tt.inputs.state.Alt || !tt.OJ.useInventory ? (tt.inputs.state["mid-fire"] && wt.j.sw("requestEmoteWheelClose"), (0, St.c)().client.cameraController.handleScrollZoom(et)) : wt.j.sw("ScrollInventorySlot", et)
        }
      })), yt.b.subscribe("droppedItemScale", (tt => {
        He = "number" === typeof tt && isFinite(tt) ? tt : de
      }))
    }

    function Pe() {
      const tt = (0, St.e)();
      if (tt)
        for (const et in bt.r) {
          tt.inputs.unbind(et);
          for (const Vt of bt.r[et]) tt.inputs.bind(et, Vt)
        }
    }
    Re(ae = {}, Me = ['=37!VRzU2@wR$"@$R}!VTc#q804', "#hQ}8x9ng/1i{", "^HF#)6y.4rQ.O6iq{h)si6vq|1.GCu", 'N(|*#"{q)hQ<{', '`34&xQ34TMQl"m$F]rJ:C!*R9X}YP"LR&$:V>>]PiX<jrN*', ".3o&SO=0HLUakwT,J<<24YxUO=8LkwV#Y1V!$Uvi|>C0.>fS(f;EUQ102@=s5", ">uG;{W#v2OyG0HP^dOHPDwTPeh!jh/O7m(f|MeKPVSUi8,3,9@u", "Mn8s:;(,mhw>/6|$C_9P:i@0|<jmjFCIvCL2Z}Uq%LI3B}1e", '11<1#"$Ru2gpO6N$P@f|MN5', "WH81xd<UhS0", 'fULsF"(R>3t)`UbeG(fl+Q$T_=>f"/3r/BcE^Q3<N>4Nwh*F=5', "oOTfD0]RI@I&&/5_de<fd!`vtqFOoi/Fx_F:J%j4xS|/+/wWc37vvZ*R*p^", '.nhT0K(*23WpmigF@hnVF`iv#@Rv^uw#k3^vGQZ!KL7aE>#U9&fVx"5', '0",2(amDl1()Phren&R!@P?q^OZ900]]@1{#RAE(YMkyA>5z43bf', "#>mB{>5RQ1h)AHr@<n|*G`6)f", '8WaYYY6Xf1kyh#4Ia1gv)EI780=weX5TbWi!I"0,BGs9C`S$~1zTERY<U2', 'N$bP.>ZPN2~e"0"78"J', "x.?Ph!v{B2I;xf", "qST+^dOZg=YY~u!Iv1bs<W:4J1aj6w/", "f1R+A&+cP2S,@}UrB>r1jOa(?/>w4II4,>+scW5", "BNwY_YU.L>|s:`@^hS&**)hi#rk>6Rt4x2x#/", "?.i}R:uXOj}w~~gWS2(+o.qc(", '^@aYqiNS>rb<0A"4:nl!ti"4S>q)uuC]KNQE@', "Ls<sv6&c?=6DiRHI`u)sG}>T%q;E{", "[_7pQE=Sdh5}BunHF}r(H=;vBhn>g}oR;3K+T", "m951&9E(.0!%nhBSH!n72ZkiV%7Pw`0[%2l+=m5", "VOEFq.BZ(L,", 'a"ds}RQvg=DfbF#^9u2(', "{U6(FEgS>=wy6aRTFHj7#cPPk@t3fu?#L1Q+9O8,|1Q|{><zGnS7:iSRjr", 'a&31j!<zL%|sg}{zWu{&+}rUBGQ!jmHH="Q+wOQis3*z9i(S;Nu', "[z(+<Vm,yqtm~}`#B>#VS`j%lqHpc]_F[HWY3afRK1Hs2AZeU7/v", '0O*dhECRQq/a]Y2Ik=)sB"Kw{221}9t$ku];y%aDp"#', "8e]fRQTJc*|SO6j]RHR7G}*,Lh0VARAU#h]+OK]L#r", '+7r&O!TPu2OMnuq$k/iFz]dS2pZS{N~#lFcPnDqq%Lp@cJ"R]1v(', "_rpB4sED|2yS{", 'v<=&neL!pOp~1ANWQ">;6]5', "XD|a/.`Ud%N^96C", ".z^7HstD(", "|$T+P=?q)C_", '$(P!k]s{%LfAV,[qBetvRUfT"*EYeY`e6=ifh]2Xz0Jc>"(I8N(P[U`Q`q', "~<0&Q.Wq|2Wr_0CqrF#a2ZD$.OGN:/C@i1CVa>*0&1eE^f<rkOJ", 'Y_*2g9!Z&.KB[Ao^B&9+#}*D["IOP`2', "~H[B5a4c32H)Um[I0NPVrRaSk0q(:9t^lUJ", "*<QFN:#c)*&M:/JHKu2&f!kiZLT+C}9S", "S&%pdEv6&2|w[I2]>/u", "9u]Pw!I4.@D,0Xxrbe=(*e5", "[rI#}|9n:jF", '_(@!|D@w?GDE:uBrZ(7va!oCAj5x+|NeTh)YOeRSg"z(cm7r`5', ':+;2"efTy2Lj~`MHU7[BRQ;{', "Qs(;aR$P(", "B!k&=&.:TSUuN#Mririp#", "ez;f%=#:?j/T3R[Fd@SB_Yf[OjaUJ6;U#1Y#0>uIm1[", "G<mVZ.%v,0Ue3fN#2<V^LKaPEj?NY>)#hY9v:6$,AO[;</[WPzQF;90J", '0"V!3alvNC5d{N~e3N3BlRZCa0aVeF<r`WN(@$9TX"xE3f', "Hn1Y5eJT:rBe{", "AzgVr6%Q,@Sah]hFthITrP<.q2$sNa~#", 'F1Ws0&uX^O(nINweH(GvvZeTr.9s*hm^RNeV/.=JA=v#B"Ar*UWf', "<z,YNY]0Nh9^~#~W$N:|v6Ow_rE{XaySce,1J>pZJ>nwF6F7", '`I2dR"LDD"+/U|aqD@%;K]ODD*j:h}9,XD;^m`%vf2=', 'e29^3Rn0NCVwIa7z4zBT5DcQ2rbh!6BTYC"BqioO8@i=miMRqB>!^c5', "jF9;WcDTv;8.ifoRm@aYO>5", 'lU*("aYvo3`hvF(', "EeKF9aIcIOxEw}@#&u?+0eQvDGl@lKF[LNAv", 'LnB(h}!,z08.}/77?F[#c&p,{h89""Q#vn9}1DwPCr*3W9L,snif', '9N{B6.3U4/3YG~jIH7)PlNiXhS_"n`u+^zpBw;@w+hDOB`l+Tn%p)}Azu2g', "(Cg!0%Q4/<Ky{", '"@|*GQ)&rh/e{', "SD~xIc;v!3BE`ck^@hI#RnP!HX[wJ]P^SH9fmx5", 'YF2&2N}:|1O"{~v', 'o?,xg<u40j$"r~nrajZvI$)4_/=UcmdFf>[#xAE!%qawU"`e]!5196tJ', "2nkBPaMSUqKlGa#UiOd+4n4Xl", 'e>;1%=u%X/^#LhvH{U%v"9r%<hiBRuOzI{', '8NXvpE5*y.j)Hf)$;?"%xQbU#OpA2~pIUuz^g9(*Djmtf#Ie', "j<n;SRPJ", "YHb2pZh43SwRv|8t=nA;yNd0YCA{#mEF;Nif", "NCA;_w4./Gk9CRsI%$:l3DVif", "dH$TeYk.bX+#KuyI+7Wf", "8r]+zd?.#/NPJH=[Y$1v[YLZO=/0Ku", "1nlPcW(R{S_", "LsApnDrI*r7i2NeH}n^VtEW:XGI0funT", "B2D+Hs7Uu", '1(r:a)d,n.!w99"7DCu', '&&&*"9<.)%fm0Ym$[$,dD<`XJq_G)9{r1&7^r6J[C3pp)9"r.5', "I!*1:N!(>/5nz]XqQ[y7/O6iSCg;raP#)5", '834a@"%XKXfalKyS=ua1;Dx<a0[', '}&X+;D<7o"[M3f*I(nW(oE^J{S@#IN07XHP!3Nb.rSeN[XIe6H5T@', 'lYs&Y99Sz@n%SH>T3O^p&YqvoOUaw,FRX}t;qiBC"*VBzF"zK"~2', "^_Ns}!Qzl", "w=Ns(6wClLo*Xa=^Ozvx=9zvJ1$r|I$]5>&pcHr6UqL^8UuHtBUa>N5", "o[K!rPc4V/m9BaF4}1m7,$;vchX#l>Y$,@cYqOBwf", '/HV!rR$,i19^.>q4E?1;R",J', 'O@52[AM!|CZ9~}x,lf0*Tcqco"w6PuEq7DkB4Y8exCwy}FQeD&J', "5M?p=WX%+<u:tH$]AncE`dS!iq", "4}%!RU%UFrGNkf{+92^VyN<&;0S:[IBRI_OvUU5", "qh?v7cRPnLYijcS$57t;a;3znLEwYau+`(<PB}%7~.f)yhx[69qpXN5", "Rb)!0s>c", "~t&nhgi)t?+p.8ff!%>j&&2|i9mA@kL", "8u#s:|jww9(", "*CXPkVeA", "~hT525RV", "klV5)K>V", ">L7fuIds", "5g4~&QiSX)sNW", "VE~l/oP`|#oZA", "v>}Z(R}}M<zCI", '63]"$o{+_w', "3}98k7ks1v[cVg[*#6t#[j8=0", "xFa142^OEkrn2gbQ0MtpJ>sF5", "^TcSm`R+AMW^ZE!_xFtpU32CV", "xJdSiy;V|>hGnaFSDT*pQ(/C3PO!ls+f{lvqT", "Fy#=Hj_.T?g2/29B0{h%9jEqvtJc&;)L(m1=s", "TFtpZL/CTrYEK6yJzc4U.cA^(kx!VgU?+lvqX", "y404a[ROOD|NSEp?6WXp.crO=?6!VgSMulXpT", ',iXpO*J.&4E7ryz3Ia"o/eJN+5}R_gSM/lI', "wP$tD}/C", "7#O)fKqx", "r:8L8MCx", "_<I@>,n~", "J(W2b2fN", "*nB?1$^r", "r8FXrZEn", "J`[I;$e", "d|B??$lr", ":wmy(Qbk", "^Hg4$FL=", "(sMNMYz=", "1vP%CWGx", "Z<=9OrbG", "05^.5t&H", "A+kX", "io@}+mk{"]), Re(be = function(...tt) {
      Re(tt[We[12]] = We[2], tt[We[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], tt[-We[13]] = We[18], tt[-We[14]] = []);
      try {
        Re(tt[-We[13]] = Object, tt[-We[14]][We[26]]("".__proto__.constructor.name))
      } catch (Me) {}
      tt: for (tt[We[15]] = We[2]; tt[We[15]] < tt[We[5]][We[12]]; tt[We[15]]++) try {
        for (tt[-We[13]] = tt[We[5]][tt[We[15]]](), tt[We[16]] = We[2]; tt[We[16]] < tt[-We[14]][We[12]]; tt[We[16]]++)
          if (typeof tt[-We[13]][tt[-We[14]][tt[We[16]]]] === We[17]) continue tt;
        return tt[-We[13]]
      } catch (Me) {}
      return tt[-We[13]] || this
    }() || {}, Je = be.TextDecoder, Ce = be.Uint8Array, ue = be.mf, Ke = be.String || String, he = be.Array || Array, ve = function(...tt) {
      return Re(tt[We[12]] = We[2], tt[We[27]] = new he(We[89]), tt[-We[28]] = Ke[We[23]] || Ke.fromCharCode, tt[We[1]] = []),
        function(...et) {
          for (Re(et[We[12]] = We[0], et[We[0]] = We[18], et[We[20]] = We[18], et[We[4]] = et[We[2]][We[12]], tt[We[1]][We[12]] = We[2]), et[-We[19]] = We[2]; et[-We[19]] < et[We[4]];) Re(et[We[20]] = et[We[2]][et[-We[19]]++], et[We[20]] <= We[83] ? et[We[0]] = et[We[20]] : et[We[20]] <= 223 ? et[We[0]] = (31 & et[We[20]]) << We[22] | et[We[2]][et[-We[19]]++] & We[21] : et[We[20]] <= 239 ? et[We[0]] = (15 & et[We[20]]) << We[25] | (et[We[2]][et[-We[19]]++] & We[21]) << We[22] | et[We[2]][et[-We[19]]++] & We[21] : Ke[We[23]] ? et[We[0]] = (et[We[20]] & We[24]) << 18 | (et[We[2]][et[-We[19]]++] & We[21]) << We[25] | (et[We[2]][et[-We[19]]++] & We[21]) << We[22] | et[We[2]][et[-We[19]]++] & We[21] : (et[We[0]] = We[21], et[-We[19]] += We[4]), tt[We[1]][We[26]](tt[We[27]][et[We[0]]] || (tt[We[27]][et[We[0]]] = tt[-We[28]](et[We[0]]))));
          return tt[We[1]].join("")
        }
    }()), Re(Ne = (...tt) => {
      function et(...tt) {
        return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = function(...tt) {
          for (Re(tt[We[12]] = We[0], tt[We[47]] = 'WAsbatYpgjH#h$ZU.X>B*3)uRe9~]/qO!D`8irIV:oE{nF_&d?fNG%LKc;"m0PJlz<v,SkTw[M+Q2x}(5@4|71^6=yC', tt[We[45]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[We[45]].length, tt[We[9]] = [], tt[We[49]] = We[2], tt[We[37]] = We[2], tt[We[48]] = -We[0]), tt[We[10]] = We[2]; tt[We[10]] < tt[We[46]]; tt[We[10]]++)
            if (tt[We[42]] = tt[We[47]].indexOf(tt[We[45]][tt[We[10]]]), tt[We[42]] !== -We[0])
              if (tt[We[48]] < We[2]) tt[We[48]] = tt[We[42]];
              else {
                Re(tt[We[48]] += tt[We[42]] * We[29], tt[We[49]] |= tt[We[48]] << tt[We[37]], tt[We[37]] += (tt[We[48]] & We[30]) > We[31] ? We[32] : We[33]);
                do {
                  Re(tt[We[9]].push(tt[We[49]] & We[11]), tt[We[49]] >>= We[10], tt[We[37]] -= We[10])
                } while (tt[We[37]] > We[24]);
                tt[We[48]] = -We[0]
              } return tt[We[48]] > -We[0] && tt[We[9]].push((tt[We[49]] | tt[We[48]] << tt[We[37]]) & We[11]), Se(tt[We[9]])
        }(Me[tt[We[2]]]) : ae[tt[We[2]]]
      }
      tt[We[12]] = We[0], et(101) + "V" in ce && function(...tt) {
        function Vt(...tt) {
          for (Re(tt[We[12]] = We[0], tt[We[51]] = 'AIV06tO54m#XFgBJf?MwQ_zTslpU[xq8SeL3Ka;](,H*9i^.!G1CrZWDRN&>EPkv<chdj2no%b}="7$`y/{u@)+~:|Y', tt[-We[50]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[-We[50]].length, tt[-We[55]] = [], tt[We[53]] = We[2], tt[We[54]] = We[2], tt[-We[19]] = -We[0]), tt[We[3]] = We[2]; tt[We[3]] < tt[We[46]]; tt[We[3]]++)
            if (tt[We[52]] = tt[We[51]].indexOf(tt[-We[50]][tt[We[3]]]), tt[We[52]] !== -We[0])
              if (tt[-We[19]] < We[2]) tt[-We[19]] = tt[We[52]];
              else {
                Re(tt[-We[19]] += tt[We[52]] * We[29], tt[We[53]] |= tt[-We[19]] << tt[We[54]], tt[We[54]] += (tt[-We[19]] & We[30]) > We[31] ? We[32] : We[33]);
                do {
                  Re(tt[-We[55]].push(tt[We[53]] & We[11]), tt[We[53]] >>= We[10], tt[We[54]] -= We[10])
                } while (tt[We[54]] > We[24]);
                tt[-We[19]] = -We[0]
              } return tt[-We[19]] > -We[0] && tt[-We[55]].push((tt[We[53]] | tt[-We[19]] << tt[We[54]]) & We[11]), Se(tt[-We[55]])
        }

        function Ot(...tt) {
          return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = Vt(Me[tt[We[2]]]) : ae[tt[We[2]]]
        }
        tt[We[12]] = We[2], Re(tt[-We[57]] = et(102) + Ot(We[20]) + Ot(We[86]) + Ot(105), tt[We[45]] = Ot(We[56]) + Ot(107) + Ot(108) + "?", tt[We[56]] = Ot(109) + Ot(110) + Ot(We[34]) + Ot(112) + Ot(113), tt[-We[57]].match(tt[We[45]] + tt[We[56]]))
      }(), tt[-We[58]] = We[2];
      for (const Vt in tt[We[2]]) tt[-We[58]]++;
      return tt[-We[58]]
    }, ye = (...tt) => {
      if (tt[We[12]] = We[2], function(...tt) {
          return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = function(...tt) {
            for (Re(tt[We[12]] = We[0], tt[We[47]] = 'rCpPHoQ.htJGez4A|T1_[#fZ$u+sBM:3vSE^)?<VI!7lUgXD"aqib6{(Wj;w`%d}9=5208c]KFnk>&m/LN@OxRy*~Y,', tt[-We[59]] = "" + (tt[We[2]] || ""), tt[We[4]] = tt[-We[59]].length, tt[We[60]] = [], tt[-We[60]] = We[2], tt[We[22]] = We[2], tt[We[43]] = -We[0]), tt[We[10]] = We[2]; tt[We[10]] < tt[We[4]]; tt[We[10]]++)
              if (tt[We[61]] = tt[We[47]].indexOf(tt[-We[59]][tt[We[10]]]), tt[We[61]] !== -We[0])
                if (tt[We[43]] < We[2]) tt[We[43]] = tt[We[61]];
                else {
                  Re(tt[We[43]] += tt[We[61]] * We[29], tt[-We[60]] |= tt[We[43]] << tt[We[22]], tt[We[22]] += (tt[We[43]] & We[30]) > We[31] ? We[32] : We[33]);
                  do {
                    Re(tt[We[60]].push(tt[-We[60]] & We[11]), tt[-We[60]] >>= We[10], tt[We[22]] -= We[10])
                  } while (tt[We[22]] > We[24]);
                  tt[We[43]] = -We[0]
                } return tt[We[43]] > -We[0] && tt[We[60]].push((tt[-We[60]] | tt[We[43]] << tt[We[22]]) & We[11]), Se(tt[We[60]])
          }(Me[tt[We[2]]]) : ae[tt[We[2]]]
        }(114) in ce && function(...tt) {
          function et(tt) {
            var et, Vt, Ot, qt, Dt, mt, dt, jt = 'Dx~}6P)anI5p!*9=?TU^jdX7OEb&FkcRHN:QwZSAyqBrs<oCiWM@+[>K$",(|23lGmVgvJfehtuLz_41{8.%`];0#/Y';
            for (Re(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = We[2], Dt = We[2], mt = -We[0]), dt = We[2]; dt < Vt; dt++) {
              var Ht = jt.indexOf(et[dt]);
              if (Ht !== -We[0])
                if (mt < We[2]) mt = Ht;
                else {
                  Re(mt += Ht * We[29], qt |= mt << Dt, Dt += (mt & We[30]) > We[31] ? We[32] : We[33]);
                  do {
                    Re(Ot.push(qt & We[11]), qt >>= We[10], Dt -= We[10])
                  } while (Dt > We[24]);
                  mt = -We[0]
                }
            }
            return mt > -We[0] && Ot.push((qt | mt << Dt) & We[11]), Se(Ot)
          }

          function Vt(...tt) {
            return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = et(Me[tt[We[2]]]) : ae[tt[We[2]]]
          }

          function Ot(...tt) {
            tt[We[12]] = We[0];
            const et = {};
            for (let Vt of tt[We[2]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + We[0] || We[0];
            return et
          }

          function qt(...tt) {
            tt[We[12]] = We[1];
            const et = buildCharMap(tt[We[2]]),
              Vt = buildCharMap(tt[We[0]]);
            for (let Ot in et)
              if (et[Ot] !== Vt[Ot]) return We[39];
            return Object.keys(et).length !== Object.keys(Vt).length ? We[39] : We[62]
          }

          function Dt(...tt) {
            tt[We[12]] = We[0];
            return mt(tt[We[2]]) !== 1 / 0
          }

          function mt(...tt) {
            if (tt[We[12]] = We[0], !tt[We[2]]) return -We[0];
            const et = mt(tt[We[2]].left),
              Vt = mt(tt[We[2]].right),
              Ot = Math.abs(et - Vt);
            if (et === 1 / 0 || Vt === 1 / 0 || Ot > We[0]) return 1 / 0;
            return Math.max(et, Vt) + We[0]
          }
          tt[We[12]] = We[2], window[Vt(115) + Vt(116) + Vt(117) + We[77]] = {
            buildCharacterMap: Ot,
            isAnagrams: qt,
            isBalanced: Dt,
            getHeightBalanced: mt
          }
        }(), Xe++ === We[7]) {
        function et(...tt) {
          for (Re(tt[We[12]] = We[0], tt[We[47]] = '3lNXhGDJpdoQ4Wq}cs(zASIE7!tU>r.~P8]|Bv;_)#CiKgMY=,*@`u:/^1%wf{[+y9bjO?ZRLe2T6nk0&FH"axm5$<V', tt[-We[63]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[-We[63]].length, tt[We[16]] = [], tt[We[64]] = We[2], tt[We[37]] = We[2], tt[We[6]] = -We[0]), tt[We[10]] = We[2]; tt[We[10]] < tt[We[46]]; tt[We[10]]++)
            if (tt[We[42]] = tt[We[47]].indexOf(tt[-We[63]][tt[We[10]]]), tt[We[42]] !== -We[0])
              if (tt[We[6]] < We[2]) tt[We[6]] = tt[We[42]];
              else {
                Re(tt[We[6]] += tt[We[42]] * We[29], tt[We[64]] |= tt[We[6]] << tt[We[37]], tt[We[37]] += (tt[We[6]] & We[30]) > We[31] ? We[32] : We[33]);
                do {
                  Re(tt[We[16]].push(tt[We[64]] & We[11]), tt[We[64]] >>= We[10], tt[We[37]] -= We[10])
                } while (tt[We[37]] > We[24]);
                tt[We[6]] = -We[0]
              } return tt[We[6]] > -We[0] && tt[We[16]].push((tt[We[64]] | tt[We[6]] << tt[We[37]]) & We[11]), Se(tt[We[16]])
        }

        function Vt(...tt) {
          return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = et(Me[tt[We[2]]]) : ae[tt[We[2]]]
        }

        function Ot(...tt) {
          var et;
          Re(tt[We[12]] = We[2], et = function(tt) {
            Re(this.uQ = tt, this.length = We[2], this.map = {}, this.head = We[65], this.tail = We[65])
          }, et.prototype.get = function(...tt) {
            var et;
            return Re(tt[We[12]] = We[0], et = this.map[tt[We[2]]]), et ? (this.remove(et), this.insert(et.key, et.val), et.val) : -We[0]
          }, et.prototype.put = function(...tt) {
            Re(tt[We[12]] = We[1], this.map[tt[We[2]]] ? (this.remove(this.map[tt[We[2]]]), this.insert(tt[We[2]], tt[We[0]])) : this.length === this.uQ ? (this.remove(this.head), this.insert(tt[We[2]], tt[We[0]])) : (this.insert(tt[We[2]], tt[We[0]]), this.length++))
          }, et.prototype.remove = function(...tt) {
            Re(tt[We[12]] = We[0], tt[We[44]] = tt[We[2]].prev, tt[We[45]] = tt[We[2]].next), tt[We[45]] && (tt[We[45]].prev = tt[We[44]]), tt[We[44]] && (tt[We[44]].next = tt[We[45]]), this.head === tt[We[2]] && (this.head = tt[We[45]]), this.tail === tt[We[2]] && (this.tail = tt[We[44]]), delete this.map[tt[We[2]].key]
          }, et.prototype.insert = function(...tt) {
            Re(tt[We[12]] = We[1], tt[We[1]] = new List(tt[We[2]], tt[We[0]]), this.tail ? (this.tail.next = tt[We[1]], tt[We[1]].prev = this.tail, this.tail = tt[We[1]]) : (this.tail = tt[We[1]], this.head = tt[We[1]]), this.map[tt[We[2]]] = tt[We[1]])
          }, console.log(et))
        }
        Vt(118) + "T" in ce && Ot(), (0, Mt[We[61]])() && (0, Qt[We[46]])("4 "), Xe = We[2]
      }
    }), we = function(tt) {
      function et(...tt) {
        return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = function(...tt) {
          for (Re(tt[We[12]] = We[0], tt[We[66]] = 'eDrNoSAfsm3vQ)LnP:d5B<%*Ub^+lWXkqz.VT_{4K,EM(8iYjwhCHIFG]~ZJ|!`cp&=g}xRO/62t"?17;$@#[9u>a0y', tt[We[1]] = "" + (tt[We[2]] || ""), tt[We[4]] = tt[We[1]].length, tt[We[9]] = [], tt[We[49]] = We[2], tt[We[68]] = We[2], tt[We[6]] = -We[0]), tt[We[10]] = We[2]; tt[We[10]] < tt[We[4]]; tt[We[10]]++)
            if (tt[-We[67]] = tt[We[66]].indexOf(tt[We[1]][tt[We[10]]]), tt[-We[67]] !== -We[0])
              if (tt[We[6]] < We[2]) tt[We[6]] = tt[-We[67]];
              else {
                Re(tt[We[6]] += tt[-We[67]] * We[29], tt[We[49]] |= tt[We[6]] << tt[We[68]], tt[We[68]] += (tt[We[6]] & We[30]) > We[31] ? We[32] : We[33]);
                do {
                  Re(tt[We[9]].push(tt[We[49]] & We[11]), tt[We[49]] >>= We[10], tt[We[68]] -= We[10])
                } while (tt[We[68]] > We[24]);
                tt[We[6]] = -We[0]
              } return tt[We[6]] > -We[0] && tt[We[9]].push((tt[We[49]] | tt[We[6]] << tt[We[68]]) & We[11]), Se(tt[We[9]])
        }(Me[tt[We[2]]]) : ae[tt[We[2]]]
      }
      if ((arguments[et(119)] > We[0] && arguments[We[0]] !== We[18] ? arguments[We[0]] : We[39]) && (0, Bt[We[6]])(tt)) {
        function Ot(...tt) {
          for (Re(tt[We[12]] = We[0], tt[We[47]] = '|nirmlHeobPVDaTpSz{tBd1K_hI7YFUfG]x$)%J*C^M#NR6Q:4~;X!9>w8uy.2OEc},A3W(kZ"gL?0j@v`&/s[<5q+=', tt[We[45]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[We[45]].length, tt[-We[64]] = [], tt[We[7]] = We[2], tt[We[37]] = We[2], tt[We[20]] = -We[0]), tt[-We[69]] = We[2]; tt[-We[69]] < tt[We[46]]; tt[-We[69]]++)
            if (tt[We[70]] = tt[We[47]].indexOf(tt[We[45]][tt[-We[69]]]), tt[We[70]] !== -We[0])
              if (tt[We[20]] < We[2]) tt[We[20]] = tt[We[70]];
              else {
                Re(tt[We[20]] += tt[We[70]] * We[29], tt[We[7]] |= tt[We[20]] << tt[We[37]], tt[We[37]] += (tt[We[20]] & We[30]) > We[31] ? We[32] : We[33]);
                do {
                  Re(tt[-We[64]].push(tt[We[7]] & We[11]), tt[We[7]] >>= We[10], tt[We[37]] -= We[10])
                } while (tt[We[37]] > We[24]);
                tt[We[20]] = -We[0]
              } return tt[We[20]] > -We[0] && tt[-We[64]].push((tt[We[7]] | tt[We[20]] << tt[We[37]]) & We[11]), Se(tt[-We[64]])
        }

        function qt(...tt) {
          return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = Ot(Me[tt[We[2]]]) : ae[tt[We[2]]]
        }

        function Dt() {
          var tt;

          function et() {}
          Re(tt = function(...tt) {
            for (Re(tt[We[12]] = We[1], tt[We[1]] = We[2], tt[We[45]] = We[2], tt[We[71]] = new et(We[2]), tt[We[72]] = tt[We[71]], tt[We[49]] = tt[We[2]], tt[We[37]] = tt[We[0]]); tt[We[49]] !== We[65] || tt[We[37]] !== We[65];) Re(tt[We[45]] = (tt[We[49]] ? tt[We[49]].val : We[2]) + (tt[We[37]] ? tt[We[37]].val : We[2]) + tt[We[1]], tt[We[1]] = Math.floor(tt[We[45]] / We[73]), tt[We[72]].next = new et(tt[We[45]] % We[73]), tt[We[72]] = tt[We[72]].next, tt[We[49]] = tt[We[49]] ? tt[We[49]].next : We[65], tt[We[37]] = tt[We[37]] ? tt[We[37]].next : We[65]);
            return tt[We[1]] && (tt[We[72]].next = new et(tt[We[1]])), tt[We[71]].next
          }, console.log(tt))
        }
        return void(qt(120) in ce && Dt())
      }
      const Vt = window[et(121)];
      if (typeof Vt !== et(122) + "on" || tt instanceof Vt || (0, Gt.I)(tt)) {
        function mt(...tt) {
          for (Re(tt[We[12]] = We[0], tt[-We[80]] = 'uGHlOMcTXCoJ)6_+7ZSep3/Kgf9FDx1A`,Q8r2(^Lz@<WR?:&I};.>50jmv*Y"|Ph#[wEn%bUy!k4=B]qNt{as~V$id', tt[We[78]] = "" + (tt[We[2]] || ""), tt[We[4]] = tt[We[78]].length, tt[-We[82]] = [], tt[We[7]] = We[2], tt[We[22]] = We[2], tt[We[81]] = -We[0]), tt[We[79]] = We[2]; tt[We[79]] < tt[We[4]]; tt[We[79]]++)
            if (tt[We[42]] = tt[-We[80]].indexOf(tt[We[78]][tt[We[79]]]), tt[We[42]] !== -We[0])
              if (tt[We[81]] < We[2]) tt[We[81]] = tt[We[42]];
              else {
                Re(tt[We[81]] += tt[We[42]] * We[29], tt[We[7]] |= tt[We[81]] << tt[We[22]], tt[We[22]] += (tt[We[81]] & We[30]) > We[31] ? We[32] : We[33]);
                do {
                  Re(tt[-We[82]].push(tt[We[7]] & We[11]), tt[We[7]] >>= We[10], tt[We[22]] -= We[10])
                } while (tt[We[22]] > We[24]);
                tt[We[81]] = -We[0]
              } return tt[We[81]] > -We[0] && tt[-We[82]].push((tt[We[7]] | tt[We[81]] << tt[We[22]]) & We[11]), Se(tt[-We[82]])
        }

        function dt(...tt) {
          return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = mt(Me[tt[We[2]]]) : ae[tt[We[2]]]
        }

        function jt(...tt) {
          function et(...tt) {
            return tt[We[12]] = We[0], tt[We[2]][We[0]] * We[85] + (tt[We[2]][We[2]] < We[2] ? We[84] | tt[We[2]][We[2]] : tt[We[2]][We[2]])
          }

          function Vt(...tt) {
            switch (tt[We[12]] = We[0], ((tt[We[2]] & We[84]) !== We[2]) * We[0] + (tt[We[2]] < We[2]) * We[1]) {
              case We[2]:
                return [tt[We[2]] % We[84], Math.trunc(tt[We[2]] / We[85])];
              case We[0]:
                return [tt[We[2]] % We[84] - We[84], Math.trunc(tt[We[2]] / We[85]) + We[0]];
              case We[1]:
                return [((tt[We[2]] + We[84]) % We[84] + We[84]) % We[84], Math.round(tt[We[2]] / We[85])];
              case We[4]:
                return [tt[We[2]] % We[84], Math.trunc(tt[We[2]] / We[85])]
            }
          }
          tt[We[12]] = We[2], Re(tt[-We[86]] = et([We[1], We[16]]), tt[We[0]] = et([We[0], We[1]]), tt[We[87]] = tt[-We[86]] + tt[We[0]], tt[We[4]] = tt[We[87]] - tt[We[0]], tt[We[49]] = tt[We[4]] * We[1], tt[We[88]] = tt[We[49]] / We[1], console.log(Vt(tt[We[87]])), console.log(Vt(tt[We[4]])), console.log(Vt(tt[We[49]])), console.log(Vt(tt[We[88]])))
        }
        if (dt(We[83]) in ce && jt(), tt[dt(We[89]) + dt(129)] === We[39])(0, Qt[We[46]])("2 " + (0, lt[We[46]])(tt));
        else if (Ne(tt) < We[73]) {
          function Ht(tt) {
            var et, Vt, Ot, qt, Dt, mt, dt;
            for (Re(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = We[2], Dt = We[2], mt = -We[0]), dt = We[2]; dt < Vt; dt++) {
              var jt = 'r4{!xnw6kzTlo8Q*hX%Ceb]|,(c&ui#Z^0N<`mUH$OtMJ+IAE=27@fDKL/.d~"yG5P;9)jq[v1?S>}g:pF_a3VRBWsY'.indexOf(et[dt]);
              if (jt !== -We[0])
                if (mt < We[2]) mt = jt;
                else {
                  Re(mt += jt * We[29], qt |= mt << Dt, Dt += (mt & We[30]) > We[31] ? We[32] : We[33]);
                  do {
                    Re(Ot.push(qt & We[11]), qt >>= We[10], Dt -= We[10])
                  } while (Dt > We[24]);
                  mt = -We[0]
                }
            }
            return mt > -We[0] && Ot.push((qt | mt << Dt) & We[11]), Se(Ot)
          }

          function Xt(...tt) {
            return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = Ht(Me[tt[We[2]]]) : ae[tt[We[2]]]
          }

          function Et(...tt) {
            tt[We[12]] = We[2]
          }
          Xt(130) + "w" in ce && Et(), (0, Qt[We[46]])("3 ")
        } else ye()
      } else {
        function ft(...tt) {
          for (Re(tt[We[12]] = We[0], tt[-We[75]] = 'gkI?2)yR`%udHY7vV|aJ~5FA8m:+#iG(@6^>;"e=lf/<Uzoj&,!1r0Q$*9S[wNpD}P_B]4WK3tqMC{xLXh.bZsncETO', tt[-We[67]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[-We[67]].length, tt[We[16]] = [], tt[We[49]] = We[2], tt[We[37]] = We[2], tt[We[24]] = -We[0]), tt[We[74]] = We[2]; tt[We[74]] < tt[We[46]]; tt[We[74]]++)
            if (tt[We[61]] = tt[-We[75]].indexOf(tt[-We[67]][tt[We[74]]]), tt[We[61]] !== -We[0])
              if (tt[We[24]] < We[2]) tt[We[24]] = tt[We[61]];
              else {
                Re(tt[We[24]] += tt[We[61]] * We[29], tt[We[49]] |= tt[We[24]] << tt[We[37]], tt[We[37]] += (tt[We[24]] & We[30]) > We[31] ? We[32] : We[33]);
                do {
                  Re(tt[We[16]].push(tt[We[49]] & We[11]), tt[We[49]] >>= We[10], tt[We[37]] -= We[10])
                } while (tt[We[37]] > We[24]);
                tt[We[24]] = -We[0]
              } return tt[We[24]] > -We[0] && tt[We[16]].push((tt[We[49]] | tt[We[24]] << tt[We[37]]) & We[11]), Se(tt[We[16]])
        }

        function wt(...tt) {
          return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = ft(Me[tt[We[2]]]) : ae[tt[We[2]]]
        }

        function yt(...tt) {
          function et(...tt) {
            return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = function(...tt) {
              for (Re(tt[We[12]] = We[0], tt[We[47]] = '6=x8.04oGP5cU3k_)Sw!yVD^g~B&?nI;+XsZd#2[bLJ(`vAz*,Y%R>CFtiW9@p{Kua:ErQ$]q<mNh1/l}M|"TOf7Hej', tt[We[1]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[We[1]].length, tt[We[16]] = [], tt[-We[76]] = We[2], tt[We[22]] = We[2], tt[We[24]] = -We[0]), tt[We[10]] = We[2]; tt[We[10]] < tt[We[46]]; tt[We[10]]++)
                if (tt[We[42]] = tt[We[47]].indexOf(tt[We[1]][tt[We[10]]]), tt[We[42]] !== -We[0])
                  if (tt[We[24]] < We[2]) tt[We[24]] = tt[We[42]];
                  else {
                    Re(tt[We[24]] += tt[We[42]] * We[29], tt[-We[76]] |= tt[We[24]] << tt[We[22]], tt[We[22]] += (tt[We[24]] & We[30]) > We[31] ? We[32] : We[33]);
                    do {
                      Re(tt[We[16]].push(tt[-We[76]] & We[11]), tt[-We[76]] >>= We[10], tt[We[22]] -= We[10])
                    } while (tt[We[22]] > We[24]);
                    tt[We[24]] = -We[0]
                  } return tt[We[24]] > -We[0] && tt[We[16]].push((tt[-We[76]] | tt[We[24]] << tt[We[22]]) & We[11]), Se(tt[We[16]])
            }(Me[tt[We[2]]]) : ae[tt[We[2]]]
          }

          function Vt(...tt) {
            if (tt[We[12]] = We[0], !tt[We[2]]) return -We[0];
            const et = Vt(tt[We[2]].left),
              Ot = Vt(tt[We[2]].right),
              qt = Math.abs(et - Ot);
            if (et === 1 / 0 || Ot === 1 / 0 || qt > We[0]) return 1 / 0;
            return Math.max(et, Ot) + We[0]
          }
          tt[We[12]] = We[2], window[et(124) + et(We[60]) + et(126) + We[77]] = {
            buildCharacterMap: function(...tt) {
              tt[We[12]] = We[0];
              const et = {};
              for (let Vt of tt[We[2]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + We[0] || We[0];
              return et
            },
            isAnagrams: function(...tt) {
              tt[We[12]] = We[1];
              const et = buildCharMap(tt[We[2]]),
                Vt = buildCharMap(tt[We[0]]);
              for (let Ot in et)
                if (et[Ot] !== Vt[Ot]) return We[39];
              return Object.keys(et).length !== Object.keys(Vt).length ? We[39] : We[62]
            },
            isBalanced: function(...tt) {
              return tt[We[12]] = We[0], Vt(tt[We[2]]) !== 1 / 0
            },
            getHeightBalanced: Vt
          }
        }
        wt(We[44]) in ce && yt(), (0, Qt[We[46]])("5 ")
      }
    }, wt.j.subscribe("customBindingsChanged", (() => {
      Pe()
    }));
    let Ze = !1,
      Le = !1;
    const Fe = () => Ze || Le && It.c.isInGame(),
      ke = tt => {
        Fe() && tt.preventDefault()
      };
    wt.j.subscribe("displaymodeFullscreenChange", (tt => {
      Ge()
    })), wt.j.subscribe("pointerLockUpdate", (tt => {
      Ze = tt, Ge(), ze()
    })), wt.j.subscribe("freeCursorUpdate", (tt => {
      Le = tt, Ge(), ze()
    }));
    const Ge = () => {
        window.removeEventListener("wheel", ke), Pt.isIframed && !(0, mt.o)() && (Ze || Le) && window.addEventListener("wheel", ke, {
          passive: !1
        })
      },
      ze = () => {
        window.removeEventListener("wheel", oe), (Ze || Le) && window.addEventListener("wheel", oe, {
          passive: !1
        })
      },
      oe = tt => {
        !0 === tt.ctrlKey && Fe() && tt.preventDefault()
      };

    function re(tt) {
      wt.j.sw("QTEMouseState", {
        isDown: tt
      })
    }

    function Ue(tt) {
      var et, Vt, qt, Dt, mt, dt, jt, Ht;
      const Qt = (0, St.e)();
      Qt.Itt = null !== (et = function(tt, et) {
        var Vt, Ot;
        if (!le) return null;
        const qt = tt.bloxd;
        je ??= qt.getMetaInfo("Board").rootId;
        const Dt = null !== (Vt = null === et || void 0 === et ? void 0 : et.o3) && void 0 !== Vt ? Vt : null;
        if (!Dt || qt.getMetaInfo(Dt).rootId !== je) return null;
        const mt = null !== (Ot = null === et || void 0 === et ? void 0 : et.position) && void 0 !== Ot ? Ot : null;
        if (qt.playerCanChangePos(tt.lL, mt[0], mt[1], mt[2])) return null;
        const dt = (tt, et, Vt) => {
          const Ot = qt.blockDataOwner.getBlockData(tt, et, Vt),
            Dt = null === Ot || void 0 === Ot ? void 0 : Ot.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Zt.singleLineBoardActions.has(Dt)
        };
        if (dt(mt[0], mt[1], mt[2])) return null;
        let jt;
        tt.gtt && (jt = [...tt.gtt], tt.Xp(jt, jt));
        const Ht = (jt ? tt.camera.ZY : 0) + qt.getBlockReach(tt.lL);
        return tt.pickBlock(jt, tt.stt, Ht, ((et, Vt, Ot, Dt) => 0 !== et && ("Board" !== qt.getMetaInfo(et).rootName || qt.playerCanChangePos(tt.lL, Vt, Ot, Dt) || dt(Vt, Ot, Dt))))
      }(Qt, Qt.Itt)) && void 0 !== et ? et : Qt.Itt;
      const lt = null !== (Vt = null === (qt = Qt.Itt) || void 0 === qt ? void 0 : qt.position) && void 0 !== Vt ? Vt : null,
        ft = null !== (Dt = Qt.stt) && void 0 !== Dt ? Dt : Qt.camera.zp(),
        yt = St.g.localPlayerPickActionHelper.getPickEntityResult(ft),
        Nt = null !== (mt = Qt.Itt) && void 0 !== mt && mt.o3 ? (0, zt.d)(Qt.Itt.o3) : "Air",
        Mt = tt === Et.c.UpFirePrimary || tt === Et.c.UpFireSecondary,
        bt = Mt ? "onPlayerClickUp" : "onPlayerClick",
        Jt = Mt ? tt === Et.c.UpFireSecondary : tt === Et.c.DownFireSecondary,
        Ct = !Mt && (0, Ot.getWasDoubleClick)();
      wt.j.sw("mouseState", {
        iX: tt,
        isDown: !Mt
      }), (0, Ot.sendColyMessage)(Xt.uh, {
        iX: tt,
        YX: Ct,
        Hm: lt,
        Xm: yt
      }, !0), (0, St.c)().client.triggerGameCallback(bt, Qt.lL, Jt, null !== (dt = null === lt || void 0 === lt ? void 0 : lt[0]) && void 0 !== dt ? dt : null, null !== (jt = null === lt || void 0 === lt ? void 0 : lt[1]) && void 0 !== jt ? jt : null, null !== (Ht = null === lt || void 0 === lt ? void 0 : lt[2]) && void 0 !== Ht ? Ht : null, Nt, yt)
    }
    window.addEventListener("keydown", (tt => {
      ["ArrowUp", "ArrowDown"].includes(tt.key) && tt.preventDefault()
    })), document.addEventListener("keydown", (tt => {
      (0, kt.b)(tt, (() => {
        const tt = (0, St.e)();
        return (0, Ft.B)(tt) || !1 !== tt.OJ.canCustomiseChar
      }))
    }))
  },
  39297: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      f: () => mt
    });
    var Ot = Vt(38649);
    let qt = !1;

    function Dt() {
      return qt
    }

    function mt(tt) {
      qt = tt, tt ? Ot.f.setMultiplierType("emoteWheel", 0) : Ot.f.removeMultiplier("emoteWheel")
    }
  },
  39313: (tt, et, Vt) => {
    function Ot(tt) {
      return Boolean(tt.OJ.useInventory && tt.OJ.useFullInventory && tt.mJ.VVt(tt.lL))
    }
    Vt.d(et, {
      d: () => Ot
    })
  },
  39179: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      d: () => qt
    });
    var Ot = Vt(37398);

    function qt(tt, et) {
      return {
        replayedClipName: tt,
        replayedClipAgeSeconds: et
      }
    }

    function Dt(tt, et, Vt, qt, Dt) {
      const mt = function(tt) {
          if ("object" !== typeof tt || null === tt) return null;
          const {
            replayedClipName: et,
            replayedClipAgeSeconds: Vt
          } = tt;
          return "string" === typeof et && "number" === typeof Vt ? {
            sO: et,
            nO: Vt
          } : null
        }(Vt),
        dt = null === mt ? Vt : null,
        {
          sO: jt = null,
          nO: Ht = 0
        } = null !== mt && void 0 !== mt ? mt : {};
      tt.animateEntity(et, Ot.g.Custom, dt, qt, Dt, jt, Ht)
    }
  },
  39305: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt
    });
    var Ot = Vt(38610),
      qt = Vt(391),
      Dt = Vt(2848);

    function mt() {
      var tt, et, Vt, Ot;
      const mt = (0, Dt.e)(),
        dt = null !== (tt = null === (et = mt.mJ.Tet(mt.lL)) || void 0 === et ? void 0 : et.selectedItem) && void 0 !== tt ? tt : null,
        jt = dt ? (0, Dt.c)().getItemStat(mt.lL, dt.name, "attackCooldownMs") : null,
        Ht = (0, qt.kd)(jt, null === dt || void 0 === dt || null === (Vt = dt.attributes.customAttributes) || void 0 === Vt || null === (Ot = Vt.enchantments) || void 0 === Ot ? void 0 : Ot["Attack Speed"]);
      return Math.max(56, Math.ceil((Ht + 30) / 3))
    }
    class dt {
      constructor(tt, et) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [tt], this.dueMs = tt, this.intervalMs = et
      }
      spacedBy(tt, et) {
        if (tt === this.intervalMs) return this;
        const Vt = this.tries[this.tries.length - 1],
          Ot = new dt(Vt, tt);
        return Ot.dueMs = Math.max(Vt, et - tt), Ot
      }
      nextDueMs() {
        const tt = this.tries[this.tries.length - 1];
        return Math.max(tt + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(tt, et) {
        this.tries.push(tt), this.tries.length > 3 && this.tries.shift(), this.dueMs = et
      }
    }
    var jt = Vt(39297),
      Ht = Vt(1387);
    class Xt {
      constructor() {
        this.timer = null, this.tries = new dt(0, 0), this.check = () => {
          const tt = Date.now(),
            et = this.tries.spacedBy(mt(), tt),
            Vt = et.nextDueMs();
          if (tt < Vt) this.schedule();
          else {
            if (et.noteTry(tt, Vt), this.tries = et, (0, Ht.r)() && !(0, jt.e)()) {
              var qt, dt;
              (0, Ot.f)();
              const tt = (0, Dt.e)();
              null === (qt = tt.mJ.MVt(tt.lL)) || void 0 === qt || null === (dt = qt.LJ) || void 0 === dt || dt.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var tt;
        null === (tt = Xt.running) || void 0 === tt || tt.stop(), Xt.running = this, this.tries = new dt(Date.now(), mt()), this.schedule()
      }
      static stopRunning() {
        var tt;
        null === (tt = Xt.running) || void 0 === tt || tt.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, Xt.running === this && (Xt.running = null)
      }
      schedule() {
        const tt = Date.now(),
          et = this.tries.spacedBy(mt(), tt).nextDueMs() - tt;
        this.timer = setTimeout(this.check, Math.min(et, 100))
      }
    }
    Xt.running = null
  },
  39187: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => ft,
      g: () => Xt,
      i: () => Et,
      j: () => lt,
      n: () => wt,
      r: () => Qt
    });
    var Ot = Vt(39196),
      qt = Vt(37480),
      Dt = Vt(3751),
      mt = Vt(2026),
      dt = Vt(31),
      jt = Vt(2848);
    const Ht = new Ot.b;

    function Xt() {
      return Ht
    }

    function Qt() {
      Ht.clear()
    }

    function lt() {
      for (const tt of Ht.ids()) {
        const et = Ht.getName(tt);
        void 0 !== et && mt.d.delete(et)
      }
      Qt(), dt.j.sw("playerRosterChanged", Ht.ids())
    }

    function Et(tt, et) {
      var Vt, Ot;
      if (Ht.has(tt)) return Ht.getSetting(tt, et);
      const qt = (0, jt.e)();
      return null === (Vt = qt.dL[qt.lL]) || void 0 === Vt || null === (Ot = Vt[tt]) || void 0 === Ot ? void 0 : Ot[et]
    }

    function ft(tt) {
      const {
        added: et,
        removed: Vt,
        settingChanges: Ot
      } = Ht.apply(tt);
      for (const {
          playerId: qt,
          name: Dt
        }
        of Vt) void 0 === Dt || yt(qt) || mt.d.delete(Dt);
      for (const {
          playerId: Dt,
          settings: mt
        }
        of Ot)
        if (yt(Dt)) wt(Dt, mt);
        else
          for (const tt in mt)(0, qt.i)(Dt, tt, mt[tt]);
      (et.length > 0 || Vt.length > 0) && dt.j.sw("playerRosterChanged", Ht.ids())
    }

    function wt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ht.getSettings(tt);
      if (et) {
        (0, qt.e)(tt);
        for (const Vt in et)(0, qt.c)(tt, Vt, et[Vt])
      }
    }

    function yt(tt) {
      return tt === (0, jt.e)().Ttt || (0, jt.c)().client.hasEntity(tt)
    }(0, Dt.onGameReset)(Qt)
  },
  38335: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Wt,
      h: () => ut,
      i: () => ht,
      k: () => vt,
      m: () => St
    });
    var Ot = Vt(37331),
      qt = Vt(38340),
      Dt = Vt(404),
      mt = Vt.n(Dt),
      dt = Vt(3470);
    const jt = new Ot.uf,
      Ht = new Ot.uf,
      Xt = new Ot.uf,
      Qt = new Ot.uf,
      lt = new Ot.uf,
      Et = [0, 0, 0],
      ft = {
        x: 0,
        y: 0
      },
      wt = new Ot.uf(1, 0, 0),
      yt = new Ot.uf(0, 1, 0),
      Nt = Ot.Matrix.Identity(),
      Mt = new Ot.Matrix,
      bt = new Ot.Matrix,
      Jt = new Ot.uf,
      Ct = new qt.c(0, 0, 0, 0);

    function ut(tt, et) {
      var Vt, qt;
      const Dt = Kt(tt, et);
      if (Dt) {
        const tt = Dt.x,
          et = Dt.y,
          Vt = tt - 50,
          Ot = et - 50;
        return Math.abs(Vt) <= dt.d && Math.abs(Ot) <= (0, dt.m)() ? {
          x: tt,
          y: et
        } : Rt(Vt, Ot)
      }
      Xt.W9(et[0], et[1], et[2]),
        function(tt) {
          const et = tt.Bf.HOt(),
            Vt = et ? Ot.Matrix.FromArrayToRef(et.worldMatrix, 0, bt) : tt.Bf.vI().activeCamera.getWorldMatrix();
          Ot.uf.TransformNormalToRef(wt, Vt, Qt), Qt.normalize(), Ot.uf.TransformNormalToRef(yt, Vt, lt), lt.normalize()
        }(tt);
      const mt = Ot.uf.Dot(Xt, Qt);
      let jt = -Ot.uf.Dot(Xt, lt);
      Math.abs(mt) < .001 && Math.abs(jt) < .001 && (jt = -1);
      const Ht = null !== (Vt = null === (qt = tt.Bf.HOt()) || void 0 === qt ? void 0 : qt.projectionMatrix) && void 0 !== Vt ? Vt : tt.Bf.vI().activeCamera.getProjectionMatrix().m;
      return Rt(mt * Ht[0], jt * Ht[5])
    }

    function Kt(tt, et) {
      const Vt = tt.Bf.vI(),
        qt = Vt.Jf(),
        Dt = qt.getRenderWidth(),
        mt = qt.getRenderHeight();
      Ct.width = Dt, Ct.height = mt;
      const dt = tt.Bf.HOt(),
        Xt = dt ? Jt.W9(dt.eye[0], dt.eye[1], dt.eye[2]) : tt.Bf.camera.globalPosition;
      jt.W9(Xt.x + 10 * et[0], Xt.y + 10 * et[1], Xt.z + 10 * et[2]);
      const Qt = dt ? Ot.Matrix.FromArrayToRef(dt.viewProjectionMatrix, 0, Mt) : Vt.getTransformMatrix();
      return Ot.uf.ProjectToRef(jt, Nt, Qt, Ct, Ht), Ht.z < 0 || Ht.z > 1 ? null : (ft.x = Ht.x / Dt * 100, ft.y = Ht.y / mt * 100, ft)
    }

    function ht(tt, et) {
      return ut(tt, ct(tt, et))
    }

    function vt(tt, et) {
      const Vt = Kt(tt, ct(tt, et));
      return Vt && {
        x: Vt.x,
        y: Vt.y
      }
    }

    function Wt(tt) {
      var et, Vt;
      return 1 / (null !== (et = null === (Vt = tt.Bf.HOt()) || void 0 === Vt ? void 0 : Vt.projectionMatrix[0]) && void 0 !== et ? et : tt.Bf.vI().activeCamera.getProjectionMatrix().m[0])
    }

    function St(tt, et, Vt) {
      const Ot = tt.Bf.HOt(),
        qt = Ot ? Ot.worldMatrix : tt.Bf.vI().activeCamera.getWorldMatrix().m,
        Dt = tt.bl;
      for (let mt = 0; mt < 3; mt++) et[mt] = qt[12 + mt] + Dt[mt], Vt[mt] = qt[8 + mt];
      mt().normalize(Vt, Vt)
    }

    function ct(tt, et) {
      const Vt = tt.bl,
        Ot = tt.Bf.HOt(),
        qt = Ot ? Jt.W9(Ot.eye[0], Ot.eye[1], Ot.eye[2]) : tt.Bf.camera.globalPosition;
      return Et[0] = et[0] - Vt[0] - qt.x, Et[1] = et[1] - Vt[1] - qt.y, Et[2] = et[2] - Vt[2] - qt.z, mt().normalize(Et, Et), Et
    }

    function Rt(tt, et) {
      return (0, dt.f)(tt, et, dt.d, (0, dt.m)())
    }
  },
  39167: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => lt
    });
    var Ot = Vt(229),
      qt = Vt(404),
      Dt = Vt.n(qt),
      mt = Vt(36992),
      dt = Vt(36996),
      jt = Vt(2848);
    const Ht = Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
      Xt = 250,
      Qt = 1.1,
      lt = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(tt, et) {
          this.entities.set(tt, et)
        }
        update(tt, et) {
          const Vt = this.entities.get(tt);
          this.entities.set(tt, et);
          const Ot = this.playing.get(tt);
          Ot && (Vt && Vt.soundName === et.soundName ? (Ot.sound.setRelativeVolume(et.volume), Ot.sound.rate(et.rate), Ot.sound.setPannerAttr({
            refDistance: et.refDistance
          })) : this.stopEntity(tt))
        }
        remove(tt) {
          this.stopEntity(tt), this.entities.delete(tt)
        }
        BQ(tt) {
          this.msSinceLastScan += tt, this.msSinceLastScan < Xt || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(tt) {
          const et = this.playing.get(tt);
          et && (et.sound.stop(), this.playing.delete(tt))
        }
        startEntity(tt, et, Vt) {
          const Ot = (0, dt.g)(et.soundName);
          if (!Ot) return console.error(`AudioEntityManager: no sound found for "${et.soundName}", dropping audio entity ${tt}`), void this.remove(tt);
          const qt = mt.e.play(Ot, et.volume, Vt, et.maxHearDist, et.refDistance, !0);
          qt.rate(et.rate), this.playing.set(tt, {
            sound: qt,
            lastPos: Dt().clone(Vt)
          })
        }
        scan() {
          const tt = (0, jt.e)();
          if (!tt) return;
          const et = tt.mJ.YM(tt.lL);
          if (et)
            for (const [Vt, Ot] of this.entities) {
              if (!tt.mJ.ptt(Vt, "position")) continue;
              const qt = tt.mJ.YM(Vt),
                mt = Dt().sqrDist(et, qt),
                dt = this.playing.get(Vt);
              if (dt) {
                const tt = Ot.maxHearDist * Qt;
                mt > tt * tt ? this.stopEntity(Vt) : Dt().equals(qt, dt.lastPos) || (dt.sound.setPosition([qt[0], qt[1] + Ht, qt[2]]), Dt().copy(dt.lastPos, qt))
              } else mt <= Ot.maxHearDist * Ot.maxHearDist && this.startEntity(Vt, Ot, qt)
            }
        }
      }
  },
  39224: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      f: () => qt
    });
    var Ot = Vt(31);

    function qt(tt) {
      return "refetchCode" === tt || "devDownloadJson" === tt || tt.startsWith("Plugin")
    }

    function Dt(tt, et) {
      "refetchCode" !== tt ? "Plugin|MobAiPlugin|ShowPetUi" !== tt ? Promise.all([Vt.e(109), Vt.e(110), Vt.e(105), Vt.e(107), Vt.e(218)]).then((() => Vt(41997))).then((Vt => {
        let {
          runClientGameMessage: Ot
        } = Vt;
        Ot(tt, et)
      })).catch((et => {
        console.error(`Game message ${tt} failed`, et)
      })) : Ot.j.sw("showPetUi", et) : Ot.j.sw("refetchCode")
    }
  },
  39208: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt
    });
    var Ot = Vt(1308),
      qt = Vt(1429),
      Dt = Vt(26),
      mt = Vt(1410),
      dt = Vt(1423),
      jt = Vt(1613),
      Ht = Vt(36709);

    function Xt(tt) {
      let {
        iq: et,
        Yq: Vt
      } = tt;
      const Xt = null !== et && void 0 !== et ? et : (0, dt.c)().gameNameWithVariation;
      (0, Ot.M)(Xt) && ((0, Ht.j)(), (0, mt.ab)((() => {
        console.log("Received matchmaking order from game server to game", et), (0, Dt.i)("inGameReplay"), (0, jt.navigatePreserveSearch)((0, qt.c)(Xt, null !== Vt && void 0 !== Vt ? Vt : void 0))
      }), "video_start"))
    }
  },
  39202: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => jt,
      i: () => mt,
      l: () => dt,
      n: () => Ht
    });
    var Ot = Vt(31),
      qt = Vt(1450);
    const Dt = new Map;

    function mt(tt, et) {
      Ot.j.sw("newUiRequest", {
        id: tt,
        clientParameters: et
      }, !0)
    }

    function dt(tt) {
      Ot.j.sw("removeUiRequest", tt, !0);
      const et = Dt.get(tt);
      et && (et.tearDownNotification(), Dt.delete(tt))
    }

    function jt() {
      Ot.j.sw("clearUiRequests");
      for (const tt of Dt.values()) tt.tearDownNotification();
      Dt.clear()
    }

    function Ht(tt, et, Vt, Ot) {
      const mt = qt.NotificationProvider.showPromptPopup({
        title: et,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: Vt,
        unlockPointerKey: "uiRequestPopup"
      });
      Dt.set(tt, mt), mt.getResult().then((et => {
        Dt.delete(tt), "notificationTornDown" !== et && Ot(et)
      }))
    }
  },
  39196: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor() {
        this.members = new Map
      }
      apply(tt) {
        const et = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Ot of tt.zt) {
          let tt = this.members.get(Ot.ot);
          if (tt || (tt = {
              name: null,
              settings: {}
            }, this.members.set(Ot.ot, tt), et.added.push(Ot.ot)), null !== Ot.rt && (tt.name = Ot.rt), null !== Ot.Ut || Ot.Yt.length > 0) {
            const Vt = null === Ot.Ut ? {} : JSON.parse(Ot.Ut);
            Object.assign(tt.settings, Vt);
            for (const et of Ot.Yt) delete tt.settings[et], Vt[et] = void 0;
            et.settingChanges.push({
              playerId: Ot.ot,
              settings: Vt
            })
          }
        }
        for (const Ot of tt.Bt) {
          const tt = this.members.get(Ot);
          var Vt;
          if (tt) this.members.delete(Ot), et.removed.push({
            playerId: Ot,
            name: null !== (Vt = tt.name) && void 0 !== Vt ? Vt : void 0
          })
        }
        return et
      }
      has(tt) {
        return this.members.has(tt)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(tt) {
        var et, Vt;
        return null !== (et = null === (Vt = this.members.get(tt)) || void 0 === Vt ? void 0 : Vt.name) && void 0 !== et ? et : void 0
      }
      getSettings(tt) {
        var et;
        return null === (et = this.members.get(tt)) || void 0 === et ? void 0 : et.settings
      }
      getSetting(tt, et) {
        var Vt;
        return null === (Vt = this.members.get(tt)) || void 0 === Vt ? void 0 : Vt.settings[et]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39226: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      f: () => qt
    });
    const Ot = ["description", "label"];

    function qt(tt) {
      const et = tt.type;
      return {
        type: et,
        params: tt[et]
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);