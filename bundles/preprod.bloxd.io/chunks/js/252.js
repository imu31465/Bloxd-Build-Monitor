export const id = 252;
export const ids = [252];
export const modules = {
  39373: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return !(!QQ.lobbyLeaderboardInfo && !QQ.lobbyManage)
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  39301: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(31),
      qQ = XQ(2036);

    function TQ(QQ) {
      let {
        taskId: WQ,
        progress: XQ
      } = QQ;
      const wQ = qQ.e.get("_tasks");
      null !== wQ && void 0 !== wQ && wQ[WQ] && qQ.e.apply({
        _tasks: {
          ...wQ,
          [WQ]: {
            ...wQ[WQ],
            progress: XQ
          }
        }
      })
    }
    wQ.k.subscribe("clientTaskProgress", (QQ => {
      TQ(QQ)
    }))
  },
  39244: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => QX,
      h: () => mW,
      k: () => MW
    });
    var wQ = XQ(3907),
      qQ = XQ(193),
      TQ = XQ(231),
      zQ = XQ(670),
      sQ = XQ(43),
      FQ = XQ(2997),
      PQ = XQ(3984),
      gQ = XQ(3963),
      JQ = XQ(1257);
    const rQ = new WeakMap;
    class IQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          MPQ: !0
        };
        this.callbacks = WQ, this.options = XQ, this.SXQ = void 0, this.sessionId = void 0, this.iH = [], this.QgQ = !1, this.zj = !1, this.WgQ = void 0, this.lH = 0, this.nqQ = 0, this.XgQ = (QQ, WQ) => {
          if (this.zj) return;
          const XQ = Number(QQ);
          this.QgQ ? this.wgQ(XQ, WQ) : this.iH.push({
            id: XQ,
            payload: WQ
          })
        }, this.dispose = () => {
          this.zj || (this.zj = !0, rQ.delete(this), this.iH.length = 0, this.WgQ())
        }, this.SXQ = QQ, this.sessionId = QQ.sessionId, rQ.set(this, []), this.WgQ = this.qgQ()
      }
      TgQ(QQ) {
        this.WgQ(), this.SXQ = QQ, this.sessionId = QQ.sessionId, this.lH = 0, this.nqQ = 0, this.WgQ = this.qgQ()
      }
      get DH() {
        return this.nqQ
      }
      qgQ() {
        const QQ = this.SXQ.KV("*", this.XgQ);
        return this.options.MPQ && this.SXQ.mV(this.dispose), QQ
      }
      wgQ(QQ, WQ) {
        try {
          (0, PQ.mc)(QQ) && (WQ = (0, PQ.c)(QQ, gQ.Tj.from(WQ)));
          const XQ = rQ.get(this)[QQ];
          if ("function" !== typeof XQ) {
            if (this.callbacks.zgQ) return void this.callbacks.zgQ(QQ, WQ);
            throw new Error(`No onMessage handler registered for message id ${QQ}`)
          }
          XQ(WQ)
        } catch (XQ) {
          this.callbacks.sgQ(`Error in onMessage ${QQ} with payload ${JSON.stringify(WQ)}`, XQ)
        } finally {
          this.lH++
        }
      }
      PgQ() {
        for (const {
            id: QQ,
            payload: WQ
          }
          of this.iH) {
          if (this.zj) break;
          this.wgQ(QQ, WQ)
        }
        this.iH.length = 0
      }
      rG() {
        return this.zj
      }
      ggQ() {
        if (this.QgQ || this.zj) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          KV: (QQ, WQ) => {
            if (this.QgQ || this.zj) throw new Error("Trying to call onMessage after registration finished");
            this.KV(QQ, WQ)
          },
          finishRegistration: () => {
            if (this.zj) throw new Error("Cannot finish message registration after disposal");
            this.QgQ = !0, this.PgQ()
          }
        }
      }
      KV(QQ, WQ) {
        var XQ, wQ;
        null === (XQ = (wQ = this.callbacks).rgQ) || void 0 === XQ || XQ.call(wQ);
        const qQ = rQ.get(this);
        for (; QQ > qQ.length;) qQ[qQ.length] = null;
        qQ[QQ] = WQ
      }
      send(QQ, WQ) {
        this.IgQ(), (0, JQ.B)(WQ) ? this.SXQ.ZH(QQ, WQ) : this.SXQ.send(QQ, WQ)
      }
      IgQ() {
        var QQ, WQ;
        (this.nqQ++, 5 === jQ++) && (null === (QQ = (WQ = this.callbacks).rgQ) || void 0 === QQ || QQ.call(WQ), jQ = 0)
      }
      yV() {
        this.dispose(), this.SXQ.yV()
      }
      leave() {
        this.dispose(), this.SXQ.leave()
      }
    }
    let jQ = 0;
    var BQ = XQ(3929);
    class yQ extends IQ {
      constructor(QQ) {
        super(QQ, {
          rgQ: () => {
            (0, sQ.n)(!0) && (0, wQ.jH)()
          },
          sgQ: (QQ, WQ) => {
            var XQ;
            null === (XQ = (0, FQ.f)()) || void 0 === XQ || XQ.IB(QQ, WQ)
          }
        }, {
          MPQ: !1
        }), (0, BQ.e)(QQ)
      }
      uH(QQ, WQ) {
        return !!(0, BQ.h)((0, BQ.d)(), this.SXQ, QQ, WQ) && (this.IgQ(), !0)
      }
      TgQ(QQ) {
        this.jgQ(), super.TgQ(QQ), (0, BQ.e)(QQ)
      }
      yV() {
        super.yV(), this.jgQ()
      }
      jgQ() {
        this.SXQ.VV.ZI.bR = void 0
      }
    }
    var VQ = XQ(31),
      DQ = XQ(2036),
      pQ = XQ(1802),
      GQ = XQ(36766),
      UQ = XQ(39253),
      bQ = XQ(38320),
      vQ = XQ(38084),
      dQ = XQ(663),
      HQ = XQ(38695);

    function aQ(QQ, WQ, XQ) {
      const wQ = function(QQ) {
          const WQ = new Int32Array(QQ.length * HQ.c);
          return QQ.forEach(((QQ, XQ) => {
            const wQ = XQ * HQ.c;
            if (4 === QQ.length) {
              const [XQ, qQ, TQ, zQ] = QQ;
              WQ.set([XQ, qQ, TQ, XQ, qQ, TQ, zQ], wQ)
            } else {
              const [XQ, qQ, TQ, zQ, sQ, FQ, PQ] = QQ;
              WQ.set([XQ, TQ, sQ, qQ, zQ, FQ, PQ], wQ)
            }
          })), WQ
        }(XQ),
        qQ = (WQ, XQ, wQ, qQ) => {
          QQ.setBlockNoMulti(WQ, XQ, wQ, qQ, !0)
        };
      QQ.client.gameRecorder.isCapturing() ? (0, HQ.lb)(wQ, (0, HQ.kb)(wQ), qQ) : QQ.KJ.nJ.nG(wQ, {
        JY: qQ,
        isHookId: WQ => QQ.blockChangeHasHooks(WQ),
        watched: () => function(QQ, WQ, XQ) {
          const wQ = [],
            qQ = (QQ, WQ, XQ) => {
              wQ.push(QQ, WQ, XQ)
            },
            TQ = new Set;
          for (let zQ = 0; zQ < XQ.length; zQ += HQ.c)
            for (let WQ = (0, dQ.M)(XQ[zQ]); WQ <= (0, dQ.M)(XQ[zQ + 3]); WQ++)
              for (let wQ = (0, dQ.M)(XQ[zQ + 1]); wQ <= (0, dQ.M)(XQ[zQ + 4]); wQ++)
                for (let sQ = (0, dQ.M)(XQ[zQ + 2]); sQ <= (0, dQ.M)(XQ[zQ + 5]); sQ++) {
                  const XQ = `${WQ}|${wQ}|${sQ}`;
                  TQ.has(XQ) || (TQ.add(XQ), QQ.blockDataOwner.forEachDataCell(WQ, wQ, sQ, qQ))
                }
          return WQ.forEachCell(qQ), Int32Array.from(wQ)
        }(QQ, WQ, wQ)
      }), QQ.KJ.kQQ()
    }

    function lQ(QQ) {
      QQ.lXQ = new Set, QQ.cXQ = new Set, QQ.hXQ = new Set, QQ.RXQ = new Set, QQ.iXQ = [], QQ.EXQ = [], QQ.Xx = new Set, QQ.Rq = [], QQ.Ix = []
    }
    class hQ {
      constructor(QQ) {
        this.KJ = QQ
      }
      register(QQ) {
        const WQ = this.KJ,
          XQ = (0, FQ.d)();
        QQ.KV(PQ._, (QQ => {
          WQ.nJ.lXQ.add(QQ), WQ.nJ.cXQ.delete(QQ)
        })), QQ.KV(PQ.hb, (QQ => {
          WQ.nJ.cXQ.add(QQ), WQ.nJ.lXQ.delete(QQ)
        })), QQ.KV(PQ.le, (QQ => {
          WQ.nJ.cXQ.delete(QQ), WQ.nJ.lXQ.delete(QQ)
        })), QQ.KV(PQ.eb, (QQ => {
          WQ.nJ.hXQ.add(QQ), WQ.nJ.RXQ.delete(QQ)
        })), QQ.KV(PQ.mb, (QQ => {
          WQ.nJ.RXQ.add(QQ), WQ.nJ.hXQ.delete(QQ)
        })), QQ.KV(PQ.oe, (QQ => {
          WQ.nJ.RXQ.delete(QQ), WQ.nJ.hXQ.delete(QQ)
        })), QQ.KV(PQ.cb, (QQ => {
          (0, JQ.bb)(QQ, WQ.nJ.EXQ), (0, JQ.bb)(QQ, WQ.nJ.iXQ), WQ.nJ.iXQ.push(QQ)
        })), QQ.KV(PQ.ib, (QQ => {
          (0, JQ.bb)(QQ, WQ.nJ.iXQ), (0, JQ.bb)(QQ, WQ.nJ.EXQ), WQ.nJ.EXQ.push(QQ)
        })), QQ.KV(PQ.me, (QQ => {
          (0, JQ.bb)(QQ, WQ.nJ.iXQ), (0, JQ.bb)(QQ, WQ.nJ.EXQ)
        })), QQ.KV(PQ.Hf, (QQ => {
          let {
            Wq: XQ,
            Xq: wQ
          } = QQ;
          wQ ? WQ.nJ.Xx.delete(XQ) : WQ.nJ.Xx.add(XQ)
        })), QQ.KV(PQ.Ff, (QQ => {
          let {
            Rq: wQ,
            Eq: qQ
          } = QQ;
          XQ.updateWalkThroughRect(WQ.RC, wQ, qQ)
        })), (0, wQ.onGameResetOnce)((() => {
          lQ(WQ.nJ)
        })), QQ.KV(PQ.hc, (QQ => {
          bQ.b.applyServerUpdate(QQ)
        })), QQ.KV(PQ.sb, (QQ => {
          XQ.applyServerBlocks((() => {
            ! function(QQ, WQ) {
              for (const {
                  DQ: XQ,
                  pQ: wQ
                }
                of WQ) {
                const WQ = vQ.d[wQ];
                if (WQ) {
                  const {
                    compX: wQ,
                    compY: qQ,
                    compZ: TQ,
                    mainMultiblock: zQ
                  } = WQ;
                  QQ.hA(XQ[0] - wQ, XQ[1] - qQ, XQ[2] - TQ, zQ)
                }
              }
              for (const {
                  DQ: XQ,
                  pQ: wQ,
                  GQ: qQ
                }
                of WQ) QQ.setBlockNoMulti(XQ[0], XQ[1], XQ[2], wQ, !0), QQ.blockDataOwner.setBlockData(XQ[0], XQ[1], XQ[2], null === qQ ? void 0 : JSON.parse(qQ)), QQ.blockAdded(XQ[0], XQ[1], XQ[2], wQ)
            }(XQ, QQ)
          })), VQ.k.mB("changeBlockFail", QQ), XQ.client.triggerGameCallback("onChangeBlockFail", QQ), VQ.k.mB("EditBoard", {
            pos: null
          }), VQ.k.mB("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), QQ.KV(PQ.Mb, (QQ => {
          XQ.applyServerBlocks((() => {
            aQ(XQ, bQ.b, QQ)
          }))
        })), QQ.KV(PQ.uf, (QQ => {
          let {
            UQ: WQ,
            bQ: wQ
          } = QQ;
          if (XQ.qN(WQ[0], WQ[1], WQ[2])) {
            const QQ = (0, FQ.d)().fV(WQ[0], WQ[1], WQ[2]);
            (0, FQ.d)().updateMailboxContents(WQ[0], WQ[1], WQ[2], QQ, wQ)
          }
        })), QQ.KV(PQ.Je, (QQ => {
          let {
            pos: WQ,
            data: wQ
          } = QQ;
          XQ.blockDataOwner.setBlockData(WQ[0], WQ[1], WQ[2], wQ), XQ.blockAdded(WQ[0], WQ[1], WQ[2], XQ.fV(WQ[0], WQ[1], WQ[2]))
        }))
      }
    }
    var iQ = XQ(37434),
      cQ = XQ(37060),
      AQ = XQ(38353),
      RQ = XQ(38197),
      EQ = XQ(38371);
    class CQ {
      constructor(QQ, WQ) {
        this.KJ = QQ, this.setUpQueuedEntity = WQ
      }
      register(QQ) {
        const WQ = this.KJ,
          XQ = (0, FQ.d)();
        QQ.KV(PQ.Y, (QQ => {
          let {
            DX: WQ,
            pX: XQ
          } = QQ;
          this.setUpQueuedEntity(WQ), WQ = (0, cQ.b)(WQ), (0, FQ.d)().client.gameRecorder.recordBulletShot(WQ, XQ), VQ.k.mB(`bulletShot|${WQ}`, {
            bulletDirections: XQ
          })
        })), QQ.KV(PQ.ic, (QQ => {
          let {
            jX: WQ,
            BX: XQ
          } = QQ;
          VQ.k.mB("damagedByOtherPlayer", {
            jX: WQ,
            direction: XQ
          }, !0)
        })), QQ.KV(PQ.Bd, (QQ => {
          VQ.k.mB("playerKilled", QQ, !0), (0, FQ.d)().client.gameRecorder.recordPlayerKilled(QQ.deadEId, QQ.killerEId, QQ.withItem, QQ.killstreak)
        })), QQ.KV(PQ.Tb, (QQ => {
          VQ.k.mB("customKillfeed", QQ, !0), (0, FQ.d)().client.gameRecorder.recordCustomKillfeed(QQ.killer, QQ.victim, QQ.withItem)
        })), QQ.KV(PQ.Qd, (QQ => {
          let {
            oQ: XQ,
            eQ: wQ
          } = QQ;
          this.setUpQueuedEntity(XQ);
          const qQ = WQ.rD.wXQ(XQ);
          null !== qQ && void 0 !== qQ && qQ.isGun() && qQ.reload(Date.now(), wQ)
        })), QQ.KV(PQ.Ce, (QQ => {
          let {
            fW: XQ,
            aQ: wQ
          } = QQ;
          const qQ = wQ ? (0, EQ.f)(WQ, wQ) : void 0;
          VQ.k.mB("sendHitmarker", {
            fW: XQ,
            screenPos: qQ
          }, !0)
        })), QQ.KV(PQ.Qc, (QQ => {
          let {
            vQ: wQ,
            dQ: qQ,
            lQ: TQ,
            hQ: zQ,
            iQ: sQ,
            cQ: FQ,
            AQ: PQ
          } = QQ;
          this.setUpQueuedEntity(wQ), wQ = (0, cQ.b)(wQ);
          const gQ = WQ.rD.OWQ(wQ);
          if (gQ && (gQ.lastHurtTime = performance.now()), (0, AQ.playRigHurt)(WQ, wQ, FQ), VQ.k.mB("lifeformHurt", {
              eId: wQ,
              AQ: PQ
            }), qQ) {
            const QQ = (0, EQ.f)(WQ, qQ.aQ);
            VQ.k.mB("yourAttackHit", {
              fW: zQ,
              screenPos: QQ,
              hitSelf: wQ === WQ.RC
            })
          }
          wQ === WQ.RC && (XQ.shakePlayerCamera(wQ, sQ / 40, 200), VQ.k.mB("closeShopOnDamaged", null), VQ.k.mB("damagedByOtherPlayer", {
            jX: null,
            direction: FQ,
            iQ: sQ
          }, !0));
          const JQ = WQ.rD.xV(wQ);
          if (JQ && (TQ || zQ)) {
            const QQ = [JQ[0], JQ[1] + 1, JQ[2]];
            TQ && (0, RQ.n)(WQ, RQ.B, QQ, 15), zQ && (0, RQ.n)(WQ, RQ.q, QQ, 10)
          }
        })), QQ.KV(PQ.Oc, (QQ => {
          let {
            bW: XQ,
            vW: wQ,
            dW: qQ
          } = QQ;
          (0, iQ.b)(WQ).setHealthFrac((0, cQ.b)(XQ), qQ), VQ.k.mB("lifeformHealthChanged", {
            eId: (0, cQ.b)(XQ),
            vW: wQ,
            dW: qQ
          })
        })), QQ.KV(PQ.U, (QQ => {
          let {
            PT: XQ,
            gT: wQ
          } = QQ;
          (0, FQ.d)().playerAttacked(WQ.RC, XQ, wQ)
        })), QQ.KV(PQ.Ab, (() => {
          const QQ = WQ.rD.wXQ(WQ.RC);
          null !== QQ && void 0 !== QQ && QQ.isChargeable() && QQ.finishCharging(!1, Date.now())
        })), QQ.KV(PQ.Xb, (QQ => {
          let {
            RQ: WQ,
            EQ: XQ,
            CQ: wQ,
            SW: qQ,
            tW: TQ,
            oW: zQ
          } = QQ;
          WQ = (0, cQ.b)(WQ), (0, FQ.d)().client.updateEffect(WQ, XQ, {
            displayName: wQ,
            icon: qQ,
            duration: TQ,
            level: zQ
          })
        })), QQ.KV(PQ.Ud, (QQ => {
          let {
            RQ: WQ,
            EQ: XQ
          } = QQ;
          WQ = (0, cQ.b)(WQ), (0, FQ.d)().client.removeEffect(WQ, XQ)
        })), QQ.KV(PQ.qf, (QQ => {
          VQ.k.mB("ttbEffectMultiplier", QQ)
        }))
      }
    }
    var uQ = XQ(39267),
      LQ = XQ(37428),
      kQ = XQ(4523),
      fQ = XQ(38385),
      SQ = XQ(37047),
      tQ = XQ(37049),
      oQ = XQ(37352),
      eQ = XQ(37509),
      nQ = XQ(38393),
      xQ = XQ(39274);
    class YQ {
      constructor(QQ, WQ) {
        this.KJ = QQ, this.setUpQueuedEntity = WQ
      }
      register(QQ) {
        const WQ = this.KJ,
          XQ = (0, FQ.d)();
        QQ.KV(PQ.ad, (QQ => {
          let {
            eId: XQ,
            settings: wQ
          } = QQ;
          (0, eQ.i)(XQ);
          for (const WQ in wQ)(0, eQ.e)(XQ, WQ, wQ[WQ]);
          if ("canSee" in wQ && WQ.rD.OQQ(XQ, "hidingMeshManager")) {
            const QQ = WQ.rD.getState(XQ, "hidingMeshManager");
            QQ.canSee = (0, nQ.d)("canSee", wQ.canSee), QQ._forceUpdate = !0
          }
        })), QQ.KV(PQ.L, (QQ => {
          let {
            uw: XQ,
            Lw: wQ,
            animationScript: qQ,
            kw: TQ,
            fw: zQ,
            Sw: sQ,
            tw: PQ
          } = QQ;
          XQ = (0, cQ.b)(XQ);
          const gQ = null === qQ && null !== sQ ? (0, uQ.h)(sQ, PQ) : qQ;
          (0, FQ.d)().client.gameRecorder.recordAnimateEntity(XQ, wQ, gQ, TQ, zQ), (0, iQ.b)(WQ).animations.animateEntity(XQ, wQ, qQ, TQ, zQ, sQ, PQ), null !== qQ || XQ === WQ.RC && wQ === LQ.g.Emote && (0, FQ.d)().client.cameraController.endTemporaryThirdPerson()
        })), QQ.KV(PQ.Be, (QQ => {
          (0, xQ.e)(QQ)
        })), QQ.KV(PQ.zd, (QQ => {
          for (const WQ of QQ)(0, fQ.D)(WQ);
          VQ.k.mB("playerCosmeticsUpdated", QQ, !0)
        })), QQ.KV(PQ.S, (QQ => {
          for (const XQ of QQ)(0, oQ.f)(WQ, XQ)
        })), QQ.KV(PQ.bd, (QQ => {
          (0, RQ.o)(WQ, (0, JQ.q)(QQ))
        })), QQ.KV(PQ.fd, (QQ => {
          kQ.i[QQ.yT] ? (0, RQ.o)(WQ, {
            ...kQ.i[QQ.yT],
            pos1: QQ.pos1,
            pos2: QQ.pos2
          }) : console.error(`Unknown preset id: ${QQ.yT}`)
        })), QQ.KV(PQ.yd, (QQ => {
          var WQ, XQ;
          let {
            QQ: wQ,
            WQ: qQ,
            XQ: TQ,
            wQ: zQ
          } = QQ, {
            TQ: sQ,
            zQ: PQ
          } = null !== zQ && void 0 !== zQ ? zQ : {};
          const {
            qQ: gQ
          } = null !== zQ && void 0 !== zQ ? zQ : {};
          sQ = null !== (WQ = sQ) && void 0 !== WQ ? WQ : void 0, PQ = null !== (XQ = PQ) && void 0 !== XQ ? XQ : void 0, "string" === typeof gQ && this.setUpQueuedEntity(gQ), (0, FQ.d)().client.gameRecorder.recordPlaySound(wQ, qQ, TQ, zQ), SQ.b.play((0, tQ.d)(wQ), qQ, gQ, sQ, PQ).rate(TQ)
        })), QQ.KV(PQ.xf, (QQ => {
          for (const WQ in QQ) {
            const wQ = QQ[WQ];
            for (const QQ in wQ) XQ.client.meshCreator.handleParticleSystemUpdate(WQ, QQ, wQ[QQ])
          }
        }))
      }
    }
    var NQ = XQ(38057),
      ZQ = XQ(38033);
    class OQ {
      constructor(QQ) {
        this.KJ = QQ
      }
      register(QQ) {
        const WQ = this.KJ,
          XQ = (0, FQ.d)();

        function wQ() {
          return WQ.rD.CWQ(WQ.RC)
        }
        QQ.KV(PQ.tc, (QQ => {
          let {
            pq: XQ,
            Gq: wQ,
            Uq: qQ,
            bq: TQ,
            vq: zQ,
            dq: sQ,
            Hq: FQ,
            aq: PQ,
            lq: gQ
          } = QQ;
          if (!WQ.rD.OQQ(XQ, "itemState")) return void(0, NQ.m)(WQ, XQ, [zQ, sQ, FQ], wQ, {
            amount: qQ,
            attributes: JSON.parse(TQ),
            aq: PQ,
            size: gQ
          });
          const JQ = WQ.rD.getState(XQ, "itemState");
          JQ.amount = qQ, JQ.aq = PQ, JQ.creationTime = Date.now(), (0, ZQ.setServerPosition)(WQ.rD.getState(XQ, "smoothToServerPos"), zQ, sQ, FQ)
        })), QQ.KV(PQ.pb, (QQ => {
          (0, iQ.b)(WQ).setCantPickUp(QQ, !0), WQ.rD.OQQ(QQ, "itemState") && (WQ.rD.getState(QQ, "itemState").aq = !0)
        })), QQ.KV(PQ.he, (QQ => {
          (0, iQ.b)(WQ).setCantPickUp(QQ, !1), WQ.rD.OQQ(QQ, "itemState") && (WQ.rD.getState(QQ, "itemState").aq = !1)
        })), QQ.KV(PQ.td, (QQ => {
          let {
            pickUpItems: WQ,
            pickUpAckSeq: XQ
          } = QQ;
          for (const {
              name: qQ,
              amount: TQ,
              attributes: zQ
            }
            of WQ) wQ().pickUpItem({
            name: qQ,
            amount: TQ,
            typeObj: NQ.z[qQ],
            attributes: zQ
          });
          (0, FQ.d)().client.inventoryPrediction.serverChangeApplied(XQ)
        })), QQ.KV(PQ.Ve, (QQ => {
          let {
            index: XQ,
            name: wQ,
            amount: qQ,
            attributes: TQ,
            setSlotAckSeq: zQ
          } = QQ;
          const sQ = WQ.rD.uWQ(WQ.RC);
          (XQ < sQ.playerInventory.numSlots || sQ.DT || sQ.inCreative) && sQ.setItemSlot(XQ, wQ, qQ, TQ), (0, FQ.d)().client.inventoryPrediction.serverChangeApplied(zQ)
        })), QQ.KV(PQ.qc, (QQ => {
          (0, FQ.d)().client.inventoryPrediction.acknowledge(QQ)
        })), QQ.KV(PQ.J, (QQ => {
          let {
            EX: WQ,
            CX: XQ,
            uX: wQ,
            LX: qQ
          } = QQ;
          (0, FQ.d)().client.itemDropPrediction.onActionItemDrops(WQ, XQ, wQ, qQ)
        })), QQ.KV(PQ.Kb, (QQ => {
          wQ().clearInventory(), (0, FQ.d)().client.inventoryPrediction.serverChangeApplied(QQ)
        })), QQ.KV(PQ.Ye, (QQ => {
          VQ.k.mB("setSelectedInventorySlotI", QQ, !0)
        })), QQ.KV(PQ.Fb, (QQ => {
          let {
            Lq: XQ,
            kq: wQ,
            fq: qQ,
            Sq: TQ,
            tq: zQ,
            oq: sQ,
            eq: PQ,
            nq: gQ
          } = QQ;
          const JQ = WQ.rD.uWQ(WQ.RC);
          if (sQ) {
            const {
              Yq: QQ,
              Nq: WQ
            } = gQ;
            return (0, FQ.d)().client.inventoryPrediction.WQQ(WQ, (() => {
              JQ.chestRefreshed(wQ, qQ, TQ, PQ, QQ)
            })) && VQ.k.mB("chestToggleFromServer", !1, !0), void VQ.k.mB("chestRefreshedFromServer")
          }(XQ || JQ.DT) && (XQ ? (JQ.chestOpened(wQ, qQ, TQ, zQ, PQ), null !== zQ && (0, FQ.d)().client.ironChestPasskeyCache.onChestOpened(TQ, zQ)) : JQ.chestClosed(), VQ.k.mB("chestToggleFromServer", XQ, !0))
        })), QQ.KV(PQ.Ub, (QQ => {
          let {
            craftingRecipeItemName: wQ,
            recipesForItem: qQ
          } = QQ;
          wQ ? XQ.craftingManager.editRecipesForPlayer(WQ.RC, wQ, qQ) : XQ.craftingManager.resetAllPlayerRecipes(WQ.RC), VQ.k.mB("craftingRecipesEdited", {
            itemName: wQ,
            recipesForItem: qQ
          })
        })), QQ.KV(PQ.Zd, (QQ => {
          let {
            cX: WQ,
            AX: XQ,
            RX: qQ
          } = QQ;
          wQ().removeItemName(WQ, XQ), (0, FQ.d)().client.inventoryPrediction.serverChangeApplied(qQ)
        })), QQ.KV(PQ.Xd, (QQ => {
          let {
            hq: wQ
          } = QQ;
          XQ.craftingManager.removeRecipes(WQ.RC, wQ), VQ.k.mB("craftingRecipesEdited", {
            itemName: wQ,
            recipesForItem: []
          })
        }))
      }
    }
    var KQ = XQ(6873),
      mQ = XQ(37684),
      MQ = XQ(416),
      QW = XQ.n(MQ),
      WW = XQ(4836),
      XW = XQ(37953),
      wW = XQ(38544),
      qW = XQ(37678);
    class TW {
      constructor(QQ, WQ) {
        this.KJ = QQ, this.setUpQueuedEntity = WQ
      }
      register(QQ) {
        const WQ = this.KJ,
          XQ = (0, FQ.d)();
        QQ.KV(PQ.jf, (QQ => {
          let {
            HW: XQ,
            aW: qQ,
            lW: TQ,
            hW: zQ
          } = QQ;
          const sQ = [qQ, TQ, zQ];
          WQ.rD.setPosition(WQ.RC, sQ), (0, wQ.sendColyMessage)(PQ.Vg, {
            wF: XQ,
            qF: WW.f
          }), VQ.k.mB("localPlayerTeleported", {
            pos: sQ,
            isCorrection: !1
          })
        })), QQ.KV(PQ.nd, (QQ => {
          let {
            iT: WQ,
            cT: XQ,
            AT: wQ,
            RT: qQ
          } = QQ;
          this.setUpQueuedEntity(WQ);
          const TQ = [XQ, wQ, qQ];
          VQ.k.mB(`otherPlayerTeleported|${WQ}`, {
            pos: TQ
          })
        })), QQ.KV(PQ.Fd, (QQ => {
          let {
            wq: XQ,
            qq: qQ,
            Tq: TQ,
            zq: zQ,
            Fq: sQ,
            Pq: FQ,
            Jq: gQ,
            Iq: JQ,
            rq: rQ,
            yq: IQ
          } = QQ;
          const jQ = [qQ, TQ, zQ];
          WQ.rD.setPosition(WQ.RC, jQ);
          const BQ = WQ.rD.rWQ(WQ.RC),
            yQ = WQ.rD.vx(WQ.RC);
          QW().set(yQ.Lk, 0, 0, 0), QW().set(yQ.Yk, 0, 0, 0), QW().set(yQ.Fy, sQ, FQ, gQ), yQ.Zk(), BQ._flying = null !== IQ, IQ ? (BQ.flyAccel.Vq = IQ.Vq, BQ.flyAccel.Dq = IQ.Dq) : BQ.flyAccel.reset(), JQ && BQ.movementType === KQ.q.GLIDING && (BQ.jq = JQ.jq, QW().copy(BQ.Bq, JQ.Bq)), (0, wQ.sendColyMessage)(PQ.Vg, {
            wF: XQ,
            qF: WW.f
          }), VQ.k.mB("localPlayerTeleported", {
            pos: jQ,
            isCorrection: !0
          })
        })), QQ.KV(PQ._e, (QQ => {
          let {
            vehicleEId: WQ,
            overrides: XQ
          } = QQ;
          (0, FQ.d)().applyRiddenVehicleSettingOverrides(WQ, XQ)
        })), QQ.KV(PQ.Bf, (QQ => {
          let {
            dX: XQ,
            HX: wQ,
            aX: qQ
          } = QQ;
          const TQ = WQ.rD.rWQ(WQ.RC).physicsState.type === KQ.s.SLEEPING && XQ === KQ.s.DEFAULT;
          (0, FQ.d)().updatePositionAndPhysics(WQ.RC, {
            type: XQ,
            tier: wQ
          }, !0, qQ), TQ && (0, FQ.d)().updateHeldVehicleStatus()
        })), QQ.KV(PQ.wb, (QQ => {
          let {
            GW: XQ,
            UW: wQ
          } = QQ;
          WQ.rD.RWQ(WQ.RC).setPose(XQ, wQ)
        })), QQ.KV(PQ.Me, (QQ => {
          const {
            eB: XQ,
            yXQ: wQ
          } = (0, mQ.f)([QQ[0], QQ[1], QQ[2]]);
          qW.d.setLookDirection(WQ, XQ, wQ), (0, XW.A)(XQ, wQ);
          const qQ = WQ.rD.RWQ(WQ.RC);
          qQ && (qQ.heading = XQ)
        })), QQ.KV(PQ.Ne, (QQ => {
          XQ.client.cameraController.setCameraZoom(QQ)
        })), QQ.KV(PQ.ef, (QQ => {
          let {
            yX: wQ,
            VX: qQ
          } = QQ;
          XQ.shakePlayerCamera(WQ.RC, wQ, qQ)
        })), QQ.KV(PQ.Ac, (QQ => {
          WQ.rD.RWQ(WQ.RC).jumpMultiplier.setMultiplierType("jumpEffectAmount", QQ)
        })), (0, wQ.onGameResetOnce)((() => {
          WQ.rD.RWQ(WQ.RC).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), QQ.KV(PQ.P, (QQ => {
          WQ.rD.vx(WQ.RC).applyImpulse(QQ)
        })), QQ.KV(PQ.bf, (QQ => {
          const XQ = WQ.rD.vx(WQ.RC);
          QW().set(XQ.Lk, 0, 0, 0), QW().set(XQ.Yk, 0, 0, 0), QW().copy(XQ.Fy, QQ), XQ.Zk()
        })), (0, wQ.onGameResetOnce)((() => {
          (0, wW.setFloatingYValue)(WQ.rD.getState(WQ.RC, "physics"), WQ.rD.mN(WQ.RC), null)
        })), QQ.KV(PQ._b, (QQ => {
          let {
            lX: XQ,
            hX: wQ,
            iX: qQ
          } = QQ;
          const TQ = (0, cQ.b)(XQ);
          if (TQ === WQ.RC) {
            const QQ = WQ.rD.mN(WQ.RC).position;
            qQ ??= Math.floor(QQ[1]) - 1, (0, wW.setFloatingYValue)(WQ.rD.getState(WQ.RC, "physics"), WQ.rD.mN(WQ.RC), wQ ? qQ : null)
          }(0, iQ.b)(WQ).setFloating(TQ, wQ, qQ);
          const zQ = WQ.rD.getState(TQ, "floating");
          zQ && (zQ.isFloating = wQ, zQ.iX = wQ ? qQ : null)
        }))
      }
    }

    function zW(QQ, WQ, XQ, wQ, qQ) {
      let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!QQ.rD.EWQ(QQ.RC)) return console.log("Got resync inven but don't have inven component"), void WQ.acknowledge(wQ);
      TQ && console.error("Had to sync inven"), WQ.WQQ(wQ, qQ) && XQ.mB("chestToggleFromServer", !1, !0), XQ.mB("syncedInvenFromServer")
    }
    var sW = XQ(39287),
      FW = XQ(39289),
      PW = XQ(2043);
    var gW = XQ(4819);

    function JW(QQ) {
      const WQ = QQ.nJ;
      let XQ = 0,
        qQ = -1,
        zQ = -1 / 0,
        sQ = null,
        FQ = !0;
      const gQ = () => {
        if (++XQ % 10 !== 0) return;
        const gQ = (0, wQ.getLastReceivedPacketId)();
        if (gQ <= qQ) return;
        const [JQ, rQ, IQ] = QQ.rD.xV(QQ.RC), jQ = ! function(QQ) {
          var WQ;
          let XQ = null === (WQ = QQ.rD.pXQ(QQ.RC)) || void 0 === WQ ? void 0 : WQ.MI;
          if (void 0 === XQ) return !1;
          const wQ = new Set;
          for (; void 0 !== XQ && !wQ.has(XQ);) {
            var qQ;
            wQ.add(XQ);
            const WQ = QQ.rD.getState(XQ, "smoothToServerPos"),
              TQ = Array.isArray(WQ) ? null : null === WQ || void 0 === WQ ? void 0 : WQ.serverPosition;
            if (TQ) {
              const WQ = QQ.rD.xV(XQ);
              if (Math.abs(WQ[0] - TQ[0]) > 10 || Math.abs(WQ[1] - TQ[1]) > 10 || Math.abs(WQ[2] - TQ[2]) > 10) return !0
            }
            XQ = null === (qQ = QQ.rD.pXQ(XQ)) || void 0 === qQ ? void 0 : qQ.MI
          }
          return !1
        }(QQ) && function(QQ, WQ, XQ, wQ) {
          const qQ = TQ.h.Ij;
          for (let TQ = 0; TQ < QQ.length; TQ++) {
            const zQ = QQ[TQ];
            if (!(0, gW.h)(WQ, XQ, wQ, zQ[0] * qQ, zQ[1] * qQ, zQ[2] * qQ)) return !1
          }
          return !0
        }(WQ.tB.sj, JQ, rQ, IQ), BQ = null === sQ || Math.abs(JQ - sQ[0]) > 8 || Math.abs(rQ - sQ[1]) > 8 || Math.abs(IQ - sQ[2]) > 8, yQ = !FQ || BQ || performance.now() - zQ >= 1e4;
        FQ = jQ, jQ && yQ && (qQ = gQ, zQ = performance.now(), sQ = [JQ, rQ, IQ], (0, wQ.sendColyMessage)(PQ.yg, {
          Xs: gQ
        }))
      };
      return QQ.on("fJ", gQ), () => {
        QQ.off("fJ", gQ)
      }
    }
    var rW = XQ(39293),
      IW = XQ(1567),
      jW = XQ(2991),
      BW = XQ(1863),
      yW = XQ(3158),
      VW = XQ(5111);
    class DW {
      constructor(QQ, WQ, XQ) {
        this.KJ = QQ, this.gameNameWithVariation = WQ, this.connectionResume = XQ, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        VW.c.reset(), (0, sW.e)()
      }
      startChunkReports() {
        const QQ = function(QQ) {
            let WQ = null,
              XQ = -1 / 0,
              qQ = null;
            const TQ = () => {
                qQ = null;
                const TQ = Math.ceil(QQ.Vl[0]),
                  zQ = Math.ceil(QQ.Vl[1]);
                WQ && WQ[0] === TQ && WQ[1] === zQ || (WQ = [TQ, zQ], XQ = performance.now(), (0, wQ.sendColyMessage)(PQ.vg, {
                  Cz: TQ,
                  Lz: zQ
                }))
              },
              zQ = () => {
                null === qQ && (qQ = setTimeout(TQ, Math.max(0, XQ + 250 - performance.now())))
              };
            return TQ(), QQ.on("addRemoveDistanceChanged", zQ), () => {
              QQ.off("addRemoveDistanceChanged", zQ), null !== qQ && (clearTimeout(qQ), qQ = null)
            }
          }(this.KJ.nJ),
          WQ = JW(this.KJ);
        this.stopChunkReports = () => {
          QQ(), WQ()
        }
      }
      restartChunkStreaming() {
        (0, XW.n)(this.KJ, (0, FQ.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - rW.e)), this.startChunkReports()
      }
      register(QQ) {
        const WQ = this.KJ,
          XQ = (0, FQ.d)();
        QQ.KV(PQ.Zc, (QQ => {
          DQ.e.applyNewClientOptions(QQ)
        })), QQ.KV(PQ.ud, (QQ => {
          jW.b.onReceiveColyseusPing(QQ)
        })), QQ.KV(PQ.Qe, (QQ => {
          let {
            key: WQ,
            value: XQ
          } = QQ;
          (0, pQ.setCookie)(this.gameNameWithVariation, WQ, XQ)
        })), QQ.KV(PQ.Te, (QQ => {
          VQ.k.mB("setDiscordReportKey", QQ)
        })), (0, wQ.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), QQ.KV(PQ.oc, (qQ => {
          const {
            PQ: TQ,
            gQ: zQ
          } = qQ;
          if ((0, wQ.setAdjustment)(zQ), this.connectionResume.onInitialInfo(qQ.JQ, qQ.rQ), wQ.offlineInputReplay.UH(qQ.IQ), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", TQ);
            try {
              null === qQ.jQ && (0, FQ.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), lQ(WQ.nJ), DQ.e.apply({
                shopInfo: null,
                _shopVersion: PW.c
              });
              const XQ = WQ.rD.uWQ(WQ.RC);
              XQ.DT && (XQ.chestClosed(), VQ.k.mB("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), VQ.k.mB("initInfoReceived", QQ)
            } finally {
              const QQ = null === qQ.jQ ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = QQ, this.connectionResume.onResumeInitialInfo(qQ.jQ, (() => {
                QQ.endSeq = (0, FQ.d)().client.inventoryPrediction.lastActionSeq
              })), null === QQ && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", TQ), BW.d.markAdmitted(), (0, XW.r)(WQ), VQ.k.mB("loadingScreenState", "loadingPage:loadingWorld"), WQ.mQQ = TQ, WQ.rD.OQQ(WQ.RC, WQ.rD.names.entityName) && WQ.rD.gC(WQ.RC, WQ.rD.names.entityName), (0, FQ.d)().setEntityName(WQ.mQQ, (0, FQ.d)().getRawEntityName(WQ.RC)), WQ.lC[WQ.mQQ] = {}, WQ.rD.sC(WQ.RC, WQ.rD.names.entityName), VQ.k.mB("initInfoReceived", QQ), this.startChunkReports(), XQ.client.onServerConnectionFinalised()
        })), QQ.KV(PQ.Ae, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const QQ = this.replayResume;
            if (this.replayResume = null, !QQ) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: XQ
            } = (0, FQ.d)().client, {
              sync: qQ
            } = QQ, TQ = new Set(wQ.offlineInputReplay.takeDroppedActions());
            if (qQ) {
              var zQ;
              const wQ = null !== (zQ = QQ.endSeq) && void 0 !== zQ ? zQ : XQ.lastActionSeq;
              XQ.forget((QQ => QQ > qQ.Nq && QQ <= wQ || TQ.has(QQ))), zW(WQ, XQ, VQ.k, qQ.Nq, qQ.load)
            } else XQ.dropPending(), XQ.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), QQ.KV(PQ.hf, (QQ => {
          let {
            VT: XQ,
            bT: wQ,
            Nq: qQ
          } = QQ;
          const {
            inventoryPrediction: TQ
          } = (0, FQ.d)().client, zQ = () => {
            WQ.rD.uWQ(WQ.RC).loadFromString(XQ)
          };
          this.replayResume && (this.replayResume.sync = {
            Nq: qQ,
            load: zQ
          }), zW(WQ, TQ, VQ.k, qQ, zQ, wQ)
        })), QQ.KV(PQ.Md, (QQ => {
          let {
            type: WQ,
            location1: XQ,
            location2: wQ,
            location3: qQ,
            score: TQ
          } = QQ;
          (0, yW.logProgressionEvent)({
            type: WQ,
            location1: XQ,
            location2: wQ,
            location3: qQ,
            score: TQ
          })
        })), QQ.KV(PQ.xe, (QQ => {
          let {
            type: WQ,
            resourceType: XQ,
            amount: wQ,
            category: qQ,
            itemName: TQ
          } = QQ;
          (0, yW.logResourceEvent)({
            type: WQ,
            resourceType: XQ,
            amount: wQ,
            category: qQ,
            itemName: TQ
          })
        })), QQ.KV(PQ.Kc, (QQ => {
          let {
            leaveEventType: WQ,
            category: XQ,
            subCategory: wQ,
            value: qQ
          } = QQ;
          (0, yW.updateLeaveValue)({
            leaveEventType: WQ,
            category: XQ,
            subCategory: wQ,
            value: qQ
          })
        })), QQ.KV(PQ.Pb, (QQ => {
          let {
            cat1: WQ,
            cat2: XQ,
            cat3: wQ,
            value: qQ
          } = QQ;
          (0, yW.logCustomAnalyticsEvent)({
            cat1: WQ,
            cat2: XQ,
            cat3: wQ,
            value: qQ
          })
        })), QQ.KV(PQ.Cc, (QQ => {
          (0, FQ.d)().client.leaveGameUnwanted({
            reason: QQ,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, IW.navigatePreserveSearch)("/")
        })), QQ.KV(PQ.Ge, (QQ => {
          VQ.k.mB("serverUpdating", Date.now() + QQ, !0)
        })), QQ.KV(PQ.Yc, FW.b), QQ.KV(PQ.Rc, (QQ => {
          console.error(`[logErrorToConsole]: ${QQ}`)
        }))
      }
    }
    var pW = XQ(39301),
      GW = XQ(39311),
      UW = XQ(1049),
      bW = XQ(39307),
      vW = XQ(2526),
      dW = XQ(3881);
    class HW {
      constructor(QQ, WQ) {
        this.KJ = QQ, this.clientApi = WQ
      }
      register(QQ) {
        const WQ = this.KJ,
          XQ = (0, FQ.d)();
        QQ.KV(PQ.Cb, (QQ => {
          let {
            chatMsgId: WQ,
            worldCodeLineId: XQ,
            content: wQ,
            chatterEId: qQ
          } = QQ;
          VQ.k.mB("chat", {
            serverChatMsgId: WQ,
            worldCodeLineId: XQ,
            content: wQ,
            chatterEId: qQ
          }, !0)
        })), QQ.KV(PQ.mf, (QQ => {
          VQ.k.mB("TopRightHelper", QQ, !0)
        })), QQ.KV(PQ.if, (QQ => {
          (0, pW.d)(QQ)
        })), QQ.KV(PQ.Gc, (QQ => {
          let {
            category: WQ,
            timeframe: XQ,
            data: wQ
          } = QQ;
          VQ.k.mB("leaderboardResponse", {
            category: WQ,
            timeframe: XQ,
            data: wQ
          })
        })), QQ.KV(PQ.gf, (() => {
          VQ.k.mB("showShopTutorial", null, !0)
        })), QQ.KV(PQ.Jd, (QQ => {
          VQ.k.mB("progressBarUpdate", QQ, !0)
        })), QQ.KV(PQ.pc, (QQ => {
          VQ.k.mB("middleScreenBarInitiate", {
            duration: QQ.iq,
            cq: QQ.cq,
            horizBarRemOffset: QQ.Aq
          }, !0)
        })), QQ.KV(PQ.$d, (() => {
          VQ.k.mB("middleScreenBarRemove", !0)
        })), QQ.KV(PQ.Se, (QQ => {
          let {
            id: WQ,
            position: XQ,
            style: wQ,
            iW: qQ,
            AW: TQ
          } = QQ;
          VQ.k.mB("setDirectionArrow", {
            id: WQ,
            position: XQ,
            style: wQ,
            text: (0, PQ.y)(qQ),
            AW: TQ
          }, !0)
        })), QQ.KV(PQ.Ib, (QQ => {
          let {
            id: WQ
          } = QQ;
          VQ.k.mB("clearDirectionArrow", {
            id: WQ
          }, !0)
        })), QQ.KV(PQ.Nb, (QQ => {
          (0, dW.onCosmeticPackGranted)(QQ)
        })), QQ.KV(PQ.id, (QQ => {
          let {
            id: WQ,
            nQ: XQ
          } = QQ;
          const {
            type: qQ,
            params: TQ
          } = (0, GW.f)(XQ), zQ = {
            ...TQ
          };
          for (const wQ of GW.b) wQ in zQ && zQ[wQ] && (zQ[wQ] = (0, PQ.y)(zQ[wQ]));
          VW.c.queueQTE(WQ, qQ, zQ).getResult().then((QQ => {
            "boolean" === typeof QQ && (0, wQ.sendColyMessage)(PQ.Di, {
              qteId: WQ,
              qteResponse: QQ
            })
          }))
        })), QQ.KV(PQ.de, (QQ => {
          VW.c.cancelQTE(QQ)
        })), (0, wQ.onGameResetOnce)((() => {
          VW.c.reset()
        })), QQ.KV(PQ.jd, (QQ => {
          let {
            id: WQ,
            clientParameters: XQ
          } = QQ;
          (0, sW.i)(WQ, XQ)
        })), QQ.KV(PQ.ee, (QQ => {
          (0, sW.l)(QQ)
        })), QQ.KV(PQ.tf, (QQ => {
          let {
            text: WQ,
            id: XQ,
            destructive: qQ
          } = QQ;
          (0, sW.o)(XQ, WQ, qQ, (QQ => {
            (0, wQ.sendColyMessage)(PQ.ak, {
              gF: XQ,
              JF: QQ,
              rF: 5
            })
          }))
        })), QQ.KV(PQ.rd, (QQ => {
          let {
            info: WQ
          } = QQ;
          VQ.k.mB("overShopInfo", WQ, !0)
        })), QQ.KV(PQ.dc, (QQ => {
          let {
            sQ: XQ,
            FQ: wQ
          } = QQ;
          this.clientApi.openShop(WQ.RC, XQ, wQ)
        })), QQ.KV(PQ.$b, (QQ => {
          let {
            aT: WQ,
            lT: XQ,
            hT: wQ
          } = QQ;
          VQ.k.mB("flyingMiddleMessage", {
            content: (0, PQ.y)(WQ),
            lT: XQ,
            hT: wQ
          }, !0)
        })), QQ.KV(PQ.Kf, (QQ => {
          const WQ = QQ === UW.e ? null : {
            message: `Currently loaded as variation: ${QQ}`,
            type: "Warning"
          };
          VQ.k.mB("showPermanentBottomMessage", WQ, !0)
        })), QQ.KV(PQ.fc, (QQ => {
          let {
            messageType: WQ,
            data: wQ
          } = QQ;
          (0, bW.f)(WQ) ? (0, bW.c)(WQ, wQ) : ("freeCamPerms" === WQ && XQ.client.freeCameraController.setPerms(wQ.key, wQ.value), XQ.client.triggerGameCallback("onReceivedMessageFromServer", WQ, wQ))
        })), QQ.KV(PQ.Lb, vW.k)
      }
    }
    class aW {
      constructor(QQ, WQ, XQ, wQ) {
        this.gameNameWithVariation = QQ, this.KJ = XQ, this.connectionResume = wQ, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new UQ.c(WQ, this.KJ)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, wQ.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      TgQ(QQ) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new UQ.c(QQ, this.KJ), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(QQ, WQ) {
        const XQ = this.KJ,
          wQ = QQ => {
            this.stateReplicationHandler.setUpIfQueued(QQ)
          };
        new DW(XQ, this.gameNameWithVariation, this.connectionResume).register(QQ), new hQ(XQ).register(QQ), new OQ(XQ).register(QQ), new CQ(XQ, wQ).register(QQ), new YQ(XQ, wQ).register(QQ), new HW(XQ, WQ).register(QQ), new TW(XQ, wQ).register(QQ)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var lW = XQ(39320),
      hW = XQ(39323),
      iW = XQ(698),
      cW = XQ(3176);
    class AW {
      constructor(QQ, WQ, XQ, wQ) {
        this.msgHandler = XQ, this.listener = wQ, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new lW.c({
          reconnect: QQ,
          isLive: () => wQ.isLive(),
          onReconnected: QQ => {
            this.resumeOnRoom(QQ)
          },
          onGaveUp: (QQ, WQ) => {
            wQ.onGaveUp(QQ, WQ)
          },
          freeze: WQ,
          releaseSeat: WQ => {
            QQ(WQ).then((QQ => {
              QQ.leave(!0)
            }), (QQ => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", QQ)
            }))
          }
        })
      }
      onInitialInfo(QQ, WQ) {
        this.session.onInitialInfo(QQ, WQ)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(QQ, WQ) {
        if (this.session.onResuming(), null === QQ) {
          try {
            (0, FQ.d)().client.itemDropPrediction.reset()
          } catch (XQ) {
            console.error("Error dropping the item drop predictions on resuming", XQ)
          }
          return wQ.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, FQ.d)().client.itemDropPrediction.onResumeReplayOffered(), wQ.offlineInputReplay.replayFrom(QQ.yQ, WQ)
      }
      onResumed(QQ) {
        this.setSuspended(!1), (0, wQ.resendBeacons)();
        try {
          QQ()
        } catch (WQ) {
          console.error("Error completing the resume", WQ)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(QQ) {
        const WQ = (0, iW.f)((() => QQ.connection.isOpen));
        QQ.mV(WQ);
        const XQ = new hW.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(QQ, "silent"), QQ.leave(!1))
        }));
        QQ.onStateChange((() => {
          XQ.heard()
        }));
        const wQ = WQ => {
          WQ.persisted || QQ.leave(!0)
        };
        window.addEventListener("pagehide", wQ), QQ.mV(((WQ, XQ) => {
          if (QQ === this.attachedRoom && this.listener.isLive()) return (0, TQ.l)(WQ) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${WQ}, reconnecting`), this.listener.onDropped(WQ, XQ), void this.onConnectionDropped(QQ, String(WQ))) : void this.listener.onRoomLeft(WQ, XQ)
        })), this.attachedRoom = QQ, this.detachRoomListeners = () => {
          WQ(), XQ.dispose(), window.removeEventListener("pagehide", wQ)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(QQ) {
        QQ !== this.suspended && (this.suspended = QQ, (0, wQ.setConnectionSuspended)(QQ), (0, FQ.d)().client.itemDropPrediction.setSuspended(QQ))
      }
      detachRoom() {
        var QQ;
        null === (QQ = this.detachRoomListeners) || void 0 === QQ || QQ.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(QQ, WQ) {
        (0, cW.reportClientError)("disconnect", "Left room", WQ), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), wQ.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(QQ.reconnectionToken)
      }
      resumeOnRoom(QQ) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), QQ.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, xQ.n)(), wQ.offlineInputReplay.onConnectionReplaced(), this.msgHandler.TgQ(QQ), this.listener.onReconnected(QQ), this.attachRoom(QQ)
      }
    }
    var RW = XQ(3223),
      EW = XQ(3230),
      CW = XQ(1376),
      uW = XQ(1345),
      LW = XQ(4992),
      kW = XQ(3424),
      fW = XQ(1109),
      SW = XQ(37985),
      tW = XQ(39331),
      oW = XQ(9285),
      eW = XQ(39333),
      nW = XQ(1243),
      xW = XQ(36795),
      YW = XQ(39336),
      NW = XQ(1783),
      ZW = XQ(3002);

    function OW(QQ) {
      var WQ, XQ;
      if ("object" !== typeof QQ || null === QQ) return {
        errType: typeof QQ
      };
      const wQ = QQ;
      return {
        errType: null !== (WQ = null === (XQ = QQ.constructor) || void 0 === XQ ? void 0 : XQ.name) && void 0 !== WQ ? WQ : "",
        errName: "string" === typeof wQ.name ? wQ.name : "",
        eventType: "string" === typeof wQ.type ? wQ.type : "",
        errStack: "string" === typeof wQ.stack ? wQ.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function KW(QQ) {
      if ("undefined" !== typeof ProgressEvent && QQ instanceof ProgressEvent) return !0;
      if (!(QQ instanceof Error)) return !1;
      const WQ = QQ.code;
      return "ServerError" === QQ.name && void 0 === WQ || "AbortError" === QQ.name || "seat reservation expired." === QQ.message || "early_leave" === QQ.message
    }(0, BQ.k)((QQ => {
      (0, cW.reportClientError)("wasm_net", QQ)
    }));
    let mW = !0;

    function MW() {
      mW = !1
    }
    class QX {
      constructor(QQ) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.KJ = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = QQ.gameNameWithVariation, this.lobbyName = QQ.lobbyName, this.colyClient = QQ.colyClient, this.userContext = QQ.userContext
      }
      async connectToServer(QQ, WQ, XQ) {
        DQ.e.reset(), QQ.lC = {
          [QQ.RC]: {}
        }, QQ.mQQ = void 0, (0, xQ.n)(), (0, FQ.d)().removeAllEntityNames(), (0, FQ.d)().setEntityName(QQ.RC, this.userContext.getPlayerName()), (0, CW.t)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, NW.e)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const zQ = performance.now();
        XQ.aborted || (0, uW.n)("wasm_core_ready", zQ);
        const sQ = (0, eW.h)(this.userContext, (() => {
          const {
            roomName: wQ,
            joinOptions: qQ
          } = (0, GQ.e)(this.userContext, this.gameNameWithVariation, this.lobbyName, WQ, (QQ => kW.d.isUsingCustomGameTexturePack(QQ)));
          return qQ.joinAdHold = this.joinAdHold, qQ.renderBackend = (0, ZW.c)(QQ.nj), (0, tW.g)((() => this.colyClient.joinOrCreateUntil(XQ, wQ, qQ)), XQ)
        }));
        return VQ.k.mB("loadingScreenState", "loadingPage:joiningLobby"), await sQ.then((WQ => {
          if (this.joinedAt = performance.now(), (0, uW.n)("wasm_joined", this.joinedAt), this.KJ = QQ, this.joinAdHold) {
            const QQ = (0, NW.n)((() => {
              WQ.send(qQ.c), (0, uW.k)(), BW.d.markJoinAdEnded()
            }));
            WQ.mV(QQ), (0, wQ.onGameResetOnce)(QQ)
          }
          const XQ = new yQ(WQ);
          this.connectionResume = new AW((QQ => this.colyClient.reconnect(QQ)), (WQ => {
            QQ.Bl(WQ)
          }), XQ, {
            isLive: () => (0, FQ.d)().client.getMsgHandler() === XQ,
            onDropped: (QQ, WQ) => {
              (0, EW.g)(QQ) || this.logUnrecognisedConnectionLoss(QQ, void 0, {
                site: "drop",
                closeReason: null !== WQ && void 0 !== WQ ? WQ : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (QQ, WQ) => {
              this.onRoomLeft(QQ, WQ)
            },
            onReconnected: QQ => {
              this.incomingMsgInitialisor.TgQ(QQ), this.checkSendPath = (0, SW.h)(XQ, QQ, BQ.l)
            },
            onGaveUp: (QQ, WQ) => {
              this.onResumeGaveUp(QQ, WQ)
            }
          }), this.connectionResume.attachRoom(WQ), (0, wQ.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const TQ = XQ.send,
            zQ = XQ.KV,
            sQ = XQ.SXQ.send,
            PQ = XQ.SXQ.KV,
            gQ = XQ.wgQ;
          this.checkSendPath = (0, SW.h)(XQ, WQ, BQ.l);
          const JQ = setInterval((() => {
            TQ === XQ.send && zQ === XQ.KV && sQ === XQ.SXQ.send && PQ === XQ.SXQ.KV && gQ === XQ.wgQ || MW(), this.checkSendPath()
          }), 1e4);
          return (0, wQ.onGameResetOnce)((() => {
            clearInterval(JQ)
          })), {
            success: !0,
            successDetails: XQ
          }
        })).catch((WQ => {
          if (XQ.aborted && WQ === (0, nW.i)(XQ)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (WQ instanceof xW.f) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: WQ.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, YW.e)(WQ, WQ.leg)
            }
          };
          QQ.IB(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${WQ.code}\n`, WQ);
          const wQ = WQ.code;
          return wQ === TQ.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: TQ.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(wQ, WQ.message, {
                site: "join",
                sinceJoinStart: (0, EW.d)(performance.now() - zQ),
                ...OW(WQ)
              }, KW(WQ)),
              rematch: (0, tW.e)(WQ),
              gameRefused: (0, oW.e)(WQ),
              joinFailure: (0, YW.e)(WQ, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(QQ, WQ, XQ) {
        VQ.k.mB("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new aW(this.gameNameWithVariation, WQ.SXQ, QQ, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const qQ = WQ.ggQ();
        this.incomingMsgInitialisor.setupOnMessageListeners(qQ, XQ), (0, wQ.onConnectionToServerReady)(qQ, WQ), this.joinAdHold && BW.d.markAdmissionAwaited(), qQ.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(QQ, WQ) {
        (0, fW.jB)(new Error("Reconnect failed"), {
          ...(0, RW.k)(WQ),
          game: this.gameNameWithVariation
        }), (0, cW.reportClientError)("disconnect", "Reconnect failed", WQ.reason), (0, FQ.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !QQ,
          canPlayAgain: QQ,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, IW.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, EW.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(QQ, WQ) {
        var XQ;
        if (QQ === TQ.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${QQ}`), QQ === TQ.e.serverUpdating.code) return (0, cW.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, FQ.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.KJ.IB(`Kicked from server with code ${QQ}`, new Error);
        const wQ = Object.keys(TQ.e).find((WQ => TQ.e[WQ].code === QQ));
        (0, cW.reportClientError)("disconnect", "Left room", null !== wQ && void 0 !== wQ ? wQ : String(QQ));
        const qQ = this.onConnectionToServerLost(QQ, void 0, {
          site: "leave",
          closeReason: null !== WQ && void 0 !== WQ ? WQ : "",
          sinceJoined: this.sinceJoined()
        });
        (0, FQ.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${qQ.reason}`,
          canReconnect: qQ.canReconnect,
          requiresRefresh: qQ.requiresRefresh,
          automaticallyReconnect: null !== (XQ = qQ.automaticallyReconnect) && void 0 !== XQ && XQ
        }), (0, IW.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, LW.D)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, IW.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(QQ, WQ, XQ) {
        var wQ;
        let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (wQ = WQ) && void 0 !== wQ && wQ.endsWith(TQ.n) && (this.userContext.invalidateTrafficCode(), WQ = WQ.replace(TQ.n, "")), QQ === TQ.e.outdatedVersion.code) return console.error("Outdated client with version ", zQ.c, ", refreshing page"), (0, pQ.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (QQ === TQ.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, pQ.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const zQ in TQ.e) {
          const {
            code: XQ,
            text: wQ,
            canReconnect: qQ
          } = TQ.e[zQ];
          if (XQ === QQ) {
            console.log("matched known error", QQ, "leaving game");
            return {
              reason: "" !== wQ ? wQ : WQ || `Code: ${QQ}`,
              requiresRefresh: !1,
              canReconnect: qQ,
              automaticallyReconnect: XQ === TQ.e.customGameUpdated.code || XQ === TQ.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, EW.e)(QQ) || qQ ? console.warn("Connection lost", QQ, WQ) : this.logUnrecognisedConnectionLoss(QQ, WQ, XQ), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${QQ}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: qQ ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(QQ, WQ, XQ) {
        (0, fW.jB)(new Error("Unrecognised connection loss"), {
          code: String(QQ),
          cause: null !== WQ && void 0 !== WQ ? WQ : "",
          ...XQ,
          game: this.gameNameWithVariation,
          ...(0, EW.j)()
        })
      }
    }
  },
  39253: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => YX,
      e: () => MX
    });
    var wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ, oQ, eQ, nQ, xQ, YQ, NQ, ZQ, OQ, KQ, mQ, MQ, QW, WW, XW, wW, qW, TW, zW, sW, FW, PW, gW, JW, rW, IW, jW, BW, yW, VW, DW, pW, GW, UW, bW, vW, dW, HW, aW, lW, hW, iW, cW, AW, RW, EW, CW, uW, LW, kW, fW, SW, tW, oW, eW, nW, xW, YW, NW, ZW, OW, KW, mW = XQ(31),
      MW = XQ(37434),
      QX = XQ(39259),
      WX = XQ(39264),
      XX = XQ(9499),
      wX = XQ(658),
      qX = XQ(651),
      TX = XQ(37091);
    let zX = (wQ = (0, XX.type)("number"), qQ = (0, XX.type)("number"), TQ = (0, XX.type)("number"), zQ = (0, XX.type)("number"), sQ = (0, XX.type)("number"), FQ = (0, XX.type)("number"), PQ = (0, XX.type)("string"), gQ = class extends XX.Schema {
        constructor() {
          super(...arguments), (0, QX.b)(this, "id", JQ, this), (0, QX.b)(this, "amount", rQ, this), (0, QX.b)(this, "x", IQ, this), (0, QX.b)(this, "y", jQ, this), (0, QX.b)(this, "z", BQ, this), (0, QX.b)(this, "size", yQ, this), (0, QX.b)(this, "attributes", VQ, this)
        }
      }, JQ = (0, WX.e)(gQ.prototype, "id", [wQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rQ = (0, WX.e)(gQ.prototype, "amount", [qQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), IQ = (0, WX.e)(gQ.prototype, "x", [TQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jQ = (0, WX.e)(gQ.prototype, "y", [zQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), BQ = (0, WX.e)(gQ.prototype, "z", [sQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yQ = (0, WX.e)(gQ.prototype, "size", [FQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), VQ = (0, WX.e)(gQ.prototype, "attributes", [PQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), gQ),
      sX = (DQ = (0, XX.type)("string"), pQ = (0, XX.type)("string"), GQ = class extends XX.Schema {
        constructor() {
          super(...arguments), (0, QX.b)(this, "itemName", UQ, this), (0, QX.b)(this, "enchantmentTier", bQ, this)
        }
      }, UQ = (0, WX.e)(GQ.prototype, "itemName", [DQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), bQ = (0, WX.e)(GQ.prototype, "enchantmentTier", [pQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), GQ),
      FX = (vQ = (0, XX.type)("string"), dQ = (0, XX.type)("string"), HQ = (0, XX.type)("number"), aQ = (0, XX.type)("number"), lQ = (0, XX.type)("number"), hQ = (0, XX.type)("float32"), iQ = (0, XX.type)("float32"), cQ = (0, XX.type)("float32"), AQ = (0, XX.type)("string"), RQ = (0, XX.type)(["number"]), EQ = (0, XX.type)("boolean"), CQ = class extends XX.Schema {
        constructor() {
          super(...arguments), (0, QX.b)(this, "type", uQ, this), (0, QX.b)(this, "name", LQ, this), (0, QX.b)(this, "x", kQ, this), (0, QX.b)(this, "y", fQ, this), (0, QX.b)(this, "z", SQ, this), (0, QX.b)(this, "xRotation", tQ, this), (0, QX.b)(this, "yRotation", oQ, this), (0, QX.b)(this, "zRotation", eQ, this), (0, QX.b)(this, "followingEId", nQ, this), (0, QX.b)(this, "followingOffset", xQ, this), (0, QX.b)(this, "shouldMatchFollowingEntityRotation", YQ, this)
        }
      }, uQ = (0, WX.e)(CQ.prototype, "type", [vQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), LQ = (0, WX.e)(CQ.prototype, "name", [dQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), kQ = (0, WX.e)(CQ.prototype, "x", [HQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fQ = (0, WX.e)(CQ.prototype, "y", [aQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), SQ = (0, WX.e)(CQ.prototype, "z", [lQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tQ = (0, WX.e)(CQ.prototype, "xRotation", [hQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oQ = (0, WX.e)(CQ.prototype, "yRotation", [iQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eQ = (0, WX.e)(CQ.prototype, "zRotation", [cQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nQ = (0, WX.e)(CQ.prototype, "followingEId", [AQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), xQ = (0, WX.e)(CQ.prototype, "followingOffset", [RQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new XX.ArraySchema(0, 0, 0)
        }
      }), YQ = (0, WX.e)(CQ.prototype, "shouldMatchFollowingEntityRotation", [EQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), CQ),
      PX = (NQ = (0, XX.type)("float32"), ZQ = (0, XX.type)("float32"), OQ = (0, XX.type)("boolean"), KQ = (0, XX.type)("boolean"), mQ = (0, XX.type)("float32"), MQ = (0, XX.type)("boolean"), QW = (0, XX.type)("string"), WW = (0, XX.type)("string"), XW = (0, XX.type)("string"), wW = (0, XX.type)("string"), qW = (0, XX.type)(["number"]), TW = (0, XX.type)("number"), zW = (0, XX.type)({
        map: sX
      }), sW = class extends FX {
        constructor() {
          super(...arguments), (0, QX.b)(this, "scale", FW, this), (0, QX.b)(this, "speed", PW, this), (0, QX.b)(this, "jumping", gW, this), (0, QX.b)(this, "crouching", JW, this), (0, QX.b)(this, "cameraPitch", rW, this), (0, QX.b)(this, "armSwinging", IW, this), (0, QX.b)(this, "heldItemName", jW, this), (0, QX.b)(this, "heldItemEnchantmentTier", BW, this), (0, QX.b)(this, "pose", yW, this), (0, QX.b)(this, "ridingVehicleEId", VW, this), (0, QX.b)(this, "meshOffset", DW, this), (0, QX.b)(this, "baseRenderHeading", pW, this), (0, QX.b)(this, "armour", GW, this)
        }
      }, FW = (0, WX.e)(sW.prototype, "scale", [NQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), PW = (0, WX.e)(sW.prototype, "speed", [ZQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gW = (0, WX.e)(sW.prototype, "jumping", [OQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), JW = (0, WX.e)(sW.prototype, "crouching", [KQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), rW = (0, WX.e)(sW.prototype, "cameraPitch", [mQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), IW = (0, WX.e)(sW.prototype, "armSwinging", [MQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), jW = (0, WX.e)(sW.prototype, "heldItemName", [QW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), BW = (0, WX.e)(sW.prototype, "heldItemEnchantmentTier", [WW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), yW = (0, WX.e)(sW.prototype, "pose", [XW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), VW = (0, WX.e)(sW.prototype, "ridingVehicleEId", [wW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), DW = (0, WX.e)(sW.prototype, "meshOffset", [qW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new XX.ArraySchema(0, 0, 0)
        }
      }), pW = (0, WX.e)(sW.prototype, "baseRenderHeading", [TW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), GW = (0, WX.e)(sW.prototype, "armour", [zW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new XX.MapSchema
        }
      }), sW),
      gX = (UW = (0, XX.type)("string"), bW = (0, XX.type)("string"), vW = (0, XX.type)("string"), dW = (0, XX.type)("uint8"), HW = class extends PX {
        constructor() {
          super(...arguments), (0, QX.b)(this, "variation", aW, this), (0, QX.b)(this, "ownerDbId", lW, this), (0, QX.b)(this, "metaInfo", hW, this), (0, QX.b)(this, "aiState", iW, this)
        }
      }, aW = (0, WX.e)(HW.prototype, "variation", [UW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), lW = (0, WX.e)(HW.prototype, "ownerDbId", [bW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), hW = (0, WX.e)(HW.prototype, "metaInfo", [vW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), iW = (0, WX.e)(HW.prototype, "aiState", [dW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), HW);
    cW = (0, XX.type)("string"), AW = (0, XX.type)("string"), RW = (0, XX.type)("string"), EW = (0, XX.type)("string"), CW = class extends FX {
      constructor() {
        super(...arguments), (0, QX.b)(this, "meshKind", uW, this), (0, QX.b)(this, "meshOpts", LW, this), (0, QX.b)(this, "pose", kW, this), (0, QX.b)(this, "leaderboardTop", fW, this)
      }
    }, uW = (0, WX.e)(CW.prototype, "meshKind", [cW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), LW = (0, WX.e)(CW.prototype, "meshOpts", [AW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), kW = (0, WX.e)(CW.prototype, "pose", [RW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), fW = (0, WX.e)(CW.prototype, "leaderboardTop", [EW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function JX(QQ) {
      return Object.keys(XX.Metadata.getFields(QQ))
    }
    const rX = JX(gX);
    for (const Qw of wX.o)
      if (!rX.includes(Qw)) throw new Error(`Mob Schema is missing a networked property: "${Qw}"`);
    const IX = JX((SW = (0, XX.type)("string"), tW = (0, XX.type)("float32"), oW = (0, XX.type)("float32"), eW = (0, XX.type)("float32"), nW = (0, XX.type)("float32"), xW = class extends FX {
      constructor() {
        super(...arguments), (0, QX.b)(this, "soundName", YW, this), (0, QX.b)(this, "volume", NW, this), (0, QX.b)(this, "refDistance", ZW, this), (0, QX.b)(this, "maxHearDist", OW, this), (0, QX.b)(this, "rate", KW, this)
      }
    }, YW = (0, WX.e)(xW.prototype, "soundName", [SW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), NW = (0, WX.e)(xW.prototype, "volume", [tW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), ZW = (0, WX.e)(xW.prototype, "refDistance", [oW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return TX.h
      }
    }), OW = (0, WX.e)(xW.prototype, "maxHearDist", [eW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return TX.d
      }
    }), KW = (0, WX.e)(xW.prototype, "rate", [nW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), xW));
    for (const Qw of qX.g)
      if (!IX.includes(Qw)) throw new Error(`AudioEntity Schema is missing a replicated property: "${Qw}"`);
    var jX = XQ(38717),
      BX = XQ(1273),
      yX = XQ(663),
      VX = XQ(38495),
      DX = XQ(4534),
      pX = XQ(402),
      GX = XQ(37539),
      UX = XQ(38385),
      bX = XQ(2313),
      vX = XQ(37509),
      dX = XQ(38747),
      HX = XQ(37669),
      aX = XQ(416),
      lX = XQ.n(aX),
      hX = XQ(38214),
      iX = XQ(37354),
      cX = XQ(38360),
      AX = XQ(38407);
    class RX {
      constructor(QQ, WQ) {
        this.bloxd = QQ, this.eId = WQ, this.KJ = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.zj = !1, this.KJ = QQ.KJ
      }
      initClient(QQ) {
        var WQ, XQ, wQ;
        this.colyseusEntity = QQ, this.meshKind = QQ.meshKind, this.meshOpts = QQ.meshOpts, this.leaderboardTop = QQ.leaderboardTop, this.KJ.rD.add([QQ.x, QQ.y, QQ.z], 1, 1, null, null, !1, !1, this.eId), this.KJ.rD.sC(this.eId, "smoothToServerPos");
        const qQ = "Person" === this.meshKind;
        this.KJ.rD.sC(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...qQ ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: qQ ? [{
            nodeName: "HeadMesh",
            softTolerance: dX.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = mW.k.subscribe(`otherEntitySettings|${this.eId}|canSee`, (QQ => {
          this.updateHidingMeshMgr()
        }));
        const TQ = () => {
          const QQ = this.KJ.rD.aWQ(this.eId);
          if (!QQ) return;
          const WQ = (0, HX.g)(this.eId);
          if ("number" === typeof QQ.lE) {
            var XQ, wQ, qQ, TQ;
            const zQ = null === (XQ = (0, bX.j)("head", null === (qQ = this.getSpec()) || void 0 === qQ || null === (TQ = qQ.opts.textures) || void 0 === TQ ? void 0 : TQ.head)) || void 0 === XQ || null === (wQ = XQ.personModel) || void 0 === wQ ? void 0 : wQ.fullBody;
            return this.KJ.nj.aE.setPickable(QQ.lE, WQ && !zQ), void(0, iX.updatePersonAttachmentPickability)(this.KJ, this.eId, WQ)
          }
          const zQ = QQ.mesh;
          if (zQ)
            for (const sQ of [zQ, ...zQ.getChildMeshes(!1)]) "RB" in sQ && !sQ.name.startsWith("Cape|") && (sQ.RB = WQ)
        };
        this.canAttackSub = mW.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, TQ), this.interactableSub = mW.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, TQ), this.overlayColourSub = mW.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (QQ => {
          this.updateOverlayColour(QQ)
        })), this.opacitySub = mW.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (QQ => {
          this.updateOpacity(QQ)
        })), this.zIndexSub = mW.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (QQ => {
          this.updateZIndex(QQ)
        }));
        const zQ = this.KJ.lC[this.KJ.RC][this.eId];
        this.updateOverlayColour(null !== (WQ = null === zQ || void 0 === zQ ? void 0 : zQ.overlayColour) && void 0 !== WQ ? WQ : null), this.updateOpacity(null !== (XQ = null === zQ || void 0 === zQ ? void 0 : zQ.opacity) && void 0 !== XQ ? XQ : 1), this.updateZIndex(null !== (wQ = null === zQ || void 0 === zQ ? void 0 : zQ.zIndex) && void 0 !== wQ ? wQ : 0), this.multilineTextBoxSub = (0, vX.s)(this.KJ, this.eId)
      }
      onChangeClient(QQ, WQ) {
        if ("xRotation" === QQ || "yRotation" === QQ || "zRotation" === QQ)(0, vX.u)(this.KJ, this.eId, QQ, WQ);
        else if ("pose" === QQ) {
          const QQ = this.KJ.rD.RWQ(this.eId);
          QQ && (QQ.pose = WQ || "standing")
        } else "meshKind" === QQ || "meshOpts" === QQ ? (this[QQ] = WQ, this.queueMeshRebuild()) : "name" === QQ && "" !== WQ ? this.updateHidingMeshMgr() : "leaderboardTop" === QQ && (this.leaderboardTop = WQ, mW.k.mB(`leaderboardTop|${this.eId}`, WQ))
      }
      disposeClient() {
        this.zj = !0, this.KJ.rD.deleteEntity(this.eId), mW.k.unsubscribe(this.canSeeSub), mW.k.unsubscribe(this.canAttackSub), mW.k.unsubscribe(this.interactableSub), mW.k.unsubscribe(this.overlayColourSub), mW.k.unsubscribe(this.opacitySub), mW.k.unsubscribe(this.zIndexSub), mW.k.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var QQ, WQ;
        return {
          canSee: null !== (QQ = null === (WQ = this.KJ.lC[this.KJ.RC][this.eId]) || void 0 === WQ ? void 0 : WQ.canSee) && void 0 !== QQ && QQ,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var QQ, WQ, XQ;
        const {
          KJ: wQ
        } = this, {
          rD: qQ
        } = wQ, TQ = this.getCurrentHidingMeshMgrState();
        if ((0, pX.Wd)(this.previousHidingMeshManagerState, TQ)) return;
        if (this.previousHidingMeshManagerState = TQ, qQ.gC(this.eId, "hidingMeshManager"), null === (QQ = wQ.lC[wQ.RC][this.eId]) || void 0 === QQ || !QQ.canSee) return;
        const zQ = this.getSpec();
        if (!zQ) return;
        const {
          type: sQ,
          opts: FQ
        } = zQ;
        "Person" === sQ && (FQ.textures = (0, bX.r)(FQ.textures)), FQ.eId = this.eId, qQ.sC(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var QQ, WQ, XQ;
            "Leaderboard" === sQ && (FQ.leaderboardTop = this.leaderboardTop);
            const TQ = this.bloxd.client.meshCreator.getEntityMesh(sQ, FQ, (QQ => {
              var WQ, XQ;
              if ("number" === typeof QQ) {
                var qQ, TQ, zQ;
                const WQ = wQ.nj.aE;
                WQ.setEntityId(QQ, this.eId);
                const XQ = "Person" === sQ && (null === (qQ = (0, bX.j)("head", null === (zQ = FQ.textures) || void 0 === zQ ? void 0 : zQ.head)) || void 0 === qQ || null === (TQ = qQ.personModel) || void 0 === TQ ? void 0 : TQ.fullBody);
                return void WQ.setPickable(QQ, (0, HX.g)(this.eId) && !XQ)
              }
              const PQ = QQ;
              for (const sQ of [PQ, ...PQ.getChildMeshes(!1)]) void 0 === sQ.RB || sQ.name.startsWith("Cape|") || (sQ.RB = (0, HX.g)(this.eId), sQ.metadata ??= new wQ.nj.EB, sQ.metadata.eId = this.eId);
              this.updateOpacity(null !== (WQ = null === (XQ = wQ.lC[wQ.RC][this.eId]) || void 0 === XQ ? void 0 : XQ.opacity) && void 0 !== WQ ? WQ : 1)
            }));
            if (!TQ) return;
            const {
              lE: zQ,
              mesh: PQ,
              meshOffset: gQ,
              nameYOffset: JQ,
              modelLoaded: rQ
            } = TQ;
            null === rQ || void 0 === rQ || rQ.then((() => {
              var QQ;
              (null === (QQ = qQ.aWQ(this.eId)) || void 0 === QQ ? void 0 : QQ.mesh) === PQ && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const IQ = null === zQ ? null : wQ.nj.aE.dwQ(zQ, 0);
            if (qQ.sC(this.eId, qQ.names.mesh, {
                lE: zQ,
                xXQ: IQ,
                mesh: PQ,
                asQ: !1,
                ZXQ: "Leaderboard" !== sQ,
                offset: gQ.slice(),
                HsQ: "ParticleEmitter" === sQ && FQ.followTargetMeshOffset ? QQ => {
                  var WQ;
                  lX().copy(QQ, gQ);
                  const XQ = null === (WQ = qQ.pXQ(this.eId)) || void 0 === WQ ? void 0 : WQ.MI,
                    wQ = void 0 === XQ ? null : qQ.RWQ(XQ);
                  if (wQ) {
                    var TQ, zQ;
                    const WQ = this.bloxd.getEntityHeading(null !== (TQ = wQ.ridingVehicleEId) && void 0 !== TQ ? TQ : XQ, !0),
                      qQ = Math.sin(WQ),
                      sQ = Math.cos(WQ);
                    QQ[0] += wQ.meshOffset[0] * sQ + wQ.meshOffset[2] * qQ, QQ[1] += wQ.meshOffset[1], QQ[2] += wQ.meshOffset[2] * sQ - wQ.meshOffset[0] * qQ;
                    const FQ = null !== (zQ = wQ.ridingVehicleEId) && void 0 !== zQ ? zQ : null;
                    null !== FQ && (0, AX.e)(this.KJ, FQ, QQ)
                  }
                } : null
              }), "Person" === sQ) {
              var jQ, BQ, yQ, VQ;
              qQ.sC(this.eId, qQ.names.meshAttachments, {
                personFullBody: null !== (jQ = null === (BQ = (0, bX.j)("head", null === (VQ = FQ.textures) || void 0 === VQ ? void 0 : VQ.head)) || void 0 === BQ || null === (yQ = BQ.personModel) || void 0 === yQ ? void 0 : yQ.fullBody) && void 0 !== jQ && jQ
              });
              for (const QQ of BX.x) {
                var DQ, pQ, GQ;
                const WQ = null === (DQ = FQ.textures) || void 0 === DQ ? void 0 : DQ[QQ];
                WQ && null !== (pQ = (0, bX.j)(QQ, WQ)) && void 0 !== pQ && null !== (GQ = pQ.attachments) && void 0 !== GQ && GQ.length && UX.d.Player.meshApi.updatePlayerCosmetic(this.eId, zQ, QQ, WQ)
              }
              qQ.sC(this.eId, qQ.names.moveState), qQ.sC(this.eId, "updateWalkingState", {
                lE: zQ,
                xXQ: IQ,
                walkingLegSwingDuration: dX.w
              }), qQ.sC(this.eId, "humanoidMesh", {
                lE: zQ,
                xXQ: IQ,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), qQ.sC(this.eId, "animator", {
                lE: zQ,
                xXQ: IQ,
                modelLifeformType: "Player"
              }), cX.i.hasAnimation("Person") && qQ.sC(this.eId, "rigAnimation", {
                target: "Person",
                lE: zQ
              }), qQ.RWQ(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === sQ && null !== zQ) {
              qQ.sC(this.eId, "animator", {
                lE: zQ,
                xXQ: IQ,
                modelLifeformType: null
              });
              const QQ = (0, VX.p)(FQ.blockName);
              null !== QQ && qQ.sC(this.eId, "rigAnimation", {
                target: QQ,
                lE: zQ
              })
            }
            qQ.KsQ(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: JQ
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === FQ.autoRotate && (qQ.gC(this.eId, "meshRotation"), qQ.sC(this.eId, "autoRotate"));
            const {
              lineToEId: UQ
            } = FQ;
            (0, yX.G)(UQ) || qQ.sC(this.eId, "lineToEntity", {
              lineToEId: UQ
            });
            const bQ = wQ.lC[wQ.RC][this.eId];
            this.updateOverlayColour(null !== (QQ = null === bQ || void 0 === bQ ? void 0 : bQ.overlayColour) && void 0 !== QQ ? QQ : null), this.updateOpacity(null !== (WQ = null === bQ || void 0 === bQ ? void 0 : bQ.opacity) && void 0 !== WQ ? WQ : 1), this.updateZIndex(null !== (XQ = null === bQ || void 0 === bQ ? void 0 : bQ.zIndex) && void 0 !== XQ ? XQ : 0)
          },
          removeMeshComponent: () => {
            "Person" !== sQ && "BloxdBlock" !== sQ || qQ.gC(this.eId, "rigAnimation"), qQ.gC(this.eId, qQ.names.mesh), qQ.OQQ(this.eId, qQ.names.meshAttachments) && qQ.gC(this.eId, qQ.names.meshAttachments), qQ.gC(this.eId, "entityName"), qQ.gC(this.eId, "autoRotate"), qQ.gC(this.eId, "lineToEntity"), "Person" === sQ ? (qQ.gC(this.eId, qQ.names.moveState), qQ.gC(this.eId, "updateWalkingState"), qQ.gC(this.eId, "humanoidMesh"), qQ.gC(this.eId, "animator")) : "BloxdBlock" === sQ && qQ.gC(this.eId, "animator")
          },
          hideDist: null !== (WQ = FQ.hideDist) && void 0 !== WQ ? WQ : 80,
          movingHideDist: null !== (XQ = FQ.hideDist) && void 0 !== XQ ? XQ : 120,
          displayOutsideLoadedChunk: FQ.hideDist > 100,
          immediatelyUpdate: !0,
          Ms: "BloxdBlock" === sQ ? FQ.blockName : sQ
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.zj || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, DX.e)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(QQ) {
        var WQ, XQ;
        if ("Person" !== this.meshKind) return;
        let wQ = new GX.d(0, 0, 0, 0);
        if (null !== QQ) {
          const WQ = (0, pX.W)(QQ);
          wQ = new GX.d(WQ[0] / 255, WQ[1] / 255, WQ[2] / 255, .5)
        }
        const qQ = null !== (WQ = null === (XQ = this.KJ.rD.aWQ(this.eId)) || void 0 === XQ ? void 0 : XQ.lE) && void 0 !== WQ ? WQ : null;
        null !== qQ && UX.d.Player.meshApi.updateMeshOverlayColour(qQ, wQ)
      }
      updateZIndex(QQ) {
        var WQ;
        if ("Person" !== this.meshKind) return;
        const XQ = null === (WQ = this.KJ.rD.aWQ(this.eId)) || void 0 === WQ ? void 0 : WQ.lE;
        "number" === typeof XQ && this.KJ.nj.aE.setRenderingGroupId(XQ, QQ)
      }
      updateOpacity(QQ) {
        const WQ = this.KJ.rD.aWQ(this.eId);
        WQ && ("number" !== typeof WQ.lE ? WQ.mesh && "ParticleEmitter" !== this.meshKind && (0, hX.g)(WQ.mesh, QQ) : UX.d.Player.meshApi.updateMeshOpacity(WQ.lE, QQ))
      }
    }
    var EX = XQ(39255);
    class CX {
      constructor(QQ, WQ) {
        this.eId = WQ, this.KJ = void 0, this.schema = void 0, this.KJ = QQ.KJ
      }
      initClient(QQ) {
        this.schema = QQ, this.KJ.rD.add([QQ.x, QQ.y, QQ.z], .1, .1, null, null, !1, !1, this.eId), this.KJ.rD.sC(this.eId, "smoothToServerPos"), EX.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(QQ) {
        qX.g.includes(QQ) && EX.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        EX.e.remove(this.eId), this.KJ.rD.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: QQ,
          volume: WQ,
          refDistance: XQ,
          maxHearDist: wQ,
          rate: qQ
        } = this.schema;
        return {
          soundName: QQ,
          volume: WQ,
          refDistance: XQ,
          maxHearDist: wQ,
          rate: qQ
        }
      }
    }
    var uX = XQ(3907),
      LX = XQ(37060),
      kX = XQ(6873),
      fX = XQ(38057),
      SX = XQ(2997),
      tX = XQ(38438),
      oX = XQ(9463),
      eX = XQ(38758),
      nX = XQ(38033),
      xX = XQ(3176);
    class YX {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.SXQ = QQ, this.KJ = WQ, this.setupBudgetMs = XQ, this.now = wQ, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.zj = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.tV = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const QQ of this.promotedSetups) {
            this.promotedSetups.delete(QQ);
            const WQ = this.queuedSetups.get(QQ);
            WQ && (this.queuedSetups.delete(QQ), this.timedSetup(WQ, QQ))
          }
        }, this.createStateCallbacks = (0, oX.getStateCallbacks)(QQ), this.roomStateCallbacks = this.createStateCallbacks(QQ.state), this.roomState = QQ.state, this.setupBudgetLeftMs = XQ, this.lastRefillMs = wQ()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.SXQ.onStateChange(this.setUpPromoted), this.KJ.on("beforeInputs", this.onFrame), this.KJ.on("fJ", this.tV)
      }
      setUpQueuedEntities(QQ) {
        var WQ;
        if ((null === (WQ = (0, SX.d)().client.getMsgHandler()) || void 0 === WQ ? void 0 : WQ.SXQ) !== this.SXQ) return this.KJ.off("beforeInputs", this.onFrame), this.KJ.off("fJ", this.tV), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (QQ && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (lX().copy(NX, this.KJ.rD.xV(this.KJ.RC)); this.setupBudgetLeftMs > 0;) {
            const QQ = this.nearestQueued(NX);
            if (null === QQ) return;
            this.setUpIfQueued(QQ), this.setUpPromoted()
          }
      }
      nearestQueued(QQ) {
        let WQ = null,
          XQ = 1 / 0;
        return this.queuedSetups.forEach(((wQ, qQ) => {
          const TQ = function(QQ, WQ) {
            return (WQ.x - QQ[0]) ** 2 + (WQ.y - QQ[1]) ** 2 + (WQ.z - QQ[2]) ** 2
          }(QQ, wQ);
          (null === WQ || TQ < XQ) && (WQ = qQ, XQ = TQ)
        })), WQ
      }
      setUpOrQueue(QQ, WQ) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(QQ, WQ) ? this.timedSetup(QQ, WQ) : this.queuedSetups.set(WQ, QQ)
      }
      mustSetUpNow(QQ, WQ) {
        const XQ = this.KJ.mQQ;
        if (WQ === XQ) return !0;
        const wQ = this.roomState.entities.get(XQ);
        return !(!wQ || wQ.ridingVehicleEId !== WQ && wQ.followingEId !== WQ) || (ZX(QQ.type) === jX.e || (0, SX.d)().getFollowingEntities(WQ).length > 0)
      }
      setUpIfQueued(QQ) {
        const WQ = this.queuedSetups.get(QQ);
        WQ && (this.queuedSetups.delete(QQ), this.timedSetup(WQ, QQ))
      }
      promoteIfQueued(QQ) {
        null !== QQ && this.queuedSetups.has(QQ) && this.promotedSetups.add(QQ)
      }
      timedSetup(QQ, WQ) {
        const XQ = this.now();
        this.setupEntity(QQ, WQ), this.setupBudgetLeftMs -= this.now() - XQ
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.PD(((QQ, WQ) => {
          this.KJ.mQQ ? this.setUpOrQueue(QQ, WQ) : this.deferEntitySetupUntilInitInfo(QQ, WQ)
        })), this.roomStateCallbacks.entities.JA(((QQ, WQ) => {
          const XQ = this.deferredSetups.get(WQ);
          XQ && (mW.k.unsubscribe(XQ), this.deferredSetups.delete(WQ)), this.queuedSetups.delete(WQ), this.detach(WQ), (0, SX.d)().client.disposeEntity(WQ)
        }))
      }
      deferEntitySetupUntilInitInfo(QQ, WQ) {
        const XQ = mW.k.sV("initInfoReceived", (() => {
          this.deferredSetups.delete(WQ), this.setUpOrQueue(QQ, WQ)
        }));
        this.deferredSetups.set(WQ, XQ), (0, uX.onGameResetOnce)((() => {
          this.deferredSetups.get(WQ) === XQ && (mW.k.unsubscribe(XQ), this.deferredSetups.delete(WQ)), (0, SX.d)().updatePositionAndPhysics(this.KJ.RC, {
            type: kX.s.DEFAULT,
            tier: null
          }, !0), (0, SX.d)().takeHeldPlayerBodySize(this.KJ.RC);
          const QQ = this.KJ.rD.rWQ(this.KJ.RC);
          QQ && (QQ.movementType = kX.q.NORMAL)
        }))
      }
      setupEntity(QQ, WQ) {
        const XQ = WQ === this.KJ.mQQ;
        if (XQ)(0, SX.d)().client.ZN(this.KJ.RC, null, null);
        else {
          const {
            type: XQ
          } = QQ, wQ = ZX(XQ);
          if (void 0 === wQ) return void
          function(QQ, WQ) {
            const XQ = String(QQ);
            if (OX.has(XQ)) return;
            OX.add(XQ);
            const wQ = XQ.length > 80 ? `${XQ.slice(0,80)}...` : XQ,
              qQ = `No client handler for entity type ${JSON.stringify(wQ)}, so entity ${WQ} is not set up`;
            console.warn(qQ), (0, xX.reportClientError)("uncaught", qQ, "unknown_entity_type")
          }(XQ, WQ);
          (0, SX.d)().client.ZN(WQ, QQ, new wQ((0, SX.d)(), WQ, XQ))
        }
        const wQ = this.createStateCallbacks(QQ);
        if (XQ) return this.setupMapSchemaCallbacks(WQ, QQ, wQ, "armour"), this.setupScalarField(WQ, QQ, wQ, "scale"), this.setupScalarField(WQ, QQ, wQ, "ridingVehicleEId"), this.setupScalarField(WQ, QQ, wQ, "followingEId"), this.setupScalarField(WQ, QQ, wQ, "followingOffset"), void this.setupScalarField(WQ, QQ, wQ, "shouldMatchFollowingEntityRotation");
        for (const qQ of JX(QQ.constructor)) QQ[qQ] instanceof XX.MapSchema ? this.setupMapSchemaCallbacks(WQ, QQ, wQ, qQ) : this.setupScalarField(WQ, QQ, wQ, qQ)
      }
      setupMapSchemaCallbacks(QQ, WQ, XQ, wQ) {
        const qQ = XQ[wQ],
          TQ = new Map;
        qQ.PD(((XQ, qQ) => {
          if (this.onEntityFieldChange(QQ, WQ, wQ, {
              key: qQ,
              value: XQ
            }), !(XQ instanceof XX.Schema)) return;
          const zQ = this.createStateCallbacks(XQ),
            sQ = [];
          for (const TQ of JX(XQ.constructor)) sQ.push(this.listenForFutureChanges(zQ, TQ, (() => {
            this.onEntityFieldChange(QQ, WQ, wQ, {
              key: qQ,
              value: XQ
            })
          })));
          TQ.set(qQ, (() => {
            for (const QQ of sQ) QQ()
          }))
        })), qQ.JA(((XQ, qQ) => {
          var zQ;
          null === (zQ = TQ.get(qQ)) || void 0 === zQ || zQ(), TQ.delete(qQ), this.onEntityFieldChange(QQ, WQ, wQ, {
            key: qQ,
            value: null
          })
        })), this.addDetacher(QQ, (() => {
          for (const QQ of TQ.values()) QQ();
          TQ.clear()
        }))
      }
      setupScalarField(QQ, WQ, XQ, wQ) {
        this.onEntityFieldChange(QQ, WQ, wQ, WQ[wQ]);
        const qQ = this.listenForFutureChanges(XQ, wQ, (XQ => {
          this.onEntityFieldChange(QQ, WQ, wQ, XQ)
        }));
        this.addDetacher(QQ, qQ)
      }
      addDetacher(QQ, WQ) {
        let XQ = this.detachers.get(QQ);
        XQ || (XQ = [], this.detachers.set(QQ, XQ)), XQ.push(WQ)
      }
      detach(QQ) {
        for (const XQ of null !== (WQ = this.detachers.get(QQ)) && void 0 !== WQ ? WQ : []) {
          var WQ;
          XQ()
        }
        this.detachers.delete(QQ)
      }
      listenForFutureChanges(QQ, WQ, XQ) {
        return QQ.listen(WQ, XQ, !1)
      }
      onEntityFieldChange(QQ, WQ, XQ, wQ) {
        switch (XQ) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(wQ);
            const WQ = this.KJ.rD.RWQ((0, LX.b)(QQ));
            WQ && (WQ.ridingVehicleEId = wQ);
            break
          }
          case "armour":
            this.handleArmourChange(QQ, wQ);
            break;
          case "followingEId":
            this.promoteIfQueued(wQ), this.handleFollowingEIdChange(QQ, WQ, wQ);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(QQ, XQ, wQ);
            break;
          case "scale":
            this.handleScaleChange(QQ, wQ);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(QQ, wQ);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(QQ, wQ);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(QQ, wQ);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(QQ, XQ, wQ)
        }(0, SX.d)().client.updateEntityField(QQ, XQ, wQ)
      }
      handleArmourChange(QQ, WQ) {
        var XQ, wQ;
        const {
          key: qQ,
          value: TQ
        } = WQ;
        (0, UX.z)(QQ, qQ, null !== (XQ = null === TQ || void 0 === TQ ? void 0 : TQ.itemName) && void 0 !== XQ ? XQ : null, null !== (wQ = null === TQ || void 0 === TQ ? void 0 : TQ.enchantmentTier) && void 0 !== wQ ? wQ : null)
      }
      handleFollowingEIdChange(QQ, WQ, XQ) {
        const wQ = (0, LX.b)(QQ),
          qQ = wQ === this.KJ.RC;
        if (this.KJ.rD.gC(wQ, this.KJ.rD.names.Xp), XQ) this.KJ.rD.gC(wQ, "smoothToServerPos"), this.KJ.rD.sC(wQ, this.KJ.rD.names.Xp, {
          MI: (0, LX.b)(XQ),
          offset: Array.from(WQ.followingOffset),
          GXQ: WQ.shouldMatchFollowingEntityRotation,
          dXQ: !0,
          HXQ: (QQ, wQ) => {
            if (lX().copy(QQ, WQ.followingOffset), WQ.ridingVehicleEId === XQ) {
              const WQ = (0, LX.b)(XQ),
                qQ = (0, SX.d)().getEntityHeading(WQ, wQ);
              lX().pr(QQ, QQ, lX().ZERO, qQ)
            }
          }
        });
        else if (!qQ) {
          this.KJ.rD.OQQ(wQ, "smoothToServerPos") || this.KJ.rD.sC(wQ, "smoothToServerPos");
          const QQ = this.KJ.rD.getState(wQ, "smoothToServerPos"),
            WQ = this.KJ.rD.mN(wQ).position;
          (0, nX.setServerPosition)(QQ, WQ[0], WQ[1], WQ[2])
        }
      }
      handleRotationChange(QQ, WQ, XQ) {
        const wQ = "xRotation" === WQ ? 0 : "yRotation" === WQ ? 1 : 2;
        for (const qQ of (0, SX.d)().getFollowingEntities(QQ)) {
          const QQ = this.KJ.rD.getState(qQ, "meshRotation"),
            WQ = this.KJ.rD.pXQ(qQ);
          QQ && WQ.GXQ && (QQ.serverSetRotation[wQ] = XQ)
        }
      }
      handleScaleChange(QQ, WQ) {
        const XQ = (0, LX.b)(QQ);
        if (mW.k.mB(`entityScale|${XQ}`, WQ), XQ === this.KJ.RC) {
          var wQ;
          (0, SX.d)().removeFromEyeHeightCache(XQ);
          const QQ = this.KJ.rD.rWQ(this.KJ.RC),
            WQ = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.physicsState) && void 0 !== wQ ? wQ : {
              type: kX.s.DEFAULT,
              tier: null
            };
          return void(0, SX.d)().updatePositionAndPhysics(this.KJ.RC, WQ, !1)
        }
        const qQ = (0, SX.d)().getLifeformType(XQ);
        if (null === qQ) return;
        const {
          physicsBodyWidth: TQ,
          physicsBodyHeight: zQ
        } = (0, eX.f)(WQ, qQ);
        this.KJ.rD.VXQ(XQ, TQ, zQ, TQ)
      }
      handleBaseRenderHeadingChange(QQ, WQ) {
        const XQ = this.KJ.rD.getState(QQ, "meshRotation");
        XQ && (XQ.baseRenderRotation[1] = WQ);
        for (const wQ of (0, SX.d)().getFollowingEntities(QQ)) {
          const QQ = this.KJ.rD.getState(wQ, "meshRotation"),
            XQ = this.KJ.rD.pXQ(wQ);
          QQ && XQ.GXQ && (QQ.baseRenderRotation[1] = WQ)
        }
      }
      handleFollowingOffsetChange(QQ, WQ) {
        const XQ = this.KJ.rD.pXQ((0, LX.b)(QQ));
        if (XQ && XQ.offset) {
          const QQ = WQ ? Array.from(WQ) : lX().ZERO;
          XQ.offset[0] = QQ[0], XQ.offset[1] = QQ[1], XQ.offset[2] = QQ[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(QQ, WQ) {
        const XQ = this.KJ.rD.pXQ((0, LX.b)(QQ));
        XQ && (XQ.GXQ = null === WQ || void 0 === WQ || WQ)
      }
      handlePositionChange(QQ, WQ, XQ) {
        if (this.KJ.rD.OQQ(QQ, "smoothToServerPos")) {
          const wQ = this.KJ.rD.getState(QQ, "smoothToServerPos");
          (0, nX.setServerPositionAxis)(wQ, KX[WQ], XQ)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.PD(((QQ, WQ) => {
          this.allItems[WQ] = QQ, (0, fX.m)(this.KJ, WQ, [QQ.x, QQ.y, QQ.z], QQ.id, {
            amount: QQ.amount,
            attributes: JSON.parse(QQ.attributes),
            aq: (0, MW.b)(this.KJ).cantPickUpItem(WQ),
            size: QQ.size,
            predictedAt: (0, SX.d)().client.itemDropPrediction.onServerItemAdded(WQ)
          });
          const XQ = this.createStateCallbacks(QQ);
          for (const wQ of JX(zX)) this.onItemFieldChange(WQ, wQ, QQ[wQ]), this.addDetacher(WQ, this.listenForFutureChanges(XQ, wQ, (QQ => {
            this.onItemFieldChange(WQ, wQ, QQ)
          })))
        })), this.roomStateCallbacks.items.JA(((QQ, WQ) => {
          delete this.allItems[WQ], this.detach(WQ), (0, SX.d)().client.itemDropPrediction.onServerItemRemoved(WQ), this.KJ.rD.OQQ(WQ, this.KJ.rD.names.itemState) && this.KJ.rD.deleteEntity(WQ), (0, MW.b)(this.KJ).disposeEntity(WQ)
        }))
      }
      onItemFieldChange(QQ, WQ, XQ) {
        if (WQ in KX) {
          if (this.KJ.rD.OQQ(QQ, "itemState")) {
            const wQ = this.KJ.rD.getState(QQ, "smoothToServerPos");
            (0, nX.setServerPositionAxis)(wQ, KX[WQ], XQ), (0, SX.d)().client.itemDropPrediction.onServerItemMoved(QQ)
          }
          return
        }
        if (!this.KJ.rD.OQQ(QQ, "itemState")) return;
        const wQ = this.KJ.rD.getState(QQ, "itemState");
        "amount" === WQ && XQ !== wQ.amount && (wQ.creationTime = Date.now()), wQ[WQ] = "attributes" === WQ ? JSON.parse(XQ) : XQ
      }
      dispose() {
        if (!this.zj) {
          this.zj = !0, this.KJ.off("beforeInputs", this.onFrame), this.KJ.off("fJ", this.tV), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const QQ of this.deferredSetups.values()) mW.k.unsubscribe(QQ);
          this.deferredSetups.clear(), this.KJ.rD.gC(this.KJ.RC, this.KJ.rD.names.Xp);
          for (const QQ in this.allItems) this.KJ.rD.deleteEntity(QQ), delete this.allItems[QQ];
          for (const QQ of [...this.detachers.keys()]) this.detach(QQ);
          (0, MW.b)(this.KJ).clear();
          for (const QQ of (0, SX.d)().client.iterateEntityIds())(0, SX.d)().client.disposeEntity(QQ)
        }
      }
    }
    const NX = [0, 0, 0];

    function ZX(QQ) {
      if ("string" !== typeof QQ) return;
      const WQ = QQ.indexOf("|"),
        XQ = -1 === WQ ? QQ : QQ.slice(0, WQ),
        wQ = MX();
      return Object.hasOwn(wQ, XQ) ? wQ[XQ] : void 0
    }
    const OX = new Set;
    const KX = {
      x: 0,
      y: 1,
      z: 2
    };
    let mX = null;

    function MX() {
      return null !== mX || (mX = {
        ...Object.fromEntries(qX.i.map((QQ => {
          const {
            Ms: WQ
          } = (0, tX.c)(QQ);
          return [QQ, WQ]
        }))),
        Pebble: jX.e,
        Snowball: jX.e,
        "Snowball Launcher": jX.e,
        "Reinforced Pebble": jX.e,
        Bullet: jX.e,
        "Reinforced Ball": jX.e,
        Ball: jX.e,
        Mango: jX.e,
        "Moonstone Orb": jX.e,
        ...Object.fromEntries(wX.p.map((QQ => [(0, pX.Sb)(QQ), jX.e]))),
        Arrow: jX.e,
        "Arrow of Speed": jX.e,
        "Arrow of Poison": jX.e,
        "Arrow of Slowness": jX.e,
        "Arrow of Weakness": jX.e,
        "Arrow of Knockback": jX.e,
        "Arrow of Strength": jX.e,
        "Arrow of Invisibility": jX.e,
        "Arrow of Jumping": jX.e,
        "Arrow of Defense": jX.e,
        "Arrow of Instant Healing": jX.e,
        "Arrow of Instant Damage": jX.e,
        "Arrow of Regeneration": jX.e,
        "Arrow of Haste": jX.e,
        "Arrow of Shield": jX.e,
        "Arrow of Double Jump": jX.e,
        "Arrow of Heat Resistance": jX.e,
        "Arrow of X-Ray Vision": jX.e,
        "Arrow of Mining Yield": jX.e,
        "Arrow of Brain Rot": jX.e,
        "Arrow of Milk": jX.e,
        Fireball: jX.e,
        "Bouncy Bomb": jX.e,
        RPG: jX.e,
        "Obby RPG": jX.e,
        "Super RPG": jX.e,
        "Grenade Launcher": jX.e,
        Iceball: jX.e,
        Coconut: jX.e,
        "Splash Speed Potion": jX.e,
        "Splash Defense Potion": jX.e,
        "Splash Strength Potion": jX.e,
        "Splash Invisibility Potion": jX.e,
        "Splash Jump Potion": jX.e,
        "Splash Knockback Potion": jX.e,
        "Splash Poison Potion": jX.e,
        "Splash Speed Potion II": jX.e,
        "Splash Defense Potion II": jX.e,
        "Splash Strength Potion II": jX.e,
        "Splash Jump Potion II": jX.e,
        "Splash Knockback Potion II": jX.e,
        "Splash Poison Potion II": jX.e,
        "Splash Slowness Potion": jX.e,
        "Splash Slowness Potion II": jX.e,
        "Splash Weakness Potion": jX.e,
        "Splash Weakness Potion II": jX.e,
        "Splash Milk Potion": jX.e,
        "Splash Instant Damage Potion": jX.e,
        "Splash Instant Damage Potion II": jX.e,
        "Splash Instant Healing Potion": jX.e,
        "Splash Instant Healing Potion II": jX.e,
        "Splash Regeneration Potion": jX.e,
        "Splash Regeneration Potion II": jX.e,
        "Splash Haste Potion": jX.e,
        "Splash Haste Potion II": jX.e,
        "Splash Shield Potion": jX.e,
        "Splash Shield Potion II": jX.e,
        "Splash Double Jump Potion": jX.e,
        "Splash Heat Resistance Potion": jX.e,
        "Splash X-Ray Vision Potion": jX.e,
        "Splash Mining Yield Potion": jX.e,
        "Splash Mining Yield Potion II": jX.e,
        "Splash Brain Rot Potion": jX.e,
        "Yellow Paintball Gun": jX.e,
        "White Paintball Gun": jX.e,
        "Red Paintball Gun": jX.e,
        "Purple Paintball Gun": jX.e,
        "Pink Paintball Gun": jX.e,
        "Orange Paintball Gun": jX.e,
        "Magenta Paintball Gun": jX.e,
        "Lime Paintball Gun": jX.e,
        "Light Gray Paintball Gun": jX.e,
        "Light Blue Paintball Gun": jX.e,
        "Green Paintball Gun": jX.e,
        "Gray Paintball Gun": jX.e,
        "Cyan Paintball Gun": jX.e,
        "Brown Paintball Gun": jX.e,
        "Blue Paintball Gun": jX.e,
        "Black Paintball Gun": jX.e,
        "Yellow Heavy Paintball Gun": jX.e,
        "White Heavy Paintball Gun": jX.e,
        "Red Heavy Paintball Gun": jX.e,
        "Purple Heavy Paintball Gun": jX.e,
        "Pink Heavy Paintball Gun": jX.e,
        "Orange Heavy Paintball Gun": jX.e,
        "Magenta Heavy Paintball Gun": jX.e,
        "Lime Heavy Paintball Gun": jX.e,
        "Light Gray Heavy Paintball Gun": jX.e,
        "Light Blue Heavy Paintball Gun": jX.e,
        "Green Heavy Paintball Gun": jX.e,
        "Gray Heavy Paintball Gun": jX.e,
        "Cyan Heavy Paintball Gun": jX.e,
        "Brown Heavy Paintball Gun": jX.e,
        "Blue Heavy Paintball Gun": jX.e,
        "Black Heavy Paintball Gun": jX.e,
        "Toxin Ball": jX.e,
        "Splash Aura XP Potion": jX.e,
        "Splash Aura XP Potion II": jX.e,
        "Arrow of Aura XP": jX.e,
        Firecracker: jX.e,
        "Rainbow Firecracker": jX.e,
        "White Firecracker": jX.e,
        "Orange Firecracker": jX.e,
        "Magenta Firecracker": jX.e,
        "Light Blue Firecracker": jX.e,
        "Yellow Firecracker": jX.e,
        "Lime Firecracker": jX.e,
        "Pink Firecracker": jX.e,
        "Gray Firecracker": jX.e,
        "Light Gray Firecracker": jX.e,
        "Cyan Firecracker": jX.e,
        "Purple Firecracker": jX.e,
        "Blue Firecracker": jX.e,
        "Brown Firecracker": jX.e,
        "Green Firecracker": jX.e,
        "Red Firecracker": jX.e,
        "Black Firecracker": jX.e,
        "Firecracker Pebble": jX.e,
        "Rainbow Firecracker Pebble": jX.e,
        "White Firecracker Pebble": jX.e,
        "Orange Firecracker Pebble": jX.e,
        "Magenta Firecracker Pebble": jX.e,
        "Light Blue Firecracker Pebble": jX.e,
        "Yellow Firecracker Pebble": jX.e,
        "Lime Firecracker Pebble": jX.e,
        "Pink Firecracker Pebble": jX.e,
        "Gray Firecracker Pebble": jX.e,
        "Light Gray Firecracker Pebble": jX.e,
        "Cyan Firecracker Pebble": jX.e,
        "Purple Firecracker Pebble": jX.e,
        "Blue Firecracker Pebble": jX.e,
        "Brown Firecracker Pebble": jX.e,
        "Green Firecracker Pebble": jX.e,
        "Red Firecracker Pebble": jX.e,
        "Black Firecracker Pebble": jX.e,
        "Blinding Pebble": jX.e,
        Poop: jX.e,
        "Wood Boomerang": jX.e,
        "Stone Boomerang": jX.e,
        "Iron Boomerang": jX.e,
        "Gold Boomerang": jX.e,
        "Diamond Boomerang": jX.e,
        "Amethite Boomerang": jX.e,
        "Magmasteel Boomerang": jX.e,
        "Rubellite Boomerang": jX.e,
        "Serpentite Boomerang": jX.e,
        "Moonstone Boomerang": jX.e,
        "67 Base Projectile": jX.e,
        "67 Boosted Projectile": jX.e,
        "Capitano Grenade": jX.e,
        "Scatter Pellet": jX.e,
        "Lucky Bomb": jX.e,
        "Unlucky Bomb": jX.e,
        "Swap Orb": jX.e,
        Mesh: RX,
        AudioEntity: CX
      }), mX
    }
  },
  39293: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      i: () => zQ
    });
    var wQ = XQ(663),
      qQ = XQ(37994);
    const TQ = 4e4;
    class zQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = QQ, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(QQ, WQ, XQ) {
        const TQ = (0, wQ.M)(QQ),
          zQ = (0, wQ.M)(WQ),
          sQ = (0, wQ.M)(XQ),
          FQ = this.now();
        if (TQ !== this.lastChunkX || zQ !== this.lastChunkY || sQ !== this.lastChunkZ) {
          this.lastChunkX = TQ, this.lastChunkY = zQ, this.lastChunkZ = sQ, this.lastChunkId = (0, qQ.d)(TQ, zQ, sQ), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, FQ);
          for (const [QQ, WQ] of this.editedAt) {
            if (WQ >= FQ - 3e5) break;
            this.editedAt.delete(QQ)
          }
        } else this.editedAt.set(this.lastChunkId, FQ)
      }
      chunksEditedSince(QQ) {
        const WQ = [];
        for (const [XQ, wQ] of this.editedAt) wQ >= QQ && WQ.push(XQ);
        return WQ
      }
    }
  },
  39346: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => IW,
      f: () => tW,
      g: () => AW,
      i: () => oW
    });
    var wQ = XQ(3907),
      qQ = XQ(9145),
      TQ = XQ(36980),
      zQ = XQ(1488),
      sQ = XQ(37047),
      FQ = XQ(39255),
      PQ = XQ(39244),
      gQ = XQ(3984),
      JQ = XQ(38151),
      rQ = XQ(39349),
      IQ = XQ(1273),
      jQ = XQ(382),
      BQ = XQ(31),
      yQ = XQ(2036),
      VQ = XQ(105),
      DQ = XQ(43),
      pQ = XQ(2061),
      GQ = XQ(1972),
      UQ = XQ(3218);
    class bQ {
      constructor(QQ) {
        this.storeForMs = QQ, this.clicks = new UQ.e
      }
      click() {
        this.clicks.enqueue(Date.now());
        const QQ = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < QQ;) this.clicks.dequeue()
      }
      getNumClicksInMs(QQ) {
        let WQ = 0;
        return this.clicks.forEach((XQ => {
          XQ > Date.now() - QQ && WQ++
        })), WQ
      }
      getMaxClickSeparationInMs(QQ) {
        if (0 === this.clicks.size) return this.storeForMs;
        let WQ = 0,
          XQ = Date.now() - QQ;
        this.clicks.forEach((wQ => {
          wQ < Date.now() - QQ || (WQ = Math.max(WQ, Math.abs(wQ - XQ)), XQ = wQ)
        }));
        const wQ = Math.abs(Date.now() - XQ);
        return Math.max(WQ, wQ)
      }
    }
    class vQ {
      constructor(QQ) {
        this.storeForMs = QQ, this.clickDownDurations = new UQ.e
      }
      registerClickDownDuration(QQ) {
        this.clickDownDurations.enqueue({
          dur: QQ,
          atTime: Date.now()
        });
        const WQ = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < WQ;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(QQ) {
        if (QQ > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let WQ = 0,
          XQ = 0;
        return this.clickDownDurations.forEach((wQ => {
          wQ.atTime > Date.now() - QQ && (WQ++, XQ = Math.max(XQ, wQ.dur))
        })), `${WQ}:${XQ}`
      }
    }
    var dQ = XQ(36809),
      HQ = XQ(39354),
      aQ = XQ(26),
      lQ = XQ(2997),
      hQ = XQ(1376),
      iQ = XQ(2526),
      cQ = XQ(4760),
      AQ = XQ(158),
      RQ = XQ(38446),
      EQ = XQ(38660),
      CQ = XQ(663),
      uQ = XQ(36800),
      LQ = XQ(12),
      kQ = XQ(9580),
      fQ = XQ(1257),
      SQ = XQ(231),
      tQ = XQ(39358),
      oQ = XQ(39363),
      eQ = XQ(39370),
      nQ = XQ(38479),
      xQ = XQ(39376),
      YQ = XQ(38371),
      NQ = XQ(3673),
      ZQ = XQ(1698),
      OQ = XQ(36900),
      KQ = XQ(3045),
      mQ = XQ(36671),
      MQ = XQ(36674),
      QW = XQ(39373),
      WW = XQ(38221);
    const XW = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function wW() {
      var QQ, WQ;
      return !(null === (QQ = (0, lQ.d)().client) || void 0 === QQ || null === (WQ = QQ.freeCameraController) || void 0 === WQ || !WQ.movesFly())
    }

    function qW(QQ) {
      const WQ = QQ.on.bind(QQ);
      QQ.on = (QQ, XQ) => {
        pQ.z.has(QQ) ? WQ(QQ, XQ) : WQ(QQ, (WQ => {
          var wQ;
          return null !== (wQ = (0, lQ.d)().client) && void 0 !== wQ && wQ.isReplayMode() ? function(QQ) {
            return QQ in XW
          }(QQ) && wW() ? XQ(WQ) : void 0 : XQ(WQ)
        }))
      }
    }
    const TW = 5e3,
      zW = 1;
    let sW, FW = zW,
      PW = 0;
    const gW = !0;
    let JW = gW;
    yQ.e.subscribe("_ignoreBasicBoards", (QQ => {
      JW = QQ
    })), (0, wQ.onGameReset)((() => {
      JW = gW
    }));
    let rW = null;
    const IW = () => rW;
    let jW, BW, yW;
    var VW, DW, pW, GW, UW, bW, vW, dW, HW;
    const aW = [173, 0, 1, "h", "c", "a", 9, "g", 50, 229, "d", 8, 255, "length", 2, 220, 4, "undefined", void 0, 135, 3, 76, 63, 6, "fromCodePoint", 7, 12, "push", "b", "i", 91, "e", 72, 8191, 88, 13, 14, 210, 36, 5, 33, 143, 195, 247, "f", 38, 49, 53, 230, 219, 20, 15, 30, 165, 40, 202, 124, 16, "B", 512, 133, 43, 59, 158, 116, 172, 54, 183, 185, 136, 166, 175, 117, 1023, 127, 31, 128, 18, 17, 32, 100, 24, 10, 19, 64, 65535, 186, 73, 119, 176, !1, 86, 87, 146, 21, !0, 237, 108, 241, 106, 147, null, 224, 23, 131, 69, 137, 205, 93, 154];

    function lW(...QQ) {
      return QQ[aW[13]] = aW[2], typeof GW !== aW[17] && GW ? (new GW).decode(new UW(QQ[aW[1]])) : typeof bW !== aW[17] && bW ? bW.from(QQ[aW[1]]).toString("utf-8") : HW(QQ[aW[1]])
    }

    function hW(...QQ) {
      if (QQ[aW[13]] = aW[20], QQ[aW[1]] === function(...QQ) {
          return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
            for (cW(QQ[aW[13]] = aW[2], QQ[aW[23]] = ',=_&]ub1~A0Z7?($#8^N`HQLr.tmDzFS/|*VTBke>f<@EcChyId}n:Y{xvG295jgPiqOp%+KwRM4l6X;a)W[s"oJ!U3', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[4]] = QQ[aW[14]].length, QQ[aW[16]] = [], QQ[aW[31]] = aW[1], QQ[-aW[32]] = aW[1], QQ[aW[25]] = -aW[2]), QQ[aW[3]] = aW[1]; QQ[aW[3]] < QQ[aW[4]]; QQ[aW[3]]++)
              if (QQ[aW[29]] = QQ[aW[23]].indexOf(QQ[aW[14]][QQ[aW[3]]]), QQ[aW[29]] !== -aW[2])
                if (QQ[aW[25]] < aW[1]) QQ[aW[25]] = QQ[aW[29]];
                else {
                  cW(QQ[aW[25]] += QQ[aW[29]] * aW[30], QQ[aW[31]] |= QQ[aW[25]] << QQ[-aW[32]], QQ[-aW[32]] += (QQ[aW[25]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                  do {
                    cW(QQ[aW[16]].push(QQ[aW[31]] & aW[12]), QQ[aW[31]] >>= aW[11], QQ[-aW[32]] -= aW[11])
                  } while (QQ[-aW[32]] > aW[25]);
                  QQ[aW[25]] = -aW[2]
                } return QQ[aW[25]] > -aW[2] && QQ[aW[16]].push((QQ[aW[31]] | QQ[aW[25]] << QQ[-aW[32]]) & aW[12]), lW(QQ[aW[16]])
          }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
        }(103) + aW[58]) return QQ[aW[2]] + QQ[aW[14]]
    }

    function iW() {}

    function cW() {
      cW = function() {}
    }

    function AW(QQ) {
      function WQ() {
        return QQ.rD.wXQ(QQ.RC)
      }
      qW(QQ.inputs.down), qW(QQ.inputs.up);
      for (const wQ of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const WQ = (WQ, XQ) => {
          var qQ, TQ;
          if (wW()) {
            var zQ;
            const qQ = XW[wQ];
            var sQ, FQ;
            if (qQ) null === (sQ = (0, lQ.d)().client) || void 0 === sQ || null === (FQ = sQ.freeCameraController) || void 0 === FQ || FQ.handlefreeCamKeyPress(qQ, WQ, XQ);
            return void(XQ || null !== (zQ = (0, lQ.d)().client) && void 0 !== zQ && zQ.isReplayMode() || (QQ.rD.PXQ()[wQ] = !1))
          }
          if (null !== (qQ = (0, lQ.d)().client) && void 0 !== qQ && null !== (TQ = qQ.freeCameraController) && void 0 !== TQ && TQ.isKeyPressOverriden(WQ)) return;
          QQ.rD.PXQ()[wQ] = XQ
        };
        QQ.inputs.down.on(wQ, (QQ => WQ(QQ, !0))), QQ.inputs.up.on(wQ, (QQ => WQ(QQ, !1)))
      }
      QQ.inputs.down.on("crouch", (() => {
        if (wW()) return;
        if (!QQ.zD.canCrouch) return;
        const WQ = QQ.rD.PXQ();
        aQ.b.get("clientEscMenuOptions").crouchIsToggle && (WQ.crouchToggled = !WQ.crouchToggled && !WQ.padSneakToggled), WQ.padSneakToggled = !1
      }));
      const XQ = () => {
        const QQ = WQ();
        QQ.isGun() && QQ.inaccuracyCalculator.jump()
      };
      QQ.inputs.down.on("jump", (QQ => {
        wW() || (XQ(), jW(QQ))
      }));
      for (const wQ of pQ.j) QQ.inputs.down.on(wQ, (QQ => {
        var WQ, XQ;
        null !== (WQ = (0, lQ.d)().client) && void 0 !== WQ && null !== (XQ = WQ.freeCameraController) && void 0 !== XQ && XQ.handlefreeCamKeyPress(wQ, QQ, !0) && (QQ.preventDefault(), QQ.stopPropagation())
      })), QQ.inputs.up.on(wQ, (QQ => {
        var WQ, XQ;
        null !== (WQ = (0, lQ.d)().client) && void 0 !== WQ && null !== (XQ = WQ.freeCameraController) && void 0 !== XQ && XQ.handlefreeCamKeyPress(wQ, QQ, !1) && (QQ.preventDefault(), QQ.stopPropagation())
      }));
      QQ.inputs.down.on("recordGame", (() => {
        var QQ, WQ;
        null === (QQ = (0, lQ.d)().client) || void 0 === QQ || null === (WQ = QQ.gameRecorder) || void 0 === WQ || WQ.toggleRecording()
      })), QQ.inputs.down.on("recordClip", (() => {
        var QQ, WQ;
        (0, dQ.e)() || null === (QQ = (0, lQ.d)().client) || void 0 === QQ || null === (WQ = QQ.gameRecorder) || void 0 === WQ || WQ.saveClip()
      }));
      for (const wQ of pQ.z) QQ.inputs.down.on(wQ, (() => {
        var QQ;
        if ((0, HQ.d)()) return;
        if ("replayViewerOpen" === wQ) return void BQ.k.mB("replayViewer|requested", "toggle");
        const WQ = null === (QQ = (0, lQ.d)().client) || void 0 === QQ ? void 0 : QQ.gameReplayer;
        ((0, dQ.e)() || null !== WQ && void 0 !== WQ && WQ.isReplayMode()) && (null === WQ || void 0 === WQ || WQ.handleAction(wQ))
      }));
      const zQ = new bQ(3e4),
        JQ = new vQ(4e4);
      let rQ = 0;
      const DQ = QQ => {
          let WQ = 0,
            XQ = null;
          const wQ = WQ => null !== WQ && WQ === XQ && (XQ = null, QQ(), !0);
          return {
            press: () => (WQ++, (0, tQ.b)() || (wQ(XQ), XQ = WQ), WQ),
            owns: QQ => QQ === XQ,
            release: wQ
          }
        },
        UQ = (QQ, XQ) => {
          XQ && oW(IQ.d.TouchDownFirePrimary), QQ ? kQ() : ((0, EQ.c)(), WQ().wwQ()), XQ || oW(IQ.d.DownFirePrimary), tW(!0), zQ.click();
          const qQ = zQ.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            TQ = zQ.getMaxClickSeparationInMs(1e4) < 20,
            sQ = zQ.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (qQ || TQ || sQ) {
            let QQ;
            if (qQ) QQ = 30;
            else if (TQ) QQ = 50;
            else {
              if (!sQ) throw new Error("???");
              QQ = 70
            }(0, wQ.sendColyMessage)(gQ.tk, QQ)
          }
        },
        cQ = new oQ.b,
        AQ = DQ((() => {
          oQ.b.stopRunning();
          const QQ = Date.now() - rQ;
          JQ.registerClickDownDuration(QQ), WQ().QwQ(), oW(IQ.d.UpFirePrimary), tW(!1);
          const XQ = JQ.clickDownDurationsCheck(4e4);
          (0, wQ.sendColyMessage)(gQ.Cg, XQ)
        }));
      let RQ = 0;
      QQ.inputs.down.on("primary-fire", (function(QQ) {
        RQ = AQ.press(), AQ.owns(RQ) && (rQ = Date.now(), Math.abs(performance.now() - QQ.timeStamp) > 5e3 || (UQ(QQ.altKey, "changedTouches" in QQ), jW(QQ)))
      })), QQ.inputs.up.on("primary-fire", (function(QQ) {
        AQ.release(RQ) && jW(QQ, !0)
      }));
      const CQ = () => {
          WQ().ZPQ(), oW(IQ.d.DownFireSecondary), tW(!0), QQ.CQQ && !QQ.CQQ.position && (0, PQ.k)()
        },
        uQ = DQ((() => {
          WQ().MXQ(), oW(IQ.d.UpFireSecondary), tW(!1)
        }));
      let LQ = 0;
      QQ.inputs.down.on("alt-fire", (function(QQ) {
        LQ = uQ.press(), uQ.owns(LQ) && (CQ(), jW(QQ))
      })), QQ.inputs.up.on("alt-fire", (function(QQ) {
        uQ.release(LQ) && jW(QQ, !0)
      }));
      const kQ = () => WQ().mPQ();
      QQ.inputs.down.on("mid-fire", (() => {
        (0, tQ.b)() || kQ()
      }));
      const xQ = QQ => {
          (0, wQ.sendColyMessage)(gQ.Kh, QQ, !0)
        },
        sW = QQ => {
          (0, wQ.sendColyMessage)(gQ.Oh, {
            Vs: QQ,
            Ds: gW()
          }, !0)
        };
      for (const wQ of ["SpecialAction1", "SpecialAction2"]) QQ.inputs.down.on(wQ, (() => {
        xQ(wQ)
      })), QQ.inputs.up.on(wQ, (() => {
        sW(wQ)
      }));
      const PW = () => {
        const QQ = WQ();
        QQ.isGun() && QQ.reload(Date.now())
      };
      QQ.inputs.down.on("ReloadGun", PW);
      const gW = () => {
        let WQ = "a";
        return QQ.physics.testSolid.toString().includes("yr") || (WQ = "b"), WQ
      };
      QQ.inputs.down.on("OpenInventory", (QQ => {
        QQ.preventDefault(), (0, ZQ.A)(QQ, "inventory", (0, eQ.b)((0, lQ.f)()))
      })), QQ.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const JW = QQ => {
        BQ.k.mB("DropItemKeyPressed", QQ)
      };
      QQ.inputs.down.on("DropItem", (() => {
        JW(QQ.rD.PXQ().crouch)
      })), QQ.inputs.down.on("OpenShop", (WQ => {
        (0, dQ.e)() || "inGame" === aQ.b.get("gameState") && (0, ZQ.w)(WQ, jQ.r.SHOP, !(0, qQ.b)(QQ.zD.shopInfo))
      })), QQ.inputs.down.on("OpenLobbyLeaderboard", (WQ => {
        (0, dQ.e)() || "inGame" === aQ.b.get("gameState") && (0, ZQ.w)(WQ, jQ.r.LOBBY_LEADERBOARD, (0, QW.b)(QQ.zD))
      })), QQ.inputs.down.on("HideUi", (() => {
        BQ.k.mB("showUi", !1)
      })), QQ.inputs.up.on("HideUi", (() => {
        BQ.k.mB("showUi", !0)
      }));
      const IW = QQ => {
        0 === QQ && (QQ = 10), BQ.k.mB("setSelectedInventorySlotI", QQ - 1), BQ.k.mB("numkeyPressed", QQ)
      };
      for (let wQ = 1; wQ <= 10; wQ++) QQ.inputs.down.on("HotBarSlot" + wQ.toString(), (() => {
        IW(wQ)
      }));
      QQ.inputs.down.on("OpenTasksAndLeaderboard", (WQ => {
        const XQ = (0, OQ.q)();
        XQ ? (0, ZQ.C)(WQ, !0, XQ) : (0, ZQ.A)(WQ, "retentionFeatures", !(!QQ.zD._tasks && !QQ.zD._availableLeaderboards))
      })), QQ.inputs.down.on("OpenCodeEditor", (WQ => {
        (0, ZQ.C)(WQ, (0, iQ.c)((0, hQ.e)()), (() => {
          (0, iQ.h)(QQ.rD.xV(QQ.RC))
        }))
      })), QQ.inputs.bind("ToggleFullCoordinateOverlay", "F3"), QQ.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        BQ.k.mB("toggleFullCoordinateOverlay")
      }));
      const yW = () => {
        (0, lQ.d)().client.cameraController.swapCameraZoom()
      };
      QQ.inputs.down.on("SwapCameraZoom", yW), QQ.inputs.down.on("OpenInviteLink", (QQ => {
        (0, ZQ.A)(QQ, "inviteLink", VQ.featureFlags.canUseInviteLinks)
      })), QQ.inputs.bind("Y", "KeyY"), QQ.inputs.down.on("Y", (QQ => {
        (0, dQ.e)() || BQ.k.mB("YKeyPressed")
      })), QQ.inputs.bind("X", "KeyX"), QQ.inputs.down.on("X", (QQ => {
        (0, dQ.e)() || BQ.k.mB("XKeyPressed")
      })), QQ.inputs.down.on("OpenEmoteWheel", (() => {
        BQ.k.mB("requestEmoteWheelHoldOpen")
      })), QQ.inputs.up.on("OpenEmoteWheel", (() => {
        BQ.k.mB("requestEmoteWheelHoldRelease")
      })), QQ.inputs.down.on("Zoom", (() => {
        if ("inGame" === aQ.b.get("gameState")) {
          QQ.rD.getState(QQ.RC, "playerCameraAdjustment").zoomKeyPressed = !0, (0, lQ.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), QQ.inputs.up.on("Zoom", (() => {
        QQ.rD.getState(QQ.RC, "playerCameraAdjustment").zoomKeyPressed = !1
      })), RW();
      const VW = QQ => function() {
        return BW(), QQ(...arguments)
      };

      function DW(QQ) {
        "inGame" !== aQ.b.get("gameState") || (0, ZQ.t)() || (BQ.k.mB("ctrlCrouchWithoutFullscreen"), QQ.preventDefault())
      }
      rW = {
        primaryFireDown: VW((QQ => {
          const WQ = AQ.press();
          return AQ.owns(WQ) && (rQ = Date.now(), UQ(!1, !1), QQ && cQ.start()), WQ
        })),
        primaryFireUp: VW((QQ => {
          AQ.release(QQ)
        })),
        altFireDown: VW((() => {
          const QQ = uQ.press();
          return uQ.owns(QQ) && CQ(), QQ
        })),
        altFireUp: VW((QQ => {
          uQ.release(QQ)
        })),
        jumpDown: VW(XQ),
        specialActionDown: VW(xQ),
        specialActionUp: VW(sW),
        reloadGun: VW(PW),
        dropItem: VW(JW),
        swapCameraZoom: VW(yW),
        pickBlock: VW(kQ)
      }, QQ.inputs.down.on("ctrlCrouch", DW), QQ.inputs.up.on("ctrlCrouch", DW), QQ.inputs.bind("ctrlCrouch", "ControlLeft");
      const pW = QQ => {
        "inGame" === aQ.b.get("gameState") && QQ.ctrlKey && !(0, ZQ.t)() && QQ.preventDefault()
      };
      document.addEventListener("keydown", pW), document.addEventListener("keyup", pW), document.addEventListener("keypress", pW), QQ.inputs.bind("Alt", "AltLeft", "AltRight"), QQ.inputs.down.on("Alt", (QQ => {
        QQ.preventDefault()
      }));
      const GW = WQ => (0, YQ.g)(QQ, WQ),
        UW = WQ => (0, YQ.k)(QQ, WQ),
        bW = [0, 0, 0],
        vW = [0, 0, 1];
      QQ.on("afterRender", (WQ => {
        MQ.m.frame(WQ, QQ.camera.heading, QQ.camera.pitch, MQ.j.drawn), (0, TQ.h)(QQ.camera.heading), (0, YQ.m)(QQ, bW, vW), (0, lQ.d)().client.triggerGameCallback("onAfterRender", WQ, {
          cameraHeading: QQ.camera.heading,
          cameraPitch: QQ.camera.pitch,
          cameraPosition: bW,
          cameraDirection: vW,
          tanHalfFovX: (0, YQ.d)(QQ),
          tanHalfFovY: Math.tan(QQ.nj.Zm().fov / 2),
          screenBandPct: {
            x: NQ.b,
            y: (0, NQ.k)()
          },
          projectWorldPosToScreenPos: GW,
          projectWorldPosToViewport: UW
        })
      })), QQ.camera.uR = (0, mQ.startLookDebug)("js"), QQ.inputs.QE = mQ.noteLookDroppedCopy, (0, KQ.m)("remesh") && (0, WW.i)(QQ), QQ.on("beforeInputs", (() => {
        if ((0, HQ.d)()) return QQ.inputs.fY.dx = 0, void(QQ.inputs.fY.dy = 0);
        if (QQ.camera.fY.dx += QQ.inputs.fY.dx, QQ.camera.fY.dy += QQ.inputs.fY.dy, 0 !== QQ.inputs.fY.dx || 0 !== QQ.inputs.fY.dy) {
          QQ.rD.getState(QQ.RC, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        QQ.inputs.fY.dx = 0, QQ.inputs.fY.dy = 0
      }));
      let dW = 0;
      const HW = [0, 0, 0],
        aW = [0, 0, 0],
        lW = {
          base: HW,
          max: aW
        },
        hW = QQ => {
          const WQ = SQ.h.droppedBlockSize / 2;
          return [0, 1, 2].every((XQ => QQ[XQ] >= HW[XQ] - WQ && QQ[XQ] <= aW[XQ] + WQ))
        };
      QQ.on("fJ", (function(WQ) {
        BQ.k.mB("noaTick", WQ);
        const XQ = (0, lQ.d)().client;
        if (XQ.triggerGameCallback("fJ", WQ), XQ.isClientGameSessionActive()) try {
          FQ.e.fJ(WQ)
        } catch (zQ) {
          console.error("Error ticking audio entities", zQ)
        }
        if (!QQ.rD.WXQ(QQ.RC).isAlive) return;
        Date.now() - dW > 9e3 && (! function() {
          const QQ = (0, lQ.f)();
          "number" === typeof QQ.zD.speedMultiplier && "number" === typeof QQ.zD.jumpAmount && (0, wQ.sendColyMessage)(gQ.mi, {
            ws: (0, fQ.e)(QQ.zD.speedMultiplier),
            qs: (0, fQ.d)(QQ.zD.jumpAmount),
            Ts: (0, fQ.e)(QQ.zD.crouchingSpeed),
            zs: (0, fQ.e)(QQ.zD.walkingSpeed),
            ss: (0, fQ.e)(QQ.zD.runningSpeed),
            Fs: (0, fQ.d)(QQ.aQQ),
            Ps: QQ.rD.rWQ(QQ.RC).jumpForce,
            gs: QQ.rD.mN(1).width,
            Is: QQ.rD.mN(1).height,
            Bs: QQ.rD.vx(1).Bs
          }, !0)
        }(), dW = Date.now());
        const qQ = QQ.rD.PXQ();
        if ((qQ.jump || qQ.forward || qQ.backward || qQ.left || qQ.right || qQ.sprint) && BQ.k.mB("usedKeyboard"), QQ.rD.LWQ(QQ.RC) && !0 === QQ.zD.canPickUpItems) {
          const WQ = QQ.rD.xV(QQ.RC),
            XQ = (0, GQ.m)(FW),
            qQ = (0, GQ.o)(FW);
          HW[0] = WQ[0] - XQ, HW[1] = WQ[1] - .6 * qQ, HW[2] = WQ[2] - XQ, aW[0] = WQ[0] + XQ, aW[1] = WQ[1] + SQ.h.xy + .6 * qQ, aW[2] = WQ[2] + XQ;
          const TQ = QQ.rD.msQ(lW, QQ.rD.names.autoRotate),
            {
              itemDropPrediction: zQ
            } = (0, lQ.d)().client,
            FQ = wQ.offlineInputReplay.holdsInput();
          if (TQ.length > 0)
            for (const JQ of TQ) {
              const WQ = QQ.rD.getState(JQ, "itemState");
              if (void 0 === WQ || Date.now() - WQ.creationTime < 500) continue;
              let XQ = JQ,
                qQ = null;
              if (WQ.aq) {
                const QQ = zQ.pickupTarget(JQ, hW, FQ);
                if (null === QQ) continue;
                ({
                  Ss: XQ,
                  ns: qQ
                } = QQ)
              }
              const TQ = QQ.rD.getState(XQ, "itemState");
              if (TQ.aq && null === qQ) continue;
              let rQ = 0,
                IQ = null,
                jQ = !1;
              if (0 === TQ.amount) jQ = !0;
              else {
                const {
                  amountPickedUp: WQ
                } = QQ.rD.CWQ(QQ.RC).pickUpItem({
                  name: TQ.name,
                  typeObj: TQ.typeObj,
                  amount: TQ.amount,
                  attributes: TQ.attributes
                });
                if (rQ = WQ, 0 === rQ) continue;
                IQ = nQ.b.pickUp(TQ, rQ), TQ.amount -= rQ, TQ.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === TQ.amount ? jQ = !0 : TQ.creationTime = Date.now() + TW
              }
              const BQ = (0, lQ.d)().client.inventoryPrediction.record(IQ);
              (0, wQ.sendColyMessage)(gQ.Dh, {
                Ss: null === qQ ? XQ : "",
                os: rQ,
                es: PQ.h,
                Ez: BQ,
                ns: qQ
              }, !0), jQ && (FQ && zQ.onPickedUpOffline(XQ, BQ, qQ), null === qQ && QQ.rD.deleteEntity(XQ));
              sQ.b.play("pickUp", SQ.h.pickupSoundVol).rate(1 + Math.random() * SQ.h.pickupSoundRateVariation)
            }
        }
        if (!QQ.rD.aWQ(QQ.RC)) return;
        const TQ = QQ.inputs.fY.DWQ;
        if (0 !== TQ) {
          const WQ = TQ > 0 ? 1 : -1;
          QQ.inputs.state["mid-fire"] || QQ.inputs.state.Alt || !QQ.zD.useInventory ? (QQ.inputs.state["mid-fire"] && BQ.k.mB("requestEmoteWheelClose"), (0, lQ.d)().client.cameraController.handleScrollZoom(WQ)) : BQ.k.mB("ScrollInventorySlot", WQ)
        }
      })), yQ.e.subscribe("droppedItemScale", (QQ => {
        FW = "number" === typeof QQ && isFinite(QQ) ? QQ : zW
      }))
    }

    function RW() {
      const QQ = (0, lQ.f)();
      if (QQ)
        for (const WQ in pQ.s) {
          QQ.inputs.unbind(WQ);
          for (const XQ of pQ.s[WQ]) QQ.inputs.bind(WQ, XQ)
        }
    }
    cW(VW = {}, DW = ['.bBRFlqK]+c3=>huxA#N"T.r:7U(i{aVgb5/e$Q@JRf/!"/EdIzJ', "ClY&~I&K6mko{%`njw,ps#ht<O", "*85W~MZ!pBo(.>E9FQniLW&Ek5Iihn}A*{XVr", ".+DFc>WiwS`wAYM$", "j6Wph1Bi%,2/](,9&nb0yK(ir+M`xbqu", "3X&t<=2L", "8&gN;T|9jH&3S$B<j>LIlaLPk5I/rb`r?dXpd<f2l%)", "#O1F5g+9Xd$];%DK4}[@bvmuHm{O?(Y)CQui+l7=sEwka(infQPkFzoL", '1_uVju{r#Dm!i$`ACC$/l<6sdDd%b"%)EJ]FEP6iPgprzb/<8O[@Z_mh', "!8G#9I$p}mw,/b;Y4_5]bsZ", "pJ=QR7B(DgyC7rt", "2&<I81@E~59ri{6", '7&L!cn]@hw"s"(:<vV,R38^.FHI].%sKrfYF+v0r?eRzp*Y)f@r!%', "qV!k68+fV`*W2hu!{}o>auG2vsfoJYHn.OHInnS.4+0d<h]{zb;kB", '0IoJ7wZ!TeRO*{s}x&_Fc>V2e+Y"S18{p7:Niuzr.B!/$B9<7{HJa:lh', '"d$ihv;iOI&V7Cr~WIrFT7b(Ttkbm<kKmvC@%$apwsT(W%e(SnD],', "CKBi||7f{d*+6$7f,&k@xQ2=l59", "A{%Vb8k!:63LE$%", "<f!iO:6EbI3uAuROv)IkkTAKJ+<R!>(9K8CRW[tr95_]{{9(1d[{l&XiF", "n@{*pg&KXDQ]2$.k<Oo]Zv~h", "HA&sE:<Lls.7B_=*PZ", 'QOTp%uW@hE.uW$W}]V_>hs)H2sh!z*uS"&i!h}nio6^Bhqa(u_|so8D)tA', "RM,Cga}SLl<dL", "<n~#yKiPGJg%5(`A", "5+^ir/UL", "wb*N93|oG74L,z9E}M]0F:k82,s]/_0!]~bj2MXEg5uiAu!~]FBVq&I!zB", '1b@R.QwLLln/Mbd@nI2>%W"}3l4@Zb', '&}WJPo*iMB?8f%"<_Z', "5fps4G@KoDYbt*G!OFh", ">FG#i:HrT6.NQ|2<zdyicn927%;U*hk~n_)!8_@EUH?U7uwf%{g&k)1iLmwwL", "$lc0+v<LLSt+=uJVKbj8u2$hWHdw?P=)OO]F", "~86/kKum2lGzgPzSQ&$iw}i;DgW", "T&:0,:/p?AG+#$$SAL", "gb!C0Iv)YJh&>Ck~AFG!bv@sc%WCM*z$>).k$3~SEEQN;a,kj{b0;/L(b", "yOUjzlN7}wezcg]VhSwk;XzpzOv,HdtVDbsVpn3mk+r&r*:k", '%{U@9#`vsIB"YQw!I7ZFdg$!07(z@jp*nMu@E', "SlM{a1&wVwrAxbE)VnlRvqN&ol:Sy|YO4}gt", "|}J!lgv)KJJzTaGr^vK0)w_3C", 'Bv9&LuTpdtj"E$?uPnPQ*', 'Q%[sc3*#"lJ&<%o{T+rF;=V@x+<i}qE*AnHJ]1Ot6S', ")OsVt_rv}6U]>_`n4kvpeP=f,HaKRqC$$5h", 'X7OV%$,@q5i&2""kMXNkpg]&jg*W=uZfrv(#o1?}RW0%,z9<7_si', 'XcIis"a8nE:3z*>*;a;Jtl:)MI=ULlv{4&}zEQmpotT>8Pg~"nL!88cKfB', "8ntGKTmu{%n,`nr}l)$C>##Lk+,PT%skf7xF", "HMt#c#2LNSVz9qc$CcTVE", "9n%WY|Fp,IY#>zZu]Dz&~Mei:6", "~)~0wo<#Ns?@eh{u)F{*Y|8.UJNLL", "Rv[V`sFvRd;mnz5~hCMs$I,@!,m*D*.YR>./R1pvLJ%qK{hAqdb", "?+/V4=[}otu*#{N{<@qRJ1Frx+>/OYS<", "k+mNN:/r!d6f&$#(EQFi476LfO.U0dbc%w*RC5jB9%ZJl6*9!8#j$)WfTt", '<+aiMo_SN56n>z"kS)9#7vci$H$R{nF(q)]ItlDvEJZ*LY>*Ov"sS', "_JaV}qb;OH4a`Psk}&$Vudzvb", "ClT]uqZ", "K6e@#W^v6m6#cgC$d}[N]5(i6my%>_8{", "JMfF3QZ", "g+MW>#G7@%6o.%L~b7mV@Kd@(AF20*Cr<_RN/u?}wsP3M6(kDMh", 'Q%rJK=;ANSHKnYiEh`jWynDvPgga5Bs9[atFMo"8_`@R@YCnxXo>r', "2Vf]pNISuEX%4CA{3OXR/$<E8O</B_XE;Z", '|dGI"uN9`JXC3QOkd5[iV=J(tWv/`a[^Q_bRDvwB#+Szf{q@rJQknK{rsBG', "Ib{&,78vwDsPh{HA)8(#:aeL", '<7i!]l;LB5_P$"Cr', "0b%p9q92)g*&K$WKf{=:lv9Ew6}z&aF(h64F||YhHs=@XzX*?X%Gq[:h", "RwdsGMdfPg`3[C.9i0apm8km1IOg.>,9zIy8O", "T+fp2n#@WHWe/*FSUJIWjlsfDAkPh1rKDQ<Jr:si#%.(W$[^]+VkLsZ3RO0OL", '^lY&9nWf"EPS(uCS+&</7sK#R5N(H66', ">I!p[pWfye^nt*A)35fGG2W@Y`ykh(m", "CC#sz1!rV`Cz+P<S7)ZIo/2KzOSP33QSDQ<!uDmSsI:Pr|C!", 'WQ;/&N_v9%{5tbd@WOkN_<+9HJf"~B[^^fMj', "vc:tP_1&~eIpL", 'G7spb5}!CJUd?>e(XAkN"$Dp1JVAg1}u?%tG%_A@{%FO;$5raZ', "yf;C(/g!LwFgObD}L7f><qRr>lD/F$ku(L", "$M;JoW0!WgLIhjwn3Dh", "pf7F>[WwXes]*Qe(uF)!&w`rRA6o__nrGJ0][/22H6", "0JoCXK4@RA6M`(sKaXBi", "4_gt{IbEr+}zZ", "Td6G;$)h~AkA|$AOt8O8E", "F{.kk=~peOmoL", "q%QCh_lr(OkrX_#$xZ", "Qn#s)#EETDN1L[CV!M9zS7Z", "7Q(&In69pJU3%j", '@csV]1uhY6>/*"C!d5VFVQ<75tO/hj;YiL', "|n~z{|%h", "a+bj{$n2PI0P)*|}w%LIW<wB+mXdL", 'c)6/!pXKe%?NsY*@4s=:c"sw17:VH|PrKbV]J5GibHW/?{9<mw40y3L(26', "gJb0J/%u5t", ")&J!e579sE>DFj%", "vO6GjW!r!,Xk36[}7MVI(/^8{5nb9_)Sum4FjufEpHxNE{J", "zdL#sst!Emvi&%)E~cgt8PuuOE}z(qlKO8OR", "@cg0k3x.cAnij[3)q){#!pf1|J7az*z(xd)#*d=@$B", "^lap3p22Jg&/:ac(pZ", 'w+v]"|5FnH`3{$x~m7V!r$.}?O', "?sjW=P/p)B[wb{A{", "mvm8:#3}M7!R;hi(m>Ppw<Yum%Iaw$lKCCu@uMJEYJXPw6^)ewJ&ZoLK6l$", "bC>*BWCrNeNDc%y{4+b8x$ruveT6g(#{ucE0a:pHG6", "KFh&NWr!h6", ".d(T!pugCEX/H*5~YQYG?Tk3<Bzwd%9<", "GJ_IEP,K06>", "OQ/sPlJL", "0baiLv?md%9_L", "q)+Fr/`MyD0PohzS6vC8o5sL_,tMXzqApmnV?pOp#AhT1zDK6L", "w);JK>Ji|EGzL_BO[+ezo:NBR5uo9_WK)8x>9ME@GItzWb", "5]HFi8OpR%;vvnhA;a`@Q1QBo6pk?PkK>Z", "Un:&1/^red_`)|*~wFb0@dOvK7=N51i(nff>3W:.Zm(rC*=}AlFVV2Z", ".zl:BaO=", "R6=:1Wkh", "kn,9n?jc", ";DNuo]rq", "xF:a0|YY", "j=I~%:2nA", "3t)u", "JQam>M+(d.K{MIfM", "7eVu4Motr@~c5#8!", '(e+p1!M("udPBIrM', "Joi1RUOt@4TYcI]r", "d.91aX@G|{RRLp(", "#K[XO<cb", '6KzO"p_X', "#dZ#V`}X", "c/E^b", "#dZ#l4v(", "|?zYo", "sFzO]Q1>]P7onQS@", "O^!n}PBKaxH4rxvs", "0FG%i#P6Y0,,Zt^d", "<^M4b;kl,J`:tSF^", "4Q1#f21If5b;y;O", "jdj3{j4u", "]NMj{[DO", "AH*Y@*o(", "4<pzs3[(", "m6|j!39", "L~pzz3&(", "Z?aqAF@T", "M$~ihz~3", "2H.zt$K@HUEg;uQQfA51..^VK6>xcL=", "Bx;MkCtNN(e", "tBns+^(D", "mlh!&!VD", "tBD!k/AD", "+XQgX^J4", "tNK!", "_*[/LxH3", "h,w/)+m3", "pO).)I*3", "2(J<780!", ';."=nhqi']), cW(pW = function(...QQ) {
        cW(QQ[aW[13]] = aW[1], QQ[aW[5]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], QQ[aW[2]] = aW[18], QQ[aW[14]] = []);
        try {
          cW(QQ[aW[2]] = Object, QQ[aW[14]][aW[27]]("".__proto__.constructor.name))
        } catch (DW) {}
        QQ: for (QQ[aW[15]] = aW[1]; QQ[aW[15]] < QQ[aW[5]][aW[13]]; QQ[aW[15]]++) try {
          for (QQ[aW[2]] = QQ[aW[5]][QQ[aW[15]]](), QQ[aW[16]] = aW[1]; QQ[aW[16]] < QQ[aW[14]][aW[13]]; QQ[aW[16]]++)
            if (typeof QQ[aW[2]][QQ[aW[14]][QQ[aW[16]]]] === aW[17]) continue QQ;
          return QQ[aW[2]]
        } catch (DW) {}
        return QQ[aW[2]] || this
      }() || {}, GW = pW.TextDecoder, UW = pW.Uint8Array, bW = pW.Tj, vW = pW.String || String, dW = pW.Array || Array, HW = function(...QQ) {
        return cW(QQ[aW[13]] = aW[1], QQ[aW[5]] = new dW(aW[76]), QQ[aW[28]] = vW[aW[24]] || vW.fromCharCode, QQ[aW[14]] = []),
          function(...WQ) {
            for (cW(WQ[aW[13]] = aW[2], WQ[aW[21]] = aW[18], WQ[aW[14]] = aW[18], WQ[aW[20]] = WQ[aW[1]][aW[13]], QQ[aW[14]][aW[13]] = aW[1]), WQ[-aW[19]] = aW[1]; WQ[-aW[19]] < WQ[aW[20]];) cW(WQ[aW[14]] = WQ[aW[1]][WQ[-aW[19]]++], WQ[aW[14]] <= aW[74] ? WQ[aW[21]] = WQ[aW[14]] : WQ[aW[14]] <= 223 ? WQ[aW[21]] = (WQ[aW[14]] & aW[75]) << aW[23] | WQ[aW[1]][WQ[-aW[19]]++] & aW[22] : WQ[aW[14]] <= 239 ? WQ[aW[21]] = (WQ[aW[14]] & aW[51]) << aW[26] | (WQ[aW[1]][WQ[-aW[19]]++] & aW[22]) << aW[23] | WQ[aW[1]][WQ[-aW[19]]++] & aW[22] : vW[aW[24]] ? WQ[aW[21]] = (WQ[aW[14]] & aW[25]) << aW[77] | (WQ[aW[1]][WQ[-aW[19]]++] & aW[22]) << aW[26] | (WQ[aW[1]][WQ[-aW[19]]++] & aW[22]) << aW[23] | WQ[aW[1]][WQ[-aW[19]]++] & aW[22] : (WQ[aW[21]] = aW[22], WQ[-aW[19]] += aW[20]), QQ[aW[14]][aW[27]](QQ[aW[5]][WQ[aW[21]]] || (QQ[aW[5]][WQ[aW[21]]] = QQ[aW[28]](WQ[aW[21]]))));
            return QQ[aW[14]].join("")
          }
      }()),
      function(...QQ) {
        return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
          for (cW(QQ[aW[13]] = aW[2], QQ[aW[5]] = 'ZLhbCjFitJRemB%6YASEO,^fr({*k@!V0G}Kun$<)9~cyXv2_>:&psIWD7gdlq5wH+`UMPaQz]8#/NTo31"|[=.;x4?', QQ[-aW[0]] = "" + (QQ[aW[1]] || ""), QQ[aW[4]] = QQ[-aW[0]].length, QQ[aW[10]] = [], QQ[-aW[8]] = aW[1], QQ[aW[9]] = aW[1], QQ[aW[7]] = -aW[2]), QQ[aW[3]] = aW[1]; QQ[aW[3]] < QQ[aW[4]]; QQ[aW[3]]++)
            if (QQ[aW[6]] = QQ[aW[5]].indexOf(QQ[-aW[0]][QQ[aW[3]]]), QQ[aW[6]] !== -aW[2])
              if (QQ[aW[7]] < aW[1]) QQ[aW[7]] = QQ[aW[6]];
              else {
                cW(QQ[aW[7]] += QQ[aW[6]] * aW[30], QQ[-aW[8]] |= QQ[aW[7]] << QQ[aW[9]], QQ[aW[9]] += (QQ[aW[7]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                do {
                  cW(QQ[aW[10]].push(QQ[-aW[8]] & aW[12]), QQ[-aW[8]] >>= aW[11], QQ[aW[9]] -= aW[11])
                } while (QQ[aW[9]] > aW[25]);
                QQ[aW[7]] = -aW[2]
              } return QQ[aW[7]] > -aW[2] && QQ[aW[10]].push((QQ[-aW[8]] | QQ[aW[7]] << QQ[aW[9]]) & aW[12]), lW(QQ[aW[10]])
        }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
      }(104) + "j" in iW && function(...QQ) {
        cW(QQ[aW[13]] = aW[1], QQ[aW[4]] = function(...WQ) {
          return cW(WQ[aW[13]] = aW[14], WQ[-aW[37]] = [], WQ[aW[28]] = WQ[aW[1]].length, WQ[aW[1]].sort(((QQ, WQ) => QQ - WQ)), QQ[aW[38]](WQ[-aW[37]], [], aW[1], WQ[aW[28]], WQ[aW[1]], WQ[aW[2]])), WQ[-aW[37]]
        }, QQ[aW[38]] = function(...WQ) {
          if (cW(WQ[aW[13]] = aW[23], WQ[aW[40]] = aW[101]), !(WQ[aW[39]] < aW[1])) {
            if (WQ[aW[39]] === aW[1]) return WQ[aW[1]].push(WQ[aW[2]]);
            for (WQ[aW[28]] = WQ[aW[14]]; WQ[aW[28]] < WQ[aW[20]] && !(WQ[aW[16]][WQ[aW[28]]] > WQ[aW[39]]); WQ[aW[28]]++) WQ[aW[28]] > WQ[aW[14]] && WQ[aW[16]][WQ[aW[28]]] === WQ[aW[16]][WQ[aW[28]] - aW[2]] || cW(WQ[aW[40]] = Array.from(WQ[aW[2]]), WQ[aW[40]].push(WQ[aW[16]][WQ[aW[28]]]), QQ[aW[38]](WQ[aW[1]], WQ[aW[40]], WQ[aW[28]] + aW[2], WQ[aW[20]], WQ[aW[16]], WQ[aW[39]] - WQ[aW[16]][WQ[aW[28]]]))
          }
        }, console.log(QQ[aW[4]]))
      }(), cW(yW = (...QQ) => {
        QQ[aW[13]] = aW[2],
          function(...QQ) {
            return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
              for (cW(QQ[aW[13]] = aW[2], QQ[-aW[48]] = 'Z%PtbiAgfpFISnkhBXJV(;z@m[xNT!o?.LrM09}q1)CU+_{c>38]|w=KQ^$j<W6GDR7YH2E*~5/&s`y"Oavd:4lue,#', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[14]].length, QQ[aW[16]] = [], QQ[aW[50]] = aW[1], QQ[aW[44]] = aW[1], QQ[aW[49]] = -aW[2]), QQ[aW[3]] = aW[1]; QQ[aW[3]] < QQ[aW[20]]; QQ[aW[3]]++)
                if (QQ[aW[29]] = QQ[-aW[48]].indexOf(QQ[aW[14]][QQ[aW[3]]]), QQ[aW[29]] !== -aW[2])
                  if (QQ[aW[49]] < aW[1]) QQ[aW[49]] = QQ[aW[29]];
                  else {
                    cW(QQ[aW[49]] += QQ[aW[29]] * aW[30], QQ[aW[50]] |= QQ[aW[49]] << QQ[aW[44]], QQ[aW[44]] += (QQ[aW[49]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                    do {
                      cW(QQ[aW[16]].push(QQ[aW[50]] & aW[12]), QQ[aW[50]] >>= aW[11], QQ[aW[44]] -= aW[11])
                    } while (QQ[aW[44]] > aW[25]);
                    QQ[aW[49]] = -aW[2]
                  } return QQ[aW[49]] > -aW[2] && QQ[aW[16]].push((QQ[aW[50]] | QQ[aW[49]] << QQ[aW[44]]) & aW[12]), lW(QQ[aW[16]])
            }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
          }(aW[97]) in iW && function(...QQ) {
            cW(QQ[aW[13]] = aW[1], QQ[aW[86]] = function(...QQ) {
              function WQ(...QQ) {
                return QQ[aW[13]] = aW[2], sQ(TQ(gQ(QQ[aW[1]])))
              }

              function XQ(...QQ) {
                return QQ[aW[13]] = aW[14], sQ(zQ(gQ(QQ[aW[1]]), gQ(QQ[aW[2]])))
              }

              function wQ(...QQ) {
                return QQ[aW[13]] = aW[14], FQ(zQ(gQ(QQ[aW[1]]), gQ(QQ[aW[2]])))
              }

              function qQ(...QQ) {
                return QQ[aW[13]] = aW[20], PQ(zQ(gQ(QQ[aW[1]]), gQ(QQ[aW[2]])), QQ[aW[14]])
              }

              function TQ(...QQ) {
                return QQ[aW[13]] = aW[2], rQ(UQ(JQ(QQ[aW[1]]), QQ[aW[1]].length * aW[11]))
              }

              function zQ(QQ, WQ) {
                var XQ, wQ, qQ;

                function TQ(...QQ) {
                  for (cW(QQ[aW[13]] = aW[2], QQ[-aW[53]] = '6bLjIqoYpJABlh1}r5ayW7./R#u2NK;M_P8Z3O>zwt9+*Cx)g4e@|XFvSd?ED]GH(%{cf^!k"i&,[$QT<n~=VUms`0:', QQ[aW[28]] = "" + (QQ[aW[1]] || ""), QQ[aW[4]] = QQ[aW[28]].length, QQ[aW[16]] = [], QQ[aW[31]] = aW[1], QQ[aW[56]] = aW[1], QQ[-aW[55]] = -aW[2]), QQ[aW[11]] = aW[1]; QQ[aW[11]] < QQ[aW[4]]; QQ[aW[11]]++)
                    if (QQ[-aW[54]] = QQ[-aW[53]].indexOf(QQ[aW[28]][QQ[aW[11]]]), QQ[-aW[54]] !== -aW[2])
                      if (QQ[-aW[55]] < aW[1]) QQ[-aW[55]] = QQ[-aW[54]];
                      else {
                        cW(QQ[-aW[55]] += QQ[-aW[54]] * aW[30], QQ[aW[31]] |= QQ[-aW[55]] << QQ[aW[56]], QQ[aW[56]] += (QQ[-aW[55]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                        do {
                          cW(QQ[aW[16]].push(QQ[aW[31]] & aW[12]), QQ[aW[31]] >>= aW[11], QQ[aW[56]] -= aW[11])
                        } while (QQ[aW[56]] > aW[25]);
                        QQ[-aW[55]] = -aW[2]
                      } return QQ[-aW[55]] > -aW[2] && QQ[aW[16]].push((QQ[aW[31]] | QQ[-aW[55]] << QQ[aW[56]]) & aW[12]), lW(QQ[aW[16]])
                }

                function zQ(...QQ) {
                  return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = TQ(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
                }(XQ = JQ(QQ)).length > aW[57] && (XQ = UQ(XQ, QQ.length * aW[11]));
                var sQ = Array(aW[57]),
                  FQ = Array(aW[57]);
                for (wQ = aW[1]; wQ < aW[57]; wQ++) cW(sQ[wQ] = 909522486 ^ XQ[wQ], FQ[wQ] = 1549556828 ^ XQ[wQ]);
                return qQ = UQ(sQ.concat(JQ(WQ)), aW[59] + WQ.length * aW[11]), rQ(UQ(FQ.concat(qQ), hW(zQ(115) + aW[58], aW[59], 256)))
              }

              function sQ(...WQ) {
                function XQ(...QQ) {
                  for (cW(QQ[aW[13]] = aW[2], QQ[aW[2]] = 'fX(Ss7uJ5ED/?gv_]bGk3&i0toU#IW,|6FlRpM%wZ}mL+`e>Kn[^CYQ82NxrB@<!"da~4=9O{PAH;$)Vq*1yzT.:hjc', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[61]] = QQ[aW[14]].length, QQ[aW[10]] = [], QQ[aW[39]] = aW[1], QQ[aW[23]] = aW[1], QQ[aW[7]] = -aW[2]), QQ[-aW[60]] = aW[1]; QQ[-aW[60]] < QQ[aW[61]]; QQ[-aW[60]]++)
                    if (QQ[-aW[62]] = QQ[aW[2]].indexOf(QQ[aW[14]][QQ[-aW[60]]]), QQ[-aW[62]] !== -aW[2])
                      if (QQ[aW[7]] < aW[1]) QQ[aW[7]] = QQ[-aW[62]];
                      else {
                        cW(QQ[aW[7]] += QQ[-aW[62]] * aW[30], QQ[aW[39]] |= QQ[aW[7]] << QQ[aW[23]], QQ[aW[23]] += (QQ[aW[7]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                        do {
                          cW(QQ[aW[10]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[23]] -= aW[11])
                        } while (QQ[aW[23]] > aW[25]);
                        QQ[aW[7]] = -aW[2]
                      } return QQ[aW[7]] > -aW[2] && QQ[aW[10]].push((QQ[aW[39]] | QQ[aW[7]] << QQ[aW[23]]) & aW[12]), lW(QQ[aW[10]])
                }

                function wQ(...QQ) {
                  return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = XQ(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
                }
                WQ[aW[13]] = aW[2];
                try {
                  QQ[aW[63]]
                } catch (qQ) {
                  QQ[aW[63]] = aW[1]
                }
                for (cW(WQ[-aW[36]] = QQ[aW[63]] ? wQ(aW[64]) + wQ(aW[72]) + wQ(118) : wQ(aW[64]) + wQ(aW[88]) + wQ(120), WQ[aW[28]] = "", WQ[aW[65]] = aW[18]), WQ[aW[10]] = aW[1]; WQ[aW[10]] < WQ[aW[1]].length; WQ[aW[10]]++) cW(WQ[aW[65]] = WQ[aW[1]].charCodeAt(WQ[aW[10]]), WQ[aW[28]] += WQ[-aW[36]].charAt(WQ[aW[65]] >>> aW[16] & aW[51]) + WQ[-aW[36]].charAt(WQ[aW[65]] & aW[51]));
                return WQ[aW[28]]
              }

              function FQ(...WQ) {
                function XQ(...QQ) {
                  for (cW(QQ[aW[13]] = aW[2], QQ[aW[2]] = 'a`ckjOF~%5Wwr?oxSq|DJUECKl9@inBs4YIM2<dN>67^be8AQtR!uXhm_P3,y=V0f]ZG*gv#+/.HLp:{;})z1"$(&[T', QQ[aW[66]] = "" + (QQ[aW[1]] || ""), QQ[-aW[67]] = QQ[aW[66]].length, QQ[aW[10]] = [], QQ[aW[39]] = aW[1], QQ[aW[68]] = aW[1], QQ[aW[25]] = -aW[2]), QQ[aW[11]] = aW[1]; QQ[aW[11]] < QQ[-aW[67]]; QQ[aW[11]]++)
                    if (QQ[aW[6]] = QQ[aW[2]].indexOf(QQ[aW[66]][QQ[aW[11]]]), QQ[aW[6]] !== -aW[2])
                      if (QQ[aW[25]] < aW[1]) QQ[aW[25]] = QQ[aW[6]];
                      else {
                        cW(QQ[aW[25]] += QQ[aW[6]] * aW[30], QQ[aW[39]] |= QQ[aW[25]] << QQ[aW[68]], QQ[aW[68]] += (QQ[aW[25]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                        do {
                          cW(QQ[aW[10]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[68]] -= aW[11])
                        } while (QQ[aW[68]] > aW[25]);
                        QQ[aW[25]] = -aW[2]
                      } return QQ[aW[25]] > -aW[2] && QQ[aW[10]].push((QQ[aW[39]] | QQ[aW[25]] << QQ[aW[68]]) & aW[12]), lW(QQ[aW[10]])
                }

                function wQ(...QQ) {
                  return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = XQ(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
                }
                WQ[aW[13]] = aW[2];
                try {
                  QQ[aW[2]]
                } catch (qQ) {
                  QQ[aW[2]] = ""
                }
                for (cW(WQ[aW[2]] = wQ(121) + wQ(122) + wQ(123) + wQ(aW[56]) + wQ(125), WQ[aW[14]] = "", WQ[aW[4]] = WQ[aW[1]].length), WQ[aW[69]] = aW[1]; WQ[aW[69]] < WQ[aW[4]]; WQ[aW[69]] += aW[20])
                  for (WQ[aW[39]] = WQ[aW[1]].charCodeAt(WQ[aW[69]]) << aW[57] | (WQ[aW[69]] + aW[2] < WQ[aW[4]] ? WQ[aW[1]].charCodeAt(WQ[aW[69]] + aW[2]) << aW[11] : aW[1]) | (WQ[aW[69]] + aW[14] < WQ[aW[4]] ? WQ[aW[1]].charCodeAt(WQ[aW[69]] + aW[14]) : aW[1]), WQ[aW[44]] = aW[1]; WQ[aW[44]] < aW[16]; WQ[aW[44]]++) WQ[aW[69]] * aW[11] + WQ[aW[44]] * aW[23] > WQ[aW[1]].length * aW[11] ? WQ[aW[14]] += QQ[aW[2]] : WQ[aW[14]] += WQ[aW[2]].charAt(WQ[aW[39]] >>> aW[23] * (aW[20] - WQ[aW[44]]) & aW[22]);
                return WQ[aW[14]]
              }

              function PQ(...QQ) {
                var WQ, XQ, wQ, qQ;
                for (cW(QQ[aW[13]] = aW[14], QQ[aW[71]] = QQ[aW[2]].length, QQ[aW[20]] = Array()), QQ[-aW[70]] = Array(Math.ceil(QQ[aW[1]].length / aW[14])), WQ = aW[1]; WQ < QQ[-aW[70]].length; WQ++) QQ[-aW[70]][WQ] = QQ[aW[1]].charCodeAt(WQ * aW[14]) << aW[11] | QQ[aW[1]].charCodeAt(WQ * aW[14] + aW[2]);
                for (; QQ[-aW[70]].length > aW[1];) {
                  for (cW(qQ = Array(), wQ = aW[1]), WQ = aW[1]; WQ < QQ[-aW[70]].length; WQ++) cW(wQ = (wQ << aW[57]) + QQ[-aW[70]][WQ], XQ = Math.floor(wQ / QQ[aW[71]]), wQ -= XQ * QQ[aW[71]]), (qQ.length > aW[1] || XQ > aW[1]) && (qQ[qQ.length] = XQ);
                  cW(QQ[aW[20]][QQ[aW[20]].length] = wQ, QQ[-aW[70]] = qQ)
                }
                for (QQ[aW[10]] = "", WQ = QQ[aW[20]].length - aW[2]; WQ >= aW[1]; WQ--) QQ[aW[10]] += QQ[aW[2]].charAt(QQ[aW[20]][WQ]);
                for (QQ[aW[31]] = Math.ceil(QQ[aW[1]].length * aW[11] / (Math.log(QQ[aW[2]].length) / Math.log(aW[14]))), WQ = QQ[aW[10]].length; WQ < QQ[aW[31]]; WQ++) QQ[aW[10]] = QQ[aW[2]][aW[1]] + QQ[aW[10]];
                return QQ[aW[10]]
              }

              function gQ(...QQ) {
                var WQ, XQ;
                for (cW(QQ[aW[13]] = aW[2], QQ[aW[5]] = "", QQ[aW[72]] = -aW[2]); ++QQ[aW[72]] < QQ[aW[1]].length;) cW(WQ = QQ[aW[1]].charCodeAt(QQ[aW[72]]), XQ = QQ[aW[72]] + aW[2] < QQ[aW[1]].length ? QQ[aW[1]].charCodeAt(QQ[aW[72]] + aW[2]) : aW[1]), 55296 <= WQ && WQ <= 56319 && 56320 <= XQ && XQ <= 57343 && cW(WQ = 65536 + ((WQ & aW[73]) << aW[82]) + (XQ & aW[73]), QQ[aW[72]]++), WQ <= aW[74] ? QQ[aW[5]] += String.fromCharCode(WQ) : WQ <= 2047 ? QQ[aW[5]] += String.fromCharCode(192 | WQ >>> aW[23] & aW[75], aW[76] | WQ & aW[22]) : WQ <= aW[85] ? QQ[aW[5]] += String.fromCharCode(aW[102] | WQ >>> aW[26] & aW[51], aW[76] | WQ >>> aW[23] & aW[22], aW[76] | WQ & aW[22]) : WQ <= 2097151 && (QQ[aW[5]] += String.fromCharCode(240 | WQ >>> aW[77] & aW[25], aW[76] | WQ >>> aW[26] & aW[22], aW[76] | WQ >>> aW[23] & aW[22], aW[76] | WQ & aW[22]));
                return QQ[aW[5]]
              }

              function JQ(...QQ) {
                for (cW(QQ[aW[13]] = aW[2], QQ[aW[5]] = Array(QQ[aW[1]].length >> aW[14])), QQ[aW[78]] = aW[1]; QQ[aW[78]] < QQ[aW[5]].length; QQ[aW[78]]++) QQ[aW[5]][QQ[aW[78]]] = aW[1];
                for (QQ[aW[78]] = aW[1]; QQ[aW[78]] < QQ[aW[1]].length * aW[11]; QQ[aW[78]] += aW[11]) QQ[aW[5]][QQ[aW[78]] >> aW[39]] |= (QQ[aW[1]].charCodeAt(QQ[aW[78]] / aW[11]) & aW[12]) << aW[81] - QQ[aW[78]] % aW[79];
                return QQ[aW[5]]
              }

              function rQ(...QQ) {
                for (cW(QQ[aW[13]] = aW[2], QQ[-aW[80]] = ""), QQ[aW[28]] = aW[1]; QQ[aW[28]] < QQ[aW[1]].length * aW[79]; QQ[aW[28]] += aW[11]) QQ[-aW[80]] += String.fromCharCode(QQ[aW[1]][QQ[aW[28]] >> aW[39]] >>> aW[81] - QQ[aW[28]] % aW[79] & aW[12]);
                return QQ[-aW[80]]
              }

              function IQ(...QQ) {
                return QQ[aW[13]] = aW[14], QQ[aW[1]] >>> QQ[aW[2]] | QQ[aW[1]] << aW[79] - QQ[aW[2]]
              }

              function jQ(...QQ) {
                return QQ[aW[13]] = aW[14], QQ[aW[1]] >>> QQ[aW[2]]
              }

              function BQ(...QQ) {
                return QQ[aW[13]] = aW[20], QQ[aW[1]] & QQ[aW[2]] ^ ~QQ[aW[1]] & QQ[aW[14]]
              }

              function yQ(...QQ) {
                return QQ[aW[13]] = aW[20], QQ[aW[1]] & QQ[aW[2]] ^ QQ[aW[1]] & QQ[aW[14]] ^ QQ[aW[2]] & QQ[aW[14]]
              }

              function VQ(...QQ) {
                return QQ[aW[13]] = aW[2], IQ(QQ[aW[1]], aW[14]) ^ IQ(QQ[aW[1]], aW[35]) ^ IQ(QQ[aW[1]], 22)
              }

              function DQ(...QQ) {
                return QQ[aW[13]] = aW[2], IQ(QQ[aW[1]], aW[23]) ^ IQ(QQ[aW[1]], 11) ^ IQ(QQ[aW[1]], 25)
              }

              function pQ(...QQ) {
                return QQ[aW[13]] = aW[2], IQ(QQ[aW[1]], aW[25]) ^ IQ(QQ[aW[1]], aW[77]) ^ jQ(QQ[aW[1]], aW[20])
              }

              function GQ(...QQ) {
                return QQ[aW[13]] = aW[2], IQ(QQ[aW[1]], aW[78]) ^ IQ(QQ[aW[1]], aW[83]) ^ jQ(QQ[aW[1]], aW[82])
              }

              function UQ(WQ, XQ) {
                var wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, UQ, vQ = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                for (wQ = new Array(aW[84]), cW(WQ[XQ >> aW[39]] |= aW[76] << aW[81] - XQ % aW[79], WQ[(XQ + aW[84] >> aW[6] << aW[16]) + aW[51]] = XQ), rQ = aW[1]; rQ < WQ.length; rQ += aW[57]) {
                  for (cW(qQ = vQ[aW[1]], TQ = vQ[aW[2]], zQ = vQ[aW[14]], sQ = vQ[aW[20]], FQ = vQ[aW[16]], PQ = vQ[aW[39]], gQ = vQ[aW[23]], JQ = vQ[aW[25]]), IQ = aW[1]; IQ < aW[84]; IQ++) cW(IQ < aW[57] ? wQ[IQ] = WQ[IQ + rQ] : wQ[IQ] = bQ(bQ(bQ(GQ(wQ[IQ - aW[14]]), wQ[IQ - aW[25]]), pQ(wQ[IQ - aW[51]])), wQ[IQ - aW[57]]), jQ = bQ(bQ(bQ(bQ(JQ, DQ(FQ)), BQ(FQ, PQ, gQ)), QQ[aW[46]][IQ]), wQ[IQ]), UQ = bQ(VQ(qQ), yQ(qQ, TQ, zQ)), JQ = gQ, gQ = PQ, PQ = FQ, FQ = bQ(sQ, jQ), sQ = zQ, zQ = TQ, TQ = qQ, qQ = bQ(jQ, UQ));
                  cW(vQ[aW[1]] = bQ(qQ, vQ[aW[1]]), vQ[aW[2]] = bQ(TQ, vQ[aW[2]]), vQ[aW[14]] = bQ(zQ, vQ[aW[14]]), vQ[aW[20]] = bQ(sQ, vQ[aW[20]]), vQ[aW[16]] = bQ(FQ, vQ[aW[16]]), vQ[aW[39]] = bQ(PQ, vQ[aW[39]]), vQ[aW[23]] = bQ(gQ, vQ[aW[23]]), vQ[aW[25]] = bQ(JQ, vQ[aW[25]]))
                }
                return vQ
              }

              function bQ(...QQ) {
                return cW(QQ[aW[13]] = aW[14], QQ[aW[14]] = (QQ[aW[1]] & aW[85]) + (QQ[aW[2]] & aW[85]), QQ[aW[20]] = (QQ[aW[1]] >> aW[57]) + (QQ[aW[2]] >> aW[57]) + (QQ[aW[14]] >> aW[57])), QQ[aW[20]] << aW[57] | QQ[aW[14]] & aW[85]
              }
              return cW(QQ[aW[13]] = aW[1], QQ[aW[63]] = aW[1], QQ[aW[2]] = ""), QQ[aW[46]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: WQ,
                b64: wQ,
                any: qQ,
                hex_hmac: XQ,
                b64_hmac: wQ,
                any_hmac: qQ
              }
            }(), console.log(QQ[aW[86]]))
          }(), QQ[-aW[8]] = aW[1];
        for (const WQ in QQ[aW[1]]) {
          function XQ(...QQ) {
            for (cW(QQ[aW[13]] = aW[2], QQ[aW[5]] = '=&u]{/>*%zYmVEhC6SPk,ZDsv[y~|`4_3^}O#oHe?A9cRd7xQ(taKNqJ+TlBL)1;w2MjI$5.X@ni<Ub8pg!Ff0WGr:"', QQ[aW[87]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[87]].length, QQ[aW[10]] = [], QQ[-aW[88]] = aW[1], QQ[aW[23]] = aW[1], QQ[aW[7]] = -aW[2]), QQ[aW[11]] = aW[1]; QQ[aW[11]] < QQ[aW[20]]; QQ[aW[11]]++)
              if (QQ[aW[29]] = QQ[aW[5]].indexOf(QQ[aW[87]][QQ[aW[11]]]), QQ[aW[29]] !== -aW[2])
                if (QQ[aW[7]] < aW[1]) QQ[aW[7]] = QQ[aW[29]];
                else {
                  cW(QQ[aW[7]] += QQ[aW[29]] * aW[30], QQ[-aW[88]] |= QQ[aW[7]] << QQ[aW[23]], QQ[aW[23]] += (QQ[aW[7]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                  do {
                    cW(QQ[aW[10]].push(QQ[-aW[88]] & aW[12]), QQ[-aW[88]] >>= aW[11], QQ[aW[23]] -= aW[11])
                  } while (QQ[aW[23]] > aW[25]);
                  QQ[aW[7]] = -aW[2]
                } return QQ[aW[7]] > -aW[2] && QQ[aW[10]].push((QQ[-aW[88]] | QQ[aW[7]] << QQ[aW[23]]) & aW[12]), lW(QQ[aW[10]])
          }

          function wQ(...QQ) {
            return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = XQ(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
          }

          function qQ(...QQ) {
            cW(QQ[aW[13]] = aW[1], QQ[aW[91]] = function(...WQ) {
              return cW(WQ[aW[13]] = aW[20], WQ[-aW[89]] = {}), WQ[aW[14]].length !== WQ[aW[1]].length + WQ[aW[2]].length ? aW[90] : QQ[aW[28]](WQ[aW[1]], WQ[aW[2]], WQ[aW[14]], aW[1], aW[1], aW[1], WQ[-aW[89]])
            }, QQ[aW[28]] = function(...WQ) {
              return cW(WQ[aW[13]] = aW[25], WQ[aW[5]] = aW[90]), WQ[aW[39]] >= WQ[aW[14]].length ? aW[95] : WQ[aW[23]]["" + WQ[aW[20]] + WQ[aW[16]] + WQ[aW[39]]] !== aW[18] ? WQ[aW[23]]["" + WQ[aW[20]] + WQ[aW[16]] + WQ[aW[39]]] : (WQ[aW[14]][WQ[aW[39]]] === WQ[aW[1]][WQ[aW[20]]] && WQ[aW[14]][WQ[aW[39]]] === WQ[aW[2]][WQ[aW[16]]] ? WQ[aW[5]] = QQ[aW[28]](WQ[aW[1]], WQ[aW[2]], WQ[aW[14]], WQ[aW[20]] + aW[2], WQ[aW[16]], WQ[aW[39]] + aW[2], WQ[aW[23]]) || QQ[aW[28]](WQ[aW[1]], WQ[aW[2]], WQ[aW[14]], WQ[aW[20]], WQ[aW[16]] + aW[2], WQ[aW[39]] + aW[2], WQ[aW[23]]) : WQ[aW[14]][WQ[aW[39]]] === WQ[aW[1]][WQ[aW[20]]] ? WQ[aW[5]] = QQ[aW[28]](WQ[aW[1]], WQ[aW[2]], WQ[aW[14]], WQ[aW[20]] + aW[2], WQ[aW[16]], WQ[aW[39]] + aW[2], WQ[aW[23]]) : WQ[aW[14]][WQ[aW[39]]] === WQ[aW[2]][WQ[aW[16]]] && (WQ[aW[5]] = QQ[aW[28]](WQ[aW[1]], WQ[aW[2]], WQ[aW[14]], WQ[aW[20]], WQ[aW[16]] + aW[2], WQ[aW[39]] + aW[2], WQ[aW[23]])), WQ[aW[23]]["" + WQ[aW[20]] + WQ[aW[16]] + WQ[aW[39]]] = WQ[aW[5]], WQ[aW[5]])
            }, console.log(QQ[aW[91]]))
          }
          wQ(126) in iW && qQ(), QQ[-aW[8]]++
        }
        return QQ[-aW[8]]
      }, BW = (...QQ) => {
        QQ[aW[13]] = aW[1],
          function(...QQ) {
            return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
              for (cW(QQ[aW[13]] = aW[2], QQ[aW[2]] = '1}O0@96H":<am=bCe(c5RSDEY+#vogTJ*BNrxwyi)_u!fKI?~Un7dj3QA`kpMt{PZ8zX.G2W4,/VF[sL%|ql]>^;&h$', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[14]].length, QQ[aW[94]] = [], QQ[aW[39]] = aW[1], QQ[-aW[93]] = aW[1], QQ[aW[34]] = -aW[2]), QQ[aW[3]] = aW[1]; QQ[aW[3]] < QQ[aW[20]]; QQ[aW[3]]++)
                if (QQ[-aW[92]] = QQ[aW[2]].indexOf(QQ[aW[14]][QQ[aW[3]]]), QQ[-aW[92]] !== -aW[2])
                  if (QQ[aW[34]] < aW[1]) QQ[aW[34]] = QQ[-aW[92]];
                  else {
                    cW(QQ[aW[34]] += QQ[-aW[92]] * aW[30], QQ[aW[39]] |= QQ[aW[34]] << QQ[-aW[93]], QQ[-aW[93]] += (QQ[aW[34]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                    do {
                      cW(QQ[aW[94]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[-aW[93]] -= aW[11])
                    } while (QQ[-aW[93]] > aW[25]);
                    QQ[aW[34]] = -aW[2]
                  } return QQ[aW[34]] > -aW[2] && QQ[aW[94]].push((QQ[aW[39]] | QQ[aW[34]] << QQ[-aW[93]]) & aW[12]), lW(QQ[aW[94]])
            }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
          }(aW[74]) in iW && function() {
            var QQ, WQ = function(...WQ) {
              return WQ[aW[13]] = aW[14], QQ({}, WQ[aW[1]], WQ[aW[2]])
            };
            cW(QQ = function(...WQ) {
              if (cW(WQ[aW[13]] = aW[20], WQ[aW[5]] = {}), WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] !== aW[18]) return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]];
              if (WQ[aW[2]] === WQ[aW[14]]) return aW[95];
              for (WQ[-aW[96]] = aW[1]; WQ[-aW[96]] < WQ[aW[2]].length; WQ[-aW[96]]++) WQ[aW[5]][WQ[aW[2]][WQ[-aW[96]]]] === aW[18] && (WQ[aW[5]][WQ[aW[2]][WQ[-aW[96]]]] = aW[1]), WQ[aW[5]][WQ[aW[14]][WQ[-aW[96]]]] === aW[18] && (WQ[aW[5]][WQ[aW[14]][WQ[-aW[96]]]] = aW[1]), cW(WQ[aW[5]][WQ[aW[2]][WQ[-aW[96]]]]++, WQ[aW[5]][WQ[aW[14]][WQ[-aW[96]]]]--);
              for (WQ[-aW[97]] in WQ[aW[5]])
                if (WQ[aW[5]][WQ[-aW[97]]] !== aW[1]) return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] = aW[90], aW[90];
              for (WQ[aW[10]] = aW[2]; WQ[aW[10]] < WQ[aW[2]].length; WQ[aW[10]]++)
                if (QQ(WQ[aW[1]], WQ[aW[2]].substr(aW[1], WQ[aW[10]]), WQ[aW[14]].substr(aW[1], WQ[aW[10]])) && QQ(WQ[aW[1]], WQ[aW[2]].substr(WQ[aW[10]]), WQ[aW[14]].substr(WQ[aW[10]])) || QQ(WQ[aW[1]], WQ[aW[2]].substr(aW[1], WQ[aW[10]]), WQ[aW[14]].substr(WQ[aW[14]].length - WQ[aW[10]])) && QQ(WQ[aW[1]], WQ[aW[2]].substr(WQ[aW[10]]), WQ[aW[14]].substr(aW[1], WQ[aW[14]].length - WQ[aW[10]]))) return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] = aW[95], aW[95];
              return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] = aW[90], aW[90]
            }, console.log(WQ))
          }(), PW++ === aW[39] && ((aW[1], DQ.n)() && (aW[1], JQ[aW[10]])("4 "), PW = aW[1])
      }), jW = function(QQ) {
        function WQ(...QQ) {
          return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
            for (cW(QQ[aW[13]] = aW[2], QQ[aW[2]] = '9w(RtkO7vV?AHP)<:nL5pho4UK[F&,NY#;xi@d+r1uJ8y{C/I"$ZDjBW%2Qm~E6e0_>g]q`lXbf=GzsM!3cT|*a.S}^', QQ[aW[28]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[28]].length, QQ[aW[10]] = [], QQ[aW[98]] = aW[1], QQ[aW[44]] = aW[1], QQ[aW[7]] = -aW[2]), QQ[aW[11]] = aW[1]; QQ[aW[11]] < QQ[aW[20]]; QQ[aW[11]]++)
              if (QQ[aW[6]] = QQ[aW[2]].indexOf(QQ[aW[28]][QQ[aW[11]]]), QQ[aW[6]] !== -aW[2])
                if (QQ[aW[7]] < aW[1]) QQ[aW[7]] = QQ[aW[6]];
                else {
                  cW(QQ[aW[7]] += QQ[aW[6]] * aW[30], QQ[aW[98]] |= QQ[aW[7]] << QQ[aW[44]], QQ[aW[44]] += (QQ[aW[7]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                  do {
                    cW(QQ[aW[10]].push(QQ[aW[98]] & aW[12]), QQ[aW[98]] >>= aW[11], QQ[aW[44]] -= aW[11])
                  } while (QQ[aW[44]] > aW[25]);
                  QQ[aW[7]] = -aW[2]
                } return QQ[aW[7]] > -aW[2] && QQ[aW[10]].push((QQ[aW[98]] | QQ[aW[7]] << QQ[aW[44]]) & aW[12]), lW(QQ[aW[10]])
          }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
        }
        if (WQ(aW[76]) + "k" in iW && function(...QQ) {
            cW(QQ[aW[13]] = aW[1], QQ[aW[28]] = function(...WQ) {
              return WQ[aW[13]] = aW[14], QQ[aW[4]]({}, WQ[aW[1]], WQ[aW[2]])
            }, QQ[aW[4]] = function(...WQ) {
              if (cW(WQ[aW[13]] = aW[20], WQ[aW[99]] = {}), WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] !== aW[18]) return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]];
              if (WQ[aW[2]] === WQ[aW[14]]) return aW[95];
              for (WQ[aW[16]] = aW[1]; WQ[aW[16]] < WQ[aW[2]].length; WQ[aW[16]]++) WQ[aW[99]][WQ[aW[2]][WQ[aW[16]]]] === aW[18] && (WQ[aW[99]][WQ[aW[2]][WQ[aW[16]]]] = aW[1]), WQ[aW[99]][WQ[aW[14]][WQ[aW[16]]]] === aW[18] && (WQ[aW[99]][WQ[aW[14]][WQ[aW[16]]]] = aW[1]), cW(WQ[aW[99]][WQ[aW[2]][WQ[aW[16]]]]++, WQ[aW[99]][WQ[aW[14]][WQ[aW[16]]]]--);
              for (WQ[aW[39]] in WQ[aW[99]])
                if (WQ[aW[99]][WQ[aW[39]]] !== aW[1]) return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] = aW[90], aW[90];
              for (WQ[aW[10]] = aW[2]; WQ[aW[10]] < WQ[aW[2]].length; WQ[aW[10]]++)
                if (QQ[aW[4]](WQ[aW[1]], WQ[aW[2]].substr(aW[1], WQ[aW[10]]), WQ[aW[14]].substr(aW[1], WQ[aW[10]])) && QQ[aW[4]](WQ[aW[1]], WQ[aW[2]].substr(WQ[aW[10]]), WQ[aW[14]].substr(WQ[aW[10]])) || QQ[aW[4]](WQ[aW[1]], WQ[aW[2]].substr(aW[1], WQ[aW[10]]), WQ[aW[14]].substr(WQ[aW[14]].length - WQ[aW[10]])) && QQ[aW[4]](WQ[aW[1]], WQ[aW[2]].substr(WQ[aW[10]]), WQ[aW[14]].substr(aW[1], WQ[aW[14]].length - WQ[aW[10]]))) return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] = aW[95], aW[95];
              return WQ[aW[1]][WQ[aW[2]] + WQ[aW[14]]] = aW[90], aW[90]
            }, console.log(QQ[aW[28]]))
          }(), (arguments[WQ(129)] > aW[2] && arguments[aW[2]] !== aW[18] ? arguments[aW[2]] : aW[90]) && (aW[1], xQ[aW[44]])(QQ)) return;
        const XQ = window[WQ(130)];
        if (typeof XQ !== WQ(aW[104]) + "on" || QQ instanceof XQ || (aW[1], LQ.G)(QQ)) {
          function wQ(...QQ) {
            for (cW(QQ[aW[13]] = aW[2], QQ[-aW[102]] = '[34?u2/@!1v~=C#N5U9>OR(hwl_&rbftiT|<n;ZQImcHG8pzJLqxgPX+]AMke%EYo6"W*:)$0}dKD7.sBy^`{SVa,Fj', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[14]].length, QQ[aW[16]] = [], QQ[aW[39]] = aW[1], QQ[aW[23]] = aW[1], QQ[aW[7]] = -aW[2]), QQ[-aW[103]] = aW[1]; QQ[-aW[103]] < QQ[aW[20]]; QQ[-aW[103]]++)
              if (QQ[aW[6]] = QQ[-aW[102]].indexOf(QQ[aW[14]][QQ[-aW[103]]]), QQ[aW[6]] !== -aW[2])
                if (QQ[aW[7]] < aW[1]) QQ[aW[7]] = QQ[aW[6]];
                else {
                  cW(QQ[aW[7]] += QQ[aW[6]] * aW[30], QQ[aW[39]] |= QQ[aW[7]] << QQ[aW[23]], QQ[aW[23]] += (QQ[aW[7]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                  do {
                    cW(QQ[aW[16]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[23]] -= aW[11])
                  } while (QQ[aW[23]] > aW[25]);
                  QQ[aW[7]] = -aW[2]
                } return QQ[aW[7]] > -aW[2] && QQ[aW[16]].push((QQ[aW[39]] | QQ[aW[7]] << QQ[aW[23]]) & aW[12]), lW(QQ[aW[16]])
          }

          function qQ(...QQ) {
            return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = wQ(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
          }

          function TQ() {
            module.exports = async (QQ = () => {
              throw new Error(qQ(134))
            }) => {
              const WQ = new Set(process.argv.slice(aW[14]));
              if (!WQ.has(function(...QQ) {
                  return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
                    for (cW(QQ[aW[13]] = aW[2], QQ[aW[5]] = ':7u&S+B`AE?H)JftYFh(b~$aTc{,<}4UM5mXRxv#pksP"*8d=nOq>NLe3_1g[jD9/!i.62wVW@oIQZ|KC;%yz0lG]^r', QQ[aW[47]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[47]].length, QQ[aW[10]] = [], QQ[aW[39]] = aW[1], QQ[aW[23]] = aW[1], QQ[-aW[104]] = -aW[2]), QQ[aW[105]] = aW[1]; QQ[aW[105]] < QQ[aW[20]]; QQ[aW[105]]++)
                      if (QQ[aW[29]] = QQ[aW[5]].indexOf(QQ[aW[47]][QQ[aW[105]]]), QQ[aW[29]] !== -aW[2])
                        if (QQ[-aW[104]] < aW[1]) QQ[-aW[104]] = QQ[aW[29]];
                        else {
                          cW(QQ[-aW[104]] += QQ[aW[29]] * aW[30], QQ[aW[39]] |= QQ[-aW[104]] << QQ[aW[23]], QQ[aW[23]] += (QQ[-aW[104]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                          do {
                            cW(QQ[aW[10]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[23]] -= aW[11])
                          } while (QQ[aW[23]] > aW[25]);
                          QQ[-aW[104]] = -aW[2]
                        } return QQ[-aW[104]] > -aW[2] && QQ[aW[10]].push((QQ[aW[39]] | QQ[-aW[104]] << QQ[aW[23]]) & aW[12]), lW(QQ[aW[10]])
                  }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
                }(aW[19]))) {
                if (WQ.size !== aW[2]) return aW[90];
                if (!WQ.has("-v")) return aW[90]
              }
              return await (async () => {
                function WQ(...QQ) {
                  return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
                    for (cW(QQ[aW[13]] = aW[2], QQ[aW[9]] = 'M:DlhXpUiHsnANrZFfEJVbBYKWeoSLQO9aCdIP(>5Gc;8RTu)+27{%#y}|$]&zv6w<1x^/j_"`,[~!t*@3?mkg=q.40', QQ[-aW[87]] = "" + (QQ[aW[1]] || ""), QQ[aW[4]] = QQ[-aW[87]].length, QQ[aW[108]] = [], QQ[aW[39]] = aW[1], QQ[aW[107]] = aW[1], QQ[aW[106]] = -aW[2]), QQ[aW[11]] = aW[1]; QQ[aW[11]] < QQ[aW[4]]; QQ[aW[11]]++)
                      if (QQ[aW[29]] = QQ[aW[9]].indexOf(QQ[-aW[87]][QQ[aW[11]]]), QQ[aW[29]] !== -aW[2])
                        if (QQ[aW[106]] < aW[1]) QQ[aW[106]] = QQ[aW[29]];
                        else {
                          cW(QQ[aW[106]] += QQ[aW[29]] * aW[30], QQ[aW[39]] |= QQ[aW[106]] << QQ[aW[107]], QQ[aW[107]] += (QQ[aW[106]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                          do {
                            cW(QQ[aW[108]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[107]] -= aW[11])
                          } while (QQ[aW[107]] > aW[25]);
                          QQ[aW[106]] = -aW[2]
                        } return QQ[aW[106]] > -aW[2] && QQ[aW[108]].push((QQ[aW[39]] | QQ[aW[106]] << QQ[aW[107]]) & aW[12]), lW(QQ[aW[108]])
                  }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
                }
                return void 0 === await QQ() ? WQ(138) + "l)" : ""
              })(), aW[95]
            }
          }
          if (qQ(aW[60]) in iW && TQ(), QQ[qQ(139) + qQ(140)] === aW[90])(aW[1], JQ[aW[10]])("2 " + (aW[1], rQ[aW[10]])(QQ));
          else {
            function zQ(...QQ) {
              function WQ(...QQ) {
                return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = function(...QQ) {
                  for (cW(QQ[aW[13]] = aW[2], QQ[aW[5]] = 'x3!:PeSZ0J=y4ir#6C&wkc~%R1G,{F/vMnOBDuN}j>5p`(H*t$I<Lb7Yq@89|mA"QgTzodEsf;_.U2aW^)h?[V]K+lX', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[14]].length, QQ[aW[10]] = [], QQ[aW[39]] = aW[1], QQ[aW[23]] = aW[1], QQ[aW[109]] = -aW[2]), QQ[aW[3]] = aW[1]; QQ[aW[3]] < QQ[aW[20]]; QQ[aW[3]]++)
                    if (QQ[aW[6]] = QQ[aW[5]].indexOf(QQ[aW[14]][QQ[aW[3]]]), QQ[aW[6]] !== -aW[2])
                      if (QQ[aW[109]] < aW[1]) QQ[aW[109]] = QQ[aW[6]];
                      else {
                        cW(QQ[aW[109]] += QQ[aW[6]] * aW[30], QQ[aW[39]] |= QQ[aW[109]] << QQ[aW[23]], QQ[aW[23]] += (QQ[aW[109]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                        do {
                          cW(QQ[aW[10]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[23]] -= aW[11])
                        } while (QQ[aW[23]] > aW[25]);
                        QQ[aW[109]] = -aW[2]
                      } return QQ[aW[109]] > -aW[2] && QQ[aW[10]].push((QQ[aW[39]] | QQ[aW[109]] << QQ[aW[23]]) & aW[12]), lW(QQ[aW[10]])
                }(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
              }

              function XQ(...QQ) {
                if (QQ[aW[13]] = aW[2], !QQ[aW[1]]) return -aW[2];
                const WQ = XQ(QQ[aW[1]].left),
                  wQ = XQ(QQ[aW[1]].right),
                  qQ = Math.abs(WQ - wQ);
                if (WQ === 1 / 0 || wQ === 1 / 0 || qQ > aW[2]) return 1 / 0;
                return Math.max(WQ, wQ) + aW[2]
              }
              QQ[aW[13]] = aW[1], window[qQ(142) + WQ(aW[41]) + WQ(144) + "_"] = {
                buildCharacterMap: function(...QQ) {
                  QQ[aW[13]] = aW[2];
                  const WQ = {};
                  for (let XQ of QQ[aW[1]].replace(/[^w]/g, "").toLowerCase()) WQ[XQ] = WQ[XQ] + aW[2] || aW[2];
                  return WQ
                },
                isAnagrams: function(...QQ) {
                  QQ[aW[13]] = aW[14];
                  const WQ = buildCharMap(QQ[aW[1]]),
                    XQ = buildCharMap(QQ[aW[2]]);
                  for (let wQ in WQ)
                    if (WQ[wQ] !== XQ[wQ]) return aW[90];
                  return Object.keys(WQ).length !== Object.keys(XQ).length ? aW[90] : aW[95]
                },
                isBalanced: function(...QQ) {
                  return QQ[aW[13]] = aW[2], XQ(QQ[aW[1]]) !== 1 / 0
                },
                getHeightBalanced: XQ
              }
            }
            if (qQ(141) in iW && zQ(), yW(QQ) < aW[82])(aW[1], JQ[aW[10]])("3 ");
            else {
              function sQ(...QQ) {
                for (cW(QQ[aW[13]] = aW[2], QQ[aW[5]] = '{Hi6z}w%$Anvx5Yj^F?lyT9@bIJ_N(S=+tWD"0~]U32L&VOaBd1.gs/ro,#KQ>qkG;uf7`!eE4h)C*:|RcX<pMPm[Z8', QQ[aW[28]] = "" + (QQ[aW[1]] || ""), QQ[aW[4]] = QQ[aW[28]].length, QQ[aW[47]] = [], QQ[aW[39]] = aW[1], QQ[aW[44]] = aW[1], QQ[aW[25]] = -aW[2]), QQ[aW[11]] = aW[1]; QQ[aW[11]] < QQ[aW[4]]; QQ[aW[11]]++)
                  if (QQ[-aW[81]] = QQ[aW[5]].indexOf(QQ[aW[28]][QQ[aW[11]]]), QQ[-aW[81]] !== -aW[2])
                    if (QQ[aW[25]] < aW[1]) QQ[aW[25]] = QQ[-aW[81]];
                    else {
                      cW(QQ[aW[25]] += QQ[-aW[81]] * aW[30], QQ[aW[39]] |= QQ[aW[25]] << QQ[aW[44]], QQ[aW[44]] += (QQ[aW[25]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                      do {
                        cW(QQ[aW[47]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[44]] -= aW[11])
                      } while (QQ[aW[44]] > aW[25]);
                      QQ[aW[25]] = -aW[2]
                    } return QQ[aW[25]] > -aW[2] && QQ[aW[47]].push((QQ[aW[39]] | QQ[aW[25]] << QQ[aW[44]]) & aW[12]), lW(QQ[aW[47]])
              }

              function FQ(...QQ) {
                return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = sQ(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
              }

              function PQ(...QQ) {
                cW(QQ[aW[13]] = aW[1], QQ[aW[5]] = function(...WQ) {
                  return cW(WQ[aW[13]] = aW[14], WQ[aW[14]] = [], WQ[aW[28]] = WQ[aW[1]].length, WQ[aW[1]].sort(((QQ, WQ) => QQ - WQ)), QQ[aW[2]](WQ[aW[14]], [], aW[1], WQ[aW[28]], WQ[aW[1]], WQ[aW[2]])), WQ[aW[14]]
                }, QQ[aW[2]] = function(...WQ) {
                  if (cW(WQ[aW[13]] = aW[23], WQ[aW[23]] = aW[101]), !(WQ[aW[39]] < aW[1])) {
                    if (WQ[aW[39]] === aW[1]) return WQ[aW[1]].push(WQ[aW[2]]);
                    for (WQ[aW[25]] = WQ[aW[14]]; WQ[aW[25]] < WQ[aW[20]] && !(WQ[aW[16]][WQ[aW[25]]] > WQ[aW[39]]); WQ[aW[25]]++) WQ[aW[25]] > WQ[aW[14]] && WQ[aW[16]][WQ[aW[25]]] === WQ[aW[16]][WQ[aW[25]] - aW[2]] || cW(WQ[aW[23]] = Array.from(WQ[aW[2]]), WQ[aW[23]].push(WQ[aW[16]][WQ[aW[25]]]), QQ[aW[2]](WQ[aW[1]], WQ[aW[23]], WQ[aW[25]] + aW[2], WQ[aW[20]], WQ[aW[16]], WQ[aW[39]] - WQ[aW[16]][WQ[aW[25]]]))
                  }
                }, console.log(QQ[aW[5]]))
              }
              FQ(145) in iW && PQ(), BW()
            }
          }
        } else {
          function gQ(...QQ) {
            for (cW(QQ[aW[13]] = aW[2], QQ[aW[100]] = 'BTW~8&s(h7_yJpfNKM:9Cjo+HnS|Zrat3iX%5F).L]}cbOA@!RxU`{DYeQI<EG#l"6w4?[P>1qgkVdm,^v02*=u$z/;', QQ[aW[14]] = "" + (QQ[aW[1]] || ""), QQ[aW[20]] = QQ[aW[14]].length, QQ[aW[16]] = [], QQ[aW[39]] = aW[1], QQ[aW[44]] = aW[1], QQ[aW[35]] = -aW[2]), QQ[aW[11]] = aW[1]; QQ[aW[11]] < QQ[aW[20]]; QQ[aW[11]]++)
              if (QQ[aW[6]] = QQ[aW[100]].indexOf(QQ[aW[14]][QQ[aW[11]]]), QQ[aW[6]] !== -aW[2])
                if (QQ[aW[35]] < aW[1]) QQ[aW[35]] = QQ[aW[6]];
                else {
                  cW(QQ[aW[35]] += QQ[aW[6]] * aW[30], QQ[aW[39]] |= QQ[aW[35]] << QQ[aW[44]], QQ[aW[44]] += (QQ[aW[35]] & aW[33]) > aW[34] ? aW[35] : aW[36]);
                  do {
                    cW(QQ[aW[16]].push(QQ[aW[39]] & aW[12]), QQ[aW[39]] >>= aW[11], QQ[aW[44]] -= aW[11])
                  } while (QQ[aW[44]] > aW[25]);
                  QQ[aW[35]] = -aW[2]
                } return QQ[aW[35]] > -aW[2] && QQ[aW[16]].push((QQ[aW[39]] | QQ[aW[35]] << QQ[aW[44]]) & aW[12]), lW(QQ[aW[16]])
          }

          function IQ(...QQ) {
            return QQ[aW[13]] = aW[2], typeof VW[QQ[aW[1]]] === aW[17] ? VW[QQ[aW[1]]] = gQ(DW[QQ[aW[1]]]) : VW[QQ[aW[1]]]
          }

          function jQ(...QQ) {
            QQ[aW[13]] = aW[1]
          }
          IQ(132) in iW && jQ(), (aW[1], JQ[aW[10]])("5 ")
        }
      }, BQ.k.subscribe("customBindingsChanged", (() => {
        RW()
      }));
    let EW = !1,
      CW = !1;
    const uW = () => EW || CW && cQ.d.isInGame(),
      LW = QQ => {
        uW() && QQ.preventDefault()
      };
    BQ.k.subscribe("displaymodeFullscreenChange", (QQ => {
      kW()
    })), BQ.k.subscribe("pointerLockUpdate", (QQ => {
      EW = QQ, kW(), fW()
    })), BQ.k.subscribe("freeCursorUpdate", (QQ => {
      CW = QQ, kW(), fW()
    }));
    const kW = () => {
        window.removeEventListener("wheel", LW), AQ.isIframed && !(0, zQ.s)() && (EW || CW) && window.addEventListener("wheel", LW, {
          passive: !1
        })
      },
      fW = () => {
        window.removeEventListener("wheel", SW), (EW || CW) && window.addEventListener("wheel", SW, {
          passive: !1
        })
      },
      SW = QQ => {
        !0 === QQ.ctrlKey && uW() && QQ.preventDefault()
      };

    function tW(QQ) {
      BQ.k.mB("QTEMouseState", {
        isDown: QQ
      })
    }

    function oW(QQ) {
      var WQ, XQ, qQ, TQ, zQ, sQ, FQ, PQ;
      const JQ = (0, lQ.f)();
      JQ.CQQ = null !== (WQ = function(QQ, WQ) {
        var XQ, wQ;
        if (!JW) return null;
        const qQ = QQ.bloxd;
        sW ??= qQ.getMetaInfo("Board").rootId;
        const TQ = null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.w6) && void 0 !== XQ ? XQ : null;
        if (!TQ || qQ.getMetaInfo(TQ).rootId !== sW) return null;
        const zQ = null !== (wQ = null === WQ || void 0 === WQ ? void 0 : WQ.position) && void 0 !== wQ ? wQ : null;
        if (qQ.playerCanChangePos(QQ.RC, zQ[0], zQ[1], zQ[2])) return null;
        const sQ = (QQ, WQ, XQ) => {
          const wQ = qQ.blockDataOwner.getBlockData(QQ, WQ, XQ),
            TQ = null === wQ || void 0 === wQ ? void 0 : wQ.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return RQ.singleLineBoardActions.has(TQ)
        };
        if (sQ(zQ[0], zQ[1], zQ[2])) return null;
        let FQ;
        QQ.MQQ && (FQ = [...QQ.MQQ], QQ.VK(FQ, FQ));
        const PQ = (FQ ? QQ.camera.wZ : 0) + qQ.getBlockReach(QQ.RC);
        return QQ.pickBlock(FQ, QQ.QWQ, PQ, ((WQ, XQ, wQ, TQ) => 0 !== WQ && ("Board" !== qQ.getMetaInfo(WQ).rootName || qQ.playerCanChangePos(QQ.RC, XQ, wQ, TQ) || sQ(XQ, wQ, TQ))))
      }(JQ, JQ.CQQ)) && void 0 !== WQ ? WQ : JQ.CQQ;
      const rQ = null !== (XQ = null === (qQ = JQ.CQQ) || void 0 === qQ ? void 0 : qQ.position) && void 0 !== XQ ? XQ : null,
        jQ = null !== (TQ = JQ.QWQ) && void 0 !== TQ ? TQ : JQ.camera.iK(),
        yQ = lQ.i.localPlayerPickActionHelper.getPickEntityResult(jQ),
        VQ = null !== (zQ = JQ.CQQ) && void 0 !== zQ && zQ.w6 ? (0, kQ.f)(JQ.CQQ.w6) : "Air",
        DQ = QQ === IQ.d.UpFirePrimary || QQ === IQ.d.UpFireSecondary,
        pQ = DQ ? "onPlayerClickUp" : "onPlayerClick",
        GQ = DQ ? QQ === IQ.d.UpFireSecondary : QQ === IQ.d.DownFireSecondary,
        UQ = !DQ && (0, wQ.getWasDoubleClick)();
      BQ.k.mB("mouseState", {
        kg: QQ,
        isDown: !DQ
      }), (0, wQ.sendColyMessage)(gQ.wh, {
        kg: QQ,
        fg: UQ,
        NT: rQ,
        ZT: yQ
      }, !0), (0, lQ.d)().client.triggerGameCallback(pQ, JQ.RC, GQ, null !== (sQ = null === rQ || void 0 === rQ ? void 0 : rQ[0]) && void 0 !== sQ ? sQ : null, null !== (FQ = null === rQ || void 0 === rQ ? void 0 : rQ[1]) && void 0 !== FQ ? FQ : null, null !== (PQ = null === rQ || void 0 === rQ ? void 0 : rQ[2]) && void 0 !== PQ ? PQ : null, VQ, yQ)
    }
    window.addEventListener("keydown", (QQ => {
      ["ArrowUp", "ArrowDown"].includes(QQ.key) && QQ.preventDefault()
    })), document.addEventListener("keydown", (QQ => {
      (0, uQ.c)(QQ, (() => {
        const QQ = (0, lQ.f)();
        return (0, CQ.G)(QQ) || !1 !== QQ.zD.canCustomiseChar
      }))
    }))
  },
  39358: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      e: () => zQ
    });
    var wQ = XQ(38713);
    let qQ = !1;

    function TQ() {
      return qQ
    }

    function zQ(QQ) {
      qQ = QQ, QQ ? wQ.h.setMultiplierType("emoteWheel", 0) : wQ.h.removeMultiplier("emoteWheel")
    }
  },
  39370: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return Boolean(QQ.zD.useInventory && QQ.zD.useFullInventory && QQ.rD.LWQ(QQ.RC))
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  39267: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      h: () => qQ
    });
    var wQ = XQ(37428);

    function qQ(QQ, WQ) {
      return {
        replayedClipName: QQ,
        replayedClipAgeSeconds: WQ
      }
    }

    function TQ(QQ, WQ, XQ, qQ, TQ) {
      const zQ = function(QQ) {
          if ("object" !== typeof QQ || null === QQ) return null;
          const {
            replayedClipName: WQ,
            replayedClipAgeSeconds: XQ
          } = QQ;
          return "string" === typeof WQ && "number" === typeof XQ ? {
            Sw: WQ,
            tw: XQ
          } : null
        }(XQ),
        sQ = null === zQ ? XQ : null,
        {
          Sw: FQ = null,
          tw: PQ = 0
        } = null !== zQ && void 0 !== zQ ? zQ : {};
      QQ.animateEntity(WQ, wQ.g.Custom, sQ, qQ, TQ, FQ, PQ)
    }
  },
  39363: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ
    });
    var wQ = XQ(38660),
      qQ = XQ(402),
      TQ = XQ(2997);

    function zQ() {
      var QQ, WQ, XQ, wQ;
      const zQ = (0, TQ.f)(),
        sQ = null !== (QQ = null === (WQ = zQ.rD.EWQ(zQ.RC)) || void 0 === WQ ? void 0 : WQ.selectedItem) && void 0 !== QQ ? QQ : null,
        FQ = sQ ? (0, TQ.d)().getItemStat(zQ.RC, sQ.name, "attackCooldownMs") : null,
        PQ = (0, qQ.cd)(FQ, null === sQ || void 0 === sQ || null === (XQ = sQ.attributes.customAttributes) || void 0 === XQ || null === (wQ = XQ.enchantments) || void 0 === wQ ? void 0 : wQ["Attack Speed"]);
      return Math.max(56, Math.ceil((PQ + 30) / 3))
    }
    class sQ {
      constructor(QQ, WQ) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [QQ], this.dueMs = QQ, this.intervalMs = WQ
      }
      spacedBy(QQ, WQ) {
        if (QQ === this.intervalMs) return this;
        const XQ = this.tries[this.tries.length - 1],
          wQ = new sQ(XQ, QQ);
        return wQ.dueMs = Math.max(XQ, WQ - QQ), wQ
      }
      nextDueMs() {
        const QQ = this.tries[this.tries.length - 1];
        return Math.max(QQ + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(QQ, WQ) {
        this.tries.push(QQ), this.tries.length > 3 && this.tries.shift(), this.dueMs = WQ
      }
    }
    var FQ = XQ(39358),
      PQ = XQ(1335);
    class gQ {
      constructor() {
        this.timer = null, this.tries = new sQ(0, 0), this.check = () => {
          const QQ = Date.now(),
            WQ = this.tries.spacedBy(zQ(), QQ),
            XQ = WQ.nextDueMs();
          if (QQ < XQ) this.schedule();
          else {
            if (WQ.noteTry(QQ, XQ), this.tries = WQ, (0, PQ.A)() && !(0, FQ.b)()) {
              var qQ, sQ;
              (0, wQ.c)();
              const QQ = (0, TQ.f)();
              null === (qQ = QQ.rD.XXQ(QQ.RC)) || void 0 === qQ || null === (sQ = qQ.Qp) || void 0 === sQ || sQ.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var QQ;
        null === (QQ = gQ.running) || void 0 === QQ || QQ.stop(), gQ.running = this, this.tries = new sQ(Date.now(), zQ()), this.schedule()
      }
      static stopRunning() {
        var QQ;
        null === (QQ = gQ.running) || void 0 === QQ || QQ.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, gQ.running === this && (gQ.running = null)
      }
      schedule() {
        const QQ = Date.now(),
          WQ = this.tries.spacedBy(zQ(), QQ).nextDueMs() - QQ;
        this.timer = setTimeout(this.check, Math.min(WQ, 100))
      }
    }
    gQ.running = null
  },
  39274: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => jQ,
      f: () => gQ,
      i: () => IQ,
      j: () => rQ,
      l: () => BQ,
      n: () => JQ
    });
    var wQ = XQ(39279),
      qQ = XQ(37509),
      TQ = XQ(3907),
      zQ = XQ(2010),
      sQ = XQ(31),
      FQ = XQ(2997);
    const PQ = new wQ.c;

    function gQ() {
      return PQ
    }

    function JQ() {
      PQ.clear()
    }

    function rQ() {
      for (const QQ of PQ.ids()) {
        const WQ = PQ.getName(QQ);
        void 0 !== WQ && zQ.e.delete(WQ)
      }
      JQ(), sQ.k.mB("playerRosterChanged", PQ.ids())
    }

    function IQ(QQ, WQ) {
      var XQ, wQ;
      if (PQ.has(QQ)) return PQ.getSetting(QQ, WQ);
      const qQ = (0, FQ.f)();
      return null === (XQ = qQ.lC[qQ.RC]) || void 0 === XQ || null === (wQ = XQ[QQ]) || void 0 === wQ ? void 0 : wQ[WQ]
    }

    function jQ(QQ) {
      const {
        added: WQ,
        removed: XQ,
        settingChanges: wQ
      } = PQ.apply(QQ);
      for (const {
          playerId: qQ,
          name: TQ
        }
        of XQ) void 0 === TQ || yQ(qQ) || zQ.e.delete(TQ);
      for (const {
          playerId: TQ,
          settings: zQ
        }
        of wQ)
        if (yQ(TQ)) BQ(TQ, zQ);
        else
          for (const QQ in zQ)(0, qQ.o)(TQ, QQ, zQ[QQ]);
      (WQ.length > 0 || XQ.length > 0) && sQ.k.mB("playerRosterChanged", PQ.ids())
    }

    function BQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PQ.getSettings(QQ);
      if (WQ) {
        (0, qQ.i)(QQ);
        for (const XQ in WQ)(0, qQ.e)(QQ, XQ, WQ[XQ])
      }
    }

    function yQ(QQ) {
      return QQ === (0, FQ.f)().mQQ || (0, FQ.d)().client.hasEntity(QQ)
    }(0, TQ.onGameReset)(JQ)
  },
  38371: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => aQ,
      f: () => bQ,
      g: () => dQ,
      k: () => HQ,
      m: () => lQ
    });
    var wQ = XQ(37367),
      qQ = XQ(38377),
      TQ = XQ(416),
      zQ = XQ.n(TQ),
      sQ = XQ(3673);
    const FQ = new wQ.vj,
      PQ = new wQ.vj,
      gQ = new wQ.vj,
      JQ = new wQ.vj,
      rQ = new wQ.vj,
      IQ = [0, 0, 0],
      jQ = {
        x: 0,
        y: 0
      },
      BQ = new wQ.vj(1, 0, 0),
      yQ = new wQ.vj(0, 1, 0),
      VQ = wQ.Matrix.Identity(),
      DQ = new wQ.Matrix,
      pQ = new wQ.Matrix,
      GQ = new wQ.vj,
      UQ = new qQ.e(0, 0, 0, 0);

    function bQ(QQ, WQ) {
      var XQ, qQ;
      const TQ = vQ(QQ, WQ);
      if (TQ) {
        const QQ = TQ.x,
          WQ = TQ.y,
          XQ = QQ - 50,
          wQ = WQ - 50;
        return Math.abs(XQ) <= sQ.b && Math.abs(wQ) <= (0, sQ.k)() ? {
          x: QQ,
          y: WQ
        } : iQ(XQ, wQ)
      }
      gQ.XQQ(WQ[0], WQ[1], WQ[2]),
        function(QQ) {
          const WQ = QQ.nj.KXQ(),
            XQ = WQ ? wQ.Matrix.FromArrayToRef(WQ.worldMatrix, 0, pQ) : QQ.nj.sE().activeCamera.getWorldMatrix();
          wQ.vj.TransformNormalToRef(BQ, XQ, JQ), JQ.normalize(), wQ.vj.TransformNormalToRef(yQ, XQ, rQ), rQ.normalize()
        }(QQ);
      const zQ = wQ.vj.Dot(gQ, JQ);
      let FQ = -wQ.vj.Dot(gQ, rQ);
      Math.abs(zQ) < .001 && Math.abs(FQ) < .001 && (FQ = -1);
      const PQ = null !== (XQ = null === (qQ = QQ.nj.KXQ()) || void 0 === qQ ? void 0 : qQ.projectionMatrix) && void 0 !== XQ ? XQ : QQ.nj.sE().activeCamera.getProjectionMatrix().m;
      return iQ(zQ * PQ[0], FQ * PQ[5])
    }

    function vQ(QQ, WQ) {
      const XQ = QQ.nj.sE(),
        qQ = XQ.Uj(),
        TQ = qQ.getRenderWidth(),
        zQ = qQ.getRenderHeight();
      UQ.width = TQ, UQ.height = zQ;
      const sQ = QQ.nj.KXQ(),
        gQ = sQ ? GQ.XQQ(sQ.eye[0], sQ.eye[1], sQ.eye[2]) : QQ.nj.camera.globalPosition;
      FQ.XQQ(gQ.x + 10 * WQ[0], gQ.y + 10 * WQ[1], gQ.z + 10 * WQ[2]);
      const JQ = sQ ? wQ.Matrix.FromArrayToRef(sQ.viewProjectionMatrix, 0, DQ) : XQ.getTransformMatrix();
      return wQ.vj.ProjectToRef(FQ, VQ, JQ, UQ, PQ), PQ.z < 0 || PQ.z > 1 ? null : (jQ.x = PQ.x / TQ * 100, jQ.y = PQ.y / zQ * 100, jQ)
    }

    function dQ(QQ, WQ) {
      return bQ(QQ, hQ(QQ, WQ))
    }

    function HQ(QQ, WQ) {
      const XQ = vQ(QQ, hQ(QQ, WQ));
      return XQ && {
        x: XQ.x,
        y: XQ.y
      }
    }

    function aQ(QQ) {
      var WQ, XQ;
      return 1 / (null !== (WQ = null === (XQ = QQ.nj.KXQ()) || void 0 === XQ ? void 0 : XQ.projectionMatrix[0]) && void 0 !== WQ ? WQ : QQ.nj.sE().activeCamera.getProjectionMatrix().m[0])
    }

    function lQ(QQ, WQ, XQ) {
      const wQ = QQ.nj.KXQ(),
        qQ = wQ ? wQ.worldMatrix : QQ.nj.sE().activeCamera.getWorldMatrix().m,
        TQ = QQ.jr;
      for (let zQ = 0; zQ < 3; zQ++) WQ[zQ] = qQ[12 + zQ] + TQ[zQ], XQ[zQ] = qQ[8 + zQ];
      zQ().normalize(XQ, XQ)
    }

    function hQ(QQ, WQ) {
      const XQ = QQ.jr,
        wQ = QQ.nj.KXQ(),
        qQ = wQ ? GQ.XQQ(wQ.eye[0], wQ.eye[1], wQ.eye[2]) : QQ.nj.camera.globalPosition;
      return IQ[0] = WQ[0] - XQ[0] - qQ.x, IQ[1] = WQ[1] - XQ[1] - qQ.y, IQ[2] = WQ[2] - XQ[2] - qQ.z, zQ().normalize(IQ, IQ), IQ
    }

    function iQ(QQ, WQ) {
      return (0, sQ.e)(QQ, WQ, sQ.b, (0, sQ.k)())
    }
  },
  39255: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => rQ
    });
    var wQ = XQ(231),
      qQ = XQ(416),
      TQ = XQ.n(qQ),
      zQ = XQ(37047),
      sQ = XQ(37049),
      FQ = XQ(2997);
    const PQ = wQ.h.xy * wQ.h.playerEyeToHeightRatio,
      gQ = 250,
      JQ = 1.1,
      rQ = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(QQ, WQ) {
          this.entities.set(QQ, WQ)
        }
        update(QQ, WQ) {
          const XQ = this.entities.get(QQ);
          this.entities.set(QQ, WQ);
          const wQ = this.playing.get(QQ);
          wQ && (XQ && XQ.soundName === WQ.soundName ? (wQ.sound.setRelativeVolume(WQ.volume), wQ.sound.rate(WQ.rate), wQ.sound.setPannerAttr({
            refDistance: WQ.refDistance
          })) : this.stopEntity(QQ))
        }
        remove(QQ) {
          this.stopEntity(QQ), this.entities.delete(QQ)
        }
        fJ(QQ) {
          this.msSinceLastScan += QQ, this.msSinceLastScan < gQ || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(QQ) {
          const WQ = this.playing.get(QQ);
          WQ && (WQ.sound.stop(), this.playing.delete(QQ))
        }
        startEntity(QQ, WQ, XQ) {
          const wQ = (0, sQ.d)(WQ.soundName);
          if (!wQ) return console.error(`AudioEntityManager: no sound found for "${WQ.soundName}", dropping audio entity ${QQ}`), void this.remove(QQ);
          const qQ = zQ.b.play(wQ, WQ.volume, XQ, WQ.maxHearDist, WQ.refDistance, !0);
          qQ.rate(WQ.rate), this.playing.set(QQ, {
            sound: qQ,
            lastPos: TQ().clone(XQ)
          })
        }
        scan() {
          const QQ = (0, FQ.f)();
          if (!QQ) return;
          const WQ = QQ.rD.xV(QQ.RC);
          if (WQ)
            for (const [XQ, wQ] of this.entities) {
              if (!QQ.rD.OQQ(XQ, "position")) continue;
              const qQ = QQ.rD.xV(XQ),
                zQ = TQ().sqrDist(WQ, qQ),
                sQ = this.playing.get(XQ);
              if (sQ) {
                const QQ = wQ.maxHearDist * JQ;
                zQ > QQ * QQ ? this.stopEntity(XQ) : TQ().equals(qQ, sQ.lastPos) || (sQ.sound.setPosition([qQ[0], qQ[1] + PQ, qQ[2]]), TQ().copy(sQ.lastPos, qQ))
              } else zQ <= wQ.maxHearDist * wQ.maxHearDist && this.startEntity(XQ, wQ, qQ)
            }
        }
      }
  },
  39307: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      f: () => qQ
    });
    var wQ = XQ(31);

    function qQ(QQ) {
      return "refetchCode" === QQ || "devDownloadJson" === QQ || QQ.startsWith("Plugin")
    }

    function TQ(QQ, WQ) {
      "refetchCode" !== QQ ? "Plugin|MobAiPlugin|ShowPetUi" !== QQ ? Promise.all([XQ.e(111), XQ.e(112), XQ.e(107), XQ.e(109), XQ.e(222)]).then((() => XQ(41986))).then((XQ => {
        let {
          runClientGameMessage: wQ
        } = XQ;
        wQ(QQ, WQ)
      })).catch((WQ => {
        console.error(`Game message ${QQ} failed`, WQ)
      })) : wQ.k.mB("showPetUi", WQ) : wQ.k.mB("refetchCode")
    }
  },
  39289: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ
    });
    var wQ = XQ(1257),
      qQ = XQ(1384),
      TQ = XQ(26),
      zQ = XQ(1360),
      sQ = XQ(1376),
      FQ = XQ(1567),
      PQ = XQ(36775);

    function gQ(QQ) {
      let {
        Cq: WQ,
        uq: XQ
      } = QQ;
      const gQ = null !== WQ && void 0 !== WQ ? WQ : (0, sQ.e)().gameNameWithVariation;
      (0, wQ.F)(gQ) && ((0, PQ.n)(), (0, zQ.Z)((() => {
        console.log("Received matchmaking order from game server to game", WQ), (0, TQ.m)("inGameReplay"), (0, FQ.navigatePreserveSearch)((0, qQ.c)(gQ, null !== XQ && void 0 !== XQ ? XQ : void 0))
      }), "video_start"))
    }
  },
  39287: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      i: () => zQ,
      l: () => sQ,
      o: () => PQ
    });
    var wQ = XQ(31),
      qQ = XQ(1404);
    const TQ = new Map;

    function zQ(QQ, WQ) {
      wQ.k.mB("newUiRequest", {
        id: QQ,
        clientParameters: WQ
      }, !0)
    }

    function sQ(QQ) {
      wQ.k.mB("removeUiRequest", QQ, !0);
      const WQ = TQ.get(QQ);
      WQ && (WQ.tearDownNotification(), TQ.delete(QQ))
    }

    function FQ() {
      wQ.k.mB("clearUiRequests");
      for (const QQ of TQ.values()) QQ.tearDownNotification();
      TQ.clear()
    }

    function PQ(QQ, WQ, XQ, wQ) {
      const zQ = qQ.NotificationProvider.showPromptPopup({
        title: WQ,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: XQ,
        unlockPointerKey: "uiRequestPopup"
      });
      TQ.set(QQ, zQ), zQ.getResult().then((WQ => {
        TQ.delete(QQ), "notificationTornDown" !== WQ && wQ(WQ)
      }))
    }
  },
  39279: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    class wQ {
      constructor() {
        this.members = new Map
      }
      apply(QQ) {
        const WQ = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const wQ of QQ.uQ) {
          let QQ = this.members.get(wQ.LQ);
          if (QQ || (QQ = {
              name: null,
              settings: {}
            }, this.members.set(wQ.LQ, QQ), WQ.added.push(wQ.LQ)), null !== wQ.kQ && (QQ.name = wQ.kQ), null !== wQ.fQ || wQ.SQ.length > 0) {
            const XQ = null === wQ.fQ ? {} : JSON.parse(wQ.fQ);
            Object.assign(QQ.settings, XQ);
            for (const WQ of wQ.SQ) delete QQ.settings[WQ], XQ[WQ] = void 0;
            WQ.settingChanges.push({
              playerId: wQ.LQ,
              settings: XQ
            })
          }
        }
        for (const wQ of QQ.tQ) {
          const QQ = this.members.get(wQ);
          var XQ;
          if (QQ) this.members.delete(wQ), WQ.removed.push({
            playerId: wQ,
            name: null !== (XQ = QQ.name) && void 0 !== XQ ? XQ : void 0
          })
        }
        return WQ
      }
      has(QQ) {
        return this.members.has(QQ)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(QQ) {
        var WQ, XQ;
        return null !== (WQ = null === (XQ = this.members.get(QQ)) || void 0 === XQ ? void 0 : XQ.name) && void 0 !== WQ ? WQ : void 0
      }
      getSettings(QQ) {
        var WQ;
        return null === (WQ = this.members.get(QQ)) || void 0 === WQ ? void 0 : WQ.settings
      }
      getSetting(QQ, WQ) {
        var XQ;
        return null === (XQ = this.members.get(QQ)) || void 0 === XQ ? void 0 : XQ.settings[WQ]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39311: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ,
      f: () => qQ
    });
    const wQ = ["description", "label"];

    function qQ(QQ) {
      const WQ = QQ.type;
      return {
        type: WQ,
        params: QQ[WQ]
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);