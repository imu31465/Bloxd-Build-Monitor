export const id = 13;
export const ids = [13];
export const modules = {
  40887: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      c: () => Xd,
      d: () => Kd
    });
    var Wd = md(40894),
      Fd = md(32);
    const Rd = "smp2OnboardingView",
      Xd = 5e3;
    class Kd {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(dd) {
        let [Od, md, Fd] = dd;
        const Rd = Wd.e[Od];
        if (void 0 === Rd) return;
        const {
          title: Xd,
          steps: Kd
        } = Wd.b[Rd];
        this.lQ({
          ...this.view,
          path: md < Kd.length ? {
            title: Xd,
            steps: Kd,
            step: md,
            progress: Fd
          } : null
        })
      }
      receiveReward(dd) {
        let [Od, md] = dd;
        const Fd = Wd.f[Od];
        if (void 0 !== Fd && !this.seenRewardIds.has(md)) {
          var Rd;
          if (this.seenRewardIds.add(md), this.queued.push({
              ...Fd,
              id: md
            }), null === this.view.reward) this.lQ({
            ...this.view,
            reward: null !== (Rd = this.queued.shift()) && void 0 !== Rd ? Rd : null
          });
          this.runTimers()
        }
      }
      setShowing(dd) {
        this.showing = dd, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var dd;
          this.rewardTimer = null, this.lQ({
            ...this.view,
            reward: null !== (dd = this.queued.shift()) && void 0 !== dd ? dd : null
          }), this.runTimers()
        }), Xd)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      lQ(dd) {
        this.view = dd, Fd.j.lQ(Rd, dd)
      }
    }
  },
  40884: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      makeSmp2ClientGame: () => td
    });
    var Wd = md(66);
    const Fd = "smp2FirstSpawn",
      Rd = "smp2Path",
      Xd = "smp2Reward";
    var Kd = md(1796),
      hd = md(3697),
      vd = md(3428),
      Qd = md(40887);

    function td() {
      let dd = !1,
        Od = !1,
        td = "loading",
        od = !1;
      const Nd = () => {
          !dd || Od || od || "loading" === td || (Od = !0, (0, Kd.g)({
            id: "smp2.first_spawn",
            value: td
          }))
        },
        qd = new Qd.d;
      let Hd = null;
      return {
        onCreate: () => {
          md.e(182).then((() => md(54177))).then((dd => {
            let {
              Smp2OnboardingUi: Od
            } = dd;
            od || (Hd = (0, vd.F)((0, Wd.createElement)(Od, {
              store: qd
            })), td = "cards")
          })).catch((dd => {
            od || (td = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, hd.f)(dd) ? " (chunk load failed)" : ""), dd))
          })).finally(Nd)
        },
        onClose: () => {
          var dd;
          "loading" === td && (td = "no_cards"), Nd(), od = !0, null === (dd = Hd) || void 0 === dd || dd(), qd.dispose()
        },
        onReceivedMessageFromServer: (Od, md) => {
          Od === Fd ? (dd = !0, Nd()) : Od === Rd ? qd.receivePath(md) : Od === Xd && qd.receiveReward(md)
        }
      }
    }
  },
  40894: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      e: () => Wd,
      f: () => Kd,
      j: () => Xd
    });
    const Wd = ["starter_path", "portal_first"],
      Fd = "Iron Pickaxe",
      Rd = {
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

    function Xd(dd) {
      return "logs" === dd.goal ? dd.amount : 1
    }
    const Kd = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${Fd} is waiting for you`,
      icon: Fd
    }, {
      title: "Welcome back!",
      text: `Here's your ${Fd}`,
      icon: Fd
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    Wd.flatMap((dd => [...Rd[dd].steps.map((Od => `${dd}:${Od.key}`)), `${dd}:done`]))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);