export const id = 13;
export const ids = [13];
export const modules = {
  40873: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      e: () => jr,
      h: () => Ir
    });
    var Zr = Qr(40876),
      Wr = Qr(34);
    const ar = "smp2OnboardingView",
      jr = 5e3;
    class Ir {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(rr) {
        let [Sr, Qr, Wr] = rr;
        const ar = Zr.h[Sr];
        if (void 0 === ar) return;
        const {
          title: jr,
          steps: Ir
        } = Zr.e[ar];
        this.Jp({
          ...this.view,
          path: Qr < Ir.length ? {
            title: jr,
            steps: Ir,
            step: Qr,
            progress: Wr
          } : null
        })
      }
      receiveReward(rr) {
        let [Sr, Qr] = rr;
        const Wr = Zr.j[Sr];
        if (void 0 !== Wr && !this.seenRewardIds.has(Qr)) {
          var ar;
          if (this.seenRewardIds.add(Qr), this.queued.push({
              ...Wr,
              id: Qr
            }), null === this.view.reward) this.Jp({
            ...this.view,
            reward: null !== (ar = this.queued.shift()) && void 0 !== ar ? ar : null
          });
          this.runTimers()
        }
      }
      setShowing(rr) {
        this.showing = rr, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var rr;
          this.rewardTimer = null, this.Jp({
            ...this.view,
            reward: null !== (rr = this.queued.shift()) && void 0 !== rr ? rr : null
          }), this.runTimers()
        }), jr)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      Jp(rr) {
        this.view = rr, Wr.i.Jp(ar, rr)
      }
    }
  },
  40866: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      makeSmp2ClientGame: () => xr
    });
    var Zr = Qr(72);
    const Wr = "smp2FirstSpawn",
      ar = "smp2Path",
      jr = "smp2Reward";
    var Ir = Qr(1788),
      fr = Qr(3677),
      Er = Qr(3425),
      pr = Qr(40873);

    function xr() {
      let rr = !1,
        Sr = !1,
        xr = "loading",
        mr = !1;
      const Nr = () => {
          !rr || Sr || mr || "loading" === xr || (Sr = !0, (0, Ir.e)({
            id: "smp2.first_spawn",
            value: xr
          }))
        },
        Ur = new pr.h;
      let tr = null;
      return {
        onCreate: () => {
          Qr.e(182).then((() => Qr(54288))).then((rr => {
            let {
              Smp2OnboardingUi: Sr
            } = rr;
            mr || (tr = (0, Er.H)((0, Zr.createElement)(Sr, {
              store: Ur
            })), xr = "cards")
          })).catch((rr => {
            mr || (xr = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, fr.d)(rr) ? " (chunk load failed)" : ""), rr))
          })).finally(Nr)
        },
        onClose: () => {
          var rr;
          "loading" === xr && (xr = "no_cards"), Nr(), mr = !0, null === (rr = tr) || void 0 === rr || rr(), Ur.dispose()
        },
        onReceivedMessageFromServer: (Sr, Qr) => {
          Sr === Wr ? (rr = !0, Nr()) : Sr === ar ? Ur.receivePath(Qr) : Sr === jr && Ur.receiveReward(Qr)
        }
      }
    }
  },
  40876: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => Zr,
      j: () => Ir,
      n: () => jr
    });
    const Zr = ["starter_path", "portal_first"],
      Wr = "Iron Pickaxe",
      ar = {
        starter_path: {
          title: "Starter Path",
          steps: [{
            key: "sell",
            goal: "sell",
            text: "Sell your dirt at Instant Sell",
            icon: "Dirt"
          }, {
            key: "portal",
            goal: "portal",
            text: "Jump into the portal to go out into the world",
            icon: "Compass"
          }, {
            key: "logs",
            goal: "logs",
            amount: 4,
            text: "Chop 4 logs",
            icon: "Maple Log"
          }, {
            key: "workbench",
            goal: "craft",
            item: "Workbench",
            text: "Craft a Workbench",
            icon: "Workbench"
          }, {
            key: "pickaxe",
            goal: "craft",
            item: "Wood Pickaxe",
            text: "Craft a Wood Pickaxe",
            icon: "Wood Pickaxe"
          }]
        },
        portal_first: {
          title: "First steps",
          steps: [{
            key: "portal",
            goal: "portal",
            text: "Jump into the portal to go out into the world",
            icon: "Compass"
          }, {
            key: "logs",
            goal: "logs",
            amount: 3,
            text: "Chop 3 logs",
            icon: "Maple Log"
          }]
        }
      };

    function jr(rr) {
      return "logs" === rr.goal ? rr.amount : 1
    }
    const Ir = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${Wr} is waiting for you`,
      icon: Wr
    }, {
      title: "Welcome back!",
      text: `Here's your ${Wr}`,
      icon: Wr
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    Zr.flatMap((rr => [...ar[rr].steps.map((Sr => `${rr}:${Sr.key}`)), `${rr}:done`]))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);