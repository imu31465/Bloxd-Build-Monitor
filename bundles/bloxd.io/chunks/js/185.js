export const id = 185;
export const ids = [185];
export const modules = {
  40427: (bb, wb, Mb) => {
    function eb(bb) {
      return !(!bb.lobbyLeaderboardInfo && !bb.lobbyManage)
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  40397: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      f: () => Vb
    });
    var eb = Mb(29);
    let Hb = !1;

    function pb() {
      return Hb
    }

    function Vb(bb) {
      Hb !== bb && (Hb = bb, eb.k.iI("replayViewer|videoExportChanged"))
    }
  },
  40332: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(29),
      Hb = Mb(2167);

    function pb(bb) {
      let {
        taskId: wb,
        progress: Mb
      } = bb;
      const eb = Hb.c.get("_tasks");
      null !== eb && void 0 !== eb && eb[wb] && Hb.c.apply({
        _tasks: {
          ...eb,
          [wb]: {
            ...eb[wb],
            progress: Mb
          }
        }
      })
    }
    eb.k.subscribe("clientTaskProgress", (bb => {
      pb(bb)
    }))
  },
  40265: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eM,
      c: () => wM,
      g: () => MM
    });
    var eb = Mb(2434),
      Hb = Mb(192),
      pb = Mb(225),
      Vb = Mb(667),
      gb = Mb(43),
      lb = Mb(2451),
      Lb = Mb(2550),
      Ib = Mb(2521),
      Ob = Mb(1301);
    const Ub = new WeakMap;
    class tb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          MOb: !0
        };
        this.callbacks = wb, this.options = Mb, this.Peb = void 0, this.sessionId = void 0, this.Zx = [], this.eOb = !1, this.BC = !1, this.HOb = void 0, this.Xx = 0, this.BVb = 0, this.pOb = (bb, wb) => {
          if (this.BC) return;
          const Mb = Number(bb);
          this.eOb ? this.VOb(Mb, wb) : this.Zx.push({
            id: Mb,
            payload: wb
          })
        }, this.dispose = () => {
          this.BC || (this.BC = !0, Ub.delete(this), this.Zx.length = 0, this.HOb())
        }, this.Peb = bb, this.sessionId = bb.sessionId, Ub.set(this, []), this.HOb = this.lOb()
      }
      LOb(bb) {
        this.HOb(), this.Peb = bb, this.sessionId = bb.sessionId, this.Xx = 0, this.BVb = 0, this.HOb = this.lOb()
      }
      get Ix() {
        return this.BVb
      }
      lOb() {
        const bb = this.Peb.Tm("*", this.pOb);
        return this.options.MOb && this.Peb.Yz(this.dispose), bb
      }
      VOb(bb, wb) {
        try {
          (0, Lb.dc)(bb) && (wb = (0, Lb.c)(bb, Ib.uI.from(wb)));
          const Mb = Ub.get(this)[bb];
          if ("function" !== typeof Mb) {
            if (this.callbacks.IOb) return void this.callbacks.IOb(bb, wb);
            throw new Error(`No onMessage handler registered for message id ${bb}`)
          }
          Mb(wb)
        } catch (Mb) {
          this.callbacks.OOb(`Error in onMessage ${bb} with payload ${JSON.stringify(wb)}`, Mb)
        } finally {
          this.Xx++
        }
      }
      UOb() {
        for (const {
            id: bb,
            payload: wb
          }
          of this.Zx) {
          if (this.BC) break;
          this.VOb(bb, wb)
        }
        this.Zx.length = 0
      }
      RD() {
        return this.BC
      }
      tOb() {
        if (this.eOb || this.BC) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          Tm: (bb, wb) => {
            if (this.eOb || this.BC) throw new Error("Trying to call onMessage after registration finished");
            this.Tm(bb, wb)
          },
          finishRegistration: () => {
            if (this.BC) throw new Error("Cannot finish message registration after disposal");
            this.eOb = !0, this.UOb()
          }
        }
      }
      Tm(bb, wb) {
        var Mb, eb;
        null === (Mb = (eb = this.callbacks).COb) || void 0 === Mb || Mb.call(eb);
        const Hb = Ub.get(this);
        for (; bb > Hb.length;) Hb[Hb.length] = null;
        Hb[bb] = wb
      }
      send(bb, wb) {
        this.EOb(), (0, Ob.x)(wb) ? this.Peb.sK(bb, wb) : this.Peb.send(bb, wb)
      }
      EOb() {
        var bb, wb;
        (this.BVb++, 5 === Cb++) && (null === (bb = (wb = this.callbacks).COb) || void 0 === bb || bb.call(wb), Cb = 0)
      }
      nB() {
        this.dispose(), this.Peb.nB()
      }
      leave() {
        this.dispose(), this.Peb.leave()
      }
    }
    let Cb = 0;
    var Eb = Mb(2455);
    class Fb extends tb {
      constructor(bb) {
        super(bb, {
          COb: () => {
            (0, gb.k)(!0) && (0, eb.yX)()
          },
          OOb: (bb, wb) => {
            var Mb;
            null === (Mb = (0, lb.h)()) || void 0 === Mb || Mb.sE(bb, wb)
          }
        }, {
          MOb: !1
        }), (0, Eb.d)(bb)
      }
      vx(bb, wb) {
        return !!(0, Eb.i)((0, Eb.b)(), this.Peb, bb, wb) && (this.EOb(), !0)
      }
      LOb(bb) {
        this.FOb(), super.LOb(bb), (0, Eb.d)(bb)
      }
      nB() {
        super.nB(), this.FOb()
      }
      FOb() {
        this.Peb.yB.wO.iW = void 0
      }
    }
    var Bb = Mb(29),
      sb = Mb(2167),
      mb = Mb(1965),
      hb = Mb(37746),
      zb = Mb(40272),
      Xb = Mb(39274),
      xb = Mb(39047),
      jb = Mb(661),
      Kb = Mb(39630);

    function rb(bb, wb, Mb) {
      const eb = function(bb) {
          const wb = new Int32Array(bb.length * Kb.f);
          return bb.forEach(((bb, Mb) => {
            const eb = Mb * Kb.f;
            if (4 === bb.length) {
              const [Mb, Hb, pb, Vb] = bb;
              wb.set([Mb, Hb, pb, Mb, Hb, pb, Vb], eb)
            } else {
              const [Mb, Hb, pb, Vb, gb, lb, Lb] = bb;
              wb.set([Mb, pb, gb, Hb, Vb, lb, Lb], eb)
            }
          })), wb
        }(Mb),
        Hb = (wb, Mb, eb, Hb) => {
          bb.setBlockNoMulti(wb, Mb, eb, Hb, !0)
        };
      bb.client.gameRecorder.isCapturing() ? (0, Kb.mb)(eb, (0, Kb.jb)(eb), Hb) : bb.hU.XO.pY(eb, {
        Sy: Hb,
        isHookId: wb => bb.blockChangeHasHooks(wb),
        watched: () => function(bb, wb, Mb) {
          const eb = [],
            Hb = (bb, wb, Mb) => {
              eb.push(bb, wb, Mb)
            },
            pb = new Set;
          for (let Vb = 0; Vb < Mb.length; Vb += Kb.f)
            for (let wb = (0, jb.V)(Mb[Vb]); wb <= (0, jb.V)(Mb[Vb + 3]); wb++)
              for (let eb = (0, jb.V)(Mb[Vb + 1]); eb <= (0, jb.V)(Mb[Vb + 4]); eb++)
                for (let gb = (0, jb.V)(Mb[Vb + 2]); gb <= (0, jb.V)(Mb[Vb + 5]); gb++) {
                  const Mb = `${wb}|${eb}|${gb}`;
                  pb.has(Mb) || (pb.add(Mb), bb.blockDataOwner.forEachDataCell(wb, eb, gb, Hb))
                }
          return wb.forEachCell(Hb), Int32Array.from(eb)
        }(bb, wb, eb)
      }), bb.hU.uwb()
    }

    function Rb(bb) {
      bb.Aeb = new Set, bb.Neb = new Set, bb.Jeb = new Set, bb.veb = new Set, bb.Seb = [], bb.Qeb = [], bb.Qq = new Set, bb.aM = [], bb.oq = []
    }
    class Db {
      constructor(bb) {
        this.hU = bb
      }
      register(bb) {
        const wb = this.hU,
          Mb = (0, lb.e)();
        bb.Tm(Lb.K, (bb => {
          wb.XO.Aeb.add(bb), wb.XO.Neb.delete(bb)
        })), bb.Tm(Lb.S, (bb => {
          wb.XO.Neb.add(bb), wb.XO.Aeb.delete(bb)
        })), bb.Tm(Lb.Yd, (bb => {
          wb.XO.Neb.delete(bb), wb.XO.Aeb.delete(bb)
        })), bb.Tm(Lb.P, (bb => {
          wb.XO.Jeb.add(bb), wb.XO.veb.delete(bb)
        })), bb.Tm(Lb.U, (bb => {
          wb.XO.veb.add(bb), wb.XO.Jeb.delete(bb)
        })), bb.Tm(Lb.be, (bb => {
          wb.XO.veb.delete(bb), wb.XO.Jeb.delete(bb)
        })), bb.Tm(Lb.N, (bb => {
          (0, Ob._)(bb, wb.XO.Qeb), (0, Ob._)(bb, wb.XO.Seb), wb.XO.Seb.push(bb)
        })), bb.Tm(Lb.T, (bb => {
          (0, Ob._)(bb, wb.XO.Seb), (0, Ob._)(bb, wb.XO.Qeb), wb.XO.Qeb.push(bb)
        })), bb.Tm(Lb.Zd, (bb => {
          (0, Ob._)(bb, wb.XO.Seb), (0, Ob._)(bb, wb.XO.Qeb)
        })), bb.Tm(Lb.Df, (bb => {
          let {
            bH: Mb,
            wH: eb
          } = bb;
          eb ? wb.XO.Qq.delete(Mb) : wb.XO.Qq.add(Mb)
        })), bb.Tm(Lb.zf, (bb => {
          let {
            aM: eb,
            iM: Hb
          } = bb;
          Mb.updateWalkThroughRect(wb.VJ, eb, Hb)
        })), (0, eb.onGameResetOnce)((() => {
          Rb(wb.XO)
        })), bb.Tm(Lb.Zb, (bb => {
          Xb.d.applyServerUpdate(bb)
        })), bb.Tm(Lb.W, (bb => {
          Mb.applyServerBlocks((() => {
            ! function(bb, wb) {
              for (const {
                  Uw: Mb,
                  tw: eb
                }
                of wb) {
                const wb = xb.d[eb];
                if (wb) {
                  const {
                    compX: eb,
                    compY: Hb,
                    compZ: pb,
                    mainMultiblock: Vb
                  } = wb;
                  bb.jW(Mb[0] - eb, Mb[1] - Hb, Mb[2] - pb, Vb)
                }
              }
              for (const {
                  Uw: Mb,
                  tw: eb,
                  Cw: Hb
                }
                of wb) bb.setBlockNoMulti(Mb[0], Mb[1], Mb[2], eb, !0), bb.blockDataOwner.setBlockData(Mb[0], Mb[1], Mb[2], null === Hb ? void 0 : JSON.parse(Hb)), bb.blockAdded(Mb[0], Mb[1], Mb[2], eb)
            }(Mb, bb)
          })), Bb.k.iI("changeBlockFail", bb), Bb.k.iI("blockChangeRefused"), Mb.client.triggerGameCallback("onChangeBlockFail", bb), Bb.k.iI("EditBoard", {
            pos: null
          }), Bb.k.iI("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        }));
        const Hb = bb => {
          Mb.applyServerBlocks((() => {
            rb(Mb, Xb.d, bb)
          }))
        };
        bb.Tm(Lb.ub, Hb), bb.Tm(Lb.Mb, Hb), bb.Tm(Lb.tf, (bb => {
          let {
            Op: wb,
            Up: eb
          } = bb;
          if (Mb.zk(wb[0], wb[1], wb[2])) {
            const bb = (0, lb.e)().Am(wb[0], wb[1], wb[2]);
            (0, lb.e)().updateMailboxContents(wb[0], wb[1], wb[2], bb, eb)
          }
        })), bb.Tm(Lb.we, (bb => {
          let {
            pos: wb,
            data: eb
          } = bb;
          Mb.blockDataOwner.setBlockData(wb[0], wb[1], wb[2], eb), Mb.blockAdded(wb[0], wb[1], wb[2], Mb.Am(wb[0], wb[1], wb[2]))
        }))
      }
    }
    var cb = Mb(38348),
      Yb = Mb(37646),
      Zb = Mb(39304),
      fb = Mb(39161),
      Ab = Mb(39319);
    class Wb {
      constructor(bb, wb) {
        this.hU = bb, this.setUpQueuedEntity = wb
      }
      register(bb) {
        const wb = this.hU,
          Mb = (0, lb.e)();
        bb.Tm(Lb.I, (bb => {
          let {
            bb: wb,
            wb: Mb
          } = bb;
          this.setUpQueuedEntity(wb), wb = (0, Yb.e)(wb), (0, lb.e)().client.gameRecorder.recordBulletShot(wb, Mb), Bb.k.iI(`bulletShot|${wb}`, {
            bulletDirections: Mb
          })
        })), bb.Tm(Lb.ac, (bb => {
          let {
            xH: wb,
            jH: Mb
          } = bb;
          Bb.k.iI("damagedByOtherPlayer", {
            xH: wb,
            direction: Mb
          }, !0)
        })), bb.Tm(Lb.pd, (bb => {
          Bb.k.iI("playerKilled", bb, !0), (0, Yb.i)(bb.killerEId) && !(0, Yb.i)(bb.deadEId) && Bb.k.iI("sessionReplayPlayerKill", {
            killstreak: bb.killstreak
          }), (0, lb.e)().client.gameRecorder.recordPlayerKilled(bb.deadEId, bb.killerEId, bb.withItem, bb.killstreak)
        })), bb.Tm(Lb.yb, (bb => {
          Bb.k.iI("customKillfeed", bb, !0), (0, lb.e)().client.gameRecorder.recordCustomKillfeed(bb.killer, bb.victim, bb.withItem)
        })), bb.Tm(Lb.Bd, (bb => {
          let {
            ee: Mb,
            He: eb
          } = bb;
          this.setUpQueuedEntity(Mb);
          const Hb = wb.pR.Leb(Mb);
          null !== Hb && void 0 !== Hb && Hb.isGun() && Hb.reload(Date.now(), eb)
        })), bb.Tm(Lb.pe, (bb => {
          let {
            fw: Mb,
            Aw: eb
          } = bb;
          const Hb = eb ? (0, Ab.d)(wb, eb) : void 0;
          Bb.k.iI("sendHitmarker", {
            fw: Mb,
            screenPos: Hb
          }, !0)
        })), bb.Tm(Lb.Dc, (bb => {
          let {
            ZH: eb,
            fH: Hb,
            WH: pb,
            JH: Vb,
            SH: gb,
            NH: lb,
            vH: Lb
          } = bb;
          this.setUpQueuedEntity(eb), eb = (0, Yb.e)(eb);
          const Ib = wb.pR.Meb(eb);
          if (Ib && (Ib.lastHurtTime = performance.now()), (0, Zb.playRigHurt)(wb, eb, lb), Bb.k.iI("lifeformHurt", {
              eId: eb,
              vH: Lb
            }), Hb) {
            const bb = (0, Ab.d)(wb, Hb.Aw);
            Bb.k.iI("yourAttackHit", {
              fw: Vb,
              screenPos: bb,
              hitSelf: eb === wb.VJ
            })
          }
          eb === wb.VJ && (Mb.shakePlayerCamera(eb, gb / 40, 200), Bb.k.iI("closeShopOnDamaged", null), Bb.k.iI("damagedByOtherPlayer", {
            xH: null,
            direction: lb,
            SH: gb
          }, !0));
          const Ob = wb.pR.Qm(eb);
          if (Ob && (pb || Vb)) {
            const bb = [Ob[0], Ob[1] + 1, Ob[2]];
            pb && (0, fb.o)(wb, fb.D, bb, 15), Vb && (0, fb.o)(wb, fb.u, bb, 10)
          }
        })), bb.Tm(Lb.zc, (bb => {
          let {
            yH: Mb,
            oH: eb,
            TH: Hb
          } = bb;
          (0, cb.e)(wb).setHealthFrac((0, Yb.e)(Mb), Hb), Bb.k.iI("lifeformHealthChanged", {
            eId: (0, Yb.e)(Mb),
            oH: eb,
            TH: Hb
          })
        })), bb.Tm(Lb.F, (bb => {
          let {
            OH: Mb,
            UH: eb
          } = bb;
          (0, lb.e)().playerAttacked(wb.VJ, Mb, eb)
        })), bb.Tm(Lb._, (() => {
          const bb = wb.pR.Leb(wb.VJ);
          null !== bb && void 0 !== bb && bb.isChargeable() && bb.finishCharging(!1, Date.now())
        })), bb.Tm(Lb.Gb, (bb => {
          let {
            bV: wb,
            wV: Mb,
            MV: eb,
            eV: Hb,
            HV: pb,
            pV: Vb
          } = bb;
          wb = (0, Yb.e)(wb), (0, lb.e)().client.updateEffect(wb, Mb, {
            displayName: eb,
            icon: Hb,
            duration: pb,
            level: Vb
          })
        })), bb.Tm(Lb.Cd, (bb => {
          let {
            bV: wb,
            wV: Mb
          } = bb;
          wb = (0, Yb.e)(wb), (0, lb.e)().client.removeEffect(wb, Mb)
        })), bb.Tm(Lb.qf, (bb => {
          Bb.k.iI("ttbEffectMultiplier", bb)
        }))
      }
    }
    var Jb = Mb(40296),
      Sb = Mb(38343),
      Nb = Mb(3044),
      vb = Mb(39330),
      Qb = Mb(37627),
      Gb = Mb(37630),
      qb = Mb(38264),
      ab = Mb(38383),
      ib = Mb(39336),
      ub = Mb(40300);
    class db {
      constructor(bb, wb) {
        this.hU = bb, this.setUpQueuedEntity = wb
      }
      register(bb) {
        const wb = this.hU,
          Mb = (0, lb.e)();
        bb.Tm(Lb.Pc, (bb => {
          let {
            eId: Mb,
            settings: eb
          } = bb;
          (0, ab.i)(Mb);
          for (const wb in eb)(0, ab.e)(Mb, wb, eb[wb]);
          if ("canSee" in eb && wb.pR.eMb(Mb, "hidingMeshManager")) {
            const bb = wb.pR.getState(Mb, "hidingMeshManager");
            bb.canSee = (0, ib.e)("canSee", eb.canSee), bb._forceUpdate = !0
          }
        })), bb.Tm(Lb.z, (bb => {
          let {
            IM: Mb,
            OM: eb,
            animationScript: Hb,
            UM: pb,
            tM: Vb,
            CM: gb,
            EM: Lb
          } = bb;
          Mb = (0, Yb.e)(Mb);
          const Ib = null === Hb && null !== gb ? (0, Jb.f)(gb, Lb) : Hb;
          (0, lb.e)().client.gameRecorder.recordAnimateEntity(Mb, eb, Ib, pb, Vb), (0, cb.e)(wb).animations.animateEntity(Mb, eb, Hb, pb, Vb, gb, Lb), null !== Hb || Mb === wb.VJ && eb === Sb.e.Emote && (0, lb.e)().client.cameraController.endTemporaryThirdPerson()
        })), bb.Tm(Lb.me, (bb => {
          (0, ub.e)(bb)
        })), bb.Tm(Lb.ld, (bb => {
          for (const wb of bb)(0, vb.t)(wb);
          Bb.k.iI("playerCosmeticsUpdated", bb, !0)
        })), bb.Tm(Lb.B, (bb => {
          for (const Mb of bb)(0, qb.e)(wb, Mb)
        })), bb.Tm(Lb.Qc, (bb => {
          (0, fb.s)(wb, (0, Ob.k)(bb))
        })), bb.Tm(Lb.Tc, (bb => {
          Nb.g[bb.IH] ? (0, fb.s)(wb, {
            ...Nb.g[bb.IH],
            pos1: bb.pos1,
            pos2: bb.pos2
          }) : console.error(`Unknown preset id: ${bb.IH}`)
        })), bb.Tm(Lb.hd, (bb => {
          var wb, Mb;
          let {
            uM: eb,
            dM: Hb,
            PM: pb,
            nM: Vb
          } = bb, {
            oM: gb,
            TM: Lb
          } = null !== Vb && void 0 !== Vb ? Vb : {};
          const {
            yM: Ib
          } = null !== Vb && void 0 !== Vb ? Vb : {};
          gb = null !== (wb = gb) && void 0 !== wb ? wb : void 0, Lb = null !== (Mb = Lb) && void 0 !== Mb ? Mb : void 0, "string" === typeof Ib && this.setUpQueuedEntity(Ib), (0, lb.e)().client.gameRecorder.recordPlaySound(eb, Hb, pb, Vb), Qb.c.play((0, Gb.f)(eb), Hb, Ib, gb, Lb).rate(pb)
        })), bb.Tm(Lb.uf, (bb => {
          for (const wb in bb) {
            const eb = bb[wb];
            for (const bb in eb) Mb.client.meshCreator.handleParticleSystemUpdate(wb, bb, eb[bb])
          }
        }))
      }
    }
    var Pb = Mb(39023),
      nb = Mb(38986);
    class yb {
      constructor(bb) {
        this.hU = bb
      }
      register(bb) {
        const wb = this.hU,
          Mb = (0, lb.e)();

        function eb() {
          return wb.pR.QMb(wb.VJ)
        }
        bb.Tm(Lb.qc, (bb => {
          let {
            tH: Mb,
            CH: eb,
            EH: Hb,
            FH: pb,
            BH: Vb,
            sH: gb,
            mH: lb,
            hH: Lb,
            zH: Ib
          } = bb;
          if (!wb.pR.eMb(Mb, "itemState")) return void(0, Pb.n)(wb, Mb, [Vb, gb, lb], eb, {
            amount: Hb,
            attributes: JSON.parse(pb),
            hH: Lb,
            size: Ib
          });
          const Ob = wb.pR.getState(Mb, "itemState");
          Ob.amount = Hb, Ob.hH = Lb, Ob.creationTime = Date.now(), (0, nb.setServerPosition)(wb.pR.getState(Mb, "smoothToServerPos"), Vb, gb, lb)
        })), bb.Tm(Lb.V, (bb => {
          (0, cb.e)(wb).setCantPickUp(bb, !0), wb.pR.eMb(bb, "itemState") && (wb.pR.getState(bb, "itemState").hH = !0)
        })), bb.Tm(Lb.Ud, (bb => {
          (0, cb.e)(wb).setCantPickUp(bb, !1), wb.pR.eMb(bb, "itemState") && (wb.pR.getState(bb, "itemState").hH = !1)
        })), bb.Tm(Lb.bd, (bb => {
          let {
            pickUpItems: wb,
            pickUpAckSeq: Mb
          } = bb;
          for (const {
              name: Hb,
              amount: pb,
              attributes: Vb
            }
            of wb) eb().pickUpItem({
            name: Hb,
            amount: pb,
            typeObj: Pb.E[Hb],
            attributes: Vb
          });
          (0, lb.e)().client.inventoryPrediction.serverChangeApplied(Mb)
        })), bb.Tm(Lb.Oe, (bb => {
          let {
            index: Mb,
            name: eb,
            amount: Hb,
            attributes: pb,
            setSlotAckSeq: Vb
          } = bb;
          const gb = wb.pR.GMb(wb.VJ);
          (Mb < gb.playerInventory.numSlots || gb.HM || gb.inCreative) && gb.setItemSlot(Mb, eb, Hb, pb), (0, lb.e)().client.inventoryPrediction.serverChangeApplied(Vb)
        })), bb.Tm(Lb.oc, (bb => {
          (0, lb.e)().client.inventoryPrediction.acknowledge(bb)
        })), bb.Tm(Lb.x, (bb => {
          let {
            Qw: wb,
            Gw: Mb,
            qw: eb,
            aw: Hb
          } = bb;
          (0, lb.e)().client.itemDropPrediction.onActionItemDrops(wb, Mb, eb, Hb)
        })), bb.Tm(Lb.mb, (bb => {
          eb().clearInventory(), (0, lb.e)().client.inventoryPrediction.serverChangeApplied(bb)
        })), bb.Tm(Lb.Re, (bb => {
          Bb.k.iI("setSelectedInventorySlotI", bb, !0)
        })), bb.Tm(Lb.gb, (bb => {
          let {
            QH: Mb,
            GH: eb,
            qH: Hb,
            aH: pb,
            iH: Vb,
            uH: gb,
            dH: Lb,
            PH: Ib
          } = bb;
          const Ob = wb.pR.GMb(wb.VJ);
          if (gb) {
            const {
              eM: bb,
              LM: wb
            } = Ib;
            return (0, lb.e)().client.inventoryPrediction.Uwb(wb, (() => {
              Ob.chestRefreshed(eb, Hb, pb, Lb, bb)
            })) && Bb.k.iI("chestToggleFromServer", !1, !0), void Bb.k.iI("chestRefreshedFromServer")
          }(Mb || Ob.HM) && (Mb ? (Ob.chestOpened(eb, Hb, pb, Vb, Lb), null !== Vb && (0, lb.e)().client.ironChestPasskeyCache.onChestOpened(pb, Vb)) : Ob.chestClosed(), Bb.k.iI("chestToggleFromServer", Mb, !0))
        })), bb.Tm(Lb.Cb, (bb => {
          let {
            craftingRecipeItemName: eb,
            recipesForItem: Hb
          } = bb;
          eb ? Mb.craftingManager.editRecipesForPlayer(wb.VJ, eb, Hb) : Mb.craftingManager.resetAllPlayerRecipes(wb.VJ), Bb.k.iI("craftingRecipesEdited", {
            itemName: eb,
            recipesForItem: Hb
          })
        })), bb.Tm(Lb.Kd, (bb => {
          let {
            Hw: wb,
            pw: Mb,
            Vw: Hb
          } = bb;
          eb().removeItemName(wb, Mb), (0, lb.e)().client.inventoryPrediction.serverChangeApplied(Hb)
        })), bb.Tm(Lb.Gd, (bb => {
          let {
            ew: eb
          } = bb;
          Mb.craftingManager.removeRecipes(wb.VJ, eb), Bb.k.iI("craftingRecipesEdited", {
            itemName: eb,
            recipesForItem: []
          })
        }))
      }
    }
    var ob = Mb(7634),
      Tb = Mb(38837),
      kb = Mb(398),
      bw = Mb.n(kb),
      ww = Mb(5371),
      Mw = Mb(38920),
      ew = Mb(39492),
      Hw = Mb(38830);
    class pw {
      constructor(bb, wb) {
        this.hU = bb, this.setUpQueuedEntity = wb
      }
      register(bb) {
        const wb = this.hU,
          Mb = (0, lb.e)();
        bb.Tm(Lb.if, (bb => {
          let {
            Tw: Mb,
            kw: Hb,
            bM: pb,
            wM: Vb
          } = bb;
          const gb = [Hb, pb, Vb];
          wb.pR.setPosition(wb.VJ, gb), (0, eb.sendColyMessage)(Lb.Og, {
            QI: Mb,
            GI: ww.d
          }), Bb.k.iI("localPlayerTeleported", {
            pos: gb,
            isCorrection: !1
          })
        })), bb.Tm(Lb.Zc, (bb => {
          let {
            Ww: wb,
            Jw: Mb,
            Sw: eb,
            Nw: Hb
          } = bb;
          this.setUpQueuedEntity(wb);
          const pb = [Mb, eb, Hb];
          Bb.k.iI(`otherPlayerTeleported|${wb}`, {
            pos: pb
          })
        })), bb.Tm(Lb.td, (bb => {
          let {
            Zb: Mb,
            fb: Hb,
            Ab: pb,
            Wb: Vb,
            Jb: gb,
            Sb: lb,
            Nb: Ib,
            Gb: Ob,
            Qb: Ub,
            ib: tb
          } = bb;
          const Cb = [Hb, pb, Vb];
          wb.pR.setPosition(wb.VJ, Cb);
          const Eb = wb.pR.sMb(wb.VJ),
            Fb = wb.pR.fn(wb.VJ);
          bw().set(Fb.bq, 0, 0, 0), bw().set(Fb.lq, 0, 0, 0), bw().set(Fb.UF, gb, lb, Ib), Fb.Iq(), Eb._flying = null !== tb, tb ? (Eb.flyAccel.ub = tb.ub, Eb.flyAccel.Pb = tb.Pb) : Eb.flyAccel.reset(), Ob && Eb.movementType === ob.p.GLIDING && (Eb.qb = Ob.qb, bw().copy(Eb.ab, Ob.ab)), (0, eb.sendColyMessage)(Lb.Og, {
            QI: Mb,
            GI: ww.d
          }), Bb.k.iI("localPlayerTeleported", {
            pos: Cb,
            isCorrection: !0
          })
        })), bb.Tm(Lb.Ve, (bb => {
          let {
            vehicleEId: wb,
            overrides: Mb
          } = bb;
          (0, lb.e)().applyRiddenVehicleSettingOverrides(wb, Mb)
        })), bb.Tm(Lb.xf, (bb => {
          let {
            eH: Mb,
            HH: eb,
            pH: Hb
          } = bb;
          const pb = wb.pR.sMb(wb.VJ).physicsState.type === ob.r.SLEEPING && Mb === ob.r.DEFAULT;
          (0, lb.e)().updatePositionAndPhysics(wb.VJ, {
            type: Mb,
            tier: eb
          }, !0, Hb), pb && (0, lb.e)().updateHeldVehicleStatus()
        })), bb.Tm(Lb.Z, (bb => {
          let {
            gp: Mb,
            lp: eb
          } = bb;
          wb.pR.NMb(wb.VJ).setPose(Mb, eb)
        })), bb.Tm(Lb.ze, (bb => {
          const {
            oI: Mb,
            meb: eb
          } = (0, Tb.d)([bb[0], bb[1], bb[2]]);
          Hw.d.setLookDirection(wb, Mb, eb), (0, Mw.v)(Mb, eb);
          const Hb = wb.pR.NMb(wb.VJ);
          Hb && (Hb.heading = Mb)
        })), bb.Tm(Lb.De, (bb => {
          Mb.client.cameraController.setCameraZoom(bb)
        })), bb.Tm(Lb.$e, (bb => {
          let {
            kM: eb,
            Me: Hb
          } = bb;
          Mb.shakePlayerCamera(wb.VJ, eb, Hb)
        })), bb.Tm(Lb.uc, (bb => {
          wb.pR.NMb(wb.VJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", bb)
        })), (0, eb.onGameResetOnce)((() => {
          wb.pR.NMb(wb.VJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), bb.Tm(Lb.A, (bb => {
          wb.pR.fn(wb.VJ).applyImpulse(bb)
        })), bb.Tm(Lb.Ye, (bb => {
          const Mb = wb.pR.fn(wb.VJ);
          bw().set(Mb.bq, 0, 0, 0), bw().set(Mb.lq, 0, 0, 0), bw().copy(Mb.UF, bb), Mb.Iq()
        })), (0, eb.onGameResetOnce)((() => {
          (0, ew.setFloatingYValue)(wb.pR.getState(wb.VJ, "physics"), wb.pR.Z2(wb.VJ), null)
        })), bb.Tm(Lb.Jb, (bb => {
          let {
            yp: Mb,
            Tp: eb,
            kp: Hb
          } = bb;
          const pb = (0, Yb.e)(Mb);
          if (pb === wb.VJ) {
            const bb = wb.pR.Z2(wb.VJ).position;
            Hb ??= Math.floor(bb[1]) - 1, (0, ew.setFloatingYValue)(wb.pR.getState(wb.VJ, "physics"), wb.pR.Z2(wb.VJ), eb ? Hb : null)
          }(0, cb.e)(wb).setFloating(pb, eb, Hb);
          const Vb = wb.pR.getState(pb, "floating");
          Vb && (Vb.isFloating = eb, Vb.kp = eb ? Hb : null)
        }))
      }
    }

    function Vw(bb, wb, Mb, eb, Hb) {
      let pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!bb.pR.vMb(bb.VJ)) return console.log("Got resync inven but don't have inven component"), void wb.acknowledge(eb);
      pb && console.error("Had to sync inven"), wb.Uwb(eb, Hb) && Mb.iI("chestToggleFromServer", !1, !0), Mb.iI("syncedInvenFromServer")
    }
    var gw = Mb(40313),
      lw = Mb(10270),
      Lw = Mb(40321),
      Iw = Mb(2173);
    var Ow = Mb(5347);

    function Uw(bb) {
      const wb = bb.XO;
      let Mb = 0,
        Hb = -1,
        Vb = -1 / 0,
        gb = null,
        lb = !0;
      const Ib = () => {
        if (++Mb % 10 !== 0) return;
        const Ib = (0, eb.getLastReceivedPacketId)();
        if (Ib <= Hb) return;
        const [Ob, Ub, tb] = bb.pR.Qm(bb.VJ), Cb = ! function(bb) {
          var wb;
          let Mb = null === (wb = bb.pR.Xeb(bb.VJ)) || void 0 === wb ? void 0 : wb.OC;
          if (void 0 === Mb) return !1;
          const eb = new Set;
          for (; void 0 !== Mb && !eb.has(Mb);) {
            var Hb;
            eb.add(Mb);
            const wb = bb.pR.getState(Mb, "smoothToServerPos"),
              pb = Array.isArray(wb) ? null : null === wb || void 0 === wb ? void 0 : wb.serverPosition;
            if (pb) {
              const wb = bb.pR.Qm(Mb);
              if (Math.abs(wb[0] - pb[0]) > 10 || Math.abs(wb[1] - pb[1]) > 10 || Math.abs(wb[2] - pb[2]) > 10) return !0
            }
            Mb = null === (Hb = bb.pR.Xeb(Mb)) || void 0 === Hb ? void 0 : Hb.OC
          }
          return !1
        }(bb) && function(bb, wb, Mb, eb) {
          const Hb = pb.e.gO;
          for (let pb = 0; pb < bb.length; pb++) {
            const Vb = bb[pb];
            if (!(0, Ow.e)(wb, Mb, eb, Vb[0] * Hb, Vb[1] * Hb, Vb[2] * Hb)) return !1
          }
          return !0
        }(wb.dE.TI, Ob, Ub, tb), Eb = null === gb || Math.abs(Ob - gb[0]) > 8 || Math.abs(Ub - gb[1]) > 8 || Math.abs(tb - gb[2]) > 8, Fb = !lb || Eb || performance.now() - Vb >= 1e4;
        lb = Cb, Cb && Fb && (Hb = Ib, Vb = performance.now(), gb = [Ob, Ub, tb], (0, eb.sendColyMessage)(Lb.xg, {
          rI: Ib
        }))
      };
      return bb.on("sO", Ib), () => {
        bb.off("sO", Ib)
      }
    }
    var tw = Mb(40325),
      Cw = Mb(1686),
      Ew = Mb(4015),
      Fw = Mb(2016),
      Bw = Mb(4155),
      sw = Mb(5669);
    class mw {
      constructor(bb, wb, Mb) {
        this.hU = bb, this.gameNameWithVariation = wb, this.connectionResume = Mb, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        sw.b.reset(), (0, gw.d)()
      }
      startChunkReports() {
        const bb = function(bb) {
            let wb = null,
              Mb = -1 / 0,
              Hb = null;
            const pb = () => {
                Hb = null;
                const pb = Math.ceil(bb.iZ[0]),
                  Vb = Math.ceil(bb.iZ[1]);
                wb && wb[0] === pb && wb[1] === Vb || (wb = [pb, Vb], Mb = performance.now(), (0, eb.sendColyMessage)(Lb.ug, {
                  bl: pb,
                  wl: Vb
                }))
              },
              Vb = () => {
                null === Hb && (Hb = setTimeout(pb, Math.max(0, Mb + 250 - performance.now())))
              };
            return pb(), bb.on("addRemoveDistanceChanged", Vb), () => {
              bb.off("addRemoveDistanceChanged", Vb), null !== Hb && (clearTimeout(Hb), Hb = null)
            }
          }(this.hU.XO),
          wb = Uw(this.hU);
        this.stopChunkReports = () => {
          bb(), wb()
        }
      }
      restartChunkStreaming() {
        (0, Mw.m)(this.hU, (0, lb.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - tw.e)), this.startChunkReports()
      }
      register(bb) {
        const wb = this.hU,
          Mb = (0, lb.e)();
        bb.Tm(Lb.Mc, (bb => {
          sb.c.applyNewClientOptions(bb)
        })), bb.Tm(Lb.ed, (bb => {
          Ew.c.onReceiveColyseusPing(bb)
        })), bb.Tm(Lb.Fe, (bb => {
          let {
            key: wb,
            value: Mb
          } = bb;
          (0, mb.setCookie)(this.gameNameWithVariation, wb, Mb)
        })), bb.Tm(Lb.Me, (bb => {
          Bb.k.iI("setDiscordReportKey", bb)
        })), (0, eb.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), bb.Tm(Lb.hc, (Hb => {
          const {
            Ew: pb,
            Fw: Vb
          } = Hb;
          if ((0, eb.setAdjustment)(Vb), this.connectionResume.onInitialInfo(Hb.Bw, Hb.mw), eb.offlineInputReplay.Bx(Hb.hw), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", pb);
            try {
              null === Hb.zw && (0, lb.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), Rb(wb.XO), sb.c.apply({
                shopInfo: null,
                _shopVersion: Iw.e
              });
              const Mb = wb.pR.GMb(wb.VJ);
              Mb.HM && (Mb.chestClosed(), Bb.k.iI("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Bb.k.iI("initInfoReceived", bb)
            } finally {
              const bb = null === Hb.zw ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = bb, this.connectionResume.onResumeInitialInfo(Hb.zw, (() => {
                bb.endSeq = (0, lb.e)().client.inventoryPrediction.lastActionSeq
              })), null === bb && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", pb), Bb.k.iI("sessionReplayJoinTicket", Hb.Kw), Fw.c.markAdmitted(), (0, Mw.n)(wb), Bb.k.iI("loadingScreenState", "loadingPage:loadingWorld"), wb.HJ = pb, wb.pR.eMb(wb.VJ, wb.pR.names.entityName) && wb.pR.nS(wb.VJ, wb.pR.names.entityName), (0, lb.e)().setEntityName(wb.HJ, (0, lb.e)().getRawEntityName(wb.VJ)), wb.zN[wb.HJ] = {}, wb.pR.qS(wb.VJ, wb.pR.names.entityName), Bb.k.iI("initInfoReceived", bb), this.startChunkReports(), Mb.client.onServerConnectionFinalised()
        })), bb.Tm(Lb.le, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const bb = this.replayResume;
            if (this.replayResume = null, !bb) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: Mb
            } = (0, lb.e)().client, {
              sync: Hb
            } = bb, pb = new Set(eb.offlineInputReplay.takeDroppedActions());
            if (Hb) {
              var Vb;
              const eb = null !== (Vb = bb.endSeq) && void 0 !== Vb ? Vb : Mb.lastActionSeq;
              Mb.forget((bb => bb > Hb.LM && bb <= eb || pb.has(bb))), Vw(wb, Mb, Bb.k, Hb.LM, Hb.load)
            } else Mb.dropPending(), Mb.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), bb.Tm(Lb.df, (bb => {
          let {
            MM: Mb,
            lM: eb,
            LM: Hb
          } = bb;
          const {
            inventoryPrediction: pb
          } = (0, lb.e)().client, Vb = () => {
            wb.pR.GMb(wb.VJ).loadFromString(Mb)
          };
          this.replayResume && (this.replayResume.sync = {
            LM: Hb,
            load: Vb
          }), Vw(wb, pb, Bb.k, Hb, Vb, eb)
        })), bb.Tm(Lb.zd, (bb => {
          let {
            type: wb,
            location1: Mb,
            location2: eb,
            location3: Hb,
            score: pb
          } = bb;
          (0, Bw.logProgressionEvent)({
            type: wb,
            location1: Mb,
            location2: eb,
            location3: Hb,
            score: pb
          })
        })), bb.Tm(Lb.he, (bb => {
          let {
            type: wb,
            resourceType: Mb,
            amount: eb,
            category: Hb,
            itemName: pb
          } = bb;
          (0, Bw.logResourceEvent)({
            type: wb,
            resourceType: Mb,
            amount: eb,
            category: Hb,
            itemName: pb
          })
        })), bb.Tm(Lb.xc, (bb => {
          let {
            leaveEventType: wb,
            category: Mb,
            subCategory: eb,
            value: Hb
          } = bb;
          (0, Bw.updateLeaveValue)({
            leaveEventType: wb,
            category: Mb,
            subCategory: eb,
            value: Hb
          })
        })), bb.Tm(Lb.xb, (bb => {
          let {
            cat1: wb,
            cat2: Mb,
            cat3: eb,
            value: Hb
          } = bb;
          (0, Bw.logCustomAnalyticsEvent)({
            cat1: wb,
            cat2: Mb,
            cat3: eb,
            value: Hb
          })
        })), bb.Tm(Lb.vc, (bb => {
          (0, lb.e)().client.leaveGameUnwanted({
            reason: (0, lw.d)(bb),
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Cw.navigatePreserveSearch)("/")
        })), bb.Tm(Lb.se, (bb => {
          Bb.k.iI("serverUpdating", Date.now() + bb, !0)
        })), bb.Tm(Lb.Kc, Lw.b), bb.Tm(Lb.Ec, (bb => {
          console.error(`[logErrorToConsole]: ${bb}`)
        }))
      }
    }
    var hw = Mb(40332),
      zw = Mb(40348),
      Xw = Mb(1126),
      xw = Mb(40341),
      jw = Mb(3496),
      Kw = Mb(5030);
    class rw {
      constructor(bb, wb) {
        this.hU = bb, this.clientApi = wb
      }
      register(bb) {
        const wb = this.hU,
          Mb = (0, lb.e)();
        bb.Tm(Lb.fb, (bb => {
          let {
            chatMsgId: wb,
            worldCodeLineId: Mb,
            content: eb,
            chatterEId: Hb,
            chatterObjectsToReplay: pb
          } = bb;
          Bb.k.iI("chat", {
            serverChatMsgId: wb,
            worldCodeLineId: Mb,
            content: eb,
            chatterEId: Hb,
            chatterObjectsToReplay: pb
          }, !0)
        })), bb.Tm(Lb.bb, (bb => {
          let {
            chatMsgId: wb
          } = bb;
          Bb.k.iI("chatRemoved", wb, !0)
        })), bb.Tm(Lb.mf, (bb => {
          Bb.k.iI("TopRightHelper", bb, !0)
        })), bb.Tm(Lb.gf, (bb => {
          (0, hw.c)(bb)
        })), bb.Tm(Lb.wc, (bb => {
          let {
            category: wb,
            timeframe: Mb,
            data: eb
          } = bb;
          Bb.k.iI("leaderboardResponse", {
            category: wb,
            timeframe: Mb,
            data: eb
          })
        })), bb.Tm(Lb.bf, (() => {
          Bb.k.iI("showShopTutorial", null, !0)
        })), bb.Tm(Lb.xd, (bb => {
          Bb.k.iI("progressBarUpdate", bb, !0)
        })), bb.Tm(Lb.kc, (bb => {
          Bb.k.iI("middleScreenBarInitiate", {
            duration: bb.tp,
            Cp: bb.Cp,
            horizBarRemOffset: bb.Ep
          }, !0)
        })), bb.Tm(Lb.Md, (() => {
          Bb.k.iI("middleScreenBarRemove", !0)
        })), bb.Tm(Lb.Je, (bb => {
          let {
            id: wb,
            position: Mb,
            style: eb,
            dw: Hb,
            ow: pb
          } = bb;
          Bb.k.iI("setDirectionArrow", {
            id: wb,
            position: Mb,
            style: eb,
            text: (0, Lb.r)(Hb),
            ow: pb
          }, !0)
        })), bb.Tm(Lb.lb, (bb => {
          let {
            id: wb
          } = bb;
          Bb.k.iI("clearDirectionArrow", {
            id: wb
          }, !0)
        })), bb.Tm(Lb.vb, (bb => {
          (0, Kw.onCosmeticPackGranted)(bb)
        })), bb.Tm(Lb.Uc, (bb => {
          let {
            id: wb,
            Fp: Mb
          } = bb;
          const {
            type: Hb,
            params: pb
          } = (0, zw.e)(Mb), Vb = {
            ...pb
          };
          for (const eb of zw.c) eb in Vb && Vb[eb] && (Vb[eb] = (0, Lb.r)(Vb[eb]));
          sw.b.queueQTE(wb, Hb, Vb).getResult().then((bb => {
            "boolean" === typeof bb && (0, eb.sendColyMessage)(Lb.ii, {
              qteId: wb,
              qteResponse: bb
            })
          }))
        })), bb.Tm(Lb.Nd, (bb => {
          sw.b.cancelQTE(bb)
        })), (0, eb.onGameResetOnce)((() => {
          sw.b.reset()
        })), bb.Tm(Lb.Wc, (bb => {
          let {
            id: wb,
            clientParameters: Mb
          } = bb;
          (0, gw.e)(wb, Mb)
        })), bb.Tm(Lb.Rd, (bb => {
          (0, gw.h)(bb)
        })), bb.Tm(Lb.sf, (bb => {
          let {
            text: wb,
            id: Mb,
            destructive: Hb
          } = bb;
          (0, gw.k)(Mb, wb, Hb, (bb => {
            (0, eb.sendColyMessage)(Lb.wj, {
              mV: Mb,
              hV: bb,
              zV: 5
            })
          }))
        })), bb.Tm(Lb.$c, (bb => {
          let {
            info: wb
          } = bb;
          Bb.k.iI("overShopInfo", wb, !0)
        })), bb.Tm(Lb.Sb, (bb => {
          let {
            Yw: Mb,
            Zw: eb
          } = bb;
          this.clientApi.openShop(wb.VJ, Mb, eb)
        })), bb.Tm(Lb.Pb, (bb => {
          let {
            dp: wb,
            Pp: Mb,
            np: eb
          } = bb;
          Bb.k.iI("flyingMiddleMessage", {
            content: (0, Lb.r)(wb),
            Pp: Mb,
            np: eb
          }, !0)
        })), bb.Tm(Lb.Ff, (bb => {
          const wb = bb === Xw.f ? null : {
            message: `Currently loaded as variation: ${bb}`,
            type: "Warning"
          };
          Bb.k.iI("showPermanentBottomMessage", wb, !0)
        })), bb.Tm(Lb.Vb, (bb => {
          let {
            messageType: wb,
            data: eb
          } = bb;
          (0, xw.e)(wb) ? (0, xw.c)(wb, eb) : ("freeCamPerms" === wb && Mb.client.freeCameraController.setPerms(eb.key, eb.value), Mb.client.triggerGameCallback("onReceivedMessageFromServer", wb, eb))
        })), bb.Tm(Lb.qb, jw.l)
      }
    }
    class Rw {
      constructor(bb, wb, Mb, eb) {
        this.gameNameWithVariation = bb, this.hU = Mb, this.connectionResume = eb, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new zb.e(wb, this.hU)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, eb.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      LOb(bb) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new zb.e(bb, this.hU), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(bb, wb) {
        const Mb = this.hU,
          eb = bb => {
            this.stateReplicationHandler.setUpIfQueued(bb)
          };
        new mw(Mb, this.gameNameWithVariation, this.connectionResume).register(bb), new Db(Mb).register(bb), new yb(Mb).register(bb), new Wb(Mb, eb).register(bb), new db(Mb, eb).register(bb), new rw(Mb, wb).register(bb), new pw(Mb, eb).register(bb)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Dw = Mb(40357),
      Yw = Mb(40365),
      Zw = Mb(715),
      fw = Mb(1987);
    class Aw {
      constructor(bb, wb, Mb, eb) {
        this.msgHandler = Mb, this.listener = eb, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Dw.b({
          reconnect: bb,
          isLive: () => eb.isLive(),
          onReconnected: bb => {
            this.resumeOnRoom(bb)
          },
          onGaveUp: (bb, wb) => {
            eb.onGaveUp(bb, wb)
          },
          freeze: wb,
          releaseSeat: wb => {
            bb(wb).then((bb => {
              bb.leave(!0)
            }), (bb => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", bb)
            }))
          }
        })
      }
      onInitialInfo(bb, wb) {
        this.session.onInitialInfo(bb, wb)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(bb, wb) {
        if (this.session.onResuming(), null === bb) {
          try {
            (0, lb.e)().client.itemDropPrediction.reset()
          } catch (Mb) {
            console.error("Error dropping the item drop predictions on resuming", Mb)
          }
          return eb.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, lb.e)().client.itemDropPrediction.onResumeReplayOffered(), eb.offlineInputReplay.replayFrom(bb.xw, wb)
      }
      onResumed(bb) {
        this.setSuspended(!1), (0, eb.resendBeacons)();
        try {
          bb()
        } catch (wb) {
          console.error("Error completing the resume", wb)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(bb) {
        const wb = (0, Zw.onVisitSessionGameServerConnected)((() => bb.connection.isOpen));
        bb.Yz(wb);
        const Mb = new Yw.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(bb, "silent"), bb.leave(!1))
        }));
        bb.onStateChange((() => {
          Mb.heard()
        }));
        const eb = wb => {
          wb.persisted || bb.leave(!0)
        };
        window.addEventListener("pagehide", eb), bb.Yz(((wb, Mb) => {
          if (bb === this.attachedRoom && this.listener.isLive()) return (0, pb.f)(wb) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${wb}, reconnecting`), this.listener.onDropped(wb, Mb), void this.onConnectionDropped(bb, String(wb))) : void this.listener.onRoomLeft(wb, Mb)
        })), this.attachedRoom = bb, this.detachRoomListeners = () => {
          wb(), Mb.dispose(), window.removeEventListener("pagehide", eb)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(bb) {
        bb !== this.suspended && (this.suspended = bb, (0, eb.setConnectionSuspended)(bb), (0, lb.e)().client.itemDropPrediction.setSuspended(bb))
      }
      detachRoom() {
        var bb;
        null === (bb = this.detachRoomListeners) || void 0 === bb || bb.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(bb, wb) {
        (0, fw.reportClientError)("disconnect", "Left room", wb), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), eb.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(bb.reconnectionToken)
      }
      resumeOnRoom(bb) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), bb.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, ub.m)(), eb.offlineInputReplay.onConnectionReplaced(), this.msgHandler.LOb(bb), this.listener.onReconnected(bb), this.attachRoom(bb)
      }
    }
    var Ww = Mb(2529),
      Jw = Mb(2536),
      Sw = Mb(1447),
      Nw = Mb(1391),
      vw = Mb(5564),
      Qw = Mb(4522),
      Gw = Mb(1400),
      qw = Mb(38945),
      aw = Mb(40367),
      iw = Mb(10278),
      uw = Mb(40372),
      dw = Mb(1280),
      Pw = Mb(37772),
      nw = Mb(40381),
      yw = Mb(1934),
      ow = Mb(4017),
      Tw = Mb(1677);

    function kw(bb) {
      var wb, Mb;
      if ("object" !== typeof bb || null === bb) return {
        errType: typeof bb
      };
      const eb = bb;
      return {
        errType: null !== (wb = null === (Mb = bb.constructor) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== wb ? wb : "",
        errName: "string" === typeof eb.name ? eb.name : "",
        eventType: "string" === typeof eb.type ? eb.type : "",
        errStack: "string" === typeof eb.stack ? eb.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function bM(bb) {
      if ("undefined" !== typeof ProgressEvent && bb instanceof ProgressEvent) return !0;
      if (!(bb instanceof Error)) return !1;
      const wb = bb.code;
      return "ServerError" === bb.name && void 0 === wb || "AbortError" === bb.name || "seat reservation expired." === bb.message || "early_leave" === bb.message
    }(0, Eb.l)((bb => {
      (0, fw.reportClientError)("wasm_net", bb)
    }));
    let wM = !0;

    function MM() {
      wM = !1
    }
    class eM {
      constructor(bb) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.hU = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = bb.gameNameWithVariation, this.lobbyName = bb.lobbyName, this.colyClient = bb.colyClient, this.userContext = bb.userContext
      }
      async connectToServer(bb, wb, Mb) {
        sb.c.reset(), bb.zN = {
          [bb.VJ]: {}
        }, bb.HJ = void 0, (0, ub.m)(), (0, lb.e)().removeAllEntityNames(), (0, lb.e)().setEntityName(bb.VJ, this.userContext.getPlayerName()), (0, Sw.n)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, yw.g)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Vb = performance.now();
        Mb.aborted || (0, Nw.v)("wasm_core_ready", Vb);
        const gb = (0, uw.c)(this.userContext, (() => {
          const {
            roomName: eb,
            joinOptions: Hb
          } = (0, hb.h)(this.userContext, this.gameNameWithVariation, this.lobbyName, wb, (bb => Qw.d.isUsingCustomGameTexturePack(bb)));
          return Hb.joinAdHold = this.joinAdHold, Hb.renderBackend = (0, ow.e)(bb.FO), (0, aw.d)((() => this.colyClient.joinOrCreateUntil(Mb, eb, Hb)), Mb)
        }));
        return Bb.k.iI("loadingScreenState", "loadingPage:joiningLobby"), await gb.then((wb => {
          if (this.joinedAt = performance.now(), (0, Nw.v)("wasm_joined", this.joinedAt), this.hU = bb, this.joinAdHold) {
            const bb = (0, yw.q)((() => {
              wb.send(Hb.f), (0, Nw.t)(), Fw.c.markJoinAdEnded()
            }));
            wb.Yz(bb), (0, eb.onGameResetOnce)(bb)
          }
          const Mb = new Fb(wb);
          this.connectionResume = new Aw((bb => this.colyClient.reconnect(bb)), (wb => {
            bb.RZ(wb)
          }), Mb, {
            isLive: () => (0, lb.e)().client.getMsgHandler() === Mb,
            onDropped: (bb, wb) => {
              (0, Jw.h)(bb) || this.logUnrecognisedConnectionLoss(bb, void 0, {
                site: "drop",
                closeReason: null !== wb && void 0 !== wb ? wb : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (bb, wb) => {
              this.onRoomLeft(bb, wb)
            },
            onReconnected: bb => {
              this.incomingMsgInitialisor.LOb(bb), this.checkSendPath = (0, qw.e)(Mb, bb, Eb.m)
            },
            onGaveUp: (bb, wb) => {
              this.onResumeGaveUp(bb, wb)
            }
          }), this.connectionResume.attachRoom(wb), (0, eb.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const pb = Mb.send,
            Vb = Mb.Tm,
            gb = Mb.Peb.send,
            Lb = Mb.Peb.Tm,
            Ib = Mb.VOb;
          this.checkSendPath = (0, qw.e)(Mb, wb, Eb.m);
          const Ob = setInterval((() => {
            pb === Mb.send && Vb === Mb.Tm && gb === Mb.Peb.send && Lb === Mb.Peb.Tm && Ib === Mb.VOb || MM(), this.checkSendPath()
          }), 1e4);
          return (0, eb.onGameResetOnce)((() => {
            clearInterval(Ob)
          })), {
            success: !0,
            successDetails: Mb
          }
        })).catch((wb => {
          if (Mb.aborted && wb === (0, dw.h)(Mb)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (wb instanceof Pw.e) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: wb.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, nw.d)(wb, wb.leg)
            }
          };
          bb.sE(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${wb.code}\n`, wb);
          const eb = wb.code;
          return eb === pb.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: pb.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(eb, wb.message, {
                site: "join",
                sinceJoinStart: (0, Jw.e)(performance.now() - Vb),
                ...kw(wb)
              }, bM(wb)),
              rematch: (0, aw.b)(wb),
              gameRefused: (0, iw.b)(wb),
              joinFailure: (0, nw.d)(wb, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(bb, wb, Mb) {
        Bb.k.iI("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Rw(this.gameNameWithVariation, wb.Peb, bb, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Hb = wb.tOb();
        this.incomingMsgInitialisor.setupOnMessageListeners(Hb, Mb), (0, eb.onConnectionToServerReady)(Hb, wb), this.joinAdHold && Fw.c.markAdmissionAwaited(), Hb.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(bb, wb) {
        (0, Gw.mE)(new Error("Reconnect failed"), {
          ...(0, Ww.o)(wb),
          game: this.gameNameWithVariation
        }), (0, fw.reportClientError)("disconnect", "Reconnect failed", wb.reason), (0, lb.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !bb,
          canPlayAgain: bb,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Cw.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Jw.e)(performance.now() - this.joinedAt)
      }
      onRoomLeft(bb, wb) {
        var Mb;
        if (bb === pb.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${bb}`), bb === pb.b.serverUpdating.code) return (0, fw.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, lb.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.hU.sE(`Kicked from server with code ${bb}`, new Error);
        const eb = Object.keys(pb.b).find((wb => pb.b[wb].code === bb));
        (0, fw.reportClientError)("disconnect", "Left room", null !== eb && void 0 !== eb ? eb : String(bb)), Tw.e.leftGame(this.gameNameWithVariation, bb);
        const Hb = this.onConnectionToServerLost(bb, void 0, {
          site: "leave",
          closeReason: null !== wb && void 0 !== wb ? wb : "",
          sinceJoined: this.sinceJoined()
        });
        (0, lb.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Hb.reason}`,
          canReconnect: Hb.canReconnect,
          requiresRefresh: Hb.requiresRefresh,
          automaticallyReconnect: null !== (Mb = Hb.automaticallyReconnect) && void 0 !== Mb && Mb
        }), (0, Cw.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, vw.G)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Cw.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(bb, wb, Mb) {
        var eb;
        let Hb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (eb = wb) && void 0 !== eb && eb.endsWith(pb.g) && (this.userContext.invalidateTrafficCode(), wb = wb.replace(pb.g, "")), bb === pb.b.outdatedVersion.code) return console.error("Outdated client with version ", Vb.e, ", refreshing page"), (0, mb.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (bb === pb.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, mb.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Vb in pb.b) {
          const {
            code: Mb,
            text: eb,
            canReconnect: Hb
          } = pb.b[Vb];
          if (Mb === bb) {
            console.log("matched known error", bb, "leaving game");
            return {
              reason: "" !== eb ? eb : wb || `Code: ${bb}`,
              requiresRefresh: !1,
              canReconnect: Hb,
              automaticallyReconnect: Mb === pb.b.customGameUpdated.code || Mb === pb.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Jw.g)(bb) || Hb ? console.warn("Connection lost", bb, wb) : this.logUnrecognisedConnectionLoss(bb, wb, Mb), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${bb}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Hb ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(bb, wb, Mb) {
        (0, Gw.mE)(new Error("Unrecognised connection loss"), {
          code: String(bb),
          cause: null !== wb && void 0 !== wb ? wb : "",
          ...Mb,
          game: this.gameNameWithVariation,
          ...(0, Jw.l)()
        })
      }
    }
  },
  40272: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => PM,
      f: () => be
    });
    var eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb, rb, Rb, Db, cb, Yb, Zb, fb, Ab, Wb, Jb, Sb, Nb, vb, Qb, Gb, qb, ab, ib, ub, db, Pb, nb, yb, ob, Tb, kb, bw, ww, Mw, ew, Hw, pw, Vw, gw, lw, Lw, Iw, Ow, Uw, tw, Cw, Ew, Fw, Bw, sw, mw, hw, zw, Xw, xw, jw, Kw, rw, Rw, Dw, Yw, Zw, fw, Aw, Ww, Jw, Sw, Nw, vw, Qw, Gw, qw, aw, iw, uw, dw, Pw, nw, yw, ow, Tw, kw = Mb(29),
      bM = Mb(38348),
      wM = Mb(40282),
      MM = Mb(40291),
      eM = Mb(10517),
      HM = Mb(655),
      pM = Mb(648),
      VM = Mb(37691);
    let gM = (eb = (0, eM.type)("number"), Hb = (0, eM.type)("number"), pb = (0, eM.type)("number"), Vb = (0, eM.type)("number"), gb = (0, eM.type)("number"), lb = (0, eM.type)("number"), Lb = (0, eM.type)("string"), Ib = class extends eM.Schema {
        constructor() {
          super(...arguments), (0, wM.e)(this, "id", Ob, this), (0, wM.e)(this, "amount", Ub, this), (0, wM.e)(this, "x", tb, this), (0, wM.e)(this, "y", Cb, this), (0, wM.e)(this, "z", Eb, this), (0, wM.e)(this, "size", Fb, this), (0, wM.e)(this, "attributes", Bb, this)
        }
      }, Ob = (0, MM.b)(Ib.prototype, "id", [eb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ub = (0, MM.b)(Ib.prototype, "amount", [Hb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tb = (0, MM.b)(Ib.prototype, "x", [pb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Cb = (0, MM.b)(Ib.prototype, "y", [Vb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Eb = (0, MM.b)(Ib.prototype, "z", [gb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Fb = (0, MM.b)(Ib.prototype, "size", [lb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Bb = (0, MM.b)(Ib.prototype, "attributes", [Lb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Ib),
      lM = (sb = (0, eM.type)("string"), mb = (0, eM.type)("string"), hb = class extends eM.Schema {
        constructor() {
          super(...arguments), (0, wM.e)(this, "itemName", zb, this), (0, wM.e)(this, "enchantmentTier", Xb, this)
        }
      }, zb = (0, MM.b)(hb.prototype, "itemName", [sb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Xb = (0, MM.b)(hb.prototype, "enchantmentTier", [mb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), hb),
      LM = (xb = (0, eM.type)("string"), jb = (0, eM.type)("string"), Kb = (0, eM.type)("number"), rb = (0, eM.type)("number"), Rb = (0, eM.type)("number"), Db = (0, eM.type)("float32"), cb = (0, eM.type)("float32"), Yb = (0, eM.type)("float32"), Zb = (0, eM.type)("string"), fb = (0, eM.type)(["number"]), Ab = (0, eM.type)("boolean"), Wb = class extends eM.Schema {
        constructor() {
          super(...arguments), (0, wM.e)(this, "type", Jb, this), (0, wM.e)(this, "name", Sb, this), (0, wM.e)(this, "x", Nb, this), (0, wM.e)(this, "y", vb, this), (0, wM.e)(this, "z", Qb, this), (0, wM.e)(this, "xRotation", Gb, this), (0, wM.e)(this, "yRotation", qb, this), (0, wM.e)(this, "zRotation", ab, this), (0, wM.e)(this, "followingEId", ib, this), (0, wM.e)(this, "followingOffset", ub, this), (0, wM.e)(this, "shouldMatchFollowingEntityRotation", db, this)
        }
      }, Jb = (0, MM.b)(Wb.prototype, "type", [xb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Sb = (0, MM.b)(Wb.prototype, "name", [jb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Nb = (0, MM.b)(Wb.prototype, "x", [Kb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vb = (0, MM.b)(Wb.prototype, "y", [rb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Qb = (0, MM.b)(Wb.prototype, "z", [Rb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Gb = (0, MM.b)(Wb.prototype, "xRotation", [Db], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qb = (0, MM.b)(Wb.prototype, "yRotation", [cb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ab = (0, MM.b)(Wb.prototype, "zRotation", [Yb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ib = (0, MM.b)(Wb.prototype, "followingEId", [Zb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ub = (0, MM.b)(Wb.prototype, "followingOffset", [fb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new eM.ArraySchema(0, 0, 0)
        }
      }), db = (0, MM.b)(Wb.prototype, "shouldMatchFollowingEntityRotation", [Ab], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Wb),
      IM = (Pb = (0, eM.type)("float32"), nb = (0, eM.type)("float32"), yb = (0, eM.type)("boolean"), ob = (0, eM.type)("boolean"), Tb = (0, eM.type)("float32"), kb = (0, eM.type)("boolean"), bw = (0, eM.type)("string"), ww = (0, eM.type)("string"), Mw = (0, eM.type)("string"), ew = (0, eM.type)("string"), Hw = (0, eM.type)(["number"]), pw = (0, eM.type)("number"), Vw = (0, eM.type)({
        map: lM
      }), gw = class extends LM {
        constructor() {
          super(...arguments), (0, wM.e)(this, "scale", lw, this), (0, wM.e)(this, "speed", Lw, this), (0, wM.e)(this, "jumping", Iw, this), (0, wM.e)(this, "crouching", Ow, this), (0, wM.e)(this, "cameraPitch", Uw, this), (0, wM.e)(this, "armSwinging", tw, this), (0, wM.e)(this, "heldItemName", Cw, this), (0, wM.e)(this, "heldItemEnchantmentTier", Ew, this), (0, wM.e)(this, "pose", Fw, this), (0, wM.e)(this, "ridingVehicleEId", Bw, this), (0, wM.e)(this, "meshOffset", sw, this), (0, wM.e)(this, "baseRenderHeading", mw, this), (0, wM.e)(this, "armour", hw, this)
        }
      }, lw = (0, MM.b)(gw.prototype, "scale", [Pb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Lw = (0, MM.b)(gw.prototype, "speed", [nb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Iw = (0, MM.b)(gw.prototype, "jumping", [yb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Ow = (0, MM.b)(gw.prototype, "crouching", [ob], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Uw = (0, MM.b)(gw.prototype, "cameraPitch", [Tb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tw = (0, MM.b)(gw.prototype, "armSwinging", [kb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Cw = (0, MM.b)(gw.prototype, "heldItemName", [bw], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ew = (0, MM.b)(gw.prototype, "heldItemEnchantmentTier", [ww], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Fw = (0, MM.b)(gw.prototype, "pose", [Mw], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Bw = (0, MM.b)(gw.prototype, "ridingVehicleEId", [ew], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), sw = (0, MM.b)(gw.prototype, "meshOffset", [Hw], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new eM.ArraySchema(0, 0, 0)
        }
      }), mw = (0, MM.b)(gw.prototype, "baseRenderHeading", [pw], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hw = (0, MM.b)(gw.prototype, "armour", [Vw], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new eM.MapSchema
        }
      }), gw),
      OM = (zw = (0, eM.type)("string"), Xw = (0, eM.type)("string"), xw = (0, eM.type)("string"), jw = (0, eM.type)("uint8"), Kw = class extends IM {
        constructor() {
          super(...arguments), (0, wM.e)(this, "variation", rw, this), (0, wM.e)(this, "ownerDbId", Rw, this), (0, wM.e)(this, "metaInfo", Dw, this), (0, wM.e)(this, "aiState", Yw, this)
        }
      }, rw = (0, MM.b)(Kw.prototype, "variation", [zw], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Rw = (0, MM.b)(Kw.prototype, "ownerDbId", [Xw], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Dw = (0, MM.b)(Kw.prototype, "metaInfo", [xw], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Yw = (0, MM.b)(Kw.prototype, "aiState", [jw], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Kw);
    Zw = (0, eM.type)("string"), fw = (0, eM.type)("string"), Aw = (0, eM.type)("string"), Ww = (0, eM.type)("string"), Jw = class extends LM {
      constructor() {
        super(...arguments), (0, wM.e)(this, "meshKind", Sw, this), (0, wM.e)(this, "meshOpts", Nw, this), (0, wM.e)(this, "pose", vw, this), (0, wM.e)(this, "leaderboardTop", Qw, this)
      }
    }, Sw = (0, MM.b)(Jw.prototype, "meshKind", [Zw], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Nw = (0, MM.b)(Jw.prototype, "meshOpts", [fw], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), vw = (0, MM.b)(Jw.prototype, "pose", [Aw], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Qw = (0, MM.b)(Jw.prototype, "leaderboardTop", [Ww], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function UM(bb) {
      return Object.keys(eM.Metadata.getFields(bb))
    }
    const tM = UM(OM);
    for (const we of HM.s)
      if (!tM.includes(we)) throw new Error(`Mob Schema is missing a networked property: "${we}"`);
    const CM = UM((Gw = (0, eM.type)("string"), qw = (0, eM.type)("float32"), aw = (0, eM.type)("float32"), iw = (0, eM.type)("float32"), uw = (0, eM.type)("float32"), dw = class extends LM {
      constructor() {
        super(...arguments), (0, wM.e)(this, "soundName", Pw, this), (0, wM.e)(this, "volume", nw, this), (0, wM.e)(this, "refDistance", yw, this), (0, wM.e)(this, "maxHearDist", ow, this), (0, wM.e)(this, "rate", Tw, this)
      }
    }, Pw = (0, MM.b)(dw.prototype, "soundName", [Gw], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), nw = (0, MM.b)(dw.prototype, "volume", [qw], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), yw = (0, MM.b)(dw.prototype, "refDistance", [aw], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return VM.j
      }
    }), ow = (0, MM.b)(dw.prototype, "maxHearDist", [iw], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return VM.c
      }
    }), Tw = (0, MM.b)(dw.prototype, "rate", [uw], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), dw));
    for (const we of pM.g)
      if (!CM.includes(we)) throw new Error(`AudioEntity Schema is missing a replicated property: "${we}"`);
    var EM = Mb(39653),
      FM = Mb(1313),
      BM = Mb(661),
      sM = Mb(39443),
      mM = Mb(3059),
      hM = Mb(382),
      zM = Mb(38401),
      XM = Mb(39330),
      xM = Mb(3217),
      jM = Mb(38383),
      KM = Mb(39683),
      rM = Mb(38817),
      RM = Mb(398),
      DM = Mb.n(RM),
      cM = Mb(39188),
      YM = Mb(38270),
      ZM = Mb(39307),
      fM = Mb(39348);
    class AM {
      constructor(bb, wb) {
        this.bloxd = bb, this.eId = wb, this.hU = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.BC = !1, this.hU = bb.hU
      }
      initClient(bb) {
        var wb, Mb, eb;
        this.colyseusEntity = bb, this.meshKind = bb.meshKind, this.meshOpts = bb.meshOpts, this.leaderboardTop = bb.leaderboardTop, this.hU.pR.add([bb.x, bb.y, bb.z], 1, 1, null, null, !1, !1, this.eId), this.hU.pR.qS(this.eId, "smoothToServerPos");
        const Hb = "Person" === this.meshKind;
        this.hU.pR.qS(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Hb ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Hb ? [{
            nodeName: "HeadMesh",
            softTolerance: KM.k,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = kw.k.subscribe(`otherEntitySettings|${this.eId}|canSee`, (bb => {
          this.updateHidingMeshMgr()
        }));
        const pb = () => {
          const bb = this.hU.pR.ZMb(this.eId);
          if (!bb) return;
          const wb = (0, rM.g)(this.eId);
          if ("number" === typeof bb.qJ) {
            var Mb, eb, Hb, pb;
            const Vb = null === (Mb = (0, xM.l)("head", null === (Hb = this.getSpec()) || void 0 === Hb || null === (pb = Hb.opts.textures) || void 0 === pb ? void 0 : pb.head)) || void 0 === Mb || null === (eb = Mb.personModel) || void 0 === eb ? void 0 : eb.fullBody;
            return this.hU.FO.GJ.setPickable(bb.qJ, wb && !Vb), void(0, YM.updatePersonAttachmentPickability)(this.hU, this.eId, wb)
          }
          const Vb = bb.mesh;
          if (Vb)
            for (const gb of [Vb, ...Vb.getChildMeshes(!1)]) "NE" in gb && !gb.name.startsWith("Cape|") && (gb.NE = wb)
        };
        this.canAttackSub = kw.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, pb), this.interactableSub = kw.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, pb), this.overlayColourSub = kw.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (bb => {
          this.updateOverlayColour(bb)
        })), this.opacitySub = kw.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (bb => {
          this.updateOpacity(bb)
        })), this.zIndexSub = kw.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (bb => {
          this.updateZIndex(bb)
        }));
        const Vb = this.hU.zN[this.hU.VJ][this.eId];
        this.updateOverlayColour(null !== (wb = null === Vb || void 0 === Vb ? void 0 : Vb.overlayColour) && void 0 !== wb ? wb : null), this.updateOpacity(null !== (Mb = null === Vb || void 0 === Vb ? void 0 : Vb.opacity) && void 0 !== Mb ? Mb : 1), this.updateZIndex(null !== (eb = null === Vb || void 0 === Vb ? void 0 : Vb.zIndex) && void 0 !== eb ? eb : 0), this.multilineTextBoxSub = (0, jM.s)(this.hU, this.eId)
      }
      onChangeClient(bb, wb) {
        if ("xRotation" === bb || "yRotation" === bb || "zRotation" === bb)(0, jM.w)(this.hU, this.eId, bb, wb);
        else if ("pose" === bb) {
          const bb = this.hU.pR.NMb(this.eId);
          bb && (bb.pose = wb || "standing")
        } else "meshKind" === bb || "meshOpts" === bb ? (this[bb] = wb, this.queueMeshRebuild()) : "name" === bb && "" !== wb ? this.updateHidingMeshMgr() : "leaderboardTop" === bb && (this.leaderboardTop = wb, kw.k.iI(`leaderboardTop|${this.eId}`, wb))
      }
      disposeClient() {
        this.BC = !0, this.hU.pR.deleteEntity(this.eId), kw.k.unsubscribe(this.canSeeSub), kw.k.unsubscribe(this.canAttackSub), kw.k.unsubscribe(this.interactableSub), kw.k.unsubscribe(this.overlayColourSub), kw.k.unsubscribe(this.opacitySub), kw.k.unsubscribe(this.zIndexSub), kw.k.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var bb, wb;
        return {
          canSee: null !== (bb = null === (wb = this.hU.zN[this.hU.VJ][this.eId]) || void 0 === wb ? void 0 : wb.canSee) && void 0 !== bb && bb,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var bb, wb, Mb;
        const {
          hU: eb
        } = this, {
          pR: Hb
        } = eb, pb = this.getCurrentHidingMeshMgrState();
        if ((0, hM.ie)(this.previousHidingMeshManagerState, pb)) return;
        if (this.previousHidingMeshManagerState = pb, Hb.nS(this.eId, "hidingMeshManager"), null === (bb = eb.zN[eb.VJ][this.eId]) || void 0 === bb || !bb.canSee) return;
        const Vb = this.getSpec();
        if (!Vb) return;
        const {
          type: gb,
          opts: lb
        } = Vb;
        "Person" === gb && (lb.textures = (0, xM.q)(lb.textures)), lb.eId = this.eId, Hb.qS(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var bb, wb, Mb;
            "Leaderboard" === gb && (lb.leaderboardTop = this.leaderboardTop);
            const pb = this.bloxd.client.meshCreator.getEntityMesh(gb, lb, (bb => {
              var wb, Mb;
              if ("number" === typeof bb) {
                var Hb, pb, Vb;
                const wb = eb.FO.GJ;
                wb.setEntityId(bb, this.eId);
                const Mb = "Person" === gb && (null === (Hb = (0, xM.l)("head", null === (Vb = lb.textures) || void 0 === Vb ? void 0 : Vb.head)) || void 0 === Hb || null === (pb = Hb.personModel) || void 0 === pb ? void 0 : pb.fullBody);
                return void wb.setPickable(bb, (0, rM.g)(this.eId) && !Mb)
              }
              const Lb = bb;
              for (const gb of [Lb, ...Lb.getChildMeshes(!1)]) void 0 === gb.NE || gb.name.startsWith("Cape|") || (gb.NE = (0, rM.g)(this.eId), gb.metadata ??= new eb.FO.vE, gb.metadata.eId = this.eId);
              this.updateOpacity(null !== (wb = null === (Mb = eb.zN[eb.VJ][this.eId]) || void 0 === Mb ? void 0 : Mb.opacity) && void 0 !== wb ? wb : 1)
            }));
            if (!pb) return;
            const {
              qJ: Vb,
              mesh: Lb,
              meshOffset: Ib,
              nameYOffset: Ob,
              modelLoaded: Ub
            } = pb;
            null === Ub || void 0 === Ub || Ub.then((() => {
              var bb;
              (null === (bb = Hb.ZMb(this.eId)) || void 0 === bb ? void 0 : bb.mesh) === Lb && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const tb = null === Vb ? null : eb.FO.GJ.OHb(Vb, 0);
            if (Hb.qS(this.eId, Hb.names.mesh, {
                qJ: Vb,
                keb: tb,
                mesh: Lb,
                flb: !1,
                Alb: "Leaderboard" !== gb,
                offset: Ib.slice(),
                Zlb: "ParticleEmitter" === gb && lb.followTargetMeshOffset ? bb => {
                  var wb;
                  DM().copy(bb, Ib);
                  const Mb = null === (wb = Hb.Xeb(this.eId)) || void 0 === wb ? void 0 : wb.OC,
                    eb = void 0 === Mb ? null : Hb.NMb(Mb);
                  if (eb) {
                    var pb, Vb;
                    const wb = this.bloxd.getEntityHeading(null !== (pb = eb.ridingVehicleEId) && void 0 !== pb ? pb : Mb, !0),
                      Hb = Math.sin(wb),
                      gb = Math.cos(wb);
                    bb[0] += eb.meshOffset[0] * gb + eb.meshOffset[2] * Hb, bb[1] += eb.meshOffset[1], bb[2] += eb.meshOffset[2] * gb - eb.meshOffset[0] * Hb;
                    const lb = null !== (Vb = eb.ridingVehicleEId) && void 0 !== Vb ? Vb : null;
                    null !== lb && (0, fM.d)(this.hU, lb, bb)
                  }
                } : null
              }), "Person" === gb) {
              var Cb, Eb, Fb, Bb;
              Hb.qS(this.eId, Hb.names.meshAttachments, {
                personFullBody: null !== (Cb = null === (Eb = (0, xM.l)("head", null === (Bb = lb.textures) || void 0 === Bb ? void 0 : Bb.head)) || void 0 === Eb || null === (Fb = Eb.personModel) || void 0 === Fb ? void 0 : Fb.fullBody) && void 0 !== Cb && Cb
              });
              for (const bb of FM.u) {
                var sb, mb, hb;
                const wb = null === (sb = lb.textures) || void 0 === sb ? void 0 : sb[bb];
                wb && null !== (mb = (0, xM.l)(bb, wb)) && void 0 !== mb && null !== (hb = mb.attachments) && void 0 !== hb && hb.length && XM.d.Player.meshApi.updatePlayerCosmetic(this.eId, Vb, bb, wb)
              }
              Hb.qS(this.eId, Hb.names.moveState), Hb.qS(this.eId, "updateWalkingState", {
                qJ: Vb,
                keb: tb,
                walkingLegSwingDuration: KM.u
              }), Hb.qS(this.eId, "humanoidMesh", {
                qJ: Vb,
                keb: tb,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Hb.qS(this.eId, "animator", {
                qJ: Vb,
                keb: tb,
                modelLifeformType: "Player"
              }), ZM.e.hasAnimation("Person") && Hb.qS(this.eId, "rigAnimation", {
                target: "Person",
                qJ: Vb
              }), Hb.NMb(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === gb && null !== Vb) {
              Hb.qS(this.eId, "animator", {
                qJ: Vb,
                keb: tb,
                modelLifeformType: null
              });
              const bb = (0, sM.t)(lb.blockName);
              null !== bb && Hb.qS(this.eId, "rigAnimation", {
                target: bb,
                qJ: Vb
              })
            }
            Hb.HLb(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Ob
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === lb.autoRotate && (Hb.nS(this.eId, "meshRotation"), Hb.qS(this.eId, "autoRotate"));
            const {
              lineToEId: zb
            } = lb;
            (0, BM.K)(zb) || Hb.qS(this.eId, "lineToEntity", {
              lineToEId: zb
            });
            const Xb = eb.zN[eb.VJ][this.eId];
            this.updateOverlayColour(null !== (bb = null === Xb || void 0 === Xb ? void 0 : Xb.overlayColour) && void 0 !== bb ? bb : null), this.updateOpacity(null !== (wb = null === Xb || void 0 === Xb ? void 0 : Xb.opacity) && void 0 !== wb ? wb : 1), this.updateZIndex(null !== (Mb = null === Xb || void 0 === Xb ? void 0 : Xb.zIndex) && void 0 !== Mb ? Mb : 0)
          },
          removeMeshComponent: () => {
            "Person" !== gb && "BloxdBlock" !== gb || Hb.nS(this.eId, "rigAnimation"), Hb.nS(this.eId, Hb.names.mesh), Hb.eMb(this.eId, Hb.names.meshAttachments) && Hb.nS(this.eId, Hb.names.meshAttachments), Hb.nS(this.eId, "entityName"), Hb.nS(this.eId, "autoRotate"), Hb.nS(this.eId, "lineToEntity"), "Person" === gb ? (Hb.nS(this.eId, Hb.names.moveState), Hb.nS(this.eId, "updateWalkingState"), Hb.nS(this.eId, "humanoidMesh"), Hb.nS(this.eId, "animator")) : "BloxdBlock" === gb && Hb.nS(this.eId, "animator")
          },
          hideDist: null !== (wb = lb.hideDist) && void 0 !== wb ? wb : 80,
          movingHideDist: null !== (Mb = lb.hideDist) && void 0 !== Mb ? Mb : 120,
          displayOutsideLoadedChunk: lb.hideDist > 100,
          immediatelyUpdate: !0,
          qI: "BloxdBlock" === gb ? lb.blockName : gb
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.BC || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, mM.f)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(bb) {
        var wb, Mb;
        if ("Person" !== this.meshKind) return;
        let eb = new zM.c(0, 0, 0, 0);
        if (null !== bb) {
          const wb = (0, hM.cb)(bb);
          eb = new zM.c(wb[0] / 255, wb[1] / 255, wb[2] / 255, .5)
        }
        const Hb = null !== (wb = null === (Mb = this.hU.pR.ZMb(this.eId)) || void 0 === Mb ? void 0 : Mb.qJ) && void 0 !== wb ? wb : null;
        null !== Hb && XM.d.Player.meshApi.updateMeshOverlayColour(Hb, eb)
      }
      updateZIndex(bb) {
        var wb;
        if ("Person" !== this.meshKind) return;
        const Mb = null === (wb = this.hU.pR.ZMb(this.eId)) || void 0 === wb ? void 0 : wb.qJ;
        "number" === typeof Mb && this.hU.FO.GJ.setRenderingGroupId(Mb, bb)
      }
      updateOpacity(bb) {
        const wb = this.hU.pR.ZMb(this.eId);
        wb && ("number" !== typeof wb.qJ ? wb.mesh && "ParticleEmitter" !== this.meshKind && (0, cM.h)(wb.mesh, bb) : XM.d.Player.meshApi.updateMeshOpacity(wb.qJ, bb))
      }
    }
    var WM = Mb(40277);
    class JM {
      constructor(bb, wb) {
        this.eId = wb, this.hU = void 0, this.schema = void 0, this.hU = bb.hU
      }
      initClient(bb) {
        this.schema = bb, this.hU.pR.add([bb.x, bb.y, bb.z], .1, .1, null, null, !1, !1, this.eId), this.hU.pR.qS(this.eId, "smoothToServerPos"), WM.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(bb) {
        pM.g.includes(bb) && WM.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        WM.c.remove(this.eId), this.hU.pR.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: bb,
          volume: wb,
          refDistance: Mb,
          maxHearDist: eb,
          rate: Hb
        } = this.schema;
        return {
          soundName: bb,
          volume: wb,
          refDistance: Mb,
          maxHearDist: eb,
          rate: Hb
        }
      }
    }
    var SM = Mb(2434),
      NM = Mb(37646),
      vM = Mb(7634),
      QM = Mb(39023),
      GM = Mb(2451),
      qM = Mb(39379),
      aM = Mb(10476),
      iM = Mb(39694),
      uM = Mb(38986),
      dM = Mb(1987);
    class PM {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.Peb = bb, this.hU = wb, this.setupBudgetMs = Mb, this.now = eb, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.BC = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Wm = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const bb of this.promotedSetups) {
            this.promotedSetups.delete(bb);
            const wb = this.queuedSetups.get(bb);
            wb && (this.queuedSetups.delete(bb), this.timedSetup(wb, bb))
          }
        }, this.createStateCallbacks = (0, aM.getStateCallbacks)(bb), this.roomStateCallbacks = this.createStateCallbacks(bb.state), this.roomState = bb.state, this.setupBudgetLeftMs = Mb, this.lastRefillMs = eb()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.Peb.onStateChange(this.setUpPromoted), this.hU.on("beforeInputs", this.onFrame), this.hU.on("sO", this.Wm)
      }
      setUpQueuedEntities(bb) {
        var wb;
        if ((null === (wb = (0, GM.e)().client.getMsgHandler()) || void 0 === wb ? void 0 : wb.Peb) !== this.Peb) return this.hU.off("beforeInputs", this.onFrame), this.hU.off("sO", this.Wm), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (bb && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (DM().copy(nM, this.hU.pR.Qm(this.hU.VJ)); this.setupBudgetLeftMs > 0;) {
            const bb = this.nearestQueued(nM);
            if (null === bb) return;
            this.setUpIfQueued(bb), this.setUpPromoted()
          }
      }
      nearestQueued(bb) {
        let wb = null,
          Mb = 1 / 0;
        return this.queuedSetups.forEach(((eb, Hb) => {
          const pb = function(bb, wb) {
            return (wb.x - bb[0]) ** 2 + (wb.y - bb[1]) ** 2 + (wb.z - bb[2]) ** 2
          }(bb, eb);
          (null === wb || pb < Mb) && (wb = Hb, Mb = pb)
        })), wb
      }
      setUpOrQueue(bb, wb) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(bb, wb) ? this.timedSetup(bb, wb) : this.queuedSetups.set(wb, bb)
      }
      mustSetUpNow(bb, wb) {
        const Mb = this.hU.HJ;
        if (wb === Mb) return !0;
        const eb = this.roomState.entities.get(Mb);
        return !(!eb || eb.ridingVehicleEId !== wb && eb.followingEId !== wb) || (yM(bb.type) === EM.d || (0, GM.e)().getFollowingEntities(wb).length > 0)
      }
      setUpIfQueued(bb) {
        const wb = this.queuedSetups.get(bb);
        wb && (this.queuedSetups.delete(bb), this.timedSetup(wb, bb))
      }
      promoteIfQueued(bb) {
        null !== bb && this.queuedSetups.has(bb) && this.promotedSetups.add(bb)
      }
      timedSetup(bb, wb) {
        const Mb = this.now();
        this.setupEntity(bb, wb), this.setupBudgetLeftMs -= this.now() - Mb
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.bR(((bb, wb) => {
          this.hU.HJ ? this.setUpOrQueue(bb, wb) : this.deferEntitySetupUntilInitInfo(bb, wb)
        })), this.roomStateCallbacks.entities.FW(((bb, wb) => {
          const Mb = this.deferredSetups.get(wb);
          Mb && (kw.k.unsubscribe(Mb), this.deferredSetups.delete(wb)), this.queuedSetups.delete(wb), this.detach(wb), (0, GM.e)().client.disposeEntity(wb)
        }))
      }
      deferEntitySetupUntilInitInfo(bb, wb) {
        const Mb = kw.k.YB("initInfoReceived", (() => {
          this.deferredSetups.delete(wb), this.setUpOrQueue(bb, wb)
        }));
        this.deferredSetups.set(wb, Mb), (0, SM.onGameResetOnce)((() => {
          this.deferredSetups.get(wb) === Mb && (kw.k.unsubscribe(Mb), this.deferredSetups.delete(wb)), (0, GM.e)().updatePositionAndPhysics(this.hU.VJ, {
            type: vM.r.DEFAULT,
            tier: null
          }, !0), (0, GM.e)().takeHeldPlayerBodySize(this.hU.VJ);
          const bb = this.hU.pR.sMb(this.hU.VJ);
          bb && (bb.movementType = vM.p.NORMAL)
        }))
      }
      setupEntity(bb, wb) {
        const Mb = wb === this.hU.HJ;
        if (Mb)(0, GM.e)().client.o5(this.hU.VJ, null, null);
        else {
          const {
            type: Mb
          } = bb, eb = yM(Mb);
          if (void 0 === eb) return void
          function(bb, wb) {
            const Mb = String(bb);
            if (oM.has(Mb)) return;
            oM.add(Mb);
            const eb = Mb.length > 80 ? `${Mb.slice(0,80)}...` : Mb,
              Hb = `No client handler for entity type ${JSON.stringify(eb)}, so entity ${wb} is not set up`;
            console.warn(Hb), (0, dM.reportClientError)("uncaught", Hb, "unknown_entity_type")
          }(Mb, wb);
          (0, GM.e)().client.o5(wb, bb, new eb((0, GM.e)(), wb, Mb))
        }
        const eb = this.createStateCallbacks(bb);
        if (Mb) return this.setupMapSchemaCallbacks(wb, bb, eb, "armour"), this.setupScalarField(wb, bb, eb, "scale"), this.setupScalarField(wb, bb, eb, "ridingVehicleEId"), this.setupScalarField(wb, bb, eb, "followingEId"), this.setupScalarField(wb, bb, eb, "followingOffset"), void this.setupScalarField(wb, bb, eb, "shouldMatchFollowingEntityRotation");
        for (const Hb of UM(bb.constructor)) bb[Hb] instanceof eM.MapSchema ? this.setupMapSchemaCallbacks(wb, bb, eb, Hb) : this.setupScalarField(wb, bb, eb, Hb)
      }
      setupMapSchemaCallbacks(bb, wb, Mb, eb) {
        const Hb = Mb[eb],
          pb = new Map;
        Hb.bR(((Mb, Hb) => {
          if (this.onEntityFieldChange(bb, wb, eb, {
              key: Hb,
              value: Mb
            }), !(Mb instanceof eM.Schema)) return;
          const Vb = this.createStateCallbacks(Mb),
            gb = [];
          for (const pb of UM(Mb.constructor)) gb.push(this.listenForFutureChanges(Vb, pb, (() => {
            this.onEntityFieldChange(bb, wb, eb, {
              key: Hb,
              value: Mb
            })
          })));
          pb.set(Hb, (() => {
            for (const bb of gb) bb()
          }))
        })), Hb.FW(((Mb, Hb) => {
          var Vb;
          null === (Vb = pb.get(Hb)) || void 0 === Vb || Vb(), pb.delete(Hb), this.onEntityFieldChange(bb, wb, eb, {
            key: Hb,
            value: null
          })
        })), this.addDetacher(bb, (() => {
          for (const bb of pb.values()) bb();
          pb.clear()
        }))
      }
      setupScalarField(bb, wb, Mb, eb) {
        this.onEntityFieldChange(bb, wb, eb, wb[eb]);
        const Hb = this.listenForFutureChanges(Mb, eb, (Mb => {
          this.onEntityFieldChange(bb, wb, eb, Mb)
        }));
        this.addDetacher(bb, Hb)
      }
      addDetacher(bb, wb) {
        let Mb = this.detachers.get(bb);
        Mb || (Mb = [], this.detachers.set(bb, Mb)), Mb.push(wb)
      }
      detach(bb) {
        for (const Mb of null !== (wb = this.detachers.get(bb)) && void 0 !== wb ? wb : []) {
          var wb;
          Mb()
        }
        this.detachers.delete(bb)
      }
      listenForFutureChanges(bb, wb, Mb) {
        return bb.listen(wb, Mb, !1)
      }
      onEntityFieldChange(bb, wb, Mb, eb) {
        switch (Mb) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(eb);
            const wb = this.hU.pR.NMb((0, NM.e)(bb));
            wb && (wb.ridingVehicleEId = eb);
            break
          }
          case "armour":
            this.handleArmourChange(bb, eb);
            break;
          case "followingEId":
            this.promoteIfQueued(eb), this.handleFollowingEIdChange(bb, wb, eb);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(bb, Mb, eb);
            break;
          case "scale":
            this.handleScaleChange(bb, eb);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(bb, eb);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(bb, eb);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(bb, eb);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(bb, Mb, eb)
        }(0, GM.e)().client.updateEntityField(bb, Mb, eb)
      }
      handleArmourChange(bb, wb) {
        var Mb, eb;
        const {
          key: Hb,
          value: pb
        } = wb;
        (0, XM.r)(bb, Hb, null !== (Mb = null === pb || void 0 === pb ? void 0 : pb.itemName) && void 0 !== Mb ? Mb : null, null !== (eb = null === pb || void 0 === pb ? void 0 : pb.enchantmentTier) && void 0 !== eb ? eb : null)
      }
      handleFollowingEIdChange(bb, wb, Mb) {
        const eb = (0, NM.e)(bb),
          Hb = eb === this.hU.VJ;
        if (this.hU.pR.nS(eb, this.hU.pR.names.iK), Mb) this.hU.pR.nS(eb, "smoothToServerPos"), this.hU.pR.qS(eb, this.hU.pR.names.iK, {
          OC: (0, NM.e)(Mb),
          offset: Array.from(wb.followingOffset),
          jeb: wb.shouldMatchFollowingEntityRotation,
          ceb: !0,
          Yeb: (bb, eb) => {
            if (DM().copy(bb, wb.followingOffset), wb.ridingVehicleEId === Mb) {
              const wb = (0, NM.e)(Mb),
                Hb = (0, GM.e)().getEntityHeading(wb, eb);
              DM().kE(bb, bb, DM().ZERO, Hb)
            }
          }
        });
        else if (!Hb) {
          this.hU.pR.eMb(eb, "smoothToServerPos") || this.hU.pR.qS(eb, "smoothToServerPos");
          const bb = this.hU.pR.getState(eb, "smoothToServerPos"),
            wb = this.hU.pR.Z2(eb).position;
          (0, uM.setServerPosition)(bb, wb[0], wb[1], wb[2])
        }
      }
      handleRotationChange(bb, wb, Mb) {
        const eb = "xRotation" === wb ? 0 : "yRotation" === wb ? 1 : 2;
        for (const Hb of (0, GM.e)().getFollowingEntities(bb)) {
          const bb = this.hU.pR.getState(Hb, "meshRotation"),
            wb = this.hU.pR.Xeb(Hb);
          bb && wb.jeb && (bb.serverSetRotation[eb] = Mb)
        }
      }
      handleScaleChange(bb, wb) {
        const Mb = (0, NM.e)(bb);
        if (kw.k.iI(`entityScale|${Mb}`, wb), Mb === this.hU.VJ) {
          var eb;
          (0, GM.e)().removeFromEyeHeightCache(Mb);
          const bb = this.hU.pR.sMb(this.hU.VJ),
            wb = null !== (eb = null === bb || void 0 === bb ? void 0 : bb.physicsState) && void 0 !== eb ? eb : {
              type: vM.r.DEFAULT,
              tier: null
            };
          return void(0, GM.e)().updatePositionAndPhysics(this.hU.VJ, wb, !1)
        }
        const Hb = (0, GM.e)().getLifeformType(Mb);
        if (null === Hb) return;
        const {
          physicsBodyWidth: pb,
          physicsBodyHeight: Vb
        } = (0, iM.g)(wb, Hb);
        this.hU.pR.heb(Mb, pb, Vb, pb)
      }
      handleBaseRenderHeadingChange(bb, wb) {
        const Mb = this.hU.pR.getState(bb, "meshRotation");
        Mb && (Mb.baseRenderRotation[1] = wb);
        for (const eb of (0, GM.e)().getFollowingEntities(bb)) {
          const bb = this.hU.pR.getState(eb, "meshRotation"),
            Mb = this.hU.pR.Xeb(eb);
          bb && Mb.jeb && (bb.baseRenderRotation[1] = wb)
        }
      }
      handleFollowingOffsetChange(bb, wb) {
        const Mb = this.hU.pR.Xeb((0, NM.e)(bb));
        if (Mb && Mb.offset) {
          const bb = wb ? Array.from(wb) : DM().ZERO;
          Mb.offset[0] = bb[0], Mb.offset[1] = bb[1], Mb.offset[2] = bb[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(bb, wb) {
        const Mb = this.hU.pR.Xeb((0, NM.e)(bb));
        Mb && (Mb.jeb = null === wb || void 0 === wb || wb)
      }
      handlePositionChange(bb, wb, Mb) {
        if (this.hU.pR.eMb(bb, "smoothToServerPos")) {
          const eb = this.hU.pR.getState(bb, "smoothToServerPos");
          (0, uM.setServerPositionAxis)(eb, TM[wb], Mb)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.bR(((bb, wb) => {
          this.allItems[wb] = bb, (0, QM.n)(this.hU, wb, [bb.x, bb.y, bb.z], bb.id, {
            amount: bb.amount,
            attributes: JSON.parse(bb.attributes),
            hH: (0, bM.e)(this.hU).cantPickUpItem(wb),
            size: bb.size,
            predictedAt: (0, GM.e)().client.itemDropPrediction.onServerItemAdded(wb)
          });
          const Mb = this.createStateCallbacks(bb);
          for (const eb of UM(gM)) this.onItemFieldChange(wb, eb, bb[eb]), this.addDetacher(wb, this.listenForFutureChanges(Mb, eb, (bb => {
            this.onItemFieldChange(wb, eb, bb)
          })))
        })), this.roomStateCallbacks.items.FW(((bb, wb) => {
          delete this.allItems[wb], this.detach(wb), (0, GM.e)().client.itemDropPrediction.onServerItemRemoved(wb), this.hU.pR.eMb(wb, this.hU.pR.names.itemState) && this.hU.pR.deleteEntity(wb), (0, bM.e)(this.hU).disposeEntity(wb)
        }))
      }
      onItemFieldChange(bb, wb, Mb) {
        if (wb in TM) {
          if (this.hU.pR.eMb(bb, "itemState")) {
            const eb = this.hU.pR.getState(bb, "smoothToServerPos");
            (0, uM.setServerPositionAxis)(eb, TM[wb], Mb), (0, GM.e)().client.itemDropPrediction.onServerItemMoved(bb)
          }
          return
        }
        if (!this.hU.pR.eMb(bb, "itemState")) return;
        const eb = this.hU.pR.getState(bb, "itemState");
        "amount" === wb && Mb !== eb.amount && (eb.creationTime = Date.now()), eb[wb] = "attributes" === wb ? JSON.parse(Mb) : Mb
      }
      dispose() {
        if (!this.BC) {
          this.BC = !0, this.hU.off("beforeInputs", this.onFrame), this.hU.off("sO", this.Wm), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const bb of this.deferredSetups.values()) kw.k.unsubscribe(bb);
          this.deferredSetups.clear(), this.hU.pR.nS(this.hU.VJ, this.hU.pR.names.iK);
          for (const bb in this.allItems) this.hU.pR.deleteEntity(bb), delete this.allItems[bb];
          for (const bb of [...this.detachers.keys()]) this.detach(bb);
          (0, bM.e)(this.hU).clear();
          for (const bb of (0, GM.e)().client.iterateEntityIds())(0, GM.e)().client.disposeEntity(bb)
        }
      }
    }
    const nM = [0, 0, 0];

    function yM(bb) {
      if ("string" !== typeof bb) return;
      const wb = bb.indexOf("|"),
        Mb = -1 === wb ? bb : bb.slice(0, wb),
        eb = be();
      return Object.hasOwn(eb, Mb) ? eb[Mb] : void 0
    }
    const oM = new Set;
    const TM = {
      x: 0,
      y: 1,
      z: 2
    };
    let kM = null;

    function be() {
      return null !== kM || (kM = {
        ...Object.fromEntries(pM.j.map((bb => {
          const {
            qI: wb
          } = (0, qM.b)(bb);
          return [bb, wb]
        }))),
        Pebble: EM.d,
        Snowball: EM.d,
        "Snowball Launcher": EM.d,
        "Reinforced Pebble": EM.d,
        Bullet: EM.d,
        "Reinforced Ball": EM.d,
        Ball: EM.d,
        Mango: EM.d,
        "Moonstone Orb": EM.d,
        ...Object.fromEntries(HM.w.map((bb => [(0, hM.dc)(bb), EM.d]))),
        Arrow: EM.d,
        "Arrow of Speed": EM.d,
        "Arrow of Poison": EM.d,
        "Arrow of Slowness": EM.d,
        "Arrow of Weakness": EM.d,
        "Arrow of Knockback": EM.d,
        "Arrow of Strength": EM.d,
        "Arrow of Invisibility": EM.d,
        "Arrow of Jumping": EM.d,
        "Arrow of Defense": EM.d,
        "Arrow of Instant Healing": EM.d,
        "Arrow of Instant Damage": EM.d,
        "Arrow of Regeneration": EM.d,
        "Arrow of Haste": EM.d,
        "Arrow of Shield": EM.d,
        "Arrow of Double Jump": EM.d,
        "Arrow of Heat Resistance": EM.d,
        "Arrow of X-Ray Vision": EM.d,
        "Arrow of Mining Yield": EM.d,
        "Arrow of Brain Rot": EM.d,
        "Arrow of Milk": EM.d,
        Fireball: EM.d,
        "Bouncy Bomb": EM.d,
        RPG: EM.d,
        "Obby RPG": EM.d,
        "Super RPG": EM.d,
        "Grenade Launcher": EM.d,
        Iceball: EM.d,
        Coconut: EM.d,
        "Splash Speed Potion": EM.d,
        "Splash Defense Potion": EM.d,
        "Splash Strength Potion": EM.d,
        "Splash Invisibility Potion": EM.d,
        "Splash Jump Potion": EM.d,
        "Splash Knockback Potion": EM.d,
        "Splash Poison Potion": EM.d,
        "Splash Speed Potion II": EM.d,
        "Splash Defense Potion II": EM.d,
        "Splash Strength Potion II": EM.d,
        "Splash Jump Potion II": EM.d,
        "Splash Knockback Potion II": EM.d,
        "Splash Poison Potion II": EM.d,
        "Splash Slowness Potion": EM.d,
        "Splash Slowness Potion II": EM.d,
        "Splash Weakness Potion": EM.d,
        "Splash Weakness Potion II": EM.d,
        "Splash Milk Potion": EM.d,
        "Splash Instant Damage Potion": EM.d,
        "Splash Instant Damage Potion II": EM.d,
        "Splash Instant Healing Potion": EM.d,
        "Splash Instant Healing Potion II": EM.d,
        "Splash Regeneration Potion": EM.d,
        "Splash Regeneration Potion II": EM.d,
        "Splash Haste Potion": EM.d,
        "Splash Haste Potion II": EM.d,
        "Splash Shield Potion": EM.d,
        "Splash Shield Potion II": EM.d,
        "Splash Double Jump Potion": EM.d,
        "Splash Heat Resistance Potion": EM.d,
        "Splash X-Ray Vision Potion": EM.d,
        "Splash Mining Yield Potion": EM.d,
        "Splash Mining Yield Potion II": EM.d,
        "Splash Brain Rot Potion": EM.d,
        "Yellow Paintball Gun": EM.d,
        "White Paintball Gun": EM.d,
        "Red Paintball Gun": EM.d,
        "Purple Paintball Gun": EM.d,
        "Pink Paintball Gun": EM.d,
        "Orange Paintball Gun": EM.d,
        "Magenta Paintball Gun": EM.d,
        "Lime Paintball Gun": EM.d,
        "Light Gray Paintball Gun": EM.d,
        "Light Blue Paintball Gun": EM.d,
        "Green Paintball Gun": EM.d,
        "Gray Paintball Gun": EM.d,
        "Cyan Paintball Gun": EM.d,
        "Brown Paintball Gun": EM.d,
        "Blue Paintball Gun": EM.d,
        "Black Paintball Gun": EM.d,
        "Yellow Heavy Paintball Gun": EM.d,
        "White Heavy Paintball Gun": EM.d,
        "Red Heavy Paintball Gun": EM.d,
        "Purple Heavy Paintball Gun": EM.d,
        "Pink Heavy Paintball Gun": EM.d,
        "Orange Heavy Paintball Gun": EM.d,
        "Magenta Heavy Paintball Gun": EM.d,
        "Lime Heavy Paintball Gun": EM.d,
        "Light Gray Heavy Paintball Gun": EM.d,
        "Light Blue Heavy Paintball Gun": EM.d,
        "Green Heavy Paintball Gun": EM.d,
        "Gray Heavy Paintball Gun": EM.d,
        "Cyan Heavy Paintball Gun": EM.d,
        "Brown Heavy Paintball Gun": EM.d,
        "Blue Heavy Paintball Gun": EM.d,
        "Black Heavy Paintball Gun": EM.d,
        "Toxin Ball": EM.d,
        "Splash Aura XP Potion": EM.d,
        "Splash Aura XP Potion II": EM.d,
        "Arrow of Aura XP": EM.d,
        Firecracker: EM.d,
        "Rainbow Firecracker": EM.d,
        "White Firecracker": EM.d,
        "Orange Firecracker": EM.d,
        "Magenta Firecracker": EM.d,
        "Light Blue Firecracker": EM.d,
        "Yellow Firecracker": EM.d,
        "Lime Firecracker": EM.d,
        "Pink Firecracker": EM.d,
        "Gray Firecracker": EM.d,
        "Light Gray Firecracker": EM.d,
        "Cyan Firecracker": EM.d,
        "Purple Firecracker": EM.d,
        "Blue Firecracker": EM.d,
        "Brown Firecracker": EM.d,
        "Green Firecracker": EM.d,
        "Red Firecracker": EM.d,
        "Black Firecracker": EM.d,
        "Firecracker Pebble": EM.d,
        "Rainbow Firecracker Pebble": EM.d,
        "White Firecracker Pebble": EM.d,
        "Orange Firecracker Pebble": EM.d,
        "Magenta Firecracker Pebble": EM.d,
        "Light Blue Firecracker Pebble": EM.d,
        "Yellow Firecracker Pebble": EM.d,
        "Lime Firecracker Pebble": EM.d,
        "Pink Firecracker Pebble": EM.d,
        "Gray Firecracker Pebble": EM.d,
        "Light Gray Firecracker Pebble": EM.d,
        "Cyan Firecracker Pebble": EM.d,
        "Purple Firecracker Pebble": EM.d,
        "Blue Firecracker Pebble": EM.d,
        "Brown Firecracker Pebble": EM.d,
        "Green Firecracker Pebble": EM.d,
        "Red Firecracker Pebble": EM.d,
        "Black Firecracker Pebble": EM.d,
        "Blinding Pebble": EM.d,
        Poop: EM.d,
        "Wood Boomerang": EM.d,
        "Stone Boomerang": EM.d,
        "Iron Boomerang": EM.d,
        "Gold Boomerang": EM.d,
        "Diamond Boomerang": EM.d,
        "Amethite Boomerang": EM.d,
        "Magmasteel Boomerang": EM.d,
        "Rubellite Boomerang": EM.d,
        "Serpentite Boomerang": EM.d,
        "Moonstone Boomerang": EM.d,
        "67 Base Projectile": EM.d,
        "67 Boosted Projectile": EM.d,
        "Capitano Grenade": EM.d,
        "Scatter Pellet": EM.d,
        "Lucky Bomb": EM.d,
        "Unlucky Bomb": EM.d,
        "Swap Orb": EM.d,
        Mesh: AM,
        AudioEntity: JM
      }), kM
    }
  },
  40325: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      g: () => Vb
    });
    var eb = Mb(661),
      Hb = Mb(38953);
    const pb = 4e4;
    class Vb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = bb, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(bb, wb, Mb) {
        const pb = (0, eb.V)(bb),
          Vb = (0, eb.V)(wb),
          gb = (0, eb.V)(Mb),
          lb = this.now();
        if (pb !== this.lastChunkX || Vb !== this.lastChunkY || gb !== this.lastChunkZ) {
          this.lastChunkX = pb, this.lastChunkY = Vb, this.lastChunkZ = gb, this.lastChunkId = (0, Hb.c)(pb, Vb, gb), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, lb);
          for (const [bb, wb] of this.editedAt) {
            if (wb >= lb - 3e5) break;
            this.editedAt.delete(bb)
          }
        } else this.editedAt.set(this.lastChunkId, lb)
      }
      chunksEditedSince(bb) {
        const wb = [];
        for (const [Mb, eb] of this.editedAt) eb >= bb && wb.push(Mb);
        return wb
      }
    }
  },
  40391: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Cw,
      e: () => aw,
      f: () => Aw,
      j: () => iw
    });
    var eb = Mb(2434),
      Hb = Mb(10109),
      pb = Mb(37938),
      Vb = Mb(37943),
      gb = Mb(1599),
      lb = Mb(37627),
      Lb = Mb(40277),
      Ib = Mb(40265),
      Ob = Mb(2550),
      Ub = Mb(39103),
      tb = Mb(40393),
      Cb = Mb(1313),
      Eb = Mb(366),
      Fb = Mb(29),
      Bb = Mb(2167),
      sb = Mb(110),
      mb = Mb(43),
      hb = Mb(2194),
      zb = Mb(2107),
      Xb = Mb(4248);
    class xb {
      constructor(bb) {
        this.storeForMs = bb, this.clicks = new Xb.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const bb = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < bb;) this.clicks.dequeue()
      }
      getNumClicksInMs(bb) {
        let wb = 0;
        return this.clicks.forEach((Mb => {
          Mb > Date.now() - bb && wb++
        })), wb
      }
      getMaxClickSeparationInMs(bb) {
        if (0 === this.clicks.size) return this.storeForMs;
        let wb = 0,
          Mb = Date.now() - bb;
        this.clicks.forEach((eb => {
          eb < Date.now() - bb || (wb = Math.max(wb, Math.abs(eb - Mb)), Mb = eb)
        }));
        const eb = Math.abs(Date.now() - Mb);
        return Math.max(wb, eb)
      }
    }
    class jb {
      constructor(bb) {
        this.storeForMs = bb, this.clickDownDurations = new Xb.d
      }
      registerClickDownDuration(bb) {
        this.clickDownDurations.enqueue({
          dur: bb,
          atTime: Date.now()
        });
        const wb = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < wb;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(bb) {
        if (bb > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let wb = 0,
          Mb = 0;
        return this.clickDownDurations.forEach((eb => {
          eb.atTime > Date.now() - bb && (wb++, Mb = Math.max(Mb, eb.dur))
        })), `${wb}:${Mb}`
      }
    }
    var Kb = Mb(37781),
      rb = Mb(40397),
      Rb = Mb(26),
      Db = Mb(2451),
      cb = Mb(1447),
      Yb = Mb(3496),
      Zb = Mb(5291),
      fb = Mb(160),
      Ab = Mb(39388),
      Wb = Mb(39607),
      Jb = Mb(661),
      Sb = Mb(37776),
      Nb = Mb(13),
      vb = Mb(5868),
      Qb = Mb(1301),
      Gb = Mb(225),
      qb = Mb(40403),
      ab = Mb(40410),
      ib = Mb(40419),
      ub = Mb(39415),
      db = Mb(40433),
      Pb = Mb(39319),
      nb = Mb(4788),
      yb = Mb(1821),
      ob = Mb(3531),
      Tb = Mb(4060),
      kb = Mb(37593),
      bw = Mb(37602),
      ww = Mb(40427),
      Mw = Mb(39197);
    const ew = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Hw() {
      var bb, wb;
      return !(null === (bb = (0, Db.e)().client) || void 0 === bb || null === (wb = bb.freeCameraController) || void 0 === wb || !wb.movesFly())
    }

    function pw(bb) {
      const wb = bb.on.bind(bb);
      bb.on = (bb, Mb) => {
        hb.v.has(bb) ? wb(bb, Mb) : wb(bb, (wb => {
          var eb;
          return null !== (eb = (0, Db.e)().client) && void 0 !== eb && eb.isReplayMode() ? function(bb) {
            return bb in ew
          }(bb) && Hw() ? Mb(wb) : void 0 : Mb(wb)
        }))
      }
    }
    const Vw = 5e3,
      gw = 1;
    let lw, Lw = gw,
      Iw = 0;
    const Ow = !0;
    let Uw = Ow;
    Bb.c.subscribe("_ignoreBasicBoards", (bb => {
      Uw = bb
    })), (0, eb.onGameReset)((() => {
      Uw = Ow
    }));
    let tw = null;
    const Cw = () => tw;
    let Ew, Fw, Bw;
    var sw, mw, hw, zw, Xw, xw, jw, Kw, rw;
    const Rw = [1, 46, 0, "h", 211, "i", 64, 91, 5, 4, 8, 255, "length", 2, "d", "a", 104, "undefined", void 0, 11, 115, 63, 6, "fromCodePoint", 7, 12, "push", "b", null, 196, "c", 245, "g", 8191, 88, 13, 14, 3, !1, 9, 161, 23, 181, 234, 142, 134, 144, 160, "e", "f", 215, 122, !0, 17, 212, 118, 121, 224, 49, 38, 92, 20, 232, 131, 33554432, 67108864, 123, 87, 55, 247, 216, 127, 128, 200, 111, 243, 22, 250, 246, 72, 222, 168, 223, 163, 48, 93, 10, 74, 205, 79, 249, 61, "k"];

    function Dw(bb) {
      return typeof sw[bb] === Rw[17] ? sw[bb] = function(...bb) {
        for (fw(bb[Rw[12]] = Rw[0], bb[Rw[0]] = 'Lnd%QlRKV3o4!pM1sN,xPmT|~IF6^ak_*8H=&.Gb(YCiDB;<OuhXA@E"J5g>zf:/vjU$rWq#yeSZw}t7[9`+20]){c?', bb[-Rw[1]] = "" + (bb[Rw[2]] || ""), bb[-Rw[4]] = bb[-Rw[1]].length, bb[Rw[9]] = [], bb[Rw[8]] = Rw[2], bb[Rw[7]] = Rw[2], bb[Rw[6]] = -Rw[0]), bb[Rw[3]] = Rw[2]; bb[Rw[3]] < bb[-Rw[4]]; bb[Rw[3]]++)
          if (bb[Rw[5]] = bb[Rw[0]].indexOf(bb[-Rw[1]][bb[Rw[3]]]), bb[Rw[5]] !== -Rw[0])
            if (bb[Rw[6]] < Rw[2]) bb[Rw[6]] = bb[Rw[5]];
            else {
              fw(bb[Rw[6]] += bb[Rw[5]] * Rw[7], bb[Rw[8]] |= bb[Rw[6]] << bb[Rw[7]], bb[Rw[7]] += (bb[Rw[6]] & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
              do {
                fw(bb[Rw[9]].push(bb[Rw[8]] & Rw[11]), bb[Rw[8]] >>= Rw[10], bb[Rw[7]] -= Rw[10])
              } while (bb[Rw[7]] > Rw[24]);
              bb[Rw[6]] = -Rw[0]
            } return bb[Rw[6]] > -Rw[0] && bb[Rw[9]].push((bb[Rw[8]] | bb[Rw[6]] << bb[Rw[7]]) & Rw[11]), Yw(bb[Rw[9]])
      }(mw[bb]) : sw[bb]
    }

    function Yw(bb) {
      return typeof zw !== Rw[17] && zw ? (new zw).decode(new Xw(bb)) : typeof xw !== Rw[17] && xw ? xw.from(bb).toString("utf-8") : rw(bb)
    }

    function Zw() {}

    function fw() {
      fw = function() {}
    }

    function Aw(bb) {
      function wb() {
        return bb.pR.Leb(bb.VJ)
      }
      pw(bb.inputs.down), pw(bb.inputs.up);
      for (const eb of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const wb = (wb, Mb) => {
          var Hb, pb;
          if (Hw()) {
            var Vb;
            const Hb = ew[eb];
            var gb, lb;
            if (Hb) null === (gb = (0, Db.e)().client) || void 0 === gb || null === (lb = gb.freeCameraController) || void 0 === lb || lb.handlefreeCamKeyPress(Hb, wb, Mb);
            return void(Mb || null !== (Vb = (0, Db.e)().client) && void 0 !== Vb && Vb.isReplayMode() || (bb.pR.Ceb()[eb] = !1))
          }
          if (null !== (Hb = (0, Db.e)().client) && void 0 !== Hb && null !== (pb = Hb.freeCameraController) && void 0 !== pb && pb.isKeyPressOverriden(wb)) return;
          bb.pR.Ceb()[eb] = Mb
        };
        bb.inputs.down.on(eb, (bb => wb(bb, !0))), bb.inputs.up.on(eb, (bb => wb(bb, !1)))
      }
      bb.inputs.down.on("crouch", (() => {
        if (Hw()) return;
        if (!bb.BX.canCrouch) return;
        const wb = bb.pR.Ceb();
        Rb.c.get("clientEscMenuOptions").crouchIsToggle && (wb.crouchToggled = !wb.crouchToggled && !wb.padSneakToggled), wb.padSneakToggled = !1
      }));
      const Mb = () => {
        const bb = wb();
        bb.isGun() && bb.inaccuracyCalculator.jump()
      };
      bb.inputs.down.on("jump", (bb => {
        Hw() || (Mb(), Ew(bb))
      }));
      for (const eb of hb.j) bb.inputs.down.on(eb, (bb => {
        var wb, Mb;
        null !== (wb = (0, Db.e)().client) && void 0 !== wb && null !== (Mb = wb.freeCameraController) && void 0 !== Mb && Mb.handlefreeCamKeyPress(eb, bb, !0) && (bb.preventDefault(), bb.stopPropagation())
      })), bb.inputs.up.on(eb, (bb => {
        var wb, Mb;
        null !== (wb = (0, Db.e)().client) && void 0 !== wb && null !== (Mb = wb.freeCameraController) && void 0 !== Mb && Mb.handlefreeCamKeyPress(eb, bb, !1) && (bb.preventDefault(), bb.stopPropagation())
      }));
      bb.inputs.down.on("recordGame", (() => {
        var bb, wb;
        null === (bb = (0, Db.e)().client) || void 0 === bb || null === (wb = bb.gameRecorder) || void 0 === wb || wb.toggleRecording()
      })), bb.inputs.down.on("recordClip", (() => {
        var bb, wb;
        (0, Kb.e)() || null === (bb = (0, Db.e)().client) || void 0 === bb || null === (wb = bb.gameRecorder) || void 0 === wb || wb.saveClip()
      }));
      for (const eb of hb.v) bb.inputs.down.on(eb, (() => {
        var bb;
        if ((0, rb.c)()) return;
        if ("replayViewerOpen" === eb) return void Fb.k.iI("replayViewer|requested", "toggle");
        const wb = null === (bb = (0, Db.e)().client) || void 0 === bb ? void 0 : bb.gameReplayer;
        ((0, Kb.e)() || null !== wb && void 0 !== wb && wb.isReplayMode()) && (null === wb || void 0 === wb || wb.handleAction(eb))
      }));
      const gb = new xb(3e4),
        Ub = new jb(4e4);
      let tb = 0;
      const mb = bb => {
          let wb = 0,
            Mb = null;
          const eb = wb => null !== wb && wb === Mb && (Mb = null, bb(), !0);
          return {
            press: () => (wb++, (0, qb.c)() || (eb(Mb), Mb = wb), wb),
            owns: bb => bb === Mb,
            release: eb
          }
        },
        Xb = (bb, Mb) => {
          Mb && iw(Cb.e.TouchDownFirePrimary), bb ? vb() : ((0, Wb.g)(), wb().lHb()), Mb || iw(Cb.e.DownFirePrimary), aw(!0), gb.click();
          const Hb = gb.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            pb = gb.getMaxClickSeparationInMs(1e4) < 20,
            Vb = gb.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Hb || pb || Vb) {
            let bb;
            if (Hb) bb = 30;
            else if (pb) bb = 50;
            else {
              if (!Vb) throw new Error("???");
              bb = 70
            }(0, eb.sendColyMessage)(Ob.Mj, bb)
          }
        },
        Zb = new ab.e,
        fb = mb((() => {
          ab.e.stopRunning();
          const bb = Date.now() - tb;
          Ub.registerClickDownDuration(bb), wb().pHb(), iw(Cb.e.UpFirePrimary), aw(!1);
          const Mb = Ub.clickDownDurationsCheck(4e4);
          (0, eb.sendColyMessage)(Ob.yg, Mb)
        }));
      let Ab = 0;
      bb.inputs.down.on("primary-fire", (function(bb) {
        Ab = fb.press(), fb.owns(Ab) && (tb = Date.now(), Math.abs(performance.now() - bb.timeStamp) > 5e3 || (Xb(bb.altKey, "changedTouches" in bb), Ew(bb)))
      })), bb.inputs.up.on("primary-fire", (function(bb) {
        fb.release(Ab) && Ew(bb, !0)
      }));
      const Jb = () => {
          wb().oIb(), iw(Cb.e.DownFireSecondary), aw(!0), bb.awb && !bb.awb.position && (0, Ib.g)()
        },
        Sb = mb((() => {
          wb().HHb(), iw(Cb.e.UpFireSecondary), aw(!1)
        }));
      let Nb = 0;
      bb.inputs.down.on("alt-fire", (function(bb) {
        Nb = Sb.press(), Sb.owns(Nb) && (Jb(), Ew(bb))
      })), bb.inputs.up.on("alt-fire", (function(bb) {
        Sb.release(Nb) && Ew(bb, !0)
      }));
      const vb = () => wb().bOb();
      bb.inputs.down.on("mid-fire", (() => {
        (0, qb.c)() || vb()
      }));
      const db = bb => {
          (0, eb.sendColyMessage)(Ob.Bh, bb, !0)
        },
        lw = bb => {
          (0, eb.sendColyMessage)(Ob.Ch, {
            ug: bb,
            dg: Ow()
          }, !0)
        };
      for (const eb of ["SpecialAction1", "SpecialAction2"]) bb.inputs.down.on(eb, (() => {
        db(eb)
      })), bb.inputs.up.on(eb, (() => {
        lw(eb)
      }));
      const Iw = () => {
        const bb = wb();
        bb.isGun() && bb.reload(Date.now())
      };
      bb.inputs.down.on("ReloadGun", Iw);
      const Ow = () => {
        let wb = "a";
        return bb.physics.testSolid.toString().includes("vU") || (wb = "b"), wb
      };
      bb.inputs.down.on("OpenInventory", (bb => {
        bb.preventDefault(), (0, yb.A)(bb, "inventory", (0, ib.b)((0, Db.h)()))
      })), bb.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Uw = bb => {
        Fb.k.iI("DropItemKeyPressed", bb)
      };
      bb.inputs.down.on("DropItem", (() => {
        Uw(bb.pR.Ceb().crouch)
      })), bb.inputs.down.on("OpenShop", (wb => {
        (0, Kb.e)() || "inGame" === Rb.c.get("gameState") && (0, yb.x)(wb, Eb.l.SHOP, !(0, Hb.c)(bb.BX.shopInfo))
      })), bb.inputs.down.on("OpenLobbyLeaderboard", (wb => {
        (0, Kb.e)() || "inGame" === Rb.c.get("gameState") && (0, yb.D)(wb, (0, ww.b)(bb.BX), (0, ob.r)())
      })), bb.inputs.down.on("HideUi", (() => {
        Fb.k.iI("showUi", !1)
      })), bb.inputs.up.on("HideUi", (() => {
        Fb.k.iI("showUi", !0)
      }));
      const Cw = bb => {
        0 === bb && (bb = 10), Fb.k.iI("setSelectedInventorySlotI", bb - 1), Fb.k.iI("numkeyPressed", bb)
      };
      for (let eb = 1; eb <= 10; eb++) bb.inputs.down.on("HotBarSlot" + eb.toString(), (() => {
        Cw(eb)
      }));
      bb.inputs.down.on("OpenTasksAndLeaderboard", (wb => {
        const Mb = (0, ob.s)();
        Mb ? (0, yb.G)(wb, !0, Mb) : (0, yb.A)(wb, "retentionFeatures", !(!bb.BX._tasks && !bb.BX._availableLeaderboards))
      })), bb.inputs.down.on("OpenCodeEditor", (wb => {
        (0, yb.G)(wb, (0, Yb.d)((0, cb.e)()), (() => {
          (0, Yb.h)(bb.pR.Qm(bb.VJ))
        }))
      })), bb.inputs.bind("ToggleFullCoordinateOverlay", "F3"), bb.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Fb.k.iI("toggleFullCoordinateOverlay")
      }));
      const Bw = () => {
        (0, Db.e)().client.cameraController.swapCameraZoom()
      };
      bb.inputs.down.on("SwapCameraZoom", Bw), bb.inputs.down.on("OpenInviteLink", (bb => {
        (0, yb.A)(bb, "inviteLink", sb.featureFlags.canUseInviteLinks)
      })), bb.inputs.bind("Y", "KeyY"), bb.inputs.down.on("Y", (bb => {
        (0, Kb.e)() || Fb.k.iI("YKeyPressed")
      })), bb.inputs.bind("X", "KeyX"), bb.inputs.down.on("X", (bb => {
        (0, Kb.e)() || Fb.k.iI("XKeyPressed")
      })), bb.inputs.down.on("OpenEmoteWheel", (() => {
        Fb.k.iI("requestEmoteWheelHoldOpen")
      })), bb.inputs.up.on("OpenEmoteWheel", (() => {
        Fb.k.iI("requestEmoteWheelHoldRelease")
      })), bb.inputs.down.on("Zoom", (() => {
        "inGame" === Rb.c.get("gameState") && (0, Db.e)().client.cameraController.setZoomKeyHeld("keys", !0)
      })), bb.inputs.up.on("Zoom", (() => {
        (0, Db.e)().client.cameraController.setZoomKeyHeld("keys", !1)
      })), Ww();
      const sw = bb => function() {
        return Fw(), bb(...arguments)
      };

      function mw(bb) {
        "inGame" !== Rb.c.get("gameState") || (0, yb.u)() || (Fb.k.iI("ctrlCrouchWithoutFullscreen"), bb.preventDefault())
      }
      tw = {
        primaryFireDown: sw((bb => {
          const wb = fb.press();
          return fb.owns(wb) && (tb = Date.now(), Xb(!1, !1), bb && Zb.start()), wb
        })),
        primaryFireUp: sw((bb => {
          fb.release(bb)
        })),
        altFireDown: sw((() => {
          const bb = Sb.press();
          return Sb.owns(bb) && Jb(), bb
        })),
        altFireUp: sw((bb => {
          Sb.release(bb)
        })),
        jumpDown: sw(Mb),
        specialActionDown: sw(db),
        specialActionUp: sw(lw),
        reloadGun: sw(Iw),
        dropItem: sw(Uw),
        swapCameraZoom: sw(Bw),
        zoom: sw((bb => {
          (0, Db.e)().client.cameraController.setZoomKeyHeld("pad", bb)
        })),
        pickBlock: sw(vb)
      }, bb.inputs.down.on("ctrlCrouch", mw), bb.inputs.up.on("ctrlCrouch", mw), bb.inputs.bind("ctrlCrouch", "ControlLeft");
      const hw = bb => {
        "inGame" === Rb.c.get("gameState") && bb.ctrlKey && !(0, yb.u)() && bb.preventDefault()
      };
      document.addEventListener("keydown", hw), document.addEventListener("keyup", hw), document.addEventListener("keypress", hw), bb.inputs.bind("Alt", "AltLeft", "AltRight"), bb.inputs.down.on("Alt", (bb => {
        bb.preventDefault()
      }));
      const zw = wb => (0, Pb.e)(bb, wb),
        Xw = wb => (0, Pb.g)(bb, wb),
        xw = [0, 0, 0],
        jw = [0, 0, 1];
      bb.on("afterRender", (wb => {
        bw.l.frame(wb, bb.camera.heading, bb.camera.pitch, bw.g.drawn), (0, pb.f)(bb.camera.heading), (0, Vb.h)(bb.camera.heading), (0, Pb.j)(bb, xw, jw), (0, Db.e)().client.triggerGameCallback("onAfterRender", wb, {
          cameraHeading: bb.camera.heading,
          cameraPitch: bb.camera.pitch,
          cameraPosition: xw,
          cameraDirection: jw,
          tanHalfFovX: (0, Pb.b)(bb),
          tanHalfFovY: Math.tan(bb.FO.T_().fov / 2),
          screenBandPct: {
            x: nb.c,
            y: (0, nb.j)()
          },
          projectWorldPosToScreenPos: zw,
          projectWorldPosToViewport: Xw
        })
      })), bb.camera.oW = (0, kb.startLookDebug)("js"), bb.inputs.LJ = kb.noteLookDroppedCopy, (0, Tb.m)("remesh") && (0, Mw.m)(bb), bb.on("beforeInputs", (() => {
        if ((0, rb.c)()) return bb.inputs.Hk.dx = 0, void(bb.inputs.Hk.dy = 0);
        if (bb.camera.Hk.dx += bb.inputs.Hk.dx, bb.camera.Hk.dy += bb.inputs.Hk.dy, 0 !== bb.inputs.Hk.dx || 0 !== bb.inputs.Hk.dy) {
          bb.pR.getState(bb.VJ, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        bb.inputs.Hk.dx = 0, bb.inputs.Hk.dy = 0
      }));
      let Kw = 0;
      const rw = [0, 0, 0],
        Rw = [0, 0, 0],
        Dw = {
          base: rw,
          max: Rw
        },
        Yw = bb => {
          const wb = Gb.e.droppedBlockSize / 2;
          return [0, 1, 2].every((Mb => bb[Mb] >= rw[Mb] - wb && bb[Mb] <= Rw[Mb] + wb))
        };
      bb.on("sO", (function(wb) {
        Fb.k.iI("noaTick", wb);
        const Mb = (0, Db.e)().client;
        if (Mb.triggerGameCallback("sO", wb), Mb.isClientGameSessionActive()) try {
          Lb.c.sO(wb)
        } catch (Vb) {
          console.error("Error ticking audio entities", Vb)
        }
        if (!bb.pR.geb(bb.VJ).isAlive) return;
        Date.now() - Kw > 9e3 && (! function() {
          const bb = (0, Db.h)();
          "number" === typeof bb.BX.speedMultiplier && "number" === typeof bb.BX.jumpAmount && (0, eb.sendColyMessage)(Ob.$h, {
            iV: (0, Qb.c)(bb.BX.speedMultiplier),
            uV: (0, Qb.b)(bb.BX.jumpAmount),
            dV: (0, Qb.c)(bb.BX.crouchingSpeed),
            PV: (0, Qb.c)(bb.BX.walkingSpeed),
            nV: (0, Qb.c)(bb.BX.runningSpeed),
            yV: (0, Qb.b)(bb.Jwb),
            oV: bb.pR.sMb(bb.VJ).jumpForce,
            TV: bb.pR.Z2(1).width,
            kV: bb.pR.Z2(1).height,
            bg: bb.pR.fn(1).bg
          }, !0)
        }(), Kw = Date.now());
        const Hb = bb.pR.Ceb();
        if ((Hb.jump || Hb.forward || Hb.backward || Hb.left || Hb.right || Hb.sprint) && Fb.k.iI("usedKeyboard"), bb.pR.qMb(bb.VJ) && !0 === bb.BX.canPickUpItems) {
          const wb = bb.pR.Qm(bb.VJ),
            Mb = (0, zb.s)(Lw),
            Hb = (0, zb.u)(Lw);
          rw[0] = wb[0] - Mb, rw[1] = wb[1] - .6 * Hb, rw[2] = wb[2] - Mb, Rw[0] = wb[0] + Mb, Rw[1] = wb[1] + Gb.e.oF + .6 * Hb, Rw[2] = wb[2] + Mb;
          const pb = bb.pR.pLb(Dw, bb.pR.names.autoRotate),
            {
              itemDropPrediction: Vb
            } = (0, Db.e)().client,
            gb = eb.offlineInputReplay.holdsInput();
          if (pb.length > 0)
            for (const Lb of pb) {
              const wb = bb.pR.getState(Lb, "itemState");
              if (void 0 === wb || Date.now() - wb.creationTime < 500) continue;
              let Mb = Lb,
                Hb = null;
              if (wb.hH) {
                const bb = Vb.pickupTarget(Lb, Yw, gb);
                if (null === bb) continue;
                ({
                  fI: Mb,
                  JI: Hb
                } = bb)
              }
              const pb = bb.pR.getState(Mb, "itemState");
              if (pb.hH && null === Hb) continue;
              let Ub = 0,
                tb = null,
                Cb = !1;
              if (0 === pb.amount) Cb = !0;
              else {
                const {
                  amountPickedUp: wb
                } = bb.pR.QMb(bb.VJ).pickUpItem({
                  name: pb.name,
                  typeObj: pb.typeObj,
                  amount: pb.amount,
                  attributes: pb.attributes
                });
                if (Ub = wb, 0 === Ub) continue;
                tb = ub.e.pickUp(pb, Ub), pb.amount -= Ub, pb.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === pb.amount ? Cb = !0 : pb.creationTime = Date.now() + Vw
              }
              const Eb = (0, Db.e)().client.inventoryPrediction.record(tb);
              (0, eb.sendColyMessage)(Ob.xh, {
                fI: null === Hb ? Mb : "",
                AI: Ub,
                WI: Ib.c,
                gV: Eb,
                JI: Hb
              }, !0), Cb && (gb && Vb.onPickedUpOffline(Mb, Eb, Hb), null === Hb && bb.pR.deleteEntity(Mb));
              lb.c.play("pickUp", Gb.e.pickupSoundVol).rate(1 + Math.random() * Gb.e.pickupSoundRateVariation)
            }
        }
        if (!bb.pR.ZMb(bb.VJ)) return;
        const pb = bb.inputs.Hk.xMb;
        if (0 !== pb) {
          const wb = pb > 0 ? 1 : -1;
          bb.inputs.state["mid-fire"] || bb.inputs.state.Alt || !bb.BX.useInventory ? (bb.inputs.state["mid-fire"] && Fb.k.iI("requestEmoteWheelClose"), (0, Db.e)().client.cameraController.handleScrollZoom(wb)) : Fb.k.iI("ScrollInventorySlot", wb)
        }
      })), Bb.c.subscribe("droppedItemScale", (bb => {
        Lw = "number" === typeof bb && isFinite(bb) ? bb : gw
      }))
    }

    function Ww() {
      const bb = (0, Db.h)();
      if (bb)
        for (const wb in hb.p) {
          bb.inputs.unbind(wb);
          for (const Mb of hb.p[wb]) bb.inputs.bind(wb, Mb)
        }
    }
    fw(sw = {}, mw = ['|PGKiZh;j3a72<|Y2I&}=["aWgFyol^=7.TQJqMAv3mw+M6|(EaS6EV;lx', "::X}7#:~5PX>+MjCxXdZY.Bnu!vQA6h6/NTQ", 'B!E_!w&!Jg@="GKxKrXoo:J,%', 'YOGAe"NW8/u^D%(IgjXV}"A(835>mybG@X(R}hLg&x!j(>:a"M?Vj2(&@xeeL', "R*Ikj2$|zJeqjIbI|S^}nyV~M/VZU9$k!;,Zc5C;X3;m#MKISBI6~+cNz:U*n", "4u+l)B&&3g1HUIAHa3%", "4FjE4S~[wJF", "M#NyUHWX|gyqM9a|g3|^^", "qEEuJ2Y9JPh[afLinULZ[:];km`n6`:a;XQhJgbWiNWq8u$N_%h*954pR", "LuNZ~#Q,%EAwOQl,::9*.>x@w4", "Gj7R.<pneP%Z.ppF>>]K", "mF$a$9f<&5tTHl", "cB/u~AMVVoDA9~3_p(Ql", 'lE&"cBl@1!p":Ihb{N/Q+t5/^:^', "PR,6&t/|83jUv+I=81,ym", '~;sEZW[(N1T_S9p6IEQhE.rr1/I"!b~CuFZV]#6<uU+l`IJC3#EQ', "x5=ax>x<s3i~(>{TZRd", "3!g*M:{(d3dd0~(xG#kKa[r,ZMny_#?&hj3Z6+rr<@prx6;x>jh6N+S(>N", 'rNNkf2w(IjE,J11b_R"u+h|=Sj^pWyyx7:{enzTd', 'O%~e.ew!ZV%EJ>Lkbi2}zbxp5P8y7F:&u.{E"X9pO3rq4bebWRT^mwL', '"NpS9A6aRx=O!%fkbje*F', "QrhX7#Yxs/@Wd9ga6E9Xdzz~3PAW_FZFU33kwOTg9,3y~s`^", "A5vePhMgB>3Zn9l~i#rh1G|WB@A", "W^,ZXb/a<12/iME^", "DN=a2##KBJWq[14", "^#M8}5]]n/$43y(_rOf^)5!&,!(%6MzN{B]wF", '/MAo1"l/u5io?9T(YjvR00?(X3+40O4I<F!SyOHS%5Zn8Ou(.%|3?A^Al', ">r,y<Z7n", "N5LE+tnxmg$VI&rG9B_^dS*duzs:lz<bX%r}GeSR25w@[1]=yN$VT#h;gPB", 'OXVRNACdV"C[7%4PUN#e>Xen~p[&?IH&', ">(t#9WKI;Vh", ";.Fy{54K$vv[_%", "$:$a</+Kn/}uA1lx?>t3j;#XpMMgt9}bP#ny^", '"P#A$yp/@pPX=gA^xE(uc>E]TgRj6`GI+>TK', "E3&}JbD;lv>/}~m=;!u6/g|YKoj=Mlpbf:IX{AUkyN", "35Yy*ANKVg#I5z+H", '"5mAL&E[f45', "B:qK49dCDV+@x`O(P;f_+WNK2vjqJsg|R3po~+((@ERg:u$_dz+Fc8$YOzJ", '/eJR<}A[N/Ee=G|aRFp"K9ixFP$JRlm64,(k~', '[XK3a(`A_,ntW&2^"H~RT', 'x#tA+t*k{POw2O#,=X2@G(#a?M`4v1X(#BHyE@w(R"D:$M=&s;quuugS3jF', '7_`VGuVv=38WRFOHA5O33"f<3o}}UgKxl5*Ra<3n', '8X"uR:HA85=>N&v&;:<wV7tAoP0heyl_qCN68($|ZJR`hI)H5jz"k', "HSL8)+@K@pLEV1)THrbu,GpI5PeI#GoIe|`Xv;|<~gHmV#]H)XnZb`D~R", '|(&S6E6=XzL6t9"Y{eWh~+](ojRriM>No;&Se&wR[@oy76oPB|LtW"CgePMZL', 'FH,6xtN@u,"ULbK.%m/ei=p@o"(wZ#}bj.GAuJ,~k1jm8OA(*O!aoG8<&x^', "p/@^&>wRKP{1&+liSCjEzg2ABV`V|G)T{j#R", 'j3HXsw^[</#e^sJHYigXr"[;"p%E=d#.N5d', 'xa"e>;Pgh!#$e9Nb@B|t)>HveN?}X6[([q"E"qL', "C:,6L;G&*,", "%/CaAJ=/]v5mdf}b]X0#$H,~%z)a6Mobg#)3t5Cd", "J#5Vzy=aJN{!X`>C*5+liXN@5:`4i`A($_(3", '@H#3?5caqp;wz1gaX(aoL"tH{jv>msR', "/E@od]L", 'f|L3KhdV5M:4w1`^?joZ"q6xamMo]9Ob]R]#k#r]ZN@Q5Q', "z3OE;[EgH5F", ".#U}B/_=3gW,myJH|EX*>7,gx3Eqw6=,]MLE^0T~O!u", ",!r}WzI=L,$=Rl]Y<(<Q~>gkh3ny&#)=n5d", "Q5_^A;y~loTj!6di8rNyK&aKv3aPv6|Yyj)wF", "#.+*FEH!HE`qOsZxRr_^;`wS{P", '"MTA$@S(95.wL', "FF~RU269)pmys##IcMkQIwoVh!$=7dH&baOE]09n", "e:!S9wdkzNnt:p:Ct:+FoG#a7@2!9&FC~F3X05L", "N;g}~+9nIM+V=qQ,=z%", ';XvE<bJ;1zzJNO>ah."3;gT~JgVknym6QU2h}">=K', "}>E^2tNKLzJJmzq~5L", '_r3t8A^[85w*WQ=NarW"HA+n', 'eXT34SLVL!mX1F_.U_m""2*,kms7&#>=J>$}6', "gj&o>qj=5M5q@f06K|J3,:~~X5NWQ19HPPM_(eR&qp=7n&Lk=18E+#O;l", 'a(qA"H39=5<w*s<b:O~Ew"Gk//B^z+NP6n', "gFfKU&A,.pnZoF!P~|Vk6#bZzJMjD<fa..rF%9oADV>4n", "URGQ=E&kQEdg{>v~T3%", "(rkwNAmWoM_WjO%N_aF6O`^VcP", '>P*kQ;a<p>)&r1T=mXt^N#cKqpNOBsKIrXNR9"fY[121[%VxA("3YZ:,{N', ".%uE!S5n}JEq:pUkbST^AZSH^NKgjz`H1#d", "GreEh;X=O!im~>FYnu1AsAWnK", "}JjX_Eg~D>~wU`uby:bA!Oe/lpje6<IYsz`}M5L", "e|%l_0.=,56X%F:&z>r@hqASu/:>Hu#G6##3G`2!x!cSL", "8ieR{+0Krx$[:u0Y&#2l1&d,p:fI{<(GwL", "T3jXmArR0v*6)q^=yj36DJ!du,+I3s=&KrNyIwg;X!J>V%{Y>M=y&<?:.x", ':(r}B}tAB@^"n', "<5~kJbZ5d/2$09QizE0F&r2HSP1:GpDIK|R_8AN@4MuWJQ", "=3:AkA`;;4a6uz0(ia?Vc+ZXv3LyUud.an", "REawu2F&S>TpHf@^k!#^H>F&3g+IA+aaxSKwP", 'J%l"FE*An1;eP1QieNXa|hn@O@?v>`F^', "GO_36>Rk4>.^3OH&", '5PoXu269mpy^(#ex^(T"F5j|4jVPWQ_.s#T3th}XL,mH%`}xhjd', 'WNQ}z2;AN/b7V1T(.PG^^=]HZ4(MgWp6GE0A"7L', '6FW#p5@Y^N?a$Gy,"OQ"*eHkDN=Uxhca%Q}hN', "3#W^2WL", '^arS/zwgiN:/ZG{sl|*k%9#YUz;wUg&Gd/#3q7^SD:I"UIx(', "2%}#52+n", 'yRuX9"k]mp=OguFa6juE5}r~f:{*~+)YzPWF?+f<eP;e:GVG3r~6SG//R', "/RXVth#KgN4%6d[6kSd", "zjNZrzA,4>UqE`p", 'zr)ut9?~N17,y15HCF$aE2g~lpX_%FO6[M[umWLV5Pl|Hfrk_."AM"Fd', "^i8E)AD!YN&O0[eb", 'd/G"DEL', "%51A#h^kN,VjeQK", 'WXXaTA=xv!X/*<_C[ep"yS,v_13fqIIahE&}zX^kdzmwV#A^rBL6~#19lx#}n', ";FnR)w4pLm", "]eKA%:L", "+O/uP:fp*1/KA11P", "`B)eu}RCQvQdfOs(uFfoT", "piFXLHx@cjHM=M6&5ra_cwAg`z2}gpeG5r361:QVIj;Khf6CUL", '?B1A9"vSvz!o_dqI:%H*S9o;}JTN#F>|A_Ik{hbnRpio&>^k`L', "yE4*k(G&Ep?}]M=Nsz@S0A0a%55>}~4", '9>qQpW@nO3q*+d=ko*E"qS0n', "RisE2:6<`3t/Gpu6a.aoFAXn", "8Fn67GKn", 'hcVz?O"L', "u5;u@bun", "l4$M/KXm", 'mErnt57]+4L:Wo$vO[Y^ZZJ"lTF~x!$vlQS,lOmpU6~@/yOE!E&I^', ")%:A<9e5/C0,v$L^imyEzz!>+r_J~xL^,PRl66ZNi<0Us]vcou", "Ng$M0_)U7w", "MRBmndmg}Y", "/z;}CB_ve;", ":+a{>?E&", "UPC)", "O[Eo;P}q", 'nmGp"uQ$', "1G3Ds|vl", "/r{|k=1o", "yr/fXy__[", "f.Bs]=U", "yQ{||=Oo", 'j"2VR)Ny', "{(0DHh@8", "WX<rX)J8", "v+9;", "vXUwK}8e", "adph%yO+", "LBBIqoI+", "q.bQ9XJ~"]), fw(hw = function(...bb) {
      fw(bb[Rw[12]] = Rw[2], bb[Rw[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[Rw[0]] = Rw[18], bb[Rw[13]] = []);
      try {
        fw(bb[Rw[0]] = Object, bb[Rw[13]][Rw[26]]("".__proto__.constructor.name))
      } catch (mw) {}
      bb: for (bb[Rw[14]] = Rw[2]; bb[Rw[14]] < bb[Rw[15]][Rw[12]]; bb[Rw[14]]++) try {
        for (bb[Rw[0]] = bb[Rw[15]][bb[Rw[14]]](), bb[-Rw[16]] = Rw[2]; bb[-Rw[16]] < bb[Rw[13]][Rw[12]]; bb[-Rw[16]]++)
          if (typeof bb[Rw[0]][bb[Rw[13]][bb[-Rw[16]]]] === Rw[17]) continue bb;
        return bb[Rw[0]]
      } catch (mw) {}
      return bb[Rw[0]] || this
    }() || {}, zw = hw.TextDecoder, Xw = hw.Uint8Array, xw = hw.uI, jw = hw.String || String, Kw = hw.Array || Array, rw = function(...bb) {
      return fw(bb[Rw[12]] = Rw[2], bb[Rw[27]] = new Kw(Rw[72]), bb[Rw[0]] = jw[Rw[23]] || jw.fromCharCode, bb[-Rw[19]] = []),
        function(...wb) {
          for (fw(wb[Rw[12]] = Rw[0], wb[Rw[15]] = Rw[18], wb[Rw[13]] = Rw[18], wb[-Rw[20]] = wb[Rw[2]][Rw[12]], bb[-Rw[19]][Rw[12]] = Rw[2]), wb[Rw[14]] = Rw[2]; wb[Rw[14]] < wb[-Rw[20]];) fw(wb[Rw[13]] = wb[Rw[2]][wb[Rw[14]]++], wb[Rw[13]] <= Rw[71] ? wb[Rw[15]] = wb[Rw[13]] : wb[Rw[13]] <= Rw[82] ? wb[Rw[15]] = (31 & wb[Rw[13]]) << Rw[22] | wb[Rw[2]][wb[Rw[14]]++] & Rw[21] : wb[Rw[13]] <= 239 ? wb[Rw[15]] = (15 & wb[Rw[13]]) << Rw[25] | (wb[Rw[2]][wb[Rw[14]]++] & Rw[21]) << Rw[22] | wb[Rw[2]][wb[Rw[14]]++] & Rw[21] : jw[Rw[23]] ? wb[Rw[15]] = (wb[Rw[13]] & Rw[24]) << 18 | (wb[Rw[2]][wb[Rw[14]]++] & Rw[21]) << Rw[25] | (wb[Rw[2]][wb[Rw[14]]++] & Rw[21]) << Rw[22] | wb[Rw[2]][wb[Rw[14]]++] & Rw[21] : (wb[Rw[15]] = Rw[21], wb[Rw[14]] += Rw[37]), bb[-Rw[19]][Rw[26]](bb[Rw[27]][wb[Rw[15]]] || (bb[Rw[27]][wb[Rw[15]]] = bb[Rw[0]](wb[Rw[15]]))));
          return bb[-Rw[19]].join("")
        }
    }()), Dw(109) + "r" in Zw && function(...bb) {
      bb[Rw[12]] = Rw[2]
    }(), fw(Bw = (...bb) => {
      bb[Rw[12]] = Rw[0], Dw(Rw[74]) in Zw && function(...bb) {
        bb[Rw[12]] = Rw[2]
      }(), bb[Rw[0]] = Rw[2];
      for (const wb in bb[Rw[2]]) {
        function Mb(...bb) {
          for (fw(bb[Rw[12]] = Rw[0], bb[Rw[15]] = 'f,qOhS/&C1Tb[j!+z3}_I)2yZ;L{o"Mm0FpXt|@>^xR<wY6?8vr*NsQ#V4JgBUcDe$dH.=7~n5Guk(`]%:9WiPEAalK', bb[Rw[13]] = "" + (bb[Rw[2]] || ""), bb[Rw[37]] = bb[Rw[13]].length, bb[Rw[14]] = [], bb[-Rw[51]] = Rw[2], bb[Rw[43]] = Rw[2], bb[Rw[24]] = -Rw[0]), bb[Rw[50]] = Rw[2]; bb[Rw[50]] < bb[Rw[37]]; bb[Rw[50]]++)
            if (bb[Rw[39]] = bb[Rw[15]].indexOf(bb[Rw[13]][bb[Rw[50]]]), bb[Rw[39]] !== -Rw[0])
              if (bb[Rw[24]] < Rw[2]) bb[Rw[24]] = bb[Rw[39]];
              else {
                fw(bb[Rw[24]] += bb[Rw[39]] * Rw[7], bb[-Rw[51]] |= bb[Rw[24]] << bb[Rw[43]], bb[Rw[43]] += (bb[Rw[24]] & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
                do {
                  fw(bb[Rw[14]].push(bb[-Rw[51]] & Rw[11]), bb[-Rw[51]] >>= Rw[10], bb[Rw[43]] -= Rw[10])
                } while (bb[Rw[43]] > Rw[24]);
                bb[Rw[24]] = -Rw[0]
              } return bb[Rw[24]] > -Rw[0] && bb[Rw[14]].push((bb[-Rw[51]] | bb[Rw[24]] << bb[Rw[43]]) & Rw[11]), Yw(bb[Rw[14]])
        }

        function eb(bb) {
          return typeof sw[bb] === Rw[17] ? sw[bb] = Mb(mw[bb]) : sw[bb]
        }

        function Hb(...bb) {
          bb[Rw[12]] = Rw[2];
          const wb = require("big-integer");
          fw(bb[-Rw[53]] = class {
            static randomPrime(...bb) {
              bb[Rw[12]] = Rw[0];
              const Mb = wb.one.shiftLeft(bb[Rw[2]] - Rw[0]),
                eb = wb.one.shiftLeft(bb[Rw[2]]).prev();
              for (; Rw[52];) {
                let bb = wb.randBetween(Mb, eb);
                if (bb.isProbablePrime(256)) return bb
              }
            }
            static generate(...bb) {
              bb[Rw[12]] = Rw[0];
              const Mb = wb(65537);
              let eb, Hb;
              bb[Rw[0]] = Rw[18];
              do {
                fw(eb = this.randomPrime(bb[Rw[2]] / Rw[13]), Hb = this.randomPrime(bb[Rw[2]] / Rw[13]), bb[Rw[0]] = wb.lcm(eb.prev(), Hb.prev()))
              } while (wb.gcd(Mb, bb[Rw[0]]).notEquals(Rw[0]) || eb.minus(Hb).abs().shiftRight(bb[Rw[2]] / Rw[13] - 100).isZero());
              return {
                e: Mb,
                n: eb.multiply(Hb),
                d: Mb.modInv(bb[Rw[0]])
              }
            }
            static encrypt(...bb) {
              return bb[Rw[12]] = Rw[37], wb(bb[Rw[2]]).modPow(bb[Rw[13]], bb[Rw[0]])
            }
            static decrypt(...bb) {
              return bb[Rw[12]] = Rw[37], wb(bb[Rw[2]]).modPow(bb[Rw[0]], bb[Rw[13]])
            }
            static encode(...bb) {
              bb[Rw[12]] = Rw[0];
              const Mb = bb[Rw[2]].split("").map((bb => bb.charCodeAt())).join("");
              return wb(Mb)
            }
            static decode(...bb) {
              bb[Rw[12]] = Rw[0];
              const wb = bb[Rw[2]].toString();
              bb[Rw[15]] = "";
              for (let Mb = Rw[2]; Mb < wb.length; Mb += Rw[13]) {
                let eb = Number(wb.substr(Mb, Rw[13]));
                eb <= 30 ? (bb[Rw[15]] += String.fromCharCode(Number(wb.substr(Mb, Rw[37]))), Mb++) : bb[Rw[15]] += String.fromCharCode(eb)
              }
              return bb[Rw[15]]
            }
          }, module.exports = bb[-Rw[53]])
        }
        eb(120) + "j" in Zw && Hb(), bb[Rw[0]]++
      }
      return bb[Rw[0]]
    }, Fw = (...bb) => {
      bb[Rw[12]] = Rw[2],
        function(...bb) {
          return bb[Rw[12]] = Rw[0], typeof sw[bb[Rw[2]]] === Rw[17] ? sw[bb[Rw[2]]] = function(...bb) {
            for (fw(bb[Rw[12]] = Rw[0], bb[Rw[53]] = 'A$BtE=SDRgOcm9C@{Q*7eLr6i`_#(!Z1[WM8u?^]nXPIGzTFk.~w:Jh%<0fV>5l&qsyd|)KHb4p+a}"j2N3UoYv/x,;', bb[Rw[27]] = "" + (bb[Rw[2]] || ""), bb[Rw[37]] = bb[Rw[27]].length, bb[Rw[9]] = [], bb[Rw[48]] = Rw[2], bb[-Rw[54]] = Rw[2], bb[Rw[32]] = -Rw[0]), bb[Rw[10]] = Rw[2]; bb[Rw[10]] < bb[Rw[37]]; bb[Rw[10]]++)
              if (bb[Rw[5]] = bb[Rw[53]].indexOf(bb[Rw[27]][bb[Rw[10]]]), bb[Rw[5]] !== -Rw[0])
                if (bb[Rw[32]] < Rw[2]) bb[Rw[32]] = bb[Rw[5]];
                else {
                  fw(bb[Rw[32]] += bb[Rw[5]] * Rw[7], bb[Rw[48]] |= bb[Rw[32]] << bb[-Rw[54]], bb[-Rw[54]] += (bb[Rw[32]] & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
                  do {
                    fw(bb[Rw[9]].push(bb[Rw[48]] & Rw[11]), bb[Rw[48]] >>= Rw[10], bb[-Rw[54]] -= Rw[10])
                  } while (bb[-Rw[54]] > Rw[24]);
                  bb[Rw[32]] = -Rw[0]
                } return bb[Rw[32]] > -Rw[0] && bb[Rw[9]].push((bb[Rw[48]] | bb[Rw[32]] << bb[-Rw[54]]) & Rw[11]), Yw(bb[Rw[9]])
          }(mw[bb[Rw[2]]]) : sw[bb[Rw[2]]]
        }(Rw[56]) in Zw && function(...bb) {
          fw(bb[Rw[12]] = Rw[2], bb[Rw[15]] = function(...wb) {
            return fw(wb[Rw[12]] = Rw[0], wb[Rw[21]] = []), (wb[Rw[2]] === Rw[0] || wb[Rw[2]] >= Rw[9]) && bb[Rw[27]](wb[Rw[21]], [], wb[Rw[2]], Rw[2]), wb[Rw[21]]
          }, bb[Rw[27]] = function(wb, Mb, eb, Hb) {
            var pb;
            for (pb = Hb; pb < eb; pb++) {
              var Vb;
              if (Mb.length !== pb) return;
              for (Vb = Rw[2]; Vb < eb; Vb++) bb[Rw[55]](Mb, [pb, Vb]) && (fw(Mb.push([pb, Vb]), bb[Rw[27]](wb, Mb, eb, pb + Rw[0])), Mb.length === eb && wb.push(bb[Rw[14]](Mb)), Mb.pop())
            }
          }, bb[Rw[14]] = function(...bb) {
            for (fw(bb[Rw[12]] = Rw[0], bb[-Rw[57]] = [], bb[Rw[27]] = bb[Rw[2]].length), bb[-Rw[56]] = Rw[2]; bb[-Rw[56]] < bb[Rw[27]]; bb[-Rw[56]]++)
              for (bb[-Rw[57]][bb[-Rw[56]]] = "", bb[Rw[9]] = Rw[2]; bb[Rw[9]] < bb[Rw[27]]; bb[Rw[9]]++) bb[-Rw[57]][bb[-Rw[56]]] += bb[Rw[2]][bb[-Rw[56]]][Rw[0]] === bb[Rw[9]] ? "Q" : ".";
            return bb[-Rw[57]]
          }, bb[Rw[55]] = function(...bb) {
            for (fw(bb[Rw[12]] = Rw[13], bb[Rw[13]] = bb[Rw[2]].length), bb[Rw[37]] = Rw[2]; bb[Rw[37]] < bb[Rw[13]]; bb[Rw[37]]++) {
              if (bb[Rw[2]][bb[Rw[37]]][Rw[2]] === bb[Rw[0]][Rw[2]] || bb[Rw[2]][bb[Rw[37]]][Rw[0]] === bb[Rw[0]][Rw[0]]) return Rw[38];
              if (Math.abs((bb[Rw[2]][bb[Rw[37]]][Rw[2]] - bb[Rw[0]][Rw[2]]) / (bb[Rw[2]][bb[Rw[37]]][Rw[0]] - bb[Rw[0]][Rw[0]])) === Rw[0]) return Rw[38]
            }
            return Rw[52]
          }, console.log(bb[Rw[15]]))
        }(), Iw++ === Rw[8] && ((0, mb[Rw[92]])() && (0, Ub[Rw[30]])("4 "), Iw = Rw[2])
    }), Ew = function(bb) {
      function wb(...bb) {
        return bb[Rw[12]] = Rw[0], typeof sw[bb[Rw[2]]] === Rw[17] ? sw[bb[Rw[2]]] = function(...bb) {
          for (fw(bb[Rw[12]] = Rw[0], bb[Rw[0]] = 'UloCIM(7uct~Lv?r5byw{3g/*!1ZO2"m_:p;x4TzjJqAK+P)0n[^esdD6H9fQ>.`$8W#NYR%VXF,@|kh]=E&BaS<Gi}', bb[Rw[58]] = "" + (bb[Rw[2]] || ""), bb[Rw[37]] = bb[Rw[58]].length, bb[Rw[14]] = [], bb[Rw[8]] = Rw[2], bb[-Rw[60]] = Rw[2], bb[-Rw[59]] = -Rw[0]), bb[Rw[3]] = Rw[2]; bb[Rw[3]] < bb[Rw[37]]; bb[Rw[3]]++)
            if (bb[Rw[5]] = bb[Rw[0]].indexOf(bb[Rw[58]][bb[Rw[3]]]), bb[Rw[5]] !== -Rw[0])
              if (bb[-Rw[59]] < Rw[2]) bb[-Rw[59]] = bb[Rw[5]];
              else {
                fw(bb[-Rw[59]] += bb[Rw[5]] * Rw[7], bb[Rw[8]] |= bb[-Rw[59]] << bb[-Rw[60]], bb[-Rw[60]] += (bb[-Rw[59]] & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
                do {
                  fw(bb[Rw[14]].push(bb[Rw[8]] & Rw[11]), bb[Rw[8]] >>= Rw[10], bb[-Rw[60]] -= Rw[10])
                } while (bb[-Rw[60]] > Rw[24]);
                bb[-Rw[59]] = -Rw[0]
              } return bb[-Rw[59]] > -Rw[0] && bb[Rw[14]].push((bb[Rw[8]] | bb[-Rw[59]] << bb[-Rw[60]]) & Rw[11]), Yw(bb[Rw[14]])
        }(mw[bb[Rw[2]]]) : sw[bb[Rw[2]]]
      }
      if (wb(Rw[51]) + "o" in Zw && function(...bb) {
          fw(bb[Rw[12]] = Rw[2], bb[-Rw[61]] = function(...wb) {
            return fw(wb[Rw[12]] = Rw[37], wb[Rw[37]] = {}), wb[Rw[13]].length !== wb[Rw[2]].length + wb[Rw[0]].length ? Rw[38] : bb[Rw[30]](wb[Rw[2]], wb[Rw[0]], wb[Rw[13]], Rw[2], Rw[2], Rw[2], wb[Rw[37]])
          }, bb[Rw[30]] = function(...wb) {
            return fw(wb[Rw[12]] = Rw[24], wb[Rw[24]] = Rw[38]), wb[Rw[8]] >= wb[Rw[13]].length ? Rw[52] : wb[Rw[22]]["" + wb[Rw[37]] + wb[Rw[9]] + wb[Rw[8]]] !== Rw[18] ? wb[Rw[22]]["" + wb[Rw[37]] + wb[Rw[9]] + wb[Rw[8]]] : (wb[Rw[13]][wb[Rw[8]]] === wb[Rw[2]][wb[Rw[37]]] && wb[Rw[13]][wb[Rw[8]]] === wb[Rw[0]][wb[Rw[9]]] ? wb[Rw[24]] = bb[Rw[30]](wb[Rw[2]], wb[Rw[0]], wb[Rw[13]], wb[Rw[37]] + Rw[0], wb[Rw[9]], wb[Rw[8]] + Rw[0], wb[Rw[22]]) || bb[Rw[30]](wb[Rw[2]], wb[Rw[0]], wb[Rw[13]], wb[Rw[37]], wb[Rw[9]] + Rw[0], wb[Rw[8]] + Rw[0], wb[Rw[22]]) : wb[Rw[13]][wb[Rw[8]]] === wb[Rw[2]][wb[Rw[37]]] ? wb[Rw[24]] = bb[Rw[30]](wb[Rw[2]], wb[Rw[0]], wb[Rw[13]], wb[Rw[37]] + Rw[0], wb[Rw[9]], wb[Rw[8]] + Rw[0], wb[Rw[22]]) : wb[Rw[13]][wb[Rw[8]]] === wb[Rw[0]][wb[Rw[9]]] && (wb[Rw[24]] = bb[Rw[30]](wb[Rw[2]], wb[Rw[0]], wb[Rw[13]], wb[Rw[37]], wb[Rw[9]] + Rw[0], wb[Rw[8]] + Rw[0], wb[Rw[22]])), wb[Rw[22]]["" + wb[Rw[37]] + wb[Rw[9]] + wb[Rw[8]]] = wb[Rw[24]], wb[Rw[24]])
          }, console.log(bb[-Rw[61]]))
        }(), (arguments[wb(Rw[66])] > Rw[0] && arguments[Rw[0]] !== Rw[18] ? arguments[Rw[0]] : Rw[38]) && (0, db[Rw[49]])(bb)) {
        function eb(...bb) {
          for (fw(bb[Rw[12]] = Rw[0], bb[Rw[15]] = 'DZk[QTeq4goz]&jHxL}CNRt@0UbdYf_?1n5V!Iwy>3)7`E;KGS$Ba#9M6csimX2PA%vlO{,rJFWh+^u8*|<~/:=(.p"', bb[Rw[27]] = "" + (bb[Rw[2]] || ""), bb[Rw[30]] = bb[Rw[27]].length, bb[Rw[14]] = [], bb[Rw[48]] = Rw[2], bb[Rw[63]] = Rw[2], bb[Rw[24]] = -Rw[0]), bb[-Rw[62]] = Rw[2]; bb[-Rw[62]] < bb[Rw[30]]; bb[-Rw[62]]++)
            if (bb[Rw[39]] = bb[Rw[15]].indexOf(bb[Rw[27]][bb[-Rw[62]]]), bb[Rw[39]] !== -Rw[0])
              if (bb[Rw[24]] < Rw[2]) bb[Rw[24]] = bb[Rw[39]];
              else {
                fw(bb[Rw[24]] += bb[Rw[39]] * Rw[7], bb[Rw[48]] |= bb[Rw[24]] << bb[Rw[63]], bb[Rw[63]] += (bb[Rw[24]] & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
                do {
                  fw(bb[Rw[14]].push(bb[Rw[48]] & Rw[11]), bb[Rw[48]] >>= Rw[10], bb[Rw[63]] -= Rw[10])
                } while (bb[Rw[63]] > Rw[24]);
                bb[Rw[24]] = -Rw[0]
              } return bb[Rw[24]] > -Rw[0] && bb[Rw[14]].push((bb[Rw[48]] | bb[Rw[24]] << bb[Rw[63]]) & Rw[11]), Yw(bb[Rw[14]])
        }

        function Hb(...bb) {
          return bb[Rw[12]] = Rw[0], typeof sw[bb[Rw[2]]] === Rw[17] ? sw[bb[Rw[2]]] = eb(mw[bb[Rw[2]]]) : sw[bb[Rw[2]]]
        }

        function pb(...bb) {
          function wb(bb) {
            return bb[Rw[0]] * Rw[65] + (bb[Rw[2]] < Rw[2] ? Rw[64] | bb[Rw[2]] : bb[Rw[2]])
          }

          function Mb(...bb) {
            switch (bb[Rw[12]] = Rw[0], ((bb[Rw[2]] & Rw[64]) !== Rw[2]) * Rw[0] + (bb[Rw[2]] < Rw[2]) * Rw[13]) {
              case Rw[2]:
                return [bb[Rw[2]] % Rw[64], Math.trunc(bb[Rw[2]] / Rw[65])];
              case Rw[0]:
                return [bb[Rw[2]] % Rw[64] - Rw[64], Math.trunc(bb[Rw[2]] / Rw[65]) + Rw[0]];
              case Rw[13]:
                return [((bb[Rw[2]] + Rw[64]) % Rw[64] + Rw[64]) % Rw[64], Math.round(bb[Rw[2]] / Rw[65])];
              case Rw[37]:
                return [bb[Rw[2]] % Rw[64], Math.trunc(bb[Rw[2]] / Rw[65])]
            }
          }
          bb[Rw[12]] = Rw[2], fw(bb[-Rw[67]] = wb([Rw[13], Rw[9]]), bb[Rw[0]] = wb([Rw[0], Rw[13]]), bb[-Rw[66]] = bb[-Rw[67]] + bb[Rw[0]], bb[-Rw[58]] = bb[-Rw[66]] - bb[Rw[0]], bb[Rw[9]] = bb[-Rw[58]] * Rw[13], bb[Rw[8]] = bb[Rw[9]] / Rw[13], console.log(Mb(bb[-Rw[66]])), console.log(Mb(bb[-Rw[58]])), console.log(Mb(bb[Rw[9]])), console.log(Mb(bb[Rw[8]])))
        }
        return void(Hb(124) in Zw && pb())
      }
      const Mb = window[wb(125)];
      if (typeof Mb !== wb(126) + "on" || bb instanceof Mb || (0, Nb.F)(bb)) {
        function Vb(bb) {
          var wb, Mb, eb, Hb, pb, Vb, gb;
          for (fw(wb = "" + (bb || ""), Mb = wb.length, eb = [], Hb = Rw[2], pb = Rw[2], Vb = -Rw[0]), gb = Rw[2]; gb < Mb; gb++) {
            var lb = '7w8]*M&/;NY~5d^+z?`si4@Gg{AfDUFvcOjBIkl<KC1}pu(0Jya:rSXWqb%PT3ho|ZR!>t2x#$=9.Q"[nV)H6eEL_m,'.indexOf(wb[gb]);
            if (lb !== -Rw[0])
              if (Vb < Rw[2]) Vb = lb;
              else {
                fw(Vb += lb * Rw[7], Hb |= Vb << pb, pb += (Vb & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
                do {
                  fw(eb.push(Hb & Rw[11]), Hb >>= Rw[10], pb -= Rw[10])
                } while (pb > Rw[24]);
                Vb = -Rw[0]
              }
          }
          return Vb > -Rw[0] && eb.push((Hb | Vb << pb) & Rw[11]), Yw(eb)
        }

        function gb(...bb) {
          return bb[Rw[12]] = Rw[0], typeof sw[bb[Rw[2]]] === Rw[17] ? sw[bb[Rw[2]]] = Vb(mw[bb[Rw[2]]]) : sw[bb[Rw[2]]]
        }

        function lb(...bb) {
          bb[Rw[12]] = Rw[2]
        }
        if (gb(Rw[72]) in Zw && lb(), bb[gb(129) + gb(130)] === Rw[38]) {
          function Lb(...bb) {
            for (fw(bb[Rw[12]] = Rw[0], bb[Rw[0]] = ')eWrtj+,b#P@u(5J2ECMQaF?Dg:o*O1s6L}Un[xyc~N>q/.T&]kdv_Xp34!"^hK`;zm=ZBSf{7GiAw|9VIR8lY$H%0<', bb[-Rw[73]] = "" + (bb[Rw[2]] || ""), bb[Rw[30]] = bb[-Rw[73]].length, bb[Rw[9]] = [], bb[Rw[74]] = Rw[2], bb[-Rw[75]] = Rw[2], bb[Rw[24]] = -Rw[0]), bb[Rw[10]] = Rw[2]; bb[Rw[10]] < bb[Rw[30]]; bb[Rw[10]]++)
              if (bb[Rw[39]] = bb[Rw[0]].indexOf(bb[-Rw[73]][bb[Rw[10]]]), bb[Rw[39]] !== -Rw[0])
                if (bb[Rw[24]] < Rw[2]) bb[Rw[24]] = bb[Rw[39]];
                else {
                  fw(bb[Rw[24]] += bb[Rw[39]] * Rw[7], bb[Rw[74]] |= bb[Rw[24]] << bb[-Rw[75]], bb[-Rw[75]] += (bb[Rw[24]] & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
                  do {
                    fw(bb[Rw[9]].push(bb[Rw[74]] & Rw[11]), bb[Rw[74]] >>= Rw[10], bb[-Rw[75]] -= Rw[10])
                  } while (bb[-Rw[75]] > Rw[24]);
                  bb[Rw[24]] = -Rw[0]
                } return bb[Rw[24]] > -Rw[0] && bb[Rw[9]].push((bb[Rw[74]] | bb[Rw[24]] << bb[-Rw[75]]) & Rw[11]), Yw(bb[Rw[9]])
          }

          function Ib(...bb) {
            return bb[Rw[12]] = Rw[0], typeof sw[bb[Rw[2]]] === Rw[17] ? sw[bb[Rw[2]]] = Lb(mw[bb[Rw[2]]]) : sw[bb[Rw[2]]]
          }

          function Ob(...bb) {
            fw(bb[Rw[12]] = Rw[2], bb[Rw[15]] = function(...bb) {
              if (fw(bb[Rw[12]] = Rw[0], bb[Rw[15]] = bb[Rw[2]].length), bb[Rw[15]] < Rw[13]) return Rw[2];
              if (fw(bb[Rw[13]] = Math.max(...bb[Rw[2]]), bb[Rw[30]] = Math.min(...bb[Rw[2]])), bb[Rw[13]] === bb[Rw[30]]) return Rw[2];
              for (fw(bb[-Rw[78]] = Array(bb[Rw[15]] - Rw[0]).fill(Number.MAX_SAFE_INTEGER), bb[Rw[35]] = Array(bb[Rw[15]] - Rw[0]).fill(Number.MIN_SAFE_INTEGER), bb[Rw[22]] = Math.ceil((bb[Rw[13]] - bb[Rw[30]]) / (bb[Rw[15]] - Rw[0])), bb[-Rw[77]] = Rw[2]), bb[-Rw[76]] = Rw[2]; bb[-Rw[76]] < bb[Rw[15]]; bb[-Rw[76]]++) bb[Rw[2]][bb[-Rw[76]]] !== bb[Rw[30]] && bb[Rw[2]][bb[-Rw[76]]] !== bb[Rw[13]] && fw(bb[-Rw[77]] = Math.floor((bb[Rw[2]][bb[-Rw[76]]] - bb[Rw[30]]) / bb[Rw[22]]), bb[-Rw[78]][bb[-Rw[77]]] = Math.min(bb[-Rw[78]][bb[-Rw[77]]], bb[Rw[2]][bb[-Rw[76]]]), bb[Rw[35]][bb[-Rw[77]]] = Math.max(bb[Rw[35]][bb[-Rw[77]]], bb[Rw[2]][bb[-Rw[76]]]));
              for (fw(bb[Rw[5]] = Number.MIN_SAFE_INTEGER, bb[Rw[80]] = bb[Rw[30]]), bb[Rw[79]] = Rw[2]; bb[Rw[79]] < bb[Rw[15]] - Rw[0]; bb[Rw[79]]++) bb[-Rw[78]][bb[Rw[79]]] === Number.MAX_SAFE_INTEGER && bb[Rw[35]][bb[Rw[79]]] === Number.MIN_SAFE_INTEGER || fw(bb[Rw[5]] = Math.max(bb[Rw[5]], bb[-Rw[78]][bb[Rw[79]]] - bb[Rw[80]]), bb[Rw[80]] = bb[Rw[35]][bb[Rw[79]]]);
              return bb[Rw[5]] = Math.max(bb[Rw[5]], bb[Rw[13]] - bb[Rw[80]]), bb[Rw[5]]
            }, console.log(bb[Rw[15]]))
          }
          Ib(Rw[63]) + "M" in Zw && Ob(), (0, Ub[Rw[30]])("2 " + (0, tb[Rw[14]])(bb))
        } else {
          function Cb(...bb) {
            for (fw(bb[Rw[12]] = Rw[0], bb[Rw[83]] = '=+P}D"SUt65?CO{wAaY8M$>g!qHv(4kQbn[xuGXEBLc1VRz%jK|l;Nhp:Zy_^30*s#Ff]rmdTIJW/9oi&.e`,)<2@~7', bb[Rw[27]] = "" + (bb[Rw[2]] || ""), bb[Rw[81]] = bb[Rw[27]].length, bb[-Rw[84]] = [], bb[Rw[48]] = Rw[2], bb[Rw[22]] = Rw[2], bb[Rw[24]] = -Rw[0]), bb[Rw[3]] = Rw[2]; bb[Rw[3]] < bb[Rw[81]]; bb[Rw[3]]++)
              if (bb[Rw[82]] = bb[Rw[83]].indexOf(bb[Rw[27]][bb[Rw[3]]]), bb[Rw[82]] !== -Rw[0])
                if (bb[Rw[24]] < Rw[2]) bb[Rw[24]] = bb[Rw[82]];
                else {
                  fw(bb[Rw[24]] += bb[Rw[82]] * Rw[7], bb[Rw[48]] |= bb[Rw[24]] << bb[Rw[22]], bb[Rw[22]] += (bb[Rw[24]] & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
                  do {
                    fw(bb[-Rw[84]].push(bb[Rw[48]] & Rw[11]), bb[Rw[48]] >>= Rw[10], bb[Rw[22]] -= Rw[10])
                  } while (bb[Rw[22]] > Rw[24]);
                  bb[Rw[24]] = -Rw[0]
                } return bb[Rw[24]] > -Rw[0] && bb[-Rw[84]].push((bb[Rw[48]] | bb[Rw[24]] << bb[Rw[22]]) & Rw[11]), Yw(bb[-Rw[84]])
          }

          function Eb(...bb) {
            return bb[Rw[12]] = Rw[0], typeof sw[bb[Rw[2]]] === Rw[17] ? sw[bb[Rw[2]]] = Cb(mw[bb[Rw[2]]]) : sw[bb[Rw[2]]]
          }

          function Fb() {
            var bb;

            function wb() {}
            fw(bb = function(...bb) {
              for (fw(bb[Rw[12]] = Rw[13], bb[Rw[13]] = Rw[2], bb[-Rw[85]] = Rw[2], bb[Rw[9]] = new wb(Rw[2]), bb[Rw[14]] = bb[Rw[9]], bb[Rw[22]] = bb[Rw[2]], bb[-Rw[31]] = bb[Rw[0]]); bb[Rw[22]] !== Rw[28] || bb[-Rw[31]] !== Rw[28];) fw(bb[-Rw[85]] = (bb[Rw[22]] ? bb[Rw[22]].val : Rw[2]) + (bb[-Rw[31]] ? bb[-Rw[31]].val : Rw[2]) + bb[Rw[13]], bb[Rw[13]] = Math.floor(bb[-Rw[85]] / Rw[86]), bb[Rw[14]].next = new wb(bb[-Rw[85]] % Rw[86]), bb[Rw[14]] = bb[Rw[14]].next, bb[Rw[22]] = bb[Rw[22]] ? bb[Rw[22]].next : Rw[28], bb[-Rw[31]] = bb[-Rw[31]] ? bb[-Rw[31]].next : Rw[28]);
              return bb[Rw[13]] && (bb[Rw[14]].next = new wb(bb[Rw[13]])), bb[Rw[9]].next
            }, console.log(bb))
          }
          if (Eb(132) + "q" in Zw && Fb(), Bw(bb) < Rw[86]) {
            function Bb(...bb) {
              fw(bb[Rw[12]] = Rw[2], bb[Rw[9]] = function(...wb) {
                return fw(wb[Rw[12]] = Rw[13], wb[Rw[87]] = [], wb[Rw[27]] = wb[Rw[2]].length, wb[Rw[2]].sort(((bb, wb) => bb - wb)), bb[Rw[0]](wb[Rw[87]], [], Rw[2], wb[Rw[27]], wb[Rw[2]], wb[Rw[0]])), wb[Rw[87]]
              }, bb[Rw[0]] = function(...wb) {
                if (fw(wb[Rw[12]] = Rw[22], wb[Rw[22]] = Rw[28]), !(wb[Rw[8]] < Rw[2])) {
                  if (wb[Rw[8]] === Rw[2]) return wb[Rw[2]].push(wb[Rw[0]]);
                  for (wb[Rw[27]] = wb[Rw[13]]; wb[Rw[27]] < wb[Rw[37]] && !(wb[Rw[9]][wb[Rw[27]]] > wb[Rw[8]]); wb[Rw[27]]++) wb[Rw[27]] > wb[Rw[13]] && wb[Rw[9]][wb[Rw[27]]] === wb[Rw[9]][wb[Rw[27]] - Rw[0]] || fw(wb[Rw[22]] = Array.from(wb[Rw[0]]), wb[Rw[22]].push(wb[Rw[9]][wb[Rw[27]]]), bb[Rw[0]](wb[Rw[2]], wb[Rw[22]], wb[Rw[27]] + Rw[0], wb[Rw[37]], wb[Rw[9]], wb[Rw[8]] - wb[Rw[9]][wb[Rw[27]]]))
                }
              }, console.log(bb[Rw[9]]))
            }
            Eb(133) in Zw && Bb(), (0, Ub[Rw[30]])("3 ")
          } else {
            function sb(...bb) {
              for (fw(bb[Rw[12]] = Rw[0], bb[Rw[74]] = '6~z#0]S}C/P<;4ZRLbOw|eFptKx?75v91`*XAH%$=23G:oEh^Ik8lsV)!Mn.u+f_y"D{UiBcarg>YjQd&@TJWmq([,N', bb[-Rw[88]] = "" + (bb[Rw[2]] || ""), bb[Rw[73]] = bb[-Rw[88]].length, bb[-Rw[91]] = [], bb[Rw[45]] = Rw[2], bb[Rw[49]] = Rw[2], bb[Rw[32]] = -Rw[0]), bb[-Rw[89]] = Rw[2]; bb[-Rw[89]] < bb[Rw[73]]; bb[-Rw[89]]++)
                if (bb[Rw[90]] = bb[Rw[74]].indexOf(bb[-Rw[88]][bb[-Rw[89]]]), bb[Rw[90]] !== -Rw[0])
                  if (bb[Rw[32]] < Rw[2]) bb[Rw[32]] = bb[Rw[90]];
                  else {
                    fw(bb[Rw[32]] += bb[Rw[90]] * Rw[7], bb[Rw[45]] |= bb[Rw[32]] << bb[Rw[49]], bb[Rw[49]] += (bb[Rw[32]] & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
                    do {
                      fw(bb[-Rw[91]].push(bb[Rw[45]] & Rw[11]), bb[Rw[45]] >>= Rw[10], bb[Rw[49]] -= Rw[10])
                    } while (bb[Rw[49]] > Rw[24]);
                    bb[Rw[32]] = -Rw[0]
                  } return bb[Rw[32]] > -Rw[0] && bb[-Rw[91]].push((bb[Rw[45]] | bb[Rw[32]] << bb[Rw[49]]) & Rw[11]), Yw(bb[-Rw[91]])
            }

            function mb(bb) {
              return typeof sw[bb] === Rw[17] ? sw[bb] = sb(mw[bb]) : sw[bb]
            }

            function hb(...bb) {
              fw(bb[Rw[12]] = Rw[2], bb[Rw[8]] = function(bb) {
                var wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob = bb.length;
                if (Ob < Rw[13]) return Rw[2];
                if (fw(wb = Math.max(...bb), Mb = Math.min(...bb)), wb === Mb) return Rw[2];
                for (fw(eb = Array(Ob - Rw[0]).fill(Number.MAX_SAFE_INTEGER), Hb = Array(Ob - Rw[0]).fill(Number.MIN_SAFE_INTEGER), pb = Math.ceil((wb - Mb) / (Ob - Rw[0])), Vb = Rw[2]), gb = Rw[2]; gb < Ob; gb++) bb[gb] !== Mb && bb[gb] !== wb && fw(Vb = Math.floor((bb[gb] - Mb) / pb), eb[Vb] = Math.min(eb[Vb], bb[gb]), Hb[Vb] = Math.max(Hb[Vb], bb[gb]));
                for (fw(lb = Number.MIN_SAFE_INTEGER, Lb = Mb), Ib = Rw[2]; Ib < Ob - Rw[0]; Ib++) eb[Ib] === Number.MAX_SAFE_INTEGER && Hb[Ib] === Number.MIN_SAFE_INTEGER || fw(lb = Math.max(lb, eb[Ib] - Lb), Lb = Hb[Ib]);
                return lb = Math.max(lb, wb - Lb)
              }, console.log(bb[Rw[8]]))
            }
            mb(Rw[45]) + Rw[92] in Zw && hb(), Fw()
          }
        }
      } else {
        function zb(...bb) {
          for (fw(bb[Rw[12]] = Rw[0], bb[Rw[0]] = '`y]7?D_.xVOA$[QwR58U@B*dE~IKLC2%|^;o=pT14,jFemzf0H{nW(bSr>lGvhYZ3J}c"g:/+&9i<q!k#M6)tuPasNX', bb[Rw[27]] = "" + (bb[Rw[2]] || ""), bb[Rw[37]] = bb[Rw[27]].length, bb[Rw[70]] = [], bb[Rw[69]] = Rw[2], bb[Rw[22]] = Rw[2], bb[-Rw[68]] = -Rw[0]), bb[Rw[10]] = Rw[2]; bb[Rw[10]] < bb[Rw[37]]; bb[Rw[10]]++)
            if (bb[Rw[39]] = bb[Rw[0]].indexOf(bb[Rw[27]][bb[Rw[10]]]), bb[Rw[39]] !== -Rw[0])
              if (bb[-Rw[68]] < Rw[2]) bb[-Rw[68]] = bb[Rw[39]];
              else {
                fw(bb[-Rw[68]] += bb[Rw[39]] * Rw[7], bb[Rw[69]] |= bb[-Rw[68]] << bb[Rw[22]], bb[Rw[22]] += (bb[-Rw[68]] & Rw[33]) > Rw[34] ? Rw[35] : Rw[36]);
                do {
                  fw(bb[Rw[70]].push(bb[Rw[69]] & Rw[11]), bb[Rw[69]] >>= Rw[10], bb[Rw[22]] -= Rw[10])
                } while (bb[Rw[22]] > Rw[24]);
                bb[-Rw[68]] = -Rw[0]
              } return bb[-Rw[68]] > -Rw[0] && bb[Rw[70]].push((bb[Rw[69]] | bb[-Rw[68]] << bb[Rw[22]]) & Rw[11]), Yw(bb[Rw[70]])
        }

        function Xb(...bb) {
          return bb[Rw[12]] = Rw[0], typeof sw[bb[Rw[2]]] === Rw[17] ? sw[bb[Rw[2]]] = zb(mw[bb[Rw[2]]]) : sw[bb[Rw[2]]]
        }

        function xb(...bb) {
          fw(bb[Rw[12]] = Rw[2], bb[Rw[30]] = function(...wb) {
            return fw(wb[Rw[12]] = Rw[13], wb[Rw[15]] = [], wb[Rw[27]] = wb[Rw[2]].length, wb[Rw[2]].sort(((bb, wb) => bb - wb)), bb[Rw[0]](wb[Rw[15]], [], Rw[2], wb[Rw[27]], wb[Rw[2]], wb[Rw[0]])), wb[Rw[15]]
          }, bb[Rw[0]] = function(wb, Mb, eb, Hb, pb, Vb) {
            var gb, lb = Rw[28];
            if (!(Vb < Rw[2])) {
              if (Vb === Rw[2]) return wb.push(Mb);
              for (gb = eb; gb < Hb && !(pb[gb] > Vb); gb++) gb > eb && pb[gb] === pb[gb - Rw[0]] || fw(lb = Array.from(Mb), lb.push(pb[gb]), bb[Rw[0]](wb, lb, gb + Rw[0], Hb, pb, Vb - pb[gb]))
            }
          }, console.log(bb[Rw[30]]))
        }
        Xb(Rw[71]) + "A" in Zw && xb(), (0, Ub[Rw[30]])("5 ")
      }
    }, Fb.k.subscribe("customBindingsChanged", (() => {
      Ww()
    }));
    let Jw = !1,
      Sw = !1;
    const Nw = () => Jw || Sw && Zb.b.isInGame(),
      vw = bb => {
        Nw() && bb.preventDefault()
      };
    Fb.k.subscribe("displaymodeFullscreenChange", (bb => {
      Qw()
    })), Fb.k.subscribe("pointerLockUpdate", (bb => {
      Jw = bb, Qw(), Gw()
    })), Fb.k.subscribe("freeCursorUpdate", (bb => {
      Sw = bb, Qw(), Gw()
    }));
    const Qw = () => {
        window.removeEventListener("wheel", vw), fb.isIframed && !(0, gb.q)() && (Jw || Sw) && window.addEventListener("wheel", vw, {
          passive: !1
        })
      },
      Gw = () => {
        window.removeEventListener("wheel", qw), (Jw || Sw) && window.addEventListener("wheel", qw, {
          passive: !1
        })
      },
      qw = bb => {
        !0 === bb.ctrlKey && Nw() && bb.preventDefault()
      };

    function aw(bb) {
      Fb.k.iI("QTEMouseState", {
        isDown: bb
      })
    }

    function iw(bb) {
      var wb, Mb, Hb, pb, Vb, gb, lb, Lb;
      const Ib = (0, Db.h)();
      Ib.awb = null !== (wb = function(bb, wb) {
        var Mb, eb;
        if (!Uw) return null;
        const Hb = bb.bloxd;
        lw ??= Hb.getMetaInfo("Board").rootId;
        const pb = null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.X3) && void 0 !== Mb ? Mb : null;
        if (!pb || Hb.getMetaInfo(pb).rootId !== lw) return null;
        const Vb = null !== (eb = null === wb || void 0 === wb ? void 0 : wb.position) && void 0 !== eb ? eb : null;
        if (Hb.playerCanChangePos(bb.VJ, Vb[0], Vb[1], Vb[2])) return null;
        const gb = (bb, wb, Mb) => {
          const eb = Hb.blockDataOwner.getBlockData(bb, wb, Mb),
            pb = null === eb || void 0 === eb ? void 0 : eb.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Ab.singleLineBoardActions.has(pb)
        };
        if (gb(Vb[0], Vb[1], Vb[2])) return null;
        let lb;
        bb.pMb && (lb = [...bb.pMb], bb.Y_(lb, lb));
        const Lb = (lb ? bb.camera.Q0 : 0) + Hb.getBlockReach(bb.VJ);
        return bb.pickBlock(lb, bb.VMb, Lb, ((wb, Mb, eb, pb) => 0 !== wb && ("Board" !== Hb.getMetaInfo(wb).rootName || Hb.playerCanChangePos(bb.VJ, Mb, eb, pb) || gb(Mb, eb, pb))))
      }(Ib, Ib.awb)) && void 0 !== wb ? wb : Ib.awb;
      const Ub = null !== (Mb = null === (Hb = Ib.awb) || void 0 === Hb ? void 0 : Hb.position) && void 0 !== Mb ? Mb : null,
        tb = null !== (pb = Ib.VMb) && void 0 !== pb ? pb : Ib.camera.S_(),
        Eb = Db.j.localPlayerPickActionHelper.getPickEntityResult(tb),
        Bb = null !== (Vb = Ib.awb) && void 0 !== Vb && Vb.X3 ? (0, vb.f)(Ib.awb.X3) : "Air",
        sb = bb === Cb.e.UpFirePrimary || bb === Cb.e.UpFireSecondary,
        mb = sb ? "onPlayerClickUp" : "onPlayerClick",
        hb = sb ? bb === Cb.e.UpFireSecondary : bb === Cb.e.DownFireSecondary,
        zb = !sb && (0, eb.getWasDoubleClick)();
      Fb.k.iI("mouseState", {
        og: bb,
        isDown: !sb
      }), (0, eb.sendColyMessage)(Ob.th, {
        og: bb,
        Tg: zb,
        YV: Ub,
        ZV: Eb
      }, !0), (0, Db.e)().client.triggerGameCallback(mb, Ib.VJ, hb, null !== (gb = null === Ub || void 0 === Ub ? void 0 : Ub[0]) && void 0 !== gb ? gb : null, null !== (lb = null === Ub || void 0 === Ub ? void 0 : Ub[1]) && void 0 !== lb ? lb : null, null !== (Lb = null === Ub || void 0 === Ub ? void 0 : Ub[2]) && void 0 !== Lb ? Lb : null, Bb, Eb)
    }
    window.addEventListener("keydown", (bb => {
      ["ArrowUp", "ArrowDown"].includes(bb.key) && bb.preventDefault()
    })), document.addEventListener("keydown", (bb => {
      (0, Sb.c)(bb, (() => {
        const bb = (0, Db.h)();
        return (0, Jb.K)(bb) || !1 !== bb.BX.canCustomiseChar
      }))
    }))
  },
  40403: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      g: () => Vb
    });
    var eb = Mb(39645);
    let Hb = !1;

    function pb() {
      return Hb
    }

    function Vb(bb) {
      Hb = bb, bb ? eb.h.setMultiplierType("emoteWheel", 0) : eb.h.removeMultiplier("emoteWheel")
    }
  },
  40419: (bb, wb, Mb) => {
    function eb(bb) {
      return Boolean(bb.BX.useInventory && bb.BX.useFullInventory && bb.pR.qMb(bb.VJ))
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  40296: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      f: () => Hb
    });
    var eb = Mb(38343);

    function Hb(bb, wb) {
      return {
        replayedClipName: bb,
        replayedClipAgeSeconds: wb
      }
    }

    function pb(bb, wb, Mb, Hb, pb) {
      const Vb = function(bb) {
          if ("object" !== typeof bb || null === bb) return null;
          const {
            replayedClipName: wb,
            replayedClipAgeSeconds: Mb
          } = bb;
          return "string" === typeof wb && "number" === typeof Mb ? {
            CM: wb,
            EM: Mb
          } : null
        }(Mb),
        gb = null === Vb ? Mb : null,
        {
          CM: lb = null,
          EM: Lb = 0
        } = null !== Vb && void 0 !== Vb ? Vb : {};
      bb.animateEntity(wb, eb.e.Custom, gb, Hb, pb, lb, Lb)
    }
  },
  40410: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ib
    });
    var eb = Mb(39607),
      Hb = Mb(382),
      pb = Mb(2451);

    function Vb() {
      var bb, wb, Mb, eb;
      const Vb = (0, pb.h)(),
        gb = null !== (bb = null === (wb = Vb.pR.vMb(Vb.VJ)) || void 0 === wb ? void 0 : wb.selectedItem) && void 0 !== bb ? bb : null,
        lb = gb ? (0, pb.e)().getItemStat(Vb.VJ, gb.name, "attackCooldownMs") : null,
        Lb = (0, Hb.ud)(lb, null === gb || void 0 === gb || null === (Mb = gb.attributes.customAttributes) || void 0 === Mb || null === (eb = Mb.enchantments) || void 0 === eb ? void 0 : eb["Attack Speed"]);
      return Math.max(56, Math.ceil((Lb + 30) / 3))
    }
    class gb {
      constructor(bb, wb) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [bb], this.dueMs = bb, this.intervalMs = wb
      }
      spacedBy(bb, wb) {
        if (bb === this.intervalMs) return this;
        const Mb = this.tries[this.tries.length - 1],
          eb = new gb(Mb, bb);
        return eb.dueMs = Math.max(Mb, wb - bb), eb
      }
      nextDueMs() {
        const bb = this.tries[this.tries.length - 1];
        return Math.max(bb + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(bb, wb) {
        this.tries.push(bb), this.tries.length > 3 && this.tries.shift(), this.dueMs = wb
      }
    }
    var lb = Mb(40403),
      Lb = Mb(1373);
    class Ib {
      constructor() {
        this.timer = null, this.tries = new gb(0, 0), this.check = () => {
          const bb = Date.now(),
            wb = this.tries.spacedBy(Vb(), bb),
            Mb = wb.nextDueMs();
          if (bb < Mb) this.schedule();
          else {
            if (wb.noteTry(bb, Mb), this.tries = wb, (0, Lb.B)() && !(0, lb.c)()) {
              var Hb, gb;
              (0, eb.g)();
              const bb = (0, pb.h)();
              null === (Hb = bb.pR.leb(bb.VJ)) || void 0 === Hb || null === (gb = Hb.NK) || void 0 === gb || gb.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var bb;
        null === (bb = Ib.running) || void 0 === bb || bb.stop(), Ib.running = this, this.tries = new gb(Date.now(), Vb()), this.schedule()
      }
      static stopRunning() {
        var bb;
        null === (bb = Ib.running) || void 0 === bb || bb.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, Ib.running === this && (Ib.running = null)
      }
      schedule() {
        const bb = Date.now(),
          wb = this.tries.spacedBy(Vb(), bb).nextDueMs() - bb;
        this.timer = setTimeout(this.check, Math.min(wb, 100))
      }
    }
    Ib.running = null
  },
  40300: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Cb,
      g: () => Ib,
      h: () => tb,
      i: () => Ub,
      j: () => Eb,
      m: () => Ob
    });
    var eb = Mb(40306),
      Hb = Mb(38383),
      pb = Mb(2434),
      Vb = Mb(2146),
      gb = Mb(29),
      lb = Mb(2451);
    const Lb = new eb.c;

    function Ib() {
      return Lb
    }

    function Ob() {
      Lb.clear()
    }

    function Ub() {
      for (const bb of Lb.ids()) {
        const wb = Lb.getName(bb);
        void 0 !== wb && Vb.d.delete(wb)
      }
      Ob(), gb.k.iI("playerRosterChanged", Lb.ids())
    }

    function tb(bb, wb) {
      var Mb, eb;
      if (Lb.has(bb)) return Lb.getSetting(bb, wb);
      const Hb = (0, lb.h)();
      return null === (Mb = Hb.zN[Hb.VJ]) || void 0 === Mb || null === (eb = Mb[bb]) || void 0 === eb ? void 0 : eb[wb]
    }

    function Cb(bb) {
      const {
        added: wb,
        removed: Mb,
        settingChanges: eb
      } = Lb.apply(bb);
      for (const {
          playerId: Hb,
          name: pb
        }
        of Mb) void 0 === pb || Fb(Hb) || Vb.d.delete(pb);
      for (const {
          playerId: pb,
          settings: Vb
        }
        of eb)
        if (Fb(pb)) Eb(pb, Vb);
        else
          for (const bb in Vb)(0, Hb.n)(pb, bb, Vb[bb]);
      (wb.length > 0 || Mb.length > 0) && gb.k.iI("playerRosterChanged", Lb.ids())
    }

    function Eb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lb.getSettings(bb);
      if (wb) {
        (0, Hb.i)(bb);
        for (const Mb in wb)(0, Hb.e)(bb, Mb, wb[Mb])
      }
    }

    function Fb(bb) {
      return bb === (0, lb.h)().HJ || (0, lb.e)().client.hasEntity(bb)
    }(0, pb.onGameReset)(Ob)
  },
  39319: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => rb,
      d: () => Xb,
      e: () => jb,
      g: () => Kb,
      j: () => Rb
    });
    var eb = Mb(38281),
      Hb = Mb(39323),
      pb = Mb(398),
      Vb = Mb.n(pb),
      gb = Mb(4788);
    const lb = new eb.YC,
      Lb = new eb.YC,
      Ib = new eb.YC,
      Ob = new eb.YC,
      Ub = new eb.YC,
      tb = [0, 0, 0],
      Cb = {
        x: 0,
        y: 0
      },
      Eb = new eb.YC(1, 0, 0),
      Fb = new eb.YC(0, 1, 0),
      Bb = eb.Matrix.Identity(),
      sb = new eb.Matrix,
      mb = new eb.Matrix,
      hb = new eb.YC,
      zb = new Hb.d(0, 0, 0, 0);

    function Xb(bb, wb) {
      var Mb, Hb;
      const pb = xb(bb, wb);
      if (pb) {
        const bb = pb.x,
          wb = pb.y,
          Mb = bb - 50,
          eb = wb - 50;
        return Math.abs(Mb) <= gb.c && Math.abs(eb) <= (0, gb.j)() ? {
          x: bb,
          y: wb
        } : cb(Mb, eb)
      }
      Ib.twb(wb[0], wb[1], wb[2]),
        function(bb) {
          const wb = bb.FO.MHb(),
            Mb = wb ? eb.Matrix.FromArrayToRef(wb.worldMatrix, 0, mb) : bb.FO.RJ().activeCamera.getWorldMatrix();
          eb.YC.TransformNormalToRef(Eb, Mb, Ob), Ob.normalize(), eb.YC.TransformNormalToRef(Fb, Mb, Ub), Ub.normalize()
        }(bb);
      const Vb = eb.YC.Dot(Ib, Ob);
      let lb = -eb.YC.Dot(Ib, Ub);
      Math.abs(Vb) < .001 && Math.abs(lb) < .001 && (lb = -1);
      const Lb = null !== (Mb = null === (Hb = bb.FO.MHb()) || void 0 === Hb ? void 0 : Hb.projectionMatrix) && void 0 !== Mb ? Mb : bb.FO.RJ().activeCamera.getProjectionMatrix().m;
      return cb(Vb * Lb[0], lb * Lb[5])
    }

    function xb(bb, wb) {
      const Mb = bb.FO.RJ(),
        Hb = Mb.DC(),
        pb = Hb.getRenderWidth(),
        Vb = Hb.getRenderHeight();
      zb.width = pb, zb.height = Vb;
      const gb = bb.FO.MHb(),
        Ib = gb ? hb.twb(gb.eye[0], gb.eye[1], gb.eye[2]) : bb.FO.camera.globalPosition;
      lb.twb(Ib.x + 10 * wb[0], Ib.y + 10 * wb[1], Ib.z + 10 * wb[2]);
      const Ob = gb ? eb.Matrix.FromArrayToRef(gb.viewProjectionMatrix, 0, sb) : Mb.getTransformMatrix();
      return eb.YC.ProjectToRef(lb, Bb, Ob, zb, Lb), Lb.z < 0 || Lb.z > 1 ? null : (Cb.x = Lb.x / pb * 100, Cb.y = Lb.y / Vb * 100, Cb)
    }

    function jb(bb, wb) {
      return Xb(bb, Db(bb, wb))
    }

    function Kb(bb, wb) {
      const Mb = xb(bb, Db(bb, wb));
      return Mb && {
        x: Mb.x,
        y: Mb.y
      }
    }

    function rb(bb) {
      var wb, Mb;
      return 1 / (null !== (wb = null === (Mb = bb.FO.MHb()) || void 0 === Mb ? void 0 : Mb.projectionMatrix[0]) && void 0 !== wb ? wb : bb.FO.RJ().activeCamera.getProjectionMatrix().m[0])
    }

    function Rb(bb, wb, Mb) {
      const eb = bb.FO.MHb(),
        Hb = eb ? eb.worldMatrix : bb.FO.RJ().activeCamera.getWorldMatrix().m,
        pb = bb.SU;
      for (let Vb = 0; Vb < 3; Vb++) wb[Vb] = Hb[12 + Vb] + pb[Vb], Mb[Vb] = Hb[8 + Vb];
      Vb().normalize(Mb, Mb)
    }

    function Db(bb, wb) {
      const Mb = bb.SU,
        eb = bb.FO.MHb(),
        Hb = eb ? hb.twb(eb.eye[0], eb.eye[1], eb.eye[2]) : bb.FO.camera.globalPosition;
      return tb[0] = wb[0] - Mb[0] - Hb.x, tb[1] = wb[1] - Mb[1] - Hb.y, tb[2] = wb[2] - Mb[2] - Hb.z, Vb().normalize(tb, tb), tb
    }

    function cb(bb, wb) {
      return (0, gb.f)(bb, wb, gb.c, (0, gb.j)())
    }
  },
  40357: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb
    });
    var eb = Mb(29),
      Hb = Mb(1373),
      pb = Mb(2529);
    const Vb = "Reconnecting";
    class gb {
      constructor(bb) {
        this.hooks = bb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = bb => {
          bb.persisted || this.leave()
        }, this.controller = new pb.f((wb => bb.reconnect(wb)), {
          isSessionLive: () => !this.ended && bb.isLive(),
          onPhaseChanged: bb => {
            this.onPhaseChanged(bb)
          },
          onReconnected: wb => {
            bb.onReconnected(wb)
          },
          onGaveUp: wb => {
            !this.ended && bb.isLive() && bb.onGaveUp(this.sessionBased, wb)
          }
        })
      }
      onInitialInfo(bb, wb) {
        this.graceMs = bb, this.sessionBased = wb
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(bb) {
        this.ended || this.controller.onConnectionLost(bb, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const bb = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          wb = this.controller.heldToken;
        this.end(), bb && "" !== wb && this.hooks.releaseSeat(wb)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(bb) {
        const wb = (0, pb.r)(bb);
        wb !== this.stopped && (this.stopped = wb, this.hooks.freeze(wb));
        const Mb = "frozen" === bb || "resuming" === bb && this.frozen;
        Mb && !this.frozen ? (0, Hb.y)(Vb, {
          overridesPause: !0
        }) : !Mb && this.frozen && (0, Hb.w)(Vb), this.frozen = Mb, this.setListening("connected" !== bb), eb.k.iI(pb.q, Mb ? "frozen" : bb)
      }
      setListening(bb) {
        bb !== this.listening && (this.listening = bb, bb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40365: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = bb, this.now = wb, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const bb = this.now(),
            wb = bb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = bb;
          const Mb = "visible" === document.visibilityState;
          !Mb || wb && this.wasVisible || (this.resumedAt = bb), this.wasVisible = Mb, Mb && bb - this.lastHeardAt > 12e3 && bb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = wb(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  40277: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ub
    });
    var eb = Mb(225),
      Hb = Mb(398),
      pb = Mb.n(Hb),
      Vb = Mb(37627),
      gb = Mb(37630),
      lb = Mb(2451);
    const Lb = eb.e.oF * eb.e.playerEyeToHeightRatio,
      Ib = 250,
      Ob = 1.1,
      Ub = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(bb, wb) {
          this.entities.set(bb, wb)
        }
        update(bb, wb) {
          const Mb = this.entities.get(bb);
          this.entities.set(bb, wb);
          const eb = this.playing.get(bb);
          eb && (Mb && Mb.soundName === wb.soundName ? (eb.sound.setRelativeVolume(wb.volume), eb.sound.rate(wb.rate), eb.sound.setPannerAttr({
            refDistance: wb.refDistance
          })) : this.stopEntity(bb))
        }
        remove(bb) {
          this.stopEntity(bb), this.entities.delete(bb)
        }
        sO(bb) {
          this.msSinceLastScan += bb, this.msSinceLastScan < Ib || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(bb) {
          const wb = this.playing.get(bb);
          wb && (wb.sound.stop(), this.playing.delete(bb))
        }
        startEntity(bb, wb, Mb) {
          const eb = (0, gb.f)(wb.soundName);
          if (!eb) return console.error(`AudioEntityManager: no sound found for "${wb.soundName}", dropping audio entity ${bb}`), void this.remove(bb);
          const Hb = Vb.c.play(eb, wb.volume, Mb, wb.maxHearDist, wb.refDistance, !0);
          Hb.rate(wb.rate), this.playing.set(bb, {
            sound: Hb,
            lastPos: pb().clone(Mb)
          })
        }
        scan() {
          const bb = (0, lb.h)();
          if (!bb) return;
          const wb = bb.pR.Qm(bb.VJ);
          if (wb)
            for (const [Mb, eb] of this.entities) {
              if (!bb.pR.eMb(Mb, "position")) continue;
              const Hb = bb.pR.Qm(Mb),
                Vb = pb().sqrDist(wb, Hb),
                gb = this.playing.get(Mb);
              if (gb) {
                const bb = eb.maxHearDist * Ob;
                Vb > bb * bb ? this.stopEntity(Mb) : pb().equals(Hb, gb.lastPos) || (gb.sound.setPosition([Hb[0], Hb[1] + Lb, Hb[2]]), pb().copy(gb.lastPos, Hb))
              } else Vb <= eb.maxHearDist * eb.maxHearDist && this.startEntity(Mb, eb, Hb)
            }
        }
      }
  },
  40372: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      c: () => Ib
    });
    var eb = Mb(1925),
      Hb = Mb(225),
      pb = Mb(1889),
      Vb = Mb(2006),
      gb = Mb(1271),
      lb = Mb(1186);
    async function Lb(bb, wb) {
      return function(bb) {
        return "object" === typeof bb && null !== bb && bb.code === Hb.b.VpnIp.code
      }(wb) && function(bb) {
        return pb.e.supports("appCheck") && bb.isLoggedIn() && !bb.hasTriedAppAttestation()
      }(bb) && await async function(bb) {
        try {
          const {
            token: wb
          } = await (0, Vb.b)(), {
            "3PSIDMCPP": Mb
          } = await (0, lb.postJsonWithMetricsCookiesAndJsonResponse)(`${gb.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: wb
          }, {
            retries: 0
          }, bb.getMetricsCookies());
          return bb.setAppAttestedAuthJwt(Mb), !0
        } catch (wb) {
          return wb instanceof eb.e && "failed" === wb.code ? (console.warn("The app couldn't get an App Check token:", wb), bb.markAppAttestationTried()) : console.error("Failed to attest the app:", wb), !1
        }
      }(bb)
    }
    async function Ib(bb, wb) {
      try {
        return await wb()
      } catch (Mb) {
        if (!await Lb(bb, Mb)) throw Mb
      }
      return wb()
    }
  },
  40367: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ub,
      d: () => Ib
    });
    var eb = Mb(225),
      Hb = Mb(2023),
      pb = Mb(1280),
      Vb = Mb(10278);
    const gb = [250, 500, 1e3, 2e3, 1250],
      lb = 406;

    function Lb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const {
        code: wb,
        message: Mb
      } = bb, Hb = eb.b.duplicateLobbyNameError;
      return (wb === Hb.code || wb === lb) && (Mb === Hb.text || Mb === Hb.text + eb.g)
    }
    async function Ib(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hb.c;
      for (let Hb = 0;; Hb++) {
        let Vb;
        (0, pb.r)(wb);
        try {
          return await bb()
        } catch (eb) {
          if (Vb = gb[Hb], void 0 === Vb || !Lb(eb)) throw eb
        }
        await Mb(Vb, wb)
      }
    }
    const Ob = new Set([eb.b.duplicateLobbyNameError.code, eb.b.lobbyCantBeCreated.code, eb.b.roomDisposedEarlyError.code, eb.b.roomDisposedLateError.code, eb.b.serverRoomLimitReached.code]);

    function Ub(bb) {
      if (Lb(bb)) return !0;
      const wb = (0, Vb.e)(bb);
      return "number" === typeof wb && Ob.has(wb)
    }
  },
  40341: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Hb
    });
    var eb = Mb(29);

    function Hb(bb) {
      return "refetchCode" === bb || "devDownloadJson" === bb || bb.startsWith("Plugin")
    }

    function pb(bb, wb) {
      "refetchCode" !== bb ? "Plugin|MobAiPlugin|ShowPetUi" !== bb ? Promise.all([Mb.e(128), Mb.e(129), Mb.e(118), Mb.e(120), Mb.e(248)]).then((() => Mb(53958))).then((Mb => {
        let {
          runClientGameMessage: eb
        } = Mb;
        eb(bb, wb)
      })).catch((wb => {
        console.error(`Game message ${bb} failed`, wb)
      })) : eb.k.iI("showPetUi", wb) : eb.k.iI("refetchCode")
    }
  },
  40381: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => lb
    });
    var eb = Mb(10278),
      Hb = Mb(37772),
      pb = Mb(40386);
    const Vb = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      gb = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function lb(bb, wb) {
      if (bb instanceof Hb.e) return {
        at: Vb[wb],
        code: 0
      };
      const Mb = (0, eb.e)(bb),
        lb = "number" === typeof Mb ? Mb : 0;
      return null !== (0, pb.g)(lb).name ? {
        at: "refused",
        code: lb
      } : {
        at: gb[wb],
        code: lb
      }
    }
  },
  10278: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      e: () => Vb,
      f: () => gb,
      g: () => Lb,
      j: () => lb
    });
    var eb = Mb(225),
      Hb = Mb(5472);

    function pb(bb) {
      return Vb(bb) === eb.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Vb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function gb(bb) {
      var wb;
      return null !== (wb = Object.keys(Hb.c).find((wb => Hb.c[wb] === bb))) && void 0 !== wb ? wb : null
    }

    function lb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Lb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10270: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      e: () => lb
    });
    var eb = Mb(382);

    function Hb(bb) {
      if (!bb.startsWith("{")) return bb;
      let wb;
      try {
        wb = JSON.parse(bb)
      } catch {
        return bb
      }
      return function(bb) {
        if (null === (0, eb.Oe)(bb)) return !1;
        const {
          params: wb
        } = bb;
        return void 0 === wb || "object" === typeof wb && null !== wb && Object.values(wb).every((bb => "string" === typeof bb))
      }(wb) ? wb : bb
    }
    var pb = Mb(1259),
      Vb = Mb(1321);

    function gb(bb) {
      return (0, pb.x)(Vb.g.get().getCurrentLanguageCode(), bb.translationKey, bb.params)
    }

    function lb(bb) {
      const wb = Hb(bb);
      return "string" === typeof wb ? wb : gb(wb)
    }

    function Lb(bb) {
      const wb = Hb(bb);
      return "string" === typeof wb ? wb : gb({
        translationKey: "moderation:kicked",
        params: {
          reason: gb(wb)
        }
      })
    }
  },
  40321: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib
    });
    var eb = Mb(1301),
      Hb = Mb(1455),
      pb = Mb(26),
      Vb = Mb(1436),
      gb = Mb(1447),
      lb = Mb(1686),
      Lb = Mb(37751);

    function Ib(bb) {
      let {
        Lp: wb,
        Ip: Mb
      } = bb;
      const Ib = null !== wb && void 0 !== wb ? wb : (0, gb.e)().gameNameWithVariation;
      (0, eb.A)(Ib) && ((0, Lb.g)(), (0, Vb.T)((() => {
        console.log("Received matchmaking order from game server to game", wb), (0, pb.k)("inGameReplay"), (0, lb.navigatePreserveSearch)((0, Hb.b)(Ib, null !== Mb && void 0 !== Mb ? Mb : void 0))
      }), "video_start"))
    }
  },
  40313: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      e: () => lb,
      h: () => Lb,
      k: () => Ob
    });
    var eb = Mb(2142),
      Hb = Mb(29),
      pb = Mb(1504),
      Vb = Mb(1329);
    const gb = new Map;

    function lb(bb, wb) {
      Hb.k.iI("newUiRequest", {
        id: bb,
        clientParameters: wb
      }, !0)
    }

    function Lb(bb) {
      Hb.k.iI("removeUiRequest", bb, !0);
      const wb = gb.get(bb);
      wb && (wb.tearDownNotification(), gb.delete(bb))
    }

    function Ib() {
      Hb.k.iI("clearUiRequests");
      for (const bb of gb.values()) bb.tearDownNotification();
      gb.clear()
    }

    function Ob(bb, wb, Mb, Hb) {
      const lb = "string" === typeof wb ? {
          translationKey: wb
        } : wb,
        Lb = pb.NotificationProvider.showPromptPopup({
          title: lb.translationKey,
          textOpts: {
            title: (0, Vb.g)(lb.params, eb.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: Mb,
          unlockPointerKey: "uiRequestPopup"
        });
      gb.set(bb, Lb), Lb.getResult().then((wb => {
        gb.delete(bb), "notificationTornDown" !== wb && Hb(wb)
      }))
    }
  },
  40393: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => tb,
      e: () => Ub
    });
    const eb = "ue:",
      Hb = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      pb = "[A-Za-z0-9]{1,24}",
      Vb = 15,
      gb = new RegExp(`^${pb}$`);
    new RegExp(`^${eb}(${[...Hb,"other"].join("|")}):(?:n|k(${pb})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function lb(bb, wb, Mb, pb, lb) {
      const Lb = "string" === typeof bb && Hb.includes(bb) ? bb : "other";
      let Ib = "n";
      return "string" === typeof wb ? Ib = gb.test(wb) ? `k${wb}` : "n" : "number" === typeof Mb && Number.isInteger(Mb) && Mb >= 0 && Mb <= Vb && (Ib = `b${Mb}`), `${eb}${Lb}:${Ib}:${pb?1:0}${lb?1:0}`
    }
    var Lb = Mb(1864),
      Ib = Mb(1968);
    let Ob = null;

    function Ub(bb) {
      const wb = bb instanceof Element && bb !== document.body && bb !== document.documentElement && !(0, Lb.l)(bb) && !bb.closest("#root");
      return {
        editable: (0, Ib.d)(bb),
        outsideView: wb
      }
    }

    function tb(bb) {
      return Ob ??= function(bb) {
        try {
          const {
            editable: wb,
            outsideView: Mb
          } = Ub(bb.target), eb = bb;
          return lb(bb.type, eb.code, eb.button, wb, Mb)
        } catch {
          return lb(null, null, null, !1, !1)
        }
      }(bb), Ob
    }
  },
  40386: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      g: () => lb,
      k: () => Vb,
      m: () => Hb
    });
    var eb = Mb(225);

    function Hb(bb) {
      const wb = bb.endsWith(eb.g);
      return {
        text: (wb ? bb.slice(0, -eb.g.length) : bb) || null,
        dropsCache: wb
      }
    }
    const pb = "Either your internet isn't working or this is a bug.";

    function Vb(bb, wb) {
      const Mb = lb(bb);
      return null !== Mb.name && "" === eb.b[Mb.name].text && null !== wb ? wb : Mb.reason
    }
    const gb = "You were removed from the game.";

    function lb(bb) {
      var wb;
      let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Hb = null !== (wb = Object.keys(eb.b).find((wb => eb.b[wb].code === bb))) && void 0 !== wb ? wb : null;
      if (null === Hb) return {
        code: bb,
        name: Hb,
        reason: null !== Mb && void 0 !== Mb ? Mb : `${pb}\nCode: ${bb}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Vb,
        canReconnect: lb = !1
      } = eb.b[Hb], Lb = bb === eb.b.outdatedVersion.code || bb === eb.b.loadRecaptchaError.code;
      return {
        code: bb,
        name: Hb,
        reason: "" !== Vb ? Vb : null !== Mb && void 0 !== Mb ? Mb : bb === eb.b.gameOrPluginKick.code ? gb : `Code: ${bb}`,
        canReconnect: lb,
        automaticallyReconnect: bb === eb.b.customGameUpdated.code || bb === eb.b.duplicateLobbyNameError.code,
        requiresRefresh: Lb
      }
    }
  },
  40306: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      constructor() {
        this.members = new Map
      }
      apply(bb) {
        const wb = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const eb of bb.KH) {
          let bb = this.members.get(eb.rH);
          if (bb || (bb = {
              name: null,
              settings: {}
            }, this.members.set(eb.rH, bb), wb.added.push(eb.rH)), null !== eb.RH && (bb.name = eb.RH), null !== eb.DH || eb.cH.length > 0) {
            const Mb = null === eb.DH ? {} : JSON.parse(eb.DH);
            Object.assign(bb.settings, Mb);
            for (const wb of eb.cH) delete bb.settings[wb], Mb[wb] = void 0;
            wb.settingChanges.push({
              playerId: eb.rH,
              settings: Mb
            })
          }
        }
        for (const eb of bb.YH) {
          const bb = this.members.get(eb);
          var Mb;
          if (bb) this.members.delete(eb), wb.removed.push({
            playerId: eb,
            name: null !== (Mb = bb.name) && void 0 !== Mb ? Mb : void 0
          })
        }
        return wb
      }
      has(bb) {
        return this.members.has(bb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(bb) {
        var wb, Mb;
        return null !== (wb = null === (Mb = this.members.get(bb)) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== wb ? wb : void 0
      }
      getSettings(bb) {
        var wb;
        return null === (wb = this.members.get(bb)) || void 0 === wb ? void 0 : wb.settings
      }
      getSetting(bb, wb) {
        var Mb;
        return null === (Mb = this.members.get(bb)) || void 0 === Mb ? void 0 : Mb.settings[wb]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  40348: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb,
      e: () => Hb
    });
    const eb = ["description", "label"];

    function Hb(bb) {
      const wb = bb.type;
      return {
        type: wb,
        params: bb[wb]
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);