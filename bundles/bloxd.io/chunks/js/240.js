export const id = 240;
export const ids = [240];
export const modules = {
  38676: (kk, ek, ik) => {
    function Dk(kk) {
      return !(!kk.lobbyLeaderboardInfo && !kk.lobbyManage)
    }
    ik.d(ek, {
      c: () => Dk
    })
  },
  38601: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(26),
      fk = ik(1911);

    function Sk(kk) {
      let {
        taskId: ek,
        progress: ik
      } = kk;
      const Dk = fk.c.get("_tasks");
      null !== Dk && void 0 !== Dk && Dk[ek] && fk.c.apply({
        _tasks: {
          ...Dk,
          [ek]: {
            ...Dk[ek],
            progress: ik
          }
        }
      })
    }
    Dk.j.subscribe("clientTaskProgress", (kk => {
      Sk(kk)
    }))
  },
  38542: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => ki,
      e: () => Re,
      f: () => Je
    });
    var Dk = ik(3642),
      fk = ik(165),
      Sk = ik(189),
      bk = ik(600),
      rk = ik(38),
      Pk = ik(2704),
      mk = ik(3693),
      Mk = ik(3684),
      Kk = ik(1207);
    const xk = new WeakMap;
    class nk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          GPk: !0
        };
        this.callbacks = ek, this.options = ik, this.rik = void 0, this.sessionId = void 0, this.mV = [], this.NPk = !1, this.aU = !1, this.RPk = void 0, this.rV = 0, this.Dfk = 0, this.JPk = (kk, ek) => {
          if (this.aU) return;
          const ik = Number(kk);
          this.NPk ? this.kmk(ik, ek) : this.mV.push({
            id: ik,
            payload: ek
          })
        }, this.dispose = () => {
          this.aU || (this.aU = !0, xk.delete(this), this.mV.length = 0, this.RPk())
        }, this.rik = kk, this.sessionId = kk.sessionId, xk.set(this, []), this.RPk = this.emk()
      }
      imk(kk) {
        this.RPk(), this.rik = kk, this.sessionId = kk.sessionId, this.rV = 0, this.Dfk = 0, this.RPk = this.emk()
      }
      get fV() {
        return this.Dfk
      }
      emk() {
        const kk = this.rik.Gy("*", this.JPk);
        return this.options.GPk && this.rik.kY(this.dispose), kk
      }
      kmk(kk, ek) {
        try {
          (0, mk.nc)(kk) && (ek = (0, mk.e)(kk, Mk.hU.from(ek)));
          const ik = xk.get(this)[kk];
          if ("function" !== typeof ik) {
            if (this.callbacks.Dmk) return void this.callbacks.Dmk(kk, ek);
            throw new Error(`No onMessage handler registered for message id ${kk}`)
          }
          ik(ek)
        } catch (ik) {
          this.callbacks.fmk(`Error in onMessage ${kk} with payload ${JSON.stringify(ek)}`, ik)
        } finally {
          this.rV++
        }
      }
      Smk() {
        for (const {
            id: kk,
            payload: ek
          }
          of this.mV) {
          if (this.aU) break;
          this.kmk(kk, ek)
        }
        this.mV.length = 0
      }
      RL() {
        return this.aU
      }
      bmk() {
        if (this.NPk || this.aU) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          Gy: (kk, ek) => {
            if (this.NPk || this.aU) throw new Error("Trying to call onMessage after registration finished");
            this.Gy(kk, ek)
          },
          finishRegistration: () => {
            if (this.aU) throw new Error("Cannot finish message registration after disposal");
            this.NPk = !0, this.Smk()
          }
        }
      }
      Gy(kk, ek) {
        var ik, Dk;
        null === (ik = (Dk = this.callbacks).rmk) || void 0 === ik || ik.call(Dk);
        const fk = xk.get(this);
        for (; kk > fk.length;) fk[fk.length] = null;
        fk[kk] = ek
      }
      send(kk, ek) {
        this.Pmk(), (0, Kk.C)(ek) ? this.rik.lV(kk, ek) : this.rik.send(kk, ek)
      }
      Pmk() {
        var kk, ek;
        (this.Dfk++, 5 === Uk++) && (null === (kk = (ek = this.callbacks).rmk) || void 0 === kk || kk.call(ek), Uk = 0)
      }
      Gl() {
        this.dispose(), this.rik.Gl()
      }
      leave() {
        this.dispose(), this.rik.leave()
      }
    }
    let Uk = 0;
    var Hk = ik(3658);
    class wk extends nk {
      constructor(kk) {
        super(kk, {
          rmk: () => {
            (0, rk.h)(!0) && (0, Dk.Gs)()
          },
          fmk: (kk, ek) => {
            var ik;
            null === (ik = (0, Pk.e)()) || void 0 === ik || ik.BH(kk, ek)
          }
        }, {
          GPk: !1
        }), (0, Hk.c)(kk)
      }
      KV(kk, ek) {
        return !!(0, Hk.k)((0, Hk.b)(), this.rik, kk, ek) && (this.Pmk(), !0)
      }
      imk(kk) {
        this.Mmk(), super.imk(kk), (0, Hk.c)(kk)
      }
      Gl() {
        super.Gl(), this.Mmk()
      }
      Mmk() {
        this.rik.Rl.dU.lF = void 0
      }
    }
    var lk = ik(26),
      pk = ik(1911),
      yk = ik(1688),
      Yk = ik(35986),
      Lk = ik(38547),
      Ck = ik(37624),
      Ak = ik(37402),
      jk = ik(594),
      sk = ik(38e3);

    function dk(kk, ek, ik) {
      const Dk = function(kk) {
          const ek = new Int32Array(kk.length * sk.f);
          return kk.forEach(((kk, ik) => {
            const Dk = ik * sk.f;
            if (4 === kk.length) {
              const [ik, fk, Sk, bk] = kk;
              ek.set([ik, fk, Sk, ik, fk, Sk, bk], Dk)
            } else {
              const [ik, fk, Sk, bk, rk, Pk, mk] = kk;
              ek.set([ik, Sk, rk, fk, bk, Pk, mk], Dk)
            }
          })), ek
        }(ik),
        fk = (ek, ik, Dk, fk) => {
          kk.setBlockNoMulti(ek, ik, Dk, fk, !0)
        };
      kk.client.gameRecorder.isCapturing() ? (0, sk.ob)(Dk, (0, sk.kb)(Dk), fk) : kk.Lx.Ux.lC(Dk, {
        cW: fk,
        isHookId: ek => kk.blockChangeHasHooks(ek),
        watched: () => function(kk, ek, ik) {
          const Dk = [],
            fk = (kk, ek, ik) => {
              Dk.push(kk, ek, ik)
            },
            Sk = new Set;
          for (let bk = 0; bk < ik.length; bk += sk.f)
            for (let ek = (0, jk.K)(ik[bk]); ek <= (0, jk.K)(ik[bk + 3]); ek++)
              for (let Dk = (0, jk.K)(ik[bk + 1]); Dk <= (0, jk.K)(ik[bk + 4]); Dk++)
                for (let rk = (0, jk.K)(ik[bk + 2]); rk <= (0, jk.K)(ik[bk + 5]); rk++) {
                  const ik = `${ek}|${Dk}|${rk}`;
                  Sk.has(ik) || (Sk.add(ik), kk.blockDataOwner.forEachDataCell(ek, Dk, rk, fk))
                }
          return ek.forEachCell(fk), Int32Array.from(Dk)
        }(kk, ek, Dk)
      }), kk.Lx.Pkk()
    }

    function Vk(kk) {
      kk.gek = new Set, kk.Rek = new Set, kk.Gek = new Set, kk.Jek = new Set, kk.Nek = [], kk.kik = [], kk.rW = new Set, kk.Qk = [], kk.UW = []
    }
    class Fk {
      constructor(kk) {
        this.Lx = kk
      }
      register(kk) {
        const ek = this.Lx,
          ik = (0, Pk.d)();
        kk.Gy(mk.V, (kk => {
          ek.Ux.gek.add(kk), ek.Ux.Rek.delete(kk)
        })), kk.Gy(mk._, (kk => {
          ek.Ux.Rek.add(kk), ek.Ux.gek.delete(kk)
        })), kk.Gy(mk.me, (kk => {
          ek.Ux.Rek.delete(kk), ek.Ux.gek.delete(kk)
        })), kk.Gy(mk.Z, (kk => {
          ek.Ux.Gek.add(kk), ek.Ux.Jek.delete(kk)
        })), kk.Gy(mk.gb, (kk => {
          ek.Ux.Jek.add(kk), ek.Ux.Gek.delete(kk)
        })), kk.Gy(mk.ue, (kk => {
          ek.Ux.Jek.delete(kk), ek.Ux.Gek.delete(kk)
        })), kk.Gy(mk.X, (kk => {
          (0, Kk.gb)(kk, ek.Ux.kik), (0, Kk.gb)(kk, ek.Ux.Nek), ek.Ux.Nek.push(kk)
        })), kk.Gy(mk.cb, (kk => {
          (0, Kk.gb)(kk, ek.Ux.Nek), (0, Kk.gb)(kk, ek.Ux.kik), ek.Ux.kik.push(kk)
        })), kk.Gy(mk.qe, (kk => {
          (0, Kk.gb)(kk, ek.Ux.Nek), (0, Kk.gb)(kk, ek.Ux.kik)
        })), kk.Gy(mk.Uf, (kk => {
          let {
            Ek: ik,
            hk: Dk
          } = kk;
          Dk ? ek.Ux.rW.delete(ik) : ek.Ux.rW.add(ik)
        })), kk.Gy(mk.Rf, (kk => {
          let {
            Qk: Dk,
            vk: fk
          } = kk;
          ik.updateWalkThroughRect(ek.Qq, Dk, fk)
        })), (0, Dk.onGameResetOnce)((() => {
          Vk(ek.Ux)
        })), kk.Gy(mk.fc, (kk => {
          Ck.b.applyServerUpdate(kk)
        })), kk.Gy(mk.mb, (kk => {
          ik.applyServerBlocks((() => {
            ! function(kk, ek) {
              for (const {
                  CD: ik,
                  AD: Dk
                }
                of ek) {
                const ek = Ak.e[Dk];
                if (ek) {
                  const {
                    compX: Dk,
                    compY: fk,
                    compZ: Sk,
                    mainMultiblock: bk
                  } = ek;
                  kk.RV(ik[0] - Dk, ik[1] - fk, ik[2] - Sk, bk)
                }
              }
              for (const {
                  CD: ik,
                  AD: Dk,
                  jD: fk
                }
                of ek) kk.setBlockNoMulti(ik[0], ik[1], ik[2], Dk, !0), kk.blockDataOwner.setBlockData(ik[0], ik[1], ik[2], null === fk ? void 0 : JSON.parse(fk)), kk.blockAdded(ik[0], ik[1], ik[2], Dk)
            }(ik, kk)
          })), lk.j.tm("changeBlockFail", kk), ik.client.triggerGameCallback("onChangeBlockFail", kk), lk.j.tm("EditBoard", {
            pos: null
          }), lk.j.tm("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), kk.Gy(mk.Ib, (kk => {
          ik.applyServerBlocks((() => {
            dk(ik, Ck.b, kk)
          }))
        })), kk.Gy(mk.Gf, (kk => {
          let {
            DD: ek,
            fD: Dk
          } = kk;
          if (ik.qT(ek[0], ek[1], ek[2])) {
            const kk = (0, Pk.d)().Fy(ek[0], ek[1], ek[2]);
            (0, Pk.d)().updateMailboxContents(ek[0], ek[1], ek[2], kk, Dk)
          }
        })), kk.Gy(mk.Pe, (kk => {
          let {
            pos: ek,
            data: Dk
          } = kk;
          ik.blockDataOwner.setBlockData(ek[0], ek[1], ek[2], Dk), ik.blockAdded(ek[0], ek[1], ek[2], ik.Fy(ek[0], ek[1], ek[2]))
        }))
      }
    }
    var uk = ik(36752),
      qk = ik(36348),
      Ik = ik(37660),
      zk = ik(37510),
      Qk = ik(37670);
    class vk {
      constructor(kk, ek) {
        this.Lx = kk, this.setUpQueuedEntity = ek
      }
      register(kk) {
        const ek = this.Lx,
          ik = (0, Pk.d)();
        kk.Gy(mk.S, (kk => {
          let {
            zf: ek,
            Qf: ik
          } = kk;
          this.setUpQueuedEntity(ek), ek = (0, qk.b)(ek), (0, Pk.d)().client.gameRecorder.recordBulletShot(ek, ik), lk.j.tm(`bulletShot|${ek}`, {
            bulletDirections: ik
          })
        })), kk.Gy(mk.jc, (kk => {
          let {
            MS: ek,
            KS: ik
          } = kk;
          lk.j.tm("damagedByOtherPlayer", {
            MS: ek,
            direction: ik
          }, !0)
        })), kk.Gy(mk.Id, (kk => {
          lk.j.tm("playerKilled", kk, !0), (0, Pk.d)().client.gameRecorder.recordPlayerKilled(kk.deadEId, kk.killerEId, kk.withItem, kk.killstreak)
        })), kk.Gy(mk.Sb, (kk => {
          lk.j.tm("customKillfeed", kk, !0), (0, Pk.d)().client.gameRecorder.recordCustomKillfeed(kk.killer, kk.victim, kk.withItem)
        })), kk.Gy(mk.Sd, (kk => {
          let {
            kb: ik,
            eb: Dk
          } = kk;
          this.setUpQueuedEntity(ik);
          const fk = ek.mY.jek(ik);
          null !== fk && void 0 !== fk && fk.isGun() && fk.reload(Date.now(), Dk)
        })), kk.Gy(mk.Je, (kk => {
          let {
            tS: ik,
            XS: Dk
          } = kk;
          const fk = Dk ? (0, Qk.f)(ek, Dk) : void 0;
          lk.j.tm("sendHitmarker", {
            tS: ik,
            screenPos: fk
          }, !0)
        })), kk.Gy(mk.Oc, (kk => {
          let {
            Pb: Dk,
            Mb: fk,
            xb: Sk,
            nb: bk,
            Ub: rk,
            Hb: Pk,
            lb: mk
          } = kk;
          this.setUpQueuedEntity(Dk), Dk = (0, qk.b)(Dk);
          const Mk = ek.mY.lek(Dk);
          if (Mk && (Mk.lastHurtTime = performance.now()), (0, Ik.playRigHurt)(ek, Dk, Pk), lk.j.tm("lifeformHurt", {
              eId: Dk,
              lb: mk
            }), fk) {
            const kk = (0, Qk.f)(ek, fk.XS);
            lk.j.tm("yourAttackHit", {
              tS: bk,
              screenPos: kk,
              hitSelf: Dk === ek.Qq
            })
          }
          Dk === ek.Qq && (ik.shakePlayerCamera(Dk, rk / 40, 200), lk.j.tm("closeShopOnDamaged", null), lk.j.tm("damagedByOtherPlayer", {
            MS: null,
            direction: Pk,
            Ub: rk
          }, !0));
          const Kk = ek.mY.vy(Dk);
          if (Kk && (Sk || bk)) {
            const kk = [Kk[0], Kk[1] + 1, Kk[2]];
            Sk && (0, zk.k)(ek, zk.z, kk, 15), bk && (0, zk.k)(ek, zk.m, kk, 10)
          }
        })), kk.Gy(mk.Nc, (kk => {
          let {
            Yi: ik,
            Li: Dk,
            Ci: fk
          } = kk;
          (0, uk.c)(ek).setHealthFrac((0, qk.b)(ik), fk), lk.j.tm("lifeformHealthChanged", {
            eId: (0, qk.b)(ik),
            Li: Dk,
            Ci: fk
          })
        })), kk.Gy(mk.Q, (kk => {
          let {
            pb: ik,
            yb: Dk
          } = kk;
          (0, Pk.d)().playerAttacked(ek.Qq, ik, Dk)
        })), kk.Gy(mk.tb, (() => {
          const kk = ek.mY.jek(ek.Qq);
          null !== kk && void 0 !== kk && kk.isChargeable() && kk.finishCharging(!1, Date.now())
        })), kk.Gy(mk.Yb, (kk => {
          let {
            ee: ek,
            ie: ik,
            De: Dk,
            fe: fk,
            Se: Sk,
            Pe: bk
          } = kk;
          ek = (0, qk.b)(ek), (0, Pk.d)().client.updateEffect(ek, ik, {
            displayName: Dk,
            icon: fk,
            duration: Sk,
            level: bk
          })
        })), kk.Gy(mk.Td, (kk => {
          let {
            ee: ek,
            ie: ik
          } = kk;
          ek = (0, qk.b)(ek), (0, Pk.d)().client.removeEffect(ek, ik)
        })), kk.Gy(mk.Bf, (kk => {
          lk.j.tm("ttbEffectMultiplier", kk)
        }))
      }
    }
    var Ek = ik(38570),
      hk = ik(36747),
      ak = ik(4172),
      Wk = ik(37685),
      tk = ik(36335),
      Xk = ik(36341),
      Bk = ik(36673),
      ck = ik(36840),
      Tk = ik(37692),
      Zk = ik(38575);
    class Ok {
      constructor(kk, ek) {
        this.Lx = kk, this.setUpQueuedEntity = ek
      }
      register(kk) {
        const ek = this.Lx,
          ik = (0, Pk.d)();
        kk.Gy(mk.dd, (kk => {
          let {
            eId: ik,
            settings: Dk
          } = kk;
          (0, ck.d)(ik);
          for (const ek in Dk)(0, ck.b)(ik, ek, Dk[ek]);
          if ("canSee" in Dk && ek.mY.lkk(ik, "hidingMeshManager")) {
            const kk = ek.mY.getState(ik, "hidingMeshManager");
            kk.canSee = (0, Tk.e)("canSee", Dk.canSee), kk._forceUpdate = !0
          }
        })), kk.Gy(mk.J, (kk => {
          let {
            Ai: ik,
            ji: Dk,
            animationScript: fk,
            si: Sk,
            Vi: bk,
            Fi: rk,
            ui: mk
          } = kk;
          ik = (0, qk.b)(ik);
          const Mk = null === fk && null !== rk ? (0, Ek.h)(rk, mk) : fk;
          (0, Pk.d)().client.gameRecorder.recordAnimateEntity(ik, Dk, Mk, Sk, bk), (0, uk.c)(ek).animations.animateEntity(ik, Dk, fk, Sk, bk, rk, mk), null !== fk || ik === ek.Qq && Dk === hk.g.Emote && (0, Pk.d)().client.cameraController.endTemporaryThirdPerson()
        })), kk.Gy(mk.Ie, (kk => {
          (0, Zk.d)(kk)
        })), kk.Gy(mk.Fd, (kk => {
          for (const ek of kk)(0, Wk.w)(ek);
          lk.j.tm("playerCosmeticsUpdated", kk, !0)
        })), kk.Gy(mk.N, (kk => {
          for (const ik of kk)(0, Bk.f)(ek, ik)
        })), kk.Gy(mk.fd, (kk => {
          (0, zk.l)(ek, (0, Kk.q)(kk))
        })), kk.Gy(mk.hd, (kk => {
          ak.h[kk.Ve] ? (0, zk.l)(ek, {
            ...ak.h[kk.Ve],
            pos1: kk.pos1,
            pos2: kk.pos2
          }) : console.error(`Unknown preset id: ${kk.Ve}`)
        })), kk.Gy(mk.Cd, (kk => {
          var ek, ik;
          let {
            Fe: Dk,
            ue: fk,
            qe: Sk,
            Ie: bk
          } = kk, {
            Qe: rk,
            ve: mk
          } = null !== bk && void 0 !== bk ? bk : {};
          const {
            ze: Mk
          } = null !== bk && void 0 !== bk ? bk : {};
          rk = null !== (ek = rk) && void 0 !== ek ? ek : void 0, mk = null !== (ik = mk) && void 0 !== ik ? ik : void 0, "string" === typeof Mk && this.setUpQueuedEntity(Mk), (0, Pk.d)().client.gameRecorder.recordPlaySound(Dk, fk, Sk, bk), tk.b.play((0, Xk.g)(Dk), fk, Mk, rk, mk).rate(Sk)
        })), kk.Gy(mk.Jf, (kk => {
          for (const ek in kk) {
            const Dk = kk[ek];
            for (const kk in Dk) ik.client.meshCreator.handleParticleSystemUpdate(ek, kk, Dk[kk])
          }
        }))
      }
    }
    var gk = ik(37380),
      Gk = ik(37360);
    class Nk {
      constructor(kk) {
        this.Lx = kk
      }
      register(kk) {
        const ek = this.Lx,
          ik = (0, Pk.d)();

        function Dk() {
          return ek.mY.Dek(ek.Qq)
        }
        kk.Gy(mk.Ac, (kk => {
          let {
            Cf: ik,
            Af: Dk,
            jf: fk,
            sf: Sk,
            df: bk,
            Vf: rk,
            Ff: Pk,
            uf: mk,
            qf: Mk
          } = kk;
          if (!ek.mY.lkk(ik, "itemState")) return void(0, gk.l)(ek, ik, [bk, rk, Pk], Dk, {
            amount: fk,
            attributes: JSON.parse(Sk),
            uf: mk,
            size: Mk
          });
          const Kk = ek.mY.getState(ik, "itemState");
          Kk.amount = fk, Kk.uf = mk, Kk.creationTime = Date.now(), (0, Gk.setServerPosition)(ek.mY.getState(ik, "smoothToServerPos"), bk, rk, Pk)
        })), kk.Gy(mk.kb, (kk => {
          (0, uk.c)(ek).setCantPickUp(kk, !0), ek.mY.lkk(kk, "itemState") && (ek.mY.getState(kk, "itemState").uf = !0)
        })), kk.Gy(mk.ke, (kk => {
          (0, uk.c)(ek).setCantPickUp(kk, !1), ek.mY.lkk(kk, "itemState") && (ek.mY.getState(kk, "itemState").uf = !1)
        })), kk.Gy(mk.wd, (kk => {
          let {
            pickUpItems: ek,
            pickUpAckSeq: ik
          } = kk;
          for (const {
              name: fk,
              amount: Sk,
              attributes: bk
            }
            of ek) Dk().pickUpItem({
            name: fk,
            amount: Sk,
            typeObj: gk.C[fk],
            attributes: bk
          });
          (0, Pk.d)().client.inventoryPrediction.serverChangeApplied(ik)
        })), kk.Gy(mk.bf, (kk => {
          let {
            index: ik,
            name: Dk,
            amount: fk,
            attributes: Sk,
            setSlotAckSeq: bk
          } = kk;
          const rk = ek.mY.fek(ek.Qq);
          (ik < rk.playerInventory.numSlots || rk.bD || rk.inCreative) && rk.setItemSlot(ik, Dk, fk, Sk), (0, Pk.d)().client.inventoryPrediction.serverChangeApplied(bk)
        })), kk.Gy(mk.wc, (kk => {
          (0, Pk.d)().client.inventoryPrediction.acknowledge(kk)
        })), kk.Gy(mk.F, (kk => {
          let {
            fb: ek,
            Sb: ik,
            bb: Dk,
            rb: fk
          } = kk;
          (0, Pk.d)().client.itemDropPrediction.onActionItemDrops(ek, ik, Dk, fk)
        })), kk.Gy(mk.Eb, (kk => {
          Dk().clearInventory(), (0, Pk.d)().client.inventoryPrediction.serverChangeApplied(kk)
        })), kk.Gy(mk.ff, (kk => {
          lk.j.tm("setSelectedInventorySlotI", kk, !0)
        })), kk.Gy(mk.zb, (kk => {
          let {
            ne: ik,
            Ue: Dk,
            He: fk,
            le: Sk,
            pe: bk,
            ye: rk,
            Ye: mk,
            Le: Mk
          } = kk;
          const Kk = ek.mY.fek(ek.Qq);
          if (rk) {
            const {
              Ae: kk,
              je: ek
            } = Mk;
            return (0, Pk.d)().client.inventoryPrediction.T6(ek, (() => {
              Kk.chestRefreshed(Dk, fk, Sk, mk, kk)
            })) && lk.j.tm("chestToggleFromServer", !1, !0), void lk.j.tm("chestRefreshedFromServer")
          }(ik || Kk.bD) && (ik ? (Kk.chestOpened(Dk, fk, Sk, bk, mk), null !== bk && (0, Pk.d)().client.ironChestPasskeyCache.onChestOpened(Sk, bk)) : Kk.chestClosed(), lk.j.tm("chestToggleFromServer", ik, !0))
        })), kk.Gy(mk.Wb, (kk => {
          let {
            craftingRecipeItemName: Dk,
            recipesForItem: fk
          } = kk;
          Dk ? ik.craftingManager.editRecipesForPlayer(ek.Qq, Dk, fk) : ik.craftingManager.resetAllPlayerRecipes(ek.Qq), lk.j.tm("craftingRecipesEdited", {
            itemName: Dk,
            recipesForItem: fk
          })
        })), kk.Gy(mk._d, (kk => {
          let {
            kD: ek,
            eD: ik,
            iD: fk
          } = kk;
          Dk().removeItemName(ek, ik), (0, Pk.d)().client.inventoryPrediction.serverChangeApplied(fk)
        })), kk.Gy(mk.Wd, (kk => {
          let {
            zk: Dk
          } = kk;
          ik.craftingManager.removeRecipes(ek.Qq, Dk), lk.j.tm("craftingRecipesEdited", {
            itemName: Dk,
            recipesForItem: []
          })
        }))
      }
    }
    var Rk = ik(6328),
      Jk = ik(37015),
      ke = ik(330),
      ee = ik.n(ke),
      ie = ik(4458),
      De = ik(37289),
      fe = ik(37845),
      Se = ik(37009);
    class be {
      constructor(kk, ek) {
        this.Lx = kk, this.setUpQueuedEntity = ek
      }
      register(kk) {
        const ek = this.Lx,
          ik = (0, Pk.d)();
        kk.Gy(mk.vf, (kk => {
          let {
            SS: ik,
            bS: fk,
            rS: Sk,
            PS: bk
          } = kk;
          const rk = [fk, Sk, bk];
          ek.mY.setPosition(ek.Qq, rk), (0, Dk.sendColyMessage)(mk.gh, {
            qb: ik,
            Ib: ie.e
          }), lk.j.tm("localPlayerTeleported", {
            pos: rk,
            isCorrection: !1
          })
        })), kk.Gy(mk.pd, (kk => {
          let {
            Jf: ek,
            kS: ik,
            eS: Dk,
            iS: fk
          } = kk;
          this.setUpQueuedEntity(ek);
          const Sk = [ik, Dk, fk];
          lk.j.tm(`otherPlayerTeleported|${ek}`, {
            pos: Sk
          })
        })), kk.Gy(mk.Md, (kk => {
          let {
            ak: ik,
            Wk: fk,
            tk: Sk,
            Xk: bk,
            Bk: rk,
            Tk: Pk,
            Zk: Mk,
            gk: Kk,
            Ok: xk,
            Rk: nk
          } = kk;
          const Uk = [fk, Sk, bk];
          ek.mY.setPosition(ek.Qq, Uk);
          const Hk = ek.mY.vkk(ek.Qq),
            wk = ek.mY.jW(ek.Qq);
          ee().set(wk.WE, 0, 0, 0), ee().set(wk.XE, 0, 0, 0), ee().set(wk.Cw, rk, Pk, Mk), wk.TE(), Hk._flying = null !== nk, nk ? (Hk.flyAccel.Jk = nk.Jk, Hk.flyAccel.ke = nk.ke) : Hk.flyAccel.reset(), Kk && Hk.movementType === Rk.l.GLIDING && (Hk.Gk = Kk.Gk, ee().copy(Hk.Nk, Kk.Nk)), (0, Dk.sendColyMessage)(mk.gh, {
            qb: ik,
            Ib: ie.e
          }), lk.j.tm("localPlayerTeleported", {
            pos: Uk,
            isCorrection: !0
          })
        })), kk.Gy(mk.if, (kk => {
          let {
            vehicleEId: ek,
            overrides: ik
          } = kk;
          (0, Pk.d)().applyRiddenVehicleSettingOverrides(ek, ik)
        })), kk.Gy(mk.Nf, (kk => {
          let {
            ZS: ik,
            OS: Dk,
            gS: fk
          } = kk;
          const Sk = ek.mY.vkk(ek.Qq).physicsState.type === Rk.o.SLEEPING && ik === Rk.o.DEFAULT;
          (0, Pk.d)().updatePositionAndPhysics(ek.Qq, {
            type: ik,
            tier: Dk
          }, !0, fk), Sk && (0, Pk.d)().updateHeldVehicleStatus()
        })), kk.Gy(mk.pb, (kk => {
          let {
            se: ik,
            de: Dk
          } = kk;
          ek.mY.eek(ek.Qq).setPose(ik, Dk)
        })), kk.Gy(mk.Te, (kk => {
          const {
            ti: ik,
            hek: Dk
          } = (0, Jk.g)([kk[0], kk[1], kk[2]]);
          Se.b.setLookDirection(ek, ik, Dk), (0, De.s)(ik, Dk);
          const fk = ek.mY.eek(ek.Qq);
          fk && (fk.heading = ik)
        })), kk.Gy(mk.Ue, (kk => {
          ik.client.cameraController.setCameraZoom(kk)
        })), kk.Gy(mk.pf, (kk => {
          let {
            ki: Dk,
            ii: fk
          } = kk;
          ik.shakePlayerCamera(ek.Qq, Dk, fk)
        })), kk.Gy(mk.Ec, (kk => {
          ek.mY.eek(ek.Qq).jumpMultiplier.setMultiplierType("jumpEffectAmount", kk)
        })), (0, Dk.onGameResetOnce)((() => {
          ek.mY.eek(ek.Qq).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), kk.Gy(mk.K, (kk => {
          ek.mY.jW(ek.Qq).applyImpulse(kk)
        })), kk.Gy(mk.mf, (kk => {
          const ik = ek.mY.jW(ek.Qq);
          ee().set(ik.WE, 0, 0, 0), ee().set(ik.XE, 0, 0, 0), ee().copy(ik.Cw, kk), ik.TE()
        })), (0, Dk.onGameResetOnce)((() => {
          (0, fe.setFloatingYValue)(ek.mY.getState(ek.Qq, "physics"), ek.mY.ZZ(ek.Qq), null)
        })), kk.Gy(mk._b, (kk => {
          let {
            BS: ik,
            cS: Dk,
            oS: fk
          } = kk;
          const Sk = (0, qk.b)(ik);
          if (Sk === ek.Qq) {
            const kk = ek.mY.ZZ(ek.Qq).position;
            fk ??= Math.floor(kk[1]) - 1, (0, fe.setFloatingYValue)(ek.mY.getState(ek.Qq, "physics"), ek.mY.ZZ(ek.Qq), Dk ? fk : null)
          }(0, uk.c)(ek).setFloating(Sk, Dk, fk);
          const bk = ek.mY.getState(Sk, "floating");
          bk && (bk.isFloating = Dk, bk.oS = Dk ? fk : null)
        }))
      }
    }

    function re(kk, ek, ik, Dk, fk) {
      let Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!kk.mY.iek(kk.Qq)) return console.log("Got resync inven but don't have inven component"), void ek.acknowledge(Dk);
      Sk && console.error("Had to sync inven"), ek.T6(Dk, fk) && ik.tm("chestToggleFromServer", !1, !0), ik.tm("syncedInvenFromServer")
    }
    var Pe = ik(38590),
      me = ik(38593),
      Me = ik(1916);
    var Ke = ik(4445);

    function xe(kk) {
      const ek = kk.Ux;
      let ik = 0,
        fk = -1,
        bk = -1 / 0,
        rk = null,
        Pk = !0;
      const Mk = () => {
        if (++ik % 10 !== 0) return;
        const Mk = (0, Dk.getLastReceivedPacketId)();
        if (Mk <= fk) return;
        const [Kk, xk, nk] = kk.mY.vy(kk.Qq), Uk = ! function(kk) {
          var ek;
          let ik = null === (ek = kk.mY.tek(kk.Qq)) || void 0 === ek ? void 0 : ek.qU;
          if (void 0 === ik) return !1;
          const Dk = new Set;
          for (; void 0 !== ik && !Dk.has(ik);) {
            var fk;
            Dk.add(ik);
            const ek = kk.mY.getState(ik, "smoothToServerPos"),
              Sk = Array.isArray(ek) ? null : null === ek || void 0 === ek ? void 0 : ek.serverPosition;
            if (Sk) {
              const ek = kk.mY.vy(ik);
              if (Math.abs(ek[0] - Sk[0]) > 10 || Math.abs(ek[1] - Sk[1]) > 10 || Math.abs(ek[2] - Sk[2]) > 10) return !0
            }
            ik = null === (fk = kk.mY.tek(ik)) || void 0 === fk ? void 0 : fk.qU
          }
          return !1
        }(kk) && function(kk, ek, ik, Dk) {
          const fk = Sk.g.oU;
          for (let Sk = 0; Sk < kk.length; Sk++) {
            const bk = kk[Sk];
            if (!(0, Ke.g)(ek, ik, Dk, bk[0] * fk, bk[1] * fk, bk[2] * fk)) return !1
          }
          return !0
        }(ek.ww.WU, Kk, xk, nk), Hk = null === rk || Math.abs(Kk - rk[0]) > 8 || Math.abs(xk - rk[1]) > 8 || Math.abs(nk - rk[2]) > 8, wk = !Pk || Hk || performance.now() - bk >= 1e4;
        Pk = Uk, Uk && wk && (fk = Mk, bk = performance.now(), rk = [Kk, xk, nk], (0, Dk.sendColyMessage)(mk.Ng, {
          Rr: Mk
        }))
      };
      return kk.on("Px", Mk), () => {
        kk.off("Px", Mk)
      }
    }
    var ne = ik(38595),
      Ue = ik(1479),
      He = ik(2700),
      we = ik(2849),
      le = ik(4716);
    class pe {
      constructor(kk, ek, ik) {
        this.Lx = kk, this.gameNameWithVariation = ek, this.connectionResume = ik, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        le.d.reset(), (0, Pe.d)()
      }
      startChunkReports() {
        const kk = function(kk) {
            let ek = null,
              ik = -1 / 0,
              fk = null;
            const Sk = () => {
                fk = null;
                const Sk = Math.ceil(kk.qV[0]),
                  bk = Math.ceil(kk.qV[1]);
                ek && ek[0] === Sk && ek[1] === bk || (ek = [Sk, bk], ik = performance.now(), (0, Dk.sendColyMessage)(mk.Mg, {
                  dP: Sk,
                  VP: bk
                }))
              },
              bk = () => {
                null === fk && (fk = setTimeout(Sk, Math.max(0, ik + 250 - performance.now())))
              };
            return Sk(), kk.on("addRemoveDistanceChanged", bk), () => {
              kk.off("addRemoveDistanceChanged", bk), null !== fk && (clearTimeout(fk), fk = null)
            }
          }(this.Lx.Ux),
          ek = xe(this.Lx);
        this.stopChunkReports = () => {
          kk(), ek()
        }
      }
      restartChunkStreaming() {
        (0, De.g)(this.Lx, (0, Pk.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - ne.b)), this.startChunkReports()
      }
      register(kk) {
        const ek = this.Lx,
          ik = (0, Pk.d)();
        kk.Gy(mk.$c, (kk => {
          pk.c.applyNewClientOptions(kk)
        })), kk.Gy(mk.yd, (kk => {
          He.d.onReceiveColyseusPing(kk)
        })), kk.Gy(mk.Ve, (kk => {
          let {
            key: ek,
            value: ik
          } = kk;
          (0, yk.setCookie)(this.gameNameWithVariation, ek, ik)
        })), kk.Gy(mk.Ze, (kk => {
          lk.j.tm("setDiscordReportKey", kk)
        })), (0, Dk.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), kk.Gy(mk.qc, (fk => {
          const {
            te: Sk,
            Xe: bk
          } = fk;
          if ((0, Dk.setAdjustment)(bk), this.connectionResume.onInitialInfo(fk.Be, fk.ce), Dk.offlineInputReplay.bV(fk.Te), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Sk);
            try {
              null === fk.oe && (0, Pk.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), Vk(ek.Ux), pk.c.apply({
                shopInfo: null,
                _shopVersion: Me.c
              });
              const ik = ek.mY.fek(ek.Qq);
              ik.bD && (ik.chestClosed(), lk.j.tm("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), lk.j.tm("initInfoReceived", kk)
            } finally {
              const kk = null === fk.oe ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = kk, this.connectionResume.onResumeInitialInfo(fk.oe, (() => {
                kk.endSeq = (0, Pk.d)().client.inventoryPrediction.lastActionSeq
              })), null === kk && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Sk), (0, De.j)(ek), lk.j.tm("loadingScreenState", "loadingPage:loadingWorld"), ek.ykk = Sk, ek.mY.lkk(ek.Qq, ek.mY.names.entityName) && ek.mY.lq(ek.Qq, ek.mY.names.entityName), (0, Pk.d)().setEntityName(ek.ykk, (0, Pk.d)().getRawEntityName(ek.Qq)), ek.zq[ek.ykk] = {}, ek.mY.wq(ek.Qq, ek.mY.names.entityName), lk.j.tm("initInfoReceived", kk), this.startChunkReports(), ik.client.onServerConnectionFinalised()
        })), kk.Gy(mk.Ge, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const kk = this.replayResume;
            if (this.replayResume = null, !kk) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: ik
            } = (0, Pk.d)().client, {
              sync: fk
            } = kk, Sk = new Set(Dk.offlineInputReplay.takeDroppedActions());
            if (fk) {
              var bk;
              const Dk = null !== (bk = kk.endSeq) && void 0 !== bk ? bk : ik.lastActionSeq;
              ik.forget((kk => kk > fk.je && kk <= Dk || Sk.has(kk))), re(ek, ik, lk.j, fk.je, fk.load)
            } else ik.dropPending(), ik.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), kk.Gy(mk.tf, (kk => {
          let {
            SD: ik,
            MD: Dk,
            je: fk
          } = kk;
          const {
            inventoryPrediction: Sk
          } = (0, Pk.d)().client, bk = () => {
            ek.mY.fek(ek.Qq).loadFromString(ik)
          };
          this.replayResume && (this.replayResume.sync = {
            je: fk,
            load: bk
          }), re(ek, Sk, lk.j, fk, bk, Dk)
        })), kk.Gy(mk.Qd, (kk => {
          let {
            type: ek,
            location1: ik,
            location2: Dk,
            location3: fk,
            score: Sk
          } = kk;
          (0, we.r)({
            type: ek,
            location1: ik,
            location2: Dk,
            location3: fk,
            score: Sk
          })
        })), kk.Gy(mk.Ce, (kk => {
          let {
            type: ek,
            resourceType: ik,
            amount: Dk,
            category: fk,
            itemName: Sk
          } = kk;
          (0, we.s)({
            type: ek,
            resourceType: ik,
            amount: Dk,
            category: fk,
            itemName: Sk
          })
        })), kk.Gy(mk.Kc, (kk => {
          let {
            leaveEventType: ek,
            category: ik,
            subCategory: Dk,
            value: fk
          } = kk;
          (0, we.C)({
            leaveEventType: ek,
            category: ik,
            subCategory: Dk,
            value: fk
          })
        })), kk.Gy(mk.Qb, (kk => {
          let {
            cat1: ek,
            cat2: ik,
            cat3: Dk,
            value: fk
          } = kk;
          (0, we.n)({
            cat1: ek,
            cat2: ik,
            cat3: Dk,
            value: fk
          })
        })), kk.Gy(mk.Fc, (kk => {
          (0, Pk.d)().client.leaveGameUnwanted({
            reason: kk,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Ue.navigatePreserveSearch)("/")
        })), kk.Gy(mk.Me, (kk => {
          lk.j.tm("serverUpdating", Date.now() + kk, !0)
        })), kk.Gy(mk._c, me.e), kk.Gy(mk.Sc, (kk => {
          console.error(`[logErrorToConsole]: ${kk}`)
        }))
      }
    }
    var ye = ik(38601),
      Ye = ik(38612),
      Le = ik(996),
      Ce = ik(38606),
      Ae = ik(38610),
      je = ik(3608);
    class se {
      constructor(kk, ek) {
        this.Lx = kk, this.clientApi = ek
      }
      register(kk) {
        const ek = this.Lx,
          ik = (0, Pk.d)();
        kk.Gy(mk.wb, (kk => {
          let {
            chatMsgId: ek,
            content: ik,
            chatterEId: Dk
          } = kk;
          lk.j.tm("chat", {
            serverChatMsgId: ek,
            content: ik,
            chatterEId: Dk
          }, !0)
        })), kk.Gy(mk.zf, (kk => {
          lk.j.tm("TopRightHelper", kk, !0)
        })), kk.Gy(mk.uf, (kk => {
          (0, ye.b)(kk)
        })), kk.Gy(mk.Hc, (kk => {
          let {
            category: ek,
            timeframe: ik,
            data: Dk
          } = kk;
          lk.j.tm("leaderboardResponse", {
            category: ek,
            timeframe: ik,
            data: Dk
          })
        })), kk.Gy(mk.rf, (() => {
          lk.j.tm("showShopTutorial", null, !0)
        })), kk.Gy(mk.Pd, (kk => {
          lk.j.tm("progressBarUpdate", kk, !0)
        })), kk.Gy(mk.tc, (kk => {
          lk.j.tm("middleScreenBarInitiate", {
            duration: kk.Ee,
            he: kk.he,
            horizBarRemOffset: kk.ae
          }, !0)
        })), kk.Gy(mk.ce, (() => {
          lk.j.tm("middleScreenBarRemove", !0)
        })), kk.Gy(mk.We, (kk => {
          let {
            id: ek,
            position: ik,
            style: Dk,
            GS: fk,
            RS: Sk
          } = kk;
          lk.j.tm("setDirectionArrow", {
            id: ek,
            position: ik,
            style: Dk,
            text: (0, mk.w)(fk),
            RS: Sk
          }, !0)
        })), kk.Gy(mk.Db, (kk => {
          let {
            id: ek
          } = kk;
          lk.j.tm("clearDirectionArrow", {
            id: ek
          }, !0)
        })), kk.Gy(mk.Mb, (kk => {
          (0, je.onCosmeticPackGranted)(kk)
        })), kk.Gy(mk.ld, (kk => {
          let {
            id: ek,
            kk: ik
          } = kk;
          const {
            type: fk,
            params: Sk
          } = (0, Ye.h)(ik), bk = {
            ...Sk
          };
          for (const Dk of Ye.d) Dk in bk && bk[Dk] && (bk[Dk] = (0, mk.w)(bk[Dk]));
          le.d.queueQTE(ek, fk, bk).getResult().then((kk => {
            "boolean" === typeof kk && (0, Dk.sendColyMessage)(mk.Bi, {
              qteId: ek,
              qteResponse: kk
            })
          }))
        })), kk.Gy(mk.de, (kk => {
          le.d.cancelQTE(kk)
        })), (0, Dk.onGameResetOnce)((() => {
          le.d.reset()
        })), kk.Gy(mk.md, (kk => {
          let {
            id: ek,
            clientParameters: ik
          } = kk;
          (0, Pe.e)(ek, ik)
        })), kk.Gy(mk.ge, (kk => {
          (0, Pe.f)(kk)
        })), kk.Gy(mk.Df, (kk => {
          let {
            text: ek,
            id: ik
          } = kk;
          (0, Pe.h)(ik, ek, (kk => {
            (0, Dk.sendColyMessage)(mk.ck, {
              Nb: ik,
              Rb: kk,
              Jb: 5
            })
          }))
        })), kk.Gy(mk.sd, (kk => {
          let {
            info: ek
          } = kk;
          lk.j.tm("overShopInfo", ek, !0)
        })), kk.Gy(mk.cc, (kk => {
          let {
            ib: ik,
            Db: Dk
          } = kk;
          this.clientApi.openShop(ek.Qq, ik, Dk)
        })), kk.Gy(mk.ac, (kk => {
          let {
            Me: ek,
            Ke: ik,
            xe: Dk
          } = kk;
          lk.j.tm("flyingMiddleMessage", {
            content: (0, mk.w)(ek),
            Ke: ik,
            xe: Dk
          }, !0)
        })), kk.Gy(mk.Yf, (kk => {
          const ek = kk === Le.f ? null : {
            message: `Currently loaded as variation: ${kk}`,
            type: "Warning"
          };
          lk.j.tm("showPermanentBottomMessage", ek, !0)
        })), kk.Gy(mk.ec, (kk => {
          let {
            messageType: ek,
            data: Dk
          } = kk;
          (0, Ce.f)(ek) ? (0, Ce.c)(ek, Dk) : ("freeCamPerms" === ek && ik.client.freeCameraController.setPerms(Dk.key, Dk.value), ik.client.triggerGameCallback("onReceivedMessageFromServer", ek, Dk))
        })), kk.Gy(mk.Fb, Ae.h)
      }
    }
    class de {
      constructor(kk, ek, ik, Dk) {
        this.gameNameWithVariation = kk, this.Lx = ik, this.connectionResume = Dk, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new Lk.c(ek, this.Lx)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Dk.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      imk(kk) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Lk.c(kk, this.Lx), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(kk, ek) {
        const ik = this.Lx,
          Dk = kk => {
            this.stateReplicationHandler.setUpIfQueued(kk)
          };
        new pe(ik, this.gameNameWithVariation, this.connectionResume).register(kk), new Fk(ik).register(kk), new Nk(ik).register(kk), new vk(ik, Dk).register(kk), new Ok(ik, Dk).register(kk), new se(ik, ek).register(kk), new be(ik, Dk).register(kk)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Ve = ik(38615),
      Fe = ik(38620),
      ue = ik(630),
      qe = ik(2866);
    class Ie {
      constructor(kk, ek, ik, Dk) {
        this.msgHandler = ik, this.listener = Dk, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Ve.b({
          reconnect: kk,
          isLive: () => Dk.isLive(),
          onReconnected: kk => {
            this.resumeOnRoom(kk)
          },
          onGaveUp: (kk, ek) => {
            Dk.onGaveUp(kk, ek)
          },
          freeze: ek,
          releaseSeat: ek => {
            kk(ek).then((kk => {
              kk.leave(!0)
            }), (kk => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", kk)
            }))
          }
        })
      }
      onInitialInfo(kk, ek) {
        this.session.onInitialInfo(kk, ek)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(kk, ek) {
        if (this.session.onResuming(), null === kk) {
          try {
            (0, Pk.d)().client.itemDropPrediction.reset()
          } catch (ik) {
            console.error("Error dropping the item drop predictions on resuming", ik)
          }
          return Dk.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, Pk.d)().client.itemDropPrediction.onResumeReplayOffered(), Dk.offlineInputReplay.replayFrom(kk.Oe, ek)
      }
      onResumed(kk) {
        this.setSuspended(!1), (0, Dk.resendBeacons)();
        try {
          kk()
        } catch (ek) {
          console.error("Error completing the resume", ek)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(kk) {
        const ek = (0, ue.h)((() => kk.connection.isOpen));
        kk.kY(ek);
        const ik = new Fe.e((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(kk, "silent"), kk.leave(!1))
        }));
        kk.onStateChange((() => {
          ik.heard()
        }));
        const Dk = ek => {
          ek.persisted || kk.leave(!0)
        };
        window.addEventListener("pagehide", Dk), kk.kY(((ek, ik) => {
          if (kk === this.attachedRoom && this.listener.isLive()) return (0, Sk.j)(ek) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${ek}, reconnecting`), this.listener.onDropped(ek, ik), void this.onConnectionDropped(kk, String(ek))) : void this.listener.onRoomLeft(ek, ik)
        })), this.attachedRoom = kk, this.detachRoomListeners = () => {
          ek(), ik.dispose(), window.removeEventListener("pagehide", Dk)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(kk) {
        kk !== this.suspended && (this.suspended = kk, (0, Dk.setConnectionSuspended)(kk), (0, Pk.d)().client.itemDropPrediction.setSuspended(kk))
      }
      detachRoom() {
        var kk;
        null === (kk = this.detachRoomListeners) || void 0 === kk || kk.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(kk, ek) {
        (0, qe.reportClientError)("disconnect", "Left room", ek), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Dk.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(kk.reconnectionToken)
      }
      resumeOnRoom(kk) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), kk.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, Zk.q)(), Dk.offlineInputReplay.onConnectionReplaced(), this.msgHandler.imk(kk), this.listener.onReconnected(kk), this.attachRoom(kk)
      }
    }
    var ze = ik(2910),
      Qe = ik(2917),
      ve = ik(1302),
      Ee = ik(1284),
      he = ik(4616),
      ae = ik(3121),
      We = ik(1046),
      te = ik(37310),
      Xe = ik(38628),
      Be = ik(8718),
      ce = ik(38636),
      Te = ik(1187),
      oe = ik(36011),
      Ze = ik(38644),
      Oe = ik(1684),
      ge = ik(2709);

    function Ge(kk) {
      var ek, ik;
      if ("object" !== typeof kk || null === kk) return {
        errType: typeof kk
      };
      const Dk = kk;
      return {
        errType: null !== (ek = null === (ik = kk.constructor) || void 0 === ik ? void 0 : ik.name) && void 0 !== ek ? ek : "",
        errName: "string" === typeof Dk.name ? Dk.name : "",
        eventType: "string" === typeof Dk.type ? Dk.type : "",
        errStack: "string" === typeof Dk.stack ? Dk.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Ne(kk) {
      if ("undefined" !== typeof ProgressEvent && kk instanceof ProgressEvent) return !0;
      if (!(kk instanceof Error)) return !1;
      const ek = kk.code;
      return "ServerError" === kk.name && void 0 === ek || "AbortError" === kk.name || "seat reservation expired." === kk.message || "early_leave" === kk.message
    }(0, Hk.n)((kk => {
      (0, qe.reportClientError)("wasm_net", kk)
    }));
    let Re = !0;

    function Je() {
      Re = !1
    }
    class ki {
      constructor(kk) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.Lx = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = kk.gameNameWithVariation, this.lobbyName = kk.lobbyName, this.colyClient = kk.colyClient, this.userContext = kk.userContext
      }
      async connectToServer(kk, ek, ik) {
        pk.c.reset(), kk.zq = {
          [kk.Qq]: {}
        }, kk.ykk = void 0, (0, Zk.q)(), (0, Pk.d)().removeAllEntityNames(), (0, Pk.d)().setEntityName(kk.Qq, this.userContext.getPlayerName()), (0, ve.n)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const bk = (0, Oe.c)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const rk = performance.now(),
          mk = (0, ce.g)(this.userContext, (() => {
            const {
              roomName: Dk,
              joinOptions: fk
            } = (0, Yk.g)(this.userContext, this.gameNameWithVariation, this.lobbyName, ek, (kk => ae.e.isUsingCustomGameTexturePack(kk)));
            return fk.joinAdHold = bk, fk.renderBackend = (0, ge.d)(kk.yH), (0, Xe.d)((() => this.colyClient.joinOrCreateUntil(ik, Dk, fk)), ik)
          }));
        return lk.j.tm("loadingScreenState", "loadingPage:joiningLobby"), await mk.then((ek => {
          if (this.joinedAt = performance.now(), this.Lx = kk, bk) {
            const kk = (0, Oe.l)((() => {
              ek.send(fk.g), (0, Ee.l)()
            }));
            ek.kY(kk), (0, Dk.onGameResetOnce)(kk)
          }
          const ik = new wk(ek);
          this.connectionResume = new Ie((kk => this.colyClient.reconnect(kk)), (ek => {
            kk.VV(ek)
          }), ik, {
            isLive: () => (0, Pk.d)().client.getMsgHandler() === ik,
            onDropped: (kk, ek) => {
              (0, Qe.i)(kk) || this.logUnrecognisedConnectionLoss(kk, void 0, {
                site: "drop",
                closeReason: null !== ek && void 0 !== ek ? ek : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (kk, ek) => {
              this.onRoomLeft(kk, ek)
            },
            onReconnected: kk => {
              this.incomingMsgInitialisor.imk(kk), this.checkSendPath = (0, te.e)(ik, kk, Hk.p)
            },
            onGaveUp: (kk, ek) => {
              this.onResumeGaveUp(kk, ek)
            }
          }), this.connectionResume.attachRoom(ek), (0, Dk.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Sk = ik.send,
            rk = ik.Gy,
            mk = ik.rik.send,
            Mk = ik.rik.Gy,
            Kk = ik.kmk;
          this.checkSendPath = (0, te.e)(ik, ek, Hk.p);
          const xk = setInterval((() => {
            Sk === ik.send && rk === ik.Gy && mk === ik.rik.send && Mk === ik.rik.Gy && Kk === ik.kmk || Je(), this.checkSendPath()
          }), 1e4);
          return (0, Dk.onGameResetOnce)((() => {
            clearInterval(xk)
          })), {
            success: !0,
            successDetails: ik
          }
        })).catch((ek => {
          if (ik.aborted && ek === (0, Te.i)(ik)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (ek instanceof oe.e) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: ek.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, Ze.c)(ek, ek.leg)
            }
          };
          kk.BH(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${ek.code}\n`, ek);
          const Dk = ek.code;
          return Dk === Sk.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Sk.c.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Dk, ek.message, {
                site: "join",
                sinceJoinStart: (0, Qe.e)(performance.now() - rk),
                ...Ge(ek)
              }, Ne(ek)),
              rematch: (0, Xe.c)(ek),
              gameRefused: (0, Be.e)(ek),
              joinFailure: (0, Ze.c)(ek, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(kk, ek, ik) {
        lk.j.tm("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new de(this.gameNameWithVariation, ek.rik, kk, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const fk = ek.bmk();
        this.incomingMsgInitialisor.setupOnMessageListeners(fk, ik), (0, Dk.onConnectionToServerReady)(fk, ek), fk.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(kk, ek) {
        (0, We.cH)(new Error("Reconnect failed"), {
          ...(0, ze.j)(ek),
          game: this.gameNameWithVariation
        }), (0, qe.reportClientError)("disconnect", "Reconnect failed", ek.reason), (0, Pk.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !kk,
          canPlayAgain: kk,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Ue.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Qe.e)(performance.now() - this.joinedAt)
      }
      onRoomLeft(kk, ek) {
        var ik;
        if (kk === Sk.c.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${kk}`), kk === Sk.c.serverUpdating.code) return (0, qe.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, Pk.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Lx.BH(`Kicked from server with code ${kk}`, new Error);
        const Dk = Object.keys(Sk.c).find((ek => Sk.c[ek].code === kk));
        (0, qe.reportClientError)("disconnect", "Left room", null !== Dk && void 0 !== Dk ? Dk : String(kk));
        const fk = this.onConnectionToServerLost(kk, void 0, {
          site: "leave",
          closeReason: null !== ek && void 0 !== ek ? ek : "",
          sinceJoined: this.sinceJoined()
        });
        (0, Pk.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${fk.reason}`,
          canReconnect: fk.canReconnect,
          requiresRefresh: fk.requiresRefresh,
          automaticallyReconnect: null !== (ik = fk.automaticallyReconnect) && void 0 !== ik && ik
        }), (0, Ue.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, he.E)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Ue.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(kk, ek, ik) {
        var Dk;
        let fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Dk = ek) && void 0 !== Dk && Dk.endsWith(Sk.k) && (this.userContext.invalidateTrafficCode(), ek = ek.replace(Sk.k, "")), kk === Sk.c.outdatedVersion.code) return console.error("Outdated client with version ", bk.c, ", refreshing page"), (0, yk.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (kk === Sk.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, yk.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const bk in Sk.c) {
          const {
            code: ik,
            text: Dk,
            canReconnect: fk
          } = Sk.c[bk];
          if (ik === kk) {
            console.log("matched known error", kk, "leaving game");
            return {
              reason: "" !== Dk ? Dk : ek || `Code: ${kk}`,
              requiresRefresh: !1,
              canReconnect: fk,
              automaticallyReconnect: ik === Sk.c.customGameUpdated.code || ik === Sk.c.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Qe.g)(kk) || fk ? console.warn("Connection lost", kk, ek) : this.logUnrecognisedConnectionLoss(kk, ek, ik), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${kk}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: fk ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(kk, ek, ik) {
        (0, We.cH)(new Error("Unrecognised connection loss"), {
          code: String(kk),
          cause: null !== ek && void 0 !== ek ? ek : "",
          ...ik,
          game: this.gameNameWithVariation,
          ...(0, Qe.j)()
        })
      }
    }
  },
  38547: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Gi,
      e: () => iD
    });
    var Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk, Ik, zk, Qk, vk, Ek, hk, ak, Wk, tk, Xk, Bk, ck, Tk, Zk, Ok, gk, Gk, Nk, Rk, Jk, ke, ee, ie, De, fe, Se, be, re, Pe, me, Me, Ke, xe, ne, Ue, He, we, le, pe, ye, Ye, Le, Ce, Ae, je, se, de, Ve, Fe, ue, qe, Ie, ze, Qe, ve, Ee, he, ae, We, te, Xe, Be, ce, Te, oe, Ze, Oe, ge, Ge, Ne, Re, Je = ik(26),
      ki = ik(36752),
      ei = ik(38558),
      ii = ik(38565),
      Di = ik(8929),
      fi = ik(591),
      Si = ik(585),
      bi = ik(36370);
    let ri = (Dk = (0, Di.type)("number"), fk = (0, Di.type)("number"), Sk = (0, Di.type)("number"), bk = (0, Di.type)("number"), rk = (0, Di.type)("number"), Pk = (0, Di.type)("number"), mk = (0, Di.type)("string"), Mk = class extends Di.Schema {
        constructor() {
          super(...arguments), (0, ei.e)(this, "id", Kk, this), (0, ei.e)(this, "amount", xk, this), (0, ei.e)(this, "x", nk, this), (0, ei.e)(this, "y", Uk, this), (0, ei.e)(this, "z", Hk, this), (0, ei.e)(this, "size", wk, this), (0, ei.e)(this, "attributes", lk, this)
        }
      }, Kk = (0, ii.b)(Mk.prototype, "id", [Dk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xk = (0, ii.b)(Mk.prototype, "amount", [fk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nk = (0, ii.b)(Mk.prototype, "x", [Sk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Uk = (0, ii.b)(Mk.prototype, "y", [bk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Hk = (0, ii.b)(Mk.prototype, "z", [rk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wk = (0, ii.b)(Mk.prototype, "size", [Pk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), lk = (0, ii.b)(Mk.prototype, "attributes", [mk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Mk),
      Pi = (pk = (0, Di.type)("string"), yk = (0, Di.type)("string"), Yk = class extends Di.Schema {
        constructor() {
          super(...arguments), (0, ei.e)(this, "itemName", Lk, this), (0, ei.e)(this, "enchantmentTier", Ck, this)
        }
      }, Lk = (0, ii.b)(Yk.prototype, "itemName", [pk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ck = (0, ii.b)(Yk.prototype, "enchantmentTier", [yk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Yk),
      mi = (Ak = (0, Di.type)("string"), jk = (0, Di.type)("string"), sk = (0, Di.type)("number"), dk = (0, Di.type)("number"), Vk = (0, Di.type)("number"), Fk = (0, Di.type)("float32"), uk = (0, Di.type)("float32"), qk = (0, Di.type)("float32"), Ik = (0, Di.type)("string"), zk = (0, Di.type)(["number"]), Qk = (0, Di.type)("boolean"), vk = class extends Di.Schema {
        constructor() {
          super(...arguments), (0, ei.e)(this, "type", Ek, this), (0, ei.e)(this, "name", hk, this), (0, ei.e)(this, "x", ak, this), (0, ei.e)(this, "y", Wk, this), (0, ei.e)(this, "z", tk, this), (0, ei.e)(this, "xRotation", Xk, this), (0, ei.e)(this, "yRotation", Bk, this), (0, ei.e)(this, "zRotation", ck, this), (0, ei.e)(this, "followingEId", Tk, this), (0, ei.e)(this, "followingOffset", Zk, this), (0, ei.e)(this, "shouldMatchFollowingEntityRotation", Ok, this)
        }
      }, Ek = (0, ii.b)(vk.prototype, "type", [Ak], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), hk = (0, ii.b)(vk.prototype, "name", [jk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), ak = (0, ii.b)(vk.prototype, "x", [sk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Wk = (0, ii.b)(vk.prototype, "y", [dk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tk = (0, ii.b)(vk.prototype, "z", [Vk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Xk = (0, ii.b)(vk.prototype, "xRotation", [Fk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Bk = (0, ii.b)(vk.prototype, "yRotation", [uk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ck = (0, ii.b)(vk.prototype, "zRotation", [qk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Tk = (0, ii.b)(vk.prototype, "followingEId", [Ik], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Zk = (0, ii.b)(vk.prototype, "followingOffset", [zk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Di.ArraySchema(0, 0, 0)
        }
      }), Ok = (0, ii.b)(vk.prototype, "shouldMatchFollowingEntityRotation", [Qk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), vk),
      Mi = (gk = (0, Di.type)("float32"), Gk = (0, Di.type)("float32"), Nk = (0, Di.type)("boolean"), Rk = (0, Di.type)("boolean"), Jk = (0, Di.type)("float32"), ke = (0, Di.type)("boolean"), ee = (0, Di.type)("string"), ie = (0, Di.type)("string"), De = (0, Di.type)("string"), fe = (0, Di.type)("string"), Se = (0, Di.type)(["number"]), be = (0, Di.type)("number"), re = (0, Di.type)({
        map: Pi
      }), Pe = class extends mi {
        constructor() {
          super(...arguments), (0, ei.e)(this, "scale", me, this), (0, ei.e)(this, "speed", Me, this), (0, ei.e)(this, "jumping", Ke, this), (0, ei.e)(this, "crouching", xe, this), (0, ei.e)(this, "cameraPitch", ne, this), (0, ei.e)(this, "armSwinging", Ue, this), (0, ei.e)(this, "heldItemName", He, this), (0, ei.e)(this, "heldItemEnchantmentTier", we, this), (0, ei.e)(this, "pose", le, this), (0, ei.e)(this, "ridingVehicleEId", pe, this), (0, ei.e)(this, "meshOffset", ye, this), (0, ei.e)(this, "baseRenderHeading", Ye, this), (0, ei.e)(this, "armour", Le, this)
        }
      }, me = (0, ii.b)(Pe.prototype, "scale", [gk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Me = (0, ii.b)(Pe.prototype, "speed", [Gk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ke = (0, ii.b)(Pe.prototype, "jumping", [Nk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), xe = (0, ii.b)(Pe.prototype, "crouching", [Rk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), ne = (0, ii.b)(Pe.prototype, "cameraPitch", [Jk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ue = (0, ii.b)(Pe.prototype, "armSwinging", [ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), He = (0, ii.b)(Pe.prototype, "heldItemName", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), we = (0, ii.b)(Pe.prototype, "heldItemEnchantmentTier", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), le = (0, ii.b)(Pe.prototype, "pose", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), pe = (0, ii.b)(Pe.prototype, "ridingVehicleEId", [fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), ye = (0, ii.b)(Pe.prototype, "meshOffset", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Di.ArraySchema(0, 0, 0)
        }
      }), Ye = (0, ii.b)(Pe.prototype, "baseRenderHeading", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Le = (0, ii.b)(Pe.prototype, "armour", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Di.MapSchema
        }
      }), Pe),
      Ki = (Ce = (0, Di.type)("string"), Ae = (0, Di.type)("string"), je = (0, Di.type)("string"), se = (0, Di.type)("uint8"), de = class extends Mi {
        constructor() {
          super(...arguments), (0, ei.e)(this, "variation", Ve, this), (0, ei.e)(this, "ownerDbId", Fe, this), (0, ei.e)(this, "metaInfo", ue, this), (0, ei.e)(this, "aiState", qe, this)
        }
      }, Ve = (0, ii.b)(de.prototype, "variation", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Fe = (0, ii.b)(de.prototype, "ownerDbId", [Ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), ue = (0, ii.b)(de.prototype, "metaInfo", [je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), qe = (0, ii.b)(de.prototype, "aiState", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), de);
    Ie = (0, Di.type)("string"), ze = (0, Di.type)("string"), Qe = (0, Di.type)("string"), ve = (0, Di.type)("string"), Ee = class extends mi {
      constructor() {
        super(...arguments), (0, ei.e)(this, "meshKind", he, this), (0, ei.e)(this, "meshOpts", ae, this), (0, ei.e)(this, "pose", We, this), (0, ei.e)(this, "leaderboardTop", te, this)
      }
    }, he = (0, ii.b)(Ee.prototype, "meshKind", [Ie], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ae = (0, ii.b)(Ee.prototype, "meshOpts", [ze], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), We = (0, ii.b)(Ee.prototype, "pose", [Qe], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), te = (0, ii.b)(Ee.prototype, "leaderboardTop", [ve], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function xi(kk) {
      return Object.keys(Di.Metadata.getFields(kk))
    }
    const ni = xi(Ki);
    for (const DD of fi.t)
      if (!ni.includes(DD)) throw new Error(`Mob Schema is missing a networked property: "${DD}"`);
    const Ui = xi((Xe = (0, Di.type)("string"), Be = (0, Di.type)("float32"), ce = (0, Di.type)("float32"), Te = (0, Di.type)("float32"), oe = (0, Di.type)("float32"), Ze = class extends mi {
      constructor() {
        super(...arguments), (0, ei.e)(this, "soundName", Oe, this), (0, ei.e)(this, "volume", ge, this), (0, ei.e)(this, "refDistance", Ge, this), (0, ei.e)(this, "maxHearDist", Ne, this), (0, ei.e)(this, "rate", Re, this)
      }
    }, Oe = (0, ii.b)(Ze.prototype, "soundName", [Xe], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), ge = (0, ii.b)(Ze.prototype, "volume", [Be], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Ge = (0, ii.b)(Ze.prototype, "refDistance", [ce], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return bi.k
      }
    }), Ne = (0, ii.b)(Ze.prototype, "maxHearDist", [Te], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return bi.e
      }
    }), Re = (0, ii.b)(Ze.prototype, "rate", [oe], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Ze));
    for (const DD of Si.j)
      if (!Ui.includes(DD)) throw new Error(`AudioEntity Schema is missing a replicated property: "${DD}"`);
    var Hi = ik(38025),
      wi = ik(1218),
      li = ik(594),
      yi = ik(37798),
      Yi = ik(4189),
      Li = ik(314),
      Ci = ik(36868),
      Ai = ik(37685),
      ji = ik(2195),
      si = ik(36840),
      di = ik(38053),
      Vi = ik(36991),
      Fi = ik(330),
      ui = ik.n(Fi),
      qi = ik(37523),
      Ii = ik(36679),
      zi = ik(37663),
      Qi = ik(37697);
    class vi {
      constructor(kk, ek) {
        this.bloxd = kk, this.eId = ek, this.Lx = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.aU = !1, this.Lx = kk.Lx
      }
      initClient(kk) {
        var ek, ik, Dk;
        this.colyseusEntity = kk, this.meshKind = kk.meshKind, this.meshOpts = kk.meshOpts, this.leaderboardTop = kk.leaderboardTop, this.Lx.mY.add([kk.x, kk.y, kk.z], 1, 1, null, null, !1, !1, this.eId), this.Lx.mY.wq(this.eId, "smoothToServerPos");
        const fk = "Person" === this.meshKind;
        this.Lx.mY.wq(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...fk ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: fk ? [{
            nodeName: "HeadMesh",
            softTolerance: di.f,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Je.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (kk => {
          this.updateHidingMeshMgr()
        }));
        const Sk = () => {
          const kk = this.Lx.mY.gkk(this.eId);
          if (!kk) return;
          const ek = (0, Vi.i)(this.eId);
          if ("number" === typeof kk.Yu) {
            var ik, Dk, fk, Sk;
            const bk = null === (ik = (0, ji.j)("head", null === (fk = this.getSpec()) || void 0 === fk || null === (Sk = fk.opts.textures) || void 0 === Sk ? void 0 : Sk.head)) || void 0 === ik || null === (Dk = ik.personModel) || void 0 === Dk ? void 0 : Dk.fullBody;
            return this.Lx.yH.ku.setPickable(kk.Yu, ek && !bk), void(0, Ii.updatePersonAttachmentPickability)(this.Lx, this.eId, ek)
          }
          const bk = kk.mesh;
          if (bk)
            for (const rk of [bk, ...bk.getChildMeshes(!1)]) "Pw" in rk && !rk.name.startsWith("Cape|") && (rk.Pw = ek)
        };
        this.canAttackSub = Je.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Sk), this.interactableSub = Je.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, Sk), this.overlayColourSub = Je.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (kk => {
          this.updateOverlayColour(kk)
        })), this.opacitySub = Je.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (kk => {
          this.updateOpacity(kk)
        })), this.zIndexSub = Je.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (kk => {
          this.updateZIndex(kk)
        }));
        const bk = this.Lx.zq[this.Lx.Qq][this.eId];
        this.updateOverlayColour(null !== (ek = null === bk || void 0 === bk ? void 0 : bk.overlayColour) && void 0 !== ek ? ek : null), this.updateOpacity(null !== (ik = null === bk || void 0 === bk ? void 0 : bk.opacity) && void 0 !== ik ? ik : 1), this.updateZIndex(null !== (Dk = null === bk || void 0 === bk ? void 0 : bk.zIndex) && void 0 !== Dk ? Dk : 0), this.multilineTextBoxSub = (0, si.m)(this.Lx, this.eId)
      }
      onChangeClient(kk, ek) {
        if ("xRotation" === kk || "yRotation" === kk || "zRotation" === kk)(0, si.n)(this.Lx, this.eId, kk, ek);
        else if ("pose" === kk) {
          const kk = this.Lx.mY.eek(this.eId);
          kk && (kk.pose = ek || "standing")
        } else "meshKind" === kk || "meshOpts" === kk ? (this[kk] = ek, this.queueMeshRebuild()) : "name" === kk && "" !== ek ? this.updateHidingMeshMgr() : "leaderboardTop" === kk && (this.leaderboardTop = ek, Je.j.tm(`leaderboardTop|${this.eId}`, ek))
      }
      disposeClient() {
        this.aU = !0, this.Lx.mY.deleteEntity(this.eId), Je.j.unsubscribe(this.canSeeSub), Je.j.unsubscribe(this.canAttackSub), Je.j.unsubscribe(this.interactableSub), Je.j.unsubscribe(this.overlayColourSub), Je.j.unsubscribe(this.opacitySub), Je.j.unsubscribe(this.zIndexSub), Je.j.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var kk, ek;
        return {
          canSee: null !== (kk = null === (ek = this.Lx.zq[this.Lx.Qq][this.eId]) || void 0 === ek ? void 0 : ek.canSee) && void 0 !== kk && kk,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var kk, ek, ik;
        const {
          Lx: Dk
        } = this, {
          mY: fk
        } = Dk, Sk = this.getCurrentHidingMeshMgrState();
        if ((0, Li.Sd)(this.previousHidingMeshManagerState, Sk)) return;
        if (this.previousHidingMeshManagerState = Sk, fk.lq(this.eId, "hidingMeshManager"), null === (kk = Dk.zq[Dk.Qq][this.eId]) || void 0 === kk || !kk.canSee) return;
        const bk = this.getSpec();
        if (!bk) return;
        const {
          type: rk,
          opts: Pk
        } = bk;
        "Person" === rk && (Pk.textures = (0, ji.q)(Pk.textures)), Pk.eId = this.eId, fk.wq(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var kk, ek, ik;
            "Leaderboard" === rk && (Pk.leaderboardTop = this.leaderboardTop);
            const Sk = this.bloxd.client.meshCreator.getEntityMesh(rk, Pk, (kk => {
              var ek, ik;
              if ("number" === typeof kk) {
                var fk, Sk, bk;
                const ek = Dk.yH.ku;
                ek.setEntityId(kk, this.eId);
                const ik = "Person" === rk && (null === (fk = (0, ji.j)("head", null === (bk = Pk.textures) || void 0 === bk ? void 0 : bk.head)) || void 0 === fk || null === (Sk = fk.personModel) || void 0 === Sk ? void 0 : Sk.fullBody);
                return void ek.setPickable(kk, (0, Vi.i)(this.eId) && !ik)
              }
              const mk = kk;
              for (const rk of [mk, ...mk.getChildMeshes(!1)]) void 0 === rk.Pw || rk.name.startsWith("Cape|") || (rk.Pw = (0, Vi.i)(this.eId), rk.metadata ??= new Dk.yH.mw, rk.metadata.eId = this.eId);
              this.updateOpacity(null !== (ek = null === (ik = Dk.zq[Dk.Qq][this.eId]) || void 0 === ik ? void 0 : ik.opacity) && void 0 !== ek ? ek : 1)
            }));
            if (!Sk) return;
            const {
              Yu: bk,
              mesh: mk,
              meshOffset: Mk,
              nameYOffset: Kk,
              modelLoaded: xk
            } = Sk;
            null === xk || void 0 === xk || xk.then((() => {
              var kk;
              (null === (kk = fk.gkk(this.eId)) || void 0 === kk ? void 0 : kk.mesh) === mk && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const nk = null === bk ? null : Dk.yH.ku.Bik(bk, 0);
            if (fk.wq(this.eId, fk.names.mesh, {
                Yu: bk,
                xik: nk,
                mesh: mk,
                qbk: !1,
                Uik: "Leaderboard" !== rk,
                offset: Mk.slice(),
                ubk: "ParticleEmitter" === rk && Pk.followTargetMeshOffset ? kk => {
                  var ek;
                  ui().copy(kk, Mk);
                  const ik = null === (ek = fk.tek(this.eId)) || void 0 === ek ? void 0 : ek.qU,
                    Dk = void 0 === ik ? null : fk.eek(ik);
                  if (Dk) {
                    var Sk, bk;
                    const ek = this.bloxd.getEntityHeading(null !== (Sk = Dk.ridingVehicleEId) && void 0 !== Sk ? Sk : ik, !0),
                      fk = Math.sin(ek),
                      rk = Math.cos(ek);
                    kk[0] += Dk.meshOffset[0] * rk + Dk.meshOffset[2] * fk, kk[1] += Dk.meshOffset[1], kk[2] += Dk.meshOffset[2] * rk - Dk.meshOffset[0] * fk;
                    const Pk = null !== (bk = Dk.ridingVehicleEId) && void 0 !== bk ? bk : null;
                    null !== Pk && (0, Qi.c)(this.Lx, Pk, kk)
                  }
                } : null
              }), "Person" === rk) {
              var Uk, Hk, wk, lk;
              fk.wq(this.eId, fk.names.meshAttachments, {
                personFullBody: null !== (Uk = null === (Hk = (0, ji.j)("head", null === (lk = Pk.textures) || void 0 === lk ? void 0 : lk.head)) || void 0 === Hk || null === (wk = Hk.personModel) || void 0 === wk ? void 0 : wk.fullBody) && void 0 !== Uk && Uk
              });
              for (const kk of wi.y) {
                var pk, yk, Yk;
                const ek = null === (pk = Pk.textures) || void 0 === pk ? void 0 : pk[kk];
                ek && null !== (yk = (0, ji.j)(kk, ek)) && void 0 !== yk && null !== (Yk = yk.attachments) && void 0 !== Yk && Yk.length && Ai.e.Player.meshApi.updatePlayerCosmetic(this.eId, bk, kk, ek)
              }
              fk.wq(this.eId, fk.names.moveState), fk.wq(this.eId, "updateWalkingState", {
                Yu: bk,
                xik: nk,
                walkingLegSwingDuration: di.o
              }), fk.wq(this.eId, "humanoidMesh", {
                Yu: bk,
                xik: nk,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), fk.wq(this.eId, "animator", {
                Yu: bk,
                xik: nk,
                modelLifeformType: "Player"
              }), zi.g.hasAnimation("Person") && fk.wq(this.eId, "rigAnimation", {
                target: "Person",
                Yu: bk
              }), fk.eek(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === rk && null !== bk) {
              fk.wq(this.eId, "animator", {
                Yu: bk,
                xik: nk,
                modelLifeformType: null
              });
              const kk = (0, yi.u)(Pk.blockName);
              null !== kk && fk.wq(this.eId, "rigAnimation", {
                target: kk,
                Yu: bk
              })
            }
            fk.Jbk(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Kk
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Pk.autoRotate && (fk.lq(this.eId, "meshRotation"), fk.wq(this.eId, "autoRotate"));
            const {
              lineToEId: Lk
            } = Pk;
            (0, li.F)(Lk) || fk.wq(this.eId, "lineToEntity", {
              lineToEId: Lk
            });
            const Ck = Dk.zq[Dk.Qq][this.eId];
            this.updateOverlayColour(null !== (kk = null === Ck || void 0 === Ck ? void 0 : Ck.overlayColour) && void 0 !== kk ? kk : null), this.updateOpacity(null !== (ek = null === Ck || void 0 === Ck ? void 0 : Ck.opacity) && void 0 !== ek ? ek : 1), this.updateZIndex(null !== (ik = null === Ck || void 0 === Ck ? void 0 : Ck.zIndex) && void 0 !== ik ? ik : 0)
          },
          removeMeshComponent: () => {
            "Person" !== rk && "BloxdBlock" !== rk || fk.lq(this.eId, "rigAnimation"), fk.lq(this.eId, fk.names.mesh), fk.lkk(this.eId, fk.names.meshAttachments) && fk.lq(this.eId, fk.names.meshAttachments), fk.lq(this.eId, "entityName"), fk.lq(this.eId, "autoRotate"), fk.lq(this.eId, "lineToEntity"), "Person" === rk ? (fk.lq(this.eId, fk.names.moveState), fk.lq(this.eId, "updateWalkingState"), fk.lq(this.eId, "humanoidMesh"), fk.lq(this.eId, "animator")) : "BloxdBlock" === rk && fk.lq(this.eId, "animator")
          },
          hideDist: null !== (ek = Pk.hideDist) && void 0 !== ek ? ek : 80,
          movingHideDist: null !== (ik = Pk.hideDist) && void 0 !== ik ? ik : 120,
          displayOutsideLoadedChunk: Pk.hideDist > 100,
          immediatelyUpdate: !0,
          Qr: "BloxdBlock" === rk ? Pk.blockName : rk
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.aU || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Yi.l)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(kk) {
        var ek, ik;
        if ("Person" !== this.meshKind) return;
        let Dk = new Ci.e(0, 0, 0, 0);
        if (null !== kk) {
          const ek = (0, Li.N)(kk);
          Dk = new Ci.e(ek[0] / 255, ek[1] / 255, ek[2] / 255, .5)
        }
        const fk = null !== (ek = null === (ik = this.Lx.mY.gkk(this.eId)) || void 0 === ik ? void 0 : ik.Yu) && void 0 !== ek ? ek : null;
        null !== fk && Ai.e.Player.meshApi.updateMeshOverlayColour(fk, Dk)
      }
      updateZIndex(kk) {
        var ek;
        if ("Person" !== this.meshKind) return;
        const ik = null === (ek = this.Lx.mY.gkk(this.eId)) || void 0 === ek ? void 0 : ek.Yu;
        "number" === typeof ik && this.Lx.yH.ku.setRenderingGroupId(ik, kk)
      }
      updateOpacity(kk) {
        const ek = this.Lx.mY.gkk(this.eId);
        ek && ("number" !== typeof ek.Yu ? ek.mesh && "ParticleEmitter" !== this.meshKind && (0, qi.g)(ek.mesh, kk) : Ai.e.Player.meshApi.updateMeshOpacity(ek.Yu, kk))
      }
    }
    var Ei = ik(38550);
    class ai {
      constructor(kk, ek) {
        this.eId = ek, this.Lx = void 0, this.schema = void 0, this.Lx = kk.Lx
      }
      initClient(kk) {
        this.schema = kk, this.Lx.mY.add([kk.x, kk.y, kk.z], .1, .1, null, null, !1, !1, this.eId), this.Lx.mY.wq(this.eId, "smoothToServerPos"), Ei.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(kk) {
        Si.j.includes(kk) && Ei.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Ei.d.remove(this.eId), this.Lx.mY.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: kk,
          volume: ek,
          refDistance: ik,
          maxHearDist: Dk,
          rate: fk
        } = this.schema;
        return {
          soundName: kk,
          volume: ek,
          refDistance: ik,
          maxHearDist: Dk,
          rate: fk
        }
      }
    }
    var Wi = ik(3642),
      ti = ik(36348),
      Xi = ik(6328),
      Bi = ik(37380),
      ci = ik(2704),
      Ti = ik(37738),
      oi = ik(8892),
      Zi = ik(38064),
      Oi = ik(37360),
      gi = ik(2866);
    class Gi {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.rik = kk, this.Lx = ek, this.setupBudgetMs = ik, this.now = Dk, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.aU = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Iy = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const kk of this.promotedSetups) {
            this.promotedSetups.delete(kk);
            const ek = this.queuedSetups.get(kk);
            ek && (this.queuedSetups.delete(kk), this.timedSetup(ek, kk))
          }
        }, this.createStateCallbacks = (0, oi.getStateCallbacks)(kk), this.roomStateCallbacks = this.createStateCallbacks(kk.state), this.roomState = kk.state, this.setupBudgetLeftMs = ik, this.lastRefillMs = Dk()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.rik.onStateChange(this.setUpPromoted), this.Lx.on("beforeInputs", this.onFrame), this.Lx.on("Px", this.Iy)
      }
      setUpQueuedEntities(kk) {
        var ek;
        if ((null === (ek = (0, ci.d)().client.getMsgHandler()) || void 0 === ek ? void 0 : ek.rik) !== this.rik) return this.Lx.off("beforeInputs", this.onFrame), this.Lx.off("Px", this.Iy), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (kk && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (ui().copy(Ni, this.Lx.mY.vy(this.Lx.Qq)); this.setupBudgetLeftMs > 0;) {
            const kk = this.nearestQueued(Ni);
            if (null === kk) return;
            this.setUpIfQueued(kk), this.setUpPromoted()
          }
      }
      nearestQueued(kk) {
        let ek = null,
          ik = 1 / 0;
        return this.queuedSetups.forEach(((Dk, fk) => {
          const Sk = function(kk, ek) {
            return (ek.x - kk[0]) ** 2 + (ek.y - kk[1]) ** 2 + (ek.z - kk[2]) ** 2
          }(kk, Dk);
          (null === ek || Sk < ik) && (ek = fk, ik = Sk)
        })), ek
      }
      setUpOrQueue(kk, ek) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(kk, ek) ? this.timedSetup(kk, ek) : this.queuedSetups.set(ek, kk)
      }
      mustSetUpNow(kk, ek) {
        const ik = this.Lx.ykk;
        if (ek === ik) return !0;
        const Dk = this.roomState.entities.get(ik);
        return !(!Dk || Dk.ridingVehicleEId !== ek && Dk.followingEId !== ek) || (Ri(kk.type) === Hi.d || (0, ci.d)().getFollowingEntities(ek).length > 0)
      }
      setUpIfQueued(kk) {
        const ek = this.queuedSetups.get(kk);
        ek && (this.queuedSetups.delete(kk), this.timedSetup(ek, kk))
      }
      promoteIfQueued(kk) {
        null !== kk && this.queuedSetups.has(kk) && this.promotedSetups.add(kk)
      }
      timedSetup(kk, ek) {
        const ik = this.now();
        this.setupEntity(kk, ek), this.setupBudgetLeftMs -= this.now() - ik
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.rY(((kk, ek) => {
          this.Lx.ykk ? this.setUpOrQueue(kk, ek) : this.deferEntitySetupUntilInitInfo(kk, ek)
        })), this.roomStateCallbacks.entities.oV(((kk, ek) => {
          const ik = this.deferredSetups.get(ek);
          ik && (Je.j.unsubscribe(ik), this.deferredSetups.delete(ek)), this.queuedSetups.delete(ek), this.detach(ek), (0, ci.d)().client.disposeEntity(ek)
        }))
      }
      deferEntitySetupUntilInitInfo(kk, ek) {
        const ik = Je.j.Ql("initInfoReceived", (() => {
          this.deferredSetups.delete(ek), this.setUpOrQueue(kk, ek)
        }));
        this.deferredSetups.set(ek, ik), (0, Wi.onGameResetOnce)((() => {
          this.deferredSetups.get(ek) === ik && (Je.j.unsubscribe(ik), this.deferredSetups.delete(ek)), (0, ci.d)().updatePositionAndPhysics(this.Lx.Qq, {
            type: Xi.o.DEFAULT,
            tier: null
          }, !0), (0, ci.d)().takeHeldPlayerBodySize(this.Lx.Qq);
          const kk = this.Lx.mY.vkk(this.Lx.Qq);
          kk && (kk.movementType = Xi.l.NORMAL)
        }))
      }
      setupEntity(kk, ek) {
        const ik = ek === this.Lx.ykk;
        if (ik)(0, ci.d)().client.aZ(this.Lx.Qq, null, null);
        else {
          const {
            type: ik
          } = kk, Dk = Ri(ik);
          if (void 0 === Dk) return void
          function(kk, ek) {
            const ik = String(kk);
            if (Ji.has(ik)) return;
            Ji.add(ik);
            const Dk = ik.length > 80 ? `${ik.slice(0,80)}...` : ik,
              fk = `No client handler for entity type ${JSON.stringify(Dk)}, so entity ${ek} is not set up`;
            console.warn(fk), (0, gi.reportClientError)("uncaught", fk, "unknown_entity_type")
          }(ik, ek);
          (0, ci.d)().client.aZ(ek, kk, new Dk((0, ci.d)(), ek, ik))
        }
        const Dk = this.createStateCallbacks(kk);
        if (ik) return this.setupMapSchemaCallbacks(ek, kk, Dk, "armour"), this.setupScalarField(ek, kk, Dk, "scale"), this.setupScalarField(ek, kk, Dk, "ridingVehicleEId"), this.setupScalarField(ek, kk, Dk, "followingEId"), this.setupScalarField(ek, kk, Dk, "followingOffset"), void this.setupScalarField(ek, kk, Dk, "shouldMatchFollowingEntityRotation");
        for (const fk of xi(kk.constructor)) kk[fk] instanceof Di.MapSchema ? this.setupMapSchemaCallbacks(ek, kk, Dk, fk) : this.setupScalarField(ek, kk, Dk, fk)
      }
      setupMapSchemaCallbacks(kk, ek, ik, Dk) {
        const fk = ik[Dk],
          Sk = new Map;
        fk.rY(((ik, fk) => {
          if (this.onEntityFieldChange(kk, ek, Dk, {
              key: fk,
              value: ik
            }), !(ik instanceof Di.Schema)) return;
          const bk = this.createStateCallbacks(ik),
            rk = [];
          for (const Sk of xi(ik.constructor)) rk.push(this.listenForFutureChanges(bk, Sk, (() => {
            this.onEntityFieldChange(kk, ek, Dk, {
              key: fk,
              value: ik
            })
          })));
          Sk.set(fk, (() => {
            for (const kk of rk) kk()
          }))
        })), fk.oV(((ik, fk) => {
          var bk;
          null === (bk = Sk.get(fk)) || void 0 === bk || bk(), Sk.delete(fk), this.onEntityFieldChange(kk, ek, Dk, {
            key: fk,
            value: null
          })
        })), this.addDetacher(kk, (() => {
          for (const kk of Sk.values()) kk();
          Sk.clear()
        }))
      }
      setupScalarField(kk, ek, ik, Dk) {
        this.onEntityFieldChange(kk, ek, Dk, ek[Dk]);
        const fk = this.listenForFutureChanges(ik, Dk, (ik => {
          this.onEntityFieldChange(kk, ek, Dk, ik)
        }));
        this.addDetacher(kk, fk)
      }
      addDetacher(kk, ek) {
        let ik = this.detachers.get(kk);
        ik || (ik = [], this.detachers.set(kk, ik)), ik.push(ek)
      }
      detach(kk) {
        for (const ik of null !== (ek = this.detachers.get(kk)) && void 0 !== ek ? ek : []) {
          var ek;
          ik()
        }
        this.detachers.delete(kk)
      }
      listenForFutureChanges(kk, ek, ik) {
        return kk.listen(ek, ik, !1)
      }
      onEntityFieldChange(kk, ek, ik, Dk) {
        switch (ik) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Dk);
            const ek = this.Lx.mY.eek((0, ti.b)(kk));
            ek && (ek.ridingVehicleEId = Dk);
            break
          }
          case "armour":
            this.handleArmourChange(kk, Dk);
            break;
          case "followingEId":
            this.promoteIfQueued(Dk), this.handleFollowingEIdChange(kk, ek, Dk);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(kk, ik, Dk);
            break;
          case "scale":
            this.handleScaleChange(kk, Dk);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(kk, Dk);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(kk, Dk);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(kk, Dk);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(kk, ik, Dk)
        }(0, ci.d)().client.updateEntityField(kk, ik, Dk)
      }
      handleArmourChange(kk, ek) {
        var ik, Dk;
        const {
          key: fk,
          value: Sk
        } = ek;
        (0, Ai.v)(kk, fk, null !== (ik = null === Sk || void 0 === Sk ? void 0 : Sk.itemName) && void 0 !== ik ? ik : null, null !== (Dk = null === Sk || void 0 === Sk ? void 0 : Sk.enchantmentTier) && void 0 !== Dk ? Dk : null)
      }
      handleFollowingEIdChange(kk, ek, ik) {
        const Dk = (0, ti.b)(kk),
          fk = Dk === this.Lx.Qq;
        if (this.Lx.mY.lq(Dk, this.Lx.mY.names.fL), ik) this.Lx.mY.lq(Dk, "smoothToServerPos"), this.Lx.mY.wq(Dk, this.Lx.mY.names.fL, {
          qU: (0, ti.b)(ik),
          offset: Array.from(ek.followingOffset),
          Xek: ek.shouldMatchFollowingEntityRotation,
          oek: !0,
          Zek: (kk, Dk) => {
            if (ui().copy(kk, ek.followingOffset), ek.ridingVehicleEId === ik) {
              const ek = (0, ti.b)(ik),
                fk = (0, ci.d)().getEntityHeading(ek, Dk);
              ui().ei(kk, kk, ui().ZERO, fk)
            }
          }
        });
        else if (!fk) {
          this.Lx.mY.lkk(Dk, "smoothToServerPos") || this.Lx.mY.wq(Dk, "smoothToServerPos");
          const kk = this.Lx.mY.getState(Dk, "smoothToServerPos"),
            ek = this.Lx.mY.ZZ(Dk).position;
          (0, Oi.setServerPosition)(kk, ek[0], ek[1], ek[2])
        }
      }
      handleRotationChange(kk, ek, ik) {
        const Dk = "xRotation" === ek ? 0 : "yRotation" === ek ? 1 : 2;
        for (const fk of (0, ci.d)().getFollowingEntities(kk)) {
          const kk = this.Lx.mY.getState(fk, "meshRotation"),
            ek = this.Lx.mY.tek(fk);
          kk && ek.Xek && (kk.serverSetRotation[Dk] = ik)
        }
      }
      handleScaleChange(kk, ek) {
        const ik = (0, ti.b)(kk);
        if (Je.j.tm(`entityScale|${ik}`, ek), ik === this.Lx.Qq) {
          var Dk;
          (0, ci.d)().removeFromEyeHeightCache(ik);
          const kk = this.Lx.mY.vkk(this.Lx.Qq),
            ek = null !== (Dk = null === kk || void 0 === kk ? void 0 : kk.physicsState) && void 0 !== Dk ? Dk : {
              type: Xi.o.DEFAULT,
              tier: null
            };
          return void(0, ci.d)().updatePositionAndPhysics(this.Lx.Qq, ek, !1)
        }
        const fk = (0, ci.d)().getLifeformType(ik);
        if (null === fk) return;
        const {
          physicsBodyWidth: Sk,
          physicsBodyHeight: bk
        } = (0, Zi.g)(ek, fk);
        this.Lx.mY.aek(ik, Sk, bk, Sk)
      }
      handleBaseRenderHeadingChange(kk, ek) {
        const ik = this.Lx.mY.getState(kk, "meshRotation");
        ik && (ik.baseRenderRotation[1] = ek);
        for (const Dk of (0, ci.d)().getFollowingEntities(kk)) {
          const kk = this.Lx.mY.getState(Dk, "meshRotation"),
            ik = this.Lx.mY.tek(Dk);
          kk && ik.Xek && (kk.baseRenderRotation[1] = ek)
        }
      }
      handleFollowingOffsetChange(kk, ek) {
        const ik = this.Lx.mY.tek((0, ti.b)(kk));
        if (ik && ik.offset) {
          const kk = ek ? Array.from(ek) : ui().ZERO;
          ik.offset[0] = kk[0], ik.offset[1] = kk[1], ik.offset[2] = kk[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(kk, ek) {
        const ik = this.Lx.mY.tek((0, ti.b)(kk));
        ik && (ik.Xek = null === ek || void 0 === ek || ek)
      }
      handlePositionChange(kk, ek, ik) {
        if (this.Lx.mY.lkk(kk, "smoothToServerPos")) {
          const Dk = this.Lx.mY.getState(kk, "smoothToServerPos");
          (0, Oi.setServerPositionAxis)(Dk, kD[ek], ik)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.rY(((kk, ek) => {
          this.allItems[ek] = kk, (0, Bi.l)(this.Lx, ek, [kk.x, kk.y, kk.z], kk.id, {
            amount: kk.amount,
            attributes: JSON.parse(kk.attributes),
            uf: (0, ki.c)(this.Lx).cantPickUpItem(ek),
            size: kk.size,
            predictedAt: (0, ci.d)().client.itemDropPrediction.onServerItemAdded(ek)
          });
          const ik = this.createStateCallbacks(kk);
          for (const Dk of xi(ri)) this.onItemFieldChange(ek, Dk, kk[Dk]), this.addDetacher(ek, this.listenForFutureChanges(ik, Dk, (kk => {
            this.onItemFieldChange(ek, Dk, kk)
          })))
        })), this.roomStateCallbacks.items.oV(((kk, ek) => {
          delete this.allItems[ek], this.detach(ek), (0, ci.d)().client.itemDropPrediction.onServerItemRemoved(ek), this.Lx.mY.lkk(ek, this.Lx.mY.names.itemState) && this.Lx.mY.deleteEntity(ek), (0, ki.c)(this.Lx).disposeEntity(ek)
        }))
      }
      onItemFieldChange(kk, ek, ik) {
        if (ek in kD) {
          if (this.Lx.mY.lkk(kk, "itemState")) {
            const Dk = this.Lx.mY.getState(kk, "smoothToServerPos");
            (0, Oi.setServerPositionAxis)(Dk, kD[ek], ik), (0, ci.d)().client.itemDropPrediction.onServerItemMoved(kk)
          }
          return
        }
        if (!this.Lx.mY.lkk(kk, "itemState")) return;
        const Dk = this.Lx.mY.getState(kk, "itemState");
        "amount" === ek && ik !== Dk.amount && (Dk.creationTime = Date.now()), Dk[ek] = "attributes" === ek ? JSON.parse(ik) : ik
      }
      dispose() {
        if (!this.aU) {
          this.aU = !0, this.Lx.off("beforeInputs", this.onFrame), this.Lx.off("Px", this.Iy), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const kk of this.deferredSetups.values()) Je.j.unsubscribe(kk);
          this.deferredSetups.clear(), this.Lx.mY.lq(this.Lx.Qq, this.Lx.mY.names.fL);
          for (const kk in this.allItems) this.Lx.mY.deleteEntity(kk), delete this.allItems[kk];
          for (const kk of [...this.detachers.keys()]) this.detach(kk);
          (0, ki.c)(this.Lx).clear();
          for (const kk of (0, ci.d)().client.iterateEntityIds())(0, ci.d)().client.disposeEntity(kk)
        }
      }
    }
    const Ni = [0, 0, 0];

    function Ri(kk) {
      if ("string" !== typeof kk) return;
      const ek = kk.indexOf("|"),
        ik = -1 === ek ? kk : kk.slice(0, ek),
        Dk = iD();
      return Object.hasOwn(Dk, ik) ? Dk[ik] : void 0
    }
    const Ji = new Set;
    const kD = {
      x: 0,
      y: 1,
      z: 2
    };
    let eD = null;

    function iD() {
      return null !== eD || (eD = {
        ...Object.fromEntries(Si.n.map((kk => {
          const {
            Qr: ek
          } = (0, Ti.b)(kk);
          return [kk, ek]
        }))),
        Pebble: Hi.d,
        Snowball: Hi.d,
        "Snowball Launcher": Hi.d,
        "Reinforced Pebble": Hi.d,
        Bullet: Hi.d,
        "Reinforced Ball": Hi.d,
        Ball: Hi.d,
        Mango: Hi.d,
        "Moonstone Orb": Hi.d,
        ...Object.fromEntries(fi.u.map((kk => [(0, Li.Ib)(kk), Hi.d]))),
        Arrow: Hi.d,
        "Arrow of Speed": Hi.d,
        "Arrow of Poison": Hi.d,
        "Arrow of Slowness": Hi.d,
        "Arrow of Weakness": Hi.d,
        "Arrow of Knockback": Hi.d,
        "Arrow of Strength": Hi.d,
        "Arrow of Invisibility": Hi.d,
        "Arrow of Jumping": Hi.d,
        "Arrow of Defense": Hi.d,
        "Arrow of Instant Healing": Hi.d,
        "Arrow of Instant Damage": Hi.d,
        "Arrow of Regeneration": Hi.d,
        "Arrow of Haste": Hi.d,
        "Arrow of Shield": Hi.d,
        "Arrow of Double Jump": Hi.d,
        "Arrow of Heat Resistance": Hi.d,
        "Arrow of X-Ray Vision": Hi.d,
        "Arrow of Mining Yield": Hi.d,
        "Arrow of Brain Rot": Hi.d,
        "Arrow of Milk": Hi.d,
        Fireball: Hi.d,
        "Bouncy Bomb": Hi.d,
        RPG: Hi.d,
        "Obby RPG": Hi.d,
        "Super RPG": Hi.d,
        "Grenade Launcher": Hi.d,
        Iceball: Hi.d,
        Coconut: Hi.d,
        "Splash Speed Potion": Hi.d,
        "Splash Defense Potion": Hi.d,
        "Splash Strength Potion": Hi.d,
        "Splash Invisibility Potion": Hi.d,
        "Splash Jump Potion": Hi.d,
        "Splash Knockback Potion": Hi.d,
        "Splash Poison Potion": Hi.d,
        "Splash Speed Potion II": Hi.d,
        "Splash Defense Potion II": Hi.d,
        "Splash Strength Potion II": Hi.d,
        "Splash Jump Potion II": Hi.d,
        "Splash Knockback Potion II": Hi.d,
        "Splash Poison Potion II": Hi.d,
        "Splash Slowness Potion": Hi.d,
        "Splash Slowness Potion II": Hi.d,
        "Splash Weakness Potion": Hi.d,
        "Splash Weakness Potion II": Hi.d,
        "Splash Milk Potion": Hi.d,
        "Splash Instant Damage Potion": Hi.d,
        "Splash Instant Damage Potion II": Hi.d,
        "Splash Instant Healing Potion": Hi.d,
        "Splash Instant Healing Potion II": Hi.d,
        "Splash Regeneration Potion": Hi.d,
        "Splash Regeneration Potion II": Hi.d,
        "Splash Haste Potion": Hi.d,
        "Splash Haste Potion II": Hi.d,
        "Splash Shield Potion": Hi.d,
        "Splash Shield Potion II": Hi.d,
        "Splash Double Jump Potion": Hi.d,
        "Splash Heat Resistance Potion": Hi.d,
        "Splash X-Ray Vision Potion": Hi.d,
        "Splash Mining Yield Potion": Hi.d,
        "Splash Mining Yield Potion II": Hi.d,
        "Splash Brain Rot Potion": Hi.d,
        "Yellow Paintball Gun": Hi.d,
        "White Paintball Gun": Hi.d,
        "Red Paintball Gun": Hi.d,
        "Purple Paintball Gun": Hi.d,
        "Pink Paintball Gun": Hi.d,
        "Orange Paintball Gun": Hi.d,
        "Magenta Paintball Gun": Hi.d,
        "Lime Paintball Gun": Hi.d,
        "Light Gray Paintball Gun": Hi.d,
        "Light Blue Paintball Gun": Hi.d,
        "Green Paintball Gun": Hi.d,
        "Gray Paintball Gun": Hi.d,
        "Cyan Paintball Gun": Hi.d,
        "Brown Paintball Gun": Hi.d,
        "Blue Paintball Gun": Hi.d,
        "Black Paintball Gun": Hi.d,
        "Yellow Heavy Paintball Gun": Hi.d,
        "White Heavy Paintball Gun": Hi.d,
        "Red Heavy Paintball Gun": Hi.d,
        "Purple Heavy Paintball Gun": Hi.d,
        "Pink Heavy Paintball Gun": Hi.d,
        "Orange Heavy Paintball Gun": Hi.d,
        "Magenta Heavy Paintball Gun": Hi.d,
        "Lime Heavy Paintball Gun": Hi.d,
        "Light Gray Heavy Paintball Gun": Hi.d,
        "Light Blue Heavy Paintball Gun": Hi.d,
        "Green Heavy Paintball Gun": Hi.d,
        "Gray Heavy Paintball Gun": Hi.d,
        "Cyan Heavy Paintball Gun": Hi.d,
        "Brown Heavy Paintball Gun": Hi.d,
        "Blue Heavy Paintball Gun": Hi.d,
        "Black Heavy Paintball Gun": Hi.d,
        "Toxin Ball": Hi.d,
        "Splash Aura XP Potion": Hi.d,
        "Splash Aura XP Potion II": Hi.d,
        "Arrow of Aura XP": Hi.d,
        Firecracker: Hi.d,
        "Rainbow Firecracker": Hi.d,
        "White Firecracker": Hi.d,
        "Orange Firecracker": Hi.d,
        "Magenta Firecracker": Hi.d,
        "Light Blue Firecracker": Hi.d,
        "Yellow Firecracker": Hi.d,
        "Lime Firecracker": Hi.d,
        "Pink Firecracker": Hi.d,
        "Gray Firecracker": Hi.d,
        "Light Gray Firecracker": Hi.d,
        "Cyan Firecracker": Hi.d,
        "Purple Firecracker": Hi.d,
        "Blue Firecracker": Hi.d,
        "Brown Firecracker": Hi.d,
        "Green Firecracker": Hi.d,
        "Red Firecracker": Hi.d,
        "Black Firecracker": Hi.d,
        "Firecracker Pebble": Hi.d,
        "Rainbow Firecracker Pebble": Hi.d,
        "White Firecracker Pebble": Hi.d,
        "Orange Firecracker Pebble": Hi.d,
        "Magenta Firecracker Pebble": Hi.d,
        "Light Blue Firecracker Pebble": Hi.d,
        "Yellow Firecracker Pebble": Hi.d,
        "Lime Firecracker Pebble": Hi.d,
        "Pink Firecracker Pebble": Hi.d,
        "Gray Firecracker Pebble": Hi.d,
        "Light Gray Firecracker Pebble": Hi.d,
        "Cyan Firecracker Pebble": Hi.d,
        "Purple Firecracker Pebble": Hi.d,
        "Blue Firecracker Pebble": Hi.d,
        "Brown Firecracker Pebble": Hi.d,
        "Green Firecracker Pebble": Hi.d,
        "Red Firecracker Pebble": Hi.d,
        "Black Firecracker Pebble": Hi.d,
        "Blinding Pebble": Hi.d,
        Poop: Hi.d,
        "Wood Boomerang": Hi.d,
        "Stone Boomerang": Hi.d,
        "Iron Boomerang": Hi.d,
        "Gold Boomerang": Hi.d,
        "Diamond Boomerang": Hi.d,
        "Amethite Boomerang": Hi.d,
        "Magmasteel Boomerang": Hi.d,
        "Rubellite Boomerang": Hi.d,
        "Serpentite Boomerang": Hi.d,
        "Moonstone Boomerang": Hi.d,
        "67 Base Projectile": Hi.d,
        "67 Boosted Projectile": Hi.d,
        "Capitano Grenade": Hi.d,
        "Scatter Pellet": Hi.d,
        "Lucky Bomb": Hi.d,
        "Unlucky Bomb": Hi.d,
        "Swap Orb": Hi.d,
        Mesh: vi,
        AudioEntity: ai
      }), eD
    }
  },
  38595: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk,
      e: () => bk
    });
    var Dk = ik(594),
      fk = ik(37318);
    const Sk = 4e4;
    class bk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = kk, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(kk, ek, ik) {
        const Sk = (0, Dk.K)(kk),
          bk = (0, Dk.K)(ek),
          rk = (0, Dk.K)(ik),
          Pk = this.now();
        if (Sk !== this.lastChunkX || bk !== this.lastChunkY || rk !== this.lastChunkZ) {
          this.lastChunkX = Sk, this.lastChunkY = bk, this.lastChunkZ = rk, this.lastChunkId = (0, fk.b)(Sk, bk, rk), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Pk);
          for (const [kk, ek] of this.editedAt) {
            if (ek >= Pk - 3e5) break;
            this.editedAt.delete(kk)
          }
        } else this.editedAt.set(this.lastChunkId, Pk)
      }
      chunksEditedSince(kk) {
        const ek = [];
        for (const [ik, Dk] of this.editedAt) Dk >= kk && ek.push(ik);
        return ek
      }
    }
  },
  38655: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Ye,
      h: () => Oe,
      i: () => ae,
      l: () => ge
    });
    var Dk = ik(3642),
      fk = ik(8607),
      Sk = ik(36233),
      bk = ik(1400),
      rk = ik(36335),
      Pk = ik(38550),
      mk = ik(38542),
      Mk = ik(3693),
      Kk = ik(37469);
    const xk = "ue:",
      nk = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      Uk = "[A-Za-z0-9]{1,24}",
      Hk = new RegExp(`^${Uk}$`);
    new RegExp(`^${xk}(${[...nk,"other"].join("|")}):(?:n|k(${Uk})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function wk(kk, ek, ik, Dk, fk) {
      const Sk = "string" === typeof kk && nk.includes(kk) ? kk : "other";
      let bk = "n";
      return "string" === typeof ek ? bk = Hk.test(ek) ? `k${ek}` : "n" : "number" === typeof ik && Number.isInteger(ik) && ik >= 0 && ik <= 15 && (bk = `b${ik}`), `${xk}${Sk}:${bk}:${Dk?1:0}${fk?1:0}`
    }
    var lk = ik(1642),
      pk = ik(1696);
    let yk = null;

    function Yk(kk) {
      return yk ??= function(kk) {
        try {
          const ek = kk.target,
            ik = ek instanceof Element && ek !== document.body && ek !== document.documentElement && !(0, lk.r)(ek) && !ek.closest("#root"),
            Dk = kk;
          return wk(kk.type, Dk.code, Dk.button, (0, pk.e)(ek), ik)
        } catch {
          return wk(null, null, null, !1, !1)
        }
      }(kk), yk
    }
    var Lk = ik(1218),
      Ck = ik(302),
      Ak = ik(26),
      jk = ik(1911),
      sk = ik(99),
      dk = ik(38),
      Vk = ik(1931),
      Fk = ik(1850),
      uk = ik(2907);
    class qk {
      constructor(kk) {
        this.storeForMs = kk, this.clicks = new uk.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const kk = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < kk;) this.clicks.dequeue()
      }
      getNumClicksInMs(kk) {
        let ek = 0;
        return this.clicks.forEach((ik => {
          ik > Date.now() - kk && ek++
        })), ek
      }
      getMaxClickSeparationInMs(kk) {
        if (0 === this.clicks.size) return this.storeForMs;
        let ek = 0,
          ik = Date.now() - kk;
        this.clicks.forEach((Dk => {
          Dk < Date.now() - kk || (ek = Math.max(ek, Math.abs(Dk - ik)), ik = Dk)
        }));
        const Dk = Math.abs(Date.now() - ik);
        return Math.max(ek, Dk)
      }
    }
    class Ik {
      constructor(kk) {
        this.storeForMs = kk, this.clickDownDurations = new uk.b
      }
      registerClickDownDuration(kk) {
        this.clickDownDurations.enqueue({
          dur: kk,
          atTime: Date.now()
        });
        const ek = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < ek;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(kk) {
        if (kk > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let ek = 0,
          ik = 0;
        return this.clickDownDurations.forEach((Dk => {
          Dk.atTime > Date.now() - kk && (ek++, ik = Math.max(ik, Dk.dur))
        })), `${ek}:${ik}`
      }
    }
    var zk = ik(36018),
      Qk = ik(38662),
      vk = ik(22),
      Ek = ik(2704),
      hk = ik(1302),
      ak = ik(38610),
      Wk = ik(4391),
      tk = ik(131),
      Xk = ik(37746),
      Bk = ik(37962),
      ck = ik(594),
      Tk = ik(36015),
      Zk = ik(11),
      Ok = ik(9020),
      gk = ik(1207),
      Gk = ik(189),
      Nk = ik(38664),
      Rk = ik(38666),
      Jk = ik(37774),
      ke = ik(38682),
      ee = ik(37670),
      ie = ik(3365),
      De = ik(1614),
      fe = ik(36143),
      Se = ik(2752),
      be = ik(38672),
      re = ik(38676),
      Pe = ik(37532);
    const me = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Me() {
      var kk, ek;
      return !(null === (kk = (0, Ek.d)().client) || void 0 === kk || null === (ek = kk.freeCameraController) || void 0 === ek || !ek.movesFly())
    }

    function Ke(kk) {
      const ek = kk.on.bind(kk);
      kk.on = (kk, ik) => {
        Vk.D.has(kk) ? ek(kk, ik) : ek(kk, (ek => {
          var Dk;
          return null !== (Dk = (0, Ek.d)().client) && void 0 !== Dk && Dk.isReplayMode() ? function(kk) {
            return kk in me
          }(kk) && Me() ? ik(ek) : void 0 : ik(ek)
        }))
      }
    }
    const xe = 5e3,
      ne = 1;
    let Ue, He = ne,
      we = 0;
    const le = !0;
    let pe = le;
    jk.c.subscribe("_ignoreBasicBoards", (kk => {
      pe = kk
    })), (0, Dk.onGameReset)((() => {
      pe = le
    }));
    let ye = null;
    const Ye = () => ye;
    let Le, Ce, Ae;
    var je, se, de, Ve, Fe, ue, qe, Ie, ze;
    const Qe = [85, 0, 1, 240, "c", "a", 9, "g", 5, "f", "d", 8, 255, "length", 186, 2, 3, 4, "undefined", void 0, 63, 6, "fromCodePoint", 7, 12, "push", 151, 28, 96, 65, 41, "e", 212, "i", 91, 184, 8191, 88, 13, 14, null, !1, "b", 139, 17, 191, 80, !0];

    function ve(...kk) {
      return kk[Qe[13]] = Qe[2], typeof Ve !== Qe[18] && Ve ? (new Ve).decode(new Fe(kk[Qe[1]])) : typeof ue !== Qe[18] && ue ? ue.from(kk[Qe[1]]).toString("utf-8") : ze(kk[Qe[1]])
    }

    function Ee() {}

    function he() {
      he = function() {}
    }

    function ae(kk) {
      function ek() {
        return kk.mY.jek(kk.Qq)
      }
      Ke(kk.inputs.down), Ke(kk.inputs.up);
      for (const Dk of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const ek = (ek, ik) => {
          var fk, Sk;
          if (Me()) {
            var bk;
            const fk = me[Dk];
            var rk, Pk;
            if (fk) null === (rk = (0, Ek.d)().client) || void 0 === rk || null === (Pk = rk.freeCameraController) || void 0 === Pk || Pk.handlefreeCamKeyPress(fk, ek, ik);
            return void(ik || null !== (bk = (0, Ek.d)().client) && void 0 !== bk && bk.isReplayMode() || (kk.mY.Iek()[Dk] = !1))
          }
          if (null !== (fk = (0, Ek.d)().client) && void 0 !== fk && null !== (Sk = fk.freeCameraController) && void 0 !== Sk && Sk.isKeyPressOverriden(ek)) return;
          kk.mY.Iek()[Dk] = ik
        };
        kk.inputs.down.on(Dk, (kk => ek(kk, !0))), kk.inputs.up.on(Dk, (kk => ek(kk, !1)))
      }
      kk.inputs.down.on("crouch", (() => {
        if (Me()) return;
        if (!kk.bY.canCrouch) return;
        const ek = kk.mY.Iek();
        vk.b.get("clientEscMenuOptions").crouchIsToggle && (ek.crouchToggled = !ek.crouchToggled && !ek.padSneakToggled), ek.padSneakToggled = !1
      }));
      const ik = () => {
        const kk = ek();
        kk.isGun() && kk.inaccuracyCalculator.jump()
      };
      kk.inputs.down.on("jump", (kk => {
        Me() || (ik(), Le(kk))
      }));
      for (const Dk of Vk.l) kk.inputs.down.on(Dk, (kk => {
        var ek, ik;
        null !== (ek = (0, Ek.d)().client) && void 0 !== ek && null !== (ik = ek.freeCameraController) && void 0 !== ik && ik.handlefreeCamKeyPress(Dk, kk, !0) && (kk.preventDefault(), kk.stopPropagation())
      })), kk.inputs.up.on(Dk, (kk => {
        var ek, ik;
        null !== (ek = (0, Ek.d)().client) && void 0 !== ek && null !== (ik = ek.freeCameraController) && void 0 !== ik && ik.handlefreeCamKeyPress(Dk, kk, !1) && (kk.preventDefault(), kk.stopPropagation())
      }));
      kk.inputs.down.on("recordGame", (() => {
        var kk, ek;
        null === (kk = (0, Ek.d)().client) || void 0 === kk || null === (ek = kk.gameRecorder) || void 0 === ek || ek.toggleRecording()
      })), kk.inputs.down.on("recordClip", (() => {
        var kk, ek;
        (0, zk.c)() || null === (kk = (0, Ek.d)().client) || void 0 === kk || null === (ek = kk.gameRecorder) || void 0 === ek || ek.saveClip()
      }));
      for (const Dk of Vk.D) kk.inputs.down.on(Dk, (() => {
        var kk;
        if ((0, Qk.c)()) return;
        if ("replayViewerOpen" === Dk) return void Ak.j.tm("replayViewer|requested", "toggle");
        const ek = null === (kk = (0, Ek.d)().client) || void 0 === kk ? void 0 : kk.gameReplayer;
        ((0, zk.c)() || null !== ek && void 0 !== ek && ek.isReplayMode()) && (null === ek || void 0 === ek || ek.handleAction(Dk))
      }));
      const bk = new qk(3e4),
        Kk = new Ik(4e4);
      let xk = 0;
      const nk = kk => {
          let ek = 0,
            ik = null;
          const Dk = ek => null !== ek && ek === ik && (ik = null, kk(), !0);
          return {
            press: () => (ek++, (0, Nk.e)() || (Dk(ik), ik = ek), ek),
            owns: kk => kk === ik,
            release: Dk
          }
        },
        Uk = (kk, ik) => {
          ik && ge(Lk.e.TouchDownFirePrimary), kk ? Yk() : ((0, Bk.c)(), ek().Cik()), ik || ge(Lk.e.DownFirePrimary), Oe(!0), bk.click();
          const fk = bk.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Sk = bk.getMaxClickSeparationInMs(1e4) < 20,
            rk = bk.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (fk || Sk || rk) {
            let kk;
            if (fk) kk = 30;
            else if (Sk) kk = 50;
            else {
              if (!rk) throw new Error("???");
              kk = 70
            }(0, Dk.sendColyMessage)(Mk.vk, kk)
          }
        },
        Hk = nk((() => {
          const kk = Date.now() - xk;
          Kk.registerClickDownDuration(kk), ek().yik(), ge(Lk.e.UpFirePrimary), Oe(!1);
          const ik = Kk.clickDownDurationsCheck(4e4);
          (0, Dk.sendColyMessage)(Mk.Qg, ik)
        }));
      let wk = 0;
      kk.inputs.down.on("primary-fire", (function(kk) {
        wk = Hk.press(), Hk.owns(wk) && (xk = Date.now(), Math.abs(performance.now() - kk.timeStamp) > 5e3 || (Uk(kk.altKey, "changedTouches" in kk), Le(kk)))
      })), kk.inputs.up.on("primary-fire", (function(kk) {
        Hk.release(wk) && Le(kk, !0)
      }));
      const lk = () => {
          ek().oPk(), ge(Lk.e.DownFireSecondary), Oe(!0), kk.bkk && !kk.bkk.position && (0, mk.f)()
        },
        pk = nk((() => {
          ek().pik(), ge(Lk.e.UpFireSecondary), Oe(!1)
        }));
      let yk = 0;
      kk.inputs.down.on("alt-fire", (function(kk) {
        yk = pk.press(), pk.owns(yk) && (lk(), Le(kk))
      })), kk.inputs.up.on("alt-fire", (function(kk) {
        pk.release(yk) && Le(kk, !0)
      }));
      const Yk = () => ek().gPk();
      kk.inputs.down.on("mid-fire", (() => {
        (0, Nk.e)() || Yk()
      }));
      const dk = kk => {
          (0, Dk.sendColyMessage)(Mk.Ph, kk, !0)
        },
        uk = kk => {
          (0, Dk.sendColyMessage)(Mk.Th, {
            tM: kk,
            XM: tk()
          }, !0)
        };
      for (const Dk of ["SpecialAction1", "SpecialAction2"]) kk.inputs.down.on(Dk, (() => {
        dk(Dk)
      })), kk.inputs.up.on(Dk, (() => {
        uk(Dk)
      }));
      const Wk = () => {
        const kk = ek();
        kk.isGun() && kk.reload(Date.now())
      };
      kk.inputs.down.on("ReloadGun", Wk);
      const tk = () => {
        let ek = "a";
        return kk.physics.testSolid.toString().includes("Tx") || (ek = "b"), ek
      };
      kk.inputs.down.on("OpenInventory", (kk => {
        kk.preventDefault(), (0, De.D)(kk, "inventory", (0, Rk.e)((0, Ek.e)()))
      })), kk.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Xk = kk => {
        Ak.j.tm("DropItemKeyPressed", kk)
      };
      kk.inputs.down.on("DropItem", (() => {
        Xk(kk.mY.Iek().crouch)
      })), kk.inputs.down.on("OpenShop", (ek => {
        (0, zk.c)() || "inGame" === vk.b.get("gameState") && (0, De.A)(ek, Ck.r.SHOP, !(0, fk.c)(kk.bY.shopInfo))
      })), kk.inputs.down.on("OpenLobbyLeaderboard", (ek => {
        (0, zk.c)() || "inGame" === vk.b.get("gameState") && (0, De.A)(ek, Ck.r.LOBBY_LEADERBOARD, (0, re.c)(kk.bY))
      })), kk.inputs.down.on("HideUi", (() => {
        Ak.j.tm("showUi", !1)
      })), kk.inputs.up.on("HideUi", (() => {
        Ak.j.tm("showUi", !0)
      }));
      const ck = kk => {
        0 === kk && (kk = 10), Ak.j.tm("setSelectedInventorySlotI", kk - 1), Ak.j.tm("numkeyPressed", kk)
      };
      for (let Dk = 1; Dk <= 10; Dk++) kk.inputs.down.on("HotBarSlot" + Dk.toString(), (() => {
        ck(Dk)
      }));
      kk.inputs.down.on("OpenTasksAndLeaderboard", (ek => {
        const ik = (0, fe.j)();
        ik ? (0, De.G)(ek, !0, ik) : (0, De.D)(ek, "retentionFeatures", !(!kk.bY._tasks && !kk.bY._availableLeaderboards))
      })), kk.inputs.down.on("OpenCodeEditor", (ek => {
        (0, De.G)(ek, (0, ak.c)((0, hk.c)()), (() => {
          Ak.j.tm("EditLobbyCode", kk.mY.vy(kk.Qq).map(Math.floor))
        }))
      })), kk.inputs.bind("ToggleFullCoordinateOverlay", "F3"), kk.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Ak.j.tm("toggleFullCoordinateOverlay")
      }));
      const Tk = () => {
        (0, Ek.d)().client.cameraController.swapCameraZoom()
      };
      kk.inputs.down.on("SwapCameraZoom", Tk), kk.inputs.down.on("OpenInviteLink", (kk => {
        (0, De.D)(kk, "inviteLink", sk.featureFlags.canUseInviteLinks)
      })), kk.inputs.bind("Y", "KeyY"), kk.inputs.down.on("Y", (kk => {
        (0, zk.c)() || Ak.j.tm("YKeyPressed")
      })), kk.inputs.bind("X", "KeyX"), kk.inputs.down.on("X", (kk => {
        (0, zk.c)() || Ak.j.tm("XKeyPressed")
      })), kk.inputs.down.on("OpenEmoteWheel", (() => {
        Ak.j.tm("requestEmoteWheelHoldOpen")
      })), kk.inputs.up.on("OpenEmoteWheel", (() => {
        Ak.j.tm("requestEmoteWheelHoldRelease")
      })), kk.inputs.down.on("Zoom", (() => {
        if ("inGame" === vk.b.get("gameState")) {
          kk.mY.getState(kk.Qq, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Ek.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), kk.inputs.up.on("Zoom", (() => {
        kk.mY.getState(kk.Qq, "playerCameraAdjustment").zoomKeyPressed = !1
      })), We();
      const Zk = kk => function() {
        return Ce(), kk(...arguments)
      };

      function Ok(kk) {
        "inGame" !== vk.b.get("gameState") || (0, De.w)() || (Ak.j.tm("ctrlCrouchWithoutFullscreen"), kk.preventDefault())
      }
      ye = {
        primaryFireDown: Zk((() => {
          const kk = Hk.press();
          return Hk.owns(kk) && (xk = Date.now(), Uk(!1, !1)), kk
        })),
        primaryFireUp: Zk((kk => {
          Hk.release(kk)
        })),
        altFireDown: Zk((() => {
          const kk = pk.press();
          return pk.owns(kk) && lk(), kk
        })),
        altFireUp: Zk((kk => {
          pk.release(kk)
        })),
        jumpDown: Zk(ik),
        specialActionDown: Zk(dk),
        specialActionUp: Zk(uk),
        reloadGun: Zk(Wk),
        dropItem: Zk(Xk),
        swapCameraZoom: Zk(Tk),
        pickBlock: Zk(Yk)
      }, kk.inputs.down.on("ctrlCrouch", Ok), kk.inputs.up.on("ctrlCrouch", Ok), kk.inputs.bind("ctrlCrouch", "ControlLeft");
      const ke = kk => {
        "inGame" === vk.b.get("gameState") && kk.ctrlKey && !(0, De.w)() && kk.preventDefault()
      };
      document.addEventListener("keydown", ke), document.addEventListener("keyup", ke), document.addEventListener("keypress", ke), kk.inputs.bind("Alt", "AltLeft", "AltRight"), kk.inputs.down.on("Alt", (kk => {
        kk.preventDefault()
      }));
      const Ue = ek => (0, ee.j)(kk, ek),
        we = ek => (0, ee.k)(kk, ek),
        le = [0, 0, 0],
        pe = [0, 0, 1];
      kk.on("afterRender", (ek => {
        (0, Sk.e)(kk.camera.heading), (0, ee.n)(kk, le, pe), (0, Ek.d)().client.triggerGameCallback("onAfterRender", ek, {
          cameraHeading: kk.camera.heading,
          cameraPitch: kk.camera.pitch,
          cameraPosition: le,
          cameraDirection: pe,
          tanHalfFovX: (0, ee.d)(kk),
          tanHalfFovY: Math.tan(kk.yH.kR().fov / 2),
          screenBandPct: {
            x: ie.c,
            y: (0, ie.k)()
          },
          projectWorldPosToScreenPos: Ue,
          projectWorldPosToViewport: we
        })
      })), (0, Se.s)("look") && (kk.camera.yX = (0, be.l)("js"), kk.inputs.eT = be.i), (0, Se.s)("remesh") && (0, Pe.i)(kk), kk.on("beforeInputs", (() => {
        if ((0, Qk.c)()) return kk.inputs.wT.dx = 0, void(kk.inputs.wT.dy = 0);
        if (kk.camera.wT.dx += kk.inputs.wT.dx, kk.camera.wT.dy += kk.inputs.wT.dy, 0 !== kk.inputs.wT.dx || 0 !== kk.inputs.wT.dy) {
          kk.mY.getState(kk.Qq, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        kk.inputs.wT.dx = 0, kk.inputs.wT.dy = 0
      }));
      let Ye = 0;
      const Ae = [0, 0, 0],
        je = [0, 0, 0],
        se = {
          base: Ae,
          max: je
        },
        de = kk => {
          const ek = Gk.g.droppedBlockSize / 2;
          return [0, 1, 2].every((ik => kk[ik] >= Ae[ik] - ek && kk[ik] <= je[ik] + ek))
        };
      kk.on("Px", (function(ek) {
        Ak.j.tm("noaTick", ek);
        const ik = (0, Ek.d)().client;
        if (ik.triggerGameCallback("Px", ek), ik.isClientGameSessionActive()) try {
          Pk.d.Px(ek)
        } catch (bk) {
          console.error("Error ticking audio entities", bk)
        }
        if (!kk.mY.Cek(kk.Qq).isAlive) return;
        Date.now() - Ye > 9e3 && (! function() {
          const kk = (0, Ek.e)();
          "number" === typeof kk.bY.speedMultiplier && "number" === typeof kk.bY.jumpAmount && (0, Dk.sendColyMessage)(Mk.mi, {
            Er: (0, gk.c)(kk.bY.speedMultiplier),
            hr: (0, gk.b)(kk.bY.jumpAmount),
            ar: (0, gk.c)(kk.bY.crouchingSpeed),
            Wr: (0, gk.c)(kk.bY.walkingSpeed),
            tr: (0, gk.c)(kk.bY.runningSpeed),
            Xr: (0, gk.b)(kk.o9),
            Br: kk.mY.vkk(kk.Qq).jumpForce,
            Tr: kk.mY.ZZ(1).width,
            Zr: kk.mY.ZZ(1).height,
            Or: kk.mY.jW(1).Or
          }, !0)
        }(), Ye = Date.now());
        const fk = kk.mY.Iek();
        if ((fk.jump || fk.forward || fk.backward || fk.left || fk.right || fk.sprint) && Ak.j.tm("usedKeyboard"), kk.mY.Sek(kk.Qq) && !0 === kk.bY.canPickUpItems) {
          const ek = kk.mY.vy(kk.Qq),
            ik = (0, Fk.m)(He),
            fk = (0, Fk.p)(He);
          Ae[0] = ek[0] - ik, Ae[1] = ek[1] - .6 * fk, Ae[2] = ek[2] - ik, je[0] = ek[0] + ik, je[1] = ek[1] + Gk.g.Qp + .6 * fk, je[2] = ek[2] + ik;
          const Sk = kk.mY.krk(se, kk.mY.names.autoRotate),
            {
              itemDropPrediction: bk
            } = (0, Ek.d)().client,
            Pk = Dk.offlineInputReplay.holdsInput();
          if (Sk.length > 0)
            for (const Kk of Sk) {
              const ek = kk.mY.getState(Kk, "itemState");
              if (void 0 === ek || Date.now() - ek.creationTime < 500) continue;
              let ik = Kk,
                fk = null;
              if (ek.uf) {
                const kk = bk.pickupTarget(Kk, de, Pk);
                if (null === kk) continue;
                ({
                  br: ik,
                  mr: fk
                } = kk)
              }
              const Sk = kk.mY.getState(ik, "itemState");
              if (Sk.uf && null === fk) continue;
              let xk = 0,
                nk = null,
                Uk = !1;
              if (0 === Sk.amount) Uk = !0;
              else {
                const {
                  amountPickedUp: ek
                } = kk.mY.Dek(kk.Qq).pickUpItem({
                  name: Sk.name,
                  typeObj: Sk.typeObj,
                  amount: Sk.amount,
                  attributes: Sk.attributes
                });
                if (xk = ek, 0 === xk) continue;
                nk = Jk.c.pickUp(Sk, xk), Sk.amount -= xk, Sk.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Sk.amount ? Uk = !0 : Sk.creationTime = Date.now() + xe
              }
              const Hk = (0, Ek.d)().client.inventoryPrediction.record(nk);
              (0, Dk.sendColyMessage)(Mk.Lh, {
                br: null === fk ? ik : "",
                rr: xk,
                Pr: mk.e,
                ub: Hk,
                mr: fk
              }, !0), Uk && (Pk && bk.onPickedUpOffline(ik, Hk, fk), null === fk && kk.mY.deleteEntity(ik));
              rk.b.play("pickUp", Gk.g.pickupSoundVol).rate(1 + Math.random() * Gk.g.pickupSoundRateVariation)
            }
        }
        if (!kk.mY.gkk(kk.Qq)) return;
        const Sk = kk.inputs.wT.tkk;
        if (0 !== Sk) {
          const ek = Sk > 0 ? 1 : -1;
          kk.inputs.state["mid-fire"] || kk.inputs.state.Alt || !kk.bY.useInventory ? (kk.inputs.state["mid-fire"] && Ak.j.tm("requestEmoteWheelClose"), (0, Ek.d)().client.cameraController.handleScrollZoom(ek)) : Ak.j.tm("ScrollInventorySlot", ek)
        }
      })), jk.c.subscribe("droppedItemScale", (kk => {
        He = "number" === typeof kk && isFinite(kk) ? kk : ne
      }))
    }

    function We() {
      const kk = (0, Ek.e)();
      if (kk)
        for (const ek in Vk.u) {
          kk.inputs.unbind(ek);
          for (const ik of Vk.u[ek]) kk.inputs.bind(ek, ik)
        }
    }
    he(je = {}, se = ["_|$p6~%{]W", "bc[5I#q0<n`(n/(|8(&(|ZJgWN(Il`k|?BS(HX94.Lv:N6C=z^*", "DgH^oc2mGZO5QNL,F+m]o~+1e$8!lcFjv0", "kxTXhx[1[W*X?!j=", "{!6vL<fnBopj5&#sBVCs~Eu", 'TI>L<M|"~DZi>hzv!t^JOMPnjZD625', 'rxm(XNtfzH<+G&4fwNF#e~Y{!IEJ=w"jIN}="_v;to', "W9zGD#zv#n$!Cch7qBy^j$=hQNuVikH7FCx#ndnQ(HXS_$UvD0", "wcAj3~lz@9y?f6!|:xE#swwSY(A4dNLD926", "R,?4o~Q3e!S1T*H;W2CL2d)<5nf", "]^<]cZK0L~|Li&$v[BBjm~k;<mBr?!L,s.&%*Bi4yW}@v5ajoktLzg{I[!2(0", "dDKpuOQ36(PfKE[nboEj}N&Hk9s", "qa6pZ4/#bql5h$BWkgj.<[lWTW)@m:]FV(u2", "u.Nv|VoIWN9Xa5", "GVo:}QqvxHGX0", 'wqh=Yg/IZNO"4N9FN!6XYwgPtDWeu', 'd]d,q1W}08"h8duI8Bc(.QNISZu%lkFw#jc.QQxe?g#}^H[,<6tpNc.;0gy"0', 'a6F`;e53topq+Pq"', "dB6/+K~P5", "!Za:CA:4L!FsBiLi[V0", '9k7eV{@0S9+XE3YF6g|26XKfmN^SCCj7k^u%!dH="(fa"x@:/^S^#Eu', "LxR{Yg,miq)@RPBv?B*:E/dz]BP[fKYa;cV/a|3i2", "}x.p`BmI*gXSY*p7", "XMxsSx*7Fmjdwwm=htr}f|x^DnkfJ`", '0f;(zKPfgHkryi*C`vAj&{3;=Z=:5NR,nZ]("eivN42&.c2h@EG(TdK}q9', "[^[,`Xwh/(0e$!|,cC,pfSR+R$4S?:szdc{vQg82`", "K!d/C>8S^n]Et,5=4cK5T<|+RqkBeETw<2x`x@@}~D", "^c?L4Fz45HTen6ca$caJ@Q40", "o{2~hxvdfnxkI5C=Sqkp`X/I{TuY6E<;/CnpGV}n{B_[)QB=Kq6", "[M%slgdzK+mT+9fix(8^1_gA2", '_,o2ma6eMTWddQxIHV)ks$>ZB_]S&XH"+|^o)', "3t4}M_&hqZyp0", "R,D{Sgn3&NP}ANr|jgZ#V~&*sq9qvXk:UM*", ">cqos$tAV({pT,Xw^amkA/S|7DVZD97nG2h][[ZeeqKp0", "}1lp4HoolDg#9Y6I_V)jNH|1T!<+K,Hs9.;(,Kd0@N?]@!wCqu", '"{KJt^zPiH^}z*RwD(]2C>ZPTD1BG&wIGV9(Ugtf&ZO)"KO|#6;:Dx^0', "ZV&=nKkelW.V?HLiYCJ}TQXH4mTcwC1|F,js}BF}NT", "{$*^Z4z}NBVSa5f={B[,UK4P4HR~k&`Cm6b]z$YhjZg", "^x7:[{FPINy03Oc|z1nL2cu", "#jg^&#0nq9s3S:VwCCM{1>Xh0+Hp#9`w)p7XH^U;LBz@h&W,3,aph", "DNk(;(HV0.]_zYB=Ba1j3cX#q.5z#6jWJV4{W", "MWd~01NV;W:D?!`IkaB}b#7h$DJ9LC~;;qA#Ag^;Mrkf25", "VWNvOMRS)Hxii&b&i1n{}~]0", "UsW(XB/#SZ+HOKCCk(G:L/QvP_1$O6*zrN+{.dUW`", 'lo"v/J?z"n?ERxl&JiYov', 'd^c(p#%IAH9eSKmI/co%."F3hD', "+,W:#Z.ee$_fkNLi%T?vE4A3tWi~P!o,oz0eXQu", '>$z]Pkpmj9|@M`rs;gNJ5d7h/Zdi5"Da8sFsgFZfdn&V"cj=d66', '"9#4v$Y{|H$}|:yvwNLvYgz0u.$Sk&Asg6<xFV?fC(h625`t|2O54Zu', "Wp6pyKTnCmdiM`4|L12#9~]3%Z;6tEuhxDq^<w5ntB?]I/<;h|J,,Aivp+", "z2*^`18+q(M#@,M:0+y^}aZP<3kSI5gzs(}%Re!*", "X(FsLc&HPZKJyQ;nXqw[a%wHDgw[1YdC1t8o", '^2(}`XB1u9]or"j7!NS2', "0p(#K$|HqZO/AN3n`k)]tCL=Hq.2|K0WND)}d~i}Rr8]0", "lBe{PYF0XWc[0", '$$v[cVm1>TXk*Qy"g$#L1J|1w3`.B3+,k,Y^:Agfp9', "$Bc2.[?ZiqDCW&9Dwc0", '/cj2wAqv)Ha@,/?jJ_v{<dlA?.QQ"6=WX7KJtYQf;WT60X#:', "J_x[U%+o`m,djx6Cg(<]zPholDEIGc3", ':.h%w]!"P+7~C&eiWNevuO?f^NgTdX[n_cw[^C0n8(/$8iivgu', "UcVvke5eC3!aO6s7tV*", '2fFsBFZ04mihwitwKjO/eKV+lWMc[$ifUE;pyM9d"(6YJNjCQqOj^Ju', "919#*N5;8({km9@:@aF.", "b7Le/C2#z3g[,w}nJ_:L_ZKv;WPrT,9", 'hDF."SPg_3.Xf/ID68d{KBUg/(=h^!kaYMz#NHfP,!e?yQ2', '2,/pHHR=|Ws@~Y"jUs#J&"+*V3J0JctwSu', ".+LXL/gPmg!LgN{i?7~[G#Av5", "_aO,4HS1!I", ">BX2bx4Z$qJ{&:jz/u", "HCJ/)#==N!s", "2(~[>O|=}", 'loe53{@;[q[{]"fiqCG(dQjv]W/rZH0"p.?o}dCg2', "<M0XM_DH<mZ_mKHse!c29gv}Zo)HR6Fw>!xk%Mo#tWC8d`>7a^.e}/90", "]$0e$@a#I(n^0", 'k+sJ|eo=I(FfWcTiSq`~,[[1".', 'S^.=i#d}yD9Y83&:W1HJU%8I[4~`5")a?B/^S"&#(n{4T,3:[^J`5cb1bW', "+xW=QQ]^)Hq_;&*h<7`vs(S2m9", ":x=sew1#4n5^0", "G+J/Ha#VRo;SkiFi~66p_E_=V({{$!szV6A/Gfu", '_WS](ON<1I+X["rsn^6', "bsz#q1)oC3:~r&+Dixh2eBTn7TR8I5VIa2]^<#>08.WX_`", "b]j.zdo=kZ%NSKmzog]^bws#)H[S]h7ji,hk=", '6ZhG=Pw=K.wLK*XjZ$We!Q}0m9&6CX"hAqXk]"e^eWcd?:c:5gr{x{Y#N4M]u', "ftmk$@n3>oFcW&@,;^wso@m114<QJ`2j}g^JVX=#Cn$kic~v,0", ".+9.}@L19Z0e+&azW^IX%[w=u.*:qX;n=v65uFOh>_IhNKjvOu", "vN)~RZ!14mf8Fwen.t<s&QNHp+&qGXLwp1_]>JJvPoB!c9XI!.,:8X1|Q(N", "9Nh2lxzQ@ZP!4&[i]Mc^8{LIcItrD$Da$6/:9KYHvByv0", "%qE#%~@glHEZ:w]F", '4z,X5Q"=$_0q[$whfNDvddSa&.jXV"]jWNi%s#{1K.9qDK$zh0', 'u{~s(Z!h*(zjc:"jz|A{Kxe;u9', "!+[44_90", "}CQW6V2~", "j,!Wl&9~", "vy>@G&w", "8b!WW&D~", ")2.6Qm1x", "He$Uei~P", "kNR0"]), he(de = function(...kk) {
        he(kk[Qe[13]] = Qe[1], kk[Qe[5]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], kk[-Qe[14]] = Qe[19], kk[Qe[15]] = []);
        try {
          he(kk[-Qe[14]] = Object, kk[Qe[15]][Qe[25]]("".__proto__.constructor.name))
        } catch (se) {}
        kk: for (kk[Qe[16]] = Qe[1]; kk[Qe[16]] < kk[Qe[5]][Qe[13]]; kk[Qe[16]]++) try {
          for (kk[-Qe[14]] = kk[Qe[5]][kk[Qe[16]]](), kk[Qe[17]] = Qe[1]; kk[Qe[17]] < kk[Qe[15]][Qe[13]]; kk[Qe[17]]++)
            if (typeof kk[-Qe[14]][kk[Qe[15]][kk[Qe[17]]]] === Qe[18]) continue kk;
          return kk[-Qe[14]]
        } catch (se) {}
        return kk[-Qe[14]] || this
      }() || {}, Ve = de.TextDecoder, Fe = de.Uint8Array, ue = de.hU, qe = de.String || String, Ie = de.Array || Array, ze = function(...kk) {
        return he(kk[Qe[13]] = Qe[1], kk[Qe[5]] = new Ie(128), kk[Qe[26]] = qe[Qe[22]] || qe.fromCharCode, kk[Qe[4]] = []),
          function(...ek) {
            for (he(ek[Qe[13]] = Qe[2], ek[Qe[5]] = Qe[19], ek[Qe[15]] = Qe[19], ek[Qe[4]] = ek[Qe[1]][Qe[13]], kk[Qe[4]][Qe[13]] = Qe[1]), ek[Qe[17]] = Qe[1]; ek[Qe[17]] < ek[Qe[4]];) he(ek[Qe[15]] = ek[Qe[1]][ek[Qe[17]]++], ek[Qe[15]] <= 127 ? ek[Qe[5]] = ek[Qe[15]] : ek[Qe[15]] <= 223 ? ek[Qe[5]] = (31 & ek[Qe[15]]) << Qe[21] | ek[Qe[1]][ek[Qe[17]]++] & Qe[20] : ek[Qe[15]] <= 239 ? ek[Qe[5]] = (15 & ek[Qe[15]]) << Qe[24] | (ek[Qe[1]][ek[Qe[17]]++] & Qe[20]) << Qe[21] | ek[Qe[1]][ek[Qe[17]]++] & Qe[20] : qe[Qe[22]] ? ek[Qe[5]] = (ek[Qe[15]] & Qe[23]) << 18 | (ek[Qe[1]][ek[Qe[17]]++] & Qe[20]) << Qe[24] | (ek[Qe[1]][ek[Qe[17]]++] & Qe[20]) << Qe[21] | ek[Qe[1]][ek[Qe[17]]++] & Qe[20] : (ek[Qe[5]] = Qe[20], ek[Qe[17]] += Qe[16]), kk[Qe[4]][Qe[25]](kk[Qe[5]][ek[Qe[5]]] || (kk[Qe[5]][ek[Qe[5]]] = kk[Qe[26]](ek[Qe[5]]))));
            return kk[Qe[4]].join("")
          }
      }()),
      function(...kk) {
        return kk[Qe[13]] = Qe[2], typeof je[kk[Qe[1]]] === Qe[18] ? je[kk[Qe[1]]] = function(...kk) {
          for (he(kk[Qe[13]] = Qe[2], kk[Qe[5]] = 'u0*6`52}o.LT+3!9&WInDr)zhi,:sv=jpGaf"CwF|;7tRM1Pck/^#4(~_gH$N>BZmq8?VdExX]{e[J%@SQYKOA<Ubly', kk[-Qe[0]] = "" + (kk[Qe[1]] || ""), kk[Qe[4]] = kk[-Qe[0]].length, kk[Qe[10]] = [], kk[Qe[8]] = Qe[1], kk[Qe[9]] = Qe[1], kk[Qe[7]] = -Qe[2]), kk[Qe[3]] = Qe[1]; kk[Qe[3]] < kk[Qe[4]]; kk[Qe[3]]++)
            if (kk[Qe[6]] = kk[Qe[5]].indexOf(kk[-Qe[0]][kk[Qe[3]]]), kk[Qe[6]] !== -Qe[2])
              if (kk[Qe[7]] < Qe[1]) kk[Qe[7]] = kk[Qe[6]];
              else {
                he(kk[Qe[7]] += kk[Qe[6]] * Qe[34], kk[Qe[8]] |= kk[Qe[7]] << kk[Qe[9]], kk[Qe[9]] += (kk[Qe[7]] & Qe[36]) > Qe[37] ? Qe[38] : Qe[39]);
                do {
                  he(kk[Qe[10]].push(kk[Qe[8]] & Qe[12]), kk[Qe[8]] >>= Qe[11], kk[Qe[9]] -= Qe[11])
                } while (kk[Qe[9]] > Qe[23]);
                kk[Qe[7]] = -Qe[2]
              } return kk[Qe[7]] > -Qe[2] && kk[Qe[10]].push((kk[Qe[8]] | kk[Qe[7]] << kk[Qe[9]]) & Qe[12]), ve(kk[Qe[10]])
        }(se[kk[Qe[1]]]) : je[kk[Qe[1]]]
      }(90) in Ee && function(...kk) {
        he(kk[Qe[13]] = Qe[1], kk[Qe[29]] = function(...kk) {
          for (he(kk[Qe[13]] = Qe[2], kk[-Qe[27]] = kk[Qe[1]].length, kk[-Qe[28]] = [], kk[Qe[16]] = Qe[1]), kk[Qe[17]] = Qe[1]; kk[Qe[17]] < kk[-Qe[27]]; kk[Qe[17]]++) kk[-Qe[28]].push(kk[Qe[17]] !== Qe[1] && kk[Qe[1]][kk[Qe[17]]] > kk[Qe[1]][kk[Qe[17]] - Qe[2]] ? kk[-Qe[28]][kk[Qe[17]] - Qe[2]] + Qe[2] : Qe[2]);
          for (kk[Qe[8]] = kk[-Qe[27]] - Qe[2]; kk[Qe[8]] >= Qe[1]; kk[Qe[8]]--) kk[Qe[8]] !== kk[-Qe[27]] - Qe[2] && kk[Qe[1]][kk[Qe[8]]] > kk[Qe[1]][kk[Qe[8]] + Qe[2]] && (kk[-Qe[28]][kk[Qe[8]]] = Math.max(kk[-Qe[28]][kk[Qe[8]]], kk[-Qe[28]][kk[Qe[8]] + Qe[2]] + Qe[2])), kk[Qe[16]] += kk[-Qe[28]][kk[Qe[8]]];
          return kk[Qe[16]]
        }, console.log(kk[Qe[29]]))
      }(), he(Ae = (...kk) => {
        he(kk[Qe[13]] = Qe[2], kk[-Qe[30]] = Qe[1]);
        for (const ek in kk[Qe[1]]) kk[-Qe[30]]++;
        return kk[-Qe[30]]
      }, Ce = () => {
        we++ === Qe[8] && ((Qe[1], dk.h)() && (Qe[1], Kk[Qe[31]])("4 "), we = Qe[1])
      }), Le = function(kk) {
        function ek(...kk) {
          return kk[Qe[13]] = Qe[2], typeof je[kk[Qe[1]]] === Qe[18] ? je[kk[Qe[1]]] = function(...kk) {
            for (he(kk[Qe[13]] = Qe[2], kk[Qe[5]] = 'wx~z=1]6u_}R24H,Md8"!n?jfp9)Dah;TtVBimq|*`LQ[E3e7YUA$@/XIJ+vb5yCFcZ(%rNgK0soSWl#G&:O><.P^k{', kk[Qe[15]] = "" + (kk[Qe[1]] || ""), kk[Qe[16]] = kk[Qe[15]].length, kk[Qe[10]] = [], kk[Qe[31]] = Qe[1], kk[Qe[35]] = Qe[1], kk[Qe[23]] = -Qe[2]), kk[Qe[32]] = Qe[1]; kk[Qe[32]] < kk[Qe[16]]; kk[Qe[32]]++)
              if (kk[Qe[33]] = kk[Qe[5]].indexOf(kk[Qe[15]][kk[Qe[32]]]), kk[Qe[33]] !== -Qe[2])
                if (kk[Qe[23]] < Qe[1]) kk[Qe[23]] = kk[Qe[33]];
                else {
                  he(kk[Qe[23]] += kk[Qe[33]] * Qe[34], kk[Qe[31]] |= kk[Qe[23]] << kk[Qe[35]], kk[Qe[35]] += (kk[Qe[23]] & Qe[36]) > Qe[37] ? Qe[38] : Qe[39]);
                  do {
                    he(kk[Qe[10]].push(kk[Qe[31]] & Qe[12]), kk[Qe[31]] >>= Qe[11], kk[Qe[35]] -= Qe[11])
                  } while (kk[Qe[35]] > Qe[23]);
                  kk[Qe[23]] = -Qe[2]
                } return kk[Qe[23]] > -Qe[2] && kk[Qe[10]].push((kk[Qe[31]] | kk[Qe[23]] << kk[Qe[35]]) & Qe[12]), ve(kk[Qe[10]])
          }(se[kk[Qe[1]]]) : je[kk[Qe[1]]]
        }
        if (ek(Qe[34]), Qe[31], (arguments[ek(92)] > Qe[2] && arguments[Qe[2]] !== Qe[19] ? arguments[Qe[2]] : Qe[41]) && (Qe[1], ke[Qe[31]])(kk)) return;
        const ik = window[ek(93)];
        if (typeof ik !== ek(94) + "on" || kk instanceof ik || (Qe[1], Zk.B)(kk)) {
          function Dk(...kk) {
            for (he(kk[Qe[13]] = Qe[2], kk[Qe[2]] = '#AP:rYdf0QBDV`/Nv%jGx|hEZs!W{mlk<[gcI^1$L@"2FJ=5~8K*U(eH&OX,wpTu+a>6Cyo;z49R73)}SqiMt.]b?n_', kk[Qe[42]] = "" + (kk[Qe[1]] || ""), kk[Qe[16]] = kk[Qe[42]].length, kk[Qe[44]] = [], kk[Qe[31]] = Qe[1], kk[-Qe[32]] = Qe[1], kk[-Qe[43]] = -Qe[2]), kk[Qe[11]] = Qe[1]; kk[Qe[11]] < kk[Qe[16]]; kk[Qe[11]]++)
              if (kk[Qe[6]] = kk[Qe[2]].indexOf(kk[Qe[42]][kk[Qe[11]]]), kk[Qe[6]] !== -Qe[2])
                if (kk[-Qe[43]] < Qe[1]) kk[-Qe[43]] = kk[Qe[6]];
                else {
                  he(kk[-Qe[43]] += kk[Qe[6]] * Qe[34], kk[Qe[31]] |= kk[-Qe[43]] << kk[-Qe[32]], kk[-Qe[32]] += (kk[-Qe[43]] & Qe[36]) > Qe[37] ? Qe[38] : Qe[39]);
                  do {
                    he(kk[Qe[44]].push(kk[Qe[31]] & Qe[12]), kk[Qe[31]] >>= Qe[11], kk[-Qe[32]] -= Qe[11])
                  } while (kk[-Qe[32]] > Qe[23]);
                  kk[-Qe[43]] = -Qe[2]
                } return kk[-Qe[43]] > -Qe[2] && kk[Qe[44]].push((kk[Qe[31]] | kk[-Qe[43]] << kk[-Qe[32]]) & Qe[12]), ve(kk[Qe[44]])
          }

          function fk(...kk) {
            return kk[Qe[13]] = Qe[2], typeof je[kk[Qe[1]]] === Qe[18] ? je[kk[Qe[1]]] = Dk(se[kk[Qe[1]]]) : je[kk[Qe[1]]]
          }

          function Sk(...kk) {
            he(kk[Qe[13]] = Qe[1], kk[Qe[5]] = function(...ek) {
              return ek[Qe[13]] = Qe[15], kk[Qe[42]]({}, ek[Qe[1]], ek[Qe[2]])
            }, kk[Qe[42]] = function(...ek) {
              if (he(ek[Qe[13]] = Qe[16], ek[Qe[45]] = {}), ek[Qe[1]][ek[Qe[2]] + ek[Qe[15]]] !== Qe[19]) return ek[Qe[1]][ek[Qe[2]] + ek[Qe[15]]];
              if (ek[Qe[2]] === ek[Qe[15]]) return Qe[47];
              for (ek[Qe[17]] = Qe[1]; ek[Qe[17]] < ek[Qe[2]].length; ek[Qe[17]]++) ek[Qe[45]][ek[Qe[2]][ek[Qe[17]]]] === Qe[19] && (ek[Qe[45]][ek[Qe[2]][ek[Qe[17]]]] = Qe[1]), ek[Qe[45]][ek[Qe[15]][ek[Qe[17]]]] === Qe[19] && (ek[Qe[45]][ek[Qe[15]][ek[Qe[17]]]] = Qe[1]), he(ek[Qe[45]][ek[Qe[2]][ek[Qe[17]]]]++, ek[Qe[45]][ek[Qe[15]][ek[Qe[17]]]]--);
              for (ek[-Qe[46]] in ek[Qe[45]])
                if (ek[Qe[45]][ek[-Qe[46]]] !== Qe[1]) return ek[Qe[1]][ek[Qe[2]] + ek[Qe[15]]] = Qe[41], Qe[41];
              for (ek[Qe[10]] = Qe[2]; ek[Qe[10]] < ek[Qe[2]].length; ek[Qe[10]]++)
                if (kk[Qe[42]](ek[Qe[1]], ek[Qe[2]].substr(Qe[1], ek[Qe[10]]), ek[Qe[15]].substr(Qe[1], ek[Qe[10]])) && kk[Qe[42]](ek[Qe[1]], ek[Qe[2]].substr(ek[Qe[10]]), ek[Qe[15]].substr(ek[Qe[10]])) || kk[Qe[42]](ek[Qe[1]], ek[Qe[2]].substr(Qe[1], ek[Qe[10]]), ek[Qe[15]].substr(ek[Qe[15]].length - ek[Qe[10]])) && kk[Qe[42]](ek[Qe[1]], ek[Qe[2]].substr(ek[Qe[10]]), ek[Qe[15]].substr(Qe[1], ek[Qe[15]].length - ek[Qe[10]]))) return ek[Qe[1]][ek[Qe[2]] + ek[Qe[15]]] = Qe[47], Qe[47];
              return ek[Qe[1]][ek[Qe[2]] + ek[Qe[15]]] = Qe[41], Qe[41]
            }, console.log(kk[Qe[5]]))
          }
          ek(95) + "V" in Ee && Sk(), kk[fk(Qe[28]) + fk(97)] === Qe[41] ? (Qe[1], Kk[Qe[31]])("2 " + Yk(kk)) : Ae(kk) < 10 ? (Qe[1], Kk[Qe[31]])("3 ") : Ce()
        } else(Qe[1], Kk[Qe[31]])("5 ")
      }, Ak.j.subscribe("customBindingsChanged", (() => {
        We()
      }));
    let te = !1,
      Xe = !1;
    const Be = () => te || Xe && Wk.b.isInGame(),
      ce = kk => {
        Be() && kk.preventDefault()
      };
    Ak.j.subscribe("displaymodeFullscreenChange", (kk => {
      Te()
    })), Ak.j.subscribe("pointerLockUpdate", (kk => {
      te = kk, Te(), oe()
    })), Ak.j.subscribe("freeCursorUpdate", (kk => {
      Xe = kk, Te(), oe()
    }));
    const Te = () => {
        window.removeEventListener("wheel", ce), tk.j && !(0, bk.m)() && (te || Xe) && window.addEventListener("wheel", ce, {
          passive: !1
        })
      },
      oe = () => {
        window.removeEventListener("wheel", Ze), (te || Xe) && window.addEventListener("wheel", Ze, {
          passive: !1
        })
      },
      Ze = kk => {
        !0 === kk.ctrlKey && Be() && kk.preventDefault()
      };

    function Oe(kk) {
      Ak.j.tm("QTEMouseState", {
        isDown: kk
      })
    }

    function ge(kk) {
      var ek, ik, fk, Sk, bk, rk, Pk, mk;
      const Kk = (0, Ek.e)();
      Kk.bkk = null !== (ek = function(kk, ek) {
        var ik, Dk;
        if (!pe) return null;
        const fk = kk.bloxd;
        Ue ??= fk.getMetaInfo("Board").rootId;
        const Sk = null !== (ik = null === ek || void 0 === ek ? void 0 : ek.PJ) && void 0 !== ik ? ik : null;
        if (!Sk || fk.getMetaInfo(Sk).rootId !== Ue) return null;
        const bk = null !== (Dk = null === ek || void 0 === ek ? void 0 : ek.position) && void 0 !== Dk ? Dk : null;
        if (fk.playerCanChangePos(kk.Qq, bk[0], bk[1], bk[2])) return null;
        const rk = (kk, ek, ik) => {
          const Dk = fk.blockDataOwner.getBlockData(kk, ek, ik),
            Sk = null === Dk || void 0 === Dk ? void 0 : Dk.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Xk.singleLineBoardActions.has(Sk)
        };
        if (rk(bk[0], bk[1], bk[2])) return null;
        let Pk;
        kk.Ykk && (Pk = [...kk.Ykk], kk.iN(Pk, Pk));
        const mk = (Pk ? kk.camera.RZ : 0) + fk.getBlockReach(kk.Qq);
        return kk.pickBlock(Pk, kk.Lkk, mk, ((ek, ik, Dk, Sk) => 0 !== ek && ("Board" !== fk.getMetaInfo(ek).rootName || fk.playerCanChangePos(kk.Qq, ik, Dk, Sk) || rk(ik, Dk, Sk))))
      }(Kk, Kk.bkk)) && void 0 !== ek ? ek : Kk.bkk;
      const xk = null !== (ik = null === (fk = Kk.bkk) || void 0 === fk ? void 0 : fk.position) && void 0 !== ik ? ik : null,
        nk = null !== (Sk = Kk.Lkk) && void 0 !== Sk ? Sk : Kk.camera.yN(),
        Uk = Ek.h.localPlayerPickActionHelper.getPickEntityResult(nk),
        Hk = null !== (bk = Kk.bkk) && void 0 !== bk && bk.PJ ? (0, Ok.e)(Kk.bkk.PJ) : "Air",
        wk = kk === Lk.e.UpFirePrimary || kk === Lk.e.UpFireSecondary,
        lk = wk ? "onPlayerClickUp" : "onPlayerClick",
        pk = wk ? kk === Lk.e.UpFireSecondary : kk === Lk.e.DownFireSecondary,
        yk = !wk && (0, Dk.getWasDoubleClick)();
      Ak.j.tm("mouseState", {
        Yr: kk,
        isDown: !wk
      }), (0, Dk.sendColyMessage)(Mk.Gh, {
        Yr: kk,
        Lr: yk,
        hb: xk,
        ab: Uk
      }, !0), (0, Ek.d)().client.triggerGameCallback(lk, Kk.Qq, pk, null !== (rk = null === xk || void 0 === xk ? void 0 : xk[0]) && void 0 !== rk ? rk : null, null !== (Pk = null === xk || void 0 === xk ? void 0 : xk[1]) && void 0 !== Pk ? Pk : null, null !== (mk = null === xk || void 0 === xk ? void 0 : xk[2]) && void 0 !== mk ? mk : null, Hk, Uk)
    }
    window.addEventListener("keydown", (kk => {
      ["ArrowUp", "ArrowDown"].includes(kk.key) && kk.preventDefault()
    })), document.addEventListener("keydown", (kk => {
      (0, Tk.e)(kk, (() => {
        const kk = (0, Ek.e)();
        return (0, ck.F)(kk) || !1 !== kk.bY.canCustomiseChar
      }))
    }))
  },
  38664: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      g: () => bk
    });
    var Dk = ik(38021);
    let fk = !1;

    function Sk() {
      return fk
    }

    function bk(kk) {
      fk = kk, kk ? Dk.h.setMultiplierType("emoteWheel", 0) : Dk.h.removeMultiplier("emoteWheel")
    }
  },
  38666: (kk, ek, ik) => {
    function Dk(kk) {
      return Boolean(kk.bY.useInventory && kk.bY.useFullInventory && kk.mY.Sek(kk.Qq))
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  38570: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      h: () => fk
    });
    var Dk = ik(36747);

    function fk(kk, ek) {
      return {
        replayedClipName: kk,
        replayedClipAgeSeconds: ek
      }
    }

    function Sk(kk, ek, ik, fk, Sk) {
      const bk = function(kk) {
          if ("object" !== typeof kk || null === kk) return null;
          const {
            replayedClipName: ek,
            replayedClipAgeSeconds: ik
          } = kk;
          return "string" === typeof ek && "number" === typeof ik ? {
            Fi: ek,
            ui: ik
          } : null
        }(ik),
        rk = null === bk ? ik : null,
        {
          Fi: Pk = null,
          ui: mk = 0
        } = null !== bk && void 0 !== bk ? bk : {};
      kk.animateEntity(ek, Dk.g.Custom, rk, fk, Sk, Pk, mk)
    }
  },
  38575: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Uk,
      g: () => Mk,
      h: () => nk,
      l: () => xk,
      m: () => Hk,
      q: () => Kk
    });
    var Dk = ik(38583),
      fk = ik(36840),
      Sk = ik(3642),
      bk = ik(1895),
      rk = ik(26),
      Pk = ik(2704);
    const mk = new Dk.d;

    function Mk() {
      return mk
    }

    function Kk() {
      mk.clear()
    }

    function xk() {
      for (const kk of mk.ids()) {
        const ek = mk.getName(kk);
        void 0 !== ek && bk.c.delete(ek)
      }
      Kk(), rk.j.tm("playerRosterChanged", mk.ids())
    }

    function nk(kk, ek) {
      var ik, Dk;
      if (mk.has(kk)) return mk.getSetting(kk, ek);
      const fk = (0, Pk.e)();
      return null === (ik = fk.zq[fk.Qq]) || void 0 === ik || null === (Dk = ik[kk]) || void 0 === Dk ? void 0 : Dk[ek]
    }

    function Uk(kk) {
      const {
        added: ek,
        removed: ik,
        settingChanges: Dk
      } = mk.apply(kk);
      for (const {
          playerId: fk,
          name: Sk
        }
        of ik) void 0 === Sk || wk(fk) || bk.c.delete(Sk);
      for (const {
          playerId: Sk,
          settings: bk
        }
        of Dk)
        if (wk(Sk)) Hk(Sk, bk);
        else
          for (const kk in bk)(0, fk.g)(Sk, kk, bk[kk]);
      (ek.length > 0 || ik.length > 0) && rk.j.tm("playerRosterChanged", mk.ids())
    }

    function Hk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mk.getSettings(kk);
      if (ek) {
        (0, fk.d)(kk);
        for (const ik in ek)(0, fk.b)(kk, ik, ek[ik])
      }
    }

    function wk(kk) {
      return kk === (0, Pk.e)().ykk || (0, Pk.d)().client.hasEntity(kk)
    }(0, Sk.onGameReset)(Kk)
  },
  37670: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => dk,
      f: () => Ck,
      j: () => jk,
      k: () => sk,
      n: () => Vk
    });
    var Dk = ik(36690),
      fk = ik(37679),
      Sk = ik(330),
      bk = ik.n(Sk),
      rk = ik(3365);
    const Pk = new Dk.eH,
      mk = new Dk.eH,
      Mk = new Dk.eH,
      Kk = new Dk.eH,
      xk = new Dk.eH,
      nk = [0, 0, 0],
      Uk = {
        x: 0,
        y: 0
      },
      Hk = new Dk.eH(1, 0, 0),
      wk = new Dk.eH(0, 1, 0),
      lk = Dk.Matrix.Identity(),
      pk = new Dk.Matrix,
      yk = new Dk.Matrix,
      Yk = new Dk.eH,
      Lk = new fk.b(0, 0, 0, 0);

    function Ck(kk, ek) {
      var ik, fk;
      const Sk = Ak(kk, ek);
      if (Sk) {
        const kk = Sk.x,
          ek = Sk.y,
          ik = kk - 50,
          Dk = ek - 50;
        return Math.abs(ik) <= rk.c && Math.abs(Dk) <= (0, rk.k)() ? {
          x: kk,
          y: ek
        } : uk(ik, Dk)
      }
      Mk.Z6(ek[0], ek[1], ek[2]),
        function(kk) {
          const ek = kk.yH.wik(),
            ik = ek ? Dk.Matrix.FromArrayToRef(ek.worldMatrix, 0, yk) : kk.yH.XF().activeCamera.getWorldMatrix();
          Dk.eH.TransformNormalToRef(Hk, ik, Kk), Kk.normalize(), Dk.eH.TransformNormalToRef(wk, ik, xk), xk.normalize()
        }(kk);
      const bk = Dk.eH.Dot(Mk, Kk);
      let Pk = -Dk.eH.Dot(Mk, xk);
      Math.abs(bk) < .001 && Math.abs(Pk) < .001 && (Pk = -1);
      const mk = null !== (ik = null === (fk = kk.yH.wik()) || void 0 === fk ? void 0 : fk.projectionMatrix) && void 0 !== ik ? ik : kk.yH.XF().activeCamera.getProjectionMatrix().m;
      return uk(bk * mk[0], Pk * mk[5])
    }

    function Ak(kk, ek) {
      const ik = kk.yH.XF(),
        fk = ik.JU(),
        Sk = fk.getRenderWidth(),
        bk = fk.getRenderHeight();
      Lk.width = Sk, Lk.height = bk;
      const rk = kk.yH.wik(),
        Mk = rk ? Yk.Z6(rk.eye[0], rk.eye[1], rk.eye[2]) : kk.yH.camera.globalPosition;
      Pk.Z6(Mk.x + 10 * ek[0], Mk.y + 10 * ek[1], Mk.z + 10 * ek[2]);
      const Kk = rk ? Dk.Matrix.FromArrayToRef(rk.viewProjectionMatrix, 0, pk) : ik.getTransformMatrix();
      return Dk.eH.ProjectToRef(Pk, lk, Kk, Lk, mk), mk.z < 0 || mk.z > 1 ? null : (Uk.x = mk.x / Sk * 100, Uk.y = mk.y / bk * 100, Uk)
    }

    function jk(kk, ek) {
      return Ck(kk, Fk(kk, ek))
    }

    function sk(kk, ek) {
      const ik = Ak(kk, Fk(kk, ek));
      return ik && {
        x: ik.x,
        y: ik.y
      }
    }

    function dk(kk) {
      var ek, ik;
      return 1 / (null !== (ek = null === (ik = kk.yH.wik()) || void 0 === ik ? void 0 : ik.projectionMatrix[0]) && void 0 !== ek ? ek : kk.yH.XF().activeCamera.getProjectionMatrix().m[0])
    }

    function Vk(kk, ek, ik) {
      const Dk = kk.yH.wik(),
        fk = Dk ? Dk.worldMatrix : kk.yH.XF().activeCamera.getWorldMatrix().m,
        Sk = kk.Xx;
      for (let bk = 0; bk < 3; bk++) ek[bk] = fk[12 + bk] + Sk[bk], ik[bk] = fk[8 + bk];
      bk().normalize(ik, ik)
    }

    function Fk(kk, ek) {
      const ik = kk.Xx,
        Dk = kk.yH.wik(),
        fk = Dk ? Yk.Z6(Dk.eye[0], Dk.eye[1], Dk.eye[2]) : kk.yH.camera.globalPosition;
      return nk[0] = ek[0] - ik[0] - fk.x, nk[1] = ek[1] - ik[1] - fk.y, nk[2] = ek[2] - ik[2] - fk.z, bk().normalize(nk, nk), nk
    }

    function uk(kk, ek) {
      return (0, rk.g)(kk, ek, rk.c, (0, rk.k)())
    }
  },
  38550: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => xk
    });
    var Dk = ik(189),
      fk = ik(330),
      Sk = ik.n(fk),
      bk = ik(36335),
      rk = ik(36341),
      Pk = ik(2704);
    const mk = Dk.g.Qp * Dk.g.playerEyeToHeightRatio,
      Mk = 250,
      Kk = 1.1,
      xk = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(kk, ek) {
          this.entities.set(kk, ek)
        }
        update(kk, ek) {
          const ik = this.entities.get(kk);
          this.entities.set(kk, ek);
          const Dk = this.playing.get(kk);
          Dk && (ik && ik.soundName === ek.soundName ? (Dk.sound.setRelativeVolume(ek.volume), Dk.sound.rate(ek.rate), Dk.sound.setPannerAttr({
            refDistance: ek.refDistance
          })) : this.stopEntity(kk))
        }
        remove(kk) {
          this.stopEntity(kk), this.entities.delete(kk)
        }
        Px(kk) {
          this.msSinceLastScan += kk, this.msSinceLastScan < Mk || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(kk) {
          const ek = this.playing.get(kk);
          ek && (ek.sound.stop(), this.playing.delete(kk))
        }
        startEntity(kk, ek, ik) {
          const Dk = (0, rk.g)(ek.soundName);
          if (!Dk) return console.error(`AudioEntityManager: no sound found for "${ek.soundName}", dropping audio entity ${kk}`), void this.remove(kk);
          const fk = bk.b.play(Dk, ek.volume, ik, ek.maxHearDist, ek.refDistance, !0);
          fk.rate(ek.rate), this.playing.set(kk, {
            sound: fk,
            lastPos: Sk().clone(ik)
          })
        }
        scan() {
          const kk = (0, Pk.e)();
          if (!kk) return;
          const ek = kk.mY.vy(kk.Qq);
          if (ek)
            for (const [ik, Dk] of this.entities) {
              if (!kk.mY.lkk(ik, "position")) continue;
              const fk = kk.mY.vy(ik),
                bk = Sk().sqrDist(ek, fk),
                rk = this.playing.get(ik);
              if (rk) {
                const kk = Dk.maxHearDist * Kk;
                bk > kk * kk ? this.stopEntity(ik) : Sk().equals(fk, rk.lastPos) || (rk.sound.setPosition([fk[0], fk[1] + mk, fk[2]]), Sk().copy(rk.lastPos, fk))
              } else bk <= Dk.maxHearDist * Dk.maxHearDist && this.startEntity(ik, Dk, fk)
            }
        }
      }
  },
  38606: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => fk
    });
    var Dk = ik(26);

    function fk(kk) {
      return "refetchCode" === kk || "devDownloadJson" === kk || kk.startsWith("Plugin")
    }

    function Sk(kk, ek) {
      "refetchCode" !== kk ? "Plugin|MobAiPlugin|ShowPetUi" !== kk ? Promise.all([ik.e(107), ik.e(108), ik.e(103), ik.e(105), ik.e(215)]).then((() => ik(41313))).then((ik => {
        let {
          runClientGameMessage: Dk
        } = ik;
        Dk(kk, ek)
      })).catch((ek => {
        console.error(`Game message ${kk} failed`, ek)
      })) : Dk.j.tm("showPetUi", ek) : Dk.j.tm("refetchCode")
    }
  },
  38593: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Mk
    });
    var Dk = ik(1207),
      fk = ik(1311),
      Sk = ik(22),
      bk = ik(1291),
      rk = ik(1302),
      Pk = ik(1479),
      mk = ik(35995);

    function Mk(kk) {
      let {
        Ne: ek,
        Je: ik
      } = kk;
      const Mk = null !== ek && void 0 !== ek ? ek : (0, rk.c)().gameNameWithVariation;
      (0, Dk.G)(Mk) && ((0, mk.k)(), (0, bk.$)((() => {
        console.log("Received matchmaking order from game server to game", ek), (0, Sk.j)("inGameReplay"), (0, Pk.navigatePreserveSearch)((0, fk.d)(Mk, null !== ik && void 0 !== ik ? ik : void 0))
      }), "video_start"))
    }
  },
  38590: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Pk,
      e: () => bk,
      f: () => rk,
      h: () => mk
    });
    var Dk = ik(26),
      fk = ik(1333);
    const Sk = new Map;

    function bk(kk, ek) {
      Dk.j.tm("newUiRequest", {
        id: kk,
        clientParameters: ek
      }, !0)
    }

    function rk(kk) {
      Dk.j.tm("removeUiRequest", kk, !0);
      const ek = Sk.get(kk);
      ek && (ek.tearDownNotification(), Sk.delete(kk))
    }

    function Pk() {
      Dk.j.tm("clearUiRequests");
      for (const kk of Sk.values()) kk.tearDownNotification();
      Sk.clear()
    }

    function mk(kk, ek, ik) {
      const Dk = fk.NotificationProvider.showPromptPopup({
        title: ek,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Sk.set(kk, Dk), Dk.getResult().then((ek => {
        Sk.delete(kk), "notificationTornDown" !== ek && ik(ek)
      }))
    }
  },
  38610: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      f: () => Pk,
      h: () => mk
    });
    var Dk = ik(1207),
      fk = ik(996),
      Sk = ik(36463),
      bk = ik(26);

    function rk(kk) {
      let {
        lobbyName: ek,
        gameNameWithVariation: ik
      } = kk;
      return !(0, Dk.I)(ek) || null !== ik && (ik.startsWith("testGym") || (0, fk.j)(ik))
    }

    function Pk(kk) {
      return kk.vf === Sk.e.Leave || kk.vf === Sk.e.Cursor
    }

    function mk(kk) {
      bk.j.tm("codeCollab", {
        type: kk.vf,
        docKey: kk.Ef,
        version: kk.hf,
        editorCount: kk.af,
        peers: kk.Wf,
        updates: kk.tf,
        playerId: kk.Xf,
        playerName: kk.Bf,
        colour: kk.Tf,
        anchor: kk.Zf,
        head: kk.gf,
        existingCursors: kk.Gf,
        files: kk.Nf,
        engineSettings: kk.Rf
      })
    }
  },
  38583: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      constructor() {
        this.members = new Map
      }
      apply(kk) {
        const ek = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Dk of kk.ri) {
          let kk = this.members.get(Dk.Pi);
          if (kk || (kk = {
              name: null,
              settings: {}
            }, this.members.set(Dk.Pi, kk), ek.added.push(Dk.Pi)), null !== Dk.mi && (kk.name = Dk.mi), null !== Dk.Mi || Dk.Ki.length > 0) {
            const ik = null === Dk.Mi ? {} : JSON.parse(Dk.Mi);
            Object.assign(kk.settings, ik);
            for (const ek of Dk.Ki) delete kk.settings[ek], ik[ek] = void 0;
            ek.settingChanges.push({
              playerId: Dk.Pi,
              settings: ik
            })
          }
        }
        for (const Dk of kk.xi) {
          const kk = this.members.get(Dk);
          var ik;
          if (kk) this.members.delete(Dk), ek.removed.push({
            playerId: Dk,
            name: null !== (ik = kk.name) && void 0 !== ik ? ik : void 0
          })
        }
        return ek
      }
      has(kk) {
        return this.members.has(kk)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(kk) {
        var ek, ik;
        return null !== (ek = null === (ik = this.members.get(kk)) || void 0 === ik ? void 0 : ik.name) && void 0 !== ek ? ek : void 0
      }
      getSettings(kk) {
        var ek;
        return null === (ek = this.members.get(kk)) || void 0 === ek ? void 0 : ek.settings
      }
      getSetting(kk, ek) {
        var ik;
        return null === (ik = this.members.get(kk)) || void 0 === ik ? void 0 : ik.settings[ek]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38612: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      h: () => fk
    });
    const Dk = ["description", "label"];

    function fk(kk) {
      const ek = kk.type;
      return {
        type: ek,
        params: kk[ek]
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);