export const id = 228;
export const ids = [228];
export const modules = {
  37619: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      GiftOpening: () => pw
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(1259),
      gb = Mb(26),
      lb = Mb(1648),
      Lb = Mb(35366),
      Ib = Mb(5384),
      Ob = Mb(1616),
      Ub = Mb(1475),
      tb = Mb(3457),
      Cb = Mb(3813),
      Eb = Mb(3402),
      Fb = Mb(1179),
      Bb = Mb(4501),
      sb = Mb(1364);
    const mb = {
      festive: "\ud83c\udf84 \u26c4 \ud83c\udf81",
      sweater: "\u2744"
    };

    function hb(bb) {
      let {
        wrap: wb,
        className: Mb,
        rootRef: eb,
        bodyRef: Hb,
        lidRef: Vb,
        seamRef: gb
      } = bb;
      const lb = mb[wb];
      return (0, sb.jsxs)("div", {
        className: pb()("GiftBox", `GiftBoxWrap_${wb}`, Mb),
        ref: eb,
        children: [(0, sb.jsx)("div", {
          className: "GiftBoxPlinth"
        }), (0, sb.jsxs)("div", {
          className: "GiftBoxBody",
          ref: Hb,
          children: [(0, sb.jsxs)("div", {
            className: "GiftBoxCube",
            children: [(0, sb.jsxs)("div", {
              className: "GiftBoxFace GiftBoxFront",
              children: [lb && (0, sb.jsx)("span", {
                className: "GiftBoxPrint",
                children: lb
              }), "blocks" === wb && (0, sb.jsxs)("svg", {
                className: "GiftBoxCracks",
                viewBox: "0 0 100 80",
                "aria-hidden": !0,
                children: [(0, sb.jsx)("polyline", {
                  points: "50,0 44,18 56,30 47,48 58,62 52,80"
                }), (0, sb.jsx)("polyline", {
                  points: "44,18 24,26 14,44"
                }), (0, sb.jsx)("polyline", {
                  points: "56,30 78,36 90,58"
                })]
              })]
            }), (0, sb.jsx)("div", {
              className: "GiftBoxFace GiftBoxSide"
            }), (0, sb.jsxs)("div", {
              className: "GiftBoxLid",
              ref: Vb,
              children: [(0, sb.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidFront"
              }), (0, sb.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidSide"
              }), (0, sb.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidTop"
              }), (0, sb.jsxs)("div", {
                className: "GiftBoxBow",
                children: [(0, sb.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowLeft"
                }), (0, sb.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowRight"
                }), (0, sb.jsx)("div", {
                  className: "GiftBoxBowKnot"
                })]
              })]
            })]
          }), (0, sb.jsx)("div", {
            className: "GiftBoxSeam",
            ref: gb
          })]
        })]
      })
    }
    var zb = Mb(5161),
      Xb = Mb(4399),
      xb = Mb(3113);

    function jb(bb, wb) {
      const [Mb] = wb.cosmeticPacks;
      return void 0 !== Mb ? (0, xb.g)(Mb) : wb.superDays > 0 ? bb("paymentHistory:superRankDays", {
        count: wb.superDays
      }) : wb.hyperDays > 0 ? bb("paymentHistory:hyperRankDays", {
        count: wb.hyperDays
      }) : bb("paymentHistory:premiumCurrency", {
        count: wb.premiumCurrency
      })
    }

    function Kb(bb) {
      var wb, Mb;
      const {
        t: eb
      } = (0, Vb.C)(), Hb = Xb.l.find((wb => wb.id === bb.message));
      return {
        message: void 0 === Hb ? null : eb(Hb.key, {
          name: bb.recipientName,
          level: null !== (wb = bb.senderLevel) && void 0 !== wb ? wb : 1,
          tier: null !== (Mb = bb.tierLabel) && void 0 !== Mb ? Mb : ""
        }),
        level: null === bb.senderLevel || "levelFlex" === (null === Hb || void 0 === Hb ? void 0 : Hb.kind) ? null : eb("giftOpening:gifterLevel", {
          level: bb.senderLevel
        })
      }
    }

    function rb(bb) {
      let {
        gift: wb,
        shown: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)(), {
        message: Hb,
        level: gb
      } = Kb(wb);
      return (0, sb.jsxs)("div", {
        className: pb()("GiftOpeningCard", {
          GiftOpeningCardShown: Mb
        }),
        children: [(0, sb.jsx)("div", {
          className: "GiftOpeningItem SmallTextBold",
          children: jb(eb, wb.items)
        }), null !== Hb && (0, sb.jsx)("div", {
          className: "GiftOpeningCardMessage SmallTextLight",
          children: Hb
        }), (0, sb.jsxs)("div", {
          className: "GiftOpeningFrom SmallTextLight",
          children: [wb.senderName, null !== gb && ` \xb7 ${gb}`]
        })]
      })
    }

    function Rb(bb) {
      let {
        gift: wb
      } = bb;
      const {
        message: Mb,
        level: eb
      } = Kb(wb);
      return (0, sb.jsxs)(sb.Fragment, {
        children: [null !== Mb && (0, sb.jsx)("div", {
          className: "GiftOpeningIntroMessage SmallTextLight",
          children: `"${Mb}"`
        }), null !== eb && (0, sb.jsx)("div", {
          className: "GiftOpeningIntroLevel SmallTextBold",
          children: eb
        })]
      })
    }

    function Db(bb) {
      let {
        gift: wb,
        preview: Mb,
        analyticsValue: eb,
        onReplay: Hb,
        onClose: pb
      } = bb;
      const {
        t: Lb
      } = (0, Vb.C)(), {
        gameState: Ib
      } = (0, gb.o)(["gameState"]), tb = !Mb && wb.items.cosmeticPacks.length > 0 && !(0, gb.e)(Ib);
      return (0, sb.jsxs)("div", {
        className: "GiftOpeningButtons",
        children: [Mb && (0, sb.jsxs)(Ob.f, {
          className: "GiftOpeningButton",
          touchPressOn: "pointerup",
          onClick: Hb,
          children: [(0, sb.jsx)(Ub.b, {
            name: "rotate-right"
          }), " ", Lb("giftOpening:replay")]
        }), tb && (0, sb.jsx)(Ob.f, {
          className: "GiftOpeningButton",
          padDefaultFocus: !0,
          touchPressOn: "pointerup",
          onClick: () => {
            (0, lb.reportAnalyticsClick)({
              id: "gift.open_customise",
              value: eb
            }), (0, xb.k)(), pb()
          },
          children: Lb("general:customize")
        }), (0, sb.jsx)(Ob.f, {
          className: "GiftOpeningButton",
          padDefaultFocus: !tb,
          touchPressOn: "pointerup",
          onClick: pb,
          children: Lb(Mb ? "giftOpening:back" : "giftOpening:done")
        })]
      })
    }
    var cb = Mb(37627);
    const Yb = {
        1: "harp_pling",
        2: "exp_levelup",
        3: "trumpetFlare"
      },
      Zb = {
        wobble: "chestClose",
        pop: "chestOpen",
        sparkle: "exp_collect"
      },
      fb = {
        wobble: .55,
        pop: .8,
        sparkle: .4,
        sting: .7
      };

    function Ab(bb, wb) {
      return "sting" === bb ? Yb[wb] : Zb[bb]
    }

    function Wb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      try {
        cb.c.play(Ab(bb, wb), fb[bb]).rate(Math.pow(2, 2 * Mb / 12))
      } catch (eb) {
        console.warn("[gift-opening] a sound failed to play", eb)
      }
    }
    const Jb = "cubic-bezier(0.22, 1, 0.36, 1)";
    class Sb {
      constructor(bb, wb) {
        this.parts = bb, this.options = wb, this.phase = "arrive", this.timers = [], this.animations = [], this.opened = !1, this.popped = !1
      }
      setPhase(bb) {
        this.phase = bb, this.options.onPhase(bb)
      }
      at(bb, wb) {
        this.timers.push(setTimeout(wb, bb))
      }
      animate(bb, wb, Mb) {
        this.animations.push(bb.animate(wb, {
          fill: "forwards",
          ...Mb
        }))
      }
      markOpened() {
        this.opened || (this.opened = !0, this.options.onOpened())
      }
      arrive() {
        const {
          timeline: bb,
          reducedMotion: wb
        } = this.options, Mb = wb ? [{
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
        this.animate(this.parts.body, Mb, {
          duration: wb ? 200 : bb.arriveMs,
          fill: "none"
        }), this.at(wb ? 200 : bb.arriveMs, (() => {
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
        }), Wb("sting", this.options.tier), this.at(300, (() => {
          this.setPhase("done")
        }))
      }
      charge() {
        const {
          timeline: bb,
          tier: wb,
          fx: Mb
        } = this.options;
        this.setPhase("charge");
        const eb = bb.wobbles,
          Hb = bb.burstAt,
          pb = (bb.chargeMs - 80) / eb.length,
          Vb = [{
            transform: "none",
            offset: 0
          }, {
            transform: "scale(1.06, 0.92)",
            offset: 80 / Hb
          }];
        eb.forEach(((bb, Mb) => {
          const eb = 80 + Mb * pb;
          Vb.push({
            transform: `rotate(${bb}deg) translateX(${.3*bb}px)`,
            offset: (eb + .3 * pb) / Hb
          }), Vb.push({
            transform: `rotate(${-bb}deg) translateX(${.3*-bb}px)`,
            offset: (eb + .75 * pb) / Hb
          }), this.at(eb, (() => {
            Wb("wobble", wb, Mb)
          }))
        })), Vb.push({
          transform: "rotate(0deg)",
          offset: bb.chargeMs / Hb
        }), Vb.push({
          transform: "scale(1.12, 0.84)",
          offset: (bb.chargeMs + 40) / Hb
        }), Vb.push({
          transform: "scale(1.12, 0.84)",
          offset: 1
        }), this.animate(this.parts.body, Vb, {
          duration: Hb
        });
        const gb = [{
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.6)"
        }];
        eb.forEach(((bb, wb) => {
          const Mb = (wb + 1) / (eb.length + .5);
          gb.push({
            opacity: Mb,
            transform: `translate(-50%, -50%) scale(${.7+.5*Mb})`,
            offset: (80 + (wb + 1) * pb) / Hb
          })
        })), gb.push({
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1.3)"
        }), this.animate(this.parts.seam, gb, {
          duration: Hb,
          easing: "linear"
        });
        const lb = this.parts.box.querySelector(".GiftBoxCracks");
        lb && this.animate(lb, [{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: Hb,
          easing: "steps(3, end)"
        });
        const {
          x: Lb,
          y: Ib
        } = this.boxCentre();
        null === Mb || void 0 === Mb || Mb.charge(Lb, Ib, bb.chargeMs), this.at(Hb, (() => {
          this.burst(Hb)
        }))
      }
      boxCentre() {
        const bb = this.parts.box.getBoundingClientRect();
        return {
          x: bb.left + bb.width / 2,
          y: bb.top + .45 * bb.height,
          floorY: bb.bottom
        }
      }
      burst(bb) {
        const {
          timeline: wb,
          tier: Mb,
          fx: eb
        } = this.options;
        if (this.popped) return;
        this.popped = !0, this.markOpened();
        const Hb = wb => Math.max(0, wb - bb),
          pb = {
            duration: 620,
            easing: Jb
          };
        this.animate(this.parts.lid, [{
          transform: "translateY(-0.36em)"
        }, {
          transform: "translate(0.35em, -2.2em) rotateZ(26deg) rotateX(24deg)",
          offset: .55
        }, {
          transform: "translate(0.6em, -3.2em) rotateZ(40deg) rotateX(40deg)"
        }], pb);
        for (const Lb of this.parts.lid.querySelectorAll(":scope > *")) this.animate(Lb, [{
          opacity: 1
        }, {
          opacity: 1,
          offset: .55
        }, {
          opacity: 0
        }], pb);
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
            easing: Jb
          }), wb.flashAlpha > 0 && this.animate(this.parts.flash, [{
            opacity: 0
          }, {
            opacity: wb.flashAlpha,
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
            easing: Jb
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
            easing: Jb
          }), wb.kickPx > 0) {
          const bb = wb.kickPx;
          this.animate(this.parts.shake, [{
            transform: "none"
          }, {
            transform: `translate(${bb}px, ${-bb}px)`
          }, {
            transform: `translate(${.7*-bb}px, ${.5*bb}px)`
          }, {
            transform: `translate(${.4*bb}px, ${.3*bb}px)`
          }, {
            transform: "none"
          }], {
            duration: 300,
            easing: "linear",
            fill: "none"
          })
        }
        Wb("pop", Mb), Wb("sparkle", Mb, 2);
        const {
          x: Vb,
          y: gb,
          floorY: lb
        } = this.boxCentre();
        null === eb || void 0 === eb || eb.burst(Vb, gb, wb.burstParticles, lb), this.at(Hb(wb.revealAt), (() => {
          this.reveal()
        })), this.at(Hb(wb.cardAt), (() => {
          this.setPhase("card")
        })), this.at(Hb(wb.buttonsAt), (() => {
          this.setPhase("done")
        }))
      }
      reveal() {
        const {
          timeline: bb,
          tier: wb,
          fx: Mb
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
          easing: Jb
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
        }), Wb("sting", wb), null === Mb || void 0 === Mb || Mb.linger(this.boxCentre().x, bb.buttonsAt - bb.revealAt + 1500, bb.rain)
      }
      skip() {
        var bb;
        (this.clearTimers(), this.cancelAnimations(), this.popped) || (null === (bb = this.options.fx) || void 0 === bb || bb.clear());
        this.markOpened(), this.parts.body.style.opacity = "0", this.parts.character.style.opacity = "1", this.parts.character.style.transform = "none", this.setPhase("done")
      }
      cancelAnimations() {
        for (const bb of this.animations) bb.cancel();
        this.animations = []
      }
      clearTimers() {
        for (const bb of this.timers) clearTimeout(bb);
        this.timers = []
      }
      dispose() {
        this.clearTimers(), this.cancelAnimations(), this.parts.body.style.removeProperty("opacity"), this.parts.character.style.removeProperty("opacity"), this.parts.character.style.removeProperty("transform")
      }
    }
    const Nb = {
      2: 500,
      3: 1200
    };
    const vb = {
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

    function Qb(bb) {
      const wb = vb[bb];
      return {
        ...wb,
        burstAt: wb.chargeMs + wb.hitStopMs
      }
    }
    const Gb = {
      1: "#5ab8ff",
      2: "#b673ff",
      3: "#ffc83d"
    };

    function qb(bb, wb, Mb) {
      const eb = document.createElement("canvas"),
        Hb = Math.ceil(bb * wb);
      eb.width = Hb, eb.height = Hb;
      const pb = eb.getContext("2d");
      return pb && Mb(pb, Hb), {
        image: eb
      }
    }

    function ab(bb, wb) {
      return qb(16, wb, ((wb, Mb) => {
        wb.fillStyle = bb, wb.fillRect(.3 * Mb, 0, .4 * Mb, Mb)
      }))
    }

    function ib(bb, wb, Mb) {
      return qb(14, Mb, ((Mb, eb) => {
        Mb.fillStyle = wb, Mb.fillRect(0, 0, eb, eb), Mb.fillStyle = bb, Mb.fillRect(0, 0, eb, .35 * eb)
      }))
    }

    function ub(bb, wb) {
      return qb(18, wb, ((wb, Mb) => {
        wb.fillStyle = bb, wb.beginPath(), wb.moveTo(Mb / 2, 0), wb.lineTo(.85 * Mb, .55 * Mb), wb.lineTo(Mb / 2, Mb), wb.lineTo(.2 * Mb, .45 * Mb), wb.closePath(), wb.fill(), wb.fillStyle = "rgba(255,255,255,0.55)", wb.beginPath(), wb.moveTo(Mb / 2, 0), wb.lineTo(.6 * Mb, .5 * Mb), wb.lineTo(.2 * Mb, .45 * Mb), wb.closePath(), wb.fill()
      }))
    }

    function db(bb, wb) {
      return qb(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, wb, ((wb, Mb) => {
        const eb = Mb / 2;
        wb.fillStyle = bb, wb.beginPath();
        for (let bb = 0; bb < 10; bb++) {
          const Mb = bb % 2 === 0 ? eb : .45 * eb,
            Hb = -Math.PI / 2 + bb * Math.PI / 5;
          wb.lineTo(eb + Math.cos(Hb) * Mb, eb + Math.sin(Hb) * Mb)
        }
        wb.closePath(), wb.fill()
      }))
    }

    function Pb(bb, wb) {
      return qb(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24, wb, ((wb, Mb) => {
        const eb = wb.createRadialGradient(Mb / 2, Mb / 2, 0, Mb / 2, Mb / 2, Mb / 2);
        eb.addColorStop(0, "rgba(255,255,255,1)"), eb.addColorStop(.25, bb), eb.addColorStop(1, "rgba(0,0,0,0)"), wb.fillStyle = eb, wb.fillRect(0, 0, Mb, Mb)
      }))
    }
    const nb = {
      classic: bb => [ab("#e63946", bb), ab("#ffffff", bb), ab("#ffd166", bb), ab("#2a9d8f", bb), db("#ffd166", bb, 14)],
      blocks: bb => [ib("#6abe30", "#8a5a33", bb), ib("#8a5a33", "#6d4426", bb), ib("#9da3a6", "#7b8083", bb), ib("#7ff3f0", "#3fb7c0", bb)],
      gems: bb => [ub("#b673ff", bb), ub("#ff7ad9", bb), ub("#6fe0ff", bb), ub("#ffffff", bb)],
      stars: bb => [db("#fff6b0", bb), db("#ffffff", bb, 14), db("#9fd0ff", bb, 12), Pb("#9fd0ff", bb, 16)],
      legend: bb => [ab("#ffc83d", bb), ab("#ff5d8f", bb), ab("#5ab8ff", bb), ab("#7cf29a", bb), db("#ffc83d", bb), db("#fff4c2", bb, 14)],
      sweater: bb => [Pb("#ffffff", bb, 18), Pb("#dff3ff", bb, 12), db("#ffffff", bb, 12)],
      festive: bb => ["\ud83c\udf84", "\u26c4", "\ud83c\udf81", "\u2744\ufe0f", "\u2b50"].map((wb => function(bb, wb) {
        return qb(26, wb, ((wb, Mb) => {
          wb.font = `${Math.round(.8*Mb)}px sans-serif`, wb.textAlign = "center", wb.textBaseline = "middle", wb.fillText(bb, Mb / 2, Mb / 2 + .05 * Mb)
        }))
      }(wb, bb)))
    };
    const yb = {
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

    function ob(bb) {
      let [wb, Mb] = bb;
      return wb + Math.random() * (Mb - wb)
    }

    function Tb(bb) {
      return bb[Math.floor(Math.random() * bb.length)]
    }
    class kb {
      constructor(bb, wb) {
        var Mb, eb, Hb;
        this.canvas = bb, this.options = wb, this.context = void 0, this.sprites = void 0, this.particles = [], this.scale = void 0, this.frame = 0, this.lastAt = 0, this.embersUntil = 0, this.embersX = 0, this.rainUntil = 0, this.spawnCarry = 0, this.stopped = !1, this.frameMs = [], this.sO = bb => {
          const wb = Math.min(bb - this.lastAt, 50);
          this.lastAt = bb, this.spawnLingering(wb), this.step(wb), this.draw();
          const Mb = bb < this.embersUntil || bb < this.rainUntil;
          this.frame = this.particles.length > 0 || Mb ? requestAnimationFrame(this.sO) : 0, 0 === this.frame && (this.canvas.style.visibility = "hidden")
        }, this.context = bb.getContext("2d"), this.scale = Math.min(window.devicePixelRatio || 1, wb.phone ? 1.5 : 2), this.sprites = (Mb = wb.wrap, eb = Gb[wb.tier], Hb = this.scale, {
          burst: nb[Mb](Hb),
          spark: Pb(eb, Hb),
          rain: [db("#ffc83d", Hb, 16), ab("#ffc83d", Hb), ab("#fff1b8", Hb)]
        }), this.resize()
      }
      resize() {
        const {
          clientWidth: bb,
          clientHeight: wb
        } = this.canvas;
        this.canvas.width = Math.round(bb * this.scale), this.canvas.height = Math.round(wb * this.scale)
      }
      count(bb) {
        return Math.round(this.options.phone ? bb / 2 : bb)
      }
      add(bb) {
        this.particles.push({
          motion: "fall",
          UW: 0,
          OW: 0,
          gravity: 0,
          drag: 0,
          rotation: Math.random() * Math.PI * 2,
          spin: 0,
          flutterSpeed: 0,
          fromX: bb.x,
          fromY: bb.y,
          toX: bb.x,
          toY: bb.y,
          floorY: 1 / 0,
          additive: !1,
          ...bb,
          flutter: Math.random() * Math.PI * 2,
          ageMs: 0
        }), this.wake()
      }
      charge(bb, wb, Mb) {
        for (let eb = 0; eb < this.count(18 + 8 * this.options.tier); eb++) {
          const eb = Math.random() * Math.PI * 2,
            Hb = ob([120, 240]);
          this.add({
            sprite: this.sprites.spark,
            motion: "converge",
            x: bb,
            y: wb,
            fromX: bb + Math.cos(eb) * Hb,
            fromY: wb + Math.sin(eb) * Hb,
            size: ob([.5, 1]),
            lifeMs: Mb * ob([.55, 1]),
            additive: !0
          })
        }
      }
      burst(bb, wb, Mb, eb) {
        const Hb = yb[this.options.wrap];
        for (let pb = 0; pb < this.count(Mb); pb++) {
          const Mb = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.5,
            pb = ob(Hb.speed);
          this.add({
            sprite: Tb(this.sprites.burst),
            x: bb + 30 * (Math.random() - .5),
            y: wb,
            UW: Math.cos(Mb) * pb,
            OW: Math.sin(Mb) * pb,
            gravity: Hb.gravity,
            drag: Hb.drag,
            spin: 14 * (Math.random() - .5),
            flutterSpeed: Hb.flutter ? ob([8, 16]) : 0,
            size: ob([.7, 1.15]),
            lifeMs: ob(Hb.lifeMs),
            floorY: Hb.bounce ? eb : 1 / 0
          })
        }
        for (let pb = 0; pb < this.count(16 + 8 * this.options.tier); pb++) {
          const Mb = Math.random() * Math.PI * 2,
            eb = ob([300, 900]);
          this.add({
            sprite: this.sprites.spark,
            x: bb,
            y: wb,
            UW: Math.cos(Mb) * eb,
            OW: Math.sin(Mb) * eb,
            gravity: 200,
            drag: .05,
            size: ob([.4, .9]),
            lifeMs: ob([350, 700]),
            additive: !0
          })
        }
      }
      linger(bb, wb, Mb) {
        const eb = performance.now();
        this.embersX = bb, this.embersUntil = eb + wb, this.rainUntil = Mb ? eb + Math.min(wb, 1800) : 0, this.wake()
      }
      spawnLingering(bb) {
        const {
          clientWidth: wb,
          clientHeight: Mb
        } = this.canvas, eb = performance.now(), Hb = (eb < this.embersUntil ? this.count(14) : 0) + (eb < this.rainUntil ? this.count(50) : 0);
        for (this.spawnCarry += Hb * bb / 1e3; this.spawnCarry >= 1;) this.spawnCarry--, eb < this.rainUntil && Math.random() < .75 ? this.add({
          sprite: Tb(this.sprites.rain),
          x: Math.random() * wb,
          y: -20,
          UW: 60 * (Math.random() - .5),
          OW: ob([160, 320]),
          gravity: 500,
          drag: .2,
          spin: 8 * (Math.random() - .5),
          flutterSpeed: ob([6, 12]),
          size: ob([.6, 1]),
          lifeMs: 2200
        }) : this.add({
          sprite: this.sprites.spark,
          motion: "float",
          x: this.embersX + (Math.random() - .5) * Math.min(wb, 420),
          y: Mb * ob([.55, .8]),
          UW: 20 * (Math.random() - .5),
          OW: -ob([30, 70]),
          drag: .6,
          size: ob([.3, .6]),
          lifeMs: ob([1200, 2e3]),
          additive: !0
        })
      }
      clear() {
        var bb;
        this.particles.length = 0, this.embersUntil = 0, this.rainUntil = 0, null === (bb = this.context) || void 0 === bb || bb.clearRect(0, 0, this.canvas.width, this.canvas.height)
      }
      stop() {
        this.stopped = !0, cancelAnimationFrame(this.frame), this.frame = 0, this.clear(), this.canvas.style.visibility = "hidden"
      }
      wake() {
        0 !== this.frame || this.stopped || (this.lastAt = performance.now(), this.frame = requestAnimationFrame(this.sO), this.canvas.style.visibility = "visible")
      }
      step(bb) {
        const wb = bb / 1e3;
        let Mb = 0;
        for (const eb of this.particles)
          if (eb.ageMs += bb, !(eb.ageMs >= eb.lifeMs)) {
            if ("converge" === eb.motion) {
              const bb = eb.ageMs / eb.lifeMs,
                wb = bb * bb * bb;
              eb.x = eb.fromX + (eb.toX - eb.fromX) * wb, eb.y = eb.fromY + (eb.toY - eb.fromY) * wb
            } else {
              const bb = Math.pow(1 - eb.drag, wb);
              eb.UW *= bb, eb.OW = eb.OW * bb + eb.gravity * wb, eb.x += eb.UW * wb, eb.y += eb.OW * wb, eb.y > eb.floorY && eb.OW > 0 && (eb.y = eb.floorY, eb.OW *= -.35, eb.UW *= .6, eb.floorY = 1 / 0)
            }
            eb.rotation += eb.spin * wb, eb.flutter += eb.flutterSpeed * wb, this.particles[Mb++] = eb
          } this.particles.length = Mb
      }
      draw() {
        const bb = this.context;
        if (bb) {
          bb.setTransform(1, 0, 0, 1, 0, 0), bb.clearRect(0, 0, this.canvas.width, this.canvas.height);
          for (const wb of this.particles) {
            const Mb = wb.ageMs / wb.lifeMs,
              eb = "converge" === wb.motion ? .35 + .65 * Mb : Math.min(1, 4 * (1 - Mb)),
              Hb = wb.size,
              pb = Math.cos(wb.rotation) * Hb,
              Vb = Math.sin(wb.rotation) * Hb,
              gb = 0 === wb.flutterSpeed ? 1 : Math.cos(wb.flutter);
            bb.globalAlpha = eb, bb.globalCompositeOperation = wb.additive ? "lighter" : "source-over", bb.setTransform(pb * gb, Vb * gb, -Vb, pb, wb.x * this.scale, wb.y * this.scale);
            const {
              image: lb
            } = wb.sprite;
            bb.drawImage(lb, -lb.width / 2, -lb.height / 2)
          }
          bb.globalAlpha = 1, bb.globalCompositeOperation = "source-over"
        }
      }
    }
    var bw = Mb(3378),
      ww = Mb(1726),
      Mw = Mb(1735),
      ew = Mb(3329);
    const Hw = 5e3;

    function pw(bb) {
      let {
        request: wb
      } = bb;
      const {
        t: Mb
      } = (0, Vb.C)(), {
        userContext: Hb
      } = (0, Fb.e)(), {
        gift: mb,
        preview: xb
      } = wb, {
        isTouchScreen: jb
      } = (0, gb.o)(["isTouchScreen"]), Kb = function(bb) {
        var wb;
        const Mb = Xb.p.find((wb => wb.id === bb));
        return null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.id) && void 0 !== wb ? wb : "classic"
      }(mb.wrap), Yb = (Zb = mb.gems) >= Nb[3] ? 3 : Zb >= Nb[2] ? 2 : 1;
      var Zb;
      const fb = `${Kb}:t${Yb}`,
        [Wb] = (0, eb.useState)((() => function(bb, wb) {
          const [Mb] = bb.cosmeticPacks;
          let eb = null;
          if ((0, bw.e)(bb) ? eb = "rank" : void 0 === Mb && bb.premiumCurrency > 0 && (eb = "gems"), void 0 === Mb) return {
            cosmetics: wb,
            badge: eb
          };
          const Hb = (0, ww.e)(Mb),
            pb = void 0 === Hb ? void 0 : Mw.d[Hb];
          if (void 0 !== pb) return {
            cosmetics: pb.cosmetics,
            badge: eb
          };
          const Vb = {
              ...wb
            },
            gb = new Set;
          for (const lb of (0, ew.h)(Mb)) {
            const [bb, wb] = lb.split("|");
            gb.has(bb) || (gb.add(bb), Vb[bb] = wb)
          }
          return {
            cosmetics: Vb,
            badge: eb
          }
        }(mb.items, {
          ...Hb.getPlayerCosmetics()
        }))),
        [Jb, vb] = (0, eb.useState)("arrive"),
        [qb, ab] = (0, eb.useState)(0),
        [ib, ub] = (0, eb.useState)(!1),
        [db, Pb] = (0, eb.useState)(!1),
        [nb, yb] = (0, eb.useState)(!1),
        ob = (0, eb.useRef)(null),
        Tb = (0, eb.useRef)(null),
        pw = {
          box: (0, eb.useRef)(null),
          body: (0, eb.useRef)(null),
          lid: (0, eb.useRef)(null),
          seam: (0, eb.useRef)(null),
          character: (0, eb.useRef)(null),
          ring: (0, eb.useRef)(null),
          beam: (0, eb.useRef)(null),
          flash: (0, eb.useRef)(null),
          shake: (0, eb.useRef)(null),
          canvas: (0, eb.useRef)(null)
        };
      (0, Bb.g)("paused"), (0, eb.useEffect)((() => {
        const bb = setTimeout((() => {
          yb(!0)
        }), Hw);
        return () => {
          clearTimeout(bb)
        }
      }), []), (0, eb.useEffect)((() => {
        const bb = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          Mb = pw.canvas.current,
          eb = Mb && !bb ? new kb(Mb, {
            wrap: Kb,
            tier: Yb,
            phone: jb
          }) : null,
          Hb = () => {
            null === eb || void 0 === eb || eb.resize()
          };
        window.addEventListener("resize", Hb),
          function(bb) {
            for (const wb of ["wobble", "pop", "sparkle", "sting"]) cb.c.preload(Ab(wb, bb))
          }(Yb), vb("arrive");
        const pb = new Sb({
          box: pw.box.current,
          body: pw.body.current,
          lid: pw.lid.current,
          seam: pw.seam.current,
          character: pw.character.current,
          ring: pw.ring.current,
          beam: pw.beam.current,
          flash: pw.flash.current,
          shake: pw.shake.current
        }, {
          tier: Yb,
          timeline: Qb(Yb),
          reducedMotion: bb,
          fx: eb,
          onPhase: vb,
          onOpened: () => {
            var bb;
            xb || ((0, lb.reportAnalyticsClick)({
              id: "gift.open_anim",
              value: fb
            }), null === (bb = wb.onOpened) || void 0 === bb || bb.call(wb))
          }
        });
        return Tb.current = pb, pb.arrive(), () => {
          window.removeEventListener("resize", Hb), pb.dispose(), eb && (! function(bb) {
            if (bb.frameMs.length < 10) return;
            const wb = [...bb.frameMs].sort(((bb, wb) => bb - wb)),
              Mb = {
                frames: wb.length,
                medianFps: Math.round(1e3 / Math.max(wb[Math.floor(wb.length / 2)], 1)),
                p95FrameMs: Math.round(wb[Math.floor(.95 * wb.length)])
              };
            window.giftOpeningFrames = Mb, console.info("[gift-opening] frames", Mb)
          }(eb), eb.stop())
        }
      }), [qb]);
      const Vw = () => {
          (0, zb.e)(wb)
        },
        gw = () => {
          var bb;
          xb || (0, lb.reportAnalyticsClick)({
            id: "gift.open_skip",
            value: `${fb}:${Jb}`
          }), null === (bb = Tb.current) || void 0 === bb || bb.skip()
        },
        lw = ib || db || nb,
        Lw = "arrive" === Jb || "wait" === Jb || "charge" === Jb,
        Iw = "charge" === Jb || "reveal" === Jb || "card" === Jb || "wait" === Jb && lw,
        Ow = {
          "--gift-tier": Gb[Yb]
        };
      return (0, sb.jsx)(Ib.e, {
        className: "GiftOpeningScreen",
        close: "done" === Jb ? Vw : Iw ? gw : () => {},
        togglePointerLock: !0,
        forcePointerUnlock: !0,
        globallyUniqueKey: "giftOpening",
        closeOnPressBackground: !1,
        children: (0, sb.jsxs)("div", {
          className: pb()("GiftOpening", `GiftOpeningTier${Yb}`, `GiftOpeningPhase_${Jb}`, {
            GiftOpeningDrawn: ib
          }),
          style: Ow,
          ref: pw.shake,
          children: [(0, sb.jsx)("div", {
            className: "GiftOpeningBackdrop"
          }), (0, sb.jsx)("div", {
            className: "GiftOpeningRays"
          }), (0, sb.jsxs)("div", {
            className: "GiftOpeningStage",
            children: [(0, sb.jsx)("div", {
              className: "GiftOpeningBeam",
              ref: pw.beam
            }), (0, sb.jsxs)("div", {
              className: "GiftOpeningCharacter",
              ref: pw.character,
              children: [(0, sb.jsx)(eb.Suspense, {
                fallback: null,
                children: (0, sb.jsx)(Cb.e, {
                  ref: ob,
                  framing: "store",
                  owner: "other",
                  turntableFromYaw: Lw ? null : Lb.e.store.yaw,
                  onNoWebGl: () => {
                    Pb(!0)
                  },
                  onReady: () => {
                    var bb, wb;
                    null === (bb = ob.current) || void 0 === bb || bb.resetCamera(), null === (wb = ob.current) || void 0 === wb || wb.setAllCosmetics(Wb.cosmetics)
                  },
                  onDrawn: () => {
                    ub(!0)
                  }
                })
              }), (db || !Lw && !ib) && (0, sb.jsx)("div", {
                className: "GiftOpeningHead",
                children: (0, sb.jsx)(Eb.e, {
                  cosmetics: Wb.cosmetics
                })
              }), Wb.badge && (0, sb.jsx)("div", {
                className: "GiftOpeningBadge",
                children: "gems" === Wb.badge ? (0, sb.jsx)(tb.f, {}) : (0, sb.jsx)(Ub.b, {
                  name: "bolt"
                })
              })]
            }), (0, sb.jsx)(hb, {
              wrap: Kb,
              className: pb()("GiftOpeningBox", {
                GiftOpeningBoxIdle: "wait" === Jb
              }),
              rootRef: pw.box,
              bodyRef: pw.body,
              lidRef: pw.lid,
              seamRef: pw.seam
            }), (0, sb.jsx)("div", {
              className: "GiftOpeningRing",
              ref: pw.ring
            })]
          }), (0, sb.jsx)("canvas", {
            className: "GiftOpeningFx",
            ref: pw.canvas
          }), (0, sb.jsx)("div", {
            className: "GiftOpeningFlash",
            ref: pw.flash
          }), Lw && (0, sb.jsxs)("div", {
            className: "GiftOpeningTitle",
            children: [(0, sb.jsx)("div", {
              className: "SmallTextBold",
              children: Mb("giftOpening:sentYou", {
                name: mb.senderName
              })
            }), (0, sb.jsx)(Rb, {
              gift: mb
            })]
          }), "wait" === Jb && lw && (0, sb.jsx)("div", {
            className: "GiftOpeningHint SmallTextBold",
            children: Mb("giftOpening:tapToOpen")
          }), (0, sb.jsx)(rb, {
            gift: mb,
            shown: "card" === Jb || "done" === Jb
          }), "done" !== Jb && (0, sb.jsx)("button", {
            type: "button",
            className: "GiftOpeningTap",
            "data-pad-default-focus": !0,
            "aria-label": Mb("giftOpening:tapToOpen"),
            onClick: () => {
              var bb;
              ("wait" !== Jb || lw) && (null === (bb = Tb.current) || void 0 === bb || bb.tap())
            }
          }), Iw && (0, sb.jsxs)(Ob.j, {
            className: "GiftOpeningSkip",
            onClick: gw,
            children: [Mb("giftOpening:skip"), " ", (0, sb.jsx)(Ub.b, {
              name: "arrow-right"
            })]
          }), "done" === Jb && (0, sb.jsx)(Db, {
            gift: mb,
            preview: xb,
            analyticsValue: fb,
            onReplay: () => {
              ab(qb + 1)
            },
            onClose: Vw
          })]
        })
      })
    }
  },
  35370: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      c: () => Hb,
      f: () => Ob
    });
    var eb = Mb(1735);

    function Hb(bb) {
      var wb;
      return {
        ...gb.store,
        yaw: gb.store.yaw + (null !== (wb = eb.d[bb].previewYaw) && void 0 !== wb ? wb : 0)
      }
    }
    const pb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Vb = {
        ...pb,
        radius: 33,
        target: [0, 3.9, 0]
      },
      gb = {
        player: pb,
        store: Vb,
        showcase: {
          ...Vb,
          target: [0, 1.9, 0]
        }
      };

    function lb(bb, wb) {
      bb instanceof Promise ? bb.then(wb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : wb(bb)
    }
    class Lb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var wb;
        this.view = bb, null === (wb = this.opened) || void 0 === wb || wb.show(bb)
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Ib {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, wb;
        return null !== (bb = null === (wb = this.opened) || void 0 === wb ? void 0 : wb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, wb) {
        var Mb;
        null === (Mb = this.opened) || void 0 === Mb || Mb.setCosmetic(bb, wb)
      }
      setNametag(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setNametag(bb)
      }
      playEmote(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.playEmote(bb)
      }
      setOrbit(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var wb;
        await this.ready, await (null === (wb = this.opened) || void 0 === wb ? void 0 : wb.untilDrawn(bb))
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const Ob = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Lb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Lb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Lb(this.current().openMobLineup(bb))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(bb, wb) {
        return new Ib(this.current().openCharacter(bb, wb))
      }
    }
  },
  35366: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb.b,
      f: () => eb.c,
      i: () => eb.f
    });
    var eb = Mb(35370);
    class Hb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class pb {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Hb((() => Promise.all([Mb.e(85), Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(113), Mb.e(291), Mb.e(89), Mb.e(86), Mb.e(288), Mb.e(87), Mb.e(88), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(312), Mb.e(261), Mb.e(279), Mb.e(293), Mb.e(296), Mb.e(91), Mb.e(253), Mb.e(267), Mb.e(112), Mb.e(124), Mb.e(258), Mb.e(142), Mb.e(90), Mb.e(122), Mb.e(311)]).then((() => Mb(42755))))), this.characterScene = new Hb((() => Promise.all([Mb.e(85), Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(113), Mb.e(291), Mb.e(89), Mb.e(86), Mb.e(288), Mb.e(87), Mb.e(88), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(312), Mb.e(177), Mb.e(261), Mb.e(279), Mb.e(293), Mb.e(296), Mb.e(91), Mb.e(225), Mb.e(253), Mb.e(267), Mb.e(112), Mb.e(124), Mb.e(258), Mb.e(142), Mb.e(90), Mb.e(122), Mb.e(280), Mb.e(184)]).then((() => Mb(42854)))))
      }
      openMob(bb) {
        return this.mobScene.run((wb => wb.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((wb => wb.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((wb => wb.openMobLineupPreview(bb)))
      }
      openCharacter(bb, wb) {
        return this.characterScene.run((Mb => Mb.openCharacterPreview(bb, wb)))
      }
    }
    eb.f.setDefaultHost((() => new pb))
  },
  37646: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      g: () => lb,
      i: () => Vb
    });
    var eb = Mb(661),
      Hb = Mb(2451);

    function pb(bb) {
      return bb === (0, Hb.h)().HJ ? (0, Hb.h)().VJ : bb
    }

    function Vb(bb) {
      return !(0, eb.K)(bb) && pb(bb) === (0, Hb.h)().VJ
    }
    const gb = "gravity";

    function lb() {
      return (0, Hb.h)().physics[gb][1]
    }
  },
  37627: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => jb
    });
    var eb = Mb(37630),
      Hb = Mb(225),
      pb = Mb(5766),
      Vb = Mb(37634),
      gb = Mb(37641),
      lb = Mb(37695),
      Lb = Mb(37646),
      Ib = Mb(398),
      Ob = Mb.n(Ib),
      Ub = Mb(2451),
      tb = Mb(37691),
      Cb = Mb(29),
      Eb = Mb(26),
      Fb = Mb(37653),
      Bb = Mb(37659),
      sb = Mb(37668),
      mb = Mb(37677),
      hb = Mb(37687);
    const zb = new Set(["note"]);
    const Xb = {
      stop: () => Xb,
      fade: () => Xb,
      rate: () => Xb,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Xb,
      setPannerAttr: () => Xb,
      setPosition: () => Xb
    };
    class xb {
      constructor(bb) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new lb.f, this._howl = (0, gb.countDecodesAs)(new pb.Howl({
          src: [...(0, eb.v)(bb).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = this._howl.play(Vb.b);
        bb && this._howl.loop(!0, wb);
        let Mb = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), wb);
        const eb = {
          stop: () => {
            var bb;
            return null === (bb = this.liveHowl()) || void 0 === bb || bb.stop(wb), eb
          },
          fade: (bb, Mb, Hb) => {
            var pb;
            return null === (pb = this.liveHowl()) || void 0 === pb || pb.fade(bb, Mb, Hb, wb), eb
          },
          rate: bb => {
            var Mb;
            return null === (Mb = this.liveHowl()) || void 0 === Mb || Mb.rate(bb, wb), eb
          },
          stopsAtOnce: () => this._howl.playing(wb) && !this._howl._playLock,
          isAlive: () => {
            const bb = this._howl._soundById(wb);
            return !this._loadFailed && !!bb && !bb._ended
          },
          getDurationMs: () => this._howl._soundById(wb) ? 1e3 * this._howl.duration(wb) / this._howl.rate(wb) : 0,
          getVolume: () => Mb * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Mb,
          setRelativeVolume: bb => {
            var Hb;
            if (bb > 1) throw new Error("Volume should be <= 1");
            return Mb = Eb.c.get("soundOnFromAd") ? bb : 0, null === (Hb = this.liveHowl()) || void 0 === Hb || Hb.volume(Math.min(1, Mb * this._volumeMultiplier.getTotalMultipliedVal()), wb), eb
          },
          setPannerAttr: bb => {
            let {
              coneInnerAngle: Mb,
              coneOuterAngle: Hb = 360,
              coneOuterGain: pb,
              distanceModel: Vb,
              maxDistance: gb,
              panningModel: lb,
              refDistance: Lb,
              rolloffFactor: Ib
            } = bb;
            return this._setPannerAttr({
              id: wb,
              coneInnerAngle: Mb,
              coneOuterAngle: Hb,
              coneOuterGain: pb,
              distanceModel: Vb,
              maxDistance: gb,
              panningModel: lb,
              refDistance: Lb,
              rolloffFactor: Ib
            }), eb
          },
          setPosition: bb => {
            var Mb;
            return null === (Mb = this.liveHowl()) || void 0 === Mb || Mb.pos(bb[2], bb[1], bb[0], wb), eb
          }
        };
        return eb
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, Vb.d)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(bb) {
        this._volumeMultiplier.setMultiplierType("globalVolume", bb), this._howl.volume(bb)
      }
      _setPannerAttr(bb) {
        let {
          id: wb,
          coneInnerAngle: Mb = 360,
          coneOuterAngle: eb = 360,
          coneOuterGain: Hb = 0,
          distanceModel: pb = "inverse",
          maxDistance: Vb = 1e3,
          panningModel: gb = "HRTF",
          refDistance: lb = tb.j,
          rolloffFactor: Lb = 1
        } = bb;
        const Ib = this.liveHowl();
        if (null === Ib) return;
        Ib.pannerAttr({
          coneOuterAngle: eb
        }, wb);
        const Ob = {
          coneInnerAngle: Mb,
          coneOuterAngle: eb,
          coneOuterGain: Hb,
          distanceModel: pb,
          maxDistance: Vb,
          panningModel: gb,
          refDistance: lb,
          rolloffFactor: Lb
        };
        Ib.pannerAttr(Ob, wb)
      }
    }
    const jb = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new Fb.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, Cb.k.subscribe("appManagerUpdated|soundVolume", (bb => {
          const wb = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const Mb of wb) Mb.setGlobalVolume(bb)
        }))
      }
      play(bb, wb) {
        var Mb;
        let pb, Vb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Mb = (0, Ub.h)()) || void 0 === Mb ? void 0 : Mb.VJ,
          gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tb.f,
          lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tb.j,
          Ib = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Cb;
        (0, Ub.h)() ? pb = !!Array.isArray(Vb) || (0, Lb.e)(Vb) !== (null === (Cb = (0, Ub.h)()) || void 0 === Cb ? void 0 : Cb.VJ): pb = !1;
        const Eb = (0, eb.k)(bb),
          Bb = this.loadSound(pb ? this.spatialSounds : this.stereoSounds, bb);
        if (!pb) {
          const bb = Bb.play(Ib);
          return bb.setRelativeVolume(wb), bb
        }
        const sb = (0, Ub.h)(),
          mb = Array.isArray(Vb) ? Vb : sb.pR.Qm(Vb),
          xb = sb.pR.Qm(sb.VJ);
        if (!mb || Ob().sqrDist(mb, xb) > gb * gb) return Xb;
        let jb;
        if (!Ib) {
          if (!this.spatialVoices.admit({
              group: zb.has(Eb) ? null : (0, Fb.i)(bb),
              loudness: (0, Fb.f)(wb, Ob().DV(mb, xb), lb),
              startMs: performance.now(),
              getDurationMs: () => {
                var bb, wb;
                return null !== (bb = null === (wb = jb) || void 0 === wb ? void 0 : wb.getDurationMs()) && void 0 !== bb ? bb : 0
              },
              isAlive: () => {
                var bb, wb;
                return null !== (bb = null === (wb = jb) || void 0 === wb ? void 0 : wb.isAlive()) && void 0 !== bb && bb
              },
              canStop: () => {
                var bb, wb;
                return null !== (bb = null === (wb = jb) || void 0 === wb ? void 0 : wb.stopsAtOnce()) && void 0 !== bb && bb
              },
              stop: () => {
                var bb;
                null === (bb = jb) || void 0 === bb || bb.stop()
              }
            })) return Xb
        }
        return jb = Bb.play(Ib), jb.setRelativeVolume(wb), jb.setPannerAttr({
          refDistance: lb
        }), jb.setPosition([mb[0], mb[1] + Hb.e.oF * Hb.e.playerEyeToHeightRatio, mb[2]]), !Ib && (0, hb.e)() && (0, hb.d)(Eb, bb, mb[0] - xb[0], mb[2] - xb[2]), jb
      }
      preload(bb) {
        const wb = (0, eb.r)(bb) ? [bb] : (0, eb.w)(bb);
        if (0 === wb.length) throw new Error(`Invalid sound name ${bb} (no sound has it or starts with it)`);
        for (const Mb of wb) this.loadSound(this.stereoSounds, Mb)
      }
      preloadAtIdle(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mb.b;
        const Mb = bb.filter((bb => !this.idlePreloads.has(bb)));
        for (const Hb of Mb) this.idlePreloads.add(Hb);
        const eb = this.idlePreloadGeneration;
        (0, sb.d)(Mb, {
          ...wb,
          Yb: () => eb !== this.idlePreloadGeneration,
          fetchFile: bb => {
            this.idlePreloads.delete(bb);
            try {
              return this.preload(bb), Promise.resolve()
            } catch (wb) {
              return Promise.reject(wb)
            }
          }
        })
      }
      loadSound(bb, wb) {
        const Mb = bb[wb];
        if (Mb) return Mb;
        const Hb = this.makeSound(bb, wb);
        for (const Vb of null !== (pb = (0, eb.t)(wb)) && void 0 !== pb ? pb : []) {
          var pb;
          bb[Vb] || this.makeSound(bb, Vb)
        }
        return Hb
      }
      makeSound(bb, wb) {
        (0, mb.f)(wb);
        const Mb = new xb(wb);
        return Mb.setGlobalVolume(Eb.c.get("soundVolume")), bb[wb] = Mb, Mb
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const bb of [this.stereoSounds, this.spatialSounds])
          for (const [wb, Mb] of Object.entries(bb)) !Bb.d.has((0, eb.k)(wb)) && Mb.loaded() && (Mb.unloadOnceIdle(), delete bb[wb])
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);