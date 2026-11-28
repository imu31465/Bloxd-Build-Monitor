export const id = 228;
export const ids = [228];
export const modules = {
  37935: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      GiftOpening: () => KO
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1238),
      Kd = md(29),
      hd = md(1605),
      vd = md(35582),
      Qd = md(5194),
      td = md(1572),
      od = md(1443),
      Nd = md(3353),
      qd = md(3684),
      Hd = md(3307),
      yd = md(1186),
      bd = md(4339),
      Td = md(1341);
    const pd = {
      festive: "\ud83c\udf84 \u26c4 \ud83c\udf81",
      sweater: "\u2744"
    };

    function Yd(dd) {
      let {
        wrap: Od,
        className: md,
        rootRef: Wd,
        bodyRef: Fd,
        lidRef: Xd,
        seamRef: Kd
      } = dd;
      const hd = pd[Od];
      return (0, Td.jsxs)("div", {
        className: Rd()("GiftBox", `GiftBoxWrap_${Od}`, md),
        ref: Wd,
        children: [(0, Td.jsx)("div", {
          className: "GiftBoxPlinth"
        }), (0, Td.jsxs)("div", {
          className: "GiftBoxBody",
          ref: Fd,
          children: [(0, Td.jsxs)("div", {
            className: "GiftBoxCube",
            children: [(0, Td.jsxs)("div", {
              className: "GiftBoxFace GiftBoxFront",
              children: [hd && (0, Td.jsx)("span", {
                className: "GiftBoxPrint",
                children: hd
              }), "blocks" === Od && (0, Td.jsxs)("svg", {
                className: "GiftBoxCracks",
                viewBox: "0 0 100 80",
                "aria-hidden": !0,
                children: [(0, Td.jsx)("polyline", {
                  points: "50,0 44,18 56,30 47,48 58,62 52,80"
                }), (0, Td.jsx)("polyline", {
                  points: "44,18 24,26 14,44"
                }), (0, Td.jsx)("polyline", {
                  points: "56,30 78,36 90,58"
                })]
              })]
            }), (0, Td.jsx)("div", {
              className: "GiftBoxFace GiftBoxSide"
            }), (0, Td.jsxs)("div", {
              className: "GiftBoxLid",
              ref: Xd,
              children: [(0, Td.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidFront"
              }), (0, Td.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidSide"
              }), (0, Td.jsx)("div", {
                className: "GiftBoxFace GiftBoxLidTop"
              }), (0, Td.jsxs)("div", {
                className: "GiftBoxBow",
                children: [(0, Td.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowLeft"
                }), (0, Td.jsx)("div", {
                  className: "GiftBoxBowLoop GiftBoxBowRight"
                }), (0, Td.jsx)("div", {
                  className: "GiftBoxBowKnot"
                })]
              })]
            })]
          }), (0, Td.jsx)("div", {
            className: "GiftBoxSeam",
            ref: Kd
          })]
        })]
      })
    }
    var gd = md(4977),
      wd = md(4223),
      Ed = md(3042);

    function Jd(dd, Od) {
      const [md] = Od.cosmeticPacks;
      return void 0 !== md ? (0, Ed.i)(md) : Od.superDays > 0 ? dd("paymentHistory:superRankDays", {
        count: Od.superDays
      }) : Od.hyperDays > 0 ? dd("paymentHistory:hyperRankDays", {
        count: Od.hyperDays
      }) : dd("paymentHistory:premiumCurrency", {
        count: Od.premiumCurrency
      })
    }

    function Ud(dd) {
      var Od, md;
      const {
        t: Wd
      } = (0, Xd.G)(), Fd = wd.j.find((Od => Od.id === dd.message));
      return {
        message: void 0 === Fd ? null : Wd(Fd.key, {
          name: dd.recipientName,
          level: null !== (Od = dd.senderLevel) && void 0 !== Od ? Od : 1,
          tier: null !== (md = dd.tierLabel) && void 0 !== md ? md : ""
        }),
        level: null === dd.senderLevel || "levelFlex" === (null === Fd || void 0 === Fd ? void 0 : Fd.kind) ? null : Wd("giftOpening:gifterLevel", {
          level: dd.senderLevel
        })
      }
    }

    function xd(dd) {
      let {
        gift: Od,
        shown: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)(), {
        message: Fd,
        level: Kd
      } = Ud(Od);
      return (0, Td.jsxs)("div", {
        className: Rd()("GiftOpeningCard", {
          GiftOpeningCardShown: md
        }),
        children: [(0, Td.jsx)("div", {
          className: "GiftOpeningItem SmallTextBold",
          children: Jd(Wd, Od.items)
        }), null !== Fd && (0, Td.jsx)("div", {
          className: "GiftOpeningCardMessage SmallTextLight",
          children: Fd
        }), (0, Td.jsxs)("div", {
          className: "GiftOpeningFrom SmallTextLight",
          children: [Od.senderName, null !== Kd && ` \xb7 ${Kd}`]
        })]
      })
    }

    function Bd(dd) {
      let {
        gift: Od
      } = dd;
      const {
        message: md,
        level: Wd
      } = Ud(Od);
      return (0, Td.jsxs)(Td.Fragment, {
        children: [null !== md && (0, Td.jsx)("div", {
          className: "GiftOpeningIntroMessage SmallTextLight",
          children: `"${md}"`
        }), null !== Wd && (0, Td.jsx)("div", {
          className: "GiftOpeningIntroLevel SmallTextBold",
          children: Wd
        })]
      })
    }

    function Sd(dd) {
      let {
        gift: Od,
        preview: md,
        analyticsValue: Wd,
        onReplay: Fd,
        onClose: Rd
      } = dd;
      const {
        t: vd
      } = (0, Xd.G)(), {
        gameState: Qd
      } = (0, Kd.p)(["gameState"]), Nd = !md && Od.items.cosmeticPacks.length > 0 && !(0, Kd.f)(Qd);
      return (0, Td.jsxs)("div", {
        className: "GiftOpeningButtons",
        children: [md && (0, Td.jsxs)(td.g, {
          className: "GiftOpeningButton",
          touchPressOn: "pointerup",
          onClick: Fd,
          children: [(0, Td.jsx)(od.c, {
            name: "rotate-right"
          }), " ", vd("giftOpening:replay")]
        }), Nd && (0, Td.jsx)(td.g, {
          className: "GiftOpeningButton",
          padDefaultFocus: !0,
          touchPressOn: "pointerup",
          onClick: () => {
            (0, hd.reportAnalyticsClick)({
              id: "gift.open_customise",
              value: Wd
            }), (0, Ed.q)(), Rd()
          },
          children: vd("general:customize")
        }), (0, Td.jsx)(td.g, {
          className: "GiftOpeningButton",
          padDefaultFocus: !Nd,
          touchPressOn: "pointerup",
          onClick: Rd,
          children: vd(md ? "giftOpening:back" : "giftOpening:done")
        })]
      })
    }
    var sd = md(37939);
    const ud = {
        1: "harp_pling",
        2: "exp_levelup",
        3: "trumpetFlare"
      },
      Vd = {
        wobble: "chestClose",
        pop: "chestOpen",
        sparkle: "exp_collect"
      },
      Ad = {
        wobble: .55,
        pop: .8,
        sparkle: .4,
        sting: .7
      };

    function rd(dd, Od) {
      return "sting" === dd ? ud[Od] : Vd[dd]
    }

    function Gd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      try {
        sd.d.play(rd(dd, Od), Ad[dd]).rate(Math.pow(2, 2 * md / 12))
      } catch (Wd) {
        console.warn("[gift-opening] a sound failed to play", Wd)
      }
    }
    const nd = "cubic-bezier(0.22, 1, 0.36, 1)";
    class Ld {
      constructor(dd, Od) {
        this.parts = dd, this.options = Od, this.phase = "arrive", this.timers = [], this.animations = [], this.opened = !1, this.popped = !1
      }
      setPhase(dd) {
        this.phase = dd, this.options.onPhase(dd)
      }
      at(dd, Od) {
        this.timers.push(setTimeout(Od, dd))
      }
      animate(dd, Od, md) {
        this.animations.push(dd.animate(Od, {
          fill: "forwards",
          ...md
        }))
      }
      markOpened() {
        this.opened || (this.opened = !0, this.options.onOpened())
      }
      arrive() {
        const {
          timeline: dd,
          reducedMotion: Od
        } = this.options, md = Od ? [{
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
        this.animate(this.parts.body, md, {
          duration: Od ? 200 : dd.arriveMs,
          fill: "none"
        }), this.at(Od ? 200 : dd.arriveMs, (() => {
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
        }), Gd("sting", this.options.tier), this.at(300, (() => {
          this.setPhase("done")
        }))
      }
      charge() {
        const {
          timeline: dd,
          tier: Od,
          fx: md
        } = this.options;
        this.setPhase("charge");
        const Wd = dd.wobbles,
          Fd = dd.burstAt,
          Rd = (dd.chargeMs - 80) / Wd.length,
          Xd = [{
            transform: "none",
            offset: 0
          }, {
            transform: "scale(1.06, 0.92)",
            offset: 80 / Fd
          }];
        Wd.forEach(((dd, md) => {
          const Wd = 80 + md * Rd;
          Xd.push({
            transform: `rotate(${dd}deg) translateX(${.3*dd}px)`,
            offset: (Wd + .3 * Rd) / Fd
          }), Xd.push({
            transform: `rotate(${-dd}deg) translateX(${.3*-dd}px)`,
            offset: (Wd + .75 * Rd) / Fd
          }), this.at(Wd, (() => {
            Gd("wobble", Od, md)
          }))
        })), Xd.push({
          transform: "rotate(0deg)",
          offset: dd.chargeMs / Fd
        }), Xd.push({
          transform: "scale(1.12, 0.84)",
          offset: (dd.chargeMs + 40) / Fd
        }), Xd.push({
          transform: "scale(1.12, 0.84)",
          offset: 1
        }), this.animate(this.parts.body, Xd, {
          duration: Fd
        });
        const Kd = [{
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.6)"
        }];
        Wd.forEach(((dd, Od) => {
          const md = (Od + 1) / (Wd.length + .5);
          Kd.push({
            opacity: md,
            transform: `translate(-50%, -50%) scale(${.7+.5*md})`,
            offset: (80 + (Od + 1) * Rd) / Fd
          })
        })), Kd.push({
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1.3)"
        }), this.animate(this.parts.seam, Kd, {
          duration: Fd,
          easing: "linear"
        });
        const hd = this.parts.box.querySelector(".GiftBoxCracks");
        hd && this.animate(hd, [{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: Fd,
          easing: "steps(3, end)"
        });
        const {
          x: vd,
          y: Qd
        } = this.boxCentre();
        null === md || void 0 === md || md.charge(vd, Qd, dd.chargeMs), this.at(Fd, (() => {
          this.burst(Fd)
        }))
      }
      boxCentre() {
        const dd = this.parts.box.getBoundingClientRect();
        return {
          x: dd.left + dd.width / 2,
          y: dd.top + .45 * dd.height,
          floorY: dd.bottom
        }
      }
      burst(dd) {
        const {
          timeline: Od,
          tier: md,
          fx: Wd
        } = this.options;
        if (this.popped) return;
        this.popped = !0, this.markOpened();
        const Fd = Od => Math.max(0, Od - dd),
          Rd = {
            duration: 620,
            easing: nd
          };
        this.animate(this.parts.lid, [{
          transform: "translateY(-0.36em)"
        }, {
          transform: "translate(0.35em, -2.2em) rotateZ(26deg) rotateX(24deg)",
          offset: .55
        }, {
          transform: "translate(0.6em, -3.2em) rotateZ(40deg) rotateX(40deg)"
        }], Rd);
        for (const vd of this.parts.lid.querySelectorAll(":scope > *")) this.animate(vd, [{
          opacity: 1
        }, {
          opacity: 1,
          offset: .55
        }, {
          opacity: 0
        }], Rd);
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
            easing: nd
          }), Od.flashAlpha > 0 && this.animate(this.parts.flash, [{
            opacity: 0
          }, {
            opacity: Od.flashAlpha,
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
            easing: nd
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
            easing: nd
          }), Od.kickPx > 0) {
          const dd = Od.kickPx;
          this.animate(this.parts.shake, [{
            transform: "none"
          }, {
            transform: `translate(${dd}px, ${-dd}px)`
          }, {
            transform: `translate(${.7*-dd}px, ${.5*dd}px)`
          }, {
            transform: `translate(${.4*dd}px, ${.3*dd}px)`
          }, {
            transform: "none"
          }], {
            duration: 300,
            easing: "linear",
            fill: "none"
          })
        }
        Gd("pop", md), Gd("sparkle", md, 2);
        const {
          x: Xd,
          y: Kd,
          floorY: hd
        } = this.boxCentre();
        null === Wd || void 0 === Wd || Wd.burst(Xd, Kd, Od.burstParticles, hd), this.at(Fd(Od.revealAt), (() => {
          this.reveal()
        })), this.at(Fd(Od.cardAt), (() => {
          this.setPhase("card")
        })), this.at(Fd(Od.buttonsAt), (() => {
          this.setPhase("done")
        }))
      }
      reveal() {
        const {
          timeline: dd,
          tier: Od,
          fx: md
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
          easing: nd
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
        }), Gd("sting", Od), null === md || void 0 === md || md.linger(this.boxCentre().x, dd.buttonsAt - dd.revealAt + 1500, dd.rain)
      }
      skip() {
        var dd;
        (this.clearTimers(), this.cancelAnimations(), this.popped) || (null === (dd = this.options.fx) || void 0 === dd || dd.clear());
        this.markOpened(), this.parts.body.style.opacity = "0", this.parts.character.style.opacity = "1", this.parts.character.style.transform = "none", this.setPhase("done")
      }
      cancelAnimations() {
        for (const dd of this.animations) dd.cancel();
        this.animations = []
      }
      clearTimers() {
        for (const dd of this.timers) clearTimeout(dd);
        this.timers = []
      }
      dispose() {
        this.clearTimers(), this.cancelAnimations(), this.parts.body.style.removeProperty("opacity"), this.parts.character.style.removeProperty("opacity"), this.parts.character.style.removeProperty("transform")
      }
    }
    const Pd = {
      2: 500,
      3: 1200
    };
    const zd = {
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

    function cd(dd) {
      const Od = zd[dd];
      return {
        ...Od,
        burstAt: Od.chargeMs + Od.hitStopMs
      }
    }
    const jd = {
      1: "#5ab8ff",
      2: "#b673ff",
      3: "#ffc83d"
    };

    function Dd(dd, Od, md) {
      const Wd = document.createElement("canvas"),
        Fd = Math.ceil(dd * Od);
      Wd.width = Fd, Wd.height = Fd;
      const Rd = Wd.getContext("2d");
      return Rd && md(Rd, Fd), {
        image: Wd
      }
    }

    function ed(dd, Od) {
      return Dd(16, Od, ((Od, md) => {
        Od.fillStyle = dd, Od.fillRect(.3 * md, 0, .4 * md, md)
      }))
    }

    function Id(dd, Od, md) {
      return Dd(14, md, ((md, Wd) => {
        md.fillStyle = Od, md.fillRect(0, 0, Wd, Wd), md.fillStyle = dd, md.fillRect(0, 0, Wd, .35 * Wd)
      }))
    }

    function ld(dd, Od) {
      return Dd(18, Od, ((Od, md) => {
        Od.fillStyle = dd, Od.beginPath(), Od.moveTo(md / 2, 0), Od.lineTo(.85 * md, .55 * md), Od.lineTo(md / 2, md), Od.lineTo(.2 * md, .45 * md), Od.closePath(), Od.fill(), Od.fillStyle = "rgba(255,255,255,0.55)", Od.beginPath(), Od.moveTo(md / 2, 0), Od.lineTo(.6 * md, .5 * md), Od.lineTo(.2 * md, .45 * md), Od.closePath(), Od.fill()
      }))
    }

    function Cd(dd, Od) {
      return Dd(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, Od, ((Od, md) => {
        const Wd = md / 2;
        Od.fillStyle = dd, Od.beginPath();
        for (let dd = 0; dd < 10; dd++) {
          const md = dd % 2 === 0 ? Wd : .45 * Wd,
            Fd = -Math.PI / 2 + dd * Math.PI / 5;
          Od.lineTo(Wd + Math.cos(Fd) * md, Wd + Math.sin(Fd) * md)
        }
        Od.closePath(), Od.fill()
      }))
    }

    function Zd(dd, Od) {
      return Dd(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24, Od, ((Od, md) => {
        const Wd = Od.createRadialGradient(md / 2, md / 2, 0, md / 2, md / 2, md / 2);
        Wd.addColorStop(0, "rgba(255,255,255,1)"), Wd.addColorStop(.25, dd), Wd.addColorStop(1, "rgba(0,0,0,0)"), Od.fillStyle = Wd, Od.fillRect(0, 0, md, md)
      }))
    }
    const kd = {
      classic: dd => [ed("#e63946", dd), ed("#ffffff", dd), ed("#ffd166", dd), ed("#2a9d8f", dd), Cd("#ffd166", dd, 14)],
      blocks: dd => [Id("#6abe30", "#8a5a33", dd), Id("#8a5a33", "#6d4426", dd), Id("#9da3a6", "#7b8083", dd), Id("#7ff3f0", "#3fb7c0", dd)],
      gems: dd => [ld("#b673ff", dd), ld("#ff7ad9", dd), ld("#6fe0ff", dd), ld("#ffffff", dd)],
      stars: dd => [Cd("#fff6b0", dd), Cd("#ffffff", dd, 14), Cd("#9fd0ff", dd, 12), Zd("#9fd0ff", dd, 16)],
      legend: dd => [ed("#ffc83d", dd), ed("#ff5d8f", dd), ed("#5ab8ff", dd), ed("#7cf29a", dd), Cd("#ffc83d", dd), Cd("#fff4c2", dd, 14)],
      sweater: dd => [Zd("#ffffff", dd, 18), Zd("#dff3ff", dd, 12), Cd("#ffffff", dd, 12)],
      festive: dd => ["\ud83c\udf84", "\u26c4", "\ud83c\udf81", "\u2744\ufe0f", "\u2b50"].map((Od => function(dd, Od) {
        return Dd(26, Od, ((Od, md) => {
          Od.font = `${Math.round(.8*md)}px sans-serif`, Od.textAlign = "center", Od.textBaseline = "middle", Od.fillText(dd, md / 2, md / 2 + .05 * md)
        }))
      }(Od, dd)))
    };
    const fd = {
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

    function Md(dd) {
      let [Od, md] = dd;
      return Od + Math.random() * (md - Od)
    }

    function dO(dd) {
      return dd[Math.floor(Math.random() * dd.length)]
    }
    class OO {
      constructor(dd, Od) {
        var md, Wd, Fd;
        this.canvas = dd, this.options = Od, this.context = void 0, this.sprites = void 0, this.particles = [], this.scale = void 0, this.frame = 0, this.lastAt = 0, this.embersUntil = 0, this.embersX = 0, this.rainUntil = 0, this.spawnCarry = 0, this.stopped = !1, this.frameMs = [], this.Et = dd => {
          const Od = Math.min(dd - this.lastAt, 50);
          this.lastAt = dd, this.spawnLingering(Od), this.step(Od), this.draw();
          const md = dd < this.embersUntil || dd < this.rainUntil;
          this.frame = this.particles.length > 0 || md ? requestAnimationFrame(this.Et) : 0, 0 === this.frame && (this.canvas.style.visibility = "hidden")
        }, this.context = dd.getContext("2d"), this.scale = Math.min(window.devicePixelRatio || 1, Od.phone ? 1.5 : 2), this.sprites = (md = Od.wrap, Wd = jd[Od.tier], Fd = this.scale, {
          burst: kd[md](Fd),
          spark: Zd(Wd, Fd),
          rain: [Cd("#ffc83d", Fd, 16), ed("#ffc83d", Fd), ed("#fff1b8", Fd)]
        }), this.resize()
      }
      resize() {
        const {
          clientWidth: dd,
          clientHeight: Od
        } = this.canvas;
        this.canvas.width = Math.round(dd * this.scale), this.canvas.height = Math.round(Od * this.scale)
      }
      count(dd) {
        return Math.round(this.options.phone ? dd / 2 : dd)
      }
      add(dd) {
        this.particles.push({
          motion: "fall",
          jB: 0,
          vy: 0,
          gravity: 0,
          drag: 0,
          rotation: Math.random() * Math.PI * 2,
          spin: 0,
          flutterSpeed: 0,
          fromX: dd.x,
          fromY: dd.y,
          toX: dd.x,
          toY: dd.y,
          floorY: 1 / 0,
          additive: !1,
          ...dd,
          flutter: Math.random() * Math.PI * 2,
          ageMs: 0
        }), this.wake()
      }
      charge(dd, Od, md) {
        for (let Wd = 0; Wd < this.count(18 + 8 * this.options.tier); Wd++) {
          const Wd = Math.random() * Math.PI * 2,
            Fd = Md([120, 240]);
          this.add({
            sprite: this.sprites.spark,
            motion: "converge",
            x: dd,
            y: Od,
            fromX: dd + Math.cos(Wd) * Fd,
            fromY: Od + Math.sin(Wd) * Fd,
            size: Md([.5, 1]),
            lifeMs: md * Md([.55, 1]),
            additive: !0
          })
        }
      }
      burst(dd, Od, md, Wd) {
        const Fd = fd[this.options.wrap];
        for (let Rd = 0; Rd < this.count(md); Rd++) {
          const md = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.5,
            Rd = Md(Fd.speed);
          this.add({
            sprite: dO(this.sprites.burst),
            x: dd + 30 * (Math.random() - .5),
            y: Od,
            jB: Math.cos(md) * Rd,
            vy: Math.sin(md) * Rd,
            gravity: Fd.gravity,
            drag: Fd.drag,
            spin: 14 * (Math.random() - .5),
            flutterSpeed: Fd.flutter ? Md([8, 16]) : 0,
            size: Md([.7, 1.15]),
            lifeMs: Md(Fd.lifeMs),
            floorY: Fd.bounce ? Wd : 1 / 0
          })
        }
        for (let Rd = 0; Rd < this.count(16 + 8 * this.options.tier); Rd++) {
          const md = Math.random() * Math.PI * 2,
            Wd = Md([300, 900]);
          this.add({
            sprite: this.sprites.spark,
            x: dd,
            y: Od,
            jB: Math.cos(md) * Wd,
            vy: Math.sin(md) * Wd,
            gravity: 200,
            drag: .05,
            size: Md([.4, .9]),
            lifeMs: Md([350, 700]),
            additive: !0
          })
        }
      }
      linger(dd, Od, md) {
        const Wd = performance.now();
        this.embersX = dd, this.embersUntil = Wd + Od, this.rainUntil = md ? Wd + Math.min(Od, 1800) : 0, this.wake()
      }
      spawnLingering(dd) {
        const {
          clientWidth: Od,
          clientHeight: md
        } = this.canvas, Wd = performance.now(), Fd = (Wd < this.embersUntil ? this.count(14) : 0) + (Wd < this.rainUntil ? this.count(50) : 0);
        for (this.spawnCarry += Fd * dd / 1e3; this.spawnCarry >= 1;) this.spawnCarry--, Wd < this.rainUntil && Math.random() < .75 ? this.add({
          sprite: dO(this.sprites.rain),
          x: Math.random() * Od,
          y: -20,
          jB: 60 * (Math.random() - .5),
          vy: Md([160, 320]),
          gravity: 500,
          drag: .2,
          spin: 8 * (Math.random() - .5),
          flutterSpeed: Md([6, 12]),
          size: Md([.6, 1]),
          lifeMs: 2200
        }) : this.add({
          sprite: this.sprites.spark,
          motion: "float",
          x: this.embersX + (Math.random() - .5) * Math.min(Od, 420),
          y: md * Md([.55, .8]),
          jB: 20 * (Math.random() - .5),
          vy: -Md([30, 70]),
          drag: .6,
          size: Md([.3, .6]),
          lifeMs: Md([1200, 2e3]),
          additive: !0
        })
      }
      clear() {
        var dd;
        this.particles.length = 0, this.embersUntil = 0, this.rainUntil = 0, null === (dd = this.context) || void 0 === dd || dd.clearRect(0, 0, this.canvas.width, this.canvas.height)
      }
      stop() {
        this.stopped = !0, cancelAnimationFrame(this.frame), this.frame = 0, this.clear(), this.canvas.style.visibility = "hidden"
      }
      wake() {
        0 !== this.frame || this.stopped || (this.lastAt = performance.now(), this.frame = requestAnimationFrame(this.Et), this.canvas.style.visibility = "visible")
      }
      step(dd) {
        const Od = dd / 1e3;
        let md = 0;
        for (const Wd of this.particles)
          if (Wd.ageMs += dd, !(Wd.ageMs >= Wd.lifeMs)) {
            if ("converge" === Wd.motion) {
              const dd = Wd.ageMs / Wd.lifeMs,
                Od = dd * dd * dd;
              Wd.x = Wd.fromX + (Wd.toX - Wd.fromX) * Od, Wd.y = Wd.fromY + (Wd.toY - Wd.fromY) * Od
            } else {
              const dd = Math.pow(1 - Wd.drag, Od);
              Wd.jB *= dd, Wd.vy = Wd.vy * dd + Wd.gravity * Od, Wd.x += Wd.jB * Od, Wd.y += Wd.vy * Od, Wd.y > Wd.floorY && Wd.vy > 0 && (Wd.y = Wd.floorY, Wd.vy *= -.35, Wd.jB *= .6, Wd.floorY = 1 / 0)
            }
            Wd.rotation += Wd.spin * Od, Wd.flutter += Wd.flutterSpeed * Od, this.particles[md++] = Wd
          } this.particles.length = md
      }
      draw() {
        const dd = this.context;
        if (dd) {
          dd.setTransform(1, 0, 0, 1, 0, 0), dd.clearRect(0, 0, this.canvas.width, this.canvas.height);
          for (const Od of this.particles) {
            const md = Od.ageMs / Od.lifeMs,
              Wd = "converge" === Od.motion ? .35 + .65 * md : Math.min(1, 4 * (1 - md)),
              Fd = Od.size,
              Rd = Math.cos(Od.rotation) * Fd,
              Xd = Math.sin(Od.rotation) * Fd,
              Kd = 0 === Od.flutterSpeed ? 1 : Math.cos(Od.flutter);
            dd.globalAlpha = Wd, dd.globalCompositeOperation = Od.additive ? "lighter" : "source-over", dd.setTransform(Rd * Kd, Xd * Kd, -Xd, Rd, Od.x * this.scale, Od.y * this.scale);
            const {
              image: hd
            } = Od.sprite;
            dd.drawImage(hd, -hd.width / 2, -hd.height / 2)
          }
          dd.globalAlpha = 1, dd.globalCompositeOperation = "source-over"
        }
      }
    }
    var mO = md(3287),
      WO = md(1679),
      FO = md(1685),
      RO = md(3249);
    const XO = 5e3;

    function KO(dd) {
      let {
        request: Od
      } = dd;
      const {
        t: md
      } = (0, Xd.G)(), {
        userContext: Fd
      } = (0, yd.d)(), {
        gift: pd,
        preview: Ed
      } = Od, {
        isTouchScreen: Jd
      } = (0, Kd.p)(["isTouchScreen"]), Ud = function(dd) {
        var Od;
        const md = wd.n.find((Od => Od.id === dd));
        return null !== (Od = null === md || void 0 === md ? void 0 : md.id) && void 0 !== Od ? Od : "classic"
      }(pd.wrap), ud = (Vd = pd.gems) >= Pd[3] ? 3 : Vd >= Pd[2] ? 2 : 1;
      var Vd;
      const Ad = `${Ud}:t${ud}`,
        [Gd] = (0, Wd.useState)((() => function(dd, Od) {
          const [md] = dd.cosmeticPacks;
          let Wd = null;
          if ((0, mO.g)(dd) ? Wd = "rank" : void 0 === md && dd.premiumCurrency > 0 && (Wd = "gems"), void 0 === md) return {
            cosmetics: Od,
            badge: Wd
          };
          const Fd = (0, WO.d)(md),
            Rd = void 0 === Fd ? void 0 : FO.b[Fd];
          if (void 0 !== Rd) return {
            cosmetics: Rd.cosmetics,
            badge: Wd
          };
          const Xd = {
              ...Od
            },
            Kd = new Set;
          for (const hd of (0, RO.j)(md)) {
            const [dd, Od] = hd.split("|");
            Kd.has(dd) || (Kd.add(dd), Xd[dd] = Od)
          }
          return {
            cosmetics: Xd,
            badge: Wd
          }
        }(pd.items, {
          ...Fd.getPlayerCosmetics()
        }))),
        [nd, zd] = (0, Wd.useState)("arrive"),
        [Dd, ed] = (0, Wd.useState)(0),
        [Id, ld] = (0, Wd.useState)(!1),
        [Cd, Zd] = (0, Wd.useState)(!1),
        [kd, fd] = (0, Wd.useState)(!1),
        Md = (0, Wd.useRef)(null),
        dO = (0, Wd.useRef)(null),
        KO = {
          box: (0, Wd.useRef)(null),
          body: (0, Wd.useRef)(null),
          lid: (0, Wd.useRef)(null),
          seam: (0, Wd.useRef)(null),
          character: (0, Wd.useRef)(null),
          ring: (0, Wd.useRef)(null),
          beam: (0, Wd.useRef)(null),
          flash: (0, Wd.useRef)(null),
          shake: (0, Wd.useRef)(null),
          canvas: (0, Wd.useRef)(null)
        };
      (0, bd.c)("paused"), (0, Wd.useEffect)((() => {
        const dd = setTimeout((() => {
          fd(!0)
        }), XO);
        return () => {
          clearTimeout(dd)
        }
      }), []), (0, Wd.useEffect)((() => {
        const dd = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          md = KO.canvas.current,
          Wd = md && !dd ? new OO(md, {
            wrap: Ud,
            tier: ud,
            phone: Jd
          }) : null,
          Fd = () => {
            null === Wd || void 0 === Wd || Wd.resize()
          };
        window.addEventListener("resize", Fd),
          function(dd) {
            for (const Od of ["wobble", "pop", "sparkle", "sting"]) sd.d.preload(rd(Od, dd))
          }(ud), zd("arrive");
        const Rd = new Ld({
          box: KO.box.current,
          body: KO.body.current,
          lid: KO.lid.current,
          seam: KO.seam.current,
          character: KO.character.current,
          ring: KO.ring.current,
          beam: KO.beam.current,
          flash: KO.flash.current,
          shake: KO.shake.current
        }, {
          tier: ud,
          timeline: cd(ud),
          reducedMotion: dd,
          fx: Wd,
          onPhase: zd,
          onOpened: () => {
            var dd;
            Ed || ((0, hd.reportAnalyticsClick)({
              id: "gift.open_anim",
              value: Ad
            }), null === (dd = Od.onOpened) || void 0 === dd || dd.call(Od))
          }
        });
        return dO.current = Rd, Rd.arrive(), () => {
          window.removeEventListener("resize", Fd), Rd.dispose(), Wd && (! function(dd) {
            if (dd.frameMs.length < 10) return;
            const Od = [...dd.frameMs].sort(((dd, Od) => dd - Od)),
              md = {
                frames: Od.length,
                medianFps: Math.round(1e3 / Math.max(Od[Math.floor(Od.length / 2)], 1)),
                p95FrameMs: Math.round(Od[Math.floor(.95 * Od.length)])
              };
            window.giftOpeningFrames = md, console.info("[gift-opening] frames", md)
          }(Wd), Wd.stop())
        }
      }), [Dd]);
      const hO = () => {
          (0, gd.b)(Od)
        },
        vO = () => {
          var dd;
          Ed || (0, hd.reportAnalyticsClick)({
            id: "gift.open_skip",
            value: `${Ad}:${nd}`
          }), null === (dd = dO.current) || void 0 === dd || dd.skip()
        },
        QO = Id || Cd || kd,
        tO = "arrive" === nd || "wait" === nd || "charge" === nd,
        oO = "charge" === nd || "reveal" === nd || "card" === nd || "wait" === nd && QO,
        NO = {
          "--gift-tier": jd[ud]
        };
      return (0, Td.jsx)(Qd.c, {
        className: "GiftOpeningScreen",
        close: "done" === nd ? hO : oO ? vO : () => {},
        togglePointerLock: !0,
        forcePointerUnlock: !0,
        globallyUniqueKey: "giftOpening",
        closeOnPressBackground: !1,
        children: (0, Td.jsxs)("div", {
          className: Rd()("GiftOpening", `GiftOpeningTier${ud}`, `GiftOpeningPhase_${nd}`, {
            GiftOpeningDrawn: Id
          }),
          style: NO,
          ref: KO.shake,
          children: [(0, Td.jsx)("div", {
            className: "GiftOpeningBackdrop"
          }), (0, Td.jsx)("div", {
            className: "GiftOpeningRays"
          }), (0, Td.jsxs)("div", {
            className: "GiftOpeningStage",
            children: [(0, Td.jsx)("div", {
              className: "GiftOpeningBeam",
              ref: KO.beam
            }), (0, Td.jsxs)("div", {
              className: "GiftOpeningCharacter",
              ref: KO.character,
              children: [(0, Td.jsx)(Wd.Suspense, {
                fallback: null,
                children: (0, Td.jsx)(qd.e, {
                  ref: Md,
                  framing: "store",
                  owner: "other",
                  turntableFromYaw: tO ? null : vd.c.store.yaw,
                  onNoWebGl: () => {
                    Zd(!0)
                  },
                  onReady: () => {
                    var dd, Od;
                    null === (dd = Md.current) || void 0 === dd || dd.resetCamera(), null === (Od = Md.current) || void 0 === Od || Od.setAllCosmetics(Gd.cosmetics)
                  },
                  onDrawn: () => {
                    ld(!0)
                  }
                })
              }), (Cd || !tO && !Id) && (0, Td.jsx)("div", {
                className: "GiftOpeningHead",
                children: (0, Td.jsx)(Hd.e, {
                  cosmetics: Gd.cosmetics
                })
              }), Gd.badge && (0, Td.jsx)("div", {
                className: "GiftOpeningBadge",
                children: "gems" === Gd.badge ? (0, Td.jsx)(Nd.f, {}) : (0, Td.jsx)(od.c, {
                  name: "bolt"
                })
              })]
            }), (0, Td.jsx)(Yd, {
              wrap: Ud,
              className: Rd()("GiftOpeningBox", {
                GiftOpeningBoxIdle: "wait" === nd
              }),
              rootRef: KO.box,
              bodyRef: KO.body,
              lidRef: KO.lid,
              seamRef: KO.seam
            }), (0, Td.jsx)("div", {
              className: "GiftOpeningRing",
              ref: KO.ring
            })]
          }), (0, Td.jsx)("canvas", {
            className: "GiftOpeningFx",
            ref: KO.canvas
          }), (0, Td.jsx)("div", {
            className: "GiftOpeningFlash",
            ref: KO.flash
          }), tO && (0, Td.jsxs)("div", {
            className: "GiftOpeningTitle",
            children: [(0, Td.jsx)("div", {
              className: "SmallTextBold",
              children: md("giftOpening:sentYou", {
                name: pd.senderName
              })
            }), (0, Td.jsx)(Bd, {
              gift: pd
            })]
          }), "wait" === nd && QO && (0, Td.jsx)("div", {
            className: "GiftOpeningHint SmallTextBold",
            children: md("giftOpening:tapToOpen")
          }), (0, Td.jsx)(xd, {
            gift: pd,
            shown: "card" === nd || "done" === nd
          }), "done" !== nd && (0, Td.jsx)("button", {
            type: "button",
            className: "GiftOpeningTap",
            "data-pad-default-focus": !0,
            "aria-label": md("giftOpening:tapToOpen"),
            onClick: () => {
              var dd;
              ("wait" !== nd || QO) && (null === (dd = dO.current) || void 0 === dd || dd.tap())
            }
          }), oO && (0, Td.jsxs)(td.i, {
            className: "GiftOpeningSkip",
            onClick: vO,
            children: [md("giftOpening:skip"), " ", (0, Td.jsx)(od.c, {
              name: "arrow-right"
            })]
          }), "done" === nd && (0, Td.jsx)(Sd, {
            gift: pd,
            preview: Ed,
            analyticsValue: Ad,
            onReplay: () => {
              ed(Dd + 1)
            },
            onClose: hO
          })]
        })
      })
    }
  },
  35587: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      g: () => Fd,
      j: () => td
    });
    var Wd = md(1685);

    function Fd(dd) {
      var Od;
      return {
        ...Kd.store,
        yaw: Kd.store.yaw + (null !== (Od = Wd.b[dd].previewYaw) && void 0 !== Od ? Od : 0)
      }
    }
    const Rd = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xd = {
        ...Rd,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Kd = {
        player: Rd,
        store: Xd,
        showcase: {
          ...Xd,
          target: [0, 1.9, 0]
        }
      };

    function hd(dd, Od) {
      dd instanceof Promise ? dd.then(Od).catch((dd => {
        console.error("Couldn't open the preview", dd)
      })) : Od(dd)
    }
    class vd {
      constructor(dd) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height), null !== this.view && dd.show(this.view))
        }))
      }
      show(dd) {
        var Od;
        this.view = dd, null === (Od = this.opened) || void 0 === Od || Od.show(dd)
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    class Qd {
      constructor(dd) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(dd).then((dd => dd.ready)), hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var dd, Od;
        return null !== (dd = null === (Od = this.opened) || void 0 === Od ? void 0 : Od.isReady()) && void 0 !== dd && dd
      }
      setCosmetic(dd, Od) {
        var md;
        null === (md = this.opened) || void 0 === md || md.setCosmetic(dd, Od)
      }
      setNametag(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setNametag(dd)
      }
      playEmote(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.playEmote(dd)
      }
      setOrbit(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setOrbit(dd)
      }
      resetCamera() {
        var dd;
        null === (dd = this.opened) || void 0 === dd || dd.resetCamera()
      }
      async untilDrawn(dd) {
        var Od;
        await this.ready, await (null === (Od = this.opened) || void 0 === Od ? void 0 : Od.untilDrawn(dd))
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    const td = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(dd) {
        this.host = dd
      }
      setDefaultHost(dd) {
        this.makeDefault = dd
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(dd) {
        return new vd(this.current().openMob(dd))
      }
      openPet(dd) {
        return new vd(this.current().openPet(dd))
      }
      openMobLineup(dd) {
        return new vd(this.current().openMobLineup(dd))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(dd, Od) {
        return new Qd(this.current().openCharacter(dd, Od))
      }
    }
  },
  35582: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.c,
      g: () => Wd.g,
      i: () => Wd.j
    });
    var Wd = md(35587);
    class Fd {
      constructor(dd) {
        this.load = dd, this.loaded = null, this.loading = null
      }
      run(dd) {
        return null !== this.loaded ? dd(this.loaded) : (this.loading ??= this.load().then((dd => (this.loaded = dd, dd)), (dd => {
          throw this.loading = null, dd
        })), this.loading.then(dd))
      }
    }
    class Rd {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Fd((() => Promise.all([md.e(85), md.e(265), md.e(264), md.e(290), md.e(113), md.e(291), md.e(89), md.e(86), md.e(288), md.e(87), md.e(88), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(312), md.e(261), md.e(279), md.e(293), md.e(296), md.e(91), md.e(253), md.e(267), md.e(112), md.e(124), md.e(258), md.e(142), md.e(90), md.e(122), md.e(311)]).then((() => md(43035))))), this.characterScene = new Fd((() => Promise.all([md.e(85), md.e(265), md.e(264), md.e(290), md.e(113), md.e(291), md.e(89), md.e(86), md.e(288), md.e(87), md.e(88), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(312), md.e(177), md.e(261), md.e(279), md.e(293), md.e(296), md.e(91), md.e(225), md.e(253), md.e(267), md.e(112), md.e(124), md.e(258), md.e(142), md.e(90), md.e(122), md.e(280), md.e(184)]).then((() => md(43148)))))
      }
      openMob(dd) {
        return this.mobScene.run((Od => Od.openMobPreview(dd)))
      }
      openPet(dd) {
        return this.mobScene.run((Od => Od.openPetPreview(dd)))
      }
      openMobLineup(dd) {
        return this.mobScene.run((Od => Od.openMobLineupPreview(dd)))
      }
      openCharacter(dd, Od) {
        return this.characterScene.run((md => md.openCharacterPreview(dd, Od)))
      }
    }
    Wd.j.setDefaultHost((() => new Rd))
  },
  37958: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => hd,
      e: () => Xd
    });
    var Wd = md(701),
      Fd = md(2402);

    function Rd(dd) {
      return dd === (0, Fd.c)().bV ? (0, Fd.c)().YV : dd
    }

    function Xd(dd) {
      return !(0, Wd.O)(dd) && Rd(dd) === (0, Fd.c)().YV
    }
    const Kd = "gravity";

    function hd() {
      return (0, Fd.c)().physics[Kd][1]
    }
  },
  37939: (dd, Od, md) => {
    md.d(Od, {
      d: () => Jd
    });
    var Wd = md(37942),
      Fd = md(218),
      Rd = md(5641),
      Xd = md(37948),
      Kd = md(37955),
      hd = md(38006),
      vd = md(37958),
      Qd = md(415),
      td = md.n(Qd),
      od = md(2402),
      Nd = md(38003),
      qd = md(32),
      Hd = md(29),
      yd = md(37965),
      bd = md(37974),
      Td = md(37982),
      pd = md(37989),
      Yd = md(37996);
    const gd = new Set(["note"]);
    const wd = {
      stop: () => wd,
      fade: () => wd,
      rate: () => wd,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => wd,
      setPannerAttr: () => wd,
      setPosition: () => wd
    };
    class Ed {
      constructor(dd) {
        this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new hd.h, this._howl = (0, Kd.countDecodesAs)(new Rd.Howl({
          src: [...(0, Wd.t)(dd).src],
          pool: 15
        }), "sound"), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = this._howl.play(Xd.b);
        dd && this._howl.loop(!0, Od);
        let md = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), Od);
        const Wd = {
          stop: () => {
            var dd;
            return null === (dd = this.liveHowl()) || void 0 === dd || dd.stop(Od), Wd
          },
          fade: (dd, md, Fd) => {
            var Rd;
            return null === (Rd = this.liveHowl()) || void 0 === Rd || Rd.fade(dd, md, Fd, Od), Wd
          },
          rate: dd => {
            var md;
            return null === (md = this.liveHowl()) || void 0 === md || md.rate(dd, Od), Wd
          },
          stopsAtOnce: () => this._howl.playing(Od) && !this._howl._playLock,
          isAlive: () => {
            const dd = this._howl._soundById(Od);
            return !this._loadFailed && !!dd && !dd._ended
          },
          getDurationMs: () => this._howl._soundById(Od) ? 1e3 * this._howl.duration(Od) / this._howl.rate(Od) : 0,
          getVolume: () => md * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => md,
          setRelativeVolume: dd => {
            var Fd;
            if (dd > 1) throw new Error("Volume should be <= 1");
            return md = Hd.e.get("soundOnFromAd") ? dd : 0, null === (Fd = this.liveHowl()) || void 0 === Fd || Fd.volume(Math.min(1, md * this._volumeMultiplier.getTotalMultipliedVal()), Od), Wd
          },
          setPannerAttr: dd => {
            let {
              coneInnerAngle: md,
              coneOuterAngle: Fd = 360,
              coneOuterGain: Rd,
              distanceModel: Xd,
              maxDistance: Kd,
              panningModel: hd,
              refDistance: vd,
              rolloffFactor: Qd
            } = dd;
            return this._setPannerAttr({
              id: Od,
              coneInnerAngle: md,
              coneOuterAngle: Fd,
              coneOuterGain: Rd,
              distanceModel: Xd,
              maxDistance: Kd,
              panningModel: hd,
              refDistance: vd,
              rolloffFactor: Qd
            }), Wd
          },
          setPosition: dd => {
            var md;
            return null === (md = this.liveHowl()) || void 0 === md || md.pos(dd[2], dd[1], dd[0], Od), Wd
          }
        };
        return Wd
      }
      liveHowl() {
        return this._unloaded ? null : this._howl
      }
      loaded() {
        return "loaded" === this._howl.state()
      }
      unloadOnceIdle() {
        (0, Xd.e)(this._howl, (() => {
          this._unloaded = !0
        }))
      }
      setGlobalVolume(dd) {
        this._volumeMultiplier.setMultiplierType("globalVolume", dd), this._howl.volume(dd)
      }
      _setPannerAttr(dd) {
        let {
          id: Od,
          coneInnerAngle: md = 360,
          coneOuterAngle: Wd = 360,
          coneOuterGain: Fd = 0,
          distanceModel: Rd = "inverse",
          maxDistance: Xd = 1e3,
          panningModel: Kd = "HRTF",
          refDistance: hd = Nd.i,
          rolloffFactor: vd = 1
        } = dd;
        const Qd = this.liveHowl();
        if (null === Qd) return;
        Qd.pannerAttr({
          coneOuterAngle: Wd
        }, Od);
        const td = {
          coneInnerAngle: md,
          coneOuterAngle: Wd,
          coneOuterGain: Fd,
          distanceModel: Rd,
          maxDistance: Xd,
          panningModel: Kd,
          refDistance: hd,
          rolloffFactor: vd
        };
        Qd.pannerAttr(td, Od)
      }
    }
    const Jd = new class {
      constructor() {
        this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new yd.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, qd.j.subscribe("appManagerUpdated|soundVolume", (dd => {
          const Od = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
          for (const md of Od) md.setGlobalVolume(dd)
        }))
      }
      play(dd, Od) {
        var md;
        let Rd, Xd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (md = (0, od.c)()) || void 0 === md ? void 0 : md.YV,
          Kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nd.f,
          hd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nd.i,
          Qd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var qd;
        (0, od.c)() ? Rd = !!Array.isArray(Xd) || (0, vd.b)(Xd) !== (null === (qd = (0, od.c)()) || void 0 === qd ? void 0 : qd.YV): Rd = !1;
        const Hd = (0, Wd.j)(dd),
          bd = this.loadSound(Rd ? this.spatialSounds : this.stereoSounds, dd);
        if (!Rd) {
          const dd = bd.play(Qd);
          return dd.setRelativeVolume(Od), dd
        }
        const Td = (0, od.c)(),
          pd = Array.isArray(Xd) ? Xd : Td.qE.hY(Xd),
          Ed = Td.qE.hY(Td.YV);
        if (!pd || td().sqrDist(pd, Ed) > Kd * Kd) return wd;
        let Jd;
        if (!Qd) {
          if (!this.spatialVoices.admit({
              group: gd.has(Hd) ? null : (0, yd.i)(dd),
              loudness: (0, yd.e)(Od, td().UX(pd, Ed), hd),
              startMs: performance.now(),
              getDurationMs: () => {
                var dd, Od;
                return null !== (dd = null === (Od = Jd) || void 0 === Od ? void 0 : Od.getDurationMs()) && void 0 !== dd ? dd : 0
              },
              isAlive: () => {
                var dd, Od;
                return null !== (dd = null === (Od = Jd) || void 0 === Od ? void 0 : Od.isAlive()) && void 0 !== dd && dd
              },
              canStop: () => {
                var dd, Od;
                return null !== (dd = null === (Od = Jd) || void 0 === Od ? void 0 : Od.stopsAtOnce()) && void 0 !== dd && dd
              },
              stop: () => {
                var dd;
                null === (dd = Jd) || void 0 === dd || dd.stop()
              }
            })) return wd
        }
        return Jd = bd.play(Qd), Jd.setRelativeVolume(Od), Jd.setPannerAttr({
          refDistance: hd
        }), Jd.setPosition([pd[0], pd[1] + Fd.i.yb * Fd.i.playerEyeToHeightRatio, pd[2]]), !Qd && (0, Yd.g)() && (0, Yd.d)(Hd, dd, pd[0] - Ed[0], pd[2] - Ed[2]), Jd
      }
      preload(dd) {
        const Od = (0, Wd.o)(dd) ? [dd] : (0, Wd.v)(dd);
        if (0 === Od.length) throw new Error(`Invalid sound name ${dd} (no sound has it or starts with it)`);
        for (const md of Od) this.loadSound(this.stereoSounds, md)
      }
      preloadAtIdle(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.c;
        const md = dd.filter((dd => !this.idlePreloads.has(dd)));
        for (const Fd of md) this.idlePreloads.add(Fd);
        const Wd = this.idlePreloadGeneration;
        (0, Td.b)(md, {
          ...Od,
          Ad: () => Wd !== this.idlePreloadGeneration,
          fetchFile: dd => {
            this.idlePreloads.delete(dd);
            try {
              return this.preload(dd), Promise.resolve()
            } catch (Od) {
              return Promise.reject(Od)
            }
          }
        })
      }
      loadSound(dd, Od) {
        const md = dd[Od];
        if (md) return md;
        const Fd = this.makeSound(dd, Od);
        for (const Xd of null !== (Rd = (0, Wd.s)(Od)) && void 0 !== Rd ? Rd : []) {
          var Rd;
          dd[Xd] || this.makeSound(dd, Xd)
        }
        return Fd
      }
      makeSound(dd, Od) {
        (0, pd.g)(Od);
        const md = new Ed(Od);
        return md.setGlobalVolume(Hd.e.get("soundVolume")), dd[Od] = md, md
      }
      freeSoundsAfterGame() {
        this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
      }
      freeSounds() {
        for (const dd of [this.stereoSounds, this.spatialSounds])
          for (const [Od, md] of Object.entries(dd)) !bd.b.has((0, Wd.j)(Od)) && md.loaded() && (md.unloadOnceIdle(), delete dd[Od])
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);