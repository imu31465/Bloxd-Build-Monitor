export const id = 227;
export const ids = [227];
export const modules = {
  37457: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      GiftOpening: () => uJ
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(1270),
      qR = GR(25),
      iR = GR(1618),
      fR = GR(35193),
      VR = GR(5338),
      KR = GR(1590),
      wR = GR(1468),
      rR = GR(3413),
      eR = GR(3724),
      aR = GR(3361),
      LR = GR(1196),
      nR = GR(4394),
      UR = GR(1378);
    const WR = {
      festive: "\ud83c\udf84 \u26c4 \ud83c\udf81",
      sweater: "\u2744"
    };

    function AR(RR) {
      let {
        wrap: JR,
        className: GR,
        rootRef: yR,
        bodyRef: tR,
        lidRef: ZR,
        seamRef: qR
      } = RR;
      const iR = WR[JR];
      return (0, UR.jsxs)("div", {
        className: uR()("GiftBox", `GiftBoxWrap_${JR}`, GR),
        ref: yR,
        children: [(0, UR.jsx)("div", {
          className: "GiftBoxPlinth"
        }), (0, UR.jsxs)("div", {
          className: "GiftBoxBody",
          ref: tR,
          children: [(0, UR.jsxs)("div", {
            className: "GiftBoxCube",
            children: [(0, UR.jsxs)("div", {
              className: "GiftBoxFace GiftBoxFront",
              children: [iR && (0, UR.jsx)("span", {
                className: "GiftBoxPrint",
                children: iR
              }), "blocks" === JR && (0, UR.jsxs)("svg", {
                className: "GiftBoxCracks",
                viewBox: "0 0 100 80",
                "aria-hidden": !0,
                children: [(0, UR.jsx)("polyline", {
                  points: "50,0 44,18 56,30 47,48 58,62 52,80"
                }), (0, UR.jsx)("polyline", {
                  points: "44,18 24,26 14,44"
                }), (0, UR.jsx)("polyline", {
                  points: "56,30 78,36 90,58"
                })]
              })]
            }), (0, UR.jsx)("div", {
              className: "GiftBoxFace GiftBoxSide"
            }), (0, UR.jsxs)("div", {
              className: "GiftBoxLid",
              ref: ZR,
              children: [(0, UR.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidFront"
              }), (0, UR.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidSide"
              }), (0, UR.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidTop"
              }), (0, UR.jsxs)("div", {
                className: "GiftBoxBow",
                children: [(0, UR.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowLeft"
                }), (0, UR.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowRight"
                }), (0, UR.jsx)("div", {
                  className: "GiftBoxBowKnot"
                })]
              })]
            })]
          }), (0, UR.jsx)("div", {
            className: "GiftBoxSeam",
            ref: qR
          })]
        })]
      })
    }
    var CR = GR(5112),
      XR = GR(4276),
      MR = GR(3062);

    function BR(RR, JR) {
      const [GR] = JR.cosmeticPacks;
      return void 0 !== GR ? (0, MR.j)(GR) : JR.superDays > 0 ? RR("paymentHistory:superRankDays", {
        count: JR.superDays
      }) : JR.hyperDays > 0 ? RR("paymentHistory:hyperRankDays", {
        count: JR.hyperDays
      }) : RR("paymentHistory:premiumCurrency", {
        count: JR.premiumCurrency
      })
    }

    function lR(RR) {
      var JR, GR;
      const {
        t: yR
      } = (0, ZR.A)(), tR = XR.h.find((JR => JR.id === RR.message));
      return {
        message: void 0 === tR ? null : yR(tR.key, {
          name: RR.recipientName,
          level: null !== (JR = RR.senderLevel) && void 0 !== JR ? JR : 1,
          tier: null !== (GR = RR.tierLabel) && void 0 !== GR ? GR : ""
        }),
        level: null === RR.senderLevel || "levelFlex" === (null === tR || void 0 === tR ? void 0 : tR.kind) ? null : yR("giftOpening:gifterLevel", {
          level: RR.senderLevel
        })
      }
    }

    function pR(RR) {
      let {
        gift: JR,
        shown: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)(), {
        message: tR,
        level: qR
      } = lR(JR);
      return (0, UR.jsxs)("div", {
        className: uR()("GiftOpeningCard", {
          GiftOpeningCardShown: GR
        }),
        children: [(0, UR.jsx)("div", {
          className: "GiftOpeningItem SmallTextBold",
          children: BR(yR, JR.items)
        }), null !== tR && (0, UR.jsx)("div", {
          className: "GiftOpeningCardMessage SmallTextLight",
          children: tR
        }), (0, UR.jsxs)("div", {
          className: "GiftOpeningFrom SmallTextLight",
          children: [JR.senderName, null !== qR && ` \xb7 ${qR}`]
        })]
      })
    }

    function gR(RR) {
      let {
        gift: JR
      } = RR;
      const {
        message: GR,
        level: yR
      } = lR(JR);
      return (0, UR.jsxs)(UR.Fragment, {
        children: [null !== GR && (0, UR.jsx)("div", {
          className: "GiftOpeningIntroMessage SmallTextLight",
          children: `"${GR}"`
        }), null !== yR && (0, UR.jsx)("div", {
          className: "GiftOpeningIntroLevel SmallTextBold",
          children: yR
        })]
      })
    }

    function bR(RR) {
      let {
        gift: JR,
        preview: GR,
        analyticsValue: yR,
        onReplay: tR,
        onClose: uR
      } = RR;
      const {
        t: fR
      } = (0, ZR.A)(), {
        gameState: VR
      } = (0, qR.o)(["gameState"]), rR = !GR && JR.items.cosmeticPacks.length > 0 && !(0, qR.h)(VR);
      return (0, UR.jsxs)("div", {
        className: "GiftOpeningButtons",
        children: [GR && (0, UR.jsxs)(KR.g, {
          className: "GiftOpeningButton",
          touchPressOn: "pointerup",
          onClick: tR,
          children: [(0, UR.jsx)(wR.d, {
            name: "rotate-right"
          }), " ", fR("giftOpening:replay")]
        }), rR && (0, UR.jsx)(KR.g, {
          className: "GiftOpeningButton",
          padDefaultFocus: !0,
          touchPressOn: "pointerup",
          onClick: () => {
            (0, iR.reportAnalyticsClick)({
              id: "gift.open_customise",
              value: yR
            }), (0, MR.o)(), uR()
          },
          children: fR("general:customize")
        }), (0, UR.jsx)(KR.g, {
          className: "GiftOpeningButton",
          padDefaultFocus: !rR,
          touchPressOn: "pointerup",
          onClick: uR,
          children: fR(GR ? "giftOpening:back" : "giftOpening:done")
        })]
      })
    }
    var vR = GR(37466);
    const OR = {
        1: "harp_pling",
        2: "exp_levelup",
        3: "trumpetFlare"
      },
      xR = {
        wobble: "chestClose",
        pop: "chestOpen",
        sparkle: "exp_collect"
      },
      NR = {
        wobble: .55,
        pop: .8,
        sparkle: .4,
        sting: .7
      };

    function DR(RR, JR) {
      return "sting" === RR ? OR[JR] : xR[RR]
    }

    function HR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      try {
        vR.d.play(DR(RR, JR), NR[RR]).rate(Math.pow(2, 2 * GR / 12))
      } catch (yR) {
        console.warn("[gift-opening] a sound failed to play", yR)
      }
    }
    const oR = "cubic-bezier(0.22, 1, 0.36, 1)";
    class cR {
      constructor(RR, JR) {
        this.parts = RR, this.options = JR, this.phase = "arrive", this.timers = [], this.animations = [], this.opened = !1, this.popped = !1
      }
      setPhase(RR) {
        this.phase = RR, this.options.onPhase(RR)
      }
      at(RR, JR) {
        this.timers.push(setTimeout(JR, RR))
      }
      animate(RR, JR, GR) {
        this.animations.push(RR.animate(JR, {
          fill: "forwards",
          ...GR
        }))
      }
      markOpened() {
        this.opened || (this.opened = !0, this.options.onOpened())
      }
      arrive() {
        const {
          timeline: RR,
          reducedMotion: JR
        } = this.options, GR = JR ? [{
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
        this.animate(this.parts.body, GR, {
          duration: JR ? 200 : RR.arriveMs,
          fill: "none"
        }), this.at(JR ? 200 : RR.arriveMs, (() => {
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
        }), HR("sting", this.options.tier), this.at(300, (() => {
          this.setPhase("done")
        }))
      }
      charge() {
        const {
          timeline: RR,
          tier: JR,
          fx: GR
        } = this.options;
        this.setPhase("charge");
        const yR = RR.wobbles,
          tR = RR.burstAt,
          uR = (RR.chargeMs - 80) / yR.length,
          ZR = [{
            transform: "none",
            offset: 0
          }, {
            transform: "scale(1.06, 0.92)",
            offset: 80 / tR
          }];
        yR.forEach(((RR, GR) => {
          const yR = 80 + GR * uR;
          ZR.push({
            transform: `rotate(${RR}deg) translateX(${.3*RR}px)`,
            offset: (yR + .3 * uR) / tR
          }), ZR.push({
            transform: `rotate(${-RR}deg) translateX(${.3*-RR}px)`,
            offset: (yR + .75 * uR) / tR
          }), this.at(yR, (() => {
            HR("wobble", JR, GR)
          }))
        })), ZR.push({
          transform: "rotate(0deg)",
          offset: RR.chargeMs / tR
        }), ZR.push({
          transform: "scale(1.12, 0.84)",
          offset: (RR.chargeMs + 40) / tR
        }), ZR.push({
          transform: "scale(1.12, 0.84)",
          offset: 1
        }), this.animate(this.parts.body, ZR, {
          duration: tR
        });
        const qR = [{
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.6)"
        }];
        yR.forEach(((RR, JR) => {
          const GR = (JR + 1) / (yR.length + .5);
          qR.push({
            opacity: GR,
            transform: `translate(-50%, -50%) scale(${.7+.5*GR})`,
            offset: (80 + (JR + 1) * uR) / tR
          })
        })), qR.push({
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1.3)"
        }), this.animate(this.parts.seam, qR, {
          duration: tR,
          easing: "linear"
        });
        const iR = this.parts.box.querySelector(".GiftBoxCracks");
        iR && this.animate(iR, [{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: tR,
          easing: "steps(3, end)"
        });
        const {
          x: fR,
          y: VR
        } = this.boxCentre();
        null === GR || void 0 === GR || GR.charge(fR, VR, RR.chargeMs), this.at(tR, (() => {
          this.burst(tR)
        }))
      }
      boxCentre() {
        const RR = this.parts.box.getBoundingClientRect();
        return {
          x: RR.left + RR.width / 2,
          y: RR.top + .45 * RR.height,
          floorY: RR.bottom
        }
      }
      burst(RR) {
        const {
          timeline: JR,
          tier: GR,
          fx: yR
        } = this.options;
        if (this.popped) return;
        this.popped = !0, this.markOpened();
        const tR = JR => Math.max(0, JR - RR),
          uR = {
            duration: 620,
            easing: oR
          };
        this.animate(this.parts.lid, [{
          transform: "translateY(-0.36em)"
        }, {
          transform: "translate(0.35em, -2.2em) rotateZ(26deg) rotateX(24deg)",
          offset: .55
        }, {
          transform: "translate(0.6em, -3.2em) rotateZ(40deg) rotateX(40deg)"
        }], uR);
        for (const fR of this.parts.lid.querySelectorAll(":scope > *")) this.animate(fR, [{
          opacity: 1
        }, {
          opacity: 1,
          offset: .55
        }, {
          opacity: 0
        }], uR);
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
            easing: oR
          }), JR.flashAlpha > 0 && this.animate(this.parts.flash, [{
            opacity: 0
          }, {
            opacity: JR.flashAlpha,
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
            easing: oR
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
            easing: oR
          }), JR.kickPx > 0) {
          const RR = JR.kickPx;
          this.animate(this.parts.shake, [{
            transform: "none"
          }, {
            transform: `translate(${RR}px, ${-RR}px)`
          }, {
            transform: `translate(${.7*-RR}px, ${.5*RR}px)`
          }, {
            transform: `translate(${.4*RR}px, ${.3*RR}px)`
          }, {
            transform: "none"
          }], {
            duration: 300,
            easing: "linear",
            fill: "none"
          })
        }
        HR("pop", GR), HR("sparkle", GR, 2);
        const {
          x: ZR,
          y: qR,
          floorY: iR
        } = this.boxCentre();
        null === yR || void 0 === yR || yR.burst(ZR, qR, JR.burstParticles, iR), this.at(tR(JR.revealAt), (() => {
          this.reveal()
        })), this.at(tR(JR.cardAt), (() => {
          this.setPhase("card")
        })), this.at(tR(JR.buttonsAt), (() => {
          this.setPhase("done")
        }))
      }
      reveal() {
        const {
          timeline: RR,
          tier: JR,
          fx: GR
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
          easing: oR
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
        }), HR("sting", JR), null === GR || void 0 === GR || GR.linger(this.boxCentre().x, RR.buttonsAt - RR.revealAt + 1500, RR.rain)
      }
      skip() {
        var RR;
        (this.clearTimers(), this.cancelAnimations(), this.popped) || (null === (RR = this.options.fx) || void 0 === RR || RR.clear());
        this.markOpened(), this.parts.body.style.opacity = "0", this.parts.character.style.opacity = "1", this.parts.character.style.transform = "none", this.setPhase("done")
      }
      cancelAnimations() {
        for (const RR of this.animations) RR.cancel();
        this.animations = []
      }
      clearTimers() {
        for (const RR of this.timers) clearTimeout(RR);
        this.timers = []
      }
      dispose() {
        this.clearTimers(), this.cancelAnimations(), this.parts.body.style.removeProperty("opacity"), this.parts.character.style.removeProperty("opacity"), this.parts.character.style.removeProperty("transform")
      }
    }
    const PR = {
      2: 500,
      3: 1200
    };
    const IR = {
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

    function mR(RR) {
      const JR = IR[RR];
      return {
        ...JR,
        burstAt: JR.chargeMs + JR.hitStopMs
      }
    }
    const zR = {
      1: "#5ab8ff",
      2: "#b673ff",
      3: "#ffc83d"
    };

    function SR(RR, JR, GR) {
      const yR = document.createElement("canvas"),
        tR = Math.ceil(RR * JR);
      yR.width = tR, yR.height = tR;
      const uR = yR.getContext("2d");
      return uR && GR(uR, tR), {
        image: yR
      }
    }

    function jR(RR, JR) {
      return SR(16, JR, ((JR, GR) => {
        JR.fillStyle = RR, JR.fillRect(.3 * GR, 0, .4 * GR, GR)
      }))
    }

    function dR(RR, JR, GR) {
      return SR(14, GR, ((GR, yR) => {
        GR.fillStyle = JR, GR.fillRect(0, 0, yR, yR), GR.fillStyle = RR, GR.fillRect(0, 0, yR, .35 * yR)
      }))
    }

    function ER(RR, JR) {
      return SR(18, JR, ((JR, GR) => {
        JR.fillStyle = RR, JR.beginPath(), JR.moveTo(GR / 2, 0), JR.lineTo(.85 * GR, .55 * GR), JR.lineTo(GR / 2, GR), JR.lineTo(.2 * GR, .45 * GR), JR.closePath(), JR.fill(), JR.fillStyle = "rgba(255,255,255,0.55)", JR.beginPath(), JR.moveTo(GR / 2, 0), JR.lineTo(.6 * GR, .5 * GR), JR.lineTo(.2 * GR, .45 * GR), JR.closePath(), JR.fill()
      }))
    }

    function YR(RR, JR) {
      return SR(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, JR, ((JR, GR) => {
        const yR = GR / 2;
        JR.fillStyle = RR, JR.beginPath();
        for (let RR = 0; RR < 10; RR++) {
          const GR = RR % 2 === 0 ? yR : .45 * yR,
            tR = -Math.PI / 2 + RR * Math.PI / 5;
          JR.lineTo(yR + Math.cos(tR) * GR, yR + Math.sin(tR) * GR)
        }
        JR.closePath(), JR.fill()
      }))
    }

    function kR(RR, JR) {
      return SR(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24, JR, ((JR, GR) => {
        const yR = JR.createRadialGradient(GR / 2, GR / 2, 0, GR / 2, GR / 2, GR / 2);
        yR.addColorStop(0, "rgba(255,255,255,1)"), yR.addColorStop(.25, RR), yR.addColorStop(1, "rgba(0,0,0,0)"), JR.fillStyle = yR, JR.fillRect(0, 0, GR, GR)
      }))
    }
    const QR = {
      classic: RR => [jR("#e63946", RR), jR("#ffffff", RR), jR("#ffd166", RR), jR("#2a9d8f", RR), YR("#ffd166", RR, 14)],
      blocks: RR => [dR("#6abe30", "#8a5a33", RR), dR("#8a5a33", "#6d4426", RR), dR("#9da3a6", "#7b8083", RR), dR("#7ff3f0", "#3fb7c0", RR)],
      gems: RR => [ER("#b673ff", RR), ER("#ff7ad9", RR), ER("#6fe0ff", RR), ER("#ffffff", RR)],
      stars: RR => [YR("#fff6b0", RR), YR("#ffffff", RR, 14), YR("#9fd0ff", RR, 12), kR("#9fd0ff", RR, 16)],
      legend: RR => [jR("#ffc83d", RR), jR("#ff5d8f", RR), jR("#5ab8ff", RR), jR("#7cf29a", RR), YR("#ffc83d", RR), YR("#fff4c2", RR, 14)],
      sweater: RR => [kR("#ffffff", RR, 18), kR("#dff3ff", RR, 12), YR("#ffffff", RR, 12)],
      festive: RR => ["\ud83c\udf84", "\u26c4", "\ud83c\udf81", "\u2744\ufe0f", "\u2b50"].map((JR => function(RR, JR) {
        return SR(26, JR, ((JR, GR) => {
          JR.font = `${Math.round(.8*GR)}px sans-serif`, JR.textAlign = "center", JR.textBaseline = "middle", JR.fillText(RR, GR / 2, GR / 2 + .05 * GR)
        }))
      }(JR, RR)))
    };
    const FR = {
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

    function TR(RR) {
      let [JR, GR] = RR;
      return JR + Math.random() * (GR - JR)
    }

    function sR(RR) {
      return RR[Math.floor(Math.random() * RR.length)]
    }
    class hR {
      constructor(RR, JR) {
        var GR, yR, tR;
        this.canvas = RR, this.options = JR, this.context = void 0, this.sprites = void 0, this.particles = [], this.scale = void 0, this.frame = 0, this.lastAt = 0, this.embersUntil = 0, this.embersX = 0, this.rainUntil = 0, this.spawnCarry = 0, this.stopped = !1, this.frameMs = [], this.gK = RR => {
          const JR = Math.min(RR - this.lastAt, 50);
          this.lastAt = RR, this.spawnLingering(JR), this.step(JR), this.draw();
          const GR = RR < this.embersUntil || RR < this.rainUntil;
          this.frame = this.particles.length > 0 || GR ? requestAnimationFrame(this.gK) : 0, 0 === this.frame && (this.canvas.style.visibility = "hidden")
        }, this.context = RR.getContext("2d"), this.scale = Math.min(window.devicePixelRatio || 1, JR.phone ? 1.5 : 2), this.sprites = (GR = JR.wrap, yR = zR[JR.tier], tR = this.scale, {
          burst: QR[GR](tR),
          spark: kR(yR, tR),
          rain: [YR("#ffc83d", tR, 16), jR("#ffc83d", tR), jR("#fff1b8", tR)]
        }), this.resize()
      }
      resize() {
        const {
          clientWidth: RR,
          clientHeight: JR
        } = this.canvas;
        this.canvas.width = Math.round(RR * this.scale), this.canvas.height = Math.round(JR * this.scale)
      }
      count(RR) {
        return Math.round(this.options.phone ? RR / 2 : RR)
      }
      add(RR) {
        this.particles.push({
          motion: "fall",
          KD: 0,
          vy: 0,
          gravity: 0,
          drag: 0,
          rotation: Math.random() * Math.PI * 2,
          spin: 0,
          flutterSpeed: 0,
          fromX: RR.x,
          fromY: RR.y,
          toX: RR.x,
          toY: RR.y,
          floorY: 1 / 0,
          additive: !1,
          ...RR,
          flutter: Math.random() * Math.PI * 2,
          ageMs: 0
        }), this.wake()
      }
      charge(RR, JR, GR) {
        for (let yR = 0; yR < this.count(18 + 8 * this.options.tier); yR++) {
          const yR = Math.random() * Math.PI * 2,
            tR = TR([120, 240]);
          this.add({
            sprite: this.sprites.spark,
            motion: "converge",
            x: RR,
            y: JR,
            fromX: RR + Math.cos(yR) * tR,
            fromY: JR + Math.sin(yR) * tR,
            size: TR([.5, 1]),
            lifeMs: GR * TR([.55, 1]),
            additive: !0
          })
        }
      }
      burst(RR, JR, GR, yR) {
        const tR = FR[this.options.wrap];
        for (let uR = 0; uR < this.count(GR); uR++) {
          const GR = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.5,
            uR = TR(tR.speed);
          this.add({
            sprite: sR(this.sprites.burst),
            x: RR + 30 * (Math.random() - .5),
            y: JR,
            KD: Math.cos(GR) * uR,
            vy: Math.sin(GR) * uR,
            gravity: tR.gravity,
            drag: tR.drag,
            spin: 14 * (Math.random() - .5),
            flutterSpeed: tR.flutter ? TR([8, 16]) : 0,
            size: TR([.7, 1.15]),
            lifeMs: TR(tR.lifeMs),
            floorY: tR.bounce ? yR : 1 / 0
          })
        }
        for (let uR = 0; uR < this.count(16 + 8 * this.options.tier); uR++) {
          const GR = Math.random() * Math.PI * 2,
            yR = TR([300, 900]);
          this.add({
            sprite: this.sprites.spark,
            x: RR,
            y: JR,
            KD: Math.cos(GR) * yR,
            vy: Math.sin(GR) * yR,
            gravity: 200,
            drag: .05,
            size: TR([.4, .9]),
            lifeMs: TR([350, 700]),
            additive: !0
          })
        }
      }
      linger(RR, JR, GR) {
        const yR = performance.now();
        this.embersX = RR, this.embersUntil = yR + JR, this.rainUntil = GR ? yR + Math.min(JR, 1800) : 0, this.wake()
      }
      spawnLingering(RR) {
        const {
          clientWidth: JR,
          clientHeight: GR
        } = this.canvas, yR = performance.now(), tR = (yR < this.embersUntil ? this.count(14) : 0) + (yR < this.rainUntil ? this.count(50) : 0);
        for (this.spawnCarry += tR * RR / 1e3; this.spawnCarry >= 1;) this.spawnCarry--, yR < this.rainUntil && Math.random() < .75 ? this.add({
          sprite: sR(this.sprites.rain),
          x: Math.random() * JR,
          y: -20,
          KD: 60 * (Math.random() - .5),
          vy: TR([160, 320]),
          gravity: 500,
          drag: .2,
          spin: 8 * (Math.random() - .5),
          flutterSpeed: TR([6, 12]),
          size: TR([.6, 1]),
          lifeMs: 2200
        }) : this.add({
          sprite: this.sprites.spark,
          motion: "float",
          x: this.embersX + (Math.random() - .5) * Math.min(JR, 420),
          y: GR * TR([.55, .8]),
          KD: 20 * (Math.random() - .5),
          vy: -TR([30, 70]),
          drag: .6,
          size: TR([.3, .6]),
          lifeMs: TR([1200, 2e3]),
          additive: !0
        })
      }
      clear() {
        var RR;
        this.particles.length = 0, this.embersUntil = 0, this.rainUntil = 0, null === (RR = this.context) || void 0 === RR || RR.clearRect(0, 0, this.canvas.width, this.canvas.height)
      }
      stop() {
        this.stopped = !0, cancelAnimationFrame(this.frame), this.frame = 0, this.clear(), this.canvas.style.visibility = "hidden"
      }
      wake() {
        0 !== this.frame || this.stopped || (this.lastAt = performance.now(), this.frame = requestAnimationFrame(this.gK), this.canvas.style.visibility = "visible")
      }
      step(RR) {
        const JR = RR / 1e3;
        let GR = 0;
        for (const yR of this.particles)
          if (yR.ageMs += RR, !(yR.ageMs >= yR.lifeMs)) {
            if ("converge" === yR.motion) {
              const RR = yR.ageMs / yR.lifeMs,
                JR = RR * RR * RR;
              yR.x = yR.fromX + (yR.toX - yR.fromX) * JR, yR.y = yR.fromY + (yR.toY - yR.fromY) * JR
            } else {
              const RR = Math.pow(1 - yR.drag, JR);
              yR.KD *= RR, yR.vy = yR.vy * RR + yR.gravity * JR, yR.x += yR.KD * JR, yR.y += yR.vy * JR, yR.y > yR.floorY && yR.vy > 0 && (yR.y = yR.floorY, yR.vy *= -.35, yR.KD *= .6, yR.floorY = 1 / 0)
            }
            yR.rotation += yR.spin * JR, yR.flutter += yR.flutterSpeed * JR, this.particles[GR++] = yR
          } this.particles.length = GR
      }
      draw() {
        const RR = this.context;
        if (RR) {
          RR.setTransform(1, 0, 0, 1, 0, 0), RR.clearRect(0, 0, this.canvas.width, this.canvas.height);
          for (const JR of this.particles) {
            const GR = JR.ageMs / JR.lifeMs,
              yR = "converge" === JR.motion ? .35 + .65 * GR : Math.min(1, 4 * (1 - GR)),
              tR = JR.size,
              uR = Math.cos(JR.rotation) * tR,
              ZR = Math.sin(JR.rotation) * tR,
              qR = 0 === JR.flutterSpeed ? 1 : Math.cos(JR.flutter);
            RR.globalAlpha = yR, RR.globalCompositeOperation = JR.additive ? "lighter" : "source-over", RR.setTransform(uR * qR, ZR * qR, -ZR, uR, JR.x * this.scale, JR.y * this.scale);
            const {
              image: iR
            } = JR.sprite;
            RR.drawImage(iR, -iR.width / 2, -iR.height / 2)
          }
          RR.globalAlpha = 1, RR.globalCompositeOperation = "source-over"
        }
      }
    }
    var RJ = GR(3333),
      JJ = GR(1716),
      GJ = GR(1718),
      yJ = GR(3283);
    const tJ = 5e3;

    function uJ(RR) {
      let {
        request: JR
      } = RR;
      const {
        t: GR
      } = (0, ZR.A)(), {
        userContext: tR
      } = (0, LR.d)(), {
        gift: WR,
        preview: MR
      } = JR, {
        isTouchScreen: BR
      } = (0, qR.o)(["isTouchScreen"]), lR = function(RR) {
        var JR;
        const GR = XR.k.find((JR => JR.id === RR));
        return null !== (JR = null === GR || void 0 === GR ? void 0 : GR.id) && void 0 !== JR ? JR : "classic"
      }(WR.wrap), OR = (xR = WR.gems) >= PR[3] ? 3 : xR >= PR[2] ? 2 : 1;
      var xR;
      const NR = `${lR}:t${OR}`,
        [HR] = (0, yR.useState)((() => function(RR, JR) {
          const [GR] = RR.cosmeticPacks;
          let yR = null;
          if ((0, RJ.g)(RR) ? yR = "rank" : void 0 === GR && RR.premiumCurrency > 0 && (yR = "gems"), void 0 === GR) return {
            cosmetics: JR,
            badge: yR
          };
          const tR = (0, JJ.c)(GR),
            uR = void 0 === tR ? void 0 : GJ.b[tR];
          if (void 0 !== uR) return {
            cosmetics: uR.cosmetics,
            badge: yR
          };
          const ZR = {
              ...JR
            },
            qR = new Set;
          for (const iR of (0, yJ.h)(GR)) {
            const [RR, JR] = iR.split("|");
            qR.has(RR) || (qR.add(RR), ZR[RR] = JR)
          }
          return {
            cosmetics: ZR,
            badge: yR
          }
        }(WR.items, {
          ...tR.getPlayerCosmetics()
        }))),
        [oR, IR] = (0, yR.useState)("arrive"),
        [SR, jR] = (0, yR.useState)(0),
        [dR, ER] = (0, yR.useState)(!1),
        [YR, kR] = (0, yR.useState)(!1),
        [QR, FR] = (0, yR.useState)(!1),
        TR = (0, yR.useRef)(null),
        sR = (0, yR.useRef)(null),
        uJ = {
          box: (0, yR.useRef)(null),
          body: (0, yR.useRef)(null),
          lid: (0, yR.useRef)(null),
          seam: (0, yR.useRef)(null),
          character: (0, yR.useRef)(null),
          ring: (0, yR.useRef)(null),
          beam: (0, yR.useRef)(null),
          flash: (0, yR.useRef)(null),
          shake: (0, yR.useRef)(null),
          canvas: (0, yR.useRef)(null)
        };
      (0, nR.f)("paused"), (0, yR.useEffect)((() => {
        const RR = setTimeout((() => {
          FR(!0)
        }), tJ);
        return () => {
          clearTimeout(RR)
        }
      }), []), (0, yR.useEffect)((() => {
        const RR = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          GR = uJ.canvas.current,
          yR = GR && !RR ? new hR(GR, {
            wrap: lR,
            tier: OR,
            phone: BR
          }) : null,
          tR = () => {
            null === yR || void 0 === yR || yR.resize()
          };
        window.addEventListener("resize", tR),
          function(RR) {
            for (const JR of ["wobble", "pop", "sparkle", "sting"]) vR.d.preload(DR(JR, RR))
          }(OR), IR("arrive");
        const uR = new cR({
          box: uJ.box.current,
          body: uJ.body.current,
          lid: uJ.lid.current,
          seam: uJ.seam.current,
          character: uJ.character.current,
          ring: uJ.ring.current,
          beam: uJ.beam.current,
          flash: uJ.flash.current,
          shake: uJ.shake.current
        }, {
          tier: OR,
          timeline: mR(OR),
          reducedMotion: RR,
          fx: yR,
          onPhase: IR,
          onOpened: () => {
            var RR;
            MR || ((0, iR.reportAnalyticsClick)({
              id: "gift.open_anim",
              value: NR
            }), null === (RR = JR.onOpened) || void 0 === RR || RR.call(JR))
          }
        });
        return sR.current = uR, uR.arrive(), () => {
          window.removeEventListener("resize", tR), uR.dispose(), yR && (! function(RR) {
            if (RR.frameMs.length < 10) return;
            const JR = [...RR.frameMs].sort(((RR, JR) => RR - JR)),
              GR = {
                frames: JR.length,
                medianFps: Math.round(1e3 / Math.max(JR[Math.floor(JR.length / 2)], 1)),
                p95FrameMs: Math.round(JR[Math.floor(.95 * JR.length)])
              };
            window.giftOpeningFrames = GR, console.info("[gift-opening] frames", GR)
          }(yR), yR.stop())
        }
      }), [SR]);
      const ZJ = () => {
          (0, CR.c)(JR)
        },
        qJ = () => {
          var RR;
          MR || (0, iR.reportAnalyticsClick)({
            id: "gift.open_skip",
            value: `${NR}:${oR}`
          }), null === (RR = sR.current) || void 0 === RR || RR.skip()
        },
        iJ = dR || YR || QR,
        fJ = "arrive" === oR || "wait" === oR || "charge" === oR,
        VJ = "charge" === oR || "reveal" === oR || "card" === oR || "wait" === oR && iJ,
        KJ = {
          "--gift-tier": zR[OR]
        };
      return (0, UR.jsx)(VR.e, {
        className: "GiftOpeningScreen",
        close: "done" === oR ? ZJ : VJ ? qJ : () => {},
        togglePointerLock: !0,
        forcePointerUnlock: !0,
        globallyUniqueKey: "giftOpening",
        closeOnPressBackground: !1,
        children: (0, UR.jsxs)("div", {
          className: uR()("GiftOpening", `GiftOpeningTier${OR}`, `GiftOpeningPhase_${oR}`, {
            GiftOpeningDrawn: dR
          }),
          style: KJ,
          ref: uJ.shake,
          children: [(0, UR.jsx)("div", {
            className: "GiftOpeningBackdrop"
          }), (0, UR.jsx)("div", {
            className: "GiftOpeningRays"
          }), (0, UR.jsxs)("div", {
            className: "GiftOpeningStage",
            children: [(0, UR.jsx)("div", {
              className: "GiftOpeningBeam",
              ref: uJ.beam
            }), (0, UR.jsxs)("div", {
              className: "GiftOpeningCharacter",
              ref: uJ.character,
              children: [(0, UR.jsx)(yR.Suspense, {
                fallback: null,
                children: (0, UR.jsx)(eR.e, {
                  ref: TR,
                  framing: "store",
                  owner: "other",
                  turntableFromYaw: fJ ? null : fR.d.store.yaw,
                  onNoWebGl: () => {
                    kR(!0)
                  },
                  onReady: () => {
                    var RR, JR;
                    null === (RR = TR.current) || void 0 === RR || RR.resetCamera(), null === (JR = TR.current) || void 0 === JR || JR.setAllCosmetics(HR.cosmetics)
                  },
                  onDrawn: () => {
                    ER(!0)
                  }
                })
              }), (YR || !fJ && !dR) && (0, UR.jsx)("div", {
                className: "GiftOpeningHead",
                children: (0, UR.jsx)(aR.c, {
                  cosmetics: HR.cosmetics
                })
              }), HR.badge && (0, UR.jsx)("div", {
                className: "GiftOpeningBadge",
                children: "gems" === HR.badge ? (0, UR.jsx)(rR.f, {}) : (0, UR.jsx)(wR.d, {
                  name: "bolt"
                })
              })]
            }), (0, UR.jsx)(AR, {
              wrap: lR,
              className: uR()("GiftOpeningBox", {
                GiftOpeningBoxIdle: "wait" === oR
              }),
              rootRef: uJ.box,
              bodyRef: uJ.body,
              lidRef: uJ.lid,
              seamRef: uJ.seam
            }), (0, UR.jsx)("div", {
              className: "GiftOpeningRing",
              ref: uJ.ring
            })]
          }), (0, UR.jsx)("canvas", {
            className: "GiftOpeningFx",
            ref: uJ.canvas
          }), (0, UR.jsx)("div", {
            className: "GiftOpeningFlash",
            ref: uJ.flash
          }), fJ && (0, UR.jsxs)("div", {
            className: "GiftOpeningTitle",
            children: [(0, UR.jsx)("div", {
              className: "SmallTextBold",
              children: GR("giftOpening:sentYou", {
                name: WR.senderName
              })
            }), (0, UR.jsx)(gR, {
              gift: WR
            })]
          }), "wait" === oR && iJ && (0, UR.jsx)("div", {
            className: "GiftOpeningHint SmallTextBold",
            children: GR("giftOpening:tapToOpen")
          }), (0, UR.jsx)(pR, {
            gift: WR,
            shown: "card" === oR || "done" === oR
          }), "done" !== oR && (0, UR.jsx)("button", {
            type: "button",
            className: "GiftOpeningTap",
            "data-pad-default-focus": !0,
            "aria-label": GR("giftOpening:tapToOpen"),
            onClick: () => {
              var RR;
              ("wait" !== oR || iJ) && (null === (RR = sR.current) || void 0 === RR || RR.tap())
            }
          }), VJ && (0, UR.jsxs)(KR.i, {
            className: "GiftOpeningSkip",
            onClick: qJ,
            children: [GR("giftOpening:skip"), " ", (0, UR.jsx)(wR.d, {
              name: "arrow-right"
            })]
          }), "done" === oR && (0, UR.jsx)(bR, {
            gift: WR,
            preview: MR,
            analyticsValue: NR,
            onReplay: () => {
              jR(SR + 1)
            },
            onClose: ZJ
          })]
        })
      })
    }
  },
  35195: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      i: () => tR,
      l: () => KR
    });
    var yR = GR(1718);

    function tR(RR) {
      var JR;
      return {
        ...qR.store,
        yaw: qR.store.yaw + (null !== (JR = yR.b[RR].previewYaw) && void 0 !== JR ? JR : 0)
      }
    }
    const uR = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      ZR = {
        ...uR,
        radius: 33,
        target: [0, 3.9, 0]
      },
      qR = {
        player: uR,
        store: ZR,
        showcase: {
          ...ZR,
          target: [0, 1.9, 0]
        }
      };

    function iR(RR, JR) {
      RR instanceof Promise ? RR.then(JR).catch((RR => {
        console.error("Couldn't open the preview", RR)
      })) : JR(RR)
    }
    class fR {
      constructor(RR) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height), null !== this.view && RR.show(this.view))
        }))
      }
      show(RR) {
        var JR;
        this.view = RR, null === (JR = this.opened) || void 0 === JR || JR.show(RR)
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    class VR {
      constructor(RR) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(RR).then((RR => RR.ready)), iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var RR, JR;
        return null !== (RR = null === (JR = this.opened) || void 0 === JR ? void 0 : JR.isReady()) && void 0 !== RR && RR
      }
      setCosmetic(RR, JR) {
        var GR;
        null === (GR = this.opened) || void 0 === GR || GR.setCosmetic(RR, JR)
      }
      setNametag(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setNametag(RR)
      }
      playEmote(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.playEmote(RR)
      }
      setOrbit(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setOrbit(RR)
      }
      resetCamera() {
        var RR;
        null === (RR = this.opened) || void 0 === RR || RR.resetCamera()
      }
      async untilDrawn(RR) {
        var JR;
        await this.ready, await (null === (JR = this.opened) || void 0 === JR ? void 0 : JR.untilDrawn(RR))
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    const KR = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(RR) {
        this.host = RR
      }
      setDefaultHost(RR) {
        this.makeDefault = RR
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(RR) {
        return new fR(this.current().openMob(RR))
      }
      openPet(RR) {
        return new fR(this.current().openPet(RR))
      }
      openMobLineup(RR) {
        return new fR(this.current().openMobLineup(RR))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(RR, JR) {
        return new VR(this.current().openCharacter(RR, JR))
      }
    }
  },
  35193: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR.e,
      e: () => yR.i,
      g: () => yR.l
    });
    var yR = GR(35195);
    class tR {
      constructor(RR) {
        this.load = RR, this.loaded = null, this.loading = null
      }
      run(RR) {
        return null !== this.loaded ? RR(this.loaded) : (this.loading ??= this.load().then((RR => (this.loaded = RR, RR)), (RR => {
          throw this.loading = null, RR
        })), this.loading.then(RR))
      }
    }
    class uR {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new tR((() => Promise.all([GR.e(85), GR.e(264), GR.e(263), GR.e(289), GR.e(113), GR.e(290), GR.e(89), GR.e(86), GR.e(287), GR.e(87), GR.e(88), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(311), GR.e(260), GR.e(278), GR.e(292), GR.e(295), GR.e(91), GR.e(252), GR.e(266), GR.e(112), GR.e(124), GR.e(257), GR.e(142), GR.e(90), GR.e(122), GR.e(310)]).then((() => GR(42616))))), this.characterScene = new tR((() => Promise.all([GR.e(85), GR.e(264), GR.e(263), GR.e(289), GR.e(113), GR.e(290), GR.e(89), GR.e(86), GR.e(287), GR.e(87), GR.e(88), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(311), GR.e(177), GR.e(260), GR.e(278), GR.e(292), GR.e(295), GR.e(91), GR.e(224), GR.e(252), GR.e(266), GR.e(112), GR.e(124), GR.e(257), GR.e(142), GR.e(90), GR.e(122), GR.e(279), GR.e(184)]).then((() => GR(42729)))))
      }
      openMob(RR) {
        return this.mobScene.run((JR => JR.openMobPreview(RR)))
      }
      openPet(RR) {
        return this.mobScene.run((JR => JR.openPetPreview(RR)))
      }
      openMobLineup(RR) {
        return this.mobScene.run((JR => JR.openMobLineupPreview(RR)))
      }
      openCharacter(RR, JR) {
        return this.characterScene.run((GR => GR.openCharacterPreview(RR, JR)))
      }
    }
    yR.l.setDefaultHost((() => new uR))
  },
  37494: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => iR,
      l: () => ZR
    });
    var yR = GR(679),
      tR = GR(2435);

    function uR(RR) {
      return RR === (0, tR.i)().UH ? (0, tR.i)().WH : RR
    }

    function ZR(RR) {
      return !(0, yR.I)(RR) && uR(RR) === (0, tR.i)().WH
    }
    const qR = "gravity";

    function iR() {
      return (0, tR.i)().physics[qR][1]
    }
  },
  37466: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => BR
    });
    var yR = GR(37470),
      tR = GR(203),
      uR = GR(5742),
      ZR = GR(37479),
      qR = GR(37485),
      iR = GR(37537),
      fR = GR(37494),
      VR = GR(385),
      KR = GR.n(VR),
      wR = GR(2435),
      rR = GR(37534),
      eR = GR(32),
      aR = GR(25),
      LR = GR(37498),
      nR = GR(37507),
      UR = GR(37516),
      WR = GR(37518),
      AR = GR(37528);
    const CR = new Set(["note"]);
    const XR = {
      stop: () => XR,
      fade: () => XR,
      rate: () => XR,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => XR,
      setPannerAttr: () => XR,
      setPosition: () => XR
    };
    class MR {
      constructor(RR) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new iR.k, this._howl = (0, qR.countDecodesAs)(new uR.Howl({
          src: [...(0, yR.v)(RR).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = this._howl.play(ZR.d);
        RR && this._howl.loop(!0, JR);
        let GR = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), JR);
        const yR = {
          stop: () => {
            var RR;
            return null === (RR = this.liveHowl()) || void 0 === RR || RR.stop(JR), yR
          },
          fade: (RR, GR, tR) => {
            var uR;
            return null === (uR = this.liveHowl()) || void 0 === uR || uR.fade(RR, GR, tR, JR), yR
          },
          rate: RR => {
            var GR;
            return null === (GR = this.liveHowl()) || void 0 === GR || GR.rate(RR, JR), yR
          },
          stopsAtOnce: () => this._howl.playing(JR) && !this._howl._playLock,
          isAlive: () => {
            const RR = this._howl._soundById(JR);
            return !this._loadFailed && !!RR && !RR._ended
          },
          getDurationMs: () => this._howl._soundById(JR) ? 1e3 * this._howl.duration(JR) / this._howl.rate(JR) : 0,
          getVolume: () => GR * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => GR,
          setRelativeVolume: RR => {
            var tR;
            if (RR > 1) throw new Error("Volume should be <= 1");
            return GR = aR.d.get("soundOnFromAd") ? RR : 0, null === (tR = this.liveHowl()) || void 0 === tR || tR.volume(Math.min(1, GR * this._volumeMultiplier.getTotalMultipliedVal()), JR), yR
          },
          setPannerAttr: RR => {
            let {
              coneInnerAngle: GR,
              coneOuterAngle: tR = 360,
              coneOuterGain: uR,
              distanceModel: ZR,
              maxDistance: qR,
              panningModel: iR,
              refDistance: fR,
              rolloffFactor: VR
            } = RR;
            return this._setPannerAttr({
              id: JR,
              coneInnerAngle: GR,
              coneOuterAngle: tR,
              coneOuterGain: uR,
              distanceModel: ZR,
              maxDistance: qR,
              panningModel: iR,
              refDistance: fR,
              rolloffFactor: VR
            }), yR
          },
          setPosition: RR => {
            var GR;
            return null === (GR = this.liveHowl()) || void 0 === GR || GR.pos(RR[2], RR[1], RR[0], JR), yR
          }
        };
        return yR
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, ZR.e)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(RR) {
        this._volumeMultiplier.setMultiplierType("globalVolume", RR), this._howl.volume(RR)
      }
      _setPannerAttr(RR) {
        let {
          id: JR,
          coneInnerAngle: GR = 360,
          coneOuterAngle: yR = 360,
          coneOuterGain: tR = 0,
          distanceModel: uR = "inverse",
          maxDistance: ZR = 1e3,
          panningModel: qR = "HRTF",
          refDistance: iR = rR.f,
          rolloffFactor: fR = 1
        } = RR;
        const VR = this.liveHowl();
        if (null === VR) return;
        VR.pannerAttr({
          coneOuterAngle: yR
        }, JR);
        const KR = {
          coneInnerAngle: GR,
          coneOuterAngle: yR,
          coneOuterGain: tR,
          distanceModel: uR,
          maxDistance: ZR,
          panningModel: qR,
          refDistance: iR,
          rolloffFactor: fR
        };
        VR.pannerAttr(KR, JR)
      }
    }
    const BR = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new LR.b, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, eR.n.subscribe("appManagerUpdated|soundVolume", (RR => {
          const JR = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const GR of JR) GR.setGlobalVolume(RR)
        }))
      }
      play(RR, JR) {
        var GR;
        let uR, ZR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (GR = (0, wR.i)()) || void 0 === GR ? void 0 : GR.WH,
          qR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rR.d,
          iR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rR.f,
          VR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var eR;
        (0, wR.i)() ? uR = !!Array.isArray(ZR) || (0, fR.d)(ZR) !== (null === (eR = (0, wR.i)()) || void 0 === eR ? void 0 : eR.WH): uR = !1;
        const aR = (0, yR.m)(RR),
          nR = this.loadSound(uR ? this.spatialSounds : this.stereoSounds, RR);
        if (!uR) {
          const RR = nR.play(VR);
          return RR.setRelativeVolume(JR), RR
        }
        const UR = (0, wR.i)(),
          WR = Array.isArray(ZR) ? ZR : UR.zC.vW(ZR),
          MR = UR.zC.vW(UR.WH);
        if (!WR || KR().sqrDist(WR, MR) > qR * qR) return XR;
        let BR;
        if (!VR) {
          if (!this.spatialVoices.admit({
              group: CR.has(aR) ? null : (0, LR.f)(RR),
              loudness: (0, LR.e)(JR, KR().xZ(WR, MR), iR),
              startMs: performance.now(),
              getDurationMs: () => {
                var RR, JR;
                return null !== (RR = null === (JR = BR) || void 0 === JR ? void 0 : JR.getDurationMs()) && void 0 !== RR ? RR : 0
              },
              isAlive: () => {
                var RR, JR;
                return null !== (RR = null === (JR = BR) || void 0 === JR ? void 0 : JR.isAlive()) && void 0 !== RR && RR
              },
              canStop: () => {
                var RR, JR;
                return null !== (RR = null === (JR = BR) || void 0 === JR ? void 0 : JR.stopsAtOnce()) && void 0 !== RR && RR
              },
              stop: () => {
                var RR;
                null === (RR = BR) || void 0 === RR || RR.stop()
              }
            })) return XR
        }
        return BR = nR.play(VR), BR.setRelativeVolume(JR), BR.setPannerAttr({
          refDistance: iR
        }), BR.setPosition([WR[0], WR[1] + tR.g.Kn * tR.g.playerEyeToHeightRatio, WR[2]]), !VR && (0, AR.k)() && (0, AR.h)(aR, RR, WR[0] - MR[0], WR[2] - MR[2]), BR
      }
      preload(RR) {
        const JR = (0, yR.q)(RR) ? [RR] : (0, yR.x)(RR);
        if (0 === JR.length) throw new Error(`Invalid sound name ${RR} (no sound has it or starts with it)`);
        for (const GR of JR) this.loadSound(this.stereoSounds, GR)
      }
      preloadAtIdle(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WR.c;
        const GR = RR.filter((RR => !this.idlePreloads.has(RR)));
        for (const tR of GR) this.idlePreloads.add(tR);
        const yR = this.idlePreloadGeneration;
        (0, UR.c)(GR, {
          ...JR,
          xR: () => yR !== this.idlePreloadGeneration,
          fetchFile: RR => {
            this.idlePreloads.delete(RR);
            try {
              return this.preload(RR), Promise.resolve()
            } catch (JR) {
              return Promise.reject(JR)
            }
          }
        })
      }
      loadSound(RR, JR) {
        const GR = RR[JR];
        if (GR) return GR;
        const tR = this.makeSound(RR, JR);
        for (const ZR of null !== (uR = (0, yR.t)(JR)) && void 0 !== uR ? uR : []) {
          var uR;
          RR[ZR] || this.makeSound(RR, ZR)
        }
        return tR
      }
      makeSound(RR, JR) {
        (0, WR.e)(JR);
        const GR = new MR(JR);
        return GR.setGlobalVolume(aR.d.get("soundVolume")), RR[JR] = GR, GR
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const RR of [this.stereoSounds, this.spatialSounds])
          for (const [JR, GR] of Object.entries(RR)) !nR.e.has((0, yR.m)(JR)) && GR.loaded() && (GR.unloadOnceIdle(), delete RR[JR])
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);