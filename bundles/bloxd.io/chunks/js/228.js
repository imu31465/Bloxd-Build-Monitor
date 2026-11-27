export const id = 228;
export const ids = [228];
export const modules = {
  37841: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      GiftOpening: () => aS
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(1251),
      Ir = Qr(26),
      fr = Qr(1605),
      Er = Qr(35505),
      pr = Qr(5297),
      xr = Qr(1576),
      mr = Qr(1448),
      Nr = Qr(3362),
      Ur = Qr(3672),
      tr = Qr(3320),
      hr = Qr(1181),
      zr = Qr(4340),
      Yr = Qr(1338);
    const nr = {
      festive: "\ud83c\udf84 \u26c4 \ud83c\udf81",
      sweater: "\u2744"
    };

    function er(rr) {
      let {
        wrap: Sr,
        className: Qr,
        rootRef: Zr,
        bodyRef: Wr,
        lidRef: jr,
        seamRef: Ir
      } = rr;
      const fr = nr[Sr];
      return (0, Yr.jsxs)("div", {
        className: ar()("GiftBox", `GiftBoxWrap_${Sr}`, Qr),
        ref: Zr,
        children: [(0, Yr.jsx)("div", {
          className: "GiftBoxPlinth"
        }), (0, Yr.jsxs)("div", {
          className: "GiftBoxBody",
          ref: Wr,
          children: [(0, Yr.jsxs)("div", {
            className: "GiftBoxCube",
            children: [(0, Yr.jsxs)("div", {
              className: "GiftBoxFace GiftBoxFront",
              children: [fr && (0, Yr.jsx)("span", {
                className: "GiftBoxPrint",
                children: fr
              }), "blocks" === Sr && (0, Yr.jsxs)("svg", {
                className: "GiftBoxCracks",
                viewBox: "0 0 100 80",
                "aria-hidden": !0,
                children: [(0, Yr.jsx)("polyline", {
                  points: "50,0 44,18 56,30 47,48 58,62 52,80"
                }), (0, Yr.jsx)("polyline", {
                  points: "44,18 24,26 14,44"
                }), (0, Yr.jsx)("polyline", {
                  points: "56,30 78,36 90,58"
                })]
              })]
            }), (0, Yr.jsx)("div", {
              className: "GiftBoxFace GiftBoxSide"
            }), (0, Yr.jsxs)("div", {
              className: "GiftBoxLid",
              ref: jr,
              children: [(0, Yr.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidFront"
              }), (0, Yr.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidSide"
              }), (0, Yr.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidTop"
              }), (0, Yr.jsxs)("div", {
                className: "GiftBoxBow",
                children: [(0, Yr.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowLeft"
                }), (0, Yr.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowRight"
                }), (0, Yr.jsx)("div", {
                  className: "GiftBoxBowKnot"
                })]
              })]
            })]
          }), (0, Yr.jsx)("div", {
            className: "GiftBoxSeam",
            ref: Ir
          })]
        })]
      })
    }
    var Kr = Qr(5030),
      yr = Qr(4231),
      Br = Qr(3043);

    function Tr(rr, Sr) {
      const [Qr] = Sr.cosmeticPacks;
      return void 0 !== Qr ? (0, Br.j)(Qr) : Sr.superDays > 0 ? rr("paymentHistory:superRankDays", {
        count: Sr.superDays
      }) : Sr.hyperDays > 0 ? rr("paymentHistory:hyperRankDays", {
        count: Sr.hyperDays
      }) : rr("paymentHistory:premiumCurrency", {
        count: Sr.premiumCurrency
      })
    }

    function vr(rr) {
      var Sr, Qr;
      const {
        t: Zr
      } = (0, jr.E)(), Wr = yr.k.find((Sr => Sr.id === rr.message));
      return {
        message: void 0 === Wr ? null : Zr(Wr.key, {
          name: rr.recipientName,
          level: null !== (Sr = rr.senderLevel) && void 0 !== Sr ? Sr : 1,
          tier: null !== (Qr = rr.tierLabel) && void 0 !== Qr ? Qr : ""
        }),
        level: null === rr.senderLevel || "levelFlex" === (null === Wr || void 0 === Wr ? void 0 : Wr.kind) ? null : Zr("giftOpening:gifterLevel", {
          level: rr.senderLevel
        })
      }
    }

    function Or(rr) {
      let {
        gift: Sr,
        shown: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)(), {
        message: Wr,
        level: Ir
      } = vr(Sr);
      return (0, Yr.jsxs)("div", {
        className: ar()("GiftOpeningCard", {
          GiftOpeningCardShown: Qr
        }),
        children: [(0, Yr.jsx)("div", {
          className: "GiftOpeningItem SmallTextBold",
          children: Tr(Zr, Sr.items)
        }), null !== Wr && (0, Yr.jsx)("div", {
          className: "GiftOpeningCardMessage SmallTextLight",
          children: Wr
        }), (0, Yr.jsxs)("div", {
          className: "GiftOpeningFrom SmallTextLight",
          children: [Sr.senderName, null !== Ir && ` \xb7 ${Ir}`]
        })]
      })
    }

    function Lr(rr) {
      let {
        gift: Sr
      } = rr;
      const {
        message: Qr,
        level: Zr
      } = vr(Sr);
      return (0, Yr.jsxs)(Yr.Fragment, {
        children: [null !== Qr && (0, Yr.jsx)("div", {
          className: "GiftOpeningIntroMessage SmallTextLight",
          children: `"${Qr}"`
        }), null !== Zr && (0, Yr.jsx)("div", {
          className: "GiftOpeningIntroLevel SmallTextBold",
          children: Zr
        })]
      })
    }

    function lr(rr) {
      let {
        gift: Sr,
        preview: Qr,
        analyticsValue: Zr,
        onReplay: Wr,
        onClose: ar
      } = rr;
      const {
        t: Er
      } = (0, jr.E)(), {
        gameState: pr
      } = (0, Ir.n)(["gameState"]), Nr = !Qr && Sr.items.cosmeticPacks.length > 0 && !(0, Ir.g)(pr);
      return (0, Yr.jsxs)("div", {
        className: "GiftOpeningButtons",
        children: [Qr && (0, Yr.jsxs)(xr.h, {
          className: "GiftOpeningButton",
          touchPressOn: "pointerup",
          onClick: Wr,
          children: [(0, Yr.jsx)(mr.c, {
            name: "rotate-right"
          }), " ", Er("giftOpening:replay")]
        }), Nr && (0, Yr.jsx)(xr.h, {
          className: "GiftOpeningButton",
          padDefaultFocus: !0,
          touchPressOn: "pointerup",
          onClick: () => {
            (0, fr.reportAnalyticsClick)({
              id: "gift.open_customise",
              value: Zr
            }), (0, Br.p)(), ar()
          },
          children: Er("general:customize")
        }), (0, Yr.jsx)(xr.h, {
          className: "GiftOpeningButton",
          padDefaultFocus: !Nr,
          touchPressOn: "pointerup",
          onClick: ar,
          children: Er(Qr ? "giftOpening:back" : "giftOpening:done")
        })]
      })
    }
    var Xr = Qr(37843);
    const Pr = {
        1: "harp_pling",
        2: "exp_levelup",
        3: "trumpetFlare"
      },
      Hr = {
        wobble: "chestClose",
        pop: "chestOpen",
        sparkle: "exp_collect"
      },
      qr = {
        wobble: .55,
        pop: .8,
        sparkle: .4,
        sting: .7
      };

    function Rr(rr, Sr) {
      return "sting" === rr ? Pr[Sr] : Hr[rr]
    }

    function gr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      try {
        Xr.b.play(Rr(rr, Sr), qr[rr]).rate(Math.pow(2, 2 * Qr / 12))
      } catch (Zr) {
        console.warn("[gift-opening] a sound failed to play", Zr)
      }
    }
    const Cr = "cubic-bezier(0.22, 1, 0.36, 1)";
    class Mr {
      constructor(rr, Sr) {
        this.parts = rr, this.options = Sr, this.phase = "arrive", this.timers = [], this.animations = [], this.opened = !1, this.popped = !1
      }
      setPhase(rr) {
        this.phase = rr, this.options.onPhase(rr)
      }
      at(rr, Sr) {
        this.timers.push(setTimeout(Sr, rr))
      }
      animate(rr, Sr, Qr) {
        this.animations.push(rr.animate(Sr, {
          fill: "forwards",
          ...Qr
        }))
      }
      markOpened() {
        this.opened || (this.opened = !0, this.options.onOpened())
      }
      arrive() {
        const {
          timeline: rr,
          reducedMotion: Sr
        } = this.options, Qr = Sr ? [{
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
        this.animate(this.parts.body, Qr, {
          duration: Sr ? 200 : rr.arriveMs,
          fill: "none"
        }), this.at(Sr ? 200 : rr.arriveMs, (() => {
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
        }), gr("sting", this.options.tier), this.at(300, (() => {
          this.setPhase("done")
        }))
      }
      charge() {
        const {
          timeline: rr,
          tier: Sr,
          fx: Qr
        } = this.options;
        this.setPhase("charge");
        const Zr = rr.wobbles,
          Wr = rr.burstAt,
          ar = (rr.chargeMs - 80) / Zr.length,
          jr = [{
            transform: "none",
            offset: 0
          }, {
            transform: "scale(1.06, 0.92)",
            offset: 80 / Wr
          }];
        Zr.forEach(((rr, Qr) => {
          const Zr = 80 + Qr * ar;
          jr.push({
            transform: `rotate(${rr}deg) translateX(${.3*rr}px)`,
            offset: (Zr + .3 * ar) / Wr
          }), jr.push({
            transform: `rotate(${-rr}deg) translateX(${.3*-rr}px)`,
            offset: (Zr + .75 * ar) / Wr
          }), this.at(Zr, (() => {
            gr("wobble", Sr, Qr)
          }))
        })), jr.push({
          transform: "rotate(0deg)",
          offset: rr.chargeMs / Wr
        }), jr.push({
          transform: "scale(1.12, 0.84)",
          offset: (rr.chargeMs + 40) / Wr
        }), jr.push({
          transform: "scale(1.12, 0.84)",
          offset: 1
        }), this.animate(this.parts.body, jr, {
          duration: Wr
        });
        const Ir = [{
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.6)"
        }];
        Zr.forEach(((rr, Sr) => {
          const Qr = (Sr + 1) / (Zr.length + .5);
          Ir.push({
            opacity: Qr,
            transform: `translate(-50%, -50%) scale(${.7+.5*Qr})`,
            offset: (80 + (Sr + 1) * ar) / Wr
          })
        })), Ir.push({
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1.3)"
        }), this.animate(this.parts.seam, Ir, {
          duration: Wr,
          easing: "linear"
        });
        const fr = this.parts.box.querySelector(".GiftBoxCracks");
        fr && this.animate(fr, [{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: Wr,
          easing: "steps(3, end)"
        });
        const {
          x: Er,
          y: pr
        } = this.boxCentre();
        null === Qr || void 0 === Qr || Qr.charge(Er, pr, rr.chargeMs), this.at(Wr, (() => {
          this.burst(Wr)
        }))
      }
      boxCentre() {
        const rr = this.parts.box.getBoundingClientRect();
        return {
          x: rr.left + rr.width / 2,
          y: rr.top + .45 * rr.height,
          floorY: rr.bottom
        }
      }
      burst(rr) {
        const {
          timeline: Sr,
          tier: Qr,
          fx: Zr
        } = this.options;
        if (this.popped) return;
        this.popped = !0, this.markOpened();
        const Wr = Sr => Math.max(0, Sr - rr),
          ar = {
            duration: 620,
            easing: Cr
          };
        this.animate(this.parts.lid, [{
          transform: "translateY(-0.36em)"
        }, {
          transform: "translate(0.35em, -2.2em) rotateZ(26deg) rotateX(24deg)",
          offset: .55
        }, {
          transform: "translate(0.6em, -3.2em) rotateZ(40deg) rotateX(40deg)"
        }], ar);
        for (const Er of this.parts.lid.querySelectorAll(":scope > *")) this.animate(Er, [{
          opacity: 1
        }, {
          opacity: 1,
          offset: .55
        }, {
          opacity: 0
        }], ar);
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
            easing: Cr
          }), Sr.flashAlpha > 0 && this.animate(this.parts.flash, [{
            opacity: 0
          }, {
            opacity: Sr.flashAlpha,
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
            easing: Cr
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
            easing: Cr
          }), Sr.kickPx > 0) {
          const rr = Sr.kickPx;
          this.animate(this.parts.shake, [{
            transform: "none"
          }, {
            transform: `translate(${rr}px, ${-rr}px)`
          }, {
            transform: `translate(${.7*-rr}px, ${.5*rr}px)`
          }, {
            transform: `translate(${.4*rr}px, ${.3*rr}px)`
          }, {
            transform: "none"
          }], {
            duration: 300,
            easing: "linear",
            fill: "none"
          })
        }
        gr("pop", Qr), gr("sparkle", Qr, 2);
        const {
          x: jr,
          y: Ir,
          floorY: fr
        } = this.boxCentre();
        null === Zr || void 0 === Zr || Zr.burst(jr, Ir, Sr.burstParticles, fr), this.at(Wr(Sr.revealAt), (() => {
          this.reveal()
        })), this.at(Wr(Sr.cardAt), (() => {
          this.setPhase("card")
        })), this.at(Wr(Sr.buttonsAt), (() => {
          this.setPhase("done")
        }))
      }
      reveal() {
        const {
          timeline: rr,
          tier: Sr,
          fx: Qr
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
          easing: Cr
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
        }), gr("sting", Sr), null === Qr || void 0 === Qr || Qr.linger(this.boxCentre().x, rr.buttonsAt - rr.revealAt + 1500, rr.rain)
      }
      skip() {
        var rr;
        (this.clearTimers(), this.cancelAnimations(), this.popped) || (null === (rr = this.options.fx) || void 0 === rr || rr.clear());
        this.markOpened(), this.parts.body.style.opacity = "0", this.parts.character.style.opacity = "1", this.parts.character.style.transform = "none", this.setPhase("done")
      }
      cancelAnimations() {
        for (const rr of this.animations) rr.cancel();
        this.animations = []
      }
      clearTimers() {
        for (const rr of this.timers) clearTimeout(rr);
        this.timers = []
      }
      dispose() {
        this.clearTimers(), this.cancelAnimations(), this.parts.body.style.removeProperty("opacity"), this.parts.character.style.removeProperty("opacity"), this.parts.character.style.removeProperty("transform")
      }
    }
    const Gr = {
      2: 500,
      3: 1200
    };
    const kr = {
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

    function Ar(rr) {
      const Sr = kr[rr];
      return {
        ...Sr,
        burstAt: Sr.chargeMs + Sr.hitStopMs
      }
    }
    const Vr = {
      1: "#5ab8ff",
      2: "#b673ff",
      3: "#ffc83d"
    };

    function ir(rr, Sr, Qr) {
      const Zr = document.createElement("canvas"),
        Wr = Math.ceil(rr * Sr);
      Zr.width = Wr, Zr.height = Wr;
      const ar = Zr.getContext("2d");
      return ar && Qr(ar, Wr), {
        image: Zr
      }
    }

    function wr(rr, Sr) {
      return ir(16, Sr, ((Sr, Qr) => {
        Sr.fillStyle = rr, Sr.fillRect(.3 * Qr, 0, .4 * Qr, Qr)
      }))
    }

    function cr(rr, Sr, Qr) {
      return ir(14, Qr, ((Qr, Zr) => {
        Qr.fillStyle = Sr, Qr.fillRect(0, 0, Zr, Zr), Qr.fillStyle = rr, Qr.fillRect(0, 0, Zr, .35 * Zr)
      }))
    }

    function Fr(rr, Sr) {
      return ir(18, Sr, ((Sr, Qr) => {
        Sr.fillStyle = rr, Sr.beginPath(), Sr.moveTo(Qr / 2, 0), Sr.lineTo(.85 * Qr, .55 * Qr), Sr.lineTo(Qr / 2, Qr), Sr.lineTo(.2 * Qr, .45 * Qr), Sr.closePath(), Sr.fill(), Sr.fillStyle = "rgba(255,255,255,0.55)", Sr.beginPath(), Sr.moveTo(Qr / 2, 0), Sr.lineTo(.6 * Qr, .5 * Qr), Sr.lineTo(.2 * Qr, .45 * Qr), Sr.closePath(), Sr.fill()
      }))
    }

    function or(rr, Sr) {
      return ir(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, Sr, ((Sr, Qr) => {
        const Zr = Qr / 2;
        Sr.fillStyle = rr, Sr.beginPath();
        for (let rr = 0; rr < 10; rr++) {
          const Qr = rr % 2 === 0 ? Zr : .45 * Zr,
            Wr = -Math.PI / 2 + rr * Math.PI / 5;
          Sr.lineTo(Zr + Math.cos(Wr) * Qr, Zr + Math.sin(Wr) * Qr)
        }
        Sr.closePath(), Sr.fill()
      }))
    }

    function br(rr, Sr) {
      return ir(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24, Sr, ((Sr, Qr) => {
        const Zr = Sr.createRadialGradient(Qr / 2, Qr / 2, 0, Qr / 2, Qr / 2, Qr / 2);
        Zr.addColorStop(0, "rgba(255,255,255,1)"), Zr.addColorStop(.25, rr), Zr.addColorStop(1, "rgba(0,0,0,0)"), Sr.fillStyle = Zr, Sr.fillRect(0, 0, Qr, Qr)
      }))
    }
    const Jr = {
      classic: rr => [wr("#e63946", rr), wr("#ffffff", rr), wr("#ffd166", rr), wr("#2a9d8f", rr), or("#ffd166", rr, 14)],
      blocks: rr => [cr("#6abe30", "#8a5a33", rr), cr("#8a5a33", "#6d4426", rr), cr("#9da3a6", "#7b8083", rr), cr("#7ff3f0", "#3fb7c0", rr)],
      gems: rr => [Fr("#b673ff", rr), Fr("#ff7ad9", rr), Fr("#6fe0ff", rr), Fr("#ffffff", rr)],
      stars: rr => [or("#fff6b0", rr), or("#ffffff", rr, 14), or("#9fd0ff", rr, 12), br("#9fd0ff", rr, 16)],
      legend: rr => [wr("#ffc83d", rr), wr("#ff5d8f", rr), wr("#5ab8ff", rr), wr("#7cf29a", rr), or("#ffc83d", rr), or("#fff4c2", rr, 14)],
      sweater: rr => [br("#ffffff", rr, 18), br("#dff3ff", rr, 12), or("#ffffff", rr, 12)],
      festive: rr => ["\ud83c\udf84", "\u26c4", "\ud83c\udf81", "\u2744\ufe0f", "\u2b50"].map((Sr => function(rr, Sr) {
        return ir(26, Sr, ((Sr, Qr) => {
          Sr.font = `${Math.round(.8*Qr)}px sans-serif`, Sr.textAlign = "center", Sr.textBaseline = "middle", Sr.fillText(rr, Qr / 2, Qr / 2 + .05 * Qr)
        }))
      }(Sr, rr)))
    };
    const Dr = {
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

    function dr(rr) {
      let [Sr, Qr] = rr;
      return Sr + Math.random() * (Qr - Sr)
    }

    function sr(rr) {
      return rr[Math.floor(Math.random() * rr.length)]
    }
    class ur {
      constructor(rr, Sr) {
        var Qr, Zr, Wr;
        this.canvas = rr, this.options = Sr, this.context = void 0, this.sprites = void 0, this.particles = [], this.scale = void 0, this.frame = 0, this.lastAt = 0, this.embersUntil = 0, this.embersX = 0, this.rainUntil = 0, this.spawnCarry = 0, this.stopped = !1, this.frameMs = [], this.lx = rr => {
          const Sr = Math.min(rr - this.lastAt, 50);
          this.lastAt = rr, this.spawnLingering(Sr), this.step(Sr), this.draw();
          const Qr = rr < this.embersUntil || rr < this.rainUntil;
          this.frame = this.particles.length > 0 || Qr ? requestAnimationFrame(this.lx) : 0, 0 === this.frame && (this.canvas.style.visibility = "hidden")
        }, this.context = rr.getContext("2d"), this.scale = Math.min(window.devicePixelRatio || 1, Sr.phone ? 1.5 : 2), this.sprites = (Qr = Sr.wrap, Zr = Vr[Sr.tier], Wr = this.scale, {
          burst: Jr[Qr](Wr),
          spark: br(Zr, Wr),
          rain: [or("#ffc83d", Wr, 16), wr("#ffc83d", Wr), wr("#fff1b8", Wr)]
        }), this.resize()
      }
      resize() {
        const {
          clientWidth: rr,
          clientHeight: Sr
        } = this.canvas;
        this.canvas.width = Math.round(rr * this.scale), this.canvas.height = Math.round(Sr * this.scale)
      }
      count(rr) {
        return Math.round(this.options.phone ? rr / 2 : rr)
      }
      add(rr) {
        this.particles.push({
          motion: "fall",
          vx: 0,
          Fq: 0,
          gravity: 0,
          drag: 0,
          rotation: Math.random() * Math.PI * 2,
          spin: 0,
          flutterSpeed: 0,
          fromX: rr.x,
          fromY: rr.y,
          toX: rr.x,
          toY: rr.y,
          floorY: 1 / 0,
          additive: !1,
          ...rr,
          flutter: Math.random() * Math.PI * 2,
          ageMs: 0
        }), this.wake()
      }
      charge(rr, Sr, Qr) {
        for (let Zr = 0; Zr < this.count(18 + 8 * this.options.tier); Zr++) {
          const Zr = Math.random() * Math.PI * 2,
            Wr = dr([120, 240]);
          this.add({
            sprite: this.sprites.spark,
            motion: "converge",
            x: rr,
            y: Sr,
            fromX: rr + Math.cos(Zr) * Wr,
            fromY: Sr + Math.sin(Zr) * Wr,
            size: dr([.5, 1]),
            lifeMs: Qr * dr([.55, 1]),
            additive: !0
          })
        }
      }
      burst(rr, Sr, Qr, Zr) {
        const Wr = Dr[this.options.wrap];
        for (let ar = 0; ar < this.count(Qr); ar++) {
          const Qr = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.5,
            ar = dr(Wr.speed);
          this.add({
            sprite: sr(this.sprites.burst),
            x: rr + 30 * (Math.random() - .5),
            y: Sr,
            vx: Math.cos(Qr) * ar,
            Fq: Math.sin(Qr) * ar,
            gravity: Wr.gravity,
            drag: Wr.drag,
            spin: 14 * (Math.random() - .5),
            flutterSpeed: Wr.flutter ? dr([8, 16]) : 0,
            size: dr([.7, 1.15]),
            lifeMs: dr(Wr.lifeMs),
            floorY: Wr.bounce ? Zr : 1 / 0
          })
        }
        for (let ar = 0; ar < this.count(16 + 8 * this.options.tier); ar++) {
          const Qr = Math.random() * Math.PI * 2,
            Zr = dr([300, 900]);
          this.add({
            sprite: this.sprites.spark,
            x: rr,
            y: Sr,
            vx: Math.cos(Qr) * Zr,
            Fq: Math.sin(Qr) * Zr,
            gravity: 200,
            drag: .05,
            size: dr([.4, .9]),
            lifeMs: dr([350, 700]),
            additive: !0
          })
        }
      }
      linger(rr, Sr, Qr) {
        const Zr = performance.now();
        this.embersX = rr, this.embersUntil = Zr + Sr, this.rainUntil = Qr ? Zr + Math.min(Sr, 1800) : 0, this.wake()
      }
      spawnLingering(rr) {
        const {
          clientWidth: Sr,
          clientHeight: Qr
        } = this.canvas, Zr = performance.now(), Wr = (Zr < this.embersUntil ? this.count(14) : 0) + (Zr < this.rainUntil ? this.count(50) : 0);
        for (this.spawnCarry += Wr * rr / 1e3; this.spawnCarry >= 1;) this.spawnCarry--, Zr < this.rainUntil && Math.random() < .75 ? this.add({
          sprite: sr(this.sprites.rain),
          x: Math.random() * Sr,
          y: -20,
          vx: 60 * (Math.random() - .5),
          Fq: dr([160, 320]),
          gravity: 500,
          drag: .2,
          spin: 8 * (Math.random() - .5),
          flutterSpeed: dr([6, 12]),
          size: dr([.6, 1]),
          lifeMs: 2200
        }) : this.add({
          sprite: this.sprites.spark,
          motion: "float",
          x: this.embersX + (Math.random() - .5) * Math.min(Sr, 420),
          y: Qr * dr([.55, .8]),
          vx: 20 * (Math.random() - .5),
          Fq: -dr([30, 70]),
          drag: .6,
          size: dr([.3, .6]),
          lifeMs: dr([1200, 2e3]),
          additive: !0
        })
      }
      clear() {
        var rr;
        this.particles.length = 0, this.embersUntil = 0, this.rainUntil = 0, null === (rr = this.context) || void 0 === rr || rr.clearRect(0, 0, this.canvas.width, this.canvas.height)
      }
      stop() {
        this.stopped = !0, cancelAnimationFrame(this.frame), this.frame = 0, this.clear(), this.canvas.style.visibility = "hidden"
      }
      wake() {
        0 !== this.frame || this.stopped || (this.lastAt = performance.now(), this.frame = requestAnimationFrame(this.lx), this.canvas.style.visibility = "visible")
      }
      step(rr) {
        const Sr = rr / 1e3;
        let Qr = 0;
        for (const Zr of this.particles)
          if (Zr.ageMs += rr, !(Zr.ageMs >= Zr.lifeMs)) {
            if ("converge" === Zr.motion) {
              const rr = Zr.ageMs / Zr.lifeMs,
                Sr = rr * rr * rr;
              Zr.x = Zr.fromX + (Zr.toX - Zr.fromX) * Sr, Zr.y = Zr.fromY + (Zr.toY - Zr.fromY) * Sr
            } else {
              const rr = Math.pow(1 - Zr.drag, Sr);
              Zr.vx *= rr, Zr.Fq = Zr.Fq * rr + Zr.gravity * Sr, Zr.x += Zr.vx * Sr, Zr.y += Zr.Fq * Sr, Zr.y > Zr.floorY && Zr.Fq > 0 && (Zr.y = Zr.floorY, Zr.Fq *= -.35, Zr.vx *= .6, Zr.floorY = 1 / 0)
            }
            Zr.rotation += Zr.spin * Sr, Zr.flutter += Zr.flutterSpeed * Sr, this.particles[Qr++] = Zr
          } this.particles.length = Qr
      }
      draw() {
        const rr = this.context;
        if (rr) {
          rr.setTransform(1, 0, 0, 1, 0, 0), rr.clearRect(0, 0, this.canvas.width, this.canvas.height);
          for (const Sr of this.particles) {
            const Qr = Sr.ageMs / Sr.lifeMs,
              Zr = "converge" === Sr.motion ? .35 + .65 * Qr : Math.min(1, 4 * (1 - Qr)),
              Wr = Sr.size,
              ar = Math.cos(Sr.rotation) * Wr,
              jr = Math.sin(Sr.rotation) * Wr,
              Ir = 0 === Sr.flutterSpeed ? 1 : Math.cos(Sr.flutter);
            rr.globalAlpha = Zr, rr.globalCompositeOperation = Sr.additive ? "lighter" : "source-over", rr.setTransform(ar * Ir, jr * Ir, -jr, ar, Sr.x * this.scale, Sr.y * this.scale);
            const {
              image: fr
            } = Sr.sprite;
            rr.drawImage(fr, -fr.width / 2, -fr.height / 2)
          }
          rr.globalAlpha = 1, rr.globalCompositeOperation = "source-over"
        }
      }
    }
    var rS = Qr(3286),
      SS = Qr(1684),
      QS = Qr(1686),
      ZS = Qr(3242);
    const WS = 5e3;

    function aS(rr) {
      let {
        request: Sr
      } = rr;
      const {
        t: Qr
      } = (0, jr.E)(), {
        userContext: Wr
      } = (0, hr.c)(), {
        gift: nr,
        preview: Br
      } = Sr, {
        isTouchScreen: Tr
      } = (0, Ir.n)(["isTouchScreen"]), vr = function(rr) {
        var Sr;
        const Qr = yr.o.find((Sr => Sr.id === rr));
        return null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.id) && void 0 !== Sr ? Sr : "classic"
      }(nr.wrap), Pr = (Hr = nr.gems) >= Gr[3] ? 3 : Hr >= Gr[2] ? 2 : 1;
      var Hr;
      const qr = `${vr}:t${Pr}`,
        [gr] = (0, Zr.useState)((() => function(rr, Sr) {
          const [Qr] = rr.cosmeticPacks;
          let Zr = null;
          if ((0, rS.h)(rr) ? Zr = "rank" : void 0 === Qr && rr.premiumCurrency > 0 && (Zr = "gems"), void 0 === Qr) return {
            cosmetics: Sr,
            badge: Zr
          };
          const Wr = (0, SS.d)(Qr),
            ar = void 0 === Wr ? void 0 : QS.e[Wr];
          if (void 0 !== ar) return {
            cosmetics: ar.cosmetics,
            badge: Zr
          };
          const jr = {
              ...Sr
            },
            Ir = new Set;
          for (const fr of (0, ZS.l)(Qr)) {
            const [rr, Sr] = fr.split("|");
            Ir.has(rr) || (Ir.add(rr), jr[rr] = Sr)
          }
          return {
            cosmetics: jr,
            badge: Zr
          }
        }(nr.items, {
          ...Wr.getPlayerCosmetics()
        }))),
        [Cr, kr] = (0, Zr.useState)("arrive"),
        [ir, wr] = (0, Zr.useState)(0),
        [cr, Fr] = (0, Zr.useState)(!1),
        [or, br] = (0, Zr.useState)(!1),
        [Jr, Dr] = (0, Zr.useState)(!1),
        dr = (0, Zr.useRef)(null),
        sr = (0, Zr.useRef)(null),
        aS = {
          box: (0, Zr.useRef)(null),
          body: (0, Zr.useRef)(null),
          lid: (0, Zr.useRef)(null),
          seam: (0, Zr.useRef)(null),
          character: (0, Zr.useRef)(null),
          ring: (0, Zr.useRef)(null),
          beam: (0, Zr.useRef)(null),
          flash: (0, Zr.useRef)(null),
          shake: (0, Zr.useRef)(null),
          canvas: (0, Zr.useRef)(null)
        };
      (0, zr.h)("paused"), (0, Zr.useEffect)((() => {
        const rr = setTimeout((() => {
          Dr(!0)
        }), WS);
        return () => {
          clearTimeout(rr)
        }
      }), []), (0, Zr.useEffect)((() => {
        const rr = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          Qr = aS.canvas.current,
          Zr = Qr && !rr ? new ur(Qr, {
            wrap: vr,
            tier: Pr,
            phone: Tr
          }) : null,
          Wr = () => {
            null === Zr || void 0 === Zr || Zr.resize()
          };
        window.addEventListener("resize", Wr),
          function(rr) {
            for (const Sr of ["wobble", "pop", "sparkle", "sting"]) Xr.b.preload(Rr(Sr, rr))
          }(Pr), kr("arrive");
        const ar = new Mr({
          box: aS.box.current,
          body: aS.body.current,
          lid: aS.lid.current,
          seam: aS.seam.current,
          character: aS.character.current,
          ring: aS.ring.current,
          beam: aS.beam.current,
          flash: aS.flash.current,
          shake: aS.shake.current
        }, {
          tier: Pr,
          timeline: Ar(Pr),
          reducedMotion: rr,
          fx: Zr,
          onPhase: kr,
          onOpened: () => {
            var rr;
            Br || ((0, fr.reportAnalyticsClick)({
              id: "gift.open_anim",
              value: qr
            }), null === (rr = Sr.onOpened) || void 0 === rr || rr.call(Sr))
          }
        });
        return sr.current = ar, ar.arrive(), () => {
          window.removeEventListener("resize", Wr), ar.dispose(), Zr && (! function(rr) {
            if (rr.frameMs.length < 10) return;
            const Sr = [...rr.frameMs].sort(((rr, Sr) => rr - Sr)),
              Qr = {
                frames: Sr.length,
                medianFps: Math.round(1e3 / Math.max(Sr[Math.floor(Sr.length / 2)], 1)),
                p95FrameMs: Math.round(Sr[Math.floor(.95 * Sr.length)])
              };
            window.giftOpeningFrames = Qr, console.info("[gift-opening] frames", Qr)
          }(Zr), Zr.stop())
        }
      }), [ir]);
      const jS = () => {
          (0, Kr.b)(Sr)
        },
        IS = () => {
          var rr;
          Br || (0, fr.reportAnalyticsClick)({
            id: "gift.open_skip",
            value: `${qr}:${Cr}`
          }), null === (rr = sr.current) || void 0 === rr || rr.skip()
        },
        fS = cr || or || Jr,
        ES = "arrive" === Cr || "wait" === Cr || "charge" === Cr,
        pS = "charge" === Cr || "reveal" === Cr || "card" === Cr || "wait" === Cr && fS,
        xS = {
          "--gift-tier": Vr[Pr]
        };
      return (0, Yr.jsx)(pr.b, {
        className: "GiftOpeningScreen",
        close: "done" === Cr ? jS : pS ? IS : () => {},
        togglePointerLock: !0,
        forcePointerUnlock: !0,
        globallyUniqueKey: "giftOpening",
        closeOnPressBackground: !1,
        children: (0, Yr.jsxs)("div", {
          className: ar()("GiftOpening", `GiftOpeningTier${Pr}`, `GiftOpeningPhase_${Cr}`, {
            GiftOpeningDrawn: cr
          }),
          style: xS,
          ref: aS.shake,
          children: [(0, Yr.jsx)("div", {
            className: "GiftOpeningBackdrop"
          }), (0, Yr.jsx)("div", {
            className: "GiftOpeningRays"
          }), (0, Yr.jsxs)("div", {
            className: "GiftOpeningStage",
            children: [(0, Yr.jsx)("div", {
              className: "GiftOpeningBeam",
              ref: aS.beam
            }), (0, Yr.jsxs)("div", {
              className: "GiftOpeningCharacter",
              ref: aS.character,
              children: [(0, Yr.jsx)(Zr.Suspense, {
                fallback: null,
                children: (0, Yr.jsx)(Ur.b, {
                  ref: dr,
                  framing: "store",
                  owner: "other",
                  turntableFromYaw: ES ? null : Er.c.store.yaw,
                  onNoWebGl: () => {
                    br(!0)
                  },
                  onReady: () => {
                    var rr, Sr;
                    null === (rr = dr.current) || void 0 === rr || rr.resetCamera(), null === (Sr = dr.current) || void 0 === Sr || Sr.setAllCosmetics(gr.cosmetics)
                  },
                  onDrawn: () => {
                    Fr(!0)
                  }
                })
              }), (or || !ES && !cr) && (0, Yr.jsx)("div", {
                className: "GiftOpeningHead",
                children: (0, Yr.jsx)(tr.b, {
                  cosmetics: gr.cosmetics
                })
              }), gr.badge && (0, Yr.jsx)("div", {
                className: "GiftOpeningBadge",
                children: "gems" === gr.badge ? (0, Yr.jsx)(Nr.f, {}) : (0, Yr.jsx)(mr.c, {
                  name: "bolt"
                })
              })]
            }), (0, Yr.jsx)(er, {
              wrap: vr,
              className: ar()("GiftOpeningBox", {
                GiftOpeningBoxIdle: "wait" === Cr
              }),
              rootRef: aS.box,
              bodyRef: aS.body,
              lidRef: aS.lid,
              seamRef: aS.seam
            }), (0, Yr.jsx)("div", {
              className: "GiftOpeningRing",
              ref: aS.ring
            })]
          }), (0, Yr.jsx)("canvas", {
            className: "GiftOpeningFx",
            ref: aS.canvas
          }), (0, Yr.jsx)("div", {
            className: "GiftOpeningFlash",
            ref: aS.flash
          }), ES && (0, Yr.jsxs)("div", {
            className: "GiftOpeningTitle",
            children: [(0, Yr.jsx)("div", {
              className: "SmallTextBold",
              children: Qr("giftOpening:sentYou", {
                name: nr.senderName
              })
            }), (0, Yr.jsx)(Lr, {
              gift: nr
            })]
          }), "wait" === Cr && fS && (0, Yr.jsx)("div", {
            className: "GiftOpeningHint SmallTextBold",
            children: Qr("giftOpening:tapToOpen")
          }), (0, Yr.jsx)(Or, {
            gift: nr,
            shown: "card" === Cr || "done" === Cr
          }), "done" !== Cr && (0, Yr.jsx)("button", {
            type: "button",
            className: "GiftOpeningTap",
            "data-pad-default-focus": !0,
            "aria-label": Qr("giftOpening:tapToOpen"),
            onClick: () => {
              var rr;
              ("wait" !== Cr || fS) && (null === (rr = sr.current) || void 0 === rr || rr.tap())
            }
          }), pS && (0, Yr.jsxs)(xr.k, {
            className: "GiftOpeningSkip",
            onClick: IS,
            children: [Qr("giftOpening:skip"), " ", (0, Yr.jsx)(mr.c, {
              name: "arrow-right"
            })]
          }), "done" === Cr && (0, Yr.jsx)(lr, {
            gift: nr,
            preview: Br,
            analyticsValue: qr,
            onReplay: () => {
              wr(ir + 1)
            },
            onClose: jS
          })]
        })
      })
    }
  },
  35509: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      e: () => Wr,
      i: () => xr
    });
    var Zr = Qr(1686);

    function Wr(rr) {
      var Sr;
      return {
        ...Ir.store,
        yaw: Ir.store.yaw + (null !== (Sr = Zr.e[rr].previewYaw) && void 0 !== Sr ? Sr : 0)
      }
    }
    const ar = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      jr = {
        ...ar,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Ir = {
        player: ar,
        store: jr,
        showcase: {
          ...jr,
          target: [0, 1.9, 0]
        }
      };

    function fr(rr, Sr) {
      rr instanceof Promise ? rr.then(Sr).catch((rr => {
        console.error("Couldn't open the preview", rr)
      })) : Sr(rr)
    }
    class Er {
      constructor(rr) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height), null !== this.view && rr.show(this.view))
        }))
      }
      show(rr) {
        var Sr;
        this.view = rr, null === (Sr = this.opened) || void 0 === Sr || Sr.show(rr)
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    class pr {
      constructor(rr) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(rr).then((rr => rr.ready)), fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.isReady()) && void 0 !== rr && rr
      }
      setCosmetic(rr, Sr) {
        var Qr;
        null === (Qr = this.opened) || void 0 === Qr || Qr.setCosmetic(rr, Sr)
      }
      setNametag(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setNametag(rr)
      }
      playEmote(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.playEmote(rr)
      }
      setOrbit(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setOrbit(rr)
      }
      resetCamera() {
        var rr;
        null === (rr = this.opened) || void 0 === rr || rr.resetCamera()
      }
      async untilDrawn(rr) {
        var Sr;
        await this.ready, await (null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.untilDrawn(rr))
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    const xr = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(rr) {
        this.host = rr
      }
      setDefaultHost(rr) {
        this.makeDefault = rr
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(rr) {
        return new Er(this.current().openMob(rr))
      }
      openPet(rr) {
        return new Er(this.current().openPet(rr))
      }
      openMobLineup(rr) {
        return new Er(this.current().openMobLineup(rr))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(rr, Sr) {
        return new pr(this.current().openCharacter(rr, Sr))
      }
    }
  },
  35505: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr.d,
      f: () => Zr.e,
      j: () => Zr.i
    });
    var Zr = Qr(35509);
    class Wr {
      constructor(rr) {
        this.load = rr, this.loaded = null, this.loading = null
      }
      run(rr) {
        return null !== this.loaded ? rr(this.loaded) : (this.loading ??= this.load().then((rr => (this.loaded = rr, rr)), (rr => {
          throw this.loading = null, rr
        })), this.loading.then(rr))
      }
    }
    class ar {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Wr((() => Promise.all([Qr.e(85), Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(113), Qr.e(291), Qr.e(89), Qr.e(86), Qr.e(288), Qr.e(87), Qr.e(88), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(312), Qr.e(261), Qr.e(279), Qr.e(293), Qr.e(296), Qr.e(91), Qr.e(253), Qr.e(267), Qr.e(112), Qr.e(124), Qr.e(258), Qr.e(142), Qr.e(90), Qr.e(122), Qr.e(311)]).then((() => Qr(42945))))), this.characterScene = new Wr((() => Promise.all([Qr.e(85), Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(113), Qr.e(291), Qr.e(89), Qr.e(86), Qr.e(288), Qr.e(87), Qr.e(88), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(312), Qr.e(177), Qr.e(261), Qr.e(279), Qr.e(293), Qr.e(296), Qr.e(91), Qr.e(225), Qr.e(253), Qr.e(267), Qr.e(112), Qr.e(124), Qr.e(258), Qr.e(142), Qr.e(90), Qr.e(122), Qr.e(280), Qr.e(184)]).then((() => Qr(43048)))))
      }
      openMob(rr) {
        return this.mobScene.run((Sr => Sr.openMobPreview(rr)))
      }
      openPet(rr) {
        return this.mobScene.run((Sr => Sr.openPetPreview(rr)))
      }
      openMobLineup(rr) {
        return this.mobScene.run((Sr => Sr.openMobLineupPreview(rr)))
      }
      openCharacter(rr, Sr) {
        return this.characterScene.run((Qr => Qr.openCharacterPreview(rr, Sr)))
      }
    }
    Zr.i.setDefaultHost((() => new ar))
  },
  37866: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      i: () => fr,
      j: () => jr
    });
    var Zr = Qr(688),
      Wr = Qr(2383);

    function ar(rr) {
      return rr === (0, Wr.e)().WC ? (0, Wr.e)().fC : rr
    }

    function jr(rr) {
      return !(0, Zr.L)(rr) && ar(rr) === (0, Wr.e)().fC
    }
    const Ir = "gravity";

    function fr() {
      return (0, Wr.e)().physics[Ir][1]
    }
  },
  37843: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Tr
    });
    var Zr = Qr(37851),
      Wr = Qr(208),
      ar = Qr(5681),
      jr = Qr(37853),
      Ir = Qr(37859),
      fr = Qr(37927),
      Er = Qr(37866),
      pr = Qr(388),
      xr = Qr.n(pr),
      mr = Qr(2383),
      Nr = Qr(37924),
      Ur = Qr(34),
      tr = Qr(26),
      hr = Qr(37875),
      zr = Qr(37884),
      Yr = Qr(37893),
      nr = Qr(37902),
      er = Qr(37915);
    const Kr = new Set(["note"]);
    const yr = {
      stop: () => yr,
      fade: () => yr,
      rate: () => yr,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => yr,
      setPannerAttr: () => yr,
      setPosition: () => yr
    };
    class Br {
      constructor(rr) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new fr.k, this._howl = (0, Ir.countDecodesAs)(new ar.Howl({
          src: [...(0, Zr.r)(rr).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = this._howl.play(jr.e);
        rr && this._howl.loop(!0, Sr);
        let Qr = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), Sr);
        const Zr = {
          stop: () => {
            var rr;
            return null === (rr = this.liveHowl()) || void 0 === rr || rr.stop(Sr), Zr
          },
          fade: (rr, Qr, Wr) => {
            var ar;
            return null === (ar = this.liveHowl()) || void 0 === ar || ar.fade(rr, Qr, Wr, Sr), Zr
          },
          rate: rr => {
            var Qr;
            return null === (Qr = this.liveHowl()) || void 0 === Qr || Qr.rate(rr, Sr), Zr
          },
          stopsAtOnce: () => this._howl.playing(Sr) && !this._howl._playLock,
          isAlive: () => {
            const rr = this._howl._soundById(Sr);
            return !this._loadFailed && !!rr && !rr._ended
          },
          getDurationMs: () => this._howl._soundById(Sr) ? 1e3 * this._howl.duration(Sr) / this._howl.rate(Sr) : 0,
          getVolume: () => Qr * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Qr,
          setRelativeVolume: rr => {
            var Wr;
            if (rr > 1) throw new Error("Volume should be <= 1");
            return Qr = tr.c.get("soundOnFromAd") ? rr : 0, null === (Wr = this.liveHowl()) || void 0 === Wr || Wr.volume(Math.min(1, Qr * this._volumeMultiplier.getTotalMultipliedVal()), Sr), Zr
          },
          setPannerAttr: rr => {
            let {
              coneInnerAngle: Qr,
              coneOuterAngle: Wr = 360,
              coneOuterGain: ar,
              distanceModel: jr,
              maxDistance: Ir,
              panningModel: fr,
              refDistance: Er,
              rolloffFactor: pr
            } = rr;
            return this._setPannerAttr({
              id: Sr,
              coneInnerAngle: Qr,
              coneOuterAngle: Wr,
              coneOuterGain: ar,
              distanceModel: jr,
              maxDistance: Ir,
              panningModel: fr,
              refDistance: Er,
              rolloffFactor: pr
            }), Zr
          },
          setPosition: rr => {
            var Qr;
            return null === (Qr = this.liveHowl()) || void 0 === Qr || Qr.pos(rr[2], rr[1], rr[0], Sr), Zr
          }
        };
        return Zr
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, jr.g)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(rr) {
        this._volumeMultiplier.setMultiplierType("globalVolume", rr), this._howl.volume(rr)
      }
      _setPannerAttr(rr) {
        let {
          id: Sr,
          coneInnerAngle: Qr = 360,
          coneOuterAngle: Zr = 360,
          coneOuterGain: Wr = 0,
          distanceModel: ar = "inverse",
          maxDistance: jr = 1e3,
          panningModel: Ir = "HRTF",
          refDistance: fr = Nr.h,
          rolloffFactor: Er = 1
        } = rr;
        const pr = this.liveHowl();
        if (null === pr) return;
        pr.pannerAttr({
          coneOuterAngle: Zr
        }, Sr);
        const xr = {
          coneInnerAngle: Qr,
          coneOuterAngle: Zr,
          coneOuterGain: Wr,
          distanceModel: ar,
          maxDistance: jr,
          panningModel: Ir,
          refDistance: fr,
          rolloffFactor: Er
        };
        pr.pannerAttr(xr, Sr)
      }
    }
    const Tr = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new hr.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, Ur.i.subscribe("appManagerUpdated|soundVolume", (rr => {
          const Sr = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const Qr of Sr) Qr.setGlobalVolume(rr)
        }))
      }
      play(rr, Sr) {
        var Qr;
        let ar, jr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Qr = (0, mr.e)()) || void 0 === Qr ? void 0 : Qr.fC,
          Ir = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nr.e,
          fr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nr.h,
          pr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Ur;
        (0, mr.e)() ? ar = !!Array.isArray(jr) || (0, Er.e)(jr) !== (null === (Ur = (0, mr.e)()) || void 0 === Ur ? void 0 : Ur.fC): ar = !1;
        const tr = (0, Zr.g)(rr),
          zr = this.loadSound(ar ? this.spatialSounds : this.stereoSounds, rr);
        if (!ar) {
          const rr = zr.play(pr);
          return rr.setRelativeVolume(Sr), rr
        }
        const Yr = (0, mr.e)(),
          nr = Array.isArray(jr) ? jr : Yr.YB.JY(jr),
          Br = Yr.YB.JY(Yr.fC);
        if (!nr || xr().sqrDist(nr, Br) > Ir * Ir) return yr;
        let Tr;
        if (!pr) {
          if (!this.spatialVoices.admit({
              group: Kr.has(tr) ? null : (0, hr.l)(rr),
              loudness: (0, hr.h)(Sr, xr().Oj(nr, Br), fr),
              startMs: performance.now(),
              getDurationMs: () => {
                var rr, Sr;
                return null !== (rr = null === (Sr = Tr) || void 0 === Sr ? void 0 : Sr.getDurationMs()) && void 0 !== rr ? rr : 0
              },
              isAlive: () => {
                var rr, Sr;
                return null !== (rr = null === (Sr = Tr) || void 0 === Sr ? void 0 : Sr.isAlive()) && void 0 !== rr && rr
              },
              canStop: () => {
                var rr, Sr;
                return null !== (rr = null === (Sr = Tr) || void 0 === Sr ? void 0 : Sr.stopsAtOnce()) && void 0 !== rr && rr
              },
              stop: () => {
                var rr;
                null === (rr = Tr) || void 0 === rr || rr.stop()
              }
            })) return yr
        }
        return Tr = zr.play(pr), Tr.setRelativeVolume(Sr), Tr.setPannerAttr({
          refDistance: fr
        }), Tr.setPosition([nr[0], nr[1] + Wr.i.Uz * Wr.i.playerEyeToHeightRatio, nr[2]]), !pr && (0, er.l)() && (0, er.i)(tr, rr, nr[0] - Br[0], nr[2] - Br[2]), Tr
      }
      preload(rr) {
        const Sr = (0, Zr.l)(rr) ? [rr] : (0, Zr.t)(rr);
        if (0 === Sr.length) throw new Error(`Invalid sound name ${rr} (no sound has it or starts with it)`);
        for (const Qr of Sr) this.loadSound(this.stereoSounds, Qr)
      }
      preloadAtIdle(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nr.c;
        const Qr = rr.filter((rr => !this.idlePreloads.has(rr)));
        for (const Wr of Qr) this.idlePreloads.add(Wr);
        const Zr = this.idlePreloadGeneration;
        (0, Yr.d)(Qr, {
          ...Sr,
          Rr: () => Zr !== this.idlePreloadGeneration,
          fetchFile: rr => {
            this.idlePreloads.delete(rr);
            try {
              return this.preload(rr), Promise.resolve()
            } catch (Sr) {
              return Promise.reject(Sr)
            }
          }
        })
      }
      loadSound(rr, Sr) {
        const Qr = rr[Sr];
        if (Qr) return Qr;
        const Wr = this.makeSound(rr, Sr);
        for (const jr of null !== (ar = (0, Zr.n)(Sr)) && void 0 !== ar ? ar : []) {
          var ar;
          rr[jr] || this.makeSound(rr, jr)
        }
        return Wr
      }
      makeSound(rr, Sr) {
        (0, nr.f)(Sr);
        const Qr = new Br(Sr);
        return Qr.setGlobalVolume(tr.c.get("soundVolume")), rr[Sr] = Qr, Qr
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const rr of [this.stereoSounds, this.spatialSounds])
          for (const [Sr, Qr] of Object.entries(rr)) !zr.b.has((0, Zr.g)(Sr)) && Qr.loaded() && (Qr.unloadOnceIdle(), delete rr[Sr])
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);