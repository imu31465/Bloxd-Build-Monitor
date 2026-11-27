export const id = 13;
export const ids = [13];
export const modules = {
  40562: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      i: () => ZR,
      l: () => qR
    });
    var yR = GR(40564),
      tR = GR(32);
    const uR = "smp2OnboardingView",
      ZR = 5e3;
    class qR {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(RR) {
        let [JR, GR, tR] = RR;
        const uR = yR.e[JR];
        if (void 0 === uR) return;
        const {
          title: ZR,
          steps: qR
        } = yR.c[uR];
        this.JK({
          ...this.view,
          path: GR < qR.length ? {
            title: ZR,
            steps: qR,
            step: GR,
            progress: tR
          } : null
        })
      }
      receiveReward(RR) {
        let [JR, GR] = RR;
        const tR = yR.h[JR];
        if (void 0 !== tR && !this.seenRewardIds.has(GR)) {
          var uR;
          if (this.seenRewardIds.add(GR), this.queued.push({
              ...tR,
              id: GR
            }), null === this.view.reward) this.JK({
            ...this.view,
            reward: null !== (uR = this.queued.shift()) && void 0 !== uR ? uR : null
          });
          this.runTimers()
        }
      }
      setShowing(RR) {
        this.showing = RR, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var RR;
          this.rewardTimer = null, this.JK({
            ...this.view,
            reward: null !== (RR = this.queued.shift()) && void 0 !== RR ? RR : null
          }), this.runTimers()
        }), ZR)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      JK(RR) {
        this.view = RR, tR.n.JK(uR, RR)
      }
    }
  },
  40555: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      makeSmp2ClientGame: () => KR
    });
    var yR = GR(66);
    const tR = "smp2FirstSpawn",
      uR = "smp2Path",
      ZR = "smp2Reward";
    var qR = GR(1841),
      iR = GR(3731),
      fR = GR(3494),
      VR = GR(40562);

    function KR() {
      let RR = !1,
        JR = !1,
        KR = "loading",
        wR = !1;
      const rR = () => {
          !RR || JR || wR || "loading" === KR || (JR = !0, (0, qR.c)({
            id: "smp2.first_spawn",
            value: KR
          }))
        },
        eR = new VR.l;
      let aR = null;
      return {
        onCreate: () => {
          GR.e(182).then((() => GR(53781))).then((RR => {
            let {
              Smp2OnboardingUi: JR
            } = RR;
            wR || (aR = (0, fR.G)((0, yR.createElement)(JR, {
              store: eR
            })), KR = "cards")
          })).catch((RR => {
            wR || (KR = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, iR.e)(RR) ? " (chunk load failed)" : ""), RR))
          })).finally(rR)
        },
        onClose: () => {
          var RR;
          "loading" === KR && (KR = "no_cards"), rR(), wR = !0, null === (RR = aR) || void 0 === RR || RR(), eR.dispose()
        },
        onReceivedMessageFromServer: (JR, GR) => {
          JR === tR ? (RR = !0, rR()) : JR === uR ? eR.receivePath(GR) : JR === ZR && eR.receiveReward(GR)
        }
      }
    }
  },
  40564: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => yR,
      h: () => qR,
      k: () => ZR
    });
    const yR = ["starter_path", "portal_first"],
      tR = "Iron Pickaxe",
      uR = {
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

    function ZR(RR) {
      return "logs" === RR.goal ? RR.amount : 1
    }
    const qR = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${tR} is waiting for you`,
      icon: tR
    }, {
      title: "Welcome back!",
      text: `Here's your ${tR}`,
      icon: tR
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    yR.flatMap((RR => [...uR[RR].steps.map((JR => `${RR}:${JR.key}`)), `${RR}:done`]))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);