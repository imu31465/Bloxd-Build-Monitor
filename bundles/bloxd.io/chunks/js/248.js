export const id = 248;
export const ids = [248];
export const modules = {
  39251: (TT, UT, mT) => {
    function WT(TT) {
      return !(!TT.lobbyLeaderboardInfo && !TT.lobbyManage)
    }
    mT.d(UT, {
      b: () => WT
    })
  },
  39159: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT
    });
    var WT = mT(31),
      zT = mT(2067);

    function MT(TT) {
      let {
        taskId: UT,
        progress: mT
      } = TT;
      const WT = zT.d.get("_tasks");
      null !== WT && void 0 !== WT && WT[UT] && zT.d.apply({
        _tasks: {
          ...WT,
          [UT]: {
            ...WT[UT],
            progress: mT
          }
        }
      })
    }
    WT.j.subscribe("clientTaskProgress", (TT => {
      MT(TT)
    }))
  },
  39096: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => Tm,
      f: () => AU,
      i: () => RU
    });
    var WT = mT(3781),
      zT = mT(166),
      MT = mT(208),
      gT = mT(662),
      nT = mT(44),
      HT = mT(2875),
      kT = mT(3841),
      jT = mT(3823),
      lT = mT(1321);
    const LT = new WeakMap;
    class pT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          FkT: !0
        };
        this.callbacks = UT, this.options = mT, this.XmT = void 0, this.sessionId = void 0, this.Py = [], this.PkT = !1, this.kB = !1, this.VkT = void 0, this.Fy = 0, this.FzT = 0, this.CkT = (TT, UT) => {
          if (this.kB) return;
          const mT = Number(TT);
          this.PkT ? this.rkT(mT, UT) : this.Py.push({
            id: mT,
            payload: UT
          })
        }, this.dispose = () => {
          this.kB || (this.kB = !0, LT.delete(this), this.Py.length = 0, this.VkT())
        }, this.XmT = TT, this.sessionId = TT.sessionId, LT.set(this, []), this.VkT = this.KkT()
      }
      SkT(TT) {
        this.VkT(), this.XmT = TT, this.sessionId = TT.sessionId, this.Fy = 0, this.FzT = 0, this.VkT = this.KkT()
      }
      get Iy() {
        return this.FzT
      }
      KkT() {
        const TT = this.XmT.LO("*", this.CkT);
        return this.options.FkT && this.XmT.TY(this.dispose), TT
      }
      rkT(TT, UT) {
        try {
          (0, kT._b)(TT) && (UT = (0, kT.d)(TT, jT.HB.from(UT)));
          const mT = LT.get(this)[TT];
          if ("function" !== typeof mT) {
            if (this.callbacks.GkT) return void this.callbacks.GkT(TT, UT);
            throw new Error(`No onMessage handler registered for message id ${TT}`)
          }
          mT(UT)
        } catch (mT) {
          this.callbacks.NkT(`Error in onMessage ${TT} with payload ${JSON.stringify(UT)}`, mT)
        } finally {
          this.Fy++
        }
      }
      EkT() {
        for (const {
            id: TT,
            payload: UT
          }
          of this.Py) {
          if (this.kB) break;
          this.rkT(TT, UT)
        }
        this.Py.length = 0
      }
      bJ() {
        return this.kB
      }
      hkT() {
        if (this.PkT || this.kB) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          LO: (TT, UT) => {
            if (this.PkT || this.kB) throw new Error("Trying to call onMessage after registration finished");
            this.LO(TT, UT)
          },
          finishRegistration: () => {
            if (this.kB) throw new Error("Cannot finish message registration after disposal");
            this.PkT = !0, this.EkT()
          }
        }
      }
      LO(TT, UT) {
        var mT, WT;
        null === (mT = (WT = this.callbacks).DkT) || void 0 === mT || mT.call(WT);
        const zT = LT.get(this);
        for (; TT > zT.length;) zT[zT.length] = null;
        zT[TT] = UT
      }
      send(TT, UT) {
        this.okT(), (0, lT.I)(UT) ? this.XmT.yX(TT, UT) : this.XmT.send(TT, UT)
      }
      okT() {
        var TT, UT;
        (this.FzT++, 5 === BT++) && (null === (TT = (UT = this.callbacks).DkT) || void 0 === TT || TT.call(UT), BT = 0)
      }
      lq() {
        this.dispose(), this.XmT.lq()
      }
      leave() {
        this.dispose(), this.XmT.leave()
      }
    }
    let BT = 0;
    var ZT = mT(3794);
    class cT extends pT {
      constructor(TT) {
        super(TT, {
          DkT: () => {
            (0, nT.o)(!0) && (0, WT.vy)()
          },
          NkT: (TT, UT) => {
            var mT;
            null === (mT = (0, HT.h)()) || void 0 === mT || mT.ZZ(TT, UT)
          }
        }, {
          FkT: !1
        }), (0, ZT.g)(TT)
      }
      Sy(TT, UT) {
        return !!(0, ZT.i)((0, ZT.d)(), this.XmT, TT, UT) && (this.okT(), !0)
      }
      SkT(TT) {
        this.AkT(), super.SkT(TT), (0, ZT.g)(TT)
      }
      lq() {
        super.lq(), this.AkT()
      }
      AkT() {
        this.XmT.bq.Dp.Gs = void 0
      }
    }
    var vT = mT(31),
      fT = mT(2067),
      qT = mT(1863),
      iT = mT(36534),
      bT = mT(39101),
      OT = mT(38171),
      eT = mT(37936),
      YT = mT(653),
      JT = mT(38539);

    function xT(TT, UT, mT) {
      const WT = function(TT) {
          const UT = new Int32Array(TT.length * JT.d);
          return TT.forEach(((TT, mT) => {
            const WT = mT * JT.d;
            if (4 === TT.length) {
              const [mT, zT, MT, gT] = TT;
              UT.set([mT, zT, MT, mT, zT, MT, gT], WT)
            } else {
              const [mT, zT, MT, gT, nT, HT, kT] = TT;
              UT.set([mT, MT, nT, zT, gT, HT, kT], WT)
            }
          })), UT
        }(mT),
        zT = (UT, mT, WT, zT) => {
          TT.setBlockNoMulti(UT, mT, WT, zT, !0)
        };
      TT.client.gameRecorder.isCapturing() ? (0, JT.lb)(WT, (0, JT.jb)(WT), zT) : TT.Rl.Nl.PJ(WT, {
        bS: zT,
        isHookId: UT => TT.blockChangeHasHooks(UT),
        watched: () => function(TT, UT, mT) {
          const WT = [],
            zT = (TT, UT, mT) => {
              WT.push(TT, UT, mT)
            },
            MT = new Set;
          for (let gT = 0; gT < mT.length; gT += JT.d)
            for (let UT = (0, YT.H)(mT[gT]); UT <= (0, YT.H)(mT[gT + 3]); UT++)
              for (let WT = (0, YT.H)(mT[gT + 1]); WT <= (0, YT.H)(mT[gT + 4]); WT++)
                for (let nT = (0, YT.H)(mT[gT + 2]); nT <= (0, YT.H)(mT[gT + 5]); nT++) {
                  const mT = `${UT}|${WT}|${nT}`;
                  MT.has(mT) || (MT.add(mT), TT.blockDataOwner.forEachDataCell(UT, WT, nT, zT))
                }
          return UT.forEachCell(zT), Int32Array.from(WT)
        }(TT, UT, WT)
      }), TT.Rl.wTT()
    }

    function dT(TT) {
      TT.bmT = new Set, TT.YmT = new Set, TT.OmT = new Set, TT.JmT = new Set, TT.emT = [], TT.xmT = [], TT.IK = new Set, TT.Qz = [], TT.sK = []
    }
    class wT {
      constructor(TT) {
        this.Rl = TT
      }
      register(TT) {
        const UT = this.Rl,
          mT = (0, HT.d)();
        TT.LO(kT._, (TT => {
          UT.Nl.bmT.add(TT), UT.Nl.YmT.delete(TT)
        })), TT.LO(kT.gb, (TT => {
          UT.Nl.YmT.add(TT), UT.Nl.bmT.delete(TT)
        })), TT.LO(kT.Rd, (TT => {
          UT.Nl.YmT.delete(TT), UT.Nl.bmT.delete(TT)
        })), TT.LO(kT.db, (TT => {
          UT.Nl.OmT.add(TT), UT.Nl.JmT.delete(TT)
        })), TT.LO(kT.ib, (TT => {
          UT.Nl.JmT.add(TT), UT.Nl.OmT.delete(TT)
        })), TT.LO(kT.Xd, (TT => {
          UT.Nl.JmT.delete(TT), UT.Nl.OmT.delete(TT)
        })), TT.LO(kT.ab, (TT => {
          (0, lT.sb)(TT, UT.Nl.xmT), (0, lT.sb)(TT, UT.Nl.emT), UT.Nl.emT.push(TT)
        })), TT.LO(kT.hb, (TT => {
          (0, lT.sb)(TT, UT.Nl.emT), (0, lT.sb)(TT, UT.Nl.xmT), UT.Nl.xmT.push(TT)
        })), TT.LO(kT.Ud, (TT => {
          (0, lT.sb)(TT, UT.Nl.emT), (0, lT.sb)(TT, UT.Nl.xmT)
        })), TT.LO(kT.nf, (TT => {
          let {
            Wz: mT,
            zz: WT
          } = TT;
          WT ? UT.Nl.IK.delete(mT) : UT.Nl.IK.add(mT)
        })), TT.LO(kT.kf, (TT => {
          let {
            Qz: WT,
            sz: zT
          } = TT;
          mT.updateWalkThroughRect(UT.VV, WT, zT)
        })), (0, WT.onGameResetOnce)((() => {
          dT(UT.Nl)
        })), TT.LO(kT.Xb, (TT => {
          OT.d.applyServerUpdate(TT)
        })), TT.LO(kT.lb, (TT => {
          mT.applyServerBlocks((() => {
            ! function(TT, UT) {
              for (const {
                  fT: mT,
                  qT: WT
                }
                of UT) {
                const UT = eT.e[WT];
                if (UT) {
                  const {
                    compX: WT,
                    compY: zT,
                    compZ: MT,
                    mainMultiblock: gT
                  } = UT;
                  TT.EQ(mT[0] - WT, mT[1] - zT, mT[2] - MT, gT)
                }
              }
              for (const {
                  fT: mT,
                  qT: WT,
                  iT: zT
                }
                of UT) TT.setBlockNoMulti(mT[0], mT[1], mT[2], WT, !0), TT.blockDataOwner.setBlockData(mT[0], mT[1], mT[2], null === zT ? void 0 : JSON.parse(zT)), TT.blockAdded(mT[0], mT[1], mT[2], WT)
            }(mT, TT)
          })), vT.j.EZ("changeBlockFail", TT), mT.client.triggerGameCallback("onChangeBlockFail", TT), vT.j.EZ("EditBoard", {
            pos: null
          }), vT.j.EZ("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), TT.LO(kT.zb, (TT => {
          mT.applyServerBlocks((() => {
            xT(mT, OT.d, TT)
          }))
        })), TT.LO(kT.bf, (TT => {
          let {
            bT: UT,
            OT: WT
          } = TT;
          if (mT.hG(UT[0], UT[1], UT[2])) {
            const TT = (0, HT.d)().uq(UT[0], UT[1], UT[2]);
            (0, HT.d)().updateMailboxContents(UT[0], UT[1], UT[2], TT, WT)
          }
        })), TT.LO(kT.oe, (TT => {
          let {
            pos: UT,
            data: WT
          } = TT;
          mT.blockDataOwner.setBlockData(UT[0], UT[1], UT[2], WT), mT.blockAdded(UT[0], UT[1], UT[2], mT.uq(UT[0], UT[1], UT[2]))
        }))
      }
    }
    var tT = mT(37259),
      aT = mT(36866),
      yT = mT(38210),
      XT = mT(38058),
      IT = mT(38226);
    class QT {
      constructor(TT, UT) {
        this.Rl = TT, this.setUpQueuedEntity = UT
      }
      register(TT) {
        const UT = this.Rl,
          mT = (0, HT.d)();
        TT.LO(kT.Z, (TT => {
          let {
            im: UT,
            bm: mT
          } = TT;
          this.setUpQueuedEntity(UT), UT = (0, aT.e)(UT), (0, HT.d)().client.gameRecorder.recordBulletShot(UT, mT), vT.j.EZ(`bulletShot|${UT}`, {
            bulletDirections: mT
          })
        })), TT.LO(kT.Yb, (TT => {
          let {
            Bm: UT,
            Zm: mT
          } = TT;
          vT.j.EZ("damagedByOtherPlayer", {
            Bm: UT,
            direction: mT
          }, !0)
        })), TT.LO(kT.pd, (TT => {
          vT.j.EZ("playerKilled", TT, !0), (0, HT.d)().client.gameRecorder.recordPlayerKilled(TT.deadEId, TT.killerEId, TT.withItem, TT.killstreak)
        })), TT.LO(kT.Hb, (TT => {
          vT.j.EZ("customKillfeed", TT, !0), (0, HT.d)().client.gameRecorder.recordCustomKillfeed(TT.killer, TT.victim, TT.withItem)
        })), TT.LO(kT.zd, (TT => {
          let {
            rT: mT,
            KT: WT
          } = TT;
          this.setUpQueuedEntity(mT);
          const zT = UT.pY.RUT(mT);
          null !== zT && void 0 !== zT && zT.isGun() && zT.reload(Date.now(), WT)
        })), TT.LO(kT.je, (TT => {
          let {
            PU: mT,
            xT: WT
          } = TT;
          const zT = WT ? (0, IT.f)(UT, WT) : void 0;
          vT.j.EZ("sendHitmarker", {
            PU: mT,
            screenPos: zT
          }, !0)
        })), TT.LO(kT.Bc, (TT => {
          let {
            eT: WT,
            YT: zT,
            dT: MT,
            wT: gT,
            tT: nT,
            aT: HT,
            yT: kT
          } = TT;
          this.setUpQueuedEntity(WT), WT = (0, aT.e)(WT);
          const jT = UT.pY.GUT(WT);
          if (jT && (jT.lastHurtTime = performance.now()), (0, yT.playRigHurt)(UT, WT, HT), vT.j.EZ("lifeformHurt", {
              eId: WT,
              yT: kT
            }), zT) {
            const TT = (0, IT.f)(UT, zT.xT);
            vT.j.EZ("yourAttackHit", {
              PU: gT,
              screenPos: TT,
              hitSelf: WT === UT.VV
            })
          }
          WT === UT.VV && (mT.shakePlayerCamera(WT, nT / 40, 200), vT.j.EZ("closeShopOnDamaged", null), vT.j.EZ("damagedByOtherPlayer", {
            Bm: null,
            direction: HT,
            tT: nT
          }, !0));
          const lT = UT.pY.Aq(WT);
          if (lT && (MT || gT)) {
            const TT = [lT[0], lT[1] + 1, lT[2]];
            MT && (0, XT.i)(UT, XT.x, TT, 15), gT && (0, XT.i)(UT, XT.p, TT, 10)
          }
        })), TT.LO(kT.zc, (TT => {
          let {
            OU: mT,
            eU: WT,
            YU: zT
          } = TT;
          (0, tT.d)(UT).setHealthFrac((0, aT.e)(mT), zT), vT.j.EZ("lifeformHealthChanged", {
            eId: (0, aT.e)(mT),
            eU: WT,
            YU: zT
          })
        })), TT.LO(kT.S, (TT => {
          let {
            pM: mT,
            BM: WT
          } = TT;
          (0, HT.d)().playerAttacked(UT.VV, mT, WT)
        })), TT.LO(kT.pb, (() => {
          const TT = UT.pY.RUT(UT.VV);
          null !== TT && void 0 !== TT && TT.isChargeable() && TT.finishCharging(!1, Date.now())
        })), TT.LO(kT.Lb, (TT => {
          let {
            XT: UT,
            IT: mT,
            QT: WT,
            VU: zT,
            uU: MT,
            CU: gT
          } = TT;
          UT = (0, aT.e)(UT), (0, HT.d)().client.updateEffect(UT, mT, {
            displayName: WT,
            icon: zT,
            duration: MT,
            level: gT
          })
        })), TT.LO(kT.Cd, (TT => {
          let {
            XT: UT,
            IT: mT
          } = TT;
          UT = (0, aT.e)(UT), (0, HT.d)().client.removeEffect(UT, mT)
        })), TT.LO(kT.Ye, (TT => {
          vT.j.EZ("ttbEffectMultiplier", TT)
        }))
      }
    }
    var sT = mT(39122),
      FT = mT(37253),
      PT = mT(4311),
      VT = mT(38231),
      uT = mT(36851),
      CT = mT(36855),
      rT = mT(37166),
      KT = mT(37337),
      ST = mT(38237),
      GT = mT(39129);
    class NT {
      constructor(TT, UT) {
        this.Rl = TT, this.setUpQueuedEntity = UT
      }
      register(TT) {
        const UT = this.Rl,
          mT = (0, HT.d)();
        TT.LO(kT.Lc, (TT => {
          let {
            eId: mT,
            settings: WT
          } = TT;
          (0, KT.h)(mT);
          for (const UT in WT)(0, KT.d)(mT, UT, WT[UT]);
          if ("canSee" in WT && UT.pY.uTT(mT, "hidingMeshManager")) {
            const TT = UT.pY.getState(mT, "hidingMeshManager");
            TT.canSee = (0, ST.b)("canSee", WT.canSee), TT._forceUpdate = !0
          }
        })), TT.LO(kT.J, (TT => {
          let {
            FW: mT,
            PW: WT,
            animationScript: zT,
            VW: MT,
            uW: gT,
            rW: nT,
            KW: kT
          } = TT;
          mT = (0, aT.e)(mT);
          const jT = null === zT && null !== nT ? (0, sT.g)(nT, kT) : zT;
          (0, HT.d)().client.gameRecorder.recordAnimateEntity(mT, WT, jT, MT, gT), (0, tT.d)(UT).animations.animateEntity(mT, WT, zT, MT, gT, nT, kT), null !== zT || mT === UT.VV && WT === FT.g.Emote && (0, HT.d)().client.cameraController.endTemporaryThirdPerson()
        })), TT.LO(kT.he, (TT => {
          (0, GT.e)(TT)
        })), TT.LO(kT.ld, (TT => {
          for (const UT of TT)(0, VT.A)(UT);
          vT.j.EZ("playerCosmeticsUpdated", TT, !0)
        })), TT.LO(kT.O, (TT => {
          for (const mT of TT)(0, rT.e)(UT, mT)
        })), TT.LO(kT.Mc, (TT => {
          (0, XT.m)(UT, (0, lT.t)(TT))
        })), TT.LO(kT.Qc, (TT => {
          PT.c[TT.iM] ? (0, XT.m)(UT, {
            ...PT.c[TT.iM],
            pos1: TT.pos1,
            pos2: TT.pos2
          }) : console.error(`Unknown preset id: ${TT.iM}`)
        })), TT.LO(kT.jd, (TT => {
          var UT, mT;
          let {
            TT: WT,
            UT: zT,
            mT: MT,
            WT: gT
          } = TT, {
            MT: nT,
            gT: kT
          } = null !== gT && void 0 !== gT ? gT : {};
          const {
            zT: jT
          } = null !== gT && void 0 !== gT ? gT : {};
          nT = null !== (UT = nT) && void 0 !== UT ? UT : void 0, kT = null !== (mT = kT) && void 0 !== mT ? mT : void 0, "string" === typeof jT && this.setUpQueuedEntity(jT), (0, HT.d)().client.gameRecorder.recordPlaySound(WT, zT, MT, gT), uT.c.play((0, CT.d)(WT), zT, jT, nT, kT).rate(MT)
        })), TT.LO(kT.ef, (TT => {
          for (const UT in TT) {
            const WT = TT[UT];
            for (const TT in WT) mT.client.meshCreator.handleParticleSystemUpdate(UT, TT, WT[TT])
          }
        }))
      }
    }
    var ET = mT(37911),
      hT = mT(37882);
    class DT {
      constructor(TT) {
        this.Rl = TT
      }
      register(TT) {
        const UT = this.Rl,
          mT = (0, HT.d)();

        function WT() {
          return UT.pY.aUT(UT.VV)
        }
        TT.LO(kT.jc, (TT => {
          let {
            bz: mT,
            Oz: WT,
            ez: zT,
            Yz: MT,
            Jz: gT,
            xz: nT,
            dz: HT,
            wz: kT,
            tz: jT
          } = TT;
          if (!UT.pY.uTT(mT, "itemState")) return void(0, ET.j)(UT, mT, [gT, nT, HT], WT, {
            amount: zT,
            attributes: JSON.parse(MT),
            wz: kT,
            size: jT
          });
          const lT = UT.pY.getState(mT, "itemState");
          lT.amount = zT, lT.wz = kT, lT.creationTime = Date.now(), (0, hT.setServerPosition)(UT.pY.getState(mT, "smoothToServerPos"), gT, nT, HT)
        })), TT.LO(kT.kb, (TT => {
          (0, tT.d)(UT).setCantPickUp(TT, !0), UT.pY.uTT(TT, "itemState") && (UT.pY.getState(TT, "itemState").wz = !0)
        })), TT.LO(kT.Od, (TT => {
          (0, tT.d)(UT).setCantPickUp(TT, !1), UT.pY.uTT(TT, "itemState") && (UT.pY.getState(TT, "itemState").wz = !1)
        })), TT.LO(kT.cd, (TT => {
          let {
            pickUpItems: UT,
            pickUpAckSeq: mT
          } = TT;
          for (const {
              name: zT,
              amount: MT,
              attributes: gT
            }
            of UT) WT().pickUpItem({
            name: zT,
            amount: MT,
            typeObj: ET.y[zT],
            attributes: gT
          });
          (0, HT.d)().client.inventoryPrediction.serverChangeApplied(mT)
        })), TT.LO(kT.ze, (TT => {
          let {
            index: mT,
            name: WT,
            amount: zT,
            attributes: MT,
            setSlotAckSeq: gT
          } = TT;
          const nT = UT.pY.yUT(UT.VV);
          (mT < nT.playerInventory.numSlots || nT.OM || nT.inCreative) && nT.setItemSlot(mT, WT, zT, MT), (0, HT.d)().client.inventoryPrediction.serverChangeApplied(gT)
        })), TT.LO(kT.hc, (TT => {
          (0, HT.d)().client.inventoryPrediction.acknowledge(TT)
        })), TT.LO(kT.H, (TT => {
          let {
            Pm: UT,
            Vm: mT,
            um: WT,
            Cm: zT
          } = TT;
          (0, HT.d)().client.itemDropPrediction.onActionItemDrops(UT, mT, WT, zT)
        })), TT.LO(kT.ub, (TT => {
          WT().clearInventory(), (0, HT.d)().client.inventoryPrediction.serverChangeApplied(TT)
        })), TT.LO(kT.Be, (TT => {
          vT.j.EZ("setSelectedInventorySlotI", TT, !0)
        })), TT.LO(kT.rb, (TT => {
          let {
            Vz: mT,
            Cz: WT,
            rz: zT,
            Kz: MT,
            Sz: gT,
            Gz: nT,
            Nz: kT,
            Ez: jT
          } = TT;
          const lT = UT.pY.yUT(UT.VV);
          if (nT) {
            const {
              Dz: TT,
              Az: UT
            } = jT;
            return (0, HT.d)().client.inventoryPrediction.W9(UT, (() => {
              lT.chestRefreshed(WT, zT, MT, kT, TT)
            })) && vT.j.EZ("chestToggleFromServer", !1, !0), void vT.j.EZ("chestRefreshedFromServer")
          }(mT || lT.OM) && (mT ? (lT.chestOpened(WT, zT, MT, gT, kT), null !== gT && (0, HT.d)().client.ironChestPasskeyCache.onChestOpened(MT, gT)) : lT.chestClosed(), vT.j.EZ("chestToggleFromServer", mT, !0))
        })), TT.LO(kT.Ib, (TT => {
          let {
            craftingRecipeItemName: WT,
            recipesForItem: zT
          } = TT;
          WT ? mT.craftingManager.editRecipesForPlayer(UT.VV, WT, zT) : mT.craftingManager.resetAllPlayerRecipes(UT.VV), vT.j.EZ("craftingRecipesEdited", {
            itemName: WT,
            recipesForItem: zT
          })
        })), TT.LO(kT.Hd, (TT => {
          let {
            Qm: UT,
            sm: mT,
            Fm: zT
          } = TT;
          WT().removeItemName(UT, mT), (0, HT.d)().client.inventoryPrediction.serverChangeApplied(zT)
        })), TT.LO(kT.Ed, (TT => {
          let {
            az: WT
          } = TT;
          mT.craftingManager.removeRecipes(UT.VV, WT), vT.j.EZ("craftingRecipesEdited", {
            itemName: WT,
            recipesForItem: []
          })
        }))
      }
    }
    var oT = mT(6542),
      AT = mT(37521),
      RT = mT(375),
      TU = mT.n(RT),
      UU = mT(4629),
      mU = mT(37813),
      WU = mT(38396),
      zU = mT(37517);
    class MU {
      constructor(TT, UT) {
        this.Rl = TT, this.setUpQueuedEntity = UT
      }
      register(TT) {
        const UT = this.Rl,
          mT = (0, HT.d)();
        TT.LO(kT.Re, (TT => {
          let {
            JU: mT,
            xU: zT,
            dU: MT,
            wU: gT
          } = TT;
          const nT = [zT, MT, gT];
          UT.pY.setPosition(UT.VV, nT), (0, WT.sendColyMessage)(kT.Ag, {
            UH: mT,
            mH: UU.h
          }), vT.j.EZ("localPlayerTeleported", {
            pos: nT,
            isCorrection: !1
          })
        })), TT.LO(kT.Yc, (TT => {
          let {
            IM: UT,
            QM: mT,
            sM: WT,
            FM: zT
          } = TT;
          this.setUpQueuedEntity(UT);
          const MT = [mT, WT, zT];
          vT.j.EZ(`otherPlayerTeleported|${UT}`, {
            pos: MT
          })
        })), TT.LO(kT.qd, (TT => {
          let {
            Mz: mT,
            gz: zT,
            nz: MT,
            kz: gT,
            jz: nT,
            lz: HT,
            Lz: jT,
            Bz: lT,
            pz: LT,
            fz: pT
          } = TT;
          const BT = [zT, MT, gT];
          UT.pY.setPosition(UT.VV, BT);
          const ZT = UT.pY.gUT(UT.VV),
            cT = UT.pY.rK(UT.VV);
          TU().set(cT.Vr, 0, 0, 0), TU().set(cT.Kr, 0, 0, 0), TU().set(cT.Tc, nT, HT, jT), cT.WK(), ZT._flying = null !== pT, pT ? (ZT.flyAccel.qz = pT.qz, ZT.flyAccel.iz = pT.iz) : ZT.flyAccel.reset(), lT && ZT.movementType === oT.p.GLIDING && (ZT.Zz = lT.Zz, TU().copy(ZT.vz, lT.vz)), (0, WT.sendColyMessage)(kT.Ag, {
            UH: mT,
            mH: UU.h
          }), vT.j.EZ("localPlayerTeleported", {
            pos: BT,
            isCorrection: !0
          })
        })), TT.LO(kT.De, (TT => {
          let {
            vehicleEId: UT,
            overrides: mT
          } = TT;
          (0, HT.d)().applyRiddenVehicleSettingOverrides(UT, mT)
        })), TT.LO(kT.if, (TT => {
          let {
            dm: mT,
            wm: WT,
            am: zT
          } = TT;
          const MT = UT.pY.gUT(UT.VV).physicsState.type === oT.q.SLEEPING && mT === oT.q.DEFAULT;
          (0, HT.d)().updatePositionAndPhysics(UT.VV, {
            type: mT,
            tier: WT
          }, !0, zT), MT && (0, HT.d)().updateHeldVehicleStatus()
        })), TT.LO(kT.mb, (TT => {
          let {
            iU: mT,
            bU: WT
          } = TT;
          UT.pY.wUT(UT.VV).setPose(mT, WT)
        })), TT.LO(kT.pe, (TT => {
          const {
            pp: mT,
            kmT: WT
          } = (0, AT.c)([TT[0], TT[1], TT[2]]);
          zU.d.setLookDirection(UT, mT, WT), (0, mU.v)(mT, WT);
          const zT = UT.pY.wUT(UT.VV);
          zT && (zT.heading = mT)
        })), TT.LO(kT.re, (TT => {
          mT.client.cameraController.setCameraZoom(TT)
        })), TT.LO(kT.Ge, (TT => {
          let {
            fm: WT,
            qm: zT
          } = TT;
          mT.shakePlayerCamera(UT.VV, WT, zT)
        })), TT.LO(kT.qc, (TT => {
          UT.pY.wUT(UT.VV).jumpMultiplier.setMultiplierType("jumpEffectAmount", TT)
        })), (0, WT.onGameResetOnce)((() => {
          UT.pY.wUT(UT.VV).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), TT.LO(kT.N, (TT => {
          UT.pY.rK(UT.VV).applyImpulse(TT)
        })), TT.LO(kT.Ee, (TT => {
          const mT = UT.pY.rK(UT.VV);
          TU().set(mT.Vr, 0, 0, 0), TU().set(mT.Kr, 0, 0, 0), TU().copy(mT.Tc, TT), mT.WK()
        })), (0, WT.onGameResetOnce)((() => {
          (0, WU.setFloatingYValue)(UT.pY.getState(UT.VV, "physics"), UT.pY.FN(UT.VV), null)
        })), TT.LO(kT.Ob, (TT => {
          let {
            ym: mT,
            Xm: WT,
            Im: zT
          } = TT;
          const MT = (0, aT.e)(mT);
          if (MT === UT.VV) {
            const TT = UT.pY.FN(UT.VV).position;
            zT ??= Math.floor(TT[1]) - 1, (0, WU.setFloatingYValue)(UT.pY.getState(UT.VV, "physics"), UT.pY.FN(UT.VV), WT ? zT : null)
          }(0, tT.d)(UT).setFloating(MT, WT, zT);
          const gT = UT.pY.getState(MT, "floating");
          gT && (gT.isFloating = WT, gT.Im = WT ? zT : null)
        }))
      }
    }

    function gU(TT, UT, mT, WT, zT) {
      let MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!TT.pY.tUT(TT.VV)) return console.log("Got resync inven but don't have inven component"), void UT.acknowledge(WT);
      MT && console.error("Had to sync inven"), UT.W9(WT, zT) && mT.EZ("chestToggleFromServer", !1, !0), mT.EZ("syncedInvenFromServer")
    }
    var nU = mT(39146),
      HU = mT(39150),
      kU = mT(2076);
    var jU = mT(4610);

    function lU(TT) {
      const UT = TT.Nl;
      let mT = 0,
        zT = -1,
        gT = -1 / 0,
        nT = null,
        HT = !0;
      const jT = () => {
        if (++mT % 10 !== 0) return;
        const jT = (0, WT.getLastReceivedPacketId)();
        if (jT <= zT) return;
        const [lT, LT, pT] = TT.pY.Aq(TT.VV), BT = ! function(TT) {
          var UT;
          let mT = null === (UT = TT.pY.LmT(TT.VV)) || void 0 === UT ? void 0 : UT.UB;
          if (void 0 === mT) return !1;
          const WT = new Set;
          for (; void 0 !== mT && !WT.has(mT);) {
            var zT;
            WT.add(mT);
            const UT = TT.pY.getState(mT, "smoothToServerPos"),
              MT = Array.isArray(UT) ? null : null === UT || void 0 === UT ? void 0 : UT.serverPosition;
            if (MT) {
              const UT = TT.pY.Aq(mT);
              if (Math.abs(UT[0] - MT[0]) > 10 || Math.abs(UT[1] - MT[1]) > 10 || Math.abs(UT[2] - MT[2]) > 10) return !0
            }
            mT = null === (zT = TT.pY.LmT(mT)) || void 0 === zT ? void 0 : zT.UB
          }
          return !1
        }(TT) && function(TT, UT, mT, WT) {
          const zT = MT.f.cB;
          for (let MT = 0; MT < TT.length; MT++) {
            const gT = TT[MT];
            if (!(0, jU.m)(UT, mT, WT, gT[0] * zT, gT[1] * zT, gT[2] * zT)) return !1
          }
          return !0
        }(UT.KZ.jB, lT, LT, pT), ZT = null === nT || Math.abs(lT - nT[0]) > 8 || Math.abs(LT - nT[1]) > 8 || Math.abs(pT - nT[2]) > 8, cT = !HT || ZT || performance.now() - gT >= 1e4;
        HT = BT, BT && cT && (zT = jT, gT = performance.now(), nT = [lT, LT, pT], (0, WT.sendColyMessage)(kT.gg, {
          zn: jT
        }))
      };
      return TT.on("Cl", jT), () => {
        TT.off("Cl", jT)
      }
    }
    var LU = mT(39154),
      pU = mT(1633),
      BU = mT(2870),
      ZU = mT(1932),
      cU = mT(3047),
      vU = mT(4879);
    class fU {
      constructor(TT, UT, mT) {
        this.Rl = TT, this.gameNameWithVariation = UT, this.connectionResume = mT, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        vU.b.reset(), (0, nU.b)()
      }
      startChunkReports() {
        const TT = function(TT) {
            let UT = null,
              mT = -1 / 0,
              zT = null;
            const MT = () => {
                zT = null;
                const MT = Math.ceil(TT.HI[0]),
                  gT = Math.ceil(TT.HI[1]);
                UT && UT[0] === MT && UT[1] === gT || (UT = [MT, gT], mT = performance.now(), (0, WT.sendColyMessage)(kT.eg, {
                  Vg: MT,
                  ug: gT
                }))
              },
              gT = () => {
                null === zT && (zT = setTimeout(MT, Math.max(0, mT + 250 - performance.now())))
              };
            return MT(), TT.on("addRemoveDistanceChanged", gT), () => {
              TT.off("addRemoveDistanceChanged", gT), null !== zT && (clearTimeout(zT), zT = null)
            }
          }(this.Rl.Nl),
          UT = lU(this.Rl);
        this.stopChunkReports = () => {
          TT(), UT()
        }
      }
      restartChunkStreaming() {
        (0, mU.j)(this.Rl, (0, HT.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - LU.d)), this.startChunkReports()
      }
      register(TT) {
        const UT = this.Rl,
          mT = (0, HT.d)();
        TT.LO(kT.Hc, (TT => {
          fT.d.applyNewClientOptions(TT)
        })), TT.LO(kT.fd, (TT => {
          BU.c.onReceiveColyseusPing(TT)
        })), TT.LO(kT.se, (TT => {
          let {
            key: UT,
            value: mT
          } = TT;
          (0, qT.setCookie)(this.gameNameWithVariation, UT, mT)
        })), TT.LO(kT.ve, (TT => {
          vT.j.EZ("setDiscordReportKey", TT)
        })), (0, WT.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), TT.LO(kT.cc, (zT => {
          const {
            kT: MT,
            jT: gT
          } = zT;
          if ((0, WT.setAdjustment)(gT), this.connectionResume.onInitialInfo(zT.lT, zT.LT), WT.offlineInputReplay.Qy(zT.pT), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", MT);
            try {
              null === zT.BT && (0, HT.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), dT(UT.Nl), fT.d.apply({
                shopInfo: null,
                _shopVersion: kU.c
              });
              const mT = UT.pY.yUT(UT.VV);
              mT.OM && (mT.chestClosed(), vT.j.EZ("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), vT.j.EZ("initInfoReceived", TT)
            } finally {
              const TT = null === zT.BT ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = TT, this.connectionResume.onResumeInitialInfo(zT.BT, (() => {
                TT.endSeq = (0, HT.d)().client.inventoryPrediction.lastActionSeq
              })), null === TT && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", MT), ZU.c.markAdmitted(), (0, mU.k)(UT), vT.j.EZ("loadingScreenState", "loadingPage:loadingWorld"), UT.rTT = MT, UT.pY.uTT(UT.VV, UT.pY.names.entityName) && UT.pY.JV(UT.VV, UT.pY.names.entityName), (0, HT.d)().setEntityName(UT.rTT, (0, HT.d)().getRawEntityName(UT.VV)), UT.sV[UT.rTT] = {}, UT.pY.YV(UT.VV, UT.pY.names.entityName), vT.j.EZ("initInfoReceived", TT), this.startChunkReports(), mT.client.onServerConnectionFinalised()
        })), TT.LO(kT.ee, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const TT = this.replayResume;
            if (this.replayResume = null, !TT) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: mT
            } = (0, HT.d)().client, {
              sync: zT
            } = TT, MT = new Set(WT.offlineInputReplay.takeDroppedActions());
            if (zT) {
              var gT;
              const WT = null !== (gT = TT.endSeq) && void 0 !== gT ? gT : mT.lastActionSeq;
              mT.forget((TT => TT > zT.Az && TT <= WT || MT.has(TT))), gU(UT, mT, vT.j, zT.Az, zT.load)
            } else mT.dropPending(), mT.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), TT.LO(kT.Ne, (TT => {
          let {
            bM: mT,
            xM: WT,
            Az: zT
          } = TT;
          const {
            inventoryPrediction: MT
          } = (0, HT.d)().client, gT = () => {
            UT.pY.yUT(UT.VV).loadFromString(mT)
          };
          this.replayResume && (this.replayResume.sync = {
            Az: zT,
            load: gT
          }), gU(UT, MT, vT.j, zT, gT, WT)
        })), TT.LO(kT.vd, (TT => {
          let {
            type: UT,
            location1: mT,
            location2: WT,
            location3: zT,
            score: MT
          } = TT;
          (0, cU.logProgressionEvent)({
            type: UT,
            location1: mT,
            location2: WT,
            location3: zT,
            score: MT
          })
        })), TT.LO(kT.de, (TT => {
          let {
            type: UT,
            resourceType: mT,
            amount: WT,
            category: zT,
            itemName: MT
          } = TT;
          (0, cU.logResourceEvent)({
            type: UT,
            resourceType: mT,
            amount: WT,
            category: zT,
            itemName: MT
          })
        })), TT.LO(kT.vc, (TT => {
          let {
            leaveEventType: UT,
            category: mT,
            subCategory: WT,
            value: zT
          } = TT;
          (0, cU.updateLeaveValue)({
            leaveEventType: UT,
            category: mT,
            subCategory: WT,
            value: zT
          })
        })), TT.LO(kT.Gb, (TT => {
          let {
            cat1: UT,
            cat2: mT,
            cat3: WT,
            value: zT
          } = TT;
          (0, cU.logCustomAnalyticsEvent)({
            cat1: UT,
            cat2: mT,
            cat3: WT,
            value: zT
          })
        })), TT.LO(kT.tc, (TT => {
          (0, HT.d)().client.leaveGameUnwanted({
            reason: TT,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, pU.navigatePreserveSearch)("/")
        })), TT.LO(kT.ne, (TT => {
          vT.j.EZ("serverUpdating", Date.now() + TT, !0)
        })), TT.LO(kT.Gc, HU.c), TT.LO(kT.Cc, (TT => {
          console.error(`[logErrorToConsole]: ${TT}`)
        }))
      }
    }
    var qU = mT(39159),
      iU = mT(39172),
      bU = mT(1089),
      OU = mT(39167),
      eU = mT(2545),
      YU = mT(3755);
    class JU {
      constructor(TT, UT) {
        this.Rl = TT, this.clientApi = UT
      }
      register(TT) {
        const UT = this.Rl,
          mT = (0, HT.d)();
        TT.LO(kT.qb, (TT => {
          let {
            chatMsgId: UT,
            content: mT,
            chatterEId: WT
          } = TT;
          vT.j.EZ("chat", {
            serverChatMsgId: UT,
            content: mT,
            chatterEId: WT
          }, !0)
        })), TT.LO(kT.Ue, (TT => {
          vT.j.EZ("TopRightHelper", TT, !0)
        })), TT.LO(kT.Qe, (TT => {
          (0, qU.b)(TT)
        })), TT.LO(kT.uc, (TT => {
          let {
            category: UT,
            timeframe: mT,
            data: WT
          } = TT;
          vT.j.EZ("leaderboardResponse", {
            category: UT,
            timeframe: mT,
            data: WT
          })
        })), TT.LO(kT.Ke, (() => {
          vT.j.EZ("showShopTutorial", null, !0)
        })), TT.LO(kT.td, (TT => {
          vT.j.EZ("progressBarUpdate", TT, !0)
        })), TT.LO(kT.dc, (TT => {
          vT.j.EZ("middleScreenBarInitiate", {
            duration: TT.yz,
            Xz: TT.Xz,
            horizBarRemOffset: TT.Iz
          }, !0)
        })), TT.LO(kT.Jd, (() => {
          vT.j.EZ("middleScreenBarRemove", !0)
        })), TT.LO(kT.te, (TT => {
          let {
            id: UT,
            position: mT,
            style: WT,
            tU: zT,
            yU: MT
          } = TT;
          vT.j.EZ("setDirectionArrow", {
            id: UT,
            position: mT,
            style: WT,
            text: (0, kT.x)(zT),
            yU: MT
          }, !0)
        })), TT.LO(kT.tb, (TT => {
          let {
            id: UT
          } = TT;
          vT.j.EZ("clearDirectionArrow", {
            id: UT
          }, !0)
        })), TT.LO(kT.Cb, (TT => {
          (0, YU.onCosmeticPackGranted)(TT)
        })), TT.LO(kT.Uc, (TT => {
          let {
            id: UT,
            ST: mT
          } = TT;
          const {
            type: zT,
            params: MT
          } = (0, iU.g)(mT), gT = {
            ...MT
          };
          for (const WT of iU.c) WT in gT && gT[WT] && (gT[WT] = (0, kT.x)(gT[WT]));
          vU.b.queueQTE(UT, zT, gT).getResult().then((TT => {
            "boolean" === typeof TT && (0, WT.sendColyMessage)(kT.Uh, {
              qteId: UT,
              qteResponse: TT
            })
          }))
        })), TT.LO(kT.Kd, (TT => {
          vU.b.cancelQTE(TT)
        })), (0, WT.onGameResetOnce)((() => {
          vU.b.reset()
        })), TT.LO(kT.Vc, (TT => {
          let {
            id: UT,
            clientParameters: mT
          } = TT;
          (0, nU.c)(UT, mT)
        })), TT.LO(kT.Nd, (TT => {
          (0, nU.g)(TT)
        })), TT.LO(kT.Ze, (TT => {
          let {
            text: UT,
            id: mT,
            destructive: zT
          } = TT;
          (0, nU.j)(mT, UT, zT, (TT => {
            (0, WT.sendColyMessage)(kT.jj, {
              HH: mT,
              kH: TT,
              jH: 5
            })
          }))
        })), TT.LO(kT._c, (TT => {
          let {
            info: UT
          } = TT;
          vT.j.EZ("overShopInfo", UT, !0)
        })), TT.LO(kT.Tb, (TT => {
          let {
            nT: mT,
            HT: WT
          } = TT;
          this.clientApi.openShop(UT.VV, mT, WT)
        })), TT.LO(kT.Sb, (TT => {
          let {
            aM: UT,
            yM: mT,
            XM: WT
          } = TT;
          vT.j.EZ("flyingMiddleMessage", {
            content: (0, kT.x)(UT),
            yM: mT,
            XM: WT
          }, !0)
        })), TT.LO(kT.of, (TT => {
          const UT = TT === bU.f ? null : {
            message: `Currently loaded as variation: ${TT}`,
            type: "Warning"
          };
          vT.j.EZ("showPermanentBottomMessage", UT, !0)
        })), TT.LO(kT.Ub, (TT => {
          let {
            messageType: UT,
            data: WT
          } = TT;
          (0, OU.i)(UT) ? (0, OU.e)(UT, WT) : ("freeCamPerms" === UT && mT.client.freeCameraController.setPerms(WT.key, WT.value), mT.client.triggerGameCallback("onReceivedMessageFromServer", UT, WT))
        })), TT.LO(kT.yb, eU.j)
      }
    }
    class xU {
      constructor(TT, UT, mT, WT) {
        this.gameNameWithVariation = TT, this.Rl = mT, this.connectionResume = WT, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new bT.b(UT, this.Rl)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, WT.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      SkT(TT) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new bT.b(TT, this.Rl), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(TT, UT) {
        const mT = this.Rl,
          WT = TT => {
            this.stateReplicationHandler.setUpIfQueued(TT)
          };
        new fU(mT, this.gameNameWithVariation, this.connectionResume).register(TT), new wT(mT).register(TT), new DT(mT).register(TT), new QT(mT, WT).register(TT), new NT(mT, WT).register(TT), new JU(mT, UT).register(TT), new MU(mT, WT).register(TT)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var dU = mT(39180),
      wU = mT(39189),
      tU = mT(696),
      aU = mT(3068);
    class yU {
      constructor(TT, UT, mT, WT) {
        this.msgHandler = mT, this.listener = WT, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new dU.e({
          reconnect: TT,
          isLive: () => WT.isLive(),
          onReconnected: TT => {
            this.resumeOnRoom(TT)
          },
          onGaveUp: (TT, UT) => {
            WT.onGaveUp(TT, UT)
          },
          freeze: UT,
          releaseSeat: UT => {
            TT(UT).then((TT => {
              TT.leave(!0)
            }), (TT => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", TT)
            }))
          }
        })
      }
      onInitialInfo(TT, UT) {
        this.session.onInitialInfo(TT, UT)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(TT, UT) {
        if (this.session.onResuming(), null === TT) {
          try {
            (0, HT.d)().client.itemDropPrediction.reset()
          } catch (mT) {
            console.error("Error dropping the item drop predictions on resuming", mT)
          }
          return WT.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, HT.d)().client.itemDropPrediction.onResumeReplayOffered(), WT.offlineInputReplay.replayFrom(TT.cT, UT)
      }
      onResumed(TT) {
        this.setSuspended(!1), (0, WT.resendBeacons)();
        try {
          TT()
        } catch (UT) {
          console.error("Error completing the resume", UT)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(TT) {
        const UT = (0, tU.f)((() => TT.connection.isOpen));
        TT.TY(UT);
        const mT = new wU.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(TT, "silent"), TT.leave(!1))
        }));
        TT.onStateChange((() => {
          mT.heard()
        }));
        const WT = UT => {
          UT.persisted || TT.leave(!0)
        };
        window.addEventListener("pagehide", WT), TT.TY(((UT, mT) => {
          if (TT === this.attachedRoom && this.listener.isLive()) return (0, MT.i)(UT) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${UT}, reconnecting`), this.listener.onDropped(UT, mT), void this.onConnectionDropped(TT, String(UT))) : void this.listener.onRoomLeft(UT, mT)
        })), this.attachedRoom = TT, this.detachRoomListeners = () => {
          UT(), mT.dispose(), window.removeEventListener("pagehide", WT)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(TT) {
        TT !== this.suspended && (this.suspended = TT, (0, WT.setConnectionSuspended)(TT), (0, HT.d)().client.itemDropPrediction.setSuspended(TT))
      }
      detachRoom() {
        var TT;
        null === (TT = this.detachRoomListeners) || void 0 === TT || TT.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(TT, UT) {
        (0, aU.reportClientError)("disconnect", "Left room", UT), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), WT.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(TT.reconnectionToken)
      }
      resumeOnRoom(TT) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), TT.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, GT.p)(), WT.offlineInputReplay.onConnectionReplaced(), this.msgHandler.SkT(TT), this.listener.onReconnected(TT), this.attachRoom(TT)
      }
    }
    var XU = mT(3116),
      IU = mT(3119),
      QU = mT(1429),
      sU = mT(1398),
      FU = mT(4768),
      PU = mT(3289),
      VU = mT(1153),
      uU = mT(37845),
      CU = mT(39198),
      rU = mT(9025),
      KU = mT(39204),
      SU = mT(1308),
      GU = mT(36565),
      NU = mT(39207),
      EU = mT(1843),
      hU = mT(2877);

    function DU(TT) {
      var UT, mT;
      if ("object" !== typeof TT || null === TT) return {
        errType: typeof TT
      };
      const WT = TT;
      return {
        errType: null !== (UT = null === (mT = TT.constructor) || void 0 === mT ? void 0 : mT.name) && void 0 !== UT ? UT : "",
        errName: "string" === typeof WT.name ? WT.name : "",
        eventType: "string" === typeof WT.type ? WT.type : "",
        errStack: "string" === typeof WT.stack ? WT.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function oU(TT) {
      if ("undefined" !== typeof ProgressEvent && TT instanceof ProgressEvent) return !0;
      if (!(TT instanceof Error)) return !1;
      const UT = TT.code;
      return "ServerError" === TT.name && void 0 === UT || "AbortError" === TT.name || "seat reservation expired." === TT.message || "early_leave" === TT.message
    }(0, ZT.j)((TT => {
      (0, aU.reportClientError)("wasm_net", TT)
    }));
    let AU = !0;

    function RU() {
      AU = !1
    }
    class Tm {
      constructor(TT) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.Rl = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = TT.gameNameWithVariation, this.lobbyName = TT.lobbyName, this.colyClient = TT.colyClient, this.userContext = TT.userContext
      }
      async connectToServer(TT, UT, mT) {
        fT.d.reset(), TT.sV = {
          [TT.VV]: {}
        }, TT.rTT = void 0, (0, GT.p)(), (0, HT.d)().removeAllEntityNames(), (0, HT.d)().setEntityName(TT.VV, this.userContext.getPlayerName()), (0, QU.m)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, EU.h)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const gT = performance.now();
        mT.aborted || (0, sU.i)("wasm_core_ready", gT);
        const nT = (0, KU.e)(this.userContext, (() => {
          const {
            roomName: WT,
            joinOptions: zT
          } = (0, iT.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, UT, (TT => PU.e.isUsingCustomGameTexturePack(TT)));
          return zT.joinAdHold = this.joinAdHold, zT.renderBackend = (0, hU.b)(TT.GB), (0, CU.g)((() => this.colyClient.joinOrCreateUntil(mT, WT, zT)), mT)
        }));
        return vT.j.EZ("loadingScreenState", "loadingPage:joiningLobby"), await nT.then((UT => {
          if (this.joinedAt = performance.now(), (0, sU.i)("wasm_joined", this.joinedAt), this.Rl = TT, this.joinAdHold) {
            const TT = (0, EU.o)((() => {
              UT.send(zT.e), (0, sU.f)(), ZU.c.markJoinAdEnded()
            }));
            UT.TY(TT), (0, WT.onGameResetOnce)(TT)
          }
          const mT = new cT(UT);
          this.connectionResume = new yU((TT => this.colyClient.reconnect(TT)), (UT => {
            TT.MI(UT)
          }), mT, {
            isLive: () => (0, HT.d)().client.getMsgHandler() === mT,
            onDropped: (TT, UT) => {
              (0, IU.g)(TT) || this.logUnrecognisedConnectionLoss(TT, void 0, {
                site: "drop",
                closeReason: null !== UT && void 0 !== UT ? UT : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (TT, UT) => {
              this.onRoomLeft(TT, UT)
            },
            onReconnected: TT => {
              this.incomingMsgInitialisor.SkT(TT), this.checkSendPath = (0, uU.f)(mT, TT, ZT.k)
            },
            onGaveUp: (TT, UT) => {
              this.onResumeGaveUp(TT, UT)
            }
          }), this.connectionResume.attachRoom(UT), (0, WT.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const MT = mT.send,
            gT = mT.LO,
            nT = mT.XmT.send,
            kT = mT.XmT.LO,
            jT = mT.rkT;
          this.checkSendPath = (0, uU.f)(mT, UT, ZT.k);
          const lT = setInterval((() => {
            MT === mT.send && gT === mT.LO && nT === mT.XmT.send && kT === mT.XmT.LO && jT === mT.rkT || RU(), this.checkSendPath()
          }), 1e4);
          return (0, WT.onGameResetOnce)((() => {
            clearInterval(lT)
          })), {
            success: !0,
            successDetails: mT
          }
        })).catch((UT => {
          if (mT.aborted && UT === (0, SU.i)(mT)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (UT instanceof GU.d) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: UT.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, NU.b)(UT, UT.leg)
            }
          };
          TT.ZZ(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${UT.code}\n`, UT);
          const WT = UT.code;
          return WT === MT.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: MT.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(WT, UT.message, {
                site: "join",
                sinceJoinStart: (0, IU.b)(performance.now() - gT),
                ...DU(UT)
              }, oU(UT)),
              rematch: (0, CU.d)(UT),
              gameRefused: (0, rU.b)(UT),
              joinFailure: (0, NU.b)(UT, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(TT, UT, mT) {
        vT.j.EZ("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new xU(this.gameNameWithVariation, UT.XmT, TT, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const zT = UT.hkT();
        this.incomingMsgInitialisor.setupOnMessageListeners(zT, mT), (0, WT.onConnectionToServerReady)(zT, UT), this.joinAdHold && ZU.c.markAdmissionAwaited(), zT.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(TT, UT) {
        (0, VU.cZ)(new Error("Reconnect failed"), {
          ...(0, XU.k)(UT),
          game: this.gameNameWithVariation
        }), (0, aU.reportClientError)("disconnect", "Reconnect failed", UT.reason), (0, HT.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !TT,
          canPlayAgain: TT,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, pU.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, IU.b)(performance.now() - this.joinedAt)
      }
      onRoomLeft(TT, UT) {
        var mT;
        if (TT === MT.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${TT}`), TT === MT.e.serverUpdating.code) return (0, aU.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, HT.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Rl.ZZ(`Kicked from server with code ${TT}`, new Error);
        const WT = Object.keys(MT.e).find((UT => MT.e[UT].code === TT));
        (0, aU.reportClientError)("disconnect", "Left room", null !== WT && void 0 !== WT ? WT : String(TT));
        const zT = this.onConnectionToServerLost(TT, void 0, {
          site: "leave",
          closeReason: null !== UT && void 0 !== UT ? UT : "",
          sinceJoined: this.sinceJoined()
        });
        (0, HT.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${zT.reason}`,
          canReconnect: zT.canReconnect,
          requiresRefresh: zT.requiresRefresh,
          automaticallyReconnect: null !== (mT = zT.automaticallyReconnect) && void 0 !== mT && mT
        }), (0, pU.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, FU.I)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, pU.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(TT, UT, mT) {
        var WT;
        let zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (WT = UT) && void 0 !== WT && WT.endsWith(MT.l) && (this.userContext.invalidateTrafficCode(), UT = UT.replace(MT.l, "")), TT === MT.e.outdatedVersion.code) return console.error("Outdated client with version ", gT.d, ", refreshing page"), (0, qT.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (TT === MT.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, qT.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const gT in MT.e) {
          const {
            code: mT,
            text: WT,
            canReconnect: zT
          } = MT.e[gT];
          if (mT === TT) {
            console.log("matched known error", TT, "leaving game");
            return {
              reason: "" !== WT ? WT : UT || `Code: ${TT}`,
              requiresRefresh: !1,
              canReconnect: zT,
              automaticallyReconnect: mT === MT.e.customGameUpdated.code || mT === MT.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, IU.f)(TT) || zT ? console.warn("Connection lost", TT, UT) : this.logUnrecognisedConnectionLoss(TT, UT, mT), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${TT}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: zT ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(TT, UT, mT) {
        (0, VU.cZ)(new Error("Unrecognised connection loss"), {
          code: String(TT),
          cause: null !== UT && void 0 !== UT ? UT : "",
          ...mT,
          game: this.gameNameWithVariation,
          ...(0, IU.h)()
        })
      }
    }
  },
  39101: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => Em,
      e: () => TW
    });
    var WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT, iT, bT, OT, eT, YT, JT, xT, dT, wT, tT, aT, yT, XT, IT, QT, sT, FT, PT, VT, uT, CT, rT, KT, ST, GT, NT, ET, hT, DT, oT, AT, RT, TU, UU, mU, WU, zU, MU, gU, nU, HU, kU, jU, lU, LU, pU, BU, ZU, cU, vU, fU, qU, iU, bU, OU, eU, YU, JU, xU, dU, wU, tU, aU, yU, XU, IU, QU, sU, FU, PU, VU, uU, CU, rU, KU, SU, GU, NU, EU, hU, DU, oU, AU = mT(31),
      RU = mT(37259),
      Tm = mT(39108),
      Um = mT(39114),
      mm = mT(9242),
      Wm = mT(649),
      zm = mT(643),
      Mm = mT(36901);
    let gm = (WT = (0, mm.type)("number"), zT = (0, mm.type)("number"), MT = (0, mm.type)("number"), gT = (0, mm.type)("number"), nT = (0, mm.type)("number"), HT = (0, mm.type)("number"), kT = (0, mm.type)("string"), jT = class extends mm.Schema {
        constructor() {
          super(...arguments), (0, Tm.d)(this, "id", lT, this), (0, Tm.d)(this, "amount", LT, this), (0, Tm.d)(this, "x", pT, this), (0, Tm.d)(this, "y", BT, this), (0, Tm.d)(this, "z", ZT, this), (0, Tm.d)(this, "size", cT, this), (0, Tm.d)(this, "attributes", vT, this)
        }
      }, lT = (0, Um.e)(jT.prototype, "id", [WT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LT = (0, Um.e)(jT.prototype, "amount", [zT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pT = (0, Um.e)(jT.prototype, "x", [MT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), BT = (0, Um.e)(jT.prototype, "y", [gT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ZT = (0, Um.e)(jT.prototype, "z", [nT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cT = (0, Um.e)(jT.prototype, "size", [HT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), vT = (0, Um.e)(jT.prototype, "attributes", [kT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), jT),
      nm = (fT = (0, mm.type)("string"), qT = (0, mm.type)("string"), iT = class extends mm.Schema {
        constructor() {
          super(...arguments), (0, Tm.d)(this, "itemName", bT, this), (0, Tm.d)(this, "enchantmentTier", OT, this)
        }
      }, bT = (0, Um.e)(iT.prototype, "itemName", [fT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), OT = (0, Um.e)(iT.prototype, "enchantmentTier", [qT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), iT),
      Hm = (eT = (0, mm.type)("string"), YT = (0, mm.type)("string"), JT = (0, mm.type)("number"), xT = (0, mm.type)("number"), dT = (0, mm.type)("number"), wT = (0, mm.type)("float32"), tT = (0, mm.type)("float32"), aT = (0, mm.type)("float32"), yT = (0, mm.type)("string"), XT = (0, mm.type)(["number"]), IT = (0, mm.type)("boolean"), QT = class extends mm.Schema {
        constructor() {
          super(...arguments), (0, Tm.d)(this, "type", sT, this), (0, Tm.d)(this, "name", FT, this), (0, Tm.d)(this, "x", PT, this), (0, Tm.d)(this, "y", VT, this), (0, Tm.d)(this, "z", uT, this), (0, Tm.d)(this, "xRotation", CT, this), (0, Tm.d)(this, "yRotation", rT, this), (0, Tm.d)(this, "zRotation", KT, this), (0, Tm.d)(this, "followingEId", ST, this), (0, Tm.d)(this, "followingOffset", GT, this), (0, Tm.d)(this, "shouldMatchFollowingEntityRotation", NT, this)
        }
      }, sT = (0, Um.e)(QT.prototype, "type", [eT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), FT = (0, Um.e)(QT.prototype, "name", [YT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), PT = (0, Um.e)(QT.prototype, "x", [JT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), VT = (0, Um.e)(QT.prototype, "y", [xT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uT = (0, Um.e)(QT.prototype, "z", [dT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), CT = (0, Um.e)(QT.prototype, "xRotation", [wT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rT = (0, Um.e)(QT.prototype, "yRotation", [tT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), KT = (0, Um.e)(QT.prototype, "zRotation", [aT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ST = (0, Um.e)(QT.prototype, "followingEId", [yT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), GT = (0, Um.e)(QT.prototype, "followingOffset", [XT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new mm.ArraySchema(0, 0, 0)
        }
      }), NT = (0, Um.e)(QT.prototype, "shouldMatchFollowingEntityRotation", [IT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), QT),
      km = (ET = (0, mm.type)("float32"), hT = (0, mm.type)("float32"), DT = (0, mm.type)("boolean"), oT = (0, mm.type)("boolean"), AT = (0, mm.type)("float32"), RT = (0, mm.type)("boolean"), TU = (0, mm.type)("string"), UU = (0, mm.type)("string"), mU = (0, mm.type)("string"), WU = (0, mm.type)("string"), zU = (0, mm.type)(["number"]), MU = (0, mm.type)("number"), gU = (0, mm.type)({
        map: nm
      }), nU = class extends Hm {
        constructor() {
          super(...arguments), (0, Tm.d)(this, "scale", HU, this), (0, Tm.d)(this, "speed", kU, this), (0, Tm.d)(this, "jumping", jU, this), (0, Tm.d)(this, "crouching", lU, this), (0, Tm.d)(this, "cameraPitch", LU, this), (0, Tm.d)(this, "armSwinging", pU, this), (0, Tm.d)(this, "heldItemName", BU, this), (0, Tm.d)(this, "heldItemEnchantmentTier", ZU, this), (0, Tm.d)(this, "pose", cU, this), (0, Tm.d)(this, "ridingVehicleEId", vU, this), (0, Tm.d)(this, "meshOffset", fU, this), (0, Tm.d)(this, "baseRenderHeading", qU, this), (0, Tm.d)(this, "armour", iU, this)
        }
      }, HU = (0, Um.e)(nU.prototype, "scale", [ET], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), kU = (0, Um.e)(nU.prototype, "speed", [hT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jU = (0, Um.e)(nU.prototype, "jumping", [DT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), lU = (0, Um.e)(nU.prototype, "crouching", [oT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), LU = (0, Um.e)(nU.prototype, "cameraPitch", [AT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pU = (0, Um.e)(nU.prototype, "armSwinging", [RT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), BU = (0, Um.e)(nU.prototype, "heldItemName", [TU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ZU = (0, Um.e)(nU.prototype, "heldItemEnchantmentTier", [UU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), cU = (0, Um.e)(nU.prototype, "pose", [mU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), vU = (0, Um.e)(nU.prototype, "ridingVehicleEId", [WU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), fU = (0, Um.e)(nU.prototype, "meshOffset", [zU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new mm.ArraySchema(0, 0, 0)
        }
      }), qU = (0, Um.e)(nU.prototype, "baseRenderHeading", [MU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), iU = (0, Um.e)(nU.prototype, "armour", [gU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new mm.MapSchema
        }
      }), nU),
      jm = (bU = (0, mm.type)("string"), OU = (0, mm.type)("string"), eU = (0, mm.type)("string"), YU = (0, mm.type)("uint8"), JU = class extends km {
        constructor() {
          super(...arguments), (0, Tm.d)(this, "variation", xU, this), (0, Tm.d)(this, "ownerDbId", dU, this), (0, Tm.d)(this, "metaInfo", wU, this), (0, Tm.d)(this, "aiState", tU, this)
        }
      }, xU = (0, Um.e)(JU.prototype, "variation", [bU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), dU = (0, Um.e)(JU.prototype, "ownerDbId", [OU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), wU = (0, Um.e)(JU.prototype, "metaInfo", [eU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), tU = (0, Um.e)(JU.prototype, "aiState", [YU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), JU);
    aU = (0, mm.type)("string"), yU = (0, mm.type)("string"), XU = (0, mm.type)("string"), IU = (0, mm.type)("string"), QU = class extends Hm {
      constructor() {
        super(...arguments), (0, Tm.d)(this, "meshKind", sU, this), (0, Tm.d)(this, "meshOpts", FU, this), (0, Tm.d)(this, "pose", PU, this), (0, Tm.d)(this, "leaderboardTop", VU, this)
      }
    }, sU = (0, Um.e)(QU.prototype, "meshKind", [aU], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), FU = (0, Um.e)(QU.prototype, "meshOpts", [yU], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), PU = (0, Um.e)(QU.prototype, "pose", [XU], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), VU = (0, Um.e)(QU.prototype, "leaderboardTop", [IU], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function lm(TT) {
      return Object.keys(mm.Metadata.getFields(TT))
    }
    const Lm = lm(jm);
    for (const UW of Wm.q)
      if (!Lm.includes(UW)) throw new Error(`Mob Schema is missing a networked property: "${UW}"`);
    const pm = lm((uU = (0, mm.type)("string"), CU = (0, mm.type)("float32"), rU = (0, mm.type)("float32"), KU = (0, mm.type)("float32"), SU = (0, mm.type)("float32"), GU = class extends Hm {
      constructor() {
        super(...arguments), (0, Tm.d)(this, "soundName", NU, this), (0, Tm.d)(this, "volume", EU, this), (0, Tm.d)(this, "refDistance", hU, this), (0, Tm.d)(this, "maxHearDist", DU, this), (0, Tm.d)(this, "rate", oU, this)
      }
    }, NU = (0, Um.e)(GU.prototype, "soundName", [uU], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), EU = (0, Um.e)(GU.prototype, "volume", [CU], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), hU = (0, Um.e)(GU.prototype, "refDistance", [rU], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Mm.k
      }
    }), DU = (0, Um.e)(GU.prototype, "maxHearDist", [KU], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Mm.e
      }
    }), oU = (0, Um.e)(GU.prototype, "rate", [SU], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), GU));
    for (const UW of zm.g)
      if (!pm.includes(UW)) throw new Error(`AudioEntity Schema is missing a replicated property: "${UW}"`);
    var Bm = mT(38562),
      Zm = mT(1336),
      cm = mT(653),
      fm = mT(38352),
      qm = mT(4328),
      im = mT(366),
      bm = mT(37364),
      Om = mT(38231),
      em = mT(2348),
      Ym = mT(37337),
      Jm = mT(38595),
      xm = mT(37503),
      dm = mT(375),
      wm = mT.n(dm),
      tm = mT(38083),
      am = mT(37168),
      ym = mT(38219),
      Xm = mT(38250);
    class Im {
      constructor(TT, UT) {
        this.bloxd = TT, this.eId = UT, this.Rl = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.kB = !1, this.Rl = TT.Rl
      }
      initClient(TT) {
        var UT, mT, WT;
        this.colyseusEntity = TT, this.meshKind = TT.meshKind, this.meshOpts = TT.meshOpts, this.leaderboardTop = TT.leaderboardTop, this.Rl.pY.add([TT.x, TT.y, TT.z], 1, 1, null, null, !1, !1, this.eId), this.Rl.pY.YV(this.eId, "smoothToServerPos");
        const zT = "Person" === this.meshKind;
        this.Rl.pY.YV(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...zT ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: zT ? [{
            nodeName: "HeadMesh",
            softTolerance: Jm.n,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = AU.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (TT => {
          this.updateHidingMeshMgr()
        }));
        const MT = () => {
          const TT = this.Rl.pY.bUT(this.eId);
          if (!TT) return;
          const UT = (0, xm.h)(this.eId);
          if ("number" === typeof TT.zV) {
            var mT, WT, zT, MT;
            const gT = null === (mT = (0, em.j)("head", null === (zT = this.getSpec()) || void 0 === zT || null === (MT = zT.opts.textures) || void 0 === MT ? void 0 : MT.head)) || void 0 === mT || null === (WT = mT.personModel) || void 0 === WT ? void 0 : WT.fullBody;
            return this.Rl.GB.mV.setPickable(TT.zV, UT && !gT), void(0, am.updatePersonAttachmentPickability)(this.Rl, this.eId, UT)
          }
          const gT = TT.mesh;
          if (gT)
            for (const nT of [gT, ...gT.getChildMeshes(!1)]) "QZ" in nT && !nT.name.startsWith("Cape|") && (nT.QZ = UT)
        };
        this.canAttackSub = AU.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, MT), this.interactableSub = AU.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, MT), this.overlayColourSub = AU.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (TT => {
          this.updateOverlayColour(TT)
        })), this.opacitySub = AU.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (TT => {
          this.updateOpacity(TT)
        })), this.zIndexSub = AU.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (TT => {
          this.updateZIndex(TT)
        }));
        const gT = this.Rl.sV[this.Rl.VV][this.eId];
        this.updateOverlayColour(null !== (UT = null === gT || void 0 === gT ? void 0 : gT.overlayColour) && void 0 !== UT ? UT : null), this.updateOpacity(null !== (mT = null === gT || void 0 === gT ? void 0 : gT.opacity) && void 0 !== mT ? mT : 1), this.updateZIndex(null !== (WT = null === gT || void 0 === gT ? void 0 : gT.zIndex) && void 0 !== WT ? WT : 0), this.multilineTextBoxSub = (0, Ym.w)(this.Rl, this.eId)
      }
      onChangeClient(TT, UT) {
        if ("xRotation" === TT || "yRotation" === TT || "zRotation" === TT)(0, Ym.z)(this.Rl, this.eId, TT, UT);
        else if ("pose" === TT) {
          const TT = this.Rl.pY.wUT(this.eId);
          TT && (TT.pose = UT || "standing")
        } else "meshKind" === TT || "meshOpts" === TT ? (this[TT] = UT, this.queueMeshRebuild()) : "name" === TT && "" !== UT ? this.updateHidingMeshMgr() : "leaderboardTop" === TT && (this.leaderboardTop = UT, AU.j.EZ(`leaderboardTop|${this.eId}`, UT))
      }
      disposeClient() {
        this.kB = !0, this.Rl.pY.deleteEntity(this.eId), AU.j.unsubscribe(this.canSeeSub), AU.j.unsubscribe(this.canAttackSub), AU.j.unsubscribe(this.interactableSub), AU.j.unsubscribe(this.overlayColourSub), AU.j.unsubscribe(this.opacitySub), AU.j.unsubscribe(this.zIndexSub), AU.j.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var TT, UT;
        return {
          canSee: null !== (TT = null === (UT = this.Rl.sV[this.Rl.VV][this.eId]) || void 0 === UT ? void 0 : UT.canSee) && void 0 !== TT && TT,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var TT, UT, mT;
        const {
          Rl: WT
        } = this, {
          pY: zT
        } = WT, MT = this.getCurrentHidingMeshMgrState();
        if ((0, im.ye)(this.previousHidingMeshManagerState, MT)) return;
        if (this.previousHidingMeshManagerState = MT, zT.JV(this.eId, "hidingMeshManager"), null === (TT = WT.sV[WT.VV][this.eId]) || void 0 === TT || !TT.canSee) return;
        const gT = this.getSpec();
        if (!gT) return;
        const {
          type: nT,
          opts: HT
        } = gT;
        "Person" === nT && (HT.textures = (0, em.n)(HT.textures)), HT.eId = this.eId, zT.YV(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var TT, UT, mT;
            "Leaderboard" === nT && (HT.leaderboardTop = this.leaderboardTop);
            const MT = this.bloxd.client.meshCreator.getEntityMesh(nT, HT, (TT => {
              var UT, mT;
              if ("number" === typeof TT) {
                var zT, MT, gT;
                const UT = WT.GB.mV;
                UT.setEntityId(TT, this.eId);
                const mT = "Person" === nT && (null === (zT = (0, em.j)("head", null === (gT = HT.textures) || void 0 === gT ? void 0 : gT.head)) || void 0 === zT || null === (MT = zT.personModel) || void 0 === MT ? void 0 : MT.fullBody);
                return void UT.setPickable(TT, (0, xm.h)(this.eId) && !mT)
              }
              const kT = TT;
              for (const nT of [kT, ...kT.getChildMeshes(!1)]) void 0 === nT.QZ || nT.name.startsWith("Cape|") || (nT.QZ = (0, xm.h)(this.eId), nT.metadata ??= new WT.GB.sZ, nT.metadata.eId = this.eId);
              this.updateOpacity(null !== (UT = null === (mT = WT.sV[WT.VV][this.eId]) || void 0 === mT ? void 0 : mT.opacity) && void 0 !== UT ? UT : 1)
            }));
            if (!MT) return;
            const {
              zV: gT,
              mesh: kT,
              meshOffset: jT,
              nameYOffset: lT,
              modelLoaded: LT
            } = MT;
            null === LT || void 0 === LT || LT.then((() => {
              var TT;
              (null === (TT = zT.bUT(this.eId)) || void 0 === TT ? void 0 : TT.mesh) === kT && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const pT = null === gT ? null : WT.GB.mV.BWT(gT, 0);
            if (zT.YV(this.eId, zT.names.mesh, {
                zV: gT,
                PmT: pT,
                mesh: kT,
                cnT: !1,
                umT: "Leaderboard" !== nT,
                offset: jT.slice(),
                ZnT: "ParticleEmitter" === nT && HT.followTargetMeshOffset ? TT => {
                  var UT;
                  wm().copy(TT, jT);
                  const mT = null === (UT = zT.LmT(this.eId)) || void 0 === UT ? void 0 : UT.UB,
                    WT = void 0 === mT ? null : zT.wUT(mT);
                  if (WT) {
                    var MT, gT;
                    const UT = this.bloxd.getEntityHeading(null !== (MT = WT.ridingVehicleEId) && void 0 !== MT ? MT : mT, !0),
                      zT = Math.sin(UT),
                      nT = Math.cos(UT);
                    TT[0] += WT.meshOffset[0] * nT + WT.meshOffset[2] * zT, TT[1] += WT.meshOffset[1], TT[2] += WT.meshOffset[2] * nT - WT.meshOffset[0] * zT;
                    const HT = null !== (gT = WT.ridingVehicleEId) && void 0 !== gT ? gT : null;
                    null !== HT && (0, Xm.d)(this.Rl, HT, TT)
                  }
                } : null
              }), "Person" === nT) {
              var BT, ZT, cT, vT;
              zT.YV(this.eId, zT.names.meshAttachments, {
                personFullBody: null !== (BT = null === (ZT = (0, em.j)("head", null === (vT = HT.textures) || void 0 === vT ? void 0 : vT.head)) || void 0 === ZT || null === (cT = ZT.personModel) || void 0 === cT ? void 0 : cT.fullBody) && void 0 !== BT && BT
              });
              for (const TT of Zm.t) {
                var fT, qT, iT;
                const UT = null === (fT = HT.textures) || void 0 === fT ? void 0 : fT[TT];
                UT && null !== (qT = (0, em.j)(TT, UT)) && void 0 !== qT && null !== (iT = qT.attachments) && void 0 !== iT && iT.length && Om.c.Player.meshApi.updatePlayerCosmetic(this.eId, gT, TT, UT)
              }
              zT.YV(this.eId, zT.names.moveState), zT.YV(this.eId, "updateWalkingState", {
                zV: gT,
                PmT: pT,
                walkingLegSwingDuration: Jm.y
              }), zT.YV(this.eId, "humanoidMesh", {
                zV: gT,
                PmT: pT,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), zT.YV(this.eId, "animator", {
                zV: gT,
                PmT: pT,
                modelLifeformType: "Player"
              }), ym.e.hasAnimation("Person") && zT.YV(this.eId, "rigAnimation", {
                target: "Person",
                zV: gT
              }), zT.wUT(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === nT && null !== gT) {
              zT.YV(this.eId, "animator", {
                zV: gT,
                PmT: pT,
                modelLifeformType: null
              });
              const TT = (0, fm.q)(HT.blockName);
              null !== TT && zT.YV(this.eId, "rigAnimation", {
                target: TT,
                zV: gT
              })
            }
            zT.VnT(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: lT
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === HT.autoRotate && (zT.JV(this.eId, "meshRotation"), zT.YV(this.eId, "autoRotate"));
            const {
              lineToEId: bT
            } = HT;
            (0, cm.E)(bT) || zT.YV(this.eId, "lineToEntity", {
              lineToEId: bT
            });
            const OT = WT.sV[WT.VV][this.eId];
            this.updateOverlayColour(null !== (TT = null === OT || void 0 === OT ? void 0 : OT.overlayColour) && void 0 !== TT ? TT : null), this.updateOpacity(null !== (UT = null === OT || void 0 === OT ? void 0 : OT.opacity) && void 0 !== UT ? UT : 1), this.updateZIndex(null !== (mT = null === OT || void 0 === OT ? void 0 : OT.zIndex) && void 0 !== mT ? mT : 0)
          },
          removeMeshComponent: () => {
            "Person" !== nT && "BloxdBlock" !== nT || zT.JV(this.eId, "rigAnimation"), zT.JV(this.eId, zT.names.mesh), zT.uTT(this.eId, zT.names.meshAttachments) && zT.JV(this.eId, zT.names.meshAttachments), zT.JV(this.eId, "entityName"), zT.JV(this.eId, "autoRotate"), zT.JV(this.eId, "lineToEntity"), "Person" === nT ? (zT.JV(this.eId, zT.names.moveState), zT.JV(this.eId, "updateWalkingState"), zT.JV(this.eId, "humanoidMesh"), zT.JV(this.eId, "animator")) : "BloxdBlock" === nT && zT.JV(this.eId, "animator")
          },
          hideDist: null !== (UT = HT.hideDist) && void 0 !== UT ? UT : 80,
          movingHideDist: null !== (mT = HT.hideDist) && void 0 !== mT ? mT : 120,
          displayOutsideLoadedChunk: HT.hideDist > 100,
          immediatelyUpdate: !0,
          hn: "BloxdBlock" === nT ? HT.blockName : nT
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.kB || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, qm.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(TT) {
        var UT, mT;
        if ("Person" !== this.meshKind) return;
        let WT = new bm.e(0, 0, 0, 0);
        if (null !== TT) {
          const UT = (0, im.eb)(TT);
          WT = new bm.e(UT[0] / 255, UT[1] / 255, UT[2] / 255, .5)
        }
        const zT = null !== (UT = null === (mT = this.Rl.pY.bUT(this.eId)) || void 0 === mT ? void 0 : mT.zV) && void 0 !== UT ? UT : null;
        null !== zT && Om.c.Player.meshApi.updateMeshOverlayColour(zT, WT)
      }
      updateZIndex(TT) {
        var UT;
        if ("Person" !== this.meshKind) return;
        const mT = null === (UT = this.Rl.pY.bUT(this.eId)) || void 0 === UT ? void 0 : UT.zV;
        "number" === typeof mT && this.Rl.GB.mV.setRenderingGroupId(mT, TT)
      }
      updateOpacity(TT) {
        const UT = this.Rl.pY.bUT(this.eId);
        UT && ("number" !== typeof UT.zV ? UT.mesh && "ParticleEmitter" !== this.meshKind && (0, tm.c)(UT.mesh, TT) : Om.c.Player.meshApi.updateMeshOpacity(UT.zV, TT))
      }
    }
    var Qm = mT(39106);
    class sm {
      constructor(TT, UT) {
        this.eId = UT, this.Rl = void 0, this.schema = void 0, this.Rl = TT.Rl
      }
      initClient(TT) {
        this.schema = TT, this.Rl.pY.add([TT.x, TT.y, TT.z], .1, .1, null, null, !1, !1, this.eId), this.Rl.pY.YV(this.eId, "smoothToServerPos"), Qm.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(TT) {
        zm.g.includes(TT) && Qm.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Qm.d.remove(this.eId), this.Rl.pY.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: TT,
          volume: UT,
          refDistance: mT,
          maxHearDist: WT,
          rate: zT
        } = this.schema;
        return {
          soundName: TT,
          volume: UT,
          refDistance: mT,
          maxHearDist: WT,
          rate: zT
        }
      }
    }
    var Fm = mT(3781),
      Pm = mT(36866),
      Vm = mT(6542),
      um = mT(37911),
      Cm = mT(2875),
      rm = mT(38286),
      Km = mT(9195),
      Sm = mT(38601),
      Gm = mT(37882),
      Nm = mT(3068);
    class Em {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.XmT = TT, this.Rl = UT, this.setupBudgetMs = mT, this.now = WT, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.kB = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.hq = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const TT of this.promotedSetups) {
            this.promotedSetups.delete(TT);
            const UT = this.queuedSetups.get(TT);
            UT && (this.queuedSetups.delete(TT), this.timedSetup(UT, TT))
          }
        }, this.createStateCallbacks = (0, Km.getStateCallbacks)(TT), this.roomStateCallbacks = this.createStateCallbacks(TT.state), this.roomState = TT.state, this.setupBudgetLeftMs = mT, this.lastRefillMs = WT()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.XmT.onStateChange(this.setUpPromoted), this.Rl.on("beforeInputs", this.onFrame), this.Rl.on("Cl", this.hq)
      }
      setUpQueuedEntities(TT) {
        var UT;
        if ((null === (UT = (0, Cm.d)().client.getMsgHandler()) || void 0 === UT ? void 0 : UT.XmT) !== this.XmT) return this.Rl.off("beforeInputs", this.onFrame), this.Rl.off("Cl", this.hq), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (TT && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (wm().copy(hm, this.Rl.pY.Aq(this.Rl.VV)); this.setupBudgetLeftMs > 0;) {
            const TT = this.nearestQueued(hm);
            if (null === TT) return;
            this.setUpIfQueued(TT), this.setUpPromoted()
          }
      }
      nearestQueued(TT) {
        let UT = null,
          mT = 1 / 0;
        return this.queuedSetups.forEach(((WT, zT) => {
          const MT = function(TT, UT) {
            return (UT.x - TT[0]) ** 2 + (UT.y - TT[1]) ** 2 + (UT.z - TT[2]) ** 2
          }(TT, WT);
          (null === UT || MT < mT) && (UT = zT, mT = MT)
        })), UT
      }
      setUpOrQueue(TT, UT) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(TT, UT) ? this.timedSetup(TT, UT) : this.queuedSetups.set(UT, TT)
      }
      mustSetUpNow(TT, UT) {
        const mT = this.Rl.rTT;
        if (UT === mT) return !0;
        const WT = this.roomState.entities.get(mT);
        return !(!WT || WT.ridingVehicleEId !== UT && WT.followingEId !== UT) || (Dm(TT.type) === Bm.e || (0, Cm.d)().getFollowingEntities(UT).length > 0)
      }
      setUpIfQueued(TT) {
        const UT = this.queuedSetups.get(TT);
        UT && (this.queuedSetups.delete(TT), this.timedSetup(UT, TT))
      }
      promoteIfQueued(TT) {
        null !== TT && this.queuedSetups.has(TT) && this.promotedSetups.add(TT)
      }
      timedSetup(TT, UT) {
        const mT = this.now();
        this.setupEntity(TT, UT), this.setupBudgetLeftMs -= this.now() - mT
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.lY(((TT, UT) => {
          this.Rl.rTT ? this.setUpOrQueue(TT, UT) : this.deferEntitySetupUntilInitInfo(TT, UT)
        })), this.roomStateCallbacks.entities.yI(((TT, UT) => {
          const mT = this.deferredSetups.get(UT);
          mT && (AU.j.unsubscribe(mT), this.deferredSetups.delete(UT)), this.queuedSetups.delete(UT), this.detach(UT), (0, Cm.d)().client.disposeEntity(UT)
        }))
      }
      deferEntitySetupUntilInitInfo(TT, UT) {
        const mT = AU.j.mq("initInfoReceived", (() => {
          this.deferredSetups.delete(UT), this.setUpOrQueue(TT, UT)
        }));
        this.deferredSetups.set(UT, mT), (0, Fm.onGameResetOnce)((() => {
          this.deferredSetups.get(UT) === mT && (AU.j.unsubscribe(mT), this.deferredSetups.delete(UT)), (0, Cm.d)().updatePositionAndPhysics(this.Rl.VV, {
            type: Vm.q.DEFAULT,
            tier: null
          }, !0), (0, Cm.d)().takeHeldPlayerBodySize(this.Rl.VV);
          const TT = this.Rl.pY.gUT(this.Rl.VV);
          TT && (TT.movementType = Vm.p.NORMAL)
        }))
      }
      setupEntity(TT, UT) {
        const mT = UT === this.Rl.rTT;
        if (mT)(0, Cm.d)().client.XN(this.Rl.VV, null, null);
        else {
          const {
            type: mT
          } = TT, WT = Dm(mT);
          if (void 0 === WT) return void
          function(TT, UT) {
            const mT = String(TT);
            if (om.has(mT)) return;
            om.add(mT);
            const WT = mT.length > 80 ? `${mT.slice(0,80)}...` : mT,
              zT = `No client handler for entity type ${JSON.stringify(WT)}, so entity ${UT} is not set up`;
            console.warn(zT), (0, Nm.reportClientError)("uncaught", zT, "unknown_entity_type")
          }(mT, UT);
          (0, Cm.d)().client.XN(UT, TT, new WT((0, Cm.d)(), UT, mT))
        }
        const WT = this.createStateCallbacks(TT);
        if (mT) return this.setupMapSchemaCallbacks(UT, TT, WT, "armour"), this.setupScalarField(UT, TT, WT, "scale"), this.setupScalarField(UT, TT, WT, "ridingVehicleEId"), this.setupScalarField(UT, TT, WT, "followingEId"), this.setupScalarField(UT, TT, WT, "followingOffset"), void this.setupScalarField(UT, TT, WT, "shouldMatchFollowingEntityRotation");
        for (const zT of lm(TT.constructor)) TT[zT] instanceof mm.MapSchema ? this.setupMapSchemaCallbacks(UT, TT, WT, zT) : this.setupScalarField(UT, TT, WT, zT)
      }
      setupMapSchemaCallbacks(TT, UT, mT, WT) {
        const zT = mT[WT],
          MT = new Map;
        zT.lY(((mT, zT) => {
          if (this.onEntityFieldChange(TT, UT, WT, {
              key: zT,
              value: mT
            }), !(mT instanceof mm.Schema)) return;
          const gT = this.createStateCallbacks(mT),
            nT = [];
          for (const MT of lm(mT.constructor)) nT.push(this.listenForFutureChanges(gT, MT, (() => {
            this.onEntityFieldChange(TT, UT, WT, {
              key: zT,
              value: mT
            })
          })));
          MT.set(zT, (() => {
            for (const TT of nT) TT()
          }))
        })), zT.yI(((mT, zT) => {
          var gT;
          null === (gT = MT.get(zT)) || void 0 === gT || gT(), MT.delete(zT), this.onEntityFieldChange(TT, UT, WT, {
            key: zT,
            value: null
          })
        })), this.addDetacher(TT, (() => {
          for (const TT of MT.values()) TT();
          MT.clear()
        }))
      }
      setupScalarField(TT, UT, mT, WT) {
        this.onEntityFieldChange(TT, UT, WT, UT[WT]);
        const zT = this.listenForFutureChanges(mT, WT, (mT => {
          this.onEntityFieldChange(TT, UT, WT, mT)
        }));
        this.addDetacher(TT, zT)
      }
      addDetacher(TT, UT) {
        let mT = this.detachers.get(TT);
        mT || (mT = [], this.detachers.set(TT, mT)), mT.push(UT)
      }
      detach(TT) {
        for (const mT of null !== (UT = this.detachers.get(TT)) && void 0 !== UT ? UT : []) {
          var UT;
          mT()
        }
        this.detachers.delete(TT)
      }
      listenForFutureChanges(TT, UT, mT) {
        return TT.listen(UT, mT, !1)
      }
      onEntityFieldChange(TT, UT, mT, WT) {
        switch (mT) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(WT);
            const UT = this.Rl.pY.wUT((0, Pm.e)(TT));
            UT && (UT.ridingVehicleEId = WT);
            break
          }
          case "armour":
            this.handleArmourChange(TT, WT);
            break;
          case "followingEId":
            this.promoteIfQueued(WT), this.handleFollowingEIdChange(TT, UT, WT);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(TT, mT, WT);
            break;
          case "scale":
            this.handleScaleChange(TT, WT);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(TT, WT);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(TT, WT);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(TT, WT);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(TT, mT, WT)
        }(0, Cm.d)().client.updateEntityField(TT, mT, WT)
      }
      handleArmourChange(TT, UT) {
        var mT, WT;
        const {
          key: zT,
          value: MT
        } = UT;
        (0, Om.z)(TT, zT, null !== (mT = null === MT || void 0 === MT ? void 0 : MT.itemName) && void 0 !== mT ? mT : null, null !== (WT = null === MT || void 0 === MT ? void 0 : MT.enchantmentTier) && void 0 !== WT ? WT : null)
      }
      handleFollowingEIdChange(TT, UT, mT) {
        const WT = (0, Pm.e)(TT),
          zT = WT === this.Rl.VV;
        if (this.Rl.pY.JV(WT, this.Rl.pY.names.RY), mT) this.Rl.pY.JV(WT, "smoothToServerPos"), this.Rl.pY.YV(WT, this.Rl.pY.names.RY, {
          UB: (0, Pm.e)(mT),
          offset: Array.from(UT.followingOffset),
          pmT: UT.shouldMatchFollowingEntityRotation,
          fmT: !0,
          qmT: (TT, WT) => {
            if (wm().copy(TT, UT.followingOffset), UT.ridingVehicleEId === mT) {
              const UT = (0, Pm.e)(mT),
                zT = (0, Cm.d)().getEntityHeading(UT, WT);
              wm().cj(TT, TT, wm().ZERO, zT)
            }
          }
        });
        else if (!zT) {
          this.Rl.pY.uTT(WT, "smoothToServerPos") || this.Rl.pY.YV(WT, "smoothToServerPos");
          const TT = this.Rl.pY.getState(WT, "smoothToServerPos"),
            UT = this.Rl.pY.FN(WT).position;
          (0, Gm.setServerPosition)(TT, UT[0], UT[1], UT[2])
        }
      }
      handleRotationChange(TT, UT, mT) {
        const WT = "xRotation" === UT ? 0 : "yRotation" === UT ? 1 : 2;
        for (const zT of (0, Cm.d)().getFollowingEntities(TT)) {
          const TT = this.Rl.pY.getState(zT, "meshRotation"),
            UT = this.Rl.pY.LmT(zT);
          TT && UT.pmT && (TT.serverSetRotation[WT] = mT)
        }
      }
      handleScaleChange(TT, UT) {
        const mT = (0, Pm.e)(TT);
        if (AU.j.EZ(`entityScale|${mT}`, UT), mT === this.Rl.VV) {
          var WT;
          (0, Cm.d)().removeFromEyeHeightCache(mT);
          const TT = this.Rl.pY.gUT(this.Rl.VV),
            UT = null !== (WT = null === TT || void 0 === TT ? void 0 : TT.physicsState) && void 0 !== WT ? WT : {
              type: Vm.q.DEFAULT,
              tier: null
            };
          return void(0, Cm.d)().updatePositionAndPhysics(this.Rl.VV, UT, !1)
        }
        const zT = (0, Cm.d)().getLifeformType(mT);
        if (null === zT) return;
        const {
          physicsBodyWidth: MT,
          physicsBodyHeight: gT
        } = (0, Sm.f)(UT, zT);
        this.Rl.pY.jmT(mT, MT, gT, MT)
      }
      handleBaseRenderHeadingChange(TT, UT) {
        const mT = this.Rl.pY.getState(TT, "meshRotation");
        mT && (mT.baseRenderRotation[1] = UT);
        for (const WT of (0, Cm.d)().getFollowingEntities(TT)) {
          const TT = this.Rl.pY.getState(WT, "meshRotation"),
            mT = this.Rl.pY.LmT(WT);
          TT && mT.pmT && (TT.baseRenderRotation[1] = UT)
        }
      }
      handleFollowingOffsetChange(TT, UT) {
        const mT = this.Rl.pY.LmT((0, Pm.e)(TT));
        if (mT && mT.offset) {
          const TT = UT ? Array.from(UT) : wm().ZERO;
          mT.offset[0] = TT[0], mT.offset[1] = TT[1], mT.offset[2] = TT[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(TT, UT) {
        const mT = this.Rl.pY.LmT((0, Pm.e)(TT));
        mT && (mT.pmT = null === UT || void 0 === UT || UT)
      }
      handlePositionChange(TT, UT, mT) {
        if (this.Rl.pY.uTT(TT, "smoothToServerPos")) {
          const WT = this.Rl.pY.getState(TT, "smoothToServerPos");
          (0, Gm.setServerPositionAxis)(WT, Am[UT], mT)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.lY(((TT, UT) => {
          this.allItems[UT] = TT, (0, um.j)(this.Rl, UT, [TT.x, TT.y, TT.z], TT.id, {
            amount: TT.amount,
            attributes: JSON.parse(TT.attributes),
            wz: (0, RU.d)(this.Rl).cantPickUpItem(UT),
            size: TT.size,
            predictedAt: (0, Cm.d)().client.itemDropPrediction.onServerItemAdded(UT)
          });
          const mT = this.createStateCallbacks(TT);
          for (const WT of lm(gm)) this.onItemFieldChange(UT, WT, TT[WT]), this.addDetacher(UT, this.listenForFutureChanges(mT, WT, (TT => {
            this.onItemFieldChange(UT, WT, TT)
          })))
        })), this.roomStateCallbacks.items.yI(((TT, UT) => {
          delete this.allItems[UT], this.detach(UT), (0, Cm.d)().client.itemDropPrediction.onServerItemRemoved(UT), this.Rl.pY.uTT(UT, this.Rl.pY.names.itemState) && this.Rl.pY.deleteEntity(UT), (0, RU.d)(this.Rl).disposeEntity(UT)
        }))
      }
      onItemFieldChange(TT, UT, mT) {
        if (UT in Am) {
          if (this.Rl.pY.uTT(TT, "itemState")) {
            const WT = this.Rl.pY.getState(TT, "smoothToServerPos");
            (0, Gm.setServerPositionAxis)(WT, Am[UT], mT), (0, Cm.d)().client.itemDropPrediction.onServerItemMoved(TT)
          }
          return
        }
        if (!this.Rl.pY.uTT(TT, "itemState")) return;
        const WT = this.Rl.pY.getState(TT, "itemState");
        "amount" === UT && mT !== WT.amount && (WT.creationTime = Date.now()), WT[UT] = "attributes" === UT ? JSON.parse(mT) : mT
      }
      dispose() {
        if (!this.kB) {
          this.kB = !0, this.Rl.off("beforeInputs", this.onFrame), this.Rl.off("Cl", this.hq), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const TT of this.deferredSetups.values()) AU.j.unsubscribe(TT);
          this.deferredSetups.clear(), this.Rl.pY.JV(this.Rl.VV, this.Rl.pY.names.RY);
          for (const TT in this.allItems) this.Rl.pY.deleteEntity(TT), delete this.allItems[TT];
          for (const TT of [...this.detachers.keys()]) this.detach(TT);
          (0, RU.d)(this.Rl).clear();
          for (const TT of (0, Cm.d)().client.iterateEntityIds())(0, Cm.d)().client.disposeEntity(TT)
        }
      }
    }
    const hm = [0, 0, 0];

    function Dm(TT) {
      if ("string" !== typeof TT) return;
      const UT = TT.indexOf("|"),
        mT = -1 === UT ? TT : TT.slice(0, UT),
        WT = TW();
      return Object.hasOwn(WT, mT) ? WT[mT] : void 0
    }
    const om = new Set;
    const Am = {
      x: 0,
      y: 1,
      z: 2
    };
    let Rm = null;

    function TW() {
      return null !== Rm || (Rm = {
        ...Object.fromEntries(zm.j.map((TT => {
          const {
            hn: UT
          } = (0, rm.d)(TT);
          return [TT, UT]
        }))),
        Pebble: Bm.e,
        Snowball: Bm.e,
        "Snowball Launcher": Bm.e,
        "Reinforced Pebble": Bm.e,
        Bullet: Bm.e,
        "Reinforced Ball": Bm.e,
        Ball: Bm.e,
        Mango: Bm.e,
        "Moonstone Orb": Bm.e,
        ...Object.fromEntries(Wm.t.map((TT => [(0, im.jc)(TT), Bm.e]))),
        Arrow: Bm.e,
        "Arrow of Speed": Bm.e,
        "Arrow of Poison": Bm.e,
        "Arrow of Slowness": Bm.e,
        "Arrow of Weakness": Bm.e,
        "Arrow of Knockback": Bm.e,
        "Arrow of Strength": Bm.e,
        "Arrow of Invisibility": Bm.e,
        "Arrow of Jumping": Bm.e,
        "Arrow of Defense": Bm.e,
        "Arrow of Instant Healing": Bm.e,
        "Arrow of Instant Damage": Bm.e,
        "Arrow of Regeneration": Bm.e,
        "Arrow of Haste": Bm.e,
        "Arrow of Shield": Bm.e,
        "Arrow of Double Jump": Bm.e,
        "Arrow of Heat Resistance": Bm.e,
        "Arrow of X-Ray Vision": Bm.e,
        "Arrow of Mining Yield": Bm.e,
        "Arrow of Brain Rot": Bm.e,
        "Arrow of Milk": Bm.e,
        Fireball: Bm.e,
        "Bouncy Bomb": Bm.e,
        RPG: Bm.e,
        "Obby RPG": Bm.e,
        "Super RPG": Bm.e,
        "Grenade Launcher": Bm.e,
        Iceball: Bm.e,
        Coconut: Bm.e,
        "Splash Speed Potion": Bm.e,
        "Splash Defense Potion": Bm.e,
        "Splash Strength Potion": Bm.e,
        "Splash Invisibility Potion": Bm.e,
        "Splash Jump Potion": Bm.e,
        "Splash Knockback Potion": Bm.e,
        "Splash Poison Potion": Bm.e,
        "Splash Speed Potion II": Bm.e,
        "Splash Defense Potion II": Bm.e,
        "Splash Strength Potion II": Bm.e,
        "Splash Jump Potion II": Bm.e,
        "Splash Knockback Potion II": Bm.e,
        "Splash Poison Potion II": Bm.e,
        "Splash Slowness Potion": Bm.e,
        "Splash Slowness Potion II": Bm.e,
        "Splash Weakness Potion": Bm.e,
        "Splash Weakness Potion II": Bm.e,
        "Splash Milk Potion": Bm.e,
        "Splash Instant Damage Potion": Bm.e,
        "Splash Instant Damage Potion II": Bm.e,
        "Splash Instant Healing Potion": Bm.e,
        "Splash Instant Healing Potion II": Bm.e,
        "Splash Regeneration Potion": Bm.e,
        "Splash Regeneration Potion II": Bm.e,
        "Splash Haste Potion": Bm.e,
        "Splash Haste Potion II": Bm.e,
        "Splash Shield Potion": Bm.e,
        "Splash Shield Potion II": Bm.e,
        "Splash Double Jump Potion": Bm.e,
        "Splash Heat Resistance Potion": Bm.e,
        "Splash X-Ray Vision Potion": Bm.e,
        "Splash Mining Yield Potion": Bm.e,
        "Splash Mining Yield Potion II": Bm.e,
        "Splash Brain Rot Potion": Bm.e,
        "Yellow Paintball Gun": Bm.e,
        "White Paintball Gun": Bm.e,
        "Red Paintball Gun": Bm.e,
        "Purple Paintball Gun": Bm.e,
        "Pink Paintball Gun": Bm.e,
        "Orange Paintball Gun": Bm.e,
        "Magenta Paintball Gun": Bm.e,
        "Lime Paintball Gun": Bm.e,
        "Light Gray Paintball Gun": Bm.e,
        "Light Blue Paintball Gun": Bm.e,
        "Green Paintball Gun": Bm.e,
        "Gray Paintball Gun": Bm.e,
        "Cyan Paintball Gun": Bm.e,
        "Brown Paintball Gun": Bm.e,
        "Blue Paintball Gun": Bm.e,
        "Black Paintball Gun": Bm.e,
        "Yellow Heavy Paintball Gun": Bm.e,
        "White Heavy Paintball Gun": Bm.e,
        "Red Heavy Paintball Gun": Bm.e,
        "Purple Heavy Paintball Gun": Bm.e,
        "Pink Heavy Paintball Gun": Bm.e,
        "Orange Heavy Paintball Gun": Bm.e,
        "Magenta Heavy Paintball Gun": Bm.e,
        "Lime Heavy Paintball Gun": Bm.e,
        "Light Gray Heavy Paintball Gun": Bm.e,
        "Light Blue Heavy Paintball Gun": Bm.e,
        "Green Heavy Paintball Gun": Bm.e,
        "Gray Heavy Paintball Gun": Bm.e,
        "Cyan Heavy Paintball Gun": Bm.e,
        "Brown Heavy Paintball Gun": Bm.e,
        "Blue Heavy Paintball Gun": Bm.e,
        "Black Heavy Paintball Gun": Bm.e,
        "Toxin Ball": Bm.e,
        "Splash Aura XP Potion": Bm.e,
        "Splash Aura XP Potion II": Bm.e,
        "Arrow of Aura XP": Bm.e,
        Firecracker: Bm.e,
        "Rainbow Firecracker": Bm.e,
        "White Firecracker": Bm.e,
        "Orange Firecracker": Bm.e,
        "Magenta Firecracker": Bm.e,
        "Light Blue Firecracker": Bm.e,
        "Yellow Firecracker": Bm.e,
        "Lime Firecracker": Bm.e,
        "Pink Firecracker": Bm.e,
        "Gray Firecracker": Bm.e,
        "Light Gray Firecracker": Bm.e,
        "Cyan Firecracker": Bm.e,
        "Purple Firecracker": Bm.e,
        "Blue Firecracker": Bm.e,
        "Brown Firecracker": Bm.e,
        "Green Firecracker": Bm.e,
        "Red Firecracker": Bm.e,
        "Black Firecracker": Bm.e,
        "Firecracker Pebble": Bm.e,
        "Rainbow Firecracker Pebble": Bm.e,
        "White Firecracker Pebble": Bm.e,
        "Orange Firecracker Pebble": Bm.e,
        "Magenta Firecracker Pebble": Bm.e,
        "Light Blue Firecracker Pebble": Bm.e,
        "Yellow Firecracker Pebble": Bm.e,
        "Lime Firecracker Pebble": Bm.e,
        "Pink Firecracker Pebble": Bm.e,
        "Gray Firecracker Pebble": Bm.e,
        "Light Gray Firecracker Pebble": Bm.e,
        "Cyan Firecracker Pebble": Bm.e,
        "Purple Firecracker Pebble": Bm.e,
        "Blue Firecracker Pebble": Bm.e,
        "Brown Firecracker Pebble": Bm.e,
        "Green Firecracker Pebble": Bm.e,
        "Red Firecracker Pebble": Bm.e,
        "Black Firecracker Pebble": Bm.e,
        "Blinding Pebble": Bm.e,
        Poop: Bm.e,
        "Wood Boomerang": Bm.e,
        "Stone Boomerang": Bm.e,
        "Iron Boomerang": Bm.e,
        "Gold Boomerang": Bm.e,
        "Diamond Boomerang": Bm.e,
        "Amethite Boomerang": Bm.e,
        "Magmasteel Boomerang": Bm.e,
        "Rubellite Boomerang": Bm.e,
        "Serpentite Boomerang": Bm.e,
        "Moonstone Boomerang": Bm.e,
        "67 Base Projectile": Bm.e,
        "67 Boosted Projectile": Bm.e,
        "Capitano Grenade": Bm.e,
        "Scatter Pellet": Bm.e,
        "Lucky Bomb": Bm.e,
        "Unlucky Bomb": Bm.e,
        "Swap Orb": Bm.e,
        Mesh: Im,
        AudioEntity: sm
      }), Rm
    }
  },
  39154: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      h: () => gT
    });
    var WT = mT(653),
      zT = mT(37854);
    const MT = 4e4;
    class gT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = TT, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(TT, UT, mT) {
        const MT = (0, WT.H)(TT),
          gT = (0, WT.H)(UT),
          nT = (0, WT.H)(mT),
          HT = this.now();
        if (MT !== this.lastChunkX || gT !== this.lastChunkY || nT !== this.lastChunkZ) {
          this.lastChunkX = MT, this.lastChunkY = gT, this.lastChunkZ = nT, this.lastChunkId = (0, zT.d)(MT, gT, nT), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, HT);
          for (const [TT, UT] of this.editedAt) {
            if (UT >= HT - 3e5) break;
            this.editedAt.delete(TT)
          }
        } else this.editedAt.set(this.lastChunkId, HT)
      }
      chunksEditedSince(TT) {
        const UT = [];
        for (const [mT, WT] of this.editedAt) WT >= TT && UT.push(mT);
        return UT
      }
    }
  },
  39221: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => pU,
      g: () => rU,
      j: () => XU,
      l: () => KU
    });
    var WT = mT(3781),
      zT = mT(8894),
      MT = mT(36765),
      gT = mT(1554),
      nT = mT(36851),
      HT = mT(39106),
      kT = mT(39096),
      jT = mT(3841),
      lT = mT(37996),
      LT = mT(39228),
      pT = mT(1336),
      BT = mT(351),
      ZT = mT(31),
      cT = mT(2067),
      vT = mT(102),
      fT = mT(44),
      qT = mT(2104),
      iT = mT(2014),
      bT = mT(3111);
    class OT {
      constructor(TT) {
        this.storeForMs = TT, this.clicks = new bT.e
      }
      click() {
        this.clicks.enqueue(Date.now());
        const TT = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < TT;) this.clicks.dequeue()
      }
      getNumClicksInMs(TT) {
        let UT = 0;
        return this.clicks.forEach((mT => {
          mT > Date.now() - TT && UT++
        })), UT
      }
      getMaxClickSeparationInMs(TT) {
        if (0 === this.clicks.size) return this.storeForMs;
        let UT = 0,
          mT = Date.now() - TT;
        this.clicks.forEach((WT => {
          WT < Date.now() - TT || (UT = Math.max(UT, Math.abs(WT - mT)), mT = WT)
        }));
        const WT = Math.abs(Date.now() - mT);
        return Math.max(UT, WT)
      }
    }
    class eT {
      constructor(TT) {
        this.storeForMs = TT, this.clickDownDurations = new bT.e
      }
      registerClickDownDuration(TT) {
        this.clickDownDurations.enqueue({
          dur: TT,
          atTime: Date.now()
        });
        const UT = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < UT;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(TT) {
        if (TT > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let UT = 0,
          mT = 0;
        return this.clickDownDurations.forEach((WT => {
          WT.atTime > Date.now() - TT && (UT++, mT = Math.max(mT, WT.dur))
        })), `${UT}:${mT}`
      }
    }
    var YT = mT(36579),
      JT = mT(39233),
      xT = mT(25),
      dT = mT(2875),
      wT = mT(1429),
      tT = mT(2545),
      aT = mT(4556),
      yT = mT(133),
      XT = mT(38292),
      IT = mT(38511),
      QT = mT(653),
      sT = mT(36574),
      FT = mT(11),
      PT = mT(9330),
      VT = mT(1321),
      uT = mT(208),
      CT = mT(39238),
      rT = mT(39240),
      KT = mT(39247),
      ST = mT(38327),
      GT = mT(39256),
      NT = mT(38226),
      ET = mT(3508),
      hT = mT(1752),
      DT = mT(36693),
      oT = mT(2929),
      AT = mT(36447),
      RT = mT(36451),
      TU = mT(39251),
      UU = mT(38089);
    const mU = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function WU() {
      var TT, UT;
      return !(null === (TT = (0, dT.d)().client) || void 0 === TT || null === (UT = TT.freeCameraController) || void 0 === UT || !UT.movesFly())
    }

    function zU(TT) {
      const UT = TT.on.bind(TT);
      TT.on = (TT, mT) => {
        qT.A.has(TT) ? UT(TT, mT) : UT(TT, (UT => {
          var WT;
          return null !== (WT = (0, dT.d)().client) && void 0 !== WT && WT.isReplayMode() ? function(TT) {
            return TT in mU
          }(TT) && WU() ? mT(UT) : void 0 : mT(UT)
        }))
      }
    }
    const MU = 5e3,
      gU = 1;
    let nU, HU = gU,
      kU = 0;
    const jU = !0;
    let lU = jU;
    cT.d.subscribe("_ignoreBasicBoards", (TT => {
      lU = TT
    })), (0, WT.onGameReset)((() => {
      lU = jU
    }));
    let LU = null;
    const pU = () => LU;
    let BU, ZU, cU;
    var vU, fU, qU, iU, bU, OU, eU, YU, JU;
    const xU = [2, 0, 1, 11, 3, "a", "i", 74, 131, "f", "d", 8, 255, "length", "e", 58, 42, "undefined", void 0, 207, "c", 97, 63, 6, "fromCodePoint", 7, 12, "push", 198, 4, 219, 91, 5, 227, 8191, 88, 13, 14, 49, 220, "h", 204, 9, "g", 168, 53, 132, 137, 237, 193, 79, 208, 201, "b", 71, 94, 45, !1, 130, !0, 30, 157, 125, 101, 180, 99, 215, 189, 225, 166, 37, 16, 512, 229, 72, 46, 118, 15, 143, 98, 217, 158, 86, 127, 128, 226, 147, 151, 107, 1023, 31, 18, 139, 181, 32, 24, 10, 19, 64, 27, 65535, 48, 110, 114, 163, 76, 218, 67, null, 243, 203, 44, 70, 115, 256, 232, 100, 186, 117, 40, 155, 33554432, 67108864, 25];

    function dU(...TT) {
      return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = function(...TT) {
        for (yU(TT[xU[13]] = xU[2], TT[xU[5]] = '6u7!4*v`@_]ca~b+RK[gIOtf5$k"Ts2wW,LQjD;Z&SVH9Yp=E(n?r3{x1#MomdF>XBqAhyU0}C.)JPzel/|<%:Gi^N8', TT[xU[0]] = "" + (TT[xU[1]] || ""), TT[xU[4]] = TT[xU[0]].length, TT[xU[10]] = [], TT[xU[8]] = xU[1], TT[xU[9]] = xU[1], TT[xU[7]] = -xU[2]), TT[xU[3]] = xU[1]; TT[xU[3]] < TT[xU[4]]; TT[xU[3]]++)
          if (TT[xU[6]] = TT[xU[5]].indexOf(TT[xU[0]][TT[xU[3]]]), TT[xU[6]] !== -xU[2])
            if (TT[xU[7]] < xU[1]) TT[xU[7]] = TT[xU[6]];
            else {
              yU(TT[xU[7]] += TT[xU[6]] * xU[31], TT[xU[8]] |= TT[xU[7]] << TT[xU[9]], TT[xU[9]] += (TT[xU[7]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
              do {
                yU(TT[xU[10]].push(TT[xU[8]] & xU[12]), TT[xU[8]] >>= xU[11], TT[xU[9]] -= xU[11])
              } while (TT[xU[9]] > xU[25]);
              TT[xU[7]] = -xU[2]
            } return TT[xU[7]] > -xU[2] && TT[xU[10]].push((TT[xU[8]] | TT[xU[7]] << TT[xU[9]]) & xU[12]), wU(TT[xU[10]])
      }(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
    }

    function wU(...TT) {
      return TT[xU[13]] = xU[2], typeof iU !== xU[17] && iU ? (new iU).decode(new bU(TT[xU[1]])) : typeof OU !== xU[17] && OU ? OU.from(TT[xU[1]]).toString("utf-8") : JU(TT[xU[1]])
    }

    function tU(...TT) {
      if (TT[xU[13]] = xU[4], TT[xU[1]] === function(...TT) {
          return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = function(...TT) {
            for (yU(TT[xU[13]] = xU[2], TT[xU[5]] = 'SsP#TmtipjABkWrFRnhQUlgbdDKVJqIEfMNXCacHLoGO9&1=Yz*eZv|;3$~/5u^,?.w4_27{)`>6y"<@}x([!]%+8:0', TT[-xU[25]] = "" + (TT[xU[1]] || ""), TT[xU[4]] = TT[-xU[25]].length, TT[-xU[38]] = [], TT[xU[32]] = xU[1], TT[-xU[33]] = xU[1], TT[xU[25]] = -xU[2]), TT[xU[30]] = xU[1]; TT[xU[30]] < TT[xU[4]]; TT[xU[30]]++)
              if (TT[xU[6]] = TT[xU[5]].indexOf(TT[-xU[25]][TT[xU[30]]]), TT[xU[6]] !== -xU[2])
                if (TT[xU[25]] < xU[1]) TT[xU[25]] = TT[xU[6]];
                else {
                  yU(TT[xU[25]] += TT[xU[6]] * xU[31], TT[xU[32]] |= TT[xU[25]] << TT[-xU[33]], TT[-xU[33]] += (TT[xU[25]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                  do {
                    yU(TT[-xU[38]].push(TT[xU[32]] & xU[12]), TT[xU[32]] >>= xU[11], TT[-xU[33]] -= xU[11])
                  } while (TT[-xU[33]] > xU[25]);
                  TT[xU[25]] = -xU[2]
                } return TT[xU[25]] > -xU[2] && TT[-xU[38]].push((TT[xU[32]] | TT[xU[25]] << TT[-xU[33]]) & xU[12]), wU(TT[-xU[38]])
          }(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
        }(xU[79])) return TT[xU[2]] + TT[xU[0]]
    }

    function aU() {}

    function yU() {
      yU = function() {}
    }

    function XU(TT) {
      function UT() {
        return TT.pY.RUT(TT.VV)
      }
      zU(TT.inputs.down), zU(TT.inputs.up);
      for (const WT of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const UT = (UT, mT) => {
          var zT, MT;
          if (WU()) {
            var gT;
            const zT = mU[WT];
            var nT, HT;
            if (zT) null === (nT = (0, dT.d)().client) || void 0 === nT || null === (HT = nT.freeCameraController) || void 0 === HT || HT.handlefreeCamKeyPress(zT, UT, mT);
            return void(mT || null !== (gT = (0, dT.d)().client) && void 0 !== gT && gT.isReplayMode() || (TT.pY.zmT()[WT] = !1))
          }
          if (null !== (zT = (0, dT.d)().client) && void 0 !== zT && null !== (MT = zT.freeCameraController) && void 0 !== MT && MT.isKeyPressOverriden(UT)) return;
          TT.pY.zmT()[WT] = mT
        };
        TT.inputs.down.on(WT, (TT => UT(TT, !0))), TT.inputs.up.on(WT, (TT => UT(TT, !1)))
      }
      TT.inputs.down.on("crouch", (() => {
        if (WU()) return;
        if (!TT.kY.canCrouch) return;
        const UT = TT.pY.zmT();
        xT.b.get("clientEscMenuOptions").crouchIsToggle && (UT.crouchToggled = !UT.crouchToggled && !UT.padSneakToggled), UT.padSneakToggled = !1
      }));
      const mT = () => {
        const TT = UT();
        TT.isGun() && TT.inaccuracyCalculator.jump()
      };
      TT.inputs.down.on("jump", (TT => {
        WU() || (mT(), BU(TT))
      }));
      for (const WT of qT.l) TT.inputs.down.on(WT, (TT => {
        var UT, mT;
        null !== (UT = (0, dT.d)().client) && void 0 !== UT && null !== (mT = UT.freeCameraController) && void 0 !== mT && mT.handlefreeCamKeyPress(WT, TT, !0) && (TT.preventDefault(), TT.stopPropagation())
      })), TT.inputs.up.on(WT, (TT => {
        var UT, mT;
        null !== (UT = (0, dT.d)().client) && void 0 !== UT && null !== (mT = UT.freeCameraController) && void 0 !== mT && mT.handlefreeCamKeyPress(WT, TT, !1) && (TT.preventDefault(), TT.stopPropagation())
      }));
      TT.inputs.down.on("recordGame", (() => {
        var TT, UT;
        null === (TT = (0, dT.d)().client) || void 0 === TT || null === (UT = TT.gameRecorder) || void 0 === UT || UT.toggleRecording()
      })), TT.inputs.down.on("recordClip", (() => {
        var TT, UT;
        (0, YT.c)() || null === (TT = (0, dT.d)().client) || void 0 === TT || null === (UT = TT.gameRecorder) || void 0 === UT || UT.saveClip()
      }));
      for (const WT of qT.A) TT.inputs.down.on(WT, (() => {
        var TT;
        if ((0, JT.d)()) return;
        if ("replayViewerOpen" === WT) return void ZT.j.EZ("replayViewer|requested", "toggle");
        const UT = null === (TT = (0, dT.d)().client) || void 0 === TT ? void 0 : TT.gameReplayer;
        ((0, YT.c)() || null !== UT && void 0 !== UT && UT.isReplayMode()) && (null === UT || void 0 === UT || UT.handleAction(WT))
      }));
      const gT = new OT(3e4),
        lT = new eT(4e4);
      let LT = 0;
      const fT = TT => {
          let UT = 0,
            mT = null;
          const WT = UT => null !== UT && UT === mT && (mT = null, TT(), !0);
          return {
            press: () => (UT++, (0, CT.d)() || (WT(mT), mT = UT), UT),
            owns: TT => TT === mT,
            release: WT
          }
        },
        bT = (TT, mT) => {
          mT && KU(pT.b.TouchDownFirePrimary), TT ? PT() : ((0, IT.e)(), UT().hmT()), mT || KU(pT.b.DownFirePrimary), rU(!0), gT.click();
          const zT = gT.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            MT = gT.getMaxClickSeparationInMs(1e4) < 20,
            nT = gT.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (zT || MT || nT) {
            let TT;
            if (zT) TT = 30;
            else if (MT) TT = 50;
            else {
              if (!nT) throw new Error("???");
              TT = 70
            }(0, WT.sendColyMessage)(jT.Dj, TT)
          }
        },
        aT = new rT.d,
        yT = fT((() => {
          rT.d.stopRunning();
          const TT = Date.now() - LT;
          lT.registerClickDownDuration(TT), UT().GmT(), KU(pT.b.UpFirePrimary), rU(!1);
          const mT = lT.clickDownDurationsCheck(4e4);
          (0, WT.sendColyMessage)(jT.ig, mT)
        }));
      let XT = 0;
      TT.inputs.down.on("primary-fire", (function(TT) {
        XT = yT.press(), yT.owns(XT) && (LT = Date.now(), Math.abs(performance.now() - TT.timeStamp) > 5e3 || (bT(TT.altKey, "changedTouches" in TT), BU(TT)))
      })), TT.inputs.up.on("primary-fire", (function(TT) {
        yT.release(XT) && BU(TT, !0)
      }));
      const QT = () => {
          UT().XkT(), KU(pT.b.DownFireSecondary), rU(!0), TT.xTT && !TT.xTT.position && (0, kT.i)()
        },
        sT = fT((() => {
          UT().SmT(), KU(pT.b.UpFireSecondary), rU(!1)
        }));
      let FT = 0;
      TT.inputs.down.on("alt-fire", (function(TT) {
        FT = sT.press(), sT.owns(FT) && (QT(), BU(TT))
      })), TT.inputs.up.on("alt-fire", (function(TT) {
        sT.release(FT) && BU(TT, !0)
      }));
      const PT = () => UT().skT();
      TT.inputs.down.on("mid-fire", (() => {
        (0, CT.d)() || PT()
      }));
      const GT = TT => {
          (0, WT.sendColyMessage)(jT.fh, TT, !0)
        },
        nU = TT => {
          (0, WT.sendColyMessage)(jT.ih, {
            vn: TT,
            fn: jU()
          }, !0)
        };
      for (const WT of ["SpecialAction1", "SpecialAction2"]) TT.inputs.down.on(WT, (() => {
        GT(WT)
      })), TT.inputs.up.on(WT, (() => {
        nU(WT)
      }));
      const kU = () => {
        const TT = UT();
        TT.isGun() && TT.reload(Date.now())
      };
      TT.inputs.down.on("ReloadGun", kU);
      const jU = () => {
        let UT = "a";
        return TT.physics.testSolid.toString().includes("vL") || (UT = "b"), UT
      };
      TT.inputs.down.on("OpenInventory", (TT => {
        TT.preventDefault(), (0, hT.v)(TT, "inventory", (0, KT.c)((0, dT.h)()))
      })), TT.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const lU = TT => {
        ZT.j.EZ("DropItemKeyPressed", TT)
      };
      TT.inputs.down.on("DropItem", (() => {
        lU(TT.pY.zmT().crouch)
      })), TT.inputs.down.on("OpenShop", (UT => {
        (0, YT.c)() || "inGame" === xT.b.get("gameState") && (0, hT.s)(UT, BT.k.SHOP, !(0, zT.d)(TT.kY.shopInfo))
      })), TT.inputs.down.on("OpenLobbyLeaderboard", (UT => {
        (0, YT.c)() || "inGame" === xT.b.get("gameState") && (0, hT.s)(UT, BT.k.LOBBY_LEADERBOARD, (0, TU.b)(TT.kY))
      })), TT.inputs.down.on("HideUi", (() => {
        ZT.j.EZ("showUi", !1)
      })), TT.inputs.up.on("HideUi", (() => {
        ZT.j.EZ("showUi", !0)
      }));
      const pU = TT => {
        0 === TT && (TT = 10), ZT.j.EZ("setSelectedInventorySlotI", TT - 1), ZT.j.EZ("numkeyPressed", TT)
      };
      for (let WT = 1; WT <= 10; WT++) TT.inputs.down.on("HotBarSlot" + WT.toString(), (() => {
        pU(WT)
      }));
      TT.inputs.down.on("OpenTasksAndLeaderboard", (UT => {
        const mT = (0, DT.i)();
        mT ? (0, hT.y)(UT, !0, mT) : (0, hT.v)(UT, "retentionFeatures", !(!TT.kY._tasks && !TT.kY._availableLeaderboards))
      })), TT.inputs.down.on("OpenCodeEditor", (UT => {
        (0, hT.y)(UT, (0, tT.b)((0, wT.c)()), (() => {
          (0, tT.h)(TT.pY.Aq(TT.VV))
        }))
      })), TT.inputs.bind("ToggleFullCoordinateOverlay", "F3"), TT.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        ZT.j.EZ("toggleFullCoordinateOverlay")
      }));
      const cU = () => {
        (0, dT.d)().client.cameraController.swapCameraZoom()
      };
      TT.inputs.down.on("SwapCameraZoom", cU), TT.inputs.down.on("OpenInviteLink", (TT => {
        (0, hT.v)(TT, "inviteLink", vT.featureFlags.canUseInviteLinks)
      })), TT.inputs.bind("Y", "KeyY"), TT.inputs.down.on("Y", (TT => {
        (0, YT.c)() || ZT.j.EZ("YKeyPressed")
      })), TT.inputs.bind("X", "KeyX"), TT.inputs.down.on("X", (TT => {
        (0, YT.c)() || ZT.j.EZ("XKeyPressed")
      })), TT.inputs.down.on("OpenEmoteWheel", (() => {
        ZT.j.EZ("requestEmoteWheelHoldOpen")
      })), TT.inputs.up.on("OpenEmoteWheel", (() => {
        ZT.j.EZ("requestEmoteWheelHoldRelease")
      })), TT.inputs.down.on("Zoom", (() => {
        if ("inGame" === xT.b.get("gameState")) {
          TT.pY.getState(TT.VV, "playerCameraAdjustment").zoomKeyPressed = !0, (0, dT.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), TT.inputs.up.on("Zoom", (() => {
        TT.pY.getState(TT.VV, "playerCameraAdjustment").zoomKeyPressed = !1
      })), IU();
      const vU = TT => function() {
        return ZU(), TT(...arguments)
      };

      function fU(TT) {
        "inGame" !== xT.b.get("gameState") || (0, hT.m)() || (ZT.j.EZ("ctrlCrouchWithoutFullscreen"), TT.preventDefault())
      }
      LU = {
        primaryFireDown: vU((TT => {
          const UT = yT.press();
          return yT.owns(UT) && (LT = Date.now(), bT(!1, !1), TT && aT.start()), UT
        })),
        primaryFireUp: vU((TT => {
          yT.release(TT)
        })),
        altFireDown: vU((() => {
          const TT = sT.press();
          return sT.owns(TT) && QT(), TT
        })),
        altFireUp: vU((TT => {
          sT.release(TT)
        })),
        jumpDown: vU(mT),
        specialActionDown: vU(GT),
        specialActionUp: vU(nU),
        reloadGun: vU(kU),
        dropItem: vU(lU),
        swapCameraZoom: vU(cU),
        pickBlock: vU(PT)
      }, TT.inputs.down.on("ctrlCrouch", fU), TT.inputs.up.on("ctrlCrouch", fU), TT.inputs.bind("ctrlCrouch", "ControlLeft");
      const qU = TT => {
        "inGame" === xT.b.get("gameState") && TT.ctrlKey && !(0, hT.m)() && TT.preventDefault()
      };
      document.addEventListener("keydown", qU), document.addEventListener("keyup", qU), document.addEventListener("keypress", qU), TT.inputs.bind("Alt", "AltLeft", "AltRight"), TT.inputs.down.on("Alt", (TT => {
        TT.preventDefault()
      }));
      const iU = UT => (0, NT.g)(TT, UT),
        bU = UT => (0, NT.j)(TT, UT),
        OU = [0, 0, 0],
        eU = [0, 0, 1];
      TT.on("afterRender", (UT => {
        RT.k.frame(UT, TT.camera.heading, TT.camera.pitch, RT.f.drawn), (0, MT.e)(TT.camera.heading), (0, NT.l)(TT, OU, eU), (0, dT.d)().client.triggerGameCallback("onAfterRender", UT, {
          cameraHeading: TT.camera.heading,
          cameraPitch: TT.camera.pitch,
          cameraPosition: OU,
          cameraDirection: eU,
          tanHalfFovX: (0, NT.c)(TT),
          tanHalfFovY: Math.tan(TT.GB.HA().fov / 2),
          screenBandPct: {
            x: ET.d,
            y: (0, ET.i)()
          },
          projectWorldPosToScreenPos: iU,
          projectWorldPosToViewport: bU
        })
      })), TT.camera.kF = (0, AT.startLookDebug)("js"), TT.inputs.YF = AT.noteLookDroppedCopy, (0, oT.r)("remesh") && (0, UU.n)(TT), TT.on("beforeInputs", (() => {
        if ((0, JT.d)()) return TT.inputs.yG.dx = 0, void(TT.inputs.yG.dy = 0);
        if (TT.camera.yG.dx += TT.inputs.yG.dx, TT.camera.yG.dy += TT.inputs.yG.dy, 0 !== TT.inputs.yG.dx || 0 !== TT.inputs.yG.dy) {
          TT.pY.getState(TT.VV, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        TT.inputs.yG.dx = 0, TT.inputs.yG.dy = 0
      }));
      let YU = 0;
      const JU = [0, 0, 0],
        xU = [0, 0, 0],
        dU = {
          base: JU,
          max: xU
        },
        wU = TT => {
          const UT = uT.f.droppedBlockSize / 2;
          return [0, 1, 2].every((mT => TT[mT] >= JU[mT] - UT && TT[mT] <= xU[mT] + UT))
        };
      TT.on("Cl", (function(UT) {
        ZT.j.EZ("noaTick", UT);
        const mT = (0, dT.d)().client;
        if (mT.triggerGameCallback("Cl", UT), mT.isClientGameSessionActive()) try {
          HT.d.Cl(UT)
        } catch (gT) {
          console.error("Error ticking audio entities", gT)
        }
        if (!TT.pY.oUT(TT.VV).isAlive) return;
        Date.now() - YU > 9e3 && (! function() {
          const TT = (0, dT.h)();
          "number" === typeof TT.kY.speedMultiplier && "number" === typeof TT.kY.jumpAmount && (0, WT.sendColyMessage)(jT.Fh, {
            Mn: (0, VT.e)(TT.kY.speedMultiplier),
            gn: (0, VT.b)(TT.kY.jumpAmount),
            nn: (0, VT.e)(TT.kY.crouchingSpeed),
            Hn: (0, VT.e)(TT.kY.walkingSpeed),
            kn: (0, VT.e)(TT.kY.runningSpeed),
            jn: (0, VT.b)(TT.vTT),
            Ln: TT.pY.gUT(TT.VV).jumpForce,
            pn: TT.pY.FN(1).width,
            Bn: TT.pY.FN(1).height,
            Zn: TT.pY.rK(1).Zn
          }, !0)
        }(), YU = Date.now());
        const zT = TT.pY.zmT();
        if ((zT.jump || zT.forward || zT.backward || zT.left || zT.right || zT.sprint) && ZT.j.EZ("usedKeyboard"), TT.pY.XUT(TT.VV) && !0 === TT.kY.canPickUpItems) {
          const UT = TT.pY.Aq(TT.VV),
            mT = (0, iT.r)(HU),
            zT = (0, iT.t)(HU);
          JU[0] = UT[0] - mT, JU[1] = UT[1] - .6 * zT, JU[2] = UT[2] - mT, xU[0] = UT[0] + mT, xU[1] = UT[1] + uT.f.Fc + .6 * zT, xU[2] = UT[2] + mT;
          const MT = TT.pY.unT(dU, TT.pY.names.autoRotate),
            {
              itemDropPrediction: gT
            } = (0, dT.d)().client,
            HT = WT.offlineInputReplay.holdsInput();
          if (MT.length > 0)
            for (const lT of MT) {
              const UT = TT.pY.getState(lT, "itemState");
              if (void 0 === UT || Date.now() - UT.creationTime < 500) continue;
              let mT = lT,
                zT = null;
              if (UT.wz) {
                const TT = gT.pickupTarget(lT, wU, HT);
                if (null === TT) continue;
                ({
                  Fn: mT,
                  Cn: zT
                } = TT)
              }
              const MT = TT.pY.getState(mT, "itemState");
              if (MT.wz && null === zT) continue;
              let LT = 0,
                pT = null,
                BT = !1;
              if (0 === MT.amount) BT = !0;
              else {
                const {
                  amountPickedUp: UT
                } = TT.pY.aUT(TT.VV).pickUpItem({
                  name: MT.name,
                  typeObj: MT.typeObj,
                  amount: MT.amount,
                  attributes: MT.attributes
                });
                if (LT = UT, 0 === LT) continue;
                pT = ST.b.pickUp(MT, LT), MT.amount -= LT, MT.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === MT.amount ? BT = !0 : MT.creationTime = Date.now() + MU
              }
              const ZT = (0, dT.d)().client.inventoryPrediction.record(pT);
              (0, WT.sendColyMessage)(jT.ch, {
                Fn: null === zT ? mT : "",
                Pn: LT,
                Vn: kT.f,
                Pg: ZT,
                Cn: zT
              }, !0), BT && (HT && gT.onPickedUpOffline(mT, ZT, zT), null === zT && TT.pY.deleteEntity(mT));
              nT.c.play("pickUp", uT.f.pickupSoundVol).rate(1 + Math.random() * uT.f.pickupSoundRateVariation)
            }
        }
        if (!TT.pY.bUT(TT.VV)) return;
        const MT = TT.inputs.yG.lUT;
        if (0 !== MT) {
          const UT = MT > 0 ? 1 : -1;
          TT.inputs.state["mid-fire"] || TT.inputs.state.Alt || !TT.kY.useInventory ? (TT.inputs.state["mid-fire"] && ZT.j.EZ("requestEmoteWheelClose"), (0, dT.d)().client.cameraController.handleScrollZoom(UT)) : ZT.j.EZ("ScrollInventorySlot", UT)
        }
      })), cT.d.subscribe("droppedItemScale", (TT => {
        HU = "number" === typeof TT && isFinite(TT) ? TT : gU
      }))
    }

    function IU() {
      const TT = (0, dT.h)();
      if (TT)
        for (const UT in qT.v) {
          TT.inputs.unbind(UT);
          for (const mT of qT.v[UT]) TT.inputs.bind(UT, mT)
        }
    }
    yU(vU = {}, fU = ["v_rsmLLaP[{Q/lqj", "Ya<P;|.LB{qTO}5T_u", "VK,vHC>=2[>4V~j;KpA@xZv[naRe6", "M0wJmL9[z[(", '1EY]q%H~v]?5";3T;hw_&(22ng0U&42KMD,?a', '+a@,BZV2.B(yT4/")oyn:0ape+D', ":C,{ingQl>_!>|&w,fL}yxlGF[])z(`gY#f($", "E#i4y.|p7#2Fu", ':o{`.Eos9bL"z/tT0vFrq/e:4{^Xwbag{#jxen#SCB)c8ymj5+vJY|1Gyg=cu', "k{*J@e;5{X%a1ohw74L}EZ_$=3T}!|sKxfh*Uj``o1^#*R/&}hs]QCAfxM#", '*[7"RjK3eaNA3$&Dd{5CW0O3|gCcKm9ZC1>rW=S~e[&Tt*J;^Zx(:nQQ4', "paYw=)bM.KSJ<kNQL!q@", "kf0_E|_ykbbe1mZ[vQB{>eifcB7Me;2VO_FJ:rB)Q#~Me7z&dFm`K/[@6a", '~&eJ2zD~$K?[%o@;~47"G0K~=[#J6', 'NI~.M?L.=>z3h"8TZhEvVd0S3~BW{D3Qc0>T4.h24', 'n#o.M}BSPb:1s4dfVD.W?Z_$b><U}"bk', ".ws]=dk@soF[Eo}k!.#{c<*$GX6,v/BD.Ivr3Dx:j{Ebi;Z[", '%oVsl#i`BaReAo!K:Ye(2=w/g_+x&"Ygqf"sqp``fIHl6', "%$d]qmAQ)1S`vdPgf&;J1pnpZ~ReWEsKumB{dZ;j@~1", '!sh]N;z.kb7D"k.g_h6_Uy#=>>OxE=tS#k_{k&L2HI,O,Ejw|T{4ux6', 'lTX(%Y5X7m(5I!42<?,"Zhf`h{*eT<"fe?GTy/0?K>B$pd.kWfWv4G&7', "tB4P4}QQdF3Q6!it}hOT%r1[?_qPW!b&T0hwKr.rZ~qCS(22.bs`0yKu", "k+Fx.#6", 'm{/?lx?=e38j(}wDu#,"Q).2`I3Qj<+Zu(l(,zq[R[?o@"};<EYxT', "4>~]eJ(uz+w5<boTPYW(yy]pf~Qec+NRXv=rin:QDgXQH72Qlo<@", "w_YwAEoQkoVbS}xQ)6", "Afxrp||lVFJ1,4sf", 'lBzCV(Kgdo!et|K"I_,"WQbj93d1m<Aw[k&("', 'Svn}7Gc>^Ipx^<HZMK?3@mV7$F5I_%="AC:kg<}[z+nCh4e&=0^C{ZV7', "Ip`{]m;r4", "5?HW4}y`vXfJu", "R05Cgy^54~83pdS$SI~.|,yfL_x`u", 'ohS{mU65Vcip=UI&fm(?aESgj_{CXmVk*muvBeui6[mO"|9Zt.ZC[', ';Fj`?($SfXdq{$bkCD^v#Z,gq#47./+ZJK*w"QqMd@((B4ek9BY.vF(`CB[Lu', "5sh]R/65@M=4Z7i&y!l(a", "ZkQ}1mSQ=>;TMD7KI&7),(3~AXNPn;>KMbxr8{f3e@1$NmuwYaF`", "P$~.op[7", "=vS?Bm$=xXRDW<@gAT}(f07V}IVbMdYg&f6_8C*SOg2y[7H;", "D?3.enHgp@PPQ7![ACm.+xg39OUq2DU$^v,):#+u", '<o1C`Ghl9FM1>;F5r#u"/jhl6q&r~}1Lvk@vkoNu', "paF`E?65Cbs}7UAD^CCvNCH`cBWri7pg", "caasX%ifoc,FfbC;$u", '.BU("&r7', ",?Tw{%j[8bS", '`(_zyj%5gg]v2(uK[p8PmP)>doc"P5*2(v!', "*(Tw%r`3$M6=u", "XvU`CFK`g_TeD4lk/oy.M}e#Yc", "zKUxz#[jXa(yq~@$6q7", "BD2wrU0yB#MbU~cZR[0(io@@2[_{.yGSq6", "y{gs<Fug$F/AD4KkDkY]`/T[*", "th/{g/:Q+q}cxUW[GZhsN;(`aO]I#EU$,E6,[", '1FzJio"Qe14M)kY;Qv*.6}|MgmN/7*dVAw(vT', "0c?Wf:aU<gcv1<AD", "Wv<@,lHu", 'wpMs|jF7IgCC=U4;fkwJTl"`;MHqT!4H@u', '_#TP+;9X6[Pu~}];taiCYh>=/mb2"nBf`frP`j2rW_7z]D]', "~(DJFmA?p@:3gb7H.f7", 'OmP`O0W2:{EK=|it7OBvU.t7pc]EV$dj6>$2D=V5+OXrI+l"', "sDiC1Z0s3~:.g<NTa&|WgnWr/+OxT!", 'u{Z4;hj5`IJp=7X2)?%.GnjXMb^>]*oj`pR"@j0?*', "g[Ur~JUakFgvKmkj", "*{k}meUpTO+}m}]", "uWo3_EZgp3v{I+tSsH4.h3T@`", 'Goy]y39lLaK"7$*Dk{J`sQ"SmKWJ60@wxEl_<nbpAaZeg"a', '_ke_(1=uF>TeRRNtv{>_9dz5]b+"#4621L({)n&pe3XUX",5|YiT_jJvNKV', 'Xo*nizp[db0PQ7bZA_V?g0>="BZC)bVgvhsJopB~K{Re~*G&wh!', "4>5(xpn2xXaR(E4HB!+J~/b@rg.QR!>D$u", "w&Pw)xQ>}M9r?b6syI}(T<SgYo%n~}a", "AYq*6MP`Xa7?&o8jU{_zuES#4{/mZ|B5UKw_k#U[TOk", "FwFxA3AQQ#;CT=4;pH=4", "5h[)3P6", '(a)*Cx95Ba9yP$OS:L]WpdNKVK=J^=R"zF&Cw0%l(+%1zy"K#B9.%o&7', "{?rPBp]rD~;eyEc$oo!W`FNK]xkEFy8SAC=ryE6", "ME&?508p1MY]/5Vwt{Qs3Z^pq+;e1m8VuH8Wj{I@>>}lp~J;au", "GYa`xU<`m1nyS4:t>Ku?d?s`!", "d0+_Py(gv][)?|3Q?vB{Rjt5`", 'D#gsH)Rppcc{M([&NC6_ueW[Nbv7l"E&$IQ});:`mFn[=7', "zYh*:<Bs%{>oI=XV8E/vt&y#`x4fo;O&", "+D1({16", "PToW.j7MhX!DG$jwhhk?%Y@X%Xe3I+Z$bkiCajT@4~4}9Rb", '3a,v/0vVu+n1a+mfJKq@4FMl)Kec"b|"1YG4', ".Fe{vL]2jXzcd5CZQ+N?l;^5=m8p)UufNo5(Dd?f9@", "`4Z_3%pp<a!vm!bIjvXvk", "$_VWAEvrsFMP~}0;|opx(Uy~mcz>ebJZuqPrsd6", "Z?X_ZdS#w+7)*j0w)b{J=UB#X>{wP4", 'xhG0LC&5%_EK";mjn{P`|z2[NI25/jujfhPka.L7#Fq>.(Q[zC,)*E6', "#Y])5J:#cbz/L~3S>&6_037@j_=Cu", "t_:k(%1h(#}A=7~kj0o.t;;az3O!AM);tBB{RjfssoqCu", 'Mk"WH1<`5K<.B({S3&&C0jrX3g~xq~g"CFF_9>H~l+ZK=7', "2Hyn6}W7o1SCr!2f@s*wSDBQF>Eb}!^s+&V?{>7MA#|sr+XK]WTs@m6", "H0?]=d.MHcg|FDG&]Ho3E?+=sO,}(4#T", '9F+J#}$s`]e>"bSZkD!', "NBlv7/~$gae@~RiL$+E(`G<QQ__}M~/k:?34`e3=yXV]Y}&;[[$?8o6", "N!l_lJ:f6qjOF(h5w{]sJFnpF1(yF$hD:CD`", "E_u?*L,S2O/uAbQK6+|W7}iS>@", 'pa(v5=)sCM(l^5&k/bF4rUfs"ITEu', "0w_2aGIrboyP34", "2&tw#>=>i~sB!nh;%!?@Fm}2+[CWn(;;_DOw4pYgMb!=u", "8JN)Axbs", "o_R{ue97", 'kl["bmFg', "AhS}p,[_>u@9$wO8&^gq||r!/2f3Y.O8/IVv/&AP:i3CXR&h.h{~q", "9&c0`+[WRS}L|;Nn$J(V,,=8MGHh{1NnL*Fjyyws$`}Z~i|d4A", 'd2["1}ZXkH{i+T@::2CA>n1g]*8!#1h>WB/!c', "O@p.", "n?3.t#_u", "$jYpl/}c", "78`lG]E@", "sSs1SJsd", "c.Ti~]6", "!^`ll]m@", "~cptdHs+", "&{(4", ']#N5*g296!"igX~gp8D4', "2Nj6O2AB*1SJ+PX==AR?", "jk]eudOC?,n*S;:I2eXj", "^s3?GeM2yj$|u56=2U<j", ":ST^%P10", "ag9BP6GM", ']"+],p&M', "d~^h$", ']"+]nLVR', "ZJ9?I", "hsWbluO`lD!,zA", "eeGY_&AM0,nKkA", "_^4<!^Av6Xn>{J", "!}1|q|NHRv{~cb", "uDK7VOmRuxQ~=c", "y&X{y21C7</", ">S%gRNq_", "(27v/x!C", "0:1v);*!^e{|R<NlF&MnQQazVsi7Y=NlV#DqVF0A?,7tpLF:=:jHn", "mp@bsH#!?eiFPC^g+k6BXX18w%z~W_^gFrqV99Tc+si}h<Py3x", "d}7v|[_A(8MIU1V~~}pm]Q|C{KbW#|F]cXRWq", "tC(J", "mj#.ja(C", "H&Vc", "Wk},MrAV", "[W(Fzka0", "thAI?tpW", "kC:G947E"]), yU(qU = function(...TT) {
      yU(TT[xU[13]] = xU[1], TT[xU[10]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], TT[xU[14]] = xU[18], TT[xU[9]] = []);
      try {
        yU(TT[xU[14]] = Object, TT[xU[9]][xU[27]]("".__proto__.constructor.name))
      } catch (fU) {}
      TT: for (TT[-xU[15]] = xU[1]; TT[-xU[15]] < TT[xU[10]][xU[13]]; TT[-xU[15]]++) try {
        for (TT[xU[14]] = TT[xU[10]][TT[-xU[15]]](), TT[xU[16]] = xU[1]; TT[xU[16]] < TT[xU[9]][xU[13]]; TT[xU[16]]++)
          if (typeof TT[xU[14]][TT[xU[9]][TT[xU[16]]]] === xU[17]) continue TT;
        return TT[xU[14]]
      } catch (fU) {}
      return TT[xU[14]] || this
    }() || {}, iU = qU.TextDecoder, bU = qU.Uint8Array, OU = qU.HB, eU = qU.String || String, YU = qU.Array || Array, JU = function(...TT) {
      return yU(TT[xU[13]] = xU[1], TT[-xU[28]] = new YU(xU[84]), TT[xU[29]] = eU[xU[24]] || eU.fromCharCode, TT[xU[14]] = []),
        function(...UT) {
          for (yU(UT[xU[13]] = xU[2], UT[-xU[21]] = xU[18], UT[xU[0]] = xU[18], UT[xU[20]] = UT[xU[1]][xU[13]], TT[xU[14]][xU[13]] = xU[1]), UT[xU[19]] = xU[1]; UT[xU[19]] < UT[xU[20]];) yU(UT[xU[0]] = UT[xU[1]][UT[xU[19]]++], UT[xU[0]] <= xU[83] ? UT[-xU[21]] = UT[xU[0]] : UT[xU[0]] <= 223 ? UT[-xU[21]] = (UT[xU[0]] & xU[90]) << xU[23] | UT[xU[1]][UT[xU[19]]++] & xU[22] : UT[xU[0]] <= 239 ? UT[-xU[21]] = (UT[xU[0]] & xU[77]) << xU[26] | (UT[xU[1]][UT[xU[19]]++] & xU[22]) << xU[23] | UT[xU[1]][UT[xU[19]]++] & xU[22] : eU[xU[24]] ? UT[-xU[21]] = (UT[xU[0]] & xU[25]) << xU[91] | (UT[xU[1]][UT[xU[19]]++] & xU[22]) << xU[26] | (UT[xU[1]][UT[xU[19]]++] & xU[22]) << xU[23] | UT[xU[1]][UT[xU[19]]++] & xU[22] : (UT[-xU[21]] = xU[22], UT[xU[19]] += xU[4]), TT[xU[14]][xU[27]](TT[-xU[28]][UT[-xU[21]]] || (TT[-xU[28]][UT[-xU[21]]] = TT[xU[29]](UT[-xU[21]]))));
          return TT[xU[14]].join("")
        }
    }()), dU(xU[65]) in aU && function(...TT) {
      TT[xU[13]] = xU[1]
    }(), yU(cU = (...TT) => {
      yU(TT[xU[13]] = xU[2], TT[xU[38]] = xU[1]);
      for (const UT in TT[xU[1]]) TT[xU[38]]++;
      return TT[xU[38]]
    }, ZU = () => {
      if (kU++ === xU[32]) {
        if ((xU[1], fT.o)()) {
          function TT(...TT) {
            for (yU(TT[xU[13]] = xU[2], TT[xU[2]] = 'mch3eXgHMUAKWBZNCFPf0n*=u>v1(x<54~.%yw`/+{2GSEbljVtYaR@!J}iTQI)$kLD"9:d_p^O#qos&z,r678?[];|', TT[xU[0]] = "" + (TT[xU[1]] || ""), TT[xU[20]] = TT[xU[0]].length, TT[xU[15]] = [], TT[xU[14]] = xU[1], TT[xU[31]] = xU[1], TT[xU[25]] = -xU[2]), TT[xU[40]] = xU[1]; TT[xU[40]] < TT[xU[20]]; TT[xU[40]]++)
              if (TT[xU[42]] = TT[xU[2]].indexOf(TT[xU[0]][TT[xU[40]]]), TT[xU[42]] !== -xU[2])
                if (TT[xU[25]] < xU[1]) TT[xU[25]] = TT[xU[42]];
                else {
                  yU(TT[xU[25]] += TT[xU[42]] * xU[31], TT[xU[14]] |= TT[xU[25]] << TT[xU[31]], TT[xU[31]] += (TT[xU[25]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                  do {
                    yU(TT[xU[15]].push(TT[xU[14]] & xU[12]), TT[xU[14]] >>= xU[11], TT[xU[31]] -= xU[11])
                  } while (TT[xU[31]] > xU[25]);
                  TT[xU[25]] = -xU[2]
                } return TT[xU[25]] > -xU[2] && TT[xU[15]].push((TT[xU[14]] | TT[xU[25]] << TT[xU[31]]) & xU[12]), wU(TT[xU[15]])
          }

          function UT(...UT) {
            return UT[xU[13]] = xU[2], typeof vU[UT[xU[1]]] === xU[17] ? vU[UT[xU[1]]] = TT(fU[UT[xU[1]]]) : vU[UT[xU[1]]]
          }

          function mT(...TT) {
            yU(TT[xU[13]] = xU[1], TT[xU[20]] = function(...UT) {
              return UT[xU[13]] = xU[0], TT[-xU[58]]({}, UT[xU[1]], UT[xU[2]])
            }, TT[-xU[58]] = function(...UT) {
              if (yU(UT[xU[13]] = xU[4], UT[xU[5]] = {}), UT[xU[1]][UT[xU[2]] + UT[xU[0]]] !== xU[18]) return UT[xU[1]][UT[xU[2]] + UT[xU[0]]];
              if (UT[xU[2]] === UT[xU[0]]) return xU[59];
              for (UT[xU[53]] = xU[1]; UT[xU[53]] < UT[xU[2]].length; UT[xU[53]]++) UT[xU[5]][UT[xU[2]][UT[xU[53]]]] === xU[18] && (UT[xU[5]][UT[xU[2]][UT[xU[53]]]] = xU[1]), UT[xU[5]][UT[xU[0]][UT[xU[53]]]] === xU[18] && (UT[xU[5]][UT[xU[0]][UT[xU[53]]]] = xU[1]), yU(UT[xU[5]][UT[xU[2]][UT[xU[53]]]]++, UT[xU[5]][UT[xU[0]][UT[xU[53]]]]--);
              for (UT[xU[20]] in UT[xU[5]])
                if (UT[xU[5]][UT[xU[20]]] !== xU[1]) return UT[xU[1]][UT[xU[2]] + UT[xU[0]]] = xU[57], xU[57];
              for (UT[xU[10]] = xU[2]; UT[xU[10]] < UT[xU[2]].length; UT[xU[10]]++)
                if (TT[-xU[58]](UT[xU[1]], UT[xU[2]].substr(xU[1], UT[xU[10]]), UT[xU[0]].substr(xU[1], UT[xU[10]])) && TT[-xU[58]](UT[xU[1]], UT[xU[2]].substr(UT[xU[10]]), UT[xU[0]].substr(UT[xU[10]])) || TT[-xU[58]](UT[xU[1]], UT[xU[2]].substr(xU[1], UT[xU[10]]), UT[xU[0]].substr(UT[xU[0]].length - UT[xU[10]])) && TT[-xU[58]](UT[xU[1]], UT[xU[2]].substr(UT[xU[10]]), UT[xU[0]].substr(xU[1], UT[xU[0]].length - UT[xU[10]]))) return UT[xU[1]][UT[xU[2]] + UT[xU[0]]] = xU[59], xU[59];
              return UT[xU[1]][UT[xU[2]] + UT[xU[0]]] = xU[57], xU[57]
            }, console.log(TT[xU[20]]))
          }
          UT(106) + "3" in aU && mT(), (xU[1], lT[xU[53]])("4 ")
        }
        kU = xU[1]
      }
    }), BU = function(TT) {
      function UT(...TT) {
        return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = function(...TT) {
          for (yU(TT[xU[13]] = xU[2], TT[xU[60]] = '6+@#5y{z4eFC9Xf8rp!%`$?7<YEqmWKaZMgLVAjO2J[,>|=uboHDQiB/*S_c^0.&Rs:(x"hvUI1t;lGN~]kPT3d}n)w', TT[xU[0]] = "" + (TT[xU[1]] || ""), TT[-xU[49]] = TT[xU[0]].length, TT[xU[61]] = [], TT[xU[14]] = xU[1], TT[xU[23]] = xU[1], TT[xU[43]] = -xU[2]), TT[xU[40]] = xU[1]; TT[xU[40]] < TT[-xU[49]]; TT[xU[40]]++)
            if (TT[xU[6]] = TT[xU[60]].indexOf(TT[xU[0]][TT[xU[40]]]), TT[xU[6]] !== -xU[2])
              if (TT[xU[43]] < xU[1]) TT[xU[43]] = TT[xU[6]];
              else {
                yU(TT[xU[43]] += TT[xU[6]] * xU[31], TT[xU[14]] |= TT[xU[43]] << TT[xU[23]], TT[xU[23]] += (TT[xU[43]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                do {
                  yU(TT[xU[61]].push(TT[xU[14]] & xU[12]), TT[xU[14]] >>= xU[11], TT[xU[23]] -= xU[11])
                } while (TT[xU[23]] > xU[25]);
                TT[xU[43]] = -xU[2]
              } return TT[xU[43]] > -xU[2] && TT[xU[61]].push((TT[xU[14]] | TT[xU[43]] << TT[xU[23]]) & xU[12]), wU(TT[xU[61]])
        }(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
      }
      if ((arguments[UT(xU[88])] > xU[2] && arguments[xU[2]] !== xU[18] ? arguments[xU[2]] : xU[57]) && (xU[1], GT[xU[14]])(TT)) {
        function WT(...TT) {
          for (yU(TT[xU[13]] = xU[2], TT[xU[5]] = '[dDAbc$Y9h`KwI.UPN:<(O]ukfBZz1,x_8l%mFqtSW@sH#e{5CR7E2&jJ+;!arXo>)/n0Mi34v~"6}yG^|*V=Qg?LTp', TT[xU[62]] = "" + (TT[xU[1]] || ""), TT[xU[20]] = TT[xU[62]].length, TT[xU[10]] = [], TT[xU[32]] = xU[1], TT[xU[23]] = xU[1], TT[xU[25]] = -xU[2]), TT[xU[11]] = xU[1]; TT[xU[11]] < TT[xU[20]]; TT[xU[11]]++)
            if (TT[-xU[38]] = TT[xU[5]].indexOf(TT[xU[62]][TT[xU[11]]]), TT[-xU[38]] !== -xU[2])
              if (TT[xU[25]] < xU[1]) TT[xU[25]] = TT[-xU[38]];
              else {
                yU(TT[xU[25]] += TT[-xU[38]] * xU[31], TT[xU[32]] |= TT[xU[25]] << TT[xU[23]], TT[xU[23]] += (TT[xU[25]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                do {
                  yU(TT[xU[10]].push(TT[xU[32]] & xU[12]), TT[xU[32]] >>= xU[11], TT[xU[23]] -= xU[11])
                } while (TT[xU[23]] > xU[25]);
                TT[xU[25]] = -xU[2]
              } return TT[xU[25]] > -xU[2] && TT[xU[10]].push((TT[xU[32]] | TT[xU[25]] << TT[xU[23]]) & xU[12]), wU(TT[xU[10]])
        }

        function zT(...TT) {
          return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = WT(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
        }

        function MT(...TT) {
          yU(TT[xU[13]] = xU[1], TT[xU[63]] = function(...UT) {
            return UT[xU[13]] = xU[0], TT[xU[53]]({}, UT[xU[1]], UT[xU[2]])
          }, TT[xU[53]] = function(...UT) {
            if (yU(UT[xU[13]] = xU[4], UT[xU[4]] = {}), UT[xU[1]][UT[xU[2]] + UT[xU[0]]] !== xU[18]) return UT[xU[1]][UT[xU[2]] + UT[xU[0]]];
            if (UT[xU[2]] === UT[xU[0]]) return xU[59];
            for (UT[-xU[64]] = xU[1]; UT[-xU[64]] < UT[xU[2]].length; UT[-xU[64]]++) UT[xU[4]][UT[xU[2]][UT[-xU[64]]]] === xU[18] && (UT[xU[4]][UT[xU[2]][UT[-xU[64]]]] = xU[1]), UT[xU[4]][UT[xU[0]][UT[-xU[64]]]] === xU[18] && (UT[xU[4]][UT[xU[0]][UT[-xU[64]]]] = xU[1]), yU(UT[xU[4]][UT[xU[2]][UT[-xU[64]]]]++, UT[xU[4]][UT[xU[0]][UT[-xU[64]]]]--);
            for (UT[-xU[65]] in UT[xU[4]])
              if (UT[xU[4]][UT[-xU[65]]] !== xU[1]) return UT[xU[1]][UT[xU[2]] + UT[xU[0]]] = xU[57], xU[57];
            for (UT[xU[23]] = xU[2]; UT[xU[23]] < UT[xU[2]].length; UT[xU[23]]++)
              if (TT[xU[53]](UT[xU[1]], UT[xU[2]].substr(xU[1], UT[xU[23]]), UT[xU[0]].substr(xU[1], UT[xU[23]])) && TT[xU[53]](UT[xU[1]], UT[xU[2]].substr(UT[xU[23]]), UT[xU[0]].substr(UT[xU[23]])) || TT[xU[53]](UT[xU[1]], UT[xU[2]].substr(xU[1], UT[xU[23]]), UT[xU[0]].substr(UT[xU[0]].length - UT[xU[23]])) && TT[xU[53]](UT[xU[1]], UT[xU[2]].substr(UT[xU[23]]), UT[xU[0]].substr(xU[1], UT[xU[0]].length - UT[xU[23]]))) return UT[xU[1]][UT[xU[2]] + UT[xU[0]]] = xU[59], xU[59];
            return UT[xU[1]][UT[xU[2]] + UT[xU[0]]] = xU[57], xU[57]
          }, console.log(TT[xU[63]]))
        }
        return void(zT(108) + "x" in aU && MT())
      }
      const mT = window[UT(109)];
      if (typeof mT !== UT(xU[102]) + "on" || TT instanceof mT || (xU[1], FT.F)(TT)) {
        function gT(...TT) {
          for (yU(TT[xU[13]] = xU[2], TT[-xU[104]] = 'Z_ChXepBcqnly5}&<0$i)PFS!TfE`grHvR]NU"~#:+Y>3t|o(=L7.Ajmk2u/4MK^,s8%[9W?DI*V;xQJOwa1Gbz@{d6', TT[xU[53]] = "" + (TT[xU[1]] || ""), TT[-xU[102]] = TT[xU[53]].length, TT[xU[29]] = [], TT[xU[14]] = xU[1], TT[xU[23]] = xU[1], TT[xU[43]] = -xU[2]), TT[xU[11]] = xU[1]; TT[xU[11]] < TT[-xU[102]]; TT[xU[11]]++)
            if (TT[-xU[103]] = TT[-xU[104]].indexOf(TT[xU[53]][TT[xU[11]]]), TT[-xU[103]] !== -xU[2])
              if (TT[xU[43]] < xU[1]) TT[xU[43]] = TT[-xU[103]];
              else {
                yU(TT[xU[43]] += TT[-xU[103]] * xU[31], TT[xU[14]] |= TT[xU[43]] << TT[xU[23]], TT[xU[23]] += (TT[xU[43]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                do {
                  yU(TT[xU[29]].push(TT[xU[14]] & xU[12]), TT[xU[14]] >>= xU[11], TT[xU[23]] -= xU[11])
                } while (TT[xU[23]] > xU[25]);
                TT[xU[43]] = -xU[2]
              } return TT[xU[43]] > -xU[2] && TT[xU[29]].push((TT[xU[14]] | TT[xU[43]] << TT[xU[23]]) & xU[12]), wU(TT[xU[29]])
        }

        function nT(...TT) {
          return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = gT(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
        }

        function HT(...TT) {
          TT[xU[13]] = xU[1]
        }
        if (nT(129) in aU && HT(), TT[nT(135) + nT(136)] === xU[57]) {
          function kT(...TT) {
            for (yU(TT[xU[13]] = xU[2], TT[xU[2]] = '{OVmjsndADpPTCU$<h=]IYFE9NwM,&bqZ%J[Bc!v?H/42#8xy6S~iek^0>;g@X.Rza*`13uWKl5LtGf:+_Qr)7}o"|(', TT[xU[53]] = "" + (TT[xU[1]] || ""), TT[xU[28]] = TT[xU[53]].length, TT[xU[10]] = [], TT[-xU[55]] = xU[1], TT[xU[23]] = xU[1], TT[xU[43]] = -xU[2]), TT[xU[109]] = xU[1]; TT[xU[109]] < TT[xU[28]]; TT[xU[109]]++)
              if (TT[xU[42]] = TT[xU[2]].indexOf(TT[xU[53]][TT[xU[109]]]), TT[xU[42]] !== -xU[2])
                if (TT[xU[43]] < xU[1]) TT[xU[43]] = TT[xU[42]];
                else {
                  yU(TT[xU[43]] += TT[xU[42]] * xU[31], TT[-xU[55]] |= TT[xU[43]] << TT[xU[23]], TT[xU[23]] += (TT[xU[43]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                  do {
                    yU(TT[xU[10]].push(TT[-xU[55]] & xU[12]), TT[-xU[55]] >>= xU[11], TT[xU[23]] -= xU[11])
                  } while (TT[xU[23]] > xU[25]);
                  TT[xU[43]] = -xU[2]
                } return TT[xU[43]] > -xU[2] && TT[xU[10]].push((TT[-xU[55]] | TT[xU[43]] << TT[xU[23]]) & xU[12]), wU(TT[xU[10]])
          }

          function jT(...TT) {
            return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = kT(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
          }

          function pT(...TT) {
            function UT() {}
            TT[xU[13]] = xU[1], yU(TT[xU[110]] = function(...TT) {
              for (yU(TT[xU[13]] = xU[0], TT[xU[5]] = xU[1], TT[xU[4]] = xU[1], TT[xU[20]] = new UT(xU[1]), TT[xU[32]] = TT[xU[20]], TT[xU[41]] = TT[xU[1]], TT[xU[19]] = TT[xU[2]]); TT[xU[41]] !== xU[108] || TT[xU[19]] !== xU[108];) yU(TT[xU[4]] = (TT[xU[41]] ? TT[xU[41]].val : xU[1]) + (TT[xU[19]] ? TT[xU[19]].val : xU[1]) + TT[xU[5]], TT[xU[5]] = Math.floor(TT[xU[4]] / xU[96]), TT[xU[32]].next = new UT(TT[xU[4]] % xU[96]), TT[xU[32]] = TT[xU[32]].next, TT[xU[41]] = TT[xU[41]] ? TT[xU[41]].next : xU[108], TT[xU[19]] = TT[xU[19]] ? TT[xU[19]].next : xU[108]);
              return TT[xU[5]] && (TT[xU[32]].next = new UT(TT[xU[5]])), TT[xU[20]].next
            }, console.log(TT[xU[110]]))
          }
          jT(xU[47]) + "Z" in aU && pT(), (xU[1], lT[xU[53]])("2 " + (xU[1], LT[xU[53]])(TT))
        } else {
          function BT(...TT) {
            for (yU(TT[xU[13]] = xU[2], TT[xU[2]] = 'x0}=[(489/vduC1y_<#p*zZs~{NMG%26$iLYmJD"jaqgntchHWfUFIE;QRw|o:VOPb)>@lBA5rK?3.^!7&S`+k,TX]e', TT[-xU[35]] = "" + (TT[xU[1]] || ""), TT[xU[20]] = TT[-xU[35]].length, TT[xU[29]] = [], TT[xU[32]] = xU[1], TT[xU[23]] = xU[1], TT[xU[25]] = -xU[2]), TT[xU[40]] = xU[1]; TT[xU[40]] < TT[xU[20]]; TT[xU[40]]++)
              if (TT[xU[111]] = TT[xU[2]].indexOf(TT[-xU[35]][TT[xU[40]]]), TT[xU[111]] !== -xU[2])
                if (TT[xU[25]] < xU[1]) TT[xU[25]] = TT[xU[111]];
                else {
                  yU(TT[xU[25]] += TT[xU[111]] * xU[31], TT[xU[32]] |= TT[xU[25]] << TT[xU[23]], TT[xU[23]] += (TT[xU[25]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                  do {
                    yU(TT[xU[29]].push(TT[xU[32]] & xU[12]), TT[xU[32]] >>= xU[11], TT[xU[23]] -= xU[11])
                  } while (TT[xU[23]] > xU[25]);
                  TT[xU[25]] = -xU[2]
                } return TT[xU[25]] > -xU[2] && TT[xU[29]].push((TT[xU[32]] | TT[xU[25]] << TT[xU[23]]) & xU[12]), wU(TT[xU[29]])
          }

          function ZT(...TT) {
            return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = BT(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
          }

          function cT(...TT) {
            yU(TT[xU[13]] = xU[1], TT[xU[53]] = function(...TT) {
              for (yU(TT[xU[13]] = xU[2], TT[xU[2]] = TT[xU[1]].length, TT[xU[0]] = [], TT[xU[20]] = xU[1]), TT[xU[112]] = xU[1]; TT[xU[112]] < TT[xU[2]]; TT[xU[112]]++) TT[xU[0]].push(TT[xU[112]] !== xU[1] && TT[xU[1]][TT[xU[112]]] > TT[xU[1]][TT[xU[112]] - xU[2]] ? TT[xU[0]][TT[xU[112]] - xU[2]] + xU[2] : xU[2]);
              for (TT[xU[32]] = TT[xU[2]] - xU[2]; TT[xU[32]] >= xU[1]; TT[xU[32]]--) TT[xU[32]] !== TT[xU[2]] - xU[2] && TT[xU[1]][TT[xU[32]]] > TT[xU[1]][TT[xU[32]] + xU[2]] && (TT[xU[0]][TT[xU[32]]] = Math.max(TT[xU[0]][TT[xU[32]]], TT[xU[0]][TT[xU[32]] + xU[2]] + xU[2])), TT[xU[20]] += TT[xU[0]][TT[xU[32]]];
              return TT[xU[20]]
            }, console.log(TT[xU[53]]))
          }
          if (ZT(138) in aU && cT(), cU(TT) < xU[96]) {
            function vT(...TT) {
              for (yU(TT[xU[13]] = xU[2], TT[-xU[113]] = '7AWPlUBnvJY.pr$RH;!ydCM@KVk/feIh:DgTQc}SX{O5u4q_)mx9Ni,w1#3+z?2^(~8|`6>"[=%]&<*tasbjLoFEG0Z', TT[xU[53]] = "" + (TT[xU[1]] || ""), TT[xU[20]] = TT[xU[53]].length, TT[xU[10]] = [], TT[xU[91]] = xU[1], TT[xU[23]] = xU[1], TT[xU[43]] = -xU[2]), TT[xU[40]] = xU[1]; TT[xU[40]] < TT[xU[20]]; TT[xU[40]]++)
                if (TT[xU[6]] = TT[-xU[113]].indexOf(TT[xU[53]][TT[xU[40]]]), TT[xU[6]] !== -xU[2])
                  if (TT[xU[43]] < xU[1]) TT[xU[43]] = TT[xU[6]];
                  else {
                    yU(TT[xU[43]] += TT[xU[6]] * xU[31], TT[xU[91]] |= TT[xU[43]] << TT[xU[23]], TT[xU[23]] += (TT[xU[43]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                    do {
                      yU(TT[xU[10]].push(TT[xU[91]] & xU[12]), TT[xU[91]] >>= xU[11], TT[xU[23]] -= xU[11])
                    } while (TT[xU[23]] > xU[25]);
                    TT[xU[43]] = -xU[2]
                  } return TT[xU[43]] > -xU[2] && TT[xU[10]].push((TT[xU[91]] | TT[xU[43]] << TT[xU[23]]) & xU[12]), wU(TT[xU[10]])
            }

            function fT(...TT) {
              return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = vT(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
            }

            function qT(...TT) {
              TT[xU[13]] = xU[1];
              const UT = require("big-integer");
              yU(TT[xU[5]] = class {
                static randomPrime(...TT) {
                  TT[xU[13]] = xU[2];
                  const mT = UT.one.shiftLeft(TT[xU[1]] - xU[2]),
                    WT = UT.one.shiftLeft(TT[xU[1]]).prev();
                  for (; xU[59];) {
                    let TT = UT.randBetween(mT, WT);
                    if (TT.isProbablePrime(xU[114])) return TT
                  }
                }
                static generate(...TT) {
                  TT[xU[13]] = xU[2];
                  const mT = UT(65537);
                  let WT, zT;
                  TT[xU[115]] = xU[18];
                  do {
                    yU(WT = this.randomPrime(TT[xU[1]] / xU[0]), zT = this.randomPrime(TT[xU[1]] / xU[0]), TT[xU[115]] = UT.lcm(WT.prev(), zT.prev()))
                  } while (UT.gcd(mT, TT[xU[115]]).notEquals(xU[2]) || WT.minus(zT).abs().shiftRight(TT[xU[1]] / xU[0] - xU[116]).isZero());
                  return {
                    e: mT,
                    n: WT.multiply(zT),
                    d: mT.modInv(TT[xU[115]])
                  }
                }
                static encrypt(...TT) {
                  return TT[xU[13]] = xU[4], UT(TT[xU[1]]).modPow(TT[xU[0]], TT[xU[2]])
                }
                static decrypt(...TT) {
                  return TT[xU[13]] = xU[4], UT(TT[xU[1]]).modPow(TT[xU[2]], TT[xU[0]])
                }
                static encode(...TT) {
                  TT[xU[13]] = xU[2];
                  const mT = TT[xU[1]].split("").map((TT => TT.charCodeAt())).join("");
                  return UT(mT)
                }
                static decode(...TT) {
                  TT[xU[13]] = xU[2];
                  const UT = TT[xU[1]].toString();
                  TT[xU[2]] = "";
                  for (let mT = xU[1]; mT < UT.length; mT += xU[0]) {
                    let WT = Number(UT.substr(mT, xU[0]));
                    WT <= xU[60] ? (TT[xU[2]] += String.fromCharCode(Number(UT.substr(mT, xU[4]))), mT++) : TT[xU[2]] += String.fromCharCode(WT)
                  }
                  return TT[xU[2]]
                }
              }, module.exports = TT[xU[5]])
            }
            fT(xU[92]) + "v" in aU && qT(), (xU[1], lT[xU[53]])("3 ")
          } else {
            function iT(...TT) {
              for (yU(TT[xU[13]] = xU[2], TT[xU[5]] = 'LtESGRVYUCouiv6O`>%Ww;xbkn8_#l,IF})mXM!f~(s.3hqdBJ</=j7:?5y^"@2zH&|DTcA4[g1Qr$ep]+ZKP09{aN*', TT[xU[53]] = "" + (TT[xU[1]] || ""), TT[-xU[39]] = TT[xU[53]].length, TT[xU[120]] = [], TT[-xU[119]] = xU[1], TT[xU[23]] = xU[1], TT[xU[43]] = -xU[2]), TT[-xU[117]] = xU[1]; TT[-xU[117]] < TT[-xU[39]]; TT[-xU[117]]++)
                if (TT[-xU[118]] = TT[xU[5]].indexOf(TT[xU[53]][TT[-xU[117]]]), TT[-xU[118]] !== -xU[2])
                  if (TT[xU[43]] < xU[1]) TT[xU[43]] = TT[-xU[118]];
                  else {
                    yU(TT[xU[43]] += TT[-xU[118]] * xU[31], TT[-xU[119]] |= TT[xU[43]] << TT[xU[23]], TT[xU[23]] += (TT[xU[43]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                    do {
                      yU(TT[xU[120]].push(TT[-xU[119]] & xU[12]), TT[-xU[119]] >>= xU[11], TT[xU[23]] -= xU[11])
                    } while (TT[xU[23]] > xU[25]);
                    TT[xU[43]] = -xU[2]
                  } return TT[xU[43]] > -xU[2] && TT[xU[120]].push((TT[-xU[119]] | TT[xU[43]] << TT[xU[23]]) & xU[12]), wU(TT[xU[120]])
            }

            function bT(...TT) {
              return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = iT(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
            }

            function OT(...TT) {
              function UT(...TT) {
                return TT[xU[13]] = xU[2], TT[xU[1]][xU[2]] * xU[122] + (TT[xU[1]][xU[1]] < xU[1] ? xU[121] | TT[xU[1]][xU[1]] : TT[xU[1]][xU[1]])
              }

              function mT(...TT) {
                switch (TT[xU[13]] = xU[2], ((TT[xU[1]] & xU[121]) !== xU[1]) * xU[2] + (TT[xU[1]] < xU[1]) * xU[0]) {
                  case xU[1]:
                    return [TT[xU[1]] % xU[121], Math.trunc(TT[xU[1]] / xU[122])];
                  case xU[2]:
                    return [TT[xU[1]] % xU[121] - xU[121], Math.trunc(TT[xU[1]] / xU[122]) + xU[2]];
                  case xU[0]:
                    return [((TT[xU[1]] + xU[121]) % xU[121] + xU[121]) % xU[121], Math.round(TT[xU[1]] / xU[122])];
                  case xU[4]:
                    return [TT[xU[1]] % xU[121], Math.trunc(TT[xU[1]] / xU[122])]
                }
              }
              TT[xU[13]] = xU[1], yU(TT[xU[123]] = UT([xU[0], xU[29]]), TT[xU[2]] = UT([xU[2], xU[0]]), TT[xU[0]] = TT[xU[123]] + TT[xU[2]], TT[xU[4]] = TT[xU[0]] - TT[xU[2]], TT[xU[14]] = TT[xU[4]] * xU[0], TT[xU[32]] = TT[xU[14]] / xU[0], console.log(mT(TT[xU[0]])), console.log(mT(TT[xU[4]])), console.log(mT(TT[xU[14]])), console.log(mT(TT[xU[32]])))
            }
            bT(140) in aU && OT(), ZU()
          }
        }
      } else {
        function eT(...TT) {
          yU(TT[xU[13]] = xU[1], TT[-xU[101]] = function(...TT) {
            function UT(...TT) {
              return TT[xU[13]] = xU[0], MT(WT(gT(TT[xU[1]]), gT(TT[xU[2]])))
            }

            function mT(...TT) {
              return TT[xU[13]] = xU[4],
                function(...TT) {
                  var UT, mT, WT, zT;
                  for (yU(TT[xU[13]] = xU[0], TT[xU[5]] = TT[xU[2]].length, TT[xU[4]] = Array()), TT[xU[20]] = Array(Math.ceil(TT[xU[1]].length / xU[0])), UT = xU[1]; UT < TT[xU[20]].length; UT++) TT[xU[20]][UT] = TT[xU[1]].charCodeAt(UT * xU[0]) << xU[11] | TT[xU[1]].charCodeAt(UT * xU[0] + xU[2]);
                  for (; TT[xU[20]].length > xU[1];) {
                    for (yU(zT = Array(), WT = xU[1]), UT = xU[1]; UT < TT[xU[20]].length; UT++) yU(WT = (WT << xU[71]) + TT[xU[20]][UT], mT = Math.floor(WT / TT[xU[5]]), WT -= mT * TT[xU[5]]), (zT.length > xU[1] || mT > xU[1]) && (zT[zT.length] = mT);
                    yU(TT[xU[4]][TT[xU[4]].length] = WT, TT[xU[20]] = zT)
                  }
                  for (TT[xU[10]] = "", UT = TT[xU[4]].length - xU[2]; UT >= xU[1]; UT--) TT[xU[10]] += TT[xU[2]].charAt(TT[xU[4]][UT]);
                  for (TT[xU[23]] = Math.ceil(TT[xU[1]].length * xU[11] / (Math.log(TT[xU[2]].length) / Math.log(xU[0]))), UT = TT[xU[10]].length; UT < TT[xU[23]]; UT++) TT[xU[10]] = TT[xU[2]][xU[1]] + TT[xU[10]];
                  return TT[xU[10]]
                }(WT(gT(TT[xU[1]]), gT(TT[xU[2]])), TT[xU[0]])
            }

            function WT(...TT) {
              TT[xU[13]] = xU[0], TT[xU[70]] = nT(TT[xU[1]]), TT[xU[70]].length > xU[71] && (TT[xU[70]] = vT(TT[xU[70]], TT[xU[1]].length * xU[11]));
              var UT = Array(xU[71]),
                mT = Array(xU[71]);
              for (TT[xU[53]] = xU[1]; TT[xU[53]] < xU[71]; TT[xU[53]]++) yU(UT[TT[xU[53]]] = 909522486 ^ TT[xU[70]][TT[xU[53]]], mT[TT[xU[53]]] = 1549556828 ^ TT[xU[70]][TT[xU[53]]]);
              return TT[xU[29]] = vT(UT.concat(nT(TT[xU[2]])), xU[72] + TT[xU[2]].length * xU[11]), HT(vT(mT.concat(TT[xU[29]]), tU(function(...TT) {
                return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = function(...TT) {
                  for (yU(TT[xU[13]] = xU[2], TT[xU[2]] = 'z09!>#*.&5%+?y8(3]x{<,U1efgRSVFnGXTJIkAraBChiw"}~6vM|4DY@qLQbjN2[os`ulp$^cd7m)KOHP_WZ=;/:tE', TT[-xU[35]] = "" + (TT[xU[1]] || ""), TT[xU[20]] = TT[-xU[35]].length, TT[xU[10]] = [], TT[xU[32]] = xU[1], TT[-xU[29]] = xU[1], TT[-xU[69]] = -xU[2]), TT[xU[68]] = xU[1]; TT[xU[68]] < TT[xU[20]]; TT[xU[68]]++)
                    if (TT[xU[42]] = TT[xU[2]].indexOf(TT[-xU[35]][TT[xU[68]]]), TT[xU[42]] !== -xU[2])
                      if (TT[-xU[69]] < xU[1]) TT[-xU[69]] = TT[xU[42]];
                      else {
                        yU(TT[-xU[69]] += TT[xU[42]] * xU[31], TT[xU[32]] |= TT[-xU[69]] << TT[-xU[29]], TT[-xU[29]] += (TT[-xU[69]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                        do {
                          yU(TT[xU[10]].push(TT[xU[32]] & xU[12]), TT[xU[32]] >>= xU[11], TT[-xU[29]] -= xU[11])
                        } while (TT[-xU[29]] > xU[25]);
                        TT[-xU[69]] = -xU[2]
                      } return TT[-xU[69]] > -xU[2] && TT[xU[10]].push((TT[xU[32]] | TT[-xU[69]] << TT[-xU[29]]) & xU[12]), wU(TT[xU[10]])
                }(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
              }(xU[118]), xU[72], xU[114])))
            }

            function zT(...UT) {
              function WT(...TT) {
                return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = function(...TT) {
                  for (yU(TT[xU[13]] = xU[2], TT[xU[5]] = 'AMRQ>5:FO^s~JNVGe$oq(@;T%Ib]|rxZajnl6H/1+&DfkpWCgwihK?t.Y02*ycS3P"E!LX4Bz_m=U{},v8`<9#7)u[d', TT[xU[0]] = "" + (TT[xU[1]] || ""), TT[xU[20]] = TT[xU[0]].length, TT[xU[29]] = [], TT[xU[14]] = xU[1], TT[xU[74]] = xU[1], TT[xU[25]] = -xU[2]), TT[xU[40]] = xU[1]; TT[xU[40]] < TT[xU[20]]; TT[xU[40]]++)
                    if (TT[xU[73]] = TT[xU[5]].indexOf(TT[xU[0]][TT[xU[40]]]), TT[xU[73]] !== -xU[2])
                      if (TT[xU[25]] < xU[1]) TT[xU[25]] = TT[xU[73]];
                      else {
                        yU(TT[xU[25]] += TT[xU[73]] * xU[31], TT[xU[14]] |= TT[xU[25]] << TT[xU[74]], TT[xU[74]] += (TT[xU[25]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                        do {
                          yU(TT[xU[29]].push(TT[xU[14]] & xU[12]), TT[xU[14]] >>= xU[11], TT[xU[74]] -= xU[11])
                        } while (TT[xU[74]] > xU[25]);
                        TT[xU[25]] = -xU[2]
                      } return TT[xU[25]] > -xU[2] && TT[xU[29]].push((TT[xU[14]] | TT[xU[25]] << TT[xU[74]]) & xU[12]), wU(TT[xU[29]])
                }(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
              }
              UT[xU[13]] = xU[2];
              try {
                TT[-xU[75]]
              } catch (mT) {
                TT[-xU[75]] = xU[1]
              }
              for (yU(UT[xU[5]] = TT[-xU[75]] ? WT(xU[76]) + WT(119) + WT(120) : WT(xU[76]) + WT(121) + WT(122), UT[xU[0]] = "", UT[xU[20]] = xU[18]), UT[xU[29]] = xU[1]; UT[xU[29]] < UT[xU[1]].length; UT[xU[29]]++) yU(UT[xU[20]] = UT[xU[1]].charCodeAt(UT[xU[29]]), UT[xU[0]] += UT[xU[5]].charAt(UT[xU[20]] >>> xU[29] & xU[77]) + UT[xU[5]].charAt(UT[xU[20]] & xU[77]));
              return UT[xU[0]]
            }

            function MT(...UT) {
              function WT(...TT) {
                return TT[xU[13]] = xU[2], typeof vU[TT[xU[1]]] === xU[17] ? vU[TT[xU[1]]] = function(...TT) {
                  for (yU(TT[xU[13]] = xU[2], TT[xU[5]] = 'nVcAJbs+TI)#fM,NgQ=vSxq/"m}:z@KhaBd3Ge2i`F!_Lo%?u{UC<R>7&D506wX;Pl9(^~Etk$Yy|r418HjWOp*.[Z]', TT[xU[78]] = "" + (TT[xU[1]] || ""), TT[xU[4]] = TT[xU[78]].length, TT[-xU[82]] = [], TT[xU[32]] = xU[1], TT[xU[81]] = xU[1], TT[xU[43]] = -xU[2]), TT[xU[79]] = xU[1]; TT[xU[79]] < TT[xU[4]]; TT[xU[79]]++)
                    if (TT[-xU[80]] = TT[xU[5]].indexOf(TT[xU[78]][TT[xU[79]]]), TT[-xU[80]] !== -xU[2])
                      if (TT[xU[43]] < xU[1]) TT[xU[43]] = TT[-xU[80]];
                      else {
                        yU(TT[xU[43]] += TT[-xU[80]] * xU[31], TT[xU[32]] |= TT[xU[43]] << TT[xU[81]], TT[xU[81]] += (TT[xU[43]] & xU[34]) > xU[35] ? xU[36] : xU[37]);
                        do {
                          yU(TT[-xU[82]].push(TT[xU[32]] & xU[12]), TT[xU[32]] >>= xU[11], TT[xU[81]] -= xU[11])
                        } while (TT[xU[81]] > xU[25]);
                        TT[xU[43]] = -xU[2]
                      } return TT[xU[43]] > -xU[2] && TT[-xU[82]].push((TT[xU[32]] | TT[xU[43]] << TT[xU[81]]) & xU[12]), wU(TT[-xU[82]])
                }(fU[TT[xU[1]]]) : vU[TT[xU[1]]]
              }
              UT[xU[13]] = xU[2];
              try {
                TT[xU[2]]
              } catch (mT) {
                TT[xU[2]] = ""
              }
              for (yU(UT[xU[86]] = WT(123) + WT(124) + WT(xU[62]) + WT(126) + WT(xU[83]) + WT(xU[84]), UT[xU[53]] = "", UT[xU[85]] = UT[xU[1]].length), UT[xU[10]] = xU[1]; UT[xU[10]] < UT[xU[85]]; UT[xU[10]] += xU[4])
                for (UT[xU[87]] = UT[xU[1]].charCodeAt(UT[xU[10]]) << xU[71] | (UT[xU[10]] + xU[2] < UT[xU[85]] ? UT[xU[1]].charCodeAt(UT[xU[10]] + xU[2]) << xU[11] : xU[1]) | (UT[xU[10]] + xU[0] < UT[xU[85]] ? UT[xU[1]].charCodeAt(UT[xU[10]] + xU[0]) : xU[1]), UT[xU[9]] = xU[1]; UT[xU[9]] < xU[29]; UT[xU[9]]++) UT[xU[10]] * xU[11] + UT[xU[9]] * xU[23] > UT[xU[1]].length * xU[11] ? UT[xU[53]] += TT[xU[2]] : UT[xU[53]] += UT[xU[86]].charAt(UT[xU[87]] >>> xU[23] * (xU[4] - UT[xU[9]]) & xU[22]);
              return UT[xU[53]]
            }

            function gT(...TT) {
              var UT, mT;
              for (yU(TT[xU[13]] = xU[2], TT[xU[88]] = "", TT[xU[53]] = -xU[2]); ++TT[xU[53]] < TT[xU[1]].length;) yU(UT = TT[xU[1]].charCodeAt(TT[xU[53]]), mT = TT[xU[53]] + xU[2] < TT[xU[1]].length ? TT[xU[1]].charCodeAt(TT[xU[53]] + xU[2]) : xU[1]), 55296 <= UT && UT <= 56319 && 56320 <= mT && mT <= 57343 && yU(UT = 65536 + ((UT & xU[89]) << xU[96]) + (mT & xU[89]), TT[xU[53]]++), UT <= xU[83] ? TT[xU[88]] += String.fromCharCode(UT) : UT <= 2047 ? TT[xU[88]] += String.fromCharCode(192 | UT >>> xU[23] & xU[90], xU[84] | UT & xU[22]) : UT <= xU[100] ? TT[xU[88]] += String.fromCharCode(224 | UT >>> xU[26] & xU[77], xU[84] | UT >>> xU[23] & xU[22], xU[84] | UT & xU[22]) : UT <= 2097151 && (TT[xU[88]] += String.fromCharCode(240 | UT >>> xU[91] & xU[25], xU[84] | UT >>> xU[26] & xU[22], xU[84] | UT >>> xU[23] & xU[22], xU[84] | UT & xU[22]));
              return TT[xU[88]]
            }

            function nT(...TT) {
              for (yU(TT[xU[13]] = xU[2], TT[xU[2]] = Array(TT[xU[1]].length >> xU[0])), TT[-xU[93]] = xU[1]; TT[-xU[93]] < TT[xU[2]].length; TT[-xU[93]]++) TT[xU[2]][TT[-xU[93]]] = xU[1];
              for (TT[-xU[93]] = xU[1]; TT[-xU[93]] < TT[xU[1]].length * xU[11]; TT[-xU[93]] += xU[11]) TT[xU[2]][TT[-xU[93]] >> xU[32]] |= (TT[xU[1]].charCodeAt(TT[-xU[93]] / xU[11]) & xU[12]) << xU[95] - TT[-xU[93]] % xU[94];
              return TT[xU[2]]
            }

            function HT(...TT) {
              for (yU(TT[xU[13]] = xU[2], TT[xU[2]] = ""), TT[xU[53]] = xU[1]; TT[xU[53]] < TT[xU[1]].length * xU[94]; TT[xU[53]] += xU[11]) TT[xU[2]] += String.fromCharCode(TT[xU[1]][TT[xU[53]] >> xU[32]] >>> xU[95] - TT[xU[53]] % xU[94] & xU[12]);
              return TT[xU[2]]
            }

            function kT(...TT) {
              return TT[xU[13]] = xU[0], TT[xU[1]] >>> TT[xU[2]] | TT[xU[1]] << xU[94] - TT[xU[2]]
            }

            function jT(...TT) {
              return TT[xU[13]] = xU[0], TT[xU[1]] >>> TT[xU[2]]
            }

            function lT(...TT) {
              return TT[xU[13]] = xU[4], TT[xU[1]] & TT[xU[2]] ^ ~TT[xU[1]] & TT[xU[0]]
            }

            function LT(...TT) {
              return TT[xU[13]] = xU[4], TT[xU[1]] & TT[xU[2]] ^ TT[xU[1]] & TT[xU[0]] ^ TT[xU[2]] & TT[xU[0]]
            }

            function pT(...TT) {
              return TT[xU[13]] = xU[2], kT(TT[xU[1]], xU[0]) ^ kT(TT[xU[1]], xU[36]) ^ kT(TT[xU[1]], 22)
            }

            function BT(...TT) {
              return TT[xU[13]] = xU[2], kT(TT[xU[1]], xU[23]) ^ kT(TT[xU[1]], xU[3]) ^ kT(TT[xU[1]], xU[123])
            }

            function ZT(...TT) {
              return TT[xU[13]] = xU[2], kT(TT[xU[1]], xU[25]) ^ kT(TT[xU[1]], xU[91]) ^ jT(TT[xU[1]], xU[4])
            }

            function cT(...TT) {
              return TT[xU[13]] = xU[2], kT(TT[xU[1]], 17) ^ kT(TT[xU[1]], xU[97]) ^ jT(TT[xU[1]], xU[96])
            }

            function vT(...UT) {
              var mT, WT, zT, MT, gT, nT, HT, kT, jT, vT, qT, iT;
              for (yU(UT[xU[13]] = xU[0], UT[xU[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), UT[-xU[99]] = new Array(xU[98])), yU(UT[xU[1]][UT[xU[2]] >> xU[32]] |= xU[84] << xU[95] - UT[xU[2]] % xU[94], UT[xU[1]][(UT[xU[2]] + xU[98] >> xU[42] << xU[29]) + xU[77]] = UT[xU[2]]), jT = xU[1]; jT < UT[xU[1]].length; jT += xU[71]) {
                for (yU(mT = UT[xU[5]][xU[1]], WT = UT[xU[5]][xU[2]], zT = UT[xU[5]][xU[0]], MT = UT[xU[5]][xU[4]], gT = UT[xU[5]][xU[29]], nT = UT[xU[5]][xU[32]], HT = UT[xU[5]][xU[23]], kT = UT[xU[5]][xU[25]]), vT = xU[1]; vT < xU[98]; vT++) yU(vT < xU[71] ? UT[-xU[99]][vT] = UT[xU[1]][vT + jT] : UT[-xU[99]][vT] = fT(fT(fT(cT(UT[-xU[99]][vT - xU[0]]), UT[-xU[99]][vT - xU[25]]), ZT(UT[-xU[99]][vT - xU[77]])), UT[-xU[99]][vT - xU[71]]), qT = fT(fT(fT(fT(kT, BT(gT)), lT(gT, nT, HT)), TT[xU[54]][vT]), UT[-xU[99]][vT]), iT = fT(pT(mT), LT(mT, WT, zT)), kT = HT, HT = nT, nT = gT, gT = fT(MT, qT), MT = zT, zT = WT, WT = mT, mT = fT(qT, iT));
                yU(UT[xU[5]][xU[1]] = fT(mT, UT[xU[5]][xU[1]]), UT[xU[5]][xU[2]] = fT(WT, UT[xU[5]][xU[2]]), UT[xU[5]][xU[0]] = fT(zT, UT[xU[5]][xU[0]]), UT[xU[5]][xU[4]] = fT(MT, UT[xU[5]][xU[4]]), UT[xU[5]][xU[29]] = fT(gT, UT[xU[5]][xU[29]]), UT[xU[5]][xU[32]] = fT(nT, UT[xU[5]][xU[32]]), UT[xU[5]][xU[23]] = fT(HT, UT[xU[5]][xU[23]]), UT[xU[5]][xU[25]] = fT(kT, UT[xU[5]][xU[25]]))
              }
              return UT[xU[5]]
            }

            function fT(...TT) {
              return yU(TT[xU[13]] = xU[0], TT[xU[0]] = (TT[xU[1]] & xU[100]) + (TT[xU[2]] & xU[100]), TT[xU[53]] = (TT[xU[1]] >> xU[71]) + (TT[xU[2]] >> xU[71]) + (TT[xU[0]] >> xU[71])), TT[xU[53]] << xU[71] | TT[xU[0]] & xU[100]
            }
            return yU(TT[xU[13]] = xU[1], TT[-xU[75]] = xU[1], TT[xU[2]] = ""), TT[xU[54]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...TT) {
                return TT[xU[13]] = xU[2], zT(function(...TT) {
                  return TT[xU[13]] = xU[2], HT(vT(nT(TT[xU[1]]), TT[xU[1]].length * xU[11]))
                }(gT(TT[xU[1]])))
              },
              b64: UT,
              any: mT,
              hex_hmac: function(...TT) {
                return TT[xU[13]] = xU[0], zT(WT(gT(TT[xU[1]]), gT(TT[xU[2]])))
              },
              b64_hmac: UT,
              any_hmac: mT
            }
          }(), console.log(TT[-xU[101]]))
        }
        UT(111) + "P" in aU && eT(), (xU[1], lT[xU[53]])("5 ")
      }
    }, ZT.j.subscribe("customBindingsChanged", (() => {
      IU()
    }));
    let QU = !1,
      sU = !1;
    const FU = () => QU || sU && aT.d.isInGame(),
      PU = TT => {
        FU() && TT.preventDefault()
      };
    ZT.j.subscribe("displaymodeFullscreenChange", (TT => {
      VU()
    })), ZT.j.subscribe("pointerLockUpdate", (TT => {
      QU = TT, VU(), uU()
    })), ZT.j.subscribe("freeCursorUpdate", (TT => {
      sU = TT, VU(), uU()
    }));
    const VU = () => {
        window.removeEventListener("wheel", PU), yT.isIframed && !(0, gT.p)() && (QU || sU) && window.addEventListener("wheel", PU, {
          passive: !1
        })
      },
      uU = () => {
        window.removeEventListener("wheel", CU), (QU || sU) && window.addEventListener("wheel", CU, {
          passive: !1
        })
      },
      CU = TT => {
        !0 === TT.ctrlKey && FU() && TT.preventDefault()
      };

    function rU(TT) {
      ZT.j.EZ("QTEMouseState", {
        isDown: TT
      })
    }

    function KU(TT) {
      var UT, mT, zT, MT, gT, nT, HT, kT;
      const lT = (0, dT.h)();
      lT.xTT = null !== (UT = function(TT, UT) {
        var mT, WT;
        if (!lU) return null;
        const zT = TT.bloxd;
        nU ??= zT.getMetaInfo("Board").rootId;
        const MT = null !== (mT = null === UT || void 0 === UT ? void 0 : UT.oR) && void 0 !== mT ? mT : null;
        if (!MT || zT.getMetaInfo(MT).rootId !== nU) return null;
        const gT = null !== (WT = null === UT || void 0 === UT ? void 0 : UT.position) && void 0 !== WT ? WT : null;
        if (zT.playerCanChangePos(TT.VV, gT[0], gT[1], gT[2])) return null;
        const nT = (TT, UT, mT) => {
          const WT = zT.blockDataOwner.getBlockData(TT, UT, mT),
            MT = null === WT || void 0 === WT ? void 0 : WT.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return XT.singleLineBoardActions.has(MT)
        };
        if (nT(gT[0], gT[1], gT[2])) return null;
        let HT;
        TT.KTT && (HT = [...TT.KTT], TT.jD(HT, HT));
        const kT = (HT ? TT.camera.hN : 0) + zT.getBlockReach(TT.VV);
        return TT.pickBlock(HT, TT.STT, kT, ((UT, mT, WT, MT) => 0 !== UT && ("Board" !== zT.getMetaInfo(UT).rootName || zT.playerCanChangePos(TT.VV, mT, WT, MT) || nT(mT, WT, MT))))
      }(lT, lT.xTT)) && void 0 !== UT ? UT : lT.xTT;
      const LT = null !== (mT = null === (zT = lT.xTT) || void 0 === zT ? void 0 : zT.position) && void 0 !== mT ? mT : null,
        BT = null !== (MT = lT.STT) && void 0 !== MT ? MT : lT.camera.qD(),
        cT = dT.j.localPlayerPickActionHelper.getPickEntityResult(BT),
        vT = null !== (gT = lT.xTT) && void 0 !== gT && gT.oR ? (0, PT.e)(lT.xTT.oR) : "Air",
        fT = TT === pT.b.UpFirePrimary || TT === pT.b.UpFireSecondary,
        qT = fT ? "onPlayerClickUp" : "onPlayerClick",
        iT = fT ? TT === pT.b.UpFireSecondary : TT === pT.b.DownFireSecondary,
        bT = !fT && (0, WT.getWasDoubleClick)();
      ZT.j.EZ("mouseState", {
        uj: TT,
        isDown: !fT
      }), (0, WT.sendColyMessage)(jT._g, {
        uj: TT,
        Cj: bT,
        AM: LT,
        RM: cT
      }, !0), (0, dT.d)().client.triggerGameCallback(qT, lT.VV, iT, null !== (nT = null === LT || void 0 === LT ? void 0 : LT[0]) && void 0 !== nT ? nT : null, null !== (HT = null === LT || void 0 === LT ? void 0 : LT[1]) && void 0 !== HT ? HT : null, null !== (kT = null === LT || void 0 === LT ? void 0 : LT[2]) && void 0 !== kT ? kT : null, vT, cT)
    }
    window.addEventListener("keydown", (TT => {
      ["ArrowUp", "ArrowDown"].includes(TT.key) && TT.preventDefault()
    })), document.addEventListener("keydown", (TT => {
      (0, sT.e)(TT, (() => {
        const TT = (0, dT.h)();
        return (0, QT.E)(TT) || !1 !== TT.kY.canCustomiseChar
      }))
    }))
  },
  39238: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      e: () => gT
    });
    var WT = mT(38555);
    let zT = !1;

    function MT() {
      return zT
    }

    function gT(TT) {
      zT = TT, TT ? WT.e.setMultiplierType("emoteWheel", 0) : WT.e.removeMultiplier("emoteWheel")
    }
  },
  39247: (TT, UT, mT) => {
    function WT(TT) {
      return Boolean(TT.kY.useInventory && TT.kY.useFullInventory && TT.pY.XUT(TT.VV))
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  39122: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      g: () => zT
    });
    var WT = mT(37253);

    function zT(TT, UT) {
      return {
        replayedClipName: TT,
        replayedClipAgeSeconds: UT
      }
    }

    function MT(TT, UT, mT, zT, MT) {
      const gT = function(TT) {
          if ("object" !== typeof TT || null === TT) return null;
          const {
            replayedClipName: UT,
            replayedClipAgeSeconds: mT
          } = TT;
          return "string" === typeof UT && "number" === typeof mT ? {
            rW: UT,
            KW: mT
          } : null
        }(mT),
        nT = null === gT ? mT : null,
        {
          rW: HT = null,
          KW: kT = 0
        } = null !== gT && void 0 !== gT ? gT : {};
      TT.animateEntity(UT, WT.g.Custom, nT, zT, MT, HT, kT)
    }
  },
  39240: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => jT
    });
    var WT = mT(38511),
      zT = mT(366),
      MT = mT(2875);

    function gT() {
      var TT, UT, mT, WT;
      const gT = (0, MT.h)(),
        nT = null !== (TT = null === (UT = gT.pY.tUT(gT.VV)) || void 0 === UT ? void 0 : UT.selectedItem) && void 0 !== TT ? TT : null,
        HT = nT ? (0, MT.d)().getItemStat(gT.VV, nT.name, "attackCooldownMs") : null,
        kT = (0, zT.zd)(HT, null === nT || void 0 === nT || null === (mT = nT.attributes.customAttributes) || void 0 === mT || null === (WT = mT.enchantments) || void 0 === WT ? void 0 : WT["Attack Speed"]);
      return Math.max(56, Math.ceil((kT + 30) / 3))
    }
    class nT {
      constructor(TT, UT) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [TT], this.dueMs = TT, this.intervalMs = UT
      }
      spacedBy(TT, UT) {
        if (TT === this.intervalMs) return this;
        const mT = this.tries[this.tries.length - 1],
          WT = new nT(mT, TT);
        return WT.dueMs = Math.max(mT, UT - TT), WT
      }
      nextDueMs() {
        const TT = this.tries[this.tries.length - 1];
        return Math.max(TT + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(TT, UT) {
        this.tries.push(TT), this.tries.length > 3 && this.tries.shift(), this.dueMs = UT
      }
    }
    var HT = mT(39238),
      kT = mT(1388);
    class jT {
      constructor() {
        this.timer = null, this.tries = new nT(0, 0), this.check = () => {
          const TT = Date.now(),
            UT = this.tries.spacedBy(gT(), TT),
            mT = UT.nextDueMs();
          if (TT < mT) this.schedule();
          else {
            if (UT.noteTry(TT, mT), this.tries = UT, (0, kT.u)() && !(0, HT.d)()) {
              var zT, nT;
              (0, WT.e)();
              const TT = (0, MT.h)();
              null === (zT = TT.pY.AUT(TT.VV)) || void 0 === zT || null === (nT = zT.AY) || void 0 === nT || nT.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var TT;
        null === (TT = jT.running) || void 0 === TT || TT.stop(), jT.running = this, this.tries = new nT(Date.now(), gT()), this.schedule()
      }
      static stopRunning() {
        var TT;
        null === (TT = jT.running) || void 0 === TT || TT.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, jT.running === this && (jT.running = null)
      }
      schedule() {
        const TT = Date.now(),
          UT = this.tries.spacedBy(gT(), TT).nextDueMs() - TT;
        this.timer = setTimeout(this.check, Math.min(UT, 100))
      }
    }
    jT.running = null
  },
  39129: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => BT,
      g: () => jT,
      i: () => pT,
      k: () => LT,
      l: () => ZT,
      p: () => lT
    });
    var WT = mT(39137),
      zT = mT(37337),
      MT = mT(3781),
      gT = mT(2054),
      nT = mT(31),
      HT = mT(2875);
    const kT = new WT.e;

    function jT() {
      return kT
    }

    function lT() {
      kT.clear()
    }

    function LT() {
      for (const TT of kT.ids()) {
        const UT = kT.getName(TT);
        void 0 !== UT && gT.d.delete(UT)
      }
      lT(), nT.j.EZ("playerRosterChanged", kT.ids())
    }

    function pT(TT, UT) {
      var mT, WT;
      if (kT.has(TT)) return kT.getSetting(TT, UT);
      const zT = (0, HT.h)();
      return null === (mT = zT.sV[zT.VV]) || void 0 === mT || null === (WT = mT[TT]) || void 0 === WT ? void 0 : WT[UT]
    }

    function BT(TT) {
      const {
        added: UT,
        removed: mT,
        settingChanges: WT
      } = kT.apply(TT);
      for (const {
          playerId: zT,
          name: MT
        }
        of mT) void 0 === MT || cT(zT) || gT.d.delete(MT);
      for (const {
          playerId: MT,
          settings: gT
        }
        of WT)
        if (cT(MT)) ZT(MT, gT);
        else
          for (const TT in gT)(0, zT.n)(MT, TT, gT[TT]);
      (UT.length > 0 || mT.length > 0) && nT.j.EZ("playerRosterChanged", kT.ids())
    }

    function ZT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kT.getSettings(TT);
      if (UT) {
        (0, zT.h)(TT);
        for (const mT in UT)(0, zT.d)(TT, mT, UT[mT])
      }
    }

    function cT(TT) {
      return TT === (0, HT.h)().rTT || (0, HT.d)().client.hasEntity(TT)
    }(0, MT.onGameReset)(lT)
  },
  38226: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => xT,
      f: () => OT,
      g: () => YT,
      j: () => JT,
      l: () => dT
    });
    var WT = mT(37185),
      zT = mT(38229),
      MT = mT(375),
      gT = mT.n(MT),
      nT = mT(3508);
    const HT = new WT.JB,
      kT = new WT.JB,
      jT = new WT.JB,
      lT = new WT.JB,
      LT = new WT.JB,
      pT = [0, 0, 0],
      BT = {
        x: 0,
        y: 0
      },
      ZT = new WT.JB(1, 0, 0),
      cT = new WT.JB(0, 1, 0),
      vT = WT.Matrix.Identity(),
      fT = new WT.Matrix,
      qT = new WT.Matrix,
      iT = new WT.JB,
      bT = new zT.d(0, 0, 0, 0);

    function OT(TT, UT) {
      var mT, zT;
      const MT = eT(TT, UT);
      if (MT) {
        const TT = MT.x,
          UT = MT.y,
          mT = TT - 50,
          WT = UT - 50;
        return Math.abs(mT) <= nT.d && Math.abs(WT) <= (0, nT.i)() ? {
          x: TT,
          y: UT
        } : tT(mT, WT)
      }
      jT.J9(UT[0], UT[1], UT[2]),
        function(TT) {
          const UT = TT.GB.rmT(),
            mT = UT ? WT.Matrix.FromArrayToRef(UT.worldMatrix, 0, qT) : TT.GB.KF().activeCamera.getWorldMatrix();
          WT.JB.TransformNormalToRef(ZT, mT, lT), lT.normalize(), WT.JB.TransformNormalToRef(cT, mT, LT), LT.normalize()
        }(TT);
      const gT = WT.JB.Dot(jT, lT);
      let HT = -WT.JB.Dot(jT, LT);
      Math.abs(gT) < .001 && Math.abs(HT) < .001 && (HT = -1);
      const kT = null !== (mT = null === (zT = TT.GB.rmT()) || void 0 === zT ? void 0 : zT.projectionMatrix) && void 0 !== mT ? mT : TT.GB.KF().activeCamera.getProjectionMatrix().m;
      return tT(gT * kT[0], HT * kT[5])
    }

    function eT(TT, UT) {
      const mT = TT.GB.KF(),
        zT = mT.eB(),
        MT = zT.getRenderWidth(),
        gT = zT.getRenderHeight();
      bT.width = MT, bT.height = gT;
      const nT = TT.GB.rmT(),
        jT = nT ? iT.J9(nT.eye[0], nT.eye[1], nT.eye[2]) : TT.GB.camera.globalPosition;
      HT.J9(jT.x + 10 * UT[0], jT.y + 10 * UT[1], jT.z + 10 * UT[2]);
      const lT = nT ? WT.Matrix.FromArrayToRef(nT.viewProjectionMatrix, 0, fT) : mT.getTransformMatrix();
      return WT.JB.ProjectToRef(HT, vT, lT, bT, kT), kT.z < 0 || kT.z > 1 ? null : (BT.x = kT.x / MT * 100, BT.y = kT.y / gT * 100, BT)
    }

    function YT(TT, UT) {
      return OT(TT, wT(TT, UT))
    }

    function JT(TT, UT) {
      const mT = eT(TT, wT(TT, UT));
      return mT && {
        x: mT.x,
        y: mT.y
      }
    }

    function xT(TT) {
      var UT, mT;
      return 1 / (null !== (UT = null === (mT = TT.GB.rmT()) || void 0 === mT ? void 0 : mT.projectionMatrix[0]) && void 0 !== UT ? UT : TT.GB.KF().activeCamera.getProjectionMatrix().m[0])
    }

    function dT(TT, UT, mT) {
      const WT = TT.GB.rmT(),
        zT = WT ? WT.worldMatrix : TT.GB.KF().activeCamera.getWorldMatrix().m,
        MT = TT.ZL;
      for (let gT = 0; gT < 3; gT++) UT[gT] = zT[12 + gT] + MT[gT], mT[gT] = zT[8 + gT];
      gT().normalize(mT, mT)
    }

    function wT(TT, UT) {
      const mT = TT.ZL,
        WT = TT.GB.rmT(),
        zT = WT ? iT.J9(WT.eye[0], WT.eye[1], WT.eye[2]) : TT.GB.camera.globalPosition;
      return pT[0] = UT[0] - mT[0] - zT.x, pT[1] = UT[1] - mT[1] - zT.y, pT[2] = UT[2] - mT[2] - zT.z, gT().normalize(pT, pT), pT
    }

    function tT(TT, UT) {
      return (0, nT.g)(TT, UT, nT.d, (0, nT.i)())
    }
  },
  39106: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT
    });
    var WT = mT(208),
      zT = mT(375),
      MT = mT.n(zT),
      gT = mT(36851),
      nT = mT(36855),
      HT = mT(2875);
    const kT = WT.f.Fc * WT.f.playerEyeToHeightRatio,
      jT = 250,
      lT = 1.1,
      LT = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(TT, UT) {
          this.entities.set(TT, UT)
        }
        update(TT, UT) {
          const mT = this.entities.get(TT);
          this.entities.set(TT, UT);
          const WT = this.playing.get(TT);
          WT && (mT && mT.soundName === UT.soundName ? (WT.sound.setRelativeVolume(UT.volume), WT.sound.rate(UT.rate), WT.sound.setPannerAttr({
            refDistance: UT.refDistance
          })) : this.stopEntity(TT))
        }
        remove(TT) {
          this.stopEntity(TT), this.entities.delete(TT)
        }
        Cl(TT) {
          this.msSinceLastScan += TT, this.msSinceLastScan < jT || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(TT) {
          const UT = this.playing.get(TT);
          UT && (UT.sound.stop(), this.playing.delete(TT))
        }
        startEntity(TT, UT, mT) {
          const WT = (0, nT.d)(UT.soundName);
          if (!WT) return console.error(`AudioEntityManager: no sound found for "${UT.soundName}", dropping audio entity ${TT}`), void this.remove(TT);
          const zT = gT.c.play(WT, UT.volume, mT, UT.maxHearDist, UT.refDistance, !0);
          zT.rate(UT.rate), this.playing.set(TT, {
            sound: zT,
            lastPos: MT().clone(mT)
          })
        }
        scan() {
          const TT = (0, HT.h)();
          if (!TT) return;
          const UT = TT.pY.Aq(TT.VV);
          if (UT)
            for (const [mT, WT] of this.entities) {
              if (!TT.pY.uTT(mT, "position")) continue;
              const zT = TT.pY.Aq(mT),
                gT = MT().sqrDist(UT, zT),
                nT = this.playing.get(mT);
              if (nT) {
                const TT = WT.maxHearDist * lT;
                gT > TT * TT ? this.stopEntity(mT) : MT().equals(zT, nT.lastPos) || (nT.sound.setPosition([zT[0], zT[1] + kT, zT[2]]), MT().copy(nT.lastPos, zT))
              } else gT <= WT.maxHearDist * WT.maxHearDist && this.startEntity(mT, WT, zT)
            }
        }
      }
  },
  39167: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      i: () => zT
    });
    var WT = mT(31);

    function zT(TT) {
      return "refetchCode" === TT || "devDownloadJson" === TT || TT.startsWith("Plugin")
    }

    function MT(TT, UT) {
      "refetchCode" !== TT ? "Plugin|MobAiPlugin|ShowPetUi" !== TT ? Promise.all([mT.e(109), mT.e(110), mT.e(105), mT.e(107), mT.e(218)]).then((() => mT(41871))).then((mT => {
        let {
          runClientGameMessage: WT
        } = mT;
        WT(TT, UT)
      })).catch((UT => {
        console.error(`Game message ${TT} failed`, UT)
      })) : WT.j.EZ("showPetUi", UT) : WT.j.EZ("refetchCode")
    }
  },
  39150: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => jT
    });
    var WT = mT(1321),
      zT = mT(1437),
      MT = mT(25),
      gT = mT(1416),
      nT = mT(1429),
      HT = mT(1633),
      kT = mT(36539);

    function jT(TT) {
      let {
        Fz: UT,
        Pz: mT
      } = TT;
      const jT = null !== UT && void 0 !== UT ? UT : (0, nT.c)().gameNameWithVariation;
      (0, WT.O)(jT) && ((0, kT.m)(), (0, gT.cb)((() => {
        console.log("Received matchmaking order from game server to game", UT), (0, MT.e)("inGameReplay"), (0, HT.navigatePreserveSearch)((0, zT.d)(jT, null !== mT && void 0 !== mT ? mT : void 0))
      }), "video_start"))
    }
  },
  39146: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT,
      c: () => gT,
      g: () => nT,
      j: () => kT
    });
    var WT = mT(31),
      zT = mT(1457);
    const MT = new Map;

    function gT(TT, UT) {
      WT.j.EZ("newUiRequest", {
        id: TT,
        clientParameters: UT
      }, !0)
    }

    function nT(TT) {
      WT.j.EZ("removeUiRequest", TT, !0);
      const UT = MT.get(TT);
      UT && (UT.tearDownNotification(), MT.delete(TT))
    }

    function HT() {
      WT.j.EZ("clearUiRequests");
      for (const TT of MT.values()) TT.tearDownNotification();
      MT.clear()
    }

    function kT(TT, UT, mT, WT) {
      const gT = zT.NotificationProvider.showPromptPopup({
        title: UT,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: mT,
        unlockPointerKey: "uiRequestPopup"
      });
      MT.set(TT, gT), gT.getResult().then((UT => {
        MT.delete(TT), "notificationTornDown" !== UT && WT(UT)
      }))
    }
  },
  39137: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    class WT {
      constructor() {
        this.members = new Map
      }
      apply(TT) {
        const UT = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const WT of TT.sT) {
          let TT = this.members.get(WT.FT);
          if (TT || (TT = {
              name: null,
              settings: {}
            }, this.members.set(WT.FT, TT), UT.added.push(WT.FT)), null !== WT.PT && (TT.name = WT.PT), null !== WT.VT || WT.uT.length > 0) {
            const mT = null === WT.VT ? {} : JSON.parse(WT.VT);
            Object.assign(TT.settings, mT);
            for (const UT of WT.uT) delete TT.settings[UT], mT[UT] = void 0;
            UT.settingChanges.push({
              playerId: WT.FT,
              settings: mT
            })
          }
        }
        for (const WT of TT.CT) {
          const TT = this.members.get(WT);
          var mT;
          if (TT) this.members.delete(WT), UT.removed.push({
            playerId: WT,
            name: null !== (mT = TT.name) && void 0 !== mT ? mT : void 0
          })
        }
        return UT
      }
      has(TT) {
        return this.members.has(TT)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(TT) {
        var UT, mT;
        return null !== (UT = null === (mT = this.members.get(TT)) || void 0 === mT ? void 0 : mT.name) && void 0 !== UT ? UT : void 0
      }
      getSettings(TT) {
        var UT;
        return null === (UT = this.members.get(TT)) || void 0 === UT ? void 0 : UT.settings
      }
      getSetting(TT, UT) {
        var mT;
        return null === (mT = this.members.get(TT)) || void 0 === mT ? void 0 : mT.settings[UT]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39172: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      g: () => zT
    });
    const WT = ["description", "label"];

    function zT(TT) {
      const UT = TT.type;
      return {
        type: UT,
        params: TT[UT]
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);