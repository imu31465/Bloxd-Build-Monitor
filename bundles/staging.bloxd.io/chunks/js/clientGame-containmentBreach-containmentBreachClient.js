export const id = 14;
export const ids = [14];
export const modules = {
  38760: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    const Ot = 4,
      qt = 12e3,
      Dt = 1e3;
    class mt {
      constructor() {
        let {
          limit: tt = Ot,
          windowMs: et = qt,
          spacingMs: Vt = Dt,
          now: mt = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = tt, this.windowMs = et, this.spacingMs = Vt, this.now = mt
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const tt of this.priority) tt.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const tt = this.now();
        this.sent.push(tt), this.lastSentAt = tt, this.schedule(), this.notify()
      }
      addPriority(tt) {
        return this.priority.add(tt), () => {
          this.priority.delete(tt)
        }
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const tt of this.priority)
          if (tt.waiting()) return !0;
        return !1
      }
      prune() {
        const tt = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= tt;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const tt = this.now(),
          et = this.lastSentAt + this.spacingMs,
          Vt = Math.min(et > tt ? et : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Vt !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Vt - tt)))
      }
      notify() {
        for (const tt of this.listeners) tt()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38747: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor(tt, et, Vt) {
        this.sw = tt, this.beforeOpen = et, this.afterClose = Vt, this.open = !1, this.df = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.df && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(tt) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(tt)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.df = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.df || (this.snapshot = this.buildSnapshot(), this.sw(this.snapshot))
      }
    }
  },
  39503: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => QV
    });
    var Ot = Vt(63);
    var qt = Vt(26),
      Dt = Vt(2014),
      mt = Vt(31),
      dt = Vt(36861),
      jt = Vt(1140),
      Ht = Vt.n(jt),
      Xt = Vt(1554),
      Qt = Vt(1286),
      lt = Vt(4665),
      Et = Vt(1441),
      ft = Vt(1556),
      wt = Vt(2018),
      yt = Vt(1464),
      Nt = Vt(2001),
      Mt = Vt(2063),
      bt = Vt(241);
    const Jt = Vt(39509),
      Ct = Object.fromEntries(Jt.keys().map((tt => [tt.replace(/^\.\/(.*)\.webp$/, "$1"), Jt(tt)]))),
      ut = new Set;

    function Kt(tt, et) {
      const Vt = et ? tt : `${tt}-uncaught`,
        Ot = (0, bt.c)(Ct, Vt);
      return void 0 !== Ot || ut.has(Vt) || (ut.add(Vt), console.warn(`Containment Breach has no mugshot ${Vt}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Ot
    }
    var ht = Vt(1188);
    const vt = "containmentBreach",
      Wt = "Gold Coin";

    function St(tt) {
      let {
        open: et,
        onDismiss: Vt,
        title: Ot,
        className: qt,
        decor: Dt,
        headerExtra: mt,
        status: dt,
        statusRefused: jt = !1,
        children: Xt
      } = tt;
      const Qt = `${qt}Title`;
      return (0, ht.jsx)(lt.c, {
        show: et,
        close: Vt,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, ht.jsxs)("section", {
          className: Ht()("ContainmentBoardPanel", qt),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Qt,
          children: [Dt && (0, ht.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Dt
          }), (0, ht.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, ht.jsx)("h2", {
              id: Qt,
              className: "VisuallyHidden",
              children: Ot
            }), mt, (0, ht.jsx)(ft.j, {
              onClick: Vt
            })]
          }), (0, ht.jsx)("div", {
            className: "BoardBody",
            children: Xt
          }), void 0 !== dt && (0, ht.jsx)("footer", {
            className: Ht()("BoardStatus", {
              Refused: jt
            }),
            children: dt
          })]
        })
      })
    }

    function ct(tt) {
      let {
        itemName: et
      } = tt;
      return (0, ht.jsx)(wt.e, {
        itemName: et,
        amount: 0
      })
    }

    function Rt(tt) {
      let {
        anomalyId: et,
        caught: Vt
      } = tt;
      const qt = (0, Ot.useRef)(null);
      return (0, Et.e)(qt, !Vt), (0, ht.jsx)("span", {
        ref: qt,
        className: Ht()("BoardMugshot", {
          Uncaught: !Vt
        }),
        children: (0, ht.jsx)("img", {
          src: Kt(et, Vt),
          alt: "",
          draggable: !1
        })
      })
    }

    function It(tt) {
      let {
        itemName: et,
        amount: Vt,
        Pd: Ot,
        inTile: qt = !1
      } = tt;
      return (0, ht.jsx)(yt.g, {
        delayShow: 200,
        hoverOnly: qt,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, ht.jsx)(Zt, {
          itemName: et,
          amount: Vt,
          Pd: Ot
        }),
        children: (0, ht.jsxs)("span", {
          className: Ht()("BoardChip", {
            Short: void 0 !== Ot && Ot < Vt
          }),
          children: [(0, ht.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, ht.jsx)(ct, {
              itemName: et
            })
          }), Vt.toLocaleString()]
        })
      })
    }
    const Pt = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function Zt(tt) {
      var et;
      let {
        itemName: Vt,
        amount: Ot,
        Pd: qt
      } = tt;
      const {
        t: Dt
      } = (0, Qt.H)(), mt = (0, Mt.g)("itemInfo", (tt => tt[Vt])), {
        lore: dt,
        droppedBy: jt
      } = function(tt) {
        if ("string" !== typeof tt) return {
          lore: tt,
          droppedBy: null
        };
        const et = Pt.exec(tt);
        return null === et ? {
          lore: tt,
          droppedBy: null
        } : {
          lore: "" === et[1] ? void 0 : et[1],
          droppedBy: et[2]
        }
      }(null === mt || void 0 === mt ? void 0 : mt.description);
      return (0, ht.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, ht.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, ht.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, ht.jsx)(ct, {
              itemName: Vt
            })
          }), (0, ht.jsx)(Nt.e, {
            text: null !== (et = null === mt || void 0 === mt ? void 0 : mt.displayName) && void 0 !== et ? et : Vt,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== dt || null !== jt) && (0, ht.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== dt && (0, ht.jsx)(Nt.e, {
            text: dt,
            className: "BoardChipTooltipDescription"
          }), null !== jt && (0, ht.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, ht.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Dt(`${vt}:chipDroppedBy`)
            }), jt]
          })]
        }), void 0 !== qt && (0, ht.jsxs)("div", {
          className: Ht()("BoardChipTooltipHeld", {
            Short: qt < Ot
          }),
          children: [(0, ht.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Dt(`${vt}:chipYouHave`)
          }), (0, ht.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, ht.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: qt.toLocaleString()
            }), ` / ${Ot.toLocaleString()}`]
          }), (0, ht.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, ht.jsx)("span", {
              style: {
                width: (Ot > 0 ? 100 * Math.min(1, qt / Ot) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Lt(tt) {
      let {
        icon: et,
        name: Vt,
        selected: Ot,
        locked: qt,
        className: Dt,
        buttonRef: mt,
        onSelect: dt,
        children: jt
      } = tt;
      return (0, ht.jsxs)("button", {
        ref: mt,
        type: "button",
        className: Ht()("BoardTile", Dt, {
          Selected: Ot,
          Locked: qt
        }),
        onClick: dt,
        children: [(0, ht.jsx)("span", {
          className: "BoardTileIcon",
          children: et
        }), (0, ht.jsx)("span", {
          className: "BoardTileName",
          children: Vt
        }), jt]
      })
    }

    function Ft(tt) {
      let {
        icon: et,
        name: Vt,
        children: Ot
      } = tt;
      return (0, ht.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, ht.jsx)("span", {
          className: "BoardDetailIcon",
          children: et
        }), (0, ht.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, ht.jsx)("h3", {
            children: Vt
          }), (0, ht.jsx)("span", {
            className: "BoardDetailStatus",
            children: Ot
          })]
        })]
      })
    }

    function kt(tt) {
      let {
        coins: et,
        children: Vt
      } = tt;
      return (0, ht.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, ht.jsx)(It, {
          itemName: Wt,
          amount: et
        }), Vt]
      })
    }
    var Gt = Vt(38747);
    const zt = "containmentCodexView";
    class ot extends Gt.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = tt => {
          this.selectedId = tt, this.emit()
        }
      }
      Qf(tt) {
        this.entries = tt.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const rt = {
        codexAnyDifficulty: `${vt}:codexNeedsAny`,
        codexNormalOnly: `${vt}:codexNeedsNormal`,
        codexHardOnly: `${vt}:codexNeedsHard`
      },
      Ut = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      At = {
        codexContained: `${vt}:codexContainedBadge`,
        codexEncountered: `${vt}:codexEncounteredBadge`,
        codexUnidentified: `${vt}:codexUnidentifiedBadge`
      },
      it = ["94%", "81%", "88%", "46%", "72%"];

    function Yt(tt) {
      let {
        entry: et
      } = tt;
      const {
        t: Vt
      } = (0, Qt.H)();
      return (0, ht.jsx)("span", {
        className: Ht()("BoardBadge", Ut[et.codexEntryState]),
        children: Vt(At[et.codexEntryState])
      })
    }

    function Bt(tt) {
      const {
        t: et
      } = (0, Qt.H)();
      return "codexUnidentified" === tt.codexEntryState ? et(`${vt}:codexUnidentifiedName`) : tt.codexEntryName
    }

    function pt(tt) {
      let {
        entry: et
      } = tt;
      return "codexUnidentified" === et.codexEntryState ? (0, ht.jsx)(ct, {
        itemName: "Book"
      }) : (0, ht.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, ht.jsx)(Rt, {
          anomalyId: et.codexEntryId,
          caught: "codexContained" === et.codexEntryState
        }), (0, ht.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function xt(tt) {
      let {
        entry: et,
        selected: Vt,
        onSelect: Ot
      } = tt;
      const qt = "codexUnidentified" === et.codexEntryState;
      return (0, ht.jsxs)(Lt, {
        icon: (0, ht.jsx)(pt, {
          entry: et
        }),
        name: Bt(et),
        selected: Vt,
        locked: qt,
        className: Ht()("CodexFolder", Ut[et.codexEntryState]),
        onSelect: () => {
          Ot(et.codexEntryId)
        },
        children: [!qt && (0, ht.jsx)(Yt, {
          entry: et
        }), qt && (0, ht.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Tt(tt) {
      let {
        count: et
      } = tt;
      const Vt = [];
      for (let Ot = Math.min(et, 25); Ot > 0; Ot -= 5) Vt.push(Math.min(Ot, 5));
      return (0, ht.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: Vt.map(((tt, et) => (0, ht.jsx)("span", {
          className: Ht()("CodexTallyGroup", {
            Gate: 5 === tt
          }),
          children: Array.from({
            length: Math.min(tt, 4)
          }, ((tt, et) => (0, ht.jsx)("span", {
            className: "CodexTallyMark"
          }, et)))
        }, et)))
      })
    }

    function gt(tt) {
      let {
        contained: et,
        total: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Qt.H)();
      return (0, ht.jsxs)("div", {
        className: "CodexProgress",
        children: [Ot(`${vt}:codexProgress`, {
          contained: String(et),
          total: String(Vt)
        }), (0, ht.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, ht.jsx)("span", {
            style: {
              width: et / Vt * 100 + "%"
            }
          })
        })]
      })
    }

    function st(tt) {
      let {
        entry: et,
        fileNumber: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Qt.H)(), qt = "codexContained" === et.codexEntryState;
      return (0, ht.jsx)("section", {
        className: "BoardDetail",
        children: (0, ht.jsxs)("article", {
          className: Ht()("CodexDossier", Ut[et.codexEntryState]),
          children: [(0, ht.jsx)("span", {
            className: "CodexFileNumber",
            children: Ot(`${vt}:codexFileNumber`, {
              number: String(Vt).padStart(3, "0")
            })
          }), (0, ht.jsx)(Ft, {
            icon: (0, ht.jsx)(pt, {
              entry: et
            }),
            name: Bt(et),
            children: (0, ht.jsx)(Yt, {
              entry: et
            })
          }), qt && (0, ht.jsxs)(ht.Fragment, {
            children: [(0, ht.jsx)("p", {
              className: "BoardDescription",
              children: et.codexEntryLore
            }), (0, ht.jsxs)("p", {
              className: "CodexTally",
              children: [Ot(`${vt}:codexContainments`, {
                count: String(et.codexEntryContainedCount)
              }), (0, ht.jsx)(Tt, {
                count: et.codexEntryContainedCount
              })]
            }), (0, ht.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Ot(`${vt}:codexContainedBadge`)
            })]
          }), !qt && (0, ht.jsxs)(ht.Fragment, {
            children: [(0, ht.jsxs)("div", {
              className: "CodexRedaction",
              children: [it.map((tt => (0, ht.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: tt
                }
              }, tt))), (0, ht.jsx)("p", {
                className: "CodexRedacted",
                children: Ot(`${vt}:codexRedacted`)
              })]
            }), "" !== et.codexEntryHint && (0, ht.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, ht.jsx)("h4", {
                children: Ot(`${vt}:codexHintLabel`)
              }), (0, ht.jsx)("p", {
                children: et.codexEntryHint
              })]
            }), (0, ht.jsx)("p", {
              className: "CodexClearance",
              children: Ot(rt[et.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function nt(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Xt.h)(zt, et.getSnapshot()),
        {
          t: Ot
        } = (0, Qt.H)();
      if (0 === Vt.entries.length) return null;
      const qt = Vt.entries.find((tt => tt.codexEntryId === Vt.selectedId)),
        Dt = Vt.entries.filter((tt => "codexContained" === tt.codexEntryState)).length,
        mt = Vt.entries.map((tt => tt.codexEntryId)).sort().indexOf(qt.codexEntryId) + 1;
      return (0, ht.jsxs)(St, {
        open: Vt.open,
        onDismiss: et.dismiss,
        title: Ot(`${vt}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, ht.jsx)(gt, {
          contained: Dt,
          total: Vt.entries.length
        }),
        children: [(0, ht.jsx)("div", {
          className: "BoardTiles",
          children: Vt.entries.map((tt => (0, ht.jsx)(xt, {
            entry: tt,
            selected: tt === qt,
            onSelect: et.select
          }, tt.codexEntryId)))
        }), (0, ht.jsx)(st, {
          entry: qt,
          fileNumber: mt
        })]
      })
    }
    var te = Vt(391);
    class ee extends Gt.b {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        super(tt, et, Vt), this.pacer = Ot, this.command = qt, this.predict = Dt, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = tt => {
          this.selectedId = tt, this.emit()
        }, this.act = (tt, et) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${tt} ${et}`, this.rollBack)) return;
          const Vt = this.predict(this.board, tt, et);
          null !== Vt && (this.board = Vt.board, this.notice = Vt.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Ot.subscribe((() => {
          this.emit()
        }))
      }
      Qf(tt) {
        const et = this.messageOpens(tt);
        if (et && this.open) return this.board === this.confirmed && (this.board = tt), this.confirmed = tt, void this.emit();
        if (this.board = tt, this.confirmed = tt, this.pacer.onReply(), et) return this.notice = null, this.selectedId = this.openingSelection(tt), void this.show();
        const Vt = this.messageNotice(tt);
        null !== Vt && (this.notice = Vt), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function Ve(tt, et) {
      return tt.loadoutCoins >= et.loadoutCostCoins && et.loadoutCostParts.every((et => function(tt, et) {
        return Oe(tt, et).loadoutHeldPartAmount
      }(tt, et.loadoutPartCurrency) >= et.loadoutPartAmount))
    }

    function Oe(tt, et) {
      return tt.loadoutHeldParts.find((tt => tt.loadoutHeldPartCurrency === et))
    }

    function qe(tt, et) {
      return tt.loadoutSlots.find((tt => tt.loadoutSlotKind === et))
    }

    function De(tt) {
      return tt.loadoutPerks.filter((tt => tt.loadoutPerkEquipped)).length >= tt.loadoutMaxPerks
    }

    function me(tt, et, Vt) {
      for (const qt of tt.loadoutSlots) {
        const Ot = qt.loadoutSlotOptions.find((tt => tt.loadoutOptionId === Vt));
        if (Ot) return "loadoutArmour" === qt.loadoutSlotKind ? je(tt, qt, Ot, et) : de(tt, qt, Ot, et)
      }
      const Ot = tt.loadoutPerks.find((tt => tt.loadoutPerkId === Vt));
      return Ot ? function(tt, et, Vt) {
        const Ot = et.loadoutPerkOwned,
          qt = et.loadoutPerkEquipped,
          Dt = et.loadoutPerkName,
          mt = De(tt);
        if ("loadoutUnlock" === Vt) {
          if (Ot || !Ve(tt, et.loadoutPerkCost)) return null;
          const Vt = {
            ...et,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !mt
          };
          return {
            board: Xe(Qe(tt, et.loadoutPerkCost), Vt),
            notice: le(mt ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Dt)
          }
        }
        if ("loadoutUpgrade" === Vt || !Ot || "loadoutEquip" === Vt === qt || !qt && mt) return null;
        return {
          board: Xe(tt, {
            ...et,
            loadoutPerkEquipped: !qt
          }),
          notice: le(qt ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Dt)
        }
      }(tt, Ot, et) : null
    }

    function de(tt, et, Vt, Ot) {
      const qt = Vt.loadoutOptionOwnedTier,
        Dt = Vt.loadoutOptionName;
      if ("loadoutEquip" === Ot) return 0 === qt ? null : {
        board: He(tt, et, Vt.loadoutOptionId, null),
        notice: le("loadoutNoticeEquipped", Dt)
      };
      const mt = "loadoutUnlock" === Ot;
      if (mt && 0 !== qt || "loadoutUpgrade" === Ot && (0 === qt || qt >= Vt.loadoutOptionTiers.length) || "loadoutUnequip" === Ot) return null;
      const dt = Vt.loadoutOptionTiers[qt].loadoutTierCost;
      if (!Ve(tt, dt)) return null;
      const jt = {
          ...Vt,
          loadoutOptionOwnedTier: qt + 1
        },
        Ht = mt ? Vt.loadoutOptionId : et.loadoutSlotEquippedId;
      return {
        board: He(Qe(tt, dt), et, Ht, jt),
        notice: mt ? le("loadoutNoticeUnlocked", Dt) : le("loadoutNoticeUpgraded", Dt, qt + 1)
      }
    }

    function je(tt, et, Vt, Ot) {
      const qt = Vt.loadoutOptionOwnedTier > 0,
        Dt = Vt.loadoutOptionName;
      if ("loadoutEquip" === Ot && qt) return {
        board: He(tt, et, Vt.loadoutOptionId, null),
        notice: le("loadoutNoticeEquipped", Dt)
      };
      const mt = Vt.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Ot || qt || !Ve(tt, mt) ? null : {
        board: He(Qe(tt, mt), et, Vt.loadoutOptionId, {
          ...Vt,
          loadoutOptionOwnedTier: 1
        }),
        notice: le("loadoutNoticeUnlocked", Dt)
      }
    }

    function He(tt, et, Vt, Ot) {
      const qt = {
        ...et,
        loadoutSlotEquippedId: Vt,
        loadoutSlotOptions: et.loadoutSlotOptions.map((tt => null !== Ot && tt.loadoutOptionId === Ot.loadoutOptionId ? Ot : tt))
      };
      return {
        ...tt,
        loadoutSlots: tt.loadoutSlots.map((tt => tt === et ? qt : tt))
      }
    }

    function Xe(tt, et) {
      return {
        ...tt,
        loadoutPerks: tt.loadoutPerks.map((tt => tt.loadoutPerkId === et.loadoutPerkId ? et : tt))
      }
    }

    function Qe(tt, et) {
      return {
        ...tt,
        loadoutCoins: tt.loadoutCoins - et.loadoutCostCoins,
        loadoutHeldParts: tt.loadoutHeldParts.map((tt => {
          const Vt = et.loadoutCostParts.find((et => et.loadoutPartCurrency === tt.loadoutHeldPartCurrency));
          return Vt ? {
            ...tt,
            loadoutHeldPartAmount: tt.loadoutHeldPartAmount - Vt.loadoutPartAmount
          } : tt
        }))
      }
    }

    function le(tt, et) {
      return {
        loadoutNoticeKey: tt,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: et,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Ee = "containmentLoadoutView";
    class fe extends ee {
      constructor(tt, et, Vt, Ot) {
        super(tt, et, Vt, Ot, "loadout", me), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = tt => {
          this.slot = tt, this.selectedId = we(this.board, tt), this.emit()
        }
      }
      messageOpens(tt) {
        return tt.loadoutMessageOpens
      }
      messageNotice(tt) {
        return tt.loadoutNotice
      }
      openingSelection(tt) {
        return we(tt, this.slot)
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

    function we(tt, et) {
      if ("loadoutPerks" === et) {
        var Vt;
        const et = tt.loadoutPerks;
        return (null !== (Vt = et.find((tt => tt.loadoutPerkEquipped))) && void 0 !== Vt ? Vt : et[0]).loadoutPerkId
      }
      return qe(tt, et).loadoutSlotEquippedId
    }
    const ye = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Ne = Vt(37110),
      ae = Vt(1371);
    const Me = {
        loadoutPrimary: `${vt}:loadoutSlotPrimary`,
        loadoutSecondary: `${vt}:loadoutSlotSecondary`,
        loadoutOffensive: `${vt}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${vt}:loadoutSlotSelfHelp`,
        loadoutArmour: `${vt}:loadoutSlotArmour`,
        loadoutPerks: `${vt}:loadoutSlotPerks`
      },
      be = {
        section: "right",
        il: "bottom",
        act: "top"
      },
      Je = (0, Ot.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Ce() {
      const {
        step: tt,
        targetRef: et
      } = (0, Ot.useContext)(Je);
      return (Vt, Ot) => (null === tt || void 0 === tt ? void 0 : tt.kind) === Vt && tt.id === Ot ? et : void 0
    }

    function ue(tt, et) {
      const Vt = et.loadoutTargetId;
      if ("loadoutPerks" === et.loadoutTargetSection) {
        const et = tt.loadoutPerks.find((tt => tt.loadoutPerkId === Vt));
        return {
          name: et.loadoutPerkName,
          owned: et.loadoutPerkOwned,
          equipped: et.loadoutPerkEquipped
        }
      }
      const Ot = qe(tt, et.loadoutTargetSection),
        qt = Ot.loadoutSlotOptions.find((tt => tt.loadoutOptionId === Vt));
      return {
        name: qt.loadoutOptionName,
        owned: qt.loadoutOptionOwnedTier > 0,
        equipped: Ot.loadoutSlotEquippedId === Vt
      }
    }

    function Ke(tt, et, Vt, Ot) {
      const [qt, Dt] = tt(`${vt}:${et}`, {
        [Vt]: "\x01"
      }).split("\x01");
      return (0, ht.jsxs)(ht.Fragment, {
        children: [qt, (0, ht.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Ot
        }), Dt]
      })
    }

    function he(tt) {
      let {
        view: et,
        onDismiss: Vt,
        children: qt
      } = tt;
      const {
        t: Dt
      } = (0, Qt.H)(), mt = et.loadout, dt = et.open ? mt.loadoutWalkthrough.map((tt => ({
        target: tt,
        info: ue(mt, tt)
      }))).find((tt => {
        let {
          info: et
        } = tt;
        return !et.equipped
      })) : void 0;
      let jt = null,
        Ht = null;
      if (void 0 !== dt) {
        const {
          target: tt,
          info: Vt
        } = dt;
        et.slot !== tt.loadoutTargetSection ? (jt = {
          kind: "section",
          id: tt.loadoutTargetSection
        }, Ht = Ke(Dt, "loadoutWalkthroughSection", "section", Dt(Me[tt.loadoutTargetSection]))) : et.selectedId !== tt.loadoutTargetId ? (jt = {
          kind: "il",
          id: tt.loadoutTargetId
        }, Ht = Ke(Dt, "loadoutWalkthroughPick", "name", Vt.name)) : (jt = {
          kind: "act",
          id: tt.loadoutTargetId
        }, Ht = Ke(Dt, Vt.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", Vt.name))
      }
      const Xt = null === jt ? null : function(tt) {
          return `${tt.kind}:${tt.id}`
        }(jt),
        [lt, Et] = (0, Ot.useState)(null),
        ft = (0, Ot.useCallback)((tt => {
          Et((et => null !== tt ? {
            key: Xt,
            node: tt
          } : (null === et || void 0 === et ? void 0 : et.key) === Xt ? null : et))
        }), [Xt]),
        wt = null !== Xt && (null === lt || void 0 === lt ? void 0 : lt.key) === Xt ? lt.node : null;
      return (0, ht.jsxs)(Je.Provider, {
        value: {
          step: jt,
          targetRef: ft
        },
        children: [qt, null !== jt && null !== wt && (0, ht.jsx)(ve, {
          target: wt,
          placement: be[jt.kind],
          onDismiss: Vt,
          children: Ht
        }, Xt)]
      })
    }

    function ve(tt) {
      let {
        target: et,
        placement: Vt,
        onDismiss: qt,
        children: Dt
      } = tt;
      const {
        t: mt
      } = (0, Qt.H)(), dt = (0, Ot.useRef)(et);
      return dt.current = et, (0, ae.w)("popup", dt, qt), (0, ht.jsxs)(Ne.h, {
        target: et,
        placement: Vt,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, ht.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, ht.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: ye,
            alt: "",
            draggable: !1
          }), (0, ht.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: mt(`${vt}:operatorName`)
          }), (0, ht.jsx)(ft.j, {
            onClick: qt,
            ariaLabel: mt(`${vt}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, ht.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Dt
        })]
      })
    }
    const We = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Se(tt) {
      let {
        cost: et,
        loadout: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Qt.H)();
      return et.loadoutCostCoins <= 0 && 0 === et.loadoutCostParts.length ? (0, ht.jsx)("span", {
        className: "LoadoutCost",
        children: Ot(`${vt}:loadoutFree`)
      }) : (0, ht.jsxs)("span", {
        className: "LoadoutCost",
        children: [et.loadoutCostCoins > 0 && (0, ht.jsx)(It, {
          itemName: Wt,
          amount: et.loadoutCostCoins,
          Pd: Vt.loadoutCoins
        }), et.loadoutCostParts.map((tt => {
          const et = Oe(Vt, tt.loadoutPartCurrency);
          return (0, ht.jsx)(It, {
            itemName: et.loadoutHeldPartItem,
            amount: tt.loadoutPartAmount,
            Pd: et.loadoutHeldPartAmount
          }, tt.loadoutPartCurrency)
        }))]
      })
    }
    const ce = {
      loadoutStatFireRate: `${vt}:loadoutUnitPerMinute`,
      loadoutStatReload: `${vt}:loadoutUnitSeconds`,
      loadoutStatResupply: `${vt}:loadoutUnitSeconds`
    };

    function Re(tt) {
      return "loadoutStatPotency" === tt.loadoutStatKind ? (0, te.Y)(tt.loadoutStatValue) : String(tt.loadoutStatValue)
    }

    function Ie(tt) {
      var et;
      let {
        option: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Qt.H)(), qt = Vt.loadoutOptionTiers, Dt = null === (et = qt[0]) || void 0 === et ? void 0 : et.loadoutTierStats.map((tt => tt.loadoutStatKind));
      if (!Dt || 0 === Dt.length) return null;
      const mt = Vt.loadoutOptionOwnedTier,
        dt = (tt, et) => {
          var Vt;
          return null === (Vt = qt[tt]) || void 0 === Vt ? void 0 : Vt.loadoutTierStats.find((tt => tt.loadoutStatKind === et))
        };
      return (0, ht.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, ht.jsx)("thead", {
          children: (0, ht.jsxs)("tr", {
            children: [(0, ht.jsx)("th", {}), qt.map(((tt, et) => (0, ht.jsx)("th", {
              className: Ht()({
                Current: et + 1 === mt,
                Next: et === mt
              }),
              children: Ot(`${vt}:loadoutTier`, {
                tier: (0, te.Y)(et + 1)
              })
            }, et)))]
          })
        }), (0, ht.jsx)("tbody", {
          children: Dt.map((tt => {
            const et = ce[tt];
            return (0, ht.jsxs)("tr", {
              children: [(0, ht.jsxs)("th", {
                scope: "row",
                children: [Ot(`${vt}:${tt}`), et && (0, ht.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Ot(et)
                })]
              }), qt.map(((et, Vt) => {
                const Ot = dt(Vt, tt),
                  qt = Vt > 0 ? dt(Vt - 1, tt) : void 0,
                  Dt = Ot && qt ? Ot.loadoutStatValue - qt.loadoutStatValue : 0,
                  jt = We.has(tt) ? Dt < 0 : Dt > 0,
                  Xt = Vt === mt;
                return (0, ht.jsxs)("td", {
                  className: Ht()({
                    Current: Vt + 1 === mt,
                    Next: Xt,
                    Gain: jt,
                    Owned: Vt < mt
                  }),
                  children: [Xt && jt && (0, ht.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Dt < 0 ? "\u25bc" : "\u25b2"
                  }), Ot ? Re(Ot) : "-"]
                }, Vt)
              }))]
            }, tt)
          }))
        })]
      })
    }

    function Pe(tt) {
      let {
        view: et,
        controller: Vt,
        slot: Ot,
        option: qt
      } = tt;
      const {
        t: Dt
      } = (0, Qt.H)(), mt = et.loadout, dt = qt.loadoutOptionOwnedTier, jt = qt.loadoutOptionTiers.length, Ht = Ot.loadoutSlotEquippedId === qt.loadoutOptionId, Xt = dt < jt ? qt.loadoutOptionTiers[dt].loadoutTierCost : null, lt = null !== Xt && Ve(mt, Xt), Et = qt.loadoutOptionId, wt = Ce();
      return (0, ht.jsxs)(ht.Fragment, {
        children: [(0, ht.jsx)(Le, {
          icon: qt.loadoutOptionIcon,
          name: qt.loadoutOptionName,
          status: 0 === dt ? Dt(`${vt}:loadoutLocked`) : jt > 1 ? Dt(`${vt}:loadoutTier`, {
            tier: (0, te.Y)(dt)
          }) : null,
          locked: 0 === dt,
          equipped: Ht
        }), (0, ht.jsx)("p", {
          className: "BoardDescription",
          children: qt.loadoutOptionDescription
        }), (0, ht.jsx)(Ie, {
          option: qt
        }), (0, ht.jsxs)("div", {
          ref: wt("act", Et),
          className: "BoardActions",
          children: [null !== Xt && (0, ht.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, ht.jsx)(Se, {
              cost: Xt,
              loadout: mt
            }), (0, ht.jsx)(ft.m, {
              disabled: !lt || et.pending,
              onClick: () => {
                Vt.act(0 === dt ? "loadoutUnlock" : "loadoutUpgrade", Et)
              },
              children: 0 === dt ? Dt(`${vt}:loadoutUnlock`) : Dt(`${vt}:loadoutUpgrade`, {
                tier: (0, te.Y)(dt + 1)
              })
            })]
          }), null === Xt && jt > 1 && (0, ht.jsx)("span", {
            className: "BoardHint",
            children: Dt(`${vt}:loadoutMaxed`)
          }), dt > 0 && !Ht && (0, ht.jsx)(ft.f, {
            disabled: et.pending,
            onClick: () => {
              Vt.act("loadoutEquip", Et)
            },
            children: Dt(`${vt}:loadoutEquip`)
          })]
        })]
      })
    }

    function Ze(tt) {
      let {
        view: et,
        controller: Vt,
        perk: Ot
      } = tt;
      const {
        t: qt
      } = (0, Qt.H)(), Dt = et.loadout, mt = De(Dt), dt = Ot.loadoutPerkId, jt = Ce();
      return (0, ht.jsxs)(ht.Fragment, {
        children: [(0, ht.jsx)(Le, {
          icon: Ot.loadoutPerkIcon,
          name: Ot.loadoutPerkName,
          status: Ot.loadoutPerkOwned ? null : qt(`${vt}:loadoutLocked`),
          locked: !Ot.loadoutPerkOwned,
          equipped: Ot.loadoutPerkEquipped
        }), (0, ht.jsx)("p", {
          className: "BoardDescription",
          children: Ot.loadoutPerkDescription
        }), (0, ht.jsxs)("div", {
          ref: jt("act", dt),
          className: "BoardActions",
          children: [!Ot.loadoutPerkOwned && (0, ht.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, ht.jsx)(Se, {
              cost: Ot.loadoutPerkCost,
              loadout: Dt
            }), (0, ht.jsx)(ft.m, {
              disabled: !Ve(Dt, Ot.loadoutPerkCost) || et.pending,
              onClick: () => {
                Vt.act("loadoutUnlock", dt)
              },
              children: qt(`${vt}:loadoutUnlock`)
            })]
          }), Ot.loadoutPerkOwned && !Ot.loadoutPerkEquipped && (0, ht.jsx)(ft.f, {
            disabled: mt || et.pending,
            onClick: () => {
              Vt.act("loadoutEquip", dt)
            },
            children: qt(`${vt}:loadoutEquip`)
          }), Ot.loadoutPerkOwned && !Ot.loadoutPerkEquipped && mt && (0, ht.jsx)("span", {
            className: "BoardHint",
            children: qt(`${vt}:loadoutSocketsFullHint`)
          }), Ot.loadoutPerkEquipped && (0, ht.jsx)(ft.Q, {
            disabled: et.pending,
            onClick: () => {
              Vt.act("loadoutUnequip", dt)
            },
            children: qt(`${vt}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Le(tt) {
      let {
        icon: et,
        name: Vt,
        status: Ot,
        locked: qt,
        equipped: Dt
      } = tt;
      const {
        t: mt
      } = (0, Qt.H)();
      return (0, ht.jsxs)(Ft, {
        icon: (0, ht.jsx)(ct, {
          itemName: et
        }),
        name: Vt,
        children: [null !== Ot && (0, ht.jsx)("span", {
          className: Ht()("LoadoutStatusText", {
            Locked: qt
          }),
          children: Ot
        }), Dt && (0, ht.jsx)("span", {
          className: "BoardBadge",
          children: mt(`${vt}:loadoutEquippedBadge`)
        })]
      })
    }

    function Fe(tt) {
      let {
        view: et,
        controller: Vt
      } = tt;
      const Ot = et.loadout;
      if ("loadoutPerks" === et.slot) {
        const tt = Ot.loadoutPerks.find((tt => tt.loadoutPerkId === et.selectedId));
        return (0, ht.jsx)("section", {
          className: "BoardDetail",
          children: tt && (0, ht.jsx)(Ze, {
            view: et,
            controller: Vt,
            perk: tt
          })
        })
      }
      const qt = qe(Ot, et.slot),
        Dt = qt.loadoutSlotOptions.find((tt => tt.loadoutOptionId === et.selectedId));
      return (0, ht.jsx)("section", {
        className: "BoardDetail",
        children: Dt && (0, ht.jsx)(Pe, {
          view: et,
          controller: Vt,
          slot: qt,
          option: Dt
        })
      })
    }

    function ke(tt) {
      let {
        owned: et,
        total: Vt
      } = tt;
      return Vt <= 1 ? null : (0, ht.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: Vt
        }, ((tt, Vt) => (0, ht.jsx)("span", {
          className: Ht()("LoadoutPip", {
            Filled: Vt < et
          })
        }, Vt)))
      })
    }

    function Ge(tt) {
      let {
        view: et,
        controller: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Qt.H)(), qt = et.loadout, Dt = Ce();
      return (0, ht.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Ot(`${vt}:loadoutKit`),
        children: [qt.loadoutSlots.map((tt => {
          const qt = tt.loadoutSlotOptions.find((et => et.loadoutOptionId === tt.loadoutSlotEquippedId));
          return (0, ht.jsxs)("button", {
            ref: Dt("section", tt.loadoutSlotKind),
            type: "button",
            className: Ht()("LoadoutKitSlot", {
              Selected: et.slot === tt.loadoutSlotKind
            }),
            onClick: () => {
              Vt.selectSlot(tt.loadoutSlotKind)
            },
            children: [(0, ht.jsx)("span", {
              className: "LoadoutKitIcon",
              children: qt && (0, ht.jsx)(ct, {
                itemName: qt.loadoutOptionIcon
              })
            }), (0, ht.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, ht.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, ht.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Ot(Me[tt.loadoutSlotKind])
                }), qt && (0, ht.jsx)(ke, {
                  owned: qt.loadoutOptionOwnedTier,
                  total: qt.loadoutOptionTiers.length
                })]
              }), (0, ht.jsx)("span", {
                className: "LoadoutKitName",
                children: null === qt || void 0 === qt ? void 0 : qt.loadoutOptionName
              })]
            })]
          }, tt.loadoutSlotKind)
        })), (0, ht.jsx)(ze, {
          view: et,
          controller: Vt
        })]
      })
    }

    function ze(tt) {
      let {
        view: et,
        controller: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Qt.H)(), qt = et.loadout, Dt = qt.loadoutPerks.filter((tt => tt.loadoutPerkEquipped)), mt = Ce();
      return (0, ht.jsxs)("button", {
        ref: mt("section", "loadoutPerks"),
        type: "button",
        className: Ht()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === et.slot
        }),
        onClick: () => {
          Vt.selectSlot("loadoutPerks")
        },
        children: [(0, ht.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, ht.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Ot(Me.loadoutPerks)
          }), (0, ht.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Ot(`${vt}:loadoutPerkCount`, {
              equipped: String(Dt.length),
              max: String(qt.loadoutMaxPerks)
            })
          })]
        }), (0, ht.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: qt.loadoutMaxPerks
          }, ((tt, et) => {
            const Vt = Dt[et];
            return (0, ht.jsxs)("span", {
              className: Ht()("LoadoutSocket", {
                Filled: Vt,
                Empty: !Vt
              }),
              children: [(0, ht.jsx)("span", {
                className: "LoadoutSocketWell",
                children: Vt && (0, ht.jsx)(ct, {
                  itemName: Vt.loadoutPerkIcon
                })
              }), (0, ht.jsx)("span", {
                className: "LoadoutSocketName",
                children: Vt ? Vt.loadoutPerkName : Ot(`${vt}:loadoutPerkSocketEmpty`)
              })]
            }, et)
          }))
        })]
      })
    }

    function oe(tt) {
      let {
        icon: et,
        name: Vt,
        selected: Ot,
        equipped: qt,
        locked: Dt,
        ownedTier: mt,
        tiers: dt,
        buttonRef: jt,
        onSelect: Ht
      } = tt;
      const {
        t: Xt
      } = (0, Qt.H)();
      return (0, ht.jsxs)(Lt, {
        icon: (0, ht.jsx)(ct, {
          itemName: et
        }),
        name: Vt,
        selected: Ot,
        locked: Dt,
        buttonRef: jt,
        onSelect: Ht,
        children: [qt && (0, ht.jsx)("span", {
          className: "BoardBadge",
          children: Xt(`${vt}:loadoutEquippedBadge`)
        }), Dt && (0, ht.jsx)("span", {
          className: "BoardBadge Muted",
          children: Xt(`${vt}:loadoutLocked`)
        }), !Dt && (0, ht.jsx)(ke, {
          owned: mt,
          total: dt
        })]
      })
    }

    function re(tt) {
      let {
        view: et,
        controller: Vt
      } = tt;
      const Ot = et.loadout,
        qt = Ce();
      if ("loadoutPerks" === et.slot) return (0, ht.jsx)("div", {
        className: "BoardTiles",
        children: Ot.loadoutPerks.map((tt => (0, ht.jsx)(oe, {
          icon: tt.loadoutPerkIcon,
          name: tt.loadoutPerkName,
          selected: et.selectedId === tt.loadoutPerkId,
          equipped: tt.loadoutPerkEquipped,
          locked: !tt.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: qt("il", tt.loadoutPerkId),
          onSelect: () => {
            Vt.select(tt.loadoutPerkId)
          }
        }, tt.loadoutPerkId)))
      });
      const Dt = qe(Ot, et.slot);
      return (0, ht.jsx)("div", {
        className: "BoardTiles",
        children: Dt.loadoutSlotOptions.map((tt => (0, ht.jsx)(oe, {
          icon: tt.loadoutOptionIcon,
          name: tt.loadoutOptionName,
          selected: et.selectedId === tt.loadoutOptionId,
          equipped: Dt.loadoutSlotEquippedId === tt.loadoutOptionId,
          locked: 0 === tt.loadoutOptionOwnedTier,
          ownedTier: tt.loadoutOptionOwnedTier,
          tiers: tt.loadoutOptionTiers.length,
          buttonRef: qt("il", tt.loadoutOptionId),
          onSelect: () => {
            Vt.select(tt.loadoutOptionId)
          }
        }, tt.loadoutOptionId)))
      })
    }

    function Ue(tt) {
      let {
        loadout: et
      } = tt;
      return (0, ht.jsx)(kt, {
        coins: et.loadoutCoins,
        children: et.loadoutHeldParts.filter((tt => tt.loadoutHeldPartAmount > 0)).map((tt => (0, ht.jsx)(It, {
          itemName: tt.loadoutHeldPartItem,
          amount: tt.loadoutHeldPartAmount
        }, tt.loadoutHeldPartCurrency)))
      })
    }

    function Ae(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Xt.h)(Ee, et.getSnapshot()),
        {
          t: Ot
        } = (0, Qt.H)();
      if (null === Vt.loadout) return null;
      const qt = Vt.notice;
      return (0, ht.jsx)(he, {
        view: Vt,
        onDismiss: et.dismiss,
        children: (0, ht.jsxs)(St, {
          open: Vt.open,
          onDismiss: et.dismiss,
          title: Ot(`${vt}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, ht.jsx)(Ue, {
            loadout: Vt.loadout
          }),
          statusRefused: null === qt || void 0 === qt ? void 0 : qt.loadoutNoticeRefused,
          status: (0, ht.jsxs)(ht.Fragment, {
            children: [(0, ht.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Ot(`${vt}:loadoutRadioBadge`)
            }), null !== qt && Ot(`${vt}:${qt.loadoutNoticeKey}`, {
              name: qt.loadoutNoticeName,
              tier: (0, te.Y)(qt.loadoutNoticeTier),
              max: String(Vt.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, ht.jsx)(Ge, {
            view: Vt,
            controller: et
          }), (0, ht.jsx)(re, {
            view: Vt,
            controller: et
          }), (0, ht.jsx)(Fe, {
            view: Vt,
            controller: et
          })]
        })
      })
    }

    function ie(tt, et, Vt) {
      const Ot = tt.locatorEntries.find((tt => tt.locatorEntryId === Vt));
      if (!Ot) return null;
      const qt = Ot.locatorEntryName;
      if ("locatorDisarm" === et) return Ot.locatorEntryArmed ? {
        board: Ye(tt, null),
        notice: Be("locatorNoticeDisarmed", qt)
      } : null;
      if ("locatorArm" === et) return Ot.locatorEntryOwned && !Ot.locatorEntryArmed ? {
        board: Ye(tt, Vt),
        notice: Be("locatorNoticeArmed", qt)
      } : null;
      if (Ot.locatorEntryOwned || tt.locatorCoins < Ot.locatorEntryPrice) return null;
      const Dt = Ye({
        ...tt,
        locatorCoins: tt.locatorCoins - Ot.locatorEntryPrice
      }, Vt);
      return {
        board: {
          ...Dt,
          locatorEntries: Dt.locatorEntries.map((tt => tt.locatorEntryId === Vt ? {
            ...tt,
            locatorEntryOwned: !0
          } : tt))
        },
        notice: Be("locatorNoticeBought", qt)
      }
    }

    function Ye(tt, et) {
      return {
        ...tt,
        locatorEntries: tt.locatorEntries.map((tt => {
          const Vt = tt.locatorEntryId === et;
          return tt.locatorEntryArmed === Vt ? tt : {
            ...tt,
            locatorEntryArmed: Vt
          }
        }))
      }
    }

    function Be(tt, et) {
      return {
        locatorNoticeKey: tt,
        locatorNoticeRefused: !1,
        locatorNoticeName: et
      }
    }
    const pe = "containmentLocatorView";
    class xe extends ee {
      constructor(tt, et, Vt, Ot) {
        super(tt, et, Vt, Ot, "locator", ie), this.snapshot = this.buildSnapshot()
      }
      messageOpens(tt) {
        return tt.locatorMessageOpens
      }
      messageNotice(tt) {
        return tt.locatorNotice
      }
      openingSelection(tt) {
        var et;
        const Vt = tt.locatorEntries;
        return (null !== (et = Vt.find((tt => tt.locatorEntryArmed))) && void 0 !== et ? et : Vt[0]).locatorEntryId
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
    const Te = {
        locatorContained: `${vt}:locatorFlavourContained`,
        locatorEncountered: `${vt}:locatorFlavourEncountered`,
        locatorUnseen: `${vt}:locatorFlavourUnseen`
      },
      ge = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${vt}:locatorAttunedNormal`,
        codexHardOnly: `${vt}:locatorAttunedHard`
      };

    function se() {
      return (0, ht.jsx)(ht.Fragment, {
        children: Array.from({
          length: 5
        }, ((tt, et) => (0, ht.jsx)("span", {
          className: "LocatorFly",
          children: (0, ht.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, et)))
      })
    }

    function ne(tt) {
      let {
        entry: et
      } = tt;
      const {
        t: Vt
      } = (0, Qt.H)();
      return et.locatorEntryArmed ? (0, ht.jsx)("span", {
        className: "BoardBadge Armed",
        children: Vt(`${vt}:locatorArmedBadge`)
      }) : et.locatorEntryOwned ? (0, ht.jsx)("span", {
        className: "BoardBadge",
        children: Vt(`${vt}:locatorOwnedBadge`)
      }) : null
    }

    function tV(tt) {
      let {
        entry: et,
        coins: Vt,
        inTile: Ot = !1
      } = tt;
      return (0, ht.jsx)(It, {
        itemName: Wt,
        amount: et.locatorEntryPrice,
        Pd: Vt,
        inTile: Ot
      })
    }

    function eV(tt) {
      let {
        view: et,
        controller: Vt,
        entry: Ot
      } = tt;
      const {
        t: qt
      } = (0, Qt.H)(), Dt = Ot.locatorEntryId, mt = et.locators.locatorEntries.find((tt => tt.locatorEntryArmed && tt !== Ot));
      return (0, ht.jsxs)("div", {
        className: "BoardActions",
        children: [Ot.locatorEntryArmed && (0, ht.jsx)(ft.Q, {
          disabled: et.pending,
          onClick: () => {
            Vt.act("locatorDisarm", Dt)
          },
          children: qt(`${vt}:locatorDisarm`)
        }), Ot.locatorEntryOwned && !Ot.locatorEntryArmed && (0, ht.jsx)(ft.f, {
          disabled: et.pending,
          onClick: () => {
            Vt.act("locatorArm", Dt)
          },
          children: qt(`${vt}:locatorArm`)
        }), !Ot.locatorEntryOwned && (0, ht.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, ht.jsx)(tV, {
            entry: Ot,
            coins: et.locators.locatorCoins
          }), (0, ht.jsx)(ft.m, {
            disabled: et.locators.locatorCoins < Ot.locatorEntryPrice || et.pending,
            onClick: () => {
              Vt.act("locatorBuy", Dt)
            },
            children: qt(`${vt}:locatorBuy`)
          })]
        }), mt && !Ot.locatorEntryArmed && (0, ht.jsx)("span", {
          className: "BoardHint",
          children: qt(`${vt}:locatorReplacesHint`, {
            name: mt.locatorEntryName
          })
        })]
      })
    }

    function VV(tt) {
      let {
        entry: et
      } = tt;
      return "locatorUnseen" === et.locatorEntryStanding ? (0, ht.jsx)(ct, {
        itemName: "Compass"
      }) : (0, ht.jsx)(Rt, {
        anomalyId: et.locatorEntryId,
        caught: "locatorContained" === et.locatorEntryStanding
      })
    }

    function OV(tt) {
      let {
        view: et,
        controller: Vt,
        entry: Ot
      } = tt;
      const {
        t: qt
      } = (0, Qt.H)(), Dt = ge[Ot.locatorEntryDifficulty];
      return (0, ht.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, ht.jsxs)("div", {
          className: Ht()("LocatorLabel", {
            Armed: Ot.locatorEntryArmed
          }),
          children: [(0, ht.jsx)(Ft, {
            icon: (0, ht.jsx)(VV, {
              entry: Ot
            }),
            name: qt(`${vt}:locatorName`, {
              name: Ot.locatorEntryName
            }),
            children: (0, ht.jsx)(ne, {
              entry: Ot
            })
          }), (0, ht.jsx)("p", {
            className: "BoardDescription",
            children: qt(Ot.locatorEntryArmed ? `${vt}:locatorFlavourArmed` : Te[Ot.locatorEntryStanding])
          }), null !== Dt && (0, ht.jsx)("p", {
            className: "LocatorAttuned",
            children: qt(Dt)
          }), (0, ht.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: qt(`${vt}:locatorUsage`)
          })]
        }), (0, ht.jsx)(eV, {
          view: et,
          controller: Vt,
          entry: Ot
        })]
      })
    }

    function qV(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Xt.h)(pe, et.getSnapshot()),
        {
          t: Ot
        } = (0, Qt.H)(),
        qt = Vt.locators;
      if (null === qt) return null;
      const Dt = qt.locatorEntries.find((tt => tt.locatorEntryId === Vt.selectedId)),
        mt = Vt.notice;
      return (0, ht.jsxs)(St, {
        open: Vt.open,
        onDismiss: et.dismiss,
        title: Ot(`${vt}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, ht.jsx)(se, {}),
        headerExtra: (0, ht.jsx)(kt, {
          coins: qt.locatorCoins
        }),
        statusRefused: null === mt || void 0 === mt ? void 0 : mt.locatorNoticeRefused,
        status: (0, ht.jsxs)(ht.Fragment, {
          children: [(0, ht.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Ot(`${vt}:locatorKeeperName`)
          }), null !== mt && Ot(`${vt}:${mt.locatorNoticeKey}`, {
            name: mt.locatorNoticeName
          })]
        }),
        children: [(0, ht.jsx)("div", {
          className: "BoardTiles",
          children: qt.locatorEntries.map((tt => (0, ht.jsxs)(Lt, {
            icon: (0, ht.jsx)(VV, {
              entry: tt
            }),
            name: tt.locatorEntryName,
            selected: tt === Dt,
            locked: !1,
            className: Ht()("LocatorTag", {
              Armed: tt.locatorEntryArmed
            }),
            onSelect: () => {
              et.select(tt.locatorEntryId)
            },
            children: [(0, ht.jsx)(ne, {
              entry: tt
            }), !tt.locatorEntryOwned && (0, ht.jsx)(tV, {
              entry: tt,
              coins: qt.locatorCoins,
              inTile: !0
            })]
          }, tt.locatorEntryId)))
        }), (0, ht.jsx)(OV, {
          view: Vt,
          controller: et,
          entry: Dt
        })]
      })
    }

    function DV(tt) {
      let {
        loadout: et,
        codex: Vt,
        locator: Ot
      } = tt;
      return (0, ht.jsxs)(ht.Fragment, {
        children: [(0, ht.jsx)(Ae, {
          controller: et
        }), (0, ht.jsx)(nt, {
          controller: Vt
        }), (0, ht.jsx)(qV, {
          controller: Ot
        })]
      })
    }
    var mV = Vt(38760);
    class dV {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = tt, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new mV.e({
          spacingMs: 0,
          now: et
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(tt, et) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, et(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(tt), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const tt of this.listeners) tt()
      }
    }
    var jV = Vt(38758);
    const HV = new Map([
      ["npc_general", ye],
      ["npc_tentacle_guy", jV]
    ]);

    function XV(tt) {
      const et = HV.get(tt);
      if (void 0 === et) return null;
      const Vt = document.createElement("img");
      return Vt.src = et, Vt.alt = "", Vt.draggable = !1, Vt.style.imageRendering = "pixelated", Vt
    }
    const QV = function() {
      let tt, et = !1,
        Vt = null,
        jt = null;
      const Ht = [],
        Xt = tt => {
          for (const et of Ht) et !== tt && et.close();
          (0, dt.m)()
        },
        Qt = tt => {
          tt && (0, dt.g)()
        },
        lt = new dV((et => {
          tt.sendCommand(et)
        })),
        Et = new fe((tt => {
          mt.j.sw(Ee, tt, !0)
        }), Xt, Qt, lt),
        ft = new ot((tt => {
          mt.j.sw(zt, tt, !0)
        }), Xt, Qt),
        wt = new xe((tt => {
          mt.j.sw(pe, tt, !0)
        }), Xt, Qt, lt);
      Ht.push(Et, ft, wt);
      return {
        onCreate: et => {
          tt = et, Vt = (0, dt.q)(null, {
            content: (0, Ot.createElement)(DV, {
              loadout: Et,
              codex: ft,
              locator: wt
            }),
            onClose: () => {
              for (const tt of Ht) tt.close()
            }
          }), jt = (0, Dt.e)(XV)
        },
        onReceivedMessageFromServer: (tt, et) => {
          "containmentLoadout" === tt ? Et.Qf(et) : "containmentLoadoutClose" === tt ? Et.isOpen() && (Et.close(), (0, dt.c)()) : "containmentCodex" === tt ? ft.Qf(et) : "containmentLocator" === tt && wt.Qf(et)
        },
        BQ: () => {
          et || qt.b.get("loadingOverlayVisible") || (et = !0, tt.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var tt, et;
          null === (tt = Vt) || void 0 === tt || tt(), Vt = null, null === (et = jt) || void 0 === et || et(), jt = null;
          for (const Vt of Ht) Vt.dispose();
          lt.dispose()
        }
      }
    }
  },
  39509: (tt, et, Vt) => {
    var Ot = {
      "./breach-zero-uncaught.webp": 39518,
      "./breach-zero.webp": 39526,
      "./brood-father-uncaught.webp": 39535,
      "./brood-father.webp": 39540,
      "./carousel-uncaught.webp": 39546,
      "./carousel.webp": 39552,
      "./deadlock-uncaught.webp": 39559,
      "./deadlock.webp": 39561,
      "./frost-revenant-uncaught.webp": 39566,
      "./frost-revenant.webp": 39571,
      "./hollow-choir-uncaught.webp": 39580,
      "./hollow-choir.webp": 39583,
      "./magma-warden-uncaught.webp": 39587,
      "./magma-warden.webp": 39594,
      "./patient-zero-uncaught.webp": 39599,
      "./patient-zero.webp": 39607,
      "./siege-engine-uncaught.webp": 39614,
      "./siege-engine.webp": 39616,
      "./warp-stalker-uncaught.webp": 39620,
      "./warp-stalker.webp": 39624
    };

    function qt(tt) {
      var et = Dt(tt);
      return Vt(et)
    }

    function Dt(tt) {
      if (!Vt.o(Ot, tt)) {
        var et = new Error("Cannot find module '" + tt + "'");
        throw et.code = "MODULE_NOT_FOUND", et
      }
      return Ot[tt]
    }
    qt.keys = function() {
      return Object.keys(Ot)
    }, qt.resolve = Dt, tt.exports = qt, qt.id = 39509
  },
  39518: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39526: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39535: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39540: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39546: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39552: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39559: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39561: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39566: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39571: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39580: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39583: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39587: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39594: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39599: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39607: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39614: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39616: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39620: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39624: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38758: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);