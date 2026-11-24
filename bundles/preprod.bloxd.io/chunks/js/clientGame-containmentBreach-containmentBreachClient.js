export const id = 14;
export const ids = [14];
export const modules = {
  39480: (pp, ip, cp) => {
    var Op = {
      "./breach-zero-uncaught.webp": 39488,
      "./breach-zero.webp": 39497,
      "./brood-father-uncaught.webp": 39505,
      "./brood-father.webp": 39507,
      "./carousel-uncaught.webp": 39510,
      "./carousel.webp": 39516,
      "./deadlock-uncaught.webp": 39520,
      "./deadlock.webp": 39525,
      "./frost-revenant-uncaught.webp": 39534,
      "./frost-revenant.webp": 39543,
      "./hollow-choir-uncaught.webp": 39546,
      "./hollow-choir.webp": 39549,
      "./magma-warden-uncaught.webp": 39556,
      "./magma-warden.webp": 39559,
      "./patient-zero-uncaught.webp": 39567,
      "./patient-zero.webp": 39570,
      "./siege-engine-uncaught.webp": 39576,
      "./siege-engine.webp": 39585,
      "./warp-stalker-uncaught.webp": 39592,
      "./warp-stalker.webp": 39600
    };

    function op(pp) {
      var ip = Ip(pp);
      return cp(ip)
    }

    function Ip(pp) {
      if (!cp.o(Op, pp)) {
        var ip = new Error("Cannot find module '" + pp + "'");
        throw ip.code = "MODULE_NOT_FOUND", ip
      }
      return Op[pp]
    }
    op.keys = function() {
      return Object.keys(Op)
    }, op.resolve = Ip, pp.exports = op, op.id = 39480
  },
  38767: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    const Op = 4,
      op = 12e3,
      Ip = 1e3;
    class Sp {
      constructor() {
        let {
          limit: pp = Op,
          windowMs: ip = op,
          spacingMs: cp = Ip,
          now: Sp = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = pp, this.windowMs = ip, this.spacingMs = cp, this.now = Sp
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const pp of this.priority) pp.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const pp = this.now();
        this.sent.push(pp), this.lastSentAt = pp, this.schedule(), this.notify()
      }
      addPriority(pp) {
        return this.priority.add(pp), () => {
          this.priority.delete(pp)
        }
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const pp of this.priority)
          if (pp.waiting()) return !0;
        return !1
      }
      prune() {
        const pp = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= pp;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const pp = this.now(),
          ip = this.lastSentAt + this.spacingMs,
          cp = Math.min(ip > pp ? ip : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        cp !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, cp - pp)))
      }
      notify() {
        for (const pp of this.listeners) pp()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38745: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    class Op {
      constructor(pp, ip, cp) {
        this.GA = pp, this.beforeOpen = ip, this.afterClose = cp, this.open = !1, this.Ry = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Ry && (this.open = !0, this.beforeOpen(this), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      showOrRefresh() {
        this.open ? this.emit() : this.show()
      }
      closePanel(pp) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(pp)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Ry = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Ry || (this.snapshot = this.buildSnapshot(), this.GA(this.snapshot))
      }
    }
  },
  39474: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Wc
    });
    var Op = cp(62);
    var op = cp(25),
      Ip = cp(1938),
      Sp = cp(34),
      xp = cp(36799),
      Lp = cp(1049),
      Yp = cp.n(Lp),
      Dp = cp(1476),
      Ap = cp(1201),
      Pp = cp(4621),
      Wp = cp(1363),
      yp = cp(1480),
      Up = cp(1941),
      wp = cp(1387),
      vp = cp(1929),
      tp = cp(2004),
      Hp = cp(209);
    const dp = cp(39480),
      ep = Object.fromEntries(dp.keys().map((pp => [pp.replace(/^\.\/(.*)\.webp$/, "$1"), dp(pp)]))),
      jp = new Set;

    function kp(pp, ip) {
      const cp = ip ? pp : `${pp}-uncaught`,
        Op = (0, Hp.e)(ep, cp);
      return void 0 !== Op || jp.has(cp) || (jp.add(cp), console.warn(`Containment Breach has no mugshot ${cp}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Op
    }
    var mp = cp(1112);
    const Rp = "containmentBreach",
      qp = "Gold Coin";

    function Mp(pp) {
      let {
        open: ip,
        onDismiss: cp,
        title: Op,
        className: op,
        decor: Ip,
        headerExtra: Sp,
        status: xp,
        statusRefused: Lp = !1,
        children: Dp
      } = pp;
      const Ap = `${op}Title`;
      return (0, mp.jsx)(Pp.c, {
        show: ip,
        close: cp,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, mp.jsxs)("section", {
          className: Yp()("ContainmentBoardPanel", op),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Ap,
          children: [Ip && (0, mp.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Ip
          }), (0, mp.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, mp.jsx)("h2", {
              id: Ap,
              className: "VisuallyHidden",
              children: Op
            }), Sp, (0, mp.jsx)(yp.l, {
              onClick: cp
            })]
          }), (0, mp.jsx)("div", {
            className: "BoardBody",
            children: Dp
          }), void 0 !== xp && (0, mp.jsx)("footer", {
            className: Yp()("BoardStatus", {
              Refused: Lp
            }),
            children: xp
          })]
        })
      })
    }

    function Cp(pp) {
      let {
        itemName: ip
      } = pp;
      return (0, mp.jsx)(Up.d, {
        itemName: ip,
        amount: 0
      })
    }

    function Ep(pp) {
      let {
        anomalyId: ip,
        caught: cp
      } = pp;
      const op = (0, Op.useRef)(null);
      return (0, Wp.c)(op, !cp), (0, mp.jsx)("span", {
        ref: op,
        className: Yp()("BoardMugshot", {
          Uncaught: !cp
        }),
        children: (0, mp.jsx)("img", {
          src: kp(ip, cp),
          alt: "",
          draggable: !1
        })
      })
    }

    function Xp(pp) {
      let {
        itemName: ip,
        amount: cp,
        sx: Op,
        inTile: op = !1
      } = pp;
      return (0, mp.jsx)(wp.f, {
        delayShow: 200,
        hoverOnly: op,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, mp.jsx)(Qp, {
          itemName: ip,
          amount: cp,
          sx: Op
        }),
        children: (0, mp.jsxs)("span", {
          className: Yp()("BoardChip", {
            Short: void 0 !== Op && Op < cp
          }),
          children: [(0, mp.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, mp.jsx)(Cp, {
              itemName: ip
            })
          }), cp.toLocaleString()]
        })
      })
    }
    const lp = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function Qp(pp) {
      var ip;
      let {
        itemName: cp,
        amount: Op,
        sx: op
      } = pp;
      const {
        t: Ip
      } = (0, Ap.H)(), Sp = (0, tp.f)("itemInfo", (pp => pp[cp])), {
        lore: xp,
        droppedBy: Lp
      } = function(pp) {
        if ("string" !== typeof pp) return {
          lore: pp,
          droppedBy: null
        };
        const ip = lp.exec(pp);
        return null === ip ? {
          lore: pp,
          droppedBy: null
        } : {
          lore: "" === ip[1] ? void 0 : ip[1],
          droppedBy: ip[2]
        }
      }(null === Sp || void 0 === Sp ? void 0 : Sp.description);
      return (0, mp.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, mp.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, mp.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, mp.jsx)(Cp, {
              itemName: cp
            })
          }), (0, mp.jsx)(vp.e, {
            text: null !== (ip = null === Sp || void 0 === Sp ? void 0 : Sp.displayName) && void 0 !== ip ? ip : cp,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== xp || null !== Lp) && (0, mp.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== xp && (0, mp.jsx)(vp.e, {
            text: xp,
            className: "BoardChipTooltipDescription"
          }), null !== Lp && (0, mp.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, mp.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Ip(`${Rp}:chipDroppedBy`)
            }), Lp]
          })]
        }), void 0 !== op && (0, mp.jsxs)("div", {
          className: Yp()("BoardChipTooltipHeld", {
            Short: op < Op
          }),
          children: [(0, mp.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Ip(`${Rp}:chipYouHave`)
          }), (0, mp.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, mp.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: op.toLocaleString()
            }), ` / ${Op.toLocaleString()}`]
          }), (0, mp.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, mp.jsx)("span", {
              style: {
                width: (Op > 0 ? 100 * Math.min(1, op / Op) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Jp(pp) {
      let {
        icon: ip,
        name: cp,
        selected: Op,
        locked: op,
        className: Ip,
        buttonRef: Sp,
        onSelect: xp,
        children: Lp
      } = pp;
      return (0, mp.jsxs)("button", {
        ref: Sp,
        type: "button",
        className: Yp()("BoardTile", Ip, {
          Selected: Op,
          Locked: op
        }),
        onClick: xp,
        children: [(0, mp.jsx)("span", {
          className: "BoardTileIcon",
          children: ip
        }), (0, mp.jsx)("span", {
          className: "BoardTileName",
          children: cp
        }), Lp]
      })
    }

    function Bp(pp) {
      let {
        icon: ip,
        name: cp,
        children: Op
      } = pp;
      return (0, mp.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, mp.jsx)("span", {
          className: "BoardDetailIcon",
          children: ip
        }), (0, mp.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, mp.jsx)("h3", {
            children: cp
          }), (0, mp.jsx)("span", {
            className: "BoardDetailStatus",
            children: Op
          })]
        })]
      })
    }

    function Np(pp) {
      let {
        coins: ip,
        children: cp
      } = pp;
      return (0, mp.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, mp.jsx)(Xp, {
          itemName: qp,
          amount: ip
        }), cp]
      })
    }
    var Tp = cp(38745);
    const fp = "containmentCodexView";
    class bp extends Tp.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = pp => {
          this.selectedId = pp, this.emit()
        }
      }
      Ey(pp) {
        this.entries = pp.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const hp = {
        codexAnyDifficulty: `${Rp}:codexNeedsAny`,
        codexNormalOnly: `${Rp}:codexNeedsNormal`,
        codexHardOnly: `${Rp}:codexNeedsHard`
      },
      ap = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      np = {
        codexContained: `${Rp}:codexContainedBadge`,
        codexEncountered: `${Rp}:codexEncounteredBadge`,
        codexUnidentified: `${Rp}:codexUnidentifiedBadge`
      },
      Fp = ["94%", "81%", "88%", "46%", "72%"];

    function gp(pp) {
      let {
        entry: ip
      } = pp;
      const {
        t: cp
      } = (0, Ap.H)();
      return (0, mp.jsx)("span", {
        className: Yp()("BoardBadge", ap[ip.codexEntryState]),
        children: cp(np[ip.codexEntryState])
      })
    }

    function Gp(pp) {
      const {
        t: ip
      } = (0, Ap.H)();
      return "codexUnidentified" === pp.codexEntryState ? ip(`${Rp}:codexUnidentifiedName`) : pp.codexEntryName
    }

    function rp(pp) {
      let {
        entry: ip
      } = pp;
      return "codexUnidentified" === ip.codexEntryState ? (0, mp.jsx)(Cp, {
        itemName: "Book"
      }) : (0, mp.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, mp.jsx)(Ep, {
          anomalyId: ip.codexEntryId,
          caught: "codexContained" === ip.codexEntryState
        }), (0, mp.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Zp(pp) {
      let {
        entry: ip,
        selected: cp,
        onSelect: Op
      } = pp;
      const op = "codexUnidentified" === ip.codexEntryState;
      return (0, mp.jsxs)(Jp, {
        icon: (0, mp.jsx)(rp, {
          entry: ip
        }),
        name: Gp(ip),
        selected: cp,
        locked: op,
        className: Yp()("CodexFolder", ap[ip.codexEntryState]),
        onSelect: () => {
          Op(ip.codexEntryId)
        },
        children: [!op && (0, mp.jsx)(gp, {
          entry: ip
        }), op && (0, mp.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function zp(pp) {
      let {
        count: ip
      } = pp;
      const cp = [];
      for (let Op = Math.min(ip, 25); Op > 0; Op -= 5) cp.push(Math.min(Op, 5));
      return (0, mp.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: cp.map(((pp, ip) => (0, mp.jsx)("span", {
          className: Yp()("CodexTallyGroup", {
            Gate: 5 === pp
          }),
          children: Array.from({
            length: Math.min(pp, 4)
          }, ((pp, ip) => (0, mp.jsx)("span", {
            className: "CodexTallyMark"
          }, ip)))
        }, ip)))
      })
    }

    function sp(pp) {
      let {
        contained: ip,
        total: cp
      } = pp;
      const {
        t: Op
      } = (0, Ap.H)();
      return (0, mp.jsxs)("div", {
        className: "CodexProgress",
        children: [Op(`${Rp}:codexProgress`, {
          contained: String(ip),
          total: String(cp)
        }), (0, mp.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, mp.jsx)("span", {
            style: {
              width: ip / cp * 100 + "%"
            }
          })
        })]
      })
    }

    function Kp(pp) {
      let {
        entry: ip,
        fileNumber: cp
      } = pp;
      const {
        t: Op
      } = (0, Ap.H)(), op = "codexContained" === ip.codexEntryState;
      return (0, mp.jsx)("section", {
        className: "BoardDetail",
        children: (0, mp.jsxs)("article", {
          className: Yp()("CodexDossier", ap[ip.codexEntryState]),
          children: [(0, mp.jsx)("span", {
            className: "CodexFileNumber",
            children: Op(`${Rp}:codexFileNumber`, {
              number: String(cp).padStart(3, "0")
            })
          }), (0, mp.jsx)(Bp, {
            icon: (0, mp.jsx)(rp, {
              entry: ip
            }),
            name: Gp(ip),
            children: (0, mp.jsx)(gp, {
              entry: ip
            })
          }), op && (0, mp.jsxs)(mp.Fragment, {
            children: [(0, mp.jsx)("p", {
              className: "BoardDescription",
              children: ip.codexEntryLore
            }), (0, mp.jsxs)("p", {
              className: "CodexTally",
              children: [Op(`${Rp}:codexContainments`, {
                count: String(ip.codexEntryContainedCount)
              }), (0, mp.jsx)(zp, {
                count: ip.codexEntryContainedCount
              })]
            }), (0, mp.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Op(`${Rp}:codexContainedBadge`)
            })]
          }), !op && (0, mp.jsxs)(mp.Fragment, {
            children: [(0, mp.jsxs)("div", {
              className: "CodexRedaction",
              children: [Fp.map((pp => (0, mp.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: pp
                }
              }, pp))), (0, mp.jsx)("p", {
                className: "CodexRedacted",
                children: Op(`${Rp}:codexRedacted`)
              })]
            }), "" !== ip.codexEntryHint && (0, mp.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, mp.jsx)("h4", {
                children: Op(`${Rp}:codexHintLabel`)
              }), (0, mp.jsx)("p", {
                children: ip.codexEntryHint
              })]
            }), (0, mp.jsx)("p", {
              className: "CodexClearance",
              children: Op(hp[ip.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Vp(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Dp.i)(fp, ip.getSnapshot()),
        {
          t: Op
        } = (0, Ap.H)();
      if (0 === cp.entries.length) return null;
      const op = cp.entries.find((pp => pp.codexEntryId === cp.selectedId)),
        Ip = cp.entries.filter((pp => "codexContained" === pp.codexEntryState)).length,
        Sp = cp.entries.map((pp => pp.codexEntryId)).sort().indexOf(op.codexEntryId) + 1;
      return (0, mp.jsxs)(Mp, {
        open: cp.open,
        onDismiss: ip.dismiss,
        title: Op(`${Rp}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, mp.jsx)(sp, {
          contained: Ip,
          total: cp.entries.length
        }),
        children: [(0, mp.jsx)("div", {
          className: "BoardTiles",
          children: cp.entries.map((pp => (0, mp.jsx)(Zp, {
            entry: pp,
            selected: pp === op,
            onSelect: ip.select
          }, pp.codexEntryId)))
        }), (0, mp.jsx)(Kp, {
          entry: op,
          fileNumber: Sp
        })]
      })
    }
    var ii = cp(337);
    class ci extends Tp.b {
      constructor(pp, ip, cp, Op, op, Ip) {
        super(pp, ip, cp), this.pacer = Op, this.command = op, this.predict = Ip, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = pp => {
          this.selectedId = pp, this.emit()
        }, this.act = (pp, ip) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${pp} ${ip}`, this.rollBack)) return;
          const cp = this.predict(this.board, pp, ip);
          null !== cp && (this.board = cp.board, this.notice = cp.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Op.subscribe((() => {
          this.emit()
        }))
      }
      Ey(pp) {
        const ip = this.messageOpens(pp);
        if (ip && this.open) return this.board === this.confirmed && (this.board = pp), this.confirmed = pp, void this.emit();
        if (this.board = pp, this.confirmed = pp, this.pacer.onReply(), ip) return this.notice = null, this.selectedId = this.openingSelection(pp), void this.show();
        const cp = this.messageNotice(pp);
        null !== cp && (this.notice = cp), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function Oi(pp, ip) {
      return pp.loadoutCoins >= ip.loadoutCostCoins && ip.loadoutCostParts.every((ip => function(pp, ip) {
        return oi(pp, ip).loadoutHeldPartAmount
      }(pp, ip.loadoutPartCurrency) >= ip.loadoutPartAmount))
    }

    function oi(pp, ip) {
      return pp.loadoutHeldParts.find((pp => pp.loadoutHeldPartCurrency === ip))
    }

    function Ii(pp, ip) {
      return pp.loadoutSlots.find((pp => pp.loadoutSlotKind === ip))
    }

    function Si(pp) {
      return pp.loadoutPerks.filter((pp => pp.loadoutPerkEquipped)).length >= pp.loadoutMaxPerks
    }

    function xi(pp, ip, cp) {
      for (const op of pp.loadoutSlots) {
        const Op = op.loadoutSlotOptions.find((pp => pp.loadoutOptionId === cp));
        if (Op) return "loadoutArmour" === op.loadoutSlotKind ? Yi(pp, op, Op, ip) : Li(pp, op, Op, ip)
      }
      const Op = pp.loadoutPerks.find((pp => pp.loadoutPerkId === cp));
      return Op ? function(pp, ip, cp) {
        const Op = ip.loadoutPerkOwned,
          op = ip.loadoutPerkEquipped,
          Ip = ip.loadoutPerkName,
          Sp = Si(pp);
        if ("loadoutUnlock" === cp) {
          if (Op || !Oi(pp, ip.loadoutPerkCost)) return null;
          const cp = {
            ...ip,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Sp
          };
          return {
            board: Ai(Pi(pp, ip.loadoutPerkCost), cp),
            notice: Wi(Sp ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Ip)
          }
        }
        if ("loadoutUpgrade" === cp || !Op || "loadoutEquip" === cp === op || !op && Sp) return null;
        return {
          board: Ai(pp, {
            ...ip,
            loadoutPerkEquipped: !op
          }),
          notice: Wi(op ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Ip)
        }
      }(pp, Op, ip) : null
    }

    function Li(pp, ip, cp, Op) {
      const op = cp.loadoutOptionOwnedTier,
        Ip = cp.loadoutOptionName;
      if ("loadoutEquip" === Op) return 0 === op ? null : {
        board: Di(pp, ip, cp.loadoutOptionId, null),
        notice: Wi("loadoutNoticeEquipped", Ip)
      };
      const Sp = "loadoutUnlock" === Op;
      if (Sp && 0 !== op || "loadoutUpgrade" === Op && (0 === op || op >= cp.loadoutOptionTiers.length) || "loadoutUnequip" === Op) return null;
      const xp = cp.loadoutOptionTiers[op].loadoutTierCost;
      if (!Oi(pp, xp)) return null;
      const Lp = {
          ...cp,
          loadoutOptionOwnedTier: op + 1
        },
        Yp = Sp ? cp.loadoutOptionId : ip.loadoutSlotEquippedId;
      return {
        board: Di(Pi(pp, xp), ip, Yp, Lp),
        notice: Sp ? Wi("loadoutNoticeUnlocked", Ip) : Wi("loadoutNoticeUpgraded", Ip, op + 1)
      }
    }

    function Yi(pp, ip, cp, Op) {
      const op = cp.loadoutOptionOwnedTier > 0,
        Ip = cp.loadoutOptionName;
      if ("loadoutEquip" === Op && op) return {
        board: Di(pp, ip, cp.loadoutOptionId, null),
        notice: Wi("loadoutNoticeEquipped", Ip)
      };
      const Sp = cp.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Op || op || !Oi(pp, Sp) ? null : {
        board: Di(Pi(pp, Sp), ip, cp.loadoutOptionId, {
          ...cp,
          loadoutOptionOwnedTier: 1
        }),
        notice: Wi("loadoutNoticeUnlocked", Ip)
      }
    }

    function Di(pp, ip, cp, Op) {
      const op = {
        ...ip,
        loadoutSlotEquippedId: cp,
        loadoutSlotOptions: ip.loadoutSlotOptions.map((pp => null !== Op && pp.loadoutOptionId === Op.loadoutOptionId ? Op : pp))
      };
      return {
        ...pp,
        loadoutSlots: pp.loadoutSlots.map((pp => pp === ip ? op : pp))
      }
    }

    function Ai(pp, ip) {
      return {
        ...pp,
        loadoutPerks: pp.loadoutPerks.map((pp => pp.loadoutPerkId === ip.loadoutPerkId ? ip : pp))
      }
    }

    function Pi(pp, ip) {
      return {
        ...pp,
        loadoutCoins: pp.loadoutCoins - ip.loadoutCostCoins,
        loadoutHeldParts: pp.loadoutHeldParts.map((pp => {
          const cp = ip.loadoutCostParts.find((ip => ip.loadoutPartCurrency === pp.loadoutHeldPartCurrency));
          return cp ? {
            ...pp,
            loadoutHeldPartAmount: pp.loadoutHeldPartAmount - cp.loadoutPartAmount
          } : pp
        }))
      }
    }

    function Wi(pp, ip) {
      return {
        loadoutNoticeKey: pp,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: ip,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const yi = "containmentLoadoutView";
    class Ui extends ci {
      constructor(pp, ip, cp, Op) {
        super(pp, ip, cp, Op, "loadout", xi), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = pp => {
          this.slot = pp, this.selectedId = wi(this.board, pp), this.emit()
        }
      }
      messageOpens(pp) {
        return pp.loadoutMessageOpens
      }
      messageNotice(pp) {
        return pp.loadoutNotice
      }
      openingSelection(pp) {
        return wi(pp, this.slot)
      }
      buildSnapshot() {
        return {
          open: this.open,
          loadout: this.board,
          slot: this.slot,
          selectedId: this.selectedId,
          pending: this.pacer.isPending(),
          notice: this.notice
        }
      }
    }

    function wi(pp, ip) {
      if ("loadoutPerks" === ip) {
        var cp;
        const ip = pp.loadoutPerks;
        return (null !== (cp = ip.find((pp => pp.loadoutPerkEquipped))) && void 0 !== cp ? cp : ip[0]).loadoutPerkId
      }
      return Ii(pp, ip).loadoutSlotEquippedId
    }
    const vi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var ti = cp(37084),
      Hi = cp(1295);
    const di = {
        loadoutPrimary: `${Rp}:loadoutSlotPrimary`,
        loadoutSecondary: `${Rp}:loadoutSlotSecondary`,
        loadoutOffensive: `${Rp}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${Rp}:loadoutSlotSelfHelp`,
        loadoutArmour: `${Rp}:loadoutSlotArmour`,
        loadoutPerks: `${Rp}:loadoutSlotPerks`
      },
      ei = {
        section: "right",
        SW: "bottom",
        act: "top"
      },
      ui = (0, Op.createContext)({
        step: null,
        targetRef: () => {}
      });

    function ji() {
      const {
        step: pp,
        targetRef: ip
      } = (0, Op.useContext)(ui);
      return (cp, Op) => (null === pp || void 0 === pp ? void 0 : pp.kind) === cp && pp.id === Op ? ip : void 0
    }

    function ki(pp, ip) {
      const cp = ip.loadoutTargetId;
      if ("loadoutPerks" === ip.loadoutTargetSection) {
        const ip = pp.loadoutPerks.find((pp => pp.loadoutPerkId === cp));
        return {
          name: ip.loadoutPerkName,
          owned: ip.loadoutPerkOwned,
          equipped: ip.loadoutPerkEquipped
        }
      }
      const Op = Ii(pp, ip.loadoutTargetSection),
        op = Op.loadoutSlotOptions.find((pp => pp.loadoutOptionId === cp));
      return {
        name: op.loadoutOptionName,
        owned: op.loadoutOptionOwnedTier > 0,
        equipped: Op.loadoutSlotEquippedId === cp
      }
    }

    function mi(pp, ip, cp, Op) {
      const [op, Ip] = pp(`${Rp}:${ip}`, {
        [cp]: "\x01"
      }).split("\x01");
      return (0, mp.jsxs)(mp.Fragment, {
        children: [op, (0, mp.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Op
        }), Ip]
      })
    }

    function Ri(pp) {
      let {
        view: ip,
        onDismiss: cp,
        children: op
      } = pp;
      const {
        t: Ip
      } = (0, Ap.H)(), Sp = ip.loadout, xp = ip.open ? Sp.loadoutWalkthrough.map((pp => ({
        target: pp,
        info: ki(Sp, pp)
      }))).find((pp => {
        let {
          info: ip
        } = pp;
        return !ip.equipped
      })) : void 0;
      let Lp = null,
        Yp = null;
      if (void 0 !== xp) {
        const {
          target: pp,
          info: cp
        } = xp;
        ip.slot !== pp.loadoutTargetSection ? (Lp = {
          kind: "section",
          id: pp.loadoutTargetSection
        }, Yp = mi(Ip, "loadoutWalkthroughSection", "section", Ip(di[pp.loadoutTargetSection]))) : ip.selectedId !== pp.loadoutTargetId ? (Lp = {
          kind: "SW",
          id: pp.loadoutTargetId
        }, Yp = mi(Ip, "loadoutWalkthroughPick", "name", cp.name)) : (Lp = {
          kind: "act",
          id: pp.loadoutTargetId
        }, Yp = mi(Ip, cp.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", cp.name))
      }
      const Dp = null === Lp ? null : function(pp) {
          return `${pp.kind}:${pp.id}`
        }(Lp),
        [Pp, Wp] = (0, Op.useState)(null),
        yp = (0, Op.useCallback)((pp => {
          Wp((ip => null !== pp ? {
            key: Dp,
            node: pp
          } : (null === ip || void 0 === ip ? void 0 : ip.key) === Dp ? null : ip))
        }), [Dp]),
        Up = null !== Dp && (null === Pp || void 0 === Pp ? void 0 : Pp.key) === Dp ? Pp.node : null;
      return (0, mp.jsxs)(ui.Provider, {
        value: {
          step: Lp,
          targetRef: yp
        },
        children: [op, null !== Lp && null !== Up && (0, mp.jsx)(qi, {
          target: Up,
          placement: ei[Lp.kind],
          onDismiss: cp,
          children: Yp
        }, Dp)]
      })
    }

    function qi(pp) {
      let {
        target: ip,
        placement: cp,
        onDismiss: op,
        children: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Ap.H)(), xp = (0, Op.useRef)(ip);
      return xp.current = ip, (0, Hi.x)("popup", xp, op), (0, mp.jsxs)(ti.h, {
        target: ip,
        placement: cp,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, mp.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, mp.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: vi,
            alt: "",
            draggable: !1
          }), (0, mp.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Sp(`${Rp}:operatorName`)
          }), (0, mp.jsx)(yp.l, {
            onClick: op,
            ariaLabel: Sp(`${Rp}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, mp.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Ip
        })]
      })
    }
    const Mi = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Ci(pp) {
      let {
        cost: ip,
        loadout: cp
      } = pp;
      const {
        t: Op
      } = (0, Ap.H)();
      return ip.loadoutCostCoins <= 0 && 0 === ip.loadoutCostParts.length ? (0, mp.jsx)("span", {
        className: "LoadoutCost",
        children: Op(`${Rp}:loadoutFree`)
      }) : (0, mp.jsxs)("span", {
        className: "LoadoutCost",
        children: [ip.loadoutCostCoins > 0 && (0, mp.jsx)(Xp, {
          itemName: qp,
          amount: ip.loadoutCostCoins,
          sx: cp.loadoutCoins
        }), ip.loadoutCostParts.map((pp => {
          const ip = oi(cp, pp.loadoutPartCurrency);
          return (0, mp.jsx)(Xp, {
            itemName: ip.loadoutHeldPartItem,
            amount: pp.loadoutPartAmount,
            sx: ip.loadoutHeldPartAmount
          }, pp.loadoutPartCurrency)
        }))]
      })
    }
    const Ei = {
      loadoutStatFireRate: `${Rp}:loadoutUnitPerMinute`,
      loadoutStatReload: `${Rp}:loadoutUnitSeconds`,
      loadoutStatResupply: `${Rp}:loadoutUnitSeconds`
    };

    function Xi(pp) {
      return "loadoutStatPotency" === pp.loadoutStatKind ? (0, ii.V)(pp.loadoutStatValue) : String(pp.loadoutStatValue)
    }

    function li(pp) {
      var ip;
      let {
        option: cp
      } = pp;
      const {
        t: Op
      } = (0, Ap.H)(), op = cp.loadoutOptionTiers, Ip = null === (ip = op[0]) || void 0 === ip ? void 0 : ip.loadoutTierStats.map((pp => pp.loadoutStatKind));
      if (!Ip || 0 === Ip.length) return null;
      const Sp = cp.loadoutOptionOwnedTier,
        xp = (pp, ip) => {
          var cp;
          return null === (cp = op[pp]) || void 0 === cp ? void 0 : cp.loadoutTierStats.find((pp => pp.loadoutStatKind === ip))
        };
      return (0, mp.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, mp.jsx)("thead", {
          children: (0, mp.jsxs)("tr", {
            children: [(0, mp.jsx)("th", {}), op.map(((pp, ip) => (0, mp.jsx)("th", {
              className: Yp()({
                Current: ip + 1 === Sp,
                Next: ip === Sp
              }),
              children: Op(`${Rp}:loadoutTier`, {
                tier: (0, ii.V)(ip + 1)
              })
            }, ip)))]
          })
        }), (0, mp.jsx)("tbody", {
          children: Ip.map((pp => {
            const ip = Ei[pp];
            return (0, mp.jsxs)("tr", {
              children: [(0, mp.jsxs)("th", {
                scope: "row",
                children: [Op(`${Rp}:${pp}`), ip && (0, mp.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Op(ip)
                })]
              }), op.map(((ip, cp) => {
                const Op = xp(cp, pp),
                  op = cp > 0 ? xp(cp - 1, pp) : void 0,
                  Ip = Op && op ? Op.loadoutStatValue - op.loadoutStatValue : 0,
                  Lp = Mi.has(pp) ? Ip < 0 : Ip > 0,
                  Dp = cp === Sp;
                return (0, mp.jsxs)("td", {
                  className: Yp()({
                    Current: cp + 1 === Sp,
                    Next: Dp,
                    Gain: Lp,
                    Owned: cp < Sp
                  }),
                  children: [Dp && Lp && (0, mp.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Ip < 0 ? "\u25bc" : "\u25b2"
                  }), Op ? Xi(Op) : "-"]
                }, cp)
              }))]
            }, pp)
          }))
        })]
      })
    }

    function Qi(pp) {
      let {
        view: ip,
        controller: cp,
        slot: Op,
        option: op
      } = pp;
      const {
        t: Ip
      } = (0, Ap.H)(), Sp = ip.loadout, xp = op.loadoutOptionOwnedTier, Lp = op.loadoutOptionTiers.length, Yp = Op.loadoutSlotEquippedId === op.loadoutOptionId, Dp = xp < Lp ? op.loadoutOptionTiers[xp].loadoutTierCost : null, Pp = null !== Dp && Oi(Sp, Dp), Wp = op.loadoutOptionId, Up = ji();
      return (0, mp.jsxs)(mp.Fragment, {
        children: [(0, mp.jsx)(Bi, {
          icon: op.loadoutOptionIcon,
          name: op.loadoutOptionName,
          status: 0 === xp ? Ip(`${Rp}:loadoutLocked`) : Lp > 1 ? Ip(`${Rp}:loadoutTier`, {
            tier: (0, ii.V)(xp)
          }) : null,
          locked: 0 === xp,
          equipped: Yp
        }), (0, mp.jsx)("p", {
          className: "BoardDescription",
          children: op.loadoutOptionDescription
        }), (0, mp.jsx)(li, {
          option: op
        }), (0, mp.jsxs)("div", {
          ref: Up("act", Wp),
          className: "BoardActions",
          children: [null !== Dp && (0, mp.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, mp.jsx)(Ci, {
              cost: Dp,
              loadout: Sp
            }), (0, mp.jsx)(yp.o, {
              disabled: !Pp || ip.pending,
              onClick: () => {
                cp.act(0 === xp ? "loadoutUnlock" : "loadoutUpgrade", Wp)
              },
              children: 0 === xp ? Ip(`${Rp}:loadoutUnlock`) : Ip(`${Rp}:loadoutUpgrade`, {
                tier: (0, ii.V)(xp + 1)
              })
            })]
          }), null === Dp && Lp > 1 && (0, mp.jsx)("span", {
            className: "BoardHint",
            children: Ip(`${Rp}:loadoutMaxed`)
          }), xp > 0 && !Yp && (0, mp.jsx)(yp.f, {
            disabled: ip.pending,
            onClick: () => {
              cp.act("loadoutEquip", Wp)
            },
            children: Ip(`${Rp}:loadoutEquip`)
          })]
        })]
      })
    }

    function Ji(pp) {
      let {
        view: ip,
        controller: cp,
        perk: Op
      } = pp;
      const {
        t: op
      } = (0, Ap.H)(), Ip = ip.loadout, Sp = Si(Ip), xp = Op.loadoutPerkId, Lp = ji();
      return (0, mp.jsxs)(mp.Fragment, {
        children: [(0, mp.jsx)(Bi, {
          icon: Op.loadoutPerkIcon,
          name: Op.loadoutPerkName,
          status: Op.loadoutPerkOwned ? null : op(`${Rp}:loadoutLocked`),
          locked: !Op.loadoutPerkOwned,
          equipped: Op.loadoutPerkEquipped
        }), (0, mp.jsx)("p", {
          className: "BoardDescription",
          children: Op.loadoutPerkDescription
        }), (0, mp.jsxs)("div", {
          ref: Lp("act", xp),
          className: "BoardActions",
          children: [!Op.loadoutPerkOwned && (0, mp.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, mp.jsx)(Ci, {
              cost: Op.loadoutPerkCost,
              loadout: Ip
            }), (0, mp.jsx)(yp.o, {
              disabled: !Oi(Ip, Op.loadoutPerkCost) || ip.pending,
              onClick: () => {
                cp.act("loadoutUnlock", xp)
              },
              children: op(`${Rp}:loadoutUnlock`)
            })]
          }), Op.loadoutPerkOwned && !Op.loadoutPerkEquipped && (0, mp.jsx)(yp.f, {
            disabled: Sp || ip.pending,
            onClick: () => {
              cp.act("loadoutEquip", xp)
            },
            children: op(`${Rp}:loadoutEquip`)
          }), Op.loadoutPerkOwned && !Op.loadoutPerkEquipped && Sp && (0, mp.jsx)("span", {
            className: "BoardHint",
            children: op(`${Rp}:loadoutSocketsFullHint`)
          }), Op.loadoutPerkEquipped && (0, mp.jsx)(yp.S, {
            disabled: ip.pending,
            onClick: () => {
              cp.act("loadoutUnequip", xp)
            },
            children: op(`${Rp}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Bi(pp) {
      let {
        icon: ip,
        name: cp,
        status: Op,
        locked: op,
        equipped: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Ap.H)();
      return (0, mp.jsxs)(Bp, {
        icon: (0, mp.jsx)(Cp, {
          itemName: ip
        }),
        name: cp,
        children: [null !== Op && (0, mp.jsx)("span", {
          className: Yp()("LoadoutStatusText", {
            Locked: op
          }),
          children: Op
        }), Ip && (0, mp.jsx)("span", {
          className: "BoardBadge",
          children: Sp(`${Rp}:loadoutEquippedBadge`)
        })]
      })
    }

    function Ni(pp) {
      let {
        view: ip,
        controller: cp
      } = pp;
      const Op = ip.loadout;
      if ("loadoutPerks" === ip.slot) {
        const pp = Op.loadoutPerks.find((pp => pp.loadoutPerkId === ip.selectedId));
        return (0, mp.jsx)("section", {
          className: "BoardDetail",
          children: pp && (0, mp.jsx)(Ji, {
            view: ip,
            controller: cp,
            perk: pp
          })
        })
      }
      const op = Ii(Op, ip.slot),
        Ip = op.loadoutSlotOptions.find((pp => pp.loadoutOptionId === ip.selectedId));
      return (0, mp.jsx)("section", {
        className: "BoardDetail",
        children: Ip && (0, mp.jsx)(Qi, {
          view: ip,
          controller: cp,
          slot: op,
          option: Ip
        })
      })
    }

    function Ti(pp) {
      let {
        owned: ip,
        total: cp
      } = pp;
      return cp <= 1 ? null : (0, mp.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: cp
        }, ((pp, cp) => (0, mp.jsx)("span", {
          className: Yp()("LoadoutPip", {
            Filled: cp < ip
          })
        }, cp)))
      })
    }

    function fi(pp) {
      let {
        view: ip,
        controller: cp
      } = pp;
      const {
        t: Op
      } = (0, Ap.H)(), op = ip.loadout, Ip = ji();
      return (0, mp.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Op(`${Rp}:loadoutKit`),
        children: [op.loadoutSlots.map((pp => {
          const op = pp.loadoutSlotOptions.find((ip => ip.loadoutOptionId === pp.loadoutSlotEquippedId));
          return (0, mp.jsxs)("button", {
            ref: Ip("section", pp.loadoutSlotKind),
            type: "button",
            className: Yp()("LoadoutKitSlot", {
              Selected: ip.slot === pp.loadoutSlotKind
            }),
            onClick: () => {
              cp.selectSlot(pp.loadoutSlotKind)
            },
            children: [(0, mp.jsx)("span", {
              className: "LoadoutKitIcon",
              children: op && (0, mp.jsx)(Cp, {
                itemName: op.loadoutOptionIcon
              })
            }), (0, mp.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, mp.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, mp.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Op(di[pp.loadoutSlotKind])
                }), op && (0, mp.jsx)(Ti, {
                  owned: op.loadoutOptionOwnedTier,
                  total: op.loadoutOptionTiers.length
                })]
              }), (0, mp.jsx)("span", {
                className: "LoadoutKitName",
                children: null === op || void 0 === op ? void 0 : op.loadoutOptionName
              })]
            })]
          }, pp.loadoutSlotKind)
        })), (0, mp.jsx)(bi, {
          view: ip,
          controller: cp
        })]
      })
    }

    function bi(pp) {
      let {
        view: ip,
        controller: cp
      } = pp;
      const {
        t: Op
      } = (0, Ap.H)(), op = ip.loadout, Ip = op.loadoutPerks.filter((pp => pp.loadoutPerkEquipped)), Sp = ji();
      return (0, mp.jsxs)("button", {
        ref: Sp("section", "loadoutPerks"),
        type: "button",
        className: Yp()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === ip.slot
        }),
        onClick: () => {
          cp.selectSlot("loadoutPerks")
        },
        children: [(0, mp.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, mp.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Op(di.loadoutPerks)
          }), (0, mp.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Op(`${Rp}:loadoutPerkCount`, {
              equipped: String(Ip.length),
              max: String(op.loadoutMaxPerks)
            })
          })]
        }), (0, mp.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: op.loadoutMaxPerks
          }, ((pp, ip) => {
            const cp = Ip[ip];
            return (0, mp.jsxs)("span", {
              className: Yp()("LoadoutSocket", {
                Filled: cp,
                Empty: !cp
              }),
              children: [(0, mp.jsx)("span", {
                className: "LoadoutSocketWell",
                children: cp && (0, mp.jsx)(Cp, {
                  itemName: cp.loadoutPerkIcon
                })
              }), (0, mp.jsx)("span", {
                className: "LoadoutSocketName",
                children: cp ? cp.loadoutPerkName : Op(`${Rp}:loadoutPerkSocketEmpty`)
              })]
            }, ip)
          }))
        })]
      })
    }

    function ai(pp) {
      let {
        icon: ip,
        name: cp,
        selected: Op,
        equipped: op,
        locked: Ip,
        ownedTier: Sp,
        tiers: xp,
        buttonRef: Lp,
        onSelect: Yp
      } = pp;
      const {
        t: Dp
      } = (0, Ap.H)();
      return (0, mp.jsxs)(Jp, {
        icon: (0, mp.jsx)(Cp, {
          itemName: ip
        }),
        name: cp,
        selected: Op,
        locked: Ip,
        buttonRef: Lp,
        onSelect: Yp,
        children: [op && (0, mp.jsx)("span", {
          className: "BoardBadge",
          children: Dp(`${Rp}:loadoutEquippedBadge`)
        }), Ip && (0, mp.jsx)("span", {
          className: "BoardBadge Muted",
          children: Dp(`${Rp}:loadoutLocked`)
        }), !Ip && (0, mp.jsx)(Ti, {
          owned: Sp,
          total: xp
        })]
      })
    }

    function ni(pp) {
      let {
        view: ip,
        controller: cp
      } = pp;
      const Op = ip.loadout,
        op = ji();
      if ("loadoutPerks" === ip.slot) return (0, mp.jsx)("div", {
        className: "BoardTiles",
        children: Op.loadoutPerks.map((pp => (0, mp.jsx)(ai, {
          icon: pp.loadoutPerkIcon,
          name: pp.loadoutPerkName,
          selected: ip.selectedId === pp.loadoutPerkId,
          equipped: pp.loadoutPerkEquipped,
          locked: !pp.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: op("SW", pp.loadoutPerkId),
          onSelect: () => {
            cp.select(pp.loadoutPerkId)
          }
        }, pp.loadoutPerkId)))
      });
      const Ip = Ii(Op, ip.slot);
      return (0, mp.jsx)("div", {
        className: "BoardTiles",
        children: Ip.loadoutSlotOptions.map((pp => (0, mp.jsx)(ai, {
          icon: pp.loadoutOptionIcon,
          name: pp.loadoutOptionName,
          selected: ip.selectedId === pp.loadoutOptionId,
          equipped: Ip.loadoutSlotEquippedId === pp.loadoutOptionId,
          locked: 0 === pp.loadoutOptionOwnedTier,
          ownedTier: pp.loadoutOptionOwnedTier,
          tiers: pp.loadoutOptionTiers.length,
          buttonRef: op("SW", pp.loadoutOptionId),
          onSelect: () => {
            cp.select(pp.loadoutOptionId)
          }
        }, pp.loadoutOptionId)))
      })
    }

    function Fi(pp) {
      let {
        loadout: ip
      } = pp;
      return (0, mp.jsx)(Np, {
        coins: ip.loadoutCoins,
        children: ip.loadoutHeldParts.filter((pp => pp.loadoutHeldPartAmount > 0)).map((pp => (0, mp.jsx)(Xp, {
          itemName: pp.loadoutHeldPartItem,
          amount: pp.loadoutHeldPartAmount
        }, pp.loadoutHeldPartCurrency)))
      })
    }

    function gi(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Dp.i)(yi, ip.getSnapshot()),
        {
          t: Op
        } = (0, Ap.H)();
      if (null === cp.loadout) return null;
      const op = cp.notice;
      return (0, mp.jsx)(Ri, {
        view: cp,
        onDismiss: ip.dismiss,
        children: (0, mp.jsxs)(Mp, {
          open: cp.open,
          onDismiss: ip.dismiss,
          title: Op(`${Rp}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, mp.jsx)(Fi, {
            loadout: cp.loadout
          }),
          statusRefused: null === op || void 0 === op ? void 0 : op.loadoutNoticeRefused,
          status: (0, mp.jsxs)(mp.Fragment, {
            children: [(0, mp.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Op(`${Rp}:loadoutRadioBadge`)
            }), null !== op && Op(`${Rp}:${op.loadoutNoticeKey}`, {
              name: op.loadoutNoticeName,
              tier: (0, ii.V)(op.loadoutNoticeTier),
              max: String(cp.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, mp.jsx)(fi, {
            view: cp,
            controller: ip
          }), (0, mp.jsx)(ni, {
            view: cp,
            controller: ip
          }), (0, mp.jsx)(Ni, {
            view: cp,
            controller: ip
          })]
        })
      })
    }

    function Gi(pp, ip, cp) {
      const Op = pp.locatorEntries.find((pp => pp.locatorEntryId === cp));
      if (!Op) return null;
      const op = Op.locatorEntryName;
      if ("locatorDisarm" === ip) return Op.locatorEntryArmed ? {
        board: ri(pp, null),
        notice: Zi("locatorNoticeDisarmed", op)
      } : null;
      if ("locatorArm" === ip) return Op.locatorEntryOwned && !Op.locatorEntryArmed ? {
        board: ri(pp, cp),
        notice: Zi("locatorNoticeArmed", op)
      } : null;
      if (Op.locatorEntryOwned || pp.locatorCoins < Op.locatorEntryPrice) return null;
      const Ip = ri({
        ...pp,
        locatorCoins: pp.locatorCoins - Op.locatorEntryPrice
      }, cp);
      return {
        board: {
          ...Ip,
          locatorEntries: Ip.locatorEntries.map((pp => pp.locatorEntryId === cp ? {
            ...pp,
            locatorEntryOwned: !0
          } : pp))
        },
        notice: Zi("locatorNoticeBought", op)
      }
    }

    function ri(pp, ip) {
      return {
        ...pp,
        locatorEntries: pp.locatorEntries.map((pp => {
          const cp = pp.locatorEntryId === ip;
          return pp.locatorEntryArmed === cp ? pp : {
            ...pp,
            locatorEntryArmed: cp
          }
        }))
      }
    }

    function Zi(pp, ip) {
      return {
        locatorNoticeKey: pp,
        locatorNoticeRefused: !1,
        locatorNoticeName: ip
      }
    }
    const zi = "containmentLocatorView";
    class si extends ci {
      constructor(pp, ip, cp, Op) {
        super(pp, ip, cp, Op, "locator", Gi), this.snapshot = this.buildSnapshot()
      }
      messageOpens(pp) {
        return pp.locatorMessageOpens
      }
      messageNotice(pp) {
        return pp.locatorNotice
      }
      openingSelection(pp) {
        var ip;
        const cp = pp.locatorEntries;
        return (null !== (ip = cp.find((pp => pp.locatorEntryArmed))) && void 0 !== ip ? ip : cp[0]).locatorEntryId
      }
      buildSnapshot() {
        return {
          open: this.open,
          locators: this.board,
          selectedId: this.selectedId,
          pending: this.pacer.isPending(),
          notice: this.notice
        }
      }
    }
    const Ki = {
        locatorContained: `${Rp}:locatorFlavourContained`,
        locatorEncountered: `${Rp}:locatorFlavourEncountered`,
        locatorUnseen: `${Rp}:locatorFlavourUnseen`
      },
      Vi = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${Rp}:locatorAttunedNormal`,
        codexHardOnly: `${Rp}:locatorAttunedHard`
      };

    function pc() {
      return (0, mp.jsx)(mp.Fragment, {
        children: Array.from({
          length: 5
        }, ((pp, ip) => (0, mp.jsx)("span", {
          className: "LocatorFly",
          children: (0, mp.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, ip)))
      })
    }

    function ic(pp) {
      let {
        entry: ip
      } = pp;
      const {
        t: cp
      } = (0, Ap.H)();
      return ip.locatorEntryArmed ? (0, mp.jsx)("span", {
        className: "BoardBadge Armed",
        children: cp(`${Rp}:locatorArmedBadge`)
      }) : ip.locatorEntryOwned ? (0, mp.jsx)("span", {
        className: "BoardBadge",
        children: cp(`${Rp}:locatorOwnedBadge`)
      }) : null
    }

    function cc(pp) {
      let {
        entry: ip,
        coins: cp,
        inTile: Op = !1
      } = pp;
      return (0, mp.jsx)(Xp, {
        itemName: qp,
        amount: ip.locatorEntryPrice,
        sx: cp,
        inTile: Op
      })
    }

    function Oc(pp) {
      let {
        view: ip,
        controller: cp,
        entry: Op
      } = pp;
      const {
        t: op
      } = (0, Ap.H)(), Ip = Op.locatorEntryId, Sp = ip.locators.locatorEntries.find((pp => pp.locatorEntryArmed && pp !== Op));
      return (0, mp.jsxs)("div", {
        className: "BoardActions",
        children: [Op.locatorEntryArmed && (0, mp.jsx)(yp.S, {
          disabled: ip.pending,
          onClick: () => {
            cp.act("locatorDisarm", Ip)
          },
          children: op(`${Rp}:locatorDisarm`)
        }), Op.locatorEntryOwned && !Op.locatorEntryArmed && (0, mp.jsx)(yp.f, {
          disabled: ip.pending,
          onClick: () => {
            cp.act("locatorArm", Ip)
          },
          children: op(`${Rp}:locatorArm`)
        }), !Op.locatorEntryOwned && (0, mp.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, mp.jsx)(cc, {
            entry: Op,
            coins: ip.locators.locatorCoins
          }), (0, mp.jsx)(yp.o, {
            disabled: ip.locators.locatorCoins < Op.locatorEntryPrice || ip.pending,
            onClick: () => {
              cp.act("locatorBuy", Ip)
            },
            children: op(`${Rp}:locatorBuy`)
          })]
        }), Sp && !Op.locatorEntryArmed && (0, mp.jsx)("span", {
          className: "BoardHint",
          children: op(`${Rp}:locatorReplacesHint`, {
            name: Sp.locatorEntryName
          })
        })]
      })
    }

    function oc(pp) {
      let {
        entry: ip
      } = pp;
      return "locatorUnseen" === ip.locatorEntryStanding ? (0, mp.jsx)(Cp, {
        itemName: "Compass"
      }) : (0, mp.jsx)(Ep, {
        anomalyId: ip.locatorEntryId,
        caught: "locatorContained" === ip.locatorEntryStanding
      })
    }

    function Ic(pp) {
      let {
        view: ip,
        controller: cp,
        entry: Op
      } = pp;
      const {
        t: op
      } = (0, Ap.H)(), Ip = Vi[Op.locatorEntryDifficulty];
      return (0, mp.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, mp.jsxs)("div", {
          className: Yp()("LocatorLabel", {
            Armed: Op.locatorEntryArmed
          }),
          children: [(0, mp.jsx)(Bp, {
            icon: (0, mp.jsx)(oc, {
              entry: Op
            }),
            name: op(`${Rp}:locatorName`, {
              name: Op.locatorEntryName
            }),
            children: (0, mp.jsx)(ic, {
              entry: Op
            })
          }), (0, mp.jsx)("p", {
            className: "BoardDescription",
            children: op(Op.locatorEntryArmed ? `${Rp}:locatorFlavourArmed` : Ki[Op.locatorEntryStanding])
          }), null !== Ip && (0, mp.jsx)("p", {
            className: "LocatorAttuned",
            children: op(Ip)
          }), (0, mp.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: op(`${Rp}:locatorUsage`)
          })]
        }), (0, mp.jsx)(Oc, {
          view: ip,
          controller: cp,
          entry: Op
        })]
      })
    }

    function Sc(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Dp.i)(zi, ip.getSnapshot()),
        {
          t: Op
        } = (0, Ap.H)(),
        op = cp.locators;
      if (null === op) return null;
      const Ip = op.locatorEntries.find((pp => pp.locatorEntryId === cp.selectedId)),
        Sp = cp.notice;
      return (0, mp.jsxs)(Mp, {
        open: cp.open,
        onDismiss: ip.dismiss,
        title: Op(`${Rp}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, mp.jsx)(pc, {}),
        headerExtra: (0, mp.jsx)(Np, {
          coins: op.locatorCoins
        }),
        statusRefused: null === Sp || void 0 === Sp ? void 0 : Sp.locatorNoticeRefused,
        status: (0, mp.jsxs)(mp.Fragment, {
          children: [(0, mp.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Op(`${Rp}:locatorKeeperName`)
          }), null !== Sp && Op(`${Rp}:${Sp.locatorNoticeKey}`, {
            name: Sp.locatorNoticeName
          })]
        }),
        children: [(0, mp.jsx)("div", {
          className: "BoardTiles",
          children: op.locatorEntries.map((pp => (0, mp.jsxs)(Jp, {
            icon: (0, mp.jsx)(oc, {
              entry: pp
            }),
            name: pp.locatorEntryName,
            selected: pp === Ip,
            locked: !1,
            className: Yp()("LocatorTag", {
              Armed: pp.locatorEntryArmed
            }),
            onSelect: () => {
              ip.select(pp.locatorEntryId)
            },
            children: [(0, mp.jsx)(ic, {
              entry: pp
            }), !pp.locatorEntryOwned && (0, mp.jsx)(cc, {
              entry: pp,
              coins: op.locatorCoins,
              inTile: !0
            })]
          }, pp.locatorEntryId)))
        }), (0, mp.jsx)(Ic, {
          view: cp,
          controller: ip,
          entry: Ip
        })]
      })
    }

    function xc(pp) {
      let {
        loadout: ip,
        codex: cp,
        locator: Op
      } = pp;
      return (0, mp.jsxs)(mp.Fragment, {
        children: [(0, mp.jsx)(gi, {
          controller: ip
        }), (0, mp.jsx)(Vp, {
          controller: cp
        }), (0, mp.jsx)(Sc, {
          controller: Op
        })]
      })
    }
    var Lc = cp(38767);
    class Yc {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = pp, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Lc.b({
          spacingMs: 0,
          now: ip
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(pp, ip) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, ip(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(pp), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const pp of this.listeners) pp()
      }
    }
    var Dc = cp(38762);
    const Ac = new Map([
      ["npc_general", vi],
      ["npc_tentacle_guy", Dc]
    ]);

    function Pc(pp) {
      const ip = Ac.get(pp);
      if (void 0 === ip) return null;
      const cp = document.createElement("img");
      return cp.src = ip, cp.alt = "", cp.draggable = !1, cp.style.imageRendering = "pixelated", cp
    }
    const Wc = function() {
      let pp, ip = !1,
        cp = null,
        Lp = null;
      const Yp = [],
        Dp = pp => {
          for (const ip of Yp) ip !== pp && ip.close();
          (0, xp.t)()
        },
        Ap = pp => {
          pp && (0, xp.l)()
        },
        Pp = new Yc((ip => {
          pp.sendCommand(ip)
        })),
        Wp = new Ui((pp => {
          Sp.m.GA(yi, pp, !0)
        }), Dp, Ap, Pp),
        yp = new bp((pp => {
          Sp.m.GA(fp, pp, !0)
        }), Dp, Ap),
        Up = new si((pp => {
          Sp.m.GA(zi, pp, !0)
        }), Dp, Ap, Pp);
      Yp.push(Wp, yp, Up);
      return {
        onCreate: ip => {
          pp = ip, cp = (0, xp.A)(null, {
            content: (0, Op.createElement)(xc, {
              loadout: Wp,
              codex: yp,
              locator: Up
            }),
            onClose: () => {
              for (const pp of Yp) pp.close()
            }
          }), Lp = (0, Ip.f)(Pc)
        },
        onReceivedMessageFromServer: (pp, ip) => {
          "containmentLoadout" === pp ? Wp.Ey(ip) : "containmentLoadoutClose" === pp ? Wp.isOpen() && (Wp.close(), (0, xp.h)()) : "containmentCodex" === pp ? yp.Ey(ip) : "containmentLocator" === pp && Up.Ey(ip)
        },
        LP: () => {
          ip || op.c.get("loadingOverlayVisible") || (ip = !0, pp.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var pp, ip;
          null === (pp = cp) || void 0 === pp || pp(), cp = null, null === (ip = Lp) || void 0 === ip || ip(), Lp = null;
          for (const cp of Yp) cp.dispose();
          Pp.dispose()
        }
      }
    }
  },
  39488: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39497: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39505: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39507: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39510: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39516: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39520: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39525: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39534: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39543: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39546: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39549: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39556: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39559: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39567: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39570: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39576: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39585: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39592: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39600: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38762: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);