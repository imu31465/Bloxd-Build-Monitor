export const id = 174;
export const ids = [174];
export const modules = {
  40035: (HH, BH, LH) => {
    function AH(HH) {
      return !(!HH.lobbyLeaderboardInfo && !HH.lobbyManage)
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  40018: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      h: () => hH
    });
    var AH = LH(18);
    let rH = !1;

    function SH() {
      return rH
    }

    function hH(HH) {
      rH !== HH && (rH = HH, AH.k.AX("replayViewer|videoExportChanged"))
    }
  },
  39936: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH
    });
    var AH = LH(18),
      rH = LH(2036);

    function SH(HH) {
      let {
        taskId: BH,
        progress: LH
      } = HH;
      const AH = rH.e.get("_tasks");
      null !== AH && void 0 !== AH && AH[BH] && rH.e.apply({
        _tasks: {
          ...AH,
          [BH]: {
            ...AH[BH],
            progress: LH
          }
        }
      })
    }
    AH.k.subscribe("clientTaskProgress", (HH => {
      SH(HH)
    }))
  },
  39889: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => LL,
      g: () => HL,
      i: () => BL
    });
    var AH = LH(4061),
      rH = LH(152),
      SH = LH(176),
      hH = LH(625),
      tH = LH(30),
      zH = LH(3038),
      CH = LH(4113),
      EH = LH(4099),
      XH = LH(1168);
    const GH = new WeakMap;
    class YH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          lEH: !0
        };
        this.callbacks = BH, this.options = LH, this.KAH = void 0, this.sessionId = void 0, this.JI = [], this.KEH = !1, this.Mu = !1, this.cEH = void 0, this.mI = 0, this.fSH = 0, this.eEH = (HH, BH) => {
          if (this.Mu) return;
          const LH = Number(HH);
          this.KEH ? this.qEH(LH, BH) : this.JI.push({
            id: LH,
            payload: BH
          })
        }, this.dispose = () => {
          this.Mu || (this.Mu = !0, GH.delete(this), this.JI.length = 0, this.cEH())
        }, this.KAH = HH, this.sessionId = HH.sessionId, GH.set(this, []), this.cEH = this.gEH()
      }
      NEH(HH) {
        this.cEH(), this.KAH = HH, this.sessionId = HH.sessionId, this.mI = 0, this.fSH = 0, this.cEH = this.gEH()
      }
      get xI() {
        return this.fSH
      }
      gEH() {
        const HH = this.KAH.lT("*", this.eEH);
        return this.options.lEH && this.KAH.eT(this.dispose), HH
      }
      qEH(HH, BH) {
        try {
          (0, CH.sc)(HH) && (BH = (0, CH.b)(HH, EH.rX.from(BH)));
          const LH = GH.get(this)[HH];
          if ("function" !== typeof LH) {
            if (this.callbacks.REH) return void this.callbacks.REH(HH, BH);
            throw new Error(`No onMessage handler registered for message id ${HH}`)
          }
          LH(BH)
        } catch (LH) {
          this.callbacks.jEH(`Error in onMessage ${HH} with payload ${JSON.stringify(BH)}`, LH)
        } finally {
          this.mI++
        }
      }
      nEH() {
        for (const {
            id: HH,
            payload: BH
          }
          of this.JI) {
          if (this.Mu) break;
          this.qEH(HH, BH)
        }
        this.JI.length = 0
      }
      mV() {
        return this.Mu
      }
      FEH() {
        if (this.KEH || this.Mu) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          lT: (HH, BH) => {
            if (this.KEH || this.Mu) throw new Error("Trying to call onMessage after registration finished");
            this.lT(HH, BH)
          },
          finishRegistration: () => {
            if (this.Mu) throw new Error("Cannot finish message registration after disposal");
            this.KEH = !0, this.nEH()
          }
        }
      }
      lT(HH, BH) {
        var LH, AH;
        null === (LH = (AH = this.callbacks).DEH) || void 0 === LH || LH.call(AH);
        const rH = GH.get(this);
        for (; HH > rH.length;) rH[rH.length] = null;
        rH[HH] = BH
      }
      send(HH, BH) {
        this.wEH(), (0, XH.C)(BH) ? this.KAH.zK(HH, BH) : this.KAH.send(HH, BH)
      }
      wEH() {
        var HH, BH;
        (this.fSH++, 5 === uH++) && (null === (HH = (BH = this.callbacks).DEH) || void 0 === HH || HH.call(BH), uH = 0)
      }
      Bx() {
        this.dispose(), this.KAH.Bx()
      }
      leave() {
        this.dispose(), this.KAH.leave()
      }
    }
    let uH = 0;
    var QH = LH(4067);
    class WH extends YH {
      constructor(HH) {
        super(HH, {
          DEH: () => {
            (0, tH.i)(!0) && (0, AH.Jm)()
          },
          jEH: (HH, BH) => {
            var LH;
            null === (LH = (0, zH.c)()) || void 0 === LH || LH.PQ(HH, BH)
          }
        }, {
          lEH: !1
        }), (0, QH.h)(HH)
      }
      pI(HH, BH) {
        return !!(0, QH.n)((0, QH.d)(), this.KAH, HH, BH) && (this.wEH(), !0)
      }
      NEH(HH) {
        this.ZEH(), super.NEH(HH), (0, QH.h)(HH)
      }
      Bx() {
        super.Bx(), this.ZEH()
      }
      ZEH() {
        this.KAH.Xx.GX.zN = void 0
      }
    }
    var MH = LH(18),
      xH = LH(2036),
      vH = LH(1789),
      PH = LH(37341),
      TH = LH(39891),
      UH = LH(38909),
      VH = LH(38667),
      OH = LH(619),
      bH = LH(39277);

    function kH(HH, BH, LH) {
      const AH = function(HH) {
          const BH = new Int32Array(HH.length * bH.g);
          return HH.forEach(((HH, LH) => {
            const AH = LH * bH.g;
            if (4 === HH.length) {
              const [LH, rH, SH, hH] = HH;
              BH.set([LH, rH, SH, LH, rH, SH, hH], AH)
            } else {
              const [LH, rH, SH, hH, tH, zH, CH] = HH;
              BH.set([LH, SH, tH, rH, hH, zH, CH], AH)
            }
          })), BH
        }(LH),
        rH = (BH, LH, AH, rH) => {
          HH.setBlockNoMulti(BH, LH, AH, rH, !0)
        };
      HH.client.gameRecorder.isCapturing() ? (0, bH.kb)(AH, (0, bH.jb)(AH), rH) : HH.bG.cX.sV(AH, {
        mJ: rH,
        isHookId: BH => HH.blockChangeHasHooks(BH),
        watched: () => function(HH, BH, LH) {
          const AH = [],
            rH = (HH, BH, LH) => {
              AH.push(HH, BH, LH)
            },
            SH = new Set;
          for (let hH = 0; hH < LH.length; hH += bH.g)
            for (let BH = (0, OH.U)(LH[hH]); BH <= (0, OH.U)(LH[hH + 3]); BH++)
              for (let AH = (0, OH.U)(LH[hH + 1]); AH <= (0, OH.U)(LH[hH + 4]); AH++)
                for (let tH = (0, OH.U)(LH[hH + 2]); tH <= (0, OH.U)(LH[hH + 5]); tH++) {
                  const LH = `${BH}|${AH}|${tH}`;
                  SH.has(LH) || (SH.add(LH), HH.blockDataOwner.forEachDataCell(BH, AH, tH, rH))
                }
          return BH.forEachCell(rH), Int32Array.from(AH)
        }(HH, BH, AH)
      }), HH.bG.qBH()
    }

    function mH(HH) {
      HH.PAH = new Set, HH.OAH = new Set, HH.TAH = new Set, HH.bAH = new Set, HH.VAH = [], HH.kAH = [], HH.GJ = new Set, HH.TA = [], HH.QJ = []
    }
    class oH {
      constructor(HH) {
        this.bG = HH
      }
      register(HH) {
        const BH = this.bG,
          LH = (0, zH.b)();
        HH.lT(CH.ab, (HH => {
          BH.cX.PAH.add(HH), BH.cX.OAH.delete(HH)
        })), HH.lT(CH.gb, (HH => {
          BH.cX.OAH.add(HH), BH.cX.PAH.delete(HH)
        })), HH.lT(CH.he, (HH => {
          BH.cX.OAH.delete(HH), BH.cX.PAH.delete(HH)
        })), HH.lT(CH.eb, (HH => {
          BH.cX.TAH.add(HH), BH.cX.bAH.delete(HH)
        })), HH.lT(CH.ib, (HH => {
          BH.cX.bAH.add(HH), BH.cX.TAH.delete(HH)
        })), HH.lT(CH.le, (HH => {
          BH.cX.bAH.delete(HH), BH.cX.TAH.delete(HH)
        })), HH.lT(CH.cb, (HH => {
          (0, XH.gb)(HH, BH.cX.kAH), (0, XH.gb)(HH, BH.cX.VAH), BH.cX.VAH.push(HH)
        })), HH.lT(CH.hb, (HH => {
          (0, XH.gb)(HH, BH.cX.VAH), (0, XH.gb)(HH, BH.cX.kAH), BH.cX.kAH.push(HH)
        })), HH.lT(CH.ie, (HH => {
          (0, XH.gb)(HH, BH.cX.VAH), (0, XH.gb)(HH, BH.cX.kAH)
        })), HH.lT(CH.Bf, (HH => {
          let {
            jS: LH,
            nS: AH
          } = HH;
          AH ? BH.cX.GJ.delete(LH) : BH.cX.GJ.add(LH)
        })), HH.lT(CH.yf, (HH => {
          let {
            TA: AH,
            UA: rH
          } = HH;
          LH.updateWalkThroughRect(BH.lF, AH, rH)
        })), (0, AH.onGameResetOnce)((() => {
          mH(BH.cX)
        })), HH.lT(CH.nc, (HH => {
          UH.b.applyServerUpdate(HH)
        })), HH.lT(CH.ob, (HH => {
          LH.applyServerBlocks((() => {
            ! function(HH, BH) {
              for (const {
                  sA: LH,
                  JA: AH
                }
                of BH) {
                const BH = VH.c[AH];
                if (BH) {
                  const {
                    compX: AH,
                    compY: rH,
                    compZ: SH,
                    mainMultiblock: hH
                  } = BH;
                  HH.oq(LH[0] - AH, LH[1] - rH, LH[2] - SH, hH)
                }
              }
              for (const {
                  sA: LH,
                  JA: AH,
                  iA: rH
                }
                of BH) HH.setBlockNoMulti(LH[0], LH[1], LH[2], AH, !0), HH.blockDataOwner.setBlockData(LH[0], LH[1], LH[2], null === rH ? void 0 : JSON.parse(rH)), HH.blockAdded(LH[0], LH[1], LH[2], AH)
            }(LH, HH)
          })), MH.k.AX("changeBlockFail", HH), MH.k.AX("blockChangeRefused"), LH.client.triggerGameCallback("onChangeBlockFail", HH), MH.k.AX("EditBoard", {
            pos: null
          }), MH.k.AX("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        }));
        const rH = HH => {
          LH.applyServerBlocks((() => {
            kH(LH, UH.b, HH)
          }))
        };
        HH.lT(CH.Nb, rH), HH.lT(CH.dc, rH), HH.lT(CH.sf, (HH => {
          let {
            ZA: BH,
            dA: AH
          } = HH;
          if (LH.Gy(BH[0], BH[1], BH[2])) {
            const HH = (0, zH.b)().Fv(BH[0], BH[1], BH[2]);
            (0, zH.b)().updateMailboxContents(BH[0], BH[1], BH[2], HH, AH)
          }
        })), HH.lT(CH.Ge, (HH => {
          let {
            pos: BH,
            data: AH
          } = HH;
          LH.blockDataOwner.setBlockData(BH[0], BH[1], BH[2], AH), LH.blockAdded(BH[0], BH[1], BH[2], LH.Fv(BH[0], BH[1], BH[2]))
        }))
      }
    }
    var IH = LH(38026),
      fH = LH(37633),
      lH = LH(38943),
      KH = LH(38800),
      cH = LH(38961);
    class eH {
      constructor(HH, BH) {
        this.bG = HH, this.setUpQueuedEntity = BH
      }
      register(HH) {
        const BH = this.bG,
          LH = (0, zH.b)();
        HH.lT(CH._, (HH => {
          let {
            iS: BH,
            pS: LH
          } = HH;
          this.setUpQueuedEntity(BH), BH = (0, fH.b)(BH), (0, zH.b)().client.gameRecorder.recordBulletShot(BH, LH), MH.k.AX(`bulletShot|${BH}`, {
            bulletDirections: LH
          })
        })), HH.lT(CH.qc, (HH => {
          let {
            DS: BH,
            wS: LH
          } = HH;
          MH.k.AX("damagedByOtherPlayer", {
            DS: BH,
            direction: LH
          }, !0)
        })), HH.lT(CH.Fd, (HH => {
          MH.k.AX("playerKilled", HH, !0), (0, fH.g)(HH.killerEId) && !(0, fH.g)(HH.deadEId) && MH.k.AX("sessionReplayPlayerKill", {
            killstreak: HH.killstreak
          }), (0, zH.b)().client.gameRecorder.recordPlayerKilled(HH.deadEId, HH.killerEId, HH.withItem, HH.killstreak)
        })), HH.lT(CH.Yb, (HH => {
          MH.k.AX("customKillfeed", HH, !0), (0, zH.b)().client.gameRecorder.recordCustomKillfeed(HH.killer, HH.victim, HH.withItem)
        })), HH.lT(CH.Qd, (HH => {
          let {
            yr: LH,
            HS: AH
          } = HH;
          this.setUpQueuedEntity(LH);
          const rH = BH.pT.yLH(LH);
          null !== rH && void 0 !== rH && rH.isGun() && rH.reload(Date.now(), AH)
        })), HH.lT(CH.De, (HH => {
          let {
            aA: LH,
            QA: AH
          } = HH;
          const rH = AH ? (0, cH.g)(BH, AH) : void 0;
          MH.k.AX("sendHitmarker", {
            aA: LH,
            screenPos: rH
          }, !0)
        })), HH.lT(CH.Yc, (HH => {
          let {
            GA: AH,
            YA: rH,
            WA: SH,
            MA: hH,
            xA: tH,
            vA: zH,
            PA: CH
          } = HH;
          this.setUpQueuedEntity(AH), AH = (0, fH.b)(AH);
          const EH = BH.pT.ZLH(AH);
          if (EH && (EH.lastHurtTime = performance.now()), (0, lH.playRigHurt)(BH, AH, zH), MH.k.AX("lifeformHurt", {
              eId: AH,
              PA: CH
            }), rH) {
            const HH = (0, cH.g)(BH, rH.QA);
            MH.k.AX("yourAttackHit", {
              aA: hH,
              screenPos: HH,
              hitSelf: AH === BH.lF
            })
          }
          AH === BH.lF && (LH.shakePlayerCamera(AH, tH / 40, 200), MH.k.AX("closeShopOnDamaged", null), MH.k.AX("damagedByOtherPlayer", {
            DS: null,
            direction: zH,
            xA: tH
          }, !0));
          const XH = BH.pT.hT(AH);
          if (XH && (SH || hH)) {
            const HH = [XH[0], XH[1] + 1, XH[2]];
            SH && (0, KH.j)(BH, KH.C, HH, 15), hH && (0, KH.j)(BH, KH.q, HH, 10)
          }
        })), HH.lT(CH.Wc, (HH => {
          let {
            UH: LH,
            VH: AH,
            OH: rH
          } = HH;
          (0, IH.b)(BH).setHealthFrac((0, fH.b)(LH), rH), MH.k.AX("lifeformHealthChanged", {
            eId: (0, fH.b)(LH),
            VH: AH,
            OH: rH
          })
        })), HH.lT(CH.X, (HH => {
          let {
            IA: LH,
            lA: AH
          } = HH;
          (0, zH.b)().playerAttacked(BH.lF, LH, AH)
        })), HH.lT(CH.tb, (() => {
          const HH = BH.pT.yLH(BH.lF);
          null !== HH && void 0 !== HH && HH.isChargeable() && HH.finishCharging(!1, Date.now())
        })), HH.lT(CH.ac, (HH => {
          let {
            fH: BH,
            lH: LH,
            KH: AH,
            VA: rH,
            OA: SH,
            bA: hH
          } = HH;
          BH = (0, fH.b)(BH), (0, zH.b)().client.updateEffect(BH, LH, {
            displayName: AH,
            icon: rH,
            duration: SH,
            level: hH
          })
        })), HH.lT(CH.Ud, (HH => {
          let {
            fH: BH,
            lH: LH
          } = HH;
          BH = (0, fH.b)(BH), (0, zH.b)().client.removeEffect(BH, LH)
        })), HH.lT(CH.nf, (HH => {
          MH.k.AX("ttbEffectMultiplier", HH)
        }))
      }
    }
    var qH = LH(39905),
      gH = LH(38020),
      NH = LH(4599),
      RH = LH(38970),
      jH = LH(37608),
      nH = LH(37617),
      FH = LH(37943),
      DH = LH(38048),
      wH = LH(38977),
      ZH = LH(39914);
    class dH {
      constructor(HH, BH) {
        this.bG = HH, this.setUpQueuedEntity = BH
      }
      register(HH) {
        const BH = this.bG,
          LH = (0, zH.b)();
        HH.lT(CH.nd, (HH => {
          let {
            eId: LH,
            settings: AH
          } = HH;
          (0, DH.e)(LH);
          for (const BH in AH)(0, DH.d)(LH, BH, AH[BH]);
          if ("canSee" in AH && BH.pT.aBH(LH, "hidingMeshManager")) {
            const HH = BH.pT.getState(LH, "hidingMeshManager");
            HH.canSee = (0, wH.c)("canSee", AH.canSee), HH._forceUpdate = !0
          }
        })), HH.lT(CH.P, (HH => {
          let {
            vB: LH,
            PB: AH,
            animationScript: rH,
            TB: SH,
            UB: hH,
            VB: tH,
            OB: CH
          } = HH;
          LH = (0, fH.b)(LH);
          const EH = null === rH && null !== tH ? (0, qH.g)(tH, CH) : rH;
          (0, zH.b)().client.gameRecorder.recordAnimateEntity(LH, AH, EH, SH, hH), (0, IH.b)(BH).animations.animateEntity(LH, AH, rH, SH, hH, tH, CH), null !== rH || LH === BH.lF && AH === gH.g.Emote && (0, zH.b)().client.cameraController.endTemporaryThirdPerson()
        })), HH.lT(CH.ze, (HH => {
          (0, ZH.c)(HH)
        })), HH.lT(CH.Cd, (HH => {
          for (const BH of HH)(0, RH.x)(BH);
          MH.k.AX("playerCosmeticsUpdated", HH, !0)
        })), HH.lT(CH.W, (HH => {
          for (const LH of HH)(0, FH.h)(BH, LH)
        })), HH.lT(CH.qd, (HH => {
          (0, KH.m)(BH, (0, XH.s)(HH))
        })), HH.lT(CH.rd, (HH => {
          NH.d[HH.yS] ? (0, KH.m)(BH, {
            ...NH.d[HH.yS],
            pos1: HH.pos1,
            pos2: HH.pos2
          }) : console.error(`Unknown preset id: ${HH.yS}`)
        })), HH.lT(CH.Bd, (HH => {
          var BH, LH;
          let {
            HH: AH,
            BH: rH,
            AH: SH,
            rH: hH
          } = HH, {
            hH: tH,
            tH: CH
          } = null !== hH && void 0 !== hH ? hH : {};
          const {
            SH: EH
          } = null !== hH && void 0 !== hH ? hH : {};
          tH = null !== (BH = tH) && void 0 !== BH ? BH : void 0, CH = null !== (LH = CH) && void 0 !== LH ? LH : void 0, "string" === typeof EH && this.setUpQueuedEntity(EH), (0, zH.b)().client.gameRecorder.recordPlaySound(AH, rH, SH, hH), jH.c.play((0, nH.h)(AH), rH, EH, tH, CH).rate(SH)
        })), HH.lT(CH.vf, (HH => {
          for (const BH in HH) {
            const AH = HH[BH];
            for (const HH in AH) LH.client.meshCreator.handleParticleSystemUpdate(BH, HH, AH[HH])
          }
        }))
      }
    }
    var aH = LH(38646),
      sH = LH(38605);
    class JH {
      constructor(HH) {
        this.bG = HH
      }
      register(HH) {
        const BH = this.bG,
          LH = (0, zH.b)();

        function AH() {
          return BH.pT.lLH(BH.lF)
        }
        HH.lT(CH.Dc, (HH => {
          let {
            zL: LH,
            CL: AH,
            EL: rH,
            XL: SH,
            GL: hH,
            YL: tH,
            uL: zH,
            QL: CH,
            WL: EH
          } = HH;
          if (!BH.pT.aBH(LH, "itemState")) return void(0, aH.l)(BH, LH, [hH, tH, zH], AH, {
            amount: rH,
            attributes: JSON.parse(SH),
            QL: CH,
            size: EH
          });
          const XH = BH.pT.getState(LH, "itemState");
          XH.amount = rH, XH.QL = CH, XH.creationTime = Date.now(), (0, sH.setServerPosition)(BH.pT.getState(LH, "smoothToServerPos"), hH, tH, zH)
        })), HH.lT(CH.mb, (HH => {
          (0, IH.b)(BH).setCantPickUp(HH, !0), BH.pT.aBH(HH, "itemState") && (BH.pT.getState(HH, "itemState").QL = !0)
        })), HH.lT(CH.ge, (HH => {
          (0, IH.b)(BH).setCantPickUp(HH, !1), BH.pT.aBH(HH, "itemState") && (BH.pT.getState(HH, "itemState").QL = !1)
        })), HH.lT(CH.yd, (HH => {
          let {
            pickUpItems: BH,
            pickUpAckSeq: LH
          } = HH;
          for (const {
              name: rH,
              amount: SH,
              attributes: hH
            }
            of BH) AH().pickUpItem({
            name: rH,
            amount: SH,
            typeObj: aH.x[rH],
            attributes: hH
          });
          (0, zH.b)().client.inventoryPrediction.serverChangeApplied(LH)
        })), HH.lT(CH.Ue, (HH => {
          let {
            index: LH,
            name: AH,
            amount: rH,
            attributes: SH,
            setSlotAckSeq: hH
          } = HH;
          const tH = BH.pT.KLH(BH.lF);
          (LH < tH.playerInventory.numSlots || tH.qL || tH.inCreative) && tH.setItemSlot(LH, AH, rH, SH), (0, zH.b)().client.inventoryPrediction.serverChangeApplied(hH)
        })), HH.lT(CH.Ac, (HH => {
          (0, zH.b)().client.inventoryPrediction.acknowledge(HH)
        })), HH.lT(CH.N, (HH => {
          let {
            sr: BH,
            Jr: LH,
            ir: AH,
            pr: rH
          } = HH;
          (0, zH.b)().client.itemDropPrediction.onActionItemDrops(BH, LH, AH, rH)
        })), HH.lT(CH.Ib, (HH => {
          AH().clearInventory(), (0, zH.b)().client.inventoryPrediction.serverChangeApplied(HH)
        })), HH.lT(CH.Ye, (HH => {
          MH.k.AX("setSelectedInventorySlotI", HH, !0)
        })), HH.lT(CH.Ab, (HH => {
          let {
            TL: LH,
            UL: AH,
            VL: rH,
            OL: SH,
            bL: hH,
            kL: tH,
            mL: CH,
            oL: EH
          } = HH;
          const XH = BH.pT.KLH(BH.lF);
          if (tH) {
            const {
              fL: HH,
              lL: BH
            } = EH;
            return (0, zH.b)().client.inventoryPrediction.rBH(BH, (() => {
              XH.chestRefreshed(AH, rH, SH, CH, HH)
            })) && MH.k.AX("chestToggleFromServer", !1, !0), void MH.k.AX("chestRefreshedFromServer")
          }(LH || XH.qL) && (LH ? (XH.chestOpened(AH, rH, SH, hH, CH), null !== hH && (0, zH.b)().client.ironChestPasskeyCache.onChestOpened(SH, hH)) : XH.chestClosed(), MH.k.AX("chestToggleFromServer", LH, !0))
        })), HH.lT(CH._b, (HH => {
          let {
            craftingRecipeItemName: AH,
            recipesForItem: rH
          } = HH;
          AH ? LH.craftingManager.editRecipesForPlayer(BH.lF, AH, rH) : LH.craftingManager.resetAllPlayerRecipes(BH.lF), MH.k.AX("craftingRecipesEdited", {
            itemName: AH,
            recipesForItem: rH
          })
        })), HH.lT(CH._d, (HH => {
          let {
            qA: BH,
            gA: LH,
            NA: rH
          } = HH;
          AH().removeItemName(BH, LH), (0, zH.b)().client.inventoryPrediction.serverChangeApplied(rH)
        })), HH.lT(CH.Xd, (HH => {
          let {
            kA: AH
          } = HH;
          LH.craftingManager.removeRecipes(BH.lF, AH), MH.k.AX("craftingRecipesEdited", {
            itemName: AH,
            recipesForItem: []
          })
        }))
      }
    }
    var iH = LH(7007),
      pH = LH(38459),
      yH = LH(330),
      HB = LH.n(yH),
      BB = LH(4928),
      LB = LH(38527),
      AB = LH(39138),
      rB = LH(38453);
    class SB {
      constructor(HH, BH) {
        this.bG = HH, this.setUpQueuedEntity = BH
      }
      register(HH) {
        const BH = this.bG,
          LH = (0, zH.b)();
        HH.lT(CH.jf, (HH => {
          let {
            ML: LH,
            xL: rH,
            vL: SH,
            PL: hH
          } = HH;
          const tH = [rH, SH, hH];
          BH.pT.setPosition(BH.lF, tH), (0, AH.sendColyMessage)(CH.Zg, {
            bh: LH,
            kh: BB.g
          }), MH.k.AX("localPlayerTeleported", {
            pos: tH,
            isCorrection: !1
          })
        })), HH.lT(CH.ud, (HH => {
          let {
            ZS: BH,
            dS: LH,
            aS: AH,
            sS: rH
          } = HH;
          this.setUpQueuedEntity(BH);
          const SH = [LH, AH, rH];
          MH.k.AX(`otherPlayerTeleported|${BH}`, {
            pos: SH
          })
        })), HH.lT(CH.Id, (HH => {
          let {
            nL: LH,
            FL: rH,
            DL: SH,
            wL: hH,
            ZL: tH,
            dL: zH,
            aL: EH,
            JL: XH,
            sL: GH,
            yL: YH
          } = HH;
          const uH = [rH, SH, hH];
          BH.pT.setPosition(BH.lF, uH);
          const QH = BH.pT.ELH(BH.lF),
            WH = BH.pT.xJ(BH.lF);
          HB().set(WH.bZ, 0, 0, 0), HB().set(WH.eZ, 0, 0, 0), HB().set(WH.EW, tH, zH, EH), WH.RZ(), QH._flying = null !== YH, YH ? (QH.flyAccel.HA = YH.HA, QH.flyAccel.BA = YH.BA) : QH.flyAccel.reset(), XH && QH.movementType === iH.m.GLIDING && (QH.iL = XH.iL, HB().copy(QH.pL, XH.pL)), (0, AH.sendColyMessage)(CH.Zg, {
            bh: LH,
            kh: BB.g
          }), MH.k.AX("localPlayerTeleported", {
            pos: uH,
            isCorrection: !0
          })
        })), HH.lT(CH._e, (HH => {
          let {
            vehicleEId: BH,
            overrides: LH
          } = HH;
          (0, zH.b)().applyRiddenVehicleSettingOverrides(BH, LH)
        })), HH.lT(CH.xf, (HH => {
          let {
            vH: LH,
            PH: AH,
            TH: rH
          } = HH;
          const SH = BH.pT.ELH(BH.lF).physicsState.type === iH.o.SLEEPING && LH === iH.o.DEFAULT;
          (0, zH.b)().updatePositionAndPhysics(BH.lF, {
            type: LH,
            tier: AH
          }, !0, rH), SH && (0, zH.b)().updateHeldVehicleStatus()
        })), HH.lT(CH.rb, (HH => {
          let {
            zH: LH,
            CH: AH
          } = HH;
          BH.pT.ILH(BH.lF).setPose(LH, AH)
        })), HH.lT(CH.He, (HH => {
          const {
            zX: LH,
            CAH: AH
          } = (0, pH.d)([HH[0], HH[1], HH[2]]);
          rB.b.setLookDirection(BH, LH, AH), (0, LB.p)(LH, AH);
          const rH = BH.pT.ILH(BH.lF);
          rH && (rH.heading = LH)
        })), HH.lT(CH.Ie, (HH => {
          LH.client.cameraController.setCameraZoom(HH)
        })), HH.lT(CH.df, (HH => {
          let {
            mA: AH,
            oA: rH
          } = HH;
          LH.shakePlayerCamera(BH.lF, AH, rH)
        })), HH.lT(CH.Ic, (HH => {
          BH.pT.ILH(BH.lF).jumpMultiplier.setMultiplierType("jumpEffectAmount", HH)
        })), (0, AH.onGameResetOnce)((() => {
          BH.pT.ILH(BH.lF).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), HH.lT(CH.T, (HH => {
          BH.pT.xJ(BH.lF).applyImpulse(HH)
        })), HH.lT(CH.af, (HH => {
          const LH = BH.pT.xJ(BH.lF);
          HB().set(LH.bZ, 0, 0, 0), HB().set(LH.eZ, 0, 0, 0), HB().copy(LH.EW, HH), LH.RZ()
        })), (0, AH.onGameResetOnce)((() => {
          (0, AB.setFloatingYValue)(BH.pT.getState(BH.lF, "physics"), BH.pT.A4(BH.lF), null)
        })), HH.lT(CH.cc, (HH => {
          let {
            DB: LH,
            wB: AH,
            ZB: rH
          } = HH;
          const SH = (0, fH.b)(LH);
          if (SH === BH.lF) {
            const HH = BH.pT.A4(BH.lF).position;
            rH ??= Math.floor(HH[1]) - 1, (0, AB.setFloatingYValue)(BH.pT.getState(BH.lF, "physics"), BH.pT.A4(BH.lF), AH ? rH : null)
          }(0, IH.b)(BH).setFloating(SH, AH, rH);
          const hH = BH.pT.getState(SH, "floating");
          hH && (hH.isFloating = AH, hH.ZB = AH ? rH : null)
        }))
      }
    }

    function hB(HH, BH, LH, AH, rH) {
      let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!HH.pT.fLH(HH.lF)) return console.log("Got resync inven but don't have inven component"), void BH.acknowledge(AH);
      SH && console.error("Had to sync inven"), BH.rBH(AH, rH) && LH.AX("chestToggleFromServer", !1, !0), LH.AX("syncedInvenFromServer")
    }
    var tB = LH(39921),
      zB = LH(9615),
      CB = LH(39928),
      EB = LH(2043);
    var XB = LH(4912);

    function GB(HH) {
      const BH = HH.cX;
      let LH = 0,
        rH = -1,
        hH = -1 / 0,
        tH = null,
        zH = !0;
      const EH = () => {
        if (++LH % 10 !== 0) return;
        const EH = (0, AH.getLastReceivedPacketId)();
        if (EH <= rH) return;
        const [XH, GH, YH] = HH.pT.hT(HH.lF), uH = ! function(HH) {
          var BH;
          let LH = null === (BH = HH.pT.GAH(HH.lF)) || void 0 === BH ? void 0 : BH.Xu;
          if (void 0 === LH) return !1;
          const AH = new Set;
          for (; void 0 !== LH && !AH.has(LH);) {
            var rH;
            AH.add(LH);
            const BH = HH.pT.getState(LH, "smoothToServerPos"),
              SH = Array.isArray(BH) ? null : null === BH || void 0 === BH ? void 0 : BH.serverPosition;
            if (SH) {
              const BH = HH.pT.hT(LH);
              if (Math.abs(BH[0] - SH[0]) > 10 || Math.abs(BH[1] - SH[1]) > 10 || Math.abs(BH[2] - SH[2]) > 10) return !0
            }
            LH = null === (rH = HH.pT.GAH(LH)) || void 0 === rH ? void 0 : rH.Xu
          }
          return !1
        }(HH) && function(HH, BH, LH, AH) {
          const rH = SH.g.xX;
          for (let SH = 0; SH < HH.length; SH++) {
            const hH = HH[SH];
            if (!(0, XB.k)(BH, LH, AH, hH[0] * rH, hH[1] * rH, hH[2] * rH)) return !1
          }
          return !0
        }(BH.sQ.CX, XH, GH, YH), QH = null === tH || Math.abs(XH - tH[0]) > 8 || Math.abs(GH - tH[1]) > 8 || Math.abs(YH - tH[2]) > 8, WH = !zH || QH || performance.now() - hH >= 1e4;
        zH = uH, uH && WH && (rH = EH, hH = performance.now(), tH = [XH, GH, YH], (0, AH.sendColyMessage)(CH.yg, {
          FC: EH
        }))
      };
      return HH.on("IX", EH), () => {
        HH.off("IX", EH)
      }
    }
    var YB = LH(39930),
      uB = LH(1509),
      QB = LH(3030),
      WB = LH(1871),
      MB = LH(3209),
      xB = LH(5253);
    class vB {
      constructor(HH, BH, LH) {
        this.bG = HH, this.gameNameWithVariation = BH, this.connectionResume = LH, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        xB.d.reset(), (0, tB.b)()
      }
      startChunkReports() {
        const HH = function(HH) {
            let BH = null,
              LH = -1 / 0,
              rH = null;
            const SH = () => {
                rH = null;
                const SH = Math.ceil(HH.lK[0]),
                  hH = Math.ceil(HH.lK[1]);
                BH && BH[0] === SH && BH[1] === hH || (BH = [SH, hH], LH = performance.now(), (0, AH.sendColyMessage)(CH.xg, {
                  Kt: SH,
                  ct: hH
                }))
              },
              hH = () => {
                null === rH && (rH = setTimeout(SH, Math.max(0, LH + 250 - performance.now())))
              };
            return SH(), HH.on("addRemoveDistanceChanged", hH), () => {
              HH.off("addRemoveDistanceChanged", hH), null !== rH && (clearTimeout(rH), rH = null)
            }
          }(this.bG.cX),
          BH = GB(this.bG);
        this.stopChunkReports = () => {
          HH(), BH()
        }
      }
      restartChunkStreaming() {
        (0, LB.h)(this.bG, (0, zH.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - YB.e)), this.startChunkReports()
      }
      register(HH) {
        const BH = this.bG,
          LH = (0, zH.b)();
        HH.lT(CH.jd, (HH => {
          xH.e.applyNewClientOptions(HH)
        })), HH.lT(CH.Ad, (HH => {
          QB.c.onReceiveColyseusPing(HH)
        })), HH.lT(CH.Ke, (HH => {
          let {
            key: BH,
            value: LH
          } = HH;
          (0, vH.setCookie)(this.gameNameWithVariation, BH, LH)
        })), HH.lT(CH.Re, (HH => {
          MH.k.AX("setDiscordReportKey", HH)
        })), (0, AH.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), HH.lT(CH.wc, (rH => {
          const {
            LA: SH,
            AA: hH
          } = rH;
          if ((0, AH.setAdjustment)(hH), this.connectionResume.onInitialInfo(rH.rA, rH.SA), AH.offlineInputReplay.vI(rH.hA), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", SH);
            try {
              null === rH.tA && (0, zH.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), mH(BH.cX), xH.e.apply({
                shopInfo: null,
                _shopVersion: EB.e
              });
              const LH = BH.pT.KLH(BH.lF);
              LH.qL && (LH.chestClosed(), MH.k.AX("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), MH.k.AX("initInfoReceived", HH)
            } finally {
              const HH = null === rH.tA ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = HH, this.connectionResume.onResumeInitialInfo(rH.tA, (() => {
                HH.endSeq = (0, zH.b)().client.inventoryPrediction.lastActionSeq
              })), null === HH && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", SH), MH.k.AX("sessionReplayJoinTicket", rH.XA), WB.e.markAdmitted(), (0, LB.l)(BH), MH.k.AX("loadingScreenState", "loadingPage:loadingWorld"), BH.JBH = SH, BH.pT.aBH(BH.lF, BH.pT.names.entityName) && BH.pT.fn(BH.lF, BH.pT.names.entityName), (0, zH.b)().setEntityName(BH.JBH, (0, zH.b)().getRawEntityName(BH.lF)), BH.mF[BH.JBH] = {}, BH.pT.yR(BH.lF, BH.pT.names.entityName), MH.k.AX("initInfoReceived", HH), this.startChunkReports(), LH.client.onServerConnectionFinalised()
        })), HH.lT(CH.we, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const HH = this.replayResume;
            if (this.replayResume = null, !HH) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: LH
            } = (0, zH.b)().client, {
              sync: rH
            } = HH, SH = new Set(AH.offlineInputReplay.takeDroppedActions());
            if (rH) {
              var hH;
              const AH = null !== (hH = HH.endSeq) && void 0 !== hH ? hH : LH.lastActionSeq;
              LH.forget((HH => HH > rH.lL && HH <= AH || SH.has(HH))), hB(BH, LH, MH.k, rH.lL, rH.load)
            } else LH.dropPending(), LH.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), HH.lT(CH.hf, (HH => {
          let {
            eL: LH,
            jL: AH,
            lL: rH
          } = HH;
          const {
            inventoryPrediction: SH
          } = (0, zH.b)().client, hH = () => {
            BH.pT.KLH(BH.lF).loadFromString(LH)
          };
          this.replayResume && (this.replayResume.sync = {
            lL: rH,
            load: hH
          }), hB(BH, SH, MH.k, rH, hH, AH)
        })), HH.lT(CH.Nd, (HH => {
          let {
            type: BH,
            location1: LH,
            location2: AH,
            location3: rH,
            score: SH
          } = HH;
          (0, MB.logProgressionEvent)({
            type: BH,
            location1: LH,
            location2: AH,
            location3: rH,
            score: SH
          })
        })), HH.lT(CH.ve, (HH => {
          let {
            type: BH,
            resourceType: LH,
            amount: AH,
            category: rH,
            itemName: SH
          } = HH;
          (0, MB.logResourceEvent)({
            type: BH,
            resourceType: LH,
            amount: AH,
            category: rH,
            itemName: SH
          })
        })), HH.lT(CH.Sc, (HH => {
          let {
            leaveEventType: BH,
            category: LH,
            subCategory: AH,
            value: rH
          } = HH;
          (0, MB.updateLeaveValue)({
            leaveEventType: BH,
            category: LH,
            subCategory: AH,
            value: rH
          })
        })), HH.lT(CH.Ub, (HH => {
          let {
            cat1: BH,
            cat2: LH,
            cat3: AH,
            value: rH
          } = HH;
          (0, MB.logCustomAnalyticsEvent)({
            cat1: BH,
            cat2: LH,
            cat3: AH,
            value: rH
          })
        })), HH.lT(CH.Lc, (HH => {
          (0, zH.b)().client.leaveGameUnwanted({
            reason: (0, zB.e)(HH),
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, uB.navigatePreserveSearch)("/")
        })), HH.lT(CH.Fe, (HH => {
          MH.k.AX("serverUpdating", Date.now() + HH, !0)
        })), HH.lT(CH.fd, CB.b), HH.lT(CH._c, (HH => {
          console.error(`[logErrorToConsole]: ${HH}`)
        }))
      }
    }
    var PB = LH(39936),
      TB = LH(39948),
      UB = LH(1005),
      VB = LH(39940),
      OB = LH(2619),
      bB = LH(4019);
    class kB {
      constructor(HH, BH) {
        this.bG = HH, this.clientApi = BH
      }
      register(HH) {
        const BH = this.bG,
          LH = (0, zH.b)();
        HH.lT(CH.xb, (HH => {
          let {
            chatMsgId: BH,
            worldCodeLineId: LH,
            content: AH,
            chatterEId: rH,
            chatterObjectsToReplay: SH
          } = HH;
          MH.k.AX("chat", {
            serverChatMsgId: BH,
            worldCodeLineId: LH,
            content: AH,
            chatterEId: rH,
            chatterObjectsToReplay: SH
          }, !0)
        })), HH.lT(CH.ub, (HH => {
          let {
            chatMsgId: BH
          } = HH;
          MH.k.AX("chatRemoved", BH, !0)
        })), HH.lT(CH.kf, (HH => {
          MH.k.AX("TopRightHelper", HH, !0)
        })), HH.lT(CH.if, (HH => {
          (0, PB.b)(HH)
        })), HH.lT(CH.Pc, (HH => {
          let {
            category: BH,
            timeframe: LH,
            data: AH
          } = HH;
          MH.k.AX("leaderboardResponse", {
            category: BH,
            timeframe: LH,
            data: AH
          })
        })), HH.lT(CH.ff, (() => {
          MH.k.AX("showShopTutorial", null, !0)
        })), HH.lT(CH.Ld, (HH => {
          MH.k.AX("progressBarUpdate", HH, !0)
        })), HH.lT(CH.xc, (HH => {
          MH.k.AX("middleScreenBarInitiate", {
            duration: HH.gS,
            NS: HH.NS,
            horizBarRemOffset: HH.RS
          }, !0)
        })), HH.lT(CH.ae, (() => {
          MH.k.AX("middleScreenBarRemove", !0)
        })), HH.lT(CH.Ne, (HH => {
          let {
            id: BH,
            position: LH,
            style: AH,
            KA: rH,
            eA: SH
          } = HH;
          MH.k.AX("setDirectionArrow", {
            id: BH,
            position: LH,
            style: AH,
            text: (0, CH.z)(rH),
            eA: SH
          }, !0)
        })), HH.lT(CH.Fb, (HH => {
          let {
            id: BH
          } = HH;
          MH.k.AX("clearDirectionArrow", {
            id: BH
          }, !0)
        })), HH.lT(CH.Rb, (HH => {
          (0, bB.onCosmeticPackGranted)(HH)
        })), HH.lT(CH.sd, (HH => {
          let {
            id: BH,
            qH: LH
          } = HH;
          const {
            type: rH,
            params: SH
          } = (0, TB.d)(LH), hH = {
            ...SH
          };
          for (const AH of TB.c) AH in hH && hH[AH] && (hH[AH] = (0, CH.z)(hH[AH]));
          xB.d.queueQTE(BH, rH, hH).getResult().then((HH => {
            "boolean" === typeof HH && (0, AH.sendColyMessage)(CH.hi, {
              qteId: BH,
              qteResponse: HH
            })
          }))
        })), HH.lT(CH.ce, (HH => {
          xB.d.cancelQTE(HH)
        })), (0, AH.onGameResetOnce)((() => {
          xB.d.reset()
        })), HH.lT(CH.td, (HH => {
          let {
            id: BH,
            clientParameters: LH
          } = HH;
          (0, tB.f)(BH, LH)
        })), HH.lT(CH.de, (HH => {
          (0, tB.i)(HH)
        })), HH.lT(CH.qf, (HH => {
          let {
            text: BH,
            id: LH,
            destructive: rH
          } = HH;
          (0, tB.m)(LH, BH, rH, (HH => {
            (0, AH.sendColyMessage)(CH.Ij, {
              Ih: LH,
              fh: HH,
              Kh: 5
            })
          }))
        })), HH.lT(CH.xd, (HH => {
          let {
            info: BH
          } = HH;
          MH.k.AX("overShopInfo", BH, !0)
        })), HH.lT(CH.kc, (HH => {
          let {
            eS: LH,
            qS: AH
          } = HH;
          this.clientApi.openShop(BH.lF, LH, AH)
        })), HH.lT(CH.gc, (HH => {
          let {
            Zr: BH,
            dr: LH,
            ar: AH
          } = HH;
          MH.k.AX("flyingMiddleMessage", {
            content: (0, CH.z)(BH),
            dr: LH,
            ar: AH
          }, !0)
        })), HH.lT(CH.Df, (HH => {
          const BH = HH === UB.g ? null : {
            message: `Currently loaded as variation: ${HH}`,
            type: "Warning"
          };
          MH.k.AX("showPermanentBottomMessage", BH, !0)
        })), HH.lT(CH.mc, (HH => {
          let {
            messageType: BH,
            data: AH
          } = HH;
          (0, VB.f)(BH) ? (0, VB.c)(BH, AH) : ("freeCamPerms" === BH && LH.client.freeCameraController.setPerms(AH.key, AH.value), LH.client.triggerGameCallback("onReceivedMessageFromServer", BH, AH))
        })), HH.lT(CH.Lb, OB.n)
      }
    }
    class mB {
      constructor(HH, BH, LH, AH) {
        this.gameNameWithVariation = HH, this.bG = LH, this.connectionResume = AH, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new TH.c(BH, this.bG)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, AH.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      NEH(HH) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new TH.c(HH, this.bG), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(HH, BH) {
        const LH = this.bG,
          AH = HH => {
            this.stateReplicationHandler.setUpIfQueued(HH)
          };
        new vB(LH, this.gameNameWithVariation, this.connectionResume).register(HH), new oH(LH).register(HH), new JH(LH).register(HH), new eH(LH, AH).register(HH), new dH(LH, AH).register(HH), new kB(LH, BH).register(HH), new SB(LH, AH).register(HH)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var oB = LH(39957),
      IB = LH(39959),
      fB = LH(656),
      lB = LH(1826);
    class KB {
      constructor(HH, BH, LH, AH) {
        this.msgHandler = LH, this.listener = AH, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new oB.d({
          reconnect: HH,
          isLive: () => AH.isLive(),
          onReconnected: HH => {
            this.resumeOnRoom(HH)
          },
          onGaveUp: (HH, BH) => {
            AH.onGaveUp(HH, BH)
          },
          freeze: BH,
          releaseSeat: BH => {
            HH(BH).then((HH => {
              HH.leave(!0)
            }), (HH => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", HH)
            }))
          }
        })
      }
      onInitialInfo(HH, BH) {
        this.session.onInitialInfo(HH, BH)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(HH, BH) {
        if (this.session.onResuming(), null === HH) {
          try {
            (0, zH.b)().client.itemDropPrediction.reset()
          } catch (LH) {
            console.error("Error dropping the item drop predictions on resuming", LH)
          }
          return AH.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, zH.b)().client.itemDropPrediction.onResumeReplayOffered(), AH.offlineInputReplay.replayFrom(HH.CA, BH)
      }
      onResumed(HH) {
        this.setSuspended(!1), (0, AH.resendBeacons)();
        try {
          HH()
        } catch (BH) {
          console.error("Error completing the resume", BH)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(HH) {
        const BH = (0, fB.g)((() => HH.connection.isOpen));
        HH.eT(BH);
        const LH = new IB.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(HH, "silent"), HH.leave(!1))
        }));
        HH.onStateChange((() => {
          LH.heard()
        }));
        const AH = BH => {
          BH.persisted || HH.leave(!0)
        };
        window.addEventListener("pagehide", AH), HH.eT(((BH, LH) => {
          if (HH === this.attachedRoom && this.listener.isLive()) return (0, SH.k)(BH) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${BH}, reconnecting`), this.listener.onDropped(BH, LH), void this.onConnectionDropped(HH, String(BH))) : void this.listener.onRoomLeft(BH, LH)
        })), this.attachedRoom = HH, this.detachRoomListeners = () => {
          BH(), LH.dispose(), window.removeEventListener("pagehide", AH)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(HH) {
        HH !== this.suspended && (this.suspended = HH, (0, AH.setConnectionSuspended)(HH), (0, zH.b)().client.itemDropPrediction.setSuspended(HH))
      }
      detachRoom() {
        var HH;
        null === (HH = this.detachRoomListeners) || void 0 === HH || HH.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(HH, BH) {
        (0, lB.reportClientError)("disconnect", "Left room", BH), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), AH.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(HH.reconnectionToken)
      }
      resumeOnRoom(HH) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), HH.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, ZH.l)(), AH.offlineInputReplay.onConnectionReplaced(), this.msgHandler.NEH(HH), this.listener.onReconnected(HH), this.attachRoom(HH)
      }
    }
    var cB = LH(3296),
      eB = LH(3299),
      qB = LH(1297),
      gB = LH(1253),
      NB = LH(5131),
      RB = LH(3503),
      jB = LH(1260),
      nB = LH(38563),
      FB = LH(39967),
      DB = LH(9627),
      wB = LH(39975),
      ZB = LH(1148),
      dB = LH(37366),
      aB = LH(39983),
      sB = LH(1757),
      JB = LH(3046),
      iB = LH(1502);

    function pB(HH) {
      var BH, LH;
      if ("object" !== typeof HH || null === HH) return {
        errType: typeof HH
      };
      const AH = HH;
      return {
        errType: null !== (BH = null === (LH = HH.constructor) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : "",
        errName: "string" === typeof AH.name ? AH.name : "",
        eventType: "string" === typeof AH.type ? AH.type : "",
        errStack: "string" === typeof AH.stack ? AH.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function yB(HH) {
      if ("undefined" !== typeof ProgressEvent && HH instanceof ProgressEvent) return !0;
      if (!(HH instanceof Error)) return !1;
      const BH = HH.code;
      return "ServerError" === HH.name && void 0 === BH || "AbortError" === HH.name || "seat reservation expired." === HH.message || "early_leave" === HH.message
    }(0, QH.o)((HH => {
      (0, lB.reportClientError)("wasm_net", HH)
    }));
    let HL = !0;

    function BL() {
      HL = !1
    }
    class LL {
      constructor(HH) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.bG = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = HH.gameNameWithVariation, this.lobbyName = HH.lobbyName, this.colyClient = HH.colyClient, this.userContext = HH.userContext
      }
      async connectToServer(HH, BH, LH) {
        xH.e.reset(), HH.mF = {
          [HH.lF]: {}
        }, HH.JBH = void 0, (0, ZH.l)(), (0, zH.b)().removeAllEntityNames(), (0, zH.b)().setEntityName(HH.lF, this.userContext.getPlayerName()), (0, qB.p)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, sB.e)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const hH = performance.now();
        LH.aborted || (0, gB.v)("wasm_core_ready", hH);
        const tH = (0, wB.g)(this.userContext, (() => {
          const {
            roomName: AH,
            joinOptions: rH
          } = (0, PH.i)(this.userContext, this.gameNameWithVariation, this.lobbyName, BH, (HH => RB.b.isUsingCustomGameTexturePack(HH)));
          return rH.joinAdHold = this.joinAdHold, rH.renderBackend = (0, JB.e)(HH.mX), (0, FB.f)((() => this.colyClient.joinOrCreateUntil(LH, AH, rH)), LH)
        }));
        return MH.k.AX("loadingScreenState", "loadingPage:joiningLobby"), await tH.then((BH => {
          if (this.joinedAt = performance.now(), (0, gB.v)("wasm_joined", this.joinedAt), this.bG = HH, this.joinAdHold) {
            const HH = (0, sB.o)((() => {
              BH.send(rH.f), (0, gB.q)(), WB.e.markJoinAdEnded()
            }));
            BH.eT(HH), (0, AH.onGameResetOnce)(HH)
          }
          const LH = new WH(BH);
          this.connectionResume = new KB((HH => this.colyClient.reconnect(HH)), (BH => {
            HH.IK(BH)
          }), LH, {
            isLive: () => (0, zH.b)().client.getMsgHandler() === LH,
            onDropped: (HH, BH) => {
              (0, eB.h)(HH) || this.logUnrecognisedConnectionLoss(HH, void 0, {
                site: "drop",
                closeReason: null !== BH && void 0 !== BH ? BH : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (HH, BH) => {
              this.onRoomLeft(HH, BH)
            },
            onReconnected: HH => {
              this.incomingMsgInitialisor.NEH(HH), this.checkSendPath = (0, nB.e)(LH, HH, QH.r)
            },
            onGaveUp: (HH, BH) => {
              this.onResumeGaveUp(HH, BH)
            }
          }), this.connectionResume.attachRoom(BH), (0, AH.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const SH = LH.send,
            hH = LH.lT,
            tH = LH.KAH.send,
            CH = LH.KAH.lT,
            EH = LH.qEH;
          this.checkSendPath = (0, nB.e)(LH, BH, QH.r);
          const XH = setInterval((() => {
            SH === LH.send && hH === LH.lT && tH === LH.KAH.send && CH === LH.KAH.lT && EH === LH.qEH || BL(), this.checkSendPath()
          }), 1e4);
          return (0, AH.onGameResetOnce)((() => {
            clearInterval(XH)
          })), {
            success: !0,
            successDetails: LH
          }
        })).catch((BH => {
          if (LH.aborted && BH === (0, ZB.g)(LH)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (BH instanceof dB.c) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: BH.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, aB.b)(BH, BH.leg)
            }
          };
          HH.PQ(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${BH.code}\n`, BH);
          const AH = BH.code;
          return AH === SH.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: SH.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(AH, BH.message, {
                site: "join",
                sinceJoinStart: (0, eB.d)(performance.now() - hH),
                ...pB(BH)
              }, yB(BH)),
              rematch: (0, FB.e)(BH),
              gameRefused: (0, DB.d)(BH),
              joinFailure: (0, aB.b)(BH, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(HH, BH, LH) {
        MH.k.AX("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new mB(this.gameNameWithVariation, BH.KAH, HH, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const rH = BH.FEH();
        this.incomingMsgInitialisor.setupOnMessageListeners(rH, LH), (0, AH.onConnectionToServerReady)(rH, BH), this.joinAdHold && WB.e.markAdmissionAwaited(), rH.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(HH, BH) {
        (0, jB.TQ)(new Error("Reconnect failed"), {
          ...(0, cB.f)(BH),
          game: this.gameNameWithVariation
        }), (0, lB.reportClientError)("disconnect", "Reconnect failed", BH.reason), (0, zH.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !HH,
          canPlayAgain: HH,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, uB.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, eB.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(HH, BH) {
        var LH;
        if (HH === SH.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${HH}`), HH === SH.e.serverUpdating.code) return (0, lB.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, zH.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.bG.PQ(`Kicked from server with code ${HH}`, new Error);
        const AH = Object.keys(SH.e).find((BH => SH.e[BH].code === HH));
        (0, lB.reportClientError)("disconnect", "Left room", null !== AH && void 0 !== AH ? AH : String(HH)), iB.d.leftGame(this.gameNameWithVariation, HH);
        const rH = this.onConnectionToServerLost(HH, void 0, {
          site: "leave",
          closeReason: null !== BH && void 0 !== BH ? BH : "",
          sinceJoined: this.sinceJoined()
        });
        (0, zH.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${rH.reason}`,
          canReconnect: rH.canReconnect,
          requiresRefresh: rH.requiresRefresh,
          automaticallyReconnect: null !== (LH = rH.automaticallyReconnect) && void 0 !== LH && LH
        }), (0, uB.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, NB.z)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, uB.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(HH, BH, LH) {
        var AH;
        let rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (AH = BH) && void 0 !== AH && AH.endsWith(SH.n) && (this.userContext.invalidateTrafficCode(), BH = BH.replace(SH.n, "")), HH === SH.e.outdatedVersion.code) return console.error("Outdated client with version ", hH.d, ", refreshing page"), (0, vH.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (HH === SH.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, vH.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const hH in SH.e) {
          const {
            code: LH,
            text: AH,
            canReconnect: rH
          } = SH.e[hH];
          if (LH === HH) {
            console.log("matched known error", HH, "leaving game");
            return {
              reason: "" !== AH ? AH : BH || `Code: ${HH}`,
              requiresRefresh: !1,
              canReconnect: rH,
              automaticallyReconnect: LH === SH.e.customGameUpdated.code || LH === SH.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, eB.e)(HH) || rH ? console.warn("Connection lost", HH, BH) : this.logUnrecognisedConnectionLoss(HH, BH, LH), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${HH}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: rH ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(HH, BH, LH) {
        (0, jB.TQ)(new Error("Unrecognised connection loss"), {
          code: String(HH),
          cause: null !== BH && void 0 !== BH ? BH : "",
          ...LH,
          game: this.gameNameWithVariation,
          ...(0, eB.i)()
        })
      }
    }
  },
  39891: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => dL,
      d: () => yL
    });
    var AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH, KH, cH, eH, qH, gH, NH, RH, jH, nH, FH, DH, wH, ZH, dH, aH, sH, JH, iH, pH, yH, HB, BB, LB, AB, rB, SB, hB, tB, zB, CB, EB, XB, GB, YB, uB, QB, WB, MB, xB, vB, PB, TB, UB, VB, OB, bB, kB, mB, oB, IB, fB, lB, KB, cB, eB, qB, gB, NB, RB, jB, nB, FB, DB, wB, ZB, dB, aB, sB, JB, iB, pB = LH(18),
      yB = LH(38026),
      HL = LH(39899),
      BL = LH(39903),
      LL = LH(9833),
      AL = LH(614),
      rL = LH(609),
      SL = LH(37654);
    let hL = (AH = (0, LL.type)("number"), rH = (0, LL.type)("number"), SH = (0, LL.type)("number"), hH = (0, LL.type)("number"), tH = (0, LL.type)("number"), zH = (0, LL.type)("number"), CH = (0, LL.type)("string"), EH = class extends LL.Schema {
        constructor() {
          super(...arguments), (0, HL.c)(this, "id", XH, this), (0, HL.c)(this, "amount", GH, this), (0, HL.c)(this, "x", YH, this), (0, HL.c)(this, "y", uH, this), (0, HL.c)(this, "z", QH, this), (0, HL.c)(this, "size", WH, this), (0, HL.c)(this, "attributes", MH, this)
        }
      }, XH = (0, BL.b)(EH.prototype, "id", [AH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), GH = (0, BL.b)(EH.prototype, "amount", [rH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), YH = (0, BL.b)(EH.prototype, "x", [SH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uH = (0, BL.b)(EH.prototype, "y", [hH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), QH = (0, BL.b)(EH.prototype, "z", [tH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), WH = (0, BL.b)(EH.prototype, "size", [zH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), MH = (0, BL.b)(EH.prototype, "attributes", [CH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), EH),
      tL = (xH = (0, LL.type)("string"), vH = (0, LL.type)("string"), PH = class extends LL.Schema {
        constructor() {
          super(...arguments), (0, HL.c)(this, "itemName", TH, this), (0, HL.c)(this, "enchantmentTier", UH, this)
        }
      }, TH = (0, BL.b)(PH.prototype, "itemName", [xH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), UH = (0, BL.b)(PH.prototype, "enchantmentTier", [vH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), PH),
      zL = (VH = (0, LL.type)("string"), OH = (0, LL.type)("string"), bH = (0, LL.type)("number"), kH = (0, LL.type)("number"), mH = (0, LL.type)("number"), oH = (0, LL.type)("float32"), IH = (0, LL.type)("float32"), fH = (0, LL.type)("float32"), lH = (0, LL.type)("string"), KH = (0, LL.type)(["number"]), cH = (0, LL.type)("boolean"), eH = class extends LL.Schema {
        constructor() {
          super(...arguments), (0, HL.c)(this, "type", qH, this), (0, HL.c)(this, "name", gH, this), (0, HL.c)(this, "x", NH, this), (0, HL.c)(this, "y", RH, this), (0, HL.c)(this, "z", jH, this), (0, HL.c)(this, "xRotation", nH, this), (0, HL.c)(this, "yRotation", FH, this), (0, HL.c)(this, "zRotation", DH, this), (0, HL.c)(this, "followingEId", wH, this), (0, HL.c)(this, "followingOffset", ZH, this), (0, HL.c)(this, "shouldMatchFollowingEntityRotation", dH, this)
        }
      }, qH = (0, BL.b)(eH.prototype, "type", [VH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), gH = (0, BL.b)(eH.prototype, "name", [OH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), NH = (0, BL.b)(eH.prototype, "x", [bH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), RH = (0, BL.b)(eH.prototype, "y", [kH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jH = (0, BL.b)(eH.prototype, "z", [mH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nH = (0, BL.b)(eH.prototype, "xRotation", [oH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), FH = (0, BL.b)(eH.prototype, "yRotation", [IH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), DH = (0, BL.b)(eH.prototype, "zRotation", [fH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wH = (0, BL.b)(eH.prototype, "followingEId", [lH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ZH = (0, BL.b)(eH.prototype, "followingOffset", [KH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new LL.ArraySchema(0, 0, 0)
        }
      }), dH = (0, BL.b)(eH.prototype, "shouldMatchFollowingEntityRotation", [cH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), eH),
      CL = (aH = (0, LL.type)("float32"), sH = (0, LL.type)("float32"), JH = (0, LL.type)("boolean"), iH = (0, LL.type)("boolean"), pH = (0, LL.type)("float32"), yH = (0, LL.type)("boolean"), HB = (0, LL.type)("string"), BB = (0, LL.type)("string"), LB = (0, LL.type)("string"), AB = (0, LL.type)("string"), rB = (0, LL.type)(["number"]), SB = (0, LL.type)("number"), hB = (0, LL.type)({
        map: tL
      }), tB = class extends zL {
        constructor() {
          super(...arguments), (0, HL.c)(this, "scale", zB, this), (0, HL.c)(this, "speed", CB, this), (0, HL.c)(this, "jumping", EB, this), (0, HL.c)(this, "crouching", XB, this), (0, HL.c)(this, "cameraPitch", GB, this), (0, HL.c)(this, "armSwinging", YB, this), (0, HL.c)(this, "heldItemName", uB, this), (0, HL.c)(this, "heldItemEnchantmentTier", QB, this), (0, HL.c)(this, "pose", WB, this), (0, HL.c)(this, "ridingVehicleEId", MB, this), (0, HL.c)(this, "meshOffset", xB, this), (0, HL.c)(this, "baseRenderHeading", vB, this), (0, HL.c)(this, "armour", PB, this)
        }
      }, zB = (0, BL.b)(tB.prototype, "scale", [aH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), CB = (0, BL.b)(tB.prototype, "speed", [sH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), EB = (0, BL.b)(tB.prototype, "jumping", [JH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), XB = (0, BL.b)(tB.prototype, "crouching", [iH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), GB = (0, BL.b)(tB.prototype, "cameraPitch", [pH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), YB = (0, BL.b)(tB.prototype, "armSwinging", [yH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), uB = (0, BL.b)(tB.prototype, "heldItemName", [HB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), QB = (0, BL.b)(tB.prototype, "heldItemEnchantmentTier", [BB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), WB = (0, BL.b)(tB.prototype, "pose", [LB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), MB = (0, BL.b)(tB.prototype, "ridingVehicleEId", [AB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), xB = (0, BL.b)(tB.prototype, "meshOffset", [rB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new LL.ArraySchema(0, 0, 0)
        }
      }), vB = (0, BL.b)(tB.prototype, "baseRenderHeading", [SB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), PB = (0, BL.b)(tB.prototype, "armour", [hB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new LL.MapSchema
        }
      }), tB),
      EL = (TB = (0, LL.type)("string"), UB = (0, LL.type)("string"), VB = (0, LL.type)("string"), OB = (0, LL.type)("uint8"), bB = class extends CL {
        constructor() {
          super(...arguments), (0, HL.c)(this, "variation", kB, this), (0, HL.c)(this, "ownerDbId", mB, this), (0, HL.c)(this, "metaInfo", oB, this), (0, HL.c)(this, "aiState", IB, this)
        }
      }, kB = (0, BL.b)(bB.prototype, "variation", [TB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), mB = (0, BL.b)(bB.prototype, "ownerDbId", [UB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), oB = (0, BL.b)(bB.prototype, "metaInfo", [VB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), IB = (0, BL.b)(bB.prototype, "aiState", [OB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), bB);
    fB = (0, LL.type)("string"), lB = (0, LL.type)("string"), KB = (0, LL.type)("string"), cB = (0, LL.type)("string"), eB = class extends zL {
      constructor() {
        super(...arguments), (0, HL.c)(this, "meshKind", qB, this), (0, HL.c)(this, "meshOpts", gB, this), (0, HL.c)(this, "pose", NB, this), (0, HL.c)(this, "leaderboardTop", RB, this)
      }
    }, qB = (0, BL.b)(eB.prototype, "meshKind", [fB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), gB = (0, BL.b)(eB.prototype, "meshOpts", [lB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), NB = (0, BL.b)(eB.prototype, "pose", [KB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), RB = (0, BL.b)(eB.prototype, "leaderboardTop", [cB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function XL(HH) {
      return Object.keys(LL.Metadata.getFields(HH))
    }
    const GL = XL(EL);
    for (const HA of AL.t)
      if (!GL.includes(HA)) throw new Error(`Mob Schema is missing a networked property: "${HA}"`);
    const YL = XL((jB = (0, LL.type)("string"), nB = (0, LL.type)("float32"), FB = (0, LL.type)("float32"), DB = (0, LL.type)("float32"), wB = (0, LL.type)("float32"), ZB = class extends zL {
      constructor() {
        super(...arguments), (0, HL.c)(this, "soundName", dB, this), (0, HL.c)(this, "volume", aB, this), (0, HL.c)(this, "refDistance", sB, this), (0, HL.c)(this, "maxHearDist", JB, this), (0, HL.c)(this, "rate", iB, this)
      }
    }, dB = (0, BL.b)(ZB.prototype, "soundName", [jB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), aB = (0, BL.b)(ZB.prototype, "volume", [nB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), sB = (0, BL.b)(ZB.prototype, "refDistance", [FB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return SL.i
      }
    }), JB = (0, BL.b)(ZB.prototype, "maxHearDist", [DB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return SL.e
      }
    }), iB = (0, BL.b)(ZB.prototype, "rate", [wB], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), ZB));
    for (const HA of rL.h)
      if (!YL.includes(HA)) throw new Error(`AudioEntity Schema is missing a replicated property: "${HA}"`);
    var uL = LH(39308),
      QL = LH(1182),
      WL = LH(619),
      ML = LH(39096),
      xL = LH(4617),
      vL = LH(317),
      PL = LH(38071),
      TL = LH(38970),
      UL = LH(2339),
      VL = LH(38048),
      OL = LH(39334),
      bL = LH(38444),
      kL = LH(330),
      mL = LH.n(kL),
      oL = LH(38817),
      IL = LH(37945),
      fL = LH(38950),
      lL = LH(38994);
    class KL {
      constructor(HH, BH) {
        this.bloxd = HH, this.eId = BH, this.bG = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Mu = !1, this.bG = HH.bG
      }
      initClient(HH) {
        var BH, LH, AH;
        this.colyseusEntity = HH, this.meshKind = HH.meshKind, this.meshOpts = HH.meshOpts, this.leaderboardTop = HH.leaderboardTop, this.bG.pT.add([HH.x, HH.y, HH.z], 1, 1, null, null, !1, !1, this.eId), this.bG.pT.yR(this.eId, "smoothToServerPos");
        const rH = "Person" === this.meshKind;
        this.bG.pT.yR(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...rH ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: rH ? [{
            nodeName: "HeadMesh",
            softTolerance: OL.j,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = pB.k.subscribe(`otherEntitySettings|${this.eId}|canSee`, (HH => {
          this.updateHidingMeshMgr()
        }));
        const SH = () => {
          const HH = this.bG.pT.VLH(this.eId);
          if (!HH) return;
          const BH = (0, bL.g)(this.eId);
          if ("number" === typeof HH.kR) {
            var LH, AH, rH, SH;
            const hH = null === (LH = (0, UL.h)("head", null === (rH = this.getSpec()) || void 0 === rH || null === (SH = rH.opts.textures) || void 0 === SH ? void 0 : SH.head)) || void 0 === LH || null === (AH = LH.personModel) || void 0 === AH ? void 0 : AH.fullBody;
            return this.bG.mX.bR.setPickable(HH.kR, BH && !hH), void(0, IL.updatePersonAttachmentPickability)(this.bG, this.eId, BH)
          }
          const hH = HH.mesh;
          if (hH)
            for (const tH of [hH, ...hH.getChildMeshes(!1)]) "jQ" in tH && !tH.name.startsWith("Cape|") && (tH.jQ = BH)
        };
        this.canAttackSub = pB.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, SH), this.interactableSub = pB.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, SH), this.overlayColourSub = pB.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (HH => {
          this.updateOverlayColour(HH)
        })), this.opacitySub = pB.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (HH => {
          this.updateOpacity(HH)
        })), this.zIndexSub = pB.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (HH => {
          this.updateZIndex(HH)
        }));
        const hH = this.bG.mF[this.bG.lF][this.eId];
        this.updateOverlayColour(null !== (BH = null === hH || void 0 === hH ? void 0 : hH.overlayColour) && void 0 !== BH ? BH : null), this.updateOpacity(null !== (LH = null === hH || void 0 === hH ? void 0 : hH.opacity) && void 0 !== LH ? LH : 1), this.updateZIndex(null !== (AH = null === hH || void 0 === hH ? void 0 : hH.zIndex) && void 0 !== AH ? AH : 0), this.multilineTextBoxSub = (0, VL.o)(this.bG, this.eId)
      }
      onChangeClient(HH, BH) {
        if ("xRotation" === HH || "yRotation" === HH || "zRotation" === HH)(0, VL.q)(this.bG, this.eId, HH, BH);
        else if ("pose" === HH) {
          const HH = this.bG.pT.ILH(this.eId);
          HH && (HH.pose = BH || "standing")
        } else "meshKind" === HH || "meshOpts" === HH ? (this[HH] = BH, this.queueMeshRebuild()) : "name" === HH && "" !== BH ? this.updateHidingMeshMgr() : "leaderboardTop" === HH && (this.leaderboardTop = BH, pB.k.AX(`leaderboardTop|${this.eId}`, BH))
      }
      disposeClient() {
        this.Mu = !0, this.bG.pT.deleteEntity(this.eId), pB.k.unsubscribe(this.canSeeSub), pB.k.unsubscribe(this.canAttackSub), pB.k.unsubscribe(this.interactableSub), pB.k.unsubscribe(this.overlayColourSub), pB.k.unsubscribe(this.opacitySub), pB.k.unsubscribe(this.zIndexSub), pB.k.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var HH, BH;
        return {
          canSee: null !== (HH = null === (BH = this.bG.mF[this.bG.lF][this.eId]) || void 0 === BH ? void 0 : BH.canSee) && void 0 !== HH && HH,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var HH, BH, LH;
        const {
          bG: AH
        } = this, {
          pT: rH
        } = AH, SH = this.getCurrentHidingMeshMgrState();
        if ((0, vL.ne)(this.previousHidingMeshManagerState, SH)) return;
        if (this.previousHidingMeshManagerState = SH, rH.fn(this.eId, "hidingMeshManager"), null === (HH = AH.mF[AH.lF][this.eId]) || void 0 === HH || !HH.canSee) return;
        const hH = this.getSpec();
        if (!hH) return;
        const {
          type: tH,
          opts: zH
        } = hH;
        "Person" === tH && (zH.textures = (0, UL.m)(zH.textures)), zH.eId = this.eId, rH.yR(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var HH, BH, LH;
            "Leaderboard" === tH && (zH.leaderboardTop = this.leaderboardTop);
            const SH = this.bloxd.client.meshCreator.getEntityMesh(tH, zH, (HH => {
              var BH, LH;
              if ("number" === typeof HH) {
                var rH, SH, hH;
                const BH = AH.mX.bR;
                BH.setEntityId(HH, this.eId);
                const LH = "Person" === tH && (null === (rH = (0, UL.h)("head", null === (hH = zH.textures) || void 0 === hH ? void 0 : hH.head)) || void 0 === rH || null === (SH = rH.personModel) || void 0 === SH ? void 0 : SH.fullBody);
                return void BH.setPickable(HH, (0, bL.g)(this.eId) && !LH)
              }
              const CH = HH;
              for (const tH of [CH, ...CH.getChildMeshes(!1)]) void 0 === tH.jQ || tH.name.startsWith("Cape|") || (tH.jQ = (0, bL.g)(this.eId), tH.metadata ??= new AH.mX.nQ, tH.metadata.eId = this.eId);
              this.updateOpacity(null !== (BH = null === (LH = AH.mF[AH.lF][this.eId]) || void 0 === LH ? void 0 : LH.opacity) && void 0 !== BH ? BH : 1)
            }));
            if (!SH) return;
            const {
              kR: hH,
              mesh: CH,
              meshOffset: EH,
              nameYOffset: XH,
              modelLoaded: GH
            } = SH;
            null === GH || void 0 === GH || GH.then((() => {
              var HH;
              (null === (HH = rH.VLH(this.eId)) || void 0 === HH ? void 0 : HH.mesh) === CH && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const YH = null === hH ? null : AH.mX.bR.yAH(hH, 0);
            if (rH.yR(this.eId, rH.names.mesh, {
                kR: hH,
                NAH: YH,
                mesh: CH,
                EzH: !1,
                jAH: "Leaderboard" !== tH,
                offset: EH.slice(),
                CzH: "ParticleEmitter" === tH && zH.followTargetMeshOffset ? HH => {
                  var BH;
                  mL().copy(HH, EH);
                  const LH = null === (BH = rH.GAH(this.eId)) || void 0 === BH ? void 0 : BH.Xu,
                    AH = void 0 === LH ? null : rH.ILH(LH);
                  if (AH) {
                    var SH, hH;
                    const BH = this.bloxd.getEntityHeading(null !== (SH = AH.ridingVehicleEId) && void 0 !== SH ? SH : LH, !0),
                      rH = Math.sin(BH),
                      tH = Math.cos(BH);
                    HH[0] += AH.meshOffset[0] * tH + AH.meshOffset[2] * rH, HH[1] += AH.meshOffset[1], HH[2] += AH.meshOffset[2] * tH - AH.meshOffset[0] * rH;
                    const zH = null !== (hH = AH.ridingVehicleEId) && void 0 !== hH ? hH : null;
                    null !== zH && (0, lL.d)(this.bG, zH, HH)
                  }
                } : null
              }), "Person" === tH) {
              var uH, QH, WH, MH;
              rH.yR(this.eId, rH.names.meshAttachments, {
                personFullBody: null !== (uH = null === (QH = (0, UL.h)("head", null === (MH = zH.textures) || void 0 === MH ? void 0 : MH.head)) || void 0 === QH || null === (WH = QH.personModel) || void 0 === WH ? void 0 : WH.fullBody) && void 0 !== uH && uH
              });
              for (const HH of QL.r) {
                var xH, vH, PH;
                const BH = null === (xH = zH.textures) || void 0 === xH ? void 0 : xH[HH];
                BH && null !== (vH = (0, UL.h)(HH, BH)) && void 0 !== vH && null !== (PH = vH.attachments) && void 0 !== PH && PH.length && TL.d.Player.meshApi.updatePlayerCosmetic(this.eId, hH, HH, BH)
              }
              rH.yR(this.eId, rH.names.moveState), rH.yR(this.eId, "updateWalkingState", {
                kR: hH,
                NAH: YH,
                walkingLegSwingDuration: OL.s
              }), rH.yR(this.eId, "humanoidMesh", {
                kR: hH,
                NAH: YH,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), rH.yR(this.eId, "animator", {
                kR: hH,
                NAH: YH,
                modelLifeformType: "Player"
              }), fL.g.hasAnimation("Person") && rH.yR(this.eId, "rigAnimation", {
                target: "Person",
                kR: hH
              }), rH.ILH(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === tH && null !== hH) {
              rH.yR(this.eId, "animator", {
                kR: hH,
                NAH: YH,
                modelLifeformType: null
              });
              const HH = (0, ML.p)(zH.blockName);
              null !== HH && rH.yR(this.eId, "rigAnimation", {
                target: HH,
                kR: hH
              })
            }
            rH.KzH(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: XH
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === zH.autoRotate && (rH.fn(this.eId, "meshRotation"), rH.yR(this.eId, "autoRotate"));
            const {
              lineToEId: TH
            } = zH;
            (0, WL.M)(TH) || rH.yR(this.eId, "lineToEntity", {
              lineToEId: TH
            });
            const UH = AH.mF[AH.lF][this.eId];
            this.updateOverlayColour(null !== (HH = null === UH || void 0 === UH ? void 0 : UH.overlayColour) && void 0 !== HH ? HH : null), this.updateOpacity(null !== (BH = null === UH || void 0 === UH ? void 0 : UH.opacity) && void 0 !== BH ? BH : 1), this.updateZIndex(null !== (LH = null === UH || void 0 === UH ? void 0 : UH.zIndex) && void 0 !== LH ? LH : 0)
          },
          removeMeshComponent: () => {
            "Person" !== tH && "BloxdBlock" !== tH || rH.fn(this.eId, "rigAnimation"), rH.fn(this.eId, rH.names.mesh), rH.aBH(this.eId, rH.names.meshAttachments) && rH.fn(this.eId, rH.names.meshAttachments), rH.fn(this.eId, "entityName"), rH.fn(this.eId, "autoRotate"), rH.fn(this.eId, "lineToEntity"), "Person" === tH ? (rH.fn(this.eId, rH.names.moveState), rH.fn(this.eId, "updateWalkingState"), rH.fn(this.eId, "humanoidMesh"), rH.fn(this.eId, "animator")) : "BloxdBlock" === tH && rH.fn(this.eId, "animator")
          },
          hideDist: null !== (BH = zH.hideDist) && void 0 !== BH ? BH : 80,
          movingHideDist: null !== (LH = zH.hideDist) && void 0 !== LH ? LH : 120,
          displayOutsideLoadedChunk: zH.hideDist > 100,
          immediatelyUpdate: !0,
          IE: "BloxdBlock" === tH ? zH.blockName : tH
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Mu || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, xL.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(HH) {
        var BH, LH;
        if ("Person" !== this.meshKind) return;
        let AH = new PL.d(0, 0, 0, 0);
        if (null !== HH) {
          const BH = (0, vL.W)(HH);
          AH = new PL.d(BH[0] / 255, BH[1] / 255, BH[2] / 255, .5)
        }
        const rH = null !== (BH = null === (LH = this.bG.pT.VLH(this.eId)) || void 0 === LH ? void 0 : LH.kR) && void 0 !== BH ? BH : null;
        null !== rH && TL.d.Player.meshApi.updateMeshOverlayColour(rH, AH)
      }
      updateZIndex(HH) {
        var BH;
        if ("Person" !== this.meshKind) return;
        const LH = null === (BH = this.bG.pT.VLH(this.eId)) || void 0 === BH ? void 0 : BH.kR;
        "number" === typeof LH && this.bG.mX.bR.setRenderingGroupId(LH, HH)
      }
      updateOpacity(HH) {
        const BH = this.bG.pT.VLH(this.eId);
        BH && ("number" !== typeof BH.kR ? BH.mesh && "ParticleEmitter" !== this.meshKind && (0, oL.d)(BH.mesh, HH) : TL.d.Player.meshApi.updateMeshOpacity(BH.kR, HH))
      }
    }
    var cL = LH(39894);
    class eL {
      constructor(HH, BH) {
        this.eId = BH, this.bG = void 0, this.schema = void 0, this.bG = HH.bG
      }
      initClient(HH) {
        this.schema = HH, this.bG.pT.add([HH.x, HH.y, HH.z], .1, .1, null, null, !1, !1, this.eId), this.bG.pT.yR(this.eId, "smoothToServerPos"), cL.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(HH) {
        rL.h.includes(HH) && cL.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        cL.e.remove(this.eId), this.bG.pT.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: HH,
          volume: BH,
          refDistance: LH,
          maxHearDist: AH,
          rate: rH
        } = this.schema;
        return {
          soundName: HH,
          volume: BH,
          refDistance: LH,
          maxHearDist: AH,
          rate: rH
        }
      }
    }
    var qL = LH(4061),
      gL = LH(37633),
      NL = LH(7007),
      RL = LH(38646),
      jL = LH(3038),
      nL = LH(39035),
      FL = LH(9786),
      DL = LH(39344),
      wL = LH(38605),
      ZL = LH(1826);
    class dL {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.KAH = HH, this.bG = BH, this.setupBudgetMs = LH, this.now = AH, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Mu = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Dv = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const HH of this.promotedSetups) {
            this.promotedSetups.delete(HH);
            const BH = this.queuedSetups.get(HH);
            BH && (this.queuedSetups.delete(HH), this.timedSetup(BH, HH))
          }
        }, this.createStateCallbacks = (0, FL.getStateCallbacks)(HH), this.roomStateCallbacks = this.createStateCallbacks(HH.state), this.roomState = HH.state, this.setupBudgetLeftMs = LH, this.lastRefillMs = AH()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.KAH.onStateChange(this.setUpPromoted), this.bG.on("beforeInputs", this.onFrame), this.bG.on("IX", this.Dv)
      }
      setUpQueuedEntities(HH) {
        var BH;
        if ((null === (BH = (0, jL.b)().client.getMsgHandler()) || void 0 === BH ? void 0 : BH.KAH) !== this.KAH) return this.bG.off("beforeInputs", this.onFrame), this.bG.off("IX", this.Dv), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (HH && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (mL().copy(aL, this.bG.pT.hT(this.bG.lF)); this.setupBudgetLeftMs > 0;) {
            const HH = this.nearestQueued(aL);
            if (null === HH) return;
            this.setUpIfQueued(HH), this.setUpPromoted()
          }
      }
      nearestQueued(HH) {
        let BH = null,
          LH = 1 / 0;
        return this.queuedSetups.forEach(((AH, rH) => {
          const SH = function(HH, BH) {
            return (BH.x - HH[0]) ** 2 + (BH.y - HH[1]) ** 2 + (BH.z - HH[2]) ** 2
          }(HH, AH);
          (null === BH || SH < LH) && (BH = rH, LH = SH)
        })), BH
      }
      setUpOrQueue(HH, BH) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(HH, BH) ? this.timedSetup(HH, BH) : this.queuedSetups.set(BH, HH)
      }
      mustSetUpNow(HH, BH) {
        const LH = this.bG.JBH;
        if (BH === LH) return !0;
        const AH = this.roomState.entities.get(LH);
        return !(!AH || AH.ridingVehicleEId !== BH && AH.followingEId !== BH) || (sL(HH.type) === uL.c || (0, jL.b)().getFollowingEntities(BH).length > 0)
      }
      setUpIfQueued(HH) {
        const BH = this.queuedSetups.get(HH);
        BH && (this.queuedSetups.delete(HH), this.timedSetup(BH, HH))
      }
      promoteIfQueued(HH) {
        null !== HH && this.queuedSetups.has(HH) && this.promotedSetups.add(HH)
      }
      timedSetup(HH, BH) {
        const LH = this.now();
        this.setupEntity(HH, BH), this.setupBudgetLeftMs -= this.now() - LH
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.aT(((HH, BH) => {
          this.bG.JBH ? this.setUpOrQueue(HH, BH) : this.deferEntitySetupUntilInitInfo(HH, BH)
        })), this.roomStateCallbacks.entities.bq(((HH, BH) => {
          const LH = this.deferredSetups.get(BH);
          LH && (pB.k.unsubscribe(LH), this.deferredSetups.delete(BH)), this.queuedSetups.delete(BH), this.detach(BH), (0, jL.b)().client.disposeEntity(BH)
        }))
      }
      deferEntitySetupUntilInitInfo(HH, BH) {
        const LH = pB.k.gM("initInfoReceived", (() => {
          this.deferredSetups.delete(BH), this.setUpOrQueue(HH, BH)
        }));
        this.deferredSetups.set(BH, LH), (0, qL.onGameResetOnce)((() => {
          this.deferredSetups.get(BH) === LH && (pB.k.unsubscribe(LH), this.deferredSetups.delete(BH)), (0, jL.b)().updatePositionAndPhysics(this.bG.lF, {
            type: NL.o.DEFAULT,
            tier: null
          }, !0), (0, jL.b)().takeHeldPlayerBodySize(this.bG.lF);
          const HH = this.bG.pT.ELH(this.bG.lF);
          HH && (HH.movementType = NL.m.NORMAL)
        }))
      }
      setupEntity(HH, BH) {
        const LH = BH === this.bG.JBH;
        if (LH)(0, jL.b)().client.Q0(this.bG.lF, null, null);
        else {
          const {
            type: LH
          } = HH, AH = sL(LH);
          if (void 0 === AH) return void
          function(HH, BH) {
            const LH = String(HH);
            if (JL.has(LH)) return;
            JL.add(LH);
            const AH = LH.length > 80 ? `${LH.slice(0,80)}...` : LH,
              rH = `No client handler for entity type ${JSON.stringify(AH)}, so entity ${BH} is not set up`;
            console.warn(rH), (0, ZL.reportClientError)("uncaught", rH, "unknown_entity_type")
          }(LH, BH);
          (0, jL.b)().client.Q0(BH, HH, new AH((0, jL.b)(), BH, LH))
        }
        const AH = this.createStateCallbacks(HH);
        if (LH) return this.setupMapSchemaCallbacks(BH, HH, AH, "armour"), this.setupScalarField(BH, HH, AH, "scale"), this.setupScalarField(BH, HH, AH, "ridingVehicleEId"), this.setupScalarField(BH, HH, AH, "followingEId"), this.setupScalarField(BH, HH, AH, "followingOffset"), void this.setupScalarField(BH, HH, AH, "shouldMatchFollowingEntityRotation");
        for (const rH of XL(HH.constructor)) HH[rH] instanceof LL.MapSchema ? this.setupMapSchemaCallbacks(BH, HH, AH, rH) : this.setupScalarField(BH, HH, AH, rH)
      }
      setupMapSchemaCallbacks(HH, BH, LH, AH) {
        const rH = LH[AH],
          SH = new Map;
        rH.aT(((LH, rH) => {
          if (this.onEntityFieldChange(HH, BH, AH, {
              key: rH,
              value: LH
            }), !(LH instanceof LL.Schema)) return;
          const hH = this.createStateCallbacks(LH),
            tH = [];
          for (const SH of XL(LH.constructor)) tH.push(this.listenForFutureChanges(hH, SH, (() => {
            this.onEntityFieldChange(HH, BH, AH, {
              key: rH,
              value: LH
            })
          })));
          SH.set(rH, (() => {
            for (const HH of tH) HH()
          }))
        })), rH.bq(((LH, rH) => {
          var hH;
          null === (hH = SH.get(rH)) || void 0 === hH || hH(), SH.delete(rH), this.onEntityFieldChange(HH, BH, AH, {
            key: rH,
            value: null
          })
        })), this.addDetacher(HH, (() => {
          for (const HH of SH.values()) HH();
          SH.clear()
        }))
      }
      setupScalarField(HH, BH, LH, AH) {
        this.onEntityFieldChange(HH, BH, AH, BH[AH]);
        const rH = this.listenForFutureChanges(LH, AH, (LH => {
          this.onEntityFieldChange(HH, BH, AH, LH)
        }));
        this.addDetacher(HH, rH)
      }
      addDetacher(HH, BH) {
        let LH = this.detachers.get(HH);
        LH || (LH = [], this.detachers.set(HH, LH)), LH.push(BH)
      }
      detach(HH) {
        for (const LH of null !== (BH = this.detachers.get(HH)) && void 0 !== BH ? BH : []) {
          var BH;
          LH()
        }
        this.detachers.delete(HH)
      }
      listenForFutureChanges(HH, BH, LH) {
        return HH.listen(BH, LH, !1)
      }
      onEntityFieldChange(HH, BH, LH, AH) {
        switch (LH) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(AH);
            const BH = this.bG.pT.ILH((0, gL.b)(HH));
            BH && (BH.ridingVehicleEId = AH);
            break
          }
          case "armour":
            this.handleArmourChange(HH, AH);
            break;
          case "followingEId":
            this.promoteIfQueued(AH), this.handleFollowingEIdChange(HH, BH, AH);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(HH, LH, AH);
            break;
          case "scale":
            this.handleScaleChange(HH, AH);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(HH, AH);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(HH, AH);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(HH, AH);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(HH, LH, AH)
        }(0, jL.b)().client.updateEntityField(HH, LH, AH)
      }
      handleArmourChange(HH, BH) {
        var LH, AH;
        const {
          key: rH,
          value: SH
        } = BH;
        (0, TL.w)(HH, rH, null !== (LH = null === SH || void 0 === SH ? void 0 : SH.itemName) && void 0 !== LH ? LH : null, null !== (AH = null === SH || void 0 === SH ? void 0 : SH.enchantmentTier) && void 0 !== AH ? AH : null)
      }
      handleFollowingEIdChange(HH, BH, LH) {
        const AH = (0, gL.b)(HH),
          rH = AH === this.bG.lF;
        if (this.bG.pT.fn(AH, this.bG.pT.names.HV), LH) this.bG.pT.fn(AH, "smoothToServerPos"), this.bG.pT.yR(AH, this.bG.pT.names.HV, {
          Xu: (0, gL.b)(LH),
          offset: Array.from(BH.followingOffset),
          YAH: BH.shouldMatchFollowingEntityRotation,
          MAH: !0,
          xAH: (HH, AH) => {
            if (mL().copy(HH, BH.followingOffset), BH.ridingVehicleEId === LH) {
              const BH = (0, gL.b)(LH),
                rH = (0, jL.b)().getEntityHeading(BH, AH);
              mL().iQ(HH, HH, mL().ZERO, rH)
            }
          }
        });
        else if (!rH) {
          this.bG.pT.aBH(AH, "smoothToServerPos") || this.bG.pT.yR(AH, "smoothToServerPos");
          const HH = this.bG.pT.getState(AH, "smoothToServerPos"),
            BH = this.bG.pT.A4(AH).position;
          (0, wL.setServerPosition)(HH, BH[0], BH[1], BH[2])
        }
      }
      handleRotationChange(HH, BH, LH) {
        const AH = "xRotation" === BH ? 0 : "yRotation" === BH ? 1 : 2;
        for (const rH of (0, jL.b)().getFollowingEntities(HH)) {
          const HH = this.bG.pT.getState(rH, "meshRotation"),
            BH = this.bG.pT.GAH(rH);
          HH && BH.YAH && (HH.serverSetRotation[AH] = LH)
        }
      }
      handleScaleChange(HH, BH) {
        const LH = (0, gL.b)(HH);
        if (pB.k.AX(`entityScale|${LH}`, BH), LH === this.bG.lF) {
          var AH;
          (0, jL.b)().removeFromEyeHeightCache(LH);
          const HH = this.bG.pT.ELH(this.bG.lF),
            BH = null !== (AH = null === HH || void 0 === HH ? void 0 : HH.physicsState) && void 0 !== AH ? AH : {
              type: NL.o.DEFAULT,
              tier: null
            };
          return void(0, jL.b)().updatePositionAndPhysics(this.bG.lF, BH, !1)
        }
        const rH = (0, jL.b)().getLifeformType(LH);
        if (null === rH) return;
        const {
          physicsBodyWidth: SH,
          physicsBodyHeight: hH
        } = (0, DL.c)(BH, rH);
        this.bG.pT.EAH(LH, SH, hH, SH)
      }
      handleBaseRenderHeadingChange(HH, BH) {
        const LH = this.bG.pT.getState(HH, "meshRotation");
        LH && (LH.baseRenderRotation[1] = BH);
        for (const AH of (0, jL.b)().getFollowingEntities(HH)) {
          const HH = this.bG.pT.getState(AH, "meshRotation"),
            LH = this.bG.pT.GAH(AH);
          HH && LH.YAH && (HH.baseRenderRotation[1] = BH)
        }
      }
      handleFollowingOffsetChange(HH, BH) {
        const LH = this.bG.pT.GAH((0, gL.b)(HH));
        if (LH && LH.offset) {
          const HH = BH ? Array.from(BH) : mL().ZERO;
          LH.offset[0] = HH[0], LH.offset[1] = HH[1], LH.offset[2] = HH[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(HH, BH) {
        const LH = this.bG.pT.GAH((0, gL.b)(HH));
        LH && (LH.YAH = null === BH || void 0 === BH || BH)
      }
      handlePositionChange(HH, BH, LH) {
        if (this.bG.pT.aBH(HH, "smoothToServerPos")) {
          const AH = this.bG.pT.getState(HH, "smoothToServerPos");
          (0, wL.setServerPositionAxis)(AH, iL[BH], LH)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.aT(((HH, BH) => {
          this.allItems[BH] = HH, (0, RL.l)(this.bG, BH, [HH.x, HH.y, HH.z], HH.id, {
            amount: HH.amount,
            attributes: JSON.parse(HH.attributes),
            QL: (0, yB.b)(this.bG).cantPickUpItem(BH),
            size: HH.size,
            predictedAt: (0, jL.b)().client.itemDropPrediction.onServerItemAdded(BH)
          });
          const LH = this.createStateCallbacks(HH);
          for (const AH of XL(hL)) this.onItemFieldChange(BH, AH, HH[AH]), this.addDetacher(BH, this.listenForFutureChanges(LH, AH, (HH => {
            this.onItemFieldChange(BH, AH, HH)
          })))
        })), this.roomStateCallbacks.items.bq(((HH, BH) => {
          delete this.allItems[BH], this.detach(BH), (0, jL.b)().client.itemDropPrediction.onServerItemRemoved(BH), this.bG.pT.aBH(BH, this.bG.pT.names.itemState) && this.bG.pT.deleteEntity(BH), (0, yB.b)(this.bG).disposeEntity(BH)
        }))
      }
      onItemFieldChange(HH, BH, LH) {
        if (BH in iL) {
          if (this.bG.pT.aBH(HH, "itemState")) {
            const AH = this.bG.pT.getState(HH, "smoothToServerPos");
            (0, wL.setServerPositionAxis)(AH, iL[BH], LH), (0, jL.b)().client.itemDropPrediction.onServerItemMoved(HH)
          }
          return
        }
        if (!this.bG.pT.aBH(HH, "itemState")) return;
        const AH = this.bG.pT.getState(HH, "itemState");
        "amount" === BH && LH !== AH.amount && (AH.creationTime = Date.now()), AH[BH] = "attributes" === BH ? JSON.parse(LH) : LH
      }
      dispose() {
        if (!this.Mu) {
          this.Mu = !0, this.bG.off("beforeInputs", this.onFrame), this.bG.off("IX", this.Dv), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const HH of this.deferredSetups.values()) pB.k.unsubscribe(HH);
          this.deferredSetups.clear(), this.bG.pT.fn(this.bG.lF, this.bG.pT.names.HV);
          for (const HH in this.allItems) this.bG.pT.deleteEntity(HH), delete this.allItems[HH];
          for (const HH of [...this.detachers.keys()]) this.detach(HH);
          (0, yB.b)(this.bG).clear();
          for (const HH of (0, jL.b)().client.iterateEntityIds())(0, jL.b)().client.disposeEntity(HH)
        }
      }
    }
    const aL = [0, 0, 0];

    function sL(HH) {
      if ("string" !== typeof HH) return;
      const BH = HH.indexOf("|"),
        LH = -1 === BH ? HH : HH.slice(0, BH),
        AH = yL();
      return Object.hasOwn(AH, LH) ? AH[LH] : void 0
    }
    const JL = new Set;
    const iL = {
      x: 0,
      y: 1,
      z: 2
    };
    let pL = null;

    function yL() {
      return null !== pL || (pL = {
        ...Object.fromEntries(rL.j.map((HH => {
          const {
            IE: BH
          } = (0, nL.b)(HH);
          return [HH, BH]
        }))),
        Pebble: uL.c,
        Snowball: uL.c,
        "Snowball Launcher": uL.c,
        "Reinforced Pebble": uL.c,
        Bullet: uL.c,
        "Reinforced Ball": uL.c,
        Ball: uL.c,
        Mango: uL.c,
        "Moonstone Orb": uL.c,
        ...Object.fromEntries(AL.w.map((HH => [(0, vL.dc)(HH), uL.c]))),
        Arrow: uL.c,
        "Arrow of Speed": uL.c,
        "Arrow of Poison": uL.c,
        "Arrow of Slowness": uL.c,
        "Arrow of Weakness": uL.c,
        "Arrow of Knockback": uL.c,
        "Arrow of Strength": uL.c,
        "Arrow of Invisibility": uL.c,
        "Arrow of Jumping": uL.c,
        "Arrow of Defense": uL.c,
        "Arrow of Instant Healing": uL.c,
        "Arrow of Instant Damage": uL.c,
        "Arrow of Regeneration": uL.c,
        "Arrow of Haste": uL.c,
        "Arrow of Shield": uL.c,
        "Arrow of Double Jump": uL.c,
        "Arrow of Heat Resistance": uL.c,
        "Arrow of X-Ray Vision": uL.c,
        "Arrow of Mining Yield": uL.c,
        "Arrow of Brain Rot": uL.c,
        "Arrow of Milk": uL.c,
        Fireball: uL.c,
        "Bouncy Bomb": uL.c,
        RPG: uL.c,
        "Obby RPG": uL.c,
        "Super RPG": uL.c,
        "Grenade Launcher": uL.c,
        Iceball: uL.c,
        Coconut: uL.c,
        "Splash Speed Potion": uL.c,
        "Splash Defense Potion": uL.c,
        "Splash Strength Potion": uL.c,
        "Splash Invisibility Potion": uL.c,
        "Splash Jump Potion": uL.c,
        "Splash Knockback Potion": uL.c,
        "Splash Poison Potion": uL.c,
        "Splash Speed Potion II": uL.c,
        "Splash Defense Potion II": uL.c,
        "Splash Strength Potion II": uL.c,
        "Splash Jump Potion II": uL.c,
        "Splash Knockback Potion II": uL.c,
        "Splash Poison Potion II": uL.c,
        "Splash Slowness Potion": uL.c,
        "Splash Slowness Potion II": uL.c,
        "Splash Weakness Potion": uL.c,
        "Splash Weakness Potion II": uL.c,
        "Splash Milk Potion": uL.c,
        "Splash Instant Damage Potion": uL.c,
        "Splash Instant Damage Potion II": uL.c,
        "Splash Instant Healing Potion": uL.c,
        "Splash Instant Healing Potion II": uL.c,
        "Splash Regeneration Potion": uL.c,
        "Splash Regeneration Potion II": uL.c,
        "Splash Haste Potion": uL.c,
        "Splash Haste Potion II": uL.c,
        "Splash Shield Potion": uL.c,
        "Splash Shield Potion II": uL.c,
        "Splash Double Jump Potion": uL.c,
        "Splash Heat Resistance Potion": uL.c,
        "Splash X-Ray Vision Potion": uL.c,
        "Splash Mining Yield Potion": uL.c,
        "Splash Mining Yield Potion II": uL.c,
        "Splash Brain Rot Potion": uL.c,
        "Yellow Paintball Gun": uL.c,
        "White Paintball Gun": uL.c,
        "Red Paintball Gun": uL.c,
        "Purple Paintball Gun": uL.c,
        "Pink Paintball Gun": uL.c,
        "Orange Paintball Gun": uL.c,
        "Magenta Paintball Gun": uL.c,
        "Lime Paintball Gun": uL.c,
        "Light Gray Paintball Gun": uL.c,
        "Light Blue Paintball Gun": uL.c,
        "Green Paintball Gun": uL.c,
        "Gray Paintball Gun": uL.c,
        "Cyan Paintball Gun": uL.c,
        "Brown Paintball Gun": uL.c,
        "Blue Paintball Gun": uL.c,
        "Black Paintball Gun": uL.c,
        "Yellow Heavy Paintball Gun": uL.c,
        "White Heavy Paintball Gun": uL.c,
        "Red Heavy Paintball Gun": uL.c,
        "Purple Heavy Paintball Gun": uL.c,
        "Pink Heavy Paintball Gun": uL.c,
        "Orange Heavy Paintball Gun": uL.c,
        "Magenta Heavy Paintball Gun": uL.c,
        "Lime Heavy Paintball Gun": uL.c,
        "Light Gray Heavy Paintball Gun": uL.c,
        "Light Blue Heavy Paintball Gun": uL.c,
        "Green Heavy Paintball Gun": uL.c,
        "Gray Heavy Paintball Gun": uL.c,
        "Cyan Heavy Paintball Gun": uL.c,
        "Brown Heavy Paintball Gun": uL.c,
        "Blue Heavy Paintball Gun": uL.c,
        "Black Heavy Paintball Gun": uL.c,
        "Toxin Ball": uL.c,
        "Splash Aura XP Potion": uL.c,
        "Splash Aura XP Potion II": uL.c,
        "Arrow of Aura XP": uL.c,
        Firecracker: uL.c,
        "Rainbow Firecracker": uL.c,
        "White Firecracker": uL.c,
        "Orange Firecracker": uL.c,
        "Magenta Firecracker": uL.c,
        "Light Blue Firecracker": uL.c,
        "Yellow Firecracker": uL.c,
        "Lime Firecracker": uL.c,
        "Pink Firecracker": uL.c,
        "Gray Firecracker": uL.c,
        "Light Gray Firecracker": uL.c,
        "Cyan Firecracker": uL.c,
        "Purple Firecracker": uL.c,
        "Blue Firecracker": uL.c,
        "Brown Firecracker": uL.c,
        "Green Firecracker": uL.c,
        "Red Firecracker": uL.c,
        "Black Firecracker": uL.c,
        "Firecracker Pebble": uL.c,
        "Rainbow Firecracker Pebble": uL.c,
        "White Firecracker Pebble": uL.c,
        "Orange Firecracker Pebble": uL.c,
        "Magenta Firecracker Pebble": uL.c,
        "Light Blue Firecracker Pebble": uL.c,
        "Yellow Firecracker Pebble": uL.c,
        "Lime Firecracker Pebble": uL.c,
        "Pink Firecracker Pebble": uL.c,
        "Gray Firecracker Pebble": uL.c,
        "Light Gray Firecracker Pebble": uL.c,
        "Cyan Firecracker Pebble": uL.c,
        "Purple Firecracker Pebble": uL.c,
        "Blue Firecracker Pebble": uL.c,
        "Brown Firecracker Pebble": uL.c,
        "Green Firecracker Pebble": uL.c,
        "Red Firecracker Pebble": uL.c,
        "Black Firecracker Pebble": uL.c,
        "Blinding Pebble": uL.c,
        Poop: uL.c,
        "Wood Boomerang": uL.c,
        "Stone Boomerang": uL.c,
        "Iron Boomerang": uL.c,
        "Gold Boomerang": uL.c,
        "Diamond Boomerang": uL.c,
        "Amethite Boomerang": uL.c,
        "Magmasteel Boomerang": uL.c,
        "Rubellite Boomerang": uL.c,
        "Serpentite Boomerang": uL.c,
        "Moonstone Boomerang": uL.c,
        "67 Base Projectile": uL.c,
        "67 Boosted Projectile": uL.c,
        "Capitano Grenade": uL.c,
        "Scatter Pellet": uL.c,
        "Lucky Bomb": uL.c,
        "Unlucky Bomb": uL.c,
        "Swap Orb": uL.c,
        Mesh: KL,
        AudioEntity: eL
      }), pL
    }
  },
  39930: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      g: () => hH
    });
    var AH = LH(619),
      rH = LH(38570);
    const SH = 4e4;
    class hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = HH, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(HH, BH, LH) {
        const SH = (0, AH.U)(HH),
          hH = (0, AH.U)(BH),
          tH = (0, AH.U)(LH),
          zH = this.now();
        if (SH !== this.lastChunkX || hH !== this.lastChunkY || tH !== this.lastChunkZ) {
          this.lastChunkX = SH, this.lastChunkY = hH, this.lastChunkZ = tH, this.lastChunkId = (0, rH.c)(SH, hH, tH), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, zH);
          for (const [HH, BH] of this.editedAt) {
            if (BH >= zH - 3e5) break;
            this.editedAt.delete(HH)
          }
        } else this.editedAt.set(this.lastChunkId, zH)
      }
      chunksEditedSince(HH) {
        const BH = [];
        for (const [LH, AH] of this.editedAt) AH >= HH && BH.push(LH);
        return BH
      }
    }
  },
  4e4: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => YB,
      g: () => nB,
      j: () => lB,
      l: () => FB
    });
    var AH = LH(4061),
      rH = LH(9467),
      SH = LH(37560),
      hH = LH(1440),
      tH = LH(37608),
      zH = LH(39894),
      CH = LH(39889),
      EH = LH(4113),
      XH = LH(38736),
      GH = LH(40009),
      YH = LH(1182),
      uH = LH(304),
      QH = LH(18),
      WH = LH(2036),
      MH = LH(81),
      xH = LH(30),
      vH = LH(2064),
      PH = LH(1962),
      TH = LH(3283);
    class UH {
      constructor(HH) {
        this.storeForMs = HH, this.clicks = new TH.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const HH = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < HH;) this.clicks.dequeue()
      }
      getNumClicksInMs(HH) {
        let BH = 0;
        return this.clicks.forEach((LH => {
          LH > Date.now() - HH && BH++
        })), BH
      }
      getMaxClickSeparationInMs(HH) {
        if (0 === this.clicks.size) return this.storeForMs;
        let BH = 0,
          LH = Date.now() - HH;
        this.clicks.forEach((AH => {
          AH < Date.now() - HH || (BH = Math.max(BH, Math.abs(AH - LH)), LH = AH)
        }));
        const AH = Math.abs(Date.now() - LH);
        return Math.max(BH, AH)
      }
    }
    class VH {
      constructor(HH) {
        this.storeForMs = HH, this.clickDownDurations = new TH.d
      }
      registerClickDownDuration(HH) {
        this.clickDownDurations.enqueue({
          dur: HH,
          atTime: Date.now()
        });
        const BH = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < BH;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(HH) {
        if (HH > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let BH = 0,
          LH = 0;
        return this.clickDownDurations.forEach((AH => {
          AH.atTime > Date.now() - HH && (BH++, LH = Math.max(LH, AH.dur))
        })), `${BH}:${LH}`
      }
    }
    var OH = LH(37373),
      bH = LH(40018),
      kH = LH(15),
      mH = LH(3038),
      oH = LH(1297),
      IH = LH(2619),
      fH = LH(4855),
      lH = LH(120),
      KH = LH(39040),
      cH = LH(39251),
      eH = LH(619),
      qH = LH(37368),
      gH = LH(10),
      NH = LH(9940),
      RH = LH(1168),
      jH = LH(176),
      nH = LH(40020),
      FH = LH(40023),
      DH = LH(40032),
      wH = LH(39068),
      ZH = LH(40038),
      dH = LH(38961),
      aH = LH(3768),
      sH = LH(1659),
      JH = LH(37474),
      iH = LH(3105),
      pH = LH(37245),
      yH = LH(37250),
      HB = LH(40035),
      BB = LH(38825);
    const LB = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function AB() {
      var HH, BH;
      return !(null === (HH = (0, mH.b)().client) || void 0 === HH || null === (BH = HH.freeCameraController) || void 0 === BH || !BH.movesFly())
    }

    function rB(HH) {
      const BH = HH.on.bind(HH);
      HH.on = (HH, LH) => {
        vH.G.has(HH) ? BH(HH, LH) : BH(HH, (BH => {
          var AH;
          return null !== (AH = (0, mH.b)().client) && void 0 !== AH && AH.isReplayMode() ? function(HH) {
            return HH in LB
          }(HH) && AB() ? LH(BH) : void 0 : LH(BH)
        }))
      }
    }
    const SB = 5e3,
      hB = 1;
    let tB, zB = hB,
      CB = 0;
    const EB = !0;
    let XB = EB;
    WH.e.subscribe("_ignoreBasicBoards", (HH => {
      XB = HH
    })), (0, AH.onGameReset)((() => {
      XB = EB
    }));
    let GB = null;
    const YB = () => GB;
    let uB, QB, WB;
    var MB, xB, vB, PB, TB, UB, VB, OB, bB;
    const kB = [1, 2, 0, 60, 3, "i", 7, "e", 149, 51, 8, 255, "length", "undefined", void 0, 4, "b", "a", 63, 6, "fromCodePoint", 12, "push", 174, 168, "g", 91, 201, 8191, 88, 13, 14, "d", 37, 1023, 121, 105, 144, 65536, 10, 55296, 56320, 5, 77, 53, 23, 165, 103, 128, 31, 15, 18, 46, "h", 114, 212, "f", 187, 192, 246, 9, 117, 166, 224, 84, 240, 112, 214, !1, 98, 155, 32, 215, 110, "c", !0, 36, 123, 163, 178];

    function mB(...HH) {
      return HH[kB[12]] = kB[0], typeof MB[HH[kB[2]]] === kB[13] ? MB[HH[kB[2]]] = function(...HH) {
        for (fB(HH[kB[12]] = kB[0], HH[kB[0]] = '`70$1#*3xcNgH_Ut5&)Amsoq?wF8=z(2<DJ,GTekWnR9hj{~KY+@|}BQvi[]6E;aOyIf.Vp4ZS%XC:r!dL/Pu>Mlb^"', HH[kB[1]] = "" + (HH[kB[2]] || ""), HH[kB[4]] = HH[kB[1]].length, HH[-kB[9]] = [], HH[kB[7]] = kB[2], HH[-kB[8]] = kB[2], HH[kB[6]] = -kB[0]), HH[kB[3]] = kB[2]; HH[kB[3]] < HH[kB[4]]; HH[kB[3]]++)
          if (HH[kB[5]] = HH[kB[0]].indexOf(HH[kB[1]][HH[kB[3]]]), HH[kB[5]] !== -kB[0])
            if (HH[kB[6]] < kB[2]) HH[kB[6]] = HH[kB[5]];
            else {
              fB(HH[kB[6]] += HH[kB[5]] * kB[26], HH[kB[7]] |= HH[kB[6]] << HH[-kB[8]], HH[-kB[8]] += (HH[kB[6]] & kB[28]) > kB[29] ? kB[30] : kB[31]);
              do {
                fB(HH[-kB[9]].push(HH[kB[7]] & kB[11]), HH[kB[7]] >>= kB[10], HH[-kB[8]] -= kB[10])
              } while (HH[-kB[8]] > kB[6]);
              HH[kB[6]] = -kB[0]
            } return HH[kB[6]] > -kB[0] && HH[-kB[9]].push((HH[kB[7]] | HH[kB[6]] << HH[-kB[8]]) & kB[11]), oB(HH[-kB[9]])
      }(xB[HH[kB[2]]]) : MB[HH[kB[2]]]
    }

    function oB(HH) {
      return typeof PB !== kB[13] && PB ? (new PB).decode(new TB(HH)) : typeof UB !== kB[13] && UB ? UB.from(HH).toString("utf-8") : bB(HH)
    }

    function IB() {}

    function fB() {
      fB = function() {}
    }

    function lB(HH) {
      function BH() {
        return HH.pT.yLH(HH.lF)
      }
      rB(HH.inputs.down), rB(HH.inputs.up);
      for (const AH of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const BH = (BH, LH) => {
          var rH, SH;
          if (AB()) {
            var hH;
            const rH = LB[AH];
            var tH, zH;
            if (rH) null === (tH = (0, mH.b)().client) || void 0 === tH || null === (zH = tH.freeCameraController) || void 0 === zH || zH.handlefreeCamKeyPress(rH, BH, LH);
            return void(LH || null !== (hH = (0, mH.b)().client) && void 0 !== hH && hH.isReplayMode() || (HH.pT.SAH()[AH] = !1))
          }
          if (null !== (rH = (0, mH.b)().client) && void 0 !== rH && null !== (SH = rH.freeCameraController) && void 0 !== SH && SH.isKeyPressOverriden(BH)) return;
          HH.pT.SAH()[AH] = LH
        };
        HH.inputs.down.on(AH, (HH => BH(HH, !0))), HH.inputs.up.on(AH, (HH => BH(HH, !1)))
      }
      HH.inputs.down.on("crouch", (() => {
        if (AB()) return;
        if (!HH.wT.canCrouch) return;
        const BH = HH.pT.SAH();
        kH.c.get("clientEscMenuOptions").crouchIsToggle && (BH.crouchToggled = !BH.crouchToggled && !BH.padSneakToggled), BH.padSneakToggled = !1
      }));
      const LH = () => {
        const HH = BH();
        HH.isGun() && HH.inaccuracyCalculator.jump()
      };
      HH.inputs.down.on("jump", (HH => {
        AB() || (LH(), uB(HH))
      }));
      for (const AH of vH.m) HH.inputs.down.on(AH, (HH => {
        var BH, LH;
        null !== (BH = (0, mH.b)().client) && void 0 !== BH && null !== (LH = BH.freeCameraController) && void 0 !== LH && LH.handlefreeCamKeyPress(AH, HH, !0) && (HH.preventDefault(), HH.stopPropagation())
      })), HH.inputs.up.on(AH, (HH => {
        var BH, LH;
        null !== (BH = (0, mH.b)().client) && void 0 !== BH && null !== (LH = BH.freeCameraController) && void 0 !== LH && LH.handlefreeCamKeyPress(AH, HH, !1) && (HH.preventDefault(), HH.stopPropagation())
      }));
      HH.inputs.down.on("recordGame", (() => {
        var HH, BH;
        null === (HH = (0, mH.b)().client) || void 0 === HH || null === (BH = HH.gameRecorder) || void 0 === BH || BH.toggleRecording()
      })), HH.inputs.down.on("recordClip", (() => {
        var HH, BH;
        (0, OH.c)() || null === (HH = (0, mH.b)().client) || void 0 === HH || null === (BH = HH.gameRecorder) || void 0 === BH || BH.saveClip()
      }));
      for (const AH of vH.G) HH.inputs.down.on(AH, (() => {
        var HH;
        if ((0, bH.e)()) return;
        if ("replayViewerOpen" === AH) return void QH.k.AX("replayViewer|requested", "toggle");
        const BH = null === (HH = (0, mH.b)().client) || void 0 === HH ? void 0 : HH.gameReplayer;
        ((0, OH.c)() || null !== BH && void 0 !== BH && BH.isReplayMode()) && (null === BH || void 0 === BH || BH.handleAction(AH))
      }));
      const hH = new UH(3e4),
        XH = new VH(4e4);
      let GH = 0;
      const xH = HH => {
          let BH = 0,
            LH = null;
          const AH = BH => null !== BH && BH === LH && (LH = null, HH(), !0);
          return {
            press: () => (BH++, (0, nH.e)() || (AH(LH), LH = BH), BH),
            owns: HH => HH === LH,
            release: AH
          }
        },
        TH = (HH, LH) => {
          LH && FB(YH.e.TouchDownFirePrimary), HH ? NH() : ((0, cH.c)(), BH().sAH()), LH || FB(YH.e.DownFirePrimary), nB(!0), hH.click();
          const rH = hH.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            SH = hH.getMaxClickSeparationInMs(1e4) < 20,
            tH = hH.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (rH || SH || tH) {
            let HH;
            if (rH) HH = 30;
            else if (SH) HH = 50;
            else {
              if (!tH) throw new Error("???");
              HH = 70
            }(0, AH.sendColyMessage)(EH._j, HH)
          }
        },
        fH = new FH.c,
        lH = xH((() => {
          FH.c.stopRunning();
          const HH = Date.now() - GH;
          XH.registerClickDownDuration(HH), BH().ZAH(), FB(YH.e.UpFirePrimary), nB(!1);
          const LH = XH.clickDownDurationsCheck(4e4);
          (0, AH.sendColyMessage)(EH.Ag, LH)
        }));
      let KH = 0;
      HH.inputs.down.on("primary-fire", (function(HH) {
        KH = lH.press(), lH.owns(KH) && (GH = Date.now(), Math.abs(performance.now() - HH.timeStamp) > 5e3 || (TH(HH.altKey, "changedTouches" in HH), uB(HH)))
      })), HH.inputs.up.on("primary-fire", (function(HH) {
        lH.release(KH) && uB(HH, !0)
      }));
      const eH = () => {
          BH().mEH(), FB(YH.e.DownFireSecondary), nB(!0), HH.cBH && !HH.cBH.position && (0, CH.i)()
        },
        qH = xH((() => {
          BH().wAH(), FB(YH.e.UpFireSecondary), nB(!1)
        }));
      let gH = 0;
      HH.inputs.down.on("alt-fire", (function(HH) {
        gH = qH.press(), qH.owns(gH) && (eH(), uB(HH))
      })), HH.inputs.up.on("alt-fire", (function(HH) {
        qH.release(gH) && uB(HH, !0)
      }));
      const NH = () => BH().fEH();
      HH.inputs.down.on("mid-fire", (() => {
        (0, nH.e)() || NH()
      }));
      const ZH = HH => {
          (0, AH.sendColyMessage)(EH.Gh, HH, !0)
        },
        tB = HH => {
          (0, AH.sendColyMessage)(EH.Ih, {
            BX: HH,
            LX: EB()
          }, !0)
        };
      for (const AH of ["SpecialAction1", "SpecialAction2"]) HH.inputs.down.on(AH, (() => {
        ZH(AH)
      })), HH.inputs.up.on(AH, (() => {
        tB(AH)
      }));
      const CB = () => {
        const HH = BH();
        HH.isGun() && HH.reload(Date.now())
      };
      HH.inputs.down.on("ReloadGun", CB);
      const EB = () => {
        let BH = "a";
        return HH.physics.testSolid.toString().includes("ZG") || (BH = "b"), BH
      };
      HH.inputs.down.on("OpenInventory", (HH => {
        HH.preventDefault(), (0, sH.F)(HH, "inventory", (0, DH.e)((0, mH.c)()))
      })), HH.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const XB = HH => {
        QH.k.AX("DropItemKeyPressed", HH)
      };
      HH.inputs.down.on("DropItem", (() => {
        XB(HH.pT.SAH().crouch)
      })), HH.inputs.down.on("OpenShop", (BH => {
        (0, OH.c)() || "inGame" === kH.c.get("gameState") && (0, sH.B)(BH, uH.o.SHOP, !(0, rH.d)(HH.wT.shopInfo))
      })), HH.inputs.down.on("OpenLobbyLeaderboard", (BH => {
        (0, OH.c)() || "inGame" === kH.c.get("gameState") && (0, sH.B)(BH, uH.o.LOBBY_LEADERBOARD, (0, HB.e)(HH.wT))
      })), HH.inputs.down.on("HideUi", (() => {
        QH.k.AX("showUi", !1)
      })), HH.inputs.up.on("HideUi", (() => {
        QH.k.AX("showUi", !0)
      }));
      const YB = HH => {
        0 === HH && (HH = 10), QH.k.AX("setSelectedInventorySlotI", HH - 1), QH.k.AX("numkeyPressed", HH)
      };
      for (let AH = 1; AH <= 10; AH++) HH.inputs.down.on("HotBarSlot" + AH.toString(), (() => {
        YB(AH)
      }));
      HH.inputs.down.on("OpenTasksAndLeaderboard", (BH => {
        const LH = (0, JH.n)();
        LH ? (0, sH.H)(BH, !0, LH) : (0, sH.F)(BH, "retentionFeatures", !(!HH.wT._tasks && !HH.wT._availableLeaderboards))
      })), HH.inputs.down.on("OpenCodeEditor", (BH => {
        (0, sH.H)(BH, (0, IH.e)((0, oH.c)()), (() => {
          (0, IH.m)(HH.pT.hT(HH.lF))
        }))
      })), HH.inputs.bind("ToggleFullCoordinateOverlay", "F3"), HH.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        QH.k.AX("toggleFullCoordinateOverlay")
      }));
      const WB = () => {
        (0, mH.b)().client.cameraController.swapCameraZoom()
      };
      HH.inputs.down.on("SwapCameraZoom", WB), HH.inputs.down.on("OpenInviteLink", (HH => {
        (0, sH.F)(HH, "inviteLink", MH.featureFlags.canUseInviteLinks)
      })), HH.inputs.bind("Y", "KeyY"), HH.inputs.down.on("Y", (HH => {
        (0, OH.c)() || QH.k.AX("YKeyPressed")
      })), HH.inputs.bind("X", "KeyX"), HH.inputs.down.on("X", (HH => {
        (0, OH.c)() || QH.k.AX("XKeyPressed")
      })), HH.inputs.down.on("OpenEmoteWheel", (() => {
        QH.k.AX("requestEmoteWheelHoldOpen")
      })), HH.inputs.up.on("OpenEmoteWheel", (() => {
        QH.k.AX("requestEmoteWheelHoldRelease")
      })), HH.inputs.down.on("Zoom", (() => {
        if ("inGame" === kH.c.get("gameState")) {
          HH.pT.getState(HH.lF, "playerCameraAdjustment").zoomKeyPressed = !0, (0, mH.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), HH.inputs.up.on("Zoom", (() => {
        HH.pT.getState(HH.lF, "playerCameraAdjustment").zoomKeyPressed = !1
      })), KB();
      const MB = HH => function() {
        return QB(), HH(...arguments)
      };

      function xB(HH) {
        "inGame" !== kH.c.get("gameState") || (0, sH.x)() || (QH.k.AX("ctrlCrouchWithoutFullscreen"), HH.preventDefault())
      }
      GB = {
        primaryFireDown: MB((HH => {
          const BH = lH.press();
          return lH.owns(BH) && (GH = Date.now(), TH(!1, !1), HH && fH.start()), BH
        })),
        primaryFireUp: MB((HH => {
          lH.release(HH)
        })),
        altFireDown: MB((() => {
          const HH = qH.press();
          return qH.owns(HH) && eH(), HH
        })),
        altFireUp: MB((HH => {
          qH.release(HH)
        })),
        jumpDown: MB(LH),
        specialActionDown: MB(ZH),
        specialActionUp: MB(tB),
        reloadGun: MB(CB),
        dropItem: MB(XB),
        swapCameraZoom: MB(WB),
        pickBlock: MB(NH)
      }, HH.inputs.down.on("ctrlCrouch", xB), HH.inputs.up.on("ctrlCrouch", xB), HH.inputs.bind("ctrlCrouch", "ControlLeft");
      const vB = HH => {
        "inGame" === kH.c.get("gameState") && HH.ctrlKey && !(0, sH.x)() && HH.preventDefault()
      };
      document.addEventListener("keydown", vB), document.addEventListener("keyup", vB), document.addEventListener("keypress", vB), HH.inputs.bind("Alt", "AltLeft", "AltRight"), HH.inputs.down.on("Alt", (HH => {
        HH.preventDefault()
      }));
      const PB = BH => (0, dH.i)(HH, BH),
        TB = BH => (0, dH.j)(HH, BH),
        UB = [0, 0, 0],
        VB = [0, 0, 1];
      HH.on("afterRender", (BH => {
        yH.f.frame(BH, HH.camera.heading, HH.camera.pitch, yH.d.drawn), (0, SH.d)(HH.camera.heading), (0, dH.n)(HH, UB, VB), (0, mH.b)().client.triggerGameCallback("onAfterRender", BH, {
          cameraHeading: HH.camera.heading,
          cameraPitch: HH.camera.pitch,
          cameraPosition: UB,
          cameraDirection: VB,
          tanHalfFovX: (0, dH.e)(HH),
          tanHalfFovY: Math.tan(HH.mX.N_().fov / 2),
          screenBandPct: {
            x: aH.b,
            y: (0, aH.k)()
          },
          projectWorldPosToScreenPos: PB,
          projectWorldPosToViewport: TB
        })
      })), HH.camera.vN = (0, pH.startLookDebug)("js"), HH.inputs.lN = pH.noteLookDroppedCopy, (0, iH.o)("remesh") && (0, BB.k)(HH), HH.on("beforeInputs", (() => {
        if ((0, bH.e)()) return HH.inputs.mp.dx = 0, void(HH.inputs.mp.dy = 0);
        if (HH.camera.mp.dx += HH.inputs.mp.dx, HH.camera.mp.dy += HH.inputs.mp.dy, 0 !== HH.inputs.mp.dx || 0 !== HH.inputs.mp.dy) {
          HH.pT.getState(HH.lF, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        HH.inputs.mp.dx = 0, HH.inputs.mp.dy = 0
      }));
      let OB = 0;
      const bB = [0, 0, 0],
        kB = [0, 0, 0],
        mB = {
          base: bB,
          max: kB
        },
        oB = HH => {
          const BH = jH.g.droppedBlockSize / 2;
          return [0, 1, 2].every((LH => HH[LH] >= bB[LH] - BH && HH[LH] <= kB[LH] + BH))
        };
      HH.on("IX", (function(BH) {
        QH.k.AX("noaTick", BH);
        const LH = (0, mH.b)().client;
        if (LH.triggerGameCallback("IX", BH), LH.isClientGameSessionActive()) try {
          zH.e.IX(BH)
        } catch (hH) {
          console.error("Error ticking audio entities", hH)
        }
        if (!HH.pT.iLH(HH.lF).isAlive) return;
        Date.now() - OB > 9e3 && (! function() {
          const HH = (0, mH.c)();
          "number" === typeof HH.wT.speedMultiplier && "number" === typeof HH.wT.jumpAmount && (0, AH.sendColyMessage)(EH.ai, {
            dC: (0, RH.e)(HH.wT.speedMultiplier),
            aC: (0, RH.d)(HH.wT.jumpAmount),
            sC: (0, RH.e)(HH.wT.crouchingSpeed),
            JC: (0, RH.e)(HH.wT.walkingSpeed),
            iC: (0, RH.e)(HH.wT.runningSpeed),
            pC: (0, RH.d)(HH.kBH),
            yC: HH.pT.ELH(HH.lF).jumpForce,
            LE: HH.pT.A4(1).width,
            AE: HH.pT.A4(1).height,
            rE: HH.pT.xJ(1).rE
          }, !0)
        }(), OB = Date.now());
        const rH = HH.pT.SAH();
        if ((rH.jump || rH.forward || rH.backward || rH.left || rH.right || rH.sprint) && QH.k.AX("usedKeyboard"), HH.pT.cLH(HH.lF) && !0 === HH.wT.canPickUpItems) {
          const BH = HH.pT.hT(HH.lF),
            LH = (0, PH.l)(zB),
            rH = (0, PH.n)(zB);
          bB[0] = BH[0] - LH, bB[1] = BH[1] - .6 * rH, bB[2] = BH[2] - LH, kB[0] = BH[0] + LH, kB[1] = BH[1] + jH.g.iW + .6 * rH, kB[2] = BH[2] + LH;
          const SH = HH.pT.czH(mB, HH.pT.names.autoRotate),
            {
              itemDropPrediction: hH
            } = (0, mH.b)().client,
            zH = AH.offlineInputReplay.holdsInput();
          if (SH.length > 0)
            for (const XH of SH) {
              const BH = HH.pT.getState(XH, "itemState");
              if (void 0 === BH || Date.now() - BH.creationTime < 500) continue;
              let LH = XH,
                rH = null;
              if (BH.QL) {
                const HH = hH.pickupTarget(XH, oB, zH);
                if (null === HH) continue;
                ({
                  DE: LH,
                  dE: rH
                } = HH)
              }
              const SH = HH.pT.getState(LH, "itemState");
              if (SH.QL && null === rH) continue;
              let GH = 0,
                YH = null,
                uH = !1;
              if (0 === SH.amount) uH = !0;
              else {
                const {
                  amountPickedUp: BH
                } = HH.pT.lLH(HH.lF).pickUpItem({
                  name: SH.name,
                  typeObj: SH.typeObj,
                  amount: SH.amount,
                  attributes: SH.attributes
                });
                if (GH = BH, 0 === GH) continue;
                YH = wH.b.pickUp(SH, GH), SH.amount -= GH, SH.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === SH.amount ? uH = !0 : SH.creationTime = Date.now() + SB
              }
              const QH = (0, mH.b)().client.inventoryPrediction.record(YH);
              (0, AH.sendColyMessage)(EH.Ah, {
                DE: null === rH ? LH : "",
                wE: GH,
                ZE: CH.g,
                Yh: QH,
                dE: rH
              }, !0), uH && (zH && hH.onPickedUpOffline(LH, QH, rH), null === rH && HH.pT.deleteEntity(LH));
              tH.c.play("pickUp", jH.g.pickupSoundVol).rate(1 + Math.random() * jH.g.pickupSoundRateVariation)
            }
        }
        if (!HH.pT.VLH(HH.lF)) return;
        const SH = HH.inputs.mp.QLH;
        if (0 !== SH) {
          const BH = SH > 0 ? 1 : -1;
          HH.inputs.state["mid-fire"] || HH.inputs.state.Alt || !HH.wT.useInventory ? (HH.inputs.state["mid-fire"] && QH.k.AX("requestEmoteWheelClose"), (0, mH.b)().client.cameraController.handleScrollZoom(BH)) : QH.k.AX("ScrollInventorySlot", BH)
        }
      })), WH.e.subscribe("droppedItemScale", (HH => {
        zB = "number" === typeof HH && isFinite(HH) ? HH : hB
      }))
    }

    function KB() {
      const HH = (0, mH.c)();
      if (HH)
        for (const BH in vH.w) {
          HH.inputs.unbind(BH);
          for (const LH of vH.w[BH]) HH.inputs.bind(BH, LH)
        }
    }
    fB(MB = {}, xB = ['$qJXE!?(d)*@7G+W.j#|[ZfV8&LoGPi="U1#8]=0?&vYL1)=jJ+xF', "s@`c^DWO2a(J3/_ko4:|BTe)]g", "ga5cwPw}1B8", 'Zv@<+/6.H;vSk8/J:;)XRS"{Ua?8u~?=7<0<xQ`', "H9w81;:@d)xcC4=q[j8Zz40G?_G8$/BW>j41@/GG*", "].F@1ZAAJAS,/LEqh@F@4Ji~Z_|S<4P8pmEQFez,+6[|2+,2", 'a]1Q{:7n"U|V3t9ABcfzuPT3[gUmSKG?x.TC>j`', "zB[zhXI?g]cXYY>8/K2cZ65G`HL1%Y}nIKe1]@K0", "gFwXA+@q=&lLh]W2]$G:s>]qyt", "{2^*{a{0S[h&cukAG*c(Y:5Gg;YVap;?[$p4$Qe)IB<!{Y_mYF]:9E`", "u]$%6kW(|_GZYT`?F<g<0;I?mc+Vn_ER.Bc8p%5?r)AV7", ",J>2I{9A<I@Cc6!F.*fz=e$w?&agte1e.;T1KX~Xd6HQrL:Aaqm%1%`", 'k.cBMjKM5)`D4U"5U1oQ_KSV^yj;a[$TH1*Qy}S7', ",q_2LCln;a@VbKWe6FH%V%E_avv1w5Q,QUl=3J^7", "5cm:~/2n{gxKy6Re,c$<LDAV;v3@~Uhk.K$", "?{s3^]r*~aQC94#TyW#%1%uJx&Z,O8<?", "c,tcN;C?X]cyO8,G$z1NQpzz+6w*d$", "[&:3|a<|]ybOUE*ToizCqPx|<imNCtP=QK7@EkdWs[l%>GQzWKZY|:B[0H", "V*RZPeGGAc.vQp;?u]7X#KbdQ_!t^6_mW@|%jdK)GBKdcLQz11p3!G)?*", "x.Q*s|V@kOXz{E,)*cP}#}t7]x`4`", "K@W*[:~_T[>pkFVTZ2U|_C0xC}J;+w/JIJ@z+u`", "Lpt*%e$ATB$Z;e>nL]z=,SC%n&A[x$", "8{?YOQH)+iDyRE;zmBrStiS7UsFKP0qn3{U2IGl&Y)M%iGQJk%h:0{1[a}<", "Nap3P](|+H6UFE0GDB}3*J`", ':jzC`Z"d{vq;7', "x,DB}Z!7%&>H;_Zeo{CFP4`", "Yi<BJ,?x*QO,w1]RT%F8e~wn!}3XA/`Gw9,<F]hHjvOI.$t", ".q.#|aQ7", '14*|4%7X";NTxP]n31^BL|43,OH.G~n2jqe|wC$ak_J', "vW}Q!Glq`IqC76oW~J`DQ[#3`I%g7G[=/m@}^D;?H&", "O@)X;[W?iU", "p.u}mCe0{]Es[_bRr.,Z5Gq}rx<&1k*T", 'syu+VKsLEgXp)/LWfcP:!Gz,/aq!,Px2lUu}/+N{gy(Zq4"o%m}%4Q97', ":wM|nEO{oO88O8w=L]:%&CO{vyn,5$$Te43rG~A_gyx.`", ")FUCPe>3n;9&.t(GEK/x^rcAIH]:@UgkzTxD9a+0", "f.y@RXCJ?[xyW$hF6U%@WYiaCU^pW4U", "E=S*9@=|<)GIwGQ,U41:|@1),6YC9$", "/K4cL;d[z]#5E?$&.=xraul7", "{i@}m|SXmO`*sG*?<Jf:8ep*:vKC_5bJ1ibYk~T,9]?&:1", "A):4^>|0)a|", "`{e=,W4z$A+", "H9F@x6]>?[DC7", "X*}QDS^,lO757", 'DWdB"D7,z;;37G7&C@,:#Kd?9g>HSZ$2J9bSz~O(o_Sp/F0q*.9Z`uc35c', "f;WBB}F|YB4pa/i,TH/x~p)x=]6gd]O?>RzNyG2~]x", 'Ui7*Bu.M"m8JjZO?"SL@Yub%6UHZBYi,OK&r_', "2ig<Dr*|X]KVxkfTRzaCWvr{{v`Z;LG?YjrY5GCW#", "p&P<Tvu{xNy)zKu=e$;Q3;o|fA_m#Zwzs@tBjXt7#", "#..Fe>J?sOs!h4yToi0", "[K;cw|D30cY&^6M5f`", "q6y<;[=GUsP+:?a(Kmk|^jbWW&u#7", '!mgz"r>V`H', "0Yx8<dp[{syd+/ZAb;fF{p~i$Am8/VrFO@$:@k2n#", "$,aC;uLzl_J8>dV?2B|%;%<(zsgKT1", "O@F<yQox=&ap=$M8I=R@1Qv0G_HZEGHk;.4CvZ=H1O5&BYa&v&dc", "JKs3UCLz]vbOzKAn<%q|kBF|c;x_J#x2W$!1~E`[KI_JtUU", "26Jzb]OHhx/:Qew=h;#|]}I[}AjN$FSAi&jNhv@_*[XtWP1)57", "5W:2R/gn1i<UD1AmZyZYlC,AHUmVk[2qBF^@KXu[IB2!ywN", "M&c(j:h|SmXzL1", "j;hz5|P_4_])FYD2,H{1!Coxh]zCiY=(W.TN", "7aMYBk+)=&|V$$n2pm(Q!i<|KHII_51T}`", "D$a1cLD,,AsTV14w|W]}+TEXYizy582T={;Y0u}nyaD8(T[nd]L<pZJ0", "aqC}ue0x()9,Kt5FSK=:>VNGI6uxg+/JOBvS,rU[pAd1o#", "]]^x}/`", "8t2SZ!.%XyTSJ/^q.@12^jk7O}v", "u$`c)P&}1_}2j5a(yK7(54&}#A$8ewiq&H]:9X9X]&.tF#", '#1?Brj&}_U=V1u"G[J~c', "Xy.4cGk,@BSx^Kinj4VQ+/R[fH=;y?$?w4MY|/CJfBCdg4wqE&$", "Zqp|J|rJLHdxJwSk#%k1H", '}jH%Q{3n3mTV28"=!=.}nSRWa)KCHGvRfRx("Sh0', "DJ&8$J?G762mf[K8&i)<WaM|Cx[", ".jI@D.f@`s~Ce0W)i4_3", "IqX#APH{Iim?J_q=]KY*~k_~Cvd{BwB=o*P:+@+[!}1.b4[nGqx*", "cYs24;,,q_?C3eZ2Q.fzW~?Gj}GCu46R:j%#", "XT(=k>q,`iKC!,w=uSI@[[<?9&x.s5&m,.xBBuqVEg?$m8+k!`", "9{x=X?>B", "IxbsGBma", ">{JV@+Ea", "7hs;x?f", "v;KpXV/a", ";qn2^!oa", "d%J8NBLa", "d%ds;", ":vO4)|b5=wpCrIg!KvJEI<B", '[Otfuz?igh`p2mjCw"v0Y?E1X!Z8$ay', "G!,^s%auHeczh9Ond![(9=E", "1I#a>JZmv(nNj0Tq2MOEYZ.]F:osL4i", '9jUP(,J{Cv_>Phtc!SU"P1m{,9v', "eK5m8|^", "aO,RBUAF", ".Y%0", "9vsG*a5F", "qtm:rLF0", 'G5j"K2Zd', "v9kI`)f", "ZzLqq)[<", "u+*%+Hi0", "&[BV"]), fB(vB = function() {
      var HH, BH, LH, AH = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      fB(HH = void 0, BH = []);
      try {
        fB(HH = Object, BH[kB[22]]("".__proto__.constructor.name))
      } catch (TB) {}
      HH: for (LH = kB[2]; LH < AH[kB[12]]; LH++) try {
        var rH;
        for (HH = AH[LH](), rH = kB[2]; rH < BH[kB[12]]; rH++)
          if (typeof HH[BH[rH]] === kB[13]) continue HH;
        return HH
      } catch (TB) {}
      return HH || this
    }() || {}, PB = vB.TextDecoder, TB = vB.Uint8Array, UB = vB.rX, VB = vB.String || String, OB = vB.Array || Array, bB = function() {
      var HH, BH, LH = new OB(kB[48]);
      return fB(HH = VB[kB[20]] || VB.fromCharCode, BH = []),
        function(...AH) {
          for (fB(AH[kB[12]] = kB[0], AH[kB[17]] = kB[14], AH[kB[16]] = kB[14], AH[kB[4]] = AH[kB[2]][kB[12]], BH[kB[12]] = kB[2]), AH[kB[15]] = kB[2]; AH[kB[15]] < AH[kB[4]];) fB(AH[kB[16]] = AH[kB[2]][AH[kB[15]]++], AH[kB[16]] <= 127 ? AH[kB[17]] = AH[kB[16]] : AH[kB[16]] <= 223 ? AH[kB[17]] = (AH[kB[16]] & kB[49]) << kB[19] | AH[kB[2]][AH[kB[15]]++] & kB[18] : AH[kB[16]] <= 239 ? AH[kB[17]] = (AH[kB[16]] & kB[50]) << kB[21] | (AH[kB[2]][AH[kB[15]]++] & kB[18]) << kB[19] | AH[kB[2]][AH[kB[15]]++] & kB[18] : VB[kB[20]] ? AH[kB[17]] = (AH[kB[16]] & kB[6]) << kB[51] | (AH[kB[2]][AH[kB[15]]++] & kB[18]) << kB[21] | (AH[kB[2]][AH[kB[15]]++] & kB[18]) << kB[19] | AH[kB[2]][AH[kB[15]]++] & kB[18] : (AH[kB[17]] = kB[18], AH[kB[15]] += kB[4]), BH[kB[22]](LH[AH[kB[17]]] || (LH[AH[kB[17]]] = HH(AH[kB[17]]))));
          return BH.join("")
        }
    }()), fB(WB = (...HH) => {
      fB(HH[kB[12]] = kB[0], HH[-kB[23]] = kB[2]);
      for (const BH in HH[kB[2]]) HH[-kB[23]]++;
      return HH[-kB[23]]
    }, QB = () => {
      if (CB++ === kB[42]) {
        function HH(...HH) {
          for (fB(HH[kB[12]] = kB[0], HH[-kB[24]] = '^BFJS!Qj06GIy3oY@[;EuD5Mi.wLA_,Rf|$*dCPKOl9{r]&T:mhv=sx/q>(`"a7XgZp<c~NnUV?%z+2k81)t4#eW}bH', HH[kB[16]] = "" + (HH[kB[2]] || ""), HH[kB[4]] = HH[kB[16]].length, HH[kB[32]] = [], HH[kB[7]] = kB[2], HH[-kB[27]] = kB[2], HH[kB[25]] = -kB[0]), HH[kB[10]] = kB[2]; HH[kB[10]] < HH[kB[4]]; HH[kB[10]]++)
            if (HH[kB[5]] = HH[-kB[24]].indexOf(HH[kB[16]][HH[kB[10]]]), HH[kB[5]] !== -kB[0])
              if (HH[kB[25]] < kB[2]) HH[kB[25]] = HH[kB[5]];
              else {
                fB(HH[kB[25]] += HH[kB[5]] * kB[26], HH[kB[7]] |= HH[kB[25]] << HH[-kB[27]], HH[-kB[27]] += (HH[kB[25]] & kB[28]) > kB[29] ? kB[30] : kB[31]);
                do {
                  fB(HH[kB[32]].push(HH[kB[7]] & kB[11]), HH[kB[7]] >>= kB[10], HH[-kB[27]] -= kB[10])
                } while (HH[-kB[27]] > kB[6]);
                HH[kB[25]] = -kB[0]
              } return HH[kB[25]] > -kB[0] && HH[kB[32]].push((HH[kB[7]] | HH[kB[25]] << HH[-kB[27]]) & kB[11]), oB(HH[kB[32]])
        }

        function BH(...BH) {
          return BH[kB[12]] = kB[0], typeof MB[BH[kB[2]]] === kB[13] ? MB[BH[kB[2]]] = HH(xB[BH[kB[2]]]) : MB[BH[kB[2]]]
        }

        function LH() {
          ! function(...HH) {
            function LH(...HH) {
              for (fB(HH[kB[12]] = kB[0], HH[kB[0]] = [], HH[kB[16]] = kB[2], HH[kB[4]] = HH[kB[2]].length, HH[kB[15]] = kB[14], HH[-kB[33]] = kB[14]); HH[kB[16]] < HH[kB[4]];) fB(HH[kB[15]] = HH[kB[2]].charCodeAt(HH[kB[16]]++), HH[kB[15]] >= kB[40] && HH[kB[15]] <= 56319 && HH[kB[16]] < HH[kB[4]] ? (HH[-kB[33]] = HH[kB[2]].charCodeAt(HH[kB[16]]++), (64512 & HH[-kB[33]]) == kB[41] ? HH[kB[0]].push(((HH[kB[15]] & kB[34]) << kB[39]) + (HH[-kB[33]] & kB[34]) + kB[38]) : (HH[kB[0]].push(HH[kB[15]]), HH[kB[16]]--)) : HH[kB[0]].push(HH[kB[15]]));
              return HH[kB[0]]
            }

            function AH(...HH) {
              if (HH[kB[12]] = kB[0], HH[kB[2]] >= kB[40] && HH[kB[2]] <= 57343) {
                function BH(...HH) {
                  for (fB(HH[kB[12]] = kB[0], HH[kB[0]] = 'fqaIiS}12)pOEKehoF|bH,BPk;:rZM?7sl%4Y3D"/X.x(5w$mn#{J8LRgTjQzvCc_&`@A~9G+UNdtV=6!*[u>0<]^yW', HH[kB[16]] = "" + (HH[kB[2]] || ""), HH[kB[44]] = HH[kB[16]].length, HH[kB[32]] = [], HH[kB[42]] = kB[2], HH[-kB[47]] = kB[2], HH[-kB[46]] = -kB[0]), HH[-kB[43]] = kB[2]; HH[-kB[43]] < HH[kB[44]]; HH[-kB[43]]++)
                    if (HH[-kB[45]] = HH[kB[0]].indexOf(HH[kB[16]][HH[-kB[43]]]), HH[-kB[45]] !== -kB[0])
                      if (HH[-kB[46]] < kB[2]) HH[-kB[46]] = HH[-kB[45]];
                      else {
                        fB(HH[-kB[46]] += HH[-kB[45]] * kB[26], HH[kB[42]] |= HH[-kB[46]] << HH[-kB[47]], HH[-kB[47]] += (HH[-kB[46]] & kB[28]) > kB[29] ? kB[30] : kB[31]);
                        do {
                          fB(HH[kB[32]].push(HH[kB[42]] & kB[11]), HH[kB[42]] >>= kB[10], HH[-kB[47]] -= kB[10])
                        } while (HH[-kB[47]] > kB[6]);
                        HH[-kB[46]] = -kB[0]
                      } return HH[-kB[46]] > -kB[0] && HH[kB[32]].push((HH[kB[42]] | HH[-kB[46]] << HH[-kB[47]]) & kB[11]), oB(HH[kB[32]])
                }

                function LH(...HH) {
                  return HH[kB[12]] = kB[0], typeof MB[HH[kB[2]]] === kB[13] ? MB[HH[kB[2]]] = BH(xB[HH[kB[2]]]) : MB[HH[kB[2]]]
                }
                throw Error(LH(76) + LH(kB[43]) + LH(78) + HH[kB[2]].toString(16).toUpperCase() + (LH(79) + LH(80) + LH(81) + LH(82)))
              }
            }

            function rH(BH, LH) {
              return HH[kB[0]](BH >> LH & kB[18] | kB[48])
            }

            function SH(...BH) {
              return BH[kB[12]] = kB[0], (4294967168 & BH[kB[2]]) == kB[2] ? HH[kB[0]](BH[kB[2]]) : (BH[kB[0]] = "", (4294965248 & BH[kB[2]]) == kB[2] ? BH[kB[0]] = HH[kB[0]](BH[kB[2]] >> kB[19] & kB[49] | kB[58]) : (4294901760 & BH[kB[2]]) == kB[2] ? fB(AH(BH[kB[2]]), BH[kB[0]] = HH[kB[0]](BH[kB[2]] >> kB[21] & kB[50] | kB[63]), BH[kB[0]] += rH(BH[kB[2]], kB[19])) : (4292870144 & BH[kB[2]]) == kB[2] && fB(BH[kB[0]] = HH[kB[0]](BH[kB[2]] >> kB[51] & kB[6] | kB[65]), BH[kB[0]] += rH(BH[kB[2]], kB[21]), BH[kB[0]] += rH(BH[kB[2]], kB[19])), BH[kB[0]] += HH[kB[0]](BH[kB[2]] & kB[18] | kB[48]), BH[kB[0]])
            }

            function hH(...LH) {
              if (LH[kB[12]] = kB[2], HH[kB[16]] >= HH[kB[4]]) {
                function AH(...HH) {
                  for (fB(HH[kB[12]] = kB[0], HH[kB[17]] = 'Bx7DSw?Qk31!s$e%;:Yn)Nz[5l+i#,JE4ZrgRTHhva]mV^`>AKF6"@.M2uyo*I(=Up8_}9W/P{b0|GXcC&~O<tLjqdf', HH[-kB[52]] = "" + (HH[kB[2]] || ""), HH[kB[4]] = HH[-kB[52]].length, HH[kB[15]] = [], HH[kB[7]] = kB[2], HH[kB[56]] = kB[2], HH[-kB[55]] = -kB[0]), HH[kB[53]] = kB[2]; HH[kB[53]] < HH[kB[4]]; HH[kB[53]]++)
                    if (HH[kB[54]] = HH[kB[17]].indexOf(HH[-kB[52]][HH[kB[53]]]), HH[kB[54]] !== -kB[0])
                      if (HH[-kB[55]] < kB[2]) HH[-kB[55]] = HH[kB[54]];
                      else {
                        fB(HH[-kB[55]] += HH[kB[54]] * kB[26], HH[kB[7]] |= HH[-kB[55]] << HH[kB[56]], HH[kB[56]] += (HH[-kB[55]] & kB[28]) > kB[29] ? kB[30] : kB[31]);
                        do {
                          fB(HH[kB[15]].push(HH[kB[7]] & kB[11]), HH[kB[7]] >>= kB[10], HH[kB[56]] -= kB[10])
                        } while (HH[kB[56]] > kB[6]);
                        HH[-kB[55]] = -kB[0]
                      } return HH[-kB[55]] > -kB[0] && HH[kB[15]].push((HH[kB[7]] | HH[-kB[55]] << HH[kB[56]]) & kB[11]), oB(HH[kB[15]])
                }

                function rH(...HH) {
                  return HH[kB[12]] = kB[0], typeof MB[HH[kB[2]]] === kB[13] ? MB[HH[kB[2]]] = AH(xB[HH[kB[2]]]) : MB[HH[kB[2]]]
                }
                throw Error(rH(83))
              }
              if (fB(LH[kB[57]] = HH[kB[32]][HH[kB[16]]] & kB[11], HH[kB[16]]++), (LH[kB[57]] & kB[58]) == kB[48]) return LH[kB[57]] & kB[18];
              throw Error(BH(kB[64]))
            }

            function tH() {
              var LH, rH, SH, tH, zH;
              if (fB(void 0, rH = void 0, SH = void 0, tH = void 0, zH = void 0), HH[kB[16]] > HH[kB[4]]) {
                function CH(HH) {
                  var BH, LH, AH, rH, SH, hH, tH;
                  for (fB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = kB[2], SH = kB[2], hH = -kB[0]), tH = kB[2]; tH < LH; tH++) {
                    var zH = 'Et5x/eD]0W:nro+V`G#Is{USuvFim$[(^ghO@2;l!wbCQ<jM|d1yBLYNk>fT.9"H*cPA}?)XpKaJ%Z8qz47,=6~_3&R'.indexOf(BH[tH]);
                    if (zH !== -kB[0])
                      if (hH < kB[2]) hH = zH;
                      else {
                        fB(hH += zH * kB[26], rH |= hH << SH, SH += (hH & kB[28]) > kB[29] ? kB[30] : kB[31]);
                        do {
                          fB(AH.push(rH & kB[11]), rH >>= kB[10], SH -= kB[10])
                        } while (SH > kB[6]);
                        hH = -kB[0]
                      }
                  }
                  return hH > -kB[0] && AH.push((rH | hH << SH) & kB[11]), oB(AH)
                }

                function EH(...HH) {
                  return HH[kB[12]] = kB[0], typeof MB[HH[kB[2]]] === kB[13] ? MB[HH[kB[2]]] = CH(xB[HH[kB[2]]]) : MB[HH[kB[2]]]
                }
                throw Error(EH(85))
              }
              if (HH[kB[16]] == HH[kB[4]]) return kB[68];
              if (fB(LH = HH[kB[32]][HH[kB[16]]] & kB[11], HH[kB[16]]++), (LH & kB[48]) == kB[2]) return LH;
              if ((LH & kB[63]) == kB[58]) {
                if (fB(rH = hH(), zH = (LH & kB[49]) << kB[19] | rH), zH >= kB[48]) return zH;
                throw Error(BH(kB[64]))
              }
              if ((LH & kB[65]) == kB[63]) {
                if (fB(rH = hH(), SH = hH(), zH = (LH & kB[50]) << kB[21] | rH << kB[19] | SH), zH >= 2048) return AH(zH), zH;
                {
                  function XH(...HH) {
                    for (fB(HH[kB[12]] = kB[0], HH[kB[0]] = 'kDCgV:XTElrRiWUY/1@.>c&dmS2hQe_[aGLy|q93IBfw58{*p0(Oz)!`H^+nM4%FvoNAb67<$KZtJ=jPs]"#?ux},;~', HH[kB[1]] = "" + (HH[kB[2]] || ""), HH[-kB[45]] = HH[kB[1]].length, HH[kB[32]] = [], HH[-kB[67]] = kB[2], HH[kB[56]] = kB[2], HH[kB[6]] = -kB[0]), HH[kB[66]] = kB[2]; HH[kB[66]] < HH[-kB[45]]; HH[kB[66]]++)
                      if (HH[kB[60]] = HH[kB[0]].indexOf(HH[kB[1]][HH[kB[66]]]), HH[kB[60]] !== -kB[0])
                        if (HH[kB[6]] < kB[2]) HH[kB[6]] = HH[kB[60]];
                        else {
                          fB(HH[kB[6]] += HH[kB[60]] * kB[26], HH[-kB[67]] |= HH[kB[6]] << HH[kB[56]], HH[kB[56]] += (HH[kB[6]] & kB[28]) > kB[29] ? kB[30] : kB[31]);
                          do {
                            fB(HH[kB[32]].push(HH[-kB[67]] & kB[11]), HH[-kB[67]] >>= kB[10], HH[kB[56]] -= kB[10])
                          } while (HH[kB[56]] > kB[6]);
                          HH[kB[6]] = -kB[0]
                        } return HH[kB[6]] > -kB[0] && HH[kB[32]].push((HH[-kB[67]] | HH[kB[6]] << HH[kB[56]]) & kB[11]), oB(HH[kB[32]])
                  }

                  function GH(...HH) {
                    return HH[kB[12]] = kB[0], typeof MB[HH[kB[2]]] === kB[13] ? MB[HH[kB[2]]] = XH(xB[HH[kB[2]]]) : MB[HH[kB[2]]]
                  }
                  throw Error(GH(86))
                }
              }
              if ((248 & LH) == kB[65] && (fB(rH = hH(), SH = hH(), tH = hH(), zH = (LH & kB[6]) << kB[51] | rH << kB[21] | SH << kB[19] | tH), zH >= kB[38] && zH <= 1114111)) return zH;
              throw Error(function(...HH) {
                return HH[kB[12]] = kB[0], typeof MB[HH[kB[2]]] === kB[13] ? MB[HH[kB[2]]] = function(...HH) {
                  for (fB(HH[kB[12]] = kB[0], HH[kB[17]] = 'yHNV]^xb"OWSZf@qK94c(w.p{TQ2>7#`P~?:8&XYjE|)e=3LMzvGro_![udh0smgCki;t%R1+$J},aFB5<IU*D/nl6A', HH[kB[1]] = "" + (HH[kB[2]] || ""), HH[-kB[59]] = HH[kB[1]].length, HH[-kB[62]] = [], HH[kB[7]] = kB[2], HH[kB[19]] = kB[2], HH[-kB[61]] = -kB[0]), HH[kB[53]] = kB[2]; HH[kB[53]] < HH[-kB[59]]; HH[kB[53]]++)
                    if (HH[kB[60]] = HH[kB[17]].indexOf(HH[kB[1]][HH[kB[53]]]), HH[kB[60]] !== -kB[0])
                      if (HH[-kB[61]] < kB[2]) HH[-kB[61]] = HH[kB[60]];
                      else {
                        fB(HH[-kB[61]] += HH[kB[60]] * kB[26], HH[kB[7]] |= HH[-kB[61]] << HH[kB[19]], HH[kB[19]] += (HH[-kB[61]] & kB[28]) > kB[29] ? kB[30] : kB[31]);
                        do {
                          fB(HH[-kB[62]].push(HH[kB[7]] & kB[11]), HH[kB[7]] >>= kB[10], HH[kB[19]] -= kB[10])
                        } while (HH[kB[19]] > kB[6]);
                        HH[-kB[61]] = -kB[0]
                      } return HH[-kB[61]] > -kB[0] && HH[-kB[62]].push((HH[kB[7]] | HH[-kB[61]] << HH[kB[19]]) & kB[11]), oB(HH[-kB[62]])
                }(xB[HH[kB[2]]]) : MB[HH[kB[2]]]
              }(87))
            }
            fB(HH[kB[12]] = kB[0], HH[kB[0]] = String.fromCharCode), fB(HH[kB[32]] = kB[14], HH[kB[4]] = kB[14], HH[kB[16]] = kB[14]), fB(HH[kB[2]].version = BH(kB[29]), HH[kB[2]].encode = function(HH) {
              var BH, AH, rH, hH, tH = LH(HH);
              for (fB(BH = tH.length, AH = -kB[0], rH = void 0, hH = ""); ++AH < BH;) fB(rH = tH[AH], hH += SH(rH));
              return hH
            }, HH[kB[2]].decode = function(BH) {
              var AH, rH;
              for (fB(HH[kB[32]] = LH(BH), HH[kB[4]] = HH[kB[32]].length, HH[kB[16]] = kB[2], AH = [], rH = void 0);
                (rH = tH()) !== kB[68];) AH.push(rH);
              return function(...BH) {
                for (fB(BH[kB[12]] = kB[0], BH[kB[36]] = BH[kB[2]].length, BH[-kB[35]] = -kB[0], BH[kB[37]] = kB[14], BH[kB[32]] = ""); ++BH[-kB[35]] < BH[kB[36]];) BH[kB[37]] = BH[kB[2]][BH[-kB[35]]], BH[kB[37]] > 65535 && fB(BH[kB[37]] -= kB[38], BH[kB[32]] += HH[kB[0]](BH[kB[37]] >>> kB[39] & kB[34] | kB[40]), BH[kB[37]] = kB[41] | BH[kB[37]] & kB[34]), BH[kB[32]] += HH[kB[0]](BH[kB[37]]);
                return BH[kB[32]]
              }(AH)
            })
          }(typeof exports === BH(89) + BH(90) ? this.utf8 = {} : exports)
        }
        if (BH(75) in IB && LH(), (kB[2], xH[kB[5]])()) {
          function AH() {
            console.log((function(HH) {
              var BH, LH, AH, rH, SH, hH, tH = kB[2];
              for (fB(BH = {}, LH = kB[2], AH = kB[2], rH = kB[2], SH = HH.length), hH = kB[2]; hH < SH; hH++) {
                var zH;
                for (fB(BH = {}, LH = kB[2], AH = kB[0]), zH = hH + kB[0]; zH < SH; zH++) HH[hH].x !== HH[zH].x || HH[hH].y !== HH[zH].y ? (BH[rH = HH[hH].y === HH[zH].y ? Number.MAX_SAFE_INTEGER : (HH[hH].x - HH[zH].x) / (HH[hH].y - HH[zH].y)] || (BH[rH] = kB[2]), fB(BH[rH]++, LH = Math.max(LH, BH[rH]))) : AH++;
                fB(LH += AH, tH = Math.max(tH, LH))
              }
              return tH
            }))
          }
          BH(kB[26]) + "u" in IB && AH(), (kB[2], XH[kB[16]])("4 ")
        }
        CB = kB[2]
      }
    }), uB = function(HH) {
      function BH(...HH) {
        return HH[kB[12]] = kB[0], typeof MB[HH[kB[2]]] === kB[13] ? MB[HH[kB[2]]] = function(...HH) {
          for (fB(HH[kB[12]] = kB[0], HH[-kB[69]] = 'f4<SNED]_sjXPcbi0uZ7Ln2m&CQ}[MV(r=d3~h8lJt/H?^"#a$o|GIg1p+WvzR9F>U,Bx%*e{K:!yqTw`)AYk5.;@6O', HH[kB[1]] = "" + (HH[kB[2]] || ""), HH[kB[4]] = HH[kB[1]].length, HH[kB[15]] = [], HH[kB[72]] = kB[2], HH[kB[73]] = kB[2], HH[kB[71]] = -kB[0]), HH[kB[53]] = kB[2]; HH[kB[53]] < HH[kB[4]]; HH[kB[53]]++)
            if (HH[-kB[70]] = HH[-kB[69]].indexOf(HH[kB[1]][HH[kB[53]]]), HH[-kB[70]] !== -kB[0])
              if (HH[kB[71]] < kB[2]) HH[kB[71]] = HH[-kB[70]];
              else {
                fB(HH[kB[71]] += HH[-kB[70]] * kB[26], HH[kB[72]] |= HH[kB[71]] << HH[kB[73]], HH[kB[73]] += (HH[kB[71]] & kB[28]) > kB[29] ? kB[30] : kB[31]);
                do {
                  fB(HH[kB[15]].push(HH[kB[72]] & kB[11]), HH[kB[72]] >>= kB[10], HH[kB[73]] -= kB[10])
                } while (HH[kB[73]] > kB[6]);
                HH[kB[71]] = -kB[0]
              } return HH[kB[71]] > -kB[0] && HH[kB[15]].push((HH[kB[72]] | HH[kB[71]] << HH[kB[73]]) & kB[11]), oB(HH[kB[15]])
        }(xB[HH[kB[2]]]) : MB[HH[kB[2]]]
      }
      if ((arguments[mB(92)] > kB[0] && arguments[kB[0]] !== kB[14] ? arguments[kB[0]] : kB[68]) && (kB[2], ZH[kB[56]])(HH)) {
        function AH(HH) {
          var BH, LH, AH, rH, SH, hH, tH;
          for (fB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = kB[2], SH = kB[2], hH = -kB[0]), tH = kB[2]; tH < LH; tH++) {
            var zH = 'AdYmhrIuL)";jkBoWcyN3R{eKsvP+MX[Va=DU&^l9Zt4%F:2?>x(g/7Enb@O1JTpS5HQC*6#i|q!.fz$0~,_}w`]<8G'.indexOf(BH[tH]);
            if (zH !== -kB[0])
              if (hH < kB[2]) hH = zH;
              else {
                fB(hH += zH * kB[26], rH |= hH << SH, SH += (hH & kB[28]) > kB[29] ? kB[30] : kB[31]);
                do {
                  fB(AH.push(rH & kB[11]), rH >>= kB[10], SH -= kB[10])
                } while (SH > kB[6]);
                hH = -kB[0]
              }
          }
          return hH > -kB[0] && AH.push((rH | hH << SH) & kB[11]), oB(AH)
        }

        function rH(...HH) {
          return HH[kB[12]] = kB[0], typeof MB[HH[kB[2]]] === kB[13] ? MB[HH[kB[2]]] = AH(xB[HH[kB[2]]]) : MB[HH[kB[2]]]
        }

        function SH(...HH) {
          fB(HH[kB[12]] = kB[2], HH[kB[16]] = function(...BH) {
            return BH[kB[12]] = kB[1], HH[kB[74]]({}, BH[kB[2]], BH[kB[0]])
          }, HH[kB[74]] = function(...BH) {
            if (fB(BH[kB[12]] = kB[4], BH[kB[4]] = {}), BH[kB[2]][BH[kB[0]] + BH[kB[1]]] !== kB[14]) return BH[kB[2]][BH[kB[0]] + BH[kB[1]]];
            if (BH[kB[0]] === BH[kB[1]]) return kB[75];
            for (BH[kB[15]] = kB[2]; BH[kB[15]] < BH[kB[0]].length; BH[kB[15]]++) BH[kB[4]][BH[kB[0]][BH[kB[15]]]] === kB[14] && (BH[kB[4]][BH[kB[0]][BH[kB[15]]]] = kB[2]), BH[kB[4]][BH[kB[1]][BH[kB[15]]]] === kB[14] && (BH[kB[4]][BH[kB[1]][BH[kB[15]]]] = kB[2]), fB(BH[kB[4]][BH[kB[0]][BH[kB[15]]]]++, BH[kB[4]][BH[kB[1]][BH[kB[15]]]]--);
            for (BH[kB[42]] in BH[kB[4]])
              if (BH[kB[4]][BH[kB[42]]] !== kB[2]) return BH[kB[2]][BH[kB[0]] + BH[kB[1]]] = kB[68], kB[68];
            for (BH[kB[32]] = kB[0]; BH[kB[32]] < BH[kB[0]].length; BH[kB[32]]++)
              if (HH[kB[74]](BH[kB[2]], BH[kB[0]].substr(kB[2], BH[kB[32]]), BH[kB[1]].substr(kB[2], BH[kB[32]])) && HH[kB[74]](BH[kB[2]], BH[kB[0]].substr(BH[kB[32]]), BH[kB[1]].substr(BH[kB[32]])) || HH[kB[74]](BH[kB[2]], BH[kB[0]].substr(kB[2], BH[kB[32]]), BH[kB[1]].substr(BH[kB[1]].length - BH[kB[32]])) && HH[kB[74]](BH[kB[2]], BH[kB[0]].substr(BH[kB[32]]), BH[kB[1]].substr(kB[2], BH[kB[1]].length - BH[kB[32]]))) return BH[kB[2]][BH[kB[0]] + BH[kB[1]]] = kB[75], kB[75];
            return BH[kB[2]][BH[kB[0]] + BH[kB[1]]] = kB[68], kB[68]
          }, console.log(HH[kB[16]]))
        }
        return void(rH(93) in IB && SH())
      }
      const LH = window[BH(94)];
      if (typeof LH !== BH(95) + "on" || HH instanceof LH || (kB[2], gH.E)(HH)) {
        function hH(...HH) {
          for (fB(HH[kB[12]] = kB[0], HH[-kB[76]] = '.l0k:ghyVrXp5;Z[N3Eze}fx6w^1#]9&q,vTS(R*Yb`4A2{Li?IJ%D+u>8coP/<smU~7C_n=d)tB"FGQ$WH|KOMa!j@', HH[kB[1]] = "" + (HH[kB[2]] || ""), HH[kB[74]] = HH[kB[1]].length, HH[-kB[79]] = [], HH[-kB[77]] = kB[2], HH[kB[78]] = kB[2], HH[kB[25]] = -kB[0]), HH[kB[10]] = kB[2]; HH[kB[10]] < HH[kB[74]]; HH[kB[10]]++)
            if (HH[kB[60]] = HH[-kB[76]].indexOf(HH[kB[1]][HH[kB[10]]]), HH[kB[60]] !== -kB[0])
              if (HH[kB[25]] < kB[2]) HH[kB[25]] = HH[kB[60]];
              else {
                fB(HH[kB[25]] += HH[kB[60]] * kB[26], HH[-kB[77]] |= HH[kB[25]] << HH[kB[78]], HH[kB[78]] += (HH[kB[25]] & kB[28]) > kB[29] ? kB[30] : kB[31]);
                do {
                  fB(HH[-kB[79]].push(HH[-kB[77]] & kB[11]), HH[-kB[77]] >>= kB[10], HH[kB[78]] -= kB[10])
                } while (HH[kB[78]] > kB[6]);
                HH[kB[25]] = -kB[0]
              } return HH[kB[25]] > -kB[0] && HH[-kB[79]].push((HH[-kB[77]] | HH[kB[25]] << HH[kB[78]]) & kB[11]), oB(HH[-kB[79]])
        }

        function tH(HH) {
          return typeof MB[HH] === kB[13] ? MB[HH] = hH(xB[HH]) : MB[HH]
        }
        HH[tH(96) + tH(97)] === kB[68] ? (kB[2], XH[kB[16]])("2 " + (kB[2], GH[kB[74]])(HH)) : WB(HH) < kB[39] ? (kB[2], XH[kB[16]])("3 ") : QB()
      } else(kB[2], XH[kB[16]])("5 ")
    }, QH.k.subscribe("customBindingsChanged", (() => {
      KB()
    }));
    let cB = !1,
      eB = !1;
    const qB = () => cB || eB && fH.e.isInGame(),
      gB = HH => {
        qB() && HH.preventDefault()
      };
    QH.k.subscribe("displaymodeFullscreenChange", (HH => {
      NB()
    })), QH.k.subscribe("pointerLockUpdate", (HH => {
      cB = HH, NB(), RB()
    })), QH.k.subscribe("freeCursorUpdate", (HH => {
      eB = HH, NB(), RB()
    }));
    const NB = () => {
        window.removeEventListener("wheel", gB), lH.isIframed && !(0, hH.p)() && (cB || eB) && window.addEventListener("wheel", gB, {
          passive: !1
        })
      },
      RB = () => {
        window.removeEventListener("wheel", jB), (cB || eB) && window.addEventListener("wheel", jB, {
          passive: !1
        })
      },
      jB = HH => {
        !0 === HH.ctrlKey && qB() && HH.preventDefault()
      };

    function nB(HH) {
      QH.k.AX("QTEMouseState", {
        isDown: HH
      })
    }

    function FB(HH) {
      var BH, LH, rH, SH, hH, tH, zH, CH;
      const XH = (0, mH.c)();
      XH.cBH = null !== (BH = function(HH, BH) {
        var LH, AH;
        if (!XB) return null;
        const rH = HH.bloxd;
        tB ??= rH.getMetaInfo("Board").rootId;
        const SH = null !== (LH = null === BH || void 0 === BH ? void 0 : BH.y5) && void 0 !== LH ? LH : null;
        if (!SH || rH.getMetaInfo(SH).rootId !== tB) return null;
        const hH = null !== (AH = null === BH || void 0 === BH ? void 0 : BH.position) && void 0 !== AH ? AH : null;
        if (rH.playerCanChangePos(HH.lF, hH[0], hH[1], hH[2])) return null;
        const tH = (HH, BH, LH) => {
          const AH = rH.blockDataOwner.getBlockData(HH, BH, LH),
            SH = null === AH || void 0 === AH ? void 0 : AH.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return KH.singleLineBoardActions.has(SH)
        };
        if (tH(hH[0], hH[1], hH[2])) return null;
        let zH;
        HH.iBH && (zH = [...HH.iBH], HH.M_(zH, zH));
        const CH = (zH ? HH.camera.W4 : 0) + rH.getBlockReach(HH.lF);
        return HH.pickBlock(zH, HH.pBH, CH, ((BH, LH, AH, SH) => 0 !== BH && ("Board" !== rH.getMetaInfo(BH).rootName || rH.playerCanChangePos(HH.lF, LH, AH, SH) || tH(LH, AH, SH))))
      }(XH, XH.cBH)) && void 0 !== BH ? BH : XH.cBH;
      const GH = null !== (LH = null === (rH = XH.cBH) || void 0 === rH ? void 0 : rH.position) && void 0 !== LH ? LH : null,
        uH = null !== (SH = XH.pBH) && void 0 !== SH ? SH : XH.camera.T_(),
        WH = mH.f.localPlayerPickActionHelper.getPickEntityResult(uH),
        MH = null !== (hH = XH.cBH) && void 0 !== hH && hH.y5 ? (0, NH.d)(XH.cBH.y5) : "Air",
        xH = HH === YH.e.UpFirePrimary || HH === YH.e.UpFireSecondary,
        vH = xH ? "onPlayerClickUp" : "onPlayerClick",
        PH = xH ? HH === YH.e.UpFireSecondary : HH === YH.e.DownFireSecondary,
        TH = !xH && (0, AH.getWasDoubleClick)();
      QH.k.AX("mouseState", {
        eE: HH,
        isDown: !xH
      }), (0, AH.sendColyMessage)(EH.wh, {
        eE: HH,
        qE: TH,
        hh: GH,
        zh: WH
      }, !0), (0, mH.b)().client.triggerGameCallback(vH, XH.lF, PH, null !== (tH = null === GH || void 0 === GH ? void 0 : GH[0]) && void 0 !== tH ? tH : null, null !== (zH = null === GH || void 0 === GH ? void 0 : GH[1]) && void 0 !== zH ? zH : null, null !== (CH = null === GH || void 0 === GH ? void 0 : GH[2]) && void 0 !== CH ? CH : null, MH, WH)
    }
    window.addEventListener("keydown", (HH => {
      ["ArrowUp", "ArrowDown"].includes(HH.key) && HH.preventDefault()
    })), document.addEventListener("keydown", (HH => {
      (0, qH.d)(HH, (() => {
        const HH = (0, mH.c)();
        return (0, eH.M)(HH) || !1 !== HH.wT.canCustomiseChar
      }))
    }))
  },
  40020: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => hH
    });
    var AH = LH(39306);
    let rH = !1;

    function SH() {
      return rH
    }

    function hH(HH) {
      rH = HH, HH ? AH.e.setMultiplierType("emoteWheel", 0) : AH.e.removeMultiplier("emoteWheel")
    }
  },
  40032: (HH, BH, LH) => {
    function AH(HH) {
      return Boolean(HH.wT.useInventory && HH.wT.useFullInventory && HH.pT.cLH(HH.lF))
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  39905: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      g: () => rH
    });
    var AH = LH(38020);

    function rH(HH, BH) {
      return {
        replayedClipName: HH,
        replayedClipAgeSeconds: BH
      }
    }

    function SH(HH, BH, LH, rH, SH) {
      const hH = function(HH) {
          if ("object" !== typeof HH || null === HH) return null;
          const {
            replayedClipName: BH,
            replayedClipAgeSeconds: LH
          } = HH;
          return "string" === typeof BH && "number" === typeof LH ? {
            VB: BH,
            OB: LH
          } : null
        }(LH),
        tH = null === hH ? LH : null,
        {
          VB: zH = null,
          OB: CH = 0
        } = null !== hH && void 0 !== hH ? hH : {};
      HH.animateEntity(BH, AH.g.Custom, tH, rH, SH, zH, CH)
    }
  },
  40023: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH
    });
    var AH = LH(39251),
      rH = LH(317),
      SH = LH(3038);

    function hH() {
      var HH, BH, LH, AH;
      const hH = (0, SH.c)(),
        tH = null !== (HH = null === (BH = hH.pT.fLH(hH.lF)) || void 0 === BH ? void 0 : BH.selectedItem) && void 0 !== HH ? HH : null,
        zH = tH ? (0, SH.b)().getItemStat(hH.lF, tH.name, "attackCooldownMs") : null,
        CH = (0, rH.nd)(zH, null === tH || void 0 === tH || null === (LH = tH.attributes.customAttributes) || void 0 === LH || null === (AH = LH.enchantments) || void 0 === AH ? void 0 : AH["Attack Speed"]);
      return Math.max(56, Math.ceil((CH + 30) / 3))
    }
    class tH {
      constructor(HH, BH) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [HH], this.dueMs = HH, this.intervalMs = BH
      }
      spacedBy(HH, BH) {
        if (HH === this.intervalMs) return this;
        const LH = this.tries[this.tries.length - 1],
          AH = new tH(LH, HH);
        return AH.dueMs = Math.max(LH, BH - HH), AH
      }
      nextDueMs() {
        const HH = this.tries[this.tries.length - 1];
        return Math.max(HH + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(HH, BH) {
        this.tries.push(HH), this.tries.length > 3 && this.tries.shift(), this.dueMs = BH
      }
    }
    var zH = LH(40020),
      CH = LH(1241);
    class EH {
      constructor() {
        this.timer = null, this.tries = new tH(0, 0), this.check = () => {
          const HH = Date.now(),
            BH = this.tries.spacedBy(hH(), HH),
            LH = BH.nextDueMs();
          if (HH < LH) this.schedule();
          else {
            if (BH.noteTry(HH, LH), this.tries = BH, (0, CH.A)() && !(0, zH.e)()) {
              var rH, tH;
              (0, AH.c)();
              const HH = (0, SH.c)();
              null === (rH = HH.pT.pLH(HH.lF)) || void 0 === rH || null === (tH = rH.pU) || void 0 === tH || tH.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var HH;
        null === (HH = EH.running) || void 0 === HH || HH.stop(), EH.running = this, this.tries = new tH(Date.now(), hH()), this.schedule()
      }
      static stopRunning() {
        var HH;
        null === (HH = EH.running) || void 0 === HH || HH.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, EH.running === this && (EH.running = null)
      }
      schedule() {
        const HH = Date.now(),
          BH = this.tries.spacedBy(hH(), HH).nextDueMs() - HH;
        this.timer = setTimeout(this.check, Math.min(BH, 100))
      }
    }
    EH.running = null
  },
  39914: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => uH,
      d: () => EH,
      e: () => YH,
      g: () => GH,
      k: () => QH,
      l: () => XH
    });
    var AH = LH(39919),
      rH = LH(38048),
      SH = LH(4061),
      hH = LH(2003),
      tH = LH(18),
      zH = LH(3038);
    const CH = new AH.e;

    function EH() {
      return CH
    }

    function XH() {
      CH.clear()
    }

    function GH() {
      for (const HH of CH.ids()) {
        const BH = CH.getName(HH);
        void 0 !== BH && hH.c.delete(BH)
      }
      XH(), tH.k.AX("playerRosterChanged", CH.ids())
    }

    function YH(HH, BH) {
      var LH, AH;
      if (CH.has(HH)) return CH.getSetting(HH, BH);
      const rH = (0, zH.c)();
      return null === (LH = rH.mF[rH.lF]) || void 0 === LH || null === (AH = LH[HH]) || void 0 === AH ? void 0 : AH[BH]
    }

    function uH(HH) {
      const {
        added: BH,
        removed: LH,
        settingChanges: AH
      } = CH.apply(HH);
      for (const {
          playerId: rH,
          name: SH
        }
        of LH) void 0 === SH || WH(rH) || hH.c.delete(SH);
      for (const {
          playerId: SH,
          settings: hH
        }
        of AH)
        if (WH(SH)) QH(SH, hH);
        else
          for (const HH in hH)(0, rH.j)(SH, HH, hH[HH]);
      (BH.length > 0 || LH.length > 0) && tH.k.AX("playerRosterChanged", CH.ids())
    }

    function QH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CH.getSettings(HH);
      if (BH) {
        (0, rH.e)(HH);
        for (const LH in BH)(0, rH.d)(HH, LH, BH[LH])
      }
    }

    function WH(HH) {
      return HH === (0, zH.c)().JBH || (0, zH.b)().client.hasEntity(HH)
    }(0, SH.onGameReset)(XH)
  },
  38961: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => kH,
      g: () => UH,
      i: () => OH,
      j: () => bH,
      n: () => mH
    });
    var AH = LH(37961),
      rH = LH(38966),
      SH = LH(330),
      hH = LH.n(SH),
      tH = LH(3768);
    const zH = new AH.lu,
      CH = new AH.lu,
      EH = new AH.lu,
      XH = new AH.lu,
      GH = new AH.lu,
      YH = [0, 0, 0],
      uH = {
        x: 0,
        y: 0
      },
      QH = new AH.lu(1, 0, 0),
      WH = new AH.lu(0, 1, 0),
      MH = AH.Matrix.Identity(),
      xH = new AH.Matrix,
      vH = new AH.Matrix,
      PH = new AH.lu,
      TH = new rH.c(0, 0, 0, 0);

    function UH(HH, BH) {
      var LH, rH;
      const SH = VH(HH, BH);
      if (SH) {
        const HH = SH.x,
          BH = SH.y,
          LH = HH - 50,
          AH = BH - 50;
        return Math.abs(LH) <= tH.b && Math.abs(AH) <= (0, tH.k)() ? {
          x: HH,
          y: BH
        } : IH(LH, AH)
      }
      EH.SBH(BH[0], BH[1], BH[2]),
        function(HH) {
          const BH = HH.mX.FAH(),
            LH = BH ? AH.Matrix.FromArrayToRef(BH.worldMatrix, 0, vH) : HH.mX.yN().activeCamera.getWorldMatrix();
          AH.lu.TransformNormalToRef(QH, LH, XH), XH.normalize(), AH.lu.TransformNormalToRef(WH, LH, GH), GH.normalize()
        }(HH);
      const hH = AH.lu.Dot(EH, XH);
      let zH = -AH.lu.Dot(EH, GH);
      Math.abs(hH) < .001 && Math.abs(zH) < .001 && (zH = -1);
      const CH = null !== (LH = null === (rH = HH.mX.FAH()) || void 0 === rH ? void 0 : rH.projectionMatrix) && void 0 !== LH ? LH : HH.mX.yN().activeCamera.getProjectionMatrix().m;
      return IH(hH * CH[0], zH * CH[5])
    }

    function VH(HH, BH) {
      const LH = HH.mX.yN(),
        rH = LH.Iu(),
        SH = rH.getRenderWidth(),
        hH = rH.getRenderHeight();
      TH.width = SH, TH.height = hH;
      const tH = HH.mX.FAH(),
        EH = tH ? PH.SBH(tH.eye[0], tH.eye[1], tH.eye[2]) : HH.mX.camera.globalPosition;
      zH.SBH(EH.x + 10 * BH[0], EH.y + 10 * BH[1], EH.z + 10 * BH[2]);
      const XH = tH ? AH.Matrix.FromArrayToRef(tH.viewProjectionMatrix, 0, xH) : LH.getTransformMatrix();
      return AH.lu.ProjectToRef(zH, MH, XH, TH, CH), CH.z < 0 || CH.z > 1 ? null : (uH.x = CH.x / SH * 100, uH.y = CH.y / hH * 100, uH)
    }

    function OH(HH, BH) {
      return UH(HH, oH(HH, BH))
    }

    function bH(HH, BH) {
      const LH = VH(HH, oH(HH, BH));
      return LH && {
        x: LH.x,
        y: LH.y
      }
    }

    function kH(HH) {
      var BH, LH;
      return 1 / (null !== (BH = null === (LH = HH.mX.FAH()) || void 0 === LH ? void 0 : LH.projectionMatrix[0]) && void 0 !== BH ? BH : HH.mX.yN().activeCamera.getProjectionMatrix().m[0])
    }

    function mH(HH, BH, LH) {
      const AH = HH.mX.FAH(),
        rH = AH ? AH.worldMatrix : HH.mX.yN().activeCamera.getWorldMatrix().m,
        SH = HH.DG;
      for (let hH = 0; hH < 3; hH++) BH[hH] = rH[12 + hH] + SH[hH], LH[hH] = rH[8 + hH];
      hH().normalize(LH, LH)
    }

    function oH(HH, BH) {
      const LH = HH.DG,
        AH = HH.mX.FAH(),
        rH = AH ? PH.SBH(AH.eye[0], AH.eye[1], AH.eye[2]) : HH.mX.camera.globalPosition;
      return YH[0] = BH[0] - LH[0] - rH.x, YH[1] = BH[1] - LH[1] - rH.y, YH[2] = BH[2] - LH[2] - rH.z, hH().normalize(YH, YH), YH
    }

    function IH(HH, BH) {
      return (0, tH.e)(HH, BH, tH.b, (0, tH.k)())
    }
  },
  39957: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH
    });
    var AH = LH(18),
      rH = LH(1241),
      SH = LH(3296);
    const hH = "Reconnecting";
    class tH {
      constructor(HH) {
        this.hooks = HH, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = HH => {
          HH.persisted || this.leave()
        }, this.controller = new SH.b((BH => HH.reconnect(BH)), {
          isSessionLive: () => !this.ended && HH.isLive(),
          onPhaseChanged: HH => {
            this.onPhaseChanged(HH)
          },
          onReconnected: BH => {
            HH.onReconnected(BH)
          },
          onGaveUp: BH => {
            !this.ended && HH.isLive() && HH.onGaveUp(this.sessionBased, BH)
          }
        })
      }
      onInitialInfo(HH, BH) {
        this.graceMs = HH, this.sessionBased = BH
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(HH) {
        this.ended || this.controller.onConnectionLost(HH, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const HH = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          BH = this.controller.heldToken;
        this.end(), HH && "" !== BH && this.hooks.releaseSeat(BH)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(HH) {
        const BH = (0, SH.m)(HH);
        BH !== this.stopped && (this.stopped = BH, this.hooks.freeze(BH));
        const LH = "frozen" === HH || "resuming" === HH && this.frozen;
        LH && !this.frozen ? (0, rH.x)(hH, {
          overridesPause: !0
        }) : !LH && this.frozen && (0, rH.t)(hH), this.frozen = LH, this.setListening("connected" !== HH), AH.k.AX(SH.i, LH ? "frozen" : HH)
      }
      setListening(HH) {
        HH !== this.listening && (this.listening = HH, HH ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39959: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = HH, this.now = BH, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const HH = this.now(),
            BH = HH - this.lastCheckAt <= 2e3;
          this.lastCheckAt = HH;
          const LH = "visible" === document.visibilityState;
          !LH || BH && this.wasVisible || (this.resumedAt = HH), this.wasVisible = LH, LH && HH - this.lastHeardAt > 12e3 && HH - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = BH(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39894: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH
    });
    var AH = LH(176),
      rH = LH(330),
      SH = LH.n(rH),
      hH = LH(37608),
      tH = LH(37617),
      zH = LH(3038);
    const CH = AH.g.iW * AH.g.playerEyeToHeightRatio,
      EH = 250,
      XH = 1.1,
      GH = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(HH, BH) {
          this.entities.set(HH, BH)
        }
        update(HH, BH) {
          const LH = this.entities.get(HH);
          this.entities.set(HH, BH);
          const AH = this.playing.get(HH);
          AH && (LH && LH.soundName === BH.soundName ? (AH.sound.setRelativeVolume(BH.volume), AH.sound.rate(BH.rate), AH.sound.setPannerAttr({
            refDistance: BH.refDistance
          })) : this.stopEntity(HH))
        }
        remove(HH) {
          this.stopEntity(HH), this.entities.delete(HH)
        }
        IX(HH) {
          this.msSinceLastScan += HH, this.msSinceLastScan < EH || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(HH) {
          const BH = this.playing.get(HH);
          BH && (BH.sound.stop(), this.playing.delete(HH))
        }
        startEntity(HH, BH, LH) {
          const AH = (0, tH.h)(BH.soundName);
          if (!AH) return console.error(`AudioEntityManager: no sound found for "${BH.soundName}", dropping audio entity ${HH}`), void this.remove(HH);
          const rH = hH.c.play(AH, BH.volume, LH, BH.maxHearDist, BH.refDistance, !0);
          rH.rate(BH.rate), this.playing.set(HH, {
            sound: rH,
            lastPos: SH().clone(LH)
          })
        }
        scan() {
          const HH = (0, zH.c)();
          if (!HH) return;
          const BH = HH.pT.hT(HH.lF);
          if (BH)
            for (const [LH, AH] of this.entities) {
              if (!HH.pT.aBH(LH, "position")) continue;
              const rH = HH.pT.hT(LH),
                hH = SH().sqrDist(BH, rH),
                tH = this.playing.get(LH);
              if (tH) {
                const HH = AH.maxHearDist * XH;
                hH > HH * HH ? this.stopEntity(LH) : SH().equals(rH, tH.lastPos) || (tH.sound.setPosition([rH[0], rH[1] + CH, rH[2]]), SH().copy(tH.lastPos, rH))
              } else hH <= AH.maxHearDist * AH.maxHearDist && this.startEntity(LH, AH, rH)
            }
        }
      }
  },
  39975: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      g: () => EH
    });
    var AH = LH(1751),
      rH = LH(176),
      SH = LH(1714),
      hH = LH(1842),
      tH = LH(1131),
      zH = LH(1070);
    async function CH(HH, BH) {
      return function(HH) {
        return "object" === typeof HH && null !== HH && HH.code === rH.e.VpnIp.code
      }(BH) && function(HH) {
        return SH.b.supports("appCheck") && HH.isLoggedIn() && !HH.hasTriedAppAttestation()
      }(HH) && await async function(HH) {
        try {
          const {
            token: BH
          } = await (0, hH.d)(), {
            "3PSIDMCPP": LH
          } = await (0, zH.postJsonWithMetricsCookiesAndJsonResponse)(`${tH.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: BH
          }, {
            retries: 0
          }, HH.getMetricsCookies());
          return HH.setAppAttestedAuthJwt(LH), !0
        } catch (BH) {
          return BH instanceof AH.d && "failed" === BH.code ? (console.warn("The app couldn't get an App Check token:", BH), HH.markAppAttestationTried()) : console.error("Failed to attest the app:", BH), !1
        }
      }(HH)
    }
    async function EH(HH, BH) {
      try {
        return await BH()
      } catch (LH) {
        if (!await CH(HH, LH)) throw LH
      }
      return BH()
    }
  },
  39967: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      f: () => EH
    });
    var AH = LH(176),
      rH = LH(1885),
      SH = LH(1148),
      hH = LH(9627);
    const tH = [250, 500, 1e3, 2e3, 1250],
      zH = 406;

    function CH(HH) {
      if ("object" !== typeof HH || null === HH) return !1;
      const {
        code: BH,
        message: LH
      } = HH, rH = AH.e.duplicateLobbyNameError;
      return (BH === rH.code || BH === zH) && (LH === rH.text || LH === rH.text + AH.n)
    }
    async function EH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rH.d;
      for (let rH = 0;; rH++) {
        let hH;
        (0, SH.t)(BH);
        try {
          return await HH()
        } catch (AH) {
          if (hH = tH[rH], void 0 === hH || !CH(AH)) throw AH
        }
        await LH(hH, BH)
      }
    }
    const XH = new Set([AH.e.duplicateLobbyNameError.code, AH.e.lobbyCantBeCreated.code, AH.e.roomDisposedEarlyError.code, AH.e.roomDisposedLateError.code, AH.e.serverRoomLimitReached.code]);

    function GH(HH) {
      if (CH(HH)) return !0;
      const BH = (0, hH.e)(HH);
      return "number" === typeof BH && XH.has(BH)
    }
  },
  39940: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      f: () => rH
    });
    var AH = LH(18);

    function rH(HH) {
      return "refetchCode" === HH || "devDownloadJson" === HH || HH.startsWith("Plugin")
    }

    function SH(HH, BH) {
      "refetchCode" !== HH ? "Plugin|MobAiPlugin|ShowPetUi" !== HH ? Promise.all([LH.e(120), LH.e(121), LH.e(116), LH.e(118), LH.e(240)]).then((() => LH(45217))).then((LH => {
        let {
          runClientGameMessage: AH
        } = LH;
        AH(HH, BH)
      })).catch((BH => {
        console.error(`Game message ${HH} failed`, BH)
      })) : AH.k.AX("showPetUi", BH) : AH.k.AX("refetchCode")
    }
  },
  9615: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      g: () => zH
    });
    var AH = LH(317);

    function rH(HH) {
      if (!HH.startsWith("{")) return HH;
      let BH;
      try {
        BH = JSON.parse(HH)
      } catch {
        return HH
      }
      return function(HH) {
        if (null === (0, AH.Pe)(HH)) return !1;
        const {
          params: BH
        } = HH;
        return void 0 === BH || "object" === typeof BH && null !== BH && Object.values(BH).every((HH => "string" === typeof HH))
      }(BH) ? BH : HH
    }
    var SH = LH(1123),
      hH = LH(1194);

    function tH(HH) {
      return (0, SH.u)(hH.g.get().getCurrentLanguageCode(), HH.translationKey, HH.params)
    }

    function zH(HH) {
      const BH = rH(HH);
      return "string" === typeof BH ? BH : tH(BH)
    }

    function CH(HH) {
      const BH = rH(HH);
      return "string" === typeof BH ? BH : tH({
        translationKey: "moderation:kicked",
        params: {
          reason: tH(BH)
        }
      })
    }
  },
  39928: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH
    });
    var AH = LH(1168),
      rH = LH(1306),
      SH = LH(15),
      hH = LH(1287),
      tH = LH(1297),
      zH = LH(1509),
      CH = LH(37345);

    function EH(HH) {
      let {
        KL: BH,
        cL: LH
      } = HH;
      const EH = null !== BH && void 0 !== BH ? BH : (0, tH.c)().gameNameWithVariation;
      (0, AH.J)(EH) && ((0, CH.j)(), (0, hH.ab)((() => {
        console.log("Received matchmaking order from game server to game", BH), (0, SH.l)("inGameReplay"), (0, zH.navigatePreserveSearch)((0, rH.b)(EH, null !== LH && void 0 !== LH ? LH : void 0))
      }), "video_start"))
    }
  },
  39921: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      f: () => zH,
      i: () => CH,
      m: () => XH
    });
    var AH = LH(1998),
      rH = LH(18),
      SH = LH(1352),
      hH = LH(1204);
    const tH = new Map;

    function zH(HH, BH) {
      rH.k.AX("newUiRequest", {
        id: HH,
        clientParameters: BH
      }, !0)
    }

    function CH(HH) {
      rH.k.AX("removeUiRequest", HH, !0);
      const BH = tH.get(HH);
      BH && (BH.tearDownNotification(), tH.delete(HH))
    }

    function EH() {
      rH.k.AX("clearUiRequests");
      for (const HH of tH.values()) HH.tearDownNotification();
      tH.clear()
    }

    function XH(HH, BH, LH, rH) {
      const zH = "string" === typeof BH ? {
          translationKey: BH
        } : BH,
        CH = SH.NotificationProvider.showPromptPopup({
          title: zH.translationKey,
          textOpts: {
            title: (0, hH.g)(zH.params, AH.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: LH,
          unlockPointerKey: "uiRequestPopup"
        });
      tH.set(HH, CH), CH.getResult().then((BH => {
        tH.delete(HH), "notificationTornDown" !== BH && rH(BH)
      }))
    }
  },
  40009: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => YH,
      g: () => GH
    });
    const AH = "ue:",
      rH = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      SH = "[A-Za-z0-9]{1,24}",
      hH = 15,
      tH = new RegExp(`^${SH}$`);
    new RegExp(`^${AH}(${[...rH,"other"].join("|")}):(?:n|k(${SH})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function zH(HH, BH, LH, SH, zH) {
      const CH = "string" === typeof HH && rH.includes(HH) ? HH : "other";
      let EH = "n";
      return "string" === typeof BH ? EH = tH.test(BH) ? `k${BH}` : "n" : "number" === typeof LH && Number.isInteger(LH) && LH >= 0 && LH <= hH && (EH = `b${LH}`), `${AH}${CH}:${EH}:${SH?1:0}${zH?1:0}`
    }
    var CH = LH(1696),
      EH = LH(1797);
    let XH = null;

    function GH(HH) {
      const BH = HH instanceof Element && HH !== document.body && HH !== document.documentElement && !(0, CH.q)(HH) && !HH.closest("#root");
      return {
        editable: (0, EH.e)(HH),
        outsideView: BH
      }
    }

    function YH(HH) {
      return XH ??= function(HH) {
        try {
          const {
            editable: BH,
            outsideView: LH
          } = GH(HH.target), AH = HH;
          return zH(HH.type, AH.code, AH.button, BH, LH)
        } catch {
          return zH(null, null, null, !1, !1)
        }
      }(HH), XH
    }
  },
  39919: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      constructor() {
        this.members = new Map
      }
      apply(HH) {
        const BH = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const AH of HH.RA) {
          let HH = this.members.get(AH.jA);
          if (HH || (HH = {
              name: null,
              settings: {}
            }, this.members.set(AH.jA, HH), BH.added.push(AH.jA)), null !== AH.nA && (HH.name = AH.nA), null !== AH.FA || AH.DA.length > 0) {
            const LH = null === AH.FA ? {} : JSON.parse(AH.FA);
            Object.assign(HH.settings, LH);
            for (const BH of AH.DA) delete HH.settings[BH], LH[BH] = void 0;
            BH.settingChanges.push({
              playerId: AH.jA,
              settings: LH
            })
          }
        }
        for (const AH of HH.wA) {
          const HH = this.members.get(AH);
          var LH;
          if (HH) this.members.delete(AH), BH.removed.push({
            playerId: AH,
            name: null !== (LH = HH.name) && void 0 !== LH ? LH : void 0
          })
        }
        return BH
      }
      has(HH) {
        return this.members.has(HH)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(HH) {
        var BH, LH;
        return null !== (BH = null === (LH = this.members.get(HH)) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : void 0
      }
      getSettings(HH) {
        var BH;
        return null === (BH = this.members.get(HH)) || void 0 === BH ? void 0 : BH.settings
      }
      getSetting(HH, BH) {
        var LH;
        return null === (LH = this.members.get(HH)) || void 0 === LH ? void 0 : LH.settings[BH]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39948: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      d: () => rH
    });
    const AH = ["description", "label"];

    function rH(HH) {
      const BH = HH.type;
      return {
        type: BH,
        params: HH[BH]
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);