export const id = 185;
export const ids = [185];
export const modules = {
  40676: (dd, Od, md) => {
    function Wd(dd) {
      return !(!dd.lobbyLeaderboardInfo && !dd.lobbyManage)
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  40652: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      f: () => Xd
    });
    var Wd = md(32);
    let Fd = !1;

    function Rd() {
      return Fd
    }

    function Xd(dd) {
      Fd !== dd && (Fd = dd, Wd.j.lQ("replayViewer|videoExportChanged"))
    }
  },
  40584: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd
    });
    var Wd = md(32),
      Fd = md(2116);

    function Rd(dd) {
      let {
        taskId: Od,
        progress: md
      } = dd;
      const Wd = Fd.e.get("_tasks");
      null !== Wd && void 0 !== Wd && Wd[Od] && Fd.e.apply({
        _tasks: {
          ...Wd,
          [Od]: {
            ...Wd[Od],
            progress: md
          }
        }
      })
    }
    Wd.j.subscribe("clientTaskProgress", (dd => {
      Rd(dd)
    }))
  },
  40531: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fm,
      i: () => mm,
      j: () => Wm
    });
    var Wd = md(2386),
      Fd = md(180),
      Rd = md(218),
      Xd = md(708),
      Kd = md(46),
      hd = md(2402),
      vd = md(2497),
      Qd = md(2471),
      td = md(1286);
    const od = new WeakMap;
    class Nd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          lQd: !0
        };
        this.callbacks = Od, this.options = md, this.IWd = void 0, this.sessionId = void 0, this.ZY = [], this.CQd = !1, this.Aq = !1, this.ZQd = void 0, this.lY = 0, this.HXd = 0, this.kQd = (dd, Od) => {
          if (this.Aq) return;
          const md = Number(dd);
          this.CQd ? this.fQd(md, Od) : this.ZY.push({
            id: md,
            payload: Od
          })
        }, this.dispose = () => {
          this.Aq || (this.Aq = !0, od.delete(this), this.ZY.length = 0, this.ZQd())
        }, this.IWd = dd, this.sessionId = dd.sessionId, od.set(this, []), this.ZQd = this.MQd()
      }
      dtd(dd) {
        this.ZQd(), this.IWd = dd, this.sessionId = dd.sessionId, this.lY = 0, this.HXd = 0, this.ZQd = this.MQd()
      }
      get AY() {
        return this.HXd
      }
      MQd() {
        const dd = this.IWd.bY("*", this.kQd);
        return this.options.lQd && this.IWd.TY(this.dispose), dd
      }
      fQd(dd, Od) {
        try {
          (0, vd.jc)(dd) && (Od = (0, vd.b)(dd, Qd.CQ.from(Od)));
          const md = od.get(this)[dd];
          if ("function" !== typeof md) {
            if (this.callbacks.Otd) return void this.callbacks.Otd(dd, Od);
            throw new Error(`No onMessage handler registered for message id ${dd}`)
          }
          md(Od)
        } catch (md) {
          this.callbacks.Ftd(`Error in onMessage ${dd} with payload ${JSON.stringify(Od)}`, md)
        } finally {
          this.lY++
        }
      }
      Rtd() {
        for (const {
            id: dd,
            payload: Od
          }
          of this.ZY) {
          if (this.Aq) break;
          this.fQd(dd, Od)
        }
        this.ZY.length = 0
      }
      yJ() {
        return this.Aq
      }
      Xtd() {
        if (this.CQd || this.Aq) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          bY: (dd, Od) => {
            if (this.CQd || this.Aq) throw new Error("Trying to call onMessage after registration finished");
            this.bY(dd, Od)
          },
          finishRegistration: () => {
            if (this.Aq) throw new Error("Cannot finish message registration after disposal");
            this.CQd = !0, this.Rtd()
          }
        }
      }
      bY(dd, Od) {
        var md, Wd;
        null === (md = (Wd = this.callbacks).Ktd) || void 0 === md || md.call(Wd);
        const Fd = od.get(this);
        for (; dd > Fd.length;) Fd[Fd.length] = null;
        Fd[dd] = Od
      }
      send(dd, Od) {
        this.htd(), (0, td.B)(Od) ? this.IWd.pw(dd, Od) : this.IWd.send(dd, Od)
      }
      htd() {
        var dd, Od;
        (this.HXd++, 5 === qd++) && (null === (dd = (Od = this.callbacks).Ktd) || void 0 === dd || dd.call(Od), qd = 0)
      }
      eT() {
        this.dispose(), this.IWd.eT()
      }
      leave() {
        this.dispose(), this.IWd.leave()
      }
    }
    let qd = 0;
    var Hd = md(2405);
    class yd extends Nd {
      constructor(dd) {
        super(dd, {
          Ktd: () => {
            (0, Kd.s)(!0) && (0, Wd.JY)()
          },
          Ftd: (dd, Od) => {
            var md;
            null === (md = (0, hd.c)()) || void 0 === md || md.AH(dd, Od)
          }
        }, {
          lQd: !1
        }), (0, Hd.c)(dd)
      }
      kY(dd, Od) {
        return !!(0, Hd.j)((0, Hd.b)(), this.IWd, dd, Od) && (this.htd(), !0)
      }
      dtd(dd) {
        this.vtd(), super.dtd(dd), (0, Hd.c)(dd)
      }
      eT() {
        super.eT(), this.vtd()
      }
      vtd() {
        this.IWd.lT.Ft.hV = void 0
      }
    }
    var bd = md(32),
      Td = md(2116),
      pd = md(1890),
      Yd = md(38074),
      gd = md(40537),
      wd = md(39593),
      Ed = md(39354),
      Jd = md(701),
      Ud = md(39947);

    function xd(dd, Od, md) {
      const Wd = function(dd) {
          const Od = new Int32Array(dd.length * Ud.c);
          return dd.forEach(((dd, md) => {
            const Wd = md * Ud.c;
            if (4 === dd.length) {
              const [md, Fd, Rd, Xd] = dd;
              Od.set([md, Fd, Rd, md, Fd, Rd, Xd], Wd)
            } else {
              const [md, Fd, Rd, Xd, Kd, hd, vd] = dd;
              Od.set([md, Rd, Kd, Fd, Xd, hd, vd], Wd)
            }
          })), Od
        }(md),
        Fd = (Od, md, Wd, Fd) => {
          dd.setBlockNoMulti(Od, md, Wd, Fd, !0)
        };
      dd.client.gameRecorder.isCapturing() ? (0, Ud.ib)(Wd, (0, Ud.hb)(Wd), Fd) : dd.zo.Bt.LJ(Wd, {
        rC: Fd,
        isHookId: Od => dd.blockChangeHasHooks(Od),
        watched: () => function(dd, Od, md) {
          const Wd = [],
            Fd = (dd, Od, md) => {
              Wd.push(dd, Od, md)
            },
            Rd = new Set;
          for (let Xd = 0; Xd < md.length; Xd += Ud.c)
            for (let Od = (0, Jd.T)(md[Xd]); Od <= (0, Jd.T)(md[Xd + 3]); Od++)
              for (let Wd = (0, Jd.T)(md[Xd + 1]); Wd <= (0, Jd.T)(md[Xd + 4]); Wd++)
                for (let Kd = (0, Jd.T)(md[Xd + 2]); Kd <= (0, Jd.T)(md[Xd + 5]); Kd++) {
                  const md = `${Od}|${Wd}|${Kd}`;
                  Rd.has(md) || (Rd.add(md), dd.blockDataOwner.forEachDataCell(Od, Wd, Kd, Fd))
                }
          return Od.forEachCell(Fd), Int32Array.from(Wd)
        }(dd, Od, Wd)
      }), dd.zo.POd()
    }

    function Bd(dd) {
      dd.iWd = new Set, dd.GWd = new Set, dd.AWd = new Set, dd.nWd = new Set, dd.rWd = [], dd.PWd = [], dd.WC = new Set, dd.Zm = [], dd.tC = []
    }
    class Sd {
      constructor(dd) {
        this.zo = dd
      }
      register(dd) {
        const Od = this.zo,
          md = (0, hd.b)();
        dd.bY(vd.T, (dd => {
          Od.Bt.iWd.add(dd), Od.Bt.GWd.delete(dd)
        })), dd.bY(vd._, (dd => {
          Od.Bt.GWd.add(dd), Od.Bt.iWd.delete(dd)
        })), dd.bY(vd.ae, (dd => {
          Od.Bt.GWd.delete(dd), Od.Bt.iWd.delete(dd)
        })), dd.bY(vd.W, (dd => {
          Od.Bt.AWd.add(dd), Od.Bt.nWd.delete(dd)
        })), dd.bY(vd.fb, (dd => {
          Od.Bt.nWd.add(dd), Od.Bt.AWd.delete(dd)
        })), dd.bY(vd.ee, (dd => {
          Od.Bt.nWd.delete(dd), Od.Bt.AWd.delete(dd)
        })), dd.bY(vd.U, (dd => {
          (0, td.db)(dd, Od.Bt.PWd), (0, td.db)(dd, Od.Bt.rWd), Od.Bt.rWd.push(dd)
        })), dd.bY(vd.bb, (dd => {
          (0, td.db)(dd, Od.Bt.rWd), (0, td.db)(dd, Od.Bt.PWd), Od.Bt.PWd.push(dd)
        })), dd.bY(vd.de, (dd => {
          (0, td.db)(dd, Od.Bt.rWd), (0, td.db)(dd, Od.Bt.PWd)
        })), dd.bY(vd.sf, (dd => {
          let {
            dF: md,
            mF: Wd
          } = dd;
          Wd ? Od.Bt.WC.delete(md) : Od.Bt.WC.add(md)
        })), dd.bY(vd.of, (dd => {
          let {
            Zm: Wd,
            km: Fd
          } = dd;
          md.updateWalkThroughRect(Od.YV, Wd, Fd)
        })), (0, Wd.onGameResetOnce)((() => {
          Bd(Od.Bt)
        })), dd.bY(vd.dc, (dd => {
          wd.c.applyServerUpdate(dd)
        })), dd.bY(vd.lb, (dd => {
          md.applyServerBlocks((() => {
            ! function(dd, Od) {
              for (const {
                  yO: md,
                  bO: Wd
                }
                of Od) {
                const Od = Ed.d[Wd];
                if (Od) {
                  const {
                    compX: Wd,
                    compY: Fd,
                    compZ: Rd,
                    mainMultiblock: Xd
                  } = Od;
                  dd.nS(md[0] - Wd, md[1] - Fd, md[2] - Rd, Xd)
                }
              }
              for (const {
                  yO: md,
                  bO: Wd,
                  pO: Fd
                }
                of Od) dd.setBlockNoMulti(md[0], md[1], md[2], Wd, !0), dd.blockDataOwner.setBlockData(md[0], md[1], md[2], null === Fd ? void 0 : JSON.parse(Fd)), dd.blockAdded(md[0], md[1], md[2], Wd)
            }(md, dd)
          })), bd.j.lQ("changeBlockFail", dd), bd.j.lQ("blockChangeRefused"), md.client.triggerGameCallback("onChangeBlockFail", dd), bd.j.lQ("EditBoard", {
            pos: null
          }), bd.j.lQ("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        }));
        const Fd = dd => {
          md.applyServerBlocks((() => {
            xd(md, wd.c, dd)
          }))
        };
        dd.bY(vd.Hb, Fd), dd.bY(vd.Xb, Fd), dd.bY(vd.hf, (dd => {
          let {
            tR: Od,
            oR: Wd
          } = dd;
          if (md.Rk(Od[0], Od[1], Od[2])) {
            const dd = (0, hd.b)().mY(Od[0], Od[1], Od[2]);
            (0, hd.b)().updateMailboxContents(Od[0], Od[1], Od[2], dd, Wd)
          }
        })), dd.bY(vd.ve, (dd => {
          let {
            pos: Od,
            data: Wd
          } = dd;
          md.blockDataOwner.setBlockData(Od[0], Od[1], Od[2], Wd), md.blockAdded(Od[0], Od[1], Od[2], md.mY(Od[0], Od[1], Od[2]))
        }))
      }
    }
    var sd = md(38677),
      ud = md(37958),
      Vd = md(39627),
      Ad = md(39470),
      rd = md(39639);
    class Gd {
      constructor(dd, Od) {
        this.zo = dd, this.setUpQueuedEntity = Od
      }
      register(dd) {
        const Od = this.zo,
          md = (0, hd.b)();
        dd.bY(vd.S, (dd => {
          let {
            dd: Od,
            Od: md
          } = dd;
          this.setUpQueuedEntity(Od), Od = (0, ud.b)(Od), (0, hd.b)().client.gameRecorder.recordBulletShot(Od, md), bd.j.lQ(`bulletShot|${Od}`, {
            bulletDirections: md
          })
        })), dd.bY(vd.fc, (dd => {
          let {
            wF: Od,
            aF: md
          } = dd;
          bd.j.lQ("damagedByOtherPlayer", {
            wF: Od,
            direction: md
          }, !0)
        })), dd.bY(vd.wd, (dd => {
          bd.j.lQ("playerKilled", dd, !0), (0, ud.e)(dd.killerEId) && !(0, ud.e)(dd.deadEId) && bd.j.lQ("sessionReplayPlayerKill", {
            killstreak: dd.killstreak
          }), (0, hd.b)().client.gameRecorder.recordPlayerKilled(dd.deadEId, dd.killerEId, dd.withItem, dd.killstreak)
        })), dd.bY(vd.Ob, (dd => {
          bd.j.lQ("customKillfeed", dd, !0), (0, hd.b)().client.gameRecorder.recordCustomKillfeed(dd.killer, dd.victim, dd.withItem)
        })), dd.bY(vd.Fd, (dd => {
          let {
            KW: md,
            hW: Wd
          } = dd;
          this.setUpQueuedEntity(md);
          const Fd = Od.qE.NWd(md);
          null !== Fd && void 0 !== Fd && Fd.isGun() && Fd.reload(Date.now(), Wd)
        })), dd.bY(vd.te, (dd => {
          let {
            rO: md,
            GO: Wd
          } = dd;
          const Fd = Wd ? (0, rd.e)(Od, Wd) : void 0;
          bd.j.lQ("sendHitmarker", {
            rO: md,
            screenPos: Fd
          }, !0)
        })), dd.bY(vd.Hc, (dd => {
          let {
            sF: Wd,
            uF: Fd,
            iF: Rd,
            AF: Xd,
            rF: Kd,
            GF: hd,
            nF: vd
          } = dd;
          this.setUpQueuedEntity(Wd), Wd = (0, ud.b)(Wd);
          const Qd = Od.qE.XWd(Wd);
          if (Qd && (Qd.lastHurtTime = performance.now()), (0, Vd.playRigHurt)(Od, Wd, hd), bd.j.lQ("lifeformHurt", {
              eId: Wd,
              nF: vd
            }), Fd) {
            const dd = (0, rd.e)(Od, Fd.GO);
            bd.j.lQ("yourAttackHit", {
              rO: Xd,
              screenPos: dd,
              hitSelf: Wd === Od.YV
            })
          }
          Wd === Od.YV && (md.shakePlayerCamera(Wd, Kd / 40, 200), bd.j.lQ("closeShopOnDamaged", null), bd.j.lQ("damagedByOtherPlayer", {
            wF: null,
            direction: hd,
            rF: Kd
          }, !0));
          const td = Od.qE.hY(Wd);
          if (td && (Rd || Xd)) {
            const dd = [td[0], td[1] + 1, td[2]];
            Rd && (0, Ad.j)(Od, Ad.B, dd, 15), Xd && (0, Ad.j)(Od, Ad.q, dd, 10)
          }
        })), dd.bY(vd.Gc, (dd => {
          let {
            CF: md,
            ZF: Wd,
            kF: Fd
          } = dd;
          (0, sd.e)(Od).setHealthFrac((0, ud.b)(md), Fd), bd.j.lQ("lifeformHealthChanged", {
            eId: (0, ud.b)(md),
            ZF: Wd,
            kF: Fd
          })
        })), dd.bY(vd.O, (dd => {
          let {
            QF: md,
            tF: Wd
          } = dd;
          (0, hd.b)().playerAttacked(Od.YV, md, Wd)
        })), dd.bY(vd.sb, (() => {
          const dd = Od.qE.NWd(Od.YV);
          null !== dd && void 0 !== dd && dd.isChargeable() && dd.finishCharging(!1, Date.now())
        })), dd.bY(vd.Tb, (dd => {
          let {
            MR: Od,
            dX: md,
            OX: Wd,
            mX: Fd,
            WX: Rd,
            FX: Xd
          } = dd;
          Od = (0, ud.b)(Od), (0, hd.b)().client.updateEffect(Od, md, {
            displayName: Wd,
            icon: Fd,
            duration: Rd,
            level: Xd
          })
        })), dd.bY(vd.Hd, (dd => {
          let {
            MR: Od,
            dX: md
          } = dd;
          Od = (0, ud.b)(Od), (0, hd.b)().client.removeEffect(Od, md)
        })), dd.bY(vd.df, (dd => {
          bd.j.lQ("ttbEffectMultiplier", dd)
        }))
      }
    }
    var nd = md(40553),
      Ld = md(38673),
      Pd = md(2972),
      zd = md(39645),
      cd = md(37939),
      jd = md(37942),
      Dd = md(38608),
      ed = md(38702),
      Id = md(39649),
      ld = md(40559);
    class Cd {
      constructor(dd, Od) {
        this.zo = dd, this.setUpQueuedEntity = Od
      }
      register(dd) {
        const Od = this.zo,
          md = (0, hd.b)();
        dd.bY(vd.Wc, (dd => {
          let {
            eId: md,
            settings: Wd
          } = dd;
          (0, ed.h)(md);
          for (const Od in Wd)(0, ed.e)(md, Od, Wd[Od]);
          if ("canSee" in Wd && Od.qE.MOd(md, "hidingMeshManager")) {
            const dd = Od.qE.getState(md, "hidingMeshManager");
            dd.canSee = (0, Id.c)("canSee", Wd.canSee), dd._forceUpdate = !0
          }
        })), dd.bY(vd.H, (dd => {
          let {
            qm: md,
            Hm: Wd,
            animationScript: Fd,
            ym: Rd,
            bm: Xd,
            Tm: Kd,
            pm: vd
          } = dd;
          md = (0, ud.b)(md);
          const Qd = null === Fd && null !== Kd ? (0, nd.f)(Kd, vd) : Fd;
          (0, hd.b)().client.gameRecorder.recordAnimateEntity(md, Wd, Qd, Rd, Xd), (0, sd.e)(Od).animations.animateEntity(md, Wd, Fd, Rd, Xd, Kd, vd), null !== Fd || md === Od.YV && Wd === Ld.c.Emote && (0, hd.b)().client.cameraController.endTemporaryThirdPerson()
        })), dd.bY(vd.se, (dd => {
          (0, ld.e)(dd)
        })), dd.bY(vd.ud, (dd => {
          for (const Od of dd)(0, zd.A)(Od);
          bd.j.lQ("playerCosmeticsUpdated", dd, !0)
        })), dd.bY(vd.M, (dd => {
          for (const md of dd)(0, Dd.f)(Od, md)
        })), dd.bY(vd.Xc, (dd => {
          (0, Ad.n)(Od, (0, td.v)(dd))
        })), dd.bY(vd.Zc, (dd => {
          Pd.g[dd.vF] ? (0, Ad.n)(Od, {
            ...Pd.g[dd.vF],
            pos1: dd.pos1,
            pos2: dd.pos2
          }) : console.error(`Unknown preset id: ${dd.vF}`)
        })), dd.bY(vd.qd, (dd => {
          var Od, md;
          let {
            fm: Wd,
            Mm: Fd,
            dW: Rd,
            OW: Xd
          } = dd, {
            WW: Kd,
            FW: vd
          } = null !== Xd && void 0 !== Xd ? Xd : {};
          const {
            mW: Qd
          } = null !== Xd && void 0 !== Xd ? Xd : {};
          Kd = null !== (Od = Kd) && void 0 !== Od ? Od : void 0, vd = null !== (md = vd) && void 0 !== md ? md : void 0, "string" === typeof Qd && this.setUpQueuedEntity(Qd), (0, hd.b)().client.gameRecorder.recordPlaySound(Wd, Fd, Rd, Xd), cd.d.play((0, jd.f)(Wd), Fd, Qd, Kd, vd).rate(Rd)
        })), dd.bY(vd.lf, (dd => {
          for (const Od in dd) {
            const Wd = dd[Od];
            for (const dd in Wd) md.client.meshCreator.handleParticleSystemUpdate(Od, dd, Wd[dd])
          }
        }))
      }
    }
    var Zd = md(39327),
      kd = md(39292);
    class fd {
      constructor(dd) {
        this.zo = dd
      }
      register(dd) {
        const Od = this.zo,
          md = (0, hd.b)();

        function Wd() {
          return Od.qE.Dmd(Od.YV)
        }
        dd.bY(vd.sc, (dd => {
          let {
            oF: md,
            NF: Wd,
            qF: Fd,
            HF: Rd,
            yF: Xd,
            bF: Kd,
            TF: hd,
            pF: vd,
            YF: Qd
          } = dd;
          if (!Od.qE.MOd(md, "itemState")) return void(0, Zd.h)(Od, md, [Xd, Kd, hd], Wd, {
            amount: Fd,
            attributes: JSON.parse(Rd),
            pF: vd,
            size: Qd
          });
          const td = Od.qE.getState(md, "itemState");
          td.amount = Fd, td.pF = vd, td.creationTime = Date.now(), (0, kd.setServerPosition)(Od.qE.getState(md, "smoothToServerPos"), Xd, Kd, hd)
        })), dd.bY(vd.ib, (dd => {
          (0, sd.e)(Od).setCantPickUp(dd, !0), Od.qE.MOd(dd, "itemState") && (Od.qE.getState(dd, "itemState").pF = !0)
        })), dd.bY(vd.$d, (dd => {
          (0, sd.e)(Od).setCantPickUp(dd, !1), Od.qE.MOd(dd, "itemState") && (Od.qE.getState(dd, "itemState").pF = !1)
        })), dd.bY(vd.nd, (dd => {
          let {
            pickUpItems: Od,
            pickUpAckSeq: md
          } = dd;
          for (const {
              name: Fd,
              amount: Rd,
              attributes: Xd
            }
            of Od) Wd().pickUpItem({
            name: Fd,
            amount: Rd,
            typeObj: Zd.v[Fd],
            attributes: Xd
          });
          (0, hd.b)().client.inventoryPrediction.serverChangeApplied(md)
        })), dd.bY(vd.Ke, (dd => {
          let {
            index: md,
            name: Wd,
            amount: Fd,
            attributes: Rd,
            setSlotAckSeq: Xd
          } = dd;
          const Kd = Od.qE.emd(Od.YV);
          (md < Kd.playerInventory.numSlots || Kd.Km || Kd.inCreative) && Kd.setItemSlot(md, Wd, Fd, Rd), (0, hd.b)().client.inventoryPrediction.serverChangeApplied(Xd)
        })), dd.bY(vd.qc, (dd => {
          (0, hd.b)().client.inventoryPrediction.acknowledge(dd)
        })), dd.bY(vd.D, (dd => {
          let {
            cO: Od,
            jO: md,
            DO: Wd,
            eO: Fd
          } = dd;
          (0, hd.b)().client.itemDropPrediction.onActionItemDrops(Od, md, Wd, Fd)
        })), dd.bY(vd.Cb, (dd => {
          Wd().clearInventory(), (0, hd.b)().client.inventoryPrediction.serverChangeApplied(dd)
        })), dd.bY(vd.Le, (dd => {
          bd.j.lQ("setSelectedInventorySlotI", dd, !0)
        })), dd.bY(vd.wb, (dd => {
          let {
            LF: md,
            PF: Wd,
            zF: Fd,
            cF: Rd,
            jF: Xd,
            DF: Kd,
            eF: vd,
            IF: Qd
          } = dd;
          const td = Od.qE.emd(Od.YV);
          if (Kd) {
            const {
              Xm: dd,
              Nm: Od
            } = Qd;
            return (0, hd.b)().client.inventoryPrediction.XOd(Od, (() => {
              td.chestRefreshed(Wd, Fd, Rd, vd, dd)
            })) && bd.j.lQ("chestToggleFromServer", !1, !0), void bd.j.lQ("chestRefreshedFromServer")
          }(md || td.Km) && (md ? (td.chestOpened(Wd, Fd, Rd, Xd, vd), null !== Xd && (0, hd.b)().client.ironChestPasskeyCache.onChestOpened(Rd, Xd)) : td.chestClosed(), bd.j.lQ("chestToggleFromServer", md, !0))
        })), dd.bY(vd.Sb, (dd => {
          let {
            craftingRecipeItemName: Wd,
            recipesForItem: Fd
          } = dd;
          Wd ? md.craftingManager.editRecipesForPlayer(Od.YV, Wd, Fd) : md.craftingManager.resetAllPlayerRecipes(Od.YV), bd.j.lQ("craftingRecipesEdited", {
            itemName: Wd,
            recipesForItem: Fd
          })
        })), dd.bY(vd.Od, (dd => {
          let {
            KO: Od,
            hO: md,
            vO: Fd
          } = dd;
          Wd().removeItemName(Od, md), (0, hd.b)().client.inventoryPrediction.serverChangeApplied(Fd)
        })), dd.bY(vd.Ld, (dd => {
          let {
            XO: Wd
          } = dd;
          md.craftingManager.removeRecipes(Od.YV, Wd), bd.j.lQ("craftingRecipesEdited", {
            itemName: Wd,
            recipesForItem: []
          })
        }))
      }
    }
    var Md = md(7410),
      dO = md(39146),
      OO = md(415),
      mO = md.n(OO),
      WO = md(5180),
      FO = md(39229),
      RO = md(39787),
      XO = md(39142);
    class KO {
      constructor(dd, Od) {
        this.zo = dd, this.setUpQueuedEntity = Od
      }
      register(dd) {
        const Od = this.zo,
          md = (0, hd.b)();
        dd.bY(vd._e, (dd => {
          let {
            dm: md,
            Om: Fd,
            Wm: Rd,
            Fm: Xd
          } = dd;
          const Kd = [Fd, Rd, Xd];
          Od.qE.setPosition(Od.YV, Kd), (0, Wd.sendColyMessage)(vd.Jg, {
            jQ: md,
            DQ: WO.f
          }), bd.j.lQ("localPlayerTeleported", {
            pos: Kd,
            isCorrection: !1
          })
        })), dd.bY(vd.fd, (dd => {
          let {
            nO: Od,
            LO: md,
            PO: Wd,
            zO: Fd
          } = dd;
          this.setUpQueuedEntity(Od);
          const Rd = [md, Wd, Fd];
          bd.j.lQ(`otherPlayerTeleported|${Od}`, {
            pos: Rd
          })
        })), dd.bY(vd.yd, (dd => {
          let {
            rd: md,
            Gd: Fd,
            nd: Rd,
            Ld: Xd,
            Pd: Kd,
            zd: hd,
            jd: Qd,
            ed: td,
            Dd: od,
            Cd: Nd
          } = dd;
          const qd = [Fd, Rd, Xd];
          Od.qE.setPosition(Od.YV, qd);
          const Hd = Od.qE.Hmd(Od.YV),
            yd = Od.qE.pC(Od.YV);
          mO().set(yd.ZD, 0, 0, 0), mO().set(yd.mI, 0, 0, 0), mO().set(yd.Gy, Kd, hd, Qd), yd.vI(), Hd._flying = null !== Nd, Nd ? (Hd.flyAccel.Zd = Nd.Zd, Hd.flyAccel.kd = Nd.kd) : Hd.flyAccel.reset(), td && Hd.movementType === Md.n.GLIDING && (Hd.Id = td.Id, mO().copy(Hd.ld, td.ld)), (0, Wd.sendColyMessage)(vd.Jg, {
            jQ: md,
            DQ: WO.f
          }), bd.j.lQ("localPlayerTeleported", {
            pos: qd,
            isCorrection: !0
          })
        })), dd.bY(vd.Pe, (dd => {
          let {
            vehicleEId: Od,
            overrides: md
          } = dd;
          (0, hd.b)().applyRiddenVehicleSettingOverrides(Od, md)
        })), dd.bY(vd.mf, (dd => {
          let {
            WF: md,
            FF: Wd,
            RF: Fd
          } = dd;
          const Rd = Od.qE.Hmd(Od.YV).physicsState.type === Md.q.SLEEPING && md === Md.q.DEFAULT;
          (0, hd.b)().updatePositionAndPhysics(Od.YV, {
            type: md,
            tier: Wd
          }, !0, Fd), Rd && (0, hd.b)().updateHeldVehicleStatus()
        })), dd.bY(vd.ob, (dd => {
          let {
            KR: md,
            hR: Wd
          } = dd;
          Od.qE.Pmd(Od.YV).setPose(md, Wd)
        })), dd.bY(vd.ze, (dd => {
          const {
            MQ: md,
            wWd: Wd
          } = (0, dO.e)([dd[0], dd[1], dd[2]]);
          XO.c.setLookDirection(Od, md, Wd), (0, FO.v)(md, Wd);
          const Fd = Od.qE.Pmd(Od.YV);
          Fd && (Fd.heading = md)
        })), dd.bY(vd.De, (dd => {
          md.client.cameraController.setCameraZoom(dd)
        })), dd.bY(vd.Te, (dd => {
          let {
            RW: Wd,
            XW: Fd
          } = dd;
          md.shakePlayerCamera(Od.YV, Wd, Fd)
        })), dd.bY(vd.yc, (dd => {
          Od.qE.Pmd(Od.YV).jumpMultiplier.setMultiplierType("jumpEffectAmount", dd)
        })), (0, Wd.onGameResetOnce)((() => {
          Od.qE.Pmd(Od.YV).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), dd.bY(vd.J, (dd => {
          Od.qE.pC(Od.YV).applyImpulse(dd)
        })), dd.bY(vd.Se, (dd => {
          const md = Od.qE.pC(Od.YV);
          mO().set(md.ZD, 0, 0, 0), mO().set(md.mI, 0, 0, 0), mO().copy(md.Gy, dd), md.vI()
        })), (0, Wd.onGameResetOnce)((() => {
          (0, RO.setFloatingYValue)(Od.qE.getState(Od.YV, "physics"), Od.qE.gM(Od.YV), null)
        })), dd.bY(vd.Wb, (dd => {
          let {
            ZR: md,
            kR: Wd,
            fR: Fd
          } = dd;
          const Rd = (0, ud.b)(md);
          if (Rd === Od.YV) {
            const dd = Od.qE.gM(Od.YV).position;
            Fd ??= Math.floor(dd[1]) - 1, (0, RO.setFloatingYValue)(Od.qE.getState(Od.YV, "physics"), Od.qE.gM(Od.YV), Wd ? Fd : null)
          }(0, sd.e)(Od).setFloating(Rd, Wd, Fd);
          const Xd = Od.qE.getState(Rd, "floating");
          Xd && (Xd.isFloating = Wd, Xd.fR = Wd ? Fd : null)
        }))
      }
    }

    function hO(dd, Od, md, Wd, Fd) {
      let Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!dd.qE.zmd(dd.YV)) return console.log("Got resync inven but don't have inven component"), void Od.acknowledge(Wd);
      Rd && console.error("Had to sync inven"), Od.XOd(Wd, Fd) && md.lQ("chestToggleFromServer", !1, !0), md.lQ("syncedInvenFromServer")
    }
    var vO = md(40573),
      QO = md(10081),
      tO = md(40575),
      oO = md(2118);
    var NO = md(5167);

    function qO(dd) {
      const Od = dd.Bt;
      let md = 0,
        Fd = -1,
        Xd = -1 / 0,
        Kd = null,
        hd = !0;
      const Qd = () => {
        if (++md % 10 !== 0) return;
        const Qd = (0, Wd.getLastReceivedPacketId)();
        if (Qd <= Fd) return;
        const [td, od, Nd] = dd.qE.hY(dd.YV), qd = ! function(dd) {
          var Od;
          let md = null === (Od = dd.qE.JWd(dd.YV)) || void 0 === Od ? void 0 : Od.xq;
          if (void 0 === md) return !1;
          const Wd = new Set;
          for (; void 0 !== md && !Wd.has(md);) {
            var Fd;
            Wd.add(md);
            const Od = dd.qE.getState(md, "smoothToServerPos"),
              Rd = Array.isArray(Od) ? null : null === Od || void 0 === Od ? void 0 : Od.serverPosition;
            if (Rd) {
              const Od = dd.qE.hY(md);
              if (Math.abs(Od[0] - Rd[0]) > 10 || Math.abs(Od[1] - Rd[1]) > 10 || Math.abs(Od[2] - Rd[2]) > 10) return !0
            }
            md = null === (Fd = dd.qE.JWd(md)) || void 0 === Fd ? void 0 : Fd.xq
          }
          return !1
        }(dd) && function(dd, Od, md, Wd) {
          const Fd = Rd.i.Qt;
          for (let Rd = 0; Rd < dd.length; Rd++) {
            const Xd = dd[Rd];
            if (!(0, NO.i)(Od, md, Wd, Xd[0] * Fd, Xd[1] * Fd, Xd[2] * Fd)) return !1
          }
          return !0
        }(Od.Qy.dt, td, od, Nd), Hd = null === Kd || Math.abs(td - Kd[0]) > 8 || Math.abs(od - Kd[1]) > 8 || Math.abs(Nd - Kd[2]) > 8, yd = !hd || Hd || performance.now() - Xd >= 1e4;
        hd = qd, qd && yd && (Fd = Qd, Xd = performance.now(), Kd = [td, od, Nd], (0, Wd.sendColyMessage)(vd.jg, {
          BQ: Qd
        }))
      };
      return dd.on("Et", Qd), () => {
        dd.off("Et", Qd)
      }
    }
    var HO = md(40577),
      yO = md(1641),
      bO = md(3860),
      TO = md(1954),
      pO = md(3986),
      YO = md(5550);
    class gO {
      constructor(dd, Od, md) {
        this.zo = dd, this.gameNameWithVariation = Od, this.connectionResume = md, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        YO.e.reset(), (0, vO.e)()
      }
      startChunkReports() {
        const dd = function(dd) {
            let Od = null,
              md = -1 / 0,
              Fd = null;
            const Rd = () => {
                Fd = null;
                const Rd = Math.ceil(dd.yB[0]),
                  Xd = Math.ceil(dd.yB[1]);
                Od && Od[0] === Rd && Od[1] === Xd || (Od = [Rd, Xd], md = performance.now(), (0, Wd.sendColyMessage)(vd.hg, {
                  kK: Rd,
                  fK: Xd
                }))
              },
              Xd = () => {
                null === Fd && (Fd = setTimeout(Rd, Math.max(0, md + 250 - performance.now())))
              };
            return Rd(), dd.on("addRemoveDistanceChanged", Xd), () => {
              dd.off("addRemoveDistanceChanged", Xd), null !== Fd && (clearTimeout(Fd), Fd = null)
            }
          }(this.zo.Bt),
          Od = qO(this.zo);
        this.stopChunkReports = () => {
          dd(), Od()
        }
      }
      restartChunkStreaming() {
        (0, FO.k)(this.zo, (0, hd.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - HO.e)), this.startChunkReports()
      }
      register(dd) {
        const Od = this.zo,
          md = (0, hd.b)();
        dd.bY(vd.Sc, (dd => {
          Td.e.applyNewClientOptions(dd)
        })), dd.bY(vd.pd, (dd => {
          bO.c.onReceiveColyseusPing(dd)
        })), dd.bY(vd.He, (dd => {
          let {
            key: Od,
            value: md
          } = dd;
          (0, pd.setCookie)(this.gameNameWithVariation, Od, md)
        })), dd.bY(vd.Je, (dd => {
          bd.j.lQ("setDiscordReportKey", dd)
        })), (0, Wd.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), dd.bY(vd.lc, (Fd => {
          const {
            YO: Rd,
            gO: Xd
          } = Fd;
          if ((0, Wd.setAdjustment)(Xd), this.connectionResume.onInitialInfo(Fd.wO, Fd.aO), Wd.offlineInputReplay.rY(Fd.EO), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Rd);
            try {
              null === Fd.JO && (0, hd.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), Bd(Od.Bt), Td.e.apply({
                shopInfo: null,
                _shopVersion: oO.e
              });
              const md = Od.qE.emd(Od.YV);
              md.Km && (md.chestClosed(), bd.j.lQ("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), bd.j.lQ("initInfoReceived", dd)
            } finally {
              const dd = null === Fd.JO ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = dd, this.connectionResume.onResumeInitialInfo(Fd.JO, (() => {
                dd.endSeq = (0, hd.b)().client.inventoryPrediction.lastActionSeq
              })), null === dd && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Rd), bd.j.lQ("sessionReplayJoinTicket", Fd.SO), TO.e.markAdmitted(), (0, FO.m)(Od), bd.j.lQ("loadingScreenState", "loadingPage:loadingWorld"), Od.bV = Rd, Od.qE.MOd(Od.YV, Od.qE.names.entityName) && Od.qE.pG(Od.YV, Od.qE.names.entityName), (0, hd.b)().setEntityName(Od.bV, (0, hd.b)().getRawEntityName(Od.YV)), Od.sG[Od.bV] = {}, Od.qE.yG(Od.YV, Od.qE.names.entityName), bd.j.lQ("initInfoReceived", dd), this.startChunkReports(), md.client.onServerConnectionFinalised()
        })), dd.bY(vd.re, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const dd = this.replayResume;
            if (this.replayResume = null, !dd) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: md
            } = (0, hd.b)().client, {
              sync: Fd
            } = dd, Rd = new Set(Wd.offlineInputReplay.takeDroppedActions());
            if (Fd) {
              var Xd;
              const Wd = null !== (Xd = dd.endSeq) && void 0 !== Xd ? Xd : md.lastActionSeq;
              md.forget((dd => dd > Fd.Nm && dd <= Wd || Rd.has(dd))), hO(Od, md, bd.j, Fd.Nm, Fd.load)
            } else md.dropPending(), md.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), dd.bY(vd.We, (dd => {
          let {
            Rm: md,
            om: Wd,
            Nm: Fd
          } = dd;
          const {
            inventoryPrediction: Rd
          } = (0, hd.b)().client, Xd = () => {
            Od.qE.emd(Od.YV).loadFromString(md)
          };
          this.replayResume && (this.replayResume.sync = {
            Nm: Fd,
            load: Xd
          }), hO(Od, Rd, bd.j, Fd, Xd, Wd)
        })), dd.bY(vd.Cd, (dd => {
          let {
            type: Od,
            location1: md,
            location2: Wd,
            location3: Fd,
            score: Rd
          } = dd;
          (0, pO.logProgressionEvent)({
            type: Od,
            location1: md,
            location2: Wd,
            location3: Fd,
            score: Rd
          })
        })), dd.bY(vd.oe, (dd => {
          let {
            type: Od,
            resourceType: md,
            amount: Wd,
            category: Fd,
            itemName: Rd
          } = dd;
          (0, pO.logResourceEvent)({
            type: Od,
            resourceType: md,
            amount: Wd,
            category: Fd,
            itemName: Rd
          })
        })), dd.bY(vd.Fc, (dd => {
          let {
            leaveEventType: Od,
            category: md,
            subCategory: Wd,
            value: Fd
          } = dd;
          (0, pO.updateLeaveValue)({
            leaveEventType: Od,
            category: md,
            subCategory: Wd,
            value: Fd
          })
        })), dd.bY(vd.Lb, (dd => {
          let {
            cat1: Od,
            cat2: md,
            cat3: Wd,
            value: Fd
          } = dd;
          (0, pO.logCustomAnalyticsEvent)({
            cat1: Od,
            cat2: md,
            cat3: Wd,
            value: Fd
          })
        })), dd.bY(vd.Ac, (dd => {
          (0, hd.b)().client.leaveGameUnwanted({
            reason: (0, QO.e)(dd),
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, yO.navigatePreserveSearch)("/")
        })), dd.bY(vd.ue, (dd => {
          bd.j.lQ("serverUpdating", Date.now() + dd, !0)
        })), dd.bY(vd.Rc, tO.c), dd.bY(vd.Kc, (dd => {
          console.error(`[logErrorToConsole]: ${dd}`)
        }))
      }
    }
    var wO = md(40584),
      aO = md(40596),
      EO = md(1122),
      JO = md(40592),
      UO = md(3394),
      xO = md(4869);
    class BO {
      constructor(dd, Od) {
        this.zo = dd, this.clientApi = Od
      }
      register(dd) {
        const Od = this.zo,
          md = (0, hd.b)();
        dd.bY(vd.vb, (dd => {
          let {
            chatMsgId: Od,
            worldCodeLineId: md,
            content: Wd,
            chatterEId: Fd,
            chatterObjectsToReplay: Rd
          } = dd;
          bd.j.lQ("chat", {
            serverChatMsgId: Od,
            worldCodeLineId: md,
            content: Wd,
            chatterEId: Fd,
            chatterObjectsToReplay: Rd
          }, !0)
        })), dd.bY(vd.tb, (dd => {
          let {
            chatMsgId: Od
          } = dd;
          bd.j.lQ("chatRemoved", Od, !0)
        })), dd.bY(vd.bf, (dd => {
          bd.j.lQ("TopRightHelper", dd, !0)
        })), dd.bY(vd.Xe, (dd => {
          (0, wO.e)(dd)
        })), dd.bY(vd.Bc, (dd => {
          let {
            category: Od,
            timeframe: md,
            data: Wd
          } = dd;
          bd.j.lQ("leaderboardResponse", {
            category: Od,
            timeframe: md,
            data: Wd
          })
        })), dd.bY(vd.Ue, (() => {
          bd.j.lQ("showShopTutorial", null, !0)
        })), dd.bY(vd.Bd, (dd => {
          bd.j.lQ("progressBarUpdate", dd, !0)
        })), dd.bY(vd.mc, (dd => {
          bd.j.lQ("middleScreenBarInitiate", {
            duration: dd.NR,
            qR: dd.qR,
            horizBarRemOffset: dd.HR
          }, !0)
        })), dd.bY(vd.Sd, (() => {
          bd.j.lQ("middleScreenBarRemove", !0)
        })), dd.bY(vd.Ie, (dd => {
          let {
            id: Od,
            position: md,
            style: Wd,
            CO: Fd,
            MO: Rd
          } = dd;
          bd.j.lQ("setDirectionArrow", {
            id: Od,
            position: md,
            style: Wd,
            text: (0, vd.s)(Fd),
            MO: Rd
          }, !0)
        })), dd.bY(vd.Bb, (dd => {
          let {
            id: Od
          } = dd;
          bd.j.lQ("clearDirectionArrow", {
            id: Od
          }, !0)
        })), dd.bY(vd.Kb, (dd => {
          (0, xO.onCosmeticPackGranted)(dd)
        })), dd.bY(vd._c, (dd => {
          let {
            id: Od,
            yR: md
          } = dd;
          const {
            type: Fd,
            params: Rd
          } = (0, aO.d)(md), Xd = {
            ...Rd
          };
          for (const Wd of aO.b) Wd in Xd && Xd[Wd] && (Xd[Wd] = (0, vd.s)(Xd[Wd]));
          YO.e.queueQTE(Od, Fd, Xd).getResult().then((dd => {
            "boolean" === typeof dd && (0, Wd.sendColyMessage)(vd.bi, {
              qteId: Od,
              qteResponse: dd
            })
          }))
        })), dd.bY(vd.Vd, (dd => {
          YO.e.cancelQTE(dd)
        })), (0, Wd.onGameResetOnce)((() => {
          YO.e.reset()
        })), dd.bY(vd.cd, (dd => {
          let {
            id: Od,
            clientParameters: md
          } = dd;
          (0, vO.i)(Od, md)
        })), dd.bY(vd.Yd, (dd => {
          (0, vO.m)(dd)
        })), dd.bY(vd.ff, (dd => {
          let {
            text: Od,
            id: md,
            destructive: Fd
          } = dd;
          (0, vO.o)(md, Od, Fd, (dd => {
            (0, Wd.sendColyMessage)(vd.Cj, {
              bX: md,
              TX: dd,
              pX: 5
            })
          }))
        })), dd.bY(vd.jd, (dd => {
          let {
            info: Od
          } = dd;
          bd.j.lQ("overShopInfo", Od, !0)
        })), dd.bY(vd.$b, (dd => {
          let {
            iO: md,
            AO: Wd
          } = dd;
          this.clientApi.openShop(Od.YV, md, Wd)
        })), dd.bY(vd.Zb, (dd => {
          let {
            IR: Od,
            lR: md,
            CR: Wd
          } = dd;
          bd.j.lQ("flyingMiddleMessage", {
            content: (0, vd.s)(Od),
            lR: md,
            CR: Wd
          }, !0)
        })), dd.bY(vd.tf, (dd => {
          const Od = dd === EO.h ? null : {
            message: `Currently loaded as variation: ${dd}`,
            type: "Warning"
          };
          bd.j.lQ("showPermanentBottomMessage", Od, !0)
        })), dd.bY(vd.cc, (dd => {
          let {
            messageType: Od,
            data: Wd
          } = dd;
          (0, JO.f)(Od) ? (0, JO.d)(Od, Wd) : ("freeCamPerms" === Od && md.client.freeCameraController.setPerms(Wd.key, Wd.value), md.client.triggerGameCallback("onReceivedMessageFromServer", Od, Wd))
        })), dd.bY(vd.Eb, UO.l)
      }
    }
    class SO {
      constructor(dd, Od, md, Wd) {
        this.gameNameWithVariation = dd, this.zo = md, this.connectionResume = Wd, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new gd.e(Od, this.zo)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Wd.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      dtd(dd) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new gd.e(dd, this.zo), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(dd, Od) {
        const md = this.zo,
          Wd = dd => {
            this.stateReplicationHandler.setUpIfQueued(dd)
          };
        new gO(md, this.gameNameWithVariation, this.connectionResume).register(dd), new Sd(md).register(dd), new fd(md).register(dd), new Gd(md, Wd).register(dd), new Cd(md, Wd).register(dd), new BO(md, Od).register(dd), new KO(md, Wd).register(dd)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var sO = md(40603),
      uO = md(40611),
      VO = md(747),
      iO = md(1916);
    class AO {
      constructor(dd, Od, md, Wd) {
        this.msgHandler = md, this.listener = Wd, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new sO.c({
          reconnect: dd,
          isLive: () => Wd.isLive(),
          onReconnected: dd => {
            this.resumeOnRoom(dd)
          },
          onGaveUp: (dd, Od) => {
            Wd.onGaveUp(dd, Od)
          },
          freeze: Od,
          releaseSeat: Od => {
            dd(Od).then((dd => {
              dd.leave(!0)
            }), (dd => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", dd)
            }))
          }
        })
      }
      onInitialInfo(dd, Od) {
        this.session.onInitialInfo(dd, Od)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(dd, Od) {
        if (this.session.onResuming(), null === dd) {
          try {
            (0, hd.b)().client.itemDropPrediction.reset()
          } catch (md) {
            console.error("Error dropping the item drop predictions on resuming", md)
          }
          return Wd.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, hd.b)().client.itemDropPrediction.onResumeReplayOffered(), Wd.offlineInputReplay.replayFrom(dd.xO, Od)
      }
      onResumed(dd) {
        this.setSuspended(!1), (0, Wd.resendBeacons)();
        try {
          dd()
        } catch (Od) {
          console.error("Error completing the resume", Od)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(dd) {
        const Od = (0, VO.onVisitSessionGameServerConnected)((() => dd.connection.isOpen));
        dd.TY(Od);
        const md = new uO.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(dd, "silent"), dd.leave(!1))
        }));
        dd.onStateChange((() => {
          md.heard()
        }));
        const Wd = Od => {
          Od.persisted || dd.leave(!0)
        };
        window.addEventListener("pagehide", Wd), dd.TY(((Od, md) => {
          if (dd === this.attachedRoom && this.listener.isLive()) return (0, Rd.l)(Od) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Od}, reconnecting`), this.listener.onDropped(Od, md), void this.onConnectionDropped(dd, String(Od))) : void this.listener.onRoomLeft(Od, md)
        })), this.attachedRoom = dd, this.detachRoomListeners = () => {
          Od(), md.dispose(), window.removeEventListener("pagehide", Wd)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(dd) {
        dd !== this.suspended && (this.suspended = dd, (0, Wd.setConnectionSuspended)(dd), (0, hd.b)().client.itemDropPrediction.setSuspended(dd))
      }
      detachRoom() {
        var dd;
        null === (dd = this.detachRoomListeners) || void 0 === dd || dd.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(dd, Od) {
        (0, iO.reportClientError)("disconnect", "Left room", Od), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Wd.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(dd.reconnectionToken)
      }
      resumeOnRoom(dd) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), dd.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, ld.q)(), Wd.offlineInputReplay.onConnectionReplaced(), this.msgHandler.dtd(dd), this.listener.onReconnected(dd), this.attachRoom(dd)
      }
    }
    var rO = md(2482),
      GO = md(2484),
      nO = md(1415),
      LO = md(1361),
      PO = md(5402),
      zO = md(4365),
      cO = md(1368),
      jO = md(39249),
      DO = md(40620),
      eO = md(10092),
      IO = md(40627),
      lO = md(1268),
      CO = md(38109),
      ZO = md(40634),
      kO = md(1860),
      fO = md(3862),
      MO = md(1627);

    function dm(dd) {
      var Od, md;
      if ("object" !== typeof dd || null === dd) return {
        errType: typeof dd
      };
      const Wd = dd;
      return {
        errType: null !== (Od = null === (md = dd.constructor) || void 0 === md ? void 0 : md.name) && void 0 !== Od ? Od : "",
        errName: "string" === typeof Wd.name ? Wd.name : "",
        eventType: "string" === typeof Wd.type ? Wd.type : "",
        errStack: "string" === typeof Wd.stack ? Wd.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Om(dd) {
      if ("undefined" !== typeof ProgressEvent && dd instanceof ProgressEvent) return !0;
      if (!(dd instanceof Error)) return !1;
      const Od = dd.code;
      return "ServerError" === dd.name && void 0 === Od || "AbortError" === dd.name || "seat reservation expired." === dd.message || "early_leave" === dd.message
    }(0, Hd.l)((dd => {
      (0, iO.reportClientError)("wasm_net", dd)
    }));
    let mm = !0;

    function Wm() {
      mm = !1
    }
    class Fm {
      constructor(dd) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.zo = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = dd.gameNameWithVariation, this.lobbyName = dd.lobbyName, this.colyClient = dd.colyClient, this.userContext = dd.userContext
      }
      async connectToServer(dd, Od, md) {
        Td.e.reset(), dd.sG = {
          [dd.YV]: {}
        }, dd.bV = void 0, (0, ld.q)(), (0, hd.b)().removeAllEntityNames(), (0, hd.b)().setEntityName(dd.YV, this.userContext.getPlayerName()), (0, nO.l)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, kO.f)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Xd = performance.now();
        md.aborted || (0, LO.A)("wasm_core_ready", Xd);
        const Kd = (0, IO.g)(this.userContext, (() => {
          const {
            roomName: Wd,
            joinOptions: Fd
          } = (0, Yd.g)(this.userContext, this.gameNameWithVariation, this.lobbyName, Od, (dd => zO.c.isUsingCustomGameTexturePack(dd)));
          return Fd.joinAdHold = this.joinAdHold, Fd.renderBackend = (0, fO.d)(dd.gt), (0, DO.e)((() => this.colyClient.joinOrCreateUntil(md, Wd, Fd)), md)
        }));
        return bd.j.lQ("loadingScreenState", "loadingPage:joiningLobby"), await Kd.then((Od => {
          if (this.joinedAt = performance.now(), (0, LO.A)("wasm_joined", this.joinedAt), this.zo = dd, this.joinAdHold) {
            const dd = (0, kO.p)((() => {
              Od.send(Fd.f), (0, LO.u)(), TO.e.markJoinAdEnded()
            }));
            Od.TY(dd), (0, Wd.onGameResetOnce)(dd)
          }
          const md = new yd(Od);
          this.connectionResume = new AO((dd => this.colyClient.reconnect(dd)), (Od => {
            dd.qB(Od)
          }), md, {
            isLive: () => (0, hd.b)().client.getMsgHandler() === md,
            onDropped: (dd, Od) => {
              (0, GO.k)(dd) || this.logUnrecognisedConnectionLoss(dd, void 0, {
                site: "drop",
                closeReason: null !== Od && void 0 !== Od ? Od : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (dd, Od) => {
              this.onRoomLeft(dd, Od)
            },
            onReconnected: dd => {
              this.incomingMsgInitialisor.dtd(dd), this.checkSendPath = (0, jO.d)(md, dd, Hd.o)
            },
            onGaveUp: (dd, Od) => {
              this.onResumeGaveUp(dd, Od)
            }
          }), this.connectionResume.attachRoom(Od), (0, Wd.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Rd = md.send,
            Xd = md.bY,
            Kd = md.IWd.send,
            vd = md.IWd.bY,
            Qd = md.fQd;
          this.checkSendPath = (0, jO.d)(md, Od, Hd.o);
          const td = setInterval((() => {
            Rd === md.send && Xd === md.bY && Kd === md.IWd.send && vd === md.IWd.bY && Qd === md.fQd || Wm(), this.checkSendPath()
          }), 1e4);
          return (0, Wd.onGameResetOnce)((() => {
            clearInterval(td)
          })), {
            success: !0,
            successDetails: md
          }
        })).catch((Od => {
          if (md.aborted && Od === (0, lO.e)(md)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (Od instanceof CO.i) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: Od.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, ZO.b)(Od, Od.leg)
            }
          };
          dd.AH(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Od.code}\n`, Od);
          const Wd = Od.code;
          return Wd === Rd.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Rd.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Wd, Od.message, {
                site: "join",
                sinceJoinStart: (0, GO.d)(performance.now() - Xd),
                ...dm(Od)
              }, Om(Od)),
              rematch: (0, DO.b)(Od),
              gameRefused: (0, eO.c)(Od),
              joinFailure: (0, ZO.b)(Od, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(dd, Od, md) {
        bd.j.lQ("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new SO(this.gameNameWithVariation, Od.IWd, dd, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Fd = Od.Xtd();
        this.incomingMsgInitialisor.setupOnMessageListeners(Fd, md), (0, Wd.onConnectionToServerReady)(Fd, Od), this.joinAdHold && TO.e.markAdmissionAwaited(), Fd.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(dd, Od) {
        (0, cO.rH)(new Error("Reconnect failed"), {
          ...(0, rO.o)(Od),
          game: this.gameNameWithVariation
        }), (0, iO.reportClientError)("disconnect", "Reconnect failed", Od.reason), (0, hd.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !dd,
          canPlayAgain: dd,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, yO.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, GO.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(dd, Od) {
        var md;
        if (dd === Rd.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${dd}`), dd === Rd.e.serverUpdating.code) return (0, iO.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, hd.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.zo.AH(`Kicked from server with code ${dd}`, new Error);
        const Wd = Object.keys(Rd.e).find((Od => Rd.e[Od].code === dd));
        (0, iO.reportClientError)("disconnect", "Left room", null !== Wd && void 0 !== Wd ? Wd : String(dd)), MO.e.leftGame(this.gameNameWithVariation, dd);
        const Fd = this.onConnectionToServerLost(dd, void 0, {
          site: "leave",
          closeReason: null !== Od && void 0 !== Od ? Od : "",
          sinceJoined: this.sinceJoined()
        });
        (0, hd.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Fd.reason}`,
          canReconnect: Fd.canReconnect,
          requiresRefresh: Fd.requiresRefresh,
          automaticallyReconnect: null !== (md = Fd.automaticallyReconnect) && void 0 !== md && md
        }), (0, yO.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, PO.F)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, yO.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(dd, Od, md) {
        var Wd;
        let Fd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Wd = Od) && void 0 !== Wd && Wd.endsWith(Rd.m) && (this.userContext.invalidateTrafficCode(), Od = Od.replace(Rd.m, "")), dd === Rd.e.outdatedVersion.code) return console.error("Outdated client with version ", Xd.c, ", refreshing page"), (0, pd.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (dd === Rd.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, pd.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Xd in Rd.e) {
          const {
            code: md,
            text: Wd,
            canReconnect: Fd
          } = Rd.e[Xd];
          if (md === dd) {
            console.log("matched known error", dd, "leaving game");
            return {
              reason: "" !== Wd ? Wd : Od || `Code: ${dd}`,
              requiresRefresh: !1,
              canReconnect: Fd,
              automaticallyReconnect: md === Rd.e.customGameUpdated.code || md === Rd.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, GO.g)(dd) || Fd ? console.warn("Connection lost", dd, Od) : this.logUnrecognisedConnectionLoss(dd, Od, md), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${dd}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Fd ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(dd, Od, md) {
        (0, cO.rH)(new Error("Unrecognised connection loss"), {
          code: String(dd),
          cause: null !== Od && void 0 !== Od ? Od : "",
          ...md,
          game: this.gameNameWithVariation,
          ...(0, GO.o)()
        })
      }
    }
  },
  40537: (dd, Od, md) => {
    md.d(Od, {
      e: () => Zm,
      i: () => mW
    });
    var Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud, xd, Bd, Sd, sd, ud, Vd, Ad, rd, Gd, nd, Ld, Pd, zd, cd, jd, Dd, ed, Id, ld, Cd, Zd, kd, fd, Md, dO, OO, mO, WO, FO, RO, XO, KO, hO, vO, QO, tO, oO, NO, qO, HO, yO, bO, TO, pO, YO, gO, wO, aO, EO, JO, UO, xO, BO, SO, sO, uO, VO, iO, AO, rO, GO, nO, LO, PO, zO, cO, jO, DO, eO, IO, lO, CO, ZO, kO, fO, MO, dm = md(32),
      Om = md(38677),
      mm = md(40546),
      Wm = md(40550),
      Fm = md(10329),
      Rm = md(699),
      Xm = md(693),
      Km = md(38003);
    let hm = (Wd = (0, Fm.type)("number"), Fd = (0, Fm.type)("number"), Rd = (0, Fm.type)("number"), Xd = (0, Fm.type)("number"), Kd = (0, Fm.type)("number"), hd = (0, Fm.type)("number"), vd = (0, Fm.type)("string"), Qd = class extends Fm.Schema {
        constructor() {
          super(...arguments), (0, mm.e)(this, "id", td, this), (0, mm.e)(this, "amount", od, this), (0, mm.e)(this, "x", Nd, this), (0, mm.e)(this, "y", qd, this), (0, mm.e)(this, "z", Hd, this), (0, mm.e)(this, "size", yd, this), (0, mm.e)(this, "attributes", bd, this)
        }
      }, td = (0, Wm.c)(Qd.prototype, "id", [Wd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), od = (0, Wm.c)(Qd.prototype, "amount", [Fd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Nd = (0, Wm.c)(Qd.prototype, "x", [Rd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qd = (0, Wm.c)(Qd.prototype, "y", [Xd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Hd = (0, Wm.c)(Qd.prototype, "z", [Kd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yd = (0, Wm.c)(Qd.prototype, "size", [hd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), bd = (0, Wm.c)(Qd.prototype, "attributes", [vd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Qd),
      Qm = (Td = (0, Fm.type)("string"), pd = (0, Fm.type)("string"), Yd = class extends Fm.Schema {
        constructor() {
          super(...arguments), (0, mm.e)(this, "itemName", gd, this), (0, mm.e)(this, "enchantmentTier", wd, this)
        }
      }, gd = (0, Wm.c)(Yd.prototype, "itemName", [Td], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), wd = (0, Wm.c)(Yd.prototype, "enchantmentTier", [pd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Yd),
      tm = (Ed = (0, Fm.type)("string"), Jd = (0, Fm.type)("string"), Ud = (0, Fm.type)("number"), xd = (0, Fm.type)("number"), Bd = (0, Fm.type)("number"), Sd = (0, Fm.type)("float32"), sd = (0, Fm.type)("float32"), ud = (0, Fm.type)("float32"), Vd = (0, Fm.type)("string"), Ad = (0, Fm.type)(["number"]), rd = (0, Fm.type)("boolean"), Gd = class extends Fm.Schema {
        constructor() {
          super(...arguments), (0, mm.e)(this, "type", nd, this), (0, mm.e)(this, "name", Ld, this), (0, mm.e)(this, "x", Pd, this), (0, mm.e)(this, "y", zd, this), (0, mm.e)(this, "z", cd, this), (0, mm.e)(this, "xRotation", jd, this), (0, mm.e)(this, "yRotation", Dd, this), (0, mm.e)(this, "zRotation", ed, this), (0, mm.e)(this, "followingEId", Id, this), (0, mm.e)(this, "followingOffset", ld, this), (0, mm.e)(this, "shouldMatchFollowingEntityRotation", Cd, this)
        }
      }, nd = (0, Wm.c)(Gd.prototype, "type", [Ed], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ld = (0, Wm.c)(Gd.prototype, "name", [Jd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Pd = (0, Wm.c)(Gd.prototype, "x", [Ud], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), zd = (0, Wm.c)(Gd.prototype, "y", [xd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cd = (0, Wm.c)(Gd.prototype, "z", [Bd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jd = (0, Wm.c)(Gd.prototype, "xRotation", [Sd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Dd = (0, Wm.c)(Gd.prototype, "yRotation", [sd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ed = (0, Wm.c)(Gd.prototype, "zRotation", [ud], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Id = (0, Wm.c)(Gd.prototype, "followingEId", [Vd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ld = (0, Wm.c)(Gd.prototype, "followingOffset", [Ad], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Fm.ArraySchema(0, 0, 0)
        }
      }), Cd = (0, Wm.c)(Gd.prototype, "shouldMatchFollowingEntityRotation", [rd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Gd),
      om = (Zd = (0, Fm.type)("float32"), kd = (0, Fm.type)("float32"), fd = (0, Fm.type)("boolean"), Md = (0, Fm.type)("boolean"), dO = (0, Fm.type)("float32"), OO = (0, Fm.type)("boolean"), mO = (0, Fm.type)("string"), WO = (0, Fm.type)("string"), FO = (0, Fm.type)("string"), RO = (0, Fm.type)("string"), XO = (0, Fm.type)(["number"]), KO = (0, Fm.type)("number"), hO = (0, Fm.type)({
        map: Qm
      }), vO = class extends tm {
        constructor() {
          super(...arguments), (0, mm.e)(this, "scale", QO, this), (0, mm.e)(this, "speed", tO, this), (0, mm.e)(this, "jumping", oO, this), (0, mm.e)(this, "crouching", NO, this), (0, mm.e)(this, "cameraPitch", qO, this), (0, mm.e)(this, "armSwinging", HO, this), (0, mm.e)(this, "heldItemName", yO, this), (0, mm.e)(this, "heldItemEnchantmentTier", bO, this), (0, mm.e)(this, "pose", TO, this), (0, mm.e)(this, "ridingVehicleEId", pO, this), (0, mm.e)(this, "meshOffset", YO, this), (0, mm.e)(this, "baseRenderHeading", gO, this), (0, mm.e)(this, "armour", wO, this)
        }
      }, QO = (0, Wm.c)(vO.prototype, "scale", [Zd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), tO = (0, Wm.c)(vO.prototype, "speed", [kd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oO = (0, Wm.c)(vO.prototype, "jumping", [fd], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), NO = (0, Wm.c)(vO.prototype, "crouching", [Md], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), qO = (0, Wm.c)(vO.prototype, "cameraPitch", [dO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), HO = (0, Wm.c)(vO.prototype, "armSwinging", [OO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), yO = (0, Wm.c)(vO.prototype, "heldItemName", [mO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), bO = (0, Wm.c)(vO.prototype, "heldItemEnchantmentTier", [WO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), TO = (0, Wm.c)(vO.prototype, "pose", [FO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), pO = (0, Wm.c)(vO.prototype, "ridingVehicleEId", [RO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), YO = (0, Wm.c)(vO.prototype, "meshOffset", [XO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Fm.ArraySchema(0, 0, 0)
        }
      }), gO = (0, Wm.c)(vO.prototype, "baseRenderHeading", [KO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wO = (0, Wm.c)(vO.prototype, "armour", [hO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Fm.MapSchema
        }
      }), vO),
      Nm = (aO = (0, Fm.type)("string"), EO = (0, Fm.type)("string"), JO = (0, Fm.type)("string"), UO = (0, Fm.type)("uint8"), xO = class extends om {
        constructor() {
          super(...arguments), (0, mm.e)(this, "variation", BO, this), (0, mm.e)(this, "ownerDbId", SO, this), (0, mm.e)(this, "metaInfo", sO, this), (0, mm.e)(this, "aiState", uO, this)
        }
      }, BO = (0, Wm.c)(xO.prototype, "variation", [aO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), SO = (0, Wm.c)(xO.prototype, "ownerDbId", [EO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), sO = (0, Wm.c)(xO.prototype, "metaInfo", [JO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), uO = (0, Wm.c)(xO.prototype, "aiState", [UO], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xO);
    VO = (0, Fm.type)("string"), iO = (0, Fm.type)("string"), AO = (0, Fm.type)("string"), rO = (0, Fm.type)("string"), GO = class extends tm {
      constructor() {
        super(...arguments), (0, mm.e)(this, "meshKind", nO, this), (0, mm.e)(this, "meshOpts", LO, this), (0, mm.e)(this, "pose", PO, this), (0, mm.e)(this, "leaderboardTop", zO, this)
      }
    }, nO = (0, Wm.c)(GO.prototype, "meshKind", [VO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), LO = (0, Wm.c)(GO.prototype, "meshOpts", [iO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), PO = (0, Wm.c)(GO.prototype, "pose", [AO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), zO = (0, Wm.c)(GO.prototype, "leaderboardTop", [rO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function qm(dd) {
      return Object.keys(Fm.Metadata.getFields(dd))
    }
    const Hm = qm(Nm);
    for (const WW of Rm.x)
      if (!Hm.includes(WW)) throw new Error(`Mob Schema is missing a networked property: "${WW}"`);
    const ym = qm((cO = (0, Fm.type)("string"), jO = (0, Fm.type)("float32"), DO = (0, Fm.type)("float32"), eO = (0, Fm.type)("float32"), IO = (0, Fm.type)("float32"), lO = class extends tm {
      constructor() {
        super(...arguments), (0, mm.e)(this, "soundName", CO, this), (0, mm.e)(this, "volume", ZO, this), (0, mm.e)(this, "refDistance", kO, this), (0, mm.e)(this, "maxHearDist", fO, this), (0, mm.e)(this, "rate", MO, this)
      }
    }, CO = (0, Wm.c)(lO.prototype, "soundName", [cO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), ZO = (0, Wm.c)(lO.prototype, "volume", [jO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), kO = (0, Wm.c)(lO.prototype, "refDistance", [DO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Km.i
      }
    }), fO = (0, Wm.c)(lO.prototype, "maxHearDist", [eO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Km.d
      }
    }), MO = (0, Wm.c)(lO.prototype, "rate", [IO], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), lO));
    for (const WW of Xm.f)
      if (!ym.includes(WW)) throw new Error(`AudioEntity Schema is missing a replicated property: "${WW}"`);
    var bm = md(39970),
      Tm = md(1300),
      pm = md(701),
      Ym = md(39744),
      gm = md(2991),
      wm = md(405),
      am = md(38736),
      Em = md(39645),
      Jm = md(3143),
      Um = md(38702),
      xm = md(39997),
      Bm = md(39137),
      Sm = md(415),
      sm = md.n(Sm),
      um = md(39498),
      Vm = md(38615),
      im = md(39629),
      Am = md(39662);
    class rm {
      constructor(dd, Od) {
        this.bloxd = dd, this.eId = Od, this.zo = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Aq = !1, this.zo = dd.zo
      }
      initClient(dd) {
        var Od, md, Wd;
        this.colyseusEntity = dd, this.meshKind = dd.meshKind, this.meshOpts = dd.meshOpts, this.leaderboardTop = dd.leaderboardTop, this.zo.qE.add([dd.x, dd.y, dd.z], 1, 1, null, null, !1, !1, this.eId), this.zo.qE.yG(this.eId, "smoothToServerPos");
        const Fd = "Person" === this.meshKind;
        this.zo.qE.yG(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Fd ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Fd ? [{
            nodeName: "HeadMesh",
            softTolerance: xm.j,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = dm.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (dd => {
          this.updateHidingMeshMgr()
        }));
        const Rd = () => {
          const dd = this.zo.qE.Vmd(this.eId);
          if (!dd) return;
          const Od = (0, Bm.h)(this.eId);
          if ("number" === typeof dd.JA) {
            var md, Wd, Fd, Rd;
            const Xd = null === (md = (0, Jm.i)("head", null === (Fd = this.getSpec()) || void 0 === Fd || null === (Rd = Fd.opts.textures) || void 0 === Rd ? void 0 : Rd.head)) || void 0 === md || null === (Wd = md.personModel) || void 0 === Wd ? void 0 : Wd.fullBody;
            return this.zo.gt.HA.setPickable(dd.JA, Od && !Xd), void(0, Vm.updatePersonAttachmentPickability)(this.zo, this.eId, Od)
          }
          const Xd = dd.mesh;
          if (Xd)
            for (const Kd of [Xd, ...Xd.getChildMeshes(!1)]) "my" in Kd && !Kd.name.startsWith("Cape|") && (Kd.my = Od)
        };
        this.canAttackSub = dm.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Rd), this.interactableSub = dm.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, Rd), this.overlayColourSub = dm.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (dd => {
          this.updateOverlayColour(dd)
        })), this.opacitySub = dm.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (dd => {
          this.updateOpacity(dd)
        })), this.zIndexSub = dm.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (dd => {
          this.updateZIndex(dd)
        }));
        const Xd = this.zo.sG[this.zo.YV][this.eId];
        this.updateOverlayColour(null !== (Od = null === Xd || void 0 === Xd ? void 0 : Xd.overlayColour) && void 0 !== Od ? Od : null), this.updateOpacity(null !== (md = null === Xd || void 0 === Xd ? void 0 : Xd.opacity) && void 0 !== md ? md : 1), this.updateZIndex(null !== (Wd = null === Xd || void 0 === Xd ? void 0 : Xd.zIndex) && void 0 !== Wd ? Wd : 0), this.multilineTextBoxSub = (0, Um.u)(this.zo, this.eId)
      }
      onChangeClient(dd, Od) {
        if ("xRotation" === dd || "yRotation" === dd || "zRotation" === dd)(0, Um.v)(this.zo, this.eId, dd, Od);
        else if ("pose" === dd) {
          const dd = this.zo.qE.Pmd(this.eId);
          dd && (dd.pose = Od || "standing")
        } else "meshKind" === dd || "meshOpts" === dd ? (this[dd] = Od, this.queueMeshRebuild()) : "name" === dd && "" !== Od ? this.updateHidingMeshMgr() : "leaderboardTop" === dd && (this.leaderboardTop = Od, dm.j.lQ(`leaderboardTop|${this.eId}`, Od))
      }
      disposeClient() {
        this.Aq = !0, this.zo.qE.deleteEntity(this.eId), dm.j.unsubscribe(this.canSeeSub), dm.j.unsubscribe(this.canAttackSub), dm.j.unsubscribe(this.interactableSub), dm.j.unsubscribe(this.overlayColourSub), dm.j.unsubscribe(this.opacitySub), dm.j.unsubscribe(this.zIndexSub), dm.j.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var dd, Od;
        return {
          canSee: null !== (dd = null === (Od = this.zo.sG[this.zo.YV][this.eId]) || void 0 === Od ? void 0 : Od.canSee) && void 0 !== dd && dd,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var dd, Od, md;
        const {
          zo: Wd
        } = this, {
          qE: Fd
        } = Wd, Rd = this.getCurrentHidingMeshMgrState();
        if ((0, wm.fe)(this.previousHidingMeshManagerState, Rd)) return;
        if (this.previousHidingMeshManagerState = Rd, Fd.pG(this.eId, "hidingMeshManager"), null === (dd = Wd.sG[Wd.YV][this.eId]) || void 0 === dd || !dd.canSee) return;
        const Xd = this.getSpec();
        if (!Xd) return;
        const {
          type: Kd,
          opts: hd
        } = Xd;
        "Person" === Kd && (hd.textures = (0, Jm.n)(hd.textures)), hd.eId = this.eId, Fd.yG(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var dd, Od, md;
            "Leaderboard" === Kd && (hd.leaderboardTop = this.leaderboardTop);
            const Rd = this.bloxd.client.meshCreator.getEntityMesh(Kd, hd, (dd => {
              var Od, md;
              if ("number" === typeof dd) {
                var Fd, Rd, Xd;
                const Od = Wd.gt.HA;
                Od.setEntityId(dd, this.eId);
                const md = "Person" === Kd && (null === (Fd = (0, Jm.i)("head", null === (Xd = hd.textures) || void 0 === Xd ? void 0 : Xd.head)) || void 0 === Fd || null === (Rd = Fd.personModel) || void 0 === Rd ? void 0 : Rd.fullBody);
                return void Od.setPickable(dd, (0, Bm.h)(this.eId) && !md)
              }
              const vd = dd;
              for (const Kd of [vd, ...vd.getChildMeshes(!1)]) void 0 === Kd.my || Kd.name.startsWith("Cape|") || (Kd.my = (0, Bm.h)(this.eId), Kd.metadata ??= new Wd.gt.Wy, Kd.metadata.eId = this.eId);
              this.updateOpacity(null !== (Od = null === (md = Wd.sG[Wd.YV][this.eId]) || void 0 === md ? void 0 : md.opacity) && void 0 !== Od ? Od : 1)
            }));
            if (!Rd) return;
            const {
              JA: Xd,
              mesh: vd,
              meshOffset: Qd,
              nameYOffset: td,
              modelLoaded: od
            } = Rd;
            null === od || void 0 === od || od.then((() => {
              var dd;
              (null === (dd = Fd.Vmd(this.eId)) || void 0 === dd ? void 0 : dd.mesh) === vd && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Nd = null === Xd ? null : Wd.gt.HA.QFd(Xd, 0);
            if (Fd.yG(this.eId, Fd.names.mesh, {
                JA: Xd,
                fWd: Nd,
                mesh: vd,
                Uhd: !1,
                xhd: "Leaderboard" !== Kd,
                offset: Qd.slice(),
                Jhd: "ParticleEmitter" === Kd && hd.followTargetMeshOffset ? dd => {
                  var Od;
                  sm().copy(dd, Qd);
                  const md = null === (Od = Fd.JWd(this.eId)) || void 0 === Od ? void 0 : Od.xq,
                    Wd = void 0 === md ? null : Fd.Pmd(md);
                  if (Wd) {
                    var Rd, Xd;
                    const Od = this.bloxd.getEntityHeading(null !== (Rd = Wd.ridingVehicleEId) && void 0 !== Rd ? Rd : md, !0),
                      Fd = Math.sin(Od),
                      Kd = Math.cos(Od);
                    dd[0] += Wd.meshOffset[0] * Kd + Wd.meshOffset[2] * Fd, dd[1] += Wd.meshOffset[1], dd[2] += Wd.meshOffset[2] * Kd - Wd.meshOffset[0] * Fd;
                    const hd = null !== (Xd = Wd.ridingVehicleEId) && void 0 !== Xd ? Xd : null;
                    null !== hd && (0, Am.c)(this.zo, hd, dd)
                  }
                } : null
              }), "Person" === Kd) {
              var qd, Hd, yd, bd;
              Fd.yG(this.eId, Fd.names.meshAttachments, {
                personFullBody: null !== (qd = null === (Hd = (0, Jm.i)("head", null === (bd = hd.textures) || void 0 === bd ? void 0 : bd.head)) || void 0 === Hd || null === (yd = Hd.personModel) || void 0 === yd ? void 0 : yd.fullBody) && void 0 !== qd && qd
              });
              for (const dd of Tm.s) {
                var Td, pd, Yd;
                const Od = null === (Td = hd.textures) || void 0 === Td ? void 0 : Td[dd];
                Od && null !== (pd = (0, Jm.i)(dd, Od)) && void 0 !== pd && null !== (Yd = pd.attachments) && void 0 !== Yd && Yd.length && Em.c.Player.meshApi.updatePlayerCosmetic(this.eId, Xd, dd, Od)
              }
              Fd.yG(this.eId, Fd.names.moveState), Fd.yG(this.eId, "updateWalkingState", {
                JA: Xd,
                fWd: Nd,
                walkingLegSwingDuration: xm.t
              }), Fd.yG(this.eId, "humanoidMesh", {
                JA: Xd,
                fWd: Nd,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Fd.yG(this.eId, "animator", {
                JA: Xd,
                fWd: Nd,
                modelLifeformType: "Player"
              }), im.d.hasAnimation("Person") && Fd.yG(this.eId, "rigAnimation", {
                target: "Person",
                JA: Xd
              }), Fd.Pmd(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === Kd && null !== Xd) {
              Fd.yG(this.eId, "animator", {
                JA: Xd,
                fWd: Nd,
                modelLifeformType: null
              });
              const dd = (0, Ym.q)(hd.blockName);
              null !== dd && Fd.yG(this.eId, "rigAnimation", {
                target: dd,
                JA: Xd
              })
            }
            Fd.khd(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: td
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === hd.autoRotate && (Fd.pG(this.eId, "meshRotation"), Fd.yG(this.eId, "autoRotate"));
            const {
              lineToEId: gd
            } = hd;
            (0, pm.O)(gd) || Fd.yG(this.eId, "lineToEntity", {
              lineToEId: gd
            });
            const wd = Wd.sG[Wd.YV][this.eId];
            this.updateOverlayColour(null !== (dd = null === wd || void 0 === wd ? void 0 : wd.overlayColour) && void 0 !== dd ? dd : null), this.updateOpacity(null !== (Od = null === wd || void 0 === wd ? void 0 : wd.opacity) && void 0 !== Od ? Od : 1), this.updateZIndex(null !== (md = null === wd || void 0 === wd ? void 0 : wd.zIndex) && void 0 !== md ? md : 0)
          },
          removeMeshComponent: () => {
            "Person" !== Kd && "BloxdBlock" !== Kd || Fd.pG(this.eId, "rigAnimation"), Fd.pG(this.eId, Fd.names.mesh), Fd.MOd(this.eId, Fd.names.meshAttachments) && Fd.pG(this.eId, Fd.names.meshAttachments), Fd.pG(this.eId, "entityName"), Fd.pG(this.eId, "autoRotate"), Fd.pG(this.eId, "lineToEntity"), "Person" === Kd ? (Fd.pG(this.eId, Fd.names.moveState), Fd.pG(this.eId, "updateWalkingState"), Fd.pG(this.eId, "humanoidMesh"), Fd.pG(this.eId, "animator")) : "BloxdBlock" === Kd && Fd.pG(this.eId, "animator")
          },
          hideDist: null !== (Od = hd.hideDist) && void 0 !== Od ? Od : 80,
          movingHideDist: null !== (md = hd.hideDist) && void 0 !== md ? md : 120,
          displayOutsideLoadedChunk: hd.hideDist > 100,
          immediatelyUpdate: !0,
          eQ: "BloxdBlock" === Kd ? hd.blockName : Kd
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Aq || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, gm.k)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(dd) {
        var Od, md;
        if ("Person" !== this.meshKind) return;
        let Wd = new am.b(0, 0, 0, 0);
        if (null !== dd) {
          const Od = (0, wm.M)(dd);
          Wd = new am.b(Od[0] / 255, Od[1] / 255, Od[2] / 255, .5)
        }
        const Fd = null !== (Od = null === (md = this.zo.qE.Vmd(this.eId)) || void 0 === md ? void 0 : md.JA) && void 0 !== Od ? Od : null;
        null !== Fd && Em.c.Player.meshApi.updateMeshOverlayColour(Fd, Wd)
      }
      updateZIndex(dd) {
        var Od;
        if ("Person" !== this.meshKind) return;
        const md = null === (Od = this.zo.qE.Vmd(this.eId)) || void 0 === Od ? void 0 : Od.JA;
        "number" === typeof md && this.zo.gt.HA.setRenderingGroupId(md, dd)
      }
      updateOpacity(dd) {
        const Od = this.zo.qE.Vmd(this.eId);
        Od && ("number" !== typeof Od.JA ? Od.mesh && "ParticleEmitter" !== this.meshKind && (0, um.e)(Od.mesh, dd) : Em.c.Player.meshApi.updateMeshOpacity(Od.JA, dd))
      }
    }
    var Gm = md(40544);
    class nm {
      constructor(dd, Od) {
        this.eId = Od, this.zo = void 0, this.schema = void 0, this.zo = dd.zo
      }
      initClient(dd) {
        this.schema = dd, this.zo.qE.add([dd.x, dd.y, dd.z], .1, .1, null, null, !1, !1, this.eId), this.zo.qE.yG(this.eId, "smoothToServerPos"), Gm.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(dd) {
        Xm.f.includes(dd) && Gm.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Gm.c.remove(this.eId), this.zo.qE.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: dd,
          volume: Od,
          refDistance: md,
          maxHearDist: Wd,
          rate: Fd
        } = this.schema;
        return {
          soundName: dd,
          volume: Od,
          refDistance: md,
          maxHearDist: Wd,
          rate: Fd
        }
      }
    }
    var Lm = md(2386),
      Pm = md(37958),
      zm = md(7410),
      cm = md(39327),
      jm = md(2402),
      Dm = md(39693),
      em = md(10297),
      Im = md(40009),
      lm = md(39292),
      Cm = md(1916);
    class Zm {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.IWd = dd, this.zo = Od, this.setupBudgetMs = md, this.now = Wd, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Aq = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.FY = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const dd of this.promotedSetups) {
            this.promotedSetups.delete(dd);
            const Od = this.queuedSetups.get(dd);
            Od && (this.queuedSetups.delete(dd), this.timedSetup(Od, dd))
          }
        }, this.createStateCallbacks = (0, em.getStateCallbacks)(dd), this.roomStateCallbacks = this.createStateCallbacks(dd.state), this.roomState = dd.state, this.setupBudgetLeftMs = md, this.lastRefillMs = Wd()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.IWd.onStateChange(this.setUpPromoted), this.zo.on("beforeInputs", this.onFrame), this.zo.on("Et", this.FY)
      }
      setUpQueuedEntities(dd) {
        var Od;
        if ((null === (Od = (0, jm.b)().client.getMsgHandler()) || void 0 === Od ? void 0 : Od.IWd) !== this.IWd) return this.zo.off("beforeInputs", this.onFrame), this.zo.off("Et", this.FY), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (dd && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (sm().copy(km, this.zo.qE.hY(this.zo.YV)); this.setupBudgetLeftMs > 0;) {
            const dd = this.nearestQueued(km);
            if (null === dd) return;
            this.setUpIfQueued(dd), this.setUpPromoted()
          }
      }
      nearestQueued(dd) {
        let Od = null,
          md = 1 / 0;
        return this.queuedSetups.forEach(((Wd, Fd) => {
          const Rd = function(dd, Od) {
            return (Od.x - dd[0]) ** 2 + (Od.y - dd[1]) ** 2 + (Od.z - dd[2]) ** 2
          }(dd, Wd);
          (null === Od || Rd < md) && (Od = Fd, md = Rd)
        })), Od
      }
      setUpOrQueue(dd, Od) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(dd, Od) ? this.timedSetup(dd, Od) : this.queuedSetups.set(Od, dd)
      }
      mustSetUpNow(dd, Od) {
        const md = this.zo.bV;
        if (Od === md) return !0;
        const Wd = this.roomState.entities.get(md);
        return !(!Wd || Wd.ridingVehicleEId !== Od && Wd.followingEId !== Od) || (fm(dd.type) === bm.b || (0, jm.b)().getFollowingEntities(Od).length > 0)
      }
      setUpIfQueued(dd) {
        const Od = this.queuedSetups.get(dd);
        Od && (this.queuedSetups.delete(dd), this.timedSetup(Od, dd))
      }
      promoteIfQueued(dd) {
        null !== dd && this.queuedSetups.has(dd) && this.promotedSetups.add(dd)
      }
      timedSetup(dd, Od) {
        const md = this.now();
        this.setupEntity(dd, Od), this.setupBudgetLeftMs -= this.now() - md
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.QE(((dd, Od) => {
          this.zo.bV ? this.setUpOrQueue(dd, Od) : this.deferEntitySetupUntilInitInfo(dd, Od)
        })), this.roomStateCallbacks.entities.qS(((dd, Od) => {
          const md = this.deferredSetups.get(Od);
          md && (dm.j.unsubscribe(md), this.deferredSetups.delete(Od)), this.queuedSetups.delete(Od), this.detach(Od), (0, jm.b)().client.disposeEntity(Od)
        }))
      }
      deferEntitySetupUntilInitInfo(dd, Od) {
        const md = dm.j.wT("initInfoReceived", (() => {
          this.deferredSetups.delete(Od), this.setUpOrQueue(dd, Od)
        }));
        this.deferredSetups.set(Od, md), (0, Lm.onGameResetOnce)((() => {
          this.deferredSetups.get(Od) === md && (dm.j.unsubscribe(md), this.deferredSetups.delete(Od)), (0, jm.b)().updatePositionAndPhysics(this.zo.YV, {
            type: zm.q.DEFAULT,
            tier: null
          }, !0), (0, jm.b)().takeHeldPlayerBodySize(this.zo.YV);
          const dd = this.zo.qE.Hmd(this.zo.YV);
          dd && (dd.movementType = zm.n.NORMAL)
        }))
      }
      setupEntity(dd, Od) {
        const md = Od === this.zo.bV;
        if (md)(0, jm.b)().client.YM(this.zo.YV, null, null);
        else {
          const {
            type: md
          } = dd, Wd = fm(md);
          if (void 0 === Wd) return void
          function(dd, Od) {
            const md = String(dd);
            if (Mm.has(md)) return;
            Mm.add(md);
            const Wd = md.length > 80 ? `${md.slice(0,80)}...` : md,
              Fd = `No client handler for entity type ${JSON.stringify(Wd)}, so entity ${Od} is not set up`;
            console.warn(Fd), (0, Cm.reportClientError)("uncaught", Fd, "unknown_entity_type")
          }(md, Od);
          (0, jm.b)().client.YM(Od, dd, new Wd((0, jm.b)(), Od, md))
        }
        const Wd = this.createStateCallbacks(dd);
        if (md) return this.setupMapSchemaCallbacks(Od, dd, Wd, "armour"), this.setupScalarField(Od, dd, Wd, "scale"), this.setupScalarField(Od, dd, Wd, "ridingVehicleEId"), this.setupScalarField(Od, dd, Wd, "followingEId"), this.setupScalarField(Od, dd, Wd, "followingOffset"), void this.setupScalarField(Od, dd, Wd, "shouldMatchFollowingEntityRotation");
        for (const Fd of qm(dd.constructor)) dd[Fd] instanceof Fm.MapSchema ? this.setupMapSchemaCallbacks(Od, dd, Wd, Fd) : this.setupScalarField(Od, dd, Wd, Fd)
      }
      setupMapSchemaCallbacks(dd, Od, md, Wd) {
        const Fd = md[Wd],
          Rd = new Map;
        Fd.QE(((md, Fd) => {
          if (this.onEntityFieldChange(dd, Od, Wd, {
              key: Fd,
              value: md
            }), !(md instanceof Fm.Schema)) return;
          const Xd = this.createStateCallbacks(md),
            Kd = [];
          for (const Rd of qm(md.constructor)) Kd.push(this.listenForFutureChanges(Xd, Rd, (() => {
            this.onEntityFieldChange(dd, Od, Wd, {
              key: Fd,
              value: md
            })
          })));
          Rd.set(Fd, (() => {
            for (const dd of Kd) dd()
          }))
        })), Fd.qS(((md, Fd) => {
          var Xd;
          null === (Xd = Rd.get(Fd)) || void 0 === Xd || Xd(), Rd.delete(Fd), this.onEntityFieldChange(dd, Od, Wd, {
            key: Fd,
            value: null
          })
        })), this.addDetacher(dd, (() => {
          for (const dd of Rd.values()) dd();
          Rd.clear()
        }))
      }
      setupScalarField(dd, Od, md, Wd) {
        this.onEntityFieldChange(dd, Od, Wd, Od[Wd]);
        const Fd = this.listenForFutureChanges(md, Wd, (md => {
          this.onEntityFieldChange(dd, Od, Wd, md)
        }));
        this.addDetacher(dd, Fd)
      }
      addDetacher(dd, Od) {
        let md = this.detachers.get(dd);
        md || (md = [], this.detachers.set(dd, md)), md.push(Od)
      }
      detach(dd) {
        for (const md of null !== (Od = this.detachers.get(dd)) && void 0 !== Od ? Od : []) {
          var Od;
          md()
        }
        this.detachers.delete(dd)
      }
      listenForFutureChanges(dd, Od, md) {
        return dd.listen(Od, md, !1)
      }
      onEntityFieldChange(dd, Od, md, Wd) {
        switch (md) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Wd);
            const Od = this.zo.qE.Pmd((0, Pm.b)(dd));
            Od && (Od.ridingVehicleEId = Wd);
            break
          }
          case "armour":
            this.handleArmourChange(dd, Wd);
            break;
          case "followingEId":
            this.promoteIfQueued(Wd), this.handleFollowingEIdChange(dd, Od, Wd);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(dd, md, Wd);
            break;
          case "scale":
            this.handleScaleChange(dd, Wd);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(dd, Wd);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(dd, Wd);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(dd, Wd);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(dd, md, Wd)
        }(0, jm.b)().client.updateEntityField(dd, md, Wd)
      }
      handleArmourChange(dd, Od) {
        var md, Wd;
        const {
          key: Fd,
          value: Rd
        } = Od;
        (0, Em.z)(dd, Fd, null !== (md = null === Rd || void 0 === Rd ? void 0 : Rd.itemName) && void 0 !== md ? md : null, null !== (Wd = null === Rd || void 0 === Rd ? void 0 : Rd.enchantmentTier) && void 0 !== Wd ? Wd : null)
      }
      handleFollowingEIdChange(dd, Od, md) {
        const Wd = (0, Pm.b)(dd),
          Fd = Wd === this.zo.YV;
        if (this.zo.qE.pG(Wd, this.zo.qE.names.XE), md) this.zo.qE.pG(Wd, "smoothToServerPos"), this.zo.qE.yG(Wd, this.zo.qE.names.XE, {
          xq: (0, Pm.b)(md),
          offset: Array.from(Od.followingOffset),
          UWd: Od.shouldMatchFollowingEntityRotation,
          sWd: !0,
          uWd: (dd, Wd) => {
            if (sm().copy(dd, Od.followingOffset), Od.ridingVehicleEId === md) {
              const Od = (0, Pm.b)(md),
                Fd = (0, jm.b)().getEntityHeading(Od, Wd);
              sm().Hy(dd, dd, sm().ZERO, Fd)
            }
          }
        });
        else if (!Fd) {
          this.zo.qE.MOd(Wd, "smoothToServerPos") || this.zo.qE.yG(Wd, "smoothToServerPos");
          const dd = this.zo.qE.getState(Wd, "smoothToServerPos"),
            Od = this.zo.qE.gM(Wd).position;
          (0, lm.setServerPosition)(dd, Od[0], Od[1], Od[2])
        }
      }
      handleRotationChange(dd, Od, md) {
        const Wd = "xRotation" === Od ? 0 : "yRotation" === Od ? 1 : 2;
        for (const Fd of (0, jm.b)().getFollowingEntities(dd)) {
          const dd = this.zo.qE.getState(Fd, "meshRotation"),
            Od = this.zo.qE.JWd(Fd);
          dd && Od.UWd && (dd.serverSetRotation[Wd] = md)
        }
      }
      handleScaleChange(dd, Od) {
        const md = (0, Pm.b)(dd);
        if (dm.j.lQ(`entityScale|${md}`, Od), md === this.zo.YV) {
          var Wd;
          (0, jm.b)().removeFromEyeHeightCache(md);
          const dd = this.zo.qE.Hmd(this.zo.YV),
            Od = null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.physicsState) && void 0 !== Wd ? Wd : {
              type: zm.q.DEFAULT,
              tier: null
            };
          return void(0, jm.b)().updatePositionAndPhysics(this.zo.YV, Od, !1)
        }
        const Fd = (0, jm.b)().getLifeformType(md);
        if (null === Fd) return;
        const {
          physicsBodyWidth: Rd,
          physicsBodyHeight: Xd
        } = (0, Im.h)(Od, Fd);
        this.zo.qE.aWd(md, Rd, Xd, Rd)
      }
      handleBaseRenderHeadingChange(dd, Od) {
        const md = this.zo.qE.getState(dd, "meshRotation");
        md && (md.baseRenderRotation[1] = Od);
        for (const Wd of (0, jm.b)().getFollowingEntities(dd)) {
          const dd = this.zo.qE.getState(Wd, "meshRotation"),
            md = this.zo.qE.JWd(Wd);
          dd && md.UWd && (dd.baseRenderRotation[1] = Od)
        }
      }
      handleFollowingOffsetChange(dd, Od) {
        const md = this.zo.qE.JWd((0, Pm.b)(dd));
        if (md && md.offset) {
          const dd = Od ? Array.from(Od) : sm().ZERO;
          md.offset[0] = dd[0], md.offset[1] = dd[1], md.offset[2] = dd[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(dd, Od) {
        const md = this.zo.qE.JWd((0, Pm.b)(dd));
        md && (md.UWd = null === Od || void 0 === Od || Od)
      }
      handlePositionChange(dd, Od, md) {
        if (this.zo.qE.MOd(dd, "smoothToServerPos")) {
          const Wd = this.zo.qE.getState(dd, "smoothToServerPos");
          (0, lm.setServerPositionAxis)(Wd, dW[Od], md)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.QE(((dd, Od) => {
          this.allItems[Od] = dd, (0, cm.h)(this.zo, Od, [dd.x, dd.y, dd.z], dd.id, {
            amount: dd.amount,
            attributes: JSON.parse(dd.attributes),
            pF: (0, Om.e)(this.zo).cantPickUpItem(Od),
            size: dd.size,
            predictedAt: (0, jm.b)().client.itemDropPrediction.onServerItemAdded(Od)
          });
          const md = this.createStateCallbacks(dd);
          for (const Wd of qm(hm)) this.onItemFieldChange(Od, Wd, dd[Wd]), this.addDetacher(Od, this.listenForFutureChanges(md, Wd, (dd => {
            this.onItemFieldChange(Od, Wd, dd)
          })))
        })), this.roomStateCallbacks.items.qS(((dd, Od) => {
          delete this.allItems[Od], this.detach(Od), (0, jm.b)().client.itemDropPrediction.onServerItemRemoved(Od), this.zo.qE.MOd(Od, this.zo.qE.names.itemState) && this.zo.qE.deleteEntity(Od), (0, Om.e)(this.zo).disposeEntity(Od)
        }))
      }
      onItemFieldChange(dd, Od, md) {
        if (Od in dW) {
          if (this.zo.qE.MOd(dd, "itemState")) {
            const Wd = this.zo.qE.getState(dd, "smoothToServerPos");
            (0, lm.setServerPositionAxis)(Wd, dW[Od], md), (0, jm.b)().client.itemDropPrediction.onServerItemMoved(dd)
          }
          return
        }
        if (!this.zo.qE.MOd(dd, "itemState")) return;
        const Wd = this.zo.qE.getState(dd, "itemState");
        "amount" === Od && md !== Wd.amount && (Wd.creationTime = Date.now()), Wd[Od] = "attributes" === Od ? JSON.parse(md) : md
      }
      dispose() {
        if (!this.Aq) {
          this.Aq = !0, this.zo.off("beforeInputs", this.onFrame), this.zo.off("Et", this.FY), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const dd of this.deferredSetups.values()) dm.j.unsubscribe(dd);
          this.deferredSetups.clear(), this.zo.qE.pG(this.zo.YV, this.zo.qE.names.XE);
          for (const dd in this.allItems) this.zo.qE.deleteEntity(dd), delete this.allItems[dd];
          for (const dd of [...this.detachers.keys()]) this.detach(dd);
          (0, Om.e)(this.zo).clear();
          for (const dd of (0, jm.b)().client.iterateEntityIds())(0, jm.b)().client.disposeEntity(dd)
        }
      }
    }
    const km = [0, 0, 0];

    function fm(dd) {
      if ("string" !== typeof dd) return;
      const Od = dd.indexOf("|"),
        md = -1 === Od ? dd : dd.slice(0, Od),
        Wd = mW();
      return Object.hasOwn(Wd, md) ? Wd[md] : void 0
    }
    const Mm = new Set;
    const dW = {
      x: 0,
      y: 1,
      z: 2
    };
    let OW = null;

    function mW() {
      return null !== OW || (OW = {
        ...Object.fromEntries(Xm.h.map((dd => {
          const {
            eQ: Od
          } = (0, Dm.d)(dd);
          return [dd, Od]
        }))),
        Pebble: bm.b,
        Snowball: bm.b,
        "Snowball Launcher": bm.b,
        "Reinforced Pebble": bm.b,
        Bullet: bm.b,
        "Reinforced Ball": bm.b,
        Ball: bm.b,
        Mango: bm.b,
        "Moonstone Orb": bm.b,
        ...Object.fromEntries(Rm.B.map((dd => [(0, wm.Rb)(dd), bm.b]))),
        Arrow: bm.b,
        "Arrow of Speed": bm.b,
        "Arrow of Poison": bm.b,
        "Arrow of Slowness": bm.b,
        "Arrow of Weakness": bm.b,
        "Arrow of Knockback": bm.b,
        "Arrow of Strength": bm.b,
        "Arrow of Invisibility": bm.b,
        "Arrow of Jumping": bm.b,
        "Arrow of Defense": bm.b,
        "Arrow of Instant Healing": bm.b,
        "Arrow of Instant Damage": bm.b,
        "Arrow of Regeneration": bm.b,
        "Arrow of Haste": bm.b,
        "Arrow of Shield": bm.b,
        "Arrow of Double Jump": bm.b,
        "Arrow of Heat Resistance": bm.b,
        "Arrow of X-Ray Vision": bm.b,
        "Arrow of Mining Yield": bm.b,
        "Arrow of Brain Rot": bm.b,
        "Arrow of Milk": bm.b,
        Fireball: bm.b,
        "Bouncy Bomb": bm.b,
        RPG: bm.b,
        "Obby RPG": bm.b,
        "Super RPG": bm.b,
        "Grenade Launcher": bm.b,
        Iceball: bm.b,
        Coconut: bm.b,
        "Splash Speed Potion": bm.b,
        "Splash Defense Potion": bm.b,
        "Splash Strength Potion": bm.b,
        "Splash Invisibility Potion": bm.b,
        "Splash Jump Potion": bm.b,
        "Splash Knockback Potion": bm.b,
        "Splash Poison Potion": bm.b,
        "Splash Speed Potion II": bm.b,
        "Splash Defense Potion II": bm.b,
        "Splash Strength Potion II": bm.b,
        "Splash Jump Potion II": bm.b,
        "Splash Knockback Potion II": bm.b,
        "Splash Poison Potion II": bm.b,
        "Splash Slowness Potion": bm.b,
        "Splash Slowness Potion II": bm.b,
        "Splash Weakness Potion": bm.b,
        "Splash Weakness Potion II": bm.b,
        "Splash Milk Potion": bm.b,
        "Splash Instant Damage Potion": bm.b,
        "Splash Instant Damage Potion II": bm.b,
        "Splash Instant Healing Potion": bm.b,
        "Splash Instant Healing Potion II": bm.b,
        "Splash Regeneration Potion": bm.b,
        "Splash Regeneration Potion II": bm.b,
        "Splash Haste Potion": bm.b,
        "Splash Haste Potion II": bm.b,
        "Splash Shield Potion": bm.b,
        "Splash Shield Potion II": bm.b,
        "Splash Double Jump Potion": bm.b,
        "Splash Heat Resistance Potion": bm.b,
        "Splash X-Ray Vision Potion": bm.b,
        "Splash Mining Yield Potion": bm.b,
        "Splash Mining Yield Potion II": bm.b,
        "Splash Brain Rot Potion": bm.b,
        "Yellow Paintball Gun": bm.b,
        "White Paintball Gun": bm.b,
        "Red Paintball Gun": bm.b,
        "Purple Paintball Gun": bm.b,
        "Pink Paintball Gun": bm.b,
        "Orange Paintball Gun": bm.b,
        "Magenta Paintball Gun": bm.b,
        "Lime Paintball Gun": bm.b,
        "Light Gray Paintball Gun": bm.b,
        "Light Blue Paintball Gun": bm.b,
        "Green Paintball Gun": bm.b,
        "Gray Paintball Gun": bm.b,
        "Cyan Paintball Gun": bm.b,
        "Brown Paintball Gun": bm.b,
        "Blue Paintball Gun": bm.b,
        "Black Paintball Gun": bm.b,
        "Yellow Heavy Paintball Gun": bm.b,
        "White Heavy Paintball Gun": bm.b,
        "Red Heavy Paintball Gun": bm.b,
        "Purple Heavy Paintball Gun": bm.b,
        "Pink Heavy Paintball Gun": bm.b,
        "Orange Heavy Paintball Gun": bm.b,
        "Magenta Heavy Paintball Gun": bm.b,
        "Lime Heavy Paintball Gun": bm.b,
        "Light Gray Heavy Paintball Gun": bm.b,
        "Light Blue Heavy Paintball Gun": bm.b,
        "Green Heavy Paintball Gun": bm.b,
        "Gray Heavy Paintball Gun": bm.b,
        "Cyan Heavy Paintball Gun": bm.b,
        "Brown Heavy Paintball Gun": bm.b,
        "Blue Heavy Paintball Gun": bm.b,
        "Black Heavy Paintball Gun": bm.b,
        "Toxin Ball": bm.b,
        "Splash Aura XP Potion": bm.b,
        "Splash Aura XP Potion II": bm.b,
        "Arrow of Aura XP": bm.b,
        Firecracker: bm.b,
        "Rainbow Firecracker": bm.b,
        "White Firecracker": bm.b,
        "Orange Firecracker": bm.b,
        "Magenta Firecracker": bm.b,
        "Light Blue Firecracker": bm.b,
        "Yellow Firecracker": bm.b,
        "Lime Firecracker": bm.b,
        "Pink Firecracker": bm.b,
        "Gray Firecracker": bm.b,
        "Light Gray Firecracker": bm.b,
        "Cyan Firecracker": bm.b,
        "Purple Firecracker": bm.b,
        "Blue Firecracker": bm.b,
        "Brown Firecracker": bm.b,
        "Green Firecracker": bm.b,
        "Red Firecracker": bm.b,
        "Black Firecracker": bm.b,
        "Firecracker Pebble": bm.b,
        "Rainbow Firecracker Pebble": bm.b,
        "White Firecracker Pebble": bm.b,
        "Orange Firecracker Pebble": bm.b,
        "Magenta Firecracker Pebble": bm.b,
        "Light Blue Firecracker Pebble": bm.b,
        "Yellow Firecracker Pebble": bm.b,
        "Lime Firecracker Pebble": bm.b,
        "Pink Firecracker Pebble": bm.b,
        "Gray Firecracker Pebble": bm.b,
        "Light Gray Firecracker Pebble": bm.b,
        "Cyan Firecracker Pebble": bm.b,
        "Purple Firecracker Pebble": bm.b,
        "Blue Firecracker Pebble": bm.b,
        "Brown Firecracker Pebble": bm.b,
        "Green Firecracker Pebble": bm.b,
        "Red Firecracker Pebble": bm.b,
        "Black Firecracker Pebble": bm.b,
        "Blinding Pebble": bm.b,
        Poop: bm.b,
        "Wood Boomerang": bm.b,
        "Stone Boomerang": bm.b,
        "Iron Boomerang": bm.b,
        "Gold Boomerang": bm.b,
        "Diamond Boomerang": bm.b,
        "Amethite Boomerang": bm.b,
        "Magmasteel Boomerang": bm.b,
        "Rubellite Boomerang": bm.b,
        "Serpentite Boomerang": bm.b,
        "Moonstone Boomerang": bm.b,
        "67 Base Projectile": bm.b,
        "67 Boosted Projectile": bm.b,
        "Capitano Grenade": bm.b,
        "Scatter Pellet": bm.b,
        "Lucky Bomb": bm.b,
        "Unlucky Bomb": bm.b,
        "Swap Orb": bm.b,
        Mesh: rm,
        AudioEntity: nm
      }), OW
    }
  },
  40577: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      h: () => Xd
    });
    var Wd = md(701),
      Fd = md(39254);
    const Rd = 4e4;
    class Xd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = dd, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(dd, Od, md) {
        const Rd = (0, Wd.T)(dd),
          Xd = (0, Wd.T)(Od),
          Kd = (0, Wd.T)(md),
          hd = this.now();
        if (Rd !== this.lastChunkX || Xd !== this.lastChunkY || Kd !== this.lastChunkZ) {
          this.lastChunkX = Rd, this.lastChunkY = Xd, this.lastChunkZ = Kd, this.lastChunkId = (0, Fd.c)(Rd, Xd, Kd), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, hd);
          for (const [dd, Od] of this.editedAt) {
            if (Od >= hd - 3e5) break;
            this.editedAt.delete(dd)
          }
        } else this.editedAt.set(this.lastChunkId, hd)
      }
      chunksEditedSince(dd) {
        const Od = [];
        for (const [md, Wd] of this.editedAt) Wd >= dd && Od.push(md);
        return Od
      }
    }
  },
  40643: (dd, Od, md) => {
    md.d(Od, {
      e: () => yO,
      f: () => jO,
      i: () => iO,
      l: () => DO
    });
    var Wd = md(2386),
      Fd = md(9907),
      Rd = md(38282),
      Xd = md(38290),
      Kd = md(1549),
      hd = md(37939),
      vd = md(40544),
      Qd = md(40531),
      td = md(2497),
      od = md(39417),
      Nd = md(40650),
      qd = md(1300),
      Hd = md(387),
      yd = md(32),
      bd = md(2116),
      Td = md(107),
      pd = md(46),
      Yd = md(2134),
      gd = md(2057),
      wd = md(4073);
    class Ed {
      constructor(dd) {
        this.storeForMs = dd, this.clicks = new wd.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const dd = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < dd;) this.clicks.dequeue()
      }
      getNumClicksInMs(dd) {
        let Od = 0;
        return this.clicks.forEach((md => {
          md > Date.now() - dd && Od++
        })), Od
      }
      getMaxClickSeparationInMs(dd) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Od = 0,
          md = Date.now() - dd;
        this.clicks.forEach((Wd => {
          Wd < Date.now() - dd || (Od = Math.max(Od, Math.abs(Wd - md)), md = Wd)
        }));
        const Wd = Math.abs(Date.now() - md);
        return Math.max(Od, Wd)
      }
    }
    class Jd {
      constructor(dd) {
        this.storeForMs = dd, this.clickDownDurations = new wd.d
      }
      registerClickDownDuration(dd) {
        this.clickDownDurations.enqueue({
          dur: dd,
          atTime: Date.now()
        });
        const Od = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Od;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(dd) {
        if (dd > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Od = 0,
          md = 0;
        return this.clickDownDurations.forEach((Wd => {
          Wd.atTime > Date.now() - dd && (Od++, md = Math.max(md, Wd.dur))
        })), `${Od}:${md}`
      }
    }
    var Ud = md(38121),
      xd = md(40652),
      Bd = md(29),
      Sd = md(2402),
      sd = md(1415),
      ud = md(3394),
      Vd = md(5114),
      Ad = md(151),
      rd = md(39698),
      Gd = md(39919),
      nd = md(701),
      Ld = md(38112),
      Pd = md(15),
      zd = md(5733),
      cd = md(1286),
      jd = md(218),
      Dd = md(40659),
      ed = md(40666),
      Id = md(40672),
      ld = md(39725),
      Cd = md(40681),
      Zd = md(39639),
      kd = md(4624),
      fd = md(1765),
      Md = md(3428),
      dO = md(3903),
      OO = md(37908),
      mO = md(37915),
      WO = md(40676),
      FO = md(39502);
    const RO = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function XO() {
      var dd, Od;
      return !(null === (dd = (0, Sd.b)().client) || void 0 === dd || null === (Od = dd.freeCameraController) || void 0 === Od || !Od.movesFly())
    }

    function KO(dd) {
      const Od = dd.on.bind(dd);
      dd.on = (dd, md) => {
        Yd.F.has(dd) ? Od(dd, md) : Od(dd, (Od => {
          var Wd;
          return null !== (Wd = (0, Sd.b)().client) && void 0 !== Wd && Wd.isReplayMode() ? function(dd) {
            return dd in RO
          }(dd) && XO() ? md(Od) : void 0 : md(Od)
        }))
      }
    }
    const hO = 5e3,
      vO = 1;
    let QO, tO = vO,
      oO = 0;
    const NO = !0;
    let qO = NO;
    bd.e.subscribe("_ignoreBasicBoards", (dd => {
      qO = dd
    })), (0, Wd.onGameReset)((() => {
      qO = NO
    }));
    let HO = null;
    const yO = () => HO;
    let bO, TO, pO;
    var YO, gO, wO, aO, EO, JO, UO, xO, BO;
    const SO = ["b", 0, 1, 98, "c", 78, 9, 112, 42, 192, 4, 8, 255, "length", "undefined", void 0, 2, "d", "a", 63, 6, "fromCodePoint", 7, 12, "push", 109, 110, 3, 245, 62, "h", 144, 188, "g", 91, 5, 8191, 88, 13, 14, 45, 234, "i", "e", 117, 108, !1, 141, 250, 121, 95, !0, "s", 232, 99, 51, 187, 143, 184, 256, 65537, 100, 30, 127, 128, "f", 229, 84, 175, ")", 199, 197, null, 10];

    function sO(...dd) {
      return dd[SO[13]] = SO[2], typeof aO !== SO[14] && aO ? (new aO).decode(new EO(dd[SO[1]])) : typeof JO !== SO[14] && JO ? JO.from(dd[SO[1]]).toString("utf-8") : BO(dd[SO[1]])
    }

    function uO() {}

    function VO() {
      VO = function() {}
    }

    function iO(dd) {
      function Od() {
        return dd.qE.NWd(dd.YV)
      }
      KO(dd.inputs.down), KO(dd.inputs.up);
      for (const Wd of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Od = (Od, md) => {
          var Fd, Rd;
          if (XO()) {
            var Xd;
            const Fd = RO[Wd];
            var Kd, hd;
            if (Fd) null === (Kd = (0, Sd.b)().client) || void 0 === Kd || null === (hd = Kd.freeCameraController) || void 0 === hd || hd.handlefreeCamKeyPress(Fd, Od, md);
            return void(md || null !== (Xd = (0, Sd.b)().client) && void 0 !== Xd && Xd.isReplayMode() || (dd.qE.TWd()[Wd] = !1))
          }
          if (null !== (Fd = (0, Sd.b)().client) && void 0 !== Fd && null !== (Rd = Fd.freeCameraController) && void 0 !== Rd && Rd.isKeyPressOverriden(Od)) return;
          dd.qE.TWd()[Wd] = md
        };
        dd.inputs.down.on(Wd, (dd => Od(dd, !0))), dd.inputs.up.on(Wd, (dd => Od(dd, !1)))
      }
      dd.inputs.down.on("crouch", (() => {
        if (XO()) return;
        if (!dd.EY.canCrouch) return;
        const Od = dd.qE.TWd();
        Bd.e.get("clientEscMenuOptions").crouchIsToggle && (Od.crouchToggled = !Od.crouchToggled && !Od.padSneakToggled), Od.padSneakToggled = !1
      }));
      const md = () => {
        const dd = Od();
        dd.isGun() && dd.inaccuracyCalculator.jump()
      };
      dd.inputs.down.on("jump", (dd => {
        XO() || (md(), bO(dd))
      }));
      for (const Wd of Yd.n) dd.inputs.down.on(Wd, (dd => {
        var Od, md;
        null !== (Od = (0, Sd.b)().client) && void 0 !== Od && null !== (md = Od.freeCameraController) && void 0 !== md && md.handlefreeCamKeyPress(Wd, dd, !0) && (dd.preventDefault(), dd.stopPropagation())
      })), dd.inputs.up.on(Wd, (dd => {
        var Od, md;
        null !== (Od = (0, Sd.b)().client) && void 0 !== Od && null !== (md = Od.freeCameraController) && void 0 !== md && md.handlefreeCamKeyPress(Wd, dd, !1) && (dd.preventDefault(), dd.stopPropagation())
      }));
      dd.inputs.down.on("recordGame", (() => {
        var dd, Od;
        null === (dd = (0, Sd.b)().client) || void 0 === dd || null === (Od = dd.gameRecorder) || void 0 === Od || Od.toggleRecording()
      })), dd.inputs.down.on("recordClip", (() => {
        var dd, Od;
        (0, Ud.b)() || null === (dd = (0, Sd.b)().client) || void 0 === dd || null === (Od = dd.gameRecorder) || void 0 === Od || Od.saveClip()
      }));
      for (const Wd of Yd.F) dd.inputs.down.on(Wd, (() => {
        var dd;
        if ((0, xd.d)()) return;
        if ("replayViewerOpen" === Wd) return void yd.j.lQ("replayViewer|requested", "toggle");
        const Od = null === (dd = (0, Sd.b)().client) || void 0 === dd ? void 0 : dd.gameReplayer;
        ((0, Ud.b)() || null !== Od && void 0 !== Od && Od.isReplayMode()) && (null === Od || void 0 === Od || Od.handleAction(Wd))
      }));
      const Kd = new Ed(3e4),
        od = new Jd(4e4);
      let Nd = 0;
      const pd = dd => {
          let Od = 0,
            md = null;
          const Wd = Od => null !== Od && Od === md && (md = null, dd(), !0);
          return {
            press: () => (Od++, (0, Dd.c)() || (Wd(md), md = Od), Od),
            owns: dd => dd === md,
            release: Wd
          }
        },
        wd = (dd, md) => {
          md && DO(qd.b.TouchDownFirePrimary), dd ? zd() : ((0, Gd.g)(), Od().KFd()), md || DO(qd.b.DownFirePrimary), jO(!0), Kd.click();
          const Fd = Kd.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Rd = Kd.getMaxClickSeparationInMs(1e4) < 20,
            Xd = Kd.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Fd || Rd || Xd) {
            let dd;
            if (Fd) dd = 30;
            else if (Rd) dd = 50;
            else {
              if (!Xd) throw new Error("???");
              dd = 70
            }(0, Wd.sendColyMessage)(td.Rj, dd)
          }
        },
        Vd = new ed.d,
        Ad = pd((() => {
          ed.d.stopRunning();
          const dd = Date.now() - Nd;
          od.registerClickDownDuration(dd), Od().FFd(), DO(qd.b.UpFirePrimary), jO(!1);
          const md = od.clickDownDurationsCheck(4e4);
          (0, Wd.sendColyMessage)(td.ng, md)
        }));
      let rd = 0;
      dd.inputs.down.on("primary-fire", (function(dd) {
        rd = Ad.press(), Ad.owns(rd) && (Nd = Date.now(), Math.abs(performance.now() - dd.timeStamp) > 5e3 || (wd(dd.altKey, "changedTouches" in dd), bO(dd)))
      })), dd.inputs.up.on("primary-fire", (function(dd) {
        Ad.release(rd) && bO(dd, !0)
      }));
      const nd = () => {
          Od().jQd(), DO(qd.b.DownFireSecondary), jO(!0), dd.nOd && !dd.nOd.position && (0, Qd.j)()
        },
        Ld = pd((() => {
          Od().WFd(), DO(qd.b.UpFireSecondary), jO(!1)
        }));
      let Pd = 0;
      dd.inputs.down.on("alt-fire", (function(dd) {
        Pd = Ld.press(), Ld.owns(Pd) && (nd(), bO(dd))
      })), dd.inputs.up.on("alt-fire", (function(dd) {
        Ld.release(Pd) && bO(dd, !0)
      }));
      const zd = () => Od().IQd();
      dd.inputs.down.on("mid-fire", (() => {
        (0, Dd.c)() || zd()
      }));
      const Cd = dd => {
          (0, Wd.sendColyMessage)(td.lh, dd, !0)
        },
        QO = dd => {
          (0, Wd.sendColyMessage)(td.ph, {
            cK: dd,
            jK: NO()
          }, !0)
        };
      for (const Wd of ["SpecialAction1", "SpecialAction2"]) dd.inputs.down.on(Wd, (() => {
        Cd(Wd)
      })), dd.inputs.up.on(Wd, (() => {
        QO(Wd)
      }));
      const oO = () => {
        const dd = Od();
        dd.isGun() && dd.reload(Date.now())
      };
      dd.inputs.down.on("ReloadGun", oO);
      const NO = () => {
        let Od = "a";
        return dd.physics.testSolid.toString().includes("hN") || (Od = "b"), Od
      };
      dd.inputs.down.on("OpenInventory", (dd => {
        dd.preventDefault(), (0, fd.v)(dd, "inventory", (0, Id.c)((0, Sd.c)()))
      })), dd.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const qO = dd => {
        yd.j.lQ("DropItemKeyPressed", dd)
      };
      dd.inputs.down.on("DropItem", (() => {
        qO(dd.qE.TWd().crouch)
      })), dd.inputs.down.on("OpenShop", (Od => {
        (0, Ud.b)() || "inGame" === Bd.e.get("gameState") && (0, fd.s)(Od, Hd.m.SHOP, !(0, Fd.b)(dd.EY.shopInfo))
      })), dd.inputs.down.on("OpenLobbyLeaderboard", (Od => {
        (0, Ud.b)() || "inGame" === Bd.e.get("gameState") && (0, fd.x)(Od, (0, WO.b)(dd.EY), (0, Md.i)())
      })), dd.inputs.down.on("HideUi", (() => {
        yd.j.lQ("showUi", !1)
      })), dd.inputs.up.on("HideUi", (() => {
        yd.j.lQ("showUi", !0)
      }));
      const yO = dd => {
        0 === dd && (dd = 10), yd.j.lQ("setSelectedInventorySlotI", dd - 1), yd.j.lQ("numkeyPressed", dd)
      };
      for (let Wd = 1; Wd <= 10; Wd++) dd.inputs.down.on("HotBarSlot" + Wd.toString(), (() => {
        yO(Wd)
      }));
      dd.inputs.down.on("OpenTasksAndLeaderboard", (Od => {
        const md = (0, Md.j)();
        md ? (0, fd.A)(Od, !0, md) : (0, fd.v)(Od, "retentionFeatures", !(!dd.EY._tasks && !dd.EY._availableLeaderboards))
      })), dd.inputs.down.on("OpenCodeEditor", (Od => {
        (0, fd.A)(Od, (0, ud.b)((0, sd.b)()), (() => {
          (0, ud.h)(dd.qE.hY(dd.YV))
        }))
      })), dd.inputs.bind("ToggleFullCoordinateOverlay", "F3"), dd.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        yd.j.lQ("toggleFullCoordinateOverlay")
      }));
      const pO = () => {
        (0, Sd.b)().client.cameraController.swapCameraZoom()
      };
      dd.inputs.down.on("SwapCameraZoom", pO), dd.inputs.down.on("OpenInviteLink", (dd => {
        (0, fd.v)(dd, "inviteLink", Td.featureFlags.canUseInviteLinks)
      })), dd.inputs.bind("Y", "KeyY"), dd.inputs.down.on("Y", (dd => {
        (0, Ud.b)() || yd.j.lQ("YKeyPressed")
      })), dd.inputs.bind("X", "KeyX"), dd.inputs.down.on("X", (dd => {
        (0, Ud.b)() || yd.j.lQ("XKeyPressed")
      })), dd.inputs.down.on("OpenEmoteWheel", (() => {
        yd.j.lQ("requestEmoteWheelHoldOpen")
      })), dd.inputs.up.on("OpenEmoteWheel", (() => {
        yd.j.lQ("requestEmoteWheelHoldRelease")
      })), dd.inputs.down.on("Zoom", (() => {
        "inGame" === Bd.e.get("gameState") && (0, Sd.b)().client.cameraController.setZoomKeyHeld("keys", !0)
      })), dd.inputs.up.on("Zoom", (() => {
        (0, Sd.b)().client.cameraController.setZoomKeyHeld("keys", !1)
      })), AO();
      const YO = dd => function() {
        return TO(), dd(...arguments)
      };

      function gO(dd) {
        "inGame" !== Bd.e.get("gameState") || (0, fd.q)() || (yd.j.lQ("ctrlCrouchWithoutFullscreen"), dd.preventDefault())
      }
      HO = {
        primaryFireDown: YO((dd => {
          const Od = Ad.press();
          return Ad.owns(Od) && (Nd = Date.now(), wd(!1, !1), dd && Vd.start()), Od
        })),
        primaryFireUp: YO((dd => {
          Ad.release(dd)
        })),
        altFireDown: YO((() => {
          const dd = Ld.press();
          return Ld.owns(dd) && nd(), dd
        })),
        altFireUp: YO((dd => {
          Ld.release(dd)
        })),
        jumpDown: YO(md),
        specialActionDown: YO(Cd),
        specialActionUp: YO(QO),
        reloadGun: YO(oO),
        dropItem: YO(qO),
        swapCameraZoom: YO(pO),
        zoom: YO((dd => {
          (0, Sd.b)().client.cameraController.setZoomKeyHeld("pad", dd)
        })),
        pickBlock: YO(zd)
      }, dd.inputs.down.on("ctrlCrouch", gO), dd.inputs.up.on("ctrlCrouch", gO), dd.inputs.bind("ctrlCrouch", "ControlLeft");
      const wO = dd => {
        "inGame" === Bd.e.get("gameState") && dd.ctrlKey && !(0, fd.q)() && dd.preventDefault()
      };
      document.addEventListener("keydown", wO), document.addEventListener("keyup", wO), document.addEventListener("keypress", wO), dd.inputs.bind("Alt", "AltLeft", "AltRight"), dd.inputs.down.on("Alt", (dd => {
        dd.preventDefault()
      }));
      const aO = Od => (0, Zd.i)(dd, Od),
        EO = Od => (0, Zd.m)(dd, Od),
        JO = [0, 0, 0],
        UO = [0, 0, 1];
      dd.on("afterRender", (Od => {
        mO.o.frame(Od, dd.camera.heading, dd.camera.pitch, mO.l.drawn), (0, Rd.e)(dd.camera.heading), (0, Xd.e)(dd.camera.heading), (0, Zd.q)(dd, JO, UO), (0, Sd.b)().client.triggerGameCallback("onAfterRender", Od, {
          cameraHeading: dd.camera.heading,
          cameraPitch: dd.camera.pitch,
          cameraPosition: JO,
          cameraDirection: UO,
          tanHalfFovX: (0, Zd.b)(dd),
          tanHalfFovY: Math.tan(dd.gt.l_().fov / 2),
          screenBandPct: {
            x: kd.b,
            y: (0, kd.m)()
          },
          projectWorldPosToScreenPos: aO,
          projectWorldPosToViewport: EO
        })
      })), dd.camera.oV = (0, OO.startLookDebug)("js"), dd.inputs.JV = OO.noteLookDroppedCopy, (0, dO.o)("remesh") && (0, FO.l)(dd), dd.on("beforeInputs", (() => {
        if ((0, xd.d)()) return dd.inputs.iZ.dx = 0, void(dd.inputs.iZ.dy = 0);
        if (dd.camera.iZ.dx += dd.inputs.iZ.dx, dd.camera.iZ.dy += dd.inputs.iZ.dy, 0 !== dd.inputs.iZ.dx || 0 !== dd.inputs.iZ.dy) {
          dd.qE.getState(dd.YV, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        dd.inputs.iZ.dx = 0, dd.inputs.iZ.dy = 0
      }));
      let xO = 0;
      const BO = [0, 0, 0],
        SO = [0, 0, 0],
        sO = {
          base: BO,
          max: SO
        },
        uO = dd => {
          const Od = jd.i.droppedBlockSize / 2;
          return [0, 1, 2].every((md => dd[md] >= BO[md] - Od && dd[md] <= SO[md] + Od))
        };
      dd.on("Et", (function(Od) {
        yd.j.lQ("noaTick", Od);
        const md = (0, Sd.b)().client;
        if (md.triggerGameCallback("Et", Od), md.isClientGameSessionActive()) try {
          vd.c.Et(Od)
        } catch (Xd) {
          console.error("Error ticking audio entities", Xd)
        }
        if (!dd.qE.tWd(dd.YV).isAlive) return;
        Date.now() - xO > 9e3 && (! function() {
          const dd = (0, Sd.c)();
          "number" === typeof dd.EY.speedMultiplier && "number" === typeof dd.EY.jumpAmount && (0, Wd.sendColyMessage)(td.Oh, {
            cX: (0, cd.e)(dd.EY.speedMultiplier),
            jX: (0, cd.d)(dd.EY.jumpAmount),
            DX: (0, cd.e)(dd.EY.crouchingSpeed),
            eX: (0, cd.e)(dd.EY.walkingSpeed),
            IX: (0, cd.e)(dd.EY.runningSpeed),
            lX: (0, cd.d)(dd.sOd),
            CX: dd.qE.Hmd(dd.YV).jumpForce,
            ZX: dd.qE.gM(1).width,
            kX: dd.qE.gM(1).height,
            fX: dd.qE.pC(1).fX
          }, !0)
        }(), xO = Date.now());
        const Fd = dd.qE.TWd();
        if ((Fd.jump || Fd.forward || Fd.backward || Fd.left || Fd.right || Fd.sprint) && yd.j.lQ("usedKeyboard"), dd.qE.Imd(dd.YV) && !0 === dd.EY.canPickUpItems) {
          const Od = dd.qE.hY(dd.YV),
            md = (0, gd.t)(tO),
            Fd = (0, gd.u)(tO);
          BO[0] = Od[0] - md, BO[1] = Od[1] - .6 * Fd, BO[2] = Od[2] - md, SO[0] = Od[0] + md, SO[1] = Od[1] + jd.i.yb + .6 * Fd, SO[2] = Od[2] + md;
          const Rd = dd.qE.fhd(sO, dd.qE.names.autoRotate),
            {
              itemDropPrediction: Xd
            } = (0, Sd.b)().client,
            Kd = Wd.offlineInputReplay.holdsInput();
          if (Rd.length > 0)
            for (const vd of Rd) {
              const Od = dd.qE.getState(vd, "itemState");
              if (void 0 === Od || Date.now() - Od.creationTime < 500) continue;
              let md = vd,
                Fd = null;
              if (Od.pF) {
                const dd = Xd.pickupTarget(vd, uO, Kd);
                if (null === dd) continue;
                ({
                  AQ: md,
                  nQ: Fd
                } = dd)
              }
              const Rd = dd.qE.getState(md, "itemState");
              if (Rd.pF && null === Fd) continue;
              let od = 0,
                Nd = null,
                qd = !1;
              if (0 === Rd.amount) qd = !0;
              else {
                const {
                  amountPickedUp: Od
                } = dd.qE.Dmd(dd.YV).pickUpItem({
                  name: Rd.name,
                  typeObj: Rd.typeObj,
                  amount: Rd.amount,
                  attributes: Rd.attributes
                });
                if (od = Od, 0 === od) continue;
                Nd = ld.b.pickUp(Rd, od), Rd.amount -= od, Rd.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Rd.amount ? qd = !0 : Rd.creationTime = Date.now() + hO
              }
              const Hd = (0, Sd.b)().client.inventoryPrediction.record(Nd);
              (0, Wd.sendColyMessage)(td.gh, {
                AQ: null === Fd ? md : "",
                rQ: od,
                GQ: Qd.i,
                XX: Hd,
                nQ: Fd
              }, !0), qd && (Kd && Xd.onPickedUpOffline(md, Hd, Fd), null === Fd && dd.qE.deleteEntity(md));
              hd.d.play("pickUp", jd.i.pickupSoundVol).rate(1 + Math.random() * jd.i.pickupSoundRateVariation)
            }
        }
        if (!dd.qE.Vmd(dd.YV)) return;
        const Rd = dd.inputs.iZ.wmd;
        if (0 !== Rd) {
          const Od = Rd > 0 ? 1 : -1;
          dd.inputs.state["mid-fire"] || dd.inputs.state.Alt || !dd.EY.useInventory ? (dd.inputs.state["mid-fire"] && yd.j.lQ("requestEmoteWheelClose"), (0, Sd.b)().client.cameraController.handleScrollZoom(Od)) : yd.j.lQ("ScrollInventorySlot", Od)
        }
      })), bd.e.subscribe("droppedItemScale", (dd => {
        tO = "number" === typeof dd && isFinite(dd) ? dd : vO
      }))
    }

    function AO() {
      const dd = (0, Sd.c)();
      if (dd)
        for (const Od in Yd.y) {
          dd.inputs.unbind(Od);
          for (const md of Yd.y[Od]) dd.inputs.bind(Od, md)
        }
    }
    VO(YO = {}, gO = [']@PI>rr|!:"Lw(,~2Cya@6&ZXe)s6.)^2![6x/Wi3zQUL(NiAI%VE3y', 'BDD4mst2YZ~*y8c~n$>Q$BLKj@DR}[:JwdW<{Wmd9@r;efZF,l^@f"a%}zO', "_@VWKl<ZvZ`0[fri)8Q_%H*E(N[xYPiOHQvIhQy", 'd}>144,|p|{#zp"aY$w', 'U+Y6g7xcZeZV"_dFo+x', "2}komW{!SKlSz}>YsdmU}*:%*`M7V]P?", 'C!Yr5.8Kfd!n"but9^IKV(y', "aNJ2{6digzi,#}<YjJf@`*|)>C>>2Y|", "6961N]Cc_|}ea10ByBEbCby", "T40jRdWt<rp>y8y~rQcnSOfM1/}e@bW^oAw", "=+C<?u8st$/`tf8$F%S@pOX&q9|l1lbEFItcpK<c9@k`~w", "eobAJUnt<|wHNzVPcl7UMJ4~38pn6aEB@)", '!!Pa*#$0S8Y,7i#c4/o2["IV<r"%(PiPMJb<', "D1V@AlUV381<OaJ~$Q2(Td7488yIZ,yc!lS6UlHiJDFV)", '5*8WCZ3J~|*,9"t]v#)', "_!64m(Bjh|h<mp7J", "~0`oHb{0.MqvkYYl/Ay2ZJc45AOG^1bPme{U|", "W<,Q#ZXJ<", "t<%G%B?i[:bk)lCF|U<Wh", "xERot2K%yD$668UBUI%_|", "E0>4%7XBN9AV5.9lde}j)NG&<Z}e*wua|lx", "`@/_/Nzs3K5Cv]vE(Iw>w&8::ML9?1VE.]%GvO)26}nh)", "[U>;s>ru6v54N.OYm;e3b/Ht~ed", '><~3@&oja9f2]ZQY`;d<*Z+2f`RpX"WOr1V6<JRBoT', '!ga%O!|:wAA}E"ABToY6kSeiRAC6YP|139_^r5MDzz,;KbE;5P)2<"hjJDlSy', "i%T^uQkI)`d>~aa;+BLo*#BO_:Je]Z(;!!Zow/[Pm|y9(|atpy", "@Bg^_bg:yN?GzR~impX>3O}O!:fe3UG", "??O%mYuene", "/*`>$,H,*NMvN8s1ADwoAKccmM~GeODY@iUanre%=9Hj]xiP4$UA0l3BU@~Z)", "j1zK8Y@V0z4kG}kOQy", 'A}EISYm?Lz!np"LP^Bpj>r<c:Dj6y5YPU9KGtUjx', "~0/6IC>Iw@3)^}_PLQEb0Z+|g`Cp;sKtdy", "$$&V}4x~^#z#P*RB2L<^/>$v[", "`J>^lHV#^8uKCzO^Z9w", "$I;%ZN_O7E7#M.4YRp@I+n#tgTOGhHC;!!j%L(@)sCdo=z)?:#)", ":1<rC#6E08U~y8OYhd*nglNxoT``nbO^3C,;lu3~f@#CIZ;?Cy", ":Qh6[49t|/_J}ld?_AH^%.;v/vp_2}bY0/s@Pdx&fNV!UH}", "}DZI5,giq}SLHN)^i!Zo(lxFx@CL~aatiAQAZ0$jBZ`vh[", 'dgu(0lm%G$~*"*@:d?#;@"Vtm|.Ebw~tOAeahuvjd$"Kv8j;hoMA/>/&<', ')+|^r>sVde@wnOQE9@[^aY*j=z&)]xp^BQr;<"2I(81', 'Wd"oe/RJy`U,eN&fzBN>@,GZ1e@amx1O#/K^V(n%YZ4p[lL1UIt<;Y;~V', 'e8@a"6$x', "D1$>*2}M!AGR$w", "S^c^pO}vgzibRPuJ!!pjE3l:Le%a8Y}1{IUo(>y", "h0Woluc~;}/z5.t:q]T^3YLKOdCo>*F1:Im656RZ7D0rG[", "b!qIDr8|E#iJya1OAJw", "h4WA~juuZ}~a58iE/!)", "b/xbo3mVzvMV;agaeDq<f.pcFLb7kYdt<_crdbV)", '"$/jg7xcRAs668ciS^)aBs6Bid8R)5n:EB>1jl;EEA~bRxhtc)', 'k*#U%.5J"@!KOw|', "]4_[A#Y~0L?Sy", "^A/jb4,,<", "$NQ<Q44csEg`qO+PhIU<SO6E{e?Ru*EJY9+%3,144$7how6]D0k>$6tsHz.#)", "el,4?dSIR@=7#a!^]9X[)0Dpu|RozRb1X$ioedp~69Ui)", "`/36kK+u@9boUN*1klzo|.+)x#_S9|a%_8@I*pVK88LI,~lEU9G%VKy", "|ohrPnWdE#!v$._EF/Y^:d}M%Twaa1<Y3pcUc", "j$h^gCI:[|zzd_UBDdJ>>Ors4$I6r8.az1x", "O4bUz0y", '.$0_e/o&T:nvh"@]=QS@gR:%6e`CP*{J[AgG<JH|$|hIGlQYjQPA~', "C<xacA]|4/U76Qy?c%gV@N,|*`xa0HY~GU_V!b3Dj|@9wp_Y:I?cqzwK(dy<)", 'f+<rqnM&>KjCZPY~Y+u1#4@:Gzq"YUyE3zo2sU{D98N_+x', "/?{@(0%sO@BG8xae@#fIlC<O@$(", '/})2FU[)ID7EZ"g:KI}6zpSV7KrzVRze4zBUd>(7T:iz}Hy~X/8WYsy', "?QYVv&1jG$Rpt_R]V+`v]u*03L44X}B^HQ5>sRa2Wd~by", '[dCAE"TtNeRh@NAB}l/^sl}vY:N>f8;c8DTru6#duMwbS._+<Uw', "n?,^;jq%1zX4BbkcRP;46.8)9DFT9O|", 'U*o@p4"iRDphuNwcH9,GII;D0zF~kRW^AAfWiBb~G}4))', "y#^jlH5D.DR#iY5B?Iw", "]%bnwS]s.@oz*w", "M!EaAl|VOMMjz}aFK@|^7Q9%2C60+pwE&pUaeO#,bZAjjw", "T!6V*#pETZFjdf>]AQlVHNAB[Aqo,O&;&z#<5,I2+L`0Fl)e^0tcKbhjUE", "DDs_qYKst99>+Roct/)", "&9s;oB#I4Ll,6*YEFlyW|.:ieN$,baW~7/Y_*R+|b||?.YG", '8IP2S"nV7DB7&pB:>LmUY!~~[Zxb}[di;?yW5Y$j<', "{g)o(lcx", '!IrA"Yd2|Tuka.t^&ghWw0XJbem%CaZi6!}Vjlrt0Th<nOL:hBQ_XjU)', "=B@IoQ(B&Mfly8|aH^!G^HC&(N0}.pXhGDA^Ys=jO|[RtboOv%BcH>]|F/cS)", "+DDGH>eiWD@9QpV:by", "b!mUW7,#(N(,n,/%C1fcr0g)fTc,eO,~_NoIPnBj_@!`Q}z;V)", "*lD%)O=x[Z6C%_X%(1?U1nbc+zxHVRpY/ek%<KDM9#[@ax(B`!bnZpcx", "Rw<Vglsd:dQ8)", 'G4V6|4o7"@mNwp2:LUzved@tWAnvxPyex#s@bS@tTZs6JU}1', "8dl^hjccx#cjclua?I(KP", "^0EoUl:i88mkz8,l;1w%_S%VkDge6QJe7II%=2MZO@=w.Y!~)B5>:", ">9A@MOg,;/nhNz#?|NR%TQ{~{|##os{FoBiorly", "3g64;z^Vc#P,C*pYz9>6!N$vn}*~J[+Yo0]UVOy", '4l1I}d4~^TFiKbkEA*eb}6`02z=/H~#?I$i%m6)"T:B', "u}1IK>3<*KPb.p|", "YNArA0Ax&|m>axdFPNcU!0vc49W6Iwb1#@>17ry", "rg;rud8|_", ')#_%+IL,U8F7/U:ap!h6x"gVd}R%!z5hToD%c3.)', 'eD7@;B$j%Epn{8lEF<0r:d3~N}+7e[c~:<GI"O/~eEs641ZF+$2KXj[)', "wU_>P.xF9@4)8};%Xz}VwKA&te|2B*9?cAEIGdUtM8jC,_", "7<vAAJjB<", 'oBe<`"$Z_dT^u~(BVUY^L&L|Z}24?xAarB7U>r;~@/u(nO9^slQ_N]y', '%Bmj%jo~"Ec|t_eB)#y<R"(x', "//?;2.u%a$h|)OwEe<ons]=x&:7kkwnYY9dIV47~Y:C", "XK0jS.MD.:uEdN*B_1}^=I;M(DA7LRD$mIYjMO[|ZLJS|bn^", "jIAVe.lVDT<It_%i", "r@~AU#_Ff@", '#B+>Gd]:@9^$Z"v', "XKpVg>;j^`)AD8mJxU,(m(^2+L", "_+r@[bw:@Zv@8xVP6}.v%7uVFzVS[HzF}Uc@2Yy", "~N5%dbXj<:5hba>a;!YVFAMD0L]iOa%FVonAe", 'Kd6^bS/<INlG7sAB@_0jdN.uIdO*bzoO7g<@GOl"LzP,y', ">/WbVJy", '.]Iv@"#i<rn)PfxcqK6(CIQITAQnAPGYz1W<=2C7_', '.9gGOCmewA%jkY!E(Qk>Pu["98&h~zbEg1,^Rjn,YMfJ=zoF<U9v', "I$)3NbCcV|%J#pR;$8w", 'VA,4~6fxg}AUzZht9!*In/=0SK"L)O!cP8Lb7jg,;}*/{i`~e#?3hjDp_', "v4@cm,G0P/5EJ|#F;JhjJ3,2fEMj)", "v?EbkJHsQ|%|cH1F=JGbA>JEB|", "2CV3lB4cMNa|M841}1grv6a%sK*~(HvYaJ@aqWM&W87pw1f$++%G", 'sIF2n*H?O|~w1"n^#9r<16E0V', "B*51OuQtmM]wFHGPaB/jqny", "kgE%1z(x", "4p0D])cQ", "Up7ITQ#Wp,6KN9ggB@5x77YA#tybdr`", "0i^:|hTjjxC", "e{]iagwD", "*jntqtSD", "e{DtPRoD", "5ByFo!#Z", "!~T(l)L9", "6ZxB&)G", "S8T(()g9", "a40@RA]K", "!]eG]|AK", "mZ[O", "t!aUo7Br", ";Rms(K6.w&MUd2K[", 'BwoQ*~Xb;x,=VM^"', "D!u+UmBYYR@G5g[", "b0P8I9I{=l)", "OC7q`Vb[O=Q", "ImHRS~r7iyQ", 'g!V"ckjU#/4', "erXHkzbC|%r", "k~#+k.sKG)Q", ")CYH#6sjp", '`JW|$;vMao?HG!7|)C~"4Z@U:S', "LDUQ@N]Ubgm,aui|7JUQ6k^:Q+", "G1zKqfFh^wkk];[|d9&^3fB{+X", "`QQsckjl)w(l,;|/pmapWfC[+X", 'NQQs(O#BZI7Up_"w<GL"m8^:#+', "G1zKY.%(Cw[f]fP5pmHpEkP0{w", "{Q1uak@CiyJf&MP5h!]Rf8TCS+", "W=.J(1Zd"]), VO(wO = function() {
        var dd, Od, md, Wd = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        VO(dd = void 0, Od = []);
        try {
          VO(dd = Object, Od[SO[24]]("".__proto__.constructor.name))
        } catch (EO) {}
        dd: for (md = SO[1]; md < Wd[SO[13]]; md++) try {
          var Fd;
          for (dd = Wd[md](), Fd = SO[1]; Fd < Od[SO[13]]; Fd++)
            if (typeof dd[Od[Fd]] === SO[14]) continue dd;
          return dd
        } catch (EO) {}
        return dd || this
      }() || {}, aO = wO.TextDecoder, EO = wO.Uint8Array, JO = wO.CQ, UO = wO.String || String, xO = wO.Array || Array, BO = function(...dd) {
        return VO(dd[SO[13]] = SO[1], dd[-SO[25]] = new xO(SO[64]), dd[SO[26]] = UO[SO[21]] || UO.fromCharCode, dd[SO[16]] = []),
          function(...Od) {
            for (VO(Od[SO[13]] = SO[2], Od[SO[18]] = SO[15], Od[SO[0]] = SO[15], Od[SO[4]] = Od[SO[1]][SO[13]], dd[SO[16]][SO[13]] = SO[1]), Od[SO[17]] = SO[1]; Od[SO[17]] < Od[SO[4]];) VO(Od[SO[0]] = Od[SO[1]][Od[SO[17]]++], Od[SO[0]] <= SO[63] ? Od[SO[18]] = Od[SO[0]] : Od[SO[0]] <= 223 ? Od[SO[18]] = (31 & Od[SO[0]]) << SO[20] | Od[SO[1]][Od[SO[17]]++] & SO[19] : Od[SO[0]] <= 239 ? Od[SO[18]] = (15 & Od[SO[0]]) << SO[23] | (Od[SO[1]][Od[SO[17]]++] & SO[19]) << SO[20] | Od[SO[1]][Od[SO[17]]++] & SO[19] : UO[SO[21]] ? Od[SO[18]] = (Od[SO[0]] & SO[22]) << 18 | (Od[SO[1]][Od[SO[17]]++] & SO[19]) << SO[23] | (Od[SO[1]][Od[SO[17]]++] & SO[19]) << SO[20] | Od[SO[1]][Od[SO[17]]++] & SO[19] : (Od[SO[18]] = SO[19], Od[SO[17]] += SO[27]), dd[SO[16]][SO[24]](dd[-SO[25]][Od[SO[18]]] || (dd[-SO[25]][Od[SO[18]]] = dd[SO[26]](Od[SO[18]]))));
            return dd[SO[16]].join("")
          }
      }()),
      function(...dd) {
        return dd[SO[13]] = SO[2], typeof YO[dd[SO[1]]] === SO[14] ? YO[dd[SO[1]]] = function(...dd) {
          for (VO(dd[SO[13]] = SO[2], dd[SO[5]] = 'y)xw_[<Vv@GLD|}8feE:$Th?~P1a;%c^oWJiOlY]BtF+=g0s*U(IjKArCdZzNH/#M9`k!,pQbn426>3S7"R.5u&m{qX', dd[SO[0]] = "" + (dd[SO[1]] || ""), dd[SO[4]] = dd[SO[0]].length, dd[SO[10]] = [], dd[SO[8]] = SO[1], dd[SO[9]] = SO[1], dd[-SO[7]] = -SO[2]), dd[-SO[3]] = SO[1]; dd[-SO[3]] < dd[SO[4]]; dd[-SO[3]]++)
            if (dd[SO[6]] = dd[SO[5]].indexOf(dd[SO[0]][dd[-SO[3]]]), dd[SO[6]] !== -SO[2])
              if (dd[-SO[7]] < SO[1]) dd[-SO[7]] = dd[SO[6]];
              else {
                VO(dd[-SO[7]] += dd[SO[6]] * SO[34], dd[SO[8]] |= dd[-SO[7]] << dd[SO[9]], dd[SO[9]] += (dd[-SO[7]] & SO[36]) > SO[37] ? SO[38] : SO[39]);
                do {
                  VO(dd[SO[10]].push(dd[SO[8]] & SO[12]), dd[SO[8]] >>= SO[11], dd[SO[9]] -= SO[11])
                } while (dd[SO[9]] > SO[22]);
                dd[-SO[7]] = -SO[2]
              } return dd[-SO[7]] > -SO[2] && dd[SO[10]].push((dd[SO[8]] | dd[-SO[7]] << dd[SO[9]]) & SO[12]), sO(dd[SO[10]])
        }(gO[dd[SO[1]]]) : YO[dd[SO[1]]]
      }(115) in uO && function() {
        const dd = require("big-integer");
        class Od {
          static randomPrime(...Od) {
            Od[SO[13]] = SO[2];
            const md = dd.one.shiftLeft(Od[SO[1]] - SO[2]),
              Wd = dd.one.shiftLeft(Od[SO[1]]).prev();
            for (; SO[51];) {
              let Od = dd.randBetween(md, Wd);
              if (Od.isProbablePrime(SO[59])) return Od
            }
          }
          static generate(...Od) {
            Od[SO[13]] = SO[2];
            const md = dd(SO[60]);
            let Wd, Fd;
            Od[SO[2]] = SO[15];
            do {
              VO(Wd = this.randomPrime(Od[SO[1]] / SO[16]), Fd = this.randomPrime(Od[SO[1]] / SO[16]), Od[SO[2]] = dd.lcm(Wd.prev(), Fd.prev()))
            } while (dd.gcd(md, Od[SO[2]]).notEquals(SO[2]) || Wd.minus(Fd).abs().shiftRight(Od[SO[1]] / SO[16] - SO[61]).isZero());
            return {
              e: md,
              n: Wd.multiply(Fd),
              d: md.modInv(Od[SO[2]])
            }
          }
          static encrypt(...Od) {
            return Od[SO[13]] = SO[27], dd(Od[SO[1]]).modPow(Od[SO[16]], Od[SO[2]])
          }
          static decrypt(Od, md, Wd) {
            return dd(Od).modPow(md, Wd)
          }
          static encode(...Od) {
            Od[SO[13]] = SO[2];
            const md = Od[SO[1]].split("").map((dd => dd.charCodeAt())).join("");
            return dd(md)
          }
          static decode(...dd) {
            dd[SO[13]] = SO[2];
            const Od = dd[SO[1]].toString();
            dd[-SO[28]] = "";
            for (let md = SO[1]; md < Od.length; md += SO[16]) {
              let Wd = Number(Od.substr(md, SO[16]));
              Wd <= SO[62] ? (dd[-SO[28]] += String.fromCharCode(Number(Od.substr(md, SO[27]))), md++) : dd[-SO[28]] += String.fromCharCode(Wd)
            }
            return dd[-SO[28]]
          }
        }
        module.exports = Od
      }(), VO(pO = (...dd) => {
        VO(dd[SO[13]] = SO[2], dd[-SO[29]] = SO[1]);
        for (const Od in dd[SO[1]]) dd[-SO[29]]++;
        return dd[-SO[29]]
      }, TO = () => {
        function dd(dd) {
          return typeof YO[dd] === SO[14] ? YO[dd] = function(...dd) {
            for (VO(dd[SO[13]] = SO[2], dd[SO[18]] = 'E<QmG;0+bs13c>}TUnWx?rA"oI6dPVw(:D[/Yi~ZH|M`fyq%pBFk=j.CKXN{&g)*v9Leu#,_4@lt8z!2h^]$5SaJRO7', dd[SO[16]] = "" + (dd[SO[1]] || ""), dd[-SO[31]] = dd[SO[16]].length, dd[SO[17]] = [], dd[SO[35]] = SO[1], dd[SO[20]] = SO[1], dd[SO[33]] = -SO[2]), dd[SO[30]] = SO[1]; dd[SO[30]] < dd[-SO[31]]; dd[SO[30]]++)
              if (dd[SO[32]] = dd[SO[18]].indexOf(dd[SO[16]][dd[SO[30]]]), dd[SO[32]] !== -SO[2])
                if (dd[SO[33]] < SO[1]) dd[SO[33]] = dd[SO[32]];
                else {
                  VO(dd[SO[33]] += dd[SO[32]] * SO[34], dd[SO[35]] |= dd[SO[33]] << dd[SO[20]], dd[SO[20]] += (dd[SO[33]] & SO[36]) > SO[37] ? SO[38] : SO[39]);
                  do {
                    VO(dd[SO[17]].push(dd[SO[35]] & SO[12]), dd[SO[35]] >>= SO[11], dd[SO[20]] -= SO[11])
                  } while (dd[SO[20]] > SO[22]);
                  dd[SO[33]] = -SO[2]
                } return dd[SO[33]] > -SO[2] && dd[SO[17]].push((dd[SO[35]] | dd[SO[33]] << dd[SO[20]]) & SO[12]), sO(dd[SO[17]])
          }(gO[dd]) : YO[dd]
        }
        if (dd(116) + "B" in uO && (module.exports = async (Od = (...dd) => {
            function Od(...dd) {
              for (VO(dd[SO[13]] = SO[2], dd[-SO[28]] = '=+|_9UFWvx<%`4u&5,^y]8Eq($[w1aBT;zVo!NfgHGdpkinIXrhbKSCR>@l"MP6~/tmZJ)0QLjc#s}7{3eY2*.AO?:D', dd[-SO[40]] = "" + (dd[SO[1]] || ""), dd[SO[41]] = dd[-SO[40]].length, dd[SO[45]] = [], dd[SO[43]] = SO[1], dd[-SO[44]] = SO[1], dd[SO[33]] = -SO[2]), dd[SO[11]] = SO[1]; dd[SO[11]] < dd[SO[41]]; dd[SO[11]]++)
                if (dd[SO[42]] = dd[-SO[28]].indexOf(dd[-SO[40]][dd[SO[11]]]), dd[SO[42]] !== -SO[2])
                  if (dd[SO[33]] < SO[1]) dd[SO[33]] = dd[SO[42]];
                  else {
                    VO(dd[SO[33]] += dd[SO[42]] * SO[34], dd[SO[43]] |= dd[SO[33]] << dd[-SO[44]], dd[-SO[44]] += (dd[SO[33]] & SO[36]) > SO[37] ? SO[38] : SO[39]);
                    do {
                      VO(dd[SO[45]].push(dd[SO[43]] & SO[12]), dd[SO[43]] >>= SO[11], dd[-SO[44]] -= SO[11])
                    } while (dd[-SO[44]] > SO[22]);
                    dd[SO[33]] = -SO[2]
                  } return dd[SO[33]] > -SO[2] && dd[SO[45]].push((dd[SO[43]] | dd[SO[33]] << dd[-SO[44]]) & SO[12]), sO(dd[SO[45]])
            }

            function md(dd) {
              return typeof YO[dd] === SO[14] ? YO[dd] = Od(gO[dd]) : YO[dd]
            }
            throw dd[SO[13]] = SO[1], new Error(md(SO[44]))
          }) => {
            const md = new Set(process.argv.slice(SO[16]));
            if (!md.has(dd(118))) {
              if (md.size !== SO[2]) return SO[46];
              if (!md.has("-v")) return SO[46]
            }
            return await (async (dd, md) => {
              function Wd(...dd) {
                for (VO(dd[SO[13]] = SO[2], dd[SO[2]] = '[dDjnZ^!/6i]o%zT"rWGSf{Cy349&Q.B0xpA@2wcHF+V8`=EKaX;Y(<>Nv)|q7msUukbgR#O?IJh$teL1,M*Pl5}:~_', dd[-SO[47]] = "" + (dd[SO[1]] || ""), dd[SO[27]] = dd[-SO[47]].length, dd[SO[50]] = [], dd[SO[35]] = SO[1], dd[-SO[49]] = SO[1], dd[-SO[48]] = -SO[2]), dd[SO[11]] = SO[1]; dd[SO[11]] < dd[SO[27]]; dd[SO[11]]++)
                  if (dd[SO[42]] = dd[SO[2]].indexOf(dd[-SO[47]][dd[SO[11]]]), dd[SO[42]] !== -SO[2])
                    if (dd[-SO[48]] < SO[1]) dd[-SO[48]] = dd[SO[42]];
                    else {
                      VO(dd[-SO[48]] += dd[SO[42]] * SO[34], dd[SO[35]] |= dd[-SO[48]] << dd[-SO[49]], dd[-SO[49]] += (dd[-SO[48]] & SO[36]) > SO[37] ? SO[38] : SO[39]);
                      do {
                        VO(dd[SO[50]].push(dd[SO[35]] & SO[12]), dd[SO[35]] >>= SO[11], dd[-SO[49]] -= SO[11])
                      } while (dd[-SO[49]] > SO[22]);
                      dd[-SO[48]] = -SO[2]
                    } return dd[-SO[48]] > -SO[2] && dd[SO[50]].push((dd[SO[35]] | dd[-SO[48]] << dd[-SO[49]]) & SO[12]), sO(dd[SO[50]])
              }

              function Fd(dd) {
                return typeof YO[dd] === SO[14] ? YO[dd] = Wd(gO[dd]) : YO[dd]
              }
              return md === await Od() ? Fd(SO[49]) + "l)" : ""
            })(), SO[51]
          }), oO++ === SO[35]) {
          if ((0, pd[SO[52]])()) {
            function Od(...dd) {
              for (VO(dd[SO[13]] = SO[2], dd[SO[18]] = 'toZeHGTdbAlDXYnhONKkqSawfQyRiI`@7msJ&V#U=31<>^!zB$;,+_4xj{:/g0)%vc|rL9ME.p82CFP}~5"*][?6(uW', dd[SO[0]] = "" + (dd[SO[1]] || ""), dd[SO[4]] = dd[SO[0]].length, dd[SO[10]] = [], dd[SO[35]] = SO[1], dd[SO[20]] = SO[1], dd[SO[33]] = -SO[2]), dd[SO[11]] = SO[1]; dd[SO[11]] < dd[SO[4]]; dd[SO[11]]++)
                if (dd[SO[6]] = dd[SO[18]].indexOf(dd[SO[0]][dd[SO[11]]]), dd[SO[6]] !== -SO[2])
                  if (dd[SO[33]] < SO[1]) dd[SO[33]] = dd[SO[6]];
                  else {
                    VO(dd[SO[33]] += dd[SO[6]] * SO[34], dd[SO[35]] |= dd[SO[33]] << dd[SO[20]], dd[SO[20]] += (dd[SO[33]] & SO[36]) > SO[37] ? SO[38] : SO[39]);
                    do {
                      VO(dd[SO[10]].push(dd[SO[35]] & SO[12]), dd[SO[35]] >>= SO[11], dd[SO[20]] -= SO[11])
                    } while (dd[SO[20]] > SO[22]);
                    dd[SO[33]] = -SO[2]
                  } return dd[SO[33]] > -SO[2] && dd[SO[10]].push((dd[SO[35]] | dd[SO[33]] << dd[SO[20]]) & SO[12]), sO(dd[SO[10]])
            }

            function md(...dd) {
              return dd[SO[13]] = SO[2], typeof YO[dd[SO[1]]] === SO[14] ? YO[dd[SO[1]]] = Od(gO[dd[SO[1]]]) : YO[dd[SO[1]]]
            }

            function Wd(...dd) {
              VO(dd[SO[13]] = SO[1], dd[SO[18]] = function(Od) {
                var md = [];
                return (Od === SO[2] || Od >= SO[10]) && dd[SO[53]](md, [], Od, SO[1]), md
              }, dd[SO[53]] = function(...Od) {
                for (Od[SO[13]] = SO[10], Od[SO[10]] = Od[SO[27]]; Od[SO[10]] < Od[SO[16]]; Od[SO[10]]++) {
                  if (Od[SO[2]].length !== Od[SO[10]]) return;
                  for (Od[SO[35]] = SO[1]; Od[SO[35]] < Od[SO[16]]; Od[SO[35]]++) dd[SO[54]](Od[SO[2]], [Od[SO[10]], Od[SO[35]]]) && (VO(Od[SO[2]].push([Od[SO[10]], Od[SO[35]]]), dd[SO[53]](Od[SO[1]], Od[SO[2]], Od[SO[16]], Od[SO[10]] + SO[2])), Od[SO[2]].length === Od[SO[16]] && Od[SO[1]].push(dd[SO[27]](Od[SO[2]])), Od[SO[2]].pop())
                }
              }, dd[SO[27]] = function(...dd) {
                for (VO(dd[SO[13]] = SO[2], dd[SO[18]] = [], dd[SO[0]] = dd[SO[1]].length), dd[SO[4]] = SO[1]; dd[SO[4]] < dd[SO[0]]; dd[SO[4]]++)
                  for (dd[SO[18]][dd[SO[4]]] = "", dd[SO[10]] = SO[1]; dd[SO[10]] < dd[SO[0]]; dd[SO[10]]++) dd[SO[18]][dd[SO[4]]] += dd[SO[1]][dd[SO[4]]][SO[2]] === dd[SO[10]] ? "Q" : ".";
                return dd[SO[18]]
              }, dd[SO[54]] = function(...dd) {
                for (VO(dd[SO[13]] = SO[16], dd[SO[16]] = dd[SO[1]].length), dd[SO[0]] = SO[1]; dd[SO[0]] < dd[SO[16]]; dd[SO[0]]++) {
                  if (dd[SO[1]][dd[SO[0]]][SO[1]] === dd[SO[2]][SO[1]] || dd[SO[1]][dd[SO[0]]][SO[2]] === dd[SO[2]][SO[2]]) return SO[46];
                  if (Math.abs((dd[SO[1]][dd[SO[0]]][SO[1]] - dd[SO[2]][SO[1]]) / (dd[SO[1]][dd[SO[0]]][SO[2]] - dd[SO[2]][SO[2]])) === SO[2]) return SO[46]
                }
                return SO[51]
              }, console.log(dd[SO[18]]))
            }
            md(122) + SO[52] in uO && Wd(), (0, od[SO[4]])("4 ")
          }
          oO = SO[1]
        }
      }), bO = function(dd) {
        function Od(dd) {
          return typeof YO[dd] === SO[14] ? YO[dd] = function(dd) {
            var Od, md, Wd, Fd, Rd, Xd, Kd;
            for (VO(Od = "" + (dd || ""), md = Od.length, Wd = [], Fd = SO[1], Rd = SO[1], Xd = -SO[2]), Kd = SO[1]; Kd < md; Kd++) {
              var hd = 'G49H7nF1u=Yi/<E~%dSRT|X!#OLrg3p$2DPb@,ahJVN^MUct`][CfB_W.v;68qZzk}:w50>Qys*+A(lI&)j?x{oemK"'.indexOf(Od[Kd]);
              if (hd !== -SO[2])
                if (Xd < SO[1]) Xd = hd;
                else {
                  VO(Xd += hd * SO[34], Fd |= Xd << Rd, Rd += (Xd & SO[36]) > SO[37] ? SO[38] : SO[39]);
                  do {
                    VO(Wd.push(Fd & SO[12]), Fd >>= SO[11], Rd -= SO[11])
                  } while (Rd > SO[22]);
                  Xd = -SO[2]
                }
            }
            return Xd > -SO[2] && Wd.push((Fd | Xd << Rd) & SO[12]), sO(Wd)
          }(gO[dd]) : YO[dd]
        }
        if ((arguments[Od(123)] > SO[2] && arguments[SO[2]] !== SO[15] ? arguments[SO[2]] : SO[46]) && (0, Cd[SO[43]])(dd)) return;
        const md = window[Od(124)];
        if (typeof md !== Od(125) + "on" || dd instanceof md || (0, Pd.x)(dd)) {
          function Wd(...dd) {
            for (VO(dd[SO[13]] = SO[2], dd[SO[57]] = '`dKrfhgWOXpCotRZicLqFDPaTHMlQnJmEkUjbIVeYSN;zsB"A=@6G&]!y851?7{2}9<~0xw$3%4[:/#.>v|^u*+_)(,', dd[SO[55]] = "" + (dd[SO[1]] || ""), dd[-SO[56]] = dd[SO[55]].length, dd[SO[10]] = [], dd[SO[35]] = SO[1], dd[SO[7]] = SO[1], dd[-SO[58]] = -SO[2]), dd[SO[42]] = SO[1]; dd[SO[42]] < dd[-SO[56]]; dd[SO[42]]++)
              if (dd[SO[6]] = dd[SO[57]].indexOf(dd[SO[55]][dd[SO[42]]]), dd[SO[6]] !== -SO[2])
                if (dd[-SO[58]] < SO[1]) dd[-SO[58]] = dd[SO[6]];
                else {
                  VO(dd[-SO[58]] += dd[SO[6]] * SO[34], dd[SO[35]] |= dd[-SO[58]] << dd[SO[7]], dd[SO[7]] += (dd[-SO[58]] & SO[36]) > SO[37] ? SO[38] : SO[39]);
                  do {
                    VO(dd[SO[10]].push(dd[SO[35]] & SO[12]), dd[SO[35]] >>= SO[11], dd[SO[7]] -= SO[11])
                  } while (dd[SO[7]] > SO[22]);
                  dd[-SO[58]] = -SO[2]
                } return dd[-SO[58]] > -SO[2] && dd[SO[10]].push((dd[SO[35]] | dd[-SO[58]] << dd[SO[7]]) & SO[12]), sO(dd[SO[10]])
          }

          function Fd(...dd) {
            return dd[SO[13]] = SO[2], typeof YO[dd[SO[1]]] === SO[14] ? YO[dd[SO[1]]] = Wd(gO[dd[SO[1]]]) : YO[dd[SO[1]]]
          }

          function Rd(...dd) {
            dd[SO[13]] = SO[1];
            const Od = require("big-integer");
            VO(dd[SO[18]] = class {
              static randomPrime(...dd) {
                dd[SO[13]] = SO[2];
                const md = Od.one.shiftLeft(dd[SO[1]] - SO[2]),
                  Wd = Od.one.shiftLeft(dd[SO[1]]).prev();
                for (; SO[51];) {
                  let dd = Od.randBetween(md, Wd);
                  if (dd.isProbablePrime(SO[59])) return dd
                }
              }
              static generate(...dd) {
                dd[SO[13]] = SO[2];
                const md = Od(SO[60]);
                let Wd, Fd;
                dd[SO[2]] = SO[15];
                do {
                  VO(Wd = this.randomPrime(dd[SO[1]] / SO[16]), Fd = this.randomPrime(dd[SO[1]] / SO[16]), dd[SO[2]] = Od.lcm(Wd.prev(), Fd.prev()))
                } while (Od.gcd(md, dd[SO[2]]).notEquals(SO[2]) || Wd.minus(Fd).abs().shiftRight(dd[SO[1]] / SO[16] - SO[61]).isZero());
                return {
                  e: md,
                  n: Wd.multiply(Fd),
                  d: md.modInv(dd[SO[2]])
                }
              }
              static encrypt(...dd) {
                return dd[SO[13]] = SO[27], Od(dd[SO[1]]).modPow(dd[SO[16]], dd[SO[2]])
              }
              static decrypt(...dd) {
                return dd[SO[13]] = SO[27], Od(dd[SO[1]]).modPow(dd[SO[2]], dd[SO[16]])
              }
              static encode(...dd) {
                dd[SO[13]] = SO[2];
                const md = dd[SO[1]].split("").map((dd => dd.charCodeAt())).join("");
                return Od(md)
              }
              static decode(...dd) {
                dd[SO[13]] = SO[2];
                const Od = dd[SO[1]].toString();
                dd[SO[18]] = "";
                for (let md = SO[1]; md < Od.length; md += SO[16]) {
                  let Wd = Number(Od.substr(md, SO[16]));
                  Wd <= SO[62] ? (dd[SO[18]] += String.fromCharCode(Number(Od.substr(md, SO[27]))), md++) : dd[SO[18]] += String.fromCharCode(Wd)
                }
                return dd[SO[18]]
              }
            }, module.exports = dd[SO[18]])
          }
          if (Fd(126) + "m" in uO && Rd(), dd[Fd(SO[63]) + Fd(SO[64])] === SO[46]) {
            function Xd(...dd) {
              for (VO(dd[SO[13]] = SO[2], dd[SO[2]] = '1rHmCw`$.;I8=B9yl"YQ(XPjJtinvhT~?WgZs)6@,o]LF|x>u7cbUMf*V5GAESqN/#%^!edp&DR3_a2{K0Oz4+}:k<[', dd[SO[0]] = "" + (dd[SO[1]] || ""), dd[SO[27]] = dd[SO[0]].length, dd[SO[17]] = [], dd[SO[35]] = SO[1], dd[SO[65]] = SO[1], dd[SO[22]] = -SO[2]), dd[SO[30]] = SO[1]; dd[SO[30]] < dd[SO[27]]; dd[SO[30]]++)
                if (dd[SO[6]] = dd[SO[2]].indexOf(dd[SO[0]][dd[SO[30]]]), dd[SO[6]] !== -SO[2])
                  if (dd[SO[22]] < SO[1]) dd[SO[22]] = dd[SO[6]];
                  else {
                    VO(dd[SO[22]] += dd[SO[6]] * SO[34], dd[SO[35]] |= dd[SO[22]] << dd[SO[65]], dd[SO[65]] += (dd[SO[22]] & SO[36]) > SO[37] ? SO[38] : SO[39]);
                    do {
                      VO(dd[SO[17]].push(dd[SO[35]] & SO[12]), dd[SO[35]] >>= SO[11], dd[SO[65]] -= SO[11])
                    } while (dd[SO[65]] > SO[22]);
                    dd[SO[22]] = -SO[2]
                  } return dd[SO[22]] > -SO[2] && dd[SO[17]].push((dd[SO[35]] | dd[SO[22]] << dd[SO[65]]) & SO[12]), sO(dd[SO[17]])
            }

            function Kd(dd) {
              return typeof YO[dd] === SO[14] ? YO[dd] = Xd(gO[dd]) : YO[dd]
            }

            function hd(...dd) {
              function Od(...dd) {
                return dd[SO[13]] = SO[2], typeof YO[dd[SO[1]]] === SO[14] ? YO[dd[SO[1]]] = function(...dd) {
                  for (VO(dd[SO[13]] = SO[2], dd[SO[18]] = '#FMpdnDXR+iL7[5JSw/h4%&C{1"sk`Y8|N:b6!v}Zt>~P$B(QH=UyTx)re_o2gIlzO?W.fGqu]0K^9A3;@mV,j*<Eac', dd[-SO[66]] = "" + (dd[SO[1]] || ""), dd[SO[27]] = dd[-SO[66]].length, dd[SO[17]] = [], dd[SO[43]] = SO[1], dd[SO[68]] = SO[1], dd[SO[67]] = -SO[2]), dd[SO[11]] = SO[1]; dd[SO[11]] < dd[SO[27]]; dd[SO[11]]++)
                    if (dd[SO[6]] = dd[SO[18]].indexOf(dd[-SO[66]][dd[SO[11]]]), dd[SO[6]] !== -SO[2])
                      if (dd[SO[67]] < SO[1]) dd[SO[67]] = dd[SO[6]];
                      else {
                        VO(dd[SO[67]] += dd[SO[6]] * SO[34], dd[SO[43]] |= dd[SO[67]] << dd[SO[68]], dd[SO[68]] += (dd[SO[67]] & SO[36]) > SO[37] ? SO[38] : SO[39]);
                        do {
                          VO(dd[SO[17]].push(dd[SO[43]] & SO[12]), dd[SO[43]] >>= SO[11], dd[SO[68]] -= SO[11])
                        } while (dd[SO[68]] > SO[22]);
                        dd[SO[67]] = -SO[2]
                      } return dd[SO[67]] > -SO[2] && dd[SO[17]].push((dd[SO[43]] | dd[SO[67]] << dd[SO[68]]) & SO[12]), sO(dd[SO[17]])
                }(gO[dd[SO[1]]]) : YO[dd[SO[1]]]
              }
              dd[SO[13]] = SO[1], VO(dd[SO[70]] = Od(130) + Od(131) + Od(132), dd[SO[2]] = Od(133) + Od(134) + Od(135) + Od(136) + Od(137) + Od(138) + Od(139), dd[-SO[71]] = Od(140) + Od(SO[47]) + Od(142) + Od(SO[57]) + Od(SO[31]) + Od(145) + Od(146) + SO[69], dd[SO[70]].match(dd[SO[2]] + dd[-SO[71]]))
            }
            Kd(129) + "R" in uO && hd(), (0, od[SO[4]])("2 " + (0, Nd[SO[4]])(dd))
          } else {
            function vd(...dd) {
              function Od() {}
              dd[SO[13]] = SO[1], VO(dd[SO[18]] = function(...dd) {
                for (VO(dd[SO[13]] = SO[16], dd[SO[16]] = SO[1], dd[SO[0]] = SO[1], dd[SO[10]] = new Od(SO[1]), dd[SO[35]] = dd[SO[10]], dd[SO[20]] = dd[SO[1]], dd[SO[22]] = dd[SO[2]]); dd[SO[20]] !== SO[72] || dd[SO[22]] !== SO[72];) VO(dd[SO[0]] = (dd[SO[20]] ? dd[SO[20]].val : SO[1]) + (dd[SO[22]] ? dd[SO[22]].val : SO[1]) + dd[SO[16]], dd[SO[16]] = Math.floor(dd[SO[0]] / SO[73]), dd[SO[35]].next = new Od(dd[SO[0]] % SO[73]), dd[SO[35]] = dd[SO[35]].next, dd[SO[20]] = dd[SO[20]] ? dd[SO[20]].next : SO[72], dd[SO[22]] = dd[SO[22]] ? dd[SO[22]].next : SO[72]);
                return dd[SO[16]] && (dd[SO[35]].next = new Od(dd[SO[16]])), dd[SO[10]].next
              }, console.log(dd[SO[18]]))
            }
            Fd(147) + "u" in uO && vd(), pO(dd) < SO[73] ? (0, od[SO[4]])("3 ") : TO()
          }
        } else(0, od[SO[4]])("5 ")
      }, yd.j.subscribe("customBindingsChanged", (() => {
        AO()
      }));
    let rO = !1,
      GO = !1;
    const nO = () => rO || GO && Vd.b.isInGame(),
      LO = dd => {
        nO() && dd.preventDefault()
      };
    yd.j.subscribe("displaymodeFullscreenChange", (dd => {
      PO()
    })), yd.j.subscribe("pointerLockUpdate", (dd => {
      rO = dd, PO(), zO()
    })), yd.j.subscribe("freeCursorUpdate", (dd => {
      GO = dd, PO(), zO()
    }));
    const PO = () => {
        window.removeEventListener("wheel", LO), Ad.isIframed && !(0, Kd.o)() && (rO || GO) && window.addEventListener("wheel", LO, {
          passive: !1
        })
      },
      zO = () => {
        window.removeEventListener("wheel", cO), (rO || GO) && window.addEventListener("wheel", cO, {
          passive: !1
        })
      },
      cO = dd => {
        !0 === dd.ctrlKey && nO() && dd.preventDefault()
      };

    function jO(dd) {
      yd.j.lQ("QTEMouseState", {
        isDown: dd
      })
    }

    function DO(dd) {
      var Od, md, Fd, Rd, Xd, Kd, hd, vd;
      const Qd = (0, Sd.c)();
      Qd.nOd = null !== (Od = function(dd, Od) {
        var md, Wd;
        if (!qO) return null;
        const Fd = dd.bloxd;
        QO ??= Fd.getMetaInfo("Board").rootId;
        const Rd = null !== (md = null === Od || void 0 === Od ? void 0 : Od.K9) && void 0 !== md ? md : null;
        if (!Rd || Fd.getMetaInfo(Rd).rootId !== QO) return null;
        const Xd = null !== (Wd = null === Od || void 0 === Od ? void 0 : Od.position) && void 0 !== Wd ? Wd : null;
        if (Fd.playerCanChangePos(dd.YV, Xd[0], Xd[1], Xd[2])) return null;
        const Kd = (dd, Od, md) => {
          const Wd = Fd.blockDataOwner.getBlockData(dd, Od, md),
            Rd = null === Wd || void 0 === Wd ? void 0 : Wd.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return rd.singleLineBoardActions.has(Rd)
        };
        if (Kd(Xd[0], Xd[1], Xd[2])) return null;
        let hd;
        dd.Omd && (hd = [...dd.Omd], dd.E_(hd, hd));
        const vd = (hd ? dd.camera.rM : 0) + Fd.getBlockReach(dd.YV);
        return dd.pickBlock(hd, dd.mmd, vd, ((Od, md, Wd, Rd) => 0 !== Od && ("Board" !== Fd.getMetaInfo(Od).rootName || Fd.playerCanChangePos(dd.YV, md, Wd, Rd) || Kd(md, Wd, Rd))))
      }(Qd, Qd.nOd)) && void 0 !== Od ? Od : Qd.nOd;
      const od = null !== (md = null === (Fd = Qd.nOd) || void 0 === Fd ? void 0 : Fd.position) && void 0 !== md ? md : null,
        Nd = null !== (Rd = Qd.mmd) && void 0 !== Rd ? Rd : Qd.camera.B_(),
        Hd = Sd.g.localPlayerPickActionHelper.getPickEntityResult(Nd),
        bd = null !== (Xd = Qd.nOd) && void 0 !== Xd && Xd.K9 ? (0, zd.g)(Qd.nOd.K9) : "Air",
        Td = dd === qd.b.UpFirePrimary || dd === qd.b.UpFireSecondary,
        pd = Td ? "onPlayerClickUp" : "onPlayerClick",
        Yd = Td ? dd === qd.b.UpFireSecondary : dd === qd.b.DownFireSecondary,
        gd = !Td && (0, Wd.getWasDoubleClick)();
      yd.j.lQ("mouseState", {
        lK: dd,
        isDown: !Td
      }), (0, Wd.sendColyMessage)(td.eh, {
        lK: dd,
        CK: gd,
        BX: od,
        SX: Hd
      }, !0), (0, Sd.b)().client.triggerGameCallback(pd, Qd.YV, Yd, null !== (Kd = null === od || void 0 === od ? void 0 : od[0]) && void 0 !== Kd ? Kd : null, null !== (hd = null === od || void 0 === od ? void 0 : od[1]) && void 0 !== hd ? hd : null, null !== (vd = null === od || void 0 === od ? void 0 : od[2]) && void 0 !== vd ? vd : null, bd, Hd)
    }
    window.addEventListener("keydown", (dd => {
      ["ArrowUp", "ArrowDown"].includes(dd.key) && dd.preventDefault()
    })), document.addEventListener("keydown", (dd => {
      (0, Ld.d)(dd, (() => {
        const dd = (0, Sd.c)();
        return (0, nd.O)(dd) || !1 !== dd.EY.canCustomiseChar
      }))
    }))
  },
  40659: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      e: () => Xd
    });
    var Wd = md(39966);
    let Fd = !1;

    function Rd() {
      return Fd
    }

    function Xd(dd) {
      Fd = dd, dd ? Wd.g.setMultiplierType("emoteWheel", 0) : Wd.g.removeMultiplier("emoteWheel")
    }
  },
  40672: (dd, Od, md) => {
    function Wd(dd) {
      return Boolean(dd.EY.useInventory && dd.EY.useFullInventory && dd.qE.Imd(dd.YV))
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  40553: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => Fd
    });
    var Wd = md(38673);

    function Fd(dd, Od) {
      return {
        replayedClipName: dd,
        replayedClipAgeSeconds: Od
      }
    }

    function Rd(dd, Od, md, Fd, Rd) {
      const Xd = function(dd) {
          if ("object" !== typeof dd || null === dd) return null;
          const {
            replayedClipName: Od,
            replayedClipAgeSeconds: md
          } = dd;
          return "string" === typeof Od && "number" === typeof md ? {
            Tm: Od,
            pm: md
          } : null
        }(md),
        Kd = null === Xd ? md : null,
        {
          Tm: hd = null,
          pm: vd = 0
        } = null !== Xd && void 0 !== Xd ? Xd : {};
      dd.animateEntity(Od, Wd.c.Custom, Kd, Fd, Rd, hd, vd)
    }
  },
  40666: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd
    });
    var Wd = md(39919),
      Fd = md(405),
      Rd = md(2402);

    function Xd() {
      var dd, Od, md, Wd;
      const Xd = (0, Rd.c)(),
        Kd = null !== (dd = null === (Od = Xd.qE.zmd(Xd.YV)) || void 0 === Od ? void 0 : Od.selectedItem) && void 0 !== dd ? dd : null,
        hd = Kd ? (0, Rd.b)().getItemStat(Xd.YV, Kd.name, "attackCooldownMs") : null,
        vd = (0, Fd.ad)(hd, null === Kd || void 0 === Kd || null === (md = Kd.attributes.customAttributes) || void 0 === md || null === (Wd = md.enchantments) || void 0 === Wd ? void 0 : Wd["Attack Speed"]);
      return Math.max(56, Math.ceil((vd + 30) / 3))
    }
    class Kd {
      constructor(dd, Od) {
        this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [dd], this.dueMs = dd, this.intervalMs = Od
      }
      spacedBy(dd, Od) {
        if (dd === this.intervalMs) return this;
        const md = this.tries[this.tries.length - 1],
          Wd = new Kd(md, dd);
        return Wd.dueMs = Math.max(md, Od - dd), Wd
      }
      nextDueMs() {
        const dd = this.tries[this.tries.length - 1];
        return Math.max(dd + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
      }
      noteTry(dd, Od) {
        this.tries.push(dd), this.tries.length > 3 && this.tries.shift(), this.dueMs = Od
      }
    }
    var hd = md(40659),
      vd = md(1349);
    class Qd {
      constructor() {
        this.timer = null, this.tries = new Kd(0, 0), this.check = () => {
          const dd = Date.now(),
            Od = this.tries.spacedBy(Xd(), dd),
            md = Od.nextDueMs();
          if (dd < md) this.schedule();
          else {
            if (Od.noteTry(dd, md), this.tries = Od, (0, vd.y)() && !(0, hd.c)()) {
              var Fd, Kd;
              (0, Wd.g)();
              const dd = (0, Rd.c)();
              null === (Fd = dd.qE.oWd(dd.YV)) || void 0 === Fd || null === (Kd = Fd.WE) || void 0 === Kd || Kd.repeatAttack()
            }
            this.schedule()
          }
        }
      }
      start() {
        var dd;
        null === (dd = Qd.running) || void 0 === dd || dd.stop(), Qd.running = this, this.tries = new Kd(Date.now(), Xd()), this.schedule()
      }
      static stopRunning() {
        var dd;
        null === (dd = Qd.running) || void 0 === dd || dd.stop()
      }
      stop() {
        clearTimeout(this.timer), this.timer = null, Qd.running === this && (Qd.running = null)
      }
      schedule() {
        const dd = Date.now(),
          Od = this.tries.spacedBy(Xd(), dd).nextDueMs() - dd;
        this.timer = setTimeout(this.check, Math.min(Od, 100))
      }
    }
    Qd.running = null
  },
  40559: (dd, Od, md) => {
    md.d(Od, {
      e: () => qd,
      f: () => Qd,
      g: () => Nd,
      i: () => od,
      m: () => Hd,
      q: () => td
    });
    var Wd = md(40565),
      Fd = md(38702),
      Rd = md(2386),
      Xd = md(2094),
      Kd = md(32),
      hd = md(2402);
    const vd = new Wd.e;

    function Qd() {
      return vd
    }

    function td() {
      vd.clear()
    }

    function od() {
      for (const dd of vd.ids()) {
        const Od = vd.getName(dd);
        void 0 !== Od && Xd.c.delete(Od)
      }
      td(), Kd.j.lQ("playerRosterChanged", vd.ids())
    }

    function Nd(dd, Od) {
      var md, Wd;
      if (vd.has(dd)) return vd.getSetting(dd, Od);
      const Fd = (0, hd.c)();
      return null === (md = Fd.sG[Fd.YV]) || void 0 === md || null === (Wd = md[dd]) || void 0 === Wd ? void 0 : Wd[Od]
    }

    function qd(dd) {
      const {
        added: Od,
        removed: md,
        settingChanges: Wd
      } = vd.apply(dd);
      for (const {
          playerId: Fd,
          name: Rd
        }
        of md) void 0 === Rd || yd(Fd) || Xd.c.delete(Rd);
      for (const {
          playerId: Rd,
          settings: Xd
        }
        of Wd)
        if (yd(Rd)) Hd(Rd, Xd);
        else
          for (const dd in Xd)(0, Fd.n)(Rd, dd, Xd[dd]);
      (Od.length > 0 || md.length > 0) && Kd.j.lQ("playerRosterChanged", vd.ids())
    }

    function Hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vd.getSettings(dd);
      if (Od) {
        (0, Fd.h)(dd);
        for (const md in Od)(0, Fd.e)(dd, md, Od[md])
      }
    }

    function yd(dd) {
      return dd === (0, hd.c)().bV || (0, hd.b)().client.hasEntity(dd)
    }(0, Rd.onGameReset)(td)
  },
  39639: (dd, Od, md) => {
    md.d(Od, {
      b: () => xd,
      e: () => wd,
      i: () => Jd,
      m: () => Ud,
      q: () => Bd
    });
    var Wd = md(38627),
      Fd = md(39642),
      Rd = md(415),
      Xd = md.n(Rd),
      Kd = md(4624);
    const hd = new Wd.Cq,
      vd = new Wd.Cq,
      Qd = new Wd.Cq,
      td = new Wd.Cq,
      od = new Wd.Cq,
      Nd = [0, 0, 0],
      qd = {
        x: 0,
        y: 0
      },
      Hd = new Wd.Cq(1, 0, 0),
      yd = new Wd.Cq(0, 1, 0),
      bd = Wd.Matrix.Identity(),
      Td = new Wd.Matrix,
      pd = new Wd.Matrix,
      Yd = new Wd.Cq,
      gd = new Fd.b(0, 0, 0, 0);

    function wd(dd, Od) {
      var md, Fd;
      const Rd = Ed(dd, Od);
      if (Rd) {
        const dd = Rd.x,
          Od = Rd.y,
          md = dd - 50,
          Wd = Od - 50;
        return Math.abs(md) <= Kd.b && Math.abs(Wd) <= (0, Kd.m)() ? {
          x: dd,
          y: Od
        } : sd(md, Wd)
      }
      Qd.KOd(Od[0], Od[1], Od[2]),
        function(dd) {
          const Od = dd.gt.OFd(),
            md = Od ? Wd.Matrix.FromArrayToRef(Od.worldMatrix, 0, pd) : dd.gt.zV().activeCamera.getWorldMatrix();
          Wd.Cq.TransformNormalToRef(Hd, md, td), td.normalize(), Wd.Cq.TransformNormalToRef(yd, md, od), od.normalize()
        }(dd);
      const Xd = Wd.Cq.Dot(Qd, td);
      let hd = -Wd.Cq.Dot(Qd, od);
      Math.abs(Xd) < .001 && Math.abs(hd) < .001 && (hd = -1);
      const vd = null !== (md = null === (Fd = dd.gt.OFd()) || void 0 === Fd ? void 0 : Fd.projectionMatrix) && void 0 !== md ? md : dd.gt.zV().activeCamera.getProjectionMatrix().m;
      return sd(Xd * vd[0], hd * vd[5])
    }

    function Ed(dd, Od) {
      const md = dd.gt.zV(),
        Fd = md.Iq(),
        Rd = Fd.getRenderWidth(),
        Xd = Fd.getRenderHeight();
      gd.width = Rd, gd.height = Xd;
      const Kd = dd.gt.OFd(),
        Qd = Kd ? Yd.KOd(Kd.eye[0], Kd.eye[1], Kd.eye[2]) : dd.gt.camera.globalPosition;
      hd.KOd(Qd.x + 10 * Od[0], Qd.y + 10 * Od[1], Qd.z + 10 * Od[2]);
      const td = Kd ? Wd.Matrix.FromArrayToRef(Kd.viewProjectionMatrix, 0, Td) : md.getTransformMatrix();
      return Wd.Cq.ProjectToRef(hd, bd, td, gd, vd), vd.z < 0 || vd.z > 1 ? null : (qd.x = vd.x / Rd * 100, qd.y = vd.y / Xd * 100, qd)
    }

    function Jd(dd, Od) {
      return wd(dd, Sd(dd, Od))
    }

    function Ud(dd, Od) {
      const md = Ed(dd, Sd(dd, Od));
      return md && {
        x: md.x,
        y: md.y
      }
    }

    function xd(dd) {
      var Od, md;
      return 1 / (null !== (Od = null === (md = dd.gt.OFd()) || void 0 === md ? void 0 : md.projectionMatrix[0]) && void 0 !== Od ? Od : dd.gt.zV().activeCamera.getProjectionMatrix().m[0])
    }

    function Bd(dd, Od, md) {
      const Wd = dd.gt.OFd(),
        Fd = Wd ? Wd.worldMatrix : dd.gt.zV().activeCamera.getWorldMatrix().m,
        Rd = dd.XN;
      for (let Xd = 0; Xd < 3; Xd++) Od[Xd] = Fd[12 + Xd] + Rd[Xd], md[Xd] = Fd[8 + Xd];
      Xd().normalize(md, md)
    }

    function Sd(dd, Od) {
      const md = dd.XN,
        Wd = dd.gt.OFd(),
        Fd = Wd ? Yd.KOd(Wd.eye[0], Wd.eye[1], Wd.eye[2]) : dd.gt.camera.globalPosition;
      return Nd[0] = Od[0] - md[0] - Fd.x, Nd[1] = Od[1] - md[1] - Fd.y, Nd[2] = Od[2] - md[2] - Fd.z, Xd().normalize(Nd, Nd), Nd
    }

    function sd(dd, Od) {
      return (0, Kd.f)(dd, Od, Kd.b, (0, Kd.m)())
    }
  },
  40603: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd
    });
    var Wd = md(32),
      Fd = md(1349),
      Rd = md(2482);
    const Xd = "Reconnecting";
    class Kd {
      constructor(dd) {
        this.hooks = dd, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = dd => {
          dd.persisted || this.leave()
        }, this.controller = new Rd.g((Od => dd.reconnect(Od)), {
          isSessionLive: () => !this.ended && dd.isLive(),
          onPhaseChanged: dd => {
            this.onPhaseChanged(dd)
          },
          onReconnected: Od => {
            dd.onReconnected(Od)
          },
          onGaveUp: Od => {
            !this.ended && dd.isLive() && dd.onGaveUp(this.sessionBased, Od)
          }
        })
      }
      onInitialInfo(dd, Od) {
        this.graceMs = dd, this.sessionBased = Od
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(dd) {
        this.ended || this.controller.onConnectionLost(dd, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const dd = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Od = this.controller.heldToken;
        this.end(), dd && "" !== Od && this.hooks.releaseSeat(Od)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(dd) {
        const Od = (0, Rd.v)(dd);
        Od !== this.stopped && (this.stopped = Od, this.hooks.freeze(Od));
        const md = "frozen" === dd || "resuming" === dd && this.frozen;
        md && !this.frozen ? (0, Fd.v)(Xd, {
          overridesPause: !0
        }) : !md && this.frozen && (0, Fd.u)(Xd), this.frozen = md, this.setListening("connected" !== dd), Wd.j.lQ(Rd.r, md ? "frozen" : dd)
      }
      setListening(dd) {
        dd !== this.listening && (this.listening = dd, dd ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40611: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    class Wd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = dd, this.now = Od, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const dd = this.now(),
            Od = dd - this.lastCheckAt <= 2e3;
          this.lastCheckAt = dd;
          const md = "visible" === document.visibilityState;
          !md || Od && this.wasVisible || (this.resumedAt = dd), this.wasVisible = md, md && dd - this.lastHeardAt > 12e3 && dd - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Od(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  40544: (dd, Od, md) => {
    md.d(Od, {
      c: () => od
    });
    var Wd = md(218),
      Fd = md(415),
      Rd = md.n(Fd),
      Xd = md(37939),
      Kd = md(37942),
      hd = md(2402);
    const vd = Wd.i.yb * Wd.i.playerEyeToHeightRatio,
      Qd = 250,
      td = 1.1,
      od = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(dd, Od) {
          this.entities.set(dd, Od)
        }
        update(dd, Od) {
          const md = this.entities.get(dd);
          this.entities.set(dd, Od);
          const Wd = this.playing.get(dd);
          Wd && (md && md.soundName === Od.soundName ? (Wd.sound.setRelativeVolume(Od.volume), Wd.sound.rate(Od.rate), Wd.sound.setPannerAttr({
            refDistance: Od.refDistance
          })) : this.stopEntity(dd))
        }
        remove(dd) {
          this.stopEntity(dd), this.entities.delete(dd)
        }
        Et(dd) {
          this.msSinceLastScan += dd, this.msSinceLastScan < Qd || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(dd) {
          const Od = this.playing.get(dd);
          Od && (Od.sound.stop(), this.playing.delete(dd))
        }
        startEntity(dd, Od, md) {
          const Wd = (0, Kd.f)(Od.soundName);
          if (!Wd) return console.error(`AudioEntityManager: no sound found for "${Od.soundName}", dropping audio entity ${dd}`), void this.remove(dd);
          const Fd = Xd.d.play(Wd, Od.volume, md, Od.maxHearDist, Od.refDistance, !0);
          Fd.rate(Od.rate), this.playing.set(dd, {
            sound: Fd,
            lastPos: Rd().clone(md)
          })
        }
        scan() {
          const dd = (0, hd.c)();
          if (!dd) return;
          const Od = dd.qE.hY(dd.YV);
          if (Od)
            for (const [md, Wd] of this.entities) {
              if (!dd.qE.MOd(md, "position")) continue;
              const Fd = dd.qE.hY(md),
                Xd = Rd().sqrDist(Od, Fd),
                Kd = this.playing.get(md);
              if (Kd) {
                const dd = Wd.maxHearDist * td;
                Xd > dd * dd ? this.stopEntity(md) : Rd().equals(Fd, Kd.lastPos) || (Kd.sound.setPosition([Fd[0], Fd[1] + vd, Fd[2]]), Rd().copy(Kd.lastPos, Fd))
              } else Xd <= Wd.maxHearDist * Wd.maxHearDist && this.startEntity(md, Wd, Fd)
            }
        }
      }
  },
  40627: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd,
      g: () => Qd
    });
    var Wd = md(1856),
      Fd = md(218),
      Rd = md(1822),
      Xd = md(1941),
      Kd = md(1253),
      hd = md(1189);
    async function vd(dd, Od) {
      return function(dd) {
        return "object" === typeof dd && null !== dd && dd.code === Fd.e.VpnIp.code
      }(Od) && function(dd) {
        return Rd.c.supports("appCheck") && dd.isLoggedIn() && !dd.hasTriedAppAttestation()
      }(dd) && await async function(dd) {
        try {
          const {
            token: Od
          } = await (0, Xd.c)(), {
            "3PSIDMCPP": md
          } = await (0, hd.postJsonWithMetricsCookiesAndJsonResponse)(`${Kd.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Od
          }, {
            retries: 0
          }, dd.getMetricsCookies());
          return dd.setAppAttestedAuthJwt(md), !0
        } catch (Od) {
          return Od instanceof Wd.c && "failed" === Od.code ? (console.warn("The app couldn't get an App Check token:", Od), dd.markAppAttestationTried()) : console.error("Failed to attest the app:", Od), !1
        }
      }(dd)
    }
    async function Qd(dd, Od) {
      try {
        return await Od()
      } catch (md) {
        if (!await vd(dd, md)) throw md
      }
      return Od()
    }
  },
  40620: (dd, Od, md) => {
    md.d(Od, {
      b: () => od,
      e: () => Qd
    });
    var Wd = md(218),
      Fd = md(1965),
      Rd = md(1268),
      Xd = md(10092);
    const Kd = [250, 500, 1e3, 2e3, 1250],
      hd = 406;

    function vd(dd) {
      if ("object" !== typeof dd || null === dd) return !1;
      const {
        code: Od,
        message: md
      } = dd, Fd = Wd.e.duplicateLobbyNameError;
      return (Od === Fd.code || Od === hd) && (md === Fd.text || md === Fd.text + Wd.m)
    }
    async function Qd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fd.c;
      for (let Fd = 0;; Fd++) {
        let Xd;
        (0, Rd.p)(Od);
        try {
          return await dd()
        } catch (Wd) {
          if (Xd = Kd[Fd], void 0 === Xd || !vd(Wd)) throw Wd
        }
        await md(Xd, Od)
      }
    }
    const td = new Set([Wd.e.duplicateLobbyNameError.code, Wd.e.lobbyCantBeCreated.code, Wd.e.roomDisposedEarlyError.code, Wd.e.roomDisposedLateError.code, Wd.e.serverRoomLimitReached.code]);

    function od(dd) {
      if (vd(dd)) return !0;
      const Od = (0, Xd.f)(dd);
      return "number" === typeof Od && td.has(Od)
    }
  },
  40592: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      f: () => Fd
    });
    var Wd = md(32);

    function Fd(dd) {
      return "refetchCode" === dd || "devDownloadJson" === dd || dd.startsWith("Plugin")
    }

    function Rd(dd, Od) {
      "refetchCode" !== dd ? "Plugin|MobAiPlugin|ShowPetUi" !== dd ? Promise.all([md.e(128), md.e(129), md.e(118), md.e(120), md.e(248)]).then((() => md(54153))).then((md => {
        let {
          runClientGameMessage: Wd
        } = md;
        Wd(dd, Od)
      })).catch((Od => {
        console.error(`Game message ${dd} failed`, Od)
      })) : Wd.j.lQ("showPetUi", Od) : Wd.j.lQ("refetchCode")
    }
  },
  40634: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd
    });
    var Wd = md(10092),
      Fd = md(38109),
      Rd = md(40638);
    const Xd = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      Kd = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function hd(dd, Od) {
      if (dd instanceof Fd.i) return {
        at: Xd[Od],
        code: 0
      };
      const md = (0, Wd.f)(dd),
        hd = "number" === typeof md ? md : 0;
      return null !== (0, Rd.f)(hd).name ? {
        at: "refused",
        code: hd
      } : {
        at: Kd[Od],
        code: hd
      }
    }
  },
  10092: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => Xd,
      h: () => Kd,
      i: () => vd,
      j: () => hd
    });
    var Wd = md(218),
      Fd = md(5294);

    function Rd(dd) {
      return Xd(dd) === Wd.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xd(dd) {
      return "object" === typeof dd && null !== dd ? dd.code : void 0
    }

    function Kd(dd) {
      var Od;
      return null !== (Od = Object.keys(Fd.e).find((Od => Fd.e[Od] === dd))) && void 0 !== Od ? Od : null
    }

    function hd(dd) {
      return "notWhitelisted" === dd ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const vd = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10081: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      h: () => hd
    });
    var Wd = md(405);

    function Fd(dd) {
      if (!dd.startsWith("{")) return dd;
      let Od;
      try {
        Od = JSON.parse(dd)
      } catch {
        return dd
      }
      return function(dd) {
        if (null === (0, Wd.Ce)(dd)) return !1;
        const {
          params: Od
        } = dd;
        return void 0 === Od || "object" === typeof Od && null !== Od && Object.values(Od).every((dd => "string" === typeof dd))
      }(Od) ? Od : dd
    }
    var Rd = md(1238),
      Xd = md(1306);

    function Kd(dd) {
      return (0, Rd.B)(Xd.f.get().getCurrentLanguageCode(), dd.translationKey, dd.params)
    }

    function hd(dd) {
      const Od = Fd(dd);
      return "string" === typeof Od ? Od : Kd(Od)
    }

    function vd(dd) {
      const Od = Fd(dd);
      return "string" === typeof Od ? Od : Kd({
        translationKey: "moderation:kicked",
        params: {
          reason: Kd(Od)
        }
      })
    }
  },
  40575: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd
    });
    var Wd = md(1286),
      Fd = md(1424),
      Rd = md(29),
      Xd = md(1406),
      Kd = md(1415),
      hd = md(1641),
      vd = md(38082);

    function Qd(dd) {
      let {
        vR: Od,
        QR: md
      } = dd;
      const Qd = null !== Od && void 0 !== Od ? Od : (0, Kd.b)().gameNameWithVariation;
      (0, Wd.H)(Qd) && ((0, vd.i)(), (0, Xd.nb)((() => {
        console.log("Received matchmaking order from game server to game", Od), (0, Rd.l)("inGameReplay"), (0, hd.navigatePreserveSearch)((0, Fd.c)(Qd, null !== md && void 0 !== md ? md : void 0))
      }), "video_start"))
    }
  },
  40573: (dd, Od, md) => {
    md.d(Od, {
      e: () => Qd,
      i: () => hd,
      m: () => vd,
      o: () => td
    });
    var Wd = md(2092),
      Fd = md(32),
      Rd = md(1462),
      Xd = md(1315);
    const Kd = new Map;

    function hd(dd, Od) {
      Fd.j.lQ("newUiRequest", {
        id: dd,
        clientParameters: Od
      }, !0)
    }

    function vd(dd) {
      Fd.j.lQ("removeUiRequest", dd, !0);
      const Od = Kd.get(dd);
      Od && (Od.tearDownNotification(), Kd.delete(dd))
    }

    function Qd() {
      Fd.j.lQ("clearUiRequests");
      for (const dd of Kd.values()) dd.tearDownNotification();
      Kd.clear()
    }

    function td(dd, Od, md, Fd) {
      const hd = "string" === typeof Od ? {
          translationKey: Od
        } : Od,
        vd = Rd.NotificationProvider.showPromptPopup({
          title: hd.translationKey,
          textOpts: {
            title: (0, Xd.g)(hd.params, Wd.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: md,
          unlockPointerKey: "uiRequestPopup"
        });
      Kd.set(dd, vd), vd.getResult().then((Od => {
        Kd.delete(dd), "notificationTornDown" !== Od && Fd(Od)
      }))
    }
  },
  40650: (dd, Od, md) => {
    md.d(Od, {
      c: () => Nd,
      e: () => od
    });
    const Wd = "ue:",
      Fd = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      Rd = "[A-Za-z0-9]{1,24}",
      Xd = 15,
      Kd = new RegExp(`^${Rd}$`);
    new RegExp(`^${Wd}(${[...Fd,"other"].join("|")}):(?:n|k(${Rd})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function hd(dd, Od, md, Rd, hd) {
      const vd = "string" === typeof dd && Fd.includes(dd) ? dd : "other";
      let Qd = "n";
      return "string" === typeof Od ? Qd = Kd.test(Od) ? `k${Od}` : "n" : "number" === typeof md && Number.isInteger(md) && md >= 0 && md <= Xd && (Qd = `b${md}`), `${Wd}${vd}:${Qd}:${Rd?1:0}${hd?1:0}`
    }
    var vd = md(1798),
      Qd = md(1893);
    let td = null;

    function od(dd) {
      const Od = dd instanceof Element && dd !== document.body && dd !== document.documentElement && !(0, vd.p)(dd) && !dd.closest("#root");
      return {
        editable: (0, Qd.c)(dd),
        outsideView: Od
      }
    }

    function Nd(dd) {
      return td ??= function(dd) {
        try {
          const {
            editable: Od,
            outsideView: md
          } = od(dd.target), Wd = dd;
          return hd(dd.type, Wd.code, Wd.button, Od, md)
        } catch {
          return hd(null, null, null, !1, !1)
        }
      }(dd), td
    }
  },
  40638: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      f: () => hd,
      i: () => Xd,
      m: () => Fd
    });
    var Wd = md(218);

    function Fd(dd) {
      const Od = dd.endsWith(Wd.m);
      return {
        text: (Od ? dd.slice(0, -Wd.m.length) : dd) || null,
        dropsCache: Od
      }
    }
    const Rd = "Either your internet isn't working or this is a bug.";

    function Xd(dd, Od) {
      const md = hd(dd);
      return null !== md.name && "" === Wd.e[md.name].text && null !== Od ? Od : md.reason
    }
    const Kd = "You were removed from the game.";

    function hd(dd) {
      var Od;
      let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Fd = null !== (Od = Object.keys(Wd.e).find((Od => Wd.e[Od].code === dd))) && void 0 !== Od ? Od : null;
      if (null === Fd) return {
        code: dd,
        name: Fd,
        reason: null !== md && void 0 !== md ? md : `${Rd}\nCode: ${dd}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Xd,
        canReconnect: hd = !1
      } = Wd.e[Fd], vd = dd === Wd.e.outdatedVersion.code || dd === Wd.e.loadRecaptchaError.code;
      return {
        code: dd,
        name: Fd,
        reason: "" !== Xd ? Xd : null !== md && void 0 !== md ? md : dd === Wd.e.gameOrPluginKick.code ? Kd : `Code: ${dd}`,
        canReconnect: hd,
        automaticallyReconnect: dd === Wd.e.customGameUpdated.code || dd === Wd.e.duplicateLobbyNameError.code,
        requiresRefresh: vd
      }
    }
  },
  40565: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      constructor() {
        this.members = new Map
      }
      apply(dd) {
        const Od = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Wd of dd.EF) {
          let dd = this.members.get(Wd.JF);
          if (dd || (dd = {
              name: null,
              settings: {}
            }, this.members.set(Wd.JF, dd), Od.added.push(Wd.JF)), null !== Wd.UF && (dd.name = Wd.UF), null !== Wd.xF || Wd.BF.length > 0) {
            const md = null === Wd.xF ? {} : JSON.parse(Wd.xF);
            Object.assign(dd.settings, md);
            for (const Od of Wd.BF) delete dd.settings[Od], md[Od] = void 0;
            Od.settingChanges.push({
              playerId: Wd.JF,
              settings: md
            })
          }
        }
        for (const Wd of dd.SF) {
          const dd = this.members.get(Wd);
          var md;
          if (dd) this.members.delete(Wd), Od.removed.push({
            playerId: Wd,
            name: null !== (md = dd.name) && void 0 !== md ? md : void 0
          })
        }
        return Od
      }
      has(dd) {
        return this.members.has(dd)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(dd) {
        var Od, md;
        return null !== (Od = null === (md = this.members.get(dd)) || void 0 === md ? void 0 : md.name) && void 0 !== Od ? Od : void 0
      }
      getSettings(dd) {
        var Od;
        return null === (Od = this.members.get(dd)) || void 0 === Od ? void 0 : Od.settings
      }
      getSetting(dd, Od) {
        var md;
        return null === (md = this.members.get(dd)) || void 0 === md ? void 0 : md.settings[Od]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  40596: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      d: () => Fd
    });
    const Wd = ["description", "label"];

    function Fd(dd) {
      const Od = dd.type;
      return {
        type: Od,
        params: dd[Od]
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);