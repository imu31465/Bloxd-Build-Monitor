export const id = 185;
export const ids = [185];
export const modules = {
  40670: (rr, Sr, Qr) => {
    function Zr(rr) {
      return !(!rr.lobbyLeaderboardInfo && !rr.lobbyManage)
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  },
  40646: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      f: () => jr
    });
    var Zr = Qr(34);
    let Wr = !1;

    function ar() {
      return Wr
    }

    function jr(rr) {
      Wr !== rr && (Wr = rr, Zr.i.Jp("replayViewer|videoExportChanged"))
    }
  },
  40587: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(34),
      Wr = Qr(2114);

    function ar(rr) {
      let {
        taskId: Sr,
        progress: Qr
      } = rr;
      const Zr = Wr.d.get("_tasks");
      null !== Zr && void 0 !== Zr && Zr[Sr] && Wr.d.apply({
        _tasks: {
          ...Zr,
          [Sr]: {
            ...Zr[Sr],
            progress: Qr
          }
        }
      })
    }
    Zr.i.subscribe("clientTaskProgress", (rr => {
      ar(rr)
    }))
  },
  40531: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => QQ,
      e: () => rQ,
      f: () => SQ
    });
    var Zr = Qr(2364),
      Wr = Qr(161),
      ar = Qr(208),
      jr = Qr(692),
      Ir = Qr(43),
      fr = Qr(2383),
      Er = Qr(2484),
      pr = Qr(2448),
      xr = Qr(1279);
    const mr = new WeakMap;
    class Nr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          upr: !0
        };
        this.callbacks = Sr, this.options = Qr, this.pZr = void 0, this.sessionId = void 0, this.bK = [], this.rxr = !1, this.vU = !1, this.Sxr = void 0, this.iK = 0, this.pjr = 0, this.Qxr = (rr, Sr) => {
          if (this.vU) return;
          const Qr = Number(rr);
          this.rxr ? this.Zxr(Qr, Sr) : this.bK.push({
            id: Qr,
            payload: Sr
          })
        }, this.dispose = () => {
          this.vU || (this.vU = !0, mr.delete(this), this.bK.length = 0, this.Sxr())
        }, this.pZr = rr, this.sessionId = rr.sessionId, mr.set(this, []), this.Sxr = this.Wxr()
      }
      axr(rr) {
        this.Sxr(), this.pZr = rr, this.sessionId = rr.sessionId, this.iK = 0, this.pjr = 0, this.Sxr = this.Wxr()
      }
      get lK() {
        return this.pjr
      }
      Wxr() {
        const rr = this.pZr.rK("*", this.Qxr);
        return this.options.upr && this.pZr.WK(this.dispose), rr
      }
      Zxr(rr, Sr) {
        try {
          (0, Er.Bc)(rr) && (Sr = (0, Er.d)(rr, pr.Dp.from(Sr)));
          const Qr = mr.get(this)[rr];
          if ("function" !== typeof Qr) {
            if (this.callbacks.jxr) return void this.callbacks.jxr(rr, Sr);
            throw new Error(`No onMessage handler registered for message id ${rr}`)
          }
          Qr(Sr)
        } catch (Qr) {
          this.callbacks.fxr(`Error in onMessage ${rr} with payload ${JSON.stringify(Sr)}`, Qr)
        } finally {
          this.iK++
        }
      }
      Exr() {
        for (const {
            id: rr,
            payload: Sr
          }
          of this.bK) {
          if (this.vU) break;
          this.Zxr(rr, Sr)
        }
        this.bK.length = 0
      }
      Dv() {
        return this.vU
      }
      pxr() {
        if (this.rxr || this.vU) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          rK: (rr, Sr) => {
            if (this.rxr || this.vU) throw new Error("Trying to call onMessage after registration finished");
            this.rK(rr, Sr)
          },
          finishRegistration: () => {
            if (this.vU) throw new Error("Cannot finish message registration after disposal");
            this.rxr = !0, this.Exr()
          }
        }
      }
      rK(rr, Sr) {
        var Qr, Zr;
        null === (Qr = (Zr = this.callbacks).xxr) || void 0 === Qr || Qr.call(Zr);
        const Wr = mr.get(this);
        for (; rr > Wr.length;) Wr[Wr.length] = null;
        Wr[rr] = Sr
      }
      send(rr, Sr) {
        this.mxr(), (0, xr.B)(Sr) ? this.pZr.Uy(rr, Sr) : this.pZr.send(rr, Sr)
      }
      mxr() {
        var rr, Sr;
        (this.pjr++, 5 === Ur++) && (null === (rr = (Sr = this.callbacks).xxr) || void 0 === rr || rr.call(Sr), Ur = 0)
      }
      hY() {
        this.dispose(), this.pZr.hY()
      }
      leave() {
        this.dispose(), this.pZr.leave()
      }
    }
    let Ur = 0;
    var tr = Qr(2385);
    class hr extends Nr {
      constructor(rr) {
        super(rr, {
          xxr: () => {
            (0, Ir.r)(!0) && (0, Zr.hK)()
          },
          fxr: (rr, Sr) => {
            var Qr;
            null === (Qr = (0, fr.e)()) || void 0 === Qr || Qr.Xt(rr, Sr)
          }
        }, {
          upr: !1
        }), (0, tr.e)(rr)
      }
      sK(rr, Sr) {
        return !!(0, tr.h)((0, tr.b)(), this.pZr, rr, Sr) && (this.mxr(), !0)
      }
      axr(rr) {
        this.Nxr(), super.axr(rr), (0, tr.e)(rr)
      }
      hY() {
        super.hY(), this.Nxr()
      }
      Nxr() {
        this.pZr.TY.Ix.oR = void 0
      }
    }
    var zr = Qr(34),
      Yr = Qr(2114),
      nr = Qr(1885),
      er = Qr(37992),
      Kr = Qr(40540),
      yr = Qr(39533),
      Br = Qr(39311),
      Tr = Qr(688),
      vr = Qr(39899);

    function Or(rr, Sr, Qr) {
      const Zr = function(rr) {
          const Sr = new Int32Array(rr.length * vr.g);
          return rr.forEach(((rr, Qr) => {
            const Zr = Qr * vr.g;
            if (4 === rr.length) {
              const [Qr, Wr, ar, jr] = rr;
              Sr.set([Qr, Wr, ar, Qr, Wr, ar, jr], Zr)
            } else {
              const [Qr, Wr, ar, jr, Ir, fr, Er] = rr;
              Sr.set([Qr, ar, Ir, Wr, jr, fr, Er], Zr)
            }
          })), Sr
        }(Qr),
        Wr = (Sr, Qr, Zr, Wr) => {
          rr.setBlockNoMulti(Sr, Qr, Zr, Wr, !0)
        };
      rr.client.gameRecorder.isCapturing() ? (0, vr.ob)(Zr, (0, vr.kb)(Zr), Wr) : rr.gm.qx.cL(Zr, {
        pw: Wr,
        isHookId: Sr => rr.blockChangeHasHooks(Sr),
        watched: () => function(rr, Sr, Qr) {
          const Zr = [],
            Wr = (rr, Sr, Qr) => {
              Zr.push(rr, Sr, Qr)
            },
            ar = new Set;
          for (let jr = 0; jr < Qr.length; jr += vr.g)
            for (let Sr = (0, Tr.U)(Qr[jr]); Sr <= (0, Tr.U)(Qr[jr + 3]); Sr++)
              for (let Zr = (0, Tr.U)(Qr[jr + 1]); Zr <= (0, Tr.U)(Qr[jr + 4]); Zr++)
                for (let Ir = (0, Tr.U)(Qr[jr + 2]); Ir <= (0, Tr.U)(Qr[jr + 5]); Ir++) {
                  const Qr = `${Sr}|${Zr}|${Ir}`;
                  ar.has(Qr) || (ar.add(Qr), rr.blockDataOwner.forEachDataCell(Sr, Zr, Ir, Wr))
                }
          return Sr.forEachCell(Wr), Int32Array.from(Zr)
        }(rr, Sr, Zr)
      }), rr.gm.NSr()
    }

    function Lr(rr) {
      rr.dQr = new Set, rr.SZr = new Set, rr.sQr = new Set, rr.ZZr = new Set, rr.uQr = [], rr.WZr = [], rr.GV = new Set, rr.uQ = [], rr.VV = []
    }
    class lr {
      constructor(rr) {
        this.gm = rr
      }
      register(rr) {
        const Sr = this.gm,
          Qr = (0, fr.c)();
        rr.rK(Er.bb, (rr => {
          Sr.qx.dQr.add(rr), Sr.qx.SZr.delete(rr)
        })), rr.rK(Er.gb, (rr => {
          Sr.qx.SZr.add(rr), Sr.qx.dQr.delete(rr)
        })), rr.rK(Er.oe, (rr => {
          Sr.qx.SZr.delete(rr), Sr.qx.dQr.delete(rr)
        })), rr.rK(Er.fb, (rr => {
          Sr.qx.sQr.add(rr), Sr.qx.ZZr.delete(rr)
        })), rr.rK(Er.ob, (rr => {
          Sr.qx.ZZr.add(rr), Sr.qx.sQr.delete(rr)
        })), rr.rK(Er.ve, (rr => {
          Sr.qx.ZZr.delete(rr), Sr.qx.sQr.delete(rr)
        })), rr.rK(Er.cb, (rr => {
          (0, xr.hb)(rr, Sr.qx.WZr), (0, xr.hb)(rr, Sr.qx.uQr), Sr.qx.uQr.push(rr)
        })), rr.rK(Er.kb, (rr => {
          (0, xr.hb)(rr, Sr.qx.uQr), (0, xr.hb)(rr, Sr.qx.WZr), Sr.qx.WZr.push(rr)
        })), rr.rK(Er.re, (rr => {
          (0, xr.hb)(rr, Sr.qx.uQr), (0, xr.hb)(rr, Sr.qx.WZr)
        })), rr.rK(Er.$f, (rr => {
          let {
            QW: Qr,
            ZW: Zr
          } = rr;
          Zr ? Sr.qx.GV.delete(Qr) : Sr.qx.GV.add(Qr)
        })), rr.rK(Er.Yf, (rr => {
          let {
            uQ: Zr,
            rZ: Wr
          } = rr;
          Qr.updateWalkThroughRect(Sr.fC, Zr, Wr)
        })), (0, Zr.onGameResetOnce)((() => {
          Lr(Sr.qx)
        })), rr.rK(Er.uc, (rr => {
          yr.c.applyServerUpdate(rr)
        })), rr.rK(Er.rb, (rr => {
          Qr.applyServerBlocks((() => {
            ! function(rr, Sr) {
              for (const {
                  zS: Qr,
                  YS: Zr
                }
                of Sr) {
                const Sr = Br.d[Zr];
                if (Sr) {
                  const {
                    compX: Zr,
                    compY: Wr,
                    compZ: ar,
                    mainMultiblock: jr
                  } = Sr;
                  rr.fR(Qr[0] - Zr, Qr[1] - Wr, Qr[2] - ar, jr)
                }
              }
              for (const {
                  zS: Qr,
                  YS: Zr,
                  nS: Wr
                }
                of Sr) rr.setBlockNoMulti(Qr[0], Qr[1], Qr[2], Zr, !0), rr.blockDataOwner.setBlockData(Qr[0], Qr[1], Qr[2], null === Wr ? void 0 : JSON.parse(Wr)), rr.blockAdded(Qr[0], Qr[1], Qr[2], Zr)
            }(Qr, rr)
          })), zr.i.Jp("changeBlockFail", rr), zr.i.Jp("blockChangeRefused"), Qr.client.triggerGameCallback("onChangeBlockFail", rr), zr.i.Jp("EditBoard", {
            pos: null
          }), zr.i.Jp("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        }));
        const Wr = rr => {
          Qr.applyServerBlocks((() => {
            Or(Qr, yr.c, rr)
          }))
        };
        rr.rK(Er.Vb, Wr), rr.rK(Er.lc, Wr), rr.rK(Er.Of, (rr => {
          let {
            Na: Sr,
            Ua: Zr
          } = rr;
          if (Qr.aJ(Sr[0], Sr[1], Sr[2])) {
            const rr = (0, fr.c)().VY(Sr[0], Sr[1], Sr[2]);
            (0, fr.c)().updateMailboxContents(Sr[0], Sr[1], Sr[2], rr, Zr)
          }
        })), rr.rK(Er.Qe, (rr => {
          let {
            pos: Sr,
            data: Zr
          } = rr;
          Qr.blockDataOwner.setBlockData(Sr[0], Sr[1], Sr[2], Zr), Qr.blockAdded(Sr[0], Sr[1], Sr[2], Qr.VY(Sr[0], Sr[1], Sr[2]))
        }))
      }
    }
    var Xr = Qr(38630),
      Pr = Qr(37866),
      Hr = Qr(39580),
      qr = Qr(39417),
      Rr = Qr(39604);
    class gr {
      constructor(rr, Sr) {
        this.gm = rr, this.setUpQueuedEntity = Sr
      }
      register(rr) {
        const Sr = this.gm,
          Qr = (0, fr.c)();
        rr.rK(Er._, (rr => {
          let {
            rr: Sr,
            Sr: Qr
          } = rr;
          this.setUpQueuedEntity(Sr), Sr = (0, Pr.e)(Sr), (0, fr.c)().client.gameRecorder.recordBulletShot(Sr, Qr), zr.i.Jp(`bulletShot|${Sr}`, {
            bulletDirections: Qr
          })
        })), rr.rK(Er.xc, (rr => {
          let {
            BW: Sr,
            TW: Qr
          } = rr;
          zr.i.Jp("damagedByOtherPlayer", {
            BW: Sr,
            direction: Qr
          }, !0)
        })), rr.rK(Er.Qd, (rr => {
          zr.i.Jp("playerKilled", rr, !0), (0, Pr.j)(rr.killerEId) && !(0, Pr.j)(rr.deadEId) && zr.i.Jp("sessionReplayPlayerKill", {
            killstreak: rr.killstreak
          }), (0, fr.c)().client.gameRecorder.recordPlayerKilled(rr.deadEId, rr.killerEId, rr.withItem, rr.killstreak)
        })), rr.rK(Er._b, (rr => {
          zr.i.Jp("customKillfeed", rr, !0), (0, fr.c)().client.gameRecorder.recordCustomKillfeed(rr.killer, rr.victim, rr.withItem)
        })), rr.rK(Er.Yd, (rr => {
          let {
            pZ: Qr,
            xZ: Zr
          } = rr;
          this.setUpQueuedEntity(Qr);
          const Wr = Sr.YB.XQr(Qr);
          null !== Wr && void 0 !== Wr && Wr.isGun() && Wr.reload(Date.now(), Zr)
        })), rr.rK(Er.Le, (rr => {
          let {
            GS: Qr,
            kS: Zr
          } = rr;
          const Wr = Zr ? (0, Rr.g)(Sr, Zr) : void 0;
          zr.i.Jp("sendHitmarker", {
            GS: Qr,
            screenPos: Wr
          }, !0)
        })), rr.rK(Er.cd, (rr => {
          let {
            HW: Zr,
            qW: Wr,
            gW: ar,
            MW: jr,
            GW: Ir,
            kW: fr,
            AW: Er
          } = rr;
          this.setUpQueuedEntity(Zr), Zr = (0, Pr.e)(Zr);
          const pr = Sr.YB.yQr(Zr);
          if (pr && (pr.lastHurtTime = performance.now()), (0, Hr.playRigHurt)(Sr, Zr, fr), zr.i.Jp("lifeformHurt", {
              eId: Zr,
              AW: Er
            }), Wr) {
            const rr = (0, Rr.g)(Sr, Wr.kS);
            zr.i.Jp("yourAttackHit", {
              GS: jr,
              screenPos: rr,
              hitSelf: Zr === Sr.fC
            })
          }
          Zr === Sr.fC && (Qr.shakePlayerCamera(Zr, Ir / 40, 200), zr.i.Jp("closeShopOnDamaged", null), zr.i.Jp("damagedByOtherPlayer", {
            BW: null,
            direction: fr,
            GW: Ir
          }, !0));
          const xr = Sr.YB.JY(Zr);
          if (xr && (ar || jr)) {
            const rr = [xr[0], xr[1] + 1, xr[2]];
            ar && (0, qr.i)(Sr, qr.x, rr, 15), jr && (0, qr.i)(Sr, qr.n, rr, 10)
          }
        })), rr.rK(Er._c, (rr => {
          let {
            dW: Qr,
            sW: Zr,
            uW: Wr
          } = rr;
          (0, Xr.b)(Sr).setHealthFrac((0, Pr.e)(Qr), Wr), zr.i.Jp("lifeformHealthChanged", {
            eId: (0, Pr.e)(Qr),
            sW: Zr,
            uW: Wr
          })
        })), rr.rK(Er.U, (rr => {
          let {
            xW: Qr,
            mW: Zr
          } = rr;
          (0, fr.c)().playerAttacked(Sr.fC, Qr, Zr)
        })), rr.rK(Er.zb, (() => {
          const rr = Sr.YB.XQr(Sr.fC);
          null !== rr && void 0 !== rr && rr.isChargeable() && rr.finishCharging(!1, Date.now())
        })), rr.rK(Er.gc, (rr => {
          let {
            ua: Sr,
            rj: Qr,
            Sj: Zr,
            Qj: Wr,
            Zj: ar,
            Wj: jr
          } = rr;
          Sr = (0, Pr.e)(Sr), (0, fr.c)().client.updateEffect(Sr, Qr, {
            displayName: Zr,
            icon: Wr,
            duration: ar,
            level: jr
          })
        })), rr.rK(Er.Zd, (rr => {
          let {
            ua: Sr,
            rj: Qr
          } = rr;
          Sr = (0, Pr.e)(Sr), (0, fr.c)().client.removeEffect(Sr, Qr)
        })), rr.rK(Er.Jf, (rr => {
          zr.i.Jp("ttbEffectMultiplier", rr)
        }))
      }
    }
    var Cr = Qr(40561),
      Mr = Qr(38625),
      Gr = Qr(2968),
      kr = Qr(39609),
      Ar = Qr(37843),
      Vr = Qr(37851),
      ir = Qr(38541),
      wr = Qr(38659),
      cr = Qr(39612),
      Fr = Qr(40563);
    class or {
      constructor(rr, Sr) {
        this.gm = rr, this.setUpQueuedEntity = Sr
      }
      register(rr) {
        const Sr = this.gm,
          Qr = (0, fr.c)();
        rr.rK(Er.nd, (rr => {
          let {
            eId: Qr,
            settings: Zr
          } = rr;
          (0, wr.d)(Qr);
          for (const Sr in Zr)(0, wr.c)(Qr, Sr, Zr[Sr]);
          if ("canSee" in Zr && Sr.YB.TSr(Qr, "hidingMeshManager")) {
            const rr = Sr.YB.getState(Qr, "hidingMeshManager");
            rr.canSee = (0, cr.d)("canSee", Zr.canSee), rr._forceUpdate = !0
          }
        })), rr.rK(Er.K, (rr => {
          let {
            hQ: Qr,
            zQ: Zr,
            animationScript: Wr,
            YQ: ar,
            nQ: jr,
            eQ: Ir,
            KQ: Er
          } = rr;
          Qr = (0, Pr.e)(Qr);
          const pr = null === Wr && null !== Ir ? (0, Cr.f)(Ir, Er) : Wr;
          (0, fr.c)().client.gameRecorder.recordAnimateEntity(Qr, Zr, pr, ar, jr), (0, Xr.b)(Sr).animations.animateEntity(Qr, Zr, Wr, ar, jr, Ir, Er), null !== Wr || Qr === Sr.fC && Zr === Mr.i.Emote && (0, fr.c)().client.cameraController.endTemporaryThirdPerson()
        })), rr.rK(Er.He, (rr => {
          (0, Fr.e)(rr)
        })), rr.rK(Er.Od, (rr => {
          for (const Sr of rr)(0, kr.A)(Sr);
          zr.i.Jp("playerCosmeticsUpdated", rr, !0)
        })), rr.rK(Er.R, (rr => {
          for (const Qr of rr)(0, ir.g)(Sr, Qr)
        })), rr.rK(Er.od, (rr => {
          (0, qr.j)(Sr, (0, xr.t)(rr))
        })), rr.rK(Er.qd, (rr => {
          Gr.f[rr.pW] ? (0, qr.j)(Sr, {
            ...Gr.f[rr.pW],
            pos1: rr.pos1,
            pos2: rr.pos2
          }) : console.error(`Unknown preset id: ${rr.pW}`)
        })), rr.rK(Er.Kd, (rr => {
          var Sr, Qr;
          let {
            SZ: Zr,
            QZ: Wr,
            ZZ: ar,
            WZ: jr
          } = rr, {
            jZ: Ir,
            IZ: Er
          } = null !== jr && void 0 !== jr ? jr : {};
          const {
            aZ: pr
          } = null !== jr && void 0 !== jr ? jr : {};
          Ir = null !== (Sr = Ir) && void 0 !== Sr ? Sr : void 0, Er = null !== (Qr = Er) && void 0 !== Qr ? Qr : void 0, "string" === typeof pr && this.setUpQueuedEntity(pr), (0, fr.c)().client.gameRecorder.recordPlaySound(Zr, Wr, ar, jr), Ar.b.play((0, Vr.c)(Zr), Wr, pr, Ir, Er).rate(ar)
        })), rr.rK(Er.Rf, (rr => {
          for (const Sr in rr) {
            const Zr = rr[Sr];
            for (const rr in Zr) Qr.client.meshCreator.handleParticleSystemUpdate(Sr, rr, Zr[rr])
          }
        }))
      }
    }
    var br = Qr(39286),
      Jr = Qr(39256);
    class Dr {
      constructor(rr) {
        this.gm = rr
      }
      register(rr) {
        const Sr = this.gm,
          Qr = (0, fr.c)();

        function Zr() {
          return Sr.YB.fQr(Sr.fC)
        }
        rr.rK(Er.Lc, (rr => {
          let {
            NW: Qr,
            UW: Zr,
            tW: Wr,
            hW: ar,
            zW: jr,
            YW: Ir,
            nW: fr,
            eW: Er,
            KW: pr
          } = rr;
          if (!Sr.YB.TSr(Qr, "itemState")) return void(0, br.l)(Sr, Qr, [jr, Ir, fr], Zr, {
            amount: Wr,
            attributes: JSON.parse(ar),
            eW: Er,
            size: pr
          });
          const xr = Sr.YB.getState(Qr, "itemState");
          xr.amount = Wr, xr.eW = Er, xr.creationTime = Date.now(), (0, Jr.setServerPosition)(Sr.YB.getState(Qr, "smoothToServerPos"), jr, Ir, fr)
        })), rr.rK(Er.qb, (rr => {
          (0, Xr.b)(Sr).setCantPickUp(rr, !0), Sr.YB.TSr(rr, "itemState") && (Sr.YB.getState(rr, "itemState").eW = !0)
        })), rr.rK(Er.me, (rr => {
          (0, Xr.b)(Sr).setCantPickUp(rr, !1), Sr.YB.TSr(rr, "itemState") && (Sr.YB.getState(rr, "itemState").eW = !1)
        })), rr.rK(Er.Fd, (rr => {
          let {
            pickUpItems: Sr,
            pickUpAckSeq: Qr
          } = rr;
          for (const {
              name: Wr,
              amount: ar,
              attributes: jr
            }
            of Sr) Zr().pickUpItem({
            name: Wr,
            amount: ar,
            typeObj: br.x[Wr],
            attributes: jr
          });
          (0, fr.c)().client.inventoryPrediction.serverChangeApplied(Qr)
        })), rr.rK(Er.ef, (rr => {
          let {
            index: Qr,
            name: Zr,
            amount: Wr,
            attributes: ar,
            setSlotAckSeq: jr
          } = rr;
          const Ir = Sr.YB.EQr(Sr.fC);
          (Qr < Ir.playerInventory.numSlots || Ir.pQ || Ir.inCreative) && Ir.setItemSlot(Qr, Zr, Wr, ar), (0, fr.c)().client.inventoryPrediction.serverChangeApplied(jr)
        })), rr.rK(Er.Jc, (rr => {
          (0, fr.c)().client.inventoryPrediction.acknowledge(rr)
        })), rr.rK(Er.G, (rr => {
          let {
            FS: Sr,
            oS: Qr,
            bS: Zr,
            DS: Wr
          } = rr;
          (0, fr.c)().client.itemDropPrediction.onActionItemDrops(Sr, Qr, Zr, Wr)
        })), rr.rK(Er.Rb, (rr => {
          Zr().clearInventory(), (0, fr.c)().client.inventoryPrediction.serverChangeApplied(rr)
        })), rr.rK(Er.hf, (rr => {
          zr.i.Jp("setSelectedInventorySlotI", rr, !0)
        })), rr.rK(Er.Ib, (rr => {
          let {
            VW: Qr,
            iW: Zr,
            wW: Wr,
            cW: ar,
            FW: jr,
            oW: Ir,
            bW: Er,
            JW: pr
          } = rr;
          const xr = Sr.YB.EQr(Sr.fC);
          if (Ir) {
            const {
              EQ: rr,
              tQ: Sr
            } = pr;
            return (0, fr.c)().client.inventoryPrediction.Prr(Sr, (() => {
              xr.chestRefreshed(Zr, Wr, ar, Er, rr)
            })) && zr.i.Jp("chestToggleFromServer", !1, !0), void zr.i.Jp("chestRefreshedFromServer")
          }(Qr || xr.pQ) && (Qr ? (xr.chestOpened(Zr, Wr, ar, jr, Er), null !== jr && (0, fr.c)().client.ironChestPasskeyCache.onChestOpened(ar, jr)) : xr.chestClosed(), zr.i.Jp("chestToggleFromServer", Qr, !0))
        })), rr.rK(Er.cc, (rr => {
          let {
            craftingRecipeItemName: Zr,
            recipesForItem: Wr
          } = rr;
          Zr ? Qr.craftingManager.editRecipesForPlayer(Sr.fC, Zr, Wr) : Qr.craftingManager.resetAllPlayerRecipes(Sr.fC), zr.i.Jp("craftingRecipesEdited", {
            itemName: Zr,
            recipesForItem: Wr
          })
        })), rr.rK(Er.ce, (rr => {
          let {
            jS: Sr,
            fS: Qr,
            pS: Wr
          } = rr;
          Zr().removeItemName(Sr, Qr), (0, fr.c)().client.inventoryPrediction.serverChangeApplied(Wr)
        })), rr.rK(Er._d, (rr => {
          let {
            aS: Zr
          } = rr;
          Qr.craftingManager.removeRecipes(Sr.fC, Zr), zr.i.Jp("craftingRecipesEdited", {
            itemName: Zr,
            recipesForItem: []
          })
        }))
      }
    }
    var dr = Qr(7424),
      sr = Qr(39120),
      ur = Qr(388),
      rS = Qr.n(ur),
      SS = Qr(5287),
      QS = Qr(39198),
      ZS = Qr(39747),
      WS = Qr(39113);
    class aS {
      constructor(rr, Sr) {
        this.gm = rr, this.setUpQueuedEntity = Sr
      }
      register(rr) {
        const Sr = this.gm,
          Qr = (0, fr.c)();
        rr.rK(Er.Cf, (rr => {
          let {
            WQ: Qr,
            aQ: Wr,
            jQ: ar,
            IQ: jr
          } = rr;
          const Ir = [Wr, ar, jr];
          Sr.YB.setPosition(Sr.fC, Ir), (0, Zr.sendColyMessage)(Er.kh, {
            wp: Qr,
            cp: SS.f
          }), zr.i.Jp("localPlayerTeleported", {
            pos: Ir,
            isCorrection: !1
          })
        })), rr.rK(Er.xd, (rr => {
          let {
            VS: Sr,
            iS: Qr,
            wS: Zr,
            cS: Wr
          } = rr;
          this.setUpQueuedEntity(Sr);
          const ar = [Qr, Zr, Wr];
          zr.i.Jp(`otherPlayerTeleported|${Sr}`, {
            pos: ar
          })
        })), rr.rK(Er.Td, (rr => {
          let {
            gr: Qr,
            Cr: Wr,
            Mr: ar,
            Gr: jr,
            kr: Ir,
            Ar: fr,
            Vr: pr,
            wr: xr,
            ir: mr,
            br: Nr
          } = rr;
          const Ur = [Wr, ar, jr];
          Sr.YB.setPosition(Sr.fC, Ur);
          const tr = Sr.YB.ASr(Sr.fC),
            hr = Sr.YB.cV(Sr.fC);
          rS().set(hr.YV, 0, 0, 0), rS().set(hr.KV, 0, 0, 0), rS().set(hr.Lh, Ir, fr, pr), hr.yV(), tr._flying = null !== Nr, Nr ? (tr.flyAccel.Jr = Nr.Jr, tr.flyAccel.Dr = Nr.Dr) : tr.flyAccel.reset(), xr && tr.movementType === dr.k.GLIDING && (tr.cr = xr.cr, rS().copy(tr.Fr, xr.Fr)), (0, Zr.sendColyMessage)(Er.kh, {
            wp: Qr,
            cp: SS.f
          }), zr.i.Jp("localPlayerTeleported", {
            pos: Ur,
            isCorrection: !0
          })
        })), rr.rK(Er.jf, (rr => {
          let {
            vehicleEId: Sr,
            overrides: Qr
          } = rr;
          (0, fr.c)().applyRiddenVehicleSettingOverrides(Sr, Qr)
        })), rr.rK(Er.Vf, (rr => {
          let {
            WW: Qr,
            aW: Zr,
            jW: Wr
          } = rr;
          const ar = Sr.YB.ASr(Sr.fC).physicsState.type === dr.n.SLEEPING && Qr === dr.n.DEFAULT;
          (0, fr.c)().updatePositionAndPhysics(Sr.fC, {
            type: Qr,
            tier: Zr
          }, !0, Wr), ar && (0, fr.c)().updateHeldVehicleStatus()
        })), rr.rK(Er.vb, (rr => {
          let {
            Ea: Qr,
            pa: Zr
          } = rr;
          Sr.YB.jQr(Sr.fC).setPose(Qr, Zr)
        })), rr.rK(Er.Te, (rr => {
          const {
            Qx: Qr,
            kQr: Zr
          } = (0, sr.e)([rr[0], rr[1], rr[2]]);
          WS.e.setLookDirection(Sr, Qr, Zr), (0, QS.v)(Qr, Zr);
          const Wr = Sr.YB.jQr(Sr.fC);
          Wr && (Wr.heading = Qr)
        })), rr.rK(Er.Xe, (rr => {
          Qr.client.cameraController.setCameraZoom(rr)
        })), rr.rK(Er.qf, (rr => {
          let {
            fZ: Zr,
            EZ: Wr
          } = rr;
          Qr.shakePlayerCamera(Sr.fC, Zr, Wr)
        })), rr.rK(Er.Qc, (rr => {
          Sr.YB.jQr(Sr.fC).jumpMultiplier.setMultiplierType("jumpEffectAmount", rr)
        })), (0, Zr.onGameResetOnce)((() => {
          Sr.YB.jQr(Sr.fC).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), rr.rK(Er.N, (rr => {
          Sr.YB.cV(Sr.fC).applyImpulse(rr)
        })), rr.rK(Er.mf, (rr => {
          const Qr = Sr.YB.cV(Sr.fC);
          rS().set(Qr.YV, 0, 0, 0), rS().set(Qr.KV, 0, 0, 0), rS().copy(Qr.Lh, rr), Qr.yV()
        })), (0, Zr.onGameResetOnce)((() => {
          (0, ZS.setFloatingYValue)(Sr.YB.getState(Sr.fC, "physics"), Sr.YB.gJ(Sr.fC), null)
        })), rr.rK(Er.hc, (rr => {
          let {
            Da: Qr,
            da: Zr,
            sa: Wr
          } = rr;
          const ar = (0, Pr.e)(Qr);
          if (ar === Sr.fC) {
            const rr = Sr.YB.gJ(Sr.fC).position;
            Wr ??= Math.floor(rr[1]) - 1, (0, ZS.setFloatingYValue)(Sr.YB.getState(Sr.fC, "physics"), Sr.YB.gJ(Sr.fC), Zr ? Wr : null)
          }(0, Xr.b)(Sr).setFloating(ar, Zr, Wr);
          const jr = Sr.YB.getState(ar, "floating");
          jr && (jr.isFloating = Zr, jr.sa = Zr ? Wr : null)
        }))
      }
    }

    function jS(rr, Sr, Qr, Zr, Wr) {
      let ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!rr.YB.IQr(rr.fC)) return console.log("Got resync inven but don't have inven component"), void Sr.acknowledge(Zr);
      ar && console.error("Had to sync inven"), Sr.Prr(Zr, Wr) && Qr.Jp("chestToggleFromServer", !1, !0), Qr.Jp("syncedInvenFromServer")
    }
    var IS = Qr(40574),
      fS = Qr(10047),
      ES = Qr(40583),
      pS = Qr(2117);
    var xS = Qr(5264);

    function mS(rr) {
      const Sr = rr.qx;
      let Qr = 0,
        Wr = -1,
        jr = -1 / 0,
        Ir = null,
        fr = !0;
      const pr = () => {
        if (++Qr % 10 !== 0) return;
        const pr = (0, Zr.getLastReceivedPacketId)();
        if (pr <= Wr) return;
        const [xr, mr, Nr] = rr.YB.JY(rr.fC), Ur = ! function(rr) {
          var Sr;
          let Qr = null === (Sr = rr.YB.iQr(rr.fC)) || void 0 === Sr ? void 0 : Sr.nU;
          if (void 0 === Qr) return !1;
          const Zr = new Set;
          for (; void 0 !== Qr && !Zr.has(Qr);) {
            var Wr;
            Zr.add(Qr);
            const Sr = rr.YB.getState(Qr, "smoothToServerPos"),
              ar = Array.isArray(Sr) ? null : null === Sr || void 0 === Sr ? void 0 : Sr.serverPosition;
            if (ar) {
              const Sr = rr.YB.JY(Qr);
              if (Math.abs(Sr[0] - ar[0]) > 10 || Math.abs(Sr[1] - ar[1]) > 10 || Math.abs(Sr[2] - ar[2]) > 10) return !0
            }
            Qr = null === (Wr = rr.YB.iQr(Qr)) || void 0 === Wr ? void 0 : Wr.nU
          }
          return !1
        }(rr) && function(rr, Sr, Qr, Zr) {
          const Wr = ar.i.hx;
          for (let ar = 0; ar < rr.length; ar++) {
            const jr = rr[ar];
            if (!(0, xS.g)(Sr, Qr, Zr, jr[0] * Wr, jr[1] * Wr, jr[2] * Wr)) return !1
          }
          return !0
        }(Sr.Ih.Zx, xr, mr, Nr), tr = null === Ir || Math.abs(xr - Ir[0]) > 8 || Math.abs(mr - Ir[1]) > 8 || Math.abs(Nr - Ir[2]) > 8, hr = !fr || tr || performance.now() - jr >= 1e4;
        fr = Ur, Ur && hr && (Wr = pr, jr = performance.now(), Ir = [xr, mr, Nr], (0, Zr.sendColyMessage)(Er.Pg, {
          lp: pr
        }))
      };
      return rr.on("lx", pr), () => {
        rr.off("lx", pr)
      }
    }
    var NS = Qr(40585),
      US = Qr(1644),
      tS = Qr(3868),
      hS = Qr(1965),
      zS = Qr(4010),
      YS = Qr(5594);
    class nS {
      constructor(rr, Sr, Qr) {
        this.gm = rr, this.gameNameWithVariation = Sr, this.connectionResume = Qr, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        YS.e.reset(), (0, IS.b)()
      }
      startChunkReports() {
        const rr = function(rr) {
            let Sr = null,
              Qr = -1 / 0,
              Wr = null;
            const ar = () => {
                Wr = null;
                const ar = Math.ceil(rr.Iq[0]),
                  jr = Math.ceil(rr.Iq[1]);
                Sr && Sr[0] === ar && Sr[1] === jr || (Sr = [ar, jr], Qr = performance.now(), (0, Zr.sendColyMessage)(Er.Og, {
                  dI: ar,
                  sI: jr
                }))
              },
              jr = () => {
                null === Wr && (Wr = setTimeout(ar, Math.max(0, Qr + 250 - performance.now())))
              };
            return ar(), rr.on("addRemoveDistanceChanged", jr), () => {
              rr.off("addRemoveDistanceChanged", jr), null !== Wr && (clearTimeout(Wr), Wr = null)
            }
          }(this.gm.qx),
          Sr = mS(this.gm);
        this.stopChunkReports = () => {
          rr(), Sr()
        }
      }
      restartChunkStreaming() {
        (0, QS.m)(this.gm, (0, fr.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - NS.e)), this.startChunkReports()
      }
      register(rr) {
        const Sr = this.gm,
          Qr = (0, fr.c)();
        rr.rK(Er.kd, (rr => {
          Yr.d.applyNewClientOptions(rr)
        })), rr.rK(Er.Id, (rr => {
          tS.e.onReceiveColyseusPing(rr)
        })), rr.rK(Er._e, (rr => {
          let {
            key: Sr,
            value: Qr
          } = rr;
          (0, nr.setCookie)(this.gameNameWithVariation, Sr, Qr)
        })), rr.rK(Er.df, (rr => {
          zr.i.Jp("setDiscordReportKey", rr)
        })), (0, Zr.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), rr.rK(Er.Cc, (Wr => {
          const {
            eS: ar,
            KS: jr
          } = Wr;
          if ((0, Zr.setAdjustment)(jr), this.connectionResume.onInitialInfo(Wr.yS, Wr.BS), Zr.offlineInputReplay.VK(Wr.vS), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", ar);
            try {
              null === Wr.OS && (0, fr.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), Lr(Sr.qx), Yr.d.apply({
                shopInfo: null,
                _shopVersion: pS.c
              });
              const Qr = Sr.YB.EQr(Sr.fC);
              Qr.pQ && (Qr.chestClosed(), zr.i.Jp("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), zr.i.Jp("initInfoReceived", rr)
            } finally {
              const rr = null === Wr.OS ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = rr, this.connectionResume.onResumeInitialInfo(Wr.OS, (() => {
                rr.endSeq = (0, fr.c)().client.inventoryPrediction.lastActionSeq
              })), null === rr && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", ar), zr.i.Jp("sessionReplayJoinTicket", Wr.HS), hS.c.markAdmitted(), (0, QS.p)(Sr), zr.i.Jp("loadingScreenState", "loadingPage:loadingWorld"), Sr.WC = ar, Sr.YB.TSr(Sr.fC, Sr.YB.names.entityName) && Sr.YB.bM(Sr.fC, Sr.YB.names.entityName), (0, fr.c)().setEntityName(Sr.WC, (0, fr.c)().getRawEntityName(Sr.fC)), Sr.xG[Sr.WC] = {}, Sr.YB.gM(Sr.fC, Sr.YB.names.entityName), zr.i.Jp("initInfoReceived", rr), this.startChunkReports(), Qr.client.onServerConnectionFinalised()
        })), rr.rK(Er.De, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const rr = this.replayResume;
            if (this.replayResume = null, !rr) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: Qr
            } = (0, fr.c)().client, {
              sync: Wr
            } = rr, ar = new Set(Zr.offlineInputReplay.takeDroppedActions());
            if (Wr) {
              var jr;
              const Zr = null !== (jr = rr.endSeq) && void 0 !== jr ? jr : Qr.lastActionSeq;
              Qr.forget((rr => rr > Wr.tQ && rr <= Zr || ar.has(rr))), jS(Sr, Qr, zr.i, Wr.tQ, Wr.load)
            } else Qr.dropPending(), Qr.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), rr.rK(Er.vf, (rr => {
          let {
            fQ: Qr,
            UQ: Zr,
            tQ: Wr
          } = rr;
          const {
            inventoryPrediction: ar
          } = (0, fr.c)().client, jr = () => {
            Sr.YB.EQr(Sr.fC).loadFromString(Qr)
          };
          this.replayResume && (this.replayResume.sync = {
            tQ: Wr,
            load: jr
          }), jS(Sr, ar, zr.i, Wr, jr, Zr)
        })), rr.rK(Er.Wd, (rr => {
          let {
            type: Sr,
            location1: Qr,
            location2: Zr,
            location3: Wr,
            score: ar
          } = rr;
          (0, zS.logProgressionEvent)({
            type: Sr,
            location1: Qr,
            location2: Zr,
            location3: Wr,
            score: ar
          })
        })), rr.rK(Er.Ae, (rr => {
          let {
            type: Sr,
            resourceType: Qr,
            amount: Zr,
            category: Wr,
            itemName: ar
          } = rr;
          (0, zS.logResourceEvent)({
            type: Sr,
            resourceType: Qr,
            amount: Zr,
            category: Wr,
            itemName: ar
          })
        })), rr.rK(Er.Yc, (rr => {
          let {
            leaveEventType: Sr,
            category: Qr,
            subCategory: Zr,
            value: Wr
          } = rr;
          (0, zS.updateLeaveValue)({
            leaveEventType: Sr,
            category: Qr,
            subCategory: Zr,
            value: Wr
          })
        })), rr.rK(Er.Zb, (rr => {
          let {
            cat1: Sr,
            cat2: Qr,
            cat3: Zr,
            value: Wr
          } = rr;
          (0, zS.logCustomAnalyticsEvent)({
            cat1: Sr,
            cat2: Qr,
            cat3: Zr,
            value: Wr
          })
        })), rr.rK(Er.Tc, (rr => {
          (0, fr.c)().client.leaveGameUnwanted({
            reason: (0, fS.d)(rr),
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, US.navigatePreserveSearch)("/")
        })), rr.rK(Er.Pe, (rr => {
          zr.i.Jp("serverUpdating", Date.now() + rr, !0)
        })), rr.rK(Er.jd, ES.b), rr.rK(Er.dd, (rr => {
          console.error(`[logErrorToConsole]: ${rr}`)
        }))
      }
    }
    var eS = Qr(40587),
      KS = Qr(40599),
      yS = Qr(1127),
      BS = Qr(40593),
      TS = Qr(3394),
      vS = Qr(4897);
    class OS {
      constructor(rr, Sr) {
        this.gm = rr, this.clientApi = Sr
      }
      register(rr) {
        const Sr = this.gm,
          Qr = (0, fr.c)();
        rr.rK(Er.Eb, (rr => {
          let {
            chatMsgId: Sr,
            worldCodeLineId: Qr,
            content: Zr,
            chatterEId: Wr,
            chatterObjectsToReplay: ar
          } = rr;
          zr.i.Jp("chat", {
            serverChatMsgId: Sr,
            worldCodeLineId: Qr,
            content: Zr,
            chatterEId: Wr,
            chatterObjectsToReplay: ar
          }, !0)
        })), rr.rK(Er.Db, (rr => {
          let {
            chatMsgId: Sr
          } = rr;
          zr.i.Jp("chatRemoved", Sr, !0)
        })), rr.rK(Er.Gf, (rr => {
          zr.i.Jp("TopRightHelper", rr, !0)
        })), rr.rK(Er.zf, (rr => {
          (0, eS.d)(rr)
        })), rr.rK(Er.Xc, (rr => {
          let {
            category: Sr,
            timeframe: Qr,
            data: Zr
          } = rr;
          zr.i.Jp("leaderboardResponse", {
            category: Sr,
            timeframe: Qr,
            data: Zr
          })
        })), rr.rK(Er.uf, (() => {
          zr.i.Jp("showShopTutorial", null, !0)
        })), rr.rK(Er.Vd, (rr => {
          zr.i.Jp("progressBarUpdate", rr, !0)
        })), rr.rK(Er.Gc, (rr => {
          zr.i.Jp("middleScreenBarInitiate", {
            duration: rr.ta,
            ha: rr.ha,
            horizBarRemOffset: rr.za
          }, !0)
        })), rr.rK(Er.ee, (() => {
          zr.i.Jp("middleScreenBarRemove", !0)
        })), rr.rK(Er.af, (rr => {
          let {
            id: Sr,
            position: Qr,
            style: Zr,
            uS: Wr,
            ZQ: ar
          } = rr;
          zr.i.Jp("setDirectionArrow", {
            id: Sr,
            position: Qr,
            style: Zr,
            text: (0, Er.y)(Wr),
            ZQ: ar
          }, !0)
        })), rr.rK(Er.Nb, (rr => {
          let {
            id: Sr
          } = rr;
          zr.i.Jp("clearDirectionArrow", {
            id: Sr
          }, !0)
        })), rr.rK(Er.Yb, (rr => {
          (0, vS.onCosmeticPackGranted)(rr)
        })), rr.rK(Er.td, (rr => {
          let {
            id: Sr,
            Ya: Qr
          } = rr;
          const {
            type: Wr,
            params: ar
          } = (0, KS.g)(Qr), jr = {
            ...ar
          };
          for (const Zr of KS.e) Zr in jr && jr[Zr] && (jr[Zr] = (0, Er.y)(jr[Zr]));
          YS.e.queueQTE(Sr, Wr, jr).getResult().then((rr => {
            "boolean" === typeof rr && (0, Zr.sendColyMessage)(Er.Mi, {
              qteId: Sr,
              qteResponse: rr
            })
          }))
        })), rr.rK(Er.he, (rr => {
          YS.e.cancelQTE(rr)
        })), (0, Zr.onGameResetOnce)((() => {
          YS.e.reset()
        })), rr.rK(Er.vd, (rr => {
          let {
            id: Sr,
            clientParameters: Qr
          } = rr;
          (0, IS.e)(Sr, Qr)
        })), rr.rK(Er.ie, (rr => {
          (0, IS.h)(rr)
        })), rr.rK(Er.Nf, (rr => {
          let {
            text: Sr,
            id: Qr,
            destructive: Wr
          } = rr;
          (0, IS.j)(Qr, Sr, Wr, (rr => {
            (0, Zr.sendColyMessage)(Er.ak, {
              zj: Qr,
              Yj: rr,
              nj: 5
            })
          }))
        })), rr.rK(Er.Bd, (rr => {
          let {
            info: Sr
          } = rr;
          zr.i.Jp("overShopInfo", Sr, !0)
        })), rr.rK(Er.oc, (rr => {
          let {
            CS: Qr,
            MS: Zr
          } = rr;
          this.clientApi.openShop(Sr.fC, Qr, Zr)
        })), rr.rK(Er.mc, (rr => {
          let {
            oa: Sr,
            ba: Qr,
            Ja: Zr
          } = rr;
          zr.i.Jp("flyingMiddleMessage", {
            content: (0, Er.y)(Sr),
            ba: Qr,
            Ja: Zr
          }, !0)
        })), rr.rK(Er.dg, (rr => {
          const Sr = rr === yS.e ? null : {
            message: `Currently loaded as variation: ${rr}`,
            type: "Warning"
          };
          zr.i.Jp("showPermanentBottomMessage", Sr, !0)
        })), rr.rK(Er.sc, (rr => {
          let {
            messageType: Sr,
            data: Zr
          } = rr;
          (0, BS.e)(Sr) ? (0, BS.b)(Sr, Zr) : ("freeCamPerms" === Sr && Qr.client.freeCameraController.setPerms(Zr.key, Zr.value), Qr.client.triggerGameCallback("onReceivedMessageFromServer", Sr, Zr))
        })), rr.rK(Er.Tb, TS.l)
      }
    }
    class LS {
      constructor(rr, Sr, Qr, Zr) {
        this.gameNameWithVariation = rr, this.gm = Qr, this.connectionResume = Zr, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new Kr.b(Sr, this.gm)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Zr.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      axr(rr) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Kr.b(rr, this.gm), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(rr, Sr) {
        const Qr = this.gm,
          Zr = rr => {
            this.stateReplicationHandler.setUpIfQueued(rr)
          };
        new nS(Qr, this.gameNameWithVariation, this.connectionResume).register(rr), new lr(Qr).register(rr), new Dr(Qr).register(rr), new gr(Qr, Zr).register(rr), new or(Qr, Zr).register(rr), new OS(Qr, Sr).register(rr), new aS(Qr, Zr).register(rr)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var lS = Qr(40605),
      XS = Qr(40608),
      PS = Qr(727),
      HS = Qr(1912);
    class qS {
      constructor(rr, Sr, Qr, Zr) {
        this.msgHandler = Qr, this.listener = Zr, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new lS.c({
          reconnect: rr,
          isLive: () => Zr.isLive(),
          onReconnected: rr => {
            this.resumeOnRoom(rr)
          },
          onGaveUp: (rr, Sr) => {
            Zr.onGaveUp(rr, Sr)
          },
          freeze: Sr,
          releaseSeat: Sr => {
            rr(Sr).then((rr => {
              rr.leave(!0)
            }), (rr => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", rr)
            }))
          }
        })
      }
      onInitialInfo(rr, Sr) {
        this.session.onInitialInfo(rr, Sr)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(rr, Sr) {
        if (this.session.onResuming(), null === rr) {
          try {
            (0, fr.c)().client.itemDropPrediction.reset()
          } catch (Qr) {
            console.error("Error dropping the item drop predictions on resuming", Qr)
          }
          return Zr.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, fr.c)().client.itemDropPrediction.onResumeReplayOffered(), Zr.offlineInputReplay.replayFrom(rr.lS, Sr)
      }
      onResumed(rr) {
        this.setSuspended(!1), (0, Zr.resendBeacons)();
        try {
          rr()
        } catch (Sr) {
          console.error("Error completing the resume", Sr)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(rr) {
        const Sr = (0, PS.onVisitSessionGameServerConnected)((() => rr.connection.isOpen));
        rr.WK(Sr);
        const Qr = new XS.e((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(rr, "silent"), rr.leave(!1))
        }));
        rr.onStateChange((() => {
          Qr.heard()
        }));
        const Zr = Sr => {
          Sr.persisted || rr.leave(!0)
        };
        window.addEventListener("pagehide", Zr), rr.WK(((Sr, Qr) => {
          if (rr === this.attachedRoom && this.listener.isLive()) return (0, ar.k)(Sr) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Sr}, reconnecting`), this.listener.onDropped(Sr, Qr), void this.onConnectionDropped(rr, String(Sr))) : void this.listener.onRoomLeft(Sr, Qr)
        })), this.attachedRoom = rr, this.detachRoomListeners = () => {
          Sr(), Qr.dispose(), window.removeEventListener("pagehide", Zr)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(rr) {
        rr !== this.suspended && (this.suspended = rr, (0, Zr.setConnectionSuspended)(rr), (0, fr.c)().client.itemDropPrediction.setSuspended(rr))
      }
      detachRoom() {
        var rr;
        null === (rr = this.detachRoomListeners) || void 0 === rr || rr.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(rr, Sr) {
        (0, HS.reportClientError)("disconnect", "Left room", Sr), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Zr.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(rr.reconnectionToken)
      }
      resumeOnRoom(rr) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), rr.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, Fr.n)(), Zr.offlineInputReplay.onConnectionReplaced(), this.msgHandler.axr(rr), this.listener.onReconnected(rr), this.attachRoom(rr)
      }
    }
    var RS = Qr(2466),
      gS = Qr(2472),
      CS = Qr(1422),
      MS = Qr(1364),
      GS = Qr(5479),
      kS = Qr(4354),
      AS = Qr(1371),
      VS = Qr(39225),
      iS = Qr(40617),
      wS = Qr(10062),
      cS = Qr(40625),
      FS = Qr(1267),
      oS = Qr(38018),
      bS = Qr(40627),
      JS = Qr(1849),
      DS = Qr(3873),
      dS = Qr(1629);

    function sS(rr) {
      var Sr, Qr;
      if ("object" !== typeof rr || null === rr) return {
        errType: typeof rr
      };
      const Zr = rr;
      return {
        errType: null !== (Sr = null === (Qr = rr.constructor) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : "",
        errName: "string" === typeof Zr.name ? Zr.name : "",
        eventType: "string" === typeof Zr.type ? Zr.type : "",
        errStack: "string" === typeof Zr.stack ? Zr.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function uS(rr) {
      if ("undefined" !== typeof ProgressEvent && rr instanceof ProgressEvent) return !0;
      if (!(rr instanceof Error)) return !1;
      const Sr = rr.code;
      return "ServerError" === rr.name && void 0 === Sr || "AbortError" === rr.name || "seat reservation expired." === rr.message || "early_leave" === rr.message
    }(0, tr.i)((rr => {
      (0, HS.reportClientError)("wasm_net", rr)
    }));
    let rQ = !0;

    function SQ() {
      rQ = !1
    }
    class QQ {
      constructor(rr) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.gm = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = rr.gameNameWithVariation, this.lobbyName = rr.lobbyName, this.colyClient = rr.colyClient, this.userContext = rr.userContext
      }
      async connectToServer(rr, Sr, Qr) {
        Yr.d.reset(), rr.xG = {
          [rr.fC]: {}
        }, rr.WC = void 0, (0, Fr.n)(), (0, fr.c)().removeAllEntityNames(), (0, fr.c)().setEntityName(rr.fC, this.userContext.getPlayerName()), (0, CS.m)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, JS.d)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const jr = performance.now();
        Qr.aborted || (0, MS.D)("wasm_core_ready", jr);
        const Ir = (0, cS.h)(this.userContext, (() => {
          const {
            roomName: Zr,
            joinOptions: Wr
          } = (0, er.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, Sr, (rr => kS.d.isUsingCustomGameTexturePack(rr)));
          return Wr.joinAdHold = this.joinAdHold, Wr.renderBackend = (0, DS.b)(rr.Ox), (0, iS.d)((() => this.colyClient.joinOrCreateUntil(Qr, Zr, Wr)), Qr)
        }));
        return zr.i.Jp("loadingScreenState", "loadingPage:joiningLobby"), await Ir.then((Sr => {
          if (this.joinedAt = performance.now(), (0, MS.D)("wasm_joined", this.joinedAt), this.gm = rr, this.joinAdHold) {
            const rr = (0, JS.n)((() => {
              Sr.send(Wr.f), (0, MS.w)(), hS.c.markJoinAdEnded()
            }));
            Sr.WK(rr), (0, Zr.onGameResetOnce)(rr)
          }
          const Qr = new hr(Sr);
          this.connectionResume = new qS((rr => this.colyClient.reconnect(rr)), (Sr => {
            rr.Qq(Sr)
          }), Qr, {
            isLive: () => (0, fr.c)().client.getMsgHandler() === Qr,
            onDropped: (rr, Sr) => {
              (0, gS.e)(rr) || this.logUnrecognisedConnectionLoss(rr, void 0, {
                site: "drop",
                closeReason: null !== Sr && void 0 !== Sr ? Sr : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (rr, Sr) => {
              this.onRoomLeft(rr, Sr)
            },
            onReconnected: rr => {
              this.incomingMsgInitialisor.axr(rr), this.checkSendPath = (0, VS.f)(Qr, rr, tr.k)
            },
            onGaveUp: (rr, Sr) => {
              this.onResumeGaveUp(rr, Sr)
            }
          }), this.connectionResume.attachRoom(Sr), (0, Zr.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const ar = Qr.send,
            jr = Qr.rK,
            Ir = Qr.pZr.send,
            Er = Qr.pZr.rK,
            pr = Qr.Zxr;
          this.checkSendPath = (0, VS.f)(Qr, Sr, tr.k);
          const xr = setInterval((() => {
            ar === Qr.send && jr === Qr.rK && Ir === Qr.pZr.send && Er === Qr.pZr.rK && pr === Qr.Zxr || SQ(), this.checkSendPath()
          }), 1e4);
          return (0, Zr.onGameResetOnce)((() => {
            clearInterval(xr)
          })), {
            success: !0,
            successDetails: Qr
          }
        })).catch((Sr => {
          if (Qr.aborted && Sr === (0, FS.f)(Qr)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (Sr instanceof oS.c) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: Sr.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, bS.b)(Sr, Sr.leg)
            }
          };
          rr.Xt(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Sr.code}\n`, Sr);
          const Zr = Sr.code;
          return Zr === ar.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: ar.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Zr, Sr.message, {
                site: "join",
                sinceJoinStart: (0, gS.b)(performance.now() - jr),
                ...sS(Sr)
              }, uS(Sr)),
              rematch: (0, iS.b)(Sr),
              gameRefused: (0, wS.c)(Sr),
              joinFailure: (0, bS.b)(Sr, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(rr, Sr, Qr) {
        zr.i.Jp("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new LS(this.gameNameWithVariation, Sr.pZr, rr, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Wr = Sr.pxr();
        this.incomingMsgInitialisor.setupOnMessageListeners(Wr, Qr), (0, Zr.onConnectionToServerReady)(Wr, Sr), this.joinAdHold && hS.c.markAdmissionAwaited(), Wr.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(rr, Sr) {
        (0, AS.Pt)(new Error("Reconnect failed"), {
          ...(0, RS.q)(Sr),
          game: this.gameNameWithVariation
        }), (0, HS.reportClientError)("disconnect", "Reconnect failed", Sr.reason), (0, fr.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !rr,
          canPlayAgain: rr,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, US.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, gS.b)(performance.now() - this.joinedAt)
      }
      onRoomLeft(rr, Sr) {
        var Qr;
        if (rr === ar.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${rr}`), rr === ar.e.serverUpdating.code) return (0, HS.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, fr.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.gm.Xt(`Kicked from server with code ${rr}`, new Error);
        const Zr = Object.keys(ar.e).find((Sr => ar.e[Sr].code === rr));
        (0, HS.reportClientError)("disconnect", "Left room", null !== Zr && void 0 !== Zr ? Zr : String(rr)), dS.c.leftGame(this.gameNameWithVariation, rr);
        const Wr = this.onConnectionToServerLost(rr, void 0, {
          site: "leave",
          closeReason: null !== Sr && void 0 !== Sr ? Sr : "",
          sinceJoined: this.sinceJoined()
        });
        (0, fr.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Wr.reason}`,
          canReconnect: Wr.canReconnect,
          requiresRefresh: Wr.requiresRefresh,
          automaticallyReconnect: null !== (Qr = Wr.automaticallyReconnect) && void 0 !== Qr && Qr
        }), (0, US.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, GS.G)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, US.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(rr, Sr, Qr) {
        var Zr;
        let Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Zr = Sr) && void 0 !== Zr && Zr.endsWith(ar.l) && (this.userContext.invalidateTrafficCode(), Sr = Sr.replace(ar.l, "")), rr === ar.e.outdatedVersion.code) return console.error("Outdated client with version ", jr.e, ", refreshing page"), (0, nr.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (rr === ar.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, nr.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const jr in ar.e) {
          const {
            code: Qr,
            text: Zr,
            canReconnect: Wr
          } = ar.e[jr];
          if (Qr === rr) {
            console.log("matched known error", rr, "leaving game");
            return {
              reason: "" !== Zr ? Zr : Sr || `Code: ${rr}`,
              requiresRefresh: !1,
              canReconnect: Wr,
              automaticallyReconnect: Qr === ar.e.customGameUpdated.code || Qr === ar.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, gS.c)(rr) || Wr ? console.warn("Connection lost", rr, Sr) : this.logUnrecognisedConnectionLoss(rr, Sr, Qr), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${rr}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Wr ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(rr, Sr, Qr) {
        (0, AS.Pt)(new Error("Unrecognised connection loss"), {
          code: String(rr),
          cause: null !== Sr && void 0 !== Sr ? Sr : "",
          ...Qr,
          game: this.gameNameWithVariation,
          ...(0, gS.f)()
        })
      }
    }
  },
  40540: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => oQ,
      e: () => uQ
    });
    var Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, Rr, gr, Cr, Mr, Gr, kr, Ar, Vr, ir, wr, cr, Fr, or, br, Jr, Dr, dr, sr, ur, rS, SS, QS, ZS, WS, aS, jS, IS, fS, ES, pS, xS, mS, NS, US, tS, hS, zS, YS, nS, eS, KS, yS, BS, TS, vS, OS, LS, lS, XS, PS, HS, qS, RS, gS, CS, MS, GS, kS, AS, VS, iS, wS, cS, FS, oS, bS, JS, DS, dS, sS = Qr(34),
      uS = Qr(38630),
      rQ = Qr(40552),
      SQ = Qr(40556),
      QQ = Qr(10287),
      ZQ = Qr(683),
      WQ = Qr(679),
      aQ = Qr(37924);
    let jQ = (Zr = (0, QQ.type)("number"), Wr = (0, QQ.type)("number"), ar = (0, QQ.type)("number"), jr = (0, QQ.type)("number"), Ir = (0, QQ.type)("number"), fr = (0, QQ.type)("number"), Er = (0, QQ.type)("string"), pr = class extends QQ.Schema {
        constructor() {
          super(...arguments), (0, rQ.c)(this, "id", xr, this), (0, rQ.c)(this, "amount", mr, this), (0, rQ.c)(this, "x", Nr, this), (0, rQ.c)(this, "y", Ur, this), (0, rQ.c)(this, "z", tr, this), (0, rQ.c)(this, "size", hr, this), (0, rQ.c)(this, "attributes", zr, this)
        }
      }, xr = (0, SQ.c)(pr.prototype, "id", [Zr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mr = (0, SQ.c)(pr.prototype, "amount", [Wr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Nr = (0, SQ.c)(pr.prototype, "x", [ar], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ur = (0, SQ.c)(pr.prototype, "y", [jr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tr = (0, SQ.c)(pr.prototype, "z", [Ir], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hr = (0, SQ.c)(pr.prototype, "size", [fr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), zr = (0, SQ.c)(pr.prototype, "attributes", [Er], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), pr),
      IQ = (Yr = (0, QQ.type)("string"), nr = (0, QQ.type)("string"), er = class extends QQ.Schema {
        constructor() {
          super(...arguments), (0, rQ.c)(this, "itemName", Kr, this), (0, rQ.c)(this, "enchantmentTier", yr, this)
        }
      }, Kr = (0, SQ.c)(er.prototype, "itemName", [Yr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), yr = (0, SQ.c)(er.prototype, "enchantmentTier", [nr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), er),
      fQ = (Br = (0, QQ.type)("string"), Tr = (0, QQ.type)("string"), vr = (0, QQ.type)("number"), Or = (0, QQ.type)("number"), Lr = (0, QQ.type)("number"), lr = (0, QQ.type)("float32"), Xr = (0, QQ.type)("float32"), Pr = (0, QQ.type)("float32"), Hr = (0, QQ.type)("string"), qr = (0, QQ.type)(["number"]), Rr = (0, QQ.type)("boolean"), gr = class extends QQ.Schema {
        constructor() {
          super(...arguments), (0, rQ.c)(this, "type", Cr, this), (0, rQ.c)(this, "name", Mr, this), (0, rQ.c)(this, "x", Gr, this), (0, rQ.c)(this, "y", kr, this), (0, rQ.c)(this, "z", Ar, this), (0, rQ.c)(this, "xRotation", Vr, this), (0, rQ.c)(this, "yRotation", ir, this), (0, rQ.c)(this, "zRotation", wr, this), (0, rQ.c)(this, "followingEId", cr, this), (0, rQ.c)(this, "followingOffset", Fr, this), (0, rQ.c)(this, "shouldMatchFollowingEntityRotation", or, this)
        }
      }, Cr = (0, SQ.c)(gr.prototype, "type", [Br], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Mr = (0, SQ.c)(gr.prototype, "name", [Tr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Gr = (0, SQ.c)(gr.prototype, "x", [vr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kr = (0, SQ.c)(gr.prototype, "y", [Or], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ar = (0, SQ.c)(gr.prototype, "z", [Lr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Vr = (0, SQ.c)(gr.prototype, "xRotation", [lr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ir = (0, SQ.c)(gr.prototype, "yRotation", [Xr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wr = (0, SQ.c)(gr.prototype, "zRotation", [Pr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cr = (0, SQ.c)(gr.prototype, "followingEId", [Hr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Fr = (0, SQ.c)(gr.prototype, "followingOffset", [qr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new QQ.ArraySchema(0, 0, 0)
        }
      }), or = (0, SQ.c)(gr.prototype, "shouldMatchFollowingEntityRotation", [Rr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), gr),
      EQ = (br = (0, QQ.type)("float32"), Jr = (0, QQ.type)("float32"), Dr = (0, QQ.type)("boolean"), dr = (0, QQ.type)("boolean"), sr = (0, QQ.type)("float32"), ur = (0, QQ.type)("boolean"), rS = (0, QQ.type)("string"), SS = (0, QQ.type)("string"), QS = (0, QQ.type)("string"), ZS = (0, QQ.type)("string"), WS = (0, QQ.type)(["number"]), aS = (0, QQ.type)("number"), jS = (0, QQ.type)({
        map: IQ
      }), IS = class extends fQ {
        constructor() {
          super(...arguments), (0, rQ.c)(this, "scale", fS, this), (0, rQ.c)(this, "speed", ES, this), (0, rQ.c)(this, "jumping", pS, this), (0, rQ.c)(this, "crouching", xS, this), (0, rQ.c)(this, "cameraPitch", mS, this), (0, rQ.c)(this, "armSwinging", NS, this), (0, rQ.c)(this, "heldItemName", US, this), (0, rQ.c)(this, "heldItemEnchantmentTier", tS, this), (0, rQ.c)(this, "pose", hS, this), (0, rQ.c)(this, "ridingVehicleEId", zS, this), (0, rQ.c)(this, "meshOffset", YS, this), (0, rQ.c)(this, "baseRenderHeading", nS, this), (0, rQ.c)(this, "armour", eS, this)
        }
      }, fS = (0, SQ.c)(IS.prototype, "scale", [br], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), ES = (0, SQ.c)(IS.prototype, "speed", [Jr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pS = (0, SQ.c)(IS.prototype, "jumping", [Dr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), xS = (0, SQ.c)(IS.prototype, "crouching", [dr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), mS = (0, SQ.c)(IS.prototype, "cameraPitch", [sr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), NS = (0, SQ.c)(IS.prototype, "armSwinging", [ur], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), US = (0, SQ.c)(IS.prototype, "heldItemName", [rS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), tS = (0, SQ.c)(IS.prototype, "heldItemEnchantmentTier", [SS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), hS = (0, SQ.c)(IS.prototype, "pose", [QS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), zS = (0, SQ.c)(IS.prototype, "ridingVehicleEId", [ZS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), YS = (0, SQ.c)(IS.prototype, "meshOffset", [WS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new QQ.ArraySchema(0, 0, 0)
        }
      }), nS = (0, SQ.c)(IS.prototype, "baseRenderHeading", [aS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eS = (0, SQ.c)(IS.prototype, "armour", [jS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new QQ.MapSchema
        }
      }), IS),
      pQ = (KS = (0, QQ.type)("string"), yS = (0, QQ.type)("string"), BS = (0, QQ.type)("string"), TS = (0, QQ.type)("uint8"), vS = class extends EQ {
        constructor() {
          super(...arguments), (0, rQ.c)(this, "variation", OS, this), (0, rQ.c)(this, "ownerDbId", LS, this), (0, rQ.c)(this, "metaInfo", lS, this), (0, rQ.c)(this, "aiState", XS, this)
        }
      }, OS = (0, SQ.c)(vS.prototype, "variation", [KS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), LS = (0, SQ.c)(vS.prototype, "ownerDbId", [yS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), lS = (0, SQ.c)(vS.prototype, "metaInfo", [BS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), XS = (0, SQ.c)(vS.prototype, "aiState", [TS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vS);
    PS = (0, QQ.type)("string"), HS = (0, QQ.type)("string"), qS = (0, QQ.type)("string"), RS = (0, QQ.type)("string"), gS = class extends fQ {
      constructor() {
        super(...arguments), (0, rQ.c)(this, "meshKind", CS, this), (0, rQ.c)(this, "meshOpts", MS, this), (0, rQ.c)(this, "pose", GS, this), (0, rQ.c)(this, "leaderboardTop", kS, this)
      }
    }, CS = (0, SQ.c)(gS.prototype, "meshKind", [PS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), MS = (0, SQ.c)(gS.prototype, "meshOpts", [HS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), GS = (0, SQ.c)(gS.prototype, "pose", [qS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), kS = (0, SQ.c)(gS.prototype, "leaderboardTop", [RS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function xQ(rr) {
      return Object.keys(QQ.Metadata.getFields(rr))
    }
    const mQ = xQ(pQ);
    for (const rZ of ZQ.p)
      if (!mQ.includes(rZ)) throw new Error(`Mob Schema is missing a networked property: "${rZ}"`);
    const NQ = xQ((AS = (0, QQ.type)("string"), VS = (0, QQ.type)("float32"), iS = (0, QQ.type)("float32"), wS = (0, QQ.type)("float32"), cS = (0, QQ.type)("float32"), FS = class extends fQ {
      constructor() {
        super(...arguments), (0, rQ.c)(this, "soundName", oS, this), (0, rQ.c)(this, "volume", bS, this), (0, rQ.c)(this, "refDistance", JS, this), (0, rQ.c)(this, "maxHearDist", DS, this), (0, rQ.c)(this, "rate", dS, this)
      }
    }, oS = (0, SQ.c)(FS.prototype, "soundName", [AS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), bS = (0, SQ.c)(FS.prototype, "volume", [VS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), JS = (0, SQ.c)(FS.prototype, "refDistance", [iS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return aQ.h
      }
    }), DS = (0, SQ.c)(FS.prototype, "maxHearDist", [wS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return aQ.d
      }
    }), dS = (0, SQ.c)(FS.prototype, "rate", [cS], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), FS));
    for (const rZ of WQ.l)
      if (!NQ.includes(rZ)) throw new Error(`AudioEntity Schema is missing a replicated property: "${rZ}"`);
    var UQ = Qr(39934),
      tQ = Qr(1287),
      hQ = Qr(688),
      zQ = Qr(39711),
      YQ = Qr(2984),
      nQ = Qr(379),
      eQ = Qr(38679),
      KQ = Qr(39609),
      yQ = Qr(3139),
      BQ = Qr(38659),
      TQ = Qr(39961),
      vQ = Qr(39104),
      OQ = Qr(388),
      LQ = Qr.n(OQ),
      lQ = Qr(39439),
      XQ = Qr(38548),
      PQ = Qr(39588),
      HQ = Qr(39618);
    class qQ {
      constructor(rr, Sr) {
        this.bloxd = rr, this.eId = Sr, this.gm = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.vU = !1, this.gm = rr.gm
      }
      initClient(rr) {
        var Sr, Qr, Zr;
        this.colyseusEntity = rr, this.meshKind = rr.meshKind, this.meshOpts = rr.meshOpts, this.leaderboardTop = rr.leaderboardTop, this.gm.YB.add([rr.x, rr.y, rr.z], 1, 1, null, null, !1, !1, this.eId), this.gm.YB.gM(this.eId, "smoothToServerPos");
        const Wr = "Person" === this.meshKind;
        this.gm.YB.gM(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Wr ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Wr ? [{
            nodeName: "HeadMesh",
            softTolerance: TQ.m,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = sS.i.subscribe(`otherEntitySettings|${this.eId}|canSee`, (rr => {
          this.updateHidingMeshMgr()
        }));
        const ar = () => {
          const rr = this.gm.YB.rQr(this.eId);
          if (!rr) return;
          const Sr = (0, vQ.l)(this.eId);
          if ("number" === typeof rr.JC) {
            var Qr, Zr, Wr, ar;
            const jr = null === (Qr = (0, yQ.k)("head", null === (Wr = this.getSpec()) || void 0 === Wr || null === (ar = Wr.opts.textures) || void 0 === ar ? void 0 : ar.head)) || void 0 === Qr || null === (Zr = Qr.personModel) || void 0 === Zr ? void 0 : Zr.fullBody;
            return this.gm.Ox.bC.setPickable(rr.JC, Sr && !jr), void(0, XQ.updatePersonAttachmentPickability)(this.gm, this.eId, Sr)
          }
          const jr = rr.mesh;
          if (jr)
            for (const Ir of [jr, ...jr.getChildMeshes(!1)]) "ut" in Ir && !Ir.name.startsWith("Cape|") && (Ir.ut = Sr)
        };
        this.canAttackSub = sS.i.subscribe(`otherEntitySettings|${this.eId}|canAttack`, ar), this.interactableSub = sS.i.subscribe(`otherEntitySettings|${this.eId}|interactable`, ar), this.overlayColourSub = sS.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (rr => {
          this.updateOverlayColour(rr)
        })), this.opacitySub = sS.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (rr => {
          this.updateOpacity(rr)
        })), this.zIndexSub = sS.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (rr => {
          this.updateZIndex(rr)
        }));
        const jr = this.gm.xG[this.gm.fC][this.eId];
        this.updateOverlayColour(null !== (Sr = null === jr || void 0 === jr ? void 0 : jr.overlayColour) && void 0 !== Sr ? Sr : null), this.updateOpacity(null !== (Qr = null === jr || void 0 === jr ? void 0 : jr.opacity) && void 0 !== Qr ? Qr : 1), this.updateZIndex(null !== (Zr = null === jr || void 0 === jr ? void 0 : jr.zIndex) && void 0 !== Zr ? Zr : 0), this.multilineTextBoxSub = (0, BQ.m)(this.gm, this.eId)
      }
      onChangeClient(rr, Sr) {
        if ("xRotation" === rr || "yRotation" === rr || "zRotation" === rr)(0, BQ.q)(this.gm, this.eId, rr, Sr);
        else if ("pose" === rr) {
          const rr = this.gm.YB.jQr(this.eId);
          rr && (rr.pose = Sr || "standing")
        } else "meshKind" === rr || "meshOpts" === rr ? (this[rr] = Sr, this.queueMeshRebuild()) : "name" === rr && "" !== Sr ? this.updateHidingMeshMgr() : "leaderboardTop" === rr && (this.leaderboardTop = Sr, sS.i.Jp(`leaderboardTop|${this.eId}`, Sr))
      }
      disposeClient() {
        this.vU = !0, this.gm.YB.deleteEntity(this.eId), sS.i.unsubscribe(this.canSeeSub), sS.i.unsubscribe(this.canAttackSub), sS.i.unsubscribe(this.interactableSub), sS.i.unsubscribe(this.overlayColourSub), sS.i.unsubscribe(this.opacitySub), sS.i.unsubscribe(this.zIndexSub), sS.i.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var rr, Sr;
        return {
          canSee: null !== (rr = null === (Sr = this.gm.xG[this.gm.fC][this.eId]) || void 0 === Sr ? void 0 : Sr.canSee) && void 0 !== rr && rr,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var rr, Sr, Qr;
        const {
          gm: Zr
        } = this, {
          YB: Wr
        } = Zr, ar = this.getCurrentHidingMeshMgrState();
        if ((0, nQ.Yd)(this.previousHidingMeshManagerState, ar)) return;
        if (this.previousHidingMeshManagerState = ar, Wr.bM(this.eId, "hidingMeshManager"), null === (rr = Zr.xG[Zr.fC][this.eId]) || void 0 === rr || !rr.canSee) return;
        const jr = this.getSpec();
        if (!jr) return;
        const {
          type: Ir,
          opts: fr
        } = jr;
        "Person" === Ir && (fr.textures = (0, yQ.q)(fr.textures)), fr.eId = this.eId, Wr.gM(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var rr, Sr, Qr;
            "Leaderboard" === Ir && (fr.leaderboardTop = this.leaderboardTop);
            const ar = this.bloxd.client.meshCreator.getEntityMesh(Ir, fr, (rr => {
              var Sr, Qr;
              if ("number" === typeof rr) {
                var Wr, ar, jr;
                const Sr = Zr.Ox.bC;
                Sr.setEntityId(rr, this.eId);
                const Qr = "Person" === Ir && (null === (Wr = (0, yQ.k)("head", null === (jr = fr.textures) || void 0 === jr ? void 0 : jr.head)) || void 0 === Wr || null === (ar = Wr.personModel) || void 0 === ar ? void 0 : ar.fullBody);
                return void Sr.setPickable(rr, (0, vQ.l)(this.eId) && !Qr)
              }
              const Er = rr;
              for (const Ir of [Er, ...Er.getChildMeshes(!1)]) void 0 === Ir.ut || Ir.name.startsWith("Cape|") || (Ir.ut = (0, vQ.l)(this.eId), Ir.metadata ??= new Zr.Ox.rh, Ir.metadata.eId = this.eId);
              this.updateOpacity(null !== (Sr = null === (Qr = Zr.xG[Zr.fC][this.eId]) || void 0 === Qr ? void 0 : Qr.opacity) && void 0 !== Sr ? Sr : 1)
            }));
            if (!ar) return;
            const {
              JC: jr,
              mesh: Er,
              meshOffset: pr,
              nameYOffset: xr,
              modelLoaded: mr
            } = ar;
            null === mr || void 0 === mr || mr.then((() => {
              var rr;
              (null === (rr = Wr.rQr(this.eId)) || void 0 === rr ? void 0 : rr.mesh) === Er && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Nr = null === jr ? null : Zr.Ox.bC.lZr(jr, 0);
            if (Wr.gM(this.eId, Wr.names.mesh, {
                JC: jr,
                tZr: Nr,
                mesh: Er,
                Bfr: !1,
                Tfr: "Leaderboard" !== Ir,
                offset: pr.slice(),
                yfr: "ParticleEmitter" === Ir && fr.followTargetMeshOffset ? rr => {
                  var Sr;
                  LQ().copy(rr, pr);
                  const Qr = null === (Sr = Wr.iQr(this.eId)) || void 0 === Sr ? void 0 : Sr.nU,
                    Zr = void 0 === Qr ? null : Wr.jQr(Qr);
                  if (Zr) {
                    var ar, jr;
                    const Sr = this.bloxd.getEntityHeading(null !== (ar = Zr.ridingVehicleEId) && void 0 !== ar ? ar : Qr, !0),
                      Wr = Math.sin(Sr),
                      Ir = Math.cos(Sr);
                    rr[0] += Zr.meshOffset[0] * Ir + Zr.meshOffset[2] * Wr, rr[1] += Zr.meshOffset[1], rr[2] += Zr.meshOffset[2] * Ir - Zr.meshOffset[0] * Wr;
                    const fr = null !== (jr = Zr.ridingVehicleEId) && void 0 !== jr ? jr : null;
                    null !== fr && (0, HQ.d)(this.gm, fr, rr)
                  }
                } : null
              }), "Person" === Ir) {
              var Ur, tr, hr, zr;
              Wr.gM(this.eId, Wr.names.meshAttachments, {
                personFullBody: null !== (Ur = null === (tr = (0, yQ.k)("head", null === (zr = fr.textures) || void 0 === zr ? void 0 : zr.head)) || void 0 === tr || null === (hr = tr.personModel) || void 0 === hr ? void 0 : hr.fullBody) && void 0 !== Ur && Ur
              });
              for (const rr of tQ.A) {
                var Yr, nr, er;
                const Sr = null === (Yr = fr.textures) || void 0 === Yr ? void 0 : Yr[rr];
                Sr && null !== (nr = (0, yQ.k)(rr, Sr)) && void 0 !== nr && null !== (er = nr.attachments) && void 0 !== er && er.length && KQ.c.Player.meshApi.updatePlayerCosmetic(this.eId, jr, rr, Sr)
              }
              Wr.gM(this.eId, Wr.names.moveState), Wr.gM(this.eId, "updateWalkingState", {
                JC: jr,
                tZr: Nr,
                walkingLegSwingDuration: TQ.u
              }), Wr.gM(this.eId, "humanoidMesh", {
                JC: jr,
                tZr: Nr,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Wr.gM(this.eId, "animator", {
                JC: jr,
                tZr: Nr,
                modelLifeformType: "Player"
              }), PQ.e.hasAnimation("Person") && Wr.gM(this.eId, "rigAnimation", {
                target: "Person",
                JC: jr
              }), Wr.jQr(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === Ir && null !== jr) {
              Wr.gM(this.eId, "animator", {
                JC: jr,
                tZr: Nr,
                modelLifeformType: null
              });
              const rr = (0, zQ.u)(fr.blockName);
              null !== rr && Wr.gM(this.eId, "rigAnimation", {
                target: rr,
                JC: jr
              })
            }
            Wr.ofr(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: xr
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === fr.autoRotate && (Wr.bM(this.eId, "meshRotation"), Wr.gM(this.eId, "autoRotate"));
            const {
              lineToEId: Kr
            } = fr;
            (0, hQ.L)(Kr) || Wr.gM(this.eId, "lineToEntity", {
              lineToEId: Kr
            });
            const yr = Zr.xG[Zr.fC][this.eId];
            this.updateOverlayColour(null !== (rr = null === yr || void 0 === yr ? void 0 : yr.overlayColour) && void 0 !== rr ? rr : null), this.updateOpacity(null !== (Sr = null === yr || void 0 === yr ? void 0 : yr.opacity) && void 0 !== Sr ? Sr : 1), this.updateZIndex(null !== (Qr = null === yr || void 0 === yr ? void 0 : yr.zIndex) && void 0 !== Qr ? Qr : 0)
          },
          removeMeshComponent: () => {
            "Person" !== Ir && "BloxdBlock" !== Ir || Wr.bM(this.eId, "rigAnimation"), Wr.bM(this.eId, Wr.names.mesh), Wr.TSr(this.eId, Wr.names.meshAttachments) && Wr.bM(this.eId, Wr.names.meshAttachments), Wr.bM(this.eId, "entityName"), Wr.bM(this.eId, "autoRotate"), Wr.bM(this.eId, "lineToEntity"), "Person" === Ir ? (Wr.bM(this.eId, Wr.names.moveState), Wr.bM(this.eId, "updateWalkingState"), Wr.bM(this.eId, "humanoidMesh"), Wr.bM(this.eId, "animator")) : "BloxdBlock" === Ir && Wr.bM(this.eId, "animator")
          },
          hideDist: null !== (Sr = fr.hideDist) && void 0 !== Sr ? Sr : 80,
          movingHideDist: null !== (Qr = fr.hideDist) && void 0 !== Qr ? Qr : 120,
          displayOutsideLoadedChunk: fr.hideDist > 100,
          immediatelyUpdate: !0,
          Fp: "BloxdBlock" === Ir ? fr.blockName : Ir
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.vU || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, YQ.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(rr) {
        var Sr, Qr;
        if ("Person" !== this.meshKind) return;
        let Zr = new eQ.d(0, 0, 0, 0);
        if (null !== rr) {
          const Sr = (0, nQ.T)(rr);
          Zr = new eQ.d(Sr[0] / 255, Sr[1] / 255, Sr[2] / 255, .5)
        }
        const Wr = null !== (Sr = null === (Qr = this.gm.YB.rQr(this.eId)) || void 0 === Qr ? void 0 : Qr.JC) && void 0 !== Sr ? Sr : null;
        null !== Wr && KQ.c.Player.meshApi.updateMeshOverlayColour(Wr, Zr)
      }
      updateZIndex(rr) {
        var Sr;
        if ("Person" !== this.meshKind) return;
        const Qr = null === (Sr = this.gm.YB.rQr(this.eId)) || void 0 === Sr ? void 0 : Sr.JC;
        "number" === typeof Qr && this.gm.Ox.bC.setRenderingGroupId(Qr, rr)
      }
      updateOpacity(rr) {
        const Sr = this.gm.YB.rQr(this.eId);
        Sr && ("number" !== typeof Sr.JC ? Sr.mesh && "ParticleEmitter" !== this.meshKind && (0, lQ.h)(Sr.mesh, rr) : KQ.c.Player.meshApi.updateMeshOpacity(Sr.JC, rr))
      }
    }
    var RQ = Qr(40543);
    class gQ {
      constructor(rr, Sr) {
        this.eId = Sr, this.gm = void 0, this.schema = void 0, this.gm = rr.gm
      }
      initClient(rr) {
        this.schema = rr, this.gm.YB.add([rr.x, rr.y, rr.z], .1, .1, null, null, !1, !1, this.eId), this.gm.YB.gM(this.eId, "smoothToServerPos"), RQ.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(rr) {
        WQ.l.includes(rr) && RQ.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        RQ.d.remove(this.eId), this.gm.YB.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: rr,
          volume: Sr,
          refDistance: Qr,
          maxHearDist: Zr,
          rate: Wr
        } = this.schema;
        return {
          soundName: rr,
          volume: Sr,
          refDistance: Qr,
          maxHearDist: Zr,
          rate: Wr
        }
      }
    }
    var CQ = Qr(2364),
      MQ = Qr(37866),
      GQ = Qr(7424),
      kQ = Qr(39286),
      AQ = Qr(2383),
      VQ = Qr(39646),
      iQ = Qr(10242),
      wQ = Qr(39975),
      cQ = Qr(39256),
      FQ = Qr(1912);
    class oQ {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.pZr = rr, this.gm = Sr, this.setupBudgetMs = Qr, this.now = Zr, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.vU = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.FY = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const rr of this.promotedSetups) {
            this.promotedSetups.delete(rr);
            const Sr = this.queuedSetups.get(rr);
            Sr && (this.queuedSetups.delete(rr), this.timedSetup(Sr, rr))
          }
        }, this.createStateCallbacks = (0, iQ.getStateCallbacks)(rr), this.roomStateCallbacks = this.createStateCallbacks(rr.state), this.roomState = rr.state, this.setupBudgetLeftMs = Qr, this.lastRefillMs = Zr()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.pZr.onStateChange(this.setUpPromoted), this.gm.on("beforeInputs", this.onFrame), this.gm.on("lx", this.FY)
      }
      setUpQueuedEntities(rr) {
        var Sr;
        if ((null === (Sr = (0, AQ.c)().client.getMsgHandler()) || void 0 === Sr ? void 0 : Sr.pZr) !== this.pZr) return this.gm.off("beforeInputs", this.onFrame), this.gm.off("lx", this.FY), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (rr && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (LQ().copy(bQ, this.gm.YB.JY(this.gm.fC)); this.setupBudgetLeftMs > 0;) {
            const rr = this.nearestQueued(bQ);
            if (null === rr) return;
            this.setUpIfQueued(rr), this.setUpPromoted()
          }
      }
      nearestQueued(rr) {
        let Sr = null,
          Qr = 1 / 0;
        return this.queuedSetups.forEach(((Zr, Wr) => {
          const ar = function(rr, Sr) {
            return (Sr.x - rr[0]) ** 2 + (Sr.y - rr[1]) ** 2 + (Sr.z - rr[2]) ** 2
          }(rr, Zr);
          (null === Sr || ar < Qr) && (Sr = Wr, Qr = ar)
        })), Sr
      }
      setUpOrQueue(rr, Sr) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(rr, Sr) ? this.timedSetup(rr, Sr) : this.queuedSetups.set(Sr, rr)
      }
      mustSetUpNow(rr, Sr) {
        const Qr = this.gm.WC;
        if (Sr === Qr) return !0;
        const Zr = this.roomState.entities.get(Qr);
        return !(!Zr || Zr.ridingVehicleEId !== Sr && Zr.followingEId !== Sr) || (JQ(rr.type) === UQ.b || (0, AQ.c)().getFollowingEntities(Sr).length > 0)
      }
      setUpIfQueued(rr) {
        const Sr = this.queuedSetups.get(rr);
        Sr && (this.queuedSetups.delete(rr), this.timedSetup(Sr, rr))
      }
      promoteIfQueued(rr) {
        null !== rr && this.queuedSetups.has(rr) && this.promotedSetups.add(rr)
      }
      timedSetup(rr, Sr) {
        const Qr = this.now();
        this.setupEntity(rr, Sr), this.setupBudgetLeftMs -= this.now() - Qr
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.zB(((rr, Sr) => {
          this.gm.WC ? this.setUpOrQueue(rr, Sr) : this.deferEntitySetupUntilInitInfo(rr, Sr)
        })), this.roomStateCallbacks.entities.bq(((rr, Sr) => {
          const Qr = this.deferredSetups.get(Sr);
          Qr && (sS.i.unsubscribe(Qr), this.deferredSetups.delete(Sr)), this.queuedSetups.delete(Sr), this.detach(Sr), (0, AQ.c)().client.disposeEntity(Sr)
        }))
      }
      deferEntitySetupUntilInitInfo(rr, Sr) {
        const Qr = sS.i.EY("initInfoReceived", (() => {
          this.deferredSetups.delete(Sr), this.setUpOrQueue(rr, Sr)
        }));
        this.deferredSetups.set(Sr, Qr), (0, CQ.onGameResetOnce)((() => {
          this.deferredSetups.get(Sr) === Qr && (sS.i.unsubscribe(Qr), this.deferredSetups.delete(Sr)), (0, AQ.c)().updatePositionAndPhysics(this.gm.fC, {
            type: GQ.n.DEFAULT,
            tier: null
          }, !0), (0, AQ.c)().takeHeldPlayerBodySize(this.gm.fC);
          const rr = this.gm.YB.ASr(this.gm.fC);
          rr && (rr.movementType = GQ.k.NORMAL)
        }))
      }
      setupEntity(rr, Sr) {
        const Qr = Sr === this.gm.WC;
        if (Qr)(0, AQ.c)().client.RJ(this.gm.fC, null, null);
        else {
          const {
            type: Qr
          } = rr, Zr = JQ(Qr);
          if (void 0 === Zr) return void
          function(rr, Sr) {
            const Qr = String(rr);
            if (DQ.has(Qr)) return;
            DQ.add(Qr);
            const Zr = Qr.length > 80 ? `${Qr.slice(0,80)}...` : Qr,
              Wr = `No client handler for entity type ${JSON.stringify(Zr)}, so entity ${Sr} is not set up`;
            console.warn(Wr), (0, FQ.reportClientError)("uncaught", Wr, "unknown_entity_type")
          }(Qr, Sr);
          (0, AQ.c)().client.RJ(Sr, rr, new Zr((0, AQ.c)(), Sr, Qr))
        }
        const Zr = this.createStateCallbacks(rr);
        if (Qr) return this.setupMapSchemaCallbacks(Sr, rr, Zr, "armour"), this.setupScalarField(Sr, rr, Zr, "scale"), this.setupScalarField(Sr, rr, Zr, "ridingVehicleEId"), this.setupScalarField(Sr, rr, Zr, "followingEId"), this.setupScalarField(Sr, rr, Zr, "followingOffset"), void this.setupScalarField(Sr, rr, Zr, "shouldMatchFollowingEntityRotation");
        for (const Wr of xQ(rr.constructor)) rr[Wr] instanceof QQ.MapSchema ? this.setupMapSchemaCallbacks(Sr, rr, Zr, Wr) : this.setupScalarField(Sr, rr, Zr, Wr)
      }
      setupMapSchemaCallbacks(rr, Sr, Qr, Zr) {
        const Wr = Qr[Zr],
          ar = new Map;
        Wr.zB(((Qr, Wr) => {
          if (this.onEntityFieldChange(rr, Sr, Zr, {
              key: Wr,
              value: Qr
            }), !(Qr instanceof QQ.Schema)) return;
          const jr = this.createStateCallbacks(Qr),
            Ir = [];
          for (const ar of xQ(Qr.constructor)) Ir.push(this.listenForFutureChanges(jr, ar, (() => {
            this.onEntityFieldChange(rr, Sr, Zr, {
              key: Wr,
              value: Qr
            })
          })));
          ar.set(Wr, (() => {
            for (const rr of Ir) rr()
          }))
        })), Wr.bq(((Qr, Wr) => {
          var jr;
          null === (jr = ar.get(Wr)) || void 0 === jr || jr(), ar.delete(Wr), this.onEntityFieldChange(rr, Sr, Zr, {
            key: Wr,
            value: null
          })
        })), this.addDetacher(rr, (() => {
          for (const rr of ar.values()) rr();
          ar.clear()
        }))
      }
      setupScalarField(rr, Sr, Qr, Zr) {
        this.onEntityFieldChange(rr, Sr, Zr, Sr[Zr]);
        const Wr = this.listenForFutureChanges(Qr, Zr, (Qr => {
          this.onEntityFieldChange(rr, Sr, Zr, Qr)
        }));
        this.addDetacher(rr, Wr)
      }
      addDetacher(rr, Sr) {
        let Qr = this.detachers.get(rr);
        Qr || (Qr = [], this.detachers.set(rr, Qr)), Qr.push(Sr)
      }
      detach(rr) {
        for (const Qr of null !== (Sr = this.detachers.get(rr)) && void 0 !== Sr ? Sr : []) {
          var Sr;
          Qr()
        }
        this.detachers.delete(rr)
      }
      listenForFutureChanges(rr, Sr, Qr) {
        return rr.listen(Sr, Qr, !1)
      }
      onEntityFieldChange(rr, Sr, Qr, Zr) {
        switch (Qr) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Zr);
            const Sr = this.gm.YB.jQr((0, MQ.e)(rr));
            Sr && (Sr.ridingVehicleEId = Zr);
            break
          }
          case "armour":
            this.handleArmourChange(rr, Zr);
            break;
          case "followingEId":
            this.promoteIfQueued(Zr), this.handleFollowingEIdChange(rr, Sr, Zr);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(rr, Qr, Zr);
            break;
          case "scale":
            this.handleScaleChange(rr, Zr);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(rr, Zr);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(rr, Zr);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(rr, Zr);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(rr, Qr, Zr)
        }(0, AQ.c)().client.updateEntityField(rr, Qr, Zr)
      }
      handleArmourChange(rr, Sr) {
        var Qr, Zr;
        const {
          key: Wr,
          value: ar
        } = Sr;
        (0, KQ.w)(rr, Wr, null !== (Qr = null === ar || void 0 === ar ? void 0 : ar.itemName) && void 0 !== Qr ? Qr : null, null !== (Zr = null === ar || void 0 === ar ? void 0 : ar.enchantmentTier) && void 0 !== Zr ? Zr : null)
      }
      handleFollowingEIdChange(rr, Sr, Qr) {
        const Zr = (0, MQ.e)(rr),
          Wr = Zr === this.gm.fC;
        if (this.gm.YB.bM(Zr, this.gm.YB.names.pB), Qr) this.gm.YB.bM(Zr, "smoothToServerPos"), this.gm.YB.gM(Zr, this.gm.YB.names.pB, {
          nU: (0, MQ.e)(Qr),
          offset: Array.from(Sr.followingOffset),
          wQr: Sr.shouldMatchFollowingEntityRotation,
          bQr: !0,
          JQr: (rr, Zr) => {
            if (LQ().copy(rr, Sr.followingOffset), Sr.ridingVehicleEId === Qr) {
              const Sr = (0, MQ.e)(Qr),
                Wr = (0, AQ.c)().getEntityHeading(Sr, Zr);
              LQ().mh(rr, rr, LQ().ZERO, Wr)
            }
          }
        });
        else if (!Wr) {
          this.gm.YB.TSr(Zr, "smoothToServerPos") || this.gm.YB.gM(Zr, "smoothToServerPos");
          const rr = this.gm.YB.getState(Zr, "smoothToServerPos"),
            Sr = this.gm.YB.gJ(Zr).position;
          (0, cQ.setServerPosition)(rr, Sr[0], Sr[1], Sr[2])
        }
      }
      handleRotationChange(rr, Sr, Qr) {
        const Zr = "xRotation" === Sr ? 0 : "yRotation" === Sr ? 1 : 2;
        for (const Wr of (0, AQ.c)().getFollowingEntities(rr)) {
          const rr = this.gm.YB.getState(Wr, "meshRotation"),
            Sr = this.gm.YB.iQr(Wr);
          rr && Sr.wQr && (rr.serverSetRotation[Zr] = Qr)
        }
      }
      handleScaleChange(rr, Sr) {
        const Qr = (0, MQ.e)(rr);
        if (sS.i.Jp(`entityScale|${Qr}`, Sr), Qr === this.gm.fC) {
          var Zr;
          (0, AQ.c)().removeFromEyeHeightCache(Qr);
          const rr = this.gm.YB.ASr(this.gm.fC),
            Sr = null !== (Zr = null === rr || void 0 === rr ? void 0 : rr.physicsState) && void 0 !== Zr ? Zr : {
              type: GQ.n.DEFAULT,
              tier: null
            };
          return void(0, AQ.c)().updatePositionAndPhysics(this.gm.fC, Sr, !1)
        }
        const Wr = (0, AQ.c)().getLifeformType(Qr);
        if (null === Wr) return;
        const {
          physicsBodyWidth: ar,
          physicsBodyHeight: jr
        } = (0, wQ.d)(Sr, Wr);
        this.gm.YB.AQr(Qr, ar, jr, ar)
      }
      handleBaseRenderHeadingChange(rr, Sr) {
        const Qr = this.gm.YB.getState(rr, "meshRotation");
        Qr && (Qr.baseRenderRotation[1] = Sr);
        for (const Zr of (0, AQ.c)().getFollowingEntities(rr)) {
          const rr = this.gm.YB.getState(Zr, "meshRotation"),
            Qr = this.gm.YB.iQr(Zr);
          rr && Qr.wQr && (rr.baseRenderRotation[1] = Sr)
        }
      }
      handleFollowingOffsetChange(rr, Sr) {
        const Qr = this.gm.YB.iQr((0, MQ.e)(rr));
        if (Qr && Qr.offset) {
          const rr = Sr ? Array.from(Sr) : LQ().ZERO;
          Qr.offset[0] = rr[0], Qr.offset[1] = rr[1], Qr.offset[2] = rr[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(rr, Sr) {
        const Qr = this.gm.YB.iQr((0, MQ.e)(rr));
        Qr && (Qr.wQr = null === Sr || void 0 === Sr || Sr)
      }
      handlePositionChange(rr, Sr, Qr) {
        if (this.gm.YB.TSr(rr, "smoothToServerPos")) {
          const Zr = this.gm.YB.getState(rr, "smoothToServerPos");
          (0, cQ.setServerPositionAxis)(Zr, dQ[Sr], Qr)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.zB(((rr, Sr) => {
          this.allItems[Sr] = rr, (0, kQ.l)(this.gm, Sr, [rr.x, rr.y, rr.z], rr.id, {
            amount: rr.amount,
            attributes: JSON.parse(rr.attributes),
            eW: (0, uS.b)(this.gm).cantPickUpItem(Sr),
            size: rr.size,
            predictedAt: (0, AQ.c)().client.itemDropPrediction.onServerItemAdded(Sr)
          });
          const Qr = this.createStateCallbacks(rr);
          for (const Zr of xQ(jQ)) this.onItemFieldChange(Sr, Zr, rr[Zr]), this.addDetacher(Sr, this.listenForFutureChanges(Qr, Zr, (rr => {
            this.onItemFieldChange(Sr, Zr, rr)
          })))
        })), this.roomStateCallbacks.items.bq(((rr, Sr) => {
          delete this.allItems[Sr], this.detach(Sr), (0, AQ.c)().client.itemDropPrediction.onServerItemRemoved(Sr), this.gm.YB.TSr(Sr, this.gm.YB.names.itemState) && this.gm.YB.deleteEntity(Sr), (0, uS.b)(this.gm).disposeEntity(Sr)
        }))
      }
      onItemFieldChange(rr, Sr, Qr) {
        if (Sr in dQ) {
          if (this.gm.YB.TSr(rr, "itemState")) {
            const Zr = this.gm.YB.getState(rr, "smoothToServerPos");
            (0, cQ.setServerPositionAxis)(Zr, dQ[Sr], Qr), (0, AQ.c)().client.itemDropPrediction.onServerItemMoved(rr)
          }
          return
        }
        if (!this.gm.YB.TSr(rr, "itemState")) return;
        const Zr = this.gm.YB.getState(rr, "itemState");
        "amount" === Sr && Qr !== Zr.amount && (Zr.creationTime = Date.now()), Zr[Sr] = "attributes" === Sr ? JSON.parse(Qr) : Qr
      }
      dispose() {
        if (!this.vU) {
          this.vU = !0, this.gm.off("beforeInputs", this.onFrame), this.gm.off("lx", this.FY), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const rr of this.deferredSetups.values()) sS.i.unsubscribe(rr);
          this.deferredSetups.clear(), this.gm.YB.bM(this.gm.fC, this.gm.YB.names.pB);
          for (const rr in this.allItems) this.gm.YB.deleteEntity(rr), delete this.allItems[rr];
          for (const rr of [...this.detachers.keys()]) this.detach(rr);
          (0, uS.b)(this.gm).clear();
          for (const rr of (0, AQ.c)().client.iterateEntityIds())(0, AQ.c)().client.disposeEntity(rr)
        }
      }
    }
    const bQ = [0, 0, 0];

    function JQ(rr) {
      if ("string" !== typeof rr) return;
      const Sr = rr.indexOf("|"),
        Qr = -1 === Sr ? rr : rr.slice(0, Sr),
        Zr = uQ();
      return Object.hasOwn(Zr, Qr) ? Zr[Qr] : void 0
    }
    const DQ = new Set;
    const dQ = {
      x: 0,
      y: 1,
      z: 2
    };
    let sQ = null;

    function uQ() {
      return null !== sQ || (sQ = {
        ...Object.fromEntries(WQ.n.map((rr => {
          const {
            Fp: Sr
          } = (0, VQ.d)(rr);
          return [rr, Sr]
        }))),
        Pebble: UQ.b,
        Snowball: UQ.b,
        "Snowball Launcher": UQ.b,
        "Reinforced Pebble": UQ.b,
        Bullet: UQ.b,
        "Reinforced Ball": UQ.b,
        Ball: UQ.b,
        Mango: UQ.b,
        "Moonstone Orb": UQ.b,
        ...Object.fromEntries(ZQ.t.map((rr => [(0, nQ.Ub)(rr), UQ.b]))),
        Arrow: UQ.b,
        "Arrow of Speed": UQ.b,
        "Arrow of Poison": UQ.b,
        "Arrow of Slowness": UQ.b,
        "Arrow of Weakness": UQ.b,
        "Arrow of Knockback": UQ.b,
        "Arrow of Strength": UQ.b,
        "Arrow of Invisibility": UQ.b,
        "Arrow of Jumping": UQ.b,
        "Arrow of Defense": UQ.b,
        "Arrow of Instant Healing": UQ.b,
        "Arrow of Instant Damage": UQ.b,
        "Arrow of Regeneration": UQ.b,
        "Arrow of Haste": UQ.b,
        "Arrow of Shield": UQ.b,
        "Arrow of Double Jump": UQ.b,
        "Arrow of Heat Resistance": UQ.b,
        "Arrow of X-Ray Vision": UQ.b,
        "Arrow of Mining Yield": UQ.b,
        "Arrow of Brain Rot": UQ.b,
        "Arrow of Milk": UQ.b,
        Fireball: UQ.b,
        "Bouncy Bomb": UQ.b,
        RPG: UQ.b,
        "Obby RPG": UQ.b,
        "Super RPG": UQ.b,
        "Grenade Launcher": UQ.b,
        Iceball: UQ.b,
        Coconut: UQ.b,
        "Splash Speed Potion": UQ.b,
        "Splash Defense Potion": UQ.b,
        "Splash Strength Potion": UQ.b,
        "Splash Invisibility Potion": UQ.b,
        "Splash Jump Potion": UQ.b,
        "Splash Knockback Potion": UQ.b,
        "Splash Poison Potion": UQ.b,
        "Splash Speed Potion II": UQ.b,
        "Splash Defense Potion II": UQ.b,
        "Splash Strength Potion II": UQ.b,
        "Splash Jump Potion II": UQ.b,
        "Splash Knockback Potion II": UQ.b,
        "Splash Poison Potion II": UQ.b,
        "Splash Slowness Potion": UQ.b,
        "Splash Slowness Potion II": UQ.b,
        "Splash Weakness Potion": UQ.b,
        "Splash Weakness Potion II": UQ.b,
        "Splash Milk Potion": UQ.b,
        "Splash Instant Damage Potion": UQ.b,
        "Splash Instant Damage Potion II": UQ.b,
        "Splash Instant Healing Potion": UQ.b,
        "Splash Instant Healing Potion II": UQ.b,
        "Splash Regeneration Potion": UQ.b,
        "Splash Regeneration Potion II": UQ.b,
        "Splash Haste Potion": UQ.b,
        "Splash Haste Potion II": UQ.b,
        "Splash Shield Potion": UQ.b,
        "Splash Shield Potion II": UQ.b,
        "Splash Double Jump Potion": UQ.b,
        "Splash Heat Resistance Potion": UQ.b,
        "Splash X-Ray Vision Potion": UQ.b,
        "Splash Mining Yield Potion": UQ.b,
        "Splash Mining Yield Potion II": UQ.b,
        "Splash Brain Rot Potion": UQ.b,
        "Yellow Paintball Gun": UQ.b,
        "White Paintball Gun": UQ.b,
        "Red Paintball Gun": UQ.b,
        "Purple Paintball Gun": UQ.b,
        "Pink Paintball Gun": UQ.b,
        "Orange Paintball Gun": UQ.b,
        "Magenta Paintball Gun": UQ.b,
        "Lime Paintball Gun": UQ.b,
        "Light Gray Paintball Gun": UQ.b,
        "Light Blue Paintball Gun": UQ.b,
        "Green Paintball Gun": UQ.b,
        "Gray Paintball Gun": UQ.b,
        "Cyan Paintball Gun": UQ.b,
        "Brown Paintball Gun": UQ.b,
        "Blue Paintball Gun": UQ.b,
        "Black Paintball Gun": UQ.b,
        "Yellow Heavy Paintball Gun": UQ.b,
        "White Heavy Paintball Gun": UQ.b,
        "Red Heavy Paintball Gun": UQ.b,
        "Purple Heavy Paintball Gun": UQ.b,
        "Pink Heavy Paintball Gun": UQ.b,
        "Orange Heavy Paintball Gun": UQ.b,
        "Magenta Heavy Paintball Gun": UQ.b,
        "Lime Heavy Paintball Gun": UQ.b,
        "Light Gray Heavy Paintball Gun": UQ.b,
        "Light Blue Heavy Paintball Gun": UQ.b,
        "Green Heavy Paintball Gun": UQ.b,
        "Gray Heavy Paintball Gun": UQ.b,
        "Cyan Heavy Paintball Gun": UQ.b,
        "Brown Heavy Paintball Gun": UQ.b,
        "Blue Heavy Paintball Gun": UQ.b,
        "Black Heavy Paintball Gun": UQ.b,
        "Toxin Ball": UQ.b,
        "Splash Aura XP Potion": UQ.b,
        "Splash Aura XP Potion II": UQ.b,
        "Arrow of Aura XP": UQ.b,
        Firecracker: UQ.b,
        "Rainbow Firecracker": UQ.b,
        "White Firecracker": UQ.b,
        "Orange Firecracker": UQ.b,
        "Magenta Firecracker": UQ.b,
        "Light Blue Firecracker": UQ.b,
        "Yellow Firecracker": UQ.b,
        "Lime Firecracker": UQ.b,
        "Pink Firecracker": UQ.b,
        "Gray Firecracker": UQ.b,
        "Light Gray Firecracker": UQ.b,
        "Cyan Firecracker": UQ.b,
        "Purple Firecracker": UQ.b,
        "Blue Firecracker": UQ.b,
        "Brown Firecracker": UQ.b,
        "Green Firecracker": UQ.b,
        "Red Firecracker": UQ.b,
        "Black Firecracker": UQ.b,
        "Firecracker Pebble": UQ.b,
        "Rainbow Firecracker Pebble": UQ.b,
        "White Firecracker Pebble": UQ.b,
        "Orange Firecracker Pebble": UQ.b,
        "Magenta Firecracker Pebble": UQ.b,
        "Light Blue Firecracker Pebble": UQ.b,
        "Yellow Firecracker Pebble": UQ.b,
        "Lime Firecracker Pebble": UQ.b,
        "Pink Firecracker Pebble": UQ.b,
        "Gray Firecracker Pebble": UQ.b,
        "Light Gray Firecracker Pebble": UQ.b,
        "Cyan Firecracker Pebble": UQ.b,
        "Purple Firecracker Pebble": UQ.b,
        "Blue Firecracker Pebble": UQ.b,
        "Brown Firecracker Pebble": UQ.b,
        "Green Firecracker Pebble": UQ.b,
        "Red Firecracker Pebble": UQ.b,
        "Black Firecracker Pebble": UQ.b,
        "Blinding Pebble": UQ.b,
        Poop: UQ.b,
        "Wood Boomerang": UQ.b,
        "Stone Boomerang": UQ.b,
        "Iron Boomerang": UQ.b,
        "Gold Boomerang": UQ.b,
        "Diamond Boomerang": UQ.b,
        "Amethite Boomerang": UQ.b,
        "Magmasteel Boomerang": UQ.b,
        "Rubellite Boomerang": UQ.b,
        "Serpentite Boomerang": UQ.b,
        "Moonstone Boomerang": UQ.b,
        "67 Base Projectile": UQ.b,
        "67 Boosted Projectile": UQ.b,
        "Capitano Grenade": UQ.b,
        "Scatter Pellet": UQ.b,
        "Lucky Bomb": UQ.b,
        "Unlucky Bomb": UQ.b,
        "Swap Orb": UQ.b,
        Mesh: qQ,
        AudioEntity: gQ
      }), sQ
    }
  },
  40585: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => jr
    });
    var Zr = Qr(688),
      Wr = Qr(39228);
    const ar = 4e4;
    class jr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = rr, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(rr, Sr, Qr) {
        const ar = (0, Zr.U)(rr),
          jr = (0, Zr.U)(Sr),
          Ir = (0, Zr.U)(Qr),
          fr = this.now();
        if (ar !== this.lastChunkX || jr !== this.lastChunkY || Ir !== this.lastChunkZ) {
          this.lastChunkX = ar, this.lastChunkY = jr, this.lastChunkZ = Ir, this.lastChunkId = (0, Wr.b)(ar, jr, Ir), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, fr);
          for (const [rr, Sr] of this.editedAt) {
            if (Sr >= fr - 3e5) break;
            this.editedAt.delete(rr)
          }
        } else this.editedAt.set(this.lastChunkId, fr)
      }
      chunksEditedSince(rr) {
        const Sr = [];
        for (const [Qr, Zr] of this.editedAt) Zr >= rr && Sr.push(Qr);
        return Sr
      }
    }
  },
  40635: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => US,
      f: () => iS,
      i: () => qS,
      l: () => wS
    });
    var Zr = Qr(2364),
      Wr = Qr(9888),
      ar = Qr(38197),
      jr = Qr(38200),
      Ir = Qr(1568),
      fr = Qr(37843),
      Er = Qr(40543),
      pr = Qr(40531),
      xr = Qr(2484),
      mr = Qr(39374),
      Nr = Qr(40640),
      Ur = Qr(1287),
      tr = Qr(360),
      hr = Qr(34),
      zr = Qr(2114),
      Yr = Qr(109),
      nr = Qr(43),
      er = Qr(2135),
      Kr = Qr(2049),
      yr = Qr(4083);
    class Br {
      constructor(rr) {
        this.storeForMs = rr, this.clicks = new yr.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const rr = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < rr;) this.clicks.dequeue()
      }
      getNumClicksInMs(rr) {
        let Sr = 0;
        return this.clicks.forEach((Qr => {
          Qr > Date.now() - rr && Sr++
        })), Sr
      }
      getMaxClickSeparationInMs(rr) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Sr = 0,
          Qr = Date.now() - rr;
        this.clicks.forEach((Zr => {
          Zr < Date.now() - rr || (Sr = Math.max(Sr, Math.abs(Zr - Qr)), Qr = Zr)
        }));
        const Zr = Math.abs(Date.now() - Qr);
        return Math.max(Sr, Zr)
      }
    }
    class Tr {
      constructor(rr) {
        this.storeForMs = rr, this.clickDownDurations = new yr.d
      }
      registerClickDownDuration(rr) {
        this.clickDownDurations.enqueue({
          dur: rr,
          atTime: Date.now()
        });
        const Sr = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Sr;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(rr) {
        if (rr > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Sr = 0,
          Qr = 0;
        return this.clickDownDurations.forEach((Zr => {
          Zr.atTime > Date.now() - rr && (Sr++, Qr = Math.max(Qr, Zr.dur))
        })), `${Sr}:${Qr}`
      }
    }
    var vr = Qr(38031),
      Or = Qr(40646),
      Lr = Qr(26),
      lr = Qr(2383),
      Xr = Qr(1422),
      Pr = Qr(3394),
      Hr = Qr(5179),
      qr = Qr(139),
      Rr = Qr(39652),
      gr = Qr(39859),
      Cr = Qr(688),
      Mr = Qr(38026),
      Gr = Qr(13),
      kr = Qr(5779),
      Ar = Qr(1279),
      Vr = Qr(208),
      ir = Qr(40653),
      wr = Qr(40655),
      cr = Qr(40662),
      Fr = Qr(39688),
      or = Qr(40675),
      br = Qr(39604),
      Jr = Qr(4637),
      Dr = Qr(1758),
      dr = Qr(3425),
      sr = Qr(3909),
      ur = Qr(37811),
      rS = Qr(37815),
      SS = Qr(40670),
      QS = Qr(39447);
    const ZS = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function WS() {
      var rr, Sr;
      return !(null === (rr = (0, lr.c)().client) || void 0 === rr || null === (Sr = rr.freeCameraController) || void 0 === Sr || !Sr.movesFly())
    }

    function aS(rr) {
      const Sr = rr.on.bind(rr);
      rr.on = (rr, Qr) => {
        er.z.has(rr) ? Sr(rr, Qr) : Sr(rr, (Sr => {
          var Zr;
          return null !== (Zr = (0, lr.c)().client) && void 0 !== Zr && Zr.isReplayMode() ? function(rr) {
            return rr in ZS
          }(rr) && WS() ? Qr(Sr) : void 0 : Qr(Sr)
        }))
      }
    }
    const jS = 5e3,
      IS = 1;
    let fS, ES = IS,
      pS = 0;
    const xS = !0;
    let mS = xS;
    zr.d.subscribe("_ignoreBasicBoards", (rr => {
      mS = rr
    })), (0, Zr.onGameReset)((() => {
      mS = xS
    }));
    let NS = null;
    const US = () => NS;
    let tS, hS, zS;
    var YS, nS, eS, KS, yS, BS, TS, vS, OS;
    const LS = [2, 0, 1, "h", 15, "a", "i", 7, "e", "f", 143, 8, 255, "length", "c", "d", "b", "undefined", void 0, 189, 63, 6, "fromCodePoint", 12, "push", 144, 3, 5, 145, 178, 30, "g", 91, 8191, 88, 13, 14, 246, 161, 229, 74, 103, 4, 92, 56, 36, 1023, 65536, 10, 55296, 56320, 127, 87, 167, 128, 31, 18, 95, 192, 134, 206, 223, 195, 199, 38, 224, 209, 240, 69, !1, 73, 146, 9, null, 111, 105, 86, 61, 163, 141, 221, 26, 137, 218, !0, 130, 116, 17, 216, 84, 131, 11, 107];

    function lS(rr) {
      return typeof YS[rr] === LS[17] ? YS[rr] = function(...rr) {
        for (HS(rr[LS[13]] = LS[2], rr[LS[5]] = '|NAetTg;Hbf&Ku:v?p81MB[*@RPd%V}>l9siy(h#6QYzr2wJ]LI.`),j<4XWxSm0{aFDckon_O5G=Zq~+E$C3U"7!/^', rr[LS[0]] = "" + (rr[LS[1]] || ""), rr[LS[4]] = rr[LS[0]].length, rr[LS[10]] = [], rr[LS[8]] = LS[1], rr[LS[9]] = LS[1], rr[LS[7]] = -LS[2]), rr[LS[3]] = LS[1]; rr[LS[3]] < rr[LS[4]]; rr[LS[3]]++)
          if (rr[LS[6]] = rr[LS[5]].indexOf(rr[LS[0]][rr[LS[3]]]), rr[LS[6]] !== -LS[2])
            if (rr[LS[7]] < LS[1]) rr[LS[7]] = rr[LS[6]];
            else {
              HS(rr[LS[7]] += rr[LS[6]] * LS[32], rr[LS[8]] |= rr[LS[7]] << rr[LS[9]], rr[LS[9]] += (rr[LS[7]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
              do {
                HS(rr[LS[10]].push(rr[LS[8]] & LS[12]), rr[LS[8]] >>= LS[11], rr[LS[9]] -= LS[11])
              } while (rr[LS[9]] > LS[7]);
              rr[LS[7]] = -LS[2]
            } return rr[LS[7]] > -LS[2] && rr[LS[10]].push((rr[LS[8]] | rr[LS[7]] << rr[LS[9]]) & LS[12]), XS(rr[LS[10]])
      }(nS[rr]) : YS[rr]
    }

    function XS(...rr) {
      return rr[LS[13]] = LS[2], typeof KS !== LS[17] && KS ? (new KS).decode(new yS(rr[LS[1]])) : typeof BS !== LS[17] && BS ? BS.from(rr[LS[1]]).toString("utf-8") : OS(rr[LS[1]])
    }

    function PS() {}

    function HS() {
      HS = function() {}
    }

    function qS(rr) {
      function Sr() {
        return rr.YB.XQr(rr.fC)
      }
      aS(rr.inputs.down), aS(rr.inputs.up);
      for (const Zr of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Sr = (Sr, Qr) => {
          var Wr, ar;
          if (WS()) {
            var jr;
            const Wr = ZS[Zr];
            var Ir, fr;
            if (Wr) null === (Ir = (0, lr.c)().client) || void 0 === Ir || null === (fr = Ir.freeCameraController) || void 0 === fr || fr.handlefreeCamKeyPress(Wr, Sr, Qr);
            return void(Qr || null !== (jr = (0, lr.c)().client) && void 0 !== jr && jr.isReplayMode() || (rr.YB.gQr()[Zr] = !1))
          }
          if (null !== (Wr = (0, lr.c)().client) && void 0 !== Wr && null !== (ar = Wr.freeCameraController) && void 0 !== ar && ar.isKeyPressOverriden(Sr)) return;
          rr.YB.gQr()[Zr] = Qr
        };
        rr.inputs.down.on(Zr, (rr => Sr(rr, !0))), rr.inputs.up.on(Zr, (rr => Sr(rr, !1)))
      }
      rr.inputs.down.on("crouch", (() => {
        if (WS()) return;
        if (!rr.NK.canCrouch) return;
        const Sr = rr.YB.gQr();
        Lr.c.get("clientEscMenuOptions").crouchIsToggle && (Sr.crouchToggled = !Sr.crouchToggled && !Sr.padSneakToggled), Sr.padSneakToggled = !1
      }));
      const Qr = () => {
        const rr = Sr();
        rr.isGun() && rr.inaccuracyCalculator.jump()
      };
      rr.inputs.down.on("jump", (rr => {
        WS() || (Qr(), tS(rr))
      }));
      for (const Zr of er.h) rr.inputs.down.on(Zr, (rr => {
        var Sr, Qr;
        null !== (Sr = (0, lr.c)().client) && void 0 !== Sr && null !== (Qr = Sr.freeCameraController) && void 0 !== Qr && Qr.handlefreeCamKeyPress(Zr, rr, !0) && (rr.preventDefault(), rr.stopPropagation())
      })), rr.inputs.up.on(Zr, (rr => {
        var Sr, Qr;
        null !== (Sr = (0, lr.c)().client) && void 0 !== Sr && null !== (Qr = Sr.freeCameraController) && void 0 !== Qr && Qr.handlefreeCamKeyPress(Zr, rr, !1) && (rr.preventDefault(), rr.stopPropagation())
      }));
      rr.inputs.down.on("recordGame", (() => {
        var rr, Sr;
        null === (rr = (0, lr.c)().client) || void 0 === rr || null === (Sr = rr.gameRecorder) || void 0 === Sr || Sr.toggleRecording()
      })), rr.inputs.down.on("recordClip", (() => {
        var rr, Sr;
        (0, vr.e)() || null === (rr = (0, lr.c)().client) || void 0 === rr || null === (Sr = rr.gameRecorder) || void 0 === Sr || Sr.saveClip()
      }));
      for (const Zr of er.z) rr.inputs.down.on(Zr, (() => {
        var rr;
        if ((0, Or.e)()) return;
        if ("replayViewerOpen" === Zr) return void hr.i.Jp("replayViewer|requested", "toggle");
        const Sr = null === (rr = (0, lr.c)().client) || void 0 === rr ? void 0 : rr.gameReplayer;
        ((0, vr.e)() || null !== Sr && void 0 !== Sr && Sr.isReplayMode()) && (null === Sr || void 0 === Sr || Sr.handleAction(Zr))
      }));
      const Ir = new Br(3e4),
        mr = new Tr(4e4);
      let Nr = 0;
      const nr = rr => {
          let Sr = 0,
            Qr = null;
          const Zr = Sr => null !== Sr && Sr === Qr && (Qr = null, rr(), !0);
          return {
            press: () => (Sr++, (0, ir.d)() || (Zr(Qr), Qr = Sr), Sr),
            owns: rr => rr === Qr,
            release: Zr
          }
        },
        yr = (rr, Qr) => {
          Qr && wS(Ur.d.TouchDownFirePrimary), rr ? kr() : ((0, gr.e)(), Sr().vZr()), Qr || wS(Ur.d.DownFirePrimary), iS(!0), Ir.click();
          const Wr = Ir.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            ar = Ir.getMaxClickSeparationInMs(1e4) < 20,
            jr = Ir.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Wr || ar || jr) {
            let rr;
            if (Wr) rr = 30;
            else if (ar) rr = 50;
            else {
              if (!jr) throw new Error("???");
              rr = 70
            }(0, Zr.sendColyMessage)(xr.mk, rr)
          }
        },
        Hr = new wr.d,
        qr = nr((() => {
          wr.d.stopRunning();
          const rr = Date.now() - Nr;
          mr.registerClickDownDuration(rr), Sr().yZr(), wS(Ur.d.UpFirePrimary), iS(!1);
          const Qr = mr.clickDownDurationsCheck(4e4);
          (0, Zr.sendColyMessage)(xr.Rg, Qr)
        }));
      let Rr = 0;
      rr.inputs.down.on("primary-fire", (function(rr) {
        Rr = qr.press(), qr.owns(Rr) && (Nr = Date.now(), Math.abs(performance.now() - rr.timeStamp) > 5e3 || (yr(rr.altKey, "changedTouches" in rr), tS(rr)))
      })), rr.inputs.up.on("primary-fire", (function(rr) {
        qr.release(Rr) && tS(rr, !0)
      }));
      const Cr = () => {
          Sr().bpr(), wS(Ur.d.DownFireSecondary), iS(!0), rr.xSr && !rr.xSr.position && (0, pr.f)()
        },
        Mr = nr((() => {
          Sr().KZr(), wS(Ur.d.UpFireSecondary), iS(!1)
        }));
      let Gr = 0;
      rr.inputs.down.on("alt-fire", (function(rr) {
        Gr = Mr.press(), Mr.owns(Gr) && (Cr(), tS(rr))
      })), rr.inputs.up.on("alt-fire", (function(rr) {
        Mr.release(Gr) && tS(rr, !0)
      }));
      const kr = () => Sr().spr();
      rr.inputs.down.on("mid-fire", (() => {
        (0, ir.d)() || kr()
      }));
      const or = rr => {
          (0, Zr.sendColyMessage)(xr.ai, rr, !0)
        },
        fS = rr => {
          (0, Zr.sendColyMessage)(xr.di, {
            iI: rr,
            wI: xS()
          }, !0)
        };
      for (const Zr of ["SpecialAction1", "SpecialAction2"]) rr.inputs.down.on(Zr, (() => {
        or(Zr)
      })), rr.inputs.up.on(Zr, (() => {
        fS(Zr)
      }));
      const pS = () => {
        const rr = Sr();
        rr.isGun() && rr.reload(Date.now())
      };
      rr.inputs.down.on("ReloadGun", pS);
      const xS = () => {
        let Sr = "a";
        return rr.physics.testSolid.toString().includes("SN") || (Sr = "b"), Sr
      };
      rr.inputs.down.on("OpenInventory", (rr => {
        rr.preventDefault(), (0, Dr.v)(rr, "inventory", (0, cr.b)((0, lr.e)()))
      })), rr.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const mS = rr => {
        hr.i.Jp("DropItemKeyPressed", rr)
      };
      rr.inputs.down.on("DropItem", (() => {
        mS(rr.YB.gQr().crouch)
      })), rr.inputs.down.on("OpenShop", (Sr => {
        (0, vr.e)() || "inGame" === Lr.c.get("gameState") && (0, Dr.s)(Sr, tr.q.SHOP, !(0, Wr.b)(rr.NK.shopInfo))
      })), rr.inputs.down.on("OpenLobbyLeaderboard", (Sr => {
        (0, vr.e)() || "inGame" === Lr.c.get("gameState") && (0, Dr.w)(Sr, (0, SS.c)(rr.NK), (0, dr.o)())
      })), rr.inputs.down.on("HideUi", (() => {
        hr.i.Jp("showUi", !1)
      })), rr.inputs.up.on("HideUi", (() => {
        hr.i.Jp("showUi", !0)
      }));
      const US = rr => {
        0 === rr && (rr = 10), hr.i.Jp("setSelectedInventorySlotI", rr - 1), hr.i.Jp("numkeyPressed", rr)
      };
      for (let Zr = 1; Zr <= 10; Zr++) rr.inputs.down.on("HotBarSlot" + Zr.toString(), (() => {
        US(Zr)
      }));
      rr.inputs.down.on("OpenTasksAndLeaderboard", (Sr => {
        const Qr = (0, dr.r)();
        Qr ? (0, Dr.y)(Sr, !0, Qr) : (0, Dr.v)(Sr, "retentionFeatures", !(!rr.NK._tasks && !rr.NK._availableLeaderboards))
      })), rr.inputs.down.on("OpenCodeEditor", (Sr => {
        (0, Dr.y)(Sr, (0, Pr.e)((0, Xr.b)()), (() => {
          (0, Pr.h)(rr.YB.JY(rr.fC))
        }))
      })), rr.inputs.bind("ToggleFullCoordinateOverlay", "F3"), rr.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        hr.i.Jp("toggleFullCoordinateOverlay")
      }));
      const zS = () => {
        (0, lr.c)().client.cameraController.swapCameraZoom()
      };
      rr.inputs.down.on("SwapCameraZoom", zS), rr.inputs.down.on("OpenInviteLink", (rr => {
        (0, Dr.v)(rr, "inviteLink", Yr.featureFlags.canUseInviteLinks)
      })), rr.inputs.bind("Y", "KeyY"), rr.inputs.down.on("Y", (rr => {
        (0, vr.e)() || hr.i.Jp("YKeyPressed")
      })), rr.inputs.bind("X", "KeyX"), rr.inputs.down.on("X", (rr => {
        (0, vr.e)() || hr.i.Jp("XKeyPressed")
      })), rr.inputs.down.on("OpenEmoteWheel", (() => {
        hr.i.Jp("requestEmoteWheelHoldOpen")
      })), rr.inputs.up.on("OpenEmoteWheel", (() => {
        hr.i.Jp("requestEmoteWheelHoldRelease")
      })), rr.inputs.down.on("Zoom", (() => {
        "inGame" === Lr.c.get("gameState") && (0, lr.c)().client.cameraController.setZoomKeyHeld("keys", !0)
      })), rr.inputs.up.on("Zoom", (() => {
        (0, lr.c)().client.cameraController.setZoomKeyHeld("keys", !1)
      })), RS();
      const YS = rr => function() {
        return hS(), rr(...arguments)
      };

      function nS(rr) {
        "inGame" !== Lr.c.get("gameState") || (0, Dr.p)() || (hr.i.Jp("ctrlCrouchWithoutFullscreen"), rr.preventDefault())
      }
      NS = {
        primaryFireDown: YS((rr => {
          const Sr = qr.press();
          return qr.owns(Sr) && (Nr = Date.now(), yr(!1, !1), rr && Hr.start()), Sr
        })),
        primaryFireUp: YS((rr => {
          qr.release(rr)
        })),
        altFireDown: YS((() => {
          const rr = Mr.press();
          return Mr.owns(rr) && Cr(), rr
        })),
        altFireUp: YS((rr => {
          Mr.release(rr)
        })),
        jumpDown: YS(Qr),
        specialActionDown: YS(or),
        specialActionUp: YS(fS),
        reloadGun: YS(pS),
        dropItem: YS(mS),
        swapCameraZoom: YS(zS),
        zoom: YS((rr => {
          (0, lr.c)().client.cameraController.setZoomKeyHeld("pad", rr)
        })),
        pickBlock: YS(kr)
      }, rr.inputs.down.on("ctrlCrouch", nS), rr.inputs.up.on("ctrlCrouch", nS), rr.inputs.bind("ctrlCrouch", "ControlLeft");
      const eS = rr => {
        "inGame" === Lr.c.get("gameState") && rr.ctrlKey && !(0, Dr.p)() && rr.preventDefault()
      };
      document.addEventListener("keydown", eS), document.addEventListener("keyup", eS), document.addEventListener("keypress", eS), rr.inputs.bind("Alt", "AltLeft", "AltRight"), rr.inputs.down.on("Alt", (rr => {
        rr.preventDefault()
      }));
      const KS = Sr => (0, br.i)(rr, Sr),
        yS = Sr => (0, br.k)(rr, Sr),
        BS = [0, 0, 0],
        TS = [0, 0, 1];
      rr.on("afterRender", (Sr => {
        rS.k.frame(Sr, rr.camera.heading, rr.camera.pitch, rS.f.drawn), (0, ar.f)(rr.camera.heading), (0, jr.i)(rr.camera.heading), (0, br.o)(rr, BS, TS), (0, lr.c)().client.triggerGameCallback("onAfterRender", Sr, {
          cameraHeading: rr.camera.heading,
          cameraPitch: rr.camera.pitch,
          cameraPosition: BS,
          cameraDirection: TS,
          tanHalfFovX: (0, br.c)(rr),
          tanHalfFovY: Math.tan(rr.Ox.r_().fov / 2),
          screenBandPct: {
            x: Jr.c,
            y: (0, Jr.h)()
          },
          projectWorldPosToScreenPos: KS,
          projectWorldPosToViewport: yS
        })
      })), rr.camera.JR = (0, ur.startLookDebug)("js"), rr.inputs.mC = ur.noteLookDroppedCopy, (0, sr.p)("remesh") && (0, QS.j)(rr), rr.on("beforeInputs", (() => {
        if ((0, Or.e)()) return rr.inputs.JF.dx = 0, void(rr.inputs.JF.dy = 0);
        if (rr.camera.JF.dx += rr.inputs.JF.dx, rr.camera.JF.dy += rr.inputs.JF.dy, 0 !== rr.inputs.JF.dx || 0 !== rr.inputs.JF.dy) {
          rr.YB.getState(rr.fC, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        rr.inputs.JF.dx = 0, rr.inputs.JF.dy = 0
      }));
      let vS = 0;
      const OS = [0, 0, 0],
        LS = [0, 0, 0],
        lS = {
          base: OS,
          max: LS
        },
        XS = rr => {
          const Sr = Vr.i.droppedBlockSize / 2;
          return [0, 1, 2].every((Qr => rr[Qr] >= OS[Qr] - Sr && rr[Qr] <= LS[Qr] + Sr))
        };
      rr.on("lx", (function(Sr) {
        hr.i.Jp("noaTick", Sr);
        const Qr = (0, lr.c)().client;
        if (Qr.triggerGameCallback("lx", Sr), Qr.isClientGameSessionActive()) try {
          Er.d.lx(Sr)
        } catch (jr) {
          console.error("Error ticking audio entities", jr)
        }
        if (!rr.YB.LQr(rr.fC).isAlive) return;
        Date.now() - vS > 9e3 && (! function() {
          const rr = (0, lr.e)();
          "number" === typeof rr.NK.speedMultiplier && "number" === typeof rr.NK.jumpAmount && (0, Zr.sendColyMessage)(xr.Bi, {
            ij: (0, Ar.h)(rr.NK.speedMultiplier),
            wj: (0, Ar.e)(rr.NK.jumpAmount),
            cj: (0, Ar.h)(rr.NK.crouchingSpeed),
            Fj: (0, Ar.h)(rr.NK.walkingSpeed),
            oj: (0, Ar.h)(rr.NK.runningSpeed),
            bj: (0, Ar.e)(rr.WSr),
            Jj: rr.YB.ASr(rr.fC).jumpForce,
            Dj: rr.YB.gJ(1).width,
            dj: rr.YB.gJ(1).height,
            sj: rr.YB.cV(1).sj
          }, !0)
        }(), vS = Date.now());
        const Wr = rr.YB.gQr();
        if ((Wr.jump || Wr.forward || Wr.backward || Wr.left || Wr.right || Wr.sprint) && hr.i.Jp("usedKeyboard"), rr.YB.pQr(rr.fC) && !0 === rr.NK.canPickUpItems) {
          const Sr = rr.YB.JY(rr.fC),
            Qr = (0, Kr.o)(ES),
            Wr = (0, Kr.p)(ES);
          OS[0] = Sr[0] - Qr, OS[1] = Sr[1] - .6 * Wr, OS[2] = Sr[2] - Qr, LS[0] = Sr[0] + Qr, LS[1] = Sr[1] + Vr.i.Uz + .6 * Wr, LS[2] = Sr[2] + Qr;
          const ar = rr.YB.bfr(lS, rr.YB.names.autoRotate),
            {
              itemDropPrediction: jr
            } = (0, lr.c)().client,
            Ir = Zr.offlineInputReplay.holdsInput();
          if (ar.length > 0)
            for (const Er of ar) {
              const Sr = rr.YB.getState(Er, "itemState");
              if (void 0 === Sr || Date.now() - Sr.creationTime < 500) continue;
              let Qr = Er,
                Wr = null;
              if (Sr.eW) {
                const rr = jr.pickupTarget(Er, XS, Ir);
                if (null === rr) continue;
                ({
                  gp: Qr,
                  Gp: Wr
                } = rr)
              }
              const ar = rr.YB.getState(Qr, "itemState");
              if (ar.eW && null === Wr) continue;
              let mr = 0,
                Nr = null,
                Ur = !1;
              if (0 === ar.amount) Ur = !0;
              else {
                const {
                  amountPickedUp: Sr
                } = rr.YB.fQr(rr.fC).pickUpItem({
                  name: ar.name,
                  typeObj: ar.typeObj,
                  amount: ar.amount,
                  attributes: ar.attributes
                });
                if (mr = Sr, 0 === mr) continue;
                Nr = Fr.c.pickUp(ar, mr), ar.amount -= mr, ar.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === ar.amount ? Ur = !0 : ar.creationTime = Date.now() + jS
              }
              const tr = (0, lr.c)().client.inventoryPrediction.record(Nr);
              (0, Zr.sendColyMessage)(xr.Uh, {
                gp: null === Wr ? Qr : "",
                Cp: mr,
                Mp: pr.e,
                jj: tr,
                Gp: Wr
              }, !0), Ur && (Ir && jr.onPickedUpOffline(Qr, tr, Wr), null === Wr && rr.YB.deleteEntity(Qr));
              fr.b.play("pickUp", Vr.i.pickupSoundVol).rate(1 + Math.random() * Vr.i.pickupSoundRateVariation)
            }
        }
        if (!rr.YB.rQr(rr.fC)) return;
        const ar = rr.inputs.JF.FSr;
        if (0 !== ar) {
          const Sr = ar > 0 ? 1 : -1;
          rr.inputs.state["mid-fire"] || rr.inputs.state.Alt || !rr.NK.useInventory ? (rr.inputs.state["mid-fire"] && hr.i.Jp("requestEmoteWheelClose"), (0, lr.c)().client.cameraController.handleScrollZoom(Sr)) : hr.i.Jp("ScrollInventorySlot", Sr)
        }
      })), zr.d.subscribe("droppedItemScale", (rr => {
        ES = "number" === typeof rr && isFinite(rr) ? rr : IS
      }))
    }

    function RS() {
      const rr = (0, lr.e)();
      if (rr)
        for (const Sr in er.q) {
          rr.inputs.unbind(Sr);
          for (const Qr of er.q[Sr]) rr.inputs.bind(Sr, Qr)
        }
    }
    HS(YS = {}, nS = ["[MGTZ]|", 's4|d<X"+.b!EXk=#QmQ,s+NG~)_Dg$w6giA', "Xa*gHyC;Fv1g!v:1haGViiBJA4,>8S;hD*$H", "eB`5XoFw7XZ8~P}*Q.e", "g8*t9`%}OM:jv:*i+eS>:yzND,qHa]Hh^&tZ~CbR=pI8nh/Vj,R}fE|", '9V=V"`6`k1#moR@QXs<LBI.;<p|*zo;(zn}j<w:H{8h', "eKvba~fH+v8Gm$}yxpTflWzieKrFKv5RqWE.XoeRVWA.Zt", 'p6m%AEAoy,Q:_d86WpC)lWTumH:c4RCd_W"=N"p;tb{&5R&RvKGZ_y66Db', "ePPG@4.u>BGlGh]P;0m>74l}+0=vsS6>k*Cl#SQN$42Wqk(>JmU>F_`ANKI", "Caj`QS:{Z&8@*$kRwsL.^=7iw8p@yWrh", "m]DH.weuZm;JL?n>i52>/C3sk1cOata*GgnbrS|", "K5<gnx2uCbS+p_}p`sHbRW7Q,X=ViofM^aDPL(bk|xQ", 'Ax9le"{}N,i@]v!?^<9.MnkN', "*gh`b=?XXM<o)S}y6erZz,uRvFHclC_PzstTX)OQ`{Ot2?jihe]g:", "~2Ol)$U~E4?dHCKhvP<gMmZ~.1ppN", '"]_b2(*i?v,8?np#b66Lt_pV>vPm#P~dhx?.=5y}lxRpR]:', 'd(kn!nj*WM9s?e>}"]xf$924+0~ob]+6oY"`I.Vi9F<:4?AybN', "e5h>hJ|8){I8zXmpoY$HJLR)w)zkX:|y", "52wLGhn;8boosALP+|", ":wIZ<#JJpKR", "5g6}*kT1hu>j~:$#e4x)6<@`bjnvfEM%0a@LE`c898.@{d?MU%tT7kLuy{4", "%MU;{3`XPaUVIS#R4P?bRO<ApKnDj:_17.dlR", 'ALU5S~5"^m{W!vHh:n#gny|', "84bqlq|", 'hbWl`<P"gfV~~vBQhp~L_m6K4a#mO_Zdne.lox|', '|z#L0s_`XW5<"Lrh$]*}|j+w8,71j$T11N', "2pxZi,,Xsvhk#CJd`,ATtsjQ)1*sGo(Rxc8Gz+KXg", "L,^T!JlKsv2L?d3%Fb6b5x>4Cxy", "t48dmZ1V{xps~:7iQM=V^U&)B,8Xw(}pt5~OE=]AnMC&cCQ#hVkP]0H{YM2", "2>rVXsj;jMI8ILDpM0j%?5tX.1A}1$b", 'tVk>wcn;F4"ZOLch!%;`R4y`uBT*3Jc}sg=V9i|', "oc[%9`l{,X*=JJl83aVfP=z;VF}=*:`%iP2jY<iiG:2ts(ezNib.*J<6]v", "GMQ.&Cl5VBlkt#&RlgR.POaV4:a8<e,Q@ne", "v0yj3=_K~xi", "p4cn.w)*zH@p+C|YrP#`yWv)A,fM>P]s@b?gwXEi^:", "G<0%9nAHX:]=fAUiQcY.B`&Rqv", "24Pla_)JY:gX[SWQvnXl74jQJvZ5f:ez%xe", 'wnYZT5hyRaX+zW}V(vWZ"=6wgu{L@J&#E.|bVi|', "WbB;G5x@.bCwJ:wd?g25_E0J%pu~Io3dC(uj?4f}_X0N~A3QMxy;S_wwS<c+|", "<6A.8=00p4jt~ob", '+MlbECt@?B1}B]l8Fsl}{X8{"{"0hujV^sCZ_E;0i1"D`WG#:45TD)@"9b', "(,C)n~(J]BqxgST>n:0O[`=K2<!y!JbRWb,%,X0u(X]", '4,3V;5iipbnDEkW*R6";)3""~v1G,hep1.Y_?=}A]BUI}(I6p0A', 'iV._OE"`pxY;N', "n.q`#0vuIvCo/t", '2cMZgI"6e,eA@W5PXn(>a3U~^m0N8(/V%*3Zcs0QY:lk2(b', "<gy5j0HwgfOo)(8MxcOgwSD4>0;bk_dQ6M{gu", "icB>Yo1;e", 'TP&Z;xw}z&9Mn:a8_Y>tph3"C1JBPE`%', "V*H9}Oly#uc&/yg", "m,y5QL1VV8#~/E_>@*xV(JMyIxl=6n#RUYxf", '.4pqJ.Y6.1d_CCF8"eKVlO|Hxmy=H]l@B,Mf8', "7em>dU[XQp3RN", "xnmtWX5@M1is8Em@", "#ehtaj~um)~[QtN>nc5V^`C4WM(=hPjVw6:>dq``.bW&rndV+ge", "94dZ[Ux@WWfMILR*N0Z>]GrKk{rF5ks(3Ow>{#zN", "uPs.*kZ.nuD:~h@%.aT`sq|", "X6,=dn5@W<LkXEIs96%ZrS{wsvT,D:_1)4@dd,)us1D0Stb", '^#=)K"bRe,+DV]#1Pxu`xwfHy{<&>:I6Xbdld', 'QP@L_m_w]F:f6J*sP,|}"Imwa0:cI:Y#I._,WXCkg', "(pkne~N19b8e?CVVLPhjr+jN", 'Wbg;,X}yKBw%WoBd7g.)o)+"?F>j[(7VB.(jb43w{KPf|d|y@bil:h=8g', "xb0%Q+%8nX|Gxx0Y5(&Z9U>i+b~EcvRVE2,LNEQ1bM]`nXf", "U:%Zv=QJrp7V=WUQ", "B4#L/n6w^p&}xW]#^%nbos?{lKci&:;", ']a*9S#%`2:FH#h0pVx"LB47*?vH.!n1ss(FlF]uQI49', "T*RqgIY`2&Qf$ks@D*T>[`GklK(~*A", "<]|q+CX@L08]u]HP?6pg{#VVfp[poL|Yu4C)7q&NY&RpHC;h6m*b", "r.GTP4f}^Wsk0W+6L..Z^O$6ybUT.:3d}4{,Qc(i8x#iCPm*_aUI2L;1XpbGN", "/:)5H~o}+xGZCP|8y,p.3`fwAKaiW$o(mpWH&4|YbXJmXLe(db`f8", "24|}4.|", "bz4,(i#0Ev&c%tps#5Zn#,eR}0<R>I`6waCV0##N", "F*cflWhK;{*MgTA>N,N_KybN|v75oR`sE(UP&j~ua4A?KvY1Xe7t", '/)k5ewCunu9@uy(>=WM5"4Okzp_xXSg', 'WaZPvk`89x4+~e1s{(>bdOP"008@Z]AyNKp.3IhA', "O:*b4~@wG<<<mk@%{.A", "y(ZIGh5g|Bc+/t", 'pb,=6c|XU,H?Zyo8Racf{3N0a4UZsSw6E<>g,09;lBa<?Wh(2aWZ|"6A:B', "wbB>$9VVt", 'Cs!bf]2;0xAJ{vi8vv">g566M1dmWhE6Wp7ON"0.g', "@cm`~h9Jr&IWrer#qmu>|x9ix<,o%nl82P8_$C~N", "Q(kIOERJWH75yWF}q<(=H=@}=a&~a@E#lch`nmd;]b", "^H!,u=8o6M2B!iQR?KSj:ygwg", "wK@L%h~0{KO%j$U%:N", "X]N,sWc+U1e}ih}YSco%_j=K])E)qkt}.6!bP4n;L,r+OEa*Xc].EEWN", 'M6GHb"vNhuHe:Efh8lo%Rn~u?FS:NxN*2zRg..]A', "iK@bWZ4GGpjOT?H", "Sm6b`Z1NUXaZ[$nR/:#%*W/*wHI", "64L,]0rA", 'ne=5?CFK"X]Bu3y8Ws~%:=*JY&qNFk7QD|', "oaFVf4k4hXaW~Pc@C>#=mZA{lKG+LtU%@*&l+n|", "kYDVPCHXCxL+F:g8}N", "TvDZ_]VQ#uj=^oXVobfd_=Qu2Fi_3ti(", "U%H,*hK8zH7V<Cx*[4=V79bQ6Xm83JzPI2onh,iE.bujMd$s80P.ChdQu8", "^<.Vos40c,M>6nH>MN", "]KNGlczN2<4LiIw6eL$H2<NuRp]ji:a8~oA", "dxKV,sOQt1|Gk_4%3.A", "7Ojb.(/i,X/)^L+dybB5#JyA", "txB5|~N)_M.", 'kbWH.o+X;j|c1e(}Fm:;{j"`huaB{CYP,2Ng`X|', "VaGTP`B;JH?~!e76cpm%.L^m!XC5+Cb", "3W9lMmb0SW/[0:c}#P1VWwmg@M3K?Ck@%N", "?g6b+5CkxHc%!WRVMl*ts`7*pbq<u?=P@xg9uk+wsvZ5Ao^Q=snbRhpit", "wpntok74J8]=8T*%^<6bQclyI0|_R_H", "P(0LnIt8$1T,ok}@MncVz(|", "Gm|9:4]{<X0NrWl@}(6bbEF8Zm3Z7:vdXa;}s6Z;p01_FE:", ";5:;~5`A", "#gc),0ZuPaFWXL0([bXHZyj0[{WLOt", "VK~%qI2N", "W*S5Cm{}({Vmi:/*N,~OB", ".,NGwozU9vxtB?k1)s{b*k|8^p|ab_1s@P(jB", "qm,j6<6@}W![yJa@!%cZ,sfo/p35N", "5aldBWgX1xOt@dh8_<|dc)UVvx8_FoWYbce", ",K~=>,4i/pJ>3C|@9z+,$hc5gXikPA", 'RbQ}gk]"a4vpU@yp*b2;/ON1dM!1i$A(26*t#cww110<Nxi8b*dVdJkuo1', '4mtI5It"`,5VL?n8ngdldCWu@uC)`vUd5m7=gjE4wH?}%ni}7p~tK', "{(CZL3AHU,]m|elV~p|,+5BV@M*u#A@i6pVfzLU;yu6", "yb[;Ic3K:0d@C:RiVa~t6c74L87y;PAzI.;g9nbk2Wd@vPB6z*s_P", '>c3>a_4Vku*e9_Apxn/gPO`5=:7lcd[6ngWlG5"s,1f,eP?M7:3VK', "D];=@hqXx<pa[Sx*BbTfzoqsIx6:XLnhi5bg~5`8]8", '/<7g|s^6DxKXgSQ#"oH,OmSiZ:9>FLT>VaP_E=+X=WowKW#(^eA', "+(H9w<66xWYe*I!s%brZ$9&kxHN9]eMs?.Unb]g`/:y_`dKR7o2`VC|", "ls:j`X~kl8Q]pxi}dPQGU=g@$,M_iea@1,X)ri_w:B!0.:t}:nM;`(pQm0v*N", '2M+gW_M`dpM(U@t>"a^l(W=w|8w:O_K', "v6eZ;D7N", "JC&{)o^A", "P|nK<%Zh", ']}8"?BDN', "x6E|_S(N", '&G"f}n0', "Rf5kJ|VN", "fzroyK3N", "Z{EUWBiN", 'Z{Z"f', "F$(:1]>d!a|;%`+ML$^v`gw", "/[,YJIZUrAi@oBN+~jE<2ZC.ac5veQH", "&7cJtLU_1Hb*w?@u;7Il?s=", "MO7Cu&z=>|UXe9%Klx]<Zzm?rcIy+v0", 'qI4(hcK*^m$P!eOk3YFJXKg"ft8|S7x', "i&sD;4eWFkTvD2dE8OsND9(W4ik", ")k}L;Kw", "4m>XR,bB", "2HxA", "$U],KpZ0", "0fPjXjk0", "o[w=MjImZz", "CzGr&1e,.G", "yE1`)lScSp", "F[)~hdrrB]", "L:/k[dqC", ",o)jR_RU`8Y", "$czyAW,u$`#", "RNngx:tzXs#", "SQW~/LEf<(4", '"tGnLi,c^It', "L:<aLb1!;Y#", "Ycrn<q1EH", "A>@^0=+CK6wn;Qz^Yc:~4V9f,SB#.U|xN.8rP{)qBSss;e", "kcrnp+nf,S`nH+S,ttky1iBi:RwnCn(3A##1/LE8Y5783C", "Jtp~NjO5BxDtQuX4HNKH@O*UXs>OOu03TQrneqnf,S6*2Z", "BBM~iq!fvs;thu*I1BM~X+_fapotIu<(_.t12;CoFglDDe", "4c!>}7T@", "6KRd?I@A", "2Yl@05u$", "!f+:45b", "INl@@5v$", "vl[1K@`d", "mWYc<yQ$", "T(KA($)g", "`O0Y", "rE+TMdsS", "lOSR3aAl"]), HS(eS = function(...rr) {
      HS(rr[LS[13]] = LS[1], rr[LS[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], rr[LS[14]] = LS[18], rr[LS[15]] = []);
      try {
        HS(rr[LS[14]] = Object, rr[LS[15]][LS[24]]("".__proto__.constructor.name))
      } catch (nS) {}
      rr: for (rr[LS[8]] = LS[1]; rr[LS[8]] < rr[LS[16]][LS[13]]; rr[LS[8]]++) try {
        for (rr[LS[14]] = rr[LS[16]][rr[LS[8]]](), rr[LS[9]] = LS[1]; rr[LS[9]] < rr[LS[15]][LS[13]]; rr[LS[9]]++)
          if (typeof rr[LS[14]][rr[LS[15]][rr[LS[9]]]] === LS[17]) continue rr;
        return rr[LS[14]]
      } catch (nS) {}
      return rr[LS[14]] || this
    }() || {}, KS = eS.TextDecoder, yS = eS.Uint8Array, BS = eS.Dp, TS = eS.String || String, vS = eS.Array || Array, OS = function(...rr) {
      return HS(rr[LS[13]] = LS[1], rr[-LS[25]] = new vS(LS[54]), rr[LS[16]] = TS[LS[22]] || TS.fromCharCode, rr[LS[0]] = []),
        function(...Sr) {
          for (HS(Sr[LS[13]] = LS[2], Sr[LS[19]] = LS[18], Sr[LS[0]] = LS[18], Sr[LS[14]] = Sr[LS[1]][LS[13]], rr[LS[0]][LS[13]] = LS[1]), Sr[LS[15]] = LS[1]; Sr[LS[15]] < Sr[LS[14]];) HS(Sr[LS[0]] = Sr[LS[1]][Sr[LS[15]]++], Sr[LS[0]] <= LS[51] ? Sr[LS[19]] = Sr[LS[0]] : Sr[LS[0]] <= LS[61] ? Sr[LS[19]] = (Sr[LS[0]] & LS[55]) << LS[21] | Sr[LS[1]][Sr[LS[15]]++] & LS[20] : Sr[LS[0]] <= 239 ? Sr[LS[19]] = (Sr[LS[0]] & LS[4]) << LS[23] | (Sr[LS[1]][Sr[LS[15]]++] & LS[20]) << LS[21] | Sr[LS[1]][Sr[LS[15]]++] & LS[20] : TS[LS[22]] ? Sr[LS[19]] = (Sr[LS[0]] & LS[7]) << LS[56] | (Sr[LS[1]][Sr[LS[15]]++] & LS[20]) << LS[23] | (Sr[LS[1]][Sr[LS[15]]++] & LS[20]) << LS[21] | Sr[LS[1]][Sr[LS[15]]++] & LS[20] : (Sr[LS[19]] = LS[20], Sr[LS[15]] += LS[26]), rr[LS[0]][LS[24]](rr[-LS[25]][Sr[LS[19]]] || (rr[-LS[25]][Sr[LS[19]]] = rr[LS[16]](Sr[LS[19]]))));
          return rr[LS[0]].join("")
        }
    }()), lS(124) in PS && function(...rr) {
      HS(rr[LS[13]] = LS[1], rr[LS[5]] = function(...rr) {
        for (HS(rr[LS[13]] = LS[2], rr[LS[2]] = rr[LS[1]].length, rr[-LS[29]] = [], rr[LS[26]] = LS[1], rr[-LS[28]] = LS[1], rr[LS[1]].sort(((rr, Sr) => rr - Sr))), rr[LS[27]] = LS[1]; rr[LS[27]] < rr[LS[2]]; rr[LS[27]]++)
          if (!(rr[LS[27]] > LS[1] && rr[LS[1]][rr[LS[27]]] === rr[LS[1]][rr[LS[27]] - LS[2]]))
            for (HS(rr[LS[26]] = rr[LS[27]] + LS[2], rr[-LS[28]] = rr[LS[2]] - LS[2]); rr[LS[26]] < rr[-LS[28]];)
              if (rr[LS[1]][rr[LS[27]]] + rr[LS[1]][rr[LS[26]]] + rr[LS[1]][rr[-LS[28]]] < LS[1]) rr[LS[26]]++;
              else if (rr[LS[1]][rr[LS[27]]] + rr[LS[1]][rr[LS[26]]] + rr[LS[1]][rr[-LS[28]]] > LS[1]) rr[-LS[28]]--;
        else {
          for (rr[-LS[29]].push([rr[LS[1]][rr[LS[27]]], rr[LS[1]][rr[LS[26]]], rr[LS[1]][rr[-LS[28]]]]); rr[LS[26]] < rr[-LS[28]] && rr[LS[1]][rr[LS[26]]] === rr[LS[1]][rr[LS[26]] + LS[2]];) rr[LS[26]]++;
          for (; rr[LS[26]] < rr[-LS[28]] && rr[LS[1]][rr[-LS[28]]] === rr[LS[1]][rr[-LS[28]] - LS[2]];) rr[-LS[28]]--;
          HS(rr[LS[26]]++, rr[-LS[28]]--)
        }
        return rr[-LS[29]]
      }, console.log(rr[LS[5]]))
    }(), HS(zS = (...rr) => {
      function Sr(rr) {
        return typeof YS[rr] === LS[17] ? YS[rr] = function(...rr) {
          for (HS(rr[LS[13]] = LS[2], rr[LS[5]] = 'whmsSaNEHY8M#{@"AFBx17}ndXez0V^v:K%+6r?k$Z/RGCQi*LJjf2[c<p5b=`,!D|y9Ul3.ut>4]~OI;P&(gT)oqW_', rr[LS[39]] = "" + (rr[LS[1]] || ""), rr[LS[14]] = rr[LS[39]].length, rr[LS[42]] = [], rr[LS[8]] = LS[1], rr[LS[41]] = LS[1], rr[LS[31]] = -LS[2]), rr[LS[11]] = LS[1]; rr[LS[11]] < rr[LS[14]]; rr[LS[11]]++)
            if (rr[-LS[40]] = rr[LS[5]].indexOf(rr[LS[39]][rr[LS[11]]]), rr[-LS[40]] !== -LS[2])
              if (rr[LS[31]] < LS[1]) rr[LS[31]] = rr[-LS[40]];
              else {
                HS(rr[LS[31]] += rr[-LS[40]] * LS[32], rr[LS[8]] |= rr[LS[31]] << rr[LS[41]], rr[LS[41]] += (rr[LS[31]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                do {
                  HS(rr[LS[42]].push(rr[LS[8]] & LS[12]), rr[LS[8]] >>= LS[11], rr[LS[41]] -= LS[11])
                } while (rr[LS[41]] > LS[7]);
                rr[LS[31]] = -LS[2]
              } return rr[LS[31]] > -LS[2] && rr[LS[42]].push((rr[LS[8]] | rr[LS[31]] << rr[LS[41]]) & LS[12]), XS(rr[LS[42]])
        }(nS[rr]) : YS[rr]
      }
      rr[LS[13]] = LS[2], Sr(126) + "A" in PS && function(...rr) {
        function Qr(...rr) {
          for (HS(rr[LS[13]] = LS[2], rr[LS[43]] = 'uRBTNpijArlKfGJHoFcIQ0VC321(b:>XW&}#=S[UmYy`?+M9vgs*;.Eh"dwZ54Da@!~q%nLe,P)xtk|zO68^_7$/{]<', rr[LS[16]] = "" + (rr[LS[1]] || ""), rr[LS[26]] = rr[LS[16]].length, rr[LS[42]] = [], rr[-LS[44]] = LS[1], rr[-LS[45]] = LS[1], rr[LS[31]] = -LS[2]), rr[LS[3]] = LS[1]; rr[LS[3]] < rr[LS[26]]; rr[LS[3]]++)
            if (rr[LS[19]] = rr[LS[43]].indexOf(rr[LS[16]][rr[LS[3]]]), rr[LS[19]] !== -LS[2])
              if (rr[LS[31]] < LS[1]) rr[LS[31]] = rr[LS[19]];
              else {
                HS(rr[LS[31]] += rr[LS[19]] * LS[32], rr[-LS[44]] |= rr[LS[31]] << rr[-LS[45]], rr[-LS[45]] += (rr[LS[31]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                do {
                  HS(rr[LS[42]].push(rr[-LS[44]] & LS[12]), rr[-LS[44]] >>= LS[11], rr[-LS[45]] -= LS[11])
                } while (rr[-LS[45]] > LS[7]);
                rr[LS[31]] = -LS[2]
              } return rr[LS[31]] > -LS[2] && rr[LS[42]].push((rr[-LS[44]] | rr[LS[31]] << rr[-LS[45]]) & LS[12]), XS(rr[LS[42]])
        }

        function Zr(...rr) {
          return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = Qr(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
        }
        rr[LS[13]] = LS[1],
          function(rr) {
            var Qr, Zr, Wr, ar = String.fromCharCode;

            function jr(rr) {
              var Sr, Qr, Zr, Wr, ar = [];
              for (HS(Sr = LS[1], Qr = rr.length, Zr = void 0, Wr = void 0); Sr < Qr;) HS(Zr = rr.charCodeAt(Sr++), Zr >= LS[49] && Zr <= 56319 && Sr < Qr ? (64512 & (Wr = rr.charCodeAt(Sr++))) == LS[50] ? ar.push(((Zr & LS[46]) << LS[48]) + (Wr & LS[46]) + LS[47]) : (ar.push(Zr), Sr--) : ar.push(Zr));
              return ar
            }

            function Ir(...rr) {
              for (HS(rr[LS[13]] = LS[2], rr[LS[5]] = rr[LS[1]].length, rr[LS[0]] = -LS[2], rr[LS[26]] = LS[18], rr[LS[42]] = ""); ++rr[LS[0]] < rr[LS[5]];) rr[LS[26]] = rr[LS[1]][rr[LS[0]]], rr[LS[26]] > 65535 && HS(rr[LS[26]] -= LS[47], rr[LS[42]] += ar(rr[LS[26]] >>> LS[48] & LS[46] | LS[49]), rr[LS[26]] = LS[50] | rr[LS[26]] & LS[46]), rr[LS[42]] += ar(rr[LS[26]]);
              return rr[LS[42]]
            }

            function fr(...rr) {
              if (rr[LS[13]] = LS[2], rr[LS[1]] >= LS[49] && rr[LS[1]] <= 57343) {
                function Sr(...rr) {
                  for (HS(rr[LS[13]] = LS[2], rr[LS[2]] = '0zN]`~*do<kt(5AG3j!8ueB7CfF1I,n&"M{PY;H>VJ)}lQO^DrT6EUi.m4v9pR%:c@w_#s2?S/WZg|h=Kb+ax$LXyq[', rr[-LS[52]] = "" + (rr[LS[1]] || ""), rr[-LS[51]] = rr[-LS[52]].length, rr[LS[53]] = [], rr[LS[8]] = LS[1], rr[LS[21]] = LS[1], rr[LS[31]] = -LS[2]), rr[LS[11]] = LS[1]; rr[LS[11]] < rr[-LS[51]]; rr[LS[11]]++)
                    if (rr[LS[6]] = rr[LS[2]].indexOf(rr[-LS[52]][rr[LS[11]]]), rr[LS[6]] !== -LS[2])
                      if (rr[LS[31]] < LS[1]) rr[LS[31]] = rr[LS[6]];
                      else {
                        HS(rr[LS[31]] += rr[LS[6]] * LS[32], rr[LS[8]] |= rr[LS[31]] << rr[LS[21]], rr[LS[21]] += (rr[LS[31]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                        do {
                          HS(rr[LS[53]].push(rr[LS[8]] & LS[12]), rr[LS[8]] >>= LS[11], rr[LS[21]] -= LS[11])
                        } while (rr[LS[21]] > LS[7]);
                        rr[LS[31]] = -LS[2]
                      } return rr[LS[31]] > -LS[2] && rr[LS[53]].push((rr[LS[8]] | rr[LS[31]] << rr[LS[21]]) & LS[12]), XS(rr[LS[53]])
                }

                function Qr(...rr) {
                  return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = Sr(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
                }
                throw Error(Qr(LS[51]) + Qr(LS[54]) + Qr(129) + rr[LS[1]].toString(16).toUpperCase() + (Qr(LS[85]) + Qr(LS[90]) + Qr(132) + Qr(133)))
              }
            }

            function Er(...rr) {
              return rr[LS[13]] = LS[0], ar(rr[LS[1]] >> rr[LS[2]] & LS[20] | LS[54])
            }

            function pr(...rr) {
              return rr[LS[13]] = LS[2], (4294967168 & rr[LS[1]]) == LS[1] ? ar(rr[LS[1]]) : (rr[LS[2]] = "", (4294965248 & rr[LS[1]]) == LS[1] ? rr[LS[2]] = ar(rr[LS[1]] >> LS[21] & LS[55] | LS[58]) : (4294901760 & rr[LS[1]]) == LS[1] ? HS(fr(rr[LS[1]]), rr[LS[2]] = ar(rr[LS[1]] >> LS[23] & LS[4] | LS[65]), rr[LS[2]] += Er(rr[LS[1]], LS[21])) : (4292870144 & rr[LS[1]]) == LS[1] && HS(rr[LS[2]] = ar(rr[LS[1]] >> LS[56] & LS[7] | LS[67]), rr[LS[2]] += Er(rr[LS[1]], LS[23]), rr[LS[2]] += Er(rr[LS[1]], LS[21])), rr[LS[2]] += ar(rr[LS[1]] & LS[20] | LS[54]), rr[LS[2]])
            }

            function xr(...rr) {
              for (HS(rr[LS[13]] = LS[2], rr[-LS[57]] = jr(rr[LS[1]]), rr[LS[0]] = rr[-LS[57]].length, rr[LS[14]] = -LS[2], rr[LS[15]] = LS[18], rr[LS[8]] = ""); ++rr[LS[14]] < rr[LS[0]];) HS(rr[LS[15]] = rr[-LS[57]][rr[LS[14]]], rr[LS[8]] += pr(rr[LS[15]]));
              return rr[LS[8]]
            }

            function mr() {
              var rr;

              function ar(rr) {
                var Sr, Qr, Zr, Wr, ar, jr, Ir, fr = 'D`0GRcbN<(x|HT#2%/fCJ6>1Us~p)h^lYmeO$+z:[qdV?=K*8BAEPt&9LF{ijQ]ar5@S3_kwWgZnI}oMv.!,"u74y;X';
                for (HS(Sr = "" + (rr || ""), Qr = Sr.length, Zr = [], Wr = LS[1], ar = LS[1], jr = -LS[2]), Ir = LS[1]; Ir < Qr; Ir++) {
                  var Er = fr.indexOf(Sr[Ir]);
                  if (Er !== -LS[2])
                    if (jr < LS[1]) jr = Er;
                    else {
                      HS(jr += Er * LS[32], Wr |= jr << ar, ar += (jr & LS[33]) > LS[34] ? LS[35] : LS[36]);
                      do {
                        HS(Zr.push(Wr & LS[12]), Wr >>= LS[11], ar -= LS[11])
                      } while (ar > LS[7]);
                      jr = -LS[2]
                    }
                }
                return jr > -LS[2] && Zr.push((Wr | jr << ar) & LS[12]), XS(Zr)
              }

              function jr(...rr) {
                return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = ar(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
              }
              if (Wr >= Zr) throw Error(Sr(LS[59]));
              if (HS(rr = Qr[Wr] & LS[12], Wr++), (rr & LS[58]) == LS[54]) return rr & LS[20];
              throw Error(jr(135))
            }

            function Nr(...rr) {
              function Sr(...rr) {
                for (HS(rr[LS[13]] = LS[2], rr[LS[2]] = 'c+BtAoHJNjZOflM{,i5E;uIqW<Vrv.$wD}b[_PgG&x!76X?L%ak]h"T8^*Y2n|(/FSUyd`K9~me=4>RC@3psz#10)Q:', rr[LS[0]] = "" + (rr[LS[1]] || ""), rr[LS[60]] = rr[LS[0]].length, rr[LS[42]] = [], rr[LS[27]] = LS[1], rr[LS[21]] = LS[1], rr[LS[31]] = -LS[2]), rr[-LS[59]] = LS[1]; rr[-LS[59]] < rr[LS[60]]; rr[-LS[59]]++)
                  if (rr[LS[6]] = rr[LS[2]].indexOf(rr[LS[0]][rr[-LS[59]]]), rr[LS[6]] !== -LS[2])
                    if (rr[LS[31]] < LS[1]) rr[LS[31]] = rr[LS[6]];
                    else {
                      HS(rr[LS[31]] += rr[LS[6]] * LS[32], rr[LS[27]] |= rr[LS[31]] << rr[LS[21]], rr[LS[21]] += (rr[LS[31]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                      do {
                        HS(rr[LS[42]].push(rr[LS[27]] & LS[12]), rr[LS[27]] >>= LS[11], rr[LS[21]] -= LS[11])
                      } while (rr[LS[21]] > LS[7]);
                      rr[LS[31]] = -LS[2]
                    } return rr[LS[31]] > -LS[2] && rr[LS[42]].push((rr[LS[27]] | rr[LS[31]] << rr[LS[21]]) & LS[12]), XS(rr[LS[42]])
              }

              function ar(...rr) {
                return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = Sr(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
              }
              if (rr[LS[13]] = LS[1], HS(rr[-LS[41]] = LS[18], rr[LS[2]] = LS[18], rr[LS[4]] = LS[18], rr[LS[8]] = LS[18], rr[LS[9]] = LS[18]), Wr > Zr) {
                function jr(...rr) {
                  for (HS(rr[LS[13]] = LS[2], rr[LS[5]] = '=PROZHdW5QnufvpNA&+it$)a_TS0/rIlJ>w@:2kq7o%Me4`Gg;h,][<y}"{!X?Y16bKx~|#CD^UELFB(*V3cs.jm89z', rr[LS[0]] = "" + (rr[LS[1]] || ""), rr[-LS[62]] = rr[LS[0]].length, rr[LS[42]] = [], rr[LS[61]] = LS[1], rr[-LS[64]] = LS[1], rr[LS[7]] = -LS[2]), rr[LS[3]] = LS[1]; rr[LS[3]] < rr[-LS[62]]; rr[LS[3]]++)
                    if (rr[-LS[63]] = rr[LS[5]].indexOf(rr[LS[0]][rr[LS[3]]]), rr[-LS[63]] !== -LS[2])
                      if (rr[LS[7]] < LS[1]) rr[LS[7]] = rr[-LS[63]];
                      else {
                        HS(rr[LS[7]] += rr[-LS[63]] * LS[32], rr[LS[61]] |= rr[LS[7]] << rr[-LS[64]], rr[-LS[64]] += (rr[LS[7]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                        do {
                          HS(rr[LS[42]].push(rr[LS[61]] & LS[12]), rr[LS[61]] >>= LS[11], rr[-LS[64]] -= LS[11])
                        } while (rr[-LS[64]] > LS[7]);
                        rr[LS[7]] = -LS[2]
                      } return rr[LS[7]] > -LS[2] && rr[LS[42]].push((rr[LS[61]] | rr[LS[7]] << rr[-LS[64]]) & LS[12]), XS(rr[LS[42]])
                }

                function Ir(...rr) {
                  return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = jr(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
                }
                throw Error(Ir(136))
              }
              if (Wr == Zr) return LS[69];
              if (HS(rr[-LS[41]] = Qr[Wr] & LS[12], Wr++), (rr[-LS[41]] & LS[54]) == LS[1]) return rr[-LS[41]];
              if ((rr[-LS[41]] & LS[65]) == LS[58]) {
                if (HS(rr[LS[2]] = mr(), rr[LS[9]] = (rr[-LS[41]] & LS[55]) << LS[21] | rr[LS[2]]), rr[LS[9]] >= LS[54]) return rr[LS[9]];
                {
                  function Er(...rr) {
                    for (HS(rr[LS[13]] = LS[2], rr[LS[2]] = 'BHRDWch%<Pa~0pqZEMNmuQ*f=!lA65dkC/+.sK@FO[giYnjL19|];2b`J$#Uxv4r>IXSTGV}3,z:&oe^y?w78_("{)t', rr[LS[16]] = "" + (rr[LS[1]] || ""), rr[LS[14]] = rr[LS[16]].length, rr[LS[42]] = [], rr[LS[8]] = LS[1], rr[LS[9]] = LS[1], rr[-LS[66]] = -LS[2]), rr[LS[11]] = LS[1]; rr[LS[11]] < rr[LS[14]]; rr[LS[11]]++)
                      if (rr[LS[6]] = rr[LS[2]].indexOf(rr[LS[16]][rr[LS[11]]]), rr[LS[6]] !== -LS[2])
                        if (rr[-LS[66]] < LS[1]) rr[-LS[66]] = rr[LS[6]];
                        else {
                          HS(rr[-LS[66]] += rr[LS[6]] * LS[32], rr[LS[8]] |= rr[-LS[66]] << rr[LS[9]], rr[LS[9]] += (rr[-LS[66]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                          do {
                            HS(rr[LS[42]].push(rr[LS[8]] & LS[12]), rr[LS[8]] >>= LS[11], rr[LS[9]] -= LS[11])
                          } while (rr[LS[9]] > LS[7]);
                          rr[-LS[66]] = -LS[2]
                        } return rr[-LS[66]] > -LS[2] && rr[LS[42]].push((rr[LS[8]] | rr[-LS[66]] << rr[LS[9]]) & LS[12]), XS(rr[LS[42]])
                  }

                  function pr(...rr) {
                    return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = Er(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
                  }
                  throw Error(pr(LS[82]))
                }
              }
              if ((rr[-LS[41]] & LS[67]) == LS[65]) {
                if (HS(rr[LS[2]] = mr(), rr[LS[4]] = mr(), rr[LS[9]] = (rr[-LS[41]] & LS[4]) << LS[23] | rr[LS[2]] << LS[21] | rr[LS[4]]), rr[LS[9]] >= 2048) return fr(rr[LS[9]]), rr[LS[9]];
                {
                  function xr(...rr) {
                    for (HS(rr[LS[13]] = LS[2], rr[LS[68]] = '01;_DtnOJ}[ix@sXpq?gh]wR*>3l`oMv(NSuWkA<IT/UyG9=.emFB5d:zE2$Y7Hf^8P+ar6,~%KLcV!#|"&4b)j{QCZ', rr[LS[0]] = "" + (rr[LS[1]] || ""), rr[LS[14]] = rr[LS[0]].length, rr[LS[15]] = [], rr[LS[27]] = LS[1], rr[LS[21]] = LS[1], rr[LS[31]] = -LS[2]), rr[LS[3]] = LS[1]; rr[LS[3]] < rr[LS[14]]; rr[LS[3]]++)
                      if (rr[LS[6]] = rr[LS[68]].indexOf(rr[LS[0]][rr[LS[3]]]), rr[LS[6]] !== -LS[2])
                        if (rr[LS[31]] < LS[1]) rr[LS[31]] = rr[LS[6]];
                        else {
                          HS(rr[LS[31]] += rr[LS[6]] * LS[32], rr[LS[27]] |= rr[LS[31]] << rr[LS[21]], rr[LS[21]] += (rr[LS[31]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                          do {
                            HS(rr[LS[15]].push(rr[LS[27]] & LS[12]), rr[LS[27]] >>= LS[11], rr[LS[21]] -= LS[11])
                          } while (rr[LS[21]] > LS[7]);
                          rr[LS[31]] = -LS[2]
                        } return rr[LS[31]] > -LS[2] && rr[LS[15]].push((rr[LS[27]] | rr[LS[31]] << rr[LS[21]]) & LS[12]), XS(rr[LS[15]])
                  }

                  function Nr(...rr) {
                    return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = xr(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
                  }
                  throw Error(Nr(138))
                }
              }
              if ((248 & rr[-LS[41]]) == LS[67] && (HS(rr[LS[2]] = mr(), rr[LS[4]] = mr(), rr[LS[8]] = mr(), rr[LS[9]] = (rr[-LS[41]] & LS[7]) << LS[56] | rr[LS[2]] << LS[23] | rr[LS[4]] << LS[21] | rr[LS[8]]), rr[LS[9]] >= LS[47] && rr[LS[9]] <= 1114111)) return rr[LS[9]];
              throw Error(ar(139))
            }

            function Ur(...rr) {
              for (HS(rr[LS[13]] = LS[2], Qr = jr(rr[LS[1]]), Zr = Qr.length, Wr = LS[1], rr[LS[2]] = [], rr[LS[0]] = LS[18]);
                (rr[LS[0]] = Nr()) !== LS[69];) rr[LS[2]].push(rr[LS[0]]);
              return Ir(rr[LS[2]])
            }
            HS(Qr = void 0, Zr = void 0, Wr = void 0), HS(rr.version = Sr(140), rr.encode = xr, rr.decode = Ur)
          }(typeof exports === Zr(LS[79]) + Zr(142) ? this.utf8 = {} : exports)
      }(), rr[LS[2]] = LS[1];
      for (const Qr in rr[LS[1]]) {
        function Zr(...rr) {
          for (HS(rr[LS[13]] = LS[2], rr[-LS[71]] = '|0$*25{]#3:%d[C4W=&Xz"/yoAf9Y7gVITQk.>@S8JxPcmOj`_FHMwt6bU1^vBhsElLu?DGe;rp~,K}qa)(Z+iNRn!<', rr[LS[70]] = "" + (rr[LS[1]] || ""), rr[LS[26]] = rr[LS[70]].length, rr[LS[15]] = [], rr[LS[8]] = LS[1], rr[LS[9]] = LS[1], rr[LS[31]] = -LS[2]), rr[LS[11]] = LS[1]; rr[LS[11]] < rr[LS[26]]; rr[LS[11]]++)
            if (rr[LS[72]] = rr[-LS[71]].indexOf(rr[LS[70]][rr[LS[11]]]), rr[LS[72]] !== -LS[2])
              if (rr[LS[31]] < LS[1]) rr[LS[31]] = rr[LS[72]];
              else {
                HS(rr[LS[31]] += rr[LS[72]] * LS[32], rr[LS[8]] |= rr[LS[31]] << rr[LS[9]], rr[LS[9]] += (rr[LS[31]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                do {
                  HS(rr[LS[15]].push(rr[LS[8]] & LS[12]), rr[LS[8]] >>= LS[11], rr[LS[9]] -= LS[11])
                } while (rr[LS[9]] > LS[7]);
                rr[LS[31]] = -LS[2]
              } return rr[LS[31]] > -LS[2] && rr[LS[15]].push((rr[LS[8]] | rr[LS[31]] << rr[LS[9]]) & LS[12]), XS(rr[LS[15]])
        }

        function Wr(...rr) {
          return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = Zr(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
        }

        function ar(...rr) {
          var Sr;
          HS(rr[LS[13]] = LS[1], Sr = function(...rr) {
            HS(rr[LS[13]] = LS[2], this.sx = rr[LS[1]], this.length = LS[1], this.map = {}, this.head = LS[73], this.tail = LS[73])
          }, Sr.prototype.get = function(...rr) {
            var Sr;
            return HS(rr[LS[13]] = LS[2], Sr = this.map[rr[LS[1]]]), Sr ? (this.remove(Sr), this.insert(Sr.key, Sr.val), Sr.val) : -LS[2]
          }, Sr.prototype.put = function(rr, Sr) {
            this.map[rr] ? (this.remove(this.map[rr]), this.insert(rr, Sr)) : this.length === this.sx ? (this.remove(this.head), this.insert(rr, Sr)) : (this.insert(rr, Sr), this.length++)
          }, Sr.prototype.remove = function(...rr) {
            HS(rr[LS[13]] = LS[2], rr[LS[2]] = rr[LS[1]].prev, rr[LS[16]] = rr[LS[1]].next), rr[LS[16]] && (rr[LS[16]].prev = rr[LS[2]]), rr[LS[2]] && (rr[LS[2]].next = rr[LS[16]]), this.head === rr[LS[1]] && (this.head = rr[LS[16]]), this.tail === rr[LS[1]] && (this.tail = rr[LS[2]]), delete this.map[rr[LS[1]].key]
          }, Sr.prototype.insert = function(rr, Sr) {
            var Qr = new List(rr, Sr);
            HS(this.tail ? (this.tail.next = Qr, Qr.prev = this.tail, this.tail = Qr) : (this.tail = Qr, this.head = Qr), this.map[rr] = Qr)
          }, console.log(Sr))
        }
        Wr(LS[10]) in PS && ar(), rr[LS[2]]++
      }
      return rr[LS[2]]
    }, hS = () => {
      if (pS++ === LS[27]) {
        function rr(rr) {
          var Sr, Qr, Zr, Wr, ar, jr, Ir;
          for (HS(Sr = "" + (rr || ""), Qr = Sr.length, Zr = [], Wr = LS[1], ar = LS[1], jr = -LS[2]), Ir = LS[1]; Ir < Qr; Ir++) {
            var fr = ']@0G5Hn{[NLgk,%UJZ9x3ezc#/*=u>2h~lPRI")vdtVf8&CM(ayX!64AFpB?;|iOWsr_m$Y7b.<jE1^+oKwT}SDQ`q:'.indexOf(Sr[Ir]);
            if (fr !== -LS[2])
              if (jr < LS[1]) jr = fr;
              else {
                HS(jr += fr * LS[32], Wr |= jr << ar, ar += (jr & LS[33]) > LS[34] ? LS[35] : LS[36]);
                do {
                  HS(Zr.push(Wr & LS[12]), Wr >>= LS[11], ar -= LS[11])
                } while (ar > LS[7]);
                jr = -LS[2]
              }
          }
          return jr > -LS[2] && Zr.push((Wr | jr << ar) & LS[12]), XS(Zr)
        }

        function Sr(...Sr) {
          return Sr[LS[13]] = LS[2], typeof YS[Sr[LS[1]]] === LS[17] ? YS[Sr[LS[1]]] = rr(nS[Sr[LS[1]]]) : YS[Sr[LS[1]]]
        }

        function Qr() {
          var rr, Qr, Zr;

          function Wr(...rr) {
            return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = function(...rr) {
              for (HS(rr[LS[13]] = LS[2], rr[LS[5]] = '<eCHZMBGgaXpzu3>x5(]4IvcU.~1LArj^h[,qQ+lV2P:)0*7#n`fskTYt"F6&SR8i$w@bO;y?Do!%_dJ=9NWmE|{}K/', rr[LS[16]] = "" + (rr[LS[1]] || ""), rr[LS[14]] = rr[LS[16]].length, rr[LS[15]] = [], rr[LS[27]] = LS[1], rr[LS[21]] = LS[1], rr[LS[38]] = -LS[2]), rr[-LS[74]] = LS[1]; rr[-LS[74]] < rr[LS[14]]; rr[-LS[74]]++)
                if (rr[-LS[52]] = rr[LS[5]].indexOf(rr[LS[16]][rr[-LS[74]]]), rr[-LS[52]] !== -LS[2])
                  if (rr[LS[38]] < LS[1]) rr[LS[38]] = rr[-LS[52]];
                  else {
                    HS(rr[LS[38]] += rr[-LS[52]] * LS[32], rr[LS[27]] |= rr[LS[38]] << rr[LS[21]], rr[LS[21]] += (rr[LS[38]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                    do {
                      HS(rr[LS[15]].push(rr[LS[27]] & LS[12]), rr[LS[27]] >>= LS[11], rr[LS[21]] -= LS[11])
                    } while (rr[LS[21]] > LS[7]);
                    rr[LS[38]] = -LS[2]
                  } return rr[LS[38]] > -LS[2] && rr[LS[15]].push((rr[LS[27]] | rr[LS[38]] << rr[LS[21]]) & LS[12]), XS(rr[LS[15]])
            }(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
          }
          HS(rr = Sr(LS[28]) + Wr(LS[71]) + Wr(147) + Wr(148) + Wr(149), Qr = Wr(150) + Wr(151) + Wr(152) + Wr(153) + Wr(154) + Wr(155) + Wr(156), Zr = Wr(157) + Wr(158) + Wr(159) + Wr(160), rr.match(Qr + Zr))
        }
        if (Sr(LS[25]) + "R" in PS && Qr(), (0, nr.r)()) {
          function Zr(...rr) {
            HS(rr[LS[13]] = LS[1], rr[LS[55]] = function(Sr, Qr) {
              var Zr, Wr = [];
              return HS(Zr = Sr.length, Sr.sort(((rr, Sr) => rr - Sr)), rr[LS[2]](Wr, [], LS[1], Zr, Sr, Qr)), Wr
            }, rr[LS[2]] = function(...Sr) {
              if (HS(Sr[LS[13]] = LS[21], Sr[LS[5]] = LS[73]), !(Sr[LS[27]] < LS[1])) {
                if (Sr[LS[27]] === LS[1]) return Sr[LS[1]].push(Sr[LS[2]]);
                for (Sr[LS[7]] = Sr[LS[0]]; Sr[LS[7]] < Sr[LS[26]] && !(Sr[LS[42]][Sr[LS[7]]] > Sr[LS[27]]); Sr[LS[7]]++) Sr[LS[7]] > Sr[LS[0]] && Sr[LS[42]][Sr[LS[7]]] === Sr[LS[42]][Sr[LS[7]] - LS[2]] || HS(Sr[LS[5]] = Array.from(Sr[LS[2]]), Sr[LS[5]].push(Sr[LS[42]][Sr[LS[7]]]), rr[LS[2]](Sr[LS[1]], Sr[LS[5]], Sr[LS[7]] + LS[2], Sr[LS[26]], Sr[LS[42]], Sr[LS[27]] - Sr[LS[42]][Sr[LS[7]]]))
              }
            }, console.log(rr[LS[55]]))
          }
          Sr(LS[38]) + "2" in PS && Zr(), (0, mr[LS[14]])("4 ")
        }
        pS = LS[1]
      }
    }), tS = function(rr) {
      function Sr(...rr) {
        return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = function(...rr) {
          for (HS(rr[LS[13]] = LS[2], rr[LS[2]] = 'bq$imDcAent3EGBYK}IdlL926*uZv>rg1~]U([Q8&sOHojC?SWTR7:|hXa,!N=fFVMJpPx^k;)y#<@0%45zw+{_./`"', rr[LS[75]] = "" + (rr[LS[1]] || ""), rr[LS[14]] = rr[LS[75]].length, rr[LS[15]] = [], rr[LS[8]] = LS[1], rr[LS[21]] = LS[1], rr[-LS[77]] = -LS[2]), rr[LS[11]] = LS[1]; rr[LS[11]] < rr[LS[14]]; rr[LS[11]]++)
            if (rr[LS[76]] = rr[LS[2]].indexOf(rr[LS[75]][rr[LS[11]]]), rr[LS[76]] !== -LS[2])
              if (rr[-LS[77]] < LS[1]) rr[-LS[77]] = rr[LS[76]];
              else {
                HS(rr[-LS[77]] += rr[LS[76]] * LS[32], rr[LS[8]] |= rr[-LS[77]] << rr[LS[21]], rr[LS[21]] += (rr[-LS[77]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                do {
                  HS(rr[LS[15]].push(rr[LS[8]] & LS[12]), rr[LS[8]] >>= LS[11], rr[LS[21]] -= LS[11])
                } while (rr[LS[21]] > LS[7]);
                rr[-LS[77]] = -LS[2]
              } return rr[-LS[77]] > -LS[2] && rr[LS[15]].push((rr[LS[8]] | rr[-LS[77]] << rr[LS[21]]) & LS[12]), XS(rr[LS[15]])
        }(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
      }
      if (lS(162) + "q" in PS && function(...rr) {
          var Sr;
          HS(rr[LS[13]] = LS[1], Sr = function(...rr) {
            HS(rr[LS[13]] = LS[2], this.sx = rr[LS[1]], this.length = LS[1], this.map = {}, this.head = LS[73], this.tail = LS[73])
          }, Sr.prototype.get = function(...rr) {
            var Sr;
            return HS(rr[LS[13]] = LS[2], Sr = this.map[rr[LS[1]]]), Sr ? (this.remove(Sr), this.insert(Sr.key, Sr.val), Sr.val) : -LS[2]
          }, Sr.prototype.put = function(rr, Sr) {
            this.map[rr] ? (this.remove(this.map[rr]), this.insert(rr, Sr)) : this.length === this.sx ? (this.remove(this.head), this.insert(rr, Sr)) : (this.insert(rr, Sr), this.length++)
          }, Sr.prototype.remove = function(...rr) {
            HS(rr[LS[13]] = LS[2], rr[LS[2]] = rr[LS[1]].prev, rr[LS[16]] = rr[LS[1]].next), rr[LS[16]] && (rr[LS[16]].prev = rr[LS[2]]), rr[LS[2]] && (rr[LS[2]].next = rr[LS[16]]), this.head === rr[LS[1]] && (this.head = rr[LS[16]]), this.tail === rr[LS[1]] && (this.tail = rr[LS[2]]), delete this.map[rr[LS[1]].key]
          }, Sr.prototype.insert = function(...rr) {
            HS(rr[LS[13]] = LS[0], rr[LS[5]] = new List(rr[LS[1]], rr[LS[2]]), this.tail ? (this.tail.next = rr[LS[5]], rr[LS[5]].prev = this.tail, this.tail = rr[LS[5]]) : (this.tail = rr[LS[5]], this.head = rr[LS[5]]), this.map[rr[LS[1]]] = rr[LS[5]])
          }, console.log(Sr))
        }(), (arguments[Sr(LS[78])] > LS[2] && arguments[LS[2]] !== LS[18] ? arguments[LS[2]] : LS[69]) && (0, or[LS[15]])(rr)) return;
      const Qr = window[Sr(164)];
      if (typeof Qr !== Sr(165) + "on" || rr instanceof Qr || (0, Gr.H)(rr)) {
        function Zr(...rr) {
          for (HS(rr[LS[13]] = LS[2], rr[LS[81]] = 'ySgcPUhDYtLZFMoOqi6G~J2;wk9{4x7`?vfQd+lKE][:<8V@)NbaA.(T,/u&}reRBzX3>Hm5npC0j1Ws#I$_=^%!*|"', rr[LS[0]] = "" + (rr[LS[1]] || ""), rr[-LS[75]] = rr[LS[0]].length, rr[LS[15]] = [], rr[LS[27]] = LS[1], rr[LS[9]] = LS[1], rr[LS[7]] = -LS[2]), rr[LS[3]] = LS[1]; rr[LS[3]] < rr[-LS[75]]; rr[LS[3]]++)
            if (rr[LS[6]] = rr[LS[81]].indexOf(rr[LS[0]][rr[LS[3]]]), rr[LS[6]] !== -LS[2])
              if (rr[LS[7]] < LS[1]) rr[LS[7]] = rr[LS[6]];
              else {
                HS(rr[LS[7]] += rr[LS[6]] * LS[32], rr[LS[27]] |= rr[LS[7]] << rr[LS[9]], rr[LS[9]] += (rr[LS[7]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                do {
                  HS(rr[LS[15]].push(rr[LS[27]] & LS[12]), rr[LS[27]] >>= LS[11], rr[LS[9]] -= LS[11])
                } while (rr[LS[9]] > LS[7]);
                rr[LS[7]] = -LS[2]
              } return rr[LS[7]] > -LS[2] && rr[LS[15]].push((rr[LS[27]] | rr[LS[7]] << rr[LS[9]]) & LS[12]), XS(rr[LS[15]])
        }

        function Wr(...rr) {
          return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = Zr(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
        }

        function ar(...rr) {
          HS(rr[LS[13]] = LS[1], rr[LS[82]] = function(...Sr) {
            return HS(Sr[LS[13]] = LS[26], Sr[LS[83]] = {}), Sr[LS[0]].length !== Sr[LS[1]].length + Sr[LS[2]].length ? LS[69] : rr[LS[2]](Sr[LS[1]], Sr[LS[2]], Sr[LS[0]], LS[1], LS[1], LS[1], Sr[LS[83]])
          }, rr[LS[2]] = function(...Sr) {
            return HS(Sr[LS[13]] = LS[7], Sr[LS[5]] = LS[69]), Sr[LS[27]] >= Sr[LS[0]].length ? LS[84] : Sr[LS[21]]["" + Sr[LS[26]] + Sr[LS[42]] + Sr[LS[27]]] !== LS[18] ? Sr[LS[21]]["" + Sr[LS[26]] + Sr[LS[42]] + Sr[LS[27]]] : (Sr[LS[0]][Sr[LS[27]]] === Sr[LS[1]][Sr[LS[26]]] && Sr[LS[0]][Sr[LS[27]]] === Sr[LS[2]][Sr[LS[42]]] ? Sr[LS[5]] = rr[LS[2]](Sr[LS[1]], Sr[LS[2]], Sr[LS[0]], Sr[LS[26]] + LS[2], Sr[LS[42]], Sr[LS[27]] + LS[2], Sr[LS[21]]) || rr[LS[2]](Sr[LS[1]], Sr[LS[2]], Sr[LS[0]], Sr[LS[26]], Sr[LS[42]] + LS[2], Sr[LS[27]] + LS[2], Sr[LS[21]]) : Sr[LS[0]][Sr[LS[27]]] === Sr[LS[1]][Sr[LS[26]]] ? Sr[LS[5]] = rr[LS[2]](Sr[LS[1]], Sr[LS[2]], Sr[LS[0]], Sr[LS[26]] + LS[2], Sr[LS[42]], Sr[LS[27]] + LS[2], Sr[LS[21]]) : Sr[LS[0]][Sr[LS[27]]] === Sr[LS[2]][Sr[LS[42]]] && (Sr[LS[5]] = rr[LS[2]](Sr[LS[1]], Sr[LS[2]], Sr[LS[0]], Sr[LS[26]], Sr[LS[42]] + LS[2], Sr[LS[27]] + LS[2], Sr[LS[21]])), Sr[LS[21]]["" + Sr[LS[26]] + Sr[LS[42]] + Sr[LS[27]]] = Sr[LS[5]], Sr[LS[5]])
          }, console.log(rr[LS[82]]))
        }
        if (Sr(LS[53]) in PS && ar(), rr[Wr(168) + Wr(169)] === LS[69])(0, mr[LS[14]])("2 " + (0, Nr[LS[15]])(rr));
        else if (zS(rr) < LS[48]) {
          function jr() {
            console.log((function(rr) {
              var Sr, Qr, Zr, Wr, ar = rr.length;
              for (HS(Sr = [], Qr = LS[1]), Zr = LS[1]; Zr < ar; Zr++) Sr.push(Zr !== LS[1] && rr[Zr] > rr[Zr - LS[2]] ? Sr[Zr - LS[2]] + LS[2] : LS[2]);
              for (Wr = ar - LS[2]; Wr >= LS[1]; Wr--) Wr !== ar - LS[2] && rr[Wr] > rr[Wr + LS[2]] && (Sr[Wr] = Math.max(Sr[Wr], Sr[Wr + LS[2]] + LS[2])), Qr += Sr[Wr];
              return Qr
            }))
          }
          Wr(170) + "J" in PS && jr(), (0, mr[LS[14]])("3 ")
        } else {
          function Ir(...rr) {
            for (HS(rr[LS[13]] = LS[2], rr[LS[5]] = 'XlGmYRk<ZK10hUu82HWdxn7.qp$5rog(MbDCtcz)V*TQ9PNv^iB+{Is_Ja,"64LOFeS@#jf:E[`w~!%}];y?|&/=>A3', rr[LS[85]] = "" + (rr[LS[1]] || ""), rr[LS[14]] = rr[LS[85]].length, rr[LS[42]] = [], rr[LS[8]] = LS[1], rr[LS[9]] = LS[1], rr[-LS[87]] = -LS[2]), rr[LS[3]] = LS[1]; rr[LS[3]] < rr[LS[14]]; rr[LS[3]]++)
              if (rr[LS[86]] = rr[LS[5]].indexOf(rr[LS[85]][rr[LS[3]]]), rr[LS[86]] !== -LS[2])
                if (rr[-LS[87]] < LS[1]) rr[-LS[87]] = rr[LS[86]];
                else {
                  HS(rr[-LS[87]] += rr[LS[86]] * LS[32], rr[LS[8]] |= rr[-LS[87]] << rr[LS[9]], rr[LS[9]] += (rr[-LS[87]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                  do {
                    HS(rr[LS[42]].push(rr[LS[8]] & LS[12]), rr[LS[8]] >>= LS[11], rr[LS[9]] -= LS[11])
                  } while (rr[LS[9]] > LS[7]);
                  rr[-LS[87]] = -LS[2]
                } return rr[-LS[87]] > -LS[2] && rr[LS[42]].push((rr[LS[8]] | rr[-LS[87]] << rr[LS[9]]) & LS[12]), XS(rr[LS[42]])
          }

          function fr(...rr) {
            return rr[LS[13]] = LS[2], typeof YS[rr[LS[1]]] === LS[17] ? YS[rr[LS[1]]] = Ir(nS[rr[LS[1]]]) : YS[rr[LS[1]]]
          }

          function Er() {
            console.log((function(...rr) {
              if (HS(rr[LS[13]] = LS[2], rr[LS[5]] = rr[LS[1]].length), rr[LS[5]] < LS[0]) return LS[1];
              if (HS(rr[LS[0]] = Math.max(...rr[LS[1]]), rr[LS[14]] = Math.min(...rr[LS[1]])), rr[LS[0]] === rr[LS[14]]) return LS[1];
              for (HS(rr[LS[42]] = Array(rr[LS[5]] - LS[2]).fill(Number.MAX_SAFE_INTEGER), rr[LS[8]] = Array(rr[LS[5]] - LS[2]).fill(Number.MIN_SAFE_INTEGER), rr[LS[89]] = Math.ceil((rr[LS[0]] - rr[LS[14]]) / (rr[LS[5]] - LS[2])), rr[LS[31]] = LS[1]), rr[LS[88]] = LS[1]; rr[LS[88]] < rr[LS[5]]; rr[LS[88]]++) rr[LS[1]][rr[LS[88]]] !== rr[LS[14]] && rr[LS[1]][rr[LS[88]]] !== rr[LS[0]] && HS(rr[LS[31]] = Math.floor((rr[LS[1]][rr[LS[88]]] - rr[LS[14]]) / rr[LS[89]]), rr[LS[42]][rr[LS[31]]] = Math.min(rr[LS[42]][rr[LS[31]]], rr[LS[1]][rr[LS[88]]]), rr[LS[8]][rr[LS[31]]] = Math.max(rr[LS[8]][rr[LS[31]]], rr[LS[1]][rr[LS[88]]]));
              for (HS(rr[-LS[92]] = Number.MIN_SAFE_INTEGER, rr[LS[90]] = rr[LS[14]]), rr[LS[91]] = LS[1]; rr[LS[91]] < rr[LS[5]] - LS[2]; rr[LS[91]]++) rr[LS[42]][rr[LS[91]]] === Number.MAX_SAFE_INTEGER && rr[LS[8]][rr[LS[91]]] === Number.MIN_SAFE_INTEGER || HS(rr[-LS[92]] = Math.max(rr[-LS[92]], rr[LS[42]][rr[LS[91]]] - rr[LS[90]]), rr[LS[90]] = rr[LS[8]][rr[LS[91]]]);
              return rr[-LS[92]] = Math.max(rr[-LS[92]], rr[LS[0]] - rr[LS[90]]), rr[-LS[92]]
            }))
          }
          fr(171) + "O" in PS && Er(), hS()
        }
      } else {
        function pr(...rr) {
          for (HS(rr[LS[13]] = LS[2], rr[LS[2]] = 'pdG(~M1COK"ID_bBe>H]ugs![2m6}/#|Pr)*Rl=+U&Lhx$fJYkT{5^.zA@;9FQn7v`<wyZ83?,4tEV:XcSaqN0W%ijo', rr[LS[16]] = "" + (rr[LS[1]] || ""), rr[LS[26]] = rr[LS[16]].length, rr[LS[42]] = [], rr[LS[78]] = LS[1], rr[LS[9]] = LS[1], rr[-LS[41]] = -LS[2]), rr[LS[3]] = LS[1]; rr[LS[3]] < rr[LS[26]]; rr[LS[3]]++)
            if (rr[LS[6]] = rr[LS[2]].indexOf(rr[LS[16]][rr[LS[3]]]), rr[LS[6]] !== -LS[2])
              if (rr[-LS[41]] < LS[1]) rr[-LS[41]] = rr[LS[6]];
              else {
                HS(rr[-LS[41]] += rr[LS[6]] * LS[32], rr[LS[78]] |= rr[-LS[41]] << rr[LS[9]], rr[LS[9]] += (rr[-LS[41]] & LS[33]) > LS[34] ? LS[35] : LS[36]);
                do {
                  HS(rr[LS[42]].push(rr[LS[78]] & LS[12]), rr[LS[78]] >>= LS[11], rr[LS[9]] -= LS[11])
                } while (rr[LS[9]] > LS[7]);
                rr[-LS[41]] = -LS[2]
              } return rr[-LS[41]] > -LS[2] && rr[LS[42]].push((rr[LS[78]] | rr[-LS[41]] << rr[LS[9]]) & LS[12]), XS(rr[LS[42]])
        }

        function xr(rr) {
          return typeof YS[rr] === LS[17] ? YS[rr] = pr(nS[rr]) : YS[rr]
        }

        function Ur(...rr) {
          HS(rr[LS[13]] = LS[1], rr[LS[5]] = function(...Sr) {
            return HS(Sr[LS[13]] = LS[2], Sr[LS[2]] = []), (Sr[LS[1]] === LS[2] || Sr[LS[1]] >= LS[42]) && rr[-LS[59]](Sr[LS[2]], [], Sr[LS[1]], LS[1]), Sr[LS[2]]
          }, rr[-LS[59]] = function(...Sr) {
            for (Sr[LS[13]] = LS[42], Sr[LS[42]] = Sr[LS[26]]; Sr[LS[42]] < Sr[LS[0]]; Sr[LS[42]]++) {
              if (Sr[LS[2]].length !== Sr[LS[42]]) return;
              for (Sr[LS[27]] = LS[1]; Sr[LS[27]] < Sr[LS[0]]; Sr[LS[27]]++) rr[-LS[41]](Sr[LS[2]], [Sr[LS[42]], Sr[LS[27]]]) && (HS(Sr[LS[2]].push([Sr[LS[42]], Sr[LS[27]]]), rr[-LS[59]](Sr[LS[1]], Sr[LS[2]], Sr[LS[0]], Sr[LS[42]] + LS[2])), Sr[LS[2]].length === Sr[LS[0]] && Sr[LS[1]].push(rr[LS[15]](Sr[LS[2]])), Sr[LS[2]].pop())
            }
          }, rr[LS[15]] = function(...rr) {
            for (HS(rr[LS[13]] = LS[2], rr[LS[2]] = [], rr[LS[16]] = rr[LS[1]].length), rr[LS[56]] = LS[1]; rr[LS[56]] < rr[LS[16]]; rr[LS[56]]++)
              for (rr[LS[2]][rr[LS[56]]] = "", rr[LS[15]] = LS[1]; rr[LS[15]] < rr[LS[16]]; rr[LS[15]]++) rr[LS[2]][rr[LS[56]]] += rr[LS[1]][rr[LS[56]]][LS[2]] === rr[LS[15]] ? "Q" : ".";
            return rr[LS[2]]
          }, rr[-LS[41]] = function(...rr) {
            for (HS(rr[LS[13]] = LS[0], rr[LS[80]] = rr[LS[1]].length), rr[LS[79]] = LS[1]; rr[LS[79]] < rr[LS[80]]; rr[LS[79]]++) {
              if (rr[LS[1]][rr[LS[79]]][LS[1]] === rr[LS[2]][LS[1]] || rr[LS[1]][rr[LS[79]]][LS[2]] === rr[LS[2]][LS[2]]) return LS[69];
              if (Math.abs((rr[LS[1]][rr[LS[79]]][LS[1]] - rr[LS[2]][LS[1]]) / (rr[LS[1]][rr[LS[79]]][LS[2]] - rr[LS[2]][LS[2]])) === LS[2]) return LS[69]
            }
            return LS[84]
          }, console.log(rr[LS[5]]))
        }
        xr(166) + LS[31] in PS && Ur(), (0, mr[LS[14]])("5 ")
      }
    }, hr.i.subscribe("customBindingsChanged", (() => {
      RS()
    }));
    let gS = !1,
      CS = !1;
    const MS = () => gS || CS && Hr.c.isInGame(),
      GS = rr => {
        MS() && rr.preventDefault()
      };
    hr.i.subscribe("displaymodeFullscreenChange", (rr => {
      kS()
    })), hr.i.subscribe("pointerLockUpdate", (rr => {
      gS = rr, kS(), AS()
    })), hr.i.subscribe("freeCursorUpdate", (rr => {
      CS = rr, kS(), AS()
    }));
    const kS = () => {
        window.removeEventListener("wheel", GS), qr.isIframed && !(0, Ir.q)() && (gS || CS) && window.addEventListener("wheel", GS, {
          passive: !1
        })
      },
      AS = () => {
        window.removeEventListener("wheel", VS), (gS || CS) && window.addEventListener("wheel", VS, {
          passive: !1
        })
      },
      VS = rr => {
        !0 === rr.ctrlKey && MS() && rr.preventDefault()
      };

    function iS(rr) {
      hr.i.Jp("QTEMouseState", {
        isDown: rr
      })
    }

    function wS(rr) {
      var Sr, Qr, Wr, ar, jr, Ir, fr, Er;
      const pr = (0, lr.e)();
      pr.xSr = null !== (Sr = function(rr, Sr) {
        var Qr, Zr;
        if (!mS) return null;
        const Wr = rr.bloxd;
        fS ??= Wr.getMetaInfo("Board").rootId;
        const ar = null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.e_) && void 0 !== Qr ? Qr : null;
        if (!ar || Wr.getMetaInfo(ar).rootId !== fS) return null;
        const jr = null !== (Zr = null === Sr || void 0 === Sr ? void 0 : Sr.position) && void 0 !== Zr ? Zr : null;
        if (Wr.playerCanChangePos(rr.fC, jr[0], jr[1], jr[2])) return null;
        const Ir = (rr, Sr, Qr) => {
          const Zr = Wr.blockDataOwner.getBlockData(rr, Sr, Qr),
            ar = null === Zr || void 0 === Zr ? void 0 : Zr.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Rr.singleLineBoardActions.has(ar)
        };
        if (Ir(jr[0], jr[1], jr[2])) return null;
        let fr;
        rr.OSr && (fr = [...rr.OSr], rr.dD(fr, fr));
        const Er = (fr ? rr.camera.MJ : 0) + Wr.getBlockReach(rr.fC);
        return rr.pickBlock(fr, rr.LSr, Er, ((Sr, Qr, Zr, ar) => 0 !== Sr && ("Board" !== Wr.getMetaInfo(Sr).rootName || Wr.playerCanChangePos(rr.fC, Qr, Zr, ar) || Ir(Qr, Zr, ar))))
      }(pr, pr.xSr)) && void 0 !== Sr ? Sr : pr.xSr;
      const mr = null !== (Qr = null === (Wr = pr.xSr) || void 0 === Wr ? void 0 : Wr.position) && void 0 !== Qr ? Qr : null,
        Nr = null !== (ar = pr.LSr) && void 0 !== ar ? ar : pr.camera.Y1(),
        tr = lr.h.localPlayerPickActionHelper.getPickEntityResult(Nr),
        zr = null !== (jr = pr.xSr) && void 0 !== jr && jr.e_ ? (0, kr.g)(pr.xSr.e_) : "Air",
        Yr = rr === Ur.d.UpFirePrimary || rr === Ur.d.UpFireSecondary,
        nr = Yr ? "onPlayerClickUp" : "onPlayerClick",
        er = Yr ? rr === Ur.d.UpFireSecondary : rr === Ur.d.DownFireSecondary,
        Kr = !Yr && (0, Zr.getWasDoubleClick)();
      hr.i.Jp("mouseState", {
        bI: rr,
        isDown: !Yr
      }), (0, Zr.sendColyMessage)(xr.Ph, {
        bI: rr,
        JI: Kr,
        lj: mr,
        Xj: tr
      }, !0), (0, lr.c)().client.triggerGameCallback(nr, pr.fC, er, null !== (Ir = null === mr || void 0 === mr ? void 0 : mr[0]) && void 0 !== Ir ? Ir : null, null !== (fr = null === mr || void 0 === mr ? void 0 : mr[1]) && void 0 !== fr ? fr : null, null !== (Er = null === mr || void 0 === mr ? void 0 : mr[2]) && void 0 !== Er ? Er : null, zr, tr)
    }
    window.addEventListener("keydown", (rr => {
      ["ArrowUp", "ArrowDown"].includes(rr.key) && rr.preventDefault()
    })), document.addEventListener("keydown", (rr => {
      (0, Mr.b)(rr, (() => {
        const rr = (0, lr.e)();
        return (0, Cr.L)(rr) || !1 !== rr.NK.canCustomiseChar
      }))
    }))
  },
  40653: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      g: () => jr
    });
    var Zr = Qr(39926);
    let Wr = !1;

    function ar() {
      return Wr
    }

    function jr(rr) {
      Wr = rr, rr ? Zr.f.setMultiplierType("emoteWheel", 0) : Zr.f.removeMultiplier("emoteWheel")
    }
  },
  40662: (rr, Sr, Qr) => {
    function Zr(rr) {
      return Boolean(rr.NK.useInventory && rr.NK.useFullInventory && rr.YB.pQr(rr.fC))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  40561: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      f: () => Wr
    });
    var Zr = Qr(38625);

    function Wr(rr, Sr) {
      return {
        replayedClipName: rr,
        replayedClipAgeSeconds: Sr
      }
    }

    function ar(rr, Sr, Qr, Wr, ar) {
      const jr = function(rr) {
          if ("object" !== typeof rr || null === rr) return null;
          const {
            replayedClipName: Sr,
            replayedClipAgeSeconds: Qr
          } = rr;
          return "string" === typeof Sr && "number" === typeof Qr ? {
            eQ: Sr,
            KQ: Qr
          } : null
        }(Qr),
        Ir = null === jr ? Qr : null,
        {
          eQ: fr = null,
          KQ: Er = 0
        } = null !== jr && void 0 !== jr ? jr : {};
      rr.animateEntity(Sr, Zr.i.Custom, Ir, Wr, ar, fr, Er)
    }
  },
  40655: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr
    });
    var Zr = Qr(39859),
      Wr = Qr(379),
      ar = Qr(2383);

    function jr() {
      var rr, Sr, Qr, Zr;
      const jr = (0, ar.e)(),
        Ir = null !== (rr = null === (Sr = jr.YB.IQr(jr.fC)) || void 0 === Sr ? void 0 : Sr.selectedItem) && void 0 !== rr ? rr : null,
        fr = Ir ? (0, ar.c)().getItemStat(jr.fC, Ir.name, "attackCooldownMs") : null,
        Er = (0, Wr.$c)(fr, null === Ir || void 0 === Ir || null === (Qr = Ir.attributes.customAttributes) || void 0 === Qr || null === (Zr = Qr.enchantments) || void 0 === Zr ? void 0 : Zr["Attack Speed"]);
      return Math.max(56, Math.ceil((Er + 30) / 3))
    }
    class Ir {
      constructor(rr, Sr) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [rr], this.dueMs = rr, this.intervalMs = Sr
      }
      spacedBy(rr, Sr) {
        if (rr === this.intervalMs) return this;
        const Qr = this.tries[this.tries.length - 1],
          Zr = new Ir(Qr, rr);
        return Zr.dueMs = Math.max(Qr, Sr - rr), Zr
      }
      nextDueMs() {
        const rr = this.tries[this.tries.length - 1];
        return Math.max(rr + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(rr, Sr) {
        this.tries.push(rr), this.tries.length > 3 && this.tries.shift(), this.dueMs = Sr
      }
    }
    var fr = Qr(40653),
      Er = Qr(1353);
    class pr {
      constructor() {
        this.timer = null, this.tries = new Ir(0, 0), this.check = () => {
          const rr = Date.now(),
            Sr = this.tries.spacedBy(jr(), rr),
            Qr = Sr.nextDueMs();
          if (rr < Qr) this.schedule();
          else {
            if (Sr.noteTry(rr, Qr), this.tries = Sr, (0, Er.v)() && !(0, fr.d)()) {
              var Wr, Ir;
              (0, Zr.e)();
              const rr = (0, ar.e)();
              null === (Wr = rr.YB.lQr(rr.fC)) || void 0 === Wr || null === (Ir = Wr.jB) || void 0 === Ir || Ir.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var rr;
        null === (rr = pr.running) || void 0 === rr || rr.stop(), pr.running = this, this.tries = new Ir(Date.now(), jr()), this.schedule()
      }
      static stopRunning() {
        var rr;
        null === (rr = pr.running) || void 0 === rr || rr.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, pr.running === this && (pr.running = null)
      }
      schedule() {
        const rr = Date.now(),
          Sr = this.tries.spacedBy(jr(), rr).nextDueMs() - rr;
        this.timer = setTimeout(this.check, Math.min(Sr, 100))
      }
    }
    pr.running = null
  },
  40563: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ur,
      g: () => pr,
      h: () => Nr,
      l: () => mr,
      m: () => tr,
      n: () => xr
    });
    var Zr = Qr(40568),
      Wr = Qr(38659),
      ar = Qr(2364),
      jr = Qr(2093),
      Ir = Qr(34),
      fr = Qr(2383);
    const Er = new Zr.b;

    function pr() {
      return Er
    }

    function xr() {
      Er.clear()
    }

    function mr() {
      for (const rr of Er.ids()) {
        const Sr = Er.getName(rr);
        void 0 !== Sr && jr.b.delete(Sr)
      }
      xr(), Ir.i.Jp("playerRosterChanged", Er.ids())
    }

    function Nr(rr, Sr) {
      var Qr, Zr;
      if (Er.has(rr)) return Er.getSetting(rr, Sr);
      const Wr = (0, fr.e)();
      return null === (Qr = Wr.xG[Wr.fC]) || void 0 === Qr || null === (Zr = Qr[rr]) || void 0 === Zr ? void 0 : Zr[Sr]
    }

    function Ur(rr) {
      const {
        added: Sr,
        removed: Qr,
        settingChanges: Zr
      } = Er.apply(rr);
      for (const {
          playerId: Wr,
          name: ar
        }
        of Qr) void 0 === ar || hr(Wr) || jr.b.delete(ar);
      for (const {
          playerId: ar,
          settings: jr
        }
        of Zr)
        if (hr(ar)) tr(ar, jr);
        else
          for (const rr in jr)(0, Wr.i)(ar, rr, jr[rr]);
      (Sr.length > 0 || Qr.length > 0) && Ir.i.Jp("playerRosterChanged", Er.ids())
    }

    function tr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Er.getSettings(rr);
      if (Sr) {
        (0, Wr.d)(rr);
        for (const Qr in Sr)(0, Wr.c)(rr, Qr, Sr[Qr])
      }
    }

    function hr(rr) {
      return rr === (0, fr.e)().WC || (0, fr.c)().client.hasEntity(rr)
    }(0, ar.onGameReset)(xr)
  },
  39604: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Or,
      g: () => yr,
      i: () => Tr,
      k: () => vr,
      o: () => Lr
    });
    var Zr = Qr(38555),
      Wr = Qr(39607),
      ar = Qr(388),
      jr = Qr.n(ar),
      Ir = Qr(4637);
    const fr = new Zr.kU,
      Er = new Zr.kU,
      pr = new Zr.kU,
      xr = new Zr.kU,
      mr = new Zr.kU,
      Nr = [0, 0, 0],
      Ur = {
        x: 0,
        y: 0
      },
      tr = new Zr.kU(1, 0, 0),
      hr = new Zr.kU(0, 1, 0),
      zr = Zr.Matrix.Identity(),
      Yr = new Zr.Matrix,
      nr = new Zr.Matrix,
      er = new Zr.kU,
      Kr = new Wr.d(0, 0, 0, 0);

    function yr(rr, Sr) {
      var Qr, Wr;
      const ar = Br(rr, Sr);
      if (ar) {
        const rr = ar.x,
          Sr = ar.y,
          Qr = rr - 50,
          Zr = Sr - 50;
        return Math.abs(Qr) <= Ir.c && Math.abs(Zr) <= (0, Ir.h)() ? {
          x: rr,
          y: Sr
        } : Xr(Qr, Zr)
      }
      pr.Hrr(Sr[0], Sr[1], Sr[2]),
        function(rr) {
          const Sr = rr.Ox.nZr(),
            Qr = Sr ? Zr.Matrix.FromArrayToRef(Sr.worldMatrix, 0, nr) : rr.Ox.eC().activeCamera.getWorldMatrix();
          Zr.kU.TransformNormalToRef(tr, Qr, xr), xr.normalize(), Zr.kU.TransformNormalToRef(hr, Qr, mr), mr.normalize()
        }(rr);
      const jr = Zr.kU.Dot(pr, xr);
      let fr = -Zr.kU.Dot(pr, mr);
      Math.abs(jr) < .001 && Math.abs(fr) < .001 && (fr = -1);
      const Er = null !== (Qr = null === (Wr = rr.Ox.nZr()) || void 0 === Wr ? void 0 : Wr.projectionMatrix) && void 0 !== Qr ? Qr : rr.Ox.eC().activeCamera.getProjectionMatrix().m;
      return Xr(jr * Er[0], fr * Er[5])
    }

    function Br(rr, Sr) {
      const Qr = rr.Ox.eC(),
        Wr = Qr.MU(),
        ar = Wr.getRenderWidth(),
        jr = Wr.getRenderHeight();
      Kr.width = ar, Kr.height = jr;
      const Ir = rr.Ox.nZr(),
        pr = Ir ? er.Hrr(Ir.eye[0], Ir.eye[1], Ir.eye[2]) : rr.Ox.camera.globalPosition;
      fr.Hrr(pr.x + 10 * Sr[0], pr.y + 10 * Sr[1], pr.z + 10 * Sr[2]);
      const xr = Ir ? Zr.Matrix.FromArrayToRef(Ir.viewProjectionMatrix, 0, Yr) : Qr.getTransformMatrix();
      return Zr.kU.ProjectToRef(fr, zr, xr, Kr, Er), Er.z < 0 || Er.z > 1 ? null : (Ur.x = Er.x / ar * 100, Ur.y = Er.y / jr * 100, Ur)
    }

    function Tr(rr, Sr) {
      return yr(rr, lr(rr, Sr))
    }

    function vr(rr, Sr) {
      const Qr = Br(rr, lr(rr, Sr));
      return Qr && {
        x: Qr.x,
        y: Qr.y
      }
    }

    function Or(rr) {
      var Sr, Qr;
      return 1 / (null !== (Sr = null === (Qr = rr.Ox.nZr()) || void 0 === Qr ? void 0 : Qr.projectionMatrix[0]) && void 0 !== Sr ? Sr : rr.Ox.eC().activeCamera.getProjectionMatrix().m[0])
    }

    function Lr(rr, Sr, Qr) {
      const Zr = rr.Ox.nZr(),
        Wr = Zr ? Zr.worldMatrix : rr.Ox.eC().activeCamera.getWorldMatrix().m,
        ar = rr.um;
      for (let jr = 0; jr < 3; jr++) Sr[jr] = Wr[12 + jr] + ar[jr], Qr[jr] = Wr[8 + jr];
      jr().normalize(Qr, Qr)
    }

    function lr(rr, Sr) {
      const Qr = rr.um,
        Zr = rr.Ox.nZr(),
        Wr = Zr ? er.Hrr(Zr.eye[0], Zr.eye[1], Zr.eye[2]) : rr.Ox.camera.globalPosition;
      return Nr[0] = Sr[0] - Qr[0] - Wr.x, Nr[1] = Sr[1] - Qr[1] - Wr.y, Nr[2] = Sr[2] - Qr[2] - Wr.z, jr().normalize(Nr, Nr), Nr
    }

    function Xr(rr, Sr) {
      return (0, Ir.d)(rr, Sr, Ir.c, (0, Ir.h)())
    }
  },
  40605: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir
    });
    var Zr = Qr(34),
      Wr = Qr(1353),
      ar = Qr(2466);
    const jr = "Reconnecting";
    class Ir {
      constructor(rr) {
        this.hooks = rr, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = rr => {
          rr.persisted || this.leave()
        }, this.controller = new ar.h((Sr => rr.reconnect(Sr)), {
          isSessionLive: () => !this.ended && rr.isLive(),
          onPhaseChanged: rr => {
            this.onPhaseChanged(rr)
          },
          onReconnected: Sr => {
            rr.onReconnected(Sr)
          },
          onGaveUp: Sr => {
            !this.ended && rr.isLive() && rr.onGaveUp(this.sessionBased, Sr)
          }
        })
      }
      onInitialInfo(rr, Sr) {
        this.graceMs = rr, this.sessionBased = Sr
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(rr) {
        this.ended || this.controller.onConnectionLost(rr, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const rr = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Sr = this.controller.heldToken;
        this.end(), rr && "" !== Sr && this.hooks.releaseSeat(Sr)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(rr) {
        const Sr = (0, ar.v)(rr);
        Sr !== this.stopped && (this.stopped = Sr, this.hooks.freeze(Sr));
        const Qr = "frozen" === rr || "resuming" === rr && this.frozen;
        Qr && !this.frozen ? (0, Wr.t)(jr, {
          overridesPause: !0
        }) : !Qr && this.frozen && (0, Wr.s)(jr), this.frozen = Qr, this.setListening("connected" !== rr), Zr.i.Jp(ar.u, Qr ? "frozen" : rr)
      }
      setListening(rr) {
        rr !== this.listening && (this.listening = rr, rr ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40608: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    class Zr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = rr, this.now = Sr, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const rr = this.now(),
            Sr = rr - this.lastCheckAt <= 2e3;
          this.lastCheckAt = rr;
          const Qr = "visible" === document.visibilityState;
          !Qr || Sr && this.wasVisible || (this.resumedAt = rr), this.wasVisible = Qr, Qr && rr - this.lastHeardAt > 12e3 && rr - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Sr(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  40543: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr
    });
    var Zr = Qr(208),
      Wr = Qr(388),
      ar = Qr.n(Wr),
      jr = Qr(37843),
      Ir = Qr(37851),
      fr = Qr(2383);
    const Er = Zr.i.Uz * Zr.i.playerEyeToHeightRatio,
      pr = 250,
      xr = 1.1,
      mr = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(rr, Sr) {
          this.entities.set(rr, Sr)
        }
        update(rr, Sr) {
          const Qr = this.entities.get(rr);
          this.entities.set(rr, Sr);
          const Zr = this.playing.get(rr);
          Zr && (Qr && Qr.soundName === Sr.soundName ? (Zr.sound.setRelativeVolume(Sr.volume), Zr.sound.rate(Sr.rate), Zr.sound.setPannerAttr({
            refDistance: Sr.refDistance
          })) : this.stopEntity(rr))
        }
        remove(rr) {
          this.stopEntity(rr), this.entities.delete(rr)
        }
        lx(rr) {
          this.msSinceLastScan += rr, this.msSinceLastScan < pr || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(rr) {
          const Sr = this.playing.get(rr);
          Sr && (Sr.sound.stop(), this.playing.delete(rr))
        }
        startEntity(rr, Sr, Qr) {
          const Zr = (0, Ir.c)(Sr.soundName);
          if (!Zr) return console.error(`AudioEntityManager: no sound found for "${Sr.soundName}", dropping audio entity ${rr}`), void this.remove(rr);
          const Wr = jr.b.play(Zr, Sr.volume, Qr, Sr.maxHearDist, Sr.refDistance, !0);
          Wr.rate(Sr.rate), this.playing.set(rr, {
            sound: Wr,
            lastPos: ar().clone(Qr)
          })
        }
        scan() {
          const rr = (0, fr.e)();
          if (!rr) return;
          const Sr = rr.YB.JY(rr.fC);
          if (Sr)
            for (const [Qr, Zr] of this.entities) {
              if (!rr.YB.TSr(Qr, "position")) continue;
              const Wr = rr.YB.JY(Qr),
                jr = ar().sqrDist(Sr, Wr),
                Ir = this.playing.get(Qr);
              if (Ir) {
                const rr = Zr.maxHearDist * xr;
                jr > rr * rr ? this.stopEntity(Qr) : ar().equals(Wr, Ir.lastPos) || (Ir.sound.setPosition([Wr[0], Wr[1] + Er, Wr[2]]), ar().copy(Ir.lastPos, Wr))
              } else jr <= Zr.maxHearDist * Zr.maxHearDist && this.startEntity(Qr, Zr, Wr)
            }
        }
      }
  },
  40625: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      h: () => pr
    });
    var Zr = Qr(1846),
      Wr = Qr(208),
      ar = Qr(1815),
      jr = Qr(1940),
      Ir = Qr(1262),
      fr = Qr(1187);
    async function Er(rr, Sr) {
      return function(rr) {
        return "object" === typeof rr && null !== rr && rr.code === Wr.e.VpnIp.code
      }(Sr) && function(rr) {
        return ar.b.supports("appCheck") && rr.isLoggedIn() && !rr.hasTriedAppAttestation()
      }(rr) && await async function(rr) {
        try {
          const {
            token: Sr
          } = await (0, jr.d)(), {
            "3PSIDMCPP": Qr
          } = await (0, fr.postJsonWithMetricsCookiesAndJsonResponse)(`${Ir.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Sr
          }, {
            retries: 0
          }, rr.getMetricsCookies());
          return rr.setAppAttestedAuthJwt(Qr), !0
        } catch (Sr) {
          return Sr instanceof Zr.e && "failed" === Sr.code ? (console.warn("The app couldn't get an App Check token:", Sr), rr.markAppAttestationTried()) : console.error("Failed to attest the app:", Sr), !1
        }
      }(rr)
    }
    async function pr(rr, Sr) {
      try {
        return await Sr()
      } catch (Qr) {
        if (!await Er(rr, Qr)) throw Qr
      }
      return Sr()
    }
  },
  40617: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => mr,
      d: () => pr
    });
    var Zr = Qr(208),
      Wr = Qr(1974),
      ar = Qr(1267),
      jr = Qr(10062);
    const Ir = [250, 500, 1e3, 2e3, 1250],
      fr = 406;

    function Er(rr) {
      if ("object" !== typeof rr || null === rr) return !1;
      const {
        code: Sr,
        message: Qr
      } = rr, Wr = Zr.e.duplicateLobbyNameError;
      return (Sr === Wr.code || Sr === fr) && (Qr === Wr.text || Qr === Wr.text + Zr.l)
    }
    async function pr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.e;
      for (let Wr = 0;; Wr++) {
        let jr;
        (0, ar.l)(Sr);
        try {
          return await rr()
        } catch (Zr) {
          if (jr = Ir[Wr], void 0 === jr || !Er(Zr)) throw Zr
        }
        await Qr(jr, Sr)
      }
    }
    const xr = new Set([Zr.e.duplicateLobbyNameError.code, Zr.e.lobbyCantBeCreated.code, Zr.e.roomDisposedEarlyError.code, Zr.e.roomDisposedLateError.code, Zr.e.serverRoomLimitReached.code]);

    function mr(rr) {
      if (Er(rr)) return !0;
      const Sr = (0, jr.d)(rr);
      return "number" === typeof Sr && xr.has(Sr)
    }
  },
  40593: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      e: () => Wr
    });
    var Zr = Qr(34);

    function Wr(rr) {
      return "refetchCode" === rr || "devDownloadJson" === rr || rr.startsWith("Plugin")
    }

    function ar(rr, Sr) {
      "refetchCode" !== rr ? "Plugin|MobAiPlugin|ShowPetUi" !== rr ? Promise.all([Qr.e(128), Qr.e(129), Qr.e(118), Qr.e(120), Qr.e(248)]).then((() => Qr(54268))).then((Qr => {
        let {
          runClientGameMessage: Zr
        } = Qr;
        Zr(rr, Sr)
      })).catch((Sr => {
        console.error(`Game message ${rr} failed`, Sr)
      })) : Zr.i.Jp("showPetUi", Sr) : Zr.i.Jp("refetchCode")
    }
  },
  40627: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr
    });
    var Zr = Qr(10062),
      Wr = Qr(38018),
      ar = Qr(40632);
    const jr = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      Ir = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function fr(rr, Sr) {
      if (rr instanceof Wr.c) return {
        at: jr[Sr],
        code: 0
      };
      const Qr = (0, Zr.d)(rr),
        fr = "number" === typeof Qr ? Qr : 0;
      return null !== (0, ar.i)(fr).name ? {
        at: "refused",
        code: fr
      } : {
        at: Ir[Sr],
        code: fr
      }
    }
  },
  10062: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      d: () => jr,
      e: () => Ir,
      f: () => Er,
      g: () => fr
    });
    var Zr = Qr(208),
      Wr = Qr(5384);

    function ar(rr) {
      return jr(rr) === Zr.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function jr(rr) {
      return "object" === typeof rr && null !== rr ? rr.code : void 0
    }

    function Ir(rr) {
      var Sr;
      return null !== (Sr = Object.keys(Wr.b).find((Sr => Wr.b[Sr] === rr))) && void 0 !== Sr ? Sr : null
    }

    function fr(rr) {
      return "notWhitelisted" === rr ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Er = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10047: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      f: () => fr
    });
    var Zr = Qr(379);

    function Wr(rr) {
      if (!rr.startsWith("{")) return rr;
      let Sr;
      try {
        Sr = JSON.parse(rr)
      } catch {
        return rr
      }
      return function(rr) {
        if (null === (0, Zr.te)(rr)) return !1;
        const {
          params: Sr
        } = rr;
        return void 0 === Sr || "object" === typeof Sr && null !== Sr && Object.values(Sr).every((rr => "string" === typeof rr))
      }(Sr) ? Sr : rr
    }
    var ar = Qr(1251),
      jr = Qr(1304);

    function Ir(rr) {
      return (0, ar.z)(jr.f.get().getCurrentLanguageCode(), rr.translationKey, rr.params)
    }

    function fr(rr) {
      const Sr = Wr(rr);
      return "string" === typeof Sr ? Sr : Ir(Sr)
    }

    function Er(rr) {
      const Sr = Wr(rr);
      return "string" === typeof Sr ? Sr : Ir({
        translationKey: "moderation:kicked",
        params: {
          reason: Ir(Sr)
        }
      })
    }
  },
  40583: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => pr
    });
    var Zr = Qr(1279),
      Wr = Qr(1433),
      ar = Qr(26),
      jr = Qr(1413),
      Ir = Qr(1422),
      fr = Qr(1644),
      Er = Qr(38001);

    function pr(rr) {
      let {
        xa: Sr,
        ma: Qr
      } = rr;
      const pr = null !== Sr && void 0 !== Sr ? Sr : (0, Ir.b)().gameNameWithVariation;
      (0, Zr.J)(pr) && ((0, Er.o)(), (0, jr.Y)((() => {
        console.log("Received matchmaking order from game server to game", Sr), (0, ar.m)("inGameReplay"), (0, fr.navigatePreserveSearch)((0, Wr.c)(pr, null !== Qr && void 0 !== Qr ? Qr : void 0))
      }), "video_start"))
    }
  },
  40574: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => pr,
      e: () => fr,
      h: () => Er,
      j: () => xr
    });
    var Zr = Qr(2089),
      Wr = Qr(34),
      ar = Qr(1475),
      jr = Qr(1317);
    const Ir = new Map;

    function fr(rr, Sr) {
      Wr.i.Jp("newUiRequest", {
        id: rr,
        clientParameters: Sr
      }, !0)
    }

    function Er(rr) {
      Wr.i.Jp("removeUiRequest", rr, !0);
      const Sr = Ir.get(rr);
      Sr && (Sr.tearDownNotification(), Ir.delete(rr))
    }

    function pr() {
      Wr.i.Jp("clearUiRequests");
      for (const rr of Ir.values()) rr.tearDownNotification();
      Ir.clear()
    }

    function xr(rr, Sr, Qr, Wr) {
      const fr = "string" === typeof Sr ? {
          translationKey: Sr
        } : Sr,
        Er = ar.NotificationProvider.showPromptPopup({
          title: fr.translationKey,
          textOpts: {
            title: (0, jr.e)(fr.params, Zr.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: Qr,
          unlockPointerKey: "uiRequestPopup"
        });
      Ir.set(rr, Er), Er.getResult().then((Sr => {
        Ir.delete(rr), "notificationTornDown" !== Sr && Wr(Sr)
      }))
    }
  },
  40640: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Nr,
      f: () => mr
    });
    const Zr = "ue:",
      Wr = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      ar = "[A-Za-z0-9]{1,24}",
      jr = 15,
      Ir = new RegExp(`^${ar}$`);
    new RegExp(`^${Zr}(${[...Wr,"other"].join("|")}):(?:n|k(${ar})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function fr(rr, Sr, Qr, ar, fr) {
      const Er = "string" === typeof rr && Wr.includes(rr) ? rr : "other";
      let pr = "n";
      return "string" === typeof Sr ? pr = Ir.test(Sr) ? `k${Sr}` : "n" : "number" === typeof Qr && Number.isInteger(Qr) && Qr >= 0 && Qr <= jr && (pr = `b${Qr}`), `${Zr}${Er}:${pr}:${ar?1:0}${fr?1:0}`
    }
    var Er = Qr(1793),
      pr = Qr(1890);
    let xr = null;

    function mr(rr) {
      const Sr = rr instanceof Element && rr !== document.body && rr !== document.documentElement && !(0, Er.q)(rr) && !rr.closest("#root");
      return {
        editable: (0, pr.e)(rr),
        outsideView: Sr
      }
    }

    function Nr(rr) {
      return xr ??= function(rr) {
        try {
          const {
            editable: Sr,
            outsideView: Qr
          } = mr(rr.target), Zr = rr;
          return fr(rr.type, Zr.code, Zr.button, Sr, Qr)
        } catch {
          return fr(null, null, null, !1, !1)
        }
      }(rr), xr
    }
  },
  40632: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      i: () => fr,
      j: () => jr,
      n: () => Wr
    });
    var Zr = Qr(208);

    function Wr(rr) {
      const Sr = rr.endsWith(Zr.l);
      return {
        text: (Sr ? rr.slice(0, -Zr.l.length) : rr) || null,
        dropsCache: Sr
      }
    }
    const ar = "Either your internet isn't working or this is a bug.";

    function jr(rr, Sr) {
      const Qr = fr(rr);
      return null !== Qr.name && "" === Zr.e[Qr.name].text && null !== Sr ? Sr : Qr.reason
    }
    const Ir = "You were removed from the game.";

    function fr(rr) {
      var Sr;
      let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Wr = null !== (Sr = Object.keys(Zr.e).find((Sr => Zr.e[Sr].code === rr))) && void 0 !== Sr ? Sr : null;
      if (null === Wr) return {
        code: rr,
        name: Wr,
        reason: null !== Qr && void 0 !== Qr ? Qr : `${ar}\nCode: ${rr}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: jr,
        canReconnect: fr = !1
      } = Zr.e[Wr], Er = rr === Zr.e.outdatedVersion.code || rr === Zr.e.loadRecaptchaError.code;
      return {
        code: rr,
        name: Wr,
        reason: "" !== jr ? jr : null !== Qr && void 0 !== Qr ? Qr : rr === Zr.e.gameOrPluginKick.code ? Ir : `Code: ${rr}`,
        canReconnect: fr,
        automaticallyReconnect: rr === Zr.e.customGameUpdated.code || rr === Zr.e.duplicateLobbyNameError.code,
        requiresRefresh: Er
      }
    }
  },
  40568: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor() {
        this.members = new Map
      }
      apply(rr) {
        const Sr = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Zr of rr.vW) {
          let rr = this.members.get(Zr.OW);
          if (rr || (rr = {
              name: null,
              settings: {}
            }, this.members.set(Zr.OW, rr), Sr.added.push(Zr.OW)), null !== Zr.LW && (rr.name = Zr.LW), null !== Zr.lW || Zr.XW.length > 0) {
            const Qr = null === Zr.lW ? {} : JSON.parse(Zr.lW);
            Object.assign(rr.settings, Qr);
            for (const Sr of Zr.XW) delete rr.settings[Sr], Qr[Sr] = void 0;
            Sr.settingChanges.push({
              playerId: Zr.OW,
              settings: Qr
            })
          }
        }
        for (const Zr of rr.PW) {
          const rr = this.members.get(Zr);
          var Qr;
          if (rr) this.members.delete(Zr), Sr.removed.push({
            playerId: Zr,
            name: null !== (Qr = rr.name) && void 0 !== Qr ? Qr : void 0
          })
        }
        return Sr
      }
      has(rr) {
        return this.members.has(rr)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(rr) {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = this.members.get(rr)) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : void 0
      }
      getSettings(rr) {
        var Sr;
        return null === (Sr = this.members.get(rr)) || void 0 === Sr ? void 0 : Sr.settings
      }
      getSetting(rr, Sr) {
        var Qr;
        return null === (Qr = this.members.get(rr)) || void 0 === Qr ? void 0 : Qr.settings[Sr]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  40599: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      g: () => Wr
    });
    const Zr = ["description", "label"];

    function Wr(rr) {
      const Sr = rr.type;
      return {
        type: Sr,
        params: rr[Sr]
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);