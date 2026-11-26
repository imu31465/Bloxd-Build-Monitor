export const id = 15;
export const ids = [15];
export const modules = {
  40027: (BB, OB, GB) => {
    var YB = {
      "./breach-zero-uncaught.webp": 40034,
      "./breach-zero.webp": 40042,
      "./brood-father-uncaught.webp": 40050,
      "./brood-father.webp": 40059,
      "./carousel-uncaught.webp": 40065,
      "./carousel.webp": 40068,
      "./deadlock-uncaught.webp": 40077,
      "./deadlock.webp": 40085,
      "./doom-warlord-uncaught.webp": 40092,
      "./doom-warlord.webp": 40094,
      "./frost-revenant-uncaught.webp": 40096,
      "./frost-revenant.webp": 40098,
      "./hollow-choir-uncaught.webp": 40103,
      "./hollow-choir.webp": 40107,
      "./magma-warden-uncaught.webp": 40111,
      "./magma-warden.webp": 40114,
      "./patient-zero-uncaught.webp": 40117,
      "./patient-zero.webp": 40123,
      "./siege-engine-uncaught.webp": 40125,
      "./siege-engine.webp": 40130,
      "./warp-stalker-uncaught.webp": 40137,
      "./warp-stalker.webp": 40143
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 40027
  },
  39226: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    const YB = 4,
      DB = 12e3,
      QB = 1e3;
    class oB {
      constructor() {
        let {
          limit: BB = YB,
          windowMs: OB = DB,
          spacingMs: GB = QB,
          now: oB = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = BB, this.windowMs = OB, this.spacingMs = GB, this.now = oB
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
          OB = this.lastSentAt + this.spacingMs,
          GB = Math.min(OB > BB ? OB : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        GB !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, GB - BB)))
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  39200: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB
    });
    class YB {
      constructor(BB, OB, GB) {
        this.tM = BB, this.beforeOpen = OB, this.afterClose = GB, this.open = !1, this.Vp = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Vp && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.Vp = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Vp || (this.snapshot = this.buildSnapshot(), this.tM(this.snapshot))
      }
    }
  },
  40020: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => MG
    });
    var YB = GB(56);
    var DB = GB(16),
      QB = GB(2010),
      oB = GB(25),
      jB = GB(37267),
      yB = GB(1090),
      JB = GB.n(yB),
      MB = GB(1480),
      PB = GB(1175),
      zB = GB(4946),
      lB = GB(1398),
      pB = GB(1485),
      qB = GB(2012),
      ZB = GB(1405),
      NB = GB(2e3),
      RB = GB(2063),
      WB = GB(204);
    const AB = GB(40027),
      VB = Object.fromEntries(AB.keys().map((BB => [BB.replace(/^\.\/(.*)\.webp$/, "$1"), AB(BB)]))),
      SB = new Set;

    function nB(BB, OB) {
      const GB = OB ? BB : `${BB}-uncaught`,
        YB = (0, WB.c)(VB, GB);
      return void 0 !== YB || SB.has(GB) || (SB.add(GB), console.warn(`Containment Breach has no mugshot ${GB}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), YB
    }
    var UB = GB(1282);
    const fB = "containmentBreach",
      kB = "Gold Coin";

    function dB(BB) {
      let {
        open: OB,
        onDismiss: GB,
        title: YB,
        className: DB,
        decor: QB,
        headerExtra: oB,
        status: jB,
        statusRefused: yB = !1,
        children: MB
      } = BB;
      const PB = `${DB}Title`;
      return (0, UB.jsx)(zB.d, {
        show: OB,
        close: GB,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, UB.jsxs)("section", {
          className: JB()("ContainmentBoardPanel", DB),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": PB,
          children: [QB && (0, UB.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: QB
          }), (0, UB.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, UB.jsx)("h2", {
              id: PB,
              className: "VisuallyHidden",
              children: YB
            }), oB, (0, UB.jsx)(pB.m, {
              onClick: GB
            })]
          }), (0, UB.jsx)("div", {
            className: "BoardBody",
            children: MB
          }), void 0 !== jB && (0, UB.jsx)("footer", {
            className: JB()("BoardStatus", {
              Refused: yB
            }),
            children: jB
          })]
        })
      })
    }

    function KB(BB) {
      let {
        itemName: OB
      } = BB;
      return (0, UB.jsx)(qB.c, {
        itemName: OB,
        amount: 0
      })
    }

    function uB(BB) {
      let {
        anomalyId: OB,
        caught: GB
      } = BB;
      const DB = (0, YB.useRef)(null);
      return (0, lB.b)(DB, !GB), (0, UB.jsx)("span", {
        ref: DB,
        className: JB()("BoardMugshot", {
          Uncaught: !GB
        }),
        children: (0, UB.jsx)("img", {
          src: nB(OB, GB),
          alt: "",
          draggable: !1
        })
      })
    }

    function mB(BB) {
      let {
        itemName: OB,
        amount: GB,
        sJ: YB,
        inTile: DB = !1
      } = BB;
      return (0, UB.jsx)(ZB.g, {
        delayShow: 200,
        hoverOnly: DB,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, UB.jsx)(FB, {
          itemName: OB,
          amount: GB,
          sJ: YB
        }),
        children: (0, UB.jsxs)("span", {
          className: JB()("BoardChip", {
            Short: void 0 !== YB && YB < GB
          }),
          children: [(0, UB.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, UB.jsx)(KB, {
              itemName: OB
            })
          }), GB.toLocaleString()]
        })
      })
    }
    const IB = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function FB(BB) {
      var OB;
      let {
        itemName: GB,
        amount: YB,
        sJ: DB
      } = BB;
      const {
        t: QB
      } = (0, PB.H)(), oB = (0, RB.f)("itemInfo", (BB => BB[GB])), {
        lore: jB,
        droppedBy: yB
      } = function(BB) {
        if ("string" !== typeof BB) return {
          lore: BB,
          droppedBy: null
        };
        const OB = IB.exec(BB);
        return null === OB ? {
          lore: BB,
          droppedBy: null
        } : {
          lore: "" === OB[1] ? void 0 : OB[1],
          droppedBy: OB[2]
        }
      }(null === oB || void 0 === oB ? void 0 : oB.description);
      return (0, UB.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, UB.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, UB.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, UB.jsx)(KB, {
              itemName: GB
            })
          }), (0, UB.jsx)(NB.b, {
            text: null !== (OB = null === oB || void 0 === oB ? void 0 : oB.displayName) && void 0 !== OB ? OB : GB,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== jB || null !== yB) && (0, UB.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== jB && (0, UB.jsx)(NB.b, {
            text: jB,
            className: "BoardChipTooltipDescription"
          }), null !== yB && (0, UB.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, UB.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: QB(`${fB}:chipDroppedBy`)
            }), yB]
          })]
        }), void 0 !== DB && (0, UB.jsxs)("div", {
          className: JB()("BoardChipTooltipHeld", {
            Short: DB < YB
          }),
          children: [(0, UB.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: QB(`${fB}:chipYouHave`)
          }), (0, UB.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, UB.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: DB.toLocaleString()
            }), ` / ${YB.toLocaleString()}`]
          }), (0, UB.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, UB.jsx)("span", {
              style: {
                width: (YB > 0 ? 100 * Math.min(1, DB / YB) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function iB(BB) {
      let {
        icon: OB,
        name: GB,
        selected: YB,
        locked: DB,
        className: QB,
        buttonRef: oB,
        onSelect: jB,
        children: yB
      } = BB;
      return (0, UB.jsxs)("button", {
        ref: oB,
        type: "button",
        className: JB()("BoardTile", QB, {
          Selected: YB,
          Locked: DB
        }),
        onClick: jB,
        children: [(0, UB.jsx)("span", {
          className: "BoardTileIcon",
          children: OB
        }), (0, UB.jsx)("span", {
          className: "BoardTileName",
          children: GB
        }), yB]
      })
    }

    function LB(BB) {
      let {
        icon: OB,
        name: GB,
        children: YB
      } = BB;
      return (0, UB.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, UB.jsx)("span", {
          className: "BoardDetailIcon",
          children: OB
        }), (0, UB.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, UB.jsx)("h3", {
            children: GB
          }), (0, UB.jsx)("span", {
            className: "BoardDetailStatus",
            children: YB
          })]
        })]
      })
    }

    function gB(BB) {
      let {
        coins: OB,
        children: GB
      } = BB;
      return (0, UB.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, UB.jsx)(mB, {
          itemName: kB,
          amount: OB
        }), GB]
      })
    }
    var rB = GB(39200);
    const XB = "containmentCodexView";
    class wB extends rB.d {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = BB => {
          this.selectedId = BB, this.emit()
        }
      }
      nP(BB) {
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
    const EB = {
        codexAnyDifficulty: `${fB}:codexNeedsAny`,
        codexNormalOnly: `${fB}:codexNeedsNormal`,
        codexHardOnly: `${fB}:codexNeedsHard`
      },
      cB = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      hB = {
        codexContained: `${fB}:codexContainedBadge`,
        codexEncountered: `${fB}:codexEncounteredBadge`,
        codexUnidentified: `${fB}:codexUnidentifiedBadge`
      },
      aB = ["94%", "81%", "88%", "46%", "72%"];

    function eB(BB) {
      let {
        entry: OB
      } = BB;
      const {
        t: GB
      } = (0, PB.H)();
      return (0, UB.jsx)("span", {
        className: JB()("BoardBadge", cB[OB.codexEntryState]),
        children: GB(hB[OB.codexEntryState])
      })
    }

    function TB(BB) {
      const {
        t: OB
      } = (0, PB.H)();
      return "codexUnidentified" === BB.codexEntryState ? OB(`${fB}:codexUnidentifiedName`) : BB.codexEntryName
    }

    function bB(BB) {
      let {
        entry: OB
      } = BB;
      return "codexUnidentified" === OB.codexEntryState ? (0, UB.jsx)(KB, {
        itemName: "Book"
      }) : (0, UB.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, UB.jsx)(uB, {
          anomalyId: OB.codexEntryId,
          caught: "codexContained" === OB.codexEntryState
        }), (0, UB.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function CB(BB) {
      let {
        entry: OB,
        selected: GB,
        onSelect: YB
      } = BB;
      const DB = "codexUnidentified" === OB.codexEntryState;
      return (0, UB.jsxs)(iB, {
        icon: (0, UB.jsx)(bB, {
          entry: OB
        }),
        name: TB(OB),
        selected: GB,
        locked: DB,
        className: JB()("CodexFolder", cB[OB.codexEntryState]),
        onSelect: () => {
          YB(OB.codexEntryId)
        },
        children: [!DB && (0, UB.jsx)(eB, {
          entry: OB
        }), DB && (0, UB.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function HB(BB) {
      let {
        count: OB
      } = BB;
      const GB = [];
      for (let YB = Math.min(OB, 25); YB > 0; YB -= 5) GB.push(Math.min(YB, 5));
      return (0, UB.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: GB.map(((BB, OB) => (0, UB.jsx)("span", {
          className: JB()("CodexTallyGroup", {
            Gate: 5 === BB
          }),
          children: Array.from({
            length: Math.min(BB, 4)
          }, ((BB, OB) => (0, UB.jsx)("span", {
            className: "CodexTallyMark"
          }, OB)))
        }, OB)))
      })
    }

    function vB(BB) {
      let {
        contained: OB,
        total: GB
      } = BB;
      const {
        t: YB
      } = (0, PB.H)();
      return (0, UB.jsxs)("div", {
        className: "CodexProgress",
        children: [YB(`${fB}:codexProgress`, {
          contained: String(OB),
          total: String(GB)
        }), (0, UB.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, UB.jsx)("span", {
            style: {
              width: OB / GB * 100 + "%"
            }
          })
        })]
      })
    }

    function sB(BB) {
      let {
        entry: OB,
        fileNumber: GB
      } = BB;
      const {
        t: YB
      } = (0, PB.H)(), DB = "codexContained" === OB.codexEntryState;
      return (0, UB.jsx)("section", {
        className: "BoardDetail",
        children: (0, UB.jsxs)("article", {
          className: JB()("CodexDossier", cB[OB.codexEntryState]),
          children: [(0, UB.jsx)("span", {
            className: "CodexFileNumber",
            children: YB(`${fB}:codexFileNumber`, {
              number: String(GB).padStart(3, "0")
            })
          }), (0, UB.jsx)(LB, {
            icon: (0, UB.jsx)(bB, {
              entry: OB
            }),
            name: TB(OB),
            children: (0, UB.jsx)(eB, {
              entry: OB
            })
          }), DB && (0, UB.jsxs)(UB.Fragment, {
            children: [(0, UB.jsx)("p", {
              className: "BoardDescription",
              children: OB.codexEntryLore
            }), (0, UB.jsxs)("p", {
              className: "CodexTally",
              children: [YB(`${fB}:codexContainments`, {
                count: String(OB.codexEntryContainedCount)
              }), (0, UB.jsx)(HB, {
                count: OB.codexEntryContainedCount
              })]
            }), (0, UB.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: YB(`${fB}:codexContainedBadge`)
            })]
          }), !DB && (0, UB.jsxs)(UB.Fragment, {
            children: [(0, UB.jsxs)("div", {
              className: "CodexRedaction",
              children: [aB.map((BB => (0, UB.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: BB
                }
              }, BB))), (0, UB.jsx)("p", {
                className: "CodexRedacted",
                children: YB(`${fB}:codexRedacted`)
              })]
            }), "" !== OB.codexEntryHint && (0, UB.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, UB.jsx)("h4", {
                children: YB(`${fB}:codexHintLabel`)
              }), (0, UB.jsx)("p", {
                children: OB.codexEntryHint
              })]
            }), (0, UB.jsx)("p", {
              className: "CodexClearance",
              children: YB(EB[OB.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function xB(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, MB.i)(XB, OB.getSnapshot()),
        {
          t: YB
        } = (0, PB.H)();
      if (0 === GB.entries.length) return null;
      const DB = GB.entries.find((BB => BB.codexEntryId === GB.selectedId)),
        QB = GB.entries.filter((BB => "codexContained" === BB.codexEntryState)).length,
        oB = GB.entries.map((BB => BB.codexEntryId)).sort().indexOf(DB.codexEntryId) + 1;
      return (0, UB.jsxs)(dB, {
        open: GB.open,
        onDismiss: OB.dismiss,
        title: YB(`${fB}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, UB.jsx)(vB, {
          contained: QB,
          total: GB.entries.length
        }),
        children: [(0, UB.jsx)("div", {
          className: "BoardTiles",
          children: GB.entries.map((BB => (0, UB.jsx)(CB, {
            entry: BB,
            selected: BB === DB,
            onSelect: OB.select
          }, BB.codexEntryId)))
        }), (0, UB.jsx)(sB, {
          entry: DB,
          fileNumber: oB
        })]
      })
    }
    var tB = GB(353);
    class BO extends rB.d {
      constructor(BB, OB, GB, YB, DB, QB) {
        super(BB, OB, GB), this.pacer = YB, this.command = DB, this.predict = QB, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = BB => {
          this.selectedId = BB, this.emit()
        }, this.act = (BB, OB) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${BB} ${OB}`, this.rollBack)) return;
          const GB = this.predict(this.board, BB, OB);
          null !== GB && (this.board = GB.board, this.notice = GB.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = YB.subscribe((() => {
          this.emit()
        }))
      }
      nP(BB) {
        const OB = this.messageOpens(BB);
        if (OB && this.open) return this.board === this.confirmed && (this.board = BB), this.confirmed = BB, void this.emit();
        if (this.board = BB, this.confirmed = BB, this.pacer.onReply(), OB) return this.notice = null, this.selectedId = this.openingSelection(BB), void this.show();
        const GB = this.messageNotice(BB);
        null !== GB && (this.notice = GB), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function OO(BB, OB) {
      return BB.loadoutCoins >= OB.loadoutCostCoins && OB.loadoutCostParts.every((OB => function(BB, OB) {
        return GO(BB, OB).loadoutHeldPartAmount
      }(BB, OB.loadoutPartCurrency) >= OB.loadoutPartAmount))
    }

    function GO(BB, OB) {
      return BB.loadoutHeldParts.find((BB => BB.loadoutHeldPartCurrency === OB))
    }

    function YO(BB, OB) {
      return BB.loadoutSlots.find((BB => BB.loadoutSlotKind === OB))
    }

    function DO(BB) {
      return BB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)).length >= BB.loadoutMaxPerks
    }

    function QO(BB, OB, GB) {
      for (const DB of BB.loadoutSlots) {
        const YB = DB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === GB));
        if (YB) return "loadoutArmour" === DB.loadoutSlotKind ? jO(BB, DB, YB, OB) : oO(BB, DB, YB, OB)
      }
      const YB = BB.loadoutPerks.find((BB => BB.loadoutPerkId === GB));
      return YB ? function(BB, OB, GB) {
        const YB = OB.loadoutPerkOwned,
          DB = OB.loadoutPerkEquipped,
          QB = OB.loadoutPerkName,
          oB = DO(BB);
        if ("loadoutUnlock" === GB) {
          if (YB || !OO(BB, OB.loadoutPerkCost)) return null;
          const GB = {
            ...OB,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !oB
          };
          return {
            board: JO(MO(BB, OB.loadoutPerkCost), GB),
            notice: PO(oB ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", QB)
          }
        }
        if ("loadoutUpgrade" === GB || !YB || "loadoutEquip" === GB === DB || !DB && oB) return null;
        return {
          board: JO(BB, {
            ...OB,
            loadoutPerkEquipped: !DB
          }),
          notice: PO(DB ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", QB)
        }
      }(BB, YB, OB) : null
    }

    function oO(BB, OB, GB, YB) {
      const DB = GB.loadoutOptionOwnedTier,
        QB = GB.loadoutOptionName;
      if ("loadoutEquip" === YB) return 0 === DB ? null : {
        board: yO(BB, OB, GB.loadoutOptionId, null),
        notice: PO("loadoutNoticeEquipped", QB)
      };
      const oB = "loadoutUnlock" === YB;
      if (oB && 0 !== DB || "loadoutUpgrade" === YB && (0 === DB || DB >= GB.loadoutOptionTiers.length) || "loadoutUnequip" === YB) return null;
      const jB = GB.loadoutOptionTiers[DB].loadoutTierCost;
      if (!OO(BB, jB)) return null;
      const yB = {
          ...GB,
          loadoutOptionOwnedTier: DB + 1
        },
        JB = oB ? GB.loadoutOptionId : OB.loadoutSlotEquippedId;
      return {
        board: yO(MO(BB, jB), OB, JB, yB),
        notice: oB ? PO("loadoutNoticeUnlocked", QB) : PO("loadoutNoticeUpgraded", QB, DB + 1)
      }
    }

    function jO(BB, OB, GB, YB) {
      const DB = GB.loadoutOptionOwnedTier > 0,
        QB = GB.loadoutOptionName;
      if ("loadoutEquip" === YB && DB) return {
        board: yO(BB, OB, GB.loadoutOptionId, null),
        notice: PO("loadoutNoticeEquipped", QB)
      };
      const oB = GB.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== YB || DB || !OO(BB, oB) ? null : {
        board: yO(MO(BB, oB), OB, GB.loadoutOptionId, {
          ...GB,
          loadoutOptionOwnedTier: 1
        }),
        notice: PO("loadoutNoticeUnlocked", QB)
      }
    }

    function yO(BB, OB, GB, YB) {
      const DB = {
        ...OB,
        loadoutSlotEquippedId: GB,
        loadoutSlotOptions: OB.loadoutSlotOptions.map((BB => null !== YB && BB.loadoutOptionId === YB.loadoutOptionId ? YB : BB))
      };
      return {
        ...BB,
        loadoutSlots: BB.loadoutSlots.map((BB => BB === OB ? DB : BB))
      }
    }

    function JO(BB, OB) {
      return {
        ...BB,
        loadoutPerks: BB.loadoutPerks.map((BB => BB.loadoutPerkId === OB.loadoutPerkId ? OB : BB))
      }
    }

    function MO(BB, OB) {
      return {
        ...BB,
        loadoutCoins: BB.loadoutCoins - OB.loadoutCostCoins,
        loadoutHeldParts: BB.loadoutHeldParts.map((BB => {
          const GB = OB.loadoutCostParts.find((OB => OB.loadoutPartCurrency === BB.loadoutHeldPartCurrency));
          return GB ? {
            ...BB,
            loadoutHeldPartAmount: BB.loadoutHeldPartAmount - GB.loadoutPartAmount
          } : BB
        }))
      }
    }

    function PO(BB, OB) {
      return {
        loadoutNoticeKey: BB,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: OB,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const zO = "containmentLoadoutView";
    class lO extends BO {
      constructor(BB, OB, GB, YB) {
        super(BB, OB, GB, YB, "loadout", QO), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = BB => {
          this.slot = BB, this.selectedId = pO(this.board, BB), this.emit()
        }
      }
      messageOpens(BB) {
        return BB.loadoutMessageOpens
      }
      messageNotice(BB) {
        return BB.loadoutNotice
      }
      openingSelection(BB) {
        return pO(BB, this.slot)
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

    function pO(BB, OB) {
      if ("loadoutPerks" === OB) {
        var GB;
        const OB = BB.loadoutPerks;
        return (null !== (GB = OB.find((BB => BB.loadoutPerkEquipped))) && void 0 !== GB ? GB : OB[0]).loadoutPerkId
      }
      return YO(BB, OB).loadoutSlotEquippedId
    }
    const qO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var ZO = GB(37572),
      NO = GB(1268);
    const RO = {
        loadoutPrimary: `${fB}:loadoutSlotPrimary`,
        loadoutSecondary: `${fB}:loadoutSlotSecondary`,
        loadoutOffensive: `${fB}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${fB}:loadoutSlotSelfHelp`,
        loadoutArmour: `${fB}:loadoutSlotArmour`,
        loadoutPerks: `${fB}:loadoutSlotPerks`
      },
      WO = {
        section: "right",
        pl: "bottom",
        act: "top"
      },
      AO = (0, YB.createContext)({
        step: null,
        targetRef: () => {}
      });

    function VO() {
      const {
        step: BB,
        targetRef: OB
      } = (0, YB.useContext)(AO);
      return (GB, YB) => (null === BB || void 0 === BB ? void 0 : BB.kind) === GB && BB.id === YB ? OB : void 0
    }

    function SO(BB, OB) {
      const GB = OB.loadoutTargetId;
      if ("loadoutPerks" === OB.loadoutTargetSection) {
        const OB = BB.loadoutPerks.find((BB => BB.loadoutPerkId === GB));
        return {
          name: OB.loadoutPerkName,
          owned: OB.loadoutPerkOwned,
          equipped: OB.loadoutPerkEquipped
        }
      }
      const YB = YO(BB, OB.loadoutTargetSection),
        DB = YB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === GB));
      return {
        name: DB.loadoutOptionName,
        owned: DB.loadoutOptionOwnedTier > 0,
        equipped: YB.loadoutSlotEquippedId === GB
      }
    }

    function nO(BB, OB, GB, YB) {
      const [DB, QB] = BB(`${fB}:${OB}`, {
        [GB]: "\x01"
      }).split("\x01");
      return (0, UB.jsxs)(UB.Fragment, {
        children: [DB, (0, UB.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: YB
        }), QB]
      })
    }

    function UO(BB) {
      let {
        view: OB,
        onDismiss: GB,
        children: DB
      } = BB;
      const {
        t: QB
      } = (0, PB.H)(), oB = OB.loadout, jB = OB.open ? oB.loadoutWalkthrough.map((BB => ({
        target: BB,
        info: SO(oB, BB)
      }))).find((BB => {
        let {
          info: OB
        } = BB;
        return !OB.equipped
      })) : void 0;
      let yB = null,
        JB = null;
      if (void 0 !== jB) {
        const {
          target: BB,
          info: GB
        } = jB;
        OB.slot !== BB.loadoutTargetSection ? (yB = {
          kind: "section",
          id: BB.loadoutTargetSection
        }, JB = nO(QB, "loadoutWalkthroughSection", "section", QB(RO[BB.loadoutTargetSection]))) : OB.selectedId !== BB.loadoutTargetId ? (yB = {
          kind: "pl",
          id: BB.loadoutTargetId
        }, JB = nO(QB, "loadoutWalkthroughPick", "name", GB.name)) : (yB = {
          kind: "act",
          id: BB.loadoutTargetId
        }, JB = nO(QB, GB.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", GB.name))
      }
      const MB = null === yB ? null : function(BB) {
          return `${BB.kind}:${BB.id}`
        }(yB),
        [zB, lB] = (0, YB.useState)(null),
        pB = (0, YB.useCallback)((BB => {
          lB((OB => null !== BB ? {
            key: MB,
            node: BB
          } : (null === OB || void 0 === OB ? void 0 : OB.key) === MB ? null : OB))
        }), [MB]),
        qB = null !== MB && (null === zB || void 0 === zB ? void 0 : zB.key) === MB ? zB.node : null;
      return (0, UB.jsxs)(AO.Provider, {
        value: {
          step: yB,
          targetRef: pB
        },
        children: [DB, null !== yB && null !== qB && (0, UB.jsx)(fO, {
          target: qB,
          placement: WO[yB.kind],
          onDismiss: GB,
          children: JB
        }, MB)]
      })
    }

    function fO(BB) {
      let {
        target: OB,
        placement: GB,
        onDismiss: DB,
        children: QB
      } = BB;
      const {
        t: oB
      } = (0, PB.H)(), jB = (0, YB.useRef)(OB);
      return jB.current = OB, (0, NO.v)("popup", jB, DB), (0, UB.jsxs)(ZO.f, {
        target: OB,
        placement: GB,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, UB.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, UB.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: qO,
            alt: "",
            draggable: !1
          }), (0, UB.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: oB(`${fB}:operatorName`)
          }), (0, UB.jsx)(pB.m, {
            onClick: DB,
            ariaLabel: oB(`${fB}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, UB.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: QB
        })]
      })
    }
    const kO = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function dO(BB) {
      let {
        cost: OB,
        loadout: GB
      } = BB;
      const {
        t: YB
      } = (0, PB.H)();
      return OB.loadoutCostCoins <= 0 && 0 === OB.loadoutCostParts.length ? (0, UB.jsx)("span", {
        className: "LoadoutCost",
        children: YB(`${fB}:loadoutFree`)
      }) : (0, UB.jsxs)("span", {
        className: "LoadoutCost",
        children: [OB.loadoutCostCoins > 0 && (0, UB.jsx)(mB, {
          itemName: kB,
          amount: OB.loadoutCostCoins,
          sJ: GB.loadoutCoins
        }), OB.loadoutCostParts.map((BB => {
          const OB = GO(GB, BB.loadoutPartCurrency);
          return (0, UB.jsx)(mB, {
            itemName: OB.loadoutHeldPartItem,
            amount: BB.loadoutPartAmount,
            sJ: OB.loadoutHeldPartAmount
          }, BB.loadoutPartCurrency)
        }))]
      })
    }
    const KO = {
      loadoutStatFireRate: `${fB}:loadoutUnitPerMinute`,
      loadoutStatReload: `${fB}:loadoutUnitSeconds`,
      loadoutStatResupply: `${fB}:loadoutUnitSeconds`
    };

    function uO(BB) {
      return "loadoutStatPotency" === BB.loadoutStatKind ? (0, tB.S)(BB.loadoutStatValue) : String(BB.loadoutStatValue)
    }

    function mO(BB) {
      var OB;
      let {
        option: GB
      } = BB;
      const {
        t: YB
      } = (0, PB.H)(), DB = GB.loadoutOptionTiers, QB = null === (OB = DB[0]) || void 0 === OB ? void 0 : OB.loadoutTierStats.map((BB => BB.loadoutStatKind));
      if (!QB || 0 === QB.length) return null;
      const oB = GB.loadoutOptionOwnedTier,
        jB = (BB, OB) => {
          var GB;
          return null === (GB = DB[BB]) || void 0 === GB ? void 0 : GB.loadoutTierStats.find((BB => BB.loadoutStatKind === OB))
        };
      return (0, UB.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, UB.jsx)("thead", {
          children: (0, UB.jsxs)("tr", {
            children: [(0, UB.jsx)("th", {}), DB.map(((BB, OB) => (0, UB.jsx)("th", {
              className: JB()({
                Current: OB + 1 === oB,
                Next: OB === oB
              }),
              children: YB(`${fB}:loadoutTier`, {
                tier: (0, tB.S)(OB + 1)
              })
            }, OB)))]
          })
        }), (0, UB.jsx)("tbody", {
          children: QB.map((BB => {
            const OB = KO[BB];
            return (0, UB.jsxs)("tr", {
              children: [(0, UB.jsxs)("th", {
                scope: "row",
                children: [YB(`${fB}:${BB}`), OB && (0, UB.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: YB(OB)
                })]
              }), DB.map(((OB, GB) => {
                const YB = jB(GB, BB),
                  DB = GB > 0 ? jB(GB - 1, BB) : void 0,
                  QB = YB && DB ? YB.loadoutStatValue - DB.loadoutStatValue : 0,
                  yB = kO.has(BB) ? QB < 0 : QB > 0,
                  MB = GB === oB;
                return (0, UB.jsxs)("td", {
                  className: JB()({
                    Current: GB + 1 === oB,
                    Next: MB,
                    Gain: yB,
                    Owned: GB < oB
                  }),
                  children: [MB && yB && (0, UB.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: QB < 0 ? "\u25bc" : "\u25b2"
                  }), YB ? uO(YB) : "-"]
                }, GB)
              }))]
            }, BB)
          }))
        })]
      })
    }

    function IO(BB) {
      let {
        view: OB,
        controller: GB,
        slot: YB,
        option: DB
      } = BB;
      const {
        t: QB
      } = (0, PB.H)(), oB = OB.loadout, jB = DB.loadoutOptionOwnedTier, yB = DB.loadoutOptionTiers.length, JB = YB.loadoutSlotEquippedId === DB.loadoutOptionId, MB = jB < yB ? DB.loadoutOptionTiers[jB].loadoutTierCost : null, zB = null !== MB && OO(oB, MB), lB = DB.loadoutOptionId, qB = VO();
      return (0, UB.jsxs)(UB.Fragment, {
        children: [(0, UB.jsx)(iO, {
          icon: DB.loadoutOptionIcon,
          name: DB.loadoutOptionName,
          status: 0 === jB ? QB(`${fB}:loadoutLocked`) : yB > 1 ? QB(`${fB}:loadoutTier`, {
            tier: (0, tB.S)(jB)
          }) : null,
          locked: 0 === jB,
          equipped: JB
        }), (0, UB.jsx)("p", {
          className: "BoardDescription",
          children: DB.loadoutOptionDescription
        }), (0, UB.jsx)(mO, {
          option: DB
        }), (0, UB.jsxs)("div", {
          ref: qB("act", lB),
          className: "BoardActions",
          children: [null !== MB && (0, UB.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, UB.jsx)(dO, {
              cost: MB,
              loadout: oB
            }), (0, UB.jsx)(pB.q, {
              disabled: !zB || OB.pending,
              onClick: () => {
                GB.act(0 === jB ? "loadoutUnlock" : "loadoutUpgrade", lB)
              },
              children: 0 === jB ? QB(`${fB}:loadoutUnlock`) : QB(`${fB}:loadoutUpgrade`, {
                tier: (0, tB.S)(jB + 1)
              })
            })]
          }), null === MB && yB > 1 && (0, UB.jsx)("span", {
            className: "BoardHint",
            children: QB(`${fB}:loadoutMaxed`)
          }), jB > 0 && !JB && (0, UB.jsx)(pB.f, {
            disabled: OB.pending,
            onClick: () => {
              GB.act("loadoutEquip", lB)
            },
            children: QB(`${fB}:loadoutEquip`)
          })]
        })]
      })
    }

    function FO(BB) {
      let {
        view: OB,
        controller: GB,
        perk: YB
      } = BB;
      const {
        t: DB
      } = (0, PB.H)(), QB = OB.loadout, oB = DO(QB), jB = YB.loadoutPerkId, yB = VO();
      return (0, UB.jsxs)(UB.Fragment, {
        children: [(0, UB.jsx)(iO, {
          icon: YB.loadoutPerkIcon,
          name: YB.loadoutPerkName,
          status: YB.loadoutPerkOwned ? null : DB(`${fB}:loadoutLocked`),
          locked: !YB.loadoutPerkOwned,
          equipped: YB.loadoutPerkEquipped
        }), (0, UB.jsx)("p", {
          className: "BoardDescription",
          children: YB.loadoutPerkDescription
        }), (0, UB.jsxs)("div", {
          ref: yB("act", jB),
          className: "BoardActions",
          children: [!YB.loadoutPerkOwned && (0, UB.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, UB.jsx)(dO, {
              cost: YB.loadoutPerkCost,
              loadout: QB
            }), (0, UB.jsx)(pB.q, {
              disabled: !OO(QB, YB.loadoutPerkCost) || OB.pending,
              onClick: () => {
                GB.act("loadoutUnlock", jB)
              },
              children: DB(`${fB}:loadoutUnlock`)
            })]
          }), YB.loadoutPerkOwned && !YB.loadoutPerkEquipped && (0, UB.jsx)(pB.f, {
            disabled: oB || OB.pending,
            onClick: () => {
              GB.act("loadoutEquip", jB)
            },
            children: DB(`${fB}:loadoutEquip`)
          }), YB.loadoutPerkOwned && !YB.loadoutPerkEquipped && oB && (0, UB.jsx)("span", {
            className: "BoardHint",
            children: DB(`${fB}:loadoutSocketsFullHint`)
          }), YB.loadoutPerkEquipped && (0, UB.jsx)(pB.Z, {
            disabled: OB.pending,
            onClick: () => {
              GB.act("loadoutUnequip", jB)
            },
            children: DB(`${fB}:loadoutUnequip`)
          })]
        })]
      })
    }

    function iO(BB) {
      let {
        icon: OB,
        name: GB,
        status: YB,
        locked: DB,
        equipped: QB
      } = BB;
      const {
        t: oB
      } = (0, PB.H)();
      return (0, UB.jsxs)(LB, {
        icon: (0, UB.jsx)(KB, {
          itemName: OB
        }),
        name: GB,
        children: [null !== YB && (0, UB.jsx)("span", {
          className: JB()("LoadoutStatusText", {
            Locked: DB
          }),
          children: YB
        }), QB && (0, UB.jsx)("span", {
          className: "BoardBadge",
          children: oB(`${fB}:loadoutEquippedBadge`)
        })]
      })
    }

    function LO(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const YB = OB.loadout;
      if ("loadoutPerks" === OB.slot) {
        const BB = YB.loadoutPerks.find((BB => BB.loadoutPerkId === OB.selectedId));
        return (0, UB.jsx)("section", {
          className: "BoardDetail",
          children: BB && (0, UB.jsx)(FO, {
            view: OB,
            controller: GB,
            perk: BB
          })
        })
      }
      const DB = YO(YB, OB.slot),
        QB = DB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === OB.selectedId));
      return (0, UB.jsx)("section", {
        className: "BoardDetail",
        children: QB && (0, UB.jsx)(IO, {
          view: OB,
          controller: GB,
          slot: DB,
          option: QB
        })
      })
    }

    function gO(BB) {
      let {
        owned: OB,
        total: GB
      } = BB;
      return GB <= 1 ? null : (0, UB.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: GB
        }, ((BB, GB) => (0, UB.jsx)("span", {
          className: JB()("LoadoutPip", {
            Filled: GB < OB
          })
        }, GB)))
      })
    }

    function rO(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, PB.H)(), DB = OB.loadout, QB = VO();
      return (0, UB.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": YB(`${fB}:loadoutKit`),
        children: [DB.loadoutSlots.map((BB => {
          const DB = BB.loadoutSlotOptions.find((OB => OB.loadoutOptionId === BB.loadoutSlotEquippedId));
          return (0, UB.jsxs)("button", {
            ref: QB("section", BB.loadoutSlotKind),
            type: "button",
            className: JB()("LoadoutKitSlot", {
              Selected: OB.slot === BB.loadoutSlotKind
            }),
            onClick: () => {
              GB.selectSlot(BB.loadoutSlotKind)
            },
            children: [(0, UB.jsx)("span", {
              className: "LoadoutKitIcon",
              children: DB && (0, UB.jsx)(KB, {
                itemName: DB.loadoutOptionIcon
              })
            }), (0, UB.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, UB.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, UB.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: YB(RO[BB.loadoutSlotKind])
                }), DB && (0, UB.jsx)(gO, {
                  owned: DB.loadoutOptionOwnedTier,
                  total: DB.loadoutOptionTiers.length
                })]
              }), (0, UB.jsx)("span", {
                className: "LoadoutKitName",
                children: null === DB || void 0 === DB ? void 0 : DB.loadoutOptionName
              })]
            })]
          }, BB.loadoutSlotKind)
        })), (0, UB.jsx)(XO, {
          view: OB,
          controller: GB
        })]
      })
    }

    function XO(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, PB.H)(), DB = OB.loadout, QB = DB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)), oB = VO();
      return (0, UB.jsxs)("button", {
        ref: oB("section", "loadoutPerks"),
        type: "button",
        className: JB()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === OB.slot
        }),
        onClick: () => {
          GB.selectSlot("loadoutPerks")
        },
        children: [(0, UB.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, UB.jsx)("span", {
            className: "LoadoutKitLabel",
            children: YB(RO.loadoutPerks)
          }), (0, UB.jsx)("span", {
            className: "LoadoutPerkCount",
            children: YB(`${fB}:loadoutPerkCount`, {
              equipped: String(QB.length),
              max: String(DB.loadoutMaxPerks)
            })
          })]
        }), (0, UB.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: DB.loadoutMaxPerks
          }, ((BB, OB) => {
            const GB = QB[OB];
            return (0, UB.jsxs)("span", {
              className: JB()("LoadoutSocket", {
                Filled: GB,
                Empty: !GB
              }),
              children: [(0, UB.jsx)("span", {
                className: "LoadoutSocketWell",
                children: GB && (0, UB.jsx)(KB, {
                  itemName: GB.loadoutPerkIcon
                })
              }), (0, UB.jsx)("span", {
                className: "LoadoutSocketName",
                children: GB ? GB.loadoutPerkName : YB(`${fB}:loadoutPerkSocketEmpty`)
              })]
            }, OB)
          }))
        })]
      })
    }

    function wO(BB) {
      let {
        icon: OB,
        name: GB,
        selected: YB,
        equipped: DB,
        locked: QB,
        ownedTier: oB,
        tiers: jB,
        buttonRef: yB,
        onSelect: JB
      } = BB;
      const {
        t: MB
      } = (0, PB.H)();
      return (0, UB.jsxs)(iB, {
        icon: (0, UB.jsx)(KB, {
          itemName: OB
        }),
        name: GB,
        selected: YB,
        locked: QB,
        buttonRef: yB,
        onSelect: JB,
        children: [DB && (0, UB.jsx)("span", {
          className: "BoardBadge",
          children: MB(`${fB}:loadoutEquippedBadge`)
        }), QB && (0, UB.jsx)("span", {
          className: "BoardBadge Muted",
          children: MB(`${fB}:loadoutLocked`)
        }), !QB && (0, UB.jsx)(gO, {
          owned: oB,
          total: jB
        })]
      })
    }

    function EO(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const YB = OB.loadout,
        DB = VO();
      if ("loadoutPerks" === OB.slot) return (0, UB.jsx)("div", {
        className: "BoardTiles",
        children: YB.loadoutPerks.map((BB => (0, UB.jsx)(wO, {
          icon: BB.loadoutPerkIcon,
          name: BB.loadoutPerkName,
          selected: OB.selectedId === BB.loadoutPerkId,
          equipped: BB.loadoutPerkEquipped,
          locked: !BB.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: DB("pl", BB.loadoutPerkId),
          onSelect: () => {
            GB.select(BB.loadoutPerkId)
          }
        }, BB.loadoutPerkId)))
      });
      const QB = YO(YB, OB.slot);
      return (0, UB.jsx)("div", {
        className: "BoardTiles",
        children: QB.loadoutSlotOptions.map((BB => (0, UB.jsx)(wO, {
          icon: BB.loadoutOptionIcon,
          name: BB.loadoutOptionName,
          selected: OB.selectedId === BB.loadoutOptionId,
          equipped: QB.loadoutSlotEquippedId === BB.loadoutOptionId,
          locked: 0 === BB.loadoutOptionOwnedTier,
          ownedTier: BB.loadoutOptionOwnedTier,
          tiers: BB.loadoutOptionTiers.length,
          buttonRef: DB("pl", BB.loadoutOptionId),
          onSelect: () => {
            GB.select(BB.loadoutOptionId)
          }
        }, BB.loadoutOptionId)))
      })
    }

    function cO(BB) {
      let {
        loadout: OB
      } = BB;
      return (0, UB.jsx)(gB, {
        coins: OB.loadoutCoins,
        children: OB.loadoutHeldParts.filter((BB => BB.loadoutHeldPartAmount > 0)).map((BB => (0, UB.jsx)(mB, {
          itemName: BB.loadoutHeldPartItem,
          amount: BB.loadoutHeldPartAmount
        }, BB.loadoutHeldPartCurrency)))
      })
    }

    function hO(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, MB.i)(zO, OB.getSnapshot()),
        {
          t: YB
        } = (0, PB.H)();
      if (null === GB.loadout) return null;
      const DB = GB.notice;
      return (0, UB.jsx)(UO, {
        view: GB,
        onDismiss: OB.dismiss,
        children: (0, UB.jsxs)(dB, {
          open: GB.open,
          onDismiss: OB.dismiss,
          title: YB(`${fB}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, UB.jsx)(cO, {
            loadout: GB.loadout
          }),
          statusRefused: null === DB || void 0 === DB ? void 0 : DB.loadoutNoticeRefused,
          status: (0, UB.jsxs)(UB.Fragment, {
            children: [(0, UB.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: YB(`${fB}:loadoutRadioBadge`)
            }), null !== DB && YB(`${fB}:${DB.loadoutNoticeKey}`, {
              name: DB.loadoutNoticeName,
              tier: (0, tB.S)(DB.loadoutNoticeTier),
              max: String(GB.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, UB.jsx)(rO, {
            view: GB,
            controller: OB
          }), (0, UB.jsx)(EO, {
            view: GB,
            controller: OB
          }), (0, UB.jsx)(LO, {
            view: GB,
            controller: OB
          })]
        })
      })
    }

    function aO(BB, OB, GB) {
      const YB = BB.locatorEntries.find((BB => BB.locatorEntryId === GB));
      if (!YB) return null;
      const DB = YB.locatorEntryName;
      if ("locatorDisarm" === OB) return YB.locatorEntryArmed ? {
        board: eO(BB, null),
        notice: TO("locatorNoticeDisarmed", DB)
      } : null;
      if ("locatorArm" === OB) return YB.locatorEntryOwned && !YB.locatorEntryArmed ? {
        board: eO(BB, GB),
        notice: TO("locatorNoticeArmed", DB)
      } : null;
      if (YB.locatorEntryOwned || BB.locatorCoins < YB.locatorEntryPrice) return null;
      const QB = eO({
        ...BB,
        locatorCoins: BB.locatorCoins - YB.locatorEntryPrice
      }, GB);
      return {
        board: {
          ...QB,
          locatorEntries: QB.locatorEntries.map((BB => BB.locatorEntryId === GB ? {
            ...BB,
            locatorEntryOwned: !0
          } : BB))
        },
        notice: TO("locatorNoticeBought", DB)
      }
    }

    function eO(BB, OB) {
      return {
        ...BB,
        locatorEntries: BB.locatorEntries.map((BB => {
          const GB = BB.locatorEntryId === OB;
          return BB.locatorEntryArmed === GB ? BB : {
            ...BB,
            locatorEntryArmed: GB
          }
        }))
      }
    }

    function TO(BB, OB) {
      return {
        locatorNoticeKey: BB,
        locatorNoticeRefused: !1,
        locatorNoticeName: OB
      }
    }
    const bO = "containmentLocatorView";
    class CO extends BO {
      constructor(BB, OB, GB, YB) {
        super(BB, OB, GB, YB, "locator", aO), this.snapshot = this.buildSnapshot()
      }
      messageOpens(BB) {
        return BB.locatorMessageOpens
      }
      messageNotice(BB) {
        return BB.locatorNotice
      }
      openingSelection(BB) {
        var OB;
        const GB = BB.locatorEntries;
        return (null !== (OB = GB.find((BB => BB.locatorEntryArmed))) && void 0 !== OB ? OB : GB[0]).locatorEntryId
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
    const HO = {
        locatorContained: `${fB}:locatorFlavourContained`,
        locatorEncountered: `${fB}:locatorFlavourEncountered`,
        locatorUnseen: `${fB}:locatorFlavourUnseen`
      },
      vO = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${fB}:locatorAttunedNormal`,
        codexHardOnly: `${fB}:locatorAttunedHard`
      };

    function sO() {
      return (0, UB.jsx)(UB.Fragment, {
        children: Array.from({
          length: 5
        }, ((BB, OB) => (0, UB.jsx)("span", {
          className: "LocatorFly",
          children: (0, UB.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, OB)))
      })
    }

    function xO(BB) {
      let {
        entry: OB
      } = BB;
      const {
        t: GB
      } = (0, PB.H)();
      return OB.locatorEntryArmed ? (0, UB.jsx)("span", {
        className: "BoardBadge Armed",
        children: GB(`${fB}:locatorArmedBadge`)
      }) : OB.locatorEntryOwned ? (0, UB.jsx)("span", {
        className: "BoardBadge",
        children: GB(`${fB}:locatorOwnedBadge`)
      }) : null
    }

    function tO(BB) {
      let {
        entry: OB,
        coins: GB,
        inTile: YB = !1
      } = BB;
      return (0, UB.jsx)(mB, {
        itemName: kB,
        amount: OB.locatorEntryPrice,
        sJ: GB,
        inTile: YB
      })
    }

    function BG(BB) {
      let {
        view: OB,
        controller: GB,
        entry: YB
      } = BB;
      const {
        t: DB
      } = (0, PB.H)(), QB = YB.locatorEntryId, oB = OB.locators.locatorEntries.find((BB => BB.locatorEntryArmed && BB !== YB));
      return (0, UB.jsxs)("div", {
        className: "BoardActions",
        children: [YB.locatorEntryArmed && (0, UB.jsx)(pB.Z, {
          disabled: OB.pending,
          onClick: () => {
            GB.act("locatorDisarm", QB)
          },
          children: DB(`${fB}:locatorDisarm`)
        }), YB.locatorEntryOwned && !YB.locatorEntryArmed && (0, UB.jsx)(pB.f, {
          disabled: OB.pending,
          onClick: () => {
            GB.act("locatorArm", QB)
          },
          children: DB(`${fB}:locatorArm`)
        }), !YB.locatorEntryOwned && (0, UB.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, UB.jsx)(tO, {
            entry: YB,
            coins: OB.locators.locatorCoins
          }), (0, UB.jsx)(pB.q, {
            disabled: OB.locators.locatorCoins < YB.locatorEntryPrice || OB.pending,
            onClick: () => {
              GB.act("locatorBuy", QB)
            },
            children: DB(`${fB}:locatorBuy`)
          })]
        }), oB && !YB.locatorEntryArmed && (0, UB.jsx)("span", {
          className: "BoardHint",
          children: DB(`${fB}:locatorReplacesHint`, {
            name: oB.locatorEntryName
          })
        })]
      })
    }

    function OG(BB) {
      let {
        entry: OB
      } = BB;
      return "locatorUnseen" === OB.locatorEntryStanding ? (0, UB.jsx)(KB, {
        itemName: "Compass"
      }) : (0, UB.jsx)(uB, {
        anomalyId: OB.locatorEntryId,
        caught: "locatorContained" === OB.locatorEntryStanding
      })
    }

    function GG(BB) {
      let {
        view: OB,
        controller: GB,
        entry: YB
      } = BB;
      const {
        t: DB
      } = (0, PB.H)(), QB = vO[YB.locatorEntryDifficulty];
      return (0, UB.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, UB.jsxs)("div", {
          className: JB()("LocatorLabel", {
            Armed: YB.locatorEntryArmed
          }),
          children: [(0, UB.jsx)(LB, {
            icon: (0, UB.jsx)(OG, {
              entry: YB
            }),
            name: DB(`${fB}:locatorName`, {
              name: YB.locatorEntryName
            }),
            children: (0, UB.jsx)(xO, {
              entry: YB
            })
          }), (0, UB.jsx)("p", {
            className: "BoardDescription",
            children: DB(YB.locatorEntryArmed ? `${fB}:locatorFlavourArmed` : HO[YB.locatorEntryStanding])
          }), null !== QB && (0, UB.jsx)("p", {
            className: "LocatorAttuned",
            children: DB(QB)
          }), (0, UB.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: DB(`${fB}:locatorUsage`)
          })]
        }), (0, UB.jsx)(BG, {
          view: OB,
          controller: GB,
          entry: YB
        })]
      })
    }

    function YG(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, MB.i)(bO, OB.getSnapshot()),
        {
          t: YB
        } = (0, PB.H)(),
        DB = GB.locators;
      if (null === DB) return null;
      const QB = DB.locatorEntries.find((BB => BB.locatorEntryId === GB.selectedId)),
        oB = GB.notice;
      return (0, UB.jsxs)(dB, {
        open: GB.open,
        onDismiss: OB.dismiss,
        title: YB(`${fB}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, UB.jsx)(sO, {}),
        headerExtra: (0, UB.jsx)(gB, {
          coins: DB.locatorCoins
        }),
        statusRefused: null === oB || void 0 === oB ? void 0 : oB.locatorNoticeRefused,
        status: (0, UB.jsxs)(UB.Fragment, {
          children: [(0, UB.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: YB(`${fB}:locatorKeeperName`)
          }), null !== oB && YB(`${fB}:${oB.locatorNoticeKey}`, {
            name: oB.locatorNoticeName
          })]
        }),
        children: [(0, UB.jsx)("div", {
          className: "BoardTiles",
          children: DB.locatorEntries.map((BB => (0, UB.jsxs)(iB, {
            icon: (0, UB.jsx)(OG, {
              entry: BB
            }),
            name: BB.locatorEntryName,
            selected: BB === QB,
            locked: !1,
            className: JB()("LocatorTag", {
              Armed: BB.locatorEntryArmed
            }),
            onSelect: () => {
              OB.select(BB.locatorEntryId)
            },
            children: [(0, UB.jsx)(xO, {
              entry: BB
            }), !BB.locatorEntryOwned && (0, UB.jsx)(tO, {
              entry: BB,
              coins: DB.locatorCoins,
              inTile: !0
            })]
          }, BB.locatorEntryId)))
        }), (0, UB.jsx)(GG, {
          view: GB,
          controller: OB,
          entry: QB
        })]
      })
    }

    function DG(BB) {
      let {
        loadout: OB,
        codex: GB,
        locator: YB
      } = BB;
      return (0, UB.jsxs)(UB.Fragment, {
        children: [(0, UB.jsx)(hO, {
          controller: OB
        }), (0, UB.jsx)(xB, {
          controller: GB
        }), (0, UB.jsx)(YG, {
          controller: YB
        })]
      })
    }
    var QG = GB(39226);
    class oG {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = BB, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new QG.d({
          spacingMs: 0,
          now: OB
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(BB, OB) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, OB(), this.notify()
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
    var jG = GB(39222);
    const yG = new Map([
      ["npc_general", qO],
      ["npc_tentacle_guy", jG]
    ]);

    function JG(BB) {
      const OB = yG.get(BB);
      if (void 0 === OB) return null;
      const GB = document.createElement("img");
      return GB.src = OB, GB.alt = "", GB.draggable = !1, GB.style.imageRendering = "pixelated", GB
    }
    const MG = function() {
      let BB, OB = !1,
        GB = null,
        yB = null;
      const JB = [],
        MB = BB => {
          for (const OB of JB) OB !== BB && OB.close();
          (0, jB.o)()
        },
        PB = BB => {
          BB && (0, jB.i)()
        },
        zB = new oG((OB => {
          BB.sendCommand(OB)
        })),
        lB = new lO((BB => {
          oB.o.tM(zO, BB, !0)
        }), MB, PB, zB),
        pB = new wB((BB => {
          oB.o.tM(XB, BB, !0)
        }), MB, PB),
        qB = new CO((BB => {
          oB.o.tM(bO, BB, !0)
        }), MB, PB, zB);
      JB.push(lB, pB, qB);
      return {
        onCreate: OB => {
          BB = OB, GB = (0, jB.s)(null, {
            content: (0, YB.createElement)(DG, {
              loadout: lB,
              codex: pB,
              locator: qB
            }),
            onClose: () => {
              for (const BB of JB) BB.close()
            }
          }), yB = (0, QB.g)(JG)
        },
        onReceivedMessageFromServer: (BB, OB) => {
          "containmentLoadout" === BB ? lB.nP(OB) : "containmentLoadoutClose" === BB ? lB.isOpen() && (lB.close(), (0, jB.g)()) : "containmentCodex" === BB ? pB.nP(OB) : "containmentLocator" === BB && qB.nP(OB)
        },
        kP: () => {
          OB || DB.c.get("loadingOverlayVisible") || (OB = !0, BB.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var BB, OB;
          null === (BB = GB) || void 0 === BB || BB(), GB = null, null === (OB = yB) || void 0 === OB || OB(), yB = null;
          for (const GB of JB) GB.dispose();
          zB.dispose()
        }
      }
    }
  },
  40034: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40042: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40050: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40059: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40065: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40068: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40077: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40085: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40092: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/doom-warlord-uncaught.b25b11d54326d386a901.webp"
  },
  40094: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/doom-warlord.d9ef07d4167ff931b0f0.webp"
  },
  40096: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40098: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40103: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40107: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40111: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40114: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40117: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40123: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  40125: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  40130: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  40137: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  40143: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  39222: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);