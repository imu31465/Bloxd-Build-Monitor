export const id = 13;
export const ids = [13];
export const modules = {
  40534: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => PW,
      g: () => LW
    });
    var mW = OW(40542),
      EW = OW(27);
    const NW = "smp2OnboardingView",
      PW = 5e3;
    class LW {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(WW) {
        let [iW, OW, EW] = WW;
        const NW = mW.g[iW];
        if (void 0 === NW) return;
        const {
          title: PW,
          steps: LW
        } = mW.e[NW];
        this.iZ({
          ...this.view,
          path: OW < LW.length ? {
            title: PW,
            steps: LW,
            step: OW,
            progress: EW
          } : null
        })
      }
      receiveReward(WW) {
        let [iW, OW] = WW;
        const EW = mW.k[iW];
        if (void 0 !== EW && !this.seenRewardIds.has(OW)) {
          var NW;
          if (this.seenRewardIds.add(OW), this.queued.push({
              ...EW,
              id: OW
            }), null === this.view.reward) this.iZ({
            ...this.view,
            reward: null !== (NW = this.queued.shift()) && void 0 !== NW ? NW : null
          });
          this.runTimers()
        }
      }
      setShowing(WW) {
        this.showing = WW, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var WW;
          this.rewardTimer = null, this.iZ({
            ...this.view,
            reward: null !== (WW = this.queued.shift()) && void 0 !== WW ? WW : null
          }), this.runTimers()
        }), PW)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      iZ(WW) {
        this.view = WW, EW.l.iZ(NW, WW)
      }
    }
  },
  40525: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      makeSmp2ClientGame: () => ZW
    });
    var mW = OW(62);
    const EW = "smp2FirstSpawn",
      NW = "smp2Path",
      PW = "smp2Reward";
    var LW = OW(1770),
      cW = OW(3637),
      wW = OW(3361),
      tW = OW(40534);

    function ZW() {
      let WW = !1,
        iW = !1,
        ZW = "loading",
        xW = !1;
      const lW = () => {
          !WW || iW || xW || "loading" === ZW || (iW = !0, (0, LW.e)({
            id: "smp2.first_spawn",
            value: ZW
          }))
        },
        AW = new tW.g;
      let bW = null;
      return {
        onCreate: () => {
          OW.e(182).then((() => OW(53936))).then((WW => {
            let {
              Smp2OnboardingUi: iW
            } = WW;
            xW || (bW = (0, wW.O)((0, mW.createElement)(iW, {
              store: AW
            })), ZW = "cards")
          })).catch((WW => {
            xW || (ZW = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, cW.e)(WW) ? " (chunk load failed)" : ""), WW))
          })).finally(lW)
        },
        onClose: () => {
          var WW;
          "loading" === ZW && (ZW = "no_cards"), lW(), xW = !0, null === (WW = bW) || void 0 === WW || WW(), AW.dispose()
        },
        onReceivedMessageFromServer: (iW, OW) => {
          iW === EW ? (WW = !0, lW()) : iW === NW ? AW.receivePath(OW) : iW === PW && AW.receiveReward(OW)
        }
      }
    }
  },
  40542: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      g: () => mW,
      k: () => LW,
      m: () => PW
    });
    const mW = ["starter_path", "portal_first"],
      EW = "Iron Pickaxe",
      NW = {
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

    function PW(WW) {
      return "logs" === WW.goal ? WW.amount : 1
    }
    const LW = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${EW} is waiting for you`,
      icon: EW
    }, {
      title: "Welcome back!",
      text: `Here's your ${EW}`,
      icon: EW
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    mW.flatMap((WW => [...NW[WW].steps.map((iW => `${WW}:${iW.key}`)), `${WW}:done`]))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);