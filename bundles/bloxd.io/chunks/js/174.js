export const id = 174;
export const ids = [174];
export const modules = {
  39896: (ee, ie, He) => {
    function ye(ee) {
      return !(!ee.lobbyLeaderboardInfo && !ee.lobbyManage)
    }
    He.d(ie, {
      e: () => ye
    })
  },
  39867: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      f: () => Ke
    });
    var ye = He(27);
    let be = !1;

    function Me() {
      return be
    }

    function Ke(ee) {
      be !== ee && (be = ee, ye.h.yR("replayViewer|videoExportChanged"))
    }
  },
  39818: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(27),
      be = He(2018);

    function Me(ee) {
      let {
        taskId: ie,
        progress: He
      } = ee;
      const ye = be.c.get("_tasks");
      null !== ye && void 0 !== ye && ye[ie] && be.c.apply({
        _tasks: {
          ...ye,
          [ie]: {
            ...ye[ie],
            progress: He
          }
        }
      })
    }
    ye.h.subscribe("clientTaskProgress", (ee => {
      Me(ee)
    }))
  },
  39756: (ee, ie, He) => {
    He.d(ie, {
      e: () => bH,
      h: () => HH,
      l: () => yH
    });
    var ye = He(4075),
      be = He(153),
      Me = He(186),
      Ke = He(618),
      Ue = He(35),
      Fe = He(2969),
      Je = He(4142),
      oe = He(4128),
      Re = He(1169);
    const ke = new WeakMap;
    class qe {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          TRe: !0
        };
        this.callbacks = ie, this.options = He, this.kbe = void 0, this.sessionId = void 0, this.kY = [], this.pRe = !1, this.xf = !1, this.XRe = void 0, this.RY = 0, this.kKe = 0, this.zRe = (ee, ie) => {
          if (this.xf) return;
          const He = Number(ee);
          this.pRe ? this.BRe(He, ie) : this.kY.push({
            id: He,
            payload: ie
          })
        }, this.dispose = () => {
          this.xf || (this.xf = !0, ke.delete(this), this.kY.length = 0, this.XRe())
        }, this.kbe = ee, this.sessionId = ee.sessionId, ke.set(this, []), this.XRe = this.ERe()
      }
      gRe(ee) {
        this.XRe(), this.kbe = ee, this.sessionId = ee.sessionId, this.RY = 0, this.kKe = 0, this.XRe = this.ERe()
      }
      get FY() {
        return this.kKe
      }
      ERe() {
        const ee = this.kbe.OE("*", this.zRe);
        return this.options.TRe && this.kbe.WE(this.dispose), ee
      }
      BRe(ee, ie) {
        try {
          (0, Je.kc)(ee) && (ie = (0, Je.d)(ee, oe.bR.from(ie)));
          const He = ke.get(this)[ee];
          if ("function" !== typeof He) {
            if (this.callbacks.ORe) return void this.callbacks.ORe(ee, ie);
            throw new Error(`No onMessage handler registered for message id ${ee}`)
          }
          He(ie)
        } catch (He) {
          this.callbacks.dRe(`Error in onMessage ${ee} with payload ${JSON.stringify(ie)}`, He)
        } finally {
          this.RY++
        }
      }
      WRe() {
        for (const {
            id: ee,
            payload: ie
          }
          of this.kY) {
          if (this.xf) break;
          this.BRe(ee, ie)
        }
        this.kY.length = 0
      }
      RZ() {
        return this.xf
      }
      tRe() {
        if (this.pRe || this.xf) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          OE: (ee, ie) => {
            if (this.pRe || this.xf) throw new Error("Trying to call onMessage after registration finished");
            this.OE(ee, ie)
          },
          finishRegistration: () => {
            if (this.xf) throw new Error("Cannot finish message registration after disposal");
            this.pRe = !0, this.WRe()
          }
        }
      }
      OE(ee, ie) {
        var He, ye;
        null === (He = (ye = this.callbacks).ZRe) || void 0 === He || He.call(ye);
        const be = ke.get(this);
        for (; ee > be.length;) be[be.length] = null;
        be[ee] = ie
      }
      send(ee, ie) {
        this.DRe(), (0, Re.G)(ie) ? this.kbe.ZY(ee, ie) : this.kbe.send(ee, ie)
      }
      DRe() {
        var ee, ie;
        (this.kKe++, 5 === fe++) && (null === (ee = (ie = this.callbacks).ZRe) || void 0 === ee || ee.call(ie), fe = 0)
      }
      zB() {
        this.dispose(), this.kbe.zB()
      }
      leave() {
        this.dispose(), this.kbe.leave()
      }
    }
    let fe = 0;
    var Te = He(4093);
    class pe extends qe {
      constructor(ee) {
        super(ee, {
          ZRe: () => {
            (0, Ue.q)(!0) && (0, ye.bY)()
          },
          dRe: (ee, ie) => {
            var He;
            null === (He = (0, Fe.h)()) || void 0 === He || He.CT(ee, ie)
          }
        }, {
          TRe: !1
        }), (0, Te.e)(ee)
      }
      fY(ee, ie) {
        return !!(0, Te.j)((0, Te.b)(), this.kbe, ee, ie) && (this.DRe(), !0)
      }
      gRe(ee) {
        this.PRe(), super.gRe(ee), (0, Te.e)(ee)
      }
      zB() {
        super.zB(), this.PRe()
      }
      PRe() {
        this.kbe.YB.kR.wV = void 0
      }
    }
    var Xe = He(27),
      ze = He(2018),
      Be = He(1768),
      Ee = He(37252),
      ge = He(39760),
      Oe = He(38878),
      de = He(38639),
      We = He(610),
      te = He(39205);

    function Ze(ee, ie, He) {
      const ye = function(ee) {
          const ie = new Int32Array(ee.length * te.g);
          return ee.forEach(((ee, He) => {
            const ye = He * te.g;
            if (4 === ee.length) {
              const [He, be, Me, Ke] = ee;
              ie.set([He, be, Me, He, be, Me, Ke], ye)
            } else {
              const [He, be, Me, Ke, Ue, Fe, Je] = ee;
              ie.set([He, Me, Ue, be, Ke, Fe, Je], ye)
            }
          })), ie
        }(He),
        be = (ie, He, ye, be) => {
          ee.setBlockNoMulti(ie, He, ye, be, !0)
        };
      ee.client.gameRecorder.isCapturing() ? (0, te.ub)(ye, (0, te.tb)(ye), be) : ee.uk.xR.Xw(ye, {
        hN: be,
        isHookId: ie => ee.blockChangeHasHooks(ie),
        watched: () => function(ee, ie, He) {
          const ye = [],
            be = (ee, ie, He) => {
              ye.push(ee, ie, He)
            },
            Me = new Set;
          for (let Ke = 0; Ke < He.length; Ke += te.g)
            for (let ie = (0, We.W)(He[Ke]); ie <= (0, We.W)(He[Ke + 3]); ie++)
              for (let ye = (0, We.W)(He[Ke + 1]); ye <= (0, We.W)(He[Ke + 4]); ye++)
                for (let Ue = (0, We.W)(He[Ke + 2]); Ue <= (0, We.W)(He[Ke + 5]); Ue++) {
                  const He = `${ie}|${ye}|${Ue}`;
                  Me.has(He) || (Me.add(He), ee.blockDataOwner.forEachDataCell(ie, ye, Ue, be))
                }
          return ie.forEachCell(be), Int32Array.from(ye)
        }(ee, ie, ye)
      }), ee.uk.oHe()
    }

    function we(ee) {
      ee.ibe = new Set, ee.bbe = new Set, ee.Hbe = new Set, ee.Mbe = new Set, ee.ybe = [], ee.Kbe = [], ee.oN = new Set, ee.Xy = [], ee.kN = []
    }
    class De {
      constructor(ee) {
        this.uk = ee
      }
      register(ee) {
        const ie = this.uk,
          He = (0, Fe.e)();
        ee.OE(Je.cb, (ee => {
          ie.xR.ibe.add(ee), ie.xR.bbe.delete(ee)
        })), ee.OE(Je.kb, (ee => {
          ie.xR.bbe.add(ee), ie.xR.ibe.delete(ee)
        })), ee.OE(Je.ce, (ee => {
          ie.xR.bbe.delete(ee), ie.xR.ibe.delete(ee)
        })), ee.OE(Je.hb, (ee => {
          ie.xR.Hbe.add(ee), ie.xR.Mbe.delete(ee)
        })), ee.OE(Je.ob, (ee => {
          ie.xR.Mbe.add(ee), ie.xR.Hbe.delete(ee)
        })), ee.OE(Je.je, (ee => {
          ie.xR.Mbe.delete(ee), ie.xR.Hbe.delete(ee)
        })), ee.OE(Je.db, (ee => {
          (0, Re.hb)(ee, ie.xR.Kbe), (0, Re.hb)(ee, ie.xR.ybe), ie.xR.ybe.push(ee)
        })), ee.OE(Je.lb, (ee => {
          (0, Re.hb)(ee, ie.xR.ybe), (0, Re.hb)(ee, ie.xR.Kbe), ie.xR.Kbe.push(ee)
        })), ee.OE(Je.ge, (ee => {
          (0, Re.hb)(ee, ie.xR.ybe), (0, Re.hb)(ee, ie.xR.Kbe)
        })), ee.OE(Je.sf, (ee => {
          let {
            TH: He,
            pH: ye
          } = ee;
          ye ? ie.xR.oN.delete(He) : ie.xR.oN.add(He)
        })), ee.OE(Je.pf, (ee => {
          let {
            Xy: ye,
            zy: be
          } = ee;
          He.updateWalkThroughRect(ie.gC, ye, be)
        })), (0, ye.onGameResetOnce)((() => {
          we(ie.xR)
        })), ee.OE(Je.hc, (ee => {
          Oe.d.applyServerUpdate(ee)
        })), ee.OE(Je.rb, (ee => {
          He.applyServerBlocks((() => {
            ! function(ee, ie) {
              for (const {
                  NM: He,
                  GM: ye
                }
                of ie) {
                const ie = de.d[ye];
                if (ie) {
                  const {
                    compX: ye,
                    compY: be,
                    compZ: Me,
                    mainMultiblock: Ke
                  } = ie;
                  ee.RV(He[0] - ye, He[1] - be, He[2] - Me, Ke)
                }
              }
              for (const {
                  NM: He,
                  GM: ye,
                  rM: be
                }
                of ie) ee.setBlockNoMulti(He[0], He[1], He[2], ye, !0), ee.blockDataOwner.setBlockData(He[0], He[1], He[2], null === be ? void 0 : JSON.parse(be)), ee.blockAdded(He[0], He[1], He[2], ye)
            }(He, ee)
          })), Xe.h.yR("changeBlockFail", ee), Xe.h.yR("blockChangeRefused"), He.client.triggerGameCallback("onChangeBlockFail", ee), Xe.h.yR("EditBoard", {
            pos: null
          }), Xe.h.yR("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        }));
        const be = ee => {
          He.applyServerBlocks((() => {
            Ze(He, Oe.d, ee)
          }))
        };
        ee.OE(Je.Nb, be), ee.OE(Je._b, be), ee.OE(Je.if, (ee => {
          let {
            ki: ie,
            qi: ye
          } = ee;
          if (He.QG(ie[0], ie[1], ie[2])) {
            const ee = (0, Fe.e)().kE(ie[0], ie[1], ie[2]);
            (0, Fe.e)().updateMailboxContents(ie[0], ie[1], ie[2], ee, ye)
          }
        })), ee.OE(Je.Be, (ee => {
          let {
            pos: ie,
            data: ye
          } = ee;
          He.blockDataOwner.setBlockData(ie[0], ie[1], ie[2], ye), He.blockAdded(ie[0], ie[1], ie[2], He.kE(ie[0], ie[1], ie[2]))
        }))
      }
    }
    var Pe = He(37965),
      Ae = He(37590),
      Ye = He(38897),
      Ve = He(38759),
      ae = He(38915);
    class ce {
      constructor(ee, ie) {
        this.uk = ee, this.setUpQueuedEntity = ie
      }
      register(ee) {
        const ie = this.uk,
          He = (0, Fe.e)();
        ee.OE(Je.$, (ee => {
          let {
            De: ie,
            Pe: He
          } = ee;
          this.setUpQueuedEntity(ie), ie = (0, Ae.b)(ie), (0, Fe.e)().client.gameRecorder.recordBulletShot(ie, He), Xe.h.yR(`bulletShot|${ie}`, {
            bulletDirections: He
          })
        })), ee.OE(Je.jc, (ee => {
          let {
            Cy: ie,
            vy: He
          } = ee;
          Xe.h.yR("damagedByOtherPlayer", {
            Cy: ie,
            direction: He
          }, !0)
        })), ee.OE(Je.wd, (ee => {
          Xe.h.yR("playerKilled", ee, !0), (0, Ae.f)(ee.killerEId) && !(0, Ae.f)(ee.deadEId) && Xe.h.yR("sessionReplayPlayerKill", {
            killstreak: ee.killstreak
          }), (0, Fe.e)().client.gameRecorder.recordPlayerKilled(ee.deadEId, ee.killerEId, ee.withItem, ee.killstreak)
        })), ee.OE(Je.Sb, (ee => {
          Xe.h.yR("customKillfeed", ee, !0), (0, Fe.e)().client.gameRecorder.recordCustomKillfeed(ee.killer, ee.victim, ee.withItem)
        })), ee.OE(Je.Id, (ee => {
          let {
            xH: He,
            CH: ye
          } = ee;
          this.setUpQueuedEntity(He);
          const be = ie.sE.Vye(He);
          null !== be && void 0 !== be && be.isGun() && be.reload(Date.now(), ye)
        })), ee.OE(Je.ve, (ee => {
          let {
            Tb: He,
            QH: ye
          } = ee;
          const be = ye ? (0, ae.d)(ie, ye) : void 0;
          Xe.h.yR("sendHitmarker", {
            Tb: He,
            screenPos: be
          }, !0)
        })), ee.OE(Je.Mc, (ee => {
          let {
            NH: ye,
            GH: be,
            ey: Me,
            iy: Ke,
            Hy: Ue,
            yy: Fe,
            My: Je
          } = ee;
          this.setUpQueuedEntity(ye), ye = (0, Ae.b)(ye);
          const oe = ie.sE.Wye(ye);
          if (oe && (oe.lastHurtTime = performance.now()), (0, Ye.playRigHurt)(ie, ye, Fe), Xe.h.yR("lifeformHurt", {
              eId: ye,
              My: Je
            }), be) {
            const ee = (0, ae.d)(ie, be.QH);
            Xe.h.yR("yourAttackHit", {
              Tb: Ke,
              screenPos: ee,
              hitSelf: ye === ie.gC
            })
          }
          ye === ie.gC && (He.shakePlayerCamera(ye, Ue / 40, 200), Xe.h.yR("closeShopOnDamaged", null), Xe.h.yR("damagedByOtherPlayer", {
            Cy: null,
            direction: Fe,
            Hy: Ue
          }, !0));
          const Re = ie.sE.pE(ye);
          if (Re && (Me || Ke)) {
            const ee = [Re[0], Re[1] + 1, Re[2]];
            Me && (0, Ve.m)(ie, Ve.y, ee, 15), Ke && (0, Ve.m)(ie, Ve.p, ee, 10)
          }
        })), ee.OE(Je.Lc, (ee => {
          let {
            kb: He,
            qb: ye,
            fb: be
          } = ee;
          (0, Pe.d)(ie).setHealthFrac((0, Ae.b)(He), be), Xe.h.yR("lifeformHealthChanged", {
            eId: (0, Ae.b)(He),
            qb: ye,
            fb: be
          })
        })), ee.OE(Je.V, (ee => {
          let {
            Py: He,
            Ay: ye
          } = ee;
          (0, Fe.e)().playerAttacked(ie.gC, He, ye)
        })), ee.OE(Je.tb, (() => {
          const ee = ie.sE.Vye(ie.gC);
          null !== ee && void 0 !== ee && ee.isChargeable() && ee.finishCharging(!1, Date.now())
        })), ee.OE(Je.Wb, (ee => {
          let {
            Oy: ie,
            Wy: He,
            ty: ye,
            Zy: be,
            wy: Me,
            Dy: Ke
          } = ee;
          ie = (0, Ae.b)(ie), (0, Fe.e)().client.updateEffect(ie, He, {
            displayName: ye,
            icon: be,
            duration: Me,
            level: Ke
          })
        })), ee.OE(Je.Jd, (ee => {
          let {
            Oy: ie,
            Wy: He
          } = ee;
          ie = (0, Ae.b)(ie), (0, Fe.e)().client.removeEffect(ie, He)
        })), ee.OE(Je.ef, (ee => {
          Xe.h.yR("ttbEffectMultiplier", ee)
        }))
      }
    }
    var xe = He(39784),
      Le = He(37963),
      Ce = He(4582),
      ve = He(38927),
      ue = He(37574),
      me = He(37578),
      le = He(37899),
      Se = He(37992),
      ne = He(38933),
      je = He(39786);
    class se {
      constructor(ee, ie) {
        this.uk = ee, this.setUpQueuedEntity = ie
      }
      register(ee) {
        const ie = this.uk,
          He = (0, Fe.e)();
        ee.OE(Je.Xc, (ee => {
          let {
            eId: He,
            settings: ye
          } = ee;
          (0, Se.f)(He);
          for (const ie in ye)(0, Se.e)(He, ie, ye[ie]);
          if ("canSee" in ye && ie.sE.gHe(He, "hidingMeshManager")) {
            const ee = ie.sE.getState(He, "hidingMeshManager");
            ee.canSee = (0, ne.e)("canSee", ye.canSee), ee._forceUpdate = !0
          }
        })), ee.OE(Je.L, (ee => {
          let {
            XH: He,
            zH: ye,
            animationScript: be,
            BH: Me,
            EH: Ke,
            gH: Ue,
            OH: Je
          } = ee;
          He = (0, Ae.b)(He);
          const oe = null === be && null !== Ue ? (0, xe.e)(Ue, Je) : be;
          (0, Fe.e)().client.gameRecorder.recordAnimateEntity(He, ye, oe, Me, Ke), (0, Pe.d)(ie).animations.animateEntity(He, ye, be, Me, Ke, Ue, Je), null !== be || He === ie.gC && ye === Le.c.Emote && (0, Fe.e)().client.cameraController.endTemporaryThirdPerson()
        })), ee.OE(Je.se, (ee => {
          (0, je.b)(ee)
        })), ee.OE(Je.td, (ee => {
          for (const ie of ee)(0, ve.z)(ie);
          Xe.h.yR("playerCosmeticsUpdated", ee, !0)
        })), ee.OE(Je.T, (ee => {
          for (const He of ee)(0, le.e)(ie, He)
        })), ee.OE(Je._c, (ee => {
          (0, Ve.n)(ie, (0, Re.w)(ee))
        })), ee.OE(Je.$c, (ee => {
          Ce.f[ee.Jy] ? (0, Ve.n)(ie, {
            ...Ce.f[ee.Jy],
            pos1: ee.pos1,
            pos2: ee.pos2
          }) : console.error(`Unknown preset id: ${ee.Jy}`)
        })), ee.OE(Je.qd, (ee => {
          var ie, He;
          let {
            xb: ye,
            Lb: be,
            Cb: Me,
            ub: Ke
          } = ee, {
            lb: Ue,
            Sb: Je
          } = null !== Ke && void 0 !== Ke ? Ke : {};
          const {
            mb: oe
          } = null !== Ke && void 0 !== Ke ? Ke : {};
          Ue = null !== (ie = Ue) && void 0 !== ie ? ie : void 0, Je = null !== (He = Je) && void 0 !== He ? He : void 0, "string" === typeof oe && this.setUpQueuedEntity(oe), (0, Fe.e)().client.gameRecorder.recordPlaySound(ye, be, Me, Ke), ue.d.play((0, me.g)(ye), be, oe, Ue, Je).rate(Me)
        })), ee.OE(Je.mf, (ee => {
          for (const ie in ee) {
            const ye = ee[ie];
            for (const ee in ye) He.client.meshCreator.handleParticleSystemUpdate(ie, ee, ye[ee])
          }
        }))
      }
    }
    var Ie = He(38621),
      he = He(38575);
    class Ne {
      constructor(ee) {
        this.uk = ee
      }
      register(ee) {
        const ie = this.uk,
          He = (0, Fe.e)();

        function ye() {
          return ie.sE.Jye(ie.gC)
        }
        ee.OE(Je.xc, (ee => {
          let {
            aM: He,
            cM: ye,
            xM: be,
            LM: Me,
            CM: Ke,
            vM: Ue,
            uM: Fe,
            mM: Je,
            lM: oe
          } = ee;
          if (!ie.sE.gHe(He, "itemState")) return void(0, Ie.m)(ie, He, [Ke, Ue, Fe], ye, {
            amount: be,
            attributes: JSON.parse(Me),
            mM: Je,
            size: oe
          });
          const Re = ie.sE.getState(He, "itemState");
          Re.amount = be, Re.mM = Je, Re.creationTime = Date.now(), (0, he.setServerPosition)(ie.sE.getState(He, "smoothToServerPos"), Ke, Ue, Fe)
        })), ee.OE(Je.pb, (ee => {
          (0, Pe.d)(ie).setCantPickUp(ee, !0), ie.sE.gHe(ee, "itemState") && (ie.sE.getState(ee, "itemState").mM = !0)
        })), ee.OE(Je._d, (ee => {
          (0, Pe.d)(ie).setCantPickUp(ee, !1), ie.sE.gHe(ee, "itemState") && (ie.sE.getState(ee, "itemState").mM = !1)
        })), ee.OE(Je.md, (ee => {
          let {
            pickUpItems: ie,
            pickUpAckSeq: He
          } = ee;
          for (const {
              name: be,
              amount: Me,
              attributes: Ke
            }
            of ie) ye().pickUpItem({
            name: be,
            amount: Me,
            typeObj: Ie.A[be],
            attributes: Ke
          });
          (0, Fe.e)().client.inventoryPrediction.serverChangeApplied(He)
        })), ee.OE(Je.Pe, (ee => {
          let {
            index: He,
            name: ye,
            amount: be,
            attributes: Me,
            setSlotAckSeq: Ke
          } = ee;
          const Ue = ie.sE.oye(ie.gC);
          (He < Ue.playerInventory.numSlots || Ue.uH || Ue.inCreative) && Ue.setItemSlot(He, ye, be, Me), (0, Fe.e)().client.inventoryPrediction.serverChangeApplied(Ke)
        })), ee.OE(Je.uc, (ee => {
          (0, Fe.e)().client.inventoryPrediction.acknowledge(ee)
        })), ee.OE(Je.K, (ee => {
          let {
            QM: ie,
            eK: He,
            iK: ye,
            HK: be
          } = ee;
          (0, Fe.e)().client.itemDropPrediction.onActionItemDrops(ie, He, ye, be)
        })), ee.OE(Je.Gb, (ee => {
          ye().clearInventory(), (0, Fe.e)().client.inventoryPrediction.serverChangeApplied(ee)
        })), ee.OE(Je.Qe, (ee => {
          Xe.h.yR("setSelectedInventorySlotI", ee, !0)
        })), ee.OE(Je.yb, (ee => {
          let {
            Ei: He,
            gi: ye,
            Oi: be,
            di: Me,
            Wi: Ke,
            ti: Ue,
            Zi: Je,
            wi: oe
          } = ee;
          const Re = ie.sE.oye(ie.gC);
          if (Ue) {
            const {
              Pi: ee,
              Ai: ie
            } = oe;
            return (0, Fe.e)().client.inventoryPrediction.Zie(ie, (() => {
              Re.chestRefreshed(ye, be, Me, Je, ee)
            })) && Xe.h.yR("chestToggleFromServer", !1, !0), void Xe.h.yR("chestRefreshedFromServer")
          }(He || Re.uH) && (He ? (Re.chestOpened(ye, be, Me, Ke, Je), null !== Ke && (0, Fe.e)().client.ironChestPasskeyCache.onChestOpened(Me, Ke)) : Re.chestClosed(), Xe.h.yR("chestToggleFromServer", He, !0))
        })), ee.OE(Je.Vb, (ee => {
          let {
            craftingRecipeItemName: ye,
            recipesForItem: be
          } = ee;
          ye ? He.craftingManager.editRecipesForPlayer(ie.gC, ye, be) : He.craftingManager.resetAllPlayerRecipes(ie.gC), Xe.h.yR("craftingRecipesEdited", {
            itemName: ye,
            recipesForItem: be
          })
        })), ee.OE(Je.Rd, (ee => {
          let {
            By: ie,
            Ey: He,
            gy: be
          } = ee;
          ye().removeItemName(ie, He), (0, Fe.e)().client.inventoryPrediction.serverChangeApplied(be)
        })), ee.OE(Je.Nd, (ee => {
          let {
            SM: ye
          } = ee;
          He.craftingManager.removeRecipes(ie.gC, ye), Xe.h.yR("craftingRecipesEdited", {
            itemName: ye,
            recipesForItem: []
          })
        }))
      }
    }
    var Ge = He(7083),
      re = He(38439),
      Qe = He(352),
      ei = He.n(Qe),
      ii = He(4908),
      Hi = He(38516),
      yi = He(39057),
      bi = He(38433);
    class Mi {
      constructor(ee, ie) {
        this.uk = ee, this.setUpQueuedEntity = ie
      }
      register(ee) {
        const ie = this.uk,
          He = (0, Fe.e)();
        ee.OE(Je.cf, (ee => {
          let {
            ai: He,
            ci: be,
            xi: Me,
            Li: Ke
          } = ee;
          const Ue = [be, Me, Ke];
          ie.sE.setPosition(ie.gC, Ue), (0, ye.sendColyMessage)(Je.Ng, {
            ho: He,
            Go: ii.g
          }), Xe.h.yR("localPlayerTeleported", {
            pos: Ue,
            isCorrection: !1
          })
        })), ee.OE(Je.ed, (ee => {
          let {
            jH: ie,
            sH: He,
            IH: ye,
            hH: be
          } = ee;
          this.setUpQueuedEntity(ie);
          const Me = [He, ye, be];
          Xe.h.yR(`otherPlayerTeleported|${ie}`, {
            pos: Me
          })
        })), ee.OE(Je.xd, (ee => {
          let {
            Eb: He,
            gb: be,
            Ob: Me,
            Wb: Ke,
            tb: Ue,
            Zb: Fe,
            wb: oe,
            Pb: Re,
            Db: ke,
            Vb: qe
          } = ee;
          const fe = [be, Me, Ke];
          ie.sE.setPosition(ie.gC, fe);
          const Te = ie.sE.CHe(ie.gC),
            pe = ie.sE.XN(ie.gC);
          ei().set(pe.JI, 0, 0, 0), ei().set(pe.pI, 0, 0, 0), ei().set(pe.Op, Ue, Fe, oe), pe.xI(), Te._flying = null !== qe, qe ? (Te.flyAccel.ab = qe.ab, Te.flyAccel.cb = qe.cb) : Te.flyAccel.reset(), Re && Te.movementType === Ge.o.GLIDING && (Te.Ab = Re.Ab, ei().copy(Te.Yb, Re.Yb)), (0, ye.sendColyMessage)(Je.Ng, {
            ho: He,
            Go: ii.g
          }), Xe.h.yR("localPlayerTeleported", {
            pos: fe,
            isCorrection: !0
          })
        })), ee.OE(Je.Te, (ee => {
          let {
            vehicleEId: ie,
            overrides: He
          } = ee;
          (0, Fe.e)().applyRiddenVehicleSettingOverrides(ie, He)
        })), ee.OE(Je.nf, (ee => {
          let {
            nM: He,
            jM: ye,
            sM: be
          } = ee;
          const Me = ie.sE.CHe(ie.gC).physicsState.type === Ge.s.SLEEPING && He === Ge.s.DEFAULT;
          (0, Fe.e)().updatePositionAndPhysics(ie.gC, {
            type: He,
            tier: ye
          }, !0, be), Me && (0, Fe.e)().updateHeldVehicleStatus()
        })), ee.OE(Je.sb, (ee => {
          let {
            Ke: He,
            Ue: ye
          } = ee;
          ie.sE.Uye(ie.gC).setPose(He, ye)
        })), ee.OE(Je.Ce, (ee => {
          const {
            FR: He,
            lye: ye
          } = (0, re.i)([ee[0], ee[1], ee[2]]);
          bi.d.setLookDirection(ie, He, ye), (0, Hi.s)(He, ye);
          const be = ie.sE.Uye(ie.gC);
          be && (be.heading = He)
        })), ee.OE(Je.Ge, (ee => {
          He.client.cameraController.setCameraZoom(ee)
        })), ee.OE(Je.Ye, (ee => {
          let {
            IM: ye,
            hM: be
          } = ee;
          He.shakePlayerCamera(ie.gC, ye, be)
        })), ee.OE(Je.Fc, (ee => {
          ie.sE.Uye(ie.gC).jumpMultiplier.setMultiplierType("jumpEffectAmount", ee)
        })), (0, ye.onGameResetOnce)((() => {
          ie.sE.Uye(ie.gC).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), ee.OE(Je.P, (ee => {
          ie.sE.XN(ie.gC).applyImpulse(ee)
        })), ee.OE(Je.We, (ee => {
          const He = ie.sE.XN(ie.gC);
          ei().set(He.JI, 0, 0, 0), ei().set(He.pI, 0, 0, 0), ei().copy(He.Op, ee), He.xI()
        })), (0, ye.onGameResetOnce)((() => {
          (0, yi.setFloatingYValue)(ie.sE.getState(ie.gC, "physics"), ie.sE.M_(ie.gC), null)
        })), ee.OE(Je.Zb, (ee => {
          let {
            He: He,
            ye: ye,
            Me: be
          } = ee;
          const Me = (0, Ae.b)(He);
          if (Me === ie.gC) {
            const ee = ie.sE.M_(ie.gC).position;
            be ??= Math.floor(ee[1]) - 1, (0, yi.setFloatingYValue)(ie.sE.getState(ie.gC, "physics"), ie.sE.M_(ie.gC), ye ? be : null)
          }(0, Pe.d)(ie).setFloating(Me, ye, be);
          const Ke = ie.sE.getState(Me, "floating");
          Ke && (Ke.isFloating = ye, Ke.Me = ye ? be : null)
        }))
      }
    }

    function Ki(ee, ie, He, ye, be) {
      let Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!ee.sE.Fye(ee.gC)) return console.log("Got resync inven but don't have inven component"), void ie.acknowledge(ye);
      Me && console.error("Had to sync inven"), ie.Zie(ye, be) && He.yR("chestToggleFromServer", !1, !0), He.yR("syncedInvenFromServer")
    }
    var Ui = He(39802),
      Fi = He(9663),
      Ji = He(39808),
      oi = He(2020);
    var Ri = He(4891);

    function ki(ee) {
      const ie = ee.xR;
      let He = 0,
        be = -1,
        Ke = -1 / 0,
        Ue = null,
        Fe = !0;
      const oe = () => {
        if (++He % 10 !== 0) return;
        const oe = (0, ye.getLastReceivedPacketId)();
        if (oe <= be) return;
        const [Re, ke, qe] = ee.sE.pE(ee.gC), fe = ! function(ee) {
          var ie;
          let He = null === (ie = ee.sE.jye(ee.gC)) || void 0 === ie ? void 0 : ie.Df;
          if (void 0 === He) return !1;
          const ye = new Set;
          for (; void 0 !== He && !ye.has(He);) {
            var be;
            ye.add(He);
            const ie = ee.sE.getState(He, "smoothToServerPos"),
              Me = Array.isArray(ie) ? null : null === ie || void 0 === ie ? void 0 : ie.serverPosition;
            if (Me) {
              const ie = ee.sE.pE(He);
              if (Math.abs(ie[0] - Me[0]) > 10 || Math.abs(ie[1] - Me[1]) > 10 || Math.abs(ie[2] - Me[2]) > 10) return !0
            }
            He = null === (be = ee.sE.jye(He)) || void 0 === be ? void 0 : be.Df
          }
          return !1
        }(ee) && function(ee, ie, He, ye) {
          const be = Me.g.BR;
          for (let Me = 0; Me < ee.length; Me++) {
            const Ke = ee[Me];
            if (!(0, Ri.h)(ie, He, ye, Ke[0] * be, Ke[1] * be, Ke[2] * be)) return !1
          }
          return !0
        }(ie.Tp.JR, Re, ke, qe), Te = null === Ue || Math.abs(Re - Ue[0]) > 8 || Math.abs(ke - Ue[1]) > 8 || Math.abs(qe - Ue[2]) > 8, pe = !Fe || Te || performance.now() - Ke >= 1e4;
        Fe = fe, fe && pe && (be = oe, Ke = performance.now(), Ue = [Re, ke, qe], (0, ye.sendColyMessage)(Je.mg, {
          DJ: oe
        }))
      };
      return ee.on("YR", oe), () => {
        ee.off("YR", oe)
      }
    }
    var qi = He(39814),
      fi = He(1502),
      Ti = He(2966),
      Xi = He(1857),
      zi = He(3142),
      Bi = He(5255);
    class Ei {
      constructor(ee, ie, He) {
        this.uk = ee, this.gameNameWithVariation = ie, this.connectionResume = He, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        Bi.d.reset(), (0, Ui.d)()
      }
      startChunkReports() {
        const ee = function(ee) {
            let ie = null,
              He = -1 / 0,
              be = null;
            const Me = () => {
                be = null;
                const Me = Math.ceil(ee.mY[0]),
                  Ke = Math.ceil(ee.mY[1]);
                ie && ie[0] === Me && ie[1] === Ke || (ie = [Me, Ke], He = performance.now(), (0, ye.sendColyMessage)(Je.kg, {
                  iR: Me,
                  HR: Ke
                }))
              },
              Ke = () => {
                null === be && (be = setTimeout(Me, Math.max(0, He + 250 - performance.now())))
              };
            return Me(), ee.on("addRemoveDistanceChanged", Ke), () => {
              ee.off("addRemoveDistanceChanged", Ke), null !== be && (clearTimeout(be), be = null)
            }
          }(this.uk.xR),
          ie = ki(this.uk);
        this.stopChunkReports = () => {
          ee(), ie()
        }
      }
      restartChunkStreaming() {
        (0, Hi.g)(this.uk, (0, Fe.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - qi.e)), this.startChunkReports()
      }
      register(ee) {
        const ie = this.uk,
          He = (0, Fe.e)();
        ee.OE(Je.Vc, (ee => {
          ze.c.applyNewClientOptions(ee)
        })), ee.OE(Je.pd, (ee => {
          Ti.c.onReceiveColyseusPing(ee)
        })), ee.OE(Je.Ke, (ee => {
          let {
            key: ie,
            value: He
          } = ee;
          (0, Be.setCookie)(this.gameNameWithVariation, ie, He)
        })), ee.OE(Je.Ne, (ee => {
          Xe.h.yR("setDiscordReportKey", ee)
        })), (0, ye.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), ee.OE(Je.oc, (be => {
          const {
            Fe: Me,
            Je: Ke
          } = be;
          if ((0, ye.setAdjustment)(Ke), this.connectionResume.onInitialInfo(be.oe, be.Re), ye.offlineInputReplay.JY(be.ke), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Me);
            try {
              null === be.qe && (0, Fe.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), we(ie.xR), ze.c.apply({
                shopInfo: null,
                _shopVersion: oi.c
              });
              const He = ie.sE.oye(ie.gC);
              He.uH && (He.chestClosed(), Xe.h.yR("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Xe.h.yR("initInfoReceived", ee)
            } finally {
              const ee = null === be.qe ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = ee, this.connectionResume.onResumeInitialInfo(be.qe, (() => {
                ee.endSeq = (0, Fe.e)().client.inventoryPrediction.lastActionSeq
              })), null === ee && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Me), Xe.h.yR("sessionReplayJoinTicket", be.Xe), Xi.c.markAdmitted(), (0, Hi.j)(ie), Xe.h.yR("loadingScreenState", "loadingPage:loadingWorld"), ie.dHe = Me, ie.sE.gHe(ie.gC, ie.sE.names.entityName) && ie.sE.lL(ie.gC, ie.sE.names.entityName), (0, Fe.e)().setEntityName(ie.dHe, (0, Fe.e)().getRawEntityName(ie.gC)), ie.zC[ie.dHe] = {}, ie.sE.uL(ie.gC, ie.sE.names.entityName), Xe.h.yR("initInfoReceived", ee), this.startChunkReports(), He.client.onServerConnectionFinalised()
        })), ee.OE(Je.qe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const ee = this.replayResume;
            if (this.replayResume = null, !ee) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: He
            } = (0, Fe.e)().client, {
              sync: be
            } = ee, Me = new Set(ye.offlineInputReplay.takeDroppedActions());
            if (be) {
              var Ke;
              const ye = null !== (Ke = ee.endSeq) && void 0 !== Ke ? Ke : He.lastActionSeq;
              He.forget((ee => ee > be.Ai && ee <= ye || Me.has(ee))), Ki(ie, He, Xe.h, be.Ai, be.load)
            } else He.dropPending(), He.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), ee.OE(Je.af, (ee => {
          let {
            vH: He,
            nH: ye,
            Ai: be
          } = ee;
          const {
            inventoryPrediction: Me
          } = (0, Fe.e)().client, Ke = () => {
            ie.sE.oye(ie.gC).loadFromString(He)
          };
          this.replayResume && (this.replayResume.sync = {
            Ai: be,
            load: Ke
          }), Ki(ie, Me, Xe.h, be, Ke, ye)
        })), ee.OE(Je.Ed, (ee => {
          let {
            type: ie,
            location1: He,
            location2: ye,
            location3: be,
            score: Me
          } = ee;
          (0, zi.logProgressionEvent)({
            type: ie,
            location1: He,
            location2: ye,
            location3: be,
            score: Me
          })
        })), ee.OE(Je.pe, (ee => {
          let {
            type: ie,
            resourceType: He,
            amount: ye,
            category: be,
            itemName: Me
          } = ee;
          (0, zi.logResourceEvent)({
            type: ie,
            resourceType: He,
            amount: ye,
            category: be,
            itemName: Me
          })
        })), ee.OE(Je.Kc, (ee => {
          let {
            leaveEventType: ie,
            category: He,
            subCategory: ye,
            value: be
          } = ee;
          (0, zi.updateLeaveValue)({
            leaveEventType: ie,
            category: He,
            subCategory: ye,
            value: be
          })
        })), ee.OE(Je.Rb, (ee => {
          let {
            cat1: ie,
            cat2: He,
            cat3: ye,
            value: be
          } = ee;
          (0, zi.logCustomAnalyticsEvent)({
            cat1: ie,
            cat2: He,
            cat3: ye,
            value: be
          })
        })), ee.OE(Je.Gc, (ee => {
          (0, Fe.e)().client.leaveGameUnwanted({
            reason: (0, Fi.b)(ee),
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, fi.navigatePreserveSearch)("/")
        })), ee.OE(Je.ze, (ee => {
          Xe.h.yR("serverUpdating", Date.now() + ee, !0)
        })), ee.OE(Je.Tc, Ji.c), ee.OE(Je.Pc, (ee => {
          console.error(`[logErrorToConsole]: ${ee}`)
        }))
      }
    }
    var gi = He(39818),
      Oi = He(39829),
      di = He(1033),
      Wi = He(39826),
      ti = He(2518),
      Zi = He(4025);
    class wi {
      constructor(ee, ie) {
        this.uk = ee, this.clientApi = ie
      }
      register(ee) {
        const ie = this.uk,
          He = (0, Fe.e)();
        ee.OE(Je.xb, (ee => {
          let {
            chatMsgId: ie,
            worldCodeLineId: He,
            content: ye,
            chatterEId: be,
            chatterObjectsToReplay: Me
          } = ee;
          Xe.h.yR("chat", {
            serverChatMsgId: ie,
            worldCodeLineId: He,
            content: ye,
            chatterEId: be,
            chatterObjectsToReplay: Me
          }, !0)
        })), ee.OE(Je.vb, (ee => {
          let {
            chatMsgId: ie
          } = ee;
          Xe.h.yR("chatRemoved", ie, !0)
        })), ee.OE(Je.df, (ee => {
          Xe.h.yR("TopRightHelper", ee, !0)
        })), ee.OE(Je.bf, (ee => {
          (0, gi.e)(ee)
        })), ee.OE(Je.Hc, (ee => {
          let {
            category: ie,
            timeframe: He,
            data: ye
          } = ee;
          Xe.h.yR("leaderboardResponse", {
            category: ie,
            timeframe: He,
            data: ye
          })
        })), ee.OE(Je.$e, (() => {
          Xe.h.yR("showShopTutorial", null, !0)
        })), ee.OE(Je.Ad, (ee => {
          Xe.h.yR("progressBarUpdate", ee, !0)
        })), ee.OE(Je.sc, (ee => {
          Xe.h.yR("middleScreenBarInitiate", {
            duration: ee.Ky,
            Uy: ee.Uy,
            horizBarRemOffset: ee.Fy
          }, !0)
        })), ee.OE(Je.Ud, (() => {
          Xe.h.yR("middleScreenBarRemove", !0)
        })), ee.OE(Je.Le, (ee => {
          let {
            id: ie,
            position: He,
            style: ye,
            Ji: be,
            Ri: Me
          } = ee;
          Xe.h.yR("setDirectionArrow", {
            id: ie,
            position: He,
            style: ye,
            text: (0, Je.D)(be),
            Ri: Me
          }, !0)
        })), ee.OE(Je.Eb, (ee => {
          let {
            id: ie
          } = ee;
          Xe.h.yR("clearDirectionArrow", {
            id: ie
          }, !0)
        })), ee.OE(Je.Qb, (ee => {
          (0, Zi.onCosmeticPackGranted)(ee)
        })), ee.OE(Je.ad, (ee => {
          let {
            id: ie,
            Ci: He
          } = ee;
          const {
            type: be,
            params: Me
          } = (0, Oi.e)(He), Ke = {
            ...Me
          };
          for (const ye of Oi.c) ye in Ke && Ke[ye] && (Ke[ye] = (0, Je.D)(Ke[ye]));
          Bi.d.queueQTE(ie, be, Ke).getResult().then((ee => {
            "boolean" === typeof ee && (0, ye.sendColyMessage)(Je.xi, {
              qteId: ie,
              qteResponse: ee
            })
          }))
        })), ee.OE(Je.Wd, (ee => {
          Bi.d.cancelQTE(ee)
        })), (0, ye.onGameResetOnce)((() => {
          Bi.d.reset()
        })), ee.OE(Je.cd, (ee => {
          let {
            id: ie,
            clientParameters: He
          } = ee;
          (0, Ui.f)(ie, He)
        })), ee.OE(Je.Zd, (ee => {
          (0, Ui.h)(ee)
        })), ee.OE(Je.ff, (ee => {
          let {
            text: ie,
            id: He,
            destructive: be
          } = ee;
          (0, Ui.k)(He, ie, be, (ee => {
            (0, ye.sendColyMessage)(Je.Yj, {
              Ro: He,
              ko: ee,
              qo: 5
            })
          }))
        })), ee.OE(Je.id, (ee => {
          let {
            info: ie
          } = ee;
          Xe.h.yR("overShopInfo", ie, !0)
        })), ee.OE(Je.dc, (ee => {
          let {
            Yi: He,
            Vi: ye
          } = ee;
          this.clientApi.openShop(ie.gC, He, ye)
        })), ee.OE(Je.bc, (ee => {
          let {
            ze: ie,
            ge: He,
            Oe: ye
          } = ee;
          Xe.h.yR("flyingMiddleMessage", {
            content: (0, Je.D)(ie),
            ge: He,
            Oe: ye
          }, !0)
        })), ee.OE(Je.vf, (ee => {
          const ie = ee === di.f ? null : {
            message: `Currently loaded as variation: ${ee}`,
            type: "Warning"
          };
          Xe.h.yR("showPermanentBottomMessage", ie, !0)
        })), ee.OE(Je.ec, (ee => {
          let {
            messageType: ie,
            data: ye
          } = ee;
          (0, Wi.g)(ie) ? (0, Wi.c)(ie, ye) : ("freeCamPerms" === ie && He.client.freeCameraController.setPerms(ye.key, ye.value), He.client.triggerGameCallback("onReceivedMessageFromServer", ie, ye))
        })), ee.OE(Je.Kb, ti.l)
      }
    }
    class Di {
      constructor(ee, ie, He, ye) {
        this.gameNameWithVariation = ee, this.uk = He, this.connectionResume = ye, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new ge.c(ie, this.uk)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, ye.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      gRe(ee) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new ge.c(ee, this.uk), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(ee, ie) {
        const He = this.uk,
          ye = ee => {
            this.stateReplicationHandler.setUpIfQueued(ee)
          };
        new Ei(He, this.gameNameWithVariation, this.connectionResume).register(ee), new De(He).register(ee), new Ne(He).register(ee), new ce(He, ye).register(ee), new se(He, ye).register(ee), new wi(He, ie).register(ee), new Mi(He, ye).register(ee)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Pi = He(39832),
      Ai = He(39834),
      Yi = He(660),
      Vi = He(1814);
    class ai {
      constructor(ee, ie, He, ye) {
        this.msgHandler = He, this.listener = ye, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Pi.b({
          reconnect: ee,
          isLive: () => ye.isLive(),
          onReconnected: ee => {
            this.resumeOnRoom(ee)
          },
          onGaveUp: (ee, ie) => {
            ye.onGaveUp(ee, ie)
          },
          freeze: ie,
          releaseSeat: ie => {
            ee(ie).then((ee => {
              ee.leave(!0)
            }), (ee => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", ee)
            }))
          }
        })
      }
      onInitialInfo(ee, ie) {
        this.session.onInitialInfo(ee, ie)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(ee, ie) {
        if (this.session.onResuming(), null === ee) {
          try {
            (0, Fe.e)().client.itemDropPrediction.reset()
          } catch (He) {
            console.error("Error dropping the item drop predictions on resuming", He)
          }
          return ye.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, Fe.e)().client.itemDropPrediction.onResumeReplayOffered(), ye.offlineInputReplay.replayFrom(ee.Te, ie)
      }
      onResumed(ee) {
        this.setSuspended(!1), (0, ye.resendBeacons)();
        try {
          ee()
        } catch (ie) {
          console.error("Error completing the resume", ie)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(ee) {
        const ie = (0, Yi.onVisitSessionGameServerConnected)((() => ee.connection.isOpen));
        ee.WE(ie);
        const He = new Ai.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(ee, "silent"), ee.leave(!1))
        }));
        ee.onStateChange((() => {
          He.heard()
        }));
        const ye = ie => {
          ie.persisted || ee.leave(!0)
        };
        window.addEventListener("pagehide", ye), ee.WE(((ie, He) => {
          if (ee === this.attachedRoom && this.listener.isLive()) return (0, Me.j)(ie) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${ie}, reconnecting`), this.listener.onDropped(ie, He), void this.onConnectionDropped(ee, String(ie))) : void this.listener.onRoomLeft(ie, He)
        })), this.attachedRoom = ee, this.detachRoomListeners = () => {
          ie(), He.dispose(), window.removeEventListener("pagehide", ye)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(ee) {
        ee !== this.suspended && (this.suspended = ee, (0, ye.setConnectionSuspended)(ee), (0, Fe.e)().client.itemDropPrediction.setSuspended(ee))
      }
      detachRoom() {
        var ee;
        null === (ee = this.detachRoomListeners) || void 0 === ee || ee.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(ee, ie) {
        (0, Vi.reportClientError)("disconnect", "Left room", ie), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), ye.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(ee.reconnectionToken)
      }
      resumeOnRoom(ee) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), ee.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, je.r)(), ye.offlineInputReplay.onConnectionReplaced(), this.msgHandler.gRe(ee), this.listener.onReconnected(ee), this.attachRoom(ee)
      }
    }
    var ci = He(3228),
      xi = He(3236),
      Li = He(1305),
      Ci = He(1260),
      vi = He(5129),
      ui = He(3465),
      mi = He(1268),
      li = He(38534),
      Si = He(39837),
      ni = He(9669),
      ji = He(39841),
      si = He(1155),
      Ii = He(37286),
      Ni = He(39845),
      Gi = He(1728),
      ri = He(2975),
      Qi = He(1490);

    function eH(ee) {
      var ie, He;
      if ("object" !== typeof ee || null === ee) return {
        errType: typeof ee
      };
      const ye = ee;
      return {
        errType: null !== (ie = null === (He = ee.constructor) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : "",
        errName: "string" === typeof ye.name ? ye.name : "",
        eventType: "string" === typeof ye.type ? ye.type : "",
        errStack: "string" === typeof ye.stack ? ye.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function iH(ee) {
      if ("undefined" !== typeof ProgressEvent && ee instanceof ProgressEvent) return !0;
      if (!(ee instanceof Error)) return !1;
      const ie = ee.code;
      return "ServerError" === ee.name && void 0 === ie || "AbortError" === ee.name || "seat reservation expired." === ee.message || "early_leave" === ee.message
    }(0, Te.l)((ee => {
      (0, Vi.reportClientError)("wasm_net", ee)
    }));
    let HH = !0;

    function yH() {
      HH = !1
    }
    class bH {
      constructor(ee) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.uk = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = ee.gameNameWithVariation, this.lobbyName = ee.lobbyName, this.colyClient = ee.colyClient, this.userContext = ee.userContext
      }
      async connectToServer(ee, ie, He) {
        ze.c.reset(), ee.zC = {
          [ee.gC]: {}
        }, ee.dHe = void 0, (0, je.r)(), (0, Fe.e)().removeAllEntityNames(), (0, Fe.e)().setEntityName(ee.gC, this.userContext.getPlayerName()), (0, Li.v)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, Gi.g)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Ke = performance.now();
        He.aborted || (0, Ci.n)("wasm_core_ready", Ke);
        const Ue = (0, ji.f)(this.userContext, (() => {
          const {
            roomName: ye,
            joinOptions: be
          } = (0, Ee.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, ie, (ee => ui.c.isUsingCustomGameTexturePack(ee)));
          return be.joinAdHold = this.joinAdHold, be.renderBackend = (0, ri.e)(ee.PR), (0, Si.e)((() => this.colyClient.joinOrCreateUntil(He, ye, be)), He)
        }));
        return Xe.h.yR("loadingScreenState", "loadingPage:joiningLobby"), await Ue.then((ie => {
          if (this.joinedAt = performance.now(), (0, Ci.n)("wasm_joined", this.joinedAt), this.uk = ee, this.joinAdHold) {
            const ee = (0, Gi.s)((() => {
              ie.send(be.f), (0, Ci.k)(), Xi.c.markJoinAdEnded()
            }));
            ie.WE(ee), (0, ye.onGameResetOnce)(ee)
          }
          const He = new pe(ie);
          this.connectionResume = new ai((ee => this.colyClient.reconnect(ee)), (ie => {
            ee.vY(ie)
          }), He, {
            isLive: () => (0, Fe.e)().client.getMsgHandler() === He,
            onDropped: (ee, ie) => {
              (0, xi.i)(ee) || this.logUnrecognisedConnectionLoss(ee, void 0, {
                site: "drop",
                closeReason: null !== ie && void 0 !== ie ? ie : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (ee, ie) => {
              this.onRoomLeft(ee, ie)
            },
            onReconnected: ee => {
              this.incomingMsgInitialisor.gRe(ee), this.checkSendPath = (0, li.h)(He, ee, Te.m)
            },
            onGaveUp: (ee, ie) => {
              this.onResumeGaveUp(ee, ie)
            }
          }), this.connectionResume.attachRoom(ie), (0, ye.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Me = He.send,
            Ke = He.OE,
            Ue = He.kbe.send,
            Je = He.kbe.OE,
            oe = He.BRe;
          this.checkSendPath = (0, li.h)(He, ie, Te.m);
          const Re = setInterval((() => {
            Me === He.send && Ke === He.OE && Ue === He.kbe.send && Je === He.kbe.OE && oe === He.BRe || yH(), this.checkSendPath()
          }), 1e4);
          return (0, ye.onGameResetOnce)((() => {
            clearInterval(Re)
          })), {
            success: !0,
            successDetails: He
          }
        })).catch((ie => {
          if (He.aborted && ie === (0, si.f)(He)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (ie instanceof Ii.d) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: ie.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, Ni.e)(ie, ie.leg)
            }
          };
          ee.CT(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${ie.code}\n`, ie);
          const ye = ie.code;
          return ye === Me.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Me.c.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(ye, ie.message, {
                site: "join",
                sinceJoinStart: (0, xi.e)(performance.now() - Ke),
                ...eH(ie)
              }, iH(ie)),
              rematch: (0, Si.d)(ie),
              gameRefused: (0, ni.d)(ie),
              joinFailure: (0, Ni.e)(ie, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(ee, ie, He) {
        Xe.h.yR("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Di(this.gameNameWithVariation, ie.kbe, ee, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const be = ie.tRe();
        this.incomingMsgInitialisor.setupOnMessageListeners(be, He), (0, ye.onConnectionToServerReady)(be, ie), this.joinAdHold && Xi.c.markAdmissionAwaited(), be.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(ee, ie) {
        (0, mi.vT)(new Error("Reconnect failed"), {
          ...(0, ci.l)(ie),
          game: this.gameNameWithVariation
        }), (0, Vi.reportClientError)("disconnect", "Reconnect failed", ie.reason), (0, Fe.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !ee,
          canPlayAgain: ee,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, fi.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, xi.e)(performance.now() - this.joinedAt)
      }
      onRoomLeft(ee, ie) {
        var He;
        if (ee === Me.c.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${ee}`), ee === Me.c.serverUpdating.code) return (0, Vi.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, Fe.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.uk.CT(`Kicked from server with code ${ee}`, new Error);
        const ye = Object.keys(Me.c).find((ie => Me.c[ie].code === ee));
        (0, Vi.reportClientError)("disconnect", "Left room", null !== ye && void 0 !== ye ? ye : String(ee)), Qi.b.leftGame(this.gameNameWithVariation, ee);
        const be = this.onConnectionToServerLost(ee, void 0, {
          site: "leave",
          closeReason: null !== ie && void 0 !== ie ? ie : "",
          sinceJoined: this.sinceJoined()
        });
        (0, Fe.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${be.reason}`,
          canReconnect: be.canReconnect,
          requiresRefresh: be.requiresRefresh,
          automaticallyReconnect: null !== (He = be.automaticallyReconnect) && void 0 !== He && He
        }), (0, fi.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, vi.D)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, fi.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(ee, ie, He) {
        var ye;
        let be = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (ye = ie) && void 0 !== ye && ye.endsWith(Me.l) && (this.userContext.invalidateTrafficCode(), ie = ie.replace(Me.l, "")), ee === Me.c.outdatedVersion.code) return console.error("Outdated client with version ", Ke.b, ", refreshing page"), (0, Be.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (ee === Me.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Be.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Ke in Me.c) {
          const {
            code: He,
            text: ye,
            canReconnect: be
          } = Me.c[Ke];
          if (He === ee) {
            console.log("matched known error", ee, "leaving game");
            return {
              reason: "" !== ye ? ye : ie || `Code: ${ee}`,
              requiresRefresh: !1,
              canReconnect: be,
              automaticallyReconnect: He === Me.c.customGameUpdated.code || He === Me.c.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, xi.h)(ee) || be ? console.warn("Connection lost", ee, ie) : this.logUnrecognisedConnectionLoss(ee, ie, He), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${ee}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: be ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(ee, ie, He) {
        (0, mi.vT)(new Error("Unrecognised connection loss"), {
          code: String(ee),
          cause: null !== ie && void 0 !== ie ? ie : "",
          ...He,
          game: this.gameNameWithVariation,
          ...(0, xi.j)()
        })
      }
    }
  },
  39760: (ee, ie, He) => {
    He.d(ie, {
      c: () => hH,
      f: () => iy
    });
    var ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce, ve, ue, me, le, Se, ne, je, se, Ie, he, Ne, Ge, re, Qe, ei, ii, Hi, yi, bi, Mi, Ki, Ui, Fi, Ji, oi, Ri, ki, qi, fi, Ti, Xi, zi, Bi, Ei, gi, Oi, di, Wi, ti, Zi, wi, Di, Pi, Ai, Yi, Vi, ai, ci, xi, Li, Ci, vi, ui, mi, li, Si, ni, ji, si, Ii, Ni, Gi, ri, Qi, eH = He(27),
      iH = He(37965),
      HH = He(39775),
      yH = He(39778),
      bH = He(9870),
      MH = He(608),
      KH = He(604),
      UH = He(37620);
    let FH = (ye = (0, bH.type)("number"), be = (0, bH.type)("number"), Me = (0, bH.type)("number"), Ke = (0, bH.type)("number"), Ue = (0, bH.type)("number"), Fe = (0, bH.type)("number"), Je = (0, bH.type)("string"), oe = class extends bH.Schema {
        constructor() {
          super(...arguments), (0, HH.e)(this, "id", Re, this), (0, HH.e)(this, "amount", ke, this), (0, HH.e)(this, "x", qe, this), (0, HH.e)(this, "y", fe, this), (0, HH.e)(this, "z", Te, this), (0, HH.e)(this, "size", pe, this), (0, HH.e)(this, "attributes", Xe, this)
        }
      }, Re = (0, yH.e)(oe.prototype, "id", [ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ke = (0, yH.e)(oe.prototype, "amount", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qe = (0, yH.e)(oe.prototype, "x", [Me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fe = (0, yH.e)(oe.prototype, "y", [Ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Te = (0, yH.e)(oe.prototype, "z", [Ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pe = (0, yH.e)(oe.prototype, "size", [Fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Xe = (0, yH.e)(oe.prototype, "attributes", [Je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), oe),
      JH = (ze = (0, bH.type)("string"), Be = (0, bH.type)("string"), Ee = class extends bH.Schema {
        constructor() {
          super(...arguments), (0, HH.e)(this, "itemName", ge, this), (0, HH.e)(this, "enchantmentTier", Oe, this)
        }
      }, ge = (0, yH.e)(Ee.prototype, "itemName", [ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Oe = (0, yH.e)(Ee.prototype, "enchantmentTier", [Be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ee),
      oH = (de = (0, bH.type)("string"), We = (0, bH.type)("string"), te = (0, bH.type)("number"), Ze = (0, bH.type)("number"), we = (0, bH.type)("number"), De = (0, bH.type)("float32"), Pe = (0, bH.type)("float32"), Ae = (0, bH.type)("float32"), Ye = (0, bH.type)("string"), Ve = (0, bH.type)(["number"]), ae = (0, bH.type)("boolean"), ce = class extends bH.Schema {
        constructor() {
          super(...arguments), (0, HH.e)(this, "type", xe, this), (0, HH.e)(this, "name", Le, this), (0, HH.e)(this, "x", Ce, this), (0, HH.e)(this, "y", ve, this), (0, HH.e)(this, "z", ue, this), (0, HH.e)(this, "xRotation", me, this), (0, HH.e)(this, "yRotation", le, this), (0, HH.e)(this, "zRotation", Se, this), (0, HH.e)(this, "followingEId", ne, this), (0, HH.e)(this, "followingOffset", je, this), (0, HH.e)(this, "shouldMatchFollowingEntityRotation", se, this)
        }
      }, xe = (0, yH.e)(ce.prototype, "type", [de], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Le = (0, yH.e)(ce.prototype, "name", [We], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Ce = (0, yH.e)(ce.prototype, "x", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ve = (0, yH.e)(ce.prototype, "y", [Ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ue = (0, yH.e)(ce.prototype, "z", [we], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), me = (0, yH.e)(ce.prototype, "xRotation", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), le = (0, yH.e)(ce.prototype, "yRotation", [Pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Se = (0, yH.e)(ce.prototype, "zRotation", [Ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ne = (0, yH.e)(ce.prototype, "followingEId", [Ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), je = (0, yH.e)(ce.prototype, "followingOffset", [Ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new bH.ArraySchema(0, 0, 0)
        }
      }), se = (0, yH.e)(ce.prototype, "shouldMatchFollowingEntityRotation", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), ce),
      RH = (Ie = (0, bH.type)("float32"), he = (0, bH.type)("float32"), Ne = (0, bH.type)("boolean"), Ge = (0, bH.type)("boolean"), re = (0, bH.type)("float32"), Qe = (0, bH.type)("boolean"), ei = (0, bH.type)("string"), ii = (0, bH.type)("string"), Hi = (0, bH.type)("string"), yi = (0, bH.type)("string"), bi = (0, bH.type)(["number"]), Mi = (0, bH.type)("number"), Ki = (0, bH.type)({
        map: JH
      }), Ui = class extends oH {
        constructor() {
          super(...arguments), (0, HH.e)(this, "scale", Fi, this), (0, HH.e)(this, "speed", Ji, this), (0, HH.e)(this, "jumping", oi, this), (0, HH.e)(this, "crouching", Ri, this), (0, HH.e)(this, "cameraPitch", ki, this), (0, HH.e)(this, "armSwinging", qi, this), (0, HH.e)(this, "heldItemName", fi, this), (0, HH.e)(this, "heldItemEnchantmentTier", Ti, this), (0, HH.e)(this, "pose", Xi, this), (0, HH.e)(this, "ridingVehicleEId", zi, this), (0, HH.e)(this, "meshOffset", Bi, this), (0, HH.e)(this, "baseRenderHeading", Ei, this), (0, HH.e)(this, "armour", gi, this)
        }
      }, Fi = (0, yH.e)(Ui.prototype, "scale", [Ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Ji = (0, yH.e)(Ui.prototype, "speed", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oi = (0, yH.e)(Ui.prototype, "jumping", [Ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Ri = (0, yH.e)(Ui.prototype, "crouching", [Ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), ki = (0, yH.e)(Ui.prototype, "cameraPitch", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qi = (0, yH.e)(Ui.prototype, "armSwinging", [Qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), fi = (0, yH.e)(Ui.prototype, "heldItemName", [ei], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ti = (0, yH.e)(Ui.prototype, "heldItemEnchantmentTier", [ii], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Xi = (0, yH.e)(Ui.prototype, "pose", [Hi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), zi = (0, yH.e)(Ui.prototype, "ridingVehicleEId", [yi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Bi = (0, yH.e)(Ui.prototype, "meshOffset", [bi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new bH.ArraySchema(0, 0, 0)
        }
      }), Ei = (0, yH.e)(Ui.prototype, "baseRenderHeading", [Mi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gi = (0, yH.e)(Ui.prototype, "armour", [Ki], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new bH.MapSchema
        }
      }), Ui),
      kH = (Oi = (0, bH.type)("string"), di = (0, bH.type)("string"), Wi = (0, bH.type)("string"), ti = (0, bH.type)("uint8"), Zi = class extends RH {
        constructor() {
          super(...arguments), (0, HH.e)(this, "variation", wi, this), (0, HH.e)(this, "ownerDbId", Di, this), (0, HH.e)(this, "metaInfo", Pi, this), (0, HH.e)(this, "aiState", Ai, this)
        }
      }, wi = (0, yH.e)(Zi.prototype, "variation", [Oi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Di = (0, yH.e)(Zi.prototype, "ownerDbId", [di], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Pi = (0, yH.e)(Zi.prototype, "metaInfo", [Wi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Ai = (0, yH.e)(Zi.prototype, "aiState", [ti], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Zi);
    Yi = (0, bH.type)("string"), Vi = (0, bH.type)("string"), ai = (0, bH.type)("string"), ci = (0, bH.type)("string"), xi = class extends oH {
      constructor() {
        super(...arguments), (0, HH.e)(this, "meshKind", Li, this), (0, HH.e)(this, "meshOpts", Ci, this), (0, HH.e)(this, "pose", vi, this), (0, HH.e)(this, "leaderboardTop", ui, this)
      }
    }, Li = (0, yH.e)(xi.prototype, "meshKind", [Yi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Ci = (0, yH.e)(xi.prototype, "meshOpts", [Vi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), vi = (0, yH.e)(xi.prototype, "pose", [ai], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ui = (0, yH.e)(xi.prototype, "leaderboardTop", [ci], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function qH(ee) {
      return Object.keys(bH.Metadata.getFields(ee))
    }
    const fH = qH(kH);
    for (const Hy of MH.p)
      if (!fH.includes(Hy)) throw new Error(`Mob Schema is missing a networked property: "${Hy}"`);
    const TH = qH((mi = (0, bH.type)("string"), li = (0, bH.type)("float32"), Si = (0, bH.type)("float32"), ni = (0, bH.type)("float32"), ji = (0, bH.type)("float32"), si = class extends oH {
      constructor() {
        super(...arguments), (0, HH.e)(this, "soundName", Ii, this), (0, HH.e)(this, "volume", Ni, this), (0, HH.e)(this, "refDistance", Gi, this), (0, HH.e)(this, "maxHearDist", ri, this), (0, HH.e)(this, "rate", Qi, this)
      }
    }, Ii = (0, yH.e)(si.prototype, "soundName", [mi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), Ni = (0, yH.e)(si.prototype, "volume", [li], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Gi = (0, yH.e)(si.prototype, "refDistance", [Si], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return UH.j
      }
    }), ri = (0, yH.e)(si.prototype, "maxHearDist", [ni], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return UH.b
      }
    }), Qi = (0, yH.e)(si.prototype, "rate", [ji], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), si));
    for (const Hy of KH.h)
      if (!TH.includes(Hy)) throw new Error(`AudioEntity Schema is missing a replicated property: "${Hy}"`);
    var pH = He(39226),
      XH = He(1189),
      zH = He(610),
      BH = He(39015),
      EH = He(4598),
      gH = He(347),
      OH = He(38020),
      dH = He(38927),
      WH = He(2278),
      tH = He(37992),
      ZH = He(39252),
      wH = He(38419),
      DH = He(352),
      PH = He.n(DH),
      AH = He(38777),
      YH = He(37906),
      VH = He(38901),
      aH = He(38938);
    class cH {
      constructor(ee, ie) {
        this.bloxd = ee, this.eId = ie, this.uk = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.xf = !1, this.uk = ee.uk
      }
      initClient(ee) {
        var ie, He, ye;
        this.colyseusEntity = ee, this.meshKind = ee.meshKind, this.meshOpts = ee.meshOpts, this.leaderboardTop = ee.leaderboardTop, this.uk.sE.add([ee.x, ee.y, ee.z], 1, 1, null, null, !1, !1, this.eId), this.uk.sE.uL(this.eId, "smoothToServerPos");
        const be = "Person" === this.meshKind;
        this.uk.sE.uL(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...be ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: be ? [{
            nodeName: "HeadMesh",
            softTolerance: ZH.k,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = eH.h.subscribe(`otherEntitySettings|${this.eId}|canSee`, (ee => {
          this.updateHidingMeshMgr()
        }));
        const Me = () => {
          const ee = this.uk.sE.rHe(this.eId);
          if (!ee) return;
          const ie = (0, wH.h)(this.eId);
          if ("number" === typeof ee.Ix) {
            var He, ye, be, Me;
            const Ke = null === (He = (0, WH.h)("head", null === (be = this.getSpec()) || void 0 === be || null === (Me = be.opts.textures) || void 0 === Me ? void 0 : Me.head)) || void 0 === He || null === (ye = He.personModel) || void 0 === ye ? void 0 : ye.fullBody;
            return this.uk.PR.vx.setPickable(ee.Ix, ie && !Ke), void(0, YH.updatePersonAttachmentPickability)(this.uk, this.eId, ie)
          }
          const Ke = ee.mesh;
          if (Ke)
            for (const Ue of [Ke, ...Ke.getChildMeshes(!1)]) "Mp" in Ue && !Ue.name.startsWith("Cape|") && (Ue.Mp = ie)
        };
        this.canAttackSub = eH.h.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Me), this.interactableSub = eH.h.subscribe(`otherEntitySettings|${this.eId}|interactable`, Me), this.overlayColourSub = eH.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (ee => {
          this.updateOverlayColour(ee)
        })), this.opacitySub = eH.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (ee => {
          this.updateOpacity(ee)
        })), this.zIndexSub = eH.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (ee => {
          this.updateZIndex(ee)
        }));
        const Ke = this.uk.zC[this.uk.gC][this.eId];
        this.updateOverlayColour(null !== (ie = null === Ke || void 0 === Ke ? void 0 : Ke.overlayColour) && void 0 !== ie ? ie : null), this.updateOpacity(null !== (He = null === Ke || void 0 === Ke ? void 0 : Ke.opacity) && void 0 !== He ? He : 1), this.updateZIndex(null !== (ye = null === Ke || void 0 === Ke ? void 0 : Ke.zIndex) && void 0 !== ye ? ye : 0), this.multilineTextBoxSub = (0, tH.t)(this.uk, this.eId)
      }
      onChangeClient(ee, ie) {
        if ("xRotation" === ee || "yRotation" === ee || "zRotation" === ee)(0, tH.x)(this.uk, this.eId, ee, ie);
        else if ("pose" === ee) {
          const ee = this.uk.sE.Uye(this.eId);
          ee && (ee.pose = ie || "standing")
        } else "meshKind" === ee || "meshOpts" === ee ? (this[ee] = ie, this.queueMeshRebuild()) : "name" === ee && "" !== ie ? this.updateHidingMeshMgr() : "leaderboardTop" === ee && (this.leaderboardTop = ie, eH.h.yR(`leaderboardTop|${this.eId}`, ie))
      }
      disposeClient() {
        this.xf = !0, this.uk.sE.deleteEntity(this.eId), eH.h.unsubscribe(this.canSeeSub), eH.h.unsubscribe(this.canAttackSub), eH.h.unsubscribe(this.interactableSub), eH.h.unsubscribe(this.overlayColourSub), eH.h.unsubscribe(this.opacitySub), eH.h.unsubscribe(this.zIndexSub), eH.h.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var ee, ie;
        return {
          canSee: null !== (ee = null === (ie = this.uk.zC[this.uk.gC][this.eId]) || void 0 === ie ? void 0 : ie.canSee) && void 0 !== ee && ee,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var ee, ie, He;
        const {
          uk: ye
        } = this, {
          sE: be
        } = ye, Me = this.getCurrentHidingMeshMgrState();
        if ((0, gH.ee)(this.previousHidingMeshManagerState, Me)) return;
        if (this.previousHidingMeshManagerState = Me, be.lL(this.eId, "hidingMeshManager"), null === (ee = ye.zC[ye.gC][this.eId]) || void 0 === ee || !ee.canSee) return;
        const Ke = this.getSpec();
        if (!Ke) return;
        const {
          type: Ue,
          opts: Fe
        } = Ke;
        "Person" === Ue && (Fe.textures = (0, WH.k)(Fe.textures)), Fe.eId = this.eId, be.uL(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var ee, ie, He;
            "Leaderboard" === Ue && (Fe.leaderboardTop = this.leaderboardTop);
            const Me = this.bloxd.client.meshCreator.getEntityMesh(Ue, Fe, (ee => {
              var ie, He;
              if ("number" === typeof ee) {
                var be, Me, Ke;
                const ie = ye.PR.vx;
                ie.setEntityId(ee, this.eId);
                const He = "Person" === Ue && (null === (be = (0, WH.h)("head", null === (Ke = Fe.textures) || void 0 === Ke ? void 0 : Ke.head)) || void 0 === be || null === (Me = be.personModel) || void 0 === Me ? void 0 : Me.fullBody);
                return void ie.setPickable(ee, (0, wH.h)(this.eId) && !He)
              }
              const Je = ee;
              for (const Ue of [Je, ...Je.getChildMeshes(!1)]) void 0 === Ue.Mp || Ue.name.startsWith("Cape|") || (Ue.Mp = (0, wH.h)(this.eId), Ue.metadata ??= new ye.PR.Kp, Ue.metadata.eId = this.eId);
              this.updateOpacity(null !== (ie = null === (He = ye.zC[ye.gC][this.eId]) || void 0 === He ? void 0 : He.opacity) && void 0 !== ie ? ie : 1)
            }));
            if (!Me) return;
            const {
              Ix: Ke,
              mesh: Je,
              meshOffset: oe,
              nameYOffset: Re,
              modelLoaded: ke
            } = Me;
            null === ke || void 0 === ke || ke.then((() => {
              var ee;
              (null === (ee = be.rHe(this.eId)) || void 0 === ee ? void 0 : ee.mesh) === Je && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const qe = null === Ke ? null : ye.PR.vx.Abe(Ke, 0);
            if (be.uL(this.eId, be.names.mesh, {
                Ix: Ke,
                Xbe: qe,
                mesh: Je,
                SFe: !1,
                Bbe: "Leaderboard" !== Ue,
                offset: oe.slice(),
                lFe: "ParticleEmitter" === Ue && Fe.followTargetMeshOffset ? ee => {
                  var ie;
                  PH().copy(ee, oe);
                  const He = null === (ie = be.jye(this.eId)) || void 0 === ie ? void 0 : ie.Df,
                    ye = void 0 === He ? null : be.Uye(He);
                  if (ye) {
                    var Me, Ke;
                    const ie = this.bloxd.getEntityHeading(null !== (Me = ye.ridingVehicleEId) && void 0 !== Me ? Me : He, !0),
                      be = Math.sin(ie),
                      Ue = Math.cos(ie);
                    ee[0] += ye.meshOffset[0] * Ue + ye.meshOffset[2] * be, ee[1] += ye.meshOffset[1], ee[2] += ye.meshOffset[2] * Ue - ye.meshOffset[0] * be;
                    const Fe = null !== (Ke = ye.ridingVehicleEId) && void 0 !== Ke ? Ke : null;
                    null !== Fe && (0, aH.d)(this.uk, Fe, ee)
                  }
                } : null
              }), "Person" === Ue) {
              var fe, Te, pe, Xe;
              be.uL(this.eId, be.names.meshAttachments, {
                personFullBody: null !== (fe = null === (Te = (0, WH.h)("head", null === (Xe = Fe.textures) || void 0 === Xe ? void 0 : Xe.head)) || void 0 === Te || null === (pe = Te.personModel) || void 0 === pe ? void 0 : pe.fullBody) && void 0 !== fe && fe
              });
              for (const ee of XH.v) {
                var ze, Be, Ee;
                const ie = null === (ze = Fe.textures) || void 0 === ze ? void 0 : ze[ee];
                ie && null !== (Be = (0, WH.h)(ee, ie)) && void 0 !== Be && null !== (Ee = Be.attachments) && void 0 !== Ee && Ee.length && dH.b.Player.meshApi.updatePlayerCosmetic(this.eId, Ke, ee, ie)
              }
              be.uL(this.eId, be.names.moveState), be.uL(this.eId, "updateWalkingState", {
                Ix: Ke,
                Xbe: qe,
                walkingLegSwingDuration: ZH.q
              }), be.uL(this.eId, "humanoidMesh", {
                Ix: Ke,
                Xbe: qe,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), be.uL(this.eId, "animator", {
                Ix: Ke,
                Xbe: qe,
                modelLifeformType: "Player"
              }), VH.f.hasAnimation("Person") && be.uL(this.eId, "rigAnimation", {
                target: "Person",
                Ix: Ke
              }), be.Uye(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === Ue && null !== Ke) {
              be.uL(this.eId, "animator", {
                Ix: Ke,
                Xbe: qe,
                modelLifeformType: null
              });
              const ee = (0, BH.u)(Fe.blockName);
              null !== ee && be.uL(this.eId, "rigAnimation", {
                target: ee,
                Ix: Ke
              })
            }
            be.kJe(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Re
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Fe.autoRotate && (be.lL(this.eId, "meshRotation"), be.uL(this.eId, "autoRotate"));
            const {
              lineToEId: ge
            } = Fe;
            (0, zH.P)(ge) || be.uL(this.eId, "lineToEntity", {
              lineToEId: ge
            });
            const Oe = ye.zC[ye.gC][this.eId];
            this.updateOverlayColour(null !== (ee = null === Oe || void 0 === Oe ? void 0 : Oe.overlayColour) && void 0 !== ee ? ee : null), this.updateOpacity(null !== (ie = null === Oe || void 0 === Oe ? void 0 : Oe.opacity) && void 0 !== ie ? ie : 1), this.updateZIndex(null !== (He = null === Oe || void 0 === Oe ? void 0 : Oe.zIndex) && void 0 !== He ? He : 0)
          },
          removeMeshComponent: () => {
            "Person" !== Ue && "BloxdBlock" !== Ue || be.lL(this.eId, "rigAnimation"), be.lL(this.eId, be.names.mesh), be.gHe(this.eId, be.names.meshAttachments) && be.lL(this.eId, be.names.meshAttachments), be.lL(this.eId, "entityName"), be.lL(this.eId, "autoRotate"), be.lL(this.eId, "lineToEntity"), "Person" === Ue ? (be.lL(this.eId, be.names.moveState), be.lL(this.eId, "updateWalkingState"), be.lL(this.eId, "humanoidMesh"), be.lL(this.eId, "animator")) : "BloxdBlock" === Ue && be.lL(this.eId, "animator")
          },
          hideDist: null !== (ie = Fe.hideDist) && void 0 !== ie ? ie : 80,
          movingHideDist: null !== (He = Fe.hideDist) && void 0 !== He ? He : 120,
          displayOutsideLoadedChunk: Fe.hideDist > 100,
          immediatelyUpdate: !0,
          oJ: "BloxdBlock" === Ue ? Fe.blockName : Ue
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.xf || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, EH.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(ee) {
        var ie, He;
        if ("Person" !== this.meshKind) return;
        let ye = new OH.e(0, 0, 0, 0);
        if (null !== ee) {
          const ie = (0, gH.Y)(ee);
          ye = new OH.e(ie[0] / 255, ie[1] / 255, ie[2] / 255, .5)
        }
        const be = null !== (ie = null === (He = this.uk.sE.rHe(this.eId)) || void 0 === He ? void 0 : He.Ix) && void 0 !== ie ? ie : null;
        null !== be && dH.b.Player.meshApi.updateMeshOverlayColour(be, ye)
      }
      updateZIndex(ee) {
        var ie;
        if ("Person" !== this.meshKind) return;
        const He = null === (ie = this.uk.sE.rHe(this.eId)) || void 0 === ie ? void 0 : ie.Ix;
        "number" === typeof He && this.uk.PR.vx.setRenderingGroupId(He, ee)
      }
      updateOpacity(ee) {
        const ie = this.uk.sE.rHe(this.eId);
        ie && ("number" !== typeof ie.Ix ? ie.mesh && "ParticleEmitter" !== this.meshKind && (0, AH.f)(ie.mesh, ee) : dH.b.Player.meshApi.updateMeshOpacity(ie.Ix, ee))
      }
    }
    var xH = He(39767);
    class LH {
      constructor(ee, ie) {
        this.eId = ie, this.uk = void 0, this.schema = void 0, this.uk = ee.uk
      }
      initClient(ee) {
        this.schema = ee, this.uk.sE.add([ee.x, ee.y, ee.z], .1, .1, null, null, !1, !1, this.eId), this.uk.sE.uL(this.eId, "smoothToServerPos"), xH.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(ee) {
        KH.h.includes(ee) && xH.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        xH.c.remove(this.eId), this.uk.sE.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: ee,
          volume: ie,
          refDistance: He,
          maxHearDist: ye,
          rate: be
        } = this.schema;
        return {
          soundName: ee,
          volume: ie,
          refDistance: He,
          maxHearDist: ye,
          rate: be
        }
      }
    }
    var CH = He(4075),
      vH = He(37590),
      uH = He(7083),
      mH = He(38621),
      lH = He(2969),
      SH = He(38958),
      nH = He(9834),
      jH = He(39267),
      sH = He(38575),
      IH = He(1814);
    class hH {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.kbe = ee, this.uk = ie, this.setupBudgetMs = He, this.now = ye, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.xf = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.qE = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const ee of this.promotedSetups) {
            this.promotedSetups.delete(ee);
            const ie = this.queuedSetups.get(ee);
            ie && (this.queuedSetups.delete(ee), this.timedSetup(ie, ee))
          }
        }, this.createStateCallbacks = (0, nH.getStateCallbacks)(ee), this.roomStateCallbacks = this.createStateCallbacks(ee.state), this.roomState = ee.state, this.setupBudgetLeftMs = He, this.lastRefillMs = ye()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.kbe.onStateChange(this.setUpPromoted), this.uk.on("beforeInputs", this.onFrame), this.uk.on("YR", this.qE)
      }
      setUpQueuedEntities(ee) {
        var ie;
        if ((null === (ie = (0, lH.e)().client.getMsgHandler()) || void 0 === ie ? void 0 : ie.kbe) !== this.kbe) return this.uk.off("beforeInputs", this.onFrame), this.uk.off("YR", this.qE), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (ee && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (PH().copy(NH, this.uk.sE.pE(this.uk.gC)); this.setupBudgetLeftMs > 0;) {
            const ee = this.nearestQueued(NH);
            if (null === ee) return;
            this.setUpIfQueued(ee), this.setUpPromoted()
          }
      }
      nearestQueued(ee) {
        let ie = null,
          He = 1 / 0;
        return this.queuedSetups.forEach(((ye, be) => {
          const Me = function(ee, ie) {
            return (ie.x - ee[0]) ** 2 + (ie.y - ee[1]) ** 2 + (ie.z - ee[2]) ** 2
          }(ee, ye);
          (null === ie || Me < He) && (ie = be, He = Me)
        })), ie
      }
      setUpOrQueue(ee, ie) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(ee, ie) ? this.timedSetup(ee, ie) : this.queuedSetups.set(ie, ee)
      }
      mustSetUpNow(ee, ie) {
        const He = this.uk.dHe;
        if (ie === He) return !0;
        const ye = this.roomState.entities.get(He);
        return !(!ye || ye.ridingVehicleEId !== ie && ye.followingEId !== ie) || (GH(ee.type) === pH.d || (0, lH.e)().getFollowingEntities(ie).length > 0)
      }
      setUpIfQueued(ee) {
        const ie = this.queuedSetups.get(ee);
        ie && (this.queuedSetups.delete(ee), this.timedSetup(ie, ee))
      }
      promoteIfQueued(ee) {
        null !== ee && this.queuedSetups.has(ee) && this.promotedSetups.add(ee)
      }
      timedSetup(ee, ie) {
        const He = this.now();
        this.setupEntity(ee, ie), this.setupBudgetLeftMs -= this.now() - He
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.lE(((ee, ie) => {
          this.uk.dHe ? this.setUpOrQueue(ee, ie) : this.deferEntitySetupUntilInitInfo(ee, ie)
        })), this.roomStateCallbacks.entities.JV(((ee, ie) => {
          const He = this.deferredSetups.get(ie);
          He && (eH.h.unsubscribe(He), this.deferredSetups.delete(ie)), this.queuedSetups.delete(ie), this.detach(ie), (0, lH.e)().client.disposeEntity(ie)
        }))
      }
      deferEntitySetupUntilInitInfo(ee, ie) {
        const He = eH.h.oB("initInfoReceived", (() => {
          this.deferredSetups.delete(ie), this.setUpOrQueue(ee, ie)
        }));
        this.deferredSetups.set(ie, He), (0, CH.onGameResetOnce)((() => {
          this.deferredSetups.get(ie) === He && (eH.h.unsubscribe(He), this.deferredSetups.delete(ie)), (0, lH.e)().updatePositionAndPhysics(this.uk.gC, {
            type: uH.s.DEFAULT,
            tier: null
          }, !0), (0, lH.e)().takeHeldPlayerBodySize(this.uk.gC);
          const ee = this.uk.sE.CHe(this.uk.gC);
          ee && (ee.movementType = uH.o.NORMAL)
        }))
      }
      setupEntity(ee, ie) {
        const He = ie === this.uk.dHe;
        if (He)(0, lH.e)().client.b_(this.uk.gC, null, null);
        else {
          const {
            type: He
          } = ee, ye = GH(He);
          if (void 0 === ye) return void
          function(ee, ie) {
            const He = String(ee);
            if (rH.has(He)) return;
            rH.add(He);
            const ye = He.length > 80 ? `${He.slice(0,80)}...` : He,
              be = `No client handler for entity type ${JSON.stringify(ye)}, so entity ${ie} is not set up`;
            console.warn(be), (0, IH.reportClientError)("uncaught", be, "unknown_entity_type")
          }(He, ie);
          (0, lH.e)().client.b_(ie, ee, new ye((0, lH.e)(), ie, He))
        }
        const ye = this.createStateCallbacks(ee);
        if (He) return this.setupMapSchemaCallbacks(ie, ee, ye, "armour"), this.setupScalarField(ie, ee, ye, "scale"), this.setupScalarField(ie, ee, ye, "ridingVehicleEId"), this.setupScalarField(ie, ee, ye, "followingEId"), this.setupScalarField(ie, ee, ye, "followingOffset"), void this.setupScalarField(ie, ee, ye, "shouldMatchFollowingEntityRotation");
        for (const be of qH(ee.constructor)) ee[be] instanceof bH.MapSchema ? this.setupMapSchemaCallbacks(ie, ee, ye, be) : this.setupScalarField(ie, ee, ye, be)
      }
      setupMapSchemaCallbacks(ee, ie, He, ye) {
        const be = He[ye],
          Me = new Map;
        be.lE(((He, be) => {
          if (this.onEntityFieldChange(ee, ie, ye, {
              key: be,
              value: He
            }), !(He instanceof bH.Schema)) return;
          const Ke = this.createStateCallbacks(He),
            Ue = [];
          for (const Me of qH(He.constructor)) Ue.push(this.listenForFutureChanges(Ke, Me, (() => {
            this.onEntityFieldChange(ee, ie, ye, {
              key: be,
              value: He
            })
          })));
          Me.set(be, (() => {
            for (const ee of Ue) ee()
          }))
        })), be.JV(((He, be) => {
          var Ke;
          null === (Ke = Me.get(be)) || void 0 === Ke || Ke(), Me.delete(be), this.onEntityFieldChange(ee, ie, ye, {
            key: be,
            value: null
          })
        })), this.addDetacher(ee, (() => {
          for (const ee of Me.values()) ee();
          Me.clear()
        }))
      }
      setupScalarField(ee, ie, He, ye) {
        this.onEntityFieldChange(ee, ie, ye, ie[ye]);
        const be = this.listenForFutureChanges(He, ye, (He => {
          this.onEntityFieldChange(ee, ie, ye, He)
        }));
        this.addDetacher(ee, be)
      }
      addDetacher(ee, ie) {
        let He = this.detachers.get(ee);
        He || (He = [], this.detachers.set(ee, He)), He.push(ie)
      }
      detach(ee) {
        for (const He of null !== (ie = this.detachers.get(ee)) && void 0 !== ie ? ie : []) {
          var ie;
          He()
        }
        this.detachers.delete(ee)
      }
      listenForFutureChanges(ee, ie, He) {
        return ee.listen(ie, He, !1)
      }
      onEntityFieldChange(ee, ie, He, ye) {
        switch (He) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(ye);
            const ie = this.uk.sE.Uye((0, vH.b)(ee));
            ie && (ie.ridingVehicleEId = ye);
            break
          }
          case "armour":
            this.handleArmourChange(ee, ye);
            break;
          case "followingEId":
            this.promoteIfQueued(ye), this.handleFollowingEIdChange(ee, ie, ye);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(ee, He, ye);
            break;
          case "scale":
            this.handleScaleChange(ee, ye);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(ee, ye);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(ee, ye);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(ee, ye);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(ee, He, ye)
        }(0, lH.e)().client.updateEntityField(ee, He, ye)
      }
      handleArmourChange(ee, ie) {
        var He, ye;
        const {
          key: be,
          value: Me
        } = ie;
        (0, dH.w)(ee, be, null !== (He = null === Me || void 0 === Me ? void 0 : Me.itemName) && void 0 !== He ? He : null, null !== (ye = null === Me || void 0 === Me ? void 0 : Me.enchantmentTier) && void 0 !== ye ? ye : null)
      }
      handleFollowingEIdChange(ee, ie, He) {
        const ye = (0, vH.b)(ee),
          be = ye === this.uk.gC;
        if (this.uk.sE.lL(ye, this.uk.sE.names.dW), He) this.uk.sE.lL(ye, "smoothToServerPos"), this.uk.sE.uL(ye, this.uk.sE.names.dW, {
          Df: (0, vH.b)(He),
          offset: Array.from(ie.followingOffset),
          sye: ie.shouldMatchFollowingEntityRotation,
          rye: !0,
          Qye: (ee, ye) => {
            if (PH().copy(ee, ie.followingOffset), ie.ridingVehicleEId === He) {
              const ie = (0, vH.b)(He),
                be = (0, lH.e)().getEntityHeading(ie, ye);
              PH().sq(ee, ee, PH().ZERO, be)
            }
          }
        });
        else if (!be) {
          this.uk.sE.gHe(ye, "smoothToServerPos") || this.uk.sE.uL(ye, "smoothToServerPos");
          const ee = this.uk.sE.getState(ye, "smoothToServerPos"),
            ie = this.uk.sE.M_(ye).position;
          (0, sH.setServerPosition)(ee, ie[0], ie[1], ie[2])
        }
      }
      handleRotationChange(ee, ie, He) {
        const ye = "xRotation" === ie ? 0 : "yRotation" === ie ? 1 : 2;
        for (const be of (0, lH.e)().getFollowingEntities(ee)) {
          const ee = this.uk.sE.getState(be, "meshRotation"),
            ie = this.uk.sE.jye(be);
          ee && ie.sye && (ee.serverSetRotation[ye] = He)
        }
      }
      handleScaleChange(ee, ie) {
        const He = (0, vH.b)(ee);
        if (eH.h.yR(`entityScale|${He}`, ie), He === this.uk.gC) {
          var ye;
          (0, lH.e)().removeFromEyeHeightCache(He);
          const ee = this.uk.sE.CHe(this.uk.gC),
            ie = null !== (ye = null === ee || void 0 === ee ? void 0 : ee.physicsState) && void 0 !== ye ? ye : {
              type: uH.s.DEFAULT,
              tier: null
            };
          return void(0, lH.e)().updatePositionAndPhysics(this.uk.gC, ie, !1)
        }
        const be = (0, lH.e)().getLifeformType(He);
        if (null === be) return;
        const {
          physicsBodyWidth: Me,
          physicsBodyHeight: Ke
        } = (0, jH.g)(ie, be);
        this.uk.sE.Sye(He, Me, Ke, Me)
      }
      handleBaseRenderHeadingChange(ee, ie) {
        const He = this.uk.sE.getState(ee, "meshRotation");
        He && (He.baseRenderRotation[1] = ie);
        for (const ye of (0, lH.e)().getFollowingEntities(ee)) {
          const ee = this.uk.sE.getState(ye, "meshRotation"),
            He = this.uk.sE.jye(ye);
          ee && He.sye && (ee.baseRenderRotation[1] = ie)
        }
      }
      handleFollowingOffsetChange(ee, ie) {
        const He = this.uk.sE.jye((0, vH.b)(ee));
        if (He && He.offset) {
          const ee = ie ? Array.from(ie) : PH().ZERO;
          He.offset[0] = ee[0], He.offset[1] = ee[1], He.offset[2] = ee[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(ee, ie) {
        const He = this.uk.sE.jye((0, vH.b)(ee));
        He && (He.sye = null === ie || void 0 === ie || ie)
      }
      handlePositionChange(ee, ie, He) {
        if (this.uk.sE.gHe(ee, "smoothToServerPos")) {
          const ye = this.uk.sE.getState(ee, "smoothToServerPos");
          (0, sH.setServerPositionAxis)(ye, QH[ie], He)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.lE(((ee, ie) => {
          this.allItems[ie] = ee, (0, mH.m)(this.uk, ie, [ee.x, ee.y, ee.z], ee.id, {
            amount: ee.amount,
            attributes: JSON.parse(ee.attributes),
            mM: (0, iH.d)(this.uk).cantPickUpItem(ie),
            size: ee.size,
            predictedAt: (0, lH.e)().client.itemDropPrediction.onServerItemAdded(ie)
          });
          const He = this.createStateCallbacks(ee);
          for (const ye of qH(FH)) this.onItemFieldChange(ie, ye, ee[ye]), this.addDetacher(ie, this.listenForFutureChanges(He, ye, (ee => {
            this.onItemFieldChange(ie, ye, ee)
          })))
        })), this.roomStateCallbacks.items.JV(((ee, ie) => {
          delete this.allItems[ie], this.detach(ie), (0, lH.e)().client.itemDropPrediction.onServerItemRemoved(ie), this.uk.sE.gHe(ie, this.uk.sE.names.itemState) && this.uk.sE.deleteEntity(ie), (0, iH.d)(this.uk).disposeEntity(ie)
        }))
      }
      onItemFieldChange(ee, ie, He) {
        if (ie in QH) {
          if (this.uk.sE.gHe(ee, "itemState")) {
            const ye = this.uk.sE.getState(ee, "smoothToServerPos");
            (0, sH.setServerPositionAxis)(ye, QH[ie], He), (0, lH.e)().client.itemDropPrediction.onServerItemMoved(ee)
          }
          return
        }
        if (!this.uk.sE.gHe(ee, "itemState")) return;
        const ye = this.uk.sE.getState(ee, "itemState");
        "amount" === ie && He !== ye.amount && (ye.creationTime = Date.now()), ye[ie] = "attributes" === ie ? JSON.parse(He) : He
      }
      dispose() {
        if (!this.xf) {
          this.xf = !0, this.uk.off("beforeInputs", this.onFrame), this.uk.off("YR", this.qE), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const ee of this.deferredSetups.values()) eH.h.unsubscribe(ee);
          this.deferredSetups.clear(), this.uk.sE.lL(this.uk.gC, this.uk.sE.names.dW);
          for (const ee in this.allItems) this.uk.sE.deleteEntity(ee), delete this.allItems[ee];
          for (const ee of [...this.detachers.keys()]) this.detach(ee);
          (0, iH.d)(this.uk).clear();
          for (const ee of (0, lH.e)().client.iterateEntityIds())(0, lH.e)().client.disposeEntity(ee)
        }
      }
    }
    const NH = [0, 0, 0];

    function GH(ee) {
      if ("string" !== typeof ee) return;
      const ie = ee.indexOf("|"),
        He = -1 === ie ? ee : ee.slice(0, ie),
        ye = iy();
      return Object.hasOwn(ye, He) ? ye[He] : void 0
    }
    const rH = new Set;
    const QH = {
      x: 0,
      y: 1,
      z: 2
    };
    let ey = null;

    function iy() {
      return null !== ey || (ey = {
        ...Object.fromEntries(KH.j.map((ee => {
          const {
            oJ: ie
          } = (0, SH.b)(ee);
          return [ee, ie]
        }))),
        Pebble: pH.d,
        Snowball: pH.d,
        "Snowball Launcher": pH.d,
        "Reinforced Pebble": pH.d,
        Bullet: pH.d,
        "Reinforced Ball": pH.d,
        Ball: pH.d,
        Mango: pH.d,
        "Moonstone Orb": pH.d,
        ...Object.fromEntries(MH.r.map((ee => [(0, gH.cc)(ee), pH.d]))),
        Arrow: pH.d,
        "Arrow of Speed": pH.d,
        "Arrow of Poison": pH.d,
        "Arrow of Slowness": pH.d,
        "Arrow of Weakness": pH.d,
        "Arrow of Knockback": pH.d,
        "Arrow of Strength": pH.d,
        "Arrow of Invisibility": pH.d,
        "Arrow of Jumping": pH.d,
        "Arrow of Defense": pH.d,
        "Arrow of Instant Healing": pH.d,
        "Arrow of Instant Damage": pH.d,
        "Arrow of Regeneration": pH.d,
        "Arrow of Haste": pH.d,
        "Arrow of Shield": pH.d,
        "Arrow of Double Jump": pH.d,
        "Arrow of Heat Resistance": pH.d,
        "Arrow of X-Ray Vision": pH.d,
        "Arrow of Mining Yield": pH.d,
        "Arrow of Brain Rot": pH.d,
        "Arrow of Milk": pH.d,
        Fireball: pH.d,
        "Bouncy Bomb": pH.d,
        RPG: pH.d,
        "Obby RPG": pH.d,
        "Super RPG": pH.d,
        "Grenade Launcher": pH.d,
        Iceball: pH.d,
        Coconut: pH.d,
        "Splash Speed Potion": pH.d,
        "Splash Defense Potion": pH.d,
        "Splash Strength Potion": pH.d,
        "Splash Invisibility Potion": pH.d,
        "Splash Jump Potion": pH.d,
        "Splash Knockback Potion": pH.d,
        "Splash Poison Potion": pH.d,
        "Splash Speed Potion II": pH.d,
        "Splash Defense Potion II": pH.d,
        "Splash Strength Potion II": pH.d,
        "Splash Jump Potion II": pH.d,
        "Splash Knockback Potion II": pH.d,
        "Splash Poison Potion II": pH.d,
        "Splash Slowness Potion": pH.d,
        "Splash Slowness Potion II": pH.d,
        "Splash Weakness Potion": pH.d,
        "Splash Weakness Potion II": pH.d,
        "Splash Milk Potion": pH.d,
        "Splash Instant Damage Potion": pH.d,
        "Splash Instant Damage Potion II": pH.d,
        "Splash Instant Healing Potion": pH.d,
        "Splash Instant Healing Potion II": pH.d,
        "Splash Regeneration Potion": pH.d,
        "Splash Regeneration Potion II": pH.d,
        "Splash Haste Potion": pH.d,
        "Splash Haste Potion II": pH.d,
        "Splash Shield Potion": pH.d,
        "Splash Shield Potion II": pH.d,
        "Splash Double Jump Potion": pH.d,
        "Splash Heat Resistance Potion": pH.d,
        "Splash X-Ray Vision Potion": pH.d,
        "Splash Mining Yield Potion": pH.d,
        "Splash Mining Yield Potion II": pH.d,
        "Splash Brain Rot Potion": pH.d,
        "Yellow Paintball Gun": pH.d,
        "White Paintball Gun": pH.d,
        "Red Paintball Gun": pH.d,
        "Purple Paintball Gun": pH.d,
        "Pink Paintball Gun": pH.d,
        "Orange Paintball Gun": pH.d,
        "Magenta Paintball Gun": pH.d,
        "Lime Paintball Gun": pH.d,
        "Light Gray Paintball Gun": pH.d,
        "Light Blue Paintball Gun": pH.d,
        "Green Paintball Gun": pH.d,
        "Gray Paintball Gun": pH.d,
        "Cyan Paintball Gun": pH.d,
        "Brown Paintball Gun": pH.d,
        "Blue Paintball Gun": pH.d,
        "Black Paintball Gun": pH.d,
        "Yellow Heavy Paintball Gun": pH.d,
        "White Heavy Paintball Gun": pH.d,
        "Red Heavy Paintball Gun": pH.d,
        "Purple Heavy Paintball Gun": pH.d,
        "Pink Heavy Paintball Gun": pH.d,
        "Orange Heavy Paintball Gun": pH.d,
        "Magenta Heavy Paintball Gun": pH.d,
        "Lime Heavy Paintball Gun": pH.d,
        "Light Gray Heavy Paintball Gun": pH.d,
        "Light Blue Heavy Paintball Gun": pH.d,
        "Green Heavy Paintball Gun": pH.d,
        "Gray Heavy Paintball Gun": pH.d,
        "Cyan Heavy Paintball Gun": pH.d,
        "Brown Heavy Paintball Gun": pH.d,
        "Blue Heavy Paintball Gun": pH.d,
        "Black Heavy Paintball Gun": pH.d,
        "Toxin Ball": pH.d,
        "Splash Aura XP Potion": pH.d,
        "Splash Aura XP Potion II": pH.d,
        "Arrow of Aura XP": pH.d,
        Firecracker: pH.d,
        "Rainbow Firecracker": pH.d,
        "White Firecracker": pH.d,
        "Orange Firecracker": pH.d,
        "Magenta Firecracker": pH.d,
        "Light Blue Firecracker": pH.d,
        "Yellow Firecracker": pH.d,
        "Lime Firecracker": pH.d,
        "Pink Firecracker": pH.d,
        "Gray Firecracker": pH.d,
        "Light Gray Firecracker": pH.d,
        "Cyan Firecracker": pH.d,
        "Purple Firecracker": pH.d,
        "Blue Firecracker": pH.d,
        "Brown Firecracker": pH.d,
        "Green Firecracker": pH.d,
        "Red Firecracker": pH.d,
        "Black Firecracker": pH.d,
        "Firecracker Pebble": pH.d,
        "Rainbow Firecracker Pebble": pH.d,
        "White Firecracker Pebble": pH.d,
        "Orange Firecracker Pebble": pH.d,
        "Magenta Firecracker Pebble": pH.d,
        "Light Blue Firecracker Pebble": pH.d,
        "Yellow Firecracker Pebble": pH.d,
        "Lime Firecracker Pebble": pH.d,
        "Pink Firecracker Pebble": pH.d,
        "Gray Firecracker Pebble": pH.d,
        "Light Gray Firecracker Pebble": pH.d,
        "Cyan Firecracker Pebble": pH.d,
        "Purple Firecracker Pebble": pH.d,
        "Blue Firecracker Pebble": pH.d,
        "Brown Firecracker Pebble": pH.d,
        "Green Firecracker Pebble": pH.d,
        "Red Firecracker Pebble": pH.d,
        "Black Firecracker Pebble": pH.d,
        "Blinding Pebble": pH.d,
        Poop: pH.d,
        "Wood Boomerang": pH.d,
        "Stone Boomerang": pH.d,
        "Iron Boomerang": pH.d,
        "Gold Boomerang": pH.d,
        "Diamond Boomerang": pH.d,
        "Amethite Boomerang": pH.d,
        "Magmasteel Boomerang": pH.d,
        "Rubellite Boomerang": pH.d,
        "Serpentite Boomerang": pH.d,
        "Moonstone Boomerang": pH.d,
        "67 Base Projectile": pH.d,
        "67 Boosted Projectile": pH.d,
        "Capitano Grenade": pH.d,
        "Scatter Pellet": pH.d,
        "Lucky Bomb": pH.d,
        "Unlucky Bomb": pH.d,
        "Swap Orb": pH.d,
        Mesh: cH,
        AudioEntity: LH
      }), ey
    }
  },
  39814: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      i: () => Ke
    });
    var ye = He(610),
      be = He(38536);
    const Me = 4e4;
    class Ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = ee, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(ee, ie, He) {
        const Me = (0, ye.W)(ee),
          Ke = (0, ye.W)(ie),
          Ue = (0, ye.W)(He),
          Fe = this.now();
        if (Me !== this.lastChunkX || Ke !== this.lastChunkY || Ue !== this.lastChunkZ) {
          this.lastChunkX = Me, this.lastChunkY = Ke, this.lastChunkZ = Ue, this.lastChunkId = (0, be.c)(Me, Ke, Ue), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Fe);
          for (const [ee, ie] of this.editedAt) {
            if (ie >= Fe - 3e5) break;
            this.editedAt.delete(ee)
          }
        } else this.editedAt.set(this.lastChunkId, Fe)
      }
      chunksEditedSince(ee) {
        const ie = [];
        for (const [He, ye] of this.editedAt) ye >= ee && ie.push(He);
        return ie
      }
    }
  },
  39857: (ee, ie, He) => {
    He.d(ie, {
      c: () => qi,
      g: () => li,
      h: () => Vi,
      i: () => Si
    });
    var ye = He(4075),
      be = He(9505),
      Me = He(37501),
      Ke = He(1425),
      Ue = He(37574),
      Fe = He(39767),
      Je = He(39756),
      oe = He(4142),
      Re = He(38705),
      ke = He(39860),
      qe = He(1189),
      fe = He(335),
      Te = He(27),
      pe = He(2018),
      Xe = He(97),
      ze = He(35),
      Be = He(2046),
      Ee = He(1952),
      ge = He(3210);
    class Oe {
      constructor(ee) {
        this.storeForMs = ee, this.clicks = new ge.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const ee = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < ee;) this.clicks.dequeue()
      }
      getNumClicksInMs(ee) {
        let ie = 0;
        return this.clicks.forEach((He => {
          He > Date.now() - ee && ie++
        })), ie
      }
      getMaxClickSeparationInMs(ee) {
        if (0 === this.clicks.size) return this.storeForMs;
        let ie = 0,
          He = Date.now() - ee;
        this.clicks.forEach((ye => {
          ye < Date.now() - ee || (ie = Math.max(ie, Math.abs(ye - He)), He = ye)
        }));
        const ye = Math.abs(Date.now() - He);
        return Math.max(ie, ye)
      }
    }
    class de {
      constructor(ee) {
        this.storeForMs = ee, this.clickDownDurations = new ge.d
      }
      registerClickDownDuration(ee) {
        this.clickDownDurations.enqueue({
          dur: ee,
          atTime: Date.now()
        });
        const ie = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < ie;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(ee) {
        if (ee > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let ie = 0,
          He = 0;
        return this.clickDownDurations.forEach((ye => {
          ye.atTime > Date.now() - ee && (ie++, He = Math.max(He, ye.dur))
        })), `${ie}:${He}`
      }
    }
    var We = He(37301),
      te = He(39867),
      Ze = He(18),
      we = He(2969),
      De = He(1305),
      Pe = He(2518),
      Ae = He(4833),
      Ye = He(125),
      Ve = He(38965),
      ae = He(39177),
      ce = He(610),
      xe = He(37294),
      Le = He(8),
      Ce = He(9961),
      ve = He(1169),
      ue = He(186),
      me = He(39874),
      le = He(39879),
      Se = He(39888),
      ne = He(38996),
      je = He(39900),
      se = He(38915),
      Ie = He(3752),
      he = He(1620),
      Ne = He(37424),
      Ge = He(3037),
      re = He(37161),
      Qe = He(37163),
      ei = He(39896),
      ii = He(38779);
    const Hi = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function yi() {
      var ee, ie;
      return !(null === (ee = (0, we.e)().client) || void 0 === ee || null === (ie = ee.freeCameraController) || void 0 === ie || !ie.movesFly())
    }

    function bi(ee) {
      const ie = ee.on.bind(ee);
      ee.on = (ee, He) => {
        Be.B.has(ee) ? ie(ee, He) : ie(ee, (ie => {
          var ye;
          return null !== (ye = (0, we.e)().client) && void 0 !== ye && ye.isReplayMode() ? function(ee) {
            return ee in Hi
          }(ee) && yi() ? He(ie) : void 0 : He(ie)
        }))
      }
    }
    const Mi = 5e3,
      Ki = 1;
    let Ui, Fi = Ki,
      Ji = 0;
    const oi = !0;
    let Ri = oi;
    pe.c.subscribe("_ignoreBasicBoards", (ee => {
      Ri = ee
    })), (0, ye.onGameReset)((() => {
      Ri = oi
    }));
    let ki = null;
    const qi = () => ki;
    let fi, Ti, Xi;
    var zi, Bi, Ei, gi, Oi, di, Wi, ti, Zi;
    const wi = [8, 0, 1, "h", "c", 55, 9, "g", 220, 6, 26, 255, "length", "b", 2, 3, "a", 4, "undefined", void 0, "d", 63, "fromCodePoint", 7, 12, "push", 137, 91, 8191, 88, 13, 14, 127, "i", "e", 183, 68, 83, 65, 51, 46, 5, "f", 128, 235, 122, null, 59, 121, 145, 42, 115, 33, 109, 225, !1, 174, 195, 237, 181, 15, 221, 248, 60];

    function Di(...ee) {
      return ee[wi[12]] = wi[2], typeof zi[ee[wi[1]]] === wi[18] ? zi[ee[wi[1]]] = function(...ee) {
        for (Yi(ee[wi[12]] = wi[2], ee[wi[5]] = 'xnD(^FUEV.d:]tCuByA{hPmvp[JRI2oTj!b8L*K5f@6NzH;k,/_G~"l3SO?aXi=crYg}Z0WM14wQ|`>$e+#q7%<s9&)', ee[wi[0]] = "" + (ee[wi[1]] || ""), ee[wi[4]] = ee[wi[0]].length, ee[wi[10]] = [], ee[wi[8]] = wi[1], ee[wi[9]] = wi[1], ee[wi[7]] = -wi[2]), ee[wi[3]] = wi[1]; ee[wi[3]] < ee[wi[4]]; ee[wi[3]]++)
          if (ee[wi[6]] = ee[wi[5]].indexOf(ee[wi[0]][ee[wi[3]]]), ee[wi[6]] !== -wi[2])
            if (ee[wi[7]] < wi[1]) ee[wi[7]] = ee[wi[6]];
            else {
              Yi(ee[wi[7]] += ee[wi[6]] * wi[27], ee[wi[8]] |= ee[wi[7]] << ee[wi[9]], ee[wi[9]] += (ee[wi[7]] & wi[28]) > wi[29] ? wi[30] : wi[31]);
              do {
                Yi(ee[wi[10]].push(ee[wi[8]] & wi[11]), ee[wi[8]] >>= wi[0], ee[wi[9]] -= wi[0])
              } while (ee[wi[9]] > wi[23]);
              ee[wi[7]] = -wi[2]
            } return ee[wi[7]] > -wi[2] && ee[wi[10]].push((ee[wi[8]] | ee[wi[7]] << ee[wi[9]]) & wi[11]), Pi(ee[wi[10]])
      }(Bi[ee[wi[1]]]) : zi[ee[wi[1]]]
    }

    function Pi(ee) {
      return typeof gi !== wi[18] && gi ? (new gi).decode(new Oi(ee)) : typeof di !== wi[18] && di ? di.from(ee).toString("utf-8") : Zi(ee)
    }

    function Ai() {}

    function Yi() {
      Yi = function() {}
    }

    function Vi(ee) {
      function ie() {
        return ee.sE.Vye(ee.gC)
      }
      bi(ee.inputs.down), bi(ee.inputs.up);
      for (const ye of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const ie = (ie, He) => {
          var be, Me;
          if (yi()) {
            var Ke;
            const be = Hi[ye];
            var Ue, Fe;
            if (be) null === (Ue = (0, we.e)().client) || void 0 === Ue || null === (Fe = Ue.freeCameraController) || void 0 === Fe || Fe.handlefreeCamKeyPress(be, ie, He);
            return void(He || null !== (Ke = (0, we.e)().client) && void 0 !== Ke && Ke.isReplayMode() || (ee.sE.Cye()[ye] = !1))
          }
          if (null !== (be = (0, we.e)().client) && void 0 !== be && null !== (Me = be.freeCameraController) && void 0 !== Me && Me.isKeyPressOverriden(ie)) return;
          ee.sE.Cye()[ye] = He
        };
        ee.inputs.down.on(ye, (ee => ie(ee, !0))), ee.inputs.up.on(ye, (ee => ie(ee, !1)))
      }
      ee.inputs.down.on("crouch", (() => {
        if (yi()) return;
        if (!ee.uE.canCrouch) return;
        const ie = ee.sE.Cye();
        Ze.e.get("clientEscMenuOptions").crouchIsToggle && (ie.crouchToggled = !ie.crouchToggled && !ie.padSneakToggled), ie.padSneakToggled = !1
      }));
      const He = () => {
        const ee = ie();
        ee.isGun() && ee.inaccuracyCalculator.jump()
      };
      ee.inputs.down.on("jump", (ee => {
        yi() || (He(), fi(ee))
      }));
      for (const ye of Be.j) ee.inputs.down.on(ye, (ee => {
        var ie, He;
        null !== (ie = (0, we.e)().client) && void 0 !== ie && null !== (He = ie.freeCameraController) && void 0 !== He && He.handlefreeCamKeyPress(ye, ee, !0) && (ee.preventDefault(), ee.stopPropagation())
      })), ee.inputs.up.on(ye, (ee => {
        var ie, He;
        null !== (ie = (0, we.e)().client) && void 0 !== ie && null !== (He = ie.freeCameraController) && void 0 !== He && He.handlefreeCamKeyPress(ye, ee, !1) && (ee.preventDefault(), ee.stopPropagation())
      }));
      ee.inputs.down.on("recordGame", (() => {
        var ee, ie;
        null === (ee = (0, we.e)().client) || void 0 === ee || null === (ie = ee.gameRecorder) || void 0 === ie || ie.toggleRecording()
      })), ee.inputs.down.on("recordClip", (() => {
        var ee, ie;
        (0, We.e)() || null === (ee = (0, we.e)().client) || void 0 === ee || null === (ie = ee.gameRecorder) || void 0 === ie || ie.saveClip()
      }));
      for (const ye of Be.B) ee.inputs.down.on(ye, (() => {
        var ee;
        if ((0, te.d)()) return;
        if ("replayViewerOpen" === ye) return void Te.h.yR("replayViewer|requested", "toggle");
        const ie = null === (ee = (0, we.e)().client) || void 0 === ee ? void 0 : ee.gameReplayer;
        ((0, We.e)() || null !== ie && void 0 !== ie && ie.isReplayMode()) && (null === ie || void 0 === ie || ie.handleAction(ye))
      }));
      const Ke = new Oe(3e4),
        Re = new de(4e4);
      let ke = 0;
      const ze = ee => {
          let ie = 0,
            He = null;
          const ye = ie => null !== ie && ie === He && (He = null, ee(), !0);
          return {
            press: () => (ie++, (0, me.c)() || (ye(He), He = ie), ie),
            owns: ee => ee === He,
            release: ye
          }
        },
        ge = (ee, He) => {
          He && Si(qe.b.TouchDownFirePrimary), ee ? Ce() : ((0, ae.i)(), ie().wbe()), He || Si(qe.b.DownFirePrimary), li(!0), Ke.click();
          const be = Ke.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Me = Ke.getMaxClickSeparationInMs(1e4) < 20,
            Ue = Ke.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (be || Me || Ue) {
            let ee;
            if (be) ee = 30;
            else if (Me) ee = 50;
            else {
              if (!Ue) throw new Error("???");
              ee = 70
            }(0, ye.sendColyMessage)(oe.lk, ee)
          }
        },
        Ae = new le.b,
        Ye = ze((() => {
          le.b.stopRunning();
          const ee = Date.now() - ke;
          Re.registerClickDownDuration(ee), ie().Wbe(), Si(qe.b.UpFirePrimary), li(!1);
          const He = Re.clickDownDurationsCheck(4e4);
          (0, ye.sendColyMessage)(oe.og, He)
        }));
      let Ve = 0;
      ee.inputs.down.on("primary-fire", (function(ee) {
        Ve = Ye.press(), Ye.owns(Ve) && (ke = Date.now(), Math.abs(performance.now() - ee.timeStamp) > 5e3 || (ge(ee.altKey, "changedTouches" in ee), fi(ee)))
      })), ee.inputs.up.on("primary-fire", (function(ee) {
        Ye.release(Ve) && fi(ee, !0)
      }));
      const ce = () => {
          ie().RRe(), Si(qe.b.DownFireSecondary), li(!0), ee.FHe && !ee.FHe.position && (0, Je.l)()
        },
        xe = ze((() => {
          ie().dbe(), Si(qe.b.UpFireSecondary), li(!1)
        }));
      let Le = 0;
      ee.inputs.down.on("alt-fire", (function(ee) {
        Le = xe.press(), xe.owns(Le) && (ce(), fi(ee))
      })), ee.inputs.up.on("alt-fire", (function(ee) {
        xe.release(Le) && fi(ee, !0)
      }));
      const Ce = () => ie().fRe();
      ee.inputs.down.on("mid-fire", (() => {
        (0, me.c)() || Ce()
      }));
      const je = ee => {
          (0, ye.sendColyMessage)(oe.Kh, ee, !0)
        },
        Ui = ee => {
          (0, ye.sendColyMessage)(oe.Oh, {
            mJ: ee,
            lJ: oi()
          }, !0)
        };
      for (const ye of ["SpecialAction1", "SpecialAction2"]) ee.inputs.down.on(ye, (() => {
        je(ye)
      })), ee.inputs.up.on(ye, (() => {
        Ui(ye)
      }));
      const Ji = () => {
        const ee = ie();
        ee.isGun() && ee.reload(Date.now())
      };
      ee.inputs.down.on("ReloadGun", Ji);
      const oi = () => {
        let ie = "a";
        return ee.physics.testSolid.toString().includes("Mq") || (ie = "b"), ie
      };
      ee.inputs.down.on("OpenInventory", (ee => {
        ee.preventDefault(), (0, he.w)(ee, "inventory", (0, Se.c)((0, we.h)()))
      })), ee.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Ri = ee => {
        Te.h.yR("DropItemKeyPressed", ee)
      };
      ee.inputs.down.on("DropItem", (() => {
        Ri(ee.sE.Cye().crouch)
      })), ee.inputs.down.on("OpenShop", (ie => {
        (0, We.e)() || "inGame" === Ze.e.get("gameState") && (0, he.u)(ie, fe.r.SHOP, !(0, be.b)(ee.uE.shopInfo))
      })), ee.inputs.down.on("OpenLobbyLeaderboard", (ie => {
        (0, We.e)() || "inGame" === Ze.e.get("gameState") && (0, he.u)(ie, fe.r.LOBBY_LEADERBOARD, (0, ei.e)(ee.uE))
      })), ee.inputs.down.on("HideUi", (() => {
        Te.h.yR("showUi", !1)
      })), ee.inputs.up.on("HideUi", (() => {
        Te.h.yR("showUi", !0)
      }));
      const qi = ee => {
        0 === ee && (ee = 10), Te.h.yR("setSelectedInventorySlotI", ee - 1), Te.h.yR("numkeyPressed", ee)
      };
      for (let ye = 1; ye <= 10; ye++) ee.inputs.down.on("HotBarSlot" + ye.toString(), (() => {
        qi(ye)
      }));
      ee.inputs.down.on("OpenTasksAndLeaderboard", (ie => {
        const He = (0, Ne.m)();
        He ? (0, he.y)(ie, !0, He) : (0, he.w)(ie, "retentionFeatures", !(!ee.uE._tasks && !ee.uE._availableLeaderboards))
      })), ee.inputs.down.on("OpenCodeEditor", (ie => {
        (0, he.y)(ie, (0, Pe.d)((0, De.e)()), (() => {
          (0, Pe.i)(ee.sE.pE(ee.gC))
        }))
      })), ee.inputs.bind("ToggleFullCoordinateOverlay", "F3"), ee.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Te.h.yR("toggleFullCoordinateOverlay")
      }));
      const Xi = () => {
        (0, we.e)().client.cameraController.swapCameraZoom()
      };
      ee.inputs.down.on("SwapCameraZoom", Xi), ee.inputs.down.on("OpenInviteLink", (ee => {
        (0, he.w)(ee, "inviteLink", Xe.featureFlags.canUseInviteLinks)
      })), ee.inputs.bind("Y", "KeyY"), ee.inputs.down.on("Y", (ee => {
        (0, We.e)() || Te.h.yR("YKeyPressed")
      })), ee.inputs.bind("X", "KeyX"), ee.inputs.down.on("X", (ee => {
        (0, We.e)() || Te.h.yR("XKeyPressed")
      })), ee.inputs.down.on("OpenEmoteWheel", (() => {
        Te.h.yR("requestEmoteWheelHoldOpen")
      })), ee.inputs.up.on("OpenEmoteWheel", (() => {
        Te.h.yR("requestEmoteWheelHoldRelease")
      })), ee.inputs.down.on("Zoom", (() => {
        if ("inGame" === Ze.e.get("gameState")) {
          ee.sE.getState(ee.gC, "playerCameraAdjustment").zoomKeyPressed = !0, (0, we.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), ee.inputs.up.on("Zoom", (() => {
        ee.sE.getState(ee.gC, "playerCameraAdjustment").zoomKeyPressed = !1
      })), ai();
      const zi = ee => function() {
        return Ti(), ee(...arguments)
      };

      function Bi(ee) {
        "inGame" !== Ze.e.get("gameState") || (0, he.q)() || (Te.h.yR("ctrlCrouchWithoutFullscreen"), ee.preventDefault())
      }
      ki = {
        primaryFireDown: zi((ee => {
          const ie = Ye.press();
          return Ye.owns(ie) && (ke = Date.now(), ge(!1, !1), ee && Ae.start()), ie
        })),
        primaryFireUp: zi((ee => {
          Ye.release(ee)
        })),
        altFireDown: zi((() => {
          const ee = xe.press();
          return xe.owns(ee) && ce(), ee
        })),
        altFireUp: zi((ee => {
          xe.release(ee)
        })),
        jumpDown: zi(He),
        specialActionDown: zi(je),
        specialActionUp: zi(Ui),
        reloadGun: zi(Ji),
        dropItem: zi(Ri),
        swapCameraZoom: zi(Xi),
        pickBlock: zi(Ce)
      }, ee.inputs.down.on("ctrlCrouch", Bi), ee.inputs.up.on("ctrlCrouch", Bi), ee.inputs.bind("ctrlCrouch", "ControlLeft");
      const Ei = ee => {
        "inGame" === Ze.e.get("gameState") && ee.ctrlKey && !(0, he.q)() && ee.preventDefault()
      };
      document.addEventListener("keydown", Ei), document.addEventListener("keyup", Ei), document.addEventListener("keypress", Ei), ee.inputs.bind("Alt", "AltLeft", "AltRight"), ee.inputs.down.on("Alt", (ee => {
        ee.preventDefault()
      }));
      const gi = ie => (0, se.e)(ee, ie),
        Oi = ie => (0, se.f)(ee, ie),
        di = [0, 0, 0],
        Wi = [0, 0, 1];
      ee.on("afterRender", (ie => {
        Qe.p.frame(ie, ee.camera.heading, ee.camera.pitch, Qe.i.drawn), (0, Me.f)(ee.camera.heading), (0, se.g)(ee, di, Wi), (0, we.e)().client.triggerGameCallback("onAfterRender", ie, {
          cameraHeading: ee.camera.heading,
          cameraPitch: ee.camera.pitch,
          cameraPosition: di,
          cameraDirection: Wi,
          tanHalfFovX: (0, se.c)(ee),
          tanHalfFovY: Math.tan(ee.PR.W8().fov / 2),
          screenBandPct: {
            x: Ie.b,
            y: (0, Ie.h)()
          },
          projectWorldPosToScreenPos: gi,
          projectWorldPosToViewport: Oi
        })
      })), ee.camera.VV = (0, re.startLookDebug)("js"), ee.inputs.sV = re.noteLookDroppedCopy, (0, Ge.q)("remesh") && (0, ii.l)(ee), ee.on("beforeInputs", (() => {
        if ((0, te.d)()) return ee.inputs.nG.dx = 0, void(ee.inputs.nG.dy = 0);
        if (ee.camera.nG.dx += ee.inputs.nG.dx, ee.camera.nG.dy += ee.inputs.nG.dy, 0 !== ee.inputs.nG.dx || 0 !== ee.inputs.nG.dy) {
          ee.sE.getState(ee.gC, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        ee.inputs.nG.dx = 0, ee.inputs.nG.dy = 0
      }));
      let ti = 0;
      const Zi = [0, 0, 0],
        wi = [0, 0, 0],
        Di = {
          base: Zi,
          max: wi
        },
        Pi = ee => {
          const ie = ue.g.droppedBlockSize / 2;
          return [0, 1, 2].every((He => ee[He] >= Zi[He] - ie && ee[He] <= wi[He] + ie))
        };
      ee.on("YR", (function(ie) {
        Te.h.yR("noaTick", ie);
        const He = (0, we.e)().client;
        if (He.triggerGameCallback("YR", ie), He.isClientGameSessionActive()) try {
          Fe.c.YR(ie)
        } catch (Ke) {
          console.error("Error ticking audio entities", Ke)
        }
        if (!ee.sE.Aye(ee.gC).isAlive) return;
        Date.now() - ti > 9e3 && (! function() {
          const ee = (0, we.h)();
          "number" === typeof ee.uE.speedMultiplier && "number" === typeof ee.uE.jumpAmount && (0, ye.sendColyMessage)(oe.ji, {
            FF: (0, ve.f)(ee.uE.speedMultiplier),
            JF: (0, ve.b)(ee.uE.jumpAmount),
            oF: (0, ve.f)(ee.uE.crouchingSpeed),
            RF: (0, ve.f)(ee.uE.walkingSpeed),
            kF: (0, ve.f)(ee.uE.runningSpeed),
            qF: (0, ve.b)(ee.iHe),
            fF: ee.sE.CHe(ee.gC).jumpForce,
            TF: ee.sE.M_(1).width,
            pF: ee.sE.M_(1).height,
            XF: ee.sE.XN(1).XF
          }, !0)
        }(), ti = Date.now());
        const be = ee.sE.Cye();
        if ((be.jump || be.forward || be.backward || be.left || be.right || be.sprint) && Te.h.yR("usedKeyboard"), ee.sE.Rye(ee.gC) && !0 === ee.uE.canPickUpItems) {
          const ie = ee.sE.pE(ee.gC),
            He = (0, Ee.l)(Fi),
            be = (0, Ee.p)(Fi);
          Zi[0] = ie[0] - He, Zi[1] = ie[1] - .6 * be, Zi[2] = ie[2] - He, wi[0] = ie[0] + He, wi[1] = ie[1] + ue.g.UX + .6 * be, wi[2] = ie[2] + He;
          const Me = ee.sE.qJe(Di, ee.sE.names.autoRotate),
            {
              itemDropPrediction: Ke
            } = (0, we.e)().client,
            Fe = ye.offlineInputReplay.holdsInput();
          if (Me.length > 0)
            for (const Re of Me) {
              const ie = ee.sE.getState(Re, "itemState");
              if (void 0 === ie || Date.now() - ie.creationTime < 500) continue;
              let He = Re,
                be = null;
              if (ie.mM) {
                const ee = Ke.pickupTarget(Re, Pi, Fe);
                if (null === ee) continue;
                ({
                  ao: He,
                  Co: be
                } = ee)
              }
              const Me = ee.sE.getState(He, "itemState");
              if (Me.mM && null === be) continue;
              let ke = 0,
                qe = null,
                fe = !1;
              if (0 === Me.amount) fe = !0;
              else {
                const {
                  amountPickedUp: ie
                } = ee.sE.Jye(ee.gC).pickUpItem({
                  name: Me.name,
                  typeObj: Me.typeObj,
                  amount: Me.amount,
                  attributes: Me.attributes
                });
                if (ke = ie, 0 === ke) continue;
                qe = ne.c.pickUp(Me, ke), Me.amount -= ke, Me.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Me.amount ? fe = !0 : Me.creationTime = Date.now() + Mi
              }
              const Te = (0, we.e)().client.inventoryPrediction.record(qe);
              (0, ye.sendColyMessage)(oe.Fh, {
                ao: null === be ? He : "",
                co: ke,
                xo: Je.h,
                kK: Te,
                Co: be
              }, !0), fe && (Fe && Ke.onPickedUpOffline(He, Te, be), null === be && ee.sE.deleteEntity(He));
              Ue.d.play("pickUp", ue.g.pickupSoundVol).rate(1 + Math.random() * ue.g.pickupSoundRateVariation)
            }
        }
        if (!ee.sE.rHe(ee.gC)) return;
        const Me = ee.inputs.nG.SHe;
        if (0 !== Me) {
          const ie = Me > 0 ? 1 : -1;
          ee.inputs.state["mid-fire"] || ee.inputs.state.Alt || !ee.uE.useInventory ? (ee.inputs.state["mid-fire"] && Te.h.yR("requestEmoteWheelClose"), (0, we.e)().client.cameraController.handleScrollZoom(ie)) : Te.h.yR("ScrollInventorySlot", ie)
        }
      })), pe.c.subscribe("droppedItemScale", (ee => {
        Fi = "number" === typeof ee && isFinite(ee) ? ee : Ki
      }))
    }

    function ai() {
      const ee = (0, we.h)();
      if (ee)
        for (const ie in Be.q) {
          ee.inputs.unbind(ie);
          for (const He of Be.q[ie]) ee.inputs.bind(ie, He)
        }
    }
    Yi(zi = {}, Bi = ["pw#j&qA<8OlCIRc6%IW^%0r<j]fI0XEKUc<Ip>>bNY9Wx", 'iZ.1>OxAxc:#8K?IDX[1A>%8c"fpT_]JHb144,`2^', "@=4jKSme_]tiKt9@;]:jPOcQIC8", 'GJ&l=$R8$"M8kW1KNw1Uo', "1CJGmKh~;A4}QRp6+x", "Buf/P|x", ";Mv.^1@0jX/4?0ZToZLdT~Io:y&{`pV", '@y$/4LaQwC$A6t|5Cul^d0E"r.9+oi!v1SD', '"HD2$=6D', "dAC|X`W;:aU$n", "GJoIVbivS?a", ".cKIv%n8.hGp1akJay]`IaK]3?&`oCW{d/g`@i58%l|cg/kR", "AOb2OcSoJ=|Al[][aJajUbADOCw[|MbAfG^d+L!Q.y|eu_R8vM6`Rkj]ayy1x", 'hAv.zWv"BOj$4^ARpf*wtwc0aY8$RqK*tc%^Z",fBXxYBR8p~x', 'pvX`,W`tYl|/b[I@76o^c"dVE3]Z{_D*Gx', 'fMH^|0>b@?6e6Cny6ZcI|_orUr[y5WQ{~OF~MXd<8{?`_KYv4C<M!fJ<BA"Tn', "^]FTP%|fbO[y](%RkhP3(bB;@y{UNC{R(/$4pMAV[hQ:?*Sb", "9GE~gw>pYu_CTJ&2(/PEd<u@|=F*P,p6[w(", "U/?`!/0E%{/|hu:", 'E;`~3Wm?b.8$uK"@NMyl*8wAwh', 'SG_Gc7t"Q=.RF,JL5hpUW1S;$Vs;4^7@KOy>i7$OE', '(2jljf"%BA3c=/5[saDFK/y@,gk3~(ay];}d', '$GXT<0F"[YjpgtgyX=uo.01U#lO4![Ab', ':],4GQ;?"r<n9a?L^ua2$w$n{XK~uC%8)YH~.+xV~lL([LChM6V>fkjrYc8', "fN.>S$9;Mt0c!B8p8*L2x?+n", 'BN2dPMff"?+cek?LpvDG[', 'Y*.oW"9~>ucg*BUN"f3^P_2kAchtLq~bHMKEA', "Fc0T0X429YA0g0xpuALww+9~#la", "PcH3s!XAE3h0zBa@1GWT;c_o(", 'uMx.9OG@i="eY1#f@,u>;ix', ";Zj.$+bo(r{0tFY6#[vIb~nt.y_0hL:{5,JjZwf]g{@|&p&2", ":A>M<>kc%tY[.1&8+WdjP", 'z=UTGSLpRCs;g*Io!U.QC|}v<r%_[1sb%,"|YX/%xXswxXI6bXn', "4a8jkZEn", 'oOHE"1SDCPP|LMHR[.nRV=LD;c6', 'p;Q"/QO2nuy1O0N5IwW|[>M0zSUZ"1`RQS&VqHm;Ohd.fMooFl)`MXAVLl9jn', "v203Y1m;blf,k?WAnlK^~5E[rXKyt,1Akbid`|x", "ovp!pkGk6azET#Lply1/#H1pW{", "3Oxow,_AxO6pS(,baYA1b8`2v?a", "*GTIT>`O~ltoMWxp1S`^`Lx", "c=@R:qD?:aWc;[^o5h%ME3aQz=P|ACRv)h<~!i&8*rS~iL,fcb/l|0VV0tb", "N*z2HcA?;SJ0rXjvvG%E", 'eCa2paZZ?hq2^(*o7bPd@c42BP7}tixvmZ0IX"]AzYb0,,~bzYp!rL%@BuI', '6wZ2PM2"|YsLVRf[Jb!Rsq4@Q=Z4kk`{[f82++6;IyFv0L45lbPE9|0tkVa', "zY@jd+5tjc81@/5*+WxULig]Bc^1r,AfJ.c/x5vnF", "uMu|V|Qc1?a:W+,J|TZJ3Wm?=Vu=eu[@x^kI<K]Dwain,a&2.Mp43#x", "xP>|:K[kay&jnX7ISlG1X1n[=c]t&pW[eabRh=28yO|w>DrALOn", "(JmIjZooNS^18W]5];n", '!lE.mM$G/A]Qgtuh:]0JS#Y8"li^`,b*t/}j&|De$cBZA_op', "@OjG!MOk,.gIIqfA4U9U8lNnruto5CD*#Y^2u0#~b]yUTD", "_hk.Y+L~/g}4aKf{Nv>^QOL?X:eV{Jp@[XjQ8a{8EdP$Tk=y3x", '/Jk^[qoo*?S4L1Aht/<M}battak4J#|J^ZtE4Ln{="G:"1.[!GWE2f~~ZO*4x', 'N=^2D+"EoggI[,BblG_G^wtk>A7wLkqbNTC|Y1}n/g"E3Wn*eINj2iCD', "MZn18>>bayM;zq!TI.81!ZE[4YcCsCbodAQF&!f?,A", "uU;~*%x", "*(pUUXF[`attiXPIPOTIzl,o0l5~jq9IyNDQA", "aa~`1Ly28rSeipEpSY,UI", "7C=^M_&E6yw}5JSI6*AGrLx", "bXK.Ia*{|V,IyXp6nO$/X$}t|=9Wn", ":2%_j4m;DlB1xBW*@GT/`_R@IY*,yXo6VAh`sk7~zP{1qaRv3Zk~B", '+*.l"`#<dhcAxR{@dw0d(b}OE', "G,S.5%oL=:", "2N`TW$]r9hv(NKa2{UfU+O?pLl9XLRTvgH7JL%|]#.nY,(.{:n", "z=0_?WZo9?/SLRKA6YD", "0l72c3SoJY)mfkJ6pXjU,/8E1yA$xM4T+GGj~cIV&hmyO1EK3M0E+O%E#ul", "TXPwSW|;kVtZWJgo+anU6QWA,.?EfR8*tA@oWXULJ=@e+,o6<y(", "@Z(_6S+t#Xkg3?HRL,+G@S*EJYY4L^Jv=aH|JKR+6C?WND/RtAwGg77fE", ".Oj4zc}2g.f", ">:`wKilo`:w4v(J8g*L`o~!+zVFU:#:Kx/@lZ,`GT]", "7YV.V<XD4hv=cC92jb<^IM:t[C", "CcDRA0WpXYzTbi]5", "4,7Fo4wp):}:5DS@i,0IxX[{ruc~6*!v4G9U^;Z?Pti^2^fA!23Iy", "=fv4X7YO+.{T4^>5", 'XvVU64<;0t0"MJ_5Dg%EaWJpRCemIqF*d^h2^wF"F', 'yuFwFLbpht,4sW&I"Or/7=S;@y*', 'QZ$.c7P@%rPUf(VTdN<^,W"%wCxh/1c2^c1GI%e~bX{Q?WYp', 'oXDGz#?Zc"P|+[X@1(D', "HZ.Gy+hr]=ZWvJ^y_*K|H*avj.", ":;KI6#boU", 't;t3C0|w/c#[x5}TQUG"c$>U"{Kd6igo#HD', "KZAR)|H{Vy)Ln", "U]~2|0BW:Yh*jM!*%G(", "Jfv.^;&%phg4Ta%R1HyQC|T05tb", '*l:d5cGE:YZ"{DFKM:aV', "nlIwje=;dYZA@,uJL.ZJ=7tE#cj0~BWT*2r/||6p`:", '>aOVJ|?Zp?YW,k^Nzf"w<M`GbOfCVu)L/.Vl%|5n', ".APd:=50mr(lKtCfK,D", ";T)j^b7f}Omy+,Bb", "I;Hdh=s2.C4Wn", "Lv%J1|9fOC%W{JhbufwjD++8G.}8n", "3,g2YLbD[h/|Iks2%hQFdL]A~.~IAF", 'a,awNe6fjOVhsJRy7Y]wsM<f@CVt.Lt5},eU!k0Ec"k|VRd{)x', '2NN2n"f;fh=A]k)2SvM|FLv@gcO8Lk@{lGm/oli8wCm|n1fAcUD', "C^|_fc0E7r[?sC^pKUBlGG{@RhE$<Ct5BU|J!i}Q!.Bh7qH{&=*E~;cnju", "H=Nj007fc]y0YtG@fMT^", "]jwVNW?<@YFlLRgobN.>%%UV!l>[.78A6*D", "J.rl&a!c/Oy,_t}TN]o37|!0(O5C8#CJ/GyQJOSf4h9w6CK[UJ}jAK&n", 'l,.G64ctb]/e_tT*_lBG:q"EcX,4hL!T', "bO{2c53tCA[=zR?8|hrUd+v@f?0c)[!L$G!Q%|ALQYw}3(>fwZLE", "|yQV8lpD", "=,o.3bu[(", '~.B!.0#]mtVl+p$J3,:`OWxV|",e&[?IdMBoA', "yJ72Z,;f_]Apw[;J[M_jn3]pfy&;ip*p2.lIW,GcwhZ[>[k5[..oG;cvB]^tn", "0Gn>vkx", "$YRjNQ9~2=gIuJM{LG0~Lk3n0lba{D:", "3=.GHZEnhO`:?**{}=Yj&|Ov)h<W+^cL#[J1a$hVTXvR#+N[g45.nLqn", 'Oy@o6#h~Fluow+"f<Wa"q=gUza3Tn', "d]v||,w]#{o=9(vI@=h3W0d~2g4VBkg*>Wnjd|?o[h?", "1CJGkZ4cAXVQ;D", "6O0wXX#;J=X", "3lxoRaWAb.]R+L&2#4QF", ">GbQeK;;Wt", "/N<~M34@Y]/~v_}yXMSUc;f]_ueVRKLoqWz2^;fpU3Kgy,=oC]|wGGx", 's6<I;Z("[?[hSqj6pG94;c:{>cZVn', 'Ol|E"SOk1YN8n1CJUlxokG#bh{*$0XN[.^tTK%G2YOFvB(7RG,w"mMHEE', "%Y4VG`K]Cga^tB6{LGfoY+o]ngz=^R]5W6djQqTQD]mGo/YLqx", 'jUE!X7KD|YuZ*1jL+YL3g7~ogc]Z",?2qUDQ%0`@zYC1sDL[cT|"LaGn', "M=i~9K(QA]rA21^ppfXdl?]~Oh", "bO|_Wwz~2CR", "!be/,Wx", "y],4d<4OWrj", "Vj5/x<Z?UdC$u#Yv8X0dO1@t(", "E8/G/WpD", "cfS/lE<N", "ypqb}*W)R>f8:OSz%x&iggTJ^~7U16Sz^cEv^%ykPHUrMD%p6pB+i", 'ADi]4wJ"YxC7^;`K%b10pp!W?5{E+H`K7_@vff}r%4C=>j^$,O', "p;mR:<!S", "+OmnZO^S", "UbW}I*^S", "Ab7.?*cy", "TXKRaDly", "LsVS", "c*^e~7eB", "T8RUb8Fn", "vuh`>+JD", "]54]JU&}", "EiLykVI", "=,}PPVHd", "035=3ZIc", "|jbT", "1aNaC5iW", "d6#xejGn", ":kh`XO**", "}xklPtDv", "zVmKkElA", "8T5=k?L}"]), Yi(Ei = function(...ee) {
      Yi(ee[wi[12]] = wi[1], ee[wi[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], ee[wi[13]] = wi[19], ee[wi[14]] = []);
      try {
        Yi(ee[wi[13]] = Object, ee[wi[14]][wi[25]]("".__proto__.constructor.name))
      } catch (Bi) {}
      ee: for (ee[wi[15]] = wi[1]; ee[wi[15]] < ee[wi[16]][wi[12]]; ee[wi[15]]++) try {
        for (ee[wi[13]] = ee[wi[16]][ee[wi[15]]](), ee[wi[17]] = wi[1]; ee[wi[17]] < ee[wi[14]][wi[12]]; ee[wi[17]]++)
          if (typeof ee[wi[13]][ee[wi[14]][ee[wi[17]]]] === wi[18]) continue ee;
        return ee[wi[13]]
      } catch (Bi) {}
      return ee[wi[13]] || this
    }() || {}, gi = Ei.TextDecoder, Oi = Ei.Uint8Array, di = Ei.bR, Wi = Ei.String || String, ti = Ei.Array || Array, Zi = function(...ee) {
      return Yi(ee[wi[12]] = wi[1], ee[-wi[26]] = new ti(wi[43]), ee[wi[2]] = Wi[wi[22]] || Wi.fromCharCode, ee[wi[4]] = []),
        function(...ie) {
          for (Yi(ie[wi[12]] = wi[2], ie[wi[2]] = wi[19], ie[wi[14]] = wi[19], ie[wi[15]] = ie[wi[1]][wi[12]], ee[wi[4]][wi[12]] = wi[1]), ie[wi[20]] = wi[1]; ie[wi[20]] < ie[wi[15]];) Yi(ie[wi[14]] = ie[wi[1]][ie[wi[20]]++], ie[wi[14]] <= wi[32] ? ie[wi[2]] = ie[wi[14]] : ie[wi[14]] <= 223 ? ie[wi[2]] = (31 & ie[wi[14]]) << wi[9] | ie[wi[1]][ie[wi[20]]++] & wi[21] : ie[wi[14]] <= 239 ? ie[wi[2]] = (ie[wi[14]] & wi[60]) << wi[24] | (ie[wi[1]][ie[wi[20]]++] & wi[21]) << wi[9] | ie[wi[1]][ie[wi[20]]++] & wi[21] : Wi[wi[22]] ? ie[wi[2]] = (ie[wi[14]] & wi[23]) << 18 | (ie[wi[1]][ie[wi[20]]++] & wi[21]) << wi[24] | (ie[wi[1]][ie[wi[20]]++] & wi[21]) << wi[9] | ie[wi[1]][ie[wi[20]]++] & wi[21] : (ie[wi[2]] = wi[21], ie[wi[20]] += wi[15]), ee[wi[4]][wi[25]](ee[-wi[26]][ie[wi[2]]] || (ee[-wi[26]][ie[wi[2]]] = ee[wi[2]](ie[wi[2]]))));
          return ee[wi[4]].join("")
        }
    }()), Di(wi[45]) in Ai && function(...ee) {
      ee[wi[12]] = wi[1]
    }(), Yi(Xi = (...ee) => {
      Yi(ee[wi[12]] = wi[2], ee[wi[2]] = wi[1]);
      for (const ie in ee[wi[1]]) ee[wi[2]]++;
      return ee[wi[2]]
    }, Ti = (...ee) => {
      ee[wi[12]] = wi[1],
        function(...ee) {
          return ee[wi[12]] = wi[2], typeof zi[ee[wi[1]]] === wi[18] ? zi[ee[wi[1]]] = function(...ee) {
            for (Yi(ee[wi[12]] = wi[2], ee[wi[2]] = ')ndAcFUKBq=%up{eS<0f`[b~ILv(g9V#sN3t+xY}8@:,J/ZQ?EMPjOhy2wTol>DiR]r$CaH&|^.;5W6z"_4Gm*1X!7k', ee[wi[14]] = "" + (ee[wi[1]] || ""), ee[wi[4]] = ee[wi[14]].length, ee[wi[17]] = [], ee[wi[34]] = wi[1], ee[wi[42]] = wi[1], ee[wi[47]] = -wi[2]), ee[wi[0]] = wi[1]; ee[wi[0]] < ee[wi[4]]; ee[wi[0]]++)
              if (ee[wi[33]] = ee[wi[2]].indexOf(ee[wi[14]][ee[wi[0]]]), ee[wi[33]] !== -wi[2])
                if (ee[wi[47]] < wi[1]) ee[wi[47]] = ee[wi[33]];
                else {
                  Yi(ee[wi[47]] += ee[wi[33]] * wi[27], ee[wi[34]] |= ee[wi[47]] << ee[wi[42]], ee[wi[42]] += (ee[wi[47]] & wi[28]) > wi[29] ? wi[30] : wi[31]);
                  do {
                    Yi(ee[wi[17]].push(ee[wi[34]] & wi[11]), ee[wi[34]] >>= wi[0], ee[wi[42]] -= wi[0])
                  } while (ee[wi[42]] > wi[23]);
                  ee[wi[47]] = -wi[2]
                } return ee[wi[47]] > -wi[2] && ee[wi[17]].push((ee[wi[34]] | ee[wi[47]] << ee[wi[42]]) & wi[11]), Pi(ee[wi[17]])
          }(Bi[ee[wi[1]]]) : zi[ee[wi[1]]]
        }(133) + "Z" in Ai && function(...ee) {
          var ie;
          Yi(ee[wi[12]] = wi[1], ie = function(...ee) {
            Yi(ee[wi[12]] = wi[2], this.bk = ee[wi[1]], this.length = wi[1], this.map = {}, this.head = wi[46], this.tail = wi[46])
          }, ie.prototype.get = function(ee) {
            var ie = this.map[ee];
            return ie ? (this.remove(ie), this.insert(ie.key, ie.val), ie.val) : -wi[2]
          }, ie.prototype.put = function(...ee) {
            Yi(ee[wi[12]] = wi[14], this.map[ee[wi[1]]] ? (this.remove(this.map[ee[wi[1]]]), this.insert(ee[wi[1]], ee[wi[2]])) : this.length === this.bk ? (this.remove(this.head), this.insert(ee[wi[1]], ee[wi[2]])) : (this.insert(ee[wi[1]], ee[wi[2]]), this.length++))
          }, ie.prototype.remove = function(...ee) {
            Yi(ee[wi[12]] = wi[2], ee[wi[2]] = ee[wi[1]].prev, ee[wi[13]] = ee[wi[1]].next), ee[wi[13]] && (ee[wi[13]].prev = ee[wi[2]]), ee[wi[2]] && (ee[wi[2]].next = ee[wi[13]]), this.head === ee[wi[1]] && (this.head = ee[wi[13]]), this.tail === ee[wi[1]] && (this.tail = ee[wi[2]]), delete this.map[ee[wi[1]].key]
          }, ie.prototype.insert = function(...ee) {
            Yi(ee[wi[12]] = wi[14], ee[wi[14]] = new List(ee[wi[1]], ee[wi[2]]), this.tail ? (this.tail.next = ee[wi[14]], ee[wi[14]].prev = this.tail, this.tail = ee[wi[14]]) : (this.tail = ee[wi[14]], this.head = ee[wi[14]]), this.map[ee[wi[1]]] = ee[wi[14]])
          }, console.log(ie))
        }(), Ji++ === wi[41] && ((0, ze.q)() && (0, Re[wi[4]])("4 "), Ji = wi[1])
    }), fi = function(ee) {
      function ie(...ee) {
        return ee[wi[12]] = wi[2], typeof zi[ee[wi[1]]] === wi[18] ? zi[ee[wi[1]]] = function(...ee) {
          for (Yi(ee[wi[12]] = wi[2], ee[wi[16]] = 'I<ds7u%jbA:lY82W.v=r}pO$oRzJH~hw!U_DF;(0t6{5gC#x[*9K)yaM43BE,QifT/n>^Sm@c|+G&PZ1kV"eLqN`]?X', ee[wi[14]] = "" + (ee[wi[1]] || ""), ee[wi[4]] = ee[wi[14]].length, ee[wi[20]] = [], ee[wi[34]] = wi[1], ee[-wi[48]] = wi[1], ee[wi[7]] = -wi[2]), ee[wi[0]] = wi[1]; ee[wi[0]] < ee[wi[4]]; ee[wi[0]]++)
            if (ee[wi[33]] = ee[wi[16]].indexOf(ee[wi[14]][ee[wi[0]]]), ee[wi[33]] !== -wi[2])
              if (ee[wi[7]] < wi[1]) ee[wi[7]] = ee[wi[33]];
              else {
                Yi(ee[wi[7]] += ee[wi[33]] * wi[27], ee[wi[34]] |= ee[wi[7]] << ee[-wi[48]], ee[-wi[48]] += (ee[wi[7]] & wi[28]) > wi[29] ? wi[30] : wi[31]);
                do {
                  Yi(ee[wi[20]].push(ee[wi[34]] & wi[11]), ee[wi[34]] >>= wi[0], ee[-wi[48]] -= wi[0])
                } while (ee[-wi[48]] > wi[23]);
                ee[wi[7]] = -wi[2]
              } return ee[wi[7]] > -wi[2] && ee[wi[20]].push((ee[wi[34]] | ee[wi[7]] << ee[-wi[48]]) & wi[11]), Pi(ee[wi[20]])
        }(Bi[ee[wi[1]]]) : zi[ee[wi[1]]]
      }
      if ((arguments[Di(134)] > wi[2] && arguments[wi[2]] !== wi[19] ? arguments[wi[2]] : wi[55]) && (0, je[wi[42]])(ee)) {
        function ye(...ee) {
          for (Yi(ee[wi[12]] = wi[2], ee[wi[2]] = 't}".*vPDA[N%LBCuJd@gE<S3!$~V;]1iQ^bsH:jfq2oc?6IeW|F_k,=`Y74x5+98Xz{lp0TZRaG)OKm/Mn#Uhrw&>y(', ee[wi[13]] = "" + (ee[wi[1]] || ""), ee[wi[4]] = ee[wi[13]].length, ee[wi[20]] = [], ee[wi[41]] = wi[1], ee[wi[42]] = wi[1], ee[-wi[44]] = -wi[2]), ee[wi[38]] = wi[1]; ee[wi[38]] < ee[wi[4]]; ee[wi[38]]++)
            if (ee[-wi[49]] = ee[wi[2]].indexOf(ee[wi[13]][ee[wi[38]]]), ee[-wi[49]] !== -wi[2])
              if (ee[-wi[44]] < wi[1]) ee[-wi[44]] = ee[-wi[49]];
              else {
                Yi(ee[-wi[44]] += ee[-wi[49]] * wi[27], ee[wi[41]] |= ee[-wi[44]] << ee[wi[42]], ee[wi[42]] += (ee[-wi[44]] & wi[28]) > wi[29] ? wi[30] : wi[31]);
                do {
                  Yi(ee[wi[20]].push(ee[wi[41]] & wi[11]), ee[wi[41]] >>= wi[0], ee[wi[42]] -= wi[0])
                } while (ee[wi[42]] > wi[23]);
                ee[-wi[44]] = -wi[2]
              } return ee[-wi[44]] > -wi[2] && ee[wi[20]].push((ee[wi[41]] | ee[-wi[44]] << ee[wi[42]]) & wi[11]), Pi(ee[wi[20]])
        }

        function be(...ee) {
          return ee[wi[12]] = wi[2], typeof zi[ee[wi[1]]] === wi[18] ? zi[ee[wi[1]]] = ye(Bi[ee[wi[1]]]) : zi[ee[wi[1]]]
        }

        function Me(...ee) {
          Yi(ee[wi[12]] = wi[1], ee[wi[50]] = function(...ee) {
            for (Yi(ee[wi[12]] = wi[2], ee[-wi[6]] = ee[wi[1]].length, ee[wi[13]] = [], ee[wi[4]] = wi[1], ee[wi[20]] = wi[1], ee[wi[1]].sort(((ee, ie) => ee - ie))), ee[wi[34]] = wi[1]; ee[wi[34]] < ee[-wi[6]]; ee[wi[34]]++)
              if (!(ee[wi[34]] > wi[1] && ee[wi[1]][ee[wi[34]]] === ee[wi[1]][ee[wi[34]] - wi[2]]))
                for (Yi(ee[wi[4]] = ee[wi[34]] + wi[2], ee[wi[20]] = ee[-wi[6]] - wi[2]); ee[wi[4]] < ee[wi[20]];)
                  if (ee[wi[1]][ee[wi[34]]] + ee[wi[1]][ee[wi[4]]] + ee[wi[1]][ee[wi[20]]] < wi[1]) ee[wi[4]]++;
                  else if (ee[wi[1]][ee[wi[34]]] + ee[wi[1]][ee[wi[4]]] + ee[wi[1]][ee[wi[20]]] > wi[1]) ee[wi[20]]--;
            else {
              for (ee[wi[13]].push([ee[wi[1]][ee[wi[34]]], ee[wi[1]][ee[wi[4]]], ee[wi[1]][ee[wi[20]]]]); ee[wi[4]] < ee[wi[20]] && ee[wi[1]][ee[wi[4]]] === ee[wi[1]][ee[wi[4]] + wi[2]];) ee[wi[4]]++;
              for (; ee[wi[4]] < ee[wi[20]] && ee[wi[1]][ee[wi[20]]] === ee[wi[1]][ee[wi[20]] - wi[2]];) ee[wi[20]]--;
              Yi(ee[wi[4]]++, ee[wi[20]]--)
            }
            return ee[wi[13]]
          }, console.log(ee[wi[50]]))
        }
        return void(be(135) + "K" in Ai && Me())
      }
      const He = window[ie(136)];
      if (typeof He !== ie(wi[26]) + "on" || ee instanceof He || (0, Le.C)(ee)) {
        function Ke(...ee) {
          for (Yi(ee[wi[12]] = wi[2], ee[-wi[53]] = 'rEcSgUy%TOtHpLMj2(_9`>4x!"7#8)@|^+/6&*v5z,$w:]{JI}<u=X301sKiG;Y[?.NoRCBQaPfbFnhDqkZeVldWmA~', ee[wi[51]] = "" + (ee[wi[1]] || ""), ee[wi[52]] = ee[wi[51]].length, ee[wi[20]] = [], ee[wi[41]] = wi[1], ee[wi[9]] = wi[1], ee[wi[54]] = -wi[2]), ee[wi[0]] = wi[1]; ee[wi[0]] < ee[wi[52]]; ee[wi[0]]++)
            if (ee[wi[33]] = ee[-wi[53]].indexOf(ee[wi[51]][ee[wi[0]]]), ee[wi[33]] !== -wi[2])
              if (ee[wi[54]] < wi[1]) ee[wi[54]] = ee[wi[33]];
              else {
                Yi(ee[wi[54]] += ee[wi[33]] * wi[27], ee[wi[41]] |= ee[wi[54]] << ee[wi[9]], ee[wi[9]] += (ee[wi[54]] & wi[28]) > wi[29] ? wi[30] : wi[31]);
                do {
                  Yi(ee[wi[20]].push(ee[wi[41]] & wi[11]), ee[wi[41]] >>= wi[0], ee[wi[9]] -= wi[0])
                } while (ee[wi[9]] > wi[23]);
                ee[wi[54]] = -wi[2]
              } return ee[wi[54]] > -wi[2] && ee[wi[20]].push((ee[wi[41]] | ee[wi[54]] << ee[wi[9]]) & wi[11]), Pi(ee[wi[20]])
        }

        function Ue(...ee) {
          return ee[wi[12]] = wi[2], typeof zi[ee[wi[1]]] === wi[18] ? zi[ee[wi[1]]] = Ke(Bi[ee[wi[1]]]) : zi[ee[wi[1]]]
        }
        if (ee[Ue(138) + Ue(139)] === wi[55]) {
          function Fe(...ee) {
            for (Yi(ee[wi[12]] = wi[2], ee[wi[56]] = '#WAesiaJNou_%gvVRB3~Uwt{TFHYh)nD`"C0;4b}=.mQfz(6P^c9!7L:x/d$E*+G[kI<5&2@O>|Zlrq,y1]M?p8KXjS', ee[wi[13]] = "" + (ee[wi[1]] || ""), ee[wi[15]] = ee[wi[13]].length, ee[wi[57]] = [], ee[wi[41]] = wi[1], ee[wi[42]] = wi[1], ee[wi[7]] = -wi[2]), ee[wi[0]] = wi[1]; ee[wi[0]] < ee[wi[15]]; ee[wi[0]]++)
              if (ee[wi[6]] = ee[wi[56]].indexOf(ee[wi[13]][ee[wi[0]]]), ee[wi[6]] !== -wi[2])
                if (ee[wi[7]] < wi[1]) ee[wi[7]] = ee[wi[6]];
                else {
                  Yi(ee[wi[7]] += ee[wi[6]] * wi[27], ee[wi[41]] |= ee[wi[7]] << ee[wi[42]], ee[wi[42]] += (ee[wi[7]] & wi[28]) > wi[29] ? wi[30] : wi[31]);
                  do {
                    Yi(ee[wi[57]].push(ee[wi[41]] & wi[11]), ee[wi[41]] >>= wi[0], ee[wi[42]] -= wi[0])
                  } while (ee[wi[42]] > wi[23]);
                  ee[wi[7]] = -wi[2]
                } return ee[wi[7]] > -wi[2] && ee[wi[57]].push((ee[wi[41]] | ee[wi[7]] << ee[wi[42]]) & wi[11]), Pi(ee[wi[57]])
          }

          function Je(...ee) {
            return ee[wi[12]] = wi[2], typeof zi[ee[wi[1]]] === wi[18] ? zi[ee[wi[1]]] = Fe(Bi[ee[wi[1]]]) : zi[ee[wi[1]]]
          }

          function oe(...ee) {
            function ie(...ee) {
              return ee[wi[12]] = wi[2], typeof zi[ee[wi[1]]] === wi[18] ? zi[ee[wi[1]]] = function(...ee) {
                for (Yi(ee[wi[12]] = wi[2], ee[wi[16]] = 'b*nsAHWNTkLaBI#qo7G_,l@i)8$fu]te`<E+/~36DgY9^0:cMxRvy{QXCS;UP&.=(5?hz2OjKp!4%1rmJd"V>[}F|Zw', ee[wi[13]] = "" + (ee[wi[1]] || ""), ee[wi[4]] = ee[wi[13]].length, ee[wi[17]] = [], ee[wi[41]] = wi[1], ee[wi[42]] = wi[1], ee[wi[23]] = -wi[2]), ee[-wi[0]] = wi[1]; ee[-wi[0]] < ee[wi[4]]; ee[-wi[0]]++)
                  if (ee[wi[33]] = ee[wi[16]].indexOf(ee[wi[13]][ee[-wi[0]]]), ee[wi[33]] !== -wi[2])
                    if (ee[wi[23]] < wi[1]) ee[wi[23]] = ee[wi[33]];
                    else {
                      Yi(ee[wi[23]] += ee[wi[33]] * wi[27], ee[wi[41]] |= ee[wi[23]] << ee[wi[42]], ee[wi[42]] += (ee[wi[23]] & wi[28]) > wi[29] ? wi[30] : wi[31]);
                      do {
                        Yi(ee[wi[17]].push(ee[wi[41]] & wi[11]), ee[wi[41]] >>= wi[0], ee[wi[42]] -= wi[0])
                      } while (ee[wi[42]] > wi[23]);
                      ee[wi[23]] = -wi[2]
                    } return ee[wi[23]] > -wi[2] && ee[wi[17]].push((ee[wi[41]] | ee[wi[23]] << ee[wi[42]]) & wi[11]), Pi(ee[wi[17]])
              }(Bi[ee[wi[1]]]) : zi[ee[wi[1]]]
            }
            ee[wi[12]] = wi[1];
            const He = require("path"),
              {
                version: ye
              } = require("../../package"),
              {
                version: be
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: Me
              } = require("@redacted/components/package"),
              {
                sdkVersion: Ke
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), He.resolve(__dirname, ie(141) + ie(142) + "js")
          }
          Je(140) in Ai && oe(), (0, Re[wi[4]])("2 " + (0, ke[wi[13]])(ee))
        } else {
          function qe(...ee) {
            for (Yi(ee[wi[12]] = wi[2], ee[wi[2]] = 'NGv)h*_+g4m.D1z<XZFwaJL:K9s;08j"MH7?trTC6yxIuBO`>el2b=V^A$!,](d~i{|SRU5@QYWpEPo&#qc3fk[%/}n', ee[wi[13]] = "" + (ee[wi[1]] || ""), ee[wi[4]] = ee[wi[13]].length, ee[wi[20]] = [], ee[wi[41]] = wi[1], ee[-wi[59]] = wi[1], ee[wi[23]] = -wi[2]), ee[-wi[58]] = wi[1]; ee[-wi[58]] < ee[wi[4]]; ee[-wi[58]]++)
              if (ee[wi[6]] = ee[wi[2]].indexOf(ee[wi[13]][ee[-wi[58]]]), ee[wi[6]] !== -wi[2])
                if (ee[wi[23]] < wi[1]) ee[wi[23]] = ee[wi[6]];
                else {
                  Yi(ee[wi[23]] += ee[wi[6]] * wi[27], ee[wi[41]] |= ee[wi[23]] << ee[-wi[59]], ee[-wi[59]] += (ee[wi[23]] & wi[28]) > wi[29] ? wi[30] : wi[31]);
                  do {
                    Yi(ee[wi[20]].push(ee[wi[41]] & wi[11]), ee[wi[41]] >>= wi[0], ee[-wi[59]] -= wi[0])
                  } while (ee[-wi[59]] > wi[23]);
                  ee[wi[23]] = -wi[2]
                } return ee[wi[23]] > -wi[2] && ee[wi[20]].push((ee[wi[41]] | ee[wi[23]] << ee[-wi[59]]) & wi[11]), Pi(ee[wi[20]])
          }

          function fe(...ee) {
            return ee[wi[12]] = wi[2], typeof zi[ee[wi[1]]] === wi[18] ? zi[ee[wi[1]]] = qe(Bi[ee[wi[1]]]) : zi[ee[wi[1]]]
          }

          function Te(...ee) {
            ee[wi[12]] = wi[1]
          }
          fe(143) + "k" in Ai && Te(), Xi(ee) < 10 ? (0, Re[wi[4]])("3 ") : Ti()
        }
      } else(0, Re[wi[4]])("5 ")
    }, Te.h.subscribe("customBindingsChanged", (() => {
      ai()
    }));
    let ci = !1,
      xi = !1;
    const Li = () => ci || xi && Ae.e.isInGame(),
      Ci = ee => {
        Li() && ee.preventDefault()
      };
    Te.h.subscribe("displaymodeFullscreenChange", (ee => {
      vi()
    })), Te.h.subscribe("pointerLockUpdate", (ee => {
      ci = ee, vi(), ui()
    })), Te.h.subscribe("freeCursorUpdate", (ee => {
      xi = ee, vi(), ui()
    }));
    const vi = () => {
        window.removeEventListener("wheel", Ci), Ye.isIframed && !(0, Ke.p)() && (ci || xi) && window.addEventListener("wheel", Ci, {
          passive: !1
        })
      },
      ui = () => {
        window.removeEventListener("wheel", mi), (ci || xi) && window.addEventListener("wheel", mi, {
          passive: !1
        })
      },
      mi = ee => {
        !0 === ee.ctrlKey && Li() && ee.preventDefault()
      };

    function li(ee) {
      Te.h.yR("QTEMouseState", {
        isDown: ee
      })
    }

    function Si(ee) {
      var ie, He, be, Me, Ke, Ue, Fe, Je;
      const Re = (0, we.h)();
      Re.FHe = null !== (ie = function(ee, ie) {
        var He, ye;
        if (!Ri) return null;
        const be = ee.bloxd;
        Ui ??= be.getMetaInfo("Board").rootId;
        const Me = null !== (He = null === ie || void 0 === ie ? void 0 : ie.w6) && void 0 !== He ? He : null;
        if (!Me || be.getMetaInfo(Me).rootId !== Ui) return null;
        const Ke = null !== (ye = null === ie || void 0 === ie ? void 0 : ie.position) && void 0 !== ye ? ye : null;
        if (be.playerCanChangePos(ee.gC, Ke[0], Ke[1], Ke[2])) return null;
        const Ue = (ee, ie, He) => {
          const ye = be.blockDataOwner.getBlockData(ee, ie, He),
            Me = null === ye || void 0 === ye ? void 0 : ye.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Ve.singleLineBoardActions.has(Me)
        };
        if (Ue(Ke[0], Ke[1], Ke[2])) return null;
        let Fe;
        ee.WHe && (Fe = [...ee.WHe], ee.S_(Fe, Fe));
        const Je = (Fe ? ee.camera.U_ : 0) + be.getBlockReach(ee.gC);
        return ee.pickBlock(Fe, ee.tHe, Je, ((ie, He, ye, Me) => 0 !== ie && ("Board" !== be.getMetaInfo(ie).rootName || be.playerCanChangePos(ee.gC, He, ye, Me) || Ue(He, ye, Me))))
      }(Re, Re.FHe)) && void 0 !== ie ? ie : Re.FHe;
      const ke = null !== (He = null === (be = Re.FHe) || void 0 === be ? void 0 : be.position) && void 0 !== He ? He : null,
        fe = null !== (Me = Re.tHe) && void 0 !== Me ? Me : Re.camera.N_(),
        pe = we.k.localPlayerPickActionHelper.getPickEntityResult(fe),
        Xe = null !== (Ke = Re.FHe) && void 0 !== Ke && Ke.w6 ? (0, Ce.e)(Re.FHe.w6) : "Air",
        ze = ee === qe.b.UpFirePrimary || ee === qe.b.UpFireSecondary,
        Be = ze ? "onPlayerClickUp" : "onPlayerClick",
        Ee = ze ? ee === qe.b.UpFireSecondary : ee === qe.b.DownFireSecondary,
        ge = !ze && (0, ye.getWasDoubleClick)();
      Te.h.yR("mouseState", {
        sJ: ee,
        isDown: !ze
      }), (0, ye.sendColyMessage)(oe.zh, {
        sJ: ee,
        IJ: ge,
        sF: ke,
        IF: pe
      }, !0), (0, we.e)().client.triggerGameCallback(Be, Re.gC, Ee, null !== (Ue = null === ke || void 0 === ke ? void 0 : ke[0]) && void 0 !== Ue ? Ue : null, null !== (Fe = null === ke || void 0 === ke ? void 0 : ke[1]) && void 0 !== Fe ? Fe : null, null !== (Je = null === ke || void 0 === ke ? void 0 : ke[2]) && void 0 !== Je ? Je : null, Xe, pe)
    }
    window.addEventListener("keydown", (ee => {
      ["ArrowUp", "ArrowDown"].includes(ee.key) && ee.preventDefault()
    })), document.addEventListener("keydown", (ee => {
      (0, xe.c)(ee, (() => {
        const ee = (0, we.h)();
        return (0, ce.P)(ee) || !1 !== ee.uE.canCustomiseChar
      }))
    }))
  },
  39874: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => Ke
    });
    var ye = He(39219);
    let be = !1;

    function Me() {
      return be
    }

    function Ke(ee) {
      be = ee, ee ? ye.f.setMultiplierType("emoteWheel", 0) : ye.f.removeMultiplier("emoteWheel")
    }
  },
  39888: (ee, ie, He) => {
    function ye(ee) {
      return Boolean(ee.uE.useInventory && ee.uE.useFullInventory && ee.sE.Rye(ee.gC))
    }
    He.d(ie, {
      c: () => ye
    })
  },
  39784: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      e: () => be
    });
    var ye = He(37963);

    function be(ee, ie) {
      return {
        replayedClipName: ee,
        replayedClipAgeSeconds: ie
      }
    }

    function Me(ee, ie, He, be, Me) {
      const Ke = function(ee) {
          if ("object" !== typeof ee || null === ee) return null;
          const {
            replayedClipName: ie,
            replayedClipAgeSeconds: He
          } = ee;
          return "string" === typeof ie && "number" === typeof He ? {
            gH: ie,
            OH: He
          } : null
        }(He),
        Ue = null === Ke ? He : null,
        {
          gH: Fe = null,
          OH: Je = 0
        } = null !== Ke && void 0 !== Ke ? Ke : {};
      ee.animateEntity(ie, ye.c.Custom, Ue, be, Me, Fe, Je)
    }
  },
  39879: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe
    });
    var ye = He(39177),
      be = He(347),
      Me = He(2969);

    function Ke() {
      var ee, ie, He, ye;
      const Ke = (0, Me.h)(),
        Ue = null !== (ee = null === (ie = Ke.sE.Fye(Ke.gC)) || void 0 === ie ? void 0 : ie.selectedItem) && void 0 !== ee ? ee : null,
        Fe = Ue ? (0, Me.e)().getItemStat(Ke.gC, Ue.name, "attackCooldownMs") : null,
        Je = (0, be.jd)(Fe, null === Ue || void 0 === Ue || null === (He = Ue.attributes.customAttributes) || void 0 === He || null === (ye = He.enchantments) || void 0 === ye ? void 0 : ye["Attack Speed"]);
      return Math.max(56, Math.ceil((Je + 30) / 3))
    }
    class Ue {
      constructor(ee, ie) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [ee], this.dueMs = ee, this.intervalMs = ie
      }
      spacedBy(ee, ie) {
        if (ee === this.intervalMs) return this;
        const He = this.tries[this.tries.length - 1],
          ye = new Ue(He, ee);
        return ye.dueMs = Math.max(He, ie - ee), ye
      }
      nextDueMs() {
        const ee = this.tries[this.tries.length - 1];
        return Math.max(ee + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(ee, ie) {
        this.tries.push(ee), this.tries.length > 3 && this.tries.shift(), this.dueMs = ie
      }
    }
    var Fe = He(39874),
      Je = He(1246);
    class oe {
      constructor() {
        this.timer = null, this.tries = new Ue(0, 0), this.check = () => {
          const ee = Date.now(),
            ie = this.tries.spacedBy(Ke(), ee),
            He = ie.nextDueMs();
          if (ee < He) this.schedule();
          else {
            if (ie.noteTry(ee, He), this.tries = ie, (0, Je.x)() && !(0, Fe.c)()) {
              var be, Ue;
              (0, ye.i)();
              const ee = (0, Me.h)();
              null === (be = ee.sE.Yye(ee.gC)) || void 0 === be || null === (Ue = be.OW) || void 0 === Ue || Ue.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var ee;
        null === (ee = oe.running) || void 0 === ee || ee.stop(), oe.running = this, this.tries = new Ue(Date.now(), Ke()), this.schedule()
      }
      static stopRunning() {
        var ee;
        null === (ee = oe.running) || void 0 === ee || ee.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, oe.running === this && (oe.running = null)
      }
      schedule() {
        const ee = Date.now(),
          ie = this.tries.spacedBy(Ke(), ee).nextDueMs() - ee;
        this.timer = setTimeout(this.check, Math.min(ie, 100))
      }
    }
    oe.running = null
  },
  39786: (ee, ie, He) => {
    He.d(ie, {
      b: () => fe,
      e: () => oe,
      i: () => qe,
      k: () => ke,
      o: () => Te,
      r: () => Re
    });
    var ye = He(39793),
      be = He(37992),
      Me = He(4075),
      Ke = He(1988),
      Ue = He(27),
      Fe = He(2969);
    const Je = new ye.c;

    function oe() {
      return Je
    }

    function Re() {
      Je.clear()
    }

    function ke() {
      for (const ee of Je.ids()) {
        const ie = Je.getName(ee);
        void 0 !== ie && Ke.c.delete(ie)
      }
      Re(), Ue.h.yR("playerRosterChanged", Je.ids())
    }

    function qe(ee, ie) {
      var He, ye;
      if (Je.has(ee)) return Je.getSetting(ee, ie);
      const be = (0, Fe.h)();
      return null === (He = be.zC[be.gC]) || void 0 === He || null === (ye = He[ee]) || void 0 === ye ? void 0 : ye[ie]
    }

    function fe(ee) {
      const {
        added: ie,
        removed: He,
        settingChanges: ye
      } = Je.apply(ee);
      for (const {
          playerId: be,
          name: Me
        }
        of He) void 0 === Me || pe(be) || Ke.c.delete(Me);
      for (const {
          playerId: Me,
          settings: Ke
        }
        of ye)
        if (pe(Me)) Te(Me, Ke);
        else
          for (const ee in Ke)(0, be.j)(Me, ee, Ke[ee]);
      (ie.length > 0 || He.length > 0) && Ue.h.yR("playerRosterChanged", Je.ids())
    }

    function Te(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Je.getSettings(ee);
      if (ie) {
        (0, be.f)(ee);
        for (const He in ie)(0, be.e)(ee, He, ie[He])
      }
    }

    function pe(ee) {
      return ee === (0, Fe.h)().dHe || (0, Fe.e)().client.hasEntity(ee)
    }(0, Me.onGameReset)(Re)
  },
  38915: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ze,
      d: () => Oe,
      e: () => We,
      f: () => te,
      g: () => we
    });
    var ye = He(37913),
      be = He(38919),
      Me = He(352),
      Ke = He.n(Me),
      Ue = He(3752);
    const Fe = new ye.rf,
      Je = new ye.rf,
      oe = new ye.rf,
      Re = new ye.rf,
      ke = new ye.rf,
      qe = [0, 0, 0],
      fe = {
        x: 0,
        y: 0
      },
      Te = new ye.rf(1, 0, 0),
      pe = new ye.rf(0, 1, 0),
      Xe = ye.Matrix.Identity(),
      ze = new ye.Matrix,
      Be = new ye.Matrix,
      Ee = new ye.rf,
      ge = new be.d(0, 0, 0, 0);

    function Oe(ee, ie) {
      var He, be;
      const Me = de(ee, ie);
      if (Me) {
        const ee = Me.x,
          ie = Me.y,
          He = ee - 50,
          ye = ie - 50;
        return Math.abs(He) <= Ue.b && Math.abs(ye) <= (0, Ue.h)() ? {
          x: ee,
          y: ie
        } : Pe(He, ye)
      }
      oe.wie(ie[0], ie[1], ie[2]),
        function(ee) {
          const ie = ee.PR.gbe(),
            He = ie ? ye.Matrix.FromArrayToRef(ie.worldMatrix, 0, Be) : ee.PR.Xx().activeCamera.getWorldMatrix();
          ye.rf.TransformNormalToRef(Te, He, Re), Re.normalize(), ye.rf.TransformNormalToRef(pe, He, ke), ke.normalize()
        }(ee);
      const Ke = ye.rf.Dot(oe, Re);
      let Fe = -ye.rf.Dot(oe, ke);
      Math.abs(Ke) < .001 && Math.abs(Fe) < .001 && (Fe = -1);
      const Je = null !== (He = null === (be = ee.PR.gbe()) || void 0 === be ? void 0 : be.projectionMatrix) && void 0 !== He ? He : ee.PR.Xx().activeCamera.getProjectionMatrix().m;
      return Pe(Ke * Je[0], Fe * Je[5])
    }

    function de(ee, ie) {
      const He = ee.PR.Xx(),
        be = He.Nf(),
        Me = be.getRenderWidth(),
        Ke = be.getRenderHeight();
      ge.width = Me, ge.height = Ke;
      const Ue = ee.PR.gbe(),
        oe = Ue ? Ee.wie(Ue.eye[0], Ue.eye[1], Ue.eye[2]) : ee.PR.camera.globalPosition;
      Fe.wie(oe.x + 10 * ie[0], oe.y + 10 * ie[1], oe.z + 10 * ie[2]);
      const Re = Ue ? ye.Matrix.FromArrayToRef(Ue.viewProjectionMatrix, 0, ze) : He.getTransformMatrix();
      return ye.rf.ProjectToRef(Fe, Xe, Re, ge, Je), Je.z < 0 || Je.z > 1 ? null : (fe.x = Je.x / Me * 100, fe.y = Je.y / Ke * 100, fe)
    }

    function We(ee, ie) {
      return Oe(ee, De(ee, ie))
    }

    function te(ee, ie) {
      const He = de(ee, De(ee, ie));
      return He && {
        x: He.x,
        y: He.y
      }
    }

    function Ze(ee) {
      var ie, He;
      return 1 / (null !== (ie = null === (He = ee.PR.gbe()) || void 0 === He ? void 0 : He.projectionMatrix[0]) && void 0 !== ie ? ie : ee.PR.Xx().activeCamera.getProjectionMatrix().m[0])
    }

    function we(ee, ie, He) {
      const ye = ee.PR.gbe(),
        be = ye ? ye.worldMatrix : ee.PR.Xx().activeCamera.getWorldMatrix().m,
        Me = ee.yq;
      for (let Ke = 0; Ke < 3; Ke++) ie[Ke] = be[12 + Ke] + Me[Ke], He[Ke] = be[8 + Ke];
      Ke().normalize(He, He)
    }

    function De(ee, ie) {
      const He = ee.yq,
        ye = ee.PR.gbe(),
        be = ye ? Ee.wie(ye.eye[0], ye.eye[1], ye.eye[2]) : ee.PR.camera.globalPosition;
      return qe[0] = ie[0] - He[0] - be.x, qe[1] = ie[1] - He[1] - be.y, qe[2] = ie[2] - He[2] - be.z, Ke().normalize(qe, qe), qe
    }

    function Pe(ee, ie) {
      return (0, Ue.c)(ee, ie, Ue.b, (0, Ue.h)())
    }
  },
  39832: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue
    });
    var ye = He(27),
      be = He(1246),
      Me = He(3228);
    const Ke = "Reconnecting";
    class Ue {
      constructor(ee) {
        this.hooks = ee, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = ee => {
          ee.persisted || this.leave()
        }, this.controller = new Me.c((ie => ee.reconnect(ie)), {
          isSessionLive: () => !this.ended && ee.isLive(),
          onPhaseChanged: ee => {
            this.onPhaseChanged(ee)
          },
          onReconnected: ie => {
            ee.onReconnected(ie)
          },
          onGaveUp: ie => {
            !this.ended && ee.isLive() && ee.onGaveUp(this.sessionBased, ie)
          }
        })
      }
      onInitialInfo(ee, ie) {
        this.graceMs = ee, this.sessionBased = ie
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(ee) {
        this.ended || this.controller.onConnectionLost(ee, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const ee = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          ie = this.controller.heldToken;
        this.end(), ee && "" !== ie && this.hooks.releaseSeat(ie)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(ee) {
        const ie = (0, Me.s)(ee);
        ie !== this.stopped && (this.stopped = ie, this.hooks.freeze(ie));
        const He = "frozen" === ee || "resuming" === ee && this.frozen;
        He && !this.frozen ? (0, be.w)(Ke, {
          overridesPause: !0
        }) : !He && this.frozen && (0, be.v)(Ke), this.frozen = He, this.setListening("connected" !== ee), ye.h.yR(Me.o, He ? "frozen" : ee)
      }
      setListening(ee) {
        ee !== this.listening && (this.listening = ee, ee ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39834: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = ee, this.now = ie, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const ee = this.now(),
            ie = ee - this.lastCheckAt <= 2e3;
          this.lastCheckAt = ee;
          const He = "visible" === document.visibilityState;
          !He || ie && this.wasVisible || (this.resumedAt = ee), this.wasVisible = He, He && ee - this.lastHeardAt > 12e3 && ee - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = ie(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39767: (ee, ie, He) => {
    He.d(ie, {
      c: () => ke
    });
    var ye = He(186),
      be = He(352),
      Me = He.n(be),
      Ke = He(37574),
      Ue = He(37578),
      Fe = He(2969);
    const Je = ye.g.UX * ye.g.playerEyeToHeightRatio,
      oe = 250,
      Re = 1.1,
      ke = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(ee, ie) {
          this.entities.set(ee, ie)
        }
        update(ee, ie) {
          const He = this.entities.get(ee);
          this.entities.set(ee, ie);
          const ye = this.playing.get(ee);
          ye && (He && He.soundName === ie.soundName ? (ye.sound.setRelativeVolume(ie.volume), ye.sound.rate(ie.rate), ye.sound.setPannerAttr({
            refDistance: ie.refDistance
          })) : this.stopEntity(ee))
        }
        remove(ee) {
          this.stopEntity(ee), this.entities.delete(ee)
        }
        YR(ee) {
          this.msSinceLastScan += ee, this.msSinceLastScan < oe || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(ee) {
          const ie = this.playing.get(ee);
          ie && (ie.sound.stop(), this.playing.delete(ee))
        }
        startEntity(ee, ie, He) {
          const ye = (0, Ue.g)(ie.soundName);
          if (!ye) return console.error(`AudioEntityManager: no sound found for "${ie.soundName}", dropping audio entity ${ee}`), void this.remove(ee);
          const be = Ke.d.play(ye, ie.volume, He, ie.maxHearDist, ie.refDistance, !0);
          be.rate(ie.rate), this.playing.set(ee, {
            sound: be,
            lastPos: Me().clone(He)
          })
        }
        scan() {
          const ee = (0, Fe.h)();
          if (!ee) return;
          const ie = ee.sE.pE(ee.gC);
          if (ie)
            for (const [He, ye] of this.entities) {
              if (!ee.sE.gHe(He, "position")) continue;
              const be = ee.sE.pE(He),
                Ke = Me().sqrDist(ie, be),
                Ue = this.playing.get(He);
              if (Ue) {
                const ee = ye.maxHearDist * Re;
                Ke > ee * ee ? this.stopEntity(He) : Me().equals(be, Ue.lastPos) || (Ue.sound.setPosition([be[0], be[1] + Je, be[2]]), Me().copy(Ue.lastPos, be))
              } else Ke <= ye.maxHearDist * ye.maxHearDist && this.startEntity(He, ye, be)
            }
        }
      }
  },
  39841: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je,
      f: () => oe
    });
    var ye = He(1720),
      be = He(186),
      Me = He(1682),
      Ke = He(1842),
      Ue = He(1141),
      Fe = He(1083);
    async function Je(ee, ie) {
      return function(ee) {
        return "object" === typeof ee && null !== ee && ee.code === be.c.VpnIp.code
      }(ie) && function(ee) {
        return Me.c.supports("appCheck") && ee.isLoggedIn() && !ee.hasTriedAppAttestation()
      }(ee) && await async function(ee) {
        try {
          const {
            token: ie
          } = await (0, Ke.b)(), {
            "3PSIDMCPP": He
          } = await (0, Fe.postJsonWithMetricsCookiesAndJsonResponse)(`${Ue.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: ie
          }, {
            retries: 0
          }, ee.getMetricsCookies());
          return ee.setAppAttestedAuthJwt(He), !0
        } catch (ie) {
          return ie instanceof ye.d && "failed" === ie.code ? (console.warn("The app couldn't get an App Check token:", ie), ee.markAppAttestationTried()) : console.error("Failed to attest the app:", ie), !1
        }
      }(ee)
    }
    async function oe(ee, ie) {
      try {
        return await ie()
      } catch (He) {
        if (!await Je(ee, He)) throw He
      }
      return ie()
    }
  },
  39837: (ee, ie, He) => {
    He.d(ie, {
      d: () => ke,
      e: () => oe
    });
    var ye = He(186),
      be = He(1862),
      Me = He(1155),
      Ke = He(9669);
    const Ue = [250, 500, 1e3, 2e3, 1250],
      Fe = 406;

    function Je(ee) {
      if ("object" !== typeof ee || null === ee) return !1;
      const {
        code: ie,
        message: He
      } = ee, be = ye.c.duplicateLobbyNameError;
      return (ie === be.code || ie === Fe) && (He === be.text || He === be.text + ye.l)
    }
    async function oe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be.e;
      for (let be = 0;; be++) {
        let Ke;
        (0, Me.r)(ie);
        try {
          return await ee()
        } catch (ye) {
          if (Ke = Ue[be], void 0 === Ke || !Je(ye)) throw ye
        }
        await He(Ke, ie)
      }
    }
    const Re = new Set([ye.c.duplicateLobbyNameError.code, ye.c.lobbyCantBeCreated.code, ye.c.roomDisposedEarlyError.code, ye.c.roomDisposedLateError.code, ye.c.serverRoomLimitReached.code]);

    function ke(ee) {
      if (Je(ee)) return !0;
      const ie = (0, Ke.h)(ee);
      return "number" === typeof ie && Re.has(ie)
    }
  },
  39826: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    var ye = He(27);

    function be(ee) {
      return "refetchCode" === ee || "devDownloadJson" === ee || ee.startsWith("Plugin")
    }

    function Me(ee, ie) {
      "refetchCode" !== ee ? "Plugin|MobAiPlugin|ShowPetUi" !== ee ? Promise.all([He.e(120), He.e(121), He.e(116), He.e(118), He.e(240)]).then((() => He(44929))).then((He => {
        let {
          runClientGameMessage: ye
        } = He;
        ye(ee, ie)
      })).catch((ie => {
        console.error(`Game message ${ee} failed`, ie)
      })) : ye.h.yR("showPetUi", ie) : ye.h.yR("refetchCode")
    }
  },
  9663: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je,
      c: () => Fe
    });
    var ye = He(347);

    function be(ee) {
      if (!ee.startsWith("{")) return ee;
      let ie;
      try {
        ie = JSON.parse(ee)
      } catch {
        return ee
      }
      return function(ee) {
        if (null === (0, ye.Be)(ee)) return !1;
        const {
          params: ie
        } = ee;
        return void 0 === ie || "object" === typeof ie && null !== ie && Object.values(ie).every((ee => "string" === typeof ee))
      }(ie) ? ie : ee
    }
    var Me = He(1127),
      Ke = He(1196);

    function Ue(ee) {
      return (0, Me.s)(Ke.f.get().getCurrentLanguageCode(), ee.translationKey, ee.params)
    }

    function Fe(ee) {
      const ie = be(ee);
      return "string" === typeof ie ? ie : Ue(ie)
    }

    function Je(ee) {
      const ie = be(ee);
      return "string" === typeof ie ? ie : Ue({
        translationKey: "moderation:kicked",
        params: {
          reason: Ue(ie)
        }
      })
    }
  },
  39808: (ee, ie, He) => {
    He.d(ie, {
      c: () => oe
    });
    var ye = He(1169),
      be = He(1315),
      Me = He(18),
      Ke = He(1294),
      Ue = He(1305),
      Fe = He(1502),
      Je = He(37260);

    function oe(ee) {
      let {
        ee: ie,
        ie: He
      } = ee;
      const oe = null !== ie && void 0 !== ie ? ie : (0, Ue.e)().gameNameWithVariation;
      (0, ye.J)(oe) && ((0, Je.j)(), (0, Ke.db)((() => {
        console.log("Received matchmaking order from game server to game", ie), (0, Me.l)("inGameReplay"), (0, Fe.navigatePreserveSearch)((0, be.b)(oe, null !== He && void 0 !== He ? He : void 0))
      }), "video_start"))
    }
  },
  39802: (ee, ie, He) => {
    He.d(ie, {
      d: () => oe,
      f: () => Fe,
      h: () => Je,
      k: () => Re
    });
    var ye = He(1983),
      be = He(27),
      Me = He(1340),
      Ke = He(1205);
    const Ue = new Map;

    function Fe(ee, ie) {
      be.h.yR("newUiRequest", {
        id: ee,
        clientParameters: ie
      }, !0)
    }

    function Je(ee) {
      be.h.yR("removeUiRequest", ee, !0);
      const ie = Ue.get(ee);
      ie && (ie.tearDownNotification(), Ue.delete(ee))
    }

    function oe() {
      be.h.yR("clearUiRequests");
      for (const ee of Ue.values()) ee.tearDownNotification();
      Ue.clear()
    }

    function Re(ee, ie, He, be) {
      const Fe = "string" === typeof ie ? {
          translationKey: ie
        } : ie,
        Je = Me.NotificationProvider.showPromptPopup({
          title: Fe.translationKey,
          textOpts: {
            title: (0, Ke.j)(Fe.params, ye.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: He,
          unlockPointerKey: "uiRequestPopup"
        });
      Ue.set(ee, Je), Je.getResult().then((ie => {
        Ue.delete(ee), "notificationTornDown" !== ie && be(ie)
      }))
    }
  },
  39860: (ee, ie, He) => {
    He.d(ie, {
      b: () => qe,
      d: () => ke
    });
    const ye = "ue:",
      be = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      Me = "[A-Za-z0-9]{1,24}",
      Ke = 15,
      Ue = new RegExp(`^${Me}$`);
    new RegExp(`^${ye}(${[...be,"other"].join("|")}):(?:n|k(${Me})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function Fe(ee, ie, He, Me, Fe) {
      const Je = "string" === typeof ee && be.includes(ee) ? ee : "other";
      let oe = "n";
      return "string" === typeof ie ? oe = Ue.test(ie) ? `k${ie}` : "n" : "number" === typeof He && Number.isInteger(He) && He >= 0 && He <= Ke && (oe = `b${He}`), `${ye}${Je}:${oe}:${Me?1:0}${Fe?1:0}`
    }
    var Je = He(1657),
      oe = He(1774);
    let Re = null;

    function ke(ee) {
      const ie = ee instanceof Element && ee !== document.body && ee !== document.documentElement && !(0, Je.n)(ee) && !ee.closest("#root");
      return {
        editable: (0, oe.e)(ee),
        outsideView: ie
      }
    }

    function qe(ee) {
      return Re ??= function(ee) {
        try {
          const {
            editable: ie,
            outsideView: He
          } = ke(ee.target), ye = ee;
          return Fe(ee.type, ye.code, ye.button, ie, He)
        } catch {
          return Fe(null, null, null, !1, !1)
        }
      }(ee), Re
    }
  },
  39793: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    class ye {
      constructor() {
        this.members = new Map
      }
      apply(ee) {
        const ie = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const ye of ee.oy) {
          let ee = this.members.get(ye.Ry);
          if (ee || (ee = {
              name: null,
              settings: {}
            }, this.members.set(ye.Ry, ee), ie.added.push(ye.Ry)), null !== ye.ky && (ee.name = ye.ky), null !== ye.qy || ye.Ty.length > 0) {
            const He = null === ye.qy ? {} : JSON.parse(ye.qy);
            Object.assign(ee.settings, He);
            for (const ie of ye.Ty) delete ee.settings[ie], He[ie] = void 0;
            ie.settingChanges.push({
              playerId: ye.Ry,
              settings: He
            })
          }
        }
        for (const ye of ee.py) {
          const ee = this.members.get(ye);
          var He;
          if (ee) this.members.delete(ye), ie.removed.push({
            playerId: ye,
            name: null !== (He = ee.name) && void 0 !== He ? He : void 0
          })
        }
        return ie
      }
      has(ee) {
        return this.members.has(ee)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(ee) {
        var ie, He;
        return null !== (ie = null === (He = this.members.get(ee)) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : void 0
      }
      getSettings(ee) {
        var ie;
        return null === (ie = this.members.get(ee)) || void 0 === ie ? void 0 : ie.settings
      }
      getSetting(ee, ie) {
        var He;
        return null === (He = this.members.get(ee)) || void 0 === He ? void 0 : He.settings[ie]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39829: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      e: () => be
    });
    const ye = ["description", "label"];

    function be(ee) {
      const ie = ee.type;
      return {
        type: ie,
        params: ee[ie]
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);