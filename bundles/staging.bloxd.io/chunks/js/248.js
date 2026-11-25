export const id = 248;
export const ids = [248];
export const modules = {
  39519: (GG, bG, ZG) => {
    function wG(GG) {
      return !(!GG.lobbyLeaderboardInfo && !GG.lobbyManage)
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  39423: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(19),
      SG = ZG(1923);

    function LG(GG) {
      let {
        taskId: bG,
        progress: ZG
      } = GG;
      const wG = SG.c.get("_tasks");
      null !== wG && void 0 !== wG && wG[bG] && SG.c.apply({
        _tasks: {
          ...wG,
          [bG]: {
            ...wG[bG],
            progress: ZG
          }
        }
      })
    }
    wG.l.subscribe("clientTaskProgress", (GG => {
      LG(GG)
    }))
  },
  39350: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => GZ,
      d: () => xb,
      e: () => Bb
    });
    var wG = ZG(3683),
      SG = ZG(140),
      LG = ZG(188),
      yG = ZG(612),
      kG = ZG(29),
      UG = ZG(2751),
      YG = ZG(3766),
      VG = ZG(3746),
      pG = ZG(1177);
    const fG = new WeakMap;
    class QG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          sYG: !0
        };
        this.callbacks = bG, this.options = ZG, this.eZG = void 0, this.sessionId = void 0, this.Zm = [], this.qYG = !1, this.pK = !1, this.nYG = void 0, this.OW = 0, this.nSG = 0, this.gYG = (GG, bG) => {
          if (this.pK) return;
          const ZG = Number(GG);
          this.qYG ? this.eYG(ZG, bG) : this.Zm.push({
            id: ZG,
            payload: bG
          })
        }, this.dispose = () => {
          this.pK || (this.pK = !0, fG.delete(this), this.Zm.length = 0, this.nYG())
        }, this.eZG = GG, this.sessionId = GG.sessionId, fG.set(this, []), this.nYG = this.RYG()
      }
      TYG(GG) {
        this.nYG(), this.eZG = GG, this.sessionId = GG.sessionId, this.OW = 0, this.nSG = 0, this.nYG = this.RYG()
      }
      get jW() {
        return this.nSG
      }
      RYG() {
        const GG = this.eZG.OJ("*", this.gYG);
        return this.options.sYG && this.eZG.xJ(this.dispose), GG
      }
      eYG(GG, bG) {
        try {
          (0, YG.ac)(GG) && (bG = (0, YG.b)(GG, VG.VK.from(bG)));
          const ZG = fG.get(this)[GG];
          if ("function" !== typeof ZG) {
            if (this.callbacks.HYG) return void this.callbacks.HYG(GG, bG);
            throw new Error(`No onMessage handler registered for message id ${GG}`)
          }
          ZG(bG)
        } catch (ZG) {
          this.callbacks.tYG(`Error in onMessage ${GG} with payload ${JSON.stringify(bG)}`, ZG)
        } finally {
          this.OW++
        }
      }
      DYG() {
        for (const {
            id: GG,
            payload: bG
          }
          of this.Zm) {
          if (this.pK) break;
          this.eYG(GG, bG)
        }
        this.Zm.length = 0
      }
      Tu() {
        return this.pK
      }
      NYG() {
        if (this.qYG || this.pK) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          OJ: (GG, bG) => {
            if (this.qYG || this.pK) throw new Error("Trying to call onMessage after registration finished");
            this.OJ(GG, bG)
          },
          finishRegistration: () => {
            if (this.pK) throw new Error("Cannot finish message registration after disposal");
            this.qYG = !0, this.DYG()
          }
        }
      }
      OJ(GG, bG) {
        var ZG, wG;
        null === (ZG = (wG = this.callbacks).OYG) || void 0 === ZG || ZG.call(wG);
        const SG = fG.get(this);
        for (; GG > SG.length;) SG[SG.length] = null;
        SG[GG] = bG
      }
      send(GG, bG) {
        this.xYG(), (0, pG.E)(bG) ? this.eZG.Im(GG, bG) : this.eZG.send(GG, bG)
      }
      xYG() {
        var GG, bG;
        (this.nSG++, 5 === KG++) && (null === (GG = (bG = this.callbacks).OYG) || void 0 === GG || GG.call(bG), KG = 0)
      }
      KJ() {
        this.dispose(), this.eZG.KJ()
      }
      leave() {
        this.dispose(), this.eZG.leave()
      }
    }
    let KG = 0;
    var hG = ZG(3702);
    class dG extends QG {
      constructor(GG) {
        super(GG, {
          OYG: () => {
            (0, kG.p)(!0) && (0, wG.cW)()
          },
          tYG: (GG, bG) => {
            var ZG;
            null === (ZG = (0, UG.i)()) || void 0 === ZG || ZG.Jh(GG, bG)
          }
        }, {
          sYG: !1
        }), (0, hG.g)(GG)
      }
      Qm(GG, bG) {
        return !!(0, hG.n)((0, hG.d)(), this.eZG, GG, bG) && (this.xYG(), !0)
      }
      TYG(GG) {
        this.BYG(), super.TYG(GG), (0, hG.g)(GG)
      }
      KJ() {
        super.KJ(), this.BYG()
      }
      BYG() {
        this.eZG.dJ.GK.KF = void 0
      }
    }
    var JG = ZG(19),
      rG = ZG(1923),
      zG = ZG(1702),
      EG = ZG(36801),
      oG = ZG(39353),
      XG = ZG(38447),
      uG = ZG(38207),
      iG = ZG(604),
      CG = ZG(38820);

    function WG(GG, bG, ZG) {
      const wG = function(GG) {
          const bG = new Int32Array(GG.length * CG.g);
          return GG.forEach(((GG, ZG) => {
            const wG = ZG * CG.g;
            if (4 === GG.length) {
              const [ZG, SG, LG, yG] = GG;
              bG.set([ZG, SG, LG, ZG, SG, LG, yG], wG)
            } else {
              const [ZG, SG, LG, yG, kG, UG, YG] = GG;
              bG.set([ZG, LG, kG, SG, yG, UG, YG], wG)
            }
          })), bG
        }(ZG),
        SG = (bG, ZG, wG, SG) => {
          GG.setBlockNoMulti(bG, ZG, wG, SG, !0)
        };
      GG.client.gameRecorder.isCapturing() ? (0, CG.pb)(wG, (0, CG.nb)(wG), SG) : GG.wf.Op.rC(wG, {
        iH: SG,
        isHookId: bG => GG.blockChangeHasHooks(bG),
        watched: () => function(GG, bG, ZG) {
          const wG = [],
            SG = (GG, bG, ZG) => {
              wG.push(GG, bG, ZG)
            },
            LG = new Set;
          for (let yG = 0; yG < ZG.length; yG += CG.g)
            for (let bG = (0, iG.U)(ZG[yG]); bG <= (0, iG.U)(ZG[yG + 3]); bG++)
              for (let wG = (0, iG.U)(ZG[yG + 1]); wG <= (0, iG.U)(ZG[yG + 4]); wG++)
                for (let kG = (0, iG.U)(ZG[yG + 2]); kG <= (0, iG.U)(ZG[yG + 5]); kG++) {
                  const ZG = `${bG}|${wG}|${kG}`;
                  LG.has(ZG) || (LG.add(ZG), GG.blockDataOwner.forEachDataCell(bG, wG, kG, SG))
                }
          return bG.forEachCell(SG), Int32Array.from(wG)
        }(GG, bG, wG)
      }), GG.wf.HGG()
    }

    function mG(GG) {
      GG.vZG = new Set, GG.lZG = new Set, GG.aZG = new Set, GG.jZG = new Set, GG.cZG = [], GG.PZG = [], GG.aT = new Set, GG.PS = [], GG.lT = []
    }
    class IG {
      constructor(GG) {
        this.wf = GG
      }
      register(GG) {
        const bG = this.wf,
          ZG = (0, UG.e)();
        GG.OJ(YG.Q, (GG => {
          bG.Op.vZG.add(GG), bG.Op.lZG.delete(GG)
        })), GG.OJ(YG.V, (GG => {
          bG.Op.lZG.add(GG), bG.Op.vZG.delete(GG)
        })), GG.OJ(YG.$d, (GG => {
          bG.Op.lZG.delete(GG), bG.Op.vZG.delete(GG)
        })), GG.OJ(YG.U, (GG => {
          bG.Op.aZG.add(GG), bG.Op.jZG.delete(GG)
        })), GG.OJ(YG.Z, (GG => {
          bG.Op.jZG.add(GG), bG.Op.aZG.delete(GG)
        })), GG.OJ(YG.de, (GG => {
          bG.Op.jZG.delete(GG), bG.Op.aZG.delete(GG)
        })), GG.OJ(YG.R, (GG => {
          (0, pG.gb)(GG, bG.Op.PZG), (0, pG.gb)(GG, bG.Op.cZG), bG.Op.cZG.push(GG)
        })), GG.OJ(YG.W, (GG => {
          (0, pG.gb)(GG, bG.Op.cZG), (0, pG.gb)(GG, bG.Op.PZG), bG.Op.PZG.push(GG)
        })), GG.OJ(YG.ae, (GG => {
          (0, pG.gb)(GG, bG.Op.cZG), (0, pG.gb)(GG, bG.Op.PZG)
        })), GG.OJ(YG.nf, (GG => {
          let {
            LS: ZG,
            yS: wG
          } = GG;
          wG ? bG.Op.aT.delete(ZG) : bG.Op.aT.add(ZG)
        })), GG.OJ(YG.lf, (GG => {
          let {
            PS: wG,
            MS: SG
          } = GG;
          ZG.updateWalkThroughRect(bG.sA, wG, SG)
        })), (0, wG.onGameResetOnce)((() => {
          mG(bG.Op)
        })), GG.OJ(YG.Wb, (GG => {
          XG.b.applyServerUpdate(GG)
        })), GG.OJ(YG.fb, (GG => {
          ZG.applyServerBlocks((() => {
            ! function(GG, bG) {
              for (const {
                  rG: ZG,
                  zG: wG
                }
                of bG) {
                const bG = uG.e[wG];
                if (bG) {
                  const {
                    compX: wG,
                    compY: SG,
                    compZ: LG,
                    mainMultiblock: yG
                  } = bG;
                  GG.HI(ZG[0] - wG, ZG[1] - SG, ZG[2] - LG, yG)
                }
              }
              for (const {
                  rG: ZG,
                  zG: wG,
                  EG: SG
                }
                of bG) GG.setBlockNoMulti(ZG[0], ZG[1], ZG[2], wG, !0), GG.blockDataOwner.setBlockData(ZG[0], ZG[1], ZG[2], null === SG ? void 0 : JSON.parse(SG)), GG.blockAdded(ZG[0], ZG[1], ZG[2], wG)
            }(ZG, GG)
          })), JG.l.xh("changeBlockFail", GG), ZG.client.triggerGameCallback("onChangeBlockFail", GG), JG.l.xh("EditBoard", {
            pos: null
          }), JG.l.xh("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), GG.OJ(YG.xb, (GG => {
          ZG.applyServerBlocks((() => {
            WG(ZG, XG.b, GG)
          }))
        })), GG.OJ(YG.ff, (GG => {
          let {
            oG: bG,
            XG: wG
          } = GG;
          if (ZG.zD(bG[0], bG[1], bG[2])) {
            const GG = (0, UG.e)().qJ(bG[0], bG[1], bG[2]);
            (0, UG.e)().updateMailboxContents(bG[0], bG[1], bG[2], GG, wG)
          }
        })), GG.OJ(YG.ye, (GG => {
          let {
            pos: bG,
            data: wG
          } = GG;
          ZG.blockDataOwner.setBlockData(bG[0], bG[1], bG[2], wG), ZG.blockAdded(bG[0], bG[1], bG[2], ZG.qJ(bG[0], bG[1], bG[2]))
        }))
      }
    }
    var FG = ZG(37500),
      vG = ZG(37122),
      aG = ZG(38474),
      cG = ZG(38323),
      lG = ZG(38490);
    class jG {
      constructor(GG, bG) {
        this.wf = GG, this.setUpQueuedEntity = bG
      }
      register(GG) {
        const bG = this.wf,
          ZG = (0, UG.e)();
        GG.OJ(YG.O, (GG => {
          let {
            XZ: bG,
            uZ: ZG
          } = GG;
          this.setUpQueuedEntity(bG), bG = (0, vG.d)(bG), (0, UG.e)().client.gameRecorder.recordBulletShot(bG, ZG), JG.l.xh(`bulletShot|${bG}`, {
            bulletDirections: ZG
          })
        })), GG.OJ(YG._b, (GG => {
          let {
            rZ: bG,
            zZ: ZG
          } = GG;
          JG.l.xh("damagedByOtherPlayer", {
            rZ: bG,
            direction: ZG
          }, !0)
        })), GG.OJ(YG.sd, (GG => {
          JG.l.xh("playerKilled", GG, !0), (0, UG.e)().client.gameRecorder.recordPlayerKilled(GG.deadEId, GG.killerEId, GG.withItem, GG.killstreak)
        })), GG.OJ(YG.Eb, (GG => {
          JG.l.xh("customKillfeed", GG, !0), (0, UG.e)().client.gameRecorder.recordCustomKillfeed(GG.killer, GG.victim, GG.withItem)
        })), GG.OJ(YG.Ed, (GG => {
          let {
            gG: ZG,
            eG: wG
          } = GG;
          this.setUpQueuedEntity(ZG);
          const SG = bG.Hr.YZG(ZG);
          null !== SG && void 0 !== SG && SG.isGun() && SG.reload(Date.now(), wG)
        })), GG.OJ(YG.te, (GG => {
          let {
            eb: ZG,
            WG: wG
          } = GG;
          const SG = wG ? (0, lG.f)(bG, wG) : void 0;
          JG.l.xh("sendHitmarker", {
            eb: ZG,
            screenPos: SG
          }, !0)
        })), GG.OJ(YG.Fc, (GG => {
          let {
            uG: wG,
            iG: SG,
            mG: LG,
            IG: yG,
            FG: kG,
            vG: UG,
            aG: YG
          } = GG;
          this.setUpQueuedEntity(wG), wG = (0, vG.d)(wG);
          const VG = bG.Hr.ZZG(wG);
          if (VG && (VG.lastHurtTime = performance.now()), (0, aG.playRigHurt)(bG, wG, UG), JG.l.xh("lifeformHurt", {
              eId: wG,
              aG: YG
            }), SG) {
            const GG = (0, lG.f)(bG, SG.WG);
            JG.l.xh("yourAttackHit", {
              eb: yG,
              screenPos: GG,
              hitSelf: wG === bG.sA
            })
          }
          wG === bG.sA && (ZG.shakePlayerCamera(wG, kG / 40, 200), JG.l.xh("closeShopOnDamaged", null), JG.l.xh("damagedByOtherPlayer", {
            rZ: null,
            direction: UG,
            FG: kG
          }, !0));
          const pG = bG.Hr.HJ(wG);
          if (pG && (LG || yG)) {
            const GG = [pG[0], pG[1] + 1, pG[2]];
            LG && (0, cG.h)(bG, cG.u, GG, 15), yG && (0, cG.h)(bG, cG.j, GG, 10)
          }
        })), GG.OJ(YG.Bc, (GG => {
          let {
            Cb: ZG,
            Wb: wG,
            Ib: SG
          } = GG;
          (0, FG.d)(bG).setHealthFrac((0, vG.d)(ZG), SG), JG.l.xh("lifeformHealthChanged", {
            eId: (0, vG.d)(ZG),
            Wb: wG,
            Ib: SG
          })
        })), GG.OJ(YG.L, (GG => {
          let {
            KL: ZG,
            hL: wG
          } = GG;
          (0, UG.e)().playerAttacked(bG.sA, ZG, wG)
        })), GG.OJ(YG.jb, (() => {
          const GG = bG.Hr.YZG(bG.sA);
          null !== GG && void 0 !== GG && GG.isChargeable() && GG.finishCharging(!1, Date.now())
        })), GG.OJ(YG.Jb, (GG => {
          let {
            cG: bG,
            lG: ZG,
            jG: wG,
            Rb: SG,
            Tb: LG,
            Hb: yG
          } = GG;
          bG = (0, vG.d)(bG), (0, UG.e)().client.updateEffect(bG, ZG, {
            displayName: wG,
            icon: SG,
            duration: LG,
            level: yG
          })
        })), GG.OJ(YG.Id, (GG => {
          let {
            cG: bG,
            lG: ZG
          } = GG;
          bG = (0, vG.d)(bG), (0, UG.e)().client.removeEffect(bG, ZG)
        })), GG.OJ(YG.af, (GG => {
          JG.l.xh("ttbEffectMultiplier", GG)
        }))
      }
    }
    var PG = ZG(39381),
      MG = ZG(37491),
      AG = ZG(4241),
      sG = ZG(38503),
      qG = ZG(37102),
      nG = ZG(37105),
      gG = ZG(37422),
      eG = ZG(37587),
      RG = ZG(38511),
      TG = ZG(39389);
    class HG {
      constructor(GG, bG) {
        this.wf = GG, this.setUpQueuedEntity = bG
      }
      register(GG) {
        const bG = this.wf,
          ZG = (0, UG.e)();
        GG.OJ(YG.Sc, (GG => {
          let {
            eId: ZG,
            settings: wG
          } = GG;
          (0, eG.f)(ZG);
          for (const bG in wG)(0, eG.b)(ZG, bG, wG[bG]);
          if ("canSee" in wG && bG.Hr.SbG(ZG, "hidingMeshManager")) {
            const GG = bG.Hr.getState(ZG, "hidingMeshManager");
            GG.canSee = (0, RG.d)("canSee", wG.canSee), GG._forceUpdate = !0
          }
        })), GG.OJ(YG.C, (GG => {
          let {
            qw: ZG,
            nw: wG,
            animationScript: SG,
            gw: LG,
            ew: yG,
            Rw: kG,
            Tw: YG
          } = GG;
          ZG = (0, vG.d)(ZG);
          const VG = null === SG && null !== kG ? (0, PG.f)(kG, YG) : SG;
          (0, UG.e)().client.gameRecorder.recordAnimateEntity(ZG, wG, VG, LG, yG), (0, FG.d)(bG).animations.animateEntity(ZG, wG, SG, LG, yG, kG, YG), null !== SG || ZG === bG.sA && wG === MG.h.Emote && (0, UG.e)().client.cameraController.endTemporaryThirdPerson()
        })), GG.OJ(YG.qe, (GG => {
          (0, TG.d)(GG)
        })), GG.OJ(YG.qd, (GG => {
          for (const bG of GG)(0, sG.B)(bG);
          JG.l.xh("playerCosmeticsUpdated", GG, !0)
        })), GG.OJ(YG.J, (GG => {
          for (const ZG of GG)(0, gG.i)(bG, ZG)
        })), GG.OJ(YG.Wc, (GG => {
          (0, cG.i)(bG, (0, pG.r)(GG))
        })), GG.OJ(YG._c, (GG => {
          AG.h[GG.oL] ? (0, cG.i)(bG, {
            ...AG.h[GG.oL],
            pos1: GG.pos1,
            pos2: GG.pos2
          }) : console.error(`Unknown preset id: ${GG.oL}`)
        })), GG.OJ(YG.pd, (GG => {
          var bG, ZG;
          let {
            GG: wG,
            bG: SG,
            ZG: LG,
            wG: yG
          } = GG, {
            LG: kG,
            yG: YG
          } = null !== yG && void 0 !== yG ? yG : {};
          const {
            SG: VG
          } = null !== yG && void 0 !== yG ? yG : {};
          kG = null !== (bG = kG) && void 0 !== bG ? bG : void 0, YG = null !== (ZG = YG) && void 0 !== ZG ? ZG : void 0, "string" === typeof VG && this.setUpQueuedEntity(VG), (0, UG.e)().client.gameRecorder.recordPlaySound(wG, SG, LG, yG), qG.c.play((0, nG.g)(wG), SG, VG, kG, YG).rate(LG)
        })), GG.OJ(YG.hf, (GG => {
          for (const bG in GG) {
            const wG = GG[bG];
            for (const GG in wG) ZG.client.meshCreator.handleParticleSystemUpdate(bG, GG, wG[GG])
          }
        }))
      }
    }
    var tG = ZG(38192),
      DG = ZG(38161);
    class NG {
      constructor(GG) {
        this.wf = GG
      }
      register(GG) {
        const bG = this.wf,
          ZG = (0, UG.e)();

        function wG() {
          return bG.Hr.gbG(bG.sA)
        }
        GG.OJ(YG.kc, (GG => {
          let {
            XS: ZG,
            uS: wG,
            iS: SG,
            CS: LG,
            WS: yG,
            mS: kG,
            IS: UG,
            FS: YG,
            vS: VG
          } = GG;
          if (!bG.Hr.SbG(ZG, "itemState")) return void(0, tG.j)(bG, ZG, [yG, kG, UG], wG, {
            amount: SG,
            attributes: JSON.parse(LG),
            FS: YG,
            size: VG
          });
          const pG = bG.Hr.getState(ZG, "itemState");
          pG.amount = SG, pG.FS = YG, pG.creationTime = Date.now(), (0, DG.setServerPosition)(bG.Hr.getState(ZG, "smoothToServerPos"), yG, kG, UG)
        })), GG.OJ(YG.bb, (GG => {
          (0, FG.d)(bG).setCantPickUp(GG, !0), bG.Hr.SbG(GG, "itemState") && (bG.Hr.getState(GG, "itemState").FS = !0)
        })), GG.OJ(YG.Yd, (GG => {
          (0, FG.d)(bG).setCantPickUp(GG, !1), bG.Hr.SbG(GG, "itemState") && (bG.Hr.getState(GG, "itemState").FS = !1)
        })), GG.OJ(YG.jd, (GG => {
          let {
            pickUpItems: bG,
            pickUpAckSeq: ZG
          } = GG;
          for (const {
              name: SG,
              amount: LG,
              attributes: yG
            }
            of bG) wG().pickUpItem({
            name: SG,
            amount: LG,
            typeObj: tG.z[SG],
            attributes: yG
          });
          (0, UG.e)().client.inventoryPrediction.serverChangeApplied(ZG)
        })), GG.OJ(YG.He, (GG => {
          let {
            index: ZG,
            name: wG,
            amount: SG,
            attributes: LG,
            setSlotAckSeq: yG
          } = GG;
          const kG = bG.Hr.ebG(bG.sA);
          (ZG < kG.playerInventory.numSlots || kG.uL || kG.inCreative) && kG.setItemSlot(ZG, wG, SG, LG), (0, UG.e)().client.inventoryPrediction.serverChangeApplied(yG)
        })), GG.OJ(YG.hc, (GG => {
          (0, UG.e)().client.inventoryPrediction.acknowledge(GG)
        })), GG.OJ(YG.z, (GG => {
          let {
            AZ: bG,
            sZ: ZG,
            qZ: wG,
            gZ: SG
          } = GG;
          (0, UG.e)().client.itemDropPrediction.onActionItemDrops(bG, ZG, wG, SG)
        })), GG.OJ(YG.tb, (GG => {
          wG().clearInventory(), (0, UG.e)().client.inventoryPrediction.serverChangeApplied(GG)
        })), GG.OJ(YG.Ke, (GG => {
          JG.l.xh("setSelectedInventorySlotI", GG, !0)
        })), GG.OJ(YG.pb, (GG => {
          let {
            qS: ZG,
            nS: wG,
            gS: SG,
            eS: LG,
            RS: yG,
            HS: kG,
            tS: YG,
            DS: VG
          } = GG;
          const pG = bG.Hr.ebG(bG.sA);
          if (kG) {
            const {
              OS: GG,
              xS: bG
            } = VG;
            return (0, UG.e)().client.inventoryPrediction.pGG(bG, (() => {
              pG.chestRefreshed(wG, SG, LG, YG, GG)
            })) && JG.l.xh("chestToggleFromServer", !1, !0), void JG.l.xh("chestRefreshedFromServer")
          }(ZG || pG.uL) && (ZG ? (pG.chestOpened(wG, SG, LG, yG, YG), null !== yG && (0, UG.e)().client.ironChestPasskeyCache.onChestOpened(LG, yG)) : pG.chestClosed(), JG.l.xh("chestToggleFromServer", ZG, !0))
        })), GG.OJ(YG.Ib, (GG => {
          let {
            craftingRecipeItemName: wG,
            recipesForItem: SG
          } = GG;
          wG ? ZG.craftingManager.editRecipesForPlayer(bG.sA, wG, SG) : ZG.craftingManager.resetAllPlayerRecipes(bG.sA), JG.l.xh("craftingRecipesEdited", {
            itemName: wG,
            recipesForItem: SG
          })
        })), GG.OJ(YG.Nd, (GG => {
          let {
            jZ: bG,
            PZ: ZG,
            MZ: SG
          } = GG;
          wG().removeItemName(bG, ZG), (0, UG.e)().client.inventoryPrediction.serverChangeApplied(SG)
        })), GG.OJ(YG.Ld, (GG => {
          let {
            aS: wG
          } = GG;
          ZG.craftingManager.removeRecipes(bG.sA, wG), JG.l.xh("craftingRecipesEdited", {
            itemName: wG,
            recipesForItem: []
          })
        }))
      }
    }
    var OG = ZG(6488),
      xG = ZG(37772),
      BG = ZG(364),
      Gb = ZG.n(BG),
      bb = ZG(4537),
      Zb = ZG(38090),
      wb = ZG(38678),
      Sb = ZG(37763);
    class Lb {
      constructor(GG, bG) {
        this.wf = GG, this.setUpQueuedEntity = bG
      }
      register(GG) {
        const bG = this.wf,
          ZG = (0, UG.e)();
        GG.OJ(YG.Ve, (GG => {
          let {
            Fb: ZG,
            ab: SG,
            cb: LG,
            lb: yG
          } = GG;
          const kG = [SG, LG, yG];
          bG.Hr.setPosition(bG.sA, kG), (0, wG.sendColyMessage)(YG.ug, {
            LU: ZG,
            yU: bb.e
          }), JG.l.xh("localPlayerTeleported", {
            pos: kG,
            isCorrection: !1
          })
        })), GG.OJ(YG.gd, (GG => {
          let {
            jL: bG,
            PL: ZG,
            ML: wG,
            AL: SG
          } = GG;
          this.setUpQueuedEntity(bG);
          const LG = [ZG, wG, SG];
          JG.l.xh(`otherPlayerTeleported|${bG}`, {
            pos: LG
          })
        })), GG.OJ(YG.vd, (GG => {
          let {
            kS: ZG,
            US: SG,
            YS: LG,
            VS: yG,
            pS: kG,
            fS: UG,
            QS: VG,
            hS: pG,
            KS: fG,
            zS: QG
          } = GG;
          const KG = [SG, LG, yG];
          bG.Hr.setPosition(bG.sA, KG);
          const hG = bG.Hr.EbG(bG.sA),
            dG = bG.Hr.qT(bG.sA);
          Gb().set(dG.vR, 0, 0, 0), Gb().set(dG.jR, 0, 0, 0), Gb().set(dG.Sd, kG, UG, VG), dG.gR(), hG._flying = null !== QG, QG ? (hG.flyAccel.ES = QG.ES, hG.flyAccel.oS = QG.oS) : hG.flyAccel.reset(), pG && hG.movementType === OG.o.GLIDING && (hG.dS = pG.dS, Gb().copy(hG.rS, pG.rS)), (0, wG.sendColyMessage)(YG.ug, {
            LU: ZG,
            yU: bb.e
          }), JG.l.xh("localPlayerTeleported", {
            pos: KG,
            isCorrection: !0
          })
        })), GG.OJ(YG.Ne, (GG => {
          let {
            vehicleEId: bG,
            overrides: ZG
          } = GG;
          (0, UG.e)().applyRiddenVehicleSettingOverrides(bG, ZG)
        })), GG.OJ(YG.kf, (GG => {
          let {
            IZ: ZG,
            FZ: wG,
            vZ: SG
          } = GG;
          const LG = bG.Hr.EbG(bG.sA).physicsState.type === OG.q.SLEEPING && ZG === OG.q.DEFAULT;
          (0, UG.e)().updatePositionAndPhysics(bG.sA, {
            type: ZG,
            tier: wG
          }, !0, SG), LG && (0, UG.e)().updateHeldVehicleStatus()
        })), GG.OJ(YG.hb, (GG => {
          let {
            ub: ZG,
            ib: wG
          } = GG;
          bG.Hr.qbG(bG.sA).setPose(ZG, wG)
        })), GG.OJ(YG.Be, (GG => {
          const {
            pp: ZG,
            zZG: wG
          } = (0, xG.f)([GG[0], GG[1], GG[2]]);
          Sb.d.setLookDirection(bG, ZG, wG), (0, Zb.t)(ZG, wG);
          const SG = bG.Hr.qbG(bG.sA);
          SG && (SG.heading = ZG)
        })), GG.OJ(YG.Ce, (GG => {
          ZG.client.cameraController.setCameraZoom(GG)
        })), GG.OJ(YG.Pe, (GG => {
          let {
            EZ: wG,
            oZ: SG
          } = GG;
          ZG.shakePlayerCamera(bG.sA, wG, SG)
        })), GG.OJ(YG.rc, (GG => {
          bG.Hr.qbG(bG.sA).jumpMultiplier.setMultiplierType("jumpEffectAmount", GG)
        })), (0, wG.onGameResetOnce)((() => {
          bG.Hr.qbG(bG.sA).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), GG.OJ(YG.F, (GG => {
          bG.Hr.qT(bG.sA).applyImpulse(GG)
        })), GG.OJ(YG.Oe, (GG => {
          const ZG = bG.Hr.qT(bG.sA);
          Gb().set(ZG.vR, 0, 0, 0), Gb().set(ZG.jR, 0, 0, 0), Gb().copy(ZG.Sd, GG), ZG.gR()
        })), (0, wG.onGameResetOnce)((() => {
          (0, wb.setFloatingYValue)(bG.Hr.getState(bG.sA, "physics"), bG.Hr.kN(bG.sA), null)
        })), GG.OJ(YG.Kb, (GG => {
          let {
            aZ: ZG,
            cZ: wG,
            lZ: SG
          } = GG;
          const LG = (0, vG.d)(ZG);
          if (LG === bG.sA) {
            const GG = bG.Hr.kN(bG.sA).position;
            SG ??= Math.floor(GG[1]) - 1, (0, wb.setFloatingYValue)(bG.Hr.getState(bG.sA, "physics"), bG.Hr.kN(bG.sA), wG ? SG : null)
          }(0, FG.d)(bG).setFloating(LG, wG, SG);
          const yG = bG.Hr.getState(LG, "floating");
          yG && (yG.isFloating = wG, yG.lZ = wG ? SG : null)
        }))
      }
    }

    function yb(GG, bG, ZG, wG, SG) {
      let LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!GG.Hr.nbG(GG.sA)) return console.log("Got resync inven but don't have inven component"), void bG.acknowledge(wG);
      LG && console.error("Had to sync inven"), bG.pGG(wG, SG) && ZG.xh("chestToggleFromServer", !1, !0), ZG.xh("syncedInvenFromServer")
    }
    var kb = ZG(39404),
      Ub = ZG(39412),
      Yb = ZG(1931);
    var Vb = ZG(4518);

    function pb(GG) {
      const bG = GG.Op;
      let ZG = 0,
        SG = -1,
        yG = -1 / 0,
        kG = null,
        UG = !0;
      const VG = () => {
        if (++ZG % 10 !== 0) return;
        const VG = (0, wG.getLastReceivedPacketId)();
        if (VG <= SG) return;
        const [pG, fG, QG] = GG.Hr.HJ(GG.sA), KG = ! function(GG) {
          var bG;
          let ZG = null === (bG = GG.Hr.XZG(GG.sA)) || void 0 === bG ? void 0 : bG.SK;
          if (void 0 === ZG) return !1;
          const wG = new Set;
          for (; void 0 !== ZG && !wG.has(ZG);) {
            var SG;
            wG.add(ZG);
            const bG = GG.Hr.getState(ZG, "smoothToServerPos"),
              LG = Array.isArray(bG) ? null : null === bG || void 0 === bG ? void 0 : bG.serverPosition;
            if (LG) {
              const bG = GG.Hr.HJ(ZG);
              if (Math.abs(bG[0] - LG[0]) > 10 || Math.abs(bG[1] - LG[1]) > 10 || Math.abs(bG[2] - LG[2]) > 10) return !0
            }
            ZG = null === (SG = GG.Hr.XZG(ZG)) || void 0 === SG ? void 0 : SG.SK
          }
          return !1
        }(GG) && function(GG, bG, ZG, wG) {
          const SG = LG.d.rK;
          for (let LG = 0; LG < GG.length; LG++) {
            const yG = GG[LG];
            if (!(0, Vb.k)(bG, ZG, wG, yG[0] * SG, yG[1] * SG, yG[2] * SG)) return !1
          }
          return !0
        }(bG.Nh.fK, pG, fG, QG), hG = null === kG || Math.abs(pG - kG[0]) > 8 || Math.abs(fG - kG[1]) > 8 || Math.abs(QG - kG[2]) > 8, dG = !UG || hG || performance.now() - yG >= 1e4;
        UG = KG, KG && dG && (SG = VG, yG = performance.now(), kG = [pG, fG, QG], (0, wG.sendColyMessage)(YG.$f, {
          Qk: VG
        }))
      };
      return GG.on("Tp", VG), () => {
        GG.off("Tp", VG)
      }
    }
    var fb = ZG(39414),
      Qb = ZG(1444),
      Kb = ZG(2742),
      hb = ZG(1781),
      db = ZG(2897),
      Jb = ZG(4792);
    class rb {
      constructor(GG, bG, ZG) {
        this.wf = GG, this.gameNameWithVariation = bG, this.connectionResume = ZG, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        Jb.e.reset(), (0, kb.c)()
      }
      startChunkReports() {
        const GG = function(GG) {
            let bG = null,
              ZG = -1 / 0,
              SG = null;
            const LG = () => {
                SG = null;
                const LG = Math.ceil(GG.bI[0]),
                  yG = Math.ceil(GG.bI[1]);
                bG && bG[0] === LG && bG[1] === yG || (bG = [LG, yG], ZG = performance.now(), (0, wG.sendColyMessage)(YG.Zf, {
                  Hy: LG,
                  ty: yG
                }))
              },
              yG = () => {
                null === SG && (SG = setTimeout(LG, Math.max(0, ZG + 250 - performance.now())))
              };
            return LG(), GG.on("addRemoveDistanceChanged", yG), () => {
              GG.off("addRemoveDistanceChanged", yG), null !== SG && (clearTimeout(SG), SG = null)
            }
          }(this.wf.Op),
          bG = pb(this.wf);
        this.stopChunkReports = () => {
          GG(), bG()
        }
      }
      restartChunkStreaming() {
        (0, Zb.k)(this.wf, (0, UG.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - fb.e)), this.startChunkReports()
      }
      register(GG) {
        const bG = this.wf,
          ZG = (0, UG.e)();
        GG.OJ(YG.Qc, (GG => {
          rG.c.applyNewClientOptions(GG)
        })), GG.OJ(YG.md, (GG => {
          Kb.b.onReceiveColyseusPing(GG)
        })), GG.OJ(YG.Ee, (GG => {
          let {
            key: bG,
            value: ZG
          } = GG;
          (0, zG.setCookie)(this.gameNameWithVariation, bG, ZG)
        })), GG.OJ(YG.Ge, (GG => {
          JG.l.xh("setDiscordReportKey", GG)
        })), (0, wG.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), GG.OJ(YG.dc, (SG => {
          const {
            YG: LG,
            VG: yG
          } = SG;
          if ((0, wG.setAdjustment)(yG), this.connectionResume.onInitialInfo(SG.pG, SG.fG), wG.offlineInputReplay.DW(SG.QG), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", LG);
            try {
              null === SG.KG && (0, UG.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), mG(bG.Op), rG.c.apply({
                shopInfo: null,
                _shopVersion: Yb.b
              });
              const ZG = bG.Hr.ebG(bG.sA);
              ZG.uL && (ZG.chestClosed(), JG.l.xh("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), JG.l.xh("initInfoReceived", GG)
            } finally {
              const GG = null === SG.KG ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = GG, this.connectionResume.onResumeInitialInfo(SG.KG, (() => {
                GG.endSeq = (0, UG.e)().client.inventoryPrediction.lastActionSeq
              })), null === GG && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", LG), hb.d.markAdmitted(), (0, Zb.o)(bG), JG.l.xh("loadingScreenState", "loadingPage:loadingWorld"), bG.ybG = LG, bG.Hr.SbG(bG.sA, bG.Hr.names.entityName) && bG.Hr.YM(bG.sA, bG.Hr.names.entityName), (0, UG.e)().setEntityName(bG.ybG, (0, UG.e)().getRawEntityName(bG.sA)), bG.JA[bG.ybG] = {}, bG.Hr.bM(bG.sA, bG.Hr.names.entityName), JG.l.xh("initInfoReceived", GG), this.startChunkReports(), ZG.client.onServerConnectionFinalised()
        })), GG.OJ(YG.oe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const GG = this.replayResume;
            if (this.replayResume = null, !GG) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: ZG
            } = (0, UG.e)().client, {
              sync: SG
            } = GG, LG = new Set(wG.offlineInputReplay.takeDroppedActions());
            if (SG) {
              var yG;
              const wG = null !== (yG = GG.endSeq) && void 0 !== yG ? yG : ZG.lastActionSeq;
              ZG.forget((GG => GG > SG.xS && GG <= wG || LG.has(GG))), yb(bG, ZG, JG.l, SG.xS, SG.load)
            } else ZG.dropPending(), ZG.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), GG.OJ(YG.Re, (GG => {
          let {
            XL: ZG,
            mL: wG,
            xS: SG
          } = GG;
          const {
            inventoryPrediction: LG
          } = (0, UG.e)().client, yG = () => {
            bG.Hr.ebG(bG.sA).loadFromString(ZG)
          };
          this.replayResume && (this.replayResume.sync = {
            xS: SG,
            load: yG
          }), yb(bG, LG, JG.l, SG, yG, wG)
        })), GG.OJ(YG.Ad, (GG => {
          let {
            type: bG,
            location1: ZG,
            location2: wG,
            location3: SG,
            score: LG
          } = GG;
          (0, db.logProgressionEvent)({
            type: bG,
            location1: ZG,
            location2: wG,
            location3: SG,
            score: LG
          })
        })), GG.OJ(YG.le, (GG => {
          let {
            type: bG,
            resourceType: ZG,
            amount: wG,
            category: SG,
            itemName: LG
          } = GG;
          (0, db.logResourceEvent)({
            type: bG,
            resourceType: ZG,
            amount: wG,
            category: SG,
            itemName: LG
          })
        })), GG.OJ(YG.zc, (GG => {
          let {
            leaveEventType: bG,
            category: ZG,
            subCategory: wG,
            value: SG
          } = GG;
          (0, db.updateLeaveValue)({
            leaveEventType: bG,
            category: ZG,
            subCategory: wG,
            value: SG
          })
        })), GG.OJ(YG.Ab, (GG => {
          let {
            cat1: bG,
            cat2: ZG,
            cat3: wG,
            value: SG
          } = GG;
          (0, db.logCustomAnalyticsEvent)({
            cat1: bG,
            cat2: ZG,
            cat3: wG,
            value: SG
          })
        })), GG.OJ(YG.uc, (GG => {
          (0, UG.e)().client.leaveGameUnwanted({
            reason: GG,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Qb.navigatePreserveSearch)("/")
        })), GG.OJ(YG.ue, (GG => {
          JG.l.xh("serverUpdating", Date.now() + GG, !0)
        })), GG.OJ(YG.Oc, Ub.e), GG.OJ(YG.Ic, (GG => {
          console.error(`[logErrorToConsole]: ${GG}`)
        }))
      }
    }
    var zb = ZG(39423),
      Eb = ZG(39435),
      ob = ZG(982),
      Xb = ZG(39426),
      ub = ZG(2400),
      ib = ZG(3647);
    class Cb {
      constructor(GG, bG) {
        this.wf = GG, this.clientApi = bG
      }
      register(GG) {
        const bG = this.wf,
          ZG = (0, UG.e)();
        GG.OJ(YG.mb, (GG => {
          let {
            chatMsgId: bG,
            content: ZG,
            chatterEId: wG
          } = GG;
          JG.l.xh("chat", {
            serverChatMsgId: bG,
            content: ZG,
            chatterEId: wG
          }, !0)
        })), GG.OJ(YG.Ze, (GG => {
          JG.l.xh("TopRightHelper", GG, !0)
        })), GG.OJ(YG.Te, (GG => {
          (0, zb.b)(GG)
        })), GG.OJ(YG.yc, (GG => {
          let {
            category: bG,
            timeframe: ZG,
            data: wG
          } = GG;
          JG.l.xh("leaderboardResponse", {
            category: bG,
            timeframe: ZG,
            data: wG
          })
        })), GG.OJ(YG.Qe, (() => {
          JG.l.xh("showShopTutorial", null, !0)
        })), GG.OJ(YG.zd, (GG => {
          JG.l.xh("progressBarUpdate", GG, !0)
        })), GG.OJ(YG.ec, (GG => {
          JG.l.xh("middleScreenBarInitiate", {
            duration: GG.cS,
            lS: GG.lS,
            horizBarRemOffset: GG.jS
          }, !0)
        })), GG.OJ(YG.Qd, (() => {
          JG.l.xh("middleScreenBarRemove", !0)
        })), GG.OJ(YG.Fe, (GG => {
          let {
            id: bG,
            position: ZG,
            style: wG,
            jb: SG,
            Mb: LG
          } = GG;
          JG.l.xh("setDirectionArrow", {
            id: bG,
            position: ZG,
            style: wG,
            text: (0, YG.u)(SG),
            Mb: LG
          }, !0)
        })), GG.OJ(YG.rb, (GG => {
          let {
            id: bG
          } = GG;
          JG.l.xh("clearDirectionArrow", {
            id: bG
          }, !0)
        })), GG.OJ(YG.zb, (GG => {
          (0, ib.onCosmeticPackGranted)(GG)
        })), GG.OJ(YG.bd, (GG => {
          let {
            id: bG,
            TG: ZG
          } = GG;
          const {
            type: SG,
            params: LG
          } = (0, Eb.e)(ZG), yG = {
            ...LG
          };
          for (const wG of Eb.b) wG in yG && yG[wG] && (yG[wG] = (0, YG.u)(yG[wG]));
          Jb.e.queueQTE(bG, SG, yG).getResult().then((GG => {
            "boolean" === typeof GG && (0, wG.sendColyMessage)(YG.Wh, {
              qteId: bG,
              qteResponse: GG
            })
          }))
        })), GG.OJ(YG.Td, (GG => {
          Jb.e.cancelQTE(GG)
        })), (0, wG.onGameResetOnce)((() => {
          Jb.e.reset()
        })), GG.OJ(YG.fd, (GG => {
          let {
            id: bG,
            clientParameters: ZG
          } = GG;
          (0, kb.f)(bG, ZG)
        })), GG.OJ(YG.Ud, (GG => {
          (0, kb.i)(GG)
        })), GG.OJ(YG.bf, (GG => {
          let {
            text: bG,
            id: ZG,
            destructive: SG
          } = GG;
          (0, kb.l)(ZG, bG, SG, (GG => {
            (0, wG.sendColyMessage)(YG.nj, {
              fU: ZG,
              QU: GG,
              KU: 5
            })
          }))
        })), GG.OJ(YG.id, (GG => {
          let {
            info: bG
          } = GG;
          JG.l.xh("overShopInfo", bG, !0)
        })), GG.OJ(YG.Qb, (GG => {
          let {
            kG: ZG,
            UG: wG
          } = GG;
          this.clientApi.openShop(bG.sA, ZG, wG)
        })), GG.OJ(YG.Mb, (GG => {
          let {
            aL: bG,
            cL: ZG,
            lL: wG
          } = GG;
          JG.l.xh("flyingMiddleMessage", {
            content: (0, YG.u)(bG),
            cL: ZG,
            lL: wG
          }, !0)
        })), GG.OJ(YG.of, (GG => {
          const bG = GG === ob.d ? null : {
            message: `Currently loaded as variation: ${GG}`,
            type: "Warning"
          };
          JG.l.xh("showPermanentBottomMessage", bG, !0)
        })), GG.OJ(YG.Sb, (GG => {
          let {
            messageType: bG,
            data: wG
          } = GG;
          (0, Xb.e)(bG) ? (0, Xb.c)(bG, wG) : ("freeCamPerms" === bG && ZG.client.freeCameraController.setPerms(wG.key, wG.value), ZG.client.triggerGameCallback("onReceivedMessageFromServer", bG, wG))
        })), GG.OJ(YG.ub, ub.l)
      }
    }
    class Wb {
      constructor(GG, bG, ZG, wG) {
        this.gameNameWithVariation = GG, this.wf = ZG, this.connectionResume = wG, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new oG.e(bG, this.wf)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, wG.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      TYG(GG) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new oG.e(GG, this.wf), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(GG, bG) {
        const ZG = this.wf,
          wG = GG => {
            this.stateReplicationHandler.setUpIfQueued(GG)
          };
        new rb(ZG, this.gameNameWithVariation, this.connectionResume).register(GG), new IG(ZG).register(GG), new NG(ZG).register(GG), new jG(ZG, wG).register(GG), new HG(ZG, wG).register(GG), new Cb(ZG, bG).register(GG), new Lb(ZG, wG).register(GG)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var mb = ZG(39444),
      Ib = ZG(39453),
      Fb = ZG(647),
      vb = ZG(2920);
    class ab {
      constructor(GG, bG, ZG, wG) {
        this.msgHandler = ZG, this.listener = wG, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new mb.d({
          reconnect: GG,
          isLive: () => wG.isLive(),
          onReconnected: GG => {
            this.resumeOnRoom(GG)
          },
          onGaveUp: (GG, bG) => {
            wG.onGaveUp(GG, bG)
          },
          freeze: bG,
          releaseSeat: bG => {
            GG(bG).then((GG => {
              GG.leave(!0)
            }), (GG => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", GG)
            }))
          }
        })
      }
      onInitialInfo(GG, bG) {
        this.session.onInitialInfo(GG, bG)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(GG, bG) {
        if (this.session.onResuming(), null === GG) {
          try {
            (0, UG.e)().client.itemDropPrediction.reset()
          } catch (ZG) {
            console.error("Error dropping the item drop predictions on resuming", ZG)
          }
          return wG.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, UG.e)().client.itemDropPrediction.onResumeReplayOffered(), wG.offlineInputReplay.replayFrom(GG.dG, bG)
      }
      onResumed(GG) {
        this.setSuspended(!1), (0, wG.resendBeacons)();
        try {
          GG()
        } catch (bG) {
          console.error("Error completing the resume", bG)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(GG) {
        const bG = (0, Fb.g)((() => GG.connection.isOpen));
        GG.xJ(bG);
        const ZG = new Ib.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(GG, "silent"), GG.leave(!1))
        }));
        GG.onStateChange((() => {
          ZG.heard()
        }));
        const wG = bG => {
          bG.persisted || GG.leave(!0)
        };
        window.addEventListener("pagehide", wG), GG.xJ(((bG, ZG) => {
          if (GG === this.attachedRoom && this.listener.isLive()) return (0, LG.f)(bG) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${bG}, reconnecting`), this.listener.onDropped(bG, ZG), void this.onConnectionDropped(GG, String(bG))) : void this.listener.onRoomLeft(bG, ZG)
        })), this.attachedRoom = GG, this.detachRoomListeners = () => {
          bG(), ZG.dispose(), window.removeEventListener("pagehide", wG)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(GG) {
        GG !== this.suspended && (this.suspended = GG, (0, wG.setConnectionSuspended)(GG), (0, UG.e)().client.itemDropPrediction.setSuspended(GG))
      }
      detachRoom() {
        var GG;
        null === (GG = this.detachRoomListeners) || void 0 === GG || GG.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(GG, bG) {
        (0, vb.reportClientError)("disconnect", "Left room", bG), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), wG.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(GG.reconnectionToken)
      }
      resumeOnRoom(GG) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), GG.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, TG.w)(), wG.offlineInputReplay.onConnectionReplaced(), this.msgHandler.TYG(GG), this.listener.onReconnected(GG), this.attachRoom(GG)
      }
    }
    var cb = ZG(2968),
      lb = ZG(2970),
      jb = ZG(1287),
      Pb = ZG(1260),
      Mb = ZG(4695),
      Ab = ZG(3135),
      sb = ZG(1032),
      qb = ZG(38124),
      nb = ZG(39456),
      gb = ZG(8957),
      eb = ZG(39461),
      Rb = ZG(1169),
      Tb = ZG(36826),
      Hb = ZG(39470),
      tb = ZG(1682),
      Db = ZG(2757);

    function Nb(GG) {
      var bG, ZG;
      if ("object" !== typeof GG || null === GG) return {
        errType: typeof GG
      };
      const wG = GG;
      return {
        errType: null !== (bG = null === (ZG = GG.constructor) || void 0 === ZG ? void 0 : ZG.name) && void 0 !== bG ? bG : "",
        errName: "string" === typeof wG.name ? wG.name : "",
        eventType: "string" === typeof wG.type ? wG.type : "",
        errStack: "string" === typeof wG.stack ? wG.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Ob(GG) {
      if ("undefined" !== typeof ProgressEvent && GG instanceof ProgressEvent) return !0;
      if (!(GG instanceof Error)) return !1;
      const bG = GG.code;
      return "ServerError" === GG.name && void 0 === bG || "AbortError" === GG.name || "seat reservation expired." === GG.message || "early_leave" === GG.message
    }(0, hG.q)((GG => {
      (0, vb.reportClientError)("wasm_net", GG)
    }));
    let xb = !0;

    function Bb() {
      xb = !1
    }
    class GZ {
      constructor(GG) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.wf = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = GG.gameNameWithVariation, this.lobbyName = GG.lobbyName, this.colyClient = GG.colyClient, this.userContext = GG.userContext
      }
      async connectToServer(GG, bG, ZG) {
        rG.c.reset(), GG.JA = {
          [GG.sA]: {}
        }, GG.ybG = void 0, (0, TG.w)(), (0, UG.e)().removeAllEntityNames(), (0, UG.e)().setEntityName(GG.sA, this.userContext.getPlayerName()), (0, jb.q)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, tb.g)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const yG = performance.now();
        ZG.aborted || (0, Pb.p)("wasm_core_ready", yG);
        const kG = (0, eb.d)(this.userContext, (() => {
          const {
            roomName: wG,
            joinOptions: SG
          } = (0, EG.g)(this.userContext, this.gameNameWithVariation, this.lobbyName, bG, (GG => Ab.e.isUsingCustomGameTexturePack(GG)));
          return SG.joinAdHold = this.joinAdHold, SG.renderBackend = (0, Db.c)(GG.HK), (0, nb.g)((() => this.colyClient.joinOrCreateUntil(ZG, wG, SG)), ZG)
        }));
        return JG.l.xh("loadingScreenState", "loadingPage:joiningLobby"), await kG.then((bG => {
          if (this.joinedAt = performance.now(), (0, Pb.p)("wasm_joined", this.joinedAt), this.wf = GG, this.joinAdHold) {
            const GG = (0, tb.q)((() => {
              bG.send(SG.c), (0, Pb.l)(), hb.d.markJoinAdEnded()
            }));
            bG.xJ(GG), (0, wG.onGameResetOnce)(GG)
          }
          const ZG = new dG(bG);
          this.connectionResume = new ab((GG => this.colyClient.reconnect(GG)), (bG => {
            GG.Tm(bG)
          }), ZG, {
            isLive: () => (0, UG.e)().client.getMsgHandler() === ZG,
            onDropped: (GG, bG) => {
              (0, lb.h)(GG) || this.logUnrecognisedConnectionLoss(GG, void 0, {
                site: "drop",
                closeReason: null !== bG && void 0 !== bG ? bG : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (GG, bG) => {
              this.onRoomLeft(GG, bG)
            },
            onReconnected: GG => {
              this.incomingMsgInitialisor.TYG(GG), this.checkSendPath = (0, qb.i)(ZG, GG, hG.r)
            },
            onGaveUp: (GG, bG) => {
              this.onResumeGaveUp(GG, bG)
            }
          }), this.connectionResume.attachRoom(bG), (0, wG.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const LG = ZG.send,
            yG = ZG.OJ,
            kG = ZG.eZG.send,
            YG = ZG.eZG.OJ,
            VG = ZG.eYG;
          this.checkSendPath = (0, qb.i)(ZG, bG, hG.r);
          const pG = setInterval((() => {
            LG === ZG.send && yG === ZG.OJ && kG === ZG.eZG.send && YG === ZG.eZG.OJ && VG === ZG.eYG || Bb(), this.checkSendPath()
          }), 1e4);
          return (0, wG.onGameResetOnce)((() => {
            clearInterval(pG)
          })), {
            success: !0,
            successDetails: ZG
          }
        })).catch((bG => {
          if (ZG.aborted && bG === (0, Rb.h)(ZG)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (bG instanceof Tb.g) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: bG.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, Hb.c)(bG, bG.leg)
            }
          };
          GG.Jh(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${bG.code}\n`, bG);
          const wG = bG.code;
          return wG === LG.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: LG.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(wG, bG.message, {
                site: "join",
                sinceJoinStart: (0, lb.d)(performance.now() - yG),
                ...Nb(bG)
              }, Ob(bG)),
              rematch: (0, nb.c)(bG),
              gameRefused: (0, gb.e)(bG),
              joinFailure: (0, Hb.c)(bG, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(GG, bG, ZG) {
        JG.l.xh("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Wb(this.gameNameWithVariation, bG.eZG, GG, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const SG = bG.NYG();
        this.incomingMsgInitialisor.setupOnMessageListeners(SG, ZG), (0, wG.onConnectionToServerReady)(SG, bG), this.joinAdHold && hb.d.markAdmissionAwaited(), SG.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(GG, bG) {
        (0, sb.rh)(new Error("Reconnect failed"), {
          ...(0, cb.n)(bG),
          game: this.gameNameWithVariation
        }), (0, vb.reportClientError)("disconnect", "Reconnect failed", bG.reason), (0, UG.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !GG,
          canPlayAgain: GG,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Qb.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, lb.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(GG, bG) {
        var ZG;
        if (GG === LG.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${GG}`), GG === LG.b.serverUpdating.code) return (0, vb.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, UG.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.wf.Jh(`Kicked from server with code ${GG}`, new Error);
        const wG = Object.keys(LG.b).find((bG => LG.b[bG].code === GG));
        (0, vb.reportClientError)("disconnect", "Left room", null !== wG && void 0 !== wG ? wG : String(GG));
        const SG = this.onConnectionToServerLost(GG, void 0, {
          site: "leave",
          closeReason: null !== bG && void 0 !== bG ? bG : "",
          sinceJoined: this.sinceJoined()
        });
        (0, UG.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${SG.reason}`,
          canReconnect: SG.canReconnect,
          requiresRefresh: SG.requiresRefresh,
          automaticallyReconnect: null !== (ZG = SG.automaticallyReconnect) && void 0 !== ZG && ZG
        }), (0, Qb.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Mb.y)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Qb.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(GG, bG, ZG) {
        var wG;
        let SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (wG = bG) && void 0 !== wG && wG.endsWith(LG.j) && (this.userContext.invalidateTrafficCode(), bG = bG.replace(LG.j, "")), GG === LG.b.outdatedVersion.code) return console.error("Outdated client with version ", yG.e, ", refreshing page"), (0, zG.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (GG === LG.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, zG.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const yG in LG.b) {
          const {
            code: ZG,
            text: wG,
            canReconnect: SG
          } = LG.b[yG];
          if (ZG === GG) {
            console.log("matched known error", GG, "leaving game");
            return {
              reason: "" !== wG ? wG : bG || `Code: ${GG}`,
              requiresRefresh: !1,
              canReconnect: SG,
              automaticallyReconnect: ZG === LG.b.customGameUpdated.code || ZG === LG.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, lb.f)(GG) || SG ? console.warn("Connection lost", GG, bG) : this.logUnrecognisedConnectionLoss(GG, bG, ZG), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${GG}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: SG ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(GG, bG, ZG) {
        (0, sb.rh)(new Error("Unrecognised connection loss"), {
          code: String(GG),
          cause: null !== bG && void 0 !== bG ? bG : "",
          ...ZG,
          game: this.gameNameWithVariation,
          ...(0, lb.k)()
        })
      }
    }
  },
  39353: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => HZ,
      g: () => BZ
    });
    var wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG, vG, aG, cG, lG, jG, PG, MG, AG, sG, qG, nG, gG, eG, RG, TG, HG, tG, DG, NG, OG, xG, BG, Gb, bb, Zb, wb, Sb, Lb, yb, kb, Ub, Yb, Vb, pb, fb, Qb, Kb, hb, db, Jb, rb, zb, Eb, ob, Xb, ub, ib, Cb, Wb, mb, Ib, Fb, vb, ab, cb, lb, jb, Pb, Mb, Ab, sb, qb, nb, gb, eb, Rb, Tb, Hb, tb, Db, Nb, Ob, xb = ZG(19),
      Bb = ZG(37500),
      GZ = ZG(39368),
      bZ = ZG(39376),
      ZZ = ZG(9157),
      wZ = ZG(595),
      SZ = ZG(589),
      LZ = ZG(37146);
    let yZ = (wG = (0, ZZ.type)("number"), SG = (0, ZZ.type)("number"), LG = (0, ZZ.type)("number"), yG = (0, ZZ.type)("number"), kG = (0, ZZ.type)("number"), UG = (0, ZZ.type)("number"), YG = (0, ZZ.type)("string"), VG = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, GZ.b)(this, "id", pG, this), (0, GZ.b)(this, "amount", fG, this), (0, GZ.b)(this, "x", QG, this), (0, GZ.b)(this, "y", KG, this), (0, GZ.b)(this, "z", hG, this), (0, GZ.b)(this, "size", dG, this), (0, GZ.b)(this, "attributes", JG, this)
        }
      }, pG = (0, bZ.b)(VG.prototype, "id", [wG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fG = (0, bZ.b)(VG.prototype, "amount", [SG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), QG = (0, bZ.b)(VG.prototype, "x", [LG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), KG = (0, bZ.b)(VG.prototype, "y", [yG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hG = (0, bZ.b)(VG.prototype, "z", [kG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dG = (0, bZ.b)(VG.prototype, "size", [UG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), JG = (0, bZ.b)(VG.prototype, "attributes", [YG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), VG),
      kZ = (rG = (0, ZZ.type)("string"), zG = (0, ZZ.type)("string"), EG = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, GZ.b)(this, "itemName", oG, this), (0, GZ.b)(this, "enchantmentTier", XG, this)
        }
      }, oG = (0, bZ.b)(EG.prototype, "itemName", [rG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), XG = (0, bZ.b)(EG.prototype, "enchantmentTier", [zG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), EG),
      UZ = (uG = (0, ZZ.type)("string"), iG = (0, ZZ.type)("string"), CG = (0, ZZ.type)("number"), WG = (0, ZZ.type)("number"), mG = (0, ZZ.type)("number"), IG = (0, ZZ.type)("float32"), FG = (0, ZZ.type)("float32"), vG = (0, ZZ.type)("float32"), aG = (0, ZZ.type)("string"), cG = (0, ZZ.type)(["number"]), lG = (0, ZZ.type)("boolean"), jG = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, GZ.b)(this, "type", PG, this), (0, GZ.b)(this, "name", MG, this), (0, GZ.b)(this, "x", AG, this), (0, GZ.b)(this, "y", sG, this), (0, GZ.b)(this, "z", qG, this), (0, GZ.b)(this, "xRotation", nG, this), (0, GZ.b)(this, "yRotation", gG, this), (0, GZ.b)(this, "zRotation", eG, this), (0, GZ.b)(this, "followingEId", RG, this), (0, GZ.b)(this, "followingOffset", TG, this), (0, GZ.b)(this, "shouldMatchFollowingEntityRotation", HG, this)
        }
      }, PG = (0, bZ.b)(jG.prototype, "type", [uG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), MG = (0, bZ.b)(jG.prototype, "name", [iG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), AG = (0, bZ.b)(jG.prototype, "x", [CG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sG = (0, bZ.b)(jG.prototype, "y", [WG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qG = (0, bZ.b)(jG.prototype, "z", [mG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nG = (0, bZ.b)(jG.prototype, "xRotation", [IG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gG = (0, bZ.b)(jG.prototype, "yRotation", [FG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eG = (0, bZ.b)(jG.prototype, "zRotation", [vG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), RG = (0, bZ.b)(jG.prototype, "followingEId", [aG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), TG = (0, bZ.b)(jG.prototype, "followingOffset", [cG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.ArraySchema(0, 0, 0)
        }
      }), HG = (0, bZ.b)(jG.prototype, "shouldMatchFollowingEntityRotation", [lG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), jG),
      YZ = (tG = (0, ZZ.type)("float32"), DG = (0, ZZ.type)("float32"), NG = (0, ZZ.type)("boolean"), OG = (0, ZZ.type)("boolean"), xG = (0, ZZ.type)("float32"), BG = (0, ZZ.type)("boolean"), Gb = (0, ZZ.type)("string"), bb = (0, ZZ.type)("string"), Zb = (0, ZZ.type)("string"), wb = (0, ZZ.type)("string"), Sb = (0, ZZ.type)(["number"]), Lb = (0, ZZ.type)("number"), yb = (0, ZZ.type)({
        map: kZ
      }), kb = class extends UZ {
        constructor() {
          super(...arguments), (0, GZ.b)(this, "scale", Ub, this), (0, GZ.b)(this, "speed", Yb, this), (0, GZ.b)(this, "jumping", Vb, this), (0, GZ.b)(this, "crouching", pb, this), (0, GZ.b)(this, "cameraPitch", fb, this), (0, GZ.b)(this, "armSwinging", Qb, this), (0, GZ.b)(this, "heldItemName", Kb, this), (0, GZ.b)(this, "heldItemEnchantmentTier", hb, this), (0, GZ.b)(this, "pose", db, this), (0, GZ.b)(this, "ridingVehicleEId", Jb, this), (0, GZ.b)(this, "meshOffset", rb, this), (0, GZ.b)(this, "baseRenderHeading", zb, this), (0, GZ.b)(this, "armour", Eb, this)
        }
      }, Ub = (0, bZ.b)(kb.prototype, "scale", [tG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Yb = (0, bZ.b)(kb.prototype, "speed", [DG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Vb = (0, bZ.b)(kb.prototype, "jumping", [NG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), pb = (0, bZ.b)(kb.prototype, "crouching", [OG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), fb = (0, bZ.b)(kb.prototype, "cameraPitch", [xG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Qb = (0, bZ.b)(kb.prototype, "armSwinging", [BG], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Kb = (0, bZ.b)(kb.prototype, "heldItemName", [Gb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), hb = (0, bZ.b)(kb.prototype, "heldItemEnchantmentTier", [bb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), db = (0, bZ.b)(kb.prototype, "pose", [Zb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Jb = (0, bZ.b)(kb.prototype, "ridingVehicleEId", [wb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), rb = (0, bZ.b)(kb.prototype, "meshOffset", [Sb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.ArraySchema(0, 0, 0)
        }
      }), zb = (0, bZ.b)(kb.prototype, "baseRenderHeading", [Lb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Eb = (0, bZ.b)(kb.prototype, "armour", [yb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.MapSchema
        }
      }), kb),
      VZ = (ob = (0, ZZ.type)("string"), Xb = (0, ZZ.type)("string"), ub = (0, ZZ.type)("string"), ib = (0, ZZ.type)("uint8"), Cb = class extends YZ {
        constructor() {
          super(...arguments), (0, GZ.b)(this, "variation", Wb, this), (0, GZ.b)(this, "ownerDbId", mb, this), (0, GZ.b)(this, "metaInfo", Ib, this), (0, GZ.b)(this, "aiState", Fb, this)
        }
      }, Wb = (0, bZ.b)(Cb.prototype, "variation", [ob], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), mb = (0, bZ.b)(Cb.prototype, "ownerDbId", [Xb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Ib = (0, bZ.b)(Cb.prototype, "metaInfo", [ub], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Fb = (0, bZ.b)(Cb.prototype, "aiState", [ib], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Cb);
    vb = (0, ZZ.type)("string"), ab = (0, ZZ.type)("string"), cb = (0, ZZ.type)("string"), lb = (0, ZZ.type)("string"), jb = class extends UZ {
      constructor() {
        super(...arguments), (0, GZ.b)(this, "meshKind", Pb, this), (0, GZ.b)(this, "meshOpts", Mb, this), (0, GZ.b)(this, "pose", Ab, this), (0, GZ.b)(this, "leaderboardTop", sb, this)
      }
    }, Pb = (0, bZ.b)(jb.prototype, "meshKind", [vb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Mb = (0, bZ.b)(jb.prototype, "meshOpts", [ab], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Ab = (0, bZ.b)(jb.prototype, "pose", [cb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), sb = (0, bZ.b)(jb.prototype, "leaderboardTop", [lb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function pZ(GG) {
      return Object.keys(ZZ.Metadata.getFields(GG))
    }
    const fZ = pZ(VZ);
    for (const Gw of wZ.t)
      if (!fZ.includes(Gw)) throw new Error(`Mob Schema is missing a networked property: "${Gw}"`);
    const QZ = pZ((qb = (0, ZZ.type)("string"), nb = (0, ZZ.type)("float32"), gb = (0, ZZ.type)("float32"), eb = (0, ZZ.type)("float32"), Rb = (0, ZZ.type)("float32"), Tb = class extends UZ {
      constructor() {
        super(...arguments), (0, GZ.b)(this, "soundName", Hb, this), (0, GZ.b)(this, "volume", tb, this), (0, GZ.b)(this, "refDistance", Db, this), (0, GZ.b)(this, "maxHearDist", Nb, this), (0, GZ.b)(this, "rate", Ob, this)
      }
    }, Hb = (0, bZ.b)(Tb.prototype, "soundName", [qb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), tb = (0, bZ.b)(Tb.prototype, "volume", [nb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Db = (0, bZ.b)(Tb.prototype, "refDistance", [gb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return LZ.l
      }
    }), Nb = (0, bZ.b)(Tb.prototype, "maxHearDist", [eb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return LZ.e
      }
    }), Ob = (0, bZ.b)(Tb.prototype, "rate", [Rb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Tb));
    for (const Gw of SZ.j)
      if (!QZ.includes(Gw)) throw new Error(`AudioEntity Schema is missing a replicated property: "${Gw}"`);
    var KZ = ZG(38848),
      hZ = ZG(1198),
      dZ = ZG(604),
      JZ = ZG(38629),
      rZ = ZG(4255),
      zZ = ZG(352),
      EZ = ZG(37618),
      oZ = ZG(38503),
      XZ = ZG(2222),
      uZ = ZG(37587),
      iZ = ZG(38872),
      CZ = ZG(37755),
      WZ = ZG(364),
      mZ = ZG.n(WZ),
      IZ = ZG(38345),
      FZ = ZG(37426),
      vZ = ZG(38479),
      aZ = ZG(38529);
    class cZ {
      constructor(GG, bG) {
        this.bloxd = GG, this.eId = bG, this.wf = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.pK = !1, this.wf = GG.wf
      }
      initClient(GG) {
        var bG, ZG, wG;
        this.colyseusEntity = GG, this.meshKind = GG.meshKind, this.meshOpts = GG.meshOpts, this.leaderboardTop = GG.leaderboardTop, this.wf.Hr.add([GG.x, GG.y, GG.z], 1, 1, null, null, !1, !1, this.eId), this.wf.Hr.bM(this.eId, "smoothToServerPos");
        const SG = "Person" === this.meshKind;
        this.wf.Hr.bM(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...SG ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: SG ? [{
            nodeName: "HeadMesh",
            softTolerance: iZ.k,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = xb.l.subscribe(`otherEntitySettings|${this.eId}|canSee`, (GG => {
          this.updateHidingMeshMgr()
        }));
        const LG = () => {
          const GG = this.wf.Hr.lbG(this.eId);
          if (!GG) return;
          const bG = (0, CZ.j)(this.eId);
          if ("number" === typeof GG.Ql) {
            var ZG, wG, SG, LG;
            const yG = null === (ZG = (0, XZ.k)("head", null === (SG = this.getSpec()) || void 0 === SG || null === (LG = SG.opts.textures) || void 0 === LG ? void 0 : LG.head)) || void 0 === ZG || null === (wG = ZG.personModel) || void 0 === wG ? void 0 : wG.fullBody;
            return this.wf.HK.Vl.setPickable(GG.Ql, bG && !yG), void(0, FZ.updatePersonAttachmentPickability)(this.wf, this.eId, bG)
          }
          const yG = GG.mesh;
          if (yG)
            for (const kG of [yG, ...yG.getChildMeshes(!1)]) "qh" in kG && !kG.name.startsWith("Cape|") && (kG.qh = bG)
        };
        this.canAttackSub = xb.l.subscribe(`otherEntitySettings|${this.eId}|canAttack`, LG), this.interactableSub = xb.l.subscribe(`otherEntitySettings|${this.eId}|interactable`, LG), this.overlayColourSub = xb.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (GG => {
          this.updateOverlayColour(GG)
        })), this.opacitySub = xb.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (GG => {
          this.updateOpacity(GG)
        })), this.zIndexSub = xb.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (GG => {
          this.updateZIndex(GG)
        }));
        const yG = this.wf.JA[this.wf.sA][this.eId];
        this.updateOverlayColour(null !== (bG = null === yG || void 0 === yG ? void 0 : yG.overlayColour) && void 0 !== bG ? bG : null), this.updateOpacity(null !== (ZG = null === yG || void 0 === yG ? void 0 : yG.opacity) && void 0 !== ZG ? ZG : 1), this.updateZIndex(null !== (wG = null === yG || void 0 === yG ? void 0 : yG.zIndex) && void 0 !== wG ? wG : 0), this.multilineTextBoxSub = (0, uZ.o)(this.wf, this.eId)
      }
      onChangeClient(GG, bG) {
        if ("xRotation" === GG || "yRotation" === GG || "zRotation" === GG)(0, uZ.p)(this.wf, this.eId, GG, bG);
        else if ("pose" === GG) {
          const GG = this.wf.Hr.qbG(this.eId);
          GG && (GG.pose = bG || "standing")
        } else "meshKind" === GG || "meshOpts" === GG ? (this[GG] = bG, this.queueMeshRebuild()) : "name" === GG && "" !== bG ? this.updateHidingMeshMgr() : "leaderboardTop" === GG && (this.leaderboardTop = bG, xb.l.xh(`leaderboardTop|${this.eId}`, bG))
      }
      disposeClient() {
        this.pK = !0, this.wf.Hr.deleteEntity(this.eId), xb.l.unsubscribe(this.canSeeSub), xb.l.unsubscribe(this.canAttackSub), xb.l.unsubscribe(this.interactableSub), xb.l.unsubscribe(this.overlayColourSub), xb.l.unsubscribe(this.opacitySub), xb.l.unsubscribe(this.zIndexSub), xb.l.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var GG, bG;
        return {
          canSee: null !== (GG = null === (bG = this.wf.JA[this.wf.sA][this.eId]) || void 0 === bG ? void 0 : bG.canSee) && void 0 !== GG && GG,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var GG, bG, ZG;
        const {
          wf: wG
        } = this, {
          Hr: SG
        } = wG, LG = this.getCurrentHidingMeshMgrState();
        if ((0, zZ.ze)(this.previousHidingMeshManagerState, LG)) return;
        if (this.previousHidingMeshManagerState = LG, SG.YM(this.eId, "hidingMeshManager"), null === (GG = wG.JA[wG.sA][this.eId]) || void 0 === GG || !GG.canSee) return;
        const yG = this.getSpec();
        if (!yG) return;
        const {
          type: kG,
          opts: UG
        } = yG;
        "Person" === kG && (UG.textures = (0, XZ.r)(UG.textures)), UG.eId = this.eId, SG.bM(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var GG, bG, ZG;
            "Leaderboard" === kG && (UG.leaderboardTop = this.leaderboardTop);
            const LG = this.bloxd.client.meshCreator.getEntityMesh(kG, UG, (GG => {
              var bG, ZG;
              if ("number" === typeof GG) {
                var SG, LG, yG;
                const bG = wG.HK.Vl;
                bG.setEntityId(GG, this.eId);
                const ZG = "Person" === kG && (null === (SG = (0, XZ.k)("head", null === (yG = UG.textures) || void 0 === yG ? void 0 : yG.head)) || void 0 === SG || null === (LG = SG.personModel) || void 0 === LG ? void 0 : LG.fullBody);
                return void bG.setPickable(GG, (0, CZ.j)(this.eId) && !ZG)
              }
              const YG = GG;
              for (const kG of [YG, ...YG.getChildMeshes(!1)]) void 0 === kG.qh || kG.name.startsWith("Cape|") || (kG.qh = (0, CZ.j)(this.eId), kG.metadata ??= new wG.HK.nh, kG.metadata.eId = this.eId);
              this.updateOpacity(null !== (bG = null === (ZG = wG.JA[wG.sA][this.eId]) || void 0 === ZG ? void 0 : ZG.opacity) && void 0 !== bG ? bG : 1)
            }));
            if (!LG) return;
            const {
              Ql: yG,
              mesh: YG,
              meshOffset: VG,
              nameYOffset: pG,
              modelLoaded: fG
            } = LG;
            null === fG || void 0 === fG || fG.then((() => {
              var GG;
              (null === (GG = SG.lbG(this.eId)) || void 0 === GG ? void 0 : GG.mesh) === YG && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const QG = null === yG ? null : wG.HK.Vl.CwG(yG, 0);
            if (SG.bM(this.eId, SG.names.mesh, {
                Ql: yG,
                DZG: QG,
                mesh: YG,
                rkG: !1,
                OZG: "Leaderboard" !== kG,
                offset: VG.slice(),
                JkG: "ParticleEmitter" === kG && UG.followTargetMeshOffset ? GG => {
                  var bG;
                  mZ().copy(GG, VG);
                  const ZG = null === (bG = SG.XZG(this.eId)) || void 0 === bG ? void 0 : bG.SK,
                    wG = void 0 === ZG ? null : SG.qbG(ZG);
                  if (wG) {
                    var LG, yG;
                    const bG = this.bloxd.getEntityHeading(null !== (LG = wG.ridingVehicleEId) && void 0 !== LG ? LG : ZG, !0),
                      SG = Math.sin(bG),
                      kG = Math.cos(bG);
                    GG[0] += wG.meshOffset[0] * kG + wG.meshOffset[2] * SG, GG[1] += wG.meshOffset[1], GG[2] += wG.meshOffset[2] * kG - wG.meshOffset[0] * SG;
                    const UG = null !== (yG = wG.ridingVehicleEId) && void 0 !== yG ? yG : null;
                    null !== UG && (0, aZ.b)(this.wf, UG, GG)
                  }
                } : null
              }), "Person" === kG) {
              var KG, hG, dG, JG;
              SG.bM(this.eId, SG.names.meshAttachments, {
                personFullBody: null !== (KG = null === (hG = (0, XZ.k)("head", null === (JG = UG.textures) || void 0 === JG ? void 0 : JG.head)) || void 0 === hG || null === (dG = hG.personModel) || void 0 === dG ? void 0 : dG.fullBody) && void 0 !== KG && KG
              });
              for (const GG of hZ.x) {
                var rG, zG, EG;
                const bG = null === (rG = UG.textures) || void 0 === rG ? void 0 : rG[GG];
                bG && null !== (zG = (0, XZ.k)(GG, bG)) && void 0 !== zG && null !== (EG = zG.attachments) && void 0 !== EG && EG.length && oZ.d.Player.meshApi.updatePlayerCosmetic(this.eId, yG, GG, bG)
              }
              SG.bM(this.eId, SG.names.moveState), SG.bM(this.eId, "updateWalkingState", {
                Ql: yG,
                DZG: QG,
                walkingLegSwingDuration: iZ.u
              }), SG.bM(this.eId, "humanoidMesh", {
                Ql: yG,
                DZG: QG,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), SG.bM(this.eId, "animator", {
                Ql: yG,
                DZG: QG,
                modelLifeformType: "Player"
              }), vZ.h.hasAnimation("Person") && SG.bM(this.eId, "rigAnimation", {
                target: "Person",
                Ql: yG
              }), SG.qbG(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === kG && null !== yG) {
              SG.bM(this.eId, "animator", {
                Ql: yG,
                DZG: QG,
                modelLifeformType: null
              });
              const GG = (0, JZ.v)(UG.blockName);
              null !== GG && SG.bM(this.eId, "rigAnimation", {
                target: GG,
                Ql: yG
              })
            }
            SG.qkG(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: pG
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === UG.autoRotate && (SG.YM(this.eId, "meshRotation"), SG.bM(this.eId, "autoRotate"));
            const {
              lineToEId: oG
            } = UG;
            (0, dZ.L)(oG) || SG.bM(this.eId, "lineToEntity", {
              lineToEId: oG
            });
            const XG = wG.JA[wG.sA][this.eId];
            this.updateOverlayColour(null !== (GG = null === XG || void 0 === XG ? void 0 : XG.overlayColour) && void 0 !== GG ? GG : null), this.updateOpacity(null !== (bG = null === XG || void 0 === XG ? void 0 : XG.opacity) && void 0 !== bG ? bG : 1), this.updateZIndex(null !== (ZG = null === XG || void 0 === XG ? void 0 : XG.zIndex) && void 0 !== ZG ? ZG : 0)
          },
          removeMeshComponent: () => {
            "Person" !== kG && "BloxdBlock" !== kG || SG.YM(this.eId, "rigAnimation"), SG.YM(this.eId, SG.names.mesh), SG.SbG(this.eId, SG.names.meshAttachments) && SG.YM(this.eId, SG.names.meshAttachments), SG.YM(this.eId, "entityName"), SG.YM(this.eId, "autoRotate"), SG.YM(this.eId, "lineToEntity"), "Person" === kG ? (SG.YM(this.eId, SG.names.moveState), SG.YM(this.eId, "updateWalkingState"), SG.YM(this.eId, "humanoidMesh"), SG.YM(this.eId, "animator")) : "BloxdBlock" === kG && SG.YM(this.eId, "animator")
          },
          hideDist: null !== (bG = UG.hideDist) && void 0 !== bG ? bG : 80,
          movingHideDist: null !== (ZG = UG.hideDist) && void 0 !== ZG ? ZG : 120,
          displayOutsideLoadedChunk: UG.hideDist > 100,
          immediatelyUpdate: !0,
          bU: "BloxdBlock" === kG ? UG.blockName : kG
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.pK || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, rZ.e)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(GG) {
        var bG, ZG;
        if ("Person" !== this.meshKind) return;
        let wG = new EZ.e(0, 0, 0, 0);
        if (null !== GG) {
          const bG = (0, zZ.db)(GG);
          wG = new EZ.e(bG[0] / 255, bG[1] / 255, bG[2] / 255, .5)
        }
        const SG = null !== (bG = null === (ZG = this.wf.Hr.lbG(this.eId)) || void 0 === ZG ? void 0 : ZG.Ql) && void 0 !== bG ? bG : null;
        null !== SG && oZ.d.Player.meshApi.updateMeshOverlayColour(SG, wG)
      }
      updateZIndex(GG) {
        var bG;
        if ("Person" !== this.meshKind) return;
        const ZG = null === (bG = this.wf.Hr.lbG(this.eId)) || void 0 === bG ? void 0 : bG.Ql;
        "number" === typeof ZG && this.wf.HK.Vl.setRenderingGroupId(ZG, GG)
      }
      updateOpacity(GG) {
        const bG = this.wf.Hr.lbG(this.eId);
        bG && ("number" !== typeof bG.Ql ? bG.mesh && "ParticleEmitter" !== this.meshKind && (0, IZ.f)(bG.mesh, GG) : oZ.d.Player.meshApi.updateMeshOpacity(bG.Ql, GG))
      }
    }
    var lZ = ZG(39362);
    class jZ {
      constructor(GG, bG) {
        this.eId = bG, this.wf = void 0, this.schema = void 0, this.wf = GG.wf
      }
      initClient(GG) {
        this.schema = GG, this.wf.Hr.add([GG.x, GG.y, GG.z], .1, .1, null, null, !1, !1, this.eId), this.wf.Hr.bM(this.eId, "smoothToServerPos"), lZ.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(GG) {
        SZ.j.includes(GG) && lZ.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        lZ.e.remove(this.eId), this.wf.Hr.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: GG,
          volume: bG,
          refDistance: ZG,
          maxHearDist: wG,
          rate: SG
        } = this.schema;
        return {
          soundName: GG,
          volume: bG,
          refDistance: ZG,
          maxHearDist: wG,
          rate: SG
        }
      }
    }
    var PZ = ZG(3683),
      MZ = ZG(37122),
      AZ = ZG(6488),
      sZ = ZG(38192),
      qZ = ZG(2751),
      nZ = ZG(38569),
      gZ = ZG(9123),
      eZ = ZG(38883),
      RZ = ZG(38161),
      TZ = ZG(2920);
    class HZ {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.eZG = GG, this.wf = bG, this.setupBudgetMs = ZG, this.now = wG, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.pK = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.gJ = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const GG of this.promotedSetups) {
            this.promotedSetups.delete(GG);
            const bG = this.queuedSetups.get(GG);
            bG && (this.queuedSetups.delete(GG), this.timedSetup(bG, GG))
          }
        }, this.createStateCallbacks = (0, gZ.getStateCallbacks)(GG), this.roomStateCallbacks = this.createStateCallbacks(GG.state), this.roomState = GG.state, this.setupBudgetLeftMs = ZG, this.lastRefillMs = wG()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.eZG.onStateChange(this.setUpPromoted), this.wf.on("beforeInputs", this.onFrame), this.wf.on("Tp", this.gJ)
      }
      setUpQueuedEntities(GG) {
        var bG;
        if ((null === (bG = (0, qZ.e)().client.getMsgHandler()) || void 0 === bG ? void 0 : bG.eZG) !== this.eZG) return this.wf.off("beforeInputs", this.onFrame), this.wf.off("Tp", this.gJ), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (GG && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (mZ().copy(tZ, this.wf.Hr.HJ(this.wf.sA)); this.setupBudgetLeftMs > 0;) {
            const GG = this.nearestQueued(tZ);
            if (null === GG) return;
            this.setUpIfQueued(GG), this.setUpPromoted()
          }
      }
      nearestQueued(GG) {
        let bG = null,
          ZG = 1 / 0;
        return this.queuedSetups.forEach(((wG, SG) => {
          const LG = function(GG, bG) {
            return (bG.x - GG[0]) ** 2 + (bG.y - GG[1]) ** 2 + (bG.z - GG[2]) ** 2
          }(GG, wG);
          (null === bG || LG < ZG) && (bG = SG, ZG = LG)
        })), bG
      }
      setUpOrQueue(GG, bG) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(GG, bG) ? this.timedSetup(GG, bG) : this.queuedSetups.set(bG, GG)
      }
      mustSetUpNow(GG, bG) {
        const ZG = this.wf.ybG;
        if (bG === ZG) return !0;
        const wG = this.roomState.entities.get(ZG);
        return !(!wG || wG.ridingVehicleEId !== bG && wG.followingEId !== bG) || (DZ(GG.type) === KZ.c || (0, qZ.e)().getFollowingEntities(bG).length > 0)
      }
      setUpIfQueued(GG) {
        const bG = this.queuedSetups.get(GG);
        bG && (this.queuedSetups.delete(GG), this.timedSetup(bG, GG))
      }
      promoteIfQueued(GG) {
        null !== GG && this.queuedSetups.has(GG) && this.promotedSetups.add(GG)
      }
      timedSetup(GG, bG) {
        const ZG = this.now();
        this.setupEntity(GG, bG), this.setupBudgetLeftMs -= this.now() - ZG
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Kr(((GG, bG) => {
          this.wf.ybG ? this.setUpOrQueue(GG, bG) : this.deferEntitySetupUntilInitInfo(GG, bG)
        })), this.roomStateCallbacks.entities.MI(((GG, bG) => {
          const ZG = this.deferredSetups.get(bG);
          ZG && (xb.l.unsubscribe(ZG), this.deferredSetups.delete(bG)), this.queuedSetups.delete(bG), this.detach(bG), (0, qZ.e)().client.disposeEntity(bG)
        }))
      }
      deferEntitySetupUntilInitInfo(GG, bG) {
        const ZG = xb.l.yJ("initInfoReceived", (() => {
          this.deferredSetups.delete(bG), this.setUpOrQueue(GG, bG)
        }));
        this.deferredSetups.set(bG, ZG), (0, PZ.onGameResetOnce)((() => {
          this.deferredSetups.get(bG) === ZG && (xb.l.unsubscribe(ZG), this.deferredSetups.delete(bG)), (0, qZ.e)().updatePositionAndPhysics(this.wf.sA, {
            type: AZ.q.DEFAULT,
            tier: null
          }, !0), (0, qZ.e)().takeHeldPlayerBodySize(this.wf.sA);
          const GG = this.wf.Hr.EbG(this.wf.sA);
          GG && (GG.movementType = AZ.o.NORMAL)
        }))
      }
      setupEntity(GG, bG) {
        const ZG = bG === this.wf.ybG;
        if (ZG)(0, qZ.e)().client.yN(this.wf.sA, null, null);
        else {
          const {
            type: ZG
          } = GG, wG = DZ(ZG);
          if (void 0 === wG) return void
          function(GG, bG) {
            const ZG = String(GG);
            if (NZ.has(ZG)) return;
            NZ.add(ZG);
            const wG = ZG.length > 80 ? `${ZG.slice(0,80)}...` : ZG,
              SG = `No client handler for entity type ${JSON.stringify(wG)}, so entity ${bG} is not set up`;
            console.warn(SG), (0, TZ.reportClientError)("uncaught", SG, "unknown_entity_type")
          }(ZG, bG);
          (0, qZ.e)().client.yN(bG, GG, new wG((0, qZ.e)(), bG, ZG))
        }
        const wG = this.createStateCallbacks(GG);
        if (ZG) return this.setupMapSchemaCallbacks(bG, GG, wG, "armour"), this.setupScalarField(bG, GG, wG, "scale"), this.setupScalarField(bG, GG, wG, "ridingVehicleEId"), this.setupScalarField(bG, GG, wG, "followingEId"), this.setupScalarField(bG, GG, wG, "followingOffset"), void this.setupScalarField(bG, GG, wG, "shouldMatchFollowingEntityRotation");
        for (const SG of pZ(GG.constructor)) GG[SG] instanceof ZZ.MapSchema ? this.setupMapSchemaCallbacks(bG, GG, wG, SG) : this.setupScalarField(bG, GG, wG, SG)
      }
      setupMapSchemaCallbacks(GG, bG, ZG, wG) {
        const SG = ZG[wG],
          LG = new Map;
        SG.Kr(((ZG, SG) => {
          if (this.onEntityFieldChange(GG, bG, wG, {
              key: SG,
              value: ZG
            }), !(ZG instanceof ZZ.Schema)) return;
          const yG = this.createStateCallbacks(ZG),
            kG = [];
          for (const LG of pZ(ZG.constructor)) kG.push(this.listenForFutureChanges(yG, LG, (() => {
            this.onEntityFieldChange(GG, bG, wG, {
              key: SG,
              value: ZG
            })
          })));
          LG.set(SG, (() => {
            for (const GG of kG) GG()
          }))
        })), SG.MI(((ZG, SG) => {
          var yG;
          null === (yG = LG.get(SG)) || void 0 === yG || yG(), LG.delete(SG), this.onEntityFieldChange(GG, bG, wG, {
            key: SG,
            value: null
          })
        })), this.addDetacher(GG, (() => {
          for (const GG of LG.values()) GG();
          LG.clear()
        }))
      }
      setupScalarField(GG, bG, ZG, wG) {
        this.onEntityFieldChange(GG, bG, wG, bG[wG]);
        const SG = this.listenForFutureChanges(ZG, wG, (ZG => {
          this.onEntityFieldChange(GG, bG, wG, ZG)
        }));
        this.addDetacher(GG, SG)
      }
      addDetacher(GG, bG) {
        let ZG = this.detachers.get(GG);
        ZG || (ZG = [], this.detachers.set(GG, ZG)), ZG.push(bG)
      }
      detach(GG) {
        for (const ZG of null !== (bG = this.detachers.get(GG)) && void 0 !== bG ? bG : []) {
          var bG;
          ZG()
        }
        this.detachers.delete(GG)
      }
      listenForFutureChanges(GG, bG, ZG) {
        return GG.listen(bG, ZG, !1)
      }
      onEntityFieldChange(GG, bG, ZG, wG) {
        switch (ZG) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(wG);
            const bG = this.wf.Hr.qbG((0, MZ.d)(GG));
            bG && (bG.ridingVehicleEId = wG);
            break
          }
          case "armour":
            this.handleArmourChange(GG, wG);
            break;
          case "followingEId":
            this.promoteIfQueued(wG), this.handleFollowingEIdChange(GG, bG, wG);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(GG, ZG, wG);
            break;
          case "scale":
            this.handleScaleChange(GG, wG);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(GG, wG);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(GG, wG);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(GG, wG);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(GG, ZG, wG)
        }(0, qZ.e)().client.updateEntityField(GG, ZG, wG)
      }
      handleArmourChange(GG, bG) {
        var ZG, wG;
        const {
          key: SG,
          value: LG
        } = bG;
        (0, oZ.A)(GG, SG, null !== (ZG = null === LG || void 0 === LG ? void 0 : LG.itemName) && void 0 !== ZG ? ZG : null, null !== (wG = null === LG || void 0 === LG ? void 0 : LG.enchantmentTier) && void 0 !== wG ? wG : null)
      }
      handleFollowingEIdChange(GG, bG, ZG) {
        const wG = (0, MZ.d)(GG),
          SG = wG === this.wf.sA;
        if (this.wf.Hr.YM(wG, this.wf.Hr.names.TE), ZG) this.wf.Hr.YM(wG, "smoothToServerPos"), this.wf.Hr.bM(wG, this.wf.Hr.names.TE, {
          SK: (0, MZ.d)(ZG),
          offset: Array.from(bG.followingOffset),
          uZG: bG.shouldMatchFollowingEntityRotation,
          mZG: !0,
          IZG: (GG, wG) => {
            if (mZ().copy(GG, bG.followingOffset), bG.ridingVehicleEId === ZG) {
              const bG = (0, MZ.d)(ZG),
                SG = (0, qZ.e)().getEntityHeading(bG, wG);
              mZ().ck(GG, GG, mZ().ZERO, SG)
            }
          }
        });
        else if (!SG) {
          this.wf.Hr.SbG(wG, "smoothToServerPos") || this.wf.Hr.bM(wG, "smoothToServerPos");
          const GG = this.wf.Hr.getState(wG, "smoothToServerPos"),
            bG = this.wf.Hr.kN(wG).position;
          (0, RZ.setServerPosition)(GG, bG[0], bG[1], bG[2])
        }
      }
      handleRotationChange(GG, bG, ZG) {
        const wG = "xRotation" === bG ? 0 : "yRotation" === bG ? 1 : 2;
        for (const SG of (0, qZ.e)().getFollowingEntities(GG)) {
          const GG = this.wf.Hr.getState(SG, "meshRotation"),
            bG = this.wf.Hr.XZG(SG);
          GG && bG.uZG && (GG.serverSetRotation[wG] = ZG)
        }
      }
      handleScaleChange(GG, bG) {
        const ZG = (0, MZ.d)(GG);
        if (xb.l.xh(`entityScale|${ZG}`, bG), ZG === this.wf.sA) {
          var wG;
          (0, qZ.e)().removeFromEyeHeightCache(ZG);
          const GG = this.wf.Hr.EbG(this.wf.sA),
            bG = null !== (wG = null === GG || void 0 === GG ? void 0 : GG.physicsState) && void 0 !== wG ? wG : {
              type: AZ.q.DEFAULT,
              tier: null
            };
          return void(0, qZ.e)().updatePositionAndPhysics(this.wf.sA, bG, !1)
        }
        const SG = (0, qZ.e)().getLifeformType(ZG);
        if (null === SG) return;
        const {
          physicsBodyWidth: LG,
          physicsBodyHeight: yG
        } = (0, eZ.d)(bG, SG);
        this.wf.Hr.EZG(ZG, LG, yG, LG)
      }
      handleBaseRenderHeadingChange(GG, bG) {
        const ZG = this.wf.Hr.getState(GG, "meshRotation");
        ZG && (ZG.baseRenderRotation[1] = bG);
        for (const wG of (0, qZ.e)().getFollowingEntities(GG)) {
          const GG = this.wf.Hr.getState(wG, "meshRotation"),
            ZG = this.wf.Hr.XZG(wG);
          GG && ZG.uZG && (GG.baseRenderRotation[1] = bG)
        }
      }
      handleFollowingOffsetChange(GG, bG) {
        const ZG = this.wf.Hr.XZG((0, MZ.d)(GG));
        if (ZG && ZG.offset) {
          const GG = bG ? Array.from(bG) : mZ().ZERO;
          ZG.offset[0] = GG[0], ZG.offset[1] = GG[1], ZG.offset[2] = GG[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(GG, bG) {
        const ZG = this.wf.Hr.XZG((0, MZ.d)(GG));
        ZG && (ZG.uZG = null === bG || void 0 === bG || bG)
      }
      handlePositionChange(GG, bG, ZG) {
        if (this.wf.Hr.SbG(GG, "smoothToServerPos")) {
          const wG = this.wf.Hr.getState(GG, "smoothToServerPos");
          (0, RZ.setServerPositionAxis)(wG, OZ[bG], ZG)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Kr(((GG, bG) => {
          this.allItems[bG] = GG, (0, sZ.j)(this.wf, bG, [GG.x, GG.y, GG.z], GG.id, {
            amount: GG.amount,
            attributes: JSON.parse(GG.attributes),
            FS: (0, Bb.d)(this.wf).cantPickUpItem(bG),
            size: GG.size,
            predictedAt: (0, qZ.e)().client.itemDropPrediction.onServerItemAdded(bG)
          });
          const ZG = this.createStateCallbacks(GG);
          for (const wG of pZ(yZ)) this.onItemFieldChange(bG, wG, GG[wG]), this.addDetacher(bG, this.listenForFutureChanges(ZG, wG, (GG => {
            this.onItemFieldChange(bG, wG, GG)
          })))
        })), this.roomStateCallbacks.items.MI(((GG, bG) => {
          delete this.allItems[bG], this.detach(bG), (0, qZ.e)().client.itemDropPrediction.onServerItemRemoved(bG), this.wf.Hr.SbG(bG, this.wf.Hr.names.itemState) && this.wf.Hr.deleteEntity(bG), (0, Bb.d)(this.wf).disposeEntity(bG)
        }))
      }
      onItemFieldChange(GG, bG, ZG) {
        if (bG in OZ) {
          if (this.wf.Hr.SbG(GG, "itemState")) {
            const wG = this.wf.Hr.getState(GG, "smoothToServerPos");
            (0, RZ.setServerPositionAxis)(wG, OZ[bG], ZG), (0, qZ.e)().client.itemDropPrediction.onServerItemMoved(GG)
          }
          return
        }
        if (!this.wf.Hr.SbG(GG, "itemState")) return;
        const wG = this.wf.Hr.getState(GG, "itemState");
        "amount" === bG && ZG !== wG.amount && (wG.creationTime = Date.now()), wG[bG] = "attributes" === bG ? JSON.parse(ZG) : ZG
      }
      dispose() {
        if (!this.pK) {
          this.pK = !0, this.wf.off("beforeInputs", this.onFrame), this.wf.off("Tp", this.gJ), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const GG of this.deferredSetups.values()) xb.l.unsubscribe(GG);
          this.deferredSetups.clear(), this.wf.Hr.YM(this.wf.sA, this.wf.Hr.names.TE);
          for (const GG in this.allItems) this.wf.Hr.deleteEntity(GG), delete this.allItems[GG];
          for (const GG of [...this.detachers.keys()]) this.detach(GG);
          (0, Bb.d)(this.wf).clear();
          for (const GG of (0, qZ.e)().client.iterateEntityIds())(0, qZ.e)().client.disposeEntity(GG)
        }
      }
    }
    const tZ = [0, 0, 0];

    function DZ(GG) {
      if ("string" !== typeof GG) return;
      const bG = GG.indexOf("|"),
        ZG = -1 === bG ? GG : GG.slice(0, bG),
        wG = BZ();
      return Object.hasOwn(wG, ZG) ? wG[ZG] : void 0
    }
    const NZ = new Set;
    const OZ = {
      x: 0,
      y: 1,
      z: 2
    };
    let xZ = null;

    function BZ() {
      return null !== xZ || (xZ = {
        ...Object.fromEntries(SZ.m.map((GG => {
          const {
            bU: bG
          } = (0, nZ.c)(GG);
          return [GG, bG]
        }))),
        Pebble: KZ.c,
        Snowball: KZ.c,
        "Snowball Launcher": KZ.c,
        "Reinforced Pebble": KZ.c,
        Bullet: KZ.c,
        "Reinforced Ball": KZ.c,
        Ball: KZ.c,
        Mango: KZ.c,
        "Moonstone Orb": KZ.c,
        ...Object.fromEntries(wZ.u.map((GG => [(0, zZ.ec)(GG), KZ.c]))),
        Arrow: KZ.c,
        "Arrow of Speed": KZ.c,
        "Arrow of Poison": KZ.c,
        "Arrow of Slowness": KZ.c,
        "Arrow of Weakness": KZ.c,
        "Arrow of Knockback": KZ.c,
        "Arrow of Strength": KZ.c,
        "Arrow of Invisibility": KZ.c,
        "Arrow of Jumping": KZ.c,
        "Arrow of Defense": KZ.c,
        "Arrow of Instant Healing": KZ.c,
        "Arrow of Instant Damage": KZ.c,
        "Arrow of Regeneration": KZ.c,
        "Arrow of Haste": KZ.c,
        "Arrow of Shield": KZ.c,
        "Arrow of Double Jump": KZ.c,
        "Arrow of Heat Resistance": KZ.c,
        "Arrow of X-Ray Vision": KZ.c,
        "Arrow of Mining Yield": KZ.c,
        "Arrow of Brain Rot": KZ.c,
        "Arrow of Milk": KZ.c,
        Fireball: KZ.c,
        "Bouncy Bomb": KZ.c,
        RPG: KZ.c,
        "Obby RPG": KZ.c,
        "Super RPG": KZ.c,
        "Grenade Launcher": KZ.c,
        Iceball: KZ.c,
        Coconut: KZ.c,
        "Splash Speed Potion": KZ.c,
        "Splash Defense Potion": KZ.c,
        "Splash Strength Potion": KZ.c,
        "Splash Invisibility Potion": KZ.c,
        "Splash Jump Potion": KZ.c,
        "Splash Knockback Potion": KZ.c,
        "Splash Poison Potion": KZ.c,
        "Splash Speed Potion II": KZ.c,
        "Splash Defense Potion II": KZ.c,
        "Splash Strength Potion II": KZ.c,
        "Splash Jump Potion II": KZ.c,
        "Splash Knockback Potion II": KZ.c,
        "Splash Poison Potion II": KZ.c,
        "Splash Slowness Potion": KZ.c,
        "Splash Slowness Potion II": KZ.c,
        "Splash Weakness Potion": KZ.c,
        "Splash Weakness Potion II": KZ.c,
        "Splash Milk Potion": KZ.c,
        "Splash Instant Damage Potion": KZ.c,
        "Splash Instant Damage Potion II": KZ.c,
        "Splash Instant Healing Potion": KZ.c,
        "Splash Instant Healing Potion II": KZ.c,
        "Splash Regeneration Potion": KZ.c,
        "Splash Regeneration Potion II": KZ.c,
        "Splash Haste Potion": KZ.c,
        "Splash Haste Potion II": KZ.c,
        "Splash Shield Potion": KZ.c,
        "Splash Shield Potion II": KZ.c,
        "Splash Double Jump Potion": KZ.c,
        "Splash Heat Resistance Potion": KZ.c,
        "Splash X-Ray Vision Potion": KZ.c,
        "Splash Mining Yield Potion": KZ.c,
        "Splash Mining Yield Potion II": KZ.c,
        "Splash Brain Rot Potion": KZ.c,
        "Yellow Paintball Gun": KZ.c,
        "White Paintball Gun": KZ.c,
        "Red Paintball Gun": KZ.c,
        "Purple Paintball Gun": KZ.c,
        "Pink Paintball Gun": KZ.c,
        "Orange Paintball Gun": KZ.c,
        "Magenta Paintball Gun": KZ.c,
        "Lime Paintball Gun": KZ.c,
        "Light Gray Paintball Gun": KZ.c,
        "Light Blue Paintball Gun": KZ.c,
        "Green Paintball Gun": KZ.c,
        "Gray Paintball Gun": KZ.c,
        "Cyan Paintball Gun": KZ.c,
        "Brown Paintball Gun": KZ.c,
        "Blue Paintball Gun": KZ.c,
        "Black Paintball Gun": KZ.c,
        "Yellow Heavy Paintball Gun": KZ.c,
        "White Heavy Paintball Gun": KZ.c,
        "Red Heavy Paintball Gun": KZ.c,
        "Purple Heavy Paintball Gun": KZ.c,
        "Pink Heavy Paintball Gun": KZ.c,
        "Orange Heavy Paintball Gun": KZ.c,
        "Magenta Heavy Paintball Gun": KZ.c,
        "Lime Heavy Paintball Gun": KZ.c,
        "Light Gray Heavy Paintball Gun": KZ.c,
        "Light Blue Heavy Paintball Gun": KZ.c,
        "Green Heavy Paintball Gun": KZ.c,
        "Gray Heavy Paintball Gun": KZ.c,
        "Cyan Heavy Paintball Gun": KZ.c,
        "Brown Heavy Paintball Gun": KZ.c,
        "Blue Heavy Paintball Gun": KZ.c,
        "Black Heavy Paintball Gun": KZ.c,
        "Toxin Ball": KZ.c,
        "Splash Aura XP Potion": KZ.c,
        "Splash Aura XP Potion II": KZ.c,
        "Arrow of Aura XP": KZ.c,
        Firecracker: KZ.c,
        "Rainbow Firecracker": KZ.c,
        "White Firecracker": KZ.c,
        "Orange Firecracker": KZ.c,
        "Magenta Firecracker": KZ.c,
        "Light Blue Firecracker": KZ.c,
        "Yellow Firecracker": KZ.c,
        "Lime Firecracker": KZ.c,
        "Pink Firecracker": KZ.c,
        "Gray Firecracker": KZ.c,
        "Light Gray Firecracker": KZ.c,
        "Cyan Firecracker": KZ.c,
        "Purple Firecracker": KZ.c,
        "Blue Firecracker": KZ.c,
        "Brown Firecracker": KZ.c,
        "Green Firecracker": KZ.c,
        "Red Firecracker": KZ.c,
        "Black Firecracker": KZ.c,
        "Firecracker Pebble": KZ.c,
        "Rainbow Firecracker Pebble": KZ.c,
        "White Firecracker Pebble": KZ.c,
        "Orange Firecracker Pebble": KZ.c,
        "Magenta Firecracker Pebble": KZ.c,
        "Light Blue Firecracker Pebble": KZ.c,
        "Yellow Firecracker Pebble": KZ.c,
        "Lime Firecracker Pebble": KZ.c,
        "Pink Firecracker Pebble": KZ.c,
        "Gray Firecracker Pebble": KZ.c,
        "Light Gray Firecracker Pebble": KZ.c,
        "Cyan Firecracker Pebble": KZ.c,
        "Purple Firecracker Pebble": KZ.c,
        "Blue Firecracker Pebble": KZ.c,
        "Brown Firecracker Pebble": KZ.c,
        "Green Firecracker Pebble": KZ.c,
        "Red Firecracker Pebble": KZ.c,
        "Black Firecracker Pebble": KZ.c,
        "Blinding Pebble": KZ.c,
        Poop: KZ.c,
        "Wood Boomerang": KZ.c,
        "Stone Boomerang": KZ.c,
        "Iron Boomerang": KZ.c,
        "Gold Boomerang": KZ.c,
        "Diamond Boomerang": KZ.c,
        "Amethite Boomerang": KZ.c,
        "Magmasteel Boomerang": KZ.c,
        "Rubellite Boomerang": KZ.c,
        "Serpentite Boomerang": KZ.c,
        "Moonstone Boomerang": KZ.c,
        "67 Base Projectile": KZ.c,
        "67 Boosted Projectile": KZ.c,
        "Capitano Grenade": KZ.c,
        "Scatter Pellet": KZ.c,
        "Lucky Bomb": KZ.c,
        "Unlucky Bomb": KZ.c,
        "Swap Orb": KZ.c,
        Mesh: cZ,
        AudioEntity: jZ
      }), xZ
    }
  },
  39414: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      f: () => yG
    });
    var wG = ZG(604),
      SG = ZG(38132);
    const LG = 4e4;
    class yG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = GG, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(GG, bG, ZG) {
        const LG = (0, wG.U)(GG),
          yG = (0, wG.U)(bG),
          kG = (0, wG.U)(ZG),
          UG = this.now();
        if (LG !== this.lastChunkX || yG !== this.lastChunkY || kG !== this.lastChunkZ) {
          this.lastChunkX = LG, this.lastChunkY = yG, this.lastChunkZ = kG, this.lastChunkId = (0, SG.e)(LG, yG, kG), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, UG);
          for (const [GG, bG] of this.editedAt) {
            if (bG >= UG - 3e5) break;
            this.editedAt.delete(GG)
          }
        } else this.editedAt.set(this.lastChunkId, UG)
      }
      chunksEditedSince(GG) {
        const bG = [];
        for (const [ZG, wG] of this.editedAt) wG >= GG && bG.push(ZG);
        return bG
      }
    }
  },
  39482: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => Qb,
      i: () => gb,
      j: () => cb,
      l: () => eb
    });
    var wG = ZG(3683),
      SG = ZG(8825),
      LG = ZG(37026),
      yG = ZG(1385),
      kG = ZG(37102),
      UG = ZG(39362),
      YG = ZG(39350),
      VG = ZG(3766),
      pG = ZG(38271),
      fG = ZG(39484),
      QG = ZG(1198),
      KG = ZG(333),
      hG = ZG(19),
      dG = ZG(1923),
      JG = ZG(80),
      rG = ZG(29),
      zG = ZG(1956),
      EG = ZG(1873),
      oG = ZG(2965);
    class XG {
      constructor(GG) {
        this.storeForMs = GG, this.clicks = new oG.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const GG = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < GG;) this.clicks.dequeue()
      }
      getNumClicksInMs(GG) {
        let bG = 0;
        return this.clicks.forEach((ZG => {
          ZG > Date.now() - GG && bG++
        })), bG
      }
      getMaxClickSeparationInMs(GG) {
        if (0 === this.clicks.size) return this.storeForMs;
        let bG = 0,
          ZG = Date.now() - GG;
        this.clicks.forEach((wG => {
          wG < Date.now() - GG || (bG = Math.max(bG, Math.abs(wG - ZG)), ZG = wG)
        }));
        const wG = Math.abs(Date.now() - ZG);
        return Math.max(bG, wG)
      }
    }
    class uG {
      constructor(GG) {
        this.storeForMs = GG, this.clickDownDurations = new oG.b
      }
      registerClickDownDuration(GG) {
        this.clickDownDurations.enqueue({
          dur: GG,
          atTime: Date.now()
        });
        const bG = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < bG;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(GG) {
        if (GG > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let bG = 0,
          ZG = 0;
        return this.clickDownDurations.forEach((wG => {
          wG.atTime > Date.now() - GG && (bG++, ZG = Math.max(ZG, wG.dur))
        })), `${bG}:${ZG}`
      }
    }
    var iG = ZG(36836),
      CG = ZG(39487),
      WG = ZG(17),
      mG = ZG(2751),
      IG = ZG(1287),
      FG = ZG(2400),
      vG = ZG(4454),
      aG = ZG(116),
      cG = ZG(38577),
      lG = ZG(38791),
      jG = ZG(604),
      PG = ZG(36833),
      MG = ZG(5),
      AG = ZG(9249),
      sG = ZG(1177),
      qG = ZG(188),
      nG = ZG(39495),
      gG = ZG(39502),
      eG = ZG(39511),
      RG = ZG(38612),
      TG = ZG(39522),
      HG = ZG(38490),
      tG = ZG(3390),
      DG = ZG(1579),
      NG = ZG(36951),
      OG = ZG(2801),
      xG = ZG(36701),
      BG = ZG(36707),
      Gb = ZG(39519),
      bb = ZG(38347);
    const Zb = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function wb() {
      var GG, bG;
      return !(null === (GG = (0, mG.e)().client) || void 0 === GG || null === (bG = GG.freeCameraController) || void 0 === bG || !bG.movesFly())
    }

    function Sb(GG) {
      const bG = GG.on.bind(GG);
      GG.on = (GG, ZG) => {
        zG.H.has(GG) ? bG(GG, ZG) : bG(GG, (bG => {
          var wG;
          return null !== (wG = (0, mG.e)().client) && void 0 !== wG && wG.isReplayMode() ? function(GG) {
            return GG in Zb
          }(GG) && wb() ? ZG(bG) : void 0 : ZG(bG)
        }))
      }
    }
    const Lb = 5e3,
      yb = 1;
    let kb, Ub = yb,
      Yb = 0;
    const Vb = !0;
    let pb = Vb;
    dG.c.subscribe("_ignoreBasicBoards", (GG => {
      pb = GG
    })), (0, wG.onGameReset)((() => {
      pb = Vb
    }));
    let fb = null;
    const Qb = () => fb;
    let Kb, hb, db;
    var Jb, rb, zb, Eb, ob, Xb, ub, ib, Cb;
    const Wb = ["b", 0, 1, 103, 3, 208, "i", 7, 196, 6, 140, 8, 255, "length", 112, "e", 152, "f", "undefined", void 0, "c", "d", 63, "fromCodePoint", 12, "push", "a", 53, 91, 9, "g", 169, 8191, 88, 13, 14, 51, 2, 64, 128, 5, 78, 50, 55, 16, 32, 512, 133, 138, 168, 120, 4, 183, 118, 15, "h", 161, 79, 244, 127, 67, 1023, 31, 18, 42, 24, 10, 19, 137, 65535, 115, 62, 33554432, 67108864, 102, 233, 145, 231, 33, 226, 104, 61, 197, 38, 130, 175, 114, 247, 107, null, 234, !1, 155];

    function mb(...GG) {
      return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = function(...GG) {
        for (ab(GG[Wb[13]] = Wb[2], GG[-Wb[5]] = '~tSHoZldDcnABCYfJFsxyv]}4+[XPh1Q$0:b?r9q*!=EILKN5{GW"`z7(ujw>k3VmpM@&_)|,#8/i26O%;^e.g<UaRT', GG[Wb[0]] = "" + (GG[Wb[1]] || ""), GG[Wb[4]] = GG[Wb[0]].length, GG[Wb[10]] = [], GG[-Wb[8]] = Wb[1], GG[Wb[9]] = Wb[1], GG[Wb[7]] = -Wb[2]), GG[Wb[3]] = Wb[1]; GG[Wb[3]] < GG[Wb[4]]; GG[Wb[3]]++)
          if (GG[Wb[6]] = GG[-Wb[5]].indexOf(GG[Wb[0]][GG[Wb[3]]]), GG[Wb[6]] !== -Wb[2])
            if (GG[Wb[7]] < Wb[1]) GG[Wb[7]] = GG[Wb[6]];
            else {
              ab(GG[Wb[7]] += GG[Wb[6]] * Wb[28], GG[-Wb[8]] |= GG[Wb[7]] << GG[Wb[9]], GG[Wb[9]] += (GG[Wb[7]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
              do {
                ab(GG[Wb[10]].push(GG[-Wb[8]] & Wb[12]), GG[-Wb[8]] >>= Wb[11], GG[Wb[9]] -= Wb[11])
              } while (GG[Wb[9]] > Wb[7]);
              GG[Wb[7]] = -Wb[2]
            } return GG[Wb[7]] > -Wb[2] && GG[Wb[10]].push((GG[-Wb[8]] | GG[Wb[7]] << GG[Wb[9]]) & Wb[12]), Ib(GG[Wb[10]])
      }(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
    }

    function Ib(...GG) {
      return GG[Wb[13]] = Wb[2], typeof Eb !== Wb[18] && Eb ? (new Eb).decode(new ob(GG[Wb[1]])) : typeof Xb !== Wb[18] && Xb ? Xb.from(GG[Wb[1]]).toString("utf-8") : Cb(GG[Wb[1]])
    }

    function Fb(...GG) {
      if (GG[Wb[13]] = Wb[4], GG[Wb[1]] === mb(108) + Wb[21]) return GG[Wb[2]] + GG[Wb[37]]
    }

    function vb() {}

    function ab() {
      ab = function() {}
    }

    function cb(GG) {
      function bG() {
        return GG.Hr.YZG(GG.sA)
      }
      Sb(GG.inputs.down), Sb(GG.inputs.up);
      for (const wG of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const bG = (bG, ZG) => {
          var SG, LG;
          if (wb()) {
            var yG;
            const SG = Zb[wG];
            var kG, UG;
            if (SG) null === (kG = (0, mG.e)().client) || void 0 === kG || null === (UG = kG.freeCameraController) || void 0 === UG || UG.handlefreeCamKeyPress(SG, bG, ZG);
            return void(ZG || null !== (yG = (0, mG.e)().client) && void 0 !== yG && yG.isReplayMode() || (GG.Hr.KZG()[wG] = !1))
          }
          if (null !== (SG = (0, mG.e)().client) && void 0 !== SG && null !== (LG = SG.freeCameraController) && void 0 !== LG && LG.isKeyPressOverriden(bG)) return;
          GG.Hr.KZG()[wG] = ZG
        };
        GG.inputs.down.on(wG, (GG => bG(GG, !0))), GG.inputs.up.on(wG, (GG => bG(GG, !1)))
      }
      GG.inputs.down.on("crouch", (() => {
        if (wb()) return;
        if (!GG.Qr.canCrouch) return;
        const bG = GG.Hr.KZG();
        WG.e.get("clientEscMenuOptions").crouchIsToggle && (bG.crouchToggled = !bG.crouchToggled && !bG.padSneakToggled), bG.padSneakToggled = !1
      }));
      const ZG = () => {
        const GG = bG();
        GG.isGun() && GG.inaccuracyCalculator.jump()
      };
      GG.inputs.down.on("jump", (GG => {
        wb() || (ZG(), Kb(GG))
      }));
      for (const wG of zG.q) GG.inputs.down.on(wG, (GG => {
        var bG, ZG;
        null !== (bG = (0, mG.e)().client) && void 0 !== bG && null !== (ZG = bG.freeCameraController) && void 0 !== ZG && ZG.handlefreeCamKeyPress(wG, GG, !0) && (GG.preventDefault(), GG.stopPropagation())
      })), GG.inputs.up.on(wG, (GG => {
        var bG, ZG;
        null !== (bG = (0, mG.e)().client) && void 0 !== bG && null !== (ZG = bG.freeCameraController) && void 0 !== ZG && ZG.handlefreeCamKeyPress(wG, GG, !1) && (GG.preventDefault(), GG.stopPropagation())
      }));
      GG.inputs.down.on("recordGame", (() => {
        var GG, bG;
        null === (GG = (0, mG.e)().client) || void 0 === GG || null === (bG = GG.gameRecorder) || void 0 === bG || bG.toggleRecording()
      })), GG.inputs.down.on("recordClip", (() => {
        var GG, bG;
        (0, iG.b)() || null === (GG = (0, mG.e)().client) || void 0 === GG || null === (bG = GG.gameRecorder) || void 0 === bG || bG.saveClip()
      }));
      for (const wG of zG.H) GG.inputs.down.on(wG, (() => {
        var GG;
        if ((0, CG.c)()) return;
        if ("replayViewerOpen" === wG) return void hG.l.xh("replayViewer|requested", "toggle");
        const bG = null === (GG = (0, mG.e)().client) || void 0 === GG ? void 0 : GG.gameReplayer;
        ((0, iG.b)() || null !== bG && void 0 !== bG && bG.isReplayMode()) && (null === bG || void 0 === bG || bG.handleAction(wG))
      }));
      const yG = new XG(3e4),
        pG = new uG(4e4);
      let fG = 0;
      const rG = GG => {
          let bG = 0,
            ZG = null;
          const wG = bG => null !== bG && bG === ZG && (ZG = null, GG(), !0);
          return {
            press: () => (bG++, (0, nG.e)() || (wG(ZG), ZG = bG), bG),
            owns: GG => GG === ZG,
            release: wG
          }
        },
        oG = (GG, ZG) => {
          ZG && eb(QG.d.TouchDownFirePrimary), GG ? AG() : ((0, lG.f)(), bG().ywG()), ZG || eb(QG.d.DownFirePrimary), gb(!0), yG.click();
          const SG = yG.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            LG = yG.getMaxClickSeparationInMs(1e4) < 20,
            kG = yG.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (SG || LG || kG) {
            let GG;
            if (SG) GG = 30;
            else if (LG) GG = 50;
            else {
              if (!kG) throw new Error("???");
              GG = 70
            }(0, wG.sendColyMessage)(VG.Gj, GG)
          }
        },
        vG = new gG.b,
        aG = rG((() => {
          gG.b.stopRunning();
          const GG = Date.now() - fG;
          pG.registerClickDownDuration(GG), bG().wwG(), eb(QG.d.UpFirePrimary), gb(!1);
          const ZG = pG.clickDownDurationsCheck(4e4);
          (0, wG.sendColyMessage)(VG.cg, ZG)
        }));
      let cG = 0;
      GG.inputs.down.on("primary-fire", (function(GG) {
        cG = aG.press(), aG.owns(cG) && (fG = Date.now(), Math.abs(performance.now() - GG.timeStamp) > 5e3 || (oG(GG.altKey, "changedTouches" in GG), Kb(GG)))
      })), GG.inputs.up.on("primary-fire", (function(GG) {
        aG.release(cG) && Kb(GG, !0)
      }));
      const jG = () => {
          bG().lYG(), eb(QG.d.DownFireSecondary), gb(!0), GG.RGG && !GG.RGG.position && (0, YG.e)()
        },
        PG = rG((() => {
          bG().ZwG(), eb(QG.d.UpFireSecondary), gb(!1)
        }));
      let MG = 0;
      GG.inputs.down.on("alt-fire", (function(GG) {
        MG = PG.press(), PG.owns(MG) && (jG(), Kb(GG))
      })), GG.inputs.up.on("alt-fire", (function(GG) {
        PG.release(MG) && Kb(GG, !0)
      }));
      const AG = () => bG().AYG();
      GG.inputs.down.on("mid-fire", (() => {
        (0, nG.e)() || AG()
      }));
      const TG = GG => {
          (0, wG.sendColyMessage)(VG.jh, GG, !0)
        },
        kb = GG => {
          (0, wG.sendColyMessage)(VG.kh, {
            mk: GG,
            Ik: Vb()
          }, !0)
        };
      for (const wG of ["SpecialAction1", "SpecialAction2"]) GG.inputs.down.on(wG, (() => {
        TG(wG)
      })), GG.inputs.up.on(wG, (() => {
        kb(wG)
      }));
      const Yb = () => {
        const GG = bG();
        GG.isGun() && GG.reload(Date.now())
      };
      GG.inputs.down.on("ReloadGun", Yb);
      const Vb = () => {
        let bG = "a";
        return GG.physics.testSolid.toString().includes("Xf") || (bG = "b"), bG
      };
      GG.inputs.down.on("OpenInventory", (GG => {
        GG.preventDefault(), (0, DG.z)(GG, "inventory", (0, eG.c)((0, mG.i)()))
      })), GG.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const pb = GG => {
        hG.l.xh("DropItemKeyPressed", GG)
      };
      GG.inputs.down.on("DropItem", (() => {
        pb(GG.Hr.KZG().crouch)
      })), GG.inputs.down.on("OpenShop", (bG => {
        (0, iG.b)() || "inGame" === WG.e.get("gameState") && (0, DG.x)(bG, KG.u.SHOP, !(0, SG.b)(GG.Qr.shopInfo))
      })), GG.inputs.down.on("OpenLobbyLeaderboard", (bG => {
        (0, iG.b)() || "inGame" === WG.e.get("gameState") && (0, DG.x)(bG, KG.u.LOBBY_LEADERBOARD, (0, Gb.b)(GG.Qr))
      })), GG.inputs.down.on("HideUi", (() => {
        hG.l.xh("showUi", !1)
      })), GG.inputs.up.on("HideUi", (() => {
        hG.l.xh("showUi", !0)
      }));
      const Qb = GG => {
        0 === GG && (GG = 10), hG.l.xh("setSelectedInventorySlotI", GG - 1), hG.l.xh("numkeyPressed", GG)
      };
      for (let wG = 1; wG <= 10; wG++) GG.inputs.down.on("HotBarSlot" + wG.toString(), (() => {
        Qb(wG)
      }));
      GG.inputs.down.on("OpenTasksAndLeaderboard", (bG => {
        const ZG = (0, NG.j)();
        ZG ? (0, DG.C)(bG, !0, ZG) : (0, DG.z)(bG, "retentionFeatures", !(!GG.Qr._tasks && !GG.Qr._availableLeaderboards))
      })), GG.inputs.down.on("OpenCodeEditor", (bG => {
        (0, DG.C)(bG, (0, FG.c)((0, IG.d)()), (() => {
          (0, FG.i)(GG.Hr.HJ(GG.sA))
        }))
      })), GG.inputs.bind("ToggleFullCoordinateOverlay", "F3"), GG.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        hG.l.xh("toggleFullCoordinateOverlay")
      }));
      const db = () => {
        (0, mG.e)().client.cameraController.swapCameraZoom()
      };
      GG.inputs.down.on("SwapCameraZoom", db), GG.inputs.down.on("OpenInviteLink", (GG => {
        (0, DG.z)(GG, "inviteLink", JG.featureFlags.canUseInviteLinks)
      })), GG.inputs.bind("Y", "KeyY"), GG.inputs.down.on("Y", (GG => {
        (0, iG.b)() || hG.l.xh("YKeyPressed")
      })), GG.inputs.bind("X", "KeyX"), GG.inputs.down.on("X", (GG => {
        (0, iG.b)() || hG.l.xh("XKeyPressed")
      })), GG.inputs.down.on("OpenEmoteWheel", (() => {
        hG.l.xh("requestEmoteWheelHoldOpen")
      })), GG.inputs.up.on("OpenEmoteWheel", (() => {
        hG.l.xh("requestEmoteWheelHoldRelease")
      })), GG.inputs.down.on("Zoom", (() => {
        if ("inGame" === WG.e.get("gameState")) {
          GG.Hr.getState(GG.sA, "playerCameraAdjustment").zoomKeyPressed = !0, (0, mG.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), GG.inputs.up.on("Zoom", (() => {
        GG.Hr.getState(GG.sA, "playerCameraAdjustment").zoomKeyPressed = !1
      })), lb();
      const Jb = GG => function() {
        return hb(), GG(...arguments)
      };

      function rb(GG) {
        "inGame" !== WG.e.get("gameState") || (0, DG.u)() || (hG.l.xh("ctrlCrouchWithoutFullscreen"), GG.preventDefault())
      }
      fb = {
        primaryFireDown: Jb((GG => {
          const bG = aG.press();
          return aG.owns(bG) && (fG = Date.now(), oG(!1, !1), GG && vG.start()), bG
        })),
        primaryFireUp: Jb((GG => {
          aG.release(GG)
        })),
        altFireDown: Jb((() => {
          const GG = PG.press();
          return PG.owns(GG) && jG(), GG
        })),
        altFireUp: Jb((GG => {
          PG.release(GG)
        })),
        jumpDown: Jb(ZG),
        specialActionDown: Jb(TG),
        specialActionUp: Jb(kb),
        reloadGun: Jb(Yb),
        dropItem: Jb(pb),
        swapCameraZoom: Jb(db),
        pickBlock: Jb(AG)
      }, GG.inputs.down.on("ctrlCrouch", rb), GG.inputs.up.on("ctrlCrouch", rb), GG.inputs.bind("ctrlCrouch", "ControlLeft");
      const zb = GG => {
        "inGame" === WG.e.get("gameState") && GG.ctrlKey && !(0, DG.u)() && GG.preventDefault()
      };
      document.addEventListener("keydown", zb), document.addEventListener("keyup", zb), document.addEventListener("keypress", zb), GG.inputs.bind("Alt", "AltLeft", "AltRight"), GG.inputs.down.on("Alt", (GG => {
        GG.preventDefault()
      }));
      const Eb = bG => (0, HG.g)(GG, bG),
        ob = bG => (0, HG.k)(GG, bG),
        Xb = [0, 0, 0],
        ub = [0, 0, 1];
      GG.on("afterRender", (bG => {
        BG.m.frame(bG, GG.camera.heading, GG.camera.pitch, BG.k.drawn), (0, LG.h)(GG.camera.heading), (0, HG.o)(GG, Xb, ub), (0, mG.e)().client.triggerGameCallback("onAfterRender", bG, {
          cameraHeading: GG.camera.heading,
          cameraPitch: GG.camera.pitch,
          cameraPosition: Xb,
          cameraDirection: ub,
          tanHalfFovX: (0, HG.b)(GG),
          tanHalfFovY: Math.tan(GG.HK.o3().fov / 2),
          screenBandPct: {
            x: tG.b,
            y: (0, tG.g)()
          },
          projectWorldPosToScreenPos: Eb,
          projectWorldPosToViewport: ob
        })
      })), GG.camera.XF = (0, xG.startLookDebug)("js"), GG.inputs.jF = xG.noteLookDroppedCopy, (0, OG.m)("remesh") && (0, bb.i)(GG), GG.on("beforeInputs", (() => {
        if ((0, CG.c)()) return GG.inputs.pD.dx = 0, void(GG.inputs.pD.dy = 0);
        if (GG.camera.pD.dx += GG.inputs.pD.dx, GG.camera.pD.dy += GG.inputs.pD.dy, 0 !== GG.inputs.pD.dx || 0 !== GG.inputs.pD.dy) {
          GG.Hr.getState(GG.sA, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        GG.inputs.pD.dx = 0, GG.inputs.pD.dy = 0
      }));
      let ib = 0;
      const Cb = [0, 0, 0],
        Wb = [0, 0, 0],
        mb = {
          base: Cb,
          max: Wb
        },
        Ib = GG => {
          const bG = qG.d.droppedBlockSize / 2;
          return [0, 1, 2].every((ZG => GG[ZG] >= Cb[ZG] - bG && GG[ZG] <= Wb[ZG] + bG))
        };
      GG.on("Tp", (function(bG) {
        hG.l.xh("noaTick", bG);
        const ZG = (0, mG.e)().client;
        if (ZG.triggerGameCallback("Tp", bG), ZG.isClientGameSessionActive()) try {
          UG.e.Tp(bG)
        } catch (yG) {
          console.error("Error ticking audio entities", yG)
        }
        if (!GG.Hr.kZG(GG.sA).isAlive) return;
        Date.now() - ib > 9e3 && (! function() {
          const GG = (0, mG.i)();
          "number" === typeof GG.Qr.speedMultiplier && "number" === typeof GG.Qr.jumpAmount && (0, wG.sendColyMessage)(VG.Ih, {
            Kk: (0, sG.g)(GG.Qr.speedMultiplier),
            hk: (0, sG.e)(GG.Qr.jumpAmount),
            Jk: (0, sG.g)(GG.Qr.crouchingSpeed),
            rk: (0, sG.g)(GG.Qr.walkingSpeed),
            zk: (0, sG.g)(GG.Qr.runningSpeed),
            Ek: (0, sG.e)(GG.PGG),
            Xk: GG.Hr.EbG(GG.sA).jumpForce,
            uk: GG.Hr.kN(1).width,
            ik: GG.Hr.kN(1).height,
            Ck: GG.Hr.qT(1).Ck
          }, !0)
        }(), ib = Date.now());
        const SG = GG.Hr.KZG();
        if ((SG.jump || SG.forward || SG.backward || SG.left || SG.right || SG.sprint) && hG.l.xh("usedKeyboard"), GG.Hr.RbG(GG.sA) && !0 === GG.Qr.canPickUpItems) {
          const bG = GG.Hr.HJ(GG.sA),
            ZG = (0, EG.o)(Ub),
            SG = (0, EG.s)(Ub);
          Cb[0] = bG[0] - ZG, Cb[1] = bG[1] - .6 * SG, Cb[2] = bG[2] - ZG, Wb[0] = bG[0] + ZG, Wb[1] = bG[1] + qG.d.td + .6 * SG, Wb[2] = bG[2] + ZG;
          const LG = GG.Hr.nkG(mb, GG.Hr.names.autoRotate),
            {
              itemDropPrediction: yG
            } = (0, mG.e)().client,
            UG = wG.offlineInputReplay.holdsInput();
          if (LG.length > 0)
            for (const pG of LG) {
              const bG = GG.Hr.getState(pG, "itemState");
              if (void 0 === bG || Date.now() - bG.creationTime < 500) continue;
              let ZG = pG,
                SG = null;
              if (bG.FS) {
                const GG = yG.pickupTarget(pG, Ib, UG);
                if (null === GG) continue;
                ({
                  Rk: ZG,
                  tk: SG
                } = GG)
              }
              const LG = GG.Hr.getState(ZG, "itemState");
              if (LG.FS && null === SG) continue;
              let fG = 0,
                QG = null,
                KG = !1;
              if (0 === LG.amount) KG = !0;
              else {
                const {
                  amountPickedUp: bG
                } = GG.Hr.gbG(GG.sA).pickUpItem({
                  name: LG.name,
                  typeObj: LG.typeObj,
                  amount: LG.amount,
                  attributes: LG.attributes
                });
                if (fG = bG, 0 === fG) continue;
                QG = RG.e.pickUp(LG, fG), LG.amount -= fG, LG.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === LG.amount ? KG = !0 : LG.creationTime = Date.now() + Lb
              }
              const hG = (0, mG.e)().client.inventoryPrediction.record(QG);
              (0, wG.sendColyMessage)(VG.fh, {
                Rk: null === SG ? ZG : "",
                Tk: fG,
                Hk: YG.d,
                Ty: hG,
                tk: SG
              }, !0), KG && (UG && yG.onPickedUpOffline(ZG, hG, SG), null === SG && GG.Hr.deleteEntity(ZG));
              kG.c.play("pickUp", qG.d.pickupSoundVol).rate(1 + Math.random() * qG.d.pickupSoundRateVariation)
            }
        }
        if (!GG.Hr.lbG(GG.sA)) return;
        const LG = GG.inputs.pD.CbG;
        if (0 !== LG) {
          const bG = LG > 0 ? 1 : -1;
          GG.inputs.state["mid-fire"] || GG.inputs.state.Alt || !GG.Qr.useInventory ? (GG.inputs.state["mid-fire"] && hG.l.xh("requestEmoteWheelClose"), (0, mG.e)().client.cameraController.handleScrollZoom(bG)) : hG.l.xh("ScrollInventorySlot", bG)
        }
      })), dG.c.subscribe("droppedItemScale", (GG => {
        Ub = "number" === typeof GG && isFinite(GG) ? GG : yb
      }))
    }

    function lb() {
      const GG = (0, mG.i)();
      if (GG)
        for (const bG in zG.B) {
          GG.inputs.unbind(bG);
          for (const ZG of zG.B[bG]) GG.inputs.bind(bG, ZG)
        }
    }
    ab(Jb = {}, rb = ["!rJz9NUuvxD/@jMr>QH", "08WDC8`NCvF_{rzPf$*z$6wVn3xOp,^:c&l006>&gx^Gp>[P+yH", "(3Ul+|sm[3dl;?w=i(Z8p?r;;V28b9W:yVt", "=W82Z>VCYsPj|[WXLpX,BG^BN(_29{?s_c[XGWOhRphiY[u}e5!,J7mj0>yyt", "Xrli>j7bvjB^Q^JXKln$P%phjYf3U9,[@:8W1", '&LUia0#WHcAX.egP`|3iU|S=@ces{JZs#W*#u)J"zm]HB|khJt', 'R`"nt5n)xcB,g+/9jLd16GA+ZxdN5HsX`}*{Xu=S', "rce$cu|d?x+725h}Rp+$Lbo?$cAz$N)s`&B8bNzK=Ykd=kNX[Kqo|7Et", "Wl.hk.S=?Cz%}^@+<:s/%3WdwAX,jCVFo}TWAe~", 'V3E$$#}!k`h40or9o8#l83P"sc4', "FE:X~q*4#y3Kkop4RD5{[", '4|QP&,c`GB6K&wPbtuml+9Qd5u({Je.*xVczRe&l#Yh7|[CXvl4l1"1<5s', "#Lb$Xgs4scj27H", 'Sz!$l<aKL(w"}[}!6#r7]9V/fv*', ":&PQC;qx*pvnR5o1OpFzZ7MjDCJ/l[[?|3p$KV~", "aH;W?(|dym,b0J|9,3Bdx6@bEDzi>Xmh=|~0r{VW1w#@HH", ".wOPB9;gnYB}R?bFW|]#9rCdSc;@yJA9%pKc", "nK6{|GIKV`oJ&XM1/w{W=%`h>Y/bgoL[h|:/:%:S", "#37l_8(j7mV#N)iq:&.ht?H`{cQ_E|Aq7L!$]gkt", "q5${WrCt", "`p:h3jv`Pp=YabkbYBLQ4NW}bu*PE)X}HVZnP9oD~Myil90r$WW87.!NZxk", "qp{W_?VWs>t1CJfy23S", "9yn/zqYjnp}iPHe!o|Fzz.f_N`&PE)VhL3wn89NV^>5", 'G[Oc}N7})mozV9&49WX2&:%":us,t', '8&"QJeH+P3<2ef!+cEjD', "A[E2A<{V*y|#CJ?Q<YFWz(6*?cifNSmF", "<q}c3O~", "tz:X#;8BfV_2UYY[{p8h^GgCT3A:{>XhuWYd", "%wCiH,MjjpubvJ>b9l5#1NQhDyM#)Y)Qzu@nI^;!cF:OSr(P$>qcf|;OSzr", "9Wd1f?DDhwO`%H", ',wl"t?Qu0sflXSA9SMm{Z5yD[3Hcz{Q1A|/Zr(mKqy[n/[W*', 'oo!W/_iK"mx51k5:ys]P3K`}0>s^PH~}', '@3!$",!C.m]l=C0?Z>vn', "j|<Qc?o=nFT+Yk{X7L!W|>>SQMpwt", "xK}ibg2V3DI", '{z)i2Ggu@z8{"ey:szyd', "Nc@h7:mB;fxOtr)90H&[WqpbIvpPUS9Q2p%{n<QN.mZcMr0Q2AOcf_41KA", 'Tp>2.iYD{s#%uCq4{EN";9e!6DDCfSC9NWRWm.<BKsdz<+J[G~', ']lGW%"510fhCifsPdVh89{~', "4zzQVKGSeB*3[;syr5)PJ;{NZCrO#,$?}WpDp?Uhps;D?Hx!TA~l", 'hh<d>2Ru>F/%yXQhxuUz"VLbpB{PuoRPrc6PF', "ML}cz:a*&xpY<_5*Q}Ln9&#CX3O{JffXP[%zt>eg_xMw?X>hnuzoNq~", "jHEhm5[4Zjw2L,Srf$(l):sDI`LM~H", "]*VPlG%KFs(%q9CxKWz{TLYS", '(HD6,7`NsfWV]kB[i(d"x_EC{s|f.f|xq[&hC8#W/F^)Qw%[]lH', "&5NPrN$4qm=MXY0Fa~", "?uKQuO3S", '0z/D3,34vjE5X^M42LVPZ>"*Yw*w;5*xnKVo', 'j3I8F"dd5fyi1^Sr}["h%9NCBY)#jC29xsFX2L=KPv', '#5OlH:xx5cAk*Xn9EpY0Tgy"m`XXmfH?q32GR"nDdnj', "ErInL/&K,j1ih,K*WleDS.~", "j&hnNrWxH>8DESsqouD/bw$1%f}F)+t=Xp@Zx", "l$MWQ#8K2YgZj{$=qpKi$65K{Bt^Z>[!Au({>,wtWmQQ}[=9Eh&[jK5S", "QrjW)8aKVV)tXSG*cKy2l>pC)C>bv,T!WQg|vu14{>R`!J~F)~", "UP=$={P8UCH,OHms1&6|F", "(zfiQbe!|ya@#+9s83Dza0n?2A,2g5w!Ml(z@:!uUm2t!,HFkH_Q7.Ru8y", "z5goS5z*}jz%&Hh}bzFlW/c+Jfz", 'Rpd"ai[4djR8QS[?{ziQ5)CCrz2o|)]!$cn$),x`6A)#t', 'Ep[,.eZUrCPdA[b?~c%{}"r;kwx4F>Z+^wn$^":?`jWiq|%[', 'lcViY_7h&zP5k>Th,WDl1"2uxu,PZJTP`H9is3MB{>R+>H', "f|t13.I*WBnrU[ZQmHDcL2G1rjg>x9bFdo,ll`Vt", "k#!1_5%joz!vyH", "L*vn6;F!^f{wg%FX`~", 'Pyi2mKEN5Mu)U9Iq9>T2@:hduY"_s;TPJ[Z7+"I1}jCjPHnx:>F,C?__l', "CBj$_>J?wFHC(XS?", "Zu*/!kpbsxVs(HT}M:ac_:nK6s7iF>#Q,A1im.`}IAk", "L:(#/7t+{MTGr5K[sK$l|_J)hv6AcJU]N:_G/9(%[3GPR4^:&Wtzhw~", 'f*V"$z_}M>!_(o^Xs>*cPb~', 'aL1{M3zjpu7Ar5|xGH7iJuAd"cE', 'i:Ahd?Kjsc_MS;4:2wQ#d?|CYfL_WHqsR:.``/["EAP', 'QhhnH8LNGckw5fo1I&c,$%7hnF>2m429>w&`nGi4Cv"(_ocq#QH', '^Pg|}6!xDj@f={WX7u]0}GB"^VT2ffZs8r1o', "Ao<Q0Nwb1M+", "cok7;_wN_Cg@5,6[,&e[Eb[1I(Ln4N*svfBn27`d23W", "zue$t`Q/>DV{];>b0hw$|_x;EAQ3nZ", ";L^`c7h!aFwMWjk?cKqP;ef+ms>oD|~4jpLo:6@!sxt0+J,Q:uk7euY4Iv", "^pe[ULl?2wwbFJ04I&G$*Vosmc?,ift=X|8D[e^jPp[,2oa]2l|{Z;^K!pZ^t", ")5odPwhdwFU@|9`!aPN{3.vt", 'N|+1Qb(KXYlWe9Cxf[FW@7%",jC/,fc9h>Bd', "FfZdh|ed+FHJ(XSrMW?7mjM4fMG#$Xb1ww+$H8uCvC4", "Kue`<09BPY+", '3F:/;36j,jOoZ5qrK|Q{OGP"B3Hj9{&4Mr=$`WEdcYk', '"W&79&PDNsv71{x!%H.[RN~', "5pHhn9S)/wHjx^yPdK6Po`,lx>ccqS", 'gH7cn5O!=wE"*X04VY3Q4|w!]C"%MjVFaL_Q,>tCsVQ:t', "wy.8$|=jVD{wg%<P/~", "}pHhXN41w3K#iw7b6&+,Z>D1>Ye>,H:}qE%#2i>1ODtzg5X}", "JECnpOeO~B<)SZcxvzdiH,bhp>}yiHw=LQZdEbn1H", "TF$ztKrbL`G3DeJ*pFU#=)__tc,P>HCXJt", "fKA,X9qx1V8h=k}ho[*l>5MsCwB,bG^*", "t8GWS53K`z}X?X^P1&A83>+NrjSW;oe!8~", 'Yl1"5{&BQ>t,~', "jwx85.t+:x~0/9MsoVOoB", "0h`nKrhdlC^2ESu:qF}P3`G12s{{fYw?Qh6opqF!kAvQ<{~E", "^Q=Xx_~", "}}F10kddo", ")5;$?wVtlCZSfG!xvu7i/GDKPv(Y|Ya!3#4#T9~", "~>@hn9WC0ss^:+F[eLT`Q#=KLY>MeSLqts=Wa0Fx`mSj&f=x]t", 'ozE,;"A!Xy~//|qr?&b8A7xh!p`dMrY', 'Y>|"<Loj,yGix[fqPf/2Aeo=CvV)H^w=qr}#l7uC%u<+DHi[AVH', "4$Oi%;8<Ofm)~", "bf/`8_|W9x=Yae31ct", 'jyA$}"YSRySN=CoFRF7P$*jKUm/hJwm}aH^W]_~', '23GhL^0uIAPW)C(bPK$1R6s"wApP}StE:WbnC', "aA&[d;xbuFwY2,rQ/L7o~>34T3}iB?cQ.+Q{!r]S$vif%f$4SEIn", "_}Fz{)>1uprQT_oQ8r*#i_z&tVG_oqm4IW%c", "X*_[l<1sXYa>t", "eY0/b%#uWzR8Y;Lxr}m{jjqbZjRu.e$}", "<l8$D:4S", "1u*s<+1D", "Vk8<", "eK!u:J*6Sgy%vq", "Z<+BM/Ck)H^.mq", "99VuM/3p&<xjzu", "GM+G5JxTAm#y~q", "~Krj)yCk3<xH]q", "~)7ueQT1<);", ",qK[*s51", "k4](6fBA", "M7cM5[EA", "wjJxG", "M7cMF^OK", "XN]8q", "lfd!<Lh2<XE", "TlrNfK|o&bc", ",XgG3%GGPtL", "R=ploIDRLU#", "wnX({4??}<X", "vth0<hhHL#;", "k(?&.3ygfK9", "z[eD(:Wt", 'XQHiW#"Z', "nY1}eKX!", "!s*CV#p", "E_Hii#7Z", "$F,yT*um", "13jPwgPB", "EP4}P`^B", "@rcN", 'g^^JX"jn']), ab(zb = function(...GG) {
      ab(GG[Wb[13]] = Wb[1], GG[Wb[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], GG[Wb[2]] = Wb[19], GG[-Wb[14]] = []);
      try {
        ab(GG[Wb[2]] = Object, GG[-Wb[14]][Wb[25]]("".__proto__.constructor.name))
      } catch (rb) {}
      GG: for (GG[Wb[15]] = Wb[1]; GG[Wb[15]] < GG[Wb[16]][Wb[13]]; GG[Wb[15]]++) try {
        for (GG[Wb[2]] = GG[Wb[16]][GG[Wb[15]]](), GG[Wb[17]] = Wb[1]; GG[Wb[17]] < GG[-Wb[14]][Wb[13]]; GG[Wb[17]]++)
          if (typeof GG[Wb[2]][GG[-Wb[14]][GG[Wb[17]]]] === Wb[18]) continue GG;
        return GG[Wb[2]]
      } catch (rb) {}
      return GG[Wb[2]] || this
    }() || {}, Eb = zb.TextDecoder, ob = zb.Uint8Array, Xb = zb.VK, ub = zb.String || String, ib = zb.Array || Array, Cb = function(...GG) {
      return ab(GG[Wb[13]] = Wb[1], GG[Wb[26]] = new ib(Wb[39]), GG[Wb[0]] = ub[Wb[23]] || ub.fromCharCode, GG[Wb[20]] = []),
        function(...bG) {
          for (ab(bG[Wb[13]] = Wb[2], bG[Wb[2]] = Wb[19], bG[Wb[0]] = Wb[19], bG[Wb[20]] = bG[Wb[1]][Wb[13]], GG[Wb[20]][Wb[13]] = Wb[1]), bG[Wb[21]] = Wb[1]; bG[Wb[21]] < bG[Wb[20]];) ab(bG[Wb[0]] = bG[Wb[1]][bG[Wb[21]]++], bG[Wb[0]] <= Wb[59] ? bG[Wb[2]] = bG[Wb[0]] : bG[Wb[0]] <= 223 ? bG[Wb[2]] = (bG[Wb[0]] & Wb[62]) << Wb[9] | bG[Wb[1]][bG[Wb[21]]++] & Wb[22] : bG[Wb[0]] <= 239 ? bG[Wb[2]] = (bG[Wb[0]] & Wb[54]) << Wb[24] | (bG[Wb[1]][bG[Wb[21]]++] & Wb[22]) << Wb[9] | bG[Wb[1]][bG[Wb[21]]++] & Wb[22] : ub[Wb[23]] ? bG[Wb[2]] = (bG[Wb[0]] & Wb[7]) << Wb[63] | (bG[Wb[1]][bG[Wb[21]]++] & Wb[22]) << Wb[24] | (bG[Wb[1]][bG[Wb[21]]++] & Wb[22]) << Wb[9] | bG[Wb[1]][bG[Wb[21]]++] & Wb[22] : (bG[Wb[2]] = Wb[22], bG[Wb[21]] += Wb[4]), GG[Wb[20]][Wb[25]](GG[Wb[26]][bG[Wb[2]]] || (GG[Wb[26]][bG[Wb[2]]] = GG[Wb[0]](bG[Wb[2]]))));
          return GG[Wb[20]].join("")
        }
    }()), ab(db = (...GG) => {
      ab(GG[Wb[13]] = Wb[2], GG[-Wb[27]] = Wb[1]);
      for (const bG in GG[Wb[1]]) GG[-Wb[27]]++;
      return GG[-Wb[27]]
    }, hb = () => {
      if (Yb++ === Wb[40]) {
        function GG(...GG) {
          for (ab(GG[Wb[13]] = Wb[2], GG[Wb[2]] = 'GMD>%|uoHa[lh6v4Qew]#p9:n/x(y,KdFf~kz}E0172Vq=.@+rA35{BsYgUNb*_OJT;$`tXC!?<m"i)P8^&ScLIWZRj', GG[-Wb[28]] = "" + (GG[Wb[1]] || ""), GG[Wb[20]] = GG[-Wb[28]].length, GG[Wb[36]] = [], GG[Wb[15]] = Wb[1], GG[Wb[31]] = Wb[1], GG[Wb[30]] = -Wb[2]), GG[Wb[11]] = Wb[1]; GG[Wb[11]] < GG[Wb[20]]; GG[Wb[11]]++)
            if (GG[Wb[29]] = GG[Wb[2]].indexOf(GG[-Wb[28]][GG[Wb[11]]]), GG[Wb[29]] !== -Wb[2])
              if (GG[Wb[30]] < Wb[1]) GG[Wb[30]] = GG[Wb[29]];
              else {
                ab(GG[Wb[30]] += GG[Wb[29]] * Wb[28], GG[Wb[15]] |= GG[Wb[30]] << GG[Wb[31]], GG[Wb[31]] += (GG[Wb[30]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
                do {
                  ab(GG[Wb[36]].push(GG[Wb[15]] & Wb[12]), GG[Wb[15]] >>= Wb[11], GG[Wb[31]] -= Wb[11])
                } while (GG[Wb[31]] > Wb[7]);
                GG[Wb[30]] = -Wb[2]
              } return GG[Wb[30]] > -Wb[2] && GG[Wb[36]].push((GG[Wb[15]] | GG[Wb[30]] << GG[Wb[31]]) & Wb[12]), Ib(GG[Wb[36]])
        }

        function bG(...bG) {
          return bG[Wb[13]] = Wb[2], typeof Jb[bG[Wb[1]]] === Wb[18] ? Jb[bG[Wb[1]]] = GG(rb[bG[Wb[1]]]) : Jb[bG[Wb[1]]]
        }

        function ZG(...GG) {
          ab(GG[Wb[13]] = Wb[1], GG[Wb[26]] = function(...GG) {
            function bG(...GG) {
              return GG[Wb[13]] = Wb[37], LG(wG(yG(GG[Wb[1]]), yG(GG[Wb[2]])))
            }

            function ZG(...GG) {
              return GG[Wb[13]] = Wb[4],
                function(...GG) {
                  var bG, ZG, wG, SG;
                  for (ab(GG[Wb[13]] = Wb[37], GG[Wb[60]] = GG[Wb[2]].length, GG[Wb[4]] = Array()), GG[Wb[51]] = Array(Math.ceil(GG[Wb[1]].length / Wb[37])), bG = Wb[1]; bG < GG[Wb[51]].length; bG++) GG[Wb[51]][bG] = GG[Wb[1]].charCodeAt(bG * Wb[37]) << Wb[11] | GG[Wb[1]].charCodeAt(bG * Wb[37] + Wb[2]);
                  for (; GG[Wb[51]].length > Wb[1];) {
                    for (ab(SG = Array(), wG = Wb[1]), bG = Wb[1]; bG < GG[Wb[51]].length; bG++) ab(wG = (wG << Wb[44]) + GG[Wb[51]][bG], ZG = Math.floor(wG / GG[Wb[60]]), wG -= ZG * GG[Wb[60]]), (SG.length > Wb[1] || ZG > Wb[1]) && (SG[SG.length] = ZG);
                    ab(GG[Wb[4]][GG[Wb[4]].length] = wG, GG[Wb[51]] = SG)
                  }
                  for (GG[Wb[40]] = "", bG = GG[Wb[4]].length - Wb[2]; bG >= Wb[1]; bG--) GG[Wb[40]] += GG[Wb[2]].charAt(GG[Wb[4]][bG]);
                  for (GG[Wb[9]] = Math.ceil(GG[Wb[1]].length * Wb[11] / (Math.log(GG[Wb[2]].length) / Math.log(Wb[37]))), bG = GG[Wb[40]].length; bG < GG[Wb[9]]; bG++) GG[Wb[40]] = GG[Wb[2]][Wb[1]] + GG[Wb[40]];
                  return GG[Wb[40]]
                }(wG(yG(GG[Wb[1]]), yG(GG[Wb[2]])), GG[Wb[37]])
            }

            function wG(...GG) {
              GG[Wb[13]] = Wb[37], GG[-Wb[10]] = kG(GG[Wb[1]]), GG[-Wb[10]].length > Wb[44] && (GG[-Wb[10]] = JG(GG[-Wb[10]], GG[Wb[1]].length * Wb[11]));
              var bG = Array(Wb[44]),
                ZG = Array(Wb[44]);
              for (GG[Wb[45]] = Wb[1]; GG[Wb[45]] < Wb[44]; GG[Wb[45]]++) ab(bG[GG[Wb[45]]] = 909522486 ^ GG[-Wb[10]][GG[Wb[45]]], ZG[GG[Wb[45]]] = 1549556828 ^ GG[-Wb[10]][GG[Wb[45]]]);
              return GG[Wb[20]] = JG(bG.concat(kG(GG[Wb[2]])), Wb[46] + GG[Wb[2]].length * Wb[11]), UG(JG(ZG.concat(GG[Wb[20]]), Fb(function(...GG) {
                return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = function(...GG) {
                  for (ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = 'Mf1r4dqG*Fuy8lJO]Xi.khYn5$R7z#UL[~sHEQmN}cVD!:W&agZSeCI9jvBPtTbw2+{0x?"6%3K<(;oA=p)@/>,_^`|', GG[Wb[42]] = "" + (GG[Wb[1]] || ""), GG[Wb[4]] = GG[Wb[42]].length, GG[Wb[21]] = [], GG[Wb[40]] = Wb[1], GG[Wb[43]] = Wb[1], GG[Wb[7]] = -Wb[2]), GG[Wb[11]] = Wb[1]; GG[Wb[11]] < GG[Wb[4]]; GG[Wb[11]]++)
                    if (GG[Wb[6]] = GG[Wb[26]].indexOf(GG[Wb[42]][GG[Wb[11]]]), GG[Wb[6]] !== -Wb[2])
                      if (GG[Wb[7]] < Wb[1]) GG[Wb[7]] = GG[Wb[6]];
                      else {
                        ab(GG[Wb[7]] += GG[Wb[6]] * Wb[28], GG[Wb[40]] |= GG[Wb[7]] << GG[Wb[43]], GG[Wb[43]] += (GG[Wb[7]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
                        do {
                          ab(GG[Wb[21]].push(GG[Wb[40]] & Wb[12]), GG[Wb[40]] >>= Wb[11], GG[Wb[43]] -= Wb[11])
                        } while (GG[Wb[43]] > Wb[7]);
                        GG[Wb[7]] = -Wb[2]
                      } return GG[Wb[7]] > -Wb[2] && GG[Wb[21]].push((GG[Wb[40]] | GG[Wb[7]] << GG[Wb[43]]) & Wb[12]), Ib(GG[Wb[21]])
                }(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
              }(117) + Wb[21], Wb[46], 256)))
            }

            function SG(...bG) {
              function wG(...GG) {
                return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = function(...GG) {
                  for (ab(GG[Wb[13]] = Wb[2], GG[Wb[2]] = '}AKCPtoVeJRjNYOBQGaliDLUIqnMSpsXkgFdfZhHcEWT*[m@4+rxb802|>"`?z,~67%/^v3(=!<&1;)5$_y{].9#u:w', GG[Wb[37]] = "" + (GG[Wb[1]] || ""), GG[Wb[48]] = GG[Wb[37]].length, GG[Wb[51]] = [], GG[Wb[40]] = Wb[1], GG[Wb[50]] = Wb[1], GG[Wb[7]] = -Wb[2]), GG[Wb[47]] = Wb[1]; GG[Wb[47]] < GG[Wb[48]]; GG[Wb[47]]++)
                    if (GG[-Wb[49]] = GG[Wb[2]].indexOf(GG[Wb[37]][GG[Wb[47]]]), GG[-Wb[49]] !== -Wb[2])
                      if (GG[Wb[7]] < Wb[1]) GG[Wb[7]] = GG[-Wb[49]];
                      else {
                        ab(GG[Wb[7]] += GG[-Wb[49]] * Wb[28], GG[Wb[40]] |= GG[Wb[7]] << GG[Wb[50]], GG[Wb[50]] += (GG[Wb[7]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
                        do {
                          ab(GG[Wb[51]].push(GG[Wb[40]] & Wb[12]), GG[Wb[40]] >>= Wb[11], GG[Wb[50]] -= Wb[11])
                        } while (GG[Wb[50]] > Wb[7]);
                        GG[Wb[7]] = -Wb[2]
                      } return GG[Wb[7]] > -Wb[2] && GG[Wb[51]].push((GG[Wb[40]] | GG[Wb[7]] << GG[Wb[50]]) & Wb[12]), Ib(GG[Wb[51]])
                }(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
              }
              bG[Wb[13]] = Wb[2];
              try {
                GG[-Wb[52]]
              } catch (ZG) {
                GG[-Wb[52]] = Wb[1]
              }
              for (ab(bG[Wb[2]] = GG[-Wb[52]] ? wG(Wb[53]) + wG(119) + wG(Wb[50]) : wG(Wb[53]) + wG(121) + wG(122), bG[Wb[0]] = "", bG[Wb[20]] = Wb[19]), bG[Wb[21]] = Wb[1]; bG[Wb[21]] < bG[Wb[1]].length; bG[Wb[21]]++) ab(bG[Wb[20]] = bG[Wb[1]].charCodeAt(bG[Wb[21]]), bG[Wb[0]] += bG[Wb[2]].charAt(bG[Wb[20]] >>> Wb[51] & Wb[54]) + bG[Wb[2]].charAt(bG[Wb[20]] & Wb[54]));
              return bG[Wb[0]]
            }

            function LG(...bG) {
              function wG(...GG) {
                return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = function(...GG) {
                  for (ab(GG[Wb[13]] = Wb[2], GG[-Wb[56]] = 'koWBa!f7?=C.}jb/,eUry9Y5;Du&qNplv{nmEQ3F2c@~]:gRL$AxG#(K)XHZt%izO<^|1T86I+*"s04`SP_dhwVMJ[>', GG[Wb[0]] = "" + (GG[Wb[1]] || ""), GG[Wb[4]] = GG[Wb[0]].length, GG[Wb[21]] = [], GG[Wb[58]] = Wb[1], GG[Wb[17]] = Wb[1], GG[-Wb[57]] = -Wb[2]), GG[Wb[55]] = Wb[1]; GG[Wb[55]] < GG[Wb[4]]; GG[Wb[55]]++)
                    if (GG[Wb[29]] = GG[-Wb[56]].indexOf(GG[Wb[0]][GG[Wb[55]]]), GG[Wb[29]] !== -Wb[2])
                      if (GG[-Wb[57]] < Wb[1]) GG[-Wb[57]] = GG[Wb[29]];
                      else {
                        ab(GG[-Wb[57]] += GG[Wb[29]] * Wb[28], GG[Wb[58]] |= GG[-Wb[57]] << GG[Wb[17]], GG[Wb[17]] += (GG[-Wb[57]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
                        do {
                          ab(GG[Wb[21]].push(GG[Wb[58]] & Wb[12]), GG[Wb[58]] >>= Wb[11], GG[Wb[17]] -= Wb[11])
                        } while (GG[Wb[17]] > Wb[7]);
                        GG[-Wb[57]] = -Wb[2]
                      } return GG[-Wb[57]] > -Wb[2] && GG[Wb[21]].push((GG[Wb[58]] | GG[-Wb[57]] << GG[Wb[17]]) & Wb[12]), Ib(GG[Wb[21]])
                }(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
              }
              bG[Wb[13]] = Wb[2];
              try {
                GG[Wb[17]]
              } catch (ZG) {
                GG[Wb[17]] = ""
              }
              for (ab(bG[Wb[26]] = wG(123) + wG(124) + wG(125) + wG(126) + wG(Wb[59]) + wG(Wb[39]) + wG(129) + "/", bG[Wb[0]] = "", bG[Wb[4]] = bG[Wb[1]].length), bG[Wb[21]] = Wb[1]; bG[Wb[21]] < bG[Wb[4]]; bG[Wb[21]] += Wb[4])
                for (bG[Wb[40]] = bG[Wb[1]].charCodeAt(bG[Wb[21]]) << Wb[44] | (bG[Wb[21]] + Wb[2] < bG[Wb[4]] ? bG[Wb[1]].charCodeAt(bG[Wb[21]] + Wb[2]) << Wb[11] : Wb[1]) | (bG[Wb[21]] + Wb[37] < bG[Wb[4]] ? bG[Wb[1]].charCodeAt(bG[Wb[21]] + Wb[37]) : Wb[1]), bG[Wb[9]] = Wb[1]; bG[Wb[9]] < Wb[51]; bG[Wb[9]]++) bG[Wb[21]] * Wb[11] + bG[Wb[9]] * Wb[9] > bG[Wb[1]].length * Wb[11] ? bG[Wb[0]] += GG[Wb[17]] : bG[Wb[0]] += bG[Wb[26]].charAt(bG[Wb[40]] >>> Wb[9] * (Wb[4] - bG[Wb[9]]) & Wb[22]);
              return bG[Wb[0]]
            }

            function yG(...GG) {
              var bG, ZG;
              for (ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = "", GG[Wb[37]] = -Wb[2]); ++GG[Wb[37]] < GG[Wb[1]].length;) ab(bG = GG[Wb[1]].charCodeAt(GG[Wb[37]]), ZG = GG[Wb[37]] + Wb[2] < GG[Wb[1]].length ? GG[Wb[1]].charCodeAt(GG[Wb[37]] + Wb[2]) : Wb[1]), 55296 <= bG && bG <= 56319 && 56320 <= ZG && ZG <= 57343 && ab(bG = 65536 + ((bG & Wb[61]) << Wb[66]) + (ZG & Wb[61]), GG[Wb[37]]++), bG <= Wb[59] ? GG[Wb[26]] += String.fromCharCode(bG) : bG <= 2047 ? GG[Wb[26]] += String.fromCharCode(192 | bG >>> Wb[9] & Wb[62], Wb[39] | bG & Wb[22]) : bG <= Wb[69] ? GG[Wb[26]] += String.fromCharCode(224 | bG >>> Wb[24] & Wb[54], Wb[39] | bG >>> Wb[9] & Wb[22], Wb[39] | bG & Wb[22]) : bG <= 2097151 && (GG[Wb[26]] += String.fromCharCode(240 | bG >>> Wb[63] & Wb[7], Wb[39] | bG >>> Wb[24] & Wb[22], Wb[39] | bG >>> Wb[9] & Wb[22], Wb[39] | bG & Wb[22]));
              return GG[Wb[26]]
            }

            function kG(...GG) {
              for (ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = Array(GG[Wb[1]].length >> Wb[37])), GG[Wb[0]] = Wb[1]; GG[Wb[0]] < GG[Wb[26]].length; GG[Wb[0]]++) GG[Wb[26]][GG[Wb[0]]] = Wb[1];
              for (GG[Wb[0]] = Wb[1]; GG[Wb[0]] < GG[Wb[1]].length * Wb[11]; GG[Wb[0]] += Wb[11]) GG[Wb[26]][GG[Wb[0]] >> Wb[40]] |= (GG[Wb[1]].charCodeAt(GG[Wb[0]] / Wb[11]) & Wb[12]) << Wb[65] - GG[Wb[0]] % Wb[45];
              return GG[Wb[26]]
            }

            function UG(...GG) {
              for (ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = ""), GG[Wb[0]] = Wb[1]; GG[Wb[0]] < GG[Wb[1]].length * Wb[45]; GG[Wb[0]] += Wb[11]) GG[Wb[26]] += String.fromCharCode(GG[Wb[1]][GG[Wb[0]] >> Wb[40]] >>> Wb[65] - GG[Wb[0]] % Wb[45] & Wb[12]);
              return GG[Wb[26]]
            }

            function YG(...GG) {
              return GG[Wb[13]] = Wb[37], GG[Wb[1]] >>> GG[Wb[2]] | GG[Wb[1]] << Wb[45] - GG[Wb[2]]
            }

            function VG(...GG) {
              return GG[Wb[13]] = Wb[37], GG[Wb[1]] >>> GG[Wb[2]]
            }

            function pG(...GG) {
              return GG[Wb[13]] = Wb[4], GG[Wb[1]] & GG[Wb[2]] ^ ~GG[Wb[1]] & GG[Wb[37]]
            }

            function fG(...GG) {
              return GG[Wb[13]] = Wb[4], GG[Wb[1]] & GG[Wb[2]] ^ GG[Wb[1]] & GG[Wb[37]] ^ GG[Wb[2]] & GG[Wb[37]]
            }

            function QG(GG) {
              return YG(GG, Wb[37]) ^ YG(GG, Wb[34]) ^ YG(GG, 22)
            }

            function KG(...GG) {
              return GG[Wb[13]] = Wb[2], YG(GG[Wb[1]], Wb[9]) ^ YG(GG[Wb[1]], 11) ^ YG(GG[Wb[1]], 25)
            }

            function hG(...GG) {
              return GG[Wb[13]] = Wb[2], YG(GG[Wb[1]], Wb[7]) ^ YG(GG[Wb[1]], Wb[63]) ^ VG(GG[Wb[1]], Wb[4])
            }

            function dG(...GG) {
              return GG[Wb[13]] = Wb[2], YG(GG[Wb[1]], 17) ^ YG(GG[Wb[1]], Wb[67]) ^ VG(GG[Wb[1]], Wb[66])
            }

            function JG(...bG) {
              var ZG, wG, SG, LG, yG, kG, UG, YG, VG, JG, zG, EG;
              for (ab(bG[Wb[13]] = Wb[37], bG[Wb[26]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), bG[Wb[0]] = new Array(Wb[38])), ab(bG[Wb[1]][bG[Wb[2]] >> Wb[40]] |= Wb[39] << Wb[65] - bG[Wb[2]] % Wb[45], bG[Wb[1]][(bG[Wb[2]] + Wb[38] >> Wb[29] << Wb[51]) + Wb[54]] = bG[Wb[2]]), VG = Wb[1]; VG < bG[Wb[1]].length; VG += Wb[44]) {
                for (ab(ZG = bG[Wb[26]][Wb[1]], wG = bG[Wb[26]][Wb[2]], SG = bG[Wb[26]][Wb[37]], LG = bG[Wb[26]][Wb[4]], yG = bG[Wb[26]][Wb[51]], kG = bG[Wb[26]][Wb[40]], UG = bG[Wb[26]][Wb[9]], YG = bG[Wb[26]][Wb[7]]), JG = Wb[1]; JG < Wb[38]; JG++) ab(bG[Wb[0]][JG] = JG < Wb[44] ? bG[Wb[1]][JG + VG] : rG(rG(rG(dG(bG[Wb[0]][JG - Wb[37]]), bG[Wb[0]][JG - Wb[7]]), hG(bG[Wb[0]][JG - Wb[54]])), bG[Wb[0]][JG - Wb[44]]), zG = rG(rG(rG(rG(YG, KG(yG)), pG(yG, kG, UG)), GG[Wb[68]][JG]), bG[Wb[0]][JG]), EG = rG(QG(ZG), fG(ZG, wG, SG)), YG = UG, UG = kG, kG = yG, yG = rG(LG, zG), LG = SG, SG = wG, wG = ZG, ZG = rG(zG, EG));
                ab(bG[Wb[26]][Wb[1]] = rG(ZG, bG[Wb[26]][Wb[1]]), bG[Wb[26]][Wb[2]] = rG(wG, bG[Wb[26]][Wb[2]]), bG[Wb[26]][Wb[37]] = rG(SG, bG[Wb[26]][Wb[37]]), bG[Wb[26]][Wb[4]] = rG(LG, bG[Wb[26]][Wb[4]]), bG[Wb[26]][Wb[51]] = rG(yG, bG[Wb[26]][Wb[51]]), bG[Wb[26]][Wb[40]] = rG(kG, bG[Wb[26]][Wb[40]]), bG[Wb[26]][Wb[9]] = rG(UG, bG[Wb[26]][Wb[9]]), bG[Wb[26]][Wb[7]] = rG(YG, bG[Wb[26]][Wb[7]]))
              }
              return bG[Wb[26]]
            }

            function rG(...GG) {
              return ab(GG[Wb[13]] = Wb[37], GG[Wb[37]] = (GG[Wb[1]] & Wb[69]) + (GG[Wb[2]] & Wb[69]), GG[-Wb[14]] = (GG[Wb[1]] >> Wb[44]) + (GG[Wb[2]] >> Wb[44]) + (GG[Wb[37]] >> Wb[44])), GG[-Wb[14]] << Wb[44] | GG[Wb[37]] & Wb[69]
            }
            return ab(GG[Wb[13]] = Wb[1], GG[-Wb[52]] = Wb[1], GG[Wb[17]] = ""), GG[Wb[68]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...GG) {
                return GG[Wb[13]] = Wb[2], SG(function(...GG) {
                  return GG[Wb[13]] = Wb[2], UG(JG(kG(GG[Wb[1]]), GG[Wb[1]].length * Wb[11]))
                }(yG(GG[Wb[1]])))
              },
              b64: bG,
              any: ZG,
              hex_hmac: function(...GG) {
                return GG[Wb[13]] = Wb[37], SG(wG(yG(GG[Wb[1]]), yG(GG[Wb[2]])))
              },
              b64_hmac: bG,
              any_hmac: ZG
            }
          }(), console.log(GG[Wb[26]]))
        }
        bG(109) in vb && ZG(), (0, rG.p)() && (0, pG[Wb[0]])("4 "), Yb = Wb[1]
      }
    }), Kb = function(GG) {
      function bG(...GG) {
        return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = function(...GG) {
          for (ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = 'p0ZTgfJtLDreRkUQqPEFHl8XSo":7x,=`%]<3&|?(}y4zw~/)+abhCYMI[2!_Bs5jm{G$>A^61K9NiWOV#v@*ud.cn;', GG[Wb[37]] = "" + (GG[Wb[1]] || ""), GG[Wb[20]] = GG[Wb[37]].length, GG[Wb[51]] = [], GG[-Wb[70]] = Wb[1], GG[Wb[71]] = Wb[1], GG[Wb[39]] = -Wb[2]), GG[Wb[11]] = Wb[1]; GG[Wb[11]] < GG[Wb[20]]; GG[Wb[11]]++)
            if (GG[Wb[29]] = GG[Wb[26]].indexOf(GG[Wb[37]][GG[Wb[11]]]), GG[Wb[29]] !== -Wb[2])
              if (GG[Wb[39]] < Wb[1]) GG[Wb[39]] = GG[Wb[29]];
              else {
                ab(GG[Wb[39]] += GG[Wb[29]] * Wb[28], GG[-Wb[70]] |= GG[Wb[39]] << GG[Wb[71]], GG[Wb[71]] += (GG[Wb[39]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
                do {
                  ab(GG[Wb[51]].push(GG[-Wb[70]] & Wb[12]), GG[-Wb[70]] >>= Wb[11], GG[Wb[71]] -= Wb[11])
                } while (GG[Wb[71]] > Wb[7]);
                GG[Wb[39]] = -Wb[2]
              } return GG[Wb[39]] > -Wb[2] && GG[Wb[51]].push((GG[-Wb[70]] | GG[Wb[39]] << GG[Wb[71]]) & Wb[12]), Ib(GG[Wb[51]])
        }(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
      }
      if (mb(Wb[84]) + "R" in vb && function(...GG) {
          function bG(...GG) {
            return GG[Wb[13]] = Wb[2], GG[Wb[1]][Wb[2]] * Wb[73] + (GG[Wb[1]][Wb[1]] < Wb[1] ? Wb[72] | GG[Wb[1]][Wb[1]] : GG[Wb[1]][Wb[1]])
          }

          function ZG(...GG) {
            switch (GG[Wb[13]] = Wb[2], ((GG[Wb[1]] & Wb[72]) !== Wb[1]) * Wb[2] + (GG[Wb[1]] < Wb[1]) * Wb[37]) {
              case Wb[1]:
                return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])];
              case Wb[2]:
                return [GG[Wb[1]] % Wb[72] - Wb[72], Math.trunc(GG[Wb[1]] / Wb[73]) + Wb[2]];
              case Wb[37]:
                return [((GG[Wb[1]] + Wb[72]) % Wb[72] + Wb[72]) % Wb[72], Math.round(GG[Wb[1]] / Wb[73])];
              case Wb[4]:
                return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])]
            }
          }
          GG[Wb[13]] = Wb[1], ab(GG[Wb[74]] = bG([Wb[37], Wb[51]]), GG[-Wb[75]] = bG([Wb[2], Wb[37]]), GG[Wb[20]] = GG[Wb[74]] + GG[-Wb[75]], GG[Wb[76]] = GG[Wb[20]] - GG[-Wb[75]], GG[Wb[51]] = GG[Wb[76]] * Wb[37], GG[Wb[40]] = GG[Wb[51]] / Wb[37], console.log(ZG(GG[Wb[20]])), console.log(ZG(GG[Wb[76]])), console.log(ZG(GG[Wb[51]])), console.log(ZG(GG[Wb[40]])))
        }(), (arguments[bG(131)] > Wb[2] && arguments[Wb[2]] !== Wb[19] ? arguments[Wb[2]] : Wb[91]) && (0, TG[Wb[21]])(GG)) {
        function wG(...GG) {
          for (ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = '$?!:*&u58+1>{,0(y/7#F|nY2cJ@ho]avj^VOC~Re6;B9"X`dp)}=z<HQAs4SUrN[fEtL_IklP.Kg3wDMqbWTx%ZGmi', GG[-Wb[77]] = "" + (GG[Wb[1]] || ""), GG[Wb[78]] = GG[-Wb[77]].length, GG[Wb[21]] = [], GG[Wb[15]] = Wb[1], GG[-Wb[79]] = Wb[1], GG[Wb[7]] = -Wb[2]), GG[Wb[55]] = Wb[1]; GG[Wb[55]] < GG[Wb[78]]; GG[Wb[55]]++)
            if (GG[Wb[47]] = GG[Wb[26]].indexOf(GG[-Wb[77]][GG[Wb[55]]]), GG[Wb[47]] !== -Wb[2])
              if (GG[Wb[7]] < Wb[1]) GG[Wb[7]] = GG[Wb[47]];
              else {
                ab(GG[Wb[7]] += GG[Wb[47]] * Wb[28], GG[Wb[15]] |= GG[Wb[7]] << GG[-Wb[79]], GG[-Wb[79]] += (GG[Wb[7]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
                do {
                  ab(GG[Wb[21]].push(GG[Wb[15]] & Wb[12]), GG[Wb[15]] >>= Wb[11], GG[-Wb[79]] -= Wb[11])
                } while (GG[-Wb[79]] > Wb[7]);
                GG[Wb[7]] = -Wb[2]
              } return GG[Wb[7]] > -Wb[2] && GG[Wb[21]].push((GG[Wb[15]] | GG[Wb[7]] << GG[-Wb[79]]) & Wb[12]), Ib(GG[Wb[21]])
        }

        function SG(...GG) {
          return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = wG(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
        }

        function LG(...GG) {
          function bG(...GG) {
            return GG[Wb[13]] = Wb[2], GG[Wb[1]][Wb[2]] * Wb[73] + (GG[Wb[1]][Wb[1]] < Wb[1] ? Wb[72] | GG[Wb[1]][Wb[1]] : GG[Wb[1]][Wb[1]])
          }

          function ZG(...GG) {
            switch (GG[Wb[13]] = Wb[2], ((GG[Wb[1]] & Wb[72]) !== Wb[1]) * Wb[2] + (GG[Wb[1]] < Wb[1]) * Wb[37]) {
              case Wb[1]:
                return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])];
              case Wb[2]:
                return [GG[Wb[1]] % Wb[72] - Wb[72], Math.trunc(GG[Wb[1]] / Wb[73]) + Wb[2]];
              case Wb[37]:
                return [((GG[Wb[1]] + Wb[72]) % Wb[72] + Wb[72]) % Wb[72], Math.round(GG[Wb[1]] / Wb[73])];
              case Wb[4]:
                return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])]
            }
          }
          GG[Wb[13]] = Wb[1], ab(GG[-Wb[80]] = bG([Wb[37], Wb[51]]), GG[Wb[2]] = bG([Wb[2], Wb[37]]), GG[-Wb[82]] = GG[-Wb[80]] + GG[Wb[2]], GG[Wb[81]] = GG[-Wb[82]] - GG[Wb[2]], GG[Wb[51]] = GG[Wb[81]] * Wb[37], GG[-Wb[83]] = GG[Wb[51]] / Wb[37], console.log(ZG(GG[-Wb[82]])), console.log(ZG(GG[Wb[81]])), console.log(ZG(GG[Wb[51]])), console.log(ZG(GG[-Wb[83]])))
        }
        return void(SG(132) + "U" in vb && LG())
      }
      const ZG = window[bG(Wb[47])];
      if (typeof ZG !== bG(134) + "on" || GG instanceof ZG || (0, MG.F)(GG)) {
        function yG(...GG) {
          for (ab(GG[Wb[13]] = Wb[2], GG[-Wb[76]] = 'znBDToJlNsHfSKLrIX=:xu|%YR8GbqO@5<m?"324ejt~&19]^Zdy}[PEM/A#ipgQ*{>UC)0$+,(cv6W;wV`_.kF!ha7', GG[Wb[37]] = "" + (GG[Wb[1]] || ""), GG[Wb[4]] = GG[Wb[37]].length, GG[Wb[15]] = [], GG[Wb[40]] = Wb[1], GG[Wb[88]] = Wb[1], GG[Wb[55]] = -Wb[2]), GG[Wb[6]] = Wb[1]; GG[Wb[6]] < GG[Wb[4]]; GG[Wb[6]]++)
            if (GG[Wb[29]] = GG[-Wb[76]].indexOf(GG[Wb[37]][GG[Wb[6]]]), GG[Wb[29]] !== -Wb[2])
              if (GG[Wb[55]] < Wb[1]) GG[Wb[55]] = GG[Wb[29]];
              else {
                ab(GG[Wb[55]] += GG[Wb[29]] * Wb[28], GG[Wb[40]] |= GG[Wb[55]] << GG[Wb[88]], GG[Wb[88]] += (GG[Wb[55]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
                do {
                  ab(GG[Wb[15]].push(GG[Wb[40]] & Wb[12]), GG[Wb[40]] >>= Wb[11], GG[Wb[88]] -= Wb[11])
                } while (GG[Wb[88]] > Wb[7]);
                GG[Wb[55]] = -Wb[2]
              } return GG[Wb[55]] > -Wb[2] && GG[Wb[15]].push((GG[Wb[40]] | GG[Wb[55]] << GG[Wb[88]]) & Wb[12]), Ib(GG[Wb[15]])
        }

        function kG(...GG) {
          return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = yG(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
        }

        function UG(...GG) {
          var bG;
          ab(GG[Wb[13]] = Wb[1], bG = function(...GG) {
            ab(GG[Wb[13]] = Wb[2], this.rp = GG[Wb[1]], this.length = Wb[1], this.map = {}, this.head = Wb[89], this.tail = Wb[89])
          }, bG.prototype.get = function(...GG) {
            var bG;
            return ab(GG[Wb[13]] = Wb[2], bG = this.map[GG[Wb[1]]]), bG ? (this.remove(bG), this.insert(bG.key, bG.val), bG.val) : -Wb[2]
          }, bG.prototype.put = function(GG, bG) {
            this.map[GG] ? (this.remove(this.map[GG]), this.insert(GG, bG)) : this.length === this.rp ? (this.remove(this.head), this.insert(GG, bG)) : (this.insert(GG, bG), this.length++)
          }, bG.prototype.remove = function(...GG) {
            ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = GG[Wb[1]].prev, GG[Wb[37]] = GG[Wb[1]].next), GG[Wb[37]] && (GG[Wb[37]].prev = GG[Wb[26]]), GG[Wb[26]] && (GG[Wb[26]].next = GG[Wb[37]]), this.head === GG[Wb[1]] && (this.head = GG[Wb[37]]), this.tail === GG[Wb[1]] && (this.tail = GG[Wb[26]]), delete this.map[GG[Wb[1]].key]
          }, bG.prototype.insert = function(...GG) {
            ab(GG[Wb[13]] = Wb[37], GG[Wb[90]] = new List(GG[Wb[1]], GG[Wb[2]]), this.tail ? (this.tail.next = GG[Wb[90]], GG[Wb[90]].prev = this.tail, this.tail = GG[Wb[90]]) : (this.tail = GG[Wb[90]], this.head = GG[Wb[90]]), this.map[GG[Wb[1]]] = GG[Wb[90]])
          }, console.log(bG))
        }
        if (kG(136) + Wb[30] in vb && UG(), GG[kG(Wb[68]) + kG(Wb[48])] === Wb[91])(0, pG[Wb[0]])("2 " + (0, fG[Wb[21]])(GG));
        else if (db(GG) < Wb[66])(0, pG[Wb[0]])("3 ");
        else {
          function YG(...GG) {
            ab(GG[Wb[13]] = Wb[1], GG[Wb[92]] = function(...bG) {
              return ab(bG[Wb[13]] = Wb[4], bG[Wb[26]] = {}), bG[Wb[37]].length !== bG[Wb[1]].length + bG[Wb[2]].length ? Wb[91] : GG[Wb[2]](bG[Wb[1]], bG[Wb[2]], bG[Wb[37]], Wb[1], Wb[1], Wb[1], bG[Wb[26]])
            }, GG[Wb[2]] = function(...bG) {
              return ab(bG[Wb[13]] = Wb[7], bG[Wb[26]] = Wb[91]), bG[Wb[40]] >= bG[Wb[37]].length || (bG[Wb[9]]["" + bG[Wb[4]] + bG[Wb[51]] + bG[Wb[40]]] !== Wb[19] ? bG[Wb[9]]["" + bG[Wb[4]] + bG[Wb[51]] + bG[Wb[40]]] : (bG[Wb[37]][bG[Wb[40]]] === bG[Wb[1]][bG[Wb[4]]] && bG[Wb[37]][bG[Wb[40]]] === bG[Wb[2]][bG[Wb[51]]] ? bG[Wb[26]] = GG[Wb[2]](bG[Wb[1]], bG[Wb[2]], bG[Wb[37]], bG[Wb[4]] + Wb[2], bG[Wb[51]], bG[Wb[40]] + Wb[2], bG[Wb[9]]) || GG[Wb[2]](bG[Wb[1]], bG[Wb[2]], bG[Wb[37]], bG[Wb[4]], bG[Wb[51]] + Wb[2], bG[Wb[40]] + Wb[2], bG[Wb[9]]) : bG[Wb[37]][bG[Wb[40]]] === bG[Wb[1]][bG[Wb[4]]] ? bG[Wb[26]] = GG[Wb[2]](bG[Wb[1]], bG[Wb[2]], bG[Wb[37]], bG[Wb[4]] + Wb[2], bG[Wb[51]], bG[Wb[40]] + Wb[2], bG[Wb[9]]) : bG[Wb[37]][bG[Wb[40]]] === bG[Wb[2]][bG[Wb[51]]] && (bG[Wb[26]] = GG[Wb[2]](bG[Wb[1]], bG[Wb[2]], bG[Wb[37]], bG[Wb[4]], bG[Wb[51]] + Wb[2], bG[Wb[40]] + Wb[2], bG[Wb[9]])), bG[Wb[9]]["" + bG[Wb[4]] + bG[Wb[51]] + bG[Wb[40]]] = bG[Wb[26]], bG[Wb[26]]))
            }, console.log(GG[Wb[92]]))
          }
          kG(139) + "q" in vb && YG(), hb()
        }
      } else {
        function VG(...GG) {
          for (ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = '9mOENVt)So2U4zY?Dn"LRMhv:f5k;i.7$}J_j[cwqZ#b1g{|Wx*y>]=Gds`<Fu3I8~a&@pePHC!l0%+KXB,Q^AT(6/r', GG[Wb[0]] = "" + (GG[Wb[1]] || ""), GG[Wb[84]] = GG[Wb[0]].length, GG[Wb[21]] = [], GG[Wb[15]] = Wb[1], GG[Wb[9]] = Wb[1], GG[-Wb[85]] = -Wb[2]), GG[Wb[11]] = Wb[1]; GG[Wb[11]] < GG[Wb[84]]; GG[Wb[11]]++)
            if (GG[Wb[29]] = GG[Wb[26]].indexOf(GG[Wb[0]][GG[Wb[11]]]), GG[Wb[29]] !== -Wb[2])
              if (GG[-Wb[85]] < Wb[1]) GG[-Wb[85]] = GG[Wb[29]];
              else {
                ab(GG[-Wb[85]] += GG[Wb[29]] * Wb[28], GG[Wb[15]] |= GG[-Wb[85]] << GG[Wb[9]], GG[Wb[9]] += (GG[-Wb[85]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
                do {
                  ab(GG[Wb[21]].push(GG[Wb[15]] & Wb[12]), GG[Wb[15]] >>= Wb[11], GG[Wb[9]] -= Wb[11])
                } while (GG[Wb[9]] > Wb[7]);
                GG[-Wb[85]] = -Wb[2]
              } return GG[-Wb[85]] > -Wb[2] && GG[Wb[21]].push((GG[Wb[15]] | GG[-Wb[85]] << GG[Wb[9]]) & Wb[12]), Ib(GG[Wb[21]])
        }

        function QG(...GG) {
          return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = VG(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
        }

        function KG(...GG) {
          function bG(...GG) {
            return GG[Wb[13]] = Wb[2], GG[Wb[1]][Wb[2]] * Wb[73] + (GG[Wb[1]][Wb[1]] < Wb[1] ? Wb[72] | GG[Wb[1]][Wb[1]] : GG[Wb[1]][Wb[1]])
          }

          function ZG(...GG) {
            switch (GG[Wb[13]] = Wb[2], ((GG[Wb[1]] & Wb[72]) !== Wb[1]) * Wb[2] + (GG[Wb[1]] < Wb[1]) * Wb[37]) {
              case Wb[1]:
                return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])];
              case Wb[2]:
                return [GG[Wb[1]] % Wb[72] - Wb[72], Math.trunc(GG[Wb[1]] / Wb[73]) + Wb[2]];
              case Wb[37]:
                return [((GG[Wb[1]] + Wb[72]) % Wb[72] + Wb[72]) % Wb[72], Math.round(GG[Wb[1]] / Wb[73])];
              case Wb[4]:
                return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])]
            }
          }
          GG[Wb[13]] = Wb[1], ab(GG[Wb[26]] = bG([Wb[37], Wb[51]]), GG[Wb[0]] = bG([Wb[2], Wb[37]]), GG[Wb[37]] = GG[Wb[26]] + GG[Wb[0]], GG[-Wb[86]] = GG[Wb[37]] - GG[Wb[0]], GG[Wb[87]] = GG[-Wb[86]] * Wb[37], GG[Wb[40]] = GG[Wb[87]] / Wb[37], console.log(ZG(GG[Wb[37]])), console.log(ZG(GG[-Wb[86]])), console.log(ZG(GG[Wb[87]])), console.log(ZG(GG[Wb[40]])))
        }
        QG(135) + "M" in vb && KG(), (0, pG[Wb[0]])("5 ")
      }
    }, hG.l.subscribe("customBindingsChanged", (() => {
      lb()
    }));
    let jb = !1,
      Pb = !1;
    const Mb = () => jb || Pb && vG.d.isInGame(),
      Ab = GG => {
        Mb() && GG.preventDefault()
      };
    hG.l.subscribe("displaymodeFullscreenChange", (GG => {
      sb()
    })), hG.l.subscribe("pointerLockUpdate", (GG => {
      jb = GG, sb(), qb()
    })), hG.l.subscribe("freeCursorUpdate", (GG => {
      Pb = GG, sb(), qb()
    }));
    const sb = () => {
        window.removeEventListener("wheel", Ab), aG.isIframed && !(0, yG.n)() && (jb || Pb) && window.addEventListener("wheel", Ab, {
          passive: !1
        })
      },
      qb = () => {
        window.removeEventListener("wheel", nb), (jb || Pb) && window.addEventListener("wheel", nb, {
          passive: !1
        })
      },
      nb = GG => {
        !0 === GG.ctrlKey && Mb() && GG.preventDefault()
      };

    function gb(GG) {
      hG.l.xh("QTEMouseState", {
        isDown: GG
      })
    }

    function eb(GG) {
      var bG, ZG, SG, LG, yG, kG, UG, YG;
      const pG = (0, mG.i)();
      pG.RGG = null !== (bG = function(GG, bG) {
        var ZG, wG;
        if (!pb) return null;
        const SG = GG.bloxd;
        kb ??= SG.getMetaInfo("Board").rootId;
        const LG = null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.K9) && void 0 !== ZG ? ZG : null;
        if (!LG || SG.getMetaInfo(LG).rootId !== kb) return null;
        const yG = null !== (wG = null === bG || void 0 === bG ? void 0 : bG.position) && void 0 !== wG ? wG : null;
        if (SG.playerCanChangePos(GG.sA, yG[0], yG[1], yG[2])) return null;
        const kG = (GG, bG, ZG) => {
          const wG = SG.blockDataOwner.getBlockData(GG, bG, ZG),
            LG = null === wG || void 0 === wG ? void 0 : wG.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return cG.singleLineBoardActions.has(LG)
        };
        if (kG(yG[0], yG[1], yG[2])) return null;
        let UG;
        GG.kbG && (UG = [...GG.kbG], GG.Bx(UG, UG));
        const YG = (UG ? GG.camera.pN : 0) + SG.getBlockReach(GG.sA);
        return GG.pickBlock(UG, GG.UbG, YG, ((bG, ZG, wG, LG) => 0 !== bG && ("Board" !== SG.getMetaInfo(bG).rootName || SG.playerCanChangePos(GG.sA, ZG, wG, LG) || kG(ZG, wG, LG))))
      }(pG, pG.RGG)) && void 0 !== bG ? bG : pG.RGG;
      const fG = null !== (ZG = null === (SG = pG.RGG) || void 0 === SG ? void 0 : SG.position) && void 0 !== ZG ? ZG : null,
        KG = null !== (LG = pG.UbG) && void 0 !== LG ? LG : pG.camera.zB(),
        dG = mG.m.localPlayerPickActionHelper.getPickEntityResult(KG),
        JG = null !== (yG = pG.RGG) && void 0 !== yG && yG.K9 ? (0, AG.i)(pG.RGG.K9) : "Air",
        rG = GG === QG.d.UpFirePrimary || GG === QG.d.UpFireSecondary,
        zG = rG ? "onPlayerClickUp" : "onPlayerClick",
        EG = rG ? GG === QG.d.UpFireSecondary : GG === QG.d.DownFireSecondary,
        oG = !rG && (0, wG.getWasDoubleClick)();
      hG.l.xh("mouseState", {
        AV: GG,
        isDown: !rG
      }), (0, wG.sendColyMessage)(VG.$g, {
        AV: GG,
        sV: oG,
        BL: fG,
        Gy: dG
      }, !0), (0, mG.e)().client.triggerGameCallback(zG, pG.sA, EG, null !== (kG = null === fG || void 0 === fG ? void 0 : fG[0]) && void 0 !== kG ? kG : null, null !== (UG = null === fG || void 0 === fG ? void 0 : fG[1]) && void 0 !== UG ? UG : null, null !== (YG = null === fG || void 0 === fG ? void 0 : fG[2]) && void 0 !== YG ? YG : null, JG, dG)
    }
    window.addEventListener("keydown", (GG => {
      ["ArrowUp", "ArrowDown"].includes(GG.key) && GG.preventDefault()
    })), document.addEventListener("keydown", (GG => {
      (0, PG.e)(GG, (() => {
        const GG = (0, mG.i)();
        return (0, jG.L)(GG) || !1 !== GG.Qr.canCustomiseChar
      }))
    }))
  },
  39495: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      g: () => yG
    });
    var wG = ZG(38839);
    let SG = !1;

    function LG() {
      return SG
    }

    function yG(GG) {
      SG = GG, GG ? wG.d.setMultiplierType("emoteWheel", 0) : wG.d.removeMultiplier("emoteWheel")
    }
  },
  39511: (GG, bG, ZG) => {
    function wG(GG) {
      return Boolean(GG.Qr.useInventory && GG.Qr.useFullInventory && GG.Hr.RbG(GG.sA))
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  39381: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      f: () => SG
    });
    var wG = ZG(37491);

    function SG(GG, bG) {
      return {
        replayedClipName: GG,
        replayedClipAgeSeconds: bG
      }
    }

    function LG(GG, bG, ZG, SG, LG) {
      const yG = function(GG) {
          if ("object" !== typeof GG || null === GG) return null;
          const {
            replayedClipName: bG,
            replayedClipAgeSeconds: ZG
          } = GG;
          return "string" === typeof bG && "number" === typeof ZG ? {
            Rw: bG,
            Tw: ZG
          } : null
        }(ZG),
        kG = null === yG ? ZG : null,
        {
          Rw: UG = null,
          Tw: YG = 0
        } = null !== yG && void 0 !== yG ? yG : {};
      GG.animateEntity(bG, wG.h.Custom, kG, SG, LG, UG, YG)
    }
  },
  39502: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => VG
    });
    var wG = ZG(38791),
      SG = ZG(352),
      LG = ZG(2751);

    function yG() {
      var GG, bG, ZG, wG;
      const yG = (0, LG.i)(),
        kG = null !== (GG = null === (bG = yG.Hr.nbG(yG.sA)) || void 0 === bG ? void 0 : bG.selectedItem) && void 0 !== GG ? GG : null,
        UG = kG ? (0, LG.e)().getItemStat(yG.sA, kG.name, "attackCooldownMs") : null,
        YG = (0, SG.ud)(UG, null === kG || void 0 === kG || null === (ZG = kG.attributes.customAttributes) || void 0 === ZG || null === (wG = ZG.enchantments) || void 0 === wG ? void 0 : wG["Attack Speed"]);
      return Math.max(56, Math.ceil((YG + 30) / 3))
    }
    class kG {
      constructor(GG, bG) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [GG], this.dueMs = GG, this.intervalMs = bG
      }
      spacedBy(GG, bG) {
        if (GG === this.intervalMs) return this;
        const ZG = this.tries[this.tries.length - 1],
          wG = new kG(ZG, GG);
        return wG.dueMs = Math.max(ZG, bG - GG), wG
      }
      nextDueMs() {
        const GG = this.tries[this.tries.length - 1];
        return Math.max(GG + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(GG, bG) {
        this.tries.push(GG), this.tries.length > 3 && this.tries.shift(), this.dueMs = bG
      }
    }
    var UG = ZG(39495),
      YG = ZG(1251);
    class VG {
      constructor() {
        this.timer = null, this.tries = new kG(0, 0), this.check = () => {
          const GG = Date.now(),
            bG = this.tries.spacedBy(yG(), GG),
            ZG = bG.nextDueMs();
          if (GG < ZG) this.schedule();
          else {
            if (bG.noteTry(GG, ZG), this.tries = bG, (0, YG.A)() && !(0, UG.e)()) {
              var SG, kG;
              (0, wG.f)();
              const GG = (0, LG.i)();
              null === (SG = GG.Hr.UZG(GG.sA)) || void 0 === SG || null === (kG = SG.qE) || void 0 === kG || kG.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var GG;
        null === (GG = VG.running) || void 0 === GG || GG.stop(), VG.running = this, this.tries = new kG(Date.now(), yG()), this.schedule()
      }
      static stopRunning() {
        var GG;
        null === (GG = VG.running) || void 0 === GG || GG.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, VG.running === this && (VG.running = null)
      }
      schedule() {
        const GG = Date.now(),
          bG = this.tries.spacedBy(yG(), GG).nextDueMs() - GG;
        this.timer = setTimeout(this.check, Math.min(bG, 100))
      }
    }
    VG.running = null
  },
  39389: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => KG,
      h: () => VG,
      l: () => QG,
      o: () => fG,
      s: () => hG,
      w: () => pG
    });
    var wG = ZG(39396),
      SG = ZG(37587),
      LG = ZG(3683),
      yG = ZG(1903),
      kG = ZG(19),
      UG = ZG(2751);
    const YG = new wG.c;

    function VG() {
      return YG
    }

    function pG() {
      YG.clear()
    }

    function fG() {
      for (const GG of YG.ids()) {
        const bG = YG.getName(GG);
        void 0 !== bG && yG.b.delete(bG)
      }
      pG(), kG.l.xh("playerRosterChanged", YG.ids())
    }

    function QG(GG, bG) {
      var ZG, wG;
      if (YG.has(GG)) return YG.getSetting(GG, bG);
      const SG = (0, UG.i)();
      return null === (ZG = SG.JA[SG.sA]) || void 0 === ZG || null === (wG = ZG[GG]) || void 0 === wG ? void 0 : wG[bG]
    }

    function KG(GG) {
      const {
        added: bG,
        removed: ZG,
        settingChanges: wG
      } = YG.apply(GG);
      for (const {
          playerId: SG,
          name: LG
        }
        of ZG) void 0 === LG || dG(SG) || yG.b.delete(LG);
      for (const {
          playerId: LG,
          settings: yG
        }
        of wG)
        if (dG(LG)) hG(LG, yG);
        else
          for (const GG in yG)(0, SG.k)(LG, GG, yG[GG]);
      (bG.length > 0 || ZG.length > 0) && kG.l.xh("playerRosterChanged", YG.ids())
    }

    function hG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YG.getSettings(GG);
      if (bG) {
        (0, SG.f)(GG);
        for (const ZG in bG)(0, SG.b)(GG, ZG, bG[ZG])
      }
    }

    function dG(GG) {
      return GG === (0, UG.i)().ybG || (0, UG.e)().client.hasEntity(GG)
    }(0, LG.onGameReset)(pG)
  },
  38490: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => WG,
      f: () => XG,
      g: () => iG,
      k: () => CG,
      o: () => mG
    });
    var wG = ZG(37432),
      SG = ZG(38499),
      LG = ZG(364),
      yG = ZG.n(LG),
      kG = ZG(3390);
    const UG = new wG.mK,
      YG = new wG.mK,
      VG = new wG.mK,
      pG = new wG.mK,
      fG = new wG.mK,
      QG = [0, 0, 0],
      KG = {
        x: 0,
        y: 0
      },
      hG = new wG.mK(1, 0, 0),
      dG = new wG.mK(0, 1, 0),
      JG = wG.Matrix.Identity(),
      rG = new wG.Matrix,
      zG = new wG.Matrix,
      EG = new wG.mK,
      oG = new SG.d(0, 0, 0, 0);

    function XG(GG, bG) {
      var ZG, SG;
      const LG = uG(GG, bG);
      if (LG) {
        const GG = LG.x,
          bG = LG.y,
          ZG = GG - 50,
          wG = bG - 50;
        return Math.abs(ZG) <= kG.b && Math.abs(wG) <= (0, kG.g)() ? {
          x: GG,
          y: bG
        } : FG(ZG, wG)
      }
      VG.fGG(bG[0], bG[1], bG[2]),
        function(GG) {
          const bG = GG.HK.GwG(),
            ZG = bG ? wG.Matrix.FromArrayToRef(bG.worldMatrix, 0, zG) : GG.HK.Dv().activeCamera.getWorldMatrix();
          wG.mK.TransformNormalToRef(hG, ZG, pG), pG.normalize(), wG.mK.TransformNormalToRef(dG, ZG, fG), fG.normalize()
        }(GG);
      const yG = wG.mK.Dot(VG, pG);
      let UG = -wG.mK.Dot(VG, fG);
      Math.abs(yG) < .001 && Math.abs(UG) < .001 && (UG = -1);
      const YG = null !== (ZG = null === (SG = GG.HK.GwG()) || void 0 === SG ? void 0 : SG.projectionMatrix) && void 0 !== ZG ? ZG : GG.HK.Dv().activeCamera.getProjectionMatrix().m;
      return FG(yG * YG[0], UG * YG[5])
    }

    function uG(GG, bG) {
      const ZG = GG.HK.Dv(),
        SG = ZG.CK(),
        LG = SG.getRenderWidth(),
        yG = SG.getRenderHeight();
      oG.width = LG, oG.height = yG;
      const kG = GG.HK.GwG(),
        VG = kG ? EG.fGG(kG.eye[0], kG.eye[1], kG.eye[2]) : GG.HK.camera.globalPosition;
      UG.fGG(VG.x + 10 * bG[0], VG.y + 10 * bG[1], VG.z + 10 * bG[2]);
      const pG = kG ? wG.Matrix.FromArrayToRef(kG.viewProjectionMatrix, 0, rG) : ZG.getTransformMatrix();
      return wG.mK.ProjectToRef(UG, JG, pG, oG, YG), YG.z < 0 || YG.z > 1 ? null : (KG.x = YG.x / LG * 100, KG.y = YG.y / yG * 100, KG)
    }

    function iG(GG, bG) {
      return XG(GG, IG(GG, bG))
    }

    function CG(GG, bG) {
      const ZG = uG(GG, IG(GG, bG));
      return ZG && {
        x: ZG.x,
        y: ZG.y
      }
    }

    function WG(GG) {
      var bG, ZG;
      return 1 / (null !== (bG = null === (ZG = GG.HK.GwG()) || void 0 === ZG ? void 0 : ZG.projectionMatrix[0]) && void 0 !== bG ? bG : GG.HK.Dv().activeCamera.getProjectionMatrix().m[0])
    }

    function mG(GG, bG, ZG) {
      const wG = GG.HK.GwG(),
        SG = wG ? wG.worldMatrix : GG.HK.Dv().activeCamera.getWorldMatrix().m,
        LG = GG.zf;
      for (let yG = 0; yG < 3; yG++) bG[yG] = SG[12 + yG] + LG[yG], ZG[yG] = SG[8 + yG];
      yG().normalize(ZG, ZG)
    }

    function IG(GG, bG) {
      const ZG = GG.zf,
        wG = GG.HK.GwG(),
        SG = wG ? EG.fGG(wG.eye[0], wG.eye[1], wG.eye[2]) : GG.HK.camera.globalPosition;
      return QG[0] = bG[0] - ZG[0] - SG.x, QG[1] = bG[1] - ZG[1] - SG.y, QG[2] = bG[2] - ZG[2] - SG.z, yG().normalize(QG, QG), QG
    }

    function FG(GG, bG) {
      return (0, kG.c)(GG, bG, kG.b, (0, kG.g)())
    }
  },
  39362: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => fG
    });
    var wG = ZG(188),
      SG = ZG(364),
      LG = ZG.n(SG),
      yG = ZG(37102),
      kG = ZG(37105),
      UG = ZG(2751);
    const YG = wG.d.td * wG.d.playerEyeToHeightRatio,
      VG = 250,
      pG = 1.1,
      fG = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(GG, bG) {
          this.entities.set(GG, bG)
        }
        update(GG, bG) {
          const ZG = this.entities.get(GG);
          this.entities.set(GG, bG);
          const wG = this.playing.get(GG);
          wG && (ZG && ZG.soundName === bG.soundName ? (wG.sound.setRelativeVolume(bG.volume), wG.sound.rate(bG.rate), wG.sound.setPannerAttr({
            refDistance: bG.refDistance
          })) : this.stopEntity(GG))
        }
        remove(GG) {
          this.stopEntity(GG), this.entities.delete(GG)
        }
        Tp(GG) {
          this.msSinceLastScan += GG, this.msSinceLastScan < VG || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(GG) {
          const bG = this.playing.get(GG);
          bG && (bG.sound.stop(), this.playing.delete(GG))
        }
        startEntity(GG, bG, ZG) {
          const wG = (0, kG.g)(bG.soundName);
          if (!wG) return console.error(`AudioEntityManager: no sound found for "${bG.soundName}", dropping audio entity ${GG}`), void this.remove(GG);
          const SG = yG.c.play(wG, bG.volume, ZG, bG.maxHearDist, bG.refDistance, !0);
          SG.rate(bG.rate), this.playing.set(GG, {
            sound: SG,
            lastPos: LG().clone(ZG)
          })
        }
        scan() {
          const GG = (0, UG.i)();
          if (!GG) return;
          const bG = GG.Hr.HJ(GG.sA);
          if (bG)
            for (const [ZG, wG] of this.entities) {
              if (!GG.Hr.SbG(ZG, "position")) continue;
              const SG = GG.Hr.HJ(ZG),
                yG = LG().sqrDist(bG, SG),
                kG = this.playing.get(ZG);
              if (kG) {
                const GG = wG.maxHearDist * pG;
                yG > GG * GG ? this.stopEntity(ZG) : LG().equals(SG, kG.lastPos) || (kG.sound.setPosition([SG[0], SG[1] + YG, SG[2]]), LG().copy(kG.lastPos, SG))
              } else yG <= wG.maxHearDist * wG.maxHearDist && this.startEntity(ZG, wG, SG)
            }
        }
      }
  },
  39426: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      e: () => SG
    });
    var wG = ZG(19);

    function SG(GG) {
      return "refetchCode" === GG || "devDownloadJson" === GG || GG.startsWith("Plugin")
    }

    function LG(GG, bG) {
      "refetchCode" !== GG ? "Plugin|MobAiPlugin|ShowPetUi" !== GG ? Promise.all([ZG.e(109), ZG.e(110), ZG.e(105), ZG.e(107), ZG.e(218)]).then((() => ZG(42179))).then((ZG => {
        let {
          runClientGameMessage: wG
        } = ZG;
        wG(GG, bG)
      })).catch((bG => {
        console.error(`Game message ${GG} failed`, bG)
      })) : wG.l.xh("showPetUi", bG) : wG.l.xh("refetchCode")
    }
  },
  39412: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG
    });
    var wG = ZG(1177),
      SG = ZG(1290),
      LG = ZG(17),
      yG = ZG(1275),
      kG = ZG(1287),
      UG = ZG(1444),
      YG = ZG(36808);

    function VG(GG) {
      let {
        AS: bG,
        sS: ZG
      } = GG;
      const VG = null !== bG && void 0 !== bG ? bG : (0, kG.d)().gameNameWithVariation;
      (0, wG.J)(VG) && ((0, YG.h)(), (0, yG.cb)((() => {
        console.log("Received matchmaking order from game server to game", bG), (0, LG.n)("inGameReplay"), (0, UG.navigatePreserveSearch)((0, SG.d)(VG, null !== ZG && void 0 !== ZG ? ZG : void 0))
      }), "video_start"))
    }
  },
  39404: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG,
      f: () => yG,
      i: () => kG,
      l: () => YG
    });
    var wG = ZG(19),
      SG = ZG(1311);
    const LG = new Map;

    function yG(GG, bG) {
      wG.l.xh("newUiRequest", {
        id: GG,
        clientParameters: bG
      }, !0)
    }

    function kG(GG) {
      wG.l.xh("removeUiRequest", GG, !0);
      const bG = LG.get(GG);
      bG && (bG.tearDownNotification(), LG.delete(GG))
    }

    function UG() {
      wG.l.xh("clearUiRequests");
      for (const GG of LG.values()) GG.tearDownNotification();
      LG.clear()
    }

    function YG(GG, bG, ZG, wG) {
      const yG = SG.NotificationProvider.showPromptPopup({
        title: bG,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: ZG,
        unlockPointerKey: "uiRequestPopup"
      });
      LG.set(GG, yG), yG.getResult().then((bG => {
        LG.delete(GG), "notificationTornDown" !== bG && wG(bG)
      }))
    }
  },
  39396: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      constructor() {
        this.members = new Map
      }
      apply(GG) {
        const bG = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const wG of GG.PG) {
          let GG = this.members.get(wG.MG);
          if (GG || (GG = {
              name: null,
              settings: {}
            }, this.members.set(wG.MG, GG), bG.added.push(wG.MG)), null !== wG.AG && (GG.name = wG.AG), null !== wG.sG || wG.qG.length > 0) {
            const ZG = null === wG.sG ? {} : JSON.parse(wG.sG);
            Object.assign(GG.settings, ZG);
            for (const bG of wG.qG) delete GG.settings[bG], ZG[bG] = void 0;
            bG.settingChanges.push({
              playerId: wG.MG,
              settings: ZG
            })
          }
        }
        for (const wG of GG.nG) {
          const GG = this.members.get(wG);
          var ZG;
          if (GG) this.members.delete(wG), bG.removed.push({
            playerId: wG,
            name: null !== (ZG = GG.name) && void 0 !== ZG ? ZG : void 0
          })
        }
        return bG
      }
      has(GG) {
        return this.members.has(GG)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(GG) {
        var bG, ZG;
        return null !== (bG = null === (ZG = this.members.get(GG)) || void 0 === ZG ? void 0 : ZG.name) && void 0 !== bG ? bG : void 0
      }
      getSettings(GG) {
        var bG;
        return null === (bG = this.members.get(GG)) || void 0 === bG ? void 0 : bG.settings
      }
      getSetting(GG, bG) {
        var ZG;
        return null === (ZG = this.members.get(GG)) || void 0 === ZG ? void 0 : ZG.settings[bG]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39435: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      e: () => SG
    });
    const wG = ["description", "label"];

    function SG(GG) {
      const bG = GG.type;
      return {
        type: bG,
        params: GG[bG]
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);