export const id = 14;
export const ids = [14];
export const modules = {
  38593: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    const TB = 4,
      JB = 12e3,
      oB = 1e3;
    class GB {
      constructor() {
        let {
          limit: BB = TB,
          windowMs: IB = JB,
          spacingMs: ZB = oB,
          now: GB = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = BB, this.windowMs = IB, this.spacingMs = ZB, this.now = GB
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const BB of this.priority) BB.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const BB = this.now();
        this.sent.push(BB), this.lastSentAt = BB, this.schedule(), this.notify()
      }
      addPriority(BB) {
        return this.priority.add(BB), () => {
          this.priority.delete(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const BB of this.priority)
          if (BB.waiting()) return !0;
        return !1
      }
      prune() {
        const BB = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= BB;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const BB = this.now(),
          IB = this.lastSentAt + this.spacingMs,
          ZB = Math.min(IB > BB ? IB : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ZB !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ZB - BB)))
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38573: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    class TB {
      constructor(BB, IB, ZB) {
        this.Gq = BB, this.beforeOpen = IB, this.afterClose = ZB, this.open = !1, this.WN = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.WN && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(BB) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(BB)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.WN = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.WN || (this.snapshot = this.buildSnapshot(), this.Gq(this.snapshot))
      }
    }
  },
  39363: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => nZ
    });
    var TB = ZB(63);
    var JB = ZB(20),
      oB = ZB(1972),
      GB = ZB(24),
      vB = ZB(36619),
      kB = ZB(1091),
      cB = ZB.n(kB),
      nB = ZB(1507),
      hB = ZB(1248),
      zB = ZB(4714),
      FB = ZB(1399),
      NB = ZB(1516),
      gB = ZB(1979),
      qB = ZB(1421),
      yB = ZB(1960),
      UB = ZB(2054),
      WB = ZB(212);
    const dB = ZB(39370),
      CB = Object.fromEntries(dB.keys().map((BB => [BB.replace(/^\.\/(.*)\.webp$/, "$1"), dB(BB)]))),
      QB = new Set;

    function sB(BB, IB) {
      const ZB = IB ? BB : `${BB}-uncaught`,
        TB = (0, WB.e)(CB, ZB);
      return void 0 !== TB || QB.has(ZB) || (QB.add(ZB), console.warn(`Containment Breach has no mugshot ${ZB}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), TB
    }
    var wB = ZB(1153);
    const OB = "containmentBreach",
      YB = "Gold Coin";

    function iB(BB) {
      let {
        open: IB,
        onDismiss: ZB,
        title: TB,
        className: JB,
        decor: oB,
        headerExtra: GB,
        status: vB,
        statusRefused: kB = !1,
        children: nB
      } = BB;
      const hB = `${JB}Title`;
      return (0, wB.jsx)(zB.c, {
        show: IB,
        close: ZB,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, wB.jsxs)("section", {
          className: cB()("ContainmentBoardPanel", JB),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": hB,
          children: [oB && (0, wB.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: oB
          }), (0, wB.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, wB.jsx)("h2", {
              id: hB,
              className: "VisuallyHidden",
              children: TB
            }), GB, (0, wB.jsx)(NB.l, {
              onClick: ZB
            })]
          }), (0, wB.jsx)("div", {
            className: "BoardBody",
            children: nB
          }), void 0 !== vB && (0, wB.jsx)("footer", {
            className: cB()("BoardStatus", {
              Refused: kB
            }),
            children: vB
          })]
        })
      })
    }

    function pB(BB) {
      let {
        itemName: IB
      } = BB;
      return (0, wB.jsx)(gB.e, {
        itemName: IB,
        amount: 0
      })
    }

    function aB(BB) {
      let {
        anomalyId: IB,
        caught: ZB
      } = BB;
      const JB = (0, TB.useRef)(null);
      return (0, FB.e)(JB, !ZB), (0, wB.jsx)("span", {
        ref: JB,
        className: cB()("BoardMugshot", {
          Uncaught: !ZB
        }),
        children: (0, wB.jsx)("img", {
          src: sB(IB, ZB),
          alt: "",
          draggable: !1
        })
      })
    }

    function HB(BB) {
      let {
        itemName: IB,
        amount: ZB,
        sv: TB,
        inTile: JB = !1
      } = BB;
      return (0, wB.jsx)(qB.e, {
        delayShow: 200,
        hoverOnly: JB,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, wB.jsx)(jB, {
          itemName: IB,
          amount: ZB,
          sv: TB
        }),
        children: (0, wB.jsxs)("span", {
          className: cB()("BoardChip", {
            Short: void 0 !== TB && TB < ZB
          }),
          children: [(0, wB.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, wB.jsx)(pB, {
              itemName: IB
            })
          }), ZB.toLocaleString()]
        })
      })
    }
    const MB = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function jB(BB) {
      var IB;
      let {
        itemName: ZB,
        amount: TB,
        sv: JB
      } = BB;
      const {
        t: oB
      } = (0, hB.G)(), GB = (0, UB.g)("itemInfo", (BB => BB[ZB])), {
        lore: vB,
        droppedBy: kB
      } = function(BB) {
        if ("string" !== typeof BB) return {
          lore: BB,
          droppedBy: null
        };
        const IB = MB.exec(BB);
        return null === IB ? {
          lore: BB,
          droppedBy: null
        } : {
          lore: "" === IB[1] ? void 0 : IB[1],
          droppedBy: IB[2]
        }
      }(null === GB || void 0 === GB ? void 0 : GB.description);
      return (0, wB.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, wB.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, wB.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, wB.jsx)(pB, {
              itemName: ZB
            })
          }), (0, wB.jsx)(yB.e, {
            text: null !== (IB = null === GB || void 0 === GB ? void 0 : GB.displayName) && void 0 !== IB ? IB : ZB,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== vB || null !== kB) && (0, wB.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== vB && (0, wB.jsx)(yB.e, {
            text: vB,
            className: "BoardChipTooltipDescription"
          }), null !== kB && (0, wB.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, wB.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: oB(`${OB}:chipDroppedBy`)
            }), kB]
          })]
        }), void 0 !== JB && (0, wB.jsxs)("div", {
          className: cB()("BoardChipTooltipHeld", {
            Short: JB < TB
          }),
          children: [(0, wB.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: oB(`${OB}:chipYouHave`)
          }), (0, wB.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, wB.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: JB.toLocaleString()
            }), ` / ${TB.toLocaleString()}`]
          }), (0, wB.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, wB.jsx)("span", {
              style: {
                width: (TB > 0 ? 100 * Math.min(1, JB / TB) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function PB(BB) {
      let {
        icon: IB,
        name: ZB,
        selected: TB,
        locked: JB,
        className: oB,
        buttonRef: GB,
        onSelect: vB,
        children: kB
      } = BB;
      return (0, wB.jsxs)("button", {
        ref: GB,
        type: "button",
        className: cB()("BoardTile", oB, {
          Selected: TB,
          Locked: JB
        }),
        onClick: vB,
        children: [(0, wB.jsx)("span", {
          className: "BoardTileIcon",
          children: IB
        }), (0, wB.jsx)("span", {
          className: "BoardTileName",
          children: ZB
        }), kB]
      })
    }

    function RB(BB) {
      let {
        icon: IB,
        name: ZB,
        children: TB
      } = BB;
      return (0, wB.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, wB.jsx)("span", {
          className: "BoardDetailIcon",
          children: IB
        }), (0, wB.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, wB.jsx)("h3", {
            children: ZB
          }), (0, wB.jsx)("span", {
            className: "BoardDetailStatus",
            children: TB
          })]
        })]
      })
    }

    function rB(BB) {
      let {
        coins: IB,
        children: ZB
      } = BB;
      return (0, wB.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, wB.jsx)(HB, {
          itemName: YB,
          amount: IB
        }), ZB]
      })
    }
    var mB = ZB(38573);
    const XB = "containmentCodexView";
    class LB extends mB.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = BB => {
          this.selectedId = BB, this.emit()
        }
      }
      sN(BB) {
        this.entries = BB.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const eB = {
        codexAnyDifficulty: `${OB}:codexNeedsAny`,
        codexNormalOnly: `${OB}:codexNeedsNormal`,
        codexHardOnly: `${OB}:codexNeedsHard`
      },
      uB = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      fB = {
        codexContained: `${OB}:codexContainedBadge`,
        codexEncountered: `${OB}:codexEncounteredBadge`,
        codexUnidentified: `${OB}:codexUnidentifiedBadge`
      },
      lB = ["94%", "81%", "88%", "46%", "72%"];

    function AB(BB) {
      let {
        entry: IB
      } = BB;
      const {
        t: ZB
      } = (0, hB.G)();
      return (0, wB.jsx)("span", {
        className: cB()("BoardBadge", uB[IB.codexEntryState]),
        children: ZB(fB[IB.codexEntryState])
      })
    }

    function tB(BB) {
      const {
        t: IB
      } = (0, hB.G)();
      return "codexUnidentified" === BB.codexEntryState ? IB(`${OB}:codexUnidentifiedName`) : BB.codexEntryName
    }

    function bB(BB) {
      let {
        entry: IB
      } = BB;
      return "codexUnidentified" === IB.codexEntryState ? (0, wB.jsx)(pB, {
        itemName: "Book"
      }) : (0, wB.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, wB.jsx)(aB, {
          anomalyId: IB.codexEntryId,
          caught: "codexContained" === IB.codexEntryState
        }), (0, wB.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function xB(BB) {
      let {
        entry: IB,
        selected: ZB,
        onSelect: TB
      } = BB;
      const JB = "codexUnidentified" === IB.codexEntryState;
      return (0, wB.jsxs)(PB, {
        icon: (0, wB.jsx)(bB, {
          entry: IB
        }),
        name: tB(IB),
        selected: ZB,
        locked: JB,
        className: cB()("CodexFolder", uB[IB.codexEntryState]),
        onSelect: () => {
          TB(IB.codexEntryId)
        },
        children: [!JB && (0, wB.jsx)(AB, {
          entry: IB
        }), JB && (0, wB.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function EB(BB) {
      let {
        count: IB
      } = BB;
      const ZB = [];
      for (let TB = Math.min(IB, 25); TB > 0; TB -= 5) ZB.push(Math.min(TB, 5));
      return (0, wB.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: ZB.map(((BB, IB) => (0, wB.jsx)("span", {
          className: cB()("CodexTallyGroup", {
            Gate: 5 === BB
          }),
          children: Array.from({
            length: Math.min(BB, 4)
          }, ((BB, IB) => (0, wB.jsx)("span", {
            className: "CodexTallyMark"
          }, IB)))
        }, IB)))
      })
    }

    function DB(BB) {
      let {
        contained: IB,
        total: ZB
      } = BB;
      const {
        t: TB
      } = (0, hB.G)();
      return (0, wB.jsxs)("div", {
        className: "CodexProgress",
        children: [TB(`${OB}:codexProgress`, {
          contained: String(IB),
          total: String(ZB)
        }), (0, wB.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, wB.jsx)("span", {
            style: {
              width: IB / ZB * 100 + "%"
            }
          })
        })]
      })
    }

    function KB(BB) {
      let {
        entry: IB,
        fileNumber: ZB
      } = BB;
      const {
        t: TB
      } = (0, hB.G)(), JB = "codexContained" === IB.codexEntryState;
      return (0, wB.jsx)("section", {
        className: "BoardDetail",
        children: (0, wB.jsxs)("article", {
          className: cB()("CodexDossier", uB[IB.codexEntryState]),
          children: [(0, wB.jsx)("span", {
            className: "CodexFileNumber",
            children: TB(`${OB}:codexFileNumber`, {
              number: String(ZB).padStart(3, "0")
            })
          }), (0, wB.jsx)(RB, {
            icon: (0, wB.jsx)(bB, {
              entry: IB
            }),
            name: tB(IB),
            children: (0, wB.jsx)(AB, {
              entry: IB
            })
          }), JB && (0, wB.jsxs)(wB.Fragment, {
            children: [(0, wB.jsx)("p", {
              className: "BoardDescription",
              children: IB.codexEntryLore
            }), (0, wB.jsxs)("p", {
              className: "CodexTally",
              children: [TB(`${OB}:codexContainments`, {
                count: String(IB.codexEntryContainedCount)
              }), (0, wB.jsx)(EB, {
                count: IB.codexEntryContainedCount
              })]
            }), (0, wB.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: TB(`${OB}:codexContainedBadge`)
            })]
          }), !JB && (0, wB.jsxs)(wB.Fragment, {
            children: [(0, wB.jsxs)("div", {
              className: "CodexRedaction",
              children: [lB.map((BB => (0, wB.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: BB
                }
              }, BB))), (0, wB.jsx)("p", {
                className: "CodexRedacted",
                children: TB(`${OB}:codexRedacted`)
              })]
            }), "" !== IB.codexEntryHint && (0, wB.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, wB.jsx)("h4", {
                children: TB(`${OB}:codexHintLabel`)
              }), (0, wB.jsx)("p", {
                children: IB.codexEntryHint
              })]
            }), (0, wB.jsx)("p", {
              className: "CodexClearance",
              children: TB(eB[IB.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function VB(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, nB.h)(XB, IB.getSnapshot()),
        {
          t: TB
        } = (0, hB.G)();
      if (0 === ZB.entries.length) return null;
      const JB = ZB.entries.find((BB => BB.codexEntryId === ZB.selectedId)),
        oB = ZB.entries.filter((BB => "codexContained" === BB.codexEntryState)).length,
        GB = ZB.entries.map((BB => BB.codexEntryId)).sort().indexOf(JB.codexEntryId) + 1;
      return (0, wB.jsxs)(iB, {
        open: ZB.open,
        onDismiss: IB.dismiss,
        title: TB(`${OB}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, wB.jsx)(DB, {
          contained: oB,
          total: ZB.entries.length
        }),
        children: [(0, wB.jsx)("div", {
          className: "BoardTiles",
          children: ZB.entries.map((BB => (0, wB.jsx)(xB, {
            entry: BB,
            selected: BB === JB,
            onSelect: IB.select
          }, BB.codexEntryId)))
        }), (0, wB.jsx)(KB, {
          entry: JB,
          fileNumber: GB
        })]
      })
    }
    var SB = ZB(360);
    class BI extends mB.e {
      constructor(BB, IB, ZB, TB, JB, oB) {
        super(BB, IB, ZB), this.pacer = TB, this.command = JB, this.predict = oB, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = BB => {
          this.selectedId = BB, this.emit()
        }, this.act = (BB, IB) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${BB} ${IB}`, this.rollBack)) return;
          const ZB = this.predict(this.board, BB, IB);
          null !== ZB && (this.board = ZB.board, this.notice = ZB.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = TB.subscribe((() => {
          this.emit()
        }))
      }
      sN(BB) {
        const IB = this.messageOpens(BB);
        if (IB && this.open) return this.board === this.confirmed && (this.board = BB), this.confirmed = BB, void this.emit();
        if (this.board = BB, this.confirmed = BB, this.pacer.onReply(), IB) return this.notice = null, this.selectedId = this.openingSelection(BB), void this.show();
        const ZB = this.messageNotice(BB);
        null !== ZB && (this.notice = ZB), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function II(BB, IB) {
      return BB.loadoutCoins >= IB.loadoutCostCoins && IB.loadoutCostParts.every((IB => function(BB, IB) {
        return ZI(BB, IB).loadoutHeldPartAmount
      }(BB, IB.loadoutPartCurrency) >= IB.loadoutPartAmount))
    }

    function ZI(BB, IB) {
      return BB.loadoutHeldParts.find((BB => BB.loadoutHeldPartCurrency === IB))
    }

    function TI(BB, IB) {
      return BB.loadoutSlots.find((BB => BB.loadoutSlotKind === IB))
    }

    function JI(BB) {
      return BB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)).length >= BB.loadoutMaxPerks
    }

    function oI(BB, IB, ZB) {
      for (const JB of BB.loadoutSlots) {
        const TB = JB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === ZB));
        if (TB) return "loadoutArmour" === JB.loadoutSlotKind ? vI(BB, JB, TB, IB) : GI(BB, JB, TB, IB)
      }
      const TB = BB.loadoutPerks.find((BB => BB.loadoutPerkId === ZB));
      return TB ? function(BB, IB, ZB) {
        const TB = IB.loadoutPerkOwned,
          JB = IB.loadoutPerkEquipped,
          oB = IB.loadoutPerkName,
          GB = JI(BB);
        if ("loadoutUnlock" === ZB) {
          if (TB || !II(BB, IB.loadoutPerkCost)) return null;
          const ZB = {
            ...IB,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !GB
          };
          return {
            board: cI(nI(BB, IB.loadoutPerkCost), ZB),
            notice: hI(GB ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", oB)
          }
        }
        if ("loadoutUpgrade" === ZB || !TB || "loadoutEquip" === ZB === JB || !JB && GB) return null;
        return {
          board: cI(BB, {
            ...IB,
            loadoutPerkEquipped: !JB
          }),
          notice: hI(JB ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", oB)
        }
      }(BB, TB, IB) : null
    }

    function GI(BB, IB, ZB, TB) {
      const JB = ZB.loadoutOptionOwnedTier,
        oB = ZB.loadoutOptionName;
      if ("loadoutEquip" === TB) return 0 === JB ? null : {
        board: kI(BB, IB, ZB.loadoutOptionId, null),
        notice: hI("loadoutNoticeEquipped", oB)
      };
      const GB = "loadoutUnlock" === TB;
      if (GB && 0 !== JB || "loadoutUpgrade" === TB && (0 === JB || JB >= ZB.loadoutOptionTiers.length) || "loadoutUnequip" === TB) return null;
      const vB = ZB.loadoutOptionTiers[JB].loadoutTierCost;
      if (!II(BB, vB)) return null;
      const kB = {
          ...ZB,
          loadoutOptionOwnedTier: JB + 1
        },
        cB = GB ? ZB.loadoutOptionId : IB.loadoutSlotEquippedId;
      return {
        board: kI(nI(BB, vB), IB, cB, kB),
        notice: GB ? hI("loadoutNoticeUnlocked", oB) : hI("loadoutNoticeUpgraded", oB, JB + 1)
      }
    }

    function vI(BB, IB, ZB, TB) {
      const JB = ZB.loadoutOptionOwnedTier > 0,
        oB = ZB.loadoutOptionName;
      if ("loadoutEquip" === TB && JB) return {
        board: kI(BB, IB, ZB.loadoutOptionId, null),
        notice: hI("loadoutNoticeEquipped", oB)
      };
      const GB = ZB.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== TB || JB || !II(BB, GB) ? null : {
        board: kI(nI(BB, GB), IB, ZB.loadoutOptionId, {
          ...ZB,
          loadoutOptionOwnedTier: 1
        }),
        notice: hI("loadoutNoticeUnlocked", oB)
      }
    }

    function kI(BB, IB, ZB, TB) {
      const JB = {
        ...IB,
        loadoutSlotEquippedId: ZB,
        loadoutSlotOptions: IB.loadoutSlotOptions.map((BB => null !== TB && BB.loadoutOptionId === TB.loadoutOptionId ? TB : BB))
      };
      return {
        ...BB,
        loadoutSlots: BB.loadoutSlots.map((BB => BB === IB ? JB : BB))
      }
    }

    function cI(BB, IB) {
      return {
        ...BB,
        loadoutPerks: BB.loadoutPerks.map((BB => BB.loadoutPerkId === IB.loadoutPerkId ? IB : BB))
      }
    }

    function nI(BB, IB) {
      return {
        ...BB,
        loadoutCoins: BB.loadoutCoins - IB.loadoutCostCoins,
        loadoutHeldParts: BB.loadoutHeldParts.map((BB => {
          const ZB = IB.loadoutCostParts.find((IB => IB.loadoutPartCurrency === BB.loadoutHeldPartCurrency));
          return ZB ? {
            ...BB,
            loadoutHeldPartAmount: BB.loadoutHeldPartAmount - ZB.loadoutPartAmount
          } : BB
        }))
      }
    }

    function hI(BB, IB) {
      return {
        loadoutNoticeKey: BB,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: IB,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const zI = "containmentLoadoutView";
    class FI extends BI {
      constructor(BB, IB, ZB, TB) {
        super(BB, IB, ZB, TB, "loadout", oI), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = BB => {
          this.slot = BB, this.selectedId = NI(this.board, BB), this.emit()
        }
      }
      messageOpens(BB) {
        return BB.loadoutMessageOpens
      }
      messageNotice(BB) {
        return BB.loadoutNotice
      }
      openingSelection(BB) {
        return NI(BB, this.slot)
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

    function NI(BB, IB) {
      if ("loadoutPerks" === IB) {
        var ZB;
        const IB = BB.loadoutPerks;
        return (null !== (ZB = IB.find((BB => BB.loadoutPerkEquipped))) && void 0 !== ZB ? ZB : IB[0]).loadoutPerkId
      }
      return TI(BB, IB).loadoutSlotEquippedId
    }
    const gI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var qI = ZB(36909),
      yI = ZB(1343);
    const UI = {
        loadoutPrimary: `${OB}:loadoutSlotPrimary`,
        loadoutSecondary: `${OB}:loadoutSlotSecondary`,
        loadoutOffensive: `${OB}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${OB}:loadoutSlotSelfHelp`,
        loadoutArmour: `${OB}:loadoutSlotArmour`,
        loadoutPerks: `${OB}:loadoutSlotPerks`
      },
      WI = {
        section: "right",
        TF: "bottom",
        act: "top"
      },
      dI = (0, TB.createContext)({
        step: null,
        targetRef: () => {}
      });

    function CI() {
      const {
        step: BB,
        targetRef: IB
      } = (0, TB.useContext)(dI);
      return (ZB, TB) => (null === BB || void 0 === BB ? void 0 : BB.kind) === ZB && BB.id === TB ? IB : void 0
    }

    function QI(BB, IB) {
      const ZB = IB.loadoutTargetId;
      if ("loadoutPerks" === IB.loadoutTargetSection) {
        const IB = BB.loadoutPerks.find((BB => BB.loadoutPerkId === ZB));
        return {
          name: IB.loadoutPerkName,
          owned: IB.loadoutPerkOwned,
          equipped: IB.loadoutPerkEquipped
        }
      }
      const TB = TI(BB, IB.loadoutTargetSection),
        JB = TB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === ZB));
      return {
        name: JB.loadoutOptionName,
        owned: JB.loadoutOptionOwnedTier > 0,
        equipped: TB.loadoutSlotEquippedId === ZB
      }
    }

    function sI(BB, IB, ZB, TB) {
      const [JB, oB] = BB(`${OB}:${IB}`, {
        [ZB]: "\x01"
      }).split("\x01");
      return (0, wB.jsxs)(wB.Fragment, {
        children: [JB, (0, wB.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: TB
        }), oB]
      })
    }

    function wI(BB) {
      let {
        view: IB,
        onDismiss: ZB,
        children: JB
      } = BB;
      const {
        t: oB
      } = (0, hB.G)(), GB = IB.loadout, vB = IB.open ? GB.loadoutWalkthrough.map((BB => ({
        target: BB,
        info: QI(GB, BB)
      }))).find((BB => {
        let {
          info: IB
        } = BB;
        return !IB.equipped
      })) : void 0;
      let kB = null,
        cB = null;
      if (void 0 !== vB) {
        const {
          target: BB,
          info: ZB
        } = vB;
        IB.slot !== BB.loadoutTargetSection ? (kB = {
          kind: "section",
          id: BB.loadoutTargetSection
        }, cB = sI(oB, "loadoutWalkthroughSection", "section", oB(UI[BB.loadoutTargetSection]))) : IB.selectedId !== BB.loadoutTargetId ? (kB = {
          kind: "TF",
          id: BB.loadoutTargetId
        }, cB = sI(oB, "loadoutWalkthroughPick", "name", ZB.name)) : (kB = {
          kind: "act",
          id: BB.loadoutTargetId
        }, cB = sI(oB, ZB.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", ZB.name))
      }
      const nB = null === kB ? null : function(BB) {
          return `${BB.kind}:${BB.id}`
        }(kB),
        [zB, FB] = (0, TB.useState)(null),
        NB = (0, TB.useCallback)((BB => {
          FB((IB => null !== BB ? {
            key: nB,
            node: BB
          } : (null === IB || void 0 === IB ? void 0 : IB.key) === nB ? null : IB))
        }), [nB]),
        gB = null !== nB && (null === zB || void 0 === zB ? void 0 : zB.key) === nB ? zB.node : null;
      return (0, wB.jsxs)(dI.Provider, {
        value: {
          step: kB,
          targetRef: NB
        },
        children: [JB, null !== kB && null !== gB && (0, wB.jsx)(OI, {
          target: gB,
          placement: WI[kB.kind],
          onDismiss: ZB,
          children: cB
        }, nB)]
      })
    }

    function OI(BB) {
      let {
        target: IB,
        placement: ZB,
        onDismiss: JB,
        children: oB
      } = BB;
      const {
        t: GB
      } = (0, hB.G)(), vB = (0, TB.useRef)(IB);
      return vB.current = IB, (0, yI.t)("popup", vB, JB), (0, wB.jsxs)(qI.e, {
        target: IB,
        placement: ZB,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, wB.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, wB.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: gI,
            alt: "",
            draggable: !1
          }), (0, wB.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: GB(`${OB}:operatorName`)
          }), (0, wB.jsx)(NB.l, {
            onClick: JB,
            ariaLabel: GB(`${OB}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, wB.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: oB
        })]
      })
    }
    const YI = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function iI(BB) {
      let {
        cost: IB,
        loadout: ZB
      } = BB;
      const {
        t: TB
      } = (0, hB.G)();
      return IB.loadoutCostCoins <= 0 && 0 === IB.loadoutCostParts.length ? (0, wB.jsx)("span", {
        className: "LoadoutCost",
        children: TB(`${OB}:loadoutFree`)
      }) : (0, wB.jsxs)("span", {
        className: "LoadoutCost",
        children: [IB.loadoutCostCoins > 0 && (0, wB.jsx)(HB, {
          itemName: YB,
          amount: IB.loadoutCostCoins,
          sv: ZB.loadoutCoins
        }), IB.loadoutCostParts.map((BB => {
          const IB = ZI(ZB, BB.loadoutPartCurrency);
          return (0, wB.jsx)(HB, {
            itemName: IB.loadoutHeldPartItem,
            amount: BB.loadoutPartAmount,
            sv: IB.loadoutHeldPartAmount
          }, BB.loadoutPartCurrency)
        }))]
      })
    }
    const pI = {
      loadoutStatFireRate: `${OB}:loadoutUnitPerMinute`,
      loadoutStatReload: `${OB}:loadoutUnitSeconds`,
      loadoutStatResupply: `${OB}:loadoutUnitSeconds`
    };

    function aI(BB) {
      return "loadoutStatPotency" === BB.loadoutStatKind ? (0, SB.Y)(BB.loadoutStatValue) : String(BB.loadoutStatValue)
    }

    function HI(BB) {
      var IB;
      let {
        option: ZB
      } = BB;
      const {
        t: TB
      } = (0, hB.G)(), JB = ZB.loadoutOptionTiers, oB = null === (IB = JB[0]) || void 0 === IB ? void 0 : IB.loadoutTierStats.map((BB => BB.loadoutStatKind));
      if (!oB || 0 === oB.length) return null;
      const GB = ZB.loadoutOptionOwnedTier,
        vB = (BB, IB) => {
          var ZB;
          return null === (ZB = JB[BB]) || void 0 === ZB ? void 0 : ZB.loadoutTierStats.find((BB => BB.loadoutStatKind === IB))
        };
      return (0, wB.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, wB.jsx)("thead", {
          children: (0, wB.jsxs)("tr", {
            children: [(0, wB.jsx)("th", {}), JB.map(((BB, IB) => (0, wB.jsx)("th", {
              className: cB()({
                Current: IB + 1 === GB,
                Next: IB === GB
              }),
              children: TB(`${OB}:loadoutTier`, {
                tier: (0, SB.Y)(IB + 1)
              })
            }, IB)))]
          })
        }), (0, wB.jsx)("tbody", {
          children: oB.map((BB => {
            const IB = pI[BB];
            return (0, wB.jsxs)("tr", {
              children: [(0, wB.jsxs)("th", {
                scope: "row",
                children: [TB(`${OB}:${BB}`), IB && (0, wB.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: TB(IB)
                })]
              }), JB.map(((IB, ZB) => {
                const TB = vB(ZB, BB),
                  JB = ZB > 0 ? vB(ZB - 1, BB) : void 0,
                  oB = TB && JB ? TB.loadoutStatValue - JB.loadoutStatValue : 0,
                  kB = YI.has(BB) ? oB < 0 : oB > 0,
                  nB = ZB === GB;
                return (0, wB.jsxs)("td", {
                  className: cB()({
                    Current: ZB + 1 === GB,
                    Next: nB,
                    Gain: kB,
                    Owned: ZB < GB
                  }),
                  children: [nB && kB && (0, wB.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: oB < 0 ? "\u25bc" : "\u25b2"
                  }), TB ? aI(TB) : "-"]
                }, ZB)
              }))]
            }, BB)
          }))
        })]
      })
    }

    function MI(BB) {
      let {
        view: IB,
        controller: ZB,
        slot: TB,
        option: JB
      } = BB;
      const {
        t: oB
      } = (0, hB.G)(), GB = IB.loadout, vB = JB.loadoutOptionOwnedTier, kB = JB.loadoutOptionTiers.length, cB = TB.loadoutSlotEquippedId === JB.loadoutOptionId, nB = vB < kB ? JB.loadoutOptionTiers[vB].loadoutTierCost : null, zB = null !== nB && II(GB, nB), FB = JB.loadoutOptionId, gB = CI();
      return (0, wB.jsxs)(wB.Fragment, {
        children: [(0, wB.jsx)(PI, {
          icon: JB.loadoutOptionIcon,
          name: JB.loadoutOptionName,
          status: 0 === vB ? oB(`${OB}:loadoutLocked`) : kB > 1 ? oB(`${OB}:loadoutTier`, {
            tier: (0, SB.Y)(vB)
          }) : null,
          locked: 0 === vB,
          equipped: cB
        }), (0, wB.jsx)("p", {
          className: "BoardDescription",
          children: JB.loadoutOptionDescription
        }), (0, wB.jsx)(HI, {
          option: JB
        }), (0, wB.jsxs)("div", {
          ref: gB("act", FB),
          className: "BoardActions",
          children: [null !== nB && (0, wB.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, wB.jsx)(iI, {
              cost: nB,
              loadout: GB
            }), (0, wB.jsx)(NB.p, {
              disabled: !zB || IB.pending,
              onClick: () => {
                ZB.act(0 === vB ? "loadoutUnlock" : "loadoutUpgrade", FB)
              },
              children: 0 === vB ? oB(`${OB}:loadoutUnlock`) : oB(`${OB}:loadoutUpgrade`, {
                tier: (0, SB.Y)(vB + 1)
              })
            })]
          }), null === nB && kB > 1 && (0, wB.jsx)("span", {
            className: "BoardHint",
            children: oB(`${OB}:loadoutMaxed`)
          }), vB > 0 && !cB && (0, wB.jsx)(NB.g, {
            disabled: IB.pending,
            onClick: () => {
              ZB.act("loadoutEquip", FB)
            },
            children: oB(`${OB}:loadoutEquip`)
          })]
        })]
      })
    }

    function jI(BB) {
      let {
        view: IB,
        controller: ZB,
        perk: TB
      } = BB;
      const {
        t: JB
      } = (0, hB.G)(), oB = IB.loadout, GB = JI(oB), vB = TB.loadoutPerkId, kB = CI();
      return (0, wB.jsxs)(wB.Fragment, {
        children: [(0, wB.jsx)(PI, {
          icon: TB.loadoutPerkIcon,
          name: TB.loadoutPerkName,
          status: TB.loadoutPerkOwned ? null : JB(`${OB}:loadoutLocked`),
          locked: !TB.loadoutPerkOwned,
          equipped: TB.loadoutPerkEquipped
        }), (0, wB.jsx)("p", {
          className: "BoardDescription",
          children: TB.loadoutPerkDescription
        }), (0, wB.jsxs)("div", {
          ref: kB("act", vB),
          className: "BoardActions",
          children: [!TB.loadoutPerkOwned && (0, wB.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, wB.jsx)(iI, {
              cost: TB.loadoutPerkCost,
              loadout: oB
            }), (0, wB.jsx)(NB.p, {
              disabled: !II(oB, TB.loadoutPerkCost) || IB.pending,
              onClick: () => {
                ZB.act("loadoutUnlock", vB)
              },
              children: JB(`${OB}:loadoutUnlock`)
            })]
          }), TB.loadoutPerkOwned && !TB.loadoutPerkEquipped && (0, wB.jsx)(NB.g, {
            disabled: GB || IB.pending,
            onClick: () => {
              ZB.act("loadoutEquip", vB)
            },
            children: JB(`${OB}:loadoutEquip`)
          }), TB.loadoutPerkOwned && !TB.loadoutPerkEquipped && GB && (0, wB.jsx)("span", {
            className: "BoardHint",
            children: JB(`${OB}:loadoutSocketsFullHint`)
          }), TB.loadoutPerkEquipped && (0, wB.jsx)(NB.V, {
            disabled: IB.pending,
            onClick: () => {
              ZB.act("loadoutUnequip", vB)
            },
            children: JB(`${OB}:loadoutUnequip`)
          })]
        })]
      })
    }

    function PI(BB) {
      let {
        icon: IB,
        name: ZB,
        status: TB,
        locked: JB,
        equipped: oB
      } = BB;
      const {
        t: GB
      } = (0, hB.G)();
      return (0, wB.jsxs)(RB, {
        icon: (0, wB.jsx)(pB, {
          itemName: IB
        }),
        name: ZB,
        children: [null !== TB && (0, wB.jsx)("span", {
          className: cB()("LoadoutStatusText", {
            Locked: JB
          }),
          children: TB
        }), oB && (0, wB.jsx)("span", {
          className: "BoardBadge",
          children: GB(`${OB}:loadoutEquippedBadge`)
        })]
      })
    }

    function RI(BB) {
      let {
        view: IB,
        controller: ZB
      } = BB;
      const TB = IB.loadout;
      if ("loadoutPerks" === IB.slot) {
        const BB = TB.loadoutPerks.find((BB => BB.loadoutPerkId === IB.selectedId));
        return (0, wB.jsx)("section", {
          className: "BoardDetail",
          children: BB && (0, wB.jsx)(jI, {
            view: IB,
            controller: ZB,
            perk: BB
          })
        })
      }
      const JB = TI(TB, IB.slot),
        oB = JB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === IB.selectedId));
      return (0, wB.jsx)("section", {
        className: "BoardDetail",
        children: oB && (0, wB.jsx)(MI, {
          view: IB,
          controller: ZB,
          slot: JB,
          option: oB
        })
      })
    }

    function rI(BB) {
      let {
        owned: IB,
        total: ZB
      } = BB;
      return ZB <= 1 ? null : (0, wB.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: ZB
        }, ((BB, ZB) => (0, wB.jsx)("span", {
          className: cB()("LoadoutPip", {
            Filled: ZB < IB
          })
        }, ZB)))
      })
    }

    function mI(BB) {
      let {
        view: IB,
        controller: ZB
      } = BB;
      const {
        t: TB
      } = (0, hB.G)(), JB = IB.loadout, oB = CI();
      return (0, wB.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": TB(`${OB}:loadoutKit`),
        children: [JB.loadoutSlots.map((BB => {
          const JB = BB.loadoutSlotOptions.find((IB => IB.loadoutOptionId === BB.loadoutSlotEquippedId));
          return (0, wB.jsxs)("button", {
            ref: oB("section", BB.loadoutSlotKind),
            type: "button",
            className: cB()("LoadoutKitSlot", {
              Selected: IB.slot === BB.loadoutSlotKind
            }),
            onClick: () => {
              ZB.selectSlot(BB.loadoutSlotKind)
            },
            children: [(0, wB.jsx)("span", {
              className: "LoadoutKitIcon",
              children: JB && (0, wB.jsx)(pB, {
                itemName: JB.loadoutOptionIcon
              })
            }), (0, wB.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, wB.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, wB.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: TB(UI[BB.loadoutSlotKind])
                }), JB && (0, wB.jsx)(rI, {
                  owned: JB.loadoutOptionOwnedTier,
                  total: JB.loadoutOptionTiers.length
                })]
              }), (0, wB.jsx)("span", {
                className: "LoadoutKitName",
                children: null === JB || void 0 === JB ? void 0 : JB.loadoutOptionName
              })]
            })]
          }, BB.loadoutSlotKind)
        })), (0, wB.jsx)(XI, {
          view: IB,
          controller: ZB
        })]
      })
    }

    function XI(BB) {
      let {
        view: IB,
        controller: ZB
      } = BB;
      const {
        t: TB
      } = (0, hB.G)(), JB = IB.loadout, oB = JB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)), GB = CI();
      return (0, wB.jsxs)("button", {
        ref: GB("section", "loadoutPerks"),
        type: "button",
        className: cB()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === IB.slot
        }),
        onClick: () => {
          ZB.selectSlot("loadoutPerks")
        },
        children: [(0, wB.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, wB.jsx)("span", {
            className: "LoadoutKitLabel",
            children: TB(UI.loadoutPerks)
          }), (0, wB.jsx)("span", {
            className: "LoadoutPerkCount",
            children: TB(`${OB}:loadoutPerkCount`, {
              equipped: String(oB.length),
              max: String(JB.loadoutMaxPerks)
            })
          })]
        }), (0, wB.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: JB.loadoutMaxPerks
          }, ((BB, IB) => {
            const ZB = oB[IB];
            return (0, wB.jsxs)("span", {
              className: cB()("LoadoutSocket", {
                Filled: ZB,
                Empty: !ZB
              }),
              children: [(0, wB.jsx)("span", {
                className: "LoadoutSocketWell",
                children: ZB && (0, wB.jsx)(pB, {
                  itemName: ZB.loadoutPerkIcon
                })
              }), (0, wB.jsx)("span", {
                className: "LoadoutSocketName",
                children: ZB ? ZB.loadoutPerkName : TB(`${OB}:loadoutPerkSocketEmpty`)
              })]
            }, IB)
          }))
        })]
      })
    }

    function LI(BB) {
      let {
        icon: IB,
        name: ZB,
        selected: TB,
        equipped: JB,
        locked: oB,
        ownedTier: GB,
        tiers: vB,
        buttonRef: kB,
        onSelect: cB
      } = BB;
      const {
        t: nB
      } = (0, hB.G)();
      return (0, wB.jsxs)(PB, {
        icon: (0, wB.jsx)(pB, {
          itemName: IB
        }),
        name: ZB,
        selected: TB,
        locked: oB,
        buttonRef: kB,
        onSelect: cB,
        children: [JB && (0, wB.jsx)("span", {
          className: "BoardBadge",
          children: nB(`${OB}:loadoutEquippedBadge`)
        }), oB && (0, wB.jsx)("span", {
          className: "BoardBadge Muted",
          children: nB(`${OB}:loadoutLocked`)
        }), !oB && (0, wB.jsx)(rI, {
          owned: GB,
          total: vB
        })]
      })
    }

    function eI(BB) {
      let {
        view: IB,
        controller: ZB
      } = BB;
      const TB = IB.loadout,
        JB = CI();
      if ("loadoutPerks" === IB.slot) return (0, wB.jsx)("div", {
        className: "BoardTiles",
        children: TB.loadoutPerks.map((BB => (0, wB.jsx)(LI, {
          icon: BB.loadoutPerkIcon,
          name: BB.loadoutPerkName,
          selected: IB.selectedId === BB.loadoutPerkId,
          equipped: BB.loadoutPerkEquipped,
          locked: !BB.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: JB("TF", BB.loadoutPerkId),
          onSelect: () => {
            ZB.select(BB.loadoutPerkId)
          }
        }, BB.loadoutPerkId)))
      });
      const oB = TI(TB, IB.slot);
      return (0, wB.jsx)("div", {
        className: "BoardTiles",
        children: oB.loadoutSlotOptions.map((BB => (0, wB.jsx)(LI, {
          icon: BB.loadoutOptionIcon,
          name: BB.loadoutOptionName,
          selected: IB.selectedId === BB.loadoutOptionId,
          equipped: oB.loadoutSlotEquippedId === BB.loadoutOptionId,
          locked: 0 === BB.loadoutOptionOwnedTier,
          ownedTier: BB.loadoutOptionOwnedTier,
          tiers: BB.loadoutOptionTiers.length,
          buttonRef: JB("TF", BB.loadoutOptionId),
          onSelect: () => {
            ZB.select(BB.loadoutOptionId)
          }
        }, BB.loadoutOptionId)))
      })
    }

    function uI(BB) {
      let {
        loadout: IB
      } = BB;
      return (0, wB.jsx)(rB, {
        coins: IB.loadoutCoins,
        children: IB.loadoutHeldParts.filter((BB => BB.loadoutHeldPartAmount > 0)).map((BB => (0, wB.jsx)(HB, {
          itemName: BB.loadoutHeldPartItem,
          amount: BB.loadoutHeldPartAmount
        }, BB.loadoutHeldPartCurrency)))
      })
    }

    function fI(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, nB.h)(zI, IB.getSnapshot()),
        {
          t: TB
        } = (0, hB.G)();
      if (null === ZB.loadout) return null;
      const JB = ZB.notice;
      return (0, wB.jsx)(wI, {
        view: ZB,
        onDismiss: IB.dismiss,
        children: (0, wB.jsxs)(iB, {
          open: ZB.open,
          onDismiss: IB.dismiss,
          title: TB(`${OB}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, wB.jsx)(uI, {
            loadout: ZB.loadout
          }),
          statusRefused: null === JB || void 0 === JB ? void 0 : JB.loadoutNoticeRefused,
          status: (0, wB.jsxs)(wB.Fragment, {
            children: [(0, wB.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: TB(`${OB}:loadoutRadioBadge`)
            }), null !== JB && TB(`${OB}:${JB.loadoutNoticeKey}`, {
              name: JB.loadoutNoticeName,
              tier: (0, SB.Y)(JB.loadoutNoticeTier),
              max: String(ZB.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, wB.jsx)(mI, {
            view: ZB,
            controller: IB
          }), (0, wB.jsx)(eI, {
            view: ZB,
            controller: IB
          }), (0, wB.jsx)(RI, {
            view: ZB,
            controller: IB
          })]
        })
      })
    }

    function lI(BB, IB, ZB) {
      const TB = BB.locatorEntries.find((BB => BB.locatorEntryId === ZB));
      if (!TB) return null;
      const JB = TB.locatorEntryName;
      if ("locatorDisarm" === IB) return TB.locatorEntryArmed ? {
        board: AI(BB, null),
        notice: tI("locatorNoticeDisarmed", JB)
      } : null;
      if ("locatorArm" === IB) return TB.locatorEntryOwned && !TB.locatorEntryArmed ? {
        board: AI(BB, ZB),
        notice: tI("locatorNoticeArmed", JB)
      } : null;
      if (TB.locatorEntryOwned || BB.locatorCoins < TB.locatorEntryPrice) return null;
      const oB = AI({
        ...BB,
        locatorCoins: BB.locatorCoins - TB.locatorEntryPrice
      }, ZB);
      return {
        board: {
          ...oB,
          locatorEntries: oB.locatorEntries.map((BB => BB.locatorEntryId === ZB ? {
            ...BB,
            locatorEntryOwned: !0
          } : BB))
        },
        notice: tI("locatorNoticeBought", JB)
      }
    }

    function AI(BB, IB) {
      return {
        ...BB,
        locatorEntries: BB.locatorEntries.map((BB => {
          const ZB = BB.locatorEntryId === IB;
          return BB.locatorEntryArmed === ZB ? BB : {
            ...BB,
            locatorEntryArmed: ZB
          }
        }))
      }
    }

    function tI(BB, IB) {
      return {
        locatorNoticeKey: BB,
        locatorNoticeRefused: !1,
        locatorNoticeName: IB
      }
    }
    const bI = "containmentLocatorView";
    class xI extends BI {
      constructor(BB, IB, ZB, TB) {
        super(BB, IB, ZB, TB, "locator", lI), this.snapshot = this.buildSnapshot()
      }
      messageOpens(BB) {
        return BB.locatorMessageOpens
      }
      messageNotice(BB) {
        return BB.locatorNotice
      }
      openingSelection(BB) {
        var IB;
        const ZB = BB.locatorEntries;
        return (null !== (IB = ZB.find((BB => BB.locatorEntryArmed))) && void 0 !== IB ? IB : ZB[0]).locatorEntryId
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
    const EI = {
        locatorContained: `${OB}:locatorFlavourContained`,
        locatorEncountered: `${OB}:locatorFlavourEncountered`,
        locatorUnseen: `${OB}:locatorFlavourUnseen`
      },
      DI = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${OB}:locatorAttunedNormal`,
        codexHardOnly: `${OB}:locatorAttunedHard`
      };

    function KI() {
      return (0, wB.jsx)(wB.Fragment, {
        children: Array.from({
          length: 5
        }, ((BB, IB) => (0, wB.jsx)("span", {
          className: "LocatorFly",
          children: (0, wB.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, IB)))
      })
    }

    function VI(BB) {
      let {
        entry: IB
      } = BB;
      const {
        t: ZB
      } = (0, hB.G)();
      return IB.locatorEntryArmed ? (0, wB.jsx)("span", {
        className: "BoardBadge Armed",
        children: ZB(`${OB}:locatorArmedBadge`)
      }) : IB.locatorEntryOwned ? (0, wB.jsx)("span", {
        className: "BoardBadge",
        children: ZB(`${OB}:locatorOwnedBadge`)
      }) : null
    }

    function SI(BB) {
      let {
        entry: IB,
        coins: ZB,
        inTile: TB = !1
      } = BB;
      return (0, wB.jsx)(HB, {
        itemName: YB,
        amount: IB.locatorEntryPrice,
        sv: ZB,
        inTile: TB
      })
    }

    function BZ(BB) {
      let {
        view: IB,
        controller: ZB,
        entry: TB
      } = BB;
      const {
        t: JB
      } = (0, hB.G)(), oB = TB.locatorEntryId, GB = IB.locators.locatorEntries.find((BB => BB.locatorEntryArmed && BB !== TB));
      return (0, wB.jsxs)("div", {
        className: "BoardActions",
        children: [TB.locatorEntryArmed && (0, wB.jsx)(NB.V, {
          disabled: IB.pending,
          onClick: () => {
            ZB.act("locatorDisarm", oB)
          },
          children: JB(`${OB}:locatorDisarm`)
        }), TB.locatorEntryOwned && !TB.locatorEntryArmed && (0, wB.jsx)(NB.g, {
          disabled: IB.pending,
          onClick: () => {
            ZB.act("locatorArm", oB)
          },
          children: JB(`${OB}:locatorArm`)
        }), !TB.locatorEntryOwned && (0, wB.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, wB.jsx)(SI, {
            entry: TB,
            coins: IB.locators.locatorCoins
          }), (0, wB.jsx)(NB.p, {
            disabled: IB.locators.locatorCoins < TB.locatorEntryPrice || IB.pending,
            onClick: () => {
              ZB.act("locatorBuy", oB)
            },
            children: JB(`${OB}:locatorBuy`)
          })]
        }), GB && !TB.locatorEntryArmed && (0, wB.jsx)("span", {
          className: "BoardHint",
          children: JB(`${OB}:locatorReplacesHint`, {
            name: GB.locatorEntryName
          })
        })]
      })
    }

    function IZ(BB) {
      let {
        entry: IB
      } = BB;
      return "locatorUnseen" === IB.locatorEntryStanding ? (0, wB.jsx)(pB, {
        itemName: "Compass"
      }) : (0, wB.jsx)(aB, {
        anomalyId: IB.locatorEntryId,
        caught: "locatorContained" === IB.locatorEntryStanding
      })
    }

    function ZZ(BB) {
      let {
        view: IB,
        controller: ZB,
        entry: TB
      } = BB;
      const {
        t: JB
      } = (0, hB.G)(), oB = DI[TB.locatorEntryDifficulty];
      return (0, wB.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, wB.jsxs)("div", {
          className: cB()("LocatorLabel", {
            Armed: TB.locatorEntryArmed
          }),
          children: [(0, wB.jsx)(RB, {
            icon: (0, wB.jsx)(IZ, {
              entry: TB
            }),
            name: JB(`${OB}:locatorName`, {
              name: TB.locatorEntryName
            }),
            children: (0, wB.jsx)(VI, {
              entry: TB
            })
          }), (0, wB.jsx)("p", {
            className: "BoardDescription",
            children: JB(TB.locatorEntryArmed ? `${OB}:locatorFlavourArmed` : EI[TB.locatorEntryStanding])
          }), null !== oB && (0, wB.jsx)("p", {
            className: "LocatorAttuned",
            children: JB(oB)
          }), (0, wB.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: JB(`${OB}:locatorUsage`)
          })]
        }), (0, wB.jsx)(BZ, {
          view: IB,
          controller: ZB,
          entry: TB
        })]
      })
    }

    function TZ(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, nB.h)(bI, IB.getSnapshot()),
        {
          t: TB
        } = (0, hB.G)(),
        JB = ZB.locators;
      if (null === JB) return null;
      const oB = JB.locatorEntries.find((BB => BB.locatorEntryId === ZB.selectedId)),
        GB = ZB.notice;
      return (0, wB.jsxs)(iB, {
        open: ZB.open,
        onDismiss: IB.dismiss,
        title: TB(`${OB}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, wB.jsx)(KI, {}),
        headerExtra: (0, wB.jsx)(rB, {
          coins: JB.locatorCoins
        }),
        statusRefused: null === GB || void 0 === GB ? void 0 : GB.locatorNoticeRefused,
        status: (0, wB.jsxs)(wB.Fragment, {
          children: [(0, wB.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: TB(`${OB}:locatorKeeperName`)
          }), null !== GB && TB(`${OB}:${GB.locatorNoticeKey}`, {
            name: GB.locatorNoticeName
          })]
        }),
        children: [(0, wB.jsx)("div", {
          className: "BoardTiles",
          children: JB.locatorEntries.map((BB => (0, wB.jsxs)(PB, {
            icon: (0, wB.jsx)(IZ, {
              entry: BB
            }),
            name: BB.locatorEntryName,
            selected: BB === oB,
            locked: !1,
            className: cB()("LocatorTag", {
              Armed: BB.locatorEntryArmed
            }),
            onSelect: () => {
              IB.select(BB.locatorEntryId)
            },
            children: [(0, wB.jsx)(VI, {
              entry: BB
            }), !BB.locatorEntryOwned && (0, wB.jsx)(SI, {
              entry: BB,
              coins: JB.locatorCoins,
              inTile: !0
            })]
          }, BB.locatorEntryId)))
        }), (0, wB.jsx)(ZZ, {
          view: ZB,
          controller: IB,
          entry: oB
        })]
      })
    }

    function JZ(BB) {
      let {
        loadout: IB,
        codex: ZB,
        locator: TB
      } = BB;
      return (0, wB.jsxs)(wB.Fragment, {
        children: [(0, wB.jsx)(fI, {
          controller: IB
        }), (0, wB.jsx)(VB, {
          controller: ZB
        }), (0, wB.jsx)(TZ, {
          controller: TB
        })]
      })
    }
    var oZ = ZB(38593);
    class GZ {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = BB, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new oZ.e({
          spacingMs: 0,
          now: IB
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(BB, IB) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, IB(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(BB), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
    }
    var vZ = ZB(38590);
    const kZ = new Map([
      ["npc_general", gI],
      ["npc_tentacle_guy", vZ]
    ]);

    function cZ(BB) {
      const IB = kZ.get(BB);
      if (void 0 === IB) return null;
      const ZB = document.createElement("img");
      return ZB.src = IB, ZB.alt = "", ZB.draggable = !1, ZB.style.imageRendering = "pixelated", ZB
    }
    const nZ = function() {
      let BB, IB = !1,
        ZB = null,
        kB = null;
      const cB = [],
        nB = BB => {
          for (const IB of cB) IB !== BB && IB.close();
          (0, vB.t)()
        },
        hB = BB => {
          BB && (0, vB.i)()
        },
        zB = new GZ((IB => {
          BB.sendCommand(IB)
        })),
        FB = new FI((BB => {
          GB.l.Gq(zI, BB, !0)
        }), nB, hB, zB),
        NB = new LB((BB => {
          GB.l.Gq(XB, BB, !0)
        }), nB, hB),
        gB = new xI((BB => {
          GB.l.Gq(bI, BB, !0)
        }), nB, hB, zB);
      cB.push(FB, NB, gB);
      return {
        onCreate: IB => {
          BB = IB, ZB = (0, vB.x)(null, {
            content: (0, TB.createElement)(JZ, {
              loadout: FB,
              codex: NB,
              locator: gB
            }),
            onClose: () => {
              for (const BB of cB) BB.close()
            }
          }), kB = (0, oB.g)(cZ)
        },
        onReceivedMessageFromServer: (BB, IB) => {
          "containmentLoadout" === BB ? FB.sN(IB) : "containmentLoadoutClose" === BB ? FB.isOpen() && (FB.close(), (0, vB.f)()) : "containmentCodex" === BB ? NB.sN(IB) : "containmentLocator" === BB && gB.sN(IB)
        },
        Iz: () => {
          IB || JB.d.get("loadingOverlayVisible") || (IB = !0, BB.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var BB, IB;
          null === (BB = ZB) || void 0 === BB || BB(), ZB = null, null === (IB = kB) || void 0 === IB || IB(), kB = null;
          for (const ZB of cB) ZB.dispose();
          zB.dispose()
        }
      }
    }
  },
  39370: (BB, IB, ZB) => {
    var TB = {
      "./breach-zero-uncaught.webp": 39373,
      "./breach-zero.webp": 39379,
      "./brood-father-uncaught.webp": 39382,
      "./brood-father.webp": 39390,
      "./carousel-uncaught.webp": 39392,
      "./carousel.webp": 39400,
      "./deadlock-uncaught.webp": 39407,
      "./deadlock.webp": 39416,
      "./frost-revenant-uncaught.webp": 39421,
      "./frost-revenant.webp": 39429,
      "./hollow-choir-uncaught.webp": 39433,
      "./hollow-choir.webp": 39438,
      "./magma-warden-uncaught.webp": 39441,
      "./magma-warden.webp": 39450,
      "./patient-zero-uncaught.webp": 39453,
      "./patient-zero.webp": 39461,
      "./siege-engine-uncaught.webp": 39470,
      "./siege-engine.webp": 39473,
      "./warp-stalker-uncaught.webp": 39479,
      "./warp-stalker.webp": 39481
    };

    function JB(BB) {
      var IB = oB(BB);
      return ZB(IB)
    }

    function oB(BB) {
      if (!ZB.o(TB, BB)) {
        var IB = new Error("Cannot find module '" + BB + "'");
        throw IB.code = "MODULE_NOT_FOUND", IB
      }
      return TB[BB]
    }
    JB.keys = function() {
      return Object.keys(TB)
    }, JB.resolve = oB, BB.exports = JB, JB.id = 39370
  },
  39373: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39379: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39382: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39390: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39392: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39400: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39407: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39416: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39421: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39429: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39433: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39438: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39441: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39450: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39453: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39461: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39470: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39473: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39479: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39481: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38590: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);