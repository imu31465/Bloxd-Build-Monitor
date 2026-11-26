export const id = 15;
export const ids = [15];
export const modules = {
  40267: (HH, BH, LH) => {
    var AH = {
      "./breach-zero-uncaught.webp": 40273,
      "./breach-zero.webp": 40279,
      "./brood-father-uncaught.webp": 40285,
      "./brood-father.webp": 40290,
      "./carousel-uncaught.webp": 40296,
      "./carousel.webp": 40304,
      "./deadlock-uncaught.webp": 40308,
      "./deadlock.webp": 40312,
      "./doom-warlord-uncaught.webp": 40318,
      "./doom-warlord.webp": 40324,
      "./frost-revenant-uncaught.webp": 40331,
      "./frost-revenant.webp": 40337,
      "./hollow-choir-uncaught.webp": 40345,
      "./hollow-choir.webp": 40352,
      "./magma-warden-uncaught.webp": 40360,
      "./magma-warden.webp": 40365,
      "./patient-zero-uncaught.webp": 40373,
      "./patient-zero.webp": 40377,
      "./siege-engine-uncaught.webp": 40383,
      "./siege-engine.webp": 40388,
      "./warp-stalker-uncaught.webp": 40392,
      "./warp-stalker.webp": 40401
    };

    function rH(HH) {
      var BH = SH(HH);
      return LH(BH)
    }

    function SH(HH) {
      if (!LH.o(AH, HH)) {
        var BH = new Error("Cannot find module '" + HH + "'");
        throw BH.code = "MODULE_NOT_FOUND", BH
      }
      return AH[HH]
    }
    rH.keys = function() {
      return Object.keys(AH)
    }, rH.resolve = SH, HH.exports = rH, rH.id = 40267
  },
  39461: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    const AH = 4,
      rH = 12e3,
      SH = 1e3;
    class hH {
      constructor() {
        let {
          limit: HH = AH,
          windowMs: BH = rH,
          spacingMs: LH = SH,
          now: hH = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = HH, this.windowMs = BH, this.spacingMs = LH, this.now = hH
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const HH of this.priority) HH.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const HH = this.now();
        this.sent.push(HH), this.lastSentAt = HH, this.schedule(), this.notify()
      }
      addPriority(HH) {
        return this.priority.add(HH), () => {
          this.priority.delete(HH)
        }
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const HH of this.priority)
          if (HH.waiting()) return !0;
        return !1
      }
      prune() {
        const HH = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= HH;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const HH = this.now(),
          BH = this.lastSentAt + this.spacingMs,
          LH = Math.min(BH > HH ? BH : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        LH !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, LH - HH)))
      }
      notify() {
        for (const HH of this.listeners) HH()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  39421: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    class AH {
      constructor(HH, BH, LH) {
        this.AX = HH, this.beforeOpen = BH, this.afterClose = LH, this.open = !1, this.Mu = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Mu && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(HH) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(HH)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Mu = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Mu || (this.snapshot = this.buildSnapshot(), this.AX(this.snapshot))
      }
    }
  },
  40265: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => EL
    });
    var AH = LH(45);
    var rH = LH(15),
      SH = LH(1981),
      hH = LH(18),
      tH = LH(37474),
      zH = LH(1038),
      CH = LH.n(zH),
      EH = LH(1450),
      XH = LH(1123),
      GH = LH(4941),
      YH = LH(1344),
      uH = LH(1455),
      QH = LH(1986),
      WH = LH(1365),
      MH = LH(1967),
      xH = LH(2051),
      vH = LH(186);
    const PH = LH(40267),
      TH = Object.fromEntries(PH.keys().map((HH => [HH.replace(/^\.\/(.*)\.webp$/, "$1"), PH(HH)]))),
      UH = new Set;

    function VH(HH, BH) {
      const LH = BH ? HH : `${HH}-uncaught`,
        AH = (0, vH.d)(TH, LH);
      return void 0 !== AH || UH.has(LH) || (UH.add(LH), console.warn(`Containment Breach has no mugshot ${LH}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), AH
    }
    var OH = LH(1225);
    const bH = "containmentBreach",
      kH = "Gold Coin";

    function mH(HH) {
      let {
        open: BH,
        onDismiss: LH,
        title: AH,
        className: rH,
        decor: SH,
        headerExtra: hH,
        status: tH,
        statusRefused: zH = !1,
        children: EH
      } = HH;
      const XH = `${rH}Title`;
      return (0, OH.jsx)(GH.b, {
        show: BH,
        close: LH,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, OH.jsxs)("section", {
          className: CH()("ContainmentBoardPanel", rH),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": XH,
          children: [SH && (0, OH.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: SH
          }), (0, OH.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, OH.jsx)("h2", {
              id: XH,
              className: "VisuallyHidden",
              children: AH
            }), hH, (0, OH.jsx)(uH.q, {
              onClick: LH
            })]
          }), (0, OH.jsx)("div", {
            className: "BoardBody",
            children: EH
          }), void 0 !== tH && (0, OH.jsx)("footer", {
            className: CH()("BoardStatus", {
              Refused: zH
            }),
            children: tH
          })]
        })
      })
    }

    function oH(HH) {
      let {
        itemName: BH
      } = HH;
      return (0, OH.jsx)(QH.e, {
        itemName: BH,
        amount: 0
      })
    }

    function IH(HH) {
      let {
        anomalyId: BH,
        caught: LH
      } = HH;
      const rH = (0, AH.useRef)(null);
      return (0, YH.d)(rH, !LH), (0, OH.jsx)("span", {
        ref: rH,
        className: CH()("BoardMugshot", {
          Uncaught: !LH
        }),
        children: (0, OH.jsx)("img", {
          src: VH(BH, LH),
          alt: "",
          draggable: !1
        })
      })
    }

    function fH(HH) {
      let {
        itemName: BH,
        amount: LH,
        LX: AH,
        inTile: rH = !1
      } = HH;
      return (0, OH.jsx)(WH.g, {
        delayShow: 200,
        hoverOnly: rH,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, OH.jsx)(KH, {
          itemName: BH,
          amount: LH,
          LX: AH
        }),
        children: (0, OH.jsxs)("span", {
          className: CH()("BoardChip", {
            Short: void 0 !== AH && AH < LH
          }),
          children: [(0, OH.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, OH.jsx)(oH, {
              itemName: BH
            })
          }), LH.toLocaleString()]
        })
      })
    }
    const lH = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function KH(HH) {
      var BH;
      let {
        itemName: LH,
        amount: AH,
        LX: rH
      } = HH;
      const {
        t: SH
      } = (0, XH.B)(), hH = (0, xH.c)("itemInfo", (HH => HH[LH])), {
        lore: tH,
        droppedBy: zH
      } = function(HH) {
        if ("string" !== typeof HH) return {
          lore: HH,
          droppedBy: null
        };
        const BH = lH.exec(HH);
        return null === BH ? {
          lore: HH,
          droppedBy: null
        } : {
          lore: "" === BH[1] ? void 0 : BH[1],
          droppedBy: BH[2]
        }
      }(null === hH || void 0 === hH ? void 0 : hH.description);
      return (0, OH.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, OH.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, OH.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, OH.jsx)(oH, {
              itemName: LH
            })
          }), (0, OH.jsx)(MH.b, {
            text: null !== (BH = null === hH || void 0 === hH ? void 0 : hH.displayName) && void 0 !== BH ? BH : LH,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== tH || null !== zH) && (0, OH.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== tH && (0, OH.jsx)(MH.b, {
            text: tH,
            className: "BoardChipTooltipDescription"
          }), null !== zH && (0, OH.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, OH.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: SH(`${bH}:chipDroppedBy`)
            }), zH]
          })]
        }), void 0 !== rH && (0, OH.jsxs)("div", {
          className: CH()("BoardChipTooltipHeld", {
            Short: rH < AH
          }),
          children: [(0, OH.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: SH(`${bH}:chipYouHave`)
          }), (0, OH.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, OH.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: rH.toLocaleString()
            }), ` / ${AH.toLocaleString()}`]
          }), (0, OH.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, OH.jsx)("span", {
              style: {
                width: (AH > 0 ? 100 * Math.min(1, rH / AH) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function cH(HH) {
      let {
        icon: BH,
        name: LH,
        selected: AH,
        locked: rH,
        className: SH,
        buttonRef: hH,
        onSelect: tH,
        children: zH
      } = HH;
      return (0, OH.jsxs)("button", {
        ref: hH,
        type: "button",
        className: CH()("BoardTile", SH, {
          Selected: AH,
          Locked: rH
        }),
        onClick: tH,
        children: [(0, OH.jsx)("span", {
          className: "BoardTileIcon",
          children: BH
        }), (0, OH.jsx)("span", {
          className: "BoardTileName",
          children: LH
        }), zH]
      })
    }

    function eH(HH) {
      let {
        icon: BH,
        name: LH,
        children: AH
      } = HH;
      return (0, OH.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, OH.jsx)("span", {
          className: "BoardDetailIcon",
          children: BH
        }), (0, OH.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, OH.jsx)("h3", {
            children: LH
          }), (0, OH.jsx)("span", {
            className: "BoardDetailStatus",
            children: AH
          })]
        })]
      })
    }

    function qH(HH) {
      let {
        coins: BH,
        children: LH
      } = HH;
      return (0, OH.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, OH.jsx)(fH, {
          itemName: kH,
          amount: BH
        }), LH]
      })
    }
    var gH = LH(39421);
    const NH = "containmentCodexView";
    class RH extends gH.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = HH => {
          this.selectedId = HH, this.emit()
        }
      }
      kX(HH) {
        this.entries = HH.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const jH = {
        codexAnyDifficulty: `${bH}:codexNeedsAny`,
        codexNormalOnly: `${bH}:codexNeedsNormal`,
        codexHardOnly: `${bH}:codexNeedsHard`
      },
      nH = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      FH = {
        codexContained: `${bH}:codexContainedBadge`,
        codexEncountered: `${bH}:codexEncounteredBadge`,
        codexUnidentified: `${bH}:codexUnidentifiedBadge`
      },
      DH = ["94%", "81%", "88%", "46%", "72%"];

    function wH(HH) {
      let {
        entry: BH
      } = HH;
      const {
        t: LH
      } = (0, XH.B)();
      return (0, OH.jsx)("span", {
        className: CH()("BoardBadge", nH[BH.codexEntryState]),
        children: LH(FH[BH.codexEntryState])
      })
    }

    function ZH(HH) {
      const {
        t: BH
      } = (0, XH.B)();
      return "codexUnidentified" === HH.codexEntryState ? BH(`${bH}:codexUnidentifiedName`) : HH.codexEntryName
    }

    function dH(HH) {
      let {
        entry: BH
      } = HH;
      return "codexUnidentified" === BH.codexEntryState ? (0, OH.jsx)(oH, {
        itemName: "Book"
      }) : (0, OH.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, OH.jsx)(IH, {
          anomalyId: BH.codexEntryId,
          caught: "codexContained" === BH.codexEntryState
        }), (0, OH.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function aH(HH) {
      let {
        entry: BH,
        selected: LH,
        onSelect: AH
      } = HH;
      const rH = "codexUnidentified" === BH.codexEntryState;
      return (0, OH.jsxs)(cH, {
        icon: (0, OH.jsx)(dH, {
          entry: BH
        }),
        name: ZH(BH),
        selected: LH,
        locked: rH,
        className: CH()("CodexFolder", nH[BH.codexEntryState]),
        onSelect: () => {
          AH(BH.codexEntryId)
        },
        children: [!rH && (0, OH.jsx)(wH, {
          entry: BH
        }), rH && (0, OH.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function sH(HH) {
      let {
        count: BH
      } = HH;
      const LH = [];
      for (let AH = Math.min(BH, 25); AH > 0; AH -= 5) LH.push(Math.min(AH, 5));
      return (0, OH.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: LH.map(((HH, BH) => (0, OH.jsx)("span", {
          className: CH()("CodexTallyGroup", {
            Gate: 5 === HH
          }),
          children: Array.from({
            length: Math.min(HH, 4)
          }, ((HH, BH) => (0, OH.jsx)("span", {
            className: "CodexTallyMark"
          }, BH)))
        }, BH)))
      })
    }

    function JH(HH) {
      let {
        contained: BH,
        total: LH
      } = HH;
      const {
        t: AH
      } = (0, XH.B)();
      return (0, OH.jsxs)("div", {
        className: "CodexProgress",
        children: [AH(`${bH}:codexProgress`, {
          contained: String(BH),
          total: String(LH)
        }), (0, OH.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, OH.jsx)("span", {
            style: {
              width: BH / LH * 100 + "%"
            }
          })
        })]
      })
    }

    function iH(HH) {
      let {
        entry: BH,
        fileNumber: LH
      } = HH;
      const {
        t: AH
      } = (0, XH.B)(), rH = "codexContained" === BH.codexEntryState;
      return (0, OH.jsx)("section", {
        className: "BoardDetail",
        children: (0, OH.jsxs)("article", {
          className: CH()("CodexDossier", nH[BH.codexEntryState]),
          children: [(0, OH.jsx)("span", {
            className: "CodexFileNumber",
            children: AH(`${bH}:codexFileNumber`, {
              number: String(LH).padStart(3, "0")
            })
          }), (0, OH.jsx)(eH, {
            icon: (0, OH.jsx)(dH, {
              entry: BH
            }),
            name: ZH(BH),
            children: (0, OH.jsx)(wH, {
              entry: BH
            })
          }), rH && (0, OH.jsxs)(OH.Fragment, {
            children: [(0, OH.jsx)("p", {
              className: "BoardDescription",
              children: BH.codexEntryLore
            }), (0, OH.jsxs)("p", {
              className: "CodexTally",
              children: [AH(`${bH}:codexContainments`, {
                count: String(BH.codexEntryContainedCount)
              }), (0, OH.jsx)(sH, {
                count: BH.codexEntryContainedCount
              })]
            }), (0, OH.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: AH(`${bH}:codexContainedBadge`)
            })]
          }), !rH && (0, OH.jsxs)(OH.Fragment, {
            children: [(0, OH.jsxs)("div", {
              className: "CodexRedaction",
              children: [DH.map((HH => (0, OH.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: HH
                }
              }, HH))), (0, OH.jsx)("p", {
                className: "CodexRedacted",
                children: AH(`${bH}:codexRedacted`)
              })]
            }), "" !== BH.codexEntryHint && (0, OH.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, OH.jsx)("h4", {
                children: AH(`${bH}:codexHintLabel`)
              }), (0, OH.jsx)("p", {
                children: BH.codexEntryHint
              })]
            }), (0, OH.jsx)("p", {
              className: "CodexClearance",
              children: AH(jH[BH.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function pH(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, EH.e)(NH, BH.getSnapshot()),
        {
          t: AH
        } = (0, XH.B)();
      if (0 === LH.entries.length) return null;
      const rH = LH.entries.find((HH => HH.codexEntryId === LH.selectedId)),
        SH = LH.entries.filter((HH => "codexContained" === HH.codexEntryState)).length,
        hH = LH.entries.map((HH => HH.codexEntryId)).sort().indexOf(rH.codexEntryId) + 1;
      return (0, OH.jsxs)(mH, {
        open: LH.open,
        onDismiss: BH.dismiss,
        title: AH(`${bH}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, OH.jsx)(JH, {
          contained: SH,
          total: LH.entries.length
        }),
        children: [(0, OH.jsx)("div", {
          className: "BoardTiles",
          children: LH.entries.map((HH => (0, OH.jsx)(aH, {
            entry: HH,
            selected: HH === rH,
            onSelect: BH.select
          }, HH.codexEntryId)))
        }), (0, OH.jsx)(iH, {
          entry: rH,
          fileNumber: hH
        })]
      })
    }
    var yH = LH(317);
    class HB extends gH.b {
      constructor(HH, BH, LH, AH, rH, SH) {
        super(HH, BH, LH), this.pacer = AH, this.command = rH, this.predict = SH, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = HH => {
          this.selectedId = HH, this.emit()
        }, this.act = (HH, BH) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${HH} ${BH}`, this.rollBack)) return;
          const LH = this.predict(this.board, HH, BH);
          null !== LH && (this.board = LH.board, this.notice = LH.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = AH.subscribe((() => {
          this.emit()
        }))
      }
      kX(HH) {
        const BH = this.messageOpens(HH);
        if (BH && this.open) return this.board === this.confirmed && (this.board = HH), this.confirmed = HH, void this.emit();
        if (this.board = HH, this.confirmed = HH, this.pacer.onReply(), BH) return this.notice = null, this.selectedId = this.openingSelection(HH), void this.show();
        const LH = this.messageNotice(HH);
        null !== LH && (this.notice = LH), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function BB(HH, BH) {
      return HH.loadoutCoins >= BH.loadoutCostCoins && BH.loadoutCostParts.every((BH => function(HH, BH) {
        return LB(HH, BH).loadoutHeldPartAmount
      }(HH, BH.loadoutPartCurrency) >= BH.loadoutPartAmount))
    }

    function LB(HH, BH) {
      return HH.loadoutHeldParts.find((HH => HH.loadoutHeldPartCurrency === BH))
    }

    function AB(HH, BH) {
      return HH.loadoutSlots.find((HH => HH.loadoutSlotKind === BH))
    }

    function rB(HH) {
      return HH.loadoutPerks.filter((HH => HH.loadoutPerkEquipped)).length >= HH.loadoutMaxPerks
    }

    function SB(HH, BH, LH) {
      for (const rH of HH.loadoutSlots) {
        const AH = rH.loadoutSlotOptions.find((HH => HH.loadoutOptionId === LH));
        if (AH) return "loadoutArmour" === rH.loadoutSlotKind ? tB(HH, rH, AH, BH) : hB(HH, rH, AH, BH)
      }
      const AH = HH.loadoutPerks.find((HH => HH.loadoutPerkId === LH));
      return AH ? function(HH, BH, LH) {
        const AH = BH.loadoutPerkOwned,
          rH = BH.loadoutPerkEquipped,
          SH = BH.loadoutPerkName,
          hH = rB(HH);
        if ("loadoutUnlock" === LH) {
          if (AH || !BB(HH, BH.loadoutPerkCost)) return null;
          const LH = {
            ...BH,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !hH
          };
          return {
            board: CB(EB(HH, BH.loadoutPerkCost), LH),
            notice: XB(hH ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", SH)
          }
        }
        if ("loadoutUpgrade" === LH || !AH || "loadoutEquip" === LH === rH || !rH && hH) return null;
        return {
          board: CB(HH, {
            ...BH,
            loadoutPerkEquipped: !rH
          }),
          notice: XB(rH ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", SH)
        }
      }(HH, AH, BH) : null
    }

    function hB(HH, BH, LH, AH) {
      const rH = LH.loadoutOptionOwnedTier,
        SH = LH.loadoutOptionName;
      if ("loadoutEquip" === AH) return 0 === rH ? null : {
        board: zB(HH, BH, LH.loadoutOptionId, null),
        notice: XB("loadoutNoticeEquipped", SH)
      };
      const hH = "loadoutUnlock" === AH;
      if (hH && 0 !== rH || "loadoutUpgrade" === AH && (0 === rH || rH >= LH.loadoutOptionTiers.length) || "loadoutUnequip" === AH) return null;
      const tH = LH.loadoutOptionTiers[rH].loadoutTierCost;
      if (!BB(HH, tH)) return null;
      const zH = {
          ...LH,
          loadoutOptionOwnedTier: rH + 1
        },
        CH = hH ? LH.loadoutOptionId : BH.loadoutSlotEquippedId;
      return {
        board: zB(EB(HH, tH), BH, CH, zH),
        notice: hH ? XB("loadoutNoticeUnlocked", SH) : XB("loadoutNoticeUpgraded", SH, rH + 1)
      }
    }

    function tB(HH, BH, LH, AH) {
      const rH = LH.loadoutOptionOwnedTier > 0,
        SH = LH.loadoutOptionName;
      if ("loadoutEquip" === AH && rH) return {
        board: zB(HH, BH, LH.loadoutOptionId, null),
        notice: XB("loadoutNoticeEquipped", SH)
      };
      const hH = LH.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== AH || rH || !BB(HH, hH) ? null : {
        board: zB(EB(HH, hH), BH, LH.loadoutOptionId, {
          ...LH,
          loadoutOptionOwnedTier: 1
        }),
        notice: XB("loadoutNoticeUnlocked", SH)
      }
    }

    function zB(HH, BH, LH, AH) {
      const rH = {
        ...BH,
        loadoutSlotEquippedId: LH,
        loadoutSlotOptions: BH.loadoutSlotOptions.map((HH => null !== AH && HH.loadoutOptionId === AH.loadoutOptionId ? AH : HH))
      };
      return {
        ...HH,
        loadoutSlots: HH.loadoutSlots.map((HH => HH === BH ? rH : HH))
      }
    }

    function CB(HH, BH) {
      return {
        ...HH,
        loadoutPerks: HH.loadoutPerks.map((HH => HH.loadoutPerkId === BH.loadoutPerkId ? BH : HH))
      }
    }

    function EB(HH, BH) {
      return {
        ...HH,
        loadoutCoins: HH.loadoutCoins - BH.loadoutCostCoins,
        loadoutHeldParts: HH.loadoutHeldParts.map((HH => {
          const LH = BH.loadoutCostParts.find((BH => BH.loadoutPartCurrency === HH.loadoutHeldPartCurrency));
          return LH ? {
            ...HH,
            loadoutHeldPartAmount: HH.loadoutHeldPartAmount - LH.loadoutPartAmount
          } : HH
        }))
      }
    }

    function XB(HH, BH) {
      return {
        loadoutNoticeKey: HH,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: BH,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const GB = "containmentLoadoutView";
    class YB extends HB {
      constructor(HH, BH, LH, AH) {
        super(HH, BH, LH, AH, "loadout", SB), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = HH => {
          this.slot = HH, this.selectedId = uB(this.board, HH), this.emit()
        }
      }
      messageOpens(HH) {
        return HH.loadoutMessageOpens
      }
      messageNotice(HH) {
        return HH.loadoutNotice
      }
      openingSelection(HH) {
        return uB(HH, this.slot)
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

    function uB(HH, BH) {
      if ("loadoutPerks" === BH) {
        var LH;
        const BH = HH.loadoutPerks;
        return (null !== (LH = BH.find((HH => HH.loadoutPerkEquipped))) && void 0 !== LH ? LH : BH[0]).loadoutPerkId
      }
      return AB(HH, BH).loadoutSlotEquippedId
    }
    const QB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var WB = LH(37747),
      MB = LH(1214);
    const xB = {
        loadoutPrimary: `${bH}:loadoutSlotPrimary`,
        loadoutSecondary: `${bH}:loadoutSlotSecondary`,
        loadoutOffensive: `${bH}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${bH}:loadoutSlotSelfHelp`,
        loadoutArmour: `${bH}:loadoutSlotArmour`,
        loadoutPerks: `${bH}:loadoutSlotPerks`
      },
      vB = {
        section: "right",
        XY: "bottom",
        act: "top"
      },
      PB = (0, AH.createContext)({
        step: null,
        targetRef: () => {}
      });

    function TB() {
      const {
        step: HH,
        targetRef: BH
      } = (0, AH.useContext)(PB);
      return (LH, AH) => (null === HH || void 0 === HH ? void 0 : HH.kind) === LH && HH.id === AH ? BH : void 0
    }

    function UB(HH, BH) {
      const LH = BH.loadoutTargetId;
      if ("loadoutPerks" === BH.loadoutTargetSection) {
        const BH = HH.loadoutPerks.find((HH => HH.loadoutPerkId === LH));
        return {
          name: BH.loadoutPerkName,
          owned: BH.loadoutPerkOwned,
          equipped: BH.loadoutPerkEquipped
        }
      }
      const AH = AB(HH, BH.loadoutTargetSection),
        rH = AH.loadoutSlotOptions.find((HH => HH.loadoutOptionId === LH));
      return {
        name: rH.loadoutOptionName,
        owned: rH.loadoutOptionOwnedTier > 0,
        equipped: AH.loadoutSlotEquippedId === LH
      }
    }

    function VB(HH, BH, LH, AH) {
      const [rH, SH] = HH(`${bH}:${BH}`, {
        [LH]: "\x01"
      }).split("\x01");
      return (0, OH.jsxs)(OH.Fragment, {
        children: [rH, (0, OH.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: AH
        }), SH]
      })
    }

    function OB(HH) {
      let {
        view: BH,
        onDismiss: LH,
        children: rH
      } = HH;
      const {
        t: SH
      } = (0, XH.B)(), hH = BH.loadout, tH = BH.open ? hH.loadoutWalkthrough.map((HH => ({
        target: HH,
        info: UB(hH, HH)
      }))).find((HH => {
        let {
          info: BH
        } = HH;
        return !BH.equipped
      })) : void 0;
      let zH = null,
        CH = null;
      if (void 0 !== tH) {
        const {
          target: HH,
          info: LH
        } = tH;
        BH.slot !== HH.loadoutTargetSection ? (zH = {
          kind: "section",
          id: HH.loadoutTargetSection
        }, CH = VB(SH, "loadoutWalkthroughSection", "section", SH(xB[HH.loadoutTargetSection]))) : BH.selectedId !== HH.loadoutTargetId ? (zH = {
          kind: "XY",
          id: HH.loadoutTargetId
        }, CH = VB(SH, "loadoutWalkthroughPick", "name", LH.name)) : (zH = {
          kind: "act",
          id: HH.loadoutTargetId
        }, CH = VB(SH, LH.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", LH.name))
      }
      const EH = null === zH ? null : function(HH) {
          return `${HH.kind}:${HH.id}`
        }(zH),
        [GH, YH] = (0, AH.useState)(null),
        uH = (0, AH.useCallback)((HH => {
          YH((BH => null !== HH ? {
            key: EH,
            node: HH
          } : (null === BH || void 0 === BH ? void 0 : BH.key) === EH ? null : BH))
        }), [EH]),
        QH = null !== EH && (null === GH || void 0 === GH ? void 0 : GH.key) === EH ? GH.node : null;
      return (0, OH.jsxs)(PB.Provider, {
        value: {
          step: zH,
          targetRef: uH
        },
        children: [rH, null !== zH && null !== QH && (0, OH.jsx)(bB, {
          target: QH,
          placement: vB[zH.kind],
          onDismiss: LH,
          children: CH
        }, EH)]
      })
    }

    function bB(HH) {
      let {
        target: BH,
        placement: LH,
        onDismiss: rH,
        children: SH
      } = HH;
      const {
        t: hH
      } = (0, XH.B)(), tH = (0, AH.useRef)(BH);
      return tH.current = BH, (0, MB.r)("popup", tH, rH), (0, OH.jsxs)(WB.g, {
        target: BH,
        placement: LH,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, OH.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, OH.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: QB,
            alt: "",
            draggable: !1
          }), (0, OH.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: hH(`${bH}:operatorName`)
          }), (0, OH.jsx)(uH.q, {
            onClick: rH,
            ariaLabel: hH(`${bH}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, OH.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: SH
        })]
      })
    }
    const kB = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function mB(HH) {
      let {
        cost: BH,
        loadout: LH
      } = HH;
      const {
        t: AH
      } = (0, XH.B)();
      return BH.loadoutCostCoins <= 0 && 0 === BH.loadoutCostParts.length ? (0, OH.jsx)("span", {
        className: "LoadoutCost",
        children: AH(`${bH}:loadoutFree`)
      }) : (0, OH.jsxs)("span", {
        className: "LoadoutCost",
        children: [BH.loadoutCostCoins > 0 && (0, OH.jsx)(fH, {
          itemName: kH,
          amount: BH.loadoutCostCoins,
          LX: LH.loadoutCoins
        }), BH.loadoutCostParts.map((HH => {
          const BH = LB(LH, HH.loadoutPartCurrency);
          return (0, OH.jsx)(fH, {
            itemName: BH.loadoutHeldPartItem,
            amount: HH.loadoutPartAmount,
            LX: BH.loadoutHeldPartAmount
          }, HH.loadoutPartCurrency)
        }))]
      })
    }
    const oB = {
      loadoutStatFireRate: `${bH}:loadoutUnitPerMinute`,
      loadoutStatReload: `${bH}:loadoutUnitSeconds`,
      loadoutStatResupply: `${bH}:loadoutUnitSeconds`
    };

    function IB(HH) {
      return "loadoutStatPotency" === HH.loadoutStatKind ? (0, yH.T)(HH.loadoutStatValue) : String(HH.loadoutStatValue)
    }

    function fB(HH) {
      var BH;
      let {
        option: LH
      } = HH;
      const {
        t: AH
      } = (0, XH.B)(), rH = LH.loadoutOptionTiers, SH = null === (BH = rH[0]) || void 0 === BH ? void 0 : BH.loadoutTierStats.map((HH => HH.loadoutStatKind));
      if (!SH || 0 === SH.length) return null;
      const hH = LH.loadoutOptionOwnedTier,
        tH = (HH, BH) => {
          var LH;
          return null === (LH = rH[HH]) || void 0 === LH ? void 0 : LH.loadoutTierStats.find((HH => HH.loadoutStatKind === BH))
        };
      return (0, OH.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, OH.jsx)("thead", {
          children: (0, OH.jsxs)("tr", {
            children: [(0, OH.jsx)("th", {}), rH.map(((HH, BH) => (0, OH.jsx)("th", {
              className: CH()({
                Current: BH + 1 === hH,
                Next: BH === hH
              }),
              children: AH(`${bH}:loadoutTier`, {
                tier: (0, yH.T)(BH + 1)
              })
            }, BH)))]
          })
        }), (0, OH.jsx)("tbody", {
          children: SH.map((HH => {
            const BH = oB[HH];
            return (0, OH.jsxs)("tr", {
              children: [(0, OH.jsxs)("th", {
                scope: "row",
                children: [AH(`${bH}:${HH}`), BH && (0, OH.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: AH(BH)
                })]
              }), rH.map(((BH, LH) => {
                const AH = tH(LH, HH),
                  rH = LH > 0 ? tH(LH - 1, HH) : void 0,
                  SH = AH && rH ? AH.loadoutStatValue - rH.loadoutStatValue : 0,
                  zH = kB.has(HH) ? SH < 0 : SH > 0,
                  EH = LH === hH;
                return (0, OH.jsxs)("td", {
                  className: CH()({
                    Current: LH + 1 === hH,
                    Next: EH,
                    Gain: zH,
                    Owned: LH < hH
                  }),
                  children: [EH && zH && (0, OH.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: SH < 0 ? "\u25bc" : "\u25b2"
                  }), AH ? IB(AH) : "-"]
                }, LH)
              }))]
            }, HH)
          }))
        })]
      })
    }

    function lB(HH) {
      let {
        view: BH,
        controller: LH,
        slot: AH,
        option: rH
      } = HH;
      const {
        t: SH
      } = (0, XH.B)(), hH = BH.loadout, tH = rH.loadoutOptionOwnedTier, zH = rH.loadoutOptionTiers.length, CH = AH.loadoutSlotEquippedId === rH.loadoutOptionId, EH = tH < zH ? rH.loadoutOptionTiers[tH].loadoutTierCost : null, GH = null !== EH && BB(hH, EH), YH = rH.loadoutOptionId, QH = TB();
      return (0, OH.jsxs)(OH.Fragment, {
        children: [(0, OH.jsx)(cB, {
          icon: rH.loadoutOptionIcon,
          name: rH.loadoutOptionName,
          status: 0 === tH ? SH(`${bH}:loadoutLocked`) : zH > 1 ? SH(`${bH}:loadoutTier`, {
            tier: (0, yH.T)(tH)
          }) : null,
          locked: 0 === tH,
          equipped: CH
        }), (0, OH.jsx)("p", {
          className: "BoardDescription",
          children: rH.loadoutOptionDescription
        }), (0, OH.jsx)(fB, {
          option: rH
        }), (0, OH.jsxs)("div", {
          ref: QH("act", YH),
          className: "BoardActions",
          children: [null !== EH && (0, OH.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, OH.jsx)(mB, {
              cost: EH,
              loadout: hH
            }), (0, OH.jsx)(uH.u, {
              disabled: !GH || BH.pending,
              onClick: () => {
                LH.act(0 === tH ? "loadoutUnlock" : "loadoutUpgrade", YH)
              },
              children: 0 === tH ? SH(`${bH}:loadoutUnlock`) : SH(`${bH}:loadoutUpgrade`, {
                tier: (0, yH.T)(tH + 1)
              })
            })]
          }), null === EH && zH > 1 && (0, OH.jsx)("span", {
            className: "BoardHint",
            children: SH(`${bH}:loadoutMaxed`)
          }), tH > 0 && !CH && (0, OH.jsx)(uH.i, {
            disabled: BH.pending,
            onClick: () => {
              LH.act("loadoutEquip", YH)
            },
            children: SH(`${bH}:loadoutEquip`)
          })]
        })]
      })
    }

    function KB(HH) {
      let {
        view: BH,
        controller: LH,
        perk: AH
      } = HH;
      const {
        t: rH
      } = (0, XH.B)(), SH = BH.loadout, hH = rB(SH), tH = AH.loadoutPerkId, zH = TB();
      return (0, OH.jsxs)(OH.Fragment, {
        children: [(0, OH.jsx)(cB, {
          icon: AH.loadoutPerkIcon,
          name: AH.loadoutPerkName,
          status: AH.loadoutPerkOwned ? null : rH(`${bH}:loadoutLocked`),
          locked: !AH.loadoutPerkOwned,
          equipped: AH.loadoutPerkEquipped
        }), (0, OH.jsx)("p", {
          className: "BoardDescription",
          children: AH.loadoutPerkDescription
        }), (0, OH.jsxs)("div", {
          ref: zH("act", tH),
          className: "BoardActions",
          children: [!AH.loadoutPerkOwned && (0, OH.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, OH.jsx)(mB, {
              cost: AH.loadoutPerkCost,
              loadout: SH
            }), (0, OH.jsx)(uH.u, {
              disabled: !BB(SH, AH.loadoutPerkCost) || BH.pending,
              onClick: () => {
                LH.act("loadoutUnlock", tH)
              },
              children: rH(`${bH}:loadoutUnlock`)
            })]
          }), AH.loadoutPerkOwned && !AH.loadoutPerkEquipped && (0, OH.jsx)(uH.i, {
            disabled: hH || BH.pending,
            onClick: () => {
              LH.act("loadoutEquip", tH)
            },
            children: rH(`${bH}:loadoutEquip`)
          }), AH.loadoutPerkOwned && !AH.loadoutPerkEquipped && hH && (0, OH.jsx)("span", {
            className: "BoardHint",
            children: rH(`${bH}:loadoutSocketsFullHint`)
          }), AH.loadoutPerkEquipped && (0, OH.jsx)(uH.W, {
            disabled: BH.pending,
            onClick: () => {
              LH.act("loadoutUnequip", tH)
            },
            children: rH(`${bH}:loadoutUnequip`)
          })]
        })]
      })
    }

    function cB(HH) {
      let {
        icon: BH,
        name: LH,
        status: AH,
        locked: rH,
        equipped: SH
      } = HH;
      const {
        t: hH
      } = (0, XH.B)();
      return (0, OH.jsxs)(eH, {
        icon: (0, OH.jsx)(oH, {
          itemName: BH
        }),
        name: LH,
        children: [null !== AH && (0, OH.jsx)("span", {
          className: CH()("LoadoutStatusText", {
            Locked: rH
          }),
          children: AH
        }), SH && (0, OH.jsx)("span", {
          className: "BoardBadge",
          children: hH(`${bH}:loadoutEquippedBadge`)
        })]
      })
    }

    function eB(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const AH = BH.loadout;
      if ("loadoutPerks" === BH.slot) {
        const HH = AH.loadoutPerks.find((HH => HH.loadoutPerkId === BH.selectedId));
        return (0, OH.jsx)("section", {
          className: "BoardDetail",
          children: HH && (0, OH.jsx)(KB, {
            view: BH,
            controller: LH,
            perk: HH
          })
        })
      }
      const rH = AB(AH, BH.slot),
        SH = rH.loadoutSlotOptions.find((HH => HH.loadoutOptionId === BH.selectedId));
      return (0, OH.jsx)("section", {
        className: "BoardDetail",
        children: SH && (0, OH.jsx)(lB, {
          view: BH,
          controller: LH,
          slot: rH,
          option: SH
        })
      })
    }

    function qB(HH) {
      let {
        owned: BH,
        total: LH
      } = HH;
      return LH <= 1 ? null : (0, OH.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: LH
        }, ((HH, LH) => (0, OH.jsx)("span", {
          className: CH()("LoadoutPip", {
            Filled: LH < BH
          })
        }, LH)))
      })
    }

    function gB(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, XH.B)(), rH = BH.loadout, SH = TB();
      return (0, OH.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": AH(`${bH}:loadoutKit`),
        children: [rH.loadoutSlots.map((HH => {
          const rH = HH.loadoutSlotOptions.find((BH => BH.loadoutOptionId === HH.loadoutSlotEquippedId));
          return (0, OH.jsxs)("button", {
            ref: SH("section", HH.loadoutSlotKind),
            type: "button",
            className: CH()("LoadoutKitSlot", {
              Selected: BH.slot === HH.loadoutSlotKind
            }),
            onClick: () => {
              LH.selectSlot(HH.loadoutSlotKind)
            },
            children: [(0, OH.jsx)("span", {
              className: "LoadoutKitIcon",
              children: rH && (0, OH.jsx)(oH, {
                itemName: rH.loadoutOptionIcon
              })
            }), (0, OH.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, OH.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, OH.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: AH(xB[HH.loadoutSlotKind])
                }), rH && (0, OH.jsx)(qB, {
                  owned: rH.loadoutOptionOwnedTier,
                  total: rH.loadoutOptionTiers.length
                })]
              }), (0, OH.jsx)("span", {
                className: "LoadoutKitName",
                children: null === rH || void 0 === rH ? void 0 : rH.loadoutOptionName
              })]
            })]
          }, HH.loadoutSlotKind)
        })), (0, OH.jsx)(NB, {
          view: BH,
          controller: LH
        })]
      })
    }

    function NB(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, XH.B)(), rH = BH.loadout, SH = rH.loadoutPerks.filter((HH => HH.loadoutPerkEquipped)), hH = TB();
      return (0, OH.jsxs)("button", {
        ref: hH("section", "loadoutPerks"),
        type: "button",
        className: CH()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === BH.slot
        }),
        onClick: () => {
          LH.selectSlot("loadoutPerks")
        },
        children: [(0, OH.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, OH.jsx)("span", {
            className: "LoadoutKitLabel",
            children: AH(xB.loadoutPerks)
          }), (0, OH.jsx)("span", {
            className: "LoadoutPerkCount",
            children: AH(`${bH}:loadoutPerkCount`, {
              equipped: String(SH.length),
              max: String(rH.loadoutMaxPerks)
            })
          })]
        }), (0, OH.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: rH.loadoutMaxPerks
          }, ((HH, BH) => {
            const LH = SH[BH];
            return (0, OH.jsxs)("span", {
              className: CH()("LoadoutSocket", {
                Filled: LH,
                Empty: !LH
              }),
              children: [(0, OH.jsx)("span", {
                className: "LoadoutSocketWell",
                children: LH && (0, OH.jsx)(oH, {
                  itemName: LH.loadoutPerkIcon
                })
              }), (0, OH.jsx)("span", {
                className: "LoadoutSocketName",
                children: LH ? LH.loadoutPerkName : AH(`${bH}:loadoutPerkSocketEmpty`)
              })]
            }, BH)
          }))
        })]
      })
    }

    function RB(HH) {
      let {
        icon: BH,
        name: LH,
        selected: AH,
        equipped: rH,
        locked: SH,
        ownedTier: hH,
        tiers: tH,
        buttonRef: zH,
        onSelect: CH
      } = HH;
      const {
        t: EH
      } = (0, XH.B)();
      return (0, OH.jsxs)(cH, {
        icon: (0, OH.jsx)(oH, {
          itemName: BH
        }),
        name: LH,
        selected: AH,
        locked: SH,
        buttonRef: zH,
        onSelect: CH,
        children: [rH && (0, OH.jsx)("span", {
          className: "BoardBadge",
          children: EH(`${bH}:loadoutEquippedBadge`)
        }), SH && (0, OH.jsx)("span", {
          className: "BoardBadge Muted",
          children: EH(`${bH}:loadoutLocked`)
        }), !SH && (0, OH.jsx)(qB, {
          owned: hH,
          total: tH
        })]
      })
    }

    function jB(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const AH = BH.loadout,
        rH = TB();
      if ("loadoutPerks" === BH.slot) return (0, OH.jsx)("div", {
        className: "BoardTiles",
        children: AH.loadoutPerks.map((HH => (0, OH.jsx)(RB, {
          icon: HH.loadoutPerkIcon,
          name: HH.loadoutPerkName,
          selected: BH.selectedId === HH.loadoutPerkId,
          equipped: HH.loadoutPerkEquipped,
          locked: !HH.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: rH("XY", HH.loadoutPerkId),
          onSelect: () => {
            LH.select(HH.loadoutPerkId)
          }
        }, HH.loadoutPerkId)))
      });
      const SH = AB(AH, BH.slot);
      return (0, OH.jsx)("div", {
        className: "BoardTiles",
        children: SH.loadoutSlotOptions.map((HH => (0, OH.jsx)(RB, {
          icon: HH.loadoutOptionIcon,
          name: HH.loadoutOptionName,
          selected: BH.selectedId === HH.loadoutOptionId,
          equipped: SH.loadoutSlotEquippedId === HH.loadoutOptionId,
          locked: 0 === HH.loadoutOptionOwnedTier,
          ownedTier: HH.loadoutOptionOwnedTier,
          tiers: HH.loadoutOptionTiers.length,
          buttonRef: rH("XY", HH.loadoutOptionId),
          onSelect: () => {
            LH.select(HH.loadoutOptionId)
          }
        }, HH.loadoutOptionId)))
      })
    }

    function nB(HH) {
      let {
        loadout: BH
      } = HH;
      return (0, OH.jsx)(qH, {
        coins: BH.loadoutCoins,
        children: BH.loadoutHeldParts.filter((HH => HH.loadoutHeldPartAmount > 0)).map((HH => (0, OH.jsx)(fH, {
          itemName: HH.loadoutHeldPartItem,
          amount: HH.loadoutHeldPartAmount
        }, HH.loadoutHeldPartCurrency)))
      })
    }

    function FB(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, EH.e)(GB, BH.getSnapshot()),
        {
          t: AH
        } = (0, XH.B)();
      if (null === LH.loadout) return null;
      const rH = LH.notice;
      return (0, OH.jsx)(OB, {
        view: LH,
        onDismiss: BH.dismiss,
        children: (0, OH.jsxs)(mH, {
          open: LH.open,
          onDismiss: BH.dismiss,
          title: AH(`${bH}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, OH.jsx)(nB, {
            loadout: LH.loadout
          }),
          statusRefused: null === rH || void 0 === rH ? void 0 : rH.loadoutNoticeRefused,
          status: (0, OH.jsxs)(OH.Fragment, {
            children: [(0, OH.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: AH(`${bH}:loadoutRadioBadge`)
            }), null !== rH && AH(`${bH}:${rH.loadoutNoticeKey}`, {
              name: rH.loadoutNoticeName,
              tier: (0, yH.T)(rH.loadoutNoticeTier),
              max: String(LH.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, OH.jsx)(gB, {
            view: LH,
            controller: BH
          }), (0, OH.jsx)(jB, {
            view: LH,
            controller: BH
          }), (0, OH.jsx)(eB, {
            view: LH,
            controller: BH
          })]
        })
      })
    }

    function DB(HH, BH, LH) {
      const AH = HH.locatorEntries.find((HH => HH.locatorEntryId === LH));
      if (!AH) return null;
      const rH = AH.locatorEntryName;
      if ("locatorDisarm" === BH) return AH.locatorEntryArmed ? {
        board: wB(HH, null),
        notice: ZB("locatorNoticeDisarmed", rH)
      } : null;
      if ("locatorArm" === BH) return AH.locatorEntryOwned && !AH.locatorEntryArmed ? {
        board: wB(HH, LH),
        notice: ZB("locatorNoticeArmed", rH)
      } : null;
      if (AH.locatorEntryOwned || HH.locatorCoins < AH.locatorEntryPrice) return null;
      const SH = wB({
        ...HH,
        locatorCoins: HH.locatorCoins - AH.locatorEntryPrice
      }, LH);
      return {
        board: {
          ...SH,
          locatorEntries: SH.locatorEntries.map((HH => HH.locatorEntryId === LH ? {
            ...HH,
            locatorEntryOwned: !0
          } : HH))
        },
        notice: ZB("locatorNoticeBought", rH)
      }
    }

    function wB(HH, BH) {
      return {
        ...HH,
        locatorEntries: HH.locatorEntries.map((HH => {
          const LH = HH.locatorEntryId === BH;
          return HH.locatorEntryArmed === LH ? HH : {
            ...HH,
            locatorEntryArmed: LH
          }
        }))
      }
    }

    function ZB(HH, BH) {
      return {
        locatorNoticeKey: HH,
        locatorNoticeRefused: !1,
        locatorNoticeName: BH
      }
    }
    const dB = "containmentLocatorView";
    class aB extends HB {
      constructor(HH, BH, LH, AH) {
        super(HH, BH, LH, AH, "locator", DB), this.snapshot = this.buildSnapshot()
      }
      messageOpens(HH) {
        return HH.locatorMessageOpens
      }
      messageNotice(HH) {
        return HH.locatorNotice
      }
      openingSelection(HH) {
        var BH;
        const LH = HH.locatorEntries;
        return (null !== (BH = LH.find((HH => HH.locatorEntryArmed))) && void 0 !== BH ? BH : LH[0]).locatorEntryId
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
    const sB = {
        locatorContained: `${bH}:locatorFlavourContained`,
        locatorEncountered: `${bH}:locatorFlavourEncountered`,
        locatorUnseen: `${bH}:locatorFlavourUnseen`
      },
      JB = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${bH}:locatorAttunedNormal`,
        codexHardOnly: `${bH}:locatorAttunedHard`
      };

    function iB() {
      return (0, OH.jsx)(OH.Fragment, {
        children: Array.from({
          length: 5
        }, ((HH, BH) => (0, OH.jsx)("span", {
          className: "LocatorFly",
          children: (0, OH.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, BH)))
      })
    }

    function pB(HH) {
      let {
        entry: BH
      } = HH;
      const {
        t: LH
      } = (0, XH.B)();
      return BH.locatorEntryArmed ? (0, OH.jsx)("span", {
        className: "BoardBadge Armed",
        children: LH(`${bH}:locatorArmedBadge`)
      }) : BH.locatorEntryOwned ? (0, OH.jsx)("span", {
        className: "BoardBadge",
        children: LH(`${bH}:locatorOwnedBadge`)
      }) : null
    }

    function yB(HH) {
      let {
        entry: BH,
        coins: LH,
        inTile: AH = !1
      } = HH;
      return (0, OH.jsx)(fH, {
        itemName: kH,
        amount: BH.locatorEntryPrice,
        LX: LH,
        inTile: AH
      })
    }

    function HL(HH) {
      let {
        view: BH,
        controller: LH,
        entry: AH
      } = HH;
      const {
        t: rH
      } = (0, XH.B)(), SH = AH.locatorEntryId, hH = BH.locators.locatorEntries.find((HH => HH.locatorEntryArmed && HH !== AH));
      return (0, OH.jsxs)("div", {
        className: "BoardActions",
        children: [AH.locatorEntryArmed && (0, OH.jsx)(uH.W, {
          disabled: BH.pending,
          onClick: () => {
            LH.act("locatorDisarm", SH)
          },
          children: rH(`${bH}:locatorDisarm`)
        }), AH.locatorEntryOwned && !AH.locatorEntryArmed && (0, OH.jsx)(uH.i, {
          disabled: BH.pending,
          onClick: () => {
            LH.act("locatorArm", SH)
          },
          children: rH(`${bH}:locatorArm`)
        }), !AH.locatorEntryOwned && (0, OH.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, OH.jsx)(yB, {
            entry: AH,
            coins: BH.locators.locatorCoins
          }), (0, OH.jsx)(uH.u, {
            disabled: BH.locators.locatorCoins < AH.locatorEntryPrice || BH.pending,
            onClick: () => {
              LH.act("locatorBuy", SH)
            },
            children: rH(`${bH}:locatorBuy`)
          })]
        }), hH && !AH.locatorEntryArmed && (0, OH.jsx)("span", {
          className: "BoardHint",
          children: rH(`${bH}:locatorReplacesHint`, {
            name: hH.locatorEntryName
          })
        })]
      })
    }

    function BL(HH) {
      let {
        entry: BH
      } = HH;
      return "locatorUnseen" === BH.locatorEntryStanding ? (0, OH.jsx)(oH, {
        itemName: "Compass"
      }) : (0, OH.jsx)(IH, {
        anomalyId: BH.locatorEntryId,
        caught: "locatorContained" === BH.locatorEntryStanding
      })
    }

    function LL(HH) {
      let {
        view: BH,
        controller: LH,
        entry: AH
      } = HH;
      const {
        t: rH
      } = (0, XH.B)(), SH = JB[AH.locatorEntryDifficulty];
      return (0, OH.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, OH.jsxs)("div", {
          className: CH()("LocatorLabel", {
            Armed: AH.locatorEntryArmed
          }),
          children: [(0, OH.jsx)(eH, {
            icon: (0, OH.jsx)(BL, {
              entry: AH
            }),
            name: rH(`${bH}:locatorName`, {
              name: AH.locatorEntryName
            }),
            children: (0, OH.jsx)(pB, {
              entry: AH
            })
          }), (0, OH.jsx)("p", {
            className: "BoardDescription",
            children: rH(AH.locatorEntryArmed ? `${bH}:locatorFlavourArmed` : sB[AH.locatorEntryStanding])
          }), null !== SH && (0, OH.jsx)("p", {
            className: "LocatorAttuned",
            children: rH(SH)
          }), (0, OH.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: rH(`${bH}:locatorUsage`)
          })]
        }), (0, OH.jsx)(HL, {
          view: BH,
          controller: LH,
          entry: AH
        })]
      })
    }

    function AL(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, EH.e)(dB, BH.getSnapshot()),
        {
          t: AH
        } = (0, XH.B)(),
        rH = LH.locators;
      if (null === rH) return null;
      const SH = rH.locatorEntries.find((HH => HH.locatorEntryId === LH.selectedId)),
        hH = LH.notice;
      return (0, OH.jsxs)(mH, {
        open: LH.open,
        onDismiss: BH.dismiss,
        title: AH(`${bH}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, OH.jsx)(iB, {}),
        headerExtra: (0, OH.jsx)(qH, {
          coins: rH.locatorCoins
        }),
        statusRefused: null === hH || void 0 === hH ? void 0 : hH.locatorNoticeRefused,
        status: (0, OH.jsxs)(OH.Fragment, {
          children: [(0, OH.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: AH(`${bH}:locatorKeeperName`)
          }), null !== hH && AH(`${bH}:${hH.locatorNoticeKey}`, {
            name: hH.locatorNoticeName
          })]
        }),
        children: [(0, OH.jsx)("div", {
          className: "BoardTiles",
          children: rH.locatorEntries.map((HH => (0, OH.jsxs)(cH, {
            icon: (0, OH.jsx)(BL, {
              entry: HH
            }),
            name: HH.locatorEntryName,
            selected: HH === SH,
            locked: !1,
            className: CH()("LocatorTag", {
              Armed: HH.locatorEntryArmed
            }),
            onSelect: () => {
              BH.select(HH.locatorEntryId)
            },
            children: [(0, OH.jsx)(pB, {
              entry: HH
            }), !HH.locatorEntryOwned && (0, OH.jsx)(yB, {
              entry: HH,
              coins: rH.locatorCoins,
              inTile: !0
            })]
          }, HH.locatorEntryId)))
        }), (0, OH.jsx)(LL, {
          view: LH,
          controller: BH,
          entry: SH
        })]
      })
    }

    function rL(HH) {
      let {
        loadout: BH,
        codex: LH,
        locator: AH
      } = HH;
      return (0, OH.jsxs)(OH.Fragment, {
        children: [(0, OH.jsx)(FB, {
          controller: BH
        }), (0, OH.jsx)(pH, {
          controller: LH
        }), (0, OH.jsx)(AL, {
          controller: AH
        })]
      })
    }
    var SL = LH(39461);
    class hL {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = HH, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new SL.c({
          spacingMs: 0,
          now: BH
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(HH, BH) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, BH(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(HH), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const HH of this.listeners) HH()
      }
    }
    var tL = LH(39451);
    const zL = new Map([
      ["npc_general", QB],
      ["npc_tentacle_guy", tL]
    ]);

    function CL(HH) {
      const BH = zL.get(HH);
      if (void 0 === BH) return null;
      const LH = document.createElement("img");
      return LH.src = BH, LH.alt = "", LH.draggable = !1, LH.style.imageRendering = "pixelated", LH
    }
    const EL = function() {
      let HH, BH = !1,
        LH = null,
        zH = null;
      const CH = [],
        EH = HH => {
          for (const BH of CH) BH !== HH && BH.close();
          (0, tH.t)()
        },
        XH = HH => {
          HH && (0, tH.j)()
        },
        GH = new hL((BH => {
          HH.sendCommand(BH)
        })),
        YH = new YB((HH => {
          hH.k.AX(GB, HH, !0)
        }), EH, XH, GH),
        uH = new RH((HH => {
          hH.k.AX(NH, HH, !0)
        }), EH, XH),
        QH = new aB((HH => {
          hH.k.AX(dB, HH, !0)
        }), EH, XH, GH);
      CH.push(YH, uH, QH);
      return {
        onCreate: BH => {
          HH = BH, LH = (0, tH.v)(null, {
            content: (0, AH.createElement)(rL, {
              loadout: YH,
              codex: uH,
              locator: QH
            }),
            onClose: () => {
              for (const HH of CH) HH.close()
            }
          }), zH = (0, SH.f)(CL)
        },
        onReceivedMessageFromServer: (HH, BH) => {
          "containmentLoadout" === HH ? YH.kX(BH) : "containmentLoadoutClose" === HH ? YH.isOpen() && (YH.close(), (0, tH.g)()) : "containmentCodex" === HH ? uH.kX(BH) : "containmentLocator" === HH && QH.kX(BH)
        },
        IX: () => {
          BH || rH.c.get("loadingOverlayVisible") || (BH = !0, HH.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var HH, BH;
          null === (HH = LH) || void 0 === HH || HH(), LH = null, null === (BH = zH) || void 0 === BH || BH(), zH = null;
          for (const LH of CH) LH.dispose();
          GH.dispose()
        }
      }
    }
  },
  40273: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40279: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40285: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40290: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40296: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40304: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40308: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40312: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40318: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/doom-warlord-uncaught.b25b11d54326d386a901.webp"
  },
  40324: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/doom-warlord.d9ef07d4167ff931b0f0.webp"
  },
  40331: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40337: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40345: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40352: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40360: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40365: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40373: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40377: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  40383: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  40388: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  40392: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  40401: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  39451: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);