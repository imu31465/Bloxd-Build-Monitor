export const id = 14;
export const ids = [14];
export const modules = {
  39385: (BB, jB, zB) => {
    var QB = {
      "./breach-zero-uncaught.webp": 39388,
      "./breach-zero.webp": 39397,
      "./brood-father-uncaught.webp": 39405,
      "./brood-father.webp": 39407,
      "./carousel-uncaught.webp": 39415,
      "./carousel.webp": 39418,
      "./deadlock-uncaught.webp": 39422,
      "./deadlock.webp": 39428,
      "./frost-revenant-uncaught.webp": 39436,
      "./frost-revenant.webp": 39439,
      "./hollow-choir-uncaught.webp": 39445,
      "./hollow-choir.webp": 39447,
      "./magma-warden-uncaught.webp": 39451,
      "./magma-warden.webp": 39456,
      "./patient-zero-uncaught.webp": 39464,
      "./patient-zero.webp": 39469,
      "./siege-engine-uncaught.webp": 39471,
      "./siege-engine.webp": 39478,
      "./warp-stalker-uncaught.webp": 39481,
      "./warp-stalker.webp": 39489
    };

    function nB(BB) {
      var jB = dB(BB);
      return zB(jB)
    }

    function dB(BB) {
      if (!zB.o(QB, BB)) {
        var jB = new Error("Cannot find module '" + BB + "'");
        throw jB.code = "MODULE_NOT_FOUND", jB
      }
      return QB[BB]
    }
    nB.keys = function() {
      return Object.keys(QB)
    }, nB.resolve = dB, BB.exports = nB, nB.id = 39385
  },
  38645: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    const QB = 4,
      nB = 12e3,
      dB = 1e3;
    class IB {
      constructor() {
        let {
          limit: BB = QB,
          windowMs: jB = nB,
          spacingMs: zB = dB,
          now: IB = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = BB, this.windowMs = jB, this.spacingMs = zB, this.now = IB
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
          jB = this.lastSentAt + this.spacingMs,
          zB = Math.min(jB > BB ? jB : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        zB !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, zB - BB)))
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38618: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      constructor(BB, jB, zB) {
        this.Ly = BB, this.beforeOpen = jB, this.afterClose = zB, this.open = !1, this.HJ = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.HJ && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.HJ = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.HJ || (this.snapshot = this.buildSnapshot(), this.Ly(this.snapshot))
      }
    }
  },
  39378: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => az
    });
    var QB = zB(62);
    var nB = zB(28),
      dB = zB(1964),
      IB = zB(31),
      NB = zB(36682),
      uB = zB(1091),
      UB = zB.n(uB),
      aB = zB(1471),
      pB = zB(1240),
      rB = zB(4653),
      sB = zB(1378),
      JB = zB(1478),
      mB = zB(1971),
      yB = zB(1388),
      kB = zB(1952),
      GB = zB(2025),
      LB = zB(225);
    const gB = zB(39385),
      tB = Object.fromEntries(gB.keys().map((BB => [BB.replace(/^\.\/(.*)\.webp$/, "$1"), gB(BB)]))),
      SB = new Set;

    function MB(BB, jB) {
      const zB = jB ? BB : `${BB}-uncaught`,
        QB = (0, LB.b)(tB, zB);
      return void 0 !== QB || SB.has(zB) || (SB.add(zB), console.warn(`Containment Breach has no mugshot ${zB}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), QB
    }
    var EB = zB(1148);
    const iB = "containmentBreach",
      qB = "Gold Coin";

    function fB(BB) {
      let {
        open: jB,
        onDismiss: zB,
        title: QB,
        className: nB,
        decor: dB,
        headerExtra: IB,
        status: NB,
        statusRefused: uB = !1,
        children: aB
      } = BB;
      const pB = `${nB}Title`;
      return (0, EB.jsx)(rB.d, {
        show: jB,
        close: zB,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, EB.jsxs)("section", {
          className: UB()("ContainmentBoardPanel", nB),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": pB,
          children: [dB && (0, EB.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: dB
          }), (0, EB.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, EB.jsx)("h2", {
              id: pB,
              className: "VisuallyHidden",
              children: QB
            }), IB, (0, EB.jsx)(JB.j, {
              onClick: zB
            })]
          }), (0, EB.jsx)("div", {
            className: "BoardBody",
            children: aB
          }), void 0 !== NB && (0, EB.jsx)("footer", {
            className: UB()("BoardStatus", {
              Refused: uB
            }),
            children: NB
          })]
        })
      })
    }

    function oB(BB) {
      let {
        itemName: jB
      } = BB;
      return (0, EB.jsx)(mB.c, {
        itemName: jB,
        amount: 0
      })
    }

    function HB(BB) {
      let {
        anomalyId: jB,
        caught: zB
      } = BB;
      const nB = (0, QB.useRef)(null);
      return (0, sB.b)(nB, !zB), (0, EB.jsx)("span", {
        ref: nB,
        className: UB()("BoardMugshot", {
          Uncaught: !zB
        }),
        children: (0, EB.jsx)("img", {
          src: MB(jB, zB),
          alt: "",
          draggable: !1
        })
      })
    }

    function DB(BB) {
      let {
        itemName: jB,
        amount: zB,
        DN: QB,
        inTile: nB = !1
      } = BB;
      return (0, EB.jsx)(yB.g, {
        delayShow: 200,
        hoverOnly: nB,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, EB.jsx)(YB, {
          itemName: jB,
          amount: zB,
          DN: QB
        }),
        children: (0, EB.jsxs)("span", {
          className: UB()("BoardChip", {
            Short: void 0 !== QB && QB < zB
          }),
          children: [(0, EB.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, EB.jsx)(oB, {
              itemName: jB
            })
          }), zB.toLocaleString()]
        })
      })
    }
    const FB = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function YB(BB) {
      var jB;
      let {
        itemName: zB,
        amount: QB,
        DN: nB
      } = BB;
      const {
        t: dB
      } = (0, pB.D)(), IB = (0, GB.h)("itemInfo", (BB => BB[zB])), {
        lore: NB,
        droppedBy: uB
      } = function(BB) {
        if ("string" !== typeof BB) return {
          lore: BB,
          droppedBy: null
        };
        const jB = FB.exec(BB);
        return null === jB ? {
          lore: BB,
          droppedBy: null
        } : {
          lore: "" === jB[1] ? void 0 : jB[1],
          droppedBy: jB[2]
        }
      }(null === IB || void 0 === IB ? void 0 : IB.description);
      return (0, EB.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, EB.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, EB.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, EB.jsx)(oB, {
              itemName: zB
            })
          }), (0, EB.jsx)(kB.e, {
            text: null !== (jB = null === IB || void 0 === IB ? void 0 : IB.displayName) && void 0 !== jB ? jB : zB,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== NB || null !== uB) && (0, EB.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== NB && (0, EB.jsx)(kB.e, {
            text: NB,
            className: "BoardChipTooltipDescription"
          }), null !== uB && (0, EB.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, EB.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: dB(`${iB}:chipDroppedBy`)
            }), uB]
          })]
        }), void 0 !== nB && (0, EB.jsxs)("div", {
          className: UB()("BoardChipTooltipHeld", {
            Short: nB < QB
          }),
          children: [(0, EB.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: dB(`${iB}:chipYouHave`)
          }), (0, EB.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, EB.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: nB.toLocaleString()
            }), ` / ${QB.toLocaleString()}`]
          }), (0, EB.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, EB.jsx)("span", {
              style: {
                width: (QB > 0 ? 100 * Math.min(1, nB / QB) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function VB(BB) {
      let {
        icon: jB,
        name: zB,
        selected: QB,
        locked: nB,
        className: dB,
        buttonRef: IB,
        onSelect: NB,
        children: uB
      } = BB;
      return (0, EB.jsxs)("button", {
        ref: IB,
        type: "button",
        className: UB()("BoardTile", dB, {
          Selected: QB,
          Locked: nB
        }),
        onClick: NB,
        children: [(0, EB.jsx)("span", {
          className: "BoardTileIcon",
          children: jB
        }), (0, EB.jsx)("span", {
          className: "BoardTileName",
          children: zB
        }), uB]
      })
    }

    function hB(BB) {
      let {
        icon: jB,
        name: zB,
        children: QB
      } = BB;
      return (0, EB.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, EB.jsx)("span", {
          className: "BoardDetailIcon",
          children: jB
        }), (0, EB.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, EB.jsx)("h3", {
            children: zB
          }), (0, EB.jsx)("span", {
            className: "BoardDetailStatus",
            children: QB
          })]
        })]
      })
    }

    function XB(BB) {
      let {
        coins: jB,
        children: zB
      } = BB;
      return (0, EB.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, EB.jsx)(DB, {
          itemName: qB,
          amount: jB
        }), zB]
      })
    }
    var ZB = zB(38618);
    const AB = "containmentCodexView";
    class TB extends ZB.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = BB => {
          this.selectedId = BB, this.emit()
        }
      }
      VJ(BB) {
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
    const PB = {
        codexAnyDifficulty: `${iB}:codexNeedsAny`,
        codexNormalOnly: `${iB}:codexNeedsNormal`,
        codexHardOnly: `${iB}:codexNeedsHard`
      },
      WB = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      eB = {
        codexContained: `${iB}:codexContainedBadge`,
        codexEncountered: `${iB}:codexEncounteredBadge`,
        codexUnidentified: `${iB}:codexUnidentifiedBadge`
      },
      lB = ["94%", "81%", "88%", "46%", "72%"];

    function wB(BB) {
      let {
        entry: jB
      } = BB;
      const {
        t: zB
      } = (0, pB.D)();
      return (0, EB.jsx)("span", {
        className: UB()("BoardBadge", WB[jB.codexEntryState]),
        children: zB(eB[jB.codexEntryState])
      })
    }

    function xB(BB) {
      const {
        t: jB
      } = (0, pB.D)();
      return "codexUnidentified" === BB.codexEntryState ? jB(`${iB}:codexUnidentifiedName`) : BB.codexEntryName
    }

    function KB(BB) {
      let {
        entry: jB
      } = BB;
      return "codexUnidentified" === jB.codexEntryState ? (0, EB.jsx)(oB, {
        itemName: "Book"
      }) : (0, EB.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, EB.jsx)(HB, {
          anomalyId: jB.codexEntryId,
          caught: "codexContained" === jB.codexEntryState
        }), (0, EB.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function CB(BB) {
      let {
        entry: jB,
        selected: zB,
        onSelect: QB
      } = BB;
      const nB = "codexUnidentified" === jB.codexEntryState;
      return (0, EB.jsxs)(VB, {
        icon: (0, EB.jsx)(KB, {
          entry: jB
        }),
        name: xB(jB),
        selected: zB,
        locked: nB,
        className: UB()("CodexFolder", WB[jB.codexEntryState]),
        onSelect: () => {
          QB(jB.codexEntryId)
        },
        children: [!nB && (0, EB.jsx)(wB, {
          entry: jB
        }), nB && (0, EB.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function cB(BB) {
      let {
        count: jB
      } = BB;
      const zB = [];
      for (let QB = Math.min(jB, 25); QB > 0; QB -= 5) zB.push(Math.min(QB, 5));
      return (0, EB.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: zB.map(((BB, jB) => (0, EB.jsx)("span", {
          className: UB()("CodexTallyGroup", {
            Gate: 5 === BB
          }),
          children: Array.from({
            length: Math.min(BB, 4)
          }, ((BB, jB) => (0, EB.jsx)("span", {
            className: "CodexTallyMark"
          }, jB)))
        }, jB)))
      })
    }

    function bB(BB) {
      let {
        contained: jB,
        total: zB
      } = BB;
      const {
        t: QB
      } = (0, pB.D)();
      return (0, EB.jsxs)("div", {
        className: "CodexProgress",
        children: [QB(`${iB}:codexProgress`, {
          contained: String(jB),
          total: String(zB)
        }), (0, EB.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, EB.jsx)("span", {
            style: {
              width: jB / zB * 100 + "%"
            }
          })
        })]
      })
    }

    function vB(BB) {
      let {
        entry: jB,
        fileNumber: zB
      } = BB;
      const {
        t: QB
      } = (0, pB.D)(), nB = "codexContained" === jB.codexEntryState;
      return (0, EB.jsx)("section", {
        className: "BoardDetail",
        children: (0, EB.jsxs)("article", {
          className: UB()("CodexDossier", WB[jB.codexEntryState]),
          children: [(0, EB.jsx)("span", {
            className: "CodexFileNumber",
            children: QB(`${iB}:codexFileNumber`, {
              number: String(zB).padStart(3, "0")
            })
          }), (0, EB.jsx)(hB, {
            icon: (0, EB.jsx)(KB, {
              entry: jB
            }),
            name: xB(jB),
            children: (0, EB.jsx)(wB, {
              entry: jB
            })
          }), nB && (0, EB.jsxs)(EB.Fragment, {
            children: [(0, EB.jsx)("p", {
              className: "BoardDescription",
              children: jB.codexEntryLore
            }), (0, EB.jsxs)("p", {
              className: "CodexTally",
              children: [QB(`${iB}:codexContainments`, {
                count: String(jB.codexEntryContainedCount)
              }), (0, EB.jsx)(cB, {
                count: jB.codexEntryContainedCount
              })]
            }), (0, EB.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: QB(`${iB}:codexContainedBadge`)
            })]
          }), !nB && (0, EB.jsxs)(EB.Fragment, {
            children: [(0, EB.jsxs)("div", {
              className: "CodexRedaction",
              children: [lB.map((BB => (0, EB.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: BB
                }
              }, BB))), (0, EB.jsx)("p", {
                className: "CodexRedacted",
                children: QB(`${iB}:codexRedacted`)
              })]
            }), "" !== jB.codexEntryHint && (0, EB.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, EB.jsx)("h4", {
                children: QB(`${iB}:codexHintLabel`)
              }), (0, EB.jsx)("p", {
                children: jB.codexEntryHint
              })]
            }), (0, EB.jsx)("p", {
              className: "CodexClearance",
              children: QB(PB[jB.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function RB(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, aB.h)(AB, jB.getSnapshot()),
        {
          t: QB
        } = (0, pB.D)();
      if (0 === zB.entries.length) return null;
      const nB = zB.entries.find((BB => BB.codexEntryId === zB.selectedId)),
        dB = zB.entries.filter((BB => "codexContained" === BB.codexEntryState)).length,
        IB = zB.entries.map((BB => BB.codexEntryId)).sort().indexOf(nB.codexEntryId) + 1;
      return (0, EB.jsxs)(fB, {
        open: zB.open,
        onDismiss: jB.dismiss,
        title: QB(`${iB}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, EB.jsx)(bB, {
          contained: dB,
          total: zB.entries.length
        }),
        children: [(0, EB.jsx)("div", {
          className: "BoardTiles",
          children: zB.entries.map((BB => (0, EB.jsx)(CB, {
            entry: BB,
            selected: BB === nB,
            onSelect: jB.select
          }, BB.codexEntryId)))
        }), (0, EB.jsx)(vB, {
          entry: nB,
          fileNumber: IB
        })]
      })
    }
    var OB = zB(376);
    class Bj extends ZB.c {
      constructor(BB, jB, zB, QB, nB, dB) {
        super(BB, jB, zB), this.pacer = QB, this.command = nB, this.predict = dB, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = BB => {
          this.selectedId = BB, this.emit()
        }, this.act = (BB, jB) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${BB} ${jB}`, this.rollBack)) return;
          const zB = this.predict(this.board, BB, jB);
          null !== zB && (this.board = zB.board, this.notice = zB.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = QB.subscribe((() => {
          this.emit()
        }))
      }
      VJ(BB) {
        const jB = this.messageOpens(BB);
        if (jB && this.open) return this.board === this.confirmed && (this.board = BB), this.confirmed = BB, void this.emit();
        if (this.board = BB, this.confirmed = BB, this.pacer.onReply(), jB) return this.notice = null, this.selectedId = this.openingSelection(BB), void this.show();
        const zB = this.messageNotice(BB);
        null !== zB && (this.notice = zB), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function jj(BB, jB) {
      return BB.loadoutCoins >= jB.loadoutCostCoins && jB.loadoutCostParts.every((jB => function(BB, jB) {
        return zj(BB, jB).loadoutHeldPartAmount
      }(BB, jB.loadoutPartCurrency) >= jB.loadoutPartAmount))
    }

    function zj(BB, jB) {
      return BB.loadoutHeldParts.find((BB => BB.loadoutHeldPartCurrency === jB))
    }

    function Qj(BB, jB) {
      return BB.loadoutSlots.find((BB => BB.loadoutSlotKind === jB))
    }

    function nj(BB) {
      return BB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)).length >= BB.loadoutMaxPerks
    }

    function dj(BB, jB, zB) {
      for (const nB of BB.loadoutSlots) {
        const QB = nB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === zB));
        if (QB) return "loadoutArmour" === nB.loadoutSlotKind ? Nj(BB, nB, QB, jB) : Ij(BB, nB, QB, jB)
      }
      const QB = BB.loadoutPerks.find((BB => BB.loadoutPerkId === zB));
      return QB ? function(BB, jB, zB) {
        const QB = jB.loadoutPerkOwned,
          nB = jB.loadoutPerkEquipped,
          dB = jB.loadoutPerkName,
          IB = nj(BB);
        if ("loadoutUnlock" === zB) {
          if (QB || !jj(BB, jB.loadoutPerkCost)) return null;
          const zB = {
            ...jB,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !IB
          };
          return {
            board: Uj(aj(BB, jB.loadoutPerkCost), zB),
            notice: pj(IB ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", dB)
          }
        }
        if ("loadoutUpgrade" === zB || !QB || "loadoutEquip" === zB === nB || !nB && IB) return null;
        return {
          board: Uj(BB, {
            ...jB,
            loadoutPerkEquipped: !nB
          }),
          notice: pj(nB ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", dB)
        }
      }(BB, QB, jB) : null
    }

    function Ij(BB, jB, zB, QB) {
      const nB = zB.loadoutOptionOwnedTier,
        dB = zB.loadoutOptionName;
      if ("loadoutEquip" === QB) return 0 === nB ? null : {
        board: uj(BB, jB, zB.loadoutOptionId, null),
        notice: pj("loadoutNoticeEquipped", dB)
      };
      const IB = "loadoutUnlock" === QB;
      if (IB && 0 !== nB || "loadoutUpgrade" === QB && (0 === nB || nB >= zB.loadoutOptionTiers.length) || "loadoutUnequip" === QB) return null;
      const NB = zB.loadoutOptionTiers[nB].loadoutTierCost;
      if (!jj(BB, NB)) return null;
      const uB = {
          ...zB,
          loadoutOptionOwnedTier: nB + 1
        },
        UB = IB ? zB.loadoutOptionId : jB.loadoutSlotEquippedId;
      return {
        board: uj(aj(BB, NB), jB, UB, uB),
        notice: IB ? pj("loadoutNoticeUnlocked", dB) : pj("loadoutNoticeUpgraded", dB, nB + 1)
      }
    }

    function Nj(BB, jB, zB, QB) {
      const nB = zB.loadoutOptionOwnedTier > 0,
        dB = zB.loadoutOptionName;
      if ("loadoutEquip" === QB && nB) return {
        board: uj(BB, jB, zB.loadoutOptionId, null),
        notice: pj("loadoutNoticeEquipped", dB)
      };
      const IB = zB.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== QB || nB || !jj(BB, IB) ? null : {
        board: uj(aj(BB, IB), jB, zB.loadoutOptionId, {
          ...zB,
          loadoutOptionOwnedTier: 1
        }),
        notice: pj("loadoutNoticeUnlocked", dB)
      }
    }

    function uj(BB, jB, zB, QB) {
      const nB = {
        ...jB,
        loadoutSlotEquippedId: zB,
        loadoutSlotOptions: jB.loadoutSlotOptions.map((BB => null !== QB && BB.loadoutOptionId === QB.loadoutOptionId ? QB : BB))
      };
      return {
        ...BB,
        loadoutSlots: BB.loadoutSlots.map((BB => BB === jB ? nB : BB))
      }
    }

    function Uj(BB, jB) {
      return {
        ...BB,
        loadoutPerks: BB.loadoutPerks.map((BB => BB.loadoutPerkId === jB.loadoutPerkId ? jB : BB))
      }
    }

    function aj(BB, jB) {
      return {
        ...BB,
        loadoutCoins: BB.loadoutCoins - jB.loadoutCostCoins,
        loadoutHeldParts: BB.loadoutHeldParts.map((BB => {
          const zB = jB.loadoutCostParts.find((jB => jB.loadoutPartCurrency === BB.loadoutHeldPartCurrency));
          return zB ? {
            ...BB,
            loadoutHeldPartAmount: BB.loadoutHeldPartAmount - zB.loadoutPartAmount
          } : BB
        }))
      }
    }

    function pj(BB, jB) {
      return {
        loadoutNoticeKey: BB,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: jB,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const rj = "containmentLoadoutView";
    class sj extends Bj {
      constructor(BB, jB, zB, QB) {
        super(BB, jB, zB, QB, "loadout", dj), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = BB => {
          this.slot = BB, this.selectedId = Jj(this.board, BB), this.emit()
        }
      }
      messageOpens(BB) {
        return BB.loadoutMessageOpens
      }
      messageNotice(BB) {
        return BB.loadoutNotice
      }
      openingSelection(BB) {
        return Jj(BB, this.slot)
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

    function Jj(BB, jB) {
      if ("loadoutPerks" === jB) {
        var zB;
        const jB = BB.loadoutPerks;
        return (null !== (zB = jB.find((BB => BB.loadoutPerkEquipped))) && void 0 !== zB ? zB : jB[0]).loadoutPerkId
      }
      return Qj(BB, jB).loadoutSlotEquippedId
    }
    const mj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var yj = zB(36946),
      kj = zB(1306);
    const Gj = {
        loadoutPrimary: `${iB}:loadoutSlotPrimary`,
        loadoutSecondary: `${iB}:loadoutSlotSecondary`,
        loadoutOffensive: `${iB}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${iB}:loadoutSlotSelfHelp`,
        loadoutArmour: `${iB}:loadoutSlotArmour`,
        loadoutPerks: `${iB}:loadoutSlotPerks`
      },
      Lj = {
        section: "right",
        zs: "bottom",
        act: "top"
      },
      gj = (0, QB.createContext)({
        step: null,
        targetRef: () => {}
      });

    function tj() {
      const {
        step: BB,
        targetRef: jB
      } = (0, QB.useContext)(gj);
      return (zB, QB) => (null === BB || void 0 === BB ? void 0 : BB.kind) === zB && BB.id === QB ? jB : void 0
    }

    function Sj(BB, jB) {
      const zB = jB.loadoutTargetId;
      if ("loadoutPerks" === jB.loadoutTargetSection) {
        const jB = BB.loadoutPerks.find((BB => BB.loadoutPerkId === zB));
        return {
          name: jB.loadoutPerkName,
          owned: jB.loadoutPerkOwned,
          equipped: jB.loadoutPerkEquipped
        }
      }
      const QB = Qj(BB, jB.loadoutTargetSection),
        nB = QB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === zB));
      return {
        name: nB.loadoutOptionName,
        owned: nB.loadoutOptionOwnedTier > 0,
        equipped: QB.loadoutSlotEquippedId === zB
      }
    }

    function Mj(BB, jB, zB, QB) {
      const [nB, dB] = BB(`${iB}:${jB}`, {
        [zB]: "\x01"
      }).split("\x01");
      return (0, EB.jsxs)(EB.Fragment, {
        children: [nB, (0, EB.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: QB
        }), dB]
      })
    }

    function Ej(BB) {
      let {
        view: jB,
        onDismiss: zB,
        children: nB
      } = BB;
      const {
        t: dB
      } = (0, pB.D)(), IB = jB.loadout, NB = jB.open ? IB.loadoutWalkthrough.map((BB => ({
        target: BB,
        info: Sj(IB, BB)
      }))).find((BB => {
        let {
          info: jB
        } = BB;
        return !jB.equipped
      })) : void 0;
      let uB = null,
        UB = null;
      if (void 0 !== NB) {
        const {
          target: BB,
          info: zB
        } = NB;
        jB.slot !== BB.loadoutTargetSection ? (uB = {
          kind: "section",
          id: BB.loadoutTargetSection
        }, UB = Mj(dB, "loadoutWalkthroughSection", "section", dB(Gj[BB.loadoutTargetSection]))) : jB.selectedId !== BB.loadoutTargetId ? (uB = {
          kind: "zs",
          id: BB.loadoutTargetId
        }, UB = Mj(dB, "loadoutWalkthroughPick", "name", zB.name)) : (uB = {
          kind: "act",
          id: BB.loadoutTargetId
        }, UB = Mj(dB, zB.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", zB.name))
      }
      const aB = null === uB ? null : function(BB) {
          return `${BB.kind}:${BB.id}`
        }(uB),
        [rB, sB] = (0, QB.useState)(null),
        JB = (0, QB.useCallback)((BB => {
          sB((jB => null !== BB ? {
            key: aB,
            node: BB
          } : (null === jB || void 0 === jB ? void 0 : jB.key) === aB ? null : jB))
        }), [aB]),
        mB = null !== aB && (null === rB || void 0 === rB ? void 0 : rB.key) === aB ? rB.node : null;
      return (0, EB.jsxs)(gj.Provider, {
        value: {
          step: uB,
          targetRef: JB
        },
        children: [nB, null !== uB && null !== mB && (0, EB.jsx)(ij, {
          target: mB,
          placement: Lj[uB.kind],
          onDismiss: zB,
          children: UB
        }, aB)]
      })
    }

    function ij(BB) {
      let {
        target: jB,
        placement: zB,
        onDismiss: nB,
        children: dB
      } = BB;
      const {
        t: IB
      } = (0, pB.D)(), NB = (0, QB.useRef)(jB);
      return NB.current = jB, (0, kj.v)("popup", NB, nB), (0, EB.jsxs)(yj.f, {
        target: jB,
        placement: zB,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, EB.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, EB.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: mj,
            alt: "",
            draggable: !1
          }), (0, EB.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: IB(`${iB}:operatorName`)
          }), (0, EB.jsx)(JB.j, {
            onClick: nB,
            ariaLabel: IB(`${iB}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, EB.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: dB
        })]
      })
    }
    const qj = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function fj(BB) {
      let {
        cost: jB,
        loadout: zB
      } = BB;
      const {
        t: QB
      } = (0, pB.D)();
      return jB.loadoutCostCoins <= 0 && 0 === jB.loadoutCostParts.length ? (0, EB.jsx)("span", {
        className: "LoadoutCost",
        children: QB(`${iB}:loadoutFree`)
      }) : (0, EB.jsxs)("span", {
        className: "LoadoutCost",
        children: [jB.loadoutCostCoins > 0 && (0, EB.jsx)(DB, {
          itemName: qB,
          amount: jB.loadoutCostCoins,
          DN: zB.loadoutCoins
        }), jB.loadoutCostParts.map((BB => {
          const jB = zj(zB, BB.loadoutPartCurrency);
          return (0, EB.jsx)(DB, {
            itemName: jB.loadoutHeldPartItem,
            amount: BB.loadoutPartAmount,
            DN: jB.loadoutHeldPartAmount
          }, BB.loadoutPartCurrency)
        }))]
      })
    }
    const oj = {
      loadoutStatFireRate: `${iB}:loadoutUnitPerMinute`,
      loadoutStatReload: `${iB}:loadoutUnitSeconds`,
      loadoutStatResupply: `${iB}:loadoutUnitSeconds`
    };

    function Hj(BB) {
      return "loadoutStatPotency" === BB.loadoutStatKind ? (0, OB.O)(BB.loadoutStatValue) : String(BB.loadoutStatValue)
    }

    function Dj(BB) {
      var jB;
      let {
        option: zB
      } = BB;
      const {
        t: QB
      } = (0, pB.D)(), nB = zB.loadoutOptionTiers, dB = null === (jB = nB[0]) || void 0 === jB ? void 0 : jB.loadoutTierStats.map((BB => BB.loadoutStatKind));
      if (!dB || 0 === dB.length) return null;
      const IB = zB.loadoutOptionOwnedTier,
        NB = (BB, jB) => {
          var zB;
          return null === (zB = nB[BB]) || void 0 === zB ? void 0 : zB.loadoutTierStats.find((BB => BB.loadoutStatKind === jB))
        };
      return (0, EB.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, EB.jsx)("thead", {
          children: (0, EB.jsxs)("tr", {
            children: [(0, EB.jsx)("th", {}), nB.map(((BB, jB) => (0, EB.jsx)("th", {
              className: UB()({
                Current: jB + 1 === IB,
                Next: jB === IB
              }),
              children: QB(`${iB}:loadoutTier`, {
                tier: (0, OB.O)(jB + 1)
              })
            }, jB)))]
          })
        }), (0, EB.jsx)("tbody", {
          children: dB.map((BB => {
            const jB = oj[BB];
            return (0, EB.jsxs)("tr", {
              children: [(0, EB.jsxs)("th", {
                scope: "row",
                children: [QB(`${iB}:${BB}`), jB && (0, EB.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: QB(jB)
                })]
              }), nB.map(((jB, zB) => {
                const QB = NB(zB, BB),
                  nB = zB > 0 ? NB(zB - 1, BB) : void 0,
                  dB = QB && nB ? QB.loadoutStatValue - nB.loadoutStatValue : 0,
                  uB = qj.has(BB) ? dB < 0 : dB > 0,
                  aB = zB === IB;
                return (0, EB.jsxs)("td", {
                  className: UB()({
                    Current: zB + 1 === IB,
                    Next: aB,
                    Gain: uB,
                    Owned: zB < IB
                  }),
                  children: [aB && uB && (0, EB.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: dB < 0 ? "\u25bc" : "\u25b2"
                  }), QB ? Hj(QB) : "-"]
                }, zB)
              }))]
            }, BB)
          }))
        })]
      })
    }

    function Fj(BB) {
      let {
        view: jB,
        controller: zB,
        slot: QB,
        option: nB
      } = BB;
      const {
        t: dB
      } = (0, pB.D)(), IB = jB.loadout, NB = nB.loadoutOptionOwnedTier, uB = nB.loadoutOptionTiers.length, UB = QB.loadoutSlotEquippedId === nB.loadoutOptionId, aB = NB < uB ? nB.loadoutOptionTiers[NB].loadoutTierCost : null, rB = null !== aB && jj(IB, aB), sB = nB.loadoutOptionId, mB = tj();
      return (0, EB.jsxs)(EB.Fragment, {
        children: [(0, EB.jsx)(Vj, {
          icon: nB.loadoutOptionIcon,
          name: nB.loadoutOptionName,
          status: 0 === NB ? dB(`${iB}:loadoutLocked`) : uB > 1 ? dB(`${iB}:loadoutTier`, {
            tier: (0, OB.O)(NB)
          }) : null,
          locked: 0 === NB,
          equipped: UB
        }), (0, EB.jsx)("p", {
          className: "BoardDescription",
          children: nB.loadoutOptionDescription
        }), (0, EB.jsx)(Dj, {
          option: nB
        }), (0, EB.jsxs)("div", {
          ref: mB("act", sB),
          className: "BoardActions",
          children: [null !== aB && (0, EB.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, EB.jsx)(fj, {
              cost: aB,
              loadout: IB
            }), (0, EB.jsx)(JB.m, {
              disabled: !rB || jB.pending,
              onClick: () => {
                zB.act(0 === NB ? "loadoutUnlock" : "loadoutUpgrade", sB)
              },
              children: 0 === NB ? dB(`${iB}:loadoutUnlock`) : dB(`${iB}:loadoutUpgrade`, {
                tier: (0, OB.O)(NB + 1)
              })
            })]
          }), null === aB && uB > 1 && (0, EB.jsx)("span", {
            className: "BoardHint",
            children: dB(`${iB}:loadoutMaxed`)
          }), NB > 0 && !UB && (0, EB.jsx)(JB.f, {
            disabled: jB.pending,
            onClick: () => {
              zB.act("loadoutEquip", sB)
            },
            children: dB(`${iB}:loadoutEquip`)
          })]
        })]
      })
    }

    function Yj(BB) {
      let {
        view: jB,
        controller: zB,
        perk: QB
      } = BB;
      const {
        t: nB
      } = (0, pB.D)(), dB = jB.loadout, IB = nj(dB), NB = QB.loadoutPerkId, uB = tj();
      return (0, EB.jsxs)(EB.Fragment, {
        children: [(0, EB.jsx)(Vj, {
          icon: QB.loadoutPerkIcon,
          name: QB.loadoutPerkName,
          status: QB.loadoutPerkOwned ? null : nB(`${iB}:loadoutLocked`),
          locked: !QB.loadoutPerkOwned,
          equipped: QB.loadoutPerkEquipped
        }), (0, EB.jsx)("p", {
          className: "BoardDescription",
          children: QB.loadoutPerkDescription
        }), (0, EB.jsxs)("div", {
          ref: uB("act", NB),
          className: "BoardActions",
          children: [!QB.loadoutPerkOwned && (0, EB.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, EB.jsx)(fj, {
              cost: QB.loadoutPerkCost,
              loadout: dB
            }), (0, EB.jsx)(JB.m, {
              disabled: !jj(dB, QB.loadoutPerkCost) || jB.pending,
              onClick: () => {
                zB.act("loadoutUnlock", NB)
              },
              children: nB(`${iB}:loadoutUnlock`)
            })]
          }), QB.loadoutPerkOwned && !QB.loadoutPerkEquipped && (0, EB.jsx)(JB.f, {
            disabled: IB || jB.pending,
            onClick: () => {
              zB.act("loadoutEquip", NB)
            },
            children: nB(`${iB}:loadoutEquip`)
          }), QB.loadoutPerkOwned && !QB.loadoutPerkEquipped && IB && (0, EB.jsx)("span", {
            className: "BoardHint",
            children: nB(`${iB}:loadoutSocketsFullHint`)
          }), QB.loadoutPerkEquipped && (0, EB.jsx)(JB.M, {
            disabled: jB.pending,
            onClick: () => {
              zB.act("loadoutUnequip", NB)
            },
            children: nB(`${iB}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Vj(BB) {
      let {
        icon: jB,
        name: zB,
        status: QB,
        locked: nB,
        equipped: dB
      } = BB;
      const {
        t: IB
      } = (0, pB.D)();
      return (0, EB.jsxs)(hB, {
        icon: (0, EB.jsx)(oB, {
          itemName: jB
        }),
        name: zB,
        children: [null !== QB && (0, EB.jsx)("span", {
          className: UB()("LoadoutStatusText", {
            Locked: nB
          }),
          children: QB
        }), dB && (0, EB.jsx)("span", {
          className: "BoardBadge",
          children: IB(`${iB}:loadoutEquippedBadge`)
        })]
      })
    }

    function hj(BB) {
      let {
        view: jB,
        controller: zB
      } = BB;
      const QB = jB.loadout;
      if ("loadoutPerks" === jB.slot) {
        const BB = QB.loadoutPerks.find((BB => BB.loadoutPerkId === jB.selectedId));
        return (0, EB.jsx)("section", {
          className: "BoardDetail",
          children: BB && (0, EB.jsx)(Yj, {
            view: jB,
            controller: zB,
            perk: BB
          })
        })
      }
      const nB = Qj(QB, jB.slot),
        dB = nB.loadoutSlotOptions.find((BB => BB.loadoutOptionId === jB.selectedId));
      return (0, EB.jsx)("section", {
        className: "BoardDetail",
        children: dB && (0, EB.jsx)(Fj, {
          view: jB,
          controller: zB,
          slot: nB,
          option: dB
        })
      })
    }

    function Xj(BB) {
      let {
        owned: jB,
        total: zB
      } = BB;
      return zB <= 1 ? null : (0, EB.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: zB
        }, ((BB, zB) => (0, EB.jsx)("span", {
          className: UB()("LoadoutPip", {
            Filled: zB < jB
          })
        }, zB)))
      })
    }

    function Zj(BB) {
      let {
        view: jB,
        controller: zB
      } = BB;
      const {
        t: QB
      } = (0, pB.D)(), nB = jB.loadout, dB = tj();
      return (0, EB.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": QB(`${iB}:loadoutKit`),
        children: [nB.loadoutSlots.map((BB => {
          const nB = BB.loadoutSlotOptions.find((jB => jB.loadoutOptionId === BB.loadoutSlotEquippedId));
          return (0, EB.jsxs)("button", {
            ref: dB("section", BB.loadoutSlotKind),
            type: "button",
            className: UB()("LoadoutKitSlot", {
              Selected: jB.slot === BB.loadoutSlotKind
            }),
            onClick: () => {
              zB.selectSlot(BB.loadoutSlotKind)
            },
            children: [(0, EB.jsx)("span", {
              className: "LoadoutKitIcon",
              children: nB && (0, EB.jsx)(oB, {
                itemName: nB.loadoutOptionIcon
              })
            }), (0, EB.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, EB.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, EB.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: QB(Gj[BB.loadoutSlotKind])
                }), nB && (0, EB.jsx)(Xj, {
                  owned: nB.loadoutOptionOwnedTier,
                  total: nB.loadoutOptionTiers.length
                })]
              }), (0, EB.jsx)("span", {
                className: "LoadoutKitName",
                children: null === nB || void 0 === nB ? void 0 : nB.loadoutOptionName
              })]
            })]
          }, BB.loadoutSlotKind)
        })), (0, EB.jsx)(Aj, {
          view: jB,
          controller: zB
        })]
      })
    }

    function Aj(BB) {
      let {
        view: jB,
        controller: zB
      } = BB;
      const {
        t: QB
      } = (0, pB.D)(), nB = jB.loadout, dB = nB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)), IB = tj();
      return (0, EB.jsxs)("button", {
        ref: IB("section", "loadoutPerks"),
        type: "button",
        className: UB()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === jB.slot
        }),
        onClick: () => {
          zB.selectSlot("loadoutPerks")
        },
        children: [(0, EB.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, EB.jsx)("span", {
            className: "LoadoutKitLabel",
            children: QB(Gj.loadoutPerks)
          }), (0, EB.jsx)("span", {
            className: "LoadoutPerkCount",
            children: QB(`${iB}:loadoutPerkCount`, {
              equipped: String(dB.length),
              max: String(nB.loadoutMaxPerks)
            })
          })]
        }), (0, EB.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: nB.loadoutMaxPerks
          }, ((BB, jB) => {
            const zB = dB[jB];
            return (0, EB.jsxs)("span", {
              className: UB()("LoadoutSocket", {
                Filled: zB,
                Empty: !zB
              }),
              children: [(0, EB.jsx)("span", {
                className: "LoadoutSocketWell",
                children: zB && (0, EB.jsx)(oB, {
                  itemName: zB.loadoutPerkIcon
                })
              }), (0, EB.jsx)("span", {
                className: "LoadoutSocketName",
                children: zB ? zB.loadoutPerkName : QB(`${iB}:loadoutPerkSocketEmpty`)
              })]
            }, jB)
          }))
        })]
      })
    }

    function Tj(BB) {
      let {
        icon: jB,
        name: zB,
        selected: QB,
        equipped: nB,
        locked: dB,
        ownedTier: IB,
        tiers: NB,
        buttonRef: uB,
        onSelect: UB
      } = BB;
      const {
        t: aB
      } = (0, pB.D)();
      return (0, EB.jsxs)(VB, {
        icon: (0, EB.jsx)(oB, {
          itemName: jB
        }),
        name: zB,
        selected: QB,
        locked: dB,
        buttonRef: uB,
        onSelect: UB,
        children: [nB && (0, EB.jsx)("span", {
          className: "BoardBadge",
          children: aB(`${iB}:loadoutEquippedBadge`)
        }), dB && (0, EB.jsx)("span", {
          className: "BoardBadge Muted",
          children: aB(`${iB}:loadoutLocked`)
        }), !dB && (0, EB.jsx)(Xj, {
          owned: IB,
          total: NB
        })]
      })
    }

    function Pj(BB) {
      let {
        view: jB,
        controller: zB
      } = BB;
      const QB = jB.loadout,
        nB = tj();
      if ("loadoutPerks" === jB.slot) return (0, EB.jsx)("div", {
        className: "BoardTiles",
        children: QB.loadoutPerks.map((BB => (0, EB.jsx)(Tj, {
          icon: BB.loadoutPerkIcon,
          name: BB.loadoutPerkName,
          selected: jB.selectedId === BB.loadoutPerkId,
          equipped: BB.loadoutPerkEquipped,
          locked: !BB.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: nB("zs", BB.loadoutPerkId),
          onSelect: () => {
            zB.select(BB.loadoutPerkId)
          }
        }, BB.loadoutPerkId)))
      });
      const dB = Qj(QB, jB.slot);
      return (0, EB.jsx)("div", {
        className: "BoardTiles",
        children: dB.loadoutSlotOptions.map((BB => (0, EB.jsx)(Tj, {
          icon: BB.loadoutOptionIcon,
          name: BB.loadoutOptionName,
          selected: jB.selectedId === BB.loadoutOptionId,
          equipped: dB.loadoutSlotEquippedId === BB.loadoutOptionId,
          locked: 0 === BB.loadoutOptionOwnedTier,
          ownedTier: BB.loadoutOptionOwnedTier,
          tiers: BB.loadoutOptionTiers.length,
          buttonRef: nB("zs", BB.loadoutOptionId),
          onSelect: () => {
            zB.select(BB.loadoutOptionId)
          }
        }, BB.loadoutOptionId)))
      })
    }

    function Wj(BB) {
      let {
        loadout: jB
      } = BB;
      return (0, EB.jsx)(XB, {
        coins: jB.loadoutCoins,
        children: jB.loadoutHeldParts.filter((BB => BB.loadoutHeldPartAmount > 0)).map((BB => (0, EB.jsx)(DB, {
          itemName: BB.loadoutHeldPartItem,
          amount: BB.loadoutHeldPartAmount
        }, BB.loadoutHeldPartCurrency)))
      })
    }

    function ej(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, aB.h)(rj, jB.getSnapshot()),
        {
          t: QB
        } = (0, pB.D)();
      if (null === zB.loadout) return null;
      const nB = zB.notice;
      return (0, EB.jsx)(Ej, {
        view: zB,
        onDismiss: jB.dismiss,
        children: (0, EB.jsxs)(fB, {
          open: zB.open,
          onDismiss: jB.dismiss,
          title: QB(`${iB}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, EB.jsx)(Wj, {
            loadout: zB.loadout
          }),
          statusRefused: null === nB || void 0 === nB ? void 0 : nB.loadoutNoticeRefused,
          status: (0, EB.jsxs)(EB.Fragment, {
            children: [(0, EB.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: QB(`${iB}:loadoutRadioBadge`)
            }), null !== nB && QB(`${iB}:${nB.loadoutNoticeKey}`, {
              name: nB.loadoutNoticeName,
              tier: (0, OB.O)(nB.loadoutNoticeTier),
              max: String(zB.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, EB.jsx)(Zj, {
            view: zB,
            controller: jB
          }), (0, EB.jsx)(Pj, {
            view: zB,
            controller: jB
          }), (0, EB.jsx)(hj, {
            view: zB,
            controller: jB
          })]
        })
      })
    }

    function lj(BB, jB, zB) {
      const QB = BB.locatorEntries.find((BB => BB.locatorEntryId === zB));
      if (!QB) return null;
      const nB = QB.locatorEntryName;
      if ("locatorDisarm" === jB) return QB.locatorEntryArmed ? {
        board: wj(BB, null),
        notice: xj("locatorNoticeDisarmed", nB)
      } : null;
      if ("locatorArm" === jB) return QB.locatorEntryOwned && !QB.locatorEntryArmed ? {
        board: wj(BB, zB),
        notice: xj("locatorNoticeArmed", nB)
      } : null;
      if (QB.locatorEntryOwned || BB.locatorCoins < QB.locatorEntryPrice) return null;
      const dB = wj({
        ...BB,
        locatorCoins: BB.locatorCoins - QB.locatorEntryPrice
      }, zB);
      return {
        board: {
          ...dB,
          locatorEntries: dB.locatorEntries.map((BB => BB.locatorEntryId === zB ? {
            ...BB,
            locatorEntryOwned: !0
          } : BB))
        },
        notice: xj("locatorNoticeBought", nB)
      }
    }

    function wj(BB, jB) {
      return {
        ...BB,
        locatorEntries: BB.locatorEntries.map((BB => {
          const zB = BB.locatorEntryId === jB;
          return BB.locatorEntryArmed === zB ? BB : {
            ...BB,
            locatorEntryArmed: zB
          }
        }))
      }
    }

    function xj(BB, jB) {
      return {
        locatorNoticeKey: BB,
        locatorNoticeRefused: !1,
        locatorNoticeName: jB
      }
    }
    const Kj = "containmentLocatorView";
    class Cj extends Bj {
      constructor(BB, jB, zB, QB) {
        super(BB, jB, zB, QB, "locator", lj), this.snapshot = this.buildSnapshot()
      }
      messageOpens(BB) {
        return BB.locatorMessageOpens
      }
      messageNotice(BB) {
        return BB.locatorNotice
      }
      openingSelection(BB) {
        var jB;
        const zB = BB.locatorEntries;
        return (null !== (jB = zB.find((BB => BB.locatorEntryArmed))) && void 0 !== jB ? jB : zB[0]).locatorEntryId
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
    const cj = {
        locatorContained: `${iB}:locatorFlavourContained`,
        locatorEncountered: `${iB}:locatorFlavourEncountered`,
        locatorUnseen: `${iB}:locatorFlavourUnseen`
      },
      bj = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${iB}:locatorAttunedNormal`,
        codexHardOnly: `${iB}:locatorAttunedHard`
      };

    function vj() {
      return (0, EB.jsx)(EB.Fragment, {
        children: Array.from({
          length: 5
        }, ((BB, jB) => (0, EB.jsx)("span", {
          className: "LocatorFly",
          children: (0, EB.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, jB)))
      })
    }

    function Rj(BB) {
      let {
        entry: jB
      } = BB;
      const {
        t: zB
      } = (0, pB.D)();
      return jB.locatorEntryArmed ? (0, EB.jsx)("span", {
        className: "BoardBadge Armed",
        children: zB(`${iB}:locatorArmedBadge`)
      }) : jB.locatorEntryOwned ? (0, EB.jsx)("span", {
        className: "BoardBadge",
        children: zB(`${iB}:locatorOwnedBadge`)
      }) : null
    }

    function Oj(BB) {
      let {
        entry: jB,
        coins: zB,
        inTile: QB = !1
      } = BB;
      return (0, EB.jsx)(DB, {
        itemName: qB,
        amount: jB.locatorEntryPrice,
        DN: zB,
        inTile: QB
      })
    }

    function Bz(BB) {
      let {
        view: jB,
        controller: zB,
        entry: QB
      } = BB;
      const {
        t: nB
      } = (0, pB.D)(), dB = QB.locatorEntryId, IB = jB.locators.locatorEntries.find((BB => BB.locatorEntryArmed && BB !== QB));
      return (0, EB.jsxs)("div", {
        className: "BoardActions",
        children: [QB.locatorEntryArmed && (0, EB.jsx)(JB.M, {
          disabled: jB.pending,
          onClick: () => {
            zB.act("locatorDisarm", dB)
          },
          children: nB(`${iB}:locatorDisarm`)
        }), QB.locatorEntryOwned && !QB.locatorEntryArmed && (0, EB.jsx)(JB.f, {
          disabled: jB.pending,
          onClick: () => {
            zB.act("locatorArm", dB)
          },
          children: nB(`${iB}:locatorArm`)
        }), !QB.locatorEntryOwned && (0, EB.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, EB.jsx)(Oj, {
            entry: QB,
            coins: jB.locators.locatorCoins
          }), (0, EB.jsx)(JB.m, {
            disabled: jB.locators.locatorCoins < QB.locatorEntryPrice || jB.pending,
            onClick: () => {
              zB.act("locatorBuy", dB)
            },
            children: nB(`${iB}:locatorBuy`)
          })]
        }), IB && !QB.locatorEntryArmed && (0, EB.jsx)("span", {
          className: "BoardHint",
          children: nB(`${iB}:locatorReplacesHint`, {
            name: IB.locatorEntryName
          })
        })]
      })
    }

    function jz(BB) {
      let {
        entry: jB
      } = BB;
      return "locatorUnseen" === jB.locatorEntryStanding ? (0, EB.jsx)(oB, {
        itemName: "Compass"
      }) : (0, EB.jsx)(HB, {
        anomalyId: jB.locatorEntryId,
        caught: "locatorContained" === jB.locatorEntryStanding
      })
    }

    function zz(BB) {
      let {
        view: jB,
        controller: zB,
        entry: QB
      } = BB;
      const {
        t: nB
      } = (0, pB.D)(), dB = bj[QB.locatorEntryDifficulty];
      return (0, EB.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, EB.jsxs)("div", {
          className: UB()("LocatorLabel", {
            Armed: QB.locatorEntryArmed
          }),
          children: [(0, EB.jsx)(hB, {
            icon: (0, EB.jsx)(jz, {
              entry: QB
            }),
            name: nB(`${iB}:locatorName`, {
              name: QB.locatorEntryName
            }),
            children: (0, EB.jsx)(Rj, {
              entry: QB
            })
          }), (0, EB.jsx)("p", {
            className: "BoardDescription",
            children: nB(QB.locatorEntryArmed ? `${iB}:locatorFlavourArmed` : cj[QB.locatorEntryStanding])
          }), null !== dB && (0, EB.jsx)("p", {
            className: "LocatorAttuned",
            children: nB(dB)
          }), (0, EB.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: nB(`${iB}:locatorUsage`)
          })]
        }), (0, EB.jsx)(Bz, {
          view: jB,
          controller: zB,
          entry: QB
        })]
      })
    }

    function Qz(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, aB.h)(Kj, jB.getSnapshot()),
        {
          t: QB
        } = (0, pB.D)(),
        nB = zB.locators;
      if (null === nB) return null;
      const dB = nB.locatorEntries.find((BB => BB.locatorEntryId === zB.selectedId)),
        IB = zB.notice;
      return (0, EB.jsxs)(fB, {
        open: zB.open,
        onDismiss: jB.dismiss,
        title: QB(`${iB}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, EB.jsx)(vj, {}),
        headerExtra: (0, EB.jsx)(XB, {
          coins: nB.locatorCoins
        }),
        statusRefused: null === IB || void 0 === IB ? void 0 : IB.locatorNoticeRefused,
        status: (0, EB.jsxs)(EB.Fragment, {
          children: [(0, EB.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: QB(`${iB}:locatorKeeperName`)
          }), null !== IB && QB(`${iB}:${IB.locatorNoticeKey}`, {
            name: IB.locatorNoticeName
          })]
        }),
        children: [(0, EB.jsx)("div", {
          className: "BoardTiles",
          children: nB.locatorEntries.map((BB => (0, EB.jsxs)(VB, {
            icon: (0, EB.jsx)(jz, {
              entry: BB
            }),
            name: BB.locatorEntryName,
            selected: BB === dB,
            locked: !1,
            className: UB()("LocatorTag", {
              Armed: BB.locatorEntryArmed
            }),
            onSelect: () => {
              jB.select(BB.locatorEntryId)
            },
            children: [(0, EB.jsx)(Rj, {
              entry: BB
            }), !BB.locatorEntryOwned && (0, EB.jsx)(Oj, {
              entry: BB,
              coins: nB.locatorCoins,
              inTile: !0
            })]
          }, BB.locatorEntryId)))
        }), (0, EB.jsx)(zz, {
          view: zB,
          controller: jB,
          entry: dB
        })]
      })
    }

    function nz(BB) {
      let {
        loadout: jB,
        codex: zB,
        locator: QB
      } = BB;
      return (0, EB.jsxs)(EB.Fragment, {
        children: [(0, EB.jsx)(ej, {
          controller: jB
        }), (0, EB.jsx)(RB, {
          controller: zB
        }), (0, EB.jsx)(Qz, {
          controller: QB
        })]
      })
    }
    var dz = zB(38645);
    class Iz {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = BB, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new dz.b({
          spacingMs: 0,
          now: jB
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(BB, jB) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, jB(), this.notify()
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
    var Nz = zB(38640);
    const uz = new Map([
      ["npc_general", mj],
      ["npc_tentacle_guy", Nz]
    ]);

    function Uz(BB) {
      const jB = uz.get(BB);
      if (void 0 === jB) return null;
      const zB = document.createElement("img");
      return zB.src = jB, zB.alt = "", zB.draggable = !1, zB.style.imageRendering = "pixelated", zB
    }
    const az = function() {
      let BB, jB = !1,
        zB = null,
        uB = null;
      const UB = [],
        aB = BB => {
          for (const jB of UB) jB !== BB && jB.close();
          (0, NB.o)()
        },
        pB = BB => {
          BB && (0, NB.f)()
        },
        rB = new Iz((jB => {
          BB.sendCommand(jB)
        })),
        sB = new sj((BB => {
          IB.n.Ly(rj, BB, !0)
        }), aB, pB, rB),
        JB = new TB((BB => {
          IB.n.Ly(AB, BB, !0)
        }), aB, pB),
        mB = new Cj((BB => {
          IB.n.Ly(Kj, BB, !0)
        }), aB, pB, rB);
      UB.push(sB, JB, mB);
      return {
        onCreate: jB => {
          BB = jB, zB = (0, NB.t)(null, {
            content: (0, QB.createElement)(nz, {
              loadout: sB,
              codex: JB,
              locator: mB
            }),
            onClose: () => {
              for (const BB of UB) BB.close()
            }
          }), uB = (0, dB.g)(Uz)
        },
        onReceivedMessageFromServer: (BB, jB) => {
          "containmentLoadout" === BB ? sB.VJ(jB) : "containmentLoadoutClose" === BB ? sB.isOpen() && (sB.close(), (0, NB.d)()) : "containmentCodex" === BB ? JB.VJ(jB) : "containmentLocator" === BB && mB.VJ(jB)
        },
        vp: () => {
          jB || nB.c.get("loadingOverlayVisible") || (jB = !0, BB.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var BB, jB;
          null === (BB = zB) || void 0 === BB || BB(), zB = null, null === (jB = uB) || void 0 === jB || jB(), uB = null;
          for (const zB of UB) zB.dispose();
          rB.dispose()
        }
      }
    }
  },
  39388: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39397: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39405: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39407: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39415: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39418: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39422: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39428: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39436: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39439: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39445: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39447: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39451: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39456: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39464: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39469: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39471: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39478: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39481: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39489: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38640: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);