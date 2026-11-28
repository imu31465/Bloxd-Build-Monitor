export const id = 13;
export const ids = [13];
export const modules = {
  40653: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      g: () => Vb,
      h: () => gb
    });
    var eb = Mb(40661),
      Hb = Mb(29);
    const pb = "smp2OnboardingView",
      Vb = 5e3;
    class gb {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(bb) {
        let [wb, Mb, Hb] = bb;
        const pb = eb.g[wb];
        if (void 0 === pb) return;
        const {
          title: Vb,
          steps: gb
        } = eb.d[pb];
        this.iI({
          ...this.view,
          path: Mb < gb.length ? {
            title: Vb,
            steps: gb,
            step: Mb,
            progress: Hb
          } : null
        })
      }
      receiveReward(bb) {
        let [wb, Mb] = bb;
        const Hb = eb.k[wb];
        if (void 0 !== Hb && !this.seenRewardIds.has(Mb)) {
          var pb;
          if (this.seenRewardIds.add(Mb), this.queued.push({
              ...Hb,
              id: Mb
            }), null === this.view.reward) this.iI({
            ...this.view,
            reward: null !== (pb = this.queued.shift()) && void 0 !== pb ? pb : null
          });
          this.runTimers()
        }
      }
      setShowing(bb) {
        this.showing = bb, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var bb;
          this.rewardTimer = null, this.iI({
            ...this.view,
            reward: null !== (bb = this.queued.shift()) && void 0 !== bb ? bb : null
          }), this.runTimers()
        }), Vb)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      iI(bb) {
        this.view = bb, Hb.k.iI(pb, bb)
      }
    }
  },
  40645: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      makeSmp2ClientGame: () => Ob
    });
    var eb = Mb(64);
    const Hb = "smp2FirstSpawn",
      pb = "smp2Path",
      Vb = "smp2Reward";
    var gb = Mb(1861),
      lb = Mb(3822),
      Lb = Mb(3531),
      Ib = Mb(40653);

    function Ob() {
      let bb = !1,
        wb = !1,
        Ob = "loading",
        Ub = !1;
      const tb = () => {
          !bb || wb || Ub || "loading" === Ob || (wb = !0, (0, gb.g)({
            id: "smp2.first_spawn",
            value: Ob
          }))
        },
        Cb = new Ib.h;
      let Eb = null;
      return {
        onCreate: () => {
          Mb.e(182).then((() => Mb(53979))).then((bb => {
            let {
              Smp2OnboardingUi: wb
            } = bb;
            Ub || (Eb = (0, Lb.J)((0, eb.createElement)(wb, {
              store: Cb
            })), Ob = "cards")
          })).catch((bb => {
            Ub || (Ob = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, lb.e)(bb) ? " (chunk load failed)" : ""), bb))
          })).finally(tb)
        },
        onClose: () => {
          var bb;
          "loading" === Ob && (Ob = "no_cards"), tb(), Ub = !0, null === (bb = Eb) || void 0 === bb || bb(), Cb.dispose()
        },
        onReceivedMessageFromServer: (wb, Mb) => {
          wb === Hb ? (bb = !0, tb()) : wb === pb ? Cb.receivePath(Mb) : wb === Vb && Cb.receiveReward(Mb)
        }
      }
    }
  },
  40661: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => eb,
      k: () => gb,
      o: () => Vb
    });
    const eb = ["starter_path", "portal_first"],
      Hb = "Iron Pickaxe",
      pb = {
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

    function Vb(bb) {
      return "logs" === bb.goal ? bb.amount : 1
    }
    const gb = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${Hb} is waiting for you`,
      icon: Hb
    }, {
      title: "Welcome back!",
      text: `Here's your ${Hb}`,
      icon: Hb
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    eb.flatMap((bb => [...pb[bb].steps.map((wb => `${bb}:${wb.key}`)), `${bb}:done`]))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);