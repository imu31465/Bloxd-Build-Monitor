export const id = 185;
export const ids = [185];
export const modules = {
  40356: (RR, JR, GR) => {
    function yR(RR) {
      return !(!RR.lobbyLeaderboardInfo && !RR.lobbyManage)
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  40333: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR,
      f: () => ZR
    });
    var yR = GR(32);
    let tR = !1;

    function uR() {
      return tR
    }

    function ZR(RR) {
      tR !== RR && (tR = RR, yR.n.JK("replayViewer|videoExportChanged"))
    }
  },
  40270: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(32),
      tR = GR(2163);

    function uR(RR) {
      let {
        taskId: JR,
        progress: GR
      } = RR;
      const yR = tR.c.get("_tasks");
      null !== yR && void 0 !== yR && yR[JR] && tR.c.apply({
        _tasks: {
          ...yR,
          [JR]: {
            ...yR[JR],
            progress: GR
          }
        }
      })
    }
    yR.n.subscribe("clientTaskProgress", (RR => {
      uR(RR)
    }))
  },
  40200: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => GG,
      f: () => RG,
      g: () => JG
    });
    var yR = GR(2421),
      tR = GR(163),
      uR = GR(203),
      ZR = GR(688),
      qR = GR(46),
      iR = GR(2435),
      fR = GR(2532),
      VR = GR(2502),
      KR = GR(1317);
    const wR = new WeakMap;
    class rR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          SVR: !0
        };
        this.callbacks = JR, this.options = GR, this.cyR = void 0, this.sessionId = void 0, this.sA = [], this.jVR = !1, this.He = !1, this.dVR = void 0, this.HA = 0, this.uZR = 0, this.EVR = (RR, JR) => {
          if (this.He) return;
          const GR = Number(RR);
          this.jVR ? this.YVR(GR, JR) : this.sA.push({
            id: GR,
            payload: JR
          })
        }, this.dispose = () => {
          this.He || (this.He = !0, wR.delete(this), this.sA.length = 0, this.dVR())
        }, this.cyR = RR, this.sessionId = RR.sessionId, wR.set(this, []), this.dVR = this.kVR()
      }
      QVR(RR) {
        this.dVR(), this.cyR = RR, this.sessionId = RR.sessionId, this.HA = 0, this.uZR = 0, this.dVR = this.kVR()
      }
      get FW() {
        return this.uZR
      }
      kVR() {
        const RR = this.cyR.DW("*", this.EVR);
        return this.options.SVR && this.cyR.oW(this.dispose), RR
      }
      YVR(RR, JR) {
        try {
          (0, fR.hc)(RR) && (JR = (0, fR.b)(RR, VR.GK.from(JR)));
          const GR = wR.get(this)[RR];
          if ("function" !== typeof GR) {
            if (this.callbacks.FVR) return void this.callbacks.FVR(RR, JR);
            throw new Error(`No onMessage handler registered for message id ${RR}`)
          }
          GR(JR)
        } catch (GR) {
          this.callbacks.TVR(`Error in onMessage ${RR} with payload ${JSON.stringify(JR)}`, GR)
        } finally {
          this.HA++
        }
      }
      sVR() {
        for (const {
            id: RR,
            payload: JR
          }
          of this.sA) {
          if (this.He) break;
          this.YVR(RR, JR)
        }
        this.sA.length = 0
      }
      oB() {
        return this.He
      }
      hVR() {
        if (this.jVR || this.He) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          DW: (RR, JR) => {
            if (this.jVR || this.He) throw new Error("Trying to call onMessage after registration finished");
            this.DW(RR, JR)
          },
          finishRegistration: () => {
            if (this.He) throw new Error("Cannot finish message registration after disposal");
            this.jVR = !0, this.sVR()
          }
        }
      }
      DW(RR, JR) {
        var GR, yR;
        null === (GR = (yR = this.callbacks).RKR) || void 0 === GR || GR.call(yR);
        const tR = wR.get(this);
        for (; RR > tR.length;) tR[tR.length] = null;
        tR[RR] = JR
      }
      send(RR, JR) {
        this.JKR(), (0, KR.z)(JR) ? this.cyR.rC(RR, JR) : this.cyR.send(RR, JR)
      }
      JKR() {
        var RR, JR;
        (this.uZR++, 5 === eR++) && (null === (RR = (JR = this.callbacks).RKR) || void 0 === RR || RR.call(JR), eR = 0)
      }
      IU() {
        this.dispose(), this.cyR.IU()
      }
      leave() {
        this.dispose(), this.cyR.leave()
      }
    }
    let eR = 0;
    var aR = GR(2442);
    class LR extends rR {
      constructor(RR) {
        super(RR, {
          RKR: () => {
            (0, qR.o)(!0) && (0, yR.dW)()
          },
          TVR: (RR, JR) => {
            var GR;
            null === (GR = (0, iR.i)()) || void 0 === GR || GR.Ia(RR, JR)
          }
        }, {
          SVR: !1
        }), (0, aR.g)(RR)
      }
      JC(RR, JR) {
        return !!(0, aR.l)((0, aR.e)(), this.cyR, RR, JR) && (this.JKR(), !0)
      }
      QVR(RR) {
        this.GKR(), super.QVR(RR), (0, aR.g)(RR)
      }
      IU() {
        super.IU(), this.GKR()
      }
      GKR() {
        this.cyR.jU.VK.jD = void 0
      }
    }
    var nR = GR(32),
      UR = GR(2163),
      WR = GR(1943),
      AR = GR(37616),
      CR = GR(40209),
      XR = GR(39207),
      MR = GR(38977),
      BR = GR(679),
      lR = GR(39568);

    function pR(RR, JR, GR) {
      const yR = function(RR) {
          const JR = new Int32Array(RR.length * lR.g);
          return RR.forEach(((RR, GR) => {
            const yR = GR * lR.g;
            if (4 === RR.length) {
              const [GR, tR, uR, ZR] = RR;
              JR.set([GR, tR, uR, GR, tR, uR, ZR], yR)
            } else {
              const [GR, tR, uR, ZR, qR, iR, fR] = RR;
              JR.set([GR, uR, qR, tR, ZR, iR, fR], yR)
            }
          })), JR
        }(GR),
        tR = (JR, GR, yR, tR) => {
          RR.setBlockNoMulti(JR, GR, yR, tR, !0)
        };
      RR.client.gameRecorder.isCapturing() ? (0, lR.mb)(yR, (0, lR.jb)(yR), tR) : RR.xw.NK.Qp(yR, {
        Yk: tR,
        isHookId: JR => RR.blockChangeHasHooks(JR),
        watched: () => function(RR, JR, GR) {
          const yR = [],
            tR = (RR, JR, GR) => {
              yR.push(RR, JR, GR)
            },
            uR = new Set;
          for (let ZR = 0; ZR < GR.length; ZR += lR.g)
            for (let JR = (0, BR.X)(GR[ZR]); JR <= (0, BR.X)(GR[ZR + 3]); JR++)
              for (let yR = (0, BR.X)(GR[ZR + 1]); yR <= (0, BR.X)(GR[ZR + 4]); yR++)
                for (let qR = (0, BR.X)(GR[ZR + 2]); qR <= (0, BR.X)(GR[ZR + 5]); qR++) {
                  const GR = `${JR}|${yR}|${qR}`;
                  uR.has(GR) || (uR.add(GR), RR.blockDataOwner.forEachDataCell(JR, yR, qR, tR))
                }
          return JR.forEachCell(tR), Int32Array.from(yR)
        }(RR, JR, yR)
      }), RR.xw.zJR()
    }

    function gR(RR) {
      RR.lyR = new Set, RR.byR = new Set, RR.pyR = new Set, RR.vyR = new Set, RR.gyR = [], RR.OyR = [], RR.Rk = new Set, RR.jG = [], RR.Zk = []
    }
    class bR {
      constructor(RR) {
        this.xw = RR
      }
      register(RR) {
        const JR = this.xw,
          GR = (0, iR.e)();
        RR.DW(fR.Q, (RR => {
          JR.NK.lyR.add(RR), JR.NK.byR.delete(RR)
        })), RR.DW(fR.Z, (RR => {
          JR.NK.byR.add(RR), JR.NK.lyR.delete(RR)
        })), RR.DW(fR.ke, (RR => {
          JR.NK.byR.delete(RR), JR.NK.lyR.delete(RR)
        })), RR.DW(fR.V, (RR => {
          JR.NK.pyR.add(RR), JR.NK.vyR.delete(RR)
        })), RR.DW(fR.db, (RR => {
          JR.NK.vyR.add(RR), JR.NK.pyR.delete(RR)
        })), RR.DW(fR.pe, (RR => {
          JR.NK.vyR.delete(RR), JR.NK.pyR.delete(RR)
        })), RR.DW(fR.R, (RR => {
          (0, KR.$)(RR, JR.NK.OyR), (0, KR.$)(RR, JR.NK.gyR), JR.NK.gyR.push(RR)
        })), RR.DW(fR.$, (RR => {
          (0, KR.$)(RR, JR.NK.gyR), (0, KR.$)(RR, JR.NK.OyR), JR.NK.OyR.push(RR)
        })), RR.DW(fR.oe, (RR => {
          (0, KR.$)(RR, JR.NK.gyR), (0, KR.$)(RR, JR.NK.OyR)
        })), RR.DW(fR.Jf, (RR => {
          let {
            Jt: GR,
            Gt: yR
          } = RR;
          yR ? JR.NK.Rk.delete(GR) : JR.NK.Rk.add(GR)
        })), RR.DW(fR.Hf, (RR => {
          let {
            jG: yR,
            dG: tR
          } = RR;
          GR.updateWalkThroughRect(JR.WH, yR, tR)
        })), (0, yR.onGameResetOnce)((() => {
          gR(JR.NK)
        })), RR.DW(fR.bc, (RR => {
          XR.e.applyServerUpdate(RR)
        })), RR.DW(fR.jb, (RR => {
          GR.applyServerBlocks((() => {
            ! function(RR, JR) {
              for (const {
                  rJ: GR,
                  eJ: yR
                }
                of JR) {
                const JR = MR.c[yR];
                if (JR) {
                  const {
                    compX: yR,
                    compY: tR,
                    compZ: uR,
                    mainMultiblock: ZR
                  } = JR;
                  RR.lD(GR[0] - yR, GR[1] - tR, GR[2] - uR, ZR)
                }
              }
              for (const {
                  rJ: GR,
                  eJ: yR,
                  aJ: tR
                }
                of JR) RR.setBlockNoMulti(GR[0], GR[1], GR[2], yR, !0), RR.blockDataOwner.setBlockData(GR[0], GR[1], GR[2], null === tR ? void 0 : JSON.parse(tR)), RR.blockAdded(GR[0], GR[1], GR[2], yR)
            }(GR, RR)
          })), nR.n.JK("changeBlockFail", RR), nR.n.JK("blockChangeRefused"), GR.client.triggerGameCallback("onChangeBlockFail", RR), nR.n.JK("EditBoard", {
            pos: null
          }), nR.n.JK("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        }));
        const tR = RR => {
          GR.applyServerBlocks((() => {
            pR(GR, XR.e, RR)
          }))
        };
        RR.DW(fR.Cb, tR), RR.DW(fR.Ub, tR), RR.DW(fR.zf, (RR => {
          let {
            nu: JR,
            Uu: yR
          } = RR;
          if (GR.lT(JR[0], JR[1], JR[2])) {
            const RR = (0, iR.e)().rW(JR[0], JR[1], JR[2]);
            (0, iR.e)().updateMailboxContents(JR[0], JR[1], JR[2], RR, yR)
          }
        })), RR.DW(fR.Ke, (RR => {
          let {
            pos: JR,
            data: yR
          } = RR;
          GR.blockDataOwner.setBlockData(JR[0], JR[1], JR[2], yR), GR.blockAdded(JR[0], JR[1], JR[2], GR.rW(JR[0], JR[1], JR[2]))
        }))
      }
    }
    var vR = GR(38267),
      OR = GR(37494),
      xR = GR(39227),
      NR = GR(39077),
      DR = GR(39245);
    class HR {
      constructor(RR, JR) {
        this.xw = RR, this.setUpQueuedEntity = JR
      }
      register(RR) {
        const JR = this.xw,
          GR = (0, iR.e)();
        RR.DW(fR.P, (RR => {
          let {
            RR: JR,
            JR: GR
          } = RR;
          this.setUpQueuedEntity(JR), JR = (0, OR.d)(JR), (0, iR.e)().client.gameRecorder.recordBulletShot(JR, GR), nR.n.JK(`bulletShot|${JR}`, {
            bulletDirections: GR
          })
        })), RR.DW(fR.fc, (RR => {
          let {
            gt: JR,
            bt: GR
          } = RR;
          nR.n.JK("damagedByOtherPlayer", {
            gt: JR,
            direction: GR
          }, !0)
        })), RR.DW(fR.Bd, (RR => {
          nR.n.JK("playerKilled", RR, !0), (0, OR.l)(RR.killerEId) && !(0, OR.l)(RR.deadEId) && nR.n.JK("sessionReplayPlayerKill", {
            killstreak: RR.killstreak
          }), (0, iR.e)().client.gameRecorder.recordPlayerKilled(RR.deadEId, RR.killerEId, RR.withItem, RR.killstreak)
        })), RR.DW(fR.Ib, (RR => {
          nR.n.JK("customKillfeed", RR, !0), (0, iR.e)().client.gameRecorder.recordCustomKillfeed(RR.killer, RR.victim, RR.withItem)
        })), RR.DW(fR.Md, (RR => {
          let {
            Gy: GR,
            yy: yR
          } = RR;
          this.setUpQueuedEntity(GR);
          const tR = JR.zC.uyR(GR);
          null !== tR && void 0 !== tR && tR.isGun() && tR.reload(Date.now(), yR)
        })), RR.DW(fR.Fe, (RR => {
          let {
            xJ: GR,
            NJ: yR
          } = RR;
          const tR = yR ? (0, DR.f)(JR, yR) : void 0;
          nR.n.JK("sendHitmarker", {
            xJ: GR,
            screenPos: tR
          }, !0)
        })), RR.DW(fR.Ic, (RR => {
          let {
            ot: yR,
            ct: tR,
            zt: uR,
            St: ZR,
            jt: qR,
            dt: iR,
            Et: fR
          } = RR;
          this.setUpQueuedEntity(yR), yR = (0, OR.d)(yR);
          const VR = JR.zC.sGR(yR);
          if (VR && (VR.lastHurtTime = performance.now()), (0, xR.playRigHurt)(JR, yR, iR), nR.n.JK("lifeformHurt", {
              eId: yR,
              Et: fR
            }), tR) {
            const RR = (0, DR.f)(JR, tR.NJ);
            nR.n.JK("yourAttackHit", {
              xJ: ZR,
              screenPos: RR,
              hitSelf: yR === JR.WH
            })
          }
          yR === JR.WH && (GR.shakePlayerCamera(yR, qR / 40, 200), nR.n.JK("closeShopOnDamaged", null), nR.n.JK("damagedByOtherPlayer", {
            gt: null,
            direction: iR,
            jt: qR
          }, !0));
          const KR = JR.zC.vW(yR);
          if (KR && (uR || ZR)) {
            const RR = [KR[0], KR[1] + 1, KR[2]];
            uR && (0, NR.k)(JR, NR.A, RR, 15), ZR && (0, NR.k)(JR, NR.p, RR, 10)
          }
        })), RR.DW(fR.Fc, (RR => {
          let {
            Gu: GR,
            yu: yR,
            tu: tR
          } = RR;
          (0, vR.c)(JR).setHealthFrac((0, OR.d)(GR), tR), nR.n.JK("lifeformHealthChanged", {
            eId: (0, OR.d)(GR),
            yu: yR,
            tu: tR
          })
        })), RR.DW(fR.K, (RR => {
          let {
            wt: GR,
            rt: yR
          } = RR;
          (0, iR.e)().playerAttacked(JR.WH, GR, yR)
        })), RR.DW(fR.lb, (() => {
          const RR = JR.zC.uyR(JR.WH);
          null !== RR && void 0 !== RR && RR.isChargeable() && RR.finishCharging(!1, Date.now())
        })), RR.DW(fR.Nb, (RR => {
          let {
            tZ: JR,
            uZ: GR,
            ZZ: yR,
            qZ: tR,
            iZ: uR,
            fZ: ZR
          } = RR;
          JR = (0, OR.d)(JR), (0, iR.e)().client.updateEffect(JR, GR, {
            displayName: yR,
            icon: tR,
            duration: uR,
            level: ZR
          })
        })), RR.DW(fR.Qd, (RR => {
          let {
            tZ: JR,
            uZ: GR
          } = RR;
          JR = (0, OR.d)(JR), (0, iR.e)().client.removeEffect(JR, GR)
        })), RR.DW(fR.vf, (RR => {
          nR.n.JK("ttbEffectMultiplier", RR)
        }))
      }
    }
    var oR = GR(40240),
      cR = GR(38265),
      PR = GR(2997),
      IR = GR(39256),
      mR = GR(37466),
      zR = GR(37470),
      SR = GR(38178),
      jR = GR(38296),
      dR = GR(39259),
      ER = GR(40246);
    class YR {
      constructor(RR, JR) {
        this.xw = RR, this.setUpQueuedEntity = JR
      }
      register(RR) {
        const JR = this.xw,
          GR = (0, iR.e)();
        RR.DW(fR.Vc, (RR => {
          let {
            eId: GR,
            settings: yR
          } = RR;
          (0, jR.h)(GR);
          for (const JR in yR)(0, jR.d)(GR, JR, yR[JR]);
          if ("canSee" in yR && JR.zC.RGR(GR, "hidingMeshManager")) {
            const RR = JR.zC.getState(GR, "hidingMeshManager");
            RR.canSee = (0, dR.d)("canSee", yR.canSee), RR._forceUpdate = !0
          }
        })), RR.DW(fR.D, (RR => {
          let {
            fG: GR,
            VG: yR,
            animationScript: tR,
            KG: uR,
            wG: ZR,
            rG: qR,
            eG: fR
          } = RR;
          GR = (0, OR.d)(GR);
          const VR = null === tR && null !== qR ? (0, oR.h)(qR, fR) : tR;
          (0, iR.e)().client.gameRecorder.recordAnimateEntity(GR, yR, VR, uR, ZR), (0, vR.c)(JR).animations.animateEntity(GR, yR, tR, uR, ZR, qR, fR), null !== tR || GR === JR.WH && yR === cR.h.Emote && (0, iR.e)().client.cameraController.endTemporaryThirdPerson()
        })), RR.DW(fR.De, (RR => {
          (0, ER.b)(RR)
        })), RR.DW(fR.yd, (RR => {
          for (const JR of RR)(0, IR.x)(JR);
          nR.n.JK("playerCosmeticsUpdated", RR, !0)
        })), RR.DW(fR.J, (RR => {
          for (const GR of RR)(0, SR.g)(JR, GR)
        })), RR.DW(fR.Zc, (RR => {
          (0, NR.o)(JR, (0, KR.o)(RR))
        })), RR.DW(fR.$c, (RR => {
          PR.h[RR.Kt] ? (0, NR.o)(JR, {
            ...PR.h[RR.Kt],
            pos1: RR.pos1,
            pos2: RR.pos2
          }) : console.error(`Unknown preset id: ${RR.Kt}`)
        })), RR.DW(fR.vd, (RR => {
          var JR, GR;
          let {
            YG: yR,
            kG: tR,
            QG: uR,
            FG: ZR
          } = RR, {
            sG: qR,
            hG: fR
          } = null !== ZR && void 0 !== ZR ? ZR : {};
          const {
            TG: VR
          } = null !== ZR && void 0 !== ZR ? ZR : {};
          qR = null !== (JR = qR) && void 0 !== JR ? JR : void 0, fR = null !== (GR = fR) && void 0 !== GR ? GR : void 0, "string" === typeof VR && this.setUpQueuedEntity(VR), (0, iR.e)().client.gameRecorder.recordPlaySound(yR, tR, uR, ZR), mR.d.play((0, zR.f)(yR), tR, VR, qR, fR).rate(uR)
        })), RR.DW(fR.Af, (RR => {
          for (const JR in RR) {
            const yR = RR[JR];
            for (const RR in yR) GR.client.meshCreator.handleParticleSystemUpdate(JR, RR, yR[RR])
          }
        }))
      }
    }
    var kR = GR(38950),
      QR = GR(38924);
    class FR {
      constructor(RR) {
        this.xw = RR
      }
      register(RR) {
        const JR = this.xw,
          GR = (0, iR.e)();

        function yR() {
          return JR.zC.PGR(JR.WH)
        }
        RR.DW(fR.rc, (RR => {
          let {
            et: GR,
            Lt: yR,
            nt: tR,
            Ut: uR,
            Wt: ZR,
            Ct: qR,
            Xt: iR,
            Mt: fR,
            Bt: VR
          } = RR;
          if (!JR.zC.RGR(GR, "itemState")) return void(0, kR.i)(JR, GR, [ZR, qR, iR], yR, {
            amount: tR,
            attributes: JSON.parse(uR),
            Mt: fR,
            size: VR
          });
          const KR = JR.zC.getState(GR, "itemState");
          KR.amount = tR, KR.Mt = fR, KR.creationTime = Date.now(), (0, QR.setServerPosition)(JR.zC.getState(GR, "smoothToServerPos"), ZR, qR, iR)
        })), RR.DW(fR.fb, (RR => {
          (0, vR.c)(JR).setCantPickUp(RR, !0), JR.zC.RGR(RR, "itemState") && (JR.zC.getState(RR, "itemState").Mt = !0)
        })), RR.DW(fR.ie, (RR => {
          (0, vR.c)(JR).setCantPickUp(RR, !1), JR.zC.RGR(RR, "itemState") && (JR.zC.getState(RR, "itemState").Mt = !1)
        })), RR.DW(fR.nd, (RR => {
          let {
            pickUpItems: JR,
            pickUpAckSeq: GR
          } = RR;
          for (const {
              name: tR,
              amount: uR,
              attributes: ZR
            }
            of JR) yR().pickUpItem({
            name: tR,
            amount: uR,
            typeObj: kR.B[tR],
            attributes: ZR
          });
          (0, iR.e)().client.inventoryPrediction.serverChangeApplied(GR)
        })), RR.DW(fR.Ue, (RR => {
          let {
            index: GR,
            name: yR,
            amount: tR,
            attributes: uR,
            setSlotAckSeq: ZR
          } = RR;
          const qR = JR.zC.IGR(JR.WH);
          (GR < qR.playerInventory.numSlots || qR.yG || qR.inCreative) && qR.setItemSlot(GR, yR, tR, uR), (0, iR.e)().client.inventoryPrediction.serverChangeApplied(ZR)
        })), RR.DW(fR.nc, (RR => {
          (0, iR.e)().client.inventoryPrediction.acknowledge(RR)
        })), RR.DW(fR.A, (RR => {
          let {
            PJ: JR,
            IJ: GR,
            mJ: yR,
            zJ: tR
          } = RR;
          (0, iR.e)().client.itemDropPrediction.onActionItemDrops(JR, GR, yR, tR)
        })), RR.DW(fR.xb, (RR => {
          yR().clearInventory(), (0, iR.e)().client.inventoryPrediction.serverChangeApplied(RR)
        })), RR.DW(fR.Xe, (RR => {
          nR.n.JK("setSelectedInventorySlotI", RR, !0)
        })), RR.DW(fR.rb, (RR => {
          let {
            Yt: GR,
            kt: yR,
            Qt: tR,
            Ft: uR,
            Tt: ZR,
            st: qR,
            ht: fR,
            Ru: VR
          } = RR;
          const KR = JR.zC.IGR(JR.WH);
          if (qR) {
            const {
              GG: RR,
              iG: JR
            } = VR;
            return (0, iR.e)().client.inventoryPrediction.fJR(JR, (() => {
              KR.chestRefreshed(yR, tR, uR, fR, RR)
            })) && nR.n.JK("chestToggleFromServer", !1, !0), void nR.n.JK("chestRefreshedFromServer")
          }(GR || KR.yG) && (GR ? (KR.chestOpened(yR, tR, uR, ZR, fR), null !== ZR && (0, iR.e)().client.ironChestPasskeyCache.onChestOpened(uR, ZR)) : KR.chestClosed(), nR.n.JK("chestToggleFromServer", GR, !0))
        })), RR.DW(fR.Kb, (RR => {
          let {
            craftingRecipeItemName: yR,
            recipesForItem: tR
          } = RR;
          yR ? GR.craftingManager.editRecipesForPlayer(JR.WH, yR, tR) : GR.craftingManager.resetAllPlayerRecipes(JR.WH), nR.n.JK("craftingRecipesEdited", {
            itemName: yR,
            recipesForItem: tR
          })
        })), RR.DW(fR.Yd, (RR => {
          let {
            uJ: JR,
            ZJ: GR,
            qJ: tR
          } = RR;
          yR().removeItemName(JR, GR), (0, iR.e)().client.inventoryPrediction.serverChangeApplied(tR)
        })), RR.DW(fR.Ud, (RR => {
          let {
            tJ: yR
          } = RR;
          GR.craftingManager.removeRecipes(JR.WH, yR), nR.n.JK("craftingRecipesEdited", {
            itemName: yR,
            recipesForItem: []
          })
        }))
      }
    }
    var TR = GR(7588),
      sR = GR(38788),
      hR = GR(385),
      RJ = GR.n(hR),
      JJ = GR(5326),
      GJ = GR(38853),
      yJ = GR(39410),
      tJ = GR(38779);
    class uJ {
      constructor(RR, JR) {
        this.xw = RR, this.setUpQueuedEntity = JR
      }
      register(RR) {
        const JR = this.xw,
          GR = (0, iR.e)();
        RR.DW(fR.of, (RR => {
          let {
            FJ: GR,
            TJ: tR,
            sJ: uR,
            hJ: ZR
          } = RR;
          const qR = [tR, uR, ZR];
          JR.zC.setPosition(JR.WH, qR), (0, yR.sendColyMessage)(fR.Qg, {
            TV: GR,
            sV: JJ.f
          }), nR.n.JK("localPlayerTeleported", {
            pos: qR,
            isCorrection: !1
          })
        })), RR.DW(fR.hd, (RR => {
          let {
            DJ: JR,
            HJ: GR,
            oJ: yR,
            cJ: tR
          } = RR;
          this.setUpQueuedEntity(JR);
          const uR = [GR, yR, tR];
          nR.n.JK(`otherPlayerTeleported|${JR}`, {
            pos: uR
          })
        })), RR.DW(fR.Fd, (RR => {
          let {
            NR: GR,
            DR: tR,
            HR: uR,
            oR: ZR,
            cR: qR,
            PR: iR,
            IR: VR,
            zR: KR,
            mR: wR,
            ER: rR
          } = RR;
          const eR = [tR, uR, ZR];
          JR.zC.setPosition(JR.WH, eR);
          const aR = JR.zC.aGR(JR.WH),
            LR = JR.zC.Lk(JR.WH);
          RJ().set(LR.bY, 0, 0, 0), RJ().set(LR.vY, 0, 0, 0), RJ().set(LR.BL, qR, iR, VR), LR.mY(), aR._flying = null !== rR, rR ? (aR.flyAccel.YR = rR.YR, aR.flyAccel.kR = rR.kR) : aR.flyAccel.reset(), KR && aR.movementType === TR.j.GLIDING && (aR.jR = KR.jR, RJ().copy(aR.dR, KR.dR)), (0, yR.sendColyMessage)(fR.Qg, {
            TV: GR,
            sV: JJ.f
          }), nR.n.JK("localPlayerTeleported", {
            pos: eR,
            isCorrection: !0
          })
        })), RR.DW(fR.$e, (RR => {
          let {
            vehicleEId: JR,
            overrides: GR
          } = RR;
          (0, iR.e)().applyRiddenVehicleSettingOverrides(JR, GR)
        })), RR.DW(fR.Df, (RR => {
          let {
            yt: GR,
            tt: yR,
            ut: tR
          } = RR;
          const uR = JR.zC.aGR(JR.WH).physicsState.type === TR.k.SLEEPING && GR === TR.k.DEFAULT;
          (0, iR.e)().updatePositionAndPhysics(JR.WH, {
            type: GR,
            tier: yR
          }, !0, tR), uR && (0, iR.e)().updateHeldVehicleStatus()
        })), RR.DW(fR.kb, (RR => {
          let {
            ru: GR,
            eu: yR
          } = RR;
          JR.zC.oGR(JR.WH).setPose(GR, yR)
        })), RR.DW(fR.Le, (RR => {
          const {
            ZK: GR,
            eyR: yR
          } = (0, sR.h)([RR[0], RR[1], RR[2]]);
          tJ.e.setLookDirection(JR, GR, yR), (0, GJ.t)(GR, yR);
          const tR = JR.zC.oGR(JR.WH);
          tR && (tR.heading = GR)
        })), RR.DW(fR.Me, (RR => {
          GR.client.cameraController.setCameraZoom(RR)
        })), RR.DW(fR.ff, (RR => {
          let {
            Ry: yR,
            Jy: tR
          } = RR;
          GR.shakePlayerCamera(JR.WH, yR, tR)
        })), RR.DW(fR.vc, (RR => {
          JR.zC.oGR(JR.WH).jumpMultiplier.setMultiplierType("jumpEffectAmount", RR)
        })), (0, yR.onGameResetOnce)((() => {
          JR.zC.oGR(JR.WH).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), RR.DW(fR.H, (RR => {
          JR.zC.Lk(JR.WH).applyImpulse(RR)
        })), RR.DW(fR.cf, (RR => {
          const GR = JR.zC.Lk(JR.WH);
          RJ().set(GR.bY, 0, 0, 0), RJ().set(GR.vY, 0, 0, 0), RJ().copy(GR.BL, RR), GR.mY()
        })), (0, yR.onGameResetOnce)((() => {
          (0, yJ.setFloatingYValue)(JR.zC.getState(JR.WH, "physics"), JR.zC.f6(JR.WH), null)
        })), RR.DW(fR.Qb, (RR => {
          let {
            JZ: GR,
            GZ: yR,
            yZ: tR
          } = RR;
          const uR = (0, OR.d)(GR);
          if (uR === JR.WH) {
            const RR = JR.zC.f6(JR.WH).position;
            tR ??= Math.floor(RR[1]) - 1, (0, yJ.setFloatingYValue)(JR.zC.getState(JR.WH, "physics"), JR.zC.f6(JR.WH), yR ? tR : null)
          }(0, vR.c)(JR).setFloating(uR, yR, tR);
          const ZR = JR.zC.getState(uR, "floating");
          ZR && (ZR.isFloating = yR, ZR.yZ = yR ? tR : null)
        }))
      }
    }

    function ZJ(RR, JR, GR, yR, tR) {
      let uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!RR.zC.cGR(RR.WH)) return console.log("Got resync inven but don't have inven component"), void JR.acknowledge(yR);
      uR && console.error("Had to sync inven"), JR.fJR(yR, tR) && GR.JK("chestToggleFromServer", !1, !0), GR.JK("syncedInvenFromServer")
    }
    var qJ = GR(40256),
      iJ = GR(10285),
      fJ = GR(40258),
      VJ = GR(2167);
    var KJ = GR(5313);

    function wJ(RR) {
      const JR = RR.NK;
      let GR = 0,
        tR = -1,
        ZR = -1 / 0,
        qR = null,
        iR = !0;
      const VR = () => {
        if (++GR % 10 !== 0) return;
        const VR = (0, yR.getLastReceivedPacketId)();
        if (VR <= tR) return;
        const [KR, wR, rR] = RR.zC.vW(RR.WH), eR = ! function(RR) {
          var JR;
          let GR = null === (JR = RR.zC.nyR(RR.WH)) || void 0 === JR ? void 0 : JR.pe;
          if (void 0 === GR) return !1;
          const yR = new Set;
          for (; void 0 !== GR && !yR.has(GR);) {
            var tR;
            yR.add(GR);
            const JR = RR.zC.getState(GR, "smoothToServerPos"),
              uR = Array.isArray(JR) ? null : null === JR || void 0 === JR ? void 0 : JR.serverPosition;
            if (uR) {
              const JR = RR.zC.vW(GR);
              if (Math.abs(JR[0] - uR[0]) > 10 || Math.abs(JR[1] - uR[1]) > 10 || Math.abs(JR[2] - uR[2]) > 10) return !0
            }
            GR = null === (tR = RR.zC.nyR(GR)) || void 0 === tR ? void 0 : tR.pe
          }
          return !1
        }(RR) && function(RR, JR, GR, yR) {
          const tR = uR.g.LK;
          for (let uR = 0; uR < RR.length; uR++) {
            const ZR = RR[uR];
            if (!(0, KJ.h)(JR, GR, yR, ZR[0] * tR, ZR[1] * tR, ZR[2] * tR)) return !1
          }
          return !0
        }(JR.eL.qK, KR, wR, rR), aR = null === qR || Math.abs(KR - qR[0]) > 8 || Math.abs(wR - qR[1]) > 8 || Math.abs(rR - qR[2]) > 8, LR = !iR || aR || performance.now() - ZR >= 1e4;
        iR = eR, eR && LR && (tR = VR, ZR = performance.now(), qR = [KR, wR, rR], (0, yR.sendColyMessage)(fR.Cg, {
          cV: VR
        }))
      };
      return RR.on("gK", VR), () => {
        RR.off("gK", VR)
      }
    }
    var rJ = GR(40267),
      eJ = GR(1663),
      aJ = GR(3918),
      LJ = GR(2011),
      nJ = GR(4053),
      UJ = GR(5658);
    class WJ {
      constructor(RR, JR, GR) {
        this.xw = RR, this.gameNameWithVariation = JR, this.connectionResume = GR, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        UJ.d.reset(), (0, qJ.c)()
      }
      startChunkReports() {
        const RR = function(RR) {
            let JR = null,
              GR = -1 / 0,
              tR = null;
            const uR = () => {
                tR = null;
                const uR = Math.ceil(RR.FN[0]),
                  ZR = Math.ceil(RR.FN[1]);
                JR && JR[0] === uR && JR[1] === ZR || (JR = [uR, ZR], GR = performance.now(), (0, yR.sendColyMessage)(fR.Bg, {
                  Gi: uR,
                  yi: ZR
                }))
              },
              ZR = () => {
                null === tR && (tR = setTimeout(uR, Math.max(0, GR + 250 - performance.now())))
              };
            return uR(), RR.on("addRemoveDistanceChanged", ZR), () => {
              RR.off("addRemoveDistanceChanged", ZR), null !== tR && (clearTimeout(tR), tR = null)
            }
          }(this.xw.NK),
          JR = wJ(this.xw);
        this.stopChunkReports = () => {
          RR(), JR()
        }
      }
      restartChunkStreaming() {
        (0, GJ.j)(this.xw, (0, iR.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - rJ.e)), this.startChunkReports()
      }
      register(RR) {
        const JR = this.xw,
          GR = (0, iR.e)();
        RR.DW(fR.Sc, (RR => {
          UR.c.applyNewClientOptions(RR)
        })), RR.DW(fR.rd, (RR => {
          aJ.c.onReceiveColyseusPing(RR)
        })), RR.DW(fR.Oe, (RR => {
          let {
            key: JR,
            value: GR
          } = RR;
          (0, WR.setCookie)(this.gameNameWithVariation, JR, GR)
        })), RR.DW(fR.Re, (RR => {
          nR.n.JK("setDiscordReportKey", RR)
        })), (0, yR.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), RR.DW(fR.ic, (tR => {
          const {
            LJ: uR,
            nJ: ZR
          } = tR;
          if ((0, yR.setAdjustment)(ZR), this.connectionResume.onInitialInfo(tR.UJ, tR.WJ), yR.offlineInputReplay.JA(tR.AJ), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", uR);
            try {
              null === tR.CJ && (0, iR.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), gR(JR.NK), UR.c.apply({
                shopInfo: null,
                _shopVersion: VJ.e
              });
              const GR = JR.zC.IGR(JR.WH);
              GR.yG && (GR.chestClosed(), nR.n.JK("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), nR.n.JK("initInfoReceived", RR)
            } finally {
              const RR = null === tR.CJ ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = RR, this.connectionResume.onResumeInitialInfo(tR.CJ, (() => {
                RR.endSeq = (0, iR.e)().client.inventoryPrediction.lastActionSeq
              })), null === RR && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", uR), nR.n.JK("sessionReplayJoinTicket", tR.lJ), LJ.d.markAdmitted(), (0, GJ.k)(JR), nR.n.JK("loadingScreenState", "loadingPage:loadingWorld"), JR.UH = uR, JR.zC.RGR(JR.WH, JR.zC.names.entityName) && JR.zC.Zm(JR.WH, JR.zC.names.entityName), (0, iR.e)().setEntityName(JR.UH, (0, iR.e)().getRawEntityName(JR.WH)), JR.Qm[JR.UH] = {}, JR.zC.Jm(JR.WH, JR.zC.names.entityName), nR.n.JK("initInfoReceived", RR), this.startChunkReports(), GR.client.onServerConnectionFinalised()
        })), RR.DW(fR.Ae, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const RR = this.replayResume;
            if (this.replayResume = null, !RR) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: GR
            } = (0, iR.e)().client, {
              sync: tR
            } = RR, uR = new Set(yR.offlineInputReplay.takeDroppedActions());
            if (tR) {
              var ZR;
              const yR = null !== (ZR = RR.endSeq) && void 0 !== ZR ? ZR : GR.lastActionSeq;
              GR.forget((RR => RR > tR.iG && RR <= yR || uR.has(RR))), ZJ(JR, GR, nR.n, tR.iG, tR.load)
            } else GR.dropPending(), GR.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), RR.DW(fR.jf, (RR => {
          let {
            JG: GR,
            qG: yR,
            iG: tR
          } = RR;
          const {
            inventoryPrediction: uR
          } = (0, iR.e)().client, ZR = () => {
            JR.zC.IGR(JR.WH).loadFromString(GR)
          };
          this.replayResume && (this.replayResume.sync = {
            iG: tR,
            load: ZR
          }), ZJ(JR, uR, nR.n, tR, ZR, yR)
        })), RR.DW(fR.Ld, (RR => {
          let {
            type: JR,
            location1: GR,
            location2: yR,
            location3: tR,
            score: uR
          } = RR;
          (0, nJ.logProgressionEvent)({
            type: JR,
            location1: GR,
            location2: yR,
            location3: tR,
            score: uR
          })
        })), RR.DW(fR.xe, (RR => {
          let {
            type: JR,
            resourceType: GR,
            amount: yR,
            category: tR,
            itemName: uR
          } = RR;
          (0, nJ.logResourceEvent)({
            type: JR,
            resourceType: GR,
            amount: yR,
            category: tR,
            itemName: uR
          })
        })), RR.DW(fR.Ec, (RR => {
          let {
            leaveEventType: JR,
            category: GR,
            subCategory: yR,
            value: tR
          } = RR;
          (0, nJ.updateLeaveValue)({
            leaveEventType: JR,
            category: GR,
            subCategory: yR,
            value: tR
          })
        })), RR.DW(fR.Fb, (RR => {
          let {
            cat1: JR,
            cat2: GR,
            cat3: yR,
            value: tR
          } = RR;
          (0, nJ.logCustomAnalyticsEvent)({
            cat1: JR,
            cat2: GR,
            cat3: yR,
            value: tR
          })
        })), RR.DW(fR.yc, (RR => {
          (0, iR.e)().client.leaveGameUnwanted({
            reason: (0, iJ.b)(RR),
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, eJ.navigatePreserveSearch)("/")
        })), RR.DW(fR.He, (RR => {
          nR.n.JK("serverUpdating", Date.now() + RR, !0)
        })), RR.DW(fR.Rc, fJ.d), RR.DW(fR.Kc, (RR => {
          console.error(`[logErrorToConsole]: ${RR}`)
        }))
      }
    }
    var AJ = GR(40270),
      CJ = GR(40283),
      XJ = GR(1127),
      MJ = GR(40276),
      BJ = GR(3452),
      lJ = GR(4983);
    class pJ {
      constructor(RR, JR) {
        this.xw = RR, this.clientApi = JR
      }
      register(RR) {
        const JR = this.xw,
          GR = (0, iR.e)();
        RR.DW(fR.nb, (RR => {
          let {
            chatMsgId: JR,
            worldCodeLineId: GR,
            content: yR,
            chatterEId: tR,
            chatterObjectsToReplay: uR
          } = RR;
          nR.n.JK("chat", {
            serverChatMsgId: JR,
            worldCodeLineId: GR,
            content: yR,
            chatterEId: tR,
            chatterObjectsToReplay: uR
          }, !0)
        })), RR.DW(fR.mb, (RR => {
          let {
            chatMsgId: JR
          } = RR;
          nR.n.JK("chatRemoved", JR, !0)
        })), RR.DW(fR.sf, (RR => {
          nR.n.JK("TopRightHelper", RR, !0)
        })), RR.DW(fR.lf, (RR => {
          (0, AJ.e)(RR)
        })), RR.DW(fR.Cc, (RR => {
          let {
            category: JR,
            timeframe: GR,
            data: yR
          } = RR;
          nR.n.JK("leaderboardResponse", {
            category: JR,
            timeframe: GR,
            data: yR
          })
        })), RR.DW(fR.if, (() => {
          nR.n.JK("showShopTutorial", null, !0)
        })), RR.DW(fR.Jd, (RR => {
          nR.n.JK("progressBarUpdate", RR, !0)
        })), RR.DW(fR.jc, (RR => {
          nR.n.JK("middleScreenBarInitiate", {
            duration: RR.Wu,
            Au: RR.Au,
            horizBarRemOffset: RR.Cu
          }, !0)
        })), RR.DW(fR.ae, (() => {
          nR.n.JK("middleScreenBarRemove", !0)
        })), RR.DW(fR.Pe, (RR => {
          let {
            id: JR,
            position: GR,
            style: yR,
            dJ: tR,
            QJ: uR
          } = RR;
          nR.n.JK("setDirectionArrow", {
            id: JR,
            position: GR,
            style: yR,
            text: (0, fR.r)(tR),
            QJ: uR
          }, !0)
        })), RR.DW(fR.wb, (RR => {
          let {
            id: JR
          } = RR;
          nR.n.JK("clearDirectionArrow", {
            id: JR
          }, !0)
        })), RR.DW(fR.Db, (RR => {
          (0, lJ.onCosmeticPackGranted)(RR)
        })), RR.DW(fR.bd, (RR => {
          let {
            id: JR,
            Xu: GR
          } = RR;
          const {
            type: tR,
            params: uR
          } = (0, CJ.g)(GR), ZR = {
            ...uR
          };
          for (const yR of CJ.e) yR in ZR && ZR[yR] && (ZR[yR] = (0, fR.r)(ZR[yR]));
          UJ.d.queueQTE(JR, tR, ZR).getResult().then((RR => {
            "boolean" === typeof RR && (0, yR.sendColyMessage)(fR.Ai, {
              qteId: JR,
              qteResponse: RR
            })
          }))
        })), RR.DW(fR.ee, (RR => {
          UJ.d.cancelQTE(RR)
        })), (0, yR.onGameResetOnce)((() => {
          UJ.d.reset()
        })), RR.DW(fR.fd, (RR => {
          let {
            id: JR,
            clientParameters: GR
          } = RR;
          (0, qJ.f)(JR, GR)
        })), RR.DW(fR.ge, (RR => {
          (0, qJ.g)(RR)
        })), RR.DW(fR.yf, (RR => {
          let {
            text: JR,
            id: GR,
            destructive: tR
          } = RR;
          (0, qJ.i)(GR, JR, tR, (RR => {
            (0, yR.sendColyMessage)(fR.Uj, {
              XZ: GR,
              MZ: RR,
              BZ: 5
            })
          }))
        })), RR.DW(fR.kd, (RR => {
          let {
            info: JR
          } = RR;
          nR.n.JK("overShopInfo", JR, !0)
        })), RR.DW(fR.Yb, (RR => {
          let {
            vJ: GR,
            OJ: yR
          } = RR;
          this.clientApi.openShop(JR.WH, GR, yR)
        })), RR.DW(fR.Wb, (RR => {
          let {
            su: JR,
            hu: GR,
            RZ: yR
          } = RR;
          nR.n.JK("flyingMiddleMessage", {
            content: (0, fR.r)(JR),
            hu: GR,
            RZ: yR
          }, !0)
        })), RR.DW(fR.Lf, (RR => {
          const JR = RR === XJ.i ? null : {
            message: `Currently loaded as variation: ${RR}`,
            type: "Warning"
          };
          nR.n.JK("showPermanentBottomMessage", JR, !0)
        })), RR.DW(fR.Zb, (RR => {
          let {
            messageType: JR,
            data: yR
          } = RR;
          (0, MJ.g)(JR) ? (0, MJ.c)(JR, yR) : ("freeCamPerms" === JR && GR.client.freeCameraController.setPerms(yR.key, yR.value), GR.client.triggerGameCallback("onReceivedMessageFromServer", JR, yR))
        })), RR.DW(fR.Bb, BJ.m)
      }
    }
    class gJ {
      constructor(RR, JR, GR, yR) {
        this.gameNameWithVariation = RR, this.xw = GR, this.connectionResume = yR, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new CR.b(JR, this.xw)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, yR.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      QVR(RR) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new CR.b(RR, this.xw), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(RR, JR) {
        const GR = this.xw,
          yR = RR => {
            this.stateReplicationHandler.setUpIfQueued(RR)
          };
        new WJ(GR, this.gameNameWithVariation, this.connectionResume).register(RR), new bR(GR).register(RR), new FR(GR).register(RR), new HR(GR, yR).register(RR), new YR(GR, yR).register(RR), new pJ(GR, JR).register(RR), new uJ(GR, yR).register(RR)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var bJ = GR(40285),
      vJ = GR(40288),
      OJ = GR(726),
      xJ = GR(1972);
    class NJ {
      constructor(RR, JR, GR, yR) {
        this.msgHandler = GR, this.listener = yR, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new bJ.c({
          reconnect: RR,
          isLive: () => yR.isLive(),
          onReconnected: RR => {
            this.resumeOnRoom(RR)
          },
          onGaveUp: (RR, JR) => {
            yR.onGaveUp(RR, JR)
          },
          freeze: JR,
          releaseSeat: JR => {
            RR(JR).then((RR => {
              RR.leave(!0)
            }), (RR => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", RR)
            }))
          }
        })
      }
      onInitialInfo(RR, JR) {
        this.session.onInitialInfo(RR, JR)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(RR, JR) {
        if (this.session.onResuming(), null === RR) {
          try {
            (0, iR.e)().client.itemDropPrediction.reset()
          } catch (GR) {
            console.error("Error dropping the item drop predictions on resuming", GR)
          }
          return yR.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, iR.e)().client.itemDropPrediction.onResumeReplayOffered(), yR.offlineInputReplay.replayFrom(RR.MJ, JR)
      }
      onResumed(RR) {
        this.setSuspended(!1), (0, yR.resendBeacons)();
        try {
          RR()
        } catch (JR) {
          console.error("Error completing the resume", JR)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(RR) {
        const JR = (0, OJ.onVisitSessionGameServerConnected)((() => RR.connection.isOpen));
        RR.oW(JR);
        const GR = new vJ.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(RR, "silent"), RR.leave(!1))
        }));
        RR.onStateChange((() => {
          GR.heard()
        }));
        const yR = JR => {
          JR.persisted || RR.leave(!0)
        };
        window.addEventListener("pagehide", yR), RR.oW(((JR, GR) => {
          if (RR === this.attachedRoom && this.listener.isLive()) return (0, uR.i)(JR) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${JR}, reconnecting`), this.listener.onDropped(JR, GR), void this.onConnectionDropped(RR, String(JR))) : void this.listener.onRoomLeft(JR, GR)
        })), this.attachedRoom = RR, this.detachRoomListeners = () => {
          JR(), GR.dispose(), window.removeEventListener("pagehide", yR)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(RR) {
        RR !== this.suspended && (this.suspended = RR, (0, yR.setConnectionSuspended)(RR), (0, iR.e)().client.itemDropPrediction.setSuspended(RR))
      }
      detachRoom() {
        var RR;
        null === (RR = this.detachRoomListeners) || void 0 === RR || RR.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(RR, JR) {
        (0, xJ.reportClientError)("disconnect", "Left room", JR), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), yR.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(RR.reconnectionToken)
      }
      resumeOnRoom(RR) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), RR.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, ER.p)(), yR.offlineInputReplay.onConnectionReplaced(), this.msgHandler.QVR(RR), this.listener.onReconnected(RR), this.attachRoom(RR)
      }
    }
    var DJ = GR(2513),
      HJ = GR(2521),
      oJ = GR(1449),
      cJ = GR(1397),
      PJ = GR(5536),
      IJ = GR(4422),
      mJ = GR(1406),
      zJ = GR(38884),
      SJ = GR(40295),
      jJ = GR(10298),
      dJ = GR(40304),
      EJ = GR(1295),
      YJ = GR(37640),
      kJ = GR(40310),
      QJ = GR(1921),
      FJ = GR(3921),
      TJ = GR(1647);

    function sJ(RR) {
      var JR, GR;
      if ("object" !== typeof RR || null === RR) return {
        errType: typeof RR
      };
      const yR = RR;
      return {
        errType: null !== (JR = null === (GR = RR.constructor) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : "",
        errName: "string" === typeof yR.name ? yR.name : "",
        eventType: "string" === typeof yR.type ? yR.type : "",
        errStack: "string" === typeof yR.stack ? yR.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function hJ(RR) {
      if ("undefined" !== typeof ProgressEvent && RR instanceof ProgressEvent) return !0;
      if (!(RR instanceof Error)) return !1;
      const JR = RR.code;
      return "ServerError" === RR.name && void 0 === JR || "AbortError" === RR.name || "seat reservation expired." === RR.message || "early_leave" === RR.message
    }(0, aR.o)((RR => {
      (0, xJ.reportClientError)("wasm_net", RR)
    }));
    let RG = !0;

    function JG() {
      RG = !1
    }
    class GG {
      constructor(RR) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.xw = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = RR.gameNameWithVariation, this.lobbyName = RR.lobbyName, this.colyClient = RR.colyClient, this.userContext = RR.userContext
      }
      async connectToServer(RR, JR, GR) {
        UR.c.reset(), RR.Qm = {
          [RR.WH]: {}
        }, RR.UH = void 0, (0, ER.p)(), (0, iR.e)().removeAllEntityNames(), (0, iR.e)().setEntityName(RR.WH, this.userContext.getPlayerName()), (0, oJ.s)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, QJ.e)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const ZR = performance.now();
        GR.aborted || (0, cJ.y)("wasm_core_ready", ZR);
        const qR = (0, dJ.f)(this.userContext, (() => {
          const {
            roomName: yR,
            joinOptions: tR
          } = (0, AR.g)(this.userContext, this.gameNameWithVariation, this.lobbyName, JR, (RR => IJ.b.isUsingCustomGameTexturePack(RR)));
          return tR.joinAdHold = this.joinAdHold, tR.renderBackend = (0, FJ.d)(RR.lK), (0, SJ.h)((() => this.colyClient.joinOrCreateUntil(GR, yR, tR)), GR)
        }));
        return nR.n.JK("loadingScreenState", "loadingPage:joiningLobby"), await qR.then((JR => {
          if (this.joinedAt = performance.now(), (0, cJ.y)("wasm_joined", this.joinedAt), this.xw = RR, this.joinAdHold) {
            const RR = (0, QJ.o)((() => {
              JR.send(tR.g), (0, cJ.u)(), LJ.d.markJoinAdEnded()
            }));
            JR.oW(RR), (0, yR.onGameResetOnce)(RR)
          }
          const GR = new LR(JR);
          this.connectionResume = new NJ((RR => this.colyClient.reconnect(RR)), (JR => {
            RR.kN(JR)
          }), GR, {
            isLive: () => (0, iR.e)().client.getMsgHandler() === GR,
            onDropped: (RR, JR) => {
              (0, HJ.g)(RR) || this.logUnrecognisedConnectionLoss(RR, void 0, {
                site: "drop",
                closeReason: null !== JR && void 0 !== JR ? JR : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (RR, JR) => {
              this.onRoomLeft(RR, JR)
            },
            onReconnected: RR => {
              this.incomingMsgInitialisor.QVR(RR), this.checkSendPath = (0, zJ.f)(GR, RR, aR.q)
            },
            onGaveUp: (RR, JR) => {
              this.onResumeGaveUp(RR, JR)
            }
          }), this.connectionResume.attachRoom(JR), (0, yR.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const uR = GR.send,
            ZR = GR.DW,
            qR = GR.cyR.send,
            fR = GR.cyR.DW,
            VR = GR.YVR;
          this.checkSendPath = (0, zJ.f)(GR, JR, aR.q);
          const KR = setInterval((() => {
            uR === GR.send && ZR === GR.DW && qR === GR.cyR.send && fR === GR.cyR.DW && VR === GR.YVR || JG(), this.checkSendPath()
          }), 1e4);
          return (0, yR.onGameResetOnce)((() => {
            clearInterval(KR)
          })), {
            success: !0,
            successDetails: GR
          }
        })).catch((JR => {
          if (GR.aborted && JR === (0, EJ.g)(GR)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (JR instanceof YJ.g) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: JR.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, kJ.c)(JR, JR.leg)
            }
          };
          RR.Ia(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${JR.code}\n`, JR);
          const yR = JR.code;
          return yR === uR.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: uR.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(yR, JR.message, {
                site: "join",
                sinceJoinStart: (0, HJ.c)(performance.now() - ZR),
                ...sJ(JR)
              }, hJ(JR)),
              rematch: (0, SJ.e)(JR),
              gameRefused: (0, jJ.d)(JR),
              joinFailure: (0, kJ.c)(JR, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(RR, JR, GR) {
        nR.n.JK("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new gJ(this.gameNameWithVariation, JR.cyR, RR, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const tR = JR.hVR();
        this.incomingMsgInitialisor.setupOnMessageListeners(tR, GR), (0, yR.onConnectionToServerReady)(tR, JR), this.joinAdHold && LJ.d.markAdmissionAwaited(), tR.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(RR, JR) {
        (0, mJ.ma)(new Error("Reconnect failed"), {
          ...(0, DJ.q)(JR),
          game: this.gameNameWithVariation
        }), (0, xJ.reportClientError)("disconnect", "Reconnect failed", JR.reason), (0, iR.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !RR,
          canPlayAgain: RR,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, eJ.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, HJ.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(RR, JR) {
        var GR;
        if (RR === uR.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${RR}`), RR === uR.e.serverUpdating.code) return (0, xJ.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, iR.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.xw.Ia(`Kicked from server with code ${RR}`, new Error);
        const yR = Object.keys(uR.e).find((JR => uR.e[JR].code === RR));
        (0, xJ.reportClientError)("disconnect", "Left room", null !== yR && void 0 !== yR ? yR : String(RR)), TJ.c.leftGame(this.gameNameWithVariation, RR);
        const tR = this.onConnectionToServerLost(RR, void 0, {
          site: "leave",
          closeReason: null !== JR && void 0 !== JR ? JR : "",
          sinceJoined: this.sinceJoined()
        });
        (0, iR.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${tR.reason}`,
          canReconnect: tR.canReconnect,
          requiresRefresh: tR.requiresRefresh,
          automaticallyReconnect: null !== (GR = tR.automaticallyReconnect) && void 0 !== GR && GR
        }), (0, eJ.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, PJ.D)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, eJ.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(RR, JR, GR) {
        var yR;
        let tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (yR = JR) && void 0 !== yR && yR.endsWith(uR.k) && (this.userContext.invalidateTrafficCode(), JR = JR.replace(uR.k, "")), RR === uR.e.outdatedVersion.code) return console.error("Outdated client with version ", ZR.d, ", refreshing page"), (0, WR.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (RR === uR.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, WR.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const ZR in uR.e) {
          const {
            code: GR,
            text: yR,
            canReconnect: tR
          } = uR.e[ZR];
          if (GR === RR) {
            console.log("matched known error", RR, "leaving game");
            return {
              reason: "" !== yR ? yR : JR || `Code: ${RR}`,
              requiresRefresh: !1,
              canReconnect: tR,
              automaticallyReconnect: GR === uR.e.customGameUpdated.code || GR === uR.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, HJ.f)(RR) || tR ? console.warn("Connection lost", RR, JR) : this.logUnrecognisedConnectionLoss(RR, JR, GR), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${RR}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: tR ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(RR, JR, GR) {
        (0, mJ.ma)(new Error("Unrecognised connection loss"), {
          code: String(RR),
          cause: null !== JR && void 0 !== JR ? JR : "",
          ...GR,
          game: this.gameNameWithVariation,
          ...(0, HJ.j)()
        })
      }
    }
  },
  40209: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => YG,
      f: () => hG
    });
    var yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR, NR, DR, HR, oR, cR, PR, IR, mR, zR, SR, jR, dR, ER, YR, kR, QR, FR, TR, sR, hR, RJ, JJ, GJ, yJ, tJ, uJ, ZJ, qJ, iJ, fJ, VJ, KJ, wJ, rJ, eJ, aJ, LJ, nJ, UJ, WJ, AJ, CJ, XJ, MJ, BJ, lJ, pJ, gJ, bJ, vJ, OJ, xJ, NJ, DJ, HJ, oJ, cJ, PJ, IJ, mJ, zJ, SJ, jJ, dJ, EJ, YJ, kJ, QJ, FJ, TJ, sJ = GR(32),
      hJ = GR(38267),
      RG = GR(40223),
      JG = GR(40231),
      GG = GR(10496),
      yG = GR(671),
      tG = GR(664),
      uG = GR(37534);
    let ZG = (yR = (0, GG.type)("number"), tR = (0, GG.type)("number"), uR = (0, GG.type)("number"), ZR = (0, GG.type)("number"), qR = (0, GG.type)("number"), iR = (0, GG.type)("number"), fR = (0, GG.type)("string"), VR = class extends GG.Schema {
        constructor() {
          super(...arguments), (0, RG.b)(this, "id", KR, this), (0, RG.b)(this, "amount", wR, this), (0, RG.b)(this, "x", rR, this), (0, RG.b)(this, "y", eR, this), (0, RG.b)(this, "z", aR, this), (0, RG.b)(this, "size", LR, this), (0, RG.b)(this, "attributes", nR, this)
        }
      }, KR = (0, JG.b)(VR.prototype, "id", [yR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wR = (0, JG.b)(VR.prototype, "amount", [tR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rR = (0, JG.b)(VR.prototype, "x", [uR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eR = (0, JG.b)(VR.prototype, "y", [ZR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aR = (0, JG.b)(VR.prototype, "z", [qR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LR = (0, JG.b)(VR.prototype, "size", [iR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), nR = (0, JG.b)(VR.prototype, "attributes", [fR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), VR),
      qG = (UR = (0, GG.type)("string"), WR = (0, GG.type)("string"), AR = class extends GG.Schema {
        constructor() {
          super(...arguments), (0, RG.b)(this, "itemName", CR, this), (0, RG.b)(this, "enchantmentTier", XR, this)
        }
      }, CR = (0, JG.b)(AR.prototype, "itemName", [UR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), XR = (0, JG.b)(AR.prototype, "enchantmentTier", [WR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), AR),
      iG = (MR = (0, GG.type)("string"), BR = (0, GG.type)("string"), lR = (0, GG.type)("number"), pR = (0, GG.type)("number"), gR = (0, GG.type)("number"), bR = (0, GG.type)("float32"), vR = (0, GG.type)("float32"), OR = (0, GG.type)("float32"), xR = (0, GG.type)("string"), NR = (0, GG.type)(["number"]), DR = (0, GG.type)("boolean"), HR = class extends GG.Schema {
        constructor() {
          super(...arguments), (0, RG.b)(this, "type", oR, this), (0, RG.b)(this, "name", cR, this), (0, RG.b)(this, "x", PR, this), (0, RG.b)(this, "y", IR, this), (0, RG.b)(this, "z", mR, this), (0, RG.b)(this, "xRotation", zR, this), (0, RG.b)(this, "yRotation", SR, this), (0, RG.b)(this, "zRotation", jR, this), (0, RG.b)(this, "followingEId", dR, this), (0, RG.b)(this, "followingOffset", ER, this), (0, RG.b)(this, "shouldMatchFollowingEntityRotation", YR, this)
        }
      }, oR = (0, JG.b)(HR.prototype, "type", [MR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), cR = (0, JG.b)(HR.prototype, "name", [BR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), PR = (0, JG.b)(HR.prototype, "x", [lR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), IR = (0, JG.b)(HR.prototype, "y", [pR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mR = (0, JG.b)(HR.prototype, "z", [gR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), zR = (0, JG.b)(HR.prototype, "xRotation", [bR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), SR = (0, JG.b)(HR.prototype, "yRotation", [vR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jR = (0, JG.b)(HR.prototype, "zRotation", [OR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dR = (0, JG.b)(HR.prototype, "followingEId", [xR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ER = (0, JG.b)(HR.prototype, "followingOffset", [NR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new GG.ArraySchema(0, 0, 0)
        }
      }), YR = (0, JG.b)(HR.prototype, "shouldMatchFollowingEntityRotation", [DR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), HR),
      fG = (kR = (0, GG.type)("float32"), QR = (0, GG.type)("float32"), FR = (0, GG.type)("boolean"), TR = (0, GG.type)("boolean"), sR = (0, GG.type)("float32"), hR = (0, GG.type)("boolean"), RJ = (0, GG.type)("string"), JJ = (0, GG.type)("string"), GJ = (0, GG.type)("string"), yJ = (0, GG.type)("string"), tJ = (0, GG.type)(["number"]), uJ = (0, GG.type)("number"), ZJ = (0, GG.type)({
        map: qG
      }), qJ = class extends iG {
        constructor() {
          super(...arguments), (0, RG.b)(this, "scale", iJ, this), (0, RG.b)(this, "speed", fJ, this), (0, RG.b)(this, "jumping", VJ, this), (0, RG.b)(this, "crouching", KJ, this), (0, RG.b)(this, "cameraPitch", wJ, this), (0, RG.b)(this, "armSwinging", rJ, this), (0, RG.b)(this, "heldItemName", eJ, this), (0, RG.b)(this, "heldItemEnchantmentTier", aJ, this), (0, RG.b)(this, "pose", LJ, this), (0, RG.b)(this, "ridingVehicleEId", nJ, this), (0, RG.b)(this, "meshOffset", UJ, this), (0, RG.b)(this, "baseRenderHeading", WJ, this), (0, RG.b)(this, "armour", AJ, this)
        }
      }, iJ = (0, JG.b)(qJ.prototype, "scale", [kR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), fJ = (0, JG.b)(qJ.prototype, "speed", [QR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), VJ = (0, JG.b)(qJ.prototype, "jumping", [FR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), KJ = (0, JG.b)(qJ.prototype, "crouching", [TR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), wJ = (0, JG.b)(qJ.prototype, "cameraPitch", [sR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rJ = (0, JG.b)(qJ.prototype, "armSwinging", [hR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), eJ = (0, JG.b)(qJ.prototype, "heldItemName", [RJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), aJ = (0, JG.b)(qJ.prototype, "heldItemEnchantmentTier", [JJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), LJ = (0, JG.b)(qJ.prototype, "pose", [GJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), nJ = (0, JG.b)(qJ.prototype, "ridingVehicleEId", [yJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), UJ = (0, JG.b)(qJ.prototype, "meshOffset", [tJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new GG.ArraySchema(0, 0, 0)
        }
      }), WJ = (0, JG.b)(qJ.prototype, "baseRenderHeading", [uJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), AJ = (0, JG.b)(qJ.prototype, "armour", [ZJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new GG.MapSchema
        }
      }), qJ),
      VG = (CJ = (0, GG.type)("string"), XJ = (0, GG.type)("string"), MJ = (0, GG.type)("string"), BJ = (0, GG.type)("uint8"), lJ = class extends fG {
        constructor() {
          super(...arguments), (0, RG.b)(this, "variation", pJ, this), (0, RG.b)(this, "ownerDbId", gJ, this), (0, RG.b)(this, "metaInfo", bJ, this), (0, RG.b)(this, "aiState", vJ, this)
        }
      }, pJ = (0, JG.b)(lJ.prototype, "variation", [CJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), gJ = (0, JG.b)(lJ.prototype, "ownerDbId", [XJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), bJ = (0, JG.b)(lJ.prototype, "metaInfo", [MJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), vJ = (0, JG.b)(lJ.prototype, "aiState", [BJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lJ);
    OJ = (0, GG.type)("string"), xJ = (0, GG.type)("string"), NJ = (0, GG.type)("string"), DJ = (0, GG.type)("string"), HJ = class extends iG {
      constructor() {
        super(...arguments), (0, RG.b)(this, "meshKind", oJ, this), (0, RG.b)(this, "meshOpts", cJ, this), (0, RG.b)(this, "pose", PJ, this), (0, RG.b)(this, "leaderboardTop", IJ, this)
      }
    }, oJ = (0, JG.b)(HJ.prototype, "meshKind", [OJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), cJ = (0, JG.b)(HJ.prototype, "meshOpts", [xJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), PJ = (0, JG.b)(HJ.prototype, "pose", [NJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), IJ = (0, JG.b)(HJ.prototype, "leaderboardTop", [DJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function KG(RR) {
      return Object.keys(GG.Metadata.getFields(RR))
    }
    const wG = KG(VG);
    for (const Ry of yG.t)
      if (!wG.includes(Ry)) throw new Error(`Mob Schema is missing a networked property: "${Ry}"`);
    const rG = KG((mJ = (0, GG.type)("string"), zJ = (0, GG.type)("float32"), SJ = (0, GG.type)("float32"), jJ = (0, GG.type)("float32"), dJ = (0, GG.type)("float32"), EJ = class extends iG {
      constructor() {
        super(...arguments), (0, RG.b)(this, "soundName", YJ, this), (0, RG.b)(this, "volume", kJ, this), (0, RG.b)(this, "refDistance", QJ, this), (0, RG.b)(this, "maxHearDist", FJ, this), (0, RG.b)(this, "rate", TJ, this)
      }
    }, YJ = (0, JG.b)(EJ.prototype, "soundName", [mJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), kJ = (0, JG.b)(EJ.prototype, "volume", [zJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), QJ = (0, JG.b)(EJ.prototype, "refDistance", [SJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return uG.f
      }
    }), FJ = (0, JG.b)(EJ.prototype, "maxHearDist", [jJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return uG.c
      }
    }), TJ = (0, JG.b)(EJ.prototype, "rate", [dJ], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), EJ));
    for (const Ry of tG.h)
      if (!rG.includes(Ry)) throw new Error(`AudioEntity Schema is missing a replicated property: "${Ry}"`);
    var eG = GR(39598),
      aG = GR(1336),
      LG = GR(679),
      nG = GR(39368),
      UG = GR(3017),
      WG = GR(377),
      AG = GR(38329),
      CG = GR(39256),
      XG = GR(3178),
      MG = GR(38296),
      BG = GR(39627),
      lG = GR(38771),
      pG = GR(385),
      gG = GR.n(pG),
      bG = GR(39109),
      vG = GR(38181),
      OG = GR(39235),
      xG = GR(39270);
    class NG {
      constructor(RR, JR) {
        this.bloxd = RR, this.eId = JR, this.xw = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.He = !1, this.xw = RR.xw
      }
      initClient(RR) {
        var JR, GR, yR;
        this.colyseusEntity = RR, this.meshKind = RR.meshKind, this.meshOpts = RR.meshOpts, this.leaderboardTop = RR.leaderboardTop, this.xw.zC.add([RR.x, RR.y, RR.z], 1, 1, null, null, !1, !1, this.eId), this.xw.zC.Jm(this.eId, "smoothToServerPos");
        const tR = "Person" === this.meshKind;
        this.xw.zC.Jm(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...tR ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: tR ? [{
            nodeName: "HeadMesh",
            softTolerance: BG.i,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = sJ.n.subscribe(`otherEntitySettings|${this.eId}|canSee`, (RR => {
          this.updateHidingMeshMgr()
        }));
        const uR = () => {
          const RR = this.xw.zC.vGR(this.eId);
          if (!RR) return;
          const JR = (0, lG.h)(this.eId);
          if ("number" === typeof RR.JI) {
            var GR, yR, tR, uR;
            const ZR = null === (GR = (0, XG.m)("head", null === (tR = this.getSpec()) || void 0 === tR || null === (uR = tR.opts.textures) || void 0 === uR ? void 0 : uR.head)) || void 0 === GR || null === (yR = GR.personModel) || void 0 === yR ? void 0 : yR.fullBody;
            return this.xw.lK.RP.setPickable(RR.JI, JR && !ZR), void(0, vG.updatePersonAttachmentPickability)(this.xw, this.eId, JR)
          }
          const ZR = RR.mesh;
          if (ZR)
            for (const qR of [ZR, ...ZR.getChildMeshes(!1)]) "ZL" in qR && !qR.name.startsWith("Cape|") && (qR.ZL = JR)
        };
        this.canAttackSub = sJ.n.subscribe(`otherEntitySettings|${this.eId}|canAttack`, uR), this.interactableSub = sJ.n.subscribe(`otherEntitySettings|${this.eId}|interactable`, uR), this.overlayColourSub = sJ.n.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (RR => {
          this.updateOverlayColour(RR)
        })), this.opacitySub = sJ.n.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (RR => {
          this.updateOpacity(RR)
        })), this.zIndexSub = sJ.n.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (RR => {
          this.updateZIndex(RR)
        }));
        const ZR = this.xw.Qm[this.xw.WH][this.eId];
        this.updateOverlayColour(null !== (JR = null === ZR || void 0 === ZR ? void 0 : ZR.overlayColour) && void 0 !== JR ? JR : null), this.updateOpacity(null !== (GR = null === ZR || void 0 === ZR ? void 0 : ZR.opacity) && void 0 !== GR ? GR : 1), this.updateZIndex(null !== (yR = null === ZR || void 0 === ZR ? void 0 : ZR.zIndex) && void 0 !== yR ? yR : 0), this.multilineTextBoxSub = (0, MG.q)(this.xw, this.eId)
      }
      onChangeClient(RR, JR) {
        if ("xRotation" === RR || "yRotation" === RR || "zRotation" === RR)(0, MG.r)(this.xw, this.eId, RR, JR);
        else if ("pose" === RR) {
          const RR = this.xw.zC.oGR(this.eId);
          RR && (RR.pose = JR || "standing")
        } else "meshKind" === RR || "meshOpts" === RR ? (this[RR] = JR, this.queueMeshRebuild()) : "name" === RR && "" !== JR ? this.updateHidingMeshMgr() : "leaderboardTop" === RR && (this.leaderboardTop = JR, sJ.n.JK(`leaderboardTop|${this.eId}`, JR))
      }
      disposeClient() {
        this.He = !0, this.xw.zC.deleteEntity(this.eId), sJ.n.unsubscribe(this.canSeeSub), sJ.n.unsubscribe(this.canAttackSub), sJ.n.unsubscribe(this.interactableSub), sJ.n.unsubscribe(this.overlayColourSub), sJ.n.unsubscribe(this.opacitySub), sJ.n.unsubscribe(this.zIndexSub), sJ.n.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var RR, JR;
        return {
          canSee: null !== (RR = null === (JR = this.xw.Qm[this.xw.WH][this.eId]) || void 0 === JR ? void 0 : JR.canSee) && void 0 !== RR && RR,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var RR, JR, GR;
        const {
          xw: yR
        } = this, {
          zC: tR
        } = yR, uR = this.getCurrentHidingMeshMgrState();
        if ((0, WG.fe)(this.previousHidingMeshManagerState, uR)) return;
        if (this.previousHidingMeshManagerState = uR, tR.Zm(this.eId, "hidingMeshManager"), null === (RR = yR.Qm[yR.WH][this.eId]) || void 0 === RR || !RR.canSee) return;
        const ZR = this.getSpec();
        if (!ZR) return;
        const {
          type: qR,
          opts: iR
        } = ZR;
        "Person" === qR && (iR.textures = (0, XG.u)(iR.textures)), iR.eId = this.eId, tR.Jm(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var RR, JR, GR;
            "Leaderboard" === qR && (iR.leaderboardTop = this.leaderboardTop);
            const uR = this.bloxd.client.meshCreator.getEntityMesh(qR, iR, (RR => {
              var JR, GR;
              if ("number" === typeof RR) {
                var tR, uR, ZR;
                const JR = yR.lK.RP;
                JR.setEntityId(RR, this.eId);
                const GR = "Person" === qR && (null === (tR = (0, XG.m)("head", null === (ZR = iR.textures) || void 0 === ZR ? void 0 : ZR.head)) || void 0 === tR || null === (uR = tR.personModel) || void 0 === uR ? void 0 : uR.fullBody);
                return void JR.setPickable(RR, (0, lG.h)(this.eId) && !GR)
              }
              const fR = RR;
              for (const qR of [fR, ...fR.getChildMeshes(!1)]) void 0 === qR.ZL || qR.name.startsWith("Cape|") || (qR.ZL = (0, lG.h)(this.eId), qR.metadata ??= new yR.lK.qL, qR.metadata.eId = this.eId);
              this.updateOpacity(null !== (JR = null === (GR = yR.Qm[yR.WH][this.eId]) || void 0 === GR ? void 0 : GR.opacity) && void 0 !== JR ? JR : 1)
            }));
            if (!uR) return;
            const {
              JI: ZR,
              mesh: fR,
              meshOffset: VR,
              nameYOffset: KR,
              modelLoaded: wR
            } = uR;
            null === wR || void 0 === wR || wR.then((() => {
              var RR;
              (null === (RR = tR.vGR(this.eId)) || void 0 === RR ? void 0 : RR.mesh) === fR && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const rR = null === ZR ? null : yR.lK.RP.JtR(ZR, 0);
            if (tR.Jm(this.eId, tR.names.mesh, {
                JI: ZR,
                SyR: rR,
                mesh: fR,
                niR: !1,
                UiR: "Leaderboard" !== qR,
                offset: VR.slice(),
                LiR: "ParticleEmitter" === qR && iR.followTargetMeshOffset ? RR => {
                  var JR;
                  gG().copy(RR, VR);
                  const GR = null === (JR = tR.nyR(this.eId)) || void 0 === JR ? void 0 : JR.pe,
                    yR = void 0 === GR ? null : tR.oGR(GR);
                  if (yR) {
                    var uR, ZR;
                    const JR = this.bloxd.getEntityHeading(null !== (uR = yR.ridingVehicleEId) && void 0 !== uR ? uR : GR, !0),
                      tR = Math.sin(JR),
                      qR = Math.cos(JR);
                    RR[0] += yR.meshOffset[0] * qR + yR.meshOffset[2] * tR, RR[1] += yR.meshOffset[1], RR[2] += yR.meshOffset[2] * qR - yR.meshOffset[0] * tR;
                    const iR = null !== (ZR = yR.ridingVehicleEId) && void 0 !== ZR ? ZR : null;
                    null !== iR && (0, xG.d)(this.xw, iR, RR)
                  }
                } : null
              }), "Person" === qR) {
              var eR, aR, LR, nR;
              tR.Jm(this.eId, tR.names.meshAttachments, {
                personFullBody: null !== (eR = null === (aR = (0, XG.m)("head", null === (nR = iR.textures) || void 0 === nR ? void 0 : nR.head)) || void 0 === aR || null === (LR = aR.personModel) || void 0 === LR ? void 0 : LR.fullBody) && void 0 !== eR && eR
              });
              for (const RR of aG.w) {
                var UR, WR, AR;
                const JR = null === (UR = iR.textures) || void 0 === UR ? void 0 : UR[RR];
                JR && null !== (WR = (0, XG.m)(RR, JR)) && void 0 !== WR && null !== (AR = WR.attachments) && void 0 !== AR && AR.length && CG.b.Player.meshApi.updatePlayerCosmetic(this.eId, ZR, RR, JR)
              }
              tR.Jm(this.eId, tR.names.moveState), tR.Jm(this.eId, "updateWalkingState", {
                JI: ZR,
                SyR: rR,
                walkingLegSwingDuration: BG.r
              }), tR.Jm(this.eId, "humanoidMesh", {
                JI: ZR,
                SyR: rR,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), tR.Jm(this.eId, "animator", {
                JI: ZR,
                SyR: rR,
                modelLifeformType: "Player"
              }), OG.g.hasAnimation("Person") && tR.Jm(this.eId, "rigAnimation", {
                target: "Person",
                JI: ZR
              }), tR.oGR(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === qR && null !== ZR) {
              tR.Jm(this.eId, "animator", {
                JI: ZR,
                SyR: rR,
                modelLifeformType: null
              });
              const RR = (0, nG.r)(iR.blockName);
              null !== RR && tR.Jm(this.eId, "rigAnimation", {
                target: RR,
                JI: ZR
              })
            }
            tR.SiR(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: KR
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === iR.autoRotate && (tR.Zm(this.eId, "meshRotation"), tR.Jm(this.eId, "autoRotate"));
            const {
              lineToEId: CR
            } = iR;
            (0, LG.I)(CR) || tR.Jm(this.eId, "lineToEntity", {
              lineToEId: CR
            });
            const XR = yR.Qm[yR.WH][this.eId];
            this.updateOverlayColour(null !== (RR = null === XR || void 0 === XR ? void 0 : XR.overlayColour) && void 0 !== RR ? RR : null), this.updateOpacity(null !== (JR = null === XR || void 0 === XR ? void 0 : XR.opacity) && void 0 !== JR ? JR : 1), this.updateZIndex(null !== (GR = null === XR || void 0 === XR ? void 0 : XR.zIndex) && void 0 !== GR ? GR : 0)
          },
          removeMeshComponent: () => {
            "Person" !== qR && "BloxdBlock" !== qR || tR.Zm(this.eId, "rigAnimation"), tR.Zm(this.eId, tR.names.mesh), tR.RGR(this.eId, tR.names.meshAttachments) && tR.Zm(this.eId, tR.names.meshAttachments), tR.Zm(this.eId, "entityName"), tR.Zm(this.eId, "autoRotate"), tR.Zm(this.eId, "lineToEntity"), "Person" === qR ? (tR.Zm(this.eId, tR.names.moveState), tR.Zm(this.eId, "updateWalkingState"), tR.Zm(this.eId, "humanoidMesh"), tR.Zm(this.eId, "animator")) : "BloxdBlock" === qR && tR.Zm(this.eId, "animator")
          },
          hideDist: null !== (JR = iR.hideDist) && void 0 !== JR ? JR : 80,
          movingHideDist: null !== (GR = iR.hideDist) && void 0 !== GR ? GR : 120,
          displayOutsideLoadedChunk: iR.hideDist > 100,
          immediatelyUpdate: !0,
          hV: "BloxdBlock" === qR ? iR.blockName : qR
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.He || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, UG.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(RR) {
        var JR, GR;
        if ("Person" !== this.meshKind) return;
        let yR = new AG.e(0, 0, 0, 0);
        if (null !== RR) {
          const JR = (0, WG.P)(RR);
          yR = new AG.e(JR[0] / 255, JR[1] / 255, JR[2] / 255, .5)
        }
        const tR = null !== (JR = null === (GR = this.xw.zC.vGR(this.eId)) || void 0 === GR ? void 0 : GR.JI) && void 0 !== JR ? JR : null;
        null !== tR && CG.b.Player.meshApi.updateMeshOverlayColour(tR, yR)
      }
      updateZIndex(RR) {
        var JR;
        if ("Person" !== this.meshKind) return;
        const GR = null === (JR = this.xw.zC.vGR(this.eId)) || void 0 === JR ? void 0 : JR.JI;
        "number" === typeof GR && this.xw.lK.RP.setRenderingGroupId(GR, RR)
      }
      updateOpacity(RR) {
        const JR = this.xw.zC.vGR(this.eId);
        JR && ("number" !== typeof JR.JI ? JR.mesh && "ParticleEmitter" !== this.meshKind && (0, bG.g)(JR.mesh, RR) : CG.b.Player.meshApi.updateMeshOpacity(JR.JI, RR))
      }
    }
    var DG = GR(40216);
    class HG {
      constructor(RR, JR) {
        this.eId = JR, this.xw = void 0, this.schema = void 0, this.xw = RR.xw
      }
      initClient(RR) {
        this.schema = RR, this.xw.zC.add([RR.x, RR.y, RR.z], .1, .1, null, null, !1, !1, this.eId), this.xw.zC.Jm(this.eId, "smoothToServerPos"), DG.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(RR) {
        tG.h.includes(RR) && DG.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        DG.d.remove(this.eId), this.xw.zC.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: RR,
          volume: JR,
          refDistance: GR,
          maxHearDist: yR,
          rate: tR
        } = this.schema;
        return {
          soundName: RR,
          volume: JR,
          refDistance: GR,
          maxHearDist: yR,
          rate: tR
        }
      }
    }
    var oG = GR(2421),
      cG = GR(37494),
      PG = GR(7588),
      IG = GR(38950),
      mG = GR(2435),
      zG = GR(39300),
      SG = GR(10456),
      jG = GR(39633),
      dG = GR(38924),
      EG = GR(1972);
    class YG {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.cyR = RR, this.xw = JR, this.setupBudgetMs = GR, this.now = yR, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.He = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.UW = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const RR of this.promotedSetups) {
            this.promotedSetups.delete(RR);
            const JR = this.queuedSetups.get(RR);
            JR && (this.queuedSetups.delete(RR), this.timedSetup(JR, RR))
          }
        }, this.createStateCallbacks = (0, SG.getStateCallbacks)(RR), this.roomStateCallbacks = this.createStateCallbacks(RR.state), this.roomState = RR.state, this.setupBudgetLeftMs = GR, this.lastRefillMs = yR()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.cyR.onStateChange(this.setUpPromoted), this.xw.on("beforeInputs", this.onFrame), this.xw.on("gK", this.UW)
      }
      setUpQueuedEntities(RR) {
        var JR;
        if ((null === (JR = (0, mG.e)().client.getMsgHandler()) || void 0 === JR ? void 0 : JR.cyR) !== this.cyR) return this.xw.off("beforeInputs", this.onFrame), this.xw.off("gK", this.UW), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (RR && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (gG().copy(kG, this.xw.zC.vW(this.xw.WH)); this.setupBudgetLeftMs > 0;) {
            const RR = this.nearestQueued(kG);
            if (null === RR) return;
            this.setUpIfQueued(RR), this.setUpPromoted()
          }
      }
      nearestQueued(RR) {
        let JR = null,
          GR = 1 / 0;
        return this.queuedSetups.forEach(((yR, tR) => {
          const uR = function(RR, JR) {
            return (JR.x - RR[0]) ** 2 + (JR.y - RR[1]) ** 2 + (JR.z - RR[2]) ** 2
          }(RR, yR);
          (null === JR || uR < GR) && (JR = tR, GR = uR)
        })), JR
      }
      setUpOrQueue(RR, JR) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(RR, JR) ? this.timedSetup(RR, JR) : this.queuedSetups.set(JR, RR)
      }
      mustSetUpNow(RR, JR) {
        const GR = this.xw.UH;
        if (JR === GR) return !0;
        const yR = this.roomState.entities.get(GR);
        return !(!yR || yR.ridingVehicleEId !== JR && yR.followingEId !== JR) || (QG(RR.type) === eG.b || (0, mG.e)().getFollowingEntities(JR).length > 0)
      }
      setUpIfQueued(RR) {
        const JR = this.queuedSetups.get(RR);
        JR && (this.queuedSetups.delete(RR), this.timedSetup(JR, RR))
      }
      promoteIfQueued(RR) {
        null !== RR && this.queuedSetups.has(RR) && this.promotedSetups.add(RR)
      }
      timedSetup(RR, JR) {
        const GR = this.now();
        this.setupEntity(RR, JR), this.setupBudgetLeftMs -= this.now() - GR
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.mC(((RR, JR) => {
          this.xw.UH ? this.setUpOrQueue(RR, JR) : this.deferEntitySetupUntilInitInfo(RR, JR)
        })), this.roomStateCallbacks.entities.eD(((RR, JR) => {
          const GR = this.deferredSetups.get(JR);
          GR && (sJ.n.unsubscribe(GR), this.deferredSetups.delete(JR)), this.queuedSetups.delete(JR), this.detach(JR), (0, mG.e)().client.disposeEntity(JR)
        }))
      }
      deferEntitySetupUntilInitInfo(RR, JR) {
        const GR = sJ.n.pU("initInfoReceived", (() => {
          this.deferredSetups.delete(JR), this.setUpOrQueue(RR, JR)
        }));
        this.deferredSetups.set(JR, GR), (0, oG.onGameResetOnce)((() => {
          this.deferredSetups.get(JR) === GR && (sJ.n.unsubscribe(GR), this.deferredSetups.delete(JR)), (0, mG.e)().updatePositionAndPhysics(this.xw.WH, {
            type: PG.k.DEFAULT,
            tier: null
          }, !0), (0, mG.e)().takeHeldPlayerBodySize(this.xw.WH);
          const RR = this.xw.zC.aGR(this.xw.WH);
          RR && (RR.movementType = PG.j.NORMAL)
        }))
      }
      setupEntity(RR, JR) {
        const GR = JR === this.xw.UH;
        if (GR)(0, mG.e)().client.Z6(this.xw.WH, null, null);
        else {
          const {
            type: GR
          } = RR, yR = QG(GR);
          if (void 0 === yR) return void
          function(RR, JR) {
            const GR = String(RR);
            if (FG.has(GR)) return;
            FG.add(GR);
            const yR = GR.length > 80 ? `${GR.slice(0,80)}...` : GR,
              tR = `No client handler for entity type ${JSON.stringify(yR)}, so entity ${JR} is not set up`;
            console.warn(tR), (0, EG.reportClientError)("uncaught", tR, "unknown_entity_type")
          }(GR, JR);
          (0, mG.e)().client.Z6(JR, RR, new yR((0, mG.e)(), JR, GR))
        }
        const yR = this.createStateCallbacks(RR);
        if (GR) return this.setupMapSchemaCallbacks(JR, RR, yR, "armour"), this.setupScalarField(JR, RR, yR, "scale"), this.setupScalarField(JR, RR, yR, "ridingVehicleEId"), this.setupScalarField(JR, RR, yR, "followingEId"), this.setupScalarField(JR, RR, yR, "followingOffset"), void this.setupScalarField(JR, RR, yR, "shouldMatchFollowingEntityRotation");
        for (const tR of KG(RR.constructor)) RR[tR] instanceof GG.MapSchema ? this.setupMapSchemaCallbacks(JR, RR, yR, tR) : this.setupScalarField(JR, RR, yR, tR)
      }
      setupMapSchemaCallbacks(RR, JR, GR, yR) {
        const tR = GR[yR],
          uR = new Map;
        tR.mC(((GR, tR) => {
          if (this.onEntityFieldChange(RR, JR, yR, {
              key: tR,
              value: GR
            }), !(GR instanceof GG.Schema)) return;
          const ZR = this.createStateCallbacks(GR),
            qR = [];
          for (const uR of KG(GR.constructor)) qR.push(this.listenForFutureChanges(ZR, uR, (() => {
            this.onEntityFieldChange(RR, JR, yR, {
              key: tR,
              value: GR
            })
          })));
          uR.set(tR, (() => {
            for (const RR of qR) RR()
          }))
        })), tR.eD(((GR, tR) => {
          var ZR;
          null === (ZR = uR.get(tR)) || void 0 === ZR || ZR(), uR.delete(tR), this.onEntityFieldChange(RR, JR, yR, {
            key: tR,
            value: null
          })
        })), this.addDetacher(RR, (() => {
          for (const RR of uR.values()) RR();
          uR.clear()
        }))
      }
      setupScalarField(RR, JR, GR, yR) {
        this.onEntityFieldChange(RR, JR, yR, JR[yR]);
        const tR = this.listenForFutureChanges(GR, yR, (GR => {
          this.onEntityFieldChange(RR, JR, yR, GR)
        }));
        this.addDetacher(RR, tR)
      }
      addDetacher(RR, JR) {
        let GR = this.detachers.get(RR);
        GR || (GR = [], this.detachers.set(RR, GR)), GR.push(JR)
      }
      detach(RR) {
        for (const GR of null !== (JR = this.detachers.get(RR)) && void 0 !== JR ? JR : []) {
          var JR;
          GR()
        }
        this.detachers.delete(RR)
      }
      listenForFutureChanges(RR, JR, GR) {
        return RR.listen(JR, GR, !1)
      }
      onEntityFieldChange(RR, JR, GR, yR) {
        switch (GR) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(yR);
            const JR = this.xw.zC.oGR((0, cG.d)(RR));
            JR && (JR.ridingVehicleEId = yR);
            break
          }
          case "armour":
            this.handleArmourChange(RR, yR);
            break;
          case "followingEId":
            this.promoteIfQueued(yR), this.handleFollowingEIdChange(RR, JR, yR);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(RR, GR, yR);
            break;
          case "scale":
            this.handleScaleChange(RR, yR);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(RR, yR);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(RR, yR);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(RR, yR);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(RR, GR, yR)
        }(0, mG.e)().client.updateEntityField(RR, GR, yR)
      }
      handleArmourChange(RR, JR) {
        var GR, yR;
        const {
          key: tR,
          value: uR
        } = JR;
        (0, CG.u)(RR, tR, null !== (GR = null === uR || void 0 === uR ? void 0 : uR.itemName) && void 0 !== GR ? GR : null, null !== (yR = null === uR || void 0 === uR ? void 0 : uR.enchantmentTier) && void 0 !== yR ? yR : null)
      }
      handleFollowingEIdChange(RR, JR, GR) {
        const yR = (0, cG.d)(RR),
          tR = yR === this.xw.WH;
        if (this.xw.zC.Zm(yR, this.xw.zC.names.bC), GR) this.xw.zC.Zm(yR, "smoothToServerPos"), this.xw.zC.Jm(yR, this.xw.zC.names.bC, {
          pe: (0, cG.d)(GR),
          offset: Array.from(JR.followingOffset),
          UyR: JR.shouldMatchFollowingEntityRotation,
          XyR: !0,
          MyR: (RR, yR) => {
            if (gG().copy(RR, JR.followingOffset), JR.ridingVehicleEId === GR) {
              const JR = (0, cG.d)(GR),
                tR = (0, mG.e)().getEntityHeading(JR, yR);
              gG().ta(RR, RR, gG().ZERO, tR)
            }
          }
        });
        else if (!tR) {
          this.xw.zC.RGR(yR, "smoothToServerPos") || this.xw.zC.Jm(yR, "smoothToServerPos");
          const RR = this.xw.zC.getState(yR, "smoothToServerPos"),
            JR = this.xw.zC.f6(yR).position;
          (0, dG.setServerPosition)(RR, JR[0], JR[1], JR[2])
        }
      }
      handleRotationChange(RR, JR, GR) {
        const yR = "xRotation" === JR ? 0 : "yRotation" === JR ? 1 : 2;
        for (const tR of (0, mG.e)().getFollowingEntities(RR)) {
          const RR = this.xw.zC.getState(tR, "meshRotation"),
            JR = this.xw.zC.nyR(tR);
          RR && JR.UyR && (RR.serverSetRotation[yR] = GR)
        }
      }
      handleScaleChange(RR, JR) {
        const GR = (0, cG.d)(RR);
        if (sJ.n.JK(`entityScale|${GR}`, JR), GR === this.xw.WH) {
          var yR;
          (0, mG.e)().removeFromEyeHeightCache(GR);
          const RR = this.xw.zC.aGR(this.xw.WH),
            JR = null !== (yR = null === RR || void 0 === RR ? void 0 : RR.physicsState) && void 0 !== yR ? yR : {
              type: PG.k.DEFAULT,
              tier: null
            };
          return void(0, mG.e)().updatePositionAndPhysics(this.xw.WH, JR, !1)
        }
        const tR = (0, mG.e)().getLifeformType(GR);
        if (null === tR) return;
        const {
          physicsBodyWidth: uR,
          physicsBodyHeight: ZR
        } = (0, jG.f)(JR, tR);
        this.xw.zC.ayR(GR, uR, ZR, uR)
      }
      handleBaseRenderHeadingChange(RR, JR) {
        const GR = this.xw.zC.getState(RR, "meshRotation");
        GR && (GR.baseRenderRotation[1] = JR);
        for (const yR of (0, mG.e)().getFollowingEntities(RR)) {
          const RR = this.xw.zC.getState(yR, "meshRotation"),
            GR = this.xw.zC.nyR(yR);
          RR && GR.UyR && (RR.baseRenderRotation[1] = JR)
        }
      }
      handleFollowingOffsetChange(RR, JR) {
        const GR = this.xw.zC.nyR((0, cG.d)(RR));
        if (GR && GR.offset) {
          const RR = JR ? Array.from(JR) : gG().ZERO;
          GR.offset[0] = RR[0], GR.offset[1] = RR[1], GR.offset[2] = RR[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(RR, JR) {
        const GR = this.xw.zC.nyR((0, cG.d)(RR));
        GR && (GR.UyR = null === JR || void 0 === JR || JR)
      }
      handlePositionChange(RR, JR, GR) {
        if (this.xw.zC.RGR(RR, "smoothToServerPos")) {
          const yR = this.xw.zC.getState(RR, "smoothToServerPos");
          (0, dG.setServerPositionAxis)(yR, TG[JR], GR)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.mC(((RR, JR) => {
          this.allItems[JR] = RR, (0, IG.i)(this.xw, JR, [RR.x, RR.y, RR.z], RR.id, {
            amount: RR.amount,
            attributes: JSON.parse(RR.attributes),
            Mt: (0, hJ.c)(this.xw).cantPickUpItem(JR),
            size: RR.size,
            predictedAt: (0, mG.e)().client.itemDropPrediction.onServerItemAdded(JR)
          });
          const GR = this.createStateCallbacks(RR);
          for (const yR of KG(ZG)) this.onItemFieldChange(JR, yR, RR[yR]), this.addDetacher(JR, this.listenForFutureChanges(GR, yR, (RR => {
            this.onItemFieldChange(JR, yR, RR)
          })))
        })), this.roomStateCallbacks.items.eD(((RR, JR) => {
          delete this.allItems[JR], this.detach(JR), (0, mG.e)().client.itemDropPrediction.onServerItemRemoved(JR), this.xw.zC.RGR(JR, this.xw.zC.names.itemState) && this.xw.zC.deleteEntity(JR), (0, hJ.c)(this.xw).disposeEntity(JR)
        }))
      }
      onItemFieldChange(RR, JR, GR) {
        if (JR in TG) {
          if (this.xw.zC.RGR(RR, "itemState")) {
            const yR = this.xw.zC.getState(RR, "smoothToServerPos");
            (0, dG.setServerPositionAxis)(yR, TG[JR], GR), (0, mG.e)().client.itemDropPrediction.onServerItemMoved(RR)
          }
          return
        }
        if (!this.xw.zC.RGR(RR, "itemState")) return;
        const yR = this.xw.zC.getState(RR, "itemState");
        "amount" === JR && GR !== yR.amount && (yR.creationTime = Date.now()), yR[JR] = "attributes" === JR ? JSON.parse(GR) : GR
      }
      dispose() {
        if (!this.He) {
          this.He = !0, this.xw.off("beforeInputs", this.onFrame), this.xw.off("gK", this.UW), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const RR of this.deferredSetups.values()) sJ.n.unsubscribe(RR);
          this.deferredSetups.clear(), this.xw.zC.Zm(this.xw.WH, this.xw.zC.names.bC);
          for (const RR in this.allItems) this.xw.zC.deleteEntity(RR), delete this.allItems[RR];
          for (const RR of [...this.detachers.keys()]) this.detach(RR);
          (0, hJ.c)(this.xw).clear();
          for (const RR of (0, mG.e)().client.iterateEntityIds())(0, mG.e)().client.disposeEntity(RR)
        }
      }
    }
    const kG = [0, 0, 0];

    function QG(RR) {
      if ("string" !== typeof RR) return;
      const JR = RR.indexOf("|"),
        GR = -1 === JR ? RR : RR.slice(0, JR),
        yR = hG();
      return Object.hasOwn(yR, GR) ? yR[GR] : void 0
    }
    const FG = new Set;
    const TG = {
      x: 0,
      y: 1,
      z: 2
    };
    let sG = null;

    function hG() {
      return null !== sG || (sG = {
        ...Object.fromEntries(tG.k.map((RR => {
          const {
            hV: JR
          } = (0, zG.c)(RR);
          return [RR, JR]
        }))),
        Pebble: eG.b,
        Snowball: eG.b,
        "Snowball Launcher": eG.b,
        "Reinforced Pebble": eG.b,
        Bullet: eG.b,
        "Reinforced Ball": eG.b,
        Ball: eG.b,
        Mango: eG.b,
        "Moonstone Orb": eG.b,
        ...Object.fromEntries(yG.v.map((RR => [(0, WG._b)(RR), eG.b]))),
        Arrow: eG.b,
        "Arrow of Speed": eG.b,
        "Arrow of Poison": eG.b,
        "Arrow of Slowness": eG.b,
        "Arrow of Weakness": eG.b,
        "Arrow of Knockback": eG.b,
        "Arrow of Strength": eG.b,
        "Arrow of Invisibility": eG.b,
        "Arrow of Jumping": eG.b,
        "Arrow of Defense": eG.b,
        "Arrow of Instant Healing": eG.b,
        "Arrow of Instant Damage": eG.b,
        "Arrow of Regeneration": eG.b,
        "Arrow of Haste": eG.b,
        "Arrow of Shield": eG.b,
        "Arrow of Double Jump": eG.b,
        "Arrow of Heat Resistance": eG.b,
        "Arrow of X-Ray Vision": eG.b,
        "Arrow of Mining Yield": eG.b,
        "Arrow of Brain Rot": eG.b,
        "Arrow of Milk": eG.b,
        Fireball: eG.b,
        "Bouncy Bomb": eG.b,
        RPG: eG.b,
        "Obby RPG": eG.b,
        "Super RPG": eG.b,
        "Grenade Launcher": eG.b,
        Iceball: eG.b,
        Coconut: eG.b,
        "Splash Speed Potion": eG.b,
        "Splash Defense Potion": eG.b,
        "Splash Strength Potion": eG.b,
        "Splash Invisibility Potion": eG.b,
        "Splash Jump Potion": eG.b,
        "Splash Knockback Potion": eG.b,
        "Splash Poison Potion": eG.b,
        "Splash Speed Potion II": eG.b,
        "Splash Defense Potion II": eG.b,
        "Splash Strength Potion II": eG.b,
        "Splash Jump Potion II": eG.b,
        "Splash Knockback Potion II": eG.b,
        "Splash Poison Potion II": eG.b,
        "Splash Slowness Potion": eG.b,
        "Splash Slowness Potion II": eG.b,
        "Splash Weakness Potion": eG.b,
        "Splash Weakness Potion II": eG.b,
        "Splash Milk Potion": eG.b,
        "Splash Instant Damage Potion": eG.b,
        "Splash Instant Damage Potion II": eG.b,
        "Splash Instant Healing Potion": eG.b,
        "Splash Instant Healing Potion II": eG.b,
        "Splash Regeneration Potion": eG.b,
        "Splash Regeneration Potion II": eG.b,
        "Splash Haste Potion": eG.b,
        "Splash Haste Potion II": eG.b,
        "Splash Shield Potion": eG.b,
        "Splash Shield Potion II": eG.b,
        "Splash Double Jump Potion": eG.b,
        "Splash Heat Resistance Potion": eG.b,
        "Splash X-Ray Vision Potion": eG.b,
        "Splash Mining Yield Potion": eG.b,
        "Splash Mining Yield Potion II": eG.b,
        "Splash Brain Rot Potion": eG.b,
        "Yellow Paintball Gun": eG.b,
        "White Paintball Gun": eG.b,
        "Red Paintball Gun": eG.b,
        "Purple Paintball Gun": eG.b,
        "Pink Paintball Gun": eG.b,
        "Orange Paintball Gun": eG.b,
        "Magenta Paintball Gun": eG.b,
        "Lime Paintball Gun": eG.b,
        "Light Gray Paintball Gun": eG.b,
        "Light Blue Paintball Gun": eG.b,
        "Green Paintball Gun": eG.b,
        "Gray Paintball Gun": eG.b,
        "Cyan Paintball Gun": eG.b,
        "Brown Paintball Gun": eG.b,
        "Blue Paintball Gun": eG.b,
        "Black Paintball Gun": eG.b,
        "Yellow Heavy Paintball Gun": eG.b,
        "White Heavy Paintball Gun": eG.b,
        "Red Heavy Paintball Gun": eG.b,
        "Purple Heavy Paintball Gun": eG.b,
        "Pink Heavy Paintball Gun": eG.b,
        "Orange Heavy Paintball Gun": eG.b,
        "Magenta Heavy Paintball Gun": eG.b,
        "Lime Heavy Paintball Gun": eG.b,
        "Light Gray Heavy Paintball Gun": eG.b,
        "Light Blue Heavy Paintball Gun": eG.b,
        "Green Heavy Paintball Gun": eG.b,
        "Gray Heavy Paintball Gun": eG.b,
        "Cyan Heavy Paintball Gun": eG.b,
        "Brown Heavy Paintball Gun": eG.b,
        "Blue Heavy Paintball Gun": eG.b,
        "Black Heavy Paintball Gun": eG.b,
        "Toxin Ball": eG.b,
        "Splash Aura XP Potion": eG.b,
        "Splash Aura XP Potion II": eG.b,
        "Arrow of Aura XP": eG.b,
        Firecracker: eG.b,
        "Rainbow Firecracker": eG.b,
        "White Firecracker": eG.b,
        "Orange Firecracker": eG.b,
        "Magenta Firecracker": eG.b,
        "Light Blue Firecracker": eG.b,
        "Yellow Firecracker": eG.b,
        "Lime Firecracker": eG.b,
        "Pink Firecracker": eG.b,
        "Gray Firecracker": eG.b,
        "Light Gray Firecracker": eG.b,
        "Cyan Firecracker": eG.b,
        "Purple Firecracker": eG.b,
        "Blue Firecracker": eG.b,
        "Brown Firecracker": eG.b,
        "Green Firecracker": eG.b,
        "Red Firecracker": eG.b,
        "Black Firecracker": eG.b,
        "Firecracker Pebble": eG.b,
        "Rainbow Firecracker Pebble": eG.b,
        "White Firecracker Pebble": eG.b,
        "Orange Firecracker Pebble": eG.b,
        "Magenta Firecracker Pebble": eG.b,
        "Light Blue Firecracker Pebble": eG.b,
        "Yellow Firecracker Pebble": eG.b,
        "Lime Firecracker Pebble": eG.b,
        "Pink Firecracker Pebble": eG.b,
        "Gray Firecracker Pebble": eG.b,
        "Light Gray Firecracker Pebble": eG.b,
        "Cyan Firecracker Pebble": eG.b,
        "Purple Firecracker Pebble": eG.b,
        "Blue Firecracker Pebble": eG.b,
        "Brown Firecracker Pebble": eG.b,
        "Green Firecracker Pebble": eG.b,
        "Red Firecracker Pebble": eG.b,
        "Black Firecracker Pebble": eG.b,
        "Blinding Pebble": eG.b,
        Poop: eG.b,
        "Wood Boomerang": eG.b,
        "Stone Boomerang": eG.b,
        "Iron Boomerang": eG.b,
        "Gold Boomerang": eG.b,
        "Diamond Boomerang": eG.b,
        "Amethite Boomerang": eG.b,
        "Magmasteel Boomerang": eG.b,
        "Rubellite Boomerang": eG.b,
        "Serpentite Boomerang": eG.b,
        "Moonstone Boomerang": eG.b,
        "67 Base Projectile": eG.b,
        "67 Boosted Projectile": eG.b,
        "Capitano Grenade": eG.b,
        "Scatter Pellet": eG.b,
        "Lucky Bomb": eG.b,
        "Unlucky Bomb": eG.b,
        "Swap Orb": eG.b,
        Mesh: NG,
        AudioEntity: HG
      }), sG
    }
  },
  40267: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      h: () => ZR
    });
    var yR = GR(679),
      tR = GR(38887);
    const uR = 4e4;
    class ZR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = RR, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(RR, JR, GR) {
        const uR = (0, yR.X)(RR),
          ZR = (0, yR.X)(JR),
          qR = (0, yR.X)(GR),
          iR = this.now();
        if (uR !== this.lastChunkX || ZR !== this.lastChunkY || qR !== this.lastChunkZ) {
          this.lastChunkX = uR, this.lastChunkY = ZR, this.lastChunkZ = qR, this.lastChunkId = (0, tR.b)(uR, ZR, qR), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, iR);
          for (const [RR, JR] of this.editedAt) {
            if (JR >= iR - 3e5) break;
            this.editedAt.delete(RR)
          }
        } else this.editedAt.set(this.lastChunkId, iR)
      }
      chunksEditedSince(RR) {
        const JR = [];
        for (const [GR, yR] of this.editedAt) yR >= RR && JR.push(GR);
        return JR
      }
    }
  },
  40323: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => eJ,
      f: () => jJ,
      i: () => DJ,
      k: () => dJ
    });
    var yR = GR(2421),
      tR = GR(10118),
      uR = GR(37838),
      ZR = GR(37840),
      qR = GR(1570),
      iR = GR(37466),
      fR = GR(40216),
      VR = GR(40200),
      KR = GR(2532),
      wR = GR(39028),
      rR = GR(40327),
      eR = GR(1336),
      aR = GR(359),
      LR = GR(32),
      nR = GR(2163),
      UR = GR(103),
      WR = GR(46),
      AR = GR(2194),
      CR = GR(2102),
      XR = GR(4134);
    class MR {
      constructor(RR) {
        this.storeForMs = RR, this.clicks = new XR.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const RR = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < RR;) this.clicks.dequeue()
      }
      getNumClicksInMs(RR) {
        let JR = 0;
        return this.clicks.forEach((GR => {
          GR > Date.now() - RR && JR++
        })), JR
      }
      getMaxClickSeparationInMs(RR) {
        if (0 === this.clicks.size) return this.storeForMs;
        let JR = 0,
          GR = Date.now() - RR;
        this.clicks.forEach((yR => {
          yR < Date.now() - RR || (JR = Math.max(JR, Math.abs(yR - GR)), GR = yR)
        }));
        const yR = Math.abs(Date.now() - GR);
        return Math.max(JR, yR)
      }
    }
    class BR {
      constructor(RR) {
        this.storeForMs = RR, this.clickDownDurations = new XR.d
      }
      registerClickDownDuration(RR) {
        this.clickDownDurations.enqueue({
          dur: RR,
          atTime: Date.now()
        });
        const JR = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < JR;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(RR) {
        if (RR > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let JR = 0,
          GR = 0;
        return this.clickDownDurations.forEach((yR => {
          yR.atTime > Date.now() - RR && (JR++, GR = Math.max(GR, yR.dur))
        })), `${JR}:${GR}`
      }
    }
    var lR = GR(37651),
      pR = GR(40333),
      gR = GR(25),
      bR = GR(2435),
      vR = GR(1449),
      OR = GR(3452),
      xR = GR(5242),
      NR = GR(134),
      DR = GR(39308),
      HR = GR(39533),
      oR = GR(679),
      cR = GR(37644),
      PR = GR(14),
      IR = GR(5844),
      mR = GR(1317),
      zR = GR(203),
      SR = GR(40336),
      jR = GR(40345),
      dR = GR(40353),
      ER = GR(39341),
      YR = GR(40362),
      kR = GR(39245),
      QR = GR(4708),
      FR = GR(1800),
      TR = GR(3494),
      sR = GR(3960),
      hR = GR(37431),
      RJ = GR(37433),
      JJ = GR(40356),
      GJ = GR(39112);
    const yJ = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function tJ() {
      var RR, JR;
      return !(null === (RR = (0, bR.e)().client) || void 0 === RR || null === (JR = RR.freeCameraController) || void 0 === JR || !JR.movesFly())
    }

    function uJ(RR) {
      const JR = RR.on.bind(RR);
      RR.on = (RR, GR) => {
        AR.B.has(RR) ? JR(RR, GR) : JR(RR, (JR => {
          var yR;
          return null !== (yR = (0, bR.e)().client) && void 0 !== yR && yR.isReplayMode() ? function(RR) {
            return RR in yJ
          }(RR) && tJ() ? GR(JR) : void 0 : GR(JR)
        }))
      }
    }
    const ZJ = 5e3,
      qJ = 1;
    let iJ, fJ = qJ,
      VJ = 0;
    const KJ = !0;
    let wJ = KJ;
    nR.c.subscribe("_ignoreBasicBoards", (RR => {
      wJ = RR
    })), (0, yR.onGameReset)((() => {
      wJ = KJ
    }));
    let rJ = null;
    const eJ = () => rJ;
    let aJ, LJ, nJ;
    var UJ, WJ, AJ, CJ, XJ, MJ, BJ, lJ, pJ;
    const gJ = [2, 0, 1, 93, "c", "a", "i", 7, 92, 6, 78, 8, 255, "length", 65, "d", 120, "e", "undefined", void 0, 167, 191, 63, "fromCodePoint", 12, "push", 193, "b", 3, "h", "g", 91, 103, 8191, 88, 13, 14, 24, 149, 212, 11, 154, !1, !0, 5, 4, 171, 17, 199, 250, 32, 25, 40, "z", 27, 49, "f", 230, 173, 16, 249, 512, 256, 115, 97, 226, 10, 9, 209, 234, 117, 219, 59, 15, 28, 41, 192, 127, 100, 163, 156, 221, 201, 1023, 31, 128, 18, 142, 223, 19, 64, 42, 72, 65535, 233, 77, 62, 184, 160];

    function bJ(...RR) {
      return RR[gJ[13]] = gJ[2], typeof UJ[RR[gJ[1]]] === gJ[18] ? UJ[RR[gJ[1]]] = function(...RR) {
        for (NJ(RR[gJ[13]] = gJ[2], RR[gJ[5]] = 'zlZrQRb@630*?{qeDCXnx,adM$wo>45%7&KhI1i)|k^`2y#JNF=]E_Y(G~Pt89v.j[BTS!;LuUsHmA/OV<fg}"+Wpc:', RR[gJ[0]] = "" + (RR[gJ[1]] || ""), RR[gJ[4]] = RR[gJ[0]].length, RR[gJ[10]] = [], RR[gJ[8]] = gJ[1], RR[gJ[9]] = gJ[1], RR[gJ[7]] = -gJ[2]), RR[-gJ[3]] = gJ[1]; RR[-gJ[3]] < RR[gJ[4]]; RR[-gJ[3]]++)
          if (RR[gJ[6]] = RR[gJ[5]].indexOf(RR[gJ[0]][RR[-gJ[3]]]), RR[gJ[6]] !== -gJ[2])
            if (RR[gJ[7]] < gJ[1]) RR[gJ[7]] = RR[gJ[6]];
            else {
              NJ(RR[gJ[7]] += RR[gJ[6]] * gJ[31], RR[gJ[8]] |= RR[gJ[7]] << RR[gJ[9]], RR[gJ[9]] += (RR[gJ[7]] & gJ[33]) > gJ[34] ? gJ[35] : gJ[36]);
              do {
                NJ(RR[gJ[10]].push(RR[gJ[8]] & gJ[12]), RR[gJ[8]] >>= gJ[11], RR[gJ[9]] -= gJ[11])
              } while (RR[gJ[9]] > gJ[7]);
              RR[gJ[7]] = -gJ[2]
            } return RR[gJ[7]] > -gJ[2] && RR[gJ[10]].push((RR[gJ[8]] | RR[gJ[7]] << RR[gJ[9]]) & gJ[12]), vJ(RR[gJ[10]])
      }(WJ[RR[gJ[1]]]) : UJ[RR[gJ[1]]]
    }

    function vJ(...RR) {
      return RR[gJ[13]] = gJ[2], typeof CJ !== gJ[18] && CJ ? (new CJ).decode(new XJ(RR[gJ[1]])) : typeof MJ !== gJ[18] && MJ ? MJ.from(RR[gJ[1]]).toString("utf-8") : pJ(RR[gJ[1]])
    }

    function OJ(...RR) {
      if (RR[gJ[13]] = gJ[28], RR[gJ[1]] === bJ(101)) return RR[gJ[2]] + RR[gJ[0]]
    }

    function xJ() {}

    function NJ() {
      NJ = function() {}
    }

    function DJ(RR) {
      function JR() {
        return RR.zC.uyR(RR.WH)
      }
      uJ(RR.inputs.down), uJ(RR.inputs.up);
      for (const yR of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const JR = (JR, GR) => {
          var tR, uR;
          if (tJ()) {
            var ZR;
            const tR = yJ[yR];
            var qR, iR;
            if (tR) null === (qR = (0, bR.e)().client) || void 0 === qR || null === (iR = qR.freeCameraController) || void 0 === iR || iR.handlefreeCamKeyPress(tR, JR, GR);
            return void(GR || null !== (ZR = (0, bR.e)().client) && void 0 !== ZR && ZR.isReplayMode() || (RR.zC.VyR()[yR] = !1))
          }
          if (null !== (tR = (0, bR.e)().client) && void 0 !== tR && null !== (uR = tR.freeCameraController) && void 0 !== uR && uR.isKeyPressOverriden(JR)) return;
          RR.zC.VyR()[yR] = GR
        };
        RR.inputs.down.on(yR, (RR => JR(RR, !0))), RR.inputs.up.on(yR, (RR => JR(RR, !1)))
      }
      RR.inputs.down.on("crouch", (() => {
        if (tJ()) return;
        if (!RR.jW.canCrouch) return;
        const JR = RR.zC.VyR();
        gR.d.get("clientEscMenuOptions").crouchIsToggle && (JR.crouchToggled = !JR.crouchToggled && !JR.padSneakToggled), JR.padSneakToggled = !1
      }));
      const GR = () => {
        const RR = JR();
        RR.isGun() && RR.inaccuracyCalculator.jump()
      };
      RR.inputs.down.on("jump", (RR => {
        tJ() || (GR(), aJ(RR))
      }));
      for (const yR of AR.k) RR.inputs.down.on(yR, (RR => {
        var JR, GR;
        null !== (JR = (0, bR.e)().client) && void 0 !== JR && null !== (GR = JR.freeCameraController) && void 0 !== GR && GR.handlefreeCamKeyPress(yR, RR, !0) && (RR.preventDefault(), RR.stopPropagation())
      })), RR.inputs.up.on(yR, (RR => {
        var JR, GR;
        null !== (JR = (0, bR.e)().client) && void 0 !== JR && null !== (GR = JR.freeCameraController) && void 0 !== GR && GR.handlefreeCamKeyPress(yR, RR, !1) && (RR.preventDefault(), RR.stopPropagation())
      }));
      RR.inputs.down.on("recordGame", (() => {
        var RR, JR;
        null === (RR = (0, bR.e)().client) || void 0 === RR || null === (JR = RR.gameRecorder) || void 0 === JR || JR.toggleRecording()
      })), RR.inputs.down.on("recordClip", (() => {
        var RR, JR;
        (0, lR.e)() || null === (RR = (0, bR.e)().client) || void 0 === RR || null === (JR = RR.gameRecorder) || void 0 === JR || JR.saveClip()
      }));
      for (const yR of AR.B) RR.inputs.down.on(yR, (() => {
        var RR;
        if ((0, pR.b)()) return;
        if ("replayViewerOpen" === yR) return void LR.n.JK("replayViewer|requested", "toggle");
        const JR = null === (RR = (0, bR.e)().client) || void 0 === RR ? void 0 : RR.gameReplayer;
        ((0, lR.e)() || null !== JR && void 0 !== JR && JR.isReplayMode()) && (null === JR || void 0 === JR || JR.handleAction(yR))
      }));
      const qR = new MR(3e4),
        wR = new BR(4e4);
      let rR = 0;
      const WR = RR => {
          let JR = 0,
            GR = null;
          const yR = JR => null !== JR && JR === GR && (GR = null, RR(), !0);
          return {
            press: () => (JR++, (0, SR.c)() || (yR(GR), GR = JR), JR),
            owns: RR => RR === GR,
            release: yR
          }
        },
        XR = (RR, GR) => {
          GR && dJ(eR.e.TouchDownFirePrimary), RR ? IR() : ((0, HR.d)(), JR().syR()), GR || dJ(eR.e.DownFirePrimary), jJ(!0), qR.click();
          const tR = qR.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            uR = qR.getMaxClickSeparationInMs(1e4) < 20,
            ZR = qR.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (tR || uR || ZR) {
            let RR;
            if (tR) RR = 30;
            else if (uR) RR = 50;
            else {
              if (!ZR) throw new Error("???");
              RR = 70
            }(0, yR.sendColyMessage)(KR.ik, RR)
          }
        },
        xR = new jR.c,
        NR = WR((() => {
          jR.c.stopRunning();
          const RR = Date.now() - rR;
          wR.registerClickDownDuration(RR), JR().QyR(), dJ(eR.e.UpFirePrimary), jJ(!1);
          const GR = wR.clickDownDurationsCheck(4e4);
          (0, yR.sendColyMessage)(KR.Dg, GR)
        }));
      let DR = 0;
      RR.inputs.down.on("primary-fire", (function(RR) {
        DR = NR.press(), NR.owns(DR) && (rR = Date.now(), Math.abs(performance.now() - RR.timeStamp) > 5e3 || (XR(RR.altKey, "changedTouches" in RR), aJ(RR)))
      })), RR.inputs.up.on("primary-fire", (function(RR) {
        NR.release(DR) && aJ(RR, !0)
      }));
      const oR = () => {
          JR().cVR(), dJ(eR.e.DownFireSecondary), jJ(!0), RR.IJR && !RR.IJR.position && (0, VR.g)()
        },
        cR = WR((() => {
          JR().kyR(), dJ(eR.e.UpFireSecondary), jJ(!1)
        }));
      let PR = 0;
      RR.inputs.down.on("alt-fire", (function(RR) {
        PR = cR.press(), cR.owns(PR) && (oR(), aJ(RR))
      })), RR.inputs.up.on("alt-fire", (function(RR) {
        cR.release(PR) && aJ(RR, !0)
      }));
      const IR = () => JR().zVR();
      RR.inputs.down.on("mid-fire", (() => {
        (0, SR.c)() || IR()
      }));
      const YR = RR => {
          (0, yR.sendColyMessage)(KR.Ih, RR, !0)
        },
        iJ = RR => {
          (0, yR.sendColyMessage)(KR.Lh, {
            kq: RR,
            Qq: KJ()
          }, !0)
        };
      for (const yR of ["SpecialAction1", "SpecialAction2"]) RR.inputs.down.on(yR, (() => {
        YR(yR)
      })), RR.inputs.up.on(yR, (() => {
        iJ(yR)
      }));
      const VJ = () => {
        const RR = JR();
        RR.isGun() && RR.reload(Date.now())
      };
      RR.inputs.down.on("ReloadGun", VJ);
      const KJ = () => {
        let JR = "a";
        return RR.physics.testSolid.toString().includes("sw") || (JR = "b"), JR
      };
      RR.inputs.down.on("OpenInventory", (RR => {
        RR.preventDefault(), (0, FR.y)(RR, "inventory", (0, dR.b)((0, bR.i)()))
      })), RR.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const wJ = RR => {
        LR.n.JK("DropItemKeyPressed", RR)
      };
      RR.inputs.down.on("DropItem", (() => {
        wJ(RR.zC.VyR().crouch)
      })), RR.inputs.down.on("OpenShop", (JR => {
        (0, lR.e)() || "inGame" === gR.d.get("gameState") && (0, FR.v)(JR, aR.o.SHOP, !(0, tR.c)(RR.jW.shopInfo))
      })), RR.inputs.down.on("OpenLobbyLeaderboard", (JR => {
        (0, lR.e)() || "inGame" === gR.d.get("gameState") && (0, FR.A)(JR, (0, JJ.b)(RR.jW), (0, TR.l)())
      })), RR.inputs.down.on("HideUi", (() => {
        LR.n.JK("showUi", !1)
      })), RR.inputs.up.on("HideUi", (() => {
        LR.n.JK("showUi", !0)
      }));
      const eJ = RR => {
        0 === RR && (RR = 10), LR.n.JK("setSelectedInventorySlotI", RR - 1), LR.n.JK("numkeyPressed", RR)
      };
      for (let yR = 1; yR <= 10; yR++) RR.inputs.down.on("HotBarSlot" + yR.toString(), (() => {
        eJ(yR)
      }));
      RR.inputs.down.on("OpenTasksAndLeaderboard", (JR => {
        const GR = (0, TR.n)();
        GR ? (0, FR.B)(JR, !0, GR) : (0, FR.y)(JR, "retentionFeatures", !(!RR.jW._tasks && !RR.jW._availableLeaderboards))
      })), RR.inputs.down.on("OpenCodeEditor", (JR => {
        (0, FR.B)(JR, (0, OR.b)((0, vR.d)()), (() => {
          (0, OR.i)(RR.zC.vW(RR.WH))
        }))
      })), RR.inputs.bind("ToggleFullCoordinateOverlay", "F3"), RR.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        LR.n.JK("toggleFullCoordinateOverlay")
      }));
      const nJ = () => {
        (0, bR.e)().client.cameraController.swapCameraZoom()
      };
      RR.inputs.down.on("SwapCameraZoom", nJ), RR.inputs.down.on("OpenInviteLink", (RR => {
        (0, FR.y)(RR, "inviteLink", UR.featureFlags.canUseInviteLinks)
      })), RR.inputs.bind("Y", "KeyY"), RR.inputs.down.on("Y", (RR => {
        (0, lR.e)() || LR.n.JK("YKeyPressed")
      })), RR.inputs.bind("X", "KeyX"), RR.inputs.down.on("X", (RR => {
        (0, lR.e)() || LR.n.JK("XKeyPressed")
      })), RR.inputs.down.on("OpenEmoteWheel", (() => {
        LR.n.JK("requestEmoteWheelHoldOpen")
      })), RR.inputs.up.on("OpenEmoteWheel", (() => {
        LR.n.JK("requestEmoteWheelHoldRelease")
      })), RR.inputs.down.on("Zoom", (() => {
        "inGame" === gR.d.get("gameState") && (0, bR.e)().client.cameraController.setZoomKeyHeld("keys", !0)
      })), RR.inputs.up.on("Zoom", (() => {
        (0, bR.e)().client.cameraController.setZoomKeyHeld("keys", !1)
      })), HJ();
      const UJ = RR => function() {
        return LJ(), RR(...arguments)
      };

      function WJ(RR) {
        "inGame" !== gR.d.get("gameState") || (0, FR.r)() || (LR.n.JK("ctrlCrouchWithoutFullscreen"), RR.preventDefault())
      }
      rJ = {
        primaryFireDown: UJ((RR => {
          const JR = NR.press();
          return NR.owns(JR) && (rR = Date.now(), XR(!1, !1), RR && xR.start()), JR
        })),
        primaryFireUp: UJ((RR => {
          NR.release(RR)
        })),
        altFireDown: UJ((() => {
          const RR = cR.press();
          return cR.owns(RR) && oR(), RR
        })),
        altFireUp: UJ((RR => {
          cR.release(RR)
        })),
        jumpDown: UJ(GR),
        specialActionDown: UJ(YR),
        specialActionUp: UJ(iJ),
        reloadGun: UJ(VJ),
        dropItem: UJ(wJ),
        swapCameraZoom: UJ(nJ),
        zoom: UJ((RR => {
          (0, bR.e)().client.cameraController.setZoomKeyHeld("pad", RR)
        })),
        pickBlock: UJ(IR)
      }, RR.inputs.down.on("ctrlCrouch", WJ), RR.inputs.up.on("ctrlCrouch", WJ), RR.inputs.bind("ctrlCrouch", "ControlLeft");
      const AJ = RR => {
        "inGame" === gR.d.get("gameState") && RR.ctrlKey && !(0, FR.r)() && RR.preventDefault()
      };
      document.addEventListener("keydown", AJ), document.addEventListener("keyup", AJ), document.addEventListener("keypress", AJ), RR.inputs.bind("Alt", "AltLeft", "AltRight"), RR.inputs.down.on("Alt", (RR => {
        RR.preventDefault()
      }));
      const CJ = JR => (0, kR.i)(RR, JR),
        XJ = JR => (0, kR.m)(RR, JR),
        MJ = [0, 0, 0],
        BJ = [0, 0, 1];
      RR.on("afterRender", (JR => {
        RJ.o.frame(JR, RR.camera.heading, RR.camera.pitch, RJ.i.drawn), (0, uR.c)(RR.camera.heading), (0, ZR.f)(RR.camera.heading), (0, kR.q)(RR, MJ, BJ), (0, bR.e)().client.triggerGameCallback("onAfterRender", JR, {
          cameraHeading: RR.camera.heading,
          cameraPitch: RR.camera.pitch,
          cameraPosition: MJ,
          cameraDirection: BJ,
          tanHalfFovX: (0, kR.c)(RR),
          tanHalfFovY: Math.tan(RR.lK.Z2().fov / 2),
          screenBandPct: {
            x: QR.e,
            y: (0, QR.k)()
          },
          projectWorldPosToScreenPos: CJ,
          projectWorldPosToViewport: XJ
        })
      })), RR.camera.uH = (0, hR.startLookDebug)("js"), RR.inputs.gH = hR.noteLookDroppedCopy, (0, sR.n)("remesh") && (0, GJ.l)(RR), RR.on("beforeInputs", (() => {
        if ((0, pR.b)()) return RR.inputs.wT.dx = 0, void(RR.inputs.wT.dy = 0);
        if (RR.camera.wT.dx += RR.inputs.wT.dx, RR.camera.wT.dy += RR.inputs.wT.dy, 0 !== RR.inputs.wT.dx || 0 !== RR.inputs.wT.dy) {
          RR.zC.getState(RR.WH, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        RR.inputs.wT.dx = 0, RR.inputs.wT.dy = 0
      }));
      let lJ = 0;
      const pJ = [0, 0, 0],
        gJ = [0, 0, 0],
        bJ = {
          base: pJ,
          max: gJ
        },
        vJ = RR => {
          const JR = zR.g.droppedBlockSize / 2;
          return [0, 1, 2].every((GR => RR[GR] >= pJ[GR] - JR && RR[GR] <= gJ[GR] + JR))
        };
      RR.on("gK", (function(JR) {
        LR.n.JK("noaTick", JR);
        const GR = (0, bR.e)().client;
        if (GR.triggerGameCallback("gK", JR), GR.isClientGameSessionActive()) try {
          fR.d.gK(JR)
        } catch (ZR) {
          console.error("Error ticking audio entities", ZR)
        }
        if (!RR.zC.yyR(RR.WH).isAlive) return;
        Date.now() - lJ > 9e3 && (! function() {
          const RR = (0, bR.i)();
          "number" === typeof RR.jW.speedMultiplier && "number" === typeof RR.jW.jumpAmount && (0, yR.sendColyMessage)(KR.ii, {
            kZ: (0, mR.d)(RR.jW.speedMultiplier),
            QZ: (0, mR.b)(RR.jW.jumpAmount),
            FZ: (0, mR.d)(RR.jW.crouchingSpeed),
            TZ: (0, mR.d)(RR.jW.walkingSpeed),
            sZ: (0, mR.d)(RR.jW.runningSpeed),
            hZ: (0, mR.b)(RR.xJR),
            Rq: RR.zC.aGR(RR.WH).jumpForce,
            Jq: RR.zC.f6(1).width,
            Gq: RR.zC.f6(1).height,
            yq: RR.zC.Lk(1).yq
          }, !0)
        }(), lJ = Date.now());
        const tR = RR.zC.VyR();
        if ((tR.jump || tR.forward || tR.backward || tR.left || tR.right || tR.sprint) && LR.n.JK("usedKeyboard"), RR.zC.mGR(RR.WH) && !0 === RR.jW.canPickUpItems) {
          const JR = RR.zC.vW(RR.WH),
            GR = (0, CR.j)(fJ),
            tR = (0, CR.n)(fJ);
          pJ[0] = JR[0] - GR, pJ[1] = JR[1] - .6 * tR, pJ[2] = JR[2] - GR, gJ[0] = JR[0] + GR, gJ[1] = JR[1] + zR.g.Kn + .6 * tR, gJ[2] = JR[2] + GR;
          const uR = RR.zC.jiR(bJ, RR.zC.names.autoRotate),
            {
              itemDropPrediction: ZR
            } = (0, bR.e)().client,
            qR = yR.offlineInputReplay.holdsInput();
          if (uR.length > 0)
            for (const fR of uR) {
              const JR = RR.zC.getState(fR, "itemState");
              if (void 0 === JR || Date.now() - JR.creationTime < 500) continue;
              let GR = fR,
                tR = null;
              if (JR.Mt) {
                const RR = ZR.pickupTarget(fR, vJ, qR);
                if (null === RR) continue;
                ({
                  jV: GR,
                  YV: tR
                } = RR)
              }
              const uR = RR.zC.getState(GR, "itemState");
              if (uR.Mt && null === tR) continue;
              let wR = 0,
                rR = null,
                eR = !1;
              if (0 === uR.amount) eR = !0;
              else {
                const {
                  amountPickedUp: JR
                } = RR.zC.PGR(RR.WH).pickUpItem({
                  name: uR.name,
                  typeObj: uR.typeObj,
                  amount: uR.amount,
                  attributes: uR.attributes
                });
                if (wR = JR, 0 === wR) continue;
                rR = ER.e.pickUp(uR, wR), uR.amount -= wR, uR.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === uR.amount ? eR = !0 : uR.creationTime = Date.now() + ZJ
              }
              const aR = (0, bR.e)().client.inventoryPrediction.record(rR);
              (0, yR.sendColyMessage)(KR.Dh, {
                jV: null === tR ? GR : "",
                dV: wR,
                EV: VR.f,
                KZ: aR,
                YV: tR
              }, !0), eR && (qR && ZR.onPickedUpOffline(GR, aR, tR), null === tR && RR.zC.deleteEntity(GR));
              iR.d.play("pickUp", zR.g.pickupSoundVol).rate(1 + Math.random() * zR.g.pickupSoundRateVariation)
            }
        }
        if (!RR.zC.vGR(RR.WH)) return;
        const uR = RR.inputs.wT.AGR;
        if (0 !== uR) {
          const JR = uR > 0 ? 1 : -1;
          RR.inputs.state["mid-fire"] || RR.inputs.state.Alt || !RR.jW.useInventory ? (RR.inputs.state["mid-fire"] && LR.n.JK("requestEmoteWheelClose"), (0, bR.e)().client.cameraController.handleScrollZoom(JR)) : LR.n.JK("ScrollInventorySlot", JR)
        }
      })), nR.c.subscribe("droppedItemScale", (RR => {
        fJ = "number" === typeof RR && isFinite(RR) ? RR : qJ
      }))
    }

    function HJ() {
      const RR = (0, bR.i)();
      if (RR)
        for (const JR in AR.t) {
          RR.inputs.unbind(JR);
          for (const GR of AR.t[JR]) RR.inputs.bind(JR, GR)
        }
    }
    NJ(UJ = {}, WJ = ["0~1(uNz+^qnO6)bX", '=bX]kYHk2*4N"QwI@Y?4i1r$Be', "ct}w|SuMl3KOoir`?Lh7DiFlq,Nt>tw^+[gR:i3@#t`($Dao>#!0", "mv9@Oy2|4vI>1NchoLvmLKO@788V;;[d~S1(tPvVMx*01uU)|`T4f/=Z", 'Xbg7|h>EK3`CzoLMdL!@kVK?P[#mVQ?$|b"@.8e<iPCbi$=>)L3u&E.J;P2', 'By|Yi"GZ@x`,}gCx?L*s6<mKlB*O%g3%]NrR', "tt|Ug=]kyG1mYqY|44T_qv]{Je1Kdfb", "_?JU^F7?GPr{|tNK~[|]jO5Z", "A$L>f&C<?qO6je5C;rLQQOs?9XtXur@", "X#5>r#[kS3WADoc4XYSw].c@qteb;!M>RSsR/Np?Sj0NP$>4+qH7IVJh>CP", "ee%ELKy{vG5@[uk)yvl", '"KLQ<IZjIj@o9885Err', "?d#>j)D+J,Bh*wu$Jxm4x/z;r3Jml1YKZ7r", "6d+Lx=%.+PjqU84C;vMU@vzPG{i(hi1$S]&7Z82j6x2!7JI5_3x4{", 'O1amp&dJf3]UhiBCgNWF4">5J.G;);rC"^/LU~,J.8/_ow?', "d#R=I/{!Q", 'lYpFS(XI>[,]P{KIFr^78_<"._(m"Mh%E]!>{=F{,j7rnqIM+$jUDEz', 'E~n4p&3nMP!.Ee1X9[r4_Gfs<3vBoqWKSK"=`U&hRYEh0R9d~L$u)f[l', "tv|oH!BMj8yFhw,kx8Y@J;Cn4,1>|Lqwbl", "4?dUY.P#8G%q[Qpkr3pFOI!l", 'JYw4a"~d&~@DkDswAS=uR!ThanF>of54R?(3l#z', "SbXo?muML{&!hr", ";vG][O$J8*CS+Fp>0l", "%rWmW~>5Qnb]^F&%C.kH[}i5pC>OKwvCr?YmDi[{DBL*KR;1", "Uq]6$|z5Xe03gwZI@L0At#Z^!P}.>rhC`wr", "zY$Y^U4.F.jUtr", ')?"=$"R$2*2@f<lCNbdE_f,l', "LxpUf~EP5,+sL;<opC+Q}gWhV80x)q4I<;AQJ)ghQ", "YbNFTsSX+n+7l", "+rG3}/IXN?B;[FHiidM&Am3!/GHsa<5COqn7piwEYjY%eql1/z", "C.p]@v+Mgn/6%fN|nYa(+y,kT3", "[>#@>/z", ';v;%9}IZHvXO}MU%pv4@xvGXx~luNe~Kw[zYo"FJGxd[#$l5ivm=qIcdJG7vl', "P1B]H(Bb26HVz", "g;M/3!YE%.&Cl", "Uy(bM~F{h~~", "6FAQpmT{$x87U8+D(~I%YPuE!j*HMQCw%l", '.SdQ49DE"{#E^9z58S@3', "9U<YVLohG{", "PvtsQO_4K~/_Ir&^xx(36O&hD.La7r`i&Yd5*!^X5X!.8gQ`};ysVLWl", "HqvQ,E8PN,0]a1$hM`N3*~)l", "vCS=+mYZ@xKO_9;M*LiE,=0E=e", "g%]u/ms+L{r9oZ~dK8xsjOpSb", "aL^HI|]n`6fX)Z4^FNi>~u(4q,[UVN9h)s;>ciA{73[6>Lr`,l", 'b.SLei""$[tX6rZ1|v0uAI1n!n', "Mx)FqsTd.e};|o>5)[Rm:gsbC.bP_8[%W)3/NF8MVeq5l", "BS?%p&4hT8eHMu}Kfye3Xg2VQYmG7LB1", "H]ZoP;A{,n,!gZi$O]Z", "X]vm];9JV8Q]cVrCdxA=iY!l", "]y=o@OUH=?;azrJw", "EwT4!IE#[~#%1Q(kK4LUbsL.pP,CpgnKsz", "Ks3YI|X+$[uh6)un0SDb<ibP@", "eYX]:t=#3CPV?Nnk~w|b59H{&?", "M8#EAmf+Z8h@yDK%*F3]J;z", "+C+%Yu_lR", "#`SRY13nN.^0Lq(4#L7]j8!@S{tXQr|wa]TswYekhnRDK{e|5l", ";1=7%L*k!nE@Cu3)5#m@<gXV^q_QAI&IGvw]qs}+bj,%utZIxbW3bu=Z}{", 'X1G3qIM6_{nH7DjCo["@o', "V1!@6mqM^C+IQeR$F1(>b</?:*", "5`%FuK0#0q)ql", "{QEs2SiMl3(m<Q^nctAQ9P]kb", ")3Q=`UghLxvX`q54N|H6gizI.eEM8ogKs[l", "~[emiYh~n?<7K9KXxeM3$i}VvXa]l", "1YHw4gu?Q", "Prg6yH`l}{a]/F3)~C65)Y.k2viB)f0", '~CFobKUHr~&K~QrM+)"LFG"@B?e(Ow^weL@E(.pKCX00"NT1hY6b', '"y=_C<u#[3y0dZr5Y~~bDshn_nEU+qXx[YbEb+as26tEJ;|nL%r', "C7751SII0C4ureM4]w(E}E(JO?EtsF0$bYE%r_:vQjNm6o!1[dy@|h~l", "`~8@wmfPZ3:#O;VKs[1>YAIMBYY.KFi$[380bN7+Q", "|Ln7$LekUCnOMg@$H^emY_?#]85%Fu5Is[fR;IxZ", "c^)3~.Z5}jcjl", "/%8_L(<~~[m.%fd4c]e&iJi?ZeKMze4CMY/L5E(@4t+lt;8h3.pbw", 'S%d>3(w6u[=UnL9Cy~L3SK"ht[EMSo!ns*kbf&o_f~TVyDI5PS&uRuy!{tY', "yS&Ymmk@Y{2", "JY!=ei_{:q@{cN(kYN^4@IH4JGxm=fgKA]fRF)L{7B{dl", "+>CH[<e@3(XHVh>^Qw%3#PTlw[OlK$iX", 'D#AmvO0PAtJB#{"oQFS_bsz', "(Yy>ISz", "^CFb.}ghN.qCze(|o4t6f!jXj_JM{}T1%d|FC", "[NB]G83.j8JF*Z2n+K[Y_PghX8Co|L=KYb_0WL5MR", "~wJQ#9ubj_U$i9f|j]$7giV?h8>u}ej^R4u3Wm6I..sTl", "ib%>JSzPd{tAaqc^mCV3590;5X)U7o15`4$]5Jg~5BG", "JbkYd/mX}~&u8e}|Z~aE*+5MY{#C+<q", "$7rA=1:MCYH*jrf)jveb~OQInn(Q?g|n#3zY$|^5.GQusw`)HCv@5", "YSzHE}3k0vQDlNpKN%d&5Eub>qr/<F0x53}Rp/.4E3", "<GJFSuv5=e*5dfo4F|NYG#*n*CAlIgQ5:z", "hYu]?=.JsC.G`w,KgNlbE;^Z", "r,EAdJdn`[NUb9.CL1l/ME<]?[N", "_dY>uIM5N8Ymjt5C@S/E)SghYP(VLq)1?d]4._x#v*", "ls!%.Ox6]8RP3I}|,S80JFl<[~qP/$2wh`JQ_}E+vG0[)Z8^NYZ7yH/K_n1", "IYT0ogbIz,rfB1oCirmRe(E5&Bn!KZI$kxz/Bu4JSniUr)94*wOE).MZ", "D8JUd/=ZinwrpJa>kviEl<z", "%`R=QN0POXI(dfB5z`r", "~LK]B}^EveVQ=$TM~]v%z8Ok~[C!A<{xWtFo>/z", "7sUY<II5ZnB6utcd", '~SA>$E]@O8"sGIqxUxg_h9I?0v~GANJojUr', "Vy/m@8SM`q}A~{U)a[b3usmK*[argi<)0?r", "#Kk5QOTdA*p~GoV)ENJQHi9l<YqSPfKMO[Rsx=M5[X|", "Lv,Eus{nje)q2o*$8|H_@O)Hz?[;2oIM|NP6", "gy_QY1z", "K`>0a~lk+{Vl=$rIkvO>cLm#FBfeph7d2Ly0D~j50Ckr/FC|", 'kw"%xi2Z', "~x(IW>G+", "3z!SdA{4", "Ve9a#ho<", "dexA/<wZ", "tv}_V<z", "X8xAA<>Z", "<[EA>LNZ", "*:m|", "]AUD3s)`8}RxhS", "T|fBzo,:{1e<nS", ">>*DzoiHC|.[rD", "^zf^us.tcn!RYS", "YAk[{R,:i|.1PS", 'Y{#D]"t2|{/', "+Ai9~T|V", "SY?:v^3}", '%"Q%iW@}', "/tMN8", '%"Q%u~HJ', "*$?r)", "x!62O?{vOgp@Z4", '))`#Ij4z[@Y"k4', "IWV^pW4ml~YU|T", "p=HJ3JbNem|iA2", '?g"a.{he?u;iFA', "5j~|5KHqa^8", ")1.3fI]l", "jKzCK>=G", "Rm&P", "V!=kV+(z"]), NJ(AJ = function(...RR) {
      NJ(RR[gJ[13]] = gJ[1], RR[gJ[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], RR[gJ[14]] = gJ[19], RR[gJ[0]] = []);
      try {
        NJ(RR[gJ[14]] = Object, RR[gJ[0]][gJ[25]]("".__proto__.constructor.name))
      } catch (WJ) {}
      RR: for (RR[gJ[15]] = gJ[1]; RR[gJ[15]] < RR[gJ[16]][gJ[13]]; RR[gJ[15]]++) try {
        for (RR[gJ[14]] = RR[gJ[16]][RR[gJ[15]]](), RR[gJ[17]] = gJ[1]; RR[gJ[17]] < RR[gJ[0]][gJ[13]]; RR[gJ[17]]++)
          if (typeof RR[gJ[14]][RR[gJ[0]][RR[gJ[17]]]] === gJ[18]) continue RR;
        return RR[gJ[14]]
      } catch (WJ) {}
      return RR[gJ[14]] || this
    }() || {}, CJ = AJ.TextDecoder, XJ = AJ.Uint8Array, MJ = AJ.GK, BJ = AJ.String || String, lJ = AJ.Array || Array, pJ = function(...RR) {
      return NJ(RR[gJ[13]] = gJ[1], RR[gJ[26]] = new lJ(gJ[85]), RR[gJ[27]] = BJ[gJ[23]] || BJ.fromCharCode, RR[-gJ[20]] = []),
        function(...JR) {
          for (NJ(JR[gJ[13]] = gJ[2], JR[-gJ[21]] = gJ[19], JR[gJ[0]] = gJ[19], JR[gJ[4]] = JR[gJ[1]][gJ[13]], RR[-gJ[20]][gJ[13]] = gJ[1]), JR[gJ[15]] = gJ[1]; JR[gJ[15]] < JR[gJ[4]];) NJ(JR[gJ[0]] = JR[gJ[1]][JR[gJ[15]]++], JR[gJ[0]] <= gJ[77] ? JR[-gJ[21]] = JR[gJ[0]] : JR[gJ[0]] <= gJ[88] ? JR[-gJ[21]] = (JR[gJ[0]] & gJ[84]) << gJ[9] | JR[gJ[1]][JR[gJ[15]]++] & gJ[22] : JR[gJ[0]] <= 239 ? JR[-gJ[21]] = (JR[gJ[0]] & gJ[73]) << gJ[24] | (JR[gJ[1]][JR[gJ[15]]++] & gJ[22]) << gJ[9] | JR[gJ[1]][JR[gJ[15]]++] & gJ[22] : BJ[gJ[23]] ? JR[-gJ[21]] = (JR[gJ[0]] & gJ[7]) << gJ[86] | (JR[gJ[1]][JR[gJ[15]]++] & gJ[22]) << gJ[24] | (JR[gJ[1]][JR[gJ[15]]++] & gJ[22]) << gJ[9] | JR[gJ[1]][JR[gJ[15]]++] & gJ[22] : (JR[-gJ[21]] = gJ[22], JR[gJ[15]] += gJ[28]), RR[-gJ[20]][gJ[25]](RR[gJ[26]][JR[-gJ[21]]] || (RR[gJ[26]][JR[-gJ[21]]] = RR[gJ[27]](JR[-gJ[21]]))));
          return RR[-gJ[20]].join("")
        }
    }()), NJ(nJ = (...RR) => {
      NJ(RR[gJ[13]] = gJ[2], RR[gJ[5]] = gJ[1]);
      for (const JR in RR[gJ[1]]) {
        function GR(...RR) {
          for (NJ(RR[gJ[13]] = gJ[2], RR[gJ[2]] = 'w4[%0e6Jr#v8+Z~xUYIH7go("j9n@2*WS<GFlP/bc!O|?&}`syd:RMz_.K1aq3^pE{;uX)=QDhCVfLi5$BtmAk]>,TN', RR[gJ[27]] = "" + (RR[gJ[1]] || ""), RR[gJ[40]] = RR[gJ[27]].length, RR[gJ[41]] = [], RR[gJ[17]] = gJ[1], RR[gJ[9]] = gJ[1], RR[gJ[30]] = -gJ[2]), RR[-gJ[39]] = gJ[1]; RR[-gJ[39]] < RR[gJ[40]]; RR[-gJ[39]]++)
            if (RR[gJ[6]] = RR[gJ[2]].indexOf(RR[gJ[27]][RR[-gJ[39]]]), RR[gJ[6]] !== -gJ[2])
              if (RR[gJ[30]] < gJ[1]) RR[gJ[30]] = RR[gJ[6]];
              else {
                NJ(RR[gJ[30]] += RR[gJ[6]] * gJ[31], RR[gJ[17]] |= RR[gJ[30]] << RR[gJ[9]], RR[gJ[9]] += (RR[gJ[30]] & gJ[33]) > gJ[34] ? gJ[35] : gJ[36]);
                do {
                  NJ(RR[gJ[41]].push(RR[gJ[17]] & gJ[12]), RR[gJ[17]] >>= gJ[11], RR[gJ[9]] -= gJ[11])
                } while (RR[gJ[9]] > gJ[7]);
                RR[gJ[30]] = -gJ[2]
              } return RR[gJ[30]] > -gJ[2] && RR[gJ[41]].push((RR[gJ[17]] | RR[gJ[30]] << RR[gJ[9]]) & gJ[12]), vJ(RR[gJ[41]])
        }

        function yR(...RR) {
          return RR[gJ[13]] = gJ[2], typeof UJ[RR[gJ[1]]] === gJ[18] ? UJ[RR[gJ[1]]] = GR(WJ[RR[gJ[1]]]) : UJ[RR[gJ[1]]]
        }

        function tR(...RR) {
          NJ(RR[gJ[13]] = gJ[1], RR[gJ[5]] = function(...JR) {
            return NJ(JR[gJ[13]] = gJ[28], JR[gJ[5]] = {}), JR[gJ[0]].length !== JR[gJ[1]].length + JR[gJ[2]].length ? gJ[42] : RR[gJ[27]](JR[gJ[1]], JR[gJ[2]], JR[gJ[0]], gJ[1], gJ[1], gJ[1], JR[gJ[5]])
          }, RR[gJ[27]] = function(...JR) {
            return NJ(JR[gJ[13]] = gJ[7], JR[-gJ[31]] = gJ[42]), JR[gJ[44]] >= JR[gJ[0]].length ? gJ[43] : JR[gJ[9]]["" + JR[gJ[28]] + JR[gJ[45]] + JR[gJ[44]]] !== gJ[19] ? JR[gJ[9]]["" + JR[gJ[28]] + JR[gJ[45]] + JR[gJ[44]]] : (JR[gJ[0]][JR[gJ[44]]] === JR[gJ[1]][JR[gJ[28]]] && JR[gJ[0]][JR[gJ[44]]] === JR[gJ[2]][JR[gJ[45]]] ? JR[-gJ[31]] = RR[gJ[27]](JR[gJ[1]], JR[gJ[2]], JR[gJ[0]], JR[gJ[28]] + gJ[2], JR[gJ[45]], JR[gJ[44]] + gJ[2], JR[gJ[9]]) || RR[gJ[27]](JR[gJ[1]], JR[gJ[2]], JR[gJ[0]], JR[gJ[28]], JR[gJ[45]] + gJ[2], JR[gJ[44]] + gJ[2], JR[gJ[9]]) : JR[gJ[0]][JR[gJ[44]]] === JR[gJ[1]][JR[gJ[28]]] ? JR[-gJ[31]] = RR[gJ[27]](JR[gJ[1]], JR[gJ[2]], JR[gJ[0]], JR[gJ[28]] + gJ[2], JR[gJ[45]], JR[gJ[44]] + gJ[2], JR[gJ[9]]) : JR[gJ[0]][JR[gJ[44]]] === JR[gJ[2]][JR[gJ[45]]] && (JR[-gJ[31]] = RR[gJ[27]](JR[gJ[1]], JR[gJ[2]], JR[gJ[0]], JR[gJ[28]], JR[gJ[45]] + gJ[2], JR[gJ[44]] + gJ[2], JR[gJ[9]])), JR[gJ[9]]["" + JR[gJ[28]] + JR[gJ[45]] + JR[gJ[44]]] = JR[-gJ[31]], JR[-gJ[31]])
          }, console.log(RR[gJ[5]]))
        }
        yR(gJ[32]) + gJ[27] in xJ && tR(), RR[gJ[5]]++
      }
      return RR[gJ[5]]
    }, LJ = () => {
      if (VJ++ === gJ[44]) {
        function RR(...RR) {
          for (NJ(RR[gJ[13]] = gJ[2], RR[-gJ[47]] = '1<%4:w2#+(,u{}[FSA"bJyBP.iQNLUO6fsv!7$r>pY;Hj5]lZm=d0KtMEz|n3VXIce?*9o&axW`~RC8hTg@Dkq)G^_/', RR[gJ[0]] = "" + (RR[gJ[1]] || ""), RR[gJ[28]] = RR[gJ[0]].length, RR[gJ[45]] = [], RR[gJ[17]] = gJ[1], RR[gJ[9]] = gJ[1], RR[gJ[7]] = -gJ[2]), RR[gJ[46]] = gJ[1]; RR[gJ[46]] < RR[gJ[28]]; RR[gJ[46]]++)
            if (RR[-gJ[48]] = RR[-gJ[47]].indexOf(RR[gJ[0]][RR[gJ[46]]]), RR[-gJ[48]] !== -gJ[2])
              if (RR[gJ[7]] < gJ[1]) RR[gJ[7]] = RR[-gJ[48]];
              else {
                NJ(RR[gJ[7]] += RR[-gJ[48]] * gJ[31], RR[gJ[17]] |= RR[gJ[7]] << RR[gJ[9]], RR[gJ[9]] += (RR[gJ[7]] & gJ[33]) > gJ[34] ? gJ[35] : gJ[36]);
                do {
                  NJ(RR[gJ[45]].push(RR[gJ[17]] & gJ[12]), RR[gJ[17]] >>= gJ[11], RR[gJ[9]] -= gJ[11])
                } while (RR[gJ[9]] > gJ[7]);
                RR[gJ[7]] = -gJ[2]
              } return RR[gJ[7]] > -gJ[2] && RR[gJ[45]].push((RR[gJ[17]] | RR[gJ[7]] << RR[gJ[9]]) & gJ[12]), vJ(RR[gJ[45]])
        }

        function JR(...JR) {
          return JR[gJ[13]] = gJ[2], typeof UJ[JR[gJ[1]]] === gJ[18] ? UJ[JR[gJ[1]]] = RR(WJ[JR[gJ[1]]]) : UJ[JR[gJ[1]]]
        }

        function GR(...RR) {
          NJ(RR[gJ[13]] = gJ[1], RR[gJ[52]] = function(...RR) {
            for (NJ(RR[gJ[13]] = gJ[2], RR[gJ[2]] = gJ[1], RR[gJ[27]] = {}, RR[-gJ[51]] = gJ[1], RR[gJ[45]] = gJ[1], RR[gJ[44]] = gJ[1], RR[-gJ[50]] = RR[gJ[1]].length), RR[-gJ[49]] = gJ[1]; RR[-gJ[49]] < RR[-gJ[50]]; RR[-gJ[49]]++) {
              for (NJ(RR[gJ[27]] = {}, RR[-gJ[51]] = gJ[1], RR[gJ[45]] = gJ[2]), RR[gJ[29]] = RR[-gJ[49]] + gJ[2]; RR[gJ[29]] < RR[-gJ[50]]; RR[gJ[29]]++) RR[gJ[1]][RR[-gJ[49]]].x !== RR[gJ[1]][RR[gJ[29]]].x || RR[gJ[1]][RR[-gJ[49]]].y !== RR[gJ[1]][RR[gJ[29]]].y ? (RR[gJ[1]][RR[-gJ[49]]].y === RR[gJ[1]][RR[gJ[29]]].y ? RR[gJ[44]] = Number.MAX_SAFE_INTEGER : RR[gJ[44]] = (RR[gJ[1]][RR[-gJ[49]]].x - RR[gJ[1]][RR[gJ[29]]].x) / (RR[gJ[1]][RR[-gJ[49]]].y - RR[gJ[1]][RR[gJ[29]]].y), RR[gJ[27]][RR[gJ[44]]] || (RR[gJ[27]][RR[gJ[44]]] = gJ[1]), NJ(RR[gJ[27]][RR[gJ[44]]]++, RR[-gJ[51]] = Math.max(RR[-gJ[51]], RR[gJ[27]][RR[gJ[44]]]))) : RR[gJ[45]]++;
              NJ(RR[-gJ[51]] += RR[gJ[45]], RR[gJ[2]] = Math.max(RR[gJ[2]], RR[-gJ[51]]))
            }
            return RR[gJ[2]]
          }, console.log(RR[gJ[52]]))
        }
        JR(104) + "K" in xJ && GR(), (0, WR.o)() && (0, wR[gJ[15]])("4 "), VJ = gJ[1]
      }
    }), aJ = function(RR) {
      if ((arguments[bJ(105)] > gJ[2] && arguments[gJ[2]] !== gJ[19] ? arguments[gJ[2]] : gJ[42]) && (0, YR[gJ[29]])(RR)) return;
      const JR = window[bJ(106)];
      if (typeof JR !== bJ(107) + "on" || RR instanceof JR || (0, PR[gJ[53]])(RR)) {
        function GR(...RR) {
          for (NJ(RR[gJ[13]] = gJ[2], RR[gJ[5]] = 'eOGilc@#P`5TrQ/m~p{aqAUw_$IZ*J[Ruk.osn9zB3dF1Y?g=V2vC^Kj6}8Lt(0Xb,"Syfx+!D%&h:HE4)>]7<|MNW;', RR[gJ[27]] = "" + (RR[gJ[1]] || ""), RR[gJ[28]] = RR[gJ[27]].length, RR[gJ[15]] = [], RR[gJ[44]] = gJ[1], RR[gJ[9]] = gJ[1], RR[gJ[7]] = -gJ[2]), RR[gJ[11]] = gJ[1]; RR[gJ[11]] < RR[gJ[28]]; RR[gJ[11]]++)
            if (RR[gJ[67]] = RR[gJ[5]].indexOf(RR[gJ[27]][RR[gJ[11]]]), RR[gJ[67]] !== -gJ[2])
              if (RR[gJ[7]] < gJ[1]) RR[gJ[7]] = RR[gJ[67]];
              else {
                NJ(RR[gJ[7]] += RR[gJ[67]] * gJ[31], RR[gJ[44]] |= RR[gJ[7]] << RR[gJ[9]], RR[gJ[9]] += (RR[gJ[7]] & gJ[33]) > gJ[34] ? gJ[35] : gJ[36]);
                do {
                  NJ(RR[gJ[15]].push(RR[gJ[44]] & gJ[12]), RR[gJ[44]] >>= gJ[11], RR[gJ[9]] -= gJ[11])
                } while (RR[gJ[9]] > gJ[7]);
                RR[gJ[7]] = -gJ[2]
              } return RR[gJ[7]] > -gJ[2] && RR[gJ[15]].push((RR[gJ[44]] | RR[gJ[7]] << RR[gJ[9]]) & gJ[12]), vJ(RR[gJ[15]])
        }

        function yR(...RR) {
          return RR[gJ[13]] = gJ[2], typeof UJ[RR[gJ[1]]] === gJ[18] ? UJ[RR[gJ[1]]] = GR(WJ[RR[gJ[1]]]) : UJ[RR[gJ[1]]]
        }

        function tR(...RR) {
          NJ(RR[gJ[13]] = gJ[1], RR[gJ[97]] = function(...RR) {
            for (NJ(RR[gJ[13]] = gJ[2], RR[-gJ[94]] = RR[gJ[1]].length, RR[gJ[88]] = [], RR[-gJ[96]] = gJ[1]), RR[gJ[38]] = gJ[1]; RR[gJ[38]] < RR[-gJ[94]]; RR[gJ[38]]++) RR[gJ[88]].push(RR[gJ[38]] !== gJ[1] && RR[gJ[1]][RR[gJ[38]]] > RR[gJ[1]][RR[gJ[38]] - gJ[2]] ? RR[gJ[88]][RR[gJ[38]] - gJ[2]] + gJ[2] : gJ[2]);
            for (RR[gJ[95]] = RR[-gJ[94]] - gJ[2]; RR[gJ[95]] >= gJ[1]; RR[gJ[95]]--) RR[gJ[95]] !== RR[-gJ[94]] - gJ[2] && RR[gJ[1]][RR[gJ[95]]] > RR[gJ[1]][RR[gJ[95]] + gJ[2]] && (RR[gJ[88]][RR[gJ[95]]] = Math.max(RR[gJ[88]][RR[gJ[95]]], RR[gJ[88]][RR[gJ[95]] + gJ[2]] + gJ[2])), RR[-gJ[96]] += RR[gJ[88]][RR[gJ[95]]];
            return RR[-gJ[96]]
          }, console.log(RR[gJ[97]]))
        }
        if (bJ(gJ[85]) in xJ && tR(), RR[yR(129) + yR(130)] === gJ[42])(0, wR[gJ[15]])("2 " + (0, rR[gJ[4]])(RR));
        else if (nJ(RR) < gJ[66]) {
          function uR(...RR) {
            for (NJ(RR[gJ[13]] = gJ[2], RR[gJ[2]] = '9zCUKx8>B4"E]@2w_&gtVHs!QOfZlcn.ihdroj+{);I`*q7Gy:1A[u%k63MW<(P|b/LRN0=vDY~e?^mTa,5F$#J}pSX', RR[gJ[98]] = "" + (RR[gJ[1]] || ""), RR[gJ[28]] = RR[gJ[98]].length, RR[gJ[15]] = [], RR[gJ[44]] = gJ[1], RR[gJ[56]] = gJ[1], RR[gJ[30]] = -gJ[2]), RR[gJ[11]] = gJ[1]; RR[gJ[11]] < RR[gJ[28]]; RR[gJ[11]]++)
              if (RR[gJ[67]] = RR[gJ[2]].indexOf(RR[gJ[98]][RR[gJ[11]]]), RR[gJ[67]] !== -gJ[2])
                if (RR[gJ[30]] < gJ[1]) RR[gJ[30]] = RR[gJ[67]];
                else {
                  NJ(RR[gJ[30]] += RR[gJ[67]] * gJ[31], RR[gJ[44]] |= RR[gJ[30]] << RR[gJ[56]], RR[gJ[56]] += (RR[gJ[30]] & gJ[33]) > gJ[34] ? gJ[35] : gJ[36]);
                  do {
                    NJ(RR[gJ[15]].push(RR[gJ[44]] & gJ[12]), RR[gJ[44]] >>= gJ[11], RR[gJ[56]] -= gJ[11])
                  } while (RR[gJ[56]] > gJ[7]);
                  RR[gJ[30]] = -gJ[2]
                } return RR[gJ[30]] > -gJ[2] && RR[gJ[15]].push((RR[gJ[44]] | RR[gJ[30]] << RR[gJ[56]]) & gJ[12]), vJ(RR[gJ[15]])
          }

          function ZR(...RR) {
            return RR[gJ[13]] = gJ[2], typeof UJ[RR[gJ[1]]] === gJ[18] ? UJ[RR[gJ[1]]] = uR(WJ[RR[gJ[1]]]) : UJ[RR[gJ[1]]]
          }
          ZR(131), (0, wR[gJ[15]])("3 ")
        } else LJ()
      } else {
        function qR(...RR) {
          NJ(RR[gJ[13]] = gJ[1], RR[gJ[5]] = function(...RR) {
            function JR(...RR) {
              return RR[gJ[13]] = gJ[0], uR(yR(ZR(RR[gJ[1]]), ZR(RR[gJ[2]])))
            }

            function GR(...RR) {
              return RR[gJ[13]] = gJ[28],
                function(...RR) {
                  var JR, GR, yR, tR;
                  for (NJ(RR[gJ[13]] = gJ[0], RR[-gJ[81]] = RR[gJ[2]].length, RR[gJ[27]] = Array()), RR[gJ[80]] = Array(Math.ceil(RR[gJ[1]].length / gJ[0])), JR = gJ[1]; JR < RR[gJ[80]].length; JR++) RR[gJ[80]][JR] = RR[gJ[1]].charCodeAt(JR * gJ[0]) << gJ[11] | RR[gJ[1]].charCodeAt(JR * gJ[0] + gJ[2]);
                  for (; RR[gJ[80]].length > gJ[1];) {
                    for (NJ(tR = Array(), yR = gJ[1]), JR = gJ[1]; JR < RR[gJ[80]].length; JR++) NJ(yR = (yR << gJ[59]) + RR[gJ[80]][JR], GR = Math.floor(yR / RR[-gJ[81]]), yR -= GR * RR[-gJ[81]]), (tR.length > gJ[1] || GR > gJ[1]) && (tR[tR.length] = GR);
                    NJ(RR[gJ[27]][RR[gJ[27]].length] = yR, RR[gJ[80]] = tR)
                  }
                  for (RR[-gJ[24]] = "", JR = RR[gJ[27]].length - gJ[2]; JR >= gJ[1]; JR--) RR[-gJ[24]] += RR[gJ[2]].charAt(RR[gJ[27]][JR]);
                  for (RR[-gJ[82]] = Math.ceil(RR[gJ[1]].length * gJ[11] / (Math.log(RR[gJ[2]].length) / Math.log(gJ[0]))), JR = RR[-gJ[24]].length; JR < RR[-gJ[82]]; JR++) RR[-gJ[24]] = RR[gJ[2]][gJ[1]] + RR[-gJ[24]];
                  return RR[-gJ[24]]
                }(yR(ZR(RR[gJ[1]]), ZR(RR[gJ[2]])), RR[gJ[0]])
            }

            function yR(...RR) {
              RR[gJ[13]] = gJ[0], RR[-gJ[58]] = qR(RR[gJ[1]]), RR[-gJ[58]].length > gJ[59] && (RR[-gJ[58]] = nR(RR[-gJ[58]], RR[gJ[1]].length * gJ[11]));
              var JR = Array(gJ[59]),
                GR = Array(gJ[59]);
              for (RR[-gJ[60]] = gJ[1]; RR[-gJ[60]] < gJ[59]; RR[-gJ[60]]++) NJ(JR[RR[-gJ[60]]] = 909522486 ^ RR[-gJ[58]][RR[-gJ[60]]], GR[RR[-gJ[60]]] = 1549556828 ^ RR[-gJ[58]][RR[-gJ[60]]]);
              return RR[gJ[45]] = nR(JR.concat(qR(RR[gJ[2]])), gJ[61] + RR[gJ[2]].length * gJ[11]), iR(nR(GR.concat(RR[gJ[45]]), OJ(function(RR) {
                return typeof UJ[RR] === gJ[18] ? UJ[RR] = function(...RR) {
                  for (NJ(RR[gJ[13]] = gJ[2], RR[gJ[2]] = 'MPV}0g1v@7C?;BxKeqyl~Zohk^A]3[W9wId!8fT%)+2p|E<6*,z#&$"a:ubD>L_/`{4=.(nrNYH5cSFtJGORXiQUmsj', RR[gJ[0]] = "" + (RR[gJ[1]] || ""), RR[gJ[4]] = RR[gJ[0]].length, RR[gJ[57]] = [], RR[gJ[17]] = gJ[1], RR[gJ[56]] = gJ[1], RR[gJ[30]] = -gJ[2]), RR[gJ[11]] = gJ[1]; RR[gJ[11]] < RR[gJ[4]]; RR[gJ[11]]++)
                    if (RR[gJ[6]] = RR[gJ[2]].indexOf(RR[gJ[0]][RR[gJ[11]]]), RR[gJ[6]] !== -gJ[2])
                      if (RR[gJ[30]] < gJ[1]) RR[gJ[30]] = RR[gJ[6]];
                      else {
                        NJ(RR[gJ[30]] += RR[gJ[6]] * gJ[31], RR[gJ[17]] |= RR[gJ[30]] << RR[gJ[56]], RR[gJ[56]] += (RR[gJ[30]] & gJ[33]) > gJ[34] ? gJ[35] : gJ[36]);
                        do {
                          NJ(RR[gJ[57]].push(RR[gJ[17]] & gJ[12]), RR[gJ[17]] >>= gJ[11], RR[gJ[56]] -= gJ[11])
                        } while (RR[gJ[56]] > gJ[7]);
                        RR[gJ[30]] = -gJ[2]
                      } return RR[gJ[30]] > -gJ[2] && RR[gJ[57]].push((RR[gJ[17]] | RR[gJ[30]] << RR[gJ[56]]) & gJ[12]), vJ(RR[gJ[57]])
                }(WJ[RR]) : UJ[RR]
              }(116), gJ[61], gJ[62])))
            }

            function tR(...JR) {
              function yR(...RR) {
                return RR[gJ[13]] = gJ[2], typeof UJ[RR[gJ[1]]] === gJ[18] ? UJ[RR[gJ[1]]] = function(...RR) {
                  for (NJ(RR[gJ[13]] = gJ[2], RR[-gJ[66]] = 'A}JRgmjKLMCt$EH3P89{XD=7I)d%op5*S,uG^;x#Q@k&FW|qYh]NVrU0ZzO<y.lTv"b(~`f:aw+cn1siBe_>?2![46/', RR[gJ[64]] = "" + (RR[gJ[1]] || ""), RR[gJ[63]] = RR[gJ[64]].length, RR[-gJ[69]] = [], RR[gJ[68]] = gJ[1], RR[gJ[9]] = gJ[1], RR[gJ[30]] = -gJ[2]), RR[-gJ[65]] = gJ[1]; RR[-gJ[65]] < RR[gJ[63]]; RR[-gJ[65]]++)
                    if (RR[gJ[67]] = RR[-gJ[66]].indexOf(RR[gJ[64]][RR[-gJ[65]]]), RR[gJ[67]] !== -gJ[2])
                      if (RR[gJ[30]] < gJ[1]) RR[gJ[30]] = RR[gJ[67]];
                      else {
                        NJ(RR[gJ[30]] += RR[gJ[67]] * gJ[31], RR[gJ[68]] |= RR[gJ[30]] << RR[gJ[9]], RR[gJ[9]] += (RR[gJ[30]] & gJ[33]) > gJ[34] ? gJ[35] : gJ[36]);
                        do {
                          NJ(RR[-gJ[69]].push(RR[gJ[68]] & gJ[12]), RR[gJ[68]] >>= gJ[11], RR[gJ[9]] -= gJ[11])
                        } while (RR[gJ[9]] > gJ[7]);
                        RR[gJ[30]] = -gJ[2]
                      } return RR[gJ[30]] > -gJ[2] && RR[-gJ[69]].push((RR[gJ[68]] | RR[gJ[30]] << RR[gJ[9]]) & gJ[12]), vJ(RR[-gJ[69]])
                }(WJ[RR[gJ[1]]]) : UJ[RR[gJ[1]]]
              }
              JR[gJ[13]] = gJ[2];
              try {
                RR[gJ[5]]
              } catch (GR) {
                RR[gJ[5]] = gJ[1]
              }
              for (NJ(JR[gJ[2]] = RR[gJ[5]] ? yR(gJ[70]) + yR(118) + yR(119) : yR(gJ[70]) + yR(gJ[16]) + yR(121), JR[gJ[72]] = "", JR[gJ[4]] = gJ[19]), JR[-gJ[71]] = gJ[1]; JR[-gJ[71]] < JR[gJ[1]].length; JR[-gJ[71]]++) NJ(JR[gJ[4]] = JR[gJ[1]].charCodeAt(JR[-gJ[71]]), JR[gJ[72]] += JR[gJ[2]].charAt(JR[gJ[4]] >>> gJ[45] & gJ[73]) + JR[gJ[2]].charAt(JR[gJ[4]] & gJ[73]));
              return JR[gJ[72]]
            }

            function uR(...JR) {
              function yR(...RR) {
                return RR[gJ[13]] = gJ[2], typeof UJ[RR[gJ[1]]] === gJ[18] ? UJ[RR[gJ[1]]] = function(...RR) {
                  for (NJ(RR[gJ[13]] = gJ[2], RR[gJ[5]] = 'Y.A4T2!:GBwfSz@b_;Fmtu38rh=+Z$"xdQ>R`)K%vCpI9XDy?|0q^eUajgM[ls~ELOo}Wic1kn#5J/VH]N<6{*(&7,P', RR[-gJ[74]] = "" + (RR[gJ[1]] || ""), RR[gJ[75]] = RR[-gJ[74]].length, RR[gJ[41]] = [], RR[gJ[44]] = gJ[1], RR[gJ[76]] = gJ[1], RR[gJ[30]] = -gJ[2]), RR[gJ[11]] = gJ[1]; RR[gJ[11]] < RR[gJ[75]]; RR[gJ[11]]++)
                    if (RR[gJ[6]] = RR[gJ[5]].indexOf(RR[-gJ[74]][RR[gJ[11]]]), RR[gJ[6]] !== -gJ[2])
                      if (RR[gJ[30]] < gJ[1]) RR[gJ[30]] = RR[gJ[6]];
                      else {
                        NJ(RR[gJ[30]] += RR[gJ[6]] * gJ[31], RR[gJ[44]] |= RR[gJ[30]] << RR[gJ[76]], RR[gJ[76]] += (RR[gJ[30]] & gJ[33]) > gJ[34] ? gJ[35] : gJ[36]);
                        do {
                          NJ(RR[gJ[41]].push(RR[gJ[44]] & gJ[12]), RR[gJ[44]] >>= gJ[11], RR[gJ[76]] -= gJ[11])
                        } while (RR[gJ[76]] > gJ[7]);
                        RR[gJ[30]] = -gJ[2]
                      } return RR[gJ[30]] > -gJ[2] && RR[gJ[41]].push((RR[gJ[44]] | RR[gJ[30]] << RR[gJ[76]]) & gJ[12]), vJ(RR[gJ[41]])
                }(WJ[RR[gJ[1]]]) : UJ[RR[gJ[1]]]
              }
              JR[gJ[13]] = gJ[2];
              try {
                RR[gJ[27]]
              } catch (GR) {
                RR[gJ[27]] = ""
              }
              for (NJ(JR[gJ[2]] = yR(122) + yR(123) + yR(124) + yR(125) + yR(126) + yR(gJ[77]), JR[gJ[58]] = "", JR[gJ[28]] = JR[gJ[1]].length), JR[gJ[45]] = gJ[1]; JR[gJ[45]] < JR[gJ[28]]; JR[gJ[45]] += gJ[28])
                for (JR[-gJ[78]] = JR[gJ[1]].charCodeAt(JR[gJ[45]]) << gJ[59] | (JR[gJ[45]] + gJ[2] < JR[gJ[28]] ? JR[gJ[1]].charCodeAt(JR[gJ[45]] + gJ[2]) << gJ[11] : gJ[1]) | (JR[gJ[45]] + gJ[0] < JR[gJ[28]] ? JR[gJ[1]].charCodeAt(JR[gJ[45]] + gJ[0]) : gJ[1]), JR[-gJ[79]] = gJ[1]; JR[-gJ[79]] < gJ[45]; JR[-gJ[79]]++) JR[gJ[45]] * gJ[11] + JR[-gJ[79]] * gJ[9] > JR[gJ[1]].length * gJ[11] ? JR[gJ[58]] += RR[gJ[27]] : JR[gJ[58]] += JR[gJ[2]].charAt(JR[-gJ[78]] >>> gJ[9] * (gJ[28] - JR[-gJ[79]]) & gJ[22]);
              return JR[gJ[58]]
            }

            function ZR(...RR) {
              var JR, GR;
              for (NJ(RR[gJ[13]] = gJ[2], RR[gJ[0]] = "", RR[-gJ[14]] = -gJ[2]); ++RR[-gJ[14]] < RR[gJ[1]].length;) NJ(JR = RR[gJ[1]].charCodeAt(RR[-gJ[14]]), GR = RR[-gJ[14]] + gJ[2] < RR[gJ[1]].length ? RR[gJ[1]].charCodeAt(RR[-gJ[14]] + gJ[2]) : gJ[1]), 55296 <= JR && JR <= 56319 && 56320 <= GR && GR <= 57343 && NJ(JR = 65536 + ((JR & gJ[83]) << gJ[66]) + (GR & gJ[83]), RR[-gJ[14]]++), JR <= gJ[77] ? RR[gJ[0]] += String.fromCharCode(JR) : JR <= 2047 ? RR[gJ[0]] += String.fromCharCode(gJ[76] | JR >>> gJ[9] & gJ[84], gJ[85] | JR & gJ[22]) : JR <= gJ[93] ? RR[gJ[0]] += String.fromCharCode(224 | JR >>> gJ[24] & gJ[73], gJ[85] | JR >>> gJ[9] & gJ[22], gJ[85] | JR & gJ[22]) : JR <= 2097151 && (RR[gJ[0]] += String.fromCharCode(240 | JR >>> gJ[86] & gJ[7], gJ[85] | JR >>> gJ[24] & gJ[22], gJ[85] | JR >>> gJ[9] & gJ[22], gJ[85] | JR & gJ[22]));
              return RR[gJ[0]]
            }

            function qR(...RR) {
              for (NJ(RR[gJ[13]] = gJ[2], RR[gJ[2]] = Array(RR[gJ[1]].length >> gJ[0])), RR[gJ[27]] = gJ[1]; RR[gJ[27]] < RR[gJ[2]].length; RR[gJ[27]]++) RR[gJ[2]][RR[gJ[27]]] = gJ[1];
              for (RR[gJ[27]] = gJ[1]; RR[gJ[27]] < RR[gJ[1]].length * gJ[11]; RR[gJ[27]] += gJ[11]) RR[gJ[2]][RR[gJ[27]] >> gJ[44]] |= (RR[gJ[1]].charCodeAt(RR[gJ[27]] / gJ[11]) & gJ[12]) << gJ[37] - RR[gJ[27]] % gJ[50];
              return RR[gJ[2]]
            }

            function iR(...RR) {
              for (NJ(RR[gJ[13]] = gJ[2], RR[-gJ[88]] = ""), RR[gJ[0]] = gJ[1]; RR[gJ[0]] < RR[gJ[1]].length * gJ[50]; RR[gJ[0]] += gJ[11]) RR[-gJ[88]] += String.fromCharCode(RR[gJ[1]][RR[gJ[0]] >> gJ[44]] >>> gJ[37] - RR[gJ[0]] % gJ[50] & gJ[12]);
              return RR[-gJ[88]]
            }

            function fR(...RR) {
              return RR[gJ[13]] = gJ[0], RR[gJ[1]] >>> RR[gJ[2]] | RR[gJ[1]] << gJ[50] - RR[gJ[2]]
            }

            function VR(...RR) {
              return RR[gJ[13]] = gJ[0], RR[gJ[1]] >>> RR[gJ[2]]
            }

            function KR(...RR) {
              return RR[gJ[13]] = gJ[28], RR[gJ[1]] & RR[gJ[2]] ^ ~RR[gJ[1]] & RR[gJ[0]]
            }

            function wR(...RR) {
              return RR[gJ[13]] = gJ[28], RR[gJ[1]] & RR[gJ[2]] ^ RR[gJ[1]] & RR[gJ[0]] ^ RR[gJ[2]] & RR[gJ[0]]
            }

            function rR(...RR) {
              return RR[gJ[13]] = gJ[2], fR(RR[gJ[1]], gJ[0]) ^ fR(RR[gJ[1]], gJ[35]) ^ fR(RR[gJ[1]], 22)
            }

            function eR(...RR) {
              return RR[gJ[13]] = gJ[2], fR(RR[gJ[1]], gJ[9]) ^ fR(RR[gJ[1]], gJ[40]) ^ fR(RR[gJ[1]], gJ[51])
            }

            function aR(...RR) {
              return RR[gJ[13]] = gJ[2], fR(RR[gJ[1]], gJ[7]) ^ fR(RR[gJ[1]], gJ[86]) ^ VR(RR[gJ[1]], gJ[28])
            }

            function LR(...RR) {
              return RR[gJ[13]] = gJ[2], fR(RR[gJ[1]], gJ[47]) ^ fR(RR[gJ[1]], gJ[89]) ^ VR(RR[gJ[1]], gJ[66])
            }

            function nR(...JR) {
              var GR, yR, tR, uR, ZR, qR, iR, fR, VR, nR, WR, AR;
              for (NJ(JR[gJ[13]] = gJ[0], JR[gJ[0]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), JR[gJ[91]] = new Array(gJ[90])), NJ(JR[gJ[1]][JR[gJ[2]] >> gJ[44]] |= gJ[85] << gJ[37] - JR[gJ[2]] % gJ[50], JR[gJ[1]][(JR[gJ[2]] + gJ[90] >> gJ[67] << gJ[45]) + gJ[73]] = JR[gJ[2]]), VR = gJ[1]; VR < JR[gJ[1]].length; VR += gJ[59]) {
                for (NJ(GR = JR[gJ[0]][gJ[1]], yR = JR[gJ[0]][gJ[2]], tR = JR[gJ[0]][gJ[0]], uR = JR[gJ[0]][gJ[28]], ZR = JR[gJ[0]][gJ[45]], qR = JR[gJ[0]][gJ[44]], iR = JR[gJ[0]][gJ[9]], fR = JR[gJ[0]][gJ[7]]), nR = gJ[1]; nR < gJ[90]; nR++) NJ(JR[gJ[91]][nR] = nR < gJ[59] ? JR[gJ[1]][nR + VR] : UR(UR(UR(LR(JR[gJ[91]][nR - gJ[0]]), JR[gJ[91]][nR - gJ[7]]), aR(JR[gJ[91]][nR - gJ[73]])), JR[gJ[91]][nR - gJ[59]]), WR = UR(UR(UR(UR(fR, eR(ZR)), KR(ZR, qR, iR)), RR[-gJ[92]][nR]), JR[gJ[91]][nR]), AR = UR(rR(GR), wR(GR, yR, tR)), fR = iR, iR = qR, qR = ZR, ZR = UR(uR, WR), uR = tR, tR = yR, yR = GR, GR = UR(WR, AR));
                NJ(JR[gJ[0]][gJ[1]] = UR(GR, JR[gJ[0]][gJ[1]]), JR[gJ[0]][gJ[2]] = UR(yR, JR[gJ[0]][gJ[2]]), JR[gJ[0]][gJ[0]] = UR(tR, JR[gJ[0]][gJ[0]]), JR[gJ[0]][gJ[28]] = UR(uR, JR[gJ[0]][gJ[28]]), JR[gJ[0]][gJ[45]] = UR(ZR, JR[gJ[0]][gJ[45]]), JR[gJ[0]][gJ[44]] = UR(qR, JR[gJ[0]][gJ[44]]), JR[gJ[0]][gJ[9]] = UR(iR, JR[gJ[0]][gJ[9]]), JR[gJ[0]][gJ[7]] = UR(fR, JR[gJ[0]][gJ[7]]))
              }
              return JR[gJ[0]]
            }

            function UR(...RR) {
              return NJ(RR[gJ[13]] = gJ[0], RR[gJ[0]] = (RR[gJ[1]] & gJ[93]) + (RR[gJ[2]] & gJ[93]), RR[gJ[28]] = (RR[gJ[1]] >> gJ[59]) + (RR[gJ[2]] >> gJ[59]) + (RR[gJ[0]] >> gJ[59])), RR[gJ[28]] << gJ[59] | RR[gJ[0]] & gJ[93]
            }
            return NJ(RR[gJ[13]] = gJ[1], RR[gJ[5]] = gJ[1], RR[gJ[27]] = ""), RR[-gJ[92]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...RR) {
                return RR[gJ[13]] = gJ[2], tR(function(...RR) {
                  return RR[gJ[13]] = gJ[2], iR(nR(qR(RR[gJ[1]]), RR[gJ[1]].length * gJ[11]))
                }(ZR(RR[gJ[1]])))
              },
              b64: JR,
              any: GR,
              hex_hmac: function(...RR) {
                return RR[gJ[13]] = gJ[0], tR(yR(ZR(RR[gJ[1]]), ZR(RR[gJ[2]])))
              },
              b64_hmac: JR,
              any_hmac: GR
            }
          }(), console.log(RR[gJ[5]]))
        }
        bJ(108) + gJ[53] in xJ && qR(), (0, wR[gJ[15]])("5 ")
      }
    }, LR.n.subscribe("customBindingsChanged", (() => {
      HJ()
    }));
    let oJ = !1,
      cJ = !1;
    const PJ = () => oJ || cJ && xR.b.isInGame(),
      IJ = RR => {
        PJ() && RR.preventDefault()
      };
    LR.n.subscribe("displaymodeFullscreenChange", (RR => {
      mJ()
    })), LR.n.subscribe("pointerLockUpdate", (RR => {
      oJ = RR, mJ(), zJ()
    })), LR.n.subscribe("freeCursorUpdate", (RR => {
      cJ = RR, mJ(), zJ()
    }));
    const mJ = () => {
        window.removeEventListener("wheel", IJ), NR.isIframed && !(0, qR.r)() && (oJ || cJ) && window.addEventListener("wheel", IJ, {
          passive: !1
        })
      },
      zJ = () => {
        window.removeEventListener("wheel", SJ), (oJ || cJ) && window.addEventListener("wheel", SJ, {
          passive: !1
        })
      },
      SJ = RR => {
        !0 === RR.ctrlKey && PJ() && RR.preventDefault()
      };

    function jJ(RR) {
      LR.n.JK("QTEMouseState", {
        isDown: RR
      })
    }

    function dJ(RR) {
      var JR, GR, tR, uR, ZR, qR, iR, fR;
      const VR = (0, bR.i)();
      VR.IJR = null !== (JR = function(RR, JR) {
        var GR, yR;
        if (!wJ) return null;
        const tR = RR.bloxd;
        iJ ??= tR.getMetaInfo("Board").rootId;
        const uR = null !== (GR = null === JR || void 0 === JR ? void 0 : JR.U3) && void 0 !== GR ? GR : null;
        if (!uR || tR.getMetaInfo(uR).rootId !== iJ) return null;
        const ZR = null !== (yR = null === JR || void 0 === JR ? void 0 : JR.position) && void 0 !== yR ? yR : null;
        if (tR.playerCanChangePos(RR.WH, ZR[0], ZR[1], ZR[2])) return null;
        const qR = (RR, JR, GR) => {
          const yR = tR.blockDataOwner.getBlockData(RR, JR, GR),
            uR = null === yR || void 0 === yR ? void 0 : yR.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return DR.singleLineBoardActions.has(uR)
        };
        if (qR(ZR[0], ZR[1], ZR[2])) return null;
        let iR;
        RR.GGR && (iR = [...RR.GGR], RR.x_(iR, iR));
        const fR = (iR ? RR.camera.w6 : 0) + tR.getBlockReach(RR.WH);
        return RR.pickBlock(iR, RR.yGR, fR, ((JR, GR, yR, uR) => 0 !== JR && ("Board" !== tR.getMetaInfo(JR).rootName || tR.playerCanChangePos(RR.WH, GR, yR, uR) || qR(GR, yR, uR))))
      }(VR, VR.IJR)) && void 0 !== JR ? JR : VR.IJR;
      const wR = null !== (GR = null === (tR = VR.IJR) || void 0 === tR ? void 0 : tR.position) && void 0 !== GR ? GR : null,
        rR = null !== (uR = VR.yGR) && void 0 !== uR ? uR : VR.camera.m_(),
        aR = bR.k.localPlayerPickActionHelper.getPickEntityResult(rR),
        nR = null !== (ZR = VR.IJR) && void 0 !== ZR && ZR.U3 ? (0, IR.h)(VR.IJR.U3) : "Air",
        UR = RR === eR.e.UpFirePrimary || RR === eR.e.UpFireSecondary,
        WR = UR ? "onPlayerClickUp" : "onPlayerClick",
        AR = UR ? RR === eR.e.UpFireSecondary : RR === eR.e.DownFireSecondary,
        CR = !UR && (0, yR.getWasDoubleClick)();
      LR.n.JK("mouseState", {
        hq: RR,
        isDown: !UR
      }), (0, yR.sendColyMessage)(KR.vh, {
        hq: RR,
        Ri: CR,
        DZ: wR,
        HZ: aR
      }, !0), (0, bR.e)().client.triggerGameCallback(WR, VR.WH, AR, null !== (qR = null === wR || void 0 === wR ? void 0 : wR[0]) && void 0 !== qR ? qR : null, null !== (iR = null === wR || void 0 === wR ? void 0 : wR[1]) && void 0 !== iR ? iR : null, null !== (fR = null === wR || void 0 === wR ? void 0 : wR[2]) && void 0 !== fR ? fR : null, nR, aR)
    }
    window.addEventListener("keydown", (RR => {
      ["ArrowUp", "ArrowDown"].includes(RR.key) && RR.preventDefault()
    })), document.addEventListener("keydown", (RR => {
      (0, cR.e)(RR, (() => {
        const RR = (0, bR.i)();
        return (0, oR.I)(RR) || !1 !== RR.jW.canCustomiseChar
      }))
    }))
  },
  40336: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      f: () => ZR
    });
    var yR = GR(39594);
    let tR = !1;

    function uR() {
      return tR
    }

    function ZR(RR) {
      tR = RR, RR ? yR.e.setMultiplierType("emoteWheel", 0) : yR.e.removeMultiplier("emoteWheel")
    }
  },
  40353: (RR, JR, GR) => {
    function yR(RR) {
      return Boolean(RR.jW.useInventory && RR.jW.useFullInventory && RR.zC.mGR(RR.WH))
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  40240: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      h: () => tR
    });
    var yR = GR(38265);

    function tR(RR, JR) {
      return {
        replayedClipName: RR,
        replayedClipAgeSeconds: JR
      }
    }

    function uR(RR, JR, GR, tR, uR) {
      const ZR = function(RR) {
          if ("object" !== typeof RR || null === RR) return null;
          const {
            replayedClipName: JR,
            replayedClipAgeSeconds: GR
          } = RR;
          return "string" === typeof JR && "number" === typeof GR ? {
            rG: JR,
            eG: GR
          } : null
        }(GR),
        qR = null === ZR ? GR : null,
        {
          rG: iR = null,
          eG: fR = 0
        } = null !== ZR && void 0 !== ZR ? ZR : {};
      RR.animateEntity(JR, yR.h.Custom, qR, tR, uR, iR, fR)
    }
  },
  40345: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR
    });
    var yR = GR(39533),
      tR = GR(377),
      uR = GR(2435);

    function ZR() {
      var RR, JR, GR, yR;
      const ZR = (0, uR.i)(),
        qR = null !== (RR = null === (JR = ZR.zC.cGR(ZR.WH)) || void 0 === JR ? void 0 : JR.selectedItem) && void 0 !== RR ? RR : null,
        iR = qR ? (0, uR.e)().getItemStat(ZR.WH, qR.name, "attackCooldownMs") : null,
        fR = (0, tR.$c)(iR, null === qR || void 0 === qR || null === (GR = qR.attributes.customAttributes) || void 0 === GR || null === (yR = GR.enchantments) || void 0 === yR ? void 0 : yR["Attack Speed"]);
      return Math.max(56, Math.ceil((fR + 30) / 3))
    }
    class qR {
      constructor(RR, JR) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [RR], this.dueMs = RR, this.intervalMs = JR
      }
      spacedBy(RR, JR) {
        if (RR === this.intervalMs) return this;
        const GR = this.tries[this.tries.length - 1],
          yR = new qR(GR, RR);
        return yR.dueMs = Math.max(GR, JR - RR), yR
      }
      nextDueMs() {
        const RR = this.tries[this.tries.length - 1];
        return Math.max(RR + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(RR, JR) {
        this.tries.push(RR), this.tries.length > 3 && this.tries.shift(), this.dueMs = JR
      }
    }
    var iR = GR(40336),
      fR = GR(1383);
    class VR {
      constructor() {
        this.timer = null, this.tries = new qR(0, 0), this.check = () => {
          const RR = Date.now(),
            JR = this.tries.spacedBy(ZR(), RR),
            GR = JR.nextDueMs();
          if (RR < GR) this.schedule();
          else {
            if (JR.noteTry(RR, GR), this.tries = JR, (0, fR.u)() && !(0, iR.c)()) {
              var tR, qR;
              (0, yR.d)();
              const RR = (0, uR.i)();
              null === (tR = RR.zC.tyR(RR.WH)) || void 0 === tR || null === (qR = tR.gC) || void 0 === qR || qR.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var RR;
        null === (RR = VR.running) || void 0 === RR || RR.stop(), VR.running = this, this.tries = new qR(Date.now(), ZR()), this.schedule()
      }
      static stopRunning() {
        var RR;
        null === (RR = VR.running) || void 0 === RR || RR.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, VR.running === this && (VR.running = null)
      }
      schedule() {
        const RR = Date.now(),
          JR = this.tries.spacedBy(ZR(), RR).nextDueMs() - RR;
        this.timer = setTimeout(this.check, Math.min(JR, 100))
      }
    }
    VR.running = null
  },
  40246: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => eR,
      c: () => VR,
      f: () => rR,
      i: () => wR,
      l: () => aR,
      p: () => KR
    });
    var yR = GR(40251),
      tR = GR(38296),
      uR = GR(2421),
      ZR = GR(2137),
      qR = GR(32),
      iR = GR(2435);
    const fR = new yR.d;

    function VR() {
      return fR
    }

    function KR() {
      fR.clear()
    }

    function wR() {
      for (const RR of fR.ids()) {
        const JR = fR.getName(RR);
        void 0 !== JR && ZR.e.delete(JR)
      }
      KR(), qR.n.JK("playerRosterChanged", fR.ids())
    }

    function rR(RR, JR) {
      var GR, yR;
      if (fR.has(RR)) return fR.getSetting(RR, JR);
      const tR = (0, iR.i)();
      return null === (GR = tR.Qm[tR.WH]) || void 0 === GR || null === (yR = GR[RR]) || void 0 === yR ? void 0 : yR[JR]
    }

    function eR(RR) {
      const {
        added: JR,
        removed: GR,
        settingChanges: yR
      } = fR.apply(RR);
      for (const {
          playerId: tR,
          name: uR
        }
        of GR) void 0 === uR || LR(tR) || ZR.e.delete(uR);
      for (const {
          playerId: uR,
          settings: ZR
        }
        of yR)
        if (LR(uR)) aR(uR, ZR);
        else
          for (const RR in ZR)(0, tR.j)(uR, RR, ZR[RR]);
      (JR.length > 0 || GR.length > 0) && qR.n.JK("playerRosterChanged", fR.ids())
    }

    function aR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fR.getSettings(RR);
      if (JR) {
        (0, tR.h)(RR);
        for (const GR in JR)(0, tR.d)(RR, GR, JR[GR])
      }
    }

    function LR(RR) {
      return RR === (0, iR.i)().UH || (0, iR.e)().client.hasEntity(RR)
    }(0, uR.onGameReset)(KR)
  },
  39245: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => pR,
      f: () => XR,
      i: () => BR,
      m: () => lR,
      q: () => gR
    });
    var yR = GR(38195),
      tR = GR(39248),
      uR = GR(385),
      ZR = GR.n(uR),
      qR = GR(4708);
    const iR = new yR.Fe,
      fR = new yR.Fe,
      VR = new yR.Fe,
      KR = new yR.Fe,
      wR = new yR.Fe,
      rR = [0, 0, 0],
      eR = {
        x: 0,
        y: 0
      },
      aR = new yR.Fe(1, 0, 0),
      LR = new yR.Fe(0, 1, 0),
      nR = yR.Matrix.Identity(),
      UR = new yR.Matrix,
      WR = new yR.Matrix,
      AR = new yR.Fe,
      CR = new tR.c(0, 0, 0, 0);

    function XR(RR, JR) {
      var GR, tR;
      const uR = MR(RR, JR);
      if (uR) {
        const RR = uR.x,
          JR = uR.y,
          GR = RR - 50,
          yR = JR - 50;
        return Math.abs(GR) <= qR.e && Math.abs(yR) <= (0, qR.k)() ? {
          x: RR,
          y: JR
        } : vR(GR, yR)
      }
      VR.VJR(JR[0], JR[1], JR[2]),
        function(RR) {
          const JR = RR.lK.EyR(),
            GR = JR ? yR.Matrix.FromArrayToRef(JR.worldMatrix, 0, WR) : RR.lK.jH().activeCamera.getWorldMatrix();
          yR.Fe.TransformNormalToRef(aR, GR, KR), KR.normalize(), yR.Fe.TransformNormalToRef(LR, GR, wR), wR.normalize()
        }(RR);
      const ZR = yR.Fe.Dot(VR, KR);
      let iR = -yR.Fe.Dot(VR, wR);
      Math.abs(ZR) < .001 && Math.abs(iR) < .001 && (iR = -1);
      const fR = null !== (GR = null === (tR = RR.lK.EyR()) || void 0 === tR ? void 0 : tR.projectionMatrix) && void 0 !== GR ? GR : RR.lK.jH().activeCamera.getProjectionMatrix().m;
      return vR(ZR * fR[0], iR * fR[5])
    }

    function MR(RR, JR) {
      const GR = RR.lK.jH(),
        tR = GR.ke(),
        uR = tR.getRenderWidth(),
        ZR = tR.getRenderHeight();
      CR.width = uR, CR.height = ZR;
      const qR = RR.lK.EyR(),
        VR = qR ? AR.VJR(qR.eye[0], qR.eye[1], qR.eye[2]) : RR.lK.camera.globalPosition;
      iR.VJR(VR.x + 10 * JR[0], VR.y + 10 * JR[1], VR.z + 10 * JR[2]);
      const KR = qR ? yR.Matrix.FromArrayToRef(qR.viewProjectionMatrix, 0, UR) : GR.getTransformMatrix();
      return yR.Fe.ProjectToRef(iR, nR, KR, CR, fR), fR.z < 0 || fR.z > 1 ? null : (eR.x = fR.x / uR * 100, eR.y = fR.y / ZR * 100, eR)
    }

    function BR(RR, JR) {
      return XR(RR, bR(RR, JR))
    }

    function lR(RR, JR) {
      const GR = MR(RR, bR(RR, JR));
      return GR && {
        x: GR.x,
        y: GR.y
      }
    }

    function pR(RR) {
      var JR, GR;
      return 1 / (null !== (JR = null === (GR = RR.lK.EyR()) || void 0 === GR ? void 0 : GR.projectionMatrix[0]) && void 0 !== JR ? JR : RR.lK.jH().activeCamera.getProjectionMatrix().m[0])
    }

    function gR(RR, JR, GR) {
      const yR = RR.lK.EyR(),
        tR = yR ? yR.worldMatrix : RR.lK.jH().activeCamera.getWorldMatrix().m,
        uR = RR.Fw;
      for (let ZR = 0; ZR < 3; ZR++) JR[ZR] = tR[12 + ZR] + uR[ZR], GR[ZR] = tR[8 + ZR];
      ZR().normalize(GR, GR)
    }

    function bR(RR, JR) {
      const GR = RR.Fw,
        yR = RR.lK.EyR(),
        tR = yR ? AR.VJR(yR.eye[0], yR.eye[1], yR.eye[2]) : RR.lK.camera.globalPosition;
      return rR[0] = JR[0] - GR[0] - tR.x, rR[1] = JR[1] - GR[1] - tR.y, rR[2] = JR[2] - GR[2] - tR.z, ZR().normalize(rR, rR), rR
    }

    function vR(RR, JR) {
      return (0, qR.f)(RR, JR, qR.e, (0, qR.k)())
    }
  },
  40285: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR
    });
    var yR = GR(32),
      tR = GR(1383),
      uR = GR(2513);
    const ZR = "Reconnecting";
    class qR {
      constructor(RR) {
        this.hooks = RR, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = RR => {
          RR.persisted || this.leave()
        }, this.controller = new uR.k((JR => RR.reconnect(JR)), {
          isSessionLive: () => !this.ended && RR.isLive(),
          onPhaseChanged: RR => {
            this.onPhaseChanged(RR)
          },
          onReconnected: JR => {
            RR.onReconnected(JR)
          },
          onGaveUp: JR => {
            !this.ended && RR.isLive() && RR.onGaveUp(this.sessionBased, JR)
          }
        })
      }
      onInitialInfo(RR, JR) {
        this.graceMs = RR, this.sessionBased = JR
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(RR) {
        this.ended || this.controller.onConnectionLost(RR, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const RR = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          JR = this.controller.heldToken;
        this.end(), RR && "" !== JR && this.hooks.releaseSeat(JR)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(RR) {
        const JR = (0, uR.t)(RR);
        JR !== this.stopped && (this.stopped = JR, this.hooks.freeze(JR));
        const GR = "frozen" === RR || "resuming" === RR && this.frozen;
        GR && !this.frozen ? (0, tR.s)(ZR, {
          overridesPause: !0
        }) : !GR && this.frozen && (0, tR.q)(ZR), this.frozen = GR, this.setListening("connected" !== RR), yR.n.JK(uR.r, GR ? "frozen" : RR)
      }
      setListening(RR) {
        RR !== this.listening && (this.listening = RR, RR ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40288: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = RR, this.now = JR, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const RR = this.now(),
            JR = RR - this.lastCheckAt <= 2e3;
          this.lastCheckAt = RR;
          const GR = "visible" === document.visibilityState;
          !GR || JR && this.wasVisible || (this.resumedAt = RR), this.wasVisible = GR, GR && RR - this.lastHeardAt > 12e3 && RR - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = JR(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  40216: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => wR
    });
    var yR = GR(203),
      tR = GR(385),
      uR = GR.n(tR),
      ZR = GR(37466),
      qR = GR(37470),
      iR = GR(2435);
    const fR = yR.g.Kn * yR.g.playerEyeToHeightRatio,
      VR = 250,
      KR = 1.1,
      wR = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(RR, JR) {
          this.entities.set(RR, JR)
        }
        update(RR, JR) {
          const GR = this.entities.get(RR);
          this.entities.set(RR, JR);
          const yR = this.playing.get(RR);
          yR && (GR && GR.soundName === JR.soundName ? (yR.sound.setRelativeVolume(JR.volume), yR.sound.rate(JR.rate), yR.sound.setPannerAttr({
            refDistance: JR.refDistance
          })) : this.stopEntity(RR))
        }
        remove(RR) {
          this.stopEntity(RR), this.entities.delete(RR)
        }
        gK(RR) {
          this.msSinceLastScan += RR, this.msSinceLastScan < VR || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(RR) {
          const JR = this.playing.get(RR);
          JR && (JR.sound.stop(), this.playing.delete(RR))
        }
        startEntity(RR, JR, GR) {
          const yR = (0, qR.f)(JR.soundName);
          if (!yR) return console.error(`AudioEntityManager: no sound found for "${JR.soundName}", dropping audio entity ${RR}`), void this.remove(RR);
          const tR = ZR.d.play(yR, JR.volume, GR, JR.maxHearDist, JR.refDistance, !0);
          tR.rate(JR.rate), this.playing.set(RR, {
            sound: tR,
            lastPos: uR().clone(GR)
          })
        }
        scan() {
          const RR = (0, iR.i)();
          if (!RR) return;
          const JR = RR.zC.vW(RR.WH);
          if (JR)
            for (const [GR, yR] of this.entities) {
              if (!RR.zC.RGR(GR, "position")) continue;
              const tR = RR.zC.vW(GR),
                ZR = uR().sqrDist(JR, tR),
                qR = this.playing.get(GR);
              if (qR) {
                const RR = yR.maxHearDist * KR;
                ZR > RR * RR ? this.stopEntity(GR) : uR().equals(tR, qR.lastPos) || (qR.sound.setPosition([tR[0], tR[1] + fR, tR[2]]), uR().copy(qR.lastPos, tR))
              } else ZR <= yR.maxHearDist * yR.maxHearDist && this.startEntity(GR, yR, tR)
            }
        }
      }
  },
  40304: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => fR,
      f: () => VR
    });
    var yR = GR(1916),
      tR = GR(203),
      uR = GR(1879),
      ZR = GR(1997),
      qR = GR(1282),
      iR = GR(1201);
    async function fR(RR, JR) {
      return function(RR) {
        return "object" === typeof RR && null !== RR && RR.code === tR.e.VpnIp.code
      }(JR) && function(RR) {
        return uR.c.supports("appCheck") && RR.isLoggedIn() && !RR.hasTriedAppAttestation()
      }(RR) && await async function(RR) {
        try {
          const {
            token: JR
          } = await (0, ZR.b)(), {
            "3PSIDMCPP": GR
          } = await (0, iR.postJsonWithMetricsCookiesAndJsonResponse)(`${qR.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: JR
          }, {
            retries: 0
          }, RR.getMetricsCookies());
          return RR.setAppAttestedAuthJwt(GR), !0
        } catch (JR) {
          return JR instanceof yR.b && "failed" === JR.code ? (console.warn("The app couldn't get an App Check token:", JR), RR.markAppAttestationTried()) : console.error("Failed to attest the app:", JR), !1
        }
      }(RR)
    }
    async function VR(RR, JR) {
      try {
        return await JR()
      } catch (GR) {
        if (!await fR(RR, GR)) throw GR
      }
      return JR()
    }
  },
  40295: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => wR,
      h: () => VR
    });
    var yR = GR(203),
      tR = GR(2023),
      uR = GR(1295),
      ZR = GR(10298);
    const qR = [250, 500, 1e3, 2e3, 1250],
      iR = 406;

    function fR(RR) {
      if ("object" !== typeof RR || null === RR) return !1;
      const {
        code: JR,
        message: GR
      } = RR, tR = yR.e.duplicateLobbyNameError;
      return (JR === tR.code || JR === iR) && (GR === tR.text || GR === tR.text + yR.k)
    }
    async function VR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR.b;
      for (let tR = 0;; tR++) {
        let ZR;
        (0, uR.r)(JR);
        try {
          return await RR()
        } catch (yR) {
          if (ZR = qR[tR], void 0 === ZR || !fR(yR)) throw yR
        }
        await GR(ZR, JR)
      }
    }
    const KR = new Set([yR.e.duplicateLobbyNameError.code, yR.e.lobbyCantBeCreated.code, yR.e.roomDisposedEarlyError.code, yR.e.roomDisposedLateError.code, yR.e.serverRoomLimitReached.code]);

    function wR(RR) {
      if (fR(RR)) return !0;
      const JR = (0, ZR.h)(RR);
      return "number" === typeof JR && KR.has(JR)
    }
  },
  40276: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      g: () => tR
    });
    var yR = GR(32);

    function tR(RR) {
      return "refetchCode" === RR || "devDownloadJson" === RR || RR.startsWith("Plugin")
    }

    function uR(RR, JR) {
      "refetchCode" !== RR ? "Plugin|MobAiPlugin|ShowPetUi" !== RR ? Promise.all([GR.e(128), GR.e(129), GR.e(118), GR.e(120), GR.e(247)]).then((() => GR(53753))).then((GR => {
        let {
          runClientGameMessage: yR
        } = GR;
        yR(RR, JR)
      })).catch((JR => {
        console.error(`Game message ${RR} failed`, JR)
      })) : yR.n.JK("showPetUi", JR) : yR.n.JK("refetchCode")
    }
  },
  40310: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR
    });
    var yR = GR(10298),
      tR = GR(37640),
      uR = GR(40317);
    const ZR = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      qR = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function iR(RR, JR) {
      if (RR instanceof tR.g) return {
        at: ZR[JR],
        code: 0
      };
      const GR = (0, yR.h)(RR),
        iR = "number" === typeof GR ? GR : 0;
      return null !== (0, uR.e)(iR).name ? {
        at: "refused",
        code: iR
      } : {
        at: qR[JR],
        code: iR
      }
    }
  },
  10298: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => ZR,
      k: () => qR,
      n: () => fR,
      p: () => iR
    });
    var yR = GR(203),
      tR = GR(5425);

    function uR(RR) {
      return ZR(RR) === yR.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function ZR(RR) {
      return "object" === typeof RR && null !== RR ? RR.code : void 0
    }

    function qR(RR) {
      var JR;
      return null !== (JR = Object.keys(tR.d).find((JR => tR.d[JR] === RR))) && void 0 !== JR ? JR : null
    }

    function iR(RR) {
      return "notWhitelisted" === RR ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const fR = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10285: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR,
      e: () => iR
    });
    var yR = GR(377);

    function tR(RR) {
      if (!RR.startsWith("{")) return RR;
      let JR;
      try {
        JR = JSON.parse(RR)
      } catch {
        return RR
      }
      return function(RR) {
        if (null === (0, yR.Ee)(RR)) return !1;
        const {
          params: JR
        } = RR;
        return void 0 === JR || "object" === typeof JR && null !== JR && Object.values(JR).every((RR => "string" === typeof RR))
      }(JR) ? JR : RR
    }
    var uR = GR(1270),
      ZR = GR(1343);

    function qR(RR) {
      return (0, uR.w)(ZR.g.get().getCurrentLanguageCode(), RR.translationKey, RR.params)
    }

    function iR(RR) {
      const JR = tR(RR);
      return "string" === typeof JR ? JR : qR(JR)
    }

    function fR(RR) {
      const JR = tR(RR);
      return "string" === typeof JR ? JR : qR({
        translationKey: "moderation:kicked",
        params: {
          reason: qR(JR)
        }
      })
    }
  },
  40258: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => VR
    });
    var yR = GR(1317),
      tR = GR(1459),
      uR = GR(25),
      ZR = GR(1444),
      qR = GR(1449),
      iR = GR(1663),
      fR = GR(37620);

    function VR(RR) {
      let {
        au: JR,
        Lu: GR
      } = RR;
      const VR = null !== JR && void 0 !== JR ? JR : (0, qR.d)().gameNameWithVariation;
      (0, yR.D)(VR) && ((0, fR.i)(), (0, ZR.ib)((() => {
        console.log("Received matchmaking order from game server to game", JR), (0, uR.k)("inGameReplay"), (0, iR.navigatePreserveSearch)((0, tR.e)(VR, null !== GR && void 0 !== GR ? GR : void 0))
      }), "video_start"))
    }
  },
  40256: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR,
      f: () => iR,
      g: () => fR,
      i: () => KR
    });
    var yR = GR(2134),
      tR = GR(32),
      uR = GR(1493),
      ZR = GR(1351);
    const qR = new Map;

    function iR(RR, JR) {
      tR.n.JK("newUiRequest", {
        id: RR,
        clientParameters: JR
      }, !0)
    }

    function fR(RR) {
      tR.n.JK("removeUiRequest", RR, !0);
      const JR = qR.get(RR);
      JR && (JR.tearDownNotification(), qR.delete(RR))
    }

    function VR() {
      tR.n.JK("clearUiRequests");
      for (const RR of qR.values()) RR.tearDownNotification();
      qR.clear()
    }

    function KR(RR, JR, GR, tR) {
      const iR = "string" === typeof JR ? {
          translationKey: JR
        } : JR,
        fR = uR.NotificationProvider.showPromptPopup({
          title: iR.translationKey,
          textOpts: {
            title: (0, ZR.f)(iR.params, yR.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: GR,
          unlockPointerKey: "uiRequestPopup"
        });
      qR.set(RR, fR), fR.getResult().then((JR => {
        qR.delete(RR), "notificationTornDown" !== JR && tR(JR)
      }))
    }
  },
  40327: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => rR,
      f: () => wR
    });
    const yR = "ue:",
      tR = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      uR = "[A-Za-z0-9]{1,24}",
      ZR = 15,
      qR = new RegExp(`^${uR}$`);
    new RegExp(`^${yR}(${[...tR,"other"].join("|")}):(?:n|k(${uR})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function iR(RR, JR, GR, uR, iR) {
      const fR = "string" === typeof RR && tR.includes(RR) ? RR : "other";
      let VR = "n";
      return "string" === typeof JR ? VR = qR.test(JR) ? `k${JR}` : "n" : "number" === typeof GR && Number.isInteger(GR) && GR >= 0 && GR <= ZR && (VR = `b${GR}`), `${yR}${fR}:${VR}:${uR?1:0}${iR?1:0}`
    }
    var fR = GR(1850),
      VR = GR(1950);
    let KR = null;

    function wR(RR) {
      const JR = RR instanceof Element && RR !== document.body && RR !== document.documentElement && !(0, fR.v)(RR) && !RR.closest("#root");
      return {
        editable: (0, VR.b)(RR),
        outsideView: JR
      }
    }

    function rR(RR) {
      return KR ??= function(RR) {
        try {
          const {
            editable: JR,
            outsideView: GR
          } = wR(RR.target), yR = RR;
          return iR(RR.type, yR.code, yR.button, JR, GR)
        } catch {
          return iR(null, null, null, !1, !1)
        }
      }(RR), KR
    }
  },
  40317: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => iR,
      f: () => ZR,
      h: () => tR
    });
    var yR = GR(203);

    function tR(RR) {
      const JR = RR.endsWith(yR.k);
      return {
        text: (JR ? RR.slice(0, -yR.k.length) : RR) || null,
        dropsCache: JR
      }
    }
    const uR = "Either your internet isn't working or this is a bug.";

    function ZR(RR, JR) {
      const GR = iR(RR);
      return null !== GR.name && "" === yR.e[GR.name].text && null !== JR ? JR : GR.reason
    }
    const qR = "You were removed from the game.";

    function iR(RR) {
      var JR;
      let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const tR = null !== (JR = Object.keys(yR.e).find((JR => yR.e[JR].code === RR))) && void 0 !== JR ? JR : null;
      if (null === tR) return {
        code: RR,
        name: tR,
        reason: null !== GR && void 0 !== GR ? GR : `${uR}\nCode: ${RR}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: ZR,
        canReconnect: iR = !1
      } = yR.e[tR], fR = RR === yR.e.outdatedVersion.code || RR === yR.e.loadRecaptchaError.code;
      return {
        code: RR,
        name: tR,
        reason: "" !== ZR ? ZR : null !== GR && void 0 !== GR ? GR : RR === yR.e.gameOrPluginKick.code ? qR : `Code: ${RR}`,
        canReconnect: iR,
        automaticallyReconnect: RR === yR.e.customGameUpdated.code || RR === yR.e.duplicateLobbyNameError.code,
        requiresRefresh: fR
      }
    }
  },
  40251: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR {
      constructor() {
        this.members = new Map
      }
      apply(RR) {
        const JR = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const yR of RR.vt) {
          let RR = this.members.get(yR.Ot);
          if (RR || (RR = {
              name: null,
              settings: {}
            }, this.members.set(yR.Ot, RR), JR.added.push(yR.Ot)), null !== yR.xt && (RR.name = yR.xt), null !== yR.Nt || yR.Dt.length > 0) {
            const GR = null === yR.Nt ? {} : JSON.parse(yR.Nt);
            Object.assign(RR.settings, GR);
            for (const JR of yR.Dt) delete RR.settings[JR], GR[JR] = void 0;
            JR.settingChanges.push({
              playerId: yR.Ot,
              settings: GR
            })
          }
        }
        for (const yR of RR.Ht) {
          const RR = this.members.get(yR);
          var GR;
          if (RR) this.members.delete(yR), JR.removed.push({
            playerId: yR,
            name: null !== (GR = RR.name) && void 0 !== GR ? GR : void 0
          })
        }
        return JR
      }
      has(RR) {
        return this.members.has(RR)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(RR) {
        var JR, GR;
        return null !== (JR = null === (GR = this.members.get(RR)) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : void 0
      }
      getSettings(RR) {
        var JR;
        return null === (JR = this.members.get(RR)) || void 0 === JR ? void 0 : JR.settings
      }
      getSetting(RR, JR) {
        var GR;
        return null === (GR = this.members.get(RR)) || void 0 === GR ? void 0 : GR.settings[JR]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  40283: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      g: () => tR
    });
    const yR = ["description", "label"];

    function tR(RR) {
      const JR = RR.type;
      return {
        type: JR,
        params: RR[JR]
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);