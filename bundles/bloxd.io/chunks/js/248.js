export const id = 248;
export const ids = [248];
export const modules = {
  39416: (uu, Eu, ju) => {
    function su(uu) {
      return !(!uu.lobbyLeaderboardInfo && !uu.lobbyManage)
    }
    ju.d(Eu, {
      c: () => su
    })
  },
  39336: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(24),
      Uu = ju(2011);

    function Zu(uu) {
      let {
        taskId: Eu,
        progress: ju
      } = uu;
      const su = Uu.e.get("_tasks");
      null !== su && void 0 !== su && su[Eu] && Uu.e.apply({
        _tasks: {
          ...su,
          [Eu]: {
            ...su[Eu],
            progress: ju
          }
        }
      })
    }
    su.h.subscribe("clientTaskProgress", (uu => {
      Zu(uu)
    }))
  },
  39280: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => uj,
      h: () => zE,
      l: () => RE
    });
    var su = ju(3879),
      Uu = ju(166),
      Zu = ju(202),
      Xu = ju(656),
      lu = ju(31),
      qu = ju(2893),
      fu = ju(3946),
      Cu = ju(3932),
      bu = ju(1278);
    const cu = new WeakMap;
    class Nu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          wfu: !0
        };
        this.callbacks = Eu, this.options = ju, this.kju = void 0, this.sessionId = void 0, this.Lk = [], this.Jfu = !1, this.fO = !1, this.dfu = void 0, this.Fk = 0, this.kUu = 0, this.afu = (uu, Eu) => {
          if (this.fO) return;
          const ju = Number(uu);
          this.Jfu ? this.Pfu(ju, Eu) : this.Lk.push({
            id: ju,
            payload: Eu
          })
        }, this.dispose = () => {
          this.fO || (this.fO = !0, cu.delete(this), this.Lk.length = 0, this.dfu())
        }, this.kju = uu, this.sessionId = uu.sessionId, cu.set(this, []), this.dfu = this.ofu()
      }
      kfu(uu) {
        this.dfu(), this.kju = uu, this.sessionId = uu.sessionId, this.Fk = 0, this.kUu = 0, this.dfu = this.ofu()
      }
      get Vk() {
        return this.kUu
      }
      ofu() {
        const uu = this.kju.gM("*", this.afu);
        return this.options.wfu && this.kju.pM(this.dispose), uu
      }
      Pfu(uu, Eu) {
        try {
          (0, fu.lc)(uu) && (Eu = (0, fu.e)(uu, Cu.qO.from(Eu)));
          const ju = cu.get(this)[uu];
          if ("function" !== typeof ju) {
            if (this.callbacks.mfu) return void this.callbacks.mfu(uu, Eu);
            throw new Error(`No onMessage handler registered for message id ${uu}`)
          }
          ju(Eu)
        } catch (ju) {
          this.callbacks.vfu(`Error in onMessage ${uu} with payload ${JSON.stringify(Eu)}`, ju)
        } finally {
          this.Fk++
        }
      }
      Kfu() {
        for (const {
            id: uu,
            payload: Eu
          }
          of this.Lk) {
          if (this.fO) break;
          this.Pfu(uu, Eu)
        }
        this.Lk.length = 0
      }
      Gw() {
        return this.fO
      }
      Vfu() {
        if (this.Jfu || this.fO) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          gM: (uu, Eu) => {
            if (this.Jfu || this.fO) throw new Error("Trying to call onMessage after registration finished");
            this.gM(uu, Eu)
          },
          finishRegistration: () => {
            if (this.fO) throw new Error("Cannot finish message registration after disposal");
            this.Jfu = !0, this.Kfu()
          }
        }
      }
      gM(uu, Eu) {
        var ju, su;
        null === (ju = (su = this.callbacks).rfu) || void 0 === ju || ju.call(su);
        const Uu = cu.get(this);
        for (; uu > Uu.length;) Uu[Uu.length] = null;
        Uu[uu] = Eu
      }
      send(uu, Eu) {
        this.Qfu(), (0, bu.E)(Eu) ? this.kju.qm(uu, Eu) : this.kju.send(uu, Eu)
      }
      Qfu() {
        var uu, Eu;
        (this.kUu++, 5 === Ou++) && (null === (uu = (Eu = this.callbacks).rfu) || void 0 === uu || uu.call(Eu), Ou = 0)
      }
      eD() {
        this.dispose(), this.kju.eD()
      }
      leave() {
        this.dispose(), this.kju.leave()
      }
    }
    let Ou = 0;
    var Yu = ju(3897);
    class hu extends Nu {
      constructor(uu) {
        super(uu, {
          rfu: () => {
            (0, lu.p)(!0) && (0, su.Dk)()
          },
          vfu: (uu, Eu) => {
            var ju;
            null === (ju = (0, qu.c)()) || void 0 === ju || ju.OY(uu, Eu)
          }
        }, {
          wfu: !1
        }), (0, Yu.f)(uu)
      }
      Hk(uu, Eu) {
        return !!(0, Yu.k)((0, Yu.c)(), this.kju, uu, Eu) && (this.Qfu(), !0)
      }
      kfu(uu) {
        this.ifu(), super.kfu(uu), (0, Yu.f)(uu)
      }
      eD() {
        super.eD(), this.ifu()
      }
      ifu() {
        this.kju.pD.zN.iK = void 0
      }
    }
    var Du = ju(24),
      gu = ju(2011),
      Mu = ju(1779),
      eu = ju(36850),
      Gu = ju(39285),
      pu = ju(38416),
      wu = ju(38200),
      Ju = ju(649),
      du = ju(38740);

    function au(uu, Eu, ju) {
      const su = function(uu) {
          const Eu = new Int32Array(uu.length * du.i);
          return uu.forEach(((uu, ju) => {
            const su = ju * du.i;
            if (4 === uu.length) {
              const [ju, Uu, Zu, Xu] = uu;
              Eu.set([ju, Uu, Zu, ju, Uu, Zu, Xu], su)
            } else {
              const [ju, Uu, Zu, Xu, lu, qu, fu] = uu;
              Eu.set([ju, Zu, lu, Uu, Xu, qu, fu], su)
            }
          })), Eu
        }(ju),
        Uu = (Eu, ju, su, Uu) => {
          uu.setBlockNoMulti(Eu, ju, su, Uu, !0)
        };
      uu.client.gameRecorder.isCapturing() ? (0, du.Bb)(su, (0, du.Ab)(su), Uu) : uu.Uc.zb.bJ(su, {
        YB: Uu,
        isHookId: Eu => uu.blockChangeHasHooks(Eu),
        watched: () => function(uu, Eu, ju) {
          const su = [],
            Uu = (uu, Eu, ju) => {
              su.push(uu, Eu, ju)
            },
            Zu = new Set;
          for (let Xu = 0; Xu < ju.length; Xu += du.i)
            for (let Eu = (0, Ju.M)(ju[Xu]); Eu <= (0, Ju.M)(ju[Xu + 3]); Eu++)
              for (let su = (0, Ju.M)(ju[Xu + 1]); su <= (0, Ju.M)(ju[Xu + 4]); su++)
                for (let lu = (0, Ju.M)(ju[Xu + 2]); lu <= (0, Ju.M)(ju[Xu + 5]); lu++) {
                  const ju = `${Eu}|${su}|${lu}`;
                  Zu.has(ju) || (Zu.add(ju), uu.blockDataOwner.forEachDataCell(Eu, su, lu, Uu))
                }
          return Eu.forEachCell(Uu), Int32Array.from(su)
        }(uu, Eu, su)
      }), uu.Uc.Kuu()
    }

    function Pu(uu) {
      uu.gju = new Set, uu.Gju = new Set, uu.Mju = new Set, uu.pju = new Set, uu.eju = [], uu.wju = [], uu.mF = new Set, uu.xU = [], uu.vF = []
    }
    class ou {
      constructor(uu) {
        this.Uc = uu
      }
      register(uu) {
        const Eu = this.Uc,
          ju = (0, qu.b)();
        uu.gM(fu.S, (uu => {
          Eu.zb.gju.add(uu), Eu.zb.Gju.delete(uu)
        })), uu.gM(fu._, (uu => {
          Eu.zb.Gju.add(uu), Eu.zb.gju.delete(uu)
        })), uu.gM(fu.ve, (uu => {
          Eu.zb.Gju.delete(uu), Eu.zb.gju.delete(uu)
        })), uu.gM(fu.Y, (uu => {
          Eu.zb.Mju.add(uu), Eu.zb.pju.delete(uu)
        })), uu.gM(fu.cb, (uu => {
          Eu.zb.pju.add(uu), Eu.zb.Mju.delete(uu)
        })), uu.gM(fu.Ce, (uu => {
          Eu.zb.pju.delete(uu), Eu.zb.Mju.delete(uu)
        })), uu.gM(fu.V, (uu => {
          (0, bu.kb)(uu, Eu.zb.wju), (0, bu.kb)(uu, Eu.zb.eju), Eu.zb.eju.push(uu)
        })), uu.gM(fu.bb, (uu => {
          (0, bu.kb)(uu, Eu.zb.eju), (0, bu.kb)(uu, Eu.zb.wju), Eu.zb.wju.push(uu)
        })), uu.gM(fu.ze, (uu => {
          (0, bu.kb)(uu, Eu.zb.eju), (0, bu.kb)(uu, Eu.zb.wju)
        })), uu.gM(fu.Of, (uu => {
          let {
            YU: ju,
            hU: su
          } = uu;
          su ? Eu.zb.mF.delete(ju) : Eu.zb.mF.add(ju)
        })), uu.gM(fu.Lf, (uu => {
          let {
            xU: su,
            TU: Uu
          } = uu;
          ju.updateWalkThroughRect(Eu.FQ, su, Uu)
        })), (0, su.onGameResetOnce)((() => {
          Pu(Eu.zb)
        })), uu.gM(fu.gc, (uu => {
          pu.d.applyServerUpdate(uu)
        })), uu.gM(fu.hb, (uu => {
          ju.applyServerBlocks((() => {
            ! function(uu, Eu) {
              for (const {
                  eu: ju,
                  Gu: su
                }
                of Eu) {
                const Eu = wu.c[su];
                if (Eu) {
                  const {
                    compX: su,
                    compY: Uu,
                    compZ: Zu,
                    mainMultiblock: Xu
                  } = Eu;
                  uu.lK(ju[0] - su, ju[1] - Uu, ju[2] - Zu, Xu)
                }
              }
              for (const {
                  eu: ju,
                  Gu: su,
                  pu: Uu
                }
                of Eu) uu.setBlockNoMulti(ju[0], ju[1], ju[2], su, !0), uu.blockDataOwner.setBlockData(ju[0], ju[1], ju[2], null === Uu ? void 0 : JSON.parse(Uu)), uu.blockAdded(ju[0], ju[1], ju[2], su)
            }(ju, uu)
          })), Du.h.TY("changeBlockFail", uu), ju.client.triggerGameCallback("onChangeBlockFail", uu), Du.h.TY("EditBoard", {
            pos: null
          }), Du.h.TY("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), uu.gM(fu.Gb, (uu => {
          ju.applyServerBlocks((() => {
            au(ju, pu.d, uu)
          }))
        })), uu.gM(fu.Ff, (uu => {
          let {
            wu: Eu,
            Ju: su
          } = uu;
          if (ju.Zx(Eu[0], Eu[1], Eu[2])) {
            const uu = (0, qu.b)().zD(Eu[0], Eu[1], Eu[2]);
            (0, qu.b)().updateMailboxContents(Eu[0], Eu[1], Eu[2], uu, su)
          }
        })), uu.gM(fu.Se, (uu => {
          let {
            pos: Eu,
            data: su
          } = uu;
          ju.blockDataOwner.setBlockData(Eu[0], Eu[1], Eu[2], su), ju.blockAdded(Eu[0], Eu[1], Eu[2], ju.zD(Eu[0], Eu[1], Eu[2]))
        }))
      }
    }
    var ku = ju(37547),
      mu = ju(37162),
      vu = ju(38439),
      Ku = ju(38308),
      Vu = ju(38455);
    class ru {
      constructor(uu, Eu) {
        this.Uc = uu, this.setUpQueuedEntity = Eu
      }
      register(uu) {
        const Eu = this.Uc,
          ju = (0, qu.b)();
        uu.gM(fu.Q, (uu => {
          let {
            Gj: Eu,
            pj: ju
          } = uu;
          this.setUpQueuedEntity(Eu), Eu = (0, mu.d)(Eu), (0, qu.b)().client.gameRecorder.recordBulletShot(Eu, ju), Du.h.TY(`bulletShot|${Eu}`, {
            bulletDirections: ju
          })
        })), uu.gM(fu.kc, (uu => {
          let {
            Dj: Eu,
            gj: ju
          } = uu;
          Du.h.TY("damagedByOtherPlayer", {
            Dj: Eu,
            direction: ju
          }, !0)
        })), uu.gM(fu.Td, (uu => {
          Du.h.TY("playerKilled", uu, !0), (0, qu.b)().client.gameRecorder.recordPlayerKilled(uu.deadEId, uu.killerEId, uu.withItem, uu.killstreak)
        })), uu.gM(fu.Ob, (uu => {
          Du.h.TY("customKillfeed", uu, !0), (0, qu.b)().client.gameRecorder.recordCustomKillfeed(uu.killer, uu.victim, uu.withItem)
        })), uu.gM(fu.be, (uu => {
          let {
            xu: ju,
            Tu: su
          } = uu;
          this.setUpQueuedEntity(ju);
          const Uu = Eu.YG.yEu(ju);
          null !== Uu && void 0 !== Uu && Uu.isGun() && Uu.reload(Date.now(), su)
        })), uu.gM(fu.Ne, (uu => {
          let {
            FE: ju,
            ku: su
          } = uu;
          const Uu = su ? (0, Vu.f)(Eu, su) : void 0;
          Du.h.TY("sendHitmarker", {
            FE: ju,
            screenPos: Uu
          }, !0)
        })), uu.gM(fu.Xc, (uu => {
          let {
            au: su,
            Pu: Uu,
            mu: Zu,
            vu: Xu,
            Ku: lu,
            Vu: qu,
            ru: fu
          } = uu;
          this.setUpQueuedEntity(su), su = (0, mu.d)(su);
          const Cu = Eu.YG.LEu(su);
          if (Cu && (Cu.lastHurtTime = performance.now()), (0, vu.playRigHurt)(Eu, su, qu), Du.h.TY("lifeformHurt", {
              eId: su,
              ru: fu
            }), Uu) {
            const uu = (0, Vu.f)(Eu, Uu.ku);
            Du.h.TY("yourAttackHit", {
              FE: Xu,
              screenPos: uu,
              hitSelf: su === Eu.FQ
            })
          }
          su === Eu.FQ && (ju.shakePlayerCamera(su, lu / 40, 200), Du.h.TY("closeShopOnDamaged", null), Du.h.TY("damagedByOtherPlayer", {
            Dj: null,
            direction: qu,
            Ku: lu
          }, !0));
          const bu = Eu.YG.bM(su);
          if (bu && (Zu || Xu)) {
            const uu = [bu[0], bu[1] + 1, bu[2]];
            Zu && (0, Ku.m)(Eu, Ku.F, uu, 15), Xu && (0, Ku.m)(Eu, Ku.t, uu, 10)
          }
        })), uu.gM(fu.Tc, (uu => {
          let {
            dE: ju,
            aE: su,
            PE: Uu
          } = uu;
          (0, ku.d)(Eu).setHealthFrac((0, mu.d)(ju), Uu), Du.h.TY("lifeformHealthChanged", {
            eId: (0, mu.d)(ju),
            aE: su,
            PE: Uu
          })
        })), uu.gM(fu.K, (uu => {
          let {
            GZ: ju,
            pZ: su
          } = uu;
          (0, qu.b)().playerAttacked(Eu.FQ, ju, su)
        })), uu.gM(fu.ob, (() => {
          const uu = Eu.YG.yEu(Eu.FQ);
          null !== uu && void 0 !== uu && uu.isChargeable() && uu.finishCharging(!1, Date.now())
        })), uu.gM(fu.Tb, (uu => {
          let {
            Qu: Eu,
            iu: ju,
            Wu: su,
            BE: Uu,
            LE: Zu,
            tE: Xu
          } = uu;
          Eu = (0, mu.d)(Eu), (0, qu.b)().client.updateEffect(Eu, ju, {
            displayName: su,
            icon: Uu,
            duration: Zu,
            level: Xu
          })
        })), uu.gM(fu.ee, (uu => {
          let {
            Qu: Eu,
            iu: ju
          } = uu;
          Eu = (0, mu.d)(Eu), (0, qu.b)().client.removeEffect(Eu, ju)
        })), uu.gM(fu.zf, (uu => {
          Du.h.TY("ttbEffectMultiplier", uu)
        }))
      }
    }
    var Qu = ju(39307),
      iu = ju(37541),
      Wu = ju(4408),
      Su = ju(38462),
      Iu = ju(37145),
      Fu = ju(37151),
      Bu = ju(37472),
      Lu = ju(37646),
      tu = ju(38465),
      xu = ju(39310);
    class Tu {
      constructor(uu, Eu) {
        this.Uc = uu, this.setUpQueuedEntity = Eu
      }
      register(uu) {
        const Eu = this.Uc,
          ju = (0, qu.b)();
        uu.gM(fu.ld, (uu => {
          let {
            eId: ju,
            settings: su
          } = uu;
          (0, Lu.d)(ju);
          for (const Eu in su)(0, Lu.c)(ju, Eu, su[Eu]);
          if ("canSee" in su && Eu.YG.xuu(ju, "hidingMeshManager")) {
            const uu = Eu.YG.getState(ju, "hidingMeshManager");
            uu.canSee = (0, tu.e)("canSee", su.canSee), uu._forceUpdate = !0
          }
        })), uu.gM(fu.E, (uu => {
          let {
            ys: ju,
            zs: su,
            animationScript: Uu,
            Rs: Zu,
            uU: Xu,
            EU: lu,
            jU: fu
          } = uu;
          ju = (0, mu.d)(ju);
          const Cu = null === Uu && null !== lu ? (0, Qu.d)(lu, fu) : Uu;
          (0, qu.b)().client.gameRecorder.recordAnimateEntity(ju, su, Cu, Zu, Xu), (0, ku.d)(Eu).animations.animateEntity(ju, su, Uu, Zu, Xu, lu, fu), null !== Uu || ju === Eu.FQ && su === iu.f.Emote && (0, qu.b)().client.cameraController.endTemporaryThirdPerson()
        })), uu.gM(fu.Ke, (uu => {
          (0, xu.e)(uu)
        })), uu.gM(fu.Qd, (uu => {
          for (const Eu of uu)(0, Su.B)(Eu);
          Du.h.TY("playerCosmeticsUpdated", uu, !0)
        })), uu.gM(fu.H, (uu => {
          for (const ju of uu)(0, Bu.f)(Eu, ju)
        })), uu.gM(fu.pd, (uu => {
          (0, Ku.p)(Eu, (0, bu.q)(uu))
        })), uu.gM(fu.td, (uu => {
          Wu.h[uu.oZ] ? (0, Ku.p)(Eu, {
            ...Wu.h[uu.oZ],
            pos1: uu.pos1,
            pos2: uu.pos2
          }) : console.error(`Unknown preset id: ${uu.oZ}`)
        })), uu.gM(fu.Nd, (uu => {
          var Eu, ju;
          let {
            uu: su,
            Eu: Uu,
            ju: Zu,
            Uu: Xu
          } = uu, {
            Xu: lu,
            lu: fu
          } = null !== Xu && void 0 !== Xu ? Xu : {};
          const {
            Zu: Cu
          } = null !== Xu && void 0 !== Xu ? Xu : {};
          lu = null !== (Eu = lu) && void 0 !== Eu ? Eu : void 0, fu = null !== (ju = fu) && void 0 !== ju ? ju : void 0, "string" === typeof Cu && this.setUpQueuedEntity(Cu), (0, qu.b)().client.gameRecorder.recordPlaySound(su, Uu, Zu, Xu), Iu.e.play((0, Fu.e)(su), Uu, Cu, lu, fu).rate(Zu)
        })), uu.gM(fu.Gf, (uu => {
          for (const Eu in uu) {
            const su = uu[Eu];
            for (const uu in su) ju.client.meshCreator.handleParticleSystemUpdate(Eu, uu, su[uu])
          }
        }))
      }
    }
    var Hu = ju(38178),
      Au = ju(38145);
    class nu {
      constructor(uu) {
        this.Uc = uu
      }
      register(uu) {
        const Eu = this.Uc,
          ju = (0, qu.b)();

        function su() {
          return Eu.YG.kEu(Eu.FQ)
        }
        uu.gM(fu.yc, (uu => {
          let {
            vU: ju,
            KU: su,
            VU: Uu,
            rU: Zu,
            QU: Xu,
            iU: lu,
            WU: qu,
            SU: fu,
            IU: Cu
          } = uu;
          if (!Eu.YG.xuu(ju, "itemState")) return void(0, Hu.l)(Eu, ju, [Xu, lu, qu], su, {
            amount: Uu,
            attributes: JSON.parse(Zu),
            SU: fu,
            size: Cu
          });
          const bu = Eu.YG.getState(ju, "itemState");
          bu.amount = Uu, bu.SU = fu, bu.creationTime = Date.now(), (0, Au.setServerPosition)(Eu.YG.getState(ju, "smoothToServerPos"), Xu, lu, qu)
        })), uu.gM(fu.db, (uu => {
          (0, ku.d)(Eu).setCantPickUp(uu, !0), Eu.YG.xuu(uu, "itemState") && (Eu.YG.getState(uu, "itemState").SU = !0)
        })), uu.gM(fu.re, (uu => {
          (0, ku.d)(Eu).setCantPickUp(uu, !1), Eu.YG.xuu(uu, "itemState") && (Eu.YG.getState(uu, "itemState").SU = !1)
        })), uu.gM(fu.Fd, (uu => {
          let {
            pickUpItems: Eu,
            pickUpAckSeq: ju
          } = uu;
          for (const {
              name: Uu,
              amount: Zu,
              attributes: Xu
            }
            of Eu) su().pickUpItem({
            name: Uu,
            amount: Zu,
            typeObj: Hu.y[Uu],
            attributes: Xu
          });
          (0, qu.b)().client.inventoryPrediction.serverChangeApplied(ju)
        })), uu.gM(fu._e, (uu => {
          let {
            index: ju,
            name: su,
            amount: Uu,
            attributes: Zu,
            setSlotAckSeq: Xu
          } = uu;
          const lu = Eu.YG.mEu(Eu.FQ);
          (ju < lu.playerInventory.numSlots || lu.mZ || lu.inCreative) && lu.setItemSlot(ju, su, Uu, Zu), (0, qu.b)().client.inventoryPrediction.serverChangeApplied(Xu)
        })), uu.gM(fu.wc, (uu => {
          (0, qu.b)().client.inventoryPrediction.acknowledge(uu)
        })), uu.gM(fu.D, (uu => {
          let {
            Wj: Eu,
            Sj: ju,
            Ij: su,
            Fj: Uu
          } = uu;
          (0, qu.b)().client.itemDropPrediction.onActionItemDrops(Eu, ju, su, Uu)
        })), uu.gM(fu.zb, (uu => {
          su().clearInventory(), (0, qu.b)().client.inventoryPrediction.serverChangeApplied(uu)
        })), uu.gM(fu.af, (uu => {
          Du.h.TY("setSelectedInventorySlotI", uu, !0)
        })), uu.gM(fu.qb, (uu => {
          let {
            nU: ju,
            yU: su,
            zU: Uu,
            RU: Zu,
            uZ: Xu,
            EZ: lu,
            jZ: fu,
            sZ: Cu
          } = uu;
          const bu = Eu.YG.mEu(Eu.FQ);
          if (lu) {
            const {
              ZZ: uu,
              XZ: Eu
            } = Cu;
            return (0, qu.b)().client.inventoryPrediction.I6(Eu, (() => {
              bu.chestRefreshed(su, Uu, Zu, fu, uu)
            })) && Du.h.TY("chestToggleFromServer", !1, !0), void Du.h.TY("chestRefreshedFromServer")
          }(ju || bu.mZ) && (ju ? (bu.chestOpened(su, Uu, Zu, Xu, fu), null !== Xu && (0, qu.b)().client.ironChestPasskeyCache.onChestOpened(Zu, Xu)) : bu.chestClosed(), Du.h.TY("chestToggleFromServer", ju, !0))
        })), uu.gM(fu.Sb, (uu => {
          let {
            craftingRecipeItemName: su,
            recipesForItem: Uu
          } = uu;
          su ? ju.craftingManager.editRecipesForPlayer(Eu.FQ, su, Uu) : ju.craftingManager.resetAllPlayerRecipes(Eu.FQ), Du.h.TY("craftingRecipesEdited", {
            itemName: su,
            recipesForItem: Uu
          })
        })), uu.gM(fu.je, (uu => {
          let {
            rj: Eu,
            Qj: ju,
            ij: Uu
          } = uu;
          su().removeItemName(Eu, ju), (0, qu.b)().client.inventoryPrediction.serverChangeApplied(Uu)
        })), uu.gM(fu.he, (uu => {
          let {
            FU: su
          } = uu;
          ju.craftingManager.removeRecipes(Eu.FQ, su), Du.h.TY("craftingRecipesEdited", {
            itemName: su,
            recipesForItem: []
          })
        }))
      }
    }
    var yu = ju(6677),
      zu = ju(37807),
      Ru = ju(366),
      uE = ju.n(Ru),
      EE = ju(4709),
      jE = ju(38082),
      sE = ju(38620),
      UE = ju(37803);
    class ZE {
      constructor(uu, Eu) {
        this.Uc = uu, this.setUpQueuedEntity = Eu
      }
      register(uu) {
        const Eu = this.Uc,
          ju = (0, qu.b)();
        uu.gM(fu.vf, (uu => {
          let {
            oE: ju,
            kE: Uu,
            mE: Zu,
            vE: Xu
          } = uu;
          const lu = [Uu, Zu, Xu];
          Eu.YG.setPosition(Eu.FQ, lu), (0, su.sendColyMessage)(fu.$g, {
            uq: ju,
            Eq: EE.h
          }), Du.h.TY("localPlayerTeleported", {
            pos: lu,
            isCorrection: !1
          })
        })), uu.gM(fu.Ad, (uu => {
          let {
            BZ: Eu,
            LZ: ju,
            tZ: su,
            xZ: Uu
          } = uu;
          this.setUpQueuedEntity(Eu);
          const Zu = [ju, su, Uu];
          Du.h.TY(`otherPlayerTeleported|${Eu}`, {
            pos: Zu
          })
        })), uu.gM(fu.Xd, (uu => {
          let {
            DU: ju,
            gU: Uu,
            MU: Zu,
            eU: Xu,
            GU: lu,
            pU: qu,
            wU: Cu,
            dU: bu,
            JU: cu,
            oU: Nu
          } = uu;
          const Ou = [Uu, Zu, Xu];
          Eu.YG.setPosition(Eu.FQ, Ou);
          const Yu = Eu.YG.qEu(Eu.FQ),
            hu = Eu.YG.SF(Eu.FQ);
          uE().set(hu.jF, 0, 0, 0), uE().set(hu.sF, 0, 0, 0), uE().set(hu.RY, lu, qu, Cu), hu.ZF(), Yu._flying = null !== Nu, Nu ? (Yu.flyAccel.kU = Nu.kU, Yu.flyAccel.mU = Nu.mU) : Yu.flyAccel.reset(), bu && Yu.movementType === yu.r.GLIDING && (Yu.aU = bu.aU, uE().copy(Yu.PU, bu.PU)), (0, su.sendColyMessage)(fu.$g, {
            uq: ju,
            Eq: EE.h
          }), Du.h.TY("localPlayerTeleported", {
            pos: Ou,
            isCorrection: !0
          })
        })), uu.gM(fu.bf, (uu => {
          let {
            vehicleEId: Eu,
            overrides: ju
          } = uu;
          (0, qu.b)().applyRiddenVehicleSettingOverrides(Eu, ju)
        })), uu.gM(fu.If, (uu => {
          let {
            oj: ju,
            kj: su,
            mj: Uu
          } = uu;
          const Zu = Eu.YG.qEu(Eu.FQ).physicsState.type === yu.v.SLEEPING && ju === yu.v.DEFAULT;
          (0, qu.b)().updatePositionAndPhysics(Eu.FQ, {
            type: ju,
            tier: su
          }, !0, Uu), Zu && (0, qu.b)().updateHeldVehicleStatus()
        })), uu.gM(fu.lb, (uu => {
          let {
            wE: ju,
            JE: su
          } = uu;
          Eu.YG.PEu(Eu.FQ).setPose(ju, su)
        })), uu.gM(fu.Te, (uu => {
          const {
            nf: ju,
            lju: su
          } = (0, zu.f)([uu[0], uu[1], uu[2]]);
          UE.d.setLookDirection(Eu, ju, su), (0, jE.q)(ju, su);
          const Uu = Eu.YG.PEu(Eu.FQ);
          Uu && (Uu.heading = ju)
        })), uu.gM(fu.Ue, (uu => {
          ju.client.cameraController.setCameraZoom(uu)
        })), uu.gM(fu.if, (uu => {
          let {
            Mj: su,
            ej: Uu
          } = uu;
          ju.shakePlayerCamera(Eu.FQ, su, Uu)
        })), uu.gM(fu.Fc, (uu => {
          Eu.YG.PEu(Eu.FQ).jumpMultiplier.setMultiplierType("jumpEffectAmount", uu)
        })), (0, su.onGameResetOnce)((() => {
          Eu.YG.PEu(Eu.FQ).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), uu.gM(fu.F, (uu => {
          Eu.YG.SF(Eu.FQ).applyImpulse(uu)
        })), uu.gM(fu.ef, (uu => {
          const ju = Eu.YG.SF(Eu.FQ);
          uE().set(ju.jF, 0, 0, 0), uE().set(ju.sF, 0, 0, 0), uE().copy(ju.RY, uu), ju.ZF()
        })), (0, su.onGameResetOnce)((() => {
          (0, sE.setFloatingYValue)(Eu.YG.getState(Eu.FQ, "physics"), Eu.YG.wT(Eu.FQ), null)
        })), uu.gM(fu.Vb, (uu => {
          let {
            vj: ju,
            Kj: su,
            Vj: Uu
          } = uu;
          const Zu = (0, mu.d)(ju);
          if (Zu === Eu.FQ) {
            const uu = Eu.YG.wT(Eu.FQ).position;
            Uu ??= Math.floor(uu[1]) - 1, (0, sE.setFloatingYValue)(Eu.YG.getState(Eu.FQ, "physics"), Eu.YG.wT(Eu.FQ), su ? Uu : null)
          }(0, ku.d)(Eu).setFloating(Zu, su, Uu);
          const Xu = Eu.YG.getState(Zu, "floating");
          Xu && (Xu.isFloating = su, Xu.Vj = su ? Uu : null)
        }))
      }
    }

    function XE(uu, Eu, ju, su, Uu) {
      let Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!uu.YG.oEu(uu.FQ)) return console.log("Got resync inven but don't have inven component"), void Eu.acknowledge(su);
      Zu && console.error("Had to sync inven"), Eu.I6(su, Uu) && ju.TY("chestToggleFromServer", !1, !0), ju.TY("syncedInvenFromServer")
    }
    var lE = ju(39320),
      qE = ju(39327),
      fE = ju(2014);
    var CE = ju(4691);

    function bE(uu) {
      const Eu = uu.zb;
      let ju = 0,
        Uu = -1,
        Xu = -1 / 0,
        lu = null,
        qu = !0;
      const Cu = () => {
        if (++ju % 10 !== 0) return;
        const Cu = (0, su.getLastReceivedPacketId)();
        if (Cu <= Uu) return;
        const [bu, cu, Nu] = uu.YG.bM(uu.FQ), Ou = ! function(uu) {
          var Eu;
          let ju = null === (Eu = uu.YG.Cju(uu.FQ)) || void 0 === Eu ? void 0 : Eu.jO;
          if (void 0 === ju) return !1;
          const su = new Set;
          for (; void 0 !== ju && !su.has(ju);) {
            var Uu;
            su.add(ju);
            const Eu = uu.YG.getState(ju, "smoothToServerPos"),
              Zu = Array.isArray(Eu) ? null : null === Eu || void 0 === Eu ? void 0 : Eu.serverPosition;
            if (Zu) {
              const Eu = uu.YG.bM(ju);
              if (Math.abs(Eu[0] - Zu[0]) > 10 || Math.abs(Eu[1] - Zu[1]) > 10 || Math.abs(Eu[2] - Zu[2]) > 10) return !0
            }
            ju = null === (Uu = uu.YG.Cju(ju)) || void 0 === Uu ? void 0 : Uu.jO
          }
          return !1
        }(uu) && function(uu, Eu, ju, su) {
          const Uu = Zu.e.hO;
          for (let Zu = 0; Zu < uu.length; Zu++) {
            const Xu = uu[Zu];
            if (!(0, CE.j)(Eu, ju, su, Xu[0] * Uu, Xu[1] * Uu, Xu[2] * Uu)) return !1
          }
          return !0
        }(Eu.BY.CO, bu, cu, Nu), Yu = null === lu || Math.abs(bu - lu[0]) > 8 || Math.abs(cu - lu[1]) > 8 || Math.abs(Nu - lu[2]) > 8, hu = !qu || Yu || performance.now() - Xu >= 1e4;
        qu = Ou, Ou && hu && (Uu = Cu, Xu = performance.now(), lu = [bu, cu, Nu], (0, su.sendColyMessage)(fu.Gg, {
          cl: Cu
        }))
      };
      return uu.on("Tb", Cu), () => {
        uu.off("Tb", Cu)
      }
    }
    var cE = ju(39330),
      NE = ju(1570),
      OE = ju(2888),
      YE = ju(1856),
      hE = ju(3074),
      DE = ju(4958);
    class gE {
      constructor(uu, Eu, ju) {
        this.Uc = uu, this.gameNameWithVariation = Eu, this.connectionResume = ju, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        DE.d.reset(), (0, lE.e)()
      }
      startChunkReports() {
        const uu = function(uu) {
            let Eu = null,
              ju = -1 / 0,
              Uu = null;
            const Zu = () => {
                Uu = null;
                const Zu = Math.ceil(uu.Im[0]),
                  Xu = Math.ceil(uu.Im[1]);
                Eu && Eu[0] === Zu && Eu[1] === Xu || (Eu = [Zu, Xu], ju = performance.now(), (0, su.sendColyMessage)(fu.Eg, {
                  TX: Zu,
                  HX: Xu
                }))
              },
              Xu = () => {
                null === Uu && (Uu = setTimeout(Zu, Math.max(0, ju + 250 - performance.now())))
              };
            return Zu(), uu.on("addRemoveDistanceChanged", Xu), () => {
              uu.off("addRemoveDistanceChanged", Xu), null !== Uu && (clearTimeout(Uu), Uu = null)
            }
          }(this.Uc.zb),
          Eu = bE(this.Uc);
        this.stopChunkReports = () => {
          uu(), Eu()
        }
      }
      restartChunkStreaming() {
        (0, jE.j)(this.Uc, (0, qu.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - cE.c)), this.startChunkReports()
      }
      register(uu) {
        const Eu = this.Uc,
          ju = (0, qu.b)();
        uu.gM(fu.hd, (uu => {
          gu.e.applyNewClientOptions(uu)
        })), uu.gM(fu.Jd, (uu => {
          OE.b.onReceiveColyseusPing(uu)
        })), uu.gM(fu.Xe, (uu => {
          let {
            key: Eu,
            value: ju
          } = uu;
          (0, Mu.setCookie)(this.gameNameWithVariation, Eu, ju)
        })), uu.gM(fu.Ze, (uu => {
          Du.h.TY("setDiscordReportKey", uu)
        })), (0, su.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), uu.gM(fu.pc, (Uu => {
          const {
            Cu: Zu,
            cu: Xu
          } = Uu;
          if ((0, su.setAdjustment)(Xu), this.connectionResume.onInitialInfo(Uu.Nu, Uu.Ou), su.offlineInputReplay.Wk(Uu.Yu), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Zu);
            try {
              null === Uu.hu && (0, qu.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), Pu(Eu.zb), gu.e.apply({
                shopInfo: null,
                _shopVersion: fE.b
              });
              const ju = Eu.YG.mEu(Eu.FQ);
              ju.mZ && (ju.chestClosed(), Du.h.TY("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Du.h.TY("initInfoReceived", uu)
            } finally {
              const uu = null === Uu.hu ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = uu, this.connectionResume.onResumeInitialInfo(Uu.hu, (() => {
                uu.endSeq = (0, qu.b)().client.inventoryPrediction.lastActionSeq
              })), null === uu && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Zu), YE.e.markAdmitted(), (0, jE.k)(Eu), Du.h.TY("loadingScreenState", "loadingPage:loadingWorld"), Eu.Huu = Zu, Eu.YG.xuu(Eu.FQ, Eu.YG.names.entityName) && Eu.YG.zV(Eu.FQ, Eu.YG.names.entityName), (0, qu.b)().setEntityName(Eu.Huu, (0, qu.b)().getRawEntityName(Eu.FQ)), Eu.EQ[Eu.Huu] = {}, Eu.YG.yV(Eu.FQ, Eu.YG.names.entityName), Du.h.TY("initInfoReceived", uu), this.startChunkReports(), ju.client.onServerConnectionFinalised()
        })), uu.gM(fu.Ie, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const uu = this.replayResume;
            if (this.replayResume = null, !uu) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: ju
            } = (0, qu.b)().client, {
              sync: Uu
            } = uu, Zu = new Set(su.offlineInputReplay.takeDroppedActions());
            if (Uu) {
              var Xu;
              const su = null !== (Xu = uu.endSeq) && void 0 !== Xu ? Xu : ju.lastActionSeq;
              ju.forget((uu => uu > Uu.XZ && uu <= su || Zu.has(uu))), XE(Eu, ju, Du.h, Uu.XZ, Uu.load)
            } else ju.dropPending(), ju.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), uu.gM(fu.qf, (uu => {
          let {
            kZ: ju,
            rZ: su,
            XZ: Uu
          } = uu;
          const {
            inventoryPrediction: Zu
          } = (0, qu.b)().client, Xu = () => {
            Eu.YG.mEu(Eu.FQ).loadFromString(ju)
          };
          this.replayResume && (this.replayResume.sync = {
            XZ: Uu,
            load: Xu
          }), XE(Eu, Zu, Du.h, Uu, Xu, su)
        })), uu.gM(fu.$d, (uu => {
          let {
            type: Eu,
            location1: ju,
            location2: su,
            location3: Uu,
            score: Zu
          } = uu;
          (0, hE.logProgressionEvent)({
            type: Eu,
            location1: ju,
            location2: su,
            location3: Uu,
            score: Zu
          })
        })), uu.gM(fu.Ge, (uu => {
          let {
            type: Eu,
            resourceType: ju,
            amount: su,
            category: Uu,
            itemName: Zu
          } = uu;
          (0, hE.logResourceEvent)({
            type: Eu,
            resourceType: ju,
            amount: su,
            category: Uu,
            itemName: Zu
          })
        })), uu.gM(fu.Pc, (uu => {
          let {
            leaveEventType: Eu,
            category: ju,
            subCategory: su,
            value: Uu
          } = uu;
          (0, hE.updateLeaveValue)({
            leaveEventType: Eu,
            category: ju,
            subCategory: su,
            value: Uu
          })
        })), uu.gM(fu.Lb, (uu => {
          let {
            cat1: Eu,
            cat2: ju,
            cat3: su,
            value: Uu
          } = uu;
          (0, hE.logCustomAnalyticsEvent)({
            cat1: Eu,
            cat2: ju,
            cat3: su,
            value: Uu
          })
        })), uu.gM(fu.Jc, (uu => {
          (0, qu.b)().client.leaveGameUnwanted({
            reason: uu,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, NE.navigatePreserveSearch)("/")
        })), uu.gM(fu.Oe, (uu => {
          Du.h.TY("serverUpdating", Date.now() + uu, !0)
        })), uu.gM(fu.fd, qE.b), uu.gM(fu.$c, (uu => {
          console.error(`[logErrorToConsole]: ${uu}`)
        }))
      }
    }
    var ME = ju(39336),
      eE = ju(39344),
      GE = ju(1069),
      pE = ju(39342),
      wE = ju(2533),
      JE = ju(3847);
    class dE {
      constructor(uu, Eu) {
        this.Uc = uu, this.clientApi = Eu
      }
      register(uu) {
        const Eu = this.Uc,
          ju = (0, qu.b)();
        uu.gM(fu.pb, (uu => {
          let {
            chatMsgId: Eu,
            content: ju,
            chatterEId: su
          } = uu;
          Du.h.TY("chat", {
            serverChatMsgId: Eu,
            content: ju,
            chatterEId: su
          }, !0)
        })), uu.gM(fu.wf, (uu => {
          Du.h.TY("TopRightHelper", uu, !0)
        })), uu.gM(fu.tf, (uu => {
          (0, ME.c)(uu)
        })), uu.gM(fu.Nc, (uu => {
          let {
            category: Eu,
            timeframe: ju,
            data: su
          } = uu;
          Du.h.TY("leaderboardResponse", {
            category: Eu,
            timeframe: ju,
            data: su
          })
        })), uu.gM(fu.mf, (() => {
          Du.h.TY("showShopTutorial", null, !0)
        })), uu.gM(fu.Yd, (uu => {
          Du.h.TY("progressBarUpdate", uu, !0)
        })), uu.gM(fu.tc, (uu => {
          Du.h.TY("middleScreenBarInitiate", {
            duration: uu.BU,
            LU: uu.LU,
            horizBarRemOffset: uu.tU
          }, !0)
        })), uu.gM(fu.ke, (() => {
          Du.h.TY("middleScreenBarRemove", !0)
        })), uu.gM(fu.Ye, (uu => {
          let {
            id: Eu,
            position: ju,
            style: su,
            KE: Uu,
            rE: Zu
          } = uu;
          Du.h.TY("setDirectionArrow", {
            id: Eu,
            position: ju,
            style: su,
            text: (0, fu.t)(Uu),
            rE: Zu
          }, !0)
        })), uu.gM(fu.vb, (uu => {
          let {
            id: Eu
          } = uu;
          Du.h.TY("clearDirectionArrow", {
            id: Eu
          }, !0)
        })), uu.gM(fu.Jb, (uu => {
          (0, JE.onCosmeticPackGranted)(uu)
        })), uu.gM(fu.ud, (uu => {
          let {
            id: Eu,
            Hu: ju
          } = uu;
          const {
            type: Uu,
            params: Zu
          } = (0, eE.i)(ju), Xu = {
            ...Zu
          };
          for (const su of eE.e) su in Xu && Xu[su] && (Xu[su] = (0, fu.t)(Xu[su]));
          DE.d.queueQTE(Eu, Uu, Xu).getResult().then((uu => {
            "boolean" === typeof uu && (0, su.sendColyMessage)(fu.vi, {
              qteId: Eu,
              qteResponse: uu
            })
          }))
        })), uu.gM(fu.oe, (uu => {
          DE.d.cancelQTE(uu)
        })), (0, su.onGameResetOnce)((() => {
          DE.d.reset()
        })), uu.gM(fu.wd, (uu => {
          let {
            id: Eu,
            clientParameters: ju
          } = uu;
          (0, lE.g)(Eu, ju)
        })), uu.gM(fu.pe, (uu => {
          (0, lE.i)(uu)
        })), uu.gM(fu.Bf, (uu => {
          let {
            text: Eu,
            id: ju,
            destructive: Uu
          } = uu;
          (0, lE.k)(ju, Eu, Uu, (uu => {
            (0, su.sendColyMessage)(fu.Kj, {
              qq: ju,
              fq: uu,
              Cq: 5
            })
          }))
        })), uu.gM(fu.Ed, (uu => {
          let {
            info: Eu
          } = uu;
          Du.h.TY("overShopInfo", Eu, !0)
        })), uu.gM(fu.$b, (uu => {
          let {
            qu: ju,
            fu: su
          } = uu;
          this.clientApi.openShop(Eu.FQ, ju, su)
        })), uu.gM(fu.Yb, (uu => {
          let {
            SZ: Eu,
            IZ: ju,
            FZ: su
          } = uu;
          Du.h.TY("flyingMiddleMessage", {
            content: (0, fu.t)(Eu),
            IZ: ju,
            FZ: su
          }, !0)
        })), uu.gM(fu.Qf, (uu => {
          const Eu = uu === GE.f ? null : {
            message: `Currently loaded as variation: ${uu}`,
            type: "Warning"
          };
          Du.h.TY("showPermanentBottomMessage", Eu, !0)
        })), uu.gM(fu.cc, (uu => {
          let {
            messageType: Eu,
            data: su
          } = uu;
          (0, pE.i)(Eu) ? (0, pE.e)(Eu, su) : ("freeCamPerms" === Eu && ju.client.freeCameraController.setPerms(su.key, su.value), ju.client.triggerGameCallback("onReceivedMessageFromServer", Eu, su))
        })), uu.gM(fu.Cb, wE.l)
      }
    }
    class aE {
      constructor(uu, Eu, ju, su) {
        this.gameNameWithVariation = uu, this.Uc = ju, this.connectionResume = su, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new Gu.b(Eu, this.Uc)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, su.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      kfu(uu) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Gu.b(uu, this.Uc), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(uu, Eu) {
        const ju = this.Uc,
          su = uu => {
            this.stateReplicationHandler.setUpIfQueued(uu)
          };
        new gE(ju, this.gameNameWithVariation, this.connectionResume).register(uu), new ou(ju).register(uu), new nu(ju).register(uu), new ru(ju, su).register(uu), new Tu(ju, su).register(uu), new dE(ju, Eu).register(uu), new ZE(ju, su).register(uu)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var PE = ju(39351),
      oE = ju(39354),
      kE = ju(701),
      mE = ju(3099);
    class vE {
      constructor(uu, Eu, ju, su) {
        this.msgHandler = ju, this.listener = su, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new PE.e({
          reconnect: uu,
          isLive: () => su.isLive(),
          onReconnected: uu => {
            this.resumeOnRoom(uu)
          },
          onGaveUp: (uu, Eu) => {
            su.onGaveUp(uu, Eu)
          },
          freeze: Eu,
          releaseSeat: Eu => {
            uu(Eu).then((uu => {
              uu.leave(!0)
            }), (uu => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", uu)
            }))
          }
        })
      }
      onInitialInfo(uu, Eu) {
        this.session.onInitialInfo(uu, Eu)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(uu, Eu) {
        if (this.session.onResuming(), null === uu) {
          try {
            (0, qu.b)().client.itemDropPrediction.reset()
          } catch (ju) {
            console.error("Error dropping the item drop predictions on resuming", ju)
          }
          return su.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, qu.b)().client.itemDropPrediction.onResumeReplayOffered(), su.offlineInputReplay.replayFrom(uu.gu, Eu)
      }
      onResumed(uu) {
        this.setSuspended(!1), (0, su.resendBeacons)();
        try {
          uu()
        } catch (Eu) {
          console.error("Error completing the resume", Eu)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(uu) {
        const Eu = (0, kE.j)((() => uu.connection.isOpen));
        uu.pM(Eu);
        const ju = new oE.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(uu, "silent"), uu.leave(!1))
        }));
        uu.onStateChange((() => {
          ju.heard()
        }));
        const su = Eu => {
          Eu.persisted || uu.leave(!0)
        };
        window.addEventListener("pagehide", su), uu.pM(((Eu, ju) => {
          if (uu === this.attachedRoom && this.listener.isLive()) return (0, Zu.h)(Eu) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Eu}, reconnecting`), this.listener.onDropped(Eu, ju), void this.onConnectionDropped(uu, String(Eu))) : void this.listener.onRoomLeft(Eu, ju)
        })), this.attachedRoom = uu, this.detachRoomListeners = () => {
          Eu(), ju.dispose(), window.removeEventListener("pagehide", su)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(uu) {
        uu !== this.suspended && (this.suspended = uu, (0, su.setConnectionSuspended)(uu), (0, qu.b)().client.itemDropPrediction.setSuspended(uu))
      }
      detachRoom() {
        var uu;
        null === (uu = this.detachRoomListeners) || void 0 === uu || uu.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(uu, Eu) {
        (0, mE.reportClientError)("disconnect", "Left room", Eu), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), su.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(uu.reconnectionToken)
      }
      resumeOnRoom(uu) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), uu.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, xu.n)(), su.offlineInputReplay.onConnectionReplaced(), this.msgHandler.kfu(uu), this.listener.onReconnected(uu), this.attachRoom(uu)
      }
    }
    var KE = ju(3148),
      VE = ju(3152),
      rE = ju(1369),
      QE = ju(1353),
      iE = ju(4858),
      WE = ju(3336),
      SE = ju(1128),
      IE = ju(38105),
      FE = ju(39362),
      BE = ju(9128),
      LE = ju(39367),
      tE = ju(1259),
      xE = ju(36870),
      TE = ju(39371),
      HE = ju(1767),
      AE = ju(2902);

    function nE(uu) {
      var Eu, ju;
      if ("object" !== typeof uu || null === uu) return {
        errType: typeof uu
      };
      const su = uu;
      return {
        errType: null !== (Eu = null === (ju = uu.constructor) || void 0 === ju ? void 0 : ju.name) && void 0 !== Eu ? Eu : "",
        errName: "string" === typeof su.name ? su.name : "",
        eventType: "string" === typeof su.type ? su.type : "",
        errStack: "string" === typeof su.stack ? su.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function yE(uu) {
      if ("undefined" !== typeof ProgressEvent && uu instanceof ProgressEvent) return !0;
      if (!(uu instanceof Error)) return !1;
      const Eu = uu.code;
      return "ServerError" === uu.name && void 0 === Eu || "AbortError" === uu.name || "seat reservation expired." === uu.message || "early_leave" === uu.message
    }(0, Yu.m)((uu => {
      (0, mE.reportClientError)("wasm_net", uu)
    }));
    let zE = !0;

    function RE() {
      zE = !1
    }
    class uj {
      constructor(uu) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.Uc = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = uu.gameNameWithVariation, this.lobbyName = uu.lobbyName, this.colyClient = uu.colyClient, this.userContext = uu.userContext
      }
      async connectToServer(uu, Eu, ju) {
        gu.e.reset(), uu.EQ = {
          [uu.FQ]: {}
        }, uu.Huu = void 0, (0, xu.n)(), (0, qu.b)().removeAllEntityNames(), (0, qu.b)().setEntityName(uu.FQ, this.userContext.getPlayerName()), (0, rE.m)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, HE.d)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Xu = performance.now();
        ju.aborted || (0, QE.s)("wasm_core_ready", Xu);
        const lu = (0, LE.h)(this.userContext, (() => {
          const {
            roomName: su,
            joinOptions: Uu
          } = (0, eu.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, Eu, (uu => WE.d.isUsingCustomGameTexturePack(uu)));
          return Uu.joinAdHold = this.joinAdHold, Uu.renderBackend = (0, AE.e)(uu.tO), (0, FE.e)((() => this.colyClient.joinOrCreateUntil(ju, su, Uu)), ju)
        }));
        return Du.h.TY("loadingScreenState", "loadingPage:joiningLobby"), await lu.then((Eu => {
          if (this.joinedAt = performance.now(), (0, QE.s)("wasm_joined", this.joinedAt), this.Uc = uu, this.joinAdHold) {
            const uu = (0, HE.p)((() => {
              Eu.send(Uu.e), (0, QE.l)(), YE.e.markJoinAdEnded()
            }));
            Eu.pM(uu), (0, su.onGameResetOnce)(uu)
          }
          const ju = new hu(Eu);
          this.connectionResume = new vE((uu => this.colyClient.reconnect(uu)), (Eu => {
            uu.Wm(Eu)
          }), ju, {
            isLive: () => (0, qu.b)().client.getMsgHandler() === ju,
            onDropped: (uu, Eu) => {
              (0, VE.j)(uu) || this.logUnrecognisedConnectionLoss(uu, void 0, {
                site: "drop",
                closeReason: null !== Eu && void 0 !== Eu ? Eu : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (uu, Eu) => {
              this.onRoomLeft(uu, Eu)
            },
            onReconnected: uu => {
              this.incomingMsgInitialisor.kfu(uu), this.checkSendPath = (0, IE.d)(ju, uu, Yu.o)
            },
            onGaveUp: (uu, Eu) => {
              this.onResumeGaveUp(uu, Eu)
            }
          }), this.connectionResume.attachRoom(Eu), (0, su.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Zu = ju.send,
            Xu = ju.gM,
            lu = ju.kju.send,
            fu = ju.kju.gM,
            Cu = ju.Pfu;
          this.checkSendPath = (0, IE.d)(ju, Eu, Yu.o);
          const bu = setInterval((() => {
            Zu === ju.send && Xu === ju.gM && lu === ju.kju.send && fu === ju.kju.gM && Cu === ju.Pfu || RE(), this.checkSendPath()
          }), 1e4);
          return (0, su.onGameResetOnce)((() => {
            clearInterval(bu)
          })), {
            success: !0,
            successDetails: ju
          }
        })).catch((Eu => {
          if (ju.aborted && Eu === (0, tE.f)(ju)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (Eu instanceof xE.g) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: Eu.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, TE.d)(Eu, Eu.leg)
            }
          };
          uu.OY(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Eu.code}\n`, Eu);
          const su = Eu.code;
          return su === Zu.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Zu.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(su, Eu.message, {
                site: "join",
                sinceJoinStart: (0, VE.e)(performance.now() - Xu),
                ...nE(Eu)
              }, yE(Eu)),
              rematch: (0, FE.d)(Eu),
              gameRefused: (0, BE.d)(Eu),
              joinFailure: (0, TE.d)(Eu, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(uu, Eu, ju) {
        Du.h.TY("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new aE(this.gameNameWithVariation, Eu.kju, uu, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Uu = Eu.Vfu();
        this.incomingMsgInitialisor.setupOnMessageListeners(Uu, ju), (0, su.onConnectionToServerReady)(Uu, Eu), this.joinAdHold && YE.e.markAdmissionAwaited(), Uu.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(uu, Eu) {
        (0, SE.YY)(new Error("Reconnect failed"), {
          ...(0, KE.l)(Eu),
          game: this.gameNameWithVariation
        }), (0, mE.reportClientError)("disconnect", "Reconnect failed", Eu.reason), (0, qu.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !uu,
          canPlayAgain: uu,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, NE.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, VE.e)(performance.now() - this.joinedAt)
      }
      onRoomLeft(uu, Eu) {
        var ju;
        if (uu === Zu.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${uu}`), uu === Zu.b.serverUpdating.code) return (0, mE.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, qu.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Uc.OY(`Kicked from server with code ${uu}`, new Error);
        const su = Object.keys(Zu.b).find((Eu => Zu.b[Eu].code === uu));
        (0, mE.reportClientError)("disconnect", "Left room", null !== su && void 0 !== su ? su : String(uu));
        const Uu = this.onConnectionToServerLost(uu, void 0, {
          site: "leave",
          closeReason: null !== Eu && void 0 !== Eu ? Eu : "",
          sinceJoined: this.sinceJoined()
        });
        (0, qu.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Uu.reason}`,
          canReconnect: Uu.canReconnect,
          requiresRefresh: Uu.requiresRefresh,
          automaticallyReconnect: null !== (ju = Uu.automaticallyReconnect) && void 0 !== ju && ju
        }), (0, NE.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, iE.G)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, NE.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(uu, Eu, ju) {
        var su;
        let Uu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (su = Eu) && void 0 !== su && su.endsWith(Zu.l) && (this.userContext.invalidateTrafficCode(), Eu = Eu.replace(Zu.l, "")), uu === Zu.b.outdatedVersion.code) return console.error("Outdated client with version ", Xu.b, ", refreshing page"), (0, Mu.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (uu === Zu.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Mu.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Xu in Zu.b) {
          const {
            code: ju,
            text: su,
            canReconnect: Uu
          } = Zu.b[Xu];
          if (ju === uu) {
            console.log("matched known error", uu, "leaving game");
            return {
              reason: "" !== su ? su : Eu || `Code: ${uu}`,
              requiresRefresh: !1,
              canReconnect: Uu,
              automaticallyReconnect: ju === Zu.b.customGameUpdated.code || ju === Zu.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, VE.i)(uu) || Uu ? console.warn("Connection lost", uu, Eu) : this.logUnrecognisedConnectionLoss(uu, Eu, ju), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${uu}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Uu ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(uu, Eu, ju) {
        (0, SE.YY)(new Error("Unrecognised connection loss"), {
          code: String(uu),
          cause: null !== Eu && void 0 !== Eu ? Eu : "",
          ...ju,
          game: this.gameNameWithVariation,
          ...(0, VE.n)()
        })
      }
    }
  },
  39285: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Tj,
      c: () => Rj
    });
    var su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju, du, au, Pu, ou, ku, mu, vu, Ku, Vu, ru, Qu, iu, Wu, Su, Iu, Fu, Bu, Lu, tu, xu, Tu, Hu, Au, nu, yu, zu, Ru, uE, EE, jE, sE, UE, ZE, XE, lE, qE, fE, CE, bE, cE, NE, OE, YE, hE, DE, gE, ME, eE, GE, pE, wE, JE, dE, aE, PE, oE, kE, mE, vE, KE, VE, rE, QE, iE, WE, SE, IE, FE, BE, LE, tE, xE, TE, HE, AE, nE, yE, zE = ju(24),
      RE = ju(37547),
      uj = ju(39296),
      Ej = ju(39303),
      jj = ju(9329),
      sj = ju(645),
      Uj = ju(636),
      Zj = ju(37185);
    let Xj = (su = (0, jj.type)("number"), Uu = (0, jj.type)("number"), Zu = (0, jj.type)("number"), Xu = (0, jj.type)("number"), lu = (0, jj.type)("number"), qu = (0, jj.type)("number"), fu = (0, jj.type)("string"), Cu = class extends jj.Schema {
        constructor() {
          super(...arguments), (0, uj.b)(this, "id", bu, this), (0, uj.b)(this, "amount", cu, this), (0, uj.b)(this, "x", Nu, this), (0, uj.b)(this, "y", Ou, this), (0, uj.b)(this, "z", Yu, this), (0, uj.b)(this, "size", hu, this), (0, uj.b)(this, "attributes", Du, this)
        }
      }, bu = (0, Ej.e)(Cu.prototype, "id", [su], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cu = (0, Ej.e)(Cu.prototype, "amount", [Uu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Nu = (0, Ej.e)(Cu.prototype, "x", [Zu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ou = (0, Ej.e)(Cu.prototype, "y", [Xu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Yu = (0, Ej.e)(Cu.prototype, "z", [lu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hu = (0, Ej.e)(Cu.prototype, "size", [qu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Du = (0, Ej.e)(Cu.prototype, "attributes", [fu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Cu),
      lj = (gu = (0, jj.type)("string"), Mu = (0, jj.type)("string"), eu = class extends jj.Schema {
        constructor() {
          super(...arguments), (0, uj.b)(this, "itemName", Gu, this), (0, uj.b)(this, "enchantmentTier", pu, this)
        }
      }, Gu = (0, Ej.e)(eu.prototype, "itemName", [gu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), pu = (0, Ej.e)(eu.prototype, "enchantmentTier", [Mu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), eu),
      qj = (wu = (0, jj.type)("string"), Ju = (0, jj.type)("string"), du = (0, jj.type)("number"), au = (0, jj.type)("number"), Pu = (0, jj.type)("number"), ou = (0, jj.type)("float32"), ku = (0, jj.type)("float32"), mu = (0, jj.type)("float32"), vu = (0, jj.type)("string"), Ku = (0, jj.type)(["number"]), Vu = (0, jj.type)("boolean"), ru = class extends jj.Schema {
        constructor() {
          super(...arguments), (0, uj.b)(this, "type", Qu, this), (0, uj.b)(this, "name", iu, this), (0, uj.b)(this, "x", Wu, this), (0, uj.b)(this, "y", Su, this), (0, uj.b)(this, "z", Iu, this), (0, uj.b)(this, "xRotation", Fu, this), (0, uj.b)(this, "yRotation", Bu, this), (0, uj.b)(this, "zRotation", Lu, this), (0, uj.b)(this, "followingEId", tu, this), (0, uj.b)(this, "followingOffset", xu, this), (0, uj.b)(this, "shouldMatchFollowingEntityRotation", Tu, this)
        }
      }, Qu = (0, Ej.e)(ru.prototype, "type", [wu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), iu = (0, Ej.e)(ru.prototype, "name", [Ju], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Wu = (0, Ej.e)(ru.prototype, "x", [du], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Su = (0, Ej.e)(ru.prototype, "y", [au], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Iu = (0, Ej.e)(ru.prototype, "z", [Pu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Fu = (0, Ej.e)(ru.prototype, "xRotation", [ou], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Bu = (0, Ej.e)(ru.prototype, "yRotation", [ku], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Lu = (0, Ej.e)(ru.prototype, "zRotation", [mu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tu = (0, Ej.e)(ru.prototype, "followingEId", [vu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), xu = (0, Ej.e)(ru.prototype, "followingOffset", [Ku], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new jj.ArraySchema(0, 0, 0)
        }
      }), Tu = (0, Ej.e)(ru.prototype, "shouldMatchFollowingEntityRotation", [Vu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), ru),
      fj = (Hu = (0, jj.type)("float32"), Au = (0, jj.type)("float32"), nu = (0, jj.type)("boolean"), yu = (0, jj.type)("boolean"), zu = (0, jj.type)("float32"), Ru = (0, jj.type)("boolean"), uE = (0, jj.type)("string"), EE = (0, jj.type)("string"), jE = (0, jj.type)("string"), sE = (0, jj.type)("string"), UE = (0, jj.type)(["number"]), ZE = (0, jj.type)("number"), XE = (0, jj.type)({
        map: lj
      }), lE = class extends qj {
        constructor() {
          super(...arguments), (0, uj.b)(this, "scale", qE, this), (0, uj.b)(this, "speed", fE, this), (0, uj.b)(this, "jumping", CE, this), (0, uj.b)(this, "crouching", bE, this), (0, uj.b)(this, "cameraPitch", cE, this), (0, uj.b)(this, "armSwinging", NE, this), (0, uj.b)(this, "heldItemName", OE, this), (0, uj.b)(this, "heldItemEnchantmentTier", YE, this), (0, uj.b)(this, "pose", hE, this), (0, uj.b)(this, "ridingVehicleEId", DE, this), (0, uj.b)(this, "meshOffset", gE, this), (0, uj.b)(this, "baseRenderHeading", ME, this), (0, uj.b)(this, "armour", eE, this)
        }
      }, qE = (0, Ej.e)(lE.prototype, "scale", [Hu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), fE = (0, Ej.e)(lE.prototype, "speed", [Au], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), CE = (0, Ej.e)(lE.prototype, "jumping", [nu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), bE = (0, Ej.e)(lE.prototype, "crouching", [yu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), cE = (0, Ej.e)(lE.prototype, "cameraPitch", [zu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), NE = (0, Ej.e)(lE.prototype, "armSwinging", [Ru], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), OE = (0, Ej.e)(lE.prototype, "heldItemName", [uE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), YE = (0, Ej.e)(lE.prototype, "heldItemEnchantmentTier", [EE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), hE = (0, Ej.e)(lE.prototype, "pose", [jE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), DE = (0, Ej.e)(lE.prototype, "ridingVehicleEId", [sE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), gE = (0, Ej.e)(lE.prototype, "meshOffset", [UE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new jj.ArraySchema(0, 0, 0)
        }
      }), ME = (0, Ej.e)(lE.prototype, "baseRenderHeading", [ZE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eE = (0, Ej.e)(lE.prototype, "armour", [XE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new jj.MapSchema
        }
      }), lE),
      Cj = (GE = (0, jj.type)("string"), pE = (0, jj.type)("string"), wE = (0, jj.type)("string"), JE = (0, jj.type)("uint8"), dE = class extends fj {
        constructor() {
          super(...arguments), (0, uj.b)(this, "variation", aE, this), (0, uj.b)(this, "ownerDbId", PE, this), (0, uj.b)(this, "metaInfo", oE, this), (0, uj.b)(this, "aiState", kE, this)
        }
      }, aE = (0, Ej.e)(dE.prototype, "variation", [GE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), PE = (0, Ej.e)(dE.prototype, "ownerDbId", [pE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), oE = (0, Ej.e)(dE.prototype, "metaInfo", [wE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), kE = (0, Ej.e)(dE.prototype, "aiState", [JE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dE);
    mE = (0, jj.type)("string"), vE = (0, jj.type)("string"), KE = (0, jj.type)("string"), VE = (0, jj.type)("string"), rE = class extends qj {
      constructor() {
        super(...arguments), (0, uj.b)(this, "meshKind", QE, this), (0, uj.b)(this, "meshOpts", iE, this), (0, uj.b)(this, "pose", WE, this), (0, uj.b)(this, "leaderboardTop", SE, this)
      }
    }, QE = (0, Ej.e)(rE.prototype, "meshKind", [mE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), iE = (0, Ej.e)(rE.prototype, "meshOpts", [vE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), WE = (0, Ej.e)(rE.prototype, "pose", [KE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), SE = (0, Ej.e)(rE.prototype, "leaderboardTop", [VE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function bj(uu) {
      return Object.keys(jj.Metadata.getFields(uu))
    }
    const cj = bj(Cj);
    for (const us of sj.n)
      if (!cj.includes(us)) throw new Error(`Mob Schema is missing a networked property: "${us}"`);
    const Nj = bj((IE = (0, jj.type)("string"), FE = (0, jj.type)("float32"), BE = (0, jj.type)("float32"), LE = (0, jj.type)("float32"), tE = (0, jj.type)("float32"), xE = class extends qj {
      constructor() {
        super(...arguments), (0, uj.b)(this, "soundName", TE, this), (0, uj.b)(this, "volume", HE, this), (0, uj.b)(this, "refDistance", AE, this), (0, uj.b)(this, "maxHearDist", nE, this), (0, uj.b)(this, "rate", yE, this)
      }
    }, TE = (0, Ej.e)(xE.prototype, "soundName", [IE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), HE = (0, Ej.e)(xE.prototype, "volume", [FE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), AE = (0, Ej.e)(xE.prototype, "refDistance", [BE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Zj.j
      }
    }), nE = (0, Ej.e)(xE.prototype, "maxHearDist", [LE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Zj.d
      }
    }), yE = (0, Ej.e)(xE.prototype, "rate", [tE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), xE));
    for (const us of Uj.l)
      if (!Nj.includes(us)) throw new Error(`AudioEntity Schema is missing a replicated property: "${us}"`);
    var Oj = ju(38764),
      Yj = ju(1298),
      hj = ju(649),
      Dj = ju(38568),
      gj = ju(4427),
      Mj = ju(349),
      ej = ju(37671),
      Gj = ju(38462),
      pj = ju(2329),
      wj = ju(37646),
      Jj = ju(38787),
      dj = ju(37794),
      aj = ju(366),
      Pj = ju.n(aj),
      oj = ju(38324),
      kj = ju(37474),
      mj = ju(38447),
      vj = ju(38474);
    class Kj {
      constructor(uu, Eu) {
        this.bloxd = uu, this.eId = Eu, this.Uc = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.fO = !1, this.Uc = uu.Uc
      }
      initClient(uu) {
        var Eu, ju, su;
        this.colyseusEntity = uu, this.meshKind = uu.meshKind, this.meshOpts = uu.meshOpts, this.leaderboardTop = uu.leaderboardTop, this.Uc.YG.add([uu.x, uu.y, uu.z], 1, 1, null, null, !1, !1, this.eId), this.Uc.YG.yV(this.eId, "smoothToServerPos");
        const Uu = "Person" === this.meshKind;
        this.Uc.YG.yV(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Uu ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Uu ? [{
            nodeName: "HeadMesh",
            softTolerance: Jj.h,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = zE.h.subscribe(`otherEntitySettings|${this.eId}|canSee`, (uu => {
          this.updateHidingMeshMgr()
        }));
        const Zu = () => {
          const uu = this.Uc.YG.GEu(this.eId);
          if (!uu) return;
          const Eu = (0, dj.f)(this.eId);
          if ("number" === typeof uu.mV) {
            var ju, su, Uu, Zu;
            const Xu = null === (ju = (0, pj.m)("head", null === (Uu = this.getSpec()) || void 0 === Uu || null === (Zu = Uu.opts.textures) || void 0 === Zu ? void 0 : Zu.head)) || void 0 === ju || null === (su = ju.personModel) || void 0 === su ? void 0 : su.fullBody;
            return this.Uc.tO.oV.setPickable(uu.mV, Eu && !Xu), void(0, kj.updatePersonAttachmentPickability)(this.Uc, this.eId, Eu)
          }
          const Xu = uu.mesh;
          if (Xu)
            for (const lu of [Xu, ...Xu.getChildMeshes(!1)]) "VY" in lu && !lu.name.startsWith("Cape|") && (lu.VY = Eu)
        };
        this.canAttackSub = zE.h.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Zu), this.interactableSub = zE.h.subscribe(`otherEntitySettings|${this.eId}|interactable`, Zu), this.overlayColourSub = zE.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (uu => {
          this.updateOverlayColour(uu)
        })), this.opacitySub = zE.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (uu => {
          this.updateOpacity(uu)
        })), this.zIndexSub = zE.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (uu => {
          this.updateZIndex(uu)
        }));
        const Xu = this.Uc.EQ[this.Uc.FQ][this.eId];
        this.updateOverlayColour(null !== (Eu = null === Xu || void 0 === Xu ? void 0 : Xu.overlayColour) && void 0 !== Eu ? Eu : null), this.updateOpacity(null !== (ju = null === Xu || void 0 === Xu ? void 0 : Xu.opacity) && void 0 !== ju ? ju : 1), this.updateZIndex(null !== (su = null === Xu || void 0 === Xu ? void 0 : Xu.zIndex) && void 0 !== su ? su : 0), this.multilineTextBoxSub = (0, wj.r)(this.Uc, this.eId)
      }
      onChangeClient(uu, Eu) {
        if ("xRotation" === uu || "yRotation" === uu || "zRotation" === uu)(0, wj.v)(this.Uc, this.eId, uu, Eu);
        else if ("pose" === uu) {
          const uu = this.Uc.YG.PEu(this.eId);
          uu && (uu.pose = Eu || "standing")
        } else "meshKind" === uu || "meshOpts" === uu ? (this[uu] = Eu, this.queueMeshRebuild()) : "name" === uu && "" !== Eu ? this.updateHidingMeshMgr() : "leaderboardTop" === uu && (this.leaderboardTop = Eu, zE.h.TY(`leaderboardTop|${this.eId}`, Eu))
      }
      disposeClient() {
        this.fO = !0, this.Uc.YG.deleteEntity(this.eId), zE.h.unsubscribe(this.canSeeSub), zE.h.unsubscribe(this.canAttackSub), zE.h.unsubscribe(this.interactableSub), zE.h.unsubscribe(this.overlayColourSub), zE.h.unsubscribe(this.opacitySub), zE.h.unsubscribe(this.zIndexSub), zE.h.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var uu, Eu;
        return {
          canSee: null !== (uu = null === (Eu = this.Uc.EQ[this.Uc.FQ][this.eId]) || void 0 === Eu ? void 0 : Eu.canSee) && void 0 !== uu && uu,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var uu, Eu, ju;
        const {
          Uc: su
        } = this, {
          YG: Uu
        } = su, Zu = this.getCurrentHidingMeshMgrState();
        if ((0, Mj.he)(this.previousHidingMeshManagerState, Zu)) return;
        if (this.previousHidingMeshManagerState = Zu, Uu.zV(this.eId, "hidingMeshManager"), null === (uu = su.EQ[su.FQ][this.eId]) || void 0 === uu || !uu.canSee) return;
        const Xu = this.getSpec();
        if (!Xu) return;
        const {
          type: lu,
          opts: qu
        } = Xu;
        "Person" === lu && (qu.textures = (0, pj.q)(qu.textures)), qu.eId = this.eId, Uu.yV(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var uu, Eu, ju;
            "Leaderboard" === lu && (qu.leaderboardTop = this.leaderboardTop);
            const Zu = this.bloxd.client.meshCreator.getEntityMesh(lu, qu, (uu => {
              var Eu, ju;
              if ("number" === typeof uu) {
                var Uu, Zu, Xu;
                const Eu = su.tO.oV;
                Eu.setEntityId(uu, this.eId);
                const ju = "Person" === lu && (null === (Uu = (0, pj.m)("head", null === (Xu = qu.textures) || void 0 === Xu ? void 0 : Xu.head)) || void 0 === Uu || null === (Zu = Uu.personModel) || void 0 === Zu ? void 0 : Zu.fullBody);
                return void Eu.setPickable(uu, (0, dj.f)(this.eId) && !ju)
              }
              const fu = uu;
              for (const lu of [fu, ...fu.getChildMeshes(!1)]) void 0 === lu.VY || lu.name.startsWith("Cape|") || (lu.VY = (0, dj.f)(this.eId), lu.metadata ??= new su.tO.rY, lu.metadata.eId = this.eId);
              this.updateOpacity(null !== (Eu = null === (ju = su.EQ[su.FQ][this.eId]) || void 0 === ju ? void 0 : ju.opacity) && void 0 !== Eu ? Eu : 1)
            }));
            if (!Zu) return;
            const {
              mV: Xu,
              mesh: fu,
              meshOffset: Cu,
              nameYOffset: bu,
              modelLoaded: cu
            } = Zu;
            null === cu || void 0 === cu || cu.then((() => {
              var uu;
              (null === (uu = Uu.GEu(this.eId)) || void 0 === uu ? void 0 : uu.mesh) === fu && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Nu = null === Xu ? null : su.tO.oV.csu(Xu, 0);
            if (Uu.yV(this.eId, Uu.names.mesh, {
                mV: Xu,
                rju: Nu,
                mesh: fu,
                Zlu: !1,
                iju: "Leaderboard" !== lu,
                offset: Cu.slice(),
                Ulu: "ParticleEmitter" === lu && qu.followTargetMeshOffset ? uu => {
                  var Eu;
                  Pj().copy(uu, Cu);
                  const ju = null === (Eu = Uu.Cju(this.eId)) || void 0 === Eu ? void 0 : Eu.jO,
                    su = void 0 === ju ? null : Uu.PEu(ju);
                  if (su) {
                    var Zu, Xu;
                    const Eu = this.bloxd.getEntityHeading(null !== (Zu = su.ridingVehicleEId) && void 0 !== Zu ? Zu : ju, !0),
                      Uu = Math.sin(Eu),
                      lu = Math.cos(Eu);
                    uu[0] += su.meshOffset[0] * lu + su.meshOffset[2] * Uu, uu[1] += su.meshOffset[1], uu[2] += su.meshOffset[2] * lu - su.meshOffset[0] * Uu;
                    const qu = null !== (Xu = su.ridingVehicleEId) && void 0 !== Xu ? Xu : null;
                    null !== qu && (0, vj.e)(this.Uc, qu, uu)
                  }
                } : null
              }), "Person" === lu) {
              var Ou, Yu, hu, Du;
              Uu.yV(this.eId, Uu.names.meshAttachments, {
                personFullBody: null !== (Ou = null === (Yu = (0, pj.m)("head", null === (Du = qu.textures) || void 0 === Du ? void 0 : Du.head)) || void 0 === Yu || null === (hu = Yu.personModel) || void 0 === hu ? void 0 : hu.fullBody) && void 0 !== Ou && Ou
              });
              for (const uu of Yj.u) {
                var gu, Mu, eu;
                const Eu = null === (gu = qu.textures) || void 0 === gu ? void 0 : gu[uu];
                Eu && null !== (Mu = (0, pj.m)(uu, Eu)) && void 0 !== Mu && null !== (eu = Mu.attachments) && void 0 !== eu && eu.length && Gj.b.Player.meshApi.updatePlayerCosmetic(this.eId, Xu, uu, Eu)
              }
              Uu.yV(this.eId, Uu.names.moveState), Uu.yV(this.eId, "updateWalkingState", {
                mV: Xu,
                rju: Nu,
                walkingLegSwingDuration: Jj.o
              }), Uu.yV(this.eId, "humanoidMesh", {
                mV: Xu,
                rju: Nu,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Uu.yV(this.eId, "animator", {
                mV: Xu,
                rju: Nu,
                modelLifeformType: "Player"
              }), mj.d.hasAnimation("Person") && Uu.yV(this.eId, "rigAnimation", {
                target: "Person",
                mV: Xu
              }), Uu.PEu(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === lu && null !== Xu) {
              Uu.yV(this.eId, "animator", {
                mV: Xu,
                rju: Nu,
                modelLifeformType: null
              });
              const uu = (0, Dj.o)(qu.blockName);
              null !== uu && Uu.yV(this.eId, "rigAnimation", {
                target: uu,
                mV: Xu
              })
            }
            Uu.alu(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: bu
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === qu.autoRotate && (Uu.zV(this.eId, "meshRotation"), Uu.yV(this.eId, "autoRotate"));
            const {
              lineToEId: Gu
            } = qu;
            (0, hj.H)(Gu) || Uu.yV(this.eId, "lineToEntity", {
              lineToEId: Gu
            });
            const pu = su.EQ[su.FQ][this.eId];
            this.updateOverlayColour(null !== (uu = null === pu || void 0 === pu ? void 0 : pu.overlayColour) && void 0 !== uu ? uu : null), this.updateOpacity(null !== (Eu = null === pu || void 0 === pu ? void 0 : pu.opacity) && void 0 !== Eu ? Eu : 1), this.updateZIndex(null !== (ju = null === pu || void 0 === pu ? void 0 : pu.zIndex) && void 0 !== ju ? ju : 0)
          },
          removeMeshComponent: () => {
            "Person" !== lu && "BloxdBlock" !== lu || Uu.zV(this.eId, "rigAnimation"), Uu.zV(this.eId, Uu.names.mesh), Uu.xuu(this.eId, Uu.names.meshAttachments) && Uu.zV(this.eId, Uu.names.meshAttachments), Uu.zV(this.eId, "entityName"), Uu.zV(this.eId, "autoRotate"), Uu.zV(this.eId, "lineToEntity"), "Person" === lu ? (Uu.zV(this.eId, Uu.names.moveState), Uu.zV(this.eId, "updateWalkingState"), Uu.zV(this.eId, "humanoidMesh"), Uu.zV(this.eId, "animator")) : "BloxdBlock" === lu && Uu.zV(this.eId, "animator")
          },
          hideDist: null !== (Eu = qu.hideDist) && void 0 !== Eu ? Eu : 80,
          movingHideDist: null !== (ju = qu.hideDist) && void 0 !== ju ? ju : 120,
          displayOutsideLoadedChunk: qu.hideDist > 100,
          immediatelyUpdate: !0,
          nl: "BloxdBlock" === lu ? qu.blockName : lu
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.fO || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, gj.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(uu) {
        var Eu, ju;
        if ("Person" !== this.meshKind) return;
        let su = new ej.b(0, 0, 0, 0);
        if (null !== uu) {
          const Eu = (0, Mj.S)(uu);
          su = new ej.b(Eu[0] / 255, Eu[1] / 255, Eu[2] / 255, .5)
        }
        const Uu = null !== (Eu = null === (ju = this.Uc.YG.GEu(this.eId)) || void 0 === ju ? void 0 : ju.mV) && void 0 !== Eu ? Eu : null;
        null !== Uu && Gj.b.Player.meshApi.updateMeshOverlayColour(Uu, su)
      }
      updateZIndex(uu) {
        var Eu;
        if ("Person" !== this.meshKind) return;
        const ju = null === (Eu = this.Uc.YG.GEu(this.eId)) || void 0 === Eu ? void 0 : Eu.mV;
        "number" === typeof ju && this.Uc.tO.oV.setRenderingGroupId(ju, uu)
      }
      updateOpacity(uu) {
        const Eu = this.Uc.YG.GEu(this.eId);
        Eu && ("number" !== typeof Eu.mV ? Eu.mesh && "ParticleEmitter" !== this.meshKind && (0, oj.e)(Eu.mesh, uu) : Gj.b.Player.meshApi.updateMeshOpacity(Eu.mV, uu))
      }
    }
    var Vj = ju(39288);
    class rj {
      constructor(uu, Eu) {
        this.eId = Eu, this.Uc = void 0, this.schema = void 0, this.Uc = uu.Uc
      }
      initClient(uu) {
        this.schema = uu, this.Uc.YG.add([uu.x, uu.y, uu.z], .1, .1, null, null, !1, !1, this.eId), this.Uc.YG.yV(this.eId, "smoothToServerPos"), Vj.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(uu) {
        Uj.l.includes(uu) && Vj.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Vj.e.remove(this.eId), this.Uc.YG.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: uu,
          volume: Eu,
          refDistance: ju,
          maxHearDist: su,
          rate: Uu
        } = this.schema;
        return {
          soundName: uu,
          volume: Eu,
          refDistance: ju,
          maxHearDist: su,
          rate: Uu
        }
      }
    }
    var Qj = ju(3879),
      ij = ju(37162),
      Wj = ju(6677),
      Sj = ju(38178),
      Ij = ju(2893),
      Fj = ju(38505),
      Bj = ju(9296),
      Lj = ju(38800),
      tj = ju(38145),
      xj = ju(3099);
    class Tj {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.kju = uu, this.Uc = Eu, this.setupBudgetMs = ju, this.now = su, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.fO = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.RD = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const uu of this.promotedSetups) {
            this.promotedSetups.delete(uu);
            const Eu = this.queuedSetups.get(uu);
            Eu && (this.queuedSetups.delete(uu), this.timedSetup(Eu, uu))
          }
        }, this.createStateCallbacks = (0, Bj.getStateCallbacks)(uu), this.roomStateCallbacks = this.createStateCallbacks(uu.state), this.roomState = uu.state, this.setupBudgetLeftMs = ju, this.lastRefillMs = su()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.kju.onStateChange(this.setUpPromoted), this.Uc.on("beforeInputs", this.onFrame), this.Uc.on("Tb", this.RD)
      }
      setUpQueuedEntities(uu) {
        var Eu;
        if ((null === (Eu = (0, Ij.b)().client.getMsgHandler()) || void 0 === Eu ? void 0 : Eu.kju) !== this.kju) return this.Uc.off("beforeInputs", this.onFrame), this.Uc.off("Tb", this.RD), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (uu && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (Pj().copy(Hj, this.Uc.YG.bM(this.Uc.FQ)); this.setupBudgetLeftMs > 0;) {
            const uu = this.nearestQueued(Hj);
            if (null === uu) return;
            this.setUpIfQueued(uu), this.setUpPromoted()
          }
      }
      nearestQueued(uu) {
        let Eu = null,
          ju = 1 / 0;
        return this.queuedSetups.forEach(((su, Uu) => {
          const Zu = function(uu, Eu) {
            return (Eu.x - uu[0]) ** 2 + (Eu.y - uu[1]) ** 2 + (Eu.z - uu[2]) ** 2
          }(uu, su);
          (null === Eu || Zu < ju) && (Eu = Uu, ju = Zu)
        })), Eu
      }
      setUpOrQueue(uu, Eu) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(uu, Eu) ? this.timedSetup(uu, Eu) : this.queuedSetups.set(Eu, uu)
      }
      mustSetUpNow(uu, Eu) {
        const ju = this.Uc.Huu;
        if (Eu === ju) return !0;
        const su = this.roomState.entities.get(ju);
        return !(!su || su.ridingVehicleEId !== Eu && su.followingEId !== Eu) || (Aj(uu.type) === Oj.b || (0, Ij.b)().getFollowingEntities(Eu).length > 0)
      }
      setUpIfQueued(uu) {
        const Eu = this.queuedSetups.get(uu);
        Eu && (this.queuedSetups.delete(uu), this.timedSetup(Eu, uu))
      }
      promoteIfQueued(uu) {
        null !== uu && this.queuedSetups.has(uu) && this.promotedSetups.add(uu)
      }
      timedSetup(uu, Eu) {
        const ju = this.now();
        this.setupEntity(uu, Eu), this.setupBudgetLeftMs -= this.now() - ju
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.lG(((uu, Eu) => {
          this.Uc.Huu ? this.setUpOrQueue(uu, Eu) : this.deferEntitySetupUntilInitInfo(uu, Eu)
        })), this.roomStateCallbacks.entities.jK(((uu, Eu) => {
          const ju = this.deferredSetups.get(Eu);
          ju && (zE.h.unsubscribe(ju), this.deferredSetups.delete(Eu)), this.queuedSetups.delete(Eu), this.detach(Eu), (0, Ij.b)().client.disposeEntity(Eu)
        }))
      }
      deferEntitySetupUntilInitInfo(uu, Eu) {
        const ju = zE.h.qD("initInfoReceived", (() => {
          this.deferredSetups.delete(Eu), this.setUpOrQueue(uu, Eu)
        }));
        this.deferredSetups.set(Eu, ju), (0, Qj.onGameResetOnce)((() => {
          this.deferredSetups.get(Eu) === ju && (zE.h.unsubscribe(ju), this.deferredSetups.delete(Eu)), (0, Ij.b)().updatePositionAndPhysics(this.Uc.FQ, {
            type: Wj.v.DEFAULT,
            tier: null
          }, !0), (0, Ij.b)().takeHeldPlayerBodySize(this.Uc.FQ);
          const uu = this.Uc.YG.qEu(this.Uc.FQ);
          uu && (uu.movementType = Wj.r.NORMAL)
        }))
      }
      setupEntity(uu, Eu) {
        const ju = Eu === this.Uc.Huu;
        if (ju)(0, Ij.b)().client.pT(this.Uc.FQ, null, null);
        else {
          const {
            type: ju
          } = uu, su = Aj(ju);
          if (void 0 === su) return void
          function(uu, Eu) {
            const ju = String(uu);
            if (nj.has(ju)) return;
            nj.add(ju);
            const su = ju.length > 80 ? `${ju.slice(0,80)}...` : ju,
              Uu = `No client handler for entity type ${JSON.stringify(su)}, so entity ${Eu} is not set up`;
            console.warn(Uu), (0, xj.reportClientError)("uncaught", Uu, "unknown_entity_type")
          }(ju, Eu);
          (0, Ij.b)().client.pT(Eu, uu, new su((0, Ij.b)(), Eu, ju))
        }
        const su = this.createStateCallbacks(uu);
        if (ju) return this.setupMapSchemaCallbacks(Eu, uu, su, "armour"), this.setupScalarField(Eu, uu, su, "scale"), this.setupScalarField(Eu, uu, su, "ridingVehicleEId"), this.setupScalarField(Eu, uu, su, "followingEId"), this.setupScalarField(Eu, uu, su, "followingOffset"), void this.setupScalarField(Eu, uu, su, "shouldMatchFollowingEntityRotation");
        for (const Uu of bj(uu.constructor)) uu[Uu] instanceof jj.MapSchema ? this.setupMapSchemaCallbacks(Eu, uu, su, Uu) : this.setupScalarField(Eu, uu, su, Uu)
      }
      setupMapSchemaCallbacks(uu, Eu, ju, su) {
        const Uu = ju[su],
          Zu = new Map;
        Uu.lG(((ju, Uu) => {
          if (this.onEntityFieldChange(uu, Eu, su, {
              key: Uu,
              value: ju
            }), !(ju instanceof jj.Schema)) return;
          const Xu = this.createStateCallbacks(ju),
            lu = [];
          for (const Zu of bj(ju.constructor)) lu.push(this.listenForFutureChanges(Xu, Zu, (() => {
            this.onEntityFieldChange(uu, Eu, su, {
              key: Uu,
              value: ju
            })
          })));
          Zu.set(Uu, (() => {
            for (const uu of lu) uu()
          }))
        })), Uu.jK(((ju, Uu) => {
          var Xu;
          null === (Xu = Zu.get(Uu)) || void 0 === Xu || Xu(), Zu.delete(Uu), this.onEntityFieldChange(uu, Eu, su, {
            key: Uu,
            value: null
          })
        })), this.addDetacher(uu, (() => {
          for (const uu of Zu.values()) uu();
          Zu.clear()
        }))
      }
      setupScalarField(uu, Eu, ju, su) {
        this.onEntityFieldChange(uu, Eu, su, Eu[su]);
        const Uu = this.listenForFutureChanges(ju, su, (ju => {
          this.onEntityFieldChange(uu, Eu, su, ju)
        }));
        this.addDetacher(uu, Uu)
      }
      addDetacher(uu, Eu) {
        let ju = this.detachers.get(uu);
        ju || (ju = [], this.detachers.set(uu, ju)), ju.push(Eu)
      }
      detach(uu) {
        for (const ju of null !== (Eu = this.detachers.get(uu)) && void 0 !== Eu ? Eu : []) {
          var Eu;
          ju()
        }
        this.detachers.delete(uu)
      }
      listenForFutureChanges(uu, Eu, ju) {
        return uu.listen(Eu, ju, !1)
      }
      onEntityFieldChange(uu, Eu, ju, su) {
        switch (ju) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(su);
            const Eu = this.Uc.YG.PEu((0, ij.d)(uu));
            Eu && (Eu.ridingVehicleEId = su);
            break
          }
          case "armour":
            this.handleArmourChange(uu, su);
            break;
          case "followingEId":
            this.promoteIfQueued(su), this.handleFollowingEIdChange(uu, Eu, su);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(uu, ju, su);
            break;
          case "scale":
            this.handleScaleChange(uu, su);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(uu, su);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(uu, su);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(uu, su);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(uu, ju, su)
        }(0, Ij.b)().client.updateEntityField(uu, ju, su)
      }
      handleArmourChange(uu, Eu) {
        var ju, su;
        const {
          key: Uu,
          value: Zu
        } = Eu;
        (0, Gj.x)(uu, Uu, null !== (ju = null === Zu || void 0 === Zu ? void 0 : Zu.itemName) && void 0 !== ju ? ju : null, null !== (su = null === Zu || void 0 === Zu ? void 0 : Zu.enchantmentTier) && void 0 !== su ? su : null)
      }
      handleFollowingEIdChange(uu, Eu, ju) {
        const su = (0, ij.d)(uu),
          Uu = su === this.Uc.FQ;
        if (this.Uc.YG.zV(su, this.Uc.YG.names.yG), ju) this.Uc.YG.zV(su, "smoothToServerPos"), this.Uc.YG.yV(su, this.Uc.YG.names.yG, {
          jO: (0, ij.d)(ju),
          offset: Array.from(Eu.followingOffset),
          bju: Eu.shouldMatchFollowingEntityRotation,
          Yju: !0,
          hju: (uu, su) => {
            if (Pj().copy(uu, Eu.followingOffset), Eu.ridingVehicleEId === ju) {
              const Eu = (0, ij.d)(ju),
                Uu = (0, Ij.b)().getEntityHeading(Eu, su);
              Pj().sq(uu, uu, Pj().ZERO, Uu)
            }
          }
        });
        else if (!Uu) {
          this.Uc.YG.xuu(su, "smoothToServerPos") || this.Uc.YG.yV(su, "smoothToServerPos");
          const uu = this.Uc.YG.getState(su, "smoothToServerPos"),
            Eu = this.Uc.YG.wT(su).position;
          (0, tj.setServerPosition)(uu, Eu[0], Eu[1], Eu[2])
        }
      }
      handleRotationChange(uu, Eu, ju) {
        const su = "xRotation" === Eu ? 0 : "yRotation" === Eu ? 1 : 2;
        for (const Uu of (0, Ij.b)().getFollowingEntities(uu)) {
          const uu = this.Uc.YG.getState(Uu, "meshRotation"),
            Eu = this.Uc.YG.Cju(Uu);
          uu && Eu.bju && (uu.serverSetRotation[su] = ju)
        }
      }
      handleScaleChange(uu, Eu) {
        const ju = (0, ij.d)(uu);
        if (zE.h.TY(`entityScale|${ju}`, Eu), ju === this.Uc.FQ) {
          var su;
          (0, Ij.b)().removeFromEyeHeightCache(ju);
          const uu = this.Uc.YG.qEu(this.Uc.FQ),
            Eu = null !== (su = null === uu || void 0 === uu ? void 0 : uu.physicsState) && void 0 !== su ? su : {
              type: Wj.v.DEFAULT,
              tier: null
            };
          return void(0, Ij.b)().updatePositionAndPhysics(this.Uc.FQ, Eu, !1)
        }
        const Uu = (0, Ij.b)().getLifeformType(ju);
        if (null === Uu) return;
        const {
          physicsBodyWidth: Zu,
          physicsBodyHeight: Xu
        } = (0, Lj.h)(Eu, Uu);
        this.Uc.YG.qju(ju, Zu, Xu, Zu)
      }
      handleBaseRenderHeadingChange(uu, Eu) {
        const ju = this.Uc.YG.getState(uu, "meshRotation");
        ju && (ju.baseRenderRotation[1] = Eu);
        for (const su of (0, Ij.b)().getFollowingEntities(uu)) {
          const uu = this.Uc.YG.getState(su, "meshRotation"),
            ju = this.Uc.YG.Cju(su);
          uu && ju.bju && (uu.baseRenderRotation[1] = Eu)
        }
      }
      handleFollowingOffsetChange(uu, Eu) {
        const ju = this.Uc.YG.Cju((0, ij.d)(uu));
        if (ju && ju.offset) {
          const uu = Eu ? Array.from(Eu) : Pj().ZERO;
          ju.offset[0] = uu[0], ju.offset[1] = uu[1], ju.offset[2] = uu[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(uu, Eu) {
        const ju = this.Uc.YG.Cju((0, ij.d)(uu));
        ju && (ju.bju = null === Eu || void 0 === Eu || Eu)
      }
      handlePositionChange(uu, Eu, ju) {
        if (this.Uc.YG.xuu(uu, "smoothToServerPos")) {
          const su = this.Uc.YG.getState(uu, "smoothToServerPos");
          (0, tj.setServerPositionAxis)(su, yj[Eu], ju)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.lG(((uu, Eu) => {
          this.allItems[Eu] = uu, (0, Sj.l)(this.Uc, Eu, [uu.x, uu.y, uu.z], uu.id, {
            amount: uu.amount,
            attributes: JSON.parse(uu.attributes),
            SU: (0, RE.d)(this.Uc).cantPickUpItem(Eu),
            size: uu.size,
            predictedAt: (0, Ij.b)().client.itemDropPrediction.onServerItemAdded(Eu)
          });
          const ju = this.createStateCallbacks(uu);
          for (const su of bj(Xj)) this.onItemFieldChange(Eu, su, uu[su]), this.addDetacher(Eu, this.listenForFutureChanges(ju, su, (uu => {
            this.onItemFieldChange(Eu, su, uu)
          })))
        })), this.roomStateCallbacks.items.jK(((uu, Eu) => {
          delete this.allItems[Eu], this.detach(Eu), (0, Ij.b)().client.itemDropPrediction.onServerItemRemoved(Eu), this.Uc.YG.xuu(Eu, this.Uc.YG.names.itemState) && this.Uc.YG.deleteEntity(Eu), (0, RE.d)(this.Uc).disposeEntity(Eu)
        }))
      }
      onItemFieldChange(uu, Eu, ju) {
        if (Eu in yj) {
          if (this.Uc.YG.xuu(uu, "itemState")) {
            const su = this.Uc.YG.getState(uu, "smoothToServerPos");
            (0, tj.setServerPositionAxis)(su, yj[Eu], ju), (0, Ij.b)().client.itemDropPrediction.onServerItemMoved(uu)
          }
          return
        }
        if (!this.Uc.YG.xuu(uu, "itemState")) return;
        const su = this.Uc.YG.getState(uu, "itemState");
        "amount" === Eu && ju !== su.amount && (su.creationTime = Date.now()), su[Eu] = "attributes" === Eu ? JSON.parse(ju) : ju
      }
      dispose() {
        if (!this.fO) {
          this.fO = !0, this.Uc.off("beforeInputs", this.onFrame), this.Uc.off("Tb", this.RD), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const uu of this.deferredSetups.values()) zE.h.unsubscribe(uu);
          this.deferredSetups.clear(), this.Uc.YG.zV(this.Uc.FQ, this.Uc.YG.names.yG);
          for (const uu in this.allItems) this.Uc.YG.deleteEntity(uu), delete this.allItems[uu];
          for (const uu of [...this.detachers.keys()]) this.detach(uu);
          (0, RE.d)(this.Uc).clear();
          for (const uu of (0, Ij.b)().client.iterateEntityIds())(0, Ij.b)().client.disposeEntity(uu)
        }
      }
    }
    const Hj = [0, 0, 0];

    function Aj(uu) {
      if ("string" !== typeof uu) return;
      const Eu = uu.indexOf("|"),
        ju = -1 === Eu ? uu : uu.slice(0, Eu),
        su = Rj();
      return Object.hasOwn(su, ju) ? su[ju] : void 0
    }
    const nj = new Set;
    const yj = {
      x: 0,
      y: 1,
      z: 2
    };
    let zj = null;

    function Rj() {
      return null !== zj || (zj = {
        ...Object.fromEntries(Uj.n.map((uu => {
          const {
            nl: Eu
          } = (0, Fj.e)(uu);
          return [uu, Eu]
        }))),
        Pebble: Oj.b,
        Snowball: Oj.b,
        "Snowball Launcher": Oj.b,
        "Reinforced Pebble": Oj.b,
        Bullet: Oj.b,
        "Reinforced Ball": Oj.b,
        Ball: Oj.b,
        Mango: Oj.b,
        "Moonstone Orb": Oj.b,
        ...Object.fromEntries(sj.q.map((uu => [(0, Mj._b)(uu), Oj.b]))),
        Arrow: Oj.b,
        "Arrow of Speed": Oj.b,
        "Arrow of Poison": Oj.b,
        "Arrow of Slowness": Oj.b,
        "Arrow of Weakness": Oj.b,
        "Arrow of Knockback": Oj.b,
        "Arrow of Strength": Oj.b,
        "Arrow of Invisibility": Oj.b,
        "Arrow of Jumping": Oj.b,
        "Arrow of Defense": Oj.b,
        "Arrow of Instant Healing": Oj.b,
        "Arrow of Instant Damage": Oj.b,
        "Arrow of Regeneration": Oj.b,
        "Arrow of Haste": Oj.b,
        "Arrow of Shield": Oj.b,
        "Arrow of Double Jump": Oj.b,
        "Arrow of Heat Resistance": Oj.b,
        "Arrow of X-Ray Vision": Oj.b,
        "Arrow of Mining Yield": Oj.b,
        "Arrow of Brain Rot": Oj.b,
        "Arrow of Milk": Oj.b,
        Fireball: Oj.b,
        "Bouncy Bomb": Oj.b,
        RPG: Oj.b,
        "Obby RPG": Oj.b,
        "Super RPG": Oj.b,
        "Grenade Launcher": Oj.b,
        Iceball: Oj.b,
        Coconut: Oj.b,
        "Splash Speed Potion": Oj.b,
        "Splash Defense Potion": Oj.b,
        "Splash Strength Potion": Oj.b,
        "Splash Invisibility Potion": Oj.b,
        "Splash Jump Potion": Oj.b,
        "Splash Knockback Potion": Oj.b,
        "Splash Poison Potion": Oj.b,
        "Splash Speed Potion II": Oj.b,
        "Splash Defense Potion II": Oj.b,
        "Splash Strength Potion II": Oj.b,
        "Splash Jump Potion II": Oj.b,
        "Splash Knockback Potion II": Oj.b,
        "Splash Poison Potion II": Oj.b,
        "Splash Slowness Potion": Oj.b,
        "Splash Slowness Potion II": Oj.b,
        "Splash Weakness Potion": Oj.b,
        "Splash Weakness Potion II": Oj.b,
        "Splash Milk Potion": Oj.b,
        "Splash Instant Damage Potion": Oj.b,
        "Splash Instant Damage Potion II": Oj.b,
        "Splash Instant Healing Potion": Oj.b,
        "Splash Instant Healing Potion II": Oj.b,
        "Splash Regeneration Potion": Oj.b,
        "Splash Regeneration Potion II": Oj.b,
        "Splash Haste Potion": Oj.b,
        "Splash Haste Potion II": Oj.b,
        "Splash Shield Potion": Oj.b,
        "Splash Shield Potion II": Oj.b,
        "Splash Double Jump Potion": Oj.b,
        "Splash Heat Resistance Potion": Oj.b,
        "Splash X-Ray Vision Potion": Oj.b,
        "Splash Mining Yield Potion": Oj.b,
        "Splash Mining Yield Potion II": Oj.b,
        "Splash Brain Rot Potion": Oj.b,
        "Yellow Paintball Gun": Oj.b,
        "White Paintball Gun": Oj.b,
        "Red Paintball Gun": Oj.b,
        "Purple Paintball Gun": Oj.b,
        "Pink Paintball Gun": Oj.b,
        "Orange Paintball Gun": Oj.b,
        "Magenta Paintball Gun": Oj.b,
        "Lime Paintball Gun": Oj.b,
        "Light Gray Paintball Gun": Oj.b,
        "Light Blue Paintball Gun": Oj.b,
        "Green Paintball Gun": Oj.b,
        "Gray Paintball Gun": Oj.b,
        "Cyan Paintball Gun": Oj.b,
        "Brown Paintball Gun": Oj.b,
        "Blue Paintball Gun": Oj.b,
        "Black Paintball Gun": Oj.b,
        "Yellow Heavy Paintball Gun": Oj.b,
        "White Heavy Paintball Gun": Oj.b,
        "Red Heavy Paintball Gun": Oj.b,
        "Purple Heavy Paintball Gun": Oj.b,
        "Pink Heavy Paintball Gun": Oj.b,
        "Orange Heavy Paintball Gun": Oj.b,
        "Magenta Heavy Paintball Gun": Oj.b,
        "Lime Heavy Paintball Gun": Oj.b,
        "Light Gray Heavy Paintball Gun": Oj.b,
        "Light Blue Heavy Paintball Gun": Oj.b,
        "Green Heavy Paintball Gun": Oj.b,
        "Gray Heavy Paintball Gun": Oj.b,
        "Cyan Heavy Paintball Gun": Oj.b,
        "Brown Heavy Paintball Gun": Oj.b,
        "Blue Heavy Paintball Gun": Oj.b,
        "Black Heavy Paintball Gun": Oj.b,
        "Toxin Ball": Oj.b,
        "Splash Aura XP Potion": Oj.b,
        "Splash Aura XP Potion II": Oj.b,
        "Arrow of Aura XP": Oj.b,
        Firecracker: Oj.b,
        "Rainbow Firecracker": Oj.b,
        "White Firecracker": Oj.b,
        "Orange Firecracker": Oj.b,
        "Magenta Firecracker": Oj.b,
        "Light Blue Firecracker": Oj.b,
        "Yellow Firecracker": Oj.b,
        "Lime Firecracker": Oj.b,
        "Pink Firecracker": Oj.b,
        "Gray Firecracker": Oj.b,
        "Light Gray Firecracker": Oj.b,
        "Cyan Firecracker": Oj.b,
        "Purple Firecracker": Oj.b,
        "Blue Firecracker": Oj.b,
        "Brown Firecracker": Oj.b,
        "Green Firecracker": Oj.b,
        "Red Firecracker": Oj.b,
        "Black Firecracker": Oj.b,
        "Firecracker Pebble": Oj.b,
        "Rainbow Firecracker Pebble": Oj.b,
        "White Firecracker Pebble": Oj.b,
        "Orange Firecracker Pebble": Oj.b,
        "Magenta Firecracker Pebble": Oj.b,
        "Light Blue Firecracker Pebble": Oj.b,
        "Yellow Firecracker Pebble": Oj.b,
        "Lime Firecracker Pebble": Oj.b,
        "Pink Firecracker Pebble": Oj.b,
        "Gray Firecracker Pebble": Oj.b,
        "Light Gray Firecracker Pebble": Oj.b,
        "Cyan Firecracker Pebble": Oj.b,
        "Purple Firecracker Pebble": Oj.b,
        "Blue Firecracker Pebble": Oj.b,
        "Brown Firecracker Pebble": Oj.b,
        "Green Firecracker Pebble": Oj.b,
        "Red Firecracker Pebble": Oj.b,
        "Black Firecracker Pebble": Oj.b,
        "Blinding Pebble": Oj.b,
        Poop: Oj.b,
        "Wood Boomerang": Oj.b,
        "Stone Boomerang": Oj.b,
        "Iron Boomerang": Oj.b,
        "Gold Boomerang": Oj.b,
        "Diamond Boomerang": Oj.b,
        "Amethite Boomerang": Oj.b,
        "Magmasteel Boomerang": Oj.b,
        "Rubellite Boomerang": Oj.b,
        "Serpentite Boomerang": Oj.b,
        "Moonstone Boomerang": Oj.b,
        "67 Base Projectile": Oj.b,
        "67 Boosted Projectile": Oj.b,
        "Capitano Grenade": Oj.b,
        "Scatter Pellet": Oj.b,
        "Lucky Bomb": Oj.b,
        "Unlucky Bomb": Oj.b,
        "Swap Orb": Oj.b,
        Mesh: Kj,
        AudioEntity: rj
      }), zj
    }
  },
  39330: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      e: () => Xu
    });
    var su = ju(649),
      Uu = ju(38114);
    const Zu = 4e4;
    class Xu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = uu, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(uu, Eu, ju) {
        const Zu = (0, su.M)(uu),
          Xu = (0, su.M)(Eu),
          lu = (0, su.M)(ju),
          qu = this.now();
        if (Zu !== this.lastChunkX || Xu !== this.lastChunkY || lu !== this.lastChunkZ) {
          this.lastChunkX = Zu, this.lastChunkY = Xu, this.lastChunkZ = lu, this.lastChunkId = (0, Uu.d)(Zu, Xu, lu), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, qu);
          for (const [uu, Eu] of this.editedAt) {
            if (Eu >= qu - 3e5) break;
            this.editedAt.delete(uu)
          }
        } else this.editedAt.set(this.lastChunkId, qu)
      }
      chunksEditedSince(uu) {
        const Eu = [];
        for (const [ju, su] of this.editedAt) su >= uu && Eu.push(ju);
        return Eu
      }
    }
  },
  39380: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => NE,
      f: () => IE,
      i: () => mE,
      j: () => FE
    });
    var su = ju(3879),
      Uu = ju(8992),
      Zu = ju(37061),
      Xu = ju(1487),
      lu = ju(37145),
      qu = ju(39288),
      fu = ju(39280),
      Cu = ju(3946),
      bu = ju(38263),
      cu = ju(39384),
      Nu = ju(1298),
      Ou = ju(337),
      Yu = ju(24),
      hu = ju(2011),
      Du = ju(91),
      gu = ju(31),
      Mu = ju(2040),
      eu = ju(1955),
      Gu = ju(3145);
    class pu {
      constructor(uu) {
        this.storeForMs = uu, this.clicks = new Gu.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const uu = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < uu;) this.clicks.dequeue()
      }
      getNumClicksInMs(uu) {
        let Eu = 0;
        return this.clicks.forEach((ju => {
          ju > Date.now() - uu && Eu++
        })), Eu
      }
      getMaxClickSeparationInMs(uu) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Eu = 0,
          ju = Date.now() - uu;
        this.clicks.forEach((su => {
          su < Date.now() - uu || (Eu = Math.max(Eu, Math.abs(su - ju)), ju = su)
        }));
        const su = Math.abs(Date.now() - ju);
        return Math.max(Eu, su)
      }
    }
    class wu {
      constructor(uu) {
        this.storeForMs = uu, this.clickDownDurations = new Gu.d
      }
      registerClickDownDuration(uu) {
        this.clickDownDurations.enqueue({
          dur: uu,
          atTime: Date.now()
        });
        const Eu = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Eu;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(uu) {
        if (uu > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Eu = 0,
          ju = 0;
        return this.clickDownDurations.forEach((su => {
          su.atTime > Date.now() - uu && (Eu++, ju = Math.max(ju, su.dur))
        })), `${Eu}:${ju}`
      }
    }
    var Ju = ju(36876),
      du = ju(39392),
      au = ju(22),
      Pu = ju(2893),
      ou = ju(1369),
      ku = ju(2533),
      mu = ju(4619),
      vu = ju(131),
      Ku = ju(38511),
      Vu = ju(38720),
      ru = ju(649),
      Qu = ju(36873),
      iu = ju(13),
      Wu = ju(9409),
      Su = ju(1278),
      Iu = ju(202),
      Fu = ju(39395),
      Bu = ju(39401),
      Lu = ju(39407),
      tu = ju(38542),
      xu = ju(39419),
      Tu = ju(38455),
      Hu = ju(3599),
      Au = ju(1687),
      nu = ju(36992),
      yu = ju(2943),
      zu = ju(36762),
      Ru = ju(36770),
      uE = ju(39416),
      EE = ju(38333);
    const jE = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function sE() {
      var uu, Eu;
      return !(null === (uu = (0, Pu.b)().client) || void 0 === uu || null === (Eu = uu.freeCameraController) || void 0 === Eu || !Eu.movesFly())
    }

    function UE(uu) {
      const Eu = uu.on.bind(uu);
      uu.on = (uu, ju) => {
        Mu.D.has(uu) ? Eu(uu, ju) : Eu(uu, (Eu => {
          var su;
          return null !== (su = (0, Pu.b)().client) && void 0 !== su && su.isReplayMode() ? function(uu) {
            return uu in jE
          }(uu) && sE() ? ju(Eu) : void 0 : ju(Eu)
        }))
      }
    }
    const ZE = 5e3,
      XE = 1;
    let lE, qE = XE,
      fE = 0;
    const CE = !0;
    let bE = CE;
    hu.e.subscribe("_ignoreBasicBoards", (uu => {
      bE = uu
    })), (0, su.onGameReset)((() => {
      bE = CE
    }));
    let cE = null;
    const NE = () => cE;
    let OE, YE, hE;
    var DE, gE, ME, eE, GE, pE, wE, JE, dE;
    const aE = ["b", 0, 1, 8, 3, "a", "i", 21, 5, 6, 4, 255, "length", 207, 98, "undefined", void 0, "c", "d", 2, 63, "fromCodePoint", 7, 12, "push", "h", 9, "g", 91, 186, 101, 8191, 88, 13, 14, 210, 100, 127, "e", 194, 16, 198, 189, !1, 178, 46, 116, 126, 109, 202, 192, 217, 176, !0, 209, 245, 105, 146, 137, 85, 215, 25, 175, 159, 236];

    function PE(...uu) {
      return uu[aE[12]] = aE[2], typeof eE !== aE[15] && eE ? (new eE).decode(new GE(uu[aE[1]])) : typeof pE !== aE[15] && pE ? pE.from(uu[aE[1]]).toString("utf-8") : dE(uu[aE[1]])
    }

    function oE() {}

    function kE() {
      kE = function() {}
    }

    function mE(uu) {
      function Eu() {
        return uu.YG.yEu(uu.FQ)
      }
      UE(uu.inputs.down), UE(uu.inputs.up);
      for (const su of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Eu = (Eu, ju) => {
          var Uu, Zu;
          if (sE()) {
            var Xu;
            const Uu = jE[su];
            var lu, qu;
            if (Uu) null === (lu = (0, Pu.b)().client) || void 0 === lu || null === (qu = lu.freeCameraController) || void 0 === qu || qu.handlefreeCamKeyPress(Uu, Eu, ju);
            return void(ju || null !== (Xu = (0, Pu.b)().client) && void 0 !== Xu && Xu.isReplayMode() || (uu.YG.jju()[su] = !1))
          }
          if (null !== (Uu = (0, Pu.b)().client) && void 0 !== Uu && null !== (Zu = Uu.freeCameraController) && void 0 !== Zu && Zu.isKeyPressOverriden(Eu)) return;
          uu.YG.jju()[su] = ju
        };
        uu.inputs.down.on(su, (uu => Eu(uu, !0))), uu.inputs.up.on(su, (uu => Eu(uu, !1)))
      }
      uu.inputs.down.on("crouch", (() => {
        if (sE()) return;
        if (!uu.sG.canCrouch) return;
        const Eu = uu.YG.jju();
        au.d.get("clientEscMenuOptions").crouchIsToggle && (Eu.crouchToggled = !Eu.crouchToggled && !Eu.padSneakToggled), Eu.padSneakToggled = !1
      }));
      const ju = () => {
        const uu = Eu();
        uu.isGun() && uu.inaccuracyCalculator.jump()
      };
      uu.inputs.down.on("jump", (uu => {
        sE() || (ju(), OE(uu))
      }));
      for (const su of Mu.n) uu.inputs.down.on(su, (uu => {
        var Eu, ju;
        null !== (Eu = (0, Pu.b)().client) && void 0 !== Eu && null !== (ju = Eu.freeCameraController) && void 0 !== ju && ju.handlefreeCamKeyPress(su, uu, !0) && (uu.preventDefault(), uu.stopPropagation())
      })), uu.inputs.up.on(su, (uu => {
        var Eu, ju;
        null !== (Eu = (0, Pu.b)().client) && void 0 !== Eu && null !== (ju = Eu.freeCameraController) && void 0 !== ju && ju.handlefreeCamKeyPress(su, uu, !1) && (uu.preventDefault(), uu.stopPropagation())
      }));
      uu.inputs.down.on("recordGame", (() => {
        var uu, Eu;
        null === (uu = (0, Pu.b)().client) || void 0 === uu || null === (Eu = uu.gameRecorder) || void 0 === Eu || Eu.toggleRecording()
      })), uu.inputs.down.on("recordClip", (() => {
        var uu, Eu;
        (0, Ju.c)() || null === (uu = (0, Pu.b)().client) || void 0 === uu || null === (Eu = uu.gameRecorder) || void 0 === Eu || Eu.saveClip()
      }));
      for (const su of Mu.D) uu.inputs.down.on(su, (() => {
        var uu;
        if ((0, du.c)()) return;
        if ("replayViewerOpen" === su) return void Yu.h.TY("replayViewer|requested", "toggle");
        const Eu = null === (uu = (0, Pu.b)().client) || void 0 === uu ? void 0 : uu.gameReplayer;
        ((0, Ju.c)() || null !== Eu && void 0 !== Eu && Eu.isReplayMode()) && (null === Eu || void 0 === Eu || Eu.handleAction(su))
      }));
      const Xu = new pu(3e4),
        bu = new wu(4e4);
      let cu = 0;
      const gu = uu => {
          let Eu = 0,
            ju = null;
          const su = Eu => null !== Eu && Eu === ju && (ju = null, uu(), !0);
          return {
            press: () => (Eu++, (0, Fu.e)() || (su(ju), ju = Eu), Eu),
            owns: uu => uu === ju,
            release: su
          }
        },
        Gu = (uu, ju) => {
          ju && FE(Nu.b.TouchDownFirePrimary), uu ? Wu() : ((0, Vu.g)(), Eu().xju()), ju || FE(Nu.b.DownFirePrimary), IE(!0), Xu.click();
          const Uu = Xu.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Zu = Xu.getMaxClickSeparationInMs(1e4) < 20,
            lu = Xu.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Uu || Zu || lu) {
            let uu;
            if (Uu) uu = 30;
            else if (Zu) uu = 50;
            else {
              if (!lu) throw new Error("???");
              uu = 70
            }(0, su.sendColyMessage)(Cu.$j, uu)
          }
        },
        mu = new Bu.b,
        vu = gu((() => {
          Bu.b.stopRunning();
          const uu = Date.now() - cu;
          bu.registerClickDownDuration(uu), Eu().Bju(), FE(Nu.b.UpFirePrimary), IE(!1);
          const ju = bu.clickDownDurationsCheck(4e4);
          (0, su.sendColyMessage)(Cu.Ig, ju)
        }));
      let Ku = 0;
      uu.inputs.down.on("primary-fire", (function(uu) {
        Ku = vu.press(), vu.owns(Ku) && (cu = Date.now(), Math.abs(performance.now() - uu.timeStamp) > 5e3 || (Gu(uu.altKey, "changedTouches" in uu), OE(uu)))
      })), uu.inputs.up.on("primary-fire", (function(uu) {
        vu.release(Ku) && OE(uu, !0)
      }));
      const ru = () => {
          Eu().Mfu(), FE(Nu.b.DownFireSecondary), IE(!0), uu.muu && !uu.muu.position && (0, fu.l)()
        },
        Qu = gu((() => {
          Eu().Fju(), FE(Nu.b.UpFireSecondary), IE(!1)
        }));
      let iu = 0;
      uu.inputs.down.on("alt-fire", (function(uu) {
        iu = Qu.press(), Qu.owns(iu) && (ru(), OE(uu))
      })), uu.inputs.up.on("alt-fire", (function(uu) {
        Qu.release(iu) && OE(uu, !0)
      }));
      const Wu = () => Eu().pfu();
      uu.inputs.down.on("mid-fire", (() => {
        (0, Fu.e)() || Wu()
      }));
      const xu = uu => {
          (0, su.sendColyMessage)(Cu.Fh, uu, !0)
        },
        lE = uu => {
          (0, su.sendColyMessage)(Cu.Hh, {
            Jl: uu,
            dl: CE()
          }, !0)
        };
      for (const su of ["SpecialAction1", "SpecialAction2"]) uu.inputs.down.on(su, (() => {
        xu(su)
      })), uu.inputs.up.on(su, (() => {
        lE(su)
      }));
      const fE = () => {
        const uu = Eu();
        uu.isGun() && uu.reload(Date.now())
      };
      uu.inputs.down.on("ReloadGun", fE);
      const CE = () => {
        let Eu = "a";
        return uu.physics.testSolid.toString().includes("wc") || (Eu = "b"), Eu
      };
      uu.inputs.down.on("OpenInventory", (uu => {
        uu.preventDefault(), (0, Au.z)(uu, "inventory", (0, Lu.e)((0, Pu.c)()))
      })), uu.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const bE = uu => {
        Yu.h.TY("DropItemKeyPressed", uu)
      };
      uu.inputs.down.on("DropItem", (() => {
        bE(uu.YG.jju().crouch)
      })), uu.inputs.down.on("OpenShop", (Eu => {
        (0, Ju.c)() || "inGame" === au.d.get("gameState") && (0, Au.x)(Eu, Ou.o.SHOP, !(0, Uu.b)(uu.sG.shopInfo))
      })), uu.inputs.down.on("OpenLobbyLeaderboard", (Eu => {
        (0, Ju.c)() || "inGame" === au.d.get("gameState") && (0, Au.x)(Eu, Ou.o.LOBBY_LEADERBOARD, (0, uE.c)(uu.sG))
      })), uu.inputs.down.on("HideUi", (() => {
        Yu.h.TY("showUi", !1)
      })), uu.inputs.up.on("HideUi", (() => {
        Yu.h.TY("showUi", !0)
      }));
      const NE = uu => {
        0 === uu && (uu = 10), Yu.h.TY("setSelectedInventorySlotI", uu - 1), Yu.h.TY("numkeyPressed", uu)
      };
      for (let su = 1; su <= 10; su++) uu.inputs.down.on("HotBarSlot" + su.toString(), (() => {
        NE(su)
      }));
      uu.inputs.down.on("OpenTasksAndLeaderboard", (Eu => {
        const ju = (0, nu.k)();
        ju ? (0, Au.D)(Eu, !0, ju) : (0, Au.z)(Eu, "retentionFeatures", !(!uu.sG._tasks && !uu.sG._availableLeaderboards))
      })), uu.inputs.down.on("OpenCodeEditor", (Eu => {
        (0, Au.D)(Eu, (0, ku.b)((0, ou.b)()), (() => {
          (0, ku.h)(uu.YG.bM(uu.FQ))
        }))
      })), uu.inputs.bind("ToggleFullCoordinateOverlay", "F3"), uu.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Yu.h.TY("toggleFullCoordinateOverlay")
      }));
      const hE = () => {
        (0, Pu.b)().client.cameraController.swapCameraZoom()
      };
      uu.inputs.down.on("SwapCameraZoom", hE), uu.inputs.down.on("OpenInviteLink", (uu => {
        (0, Au.z)(uu, "inviteLink", Du.featureFlags.canUseInviteLinks)
      })), uu.inputs.bind("Y", "KeyY"), uu.inputs.down.on("Y", (uu => {
        (0, Ju.c)() || Yu.h.TY("YKeyPressed")
      })), uu.inputs.bind("X", "KeyX"), uu.inputs.down.on("X", (uu => {
        (0, Ju.c)() || Yu.h.TY("XKeyPressed")
      })), uu.inputs.down.on("OpenEmoteWheel", (() => {
        Yu.h.TY("requestEmoteWheelHoldOpen")
      })), uu.inputs.up.on("OpenEmoteWheel", (() => {
        Yu.h.TY("requestEmoteWheelHoldRelease")
      })), uu.inputs.down.on("Zoom", (() => {
        if ("inGame" === au.d.get("gameState")) {
          uu.YG.getState(uu.FQ, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Pu.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), uu.inputs.up.on("Zoom", (() => {
        uu.YG.getState(uu.FQ, "playerCameraAdjustment").zoomKeyPressed = !1
      })), vE();
      const DE = uu => function() {
        return YE(), uu(...arguments)
      };

      function gE(uu) {
        "inGame" !== au.d.get("gameState") || (0, Au.t)() || (Yu.h.TY("ctrlCrouchWithoutFullscreen"), uu.preventDefault())
      }
      cE = {
        primaryFireDown: DE((uu => {
          const Eu = vu.press();
          return vu.owns(Eu) && (cu = Date.now(), Gu(!1, !1), uu && mu.start()), Eu
        })),
        primaryFireUp: DE((uu => {
          vu.release(uu)
        })),
        altFireDown: DE((() => {
          const uu = Qu.press();
          return Qu.owns(uu) && ru(), uu
        })),
        altFireUp: DE((uu => {
          Qu.release(uu)
        })),
        jumpDown: DE(ju),
        specialActionDown: DE(xu),
        specialActionUp: DE(lE),
        reloadGun: DE(fE),
        dropItem: DE(bE),
        swapCameraZoom: DE(hE),
        pickBlock: DE(Wu)
      }, uu.inputs.down.on("ctrlCrouch", gE), uu.inputs.up.on("ctrlCrouch", gE), uu.inputs.bind("ctrlCrouch", "ControlLeft");
      const ME = uu => {
        "inGame" === au.d.get("gameState") && uu.ctrlKey && !(0, Au.t)() && uu.preventDefault()
      };
      document.addEventListener("keydown", ME), document.addEventListener("keyup", ME), document.addEventListener("keypress", ME), uu.inputs.bind("Alt", "AltLeft", "AltRight"), uu.inputs.down.on("Alt", (uu => {
        uu.preventDefault()
      }));
      const eE = Eu => (0, Tu.h)(uu, Eu),
        GE = Eu => (0, Tu.i)(uu, Eu),
        pE = [0, 0, 0],
        wE = [0, 0, 1];
      uu.on("afterRender", (Eu => {
        Ru.q.frame(Eu, uu.camera.heading, uu.camera.pitch, Ru.i.drawn), (0, Zu.f)(uu.camera.heading), (0, Tu.j)(uu, pE, wE), (0, Pu.b)().client.triggerGameCallback("onAfterRender", Eu, {
          cameraHeading: uu.camera.heading,
          cameraPitch: uu.camera.pitch,
          cameraPosition: pE,
          cameraDirection: wE,
          tanHalfFovX: (0, Tu.e)(uu),
          tanHalfFovY: Math.tan(uu.tO.uR().fov / 2),
          screenBandPct: {
            x: Hu.b,
            y: (0, Hu.h)()
          },
          projectWorldPosToScreenPos: eE,
          projectWorldPosToViewport: GE
        })
      })), uu.camera.IK = (0, zu.startLookDebug)("js"), uu.inputs.qV = zu.noteLookDroppedCopy, (0, yu.p)("remesh") && (0, EE.i)(uu), uu.on("beforeInputs", (() => {
        if ((0, du.c)()) return uu.inputs.wL.dx = 0, void(uu.inputs.wL.dy = 0);
        if (uu.camera.wL.dx += uu.inputs.wL.dx, uu.camera.wL.dy += uu.inputs.wL.dy, 0 !== uu.inputs.wL.dx || 0 !== uu.inputs.wL.dy) {
          uu.YG.getState(uu.FQ, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        uu.inputs.wL.dx = 0, uu.inputs.wL.dy = 0
      }));
      let JE = 0;
      const dE = [0, 0, 0],
        aE = [0, 0, 0],
        PE = {
          base: dE,
          max: aE
        },
        oE = uu => {
          const Eu = Iu.e.droppedBlockSize / 2;
          return [0, 1, 2].every((ju => uu[ju] >= dE[ju] - Eu && uu[ju] <= aE[ju] + Eu))
        };
      uu.on("Tb", (function(Eu) {
        Yu.h.TY("noaTick", Eu);
        const ju = (0, Pu.b)().client;
        if (ju.triggerGameCallback("Tb", Eu), ju.isClientGameSessionActive()) try {
          qu.e.Tb(Eu)
        } catch (Xu) {
          console.error("Error ticking audio entities", Xu)
        }
        if (!uu.YG.AEu(uu.FQ).isAlive) return;
        Date.now() - JE > 9e3 && (! function() {
          const uu = (0, Pu.c)();
          "number" === typeof uu.sG.speedMultiplier && "number" === typeof uu.sG.jumpAmount && (0, su.sendColyMessage)(Cu.hi, {
            Nl: (0, Su.g)(uu.sG.speedMultiplier),
            Ol: (0, Su.d)(uu.sG.jumpAmount),
            Yl: (0, Su.g)(uu.sG.crouchingSpeed),
            hl: (0, Su.g)(uu.sG.walkingSpeed),
            Dl: (0, Su.g)(uu.sG.runningSpeed),
            gl: (0, Su.d)(uu.puu),
            Ml: uu.YG.qEu(uu.FQ).jumpForce,
            el: uu.YG.wT(1).width,
            Gl: uu.YG.wT(1).height,
            pl: uu.YG.SF(1).pl
          }, !0)
        }(), JE = Date.now());
        const Uu = uu.YG.jju();
        if ((Uu.jump || Uu.forward || Uu.backward || Uu.left || Uu.right || Uu.sprint) && Yu.h.TY("usedKeyboard"), uu.YG.vEu(uu.FQ) && !0 === uu.sG.canPickUpItems) {
          const Eu = uu.YG.bM(uu.FQ),
            ju = (0, eu.o)(qE),
            Uu = (0, eu.p)(qE);
          dE[0] = Eu[0] - ju, dE[1] = Eu[1] - .6 * Uu, dE[2] = Eu[2] - ju, aE[0] = Eu[0] + ju, aE[1] = Eu[1] + Iu.e.Ih + .6 * Uu, aE[2] = Eu[2] + ju;
          const Zu = uu.YG.Plu(PE, uu.YG.names.autoRotate),
            {
              itemDropPrediction: Xu
            } = (0, Pu.b)().client,
            qu = su.offlineInputReplay.holdsInput();
          if (Zu.length > 0)
            for (const bu of Zu) {
              const Eu = uu.YG.getState(bu, "itemState");
              if (void 0 === Eu || Date.now() - Eu.creationTime < 500) continue;
              let ju = bu,
                Uu = null;
              if (Eu.SU) {
                const uu = Xu.pickupTarget(bu, oE, qu);
                if (null === uu) continue;
                ({
                  Sl: ju,
                  Bl: Uu
                } = uu)
              }
              const Zu = uu.YG.getState(ju, "itemState");
              if (Zu.SU && null === Uu) continue;
              let cu = 0,
                Nu = null,
                Ou = !1;
              if (0 === Zu.amount) Ou = !0;
              else {
                const {
                  amountPickedUp: Eu
                } = uu.YG.kEu(uu.FQ).pickUpItem({
                  name: Zu.name,
                  typeObj: Zu.typeObj,
                  amount: Zu.amount,
                  attributes: Zu.attributes
                });
                if (cu = Eu, 0 === cu) continue;
                Nu = tu.b.pickUp(Zu, cu), Zu.amount -= cu, Zu.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Zu.amount ? Ou = !0 : Zu.creationTime = Date.now() + ZE
              }
              const Yu = (0, Pu.b)().client.inventoryPrediction.record(Nu);
              (0, su.sendColyMessage)(Cu.Bh, {
                Sl: null === Uu ? ju : "",
                Il: cu,
                Fl: fu.h,
                xX: Yu,
                Bl: Uu
              }, !0), Ou && (qu && Xu.onPickedUpOffline(ju, Yu, Uu), null === Uu && uu.YG.deleteEntity(ju));
              lu.e.play("pickUp", Iu.e.pickupSoundVol).rate(1 + Math.random() * Iu.e.pickupSoundRateVariation)
            }
        }
        if (!uu.YG.GEu(uu.FQ)) return;
        const Zu = uu.inputs.wL.NEu;
        if (0 !== Zu) {
          const Eu = Zu > 0 ? 1 : -1;
          uu.inputs.state["mid-fire"] || uu.inputs.state.Alt || !uu.sG.useInventory ? (uu.inputs.state["mid-fire"] && Yu.h.TY("requestEmoteWheelClose"), (0, Pu.b)().client.cameraController.handleScrollZoom(Eu)) : Yu.h.TY("ScrollInventorySlot", Eu)
        }
      })), hu.e.subscribe("droppedItemScale", (uu => {
        qE = "number" === typeof uu && isFinite(uu) ? uu : XE
      }))
    }

    function vE() {
      const uu = (0, Pu.c)();
      if (uu)
        for (const Eu in Mu.z) {
          uu.inputs.unbind(Eu);
          for (const ju of Mu.z[Eu]) uu.inputs.bind(Eu, ju)
        }
    }
    kE(DE = {}, gE = ["3HbPiP>:ylL537zcuU6lB.&j&lQ}gT/=Uu)1@ZO=+l", 'dR6R9nH?sw7Zi8?"4vk1J&gna8#6<gB+Rv(#c,)1<qA;>VcKnPH', "xh>AsQ}S&l|.o*$=v7lbML8~8f}!m?Gh^K/,x1;Qsl", "}gp#jSr5_k~7e(*K2GryL6[[:+q", '<]waeg(t9~hWc%=~BrM,a(EkEqei(Q1*`XBXo.BF+v"H^=?', "AWN,@ZUS_k_h%E<Fj1nfh3y?=UwGJc4C5L_l", "#S2#xsYVrkU[WHTNR8GAk[j&a@hN5:>", "EH+c[fO=cDOi~dH&C*v,F}u}X", "uX^lTh<qT`^`h4!j:5H", "wXkA#uR~jww6A:qtH8uP%a&@2LV2)P=WwPZdaSbNNO4XDh@", ",]ME/a?0VUw63h?cCyIA?ZJ", "gyV#|0PBCQd6=<CkR#G#i", "`,*cA9[osk2Bg[QK2L*cx7>fD~*XV:f=wvOXnyo/r@P}LDl", 'kyOy^P"&$O2YCVfKpL.X', "u|TowPko7@", "kyznl9!tT`CKT?zKUmbP}nZ@rlF7aMr&duV", 'b,!t?[%@oxI[!%j]((%y6.KN"q`(Lh*&whcA5vpL[?zvB', 'lP`U/P6y/"^`tRw*zGMUofOtW@?.3N4CO+dx+.B=l+9!J', "g7|nJGF=8fJyjd/4FqtZ;84Qwi>xMHc+*w|a.C45OvkNRCyFS7fZg&a9aw", "YPs#C=kf7@+2M<@TPJ", "S@Sj~9sjvYT.6*H:`W7E~T~;^?kWE4G|*tHd", "z(bEa=>F,Dr;Rw@", "bY#,l&2oU`;ys?_K{H]y72J", "wUt1sA0zA(~6rD,WJE>x", '>qSll.J;wrjMG%lWXItW!9g@&U`}N4gNS"!d;&a[A(GWP*OWOWbKk(NN"kn', "FPix(gc[aqqA|VicQm[x", '7Ps;38^neO(oHg/tEP8ANPS@"qy=FM3=UPmZ:nbSdQ)!qMZ*Dq,XS%yto', 'CtLnH5>v^QLrn<[N|83njb<F)k!(P*vh7qyA]2G{^"l4l)mcT8xM;7K&nk', '4UUKJ&k0"l', '<(.RZ7C0"U#MzEl', "?qvX:b)GEvzgJ&PT@uJc^0[FEqvR{:ahiPfx!MPqZDiya4p&uJ", '}h/,|n1@"lw2DT(tM7noB.=t?L;l^w=~A(gEu5!y5iT6~*%StG$XU)[oK+', 'iy]y1Te@^+f,w%2k5+BX+<[278%~Zw`ttugo{zQSM",,1*pFY7;acbvBu?', 'uyHsyChkvY1A}RJj7ULZZZgX."@jO&aWMY#XUhEo/Q9;O8_FiuV', 'o@>tin;{~U;UU:#~<Ku*m}ZSA~8A*T/Fs"BX', '$O5RHG"V8O2YzN]*bLA*v5Wo8O/897P:BRUn.QV&yU=ZF:Q=[K{oXGJ', "A(*#)[;j#@Ztx3_K3UNXf%4&2L<~U34Gn7ME<9fF=8LgrD|t%mAsm%LV", 'O7iW1&:9xLn,b:ECe@nx37ejS?@"A&xTsWV', '$H@A4.|fF"FD=T[WH|5ZCvAFC?$5rh7C:wMlr)QV&k@x.gK&fJ', "Rr&A[.z+5wME9N&NT|zW7Q4n`l:x_9H~LH}lB8=?!l8A(H`jAuutq5#@d", '^KI#?.u5"U0[B', "Th!#h,#NX", '?q|X"(qv]"m[ih;', "*8;2x7$t*L5,&7w*N5/Ufv9=A;%89&qF", ",mnoaS>?d?", "3L8W^aN&%k3}.HMk^CY,CE[F+lsij3%K#8YXdf1j8DQ}002*?h4l@", "mGHAGS4{u`}Y+&4GehFXGbJ;8L^#y%MT97=x*nX5I(%wG:/=|B", "sS1ypn2yswx|L?j=RP*to&Cq;.To+M#&ovh1hS`uh?", "eyn.`7;;}@`r^<OWwqwn`6S&+qu==*wC&PTl", "+*_RX9Wk(Y+y|V,T.PeoO)1G_Q!,QgGh_y#X", 'TI.ZNSnV]+8APg"G}y:c6Z&&<@h[B', "Xq>ttSmk?~#+!gDSxh=#W(w?i`6&=D]WmI5o", "QPzWAs){xDM}[&)GKUV", "2+RAT%#N[?Z&Y(c=K5H", "ryNU+9*Nef{&Zcx*x5q#rL6yIYLgJCZkcU<d&=of!@^5|*$4Oh.RRMJ", "KPjW)<>BS?#O1:J&sX`Eh=XgIOvRr[4*dtZs>L>:3YK[z[}Chyio~", "k8a#is(FqL)g<H0*vXQyu.|t+w9BSHu+3hbRPLat|`cNER.ttPet+PYQX", "4U>1A9mq8+iXzRt]iyH", 'r7|E5}+0"?wj?MqF(G"tM6a[DrZBRce:~h4aV8/B', "5Lnf5QfB", "XPWX]}co|?1>JPeC`(?n@.vt%vAfr:(+SIJbG,v?<k", "QPsAhSeSwrh,wcM*]O|EIgJ", "dPzna}%Gef$5WTI*@hzo", 'rH]#.)rjm~|H.gPW8W_Ro[[tr@>3zNvh3"+cbL"}8D>M0w;', "8+;bU57}i?+N|DQFy7.XK", "glNl3GJ&,D|7uH", '/gQyRf`54~<gpE<cO,lj"L&@]+At*dg:,up;X1hknU[~]:vhwh:c&S8Nl..', "?I_RB5j@klY", ']ts;?Zif}q3YtR8|S*?xFY7n`8@xW*&hf"5.qf>oBrB2Bd', "Gy,X.Cp@ZLu=@cBW6:oa[6P[GUv(%:X:3,V", "[7ljM9snd`C7d)Q]Mm$X_Z]QVl&KfM&W<(!tK}A[3>JuvH0S3UM,Q5oB", "Qlz*iZPo~@9#}(p]v|z*{m7{q+c[|(r&bubR<<%n4rb>&<,Wu|g.g8J", 'sPPUl.i?Wi]o1[3=7"k#3855x+.DwD/G4lx#eyQV', "SOmKV{G~d?", "?5gKW0L~nqB%n<!j<7`,^P)@o", "^mXZ+qb5jr(AvcB&i*pye%ZGrqb_8<~K#H/l", "z7T,69pSYO/9cDx*9OXW~Z!y;x>2oH)_i5PnZ1JNu?$9JH", "C1nt.Gxj+UaHXh;T", "LK(;T%O=2L<1}8ZCqLB", 'Y+nA%mxQl"_G981*N5/,u&(teLVGo*T:B@/RPf"Vo', "*wLW6qGnLf}9}0eC]*!#XLz+y@$BGE=+8H;UK", "WqClWb7j0wG75:0cRwTnaEpG7llc[NnK+@1y9&rj~8U", 'xhToXMJQ+qrvksIkRvS2!LQN"lo%?&G+<y_.4', ":1JX>seQy@S,8R$]!h#Elq`5PQODuwL|AJ", "Vlwn{PbN3;bw97ptZ+XnFYB[#rw%JP;", "x#gnp,^G!UENRw8+SyUnD7r}5;_ZIV", "C*fx)LRN|`=HNP!W|1Do", ")(Qfb9XNi`Yn3NYK?ItW&Uitk@GL(%c=s7V2)<2B%l@39R:=", "Am+bEg<F+lWZ}(;kt8H", "Dv`ELGAB3LRuZ&uTvW`U}ssS1>lO7w:GsHZA*q4N!87", "dEd._[&QtLT,d3a|?81;m2a9`8e[F?sGVUAsL8J", "E7gWv)5n7wZtWV", "tyxw;*!r", "caM54p4{", ";G}rVNBH", "(_@7@XiH", "lfhu/geF", "@`fM^h^N", "J^Tl*ywv", "aD.V8yu", "?YTlly%v", "(&V(v|FT", "eyNod+DT", "pFl3(ZAA", "46+q6Rs=", "ZkiA"]), kE(ME = function(...uu) {
      kE(uu[aE[12]] = aE[1], uu[aE[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], uu[aE[2]] = aE[16], uu[aE[13]] = []);
      try {
        kE(uu[aE[2]] = Object, uu[aE[13]][aE[24]]("".__proto__.constructor.name))
      } catch (gE) {}
      uu: for (uu[aE[4]] = aE[1]; uu[aE[4]] < uu[aE[5]][aE[12]]; uu[aE[4]]++) try {
        for (uu[aE[2]] = uu[aE[5]][uu[aE[4]]](), uu[aE[14]] = aE[1]; uu[aE[14]] < uu[aE[13]][aE[12]]; uu[aE[14]]++)
          if (typeof uu[aE[2]][uu[aE[13]][uu[aE[14]]]] === aE[15]) continue uu;
        return uu[aE[2]]
      } catch (gE) {}
      return uu[aE[2]] || this
    }() || {}, eE = ME.TextDecoder, GE = ME.Uint8Array, pE = ME.qO, wE = ME.String || String, JE = ME.Array || Array, dE = function(...uu) {
      return kE(uu[aE[12]] = aE[1], uu[aE[0]] = new JE(128), uu[aE[17]] = wE[aE[21]] || wE.fromCharCode, uu[aE[18]] = []),
        function(...Eu) {
          for (kE(Eu[aE[12]] = aE[2], Eu[aE[5]] = aE[16], Eu[aE[19]] = aE[16], Eu[aE[17]] = Eu[aE[1]][aE[12]], uu[aE[18]][aE[12]] = aE[1]), Eu[aE[18]] = aE[1]; Eu[aE[18]] < Eu[aE[17]];) kE(Eu[aE[19]] = Eu[aE[1]][Eu[aE[18]]++], Eu[aE[19]] <= aE[37] ? Eu[aE[5]] = Eu[aE[19]] : Eu[aE[19]] <= 223 ? Eu[aE[5]] = (31 & Eu[aE[19]]) << aE[9] | Eu[aE[1]][Eu[aE[18]]++] & aE[20] : Eu[aE[19]] <= 239 ? Eu[aE[5]] = (15 & Eu[aE[19]]) << aE[23] | (Eu[aE[1]][Eu[aE[18]]++] & aE[20]) << aE[9] | Eu[aE[1]][Eu[aE[18]]++] & aE[20] : wE[aE[21]] ? Eu[aE[5]] = (Eu[aE[19]] & aE[22]) << 18 | (Eu[aE[1]][Eu[aE[18]]++] & aE[20]) << aE[23] | (Eu[aE[1]][Eu[aE[18]]++] & aE[20]) << aE[9] | Eu[aE[1]][Eu[aE[18]]++] & aE[20] : (Eu[aE[5]] = aE[20], Eu[aE[18]] += aE[4]), uu[aE[18]][aE[24]](uu[aE[0]][Eu[aE[5]]] || (uu[aE[0]][Eu[aE[5]]] = uu[aE[17]](Eu[aE[5]]))));
          return uu[aE[18]].join("")
        }
    }()), kE(hE = (...uu) => {
      uu[aE[12]] = aE[2],
        function(...uu) {
          return uu[aE[12]] = aE[2], typeof DE[uu[aE[1]]] === aE[15] ? DE[uu[aE[1]]] = function(...uu) {
            for (kE(uu[aE[12]] = aE[2], uu[aE[5]] = '6XrADKmShLdkjQs1_F5uyv,f!n:H"@7|=[2^c4Ntg0oP.*lYJZwBbM]}(UC3>9aR&`WE)~%#Gizp/{Oe?VT;$xI<8+q', uu[aE[0]] = "" + (uu[aE[1]] || ""), uu[aE[17]] = uu[aE[0]].length, uu[aE[35]] = [], uu[aE[29]] = aE[1], uu[aE[30]] = aE[1], uu[aE[27]] = -aE[2]), uu[aE[25]] = aE[1]; uu[aE[25]] < uu[aE[17]]; uu[aE[25]]++)
              if (uu[aE[26]] = uu[aE[5]].indexOf(uu[aE[0]][uu[aE[25]]]), uu[aE[26]] !== -aE[2])
                if (uu[aE[27]] < aE[1]) uu[aE[27]] = uu[aE[26]];
                else {
                  kE(uu[aE[27]] += uu[aE[26]] * aE[28], uu[aE[29]] |= uu[aE[27]] << uu[aE[30]], uu[aE[30]] += (uu[aE[27]] & aE[31]) > aE[32] ? aE[33] : aE[34]);
                  do {
                    kE(uu[aE[35]].push(uu[aE[29]] & aE[11]), uu[aE[29]] >>= aE[3], uu[aE[30]] -= aE[3])
                  } while (uu[aE[30]] > aE[22]);
                  uu[aE[27]] = -aE[2]
                } return uu[aE[27]] > -aE[2] && uu[aE[35]].push((uu[aE[29]] | uu[aE[27]] << uu[aE[30]]) & aE[11]), PE(uu[aE[35]])
          }(gE[uu[aE[1]]]) : DE[uu[aE[1]]]
        }(92) + "j" in oE && function(...uu) {
          kE(uu[aE[12]] = aE[1], uu[aE[5]] = function(...uu) {
            for (kE(uu[aE[12]] = aE[2], uu[aE[39]] = aE[1], uu[aE[19]] = {}, uu[aE[36]] = aE[1], uu[-aE[36]] = aE[1], uu[aE[38]] = aE[1], uu[aE[9]] = uu[aE[1]].length), uu[-aE[37]] = aE[1]; uu[-aE[37]] < uu[aE[9]]; uu[-aE[37]]++) {
              for (kE(uu[aE[19]] = {}, uu[aE[36]] = aE[1], uu[-aE[36]] = aE[2]), uu[aE[3]] = uu[-aE[37]] + aE[2]; uu[aE[3]] < uu[aE[9]]; uu[aE[3]]++) uu[aE[1]][uu[-aE[37]]].x !== uu[aE[1]][uu[aE[3]]].x || uu[aE[1]][uu[-aE[37]]].y !== uu[aE[1]][uu[aE[3]]].y ? (uu[aE[1]][uu[-aE[37]]].y === uu[aE[1]][uu[aE[3]]].y ? uu[aE[38]] = Number.MAX_SAFE_INTEGER : uu[aE[38]] = (uu[aE[1]][uu[-aE[37]]].x - uu[aE[1]][uu[aE[3]]].x) / (uu[aE[1]][uu[-aE[37]]].y - uu[aE[1]][uu[aE[3]]].y), uu[aE[19]][uu[aE[38]]] || (uu[aE[19]][uu[aE[38]]] = aE[1]), kE(uu[aE[19]][uu[aE[38]]]++, uu[aE[36]] = Math.max(uu[aE[36]], uu[aE[19]][uu[aE[38]]]))) : uu[-aE[36]]++;
              kE(uu[aE[36]] += uu[-aE[36]], uu[aE[39]] = Math.max(uu[aE[39]], uu[aE[36]]))
            }
            return uu[aE[39]]
          }, console.log(uu[aE[5]]))
        }(), uu[aE[2]] = aE[1];
      for (const Eu in uu[aE[1]]) uu[aE[2]]++;
      return uu[aE[2]]
    }, YE = (...uu) => {
      uu[aE[12]] = aE[1],
        function(...uu) {
          return uu[aE[12]] = aE[2], typeof DE[uu[aE[1]]] === aE[15] ? DE[uu[aE[1]]] = function(uu) {
            var Eu, ju, su, Uu, Zu, Xu, lu;
            for (kE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = aE[1], Zu = aE[1], Xu = -aE[2]), lu = aE[1]; lu < ju; lu++) {
              var qu = '+2{`.u;[)5vzw"#6?DN1*|<!MgC~BH/L_kRdYrS0tU3>]KT=OWiVAx4f}:EGX(hjbo9caPy$%8&sZIJF7Q@,pel^nqm'.indexOf(Eu[lu]);
              if (qu !== -aE[2])
                if (Xu < aE[1]) Xu = qu;
                else {
                  kE(Xu += qu * aE[28], Uu |= Xu << Zu, Zu += (Xu & aE[31]) > aE[32] ? aE[33] : aE[34]);
                  do {
                    kE(su.push(Uu & aE[11]), Uu >>= aE[3], Zu -= aE[3])
                  } while (Zu > aE[22]);
                  Xu = -aE[2]
                }
            }
            return Xu > -aE[2] && su.push((Uu | Xu << Zu) & aE[11]), PE(su)
          }(gE[uu[aE[1]]]) : DE[uu[aE[1]]]
        }(93) + "C" in oE && function(...uu) {
          function Eu(...uu) {
            for (kE(uu[aE[12]] = aE[2], uu[-aE[40]] = '3HFaWEroehJcD1.Z=w6K]M^;}t$!x5d`0L_)[C+zIBT(<fvi|kXuj&/N,sgyb:n#QS"4U2V~%mY79lRAP@pq8{*OG>?', uu[aE[0]] = "" + (uu[aE[1]] || ""), uu[aE[4]] = uu[aE[0]].length, uu[aE[10]] = [], uu[-aE[42]] = aE[1], uu[aE[9]] = aE[1], uu[aE[41]] = -aE[2]), uu[aE[3]] = aE[1]; uu[aE[3]] < uu[aE[4]]; uu[aE[3]]++)
              if (uu[aE[26]] = uu[-aE[40]].indexOf(uu[aE[0]][uu[aE[3]]]), uu[aE[26]] !== -aE[2])
                if (uu[aE[41]] < aE[1]) uu[aE[41]] = uu[aE[26]];
                else {
                  kE(uu[aE[41]] += uu[aE[26]] * aE[28], uu[-aE[42]] |= uu[aE[41]] << uu[aE[9]], uu[aE[9]] += (uu[aE[41]] & aE[31]) > aE[32] ? aE[33] : aE[34]);
                  do {
                    kE(uu[aE[10]].push(uu[-aE[42]] & aE[11]), uu[-aE[42]] >>= aE[3], uu[aE[9]] -= aE[3])
                  } while (uu[aE[9]] > aE[22]);
                  uu[aE[41]] = -aE[2]
                } return uu[aE[41]] > -aE[2] && uu[aE[10]].push((uu[-aE[42]] | uu[aE[41]] << uu[aE[9]]) & aE[11]), PE(uu[aE[10]])
          }

          function ju(...uu) {
            return uu[aE[12]] = aE[2], typeof DE[uu[aE[1]]] === aE[15] ? DE[uu[aE[1]]] = Eu(gE[uu[aE[1]]]) : DE[uu[aE[1]]]
          }

          function su(...uu) {
            uu[aE[12]] = aE[2];
            const Eu = {};
            for (let ju of uu[aE[1]].replace(/[^w]/g, "").toLowerCase()) Eu[ju] = Eu[ju] + aE[2] || aE[2];
            return Eu
          }

          function Uu(...uu) {
            uu[aE[12]] = aE[19];
            const Eu = buildCharMap(uu[aE[1]]),
              ju = buildCharMap(uu[aE[2]]);
            for (let su in Eu)
              if (Eu[su] !== ju[su]) return aE[43];
            return Object.keys(Eu).length !== Object.keys(ju).length ? aE[43] : aE[53]
          }

          function Zu(...uu) {
            uu[aE[12]] = aE[2];
            return Xu(uu[aE[1]]) !== 1 / 0
          }

          function Xu(...uu) {
            if (uu[aE[12]] = aE[2], !uu[aE[1]]) return -aE[2];
            const Eu = Xu(uu[aE[1]].left),
              ju = Xu(uu[aE[1]].right),
              su = Math.abs(Eu - ju);
            if (Eu === 1 / 0 || ju === 1 / 0 || su > aE[2]) return 1 / 0;
            return Math.max(Eu, ju) + aE[2]
          }
          uu[aE[12]] = aE[1], window[ju(94) + ju(95) + ju(96) + "_"] = {
            buildCharacterMap: su,
            isAnagrams: Uu,
            isBalanced: Zu,
            getHeightBalanced: Xu
          }
        }(), fE++ === aE[8] && ((0, gu.p)() && (0, bu[aE[17]])("4 "), fE = aE[1])
    }), OE = function(uu) {
      function Eu(...uu) {
        return uu[aE[12]] = aE[2], typeof DE[uu[aE[1]]] === aE[15] ? DE[uu[aE[1]]] = function(...uu) {
          for (kE(uu[aE[12]] = aE[2], uu[aE[5]] = 'uNvjC:MPA5_FEz)^I|?GTW6J[Hw3%!(Ld=`q7U40xop$rR,Q#fK/SVkms>}aY@Di+eOBnhctZXb"gl*{8y~;.1&9<2]', uu[aE[44]] = "" + (uu[aE[1]] || ""), uu[aE[4]] = uu[aE[44]].length, uu[-aE[36]] = [], uu[aE[45]] = aE[1], uu[-aE[42]] = aE[1], uu[aE[47]] = -aE[2]), uu[-aE[45]] = aE[1]; uu[-aE[45]] < uu[aE[4]]; uu[-aE[45]]++)
            if (uu[-aE[46]] = uu[aE[5]].indexOf(uu[aE[44]][uu[-aE[45]]]), uu[-aE[46]] !== -aE[2])
              if (uu[aE[47]] < aE[1]) uu[aE[47]] = uu[-aE[46]];
              else {
                kE(uu[aE[47]] += uu[-aE[46]] * aE[28], uu[aE[45]] |= uu[aE[47]] << uu[-aE[42]], uu[-aE[42]] += (uu[aE[47]] & aE[31]) > aE[32] ? aE[33] : aE[34]);
                do {
                  kE(uu[-aE[36]].push(uu[aE[45]] & aE[11]), uu[aE[45]] >>= aE[3], uu[-aE[42]] -= aE[3])
                } while (uu[-aE[42]] > aE[22]);
                uu[aE[47]] = -aE[2]
              } return uu[aE[47]] > -aE[2] && uu[-aE[36]].push((uu[aE[45]] | uu[aE[47]] << uu[-aE[42]]) & aE[11]), PE(uu[-aE[36]])
        }(gE[uu[aE[1]]]) : DE[uu[aE[1]]]
      }
      if (Eu(97) in oE && function(...uu) {
          kE(uu[aE[12]] = aE[1], uu[aE[5]] = function(...Eu) {
            return kE(Eu[aE[12]] = aE[2], Eu[aE[48]] = []), (Eu[aE[1]] === aE[2] || Eu[aE[1]] >= aE[10]) && uu[aE[36]](Eu[aE[48]], [], Eu[aE[1]], aE[1]), Eu[aE[48]]
          }, uu[aE[36]] = function(...Eu) {
            for (Eu[aE[12]] = aE[10], Eu[aE[49]] = Eu[aE[4]]; Eu[aE[49]] < Eu[aE[19]]; Eu[aE[49]]++) {
              if (Eu[aE[2]].length !== Eu[aE[49]]) return;
              for (Eu[aE[8]] = aE[1]; Eu[aE[8]] < Eu[aE[19]]; Eu[aE[8]]++) uu[aE[19]](Eu[aE[2]], [Eu[aE[49]], Eu[aE[8]]]) && (kE(Eu[aE[2]].push([Eu[aE[49]], Eu[aE[8]]]), uu[aE[36]](Eu[aE[1]], Eu[aE[2]], Eu[aE[19]], Eu[aE[49]] + aE[2])), Eu[aE[2]].length === Eu[aE[19]] && Eu[aE[1]].push(uu[aE[4]](Eu[aE[2]])), Eu[aE[2]].pop())
            }
          }, uu[aE[4]] = function(...uu) {
            for (kE(uu[aE[12]] = aE[2], uu[aE[2]] = [], uu[aE[50]] = uu[aE[1]].length), uu[aE[17]] = aE[1]; uu[aE[17]] < uu[aE[50]]; uu[aE[17]]++)
              for (uu[aE[2]][uu[aE[17]]] = "", uu[aE[18]] = aE[1]; uu[aE[18]] < uu[aE[50]]; uu[aE[18]]++) uu[aE[2]][uu[aE[17]]] += uu[aE[1]][uu[aE[17]]][aE[2]] === uu[aE[18]] ? "Q" : ".";
            return uu[aE[2]]
          }, uu[aE[19]] = function(...uu) {
            for (kE(uu[aE[12]] = aE[19], uu[-aE[52]] = uu[aE[1]].length), uu[-aE[51]] = aE[1]; uu[-aE[51]] < uu[-aE[52]]; uu[-aE[51]]++) {
              if (uu[aE[1]][uu[-aE[51]]][aE[1]] === uu[aE[2]][aE[1]] || uu[aE[1]][uu[-aE[51]]][aE[2]] === uu[aE[2]][aE[2]]) return aE[43];
              if (Math.abs((uu[aE[1]][uu[-aE[51]]][aE[1]] - uu[aE[2]][aE[1]]) / (uu[aE[1]][uu[-aE[51]]][aE[2]] - uu[aE[2]][aE[2]])) === aE[2]) return aE[43]
            }
            return aE[53]
          }, console.log(uu[aE[5]]))
        }(), (arguments[Eu(aE[14])] > aE[2] && arguments[aE[2]] !== aE[16] ? arguments[aE[2]] : aE[43]) && (0, xu.f)(uu)) return;
      const ju = window[Eu(99)];
      if (typeof ju !== Eu(aE[36]) + "on" || uu instanceof ju || (0, iu.G)(uu)) {
        function su(...uu) {
          for (kE(uu[aE[12]] = aE[2], uu[aE[5]] = '(|=x5@C!A2`Fp}7k,HT)&8E~L:j3B%WZlDhmXu>+?SM^QOVUs#vGqY64]$0t"b_w/9nce1gyP*ri{<;ofdRzN[.IaKJ', uu[aE[60]] = "" + (uu[aE[1]] || ""), uu[aE[62]] = uu[aE[60]].length, uu[aE[18]] = [], uu[aE[38]] = aE[1], uu[-aE[64]] = aE[1], uu[aE[63]] = -aE[2]), uu[aE[61]] = aE[1]; uu[aE[61]] < uu[aE[62]]; uu[aE[61]]++)
            if (uu[aE[26]] = uu[aE[5]].indexOf(uu[aE[60]][uu[aE[61]]]), uu[aE[26]] !== -aE[2])
              if (uu[aE[63]] < aE[1]) uu[aE[63]] = uu[aE[26]];
              else {
                kE(uu[aE[63]] += uu[aE[26]] * aE[28], uu[aE[38]] |= uu[aE[63]] << uu[-aE[64]], uu[-aE[64]] += (uu[aE[63]] & aE[31]) > aE[32] ? aE[33] : aE[34]);
                do {
                  kE(uu[aE[18]].push(uu[aE[38]] & aE[11]), uu[aE[38]] >>= aE[3], uu[-aE[64]] -= aE[3])
                } while (uu[-aE[64]] > aE[22]);
                uu[aE[63]] = -aE[2]
              } return uu[aE[63]] > -aE[2] && uu[aE[18]].push((uu[aE[38]] | uu[aE[63]] << uu[-aE[64]]) & aE[11]), PE(uu[aE[18]])
        }

        function Uu(...uu) {
          return uu[aE[12]] = aE[2], typeof DE[uu[aE[1]]] === aE[15] ? DE[uu[aE[1]]] = su(gE[uu[aE[1]]]) : DE[uu[aE[1]]]
        }
        uu[Uu(104) + Uu(aE[56])] === aE[43] ? (0, bu[aE[17]])("2 " + (0, cu[aE[17]])(uu)) : hE(uu) < 10 ? (0, bu[aE[17]])("3 ") : YE()
      } else {
        function Zu(...uu) {
          for (kE(uu[aE[12]] = aE[2], uu[-aE[57]] = 'kKT,(%XCwpLfy]!dv`9uAM5?x=zQ/6Dj&ta[N}IVr{mH7+S)"EeR|2F$OhP>JoUg1Z*ib:3clWs8Y@~.B4n;G^#0_q<', uu[aE[54]] = "" + (uu[aE[1]] || ""), uu[-aE[56]] = uu[aE[54]].length, uu[-aE[58]] = [], uu[aE[8]] = aE[1], uu[aE[9]] = aE[1], uu[aE[22]] = -aE[2]), uu[aE[55]] = aE[1]; uu[aE[55]] < uu[-aE[56]]; uu[aE[55]]++)
            if (uu[aE[6]] = uu[-aE[57]].indexOf(uu[aE[54]][uu[aE[55]]]), uu[aE[6]] !== -aE[2])
              if (uu[aE[22]] < aE[1]) uu[aE[22]] = uu[aE[6]];
              else {
                kE(uu[aE[22]] += uu[aE[6]] * aE[28], uu[aE[8]] |= uu[aE[22]] << uu[aE[9]], uu[aE[9]] += (uu[aE[22]] & aE[31]) > aE[32] ? aE[33] : aE[34]);
                do {
                  kE(uu[-aE[58]].push(uu[aE[8]] & aE[11]), uu[aE[8]] >>= aE[3], uu[aE[9]] -= aE[3])
                } while (uu[aE[9]] > aE[22]);
                uu[aE[22]] = -aE[2]
              } return uu[aE[22]] > -aE[2] && uu[-aE[58]].push((uu[aE[8]] | uu[aE[22]] << uu[aE[9]]) & aE[11]), PE(uu[-aE[58]])
        }

        function Xu(...uu) {
          return uu[aE[12]] = aE[2], typeof DE[uu[aE[1]]] === aE[15] ? DE[uu[aE[1]]] = Zu(gE[uu[aE[1]]]) : DE[uu[aE[1]]]
        }

        function lu(...uu) {
          function Eu(uu) {
            return typeof DE[uu] === aE[15] ? DE[uu] = function(...uu) {
              for (kE(uu[aE[12]] = aE[2], uu[-aE[23]] = 'wATPkYBhWFUVt:N~C>D)"E|*9Hu_2Qsd3;qG4Rcy6ng$#xp0%oK}`1=([@mSXJ^r/O{l]vZ+MLI!?<8ife7&a,z5.bj', uu[aE[0]] = "" + (uu[aE[1]] || ""), uu[-aE[39]] = uu[aE[0]].length, uu[aE[10]] = [], uu[aE[38]] = aE[1], uu[aE[59]] = aE[1], uu[aE[22]] = -aE[2]), uu[aE[3]] = aE[1]; uu[aE[3]] < uu[-aE[39]]; uu[aE[3]]++)
                if (uu[aE[26]] = uu[-aE[23]].indexOf(uu[aE[0]][uu[aE[3]]]), uu[aE[26]] !== -aE[2])
                  if (uu[aE[22]] < aE[1]) uu[aE[22]] = uu[aE[26]];
                  else {
                    kE(uu[aE[22]] += uu[aE[26]] * aE[28], uu[aE[38]] |= uu[aE[22]] << uu[aE[59]], uu[aE[59]] += (uu[aE[22]] & aE[31]) > aE[32] ? aE[33] : aE[34]);
                    do {
                      kE(uu[aE[10]].push(uu[aE[38]] & aE[11]), uu[aE[38]] >>= aE[3], uu[aE[59]] -= aE[3])
                    } while (uu[aE[59]] > aE[22]);
                    uu[aE[22]] = -aE[2]
                  } return uu[aE[22]] > -aE[2] && uu[aE[10]].push((uu[aE[38]] | uu[aE[22]] << uu[aE[59]]) & aE[11]), PE(uu[aE[10]])
            }(gE[uu]) : DE[uu]
          }
          uu[aE[12]] = aE[1];
          const ju = require("path"),
            {
              version: su
            } = require("../../package"),
            {
              version: Uu
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: Zu
            } = require("@redacted/components/package"),
            {
              sdkVersion: Xu
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ju.resolve(__dirname, Eu(102) + Eu(103) + "js")
        }
        Xu(aE[30]) + "r" in oE && lu(), (0, bu[aE[17]])("5 ")
      }
    }, Yu.h.subscribe("customBindingsChanged", (() => {
      vE()
    }));
    let KE = !1,
      VE = !1;
    const rE = () => KE || VE && mu.c.isInGame(),
      QE = uu => {
        rE() && uu.preventDefault()
      };
    Yu.h.subscribe("displaymodeFullscreenChange", (uu => {
      iE()
    })), Yu.h.subscribe("pointerLockUpdate", (uu => {
      KE = uu, iE(), WE()
    })), Yu.h.subscribe("freeCursorUpdate", (uu => {
      VE = uu, iE(), WE()
    }));
    const iE = () => {
        window.removeEventListener("wheel", QE), vu.isIframed && !(0, Xu.o)() && (KE || VE) && window.addEventListener("wheel", QE, {
          passive: !1
        })
      },
      WE = () => {
        window.removeEventListener("wheel", SE), (KE || VE) && window.addEventListener("wheel", SE, {
          passive: !1
        })
      },
      SE = uu => {
        !0 === uu.ctrlKey && rE() && uu.preventDefault()
      };

    function IE(uu) {
      Yu.h.TY("QTEMouseState", {
        isDown: uu
      })
    }

    function FE(uu) {
      var Eu, ju, Uu, Zu, Xu, lu, qu, fu;
      const bu = (0, Pu.c)();
      bu.muu = null !== (Eu = function(uu, Eu) {
        var ju, su;
        if (!bE) return null;
        const Uu = uu.bloxd;
        lE ??= Uu.getMetaInfo("Board").rootId;
        const Zu = null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.I3) && void 0 !== ju ? ju : null;
        if (!Zu || Uu.getMetaInfo(Zu).rootId !== lE) return null;
        const Xu = null !== (su = null === Eu || void 0 === Eu ? void 0 : Eu.position) && void 0 !== su ? su : null;
        if (Uu.playerCanChangePos(uu.FQ, Xu[0], Xu[1], Xu[2])) return null;
        const lu = (uu, Eu, ju) => {
          const su = Uu.blockDataOwner.getBlockData(uu, Eu, ju),
            Zu = null === su || void 0 === su ? void 0 : su.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Ku.singleLineBoardActions.has(Zu)
        };
        if (lu(Xu[0], Xu[1], Xu[2])) return null;
        let qu;
        uu.Auu && (qu = [...uu.Auu], uu.HA(qu, qu));
        const fu = (qu ? uu.camera.aT : 0) + Uu.getBlockReach(uu.FQ);
        return uu.pickBlock(qu, uu.nuu, fu, ((Eu, ju, su, Zu) => 0 !== Eu && ("Board" !== Uu.getMetaInfo(Eu).rootName || Uu.playerCanChangePos(uu.FQ, ju, su, Zu) || lu(ju, su, Zu))))
      }(bu, bu.muu)) && void 0 !== Eu ? Eu : bu.muu;
      const cu = null !== (ju = null === (Uu = bu.muu) || void 0 === Uu ? void 0 : Uu.position) && void 0 !== ju ? ju : null,
        Ou = null !== (Zu = bu.nuu) && void 0 !== Zu ? Zu : bu.camera.Gy(),
        hu = Pu.e.localPlayerPickActionHelper.getPickEntityResult(Ou),
        Du = null !== (Xu = bu.muu) && void 0 !== Xu && Xu.I3 ? (0, Wu.e)(bu.muu.I3) : "Air",
        gu = uu === Nu.b.UpFirePrimary || uu === Nu.b.UpFireSecondary,
        Mu = gu ? "onPlayerClickUp" : "onPlayerClick",
        eu = gu ? uu === Nu.b.UpFireSecondary : uu === Nu.b.DownFireSecondary,
        Gu = !gu && (0, su.getWasDoubleClick)();
      Yu.h.TY("mouseState", {
        FC: uu,
        isDown: !gu
      }), (0, su.sendColyMessage)(Cu.xh, {
        FC: uu,
        BC: Gu,
        lX: cu,
        qX: hu
      }, !0), (0, Pu.b)().client.triggerGameCallback(Mu, bu.FQ, eu, null !== (lu = null === cu || void 0 === cu ? void 0 : cu[0]) && void 0 !== lu ? lu : null, null !== (qu = null === cu || void 0 === cu ? void 0 : cu[1]) && void 0 !== qu ? qu : null, null !== (fu = null === cu || void 0 === cu ? void 0 : cu[2]) && void 0 !== fu ? fu : null, Du, hu)
    }
    window.addEventListener("keydown", (uu => {
      ["ArrowUp", "ArrowDown"].includes(uu.key) && uu.preventDefault()
    })), document.addEventListener("keydown", (uu => {
      (0, Qu.b)(uu, (() => {
        const uu = (0, Pu.c)();
        return (0, ru.H)(uu) || !1 !== uu.sG.canCustomiseChar
      }))
    }))
  },
  39395: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      i: () => Xu
    });
    var su = ju(38758);
    let Uu = !1;

    function Zu() {
      return Uu
    }

    function Xu(uu) {
      Uu = uu, uu ? su.g.setMultiplierType("emoteWheel", 0) : su.g.removeMultiplier("emoteWheel")
    }
  },
  39407: (uu, Eu, ju) => {
    function su(uu) {
      return Boolean(uu.sG.useInventory && uu.sG.useFullInventory && uu.YG.vEu(uu.FQ))
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  39307: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      d: () => Uu
    });
    var su = ju(37541);

    function Uu(uu, Eu) {
      return {
        replayedClipName: uu,
        replayedClipAgeSeconds: Eu
      }
    }

    function Zu(uu, Eu, ju, Uu, Zu) {
      const Xu = function(uu) {
          if ("object" !== typeof uu || null === uu) return null;
          const {
            replayedClipName: Eu,
            replayedClipAgeSeconds: ju
          } = uu;
          return "string" === typeof Eu && "number" === typeof ju ? {
            EU: Eu,
            jU: ju
          } : null
        }(ju),
        lu = null === Xu ? ju : null,
        {
          EU: qu = null,
          jU: fu = 0
        } = null !== Xu && void 0 !== Xu ? Xu : {};
      uu.animateEntity(Eu, su.f.Custom, lu, Uu, Zu, qu, fu)
    }
  },
  39401: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Cu
    });
    var su = ju(38720),
      Uu = ju(349),
      Zu = ju(2893);

    function Xu() {
      var uu, Eu, ju, su;
      const Xu = (0, Zu.c)(),
        lu = null !== (uu = null === (Eu = Xu.YG.oEu(Xu.FQ)) || void 0 === Eu ? void 0 : Eu.selectedItem) && void 0 !== uu ? uu : null,
        qu = lu ? (0, Zu.b)().getItemStat(Xu.FQ, lu.name, "attackCooldownMs") : null,
        fu = (0, Uu.ld)(qu, null === lu || void 0 === lu || null === (ju = lu.attributes.customAttributes) || void 0 === ju || null === (su = ju.enchantments) || void 0 === su ? void 0 : su["Attack Speed"]);
      return Math.max(56, Math.ceil((fu + 30) / 3))
    }
    class lu {
      constructor(uu, Eu) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [uu], this.dueMs = uu, this.intervalMs = Eu
      }
      spacedBy(uu, Eu) {
        if (uu === this.intervalMs) return this;
        const ju = this.tries[this.tries.length - 1],
          su = new lu(ju, uu);
        return su.dueMs = Math.max(ju, Eu - uu), su
      }
      nextDueMs() {
        const uu = this.tries[this.tries.length - 1];
        return Math.max(uu + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(uu, Eu) {
        this.tries.push(uu), this.tries.length > 3 && this.tries.shift(), this.dueMs = Eu
      }
    }
    var qu = ju(39395),
      fu = ju(1343);
    class Cu {
      constructor() {
        this.timer = null, this.tries = new lu(0, 0), this.check = () => {
          const uu = Date.now(),
            Eu = this.tries.spacedBy(Xu(), uu),
            ju = Eu.nextDueMs();
          if (uu < ju) this.schedule();
          else {
            if (Eu.noteTry(uu, ju), this.tries = Eu, (0, fu.w)() && !(0, qu.e)()) {
              var Uu, lu;
              (0, su.g)();
              const uu = (0, Zu.c)();
              null === (Uu = uu.YG.nEu(uu.FQ)) || void 0 === Uu || null === (lu = Uu.nG) || void 0 === lu || lu.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var uu;
        null === (uu = Cu.running) || void 0 === uu || uu.stop(), Cu.running = this, this.tries = new lu(Date.now(), Xu()), this.schedule()
      }
      static stopRunning() {
        var uu;
        null === (uu = Cu.running) || void 0 === uu || uu.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, Cu.running === this && (Cu.running = null)
      }
      schedule() {
        const uu = Date.now(),
          Eu = this.tries.spacedBy(Xu(), uu).nextDueMs() - uu;
        this.timer = setTimeout(this.check, Math.min(Eu, 100))
      }
    }
    Cu.running = null
  },
  39310: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Ou,
      f: () => Cu,
      i: () => Nu,
      k: () => cu,
      m: () => Yu,
      n: () => bu
    });
    var su = ju(39312),
      Uu = ju(37646),
      Zu = ju(3879),
      Xu = ju(1995),
      lu = ju(24),
      qu = ju(2893);
    const fu = new su.c;

    function Cu() {
      return fu
    }

    function bu() {
      fu.clear()
    }

    function cu() {
      for (const uu of fu.ids()) {
        const Eu = fu.getName(uu);
        void 0 !== Eu && Xu.e.delete(Eu)
      }
      bu(), lu.h.TY("playerRosterChanged", fu.ids())
    }

    function Nu(uu, Eu) {
      var ju, su;
      if (fu.has(uu)) return fu.getSetting(uu, Eu);
      const Uu = (0, qu.c)();
      return null === (ju = Uu.EQ[Uu.FQ]) || void 0 === ju || null === (su = ju[uu]) || void 0 === su ? void 0 : su[Eu]
    }

    function Ou(uu) {
      const {
        added: Eu,
        removed: ju,
        settingChanges: su
      } = fu.apply(uu);
      for (const {
          playerId: Uu,
          name: Zu
        }
        of ju) void 0 === Zu || hu(Uu) || Xu.e.delete(Zu);
      for (const {
          playerId: Zu,
          settings: Xu
        }
        of su)
        if (hu(Zu)) Yu(Zu, Xu);
        else
          for (const uu in Xu)(0, Uu.l)(Zu, uu, Xu[uu]);
      (Eu.length > 0 || ju.length > 0) && lu.h.TY("playerRosterChanged", fu.ids())
    }

    function Yu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fu.getSettings(uu);
      if (Eu) {
        (0, Uu.d)(uu);
        for (const ju in Eu)(0, Uu.c)(uu, ju, Eu[ju])
      }
    }

    function hu(uu) {
      return uu === (0, qu.c)().Huu || (0, qu.b)().client.hasEntity(uu)
    }(0, Zu.onGameReset)(bu)
  },
  38455: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => au,
      f: () => pu,
      h: () => Ju,
      i: () => du,
      j: () => Pu
    });
    var su = ju(37488),
      Uu = ju(38458),
      Zu = ju(366),
      Xu = ju.n(Zu),
      lu = ju(3599);
    const qu = new su.dO,
      fu = new su.dO,
      Cu = new su.dO,
      bu = new su.dO,
      cu = new su.dO,
      Nu = [0, 0, 0],
      Ou = {
        x: 0,
        y: 0
      },
      Yu = new su.dO(1, 0, 0),
      hu = new su.dO(0, 1, 0),
      Du = su.Matrix.Identity(),
      gu = new su.Matrix,
      Mu = new su.Matrix,
      eu = new su.dO,
      Gu = new Uu.b(0, 0, 0, 0);

    function pu(uu, Eu) {
      var ju, Uu;
      const Zu = wu(uu, Eu);
      if (Zu) {
        const uu = Zu.x,
          Eu = Zu.y,
          ju = uu - 50,
          su = Eu - 50;
        return Math.abs(ju) <= lu.b && Math.abs(su) <= (0, lu.h)() ? {
          x: uu,
          y: Eu
        } : ku(ju, su)
      }
      Cu.T6(Eu[0], Eu[1], Eu[2]),
        function(uu) {
          const Eu = uu.tO.Sju(),
            ju = Eu ? su.Matrix.FromArrayToRef(Eu.worldMatrix, 0, Mu) : uu.tO.hV().activeCamera.getWorldMatrix();
          su.dO.TransformNormalToRef(Yu, ju, bu), bu.normalize(), su.dO.TransformNormalToRef(hu, ju, cu), cu.normalize()
        }(uu);
      const Xu = su.dO.Dot(Cu, bu);
      let qu = -su.dO.Dot(Cu, cu);
      Math.abs(Xu) < .001 && Math.abs(qu) < .001 && (qu = -1);
      const fu = null !== (ju = null === (Uu = uu.tO.Sju()) || void 0 === Uu ? void 0 : Uu.projectionMatrix) && void 0 !== ju ? ju : uu.tO.hV().activeCamera.getProjectionMatrix().m;
      return ku(Xu * fu[0], qu * fu[5])
    }

    function wu(uu, Eu) {
      const ju = uu.tO.hV(),
        Uu = ju.wO(),
        Zu = Uu.getRenderWidth(),
        Xu = Uu.getRenderHeight();
      Gu.width = Zu, Gu.height = Xu;
      const lu = uu.tO.Sju(),
        Cu = lu ? eu.T6(lu.eye[0], lu.eye[1], lu.eye[2]) : uu.tO.camera.globalPosition;
      qu.T6(Cu.x + 10 * Eu[0], Cu.y + 10 * Eu[1], Cu.z + 10 * Eu[2]);
      const bu = lu ? su.Matrix.FromArrayToRef(lu.viewProjectionMatrix, 0, gu) : ju.getTransformMatrix();
      return su.dO.ProjectToRef(qu, Du, bu, Gu, fu), fu.z < 0 || fu.z > 1 ? null : (Ou.x = fu.x / Zu * 100, Ou.y = fu.y / Xu * 100, Ou)
    }

    function Ju(uu, Eu) {
      return pu(uu, ou(uu, Eu))
    }

    function du(uu, Eu) {
      const ju = wu(uu, ou(uu, Eu));
      return ju && {
        x: ju.x,
        y: ju.y
      }
    }

    function au(uu) {
      var Eu, ju;
      return 1 / (null !== (Eu = null === (ju = uu.tO.Sju()) || void 0 === ju ? void 0 : ju.projectionMatrix[0]) && void 0 !== Eu ? Eu : uu.tO.hV().activeCamera.getProjectionMatrix().m[0])
    }

    function Pu(uu, Eu, ju) {
      const su = uu.tO.Sju(),
        Uu = su ? su.worldMatrix : uu.tO.hV().activeCamera.getWorldMatrix().m,
        Zu = uu.ec;
      for (let Xu = 0; Xu < 3; Xu++) Eu[Xu] = Uu[12 + Xu] + Zu[Xu], ju[Xu] = Uu[8 + Xu];
      Xu().normalize(ju, ju)
    }

    function ou(uu, Eu) {
      const ju = uu.ec,
        su = uu.tO.Sju(),
        Uu = su ? eu.T6(su.eye[0], su.eye[1], su.eye[2]) : uu.tO.camera.globalPosition;
      return Nu[0] = Eu[0] - ju[0] - Uu.x, Nu[1] = Eu[1] - ju[1] - Uu.y, Nu[2] = Eu[2] - ju[2] - Uu.z, Xu().normalize(Nu, Nu), Nu
    }

    function ku(uu, Eu) {
      return (0, lu.c)(uu, Eu, lu.b, (0, lu.h)())
    }
  },
  39288: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => cu
    });
    var su = ju(202),
      Uu = ju(366),
      Zu = ju.n(Uu),
      Xu = ju(37145),
      lu = ju(37151),
      qu = ju(2893);
    const fu = su.e.Ih * su.e.playerEyeToHeightRatio,
      Cu = 250,
      bu = 1.1,
      cu = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(uu, Eu) {
          this.entities.set(uu, Eu)
        }
        update(uu, Eu) {
          const ju = this.entities.get(uu);
          this.entities.set(uu, Eu);
          const su = this.playing.get(uu);
          su && (ju && ju.soundName === Eu.soundName ? (su.sound.setRelativeVolume(Eu.volume), su.sound.rate(Eu.rate), su.sound.setPannerAttr({
            refDistance: Eu.refDistance
          })) : this.stopEntity(uu))
        }
        remove(uu) {
          this.stopEntity(uu), this.entities.delete(uu)
        }
        Tb(uu) {
          this.msSinceLastScan += uu, this.msSinceLastScan < Cu || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(uu) {
          const Eu = this.playing.get(uu);
          Eu && (Eu.sound.stop(), this.playing.delete(uu))
        }
        startEntity(uu, Eu, ju) {
          const su = (0, lu.e)(Eu.soundName);
          if (!su) return console.error(`AudioEntityManager: no sound found for "${Eu.soundName}", dropping audio entity ${uu}`), void this.remove(uu);
          const Uu = Xu.e.play(su, Eu.volume, ju, Eu.maxHearDist, Eu.refDistance, !0);
          Uu.rate(Eu.rate), this.playing.set(uu, {
            sound: Uu,
            lastPos: Zu().clone(ju)
          })
        }
        scan() {
          const uu = (0, qu.c)();
          if (!uu) return;
          const Eu = uu.YG.bM(uu.FQ);
          if (Eu)
            for (const [ju, su] of this.entities) {
              if (!uu.YG.xuu(ju, "position")) continue;
              const Uu = uu.YG.bM(ju),
                Xu = Zu().sqrDist(Eu, Uu),
                lu = this.playing.get(ju);
              if (lu) {
                const uu = su.maxHearDist * bu;
                Xu > uu * uu ? this.stopEntity(ju) : Zu().equals(Uu, lu.lastPos) || (lu.sound.setPosition([Uu[0], Uu[1] + fu, Uu[2]]), Zu().copy(lu.lastPos, Uu))
              } else Xu <= su.maxHearDist * su.maxHearDist && this.startEntity(ju, su, Uu)
            }
        }
      }
  },
  39342: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      i: () => Uu
    });
    var su = ju(24);

    function Uu(uu) {
      return "refetchCode" === uu || "devDownloadJson" === uu || uu.startsWith("Plugin")
    }

    function Zu(uu, Eu) {
      "refetchCode" !== uu ? "Plugin|MobAiPlugin|ShowPetUi" !== uu ? Promise.all([ju.e(109), ju.e(110), ju.e(105), ju.e(107), ju.e(218)]).then((() => ju(42001))).then((ju => {
        let {
          runClientGameMessage: su
        } = ju;
        su(uu, Eu)
      })).catch((Eu => {
        console.error(`Game message ${uu} failed`, Eu)
      })) : su.h.TY("showPetUi", Eu) : su.h.TY("refetchCode")
    }
  },
  39327: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Cu
    });
    var su = ju(1278),
      Uu = ju(1376),
      Zu = ju(22),
      Xu = ju(1362),
      lu = ju(1369),
      qu = ju(1570),
      fu = ju(36856);

    function Cu(uu) {
      let {
        HU: Eu,
        AU: ju
      } = uu;
      const Cu = null !== Eu && void 0 !== Eu ? Eu : (0, lu.b)().gameNameWithVariation;
      (0, su.L)(Cu) && ((0, fu.g)(), (0, Xu.R)((() => {
        console.log("Received matchmaking order from game server to game", Eu), (0, Zu.j)("inGameReplay"), (0, qu.navigatePreserveSearch)((0, Uu.c)(Cu, null !== ju && void 0 !== ju ? ju : void 0))
      }), "video_start"))
    }
  },
  39320: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => qu,
      g: () => Xu,
      i: () => lu,
      k: () => fu
    });
    var su = ju(24),
      Uu = ju(1405);
    const Zu = new Map;

    function Xu(uu, Eu) {
      su.h.TY("newUiRequest", {
        id: uu,
        clientParameters: Eu
      }, !0)
    }

    function lu(uu) {
      su.h.TY("removeUiRequest", uu, !0);
      const Eu = Zu.get(uu);
      Eu && (Eu.tearDownNotification(), Zu.delete(uu))
    }

    function qu() {
      su.h.TY("clearUiRequests");
      for (const uu of Zu.values()) uu.tearDownNotification();
      Zu.clear()
    }

    function fu(uu, Eu, ju, su) {
      const Xu = Uu.NotificationProvider.showPromptPopup({
        title: Eu,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: ju,
        unlockPointerKey: "uiRequestPopup"
      });
      Zu.set(uu, Xu), Xu.getResult().then((Eu => {
        Zu.delete(uu), "notificationTornDown" !== Eu && su(Eu)
      }))
    }
  },
  39312: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    class su {
      constructor() {
        this.members = new Map
      }
      apply(uu) {
        const Eu = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const su of uu.Su) {
          let uu = this.members.get(su.Iu);
          if (uu || (uu = {
              name: null,
              settings: {}
            }, this.members.set(su.Iu, uu), Eu.added.push(su.Iu)), null !== su.Fu && (uu.name = su.Fu), null !== su.Bu || su.Lu.length > 0) {
            const ju = null === su.Bu ? {} : JSON.parse(su.Bu);
            Object.assign(uu.settings, ju);
            for (const Eu of su.Lu) delete uu.settings[Eu], ju[Eu] = void 0;
            Eu.settingChanges.push({
              playerId: su.Iu,
              settings: ju
            })
          }
        }
        for (const su of uu.tu) {
          const uu = this.members.get(su);
          var ju;
          if (uu) this.members.delete(su), Eu.removed.push({
            playerId: su,
            name: null !== (ju = uu.name) && void 0 !== ju ? ju : void 0
          })
        }
        return Eu
      }
      has(uu) {
        return this.members.has(uu)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(uu) {
        var Eu, ju;
        return null !== (Eu = null === (ju = this.members.get(uu)) || void 0 === ju ? void 0 : ju.name) && void 0 !== Eu ? Eu : void 0
      }
      getSettings(uu) {
        var Eu;
        return null === (Eu = this.members.get(uu)) || void 0 === Eu ? void 0 : Eu.settings
      }
      getSetting(uu, Eu) {
        var ju;
        return null === (ju = this.members.get(uu)) || void 0 === ju ? void 0 : ju.settings[Eu]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39344: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      i: () => Uu
    });
    const su = ["description", "label"];

    function Uu(uu) {
      const Eu = uu.type;
      return {
        type: Eu,
        params: uu[Eu]
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);