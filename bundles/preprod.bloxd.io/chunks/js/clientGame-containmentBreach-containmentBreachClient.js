export const id = 15;
export const ids = [15];
export const modules = {
  39593: (QQ, WQ, XQ) => {
    var wQ = {
      "./breach-zero-uncaught.webp": 39597,
      "./breach-zero.webp": 39605,
      "./brood-father-uncaught.webp": 39607,
      "./brood-father.webp": 39613,
      "./carousel-uncaught.webp": 39615,
      "./carousel.webp": 39622,
      "./deadlock-uncaught.webp": 39626,
      "./deadlock.webp": 39635,
      "./frost-revenant-uncaught.webp": 39639,
      "./frost-revenant.webp": 39644,
      "./hollow-choir-uncaught.webp": 39650,
      "./hollow-choir.webp": 39653,
      "./magma-warden-uncaught.webp": 39659,
      "./magma-warden.webp": 39668,
      "./patient-zero-uncaught.webp": 39672,
      "./patient-zero.webp": 39675,
      "./siege-engine-uncaught.webp": 39681,
      "./siege-engine.webp": 39684,
      "./warp-stalker-uncaught.webp": 39691,
      "./warp-stalker.webp": 39694
    };

    function qQ(QQ) {
      var WQ = TQ(QQ);
      return XQ(WQ)
    }

    function TQ(QQ) {
      if (!XQ.o(wQ, QQ)) {
        var WQ = new Error("Cannot find module '" + QQ + "'");
        throw WQ.code = "MODULE_NOT_FOUND", WQ
      }
      return wQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(wQ)
    }, qQ.resolve = TQ, QQ.exports = qQ, qQ.id = 39593
  },
  38831: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    const wQ = 4,
      qQ = 12e3,
      TQ = 1e3;
    class zQ {
      constructor() {
        let {
          limit: QQ = wQ,
          windowMs: WQ = qQ,
          spacingMs: XQ = TQ,
          now: zQ = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = QQ, this.windowMs = WQ, this.spacingMs = XQ, this.now = zQ
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const QQ of this.priority) QQ.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const QQ = this.now();
        this.sent.push(QQ), this.lastSentAt = QQ, this.schedule(), this.notify()
      }
      addPriority(QQ) {
        return this.priority.add(QQ), () => {
          this.priority.delete(QQ)
        }
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const QQ of this.priority)
          if (QQ.waiting()) return !0;
        return !1
      }
      prune() {
        const QQ = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= QQ;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const QQ = this.now(),
          WQ = this.lastSentAt + this.spacingMs,
          XQ = Math.min(WQ > QQ ? WQ : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        XQ !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, XQ - QQ)))
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38813: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ, WQ, XQ) {
        this.mB = QQ, this.beforeOpen = WQ, this.afterClose = XQ, this.open = !1, this.zj = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.zj && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(QQ) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(QQ)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.zj = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.zj || (this.snapshot = this.buildSnapshot(), this.mB(this.snapshot))
      }
    }
  },
  39587: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => gX
    });
    var wQ = XQ(61);
    var qQ = XQ(26),
      TQ = XQ(1983),
      zQ = XQ(31),
      sQ = XQ(36900),
      FQ = XQ(1081),
      PQ = XQ.n(FQ),
      gQ = XQ(1498),
      JQ = XQ(1226),
      rQ = XQ(4851),
      IQ = XQ(1399),
      jQ = XQ(1507),
      BQ = XQ(1988),
      yQ = XQ(1416),
      VQ = XQ(1975),
      DQ = XQ(2052),
      pQ = XQ(243);
    const GQ = XQ(39593),
      UQ = Object.fromEntries(GQ.keys().map((QQ => [QQ.replace(/^\.\/(.*)\.webp$/, "$1"), GQ(QQ)]))),
      bQ = new Set;

    function vQ(QQ, WQ) {
      const XQ = WQ ? QQ : `${QQ}-uncaught`,
        wQ = (0, pQ.e)(UQ, XQ);
      return void 0 !== wQ || bQ.has(XQ) || (bQ.add(XQ), console.warn(`Containment Breach has no mugshot ${XQ}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), wQ
    }
    var dQ = XQ(1145);
    const HQ = "containmentBreach",
      aQ = "Gold Coin";

    function lQ(QQ) {
      let {
        open: WQ,
        onDismiss: XQ,
        title: wQ,
        className: qQ,
        decor: TQ,
        headerExtra: zQ,
        status: sQ,
        statusRefused: FQ = !1,
        children: gQ
      } = QQ;
      const JQ = `${qQ}Title`;
      return (0, dQ.jsx)(rQ.b, {
        show: WQ,
        close: XQ,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, dQ.jsxs)("section", {
          className: PQ()("ContainmentBoardPanel", qQ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": JQ,
          children: [TQ && (0, dQ.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: TQ
          }), (0, dQ.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, dQ.jsx)("h2", {
              id: JQ,
              className: "VisuallyHidden",
              children: wQ
            }), zQ, (0, dQ.jsx)(jQ.o, {
              onClick: XQ
            })]
          }), (0, dQ.jsx)("div", {
            className: "BoardBody",
            children: gQ
          }), void 0 !== sQ && (0, dQ.jsx)("footer", {
            className: PQ()("BoardStatus", {
              Refused: FQ
            }),
            children: sQ
          })]
        })
      })
    }

    function hQ(QQ) {
      let {
        itemName: WQ
      } = QQ;
      return (0, dQ.jsx)(BQ.d, {
        itemName: WQ,
        amount: 0
      })
    }

    function iQ(QQ) {
      let {
        anomalyId: WQ,
        caught: XQ
      } = QQ;
      const qQ = (0, wQ.useRef)(null);
      return (0, IQ.e)(qQ, !XQ), (0, dQ.jsx)("span", {
        ref: qQ,
        className: PQ()("BoardMugshot", {
          Uncaught: !XQ
        }),
        children: (0, dQ.jsx)("img", {
          src: vQ(WQ, XQ),
          alt: "",
          draggable: !1
        })
      })
    }

    function cQ(QQ) {
      let {
        itemName: WQ,
        amount: XQ,
        Ds: wQ,
        inTile: qQ = !1
      } = QQ;
      return (0, dQ.jsx)(yQ.e, {
        delayShow: 200,
        hoverOnly: qQ,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, dQ.jsx)(RQ, {
          itemName: WQ,
          amount: XQ,
          Ds: wQ
        }),
        children: (0, dQ.jsxs)("span", {
          className: PQ()("BoardChip", {
            Short: void 0 !== wQ && wQ < XQ
          }),
          children: [(0, dQ.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, dQ.jsx)(hQ, {
              itemName: WQ
            })
          }), XQ.toLocaleString()]
        })
      })
    }
    const AQ = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function RQ(QQ) {
      var WQ;
      let {
        itemName: XQ,
        amount: wQ,
        Ds: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, JQ.C)(), zQ = (0, DQ.d)("itemInfo", (QQ => QQ[XQ])), {
        lore: sQ,
        droppedBy: FQ
      } = function(QQ) {
        if ("string" !== typeof QQ) return {
          lore: QQ,
          droppedBy: null
        };
        const WQ = AQ.exec(QQ);
        return null === WQ ? {
          lore: QQ,
          droppedBy: null
        } : {
          lore: "" === WQ[1] ? void 0 : WQ[1],
          droppedBy: WQ[2]
        }
      }(null === zQ || void 0 === zQ ? void 0 : zQ.description);
      return (0, dQ.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, dQ.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, dQ.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, dQ.jsx)(hQ, {
              itemName: XQ
            })
          }), (0, dQ.jsx)(VQ.e, {
            text: null !== (WQ = null === zQ || void 0 === zQ ? void 0 : zQ.displayName) && void 0 !== WQ ? WQ : XQ,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== sQ || null !== FQ) && (0, dQ.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== sQ && (0, dQ.jsx)(VQ.e, {
            text: sQ,
            className: "BoardChipTooltipDescription"
          }), null !== FQ && (0, dQ.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, dQ.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: TQ(`${HQ}:chipDroppedBy`)
            }), FQ]
          })]
        }), void 0 !== qQ && (0, dQ.jsxs)("div", {
          className: PQ()("BoardChipTooltipHeld", {
            Short: qQ < wQ
          }),
          children: [(0, dQ.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: TQ(`${HQ}:chipYouHave`)
          }), (0, dQ.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, dQ.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: qQ.toLocaleString()
            }), ` / ${wQ.toLocaleString()}`]
          }), (0, dQ.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, dQ.jsx)("span", {
              style: {
                width: (wQ > 0 ? 100 * Math.min(1, qQ / wQ) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function EQ(QQ) {
      let {
        icon: WQ,
        name: XQ,
        selected: wQ,
        locked: qQ,
        className: TQ,
        buttonRef: zQ,
        onSelect: sQ,
        children: FQ
      } = QQ;
      return (0, dQ.jsxs)("button", {
        ref: zQ,
        type: "button",
        className: PQ()("BoardTile", TQ, {
          Selected: wQ,
          Locked: qQ
        }),
        onClick: sQ,
        children: [(0, dQ.jsx)("span", {
          className: "BoardTileIcon",
          children: WQ
        }), (0, dQ.jsx)("span", {
          className: "BoardTileName",
          children: XQ
        }), FQ]
      })
    }

    function CQ(QQ) {
      let {
        icon: WQ,
        name: XQ,
        children: wQ
      } = QQ;
      return (0, dQ.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, dQ.jsx)("span", {
          className: "BoardDetailIcon",
          children: WQ
        }), (0, dQ.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, dQ.jsx)("h3", {
            children: XQ
          }), (0, dQ.jsx)("span", {
            className: "BoardDetailStatus",
            children: wQ
          })]
        })]
      })
    }

    function uQ(QQ) {
      let {
        coins: WQ,
        children: XQ
      } = QQ;
      return (0, dQ.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, dQ.jsx)(cQ, {
          itemName: aQ,
          amount: WQ
        }), XQ]
      })
    }
    var LQ = XQ(38813);
    const kQ = "containmentCodexView";
    class fQ extends LQ.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = QQ => {
          this.selectedId = QQ, this.emit()
        }
      }
      gj(QQ) {
        this.entries = QQ.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const SQ = {
        codexAnyDifficulty: `${HQ}:codexNeedsAny`,
        codexNormalOnly: `${HQ}:codexNeedsNormal`,
        codexHardOnly: `${HQ}:codexNeedsHard`
      },
      tQ = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      oQ = {
        codexContained: `${HQ}:codexContainedBadge`,
        codexEncountered: `${HQ}:codexEncounteredBadge`,
        codexUnidentified: `${HQ}:codexUnidentifiedBadge`
      },
      eQ = ["94%", "81%", "88%", "46%", "72%"];

    function nQ(QQ) {
      let {
        entry: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, JQ.C)();
      return (0, dQ.jsx)("span", {
        className: PQ()("BoardBadge", tQ[WQ.codexEntryState]),
        children: XQ(oQ[WQ.codexEntryState])
      })
    }

    function xQ(QQ) {
      const {
        t: WQ
      } = (0, JQ.C)();
      return "codexUnidentified" === QQ.codexEntryState ? WQ(`${HQ}:codexUnidentifiedName`) : QQ.codexEntryName
    }

    function YQ(QQ) {
      let {
        entry: WQ
      } = QQ;
      return "codexUnidentified" === WQ.codexEntryState ? (0, dQ.jsx)(hQ, {
        itemName: "Book"
      }) : (0, dQ.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, dQ.jsx)(iQ, {
          anomalyId: WQ.codexEntryId,
          caught: "codexContained" === WQ.codexEntryState
        }), (0, dQ.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function NQ(QQ) {
      let {
        entry: WQ,
        selected: XQ,
        onSelect: wQ
      } = QQ;
      const qQ = "codexUnidentified" === WQ.codexEntryState;
      return (0, dQ.jsxs)(EQ, {
        icon: (0, dQ.jsx)(YQ, {
          entry: WQ
        }),
        name: xQ(WQ),
        selected: XQ,
        locked: qQ,
        className: PQ()("CodexFolder", tQ[WQ.codexEntryState]),
        onSelect: () => {
          wQ(WQ.codexEntryId)
        },
        children: [!qQ && (0, dQ.jsx)(nQ, {
          entry: WQ
        }), qQ && (0, dQ.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function ZQ(QQ) {
      let {
        count: WQ
      } = QQ;
      const XQ = [];
      for (let wQ = Math.min(WQ, 25); wQ > 0; wQ -= 5) XQ.push(Math.min(wQ, 5));
      return (0, dQ.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: XQ.map(((QQ, WQ) => (0, dQ.jsx)("span", {
          className: PQ()("CodexTallyGroup", {
            Gate: 5 === QQ
          }),
          children: Array.from({
            length: Math.min(QQ, 4)
          }, ((QQ, WQ) => (0, dQ.jsx)("span", {
            className: "CodexTallyMark"
          }, WQ)))
        }, WQ)))
      })
    }

    function OQ(QQ) {
      let {
        contained: WQ,
        total: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, JQ.C)();
      return (0, dQ.jsxs)("div", {
        className: "CodexProgress",
        children: [wQ(`${HQ}:codexProgress`, {
          contained: String(WQ),
          total: String(XQ)
        }), (0, dQ.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, dQ.jsx)("span", {
            style: {
              width: WQ / XQ * 100 + "%"
            }
          })
        })]
      })
    }

    function KQ(QQ) {
      let {
        entry: WQ,
        fileNumber: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, JQ.C)(), qQ = "codexContained" === WQ.codexEntryState;
      return (0, dQ.jsx)("section", {
        className: "BoardDetail",
        children: (0, dQ.jsxs)("article", {
          className: PQ()("CodexDossier", tQ[WQ.codexEntryState]),
          children: [(0, dQ.jsx)("span", {
            className: "CodexFileNumber",
            children: wQ(`${HQ}:codexFileNumber`, {
              number: String(XQ).padStart(3, "0")
            })
          }), (0, dQ.jsx)(CQ, {
            icon: (0, dQ.jsx)(YQ, {
              entry: WQ
            }),
            name: xQ(WQ),
            children: (0, dQ.jsx)(nQ, {
              entry: WQ
            })
          }), qQ && (0, dQ.jsxs)(dQ.Fragment, {
            children: [(0, dQ.jsx)("p", {
              className: "BoardDescription",
              children: WQ.codexEntryLore
            }), (0, dQ.jsxs)("p", {
              className: "CodexTally",
              children: [wQ(`${HQ}:codexContainments`, {
                count: String(WQ.codexEntryContainedCount)
              }), (0, dQ.jsx)(ZQ, {
                count: WQ.codexEntryContainedCount
              })]
            }), (0, dQ.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: wQ(`${HQ}:codexContainedBadge`)
            })]
          }), !qQ && (0, dQ.jsxs)(dQ.Fragment, {
            children: [(0, dQ.jsxs)("div", {
              className: "CodexRedaction",
              children: [eQ.map((QQ => (0, dQ.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: QQ
                }
              }, QQ))), (0, dQ.jsx)("p", {
                className: "CodexRedacted",
                children: wQ(`${HQ}:codexRedacted`)
              })]
            }), "" !== WQ.codexEntryHint && (0, dQ.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, dQ.jsx)("h4", {
                children: wQ(`${HQ}:codexHintLabel`)
              }), (0, dQ.jsx)("p", {
                children: WQ.codexEntryHint
              })]
            }), (0, dQ.jsx)("p", {
              className: "CodexClearance",
              children: wQ(SQ[WQ.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function mQ(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, gQ.j)(kQ, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, JQ.C)();
      if (0 === XQ.entries.length) return null;
      const qQ = XQ.entries.find((QQ => QQ.codexEntryId === XQ.selectedId)),
        TQ = XQ.entries.filter((QQ => "codexContained" === QQ.codexEntryState)).length,
        zQ = XQ.entries.map((QQ => QQ.codexEntryId)).sort().indexOf(qQ.codexEntryId) + 1;
      return (0, dQ.jsxs)(lQ, {
        open: XQ.open,
        onDismiss: WQ.dismiss,
        title: wQ(`${HQ}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, dQ.jsx)(OQ, {
          contained: TQ,
          total: XQ.entries.length
        }),
        children: [(0, dQ.jsx)("div", {
          className: "BoardTiles",
          children: XQ.entries.map((QQ => (0, dQ.jsx)(NQ, {
            entry: QQ,
            selected: QQ === qQ,
            onSelect: WQ.select
          }, QQ.codexEntryId)))
        }), (0, dQ.jsx)(KQ, {
          entry: qQ,
          fileNumber: zQ
        })]
      })
    }
    var MQ = XQ(402);
    class QW extends LQ.e {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        super(QQ, WQ, XQ), this.pacer = wQ, this.command = qQ, this.predict = TQ, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = QQ => {
          this.selectedId = QQ, this.emit()
        }, this.act = (QQ, WQ) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${QQ} ${WQ}`, this.rollBack)) return;
          const XQ = this.predict(this.board, QQ, WQ);
          null !== XQ && (this.board = XQ.board, this.notice = XQ.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = wQ.subscribe((() => {
          this.emit()
        }))
      }
      gj(QQ) {
        const WQ = this.messageOpens(QQ);
        if (WQ && this.open) return this.board === this.confirmed && (this.board = QQ), this.confirmed = QQ, void this.emit();
        if (this.board = QQ, this.confirmed = QQ, this.pacer.onReply(), WQ) return this.notice = null, this.selectedId = this.openingSelection(QQ), void this.show();
        const XQ = this.messageNotice(QQ);
        null !== XQ && (this.notice = XQ), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function WW(QQ, WQ) {
      return QQ.loadoutCoins >= WQ.loadoutCostCoins && WQ.loadoutCostParts.every((WQ => function(QQ, WQ) {
        return XW(QQ, WQ).loadoutHeldPartAmount
      }(QQ, WQ.loadoutPartCurrency) >= WQ.loadoutPartAmount))
    }

    function XW(QQ, WQ) {
      return QQ.loadoutHeldParts.find((QQ => QQ.loadoutHeldPartCurrency === WQ))
    }

    function wW(QQ, WQ) {
      return QQ.loadoutSlots.find((QQ => QQ.loadoutSlotKind === WQ))
    }

    function qW(QQ) {
      return QQ.loadoutPerks.filter((QQ => QQ.loadoutPerkEquipped)).length >= QQ.loadoutMaxPerks
    }

    function TW(QQ, WQ, XQ) {
      for (const qQ of QQ.loadoutSlots) {
        const wQ = qQ.loadoutSlotOptions.find((QQ => QQ.loadoutOptionId === XQ));
        if (wQ) return "loadoutArmour" === qQ.loadoutSlotKind ? sW(QQ, qQ, wQ, WQ) : zW(QQ, qQ, wQ, WQ)
      }
      const wQ = QQ.loadoutPerks.find((QQ => QQ.loadoutPerkId === XQ));
      return wQ ? function(QQ, WQ, XQ) {
        const wQ = WQ.loadoutPerkOwned,
          qQ = WQ.loadoutPerkEquipped,
          TQ = WQ.loadoutPerkName,
          zQ = qW(QQ);
        if ("loadoutUnlock" === XQ) {
          if (wQ || !WW(QQ, WQ.loadoutPerkCost)) return null;
          const XQ = {
            ...WQ,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !zQ
          };
          return {
            board: PW(gW(QQ, WQ.loadoutPerkCost), XQ),
            notice: JW(zQ ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", TQ)
          }
        }
        if ("loadoutUpgrade" === XQ || !wQ || "loadoutEquip" === XQ === qQ || !qQ && zQ) return null;
        return {
          board: PW(QQ, {
            ...WQ,
            loadoutPerkEquipped: !qQ
          }),
          notice: JW(qQ ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", TQ)
        }
      }(QQ, wQ, WQ) : null
    }

    function zW(QQ, WQ, XQ, wQ) {
      const qQ = XQ.loadoutOptionOwnedTier,
        TQ = XQ.loadoutOptionName;
      if ("loadoutEquip" === wQ) return 0 === qQ ? null : {
        board: FW(QQ, WQ, XQ.loadoutOptionId, null),
        notice: JW("loadoutNoticeEquipped", TQ)
      };
      const zQ = "loadoutUnlock" === wQ;
      if (zQ && 0 !== qQ || "loadoutUpgrade" === wQ && (0 === qQ || qQ >= XQ.loadoutOptionTiers.length) || "loadoutUnequip" === wQ) return null;
      const sQ = XQ.loadoutOptionTiers[qQ].loadoutTierCost;
      if (!WW(QQ, sQ)) return null;
      const FQ = {
          ...XQ,
          loadoutOptionOwnedTier: qQ + 1
        },
        PQ = zQ ? XQ.loadoutOptionId : WQ.loadoutSlotEquippedId;
      return {
        board: FW(gW(QQ, sQ), WQ, PQ, FQ),
        notice: zQ ? JW("loadoutNoticeUnlocked", TQ) : JW("loadoutNoticeUpgraded", TQ, qQ + 1)
      }
    }

    function sW(QQ, WQ, XQ, wQ) {
      const qQ = XQ.loadoutOptionOwnedTier > 0,
        TQ = XQ.loadoutOptionName;
      if ("loadoutEquip" === wQ && qQ) return {
        board: FW(QQ, WQ, XQ.loadoutOptionId, null),
        notice: JW("loadoutNoticeEquipped", TQ)
      };
      const zQ = XQ.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== wQ || qQ || !WW(QQ, zQ) ? null : {
        board: FW(gW(QQ, zQ), WQ, XQ.loadoutOptionId, {
          ...XQ,
          loadoutOptionOwnedTier: 1
        }),
        notice: JW("loadoutNoticeUnlocked", TQ)
      }
    }

    function FW(QQ, WQ, XQ, wQ) {
      const qQ = {
        ...WQ,
        loadoutSlotEquippedId: XQ,
        loadoutSlotOptions: WQ.loadoutSlotOptions.map((QQ => null !== wQ && QQ.loadoutOptionId === wQ.loadoutOptionId ? wQ : QQ))
      };
      return {
        ...QQ,
        loadoutSlots: QQ.loadoutSlots.map((QQ => QQ === WQ ? qQ : QQ))
      }
    }

    function PW(QQ, WQ) {
      return {
        ...QQ,
        loadoutPerks: QQ.loadoutPerks.map((QQ => QQ.loadoutPerkId === WQ.loadoutPerkId ? WQ : QQ))
      }
    }

    function gW(QQ, WQ) {
      return {
        ...QQ,
        loadoutCoins: QQ.loadoutCoins - WQ.loadoutCostCoins,
        loadoutHeldParts: QQ.loadoutHeldParts.map((QQ => {
          const XQ = WQ.loadoutCostParts.find((WQ => WQ.loadoutPartCurrency === QQ.loadoutHeldPartCurrency));
          return XQ ? {
            ...QQ,
            loadoutHeldPartAmount: QQ.loadoutHeldPartAmount - XQ.loadoutPartAmount
          } : QQ
        }))
      }
    }

    function JW(QQ, WQ) {
      return {
        loadoutNoticeKey: QQ,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: WQ,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const rW = "containmentLoadoutView";
    class IW extends QW {
      constructor(QQ, WQ, XQ, wQ) {
        super(QQ, WQ, XQ, wQ, "loadout", TW), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = QQ => {
          this.slot = QQ, this.selectedId = jW(this.board, QQ), this.emit()
        }
      }
      messageOpens(QQ) {
        return QQ.loadoutMessageOpens
      }
      messageNotice(QQ) {
        return QQ.loadoutNotice
      }
      openingSelection(QQ) {
        return jW(QQ, this.slot)
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

    function jW(QQ, WQ) {
      if ("loadoutPerks" === WQ) {
        var XQ;
        const WQ = QQ.loadoutPerks;
        return (null !== (XQ = WQ.find((QQ => QQ.loadoutPerkEquipped))) && void 0 !== XQ ? XQ : WQ[0]).loadoutPerkId
      }
      return wW(QQ, WQ).loadoutSlotEquippedId
    }
    const BW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var yW = XQ(37169),
      VW = XQ(1318);
    const DW = {
        loadoutPrimary: `${HQ}:loadoutSlotPrimary`,
        loadoutSecondary: `${HQ}:loadoutSlotSecondary`,
        loadoutOffensive: `${HQ}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${HQ}:loadoutSlotSelfHelp`,
        loadoutArmour: `${HQ}:loadoutSlotArmour`,
        loadoutPerks: `${HQ}:loadoutSlotPerks`
      },
      pW = {
        section: "right",
        tr: "bottom",
        act: "top"
      },
      GW = (0, wQ.createContext)({
        step: null,
        targetRef: () => {}
      });

    function UW() {
      const {
        step: QQ,
        targetRef: WQ
      } = (0, wQ.useContext)(GW);
      return (XQ, wQ) => (null === QQ || void 0 === QQ ? void 0 : QQ.kind) === XQ && QQ.id === wQ ? WQ : void 0
    }

    function bW(QQ, WQ) {
      const XQ = WQ.loadoutTargetId;
      if ("loadoutPerks" === WQ.loadoutTargetSection) {
        const WQ = QQ.loadoutPerks.find((QQ => QQ.loadoutPerkId === XQ));
        return {
          name: WQ.loadoutPerkName,
          owned: WQ.loadoutPerkOwned,
          equipped: WQ.loadoutPerkEquipped
        }
      }
      const wQ = wW(QQ, WQ.loadoutTargetSection),
        qQ = wQ.loadoutSlotOptions.find((QQ => QQ.loadoutOptionId === XQ));
      return {
        name: qQ.loadoutOptionName,
        owned: qQ.loadoutOptionOwnedTier > 0,
        equipped: wQ.loadoutSlotEquippedId === XQ
      }
    }

    function vW(QQ, WQ, XQ, wQ) {
      const [qQ, TQ] = QQ(`${HQ}:${WQ}`, {
        [XQ]: "\x01"
      }).split("\x01");
      return (0, dQ.jsxs)(dQ.Fragment, {
        children: [qQ, (0, dQ.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: wQ
        }), TQ]
      })
    }

    function dW(QQ) {
      let {
        view: WQ,
        onDismiss: XQ,
        children: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, JQ.C)(), zQ = WQ.loadout, sQ = WQ.open ? zQ.loadoutWalkthrough.map((QQ => ({
        target: QQ,
        info: bW(zQ, QQ)
      }))).find((QQ => {
        let {
          info: WQ
        } = QQ;
        return !WQ.equipped
      })) : void 0;
      let FQ = null,
        PQ = null;
      if (void 0 !== sQ) {
        const {
          target: QQ,
          info: XQ
        } = sQ;
        WQ.slot !== QQ.loadoutTargetSection ? (FQ = {
          kind: "section",
          id: QQ.loadoutTargetSection
        }, PQ = vW(TQ, "loadoutWalkthroughSection", "section", TQ(DW[QQ.loadoutTargetSection]))) : WQ.selectedId !== QQ.loadoutTargetId ? (FQ = {
          kind: "tr",
          id: QQ.loadoutTargetId
        }, PQ = vW(TQ, "loadoutWalkthroughPick", "name", XQ.name)) : (FQ = {
          kind: "act",
          id: QQ.loadoutTargetId
        }, PQ = vW(TQ, XQ.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", XQ.name))
      }
      const gQ = null === FQ ? null : function(QQ) {
          return `${QQ.kind}:${QQ.id}`
        }(FQ),
        [rQ, IQ] = (0, wQ.useState)(null),
        jQ = (0, wQ.useCallback)((QQ => {
          IQ((WQ => null !== QQ ? {
            key: gQ,
            node: QQ
          } : (null === WQ || void 0 === WQ ? void 0 : WQ.key) === gQ ? null : WQ))
        }), [gQ]),
        BQ = null !== gQ && (null === rQ || void 0 === rQ ? void 0 : rQ.key) === gQ ? rQ.node : null;
      return (0, dQ.jsxs)(GW.Provider, {
        value: {
          step: FQ,
          targetRef: jQ
        },
        children: [qQ, null !== FQ && null !== BQ && (0, dQ.jsx)(HW, {
          target: BQ,
          placement: pW[FQ.kind],
          onDismiss: XQ,
          children: PQ
        }, gQ)]
      })
    }

    function HW(QQ) {
      let {
        target: WQ,
        placement: XQ,
        onDismiss: qQ,
        children: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, JQ.C)(), sQ = (0, wQ.useRef)(WQ);
      return sQ.current = WQ, (0, VW.k)("popup", sQ, qQ), (0, dQ.jsxs)(yW.g, {
        target: WQ,
        placement: XQ,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, dQ.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, dQ.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: BW,
            alt: "",
            draggable: !1
          }), (0, dQ.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: zQ(`${HQ}:operatorName`)
          }), (0, dQ.jsx)(jQ.o, {
            onClick: qQ,
            ariaLabel: zQ(`${HQ}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, dQ.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: TQ
        })]
      })
    }
    const aW = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function lW(QQ) {
      let {
        cost: WQ,
        loadout: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, JQ.C)();
      return WQ.loadoutCostCoins <= 0 && 0 === WQ.loadoutCostParts.length ? (0, dQ.jsx)("span", {
        className: "LoadoutCost",
        children: wQ(`${HQ}:loadoutFree`)
      }) : (0, dQ.jsxs)("span", {
        className: "LoadoutCost",
        children: [WQ.loadoutCostCoins > 0 && (0, dQ.jsx)(cQ, {
          itemName: aQ,
          amount: WQ.loadoutCostCoins,
          Ds: XQ.loadoutCoins
        }), WQ.loadoutCostParts.map((QQ => {
          const WQ = XW(XQ, QQ.loadoutPartCurrency);
          return (0, dQ.jsx)(cQ, {
            itemName: WQ.loadoutHeldPartItem,
            amount: QQ.loadoutPartAmount,
            Ds: WQ.loadoutHeldPartAmount
          }, QQ.loadoutPartCurrency)
        }))]
      })
    }
    const hW = {
      loadoutStatFireRate: `${HQ}:loadoutUnitPerMinute`,
      loadoutStatReload: `${HQ}:loadoutUnitSeconds`,
      loadoutStatResupply: `${HQ}:loadoutUnitSeconds`
    };

    function iW(QQ) {
      return "loadoutStatPotency" === QQ.loadoutStatKind ? (0, MQ.Q)(QQ.loadoutStatValue) : String(QQ.loadoutStatValue)
    }

    function cW(QQ) {
      var WQ;
      let {
        option: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, JQ.C)(), qQ = XQ.loadoutOptionTiers, TQ = null === (WQ = qQ[0]) || void 0 === WQ ? void 0 : WQ.loadoutTierStats.map((QQ => QQ.loadoutStatKind));
      if (!TQ || 0 === TQ.length) return null;
      const zQ = XQ.loadoutOptionOwnedTier,
        sQ = (QQ, WQ) => {
          var XQ;
          return null === (XQ = qQ[QQ]) || void 0 === XQ ? void 0 : XQ.loadoutTierStats.find((QQ => QQ.loadoutStatKind === WQ))
        };
      return (0, dQ.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, dQ.jsx)("thead", {
          children: (0, dQ.jsxs)("tr", {
            children: [(0, dQ.jsx)("th", {}), qQ.map(((QQ, WQ) => (0, dQ.jsx)("th", {
              className: PQ()({
                Current: WQ + 1 === zQ,
                Next: WQ === zQ
              }),
              children: wQ(`${HQ}:loadoutTier`, {
                tier: (0, MQ.Q)(WQ + 1)
              })
            }, WQ)))]
          })
        }), (0, dQ.jsx)("tbody", {
          children: TQ.map((QQ => {
            const WQ = hW[QQ];
            return (0, dQ.jsxs)("tr", {
              children: [(0, dQ.jsxs)("th", {
                scope: "row",
                children: [wQ(`${HQ}:${QQ}`), WQ && (0, dQ.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: wQ(WQ)
                })]
              }), qQ.map(((WQ, XQ) => {
                const wQ = sQ(XQ, QQ),
                  qQ = XQ > 0 ? sQ(XQ - 1, QQ) : void 0,
                  TQ = wQ && qQ ? wQ.loadoutStatValue - qQ.loadoutStatValue : 0,
                  FQ = aW.has(QQ) ? TQ < 0 : TQ > 0,
                  gQ = XQ === zQ;
                return (0, dQ.jsxs)("td", {
                  className: PQ()({
                    Current: XQ + 1 === zQ,
                    Next: gQ,
                    Gain: FQ,
                    Owned: XQ < zQ
                  }),
                  children: [gQ && FQ && (0, dQ.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: TQ < 0 ? "\u25bc" : "\u25b2"
                  }), wQ ? iW(wQ) : "-"]
                }, XQ)
              }))]
            }, QQ)
          }))
        })]
      })
    }

    function AW(QQ) {
      let {
        view: WQ,
        controller: XQ,
        slot: wQ,
        option: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, JQ.C)(), zQ = WQ.loadout, sQ = qQ.loadoutOptionOwnedTier, FQ = qQ.loadoutOptionTiers.length, PQ = wQ.loadoutSlotEquippedId === qQ.loadoutOptionId, gQ = sQ < FQ ? qQ.loadoutOptionTiers[sQ].loadoutTierCost : null, rQ = null !== gQ && WW(zQ, gQ), IQ = qQ.loadoutOptionId, BQ = UW();
      return (0, dQ.jsxs)(dQ.Fragment, {
        children: [(0, dQ.jsx)(EW, {
          icon: qQ.loadoutOptionIcon,
          name: qQ.loadoutOptionName,
          status: 0 === sQ ? TQ(`${HQ}:loadoutLocked`) : FQ > 1 ? TQ(`${HQ}:loadoutTier`, {
            tier: (0, MQ.Q)(sQ)
          }) : null,
          locked: 0 === sQ,
          equipped: PQ
        }), (0, dQ.jsx)("p", {
          className: "BoardDescription",
          children: qQ.loadoutOptionDescription
        }), (0, dQ.jsx)(cW, {
          option: qQ
        }), (0, dQ.jsxs)("div", {
          ref: BQ("act", IQ),
          className: "BoardActions",
          children: [null !== gQ && (0, dQ.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, dQ.jsx)(lW, {
              cost: gQ,
              loadout: zQ
            }), (0, dQ.jsx)(jQ.s, {
              disabled: !rQ || WQ.pending,
              onClick: () => {
                XQ.act(0 === sQ ? "loadoutUnlock" : "loadoutUpgrade", IQ)
              },
              children: 0 === sQ ? TQ(`${HQ}:loadoutUnlock`) : TQ(`${HQ}:loadoutUpgrade`, {
                tier: (0, MQ.Q)(sQ + 1)
              })
            })]
          }), null === gQ && FQ > 1 && (0, dQ.jsx)("span", {
            className: "BoardHint",
            children: TQ(`${HQ}:loadoutMaxed`)
          }), sQ > 0 && !PQ && (0, dQ.jsx)(jQ.h, {
            disabled: WQ.pending,
            onClick: () => {
              XQ.act("loadoutEquip", IQ)
            },
            children: TQ(`${HQ}:loadoutEquip`)
          })]
        })]
      })
    }

    function RW(QQ) {
      let {
        view: WQ,
        controller: XQ,
        perk: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, JQ.C)(), TQ = WQ.loadout, zQ = qW(TQ), sQ = wQ.loadoutPerkId, FQ = UW();
      return (0, dQ.jsxs)(dQ.Fragment, {
        children: [(0, dQ.jsx)(EW, {
          icon: wQ.loadoutPerkIcon,
          name: wQ.loadoutPerkName,
          status: wQ.loadoutPerkOwned ? null : qQ(`${HQ}:loadoutLocked`),
          locked: !wQ.loadoutPerkOwned,
          equipped: wQ.loadoutPerkEquipped
        }), (0, dQ.jsx)("p", {
          className: "BoardDescription",
          children: wQ.loadoutPerkDescription
        }), (0, dQ.jsxs)("div", {
          ref: FQ("act", sQ),
          className: "BoardActions",
          children: [!wQ.loadoutPerkOwned && (0, dQ.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, dQ.jsx)(lW, {
              cost: wQ.loadoutPerkCost,
              loadout: TQ
            }), (0, dQ.jsx)(jQ.s, {
              disabled: !WW(TQ, wQ.loadoutPerkCost) || WQ.pending,
              onClick: () => {
                XQ.act("loadoutUnlock", sQ)
              },
              children: qQ(`${HQ}:loadoutUnlock`)
            })]
          }), wQ.loadoutPerkOwned && !wQ.loadoutPerkEquipped && (0, dQ.jsx)(jQ.h, {
            disabled: zQ || WQ.pending,
            onClick: () => {
              XQ.act("loadoutEquip", sQ)
            },
            children: qQ(`${HQ}:loadoutEquip`)
          }), wQ.loadoutPerkOwned && !wQ.loadoutPerkEquipped && zQ && (0, dQ.jsx)("span", {
            className: "BoardHint",
            children: qQ(`${HQ}:loadoutSocketsFullHint`)
          }), wQ.loadoutPerkEquipped && (0, dQ.jsx)(jQ.T, {
            disabled: WQ.pending,
            onClick: () => {
              XQ.act("loadoutUnequip", sQ)
            },
            children: qQ(`${HQ}:loadoutUnequip`)
          })]
        })]
      })
    }

    function EW(QQ) {
      let {
        icon: WQ,
        name: XQ,
        status: wQ,
        locked: qQ,
        equipped: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, JQ.C)();
      return (0, dQ.jsxs)(CQ, {
        icon: (0, dQ.jsx)(hQ, {
          itemName: WQ
        }),
        name: XQ,
        children: [null !== wQ && (0, dQ.jsx)("span", {
          className: PQ()("LoadoutStatusText", {
            Locked: qQ
          }),
          children: wQ
        }), TQ && (0, dQ.jsx)("span", {
          className: "BoardBadge",
          children: zQ(`${HQ}:loadoutEquippedBadge`)
        })]
      })
    }

    function CW(QQ) {
      let {
        view: WQ,
        controller: XQ
      } = QQ;
      const wQ = WQ.loadout;
      if ("loadoutPerks" === WQ.slot) {
        const QQ = wQ.loadoutPerks.find((QQ => QQ.loadoutPerkId === WQ.selectedId));
        return (0, dQ.jsx)("section", {
          className: "BoardDetail",
          children: QQ && (0, dQ.jsx)(RW, {
            view: WQ,
            controller: XQ,
            perk: QQ
          })
        })
      }
      const qQ = wW(wQ, WQ.slot),
        TQ = qQ.loadoutSlotOptions.find((QQ => QQ.loadoutOptionId === WQ.selectedId));
      return (0, dQ.jsx)("section", {
        className: "BoardDetail",
        children: TQ && (0, dQ.jsx)(AW, {
          view: WQ,
          controller: XQ,
          slot: qQ,
          option: TQ
        })
      })
    }

    function uW(QQ) {
      let {
        owned: WQ,
        total: XQ
      } = QQ;
      return XQ <= 1 ? null : (0, dQ.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: XQ
        }, ((QQ, XQ) => (0, dQ.jsx)("span", {
          className: PQ()("LoadoutPip", {
            Filled: XQ < WQ
          })
        }, XQ)))
      })
    }

    function LW(QQ) {
      let {
        view: WQ,
        controller: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, JQ.C)(), qQ = WQ.loadout, TQ = UW();
      return (0, dQ.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": wQ(`${HQ}:loadoutKit`),
        children: [qQ.loadoutSlots.map((QQ => {
          const qQ = QQ.loadoutSlotOptions.find((WQ => WQ.loadoutOptionId === QQ.loadoutSlotEquippedId));
          return (0, dQ.jsxs)("button", {
            ref: TQ("section", QQ.loadoutSlotKind),
            type: "button",
            className: PQ()("LoadoutKitSlot", {
              Selected: WQ.slot === QQ.loadoutSlotKind
            }),
            onClick: () => {
              XQ.selectSlot(QQ.loadoutSlotKind)
            },
            children: [(0, dQ.jsx)("span", {
              className: "LoadoutKitIcon",
              children: qQ && (0, dQ.jsx)(hQ, {
                itemName: qQ.loadoutOptionIcon
              })
            }), (0, dQ.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, dQ.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, dQ.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: wQ(DW[QQ.loadoutSlotKind])
                }), qQ && (0, dQ.jsx)(uW, {
                  owned: qQ.loadoutOptionOwnedTier,
                  total: qQ.loadoutOptionTiers.length
                })]
              }), (0, dQ.jsx)("span", {
                className: "LoadoutKitName",
                children: null === qQ || void 0 === qQ ? void 0 : qQ.loadoutOptionName
              })]
            })]
          }, QQ.loadoutSlotKind)
        })), (0, dQ.jsx)(kW, {
          view: WQ,
          controller: XQ
        })]
      })
    }

    function kW(QQ) {
      let {
        view: WQ,
        controller: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, JQ.C)(), qQ = WQ.loadout, TQ = qQ.loadoutPerks.filter((QQ => QQ.loadoutPerkEquipped)), zQ = UW();
      return (0, dQ.jsxs)("button", {
        ref: zQ("section", "loadoutPerks"),
        type: "button",
        className: PQ()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === WQ.slot
        }),
        onClick: () => {
          XQ.selectSlot("loadoutPerks")
        },
        children: [(0, dQ.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, dQ.jsx)("span", {
            className: "LoadoutKitLabel",
            children: wQ(DW.loadoutPerks)
          }), (0, dQ.jsx)("span", {
            className: "LoadoutPerkCount",
            children: wQ(`${HQ}:loadoutPerkCount`, {
              equipped: String(TQ.length),
              max: String(qQ.loadoutMaxPerks)
            })
          })]
        }), (0, dQ.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: qQ.loadoutMaxPerks
          }, ((QQ, WQ) => {
            const XQ = TQ[WQ];
            return (0, dQ.jsxs)("span", {
              className: PQ()("LoadoutSocket", {
                Filled: XQ,
                Empty: !XQ
              }),
              children: [(0, dQ.jsx)("span", {
                className: "LoadoutSocketWell",
                children: XQ && (0, dQ.jsx)(hQ, {
                  itemName: XQ.loadoutPerkIcon
                })
              }), (0, dQ.jsx)("span", {
                className: "LoadoutSocketName",
                children: XQ ? XQ.loadoutPerkName : wQ(`${HQ}:loadoutPerkSocketEmpty`)
              })]
            }, WQ)
          }))
        })]
      })
    }

    function fW(QQ) {
      let {
        icon: WQ,
        name: XQ,
        selected: wQ,
        equipped: qQ,
        locked: TQ,
        ownedTier: zQ,
        tiers: sQ,
        buttonRef: FQ,
        onSelect: PQ
      } = QQ;
      const {
        t: gQ
      } = (0, JQ.C)();
      return (0, dQ.jsxs)(EQ, {
        icon: (0, dQ.jsx)(hQ, {
          itemName: WQ
        }),
        name: XQ,
        selected: wQ,
        locked: TQ,
        buttonRef: FQ,
        onSelect: PQ,
        children: [qQ && (0, dQ.jsx)("span", {
          className: "BoardBadge",
          children: gQ(`${HQ}:loadoutEquippedBadge`)
        }), TQ && (0, dQ.jsx)("span", {
          className: "BoardBadge Muted",
          children: gQ(`${HQ}:loadoutLocked`)
        }), !TQ && (0, dQ.jsx)(uW, {
          owned: zQ,
          total: sQ
        })]
      })
    }

    function SW(QQ) {
      let {
        view: WQ,
        controller: XQ
      } = QQ;
      const wQ = WQ.loadout,
        qQ = UW();
      if ("loadoutPerks" === WQ.slot) return (0, dQ.jsx)("div", {
        className: "BoardTiles",
        children: wQ.loadoutPerks.map((QQ => (0, dQ.jsx)(fW, {
          icon: QQ.loadoutPerkIcon,
          name: QQ.loadoutPerkName,
          selected: WQ.selectedId === QQ.loadoutPerkId,
          equipped: QQ.loadoutPerkEquipped,
          locked: !QQ.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: qQ("tr", QQ.loadoutPerkId),
          onSelect: () => {
            XQ.select(QQ.loadoutPerkId)
          }
        }, QQ.loadoutPerkId)))
      });
      const TQ = wW(wQ, WQ.slot);
      return (0, dQ.jsx)("div", {
        className: "BoardTiles",
        children: TQ.loadoutSlotOptions.map((QQ => (0, dQ.jsx)(fW, {
          icon: QQ.loadoutOptionIcon,
          name: QQ.loadoutOptionName,
          selected: WQ.selectedId === QQ.loadoutOptionId,
          equipped: TQ.loadoutSlotEquippedId === QQ.loadoutOptionId,
          locked: 0 === QQ.loadoutOptionOwnedTier,
          ownedTier: QQ.loadoutOptionOwnedTier,
          tiers: QQ.loadoutOptionTiers.length,
          buttonRef: qQ("tr", QQ.loadoutOptionId),
          onSelect: () => {
            XQ.select(QQ.loadoutOptionId)
          }
        }, QQ.loadoutOptionId)))
      })
    }

    function tW(QQ) {
      let {
        loadout: WQ
      } = QQ;
      return (0, dQ.jsx)(uQ, {
        coins: WQ.loadoutCoins,
        children: WQ.loadoutHeldParts.filter((QQ => QQ.loadoutHeldPartAmount > 0)).map((QQ => (0, dQ.jsx)(cQ, {
          itemName: QQ.loadoutHeldPartItem,
          amount: QQ.loadoutHeldPartAmount
        }, QQ.loadoutHeldPartCurrency)))
      })
    }

    function oW(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, gQ.j)(rW, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, JQ.C)();
      if (null === XQ.loadout) return null;
      const qQ = XQ.notice;
      return (0, dQ.jsx)(dW, {
        view: XQ,
        onDismiss: WQ.dismiss,
        children: (0, dQ.jsxs)(lQ, {
          open: XQ.open,
          onDismiss: WQ.dismiss,
          title: wQ(`${HQ}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, dQ.jsx)(tW, {
            loadout: XQ.loadout
          }),
          statusRefused: null === qQ || void 0 === qQ ? void 0 : qQ.loadoutNoticeRefused,
          status: (0, dQ.jsxs)(dQ.Fragment, {
            children: [(0, dQ.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: wQ(`${HQ}:loadoutRadioBadge`)
            }), null !== qQ && wQ(`${HQ}:${qQ.loadoutNoticeKey}`, {
              name: qQ.loadoutNoticeName,
              tier: (0, MQ.Q)(qQ.loadoutNoticeTier),
              max: String(XQ.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, dQ.jsx)(LW, {
            view: XQ,
            controller: WQ
          }), (0, dQ.jsx)(SW, {
            view: XQ,
            controller: WQ
          }), (0, dQ.jsx)(CW, {
            view: XQ,
            controller: WQ
          })]
        })
      })
    }

    function eW(QQ, WQ, XQ) {
      const wQ = QQ.locatorEntries.find((QQ => QQ.locatorEntryId === XQ));
      if (!wQ) return null;
      const qQ = wQ.locatorEntryName;
      if ("locatorDisarm" === WQ) return wQ.locatorEntryArmed ? {
        board: nW(QQ, null),
        notice: xW("locatorNoticeDisarmed", qQ)
      } : null;
      if ("locatorArm" === WQ) return wQ.locatorEntryOwned && !wQ.locatorEntryArmed ? {
        board: nW(QQ, XQ),
        notice: xW("locatorNoticeArmed", qQ)
      } : null;
      if (wQ.locatorEntryOwned || QQ.locatorCoins < wQ.locatorEntryPrice) return null;
      const TQ = nW({
        ...QQ,
        locatorCoins: QQ.locatorCoins - wQ.locatorEntryPrice
      }, XQ);
      return {
        board: {
          ...TQ,
          locatorEntries: TQ.locatorEntries.map((QQ => QQ.locatorEntryId === XQ ? {
            ...QQ,
            locatorEntryOwned: !0
          } : QQ))
        },
        notice: xW("locatorNoticeBought", qQ)
      }
    }

    function nW(QQ, WQ) {
      return {
        ...QQ,
        locatorEntries: QQ.locatorEntries.map((QQ => {
          const XQ = QQ.locatorEntryId === WQ;
          return QQ.locatorEntryArmed === XQ ? QQ : {
            ...QQ,
            locatorEntryArmed: XQ
          }
        }))
      }
    }

    function xW(QQ, WQ) {
      return {
        locatorNoticeKey: QQ,
        locatorNoticeRefused: !1,
        locatorNoticeName: WQ
      }
    }
    const YW = "containmentLocatorView";
    class NW extends QW {
      constructor(QQ, WQ, XQ, wQ) {
        super(QQ, WQ, XQ, wQ, "locator", eW), this.snapshot = this.buildSnapshot()
      }
      messageOpens(QQ) {
        return QQ.locatorMessageOpens
      }
      messageNotice(QQ) {
        return QQ.locatorNotice
      }
      openingSelection(QQ) {
        var WQ;
        const XQ = QQ.locatorEntries;
        return (null !== (WQ = XQ.find((QQ => QQ.locatorEntryArmed))) && void 0 !== WQ ? WQ : XQ[0]).locatorEntryId
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
    const ZW = {
        locatorContained: `${HQ}:locatorFlavourContained`,
        locatorEncountered: `${HQ}:locatorFlavourEncountered`,
        locatorUnseen: `${HQ}:locatorFlavourUnseen`
      },
      OW = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${HQ}:locatorAttunedNormal`,
        codexHardOnly: `${HQ}:locatorAttunedHard`
      };

    function KW() {
      return (0, dQ.jsx)(dQ.Fragment, {
        children: Array.from({
          length: 5
        }, ((QQ, WQ) => (0, dQ.jsx)("span", {
          className: "LocatorFly",
          children: (0, dQ.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, WQ)))
      })
    }

    function mW(QQ) {
      let {
        entry: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, JQ.C)();
      return WQ.locatorEntryArmed ? (0, dQ.jsx)("span", {
        className: "BoardBadge Armed",
        children: XQ(`${HQ}:locatorArmedBadge`)
      }) : WQ.locatorEntryOwned ? (0, dQ.jsx)("span", {
        className: "BoardBadge",
        children: XQ(`${HQ}:locatorOwnedBadge`)
      }) : null
    }

    function MW(QQ) {
      let {
        entry: WQ,
        coins: XQ,
        inTile: wQ = !1
      } = QQ;
      return (0, dQ.jsx)(cQ, {
        itemName: aQ,
        amount: WQ.locatorEntryPrice,
        Ds: XQ,
        inTile: wQ
      })
    }

    function QX(QQ) {
      let {
        view: WQ,
        controller: XQ,
        entry: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, JQ.C)(), TQ = wQ.locatorEntryId, zQ = WQ.locators.locatorEntries.find((QQ => QQ.locatorEntryArmed && QQ !== wQ));
      return (0, dQ.jsxs)("div", {
        className: "BoardActions",
        children: [wQ.locatorEntryArmed && (0, dQ.jsx)(jQ.T, {
          disabled: WQ.pending,
          onClick: () => {
            XQ.act("locatorDisarm", TQ)
          },
          children: qQ(`${HQ}:locatorDisarm`)
        }), wQ.locatorEntryOwned && !wQ.locatorEntryArmed && (0, dQ.jsx)(jQ.h, {
          disabled: WQ.pending,
          onClick: () => {
            XQ.act("locatorArm", TQ)
          },
          children: qQ(`${HQ}:locatorArm`)
        }), !wQ.locatorEntryOwned && (0, dQ.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, dQ.jsx)(MW, {
            entry: wQ,
            coins: WQ.locators.locatorCoins
          }), (0, dQ.jsx)(jQ.s, {
            disabled: WQ.locators.locatorCoins < wQ.locatorEntryPrice || WQ.pending,
            onClick: () => {
              XQ.act("locatorBuy", TQ)
            },
            children: qQ(`${HQ}:locatorBuy`)
          })]
        }), zQ && !wQ.locatorEntryArmed && (0, dQ.jsx)("span", {
          className: "BoardHint",
          children: qQ(`${HQ}:locatorReplacesHint`, {
            name: zQ.locatorEntryName
          })
        })]
      })
    }

    function WX(QQ) {
      let {
        entry: WQ
      } = QQ;
      return "locatorUnseen" === WQ.locatorEntryStanding ? (0, dQ.jsx)(hQ, {
        itemName: "Compass"
      }) : (0, dQ.jsx)(iQ, {
        anomalyId: WQ.locatorEntryId,
        caught: "locatorContained" === WQ.locatorEntryStanding
      })
    }

    function XX(QQ) {
      let {
        view: WQ,
        controller: XQ,
        entry: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, JQ.C)(), TQ = OW[wQ.locatorEntryDifficulty];
      return (0, dQ.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, dQ.jsxs)("div", {
          className: PQ()("LocatorLabel", {
            Armed: wQ.locatorEntryArmed
          }),
          children: [(0, dQ.jsx)(CQ, {
            icon: (0, dQ.jsx)(WX, {
              entry: wQ
            }),
            name: qQ(`${HQ}:locatorName`, {
              name: wQ.locatorEntryName
            }),
            children: (0, dQ.jsx)(mW, {
              entry: wQ
            })
          }), (0, dQ.jsx)("p", {
            className: "BoardDescription",
            children: qQ(wQ.locatorEntryArmed ? `${HQ}:locatorFlavourArmed` : ZW[wQ.locatorEntryStanding])
          }), null !== TQ && (0, dQ.jsx)("p", {
            className: "LocatorAttuned",
            children: qQ(TQ)
          }), (0, dQ.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: qQ(`${HQ}:locatorUsage`)
          })]
        }), (0, dQ.jsx)(QX, {
          view: WQ,
          controller: XQ,
          entry: wQ
        })]
      })
    }

    function wX(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, gQ.j)(YW, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, JQ.C)(),
        qQ = XQ.locators;
      if (null === qQ) return null;
      const TQ = qQ.locatorEntries.find((QQ => QQ.locatorEntryId === XQ.selectedId)),
        zQ = XQ.notice;
      return (0, dQ.jsxs)(lQ, {
        open: XQ.open,
        onDismiss: WQ.dismiss,
        title: wQ(`${HQ}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, dQ.jsx)(KW, {}),
        headerExtra: (0, dQ.jsx)(uQ, {
          coins: qQ.locatorCoins
        }),
        statusRefused: null === zQ || void 0 === zQ ? void 0 : zQ.locatorNoticeRefused,
        status: (0, dQ.jsxs)(dQ.Fragment, {
          children: [(0, dQ.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: wQ(`${HQ}:locatorKeeperName`)
          }), null !== zQ && wQ(`${HQ}:${zQ.locatorNoticeKey}`, {
            name: zQ.locatorNoticeName
          })]
        }),
        children: [(0, dQ.jsx)("div", {
          className: "BoardTiles",
          children: qQ.locatorEntries.map((QQ => (0, dQ.jsxs)(EQ, {
            icon: (0, dQ.jsx)(WX, {
              entry: QQ
            }),
            name: QQ.locatorEntryName,
            selected: QQ === TQ,
            locked: !1,
            className: PQ()("LocatorTag", {
              Armed: QQ.locatorEntryArmed
            }),
            onSelect: () => {
              WQ.select(QQ.locatorEntryId)
            },
            children: [(0, dQ.jsx)(mW, {
              entry: QQ
            }), !QQ.locatorEntryOwned && (0, dQ.jsx)(MW, {
              entry: QQ,
              coins: qQ.locatorCoins,
              inTile: !0
            })]
          }, QQ.locatorEntryId)))
        }), (0, dQ.jsx)(XX, {
          view: XQ,
          controller: WQ,
          entry: TQ
        })]
      })
    }

    function qX(QQ) {
      let {
        loadout: WQ,
        codex: XQ,
        locator: wQ
      } = QQ;
      return (0, dQ.jsxs)(dQ.Fragment, {
        children: [(0, dQ.jsx)(oW, {
          controller: WQ
        }), (0, dQ.jsx)(mQ, {
          controller: XQ
        }), (0, dQ.jsx)(wX, {
          controller: wQ
        })]
      })
    }
    var TX = XQ(38831);
    class zX {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = QQ, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new TX.d({
          spacingMs: 0,
          now: WQ
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(QQ, WQ) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, WQ(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(QQ), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
    }
    var sX = XQ(38825);
    const FX = new Map([
      ["npc_general", BW],
      ["npc_tentacle_guy", sX]
    ]);

    function PX(QQ) {
      const WQ = FX.get(QQ);
      if (void 0 === WQ) return null;
      const XQ = document.createElement("img");
      return XQ.src = WQ, XQ.alt = "", XQ.draggable = !1, XQ.style.imageRendering = "pixelated", XQ
    }
    const gX = function() {
      let QQ, WQ = !1,
        XQ = null,
        FQ = null;
      const PQ = [],
        gQ = QQ => {
          for (const WQ of PQ) WQ !== QQ && WQ.close();
          (0, sQ.u)()
        },
        JQ = QQ => {
          QQ && (0, sQ.n)()
        },
        rQ = new zX((WQ => {
          QQ.sendCommand(WQ)
        })),
        IQ = new IW((QQ => {
          zQ.k.mB(rW, QQ, !0)
        }), gQ, JQ, rQ),
        jQ = new fQ((QQ => {
          zQ.k.mB(kQ, QQ, !0)
        }), gQ, JQ),
        BQ = new NW((QQ => {
          zQ.k.mB(YW, QQ, !0)
        }), gQ, JQ, rQ);
      PQ.push(IQ, jQ, BQ);
      return {
        onCreate: WQ => {
          QQ = WQ, XQ = (0, sQ.A)(null, {
            content: (0, wQ.createElement)(qX, {
              loadout: IQ,
              codex: jQ,
              locator: BQ
            }),
            onClose: () => {
              for (const QQ of PQ) QQ.close()
            }
          }), FQ = (0, TQ.d)(PX)
        },
        onReceivedMessageFromServer: (QQ, WQ) => {
          "containmentLoadout" === QQ ? IQ.gj(WQ) : "containmentLoadoutClose" === QQ ? IQ.isOpen() && (IQ.close(), (0, sQ.j)()) : "containmentCodex" === QQ ? jQ.gj(WQ) : "containmentLocator" === QQ && BQ.gj(WQ)
        },
        fJ: () => {
          WQ || qQ.b.get("loadingOverlayVisible") || (WQ = !0, QQ.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var QQ, WQ;
          null === (QQ = XQ) || void 0 === QQ || QQ(), XQ = null, null === (WQ = FQ) || void 0 === WQ || WQ(), FQ = null;
          for (const XQ of PQ) XQ.dispose();
          rQ.dispose()
        }
      }
    }
  },
  39597: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39605: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39607: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39613: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39615: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39622: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39626: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39635: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39639: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39644: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39650: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39653: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39659: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39668: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39672: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39675: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39681: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39684: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39691: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39694: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38825: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);