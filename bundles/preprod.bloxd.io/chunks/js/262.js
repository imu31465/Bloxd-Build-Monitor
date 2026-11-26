export const id = 262;
export const ids = [262];
export const modules = {
  39926: (UU, XU, zU) => {
    function cU(UU) {
      return !(!UU.lobbyLeaderboardInfo && !UU.lobbyManage)
    }
    zU.d(XU, {
      c: () => cU
    })
  },
  39900: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      h: () => AU
    });
    var cU = zU(31);
    let yU = !1;

    function QU() {
      return yU
    }

    function AU(UU) {
      yU !== UU && (yU = UU, cU.k.UY("replayViewer|videoExportChanged"))
    }
  },
  39852: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(31),
      yU = zU(2032);

    function QU(UU) {
      let {
        taskId: XU,
        progress: zU
      } = UU;
      const cU = yU.d.get("_tasks");
      null !== cU && void 0 !== cU && cU[XU] && yU.d.apply({
        _tasks: {
          ...cU,
          [XU]: {
            ...cU[XU],
            progress: zU
          }
        }
      })
    }
    cU.k.subscribe("clientTaskProgress", (UU => {
      QU(UU)
    }))
  },
  39799: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => Xz,
      d: () => hX,
      e: () => Uz
    });
    var cU = zU(4063),
      yU = zU(173),
      QU = zU(212),
      AU = zU(654),
      FU = zU(42),
      oU = zU(3043),
      DU = zU(4139),
      EU = zU(4122),
      YU = zU(1236);
    const NU = new WeakMap;
    class IU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          pEU: !0
        };
        this.callbacks = XU, this.options = zU, this.gcU = void 0, this.sessionId = void 0, this.tC = [], this.aEU = !1, this.kp = !1, this.tEU = void 0, this.pC = 0, this.aQU = 0, this.gEU = (UU, XU) => {
          if (this.kp) return;
          const zU = Number(UU);
          this.aEU ? this.kEU(zU, XU) : this.tC.push({
            id: zU,
            payload: XU
          })
        }, this.dispose = () => {
          this.kp || (this.kp = !0, NU.delete(this), this.tC.length = 0, this.tEU())
        }, this.gcU = UU, this.sessionId = UU.sessionId, NU.set(this, []), this.tEU = this.GEU()
      }
      BEU(UU) {
        this.tEU(), this.gcU = UU, this.sessionId = UU.sessionId, this.pC = 0, this.aQU = 0, this.tEU = this.GEU()
      }
      get zC() {
        return this.aQU
      }
      GEU() {
        const UU = this.gcU.iG("*", this.gEU);
        return this.options.pEU && this.gcU.vG(this.dispose), UU
      }
      kEU(UU, XU) {
        try {
          (0, DU._b)(UU) && (XU = (0, DU.b)(UU, EU.XY.from(XU)));
          const zU = NU.get(this)[UU];
          if ("function" !== typeof zU) {
            if (this.callbacks.ZEU) return void this.callbacks.ZEU(UU, XU);
            throw new Error(`No onMessage handler registered for message id ${UU}`)
          }
          zU(XU)
        } catch (zU) {
          this.callbacks.REU(`Error in onMessage ${UU} with payload ${JSON.stringify(XU)}`, zU)
        } finally {
          this.pC++
        }
      }
      PEU() {
        for (const {
            id: UU,
            payload: XU
          }
          of this.tC) {
          if (this.kp) break;
          this.kEU(UU, XU)
        }
        this.tC.length = 0
      }
      oR() {
        return this.kp
      }
      WEU() {
        if (this.aEU || this.kp) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          iG: (UU, XU) => {
            if (this.aEU || this.kp) throw new Error("Trying to call onMessage after registration finished");
            this.iG(UU, XU)
          },
          finishRegistration: () => {
            if (this.kp) throw new Error("Cannot finish message registration after disposal");
            this.aEU = !0, this.PEU()
          }
        }
      }
      iG(UU, XU) {
        var zU, cU;
        null === (zU = (cU = this.callbacks).dEU) || void 0 === zU || zU.call(cU);
        const yU = NU.get(this);
        for (; UU > yU.length;) yU[yU.length] = null;
        yU[UU] = XU
      }
      send(UU, XU) {
        this.LEU(), (0, YU.w)(XU) ? this.gcU.rC(UU, XU) : this.gcU.send(UU, XU)
      }
      LEU() {
        var UU, XU;
        (this.aQU++, 5 === pU++) && (null === (UU = (XU = this.callbacks).dEU) || void 0 === UU || UU.call(XU), pU = 0)
      }
      Wk() {
        this.dispose(), this.gcU.Wk()
      }
      leave() {
        this.dispose(), this.gcU.leave()
      }
    }
    let pU = 0;
    var aU = zU(4084);
    class tU extends IU {
      constructor(UU) {
        super(UU, {
          dEU: () => {
            (0, FU.o)(!0) && (0, cU.lL)()
          },
          REU: (UU, XU) => {
            var zU;
            null === (zU = (0, oU.e)()) || void 0 === zU || zU.Pa(UU, XU)
          }
        }, {
          pEU: !1
        }), (0, aU.g)(UU)
      }
      gC(UU, XU) {
        return !!(0, aU.m)((0, aU.c)(), this.gcU, UU, XU) && (this.LEU(), !0)
      }
      BEU(UU) {
        this.eEU(), super.BEU(UU), (0, aU.g)(UU)
      }
      Wk() {
        super.Wk(), this.eEU()
      }
      eEU() {
        this.gcU.Lk.DY.Fq = void 0
      }
    }
    var gU = zU(31),
      kU = zU(2032),
      GU = zU(1800),
      BU = zU(37172),
      ZU = zU(39803),
      RU = zU(38789),
      PU = zU(38557),
      WU = zU(646),
      dU = zU(39192);

    function LU(UU, XU, zU) {
      const cU = function(UU) {
          const XU = new Int32Array(UU.length * dU.d);
          return UU.forEach(((UU, zU) => {
            const cU = zU * dU.d;
            if (4 === UU.length) {
              const [zU, yU, QU, AU] = UU;
              XU.set([zU, yU, QU, zU, yU, QU, AU], cU)
            } else {
              const [zU, yU, QU, AU, FU, oU, DU] = UU;
              XU.set([zU, QU, FU, yU, AU, oU, DU], cU)
            }
          })), XU
        }(zU),
        yU = (XU, zU, cU, yU) => {
          UU.setBlockNoMulti(XU, zU, cU, yU, !0)
        };
      UU.client.gameRecorder.isCapturing() ? (0, dU.ub)(cU, (0, dU.sb)(cU), yU) : UU.WN.qY.jR(cU, {
        aJ: yU,
        isHookId: XU => UU.blockChangeHasHooks(XU),
        watched: () => function(UU, XU, zU) {
          const cU = [],
            yU = (UU, XU, zU) => {
              cU.push(UU, XU, zU)
            },
            QU = new Set;
          for (let AU = 0; AU < zU.length; AU += dU.d)
            for (let XU = (0, WU.W)(zU[AU]); XU <= (0, WU.W)(zU[AU + 3]); XU++)
              for (let cU = (0, WU.W)(zU[AU + 1]); cU <= (0, WU.W)(zU[AU + 4]); cU++)
                for (let FU = (0, WU.W)(zU[AU + 2]); FU <= (0, WU.W)(zU[AU + 5]); FU++) {
                  const zU = `${XU}|${cU}|${FU}`;
                  QU.has(zU) || (QU.add(zU), UU.blockDataOwner.forEachDataCell(XU, cU, FU, yU))
                }
          return XU.forEachCell(yU), Int32Array.from(cU)
        }(UU, XU, cU)
      }), UU.WN.GXU()
    }

    function eU(UU) {
      UU.AcU = new Set, UU.DcU = new Set, UU.FcU = new Set, UU.EcU = new Set, UU.ocU = [], UU.YcU = [], UU.Tm = new Set, UU.jX = [], UU.Xx = []
    }
    class CU {
      constructor(UU) {
        this.WN = UU
      }
      register(UU) {
        const XU = this.WN,
          zU = (0, oU.b)();
        UU.iG(DU.P, (UU => {
          XU.qY.AcU.add(UU), XU.qY.DcU.delete(UU)
        })), UU.iG(DU.V, (UU => {
          XU.qY.DcU.add(UU), XU.qY.AcU.delete(UU)
        })), UU.iG(DU.Hd, (UU => {
          XU.qY.DcU.delete(UU), XU.qY.AcU.delete(UU)
        })), UU.iG(DU.U, (UU => {
          XU.qY.FcU.add(UU), XU.qY.EcU.delete(UU)
        })), UU.iG(DU.Y, (UU => {
          XU.qY.EcU.add(UU), XU.qY.FcU.delete(UU)
        })), UU.iG(DU.Md, (UU => {
          XU.qY.EcU.delete(UU), XU.qY.FcU.delete(UU)
        })), UU.iG(DU.S, (UU => {
          (0, YU.X)(UU, XU.qY.YcU), (0, YU.X)(UU, XU.qY.ocU), XU.qY.ocU.push(UU)
        })), UU.iG(DU.W, (UU => {
          (0, YU.X)(UU, XU.qY.ocU), (0, YU.X)(UU, XU.qY.YcU), XU.qY.YcU.push(UU)
        })), UU.iG(DU.Ld, (UU => {
          (0, YU.X)(UU, XU.qY.ocU), (0, YU.X)(UU, XU.qY.YcU)
        })), UU.iG(DU.ff, (UU => {
          let {
            Ic: zU,
            tc: cU
          } = UU;
          cU ? XU.qY.Tm.delete(zU) : XU.qY.Tm.add(zU)
        })), UU.iG(DU.ef, (UU => {
          let {
            jX: cU,
            KX: yU
          } = UU;
          zU.updateWalkThroughRect(XU.pM, cU, yU)
        })), (0, cU.onGameResetOnce)((() => {
          eU(XU.qY)
        })), UU.iG(DU.Wb, (UU => {
          RU.c.applyServerUpdate(UU)
        })), UU.iG(DU.ab, (UU => {
          zU.applyServerBlocks((() => {
            ! function(UU, XU) {
              for (const {
                  wc: zU,
                  qc: cU
                }
                of XU) {
                const XU = PU.c[cU];
                if (XU) {
                  const {
                    compX: cU,
                    compY: yU,
                    compZ: QU,
                    mainMultiblock: AU
                  } = XU;
                  UU.Jw(zU[0] - cU, zU[1] - yU, zU[2] - QU, AU)
                }
              }
              for (const {
                  wc: zU,
                  qc: cU,
                  Oc: yU
                }
                of XU) UU.setBlockNoMulti(zU[0], zU[1], zU[2], cU, !0), UU.blockDataOwner.setBlockData(zU[0], zU[1], zU[2], null === yU ? void 0 : JSON.parse(yU)), UU.blockAdded(zU[0], zU[1], zU[2], cU)
            }(zU, UU)
          })), gU.k.UY("changeBlockFail", UU), gU.k.UY("blockChangeRefused"), zU.client.triggerGameCallback("onChangeBlockFail", UU), gU.k.UY("EditBoard", {
            pos: null
          }), gU.k.UY("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        }));
        const yU = UU => {
          zU.applyServerBlocks((() => {
            LU(zU, RU.c, UU)
          }))
        };
        UU.iG(DU.wb, yU), UU.iG(DU.Jb, yU), UU.iG(DU.Ye, (UU => {
          let {
            QX: XU,
            AX: cU
          } = UU;
          if (zU.KJ(XU[0], XU[1], XU[2])) {
            const UU = (0, oU.b)().pG(XU[0], XU[1], XU[2]);
            (0, oU.b)().updateMailboxContents(XU[0], XU[1], XU[2], UU, cU)
          }
        })), UU.iG(DU.ee, (UU => {
          let {
            pos: XU,
            data: cU
          } = UU;
          zU.blockDataOwner.setBlockData(XU[0], XU[1], XU[2], cU), zU.blockAdded(XU[0], XU[1], XU[2], zU.pG(XU[0], XU[1], XU[2]))
        }))
      }
    }
    var wU = zU(37874),
      qU = zU(37487),
      OU = zU(38822),
      SU = zU(38661),
      rU = zU(38838);
    class uU {
      constructor(UU, XU) {
        this.WN = UU, this.setUpQueuedEntity = XU
      }
      register(UU) {
        const XU = this.WN,
          zU = (0, oU.b)();
        UU.iG(DU.O, (UU => {
          let {
            SQ: XU,
            rQ: zU
          } = UU;
          this.setUpQueuedEntity(XU), XU = (0, qU.c)(XU), (0, oU.b)().client.gameRecorder.recordBulletShot(XU, zU), gU.k.UY(`bulletShot|${XU}`, {
            bulletDirections: zU
          })
        })), UU.iG(DU.Zb, (UU => {
          let {
            fQ: XU,
            iQ: zU
          } = UU;
          gU.k.UY("damagedByOtherPlayer", {
            fQ: XU,
            direction: zU
          }, !0)
        })), UU.iG(DU.id, (UU => {
          gU.k.UY("playerKilled", UU, !0), (0, qU.g)(UU.killerEId) && !(0, qU.g)(UU.deadEId) && gU.k.UY("sessionReplayPlayerKill", {
            killstreak: UU.killstreak
          }), (0, oU.b)().client.gameRecorder.recordPlayerKilled(UU.deadEId, UU.killerEId, UU.withItem, UU.killstreak)
        })), UU.iG(DU.Ab, (UU => {
          gU.k.UY("customKillfeed", UU, !0), (0, oU.b)().client.gameRecorder.recordCustomKillfeed(UU.killer, UU.victim, UU.withItem)
        })), UU.iG(DU.td, (UU => {
          let {
            PU: zU,
            WU: cU
          } = UU;
          this.setUpQueuedEntity(zU);
          const yU = XU.xG.HzU(zU);
          null !== yU && void 0 !== yU && yU.isGun() && yU.reload(Date.now(), cU)
        })), UU.iG(DU.ce, (UU => {
          let {
            yX: zU,
            iU: cU
          } = UU;
          const yU = cU ? (0, rU.f)(XU, cU) : void 0;
          gU.k.UY("sendHitmarker", {
            yX: zU,
            screenPos: yU
          }, !0)
        })), UU.iG(DU.Bc, (UU => {
          let {
            rU: cU,
            uU: yU,
            HU: QU,
            MU: AU,
            vU: FU,
            VU: oU,
            sU: DU
          } = UU;
          this.setUpQueuedEntity(cU), cU = (0, qU.c)(cU);
          const EU = XU.xG.qzU(cU);
          if (EU && (EU.lastHurtTime = performance.now()), (0, OU.playRigHurt)(XU, cU, oU), gU.k.UY("lifeformHurt", {
              eId: cU,
              sU: DU
            }), yU) {
            const UU = (0, rU.f)(XU, yU.iU);
            gU.k.UY("yourAttackHit", {
              yX: AU,
              screenPos: UU,
              hitSelf: cU === XU.pM
            })
          }
          cU === XU.pM && (zU.shakePlayerCamera(cU, FU / 40, 200), gU.k.UY("closeShopOnDamaged", null), gU.k.UY("damagedByOtherPlayer", {
            fQ: null,
            direction: oU,
            vU: FU
          }, !0));
          const YU = XU.xG.wG(cU);
          if (YU && (QU || AU)) {
            const UU = [YU[0], YU[1] + 1, YU[2]];
            QU && (0, SU.h)(XU, SU.v, UU, 15), AU && (0, SU.h)(XU, SU.l, UU, 10)
          }
        })), UU.iG(DU.Ac, (UU => {
          let {
            tU: zU,
            gU: cU,
            kU: yU
          } = UU;
          (0, wU.b)(XU).setHealthFrac((0, qU.c)(zU), yU), gU.k.UY("lifeformHealthChanged", {
            eId: (0, qU.c)(zU),
            gU: cU,
            kU: yU
          })
        })), UU.iG(DU.J, (UU => {
          let {
            gc: zU,
            kc: cU
          } = UU;
          (0, oU.b)().playerAttacked(XU.pM, zU, cU)
        })), UU.iG(DU.eb, (() => {
          const UU = XU.xG.HzU(XU.pM);
          null !== UU && void 0 !== UU && UU.isChargeable() && UU.finishCharging(!1, Date.now())
        })), UU.iG(DU.Gb, (UU => {
          let {
            iX: XU,
            HX: zU,
            MX: cU,
            wQ: yU,
            qQ: QU,
            OQ: AU
          } = UU;
          XU = (0, qU.c)(XU), (0, oU.b)().client.updateEffect(XU, zU, {
            displayName: cU,
            icon: yU,
            duration: QU,
            level: AU
          })
        })), UU.iG(DU.ud, (UU => {
          let {
            iX: XU,
            HX: zU
          } = UU;
          XU = (0, qU.c)(XU), (0, oU.b)().client.removeEffect(XU, zU)
        })), UU.iG(DU.Te, (UU => {
          gU.k.UY("ttbEffectMultiplier", UU)
        }))
      }
    }
    var fU = zU(39824),
      iU = zU(37870),
      HU = zU(4593),
      MU = zU(38849),
      vU = zU(37478),
      VU = zU(37480),
      sU = zU(37803),
      nU = zU(37888),
      mU = zU(38858),
      lU = zU(39826);
    class xU {
      constructor(UU, XU) {
        this.WN = UU, this.setUpQueuedEntity = XU
      }
      register(UU) {
        const XU = this.WN,
          zU = (0, oU.b)();
        UU.iG(DU.Nc, (UU => {
          let {
            eId: zU,
            settings: cU
          } = UU;
          (0, nU.e)(zU);
          for (const XU in cU)(0, nU.d)(zU, XU, cU[XU]);
          if ("canSee" in cU && XU.xG.qXU(zU, "hidingMeshManager")) {
            const UU = XU.xG.getState(zU, "hidingMeshManager");
            UU.canSee = (0, mU.d)("canSee", cU.canSee), UU._forceUpdate = !0
          }
        })), UU.iG(DU.D, (UU => {
          let {
            FX: zU,
            oX: cU,
            animationScript: yU,
            DX: QU,
            EX: AU,
            YX: FU,
            NX: DU
          } = UU;
          zU = (0, qU.c)(zU);
          const EU = null === yU && null !== FU ? (0, fU.f)(FU, DU) : yU;
          (0, oU.b)().client.gameRecorder.recordAnimateEntity(zU, cU, EU, QU, AU), (0, wU.b)(XU).animations.animateEntity(zU, cU, yU, QU, AU, FU, DU), null !== yU || zU === XU.pM && cU === iU.f.Emote && (0, oU.b)().client.cameraController.endTemporaryThirdPerson()
        })), UU.iG(DU.ae, (UU => {
          (0, lU.b)(UU)
        })), UU.iG(DU.fd, (UU => {
          for (const XU of UU)(0, MU.B)(XU);
          gU.k.UY("playerCosmeticsUpdated", UU, !0)
        })), UU.iG(DU.G, (UU => {
          for (const zU of UU)(0, sU.g)(XU, zU)
        })), UU.iG(DU.Qc, (UU => {
          (0, SU.k)(XU, (0, YU.p)(UU))
        })), UU.iG(DU.Rc, (UU => {
          HU.i[UU.cX] ? (0, SU.k)(XU, {
            ...HU.i[UU.cX],
            pos1: UU.pos1,
            pos2: UU.pos2
          }) : console.error(`Unknown preset id: ${UU.cX}`)
        })), UU.iG(DU.cd, (UU => {
          var XU, zU;
          let {
            Ly: cU,
            ey: yU,
            Cy: QU,
            wy: AU
          } = UU, {
            Oy: FU,
            Sy: DU
          } = null !== AU && void 0 !== AU ? AU : {};
          const {
            qy: EU
          } = null !== AU && void 0 !== AU ? AU : {};
          FU = null !== (XU = FU) && void 0 !== XU ? XU : void 0, DU = null !== (zU = DU) && void 0 !== zU ? zU : void 0, "string" === typeof EU && this.setUpQueuedEntity(EU), (0, oU.b)().client.gameRecorder.recordPlaySound(cU, yU, QU, AU), vU.e.play((0, VU.f)(cU), yU, EU, FU, DU).rate(QU)
        })), UU.iG(DU.af, (UU => {
          for (const XU in UU) {
            const cU = UU[XU];
            for (const UU in cU) zU.client.meshCreator.handleParticleSystemUpdate(XU, UU, cU[UU])
          }
        }))
      }
    }
    var JU = zU(38534),
      jU = zU(38500);
    class KU {
      constructor(UU) {
        this.WN = UU
      }
      register(UU) {
        const XU = this.WN,
          zU = (0, oU.b)();

        function cU() {
          return XU.xG.gzU(XU.pM)
        }
        UU.iG(DU.hc, (UU => {
          let {
            eX: zU,
            CX: cU,
            wX: yU,
            qX: QU,
            OX: AU,
            SX: FU,
            rX: oU,
            uX: DU,
            fX: EU
          } = UU;
          if (!XU.xG.qXU(zU, "itemState")) return void(0, JU.h)(XU, zU, [AU, FU, oU], cU, {
            amount: yU,
            attributes: JSON.parse(QU),
            uX: DU,
            size: EU
          });
          const YU = XU.xG.getState(zU, "itemState");
          YU.amount = yU, YU.uX = DU, YU.creationTime = Date.now(), (0, jU.setServerPosition)(XU.xG.getState(zU, "smoothToServerPos"), AU, FU, oU)
        })), UU.iG(DU._, (UU => {
          (0, wU.b)(XU).setCantPickUp(UU, !0), XU.xG.qXU(UU, "itemState") && (XU.xG.getState(UU, "itemState").uX = !0)
        })), UU.iG(DU.Gd, (UU => {
          (0, wU.b)(XU).setCantPickUp(UU, !1), XU.xG.qXU(UU, "itemState") && (XU.xG.getState(UU, "itemState").uX = !1)
        })), UU.iG(DU._c, (UU => {
          let {
            pickUpItems: XU,
            pickUpAckSeq: zU
          } = UU;
          for (const {
              name: yU,
              amount: QU,
              attributes: AU
            }
            of XU) cU().pickUpItem({
            name: yU,
            amount: QU,
            typeObj: JU.r[yU],
            attributes: AU
          });
          (0, oU.b)().client.inventoryPrediction.serverChangeApplied(zU)
        })), UU.iG(DU.se, (UU => {
          let {
            index: zU,
            name: cU,
            amount: yU,
            attributes: QU,
            setSlotAckSeq: AU
          } = UU;
          const FU = XU.xG.kzU(XU.pM);
          (zU < FU.playerInventory.numSlots || FU.nc || FU.inCreative) && FU.setItemSlot(zU, cU, yU, QU), (0, oU.b)().client.inventoryPrediction.serverChangeApplied(AU)
        })), UU.iG(DU.gc, (UU => {
          (0, oU.b)().client.inventoryPrediction.acknowledge(UU)
        })), UU.iG(DU.z, (UU => {
          let {
            Gc: XU,
            Bc: zU,
            Zc: cU,
            Rc: yU
          } = UU;
          (0, oU.b)().client.itemDropPrediction.onActionItemDrops(XU, zU, cU, yU)
        })), UU.iG(DU.qb, (UU => {
          cU().clearInventory(), (0, oU.b)().client.inventoryPrediction.serverChangeApplied(UU)
        })), UU.iG(DU.we, (UU => {
          gU.k.UY("setSelectedInventorySlotI", UU, !0)
        })), UU.iG(DU.kb, (UU => {
          let {
            lU: zU,
            xU: cU,
            JU: yU,
            jU: QU,
            KU: AU,
            bU: FU,
            TU: DU,
            hU: EU
          } = UU;
          const YU = XU.xG.kzU(XU.pM);
          if (FU) {
            const {
              XX: UU,
              zX: XU
            } = EU;
            return (0, oU.b)().client.inventoryPrediction.VUU(XU, (() => {
              YU.chestRefreshed(cU, yU, QU, DU, UU)
            })) && gU.k.UY("chestToggleFromServer", !1, !0), void gU.k.UY("chestRefreshedFromServer")
          }(zU || YU.nc) && (zU ? (YU.chestOpened(cU, yU, QU, AU, DU), null !== AU && (0, oU.b)().client.ironChestPasskeyCache.onChestOpened(QU, AU)) : YU.chestClosed(), gU.k.UY("chestToggleFromServer", zU, !0))
        })), UU.iG(DU.Db, (UU => {
          let {
            craftingRecipeItemName: cU,
            recipesForItem: yU
          } = UU;
          cU ? zU.craftingManager.editRecipesForPlayer(XU.pM, cU, yU) : zU.craftingManager.resetAllPlayerRecipes(XU.pM), gU.k.UY("craftingRecipesEdited", {
            itemName: cU,
            recipesForItem: yU
          })
        })), UU.iG(DU.yd, (UU => {
          let {
            lX: XU,
            xX: zU,
            JX: yU
          } = UU;
          cU().removeItemName(XU, zU), (0, oU.b)().client.inventoryPrediction.serverChangeApplied(yU)
        })), UU.iG(DU.xd, (UU => {
          let {
            DU: cU
          } = UU;
          zU.craftingManager.removeRecipes(XU.pM, cU), gU.k.UY("craftingRecipesEdited", {
            itemName: cU,
            recipesForItem: []
          })
        }))
      }
    }
    var bU = zU(7056),
      TU = zU(38347),
      hU = zU(352),
      UX = zU.n(hU),
      XX = zU(4959),
      zX = zU(38431),
      cX = zU(39036),
      yX = zU(38339);
    class QX {
      constructor(UU, XU) {
        this.WN = UU, this.setUpQueuedEntity = XU
      }
      register(UU) {
        const XU = this.WN,
          zU = (0, oU.b)();
        UU.iG(DU.Pe, (UU => {
          let {
            GU: zU,
            BU: yU,
            ZU: QU,
            RU: AU
          } = UU;
          const FU = [yU, QU, AU];
          XU.xG.setPosition(XU.pM, FU), (0, cU.sendColyMessage)(DU.mg, {
            JD: zU,
            jD: XX.f
          }), gU.k.UY("localPlayerTeleported", {
            pos: FU,
            isCorrection: !1
          })
        })), UU.iG(DU.Wc, (UU => {
          let {
            Wz: XU,
            dz: zU,
            Lz: cU,
            ez: yU
          } = UU;
          this.setUpQueuedEntity(XU);
          const QU = [zU, cU, yU];
          gU.k.UY(`otherPlayerTeleported|${XU}`, {
            pos: QU
          })
        })), UU.iG(DU.ld, (UU => {
          let {
            jc: zU,
            Kc: yU,
            bc: QU,
            Tc: AU,
            hc: FU,
            Uy: oU,
            Xy: EU,
            yy: YU,
            zy: NU,
            Fy: IU
          } = UU;
          const pU = [yU, QU, AU];
          XU.xG.setPosition(XU.pM, pU);
          const aU = XU.xG.KXU(XU.pM),
            tU = XU.xG.Bx(XU.pM);
          UX().set(tU.Am, 0, 0, 0), UX().set(tU.Im, 0, 0, 0), UX().set(tU.Et, FU, oU, EU), tU.Zm(), aU._flying = null !== IU, IU ? (aU.flyAccel.oy = IU.oy, aU.flyAccel.Dy = IU.Dy) : aU.flyAccel.reset(), YU && aU.movementType === bU.l.GLIDING && (aU.Qy = YU.Qy, UX().copy(aU.Ay, YU.Ay)), (0, cU.sendColyMessage)(DU.mg, {
            JD: zU,
            jD: XX.f
          }), gU.k.UY("localPlayerTeleported", {
            pos: pU,
            isCorrection: !0
          })
        })), UU.iG(DU.ye, (UU => {
          let {
            vehicleEId: XU,
            overrides: zU
          } = UU;
          (0, oU.b)().applyRiddenVehicleSettingOverrides(XU, zU)
        })), UU.iG(DU.cf, (UU => {
          let {
            zA: zU,
            cA: cU,
            yA: yU
          } = UU;
          const QU = XU.xG.KXU(XU.pM).physicsState.type === bU.o.SLEEPING && zU === bU.o.DEFAULT;
          (0, oU.b)().updatePositionAndPhysics(XU.pM, {
            type: zU,
            tier: cU
          }, !0, yU), QU && (0, oU.b)().updateHeldVehicleStatus()
        })), UU.iG(DU.db, (UU => {
          let {
            Lc: zU,
            Cc: cU
          } = UU;
          XU.xG.azU(XU.pM).setPose(zU, cU)
        })), UU.iG(DU.fe, (UU => {
          const {
            QY: zU,
            JzU: cU
          } = (0, TU.f)([UU[0], UU[1], UU[2]]);
          yX.e.setLookDirection(XU, zU, cU), (0, zX.s)(zU, cU);
          const yU = XU.xG.azU(XU.pM);
          yU && (yU.heading = zU)
        })), UU.iG(DU.ie, (UU => {
          zU.client.cameraController.setCameraZoom(UU)
        })), UU.iG(DU.Ge, (UU => {
          let {
            pU: cU,
            aU: yU
          } = UU;
          zU.shakePlayerCamera(XU.pM, cU, yU)
        })), UU.iG(DU.nc, (UU => {
          XU.xG.azU(XU.pM).jumpMultiplier.setMultiplierType("jumpEffectAmount", UU)
        })), (0, cU.onGameResetOnce)((() => {
          XU.xG.azU(XU.pM).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), UU.iG(DU.E, (UU => {
          XU.xG.Bx(XU.pM).applyImpulse(UU)
        })), UU.iG(DU.Ce, (UU => {
          const zU = XU.xG.Bx(XU.pM);
          UX().set(zU.Am, 0, 0, 0), UX().set(zU.Im, 0, 0, 0), UX().copy(zU.Et, UU), zU.Zm()
        })), (0, cU.onGameResetOnce)((() => {
          (0, cX.setFloatingYValue)(XU.xG.getState(XU.pM, "physics"), XU.xG.hK(XU.pM), null)
        })), UU.iG(DU.Ib, (UU => {
          let {
            Sc: zU,
            rc: cU,
            uc: yU
          } = UU;
          const QU = (0, qU.c)(zU);
          if (QU === XU.pM) {
            const UU = XU.xG.hK(XU.pM).position;
            yU ??= Math.floor(UU[1]) - 1, (0, cX.setFloatingYValue)(XU.xG.getState(XU.pM, "physics"), XU.xG.hK(XU.pM), cU ? yU : null)
          }(0, wU.b)(XU).setFloating(QU, cU, yU);
          const AU = XU.xG.getState(QU, "floating");
          AU && (AU.isFloating = cU, AU.uc = cU ? yU : null)
        }))
      }
    }

    function AX(UU, XU, zU, cU, yU) {
      let QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!UU.xG.tzU(UU.pM)) return console.log("Got resync inven but don't have inven component"), void XU.acknowledge(cU);
      QU && console.error("Had to sync inven"), XU.VUU(cU, yU) && zU.UY("chestToggleFromServer", !1, !0), zU.UY("syncedInvenFromServer")
    }
    var FX = zU(39841),
      oX = zU(39847),
      DX = zU(2041);
    var EX = zU(4941);

    function YX(UU) {
      const XU = UU.qY;
      let zU = 0,
        yU = -1,
        AU = -1 / 0,
        FU = null,
        oU = !0;
      const EU = () => {
        if (++zU % 10 !== 0) return;
        const EU = (0, cU.getLastReceivedPacketId)();
        if (EU <= yU) return;
        const [YU, NU, IU] = UU.xG.wG(UU.pM), pU = ! function(UU) {
          var XU;
          let zU = null === (XU = UU.xG.bzU(UU.pM)) || void 0 === XU ? void 0 : XU.Ep;
          if (void 0 === zU) return !1;
          const cU = new Set;
          for (; void 0 !== zU && !cU.has(zU);) {
            var yU;
            cU.add(zU);
            const XU = UU.xG.getState(zU, "smoothToServerPos"),
              QU = Array.isArray(XU) ? null : null === XU || void 0 === XU ? void 0 : XU.serverPosition;
            if (QU) {
              const XU = UU.xG.wG(zU);
              if (Math.abs(XU[0] - QU[0]) > 10 || Math.abs(XU[1] - QU[1]) > 10 || Math.abs(XU[2] - QU[2]) > 10) return !0
            }
            zU = null === (yU = UU.xG.bzU(zU)) || void 0 === yU ? void 0 : yU.Ep
          }
          return !1
        }(UU) && function(UU, XU, zU, cU) {
          const yU = QU.f.aY;
          for (let QU = 0; QU < UU.length; QU++) {
            const AU = UU[QU];
            if (!(0, EX.k)(XU, zU, cU, AU[0] * yU, AU[1] * yU, AU[2] * yU)) return !1
          }
          return !0
        }(XU.ha.AY, YU, NU, IU), aU = null === FU || Math.abs(YU - FU[0]) > 8 || Math.abs(NU - FU[1]) > 8 || Math.abs(IU - FU[2]) > 8, tU = !oU || aU || performance.now() - AU >= 1e4;
        oU = pU, pU && tU && (yU = EU, AU = performance.now(), FU = [YU, NU, IU], (0, cU.sendColyMessage)(DU.Uf, {
          tA: EU
        }))
      };
      return UU.on("LY", EU), () => {
        UU.off("LY", EU)
      }
    }
    var NX = zU(39849),
      IX = zU(1568),
      pX = zU(3036),
      aX = zU(1889),
      tX = zU(3221),
      gX = zU(5303);
    class kX {
      constructor(UU, XU, zU) {
        this.WN = UU, this.gameNameWithVariation = XU, this.connectionResume = zU, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        gX.e.reset(), (0, FX.e)()
      }
      startChunkReports() {
        const UU = function(UU) {
            let XU = null,
              zU = -1 / 0,
              yU = null;
            const QU = () => {
                yU = null;
                const QU = Math.ceil(UU.mC[0]),
                  AU = Math.ceil(UU.mC[1]);
                XU && XU[0] === QU && XU[1] === AU || (XU = [QU, AU], zU = performance.now(), (0, cU.sendColyMessage)(DU.Sf, {
                  gA: QU,
                  kA: AU
                }))
              },
              AU = () => {
                null === yU && (yU = setTimeout(QU, Math.max(0, zU + 250 - performance.now())))
              };
            return QU(), UU.on("addRemoveDistanceChanged", AU), () => {
              UU.off("addRemoveDistanceChanged", AU), null !== yU && (clearTimeout(yU), yU = null)
            }
          }(this.WN.qY),
          XU = YX(this.WN);
        this.stopChunkReports = () => {
          UU(), XU()
        }
      }
      restartChunkStreaming() {
        (0, zX.l)(this.WN, (0, oU.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - NX.b)), this.startChunkReports()
      }
      register(UU) {
        const XU = this.WN,
          zU = (0, oU.b)();
        UU.iG(DU.Lc, (UU => {
          kU.d.applyNewClientOptions(UU)
        })), UU.iG(DU.ad, (UU => {
          pX.d.onReceiveColyseusPing(UU)
        })), UU.iG(DU.le, (UU => {
          let {
            key: XU,
            value: zU
          } = UU;
          (0, GU.setCookie)(this.gameNameWithVariation, XU, zU)
        })), UU.iG(DU.oe, (UU => {
          gU.k.UY("setDiscordReportKey", UU)
        })), (0, cU.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), UU.iG(DU.bc, (yU => {
          const {
            MQ: QU,
            vQ: AU
          } = yU;
          if ((0, cU.setAdjustment)(AU), this.connectionResume.onInitialInfo(yU.VQ, yU.sQ), cU.offlineInputReplay.YC(yU.nQ), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", QU);
            try {
              null === yU.mQ && (0, oU.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), eU(XU.qY), kU.d.apply({
                shopInfo: null,
                _shopVersion: DX.d
              });
              const zU = XU.xG.kzU(XU.pM);
              zU.nc && (zU.chestClosed(), gU.k.UY("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), gU.k.UY("initInfoReceived", UU)
            } finally {
              const UU = null === yU.mQ ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = UU, this.connectionResume.onResumeInitialInfo(yU.mQ, (() => {
                UU.endSeq = (0, oU.b)().client.inventoryPrediction.lastActionSeq
              })), null === UU && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", QU), gU.k.UY("sessionReplayJoinTicket", yU.jQ), aX.c.markAdmitted(), (0, zX.m)(XU), gU.k.UY("loadingScreenState", "loadingPage:loadingWorld"), XU.SXU = QU, XU.xG.qXU(XU.pM, XU.xG.names.entityName) && XU.xG.nH(XU.pM, XU.xG.names.entityName), (0, oU.b)().setEntityName(XU.SXU, (0, oU.b)().getRawEntityName(XU.pM)), XU.YM[XU.SXU] = {}, XU.xG.sH(XU.pM, XU.xG.names.entityName), gU.k.UY("initInfoReceived", UU), this.startChunkReports(), zU.client.onServerConnectionFinalised()
        })), UU.iG(DU.Yd, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const UU = this.replayResume;
            if (this.replayResume = null, !UU) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: zU
            } = (0, oU.b)().client, {
              sync: yU
            } = UU, QU = new Set(cU.offlineInputReplay.takeDroppedActions());
            if (yU) {
              var AU;
              const cU = null !== (AU = UU.endSeq) && void 0 !== AU ? AU : zU.lastActionSeq;
              zU.forget((UU => UU > yU.zX && UU <= cU || QU.has(UU))), AX(XU, zU, gU.k, yU.zX, yU.load)
            } else zU.dropPending(), zU.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), UU.iG(DU.Je, (UU => {
          let {
            sc: zU,
            Jc: cU,
            zX: yU
          } = UU;
          const {
            inventoryPrediction: QU
          } = (0, oU.b)().client, AU = () => {
            XU.xG.kzU(XU.pM).loadFromString(zU)
          };
          this.replayResume && (this.replayResume.sync = {
            zX: yU,
            load: AU
          }), AX(XU, QU, gU.k, yU, AU, cU)
        })), UU.iG(DU.qd, (UU => {
          let {
            type: XU,
            location1: zU,
            location2: cU,
            location3: yU,
            score: QU
          } = UU;
          (0, tX.logProgressionEvent)({
            type: XU,
            location1: zU,
            location2: cU,
            location3: yU,
            score: QU
          })
        })), UU.iG(DU.Ud, (UU => {
          let {
            type: XU,
            resourceType: zU,
            amount: cU,
            category: yU,
            itemName: QU
          } = UU;
          (0, tX.logResourceEvent)({
            type: XU,
            resourceType: zU,
            amount: cU,
            category: yU,
            itemName: QU
          })
        })), UU.iG(DU.wc, (UU => {
          let {
            leaveEventType: XU,
            category: zU,
            subCategory: cU,
            value: yU
          } = UU;
          (0, tX.updateLeaveValue)({
            leaveEventType: XU,
            category: zU,
            subCategory: cU,
            value: yU
          })
        })), UU.iG(DU.zb, (UU => {
          let {
            cat1: XU,
            cat2: zU,
            cat3: cU,
            value: yU
          } = UU;
          (0, tX.logCustomAnalyticsEvent)({
            cat1: XU,
            cat2: zU,
            cat3: cU,
            value: yU
          })
        })), UU.iG(DU.pc, (UU => {
          (0, oU.b)().client.leaveGameUnwanted({
            reason: UU,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, IX.navigatePreserveSearch)("/")
        })), UU.iG(DU.de, (UU => {
          gU.k.UY("serverUpdating", Date.now() + UU, !0)
        })), UU.iG(DU.Jc, oX.e), UU.iG(DU.Dc, (UU => {
          console.error(`[logErrorToConsole]: ${UU}`)
        }))
      }
    }
    var GX = zU(39852),
      BX = zU(39861),
      ZX = zU(1079),
      RX = zU(39858),
      PX = zU(2601),
      WX = zU(4010);
    class dX {
      constructor(UU, XU) {
        this.WN = UU, this.clientApi = XU
      }
      register(UU) {
        const XU = this.WN,
          zU = (0, oU.b)();
        UU.iG(DU.gb, (UU => {
          let {
            chatMsgId: XU,
            worldCodeLineId: zU,
            content: cU,
            chatterEId: yU,
            chatterObjectsToReplay: QU
          } = UU;
          gU.k.UY("chat", {
            serverChatMsgId: XU,
            worldCodeLineId: zU,
            content: cU,
            chatterEId: yU,
            chatterObjectsToReplay: QU
          }, !0)
        })), UU.iG(DU.Se, (UU => {
          gU.k.UY("TopRightHelper", UU, !0)
        })), UU.iG(DU.Le, (UU => {
          (0, GX.c)(UU)
        })), UU.iG(DU.sc, (UU => {
          let {
            category: XU,
            timeframe: zU,
            data: cU
          } = UU;
          gU.k.UY("leaderboardResponse", {
            category: XU,
            timeframe: zU,
            data: cU
          })
        })), UU.iG(DU.Ie, (() => {
          gU.k.UY("showShopTutorial", null, !0)
        })), UU.iG(DU.od, (UU => {
          gU.k.UY("progressBarUpdate", UU, !0)
        })), UU.iG(DU.fc, (UU => {
          gU.k.UY("middleScreenBarInitiate", {
            duration: UU.Mc,
            vc: UU.vc,
            horizBarRemOffset: UU.Vc
          }, !0)
        })), UU.iG(DU.zd, (() => {
          gU.k.UY("middleScreenBarRemove", !0)
        })), UU.iG(DU.me, (UU => {
          let {
            id: XU,
            position: zU,
            style: cU,
            Pc: yU,
            dc: QU
          } = UU;
          gU.k.UY("setDirectionArrow", {
            id: XU,
            position: zU,
            style: cU,
            text: (0, DU.s)(yU),
            dc: QU
          }, !0)
        })), UU.iG(DU.pb, (UU => {
          let {
            id: XU
          } = UU;
          gU.k.UY("clearDirectionArrow", {
            id: XU
          }, !0)
        })), UU.iG(DU.xb, (UU => {
          (0, WX.onCosmeticPackGranted)(UU)
        })), UU.iG(DU.Uc, (UU => {
          let {
            id: XU,
            Cz: zU
          } = UU;
          const {
            type: yU,
            params: QU
          } = (0, BX.g)(zU), AU = {
            ...QU
          };
          for (const cU of BX.d) cU in AU && AU[cU] && (AU[cU] = (0, DU.s)(AU[cU]));
          gX.e.queueQTE(XU, yU, AU).getResult().then((UU => {
            "boolean" === typeof UU && (0, cU.sendColyMessage)(DU.Dh, {
              qteId: XU,
              qteResponse: UU
            })
          }))
        })), UU.iG(DU.Dd, (UU => {
          gX.e.cancelQTE(UU)
        })), (0, cU.onGameResetOnce)((() => {
          gX.e.reset()
        })), UU.iG(DU.Vc, (UU => {
          let {
            id: XU,
            clientParameters: zU
          } = UU;
          (0, FX.i)(XU, zU)
        })), UU.iG(DU.Fd, (UU => {
          (0, FX.j)(UU)
        })), UU.iG(DU.Ve, (UU => {
          let {
            text: XU,
            id: zU,
            destructive: yU
          } = UU;
          (0, FX.k)(zU, XU, yU, (UU => {
            (0, cU.sendColyMessage)(DU.gj, {
              iA: zU,
              HA: UU,
              MA: 5
            })
          }))
        })), UU.iG(DU.Zc, (UU => {
          let {
            info: XU
          } = UU;
          gU.k.UY("overShopInfo", XU, !0)
        })), UU.iG(DU.Rb, (UU => {
          let {
            fc: zU,
            Hc: cU
          } = UU;
          this.clientApi.openShop(XU.pM, zU, cU)
        })), UU.iG(DU.Nb, (UU => {
          let {
            vX: XU,
            nX: zU,
            mX: cU
          } = UU;
          gU.k.UY("flyingMiddleMessage", {
            content: (0, DU.s)(XU),
            nX: zU,
            mX: cU
          }, !0)
        })), UU.iG(DU.hf, (UU => {
          const XU = UU === ZX.e ? null : {
            message: `Currently loaded as variation: ${UU}`,
            type: "Warning"
          };
          gU.k.UY("showPermanentBottomMessage", XU, !0)
        })), UU.iG(DU.Ub, (UU => {
          let {
            messageType: XU,
            data: cU
          } = UU;
          (0, RX.h)(XU) ? (0, RX.d)(XU, cU) : ("freeCamPerms" === XU && zU.client.freeCameraController.setPerms(cU.key, cU.value), zU.client.triggerGameCallback("onReceivedMessageFromServer", XU, cU))
        })), UU.iG(DU.ub, PX.o)
      }
    }
    class LX {
      constructor(UU, XU, zU, cU) {
        this.gameNameWithVariation = UU, this.WN = zU, this.connectionResume = cU, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new ZU.c(XU, this.WN)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, cU.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      BEU(UU) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new ZU.c(UU, this.WN), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(UU, XU) {
        const zU = this.WN,
          cU = UU => {
            this.stateReplicationHandler.setUpIfQueued(UU)
          };
        new kX(zU, this.gameNameWithVariation, this.connectionResume).register(UU), new CU(zU).register(UU), new KU(zU).register(UU), new uU(zU, cU).register(UU), new xU(zU, cU).register(UU), new dX(zU, XU).register(UU), new QX(zU, cU).register(UU)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var eX = zU(39863),
      CX = zU(39867),
      wX = zU(702),
      qX = zU(1835);
    class OX {
      constructor(UU, XU, zU, cU) {
        this.msgHandler = zU, this.listener = cU, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new eX.d({
          reconnect: UU,
          isLive: () => cU.isLive(),
          onReconnected: UU => {
            this.resumeOnRoom(UU)
          },
          onGaveUp: (UU, XU) => {
            cU.onGaveUp(UU, XU)
          },
          freeze: XU,
          releaseSeat: XU => {
            UU(XU).then((UU => {
              UU.leave(!0)
            }), (UU => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", UU)
            }))
          }
        })
      }
      onInitialInfo(UU, XU) {
        this.session.onInitialInfo(UU, XU)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(UU, XU) {
        if (this.session.onResuming(), null === UU) {
          try {
            (0, oU.b)().client.itemDropPrediction.reset()
          } catch (zU) {
            console.error("Error dropping the item drop predictions on resuming", zU)
          }
          return cU.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, oU.b)().client.itemDropPrediction.onResumeReplayOffered(), cU.offlineInputReplay.replayFrom(UU.xQ, XU)
      }
      onResumed(UU) {
        this.setSuspended(!1), (0, cU.resendBeacons)();
        try {
          UU()
        } catch (XU) {
          console.error("Error completing the resume", XU)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(UU) {
        const XU = (0, wX.j)((() => UU.connection.isOpen));
        UU.vG(XU);
        const zU = new CX.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(UU, "silent"), UU.leave(!1))
        }));
        UU.onStateChange((() => {
          zU.heard()
        }));
        const cU = XU => {
          XU.persisted || UU.leave(!0)
        };
        window.addEventListener("pagehide", cU), UU.vG(((XU, zU) => {
          if (UU === this.attachedRoom && this.listener.isLive()) return (0, QU.i)(XU) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${XU}, reconnecting`), this.listener.onDropped(XU, zU), void this.onConnectionDropped(UU, String(XU))) : void this.listener.onRoomLeft(XU, zU)
        })), this.attachedRoom = UU, this.detachRoomListeners = () => {
          XU(), zU.dispose(), window.removeEventListener("pagehide", cU)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(UU) {
        UU !== this.suspended && (this.suspended = UU, (0, cU.setConnectionSuspended)(UU), (0, oU.b)().client.itemDropPrediction.setSuspended(UU))
      }
      detachRoom() {
        var UU;
        null === (UU = this.detachRoomListeners) || void 0 === UU || UU.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(UU, XU) {
        (0, qX.reportClientError)("disconnect", "Left room", XU), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), cU.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(UU.reconnectionToken)
      }
      resumeOnRoom(UU) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), UU.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, lU.q)(), cU.offlineInputReplay.onConnectionReplaced(), this.msgHandler.BEU(UU), this.listener.onReconnected(UU), this.attachRoom(UU)
      }
    }
    var SX = zU(3295),
      rX = zU(3304),
      uX = zU(1360),
      fX = zU(1322),
      iX = zU(5161),
      HX = zU(3519),
      MX = zU(1325),
      vX = zU(38462),
      VX = zU(39871),
      sX = zU(9493),
      nX = zU(39874),
      mX = zU(1220),
      lX = zU(37201),
      xX = zU(39876),
      JX = zU(1769),
      jX = zU(3051),
      KX = zU(1545);

    function bX(UU) {
      var XU, zU;
      if ("object" !== typeof UU || null === UU) return {
        errType: typeof UU
      };
      const cU = UU;
      return {
        errType: null !== (XU = null === (zU = UU.constructor) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : "",
        errName: "string" === typeof cU.name ? cU.name : "",
        eventType: "string" === typeof cU.type ? cU.type : "",
        errStack: "string" === typeof cU.stack ? cU.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function TX(UU) {
      if ("undefined" !== typeof ProgressEvent && UU instanceof ProgressEvent) return !0;
      if (!(UU instanceof Error)) return !1;
      const XU = UU.code;
      return "ServerError" === UU.name && void 0 === XU || "AbortError" === UU.name || "seat reservation expired." === UU.message || "early_leave" === UU.message
    }(0, aU.q)((UU => {
      (0, qX.reportClientError)("wasm_net", UU)
    }));
    let hX = !0;

    function Uz() {
      hX = !1
    }
    class Xz {
      constructor(UU) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.WN = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = UU.gameNameWithVariation, this.lobbyName = UU.lobbyName, this.colyClient = UU.colyClient, this.userContext = UU.userContext
      }
      async connectToServer(UU, XU, zU) {
        kU.d.reset(), UU.YM = {
          [UU.pM]: {}
        }, UU.SXU = void 0, (0, lU.q)(), (0, oU.b)().removeAllEntityNames(), (0, oU.b)().setEntityName(UU.pM, this.userContext.getPlayerName()), (0, uX.o)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, JX.e)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const AU = performance.now();
        zU.aborted || (0, fX.n)("wasm_core_ready", AU);
        const FU = (0, nX.h)(this.userContext, (() => {
          const {
            roomName: cU,
            joinOptions: yU
          } = (0, BU.g)(this.userContext, this.gameNameWithVariation, this.lobbyName, XU, (UU => HX.c.isUsingCustomGameTexturePack(UU)));
          return yU.joinAdHold = this.joinAdHold, yU.renderBackend = (0, jX.c)(UU.WY), (0, VX.e)((() => this.colyClient.joinOrCreateUntil(zU, cU, yU)), zU)
        }));
        return gU.k.UY("loadingScreenState", "loadingPage:joiningLobby"), await FU.then((XU => {
          if (this.joinedAt = performance.now(), (0, fX.n)("wasm_joined", this.joinedAt), this.WN = UU, this.joinAdHold) {
            const UU = (0, JX.q)((() => {
              XU.send(yU.h), (0, fX.i)(), aX.c.markJoinAdEnded()
            }));
            XU.vG(UU), (0, cU.onGameResetOnce)(UU)
          }
          const zU = new tU(XU);
          this.connectionResume = new OX((UU => this.colyClient.reconnect(UU)), (XU => {
            UU.nC(XU)
          }), zU, {
            isLive: () => (0, oU.b)().client.getMsgHandler() === zU,
            onDropped: (UU, XU) => {
              (0, rX.f)(UU) || this.logUnrecognisedConnectionLoss(UU, void 0, {
                site: "drop",
                closeReason: null !== XU && void 0 !== XU ? XU : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (UU, XU) => {
              this.onRoomLeft(UU, XU)
            },
            onReconnected: UU => {
              this.incomingMsgInitialisor.BEU(UU), this.checkSendPath = (0, vX.f)(zU, UU, aU.t)
            },
            onGaveUp: (UU, XU) => {
              this.onResumeGaveUp(UU, XU)
            }
          }), this.connectionResume.attachRoom(XU), (0, cU.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const QU = zU.send,
            AU = zU.iG,
            FU = zU.gcU.send,
            DU = zU.gcU.iG,
            EU = zU.kEU;
          this.checkSendPath = (0, vX.f)(zU, XU, aU.t);
          const YU = setInterval((() => {
            QU === zU.send && AU === zU.iG && FU === zU.gcU.send && DU === zU.gcU.iG && EU === zU.kEU || Uz(), this.checkSendPath()
          }), 1e4);
          return (0, cU.onGameResetOnce)((() => {
            clearInterval(YU)
          })), {
            success: !0,
            successDetails: zU
          }
        })).catch((XU => {
          if (zU.aborted && XU === (0, mX.e)(zU)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (XU instanceof lX.c) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: XU.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, xX.e)(XU, XU.leg)
            }
          };
          UU.Pa(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${XU.code}\n`, XU);
          const cU = XU.code;
          return cU === QU.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: QU.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(cU, XU.message, {
                site: "join",
                sinceJoinStart: (0, rX.b)(performance.now() - AU),
                ...bX(XU)
              }, TX(XU)),
              rematch: (0, VX.c)(XU),
              gameRefused: (0, sX.e)(XU),
              joinFailure: (0, xX.e)(XU, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(UU, XU, zU) {
        gU.k.UY("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new LX(this.gameNameWithVariation, XU.gcU, UU, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const yU = XU.WEU();
        this.incomingMsgInitialisor.setupOnMessageListeners(yU, zU), (0, cU.onConnectionToServerReady)(yU, XU), this.joinAdHold && aX.c.markAdmissionAwaited(), yU.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(UU, XU) {
        (0, MX.Wa)(new Error("Reconnect failed"), {
          ...(0, SX.m)(XU),
          game: this.gameNameWithVariation
        }), (0, qX.reportClientError)("disconnect", "Reconnect failed", XU.reason), (0, oU.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !UU,
          canPlayAgain: UU,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, IX.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, rX.b)(performance.now() - this.joinedAt)
      }
      onRoomLeft(UU, XU) {
        var zU;
        if (UU === QU.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${UU}`), UU === QU.e.serverUpdating.code) return (0, qX.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, oU.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.WN.Pa(`Kicked from server with code ${UU}`, new Error);
        const cU = Object.keys(QU.e).find((XU => QU.e[XU].code === UU));
        (0, qX.reportClientError)("disconnect", "Left room", null !== cU && void 0 !== cU ? cU : String(UU)), KX.c.leftGame(this.gameNameWithVariation, UU);
        const yU = this.onConnectionToServerLost(UU, void 0, {
          site: "leave",
          closeReason: null !== XU && void 0 !== XU ? XU : "",
          sinceJoined: this.sinceJoined()
        });
        (0, oU.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${yU.reason}`,
          canReconnect: yU.canReconnect,
          requiresRefresh: yU.requiresRefresh,
          automaticallyReconnect: null !== (zU = yU.automaticallyReconnect) && void 0 !== zU && zU
        }), (0, IX.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, iX.z)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, IX.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(UU, XU, zU) {
        var cU;
        let yU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (cU = XU) && void 0 !== cU && cU.endsWith(QU.m) && (this.userContext.invalidateTrafficCode(), XU = XU.replace(QU.m, "")), UU === QU.e.outdatedVersion.code) return console.error("Outdated client with version ", AU.d, ", refreshing page"), (0, GU.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (UU === QU.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, GU.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const AU in QU.e) {
          const {
            code: zU,
            text: cU,
            canReconnect: yU
          } = QU.e[AU];
          if (zU === UU) {
            console.log("matched known error", UU, "leaving game");
            return {
              reason: "" !== cU ? cU : XU || `Code: ${UU}`,
              requiresRefresh: !1,
              canReconnect: yU,
              automaticallyReconnect: zU === QU.e.customGameUpdated.code || zU === QU.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, rX.c)(UU) || yU ? console.warn("Connection lost", UU, XU) : this.logUnrecognisedConnectionLoss(UU, XU, zU), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${UU}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: yU ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(UU, XU, zU) {
        (0, MX.Wa)(new Error("Unrecognised connection loss"), {
          code: String(UU),
          cause: null !== XU && void 0 !== XU ? XU : "",
          ...zU,
          game: this.gameNameWithVariation,
          ...(0, rX.j)()
        })
      }
    }
  },
  39803: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => xz,
      e: () => hz
    });
    var cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU, fU, iU, HU, MU, vU, VU, sU, nU, mU, lU, xU, JU, jU, KU, bU, TU, hU, UX, XX, zX, cX, yX, QX, AX, FX, oX, DX, EX, YX, NX, IX, pX, aX, tX, gX, kX, GX, BX, ZX, RX, PX, WX, dX, LX, eX, CX, wX, qX, OX, SX, rX, uX, fX, iX, HX, MX, vX, VX, sX, nX, mX, lX, xX, JX, jX, KX, bX, TX = zU(31),
      hX = zU(37874),
      Uz = zU(39812),
      Xz = zU(39819),
      zz = zU(9694),
      cz = zU(638),
      yz = zU(633),
      Qz = zU(37523);
    let Az = (cU = (0, zz.type)("number"), yU = (0, zz.type)("number"), QU = (0, zz.type)("number"), AU = (0, zz.type)("number"), FU = (0, zz.type)("number"), oU = (0, zz.type)("number"), DU = (0, zz.type)("string"), EU = class extends zz.Schema {
        constructor() {
          super(...arguments), (0, Uz.c)(this, "id", YU, this), (0, Uz.c)(this, "amount", NU, this), (0, Uz.c)(this, "x", IU, this), (0, Uz.c)(this, "y", pU, this), (0, Uz.c)(this, "z", aU, this), (0, Uz.c)(this, "size", tU, this), (0, Uz.c)(this, "attributes", gU, this)
        }
      }, YU = (0, Xz.d)(EU.prototype, "id", [cU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), NU = (0, Xz.d)(EU.prototype, "amount", [yU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), IU = (0, Xz.d)(EU.prototype, "x", [QU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pU = (0, Xz.d)(EU.prototype, "y", [AU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aU = (0, Xz.d)(EU.prototype, "z", [FU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tU = (0, Xz.d)(EU.prototype, "size", [oU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), gU = (0, Xz.d)(EU.prototype, "attributes", [DU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), EU),
      Fz = (kU = (0, zz.type)("string"), GU = (0, zz.type)("string"), BU = class extends zz.Schema {
        constructor() {
          super(...arguments), (0, Uz.c)(this, "itemName", ZU, this), (0, Uz.c)(this, "enchantmentTier", RU, this)
        }
      }, ZU = (0, Xz.d)(BU.prototype, "itemName", [kU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), RU = (0, Xz.d)(BU.prototype, "enchantmentTier", [GU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), BU),
      oz = (PU = (0, zz.type)("string"), WU = (0, zz.type)("string"), dU = (0, zz.type)("number"), LU = (0, zz.type)("number"), eU = (0, zz.type)("number"), CU = (0, zz.type)("float32"), wU = (0, zz.type)("float32"), qU = (0, zz.type)("float32"), OU = (0, zz.type)("string"), SU = (0, zz.type)(["number"]), rU = (0, zz.type)("boolean"), uU = class extends zz.Schema {
        constructor() {
          super(...arguments), (0, Uz.c)(this, "type", fU, this), (0, Uz.c)(this, "name", iU, this), (0, Uz.c)(this, "x", HU, this), (0, Uz.c)(this, "y", MU, this), (0, Uz.c)(this, "z", vU, this), (0, Uz.c)(this, "xRotation", VU, this), (0, Uz.c)(this, "yRotation", sU, this), (0, Uz.c)(this, "zRotation", nU, this), (0, Uz.c)(this, "followingEId", mU, this), (0, Uz.c)(this, "followingOffset", lU, this), (0, Uz.c)(this, "shouldMatchFollowingEntityRotation", xU, this)
        }
      }, fU = (0, Xz.d)(uU.prototype, "type", [PU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), iU = (0, Xz.d)(uU.prototype, "name", [WU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), HU = (0, Xz.d)(uU.prototype, "x", [dU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), MU = (0, Xz.d)(uU.prototype, "y", [LU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vU = (0, Xz.d)(uU.prototype, "z", [eU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), VU = (0, Xz.d)(uU.prototype, "xRotation", [CU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sU = (0, Xz.d)(uU.prototype, "yRotation", [wU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nU = (0, Xz.d)(uU.prototype, "zRotation", [qU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mU = (0, Xz.d)(uU.prototype, "followingEId", [OU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), lU = (0, Xz.d)(uU.prototype, "followingOffset", [SU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new zz.ArraySchema(0, 0, 0)
        }
      }), xU = (0, Xz.d)(uU.prototype, "shouldMatchFollowingEntityRotation", [rU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), uU),
      Dz = (JU = (0, zz.type)("float32"), jU = (0, zz.type)("float32"), KU = (0, zz.type)("boolean"), bU = (0, zz.type)("boolean"), TU = (0, zz.type)("float32"), hU = (0, zz.type)("boolean"), UX = (0, zz.type)("string"), XX = (0, zz.type)("string"), zX = (0, zz.type)("string"), cX = (0, zz.type)("string"), yX = (0, zz.type)(["number"]), QX = (0, zz.type)("number"), AX = (0, zz.type)({
        map: Fz
      }), FX = class extends oz {
        constructor() {
          super(...arguments), (0, Uz.c)(this, "scale", oX, this), (0, Uz.c)(this, "speed", DX, this), (0, Uz.c)(this, "jumping", EX, this), (0, Uz.c)(this, "crouching", YX, this), (0, Uz.c)(this, "cameraPitch", NX, this), (0, Uz.c)(this, "armSwinging", IX, this), (0, Uz.c)(this, "heldItemName", pX, this), (0, Uz.c)(this, "heldItemEnchantmentTier", aX, this), (0, Uz.c)(this, "pose", tX, this), (0, Uz.c)(this, "ridingVehicleEId", gX, this), (0, Uz.c)(this, "meshOffset", kX, this), (0, Uz.c)(this, "baseRenderHeading", GX, this), (0, Uz.c)(this, "armour", BX, this)
        }
      }, oX = (0, Xz.d)(FX.prototype, "scale", [JU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), DX = (0, Xz.d)(FX.prototype, "speed", [jU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), EX = (0, Xz.d)(FX.prototype, "jumping", [KU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), YX = (0, Xz.d)(FX.prototype, "crouching", [bU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), NX = (0, Xz.d)(FX.prototype, "cameraPitch", [TU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), IX = (0, Xz.d)(FX.prototype, "armSwinging", [hU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), pX = (0, Xz.d)(FX.prototype, "heldItemName", [UX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), aX = (0, Xz.d)(FX.prototype, "heldItemEnchantmentTier", [XX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), tX = (0, Xz.d)(FX.prototype, "pose", [zX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), gX = (0, Xz.d)(FX.prototype, "ridingVehicleEId", [cX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), kX = (0, Xz.d)(FX.prototype, "meshOffset", [yX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new zz.ArraySchema(0, 0, 0)
        }
      }), GX = (0, Xz.d)(FX.prototype, "baseRenderHeading", [QX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), BX = (0, Xz.d)(FX.prototype, "armour", [AX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new zz.MapSchema
        }
      }), FX),
      Ez = (ZX = (0, zz.type)("string"), RX = (0, zz.type)("string"), PX = (0, zz.type)("string"), WX = (0, zz.type)("uint8"), dX = class extends Dz {
        constructor() {
          super(...arguments), (0, Uz.c)(this, "variation", LX, this), (0, Uz.c)(this, "ownerDbId", eX, this), (0, Uz.c)(this, "metaInfo", CX, this), (0, Uz.c)(this, "aiState", wX, this)
        }
      }, LX = (0, Xz.d)(dX.prototype, "variation", [ZX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), eX = (0, Xz.d)(dX.prototype, "ownerDbId", [RX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), CX = (0, Xz.d)(dX.prototype, "metaInfo", [PX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), wX = (0, Xz.d)(dX.prototype, "aiState", [WX], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dX);
    qX = (0, zz.type)("string"), OX = (0, zz.type)("string"), SX = (0, zz.type)("string"), rX = (0, zz.type)("string"), uX = class extends oz {
      constructor() {
        super(...arguments), (0, Uz.c)(this, "meshKind", fX, this), (0, Uz.c)(this, "meshOpts", iX, this), (0, Uz.c)(this, "pose", HX, this), (0, Uz.c)(this, "leaderboardTop", MX, this)
      }
    }, fX = (0, Xz.d)(uX.prototype, "meshKind", [qX], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), iX = (0, Xz.d)(uX.prototype, "meshOpts", [OX], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), HX = (0, Xz.d)(uX.prototype, "pose", [SX], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), MX = (0, Xz.d)(uX.prototype, "leaderboardTop", [rX], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Yz(UU) {
      return Object.keys(zz.Metadata.getFields(UU))
    }
    const Nz = Yz(Ez);
    for (const Uc of cz.s)
      if (!Nz.includes(Uc)) throw new Error(`Mob Schema is missing a networked property: "${Uc}"`);
    const Iz = Yz((vX = (0, zz.type)("string"), VX = (0, zz.type)("float32"), sX = (0, zz.type)("float32"), nX = (0, zz.type)("float32"), mX = (0, zz.type)("float32"), lX = class extends oz {
      constructor() {
        super(...arguments), (0, Uz.c)(this, "soundName", xX, this), (0, Uz.c)(this, "volume", JX, this), (0, Uz.c)(this, "refDistance", jX, this), (0, Uz.c)(this, "maxHearDist", KX, this), (0, Uz.c)(this, "rate", bX, this)
      }
    }, xX = (0, Xz.d)(lX.prototype, "soundName", [vX], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), JX = (0, Xz.d)(lX.prototype, "volume", [VX], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), jX = (0, Xz.d)(lX.prototype, "refDistance", [sX], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Qz.g
      }
    }), KX = (0, Xz.d)(lX.prototype, "maxHearDist", [nX], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Qz.c
      }
    }), bX = (0, Xz.d)(lX.prototype, "rate", [mX], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), lX));
    for (const Uc of yz.f)
      if (!Iz.includes(Uc)) throw new Error(`AudioEntity Schema is missing a replicated property: "${Uc}"`);
    var pz = zU(39215),
      az = zU(1258),
      tz = zU(646),
      gz = zU(38981),
      kz = zU(4608),
      Gz = zU(344),
      Bz = zU(37919),
      Zz = zU(38849),
      Rz = zU(2334),
      Pz = zU(37888),
      Wz = zU(39244),
      dz = zU(38328),
      Lz = zU(352),
      ez = zU.n(Lz),
      Cz = zU(38680),
      wz = zU(37808),
      qz = zU(38826),
      Oz = zU(38869);
    class Sz {
      constructor(UU, XU) {
        this.bloxd = UU, this.eId = XU, this.WN = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.kp = !1, this.WN = UU.WN
      }
      initClient(UU) {
        var XU, zU, cU;
        this.colyseusEntity = UU, this.meshKind = UU.meshKind, this.meshOpts = UU.meshOpts, this.leaderboardTop = UU.leaderboardTop, this.WN.xG.add([UU.x, UU.y, UU.z], 1, 1, null, null, !1, !1, this.eId), this.WN.xG.sH(this.eId, "smoothToServerPos");
        const yU = "Person" === this.meshKind;
        this.WN.xG.sH(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...yU ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: yU ? [{
            nodeName: "HeadMesh",
            softTolerance: Wz.j,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = TX.k.subscribe(`otherEntitySettings|${this.eId}|canSee`, (UU => {
          this.updateHidingMeshMgr()
        }));
        const QU = () => {
          const UU = this.WN.xG.DzU(this.eId);
          if (!UU) return;
          const XU = (0, dz.j)(this.eId);
          if ("number" === typeof UU.YH) {
            var zU, cU, yU, QU;
            const AU = null === (zU = (0, Rz.g)("head", null === (yU = this.getSpec()) || void 0 === yU || null === (QU = yU.opts.textures) || void 0 === QU ? void 0 : QU.head)) || void 0 === zU || null === (cU = zU.personModel) || void 0 === cU ? void 0 : cU.fullBody;
            return this.WN.WY.DH.setPickable(UU.YH, XU && !AU), void(0, wz.updatePersonAttachmentPickability)(this.WN, this.eId, XU)
          }
          const AU = UU.mesh;
          if (AU)
            for (const FU of [AU, ...AU.getChildMeshes(!1)]) "ma" in FU && !FU.name.startsWith("Cape|") && (FU.ma = XU)
        };
        this.canAttackSub = TX.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, QU), this.interactableSub = TX.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, QU), this.overlayColourSub = TX.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (UU => {
          this.updateOverlayColour(UU)
        })), this.opacitySub = TX.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (UU => {
          this.updateOpacity(UU)
        })), this.zIndexSub = TX.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (UU => {
          this.updateZIndex(UU)
        }));
        const AU = this.WN.YM[this.WN.pM][this.eId];
        this.updateOverlayColour(null !== (XU = null === AU || void 0 === AU ? void 0 : AU.overlayColour) && void 0 !== XU ? XU : null), this.updateOpacity(null !== (zU = null === AU || void 0 === AU ? void 0 : AU.opacity) && void 0 !== zU ? zU : 1), this.updateZIndex(null !== (cU = null === AU || void 0 === AU ? void 0 : AU.zIndex) && void 0 !== cU ? cU : 0), this.multilineTextBoxSub = (0, Pz.o)(this.WN, this.eId)
      }
      onChangeClient(UU, XU) {
        if ("xRotation" === UU || "yRotation" === UU || "zRotation" === UU)(0, Pz.r)(this.WN, this.eId, UU, XU);
        else if ("pose" === UU) {
          const UU = this.WN.xG.azU(this.eId);
          UU && (UU.pose = XU || "standing")
        } else "meshKind" === UU || "meshOpts" === UU ? (this[UU] = XU, this.queueMeshRebuild()) : "name" === UU && "" !== XU ? this.updateHidingMeshMgr() : "leaderboardTop" === UU && (this.leaderboardTop = XU, TX.k.UY(`leaderboardTop|${this.eId}`, XU))
      }
      disposeClient() {
        this.kp = !0, this.WN.xG.deleteEntity(this.eId), TX.k.unsubscribe(this.canSeeSub), TX.k.unsubscribe(this.canAttackSub), TX.k.unsubscribe(this.interactableSub), TX.k.unsubscribe(this.overlayColourSub), TX.k.unsubscribe(this.opacitySub), TX.k.unsubscribe(this.zIndexSub), TX.k.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var UU, XU;
        return {
          canSee: null !== (UU = null === (XU = this.WN.YM[this.WN.pM][this.eId]) || void 0 === XU ? void 0 : XU.canSee) && void 0 !== UU && UU,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var UU, XU, zU;
        const {
          WN: cU
        } = this, {
          xG: yU
        } = cU, QU = this.getCurrentHidingMeshMgrState();
        if ((0, Gz.oe)(this.previousHidingMeshManagerState, QU)) return;
        if (this.previousHidingMeshManagerState = QU, yU.nH(this.eId, "hidingMeshManager"), null === (UU = cU.YM[cU.pM][this.eId]) || void 0 === UU || !UU.canSee) return;
        const AU = this.getSpec();
        if (!AU) return;
        const {
          type: FU,
          opts: oU
        } = AU;
        "Person" === FU && (oU.textures = (0, Rz.m)(oU.textures)), oU.eId = this.eId, yU.sH(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var UU, XU, zU;
            "Leaderboard" === FU && (oU.leaderboardTop = this.leaderboardTop);
            const QU = this.bloxd.client.meshCreator.getEntityMesh(FU, oU, (UU => {
              var XU, zU;
              if ("number" === typeof UU) {
                var yU, QU, AU;
                const XU = cU.WY.DH;
                XU.setEntityId(UU, this.eId);
                const zU = "Person" === FU && (null === (yU = (0, Rz.g)("head", null === (AU = oU.textures) || void 0 === AU ? void 0 : AU.head)) || void 0 === yU || null === (QU = yU.personModel) || void 0 === QU ? void 0 : QU.fullBody);
                return void XU.setPickable(UU, (0, dz.j)(this.eId) && !zU)
              }
              const DU = UU;
              for (const FU of [DU, ...DU.getChildMeshes(!1)]) void 0 === FU.ma || FU.name.startsWith("Cape|") || (FU.ma = (0, dz.j)(this.eId), FU.metadata ??= new cU.WY.la, FU.metadata.eId = this.eId);
              this.updateOpacity(null !== (XU = null === (zU = cU.YM[cU.pM][this.eId]) || void 0 === zU ? void 0 : zU.opacity) && void 0 !== XU ? XU : 1)
            }));
            if (!QU) return;
            const {
              YH: AU,
              mesh: DU,
              meshOffset: EU,
              nameYOffset: YU,
              modelLoaded: NU
            } = QU;
            null === NU || void 0 === NU || NU.then((() => {
              var UU;
              (null === (UU = yU.DzU(this.eId)) || void 0 === UU ? void 0 : UU.mesh) === DU && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const IU = null === AU ? null : cU.WY.DH.icU(AU, 0);
            if (yU.sH(this.eId, yU.names.mesh, {
                YH: AU,
                RcU: IU,
                mesh: DU,
                KFU: !1,
                WcU: "Leaderboard" !== FU,
                offset: EU.slice(),
                jFU: "ParticleEmitter" === FU && oU.followTargetMeshOffset ? UU => {
                  var XU;
                  ez().copy(UU, EU);
                  const zU = null === (XU = yU.bzU(this.eId)) || void 0 === XU ? void 0 : XU.Ep,
                    cU = void 0 === zU ? null : yU.azU(zU);
                  if (cU) {
                    var QU, AU;
                    const XU = this.bloxd.getEntityHeading(null !== (QU = cU.ridingVehicleEId) && void 0 !== QU ? QU : zU, !0),
                      yU = Math.sin(XU),
                      FU = Math.cos(XU);
                    UU[0] += cU.meshOffset[0] * FU + cU.meshOffset[2] * yU, UU[1] += cU.meshOffset[1], UU[2] += cU.meshOffset[2] * FU - cU.meshOffset[0] * yU;
                    const oU = null !== (AU = cU.ridingVehicleEId) && void 0 !== AU ? AU : null;
                    null !== oU && (0, Oz.b)(this.WN, oU, UU)
                  }
                } : null
              }), "Person" === FU) {
              var pU, aU, tU, gU;
              yU.sH(this.eId, yU.names.meshAttachments, {
                personFullBody: null !== (pU = null === (aU = (0, Rz.g)("head", null === (gU = oU.textures) || void 0 === gU ? void 0 : gU.head)) || void 0 === aU || null === (tU = aU.personModel) || void 0 === tU ? void 0 : tU.fullBody) && void 0 !== pU && pU
              });
              for (const UU of az.v) {
                var kU, GU, BU;
                const XU = null === (kU = oU.textures) || void 0 === kU ? void 0 : kU[UU];
                XU && null !== (GU = (0, Rz.g)(UU, XU)) && void 0 !== GU && null !== (BU = GU.attachments) && void 0 !== BU && BU.length && Zz.d.Player.meshApi.updatePlayerCosmetic(this.eId, AU, UU, XU)
              }
              yU.sH(this.eId, yU.names.moveState), yU.sH(this.eId, "updateWalkingState", {
                YH: AU,
                RcU: IU,
                walkingLegSwingDuration: Wz.t
              }), yU.sH(this.eId, "humanoidMesh", {
                YH: AU,
                RcU: IU,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), yU.sH(this.eId, "animator", {
                YH: AU,
                RcU: IU,
                modelLifeformType: "Player"
              }), qz.d.hasAnimation("Person") && yU.sH(this.eId, "rigAnimation", {
                target: "Person",
                YH: AU
              }), yU.azU(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === FU && null !== AU) {
              yU.sH(this.eId, "animator", {
                YH: AU,
                RcU: IU,
                modelLifeformType: null
              });
              const UU = (0, gz.q)(oU.blockName);
              null !== UU && yU.sH(this.eId, "rigAnimation", {
                target: UU,
                YH: AU
              })
            }
            yU.goU(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: YU
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === oU.autoRotate && (yU.nH(this.eId, "meshRotation"), yU.sH(this.eId, "autoRotate"));
            const {
              lineToEId: ZU
            } = oU;
            (0, tz.P)(ZU) || yU.sH(this.eId, "lineToEntity", {
              lineToEId: ZU
            });
            const RU = cU.YM[cU.pM][this.eId];
            this.updateOverlayColour(null !== (UU = null === RU || void 0 === RU ? void 0 : RU.overlayColour) && void 0 !== UU ? UU : null), this.updateOpacity(null !== (XU = null === RU || void 0 === RU ? void 0 : RU.opacity) && void 0 !== XU ? XU : 1), this.updateZIndex(null !== (zU = null === RU || void 0 === RU ? void 0 : RU.zIndex) && void 0 !== zU ? zU : 0)
          },
          removeMeshComponent: () => {
            "Person" !== FU && "BloxdBlock" !== FU || yU.nH(this.eId, "rigAnimation"), yU.nH(this.eId, yU.names.mesh), yU.qXU(this.eId, yU.names.meshAttachments) && yU.nH(this.eId, yU.names.meshAttachments), yU.nH(this.eId, "entityName"), yU.nH(this.eId, "autoRotate"), yU.nH(this.eId, "lineToEntity"), "Person" === FU ? (yU.nH(this.eId, yU.names.moveState), yU.nH(this.eId, "updateWalkingState"), yU.nH(this.eId, "humanoidMesh"), yU.nH(this.eId, "animator")) : "BloxdBlock" === FU && yU.nH(this.eId, "animator")
          },
          hideDist: null !== (XU = oU.hideDist) && void 0 !== XU ? XU : 80,
          movingHideDist: null !== (zU = oU.hideDist) && void 0 !== zU ? zU : 120,
          displayOutsideLoadedChunk: oU.hideDist > 100,
          immediatelyUpdate: !0,
          oE: "BloxdBlock" === FU ? oU.blockName : FU
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.kp || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, kz.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(UU) {
        var XU, zU;
        if ("Person" !== this.meshKind) return;
        let cU = new Bz.e(0, 0, 0, 0);
        if (null !== UU) {
          const XU = (0, Gz.W)(UU);
          cU = new Bz.e(XU[0] / 255, XU[1] / 255, XU[2] / 255, .5)
        }
        const yU = null !== (XU = null === (zU = this.WN.xG.DzU(this.eId)) || void 0 === zU ? void 0 : zU.YH) && void 0 !== XU ? XU : null;
        null !== yU && Zz.d.Player.meshApi.updateMeshOverlayColour(yU, cU)
      }
      updateZIndex(UU) {
        var XU;
        if ("Person" !== this.meshKind) return;
        const zU = null === (XU = this.WN.xG.DzU(this.eId)) || void 0 === XU ? void 0 : XU.YH;
        "number" === typeof zU && this.WN.WY.DH.setRenderingGroupId(zU, UU)
      }
      updateOpacity(UU) {
        const XU = this.WN.xG.DzU(this.eId);
        XU && ("number" !== typeof XU.YH ? XU.mesh && "ParticleEmitter" !== this.meshKind && (0, Cz.h)(XU.mesh, UU) : Zz.d.Player.meshApi.updateMeshOpacity(XU.YH, UU))
      }
    }
    var rz = zU(39807);
    class uz {
      constructor(UU, XU) {
        this.eId = XU, this.WN = void 0, this.schema = void 0, this.WN = UU.WN
      }
      initClient(UU) {
        this.schema = UU, this.WN.xG.add([UU.x, UU.y, UU.z], .1, .1, null, null, !1, !1, this.eId), this.WN.xG.sH(this.eId, "smoothToServerPos"), rz.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(UU) {
        yz.f.includes(UU) && rz.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        rz.d.remove(this.eId), this.WN.xG.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: UU,
          volume: XU,
          refDistance: zU,
          maxHearDist: cU,
          rate: yU
        } = this.schema;
        return {
          soundName: UU,
          volume: XU,
          refDistance: zU,
          maxHearDist: cU,
          rate: yU
        }
      }
    }
    var fz = zU(4063),
      iz = zU(37487),
      Hz = zU(7056),
      Mz = zU(38534),
      vz = zU(3043),
      Vz = zU(38907),
      sz = zU(9648),
      nz = zU(39255),
      mz = zU(38500),
      lz = zU(1835);
    class xz {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.gcU = UU, this.WN = XU, this.setupBudgetMs = zU, this.now = cU, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.kp = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.aG = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const UU of this.promotedSetups) {
            this.promotedSetups.delete(UU);
            const XU = this.queuedSetups.get(UU);
            XU && (this.queuedSetups.delete(UU), this.timedSetup(XU, UU))
          }
        }, this.createStateCallbacks = (0, sz.getStateCallbacks)(UU), this.roomStateCallbacks = this.createStateCallbacks(UU.state), this.roomState = UU.state, this.setupBudgetLeftMs = zU, this.lastRefillMs = cU()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.gcU.onStateChange(this.setUpPromoted), this.WN.on("beforeInputs", this.onFrame), this.WN.on("LY", this.aG)
      }
      setUpQueuedEntities(UU) {
        var XU;
        if ((null === (XU = (0, vz.b)().client.getMsgHandler()) || void 0 === XU ? void 0 : XU.gcU) !== this.gcU) return this.WN.off("beforeInputs", this.onFrame), this.WN.off("LY", this.aG), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (UU && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (ez().copy(Jz, this.WN.xG.wG(this.WN.pM)); this.setupBudgetLeftMs > 0;) {
            const UU = this.nearestQueued(Jz);
            if (null === UU) return;
            this.setUpIfQueued(UU), this.setUpPromoted()
          }
      }
      nearestQueued(UU) {
        let XU = null,
          zU = 1 / 0;
        return this.queuedSetups.forEach(((cU, yU) => {
          const QU = function(UU, XU) {
            return (XU.x - UU[0]) ** 2 + (XU.y - UU[1]) ** 2 + (XU.z - UU[2]) ** 2
          }(UU, cU);
          (null === XU || QU < zU) && (XU = yU, zU = QU)
        })), XU
      }
      setUpOrQueue(UU, XU) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(UU, XU) ? this.timedSetup(UU, XU) : this.queuedSetups.set(XU, UU)
      }
      mustSetUpNow(UU, XU) {
        const zU = this.WN.SXU;
        if (XU === zU) return !0;
        const cU = this.roomState.entities.get(zU);
        return !(!cU || cU.ridingVehicleEId !== XU && cU.followingEId !== XU) || (jz(UU.type) === pz.b || (0, vz.b)().getFollowingEntities(XU).length > 0)
      }
      setUpIfQueued(UU) {
        const XU = this.queuedSetups.get(UU);
        XU && (this.queuedSetups.delete(UU), this.timedSetup(XU, UU))
      }
      promoteIfQueued(UU) {
        null !== UU && this.queuedSetups.has(UU) && this.promotedSetups.add(UU)
      }
      timedSetup(UU, XU) {
        const zU = this.now();
        this.setupEntity(UU, XU), this.setupBudgetLeftMs -= this.now() - zU
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.lG(((UU, XU) => {
          this.WN.SXU ? this.setUpOrQueue(UU, XU) : this.deferEntitySetupUntilInitInfo(UU, XU)
        })), this.roomStateCallbacks.entities.Cw(((UU, XU) => {
          const zU = this.deferredSetups.get(XU);
          zU && (TX.k.unsubscribe(zU), this.deferredSetups.delete(XU)), this.queuedSetups.delete(XU), this.detach(XU), (0, vz.b)().client.disposeEntity(XU)
        }))
      }
      deferEntitySetupUntilInitInfo(UU, XU) {
        const zU = TX.k.Nk("initInfoReceived", (() => {
          this.deferredSetups.delete(XU), this.setUpOrQueue(UU, XU)
        }));
        this.deferredSetups.set(XU, zU), (0, fz.onGameResetOnce)((() => {
          this.deferredSetups.get(XU) === zU && (TX.k.unsubscribe(zU), this.deferredSetups.delete(XU)), (0, vz.b)().updatePositionAndPhysics(this.WN.pM, {
            type: Hz.o.DEFAULT,
            tier: null
          }, !0), (0, vz.b)().takeHeldPlayerBodySize(this.WN.pM);
          const UU = this.WN.xG.KXU(this.WN.pM);
          UU && (UU.movementType = Hz.l.NORMAL)
        }))
      }
      setupEntity(UU, XU) {
        const zU = XU === this.WN.SXU;
        if (zU)(0, vz.b)().client.bK(this.WN.pM, null, null);
        else {
          const {
            type: zU
          } = UU, cU = jz(zU);
          if (void 0 === cU) return void
          function(UU, XU) {
            const zU = String(UU);
            if (Kz.has(zU)) return;
            Kz.add(zU);
            const cU = zU.length > 80 ? `${zU.slice(0,80)}...` : zU,
              yU = `No client handler for entity type ${JSON.stringify(cU)}, so entity ${XU} is not set up`;
            console.warn(yU), (0, lz.reportClientError)("uncaught", yU, "unknown_entity_type")
          }(zU, XU);
          (0, vz.b)().client.bK(XU, UU, new cU((0, vz.b)(), XU, zU))
        }
        const cU = this.createStateCallbacks(UU);
        if (zU) return this.setupMapSchemaCallbacks(XU, UU, cU, "armour"), this.setupScalarField(XU, UU, cU, "scale"), this.setupScalarField(XU, UU, cU, "ridingVehicleEId"), this.setupScalarField(XU, UU, cU, "followingEId"), this.setupScalarField(XU, UU, cU, "followingOffset"), void this.setupScalarField(XU, UU, cU, "shouldMatchFollowingEntityRotation");
        for (const yU of Yz(UU.constructor)) UU[yU] instanceof zz.MapSchema ? this.setupMapSchemaCallbacks(XU, UU, cU, yU) : this.setupScalarField(XU, UU, cU, yU)
      }
      setupMapSchemaCallbacks(UU, XU, zU, cU) {
        const yU = zU[cU],
          QU = new Map;
        yU.lG(((zU, yU) => {
          if (this.onEntityFieldChange(UU, XU, cU, {
              key: yU,
              value: zU
            }), !(zU instanceof zz.Schema)) return;
          const AU = this.createStateCallbacks(zU),
            FU = [];
          for (const QU of Yz(zU.constructor)) FU.push(this.listenForFutureChanges(AU, QU, (() => {
            this.onEntityFieldChange(UU, XU, cU, {
              key: yU,
              value: zU
            })
          })));
          QU.set(yU, (() => {
            for (const UU of FU) UU()
          }))
        })), yU.Cw(((zU, yU) => {
          var AU;
          null === (AU = QU.get(yU)) || void 0 === AU || AU(), QU.delete(yU), this.onEntityFieldChange(UU, XU, cU, {
            key: yU,
            value: null
          })
        })), this.addDetacher(UU, (() => {
          for (const UU of QU.values()) UU();
          QU.clear()
        }))
      }
      setupScalarField(UU, XU, zU, cU) {
        this.onEntityFieldChange(UU, XU, cU, XU[cU]);
        const yU = this.listenForFutureChanges(zU, cU, (zU => {
          this.onEntityFieldChange(UU, XU, cU, zU)
        }));
        this.addDetacher(UU, yU)
      }
      addDetacher(UU, XU) {
        let zU = this.detachers.get(UU);
        zU || (zU = [], this.detachers.set(UU, zU)), zU.push(XU)
      }
      detach(UU) {
        for (const zU of null !== (XU = this.detachers.get(UU)) && void 0 !== XU ? XU : []) {
          var XU;
          zU()
        }
        this.detachers.delete(UU)
      }
      listenForFutureChanges(UU, XU, zU) {
        return UU.listen(XU, zU, !1)
      }
      onEntityFieldChange(UU, XU, zU, cU) {
        switch (zU) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(cU);
            const XU = this.WN.xG.azU((0, iz.c)(UU));
            XU && (XU.ridingVehicleEId = cU);
            break
          }
          case "armour":
            this.handleArmourChange(UU, cU);
            break;
          case "followingEId":
            this.promoteIfQueued(cU), this.handleFollowingEIdChange(UU, XU, cU);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(UU, zU, cU);
            break;
          case "scale":
            this.handleScaleChange(UU, cU);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(UU, cU);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(UU, cU);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(UU, cU);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(UU, zU, cU)
        }(0, vz.b)().client.updateEntityField(UU, zU, cU)
      }
      handleArmourChange(UU, XU) {
        var zU, cU;
        const {
          key: yU,
          value: QU
        } = XU;
        (0, Zz.z)(UU, yU, null !== (zU = null === QU || void 0 === QU ? void 0 : QU.itemName) && void 0 !== zU ? zU : null, null !== (cU = null === QU || void 0 === QU ? void 0 : QU.enchantmentTier) && void 0 !== cU ? cU : null)
      }
      handleFollowingEIdChange(UU, XU, zU) {
        const cU = (0, iz.c)(UU),
          yU = cU === this.WN.pM;
        if (this.WN.xG.nH(cU, this.WN.xG.names.RZ), zU) this.WN.xG.nH(cU, "smoothToServerPos"), this.WN.xG.sH(cU, this.WN.xG.names.RZ, {
          Ep: (0, iz.c)(zU),
          offset: Array.from(XU.followingOffset),
          TzU: XU.shouldMatchFollowingEntityRotation,
          ccU: !0,
          ycU: (UU, cU) => {
            if (ez().copy(UU, XU.followingOffset), XU.ridingVehicleEId === zU) {
              const XU = (0, iz.c)(zU),
                yU = (0, vz.b)().getEntityHeading(XU, cU);
              ez().ta(UU, UU, ez().ZERO, yU)
            }
          }
        });
        else if (!yU) {
          this.WN.xG.qXU(cU, "smoothToServerPos") || this.WN.xG.sH(cU, "smoothToServerPos");
          const UU = this.WN.xG.getState(cU, "smoothToServerPos"),
            XU = this.WN.xG.hK(cU).position;
          (0, mz.setServerPosition)(UU, XU[0], XU[1], XU[2])
        }
      }
      handleRotationChange(UU, XU, zU) {
        const cU = "xRotation" === XU ? 0 : "yRotation" === XU ? 1 : 2;
        for (const yU of (0, vz.b)().getFollowingEntities(UU)) {
          const UU = this.WN.xG.getState(yU, "meshRotation"),
            XU = this.WN.xG.bzU(yU);
          UU && XU.TzU && (UU.serverSetRotation[cU] = zU)
        }
      }
      handleScaleChange(UU, XU) {
        const zU = (0, iz.c)(UU);
        if (TX.k.UY(`entityScale|${zU}`, XU), zU === this.WN.pM) {
          var cU;
          (0, vz.b)().removeFromEyeHeightCache(zU);
          const UU = this.WN.xG.KXU(this.WN.pM),
            XU = null !== (cU = null === UU || void 0 === UU ? void 0 : UU.physicsState) && void 0 !== cU ? cU : {
              type: Hz.o.DEFAULT,
              tier: null
            };
          return void(0, vz.b)().updatePositionAndPhysics(this.WN.pM, XU, !1)
        }
        const yU = (0, vz.b)().getLifeformType(zU);
        if (null === yU) return;
        const {
          physicsBodyWidth: QU,
          physicsBodyHeight: AU
        } = (0, nz.i)(XU, yU);
        this.WN.xG.jzU(zU, QU, AU, QU)
      }
      handleBaseRenderHeadingChange(UU, XU) {
        const zU = this.WN.xG.getState(UU, "meshRotation");
        zU && (zU.baseRenderRotation[1] = XU);
        for (const cU of (0, vz.b)().getFollowingEntities(UU)) {
          const UU = this.WN.xG.getState(cU, "meshRotation"),
            zU = this.WN.xG.bzU(cU);
          UU && zU.TzU && (UU.baseRenderRotation[1] = XU)
        }
      }
      handleFollowingOffsetChange(UU, XU) {
        const zU = this.WN.xG.bzU((0, iz.c)(UU));
        if (zU && zU.offset) {
          const UU = XU ? Array.from(XU) : ez().ZERO;
          zU.offset[0] = UU[0], zU.offset[1] = UU[1], zU.offset[2] = UU[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(UU, XU) {
        const zU = this.WN.xG.bzU((0, iz.c)(UU));
        zU && (zU.TzU = null === XU || void 0 === XU || XU)
      }
      handlePositionChange(UU, XU, zU) {
        if (this.WN.xG.qXU(UU, "smoothToServerPos")) {
          const cU = this.WN.xG.getState(UU, "smoothToServerPos");
          (0, mz.setServerPositionAxis)(cU, bz[XU], zU)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.lG(((UU, XU) => {
          this.allItems[XU] = UU, (0, Mz.h)(this.WN, XU, [UU.x, UU.y, UU.z], UU.id, {
            amount: UU.amount,
            attributes: JSON.parse(UU.attributes),
            uX: (0, hX.b)(this.WN).cantPickUpItem(XU),
            size: UU.size,
            predictedAt: (0, vz.b)().client.itemDropPrediction.onServerItemAdded(XU)
          });
          const zU = this.createStateCallbacks(UU);
          for (const cU of Yz(Az)) this.onItemFieldChange(XU, cU, UU[cU]), this.addDetacher(XU, this.listenForFutureChanges(zU, cU, (UU => {
            this.onItemFieldChange(XU, cU, UU)
          })))
        })), this.roomStateCallbacks.items.Cw(((UU, XU) => {
          delete this.allItems[XU], this.detach(XU), (0, vz.b)().client.itemDropPrediction.onServerItemRemoved(XU), this.WN.xG.qXU(XU, this.WN.xG.names.itemState) && this.WN.xG.deleteEntity(XU), (0, hX.b)(this.WN).disposeEntity(XU)
        }))
      }
      onItemFieldChange(UU, XU, zU) {
        if (XU in bz) {
          if (this.WN.xG.qXU(UU, "itemState")) {
            const cU = this.WN.xG.getState(UU, "smoothToServerPos");
            (0, mz.setServerPositionAxis)(cU, bz[XU], zU), (0, vz.b)().client.itemDropPrediction.onServerItemMoved(UU)
          }
          return
        }
        if (!this.WN.xG.qXU(UU, "itemState")) return;
        const cU = this.WN.xG.getState(UU, "itemState");
        "amount" === XU && zU !== cU.amount && (cU.creationTime = Date.now()), cU[XU] = "attributes" === XU ? JSON.parse(zU) : zU
      }
      dispose() {
        if (!this.kp) {
          this.kp = !0, this.WN.off("beforeInputs", this.onFrame), this.WN.off("LY", this.aG), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const UU of this.deferredSetups.values()) TX.k.unsubscribe(UU);
          this.deferredSetups.clear(), this.WN.xG.nH(this.WN.pM, this.WN.xG.names.RZ);
          for (const UU in this.allItems) this.WN.xG.deleteEntity(UU), delete this.allItems[UU];
          for (const UU of [...this.detachers.keys()]) this.detach(UU);
          (0, hX.b)(this.WN).clear();
          for (const UU of (0, vz.b)().client.iterateEntityIds())(0, vz.b)().client.disposeEntity(UU)
        }
      }
    }
    const Jz = [0, 0, 0];

    function jz(UU) {
      if ("string" !== typeof UU) return;
      const XU = UU.indexOf("|"),
        zU = -1 === XU ? UU : UU.slice(0, XU),
        cU = hz();
      return Object.hasOwn(cU, zU) ? cU[zU] : void 0
    }
    const Kz = new Set;
    const bz = {
      x: 0,
      y: 1,
      z: 2
    };
    let Tz = null;

    function hz() {
      return null !== Tz || (Tz = {
        ...Object.fromEntries(yz.h.map((UU => {
          const {
            oE: XU
          } = (0, Vz.d)(UU);
          return [UU, XU]
        }))),
        Pebble: pz.b,
        Snowball: pz.b,
        "Snowball Launcher": pz.b,
        "Reinforced Pebble": pz.b,
        Bullet: pz.b,
        "Reinforced Ball": pz.b,
        Ball: pz.b,
        Mango: pz.b,
        "Moonstone Orb": pz.b,
        ...Object.fromEntries(cz.w.map((UU => [(0, Gz.cc)(UU), pz.b]))),
        Arrow: pz.b,
        "Arrow of Speed": pz.b,
        "Arrow of Poison": pz.b,
        "Arrow of Slowness": pz.b,
        "Arrow of Weakness": pz.b,
        "Arrow of Knockback": pz.b,
        "Arrow of Strength": pz.b,
        "Arrow of Invisibility": pz.b,
        "Arrow of Jumping": pz.b,
        "Arrow of Defense": pz.b,
        "Arrow of Instant Healing": pz.b,
        "Arrow of Instant Damage": pz.b,
        "Arrow of Regeneration": pz.b,
        "Arrow of Haste": pz.b,
        "Arrow of Shield": pz.b,
        "Arrow of Double Jump": pz.b,
        "Arrow of Heat Resistance": pz.b,
        "Arrow of X-Ray Vision": pz.b,
        "Arrow of Mining Yield": pz.b,
        "Arrow of Brain Rot": pz.b,
        "Arrow of Milk": pz.b,
        Fireball: pz.b,
        "Bouncy Bomb": pz.b,
        RPG: pz.b,
        "Obby RPG": pz.b,
        "Super RPG": pz.b,
        "Grenade Launcher": pz.b,
        Iceball: pz.b,
        Coconut: pz.b,
        "Splash Speed Potion": pz.b,
        "Splash Defense Potion": pz.b,
        "Splash Strength Potion": pz.b,
        "Splash Invisibility Potion": pz.b,
        "Splash Jump Potion": pz.b,
        "Splash Knockback Potion": pz.b,
        "Splash Poison Potion": pz.b,
        "Splash Speed Potion II": pz.b,
        "Splash Defense Potion II": pz.b,
        "Splash Strength Potion II": pz.b,
        "Splash Jump Potion II": pz.b,
        "Splash Knockback Potion II": pz.b,
        "Splash Poison Potion II": pz.b,
        "Splash Slowness Potion": pz.b,
        "Splash Slowness Potion II": pz.b,
        "Splash Weakness Potion": pz.b,
        "Splash Weakness Potion II": pz.b,
        "Splash Milk Potion": pz.b,
        "Splash Instant Damage Potion": pz.b,
        "Splash Instant Damage Potion II": pz.b,
        "Splash Instant Healing Potion": pz.b,
        "Splash Instant Healing Potion II": pz.b,
        "Splash Regeneration Potion": pz.b,
        "Splash Regeneration Potion II": pz.b,
        "Splash Haste Potion": pz.b,
        "Splash Haste Potion II": pz.b,
        "Splash Shield Potion": pz.b,
        "Splash Shield Potion II": pz.b,
        "Splash Double Jump Potion": pz.b,
        "Splash Heat Resistance Potion": pz.b,
        "Splash X-Ray Vision Potion": pz.b,
        "Splash Mining Yield Potion": pz.b,
        "Splash Mining Yield Potion II": pz.b,
        "Splash Brain Rot Potion": pz.b,
        "Yellow Paintball Gun": pz.b,
        "White Paintball Gun": pz.b,
        "Red Paintball Gun": pz.b,
        "Purple Paintball Gun": pz.b,
        "Pink Paintball Gun": pz.b,
        "Orange Paintball Gun": pz.b,
        "Magenta Paintball Gun": pz.b,
        "Lime Paintball Gun": pz.b,
        "Light Gray Paintball Gun": pz.b,
        "Light Blue Paintball Gun": pz.b,
        "Green Paintball Gun": pz.b,
        "Gray Paintball Gun": pz.b,
        "Cyan Paintball Gun": pz.b,
        "Brown Paintball Gun": pz.b,
        "Blue Paintball Gun": pz.b,
        "Black Paintball Gun": pz.b,
        "Yellow Heavy Paintball Gun": pz.b,
        "White Heavy Paintball Gun": pz.b,
        "Red Heavy Paintball Gun": pz.b,
        "Purple Heavy Paintball Gun": pz.b,
        "Pink Heavy Paintball Gun": pz.b,
        "Orange Heavy Paintball Gun": pz.b,
        "Magenta Heavy Paintball Gun": pz.b,
        "Lime Heavy Paintball Gun": pz.b,
        "Light Gray Heavy Paintball Gun": pz.b,
        "Light Blue Heavy Paintball Gun": pz.b,
        "Green Heavy Paintball Gun": pz.b,
        "Gray Heavy Paintball Gun": pz.b,
        "Cyan Heavy Paintball Gun": pz.b,
        "Brown Heavy Paintball Gun": pz.b,
        "Blue Heavy Paintball Gun": pz.b,
        "Black Heavy Paintball Gun": pz.b,
        "Toxin Ball": pz.b,
        "Splash Aura XP Potion": pz.b,
        "Splash Aura XP Potion II": pz.b,
        "Arrow of Aura XP": pz.b,
        Firecracker: pz.b,
        "Rainbow Firecracker": pz.b,
        "White Firecracker": pz.b,
        "Orange Firecracker": pz.b,
        "Magenta Firecracker": pz.b,
        "Light Blue Firecracker": pz.b,
        "Yellow Firecracker": pz.b,
        "Lime Firecracker": pz.b,
        "Pink Firecracker": pz.b,
        "Gray Firecracker": pz.b,
        "Light Gray Firecracker": pz.b,
        "Cyan Firecracker": pz.b,
        "Purple Firecracker": pz.b,
        "Blue Firecracker": pz.b,
        "Brown Firecracker": pz.b,
        "Green Firecracker": pz.b,
        "Red Firecracker": pz.b,
        "Black Firecracker": pz.b,
        "Firecracker Pebble": pz.b,
        "Rainbow Firecracker Pebble": pz.b,
        "White Firecracker Pebble": pz.b,
        "Orange Firecracker Pebble": pz.b,
        "Magenta Firecracker Pebble": pz.b,
        "Light Blue Firecracker Pebble": pz.b,
        "Yellow Firecracker Pebble": pz.b,
        "Lime Firecracker Pebble": pz.b,
        "Pink Firecracker Pebble": pz.b,
        "Gray Firecracker Pebble": pz.b,
        "Light Gray Firecracker Pebble": pz.b,
        "Cyan Firecracker Pebble": pz.b,
        "Purple Firecracker Pebble": pz.b,
        "Blue Firecracker Pebble": pz.b,
        "Brown Firecracker Pebble": pz.b,
        "Green Firecracker Pebble": pz.b,
        "Red Firecracker Pebble": pz.b,
        "Black Firecracker Pebble": pz.b,
        "Blinding Pebble": pz.b,
        Poop: pz.b,
        "Wood Boomerang": pz.b,
        "Stone Boomerang": pz.b,
        "Iron Boomerang": pz.b,
        "Gold Boomerang": pz.b,
        "Diamond Boomerang": pz.b,
        "Amethite Boomerang": pz.b,
        "Magmasteel Boomerang": pz.b,
        "Rubellite Boomerang": pz.b,
        "Serpentite Boomerang": pz.b,
        "Moonstone Boomerang": pz.b,
        "67 Base Projectile": pz.b,
        "67 Boosted Projectile": pz.b,
        "Capitano Grenade": pz.b,
        "Scatter Pellet": pz.b,
        "Lucky Bomb": pz.b,
        "Unlucky Bomb": pz.b,
        "Swap Orb": pz.b,
        Mesh: Sz,
        AudioEntity: uz
      }), Tz
    }
  },
  39849: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      f: () => AU
    });
    var cU = zU(646),
      yU = zU(38469);
    const QU = 4e4;
    class AU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = UU, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(UU, XU, zU) {
        const QU = (0, cU.W)(UU),
          AU = (0, cU.W)(XU),
          FU = (0, cU.W)(zU),
          oU = this.now();
        if (QU !== this.lastChunkX || AU !== this.lastChunkY || FU !== this.lastChunkZ) {
          this.lastChunkX = QU, this.lastChunkY = AU, this.lastChunkZ = FU, this.lastChunkId = (0, yU.b)(QU, AU, FU), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, oU);
          for (const [UU, XU] of this.editedAt) {
            if (XU >= oU - 3e5) break;
            this.editedAt.delete(UU)
          }
        } else this.editedAt.set(this.lastChunkId, oU)
      }
      chunksEditedSince(UU) {
        const XU = [];
        for (const [zU, cU] of this.editedAt) cU >= UU && XU.push(zU);
        return XU
      }
    }
  },
  39888: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => IX,
      g: () => VX,
      h: () => OX,
      i: () => sX
    });
    var cU = zU(4063),
      yU = zU(9339),
      QU = zU(37405),
      AU = zU(1482),
      FU = zU(37478),
      oU = zU(39807),
      DU = zU(39799),
      EU = zU(4139),
      YU = zU(38614),
      NU = zU(39897),
      IU = zU(1258),
      pU = zU(320),
      aU = zU(31),
      tU = zU(2032),
      gU = zU(97),
      kU = zU(42),
      GU = zU(2058),
      BU = zU(1974),
      ZU = zU(3278);
    class RU {
      constructor(UU) {
        this.storeForMs = UU, this.clicks = new ZU.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const UU = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < UU;) this.clicks.dequeue()
      }
      getNumClicksInMs(UU) {
        let XU = 0;
        return this.clicks.forEach((zU => {
          zU > Date.now() - UU && XU++
        })), XU
      }
      getMaxClickSeparationInMs(UU) {
        if (0 === this.clicks.size) return this.storeForMs;
        let XU = 0,
          zU = Date.now() - UU;
        this.clicks.forEach((cU => {
          cU < Date.now() - UU || (XU = Math.max(XU, Math.abs(cU - zU)), zU = cU)
        }));
        const cU = Math.abs(Date.now() - zU);
        return Math.max(XU, cU)
      }
    }
    class PU {
      constructor(UU) {
        this.storeForMs = UU, this.clickDownDurations = new ZU.b
      }
      registerClickDownDuration(UU) {
        this.clickDownDurations.enqueue({
          dur: UU,
          atTime: Date.now()
        });
        const XU = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < XU;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(UU) {
        if (UU > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let XU = 0,
          zU = 0;
        return this.clickDownDurations.forEach((cU => {
          cU.atTime > Date.now() - UU && (XU++, zU = Math.max(zU, cU.dur))
        })), `${XU}:${zU}`
      }
    }
    var WU = zU(37211),
      dU = zU(39900),
      LU = zU(27),
      eU = zU(3043),
      CU = zU(1360),
      wU = zU(2601),
      qU = zU(4871),
      OU = zU(142),
      SU = zU(38914),
      rU = zU(39158),
      uU = zU(646),
      fU = zU(37203),
      iU = zU(13),
      HU = zU(9782),
      MU = zU(1236),
      vU = zU(212),
      VU = zU(39907),
      sU = zU(39911),
      nU = zU(39919),
      mU = zU(38952),
      lU = zU(39930),
      xU = zU(38838),
      JU = zU(3791),
      jU = zU(1680),
      KU = zU(37325),
      bU = zU(3099),
      TU = zU(37081),
      hU = zU(37083),
      UX = zU(39926),
      XX = zU(38682);
    const zX = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function cX() {
      var UU, XU;
      return !(null === (UU = (0, eU.b)().client) || void 0 === UU || null === (XU = UU.freeCameraController) || void 0 === XU || !XU.movesFly())
    }

    function yX(UU) {
      const XU = UU.on.bind(UU);
      UU.on = (UU, zU) => {
        GU.E.has(UU) ? XU(UU, zU) : XU(UU, (XU => {
          var cU;
          return null !== (cU = (0, eU.b)().client) && void 0 !== cU && cU.isReplayMode() ? function(UU) {
            return UU in zX
          }(UU) && cX() ? zU(XU) : void 0 : zU(XU)
        }))
      }
    }
    const QX = 5e3,
      AX = 1;
    let FX, oX = AX,
      DX = 0;
    const EX = !0;
    let YX = EX;
    tU.d.subscribe("_ignoreBasicBoards", (UU => {
      YX = UU
    })), (0, cU.onGameReset)((() => {
      YX = EX
    }));
    let NX = null;
    const IX = () => NX;
    let pX, aX, tX;
    var gX, kX, GX, BX, ZX, RX, PX, WX, dX;
    const LX = [108, 0, 1, 8, "c", 60, "i", "g", "e", 101, 4, 255, "length", "b", "d", "a", "undefined", void 0, 2, 230, 11, 63, 6, "fromCodePoint", 7, 12, "push", 159, 102, 103, 124, "h", 72, 9, 91, 5, 8191, 88, 13, 14, 28, 33554432, 67108864, 3, 204, 42, 15, 66, 201, "f", null, 227, 237, !1, 53, 176, 29, 128, 40, 129, 123, 163, 213, 249, 1023, 97, 65536, 10, 55296, 56320, 44, 20, 199, 31, 18, 43, 220, 223, 171, 177, 210, 192, 224, 153, 181, 240, 50, 219, 164, 51, !0, 229, 187, 127, 73, 118, 104, 209, 208, 95, 148, 167, 122, 145, 149, 186, 116, 99];

    function eX(...UU) {
      return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = function(...UU) {
        for (qX(UU[LX[12]] = LX[2], UU[-LX[5]] = '.kOHgshrTGL}p0Jl%ioAf]@jVB(z#15>~Na$^"RE6w/edKq9=IC_D7mSY|+<`M?!xv4Q,u)c&3:UXW*Pt82y[FnZ;{b', UU[LX[0]] = "" + (UU[LX[1]] || ""), UU[LX[4]] = UU[LX[0]].length, UU[LX[10]] = [], UU[LX[8]] = LX[1], UU[LX[9]] = LX[1], UU[LX[7]] = -LX[2]), UU[LX[3]] = LX[1]; UU[LX[3]] < UU[LX[4]]; UU[LX[3]]++)
          if (UU[LX[6]] = UU[-LX[5]].indexOf(UU[LX[0]][UU[LX[3]]]), UU[LX[6]] !== -LX[2])
            if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[6]];
            else {
              qX(UU[LX[7]] += UU[LX[6]] * LX[34], UU[LX[8]] |= UU[LX[7]] << UU[LX[9]], UU[LX[9]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
              do {
                qX(UU[LX[10]].push(UU[LX[8]] & LX[11]), UU[LX[8]] >>= LX[3], UU[LX[9]] -= LX[3])
              } while (UU[LX[9]] > LX[24]);
              UU[LX[7]] = -LX[2]
            } return UU[LX[7]] > -LX[2] && UU[LX[10]].push((UU[LX[8]] | UU[LX[7]] << UU[LX[9]]) & LX[11]), CX(UU[LX[10]])
      }(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
    }

    function CX(UU) {
      return typeof BX !== LX[16] && BX ? (new BX).decode(new ZX(UU)) : typeof RX !== LX[16] && RX ? RX.from(UU).toString("utf-8") : dX(UU)
    }

    function wX() {}

    function qX() {
      qX = function() {}
    }

    function OX(UU) {
      function XU() {
        return UU.xG.HzU(UU.pM)
      }
      yX(UU.inputs.down), yX(UU.inputs.up);
      for (const cU of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const XU = (XU, zU) => {
          var yU, QU;
          if (cX()) {
            var AU;
            const yU = zX[cU];
            var FU, oU;
            if (yU) null === (FU = (0, eU.b)().client) || void 0 === FU || null === (oU = FU.freeCameraController) || void 0 === oU || oU.handlefreeCamKeyPress(yU, XU, zU);
            return void(zU || null !== (AU = (0, eU.b)().client) && void 0 !== AU && AU.isReplayMode() || (UU.xG.nzU()[cU] = !1))
          }
          if (null !== (yU = (0, eU.b)().client) && void 0 !== yU && null !== (QU = yU.freeCameraController) && void 0 !== QU && QU.isKeyPressOverriden(XU)) return;
          UU.xG.nzU()[cU] = zU
        };
        UU.inputs.down.on(cU, (UU => XU(UU, !0))), UU.inputs.up.on(cU, (UU => XU(UU, !1)))
      }
      UU.inputs.down.on("crouch", (() => {
        if (cX()) return;
        if (!UU.mG.canCrouch) return;
        const XU = UU.xG.nzU();
        LU.e.get("clientEscMenuOptions").crouchIsToggle && (XU.crouchToggled = !XU.crouchToggled && !XU.padSneakToggled), XU.padSneakToggled = !1
      }));
      const zU = () => {
        const UU = XU();
        UU.isGun() && UU.inaccuracyCalculator.jump()
      };
      UU.inputs.down.on("jump", (UU => {
        cX() || (zU(), pX(UU))
      }));
      for (const cU of GU.l) UU.inputs.down.on(cU, (UU => {
        var XU, zU;
        null !== (XU = (0, eU.b)().client) && void 0 !== XU && null !== (zU = XU.freeCameraController) && void 0 !== zU && zU.handlefreeCamKeyPress(cU, UU, !0) && (UU.preventDefault(), UU.stopPropagation())
      })), UU.inputs.up.on(cU, (UU => {
        var XU, zU;
        null !== (XU = (0, eU.b)().client) && void 0 !== XU && null !== (zU = XU.freeCameraController) && void 0 !== zU && zU.handlefreeCamKeyPress(cU, UU, !1) && (UU.preventDefault(), UU.stopPropagation())
      }));
      UU.inputs.down.on("recordGame", (() => {
        var UU, XU;
        null === (UU = (0, eU.b)().client) || void 0 === UU || null === (XU = UU.gameRecorder) || void 0 === XU || XU.toggleRecording()
      })), UU.inputs.down.on("recordClip", (() => {
        var UU, XU;
        (0, WU.e)() || null === (UU = (0, eU.b)().client) || void 0 === UU || null === (XU = UU.gameRecorder) || void 0 === XU || XU.saveClip()
      }));
      for (const cU of GU.E) UU.inputs.down.on(cU, (() => {
        var UU;
        if ((0, dU.d)()) return;
        if ("replayViewerOpen" === cU) return void aU.k.UY("replayViewer|requested", "toggle");
        const XU = null === (UU = (0, eU.b)().client) || void 0 === UU ? void 0 : UU.gameReplayer;
        ((0, WU.e)() || null !== XU && void 0 !== XU && XU.isReplayMode()) && (null === XU || void 0 === XU || XU.handleAction(cU))
      }));
      const AU = new RU(3e4),
        YU = new PU(4e4);
      let NU = 0;
      const kU = UU => {
          let XU = 0,
            zU = null;
          const cU = XU => null !== XU && XU === zU && (zU = null, UU(), !0);
          return {
            press: () => (XU++, (0, VU.c)() || (cU(zU), zU = XU), XU),
            owns: UU => UU === zU,
            release: cU
          }
        },
        ZU = (UU, zU) => {
          zU && sX(IU.b.TouchDownFirePrimary), UU ? HU() : ((0, rU.c)(), XU().rcU()), zU || sX(IU.b.DownFirePrimary), VX(!0), AU.click();
          const yU = AU.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            QU = AU.getMaxClickSeparationInMs(1e4) < 20,
            FU = AU.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (yU || QU || FU) {
            let UU;
            if (yU) UU = 30;
            else if (QU) UU = 50;
            else {
              if (!FU) throw new Error("???");
              UU = 70
            }(0, cU.sendColyMessage)(EU.xj, UU)
          }
        },
        qU = new sU.b,
        OU = kU((() => {
          sU.b.stopRunning();
          const UU = Date.now() - NU;
          YU.registerClickDownDuration(UU), XU().qcU(), sX(IU.b.UpFirePrimary), VX(!1);
          const zU = YU.clickDownDurationsCheck(4e4);
          (0, cU.sendColyMessage)(EU.Xf, zU)
        }));
      let SU = 0;
      UU.inputs.down.on("primary-fire", (function(UU) {
        SU = OU.press(), OU.owns(SU) && (NU = Date.now(), Math.abs(performance.now() - UU.timeStamp) > 5e3 || (ZU(UU.altKey, "changedTouches" in UU), pX(UU)))
      })), UU.inputs.up.on("primary-fire", (function(UU) {
        OU.release(SU) && pX(UU, !0)
      }));
      const uU = () => {
          XU().EEU(), sX(IU.b.DownFireSecondary), VX(!0), UU.gXU && !UU.gXU.position && (0, DU.e)()
        },
        fU = kU((() => {
          XU().CcU(), sX(IU.b.UpFireSecondary), VX(!1)
        }));
      let iU = 0;
      UU.inputs.down.on("alt-fire", (function(UU) {
        iU = fU.press(), fU.owns(iU) && (uU(), pX(UU))
      })), UU.inputs.up.on("alt-fire", (function(UU) {
        fU.release(iU) && pX(UU, !0)
      }));
      const HU = () => XU().IEU();
      UU.inputs.down.on("mid-fire", (() => {
        (0, VU.c)() || HU()
      }));
      const lU = UU => {
          (0, cU.sendColyMessage)(EU.Yg, UU, !0)
        },
        FX = UU => {
          (0, cU.sendColyMessage)(EU._g, {
            rD: UU,
            uD: EX()
          }, !0)
        };
      for (const cU of ["SpecialAction1", "SpecialAction2"]) UU.inputs.down.on(cU, (() => {
        lU(cU)
      })), UU.inputs.up.on(cU, (() => {
        FX(cU)
      }));
      const DX = () => {
        const UU = XU();
        UU.isGun() && UU.reload(Date.now())
      };
      UU.inputs.down.on("ReloadGun", DX);
      const EX = () => {
        let XU = "a";
        return UU.physics.testSolid.toString().includes("nN") || (XU = "b"), XU
      };
      UU.inputs.down.on("OpenInventory", (UU => {
        UU.preventDefault(), (0, jU.A)(UU, "inventory", (0, nU.d)((0, eU.e)()))
      })), UU.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const YX = UU => {
        aU.k.UY("DropItemKeyPressed", UU)
      };
      UU.inputs.down.on("DropItem", (() => {
        YX(UU.xG.nzU().crouch)
      })), UU.inputs.down.on("OpenShop", (XU => {
        (0, WU.e)() || "inGame" === LU.e.get("gameState") && (0, jU.x)(XU, pU.s.SHOP, !(0, yU.c)(UU.mG.shopInfo))
      })), UU.inputs.down.on("OpenLobbyLeaderboard", (XU => {
        (0, WU.e)() || "inGame" === LU.e.get("gameState") && (0, jU.x)(XU, pU.s.LOBBY_LEADERBOARD, (0, UX.c)(UU.mG))
      })), UU.inputs.down.on("HideUi", (() => {
        aU.k.UY("showUi", !1)
      })), UU.inputs.up.on("HideUi", (() => {
        aU.k.UY("showUi", !0)
      }));
      const IX = UU => {
        0 === UU && (UU = 10), aU.k.UY("setSelectedInventorySlotI", UU - 1), aU.k.UY("numkeyPressed", UU)
      };
      for (let cU = 1; cU <= 10; cU++) UU.inputs.down.on("HotBarSlot" + cU.toString(), (() => {
        IX(cU)
      }));
      UU.inputs.down.on("OpenTasksAndLeaderboard", (XU => {
        const zU = (0, KU.n)();
        zU ? (0, jU.C)(XU, !0, zU) : (0, jU.A)(XU, "retentionFeatures", !(!UU.mG._tasks && !UU.mG._availableLeaderboards))
      })), UU.inputs.down.on("OpenCodeEditor", (XU => {
        (0, jU.C)(XU, (0, wU.d)((0, CU.b)()), (() => {
          (0, wU.l)(UU.xG.wG(UU.pM))
        }))
      })), UU.inputs.bind("ToggleFullCoordinateOverlay", "F3"), UU.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        aU.k.UY("toggleFullCoordinateOverlay")
      }));
      const tX = () => {
        (0, eU.b)().client.cameraController.swapCameraZoom()
      };
      UU.inputs.down.on("SwapCameraZoom", tX), UU.inputs.down.on("OpenInviteLink", (UU => {
        (0, jU.A)(UU, "inviteLink", gU.featureFlags.canUseInviteLinks)
      })), UU.inputs.bind("Y", "KeyY"), UU.inputs.down.on("Y", (UU => {
        (0, WU.e)() || aU.k.UY("YKeyPressed")
      })), UU.inputs.bind("X", "KeyX"), UU.inputs.down.on("X", (UU => {
        (0, WU.e)() || aU.k.UY("XKeyPressed")
      })), UU.inputs.down.on("OpenEmoteWheel", (() => {
        aU.k.UY("requestEmoteWheelHoldOpen")
      })), UU.inputs.up.on("OpenEmoteWheel", (() => {
        aU.k.UY("requestEmoteWheelHoldRelease")
      })), UU.inputs.down.on("Zoom", (() => {
        if ("inGame" === LU.e.get("gameState")) {
          UU.xG.getState(UU.pM, "playerCameraAdjustment").zoomKeyPressed = !0, (0, eU.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), UU.inputs.up.on("Zoom", (() => {
        UU.xG.getState(UU.pM, "playerCameraAdjustment").zoomKeyPressed = !1
      })), SX();
      const gX = UU => function() {
        return aX(), UU(...arguments)
      };

      function kX(UU) {
        "inGame" !== LU.e.get("gameState") || (0, jU.q)() || (aU.k.UY("ctrlCrouchWithoutFullscreen"), UU.preventDefault())
      }
      NX = {
        primaryFireDown: gX((UU => {
          const XU = OU.press();
          return OU.owns(XU) && (NU = Date.now(), ZU(!1, !1), UU && qU.start()), XU
        })),
        primaryFireUp: gX((UU => {
          OU.release(UU)
        })),
        altFireDown: gX((() => {
          const UU = fU.press();
          return fU.owns(UU) && uU(), UU
        })),
        altFireUp: gX((UU => {
          fU.release(UU)
        })),
        jumpDown: gX(zU),
        specialActionDown: gX(lU),
        specialActionUp: gX(FX),
        reloadGun: gX(DX),
        dropItem: gX(YX),
        swapCameraZoom: gX(tX),
        pickBlock: gX(HU)
      }, UU.inputs.down.on("ctrlCrouch", kX), UU.inputs.up.on("ctrlCrouch", kX), UU.inputs.bind("ctrlCrouch", "ControlLeft");
      const GX = UU => {
        "inGame" === LU.e.get("gameState") && UU.ctrlKey && !(0, jU.q)() && UU.preventDefault()
      };
      document.addEventListener("keydown", GX), document.addEventListener("keyup", GX), document.addEventListener("keypress", GX), UU.inputs.bind("Alt", "AltLeft", "AltRight"), UU.inputs.down.on("Alt", (UU => {
        UU.preventDefault()
      }));
      const BX = XU => (0, xU.j)(UU, XU),
        ZX = XU => (0, xU.m)(UU, XU),
        RX = [0, 0, 0],
        PX = [0, 0, 1];
      UU.on("afterRender", (XU => {
        hU.q.frame(XU, UU.camera.heading, UU.camera.pitch, hU.l.drawn), (0, QU.f)(UU.camera.heading), (0, xU.p)(UU, RX, PX), (0, eU.b)().client.triggerGameCallback("onAfterRender", XU, {
          cameraHeading: UU.camera.heading,
          cameraPitch: UU.camera.pitch,
          cameraPosition: RX,
          cameraDirection: PX,
          tanHalfFovX: (0, xU.c)(UU),
          tanHalfFovY: Math.tan(UU.WY.v_().fov / 2),
          screenBandPct: {
            x: JU.d,
            y: (0, JU.l)()
          },
          projectWorldPosToScreenPos: BX,
          projectWorldPosToViewport: ZX
        })
      })), UU.camera.Iq = (0, TU.startLookDebug)("js"), UU.inputs.hq = TU.noteLookDroppedCopy, (0, bU.q)("remesh") && (0, XX.l)(UU), UU.on("beforeInputs", (() => {
        if ((0, dU.d)()) return UU.inputs.vJ.dx = 0, void(UU.inputs.vJ.dy = 0);
        if (UU.camera.vJ.dx += UU.inputs.vJ.dx, UU.camera.vJ.dy += UU.inputs.vJ.dy, 0 !== UU.inputs.vJ.dx || 0 !== UU.inputs.vJ.dy) {
          UU.xG.getState(UU.pM, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        UU.inputs.vJ.dx = 0, UU.inputs.vJ.dy = 0
      }));
      let WX = 0;
      const dX = [0, 0, 0],
        LX = [0, 0, 0],
        eX = {
          base: dX,
          max: LX
        },
        CX = UU => {
          const XU = vU.f.droppedBlockSize / 2;
          return [0, 1, 2].every((zU => UU[zU] >= dX[zU] - XU && UU[zU] <= LX[zU] + XU))
        };
      UU.on("LY", (function(XU) {
        aU.k.UY("noaTick", XU);
        const zU = (0, eU.b)().client;
        if (zU.triggerGameCallback("LY", XU), zU.isClientGameSessionActive()) try {
          oU.d.LY(XU)
        } catch (AU) {
          console.error("Error ticking audio entities", AU)
        }
        if (!UU.xG.fzU(UU.pM).isAlive) return;
        Date.now() - WX > 9e3 && (! function() {
          const UU = (0, eU.e)();
          "number" === typeof UU.mG.speedMultiplier && "number" === typeof UU.mG.jumpAmount && (0, cU.sendColyMessage)(EU.th, {
            fE: (0, MU.e)(UU.mG.speedMultiplier),
            iE: (0, MU.d)(UU.mG.jumpAmount),
            ME: (0, MU.e)(UU.mG.crouchingSpeed),
            vE: (0, MU.e)(UU.mG.walkingSpeed),
            VE: (0, MU.e)(UU.mG.runningSpeed),
            sE: (0, MU.d)(UU.EXU),
            nE: UU.xG.KXU(UU.pM).jumpForce,
            mE: UU.xG.hK(1).width,
            lE: UU.xG.hK(1).height,
            xE: UU.xG.Bx(1).xE
          }, !0)
        }(), WX = Date.now());
        const yU = UU.xG.nzU();
        if ((yU.jump || yU.forward || yU.backward || yU.left || yU.right || yU.sprint) && aU.k.UY("usedKeyboard"), UU.xG.GzU(UU.pM) && !0 === UU.mG.canPickUpItems) {
          const XU = UU.xG.wG(UU.pM),
            zU = (0, BU.o)(oX),
            yU = (0, BU.s)(oX);
          dX[0] = XU[0] - zU, dX[1] = XU[1] - .6 * yU, dX[2] = XU[2] - zU, LX[0] = XU[0] + zU, LX[1] = XU[1] + vU.f.cg + .6 * yU, LX[2] = XU[2] + zU;
          const QU = UU.xG.koU(eX, UU.xG.names.autoRotate),
            {
              itemDropPrediction: AU
            } = (0, eU.b)().client,
            oU = cU.offlineInputReplay.holdsInput();
          if (QU.length > 0)
            for (const YU of QU) {
              const XU = UU.xG.getState(YU, "itemState");
              if (void 0 === XU || Date.now() - XU.creationTime < 500) continue;
              let zU = YU,
                yU = null;
              if (XU.uX) {
                const UU = AU.pickupTarget(YU, CX, oU);
                if (null === UU) continue;
                ({
                  MD: zU,
                  sD: yU
                } = UU)
              }
              const QU = UU.xG.getState(zU, "itemState");
              if (QU.uX && null === yU) continue;
              let NU = 0,
                IU = null,
                pU = !1;
              if (0 === QU.amount) pU = !0;
              else {
                const {
                  amountPickedUp: XU
                } = UU.xG.gzU(UU.pM).pickUpItem({
                  name: QU.name,
                  typeObj: QU.typeObj,
                  amount: QU.amount,
                  attributes: QU.attributes
                });
                if (NU = XU, 0 === NU) continue;
                IU = mU.e.pickUp(QU, NU), QU.amount -= NU, QU.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === QU.amount ? pU = !0 : QU.creationTime = Date.now() + QX
              }
              const aU = (0, eU.b)().client.inventoryPrediction.record(IU);
              (0, cU.sendColyMessage)(EU.Ug, {
                MD: null === yU ? zU : "",
                vD: NU,
                VD: DU.d,
                IA: aU,
                sD: yU
              }, !0), pU && (oU && AU.onPickedUpOffline(zU, aU, yU), null === yU && UU.xG.deleteEntity(zU));
              FU.e.play("pickUp", vU.f.pickupSoundVol).rate(1 + Math.random() * vU.f.pickupSoundRateVariation)
            }
        }
        if (!UU.xG.DzU(UU.pM)) return;
        const QU = UU.inputs.vJ.XzU;
        if (0 !== QU) {
          const XU = QU > 0 ? 1 : -1;
          UU.inputs.state["mid-fire"] || UU.inputs.state.Alt || !UU.mG.useInventory ? (UU.inputs.state["mid-fire"] && aU.k.UY("requestEmoteWheelClose"), (0, eU.b)().client.cameraController.handleScrollZoom(XU)) : aU.k.UY("ScrollInventorySlot", XU)
        }
      })), tU.d.subscribe("droppedItemScale", (UU => {
        oX = "number" === typeof UU && isFinite(UU) ? UU : AX
      }))
    }

    function SX() {
      const UU = (0, eU.e)();
      if (UU)
        for (const XU in GU.w) {
          UU.inputs.unbind(XU);
          for (const zU of GU.w[XU]) UU.inputs.bind(XU, zU)
        }
    }
    qX(gX = {}, kX = ['qe"S.EJD5l/]<Jk/N=VIE3wuW7=', '!#xh`q"$I`"', "q>9I^9(^>4>u%&if|_PgDW4V%oiVx<HezGA1S!E|ym0jw=xj", "|G0S%DV:Tf33<+ja1`ML.^.", 'y)zL}Cz9?<21hs:E(".N%?Pw{?Y$P(oE', "*v1X.&tqefGmQ2T", '/(;3`=N$r+Gj0`H"zk', "Rh)goujuY+8QK%o#f!#L6U[aR0pLN%XEWBB5KI^O", '{YWXu8~V{J>zzReAui,W"IoOs', ":vqr7E[a%oz=f<V/rmBh&X:o60(", "=GNz`7I!s0i5qI$owp*>gSz7%p1?]%2#]GmDKU*V4G", "yv!IxPvwfG,ov=Bwom>5Rt90t!_3w%V#jjg:c8.", "7mlXhSM$~l1D{tpf3v1g72i9.4vq;9z1eeK:*:6xDxZBXy=E", "T1eWHPI0s", '}qX1)a$A~`=?y(!"Yhy~a*mn:Je', "A1RDG?m6!lJS?uk>3h<Wb3&DaAIVk", "q_u:/3Jqq<qD/MZ@QjS#Y[nD`}qS,HR>=_1SCIOnIlk&t^$BbTH", 'Sc*#M+Ar.o"Hxy(#Q_ZXC+`,~4CJxzDa', "+KG_!E>A(J+Jv`?ihc~I>$fng", ')/+_a*Br~G|~4"ziAp>D,Sho%p1&nO#$w|LWIIdV.|r_n8^V', "?,Q~<7goqob(|%mw", ">eZ#D+@^uAq<!+<if(Z3P8|km0", "S=Z3:=Au3igm&cSa]vf:G^T52G47v`S1.I8h", "5|6mWumt8|A&YlG>]q}&7Y:+<}o?3==(qaL~~9m+@0>PmB(^xia_7_.", '?")#<+;Dwiz=Osy6MG"S?aMj?oI]e(iE@q5>=)J^Qm~X!JDa', "JqW(k^.", "Yjgsc85DDAf&p[if:<N5~$hoI`[W/)d(1:j3[y#O", '5`q>R9)p8lwSYl3BUjpWO&"0qo|$Wg.1;?sXFudO', '7a(_3|;6.]Ri+IrB;3?Dv8SjLS&I("2#@f/~C"^O', "S,G_IY4+~`kzQJnayENz4`,pG?tB^<]z@_47lX%O", "),L1yKrAx|f&~z<w|(mr", 'ZJk5iy~^:JO&aCE>|cPm[um6|?[WIg?Vf_^LH8Ar>pS#"%p(DvQ:}ScwH', 'fG,W#D{|)xU$8V!"g1*#ZyHZ;+pagySw<<H~S!QU*YC45s$5gmz1R2oO', "+<;myuaxBi8Tos4j0`>#J", 'I|z1]FoxHG$VJ"5^reSIv`.T<<Bi<)M^t.', "_mk&XSjks", "O|PX6UfT_`~iER~54.", "Ei9I>3bqdJy!0=:(16tG8?RVkp", "nvEgu`>|Z+St=9]6YaJD&=~53J%_V<#/}6#W,7np[08s_R`/", "q?cm^$F0P!*!buo6;iIzg:Ar]+::t9/B7,N~x[Ww2|/SK={#s$CTZCLq8oC", "Q#p1t^9rq]RXtl<1mv1rO`Cq8pwrV9{%F.", "|Gq>SWe$>o+Y4B#5CvPIA8LxqY)@%c[a", "1qbWX:xtopGztyIE+cJSoR~ph0h+k", 'e,Jr#m>1x|vTKg[zR=}~BDnVYvugZ(Afc,<~r8A9{+G5J"l(', "3h[:$M*a4`{)%H0Al6c3+&mD#J?]G`+w@cu:>m&q&i", 'W?G&7"}A?}1f69#^G$f:69>8&fifqBY#RpH', '[hy7{K"0l]7Xh2%zXhWCq+dVYvF:Ql"Bv6e~G8zr~p#P?Iv^&_UTB', 'b?JN9U|w(J31CIz/+j2~9E9wPo}hfl"V|_V_bNR5:?yT69ize|Vz;R17H', ">e?>1<`O", '`#:_Nm)5Uvdu?R~^Tp[W!qU!%4]is%"VKvth:`>!/fQ).', "m(ng`WMw`}<J?0SageazwM3|pJDt/Jbjb/iU8|.", ')":_^F2VSxk&^96Rn_!GS!~O', '"`Xc^$@Ddv*Y|%L', "2=?DqIA9r", "(e_TLRgVj02WNgp(s(4_KMmtnx{TQ+z15aO", 'N,Sgzm5:v|WB[cpRM=.hf<++}vO*zOIEI"!#d"PF}i6XaJbjH~V3M`Zk', "%o%N53Z|.o,~{`F$Lk", "pc=3v^dV`7vJX<m6|6)Dl^*VUTb(3V(#k`:_(3h5t`.m}O|a~,#Wc?F1g", '^"W:SE!wa`9XF^uB/iN59+LT/}s_c(XEI=a&A', 'R"w57E]ke?you^hB6??363%++f"34Rvj3iFr_2{|(?dXHc[@g165535O', 'a1N5DYP|>!#ie++^:v,L>F@:M7]PAJ$VE:@#XX~:]0pv@8$"#aB_B', "GI]>rP2t^m4ty($^@q5>@ChqH", "Mm2~+)`OpimtIIP(cG{m{yc!8lg&tg", "|<oUM`dO", 'chxhU|nqb}}f%9]z,>uL7+Mw8GDrACY$A!"L', "7mR>yyO+70`$q0vVjvVmN,09jf6P$Obj3HO", "EhU~%cm5=o}H8V7wk1/zs^U0m0*:_<Z1i`WX;ymoXYQ7P)?^5qCTw$anQ|9Vk", "=eA~jFy$Q`dXlOY1GI;G", '}:<TAR@nL?qi=Hr"B~RrD_EU~py)F`I6<",(su)qH', '"`U7EmM$~p^]|g', 'u3*#U:,+!!3Q:(/>9G8_O:;q:}J&I"X(4#SG~DRp,Gg9/"J', '*<L_N$O^Dx73.l;w1,Ph^9&V^|c3ORpf2=Kr7&Ww*lu`$J"5N"t3/">rr', "5|>IAC{$AAj0mB3B??pW}R%^1<gmk=T(UK,L;*JVc+FWAcG", 'rjB_<EQ1c0.UM&""Gp.G`+oVNmv)SzEVf!u>D&`O', "IvRSby,p>]C", '2JGUI"hqcxY)Hcx/=(>3|`e|zvHM7=Vaz,e&^YKr2m$>jCo60|gr', 'XjCz*uIru0ZW7=rB&jU1g&JDz?IXfziz)f>D_"XoX})@dz+/', 'W",:x[skImFWU)cor:xInCoOtli"9+IzN6@S(|EA[0', "FJm>cP/o$x_>k", "2_*#aIfVDxd4{t<wbahSwtf^%lt}}On$", "aaF:fclr%ozH>OOiQK=I4q%O", 'a"FrX=79G+n10&GBOIT5nFR+6+<tjHLAS6H', "ip<1t|qO", "R|s>v7z1(?sap<UE3hjg#6$!xpoUUcEB<j5>?Pa:g", "|vWD#cw!xoIX~<o63=whK_Q|cx}%~z)os~qg0", "^mW#W8!U`YB", "8<$1/YVO", "]G5X@*.", "zcBz!WXpuAc4jR^Ve,qG~*&+4pZQ$yg5IG^:T?JTevw", '!"f1{D4n@+o_G`>"q,1L?aqxg', "w6%5lR.", 'q>6G!79!Bv9DqI=zSf=m9"]$ev}jPR6oAm=h:^jABi!})0pR&.', 'DH;h%X{F3v0&<<rByJ&I0|R59TN=Bg#/"mlGl|HBl]JPAO', "GIqGh`A$kG7BcJnw+vZg", "T,~hG|zwuA|B&zR>;v;hmE0rJo", "|?%znDOVx`lUxy/B}k", "5v4_n|~5/<b7s[GE_K,>o", 'Q=C1nXU|"mBv4076lqvT![Q|t`ff6y>jr|4T62w0Ti|XqJU(daU~)Cek', '$h8_t|%DB+JP&V<$b?!G1$^o_A&)j<s"zl`LKUGk', "pe9IS+JDi`?!}JXR2>7>8|#DXi^>%H", "t)/znuCO", '|KK:,`anxos,u`Q"h`}1[ydov!k9WV&o4GEGY+|w54=gU(|jDmi_LRek', "2_;Gl?70IGXWtctaU?hGd$$rHxWT3V%fK_Imo?.", "~h5DnuEk", "g?|`DfIL", "`}/:6&MF", "N>$~(Q8<", "Nn,Qg1W,", "O4m{C`Y,", "Wwo]s?V,", "|#{%4I&", "5%uP;]y0~", '#O69"r/r7', "UwBpzliI~", "><n0/1p!$U=h_F2r^<SgFm8", "hD+[isTQdcM|ka1g&wtVITJ^bLeNF$f", "WE0PBSUdamw(hj5.!E6]j37", "=pLk4B86]RCg#(Zz!?@ac8/0FS;`u^D", 'F"ex%n?g$3~cXa<kEG`SQ?l.#VyY1:2', "WE0PBSUdeb_+P^YzL.0uP;tdSWb", "X&3P?47", "YP.@fKzA", ";Q`b", "!au:j<YO", '"s6NaB$=', "c[3]eBKD", "MPg.rfS0", 'rj@!C`K|yhw<Be=X4Na(..?"5PDoR^=X5fsu54rvAYo;~n4j^jcI(', "Yqj,CN5ZJU_kLB^anQ:#WWO]$IV7MT^ake)A==;?nC_mHtLx|0", "5<Bb8*9Y", ")MBH[MkY", "px]LV6kY", "~xo(P6uW", "2AZb.eQW", "yh@Y", "`}RhqBO", "yZ6NNB/=", ".zp#h8|H", "<pF+*6/R", "?(<0(=EY", "+Gyg", ">/5SeQKN", "0]+PB6nE", "+G;roSsY"]), qX(GX = function(...UU) {
      qX(UU[LX[12]] = LX[1], UU[LX[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], UU[LX[13]] = LX[17], UU[LX[4]] = []);
      try {
        qX(UU[LX[13]] = Object, UU[LX[4]][LX[26]]("".__proto__.constructor.name))
      } catch (kX) {}
      UU: for (UU[LX[14]] = LX[1]; UU[LX[14]] < UU[LX[15]][LX[12]]; UU[LX[14]]++) try {
        for (UU[LX[13]] = UU[LX[15]][UU[LX[14]]](), UU[LX[10]] = LX[1]; UU[LX[10]] < UU[LX[4]][LX[12]]; UU[LX[10]]++)
          if (typeof UU[LX[13]][UU[LX[4]][UU[LX[10]]]] === LX[16]) continue UU;
        return UU[LX[13]]
      } catch (kX) {}
      return UU[LX[13]] || this
    }() || {}, BX = GX.TextDecoder, ZX = GX.Uint8Array, RX = GX.XY, PX = GX.String || String, WX = GX.Array || Array, dX = function(...UU) {
      return qX(UU[LX[12]] = LX[1], UU[LX[27]] = new WX(LX[57]), UU[LX[28]] = PX[LX[23]] || PX.fromCharCode, UU[LX[18]] = []),
        function(...XU) {
          for (qX(XU[LX[12]] = LX[2], XU[LX[15]] = LX[17], XU[LX[20]] = LX[17], XU[LX[19]] = XU[LX[1]][LX[12]], UU[LX[18]][LX[12]] = LX[1]), XU[LX[10]] = LX[1]; XU[LX[10]] < XU[LX[19]];) qX(XU[LX[20]] = XU[LX[1]][XU[LX[10]]++], XU[LX[20]] <= LX[93] ? XU[LX[15]] = XU[LX[20]] : XU[LX[20]] <= LX[77] ? XU[LX[15]] = (XU[LX[20]] & LX[73]) << LX[22] | XU[LX[1]][XU[LX[10]]++] & LX[21] : XU[LX[20]] <= 239 ? XU[LX[15]] = (XU[LX[20]] & LX[46]) << LX[25] | (XU[LX[1]][XU[LX[10]]++] & LX[21]) << LX[22] | XU[LX[1]][XU[LX[10]]++] & LX[21] : PX[LX[23]] ? XU[LX[15]] = (XU[LX[20]] & LX[24]) << LX[74] | (XU[LX[1]][XU[LX[10]]++] & LX[21]) << LX[25] | (XU[LX[1]][XU[LX[10]]++] & LX[21]) << LX[22] | XU[LX[1]][XU[LX[10]]++] & LX[21] : (XU[LX[15]] = LX[21], XU[LX[10]] += LX[43]), UU[LX[18]][LX[26]](UU[LX[27]][XU[LX[15]]] || (UU[LX[27]][XU[LX[15]]] = UU[LX[28]](XU[LX[15]]))));
          return UU[LX[18]].join("")
        }
    }()), eX(LX[29]) in wX && function(...UU) {
      qX(UU[LX[12]] = LX[1], UU[LX[13]] = function(...UU) {
        for (qX(UU[LX[12]] = LX[2], UU[LX[2]] = LX[1], UU[LX[13]] = {}, UU[-LX[30]] = LX[1], UU[-LX[29]] = LX[1], UU[LX[32]] = LX[1], UU[LX[22]] = UU[LX[1]].length), UU[LX[7]] = LX[1]; UU[LX[7]] < UU[LX[22]]; UU[LX[7]]++) {
          for (qX(UU[LX[13]] = {}, UU[-LX[30]] = LX[1], UU[-LX[29]] = LX[2]), UU[LX[31]] = UU[LX[7]] + LX[2]; UU[LX[31]] < UU[LX[22]]; UU[LX[31]]++) UU[LX[1]][UU[LX[7]]].x !== UU[LX[1]][UU[LX[31]]].x || UU[LX[1]][UU[LX[7]]].y !== UU[LX[1]][UU[LX[31]]].y ? (UU[LX[1]][UU[LX[7]]].y === UU[LX[1]][UU[LX[31]]].y ? UU[LX[32]] = Number.MAX_SAFE_INTEGER : UU[LX[32]] = (UU[LX[1]][UU[LX[7]]].x - UU[LX[1]][UU[LX[31]]].x) / (UU[LX[1]][UU[LX[7]]].y - UU[LX[1]][UU[LX[31]]].y), UU[LX[13]][UU[LX[32]]] || (UU[LX[13]][UU[LX[32]]] = LX[1]), qX(UU[LX[13]][UU[LX[32]]]++, UU[-LX[30]] = Math.max(UU[-LX[30]], UU[LX[13]][UU[LX[32]]]))) : UU[-LX[29]]++;
          qX(UU[-LX[30]] += UU[-LX[29]], UU[LX[2]] = Math.max(UU[LX[2]], UU[-LX[30]]))
        }
        return UU[LX[2]]
      }, console.log(UU[LX[13]]))
    }(), qX(tX = (...UU) => {
      UU[LX[12]] = LX[2],
        function(...UU) {
          return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = function(...UU) {
            for (qX(UU[LX[12]] = LX[2], UU[LX[2]] = 'ALgle6"F/87$m9:xh5q*)#jr!.]1BS&K}C^aND4yR~<zY+Vf>Eu[Hc`=0?TM;IXPG,svQo2|O%3w{ZndUi@_bk(pWtJ', UU[LX[13]] = "" + (UU[LX[1]] || ""), UU[LX[4]] = UU[LX[13]].length, UU[-LX[40]] = [], UU[LX[35]] = LX[1], UU[LX[22]] = LX[1], UU[LX[7]] = -LX[2]), UU[LX[31]] = LX[1]; UU[LX[31]] < UU[LX[4]]; UU[LX[31]]++)
              if (UU[LX[33]] = UU[LX[2]].indexOf(UU[LX[13]][UU[LX[31]]]), UU[LX[33]] !== -LX[2])
                if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[33]];
                else {
                  qX(UU[LX[7]] += UU[LX[33]] * LX[34], UU[LX[35]] |= UU[LX[7]] << UU[LX[22]], UU[LX[22]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                  do {
                    qX(UU[-LX[40]].push(UU[LX[35]] & LX[11]), UU[LX[35]] >>= LX[3], UU[LX[22]] -= LX[3])
                  } while (UU[LX[22]] > LX[24]);
                  UU[LX[7]] = -LX[2]
                } return UU[LX[7]] > -LX[2] && UU[-LX[40]].push((UU[LX[35]] | UU[LX[7]] << UU[LX[22]]) & LX[11]), CX(UU[-LX[40]])
          }(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
        }(LX[96]) + "E" in wX && function(...UU) {
          function XU(...UU) {
            return UU[LX[12]] = LX[2], UU[LX[1]][LX[2]] * LX[42] + (UU[LX[1]][LX[1]] < LX[1] ? LX[41] | UU[LX[1]][LX[1]] : UU[LX[1]][LX[1]])
          }

          function zU(...UU) {
            switch (UU[LX[12]] = LX[2], ((UU[LX[1]] & LX[41]) !== LX[1]) * LX[2] + (UU[LX[1]] < LX[1]) * LX[18]) {
              case LX[1]:
                return [UU[LX[1]] % LX[41], Math.trunc(UU[LX[1]] / LX[42])];
              case LX[2]:
                return [UU[LX[1]] % LX[41] - LX[41], Math.trunc(UU[LX[1]] / LX[42]) + LX[2]];
              case LX[18]:
                return [((UU[LX[1]] + LX[41]) % LX[41] + LX[41]) % LX[41], Math.round(UU[LX[1]] / LX[42])];
              case LX[43]:
                return [UU[LX[1]] % LX[41], Math.trunc(UU[LX[1]] / LX[42])]
            }
          }
          UU[LX[12]] = LX[1], qX(UU[-LX[44]] = XU([LX[18], LX[10]]), UU[LX[4]] = XU([LX[2], LX[18]]), UU[-LX[40]] = UU[-LX[44]] + UU[LX[4]], UU[LX[43]] = UU[-LX[40]] - UU[LX[4]], UU[-LX[45]] = UU[LX[43]] * LX[18], UU[LX[7]] = UU[-LX[45]] / LX[18], console.log(zU(UU[-LX[40]])), console.log(zU(UU[LX[43]])), console.log(zU(UU[-LX[45]])), console.log(zU(UU[LX[7]])))
        }(), UU[LX[15]] = LX[1];
      for (const XU in UU[LX[1]]) {
        function zU(...UU) {
          for (qX(UU[LX[12]] = LX[2], UU[LX[46]] = 'uFWLhBqARmJUbQnHv$ck[{%<Ts,;f1!7S`~@d3)p24K}r=>tY*(M&ylIXCNZ?^/O_V.aP"i]9Ggj:ew06Ez58D|x#o+', UU[LX[3]] = "" + (UU[LX[1]] || ""), UU[-LX[9]] = UU[LX[3]].length, UU[LX[10]] = [], UU[LX[48]] = LX[1], UU[LX[49]] = LX[1], UU[LX[7]] = -LX[2]), UU[-LX[47]] = LX[1]; UU[-LX[47]] < UU[-LX[9]]; UU[-LX[47]]++)
            if (UU[LX[33]] = UU[LX[46]].indexOf(UU[LX[3]][UU[-LX[47]]]), UU[LX[33]] !== -LX[2])
              if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[33]];
              else {
                qX(UU[LX[7]] += UU[LX[33]] * LX[34], UU[LX[48]] |= UU[LX[7]] << UU[LX[49]], UU[LX[49]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                do {
                  qX(UU[LX[10]].push(UU[LX[48]] & LX[11]), UU[LX[48]] >>= LX[3], UU[LX[49]] -= LX[3])
                } while (UU[LX[49]] > LX[24]);
                UU[LX[7]] = -LX[2]
              } return UU[LX[7]] > -LX[2] && UU[LX[10]].push((UU[LX[48]] | UU[LX[7]] << UU[LX[49]]) & LX[11]), CX(UU[LX[10]])
        }

        function cU(...UU) {
          return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = zU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
        }
        cU(105), UU[LX[15]]++
      }
      return UU[LX[15]]
    }, aX = (...UU) => {
      if (UU[LX[12]] = LX[1], function(...UU) {
          return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = function(UU) {
            var XU, zU, cU, yU, QU, AU, FU;
            for (qX(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = LX[1], QU = LX[1], AU = -LX[2]), FU = LX[1]; FU < zU; FU++) {
              var oU = 'u<|9~@&/s;ABMe>#hY?kJdnORUrfjH!GvP(3pVKqZEwxb2}*%C:lX.^_t875T,Dy`"oz6F$=g{N]4+0WQIm1Li)c[Sa'.indexOf(XU[FU]);
              if (oU !== -LX[2])
                if (AU < LX[1]) AU = oU;
                else {
                  qX(AU += oU * LX[34], yU |= AU << QU, QU += (AU & LX[36]) > LX[37] ? LX[38] : LX[39]);
                  do {
                    qX(cU.push(yU & LX[11]), yU >>= LX[3], QU -= LX[3])
                  } while (QU > LX[24]);
                  AU = -LX[2]
                }
            }
            return AU > -LX[2] && cU.push((yU | AU << QU) & LX[11]), CX(cU)
          }(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
        }(106) in wX && function(...UU) {
          qX(UU[LX[12]] = LX[1], UU[-LX[54]] = function(...XU) {
            return qX(XU[LX[12]] = LX[2], XU[LX[15]] = []), (XU[LX[1]] === LX[2] || XU[LX[1]] >= LX[10]) && UU[LX[51]](XU[LX[15]], [], XU[LX[1]], LX[1]), XU[LX[15]]
          }, UU[LX[51]] = function(...XU) {
            for (XU[LX[12]] = LX[10], XU[LX[15]] = XU[LX[43]]; XU[LX[15]] < XU[LX[18]]; XU[LX[15]]++) {
              if (XU[LX[2]].length !== XU[LX[15]]) return;
              for (XU[LX[35]] = LX[1]; XU[LX[35]] < XU[LX[18]]; XU[LX[35]]++) UU[LX[18]](XU[LX[2]], [XU[LX[15]], XU[LX[35]]]) && (qX(XU[LX[2]].push([XU[LX[15]], XU[LX[35]]]), UU[LX[51]](XU[LX[1]], XU[LX[2]], XU[LX[18]], XU[LX[15]] + LX[2])), XU[LX[2]].length === XU[LX[18]] && XU[LX[1]].push(UU[LX[52]](XU[LX[2]])), XU[LX[2]].pop())
            }
          }, UU[LX[52]] = function(UU) {
            var XU, zU, cU = [];
            for (XU = UU.length, zU = LX[1]; zU < XU; zU++) {
              var yU;
              for (cU[zU] = "", yU = LX[1]; yU < XU; yU++) cU[zU] += UU[zU][LX[2]] === yU ? "Q" : "."
            }
            return cU
          }, UU[LX[18]] = function(...UU) {
            for (qX(UU[LX[12]] = LX[18], UU[LX[18]] = UU[LX[1]].length), UU[LX[43]] = LX[1]; UU[LX[43]] < UU[LX[18]]; UU[LX[43]]++) {
              if (UU[LX[1]][UU[LX[43]]][LX[1]] === UU[LX[2]][LX[1]] || UU[LX[1]][UU[LX[43]]][LX[2]] === UU[LX[2]][LX[2]]) return LX[53];
              if (Math.abs((UU[LX[1]][UU[LX[43]]][LX[1]] - UU[LX[2]][LX[1]]) / (UU[LX[1]][UU[LX[43]]][LX[2]] - UU[LX[2]][LX[2]])) === LX[2]) return LX[53]
            }
            return LX[90]
          }, console.log(UU[-LX[54]]))
        }(), DX++ === LX[35]) {
        if ((LX[1], kU.o)()) {
          function XU(...UU) {
            for (qX(UU[LX[12]] = LX[2], UU[LX[15]] = '7,[R&m2KuN%.v=Z<$W"zBA#pdOnQ+F6]PDh5MC/JE?THk~l1>!bV{)_LIi@^*jtaew|8Y}y;GrUsS`xf(:X03o4qcg9', UU[-LX[55]] = "" + (UU[LX[1]] || ""), UU[LX[4]] = UU[-LX[55]].length, UU[LX[14]] = [], UU[LX[35]] = LX[1], UU[LX[49]] = LX[1], UU[LX[7]] = -LX[2]), UU[LX[56]] = LX[1]; UU[LX[56]] < UU[LX[4]]; UU[LX[56]]++)
              if (UU[LX[6]] = UU[LX[15]].indexOf(UU[-LX[55]][UU[LX[56]]]), UU[LX[6]] !== -LX[2])
                if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[6]];
                else {
                  qX(UU[LX[7]] += UU[LX[6]] * LX[34], UU[LX[35]] |= UU[LX[7]] << UU[LX[49]], UU[LX[49]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                  do {
                    qX(UU[LX[14]].push(UU[LX[35]] & LX[11]), UU[LX[35]] >>= LX[3], UU[LX[49]] -= LX[3])
                  } while (UU[LX[49]] > LX[24]);
                  UU[LX[7]] = -LX[2]
                } return UU[LX[7]] > -LX[2] && UU[LX[14]].push((UU[LX[35]] | UU[LX[7]] << UU[LX[49]]) & LX[11]), CX(UU[LX[14]])
          }

          function zU(...UU) {
            return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = XU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
          }

          function cU(...UU) {
            function XU(...UU) {
              return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = function(...UU) {
                for (qX(UU[LX[12]] = LX[2], UU[LX[2]] = 'ufAREVcDb[w9tOkQ>JGjZ(Hvi;SUz6.@4~F:r5*yP8%BW2m+Las7&]$)!1=NgYXdq{IMe#|TK"0`^h/p,}_3lxo<Cn?', UU[LX[13]] = "" + (UU[LX[1]] || ""), UU[-LX[57]] = UU[LX[13]].length, UU[LX[14]] = [], UU[LX[35]] = LX[1], UU[LX[49]] = LX[1], UU[LX[7]] = -LX[2]), UU[LX[31]] = LX[1]; UU[LX[31]] < UU[-LX[57]]; UU[LX[31]]++)
                  if (UU[-LX[58]] = UU[LX[2]].indexOf(UU[LX[13]][UU[LX[31]]]), UU[-LX[58]] !== -LX[2])
                    if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[-LX[58]];
                    else {
                      qX(UU[LX[7]] += UU[-LX[58]] * LX[34], UU[LX[35]] |= UU[LX[7]] << UU[LX[49]], UU[LX[49]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                      do {
                        qX(UU[LX[14]].push(UU[LX[35]] & LX[11]), UU[LX[35]] >>= LX[3], UU[LX[49]] -= LX[3])
                      } while (UU[LX[49]] > LX[24]);
                      UU[LX[7]] = -LX[2]
                    } return UU[LX[7]] > -LX[2] && UU[LX[14]].push((UU[LX[35]] | UU[LX[7]] << UU[LX[49]]) & LX[11]), CX(UU[LX[14]])
              }(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
            }
            UU[LX[12]] = LX[1],
              function(...UU) {
                function XU(...UU) {
                  for (qX(UU[LX[12]] = LX[2], UU[LX[2]] = [], UU[-LX[62]] = LX[1], UU[LX[63]] = UU[LX[1]].length, UU[LX[14]] = LX[17], UU[LX[35]] = LX[17]); UU[-LX[62]] < UU[LX[63]];) qX(UU[LX[14]] = UU[LX[1]].charCodeAt(UU[-LX[62]]++), UU[LX[14]] >= LX[68] && UU[LX[14]] <= 56319 && UU[-LX[62]] < UU[LX[63]] ? (UU[LX[35]] = UU[LX[1]].charCodeAt(UU[-LX[62]]++), (64512 & UU[LX[35]]) == LX[69] ? UU[LX[2]].push(((UU[LX[14]] & LX[64]) << LX[67]) + (UU[LX[35]] & LX[64]) + LX[66]) : (UU[LX[2]].push(UU[LX[14]]), UU[-LX[62]]--)) : UU[LX[2]].push(UU[LX[14]]));
                  return UU[LX[2]]
                }

                function cU(...UU) {
                  if (UU[LX[12]] = LX[2], UU[LX[1]] >= LX[68] && UU[LX[1]] <= 57343) {
                    function XU(...UU) {
                      for (qX(UU[LX[12]] = LX[2], UU[-LX[71]] = '&>,O[n7~.eP(Vux#_$jm3@`G0%8QqFI|{6<SHLJvN;c4:MipYz=wo1^k+}K/T5XEUDfslr9C?gd!t]BR)2bZW"ya*hA', UU[LX[13]] = "" + (UU[LX[1]] || ""), UU[LX[4]] = UU[LX[13]].length, UU[LX[10]] = [], UU[LX[8]] = LX[1], UU[LX[49]] = LX[1], UU[LX[7]] = -LX[2]), UU[-LX[70]] = LX[1]; UU[-LX[70]] < UU[LX[4]]; UU[-LX[70]]++)
                        if (UU[LX[6]] = UU[-LX[71]].indexOf(UU[LX[13]][UU[-LX[70]]]), UU[LX[6]] !== -LX[2])
                          if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[6]];
                          else {
                            qX(UU[LX[7]] += UU[LX[6]] * LX[34], UU[LX[8]] |= UU[LX[7]] << UU[LX[49]], UU[LX[49]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                            do {
                              qX(UU[LX[10]].push(UU[LX[8]] & LX[11]), UU[LX[8]] >>= LX[3], UU[LX[49]] -= LX[3])
                            } while (UU[LX[49]] > LX[24]);
                            UU[LX[7]] = -LX[2]
                          } return UU[LX[7]] > -LX[2] && UU[LX[10]].push((UU[LX[8]] | UU[LX[7]] << UU[LX[49]]) & LX[11]), CX(UU[LX[10]])
                    }

                    function zU(...UU) {
                      return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = XU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
                    }
                    throw Error(zU(LX[0]) + zU(109) + zU(110) + UU[LX[1]].toString(16).toUpperCase() + (zU(111) + zU(112) + zU(113) + LX[8]))
                  }
                }

                function yU(...XU) {
                  return XU[LX[12]] = LX[18], UU[LX[15]](XU[LX[1]] >> XU[LX[2]] & LX[21] | LX[57])
                }

                function QU(...XU) {
                  return XU[LX[12]] = LX[2], (4294967168 & XU[LX[1]]) == LX[1] ? UU[LX[15]](XU[LX[1]]) : (XU[-LX[72]] = "", (4294965248 & XU[LX[1]]) == LX[1] ? XU[-LX[72]] = UU[LX[15]](XU[LX[1]] >> LX[22] & LX[73] | LX[81]) : (4294901760 & XU[LX[1]]) == LX[1] ? qX(cU(XU[LX[1]]), XU[-LX[72]] = UU[LX[15]](XU[LX[1]] >> LX[25] & LX[46] | LX[82]), XU[-LX[72]] += yU(XU[LX[1]], LX[22])) : (4292870144 & XU[LX[1]]) == LX[1] && qX(XU[-LX[72]] = UU[LX[15]](XU[LX[1]] >> LX[74] & LX[24] | LX[85]), XU[-LX[72]] += yU(XU[LX[1]], LX[25]), XU[-LX[72]] += yU(XU[LX[1]], LX[22])), XU[-LX[72]] += UU[LX[15]](XU[LX[1]] & LX[21] | LX[57]), XU[-LX[72]])
                }

                function AU(...XU) {
                  if (XU[LX[12]] = LX[1], UU[-LX[80]] >= UU[-LX[47]]) {
                    function zU(...UU) {
                      for (qX(UU[LX[12]] = LX[2], UU[LX[15]] = '8fMDCUVtu(?rj)7EZ>vB/sAL!GbYw,Sg0a_2{i&q<H56x.eT3^WR:NcJ@`#9PFO$X=|ozkK*4dpy1}%+hlQnm]~;["I', UU[LX[13]] = "" + (UU[LX[1]] || ""), UU[LX[43]] = UU[LX[13]].length, UU[LX[79]] = [], UU[LX[35]] = LX[1], UU[LX[77]] = LX[1], UU[LX[78]] = -LX[2]), UU[LX[3]] = LX[1]; UU[LX[3]] < UU[LX[43]]; UU[LX[3]]++)
                        if (UU[LX[33]] = UU[LX[15]].indexOf(UU[LX[13]][UU[LX[3]]]), UU[LX[33]] !== -LX[2])
                          if (UU[LX[78]] < LX[1]) UU[LX[78]] = UU[LX[33]];
                          else {
                            qX(UU[LX[78]] += UU[LX[33]] * LX[34], UU[LX[35]] |= UU[LX[78]] << UU[LX[77]], UU[LX[77]] += (UU[LX[78]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                            do {
                              qX(UU[LX[79]].push(UU[LX[35]] & LX[11]), UU[LX[35]] >>= LX[3], UU[LX[77]] -= LX[3])
                            } while (UU[LX[77]] > LX[24]);
                            UU[LX[78]] = -LX[2]
                          } return UU[LX[78]] > -LX[2] && UU[LX[79]].push((UU[LX[35]] | UU[LX[78]] << UU[LX[77]]) & LX[11]), CX(UU[LX[79]])
                    }

                    function cU(...UU) {
                      return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = zU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
                    }
                    throw Error(cU(114))
                  }
                  if (qX(XU[LX[15]] = UU[LX[14]][UU[-LX[80]]] & LX[11], UU[-LX[80]]++), (XU[LX[15]] & LX[81]) == LX[57]) return XU[LX[15]] & LX[21];
                  throw Error(function(...UU) {
                    return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = function(...UU) {
                      for (qX(UU[LX[12]] = LX[2], UU[LX[15]] = 'CGvU0LK1V/~xf7BIqh<JioZ6Q*&!(3zp[uFYygAOD`}XjH?];act=S5%:R4Mw$"bde|E#r2WP.Tmslk8N^{+>)9@_,n', UU[LX[18]] = "" + (UU[LX[1]] || ""), UU[LX[4]] = UU[LX[18]].length, UU[LX[14]] = [], UU[LX[35]] = LX[1], UU[LX[76]] = LX[1], UU[LX[7]] = -LX[2]), UU[LX[31]] = LX[1]; UU[LX[31]] < UU[LX[4]]; UU[LX[31]]++)
                        if (UU[LX[33]] = UU[LX[15]].indexOf(UU[LX[18]][UU[LX[31]]]), UU[LX[33]] !== -LX[2])
                          if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[33]];
                          else {
                            qX(UU[LX[7]] += UU[LX[33]] * LX[34], UU[LX[35]] |= UU[LX[7]] << UU[LX[76]], UU[LX[76]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                            do {
                              qX(UU[LX[14]].push(UU[LX[35]] & LX[11]), UU[LX[35]] >>= LX[3], UU[LX[76]] -= LX[3])
                            } while (UU[LX[76]] > LX[24]);
                            UU[LX[7]] = -LX[2]
                          } return UU[LX[7]] > -LX[2] && UU[LX[14]].push((UU[LX[35]] | UU[LX[7]] << UU[LX[76]]) & LX[11]), CX(UU[LX[14]])
                    }(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
                  }(115))
                }

                function FU(...XU) {
                  if (qX(XU[LX[12]] = LX[1], XU[LX[29]] = LX[17], XU[-LX[83]] = LX[17], XU[LX[18]] = LX[17], XU[LX[14]] = LX[17], XU[LX[8]] = LX[17]), UU[-LX[80]] > UU[-LX[47]]) throw Error(zU(LX[106]));
                  if (UU[-LX[80]] == UU[-LX[47]]) return LX[53];
                  if (qX(XU[LX[29]] = UU[LX[14]][UU[-LX[80]]] & LX[11], UU[-LX[80]]++), (XU[LX[29]] & LX[57]) == LX[1]) return XU[LX[29]];
                  if ((XU[LX[29]] & LX[82]) == LX[81]) {
                    if (qX(XU[-LX[83]] = AU(), XU[LX[8]] = (XU[LX[29]] & LX[73]) << LX[22] | XU[-LX[83]]), XU[LX[8]] >= LX[57]) return XU[LX[8]];
                    {
                      function yU(...UU) {
                        for (qX(UU[LX[12]] = LX[2], UU[LX[15]] = 'l9HQeSsZaxM}DIqcP=%/4m$J6U!.b7:hkruKXzEApvVY2O{yW(R@Gwf5)["C?^|F];gNTd_i+<8jB1#~`0tL&n,o>3*', UU[LX[18]] = "" + (UU[LX[1]] || ""), UU[LX[43]] = UU[LX[18]].length, UU[LX[10]] = [], UU[LX[35]] = LX[1], UU[-LX[10]] = LX[1], UU[LX[24]] = -LX[2]), UU[LX[3]] = LX[1]; UU[LX[3]] < UU[LX[43]]; UU[LX[3]]++)
                          if (UU[LX[84]] = UU[LX[15]].indexOf(UU[LX[18]][UU[LX[3]]]), UU[LX[84]] !== -LX[2])
                            if (UU[LX[24]] < LX[1]) UU[LX[24]] = UU[LX[84]];
                            else {
                              qX(UU[LX[24]] += UU[LX[84]] * LX[34], UU[LX[35]] |= UU[LX[24]] << UU[-LX[10]], UU[-LX[10]] += (UU[LX[24]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                              do {
                                qX(UU[LX[10]].push(UU[LX[35]] & LX[11]), UU[LX[35]] >>= LX[3], UU[-LX[10]] -= LX[3])
                              } while (UU[-LX[10]] > LX[24]);
                              UU[LX[24]] = -LX[2]
                            } return UU[LX[24]] > -LX[2] && UU[LX[10]].push((UU[LX[35]] | UU[LX[24]] << UU[-LX[10]]) & LX[11]), CX(UU[LX[10]])
                      }

                      function QU(...UU) {
                        return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = yU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
                      }
                      throw Error(QU(117))
                    }
                  }
                  if ((XU[LX[29]] & LX[85]) == LX[82]) {
                    if (qX(XU[-LX[83]] = AU(), XU[LX[18]] = AU(), XU[LX[8]] = (XU[LX[29]] & LX[46]) << LX[25] | XU[-LX[83]] << LX[22] | XU[LX[18]]), XU[LX[8]] >= 2048) return cU(XU[LX[8]]), XU[LX[8]];
                    {
                      function FU(...UU) {
                        for (qX(UU[LX[12]] = LX[2], UU[LX[87]] = 'zDdKmVt<S|CW2&JQ]F[l%p_;g/EIfZB4x91N,k)+"@o7=OHusa3`bTPvR0}~G:6#$ycw!hij*5?Mn8X>Y.AeLr(Uq{^', UU[LX[18]] = "" + (UU[LX[1]] || ""), UU[LX[4]] = UU[LX[18]].length, UU[LX[10]] = [], UU[-LX[86]] = LX[1], UU[LX[22]] = LX[1], UU[LX[24]] = -LX[2]), UU[LX[3]] = LX[1]; UU[LX[3]] < UU[LX[4]]; UU[LX[3]]++)
                          if (UU[LX[6]] = UU[LX[87]].indexOf(UU[LX[18]][UU[LX[3]]]), UU[LX[6]] !== -LX[2])
                            if (UU[LX[24]] < LX[1]) UU[LX[24]] = UU[LX[6]];
                            else {
                              qX(UU[LX[24]] += UU[LX[6]] * LX[34], UU[-LX[86]] |= UU[LX[24]] << UU[LX[22]], UU[LX[22]] += (UU[LX[24]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                              do {
                                qX(UU[LX[10]].push(UU[-LX[86]] & LX[11]), UU[-LX[86]] >>= LX[3], UU[LX[22]] -= LX[3])
                              } while (UU[LX[22]] > LX[24]);
                              UU[LX[24]] = -LX[2]
                            } return UU[LX[24]] > -LX[2] && UU[LX[10]].push((UU[-LX[86]] | UU[LX[24]] << UU[LX[22]]) & LX[11]), CX(UU[LX[10]])
                      }

                      function oU(...UU) {
                        return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = FU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
                      }
                      throw Error(oU(LX[95]))
                    }
                  }
                  if ((248 & XU[LX[29]]) == LX[85] && (qX(XU[-LX[83]] = AU(), XU[LX[18]] = AU(), XU[LX[14]] = AU(), XU[LX[8]] = (XU[LX[29]] & LX[24]) << LX[74] | XU[-LX[83]] << LX[25] | XU[LX[18]] << LX[22] | XU[LX[14]]), XU[LX[8]] >= LX[66] && XU[LX[8]] <= 1114111)) return XU[LX[8]];
                  throw Error(zU(119))
                }
                UU[LX[12]] = LX[2], UU[LX[15]] = String.fromCharCode, qX(UU[LX[14]] = LX[17], UU[-LX[47]] = LX[17], UU[-LX[80]] = LX[17]), qX(UU[LX[1]].version = function(...UU) {
                  return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = function(...UU) {
                    for (qX(UU[LX[12]] = LX[2], UU[LX[2]] = '7GraFERjYibUg}"!IJf`O_3<*#50>AlB/4%^@mL&[|Wqeyx{9PH;wh$=voz6N2kS.1ZscT8d)QC](:un?Dp+~KX,tVM', UU[LX[18]] = "" + (UU[LX[1]] || ""), UU[LX[4]] = UU[LX[18]].length, UU[LX[61]] = [], UU[LX[8]] = LX[1], UU[-LX[60]] = LX[1], UU[LX[7]] = -LX[2]), UU[LX[3]] = LX[1]; UU[LX[3]] < UU[LX[4]]; UU[LX[3]]++)
                      if (UU[LX[59]] = UU[LX[2]].indexOf(UU[LX[18]][UU[LX[3]]]), UU[LX[59]] !== -LX[2])
                        if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[59]];
                        else {
                          qX(UU[LX[7]] += UU[LX[59]] * LX[34], UU[LX[8]] |= UU[LX[7]] << UU[-LX[60]], UU[-LX[60]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                          do {
                            qX(UU[LX[61]].push(UU[LX[8]] & LX[11]), UU[LX[8]] >>= LX[3], UU[-LX[60]] -= LX[3])
                          } while (UU[-LX[60]] > LX[24]);
                          UU[LX[7]] = -LX[2]
                        } return UU[LX[7]] > -LX[2] && UU[LX[61]].push((UU[LX[8]] | UU[LX[7]] << UU[-LX[60]]) & LX[11]), CX(UU[LX[61]])
                  }(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
                }(120), UU[LX[1]].encode = function(...UU) {
                  for (qX(UU[LX[12]] = LX[2], UU[LX[15]] = XU(UU[LX[1]]), UU[-LX[75]] = UU[LX[15]].length, UU[LX[4]] = -LX[2], UU[LX[10]] = LX[17], UU[LX[35]] = ""); ++UU[LX[4]] < UU[-LX[75]];) qX(UU[LX[10]] = UU[LX[15]][UU[LX[4]]], UU[LX[35]] += QU(UU[LX[10]]));
                  return UU[LX[35]]
                }, UU[LX[1]].decode = function(...zU) {
                  for (qX(zU[LX[12]] = LX[2], UU[LX[14]] = XU(zU[LX[1]]), UU[-LX[47]] = UU[LX[14]].length, UU[-LX[80]] = LX[1], zU[LX[2]] = [], zU[LX[18]] = LX[17]);
                    (zU[LX[18]] = FU()) !== LX[53];) zU[LX[2]].push(zU[LX[18]]);
                  return function(...XU) {
                    for (qX(XU[LX[12]] = LX[2], XU[LX[65]] = XU[LX[1]].length, XU[LX[18]] = -LX[2], XU[LX[43]] = LX[17], XU[LX[10]] = ""); ++XU[LX[18]] < XU[LX[65]];) XU[LX[43]] = XU[LX[1]][XU[LX[18]]], XU[LX[43]] > 65535 && qX(XU[LX[43]] -= LX[66], XU[LX[10]] += UU[LX[15]](XU[LX[43]] >>> LX[67] & LX[64] | LX[68]), XU[LX[43]] = LX[69] | XU[LX[43]] & LX[64]), XU[LX[10]] += UU[LX[15]](XU[LX[43]]);
                    return XU[LX[10]]
                  }(zU[LX[2]])
                })
              }(typeof exports === XU(121) + XU(LX[102]) ? this.utf8 = {} : exports)
          }
          zU(107) in wX && cU(), (LX[1], YU[LX[14]])("4 ")
        }
        DX = LX[1]
      }
    }), pX = function(UU) {
      function XU(...UU) {
        return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = function(...UU) {
          for (qX(UU[LX[12]] = LX[2], UU[LX[15]] = 'O]=*1z28)GpY|X_sjVyS63,"x.$H/!%i09;nTbU+{@[d:k^7rc#ewhovm?5`ZD}J>L&f<PFC4~ut(NalqBIARMWEQgK', UU[LX[13]] = "" + (UU[LX[1]] || ""), UU[LX[43]] = UU[LX[13]].length, UU[LX[14]] = [], UU[LX[35]] = LX[1], UU[LX[89]] = LX[1], UU[LX[24]] = -LX[2]), UU[LX[31]] = LX[1]; UU[LX[31]] < UU[LX[43]]; UU[LX[31]]++)
            if (UU[-LX[88]] = UU[LX[15]].indexOf(UU[LX[13]][UU[LX[31]]]), UU[-LX[88]] !== -LX[2])
              if (UU[LX[24]] < LX[1]) UU[LX[24]] = UU[-LX[88]];
              else {
                qX(UU[LX[24]] += UU[-LX[88]] * LX[34], UU[LX[35]] |= UU[LX[24]] << UU[LX[89]], UU[LX[89]] += (UU[LX[24]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                do {
                  qX(UU[LX[14]].push(UU[LX[35]] & LX[11]), UU[LX[35]] >>= LX[3], UU[LX[89]] -= LX[3])
                } while (UU[LX[89]] > LX[24]);
                UU[LX[24]] = -LX[2]
              } return UU[LX[24]] > -LX[2] && UU[LX[14]].push((UU[LX[35]] | UU[LX[24]] << UU[LX[89]]) & LX[11]), CX(UU[LX[14]])
        }(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
      }
      if (eX(LX[60]) + "y" in wX && function(...UU) {
          qX(UU[LX[12]] = LX[1], UU[LX[15]] = function(...XU) {
            return XU[LX[12]] = LX[18], UU[LX[13]]({}, XU[LX[1]], XU[LX[2]])
          }, UU[LX[13]] = function(...XU) {
            if (qX(XU[LX[12]] = LX[43], XU[LX[43]] = {}), XU[LX[1]][XU[LX[2]] + XU[LX[18]]] !== LX[17]) return XU[LX[1]][XU[LX[2]] + XU[LX[18]]];
            if (XU[LX[2]] === XU[LX[18]]) return LX[90];
            for (XU[LX[13]] = LX[1]; XU[LX[13]] < XU[LX[2]].length; XU[LX[13]]++) XU[LX[43]][XU[LX[2]][XU[LX[13]]]] === LX[17] && (XU[LX[43]][XU[LX[2]][XU[LX[13]]]] = LX[1]), XU[LX[43]][XU[LX[18]][XU[LX[13]]]] === LX[17] && (XU[LX[43]][XU[LX[18]][XU[LX[13]]]] = LX[1]), qX(XU[LX[43]][XU[LX[2]][XU[LX[13]]]]++, XU[LX[43]][XU[LX[18]][XU[LX[13]]]]--);
            for (XU[LX[91]] in XU[LX[43]])
              if (XU[LX[43]][XU[LX[91]]] !== LX[1]) return XU[LX[1]][XU[LX[2]] + XU[LX[18]]] = LX[53], LX[53];
            for (XU[LX[14]] = LX[2]; XU[LX[14]] < XU[LX[2]].length; XU[LX[14]]++)
              if (UU[LX[13]](XU[LX[1]], XU[LX[2]].substr(LX[1], XU[LX[14]]), XU[LX[18]].substr(LX[1], XU[LX[14]])) && UU[LX[13]](XU[LX[1]], XU[LX[2]].substr(XU[LX[14]]), XU[LX[18]].substr(XU[LX[14]])) || UU[LX[13]](XU[LX[1]], XU[LX[2]].substr(LX[1], XU[LX[14]]), XU[LX[18]].substr(XU[LX[18]].length - XU[LX[14]])) && UU[LX[13]](XU[LX[1]], XU[LX[2]].substr(XU[LX[14]]), XU[LX[18]].substr(LX[1], XU[LX[18]].length - XU[LX[14]]))) return XU[LX[1]][XU[LX[2]] + XU[LX[18]]] = LX[90], LX[90];
            return XU[LX[1]][XU[LX[2]] + XU[LX[18]]] = LX[53], LX[53]
          }, console.log(UU[LX[15]]))
        }(), (arguments[XU(LX[30])] > LX[2] && arguments[LX[2]] !== LX[17] ? arguments[LX[2]] : LX[53]) && (LX[1], lU[LX[49]])(UU)) {
        function cU(UU) {
          var XU, zU, cU, yU, QU, AU, FU;
          for (qX(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = LX[1], QU = LX[1], AU = -LX[2]), FU = LX[1]; FU < zU; FU++) {
            var oU = 'JDoPxz6%"12i_R5K/N7hfOGsV$tbU3q`=?{u}v@SldCH*ABX9^T0+kL#peE[84a!)nw(FmWY&yZ~]|jcQ,:IgrM.<;>'.indexOf(XU[FU]);
            if (oU !== -LX[2])
              if (AU < LX[1]) AU = oU;
              else {
                qX(AU += oU * LX[34], yU |= AU << QU, QU += (AU & LX[36]) > LX[37] ? LX[38] : LX[39]);
                do {
                  qX(cU.push(yU & LX[11]), yU >>= LX[3], QU -= LX[3])
                } while (QU > LX[24]);
                AU = -LX[2]
              }
          }
          return AU > -LX[2] && cU.push((yU | AU << QU) & LX[11]), CX(cU)
        }

        function yU(...UU) {
          return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = cU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
        }

        function QU(...UU) {
          UU[LX[12]] = LX[1]
        }
        return void(yU(125) in wX && QU())
      }
      const zU = window[XU(135)];
      if (typeof zU !== XU(136) + "on" || UU instanceof zU || (LX[1], iU.G)(UU)) {
        function AU(...UU) {
          for (qX(UU[LX[12]] = LX[2], UU[LX[62]] = 'NRYkmri]g",X|8tG:*nO3!4$@WoTs5F+VAqBlp#<>}Px2UvQEZI10z(?jM.Debcu;aHhdS_)fC{y`L^w[J=6&%9/~7K', UU[LX[13]] = "" + (UU[LX[1]] || ""), UU[LX[100]] = UU[LX[13]].length, UU[-LX[101]] = [], UU[LX[35]] = LX[1], UU[LX[49]] = LX[1], UU[LX[7]] = -LX[2]), UU[LX[3]] = LX[1]; UU[LX[3]] < UU[LX[100]]; UU[LX[3]]++)
            if (UU[LX[6]] = UU[LX[62]].indexOf(UU[LX[13]][UU[LX[3]]]), UU[LX[6]] !== -LX[2])
              if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[6]];
              else {
                qX(UU[LX[7]] += UU[LX[6]] * LX[34], UU[LX[35]] |= UU[LX[7]] << UU[LX[49]], UU[LX[49]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                do {
                  qX(UU[-LX[101]].push(UU[LX[35]] & LX[11]), UU[LX[35]] >>= LX[3], UU[LX[49]] -= LX[3])
                } while (UU[LX[49]] > LX[24]);
                UU[LX[7]] = -LX[2]
              } return UU[LX[7]] > -LX[2] && UU[-LX[101]].push((UU[LX[35]] | UU[LX[7]] << UU[LX[49]]) & LX[11]), CX(UU[-LX[101]])
        }

        function FU(...UU) {
          return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = AU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
        }

        function oU(...UU) {
          UU[LX[12]] = LX[1]
        }
        if (FU(138) in wX && oU(), UU[FU(139) + FU(140)] === LX[53]) {
          function DU(...UU) {
            for (qX(UU[LX[12]] = LX[2], UU[LX[15]] = '=NLriMmVAFZRJBtUYgCDd^"3pG<Hx~o482!;#/_v(1fT>@`7w.0IPj6,l{%un9[b*ycq?&kz+h|X]S$}sa)K5QEOWe:', UU[LX[18]] = "" + (UU[LX[1]] || ""), UU[LX[83]] = UU[LX[18]].length, UU[LX[104]] = [], UU[LX[102]] = LX[1], UU[LX[49]] = LX[1], UU[LX[7]] = -LX[2]), UU[LX[3]] = LX[1]; UU[LX[3]] < UU[LX[83]]; UU[LX[3]]++)
              if (UU[LX[103]] = UU[LX[15]].indexOf(UU[LX[18]][UU[LX[3]]]), UU[LX[103]] !== -LX[2])
                if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[103]];
                else {
                  qX(UU[LX[7]] += UU[LX[103]] * LX[34], UU[LX[102]] |= UU[LX[7]] << UU[LX[49]], UU[LX[49]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                  do {
                    qX(UU[LX[104]].push(UU[LX[102]] & LX[11]), UU[LX[102]] >>= LX[3], UU[LX[49]] -= LX[3])
                  } while (UU[LX[49]] > LX[24]);
                  UU[LX[7]] = -LX[2]
                } return UU[LX[7]] > -LX[2] && UU[LX[104]].push((UU[LX[102]] | UU[LX[7]] << UU[LX[49]]) & LX[11]), CX(UU[LX[104]])
          }

          function EU(UU) {
            return typeof gX[UU] === LX[16] ? gX[UU] = DU(kX[UU]) : gX[UU]
          }

          function IU(...UU) {
            qX(UU[LX[12]] = LX[1], UU[LX[105]] = function(...UU) {
              for (qX(UU[LX[12]] = LX[2], UU[LX[15]] = UU[LX[1]].length, UU[LX[18]] = [], UU[LX[4]] = LX[1], UU[LX[10]] = LX[1], UU[LX[1]].sort(((UU, XU) => UU - XU))), UU[LX[35]] = LX[1]; UU[LX[35]] < UU[LX[15]]; UU[LX[35]]++)
                if (!(UU[LX[35]] > LX[1] && UU[LX[1]][UU[LX[35]]] === UU[LX[1]][UU[LX[35]] - LX[2]]))
                  for (qX(UU[LX[4]] = UU[LX[35]] + LX[2], UU[LX[10]] = UU[LX[15]] - LX[2]); UU[LX[4]] < UU[LX[10]];)
                    if (UU[LX[1]][UU[LX[35]]] + UU[LX[1]][UU[LX[4]]] + UU[LX[1]][UU[LX[10]]] < LX[1]) UU[LX[4]]++;
                    else if (UU[LX[1]][UU[LX[35]]] + UU[LX[1]][UU[LX[4]]] + UU[LX[1]][UU[LX[10]]] > LX[1]) UU[LX[10]]--;
              else {
                for (UU[LX[18]].push([UU[LX[1]][UU[LX[35]]], UU[LX[1]][UU[LX[4]]], UU[LX[1]][UU[LX[10]]]]); UU[LX[4]] < UU[LX[10]] && UU[LX[1]][UU[LX[4]]] === UU[LX[1]][UU[LX[4]] + LX[2]];) UU[LX[4]]++;
                for (; UU[LX[4]] < UU[LX[10]] && UU[LX[1]][UU[LX[10]]] === UU[LX[1]][UU[LX[10]] - LX[2]];) UU[LX[10]]--;
                qX(UU[LX[4]]++, UU[LX[10]]--)
              }
              return UU[LX[18]]
            }, console.log(UU[LX[105]]))
          }
          EU(141) + LX[15] in wX && IU(), (LX[1], YU[LX[14]])("2 " + (LX[1], NU[LX[13]])(UU))
        } else {
          function pU(...UU) {
            for (qX(UU[LX[12]] = LX[2], UU[LX[2]] = 'AaE9rC<f}D1xQ,i/cgKV]+wB%)qb~?UPvNe&h(|$OHS[:@86nl=JF.ZkG3u{yT^W_RdX7!MY*s0mt4IpzjL"2;>`5o#', UU[LX[13]] = "" + (UU[LX[1]] || ""), UU[LX[43]] = UU[LX[13]].length, UU[LX[14]] = [], UU[LX[18]] = LX[1], UU[LX[106]] = LX[1], UU[LX[7]] = -LX[2]), UU[LX[3]] = LX[1]; UU[LX[3]] < UU[LX[43]]; UU[LX[3]]++)
              if (UU[LX[33]] = UU[LX[2]].indexOf(UU[LX[13]][UU[LX[3]]]), UU[LX[33]] !== -LX[2])
                if (UU[LX[7]] < LX[1]) UU[LX[7]] = UU[LX[33]];
                else {
                  qX(UU[LX[7]] += UU[LX[33]] * LX[34], UU[LX[18]] |= UU[LX[7]] << UU[LX[106]], UU[LX[106]] += (UU[LX[7]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                  do {
                    qX(UU[LX[14]].push(UU[LX[18]] & LX[11]), UU[LX[18]] >>= LX[3], UU[LX[106]] -= LX[3])
                  } while (UU[LX[106]] > LX[24]);
                  UU[LX[7]] = -LX[2]
                } return UU[LX[7]] > -LX[2] && UU[LX[14]].push((UU[LX[18]] | UU[LX[7]] << UU[LX[106]]) & LX[11]), CX(UU[LX[14]])
          }

          function aU(...UU) {
            return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = pU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
          }

          function tU(...UU) {
            UU[LX[12]] = LX[1];
            const XU = require("big-integer");
            qX(UU[LX[15]] = class {
              static randomPrime(...UU) {
                UU[LX[12]] = LX[2];
                const zU = XU.one.shiftLeft(UU[LX[1]] - LX[2]),
                  cU = XU.one.shiftLeft(UU[LX[1]]).prev();
                for (; LX[90];) {
                  let UU = XU.randBetween(zU, cU);
                  if (UU.isProbablePrime(256)) return UU
                }
              }
              static generate(...UU) {
                UU[LX[12]] = LX[2];
                const zU = XU(65537);
                let cU, yU;
                UU[-LX[107]] = LX[17];
                do {
                  qX(cU = this.randomPrime(UU[LX[1]] / LX[18]), yU = this.randomPrime(UU[LX[1]] / LX[18]), UU[-LX[107]] = XU.lcm(cU.prev(), yU.prev()))
                } while (XU.gcd(zU, UU[-LX[107]]).notEquals(LX[2]) || cU.minus(yU).abs().shiftRight(UU[LX[1]] / LX[18] - 100).isZero());
                return {
                  e: zU,
                  n: cU.multiply(yU),
                  d: zU.modInv(UU[-LX[107]])
                }
              }
              static encrypt(UU, zU, cU) {
                return XU(UU).modPow(cU, zU)
              }
              static decrypt(...UU) {
                return UU[LX[12]] = LX[43], XU(UU[LX[1]]).modPow(UU[LX[2]], UU[LX[18]])
              }
              static encode(UU) {
                const zU = UU.split("").map((UU => UU.charCodeAt())).join("");
                return XU(zU)
              }
              static decode(UU) {
                const XU = UU.toString();
                let zU = "";
                for (let cU = LX[1]; cU < XU.length; cU += LX[18]) {
                  let UU = Number(XU.substr(cU, LX[18]));
                  UU <= 30 ? (zU += String.fromCharCode(Number(XU.substr(cU, LX[43]))), cU++) : zU += String.fromCharCode(UU)
                }
                return zU
              }
            }, module.exports = UU[LX[15]])
          }
          if (aU(142) + "O" in wX && tU(), tX(UU) < LX[67])(LX[1], YU[LX[14]])("3 ");
          else {
            function gU(UU) {
              var XU, zU, cU, yU, QU, AU, FU;
              for (qX(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = LX[1], QU = LX[1], AU = -LX[2]), FU = LX[1]; FU < zU; FU++) {
                var oU = 'wNY.Hfu<Lrz[~5Z%+C`h=9yc}]eJ?Bxbnk@^71DS{84E#Ua;/RAX|!oVt*KMvQsI2_lWPTg$jOi6q:&>30)",(mdGpF'.indexOf(XU[FU]);
                if (oU !== -LX[2])
                  if (AU < LX[1]) AU = oU;
                  else {
                    qX(AU += oU * LX[34], yU |= AU << QU, QU += (AU & LX[36]) > LX[37] ? LX[38] : LX[39]);
                    do {
                      qX(cU.push(yU & LX[11]), yU >>= LX[3], QU -= LX[3])
                    } while (QU > LX[24]);
                    AU = -LX[2]
                  }
              }
              return AU > -LX[2] && cU.push((yU | AU << QU) & LX[11]), CX(cU)
            }

            function kU(...UU) {
              return UU[LX[12]] = LX[2], typeof gX[UU[LX[1]]] === LX[16] ? gX[UU[LX[1]]] = gU(kX[UU[LX[1]]]) : gX[UU[LX[1]]]
            }

            function GU(...UU) {
              qX(UU[LX[12]] = LX[1], UU[LX[4]] = function(UU) {
                var XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU = UU.length;
                if (YU < LX[18]) return LX[1];
                if (qX(XU = Math.max(...UU), zU = Math.min(...UU)), XU === zU) return LX[1];
                for (qX(cU = Array(YU - LX[2]).fill(Number.MAX_SAFE_INTEGER), yU = Array(YU - LX[2]).fill(Number.MIN_SAFE_INTEGER), QU = Math.ceil((XU - zU) / (YU - LX[2])), AU = LX[1]), FU = LX[1]; FU < YU; FU++) UU[FU] !== zU && UU[FU] !== XU && qX(AU = Math.floor((UU[FU] - zU) / QU), cU[AU] = Math.min(cU[AU], UU[FU]), yU[AU] = Math.max(yU[AU], UU[FU]));
                for (qX(oU = Number.MIN_SAFE_INTEGER, DU = zU), EU = LX[1]; EU < YU - LX[2]; EU++) cU[EU] === Number.MAX_SAFE_INTEGER && yU[EU] === Number.MIN_SAFE_INTEGER || qX(oU = Math.max(oU, cU[EU] - DU), DU = yU[EU]);
                return oU = Math.max(oU, XU - DU)
              }, console.log(UU[LX[4]]))
            }
            kU(143) in wX && GU(), aX()
          }
        }
      } else {
        function BU(...UU) {
          for (qX(UU[LX[12]] = LX[2], UU[LX[2]] = 'm,HzL*7#G)/$l^"I(wY>vFqT+{_Wxt4}bO2:dgM9neZ;Efa`&sDC[1N?5y|8~3Q.<@jX6p!]u%B0=AkcJRPSUKVorih', UU[LX[13]] = "" + (UU[LX[1]] || ""), UU[-LX[97]] = UU[LX[13]].length, UU[LX[10]] = [], UU[LX[35]] = LX[1], UU[LX[49]] = LX[1], UU[LX[24]] = -LX[2]), UU[LX[3]] = LX[1]; UU[LX[3]] < UU[-LX[97]]; UU[LX[3]]++)
            if (UU[-LX[98]] = UU[LX[2]].indexOf(UU[LX[13]][UU[LX[3]]]), UU[-LX[98]] !== -LX[2])
              if (UU[LX[24]] < LX[1]) UU[LX[24]] = UU[-LX[98]];
              else {
                qX(UU[LX[24]] += UU[-LX[98]] * LX[34], UU[LX[35]] |= UU[LX[24]] << UU[LX[49]], UU[LX[49]] += (UU[LX[24]] & LX[36]) > LX[37] ? LX[38] : LX[39]);
                do {
                  qX(UU[LX[10]].push(UU[LX[35]] & LX[11]), UU[LX[35]] >>= LX[3], UU[LX[49]] -= LX[3])
                } while (UU[LX[49]] > LX[24]);
                UU[LX[24]] = -LX[2]
              } return UU[LX[24]] > -LX[2] && UU[LX[10]].push((UU[LX[35]] | UU[LX[24]] << UU[LX[49]]) & LX[11]), CX(UU[LX[10]])
        }

        function ZU(UU) {
          return typeof gX[UU] === LX[16] ? gX[UU] = BU(kX[UU]) : gX[UU]
        }

        function RU() {
          var UU = function(...UU) {
            qX(UU[LX[12]] = LX[2], this.xY = UU[LX[1]], this.length = LX[1], this.map = {}, this.head = LX[50], this.tail = LX[50])
          };
          qX(UU.prototype.get = function(...UU) {
            var XU;
            return qX(UU[LX[12]] = LX[2], XU = this.map[UU[LX[1]]]), XU ? (this.remove(XU), this.insert(XU.key, XU.val), XU.val) : -LX[2]
          }, UU.prototype.put = function(...UU) {
            qX(UU[LX[12]] = LX[18], this.map[UU[LX[1]]] ? (this.remove(this.map[UU[LX[1]]]), this.insert(UU[LX[1]], UU[LX[2]])) : this.length === this.xY ? (this.remove(this.head), this.insert(UU[LX[1]], UU[LX[2]])) : (this.insert(UU[LX[1]], UU[LX[2]]), this.length++))
          }, UU.prototype.remove = function(...UU) {
            qX(UU[LX[12]] = LX[2], UU[LX[2]] = UU[LX[1]].prev, UU[LX[99]] = UU[LX[1]].next), UU[LX[99]] && (UU[LX[99]].prev = UU[LX[2]]), UU[LX[2]] && (UU[LX[2]].next = UU[LX[99]]), this.head === UU[LX[1]] && (this.head = UU[LX[99]]), this.tail === UU[LX[1]] && (this.tail = UU[LX[2]]), delete this.map[UU[LX[1]].key]
          }, UU.prototype.insert = function(...UU) {
            qX(UU[LX[12]] = LX[18], UU[LX[30]] = new List(UU[LX[1]], UU[LX[2]]), this.tail ? (this.tail.next = UU[LX[30]], UU[LX[30]].prev = this.tail, this.tail = UU[LX[30]]) : (this.tail = UU[LX[30]], this.head = UU[LX[30]]), this.map[UU[LX[1]]] = UU[LX[30]])
          }, console.log(UU))
        }
        ZU(137) + "C" in wX && RU(), (LX[1], YU[LX[14]])("5 ")
      }
    }, aU.k.subscribe("customBindingsChanged", (() => {
      SX()
    }));
    let rX = !1,
      uX = !1;
    const fX = () => rX || uX && qU.e.isInGame(),
      iX = UU => {
        fX() && UU.preventDefault()
      };
    aU.k.subscribe("displaymodeFullscreenChange", (UU => {
      HX()
    })), aU.k.subscribe("pointerLockUpdate", (UU => {
      rX = UU, HX(), MX()
    })), aU.k.subscribe("freeCursorUpdate", (UU => {
      uX = UU, HX(), MX()
    }));
    const HX = () => {
        window.removeEventListener("wheel", iX), OU.isIframed && !(0, AU.o)() && (rX || uX) && window.addEventListener("wheel", iX, {
          passive: !1
        })
      },
      MX = () => {
        window.removeEventListener("wheel", vX), (rX || uX) && window.addEventListener("wheel", vX, {
          passive: !1
        })
      },
      vX = UU => {
        !0 === UU.ctrlKey && fX() && UU.preventDefault()
      };

    function VX(UU) {
      aU.k.UY("QTEMouseState", {
        isDown: UU
      })
    }

    function sX(UU) {
      var XU, zU, yU, QU, AU, FU, oU, DU;
      const YU = (0, eU.e)();
      YU.gXU = null !== (XU = function(UU, XU) {
        var zU, cU;
        if (!YX) return null;
        const yU = UU.bloxd;
        FX ??= yU.getMetaInfo("Board").rootId;
        const QU = null !== (zU = null === XU || void 0 === XU ? void 0 : XU.O4) && void 0 !== zU ? zU : null;
        if (!QU || yU.getMetaInfo(QU).rootId !== FX) return null;
        const AU = null !== (cU = null === XU || void 0 === XU ? void 0 : XU.position) && void 0 !== cU ? cU : null;
        if (yU.playerCanChangePos(UU.pM, AU[0], AU[1], AU[2])) return null;
        const FU = (UU, XU, zU) => {
          const cU = yU.blockDataOwner.getBlockData(UU, XU, zU),
            QU = null === cU || void 0 === cU ? void 0 : cU.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return SU.singleLineBoardActions.has(QU)
        };
        if (FU(AU[0], AU[1], AU[2])) return null;
        let oU;
        UU.rXU && (oU = [...UU.rXU], UU.N_(oU, oU));
        const DU = (oU ? UU.camera.XT : 0) + yU.getBlockReach(UU.pM);
        return UU.pickBlock(oU, UU.uXU, DU, ((XU, zU, cU, QU) => 0 !== XU && ("Board" !== yU.getMetaInfo(XU).rootName || yU.playerCanChangePos(UU.pM, zU, cU, QU) || FU(zU, cU, QU))))
      }(YU, YU.gXU)) && void 0 !== XU ? XU : YU.gXU;
      const NU = null !== (zU = null === (yU = YU.gXU) || void 0 === yU ? void 0 : yU.position) && void 0 !== zU ? zU : null,
        pU = null !== (QU = YU.uXU) && void 0 !== QU ? QU : YU.camera.R_(),
        tU = eU.f.localPlayerPickActionHelper.getPickEntityResult(pU),
        gU = null !== (AU = YU.gXU) && void 0 !== AU && AU.O4 ? (0, HU.f)(YU.gXU.O4) : "Air",
        kU = UU === IU.b.UpFirePrimary || UU === IU.b.UpFireSecondary,
        GU = kU ? "onPlayerClickUp" : "onPlayerClick",
        BU = kU ? UU === IU.b.UpFireSecondary : UU === IU.b.DownFireSecondary,
        ZU = !kU && (0, cU.getWasDoubleClick)();
      aU.k.UY("mouseState", {
        PA: UU,
        isDown: !kU
      }), (0, cU.sendColyMessage)(EU.Sg, {
        PA: UU,
        WA: ZU,
        QA: NU,
        AA: tU
      }, !0), (0, eU.b)().client.triggerGameCallback(GU, YU.pM, BU, null !== (FU = null === NU || void 0 === NU ? void 0 : NU[0]) && void 0 !== FU ? FU : null, null !== (oU = null === NU || void 0 === NU ? void 0 : NU[1]) && void 0 !== oU ? oU : null, null !== (DU = null === NU || void 0 === NU ? void 0 : NU[2]) && void 0 !== DU ? DU : null, gU, tU)
    }
    window.addEventListener("keydown", (UU => {
      ["ArrowUp", "ArrowDown"].includes(UU.key) && UU.preventDefault()
    })), document.addEventListener("keydown", (UU => {
      (0, fU.c)(UU, (() => {
        const UU = (0, eU.e)();
        return (0, uU.P)(UU) || !1 !== UU.mG.canCustomiseChar
      }))
    }))
  },
  39907: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      f: () => AU
    });
    var cU = zU(39206);
    let yU = !1;

    function QU() {
      return yU
    }

    function AU(UU) {
      yU = UU, UU ? cU.g.setMultiplierType("emoteWheel", 0) : cU.g.removeMultiplier("emoteWheel")
    }
  },
  39919: (UU, XU, zU) => {
    function cU(UU) {
      return Boolean(UU.mG.useInventory && UU.mG.useFullInventory && UU.xG.GzU(UU.pM))
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  39824: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      f: () => yU
    });
    var cU = zU(37870);

    function yU(UU, XU) {
      return {
        replayedClipName: UU,
        replayedClipAgeSeconds: XU
      }
    }

    function QU(UU, XU, zU, yU, QU) {
      const AU = function(UU) {
          if ("object" !== typeof UU || null === UU) return null;
          const {
            replayedClipName: XU,
            replayedClipAgeSeconds: zU
          } = UU;
          return "string" === typeof XU && "number" === typeof zU ? {
            YX: XU,
            NX: zU
          } : null
        }(zU),
        FU = null === AU ? zU : null,
        {
          YX: oU = null,
          NX: DU = 0
        } = null !== AU && void 0 !== AU ? AU : {};
      UU.animateEntity(XU, cU.f.Custom, FU, yU, QU, oU, DU)
    }
  },
  39911: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => EU
    });
    var cU = zU(39158),
      yU = zU(344),
      QU = zU(3043);

    function AU() {
      var UU, XU, zU, cU;
      const AU = (0, QU.e)(),
        FU = null !== (UU = null === (XU = AU.xG.tzU(AU.pM)) || void 0 === XU ? void 0 : XU.selectedItem) && void 0 !== UU ? UU : null,
        oU = FU ? (0, QU.b)().getItemStat(AU.pM, FU.name, "attackCooldownMs") : null,
        DU = (0, yU.pd)(oU, null === FU || void 0 === FU || null === (zU = FU.attributes.customAttributes) || void 0 === zU || null === (cU = zU.enchantments) || void 0 === cU ? void 0 : cU["Attack Speed"]);
      return Math.max(56, Math.ceil((DU + 30) / 3))
    }
    class FU {
      constructor(UU, XU) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [UU], this.dueMs = UU, this.intervalMs = XU
      }
      spacedBy(UU, XU) {
        if (UU === this.intervalMs) return this;
        const zU = this.tries[this.tries.length - 1],
          cU = new FU(zU, UU);
        return cU.dueMs = Math.max(zU, XU - UU), cU
      }
      nextDueMs() {
        const UU = this.tries[this.tries.length - 1];
        return Math.max(UU + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(UU, XU) {
        this.tries.push(UU), this.tries.length > 3 && this.tries.shift(), this.dueMs = XU
      }
    }
    var oU = zU(39907),
      DU = zU(1310);
    class EU {
      constructor() {
        this.timer = null, this.tries = new FU(0, 0), this.check = () => {
          const UU = Date.now(),
            XU = this.tries.spacedBy(AU(), UU),
            zU = XU.nextDueMs();
          if (UU < zU) this.schedule();
          else {
            if (XU.noteTry(UU, zU), this.tries = XU, (0, DU.w)() && !(0, oU.c)()) {
              var yU, FU;
              (0, cU.c)();
              const UU = (0, QU.e)();
              null === (yU = UU.xG.izU(UU.pM)) || void 0 === yU || null === (FU = yU.jB) || void 0 === FU || FU.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var UU;
        null === (UU = EU.running) || void 0 === UU || UU.stop(), EU.running = this, this.tries = new FU(Date.now(), AU()), this.schedule()
      }
      static stopRunning() {
        var UU;
        null === (UU = EU.running) || void 0 === UU || UU.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, EU.running === this && (EU.running = null)
      }
      schedule() {
        const UU = Date.now(),
          XU = this.tries.spacedBy(AU(), UU).nextDueMs() - UU;
        this.timer = setTimeout(this.check, Math.min(XU, 100))
      }
    }
    EU.running = null
  },
  39826: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => pU,
      f: () => EU,
      j: () => IU,
      k: () => NU,
      m: () => aU,
      q: () => YU
    });
    var cU = zU(39835),
      yU = zU(37888),
      QU = zU(4063),
      AU = zU(2012),
      FU = zU(31),
      oU = zU(3043);
    const DU = new cU.c;

    function EU() {
      return DU
    }

    function YU() {
      DU.clear()
    }

    function NU() {
      for (const UU of DU.ids()) {
        const XU = DU.getName(UU);
        void 0 !== XU && AU.c.delete(XU)
      }
      YU(), FU.k.UY("playerRosterChanged", DU.ids())
    }

    function IU(UU, XU) {
      var zU, cU;
      if (DU.has(UU)) return DU.getSetting(UU, XU);
      const yU = (0, oU.e)();
      return null === (zU = yU.YM[yU.pM]) || void 0 === zU || null === (cU = zU[UU]) || void 0 === cU ? void 0 : cU[XU]
    }

    function pU(UU) {
      const {
        added: XU,
        removed: zU,
        settingChanges: cU
      } = DU.apply(UU);
      for (const {
          playerId: yU,
          name: QU
        }
        of zU) void 0 === QU || tU(yU) || AU.c.delete(QU);
      for (const {
          playerId: QU,
          settings: AU
        }
        of cU)
        if (tU(QU)) aU(QU, AU);
        else
          for (const UU in AU)(0, yU.g)(QU, UU, AU[UU]);
      (XU.length > 0 || zU.length > 0) && FU.k.UY("playerRosterChanged", DU.ids())
    }

    function aU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DU.getSettings(UU);
      if (XU) {
        (0, yU.e)(UU);
        for (const zU in XU)(0, yU.d)(UU, zU, XU[zU])
      }
    }

    function tU(UU) {
      return UU === (0, oU.e)().SXU || (0, oU.b)().client.hasEntity(UU)
    }(0, QU.onGameReset)(YU)
  },
  38838: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => LU,
      f: () => RU,
      j: () => WU,
      m: () => dU,
      p: () => eU
    });
    var cU = zU(37814),
      yU = zU(38845),
      QU = zU(352),
      AU = zU.n(QU),
      FU = zU(3791);
    const oU = new cU.Sp,
      DU = new cU.Sp,
      EU = new cU.Sp,
      YU = new cU.Sp,
      NU = new cU.Sp,
      IU = [0, 0, 0],
      pU = {
        x: 0,
        y: 0
      },
      aU = new cU.Sp(1, 0, 0),
      tU = new cU.Sp(0, 1, 0),
      gU = cU.Matrix.Identity(),
      kU = new cU.Matrix,
      GU = new cU.Matrix,
      BU = new cU.Sp,
      ZU = new yU.d(0, 0, 0, 0);

    function RU(UU, XU) {
      var zU, yU;
      const QU = PU(UU, XU);
      if (QU) {
        const UU = QU.x,
          XU = QU.y,
          zU = UU - 50,
          cU = XU - 50;
        return Math.abs(zU) <= FU.d && Math.abs(cU) <= (0, FU.l)() ? {
          x: UU,
          y: XU
        } : wU(zU, cU)
      }
      EU.sUU(XU[0], XU[1], XU[2]),
        function(UU) {
          const XU = UU.WY.LcU(),
            zU = XU ? cU.Matrix.FromArrayToRef(XU.worldMatrix, 0, GU) : UU.WY.nS().activeCamera.getWorldMatrix();
          cU.Sp.TransformNormalToRef(aU, zU, YU), YU.normalize(), cU.Sp.TransformNormalToRef(tU, zU, NU), NU.normalize()
        }(UU);
      const AU = cU.Sp.Dot(EU, YU);
      let oU = -cU.Sp.Dot(EU, NU);
      Math.abs(AU) < .001 && Math.abs(oU) < .001 && (oU = -1);
      const DU = null !== (zU = null === (yU = UU.WY.LcU()) || void 0 === yU ? void 0 : yU.projectionMatrix) && void 0 !== zU ? zU : UU.WY.nS().activeCamera.getProjectionMatrix().m;
      return wU(AU * DU[0], oU * DU[5])
    }

    function PU(UU, XU) {
      const zU = UU.WY.nS(),
        yU = zU.qp(),
        QU = yU.getRenderWidth(),
        AU = yU.getRenderHeight();
      ZU.width = QU, ZU.height = AU;
      const FU = UU.WY.LcU(),
        EU = FU ? BU.sUU(FU.eye[0], FU.eye[1], FU.eye[2]) : UU.WY.camera.globalPosition;
      oU.sUU(EU.x + 10 * XU[0], EU.y + 10 * XU[1], EU.z + 10 * XU[2]);
      const YU = FU ? cU.Matrix.FromArrayToRef(FU.viewProjectionMatrix, 0, kU) : zU.getTransformMatrix();
      return cU.Sp.ProjectToRef(oU, gU, YU, ZU, DU), DU.z < 0 || DU.z > 1 ? null : (pU.x = DU.x / QU * 100, pU.y = DU.y / AU * 100, pU)
    }

    function WU(UU, XU) {
      return RU(UU, CU(UU, XU))
    }

    function dU(UU, XU) {
      const zU = PU(UU, CU(UU, XU));
      return zU && {
        x: zU.x,
        y: zU.y
      }
    }

    function LU(UU) {
      var XU, zU;
      return 1 / (null !== (XU = null === (zU = UU.WY.LcU()) || void 0 === zU ? void 0 : zU.projectionMatrix[0]) && void 0 !== XU ? XU : UU.WY.nS().activeCamera.getProjectionMatrix().m[0])
    }

    function eU(UU, XU, zU) {
      const cU = UU.WY.LcU(),
        yU = cU ? cU.worldMatrix : UU.WY.nS().activeCamera.getWorldMatrix().m,
        QU = UU.VN;
      for (let AU = 0; AU < 3; AU++) XU[AU] = yU[12 + AU] + QU[AU], zU[AU] = yU[8 + AU];
      AU().normalize(zU, zU)
    }

    function CU(UU, XU) {
      const zU = UU.VN,
        cU = UU.WY.LcU(),
        yU = cU ? BU.sUU(cU.eye[0], cU.eye[1], cU.eye[2]) : UU.WY.camera.globalPosition;
      return IU[0] = XU[0] - zU[0] - yU.x, IU[1] = XU[1] - zU[1] - yU.y, IU[2] = XU[2] - zU[2] - yU.z, AU().normalize(IU, IU), IU
    }

    function wU(UU, XU) {
      return (0, FU.f)(UU, XU, FU.d, (0, FU.l)())
    }
  },
  39863: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU
    });
    var cU = zU(31),
      yU = zU(1310),
      QU = zU(3295);
    const AU = "Reconnecting";
    class FU {
      constructor(UU) {
        this.hooks = UU, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = UU => {
          UU.persisted || this.leave()
        }, this.controller = new QU.d((XU => UU.reconnect(XU)), {
          isSessionLive: () => !this.ended && UU.isLive(),
          onPhaseChanged: UU => {
            this.onPhaseChanged(UU)
          },
          onReconnected: XU => {
            UU.onReconnected(XU)
          },
          onGaveUp: XU => {
            !this.ended && UU.isLive() && UU.onGaveUp(this.sessionBased, XU)
          }
        })
      }
      onInitialInfo(UU, XU) {
        this.graceMs = UU, this.sessionBased = XU
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(UU) {
        this.ended || this.controller.onConnectionLost(UU, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const UU = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          XU = this.controller.heldToken;
        this.end(), UU && "" !== XU && this.hooks.releaseSeat(XU)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(UU) {
        const XU = (0, QU.q)(UU);
        XU !== this.stopped && (this.stopped = XU, this.hooks.freeze(XU));
        const zU = "frozen" === UU || "resuming" === UU && this.frozen;
        zU && !this.frozen ? (0, yU.u)(AU, {
          overridesPause: !0
        }) : !zU && this.frozen && (0, yU.s)(AU), this.frozen = zU, this.setListening("connected" !== UU), cU.k.UY(QU.p, zU ? "frozen" : UU)
      }
      setListening(UU) {
        UU !== this.listening && (this.listening = UU, UU ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39867: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = UU, this.now = XU, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const UU = this.now(),
            XU = UU - this.lastCheckAt <= 2e3;
          this.lastCheckAt = UU;
          const zU = "visible" === document.visibilityState;
          !zU || XU && this.wasVisible || (this.resumedAt = UU), this.wasVisible = zU, zU && UU - this.lastHeardAt > 12e3 && UU - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = XU(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39807: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU
    });
    var cU = zU(212),
      yU = zU(352),
      QU = zU.n(yU),
      AU = zU(37478),
      FU = zU(37480),
      oU = zU(3043);
    const DU = cU.f.cg * cU.f.playerEyeToHeightRatio,
      EU = 250,
      YU = 1.1,
      NU = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(UU, XU) {
          this.entities.set(UU, XU)
        }
        update(UU, XU) {
          const zU = this.entities.get(UU);
          this.entities.set(UU, XU);
          const cU = this.playing.get(UU);
          cU && (zU && zU.soundName === XU.soundName ? (cU.sound.setRelativeVolume(XU.volume), cU.sound.rate(XU.rate), cU.sound.setPannerAttr({
            refDistance: XU.refDistance
          })) : this.stopEntity(UU))
        }
        remove(UU) {
          this.stopEntity(UU), this.entities.delete(UU)
        }
        LY(UU) {
          this.msSinceLastScan += UU, this.msSinceLastScan < EU || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(UU) {
          const XU = this.playing.get(UU);
          XU && (XU.sound.stop(), this.playing.delete(UU))
        }
        startEntity(UU, XU, zU) {
          const cU = (0, FU.f)(XU.soundName);
          if (!cU) return console.error(`AudioEntityManager: no sound found for "${XU.soundName}", dropping audio entity ${UU}`), void this.remove(UU);
          const yU = AU.e.play(cU, XU.volume, zU, XU.maxHearDist, XU.refDistance, !0);
          yU.rate(XU.rate), this.playing.set(UU, {
            sound: yU,
            lastPos: QU().clone(zU)
          })
        }
        scan() {
          const UU = (0, oU.e)();
          if (!UU) return;
          const XU = UU.xG.wG(UU.pM);
          if (XU)
            for (const [zU, cU] of this.entities) {
              if (!UU.xG.qXU(zU, "position")) continue;
              const yU = UU.xG.wG(zU),
                AU = QU().sqrDist(XU, yU),
                FU = this.playing.get(zU);
              if (FU) {
                const UU = cU.maxHearDist * YU;
                AU > UU * UU ? this.stopEntity(zU) : QU().equals(yU, FU.lastPos) || (FU.sound.setPosition([yU[0], yU[1] + DU, yU[2]]), QU().copy(FU.lastPos, yU))
              } else AU <= cU.maxHearDist * cU.maxHearDist && this.startEntity(zU, cU, yU)
            }
        }
      }
  },
  39874: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU,
      h: () => EU
    });
    var cU = zU(1765),
      yU = zU(212),
      QU = zU(1734),
      AU = zU(1860),
      FU = zU(1203),
      oU = zU(1131);
    async function DU(UU, XU) {
      return function(UU) {
        return "object" === typeof UU && null !== UU && UU.code === yU.e.VpnIp.code
      }(XU) && function(UU) {
        return QU.d.supports("appCheck") && UU.isLoggedIn() && !UU.hasTriedAppAttestation()
      }(UU) && await async function(UU) {
        try {
          const {
            token: XU
          } = await (0, AU.d)(), {
            "3PSIDMCPP": zU
          } = await (0, oU.postJsonWithMetricsCookiesAndJsonResponse)(`${FU.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: XU
          }, {
            retries: 0
          }, UU.getMetricsCookies());
          return UU.setAppAttestedAuthJwt(zU), !0
        } catch (XU) {
          return XU instanceof cU.d && "failed" === XU.code ? (console.warn("The app couldn't get an App Check token:", XU), UU.markAppAttestationTried()) : console.error("Failed to attest the app:", XU), !1
        }
      }(UU)
    }
    async function EU(UU, XU) {
      try {
        return await XU()
      } catch (zU) {
        if (!await DU(UU, zU)) throw zU
      }
      return XU()
    }
  },
  39871: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => NU,
      e: () => EU
    });
    var cU = zU(212),
      yU = zU(1896),
      QU = zU(1220),
      AU = zU(9493);
    const FU = [250, 500, 1e3, 2e3, 1250],
      oU = 406;

    function DU(UU) {
      if ("object" !== typeof UU || null === UU) return !1;
      const {
        code: XU,
        message: zU
      } = UU, yU = cU.e.duplicateLobbyNameError;
      return (XU === yU.code || XU === oU) && (zU === yU.text || zU === yU.text + cU.m)
    }
    async function EU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU.e;
      for (let yU = 0;; yU++) {
        let AU;
        (0, QU.l)(XU);
        try {
          return await UU()
        } catch (cU) {
          if (AU = FU[yU], void 0 === AU || !DU(cU)) throw cU
        }
        await zU(AU, XU)
      }
    }
    const YU = new Set([cU.e.duplicateLobbyNameError.code, cU.e.lobbyCantBeCreated.code, cU.e.roomDisposedEarlyError.code, cU.e.roomDisposedLateError.code, cU.e.serverRoomLimitReached.code]);

    function NU(UU) {
      if (DU(UU)) return !0;
      const XU = (0, AU.f)(UU);
      return "number" === typeof XU && YU.has(XU)
    }
  },
  39858: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      h: () => yU
    });
    var cU = zU(31);

    function yU(UU) {
      return "refetchCode" === UU || "devDownloadJson" === UU || UU.startsWith("Plugin")
    }

    function QU(UU, XU) {
      "refetchCode" !== UU ? "Plugin|MobAiPlugin|ShowPetUi" !== UU ? Promise.all([zU.e(120), zU.e(121), zU.e(116), zU.e(118), zU.e(231)]).then((() => zU(44426))).then((zU => {
        let {
          runClientGameMessage: cU
        } = zU;
        cU(UU, XU)
      })).catch((XU => {
        console.error(`Game message ${UU} failed`, XU)
      })) : cU.k.UY("showPetUi", XU) : cU.k.UY("refetchCode")
    }
  },
  39847: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU
    });
    var cU = zU(1236),
      yU = zU(1376),
      QU = zU(27),
      AU = zU(1349),
      FU = zU(1360),
      oU = zU(1568),
      DU = zU(37181);

    function EU(UU) {
      let {
        nU: XU,
        mU: zU
      } = UU;
      const EU = null !== XU && void 0 !== XU ? XU : (0, FU.b)().gameNameWithVariation;
      (0, cU.E)(EU) && ((0, DU.l)(), (0, AU.bb)((() => {
        console.log("Received matchmaking order from game server to game", XU), (0, QU.n)("inGameReplay"), (0, oU.navigatePreserveSearch)((0, yU.b)(EU, null !== zU && void 0 !== zU ? zU : void 0))
      }), "video_start"))
    }
  },
  39841: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      i: () => oU,
      j: () => DU,
      k: () => YU
    });
    var cU = zU(2005),
      yU = zU(31),
      QU = zU(1410),
      AU = zU(1274);
    const FU = new Map;

    function oU(UU, XU) {
      yU.k.UY("newUiRequest", {
        id: UU,
        clientParameters: XU
      }, !0)
    }

    function DU(UU) {
      yU.k.UY("removeUiRequest", UU, !0);
      const XU = FU.get(UU);
      XU && (XU.tearDownNotification(), FU.delete(UU))
    }

    function EU() {
      yU.k.UY("clearUiRequests");
      for (const UU of FU.values()) UU.tearDownNotification();
      FU.clear()
    }

    function YU(UU, XU, zU, yU) {
      const oU = "string" === typeof XU ? {
          translationKey: XU
        } : XU,
        DU = QU.NotificationProvider.showPromptPopup({
          title: oU.translationKey,
          textOpts: {
            title: (0, AU.e)(oU.params, cU.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: zU,
          unlockPointerKey: "uiRequestPopup"
        });
      FU.set(UU, DU), DU.getResult().then((XU => {
        FU.delete(UU), "notificationTornDown" !== XU && yU(XU)
      }))
    }
  },
  39897: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => IU,
      d: () => NU
    });
    const cU = "ue:",
      yU = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      QU = "[A-Za-z0-9]{1,24}",
      AU = 15,
      FU = new RegExp(`^${QU}$`);
    new RegExp(`^${cU}(${[...yU,"other"].join("|")}):(?:n|k(${QU})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function oU(UU, XU, zU, QU, oU) {
      const DU = "string" === typeof UU && yU.includes(UU) ? UU : "other";
      let EU = "n";
      return "string" === typeof XU ? EU = FU.test(XU) ? `k${XU}` : "n" : "number" === typeof zU && Number.isInteger(zU) && zU >= 0 && zU <= AU && (EU = `b${zU}`), `${cU}${DU}:${EU}:${QU?1:0}${oU?1:0}`
    }
    var DU = zU(1715),
      EU = zU(1808);
    let YU = null;

    function NU(UU) {
      const XU = UU instanceof Element && UU !== document.body && UU !== document.documentElement && !(0, DU.t)(UU) && !UU.closest("#root");
      return {
        editable: (0, EU.e)(UU),
        outsideView: XU
      }
    }

    function IU(UU) {
      return YU ??= function(UU) {
        try {
          const {
            editable: XU,
            outsideView: zU
          } = NU(UU.target), cU = UU;
          return oU(UU.type, cU.code, cU.button, XU, zU)
        } catch {
          return oU(null, null, null, !1, !1)
        }
      }(UU), YU
    }
  },
  39835: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    class cU {
      constructor() {
        this.members = new Map
      }
      apply(UU) {
        const XU = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const cU of UU.KQ) {
          let UU = this.members.get(cU.bQ);
          if (UU || (UU = {
              name: null,
              settings: {}
            }, this.members.set(cU.bQ, UU), XU.added.push(cU.bQ)), null !== cU.TQ && (UU.name = cU.TQ), null !== cU.hQ || cU.UA.length > 0) {
            const zU = null === cU.hQ ? {} : JSON.parse(cU.hQ);
            Object.assign(UU.settings, zU);
            for (const XU of cU.UA) delete UU.settings[XU], zU[XU] = void 0;
            XU.settingChanges.push({
              playerId: cU.bQ,
              settings: zU
            })
          }
        }
        for (const cU of UU.XA) {
          const UU = this.members.get(cU);
          var zU;
          if (UU) this.members.delete(cU), XU.removed.push({
            playerId: cU,
            name: null !== (zU = UU.name) && void 0 !== zU ? zU : void 0
          })
        }
        return XU
      }
      has(UU) {
        return this.members.has(UU)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(UU) {
        var XU, zU;
        return null !== (XU = null === (zU = this.members.get(UU)) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : void 0
      }
      getSettings(UU) {
        var XU;
        return null === (XU = this.members.get(UU)) || void 0 === XU ? void 0 : XU.settings
      }
      getSetting(UU, XU) {
        var zU;
        return null === (zU = this.members.get(UU)) || void 0 === zU ? void 0 : zU.settings[XU]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39861: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      g: () => yU
    });
    const cU = ["description", "label"];

    function yU(UU) {
      const XU = UU.type;
      return {
        type: XU,
        params: UU[XU]
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);