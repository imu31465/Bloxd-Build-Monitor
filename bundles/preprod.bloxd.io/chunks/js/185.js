export const id = 185;
export const ids = [185];
export const modules = {
  40305: (WW, iW, OW) => {
    function mW(WW) {
      return !(!WW.lobbyLeaderboardInfo && !WW.lobbyManage)
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  40287: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      d: () => PW
    });
    var mW = OW(27);
    let EW = !1;

    function NW() {
      return EW
    }

    function PW(WW) {
      EW !== WW && (EW = WW, mW.l.iZ("replayViewer|videoExportChanged"))
    }
  },
  40229: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(27),
      EW = OW(2061);

    function NW(WW) {
      let {
        taskId: iW,
        progress: OW
      } = WW;
      const mW = EW.d.get("_tasks");
      null !== mW && void 0 !== mW && mW[iW] && EW.d.apply({
        _tasks: {
          ...mW,
          [iW]: {
            ...mW[iW],
            progress: OW
          }
        }
      })
    }
    mW.l.subscribe("clientTaskProgress", (WW => {
      NW(WW)
    }))
  },
  40162: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EO,
      f: () => OO,
      i: () => mO
    });
    var mW = OW(2350),
      EW = OW(154),
      NW = OW(182),
      PW = OW(649),
      LW = OW(39),
      cW = OW(2365),
      wW = OW(2478),
      tW = OW(2437),
      ZW = OW(1217);
    const xW = new WeakMap;
    class lW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          FwW: !0
        };
        this.callbacks = iW, this.options = OW, this.zOW = void 0, this.sessionId = void 0, this.NK = [], this.QwW = !1, this.JA = !1, this.itW = void 0, this.iK = 0, this.sNW = 0, this.OtW = (WW, iW) => {
          if (this.JA) return;
          const OW = Number(WW);
          this.QwW ? this.mtW(OW, iW) : this.NK.push({
            id: OW,
            payload: iW
          })
        }, this.dispose = () => {
          this.JA || (this.JA = !0, xW.delete(this), this.NK.length = 0, this.itW())
        }, this.zOW = WW, this.sessionId = WW.sessionId, xW.set(this, []), this.itW = this.EtW()
      }
      NtW(WW) {
        this.itW(), this.zOW = WW, this.sessionId = WW.sessionId, this.iK = 0, this.sNW = 0, this.itW = this.EtW()
      }
      get rM() {
        return this.sNW
      }
      EtW() {
        const WW = this.zOW.zk("*", this.OtW);
        return this.options.FwW && this.zOW.Fk(this.dispose), WW
      }
      mtW(WW, iW) {
        try {
          (0, wW.rc)(WW) && (iW = (0, wW.d)(WW, tW.OZ.from(iW)));
          const OW = xW.get(this)[WW];
          if ("function" !== typeof OW) {
            if (this.callbacks.PtW) return void this.callbacks.PtW(WW, iW);
            throw new Error(`No onMessage handler registered for message id ${WW}`)
          }
          OW(iW)
        } catch (OW) {
          this.callbacks.LtW(`Error in onMessage ${WW} with payload ${JSON.stringify(iW)}`, OW)
        } finally {
          this.iK++
        }
      }
      ctW() {
        for (const {
            id: WW,
            payload: iW
          }
          of this.NK) {
          if (this.JA) break;
          this.mtW(WW, iW)
        }
        this.NK.length = 0
      }
      Ay() {
        return this.JA
      }
      wtW() {
        if (this.QwW || this.JA) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          zk: (WW, iW) => {
            if (this.QwW || this.JA) throw new Error("Trying to call onMessage after registration finished");
            this.zk(WW, iW)
          },
          finishRegistration: () => {
            if (this.JA) throw new Error("Cannot finish message registration after disposal");
            this.QwW = !0, this.ctW()
          }
        }
      }
      zk(WW, iW) {
        var OW, mW;
        null === (OW = (mW = this.callbacks).ttW) || void 0 === OW || OW.call(mW);
        const EW = xW.get(this);
        for (; WW > EW.length;) EW[EW.length] = null;
        EW[WW] = iW
      }
      send(WW, iW) {
        this.ZtW(), (0, ZW.K)(iW) ? this.zOW.VK(WW, iW) : this.zOW.send(WW, iW)
      }
      ZtW() {
        var WW, iW;
        (this.sNW++, 5 === AW++) && (null === (WW = (iW = this.callbacks).ttW) || void 0 === WW || WW.call(iW), AW = 0)
      }
      IU() {
        this.dispose(), this.zOW.IU()
      }
      leave() {
        this.dispose(), this.zOW.leave()
      }
    }
    let AW = 0;
    var bW = OW(2370);
    class jW extends lW {
      constructor(WW) {
        super(WW, {
          ttW: () => {
            (0, LW.m)(!0) && (0, mW.pM)()
          },
          LtW: (WW, iW) => {
            var OW;
            null === (OW = (0, cW.h)()) || void 0 === OW || OW.nb(WW, iW)
          }
        }, {
          FwW: !1
        }), (0, bW.f)(WW)
      }
      lK(WW, iW) {
        return !!(0, bW.i)((0, bW.d)(), this.zOW, WW, iW) && (this.ZtW(), !0)
      }
      NtW(WW) {
        this.xtW(), super.NtW(WW), (0, bW.f)(WW)
      }
      IU() {
        super.IU(), this.xtW()
      }
      xtW() {
        this.zOW.aU.tZ.nH = void 0
      }
    }
    var UW = OW(27),
      kW = OW(2061),
      sW = OW(1856),
      MW = OW(37707),
      KW = OW(40171),
      SW = OW(39228),
      YW = OW(38986),
      yW = OW(643),
      TW = OW(39588);

    function JW(WW, iW, OW) {
      const mW = function(WW) {
          const iW = new Int32Array(WW.length * TW.i);
          return WW.forEach(((WW, OW) => {
            const mW = OW * TW.i;
            if (4 === WW.length) {
              const [OW, EW, NW, PW] = WW;
              iW.set([OW, EW, NW, OW, EW, NW, PW], mW)
            } else {
              const [OW, EW, NW, PW, LW, cW, wW] = WW;
              iW.set([OW, NW, LW, EW, PW, cW, wW], mW)
            }
          })), iW
        }(OW),
        EW = (iW, OW, mW, EW) => {
          WW.setBlockNoMulti(iW, OW, mW, EW, !0)
        };
      WW.client.gameRecorder.isCapturing() ? (0, TW.qb)(mW, (0, TW.ob)(mW), EW) : WW.Hx.oZ.wT(mW, {
        pB: EW,
        isHookId: iW => WW.blockChangeHasHooks(iW),
        watched: () => function(WW, iW, OW) {
          const mW = [],
            EW = (WW, iW, OW) => {
              mW.push(WW, iW, OW)
            },
            NW = new Set;
          for (let PW = 0; PW < OW.length; PW += TW.i)
            for (let iW = (0, yW.U)(OW[PW]); iW <= (0, yW.U)(OW[PW + 3]); iW++)
              for (let mW = (0, yW.U)(OW[PW + 1]); mW <= (0, yW.U)(OW[PW + 4]); mW++)
                for (let LW = (0, yW.U)(OW[PW + 2]); LW <= (0, yW.U)(OW[PW + 5]); LW++) {
                  const OW = `${iW}|${mW}|${LW}`;
                  NW.has(OW) || (NW.add(OW), WW.blockDataOwner.forEachDataCell(iW, mW, LW, EW))
                }
          return iW.forEachCell(EW), Int32Array.from(mW)
        }(WW, iW, mW)
      }), WW.Hx.OiW()
    }

    function hW(WW) {
      WW.pOW = new Set, WW.XOW = new Set, WW.fOW = new Set, WW.BOW = new Set, WW.COW = [], WW.qOW = [], WW.BX = new Set, WW.RO = [], WW.FX = []
    }
    class HW {
      constructor(WW) {
        this.Hx = WW
      }
      register(WW) {
        const iW = this.Hx,
          OW = (0, cW.d)();
        WW.zk(wW._, (WW => {
          iW.oZ.pOW.add(WW), iW.oZ.XOW.delete(WW)
        })), WW.zk(wW.jb, (WW => {
          iW.oZ.XOW.add(WW), iW.oZ.pOW.delete(WW)
        })), WW.zk(wW.ge, (WW => {
          iW.oZ.XOW.delete(WW), iW.oZ.pOW.delete(WW)
        })), WW.zk(wW.gb, (WW => {
          iW.oZ.fOW.add(WW), iW.oZ.BOW.delete(WW)
        })), WW.zk(wW.ob, (WW => {
          iW.oZ.BOW.add(WW), iW.oZ.fOW.delete(WW)
        })), WW.zk(wW.me, (WW => {
          iW.oZ.BOW.delete(WW), iW.oZ.fOW.delete(WW)
        })), WW.zk(wW.cb, (WW => {
          (0, ZW.ob)(WW, iW.oZ.qOW), (0, ZW.ob)(WW, iW.oZ.COW), iW.oZ.COW.push(WW)
        })), WW.zk(wW.kb, (WW => {
          (0, ZW.ob)(WW, iW.oZ.COW), (0, ZW.ob)(WW, iW.oZ.qOW), iW.oZ.qOW.push(WW)
        })), WW.zk(wW.je, (WW => {
          (0, ZW.ob)(WW, iW.oZ.COW), (0, ZW.ob)(WW, iW.oZ.qOW)
        })), WW.zk(wW.wf, (WW => {
          let {
            Qm: OW,
            WE: mW
          } = WW;
          mW ? iW.oZ.BX.delete(OW) : iW.oZ.BX.add(OW)
        })), WW.zk(wW.sf, (WW => {
          let {
            RO: mW,
            GO: EW
          } = WW;
          OW.updateWalkThroughRect(iW.Dv, mW, EW)
        })), (0, mW.onGameResetOnce)((() => {
          hW(iW.oZ)
        })), WW.zk(wW.kc, (WW => {
          SW.c.applyServerUpdate(WW)
        })), WW.zk(wW.vb, (WW => {
          OW.applyServerBlocks((() => {
            ! function(WW, iW) {
              for (const {
                  Zi: OW,
                  xi: mW
                }
                of iW) {
                const iW = YW.d[mW];
                if (iW) {
                  const {
                    compX: mW,
                    compY: EW,
                    compZ: NW,
                    mainMultiblock: PW
                  } = iW;
                  WW.xH(OW[0] - mW, OW[1] - EW, OW[2] - NW, PW)
                }
              }
              for (const {
                  Zi: OW,
                  xi: mW,
                  li: EW
                }
                of iW) WW.setBlockNoMulti(OW[0], OW[1], OW[2], mW, !0), WW.blockDataOwner.setBlockData(OW[0], OW[1], OW[2], null === EW ? void 0 : JSON.parse(EW)), WW.blockAdded(OW[0], OW[1], OW[2], mW)
            }(OW, WW)
          })), UW.l.iZ("changeBlockFail", WW), UW.l.iZ("blockChangeRefused"), OW.client.triggerGameCallback("onChangeBlockFail", WW), UW.l.iZ("EditBoard", {
            pos: null
          }), UW.l.iZ("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        }));
        const EW = WW => {
          OW.applyServerBlocks((() => {
            JW(OW, SW.c, WW)
          }))
        };
        WW.zk(wW.Tb, EW), WW.zk(wW.dc, EW), WW.zk(wW.lf, (WW => {
          let {
            tN: iW,
            ZN: mW
          } = WW;
          if (OW.JR(iW[0], iW[1], iW[2])) {
            const WW = (0, cW.d)().Yk(iW[0], iW[1], iW[2]);
            (0, cW.d)().updateMailboxContents(iW[0], iW[1], iW[2], WW, mW)
          }
        })), WW.zk(wW.De, (WW => {
          let {
            pos: iW,
            data: mW
          } = WW;
          OW.blockDataOwner.setBlockData(iW[0], iW[1], iW[2], mW), OW.blockAdded(iW[0], iW[1], iW[2], OW.Yk(iW[0], iW[1], iW[2]))
        }))
      }
    }
    var nW = OW(38314),
      uW = OW(37575),
      oW = OW(39255),
      dW = OW(39103),
      eW = OW(39265);
    class vW {
      constructor(WW, iW) {
        this.Hx = WW, this.setUpQueuedEntity = iW
      }
      register(WW) {
        const iW = this.Hx,
          OW = (0, cW.d)();
        WW.zk(wW.Z, (WW => {
          let {
            WW: iW,
            iW: OW
          } = WW;
          this.setUpQueuedEntity(iW), iW = (0, uW.b)(iW), (0, cW.d)().client.gameRecorder.recordBulletShot(iW, OW), UW.l.iZ(`bulletShot|${iW}`, {
            bulletDirections: OW
          })
        })), WW.zk(wW.nc, (WW => {
          let {
            ME: iW,
            KE: OW
          } = WW;
          UW.l.iZ("damagedByOtherPlayer", {
            ME: iW,
            direction: OW
          }, !0)
        })), WW.zk(wW.Id, (WW => {
          UW.l.iZ("playerKilled", WW, !0), (0, uW.g)(WW.killerEId) && !(0, uW.g)(WW.deadEId) && UW.l.iZ("sessionReplayPlayerKill", {
            killstreak: WW.killstreak
          }), (0, cW.d)().client.gameRecorder.recordPlayerKilled(WW.deadEId, WW.killerEId, WW.withItem, WW.killstreak)
        })), WW.zk(wW.Xb, (WW => {
          UW.l.iZ("customKillfeed", WW, !0), (0, cW.d)().client.gameRecorder.recordCustomKillfeed(WW.killer, WW.victim, WW.withItem)
        })), WW.zk(wW.Pd, (WW => {
          let {
            Em: OW,
            Nm: mW
          } = WW;
          this.setUpQueuedEntity(OW);
          const EW = iW.EY.kOW(OW);
          null !== EW && void 0 !== EW && EW.isGun() && EW.reload(Date.now(), mW)
        })), WW.zk(wW.ze, (WW => {
          let {
            ui: OW,
            oi: mW
          } = WW;
          const EW = mW ? (0, eW.d)(iW, mW) : void 0;
          UW.l.iZ("sendHitmarker", {
            ui: OW,
            screenPos: EW
          }, !0)
        })), WW.zk(wW.Sc, (WW => {
          let {
            nE: mW,
            uE: EW,
            dE: NW,
            eE: PW,
            vE: LW,
            gE: cW,
            DE: wW
          } = WW;
          this.setUpQueuedEntity(mW), mW = (0, uW.b)(mW);
          const tW = iW.EY.ZOW(mW);
          if (tW && (tW.lastHurtTime = performance.now()), (0, oW.playRigHurt)(iW, mW, cW), UW.l.iZ("lifeformHurt", {
              eId: mW,
              DE: wW
            }), EW) {
            const WW = (0, eW.d)(iW, EW.oi);
            UW.l.iZ("yourAttackHit", {
              ui: PW,
              screenPos: WW,
              hitSelf: mW === iW.Dv
            })
          }
          mW === iW.Dv && (OW.shakePlayerCamera(mW, LW / 40, 200), UW.l.iZ("closeShopOnDamaged", null), UW.l.iZ("damagedByOtherPlayer", {
            ME: null,
            direction: cW,
            vE: LW
          }, !0));
          const ZW = iW.EY.Vk(mW);
          if (ZW && (NW || PW)) {
            const WW = [ZW[0], ZW[1] + 1, ZW[2]];
            NW && (0, dW.m)(iW, dW.E, WW, 15), PW && (0, dW.m)(iW, dW.s, WW, 10)
          }
        })), WW.zk(wW.Pc, (WW => {
          let {
            aE: OW,
            rE: mW,
            zE: EW
          } = WW;
          (0, nW.e)(iW).setHealthFrac((0, uW.b)(OW), EW), UW.l.iZ("lifeformHealthChanged", {
            eId: (0, uW.b)(OW),
            rE: mW,
            zE: EW
          })
        })), WW.zk(wW.V, (WW => {
          let {
            cE: OW,
            wE: mW
          } = WW;
          (0, cW.d)().playerAttacked(iW.Dv, OW, mW)
        })), WW.zk(wW.zb, (() => {
          const WW = iW.EY.kOW(iW.Dv);
          null !== WW && void 0 !== WW && WW.isChargeable() && WW.finishCharging(!1, Date.now())
        })), WW.zk(wW._b, (WW => {
          let {
            FN: iW,
            QN: OW,
            WP: mW,
            iP: EW,
            OP: NW,
            mP: PW
          } = WW;
          iW = (0, uW.b)(iW), (0, cW.d)().client.updateEffect(iW, OW, {
            displayName: mW,
            icon: EW,
            duration: NW,
            level: PW
          })
        })), WW.zk(wW.Qd, (WW => {
          let {
            FN: iW,
            QN: OW
          } = WW;
          iW = (0, uW.b)(iW), (0, cW.d)().client.removeEffect(iW, OW)
        })), WW.zk(wW.hf, (WW => {
          UW.l.iZ("ttbEffectMultiplier", WW)
        }))
      }
    }
    var gW = OW(40194),
      DW = OW(38307),
      VW = OW(2918),
      pW = OW(39274),
      fW = OW(37555),
      CW = OW(37559),
      XW = OW(38219),
      BW = OW(38336),
      qW = OW(39280),
      RW = OW(40203);
    class GW {
      constructor(WW, iW) {
        this.Hx = WW, this.setUpQueuedEntity = iW
      }
      register(WW) {
        const iW = this.Hx,
          OW = (0, cW.d)();
        WW.zk(wW.bd, (WW => {
          let {
            eId: OW,
            settings: mW
          } = WW;
          (0, BW.c)(OW);
          for (const iW in mW)(0, BW.b)(OW, iW, mW[iW]);
          if ("canSee" in mW && iW.EY.liW(OW, "hidingMeshManager")) {
            const WW = iW.EY.getState(OW, "hidingMeshManager");
            WW.canSee = (0, qW.b)("canSee", mW.canSee), WW._forceUpdate = !0
          }
        })), WW.zk(wW.M, (WW => {
          let {
            ZO: OW,
            xO: mW,
            animationScript: EW,
            lO: NW,
            AO: PW,
            bO: LW,
            jO: wW
          } = WW;
          OW = (0, uW.b)(OW);
          const tW = null === EW && null !== LW ? (0, gW.f)(LW, wW) : EW;
          (0, cW.d)().client.gameRecorder.recordAnimateEntity(OW, mW, tW, NW, PW), (0, nW.e)(iW).animations.animateEntity(OW, mW, EW, NW, PW, LW, wW), null !== EW || OW === iW.Dv && mW === DW.d.Emote && (0, cW.d)().client.cameraController.endTemporaryThirdPerson()
        })), WW.zk(wW.ye, (WW => {
          (0, RW.e)(WW)
        })), WW.zk(wW.Fd, (WW => {
          for (const iW of WW)(0, pW.B)(iW);
          UW.l.iZ("playerCosmeticsUpdated", WW, !0)
        })), WW.zk(wW.R, (WW => {
          for (const OW of WW)(0, XW.f)(iW, OW)
        })), WW.zk(wW.dd, (WW => {
          (0, dW.q)(iW, (0, ZW.w)(WW))
        })), WW.zk(wW.hd, (WW => {
          VW.e[WW.LE] ? (0, dW.q)(iW, {
            ...VW.e[WW.LE],
            pos1: WW.pos1,
            pos2: WW.pos2
          }) : console.error(`Unknown preset id: ${WW.LE}`)
        })), WW.zk(wW.Bd, (WW => {
          var iW, OW;
          let {
            IO: mW,
            aO: EW,
            rO: NW,
            zO: PW
          } = WW, {
            QO: LW,
            Wm: wW
          } = null !== PW && void 0 !== PW ? PW : {};
          const {
            FO: tW
          } = null !== PW && void 0 !== PW ? PW : {};
          LW = null !== (iW = LW) && void 0 !== iW ? iW : void 0, wW = null !== (OW = wW) && void 0 !== OW ? OW : void 0, "string" === typeof tW && this.setUpQueuedEntity(tW), (0, cW.d)().client.gameRecorder.recordPlaySound(mW, EW, NW, PW), fW.c.play((0, CW.h)(mW), EW, tW, LW, wW).rate(NW)
        })), WW.zk(wW.nf, (WW => {
          for (const iW in WW) {
            const mW = WW[iW];
            for (const WW in mW) OW.client.meshCreator.handleParticleSystemUpdate(iW, WW, mW[WW])
          }
        }))
      }
    }
    var IW = OW(38963),
      aW = OW(38928);
    class rW {
      constructor(WW) {
        this.Hx = WW
      }
      register(WW) {
        const iW = this.Hx,
          OW = (0, cW.d)();

        function mW() {
          return iW.EY.ziW(iW.Dv)
        }
        WW.zk(wW.Bc, (WW => {
          let {
            tE: OW,
            ZE: mW,
            xE: EW,
            lE: NW,
            AE: PW,
            bE: LW,
            jE: cW,
            UE: wW,
            kE: tW
          } = WW;
          if (!iW.EY.liW(OW, "itemState")) return void(0, IW.l)(iW, OW, [PW, LW, cW], mW, {
            amount: EW,
            attributes: JSON.parse(NW),
            UE: wW,
            size: tW
          });
          const ZW = iW.EY.getState(OW, "itemState");
          ZW.amount = EW, ZW.UE = wW, ZW.creationTime = Date.now(), (0, aW.setServerPosition)(iW.EY.getState(OW, "smoothToServerPos"), PW, LW, cW)
        })), WW.zk(wW.sb, (WW => {
          (0, nW.e)(iW).setCantPickUp(WW, !0), iW.EY.liW(WW, "itemState") && (iW.EY.getState(WW, "itemState").UE = !0)
        })), WW.zk(wW.ce, (WW => {
          (0, nW.e)(iW).setCantPickUp(WW, !1), iW.EY.liW(WW, "itemState") && (iW.EY.getState(WW, "itemState").UE = !1)
        })), WW.zk(wW.ud, (WW => {
          let {
            pickUpItems: iW,
            pickUpAckSeq: OW
          } = WW;
          for (const {
              name: EW,
              amount: NW,
              attributes: PW
            }
            of iW) mW().pickUpItem({
            name: EW,
            amount: NW,
            typeObj: IW.z[EW],
            attributes: PW
          });
          (0, cW.d)().client.inventoryPrediction.serverChangeApplied(OW)
        })), WW.zk(wW.Ne, (WW => {
          let {
            index: OW,
            name: mW,
            amount: EW,
            attributes: NW,
            setSlotAckSeq: PW
          } = WW;
          const LW = iW.EY.FiW(iW.Dv);
          (OW < LW.playerInventory.numSlots || LW.EO || LW.inCreative) && LW.setItemSlot(OW, mW, EW, NW), (0, cW.d)().client.inventoryPrediction.serverChangeApplied(PW)
        })), WW.zk(wW.zc, (WW => {
          (0, cW.d)().client.inventoryPrediction.acknowledge(WW)
        })), WW.zk(wW.I, (WW => {
          let {
            Vi: iW,
            Ci: OW,
            Xi: mW,
            Bi: EW
          } = WW;
          (0, cW.d)().client.itemDropPrediction.onActionItemDrops(iW, OW, mW, EW)
        })), WW.zk(wW.Qb, (WW => {
          mW().clearInventory(), (0, cW.d)().client.inventoryPrediction.serverChangeApplied(WW)
        })), WW.zk(wW.Qe, (WW => {
          UW.l.iZ("setSelectedInventorySlotI", WW, !0)
        })), WW.zk(wW.Ib, (WW => {
          let {
            VE: OW,
            pE: mW,
            fE: EW,
            CE: NW,
            XE: PW,
            qE: LW,
            RE: wW,
            GE: tW
          } = WW;
          const ZW = iW.EY.FiW(iW.Dv);
          if (LW) {
            const {
              mO: WW,
              tO: iW
            } = tW;
            return (0, cW.d)().client.inventoryPrediction.YWW(iW, (() => {
              ZW.chestRefreshed(mW, EW, NW, wW, WW)
            })) && UW.l.iZ("chestToggleFromServer", !1, !0), void UW.l.iZ("chestRefreshedFromServer")
          }(OW || ZW.EO) && (OW ? (ZW.chestOpened(mW, EW, NW, PW, wW), null !== PW && (0, cW.d)().client.ironChestPasskeyCache.onChestOpened(NW, PW)) : ZW.chestClosed(), UW.l.iZ("chestToggleFromServer", OW, !0))
        })), WW.zk(wW.Zb, (WW => {
          let {
            craftingRecipeItemName: mW,
            recipesForItem: EW
          } = WW;
          mW ? OW.craftingManager.editRecipesForPlayer(iW.Dv, mW, EW) : OW.craftingManager.resetAllPlayerRecipes(iW.Dv), UW.l.iZ("craftingRecipesEdited", {
            itemName: mW,
            recipesForItem: EW
          })
        })), WW.zk(wW.Vd, (WW => {
          let {
            mi: iW,
            Ei: OW,
            Ni: EW
          } = WW;
          mW().removeItemName(iW, OW), (0, cW.d)().client.inventoryPrediction.serverChangeApplied(EW)
        })), WW.zk(wW.Ud, (WW => {
          let {
            Oi: mW
          } = WW;
          OW.craftingManager.removeRecipes(iW.Dv, mW), UW.l.iZ("craftingRecipesEdited", {
            itemName: mW,
            recipesForItem: []
          })
        }))
      }
    }
    var zW = OW(7453),
      FW = OW(38787),
      QW = OW(352),
      Wi = OW.n(QW),
      ii = OW(5230),
      Oi = OW(38866),
      mi = OW(39422),
      Ei = OW(38782);
    class Ni {
      constructor(WW, iW) {
        this.Hx = WW, this.setUpQueuedEntity = iW
      }
      register(WW) {
        const iW = this.Hx,
          OW = (0, cW.d)();
        WW.zk(wW.af, (WW => {
          let {
            Fi: OW,
            Qi: EW,
            WO: NW,
            iO: PW
          } = WW;
          const LW = [EW, NW, PW];
          iW.EY.setPosition(iW.Dv, LW), (0, mW.sendColyMessage)(wW.Fg, {
            zt: OW,
            Ft: ii.g
          }), UW.l.iZ("localPlayerTeleported", {
            pos: LW,
            isCorrection: !1
          })
        })), WW.zk(wW.qd, (WW => {
          let {
            di: iW,
            ei: OW,
            gi: mW,
            Di: EW
          } = WW;
          this.setUpQueuedEntity(iW);
          const NW = [OW, mW, EW];
          UW.l.iZ(`otherPlayerTeleported|${iW}`, {
            pos: NW
          })
        })), WW.zk(wW.Jd, (WW => {
          let {
            oW: OW,
            dW: EW,
            eW: NW,
            vW: PW,
            gW: LW,
            DW: cW,
            VW: tW,
            fW: ZW,
            pW: xW,
            qW: lW
          } = WW;
          const AW = [EW, NW, PW];
          iW.EY.setPosition(iW.Dv, AW);
          const bW = iW.EY.HiW(iW.Dv),
            jW = iW.EY.jB(iW.Dv);
          Wi().set(jW.eC, 0, 0, 0), Wi().set(jW.gC, 0, 0, 0), Wi().set(jW.Sj, LW, cW, tW), jW.pC(), bW._flying = null !== lW, lW ? (bW.flyAccel.RW = lW.RW, bW.flyAccel.GW = lW.GW) : bW.flyAccel.reset(), ZW && bW.movementType === zW.m.GLIDING && (bW.XW = ZW.XW, Wi().copy(bW.BW, ZW.BW)), (0, mW.sendColyMessage)(wW.Fg, {
            zt: OW,
            Ft: ii.g
          }), UW.l.iZ("localPlayerTeleported", {
            pos: AW,
            isCorrection: !0
          })
        })), WW.zk(wW.Te, (WW => {
          let {
            vehicleEId: iW,
            overrides: OW
          } = WW;
          (0, cW.d)().applyRiddenVehicleSettingOverrides(iW, OW)
        })), WW.zk(wW.pf, (WW => {
          let {
            iE: OW,
            OE: mW,
            mE: EW
          } = WW;
          const NW = iW.EY.HiW(iW.Dv).physicsState.type === zW.p.SLEEPING && OW === zW.p.DEFAULT;
          (0, cW.d)().updatePositionAndPhysics(iW.Dv, {
            type: OW,
            tier: mW
          }, !0, EW), NW && (0, cW.d)().updateHeldVehicleStatus()
        })), WW.zk(wW.wb, (WW => {
          let {
            PN: OW,
            LN: mW
          } = WW;
          iW.EY.aiW(iW.Dv).setPose(OW, mW)
        })), WW.zk(wW.Ee, (WW => {
          const {
            PZ: OW,
            hOW: mW
          } = (0, FW.e)([WW[0], WW[1], WW[2]]);
          Ei.b.setLookDirection(iW, OW, mW), (0, Oi.r)(OW, mW);
          const EW = iW.EY.aiW(iW.Dv);
          EW && (EW.heading = OW)
        })), WW.zk(wW.Ge, (WW => {
          OW.client.cameraController.setCameraZoom(WW)
        })), WW.zk(wW.Ye, (WW => {
          let {
            im: mW,
            Om: EW
          } = WW;
          OW.shakePlayerCamera(iW.Dv, mW, EW)
        })), WW.zk(wW.Ec, (WW => {
          iW.EY.aiW(iW.Dv).jumpMultiplier.setMultiplierType("jumpEffectAmount", WW)
        })), (0, mW.onGameResetOnce)((() => {
          iW.EY.aiW(iW.Dv).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), WW.zk(wW.Q, (WW => {
          iW.EY.jB(iW.Dv).applyImpulse(WW)
        })), WW.zk(wW.We, (WW => {
          const OW = iW.EY.jB(iW.Dv);
          Wi().set(OW.eC, 0, 0, 0), Wi().set(OW.gC, 0, 0, 0), Wi().copy(OW.Sj, WW), OW.pC()
        })), (0, mW.onGameResetOnce)((() => {
          (0, mi.setFloatingYValue)(iW.EY.getState(iW.Dv, "physics"), iW.EY.YG(iW.Dv), null)
        })), WW.zk(wW.cc, (WW => {
          let {
            aN: OW,
            rN: mW,
            zN: EW
          } = WW;
          const NW = (0, uW.b)(OW);
          if (NW === iW.Dv) {
            const WW = iW.EY.YG(iW.Dv).position;
            EW ??= Math.floor(WW[1]) - 1, (0, mi.setFloatingYValue)(iW.EY.getState(iW.Dv, "physics"), iW.EY.YG(iW.Dv), mW ? EW : null)
          }(0, nW.e)(iW).setFloating(NW, mW, EW);
          const PW = iW.EY.getState(NW, "floating");
          PW && (PW.isFloating = mW, PW.zN = mW ? EW : null)
        }))
      }
    }

    function Pi(WW, iW, OW, mW, EW) {
      let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!WW.EY.riW(WW.Dv)) return console.log("Got resync inven but don't have inven component"), void iW.acknowledge(mW);
      NW && console.error("Had to sync inven"), iW.YWW(mW, EW) && OW.iZ("chestToggleFromServer", !1, !0), OW.iZ("syncedInvenFromServer")
    }
    var Li = OW(40213),
      ci = OW(10167),
      wi = OW(40216),
      ti = OW(2066);
    var Zi = OW(5211);

    function xi(WW) {
      const iW = WW.oZ;
      let OW = 0,
        EW = -1,
        PW = -1 / 0,
        LW = null,
        cW = !0;
      const tW = () => {
        if (++OW % 10 !== 0) return;
        const tW = (0, mW.getLastReceivedPacketId)();
        if (tW <= EW) return;
        const [ZW, xW, lW] = WW.EY.Vk(WW.Dv), AW = ! function(WW) {
          var iW;
          let OW = null === (iW = WW.EY.uOW(WW.Dv)) || void 0 === iW ? void 0 : iW.MA;
          if (void 0 === OW) return !1;
          const mW = new Set;
          for (; void 0 !== OW && !mW.has(OW);) {
            var EW;
            mW.add(OW);
            const iW = WW.EY.getState(OW, "smoothToServerPos"),
              NW = Array.isArray(iW) ? null : null === iW || void 0 === iW ? void 0 : iW.serverPosition;
            if (NW) {
              const iW = WW.EY.Vk(OW);
              if (Math.abs(iW[0] - NW[0]) > 10 || Math.abs(iW[1] - NW[1]) > 10 || Math.abs(iW[2] - NW[2]) > 10) return !0
            }
            OW = null === (EW = WW.EY.uOW(OW)) || void 0 === EW ? void 0 : EW.MA
          }
          return !1
        }(WW) && function(WW, iW, OW, mW) {
          const EW = NW.f.jZ;
          for (let NW = 0; NW < WW.length; NW++) {
            const PW = WW[NW];
            if (!(0, Zi.l)(iW, OW, mW, PW[0] * EW, PW[1] * EW, PW[2] * EW)) return !1
          }
          return !0
        }(iW.Pj.LZ, ZW, xW, lW), bW = null === LW || Math.abs(ZW - LW[0]) > 8 || Math.abs(xW - LW[1]) > 8 || Math.abs(lW - LW[2]) > 8, jW = !cW || bW || performance.now() - PW >= 1e4;
        cW = AW, AW && jW && (EW = tW, PW = performance.now(), LW = [ZW, xW, lW], (0, mW.sendColyMessage)(wW.gg, {
          dt: tW
        }))
      };
      return WW.on("hZ", tW), () => {
        WW.off("hZ", tW)
      }
    }
    var li = OW(40221),
      Ai = OW(1605),
      bi = OW(3822),
      ji = OW(1937),
      Ui = OW(3960),
      ki = OW(5525);
    class si {
      constructor(WW, iW, OW) {
        this.Hx = WW, this.gameNameWithVariation = iW, this.connectionResume = OW, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        ki.d.reset(), (0, Li.c)()
      }
      startChunkReports() {
        const WW = function(WW) {
            let iW = null,
              OW = -1 / 0,
              EW = null;
            const NW = () => {
                EW = null;
                const NW = Math.ceil(WW.VJ[0]),
                  PW = Math.ceil(WW.VJ[1]);
                iW && iW[0] === NW && iW[1] === PW || (iW = [NW, PW], OW = performance.now(), (0, mW.sendColyMessage)(wW.cg, {
                  zL: NW,
                  FL: PW
                }))
              },
              PW = () => {
                null === EW && (EW = setTimeout(NW, Math.max(0, OW + 250 - performance.now())))
              };
            return NW(), WW.on("addRemoveDistanceChanged", PW), () => {
              WW.off("addRemoveDistanceChanged", PW), null !== EW && (clearTimeout(EW), EW = null)
            }
          }(this.Hx.oZ),
          iW = xi(this.Hx);
        this.stopChunkReports = () => {
          WW(), iW()
        }
      }
      restartChunkStreaming() {
        (0, Oi.h)(this.Hx, (0, cW.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - li.d)), this.startChunkReports()
      }
      register(WW) {
        const iW = this.Hx,
          OW = (0, cW.d)();
        WW.zk(wW.$c, (WW => {
          kW.d.applyNewClientOptions(WW)
        })), WW.zk(wW.yd, (WW => {
          bi.b.onReceiveColyseusPing(WW)
        })), WW.zk(wW.Ie, (WW => {
          let {
            key: iW,
            value: OW
          } = WW;
          (0, sW.setCookie)(this.gameNameWithVariation, iW, OW)
        })), WW.zk(wW.Le, (WW => {
          UW.l.iZ("setDiscordReportKey", WW)
        })), (0, mW.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), WW.zk(wW.uc, (EW => {
          const {
            Ai: NW,
            bi: PW
          } = EW;
          if ((0, mW.setAdjustment)(PW), this.connectionResume.onInitialInfo(EW.ji, EW.Ui), mW.offlineInputReplay.WK(EW.ki), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", NW);
            try {
              null === EW.si && (0, cW.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), hW(iW.oZ), kW.d.apply({
                shopInfo: null,
                _shopVersion: ti.c
              });
              const OW = iW.EY.FiW(iW.Dv);
              OW.EO && (OW.chestClosed(), UW.l.iZ("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), UW.l.iZ("initInfoReceived", WW)
            } finally {
              const WW = null === EW.si ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = WW, this.connectionResume.onResumeInitialInfo(EW.si, (() => {
                WW.endSeq = (0, cW.d)().client.inventoryPrediction.lastActionSeq
              })), null === WW && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", NW), UW.l.iZ("sessionReplayJoinTicket", EW.Yi), ji.d.markAdmitted(), (0, Oi.i)(iW), UW.l.iZ("loadingScreenState", "loadingPage:loadingWorld"), iW.Av = NW, iW.EY.liW(iW.Dv, iW.EY.names.entityName) && iW.EY.mV(iW.Dv, iW.EY.names.entityName), (0, cW.d)().setEntityName(iW.Av, (0, cW.d)().getRawEntityName(iW.Dv)), iW.sV[iW.Av] = {}, iW.EY.zD(iW.Dv, iW.EY.names.entityName), UW.l.iZ("initInfoReceived", WW), this.startChunkReports(), OW.client.onServerConnectionFinalised()
        })), WW.zk(wW.xe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const WW = this.replayResume;
            if (this.replayResume = null, !WW) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: OW
            } = (0, cW.d)().client, {
              sync: EW
            } = WW, NW = new Set(mW.offlineInputReplay.takeDroppedActions());
            if (EW) {
              var PW;
              const mW = null !== (PW = WW.endSeq) && void 0 !== PW ? PW : OW.lastActionSeq;
              OW.forget((WW => WW > EW.tO && WW <= mW || NW.has(WW))), Pi(iW, OW, UW.l, EW.tO, EW.load)
            } else OW.dropPending(), OW.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), WW.zk(wW._e, (WW => {
          let {
            OO: OW,
            wO: mW,
            tO: EW
          } = WW;
          const {
            inventoryPrediction: NW
          } = (0, cW.d)().client, PW = () => {
            iW.EY.FiW(iW.Dv).loadFromString(OW)
          };
          this.replayResume && (this.replayResume.sync = {
            tO: EW,
            load: PW
          }), Pi(iW, NW, UW.l, EW, PW, mW)
        })), WW.zk(wW.Od, (WW => {
          let {
            type: iW,
            location1: OW,
            location2: mW,
            location3: EW,
            score: NW
          } = WW;
          (0, Ui.logProgressionEvent)({
            type: iW,
            location1: OW,
            location2: mW,
            location3: EW,
            score: NW
          })
        })), WW.zk(wW.ue, (WW => {
          let {
            type: iW,
            resourceType: OW,
            amount: mW,
            category: EW,
            itemName: NW
          } = WW;
          (0, Ui.logResourceEvent)({
            type: iW,
            resourceType: OW,
            amount: mW,
            category: EW,
            itemName: NW
          })
        })), WW.zk(wW.Lc, (WW => {
          let {
            leaveEventType: iW,
            category: OW,
            subCategory: mW,
            value: EW
          } = WW;
          (0, Ui.updateLeaveValue)({
            leaveEventType: iW,
            category: OW,
            subCategory: mW,
            value: EW
          })
        })), WW.zk(wW.Wb, (WW => {
          let {
            cat1: iW,
            cat2: OW,
            cat3: mW,
            value: EW
          } = WW;
          (0, Ui.logCustomAnalyticsEvent)({
            cat1: iW,
            cat2: OW,
            cat3: mW,
            value: EW
          })
        })), WW.zk(wW.Fc, (WW => {
          (0, cW.d)().client.leaveGameUnwanted({
            reason: (0, ci.d)(WW),
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Ai.navigatePreserveSearch)("/")
        })), WW.zk(wW.Ae, (WW => {
          UW.l.iZ("serverUpdating", Date.now() + WW, !0)
        })), WW.zk(wW._c, wi.d), WW.zk(wW.Vc, (WW => {
          console.error(`[logErrorToConsole]: ${WW}`)
        }))
      }
    }
    var Mi = OW(40229),
      Ki = OW(40242),
      Si = OW(1052),
      Yi = OW(40233),
      yi = OW(3323),
      Ti = OW(4866);
    class Ji {
      constructor(WW, iW) {
        this.Hx = WW, this.clientApi = iW
      }
      register(WW) {
        const iW = this.Hx,
          OW = (0, cW.d)();
        WW.zk(wW.Eb, (WW => {
          let {
            chatMsgId: iW,
            worldCodeLineId: OW,
            content: mW,
            chatterEId: EW,
            chatterObjectsToReplay: NW
          } = WW;
          UW.l.iZ("chat", {
            serverChatMsgId: iW,
            worldCodeLineId: OW,
            content: mW,
            chatterEId: EW,
            chatterObjectsToReplay: NW
          }, !0)
        })), WW.zk(wW.Ab, (WW => {
          let {
            chatMsgId: iW
          } = WW;
          UW.l.iZ("chatRemoved", iW, !0)
        })), WW.zk(wW.df, (WW => {
          UW.l.iZ("TopRightHelper", WW, !0)
        })), WW.zk(wW.$e, (WW => {
          (0, Mi.d)(WW)
        })), WW.zk(wW.Hc, (WW => {
          let {
            category: iW,
            timeframe: OW,
            data: mW
          } = WW;
          UW.l.iZ("leaderboardResponse", {
            category: iW,
            timeframe: OW,
            data: mW
          })
        })), WW.zk(wW.Ze, (() => {
          UW.l.iZ("showShopTutorial", null, !0)
        })), WW.zk(wW.Nd, (WW => {
          UW.l.iZ("progressBarUpdate", WW, !0)
        })), WW.zk(wW.xc, (WW => {
          UW.l.iZ("middleScreenBarInitiate", {
            duration: WW.xN,
            lN: WW.lN,
            horizBarRemOffset: WW.bN
          }, !0)
        })), WW.zk(wW.Xd, (() => {
          UW.l.iZ("middleScreenBarRemove", !0)
        })), WW.zk(wW.Ke, (WW => {
          let {
            id: iW,
            position: OW,
            style: mW,
            Gi: EW,
            zi: NW
          } = WW;
          UW.l.iZ("setDirectionArrow", {
            id: iW,
            position: OW,
            style: mW,
            text: (0, wW.w)(EW),
            zi: NW
          }, !0)
        })), WW.zk(wW.Mb, (WW => {
          let {
            id: iW
          } = WW;
          UW.l.iZ("clearDirectionArrow", {
            id: iW
          }, !0)
        })), WW.zk(wW.Ub, (WW => {
          (0, Ti.onCosmeticPackGranted)(WW)
        })), WW.zk(wW.kd, (WW => {
          let {
            id: iW,
            jN: OW
          } = WW;
          const {
            type: EW,
            params: NW
          } = (0, Ki.f)(OW), PW = {
            ...NW
          };
          for (const mW of Ki.c) mW in PW && PW[mW] && (PW[mW] = (0, wW.w)(PW[mW]));
          ki.d.queueQTE(iW, EW, PW).getResult().then((WW => {
            "boolean" === typeof WW && (0, mW.sendColyMessage)(wW.ki, {
              qteId: iW,
              qteResponse: WW
            })
          }))
        })), WW.zk(wW._d, (WW => {
          ki.d.cancelQTE(WW)
        })), (0, mW.onGameResetOnce)((() => {
          ki.d.reset()
        })), WW.zk(wW.md, (WW => {
          let {
            id: iW,
            clientParameters: OW
          } = WW;
          (0, Li.f)(iW, OW)
        })), WW.zk(wW.ae, (WW => {
          (0, Li.h)(WW)
        })), WW.zk(wW.jf, (WW => {
          let {
            text: iW,
            id: OW,
            destructive: EW
          } = WW;
          (0, Li.j)(OW, iW, EW, (WW => {
            (0, mW.sendColyMessage)(wW.Dj, {
              jP: OW,
              UP: WW,
              kP: 5
            })
          }))
        })), WW.zk(wW.rd, (WW => {
          let {
            info: iW
          } = WW;
          UW.l.iZ("overShopInfo", iW, !0)
        })), WW.zk(wW.hc, (WW => {
          let {
            Hi: OW,
            ni: mW
          } = WW;
          this.clientApi.openShop(iW.Dv, OW, mW)
        })), WW.zk(wW.gc, (WW => {
          let {
            qN: iW,
            RN: OW,
            GN: mW
          } = WW;
          UW.l.iZ("flyingMiddleMessage", {
            content: (0, wW.w)(iW),
            RN: OW,
            GN: mW
          }, !0)
        })), WW.zk(wW.yf, (WW => {
          const iW = WW === Si.e ? null : {
            message: `Currently loaded as variation: ${WW}`,
            type: "Warning"
          };
          UW.l.iZ("showPermanentBottomMessage", iW, !0)
        })), WW.zk(wW.jc, (WW => {
          let {
            messageType: iW,
            data: mW
          } = WW;
          (0, Yi.g)(iW) ? (0, Yi.d)(iW, mW) : ("freeCamPerms" === iW && OW.client.freeCameraController.setPerms(mW.key, mW.value), OW.client.triggerGameCallback("onReceivedMessageFromServer", iW, mW))
        })), WW.zk(wW.Rb, yi.k)
      }
    }
    class Hi {
      constructor(WW, iW, OW, mW) {
        this.gameNameWithVariation = WW, this.Hx = OW, this.connectionResume = mW, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new KW.d(iW, this.Hx)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, mW.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      NtW(WW) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new KW.d(WW, this.Hx), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(WW, iW) {
        const OW = this.Hx,
          mW = WW => {
            this.stateReplicationHandler.setUpIfQueued(WW)
          };
        new si(OW, this.gameNameWithVariation, this.connectionResume).register(WW), new HW(OW).register(WW), new rW(OW).register(WW), new vW(OW, mW).register(WW), new GW(OW, mW).register(WW), new Ji(OW, iW).register(WW), new Ni(OW, mW).register(WW)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var ni = OW(40250),
      ui = OW(40253),
      oi = OW(683),
      di = OW(1888);
    class ei {
      constructor(WW, iW, OW, mW) {
        this.msgHandler = OW, this.listener = mW, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new ni.d({
          reconnect: WW,
          isLive: () => mW.isLive(),
          onReconnected: WW => {
            this.resumeOnRoom(WW)
          },
          onGaveUp: (WW, iW) => {
            mW.onGaveUp(WW, iW)
          },
          freeze: iW,
          releaseSeat: iW => {
            WW(iW).then((WW => {
              WW.leave(!0)
            }), (WW => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", WW)
            }))
          }
        })
      }
      onInitialInfo(WW, iW) {
        this.session.onInitialInfo(WW, iW)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(WW, iW) {
        if (this.session.onResuming(), null === WW) {
          try {
            (0, cW.d)().client.itemDropPrediction.reset()
          } catch (OW) {
            console.error("Error dropping the item drop predictions on resuming", OW)
          }
          return mW.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, cW.d)().client.itemDropPrediction.onResumeReplayOffered(), mW.offlineInputReplay.replayFrom(WW.Ki, iW)
      }
      onResumed(WW) {
        this.setSuspended(!1), (0, mW.resendBeacons)();
        try {
          WW()
        } catch (iW) {
          console.error("Error completing the resume", iW)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(WW) {
        const iW = (0, oi.onVisitSessionGameServerConnected)((() => WW.connection.isOpen));
        WW.Fk(iW);
        const OW = new ui.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(WW, "silent"), WW.leave(!1))
        }));
        WW.onStateChange((() => {
          OW.heard()
        }));
        const mW = iW => {
          iW.persisted || WW.leave(!0)
        };
        window.addEventListener("pagehide", mW), WW.Fk(((iW, OW) => {
          if (WW === this.attachedRoom && this.listener.isLive()) return (0, NW.g)(iW) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${iW}, reconnecting`), this.listener.onDropped(iW, OW), void this.onConnectionDropped(WW, String(iW))) : void this.listener.onRoomLeft(iW, OW)
        })), this.attachedRoom = WW, this.detachRoomListeners = () => {
          iW(), OW.dispose(), window.removeEventListener("pagehide", mW)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(WW) {
        WW !== this.suspended && (this.suspended = WW, (0, mW.setConnectionSuspended)(WW), (0, cW.d)().client.itemDropPrediction.setSuspended(WW))
      }
      detachRoom() {
        var WW;
        null === (WW = this.detachRoomListeners) || void 0 === WW || WW.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(WW, iW) {
        (0, di.reportClientError)("disconnect", "Left room", iW), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), mW.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(WW.reconnectionToken)
      }
      resumeOnRoom(WW) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), WW.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, RW.q)(), mW.offlineInputReplay.onConnectionReplaced(), this.msgHandler.NtW(WW), this.listener.onReconnected(WW), this.attachRoom(WW)
      }
    }
    var vi = OW(2458),
      gi = OW(2464),
      Di = OW(1351),
      Vi = OW(1301),
      fi = OW(5417),
      Ci = OW(4337),
      Xi = OW(1303),
      Bi = OW(38891),
      qi = OW(40258),
      Ri = OW(10181),
      Gi = OW(40261),
      Ii = OW(1194),
      ai = OW(37727),
      ri = OW(40267),
      zi = OW(1822),
      Fi = OW(3825),
      Qi = OW(1584);

    function WO(WW) {
      var iW, OW;
      if ("object" !== typeof WW || null === WW) return {
        errType: typeof WW
      };
      const mW = WW;
      return {
        errType: null !== (iW = null === (OW = WW.constructor) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : "",
        errName: "string" === typeof mW.name ? mW.name : "",
        eventType: "string" === typeof mW.type ? mW.type : "",
        errStack: "string" === typeof mW.stack ? mW.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function iO(WW) {
      if ("undefined" !== typeof ProgressEvent && WW instanceof ProgressEvent) return !0;
      if (!(WW instanceof Error)) return !1;
      const iW = WW.code;
      return "ServerError" === WW.name && void 0 === iW || "AbortError" === WW.name || "seat reservation expired." === WW.message || "early_leave" === WW.message
    }(0, bW.j)((WW => {
      (0, di.reportClientError)("wasm_net", WW)
    }));
    let OO = !0;

    function mO() {
      OO = !1
    }
    class EO {
      constructor(WW) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.Hx = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = WW.gameNameWithVariation, this.lobbyName = WW.lobbyName, this.colyClient = WW.colyClient, this.userContext = WW.userContext
      }
      async connectToServer(WW, iW, OW) {
        kW.d.reset(), WW.sV = {
          [WW.Dv]: {}
        }, WW.Av = void 0, (0, RW.q)(), (0, cW.d)().removeAllEntityNames(), (0, cW.d)().setEntityName(WW.Dv, this.userContext.getPlayerName()), (0, Di.r)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, zi.f)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const PW = performance.now();
        OW.aborted || (0, Vi.p)("wasm_core_ready", PW);
        const LW = (0, Gi.d)(this.userContext, (() => {
          const {
            roomName: mW,
            joinOptions: EW
          } = (0, MW.e)(this.userContext, this.gameNameWithVariation, this.lobbyName, iW, (WW => Ci.d.isUsingCustomGameTexturePack(WW)));
          return EW.joinAdHold = this.joinAdHold, EW.renderBackend = (0, Fi.c)(WW.TZ), (0, qi.e)((() => this.colyClient.joinOrCreateUntil(OW, mW, EW)), OW)
        }));
        return UW.l.iZ("loadingScreenState", "loadingPage:joiningLobby"), await LW.then((iW => {
          if (this.joinedAt = performance.now(), (0, Vi.p)("wasm_joined", this.joinedAt), this.Hx = WW, this.joinAdHold) {
            const WW = (0, zi.t)((() => {
              iW.send(EW.f), (0, Vi.l)(), ji.d.markJoinAdEnded()
            }));
            iW.Fk(WW), (0, mW.onGameResetOnce)(WW)
          }
          const OW = new jW(iW);
          this.connectionResume = new ei((WW => this.colyClient.reconnect(WW)), (iW => {
            WW.gJ(iW)
          }), OW, {
            isLive: () => (0, cW.d)().client.getMsgHandler() === OW,
            onDropped: (WW, iW) => {
              (0, gi.i)(WW) || this.logUnrecognisedConnectionLoss(WW, void 0, {
                site: "drop",
                closeReason: null !== iW && void 0 !== iW ? iW : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (WW, iW) => {
              this.onRoomLeft(WW, iW)
            },
            onReconnected: WW => {
              this.incomingMsgInitialisor.NtW(WW), this.checkSendPath = (0, Bi.e)(OW, WW, bW.k)
            },
            onGaveUp: (WW, iW) => {
              this.onResumeGaveUp(WW, iW)
            }
          }), this.connectionResume.attachRoom(iW), (0, mW.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const NW = OW.send,
            PW = OW.zk,
            LW = OW.zOW.send,
            wW = OW.zOW.zk,
            tW = OW.mtW;
          this.checkSendPath = (0, Bi.e)(OW, iW, bW.k);
          const ZW = setInterval((() => {
            NW === OW.send && PW === OW.zk && LW === OW.zOW.send && wW === OW.zOW.zk && tW === OW.mtW || mO(), this.checkSendPath()
          }), 1e4);
          return (0, mW.onGameResetOnce)((() => {
            clearInterval(ZW)
          })), {
            success: !0,
            successDetails: OW
          }
        })).catch((iW => {
          if (OW.aborted && iW === (0, Ii.f)(OW)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (iW instanceof ai.c) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: iW.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, ri.b)(iW, iW.leg)
            }
          };
          WW.nb(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${iW.code}\n`, iW);
          const mW = iW.code;
          return mW === NW.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: NW.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(mW, iW.message, {
                site: "join",
                sinceJoinStart: (0, gi.e)(performance.now() - PW),
                ...WO(iW)
              }, iO(iW)),
              rematch: (0, qi.b)(iW),
              gameRefused: (0, Ri.c)(iW),
              joinFailure: (0, ri.b)(iW, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(WW, iW, OW) {
        UW.l.iZ("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Hi(this.gameNameWithVariation, iW.zOW, WW, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const EW = iW.wtW();
        this.incomingMsgInitialisor.setupOnMessageListeners(EW, OW), (0, mW.onConnectionToServerReady)(EW, iW), this.joinAdHold && ji.d.markAdmissionAwaited(), EW.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(WW, iW) {
        (0, Xi.ub)(new Error("Reconnect failed"), {
          ...(0, vi.q)(iW),
          game: this.gameNameWithVariation
        }), (0, di.reportClientError)("disconnect", "Reconnect failed", iW.reason), (0, cW.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !WW,
          canPlayAgain: WW,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Ai.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, gi.e)(performance.now() - this.joinedAt)
      }
      onRoomLeft(WW, iW) {
        var OW;
        if (WW === NW.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${WW}`), WW === NW.e.serverUpdating.code) return (0, di.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, cW.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Hx.nb(`Kicked from server with code ${WW}`, new Error);
        const mW = Object.keys(NW.e).find((iW => NW.e[iW].code === WW));
        (0, di.reportClientError)("disconnect", "Left room", null !== mW && void 0 !== mW ? mW : String(WW)), Qi.e.leftGame(this.gameNameWithVariation, WW);
        const EW = this.onConnectionToServerLost(WW, void 0, {
          site: "leave",
          closeReason: null !== iW && void 0 !== iW ? iW : "",
          sinceJoined: this.sinceJoined()
        });
        (0, cW.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${EW.reason}`,
          canReconnect: EW.canReconnect,
          requiresRefresh: EW.requiresRefresh,
          automaticallyReconnect: null !== (OW = EW.automaticallyReconnect) && void 0 !== OW && OW
        }), (0, Ai.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, fi.F)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Ai.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(WW, iW, OW) {
        var mW;
        let EW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (mW = iW) && void 0 !== mW && mW.endsWith(NW.j) && (this.userContext.invalidateTrafficCode(), iW = iW.replace(NW.j, "")), WW === NW.e.outdatedVersion.code) return console.error("Outdated client with version ", PW.d, ", refreshing page"), (0, sW.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (WW === NW.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, sW.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const PW in NW.e) {
          const {
            code: OW,
            text: mW,
            canReconnect: EW
          } = NW.e[PW];
          if (OW === WW) {
            console.log("matched known error", WW, "leaving game");
            return {
              reason: "" !== mW ? mW : iW || `Code: ${WW}`,
              requiresRefresh: !1,
              canReconnect: EW,
              automaticallyReconnect: OW === NW.e.customGameUpdated.code || OW === NW.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, gi.f)(WW) || EW ? console.warn("Connection lost", WW, iW) : this.logUnrecognisedConnectionLoss(WW, iW, OW), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${WW}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: EW ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(WW, iW, OW) {
        (0, Xi.ub)(new Error("Unrecognised connection loss"), {
          code: String(WW),
          cause: null !== iW && void 0 !== iW ? iW : "",
          ...OW,
          game: this.gameNameWithVariation,
          ...(0, gi.j)()
        })
      }
    }
  },
  40171: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => aO,
      h: () => im
    });
    var mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW, uW, oW, dW, eW, vW, gW, DW, VW, pW, fW, CW, XW, BW, qW, RW, GW, IW, aW, rW, zW, FW, QW, Wi, ii, Oi, mi, Ei, Ni, Pi, Li, ci, wi, ti, Zi, xi, li, Ai, bi, ji, Ui, ki, si, Mi, Ki, Si, Yi, yi, Ti, Ji, Hi, ni, ui, oi, di, ei, vi, gi, Di, Vi, fi, Ci, Xi, Bi, qi, Ri, Gi, Ii, ai, ri, zi, Fi, Qi, WO = OW(27),
      iO = OW(38314),
      OO = OW(40181),
      mO = OW(40189),
      EO = OW(10395),
      NO = OW(639),
      PO = OW(632),
      LO = OW(37618);
    let cO = (mW = (0, EO.type)("number"), EW = (0, EO.type)("number"), NW = (0, EO.type)("number"), PW = (0, EO.type)("number"), LW = (0, EO.type)("number"), cW = (0, EO.type)("number"), wW = (0, EO.type)("string"), tW = class extends EO.Schema {
        constructor() {
          super(...arguments), (0, OO.e)(this, "id", ZW, this), (0, OO.e)(this, "amount", xW, this), (0, OO.e)(this, "x", lW, this), (0, OO.e)(this, "y", AW, this), (0, OO.e)(this, "z", bW, this), (0, OO.e)(this, "size", jW, this), (0, OO.e)(this, "attributes", UW, this)
        }
      }, ZW = (0, mO.c)(tW.prototype, "id", [mW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xW = (0, mO.c)(tW.prototype, "amount", [EW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lW = (0, mO.c)(tW.prototype, "x", [NW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), AW = (0, mO.c)(tW.prototype, "y", [PW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), bW = (0, mO.c)(tW.prototype, "z", [LW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jW = (0, mO.c)(tW.prototype, "size", [cW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), UW = (0, mO.c)(tW.prototype, "attributes", [wW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), tW),
      wO = (kW = (0, EO.type)("string"), sW = (0, EO.type)("string"), MW = class extends EO.Schema {
        constructor() {
          super(...arguments), (0, OO.e)(this, "itemName", KW, this), (0, OO.e)(this, "enchantmentTier", SW, this)
        }
      }, KW = (0, mO.c)(MW.prototype, "itemName", [kW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), SW = (0, mO.c)(MW.prototype, "enchantmentTier", [sW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), MW),
      tO = (YW = (0, EO.type)("string"), yW = (0, EO.type)("string"), TW = (0, EO.type)("number"), JW = (0, EO.type)("number"), hW = (0, EO.type)("number"), HW = (0, EO.type)("float32"), nW = (0, EO.type)("float32"), uW = (0, EO.type)("float32"), oW = (0, EO.type)("string"), dW = (0, EO.type)(["number"]), eW = (0, EO.type)("boolean"), vW = class extends EO.Schema {
        constructor() {
          super(...arguments), (0, OO.e)(this, "type", gW, this), (0, OO.e)(this, "name", DW, this), (0, OO.e)(this, "x", VW, this), (0, OO.e)(this, "y", pW, this), (0, OO.e)(this, "z", fW, this), (0, OO.e)(this, "xRotation", CW, this), (0, OO.e)(this, "yRotation", XW, this), (0, OO.e)(this, "zRotation", BW, this), (0, OO.e)(this, "followingEId", qW, this), (0, OO.e)(this, "followingOffset", RW, this), (0, OO.e)(this, "shouldMatchFollowingEntityRotation", GW, this)
        }
      }, gW = (0, mO.c)(vW.prototype, "type", [YW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), DW = (0, mO.c)(vW.prototype, "name", [yW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), VW = (0, mO.c)(vW.prototype, "x", [TW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pW = (0, mO.c)(vW.prototype, "y", [JW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fW = (0, mO.c)(vW.prototype, "z", [hW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), CW = (0, mO.c)(vW.prototype, "xRotation", [HW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), XW = (0, mO.c)(vW.prototype, "yRotation", [nW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), BW = (0, mO.c)(vW.prototype, "zRotation", [uW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qW = (0, mO.c)(vW.prototype, "followingEId", [oW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), RW = (0, mO.c)(vW.prototype, "followingOffset", [dW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new EO.ArraySchema(0, 0, 0)
        }
      }), GW = (0, mO.c)(vW.prototype, "shouldMatchFollowingEntityRotation", [eW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), vW),
      ZO = (IW = (0, EO.type)("float32"), aW = (0, EO.type)("float32"), rW = (0, EO.type)("boolean"), zW = (0, EO.type)("boolean"), FW = (0, EO.type)("float32"), QW = (0, EO.type)("boolean"), Wi = (0, EO.type)("string"), ii = (0, EO.type)("string"), Oi = (0, EO.type)("string"), mi = (0, EO.type)("string"), Ei = (0, EO.type)(["number"]), Ni = (0, EO.type)("number"), Pi = (0, EO.type)({
        map: wO
      }), Li = class extends tO {
        constructor() {
          super(...arguments), (0, OO.e)(this, "scale", ci, this), (0, OO.e)(this, "speed", wi, this), (0, OO.e)(this, "jumping", ti, this), (0, OO.e)(this, "crouching", Zi, this), (0, OO.e)(this, "cameraPitch", xi, this), (0, OO.e)(this, "armSwinging", li, this), (0, OO.e)(this, "heldItemName", Ai, this), (0, OO.e)(this, "heldItemEnchantmentTier", bi, this), (0, OO.e)(this, "pose", ji, this), (0, OO.e)(this, "ridingVehicleEId", Ui, this), (0, OO.e)(this, "meshOffset", ki, this), (0, OO.e)(this, "baseRenderHeading", si, this), (0, OO.e)(this, "armour", Mi, this)
        }
      }, ci = (0, mO.c)(Li.prototype, "scale", [IW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), wi = (0, mO.c)(Li.prototype, "speed", [aW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ti = (0, mO.c)(Li.prototype, "jumping", [rW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Zi = (0, mO.c)(Li.prototype, "crouching", [zW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), xi = (0, mO.c)(Li.prototype, "cameraPitch", [FW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), li = (0, mO.c)(Li.prototype, "armSwinging", [QW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Ai = (0, mO.c)(Li.prototype, "heldItemName", [Wi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), bi = (0, mO.c)(Li.prototype, "heldItemEnchantmentTier", [ii], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ji = (0, mO.c)(Li.prototype, "pose", [Oi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Ui = (0, mO.c)(Li.prototype, "ridingVehicleEId", [mi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), ki = (0, mO.c)(Li.prototype, "meshOffset", [Ei], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new EO.ArraySchema(0, 0, 0)
        }
      }), si = (0, mO.c)(Li.prototype, "baseRenderHeading", [Ni], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Mi = (0, mO.c)(Li.prototype, "armour", [Pi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new EO.MapSchema
        }
      }), Li),
      xO = (Ki = (0, EO.type)("string"), Si = (0, EO.type)("string"), Yi = (0, EO.type)("string"), yi = (0, EO.type)("uint8"), Ti = class extends ZO {
        constructor() {
          super(...arguments), (0, OO.e)(this, "variation", Ji, this), (0, OO.e)(this, "ownerDbId", Hi, this), (0, OO.e)(this, "metaInfo", ni, this), (0, OO.e)(this, "aiState", ui, this)
        }
      }, Ji = (0, mO.c)(Ti.prototype, "variation", [Ki], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Hi = (0, mO.c)(Ti.prototype, "ownerDbId", [Si], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), ni = (0, mO.c)(Ti.prototype, "metaInfo", [Yi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), ui = (0, mO.c)(Ti.prototype, "aiState", [yi], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ti);
    oi = (0, EO.type)("string"), di = (0, EO.type)("string"), ei = (0, EO.type)("string"), vi = (0, EO.type)("string"), gi = class extends tO {
      constructor() {
        super(...arguments), (0, OO.e)(this, "meshKind", Di, this), (0, OO.e)(this, "meshOpts", Vi, this), (0, OO.e)(this, "pose", fi, this), (0, OO.e)(this, "leaderboardTop", Ci, this)
      }
    }, Di = (0, mO.c)(gi.prototype, "meshKind", [oi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Vi = (0, mO.c)(gi.prototype, "meshOpts", [di], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), fi = (0, mO.c)(gi.prototype, "pose", [ei], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Ci = (0, mO.c)(gi.prototype, "leaderboardTop", [vi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function lO(WW) {
      return Object.keys(EO.Metadata.getFields(WW))
    }
    const AO = lO(xO);
    for (const Om of NO.p)
      if (!AO.includes(Om)) throw new Error(`Mob Schema is missing a networked property: "${Om}"`);
    const bO = lO((Xi = (0, EO.type)("string"), Bi = (0, EO.type)("float32"), qi = (0, EO.type)("float32"), Ri = (0, EO.type)("float32"), Gi = (0, EO.type)("float32"), Ii = class extends tO {
      constructor() {
        super(...arguments), (0, OO.e)(this, "soundName", ai, this), (0, OO.e)(this, "volume", ri, this), (0, OO.e)(this, "refDistance", zi, this), (0, OO.e)(this, "maxHearDist", Fi, this), (0, OO.e)(this, "rate", Qi, this)
      }
    }, ai = (0, mO.c)(Ii.prototype, "soundName", [Xi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), ri = (0, mO.c)(Ii.prototype, "volume", [Bi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), zi = (0, mO.c)(Ii.prototype, "refDistance", [qi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return LO.g
      }
    }), Fi = (0, mO.c)(Ii.prototype, "maxHearDist", [Ri], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return LO.d
      }
    }), Qi = (0, mO.c)(Ii.prototype, "rate", [Gi], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Ii));
    for (const Om of PO.g)
      if (!bO.includes(Om)) throw new Error(`AudioEntity Schema is missing a replicated property: "${Om}"`);
    var jO = OW(39622),
      UO = OW(1230),
      kO = OW(643),
      sO = OW(39386),
      MO = OW(2937),
      KO = OW(344),
      SO = OW(38369),
      YO = OW(39274),
      yO = OW(3083),
      TO = OW(38336),
      JO = OW(39654),
      hO = OW(38767),
      HO = OW(352),
      nO = OW.n(HO),
      uO = OW(39131),
      oO = OW(38224),
      dO = OW(39259),
      eO = OW(39291);
    class vO {
      constructor(WW, iW) {
        this.bloxd = WW, this.eId = iW, this.Hx = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.JA = !1, this.Hx = WW.Hx
      }
      initClient(WW) {
        var iW, OW, mW;
        this.colyseusEntity = WW, this.meshKind = WW.meshKind, this.meshOpts = WW.meshOpts, this.leaderboardTop = WW.leaderboardTop, this.Hx.EY.add([WW.x, WW.y, WW.z], 1, 1, null, null, !1, !1, this.eId), this.Hx.EY.zD(this.eId, "smoothToServerPos");
        const EW = "Person" === this.meshKind;
        this.Hx.EY.zD(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...EW ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: EW ? [{
            nodeName: "HeadMesh",
            softTolerance: JO.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = WO.l.subscribe(`otherEntitySettings|${this.eId}|canSee`, (WW => {
          this.updateHidingMeshMgr()
        }));
        const NW = () => {
          const WW = this.Hx.EY.XiW(this.eId);
          if (!WW) return;
          const iW = (0, hO.f)(this.eId);
          if ("number" === typeof WW.uD) {
            var OW, mW, EW, NW;
            const PW = null === (OW = (0, yO.l)("head", null === (EW = this.getSpec()) || void 0 === EW || null === (NW = EW.opts.textures) || void 0 === NW ? void 0 : NW.head)) || void 0 === OW || null === (mW = OW.personModel) || void 0 === mW ? void 0 : mW.fullBody;
            return this.Hx.TZ.nD.setPickable(WW.uD, iW && !PW), void(0, oO.updatePersonAttachmentPickability)(this.Hx, this.eId, iW)
          }
          const PW = WW.mesh;
          if (PW)
            for (const LW of [PW, ...PW.getChildMeshes(!1)]) "Fb" in LW && !LW.name.startsWith("Cape|") && (LW.Fb = iW)
        };
        this.canAttackSub = WO.l.subscribe(`otherEntitySettings|${this.eId}|canAttack`, NW), this.interactableSub = WO.l.subscribe(`otherEntitySettings|${this.eId}|interactable`, NW), this.overlayColourSub = WO.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (WW => {
          this.updateOverlayColour(WW)
        })), this.opacitySub = WO.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (WW => {
          this.updateOpacity(WW)
        })), this.zIndexSub = WO.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (WW => {
          this.updateZIndex(WW)
        }));
        const PW = this.Hx.sV[this.Hx.Dv][this.eId];
        this.updateOverlayColour(null !== (iW = null === PW || void 0 === PW ? void 0 : PW.overlayColour) && void 0 !== iW ? iW : null), this.updateOpacity(null !== (OW = null === PW || void 0 === PW ? void 0 : PW.opacity) && void 0 !== OW ? OW : 1), this.updateZIndex(null !== (mW = null === PW || void 0 === PW ? void 0 : PW.zIndex) && void 0 !== mW ? mW : 0), this.multilineTextBoxSub = (0, TO.p)(this.Hx, this.eId)
      }
      onChangeClient(WW, iW) {
        if ("xRotation" === WW || "yRotation" === WW || "zRotation" === WW)(0, TO.t)(this.Hx, this.eId, WW, iW);
        else if ("pose" === WW) {
          const WW = this.Hx.EY.aiW(this.eId);
          WW && (WW.pose = iW || "standing")
        } else "meshKind" === WW || "meshOpts" === WW ? (this[WW] = iW, this.queueMeshRebuild()) : "name" === WW && "" !== iW ? this.updateHidingMeshMgr() : "leaderboardTop" === WW && (this.leaderboardTop = iW, WO.l.iZ(`leaderboardTop|${this.eId}`, iW))
      }
      disposeClient() {
        this.JA = !0, this.Hx.EY.deleteEntity(this.eId), WO.l.unsubscribe(this.canSeeSub), WO.l.unsubscribe(this.canAttackSub), WO.l.unsubscribe(this.interactableSub), WO.l.unsubscribe(this.overlayColourSub), WO.l.unsubscribe(this.opacitySub), WO.l.unsubscribe(this.zIndexSub), WO.l.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var WW, iW;
        return {
          canSee: null !== (WW = null === (iW = this.Hx.sV[this.Hx.Dv][this.eId]) || void 0 === iW ? void 0 : iW.canSee) && void 0 !== WW && WW,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var WW, iW, OW;
        const {
          Hx: mW
        } = this, {
          EY: EW
        } = mW, NW = this.getCurrentHidingMeshMgrState();
        if ((0, KO.ae)(this.previousHidingMeshManagerState, NW)) return;
        if (this.previousHidingMeshManagerState = NW, EW.mV(this.eId, "hidingMeshManager"), null === (WW = mW.sV[mW.Dv][this.eId]) || void 0 === WW || !WW.canSee) return;
        const PW = this.getSpec();
        if (!PW) return;
        const {
          type: LW,
          opts: cW
        } = PW;
        "Person" === LW && (cW.textures = (0, yO.q)(cW.textures)), cW.eId = this.eId, EW.zD(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var WW, iW, OW;
            "Leaderboard" === LW && (cW.leaderboardTop = this.leaderboardTop);
            const NW = this.bloxd.client.meshCreator.getEntityMesh(LW, cW, (WW => {
              var iW, OW;
              if ("number" === typeof WW) {
                var EW, NW, PW;
                const iW = mW.TZ.nD;
                iW.setEntityId(WW, this.eId);
                const OW = "Person" === LW && (null === (EW = (0, yO.l)("head", null === (PW = cW.textures) || void 0 === PW ? void 0 : PW.head)) || void 0 === EW || null === (NW = EW.personModel) || void 0 === NW ? void 0 : NW.fullBody);
                return void iW.setPickable(WW, (0, hO.f)(this.eId) && !OW)
              }
              const wW = WW;
              for (const LW of [wW, ...wW.getChildMeshes(!1)]) void 0 === LW.Fb || LW.name.startsWith("Cape|") || (LW.Fb = (0, hO.f)(this.eId), LW.metadata ??= new mW.TZ.Qb, LW.metadata.eId = this.eId);
              this.updateOpacity(null !== (iW = null === (OW = mW.sV[mW.Dv][this.eId]) || void 0 === OW ? void 0 : OW.opacity) && void 0 !== iW ? iW : 1)
            }));
            if (!NW) return;
            const {
              uD: PW,
              mesh: wW,
              meshOffset: tW,
              nameYOffset: ZW,
              modelLoaded: xW
            } = NW;
            null === xW || void 0 === xW || xW.then((() => {
              var WW;
              (null === (WW = EW.XiW(this.eId)) || void 0 === WW ? void 0 : WW.mesh) === wW && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const lW = null === PW ? null : mW.TZ.nD.AmW(PW, 0);
            if (EW.zD(this.eId, EW.names.mesh, {
                uD: PW,
                OmW: lW,
                mesh: wW,
                oLW: !1,
                dLW: "Leaderboard" !== LW,
                offset: tW.slice(),
                uLW: "ParticleEmitter" === LW && cW.followTargetMeshOffset ? WW => {
                  var iW;
                  nO().copy(WW, tW);
                  const OW = null === (iW = EW.uOW(this.eId)) || void 0 === iW ? void 0 : iW.MA,
                    mW = void 0 === OW ? null : EW.aiW(OW);
                  if (mW) {
                    var NW, PW;
                    const iW = this.bloxd.getEntityHeading(null !== (NW = mW.ridingVehicleEId) && void 0 !== NW ? NW : OW, !0),
                      EW = Math.sin(iW),
                      LW = Math.cos(iW);
                    WW[0] += mW.meshOffset[0] * LW + mW.meshOffset[2] * EW, WW[1] += mW.meshOffset[1], WW[2] += mW.meshOffset[2] * LW - mW.meshOffset[0] * EW;
                    const cW = null !== (PW = mW.ridingVehicleEId) && void 0 !== PW ? PW : null;
                    null !== cW && (0, eO.b)(this.Hx, cW, WW)
                  }
                } : null
              }), "Person" === LW) {
              var AW, bW, jW, UW;
              EW.zD(this.eId, EW.names.meshAttachments, {
                personFullBody: null !== (AW = null === (bW = (0, yO.l)("head", null === (UW = cW.textures) || void 0 === UW ? void 0 : UW.head)) || void 0 === bW || null === (jW = bW.personModel) || void 0 === jW ? void 0 : jW.fullBody) && void 0 !== AW && AW
              });
              for (const WW of UO.p) {
                var kW, sW, MW;
                const iW = null === (kW = cW.textures) || void 0 === kW ? void 0 : kW[WW];
                iW && null !== (sW = (0, yO.l)(WW, iW)) && void 0 !== sW && null !== (MW = sW.attachments) && void 0 !== MW && MW.length && YO.d.Player.meshApi.updatePlayerCosmetic(this.eId, PW, WW, iW)
              }
              EW.zD(this.eId, EW.names.moveState), EW.zD(this.eId, "updateWalkingState", {
                uD: PW,
                OmW: lW,
                walkingLegSwingDuration: JO.t
              }), EW.zD(this.eId, "humanoidMesh", {
                uD: PW,
                OmW: lW,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), EW.zD(this.eId, "animator", {
                uD: PW,
                OmW: lW,
                modelLifeformType: "Player"
              }), dO.g.hasAnimation("Person") && EW.zD(this.eId, "rigAnimation", {
                target: "Person",
                uD: PW
              }), EW.aiW(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === LW && null !== PW) {
              EW.zD(this.eId, "animator", {
                uD: PW,
                OmW: lW,
                modelLifeformType: null
              });
              const WW = (0, sO.s)(cW.blockName);
              null !== WW && EW.zD(this.eId, "rigAnimation", {
                target: WW,
                uD: PW
              })
            }
            EW.mcW(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: ZW
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === cW.autoRotate && (EW.mV(this.eId, "meshRotation"), EW.zD(this.eId, "autoRotate"));
            const {
              lineToEId: KW
            } = cW;
            (0, kO.K)(KW) || EW.zD(this.eId, "lineToEntity", {
              lineToEId: KW
            });
            const SW = mW.sV[mW.Dv][this.eId];
            this.updateOverlayColour(null !== (WW = null === SW || void 0 === SW ? void 0 : SW.overlayColour) && void 0 !== WW ? WW : null), this.updateOpacity(null !== (iW = null === SW || void 0 === SW ? void 0 : SW.opacity) && void 0 !== iW ? iW : 1), this.updateZIndex(null !== (OW = null === SW || void 0 === SW ? void 0 : SW.zIndex) && void 0 !== OW ? OW : 0)
          },
          removeMeshComponent: () => {
            "Person" !== LW && "BloxdBlock" !== LW || EW.mV(this.eId, "rigAnimation"), EW.mV(this.eId, EW.names.mesh), EW.liW(this.eId, EW.names.meshAttachments) && EW.mV(this.eId, EW.names.meshAttachments), EW.mV(this.eId, "entityName"), EW.mV(this.eId, "autoRotate"), EW.mV(this.eId, "lineToEntity"), "Person" === LW ? (EW.mV(this.eId, EW.names.moveState), EW.mV(this.eId, "updateWalkingState"), EW.mV(this.eId, "humanoidMesh"), EW.mV(this.eId, "animator")) : "BloxdBlock" === LW && EW.mV(this.eId, "animator")
          },
          hideDist: null !== (iW = cW.hideDist) && void 0 !== iW ? iW : 80,
          movingHideDist: null !== (OW = cW.hideDist) && void 0 !== OW ? OW : 120,
          displayOutsideLoadedChunk: cW.hideDist > 100,
          immediatelyUpdate: !0,
          Qt: "BloxdBlock" === LW ? cW.blockName : LW
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.JA || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, MO.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(WW) {
        var iW, OW;
        if ("Person" !== this.meshKind) return;
        let mW = new SO.c(0, 0, 0, 0);
        if (null !== WW) {
          const iW = (0, KO.Y)(WW);
          mW = new SO.c(iW[0] / 255, iW[1] / 255, iW[2] / 255, .5)
        }
        const EW = null !== (iW = null === (OW = this.Hx.EY.XiW(this.eId)) || void 0 === OW ? void 0 : OW.uD) && void 0 !== iW ? iW : null;
        null !== EW && YO.d.Player.meshApi.updateMeshOverlayColour(EW, mW)
      }
      updateZIndex(WW) {
        var iW;
        if ("Person" !== this.meshKind) return;
        const OW = null === (iW = this.Hx.EY.XiW(this.eId)) || void 0 === iW ? void 0 : iW.uD;
        "number" === typeof OW && this.Hx.TZ.nD.setRenderingGroupId(OW, WW)
      }
      updateOpacity(WW) {
        const iW = this.Hx.EY.XiW(this.eId);
        iW && ("number" !== typeof iW.uD ? iW.mesh && "ParticleEmitter" !== this.meshKind && (0, uO.g)(iW.mesh, WW) : YO.d.Player.meshApi.updateMeshOpacity(iW.uD, WW))
      }
    }
    var gO = OW(40178);
    class DO {
      constructor(WW, iW) {
        this.eId = iW, this.Hx = void 0, this.schema = void 0, this.Hx = WW.Hx
      }
      initClient(WW) {
        this.schema = WW, this.Hx.EY.add([WW.x, WW.y, WW.z], .1, .1, null, null, !1, !1, this.eId), this.Hx.EY.zD(this.eId, "smoothToServerPos"), gO.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(WW) {
        PO.g.includes(WW) && gO.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        gO.d.remove(this.eId), this.Hx.EY.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: WW,
          volume: iW,
          refDistance: OW,
          maxHearDist: mW,
          rate: EW
        } = this.schema;
        return {
          soundName: WW,
          volume: iW,
          refDistance: OW,
          maxHearDist: mW,
          rate: EW
        }
      }
    }
    var VO = OW(2350),
      pO = OW(37575),
      fO = OW(7453),
      CO = OW(38963),
      XO = OW(2365),
      BO = OW(39322),
      qO = OW(10354),
      RO = OW(39663),
      GO = OW(38928),
      IO = OW(1888);
    class aO {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.zOW = WW, this.Hx = iW, this.setupBudgetMs = OW, this.now = mW, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.JA = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Hk = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const WW of this.promotedSetups) {
            this.promotedSetups.delete(WW);
            const iW = this.queuedSetups.get(WW);
            iW && (this.queuedSetups.delete(WW), this.timedSetup(iW, WW))
          }
        }, this.createStateCallbacks = (0, qO.getStateCallbacks)(WW), this.roomStateCallbacks = this.createStateCallbacks(WW.state), this.roomState = WW.state, this.setupBudgetLeftMs = OW, this.lastRefillMs = mW()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.zOW.onStateChange(this.setUpPromoted), this.Hx.on("beforeInputs", this.onFrame), this.Hx.on("hZ", this.Hk)
      }
      setUpQueuedEntities(WW) {
        var iW;
        if ((null === (iW = (0, XO.d)().client.getMsgHandler()) || void 0 === iW ? void 0 : iW.zOW) !== this.zOW) return this.Hx.off("beforeInputs", this.onFrame), this.Hx.off("hZ", this.Hk), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (WW && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (nO().copy(rO, this.Hx.EY.Vk(this.Hx.Dv)); this.setupBudgetLeftMs > 0;) {
            const WW = this.nearestQueued(rO);
            if (null === WW) return;
            this.setUpIfQueued(WW), this.setUpPromoted()
          }
      }
      nearestQueued(WW) {
        let iW = null,
          OW = 1 / 0;
        return this.queuedSetups.forEach(((mW, EW) => {
          const NW = function(WW, iW) {
            return (iW.x - WW[0]) ** 2 + (iW.y - WW[1]) ** 2 + (iW.z - WW[2]) ** 2
          }(WW, mW);
          (null === iW || NW < OW) && (iW = EW, OW = NW)
        })), iW
      }
      setUpOrQueue(WW, iW) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(WW, iW) ? this.timedSetup(WW, iW) : this.queuedSetups.set(iW, WW)
      }
      mustSetUpNow(WW, iW) {
        const OW = this.Hx.Av;
        if (iW === OW) return !0;
        const mW = this.roomState.entities.get(OW);
        return !(!mW || mW.ridingVehicleEId !== iW && mW.followingEId !== iW) || (zO(WW.type) === jO.c || (0, XO.d)().getFollowingEntities(iW).length > 0)
      }
      setUpIfQueued(WW) {
        const iW = this.queuedSetups.get(WW);
        iW && (this.queuedSetups.delete(WW), this.timedSetup(iW, WW))
      }
      promoteIfQueued(WW) {
        null !== WW && this.queuedSetups.has(WW) && this.promotedSetups.add(WW)
      }
      timedSetup(WW, iW) {
        const OW = this.now();
        this.setupEntity(WW, iW), this.setupBudgetLeftMs -= this.now() - OW
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.mY(((WW, iW) => {
          this.Hx.Av ? this.setUpOrQueue(WW, iW) : this.deferEntitySetupUntilInitInfo(WW, iW)
        })), this.roomStateCallbacks.entities.mH(((WW, iW) => {
          const OW = this.deferredSetups.get(iW);
          OW && (WO.l.unsubscribe(OW), this.deferredSetups.delete(iW)), this.queuedSetups.delete(iW), this.detach(iW), (0, XO.d)().client.disposeEntity(iW)
        }))
      }
      deferEntitySetupUntilInitInfo(WW, iW) {
        const OW = WO.l.dU("initInfoReceived", (() => {
          this.deferredSetups.delete(iW), this.setUpOrQueue(WW, iW)
        }));
        this.deferredSetups.set(iW, OW), (0, VO.onGameResetOnce)((() => {
          this.deferredSetups.get(iW) === OW && (WO.l.unsubscribe(OW), this.deferredSetups.delete(iW)), (0, XO.d)().updatePositionAndPhysics(this.Hx.Dv, {
            type: fO.p.DEFAULT,
            tier: null
          }, !0), (0, XO.d)().takeHeldPlayerBodySize(this.Hx.Dv);
          const WW = this.Hx.EY.HiW(this.Hx.Dv);
          WW && (WW.movementType = fO.m.NORMAL)
        }))
      }
      setupEntity(WW, iW) {
        const OW = iW === this.Hx.Av;
        if (OW)(0, XO.d)().client.sG(this.Hx.Dv, null, null);
        else {
          const {
            type: OW
          } = WW, mW = zO(OW);
          if (void 0 === mW) return void
          function(WW, iW) {
            const OW = String(WW);
            if (FO.has(OW)) return;
            FO.add(OW);
            const mW = OW.length > 80 ? `${OW.slice(0,80)}...` : OW,
              EW = `No client handler for entity type ${JSON.stringify(mW)}, so entity ${iW} is not set up`;
            console.warn(EW), (0, IO.reportClientError)("uncaught", EW, "unknown_entity_type")
          }(OW, iW);
          (0, XO.d)().client.sG(iW, WW, new mW((0, XO.d)(), iW, OW))
        }
        const mW = this.createStateCallbacks(WW);
        if (OW) return this.setupMapSchemaCallbacks(iW, WW, mW, "armour"), this.setupScalarField(iW, WW, mW, "scale"), this.setupScalarField(iW, WW, mW, "ridingVehicleEId"), this.setupScalarField(iW, WW, mW, "followingEId"), this.setupScalarField(iW, WW, mW, "followingOffset"), void this.setupScalarField(iW, WW, mW, "shouldMatchFollowingEntityRotation");
        for (const EW of lO(WW.constructor)) WW[EW] instanceof EO.MapSchema ? this.setupMapSchemaCallbacks(iW, WW, mW, EW) : this.setupScalarField(iW, WW, mW, EW)
      }
      setupMapSchemaCallbacks(WW, iW, OW, mW) {
        const EW = OW[mW],
          NW = new Map;
        EW.mY(((OW, EW) => {
          if (this.onEntityFieldChange(WW, iW, mW, {
              key: EW,
              value: OW
            }), !(OW instanceof EO.Schema)) return;
          const PW = this.createStateCallbacks(OW),
            LW = [];
          for (const NW of lO(OW.constructor)) LW.push(this.listenForFutureChanges(PW, NW, (() => {
            this.onEntityFieldChange(WW, iW, mW, {
              key: EW,
              value: OW
            })
          })));
          NW.set(EW, (() => {
            for (const WW of LW) WW()
          }))
        })), EW.mH(((OW, EW) => {
          var PW;
          null === (PW = NW.get(EW)) || void 0 === PW || PW(), NW.delete(EW), this.onEntityFieldChange(WW, iW, mW, {
            key: EW,
            value: null
          })
        })), this.addDetacher(WW, (() => {
          for (const WW of NW.values()) WW();
          NW.clear()
        }))
      }
      setupScalarField(WW, iW, OW, mW) {
        this.onEntityFieldChange(WW, iW, mW, iW[mW]);
        const EW = this.listenForFutureChanges(OW, mW, (OW => {
          this.onEntityFieldChange(WW, iW, mW, OW)
        }));
        this.addDetacher(WW, EW)
      }
      addDetacher(WW, iW) {
        let OW = this.detachers.get(WW);
        OW || (OW = [], this.detachers.set(WW, OW)), OW.push(iW)
      }
      detach(WW) {
        for (const OW of null !== (iW = this.detachers.get(WW)) && void 0 !== iW ? iW : []) {
          var iW;
          OW()
        }
        this.detachers.delete(WW)
      }
      listenForFutureChanges(WW, iW, OW) {
        return WW.listen(iW, OW, !1)
      }
      onEntityFieldChange(WW, iW, OW, mW) {
        switch (OW) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(mW);
            const iW = this.Hx.EY.aiW((0, pO.b)(WW));
            iW && (iW.ridingVehicleEId = mW);
            break
          }
          case "armour":
            this.handleArmourChange(WW, mW);
            break;
          case "followingEId":
            this.promoteIfQueued(mW), this.handleFollowingEIdChange(WW, iW, mW);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(WW, OW, mW);
            break;
          case "scale":
            this.handleScaleChange(WW, mW);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(WW, mW);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(WW, mW);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(WW, mW);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(WW, OW, mW)
        }(0, XO.d)().client.updateEntityField(WW, OW, mW)
      }
      handleArmourChange(WW, iW) {
        var OW, mW;
        const {
          key: EW,
          value: NW
        } = iW;
        (0, YO.z)(WW, EW, null !== (OW = null === NW || void 0 === NW ? void 0 : NW.itemName) && void 0 !== OW ? OW : null, null !== (mW = null === NW || void 0 === NW ? void 0 : NW.enchantmentTier) && void 0 !== mW ? mW : null)
      }
      handleFollowingEIdChange(WW, iW, OW) {
        const mW = (0, pO.b)(WW),
          EW = mW === this.Hx.Dv;
        if (this.Hx.EY.mV(mW, this.Hx.EY.names.qS), OW) this.Hx.EY.mV(mW, "smoothToServerPos"), this.Hx.EY.zD(mW, this.Hx.EY.names.qS, {
          MA: (0, pO.b)(OW),
          offset: Array.from(iW.followingOffset),
          oOW: iW.shouldMatchFollowingEntityRotation,
          gOW: !0,
          DOW: (WW, mW) => {
            if (nO().copy(WW, iW.followingOffset), iW.ridingVehicleEId === OW) {
              const iW = (0, pO.b)(OW),
                EW = (0, XO.d)().getEntityHeading(iW, mW);
              nO().wj(WW, WW, nO().ZERO, EW)
            }
          }
        });
        else if (!EW) {
          this.Hx.EY.liW(mW, "smoothToServerPos") || this.Hx.EY.zD(mW, "smoothToServerPos");
          const WW = this.Hx.EY.getState(mW, "smoothToServerPos"),
            iW = this.Hx.EY.YG(mW).position;
          (0, GO.setServerPosition)(WW, iW[0], iW[1], iW[2])
        }
      }
      handleRotationChange(WW, iW, OW) {
        const mW = "xRotation" === iW ? 0 : "yRotation" === iW ? 1 : 2;
        for (const EW of (0, XO.d)().getFollowingEntities(WW)) {
          const WW = this.Hx.EY.getState(EW, "meshRotation"),
            iW = this.Hx.EY.uOW(EW);
          WW && iW.oOW && (WW.serverSetRotation[mW] = OW)
        }
      }
      handleScaleChange(WW, iW) {
        const OW = (0, pO.b)(WW);
        if (WO.l.iZ(`entityScale|${OW}`, iW), OW === this.Hx.Dv) {
          var mW;
          (0, XO.d)().removeFromEyeHeightCache(OW);
          const WW = this.Hx.EY.HiW(this.Hx.Dv),
            iW = null !== (mW = null === WW || void 0 === WW ? void 0 : WW.physicsState) && void 0 !== mW ? mW : {
              type: fO.p.DEFAULT,
              tier: null
            };
          return void(0, XO.d)().updatePositionAndPhysics(this.Hx.Dv, iW, !1)
        }
        const EW = (0, XO.d)().getLifeformType(OW);
        if (null === EW) return;
        const {
          physicsBodyWidth: NW,
          physicsBodyHeight: PW
        } = (0, RO.e)(iW, EW);
        this.Hx.EY.HOW(OW, NW, PW, NW)
      }
      handleBaseRenderHeadingChange(WW, iW) {
        const OW = this.Hx.EY.getState(WW, "meshRotation");
        OW && (OW.baseRenderRotation[1] = iW);
        for (const mW of (0, XO.d)().getFollowingEntities(WW)) {
          const WW = this.Hx.EY.getState(mW, "meshRotation"),
            OW = this.Hx.EY.uOW(mW);
          WW && OW.oOW && (WW.baseRenderRotation[1] = iW)
        }
      }
      handleFollowingOffsetChange(WW, iW) {
        const OW = this.Hx.EY.uOW((0, pO.b)(WW));
        if (OW && OW.offset) {
          const WW = iW ? Array.from(iW) : nO().ZERO;
          OW.offset[0] = WW[0], OW.offset[1] = WW[1], OW.offset[2] = WW[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(WW, iW) {
        const OW = this.Hx.EY.uOW((0, pO.b)(WW));
        OW && (OW.oOW = null === iW || void 0 === iW || iW)
      }
      handlePositionChange(WW, iW, OW) {
        if (this.Hx.EY.liW(WW, "smoothToServerPos")) {
          const mW = this.Hx.EY.getState(WW, "smoothToServerPos");
          (0, GO.setServerPositionAxis)(mW, QO[iW], OW)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.mY(((WW, iW) => {
          this.allItems[iW] = WW, (0, CO.l)(this.Hx, iW, [WW.x, WW.y, WW.z], WW.id, {
            amount: WW.amount,
            attributes: JSON.parse(WW.attributes),
            UE: (0, iO.e)(this.Hx).cantPickUpItem(iW),
            size: WW.size,
            predictedAt: (0, XO.d)().client.itemDropPrediction.onServerItemAdded(iW)
          });
          const OW = this.createStateCallbacks(WW);
          for (const mW of lO(cO)) this.onItemFieldChange(iW, mW, WW[mW]), this.addDetacher(iW, this.listenForFutureChanges(OW, mW, (WW => {
            this.onItemFieldChange(iW, mW, WW)
          })))
        })), this.roomStateCallbacks.items.mH(((WW, iW) => {
          delete this.allItems[iW], this.detach(iW), (0, XO.d)().client.itemDropPrediction.onServerItemRemoved(iW), this.Hx.EY.liW(iW, this.Hx.EY.names.itemState) && this.Hx.EY.deleteEntity(iW), (0, iO.e)(this.Hx).disposeEntity(iW)
        }))
      }
      onItemFieldChange(WW, iW, OW) {
        if (iW in QO) {
          if (this.Hx.EY.liW(WW, "itemState")) {
            const mW = this.Hx.EY.getState(WW, "smoothToServerPos");
            (0, GO.setServerPositionAxis)(mW, QO[iW], OW), (0, XO.d)().client.itemDropPrediction.onServerItemMoved(WW)
          }
          return
        }
        if (!this.Hx.EY.liW(WW, "itemState")) return;
        const mW = this.Hx.EY.getState(WW, "itemState");
        "amount" === iW && OW !== mW.amount && (mW.creationTime = Date.now()), mW[iW] = "attributes" === iW ? JSON.parse(OW) : OW
      }
      dispose() {
        if (!this.JA) {
          this.JA = !0, this.Hx.off("beforeInputs", this.onFrame), this.Hx.off("hZ", this.Hk), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const WW of this.deferredSetups.values()) WO.l.unsubscribe(WW);
          this.deferredSetups.clear(), this.Hx.EY.mV(this.Hx.Dv, this.Hx.EY.names.qS);
          for (const WW in this.allItems) this.Hx.EY.deleteEntity(WW), delete this.allItems[WW];
          for (const WW of [...this.detachers.keys()]) this.detach(WW);
          (0, iO.e)(this.Hx).clear();
          for (const WW of (0, XO.d)().client.iterateEntityIds())(0, XO.d)().client.disposeEntity(WW)
        }
      }
    }
    const rO = [0, 0, 0];

    function zO(WW) {
      if ("string" !== typeof WW) return;
      const iW = WW.indexOf("|"),
        OW = -1 === iW ? WW : WW.slice(0, iW),
        mW = im();
      return Object.hasOwn(mW, OW) ? mW[OW] : void 0
    }
    const FO = new Set;
    const QO = {
      x: 0,
      y: 1,
      z: 2
    };
    let Wm = null;

    function im() {
      return null !== Wm || (Wm = {
        ...Object.fromEntries(PO.i.map((WW => {
          const {
            Qt: iW
          } = (0, BO.b)(WW);
          return [WW, iW]
        }))),
        Pebble: jO.c,
        Snowball: jO.c,
        "Snowball Launcher": jO.c,
        "Reinforced Pebble": jO.c,
        Bullet: jO.c,
        "Reinforced Ball": jO.c,
        Ball: jO.c,
        Mango: jO.c,
        "Moonstone Orb": jO.c,
        ...Object.fromEntries(NO.t.map((WW => [(0, KO.Zb)(WW), jO.c]))),
        Arrow: jO.c,
        "Arrow of Speed": jO.c,
        "Arrow of Poison": jO.c,
        "Arrow of Slowness": jO.c,
        "Arrow of Weakness": jO.c,
        "Arrow of Knockback": jO.c,
        "Arrow of Strength": jO.c,
        "Arrow of Invisibility": jO.c,
        "Arrow of Jumping": jO.c,
        "Arrow of Defense": jO.c,
        "Arrow of Instant Healing": jO.c,
        "Arrow of Instant Damage": jO.c,
        "Arrow of Regeneration": jO.c,
        "Arrow of Haste": jO.c,
        "Arrow of Shield": jO.c,
        "Arrow of Double Jump": jO.c,
        "Arrow of Heat Resistance": jO.c,
        "Arrow of X-Ray Vision": jO.c,
        "Arrow of Mining Yield": jO.c,
        "Arrow of Brain Rot": jO.c,
        "Arrow of Milk": jO.c,
        Fireball: jO.c,
        "Bouncy Bomb": jO.c,
        RPG: jO.c,
        "Obby RPG": jO.c,
        "Super RPG": jO.c,
        "Grenade Launcher": jO.c,
        Iceball: jO.c,
        Coconut: jO.c,
        "Splash Speed Potion": jO.c,
        "Splash Defense Potion": jO.c,
        "Splash Strength Potion": jO.c,
        "Splash Invisibility Potion": jO.c,
        "Splash Jump Potion": jO.c,
        "Splash Knockback Potion": jO.c,
        "Splash Poison Potion": jO.c,
        "Splash Speed Potion II": jO.c,
        "Splash Defense Potion II": jO.c,
        "Splash Strength Potion II": jO.c,
        "Splash Jump Potion II": jO.c,
        "Splash Knockback Potion II": jO.c,
        "Splash Poison Potion II": jO.c,
        "Splash Slowness Potion": jO.c,
        "Splash Slowness Potion II": jO.c,
        "Splash Weakness Potion": jO.c,
        "Splash Weakness Potion II": jO.c,
        "Splash Milk Potion": jO.c,
        "Splash Instant Damage Potion": jO.c,
        "Splash Instant Damage Potion II": jO.c,
        "Splash Instant Healing Potion": jO.c,
        "Splash Instant Healing Potion II": jO.c,
        "Splash Regeneration Potion": jO.c,
        "Splash Regeneration Potion II": jO.c,
        "Splash Haste Potion": jO.c,
        "Splash Haste Potion II": jO.c,
        "Splash Shield Potion": jO.c,
        "Splash Shield Potion II": jO.c,
        "Splash Double Jump Potion": jO.c,
        "Splash Heat Resistance Potion": jO.c,
        "Splash X-Ray Vision Potion": jO.c,
        "Splash Mining Yield Potion": jO.c,
        "Splash Mining Yield Potion II": jO.c,
        "Splash Brain Rot Potion": jO.c,
        "Yellow Paintball Gun": jO.c,
        "White Paintball Gun": jO.c,
        "Red Paintball Gun": jO.c,
        "Purple Paintball Gun": jO.c,
        "Pink Paintball Gun": jO.c,
        "Orange Paintball Gun": jO.c,
        "Magenta Paintball Gun": jO.c,
        "Lime Paintball Gun": jO.c,
        "Light Gray Paintball Gun": jO.c,
        "Light Blue Paintball Gun": jO.c,
        "Green Paintball Gun": jO.c,
        "Gray Paintball Gun": jO.c,
        "Cyan Paintball Gun": jO.c,
        "Brown Paintball Gun": jO.c,
        "Blue Paintball Gun": jO.c,
        "Black Paintball Gun": jO.c,
        "Yellow Heavy Paintball Gun": jO.c,
        "White Heavy Paintball Gun": jO.c,
        "Red Heavy Paintball Gun": jO.c,
        "Purple Heavy Paintball Gun": jO.c,
        "Pink Heavy Paintball Gun": jO.c,
        "Orange Heavy Paintball Gun": jO.c,
        "Magenta Heavy Paintball Gun": jO.c,
        "Lime Heavy Paintball Gun": jO.c,
        "Light Gray Heavy Paintball Gun": jO.c,
        "Light Blue Heavy Paintball Gun": jO.c,
        "Green Heavy Paintball Gun": jO.c,
        "Gray Heavy Paintball Gun": jO.c,
        "Cyan Heavy Paintball Gun": jO.c,
        "Brown Heavy Paintball Gun": jO.c,
        "Blue Heavy Paintball Gun": jO.c,
        "Black Heavy Paintball Gun": jO.c,
        "Toxin Ball": jO.c,
        "Splash Aura XP Potion": jO.c,
        "Splash Aura XP Potion II": jO.c,
        "Arrow of Aura XP": jO.c,
        Firecracker: jO.c,
        "Rainbow Firecracker": jO.c,
        "White Firecracker": jO.c,
        "Orange Firecracker": jO.c,
        "Magenta Firecracker": jO.c,
        "Light Blue Firecracker": jO.c,
        "Yellow Firecracker": jO.c,
        "Lime Firecracker": jO.c,
        "Pink Firecracker": jO.c,
        "Gray Firecracker": jO.c,
        "Light Gray Firecracker": jO.c,
        "Cyan Firecracker": jO.c,
        "Purple Firecracker": jO.c,
        "Blue Firecracker": jO.c,
        "Brown Firecracker": jO.c,
        "Green Firecracker": jO.c,
        "Red Firecracker": jO.c,
        "Black Firecracker": jO.c,
        "Firecracker Pebble": jO.c,
        "Rainbow Firecracker Pebble": jO.c,
        "White Firecracker Pebble": jO.c,
        "Orange Firecracker Pebble": jO.c,
        "Magenta Firecracker Pebble": jO.c,
        "Light Blue Firecracker Pebble": jO.c,
        "Yellow Firecracker Pebble": jO.c,
        "Lime Firecracker Pebble": jO.c,
        "Pink Firecracker Pebble": jO.c,
        "Gray Firecracker Pebble": jO.c,
        "Light Gray Firecracker Pebble": jO.c,
        "Cyan Firecracker Pebble": jO.c,
        "Purple Firecracker Pebble": jO.c,
        "Blue Firecracker Pebble": jO.c,
        "Brown Firecracker Pebble": jO.c,
        "Green Firecracker Pebble": jO.c,
        "Red Firecracker Pebble": jO.c,
        "Black Firecracker Pebble": jO.c,
        "Blinding Pebble": jO.c,
        Poop: jO.c,
        "Wood Boomerang": jO.c,
        "Stone Boomerang": jO.c,
        "Iron Boomerang": jO.c,
        "Gold Boomerang": jO.c,
        "Diamond Boomerang": jO.c,
        "Amethite Boomerang": jO.c,
        "Magmasteel Boomerang": jO.c,
        "Rubellite Boomerang": jO.c,
        "Serpentite Boomerang": jO.c,
        "Moonstone Boomerang": jO.c,
        "67 Base Projectile": jO.c,
        "67 Boosted Projectile": jO.c,
        "Capitano Grenade": jO.c,
        "Scatter Pellet": jO.c,
        "Lucky Bomb": jO.c,
        "Unlucky Bomb": jO.c,
        "Swap Orb": jO.c,
        Mesh: vO,
        AudioEntity: DO
      }), Wm
    }
  },
  40221: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      h: () => PW
    });
    var mW = OW(643),
      EW = OW(38895);
    const NW = 4e4;
    class PW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = WW, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(WW, iW, OW) {
        const NW = (0, mW.U)(WW),
          PW = (0, mW.U)(iW),
          LW = (0, mW.U)(OW),
          cW = this.now();
        if (NW !== this.lastChunkX || PW !== this.lastChunkY || LW !== this.lastChunkZ) {
          this.lastChunkX = NW, this.lastChunkY = PW, this.lastChunkZ = LW, this.lastChunkId = (0, EW.e)(NW, PW, LW), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, cW);
          for (const [WW, iW] of this.editedAt) {
            if (iW >= cW - 3e5) break;
            this.editedAt.delete(WW)
          }
        } else this.editedAt.set(this.lastChunkId, cW)
      }
      chunksEditedSince(WW) {
        const iW = [];
        for (const [OW, mW] of this.editedAt) mW >= WW && iW.push(OW);
        return iW
      }
    }
  },
  40274: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => Ai,
      g: () => qi,
      h: () => ei,
      j: () => Ri
    });
    var mW = OW(2350),
      EW = OW(9997),
      NW = OW(37904),
      PW = OW(37909),
      LW = OW(1515),
      cW = OW(37555),
      wW = OW(40178),
      tW = OW(40162),
      ZW = OW(2478),
      xW = OW(39047),
      lW = OW(40282),
      AW = OW(1230),
      bW = OW(327),
      jW = OW(27),
      UW = OW(2061),
      kW = OW(100),
      sW = OW(39),
      MW = OW(2085),
      KW = OW(2012),
      SW = OW(4043);
    class YW {
      constructor(WW) {
        this.storeForMs = WW, this.clicks = new SW.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const WW = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < WW;) this.clicks.dequeue()
      }
      getNumClicksInMs(WW) {
        let iW = 0;
        return this.clicks.forEach((OW => {
          OW > Date.now() - WW && iW++
        })), iW
      }
      getMaxClickSeparationInMs(WW) {
        if (0 === this.clicks.size) return this.storeForMs;
        let iW = 0,
          OW = Date.now() - WW;
        this.clicks.forEach((mW => {
          mW < Date.now() - WW || (iW = Math.max(iW, Math.abs(mW - OW)), OW = mW)
        }));
        const mW = Math.abs(Date.now() - OW);
        return Math.max(iW, mW)
      }
    }
    class yW {
      constructor(WW) {
        this.storeForMs = WW, this.clickDownDurations = new SW.d
      }
      registerClickDownDuration(WW) {
        this.clickDownDurations.enqueue({
          dur: WW,
          atTime: Date.now()
        });
        const iW = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < iW;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(WW) {
        if (WW > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let iW = 0,
          OW = 0;
        return this.clickDownDurations.forEach((mW => {
          mW.atTime > Date.now() - WW && (iW++, OW = Math.max(OW, mW.dur))
        })), `${iW}:${OW}`
      }
    }
    var TW = OW(37735),
      JW = OW(40287),
      hW = OW(25),
      HW = OW(2365),
      nW = OW(1351),
      uW = OW(3323),
      oW = OW(5150),
      dW = OW(136),
      eW = OW(39326),
      vW = OW(39560),
      gW = OW(643),
      DW = OW(37730),
      VW = OW(13),
      pW = OW(5725),
      fW = OW(1217),
      CW = OW(182),
      XW = OW(40289),
      BW = OW(40292),
      qW = OW(40298),
      RW = OW(39366),
      GW = OW(40312),
      IW = OW(39265),
      aW = OW(4607),
      rW = OW(1729),
      zW = OW(3361),
      FW = OW(3866),
      QW = OW(37518),
      Wi = OW(37527),
      ii = OW(40305),
      Oi = OW(39133);
    const mi = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Ei() {
      var WW, iW;
      return !(null === (WW = (0, HW.d)().client) || void 0 === WW || null === (iW = WW.freeCameraController) || void 0 === iW || !iW.movesFly())
    }

    function Ni(WW) {
      const iW = WW.on.bind(WW);
      WW.on = (WW, OW) => {
        MW.F.has(WW) ? iW(WW, OW) : iW(WW, (iW => {
          var mW;
          return null !== (mW = (0, HW.d)().client) && void 0 !== mW && mW.isReplayMode() ? function(WW) {
            return WW in mi
          }(WW) && Ei() ? OW(iW) : void 0 : OW(iW)
        }))
      }
    }
    const Pi = 5e3,
      Li = 1;
    let ci, wi = Li,
      ti = 0;
    const Zi = !0;
    let xi = Zi;
    UW.d.subscribe("_ignoreBasicBoards", (WW => {
      xi = WW
    })), (0, mW.onGameReset)((() => {
      xi = Zi
    }));
    let li = null;
    const Ai = () => li;
    let bi, ji, Ui;
    var ki, si, Mi, Ki, Si, Yi, yi, Ti, Ji;
    const Hi = [46, 0, 1, "h", 213, "a", 9, "g", "e", "f", "d", 8, 255, "length", 2, 157, 171, 4, "undefined", void 0, "c", "b", 63, 6, "fromCodePoint", 7, 12, "push", 152, 158, 189, 124, "i", 57, 91, 39, 8191, 88, 13, 14, 229, 81, 5, 32, 76, !1, 3, 187, 52, 70, 248, 35, 143, 156, 11, 236, 235, 10, 243, 195, 85, 108, 54, 145, !0, 33554432, 67108864, 233, 224, 225, 218, 27, 24, 78, 239, 184, 129, 232, 77, "-v", 221, 84, 140, ")", "l)"];

    function ni(...WW) {
      return WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18] ? ki[WW[Hi[1]]] = function(...WW) {
        for (di(WW[Hi[13]] = Hi[2], WW[Hi[5]] = '[4`)5{v^|$3u0z](#*.+y2&x/eY9wKW">D,AjFnbhmgBUTRqPLSVNkMJXOEsrCo8It1~p<@ifl6cG;?:H%_}da!7=ZQ', WW[Hi[0]] = "" + (WW[Hi[1]] || ""), WW[Hi[4]] = WW[Hi[0]].length, WW[Hi[10]] = [], WW[Hi[8]] = Hi[1], WW[Hi[9]] = Hi[1], WW[Hi[7]] = -Hi[2]), WW[Hi[3]] = Hi[1]; WW[Hi[3]] < WW[Hi[4]]; WW[Hi[3]]++)
          if (WW[Hi[6]] = WW[Hi[5]].indexOf(WW[Hi[0]][WW[Hi[3]]]), WW[Hi[6]] !== -Hi[2])
            if (WW[Hi[7]] < Hi[1]) WW[Hi[7]] = WW[Hi[6]];
            else {
              di(WW[Hi[7]] += WW[Hi[6]] * Hi[34], WW[Hi[8]] |= WW[Hi[7]] << WW[Hi[9]], WW[Hi[9]] += (WW[Hi[7]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
              do {
                di(WW[Hi[10]].push(WW[Hi[8]] & Hi[12]), WW[Hi[8]] >>= Hi[11], WW[Hi[9]] -= Hi[11])
              } while (WW[Hi[9]] > Hi[25]);
              WW[Hi[7]] = -Hi[2]
            } return WW[Hi[7]] > -Hi[2] && WW[Hi[10]].push((WW[Hi[8]] | WW[Hi[7]] << WW[Hi[9]]) & Hi[12]), ui(WW[Hi[10]])
      }(si[WW[Hi[1]]]) : ki[WW[Hi[1]]]
    }

    function ui(...WW) {
      return WW[Hi[13]] = Hi[2], typeof Ki !== Hi[18] && Ki ? (new Ki).decode(new Si(WW[Hi[1]])) : typeof Yi !== Hi[18] && Yi ? Yi.from(WW[Hi[1]]).toString("utf-8") : Ji(WW[Hi[1]])
    }

    function oi() {}

    function di() {
      di = function() {}
    }

    function ei(WW) {
      function iW() {
        return WW.EY.kOW(WW.Dv)
      }
      Ni(WW.inputs.down), Ni(WW.inputs.up);
      for (const mW of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const iW = (iW, OW) => {
          var EW, NW;
          if (Ei()) {
            var PW;
            const EW = mi[mW];
            var LW, cW;
            if (EW) null === (LW = (0, HW.d)().client) || void 0 === LW || null === (cW = LW.freeCameraController) || void 0 === cW || cW.handlefreeCamKeyPress(EW, iW, OW);
            return void(OW || null !== (PW = (0, HW.d)().client) && void 0 !== PW && PW.isReplayMode() || (WW.EY.YOW()[mW] = !1))
          }
          if (null !== (EW = (0, HW.d)().client) && void 0 !== EW && null !== (NW = EW.freeCameraController) && void 0 !== NW && NW.isKeyPressOverriden(iW)) return;
          WW.EY.YOW()[mW] = OW
        };
        WW.inputs.down.on(mW, (WW => iW(WW, !0))), WW.inputs.up.on(mW, (WW => iW(WW, !1)))
      }
      WW.inputs.down.on("crouch", (() => {
        if (Ei()) return;
        if (!WW.gM.canCrouch) return;
        const iW = WW.EY.YOW();
        hW.d.get("clientEscMenuOptions").crouchIsToggle && (iW.crouchToggled = !iW.crouchToggled && !iW.padSneakToggled), iW.padSneakToggled = !1
      }));
      const OW = () => {
        const WW = iW();
        WW.isGun() && WW.inaccuracyCalculator.jump()
      };
      WW.inputs.down.on("jump", (WW => {
        Ei() || (OW(), bi(WW))
      }));
      for (const mW of MW.j) WW.inputs.down.on(mW, (WW => {
        var iW, OW;
        null !== (iW = (0, HW.d)().client) && void 0 !== iW && null !== (OW = iW.freeCameraController) && void 0 !== OW && OW.handlefreeCamKeyPress(mW, WW, !0) && (WW.preventDefault(), WW.stopPropagation())
      })), WW.inputs.up.on(mW, (WW => {
        var iW, OW;
        null !== (iW = (0, HW.d)().client) && void 0 !== iW && null !== (OW = iW.freeCameraController) && void 0 !== OW && OW.handlefreeCamKeyPress(mW, WW, !1) && (WW.preventDefault(), WW.stopPropagation())
      }));
      WW.inputs.down.on("recordGame", (() => {
        var WW, iW;
        null === (WW = (0, HW.d)().client) || void 0 === WW || null === (iW = WW.gameRecorder) || void 0 === iW || iW.toggleRecording()
      })), WW.inputs.down.on("recordClip", (() => {
        var WW, iW;
        (0, TW.e)() || null === (WW = (0, HW.d)().client) || void 0 === WW || null === (iW = WW.gameRecorder) || void 0 === iW || iW.saveClip()
      }));
      for (const mW of MW.F) WW.inputs.down.on(mW, (() => {
        var WW;
        if ((0, JW.b)()) return;
        if ("replayViewerOpen" === mW) return void jW.l.iZ("replayViewer|requested", "toggle");
        const iW = null === (WW = (0, HW.d)().client) || void 0 === WW ? void 0 : WW.gameReplayer;
        ((0, TW.e)() || null !== iW && void 0 !== iW && iW.isReplayMode()) && (null === iW || void 0 === iW || iW.handleAction(mW))
      }));
      const LW = new YW(3e4),
        xW = new yW(4e4);
      let lW = 0;
      const sW = WW => {
          let iW = 0,
            OW = null;
          const mW = iW => null !== iW && iW === OW && (OW = null, WW(), !0);
          return {
            press: () => (iW++, (0, XW.b)() || (mW(OW), OW = iW), iW),
            owns: WW => WW === OW,
            release: mW
          }
        },
        SW = (WW, OW) => {
          OW && Ri(AW.c.TouchDownFirePrimary), WW ? pW() : ((0, vW.i)(), iW().ZmW()), OW || Ri(AW.c.DownFirePrimary), qi(!0), LW.click();
          const EW = LW.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            NW = LW.getMaxClickSeparationInMs(1e4) < 20,
            PW = LW.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (EW || NW || PW) {
            let WW;
            if (EW) WW = 30;
            else if (NW) WW = 50;
            else {
              if (!PW) throw new Error("???");
              WW = 70
            }(0, mW.sendColyMessage)(ZW.Rj, WW)
          }
        },
        oW = new BW.d,
        dW = sW((() => {
          BW.d.stopRunning();
          const WW = Date.now() - lW;
          xW.registerClickDownDuration(WW), iW().cmW(), Ri(AW.c.UpFirePrimary), qi(!1);
          const OW = xW.clickDownDurationsCheck(4e4);
          (0, mW.sendColyMessage)(ZW.jg, OW)
        }));
      let eW = 0;
      WW.inputs.down.on("primary-fire", (function(WW) {
        eW = dW.press(), dW.owns(eW) && (lW = Date.now(), Math.abs(performance.now() - WW.timeStamp) > 5e3 || (SW(WW.altKey, "changedTouches" in WW), bi(WW)))
      })), WW.inputs.up.on("primary-fire", (function(WW) {
        dW.release(eW) && bi(WW, !0)
      }));
      const gW = () => {
          iW().IwW(), Ri(AW.c.DownFireSecondary), qi(!0), WW.WiW && !WW.WiW.position && (0, tW.i)()
        },
        DW = sW((() => {
          iW().LmW(), Ri(AW.c.UpFireSecondary), qi(!1)
        }));
      let VW = 0;
      WW.inputs.down.on("alt-fire", (function(WW) {
        VW = DW.press(), DW.owns(VW) && (gW(), bi(WW))
      })), WW.inputs.up.on("alt-fire", (function(WW) {
        DW.release(VW) && bi(WW, !0)
      }));
      const pW = () => iW().zwW();
      WW.inputs.down.on("mid-fire", (() => {
        (0, XW.b)() || pW()
      }));
      const GW = WW => {
          (0, mW.sendColyMessage)(ZW.th, WW, !0)
        },
        ci = WW => {
          (0, mW.sendColyMessage)(ZW.uh, {
            XL: WW,
            BL: Zi()
          }, !0)
        };
      for (const mW of ["SpecialAction1", "SpecialAction2"]) WW.inputs.down.on(mW, (() => {
        GW(mW)
      })), WW.inputs.up.on(mW, (() => {
        ci(mW)
      }));
      const ti = () => {
        const WW = iW();
        WW.isGun() && WW.reload(Date.now())
      };
      WW.inputs.down.on("ReloadGun", ti);
      const Zi = () => {
        let iW = "a";
        return WW.physics.testSolid.toString().includes("Ol") || (iW = "b"), iW
      };
      WW.inputs.down.on("OpenInventory", (WW => {
        WW.preventDefault(), (0, rW.t)(WW, "inventory", (0, qW.b)((0, HW.h)()))
      })), WW.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const xi = WW => {
        jW.l.iZ("DropItemKeyPressed", WW)
      };
      WW.inputs.down.on("DropItem", (() => {
        xi(WW.EY.YOW().crouch)
      })), WW.inputs.down.on("OpenShop", (iW => {
        (0, TW.e)() || "inGame" === hW.d.get("gameState") && (0, rW.s)(iW, bW.m.SHOP, !(0, EW.b)(WW.gM.shopInfo))
      })), WW.inputs.down.on("OpenLobbyLeaderboard", (iW => {
        (0, TW.e)() || "inGame" === hW.d.get("gameState") && (0, rW.x)(iW, (0, ii.d)(WW.gM), (0, zW.u)())
      })), WW.inputs.down.on("HideUi", (() => {
        jW.l.iZ("showUi", !1)
      })), WW.inputs.up.on("HideUi", (() => {
        jW.l.iZ("showUi", !0)
      }));
      const Ai = WW => {
        0 === WW && (WW = 10), jW.l.iZ("setSelectedInventorySlotI", WW - 1), jW.l.iZ("numkeyPressed", WW)
      };
      for (let mW = 1; mW <= 10; mW++) WW.inputs.down.on("HotBarSlot" + mW.toString(), (() => {
        Ai(mW)
      }));
      WW.inputs.down.on("OpenTasksAndLeaderboard", (iW => {
        const OW = (0, zW.x)();
        OW ? (0, rW.A)(iW, !0, OW) : (0, rW.t)(iW, "retentionFeatures", !(!WW.gM._tasks && !WW.gM._availableLeaderboards))
      })), WW.inputs.down.on("OpenCodeEditor", (iW => {
        (0, rW.A)(iW, (0, uW.d)((0, nW.d)()), (() => {
          (0, uW.i)(WW.EY.Vk(WW.Dv))
        }))
      })), WW.inputs.bind("ToggleFullCoordinateOverlay", "F3"), WW.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        jW.l.iZ("toggleFullCoordinateOverlay")
      }));
      const Ui = () => {
        (0, HW.d)().client.cameraController.swapCameraZoom()
      };
      WW.inputs.down.on("SwapCameraZoom", Ui), WW.inputs.down.on("OpenInviteLink", (WW => {
        (0, rW.t)(WW, "inviteLink", kW.featureFlags.canUseInviteLinks)
      })), WW.inputs.bind("Y", "KeyY"), WW.inputs.down.on("Y", (WW => {
        (0, TW.e)() || jW.l.iZ("YKeyPressed")
      })), WW.inputs.bind("X", "KeyX"), WW.inputs.down.on("X", (WW => {
        (0, TW.e)() || jW.l.iZ("XKeyPressed")
      })), WW.inputs.down.on("OpenEmoteWheel", (() => {
        jW.l.iZ("requestEmoteWheelHoldOpen")
      })), WW.inputs.up.on("OpenEmoteWheel", (() => {
        jW.l.iZ("requestEmoteWheelHoldRelease")
      })), WW.inputs.down.on("Zoom", (() => {
        "inGame" === hW.d.get("gameState") && (0, HW.d)().client.cameraController.setZoomKeyHeld("keys", !0)
      })), WW.inputs.up.on("Zoom", (() => {
        (0, HW.d)().client.cameraController.setZoomKeyHeld("keys", !1)
      })), vi();
      const ki = WW => function() {
        return ji(), WW(...arguments)
      };

      function si(WW) {
        "inGame" !== hW.d.get("gameState") || (0, rW.m)() || (jW.l.iZ("ctrlCrouchWithoutFullscreen"), WW.preventDefault())
      }
      li = {
        primaryFireDown: ki((WW => {
          const iW = dW.press();
          return dW.owns(iW) && (lW = Date.now(), SW(!1, !1), WW && oW.start()), iW
        })),
        primaryFireUp: ki((WW => {
          dW.release(WW)
        })),
        altFireDown: ki((() => {
          const WW = DW.press();
          return DW.owns(WW) && gW(), WW
        })),
        altFireUp: ki((WW => {
          DW.release(WW)
        })),
        jumpDown: ki(OW),
        specialActionDown: ki(GW),
        specialActionUp: ki(ci),
        reloadGun: ki(ti),
        dropItem: ki(xi),
        swapCameraZoom: ki(Ui),
        zoom: ki((WW => {
          (0, HW.d)().client.cameraController.setZoomKeyHeld("pad", WW)
        })),
        pickBlock: ki(pW)
      }, WW.inputs.down.on("ctrlCrouch", si), WW.inputs.up.on("ctrlCrouch", si), WW.inputs.bind("ctrlCrouch", "ControlLeft");
      const Mi = WW => {
        "inGame" === hW.d.get("gameState") && WW.ctrlKey && !(0, rW.m)() && WW.preventDefault()
      };
      document.addEventListener("keydown", Mi), document.addEventListener("keyup", Mi), document.addEventListener("keypress", Mi), WW.inputs.bind("Alt", "AltLeft", "AltRight"), WW.inputs.down.on("Alt", (WW => {
        WW.preventDefault()
      }));
      const Ki = iW => (0, IW.h)(WW, iW),
        Si = iW => (0, IW.i)(WW, iW),
        Yi = [0, 0, 0],
        yi = [0, 0, 1];
      WW.on("afterRender", (iW => {
        Wi.p.frame(iW, WW.camera.heading, WW.camera.pitch, Wi.j.drawn), (0, NW.i)(WW.camera.heading), (0, PW.g)(WW.camera.heading), (0, IW.k)(WW, Yi, yi), (0, HW.d)().client.triggerGameCallback("onAfterRender", iW, {
          cameraHeading: WW.camera.heading,
          cameraPitch: WW.camera.pitch,
          cameraPosition: Yi,
          cameraDirection: yi,
          tanHalfFovX: (0, IW.c)(WW),
          tanHalfFovY: Math.tan(WW.TZ.o4().fov / 2),
          screenBandPct: {
            x: aW.e,
            y: (0, aW.m)()
          },
          projectWorldPosToScreenPos: Ki,
          projectWorldPosToViewport: Si
        })
      })), WW.camera.gH = (0, QW.startLookDebug)("js"), WW.inputs.Qv = QW.noteLookDroppedCopy, (0, FW.t)("remesh") && (0, Oi.n)(WW), WW.on("beforeInputs", (() => {
        if ((0, JW.b)()) return WW.inputs.bR.dx = 0, void(WW.inputs.bR.dy = 0);
        if (WW.camera.bR.dx += WW.inputs.bR.dx, WW.camera.bR.dy += WW.inputs.bR.dy, 0 !== WW.inputs.bR.dx || 0 !== WW.inputs.bR.dy) {
          WW.EY.getState(WW.Dv, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        WW.inputs.bR.dx = 0, WW.inputs.bR.dy = 0
      }));
      let Ti = 0;
      const Ji = [0, 0, 0],
        Hi = [0, 0, 0],
        ni = {
          base: Ji,
          max: Hi
        },
        ui = WW => {
          const iW = CW.f.droppedBlockSize / 2;
          return [0, 1, 2].every((OW => WW[OW] >= Ji[OW] - iW && WW[OW] <= Hi[OW] + iW))
        };
      WW.on("hZ", (function(iW) {
        jW.l.iZ("noaTick", iW);
        const OW = (0, HW.d)().client;
        if (OW.triggerGameCallback("hZ", iW), OW.isClientGameSessionActive()) try {
          wW.d.hZ(iW)
        } catch (PW) {
          console.error("Error ticking audio entities", PW)
        }
        if (!WW.EY.jOW(WW.Dv).isAlive) return;
        Date.now() - Ti > 9e3 && (! function() {
          const WW = (0, HW.h)();
          "number" === typeof WW.gM.speedMultiplier && "number" === typeof WW.gM.jumpAmount && (0, mW.sendColyMessage)(ZW.Xh, {
            XP: (0, fW.h)(WW.gM.speedMultiplier),
            BP: (0, fW.e)(WW.gM.jumpAmount),
            qP: (0, fW.h)(WW.gM.crouchingSpeed),
            RP: (0, fW.h)(WW.gM.walkingSpeed),
            GP: (0, fW.h)(WW.gM.runningSpeed),
            IP: (0, fW.e)(WW.GWW),
            aP: WW.EY.HiW(WW.Dv).jumpForce,
            rP: WW.EY.YG(1).width,
            zP: WW.EY.YG(1).height,
            FP: WW.EY.jB(1).FP
          }, !0)
        }(), Ti = Date.now());
        const EW = WW.EY.YOW();
        if ((EW.jump || EW.forward || EW.backward || EW.left || EW.right || EW.sprint) && jW.l.iZ("usedKeyboard"), WW.EY.QiW(WW.Dv) && !0 === WW.gM.canPickUpItems) {
          const iW = WW.EY.Vk(WW.Dv),
            OW = (0, KW.n)(wi),
            EW = (0, KW.o)(wi);
          Ji[0] = iW[0] - OW, Ji[1] = iW[1] - .6 * EW, Ji[2] = iW[2] - OW, Hi[0] = iW[0] + OW, Hi[1] = iW[1] + CW.f.ZU + .6 * EW, Hi[2] = iW[2] + OW;
          const NW = WW.EY.EcW(ni, WW.EY.names.autoRotate),
            {
              itemDropPrediction: PW
            } = (0, HW.d)().client,
            LW = mW.offlineInputReplay.holdsInput();
          if (NW.length > 0)
            for (const wW of NW) {
              const iW = WW.EY.getState(wW, "itemState");
              if (void 0 === iW || Date.now() - iW.creationTime < 500) continue;
              let OW = wW,
                EW = null;
              if (iW.UE) {
                const WW = PW.pickupTarget(wW, ui, LW);
                if (null === WW) continue;
                ({
                  ft: OW,
                  Bt: EW
                } = WW)
              }
              const NW = WW.EY.getState(OW, "itemState");
              if (NW.UE && null === EW) continue;
              let xW = 0,
                lW = null,
                AW = !1;
              if (0 === NW.amount) AW = !0;
              else {
                const {
                  amountPickedUp: iW
                } = WW.EY.ziW(WW.Dv).pickUpItem({
                  name: NW.name,
                  typeObj: NW.typeObj,
                  amount: NW.amount,
                  attributes: NW.attributes
                });
                if (xW = iW, 0 === xW) continue;
                lW = RW.b.pickUp(NW, xW), NW.amount -= xW, NW.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === NW.amount ? AW = !0 : NW.creationTime = Date.now() + Pi
              }
              const bW = (0, HW.d)().client.inventoryPrediction.record(lW);
              (0, mW.sendColyMessage)(ZW.oh, {
                ft: null === EW ? OW : "",
                Ct: xW,
                Xt: tW.f,
                NP: bW,
                Bt: EW
              }, !0), AW && (LW && PW.onPickedUpOffline(OW, bW, EW), null === EW && WW.EY.deleteEntity(OW));
              cW.c.play("pickUp", CW.f.pickupSoundVol).rate(1 + Math.random() * CW.f.pickupSoundRateVariation)
            }
        }
        if (!WW.EY.XiW(WW.Dv)) return;
        const NW = WW.inputs.bR.eiW;
        if (0 !== NW) {
          const iW = NW > 0 ? 1 : -1;
          WW.inputs.state["mid-fire"] || WW.inputs.state.Alt || !WW.gM.useInventory ? (WW.inputs.state["mid-fire"] && jW.l.iZ("requestEmoteWheelClose"), (0, HW.d)().client.cameraController.handleScrollZoom(iW)) : jW.l.iZ("ScrollInventorySlot", iW)
        }
      })), UW.d.subscribe("droppedItemScale", (WW => {
        wi = "number" === typeof WW && isFinite(WW) ? WW : Li
      }))
    }

    function vi() {
      const WW = (0, HW.h)();
      if (WW)
        for (const iW in MW.v) {
          WW.inputs.unbind(iW);
          for (const OW of MW.v[iW]) WW.inputs.bind(iW, OW)
        }
    }
    di(ki = {}, si = ['UodYd}7:utB/VE@.#0T3tJpE|3tlZ/8F~p`fKqL+{3yVb`5W*(K"=OZ4', "moxDyNoWGt._.CU+@P!5@S$8wo,GQ]wjPtg9^:Ta3]ke*PieSVA3", 'TVufyhE`Gubln@>jy0"5^<bzLM/o(YaA($ev', "pV=M]%pv[8S/Z5%b4>($kdm4D1KEB]$", "Ax%Mkbf/mE,fU#4gerx5RE~xmES", 'vKv"`f~AUX2<5(j"3p2wIr>!FzE><Pog1oH$z', "op@w,sRRr*i;V@:9/MzJPVze{Id@te(Yh)i$)6#`", 'hxn"cJY6VO&o=qA.', 'X$k";P<K+06R>)kwHyy65f~Va+ll^Syw>P{^)%Kq#OvyE%m"_);SERb4', ';v/$)k?R2+*chqvnEthleOQhaMn"T5s*ThX$!a$+Ooe', "dsl>ORu+]2ZRc]gY~$c|{,|j#8:@:n,*VijKPEkzd$Vu(YmeY6|v+", "vpv^SdE`", "*ra6:i@NXt64kr}95rj6ERN.nz", ")$fL(%YN%(128nkm7[", '"OWl]nVqU2UP{jZm$RRlmc3.;]6;{%{"mO*vYO&/Uon^[9iFwy&NBLmav', 'R,<6REI!O*a|U}f.c]GKe}HhUk^tbYoAC"GS+}k4', 'EM<3Mb||}I/VBYb"N[', "1la^?69mDM$#=(OANVX$<<[", "`6rk:ii4HkZ4,FOx`5r3i6{7*8n,5}~e2Ou3^<J4", "*Y9fp6(m9*A<<L/A/K+fLV[!AOk.xSu+(haY`rwNDO<H<e[jk$`", 'jr}{(nK+"11A1<o*s,?^pJrEcylekfxKTh&^3o0`', "bYmMtjM.yO8u%j(9j653$oURSMx)%r4*#MlMIJ6viED9I(=AVO4", "T03f@o_REs`z@zZxeY8N;<x4CXG.B]Yj(i8$GPxKVr1;;P%hRB.f;Ty|E*", "7PNKC:MRsy6X[(>/0>pYdiec$*T", 'asw;8:N63o9"BEWjJTowSVm%5', "&>b5ZN60gso4~nGbBtt|4b,`#O~8l5fY:wfv>i[", "7PKGvo74", "U6_>zPkmbEupMLPY*8B;8J|.W(", "4L:5Kqb+)", "dy6|7nk4", "GoC3T8fNS(?Lj)", 'VO&JvP!,ZEQ+I(wxlth9tb"mj+<2=sj/', 'STk"ZN++/E&GmFFe9K@^BL+mGuo8O5rx#R@$|%$+E*`W{f,Frt)', '.8>LN@UWu*mJI("/d@/?>H_,BXf>DP@F36=v', "{pT3MF;K&z%run6e&xC^>AxKey", "gv}>~ofR9*$MV]$.jpa^LLDOL1MGJ(qhOM3caagRCu`Vfs&,u0nwv%Q!Z*", "=*eVw?N`htN.h)]b=v#D4rs8RX5p@L1FosoG[:cz,OzCDfMmzOGSZ?r/q8h", "VOo^CP7^wt@;TF,FVF85l%j/<+Z6c]}9>PF3I:Q0aza(P9v", 'dy:5_j5W"2BHp}p"pxM^UFOA~$JGM]z+ow56TXzkkE~;,@>j', 'dt7GCr(^`Md~rjZA:t3;?G[E4.uF#9!#z8W";OTAC.pe/srj', "2if$LpD+~$@@3_,/", "{p(Dv%605", '+rbLuSemp$7;ff~.?THL8J]|"(I^>iV,Gsw"SLPh)', '[1:L!OCxUXJ^v%>/z8>cNV0|5$,fQ`CjuLaG8r|EEt9f")2,', "cx&^REHE^", "Z|ai+s#jD(D:&{L,pPWJ8bKmvEV/>)<+*vilRLn/woqNt5%YfP>l{jze^y", "yM@N@:%zJEvViEdh2(HMJE+k,+J^d(|.eh~{", "{KX$N@|!yMdkoz#yupw3i<w`", "TFwK1rW09y&PRF4*Uvu>G<[", 'IxoGmM*m6y@wSz)FmYR"waam;o%ec@ahehOV>Aeq/*R]i@vn}T;Y:ii8TuV', '8p$?^!txW12"qEKA}[', "zRF5TH}^`(A:4", "1pV3RXx4", "F6y6,M(mbIg/x`>WlpJ5+n16%(vp7s#Y,Vy^4jB^UX88y)", "Wtq$f:%VQ*aX;jL9jPdYtb.@dICwG)", "HT^D,Nk4", "8)zJjaNHNIYo(])*p*K6g@rHRXc6[", 'JviNKizz9s4t@<aA4KAf{6iVaE7@`e1Fg6$WoE"mEo9:OCA"Ky5K]6y`', "Uo`{|%dhgszfxSI/~PT5TX`WP8sL$fRhFKev", "6V?$5JNRwt2y$#/wmou3r;7*W.", 'f]"w)!=0kIONd})eEp{^kfb^z2T1BY9mjP*W}%P.!I3cc)1"', "vB/lc<kz)0ms|()jLMxNgX[", ",P8GljpR&+y/uYGYJTyKmC6/u*VX,e@.6Pl>ioEE0oKfW`zYVOB3zP;4#(fu4", "|O5JKqB8c*psbnEw_).V!nY`L1+PgecbIFe9NX;m7In1}Ywx;VS|$o#E9]", "y.,cXf(zD$HL(YI/U*XvVVJ^#O0xO#GnVh<6v%~<gy>)tP0", ':Vv"g@::vEe)hsgYbO"58,q^8k~AML@/Y()', ":y^N=S;zNIV8Zr4*PF4V6n;4", "/h,9p,2K]8BH#(ue1g+>#jaA$JE]l5^F}gj;4jVKiziRp}>/]r@w8rV49y", "mtxvMb0|=*L", "bKy6PcczjIk<ys4x/RaYhA5|Drc|,{Tn1)aYH%kzW2],LPWg", "z8~{(%.6MING$dOmbY?^XVfR[(%(D5Dx3LpJXdjN=yn", 'xR0;!<vRUt|p[rEm9p)f#iyNco)E9`^/ooR"P@d,4Os1I(B+epqvX,[', "xv)KO:246u;K8@V,R0N39", "m*#?PbPNC|*V=qnF[BMNG<4eQ]T55(bF*O@5w", '*8iL{kI/Oti57]OxfPxl1fP`CXGH1]i"iy/lbM,0}+', "honliJ[|Ko!KdqtFF$2^Ks|.azd6BYb.Zk4f5,&Rqkbw0)", 'Ilu>lj8<A$SGHj"*6oiLNXuk_(1;7(uYjFxGH}?0(2WGx9!hVt+K=q//W27K4', "`BFJ/sd0%$Y3!<^nkpW$_oXhVMT/yi2hOtRwK};mV+h:<z/g&rE>I,p/Yym", "h*k6sV^4", ')A,>qVn.1+|y@zg"Tik"?PZ^&++vgF9gs)?5BA:K{', "!*~>)f.|>.", "3Y$WSRg`", "7BM<gbe,B?cUsA88FwjmMM&le{GJoq`", "rbMuB*cOO7E", "Vzxkw98M", "oOe`R`_M", "VzM`nmBM", "y0:MEh#D", "Ty3Na]ZQ", "_WGLlvDD", "`UjYN`eX", "NvZV4%j`", "2M@a/T0h", "y_:l^Tf", ",K@aaTBh", "AWALFD3C", "(0m^0~{C", "y=ZU", "=r9hK|^C", "btj,n|V4", "wSyXpx|zS?j7a[WW&8V;yy%J|dB=Qqn", "gL9>V+Tjj*0", "6HheZ/8J", "0gj1_1sJ", "6HJ1%!YJ"]), di(Mi = function(...WW) {
      di(WW[Hi[13]] = Hi[1], WW[-Hi[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], WW[Hi[2]] = Hi[19], WW[Hi[14]] = []);
      try {
        di(WW[Hi[2]] = Object, WW[Hi[14]][Hi[27]]("".__proto__.constructor.name))
      } catch (si) {}
      WW: for (WW[-Hi[15]] = Hi[1]; WW[-Hi[15]] < WW[-Hi[16]][Hi[13]]; WW[-Hi[15]]++) try {
        for (WW[Hi[2]] = WW[-Hi[16]][WW[-Hi[15]]](), WW[Hi[17]] = Hi[1]; WW[Hi[17]] < WW[Hi[14]][Hi[13]]; WW[Hi[17]]++)
          if (typeof WW[Hi[2]][WW[Hi[14]][WW[Hi[17]]]] === Hi[18]) continue WW;
        return WW[Hi[2]]
      } catch (si) {}
      return WW[Hi[2]] || this
    }() || {}, Ki = Mi.TextDecoder, Si = Mi.Uint8Array, Yi = Mi.OZ, yi = Mi.String || String, Ti = Mi.Array || Array, Ji = function(...WW) {
      return di(WW[Hi[13]] = Hi[1], WW[Hi[5]] = new Ti(128), WW[Hi[28]] = yi[Hi[24]] || yi.fromCharCode, WW[Hi[20]] = []),
        function(...iW) {
          for (di(iW[Hi[13]] = Hi[2], iW[Hi[2]] = Hi[19], iW[Hi[21]] = Hi[19], iW[Hi[20]] = iW[Hi[1]][Hi[13]], WW[Hi[20]][Hi[13]] = Hi[1]), iW[Hi[17]] = Hi[1]; iW[Hi[17]] < iW[Hi[20]];) di(iW[Hi[21]] = iW[Hi[1]][iW[Hi[17]]++], iW[Hi[21]] <= 127 ? iW[Hi[2]] = iW[Hi[21]] : iW[Hi[21]] <= 223 ? iW[Hi[2]] = (31 & iW[Hi[21]]) << Hi[23] | iW[Hi[1]][iW[Hi[17]]++] & Hi[22] : iW[Hi[21]] <= Hi[74] ? iW[Hi[2]] = (15 & iW[Hi[21]]) << Hi[26] | (iW[Hi[1]][iW[Hi[17]]++] & Hi[22]) << Hi[23] | iW[Hi[1]][iW[Hi[17]]++] & Hi[22] : yi[Hi[24]] ? iW[Hi[2]] = (iW[Hi[21]] & Hi[25]) << 18 | (iW[Hi[1]][iW[Hi[17]]++] & Hi[22]) << Hi[26] | (iW[Hi[1]][iW[Hi[17]]++] & Hi[22]) << Hi[23] | iW[Hi[1]][iW[Hi[17]]++] & Hi[22] : (iW[Hi[2]] = Hi[22], iW[Hi[17]] += Hi[46]), WW[Hi[20]][Hi[27]](WW[Hi[5]][iW[Hi[2]]] || (WW[Hi[5]][iW[Hi[2]]] = WW[Hi[28]](iW[Hi[2]]))));
          return WW[Hi[20]].join("")
        }
    }()), ni(Hi[41]) in oi && (module.exports = async (WW = (...WW) => {
      function iW(...WW) {
        for (di(WW[Hi[13]] = Hi[2], WW[Hi[31]] = 'L@Z|A72,pmKY`u>^j?aG$W%)i*I;TvFgVrz=4sk8NxoB:PR<fq0JU["CSw(+9Xcht{53!16b.}Oe/dMy_]&HEDlQ~#n', WW[-Hi[29]] = "" + (WW[Hi[1]] || ""), WW[Hi[20]] = WW[-Hi[29]].length, WW[Hi[17]] = [], WW[Hi[8]] = Hi[1], WW[Hi[35]] = Hi[1], WW[-Hi[33]] = -Hi[2]), WW[-Hi[30]] = Hi[1]; WW[-Hi[30]] < WW[Hi[20]]; WW[-Hi[30]]++)
          if (WW[Hi[32]] = WW[Hi[31]].indexOf(WW[-Hi[29]][WW[-Hi[30]]]), WW[Hi[32]] !== -Hi[2])
            if (WW[-Hi[33]] < Hi[1]) WW[-Hi[33]] = WW[Hi[32]];
            else {
              di(WW[-Hi[33]] += WW[Hi[32]] * Hi[34], WW[Hi[8]] |= WW[-Hi[33]] << WW[Hi[35]], WW[Hi[35]] += (WW[-Hi[33]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
              do {
                di(WW[Hi[17]].push(WW[Hi[8]] & Hi[12]), WW[Hi[8]] >>= Hi[11], WW[Hi[35]] -= Hi[11])
              } while (WW[Hi[35]] > Hi[25]);
              WW[-Hi[33]] = -Hi[2]
            } return WW[-Hi[33]] > -Hi[2] && WW[Hi[17]].push((WW[Hi[8]] | WW[-Hi[33]] << WW[Hi[35]]) & Hi[12]), ui(WW[Hi[17]])
      }

      function OW(WW) {
        return typeof ki[WW] === Hi[18] ? ki[WW] = iW(si[WW]) : ki[WW]
      }
      throw WW[Hi[13]] = Hi[1], new Error(OW(82))
    }) => {
      function iW(...WW) {
        for (di(WW[Hi[13]] = Hi[2], WW[Hi[5]] = 'Ja^9`wrqm1{HTGWc0Xi7pl84ZI|PjAv[uKF"+b_$>B;Qxts%.Vfz~OeE6y=N3kLYC#/SRndgDh,}]!)5*MUo2:?@&(<', WW[Hi[40]] = "" + (WW[Hi[1]] || ""), WW[Hi[20]] = WW[Hi[40]].length, WW[Hi[44]] = [], WW[Hi[8]] = Hi[1], WW[Hi[9]] = Hi[1], WW[Hi[41]] = -Hi[2]), WW[Hi[42]] = Hi[1]; WW[Hi[42]] < WW[Hi[20]]; WW[Hi[42]]++)
          if (WW[Hi[43]] = WW[Hi[5]].indexOf(WW[Hi[40]][WW[Hi[42]]]), WW[Hi[43]] !== -Hi[2])
            if (WW[Hi[41]] < Hi[1]) WW[Hi[41]] = WW[Hi[43]];
            else {
              di(WW[Hi[41]] += WW[Hi[43]] * Hi[34], WW[Hi[8]] |= WW[Hi[41]] << WW[Hi[9]], WW[Hi[9]] += (WW[Hi[41]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
              do {
                di(WW[Hi[44]].push(WW[Hi[8]] & Hi[12]), WW[Hi[8]] >>= Hi[11], WW[Hi[9]] -= Hi[11])
              } while (WW[Hi[9]] > Hi[25]);
              WW[Hi[41]] = -Hi[2]
            } return WW[Hi[41]] > -Hi[2] && WW[Hi[44]].push((WW[Hi[8]] | WW[Hi[41]] << WW[Hi[9]]) & Hi[12]), ui(WW[Hi[44]])
      }

      function OW(...WW) {
        return WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18] ? ki[WW[Hi[1]]] = iW(si[WW[Hi[1]]]) : ki[WW[Hi[1]]]
      }
      const mW = new Set(process.argv.slice(Hi[14]));
      if (!mW.has(OW(83))) {
        if (mW.size !== Hi[2]) return Hi[45];
        if (!mW.has(Hi[79])) return Hi[45]
      }
      return await (async (iW, OW) => {
        function mW(...WW) {
          for (di(WW[Hi[13]] = Hi[2], WW[Hi[47]] = '=TMOeHJ+:XkxBbP&Ag(G_/z>~N*l,73S{Kqp"d8r#FI)Y^0s<w26vU]1uLa?R4;cE!.Q9m[%5}i@y`VZ|t$onChfDjW', WW[Hi[14]] = "" + (WW[Hi[1]] || ""), WW[Hi[46]] = WW[Hi[14]].length, WW[Hi[17]] = [], WW[Hi[8]] = Hi[1], WW[-Hi[48]] = Hi[1], WW[Hi[7]] = -Hi[2]), WW[Hi[3]] = Hi[1]; WW[Hi[3]] < WW[Hi[46]]; WW[Hi[3]]++)
            if (WW[Hi[6]] = WW[Hi[47]].indexOf(WW[Hi[14]][WW[Hi[3]]]), WW[Hi[6]] !== -Hi[2])
              if (WW[Hi[7]] < Hi[1]) WW[Hi[7]] = WW[Hi[6]];
              else {
                di(WW[Hi[7]] += WW[Hi[6]] * Hi[34], WW[Hi[8]] |= WW[Hi[7]] << WW[-Hi[48]], WW[-Hi[48]] += (WW[Hi[7]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
                do {
                  di(WW[Hi[17]].push(WW[Hi[8]] & Hi[12]), WW[Hi[8]] >>= Hi[11], WW[-Hi[48]] -= Hi[11])
                } while (WW[-Hi[48]] > Hi[25]);
                WW[Hi[7]] = -Hi[2]
              } return WW[Hi[7]] > -Hi[2] && WW[Hi[17]].push((WW[Hi[8]] | WW[Hi[7]] << WW[-Hi[48]]) & Hi[12]), ui(WW[Hi[17]])
        }

        function EW(...WW) {
          return WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18] ? ki[WW[Hi[1]]] = mW(si[WW[Hi[1]]]) : ki[WW[Hi[1]]]
        }
        return OW === await WW() ? EW(86) + Hi[84] : ""
      })(), Hi[64]
    }), di(Ui = (...WW) => {
      di(WW[Hi[13]] = Hi[2], WW[Hi[2]] = Hi[1]);
      for (const iW in WW[Hi[1]]) {
        function OW(...WW) {
          for (di(WW[Hi[13]] = Hi[2], WW[-Hi[53]] = 'GCXjbYZVErqLUmH3@Rx!+,|4pDNu{h5:0FgaQ2#A`BJ=<It/ef(1Os;]oKi[PM~6TW8S$l&cd*k9v}_?7w%z.)^">ny', WW[-Hi[51]] = "" + (WW[Hi[1]] || ""), WW[Hi[20]] = WW[-Hi[51]].length, WW[Hi[10]] = [], WW[Hi[42]] = Hi[1], WW[Hi[23]] = Hi[1], WW[Hi[7]] = -Hi[2]), WW[Hi[52]] = Hi[1]; WW[Hi[52]] < WW[Hi[20]]; WW[Hi[52]]++)
            if (WW[Hi[54]] = WW[-Hi[53]].indexOf(WW[-Hi[51]][WW[Hi[52]]]), WW[Hi[54]] !== -Hi[2])
              if (WW[Hi[7]] < Hi[1]) WW[Hi[7]] = WW[Hi[54]];
              else {
                di(WW[Hi[7]] += WW[Hi[54]] * Hi[34], WW[Hi[42]] |= WW[Hi[7]] << WW[Hi[23]], WW[Hi[23]] += (WW[Hi[7]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
                do {
                  di(WW[Hi[10]].push(WW[Hi[42]] & Hi[12]), WW[Hi[42]] >>= Hi[11], WW[Hi[23]] -= Hi[11])
                } while (WW[Hi[23]] > Hi[25]);
                WW[Hi[7]] = -Hi[2]
              } return WW[Hi[7]] > -Hi[2] && WW[Hi[10]].push((WW[Hi[42]] | WW[Hi[7]] << WW[Hi[23]]) & Hi[12]), ui(WW[Hi[10]])
        }

        function mW(...WW) {
          return WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18] ? ki[WW[Hi[1]]] = OW(si[WW[Hi[1]]]) : ki[WW[Hi[1]]]
        }

        function EW(...WW) {
          di(WW[Hi[13]] = Hi[1], WW[-Hi[56]] = function(...iW) {
            return di(iW[Hi[13]] = Hi[14], iW[Hi[5]] = [], iW[Hi[21]] = iW[Hi[1]].length, iW[Hi[1]].sort(((WW, iW) => WW - iW)), WW[Hi[21]](iW[Hi[5]], [], Hi[1], iW[Hi[21]], iW[Hi[1]], iW[Hi[2]])), iW[Hi[5]]
          }, WW[Hi[21]] = function(...iW) {
            if (di(iW[Hi[13]] = Hi[23], iW[Hi[23]] = null), !(iW[Hi[42]] < Hi[1])) {
              if (iW[Hi[42]] === Hi[1]) return iW[Hi[1]].push(iW[Hi[2]]);
              for (iW[Hi[55]] = iW[Hi[14]]; iW[Hi[55]] < iW[Hi[46]] && !(iW[Hi[17]][iW[Hi[55]]] > iW[Hi[42]]); iW[Hi[55]]++) iW[Hi[55]] > iW[Hi[14]] && iW[Hi[17]][iW[Hi[55]]] === iW[Hi[17]][iW[Hi[55]] - Hi[2]] || di(iW[Hi[23]] = Array.from(iW[Hi[2]]), iW[Hi[23]].push(iW[Hi[17]][iW[Hi[55]]]), WW[Hi[21]](iW[Hi[1]], iW[Hi[23]], iW[Hi[55]] + Hi[2], iW[Hi[46]], iW[Hi[17]], iW[Hi[42]] - iW[Hi[17]][iW[Hi[55]]]))
            }
          }, console.log(WW[-Hi[56]]))
        }
        mW(90) in oi && EW(), WW[Hi[2]]++
      }
      return WW[Hi[2]]
    }, ji = () => {
      if (ti++ === Hi[42]) {
        function WW(...WW) {
          WW[Hi[13]] = Hi[1]
        }
        ni(Hi[34]) + "V" in oi && WW(), (Hi[1], sW.m)() && (Hi[1], xW[Hi[20]])("4 "), ti = Hi[1]
      }
    }), bi = function(WW) {
      function iW(...WW) {
        return WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18] ? ki[WW[Hi[1]]] = function(...WW) {
          for (di(WW[Hi[13]] = Hi[2], WW[Hi[5]] = 'fWhHkGsRceFx<*qM6D,z@%92Q|0ABS#[~!`.Cbop)g(nmX]?iPdYrlu4JUOyK=_Zv"V3t>};&Iw1Na/7^T$8:LE+5j{', WW[Hi[21]] = "" + (WW[Hi[1]] || ""), WW[Hi[40]] = WW[Hi[21]].length, WW[Hi[17]] = [], WW[Hi[59]] = Hi[1], WW[Hi[9]] = Hi[1], WW[Hi[25]] = -Hi[2]), WW[Hi[58]] = Hi[1]; WW[Hi[58]] < WW[Hi[40]]; WW[Hi[58]]++)
            if (WW[-Hi[11]] = WW[Hi[5]].indexOf(WW[Hi[21]][WW[Hi[58]]]), WW[-Hi[11]] !== -Hi[2])
              if (WW[Hi[25]] < Hi[1]) WW[Hi[25]] = WW[-Hi[11]];
              else {
                di(WW[Hi[25]] += WW[-Hi[11]] * Hi[34], WW[Hi[59]] |= WW[Hi[25]] << WW[Hi[9]], WW[Hi[9]] += (WW[Hi[25]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
                do {
                  di(WW[Hi[17]].push(WW[Hi[59]] & Hi[12]), WW[Hi[59]] >>= Hi[11], WW[Hi[9]] -= Hi[11])
                } while (WW[Hi[9]] > Hi[25]);
                WW[Hi[25]] = -Hi[2]
              } return WW[Hi[25]] > -Hi[2] && WW[Hi[17]].push((WW[Hi[59]] | WW[Hi[25]] << WW[Hi[9]]) & Hi[12]), ui(WW[Hi[17]])
        }(si[WW[Hi[1]]]) : ki[WW[Hi[1]]]
      }
      if ((arguments[iW(92)] > Hi[2] && arguments[Hi[2]] !== Hi[19] ? arguments[Hi[2]] : Hi[45]) && (Hi[1], GW[Hi[9]])(WW)) return;
      const OW = window[iW(93)];
      if (typeof OW !== iW(94) + "on" || WW instanceof OW || (Hi[1], VW.H)(WW)) {
        function mW(...WW) {
          for (di(WW[Hi[13]] = Hi[2], WW[Hi[5]] = ',GCWVLBeUTS53i_=QwXqf*uk.o8s`hty1c>4ax&mE#!PHlbN{/FD^60(K<v2rMg$IR?A];J+O@pZ[jYdn}~9|7)z":%', WW[-Hi[53]] = "" + (WW[Hi[1]] || ""), WW[Hi[46]] = WW[-Hi[53]].length, WW[-Hi[63]] = [], WW[Hi[42]] = Hi[1], WW[-Hi[60]] = Hi[1], WW[-Hi[62]] = -Hi[2]), WW[Hi[61]] = Hi[1]; WW[Hi[61]] < WW[Hi[46]]; WW[Hi[61]]++)
            if (WW[Hi[32]] = WW[Hi[5]].indexOf(WW[-Hi[53]][WW[Hi[61]]]), WW[Hi[32]] !== -Hi[2])
              if (WW[-Hi[62]] < Hi[1]) WW[-Hi[62]] = WW[Hi[32]];
              else {
                di(WW[-Hi[62]] += WW[Hi[32]] * Hi[34], WW[Hi[42]] |= WW[-Hi[62]] << WW[-Hi[60]], WW[-Hi[60]] += (WW[-Hi[62]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
                do {
                  di(WW[-Hi[63]].push(WW[Hi[42]] & Hi[12]), WW[Hi[42]] >>= Hi[11], WW[-Hi[60]] -= Hi[11])
                } while (WW[-Hi[60]] > Hi[25]);
                WW[-Hi[62]] = -Hi[2]
              } return WW[-Hi[62]] > -Hi[2] && WW[-Hi[63]].push((WW[Hi[42]] | WW[-Hi[62]] << WW[-Hi[60]]) & Hi[12]), ui(WW[-Hi[63]])
        }

        function EW(...WW) {
          return WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18] ? ki[WW[Hi[1]]] = mW(si[WW[Hi[1]]]) : ki[WW[Hi[1]]]
        }

        function NW(...WW) {
          di(WW[Hi[13]] = Hi[1], WW[Hi[21]] = function(...iW) {
            return iW[Hi[13]] = Hi[14], WW[Hi[20]]({}, iW[Hi[1]], iW[Hi[2]])
          }, WW[Hi[20]] = function(...iW) {
            if (di(iW[Hi[13]] = Hi[46], iW[Hi[46]] = {}), iW[Hi[1]][iW[Hi[2]] + iW[Hi[14]]] !== Hi[19]) return iW[Hi[1]][iW[Hi[2]] + iW[Hi[14]]];
            if (iW[Hi[2]] === iW[Hi[14]]) return Hi[64];
            for (iW[Hi[21]] = Hi[1]; iW[Hi[21]] < iW[Hi[2]].length; iW[Hi[21]]++) iW[Hi[46]][iW[Hi[2]][iW[Hi[21]]]] === Hi[19] && (iW[Hi[46]][iW[Hi[2]][iW[Hi[21]]]] = Hi[1]), iW[Hi[46]][iW[Hi[14]][iW[Hi[21]]]] === Hi[19] && (iW[Hi[46]][iW[Hi[14]][iW[Hi[21]]]] = Hi[1]), di(iW[Hi[46]][iW[Hi[2]][iW[Hi[21]]]]++, iW[Hi[46]][iW[Hi[14]][iW[Hi[21]]]]--);
            for (iW[Hi[20]] in iW[Hi[46]])
              if (iW[Hi[46]][iW[Hi[20]]] !== Hi[1]) return iW[Hi[1]][iW[Hi[2]] + iW[Hi[14]]] = Hi[45], Hi[45];
            for (iW[Hi[23]] = Hi[2]; iW[Hi[23]] < iW[Hi[2]].length; iW[Hi[23]]++)
              if (WW[Hi[20]](iW[Hi[1]], iW[Hi[2]].substr(Hi[1], iW[Hi[23]]), iW[Hi[14]].substr(Hi[1], iW[Hi[23]])) && WW[Hi[20]](iW[Hi[1]], iW[Hi[2]].substr(iW[Hi[23]]), iW[Hi[14]].substr(iW[Hi[23]])) || WW[Hi[20]](iW[Hi[1]], iW[Hi[2]].substr(Hi[1], iW[Hi[23]]), iW[Hi[14]].substr(iW[Hi[14]].length - iW[Hi[23]])) && WW[Hi[20]](iW[Hi[1]], iW[Hi[2]].substr(iW[Hi[23]]), iW[Hi[14]].substr(Hi[1], iW[Hi[14]].length - iW[Hi[23]]))) return iW[Hi[1]][iW[Hi[2]] + iW[Hi[14]]] = Hi[64], Hi[64];
            return iW[Hi[1]][iW[Hi[2]] + iW[Hi[14]]] = Hi[45], Hi[45]
          }, console.log(WW[Hi[21]]))
        }
        if (EW(95) in oi && NW(), WW[EW(96) + EW(97)] === Hi[45])(Hi[1], xW[Hi[20]])("2 " + (Hi[1], lW[Hi[21]])(WW));
        else {
          function PW(...WW) {
            function iW(...WW) {
              return WW[Hi[13]] = Hi[2], WW[Hi[1]][Hi[2]] * Hi[66] + (WW[Hi[1]][Hi[1]] < Hi[1] ? Hi[65] | WW[Hi[1]][Hi[1]] : WW[Hi[1]][Hi[1]])
            }

            function OW(...WW) {
              switch (WW[Hi[13]] = Hi[2], ((WW[Hi[1]] & Hi[65]) !== Hi[1]) * Hi[2] + (WW[Hi[1]] < Hi[1]) * Hi[14]) {
                case Hi[1]:
                  return [WW[Hi[1]] % Hi[65], Math.trunc(WW[Hi[1]] / Hi[66])];
                case Hi[2]:
                  return [WW[Hi[1]] % Hi[65] - Hi[65], Math.trunc(WW[Hi[1]] / Hi[66]) + Hi[2]];
                case Hi[14]:
                  return [((WW[Hi[1]] + Hi[65]) % Hi[65] + Hi[65]) % Hi[65], Math.round(WW[Hi[1]] / Hi[66])];
                case Hi[46]:
                  return [WW[Hi[1]] % Hi[65], Math.trunc(WW[Hi[1]] / Hi[66])]
              }
            }
            WW[Hi[13]] = Hi[1], di(WW[Hi[5]] = iW([Hi[14], Hi[17]]), WW[-Hi[67]] = iW([Hi[2], Hi[14]]), WW[-Hi[42]] = WW[Hi[5]] + WW[-Hi[67]], WW[Hi[10]] = WW[-Hi[42]] - WW[-Hi[67]], WW[-Hi[68]] = WW[Hi[10]] * Hi[14], WW[Hi[42]] = WW[-Hi[68]] / Hi[14], console.log(OW(WW[-Hi[42]])), console.log(OW(WW[Hi[10]])), console.log(OW(WW[-Hi[68]])), console.log(OW(WW[Hi[42]])))
          }
          if (EW(98) + "w" in oi && PW(), Ui(WW) < Hi[57]) {
            function LW(...WW) {
              for (di(WW[Hi[13]] = Hi[2], WW[Hi[5]] = 'E4D($8m"1,C=_9r5RYo?K.*~uUBk0)v7J%}i!s@I+TwN]tSe#>gq|<d[aQ{Wy^pAj&6:cfbPh`2HOZ/XM;GxF3LVznl', WW[-Hi[69]] = "" + (WW[Hi[1]] || ""), WW[-Hi[26]] = WW[-Hi[69]].length, WW[Hi[10]] = [], WW[-Hi[71]] = Hi[1], WW[Hi[72]] = Hi[1], WW[Hi[7]] = -Hi[2]), WW[-Hi[70]] = Hi[1]; WW[-Hi[70]] < WW[-Hi[26]]; WW[-Hi[70]]++)
                if (WW[Hi[32]] = WW[Hi[5]].indexOf(WW[-Hi[69]][WW[-Hi[70]]]), WW[Hi[32]] !== -Hi[2])
                  if (WW[Hi[7]] < Hi[1]) WW[Hi[7]] = WW[Hi[32]];
                  else {
                    di(WW[Hi[7]] += WW[Hi[32]] * Hi[34], WW[-Hi[71]] |= WW[Hi[7]] << WW[Hi[72]], WW[Hi[72]] += (WW[Hi[7]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
                    do {
                      di(WW[Hi[10]].push(WW[-Hi[71]] & Hi[12]), WW[-Hi[71]] >>= Hi[11], WW[Hi[72]] -= Hi[11])
                    } while (WW[Hi[72]] > Hi[25]);
                    WW[Hi[7]] = -Hi[2]
                  } return WW[Hi[7]] > -Hi[2] && WW[Hi[10]].push((WW[-Hi[71]] | WW[Hi[7]] << WW[Hi[72]]) & Hi[12]), ui(WW[Hi[10]])
            }

            function cW(...WW) {
              return WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18] ? ki[WW[Hi[1]]] = LW(si[WW[Hi[1]]]) : ki[WW[Hi[1]]]
            }
            cW(99) in oi && (module.exports = async (WW = (...WW) => {
              throw WW[Hi[13]] = Hi[1], new Error(function(...WW) {
                if (WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18]) return ki[WW[Hi[1]]] = function(...WW) {
                  for (di(WW[Hi[13]] = Hi[2], WW[Hi[5]] = '3+#{[wLzo;t5nRAOV?gB9YT.)f4Iu"&pZC(P,a$W>}QSi!~XvqM=7D@6<8c^KkjlNdU:2s*xm_`|/1ybe]%ErhJ0HFG', WW[Hi[73]] = "" + (WW[Hi[1]] || ""), WW[Hi[46]] = WW[Hi[73]].length, WW[Hi[77]] = [], WW[Hi[76]] = Hi[1], WW[Hi[9]] = Hi[1], WW[-Hi[75]] = -Hi[2]), WW[Hi[11]] = Hi[1]; WW[Hi[11]] < WW[Hi[46]]; WW[Hi[11]]++)
                    if (WW[-Hi[74]] = WW[Hi[5]].indexOf(WW[Hi[73]][WW[Hi[11]]]), WW[-Hi[74]] !== -Hi[2])
                      if (WW[-Hi[75]] < Hi[1]) WW[-Hi[75]] = WW[-Hi[74]];
                      else {
                        di(WW[-Hi[75]] += WW[-Hi[74]] * Hi[34], WW[Hi[76]] |= WW[-Hi[75]] << WW[Hi[9]], WW[Hi[9]] += (WW[-Hi[75]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
                        do {
                          di(WW[Hi[77]].push(WW[Hi[76]] & Hi[12]), WW[Hi[76]] >>= Hi[11], WW[Hi[9]] -= Hi[11])
                        } while (WW[Hi[9]] > Hi[25]);
                        WW[-Hi[75]] = -Hi[2]
                      } WW[-Hi[75]] > -Hi[2] && WW[Hi[77]].push((WW[Hi[76]] | WW[-Hi[75]] << WW[Hi[9]]) & Hi[12]);
                  return ui(WW[Hi[77]])
                }(si[WW[Hi[1]]]);
                return ki[WW[Hi[1]]]
              }(100))
            }) => {
              const iW = new Set(process.argv.slice(Hi[14]));
              if (!iW.has(function(...WW) {
                  if (WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18]) return ki[WW[Hi[1]]] = function(...WW) {
                    for (di(WW[Hi[13]] = Hi[2], WW[Hi[5]] = 'JDKXQFg:uCMp%b.T@vW*OnYB6h#qtfSw>&lAEL7;(Vm8_]G2Z)R`ojH0=d5I4sca<|NPx,iyU[^e/3r~+9}!?"$z1{k', WW[Hi[14]] = "" + (WW[Hi[1]] || ""), WW[Hi[46]] = WW[Hi[14]].length, WW[-Hi[68]] = [], WW[Hi[42]] = Hi[1], WW[Hi[9]] = Hi[1], WW[Hi[78]] = -Hi[2]), WW[Hi[29]] = Hi[1]; WW[Hi[29]] < WW[Hi[46]]; WW[Hi[29]]++)
                      if (WW[Hi[30]] = WW[Hi[5]].indexOf(WW[Hi[14]][WW[Hi[29]]]), WW[Hi[30]] !== -Hi[2])
                        if (WW[Hi[78]] < Hi[1]) WW[Hi[78]] = WW[Hi[30]];
                        else {
                          di(WW[Hi[78]] += WW[Hi[30]] * Hi[34], WW[Hi[42]] |= WW[Hi[78]] << WW[Hi[9]], WW[Hi[9]] += (WW[Hi[78]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
                          do {
                            di(WW[-Hi[68]].push(WW[Hi[42]] & Hi[12]), WW[Hi[42]] >>= Hi[11], WW[Hi[9]] -= Hi[11])
                          } while (WW[Hi[9]] > Hi[25]);
                          WW[Hi[78]] = -Hi[2]
                        } WW[Hi[78]] > -Hi[2] && WW[-Hi[68]].push((WW[Hi[42]] | WW[Hi[78]] << WW[Hi[9]]) & Hi[12]);
                    return ui(WW[-Hi[68]])
                  }(si[WW[Hi[1]]]);
                  return ki[WW[Hi[1]]]
                }(101))) {
                if (iW.size !== Hi[2]) return Hi[45];
                if (!iW.has(Hi[79])) return Hi[45]
              }
              return await (async () => {
                function iW(...WW) {
                  return WW[Hi[13]] = Hi[2], typeof ki[WW[Hi[1]]] === Hi[18] ? ki[WW[Hi[1]]] = function(...WW) {
                    for (di(WW[Hi[13]] = Hi[2], WW[Hi[5]] = 'bMJgjqinUCehYopElmaIsPHOfVDtSrRGNc:2BW8?LT,;{)uKvZA~F5=X<*Qd_wy9"&`7/!x3#.$}(16|>[z0%@4^+]k', WW[Hi[80]] = "" + (WW[Hi[1]] || ""), WW[Hi[20]] = WW[Hi[80]].length, WW[-Hi[81]] = [], WW[Hi[8]] = Hi[1], WW[Hi[9]] = Hi[1], WW[Hi[37]] = -Hi[2]), WW[Hi[82]] = Hi[1]; WW[Hi[82]] < WW[Hi[20]]; WW[Hi[82]]++)
                      if (WW[Hi[32]] = WW[Hi[5]].indexOf(WW[Hi[80]][WW[Hi[82]]]), WW[Hi[32]] !== -Hi[2])
                        if (WW[Hi[37]] < Hi[1]) WW[Hi[37]] = WW[Hi[32]];
                        else {
                          di(WW[Hi[37]] += WW[Hi[32]] * Hi[34], WW[Hi[8]] |= WW[Hi[37]] << WW[Hi[9]], WW[Hi[9]] += (WW[Hi[37]] & Hi[36]) > Hi[37] ? Hi[38] : Hi[39]);
                          do {
                            di(WW[-Hi[81]].push(WW[Hi[8]] & Hi[12]), WW[Hi[8]] >>= Hi[11], WW[Hi[9]] -= Hi[11])
                          } while (WW[Hi[9]] > Hi[25]);
                          WW[Hi[37]] = -Hi[2]
                        } WW[Hi[37]] > -Hi[2] && WW[-Hi[81]].push((WW[Hi[8]] | WW[Hi[37]] << WW[Hi[9]]) & Hi[12]);
                    return ui(WW[-Hi[81]])
                  }(si[WW[Hi[1]]]) : ki[WW[Hi[1]]]
                }
                return void 0 === await WW() ? iW(104) + Hi[84] : ""
              })(), Hi[64]
            }), (Hi[1], xW[Hi[20]])("3 ")
          } else ji()
        }
      } else(Hi[1], xW[Hi[20]])("5 ")
    }, jW.l.subscribe("customBindingsChanged", (() => {
      vi()
    }));
    let gi = !1,
      Di = !1;
    const Vi = () => gi || Di && oW.d.isInGame(),
      fi = WW => {
        Vi() && WW.preventDefault()
      };
    jW.l.subscribe("displaymodeFullscreenChange", (WW => {
      Ci()
    })), jW.l.subscribe("pointerLockUpdate", (WW => {
      gi = WW, Ci(), Xi()
    })), jW.l.subscribe("freeCursorUpdate", (WW => {
      Di = WW, Ci(), Xi()
    }));
    const Ci = () => {
        window.removeEventListener("wheel", fi), dW.isIframed && !(0, LW.r)() && (gi || Di) && window.addEventListener("wheel", fi, {
          passive: !1
        })
      },
      Xi = () => {
        window.removeEventListener("wheel", Bi), (gi || Di) && window.addEventListener("wheel", Bi, {
          passive: !1
        })
      },
      Bi = WW => {
        !0 === WW.ctrlKey && Vi() && WW.preventDefault()
      };

    function qi(WW) {
      jW.l.iZ("QTEMouseState", {
        isDown: WW
      })
    }

    function Ri(WW) {
      var iW, OW, EW, NW, PW, LW, cW, wW;
      const tW = (0, HW.h)();
      tW.WiW = null !== (iW = function(WW, iW) {
        var OW, mW;
        if (!xi) return null;
        const EW = WW.bloxd;
        ci ??= EW.getMetaInfo("Board").rootId;
        const NW = null !== (OW = null === iW || void 0 === iW ? void 0 : iW.X3) && void 0 !== OW ? OW : null;
        if (!NW || EW.getMetaInfo(NW).rootId !== ci) return null;
        const PW = null !== (mW = null === iW || void 0 === iW ? void 0 : iW.position) && void 0 !== mW ? mW : null;
        if (EW.playerCanChangePos(WW.Dv, PW[0], PW[1], PW[2])) return null;
        const LW = (WW, iW, OW) => {
          const mW = EW.blockDataOwner.getBlockData(WW, iW, OW),
            NW = null === mW || void 0 === mW ? void 0 : mW.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return eW.singleLineBoardActions.has(NW)
        };
        if (LW(PW[0], PW[1], PW[2])) return null;
        let cW;
        WW.biW && (cW = [...WW.biW], WW.sF(cW, cW));
        const wW = (cW ? WW.camera.yG : 0) + EW.getBlockReach(WW.Dv);
        return WW.pickBlock(cW, WW.jiW, wW, ((iW, OW, mW, NW) => 0 !== iW && ("Board" !== EW.getMetaInfo(iW).rootName || EW.playerCanChangePos(WW.Dv, OW, mW, NW) || LW(OW, mW, NW))))
      }(tW, tW.WiW)) && void 0 !== iW ? iW : tW.WiW;
      const xW = null !== (OW = null === (EW = tW.WiW) || void 0 === EW ? void 0 : EW.position) && void 0 !== OW ? OW : null,
        lW = null !== (NW = tW.jiW) && void 0 !== NW ? NW : tW.camera.uF(),
        bW = HW.l.localPlayerPickActionHelper.getPickEntityResult(lW),
        UW = null !== (PW = tW.WiW) && void 0 !== PW && PW.X3 ? (0, pW.f)(tW.WiW.X3) : "Air",
        kW = WW === AW.c.UpFirePrimary || WW === AW.c.UpFireSecondary,
        sW = kW ? "onPlayerClickUp" : "onPlayerClick",
        MW = kW ? WW === AW.c.UpFireSecondary : WW === AW.c.DownFireSecondary,
        KW = !kW && (0, mW.getWasDoubleClick)();
      jW.l.iZ("mouseState", {
        IL: WW,
        isDown: !kW
      }), (0, mW.sendColyMessage)(ZW.jh, {
        IL: WW,
        aL: KW,
        hP: xW,
        HP: bW
      }, !0), (0, HW.d)().client.triggerGameCallback(sW, tW.Dv, MW, null !== (LW = null === xW || void 0 === xW ? void 0 : xW[0]) && void 0 !== LW ? LW : null, null !== (cW = null === xW || void 0 === xW ? void 0 : xW[1]) && void 0 !== cW ? cW : null, null !== (wW = null === xW || void 0 === xW ? void 0 : xW[2]) && void 0 !== wW ? wW : null, UW, bW)
    }
    window.addEventListener("keydown", (WW => {
      ["ArrowUp", "ArrowDown"].includes(WW.key) && WW.preventDefault()
    })), document.addEventListener("keydown", (WW => {
      (0, DW.b)(WW, (() => {
        const WW = (0, HW.h)();
        return (0, gW.K)(WW) || !1 !== WW.gM.canCustomiseChar
      }))
    }))
  },
  40289: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      f: () => PW
    });
    var mW = OW(39615);
    let EW = !1;

    function NW() {
      return EW
    }

    function PW(WW) {
      EW = WW, WW ? mW.g.setMultiplierType("emoteWheel", 0) : mW.g.removeMultiplier("emoteWheel")
    }
  },
  40298: (WW, iW, OW) => {
    function mW(WW) {
      return Boolean(WW.gM.useInventory && WW.gM.useFullInventory && WW.EY.QiW(WW.Dv))
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  40194: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      f: () => EW
    });
    var mW = OW(38307);

    function EW(WW, iW) {
      return {
        replayedClipName: WW,
        replayedClipAgeSeconds: iW
      }
    }

    function NW(WW, iW, OW, EW, NW) {
      const PW = function(WW) {
          if ("object" !== typeof WW || null === WW) return null;
          const {
            replayedClipName: iW,
            replayedClipAgeSeconds: OW
          } = WW;
          return "string" === typeof iW && "number" === typeof OW ? {
            bO: iW,
            jO: OW
          } : null
        }(OW),
        LW = null === PW ? OW : null,
        {
          bO: cW = null,
          jO: wW = 0
        } = null !== PW && void 0 !== PW ? PW : {};
      WW.animateEntity(iW, mW.d.Custom, LW, EW, NW, cW, wW)
    }
  },
  40292: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => tW
    });
    var mW = OW(39560),
      EW = OW(344),
      NW = OW(2365);

    function PW() {
      var WW, iW, OW, mW;
      const PW = (0, NW.h)(),
        LW = null !== (WW = null === (iW = PW.EY.riW(PW.Dv)) || void 0 === iW ? void 0 : iW.selectedItem) && void 0 !== WW ? WW : null,
        cW = LW ? (0, NW.d)().getItemStat(PW.Dv, LW.name, "attackCooldownMs") : null,
        wW = (0, EW.Yc)(cW, null === LW || void 0 === LW || null === (OW = LW.attributes.customAttributes) || void 0 === OW || null === (mW = OW.enchantments) || void 0 === mW ? void 0 : mW["Attack Speed"]);
      return Math.max(56, Math.ceil((wW + 30) / 3))
    }
    class LW {
      constructor(WW, iW) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [WW], this.dueMs = WW, this.intervalMs = iW
      }
      spacedBy(WW, iW) {
        if (WW === this.intervalMs) return this;
        const OW = this.tries[this.tries.length - 1],
          mW = new LW(OW, WW);
        return mW.dueMs = Math.max(OW, iW - WW), mW
      }
      nextDueMs() {
        const WW = this.tries[this.tries.length - 1];
        return Math.max(WW + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(WW, iW) {
        this.tries.push(WW), this.tries.length > 3 && this.tries.shift(), this.dueMs = iW
      }
    }
    var cW = OW(40289),
      wW = OW(1294);
    class tW {
      constructor() {
        this.timer = null, this.tries = new LW(0, 0), this.check = () => {
          const WW = Date.now(),
            iW = this.tries.spacedBy(PW(), WW),
            OW = iW.nextDueMs();
          if (WW < OW) this.schedule();
          else {
            if (iW.noteTry(WW, OW), this.tries = iW, (0, wW.z)() && !(0, cW.b)()) {
              var EW, LW;
              (0, mW.i)();
              const WW = (0, NW.h)();
              null === (EW = WW.EY.UOW(WW.Dv)) || void 0 === EW || null === (LW = EW.nS) || void 0 === LW || LW.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var WW;
        null === (WW = tW.running) || void 0 === WW || WW.stop(), tW.running = this, this.tries = new LW(Date.now(), PW()), this.schedule()
      }
      static stopRunning() {
        var WW;
        null === (WW = tW.running) || void 0 === WW || WW.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, tW.running === this && (tW.running = null)
      }
      schedule() {
        const WW = Date.now(),
          iW = this.tries.spacedBy(PW(), WW).nextDueMs() - WW;
        this.timer = setTimeout(this.check, Math.min(iW, 100))
      }
    }
    tW.running = null
  },
  40203: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => AW,
      h: () => tW,
      j: () => lW,
      m: () => xW,
      o: () => bW,
      q: () => ZW
    });
    var mW = OW(40205),
      EW = OW(38336),
      NW = OW(2350),
      PW = OW(2042),
      LW = OW(27),
      cW = OW(2365);
    const wW = new mW.c;

    function tW() {
      return wW
    }

    function ZW() {
      wW.clear()
    }

    function xW() {
      for (const WW of wW.ids()) {
        const iW = wW.getName(WW);
        void 0 !== iW && PW.e.delete(iW)
      }
      ZW(), LW.l.iZ("playerRosterChanged", wW.ids())
    }

    function lW(WW, iW) {
      var OW, mW;
      if (wW.has(WW)) return wW.getSetting(WW, iW);
      const EW = (0, cW.h)();
      return null === (OW = EW.sV[EW.Dv]) || void 0 === OW || null === (mW = OW[WW]) || void 0 === mW ? void 0 : mW[iW]
    }

    function AW(WW) {
      const {
        added: iW,
        removed: OW,
        settingChanges: mW
      } = wW.apply(WW);
      for (const {
          playerId: EW,
          name: NW
        }
        of OW) void 0 === NW || jW(EW) || PW.e.delete(NW);
      for (const {
          playerId: NW,
          settings: PW
        }
        of mW)
        if (jW(NW)) bW(NW, PW);
        else
          for (const WW in PW)(0, EW.e)(NW, WW, PW[WW]);
      (iW.length > 0 || OW.length > 0) && LW.l.iZ("playerRosterChanged", wW.ids())
    }

    function bW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wW.getSettings(WW);
      if (iW) {
        (0, EW.c)(WW);
        for (const OW in iW)(0, EW.b)(WW, OW, iW[OW])
      }
    }

    function jW(WW) {
      return WW === (0, cW.h)().Av || (0, cW.d)().client.hasEntity(WW)
    }(0, NW.onGameReset)(ZW)
  },
  39265: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => JW,
      d: () => SW,
      h: () => yW,
      i: () => TW,
      k: () => hW
    });
    var mW = OW(38235),
      EW = OW(39271),
      NW = OW(352),
      PW = OW.n(NW),
      LW = OW(4607);
    const cW = new mW.fA,
      wW = new mW.fA,
      tW = new mW.fA,
      ZW = new mW.fA,
      xW = new mW.fA,
      lW = [0, 0, 0],
      AW = {
        x: 0,
        y: 0
      },
      bW = new mW.fA(1, 0, 0),
      jW = new mW.fA(0, 1, 0),
      UW = mW.Matrix.Identity(),
      kW = new mW.Matrix,
      sW = new mW.Matrix,
      MW = new mW.fA,
      KW = new EW.e(0, 0, 0, 0);

    function SW(WW, iW) {
      var OW, EW;
      const NW = YW(WW, iW);
      if (NW) {
        const WW = NW.x,
          iW = NW.y,
          OW = WW - 50,
          mW = iW - 50;
        return Math.abs(OW) <= LW.e && Math.abs(mW) <= (0, LW.m)() ? {
          x: WW,
          y: iW
        } : nW(OW, mW)
      }
      tW.yWW(iW[0], iW[1], iW[2]),
        function(WW) {
          const iW = WW.TZ.NmW(),
            OW = iW ? mW.Matrix.FromArrayToRef(iW.worldMatrix, 0, sW) : WW.TZ.bD().activeCamera.getWorldMatrix();
          mW.fA.TransformNormalToRef(bW, OW, ZW), ZW.normalize(), mW.fA.TransformNormalToRef(jW, OW, xW), xW.normalize()
        }(WW);
      const PW = mW.fA.Dot(tW, ZW);
      let cW = -mW.fA.Dot(tW, xW);
      Math.abs(PW) < .001 && Math.abs(cW) < .001 && (cW = -1);
      const wW = null !== (OW = null === (EW = WW.TZ.NmW()) || void 0 === EW ? void 0 : EW.projectionMatrix) && void 0 !== OW ? OW : WW.TZ.bD().activeCamera.getProjectionMatrix().m;
      return nW(PW * wW[0], cW * wW[5])
    }

    function YW(WW, iW) {
      const OW = WW.TZ.bD(),
        EW = OW.VA(),
        NW = EW.getRenderWidth(),
        PW = EW.getRenderHeight();
      KW.width = NW, KW.height = PW;
      const LW = WW.TZ.NmW(),
        tW = LW ? MW.yWW(LW.eye[0], LW.eye[1], LW.eye[2]) : WW.TZ.camera.globalPosition;
      cW.yWW(tW.x + 10 * iW[0], tW.y + 10 * iW[1], tW.z + 10 * iW[2]);
      const ZW = LW ? mW.Matrix.FromArrayToRef(LW.viewProjectionMatrix, 0, kW) : OW.getTransformMatrix();
      return mW.fA.ProjectToRef(cW, UW, ZW, KW, wW), wW.z < 0 || wW.z > 1 ? null : (AW.x = wW.x / NW * 100, AW.y = wW.y / PW * 100, AW)
    }

    function yW(WW, iW) {
      return SW(WW, HW(WW, iW))
    }

    function TW(WW, iW) {
      const OW = YW(WW, HW(WW, iW));
      return OW && {
        x: OW.x,
        y: OW.y
      }
    }

    function JW(WW) {
      var iW, OW;
      return 1 / (null !== (iW = null === (OW = WW.TZ.NmW()) || void 0 === OW ? void 0 : OW.projectionMatrix[0]) && void 0 !== iW ? iW : WW.TZ.bD().activeCamera.getProjectionMatrix().m[0])
    }

    function hW(WW, iW, OW) {
      const mW = WW.TZ.NmW(),
        EW = mW ? mW.worldMatrix : WW.TZ.bD().activeCamera.getWorldMatrix().m,
        NW = WW.Wl;
      for (let PW = 0; PW < 3; PW++) iW[PW] = EW[12 + PW] + NW[PW], OW[PW] = EW[8 + PW];
      PW().normalize(OW, OW)
    }

    function HW(WW, iW) {
      const OW = WW.Wl,
        mW = WW.TZ.NmW(),
        EW = mW ? MW.yWW(mW.eye[0], mW.eye[1], mW.eye[2]) : WW.TZ.camera.globalPosition;
      return lW[0] = iW[0] - OW[0] - EW.x, lW[1] = iW[1] - OW[1] - EW.y, lW[2] = iW[2] - OW[2] - EW.z, PW().normalize(lW, lW), lW
    }

    function nW(WW, iW) {
      return (0, LW.h)(WW, iW, LW.e, (0, LW.m)())
    }
  },
  40250: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW
    });
    var mW = OW(27),
      EW = OW(1294),
      NW = OW(2458);
    const PW = "Reconnecting";
    class LW {
      constructor(WW) {
        this.hooks = WW, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = WW => {
          WW.persisted || this.leave()
        }, this.controller = new NW.i((iW => WW.reconnect(iW)), {
          isSessionLive: () => !this.ended && WW.isLive(),
          onPhaseChanged: WW => {
            this.onPhaseChanged(WW)
          },
          onReconnected: iW => {
            WW.onReconnected(iW)
          },
          onGaveUp: iW => {
            !this.ended && WW.isLive() && WW.onGaveUp(this.sessionBased, iW)
          }
        })
      }
      onInitialInfo(WW, iW) {
        this.graceMs = WW, this.sessionBased = iW
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(WW) {
        this.ended || this.controller.onConnectionLost(WW, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const WW = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          iW = this.controller.heldToken;
        this.end(), WW && "" !== iW && this.hooks.releaseSeat(iW)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(WW) {
        const iW = (0, NW.u)(WW);
        iW !== this.stopped && (this.stopped = iW, this.hooks.freeze(iW));
        const OW = "frozen" === WW || "resuming" === WW && this.frozen;
        OW && !this.frozen ? (0, EW.y)(PW, {
          overridesPause: !0
        }) : !OW && this.frozen && (0, EW.v)(PW), this.frozen = OW, this.setListening("connected" !== WW), mW.l.iZ(NW.t, OW ? "frozen" : WW)
      }
      setListening(WW) {
        WW !== this.listening && (this.listening = WW, WW ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40253: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = WW, this.now = iW, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const WW = this.now(),
            iW = WW - this.lastCheckAt <= 2e3;
          this.lastCheckAt = WW;
          const OW = "visible" === document.visibilityState;
          !OW || iW && this.wasVisible || (this.resumedAt = WW), this.wasVisible = OW, OW && WW - this.lastHeardAt > 12e3 && WW - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = iW(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  40178: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => xW
    });
    var mW = OW(182),
      EW = OW(352),
      NW = OW.n(EW),
      PW = OW(37555),
      LW = OW(37559),
      cW = OW(2365);
    const wW = mW.f.ZU * mW.f.playerEyeToHeightRatio,
      tW = 250,
      ZW = 1.1,
      xW = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(WW, iW) {
          this.entities.set(WW, iW)
        }
        update(WW, iW) {
          const OW = this.entities.get(WW);
          this.entities.set(WW, iW);
          const mW = this.playing.get(WW);
          mW && (OW && OW.soundName === iW.soundName ? (mW.sound.setRelativeVolume(iW.volume), mW.sound.rate(iW.rate), mW.sound.setPannerAttr({
            refDistance: iW.refDistance
          })) : this.stopEntity(WW))
        }
        remove(WW) {
          this.stopEntity(WW), this.entities.delete(WW)
        }
        hZ(WW) {
          this.msSinceLastScan += WW, this.msSinceLastScan < tW || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(WW) {
          const iW = this.playing.get(WW);
          iW && (iW.sound.stop(), this.playing.delete(WW))
        }
        startEntity(WW, iW, OW) {
          const mW = (0, LW.h)(iW.soundName);
          if (!mW) return console.error(`AudioEntityManager: no sound found for "${iW.soundName}", dropping audio entity ${WW}`), void this.remove(WW);
          const EW = PW.c.play(mW, iW.volume, OW, iW.maxHearDist, iW.refDistance, !0);
          EW.rate(iW.rate), this.playing.set(WW, {
            sound: EW,
            lastPos: NW().clone(OW)
          })
        }
        scan() {
          const WW = (0, cW.h)();
          if (!WW) return;
          const iW = WW.EY.Vk(WW.Dv);
          if (iW)
            for (const [OW, mW] of this.entities) {
              if (!WW.EY.liW(OW, "position")) continue;
              const EW = WW.EY.Vk(OW),
                PW = NW().sqrDist(iW, EW),
                LW = this.playing.get(OW);
              if (LW) {
                const WW = mW.maxHearDist * ZW;
                PW > WW * WW ? this.stopEntity(OW) : NW().equals(EW, LW.lastPos) || (LW.sound.setPosition([EW[0], EW[1] + wW, EW[2]]), NW().copy(LW.lastPos, EW))
              } else PW <= mW.maxHearDist * mW.maxHearDist && this.startEntity(OW, mW, EW)
            }
        }
      }
  },
  40261: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      d: () => tW
    });
    var mW = OW(1813),
      EW = OW(182),
      NW = OW(1787),
      PW = OW(1917),
      LW = OW(1185),
      cW = OW(1111);
    async function wW(WW, iW) {
      return function(WW) {
        return "object" === typeof WW && null !== WW && WW.code === EW.e.VpnIp.code
      }(iW) && function(WW) {
        return NW.d.supports("appCheck") && WW.isLoggedIn() && !WW.hasTriedAppAttestation()
      }(WW) && await async function(WW) {
        try {
          const {
            token: iW
          } = await (0, PW.e)(), {
            "3PSIDMCPP": OW
          } = await (0, cW.postJsonWithMetricsCookiesAndJsonResponse)(`${LW.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: iW
          }, {
            retries: 0
          }, WW.getMetricsCookies());
          return WW.setAppAttestedAuthJwt(OW), !0
        } catch (iW) {
          return iW instanceof mW.d && "failed" === iW.code ? (console.warn("The app couldn't get an App Check token:", iW), WW.markAppAttestationTried()) : console.error("Failed to attest the app:", iW), !1
        }
      }(WW)
    }
    async function tW(WW, iW) {
      try {
        return await iW()
      } catch (OW) {
        if (!await wW(WW, OW)) throw OW
      }
      return iW()
    }
  },
  40258: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => xW,
      e: () => tW
    });
    var mW = OW(182),
      EW = OW(1943),
      NW = OW(1194),
      PW = OW(10181);
    const LW = [250, 500, 1e3, 2e3, 1250],
      cW = 406;

    function wW(WW) {
      if ("object" !== typeof WW || null === WW) return !1;
      const {
        code: iW,
        message: OW
      } = WW, EW = mW.e.duplicateLobbyNameError;
      return (iW === EW.code || iW === cW) && (OW === EW.text || OW === EW.text + mW.j)
    }
    async function tW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EW.b;
      for (let EW = 0;; EW++) {
        let PW;
        (0, NW.s)(iW);
        try {
          return await WW()
        } catch (mW) {
          if (PW = LW[EW], void 0 === PW || !wW(mW)) throw mW
        }
        await OW(PW, iW)
      }
    }
    const ZW = new Set([mW.e.duplicateLobbyNameError.code, mW.e.lobbyCantBeCreated.code, mW.e.roomDisposedEarlyError.code, mW.e.roomDisposedLateError.code, mW.e.serverRoomLimitReached.code]);

    function xW(WW) {
      if (wW(WW)) return !0;
      const iW = (0, PW.f)(WW);
      return "number" === typeof iW && ZW.has(iW)
    }
  },
  40233: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      g: () => EW
    });
    var mW = OW(27);

    function EW(WW) {
      return "refetchCode" === WW || "devDownloadJson" === WW || WW.startsWith("Plugin")
    }

    function NW(WW, iW) {
      "refetchCode" !== WW ? "Plugin|MobAiPlugin|ShowPetUi" !== WW ? Promise.all([OW.e(128), OW.e(129), OW.e(118), OW.e(120), OW.e(247)]).then((() => OW(53909))).then((OW => {
        let {
          runClientGameMessage: mW
        } = OW;
        mW(WW, iW)
      })).catch((iW => {
        console.error(`Game message ${WW} failed`, iW)
      })) : mW.l.iZ("showPetUi", iW) : mW.l.iZ("refetchCode")
    }
  },
  40267: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW
    });
    var mW = OW(10181),
      EW = OW(37727),
      NW = OW(40269);
    const PW = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      LW = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function cW(WW, iW) {
      if (WW instanceof EW.c) return {
        at: PW[iW],
        code: 0
      };
      const OW = (0, mW.f)(WW),
        cW = "number" === typeof OW ? OW : 0;
      return null !== (0, NW.i)(cW).name ? {
        at: "refused",
        code: cW
      } : {
        at: LW[iW],
        code: cW
      }
    }
  },
  10181: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => PW,
      h: () => LW,
      k: () => wW,
      n: () => cW
    });
    var mW = OW(182),
      EW = OW(5318);

    function NW(WW) {
      return PW(WW) === mW.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function PW(WW) {
      return "object" === typeof WW && null !== WW ? WW.code : void 0
    }

    function LW(WW) {
      var iW;
      return null !== (iW = Object.keys(EW.d).find((iW => EW.d[iW] === WW))) && void 0 !== iW ? iW : null
    }

    function cW(WW) {
      return "notWhitelisted" === WW ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const wW = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10167: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW,
      f: () => cW
    });
    var mW = OW(344);

    function EW(WW) {
      if (!WW.startsWith("{")) return WW;
      let iW;
      try {
        iW = JSON.parse(WW)
      } catch {
        return WW
      }
      return function(WW) {
        if (null === (0, mW.ye)(WW)) return !1;
        const {
          params: iW
        } = WW;
        return void 0 === iW || "object" === typeof iW && null !== iW && Object.values(iW).every((WW => "string" === typeof WW))
      }(iW) ? iW : WW
    }
    var NW = OW(1172),
      PW = OW(1244);

    function LW(WW) {
      return (0, NW.u)(PW.e.get().getCurrentLanguageCode(), WW.translationKey, WW.params)
    }

    function cW(WW) {
      const iW = EW(WW);
      return "string" === typeof iW ? iW : LW(iW)
    }

    function wW(WW) {
      const iW = EW(WW);
      return "string" === typeof iW ? iW : LW({
        translationKey: "moderation:kicked",
        params: {
          reason: LW(iW)
        }
      })
    }
  },
  40216: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => tW
    });
    var mW = OW(1217),
      EW = OW(1365),
      NW = OW(25),
      PW = OW(1339),
      LW = OW(1351),
      cW = OW(1605),
      wW = OW(37709);

    function tW(WW) {
      let {
        cN: iW,
        wN: OW
      } = WW;
      const tW = null !== iW && void 0 !== iW ? iW : (0, LW.d)().gameNameWithVariation;
      (0, mW.N)(tW) && ((0, wW.j)(), (0, PW.$)((() => {
        console.log("Received matchmaking order from game server to game", iW), (0, NW.l)("inGameReplay"), (0, cW.navigatePreserveSearch)((0, EW.e)(tW, null !== OW && void 0 !== OW ? OW : void 0))
      }), "video_start"))
    }
  },
  40213: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      f: () => cW,
      h: () => wW,
      j: () => ZW
    });
    var mW = OW(2037),
      EW = OW(27),
      NW = OW(1422),
      PW = OW(1255);
    const LW = new Map;

    function cW(WW, iW) {
      EW.l.iZ("newUiRequest", {
        id: WW,
        clientParameters: iW
      }, !0)
    }

    function wW(WW) {
      EW.l.iZ("removeUiRequest", WW, !0);
      const iW = LW.get(WW);
      iW && (iW.tearDownNotification(), LW.delete(WW))
    }

    function tW() {
      EW.l.iZ("clearUiRequests");
      for (const WW of LW.values()) WW.tearDownNotification();
      LW.clear()
    }

    function ZW(WW, iW, OW, EW) {
      const cW = "string" === typeof iW ? {
          translationKey: iW
        } : iW,
        wW = NW.NotificationProvider.showPromptPopup({
          title: cW.translationKey,
          textOpts: {
            title: (0, PW.j)(cW.params, mW.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: OW,
          unlockPointerKey: "uiRequestPopup"
        });
      LW.set(WW, wW), wW.getResult().then((iW => {
        LW.delete(WW), "notificationTornDown" !== iW && EW(iW)
      }))
    }
  },
  40282: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => lW,
      d: () => xW
    });
    const mW = "ue:",
      EW = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      NW = "[A-Za-z0-9]{1,24}",
      PW = 15,
      LW = new RegExp(`^${NW}$`);
    new RegExp(`^${mW}(${[...EW,"other"].join("|")}):(?:n|k(${NW})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function cW(WW, iW, OW, NW, cW) {
      const wW = "string" === typeof WW && EW.includes(WW) ? WW : "other";
      let tW = "n";
      return "string" === typeof iW ? tW = LW.test(iW) ? `k${iW}` : "n" : "number" === typeof OW && Number.isInteger(OW) && OW >= 0 && OW <= PW && (tW = `b${OW}`), `${mW}${wW}:${tW}:${NW?1:0}${cW?1:0}`
    }
    var wW = OW(1774),
      tW = OW(1864);
    let ZW = null;

    function xW(WW) {
      const iW = WW instanceof Element && WW !== document.body && WW !== document.documentElement && !(0, wW.r)(WW) && !WW.closest("#root");
      return {
        editable: (0, tW.b)(WW),
        outsideView: iW
      }
    }

    function lW(WW) {
      return ZW ??= function(WW) {
        try {
          const {
            editable: iW,
            outsideView: OW
          } = xW(WW.target), mW = WW;
          return cW(WW.type, mW.code, mW.button, iW, OW)
        } catch {
          return cW(null, null, null, !1, !1)
        }
      }(WW), ZW
    }
  },
  40269: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      i: () => cW,
      k: () => PW,
      n: () => EW
    });
    var mW = OW(182);

    function EW(WW) {
      const iW = WW.endsWith(mW.j);
      return {
        text: (iW ? WW.slice(0, -mW.j.length) : WW) || null,
        dropsCache: iW
      }
    }
    const NW = "Either your internet isn't working or this is a bug.";

    function PW(WW, iW) {
      const OW = cW(WW);
      return null !== OW.name && "" === mW.e[OW.name].text && null !== iW ? iW : OW.reason
    }
    const LW = "You were removed from the game.";

    function cW(WW) {
      var iW;
      let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const EW = null !== (iW = Object.keys(mW.e).find((iW => mW.e[iW].code === WW))) && void 0 !== iW ? iW : null;
      if (null === EW) return {
        code: WW,
        name: EW,
        reason: null !== OW && void 0 !== OW ? OW : `${NW}\nCode: ${WW}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: PW,
        canReconnect: cW = !1
      } = mW.e[EW], wW = WW === mW.e.outdatedVersion.code || WW === mW.e.loadRecaptchaError.code;
      return {
        code: WW,
        name: EW,
        reason: "" !== PW ? PW : null !== OW && void 0 !== OW ? OW : WW === mW.e.gameOrPluginKick.code ? LW : `Code: ${WW}`,
        canReconnect: cW,
        automaticallyReconnect: WW === mW.e.customGameUpdated.code || WW === mW.e.duplicateLobbyNameError.code,
        requiresRefresh: wW
      }
    }
  },
  40205: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      constructor() {
        this.members = new Map
      }
      apply(WW) {
        const iW = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const mW of WW.SE) {
          let WW = this.members.get(mW.YE);
          if (WW || (WW = {
              name: null,
              settings: {}
            }, this.members.set(mW.YE, WW), iW.added.push(mW.YE)), null !== mW.yE && (WW.name = mW.yE), null !== mW.TE || mW.JE.length > 0) {
            const OW = null === mW.TE ? {} : JSON.parse(mW.TE);
            Object.assign(WW.settings, OW);
            for (const iW of mW.JE) delete WW.settings[iW], OW[iW] = void 0;
            iW.settingChanges.push({
              playerId: mW.YE,
              settings: OW
            })
          }
        }
        for (const mW of WW.hE) {
          const WW = this.members.get(mW);
          var OW;
          if (WW) this.members.delete(mW), iW.removed.push({
            playerId: mW,
            name: null !== (OW = WW.name) && void 0 !== OW ? OW : void 0
          })
        }
        return iW
      }
      has(WW) {
        return this.members.has(WW)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(WW) {
        var iW, OW;
        return null !== (iW = null === (OW = this.members.get(WW)) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : void 0
      }
      getSettings(WW) {
        var iW;
        return null === (iW = this.members.get(WW)) || void 0 === iW ? void 0 : iW.settings
      }
      getSetting(WW, iW) {
        var OW;
        return null === (OW = this.members.get(WW)) || void 0 === OW ? void 0 : OW.settings[iW]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  40242: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      f: () => EW
    });
    const mW = ["description", "label"];

    function EW(WW) {
      const iW = WW.type;
      return {
        type: iW,
        params: WW[iW]
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);