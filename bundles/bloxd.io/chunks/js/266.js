export const id = 266;
export const ids = [266];
export const modules = {
  40310: (VV, eV, xV) => {
    function JV(VV) {
      return !(!VV.lobbyLeaderboardInfo && !VV.lobbyManage)
    }
    xV.d(eV, {
      c: () => JV
    })
  },
  40217: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = xV(32),
      YV = xV(2080);

    function UV(VV) {
      let {
        taskId: eV,
        progress: xV
      } = VV;
      const JV = YV.c.get("_tasks");
      null !== JV && void 0 !== JV && JV[eV] && YV.c.apply({
        _tasks: {
          ...JV,
          [eV]: {
            ...JV[eV],
            progress: xV
          }
        }
      })
    }
    JV.h.subscribe("clientTaskProgress", (VV => {
      UV(VV)
    }))
  },
  40154: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => Vx,
      e: () => de,
      g: () => Oe
    });
    var JV = xV(4098),
      YV = xV(165),
      UV = xV(206),
      yV = xV(660),
      pV = xV(40),
      QV = xV(3093),
      nV = xV(4163),
      wV = xV(4148),
      ZV = xV(1252);
    const vV = new WeakMap;
    class rV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          IwV: !0
        };
        this.callbacks = eV, this.options = xV, this.sJV = void 0, this.sessionId = void 0, this.rW = [], this.dwV = !1, this.ik = !1, this.VZV = void 0, this.vW = 0, this.uUV = 0, this.eZV = (VV, eV) => {
          if (this.ik) return;
          const xV = Number(VV);
          this.dwV ? this.xZV(xV, eV) : this.rW.push({
            id: xV,
            payload: eV
          })
        }, this.dispose = () => {
          this.ik || (this.ik = !0, vV.delete(this), this.rW.length = 0, this.VZV())
        }, this.sJV = VV, this.sessionId = VV.sessionId, vV.set(this, []), this.VZV = this.JZV()
      }
      YZV(VV) {
        this.VZV(), this.sJV = VV, this.sessionId = VV.sessionId, this.vW = 0, this.uUV = 0, this.VZV = this.JZV()
      }
      get UW() {
        return this.uUV
      }
      JZV() {
        const VV = this.sJV.jF("*", this.eZV);
        return this.options.IwV && this.sJV.XF(this.dispose), VV
      }
      xZV(VV, eV) {
        try {
          (0, nV.qc)(VV) && (eV = (0, nV.b)(VV, wV.nZ.from(eV)));
          const xV = vV.get(this)[VV];
          if ("function" !== typeof xV) {
            if (this.callbacks.UZV) return void this.callbacks.UZV(VV, eV);
            throw new Error(`No onMessage handler registered for message id ${VV}`)
          }
          xV(eV)
        } catch (xV) {
          this.callbacks.yZV(`Error in onMessage ${VV} with payload ${JSON.stringify(eV)}`, xV)
        } finally {
          this.vW++
        }
      }
      pZV() {
        for (const {
            id: VV,
            payload: eV
          }
          of this.rW) {
          if (this.ik) break;
          this.xZV(VV, eV)
        }
        this.rW.length = 0
      }
      iN() {
        return this.ik
      }
      QZV() {
        if (this.dwV || this.ik) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          jF: (VV, eV) => {
            if (this.dwV || this.ik) throw new Error("Trying to call onMessage after registration finished");
            this.jF(VV, eV)
          },
          finishRegistration: () => {
            if (this.ik) throw new Error("Cannot finish message registration after disposal");
            this.dwV = !0, this.pZV()
          }
        }
      }
      jF(VV, eV) {
        var xV, JV;
        null === (xV = (JV = this.callbacks).nZV) || void 0 === xV || xV.call(JV);
        const YV = vV.get(this);
        for (; VV > YV.length;) YV[YV.length] = null;
        YV[VV] = eV
      }
      send(VV, eV) {
        this.wZV(), (0, ZV.D)(eV) ? this.sJV.DW(VV, eV) : this.sJV.send(VV, eV)
      }
      wZV() {
        var VV, eV;
        (this.uUV++, 5 === kV++) && (null === (VV = (eV = this.callbacks).nZV) || void 0 === VV || VV.call(eV), kV = 0)
      }
      bq() {
        this.dispose(), this.sJV.bq()
      }
      leave() {
        this.dispose(), this.sJV.leave()
      }
    }
    let kV = 0;
    var bV = xV(4115);
    class EV extends rV {
      constructor(VV) {
        super(VV, {
          nZV: () => {
            (0, pV.u)(!0) && (0, JV.sG)()
          },
          yZV: (VV, eV) => {
            var xV;
            null === (xV = (0, QV.d)()) || void 0 === xV || xV.hb(VV, eV)
          }
        }, {
          IwV: !1
        }), (0, bV.e)(VV)
      }
      EW(VV, eV) {
        return !!(0, bV.i)((0, bV.c)(), this.sJV, VV, eV) && (this.wZV(), !0)
      }
      YZV(VV) {
        this.ZZV(), super.YZV(VV), (0, bV.e)(VV)
      }
      bq() {
        super.bq(), this.ZZV()
      }
      ZZV() {
        this.sJV.Fq.BZ.nD = void 0
      }
    }
    var BV = xV(32),
      jV = xV(2080),
      qV = xV(1838),
      tV = xV(37612),
      FV = xV(40162),
      TV = xV(39195),
      PV = xV(38966),
      AV = xV(657),
      NV = xV(39555);

    function XV(VV, eV, xV) {
      const JV = function(VV) {
          const eV = new Int32Array(VV.length * NV.f);
          return VV.forEach(((VV, xV) => {
            const JV = xV * NV.f;
            if (4 === VV.length) {
              const [xV, YV, UV, yV] = VV;
              eV.set([xV, YV, UV, xV, YV, UV, yV], JV)
            } else {
              const [xV, YV, UV, yV, pV, QV, nV] = VV;
              eV.set([xV, UV, pV, YV, yV, QV, nV], JV)
            }
          })), eV
        }(xV),
        YV = (eV, xV, JV, YV) => {
          VV.setBlockNoMulti(eV, xV, JV, YV, !0)
        };
      VV.client.gameRecorder.isCapturing() ? (0, NV.ub)(JV, (0, NV.tb)(JV), YV) : VV.iv.cZ.FX(JV, {
        qS: YV,
        isHookId: eV => VV.blockChangeHasHooks(eV),
        watched: () => function(VV, eV, xV) {
          const JV = [],
            YV = (VV, eV, xV) => {
              JV.push(VV, eV, xV)
            },
            UV = new Set;
          for (let yV = 0; yV < xV.length; yV += NV.f)
            for (let eV = (0, AV.V)(xV[yV]); eV <= (0, AV.V)(xV[yV + 3]); eV++)
              for (let JV = (0, AV.V)(xV[yV + 1]); JV <= (0, AV.V)(xV[yV + 4]); JV++)
                for (let pV = (0, AV.V)(xV[yV + 2]); pV <= (0, AV.V)(xV[yV + 5]); pV++) {
                  const xV = `${eV}|${JV}|${pV}`;
                  UV.has(xV) || (UV.add(xV), VV.blockDataOwner.forEachDataCell(eV, JV, pV, YV))
                }
          return eV.forEachCell(YV), Int32Array.from(JV)
        }(VV, eV, JV)
      }), VV.iv.OeV()
    }

    function MV(VV) {
      VV.aJV = new Set, VV.hJV = new Set, VV.oJV = new Set, VV.lJV = new Set, VV.cJV = [], VV.LJV = [], VV.iH = new Set, VV.eJ = [], VV.lH = []
    }
    class zV {
      constructor(VV) {
        this.iv = VV
      }
      register(VV) {
        const eV = this.iv,
          xV = (0, QV.b)();
        VV.jF(nV.U, (VV => {
          eV.cZ.aJV.add(VV), eV.cZ.hJV.delete(VV)
        })), VV.jF(nV.bb, (VV => {
          eV.cZ.hJV.add(VV), eV.cZ.aJV.delete(VV)
        })), VV.jF(nV.$d, (VV => {
          eV.cZ.hJV.delete(VV), eV.cZ.aJV.delete(VV)
        })), VV.jF(nV.$, (VV => {
          eV.cZ.oJV.add(VV), eV.cZ.lJV.delete(VV)
        })), VV.jF(nV.ib, (VV => {
          eV.cZ.lJV.add(VV), eV.cZ.oJV.delete(VV)
        })), VV.jF(nV.ee, (VV => {
          eV.cZ.lJV.delete(VV), eV.cZ.oJV.delete(VV)
        })), VV.jF(nV.Y, (VV => {
          (0, ZV.$)(VV, eV.cZ.LJV), (0, ZV.$)(VV, eV.cZ.cJV), eV.cZ.cJV.push(VV)
        })), VV.jF(nV.fb, (VV => {
          (0, ZV.$)(VV, eV.cZ.cJV), (0, ZV.$)(VV, eV.cZ.LJV), eV.cZ.LJV.push(VV)
        })), VV.jF(nV.de, (VV => {
          (0, ZV.$)(VV, eV.cZ.cJV), (0, ZV.$)(VV, eV.cZ.LJV)
        })), VV.jF(nV.Df, (VV => {
          let {
            Se: xV,
            Ie: JV
          } = VV;
          JV ? eV.cZ.iH.delete(xV) : eV.cZ.iH.add(xV)
        })), VV.jF(nV.Cf, (VV => {
          let {
            eJ: JV,
            xJ: YV
          } = VV;
          xV.updateWalkThroughRect(eV.bD, JV, YV)
        })), (0, JV.onGameResetOnce)((() => {
          MV(eV.cZ)
        })), VV.jF(nV.nc, (VV => {
          TV.e.applyServerUpdate(VV)
        })), VV.jF(nV.nb, (VV => {
          xV.applyServerBlocks((() => {
            ! function(VV, eV) {
              for (const {
                  RJ: xV,
                  gJ: JV
                }
                of eV) {
                const eV = PV.b[JV];
                if (eV) {
                  const {
                    compX: JV,
                    compY: YV,
                    compZ: UV,
                    mainMultiblock: yV
                  } = eV;
                  VV.gR(xV[0] - JV, xV[1] - YV, xV[2] - UV, yV)
                }
              }
              for (const {
                  RJ: xV,
                  gJ: JV,
                  DJ: YV
                }
                of eV) VV.setBlockNoMulti(xV[0], xV[1], xV[2], JV, !0), VV.blockDataOwner.setBlockData(xV[0], xV[1], xV[2], null === YV ? void 0 : JSON.parse(YV)), VV.blockAdded(xV[0], xV[1], xV[2], JV)
            }(xV, VV)
          })), BV.h.QZ("changeBlockFail", VV), xV.client.triggerGameCallback("onChangeBlockFail", VV), BV.h.QZ("EditBoard", {
            pos: null
          }), BV.h.QZ("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), VV.jF(nV.Ob, (VV => {
          xV.applyServerBlocks((() => {
            XV(xV, TV.e, VV)
          }))
        })), VV.jF(nV.uf, (VV => {
          let {
            Ux: eV,
            yx: JV
          } = VV;
          if (xV.y5(eV[0], eV[1], eV[2])) {
            const VV = (0, QV.b)().mq(eV[0], eV[1], eV[2]);
            (0, QV.b)().updateMailboxContents(eV[0], eV[1], eV[2], VV, JV)
          }
        })), VV.jF(nV.Be, (VV => {
          let {
            pos: eV,
            data: JV
          } = VV;
          xV.blockDataOwner.setBlockData(eV[0], eV[1], eV[2], JV), xV.blockAdded(eV[0], eV[1], eV[2], xV.mq(eV[0], eV[1], eV[2]))
        }))
      }
    }
    var GV = xV(38332),
      WV = xV(37943),
      RV = xV(39225),
      gV = xV(39075),
      DV = xV(39234);
    class iV {
      constructor(VV, eV) {
        this.iv = VV, this.setUpQueuedEntity = eV
      }
      register(VV) {
        const eV = this.iv,
          xV = (0, QV.b)();
        VV.jF(nV.Q, (VV => {
          let {
            hU: eV,
            lU: xV
          } = VV;
          this.setUpQueuedEntity(eV), eV = (0, WV.c)(eV), (0, QV.b)().client.gameRecorder.recordBulletShot(eV, xV), BV.h.QZ(`bulletShot|${eV}`, {
            bulletDirections: xV
          })
        })), VV.jF(nV.oc, (VV => {
          let {
            fU: eV,
            mU: xV
          } = VV;
          BV.h.QZ("damagedByOtherPlayer", {
            fU: eV,
            direction: xV
          }, !0)
        })), VV.jF(nV.zd, (VV => {
          BV.h.QZ("playerKilled", VV, !0), (0, WV.h)(VV.killerEId) && !(0, WV.h)(VV.deadEId) && BV.h.QZ("sessionReplayPlayerKill", {
            killstreak: VV.killstreak
          }), (0, QV.b)().client.gameRecorder.recordPlayerKilled(VV.deadEId, VV.killerEId, VV.withItem, VV.killstreak)
        })), VV.jF(nV.Vb, (VV => {
          BV.h.QZ("customKillfeed", VV, !0), (0, QV.b)().client.gameRecorder.recordCustomKillfeed(VV.killer, VV.victim, VV.withItem)
        })), VV.jF(nV.Kd, (VV => {
          let {
            pe: xV,
            Qe: JV
          } = VV;
          this.setUpQueuedEntity(xV);
          const YV = eV.sF.bJV(xV);
          null !== YV && void 0 !== YV && YV.isGun() && YV.reload(Date.now(), JV)
        })), VV.jF(nV.ue, (VV => {
          let {
            TJ: xV,
            PJ: JV
          } = VV;
          const YV = JV ? (0, DV.f)(eV, JV) : void 0;
          BV.h.QZ("sendHitmarker", {
            TJ: xV,
            screenPos: YV
          }, !0)
        })), VV.jF(nV.Mc, (VV => {
          let {
            RU: JV,
            gU: YV,
            iU: UV,
            CU: yV,
            aU: pV,
            oU: QV,
            cU: nV
          } = VV;
          this.setUpQueuedEntity(JV), JV = (0, WV.c)(JV);
          const wV = eV.sF.QJV(JV);
          if (wV && (wV.lastHurtTime = performance.now()), (0, RV.playRigHurt)(eV, JV, QV), BV.h.QZ("lifeformHurt", {
              eId: JV,
              cU: nV
            }), YV) {
            const VV = (0, DV.f)(eV, YV.PJ);
            BV.h.QZ("yourAttackHit", {
              TJ: yV,
              screenPos: VV,
              hitSelf: JV === eV.bD
            })
          }
          JV === eV.bD && (xV.shakePlayerCamera(JV, pV / 40, 200), BV.h.QZ("closeShopOnDamaged", null), BV.h.QZ("damagedByOtherPlayer", {
            fU: null,
            direction: QV,
            aU: pV
          }, !0));
          const ZV = eV.sF.YF(JV);
          if (ZV && (UV || yV)) {
            const VV = [ZV[0], ZV[1] + 1, ZV[2]];
            UV && (0, gV.j)(eV, gV.C, VV, 15), yV && (0, gV.j)(eV, gV.p, VV, 10)
          }
        })), VV.jF(nV.Jc, (VV => {
          let {
            Ve: xV,
            ee: JV,
            xe: YV
          } = VV;
          (0, GV.c)(eV).setHealthFrac((0, WV.c)(xV), YV), BV.h.QZ("lifeformHealthChanged", {
            eId: (0, WV.c)(xV),
            ee: JV,
            xe: YV
          })
        })), VV.jF(nV.M, (VV => {
          let {
            nY: xV,
            wY: JV
          } = VV;
          (0, QV.b)().playerAttacked(eV.bD, xV, JV)
        })), VV.jF(nV.tb, (() => {
          const VV = eV.sF.bJV(eV.bD);
          null !== VV && void 0 !== VV && VV.isChargeable() && VV.finishCharging(!1, Date.now())
        })), VV.jF(nV.ac, (VV => {
          let {
            bx: eV,
            Ex: xV,
            Bx: JV,
            zx: YV,
            Gx: UV,
            Wx: yV
          } = VV;
          eV = (0, WV.c)(eV), (0, QV.b)().client.updateEffect(eV, xV, {
            displayName: JV,
            icon: YV,
            duration: UV,
            level: yV
          })
        })), VV.jF(nV.Ld, (VV => {
          let {
            bx: eV,
            Ex: xV
          } = VV;
          eV = (0, WV.c)(eV), (0, QV.b)().client.removeEffect(eV, xV)
        })), VV.jF(nV.pf, (VV => {
          BV.h.QZ("ttbEffectMultiplier", VV)
        }))
      }
    }
    var CV = xV(40188),
      aV = xV(38328),
      oV = xV(4628),
      cV = xV(39243),
      hV = xV(37925),
      lV = xV(37930),
      LV = xV(38251),
      fV = xV(38368),
      mV = xV(39245),
      KV = xV(40193);
    class HV {
      constructor(VV, eV) {
        this.iv = VV, this.setUpQueuedEntity = eV
      }
      register(VV) {
        const eV = this.iv,
          xV = (0, QV.b)();
        VV.jF(nV.Yc, (VV => {
          let {
            eId: xV,
            settings: JV
          } = VV;
          (0, fV.g)(xV);
          for (const eV in JV)(0, fV.e)(xV, eV, JV[eV]);
          if ("canSee" in JV && eV.sF.wxV(xV, "hidingMeshManager")) {
            const VV = eV.sF.getState(xV, "hidingMeshManager");
            VV.canSee = (0, mV.e)("canSee", JV.canSee), VV._forceUpdate = !0
          }
        })), VV.jF(nV.G, (VV => {
          let {
            EY: xV,
            BY: JV,
            animationScript: YV,
            jY: UV,
            qY: yV,
            tY: pV,
            FY: nV
          } = VV;
          xV = (0, WV.c)(xV);
          const wV = null === YV && null !== pV ? (0, CV.g)(pV, nV) : YV;
          (0, QV.b)().client.gameRecorder.recordAnimateEntity(xV, JV, wV, UV, yV), (0, GV.c)(eV).animations.animateEntity(xV, JV, YV, UV, yV, pV, nV), null !== YV || xV === eV.bD && JV === aV.h.Emote && (0, QV.b)().client.cameraController.endTemporaryThirdPerson()
        })), VV.jF(nV.te, (VV => {
          (0, KV.e)(VV)
        })), VV.jF(nV.vd, (VV => {
          for (const eV of VV)(0, cV.z)(eV);
          BV.h.QZ("playerCosmeticsUpdated", VV, !0)
        })), VV.jF(nV.K, (VV => {
          for (const xV of VV)(0, LV.d)(eV, xV)
        })), VV.jF(nV._c, (VV => {
          (0, gV.l)(eV, (0, ZV.n)(VV))
        })), VV.jF(nV.ad, (VV => {
          oV.e[VV.nV] ? (0, gV.l)(eV, {
            ...oV.e[VV.nV],
            pos1: VV.pos1,
            pos2: VV.pos2
          }) : console.error(`Unknown preset id: ${VV.nV}`)
        })), VV.jF(nV.rd, (VV => {
          var eV, xV;
          let {
            iY: JV,
            CY: YV,
            aY: UV,
            oY: yV
          } = VV, {
            hY: pV,
            lY: nV
          } = null !== yV && void 0 !== yV ? yV : {};
          const {
            cY: wV
          } = null !== yV && void 0 !== yV ? yV : {};
          pV = null !== (eV = pV) && void 0 !== eV ? eV : void 0, nV = null !== (xV = nV) && void 0 !== xV ? xV : void 0, "string" === typeof wV && this.setUpQueuedEntity(wV), (0, QV.b)().client.gameRecorder.recordPlaySound(JV, YV, UV, yV), hV.d.play((0, lV.f)(JV), YV, wV, pV, nV).rate(UV)
        })), VV.jF(nV.wf, (VV => {
          for (const eV in VV) {
            const JV = VV[eV];
            for (const VV in JV) xV.client.meshCreator.handleParticleSystemUpdate(eV, VV, JV[VV])
          }
        }))
      }
    }
    var uV = xV(38938),
      sV = xV(38901);
    class SV {
      constructor(VV) {
        this.iv = VV
      }
      register(VV) {
        const eV = this.iv,
          xV = (0, QV.b)();

        function JV() {
          return eV.sF.sxV(eV.bD)
        }
        VV.jF(nV.Cc, (VV => {
          let {
            jx: xV,
            qx: JV,
            Fx: YV,
            Tx: UV,
            Px: yV,
            Ax: pV,
            Nx: QV,
            Xx: nV,
            Mx: wV
          } = VV;
          if (!eV.sF.wxV(xV, "itemState")) return void(0, uV.n)(eV, xV, [yV, pV, QV], JV, {
            amount: YV,
            attributes: JSON.parse(UV),
            Xx: nV,
            size: wV
          });
          const ZV = eV.sF.getState(xV, "itemState");
          ZV.amount = YV, ZV.Xx = nV, ZV.creationTime = Date.now(), (0, sV.setServerPosition)(eV.sF.getState(xV, "smoothToServerPos"), yV, pV, QV)
        })), VV.jF(nV.kb, (VV => {
          (0, GV.c)(eV).setCantPickUp(VV, !0), eV.sF.wxV(VV, "itemState") && (eV.sF.getState(VV, "itemState").Xx = !0)
        })), VV.jF(nV.Zd, (VV => {
          (0, GV.c)(eV).setCantPickUp(VV, !1), eV.sF.wxV(VV, "itemState") && (eV.sF.getState(VV, "itemState").Xx = !1)
        })), VV.jF(nV.md, (VV => {
          let {
            pickUpItems: eV,
            pickUpAckSeq: xV
          } = VV;
          for (const {
              name: YV,
              amount: UV,
              attributes: yV
            }
            of eV) JV().pickUpItem({
            name: YV,
            amount: UV,
            typeObj: uV.E[YV],
            attributes: yV
          });
          (0, QV.b)().client.inventoryPrediction.serverChangeApplied(xV)
        })), VV.jF(nV.Oe, (VV => {
          let {
            index: xV,
            name: JV,
            amount: YV,
            attributes: UV,
            setSlotAckSeq: yV
          } = VV;
          const pV = eV.sF.SxV(eV.bD);
          (xV < pV.playerInventory.numSlots || pV.Ge || pV.inCreative) && pV.setItemSlot(xV, JV, YV, UV), (0, QV.b)().client.inventoryPrediction.serverChangeApplied(yV)
        })), VV.jF(nV.yc, (VV => {
          (0, QV.b)().client.inventoryPrediction.acknowledge(VV)
        })), VV.jF(nV.C, (VV => {
          let {
            MJ: eV,
            zJ: xV,
            GJ: JV,
            WJ: YV
          } = VV;
          (0, QV.b)().client.itemDropPrediction.onActionItemDrops(eV, xV, JV, YV)
        })), VV.jF(nV.Hb, (VV => {
          JV().clearInventory(), (0, QV.b)().client.inventoryPrediction.serverChangeApplied(VV)
        })), VV.jF(nV.Se, (VV => {
          BV.h.QZ("setSelectedInventorySlotI", VV, !0)
        })), VV.jF(nV.yb, (VV => {
          let {
            Rx: xV,
            gx: JV,
            Dx: YV,
            ix: UV,
            Cx: yV,
            ox: pV,
            hx: nV,
            lx: wV
          } = VV;
          const ZV = eV.sF.SxV(eV.bD);
          if (pV) {
            const {
              ze: VV,
              Ce: eV
            } = wV;
            return (0, QV.b)().client.inventoryPrediction.teV(eV, (() => {
              ZV.chestRefreshed(JV, YV, UV, nV, VV)
            })) && BV.h.QZ("chestToggleFromServer", !1, !0), void BV.h.QZ("chestRefreshedFromServer")
          }(xV || ZV.Ge) && (xV ? (ZV.chestOpened(JV, YV, UV, yV, nV), null !== yV && (0, QV.b)().client.ironChestPasskeyCache.onChestOpened(UV, yV)) : ZV.chestClosed(), BV.h.QZ("chestToggleFromServer", xV, !0))
        })), VV.jF(nV.Zb, (VV => {
          let {
            craftingRecipeItemName: JV,
            recipesForItem: YV
          } = VV;
          JV ? xV.craftingManager.editRecipesForPlayer(eV.bD, JV, YV) : xV.craftingManager.resetAllPlayerRecipes(eV.bD), BV.h.QZ("craftingRecipesEdited", {
            itemName: JV,
            recipesForItem: YV
          })
        })), VV.jF(nV.Qd, (VV => {
          let {
            Ix: eV,
            Ox: xV,
            VJ: YV
          } = VV;
          JV().removeItemName(eV, xV), (0, QV.b)().client.inventoryPrediction.serverChangeApplied(YV)
        })), VV.jF(nV.Od, (VV => {
          let {
            bY: JV
          } = VV;
          xV.craftingManager.removeRecipes(eV.bD, JV), BV.h.QZ("craftingRecipesEdited", {
            itemName: JV,
            recipesForItem: []
          })
        }))
      }
    }
    var IV = xV(7024),
      dV = xV(38768),
      OV = xV(380),
      Ve = xV.n(OV),
      ee = xV(4995),
      xe = xV(38840),
      Je = xV(39396),
      Ye = xV(38765);
    class Ue {
      constructor(VV, eV) {
        this.iv = VV, this.setUpQueuedEntity = eV
      }
      register(VV) {
        const eV = this.iv,
          xV = (0, QV.b)();
        VV.jF(nV.kf, (VV => {
          let {
            Je: xV,
            Ye: YV,
            Ue: UV,
            ye: yV
          } = VV;
          const pV = [YV, UV, yV];
          eV.sF.setPosition(eV.bD, pV), (0, JV.sendColyMessage)(nV.Qg, {
            ew: xV,
            xw: ee.f
          }), BV.h.QZ("localPlayerTeleported", {
            pos: pV,
            isCorrection: !1
          })
        })), VV.jF(nV.fd, (VV => {
          let {
            ZJ: eV,
            vJ: xV,
            rJ: JV,
            kJ: YV
          } = VV;
          this.setUpQueuedEntity(eV);
          const UV = [xV, JV, YV];
          BV.h.QZ(`otherPlayerTeleported|${eV}`, {
            pos: UV
          })
        })), VV.jF(nV.Dd, (VV => {
          let {
            ne: xV,
            Ze: YV,
            ke: UV,
            Ee: yV,
            Be: pV,
            je: QV,
            qe: wV,
            Fe: ZV,
            te: vV,
            Ae: rV
          } = VV;
          const kV = [YV, UV, yV];
          eV.sF.setPosition(eV.bD, kV);
          const bV = eV.sF.XxV(eV.bD),
            EV = eV.sF.uH(eV.bD);
          Ve().set(EV.YH, 0, 0, 0), Ve().set(EV.UH, 0, 0, 0), Ve().set(EV.ME, pV, QV, wV), EV.nH(), bV._flying = null !== rV, rV ? (bV.flyAccel.Ne = rV.Ne, bV.flyAccel.Xe = rV.Xe) : bV.flyAccel.reset(), ZV && bV.movementType === IV.o.GLIDING && (bV.Te = ZV.Te, Ve().copy(bV.Pe, ZV.Pe)), (0, JV.sendColyMessage)(nV.Qg, {
            ew: xV,
            xw: ee.f
          }), BV.h.QZ("localPlayerTeleported", {
            pos: kV,
            isCorrection: !0
          })
        })), VV.jF(nV.Te, (VV => {
          let {
            vehicleEId: eV,
            overrides: xV
          } = VV;
          (0, QV.b)().applyRiddenVehicleSettingOverrides(eV, xV)
        })), VV.jF(nV.zf, (VV => {
          let {
            Qx: xV,
            nx: JV,
            wx: YV
          } = VV;
          const UV = eV.sF.XxV(eV.bD).physicsState.type === IV.q.SLEEPING && xV === IV.q.DEFAULT;
          (0, QV.b)().updatePositionAndPhysics(eV.bD, {
            type: xV,
            tier: JV
          }, !0, YV), UV && (0, QV.b)().updateHeldVehicleStatus()
        })), VV.jF(nV.rb, (VV => {
          let {
            rY: xV,
            kY: JV
          } = VV;
          eV.sF.HxV(eV.bD).setPose(xV, JV)
        })), VV.jF(nV.Fe, (VV => {
          const {
            rZ: xV,
            NJV: JV
          } = (0, dV.h)([VV[0], VV[1], VV[2]]);
          Ye.e.setLookDirection(eV, xV, JV), (0, xe.x)(xV, JV);
          const YV = eV.sF.HxV(eV.bD);
          YV && (YV.heading = xV)
        })), VV.jF(nV.Ge, (VV => {
          xV.client.cameraController.setCameraZoom(VV)
        })), VV.jF(nV._e, (VV => {
          let {
            pV: JV,
            QV: YV
          } = VV;
          xV.shakePlayerCamera(eV.bD, JV, YV)
        })), VV.jF(nV.Ec, (VV => {
          eV.sF.HxV(eV.bD).jumpMultiplier.setMultiplierType("jumpEffectAmount", VV)
        })), (0, JV.onGameResetOnce)((() => {
          eV.sF.HxV(eV.bD).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), VV.jF(nV.I, (VV => {
          eV.sF.uH(eV.bD).applyImpulse(VV)
        })), VV.jF(nV.We, (VV => {
          const xV = eV.sF.uH(eV.bD);
          Ve().set(xV.YH, 0, 0, 0), Ve().set(xV.UH, 0, 0, 0), Ve().copy(xV.ME, VV), xV.nH()
        })), (0, JV.onGameResetOnce)((() => {
          (0, Je.setFloatingYValue)(eV.sF.getState(eV.bD, "physics"), eV.sF.U_(eV.bD), null)
        })), VV.jF(nV.bc, (VV => {
          let {
            Zx: xV,
            vx: JV,
            kx: YV
          } = VV;
          const UV = (0, WV.c)(xV);
          if (UV === eV.bD) {
            const VV = eV.sF.U_(eV.bD).position;
            YV ??= Math.floor(VV[1]) - 1, (0, Je.setFloatingYValue)(eV.sF.getState(eV.bD, "physics"), eV.sF.U_(eV.bD), JV ? YV : null)
          }(0, GV.c)(eV).setFloating(UV, JV, YV);
          const yV = eV.sF.getState(UV, "floating");
          yV && (yV.isFloating = JV, yV.kx = JV ? YV : null)
        }))
      }
    }

    function ye(VV, eV, xV, JV, YV) {
      let UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!VV.sF.uxV(VV.bD)) return console.log("Got resync inven but don't have inven component"), void eV.acknowledge(JV);
      UV && console.error("Had to sync inven"), eV.teV(JV, YV) && xV.QZ("chestToggleFromServer", !1, !0), xV.QZ("syncedInvenFromServer")
    }
    var pe = xV(40201),
      Qe = xV(40209),
      ne = xV(2086);
    var we = xV(4975);

    function Ze(VV) {
      const eV = VV.cZ;
      let xV = 0,
        YV = -1,
        yV = -1 / 0,
        pV = null,
        QV = !0;
      const wV = () => {
        if (++xV % 10 !== 0) return;
        const wV = (0, JV.getLastReceivedPacketId)();
        if (wV <= YV) return;
        const [ZV, vV, rV] = VV.sF.YF(VV.bD), kV = ! function(VV) {
          var eV;
          let xV = null === (eV = VV.sF.zJV(VV.bD)) || void 0 === eV ? void 0 : eV.zk;
          if (void 0 === xV) return !1;
          const JV = new Set;
          for (; void 0 !== xV && !JV.has(xV);) {
            var YV;
            JV.add(xV);
            const eV = VV.sF.getState(xV, "smoothToServerPos"),
              UV = Array.isArray(eV) ? null : null === eV || void 0 === eV ? void 0 : eV.serverPosition;
            if (UV) {
              const eV = VV.sF.YF(xV);
              if (Math.abs(eV[0] - UV[0]) > 10 || Math.abs(eV[1] - UV[1]) > 10 || Math.abs(eV[2] - UV[2]) > 10) return !0
            }
            xV = null === (YV = VV.sF.zJV(xV)) || void 0 === YV ? void 0 : YV.zk
          }
          return !1
        }(VV) && function(VV, eV, xV, JV) {
          const YV = UV.f.PZ;
          for (let UV = 0; UV < VV.length; UV++) {
            const yV = VV[UV];
            if (!(0, we.h)(eV, xV, JV, yV[0] * YV, yV[1] * YV, yV[2] * YV)) return !1
          }
          return !0
        }(eV.EE.kZ, ZV, vV, rV), bV = null === pV || Math.abs(ZV - pV[0]) > 8 || Math.abs(vV - pV[1]) > 8 || Math.abs(rV - pV[2]) > 8, EV = !QV || bV || performance.now() - yV >= 1e4;
        QV = kV, kV && EV && (YV = wV, yV = performance.now(), pV = [ZV, vV, rV], (0, JV.sendColyMessage)(nV.qg, {
          ty: wV
        }))
      };
      return VV.on("iZ", wV), () => {
        VV.off("iZ", wV)
      }
    }
    var ve = xV(40215),
      re = xV(1612),
      ke = xV(3091),
      be = xV(1913),
      Ee = xV(3245),
      Be = xV(5273);
    class je {
      constructor(VV, eV, xV) {
        this.iv = VV, this.gameNameWithVariation = eV, this.connectionResume = xV, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        Be.d.reset(), (0, pe.e)()
      }
      startChunkReports() {
        const VV = function(VV) {
            let eV = null,
              xV = -1 / 0,
              YV = null;
            const UV = () => {
                YV = null;
                const UV = Math.ceil(VV.dW[0]),
                  yV = Math.ceil(VV.dW[1]);
                eV && eV[0] === UV && eV[1] === yV || (eV = [UV, yV], xV = performance.now(), (0, JV.sendColyMessage)(nV.ng, {
                  Fy: UV,
                  Ty: yV
                }))
              },
              yV = () => {
                null === YV && (YV = setTimeout(UV, Math.max(0, xV + 250 - performance.now())))
              };
            return UV(), VV.on("addRemoveDistanceChanged", yV), () => {
              VV.off("addRemoveDistanceChanged", yV), null !== YV && (clearTimeout(YV), YV = null)
            }
          }(this.iv.cZ),
          eV = Ze(this.iv);
        this.stopChunkReports = () => {
          VV(), eV()
        }
      }
      restartChunkStreaming() {
        (0, xe.m)(this.iv, (0, QV.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - ve.b)), this.startChunkReports()
      }
      register(VV) {
        const eV = this.iv,
          xV = (0, QV.b)();
        VV.jF(nV.Xc, (VV => {
          jV.c.applyNewClientOptions(VV)
        })), VV.jF(nV.nd, (VV => {
          ke.e.onReceiveColyseusPing(VV)
        })), VV.jF(nV.He, (VV => {
          let {
            key: eV,
            value: xV
          } = VV;
          (0, qV.setCookie)(this.gameNameWithVariation, eV, xV)
        })), VV.jF(nV.Ke, (VV => {
          BV.h.QZ("setDiscordReportKey", VV)
        })), (0, JV.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), VV.jF(nV.sc, (YV => {
          const {
            KU: UV,
            HU: yV
          } = YV;
          if ((0, JV.setAdjustment)(yV), this.connectionResume.onInitialInfo(YV.uU, YV.sU), JV.offlineInputReplay.pW(YV.SU), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", UV);
            try {
              null === YV.IU && (0, QV.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), MV(eV.cZ), jV.c.apply({
                shopInfo: null,
                _shopVersion: ne.e
              });
              const xV = eV.sF.SxV(eV.bD);
              xV.Ge && (xV.chestClosed(), BV.h.QZ("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), BV.h.QZ("initInfoReceived", VV)
            } finally {
              const VV = null === YV.IU ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = VV, this.connectionResume.onResumeInitialInfo(YV.IU, (() => {
                VV.endSeq = (0, QV.b)().client.inventoryPrediction.lastActionSeq
              })), null === VV && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", UV), BV.h.QZ("sessionReplayJoinTicket", YV.ey), be.b.markAdmitted(), (0, xe.n)(eV), BV.h.QZ("loadingScreenState", "loadingPage:loadingWorld"), eV.vxV = UV, eV.sF.wxV(eV.bD, eV.sF.names.entityName) && eV.sF.gC(eV.bD, eV.sF.names.entityName), (0, QV.b)().setEntityName(eV.vxV, (0, QV.b)().getRawEntityName(eV.bD)), eV.YL[eV.vxV] = {}, eV.sF.WC(eV.bD, eV.sF.names.entityName), BV.h.QZ("initInfoReceived", VV), this.startChunkReports(), xV.client.onServerConnectionFinalised()
        })), VV.jF(nV.qe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const VV = this.replayResume;
            if (this.replayResume = null, !VV) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: xV
            } = (0, QV.b)().client, {
              sync: YV
            } = VV, UV = new Set(JV.offlineInputReplay.takeDroppedActions());
            if (YV) {
              var yV;
              const JV = null !== (yV = VV.endSeq) && void 0 !== yV ? yV : xV.lastActionSeq;
              xV.forget((VV => VV > YV.Ce && VV <= JV || UV.has(VV))), ye(eV, xV, BV.h, YV.Ce, YV.load)
            } else xV.dropPending(), xV.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), VV.jF(nV.df, (VV => {
          let {
            Me: xV,
            ie: JV,
            Ce: YV
          } = VV;
          const {
            inventoryPrediction: UV
          } = (0, QV.b)().client, yV = () => {
            eV.sF.SxV(eV.bD).loadFromString(xV)
          };
          this.replayResume && (this.replayResume.sync = {
            Ce: YV,
            load: yV
          }), ye(eV, UV, BV.h, YV, yV, JV)
        })), VV.jF(nV.Jd, (VV => {
          let {
            type: eV,
            location1: xV,
            location2: JV,
            location3: YV,
            score: UV
          } = VV;
          (0, Ee.logProgressionEvent)({
            type: eV,
            location1: xV,
            location2: JV,
            location3: YV,
            score: UV
          })
        })), VV.jF(nV.ne, (VV => {
          let {
            type: eV,
            resourceType: xV,
            amount: JV,
            category: YV,
            itemName: UV
          } = VV;
          (0, Ee.logResourceEvent)({
            type: eV,
            resourceType: xV,
            amount: JV,
            category: YV,
            itemName: UV
          })
        })), VV.jF(nV.Ic, (VV => {
          let {
            leaveEventType: eV,
            category: xV,
            subCategory: JV,
            value: YV
          } = VV;
          (0, Ee.updateLeaveValue)({
            leaveEventType: eV,
            category: xV,
            subCategory: JV,
            value: YV
          })
        })), VV.jF(nV.Ub, (VV => {
          let {
            cat1: eV,
            cat2: xV,
            cat3: JV,
            value: YV
          } = VV;
          (0, Ee.logCustomAnalyticsEvent)({
            cat1: eV,
            cat2: xV,
            cat3: JV,
            value: YV
          })
        })), VV.jF(nV.Fc, (VV => {
          (0, QV.b)().client.leaveGameUnwanted({
            reason: VV,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, re.navigatePreserveSearch)("/")
        })), VV.jF(nV.xe, (VV => {
          BV.h.QZ("serverUpdating", Date.now() + VV, !0)
        })), VV.jF(nV.Tc, Qe.d), VV.jF(nV.Qc, (VV => {
          console.error(`[logErrorToConsole]: ${VV}`)
        }))
      }
    }
    var qe = xV(40217),
      te = xV(40226),
      Fe = xV(1099),
      Te = xV(40221),
      Pe = xV(2681),
      Ae = xV(4038);
    class Ne {
      constructor(VV, eV) {
        this.iv = VV, this.clientApi = eV
      }
      register(VV) {
        const eV = this.iv,
          xV = (0, QV.b)();
        VV.jF(nV.xb, (VV => {
          let {
            chatMsgId: eV,
            worldCodeLineId: xV,
            content: JV,
            chatterEId: YV,
            chatterObjectsToReplay: UV
          } = VV;
          BV.h.QZ("chat", {
            serverChatMsgId: eV,
            worldCodeLineId: xV,
            content: JV,
            chatterEId: YV,
            chatterObjectsToReplay: UV
          }, !0)
        })), VV.jF(nV.mf, (VV => {
          BV.h.QZ("TopRightHelper", VV, !0)
        })), VV.jF(nV.hf, (VV => {
          (0, qe.e)(VV)
        })), VV.jF(nV.Gc, (VV => {
          let {
            category: eV,
            timeframe: xV,
            data: JV
          } = VV;
          BV.h.QZ("leaderboardResponse", {
            category: eV,
            timeframe: xV,
            data: JV
          })
        })), VV.jF(nV.cf, (() => {
          BV.h.QZ("showShopTutorial", null, !0)
        })), VV.jF(nV.Fd, (VV => {
          BV.h.QZ("progressBarUpdate", VV, !0)
        })), VV.jF(nV.wc, (VV => {
          BV.h.QZ("middleScreenBarInitiate", {
            duration: VV.qJ,
            tJ: VV.tJ,
            horizBarRemOffset: VV.FJ
          }, !0)
        })), VV.jF(nV.Td, (() => {
          BV.h.QZ("middleScreenBarRemove", !0)
        })), VV.jF(nV.Ie, (VV => {
          let {
            id: eV,
            position: xV,
            style: JV,
            AJ: YV,
            XJ: UV
          } = VV;
          BV.h.QZ("setDirectionArrow", {
            id: eV,
            position: xV,
            style: JV,
            text: (0, nV.u)(YV),
            XJ: UV
          }, !0)
        })), VV.jF(nV.Db, (VV => {
          let {
            id: eV
          } = VV;
          BV.h.QZ("clearDirectionArrow", {
            id: eV
          }, !0)
        })), VV.jF(nV.Rb, (VV => {
          (0, Ae.onCosmeticPackGranted)(VV)
        })), VV.jF(nV.cd, (VV => {
          let {
            id: eV,
            iJ: xV
          } = VV;
          const {
            type: YV,
            params: UV
          } = (0, te.g)(xV), yV = {
            ...UV
          };
          for (const JV of te.e) JV in yV && yV[JV] && (yV[JV] = (0, nV.u)(yV[JV]));
          Be.d.queueQTE(eV, YV, yV).getResult().then((VV => {
            "boolean" === typeof VV && (0, JV.sendColyMessage)(nV.ji, {
              qteId: eV,
              qteResponse: VV
            })
          }))
        })), VV.jF(nV.Ud, (VV => {
          Be.d.cancelQTE(VV)
        })), (0, JV.onGameResetOnce)((() => {
          Be.d.reset()
        })), VV.jF(nV.dd, (VV => {
          let {
            id: eV,
            clientParameters: xV
          } = VV;
          (0, pe.g)(eV, xV)
        })), VV.jF(nV.Xd, (VV => {
          (0, pe.k)(VV)
        })), VV.jF(nV.tf, (VV => {
          let {
            text: eV,
            id: xV,
            destructive: YV
          } = VV;
          (0, pe.m)(xV, eV, YV, (VV => {
            (0, JV.sendColyMessage)(nV.xj, {
              Ly: xV,
              my: VV,
              Ky: 5
            })
          }))
        })), VV.jF(nV.jd, (VV => {
          let {
            info: eV
          } = VV;
          BV.h.QZ("overShopInfo", eV, !0)
        })), VV.jF(nV.hc, (VV => {
          let {
            ZY: xV,
            vY: JV
          } = VV;
          this.clientApi.openShop(eV.bD, xV, JV)
        })), VV.jF(nV.fc, (VV => {
          let {
            mx: eV,
            ux: xV,
            Sx: JV
          } = VV;
          BV.h.QZ("flyingMiddleMessage", {
            content: (0, nV.u)(eV),
            ux: xV,
            Sx: JV
          }, !0)
        })), VV.jF(nV.Gf, (VV => {
          const eV = VV === Fe.g ? null : {
            message: `Currently loaded as variation: ${VV}`,
            type: "Warning"
          };
          BV.h.QZ("showPermanentBottomMessage", eV, !0)
        })), VV.jF(nV.jc, (VV => {
          let {
            messageType: eV,
            data: JV
          } = VV;
          (0, Te.f)(eV) ? (0, Te.e)(eV, JV) : ("freeCamPerms" === eV && xV.client.freeCameraController.setPerms(JV.key, JV.value), xV.client.triggerGameCallback("onReceivedMessageFromServer", eV, JV))
        })), VV.jF(nV.Kb, Pe.i)
      }
    }
    class Xe {
      constructor(VV, eV, xV, JV) {
        this.gameNameWithVariation = VV, this.iv = xV, this.connectionResume = JV, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new FV.c(eV, this.iv)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, JV.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      YZV(VV) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new FV.c(VV, this.iv), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(VV, eV) {
        const xV = this.iv,
          JV = VV => {
            this.stateReplicationHandler.setUpIfQueued(VV)
          };
        new je(xV, this.gameNameWithVariation, this.connectionResume).register(VV), new zV(xV).register(VV), new SV(xV).register(VV), new iV(xV, JV).register(VV), new HV(xV, JV).register(VV), new Ne(xV, eV).register(VV), new Ue(xV, JV).register(VV)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Me = xV(40232),
      ze = xV(40240),
      Ge = xV(701),
      We = xV(3268);
    class Re {
      constructor(VV, eV, xV, JV) {
        this.msgHandler = xV, this.listener = JV, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Me.e({
          reconnect: VV,
          isLive: () => JV.isLive(),
          onReconnected: VV => {
            this.resumeOnRoom(VV)
          },
          onGaveUp: (VV, eV) => {
            JV.onGaveUp(VV, eV)
          },
          freeze: eV,
          releaseSeat: eV => {
            VV(eV).then((VV => {
              VV.leave(!0)
            }), (VV => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", VV)
            }))
          }
        })
      }
      onInitialInfo(VV, eV) {
        this.session.onInitialInfo(VV, eV)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(VV, eV) {
        if (this.session.onResuming(), null === VV) {
          try {
            (0, QV.b)().client.itemDropPrediction.reset()
          } catch (xV) {
            console.error("Error dropping the item drop predictions on resuming", xV)
          }
          return JV.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, QV.b)().client.itemDropPrediction.onResumeReplayOffered(), JV.offlineInputReplay.replayFrom(VV.OU, eV)
      }
      onResumed(VV) {
        this.setSuspended(!1), (0, JV.resendBeacons)();
        try {
          VV()
        } catch (eV) {
          console.error("Error completing the resume", eV)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(VV) {
        const eV = (0, Ge.j)((() => VV.connection.isOpen));
        VV.XF(eV);
        const xV = new ze.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(VV, "silent"), VV.leave(!1))
        }));
        VV.onStateChange((() => {
          xV.heard()
        }));
        const JV = eV => {
          eV.persisted || VV.leave(!0)
        };
        window.addEventListener("pagehide", JV), VV.XF(((eV, xV) => {
          if (VV === this.attachedRoom && this.listener.isLive()) return (0, UV.h)(eV) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${eV}, reconnecting`), this.listener.onDropped(eV, xV), void this.onConnectionDropped(VV, String(eV))) : void this.listener.onRoomLeft(eV, xV)
        })), this.attachedRoom = VV, this.detachRoomListeners = () => {
          eV(), xV.dispose(), window.removeEventListener("pagehide", JV)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(VV) {
        VV !== this.suspended && (this.suspended = VV, (0, JV.setConnectionSuspended)(VV), (0, QV.b)().client.itemDropPrediction.setSuspended(VV))
      }
      detachRoom() {
        var VV;
        null === (VV = this.detachRoomListeners) || void 0 === VV || VV.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(VV, eV) {
        (0, We.reportClientError)("disconnect", "Left room", eV), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), JV.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(VV.reconnectionToken)
      }
      resumeOnRoom(VV) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), VV.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, KV.p)(), JV.offlineInputReplay.onConnectionReplaced(), this.msgHandler.YZV(VV), this.listener.onReconnected(VV), this.attachRoom(VV)
      }
    }
    var ge = xV(3328),
      De = xV(3336),
      ie = xV(1391),
      Ce = xV(1348),
      ae = xV(5164),
      oe = xV(3584),
      ce = xV(1353),
      he = xV(38872),
      le = xV(40244),
      Le = xV(9527),
      fe = xV(40249),
      me = xV(1241),
      Ke = xV(37633),
      He = xV(40258),
      ue = xV(1817),
      se = xV(3097);

    function Se(VV) {
      var eV, xV;
      if ("object" !== typeof VV || null === VV) return {
        errType: typeof VV
      };
      const JV = VV;
      return {
        errType: null !== (eV = null === (xV = VV.constructor) || void 0 === xV ? void 0 : xV.name) && void 0 !== eV ? eV : "",
        errName: "string" === typeof JV.name ? JV.name : "",
        eventType: "string" === typeof JV.type ? JV.type : "",
        errStack: "string" === typeof JV.stack ? JV.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Ie(VV) {
      if ("undefined" !== typeof ProgressEvent && VV instanceof ProgressEvent) return !0;
      if (!(VV instanceof Error)) return !1;
      const eV = VV.code;
      return "ServerError" === VV.name && void 0 === eV || "AbortError" === VV.name || "seat reservation expired." === VV.message || "early_leave" === VV.message
    }(0, bV.l)((VV => {
      (0, We.reportClientError)("wasm_net", VV)
    }));
    let de = !0;

    function Oe() {
      de = !1
    }
    class Vx {
      constructor(VV) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.iv = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = VV.gameNameWithVariation, this.lobbyName = VV.lobbyName, this.colyClient = VV.colyClient, this.userContext = VV.userContext
      }
      async connectToServer(VV, eV, xV) {
        jV.c.reset(), VV.YL = {
          [VV.bD]: {}
        }, VV.vxV = void 0, (0, KV.p)(), (0, QV.b)().removeAllEntityNames(), (0, QV.b)().setEntityName(VV.bD, this.userContext.getPlayerName()), (0, ie.q)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, ue.e)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const yV = performance.now();
        xV.aborted || (0, Ce.s)("wasm_core_ready", yV);
        const pV = (0, fe.d)(this.userContext, (() => {
          const {
            roomName: JV,
            joinOptions: YV
          } = (0, tV.c)(this.userContext, this.gameNameWithVariation, this.lobbyName, eV, (VV => oe.b.isUsingCustomGameTexturePack(VV)));
          return YV.joinAdHold = this.joinAdHold, YV.renderBackend = (0, se.c)(VV.gZ), (0, le.h)((() => this.colyClient.joinOrCreateUntil(xV, JV, YV)), xV)
        }));
        return BV.h.QZ("loadingScreenState", "loadingPage:joiningLobby"), await pV.then((eV => {
          if (this.joinedAt = performance.now(), (0, Ce.s)("wasm_joined", this.joinedAt), this.iv = VV, this.joinAdHold) {
            const VV = (0, ue.m)((() => {
              eV.send(YV.e), (0, Ce.m)(), be.b.markJoinAdEnded()
            }));
            eV.XF(VV), (0, JV.onGameResetOnce)(VV)
          }
          const xV = new EV(eV);
          this.connectionResume = new Re((VV => this.colyClient.reconnect(VV)), (eV => {
            VV.fW(eV)
          }), xV, {
            isLive: () => (0, QV.b)().client.getMsgHandler() === xV,
            onDropped: (VV, eV) => {
              (0, De.e)(VV) || this.logUnrecognisedConnectionLoss(VV, void 0, {
                site: "drop",
                closeReason: null !== eV && void 0 !== eV ? eV : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (VV, eV) => {
              this.onRoomLeft(VV, eV)
            },
            onReconnected: VV => {
              this.incomingMsgInitialisor.YZV(VV), this.checkSendPath = (0, he.h)(xV, VV, bV.m)
            },
            onGaveUp: (VV, eV) => {
              this.onResumeGaveUp(VV, eV)
            }
          }), this.connectionResume.attachRoom(eV), (0, JV.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const UV = xV.send,
            yV = xV.jF,
            pV = xV.sJV.send,
            nV = xV.sJV.jF,
            wV = xV.xZV;
          this.checkSendPath = (0, he.h)(xV, eV, bV.m);
          const ZV = setInterval((() => {
            UV === xV.send && yV === xV.jF && pV === xV.sJV.send && nV === xV.sJV.jF && wV === xV.xZV || Oe(), this.checkSendPath()
          }), 1e4);
          return (0, JV.onGameResetOnce)((() => {
            clearInterval(ZV)
          })), {
            success: !0,
            successDetails: xV
          }
        })).catch((eV => {
          if (xV.aborted && eV === (0, me.g)(xV)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (eV instanceof Ke.d) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: eV.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, He.d)(eV, eV.leg)
            }
          };
          VV.hb(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${eV.code}\n`, eV);
          const JV = eV.code;
          return JV === UV.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: UV.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(JV, eV.message, {
                site: "join",
                sinceJoinStart: (0, De.c)(performance.now() - yV),
                ...Se(eV)
              }, Ie(eV)),
              rematch: (0, le.d)(eV),
              gameRefused: (0, Le.b)(eV),
              joinFailure: (0, He.d)(eV, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(VV, eV, xV) {
        BV.h.QZ("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Xe(this.gameNameWithVariation, eV.sJV, VV, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const YV = eV.QZV();
        this.incomingMsgInitialisor.setupOnMessageListeners(YV, xV), (0, JV.onConnectionToServerReady)(YV, eV), this.joinAdHold && be.b.markAdmissionAwaited(), YV.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(VV, eV) {
        (0, ce.lb)(new Error("Reconnect failed"), {
          ...(0, ge.l)(eV),
          game: this.gameNameWithVariation
        }), (0, We.reportClientError)("disconnect", "Reconnect failed", eV.reason), (0, QV.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !VV,
          canPlayAgain: VV,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, re.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, De.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(VV, eV) {
        var xV;
        if (VV === UV.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${VV}`), VV === UV.b.serverUpdating.code) return (0, We.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, QV.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.iv.hb(`Kicked from server with code ${VV}`, new Error);
        const JV = Object.keys(UV.b).find((eV => UV.b[eV].code === VV));
        (0, We.reportClientError)("disconnect", "Left room", null !== JV && void 0 !== JV ? JV : String(VV));
        const YV = this.onConnectionToServerLost(VV, void 0, {
          site: "leave",
          closeReason: null !== eV && void 0 !== eV ? eV : "",
          sinceJoined: this.sinceJoined()
        });
        (0, QV.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${YV.reason}`,
          canReconnect: YV.canReconnect,
          requiresRefresh: YV.requiresRefresh,
          automaticallyReconnect: null !== (xV = YV.automaticallyReconnect) && void 0 !== xV && xV
        }), (0, re.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, ae.F)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, re.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(VV, eV, xV) {
        var JV;
        let YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (JV = eV) && void 0 !== JV && JV.endsWith(UV.l) && (this.userContext.invalidateTrafficCode(), eV = eV.replace(UV.l, "")), VV === UV.b.outdatedVersion.code) return console.error("Outdated client with version ", yV.e, ", refreshing page"), (0, qV.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (VV === UV.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, qV.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const yV in UV.b) {
          const {
            code: xV,
            text: JV,
            canReconnect: YV
          } = UV.b[yV];
          if (xV === VV) {
            console.log("matched known error", VV, "leaving game");
            return {
              reason: "" !== JV ? JV : eV || `Code: ${VV}`,
              requiresRefresh: !1,
              canReconnect: YV,
              automaticallyReconnect: xV === UV.b.customGameUpdated.code || xV === UV.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, De.d)(VV) || YV ? console.warn("Connection lost", VV, eV) : this.logUnrecognisedConnectionLoss(VV, eV, xV), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${VV}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: YV ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(VV, eV, xV) {
        (0, ce.lb)(new Error("Unrecognised connection loss"), {
          code: String(VV),
          cause: null !== eV && void 0 !== eV ? eV : "",
          ...xV,
          game: this.gameNameWithVariation,
          ...(0, De.h)()
        })
      }
    }
  },
  40162: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => Hx,
      g: () => Ox
    });
    var JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV, gV, DV, iV, CV, aV, oV, cV, hV, lV, LV, fV, mV, KV, HV, uV, sV, SV, IV, dV, OV, Ve, ee, xe, Je, Ye, Ue, ye, pe, Qe, ne, we, Ze, ve, re, ke, be, Ee, Be, je, qe, te, Fe, Te, Pe, Ae, Ne, Xe, Me, ze, Ge, We, Re, ge, De, ie, Ce, ae, oe, ce, he, le, Le, fe, me, Ke, He, ue, se, Se, Ie, de = xV(32),
      Oe = xV(38332),
      Vx = xV(40173),
      ex = xV(40182),
      xx = xV(9734),
      Jx = xV(654),
      Yx = xV(648),
      Ux = xV(37977);
    let yx = (JV = (0, xx.type)("number"), YV = (0, xx.type)("number"), UV = (0, xx.type)("number"), yV = (0, xx.type)("number"), pV = (0, xx.type)("number"), QV = (0, xx.type)("number"), nV = (0, xx.type)("string"), wV = class extends xx.Schema {
        constructor() {
          super(...arguments), (0, Vx.e)(this, "id", ZV, this), (0, Vx.e)(this, "amount", vV, this), (0, Vx.e)(this, "x", rV, this), (0, Vx.e)(this, "y", kV, this), (0, Vx.e)(this, "z", bV, this), (0, Vx.e)(this, "size", EV, this), (0, Vx.e)(this, "attributes", BV, this)
        }
      }, ZV = (0, ex.d)(wV.prototype, "id", [JV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vV = (0, ex.d)(wV.prototype, "amount", [YV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rV = (0, ex.d)(wV.prototype, "x", [UV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kV = (0, ex.d)(wV.prototype, "y", [yV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), bV = (0, ex.d)(wV.prototype, "z", [pV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), EV = (0, ex.d)(wV.prototype, "size", [QV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), BV = (0, ex.d)(wV.prototype, "attributes", [nV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), wV),
      px = (jV = (0, xx.type)("string"), qV = (0, xx.type)("string"), tV = class extends xx.Schema {
        constructor() {
          super(...arguments), (0, Vx.e)(this, "itemName", FV, this), (0, Vx.e)(this, "enchantmentTier", TV, this)
        }
      }, FV = (0, ex.d)(tV.prototype, "itemName", [jV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), TV = (0, ex.d)(tV.prototype, "enchantmentTier", [qV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), tV),
      Qx = (PV = (0, xx.type)("string"), AV = (0, xx.type)("string"), NV = (0, xx.type)("number"), XV = (0, xx.type)("number"), MV = (0, xx.type)("number"), zV = (0, xx.type)("float32"), GV = (0, xx.type)("float32"), WV = (0, xx.type)("float32"), RV = (0, xx.type)("string"), gV = (0, xx.type)(["number"]), DV = (0, xx.type)("boolean"), iV = class extends xx.Schema {
        constructor() {
          super(...arguments), (0, Vx.e)(this, "type", CV, this), (0, Vx.e)(this, "name", aV, this), (0, Vx.e)(this, "x", oV, this), (0, Vx.e)(this, "y", cV, this), (0, Vx.e)(this, "z", hV, this), (0, Vx.e)(this, "xRotation", lV, this), (0, Vx.e)(this, "yRotation", LV, this), (0, Vx.e)(this, "zRotation", fV, this), (0, Vx.e)(this, "followingEId", mV, this), (0, Vx.e)(this, "followingOffset", KV, this), (0, Vx.e)(this, "shouldMatchFollowingEntityRotation", HV, this)
        }
      }, CV = (0, ex.d)(iV.prototype, "type", [PV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), aV = (0, ex.d)(iV.prototype, "name", [AV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), oV = (0, ex.d)(iV.prototype, "x", [NV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cV = (0, ex.d)(iV.prototype, "y", [XV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hV = (0, ex.d)(iV.prototype, "z", [MV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lV = (0, ex.d)(iV.prototype, "xRotation", [zV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LV = (0, ex.d)(iV.prototype, "yRotation", [GV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fV = (0, ex.d)(iV.prototype, "zRotation", [WV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mV = (0, ex.d)(iV.prototype, "followingEId", [RV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), KV = (0, ex.d)(iV.prototype, "followingOffset", [gV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new xx.ArraySchema(0, 0, 0)
        }
      }), HV = (0, ex.d)(iV.prototype, "shouldMatchFollowingEntityRotation", [DV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), iV),
      nx = (uV = (0, xx.type)("float32"), sV = (0, xx.type)("float32"), SV = (0, xx.type)("boolean"), IV = (0, xx.type)("boolean"), dV = (0, xx.type)("float32"), OV = (0, xx.type)("boolean"), Ve = (0, xx.type)("string"), ee = (0, xx.type)("string"), xe = (0, xx.type)("string"), Je = (0, xx.type)("string"), Ye = (0, xx.type)(["number"]), Ue = (0, xx.type)("number"), ye = (0, xx.type)({
        map: px
      }), pe = class extends Qx {
        constructor() {
          super(...arguments), (0, Vx.e)(this, "scale", Qe, this), (0, Vx.e)(this, "speed", ne, this), (0, Vx.e)(this, "jumping", we, this), (0, Vx.e)(this, "crouching", Ze, this), (0, Vx.e)(this, "cameraPitch", ve, this), (0, Vx.e)(this, "armSwinging", re, this), (0, Vx.e)(this, "heldItemName", ke, this), (0, Vx.e)(this, "heldItemEnchantmentTier", be, this), (0, Vx.e)(this, "pose", Ee, this), (0, Vx.e)(this, "ridingVehicleEId", Be, this), (0, Vx.e)(this, "meshOffset", je, this), (0, Vx.e)(this, "baseRenderHeading", qe, this), (0, Vx.e)(this, "armour", te, this)
        }
      }, Qe = (0, ex.d)(pe.prototype, "scale", [uV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), ne = (0, ex.d)(pe.prototype, "speed", [sV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), we = (0, ex.d)(pe.prototype, "jumping", [SV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Ze = (0, ex.d)(pe.prototype, "crouching", [IV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), ve = (0, ex.d)(pe.prototype, "cameraPitch", [dV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), re = (0, ex.d)(pe.prototype, "armSwinging", [OV], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), ke = (0, ex.d)(pe.prototype, "heldItemName", [Ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), be = (0, ex.d)(pe.prototype, "heldItemEnchantmentTier", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ee = (0, ex.d)(pe.prototype, "pose", [xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Be = (0, ex.d)(pe.prototype, "ridingVehicleEId", [Je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), je = (0, ex.d)(pe.prototype, "meshOffset", [Ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new xx.ArraySchema(0, 0, 0)
        }
      }), qe = (0, ex.d)(pe.prototype, "baseRenderHeading", [Ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), te = (0, ex.d)(pe.prototype, "armour", [ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new xx.MapSchema
        }
      }), pe),
      wx = (Fe = (0, xx.type)("string"), Te = (0, xx.type)("string"), Pe = (0, xx.type)("string"), Ae = (0, xx.type)("uint8"), Ne = class extends nx {
        constructor() {
          super(...arguments), (0, Vx.e)(this, "variation", Xe, this), (0, Vx.e)(this, "ownerDbId", Me, this), (0, Vx.e)(this, "metaInfo", ze, this), (0, Vx.e)(this, "aiState", Ge, this)
        }
      }, Xe = (0, ex.d)(Ne.prototype, "variation", [Fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Me = (0, ex.d)(Ne.prototype, "ownerDbId", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), ze = (0, ex.d)(Ne.prototype, "metaInfo", [Pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Ge = (0, ex.d)(Ne.prototype, "aiState", [Ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ne);
    We = (0, xx.type)("string"), Re = (0, xx.type)("string"), ge = (0, xx.type)("string"), De = (0, xx.type)("string"), ie = class extends Qx {
      constructor() {
        super(...arguments), (0, Vx.e)(this, "meshKind", Ce, this), (0, Vx.e)(this, "meshOpts", ae, this), (0, Vx.e)(this, "pose", oe, this), (0, Vx.e)(this, "leaderboardTop", ce, this)
      }
    }, Ce = (0, ex.d)(ie.prototype, "meshKind", [We], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ae = (0, ex.d)(ie.prototype, "meshOpts", [Re], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), oe = (0, ex.d)(ie.prototype, "pose", [ge], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ce = (0, ex.d)(ie.prototype, "leaderboardTop", [De], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Zx(VV) {
      return Object.keys(xx.Metadata.getFields(VV))
    }
    const vx = Zx(wx);
    for (const VJ of Jx.p)
      if (!vx.includes(VJ)) throw new Error(`Mob Schema is missing a networked property: "${VJ}"`);
    const rx = Zx((he = (0, xx.type)("string"), le = (0, xx.type)("float32"), Le = (0, xx.type)("float32"), fe = (0, xx.type)("float32"), me = (0, xx.type)("float32"), Ke = class extends Qx {
      constructor() {
        super(...arguments), (0, Vx.e)(this, "soundName", He, this), (0, Vx.e)(this, "volume", ue, this), (0, Vx.e)(this, "refDistance", se, this), (0, Vx.e)(this, "maxHearDist", Se, this), (0, Vx.e)(this, "rate", Ie, this)
      }
    }, He = (0, ex.d)(Ke.prototype, "soundName", [he], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), ue = (0, ex.d)(Ke.prototype, "volume", [le], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), se = (0, ex.d)(Ke.prototype, "refDistance", [Le], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Ux.h
      }
    }), Se = (0, ex.d)(Ke.prototype, "maxHearDist", [fe], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Ux.c
      }
    }), Ie = (0, ex.d)(Ke.prototype, "rate", [me], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Ke));
    for (const VJ of Yx.j)
      if (!rx.includes(VJ)) throw new Error(`AudioEntity Schema is missing a replicated property: "${VJ}"`);
    var kx = xV(39588),
      bx = xV(1269),
      Ex = xV(657),
      Bx = xV(39343),
      jx = xV(4642),
      qx = xV(375),
      tx = xV(38387),
      Fx = xV(39243),
      Tx = xV(2385),
      Px = xV(38368),
      Ax = xV(39621),
      Nx = xV(38750),
      Xx = xV(380),
      Mx = xV.n(Xx),
      zx = xV(39090),
      Gx = xV(38254),
      Wx = xV(39227),
      Rx = xV(39260);
    class gx {
      constructor(VV, eV) {
        this.bloxd = VV, this.eId = eV, this.iv = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.ik = !1, this.iv = VV.iv
      }
      initClient(VV) {
        var eV, xV, JV;
        this.colyseusEntity = VV, this.meshKind = VV.meshKind, this.meshOpts = VV.meshOpts, this.leaderboardTop = VV.leaderboardTop, this.iv.sF.add([VV.x, VV.y, VV.z], 1, 1, null, null, !1, !1, this.eId), this.iv.sF.WC(this.eId, "smoothToServerPos");
        const YV = "Person" === this.meshKind;
        this.iv.sF.WC(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...YV ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: YV ? [{
            nodeName: "HeadMesh",
            softTolerance: Ax.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = de.h.subscribe(`otherEntitySettings|${this.eId}|canSee`, (VV => {
          this.updateHidingMeshMgr()
        }));
        const UV = () => {
          const VV = this.iv.sF.hxV(this.eId);
          if (!VV) return;
          const eV = (0, Nx.h)(this.eId);
          if ("number" === typeof VV.pC) {
            var xV, JV, YV, UV;
            const yV = null === (xV = (0, Tx.h)("head", null === (YV = this.getSpec()) || void 0 === YV || null === (UV = YV.opts.textures) || void 0 === UV ? void 0 : UV.head)) || void 0 === xV || null === (JV = xV.personModel) || void 0 === JV ? void 0 : JV.fullBody;
            return this.iv.gZ.YC.setPickable(VV.pC, eV && !yV), void(0, Gx.updatePersonAttachmentPickability)(this.iv, this.eId, eV)
          }
          const yV = VV.mesh;
          if (yV)
            for (const pV of [yV, ...yV.getChildMeshes(!1)]) "QE" in pV && !pV.name.startsWith("Cape|") && (pV.QE = eV)
        };
        this.canAttackSub = de.h.subscribe(`otherEntitySettings|${this.eId}|canAttack`, UV), this.interactableSub = de.h.subscribe(`otherEntitySettings|${this.eId}|interactable`, UV), this.overlayColourSub = de.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (VV => {
          this.updateOverlayColour(VV)
        })), this.opacitySub = de.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (VV => {
          this.updateOpacity(VV)
        })), this.zIndexSub = de.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (VV => {
          this.updateZIndex(VV)
        }));
        const yV = this.iv.YL[this.iv.bD][this.eId];
        this.updateOverlayColour(null !== (eV = null === yV || void 0 === yV ? void 0 : yV.overlayColour) && void 0 !== eV ? eV : null), this.updateOpacity(null !== (xV = null === yV || void 0 === yV ? void 0 : yV.opacity) && void 0 !== xV ? xV : 1), this.updateZIndex(null !== (JV = null === yV || void 0 === yV ? void 0 : yV.zIndex) && void 0 !== JV ? JV : 0), this.multilineTextBoxSub = (0, Px.w)(this.iv, this.eId)
      }
      onChangeClient(VV, eV) {
        if ("xRotation" === VV || "yRotation" === VV || "zRotation" === VV)(0, Px.A)(this.iv, this.eId, VV, eV);
        else if ("pose" === VV) {
          const VV = this.iv.sF.HxV(this.eId);
          VV && (VV.pose = eV || "standing")
        } else "meshKind" === VV || "meshOpts" === VV ? (this[VV] = eV, this.queueMeshRebuild()) : "name" === VV && "" !== eV ? this.updateHidingMeshMgr() : "leaderboardTop" === VV && (this.leaderboardTop = eV, de.h.QZ(`leaderboardTop|${this.eId}`, eV))
      }
      disposeClient() {
        this.ik = !0, this.iv.sF.deleteEntity(this.eId), de.h.unsubscribe(this.canSeeSub), de.h.unsubscribe(this.canAttackSub), de.h.unsubscribe(this.interactableSub), de.h.unsubscribe(this.overlayColourSub), de.h.unsubscribe(this.opacitySub), de.h.unsubscribe(this.zIndexSub), de.h.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var VV, eV;
        return {
          canSee: null !== (VV = null === (eV = this.iv.YL[this.iv.bD][this.eId]) || void 0 === eV ? void 0 : eV.canSee) && void 0 !== VV && VV,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var VV, eV, xV;
        const {
          iv: JV
        } = this, {
          sF: YV
        } = JV, UV = this.getCurrentHidingMeshMgrState();
        if ((0, qx.Xd)(this.previousHidingMeshManagerState, UV)) return;
        if (this.previousHidingMeshManagerState = UV, YV.gC(this.eId, "hidingMeshManager"), null === (VV = JV.YL[JV.bD][this.eId]) || void 0 === VV || !VV.canSee) return;
        const yV = this.getSpec();
        if (!yV) return;
        const {
          type: pV,
          opts: QV
        } = yV;
        "Person" === pV && (QV.textures = (0, Tx.m)(QV.textures)), QV.eId = this.eId, YV.WC(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var VV, eV, xV;
            "Leaderboard" === pV && (QV.leaderboardTop = this.leaderboardTop);
            const UV = this.bloxd.client.meshCreator.getEntityMesh(pV, QV, (VV => {
              var eV, xV;
              if ("number" === typeof VV) {
                var YV, UV, yV;
                const eV = JV.gZ.YC;
                eV.setEntityId(VV, this.eId);
                const xV = "Person" === pV && (null === (YV = (0, Tx.h)("head", null === (yV = QV.textures) || void 0 === yV ? void 0 : yV.head)) || void 0 === YV || null === (UV = YV.personModel) || void 0 === UV ? void 0 : UV.fullBody);
                return void eV.setPickable(VV, (0, Nx.h)(this.eId) && !xV)
              }
              const nV = VV;
              for (const pV of [nV, ...nV.getChildMeshes(!1)]) void 0 === pV.QE || pV.name.startsWith("Cape|") || (pV.QE = (0, Nx.h)(this.eId), pV.metadata ??= new JV.gZ.nE, pV.metadata.eId = this.eId);
              this.updateOpacity(null !== (eV = null === (xV = JV.YL[JV.bD][this.eId]) || void 0 === xV ? void 0 : xV.opacity) && void 0 !== eV ? eV : 1)
            }));
            if (!UV) return;
            const {
              pC: yV,
              mesh: nV,
              meshOffset: wV,
              nameYOffset: ZV,
              modelLoaded: vV
            } = UV;
            null === vV || void 0 === vV || vV.then((() => {
              var VV;
              (null === (VV = YV.hxV(this.eId)) || void 0 === VV ? void 0 : VV.mesh) === nV && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const rV = null === yV ? null : JV.gZ.YC.rD(yV, 0);
            if (YV.WC(this.eId, YV.names.mesh, {
                pC: yV,
                VYV: rV,
                mesh: nV,
                zQV: !1,
                xYV: "Leaderboard" !== pV,
                offset: wV.slice(),
                MQV: "ParticleEmitter" === pV && QV.followTargetMeshOffset ? VV => {
                  var eV;
                  Mx().copy(VV, wV);
                  const xV = null === (eV = YV.zJV(this.eId)) || void 0 === eV ? void 0 : eV.zk,
                    JV = void 0 === xV ? null : YV.HxV(xV);
                  if (JV) {
                    var UV, yV;
                    const eV = this.bloxd.getEntityHeading(null !== (UV = JV.ridingVehicleEId) && void 0 !== UV ? UV : xV, !0),
                      YV = Math.sin(eV),
                      pV = Math.cos(eV);
                    VV[0] += JV.meshOffset[0] * pV + JV.meshOffset[2] * YV, VV[1] += JV.meshOffset[1], VV[2] += JV.meshOffset[2] * pV - JV.meshOffset[0] * YV;
                    const QV = null !== (yV = JV.ridingVehicleEId) && void 0 !== yV ? yV : null;
                    null !== QV && (0, Rx.b)(this.iv, QV, VV)
                  }
                } : null
              }), "Person" === pV) {
              var kV, bV, EV, BV;
              YV.WC(this.eId, YV.names.meshAttachments, {
                personFullBody: null !== (kV = null === (bV = (0, Tx.h)("head", null === (BV = QV.textures) || void 0 === BV ? void 0 : BV.head)) || void 0 === bV || null === (EV = bV.personModel) || void 0 === EV ? void 0 : EV.fullBody) && void 0 !== kV && kV
              });
              for (const VV of bx.w) {
                var jV, qV, tV;
                const eV = null === (jV = QV.textures) || void 0 === jV ? void 0 : jV[VV];
                eV && null !== (qV = (0, Tx.h)(VV, eV)) && void 0 !== qV && null !== (tV = qV.attachments) && void 0 !== tV && tV.length && Fx.e.Player.meshApi.updatePlayerCosmetic(this.eId, yV, VV, eV)
              }
              YV.WC(this.eId, YV.names.moveState), YV.WC(this.eId, "updateWalkingState", {
                pC: yV,
                VYV: rV,
                walkingLegSwingDuration: Ax.t
              }), YV.WC(this.eId, "humanoidMesh", {
                pC: yV,
                VYV: rV,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), YV.WC(this.eId, "animator", {
                pC: yV,
                VYV: rV,
                modelLifeformType: "Player"
              }), Wx.d.hasAnimation("Person") && YV.WC(this.eId, "rigAnimation", {
                target: "Person",
                pC: yV
              }), YV.HxV(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === pV && null !== yV) {
              YV.WC(this.eId, "animator", {
                pC: yV,
                VYV: rV,
                modelLifeformType: null
              });
              const VV = (0, Bx.q)(QV.blockName);
              null !== VV && YV.WC(this.eId, "rigAnimation", {
                target: VV,
                pC: yV
              })
            }
            YV.dQV(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: ZV
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === QV.autoRotate && (YV.gC(this.eId, "meshRotation"), YV.WC(this.eId, "autoRotate"));
            const {
              lineToEId: FV
            } = QV;
            (0, Ex.J)(FV) || YV.WC(this.eId, "lineToEntity", {
              lineToEId: FV
            });
            const TV = JV.YL[JV.bD][this.eId];
            this.updateOverlayColour(null !== (VV = null === TV || void 0 === TV ? void 0 : TV.overlayColour) && void 0 !== VV ? VV : null), this.updateOpacity(null !== (eV = null === TV || void 0 === TV ? void 0 : TV.opacity) && void 0 !== eV ? eV : 1), this.updateZIndex(null !== (xV = null === TV || void 0 === TV ? void 0 : TV.zIndex) && void 0 !== xV ? xV : 0)
          },
          removeMeshComponent: () => {
            "Person" !== pV && "BloxdBlock" !== pV || YV.gC(this.eId, "rigAnimation"), YV.gC(this.eId, YV.names.mesh), YV.wxV(this.eId, YV.names.meshAttachments) && YV.gC(this.eId, YV.names.meshAttachments), YV.gC(this.eId, "entityName"), YV.gC(this.eId, "autoRotate"), YV.gC(this.eId, "lineToEntity"), "Person" === pV ? (YV.gC(this.eId, YV.names.moveState), YV.gC(this.eId, "updateWalkingState"), YV.gC(this.eId, "humanoidMesh"), YV.gC(this.eId, "animator")) : "BloxdBlock" === pV && YV.gC(this.eId, "animator")
          },
          hideDist: null !== (eV = QV.hideDist) && void 0 !== eV ? eV : 80,
          movingHideDist: null !== (xV = QV.hideDist) && void 0 !== xV ? xV : 120,
          displayOutsideLoadedChunk: QV.hideDist > 100,
          immediatelyUpdate: !0,
          Ew: "BloxdBlock" === pV ? QV.blockName : pV
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.ik || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, jx.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(VV) {
        var eV, xV;
        if ("Person" !== this.meshKind) return;
        let JV = new tx.c(0, 0, 0, 0);
        if (null !== VV) {
          const eV = (0, qx.V)(VV);
          JV = new tx.c(eV[0] / 255, eV[1] / 255, eV[2] / 255, .5)
        }
        const YV = null !== (eV = null === (xV = this.iv.sF.hxV(this.eId)) || void 0 === xV ? void 0 : xV.pC) && void 0 !== eV ? eV : null;
        null !== YV && Fx.e.Player.meshApi.updateMeshOverlayColour(YV, JV)
      }
      updateZIndex(VV) {
        var eV;
        if ("Person" !== this.meshKind) return;
        const xV = null === (eV = this.iv.sF.hxV(this.eId)) || void 0 === eV ? void 0 : eV.pC;
        "number" === typeof xV && this.iv.gZ.YC.setRenderingGroupId(xV, VV)
      }
      updateOpacity(VV) {
        const eV = this.iv.sF.hxV(this.eId);
        eV && ("number" !== typeof eV.pC ? eV.mesh && "ParticleEmitter" !== this.meshKind && (0, zx.e)(eV.mesh, VV) : Fx.e.Player.meshApi.updateMeshOpacity(eV.pC, VV))
      }
    }
    var Dx = xV(40167);
    class ix {
      constructor(VV, eV) {
        this.eId = eV, this.iv = void 0, this.schema = void 0, this.iv = VV.iv
      }
      initClient(VV) {
        this.schema = VV, this.iv.sF.add([VV.x, VV.y, VV.z], .1, .1, null, null, !1, !1, this.eId), this.iv.sF.WC(this.eId, "smoothToServerPos"), Dx.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(VV) {
        Yx.j.includes(VV) && Dx.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Dx.e.remove(this.eId), this.iv.sF.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: VV,
          volume: eV,
          refDistance: xV,
          maxHearDist: JV,
          rate: YV
        } = this.schema;
        return {
          soundName: VV,
          volume: eV,
          refDistance: xV,
          maxHearDist: JV,
          rate: YV
        }
      }
    }
    var Cx = xV(4098),
      ax = xV(37943),
      ox = xV(7024),
      cx = xV(38938),
      hx = xV(3093),
      lx = xV(39289),
      Lx = xV(9683),
      fx = xV(39630),
      mx = xV(38901),
      Kx = xV(3268);
    class Hx {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.sJV = VV, this.iv = eV, this.setupBudgetMs = xV, this.now = JV, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.ik = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Iq = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const VV of this.promotedSetups) {
            this.promotedSetups.delete(VV);
            const eV = this.queuedSetups.get(VV);
            eV && (this.queuedSetups.delete(VV), this.timedSetup(eV, VV))
          }
        }, this.createStateCallbacks = (0, Lx.getStateCallbacks)(VV), this.roomStateCallbacks = this.createStateCallbacks(VV.state), this.roomState = VV.state, this.setupBudgetLeftMs = xV, this.lastRefillMs = JV()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.sJV.onStateChange(this.setUpPromoted), this.iv.on("beforeInputs", this.onFrame), this.iv.on("iZ", this.Iq)
      }
      setUpQueuedEntities(VV) {
        var eV;
        if ((null === (eV = (0, hx.b)().client.getMsgHandler()) || void 0 === eV ? void 0 : eV.sJV) !== this.sJV) return this.iv.off("beforeInputs", this.onFrame), this.iv.off("iZ", this.Iq), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (VV && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (Mx().copy(ux, this.iv.sF.YF(this.iv.bD)); this.setupBudgetLeftMs > 0;) {
            const VV = this.nearestQueued(ux);
            if (null === VV) return;
            this.setUpIfQueued(VV), this.setUpPromoted()
          }
      }
      nearestQueued(VV) {
        let eV = null,
          xV = 1 / 0;
        return this.queuedSetups.forEach(((JV, YV) => {
          const UV = function(VV, eV) {
            return (eV.x - VV[0]) ** 2 + (eV.y - VV[1]) ** 2 + (eV.z - VV[2]) ** 2
          }(VV, JV);
          (null === eV || UV < xV) && (eV = YV, xV = UV)
        })), eV
      }
      setUpOrQueue(VV, eV) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(VV, eV) ? this.timedSetup(VV, eV) : this.queuedSetups.set(eV, VV)
      }
      mustSetUpNow(VV, eV) {
        const xV = this.iv.vxV;
        if (eV === xV) return !0;
        const JV = this.roomState.entities.get(xV);
        return !(!JV || JV.ridingVehicleEId !== eV && JV.followingEId !== eV) || (sx(VV.type) === kx.d || (0, hx.b)().getFollowingEntities(eV).length > 0)
      }
      setUpIfQueued(VV) {
        const eV = this.queuedSetups.get(VV);
        eV && (this.queuedSetups.delete(VV), this.timedSetup(eV, VV))
      }
      promoteIfQueued(VV) {
        null !== VV && this.queuedSetups.has(VV) && this.promotedSetups.add(VV)
      }
      timedSetup(VV, eV) {
        const xV = this.now();
        this.setupEntity(VV, eV), this.setupBudgetLeftMs -= this.now() - xV
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.uF(((VV, eV) => {
          this.iv.vxV ? this.setUpOrQueue(VV, eV) : this.deferEntitySetupUntilInitInfo(VV, eV)
        })), this.roomStateCallbacks.entities.bR(((VV, eV) => {
          const xV = this.deferredSetups.get(eV);
          xV && (de.h.unsubscribe(xV), this.deferredSetups.delete(eV)), this.queuedSetups.delete(eV), this.detach(eV), (0, hx.b)().client.disposeEntity(eV)
        }))
      }
      deferEntitySetupUntilInitInfo(VV, eV) {
        const xV = de.h.lB("initInfoReceived", (() => {
          this.deferredSetups.delete(eV), this.setUpOrQueue(VV, eV)
        }));
        this.deferredSetups.set(eV, xV), (0, Cx.onGameResetOnce)((() => {
          this.deferredSetups.get(eV) === xV && (de.h.unsubscribe(xV), this.deferredSetups.delete(eV)), (0, hx.b)().updatePositionAndPhysics(this.iv.bD, {
            type: ox.q.DEFAULT,
            tier: null
          }, !0), (0, hx.b)().takeHeldPlayerBodySize(this.iv.bD);
          const VV = this.iv.sF.XxV(this.iv.bD);
          VV && (VV.movementType = ox.o.NORMAL)
        }))
      }
      setupEntity(VV, eV) {
        const xV = eV === this.iv.vxV;
        if (xV)(0, hx.b)().client.Y_(this.iv.bD, null, null);
        else {
          const {
            type: xV
          } = VV, JV = sx(xV);
          if (void 0 === JV) return void
          function(VV, eV) {
            const xV = String(VV);
            if (Sx.has(xV)) return;
            Sx.add(xV);
            const JV = xV.length > 80 ? `${xV.slice(0,80)}...` : xV,
              YV = `No client handler for entity type ${JSON.stringify(JV)}, so entity ${eV} is not set up`;
            console.warn(YV), (0, Kx.reportClientError)("uncaught", YV, "unknown_entity_type")
          }(xV, eV);
          (0, hx.b)().client.Y_(eV, VV, new JV((0, hx.b)(), eV, xV))
        }
        const JV = this.createStateCallbacks(VV);
        if (xV) return this.setupMapSchemaCallbacks(eV, VV, JV, "armour"), this.setupScalarField(eV, VV, JV, "scale"), this.setupScalarField(eV, VV, JV, "ridingVehicleEId"), this.setupScalarField(eV, VV, JV, "followingEId"), this.setupScalarField(eV, VV, JV, "followingOffset"), void this.setupScalarField(eV, VV, JV, "shouldMatchFollowingEntityRotation");
        for (const YV of Zx(VV.constructor)) VV[YV] instanceof xx.MapSchema ? this.setupMapSchemaCallbacks(eV, VV, JV, YV) : this.setupScalarField(eV, VV, JV, YV)
      }
      setupMapSchemaCallbacks(VV, eV, xV, JV) {
        const YV = xV[JV],
          UV = new Map;
        YV.uF(((xV, YV) => {
          if (this.onEntityFieldChange(VV, eV, JV, {
              key: YV,
              value: xV
            }), !(xV instanceof xx.Schema)) return;
          const yV = this.createStateCallbacks(xV),
            pV = [];
          for (const UV of Zx(xV.constructor)) pV.push(this.listenForFutureChanges(yV, UV, (() => {
            this.onEntityFieldChange(VV, eV, JV, {
              key: YV,
              value: xV
            })
          })));
          UV.set(YV, (() => {
            for (const VV of pV) VV()
          }))
        })), YV.bR(((xV, YV) => {
          var yV;
          null === (yV = UV.get(YV)) || void 0 === yV || yV(), UV.delete(YV), this.onEntityFieldChange(VV, eV, JV, {
            key: YV,
            value: null
          })
        })), this.addDetacher(VV, (() => {
          for (const VV of UV.values()) VV();
          UV.clear()
        }))
      }
      setupScalarField(VV, eV, xV, JV) {
        this.onEntityFieldChange(VV, eV, JV, eV[JV]);
        const YV = this.listenForFutureChanges(xV, JV, (xV => {
          this.onEntityFieldChange(VV, eV, JV, xV)
        }));
        this.addDetacher(VV, YV)
      }
      addDetacher(VV, eV) {
        let xV = this.detachers.get(VV);
        xV || (xV = [], this.detachers.set(VV, xV)), xV.push(eV)
      }
      detach(VV) {
        for (const xV of null !== (eV = this.detachers.get(VV)) && void 0 !== eV ? eV : []) {
          var eV;
          xV()
        }
        this.detachers.delete(VV)
      }
      listenForFutureChanges(VV, eV, xV) {
        return VV.listen(eV, xV, !1)
      }
      onEntityFieldChange(VV, eV, xV, JV) {
        switch (xV) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(JV);
            const eV = this.iv.sF.HxV((0, ax.c)(VV));
            eV && (eV.ridingVehicleEId = JV);
            break
          }
          case "armour":
            this.handleArmourChange(VV, JV);
            break;
          case "followingEId":
            this.promoteIfQueued(JV), this.handleFollowingEIdChange(VV, eV, JV);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(VV, xV, JV);
            break;
          case "scale":
            this.handleScaleChange(VV, JV);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(VV, JV);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(VV, JV);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(VV, JV);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(VV, xV, JV)
        }(0, hx.b)().client.updateEntityField(VV, xV, JV)
      }
      handleArmourChange(VV, eV) {
        var xV, JV;
        const {
          key: YV,
          value: UV
        } = eV;
        (0, Fx.v)(VV, YV, null !== (xV = null === UV || void 0 === UV ? void 0 : UV.itemName) && void 0 !== xV ? xV : null, null !== (JV = null === UV || void 0 === UV ? void 0 : UV.enchantmentTier) && void 0 !== JV ? JV : null)
      }
      handleFollowingEIdChange(VV, eV, xV) {
        const JV = (0, ax.c)(VV),
          YV = JV === this.iv.bD;
        if (this.iv.sF.gC(JV, this.iv.sF.names.HA), xV) this.iv.sF.gC(JV, "smoothToServerPos"), this.iv.sF.WC(JV, this.iv.sF.names.HA, {
          zk: (0, ax.c)(xV),
          offset: Array.from(eV.followingOffset),
          GJV: eV.shouldMatchFollowingEntityRotation,
          DJV: !0,
          iJV: (VV, JV) => {
            if (Mx().copy(VV, eV.followingOffset), eV.ridingVehicleEId === xV) {
              const eV = (0, ax.c)(xV),
                YV = (0, hx.b)().getEntityHeading(eV, JV);
              Mx().pk(VV, VV, Mx().ZERO, YV)
            }
          }
        });
        else if (!YV) {
          this.iv.sF.wxV(JV, "smoothToServerPos") || this.iv.sF.WC(JV, "smoothToServerPos");
          const VV = this.iv.sF.getState(JV, "smoothToServerPos"),
            eV = this.iv.sF.U_(JV).position;
          (0, mx.setServerPosition)(VV, eV[0], eV[1], eV[2])
        }
      }
      handleRotationChange(VV, eV, xV) {
        const JV = "xRotation" === eV ? 0 : "yRotation" === eV ? 1 : 2;
        for (const YV of (0, hx.b)().getFollowingEntities(VV)) {
          const VV = this.iv.sF.getState(YV, "meshRotation"),
            eV = this.iv.sF.zJV(YV);
          VV && eV.GJV && (VV.serverSetRotation[JV] = xV)
        }
      }
      handleScaleChange(VV, eV) {
        const xV = (0, ax.c)(VV);
        if (de.h.QZ(`entityScale|${xV}`, eV), xV === this.iv.bD) {
          var JV;
          (0, hx.b)().removeFromEyeHeightCache(xV);
          const VV = this.iv.sF.XxV(this.iv.bD),
            eV = null !== (JV = null === VV || void 0 === VV ? void 0 : VV.physicsState) && void 0 !== JV ? JV : {
              type: ox.q.DEFAULT,
              tier: null
            };
          return void(0, hx.b)().updatePositionAndPhysics(this.iv.bD, eV, !1)
        }
        const YV = (0, hx.b)().getLifeformType(xV);
        if (null === YV) return;
        const {
          physicsBodyWidth: UV,
          physicsBodyHeight: yV
        } = (0, fx.e)(eV, YV);
        this.iv.sF.XJV(xV, UV, yV, UV)
      }
      handleBaseRenderHeadingChange(VV, eV) {
        const xV = this.iv.sF.getState(VV, "meshRotation");
        xV && (xV.baseRenderRotation[1] = eV);
        for (const JV of (0, hx.b)().getFollowingEntities(VV)) {
          const VV = this.iv.sF.getState(JV, "meshRotation"),
            xV = this.iv.sF.zJV(JV);
          VV && xV.GJV && (VV.baseRenderRotation[1] = eV)
        }
      }
      handleFollowingOffsetChange(VV, eV) {
        const xV = this.iv.sF.zJV((0, ax.c)(VV));
        if (xV && xV.offset) {
          const VV = eV ? Array.from(eV) : Mx().ZERO;
          xV.offset[0] = VV[0], xV.offset[1] = VV[1], xV.offset[2] = VV[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(VV, eV) {
        const xV = this.iv.sF.zJV((0, ax.c)(VV));
        xV && (xV.GJV = null === eV || void 0 === eV || eV)
      }
      handlePositionChange(VV, eV, xV) {
        if (this.iv.sF.wxV(VV, "smoothToServerPos")) {
          const JV = this.iv.sF.getState(VV, "smoothToServerPos");
          (0, mx.setServerPositionAxis)(JV, Ix[eV], xV)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.uF(((VV, eV) => {
          this.allItems[eV] = VV, (0, cx.n)(this.iv, eV, [VV.x, VV.y, VV.z], VV.id, {
            amount: VV.amount,
            attributes: JSON.parse(VV.attributes),
            Xx: (0, Oe.c)(this.iv).cantPickUpItem(eV),
            size: VV.size,
            predictedAt: (0, hx.b)().client.itemDropPrediction.onServerItemAdded(eV)
          });
          const xV = this.createStateCallbacks(VV);
          for (const JV of Zx(yx)) this.onItemFieldChange(eV, JV, VV[JV]), this.addDetacher(eV, this.listenForFutureChanges(xV, JV, (VV => {
            this.onItemFieldChange(eV, JV, VV)
          })))
        })), this.roomStateCallbacks.items.bR(((VV, eV) => {
          delete this.allItems[eV], this.detach(eV), (0, hx.b)().client.itemDropPrediction.onServerItemRemoved(eV), this.iv.sF.wxV(eV, this.iv.sF.names.itemState) && this.iv.sF.deleteEntity(eV), (0, Oe.c)(this.iv).disposeEntity(eV)
        }))
      }
      onItemFieldChange(VV, eV, xV) {
        if (eV in Ix) {
          if (this.iv.sF.wxV(VV, "itemState")) {
            const JV = this.iv.sF.getState(VV, "smoothToServerPos");
            (0, mx.setServerPositionAxis)(JV, Ix[eV], xV), (0, hx.b)().client.itemDropPrediction.onServerItemMoved(VV)
          }
          return
        }
        if (!this.iv.sF.wxV(VV, "itemState")) return;
        const JV = this.iv.sF.getState(VV, "itemState");
        "amount" === eV && xV !== JV.amount && (JV.creationTime = Date.now()), JV[eV] = "attributes" === eV ? JSON.parse(xV) : xV
      }
      dispose() {
        if (!this.ik) {
          this.ik = !0, this.iv.off("beforeInputs", this.onFrame), this.iv.off("iZ", this.Iq), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const VV of this.deferredSetups.values()) de.h.unsubscribe(VV);
          this.deferredSetups.clear(), this.iv.sF.gC(this.iv.bD, this.iv.sF.names.HA);
          for (const VV in this.allItems) this.iv.sF.deleteEntity(VV), delete this.allItems[VV];
          for (const VV of [...this.detachers.keys()]) this.detach(VV);
          (0, Oe.c)(this.iv).clear();
          for (const VV of (0, hx.b)().client.iterateEntityIds())(0, hx.b)().client.disposeEntity(VV)
        }
      }
    }
    const ux = [0, 0, 0];

    function sx(VV) {
      if ("string" !== typeof VV) return;
      const eV = VV.indexOf("|"),
        xV = -1 === eV ? VV : VV.slice(0, eV),
        JV = Ox();
      return Object.hasOwn(JV, xV) ? JV[xV] : void 0
    }
    const Sx = new Set;
    const Ix = {
      x: 0,
      y: 1,
      z: 2
    };
    let dx = null;

    function Ox() {
      return null !== dx || (dx = {
        ...Object.fromEntries(Yx.m.map((VV => {
          const {
            Ew: eV
          } = (0, lx.b)(VV);
          return [VV, eV]
        }))),
        Pebble: kx.d,
        Snowball: kx.d,
        "Snowball Launcher": kx.d,
        "Reinforced Pebble": kx.d,
        Bullet: kx.d,
        "Reinforced Ball": kx.d,
        Ball: kx.d,
        Mango: kx.d,
        "Moonstone Orb": kx.d,
        ...Object.fromEntries(Jx.s.map((VV => [(0, qx.Vb)(VV), kx.d]))),
        Arrow: kx.d,
        "Arrow of Speed": kx.d,
        "Arrow of Poison": kx.d,
        "Arrow of Slowness": kx.d,
        "Arrow of Weakness": kx.d,
        "Arrow of Knockback": kx.d,
        "Arrow of Strength": kx.d,
        "Arrow of Invisibility": kx.d,
        "Arrow of Jumping": kx.d,
        "Arrow of Defense": kx.d,
        "Arrow of Instant Healing": kx.d,
        "Arrow of Instant Damage": kx.d,
        "Arrow of Regeneration": kx.d,
        "Arrow of Haste": kx.d,
        "Arrow of Shield": kx.d,
        "Arrow of Double Jump": kx.d,
        "Arrow of Heat Resistance": kx.d,
        "Arrow of X-Ray Vision": kx.d,
        "Arrow of Mining Yield": kx.d,
        "Arrow of Brain Rot": kx.d,
        "Arrow of Milk": kx.d,
        Fireball: kx.d,
        "Bouncy Bomb": kx.d,
        RPG: kx.d,
        "Obby RPG": kx.d,
        "Super RPG": kx.d,
        "Grenade Launcher": kx.d,
        Iceball: kx.d,
        Coconut: kx.d,
        "Splash Speed Potion": kx.d,
        "Splash Defense Potion": kx.d,
        "Splash Strength Potion": kx.d,
        "Splash Invisibility Potion": kx.d,
        "Splash Jump Potion": kx.d,
        "Splash Knockback Potion": kx.d,
        "Splash Poison Potion": kx.d,
        "Splash Speed Potion II": kx.d,
        "Splash Defense Potion II": kx.d,
        "Splash Strength Potion II": kx.d,
        "Splash Jump Potion II": kx.d,
        "Splash Knockback Potion II": kx.d,
        "Splash Poison Potion II": kx.d,
        "Splash Slowness Potion": kx.d,
        "Splash Slowness Potion II": kx.d,
        "Splash Weakness Potion": kx.d,
        "Splash Weakness Potion II": kx.d,
        "Splash Milk Potion": kx.d,
        "Splash Instant Damage Potion": kx.d,
        "Splash Instant Damage Potion II": kx.d,
        "Splash Instant Healing Potion": kx.d,
        "Splash Instant Healing Potion II": kx.d,
        "Splash Regeneration Potion": kx.d,
        "Splash Regeneration Potion II": kx.d,
        "Splash Haste Potion": kx.d,
        "Splash Haste Potion II": kx.d,
        "Splash Shield Potion": kx.d,
        "Splash Shield Potion II": kx.d,
        "Splash Double Jump Potion": kx.d,
        "Splash Heat Resistance Potion": kx.d,
        "Splash X-Ray Vision Potion": kx.d,
        "Splash Mining Yield Potion": kx.d,
        "Splash Mining Yield Potion II": kx.d,
        "Splash Brain Rot Potion": kx.d,
        "Yellow Paintball Gun": kx.d,
        "White Paintball Gun": kx.d,
        "Red Paintball Gun": kx.d,
        "Purple Paintball Gun": kx.d,
        "Pink Paintball Gun": kx.d,
        "Orange Paintball Gun": kx.d,
        "Magenta Paintball Gun": kx.d,
        "Lime Paintball Gun": kx.d,
        "Light Gray Paintball Gun": kx.d,
        "Light Blue Paintball Gun": kx.d,
        "Green Paintball Gun": kx.d,
        "Gray Paintball Gun": kx.d,
        "Cyan Paintball Gun": kx.d,
        "Brown Paintball Gun": kx.d,
        "Blue Paintball Gun": kx.d,
        "Black Paintball Gun": kx.d,
        "Yellow Heavy Paintball Gun": kx.d,
        "White Heavy Paintball Gun": kx.d,
        "Red Heavy Paintball Gun": kx.d,
        "Purple Heavy Paintball Gun": kx.d,
        "Pink Heavy Paintball Gun": kx.d,
        "Orange Heavy Paintball Gun": kx.d,
        "Magenta Heavy Paintball Gun": kx.d,
        "Lime Heavy Paintball Gun": kx.d,
        "Light Gray Heavy Paintball Gun": kx.d,
        "Light Blue Heavy Paintball Gun": kx.d,
        "Green Heavy Paintball Gun": kx.d,
        "Gray Heavy Paintball Gun": kx.d,
        "Cyan Heavy Paintball Gun": kx.d,
        "Brown Heavy Paintball Gun": kx.d,
        "Blue Heavy Paintball Gun": kx.d,
        "Black Heavy Paintball Gun": kx.d,
        "Toxin Ball": kx.d,
        "Splash Aura XP Potion": kx.d,
        "Splash Aura XP Potion II": kx.d,
        "Arrow of Aura XP": kx.d,
        Firecracker: kx.d,
        "Rainbow Firecracker": kx.d,
        "White Firecracker": kx.d,
        "Orange Firecracker": kx.d,
        "Magenta Firecracker": kx.d,
        "Light Blue Firecracker": kx.d,
        "Yellow Firecracker": kx.d,
        "Lime Firecracker": kx.d,
        "Pink Firecracker": kx.d,
        "Gray Firecracker": kx.d,
        "Light Gray Firecracker": kx.d,
        "Cyan Firecracker": kx.d,
        "Purple Firecracker": kx.d,
        "Blue Firecracker": kx.d,
        "Brown Firecracker": kx.d,
        "Green Firecracker": kx.d,
        "Red Firecracker": kx.d,
        "Black Firecracker": kx.d,
        "Firecracker Pebble": kx.d,
        "Rainbow Firecracker Pebble": kx.d,
        "White Firecracker Pebble": kx.d,
        "Orange Firecracker Pebble": kx.d,
        "Magenta Firecracker Pebble": kx.d,
        "Light Blue Firecracker Pebble": kx.d,
        "Yellow Firecracker Pebble": kx.d,
        "Lime Firecracker Pebble": kx.d,
        "Pink Firecracker Pebble": kx.d,
        "Gray Firecracker Pebble": kx.d,
        "Light Gray Firecracker Pebble": kx.d,
        "Cyan Firecracker Pebble": kx.d,
        "Purple Firecracker Pebble": kx.d,
        "Blue Firecracker Pebble": kx.d,
        "Brown Firecracker Pebble": kx.d,
        "Green Firecracker Pebble": kx.d,
        "Red Firecracker Pebble": kx.d,
        "Black Firecracker Pebble": kx.d,
        "Blinding Pebble": kx.d,
        Poop: kx.d,
        "Wood Boomerang": kx.d,
        "Stone Boomerang": kx.d,
        "Iron Boomerang": kx.d,
        "Gold Boomerang": kx.d,
        "Diamond Boomerang": kx.d,
        "Amethite Boomerang": kx.d,
        "Magmasteel Boomerang": kx.d,
        "Rubellite Boomerang": kx.d,
        "Serpentite Boomerang": kx.d,
        "Moonstone Boomerang": kx.d,
        "67 Base Projectile": kx.d,
        "67 Boosted Projectile": kx.d,
        "Capitano Grenade": kx.d,
        "Scatter Pellet": kx.d,
        "Lucky Bomb": kx.d,
        "Unlucky Bomb": kx.d,
        "Swap Orb": kx.d,
        Mesh: gx,
        AudioEntity: ix
      }), dx
    }
  },
  40215: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      e: () => yV
    });
    var JV = xV(657),
      YV = xV(38875);
    const UV = 4e4;
    class yV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = VV, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(VV, eV, xV) {
        const UV = (0, JV.V)(VV),
          yV = (0, JV.V)(eV),
          pV = (0, JV.V)(xV),
          QV = this.now();
        if (UV !== this.lastChunkX || yV !== this.lastChunkY || pV !== this.lastChunkZ) {
          this.lastChunkX = UV, this.lastChunkY = yV, this.lastChunkZ = pV, this.lastChunkId = (0, YV.d)(UV, yV, pV), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, QV);
          for (const [VV, eV] of this.editedAt) {
            if (eV >= QV - 3e5) break;
            this.editedAt.delete(VV)
          }
        } else this.editedAt.set(this.lastChunkId, QV)
      }
      chunksEditedSince(VV) {
        const eV = [];
        for (const [xV, JV] of this.editedAt) JV >= VV && eV.push(xV);
        return eV
      }
    }
  },
  40273: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => re,
      e: () => le,
      i: () => Re,
      j: () => Le
    });
    var JV = xV(4098),
      YV = xV(9396),
      UV = xV(37840),
      yV = xV(1530),
      pV = xV(37925),
      QV = xV(40167),
      nV = xV(40154),
      wV = xV(4163),
      ZV = xV(39020),
      vV = xV(40276),
      rV = xV(1269),
      kV = xV(364),
      bV = xV(32),
      EV = xV(2080),
      BV = xV(99),
      jV = xV(40),
      qV = xV(2116),
      tV = xV(2014),
      FV = xV(3319);
    class TV {
      constructor(VV) {
        this.storeForMs = VV, this.clicks = new FV.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const VV = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < VV;) this.clicks.dequeue()
      }
      getNumClicksInMs(VV) {
        let eV = 0;
        return this.clicks.forEach((xV => {
          xV > Date.now() - VV && eV++
        })), eV
      }
      getMaxClickSeparationInMs(VV) {
        if (0 === this.clicks.size) return this.storeForMs;
        let eV = 0,
          xV = Date.now() - VV;
        this.clicks.forEach((JV => {
          JV < Date.now() - VV || (eV = Math.max(eV, Math.abs(JV - xV)), xV = JV)
        }));
        const JV = Math.abs(Date.now() - xV);
        return Math.max(eV, JV)
      }
    }
    class PV {
      constructor(VV) {
        this.storeForMs = VV, this.clickDownDurations = new FV.d
      }
      registerClickDownDuration(VV) {
        this.clickDownDurations.enqueue({
          dur: VV,
          atTime: Date.now()
        });
        const eV = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < eV;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(VV) {
        if (VV > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let eV = 0,
          xV = 0;
        return this.clickDownDurations.forEach((JV => {
          JV.atTime > Date.now() - VV && (eV++, xV = Math.max(xV, JV.dur))
        })), `${eV}:${xV}`
      }
    }
    var AV = xV(35093),
      NV = xV(40285),
      XV = xV(27),
      MV = xV(3093),
      zV = xV(1391),
      GV = xV(2681),
      WV = xV(4918),
      RV = xV(138),
      gV = xV(39296),
      DV = xV(39527),
      iV = xV(657),
      CV = xV(37636),
      aV = xV(10),
      oV = xV(9820),
      cV = xV(1252),
      hV = xV(206),
      lV = xV(40293),
      LV = xV(40298),
      fV = xV(40307),
      mV = xV(39321),
      KV = xV(40315),
      HV = xV(39234),
      uV = xV(3842),
      sV = xV(1725),
      SV = xV(37762),
      IV = xV(3142),
      dV = xV(37517),
      OV = xV(37521),
      Ve = xV(40310),
      ee = xV(39097);
    const xe = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Je() {
      var VV, eV;
      return !(null === (VV = (0, MV.b)().client) || void 0 === VV || null === (eV = VV.freeCameraController) || void 0 === eV || !eV.movesFly())
    }

    function Ye(VV) {
      const eV = VV.on.bind(VV);
      VV.on = (VV, xV) => {
        qV.z.has(VV) ? eV(VV, xV) : eV(VV, (eV => {
          var JV;
          return null !== (JV = (0, MV.b)().client) && void 0 !== JV && JV.isReplayMode() ? function(VV) {
            return VV in xe
          }(VV) && Je() ? xV(eV) : void 0 : xV(eV)
        }))
      }
    }
    const Ue = 5e3,
      ye = 1;
    let pe, Qe = ye,
      ne = 0;
    const we = !0;
    let Ze = we;
    EV.c.subscribe("_ignoreBasicBoards", (VV => {
      Ze = VV
    })), (0, JV.onGameReset)((() => {
      Ze = we
    }));
    let ve = null;
    const re = () => ve;
    let ke, be, Ee;
    var Be, je, qe, te, Fe, Te, Pe, Ae, Ne;
    const Xe = [2, 0, 1, 8, "c", 4, 26, 224, "e", "f", "d", 255, "length", "b", 67, "a", "undefined", void 0, 219, 225, 63, 6, "fromCodePoint", 7, 12, "push", 167, 117, 5, 3, 125, 9, 91, 155, 8191, 88, 13, 14, null, 136, 10, 114, 119, "i", 38, 168, "g", 108, 209, 146, 184, 76, !1, "h", 227, 41, 126, 165, 1023, 65536, 55296, 56320, 34, 206, 164, 144, 127, 128, 156, 31, 15, 18, 68, 85, 157, 192, 235, 84, 205, 213, 115, 250, 102, 211, 64, 212, 228, 240, 47, 113, 175, "-v", 133, 21, 92, ")", "l)", !0, 215, 249, 105, 89, 79, 166, 196, "j", "k", 191, 187, 207, 218, 194, 109, 96, 135, 149];

    function Me(...VV) {
      return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = function(...VV) {
        for (We(VV[Xe[12]] = Xe[2], VV[Xe[5]] = ',qDFWnBmspAk:Xx;M+%lw_g.t`Jz/eCj^r2<[hVORaZ)"vHY3?b1of>(QIdP~KN=U@i]&$E0974S}!*|L{#8TG6cuy5', VV[Xe[0]] = "" + (VV[Xe[1]] || ""), VV[Xe[4]] = VV[Xe[0]].length, VV[Xe[10]] = [], VV[Xe[8]] = Xe[1], VV[Xe[9]] = Xe[1], VV[-Xe[7]] = -Xe[2]), VV[Xe[3]] = Xe[1]; VV[Xe[3]] < VV[Xe[4]]; VV[Xe[3]]++)
          if (VV[-Xe[6]] = VV[Xe[5]].indexOf(VV[Xe[0]][VV[Xe[3]]]), VV[-Xe[6]] !== -Xe[2])
            if (VV[-Xe[7]] < Xe[1]) VV[-Xe[7]] = VV[-Xe[6]];
            else {
              We(VV[-Xe[7]] += VV[-Xe[6]] * Xe[32], VV[Xe[8]] |= VV[-Xe[7]] << VV[Xe[9]], VV[Xe[9]] += (VV[-Xe[7]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
              do {
                We(VV[Xe[10]].push(VV[Xe[8]] & Xe[11]), VV[Xe[8]] >>= Xe[3], VV[Xe[9]] -= Xe[3])
              } while (VV[Xe[9]] > Xe[23]);
              VV[-Xe[7]] = -Xe[2]
            } return VV[-Xe[7]] > -Xe[2] && VV[Xe[10]].push((VV[Xe[8]] | VV[-Xe[7]] << VV[Xe[9]]) & Xe[11]), ze(VV[Xe[10]])
      }(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
    }

    function ze(VV) {
      return typeof te !== Xe[16] && te ? (new te).decode(new Fe(VV)) : typeof Te !== Xe[16] && Te ? Te.from(VV).toString("utf-8") : Ne(VV)
    }

    function Ge() {}

    function We() {
      We = function() {}
    }

    function Re(VV) {
      function eV() {
        return VV.sF.bJV(VV.bD)
      }
      Ye(VV.inputs.down), Ye(VV.inputs.up);
      for (const JV of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const eV = (eV, xV) => {
          var YV, UV;
          if (Je()) {
            var yV;
            const YV = xe[JV];
            var pV, QV;
            if (YV) null === (pV = (0, MV.b)().client) || void 0 === pV || null === (QV = pV.freeCameraController) || void 0 === QV || QV.handlefreeCamKeyPress(YV, eV, xV);
            return void(xV || null !== (yV = (0, MV.b)().client) && void 0 !== yV && yV.isReplayMode() || (VV.sF.tJV()[JV] = !1))
          }
          if (null !== (YV = (0, MV.b)().client) && void 0 !== YV && null !== (UV = YV.freeCameraController) && void 0 !== UV && UV.isKeyPressOverriden(eV)) return;
          VV.sF.tJV()[JV] = xV
        };
        VV.inputs.down.on(JV, (VV => eV(VV, !0))), VV.inputs.up.on(JV, (VV => eV(VV, !1)))
      }
      VV.inputs.down.on("crouch", (() => {
        if (Je()) return;
        if (!VV.mF.canCrouch) return;
        const eV = VV.sF.tJV();
        XV.b.get("clientEscMenuOptions").crouchIsToggle && (eV.crouchToggled = !eV.crouchToggled && !eV.padSneakToggled), eV.padSneakToggled = !1
      }));
      const xV = () => {
        const VV = eV();
        VV.isGun() && VV.inaccuracyCalculator.jump()
      };
      VV.inputs.down.on("jump", (VV => {
        Je() || (xV(), ke(VV))
      }));
      for (const JV of qV.k) VV.inputs.down.on(JV, (VV => {
        var eV, xV;
        null !== (eV = (0, MV.b)().client) && void 0 !== eV && null !== (xV = eV.freeCameraController) && void 0 !== xV && xV.handlefreeCamKeyPress(JV, VV, !0) && (VV.preventDefault(), VV.stopPropagation())
      })), VV.inputs.up.on(JV, (VV => {
        var eV, xV;
        null !== (eV = (0, MV.b)().client) && void 0 !== eV && null !== (xV = eV.freeCameraController) && void 0 !== xV && xV.handlefreeCamKeyPress(JV, VV, !1) && (VV.preventDefault(), VV.stopPropagation())
      }));
      VV.inputs.down.on("recordGame", (() => {
        var VV, eV;
        null === (VV = (0, MV.b)().client) || void 0 === VV || null === (eV = VV.gameRecorder) || void 0 === eV || eV.toggleRecording()
      })), VV.inputs.down.on("recordClip", (() => {
        var VV, eV;
        (0, AV.e)() || null === (VV = (0, MV.b)().client) || void 0 === VV || null === (eV = VV.gameRecorder) || void 0 === eV || eV.saveClip()
      }));
      for (const JV of qV.z) VV.inputs.down.on(JV, (() => {
        var VV;
        if ((0, NV.c)()) return;
        if ("replayViewerOpen" === JV) return void bV.h.QZ("replayViewer|requested", "toggle");
        const eV = null === (VV = (0, MV.b)().client) || void 0 === VV ? void 0 : VV.gameReplayer;
        ((0, AV.e)() || null !== eV && void 0 !== eV && eV.isReplayMode()) && (null === eV || void 0 === eV || eV.handleAction(JV))
      }));
      const yV = new TV(3e4),
        ZV = new PV(4e4);
      let vV = 0;
      const jV = VV => {
          let eV = 0,
            xV = null;
          const JV = eV => null !== eV && eV === xV && (xV = null, VV(), !0);
          return {
            press: () => (eV++, (0, lV.b)() || (JV(xV), xV = eV), eV),
            owns: VV => VV === xV,
            release: JV
          }
        },
        FV = (VV, xV) => {
          xV && Le(rV.b.TouchDownFirePrimary), VV ? oV() : ((0, DV.g)(), eV().wYV()), xV || Le(rV.b.DownFirePrimary), le(!0), yV.click();
          const YV = yV.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            UV = yV.getMaxClickSeparationInMs(1e4) < 20,
            pV = yV.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (YV || UV || pV) {
            let VV;
            if (YV) VV = 30;
            else if (UV) VV = 50;
            else {
              if (!pV) throw new Error("???");
              VV = 70
            }(0, JV.sendColyMessage)(wV.Mj, VV)
          }
        },
        WV = new LV.c,
        RV = jV((() => {
          LV.c.stopRunning();
          const VV = Date.now() - vV;
          ZV.registerClickDownDuration(VV), eV().pYV(), Le(rV.b.UpFirePrimary), le(!1);
          const xV = ZV.clickDownDurationsCheck(4e4);
          (0, JV.sendColyMessage)(wV.ug, xV)
        }));
      let gV = 0;
      VV.inputs.down.on("primary-fire", (function(VV) {
        gV = RV.press(), RV.owns(gV) && (vV = Date.now(), Math.abs(performance.now() - VV.timeStamp) > 5e3 || (FV(VV.altKey, "changedTouches" in VV), ke(VV)))
      })), VV.inputs.up.on("primary-fire", (function(VV) {
        RV.release(gV) && ke(VV, !0)
      }));
      const iV = () => {
          eV().HwV(), Le(rV.b.DownFireSecondary), le(!0), VV.IeV && !VV.IeV.position && (0, nV.g)()
        },
        CV = jV((() => {
          eV().yYV(), Le(rV.b.UpFireSecondary), le(!1)
        }));
      let aV = 0;
      VV.inputs.down.on("alt-fire", (function(VV) {
        aV = CV.press(), CV.owns(aV) && (iV(), ke(VV))
      })), VV.inputs.up.on("alt-fire", (function(VV) {
        CV.release(aV) && ke(VV, !0)
      }));
      const oV = () => eV().SwV();
      VV.inputs.down.on("mid-fire", (() => {
        (0, lV.b)() || oV()
      }));
      const KV = VV => {
          (0, JV.sendColyMessage)(wV.Ah, VV, !0)
        },
        pe = VV => {
          (0, JV.sendColyMessage)(wV.Dh, {
            cn: VV,
            hn: we()
          }, !0)
        };
      for (const JV of ["SpecialAction1", "SpecialAction2"]) VV.inputs.down.on(JV, (() => {
        KV(JV)
      })), VV.inputs.up.on(JV, (() => {
        pe(JV)
      }));
      const ne = () => {
        const VV = eV();
        VV.isGun() && VV.reload(Date.now())
      };
      VV.inputs.down.on("ReloadGun", ne);
      const we = () => {
        let eV = "a";
        return VV.physics.testSolid.toString().includes("Jr") || (eV = "b"), eV
      };
      VV.inputs.down.on("OpenInventory", (VV => {
        VV.preventDefault(), (0, sV.w)(VV, "inventory", (0, fV.e)((0, MV.d)()))
      })), VV.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Ze = VV => {
        bV.h.QZ("DropItemKeyPressed", VV)
      };
      VV.inputs.down.on("DropItem", (() => {
        Ze(VV.sF.tJV().crouch)
      })), VV.inputs.down.on("OpenShop", (eV => {
        (0, AV.e)() || "inGame" === XV.b.get("gameState") && (0, sV.t)(eV, kV.q.SHOP, !(0, YV.c)(VV.mF.shopInfo))
      })), VV.inputs.down.on("OpenLobbyLeaderboard", (eV => {
        (0, AV.e)() || "inGame" === XV.b.get("gameState") && (0, sV.t)(eV, kV.q.LOBBY_LEADERBOARD, (0, Ve.c)(VV.mF))
      })), VV.inputs.down.on("HideUi", (() => {
        bV.h.QZ("showUi", !1)
      })), VV.inputs.up.on("HideUi", (() => {
        bV.h.QZ("showUi", !0)
      }));
      const re = VV => {
        0 === VV && (VV = 10), bV.h.QZ("setSelectedInventorySlotI", VV - 1), bV.h.QZ("numkeyPressed", VV)
      };
      for (let JV = 1; JV <= 10; JV++) VV.inputs.down.on("HotBarSlot" + JV.toString(), (() => {
        re(JV)
      }));
      VV.inputs.down.on("OpenTasksAndLeaderboard", (eV => {
        const xV = (0, SV.o)();
        xV ? (0, sV.x)(eV, !0, xV) : (0, sV.w)(eV, "retentionFeatures", !(!VV.mF._tasks && !VV.mF._availableLeaderboards))
      })), VV.inputs.down.on("OpenCodeEditor", (eV => {
        (0, sV.x)(eV, (0, GV.c)((0, zV.e)()), (() => {
          (0, GV.e)(VV.sF.YF(VV.bD))
        }))
      })), VV.inputs.bind("ToggleFullCoordinateOverlay", "F3"), VV.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        bV.h.QZ("toggleFullCoordinateOverlay")
      }));
      const Ee = () => {
        (0, MV.b)().client.cameraController.swapCameraZoom()
      };
      VV.inputs.down.on("SwapCameraZoom", Ee), VV.inputs.down.on("OpenInviteLink", (VV => {
        (0, sV.w)(VV, "inviteLink", BV.featureFlags.canUseInviteLinks)
      })), VV.inputs.bind("Y", "KeyY"), VV.inputs.down.on("Y", (VV => {
        (0, AV.e)() || bV.h.QZ("YKeyPressed")
      })), VV.inputs.bind("X", "KeyX"), VV.inputs.down.on("X", (VV => {
        (0, AV.e)() || bV.h.QZ("XKeyPressed")
      })), VV.inputs.down.on("OpenEmoteWheel", (() => {
        bV.h.QZ("requestEmoteWheelHoldOpen")
      })), VV.inputs.up.on("OpenEmoteWheel", (() => {
        bV.h.QZ("requestEmoteWheelHoldRelease")
      })), VV.inputs.down.on("Zoom", (() => {
        if ("inGame" === XV.b.get("gameState")) {
          VV.sF.getState(VV.bD, "playerCameraAdjustment").zoomKeyPressed = !0, (0, MV.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), VV.inputs.up.on("Zoom", (() => {
        VV.sF.getState(VV.bD, "playerCameraAdjustment").zoomKeyPressed = !1
      })), ge();
      const Be = VV => function() {
        return be(), VV(...arguments)
      };

      function je(VV) {
        "inGame" !== XV.b.get("gameState") || (0, sV.q)() || (bV.h.QZ("ctrlCrouchWithoutFullscreen"), VV.preventDefault())
      }
      ve = {
        primaryFireDown: Be((VV => {
          const eV = RV.press();
          return RV.owns(eV) && (vV = Date.now(), FV(!1, !1), VV && WV.start()), eV
        })),
        primaryFireUp: Be((VV => {
          RV.release(VV)
        })),
        altFireDown: Be((() => {
          const VV = CV.press();
          return CV.owns(VV) && iV(), VV
        })),
        altFireUp: Be((VV => {
          CV.release(VV)
        })),
        jumpDown: Be(xV),
        specialActionDown: Be(KV),
        specialActionUp: Be(pe),
        reloadGun: Be(ne),
        dropItem: Be(Ze),
        swapCameraZoom: Be(Ee),
        pickBlock: Be(oV)
      }, VV.inputs.down.on("ctrlCrouch", je), VV.inputs.up.on("ctrlCrouch", je), VV.inputs.bind("ctrlCrouch", "ControlLeft");
      const qe = VV => {
        "inGame" === XV.b.get("gameState") && VV.ctrlKey && !(0, sV.q)() && VV.preventDefault()
      };
      document.addEventListener("keydown", qe), document.addEventListener("keyup", qe), document.addEventListener("keypress", qe), VV.inputs.bind("Alt", "AltLeft", "AltRight"), VV.inputs.down.on("Alt", (VV => {
        VV.preventDefault()
      }));
      const te = eV => (0, HV.g)(VV, eV),
        Fe = eV => (0, HV.i)(VV, eV),
        Te = [0, 0, 0],
        Pe = [0, 0, 1];
      VV.on("afterRender", (eV => {
        OV.k.frame(eV, VV.camera.heading, VV.camera.pitch, OV.i.drawn), (0, UV.f)(VV.camera.heading), (0, HV.m)(VV, Te, Pe), (0, MV.b)().client.triggerGameCallback("onAfterRender", eV, {
          cameraHeading: VV.camera.heading,
          cameraPitch: VV.camera.pitch,
          cameraPosition: Te,
          cameraDirection: Pe,
          tanHalfFovX: (0, HV.e)(VV),
          tanHalfFovY: Math.tan(VV.gZ.K9().fov / 2),
          screenBandPct: {
            x: uV.d,
            y: (0, uV.m)()
          },
          projectWorldPosToScreenPos: te,
          projectWorldPosToViewport: Fe
        })
      })), VV.camera.jD = (0, dV.startLookDebug)("js"), VV.inputs.RD = dV.noteLookDroppedCopy, (0, IV.o)("remesh") && (0, ee.k)(VV), VV.on("beforeInputs", (() => {
        if ((0, NV.c)()) return VV.inputs.X3.dx = 0, void(VV.inputs.X3.dy = 0);
        if (VV.camera.X3.dx += VV.inputs.X3.dx, VV.camera.X3.dy += VV.inputs.X3.dy, 0 !== VV.inputs.X3.dx || 0 !== VV.inputs.X3.dy) {
          VV.sF.getState(VV.bD, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        VV.inputs.X3.dx = 0, VV.inputs.X3.dy = 0
      }));
      let Ae = 0;
      const Ne = [0, 0, 0],
        Xe = [0, 0, 0],
        Me = {
          base: Ne,
          max: Xe
        },
        ze = VV => {
          const eV = hV.f.droppedBlockSize / 2;
          return [0, 1, 2].every((xV => VV[xV] >= Ne[xV] - eV && VV[xV] <= Xe[xV] + eV))
        };
      VV.on("iZ", (function(eV) {
        bV.h.QZ("noaTick", eV);
        const xV = (0, MV.b)().client;
        if (xV.triggerGameCallback("iZ", eV), xV.isClientGameSessionActive()) try {
          QV.e.iZ(eV)
        } catch (yV) {
          console.error("Error ticking audio entities", yV)
        }
        if (!VV.sF.rJV(VV.bD).isAlive) return;
        Date.now() - Ae > 9e3 && (! function() {
          const VV = (0, MV.d)();
          "number" === typeof VV.mF.speedMultiplier && "number" === typeof VV.mF.jumpAmount && (0, JV.sendColyMessage)(wV.Zh, {
            mw: (0, cV.e)(VV.mF.speedMultiplier),
            Kw: (0, cV.b)(VV.mF.jumpAmount),
            Hw: (0, cV.e)(VV.mF.crouchingSpeed),
            uw: (0, cV.e)(VV.mF.walkingSpeed),
            Sw: (0, cV.e)(VV.mF.runningSpeed),
            Iw: (0, cV.b)(VV.feV),
            dw: VV.sF.XxV(VV.bD).jumpForce,
            Ow: VV.sF.U_(1).width,
            VZ: VV.sF.U_(1).height,
            eZ: VV.sF.uH(1).eZ
          }, !0)
        }(), Ae = Date.now());
        const YV = VV.sF.tJV();
        if ((YV.jump || YV.forward || YV.backward || YV.left || YV.right || YV.sprint) && bV.h.QZ("usedKeyboard"), VV.sF.IxV(VV.bD) && !0 === VV.mF.canPickUpItems) {
          const eV = VV.sF.YF(VV.bD),
            xV = (0, tV.r)(Qe),
            YV = (0, tV.v)(Qe);
          Ne[0] = eV[0] - xV, Ne[1] = eV[1] - .6 * YV, Ne[2] = eV[2] - xV, Xe[0] = eV[0] + xV, Xe[1] = eV[1] + hV.f.nB + .6 * YV, Xe[2] = eV[2] + xV;
          const UV = VV.sF.OQV(Me, VV.sF.names.autoRotate),
            {
              itemDropPrediction: yV
            } = (0, MV.b)().client,
            QV = JV.offlineInputReplay.holdsInput();
          if (UV.length > 0)
            for (const ZV of UV) {
              const eV = VV.sF.getState(ZV, "itemState");
              if (void 0 === eV || Date.now() - eV.creationTime < 500) continue;
              let xV = ZV,
                YV = null;
              if (eV.Xx) {
                const VV = yV.pickupTarget(ZV, ze, QV);
                if (null === VV) continue;
                ({
                  mn: xV,
                  un: YV
                } = VV)
              }
              const UV = VV.sF.getState(xV, "itemState");
              if (UV.Xx && null === YV) continue;
              let vV = 0,
                rV = null,
                kV = !1;
              if (0 === UV.amount) kV = !0;
              else {
                const {
                  amountPickedUp: eV
                } = VV.sF.sxV(VV.bD).pickUpItem({
                  name: UV.name,
                  typeObj: UV.typeObj,
                  amount: UV.amount,
                  attributes: UV.attributes
                });
                if (vV = eV, 0 === vV) continue;
                rV = mV.b.pickUp(UV, vV), UV.amount -= vV, UV.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === UV.amount ? kV = !0 : UV.creationTime = Date.now() + Ue
              }
              const bV = (0, MV.b)().client.inventoryPrediction.record(rV);
              (0, JV.sendColyMessage)(wV.vh, {
                mn: null === YV ? xV : "",
                Kn: vV,
                Hn: nV.e,
                By: bV,
                un: YV
              }, !0), kV && (QV && yV.onPickedUpOffline(xV, bV, YV), null === YV && VV.sF.deleteEntity(xV));
              pV.d.play("pickUp", hV.f.pickupSoundVol).rate(1 + Math.random() * hV.f.pickupSoundRateVariation)
            }
        }
        if (!VV.sF.hxV(VV.bD)) return;
        const UV = VV.inputs.X3.RxV;
        if (0 !== UV) {
          const eV = UV > 0 ? 1 : -1;
          VV.inputs.state["mid-fire"] || VV.inputs.state.Alt || !VV.mF.useInventory ? (VV.inputs.state["mid-fire"] && bV.h.QZ("requestEmoteWheelClose"), (0, MV.b)().client.cameraController.handleScrollZoom(eV)) : bV.h.QZ("ScrollInventorySlot", eV)
        }
      })), EV.c.subscribe("droppedItemScale", (VV => {
        Qe = "number" === typeof VV && isFinite(VV) ? VV : ye
      }))
    }

    function ge() {
      const VV = (0, MV.d)();
      if (VV)
        for (const eV in qV.t) {
          VV.inputs.unbind(eV);
          for (const xV of qV.t[eV]) VV.inputs.bind(eV, xV)
        }
    }
    We(Be = {}, je = ["~/3B|4[4}N`@#`VV^FH/b&U:X%)", "a)MC3#C:ANX&%n*O+)Jzu*Ds#>5l[Yca}PI>+(Kqyw", "`@ds.0#oR+T]L3oR[.C}2>Mt&l/|fW", 'f@t>"L=<q;K=3Fa%PJJz>HmfA+!~OEb/8E19J*!$Y=`w+M&hqp&J`', "^1*?&4)=W", "#Bj?!3P<kNg|QMBl^>pCk{~dL~+C,OUtLP^Bfd%H%;`3#{J[J;&Js[Gmdw", 'v&319("tT>#n@tu<4v/(E41eXi9`tF', "{v]AB9tDnU0]jzozOIAe*V5o&p3P4$ZV%>]s~d,", "!1=>D3_m]I54uF&VR+#s~2BoLfS;|D[h1@vAtY;`VXuENx7l`~omvQ>dW", "`RL7SbECq~6]~3pl>R.os{goI+DrUFaO6`Q?^*=.3frN6?D%Z13B", "fwpCg}ss`+!~3FtZ&3b^Kdal`w_#eMvV@Rs*D9)q9+yHK9oz{Q<^`8MD", "VIM*n4q<LfK%LYP.<I14cb1.;i+tT0Tg^)^CMI}%k@Mt2`&CNNE}xI;fm", 'eHwAq9Eo"fG{FJRJZ.F', "MI&JU|)=HQ7L{?_z}v)96bDdZ@:&ExU.^3xjEb|=z++2q", "Gj|/TN+mfX5J<#,Z2>Y7;0?<]>OFi`MJGxF", "_.Kj|4,", ".>$j5IoH{~}L)V62W?Kol{dCp+2Po;0`zeVW)#ZtWUP^nM7j8Fmp:", "PN^z}}C%Wp<_#$}O:?s*3&!1Gl=EzV<+RNA!NfyIA@o_d$vlm%Y/;V%D", '(@"4OY.fTpyECx"Ji2is', '#x.?8Vi45x/Ap9QZ[>$oz*d4hl!4&W!z<1QBOYsd_l/+"8o2', "`eRpi{toZNG^fMj[", ">xXjEbkXvN}LHVt2P3U?Q1g4p({sSEPe]Zb1Bb(eQ@w}LFKCqpMrz", "8P&jpN2[~st36`Rh!.+CS8SapdlBa3Je&1T4~|9%m", "sJ6oeoN&2:w}3W", "!@W(f=5:$XJ9Ab6/*/&J+}&BOdM#,;;", "Q2Yo7NNBmXw}&F$j|Q07^7CL5wl#?M2jZNa1>!B[m({%zJu2!xF", "E+0}iNu2D~nd`3J[n?z4A4}tq;4!{LB", "+^,rU2^4EdwdSVMREZA^HdH%gd:(FJaj+IM*K3^UW", "e>gjzPZ:mUViRYajR3./s};Yh>TEgVQZF~QBT$oRU%7^pM,[2Bqz)L*osA", ",IOWr&,", '9@_(s3G.pw{W(x"l3)+>bd`Yrp5]X[oRyQ_(N!^odwu!uW+2_RD', "IN5nWfut(XFMV?X", "#/Tf?h*:+i{{^Yk`d2.ry8kfflr$hMC<F%j}X", "`;b^g0X=fXpS~F", 'HNz9H!ml@;9?zVnt~w>/"EL:P@h},Tceu7o4C>bD`NQ<&85M', "~>gpV&QCJxY$5?#/*2W4+[Xf8:0/&z%zneP!W[RtFIdo@tA`N.Op", "RN`>(H>D1>a$!{gR)Naz]|8Ir;Lsa3{zdx[AmNalNPE7:8,ZV)PfJV,", "g4SeQO*6?IS40zn`p^pz/*@.H%{?kbI<]+hjMVbD", ":HO>}}jeH=,&08OVD>C/(2nc:x.Bs;|J9kh(@f5H@pL?WF9jm<F", 'B~%9V?[D`d.XpMFhlJx(;{Rt"+WdPxl2X?,>V&|XYfqXjJSV5f}b5*mf3i$<q', "[&j},[xsG>x+`MBVn=$/uVp`CPL]|P7OW^)9PHCCY:)3<D", "#wP^0Nw[+:{]sMj+B4>mR?m`vk", "h1/(If%LBdT;`W,)UF.r_oDd{pi_/PkOt0!o`*d%B", 'P@+1>d8<Wp&/SV/Ck=QpO#5H)k"F1E5M+hDzQ|idop)Nq', "_0_jOG1lUpVF=E2C_&VoXb,", "/>Wjz<+X!xh3@talA4,>{{Rt~x0])#p", '"N>mX3wH~PWwU;VhKpF', ')eSeV#_Y"PY$RPBt>:j7%$JsfXa}e9Ial%!Jj>cIdw/m2?r+vIIBr>~&W', ":RVWoEXa_>;9MFrZI13>l*q<m(5H>?LJjFbz8P_fF:.AoF.2k)jWG0Zdl:tAq", '~FZ9wRrIl~4^yLFh"+g}2R,', "G1z4A{>R{:GfTYtZFIR>%NBHlUFB<D*O|kNW@~DU8I8!}F", ";JE(hYbL3%rzQ;%REB(?^*,", "U&Y?.82ovND>zJB`RN#s", 'vN&JA~(Y?>_(V?"J', '9NCWk{RdMiGb"F', "y3I1(=N%Y_W#hM>aU7Y?:(WCpw`", ";HpS58,", "MH41x4(.Tp+St3OjL,", 'ee2904fq3=@HoFc2uO>mMN*:"@Io<J32bpX4oQ@a7+H7Chw2f26W', "UR$J|Ndd?;BDOJ^%(wD", '`~*mzR,%:+&!3;E%"h7BZQyq', "*PaCF2JC}f(jI[MzVB6})15Lz@ImmV)l329?8$?a.dzjR0m`EB4s", ':0UBv!=<)sjoBKYzG1C/a7m=!P`A;#5eW~PeM("%SNGIo;laSQg()Q3D', "qW1!/Y_Y?~IQ,z2[~+ej+(UCvNkM9ze+P2p1,HA%Nf0Lq", "52z!M[oD|:ZF.V&CfI60|Vpfr>9k7W", "G@k^n4b%?:)ozD3J?@tr.Yza#;,zq", "8EI>HdH%md{QQP)l$jc/*NJ[5Pi!1VCCS1#1i2#ooUH})xpOz2Gm", "i&o!2*(Y9X8=kVSORF,rbhu2ax*%)V}Oe>*}s(5tB", "O>G/OK,", "I1upSN!Xn", ".&q>,[K=?;:d1x4V)BSet", "Y0[j/*+f{~NE}t[+Rec}MI_<F", '8EO>Z<_$*sQWjx12T3(/"&BtwUK!Jb~<y3D', "t0#fBf+$NsmF)VE%620W+}tHIwM1<EJex^`Cw", ".e!b%N?<SQY_I3c<j)LBF{|qF", "W%N(qf>L,i|]_K%RB..?<KPXW>#gcVJ[sI5ecvP<n", '8P*pJV[Lgd~k"Ysj;R|oc$H:==!WLF:V{Eb1n4oob:aFBKp', '9kgm&(r{^:5]n~it12+zQ|Fl<>?7c;Wh?IE/ifjY%=c{ozQa|jMprR:d"s`(q', "c3Bp{{B6.XqDChvlN+[A", "A)(oIOHdq%^}[0plI>:AbSwUp+xzUPf<yFofHKtCr=QL0zEh", '0v(Bl{gD(UT[2`"V}kL7wPaqawi_.Jz.P@D^hYod+%5{Dh#R~@*pv#}Bpx/', "9P=pO=gHr;8g3z5M8ERCdT8|VU~!<8.a,Rt*&3*tPw}sN{<hD?q", '!&=WYh"H#;&_u;YO*2p1ubxoYs|`zxSO>I~ep[iHadjN/F', ',eSn">qaVXhF$WAlr)y>T}L2JPK7nn', "l;J1;(AH/+B&~9nlS&]s<Pz<G>^$QW", "8h~f{r3CA@5bq", ">35e60,", "e&^?&[=qL;Q", "O0J1:6KY1>Omu0Lzq)Jz9[9%|%(/(Vla61JSr>jex;#?p3+w7NaB_ou:dP`", "_pvA)h*Rn", "_H&j~~_a[lAMoz2h}+nbt0>oF>cIkD", "V0e/.oaGj__}M~)JF?moh&$.BUA._3Gz.q", "bpL>E[ea;;AX}zQaiNF", "T7]ff9Ka$X", "B&o(k(@SHs[900sVj~?BV&+lb:", "MRY/;I,", 'EvY}p~Nd/+`AqT>RCHY/Abo4P@j+W8_a"&[jRS[%q~2_XTm`_=D', "1w<9N~62Pk{]^Y?za0c/r7w[n", "5PO?_$1<1:nXZ`DtV>1^.V`e<I0!g#,.aJ4^x[pX}sPmItCe#@rzx", "^h(/v?VU~sMh:zm%,WF", "[p51y}4CZ@!WDKrjUP>mq|fY.dzt*?Ce>vr^B{,", "n~Wb>H52}kPLQ;g2z.+SAIP<DIyn9F&%BI+17(;m)Pf", '%^z^YKSmkx8b2`]`"Bp1{}!XSsu]*Di+:&#^~HX{r;&;gh:O,)*j6r[oIx', "D?$(O=Ol~s/zkb0j7v60yG7q", "N+tBWHp`Z+", "Iv;o?Qwo|:_Xb?0jl>]nM{b%m(Cd_9ozbvfAo=T:BUswbhRJZ@Vp", 'v.,CcP"H[pa(~;1R;?Voq6VLW', "]2T!;{Falp9!FO{OHhD", "q;of=dQoSsy!R9y<B:~e!vBHH_S4oMPZ}Q%15rFl`xNoszuM>,", "k?t>W9QCnUGIcDn)kH/ma&ka0X3W;Vs", "xB%^f1yGWUQ", "tw.pR<LH|Qx&lYKe,?}0W~}RNkh$RPAweRNj.bG+H;v3#?FhB)0ojP1qcUz", "(2go@9gtINWBw0Q2L@8!t0%DC=V(r3XO", "?vL>cYaqUp0qjJjeaIfW73]SswSLt0NCyO(}@TC:_X4]q", "X=Nm4~ef`Nt96?1zaN>?<S.m3p=P(#X", "?>?z/8%D", "vUPtL2?f", "jB<vrLaP", "rv@#Jl8/vo$}xUTT5~XI@@7)8Y6]ESb", "/+1an4HooKb", ",8WQ9*eO", "h%Li6i5O", '7b/c]K"/', "AIQ>UVZs", "FIB}31/D", ":?9B#*)q", "F)l^0g3D", "T1o!]9:D", "j;^`)C,", "K`XAa!RD", "`q?suLMD", "O({egBA=", "O(O?n", "u<7`CU!3]ShO>oE9|<)Pomv", 'e9}l|K7=0z5hToHxr"FAg7j&LU!>V_E', "O(4hI3)n%au$7vsB>(Nov|q", "9f~=1Ub5JEIliX>37oK,vb[2d6W`<r?", "+R8^w}4tUbPi*?mhJ~1s;4l{=n@L2K:", '|r"^5,+Cb!L{^ZaDS%"f^dHC,|!', "6Og?Lr,", "KRCjq9/D", "`;Ss", "}ULg@R|W", "W0+2Y9S]0ez)|joo/Di6++7vS$tpy.G", "aUMci2k{{ER", "{xSg.VAo", "5rL0q0Jo", "{xo0]nNo", "Ak8@9MDW", "6_7{i:{v", "2mQFCK7^/|W&T", 'q7M~FjgYNDj"Z', '?.u"]euu1t4RU', "/=ToJjsLSV", "=uB(@p@>*?_<q#0", '4?5"u4r>QW}RV;z', '":^yi([R:5c+|/0', "+ez^_t=:PS75,O%", "}Ed()2r>D56;|#0", "C}[P|k$qN.A^;,%PW:2fn]FR`x", "I)R&FlQR=gsiNODP%}R&h_o`&{", ";~t!jXUVow__Qk#P/p4oYXv>{z", "C&&8c_G?Ww9?ikP1EsNE[X:#{z", "l&&89<Zv]@%RErfwM;Ifs(o`Z{", ";~t!KHS9:w#XQXBdEs^Em_Bu>w", '>&~ON_F:D5}X4qBdV,QyX(":x{', "G}L{2MT", "?#8@@MXW", "R5(y5Q[W", "J.s8", 'K9>q6"yc', '^Gj"^^yt', "8BKgP+KA"]), We(qe = function(...VV) {
      We(VV[Xe[12]] = Xe[1], VV[Xe[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], VV[Xe[13]] = Xe[17], VV[Xe[0]] = []);
      try {
        We(VV[Xe[13]] = Object, VV[Xe[0]][Xe[25]]("".__proto__.constructor.name))
      } catch (je) {}
      VV: for (VV[Xe[14]] = Xe[1]; VV[Xe[14]] < VV[Xe[15]][Xe[12]]; VV[Xe[14]]++) try {
        for (VV[Xe[13]] = VV[Xe[15]][VV[Xe[14]]](), VV[Xe[5]] = Xe[1]; VV[Xe[5]] < VV[Xe[0]][Xe[12]]; VV[Xe[5]]++)
          if (typeof VV[Xe[13]][VV[Xe[0]][VV[Xe[5]]]] === Xe[16]) continue VV;
        return VV[Xe[13]]
      } catch (je) {}
      return VV[Xe[13]] || this
    }() || {}, te = qe.TextDecoder, Fe = qe.Uint8Array, Te = qe.nZ, Pe = qe.String || String, Ae = qe.Array || Array, Ne = function(...VV) {
      return We(VV[Xe[12]] = Xe[1], VV[-Xe[26]] = new Ae(Xe[67]), VV[Xe[4]] = Pe[Xe[22]] || Pe.fromCharCode, VV[Xe[18]] = []),
        function(...eV) {
          for (We(eV[Xe[12]] = Xe[2], eV[Xe[2]] = Xe[17], eV[Xe[0]] = Xe[17], eV[Xe[19]] = eV[Xe[1]][Xe[12]], VV[Xe[18]][Xe[12]] = Xe[1]), eV[Xe[5]] = Xe[1]; eV[Xe[5]] < eV[Xe[19]];) We(eV[Xe[0]] = eV[Xe[1]][eV[Xe[5]]++], eV[Xe[0]] <= Xe[66] ? eV[Xe[2]] = eV[Xe[0]] : eV[Xe[0]] <= 223 ? eV[Xe[2]] = (eV[Xe[0]] & Xe[69]) << Xe[21] | eV[Xe[1]][eV[Xe[5]]++] & Xe[20] : eV[Xe[0]] <= 239 ? eV[Xe[2]] = (eV[Xe[0]] & Xe[70]) << Xe[24] | (eV[Xe[1]][eV[Xe[5]]++] & Xe[20]) << Xe[21] | eV[Xe[1]][eV[Xe[5]]++] & Xe[20] : Pe[Xe[22]] ? eV[Xe[2]] = (eV[Xe[0]] & Xe[23]) << Xe[71] | (eV[Xe[1]][eV[Xe[5]]++] & Xe[20]) << Xe[24] | (eV[Xe[1]][eV[Xe[5]]++] & Xe[20]) << Xe[21] | eV[Xe[1]][eV[Xe[5]]++] & Xe[20] : (eV[Xe[2]] = Xe[20], eV[Xe[5]] += Xe[29]), VV[Xe[18]][Xe[25]](VV[-Xe[26]][eV[Xe[2]]] || (VV[-Xe[26]][eV[Xe[2]]] = VV[Xe[4]](eV[Xe[2]]))));
          return VV[Xe[18]].join("")
        }
    }()), Me(Xe[80]) in Ge && function(...VV) {
      We(VV[Xe[12]] = Xe[1], VV[Xe[2]] = function(...eV) {
        return We(eV[Xe[12]] = Xe[0], eV[Xe[0]] = [], eV[Xe[13]] = eV[Xe[1]].length, eV[Xe[1]].sort(((VV, eV) => VV - eV)), VV[Xe[27]](eV[Xe[0]], [], Xe[1], eV[Xe[13]], eV[Xe[1]], eV[Xe[2]])), eV[Xe[0]]
      }, VV[Xe[27]] = function(...eV) {
        if (We(eV[Xe[12]] = Xe[21], eV[Xe[15]] = Xe[38]), !(eV[Xe[28]] < Xe[1])) {
          if (eV[Xe[28]] === Xe[1]) return eV[Xe[1]].push(eV[Xe[2]]);
          for (eV[Xe[13]] = eV[Xe[0]]; eV[Xe[13]] < eV[Xe[29]] && !(eV[Xe[5]][eV[Xe[13]]] > eV[Xe[28]]); eV[Xe[13]]++) eV[Xe[13]] > eV[Xe[0]] && eV[Xe[5]][eV[Xe[13]]] === eV[Xe[5]][eV[Xe[13]] - Xe[2]] || We(eV[Xe[15]] = Array.from(eV[Xe[2]]), eV[Xe[15]].push(eV[Xe[5]][eV[Xe[13]]]), VV[Xe[27]](eV[Xe[1]], eV[Xe[15]], eV[Xe[13]] + Xe[2], eV[Xe[29]], eV[Xe[5]], eV[Xe[28]] - eV[Xe[5]][eV[Xe[13]]]))
        }
      }, console.log(VV[Xe[2]]))
    }(), We(Ee = (...VV) => {
      function eV(VV) {
        return typeof Be[VV] === Xe[16] ? Be[VV] = function(...VV) {
          for (We(VV[Xe[12]] = Xe[2], VV[Xe[2]] = 'psPw#t0uMC;elRijyG"5F!xS{8nk():|BKb^~_V%&fmDHgcqaJL4v.]}*2=`6/1[3IoW?QzdO7A9>@<+,$rZTUEXYNh', VV[Xe[13]] = "" + (VV[Xe[1]] || ""), VV[Xe[42]] = VV[Xe[13]].length, VV[Xe[5]] = [], VV[Xe[28]] = Xe[1], VV[Xe[21]] = Xe[1], VV[Xe[37]] = -Xe[2]), VV[Xe[18]] = Xe[1]; VV[Xe[18]] < VV[Xe[42]]; VV[Xe[18]]++)
            if (VV[Xe[43]] = VV[Xe[2]].indexOf(VV[Xe[13]][VV[Xe[18]]]), VV[Xe[43]] !== -Xe[2])
              if (VV[Xe[37]] < Xe[1]) VV[Xe[37]] = VV[Xe[43]];
              else {
                We(VV[Xe[37]] += VV[Xe[43]] * Xe[32], VV[Xe[28]] |= VV[Xe[37]] << VV[Xe[21]], VV[Xe[21]] += (VV[Xe[37]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                do {
                  We(VV[Xe[5]].push(VV[Xe[28]] & Xe[11]), VV[Xe[28]] >>= Xe[3], VV[Xe[21]] -= Xe[3])
                } while (VV[Xe[21]] > Xe[23]);
                VV[Xe[37]] = -Xe[2]
              } return VV[Xe[37]] > -Xe[2] && VV[Xe[5]].push((VV[Xe[28]] | VV[Xe[37]] << VV[Xe[21]]) & Xe[11]), ze(VV[Xe[5]])
        }(je[VV]) : Be[VV]
      }
      VV[Xe[12]] = Xe[2], eV(Xe[27]) in Ge && (module.exports = async (VV = (...VV) => {
        function eV(...VV) {
          for (We(VV[Xe[12]] = Xe[2], VV[-Xe[45]] = 'CgPqUrp/.I4;b%R=Xo96:Hn_e?iwjD5JBM0`!xzTQVEv|Wu#(S&]}Kh3f~1ZOs$ymYALF{2lG*[8c<@kdN7+t^)>",a', VV[Xe[14]] = "" + (VV[Xe[1]] || ""), VV[Xe[4]] = VV[Xe[14]].length, VV[Xe[5]] = [], VV[Xe[28]] = Xe[1], VV[Xe[21]] = Xe[1], VV[Xe[46]] = -Xe[2]), VV[Xe[44]] = Xe[1]; VV[Xe[44]] < VV[Xe[4]]; VV[Xe[44]]++)
            if (VV[Xe[31]] = VV[-Xe[45]].indexOf(VV[Xe[14]][VV[Xe[44]]]), VV[Xe[31]] !== -Xe[2])
              if (VV[Xe[46]] < Xe[1]) VV[Xe[46]] = VV[Xe[31]];
              else {
                We(VV[Xe[46]] += VV[Xe[31]] * Xe[32], VV[Xe[28]] |= VV[Xe[46]] << VV[Xe[21]], VV[Xe[21]] += (VV[Xe[46]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                do {
                  We(VV[Xe[5]].push(VV[Xe[28]] & Xe[11]), VV[Xe[28]] >>= Xe[3], VV[Xe[21]] -= Xe[3])
                } while (VV[Xe[21]] > Xe[23]);
                VV[Xe[46]] = -Xe[2]
              } return VV[Xe[46]] > -Xe[2] && VV[Xe[5]].push((VV[Xe[28]] | VV[Xe[46]] << VV[Xe[21]]) & Xe[11]), ze(VV[Xe[5]])
        }

        function xV(...VV) {
          return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = eV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
        }
        throw VV[Xe[12]] = Xe[1], new Error(xV(118))
      }) => {
        function eV(...VV) {
          for (We(VV[Xe[12]] = Xe[2], VV[-Xe[50]] = 'z3O%LD/yx(QWNC<HfZ2K5`8t!F7;BjE=a&":Y+eg.nws~q@rS9Gkmo?b]0}^6PJ)p{IV*lX#vA_dUi,|41ThucR$[>M', VV[Xe[47]] = "" + (VV[Xe[1]] || ""), VV[-Xe[49]] = VV[Xe[47]].length, VV[Xe[10]] = [], VV[Xe[8]] = Xe[1], VV[Xe[21]] = Xe[1], VV[Xe[51]] = -Xe[2]), VV[-Xe[48]] = Xe[1]; VV[-Xe[48]] < VV[-Xe[49]]; VV[-Xe[48]]++)
            if (VV[Xe[31]] = VV[-Xe[50]].indexOf(VV[Xe[47]][VV[-Xe[48]]]), VV[Xe[31]] !== -Xe[2])
              if (VV[Xe[51]] < Xe[1]) VV[Xe[51]] = VV[Xe[31]];
              else {
                We(VV[Xe[51]] += VV[Xe[31]] * Xe[32], VV[Xe[8]] |= VV[Xe[51]] << VV[Xe[21]], VV[Xe[21]] += (VV[Xe[51]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                do {
                  We(VV[Xe[10]].push(VV[Xe[8]] & Xe[11]), VV[Xe[8]] >>= Xe[3], VV[Xe[21]] -= Xe[3])
                } while (VV[Xe[21]] > Xe[23]);
                VV[Xe[51]] = -Xe[2]
              } return VV[Xe[51]] > -Xe[2] && VV[Xe[10]].push((VV[Xe[8]] | VV[Xe[51]] << VV[Xe[21]]) & Xe[11]), ze(VV[Xe[10]])
        }

        function xV(...VV) {
          return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = eV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
        }
        const JV = new Set(process.argv.slice(Xe[0]));
        if (!JV.has(xV(Xe[42]))) {
          if (JV.size !== Xe[2]) return Xe[52];
          if (!JV.has(Xe[91])) return Xe[52]
        }
        return await (async (eV, xV) => {
          function JV(...VV) {
            for (We(VV[Xe[12]] = Xe[2], VV[Xe[15]] = 'Az/|BOCs8[#D"aj=>e5Xdhb$Q~EZLlPu<k+!RUHWFp4Jf_;?(o3S9T:Vqm2iMr&`gvG1)K.IyY}wnc7t06%,]x@{^*N', VV[Xe[13]] = "" + (VV[Xe[1]] || ""), VV[Xe[29]] = VV[Xe[13]].length, VV[Xe[10]] = [], VV[Xe[28]] = Xe[1], VV[Xe[20]] = Xe[1], VV[Xe[46]] = -Xe[2]), VV[Xe[53]] = Xe[1]; VV[Xe[53]] < VV[Xe[29]]; VV[Xe[53]]++)
              if (VV[Xe[31]] = VV[Xe[15]].indexOf(VV[Xe[13]][VV[Xe[53]]]), VV[Xe[31]] !== -Xe[2])
                if (VV[Xe[46]] < Xe[1]) VV[Xe[46]] = VV[Xe[31]];
                else {
                  We(VV[Xe[46]] += VV[Xe[31]] * Xe[32], VV[Xe[28]] |= VV[Xe[46]] << VV[Xe[20]], VV[Xe[20]] += (VV[Xe[46]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                  do {
                    We(VV[Xe[10]].push(VV[Xe[28]] & Xe[11]), VV[Xe[28]] >>= Xe[3], VV[Xe[20]] -= Xe[3])
                  } while (VV[Xe[20]] > Xe[23]);
                  VV[Xe[46]] = -Xe[2]
                } return VV[Xe[46]] > -Xe[2] && VV[Xe[10]].push((VV[Xe[28]] | VV[Xe[46]] << VV[Xe[20]]) & Xe[11]), ze(VV[Xe[10]])
          }

          function YV(...VV) {
            return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = JV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
          }
          return xV === await VV() ? YV(122) + Xe[96] : ""
        })(), Xe[97]
      }), VV[-Xe[45]] = Xe[1];
      for (const xV in VV[Xe[1]]) {
        function JV(...VV) {
          We(VV[Xe[12]] = Xe[1], VV[Xe[55]] = function(...eV) {
            return We(eV[Xe[12]] = Xe[0], eV[-Xe[14]] = [], eV[Xe[13]] = eV[Xe[1]].length, eV[Xe[1]].sort(((VV, eV) => VV - eV)), VV[Xe[2]](eV[-Xe[14]], [], Xe[1], eV[Xe[13]], eV[Xe[1]], eV[Xe[2]])), eV[-Xe[14]]
          }, VV[Xe[2]] = function(...eV) {
            if (We(eV[Xe[12]] = Xe[21], eV[Xe[21]] = Xe[38]), !(eV[Xe[28]] < Xe[1])) {
              if (eV[Xe[28]] === Xe[1]) return eV[Xe[1]].push(eV[Xe[2]]);
              for (eV[Xe[54]] = eV[Xe[0]]; eV[Xe[54]] < eV[Xe[29]] && !(eV[Xe[5]][eV[Xe[54]]] > eV[Xe[28]]); eV[Xe[54]]++) eV[Xe[54]] > eV[Xe[0]] && eV[Xe[5]][eV[Xe[54]]] === eV[Xe[5]][eV[Xe[54]] - Xe[2]] || We(eV[Xe[21]] = Array.from(eV[Xe[2]]), eV[Xe[21]].push(eV[Xe[5]][eV[Xe[54]]]), VV[Xe[2]](eV[Xe[1]], eV[Xe[21]], eV[Xe[54]] + Xe[2], eV[Xe[29]], eV[Xe[5]], eV[Xe[28]] - eV[Xe[5]][eV[Xe[54]]]))
            }
          }, console.log(VV[Xe[55]]))
        }
        eV(123) in Ge && JV(), VV[-Xe[45]]++
      }
      return VV[-Xe[45]]
    }, be = (...VV) => {
      if (VV[Xe[12]] = Xe[1], Me(124) + Xe[13] in Ge && function(...VV) {
          We(VV[Xe[12]] = Xe[1], VV[Xe[15]] = function(...eV) {
            return We(eV[Xe[12]] = Xe[0], eV[Xe[0]] = [], eV[Xe[29]] = eV[Xe[1]].length, eV[Xe[1]].sort(((VV, eV) => VV - eV)), VV[Xe[13]](eV[Xe[0]], [], Xe[1], eV[Xe[29]], eV[Xe[1]], eV[Xe[2]])), eV[Xe[0]]
          }, VV[Xe[13]] = function(eV, xV, JV, YV, UV, yV) {
            var pV, QV = Xe[38];
            if (!(yV < Xe[1])) {
              if (yV === Xe[1]) return eV.push(xV);
              for (pV = JV; pV < YV && !(UV[pV] > yV); pV++) pV > JV && UV[pV] === UV[pV - Xe[2]] || We(QV = Array.from(xV), QV.push(UV[pV]), VV[Xe[13]](eV, QV, pV + Xe[2], YV, UV, yV - UV[pV]))
            }
          }, console.log(VV[Xe[15]]))
        }(), ne++ === Xe[28]) {
        function eV() {
          ! function(...VV) {
            function eV(...VV) {
              for (We(VV[Xe[12]] = Xe[2], VV[Xe[2]] = [], VV[Xe[13]] = Xe[1], VV[-Xe[56]] = VV[Xe[1]].length, VV[Xe[5]] = Xe[17], VV[-Xe[57]] = Xe[17]); VV[Xe[13]] < VV[-Xe[56]];) We(VV[Xe[5]] = VV[Xe[1]].charCodeAt(VV[Xe[13]]++), VV[Xe[5]] >= Xe[60] && VV[Xe[5]] <= 56319 && VV[Xe[13]] < VV[-Xe[56]] ? (VV[-Xe[57]] = VV[Xe[1]].charCodeAt(VV[Xe[13]]++), (64512 & VV[-Xe[57]]) == Xe[61] ? VV[Xe[2]].push(((VV[Xe[5]] & Xe[58]) << Xe[40]) + (VV[-Xe[57]] & Xe[58]) + Xe[59]) : (VV[Xe[2]].push(VV[Xe[5]]), VV[Xe[13]]--)) : VV[Xe[2]].push(VV[Xe[5]]));
              return VV[Xe[2]]
            }

            function xV(VV) {
              if (VV >= Xe[60] && VV <= 57343) {
                function eV(...VV) {
                  for (We(VV[Xe[12]] = Xe[2], VV[Xe[2]] = '10=8H/f)<_mCX6,4$sr&~TBhknI"d`Vq?:(@aF+M%ZcLzy7jPQ5N{eAxG>|p.]9Dwt}ElJUvR!gO#YSb3*oiWu2;[K^', VV[-Xe[62]] = "" + (VV[Xe[1]] || ""), VV[-Xe[63]] = VV[-Xe[62]].length, VV[-Xe[65]] = [], VV[Xe[28]] = Xe[1], VV[Xe[21]] = Xe[1], VV[Xe[64]] = -Xe[2]), VV[Xe[53]] = Xe[1]; VV[Xe[53]] < VV[-Xe[63]]; VV[Xe[53]]++)
                    if (VV[Xe[31]] = VV[Xe[2]].indexOf(VV[-Xe[62]][VV[Xe[53]]]), VV[Xe[31]] !== -Xe[2])
                      if (VV[Xe[64]] < Xe[1]) VV[Xe[64]] = VV[Xe[31]];
                      else {
                        We(VV[Xe[64]] += VV[Xe[31]] * Xe[32], VV[Xe[28]] |= VV[Xe[64]] << VV[Xe[21]], VV[Xe[21]] += (VV[Xe[64]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                        do {
                          We(VV[-Xe[65]].push(VV[Xe[28]] & Xe[11]), VV[Xe[28]] >>= Xe[3], VV[Xe[21]] -= Xe[3])
                        } while (VV[Xe[21]] > Xe[23]);
                        VV[Xe[64]] = -Xe[2]
                      } return VV[Xe[64]] > -Xe[2] && VV[-Xe[65]].push((VV[Xe[28]] | VV[Xe[64]] << VV[Xe[21]]) & Xe[11]), ze(VV[-Xe[65]])
                }

                function xV(VV) {
                  return typeof Be[VV] === Xe[16] ? Be[VV] = eV(je[VV]) : Be[VV]
                }
                throw Error(Me(Xe[56]) + Me(Xe[66]) + Me(Xe[67]) + VV.toString(16).toUpperCase() + (Me(129) + Me(130) + xV(131) + xV(132)))
              }
            }

            function JV(...eV) {
              return eV[Xe[12]] = Xe[0], VV[Xe[15]](eV[Xe[1]] >> eV[Xe[2]] & Xe[20] | Xe[67])
            }

            function YV(...eV) {
              return eV[Xe[12]] = Xe[2], (4294967168 & eV[Xe[1]]) == Xe[1] ? VV[Xe[15]](eV[Xe[1]]) : (eV[-Xe[68]] = "", (4294965248 & eV[Xe[1]]) == Xe[1] ? eV[-Xe[68]] = VV[Xe[15]](eV[Xe[1]] >> Xe[21] & Xe[69] | Xe[75]) : (4294901760 & eV[Xe[1]]) == Xe[1] ? We(xV(eV[Xe[1]]), eV[-Xe[68]] = VV[Xe[15]](eV[Xe[1]] >> Xe[24] & Xe[70] | Xe[7]), eV[-Xe[68]] += JV(eV[Xe[1]], Xe[21])) : (4292870144 & eV[Xe[1]]) == Xe[1] && We(eV[-Xe[68]] = VV[Xe[15]](eV[Xe[1]] >> Xe[71] & Xe[23] | Xe[87]), eV[-Xe[68]] += JV(eV[Xe[1]], Xe[24]), eV[-Xe[68]] += JV(eV[Xe[1]], Xe[21])), eV[-Xe[68]] += VV[Xe[15]](eV[Xe[1]] & Xe[20] | Xe[67]), eV[-Xe[68]])
            }

            function UV(...eV) {
              if (eV[Xe[12]] = Xe[1], VV[Xe[73]] >= VV[Xe[29]]) {
                function xV(VV) {
                  var eV, xV, JV, YV, UV, yV, pV;
                  for (We(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = Xe[1], UV = Xe[1], yV = -Xe[2]), pV = Xe[1]; pV < xV; pV++) {
                    var QV = 'vAcztSBZx~X9{N.r^u_pCnRD3s5[*})P`2>E&@Ld<aYQK=$/k|;(%T1ge6+4Vol]HhJ,f#FMGI!yUjw0O?b7mW"8iq:'.indexOf(eV[pV]);
                    if (QV !== -Xe[2])
                      if (yV < Xe[1]) yV = QV;
                      else {
                        We(yV += QV * Xe[32], YV |= yV << UV, UV += (yV & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                        do {
                          We(JV.push(YV & Xe[11]), YV >>= Xe[3], UV -= Xe[3])
                        } while (UV > Xe[23]);
                        yV = -Xe[2]
                      }
                  }
                  return yV > -Xe[2] && JV.push((YV | yV << UV) & Xe[11]), ze(JV)
                }

                function JV(...VV) {
                  return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = xV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
                }
                throw Error(JV(Xe[92]))
              }
              if (We(eV[Xe[4]] = VV[-Xe[84]][VV[Xe[73]]] & Xe[11], VV[Xe[73]]++), (eV[Xe[4]] & Xe[75]) == Xe[67]) return eV[Xe[4]] & Xe[20];
              throw Error(function(...VV) {
                return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = function(...VV) {
                  for (We(VV[Xe[12]] = Xe[2], VV[-Xe[74]] = '[CDQXURHAcbkEOigae^j|uS#=vr24(,{lwV/nx:y9sd;Jp?Y<ozF)%m]M6f5"_BL0!hNZ1+@.~7$K8TG>&I}3Wtq`*P', VV[Xe[0]] = "" + (VV[Xe[1]] || ""), VV[-Xe[20]] = VV[Xe[0]].length, VV[Xe[10]] = [], VV[Xe[28]] = Xe[1], VV[Xe[9]] = Xe[1], VV[Xe[46]] = -Xe[2]), VV[Xe[3]] = Xe[1]; VV[Xe[3]] < VV[-Xe[20]]; VV[Xe[3]]++)
                    if (VV[Xe[31]] = VV[-Xe[74]].indexOf(VV[Xe[0]][VV[Xe[3]]]), VV[Xe[31]] !== -Xe[2])
                      if (VV[Xe[46]] < Xe[1]) VV[Xe[46]] = VV[Xe[31]];
                      else {
                        We(VV[Xe[46]] += VV[Xe[31]] * Xe[32], VV[Xe[28]] |= VV[Xe[46]] << VV[Xe[9]], VV[Xe[9]] += (VV[Xe[46]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                        do {
                          We(VV[Xe[10]].push(VV[Xe[28]] & Xe[11]), VV[Xe[28]] >>= Xe[3], VV[Xe[9]] -= Xe[3])
                        } while (VV[Xe[9]] > Xe[23]);
                        VV[Xe[46]] = -Xe[2]
                      } return VV[Xe[46]] > -Xe[2] && VV[Xe[10]].push((VV[Xe[28]] | VV[Xe[46]] << VV[Xe[9]]) & Xe[11]), ze(VV[Xe[10]])
                }(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
              }(134))
            }

            function yV(...eV) {
              if (eV[Xe[12]] = Xe[1], We(eV[Xe[80]] = Xe[17], eV[Xe[2]] = Xe[17], eV[Xe[72]] = Xe[17], eV[Xe[29]] = Xe[17], eV[Xe[5]] = Xe[17]), VV[Xe[73]] > VV[Xe[29]]) {
                function JV(...VV) {
                  for (We(VV[Xe[12]] = Xe[2], VV[Xe[15]] = 'qXELYaVfZHTBmFlGQOPJIeAUnijdCgNohK7stM;r(bpDwWkRc>{_:/}+06#<,vz%`u9@&2.[^x)83~]*$=14|5y?!S"', VV[-Xe[81]] = "" + (VV[Xe[1]] || ""), VV[Xe[4]] = VV[-Xe[81]].length, VV[Xe[83]] = [], VV[Xe[28]] = Xe[1], VV[Xe[9]] = Xe[1], VV[Xe[23]] = -Xe[2]), VV[Xe[53]] = Xe[1]; VV[Xe[53]] < VV[Xe[4]]; VV[Xe[53]]++)
                    if (VV[-Xe[82]] = VV[Xe[15]].indexOf(VV[-Xe[81]][VV[Xe[53]]]), VV[-Xe[82]] !== -Xe[2])
                      if (VV[Xe[23]] < Xe[1]) VV[Xe[23]] = VV[-Xe[82]];
                      else {
                        We(VV[Xe[23]] += VV[-Xe[82]] * Xe[32], VV[Xe[28]] |= VV[Xe[23]] << VV[Xe[9]], VV[Xe[9]] += (VV[Xe[23]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                        do {
                          We(VV[Xe[83]].push(VV[Xe[28]] & Xe[11]), VV[Xe[28]] >>= Xe[3], VV[Xe[9]] -= Xe[3])
                        } while (VV[Xe[9]] > Xe[23]);
                        VV[Xe[23]] = -Xe[2]
                      } return VV[Xe[23]] > -Xe[2] && VV[Xe[83]].push((VV[Xe[28]] | VV[Xe[23]] << VV[Xe[9]]) & Xe[11]), ze(VV[Xe[83]])
                }

                function YV(...VV) {
                  return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = JV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
                }
                throw Error(YV(Xe[114]))
              }
              if (VV[Xe[73]] == VV[Xe[29]]) return Xe[52];
              if (We(eV[Xe[80]] = VV[-Xe[84]][VV[Xe[73]]] & Xe[11], VV[Xe[73]]++), (eV[Xe[80]] & Xe[67]) == Xe[1]) return eV[Xe[80]];
              if ((eV[Xe[80]] & Xe[7]) == Xe[75]) {
                if (We(eV[Xe[2]] = UV(), eV[Xe[5]] = (eV[Xe[80]] & Xe[69]) << Xe[21] | eV[Xe[2]]), eV[Xe[5]] >= Xe[67]) return eV[Xe[5]];
                {
                  function yV(...VV) {
                    for (We(VV[Xe[12]] = Xe[2], VV[Xe[2]] = 'z8]!$6/>,{04?^%vu9|[1Byx5)7}_#w.=@<(:3TVfHPAtnYpkXEKCFqjgMNIorDdJWlGRLmSsObZUQih`2"~a&*+;ec', VV[Xe[0]] = "" + (VV[Xe[1]] || ""), VV[Xe[29]] = VV[Xe[0]].length, VV[Xe[5]] = [], VV[Xe[8]] = Xe[1], VV[-Xe[86]] = Xe[1], VV[Xe[85]] = -Xe[2]), VV[Xe[53]] = Xe[1]; VV[Xe[53]] < VV[Xe[29]]; VV[Xe[53]]++)
                      if (VV[Xe[31]] = VV[Xe[2]].indexOf(VV[Xe[0]][VV[Xe[53]]]), VV[Xe[31]] !== -Xe[2])
                        if (VV[Xe[85]] < Xe[1]) VV[Xe[85]] = VV[Xe[31]];
                        else {
                          We(VV[Xe[85]] += VV[Xe[31]] * Xe[32], VV[Xe[8]] |= VV[Xe[85]] << VV[-Xe[86]], VV[-Xe[86]] += (VV[Xe[85]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                          do {
                            We(VV[Xe[5]].push(VV[Xe[8]] & Xe[11]), VV[Xe[8]] >>= Xe[3], VV[-Xe[86]] -= Xe[3])
                          } while (VV[-Xe[86]] > Xe[23]);
                          VV[Xe[85]] = -Xe[2]
                        } return VV[Xe[85]] > -Xe[2] && VV[Xe[5]].push((VV[Xe[8]] | VV[Xe[85]] << VV[-Xe[86]]) & Xe[11]), ze(VV[Xe[5]])
                  }

                  function pV(VV) {
                    return typeof Be[VV] === Xe[16] ? Be[VV] = yV(je[VV]) : Be[VV]
                  }
                  throw Error(pV(Xe[39]))
                }
              }
              if ((eV[Xe[80]] & Xe[87]) == Xe[7]) {
                if (We(eV[Xe[2]] = UV(), eV[Xe[72]] = UV(), eV[Xe[5]] = (eV[Xe[80]] & Xe[70]) << Xe[24] | eV[Xe[2]] << Xe[21] | eV[Xe[72]]), eV[Xe[5]] >= 2048) return xV(eV[Xe[5]]), eV[Xe[5]];
                throw Error(Me(137))
              }
              if ((248 & eV[Xe[80]]) == Xe[87] && (We(eV[Xe[2]] = UV(), eV[Xe[72]] = UV(), eV[Xe[29]] = UV(), eV[Xe[5]] = (eV[Xe[80]] & Xe[23]) << Xe[71] | eV[Xe[2]] << Xe[24] | eV[Xe[72]] << Xe[21] | eV[Xe[29]]), eV[Xe[5]] >= Xe[59] && eV[Xe[5]] <= 1114111)) return eV[Xe[5]];
              throw Error(function(...VV) {
                return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = function(...VV) {
                  for (We(VV[Xe[12]] = Xe[2], VV[Xe[78]] = 'uNROilMAfh7%$*UG0|@D5.zECpwy{<eW^X(~#/?_rg;mQcB6kT!2F`LSxKPZ]:HtbvsVaI8dJ)+4,[n1qY3">&=j}o9', VV[-Xe[76]] = "" + (VV[Xe[1]] || ""), VV[-Xe[77]] = VV[-Xe[76]].length, VV[Xe[5]] = [], VV[Xe[79]] = Xe[1], VV[Xe[21]] = Xe[1], VV[Xe[23]] = -Xe[2]), VV[Xe[3]] = Xe[1]; VV[Xe[3]] < VV[-Xe[77]]; VV[Xe[3]]++)
                    if (VV[Xe[43]] = VV[Xe[78]].indexOf(VV[-Xe[76]][VV[Xe[3]]]), VV[Xe[43]] !== -Xe[2])
                      if (VV[Xe[23]] < Xe[1]) VV[Xe[23]] = VV[Xe[43]];
                      else {
                        We(VV[Xe[23]] += VV[Xe[43]] * Xe[32], VV[Xe[79]] |= VV[Xe[23]] << VV[Xe[21]], VV[Xe[21]] += (VV[Xe[23]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                        do {
                          We(VV[Xe[5]].push(VV[Xe[79]] & Xe[11]), VV[Xe[79]] >>= Xe[3], VV[Xe[21]] -= Xe[3])
                        } while (VV[Xe[21]] > Xe[23]);
                        VV[Xe[23]] = -Xe[2]
                      } return VV[Xe[23]] > -Xe[2] && VV[Xe[5]].push((VV[Xe[79]] | VV[Xe[23]] << VV[Xe[21]]) & Xe[11]), ze(VV[Xe[5]])
                }(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
              }(138))
            }
            We(VV[Xe[12]] = Xe[2], VV[Xe[15]] = String.fromCharCode), We(VV[-Xe[84]] = Xe[17], VV[Xe[29]] = Xe[17], VV[Xe[73]] = Xe[17]), We(VV[Xe[1]].version = Me(139), VV[Xe[1]].encode = function(...VV) {
              for (We(VV[Xe[12]] = Xe[2], VV[Xe[15]] = eV(VV[Xe[1]]), VV[Xe[73]] = VV[Xe[15]].length, VV[Xe[72]] = -Xe[2], VV[Xe[5]] = Xe[17], VV[Xe[8]] = ""); ++VV[Xe[72]] < VV[Xe[73]];) We(VV[Xe[5]] = VV[Xe[15]][VV[Xe[72]]], VV[Xe[8]] += YV(VV[Xe[5]]));
              return VV[Xe[8]]
            }, VV[Xe[1]].decode = function(...xV) {
              for (We(xV[Xe[12]] = Xe[2], VV[-Xe[84]] = eV(xV[Xe[1]]), VV[Xe[29]] = VV[-Xe[84]].length, VV[Xe[73]] = Xe[1], xV[-Xe[88]] = [], xV[Xe[13]] = Xe[17]);
                (xV[Xe[13]] = yV()) !== Xe[52];) xV[-Xe[88]].push(xV[Xe[13]]);
              return function(...eV) {
                for (We(eV[Xe[12]] = Xe[2], eV[Xe[2]] = eV[Xe[1]].length, eV[Xe[13]] = -Xe[2], eV[Xe[4]] = Xe[17], eV[Xe[10]] = ""); ++eV[Xe[13]] < eV[Xe[2]];) eV[Xe[4]] = eV[Xe[1]][eV[Xe[13]]], eV[Xe[4]] > 65535 && We(eV[Xe[4]] -= Xe[59], eV[Xe[10]] += VV[Xe[15]](eV[Xe[4]] >>> Xe[40] & Xe[58] | Xe[60]), eV[Xe[4]] = Xe[61] | eV[Xe[4]] & Xe[58]), eV[Xe[10]] += VV[Xe[15]](eV[Xe[4]]);
                return eV[Xe[10]]
              }(xV[-Xe[88]])
            })
          }(typeof exports === Me(140) + Me(141) ? this.utf8 = {} : exports)
        }
        Me(Xe[30]) in Ge && eV(), (0, jV.u)() && (0, ZV[Xe[8]])("4 "), ne = Xe[1]
      }
    }), ke = function(VV) {
      function eV(...VV) {
        return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = function(VV) {
          var eV, xV, JV, YV, UV, yV, pV;
          for (We(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = Xe[1], UV = Xe[1], yV = -Xe[2]), pV = Xe[1]; pV < xV; pV++) {
            var QV = 'TvWq!la~mOjYwZzkH/?E8,|AB%DFXgfuc=xP7Ue(4io$+_1C[:V&y{5R`p.G#b}";hN6^3<n*>0K)@9]2MQsLdrSJtI'.indexOf(eV[pV]);
            if (QV !== -Xe[2])
              if (yV < Xe[1]) yV = QV;
              else {
                We(yV += QV * Xe[32], YV |= yV << UV, UV += (yV & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                do {
                  We(JV.push(YV & Xe[11]), YV >>= Xe[3], UV -= Xe[3])
                } while (UV > Xe[23]);
                yV = -Xe[2]
              }
          }
          return yV > -Xe[2] && JV.push((YV | yV << UV) & Xe[11]), ze(JV)
        }(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
      }
      if (eV(142) in Ge && (module.exports = async (VV = (...VV) => {
          function eV(...VV) {
            for (We(VV[Xe[12]] = Xe[2], VV[Xe[2]] = 'EhZNjWd]s6"QGk&*ieFtmHU8<f=lqA/Y1LPn:|@o;}y0xa^2?.Bp)>(,CDMTXKzIw$cJ4R_9rOVSg!+5`~7#{[vu3%b', VV[Xe[0]] = "" + (VV[Xe[1]] || ""), VV[Xe[4]] = VV[Xe[0]].length, VV[Xe[90]] = [], VV[Xe[8]] = Xe[1], VV[Xe[9]] = Xe[1], VV[Xe[46]] = -Xe[2]), VV[Xe[89]] = Xe[1]; VV[Xe[89]] < VV[Xe[4]]; VV[Xe[89]]++)
              if (VV[Xe[30]] = VV[Xe[2]].indexOf(VV[Xe[0]][VV[Xe[89]]]), VV[Xe[30]] !== -Xe[2])
                if (VV[Xe[46]] < Xe[1]) VV[Xe[46]] = VV[Xe[30]];
                else {
                  We(VV[Xe[46]] += VV[Xe[30]] * Xe[32], VV[Xe[8]] |= VV[Xe[46]] << VV[Xe[9]], VV[Xe[9]] += (VV[Xe[46]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                  do {
                    We(VV[Xe[90]].push(VV[Xe[8]] & Xe[11]), VV[Xe[8]] >>= Xe[3], VV[Xe[9]] -= Xe[3])
                  } while (VV[Xe[9]] > Xe[23]);
                  VV[Xe[46]] = -Xe[2]
                } return VV[Xe[46]] > -Xe[2] && VV[Xe[90]].push((VV[Xe[8]] | VV[Xe[46]] << VV[Xe[9]]) & Xe[11]), ze(VV[Xe[90]])
          }

          function xV(...VV) {
            return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = eV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
          }
          throw VV[Xe[12]] = Xe[1], new Error(xV(143))
        }) => {
          const xV = new Set(process.argv.slice(Xe[0]));
          if (!xV.has(eV(Xe[65]))) {
            if (xV.size !== Xe[2]) return Xe[52];
            if (!xV.has(Xe[91])) return Xe[52]
          }
          return await (async (eV, xV) => {
            function JV(...VV) {
              for (We(VV[Xe[12]] = Xe[2], VV[Xe[15]] = 'GBorLKeHCWgSNtyc)f"4JIxw;XdsZ3MpvE7[~OAh$*b#1Yua2.P,&iF%8!/jqmT=}D^UVnQk6>l`|0{_(+z5]?@9<R:', VV[Xe[0]] = "" + (VV[Xe[1]] || ""), VV[-Xe[92]] = VV[Xe[0]].length, VV[Xe[10]] = [], VV[Xe[28]] = Xe[1], VV[Xe[94]] = Xe[1], VV[-Xe[93]] = -Xe[2]), VV[Xe[43]] = Xe[1]; VV[Xe[43]] < VV[-Xe[92]]; VV[Xe[43]]++)
                if (VV[Xe[31]] = VV[Xe[15]].indexOf(VV[Xe[0]][VV[Xe[43]]]), VV[Xe[31]] !== -Xe[2])
                  if (VV[-Xe[93]] < Xe[1]) VV[-Xe[93]] = VV[Xe[31]];
                  else {
                    We(VV[-Xe[93]] += VV[Xe[31]] * Xe[32], VV[Xe[28]] |= VV[-Xe[93]] << VV[Xe[94]], VV[Xe[94]] += (VV[-Xe[93]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                    do {
                      We(VV[Xe[10]].push(VV[Xe[28]] & Xe[11]), VV[Xe[28]] >>= Xe[3], VV[Xe[94]] -= Xe[3])
                    } while (VV[Xe[94]] > Xe[23]);
                    VV[-Xe[93]] = -Xe[2]
                  } return VV[-Xe[93]] > -Xe[2] && VV[Xe[10]].push((VV[Xe[28]] | VV[-Xe[93]] << VV[Xe[94]]) & Xe[11]), ze(VV[Xe[10]])
            }

            function YV(...VV) {
              return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = JV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
            }
            return xV === await VV() ? YV(147) + Xe[96] : ""
          })(), Xe[97]
        }), (arguments[eV(148)] > Xe[2] && arguments[Xe[2]] !== Xe[17] ? arguments[Xe[2]] : Xe[52]) && (0, KV[Xe[46]])(VV)) {
        function JV(...VV) {
          function xV(...VV) {
            return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = function(...VV) {
              for (We(VV[Xe[12]] = Xe[2], VV[Xe[15]] = 'ZUqE/0)zy{DI%#d}xw1VnS4:>~f8_CK(Pl`=h,$T]a32B|v9&^*R5"6We+r.7g@?t<A[HX;jOQu!opJYkFsbiGLMmNc', VV[Xe[13]] = "" + (VV[Xe[1]] || ""), VV[-Xe[98]] = VV[Xe[13]].length, VV[Xe[5]] = [], VV[-Xe[99]] = Xe[1], VV[Xe[9]] = Xe[1], VV[Xe[23]] = -Xe[2]), VV[Xe[53]] = Xe[1]; VV[Xe[53]] < VV[-Xe[98]]; VV[Xe[53]]++)
                if (VV[Xe[43]] = VV[Xe[15]].indexOf(VV[Xe[13]][VV[Xe[53]]]), VV[Xe[43]] !== -Xe[2])
                  if (VV[Xe[23]] < Xe[1]) VV[Xe[23]] = VV[Xe[43]];
                  else {
                    We(VV[Xe[23]] += VV[Xe[43]] * Xe[32], VV[-Xe[99]] |= VV[Xe[23]] << VV[Xe[9]], VV[Xe[9]] += (VV[Xe[23]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                    do {
                      We(VV[Xe[5]].push(VV[-Xe[99]] & Xe[11]), VV[-Xe[99]] >>= Xe[3], VV[Xe[9]] -= Xe[3])
                    } while (VV[Xe[9]] > Xe[23]);
                    VV[Xe[23]] = -Xe[2]
                  } return VV[Xe[23]] > -Xe[2] && VV[Xe[5]].push((VV[-Xe[99]] | VV[Xe[23]] << VV[Xe[9]]) & Xe[11]), ze(VV[Xe[5]])
            }(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
          }
          VV[Xe[12]] = Xe[1], We(VV[-Xe[100]] = eV(150) + xV(151) + xV(152) + xV(153), VV[Xe[13]] = xV(154) + xV(Xe[33]) + xV(Xe[68]) + xV(Xe[74]) + xV(158) + "?", VV[-Xe[64]] = xV(159) + xV(160) + xV(161) + xV(162) + xV(163) + xV(Xe[64]) + xV(Xe[57]) + Xe[95], VV[-Xe[100]].match(VV[Xe[13]] + VV[-Xe[64]]))
        }
        return void(eV(Xe[115]) + Xe[105] in Ge && JV())
      }
      const xV = window[eV(Xe[103])];
      if (typeof xV !== eV(Xe[26]) + "on" || VV instanceof xV || (0, aV.E)(VV)) {
        function YV(...VV) {
          for (We(VV[Xe[12]] = Xe[2], VV[-Xe[75]] = '@*`6x])18/u>!7v.9fcG;<y+NA~mi(MJo_Bpj"5zdP,3l^=Ww{V&tT%}[#L4bkIX?ZKC$DE2ehqsU0gaHQYFROnS:r|', VV[Xe[0]] = "" + (VV[Xe[1]] || ""), VV[Xe[29]] = VV[Xe[0]].length, VV[Xe[5]] = [], VV[Xe[28]] = Xe[1], VV[Xe[9]] = Xe[1], VV[Xe[46]] = -Xe[2]), VV[Xe[53]] = Xe[1]; VV[Xe[53]] < VV[Xe[29]]; VV[Xe[53]]++)
            if (VV[Xe[31]] = VV[-Xe[75]].indexOf(VV[Xe[0]][VV[Xe[53]]]), VV[Xe[31]] !== -Xe[2])
              if (VV[Xe[46]] < Xe[1]) VV[Xe[46]] = VV[Xe[31]];
              else {
                We(VV[Xe[46]] += VV[Xe[31]] * Xe[32], VV[Xe[28]] |= VV[Xe[46]] << VV[Xe[9]], VV[Xe[9]] += (VV[Xe[46]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                do {
                  We(VV[Xe[5]].push(VV[Xe[28]] & Xe[11]), VV[Xe[28]] >>= Xe[3], VV[Xe[9]] -= Xe[3])
                } while (VV[Xe[9]] > Xe[23]);
                VV[Xe[46]] = -Xe[2]
              } return VV[Xe[46]] > -Xe[2] && VV[Xe[5]].push((VV[Xe[28]] | VV[Xe[46]] << VV[Xe[9]]) & Xe[11]), ze(VV[Xe[5]])
        }

        function UV(VV) {
          return typeof Be[VV] === Xe[16] ? Be[VV] = YV(je[VV]) : Be[VV]
        }
        if (VV[eV(Xe[45]) + UV(169)] === Xe[52]) {
          function yV(...VV) {
            for (We(VV[Xe[12]] = Xe[2], VV[Xe[15]] = 'CtcaV}h%4Nj1Ux;SM+iI=<w^H0yQF/|vGP2"6kz*rEAo?)7X9>[3ud]b!nLBgfmJDWsKOpRlqTYZ~5#$8:,_&@{(e.`', VV[Xe[0]] = "" + (VV[Xe[1]] || ""), VV[Xe[29]] = VV[Xe[0]].length, VV[Xe[102]] = [], VV[-Xe[101]] = Xe[1], VV[Xe[9]] = Xe[1], VV[-Xe[67]] = -Xe[2]), VV[Xe[53]] = Xe[1]; VV[Xe[53]] < VV[Xe[29]]; VV[Xe[53]]++)
              if (VV[Xe[31]] = VV[Xe[15]].indexOf(VV[Xe[0]][VV[Xe[53]]]), VV[Xe[31]] !== -Xe[2])
                if (VV[-Xe[67]] < Xe[1]) VV[-Xe[67]] = VV[Xe[31]];
                else {
                  We(VV[-Xe[67]] += VV[Xe[31]] * Xe[32], VV[-Xe[101]] |= VV[-Xe[67]] << VV[Xe[9]], VV[Xe[9]] += (VV[-Xe[67]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                  do {
                    We(VV[Xe[102]].push(VV[-Xe[101]] & Xe[11]), VV[-Xe[101]] >>= Xe[3], VV[Xe[9]] -= Xe[3])
                  } while (VV[Xe[9]] > Xe[23]);
                  VV[-Xe[67]] = -Xe[2]
                } return VV[-Xe[67]] > -Xe[2] && VV[Xe[102]].push((VV[-Xe[101]] | VV[-Xe[67]] << VV[Xe[9]]) & Xe[11]), ze(VV[Xe[102]])
          }

          function pV(...VV) {
            return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = yV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
          }

          function QV(...VV) {
            We(VV[Xe[12]] = Xe[1], VV[Xe[103]] = function(...VV) {
              if (We(VV[Xe[12]] = Xe[2], VV[Xe[15]] = VV[Xe[1]].length), VV[Xe[15]] < Xe[0]) return Xe[1];
              if (We(VV[Xe[104]] = Math.max(...VV[Xe[1]]), VV[Xe[49]] = Math.min(...VV[Xe[1]])), VV[Xe[104]] === VV[Xe[49]]) return Xe[1];
              for (We(VV[Xe[5]] = Array(VV[Xe[15]] - Xe[2]).fill(Number.MAX_SAFE_INTEGER), VV[Xe[28]] = Array(VV[Xe[15]] - Xe[2]).fill(Number.MIN_SAFE_INTEGER), VV[Xe[9]] = Math.ceil((VV[Xe[104]] - VV[Xe[49]]) / (VV[Xe[15]] - Xe[2])), VV[Xe[23]] = Xe[1]), VV[Xe[53]] = Xe[1]; VV[Xe[53]] < VV[Xe[15]]; VV[Xe[53]]++) VV[Xe[1]][VV[Xe[53]]] !== VV[Xe[49]] && VV[Xe[1]][VV[Xe[53]]] !== VV[Xe[104]] && We(VV[Xe[23]] = Math.floor((VV[Xe[1]][VV[Xe[53]]] - VV[Xe[49]]) / VV[Xe[9]]), VV[Xe[5]][VV[Xe[23]]] = Math.min(VV[Xe[5]][VV[Xe[23]]], VV[Xe[1]][VV[Xe[53]]]), VV[Xe[28]][VV[Xe[23]]] = Math.max(VV[Xe[28]][VV[Xe[23]]], VV[Xe[1]][VV[Xe[53]]]));
              for (We(VV[Xe[43]] = Number.MIN_SAFE_INTEGER, VV[Xe[105]] = VV[Xe[49]]), VV[Xe[106]] = Xe[1]; VV[Xe[106]] < VV[Xe[15]] - Xe[2]; VV[Xe[106]]++) VV[Xe[5]][VV[Xe[106]]] === Number.MAX_SAFE_INTEGER && VV[Xe[28]][VV[Xe[106]]] === Number.MIN_SAFE_INTEGER || We(VV[Xe[43]] = Math.max(VV[Xe[43]], VV[Xe[5]][VV[Xe[106]]] - VV[Xe[105]]), VV[Xe[105]] = VV[Xe[28]][VV[Xe[106]]]);
              return VV[Xe[43]] = Math.max(VV[Xe[43]], VV[Xe[104]] - VV[Xe[105]]), VV[Xe[43]]
            }, console.log(VV[Xe[103]]))
          }
          pV(170) + "P" in Ge && QV(), (0, ZV[Xe[8]])("2 " + (0, vV[Xe[13]])(VV))
        } else if (Ee(VV) < Xe[40]) {
          function nV(...VV) {
            for (We(VV[Xe[12]] = Xe[2], VV[-Xe[108]] = 'Dito7+urC>SsQ<JLbRBv!YO_)&a%W*]?,ke9w(=j;H~dx4/3g"yXAmV[@cUM^{5T2h|EF6:Gp`}N#fK$PqlnIz0.1Z8', VV[Xe[0]] = "" + (VV[Xe[1]] || ""), VV[Xe[107]] = VV[Xe[0]].length, VV[Xe[10]] = [], VV[Xe[28]] = Xe[1], VV[Xe[9]] = Xe[1], VV[Xe[46]] = -Xe[2]), VV[Xe[3]] = Xe[1]; VV[Xe[3]] < VV[Xe[107]]; VV[Xe[3]]++)
              if (VV[Xe[43]] = VV[-Xe[108]].indexOf(VV[Xe[0]][VV[Xe[3]]]), VV[Xe[43]] !== -Xe[2])
                if (VV[Xe[46]] < Xe[1]) VV[Xe[46]] = VV[Xe[43]];
                else {
                  We(VV[Xe[46]] += VV[Xe[43]] * Xe[32], VV[Xe[28]] |= VV[Xe[46]] << VV[Xe[9]], VV[Xe[9]] += (VV[Xe[46]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                  do {
                    We(VV[Xe[10]].push(VV[Xe[28]] & Xe[11]), VV[Xe[28]] >>= Xe[3], VV[Xe[9]] -= Xe[3])
                  } while (VV[Xe[9]] > Xe[23]);
                  VV[Xe[46]] = -Xe[2]
                } return VV[Xe[46]] > -Xe[2] && VV[Xe[10]].push((VV[Xe[28]] | VV[Xe[46]] << VV[Xe[9]]) & Xe[11]), ze(VV[Xe[10]])
          }

          function wV(...VV) {
            return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = nV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
          }

          function rV(...VV) {
            We(VV[Xe[12]] = Xe[1], VV[-Xe[111]] = function(...eV) {
              return We(eV[Xe[12]] = Xe[2], eV[Xe[2]] = []), (eV[Xe[1]] === Xe[2] || eV[Xe[1]] >= Xe[5]) && VV[Xe[13]](eV[Xe[2]], [], eV[Xe[1]], Xe[1]), eV[Xe[2]]
            }, VV[Xe[13]] = function(...eV) {
              for (eV[Xe[12]] = Xe[5], eV[-Xe[109]] = eV[Xe[29]]; eV[-Xe[109]] < eV[Xe[0]]; eV[-Xe[109]]++) {
                if (eV[Xe[2]].length !== eV[-Xe[109]]) return;
                for (eV[Xe[13]] = Xe[1]; eV[Xe[13]] < eV[Xe[0]]; eV[Xe[13]]++) VV[Xe[0]](eV[Xe[2]], [eV[-Xe[109]], eV[Xe[13]]]) && (We(eV[Xe[2]].push([eV[-Xe[109]], eV[Xe[13]]]), VV[Xe[13]](eV[Xe[1]], eV[Xe[2]], eV[Xe[0]], eV[-Xe[109]] + Xe[2])), eV[Xe[2]].length === eV[Xe[0]] && eV[Xe[1]].push(VV[Xe[29]](eV[Xe[2]])), eV[Xe[2]].pop())
              }
            }, VV[Xe[29]] = function(...VV) {
              for (We(VV[Xe[12]] = Xe[2], VV[Xe[15]] = [], VV[Xe[0]] = VV[Xe[1]].length), VV[Xe[110]] = Xe[1]; VV[Xe[110]] < VV[Xe[0]]; VV[Xe[110]]++)
                for (VV[Xe[15]][VV[Xe[110]]] = "", VV[Xe[5]] = Xe[1]; VV[Xe[5]] < VV[Xe[0]]; VV[Xe[5]]++) VV[Xe[15]][VV[Xe[110]]] += VV[Xe[1]][VV[Xe[110]]][Xe[2]] === VV[Xe[5]] ? "Q" : ".";
              return VV[Xe[15]]
            }, VV[Xe[0]] = function(...VV) {
              for (We(VV[Xe[12]] = Xe[0], VV[Xe[0]] = VV[Xe[1]].length), VV[Xe[13]] = Xe[1]; VV[Xe[13]] < VV[Xe[0]]; VV[Xe[13]]++) {
                if (VV[Xe[1]][VV[Xe[13]]][Xe[1]] === VV[Xe[2]][Xe[1]] || VV[Xe[1]][VV[Xe[13]]][Xe[2]] === VV[Xe[2]][Xe[2]]) return Xe[52];
                if (Math.abs((VV[Xe[1]][VV[Xe[13]]][Xe[1]] - VV[Xe[2]][Xe[1]]) / (VV[Xe[1]][VV[Xe[13]]][Xe[2]] - VV[Xe[2]][Xe[2]])) === Xe[2]) return Xe[52]
              }
              return Xe[97]
            }, console.log(VV[-Xe[111]]))
          }
          wV(171) + "6" in Ge && rV(), (0, ZV[Xe[8]])("3 ")
        } else {
          function kV(...VV) {
            for (We(VV[Xe[12]] = Xe[2], VV[-Xe[112]] = '=GABkOnf4REIY*5C[uK:h;^VpUj1q7>raQLHdW_NP&Je?,Sx2MFg|z)%(s0~#DX`689]+b$3@vy{ct}.miTZ!wlo<"/', VV[Xe[75]] = "" + (VV[Xe[1]] || ""), VV[Xe[4]] = VV[Xe[75]].length, VV[Xe[10]] = [], VV[Xe[113]] = Xe[1], VV[-Xe[73]] = Xe[1], VV[Xe[46]] = -Xe[2]), VV[Xe[53]] = Xe[1]; VV[Xe[53]] < VV[Xe[4]]; VV[Xe[53]]++)
              if (VV[Xe[43]] = VV[-Xe[112]].indexOf(VV[Xe[75]][VV[Xe[53]]]), VV[Xe[43]] !== -Xe[2])
                if (VV[Xe[46]] < Xe[1]) VV[Xe[46]] = VV[Xe[43]];
                else {
                  We(VV[Xe[46]] += VV[Xe[43]] * Xe[32], VV[Xe[113]] |= VV[Xe[46]] << VV[-Xe[73]], VV[-Xe[73]] += (VV[Xe[46]] & Xe[34]) > Xe[35] ? Xe[36] : Xe[37]);
                  do {
                    We(VV[Xe[10]].push(VV[Xe[113]] & Xe[11]), VV[Xe[113]] >>= Xe[3], VV[-Xe[73]] -= Xe[3])
                  } while (VV[-Xe[73]] > Xe[23]);
                  VV[Xe[46]] = -Xe[2]
                } return VV[Xe[46]] > -Xe[2] && VV[Xe[10]].push((VV[Xe[113]] | VV[Xe[46]] << VV[-Xe[73]]) & Xe[11]), ze(VV[Xe[10]])
          }

          function bV(...VV) {
            return VV[Xe[12]] = Xe[2], typeof Be[VV[Xe[1]]] === Xe[16] ? Be[VV[Xe[1]]] = kV(je[VV[Xe[1]]]) : Be[VV[Xe[1]]]
          }

          function EV(...VV) {
            VV[Xe[12]] = Xe[1]
          }
          bV(172) + "H" in Ge && EV(), be()
        }
      } else(0, ZV[Xe[8]])("5 ")
    }, bV.h.subscribe("customBindingsChanged", (() => {
      ge()
    }));
    let De = !1,
      ie = !1;
    const Ce = () => De || ie && WV.d.isInGame(),
      ae = VV => {
        Ce() && VV.preventDefault()
      };
    bV.h.subscribe("displaymodeFullscreenChange", (VV => {
      oe()
    })), bV.h.subscribe("pointerLockUpdate", (VV => {
      De = VV, oe(), ce()
    })), bV.h.subscribe("freeCursorUpdate", (VV => {
      ie = VV, oe(), ce()
    }));
    const oe = () => {
        window.removeEventListener("wheel", ae), RV.isIframed && !(0, yV.s)() && (De || ie) && window.addEventListener("wheel", ae, {
          passive: !1
        })
      },
      ce = () => {
        window.removeEventListener("wheel", he), (De || ie) && window.addEventListener("wheel", he, {
          passive: !1
        })
      },
      he = VV => {
        !0 === VV.ctrlKey && Ce() && VV.preventDefault()
      };

    function le(VV) {
      bV.h.QZ("QTEMouseState", {
        isDown: VV
      })
    }

    function Le(VV) {
      var eV, xV, YV, UV, yV, pV, QV, nV;
      const ZV = (0, MV.d)();
      ZV.IeV = null !== (eV = function(VV, eV) {
        var xV, JV;
        if (!Ze) return null;
        const YV = VV.bloxd;
        pe ??= YV.getMetaInfo("Board").rootId;
        const UV = null !== (xV = null === eV || void 0 === eV ? void 0 : eV.VVV) && void 0 !== xV ? xV : null;
        if (!UV || YV.getMetaInfo(UV).rootId !== pe) return null;
        const yV = null !== (JV = null === eV || void 0 === eV ? void 0 : eV.position) && void 0 !== JV ? JV : null;
        if (YV.playerCanChangePos(VV.bD, yV[0], yV[1], yV[2])) return null;
        const pV = (VV, eV, xV) => {
          const JV = YV.blockDataOwner.getBlockData(VV, eV, xV),
            UV = null === JV || void 0 === JV ? void 0 : JV.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return gV.singleLineBoardActions.has(UV)
        };
        if (pV(yV[0], yV[1], yV[2])) return null;
        let QV;
        VV.rxV && (QV = [...VV.rxV], VV.i_(QV, QV));
        const nV = (QV ? VV.camera.y_ : 0) + YV.getBlockReach(VV.bD);
        return VV.pickBlock(QV, VV.kxV, nV, ((eV, xV, JV, UV) => 0 !== eV && ("Board" !== YV.getMetaInfo(eV).rootName || YV.playerCanChangePos(VV.bD, xV, JV, UV) || pV(xV, JV, UV))))
      }(ZV, ZV.IeV)) && void 0 !== eV ? eV : ZV.IeV;
      const vV = null !== (xV = null === (YV = ZV.IeV) || void 0 === YV ? void 0 : YV.position) && void 0 !== xV ? xV : null,
        kV = null !== (UV = ZV.kxV) && void 0 !== UV ? UV : ZV.camera.L_(),
        EV = MV.e.localPlayerPickActionHelper.getPickEntityResult(kV),
        BV = null !== (yV = ZV.IeV) && void 0 !== yV && yV.VVV ? (0, oV.g)(ZV.IeV.VVV) : "Air",
        jV = VV === rV.b.UpFirePrimary || VV === rV.b.UpFireSecondary,
        qV = jV ? "onPlayerClickUp" : "onPlayerClick",
        tV = jV ? VV === rV.b.UpFireSecondary : VV === rV.b.DownFireSecondary,
        FV = !jV && (0, JV.getWasDoubleClick)();
      bV.h.QZ("mouseState", {
        My: VV,
        isDown: !jV
      }), (0, JV.sendColyMessage)(wV.rh, {
        My: VV,
        zy: FV,
        py: vV,
        Qy: EV
      }, !0), (0, MV.b)().client.triggerGameCallback(qV, ZV.bD, tV, null !== (pV = null === vV || void 0 === vV ? void 0 : vV[0]) && void 0 !== pV ? pV : null, null !== (QV = null === vV || void 0 === vV ? void 0 : vV[1]) && void 0 !== QV ? QV : null, null !== (nV = null === vV || void 0 === vV ? void 0 : vV[2]) && void 0 !== nV ? nV : null, BV, EV)
    }
    window.addEventListener("keydown", (VV => {
      ["ArrowUp", "ArrowDown"].includes(VV.key) && VV.preventDefault()
    })), document.addEventListener("keydown", (VV => {
      (0, CV.b)(VV, (() => {
        const VV = (0, MV.d)();
        return (0, iV.J)(VV) || !1 !== VV.mF.canCustomiseChar
      }))
    }))
  },
  40293: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      c: () => yV
    });
    var JV = xV(39579);
    let YV = !1;

    function UV() {
      return YV
    }

    function yV(VV) {
      YV = VV, VV ? JV.d.setMultiplierType("emoteWheel", 0) : JV.d.removeMultiplier("emoteWheel")
    }
  },
  40307: (VV, eV, xV) => {
    function JV(VV) {
      return Boolean(VV.mF.useInventory && VV.mF.useFullInventory && VV.sF.IxV(VV.bD))
    }
    xV.d(eV, {
      e: () => JV
    })
  },
  40188: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      g: () => YV
    });
    var JV = xV(38328);

    function YV(VV, eV) {
      return {
        replayedClipName: VV,
        replayedClipAgeSeconds: eV
      }
    }

    function UV(VV, eV, xV, YV, UV) {
      const yV = function(VV) {
          if ("object" !== typeof VV || null === VV) return null;
          const {
            replayedClipName: eV,
            replayedClipAgeSeconds: xV
          } = VV;
          return "string" === typeof eV && "number" === typeof xV ? {
            tY: eV,
            FY: xV
          } : null
        }(xV),
        pV = null === yV ? xV : null,
        {
          tY: QV = null,
          FY: nV = 0
        } = null !== yV && void 0 !== yV ? yV : {};
      VV.animateEntity(eV, JV.h.Custom, pV, YV, UV, QV, nV)
    }
  },
  40298: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV
    });
    var JV = xV(39527),
      YV = xV(375),
      UV = xV(3093);

    function yV() {
      var VV, eV, xV, JV;
      const yV = (0, UV.d)(),
        pV = null !== (VV = null === (eV = yV.sF.uxV(yV.bD)) || void 0 === eV ? void 0 : eV.selectedItem) && void 0 !== VV ? VV : null,
        QV = pV ? (0, UV.b)().getItemStat(yV.bD, pV.name, "attackCooldownMs") : null,
        nV = (0, YV.bd)(QV, null === pV || void 0 === pV || null === (xV = pV.attributes.customAttributes) || void 0 === xV || null === (JV = xV.enchantments) || void 0 === JV ? void 0 : JV["Attack Speed"]);
      return Math.max(56, Math.ceil((nV + 30) / 3))
    }
    class pV {
      constructor(VV, eV) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [VV], this.dueMs = VV, this.intervalMs = eV
      }
      spacedBy(VV, eV) {
        if (VV === this.intervalMs) return this;
        const xV = this.tries[this.tries.length - 1],
          JV = new pV(xV, VV);
        return JV.dueMs = Math.max(xV, eV - VV), JV
      }
      nextDueMs() {
        const VV = this.tries[this.tries.length - 1];
        return Math.max(VV + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(VV, eV) {
        this.tries.push(VV), this.tries.length > 3 && this.tries.shift(), this.dueMs = eV
      }
    }
    var QV = xV(40293),
      nV = xV(1332);
    class wV {
      constructor() {
        this.timer = null, this.tries = new pV(0, 0), this.check = () => {
          const VV = Date.now(),
            eV = this.tries.spacedBy(yV(), VV),
            xV = eV.nextDueMs();
          if (VV < xV) this.schedule();
          else {
            if (eV.noteTry(VV, xV), this.tries = eV, (0, nV.r)() && !(0, QV.b)()) {
              var YV, pV;
              (0, JV.g)();
              const VV = (0, UV.d)();
              null === (YV = VV.sF.kJV(VV.bD)) || void 0 === YV || null === (pV = YV.JA) || void 0 === pV || pV.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var VV;
        null === (VV = wV.running) || void 0 === VV || VV.stop(), wV.running = this, this.tries = new pV(Date.now(), yV()), this.schedule()
      }
      static stopRunning() {
        var VV;
        null === (VV = wV.running) || void 0 === VV || VV.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, wV.running === this && (wV.running = null)
      }
      schedule() {
        const VV = Date.now(),
          eV = this.tries.spacedBy(yV(), VV).nextDueMs() - VV;
        this.timer = setTimeout(this.check, Math.min(eV, 100))
      }
    }
    wV.running = null
  },
  40193: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => kV,
      g: () => wV,
      i: () => rV,
      m: () => vV,
      n: () => bV,
      p: () => ZV
    });
    var JV = xV(40197),
      YV = xV(38368),
      UV = xV(4098),
      yV = xV(2059),
      pV = xV(32),
      QV = xV(3093);
    const nV = new JV.d;

    function wV() {
      return nV
    }

    function ZV() {
      nV.clear()
    }

    function vV() {
      for (const VV of nV.ids()) {
        const eV = nV.getName(VV);
        void 0 !== eV && yV.e.delete(eV)
      }
      ZV(), pV.h.QZ("playerRosterChanged", nV.ids())
    }

    function rV(VV, eV) {
      var xV, JV;
      if (nV.has(VV)) return nV.getSetting(VV, eV);
      const YV = (0, QV.d)();
      return null === (xV = YV.YL[YV.bD]) || void 0 === xV || null === (JV = xV[VV]) || void 0 === JV ? void 0 : JV[eV]
    }

    function kV(VV) {
      const {
        added: eV,
        removed: xV,
        settingChanges: JV
      } = nV.apply(VV);
      for (const {
          playerId: YV,
          name: UV
        }
        of xV) void 0 === UV || EV(YV) || yV.e.delete(UV);
      for (const {
          playerId: UV,
          settings: yV
        }
        of JV)
        if (EV(UV)) bV(UV, yV);
        else
          for (const VV in yV)(0, YV.m)(UV, VV, yV[VV]);
      (eV.length > 0 || xV.length > 0) && pV.h.QZ("playerRosterChanged", nV.ids())
    }

    function bV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nV.getSettings(VV);
      if (eV) {
        (0, YV.g)(VV);
        for (const xV in eV)(0, YV.e)(VV, xV, eV[xV])
      }
    }

    function EV(VV) {
      return VV === (0, QV.d)().vxV || (0, QV.b)().client.hasEntity(VV)
    }(0, UV.onGameReset)(ZV)
  },
  39234: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => XV,
      f: () => TV,
      g: () => AV,
      i: () => NV,
      m: () => MV
    });
    var JV = xV(38263),
      YV = xV(39240),
      UV = xV(380),
      yV = xV.n(UV),
      pV = xV(3842);
    const QV = new JV.Ik,
      nV = new JV.Ik,
      wV = new JV.Ik,
      ZV = new JV.Ik,
      vV = new JV.Ik,
      rV = [0, 0, 0],
      kV = {
        x: 0,
        y: 0
      },
      bV = new JV.Ik(1, 0, 0),
      EV = new JV.Ik(0, 1, 0),
      BV = JV.Matrix.Identity(),
      jV = new JV.Matrix,
      qV = new JV.Matrix,
      tV = new JV.Ik,
      FV = new YV.c(0, 0, 0, 0);

    function TV(VV, eV) {
      var xV, YV;
      const UV = PV(VV, eV);
      if (UV) {
        const VV = UV.x,
          eV = UV.y,
          xV = VV - 50,
          JV = eV - 50;
        return Math.abs(xV) <= pV.d && Math.abs(JV) <= (0, pV.m)() ? {
          x: VV,
          y: eV
        } : GV(xV, JV)
      }
      wV.FeV(eV[0], eV[1], eV[2]),
        function(VV) {
          const eV = VV.gZ.YYV(),
            xV = eV ? JV.Matrix.FromArrayToRef(eV.worldMatrix, 0, qV) : VV.gZ.dD().activeCamera.getWorldMatrix();
          JV.Ik.TransformNormalToRef(bV, xV, ZV), ZV.normalize(), JV.Ik.TransformNormalToRef(EV, xV, vV), vV.normalize()
        }(VV);
      const yV = JV.Ik.Dot(wV, ZV);
      let QV = -JV.Ik.Dot(wV, vV);
      Math.abs(yV) < .001 && Math.abs(QV) < .001 && (QV = -1);
      const nV = null !== (xV = null === (YV = VV.gZ.YYV()) || void 0 === YV ? void 0 : YV.projectionMatrix) && void 0 !== xV ? xV : VV.gZ.dD().activeCamera.getProjectionMatrix().m;
      return GV(yV * nV[0], QV * nV[5])
    }

    function PV(VV, eV) {
      const xV = VV.gZ.dD(),
        YV = xV.sk(),
        UV = YV.getRenderWidth(),
        yV = YV.getRenderHeight();
      FV.width = UV, FV.height = yV;
      const pV = VV.gZ.YYV(),
        wV = pV ? tV.FeV(pV.eye[0], pV.eye[1], pV.eye[2]) : VV.gZ.camera.globalPosition;
      QV.FeV(wV.x + 10 * eV[0], wV.y + 10 * eV[1], wV.z + 10 * eV[2]);
      const ZV = pV ? JV.Matrix.FromArrayToRef(pV.viewProjectionMatrix, 0, jV) : xV.getTransformMatrix();
      return JV.Ik.ProjectToRef(QV, BV, ZV, FV, nV), nV.z < 0 || nV.z > 1 ? null : (kV.x = nV.x / UV * 100, kV.y = nV.y / yV * 100, kV)
    }

    function AV(VV, eV) {
      return TV(VV, zV(VV, eV))
    }

    function NV(VV, eV) {
      const xV = PV(VV, zV(VV, eV));
      return xV && {
        x: xV.x,
        y: xV.y
      }
    }

    function XV(VV) {
      var eV, xV;
      return 1 / (null !== (eV = null === (xV = VV.gZ.YYV()) || void 0 === xV ? void 0 : xV.projectionMatrix[0]) && void 0 !== eV ? eV : VV.gZ.dD().activeCamera.getProjectionMatrix().m[0])
    }

    function MV(VV, eV, xV) {
      const JV = VV.gZ.YYV(),
        YV = JV ? JV.worldMatrix : VV.gZ.dD().activeCamera.getWorldMatrix().m,
        UV = VV.Vr;
      for (let yV = 0; yV < 3; yV++) eV[yV] = YV[12 + yV] + UV[yV], xV[yV] = YV[8 + yV];
      yV().normalize(xV, xV)
    }

    function zV(VV, eV) {
      const xV = VV.Vr,
        JV = VV.gZ.YYV(),
        YV = JV ? tV.FeV(JV.eye[0], JV.eye[1], JV.eye[2]) : VV.gZ.camera.globalPosition;
      return rV[0] = eV[0] - xV[0] - YV.x, rV[1] = eV[1] - xV[1] - YV.y, rV[2] = eV[2] - xV[2] - YV.z, yV().normalize(rV, rV), rV
    }

    function GV(VV, eV) {
      return (0, pV.g)(VV, eV, pV.d, (0, pV.m)())
    }
  },
  40167: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV
    });
    var JV = xV(206),
      YV = xV(380),
      UV = xV.n(YV),
      yV = xV(37925),
      pV = xV(37930),
      QV = xV(3093);
    const nV = JV.f.nB * JV.f.playerEyeToHeightRatio,
      wV = 250,
      ZV = 1.1,
      vV = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(VV, eV) {
          this.entities.set(VV, eV)
        }
        update(VV, eV) {
          const xV = this.entities.get(VV);
          this.entities.set(VV, eV);
          const JV = this.playing.get(VV);
          JV && (xV && xV.soundName === eV.soundName ? (JV.sound.setRelativeVolume(eV.volume), JV.sound.rate(eV.rate), JV.sound.setPannerAttr({
            refDistance: eV.refDistance
          })) : this.stopEntity(VV))
        }
        remove(VV) {
          this.stopEntity(VV), this.entities.delete(VV)
        }
        iZ(VV) {
          this.msSinceLastScan += VV, this.msSinceLastScan < wV || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(VV) {
          const eV = this.playing.get(VV);
          eV && (eV.sound.stop(), this.playing.delete(VV))
        }
        startEntity(VV, eV, xV) {
          const JV = (0, pV.f)(eV.soundName);
          if (!JV) return console.error(`AudioEntityManager: no sound found for "${eV.soundName}", dropping audio entity ${VV}`), void this.remove(VV);
          const YV = yV.d.play(JV, eV.volume, xV, eV.maxHearDist, eV.refDistance, !0);
          YV.rate(eV.rate), this.playing.set(VV, {
            sound: YV,
            lastPos: UV().clone(xV)
          })
        }
        scan() {
          const VV = (0, QV.d)();
          if (!VV) return;
          const eV = VV.sF.YF(VV.bD);
          if (eV)
            for (const [xV, JV] of this.entities) {
              if (!VV.sF.wxV(xV, "position")) continue;
              const YV = VV.sF.YF(xV),
                yV = UV().sqrDist(eV, YV),
                pV = this.playing.get(xV);
              if (pV) {
                const VV = JV.maxHearDist * ZV;
                yV > VV * VV ? this.stopEntity(xV) : UV().equals(YV, pV.lastPos) || (pV.sound.setPosition([YV[0], YV[1] + nV, YV[2]]), UV().copy(pV.lastPos, YV))
              } else yV <= JV.maxHearDist * JV.maxHearDist && this.startEntity(xV, JV, YV)
            }
        }
      }
  },
  40221: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      f: () => YV
    });
    var JV = xV(32);

    function YV(VV) {
      return "refetchCode" === VV || "devDownloadJson" === VV || VV.startsWith("Plugin")
    }

    function UV(VV, eV) {
      "refetchCode" !== VV ? "Plugin|MobAiPlugin|ShowPetUi" !== VV ? Promise.all([xV.e(121), xV.e(122), xV.e(117), xV.e(119), xV.e(236)]).then((() => xV(44630))).then((xV => {
        let {
          runClientGameMessage: JV
        } = xV;
        JV(VV, eV)
      })).catch((eV => {
        console.error(`Game message ${VV} failed`, eV)
      })) : JV.h.QZ("showPetUi", eV) : JV.h.QZ("refetchCode")
    }
  },
  40209: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV
    });
    var JV = xV(1252),
      YV = xV(1397),
      UV = xV(27),
      yV = xV(1382),
      pV = xV(1391),
      QV = xV(1612),
      nV = xV(37620);

    function wV(VV) {
      let {
        ae: eV,
        oe: xV
      } = VV;
      const wV = null !== eV && void 0 !== eV ? eV : (0, pV.e)().gameNameWithVariation;
      (0, JV.H)(wV) && ((0, nV.m)(), (0, yV.db)((() => {
        console.log("Received matchmaking order from game server to game", eV), (0, UV.h)("inGameReplay"), (0, QV.navigatePreserveSearch)((0, YV.c)(wV, null !== xV && void 0 !== xV ? xV : void 0))
      }), "video_start"))
    }
  },
  40201: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      g: () => QV,
      k: () => nV,
      m: () => ZV
    });
    var JV = xV(2051),
      YV = xV(32),
      UV = xV(1439),
      yV = xV(1290);
    const pV = new Map;

    function QV(VV, eV) {
      YV.h.QZ("newUiRequest", {
        id: VV,
        clientParameters: eV
      }, !0)
    }

    function nV(VV) {
      YV.h.QZ("removeUiRequest", VV, !0);
      const eV = pV.get(VV);
      eV && (eV.tearDownNotification(), pV.delete(VV))
    }

    function wV() {
      YV.h.QZ("clearUiRequests");
      for (const VV of pV.values()) VV.tearDownNotification();
      pV.clear()
    }

    function ZV(VV, eV, xV, YV) {
      const QV = "string" === typeof eV ? {
          translationKey: eV
        } : eV,
        nV = UV.NotificationProvider.showPromptPopup({
          title: QV.translationKey,
          textOpts: {
            title: (0, yV.j)(QV.params, JV.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: xV,
          unlockPointerKey: "uiRequestPopup"
        });
      pV.set(VV, nV), nV.getResult().then((eV => {
        pV.delete(VV), "notificationTornDown" !== eV && YV(eV)
      }))
    }
  },
  40197: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      constructor() {
        this.members = new Map
      }
      apply(VV) {
        const eV = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const JV of VV.VV) {
          let VV = this.members.get(JV.eV);
          if (VV || (VV = {
              name: null,
              settings: {}
            }, this.members.set(JV.eV, VV), eV.added.push(JV.eV)), null !== JV.xV && (VV.name = JV.xV), null !== JV.JV || JV.YV.length > 0) {
            const xV = null === JV.JV ? {} : JSON.parse(JV.JV);
            Object.assign(VV.settings, xV);
            for (const eV of JV.YV) delete VV.settings[eV], xV[eV] = void 0;
            eV.settingChanges.push({
              playerId: JV.eV,
              settings: xV
            })
          }
        }
        for (const JV of VV.yV) {
          const VV = this.members.get(JV);
          var xV;
          if (VV) this.members.delete(JV), eV.removed.push({
            playerId: JV,
            name: null !== (xV = VV.name) && void 0 !== xV ? xV : void 0
          })
        }
        return eV
      }
      has(VV) {
        return this.members.has(VV)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(VV) {
        var eV, xV;
        return null !== (eV = null === (xV = this.members.get(VV)) || void 0 === xV ? void 0 : xV.name) && void 0 !== eV ? eV : void 0
      }
      getSettings(VV) {
        var eV;
        return null === (eV = this.members.get(VV)) || void 0 === eV ? void 0 : eV.settings
      }
      getSetting(VV, eV) {
        var xV;
        return null === (xV = this.members.get(VV)) || void 0 === xV ? void 0 : xV.settings[eV]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  40226: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      g: () => YV
    });
    const JV = ["description", "label"];

    function YV(VV) {
      const eV = VV.type;
      return {
        type: eV,
        params: VV[eV]
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);