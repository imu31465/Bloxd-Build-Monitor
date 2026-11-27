export const id = 227;
export const ids = [227];
export const modules = {
  37547: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      GiftOpening: () => Ni
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(1172),
      LW = OW(25),
      cW = OW(1556),
      wW = OW(35264),
      tW = OW(5238),
      ZW = OW(1532),
      xW = OW(1391),
      lW = OW(3291),
      AW = OW(3627),
      bW = OW(3247),
      jW = OW(1107),
      UW = OW(4311),
      kW = OW(1283);
    const sW = {
      festive: "\ud83c\udf84 \u26c4 \ud83c\udf81",
      sweater: "\u2744"
    };

    function MW(WW) {
      let {
        wrap: iW,
        className: OW,
        rootRef: mW,
        bodyRef: EW,
        lidRef: PW,
        seamRef: LW
      } = WW;
      const cW = sW[iW];
      return (0, kW.jsxs)("div", {
        className: NW()("GiftBox", `GiftBoxWrap_${iW}`, OW),
        ref: mW,
        children: [(0, kW.jsx)("div", {
          className: "GiftBoxPlinth"
        }), (0, kW.jsxs)("div", {
          className: "GiftBoxBody",
          ref: EW,
          children: [(0, kW.jsxs)("div", {
            className: "GiftBoxCube",
            children: [(0, kW.jsxs)("div", {
              className: "GiftBoxFace GiftBoxFront",
              children: [cW && (0, kW.jsx)("span", {
                className: "GiftBoxPrint",
                children: cW
              }), "blocks" === iW && (0, kW.jsxs)("svg", {
                className: "GiftBoxCracks",
                viewBox: "0 0 100 80",
                "aria-hidden": !0,
                children: [(0, kW.jsx)("polyline", {
                  points: "50,0 44,18 56,30 47,48 58,62 52,80"
                }), (0, kW.jsx)("polyline", {
                  points: "44,18 24,26 14,44"
                }), (0, kW.jsx)("polyline", {
                  points: "56,30 78,36 90,58"
                })]
              })]
            }), (0, kW.jsx)("div", {
              className: "GiftBoxFace GiftBoxSide"
            }), (0, kW.jsxs)("div", {
              className: "GiftBoxLid",
              ref: PW,
              children: [(0, kW.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidFront"
              }), (0, kW.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidSide"
              }), (0, kW.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidTop"
              }), (0, kW.jsxs)("div", {
                className: "GiftBoxBow",
                children: [(0, kW.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowLeft"
                }), (0, kW.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowRight"
                }), (0, kW.jsx)("div", {
                  className: "GiftBoxBowKnot"
                })]
              })]
            })]
          }), (0, kW.jsx)("div", {
            className: "GiftBoxSeam",
            ref: LW
          })]
        })]
      })
    }
    var KW = OW(5014),
      SW = OW(4194),
      YW = OW(2985);

    function yW(WW, iW) {
      const [OW] = iW.cosmeticPacks;
      return void 0 !== OW ? (0, YW.g)(OW) : iW.superDays > 0 ? WW("paymentHistory:superRankDays", {
        count: iW.superDays
      }) : iW.hyperDays > 0 ? WW("paymentHistory:hyperRankDays", {
        count: iW.hyperDays
      }) : WW("paymentHistory:premiumCurrency", {
        count: iW.premiumCurrency
      })
    }

    function TW(WW) {
      var iW, OW;
      const {
        t: mW
      } = (0, PW.B)(), EW = SW.g.find((iW => iW.id === WW.message));
      return {
        message: void 0 === EW ? null : mW(EW.key, {
          name: WW.recipientName,
          level: null !== (iW = WW.senderLevel) && void 0 !== iW ? iW : 1,
          tier: null !== (OW = WW.tierLabel) && void 0 !== OW ? OW : ""
        }),
        level: null === WW.senderLevel || "levelFlex" === (null === EW || void 0 === EW ? void 0 : EW.kind) ? null : mW("giftOpening:gifterLevel", {
          level: WW.senderLevel
        })
      }
    }

    function JW(WW) {
      let {
        gift: iW,
        shown: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)(), {
        message: EW,
        level: LW
      } = TW(iW);
      return (0, kW.jsxs)("div", {
        className: NW()("GiftOpeningCard", {
          GiftOpeningCardShown: OW
        }),
        children: [(0, kW.jsx)("div", {
          className: "GiftOpeningItem SmallTextBold",
          children: yW(mW, iW.items)
        }), null !== EW && (0, kW.jsx)("div", {
          className: "GiftOpeningCardMessage SmallTextLight",
          children: EW
        }), (0, kW.jsxs)("div", {
          className: "GiftOpeningFrom SmallTextLight",
          children: [iW.senderName, null !== LW && ` \xb7 ${LW}`]
        })]
      })
    }

    function hW(WW) {
      let {
        gift: iW
      } = WW;
      const {
        message: OW,
        level: mW
      } = TW(iW);
      return (0, kW.jsxs)(kW.Fragment, {
        children: [null !== OW && (0, kW.jsx)("div", {
          className: "GiftOpeningIntroMessage SmallTextLight",
          children: `"${OW}"`
        }), null !== mW && (0, kW.jsx)("div", {
          className: "GiftOpeningIntroLevel SmallTextBold",
          children: mW
        })]
      })
    }

    function HW(WW) {
      let {
        gift: iW,
        preview: OW,
        analyticsValue: mW,
        onReplay: EW,
        onClose: NW
      } = WW;
      const {
        t: wW
      } = (0, PW.B)(), {
        gameState: tW
      } = (0, LW.p)(["gameState"]), lW = !OW && iW.items.cosmeticPacks.length > 0 && !(0, LW.e)(tW);
      return (0, kW.jsxs)("div", {
        className: "GiftOpeningButtons",
        children: [OW && (0, kW.jsxs)(ZW.f, {
          className: "GiftOpeningButton",
          touchPressOn: "pointerup",
          onClick: EW,
          children: [(0, kW.jsx)(xW.c, {
            name: "rotate-right"
          }), " ", wW("giftOpening:replay")]
        }), lW && (0, kW.jsx)(ZW.f, {
          className: "GiftOpeningButton",
          padDefaultFocus: !0,
          touchPressOn: "pointerup",
          onClick: () => {
            (0, cW.reportAnalyticsClick)({
              id: "gift.open_customise",
              value: mW
            }), (0, YW.k)(), NW()
          },
          children: wW("general:customize")
        }), (0, kW.jsx)(ZW.f, {
          className: "GiftOpeningButton",
          padDefaultFocus: !lW,
          touchPressOn: "pointerup",
          onClick: NW,
          children: wW(OW ? "giftOpening:back" : "giftOpening:done")
        })]
      })
    }
    var nW = OW(37555);
    const uW = {
        1: "harp_pling",
        2: "exp_levelup",
        3: "trumpetFlare"
      },
      oW = {
        wobble: "chestClose",
        pop: "chestOpen",
        sparkle: "exp_collect"
      },
      dW = {
        wobble: .55,
        pop: .8,
        sparkle: .4,
        sting: .7
      };

    function eW(WW, iW) {
      return "sting" === WW ? uW[iW] : oW[WW]
    }

    function vW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      try {
        nW.c.play(eW(WW, iW), dW[WW]).rate(Math.pow(2, 2 * OW / 12))
      } catch (mW) {
        console.warn("[gift-opening] a sound failed to play", mW)
      }
    }
    const gW = "cubic-bezier(0.22, 1, 0.36, 1)";
    class DW {
      constructor(WW, iW) {
        this.parts = WW, this.options = iW, this.phase = "arrive", this.timers = [], this.animations = [], this.opened = !1, this.popped = !1
      }
      setPhase(WW) {
        this.phase = WW, this.options.onPhase(WW)
      }
      at(WW, iW) {
        this.timers.push(setTimeout(iW, WW))
      }
      animate(WW, iW, OW) {
        this.animations.push(WW.animate(iW, {
          fill: "forwards",
          ...OW
        }))
      }
      markOpened() {
        this.opened || (this.opened = !0, this.options.onOpened())
      }
      arrive() {
        const {
          timeline: WW,
          reducedMotion: iW
        } = this.options, OW = iW ? [{
          opacity: 0
        }, {
          opacity: 1
        }] : [{
          transform: "translateY(-140%) scale(0.9)",
          opacity: 0,
          easing: "cubic-bezier(0.55, 0, 1, 0.45)"
        }, {
          transform: "translateY(0) scale(1.14, 0.86)",
          opacity: 1,
          offset: .68
        }, {
          transform: "scale(0.95, 1.07)",
          offset: .84
        }, {
          transform: "none"
        }];
        this.animate(this.parts.body, OW, {
          duration: iW ? 200 : WW.arriveMs,
          fill: "none"
        }), this.at(iW ? 200 : WW.arriveMs, (() => {
          this.setPhase("wait")
        }))
      }
      tap() {
        switch (this.phase) {
          case "wait":
            return void(this.options.reducedMotion ? this.openQuietly() : this.charge());
          case "charge":
            return this.clearTimers(), this.cancelAnimations(), void this.burst(this.options.timeline.burstAt);
          case "reveal":
          case "card":
            return void this.skip()
        }
      }
      openQuietly() {
        this.setPhase("reveal"), this.markOpened(), this.animate(this.parts.body, [{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 300
        }), this.animate(this.parts.character, [{
          opacity: 0,
          transform: "scale(0.95)"
        }, {
          opacity: 1,
          transform: "none"
        }], {
          duration: 300
        }), vW("sting", this.options.tier), this.at(300, (() => {
          this.setPhase("done")
        }))
      }
      charge() {
        const {
          timeline: WW,
          tier: iW,
          fx: OW
        } = this.options;
        this.setPhase("charge");
        const mW = WW.wobbles,
          EW = WW.burstAt,
          NW = (WW.chargeMs - 80) / mW.length,
          PW = [{
            transform: "none",
            offset: 0
          }, {
            transform: "scale(1.06, 0.92)",
            offset: 80 / EW
          }];
        mW.forEach(((WW, OW) => {
          const mW = 80 + OW * NW;
          PW.push({
            transform: `rotate(${WW}deg) translateX(${.3*WW}px)`,
            offset: (mW + .3 * NW) / EW
          }), PW.push({
            transform: `rotate(${-WW}deg) translateX(${.3*-WW}px)`,
            offset: (mW + .75 * NW) / EW
          }), this.at(mW, (() => {
            vW("wobble", iW, OW)
          }))
        })), PW.push({
          transform: "rotate(0deg)",
          offset: WW.chargeMs / EW
        }), PW.push({
          transform: "scale(1.12, 0.84)",
          offset: (WW.chargeMs + 40) / EW
        }), PW.push({
          transform: "scale(1.12, 0.84)",
          offset: 1
        }), this.animate(this.parts.body, PW, {
          duration: EW
        });
        const LW = [{
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.6)"
        }];
        mW.forEach(((WW, iW) => {
          const OW = (iW + 1) / (mW.length + .5);
          LW.push({
            opacity: OW,
            transform: `translate(-50%, -50%) scale(${.7+.5*OW})`,
            offset: (80 + (iW + 1) * NW) / EW
          })
        })), LW.push({
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1.3)"
        }), this.animate(this.parts.seam, LW, {
          duration: EW,
          easing: "linear"
        });
        const cW = this.parts.box.querySelector(".GiftBoxCracks");
        cW && this.animate(cW, [{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: EW,
          easing: "steps(3, end)"
        });
        const {
          x: wW,
          y: tW
        } = this.boxCentre();
        null === OW || void 0 === OW || OW.charge(wW, tW, WW.chargeMs), this.at(EW, (() => {
          this.burst(EW)
        }))
      }
      boxCentre() {
        const WW = this.parts.box.getBoundingClientRect();
        return {
          x: WW.left + WW.width / 2,
          y: WW.top + .45 * WW.height,
          floorY: WW.bottom
        }
      }
      burst(WW) {
        const {
          timeline: iW,
          tier: OW,
          fx: mW
        } = this.options;
        if (this.popped) return;
        this.popped = !0, this.markOpened();
        const EW = iW => Math.max(0, iW - WW),
          NW = {
            duration: 620,
            easing: gW
          };
        this.animate(this.parts.lid, [{
          transform: "translateY(-0.36em)"
        }, {
          transform: "translate(0.35em, -2.2em) rotateZ(26deg) rotateX(24deg)",
          offset: .55
        }, {
          transform: "translate(0.6em, -3.2em) rotateZ(40deg) rotateX(40deg)"
        }], NW);
        for (const wW of this.parts.lid.querySelectorAll(":scope > *")) this.animate(wW, [{
          opacity: 1
        }, {
          opacity: 1,
          offset: .55
        }, {
          opacity: 0
        }], NW);
        if (this.animate(this.parts.body, [{
            transform: "scale(1.12, 0.84)"
          }, {
            transform: "scale(0.94, 1.1)",
            offset: .35
          }, {
            transform: "none"
          }], {
            duration: 260,
            easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }), this.animate(this.parts.seam, [{
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1.3)"
          }, {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(3)"
          }], {
            duration: 380,
            easing: gW
          }), iW.flashAlpha > 0 && this.animate(this.parts.flash, [{
            opacity: 0
          }, {
            opacity: iW.flashAlpha,
            offset: .2
          }, {
            opacity: 0
          }], {
            duration: 320,
            easing: "ease-out"
          }), this.animate(this.parts.ring, [{
            opacity: .9,
            transform: "translate(-50%, -50%) scale(0.2)"
          }, {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(3.6)"
          }], {
            duration: 520,
            easing: gW
          }), this.animate(this.parts.beam, [{
            opacity: 0,
            transform: "translateX(-50%) scaleY(0)"
          }, {
            opacity: 1,
            transform: "translateX(-50%) scaleY(1)",
            offset: .25
          }, {
            opacity: 0,
            transform: "translateX(-50%) scaleY(1) scaleX(0.3)"
          }], {
            duration: 900,
            easing: gW
          }), iW.kickPx > 0) {
          const WW = iW.kickPx;
          this.animate(this.parts.shake, [{
            transform: "none"
          }, {
            transform: `translate(${WW}px, ${-WW}px)`
          }, {
            transform: `translate(${.7*-WW}px, ${.5*WW}px)`
          }, {
            transform: `translate(${.4*WW}px, ${.3*WW}px)`
          }, {
            transform: "none"
          }], {
            duration: 300,
            easing: "linear",
            fill: "none"
          })
        }
        vW("pop", OW), vW("sparkle", OW, 2);
        const {
          x: PW,
          y: LW,
          floorY: cW
        } = this.boxCentre();
        null === mW || void 0 === mW || mW.burst(PW, LW, iW.burstParticles, cW), this.at(EW(iW.revealAt), (() => {
          this.reveal()
        })), this.at(EW(iW.cardAt), (() => {
          this.setPhase("card")
        })), this.at(EW(iW.buttonsAt), (() => {
          this.setPhase("done")
        }))
      }
      reveal() {
        const {
          timeline: WW,
          tier: iW,
          fx: OW
        } = this.options;
        this.setPhase("reveal"), this.animate(this.parts.character, [{
          opacity: 0,
          transform: "translateY(30%) scale(0.5)"
        }, {
          opacity: 1,
          transform: "translateY(-4%) scale(1.08)",
          offset: .6
        }, {
          opacity: 1,
          transform: "none"
        }], {
          duration: 520,
          easing: gW
        }), this.animate(this.parts.body, [{
          opacity: 1,
          transform: "none"
        }, {
          opacity: 0,
          transform: "translateY(25%) scale(0.85)"
        }], {
          duration: 420,
          delay: 120,
          easing: "ease-in"
        }), vW("sting", iW), null === OW || void 0 === OW || OW.linger(this.boxCentre().x, WW.buttonsAt - WW.revealAt + 1500, WW.rain)
      }
      skip() {
        var WW;
        (this.clearTimers(), this.cancelAnimations(), this.popped) || (null === (WW = this.options.fx) || void 0 === WW || WW.clear());
        this.markOpened(), this.parts.body.style.opacity = "0", this.parts.character.style.opacity = "1", this.parts.character.style.transform = "none", this.setPhase("done")
      }
      cancelAnimations() {
        for (const WW of this.animations) WW.cancel();
        this.animations = []
      }
      clearTimers() {
        for (const WW of this.timers) clearTimeout(WW);
        this.timers = []
      }
      dispose() {
        this.clearTimers(), this.cancelAnimations(), this.parts.body.style.removeProperty("opacity"), this.parts.character.style.removeProperty("opacity"), this.parts.character.style.removeProperty("transform")
      }
    }
    const VW = {
      2: 500,
      3: 1200
    };
    const pW = {
      1: {
        arriveMs: 450,
        wobbles: [5, 9],
        chargeMs: 500,
        hitStopMs: 80,
        revealAt: 700,
        cardAt: 1050,
        buttonsAt: 2400,
        burstParticles: 50,
        flashAlpha: .25,
        kickPx: 0,
        rain: !1
      },
      2: {
        arriveMs: 450,
        wobbles: [4, 7, 11],
        chargeMs: 720,
        hitStopMs: 100,
        revealAt: 950,
        cardAt: 1300,
        buttonsAt: 3e3,
        burstParticles: 90,
        flashAlpha: .35,
        kickPx: 0,
        rain: !1
      },
      3: {
        arriveMs: 450,
        wobbles: [4, 8, 13],
        chargeMs: 780,
        hitStopMs: 140,
        revealAt: 1050,
        cardAt: 1450,
        buttonsAt: 3400,
        burstParticles: 140,
        flashAlpha: .4,
        kickPx: 4,
        rain: !0
      }
    };

    function fW(WW) {
      const iW = pW[WW];
      return {
        ...iW,
        burstAt: iW.chargeMs + iW.hitStopMs
      }
    }
    const CW = {
      1: "#5ab8ff",
      2: "#b673ff",
      3: "#ffc83d"
    };

    function XW(WW, iW, OW) {
      const mW = document.createElement("canvas"),
        EW = Math.ceil(WW * iW);
      mW.width = EW, mW.height = EW;
      const NW = mW.getContext("2d");
      return NW && OW(NW, EW), {
        image: mW
      }
    }

    function BW(WW, iW) {
      return XW(16, iW, ((iW, OW) => {
        iW.fillStyle = WW, iW.fillRect(.3 * OW, 0, .4 * OW, OW)
      }))
    }

    function qW(WW, iW, OW) {
      return XW(14, OW, ((OW, mW) => {
        OW.fillStyle = iW, OW.fillRect(0, 0, mW, mW), OW.fillStyle = WW, OW.fillRect(0, 0, mW, .35 * mW)
      }))
    }

    function RW(WW, iW) {
      return XW(18, iW, ((iW, OW) => {
        iW.fillStyle = WW, iW.beginPath(), iW.moveTo(OW / 2, 0), iW.lineTo(.85 * OW, .55 * OW), iW.lineTo(OW / 2, OW), iW.lineTo(.2 * OW, .45 * OW), iW.closePath(), iW.fill(), iW.fillStyle = "rgba(255,255,255,0.55)", iW.beginPath(), iW.moveTo(OW / 2, 0), iW.lineTo(.6 * OW, .5 * OW), iW.lineTo(.2 * OW, .45 * OW), iW.closePath(), iW.fill()
      }))
    }

    function GW(WW, iW) {
      return XW(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, iW, ((iW, OW) => {
        const mW = OW / 2;
        iW.fillStyle = WW, iW.beginPath();
        for (let WW = 0; WW < 10; WW++) {
          const OW = WW % 2 === 0 ? mW : .45 * mW,
            EW = -Math.PI / 2 + WW * Math.PI / 5;
          iW.lineTo(mW + Math.cos(EW) * OW, mW + Math.sin(EW) * OW)
        }
        iW.closePath(), iW.fill()
      }))
    }

    function IW(WW, iW) {
      return XW(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24, iW, ((iW, OW) => {
        const mW = iW.createRadialGradient(OW / 2, OW / 2, 0, OW / 2, OW / 2, OW / 2);
        mW.addColorStop(0, "rgba(255,255,255,1)"), mW.addColorStop(.25, WW), mW.addColorStop(1, "rgba(0,0,0,0)"), iW.fillStyle = mW, iW.fillRect(0, 0, OW, OW)
      }))
    }
    const aW = {
      classic: WW => [BW("#e63946", WW), BW("#ffffff", WW), BW("#ffd166", WW), BW("#2a9d8f", WW), GW("#ffd166", WW, 14)],
      blocks: WW => [qW("#6abe30", "#8a5a33", WW), qW("#8a5a33", "#6d4426", WW), qW("#9da3a6", "#7b8083", WW), qW("#7ff3f0", "#3fb7c0", WW)],
      gems: WW => [RW("#b673ff", WW), RW("#ff7ad9", WW), RW("#6fe0ff", WW), RW("#ffffff", WW)],
      stars: WW => [GW("#fff6b0", WW), GW("#ffffff", WW, 14), GW("#9fd0ff", WW, 12), IW("#9fd0ff", WW, 16)],
      legend: WW => [BW("#ffc83d", WW), BW("#ff5d8f", WW), BW("#5ab8ff", WW), BW("#7cf29a", WW), GW("#ffc83d", WW), GW("#fff4c2", WW, 14)],
      sweater: WW => [IW("#ffffff", WW, 18), IW("#dff3ff", WW, 12), GW("#ffffff", WW, 12)],
      festive: WW => ["\ud83c\udf84", "\u26c4", "\ud83c\udf81", "\u2744\ufe0f", "\u2b50"].map((iW => function(WW, iW) {
        return XW(26, iW, ((iW, OW) => {
          iW.font = `${Math.round(.8*OW)}px sans-serif`, iW.textAlign = "center", iW.textBaseline = "middle", iW.fillText(WW, OW / 2, OW / 2 + .05 * OW)
        }))
      }(iW, WW)))
    };
    const rW = {
      classic: {
        gravity: 1e3,
        speed: [380, 760],
        lifeMs: [1e3, 1500],
        drag: .35,
        bounce: !1,
        flutter: !0
      },
      blocks: {
        gravity: 1500,
        speed: [320, 700],
        lifeMs: [1100, 1500],
        drag: .6,
        bounce: !0,
        flutter: !1
      },
      gems: {
        gravity: 900,
        speed: [420, 820],
        lifeMs: [800, 1200],
        drag: .3,
        bounce: !1,
        flutter: !1
      },
      stars: {
        gravity: 350,
        speed: [260, 560],
        lifeMs: [1100, 1600],
        drag: .25,
        bounce: !1,
        flutter: !1
      },
      legend: {
        gravity: 800,
        speed: [420, 860],
        lifeMs: [1100, 1600],
        drag: .3,
        bounce: !1,
        flutter: !0
      },
      sweater: {
        gravity: 260,
        speed: [200, 480],
        lifeMs: [1600, 2200],
        drag: .2,
        bounce: !1,
        flutter: !1
      },
      festive: {
        gravity: 900,
        speed: [360, 700],
        lifeMs: [1100, 1500],
        drag: .35,
        bounce: !1,
        flutter: !1
      }
    };

    function zW(WW) {
      let [iW, OW] = WW;
      return iW + Math.random() * (OW - iW)
    }

    function FW(WW) {
      return WW[Math.floor(Math.random() * WW.length)]
    }
    class QW {
      constructor(WW, iW) {
        var OW, mW, EW;
        this.canvas = WW, this.options = iW, this.context = void 0, this.sprites = void 0, this.particles = [], this.scale = void 0, this.frame = 0, this.lastAt = 0, this.embersUntil = 0, this.embersX = 0, this.rainUntil = 0, this.spawnCarry = 0, this.stopped = !1, this.frameMs = [], this.hZ = WW => {
          const iW = Math.min(WW - this.lastAt, 50);
          this.lastAt = WW, this.spawnLingering(iW), this.step(iW), this.draw();
          const OW = WW < this.embersUntil || WW < this.rainUntil;
          this.frame = this.particles.length > 0 || OW ? requestAnimationFrame(this.hZ) : 0, 0 === this.frame && (this.canvas.style.visibility = "hidden")
        }, this.context = WW.getContext("2d"), this.scale = Math.min(window.devicePixelRatio || 1, iW.phone ? 1.5 : 2), this.sprites = (OW = iW.wrap, mW = CW[iW.tier], EW = this.scale, {
          burst: aW[OW](EW),
          spark: IW(mW, EW),
          rain: [GW("#ffc83d", EW, 16), BW("#ffc83d", EW), BW("#fff1b8", EW)]
        }), this.resize()
      }
      resize() {
        const {
          clientWidth: WW,
          clientHeight: iW
        } = this.canvas;
        this.canvas.width = Math.round(WW * this.scale), this.canvas.height = Math.round(iW * this.scale)
      }
      count(WW) {
        return Math.round(this.options.phone ? WW / 2 : WW)
      }
      add(WW) {
        this.particles.push({
          motion: "fall",
          vx: 0,
          WH: 0,
          gravity: 0,
          drag: 0,
          rotation: Math.random() * Math.PI * 2,
          spin: 0,
          flutterSpeed: 0,
          fromX: WW.x,
          fromY: WW.y,
          toX: WW.x,
          toY: WW.y,
          floorY: 1 / 0,
          additive: !1,
          ...WW,
          flutter: Math.random() * Math.PI * 2,
          ageMs: 0
        }), this.wake()
      }
      charge(WW, iW, OW) {
        for (let mW = 0; mW < this.count(18 + 8 * this.options.tier); mW++) {
          const mW = Math.random() * Math.PI * 2,
            EW = zW([120, 240]);
          this.add({
            sprite: this.sprites.spark,
            motion: "converge",
            x: WW,
            y: iW,
            fromX: WW + Math.cos(mW) * EW,
            fromY: iW + Math.sin(mW) * EW,
            size: zW([.5, 1]),
            lifeMs: OW * zW([.55, 1]),
            additive: !0
          })
        }
      }
      burst(WW, iW, OW, mW) {
        const EW = rW[this.options.wrap];
        for (let NW = 0; NW < this.count(OW); NW++) {
          const OW = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.5,
            NW = zW(EW.speed);
          this.add({
            sprite: FW(this.sprites.burst),
            x: WW + 30 * (Math.random() - .5),
            y: iW,
            vx: Math.cos(OW) * NW,
            WH: Math.sin(OW) * NW,
            gravity: EW.gravity,
            drag: EW.drag,
            spin: 14 * (Math.random() - .5),
            flutterSpeed: EW.flutter ? zW([8, 16]) : 0,
            size: zW([.7, 1.15]),
            lifeMs: zW(EW.lifeMs),
            floorY: EW.bounce ? mW : 1 / 0
          })
        }
        for (let NW = 0; NW < this.count(16 + 8 * this.options.tier); NW++) {
          const OW = Math.random() * Math.PI * 2,
            mW = zW([300, 900]);
          this.add({
            sprite: this.sprites.spark,
            x: WW,
            y: iW,
            vx: Math.cos(OW) * mW,
            WH: Math.sin(OW) * mW,
            gravity: 200,
            drag: .05,
            size: zW([.4, .9]),
            lifeMs: zW([350, 700]),
            additive: !0
          })
        }
      }
      linger(WW, iW, OW) {
        const mW = performance.now();
        this.embersX = WW, this.embersUntil = mW + iW, this.rainUntil = OW ? mW + Math.min(iW, 1800) : 0, this.wake()
      }
      spawnLingering(WW) {
        const {
          clientWidth: iW,
          clientHeight: OW
        } = this.canvas, mW = performance.now(), EW = (mW < this.embersUntil ? this.count(14) : 0) + (mW < this.rainUntil ? this.count(50) : 0);
        for (this.spawnCarry += EW * WW / 1e3; this.spawnCarry >= 1;) this.spawnCarry--, mW < this.rainUntil && Math.random() < .75 ? this.add({
          sprite: FW(this.sprites.rain),
          x: Math.random() * iW,
          y: -20,
          vx: 60 * (Math.random() - .5),
          WH: zW([160, 320]),
          gravity: 500,
          drag: .2,
          spin: 8 * (Math.random() - .5),
          flutterSpeed: zW([6, 12]),
          size: zW([.6, 1]),
          lifeMs: 2200
        }) : this.add({
          sprite: this.sprites.spark,
          motion: "float",
          x: this.embersX + (Math.random() - .5) * Math.min(iW, 420),
          y: OW * zW([.55, .8]),
          vx: 20 * (Math.random() - .5),
          WH: -zW([30, 70]),
          drag: .6,
          size: zW([.3, .6]),
          lifeMs: zW([1200, 2e3]),
          additive: !0
        })
      }
      clear() {
        var WW;
        this.particles.length = 0, this.embersUntil = 0, this.rainUntil = 0, null === (WW = this.context) || void 0 === WW || WW.clearRect(0, 0, this.canvas.width, this.canvas.height)
      }
      stop() {
        this.stopped = !0, cancelAnimationFrame(this.frame), this.frame = 0, this.clear(), this.canvas.style.visibility = "hidden"
      }
      wake() {
        0 !== this.frame || this.stopped || (this.lastAt = performance.now(), this.frame = requestAnimationFrame(this.hZ), this.canvas.style.visibility = "visible")
      }
      step(WW) {
        const iW = WW / 1e3;
        let OW = 0;
        for (const mW of this.particles)
          if (mW.ageMs += WW, !(mW.ageMs >= mW.lifeMs)) {
            if ("converge" === mW.motion) {
              const WW = mW.ageMs / mW.lifeMs,
                iW = WW * WW * WW;
              mW.x = mW.fromX + (mW.toX - mW.fromX) * iW, mW.y = mW.fromY + (mW.toY - mW.fromY) * iW
            } else {
              const WW = Math.pow(1 - mW.drag, iW);
              mW.vx *= WW, mW.WH = mW.WH * WW + mW.gravity * iW, mW.x += mW.vx * iW, mW.y += mW.WH * iW, mW.y > mW.floorY && mW.WH > 0 && (mW.y = mW.floorY, mW.WH *= -.35, mW.vx *= .6, mW.floorY = 1 / 0)
            }
            mW.rotation += mW.spin * iW, mW.flutter += mW.flutterSpeed * iW, this.particles[OW++] = mW
          } this.particles.length = OW
      }
      draw() {
        const WW = this.context;
        if (WW) {
          WW.setTransform(1, 0, 0, 1, 0, 0), WW.clearRect(0, 0, this.canvas.width, this.canvas.height);
          for (const iW of this.particles) {
            const OW = iW.ageMs / iW.lifeMs,
              mW = "converge" === iW.motion ? .35 + .65 * OW : Math.min(1, 4 * (1 - OW)),
              EW = iW.size,
              NW = Math.cos(iW.rotation) * EW,
              PW = Math.sin(iW.rotation) * EW,
              LW = 0 === iW.flutterSpeed ? 1 : Math.cos(iW.flutter);
            WW.globalAlpha = mW, WW.globalCompositeOperation = iW.additive ? "lighter" : "source-over", WW.setTransform(NW * LW, PW * LW, -PW, NW, iW.x * this.scale, iW.y * this.scale);
            const {
              image: cW
            } = iW.sprite;
            WW.drawImage(cW, -cW.width / 2, -cW.height / 2)
          }
          WW.globalAlpha = 1, WW.globalCompositeOperation = "source-over"
        }
      }
    }
    var Wi = OW(3224),
      ii = OW(1653),
      Oi = OW(1659),
      mi = OW(3184);
    const Ei = 5e3;

    function Ni(WW) {
      let {
        request: iW
      } = WW;
      const {
        t: OW
      } = (0, PW.B)(), {
        userContext: EW
      } = (0, jW.e)(), {
        gift: sW,
        preview: YW
      } = iW, {
        isTouchScreen: yW
      } = (0, LW.p)(["isTouchScreen"]), TW = function(WW) {
        var iW;
        const OW = SW.i.find((iW => iW.id === WW));
        return null !== (iW = null === OW || void 0 === OW ? void 0 : OW.id) && void 0 !== iW ? iW : "classic"
      }(sW.wrap), uW = (oW = sW.gems) >= VW[3] ? 3 : oW >= VW[2] ? 2 : 1;
      var oW;
      const dW = `${TW}:t${uW}`,
        [vW] = (0, mW.useState)((() => function(WW, iW) {
          const [OW] = WW.cosmeticPacks;
          let mW = null;
          if ((0, Wi.f)(WW) ? mW = "rank" : void 0 === OW && WW.premiumCurrency > 0 && (mW = "gems"), void 0 === OW) return {
            cosmetics: iW,
            badge: mW
          };
          const EW = (0, ii.g)(OW),
            NW = void 0 === EW ? void 0 : Oi.e[EW];
          if (void 0 !== NW) return {
            cosmetics: NW.cosmetics,
            badge: mW
          };
          const PW = {
              ...iW
            },
            LW = new Set;
          for (const cW of (0, mi.k)(OW)) {
            const [WW, iW] = cW.split("|");
            LW.has(WW) || (LW.add(WW), PW[WW] = iW)
          }
          return {
            cosmetics: PW,
            badge: mW
          }
        }(sW.items, {
          ...EW.getPlayerCosmetics()
        }))),
        [gW, pW] = (0, mW.useState)("arrive"),
        [XW, BW] = (0, mW.useState)(0),
        [qW, RW] = (0, mW.useState)(!1),
        [GW, IW] = (0, mW.useState)(!1),
        [aW, rW] = (0, mW.useState)(!1),
        zW = (0, mW.useRef)(null),
        FW = (0, mW.useRef)(null),
        Ni = {
          box: (0, mW.useRef)(null),
          body: (0, mW.useRef)(null),
          lid: (0, mW.useRef)(null),
          seam: (0, mW.useRef)(null),
          character: (0, mW.useRef)(null),
          ring: (0, mW.useRef)(null),
          beam: (0, mW.useRef)(null),
          flash: (0, mW.useRef)(null),
          shake: (0, mW.useRef)(null),
          canvas: (0, mW.useRef)(null)
        };
      (0, UW.h)("paused"), (0, mW.useEffect)((() => {
        const WW = setTimeout((() => {
          rW(!0)
        }), Ei);
        return () => {
          clearTimeout(WW)
        }
      }), []), (0, mW.useEffect)((() => {
        const WW = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          OW = Ni.canvas.current,
          mW = OW && !WW ? new QW(OW, {
            wrap: TW,
            tier: uW,
            phone: yW
          }) : null,
          EW = () => {
            null === mW || void 0 === mW || mW.resize()
          };
        window.addEventListener("resize", EW),
          function(WW) {
            for (const iW of ["wobble", "pop", "sparkle", "sting"]) nW.c.preload(eW(iW, WW))
          }(uW), pW("arrive");
        const NW = new DW({
          box: Ni.box.current,
          body: Ni.body.current,
          lid: Ni.lid.current,
          seam: Ni.seam.current,
          character: Ni.character.current,
          ring: Ni.ring.current,
          beam: Ni.beam.current,
          flash: Ni.flash.current,
          shake: Ni.shake.current
        }, {
          tier: uW,
          timeline: fW(uW),
          reducedMotion: WW,
          fx: mW,
          onPhase: pW,
          onOpened: () => {
            var WW;
            YW || ((0, cW.reportAnalyticsClick)({
              id: "gift.open_anim",
              value: dW
            }), null === (WW = iW.onOpened) || void 0 === WW || WW.call(iW))
          }
        });
        return FW.current = NW, NW.arrive(), () => {
          window.removeEventListener("resize", EW), NW.dispose(), mW && (! function(WW) {
            if (WW.frameMs.length < 10) return;
            const iW = [...WW.frameMs].sort(((WW, iW) => WW - iW)),
              OW = {
                frames: iW.length,
                medianFps: Math.round(1e3 / Math.max(iW[Math.floor(iW.length / 2)], 1)),
                p95FrameMs: Math.round(iW[Math.floor(.95 * iW.length)])
              };
            window.giftOpeningFrames = OW, console.info("[gift-opening] frames", OW)
          }(mW), mW.stop())
        }
      }), [XW]);
      const Pi = () => {
          (0, KW.d)(iW)
        },
        Li = () => {
          var WW;
          YW || (0, cW.reportAnalyticsClick)({
            id: "gift.open_skip",
            value: `${dW}:${gW}`
          }), null === (WW = FW.current) || void 0 === WW || WW.skip()
        },
        ci = qW || GW || aW,
        wi = "arrive" === gW || "wait" === gW || "charge" === gW,
        ti = "charge" === gW || "reveal" === gW || "card" === gW || "wait" === gW && ci,
        Zi = {
          "--gift-tier": CW[uW]
        };
      return (0, kW.jsx)(tW.b, {
        className: "GiftOpeningScreen",
        close: "done" === gW ? Pi : ti ? Li : () => {},
        togglePointerLock: !0,
        forcePointerUnlock: !0,
        globallyUniqueKey: "giftOpening",
        closeOnPressBackground: !1,
        children: (0, kW.jsxs)("div", {
          className: NW()("GiftOpening", `GiftOpeningTier${uW}`, `GiftOpeningPhase_${gW}`, {
            GiftOpeningDrawn: qW
          }),
          style: Zi,
          ref: Ni.shake,
          children: [(0, kW.jsx)("div", {
            className: "GiftOpeningBackdrop"
          }), (0, kW.jsx)("div", {
            className: "GiftOpeningRays"
          }), (0, kW.jsxs)("div", {
            className: "GiftOpeningStage",
            children: [(0, kW.jsx)("div", {
              className: "GiftOpeningBeam",
              ref: Ni.beam
            }), (0, kW.jsxs)("div", {
              className: "GiftOpeningCharacter",
              ref: Ni.character,
              children: [(0, kW.jsx)(mW.Suspense, {
                fallback: null,
                children: (0, kW.jsx)(AW.e, {
                  ref: zW,
                  framing: "store",
                  owner: "other",
                  turntableFromYaw: wi ? null : wW.d.store.yaw,
                  onNoWebGl: () => {
                    IW(!0)
                  },
                  onReady: () => {
                    var WW, iW;
                    null === (WW = zW.current) || void 0 === WW || WW.resetCamera(), null === (iW = zW.current) || void 0 === iW || iW.setAllCosmetics(vW.cosmetics)
                  },
                  onDrawn: () => {
                    RW(!0)
                  }
                })
              }), (GW || !wi && !qW) && (0, kW.jsx)("div", {
                className: "GiftOpeningHead",
                children: (0, kW.jsx)(bW.e, {
                  cosmetics: vW.cosmetics
                })
              }), vW.badge && (0, kW.jsx)("div", {
                className: "GiftOpeningBadge",
                children: "gems" === vW.badge ? (0, kW.jsx)(lW.g, {}) : (0, kW.jsx)(xW.c, {
                  name: "bolt"
                })
              })]
            }), (0, kW.jsx)(MW, {
              wrap: TW,
              className: NW()("GiftOpeningBox", {
                GiftOpeningBoxIdle: "wait" === gW
              }),
              rootRef: Ni.box,
              bodyRef: Ni.body,
              lidRef: Ni.lid,
              seamRef: Ni.seam
            }), (0, kW.jsx)("div", {
              className: "GiftOpeningRing",
              ref: Ni.ring
            })]
          }), (0, kW.jsx)("canvas", {
            className: "GiftOpeningFx",
            ref: Ni.canvas
          }), (0, kW.jsx)("div", {
            className: "GiftOpeningFlash",
            ref: Ni.flash
          }), wi && (0, kW.jsxs)("div", {
            className: "GiftOpeningTitle",
            children: [(0, kW.jsx)("div", {
              className: "SmallTextBold",
              children: OW("giftOpening:sentYou", {
                name: sW.senderName
              })
            }), (0, kW.jsx)(hW, {
              gift: sW
            })]
          }), "wait" === gW && ci && (0, kW.jsx)("div", {
            className: "GiftOpeningHint SmallTextBold",
            children: OW("giftOpening:tapToOpen")
          }), (0, kW.jsx)(JW, {
            gift: sW,
            shown: "card" === gW || "done" === gW
          }), "done" !== gW && (0, kW.jsx)("button", {
            type: "button",
            className: "GiftOpeningTap",
            "data-pad-default-focus": !0,
            "aria-label": OW("giftOpening:tapToOpen"),
            onClick: () => {
              var WW;
              ("wait" !== gW || ci) && (null === (WW = FW.current) || void 0 === WW || WW.tap())
            }
          }), ti && (0, kW.jsxs)(ZW.h, {
            className: "GiftOpeningSkip",
            onClick: Li,
            children: [OW("giftOpening:skip"), " ", (0, kW.jsx)(xW.c, {
              name: "arrow-right"
            })]
          }), "done" === gW && (0, kW.jsx)(HW, {
            gift: sW,
            preview: YW,
            analyticsValue: dW,
            onReplay: () => {
              BW(XW + 1)
            },
            onClose: Pi
          })]
        })
      })
    }
  },
  35270: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => EW,
      f: () => ZW
    });
    var mW = OW(1659);

    function EW(WW) {
      var iW;
      return {
        ...LW.store,
        yaw: LW.store.yaw + (null !== (iW = mW.e[WW].previewYaw) && void 0 !== iW ? iW : 0)
      }
    }
    const NW = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      PW = {
        ...NW,
        radius: 33,
        target: [0, 3.9, 0]
      },
      LW = {
        player: NW,
        store: PW,
        showcase: {
          ...PW,
          target: [0, 1.9, 0]
        }
      };

    function cW(WW, iW) {
      WW instanceof Promise ? WW.then(iW).catch((WW => {
        console.error("Couldn't open the preview", WW)
      })) : iW(WW)
    }
    class wW {
      constructor(WW) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
        }))
      }
      show(WW) {
        var iW;
        this.view = WW, null === (iW = this.opened) || void 0 === iW || iW.show(WW)
      }
      resize(WW, iW) {
        var OW;
        this.size = {
          width: WW,
          height: iW
        }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    class tW {
      constructor(WW) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), cW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var WW, iW;
        return null !== (WW = null === (iW = this.opened) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
      }
      setCosmetic(WW, iW) {
        var OW;
        null === (OW = this.opened) || void 0 === OW || OW.setCosmetic(WW, iW)
      }
      setNametag(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.setNametag(WW)
      }
      playEmote(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.playEmote(WW)
      }
      setOrbit(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.setOrbit(WW)
      }
      resetCamera() {
        var WW;
        null === (WW = this.opened) || void 0 === WW || WW.resetCamera()
      }
      async untilDrawn(WW) {
        var iW;
        await this.ready, await (null === (iW = this.opened) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
      }
      resize(WW, iW) {
        var OW;
        this.size = {
          width: WW,
          height: iW
        }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    const ZW = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(WW) {
        this.host = WW
      }
      setDefaultHost(WW) {
        this.makeDefault = WW
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(WW) {
        return new wW(this.current().openMob(WW))
      }
      openPet(WW) {
        return new wW(this.current().openPet(WW))
      }
      openMobLineup(WW) {
        return new wW(this.current().openMobLineup(WW))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(WW, iW) {
        return new tW(this.current().openCharacter(WW, iW))
      }
    }
  },
  35264: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW.d,
      e: () => mW.e,
      f: () => mW.f
    });
    var mW = OW(35270);
    class EW {
      constructor(WW) {
        this.load = WW, this.loaded = null, this.loading = null
      }
      run(WW) {
        return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
          throw this.loading = null, WW
        })), this.loading.then(WW))
      }
    }
    class NW {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(260), OW.e(278), OW.e(292), OW.e(295), OW.e(91), OW.e(252), OW.e(266), OW.e(112), OW.e(124), OW.e(257), OW.e(142), OW.e(90), OW.e(122), OW.e(310)]).then((() => OW(42563))))), this.characterScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(177), OW.e(260), OW.e(278), OW.e(292), OW.e(295), OW.e(91), OW.e(224), OW.e(252), OW.e(266), OW.e(112), OW.e(124), OW.e(257), OW.e(142), OW.e(90), OW.e(122), OW.e(279), OW.e(184)]).then((() => OW(42656)))))
      }
      openMob(WW) {
        return this.mobScene.run((iW => iW.openMobPreview(WW)))
      }
      openPet(WW) {
        return this.mobScene.run((iW => iW.openPetPreview(WW)))
      }
      openMobLineup(WW) {
        return this.mobScene.run((iW => iW.openMobLineupPreview(WW)))
      }
      openCharacter(WW, iW) {
        return this.characterScene.run((OW => OW.openCharacterPreview(WW, iW)))
      }
    }
    mW.f.setDefaultHost((() => new NW))
  },
  37575: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      d: () => cW,
      g: () => PW
    });
    var mW = OW(643),
      EW = OW(2365);

    function NW(WW) {
      return WW === (0, EW.h)().Av ? (0, EW.h)().Dv : WW
    }

    function PW(WW) {
      return !(0, mW.K)(WW) && NW(WW) === (0, EW.h)().Dv
    }
    const LW = "gravity";

    function cW() {
      return (0, EW.h)().physics[LW][1]
    }
  },
  37555: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => yW
    });
    var mW = OW(37559),
      EW = OW(182),
      NW = OW(5615),
      PW = OW(37563),
      LW = OW(37569),
      cW = OW(37626),
      wW = OW(37575),
      tW = OW(352),
      ZW = OW.n(tW),
      xW = OW(2365),
      lW = OW(37618),
      AW = OW(27),
      bW = OW(25),
      jW = OW(37583),
      UW = OW(37588),
      kW = OW(37590),
      sW = OW(37597),
      MW = OW(37609);
    const KW = new Set(["note"]);
    const SW = {
      stop: () => SW,
      fade: () => SW,
      rate: () => SW,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => SW,
      setPannerAttr: () => SW,
      setPosition: () => SW
    };
    class YW {
      constructor(WW) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new cW.j, this._howl = (0, LW.countDecodesAs)(new NW.Howl({
          src: [...(0, mW.u)(WW).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = this._howl.play(PW.d);
        WW && this._howl.loop(!0, iW);
        let OW = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), iW);
        const mW = {
          stop: () => {
            var WW;
            return null === (WW = this.liveHowl()) || void 0 === WW || WW.stop(iW), mW
          },
          fade: (WW, OW, EW) => {
            var NW;
            return null === (NW = this.liveHowl()) || void 0 === NW || NW.fade(WW, OW, EW, iW), mW
          },
          rate: WW => {
            var OW;
            return null === (OW = this.liveHowl()) || void 0 === OW || OW.rate(WW, iW), mW
          },
          stopsAtOnce: () => this._howl.playing(iW) && !this._howl._playLock,
          isAlive: () => {
            const WW = this._howl._soundById(iW);
            return !this._loadFailed && !!WW && !WW._ended
          },
          getDurationMs: () => this._howl._soundById(iW) ? 1e3 * this._howl.duration(iW) / this._howl.rate(iW) : 0,
          getVolume: () => OW * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => OW,
          setRelativeVolume: WW => {
            var EW;
            if (WW > 1) throw new Error("Volume should be <= 1");
            return OW = bW.d.get("soundOnFromAd") ? WW : 0, null === (EW = this.liveHowl()) || void 0 === EW || EW.volume(Math.min(1, OW * this._volumeMultiplier.getTotalMultipliedVal()), iW), mW
          },
          setPannerAttr: WW => {
            let {
              coneInnerAngle: OW,
              coneOuterAngle: EW = 360,
              coneOuterGain: NW,
              distanceModel: PW,
              maxDistance: LW,
              panningModel: cW,
              refDistance: wW,
              rolloffFactor: tW
            } = WW;
            return this._setPannerAttr({
              id: iW,
              coneInnerAngle: OW,
              coneOuterAngle: EW,
              coneOuterGain: NW,
              distanceModel: PW,
              maxDistance: LW,
              panningModel: cW,
              refDistance: wW,
              rolloffFactor: tW
            }), mW
          },
          setPosition: WW => {
            var OW;
            return null === (OW = this.liveHowl()) || void 0 === OW || OW.pos(WW[2], WW[1], WW[0], iW), mW
          }
        };
        return mW
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, PW.f)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(WW) {
        this._volumeMultiplier.setMultiplierType("globalVolume", WW), this._howl.volume(WW)
      }
      _setPannerAttr(WW) {
        let {
          id: iW,
          coneInnerAngle: OW = 360,
          coneOuterAngle: mW = 360,
          coneOuterGain: EW = 0,
          distanceModel: NW = "inverse",
          maxDistance: PW = 1e3,
          panningModel: LW = "HRTF",
          refDistance: cW = lW.g,
          rolloffFactor: wW = 1
        } = WW;
        const tW = this.liveHowl();
        if (null === tW) return;
        tW.pannerAttr({
          coneOuterAngle: mW
        }, iW);
        const ZW = {
          coneInnerAngle: OW,
          coneOuterAngle: mW,
          coneOuterGain: EW,
          distanceModel: NW,
          maxDistance: PW,
          panningModel: LW,
          refDistance: cW,
          rolloffFactor: wW
        };
        tW.pannerAttr(ZW, iW)
      }
    }
    const yW = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new jW.c, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, AW.l.subscribe("appManagerUpdated|soundVolume", (WW => {
          const iW = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const OW of iW) OW.setGlobalVolume(WW)
        }))
      }
      play(WW, iW) {
        var OW;
        let NW, PW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (OW = (0, xW.h)()) || void 0 === OW ? void 0 : OW.Dv,
          LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lW.f,
          cW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lW.g,
          tW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var AW;
        (0, xW.h)() ? NW = !!Array.isArray(PW) || (0, wW.b)(PW) !== (null === (AW = (0, xW.h)()) || void 0 === AW ? void 0 : AW.Dv): NW = !1;
        const bW = (0, mW.n)(WW),
          UW = this.loadSound(NW ? this.spatialSounds : this.stereoSounds, WW);
        if (!NW) {
          const WW = UW.play(tW);
          return WW.setRelativeVolume(iW), WW
        }
        const kW = (0, xW.h)(),
          sW = Array.isArray(PW) ? PW : kW.EY.Vk(PW),
          YW = kW.EY.Vk(kW.Dv);
        if (!sW || ZW().sqrDist(sW, YW) > LW * LW) return SW;
        let yW;
        if (!tW) {
          if (!this.spatialVoices.admit({
              group: KW.has(bW) ? null : (0, jW.f)(WW),
              loudness: (0, jW.d)(iW, ZW().TP(sW, YW), cW),
              startMs: performance.now(),
              getDurationMs: () => {
                var WW, iW;
                return null !== (WW = null === (iW = yW) || void 0 === iW ? void 0 : iW.getDurationMs()) && void 0 !== WW ? WW : 0
              },
              isAlive: () => {
                var WW, iW;
                return null !== (WW = null === (iW = yW) || void 0 === iW ? void 0 : iW.isAlive()) && void 0 !== WW && WW
              },
              canStop: () => {
                var WW, iW;
                return null !== (WW = null === (iW = yW) || void 0 === iW ? void 0 : iW.stopsAtOnce()) && void 0 !== WW && WW
              },
              stop: () => {
                var WW;
                null === (WW = yW) || void 0 === WW || WW.stop()
              }
            })) return SW
        }
        return yW = UW.play(tW), yW.setRelativeVolume(iW), yW.setPannerAttr({
          refDistance: cW
        }), yW.setPosition([sW[0], sW[1] + EW.f.ZU * EW.f.playerEyeToHeightRatio, sW[2]]), !tW && (0, MW.h)() && (0, MW.e)(bW, WW, sW[0] - YW[0], sW[2] - YW[2]), yW
      }
      preload(WW) {
        const iW = (0, mW.s)(WW) ? [WW] : (0, mW.x)(WW);
        if (0 === iW.length) throw new Error(`Invalid sound name ${WW} (no sound has it or starts with it)`);
        for (const OW of iW) this.loadSound(this.stereoSounds, OW)
      }
      preloadAtIdle(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sW.c;
        const OW = WW.filter((WW => !this.idlePreloads.has(WW)));
        for (const EW of OW) this.idlePreloads.add(EW);
        const mW = this.idlePreloadGeneration;
        (0, kW.c)(OW, {
          ...iW,
          uW: () => mW !== this.idlePreloadGeneration,
          fetchFile: WW => {
            this.idlePreloads.delete(WW);
            try {
              return this.preload(WW), Promise.resolve()
            } catch (iW) {
              return Promise.reject(iW)
            }
          }
        })
      }
      loadSound(WW, iW) {
        const OW = WW[iW];
        if (OW) return OW;
        const EW = this.makeSound(WW, iW);
        for (const PW of null !== (NW = (0, mW.t)(iW)) && void 0 !== NW ? NW : []) {
          var NW;
          WW[PW] || this.makeSound(WW, PW)
        }
        return EW
      }
      makeSound(WW, iW) {
        (0, sW.e)(iW);
        const OW = new YW(iW);
        return OW.setGlobalVolume(bW.d.get("soundVolume")), WW[iW] = OW, OW
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const WW of [this.stereoSounds, this.spatialSounds])
          for (const [iW, OW] of Object.entries(WW)) !UW.e.has((0, mW.n)(iW)) && OW.loaded() && (OW.unloadOnceIdle(), delete WW[iW])
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);