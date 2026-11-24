export const id = 14;
export const ids = [14];
export const modules = {
  38693: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    const WT = 4,
      zT = 12e3,
      MT = 1e3;
    class gT {
      constructor() {
        let {
          limit: TT = WT,
          windowMs: UT = zT,
          spacingMs: mT = MT,
          now: gT = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = TT, this.windowMs = UT, this.spacingMs = mT, this.now = gT
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const TT of this.priority) TT.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const TT = this.now();
        this.sent.push(TT), this.lastSentAt = TT, this.schedule(), this.notify()
      }
      addPriority(TT) {
        return this.priority.add(TT), () => {
          this.priority.delete(TT)
        }
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const TT of this.priority)
          if (TT.waiting()) return !0;
        return !1
      }
      prune() {
        const TT = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= TT;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const TT = this.now(),
          UT = this.lastSentAt + this.spacingMs,
          mT = Math.min(UT > TT ? UT : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        mT !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, mT - TT)))
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38667: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    class WT {
      constructor(TT, UT, mT) {
        this.EZ = TT, this.beforeOpen = UT, this.afterClose = mT, this.open = !1, this.kB = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.kB && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(TT) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(TT)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.kB = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.kB || (this.snapshot = this.buildSnapshot(), this.EZ(this.snapshot))
      }
    }
  },
  39420: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => jm
    });
    var WT = mT(63);
    var zT = mT(25),
      MT = mT(2031),
      gT = mT(31),
      nT = mT(36693),
      HT = mT(1126),
      kT = mT.n(HT),
      jT = mT(1567),
      lT = mT(1288),
      LT = mT(4639),
      pT = mT(1452),
      BT = mT(1569),
      ZT = mT(2034),
      cT = mT(1475),
      vT = mT(2023),
      fT = mT(2089),
      qT = mT(218);
    const iT = mT(39428),
      bT = Object.fromEntries(iT.keys().map((TT => [TT.replace(/^\.\/(.*)\.webp$/, "$1"), iT(TT)]))),
      OT = new Set;

    function eT(TT, UT) {
      const mT = UT ? TT : `${TT}-uncaught`,
        WT = (0, qT.b)(bT, mT);
      return void 0 !== WT || OT.has(mT) || (OT.add(mT), console.warn(`Containment Breach has no mugshot ${mT}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), WT
    }
    var YT = mT(1188);
    const JT = "containmentBreach",
      xT = "Gold Coin";

    function dT(TT) {
      let {
        open: UT,
        onDismiss: mT,
        title: WT,
        className: zT,
        decor: MT,
        headerExtra: gT,
        status: nT,
        statusRefused: HT = !1,
        children: jT
      } = TT;
      const lT = `${zT}Title`;
      return (0, YT.jsx)(LT.e, {
        show: UT,
        close: mT,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, YT.jsxs)("section", {
          className: kT()("ContainmentBoardPanel", zT),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": lT,
          children: [MT && (0, YT.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: MT
          }), (0, YT.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, YT.jsx)("h2", {
              id: lT,
              className: "VisuallyHidden",
              children: WT
            }), gT, (0, YT.jsx)(BT.k, {
              onClick: mT
            })]
          }), (0, YT.jsx)("div", {
            className: "BoardBody",
            children: jT
          }), void 0 !== nT && (0, YT.jsx)("footer", {
            className: kT()("BoardStatus", {
              Refused: HT
            }),
            children: nT
          })]
        })
      })
    }

    function wT(TT) {
      let {
        itemName: UT
      } = TT;
      return (0, YT.jsx)(ZT.b, {
        itemName: UT,
        amount: 0
      })
    }

    function tT(TT) {
      let {
        anomalyId: UT,
        caught: mT
      } = TT;
      const zT = (0, WT.useRef)(null);
      return (0, pT.c)(zT, !mT), (0, YT.jsx)("span", {
        ref: zT,
        className: kT()("BoardMugshot", {
          Uncaught: !mT
        }),
        children: (0, YT.jsx)("img", {
          src: eT(UT, mT),
          alt: "",
          draggable: !1
        })
      })
    }

    function aT(TT) {
      let {
        itemName: UT,
        amount: mT,
        fn: WT,
        inTile: zT = !1
      } = TT;
      return (0, YT.jsx)(cT.e, {
        delayShow: 200,
        hoverOnly: zT,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, YT.jsx)(XT, {
          itemName: UT,
          amount: mT,
          fn: WT
        }),
        children: (0, YT.jsxs)("span", {
          className: kT()("BoardChip", {
            Short: void 0 !== WT && WT < mT
          }),
          children: [(0, YT.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, YT.jsx)(wT, {
              itemName: UT
            })
          }), mT.toLocaleString()]
        })
      })
    }
    const yT = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function XT(TT) {
      var UT;
      let {
        itemName: mT,
        amount: WT,
        fn: zT
      } = TT;
      const {
        t: MT
      } = (0, lT.z)(), gT = (0, fT.f)("itemInfo", (TT => TT[mT])), {
        lore: nT,
        droppedBy: HT
      } = function(TT) {
        if ("string" !== typeof TT) return {
          lore: TT,
          droppedBy: null
        };
        const UT = yT.exec(TT);
        return null === UT ? {
          lore: TT,
          droppedBy: null
        } : {
          lore: "" === UT[1] ? void 0 : UT[1],
          droppedBy: UT[2]
        }
      }(null === gT || void 0 === gT ? void 0 : gT.description);
      return (0, YT.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, YT.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, YT.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, YT.jsx)(wT, {
              itemName: mT
            })
          }), (0, YT.jsx)(vT.e, {
            text: null !== (UT = null === gT || void 0 === gT ? void 0 : gT.displayName) && void 0 !== UT ? UT : mT,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== nT || null !== HT) && (0, YT.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== nT && (0, YT.jsx)(vT.e, {
            text: nT,
            className: "BoardChipTooltipDescription"
          }), null !== HT && (0, YT.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, YT.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: MT(`${JT}:chipDroppedBy`)
            }), HT]
          })]
        }), void 0 !== zT && (0, YT.jsxs)("div", {
          className: kT()("BoardChipTooltipHeld", {
            Short: zT < WT
          }),
          children: [(0, YT.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: MT(`${JT}:chipYouHave`)
          }), (0, YT.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, YT.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: zT.toLocaleString()
            }), ` / ${WT.toLocaleString()}`]
          }), (0, YT.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, YT.jsx)("span", {
              style: {
                width: (WT > 0 ? 100 * Math.min(1, zT / WT) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function IT(TT) {
      let {
        icon: UT,
        name: mT,
        selected: WT,
        locked: zT,
        className: MT,
        buttonRef: gT,
        onSelect: nT,
        children: HT
      } = TT;
      return (0, YT.jsxs)("button", {
        ref: gT,
        type: "button",
        className: kT()("BoardTile", MT, {
          Selected: WT,
          Locked: zT
        }),
        onClick: nT,
        children: [(0, YT.jsx)("span", {
          className: "BoardTileIcon",
          children: UT
        }), (0, YT.jsx)("span", {
          className: "BoardTileName",
          children: mT
        }), HT]
      })
    }

    function QT(TT) {
      let {
        icon: UT,
        name: mT,
        children: WT
      } = TT;
      return (0, YT.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, YT.jsx)("span", {
          className: "BoardDetailIcon",
          children: UT
        }), (0, YT.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, YT.jsx)("h3", {
            children: mT
          }), (0, YT.jsx)("span", {
            className: "BoardDetailStatus",
            children: WT
          })]
        })]
      })
    }

    function sT(TT) {
      let {
        coins: UT,
        children: mT
      } = TT;
      return (0, YT.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, YT.jsx)(aT, {
          itemName: xT,
          amount: UT
        }), mT]
      })
    }
    var FT = mT(38667);
    const PT = "containmentCodexView";
    class VT extends FT.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = TT => {
          this.selectedId = TT, this.emit()
        }
      }
      pB(TT) {
        this.entries = TT.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const uT = {
        codexAnyDifficulty: `${JT}:codexNeedsAny`,
        codexNormalOnly: `${JT}:codexNeedsNormal`,
        codexHardOnly: `${JT}:codexNeedsHard`
      },
      CT = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      rT = {
        codexContained: `${JT}:codexContainedBadge`,
        codexEncountered: `${JT}:codexEncounteredBadge`,
        codexUnidentified: `${JT}:codexUnidentifiedBadge`
      },
      KT = ["94%", "81%", "88%", "46%", "72%"];

    function ST(TT) {
      let {
        entry: UT
      } = TT;
      const {
        t: mT
      } = (0, lT.z)();
      return (0, YT.jsx)("span", {
        className: kT()("BoardBadge", CT[UT.codexEntryState]),
        children: mT(rT[UT.codexEntryState])
      })
    }

    function GT(TT) {
      const {
        t: UT
      } = (0, lT.z)();
      return "codexUnidentified" === TT.codexEntryState ? UT(`${JT}:codexUnidentifiedName`) : TT.codexEntryName
    }

    function NT(TT) {
      let {
        entry: UT
      } = TT;
      return "codexUnidentified" === UT.codexEntryState ? (0, YT.jsx)(wT, {
        itemName: "Book"
      }) : (0, YT.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, YT.jsx)(tT, {
          anomalyId: UT.codexEntryId,
          caught: "codexContained" === UT.codexEntryState
        }), (0, YT.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function ET(TT) {
      let {
        entry: UT,
        selected: mT,
        onSelect: WT
      } = TT;
      const zT = "codexUnidentified" === UT.codexEntryState;
      return (0, YT.jsxs)(IT, {
        icon: (0, YT.jsx)(NT, {
          entry: UT
        }),
        name: GT(UT),
        selected: mT,
        locked: zT,
        className: kT()("CodexFolder", CT[UT.codexEntryState]),
        onSelect: () => {
          WT(UT.codexEntryId)
        },
        children: [!zT && (0, YT.jsx)(ST, {
          entry: UT
        }), zT && (0, YT.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function hT(TT) {
      let {
        count: UT
      } = TT;
      const mT = [];
      for (let WT = Math.min(UT, 25); WT > 0; WT -= 5) mT.push(Math.min(WT, 5));
      return (0, YT.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: mT.map(((TT, UT) => (0, YT.jsx)("span", {
          className: kT()("CodexTallyGroup", {
            Gate: 5 === TT
          }),
          children: Array.from({
            length: Math.min(TT, 4)
          }, ((TT, UT) => (0, YT.jsx)("span", {
            className: "CodexTallyMark"
          }, UT)))
        }, UT)))
      })
    }

    function DT(TT) {
      let {
        contained: UT,
        total: mT
      } = TT;
      const {
        t: WT
      } = (0, lT.z)();
      return (0, YT.jsxs)("div", {
        className: "CodexProgress",
        children: [WT(`${JT}:codexProgress`, {
          contained: String(UT),
          total: String(mT)
        }), (0, YT.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, YT.jsx)("span", {
            style: {
              width: UT / mT * 100 + "%"
            }
          })
        })]
      })
    }

    function oT(TT) {
      let {
        entry: UT,
        fileNumber: mT
      } = TT;
      const {
        t: WT
      } = (0, lT.z)(), zT = "codexContained" === UT.codexEntryState;
      return (0, YT.jsx)("section", {
        className: "BoardDetail",
        children: (0, YT.jsxs)("article", {
          className: kT()("CodexDossier", CT[UT.codexEntryState]),
          children: [(0, YT.jsx)("span", {
            className: "CodexFileNumber",
            children: WT(`${JT}:codexFileNumber`, {
              number: String(mT).padStart(3, "0")
            })
          }), (0, YT.jsx)(QT, {
            icon: (0, YT.jsx)(NT, {
              entry: UT
            }),
            name: GT(UT),
            children: (0, YT.jsx)(ST, {
              entry: UT
            })
          }), zT && (0, YT.jsxs)(YT.Fragment, {
            children: [(0, YT.jsx)("p", {
              className: "BoardDescription",
              children: UT.codexEntryLore
            }), (0, YT.jsxs)("p", {
              className: "CodexTally",
              children: [WT(`${JT}:codexContainments`, {
                count: String(UT.codexEntryContainedCount)
              }), (0, YT.jsx)(hT, {
                count: UT.codexEntryContainedCount
              })]
            }), (0, YT.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: WT(`${JT}:codexContainedBadge`)
            })]
          }), !zT && (0, YT.jsxs)(YT.Fragment, {
            children: [(0, YT.jsxs)("div", {
              className: "CodexRedaction",
              children: [KT.map((TT => (0, YT.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: TT
                }
              }, TT))), (0, YT.jsx)("p", {
                className: "CodexRedacted",
                children: WT(`${JT}:codexRedacted`)
              })]
            }), "" !== UT.codexEntryHint && (0, YT.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, YT.jsx)("h4", {
                children: WT(`${JT}:codexHintLabel`)
              }), (0, YT.jsx)("p", {
                children: UT.codexEntryHint
              })]
            }), (0, YT.jsx)("p", {
              className: "CodexClearance",
              children: WT(uT[UT.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function AT(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, jT.j)(PT, UT.getSnapshot()),
        {
          t: WT
        } = (0, lT.z)();
      if (0 === mT.entries.length) return null;
      const zT = mT.entries.find((TT => TT.codexEntryId === mT.selectedId)),
        MT = mT.entries.filter((TT => "codexContained" === TT.codexEntryState)).length,
        gT = mT.entries.map((TT => TT.codexEntryId)).sort().indexOf(zT.codexEntryId) + 1;
      return (0, YT.jsxs)(dT, {
        open: mT.open,
        onDismiss: UT.dismiss,
        title: WT(`${JT}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, YT.jsx)(DT, {
          contained: MT,
          total: mT.entries.length
        }),
        children: [(0, YT.jsx)("div", {
          className: "BoardTiles",
          children: mT.entries.map((TT => (0, YT.jsx)(ET, {
            entry: TT,
            selected: TT === zT,
            onSelect: UT.select
          }, TT.codexEntryId)))
        }), (0, YT.jsx)(oT, {
          entry: zT,
          fileNumber: gT
        })]
      })
    }
    var RT = mT(366);
    class TU extends FT.e {
      constructor(TT, UT, mT, WT, zT, MT) {
        super(TT, UT, mT), this.pacer = WT, this.command = zT, this.predict = MT, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = TT => {
          this.selectedId = TT, this.emit()
        }, this.act = (TT, UT) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${TT} ${UT}`, this.rollBack)) return;
          const mT = this.predict(this.board, TT, UT);
          null !== mT && (this.board = mT.board, this.notice = mT.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = WT.subscribe((() => {
          this.emit()
        }))
      }
      pB(TT) {
        const UT = this.messageOpens(TT);
        if (UT && this.open) return this.board === this.confirmed && (this.board = TT), this.confirmed = TT, void this.emit();
        if (this.board = TT, this.confirmed = TT, this.pacer.onReply(), UT) return this.notice = null, this.selectedId = this.openingSelection(TT), void this.show();
        const mT = this.messageNotice(TT);
        null !== mT && (this.notice = mT), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function UU(TT, UT) {
      return TT.loadoutCoins >= UT.loadoutCostCoins && UT.loadoutCostParts.every((UT => function(TT, UT) {
        return mU(TT, UT).loadoutHeldPartAmount
      }(TT, UT.loadoutPartCurrency) >= UT.loadoutPartAmount))
    }

    function mU(TT, UT) {
      return TT.loadoutHeldParts.find((TT => TT.loadoutHeldPartCurrency === UT))
    }

    function WU(TT, UT) {
      return TT.loadoutSlots.find((TT => TT.loadoutSlotKind === UT))
    }

    function zU(TT) {
      return TT.loadoutPerks.filter((TT => TT.loadoutPerkEquipped)).length >= TT.loadoutMaxPerks
    }

    function MU(TT, UT, mT) {
      for (const zT of TT.loadoutSlots) {
        const WT = zT.loadoutSlotOptions.find((TT => TT.loadoutOptionId === mT));
        if (WT) return "loadoutArmour" === zT.loadoutSlotKind ? nU(TT, zT, WT, UT) : gU(TT, zT, WT, UT)
      }
      const WT = TT.loadoutPerks.find((TT => TT.loadoutPerkId === mT));
      return WT ? function(TT, UT, mT) {
        const WT = UT.loadoutPerkOwned,
          zT = UT.loadoutPerkEquipped,
          MT = UT.loadoutPerkName,
          gT = zU(TT);
        if ("loadoutUnlock" === mT) {
          if (WT || !UU(TT, UT.loadoutPerkCost)) return null;
          const mT = {
            ...UT,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !gT
          };
          return {
            board: kU(jU(TT, UT.loadoutPerkCost), mT),
            notice: lU(gT ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", MT)
          }
        }
        if ("loadoutUpgrade" === mT || !WT || "loadoutEquip" === mT === zT || !zT && gT) return null;
        return {
          board: kU(TT, {
            ...UT,
            loadoutPerkEquipped: !zT
          }),
          notice: lU(zT ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", MT)
        }
      }(TT, WT, UT) : null
    }

    function gU(TT, UT, mT, WT) {
      const zT = mT.loadoutOptionOwnedTier,
        MT = mT.loadoutOptionName;
      if ("loadoutEquip" === WT) return 0 === zT ? null : {
        board: HU(TT, UT, mT.loadoutOptionId, null),
        notice: lU("loadoutNoticeEquipped", MT)
      };
      const gT = "loadoutUnlock" === WT;
      if (gT && 0 !== zT || "loadoutUpgrade" === WT && (0 === zT || zT >= mT.loadoutOptionTiers.length) || "loadoutUnequip" === WT) return null;
      const nT = mT.loadoutOptionTiers[zT].loadoutTierCost;
      if (!UU(TT, nT)) return null;
      const HT = {
          ...mT,
          loadoutOptionOwnedTier: zT + 1
        },
        kT = gT ? mT.loadoutOptionId : UT.loadoutSlotEquippedId;
      return {
        board: HU(jU(TT, nT), UT, kT, HT),
        notice: gT ? lU("loadoutNoticeUnlocked", MT) : lU("loadoutNoticeUpgraded", MT, zT + 1)
      }
    }

    function nU(TT, UT, mT, WT) {
      const zT = mT.loadoutOptionOwnedTier > 0,
        MT = mT.loadoutOptionName;
      if ("loadoutEquip" === WT && zT) return {
        board: HU(TT, UT, mT.loadoutOptionId, null),
        notice: lU("loadoutNoticeEquipped", MT)
      };
      const gT = mT.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== WT || zT || !UU(TT, gT) ? null : {
        board: HU(jU(TT, gT), UT, mT.loadoutOptionId, {
          ...mT,
          loadoutOptionOwnedTier: 1
        }),
        notice: lU("loadoutNoticeUnlocked", MT)
      }
    }

    function HU(TT, UT, mT, WT) {
      const zT = {
        ...UT,
        loadoutSlotEquippedId: mT,
        loadoutSlotOptions: UT.loadoutSlotOptions.map((TT => null !== WT && TT.loadoutOptionId === WT.loadoutOptionId ? WT : TT))
      };
      return {
        ...TT,
        loadoutSlots: TT.loadoutSlots.map((TT => TT === UT ? zT : TT))
      }
    }

    function kU(TT, UT) {
      return {
        ...TT,
        loadoutPerks: TT.loadoutPerks.map((TT => TT.loadoutPerkId === UT.loadoutPerkId ? UT : TT))
      }
    }

    function jU(TT, UT) {
      return {
        ...TT,
        loadoutCoins: TT.loadoutCoins - UT.loadoutCostCoins,
        loadoutHeldParts: TT.loadoutHeldParts.map((TT => {
          const mT = UT.loadoutCostParts.find((UT => UT.loadoutPartCurrency === TT.loadoutHeldPartCurrency));
          return mT ? {
            ...TT,
            loadoutHeldPartAmount: TT.loadoutHeldPartAmount - mT.loadoutPartAmount
          } : TT
        }))
      }
    }

    function lU(TT, UT) {
      return {
        loadoutNoticeKey: TT,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: UT,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const LU = "containmentLoadoutView";
    class pU extends TU {
      constructor(TT, UT, mT, WT) {
        super(TT, UT, mT, WT, "loadout", MU), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = TT => {
          this.slot = TT, this.selectedId = BU(this.board, TT), this.emit()
        }
      }
      messageOpens(TT) {
        return TT.loadoutMessageOpens
      }
      messageNotice(TT) {
        return TT.loadoutNotice
      }
      openingSelection(TT) {
        return BU(TT, this.slot)
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

    function BU(TT, UT) {
      if ("loadoutPerks" === UT) {
        var mT;
        const UT = TT.loadoutPerks;
        return (null !== (mT = UT.find((TT => TT.loadoutPerkEquipped))) && void 0 !== mT ? mT : UT[0]).loadoutPerkId
      }
      return WU(TT, UT).loadoutSlotEquippedId
    }
    const ZU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var cU = mT(36974),
      vU = mT(1376);
    const fU = {
        loadoutPrimary: `${JT}:loadoutSlotPrimary`,
        loadoutSecondary: `${JT}:loadoutSlotSecondary`,
        loadoutOffensive: `${JT}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${JT}:loadoutSlotSelfHelp`,
        loadoutArmour: `${JT}:loadoutSlotArmour`,
        loadoutPerks: `${JT}:loadoutSlotPerks`
      },
      qU = {
        section: "right",
        VL: "bottom",
        act: "top"
      },
      iU = (0, WT.createContext)({
        step: null,
        targetRef: () => {}
      });

    function bU() {
      const {
        step: TT,
        targetRef: UT
      } = (0, WT.useContext)(iU);
      return (mT, WT) => (null === TT || void 0 === TT ? void 0 : TT.kind) === mT && TT.id === WT ? UT : void 0
    }

    function OU(TT, UT) {
      const mT = UT.loadoutTargetId;
      if ("loadoutPerks" === UT.loadoutTargetSection) {
        const UT = TT.loadoutPerks.find((TT => TT.loadoutPerkId === mT));
        return {
          name: UT.loadoutPerkName,
          owned: UT.loadoutPerkOwned,
          equipped: UT.loadoutPerkEquipped
        }
      }
      const WT = WU(TT, UT.loadoutTargetSection),
        zT = WT.loadoutSlotOptions.find((TT => TT.loadoutOptionId === mT));
      return {
        name: zT.loadoutOptionName,
        owned: zT.loadoutOptionOwnedTier > 0,
        equipped: WT.loadoutSlotEquippedId === mT
      }
    }

    function eU(TT, UT, mT, WT) {
      const [zT, MT] = TT(`${JT}:${UT}`, {
        [mT]: "\x01"
      }).split("\x01");
      return (0, YT.jsxs)(YT.Fragment, {
        children: [zT, (0, YT.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: WT
        }), MT]
      })
    }

    function YU(TT) {
      let {
        view: UT,
        onDismiss: mT,
        children: zT
      } = TT;
      const {
        t: MT
      } = (0, lT.z)(), gT = UT.loadout, nT = UT.open ? gT.loadoutWalkthrough.map((TT => ({
        target: TT,
        info: OU(gT, TT)
      }))).find((TT => {
        let {
          info: UT
        } = TT;
        return !UT.equipped
      })) : void 0;
      let HT = null,
        kT = null;
      if (void 0 !== nT) {
        const {
          target: TT,
          info: mT
        } = nT;
        UT.slot !== TT.loadoutTargetSection ? (HT = {
          kind: "section",
          id: TT.loadoutTargetSection
        }, kT = eU(MT, "loadoutWalkthroughSection", "section", MT(fU[TT.loadoutTargetSection]))) : UT.selectedId !== TT.loadoutTargetId ? (HT = {
          kind: "VL",
          id: TT.loadoutTargetId
        }, kT = eU(MT, "loadoutWalkthroughPick", "name", mT.name)) : (HT = {
          kind: "act",
          id: TT.loadoutTargetId
        }, kT = eU(MT, mT.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", mT.name))
      }
      const jT = null === HT ? null : function(TT) {
          return `${TT.kind}:${TT.id}`
        }(HT),
        [LT, pT] = (0, WT.useState)(null),
        BT = (0, WT.useCallback)((TT => {
          pT((UT => null !== TT ? {
            key: jT,
            node: TT
          } : (null === UT || void 0 === UT ? void 0 : UT.key) === jT ? null : UT))
        }), [jT]),
        ZT = null !== jT && (null === LT || void 0 === LT ? void 0 : LT.key) === jT ? LT.node : null;
      return (0, YT.jsxs)(iU.Provider, {
        value: {
          step: HT,
          targetRef: BT
        },
        children: [zT, null !== HT && null !== ZT && (0, YT.jsx)(JU, {
          target: ZT,
          placement: qU[HT.kind],
          onDismiss: mT,
          children: kT
        }, jT)]
      })
    }

    function JU(TT) {
      let {
        target: UT,
        placement: mT,
        onDismiss: zT,
        children: MT
      } = TT;
      const {
        t: gT
      } = (0, lT.z)(), nT = (0, WT.useRef)(UT);
      return nT.current = UT, (0, vU.p)("popup", nT, zT), (0, YT.jsxs)(cU.d, {
        target: UT,
        placement: mT,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, YT.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, YT.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: ZU,
            alt: "",
            draggable: !1
          }), (0, YT.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: gT(`${JT}:operatorName`)
          }), (0, YT.jsx)(BT.k, {
            onClick: zT,
            ariaLabel: gT(`${JT}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, YT.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: MT
        })]
      })
    }
    const xU = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function dU(TT) {
      let {
        cost: UT,
        loadout: mT
      } = TT;
      const {
        t: WT
      } = (0, lT.z)();
      return UT.loadoutCostCoins <= 0 && 0 === UT.loadoutCostParts.length ? (0, YT.jsx)("span", {
        className: "LoadoutCost",
        children: WT(`${JT}:loadoutFree`)
      }) : (0, YT.jsxs)("span", {
        className: "LoadoutCost",
        children: [UT.loadoutCostCoins > 0 && (0, YT.jsx)(aT, {
          itemName: xT,
          amount: UT.loadoutCostCoins,
          fn: mT.loadoutCoins
        }), UT.loadoutCostParts.map((TT => {
          const UT = mU(mT, TT.loadoutPartCurrency);
          return (0, YT.jsx)(aT, {
            itemName: UT.loadoutHeldPartItem,
            amount: TT.loadoutPartAmount,
            fn: UT.loadoutHeldPartAmount
          }, TT.loadoutPartCurrency)
        }))]
      })
    }
    const wU = {
      loadoutStatFireRate: `${JT}:loadoutUnitPerMinute`,
      loadoutStatReload: `${JT}:loadoutUnitSeconds`,
      loadoutStatResupply: `${JT}:loadoutUnitSeconds`
    };

    function tU(TT) {
      return "loadoutStatPotency" === TT.loadoutStatKind ? (0, RT.Z)(TT.loadoutStatValue) : String(TT.loadoutStatValue)
    }

    function aU(TT) {
      var UT;
      let {
        option: mT
      } = TT;
      const {
        t: WT
      } = (0, lT.z)(), zT = mT.loadoutOptionTiers, MT = null === (UT = zT[0]) || void 0 === UT ? void 0 : UT.loadoutTierStats.map((TT => TT.loadoutStatKind));
      if (!MT || 0 === MT.length) return null;
      const gT = mT.loadoutOptionOwnedTier,
        nT = (TT, UT) => {
          var mT;
          return null === (mT = zT[TT]) || void 0 === mT ? void 0 : mT.loadoutTierStats.find((TT => TT.loadoutStatKind === UT))
        };
      return (0, YT.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, YT.jsx)("thead", {
          children: (0, YT.jsxs)("tr", {
            children: [(0, YT.jsx)("th", {}), zT.map(((TT, UT) => (0, YT.jsx)("th", {
              className: kT()({
                Current: UT + 1 === gT,
                Next: UT === gT
              }),
              children: WT(`${JT}:loadoutTier`, {
                tier: (0, RT.Z)(UT + 1)
              })
            }, UT)))]
          })
        }), (0, YT.jsx)("tbody", {
          children: MT.map((TT => {
            const UT = wU[TT];
            return (0, YT.jsxs)("tr", {
              children: [(0, YT.jsxs)("th", {
                scope: "row",
                children: [WT(`${JT}:${TT}`), UT && (0, YT.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: WT(UT)
                })]
              }), zT.map(((UT, mT) => {
                const WT = nT(mT, TT),
                  zT = mT > 0 ? nT(mT - 1, TT) : void 0,
                  MT = WT && zT ? WT.loadoutStatValue - zT.loadoutStatValue : 0,
                  HT = xU.has(TT) ? MT < 0 : MT > 0,
                  jT = mT === gT;
                return (0, YT.jsxs)("td", {
                  className: kT()({
                    Current: mT + 1 === gT,
                    Next: jT,
                    Gain: HT,
                    Owned: mT < gT
                  }),
                  children: [jT && HT && (0, YT.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: MT < 0 ? "\u25bc" : "\u25b2"
                  }), WT ? tU(WT) : "-"]
                }, mT)
              }))]
            }, TT)
          }))
        })]
      })
    }

    function yU(TT) {
      let {
        view: UT,
        controller: mT,
        slot: WT,
        option: zT
      } = TT;
      const {
        t: MT
      } = (0, lT.z)(), gT = UT.loadout, nT = zT.loadoutOptionOwnedTier, HT = zT.loadoutOptionTiers.length, kT = WT.loadoutSlotEquippedId === zT.loadoutOptionId, jT = nT < HT ? zT.loadoutOptionTiers[nT].loadoutTierCost : null, LT = null !== jT && UU(gT, jT), pT = zT.loadoutOptionId, ZT = bU();
      return (0, YT.jsxs)(YT.Fragment, {
        children: [(0, YT.jsx)(IU, {
          icon: zT.loadoutOptionIcon,
          name: zT.loadoutOptionName,
          status: 0 === nT ? MT(`${JT}:loadoutLocked`) : HT > 1 ? MT(`${JT}:loadoutTier`, {
            tier: (0, RT.Z)(nT)
          }) : null,
          locked: 0 === nT,
          equipped: kT
        }), (0, YT.jsx)("p", {
          className: "BoardDescription",
          children: zT.loadoutOptionDescription
        }), (0, YT.jsx)(aU, {
          option: zT
        }), (0, YT.jsxs)("div", {
          ref: ZT("act", pT),
          className: "BoardActions",
          children: [null !== jT && (0, YT.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, YT.jsx)(dU, {
              cost: jT,
              loadout: gT
            }), (0, YT.jsx)(BT.l, {
              disabled: !LT || UT.pending,
              onClick: () => {
                mT.act(0 === nT ? "loadoutUnlock" : "loadoutUpgrade", pT)
              },
              children: 0 === nT ? MT(`${JT}:loadoutUnlock`) : MT(`${JT}:loadoutUpgrade`, {
                tier: (0, RT.Z)(nT + 1)
              })
            })]
          }), null === jT && HT > 1 && (0, YT.jsx)("span", {
            className: "BoardHint",
            children: MT(`${JT}:loadoutMaxed`)
          }), nT > 0 && !kT && (0, YT.jsx)(BT.e, {
            disabled: UT.pending,
            onClick: () => {
              mT.act("loadoutEquip", pT)
            },
            children: MT(`${JT}:loadoutEquip`)
          })]
        })]
      })
    }

    function XU(TT) {
      let {
        view: UT,
        controller: mT,
        perk: WT
      } = TT;
      const {
        t: zT
      } = (0, lT.z)(), MT = UT.loadout, gT = zU(MT), nT = WT.loadoutPerkId, HT = bU();
      return (0, YT.jsxs)(YT.Fragment, {
        children: [(0, YT.jsx)(IU, {
          icon: WT.loadoutPerkIcon,
          name: WT.loadoutPerkName,
          status: WT.loadoutPerkOwned ? null : zT(`${JT}:loadoutLocked`),
          locked: !WT.loadoutPerkOwned,
          equipped: WT.loadoutPerkEquipped
        }), (0, YT.jsx)("p", {
          className: "BoardDescription",
          children: WT.loadoutPerkDescription
        }), (0, YT.jsxs)("div", {
          ref: HT("act", nT),
          className: "BoardActions",
          children: [!WT.loadoutPerkOwned && (0, YT.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, YT.jsx)(dU, {
              cost: WT.loadoutPerkCost,
              loadout: MT
            }), (0, YT.jsx)(BT.l, {
              disabled: !UU(MT, WT.loadoutPerkCost) || UT.pending,
              onClick: () => {
                mT.act("loadoutUnlock", nT)
              },
              children: zT(`${JT}:loadoutUnlock`)
            })]
          }), WT.loadoutPerkOwned && !WT.loadoutPerkEquipped && (0, YT.jsx)(BT.e, {
            disabled: gT || UT.pending,
            onClick: () => {
              mT.act("loadoutEquip", nT)
            },
            children: zT(`${JT}:loadoutEquip`)
          }), WT.loadoutPerkOwned && !WT.loadoutPerkEquipped && gT && (0, YT.jsx)("span", {
            className: "BoardHint",
            children: zT(`${JT}:loadoutSocketsFullHint`)
          }), WT.loadoutPerkEquipped && (0, YT.jsx)(BT.L, {
            disabled: UT.pending,
            onClick: () => {
              mT.act("loadoutUnequip", nT)
            },
            children: zT(`${JT}:loadoutUnequip`)
          })]
        })]
      })
    }

    function IU(TT) {
      let {
        icon: UT,
        name: mT,
        status: WT,
        locked: zT,
        equipped: MT
      } = TT;
      const {
        t: gT
      } = (0, lT.z)();
      return (0, YT.jsxs)(QT, {
        icon: (0, YT.jsx)(wT, {
          itemName: UT
        }),
        name: mT,
        children: [null !== WT && (0, YT.jsx)("span", {
          className: kT()("LoadoutStatusText", {
            Locked: zT
          }),
          children: WT
        }), MT && (0, YT.jsx)("span", {
          className: "BoardBadge",
          children: gT(`${JT}:loadoutEquippedBadge`)
        })]
      })
    }

    function QU(TT) {
      let {
        view: UT,
        controller: mT
      } = TT;
      const WT = UT.loadout;
      if ("loadoutPerks" === UT.slot) {
        const TT = WT.loadoutPerks.find((TT => TT.loadoutPerkId === UT.selectedId));
        return (0, YT.jsx)("section", {
          className: "BoardDetail",
          children: TT && (0, YT.jsx)(XU, {
            view: UT,
            controller: mT,
            perk: TT
          })
        })
      }
      const zT = WU(WT, UT.slot),
        MT = zT.loadoutSlotOptions.find((TT => TT.loadoutOptionId === UT.selectedId));
      return (0, YT.jsx)("section", {
        className: "BoardDetail",
        children: MT && (0, YT.jsx)(yU, {
          view: UT,
          controller: mT,
          slot: zT,
          option: MT
        })
      })
    }

    function sU(TT) {
      let {
        owned: UT,
        total: mT
      } = TT;
      return mT <= 1 ? null : (0, YT.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: mT
        }, ((TT, mT) => (0, YT.jsx)("span", {
          className: kT()("LoadoutPip", {
            Filled: mT < UT
          })
        }, mT)))
      })
    }

    function FU(TT) {
      let {
        view: UT,
        controller: mT
      } = TT;
      const {
        t: WT
      } = (0, lT.z)(), zT = UT.loadout, MT = bU();
      return (0, YT.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": WT(`${JT}:loadoutKit`),
        children: [zT.loadoutSlots.map((TT => {
          const zT = TT.loadoutSlotOptions.find((UT => UT.loadoutOptionId === TT.loadoutSlotEquippedId));
          return (0, YT.jsxs)("button", {
            ref: MT("section", TT.loadoutSlotKind),
            type: "button",
            className: kT()("LoadoutKitSlot", {
              Selected: UT.slot === TT.loadoutSlotKind
            }),
            onClick: () => {
              mT.selectSlot(TT.loadoutSlotKind)
            },
            children: [(0, YT.jsx)("span", {
              className: "LoadoutKitIcon",
              children: zT && (0, YT.jsx)(wT, {
                itemName: zT.loadoutOptionIcon
              })
            }), (0, YT.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, YT.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, YT.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: WT(fU[TT.loadoutSlotKind])
                }), zT && (0, YT.jsx)(sU, {
                  owned: zT.loadoutOptionOwnedTier,
                  total: zT.loadoutOptionTiers.length
                })]
              }), (0, YT.jsx)("span", {
                className: "LoadoutKitName",
                children: null === zT || void 0 === zT ? void 0 : zT.loadoutOptionName
              })]
            })]
          }, TT.loadoutSlotKind)
        })), (0, YT.jsx)(PU, {
          view: UT,
          controller: mT
        })]
      })
    }

    function PU(TT) {
      let {
        view: UT,
        controller: mT
      } = TT;
      const {
        t: WT
      } = (0, lT.z)(), zT = UT.loadout, MT = zT.loadoutPerks.filter((TT => TT.loadoutPerkEquipped)), gT = bU();
      return (0, YT.jsxs)("button", {
        ref: gT("section", "loadoutPerks"),
        type: "button",
        className: kT()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === UT.slot
        }),
        onClick: () => {
          mT.selectSlot("loadoutPerks")
        },
        children: [(0, YT.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, YT.jsx)("span", {
            className: "LoadoutKitLabel",
            children: WT(fU.loadoutPerks)
          }), (0, YT.jsx)("span", {
            className: "LoadoutPerkCount",
            children: WT(`${JT}:loadoutPerkCount`, {
              equipped: String(MT.length),
              max: String(zT.loadoutMaxPerks)
            })
          })]
        }), (0, YT.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: zT.loadoutMaxPerks
          }, ((TT, UT) => {
            const mT = MT[UT];
            return (0, YT.jsxs)("span", {
              className: kT()("LoadoutSocket", {
                Filled: mT,
                Empty: !mT
              }),
              children: [(0, YT.jsx)("span", {
                className: "LoadoutSocketWell",
                children: mT && (0, YT.jsx)(wT, {
                  itemName: mT.loadoutPerkIcon
                })
              }), (0, YT.jsx)("span", {
                className: "LoadoutSocketName",
                children: mT ? mT.loadoutPerkName : WT(`${JT}:loadoutPerkSocketEmpty`)
              })]
            }, UT)
          }))
        })]
      })
    }

    function VU(TT) {
      let {
        icon: UT,
        name: mT,
        selected: WT,
        equipped: zT,
        locked: MT,
        ownedTier: gT,
        tiers: nT,
        buttonRef: HT,
        onSelect: kT
      } = TT;
      const {
        t: jT
      } = (0, lT.z)();
      return (0, YT.jsxs)(IT, {
        icon: (0, YT.jsx)(wT, {
          itemName: UT
        }),
        name: mT,
        selected: WT,
        locked: MT,
        buttonRef: HT,
        onSelect: kT,
        children: [zT && (0, YT.jsx)("span", {
          className: "BoardBadge",
          children: jT(`${JT}:loadoutEquippedBadge`)
        }), MT && (0, YT.jsx)("span", {
          className: "BoardBadge Muted",
          children: jT(`${JT}:loadoutLocked`)
        }), !MT && (0, YT.jsx)(sU, {
          owned: gT,
          total: nT
        })]
      })
    }

    function uU(TT) {
      let {
        view: UT,
        controller: mT
      } = TT;
      const WT = UT.loadout,
        zT = bU();
      if ("loadoutPerks" === UT.slot) return (0, YT.jsx)("div", {
        className: "BoardTiles",
        children: WT.loadoutPerks.map((TT => (0, YT.jsx)(VU, {
          icon: TT.loadoutPerkIcon,
          name: TT.loadoutPerkName,
          selected: UT.selectedId === TT.loadoutPerkId,
          equipped: TT.loadoutPerkEquipped,
          locked: !TT.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: zT("VL", TT.loadoutPerkId),
          onSelect: () => {
            mT.select(TT.loadoutPerkId)
          }
        }, TT.loadoutPerkId)))
      });
      const MT = WU(WT, UT.slot);
      return (0, YT.jsx)("div", {
        className: "BoardTiles",
        children: MT.loadoutSlotOptions.map((TT => (0, YT.jsx)(VU, {
          icon: TT.loadoutOptionIcon,
          name: TT.loadoutOptionName,
          selected: UT.selectedId === TT.loadoutOptionId,
          equipped: MT.loadoutSlotEquippedId === TT.loadoutOptionId,
          locked: 0 === TT.loadoutOptionOwnedTier,
          ownedTier: TT.loadoutOptionOwnedTier,
          tiers: TT.loadoutOptionTiers.length,
          buttonRef: zT("VL", TT.loadoutOptionId),
          onSelect: () => {
            mT.select(TT.loadoutOptionId)
          }
        }, TT.loadoutOptionId)))
      })
    }

    function CU(TT) {
      let {
        loadout: UT
      } = TT;
      return (0, YT.jsx)(sT, {
        coins: UT.loadoutCoins,
        children: UT.loadoutHeldParts.filter((TT => TT.loadoutHeldPartAmount > 0)).map((TT => (0, YT.jsx)(aT, {
          itemName: TT.loadoutHeldPartItem,
          amount: TT.loadoutHeldPartAmount
        }, TT.loadoutHeldPartCurrency)))
      })
    }

    function rU(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, jT.j)(LU, UT.getSnapshot()),
        {
          t: WT
        } = (0, lT.z)();
      if (null === mT.loadout) return null;
      const zT = mT.notice;
      return (0, YT.jsx)(YU, {
        view: mT,
        onDismiss: UT.dismiss,
        children: (0, YT.jsxs)(dT, {
          open: mT.open,
          onDismiss: UT.dismiss,
          title: WT(`${JT}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, YT.jsx)(CU, {
            loadout: mT.loadout
          }),
          statusRefused: null === zT || void 0 === zT ? void 0 : zT.loadoutNoticeRefused,
          status: (0, YT.jsxs)(YT.Fragment, {
            children: [(0, YT.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: WT(`${JT}:loadoutRadioBadge`)
            }), null !== zT && WT(`${JT}:${zT.loadoutNoticeKey}`, {
              name: zT.loadoutNoticeName,
              tier: (0, RT.Z)(zT.loadoutNoticeTier),
              max: String(mT.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, YT.jsx)(FU, {
            view: mT,
            controller: UT
          }), (0, YT.jsx)(uU, {
            view: mT,
            controller: UT
          }), (0, YT.jsx)(QU, {
            view: mT,
            controller: UT
          })]
        })
      })
    }

    function KU(TT, UT, mT) {
      const WT = TT.locatorEntries.find((TT => TT.locatorEntryId === mT));
      if (!WT) return null;
      const zT = WT.locatorEntryName;
      if ("locatorDisarm" === UT) return WT.locatorEntryArmed ? {
        board: SU(TT, null),
        notice: GU("locatorNoticeDisarmed", zT)
      } : null;
      if ("locatorArm" === UT) return WT.locatorEntryOwned && !WT.locatorEntryArmed ? {
        board: SU(TT, mT),
        notice: GU("locatorNoticeArmed", zT)
      } : null;
      if (WT.locatorEntryOwned || TT.locatorCoins < WT.locatorEntryPrice) return null;
      const MT = SU({
        ...TT,
        locatorCoins: TT.locatorCoins - WT.locatorEntryPrice
      }, mT);
      return {
        board: {
          ...MT,
          locatorEntries: MT.locatorEntries.map((TT => TT.locatorEntryId === mT ? {
            ...TT,
            locatorEntryOwned: !0
          } : TT))
        },
        notice: GU("locatorNoticeBought", zT)
      }
    }

    function SU(TT, UT) {
      return {
        ...TT,
        locatorEntries: TT.locatorEntries.map((TT => {
          const mT = TT.locatorEntryId === UT;
          return TT.locatorEntryArmed === mT ? TT : {
            ...TT,
            locatorEntryArmed: mT
          }
        }))
      }
    }

    function GU(TT, UT) {
      return {
        locatorNoticeKey: TT,
        locatorNoticeRefused: !1,
        locatorNoticeName: UT
      }
    }
    const NU = "containmentLocatorView";
    class EU extends TU {
      constructor(TT, UT, mT, WT) {
        super(TT, UT, mT, WT, "locator", KU), this.snapshot = this.buildSnapshot()
      }
      messageOpens(TT) {
        return TT.locatorMessageOpens
      }
      messageNotice(TT) {
        return TT.locatorNotice
      }
      openingSelection(TT) {
        var UT;
        const mT = TT.locatorEntries;
        return (null !== (UT = mT.find((TT => TT.locatorEntryArmed))) && void 0 !== UT ? UT : mT[0]).locatorEntryId
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
    const hU = {
        locatorContained: `${JT}:locatorFlavourContained`,
        locatorEncountered: `${JT}:locatorFlavourEncountered`,
        locatorUnseen: `${JT}:locatorFlavourUnseen`
      },
      DU = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${JT}:locatorAttunedNormal`,
        codexHardOnly: `${JT}:locatorAttunedHard`
      };

    function oU() {
      return (0, YT.jsx)(YT.Fragment, {
        children: Array.from({
          length: 5
        }, ((TT, UT) => (0, YT.jsx)("span", {
          className: "LocatorFly",
          children: (0, YT.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, UT)))
      })
    }

    function AU(TT) {
      let {
        entry: UT
      } = TT;
      const {
        t: mT
      } = (0, lT.z)();
      return UT.locatorEntryArmed ? (0, YT.jsx)("span", {
        className: "BoardBadge Armed",
        children: mT(`${JT}:locatorArmedBadge`)
      }) : UT.locatorEntryOwned ? (0, YT.jsx)("span", {
        className: "BoardBadge",
        children: mT(`${JT}:locatorOwnedBadge`)
      }) : null
    }

    function RU(TT) {
      let {
        entry: UT,
        coins: mT,
        inTile: WT = !1
      } = TT;
      return (0, YT.jsx)(aT, {
        itemName: xT,
        amount: UT.locatorEntryPrice,
        fn: mT,
        inTile: WT
      })
    }

    function Tm(TT) {
      let {
        view: UT,
        controller: mT,
        entry: WT
      } = TT;
      const {
        t: zT
      } = (0, lT.z)(), MT = WT.locatorEntryId, gT = UT.locators.locatorEntries.find((TT => TT.locatorEntryArmed && TT !== WT));
      return (0, YT.jsxs)("div", {
        className: "BoardActions",
        children: [WT.locatorEntryArmed && (0, YT.jsx)(BT.L, {
          disabled: UT.pending,
          onClick: () => {
            mT.act("locatorDisarm", MT)
          },
          children: zT(`${JT}:locatorDisarm`)
        }), WT.locatorEntryOwned && !WT.locatorEntryArmed && (0, YT.jsx)(BT.e, {
          disabled: UT.pending,
          onClick: () => {
            mT.act("locatorArm", MT)
          },
          children: zT(`${JT}:locatorArm`)
        }), !WT.locatorEntryOwned && (0, YT.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, YT.jsx)(RU, {
            entry: WT,
            coins: UT.locators.locatorCoins
          }), (0, YT.jsx)(BT.l, {
            disabled: UT.locators.locatorCoins < WT.locatorEntryPrice || UT.pending,
            onClick: () => {
              mT.act("locatorBuy", MT)
            },
            children: zT(`${JT}:locatorBuy`)
          })]
        }), gT && !WT.locatorEntryArmed && (0, YT.jsx)("span", {
          className: "BoardHint",
          children: zT(`${JT}:locatorReplacesHint`, {
            name: gT.locatorEntryName
          })
        })]
      })
    }

    function Um(TT) {
      let {
        entry: UT
      } = TT;
      return "locatorUnseen" === UT.locatorEntryStanding ? (0, YT.jsx)(wT, {
        itemName: "Compass"
      }) : (0, YT.jsx)(tT, {
        anomalyId: UT.locatorEntryId,
        caught: "locatorContained" === UT.locatorEntryStanding
      })
    }

    function mm(TT) {
      let {
        view: UT,
        controller: mT,
        entry: WT
      } = TT;
      const {
        t: zT
      } = (0, lT.z)(), MT = DU[WT.locatorEntryDifficulty];
      return (0, YT.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, YT.jsxs)("div", {
          className: kT()("LocatorLabel", {
            Armed: WT.locatorEntryArmed
          }),
          children: [(0, YT.jsx)(QT, {
            icon: (0, YT.jsx)(Um, {
              entry: WT
            }),
            name: zT(`${JT}:locatorName`, {
              name: WT.locatorEntryName
            }),
            children: (0, YT.jsx)(AU, {
              entry: WT
            })
          }), (0, YT.jsx)("p", {
            className: "BoardDescription",
            children: zT(WT.locatorEntryArmed ? `${JT}:locatorFlavourArmed` : hU[WT.locatorEntryStanding])
          }), null !== MT && (0, YT.jsx)("p", {
            className: "LocatorAttuned",
            children: zT(MT)
          }), (0, YT.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: zT(`${JT}:locatorUsage`)
          })]
        }), (0, YT.jsx)(Tm, {
          view: UT,
          controller: mT,
          entry: WT
        })]
      })
    }

    function Wm(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, jT.j)(NU, UT.getSnapshot()),
        {
          t: WT
        } = (0, lT.z)(),
        zT = mT.locators;
      if (null === zT) return null;
      const MT = zT.locatorEntries.find((TT => TT.locatorEntryId === mT.selectedId)),
        gT = mT.notice;
      return (0, YT.jsxs)(dT, {
        open: mT.open,
        onDismiss: UT.dismiss,
        title: WT(`${JT}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, YT.jsx)(oU, {}),
        headerExtra: (0, YT.jsx)(sT, {
          coins: zT.locatorCoins
        }),
        statusRefused: null === gT || void 0 === gT ? void 0 : gT.locatorNoticeRefused,
        status: (0, YT.jsxs)(YT.Fragment, {
          children: [(0, YT.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: WT(`${JT}:locatorKeeperName`)
          }), null !== gT && WT(`${JT}:${gT.locatorNoticeKey}`, {
            name: gT.locatorNoticeName
          })]
        }),
        children: [(0, YT.jsx)("div", {
          className: "BoardTiles",
          children: zT.locatorEntries.map((TT => (0, YT.jsxs)(IT, {
            icon: (0, YT.jsx)(Um, {
              entry: TT
            }),
            name: TT.locatorEntryName,
            selected: TT === MT,
            locked: !1,
            className: kT()("LocatorTag", {
              Armed: TT.locatorEntryArmed
            }),
            onSelect: () => {
              UT.select(TT.locatorEntryId)
            },
            children: [(0, YT.jsx)(AU, {
              entry: TT
            }), !TT.locatorEntryOwned && (0, YT.jsx)(RU, {
              entry: TT,
              coins: zT.locatorCoins,
              inTile: !0
            })]
          }, TT.locatorEntryId)))
        }), (0, YT.jsx)(mm, {
          view: mT,
          controller: UT,
          entry: MT
        })]
      })
    }

    function zm(TT) {
      let {
        loadout: UT,
        codex: mT,
        locator: WT
      } = TT;
      return (0, YT.jsxs)(YT.Fragment, {
        children: [(0, YT.jsx)(rU, {
          controller: UT
        }), (0, YT.jsx)(AT, {
          controller: mT
        }), (0, YT.jsx)(Wm, {
          controller: WT
        })]
      })
    }
    var Mm = mT(38693);
    class gm {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = TT, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Mm.d({
          spacingMs: 0,
          now: UT
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(TT, UT) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, UT(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(TT), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
    }
    var nm = mT(38684);
    const Hm = new Map([
      ["npc_general", ZU],
      ["npc_tentacle_guy", nm]
    ]);

    function km(TT) {
      const UT = Hm.get(TT);
      if (void 0 === UT) return null;
      const mT = document.createElement("img");
      return mT.src = UT, mT.alt = "", mT.draggable = !1, mT.style.imageRendering = "pixelated", mT
    }
    const jm = function() {
      let TT, UT = !1,
        mT = null,
        HT = null;
      const kT = [],
        jT = TT => {
          for (const UT of kT) UT !== TT && UT.close();
          (0, nT.l)()
        },
        lT = TT => {
          TT && (0, nT.f)()
        },
        LT = new gm((UT => {
          TT.sendCommand(UT)
        })),
        pT = new pU((TT => {
          gT.j.EZ(LU, TT, !0)
        }), jT, lT, LT),
        BT = new VT((TT => {
          gT.j.EZ(PT, TT, !0)
        }), jT, lT),
        ZT = new EU((TT => {
          gT.j.EZ(NU, TT, !0)
        }), jT, lT, LT);
      kT.push(pT, BT, ZT);
      return {
        onCreate: UT => {
          TT = UT, mT = (0, nT.q)(null, {
            content: (0, WT.createElement)(zm, {
              loadout: pT,
              codex: BT,
              locator: ZT
            }),
            onClose: () => {
              for (const TT of kT) TT.close()
            }
          }), HT = (0, MT.i)(km)
        },
        onReceivedMessageFromServer: (TT, UT) => {
          "containmentLoadout" === TT ? pT.pB(UT) : "containmentLoadoutClose" === TT ? pT.isOpen() && (pT.close(), (0, nT.d)()) : "containmentCodex" === TT ? BT.pB(UT) : "containmentLocator" === TT && ZT.pB(UT)
        },
        Cl: () => {
          UT || zT.b.get("loadingOverlayVisible") || (UT = !0, TT.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var TT, UT;
          null === (TT = mT) || void 0 === TT || TT(), mT = null, null === (UT = HT) || void 0 === UT || UT(), HT = null;
          for (const mT of kT) mT.dispose();
          LT.dispose()
        }
      }
    }
  },
  39428: (TT, UT, mT) => {
    var WT = {
      "./breach-zero-uncaught.webp": 39436,
      "./breach-zero.webp": 39440,
      "./brood-father-uncaught.webp": 39444,
      "./brood-father.webp": 39451,
      "./carousel-uncaught.webp": 39458,
      "./carousel.webp": 39462,
      "./deadlock-uncaught.webp": 39464,
      "./deadlock.webp": 39472,
      "./frost-revenant-uncaught.webp": 39480,
      "./frost-revenant.webp": 39483,
      "./hollow-choir-uncaught.webp": 39490,
      "./hollow-choir.webp": 39493,
      "./magma-warden-uncaught.webp": 39498,
      "./magma-warden.webp": 39505,
      "./patient-zero-uncaught.webp": 39509,
      "./patient-zero.webp": 39515,
      "./siege-engine-uncaught.webp": 39517,
      "./siege-engine.webp": 39522,
      "./warp-stalker-uncaught.webp": 39530,
      "./warp-stalker.webp": 39539
    };

    function zT(TT) {
      var UT = MT(TT);
      return mT(UT)
    }

    function MT(TT) {
      if (!mT.o(WT, TT)) {
        var UT = new Error("Cannot find module '" + TT + "'");
        throw UT.code = "MODULE_NOT_FOUND", UT
      }
      return WT[TT]
    }
    zT.keys = function() {
      return Object.keys(WT)
    }, zT.resolve = MT, TT.exports = zT, zT.id = 39428
  },
  39436: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39440: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39444: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39451: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39458: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39462: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39464: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39472: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39480: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39483: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39490: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39493: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39498: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39505: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39509: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39515: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39517: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39522: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39530: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39539: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38684: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);