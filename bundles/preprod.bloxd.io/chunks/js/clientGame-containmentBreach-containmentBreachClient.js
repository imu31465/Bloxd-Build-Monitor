export const id = 15;
export const ids = [15];
export const modules = {
  40162: (UU, XU, zU) => {
    var cU = {
      "./breach-zero-uncaught.webp": 40164,
      "./breach-zero.webp": 40173,
      "./brood-father-uncaught.webp": 40177,
      "./brood-father.webp": 40184,
      "./carousel-uncaught.webp": 40190,
      "./carousel.webp": 40193,
      "./deadlock-uncaught.webp": 40196,
      "./deadlock.webp": 40202,
      "./frost-revenant-uncaught.webp": 40204,
      "./frost-revenant.webp": 40211,
      "./hollow-choir-uncaught.webp": 40218,
      "./hollow-choir.webp": 40223,
      "./magma-warden-uncaught.webp": 40226,
      "./magma-warden.webp": 40235,
      "./patient-zero-uncaught.webp": 40237,
      "./patient-zero.webp": 40241,
      "./siege-engine-uncaught.webp": 40243,
      "./siege-engine.webp": 40245,
      "./warp-stalker-uncaught.webp": 40252,
      "./warp-stalker.webp": 40255
    };

    function yU(UU) {
      var XU = QU(UU);
      return zU(XU)
    }

    function QU(UU) {
      if (!zU.o(cU, UU)) {
        var XU = new Error("Cannot find module '" + UU + "'");
        throw XU.code = "MODULE_NOT_FOUND", XU
      }
      return cU[UU]
    }
    yU.keys = function() {
      return Object.keys(cU)
    }, yU.resolve = QU, UU.exports = yU, yU.id = 40162
  },
  39374: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    const cU = 4,
      yU = 12e3,
      QU = 1e3;
    class AU {
      constructor() {
        let {
          limit: UU = cU,
          windowMs: XU = yU,
          spacingMs: zU = QU,
          now: AU = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = UU, this.windowMs = XU, this.spacingMs = zU, this.now = AU
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const UU of this.priority) UU.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const UU = this.now();
        this.sent.push(UU), this.lastSentAt = UU, this.schedule(), this.notify()
      }
      addPriority(UU) {
        return this.priority.add(UU), () => {
          this.priority.delete(UU)
        }
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const UU of this.priority)
          if (UU.waiting()) return !0;
        return !1
      }
      prune() {
        const UU = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= UU;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const UU = this.now(),
          XU = this.lastSentAt + this.spacingMs,
          zU = Math.min(XU > UU ? XU : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        zU !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, zU - UU)))
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  39324: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      constructor(UU, XU, zU) {
        this.UY = UU, this.beforeOpen = XU, this.afterClose = zU, this.open = !1, this.kp = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.kp && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(UU) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(UU)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.kp = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.kp || (this.snapshot = this.buildSnapshot(), this.UY(this.snapshot))
      }
    }
  },
  40158: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => Ez
    });
    var cU = zU(61);
    var yU = zU(27),
      QU = zU(1989),
      AU = zU(31),
      FU = zU(37325),
      oU = zU(1106),
      DU = zU.n(oU),
      EU = zU(1492),
      YU = zU(1193),
      NU = zU(4968),
      IU = zU(1408),
      pU = zU(1494),
      aU = zU(1993),
      tU = zU(1420),
      gU = zU(1978),
      kU = zU(2047),
      GU = zU(220);
    const BU = zU(40162),
      ZU = Object.fromEntries(BU.keys().map((UU => [UU.replace(/^\.\/(.*)\.webp$/, "$1"), BU(UU)]))),
      RU = new Set;

    function PU(UU, XU) {
      const zU = XU ? UU : `${UU}-uncaught`,
        cU = (0, GU.b)(ZU, zU);
      return void 0 !== cU || RU.has(zU) || (RU.add(zU), console.warn(`Containment Breach has no mugshot ${zU}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), cU
    }
    var WU = zU(1305);
    const dU = "containmentBreach",
      LU = "Gold Coin";

    function eU(UU) {
      let {
        open: XU,
        onDismiss: zU,
        title: cU,
        className: yU,
        decor: QU,
        headerExtra: AU,
        status: FU,
        statusRefused: oU = !1,
        children: EU
      } = UU;
      const YU = `${yU}Title`;
      return (0, WU.jsx)(NU.c, {
        show: XU,
        close: zU,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, WU.jsxs)("section", {
          className: DU()("ContainmentBoardPanel", yU),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": YU,
          children: [QU && (0, WU.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: QU
          }), (0, WU.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, WU.jsx)("h2", {
              id: YU,
              className: "VisuallyHidden",
              children: cU
            }), AU, (0, WU.jsx)(pU.k, {
              onClick: zU
            })]
          }), (0, WU.jsx)("div", {
            className: "BoardBody",
            children: EU
          }), void 0 !== FU && (0, WU.jsx)("footer", {
            className: DU()("BoardStatus", {
              Refused: oU
            }),
            children: FU
          })]
        })
      })
    }

    function CU(UU) {
      let {
        itemName: XU
      } = UU;
      return (0, WU.jsx)(aU.c, {
        itemName: XU,
        amount: 0
      })
    }

    function wU(UU) {
      let {
        anomalyId: XU,
        caught: zU
      } = UU;
      const yU = (0, cU.useRef)(null);
      return (0, IU.b)(yU, !zU), (0, WU.jsx)("span", {
        ref: yU,
        className: DU()("BoardMugshot", {
          Uncaught: !zU
        }),
        children: (0, WU.jsx)("img", {
          src: PU(XU, zU),
          alt: "",
          draggable: !1
        })
      })
    }

    function qU(UU) {
      let {
        itemName: XU,
        amount: zU,
        uD: cU,
        inTile: yU = !1
      } = UU;
      return (0, WU.jsx)(tU.d, {
        delayShow: 200,
        hoverOnly: yU,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, WU.jsx)(SU, {
          itemName: XU,
          amount: zU,
          uD: cU
        }),
        children: (0, WU.jsxs)("span", {
          className: DU()("BoardChip", {
            Short: void 0 !== cU && cU < zU
          }),
          children: [(0, WU.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, WU.jsx)(CU, {
              itemName: XU
            })
          }), zU.toLocaleString()]
        })
      })
    }
    const OU = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function SU(UU) {
      var XU;
      let {
        itemName: zU,
        amount: cU,
        uD: yU
      } = UU;
      const {
        t: QU
      } = (0, YU.I)(), AU = (0, kU.e)("itemInfo", (UU => UU[zU])), {
        lore: FU,
        droppedBy: oU
      } = function(UU) {
        if ("string" !== typeof UU) return {
          lore: UU,
          droppedBy: null
        };
        const XU = OU.exec(UU);
        return null === XU ? {
          lore: UU,
          droppedBy: null
        } : {
          lore: "" === XU[1] ? void 0 : XU[1],
          droppedBy: XU[2]
        }
      }(null === AU || void 0 === AU ? void 0 : AU.description);
      return (0, WU.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, WU.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, WU.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, WU.jsx)(CU, {
              itemName: zU
            })
          }), (0, WU.jsx)(gU.d, {
            text: null !== (XU = null === AU || void 0 === AU ? void 0 : AU.displayName) && void 0 !== XU ? XU : zU,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== FU || null !== oU) && (0, WU.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== FU && (0, WU.jsx)(gU.d, {
            text: FU,
            className: "BoardChipTooltipDescription"
          }), null !== oU && (0, WU.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, WU.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: QU(`${dU}:chipDroppedBy`)
            }), oU]
          })]
        }), void 0 !== yU && (0, WU.jsxs)("div", {
          className: DU()("BoardChipTooltipHeld", {
            Short: yU < cU
          }),
          children: [(0, WU.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: QU(`${dU}:chipYouHave`)
          }), (0, WU.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, WU.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: yU.toLocaleString()
            }), ` / ${cU.toLocaleString()}`]
          }), (0, WU.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, WU.jsx)("span", {
              style: {
                width: (cU > 0 ? 100 * Math.min(1, yU / cU) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function rU(UU) {
      let {
        icon: XU,
        name: zU,
        selected: cU,
        locked: yU,
        className: QU,
        buttonRef: AU,
        onSelect: FU,
        children: oU
      } = UU;
      return (0, WU.jsxs)("button", {
        ref: AU,
        type: "button",
        className: DU()("BoardTile", QU, {
          Selected: cU,
          Locked: yU
        }),
        onClick: FU,
        children: [(0, WU.jsx)("span", {
          className: "BoardTileIcon",
          children: XU
        }), (0, WU.jsx)("span", {
          className: "BoardTileName",
          children: zU
        }), oU]
      })
    }

    function uU(UU) {
      let {
        icon: XU,
        name: zU,
        children: cU
      } = UU;
      return (0, WU.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, WU.jsx)("span", {
          className: "BoardDetailIcon",
          children: XU
        }), (0, WU.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, WU.jsx)("h3", {
            children: zU
          }), (0, WU.jsx)("span", {
            className: "BoardDetailStatus",
            children: cU
          })]
        })]
      })
    }

    function fU(UU) {
      let {
        coins: XU,
        children: zU
      } = UU;
      return (0, WU.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, WU.jsx)(qU, {
          itemName: LU,
          amount: XU
        }), zU]
      })
    }
    var iU = zU(39324);
    const HU = "containmentCodexView";
    class MU extends iU.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = UU => {
          this.selectedId = UU, this.emit()
        }
      }
      PY(UU) {
        this.entries = UU.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const vU = {
        codexAnyDifficulty: `${dU}:codexNeedsAny`,
        codexNormalOnly: `${dU}:codexNeedsNormal`,
        codexHardOnly: `${dU}:codexNeedsHard`
      },
      VU = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      sU = {
        codexContained: `${dU}:codexContainedBadge`,
        codexEncountered: `${dU}:codexEncounteredBadge`,
        codexUnidentified: `${dU}:codexUnidentifiedBadge`
      },
      nU = ["94%", "81%", "88%", "46%", "72%"];

    function mU(UU) {
      let {
        entry: XU
      } = UU;
      const {
        t: zU
      } = (0, YU.I)();
      return (0, WU.jsx)("span", {
        className: DU()("BoardBadge", VU[XU.codexEntryState]),
        children: zU(sU[XU.codexEntryState])
      })
    }

    function lU(UU) {
      const {
        t: XU
      } = (0, YU.I)();
      return "codexUnidentified" === UU.codexEntryState ? XU(`${dU}:codexUnidentifiedName`) : UU.codexEntryName
    }

    function xU(UU) {
      let {
        entry: XU
      } = UU;
      return "codexUnidentified" === XU.codexEntryState ? (0, WU.jsx)(CU, {
        itemName: "Book"
      }) : (0, WU.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, WU.jsx)(wU, {
          anomalyId: XU.codexEntryId,
          caught: "codexContained" === XU.codexEntryState
        }), (0, WU.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function JU(UU) {
      let {
        entry: XU,
        selected: zU,
        onSelect: cU
      } = UU;
      const yU = "codexUnidentified" === XU.codexEntryState;
      return (0, WU.jsxs)(rU, {
        icon: (0, WU.jsx)(xU, {
          entry: XU
        }),
        name: lU(XU),
        selected: zU,
        locked: yU,
        className: DU()("CodexFolder", VU[XU.codexEntryState]),
        onSelect: () => {
          cU(XU.codexEntryId)
        },
        children: [!yU && (0, WU.jsx)(mU, {
          entry: XU
        }), yU && (0, WU.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function jU(UU) {
      let {
        count: XU
      } = UU;
      const zU = [];
      for (let cU = Math.min(XU, 25); cU > 0; cU -= 5) zU.push(Math.min(cU, 5));
      return (0, WU.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: zU.map(((UU, XU) => (0, WU.jsx)("span", {
          className: DU()("CodexTallyGroup", {
            Gate: 5 === UU
          }),
          children: Array.from({
            length: Math.min(UU, 4)
          }, ((UU, XU) => (0, WU.jsx)("span", {
            className: "CodexTallyMark"
          }, XU)))
        }, XU)))
      })
    }

    function KU(UU) {
      let {
        contained: XU,
        total: zU
      } = UU;
      const {
        t: cU
      } = (0, YU.I)();
      return (0, WU.jsxs)("div", {
        className: "CodexProgress",
        children: [cU(`${dU}:codexProgress`, {
          contained: String(XU),
          total: String(zU)
        }), (0, WU.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, WU.jsx)("span", {
            style: {
              width: XU / zU * 100 + "%"
            }
          })
        })]
      })
    }

    function bU(UU) {
      let {
        entry: XU,
        fileNumber: zU
      } = UU;
      const {
        t: cU
      } = (0, YU.I)(), yU = "codexContained" === XU.codexEntryState;
      return (0, WU.jsx)("section", {
        className: "BoardDetail",
        children: (0, WU.jsxs)("article", {
          className: DU()("CodexDossier", VU[XU.codexEntryState]),
          children: [(0, WU.jsx)("span", {
            className: "CodexFileNumber",
            children: cU(`${dU}:codexFileNumber`, {
              number: String(zU).padStart(3, "0")
            })
          }), (0, WU.jsx)(uU, {
            icon: (0, WU.jsx)(xU, {
              entry: XU
            }),
            name: lU(XU),
            children: (0, WU.jsx)(mU, {
              entry: XU
            })
          }), yU && (0, WU.jsxs)(WU.Fragment, {
            children: [(0, WU.jsx)("p", {
              className: "BoardDescription",
              children: XU.codexEntryLore
            }), (0, WU.jsxs)("p", {
              className: "CodexTally",
              children: [cU(`${dU}:codexContainments`, {
                count: String(XU.codexEntryContainedCount)
              }), (0, WU.jsx)(jU, {
                count: XU.codexEntryContainedCount
              })]
            }), (0, WU.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: cU(`${dU}:codexContainedBadge`)
            })]
          }), !yU && (0, WU.jsxs)(WU.Fragment, {
            children: [(0, WU.jsxs)("div", {
              className: "CodexRedaction",
              children: [nU.map((UU => (0, WU.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: UU
                }
              }, UU))), (0, WU.jsx)("p", {
                className: "CodexRedacted",
                children: cU(`${dU}:codexRedacted`)
              })]
            }), "" !== XU.codexEntryHint && (0, WU.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, WU.jsx)("h4", {
                children: cU(`${dU}:codexHintLabel`)
              }), (0, WU.jsx)("p", {
                children: XU.codexEntryHint
              })]
            }), (0, WU.jsx)("p", {
              className: "CodexClearance",
              children: cU(vU[XU.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function TU(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, EU.j)(HU, XU.getSnapshot()),
        {
          t: cU
        } = (0, YU.I)();
      if (0 === zU.entries.length) return null;
      const yU = zU.entries.find((UU => UU.codexEntryId === zU.selectedId)),
        QU = zU.entries.filter((UU => "codexContained" === UU.codexEntryState)).length,
        AU = zU.entries.map((UU => UU.codexEntryId)).sort().indexOf(yU.codexEntryId) + 1;
      return (0, WU.jsxs)(eU, {
        open: zU.open,
        onDismiss: XU.dismiss,
        title: cU(`${dU}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, WU.jsx)(KU, {
          contained: QU,
          total: zU.entries.length
        }),
        children: [(0, WU.jsx)("div", {
          className: "BoardTiles",
          children: zU.entries.map((UU => (0, WU.jsx)(JU, {
            entry: UU,
            selected: UU === yU,
            onSelect: XU.select
          }, UU.codexEntryId)))
        }), (0, WU.jsx)(bU, {
          entry: yU,
          fileNumber: AU
        })]
      })
    }
    var hU = zU(344);
    class UX extends iU.b {
      constructor(UU, XU, zU, cU, yU, QU) {
        super(UU, XU, zU), this.pacer = cU, this.command = yU, this.predict = QU, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = UU => {
          this.selectedId = UU, this.emit()
        }, this.act = (UU, XU) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${UU} ${XU}`, this.rollBack)) return;
          const zU = this.predict(this.board, UU, XU);
          null !== zU && (this.board = zU.board, this.notice = zU.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = cU.subscribe((() => {
          this.emit()
        }))
      }
      PY(UU) {
        const XU = this.messageOpens(UU);
        if (XU && this.open) return this.board === this.confirmed && (this.board = UU), this.confirmed = UU, void this.emit();
        if (this.board = UU, this.confirmed = UU, this.pacer.onReply(), XU) return this.notice = null, this.selectedId = this.openingSelection(UU), void this.show();
        const zU = this.messageNotice(UU);
        null !== zU && (this.notice = zU), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function XX(UU, XU) {
      return UU.loadoutCoins >= XU.loadoutCostCoins && XU.loadoutCostParts.every((XU => function(UU, XU) {
        return zX(UU, XU).loadoutHeldPartAmount
      }(UU, XU.loadoutPartCurrency) >= XU.loadoutPartAmount))
    }

    function zX(UU, XU) {
      return UU.loadoutHeldParts.find((UU => UU.loadoutHeldPartCurrency === XU))
    }

    function cX(UU, XU) {
      return UU.loadoutSlots.find((UU => UU.loadoutSlotKind === XU))
    }

    function yX(UU) {
      return UU.loadoutPerks.filter((UU => UU.loadoutPerkEquipped)).length >= UU.loadoutMaxPerks
    }

    function QX(UU, XU, zU) {
      for (const yU of UU.loadoutSlots) {
        const cU = yU.loadoutSlotOptions.find((UU => UU.loadoutOptionId === zU));
        if (cU) return "loadoutArmour" === yU.loadoutSlotKind ? FX(UU, yU, cU, XU) : AX(UU, yU, cU, XU)
      }
      const cU = UU.loadoutPerks.find((UU => UU.loadoutPerkId === zU));
      return cU ? function(UU, XU, zU) {
        const cU = XU.loadoutPerkOwned,
          yU = XU.loadoutPerkEquipped,
          QU = XU.loadoutPerkName,
          AU = yX(UU);
        if ("loadoutUnlock" === zU) {
          if (cU || !XX(UU, XU.loadoutPerkCost)) return null;
          const zU = {
            ...XU,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !AU
          };
          return {
            board: DX(EX(UU, XU.loadoutPerkCost), zU),
            notice: YX(AU ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", QU)
          }
        }
        if ("loadoutUpgrade" === zU || !cU || "loadoutEquip" === zU === yU || !yU && AU) return null;
        return {
          board: DX(UU, {
            ...XU,
            loadoutPerkEquipped: !yU
          }),
          notice: YX(yU ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", QU)
        }
      }(UU, cU, XU) : null
    }

    function AX(UU, XU, zU, cU) {
      const yU = zU.loadoutOptionOwnedTier,
        QU = zU.loadoutOptionName;
      if ("loadoutEquip" === cU) return 0 === yU ? null : {
        board: oX(UU, XU, zU.loadoutOptionId, null),
        notice: YX("loadoutNoticeEquipped", QU)
      };
      const AU = "loadoutUnlock" === cU;
      if (AU && 0 !== yU || "loadoutUpgrade" === cU && (0 === yU || yU >= zU.loadoutOptionTiers.length) || "loadoutUnequip" === cU) return null;
      const FU = zU.loadoutOptionTiers[yU].loadoutTierCost;
      if (!XX(UU, FU)) return null;
      const oU = {
          ...zU,
          loadoutOptionOwnedTier: yU + 1
        },
        DU = AU ? zU.loadoutOptionId : XU.loadoutSlotEquippedId;
      return {
        board: oX(EX(UU, FU), XU, DU, oU),
        notice: AU ? YX("loadoutNoticeUnlocked", QU) : YX("loadoutNoticeUpgraded", QU, yU + 1)
      }
    }

    function FX(UU, XU, zU, cU) {
      const yU = zU.loadoutOptionOwnedTier > 0,
        QU = zU.loadoutOptionName;
      if ("loadoutEquip" === cU && yU) return {
        board: oX(UU, XU, zU.loadoutOptionId, null),
        notice: YX("loadoutNoticeEquipped", QU)
      };
      const AU = zU.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== cU || yU || !XX(UU, AU) ? null : {
        board: oX(EX(UU, AU), XU, zU.loadoutOptionId, {
          ...zU,
          loadoutOptionOwnedTier: 1
        }),
        notice: YX("loadoutNoticeUnlocked", QU)
      }
    }

    function oX(UU, XU, zU, cU) {
      const yU = {
        ...XU,
        loadoutSlotEquippedId: zU,
        loadoutSlotOptions: XU.loadoutSlotOptions.map((UU => null !== cU && UU.loadoutOptionId === cU.loadoutOptionId ? cU : UU))
      };
      return {
        ...UU,
        loadoutSlots: UU.loadoutSlots.map((UU => UU === XU ? yU : UU))
      }
    }

    function DX(UU, XU) {
      return {
        ...UU,
        loadoutPerks: UU.loadoutPerks.map((UU => UU.loadoutPerkId === XU.loadoutPerkId ? XU : UU))
      }
    }

    function EX(UU, XU) {
      return {
        ...UU,
        loadoutCoins: UU.loadoutCoins - XU.loadoutCostCoins,
        loadoutHeldParts: UU.loadoutHeldParts.map((UU => {
          const zU = XU.loadoutCostParts.find((XU => XU.loadoutPartCurrency === UU.loadoutHeldPartCurrency));
          return zU ? {
            ...UU,
            loadoutHeldPartAmount: UU.loadoutHeldPartAmount - zU.loadoutPartAmount
          } : UU
        }))
      }
    }

    function YX(UU, XU) {
      return {
        loadoutNoticeKey: UU,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: XU,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const NX = "containmentLoadoutView";
    class IX extends UX {
      constructor(UU, XU, zU, cU) {
        super(UU, XU, zU, cU, "loadout", QX), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = UU => {
          this.slot = UU, this.selectedId = pX(this.board, UU), this.emit()
        }
      }
      messageOpens(UU) {
        return UU.loadoutMessageOpens
      }
      messageNotice(UU) {
        return UU.loadoutNotice
      }
      openingSelection(UU) {
        return pX(UU, this.slot)
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

    function pX(UU, XU) {
      if ("loadoutPerks" === XU) {
        var zU;
        const XU = UU.loadoutPerks;
        return (null !== (zU = XU.find((UU => UU.loadoutPerkEquipped))) && void 0 !== zU ? zU : XU[0]).loadoutPerkId
      }
      return cX(UU, XU).loadoutSlotEquippedId
    }
    const aX = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var tX = zU(37604),
      gX = zU(1294);
    const kX = {
        loadoutPrimary: `${dU}:loadoutSlotPrimary`,
        loadoutSecondary: `${dU}:loadoutSlotSecondary`,
        loadoutOffensive: `${dU}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${dU}:loadoutSlotSelfHelp`,
        loadoutArmour: `${dU}:loadoutSlotArmour`,
        loadoutPerks: `${dU}:loadoutSlotPerks`
      },
      GX = {
        section: "right",
        DI: "bottom",
        act: "top"
      },
      BX = (0, cU.createContext)({
        step: null,
        targetRef: () => {}
      });

    function ZX() {
      const {
        step: UU,
        targetRef: XU
      } = (0, cU.useContext)(BX);
      return (zU, cU) => (null === UU || void 0 === UU ? void 0 : UU.kind) === zU && UU.id === cU ? XU : void 0
    }

    function RX(UU, XU) {
      const zU = XU.loadoutTargetId;
      if ("loadoutPerks" === XU.loadoutTargetSection) {
        const XU = UU.loadoutPerks.find((UU => UU.loadoutPerkId === zU));
        return {
          name: XU.loadoutPerkName,
          owned: XU.loadoutPerkOwned,
          equipped: XU.loadoutPerkEquipped
        }
      }
      const cU = cX(UU, XU.loadoutTargetSection),
        yU = cU.loadoutSlotOptions.find((UU => UU.loadoutOptionId === zU));
      return {
        name: yU.loadoutOptionName,
        owned: yU.loadoutOptionOwnedTier > 0,
        equipped: cU.loadoutSlotEquippedId === zU
      }
    }

    function PX(UU, XU, zU, cU) {
      const [yU, QU] = UU(`${dU}:${XU}`, {
        [zU]: "\x01"
      }).split("\x01");
      return (0, WU.jsxs)(WU.Fragment, {
        children: [yU, (0, WU.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: cU
        }), QU]
      })
    }

    function WX(UU) {
      let {
        view: XU,
        onDismiss: zU,
        children: yU
      } = UU;
      const {
        t: QU
      } = (0, YU.I)(), AU = XU.loadout, FU = XU.open ? AU.loadoutWalkthrough.map((UU => ({
        target: UU,
        info: RX(AU, UU)
      }))).find((UU => {
        let {
          info: XU
        } = UU;
        return !XU.equipped
      })) : void 0;
      let oU = null,
        DU = null;
      if (void 0 !== FU) {
        const {
          target: UU,
          info: zU
        } = FU;
        XU.slot !== UU.loadoutTargetSection ? (oU = {
          kind: "section",
          id: UU.loadoutTargetSection
        }, DU = PX(QU, "loadoutWalkthroughSection", "section", QU(kX[UU.loadoutTargetSection]))) : XU.selectedId !== UU.loadoutTargetId ? (oU = {
          kind: "DI",
          id: UU.loadoutTargetId
        }, DU = PX(QU, "loadoutWalkthroughPick", "name", zU.name)) : (oU = {
          kind: "act",
          id: UU.loadoutTargetId
        }, DU = PX(QU, zU.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", zU.name))
      }
      const EU = null === oU ? null : function(UU) {
          return `${UU.kind}:${UU.id}`
        }(oU),
        [NU, IU] = (0, cU.useState)(null),
        pU = (0, cU.useCallback)((UU => {
          IU((XU => null !== UU ? {
            key: EU,
            node: UU
          } : (null === XU || void 0 === XU ? void 0 : XU.key) === EU ? null : XU))
        }), [EU]),
        aU = null !== EU && (null === NU || void 0 === NU ? void 0 : NU.key) === EU ? NU.node : null;
      return (0, WU.jsxs)(BX.Provider, {
        value: {
          step: oU,
          targetRef: pU
        },
        children: [yU, null !== oU && null !== aU && (0, WU.jsx)(dX, {
          target: aU,
          placement: GX[oU.kind],
          onDismiss: zU,
          children: DU
        }, EU)]
      })
    }

    function dX(UU) {
      let {
        target: XU,
        placement: zU,
        onDismiss: yU,
        children: QU
      } = UU;
      const {
        t: AU
      } = (0, YU.I)(), FU = (0, cU.useRef)(XU);
      return FU.current = XU, (0, gX.t)("popup", FU, yU), (0, WU.jsxs)(tX.d, {
        target: XU,
        placement: zU,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, WU.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, WU.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: aX,
            alt: "",
            draggable: !1
          }), (0, WU.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: AU(`${dU}:operatorName`)
          }), (0, WU.jsx)(pU.k, {
            onClick: yU,
            ariaLabel: AU(`${dU}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, WU.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: QU
        })]
      })
    }
    const LX = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function eX(UU) {
      let {
        cost: XU,
        loadout: zU
      } = UU;
      const {
        t: cU
      } = (0, YU.I)();
      return XU.loadoutCostCoins <= 0 && 0 === XU.loadoutCostParts.length ? (0, WU.jsx)("span", {
        className: "LoadoutCost",
        children: cU(`${dU}:loadoutFree`)
      }) : (0, WU.jsxs)("span", {
        className: "LoadoutCost",
        children: [XU.loadoutCostCoins > 0 && (0, WU.jsx)(qU, {
          itemName: LU,
          amount: XU.loadoutCostCoins,
          uD: zU.loadoutCoins
        }), XU.loadoutCostParts.map((UU => {
          const XU = zX(zU, UU.loadoutPartCurrency);
          return (0, WU.jsx)(qU, {
            itemName: XU.loadoutHeldPartItem,
            amount: UU.loadoutPartAmount,
            uD: XU.loadoutHeldPartAmount
          }, UU.loadoutPartCurrency)
        }))]
      })
    }
    const CX = {
      loadoutStatFireRate: `${dU}:loadoutUnitPerMinute`,
      loadoutStatReload: `${dU}:loadoutUnitSeconds`,
      loadoutStatResupply: `${dU}:loadoutUnitSeconds`
    };

    function wX(UU) {
      return "loadoutStatPotency" === UU.loadoutStatKind ? (0, hU.Q)(UU.loadoutStatValue) : String(UU.loadoutStatValue)
    }

    function qX(UU) {
      var XU;
      let {
        option: zU
      } = UU;
      const {
        t: cU
      } = (0, YU.I)(), yU = zU.loadoutOptionTiers, QU = null === (XU = yU[0]) || void 0 === XU ? void 0 : XU.loadoutTierStats.map((UU => UU.loadoutStatKind));
      if (!QU || 0 === QU.length) return null;
      const AU = zU.loadoutOptionOwnedTier,
        FU = (UU, XU) => {
          var zU;
          return null === (zU = yU[UU]) || void 0 === zU ? void 0 : zU.loadoutTierStats.find((UU => UU.loadoutStatKind === XU))
        };
      return (0, WU.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, WU.jsx)("thead", {
          children: (0, WU.jsxs)("tr", {
            children: [(0, WU.jsx)("th", {}), yU.map(((UU, XU) => (0, WU.jsx)("th", {
              className: DU()({
                Current: XU + 1 === AU,
                Next: XU === AU
              }),
              children: cU(`${dU}:loadoutTier`, {
                tier: (0, hU.Q)(XU + 1)
              })
            }, XU)))]
          })
        }), (0, WU.jsx)("tbody", {
          children: QU.map((UU => {
            const XU = CX[UU];
            return (0, WU.jsxs)("tr", {
              children: [(0, WU.jsxs)("th", {
                scope: "row",
                children: [cU(`${dU}:${UU}`), XU && (0, WU.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: cU(XU)
                })]
              }), yU.map(((XU, zU) => {
                const cU = FU(zU, UU),
                  yU = zU > 0 ? FU(zU - 1, UU) : void 0,
                  QU = cU && yU ? cU.loadoutStatValue - yU.loadoutStatValue : 0,
                  oU = LX.has(UU) ? QU < 0 : QU > 0,
                  EU = zU === AU;
                return (0, WU.jsxs)("td", {
                  className: DU()({
                    Current: zU + 1 === AU,
                    Next: EU,
                    Gain: oU,
                    Owned: zU < AU
                  }),
                  children: [EU && oU && (0, WU.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: QU < 0 ? "\u25bc" : "\u25b2"
                  }), cU ? wX(cU) : "-"]
                }, zU)
              }))]
            }, UU)
          }))
        })]
      })
    }

    function OX(UU) {
      let {
        view: XU,
        controller: zU,
        slot: cU,
        option: yU
      } = UU;
      const {
        t: QU
      } = (0, YU.I)(), AU = XU.loadout, FU = yU.loadoutOptionOwnedTier, oU = yU.loadoutOptionTiers.length, DU = cU.loadoutSlotEquippedId === yU.loadoutOptionId, EU = FU < oU ? yU.loadoutOptionTiers[FU].loadoutTierCost : null, NU = null !== EU && XX(AU, EU), IU = yU.loadoutOptionId, aU = ZX();
      return (0, WU.jsxs)(WU.Fragment, {
        children: [(0, WU.jsx)(rX, {
          icon: yU.loadoutOptionIcon,
          name: yU.loadoutOptionName,
          status: 0 === FU ? QU(`${dU}:loadoutLocked`) : oU > 1 ? QU(`${dU}:loadoutTier`, {
            tier: (0, hU.Q)(FU)
          }) : null,
          locked: 0 === FU,
          equipped: DU
        }), (0, WU.jsx)("p", {
          className: "BoardDescription",
          children: yU.loadoutOptionDescription
        }), (0, WU.jsx)(qX, {
          option: yU
        }), (0, WU.jsxs)("div", {
          ref: aU("act", IU),
          className: "BoardActions",
          children: [null !== EU && (0, WU.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, WU.jsx)(eX, {
              cost: EU,
              loadout: AU
            }), (0, WU.jsx)(pU.l, {
              disabled: !NU || XU.pending,
              onClick: () => {
                zU.act(0 === FU ? "loadoutUnlock" : "loadoutUpgrade", IU)
              },
              children: 0 === FU ? QU(`${dU}:loadoutUnlock`) : QU(`${dU}:loadoutUpgrade`, {
                tier: (0, hU.Q)(FU + 1)
              })
            })]
          }), null === EU && oU > 1 && (0, WU.jsx)("span", {
            className: "BoardHint",
            children: QU(`${dU}:loadoutMaxed`)
          }), FU > 0 && !DU && (0, WU.jsx)(pU.f, {
            disabled: XU.pending,
            onClick: () => {
              zU.act("loadoutEquip", IU)
            },
            children: QU(`${dU}:loadoutEquip`)
          })]
        })]
      })
    }

    function SX(UU) {
      let {
        view: XU,
        controller: zU,
        perk: cU
      } = UU;
      const {
        t: yU
      } = (0, YU.I)(), QU = XU.loadout, AU = yX(QU), FU = cU.loadoutPerkId, oU = ZX();
      return (0, WU.jsxs)(WU.Fragment, {
        children: [(0, WU.jsx)(rX, {
          icon: cU.loadoutPerkIcon,
          name: cU.loadoutPerkName,
          status: cU.loadoutPerkOwned ? null : yU(`${dU}:loadoutLocked`),
          locked: !cU.loadoutPerkOwned,
          equipped: cU.loadoutPerkEquipped
        }), (0, WU.jsx)("p", {
          className: "BoardDescription",
          children: cU.loadoutPerkDescription
        }), (0, WU.jsxs)("div", {
          ref: oU("act", FU),
          className: "BoardActions",
          children: [!cU.loadoutPerkOwned && (0, WU.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, WU.jsx)(eX, {
              cost: cU.loadoutPerkCost,
              loadout: QU
            }), (0, WU.jsx)(pU.l, {
              disabled: !XX(QU, cU.loadoutPerkCost) || XU.pending,
              onClick: () => {
                zU.act("loadoutUnlock", FU)
              },
              children: yU(`${dU}:loadoutUnlock`)
            })]
          }), cU.loadoutPerkOwned && !cU.loadoutPerkEquipped && (0, WU.jsx)(pU.f, {
            disabled: AU || XU.pending,
            onClick: () => {
              zU.act("loadoutEquip", FU)
            },
            children: yU(`${dU}:loadoutEquip`)
          }), cU.loadoutPerkOwned && !cU.loadoutPerkEquipped && AU && (0, WU.jsx)("span", {
            className: "BoardHint",
            children: yU(`${dU}:loadoutSocketsFullHint`)
          }), cU.loadoutPerkEquipped && (0, WU.jsx)(pU.O, {
            disabled: XU.pending,
            onClick: () => {
              zU.act("loadoutUnequip", FU)
            },
            children: yU(`${dU}:loadoutUnequip`)
          })]
        })]
      })
    }

    function rX(UU) {
      let {
        icon: XU,
        name: zU,
        status: cU,
        locked: yU,
        equipped: QU
      } = UU;
      const {
        t: AU
      } = (0, YU.I)();
      return (0, WU.jsxs)(uU, {
        icon: (0, WU.jsx)(CU, {
          itemName: XU
        }),
        name: zU,
        children: [null !== cU && (0, WU.jsx)("span", {
          className: DU()("LoadoutStatusText", {
            Locked: yU
          }),
          children: cU
        }), QU && (0, WU.jsx)("span", {
          className: "BoardBadge",
          children: AU(`${dU}:loadoutEquippedBadge`)
        })]
      })
    }

    function uX(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const cU = XU.loadout;
      if ("loadoutPerks" === XU.slot) {
        const UU = cU.loadoutPerks.find((UU => UU.loadoutPerkId === XU.selectedId));
        return (0, WU.jsx)("section", {
          className: "BoardDetail",
          children: UU && (0, WU.jsx)(SX, {
            view: XU,
            controller: zU,
            perk: UU
          })
        })
      }
      const yU = cX(cU, XU.slot),
        QU = yU.loadoutSlotOptions.find((UU => UU.loadoutOptionId === XU.selectedId));
      return (0, WU.jsx)("section", {
        className: "BoardDetail",
        children: QU && (0, WU.jsx)(OX, {
          view: XU,
          controller: zU,
          slot: yU,
          option: QU
        })
      })
    }

    function fX(UU) {
      let {
        owned: XU,
        total: zU
      } = UU;
      return zU <= 1 ? null : (0, WU.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: zU
        }, ((UU, zU) => (0, WU.jsx)("span", {
          className: DU()("LoadoutPip", {
            Filled: zU < XU
          })
        }, zU)))
      })
    }

    function iX(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, YU.I)(), yU = XU.loadout, QU = ZX();
      return (0, WU.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": cU(`${dU}:loadoutKit`),
        children: [yU.loadoutSlots.map((UU => {
          const yU = UU.loadoutSlotOptions.find((XU => XU.loadoutOptionId === UU.loadoutSlotEquippedId));
          return (0, WU.jsxs)("button", {
            ref: QU("section", UU.loadoutSlotKind),
            type: "button",
            className: DU()("LoadoutKitSlot", {
              Selected: XU.slot === UU.loadoutSlotKind
            }),
            onClick: () => {
              zU.selectSlot(UU.loadoutSlotKind)
            },
            children: [(0, WU.jsx)("span", {
              className: "LoadoutKitIcon",
              children: yU && (0, WU.jsx)(CU, {
                itemName: yU.loadoutOptionIcon
              })
            }), (0, WU.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, WU.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, WU.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: cU(kX[UU.loadoutSlotKind])
                }), yU && (0, WU.jsx)(fX, {
                  owned: yU.loadoutOptionOwnedTier,
                  total: yU.loadoutOptionTiers.length
                })]
              }), (0, WU.jsx)("span", {
                className: "LoadoutKitName",
                children: null === yU || void 0 === yU ? void 0 : yU.loadoutOptionName
              })]
            })]
          }, UU.loadoutSlotKind)
        })), (0, WU.jsx)(HX, {
          view: XU,
          controller: zU
        })]
      })
    }

    function HX(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, YU.I)(), yU = XU.loadout, QU = yU.loadoutPerks.filter((UU => UU.loadoutPerkEquipped)), AU = ZX();
      return (0, WU.jsxs)("button", {
        ref: AU("section", "loadoutPerks"),
        type: "button",
        className: DU()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === XU.slot
        }),
        onClick: () => {
          zU.selectSlot("loadoutPerks")
        },
        children: [(0, WU.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, WU.jsx)("span", {
            className: "LoadoutKitLabel",
            children: cU(kX.loadoutPerks)
          }), (0, WU.jsx)("span", {
            className: "LoadoutPerkCount",
            children: cU(`${dU}:loadoutPerkCount`, {
              equipped: String(QU.length),
              max: String(yU.loadoutMaxPerks)
            })
          })]
        }), (0, WU.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: yU.loadoutMaxPerks
          }, ((UU, XU) => {
            const zU = QU[XU];
            return (0, WU.jsxs)("span", {
              className: DU()("LoadoutSocket", {
                Filled: zU,
                Empty: !zU
              }),
              children: [(0, WU.jsx)("span", {
                className: "LoadoutSocketWell",
                children: zU && (0, WU.jsx)(CU, {
                  itemName: zU.loadoutPerkIcon
                })
              }), (0, WU.jsx)("span", {
                className: "LoadoutSocketName",
                children: zU ? zU.loadoutPerkName : cU(`${dU}:loadoutPerkSocketEmpty`)
              })]
            }, XU)
          }))
        })]
      })
    }

    function MX(UU) {
      let {
        icon: XU,
        name: zU,
        selected: cU,
        equipped: yU,
        locked: QU,
        ownedTier: AU,
        tiers: FU,
        buttonRef: oU,
        onSelect: DU
      } = UU;
      const {
        t: EU
      } = (0, YU.I)();
      return (0, WU.jsxs)(rU, {
        icon: (0, WU.jsx)(CU, {
          itemName: XU
        }),
        name: zU,
        selected: cU,
        locked: QU,
        buttonRef: oU,
        onSelect: DU,
        children: [yU && (0, WU.jsx)("span", {
          className: "BoardBadge",
          children: EU(`${dU}:loadoutEquippedBadge`)
        }), QU && (0, WU.jsx)("span", {
          className: "BoardBadge Muted",
          children: EU(`${dU}:loadoutLocked`)
        }), !QU && (0, WU.jsx)(fX, {
          owned: AU,
          total: FU
        })]
      })
    }

    function vX(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const cU = XU.loadout,
        yU = ZX();
      if ("loadoutPerks" === XU.slot) return (0, WU.jsx)("div", {
        className: "BoardTiles",
        children: cU.loadoutPerks.map((UU => (0, WU.jsx)(MX, {
          icon: UU.loadoutPerkIcon,
          name: UU.loadoutPerkName,
          selected: XU.selectedId === UU.loadoutPerkId,
          equipped: UU.loadoutPerkEquipped,
          locked: !UU.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: yU("DI", UU.loadoutPerkId),
          onSelect: () => {
            zU.select(UU.loadoutPerkId)
          }
        }, UU.loadoutPerkId)))
      });
      const QU = cX(cU, XU.slot);
      return (0, WU.jsx)("div", {
        className: "BoardTiles",
        children: QU.loadoutSlotOptions.map((UU => (0, WU.jsx)(MX, {
          icon: UU.loadoutOptionIcon,
          name: UU.loadoutOptionName,
          selected: XU.selectedId === UU.loadoutOptionId,
          equipped: QU.loadoutSlotEquippedId === UU.loadoutOptionId,
          locked: 0 === UU.loadoutOptionOwnedTier,
          ownedTier: UU.loadoutOptionOwnedTier,
          tiers: UU.loadoutOptionTiers.length,
          buttonRef: yU("DI", UU.loadoutOptionId),
          onSelect: () => {
            zU.select(UU.loadoutOptionId)
          }
        }, UU.loadoutOptionId)))
      })
    }

    function VX(UU) {
      let {
        loadout: XU
      } = UU;
      return (0, WU.jsx)(fU, {
        coins: XU.loadoutCoins,
        children: XU.loadoutHeldParts.filter((UU => UU.loadoutHeldPartAmount > 0)).map((UU => (0, WU.jsx)(qU, {
          itemName: UU.loadoutHeldPartItem,
          amount: UU.loadoutHeldPartAmount
        }, UU.loadoutHeldPartCurrency)))
      })
    }

    function sX(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, EU.j)(NX, XU.getSnapshot()),
        {
          t: cU
        } = (0, YU.I)();
      if (null === zU.loadout) return null;
      const yU = zU.notice;
      return (0, WU.jsx)(WX, {
        view: zU,
        onDismiss: XU.dismiss,
        children: (0, WU.jsxs)(eU, {
          open: zU.open,
          onDismiss: XU.dismiss,
          title: cU(`${dU}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, WU.jsx)(VX, {
            loadout: zU.loadout
          }),
          statusRefused: null === yU || void 0 === yU ? void 0 : yU.loadoutNoticeRefused,
          status: (0, WU.jsxs)(WU.Fragment, {
            children: [(0, WU.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: cU(`${dU}:loadoutRadioBadge`)
            }), null !== yU && cU(`${dU}:${yU.loadoutNoticeKey}`, {
              name: yU.loadoutNoticeName,
              tier: (0, hU.Q)(yU.loadoutNoticeTier),
              max: String(zU.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, WU.jsx)(iX, {
            view: zU,
            controller: XU
          }), (0, WU.jsx)(vX, {
            view: zU,
            controller: XU
          }), (0, WU.jsx)(uX, {
            view: zU,
            controller: XU
          })]
        })
      })
    }

    function nX(UU, XU, zU) {
      const cU = UU.locatorEntries.find((UU => UU.locatorEntryId === zU));
      if (!cU) return null;
      const yU = cU.locatorEntryName;
      if ("locatorDisarm" === XU) return cU.locatorEntryArmed ? {
        board: mX(UU, null),
        notice: lX("locatorNoticeDisarmed", yU)
      } : null;
      if ("locatorArm" === XU) return cU.locatorEntryOwned && !cU.locatorEntryArmed ? {
        board: mX(UU, zU),
        notice: lX("locatorNoticeArmed", yU)
      } : null;
      if (cU.locatorEntryOwned || UU.locatorCoins < cU.locatorEntryPrice) return null;
      const QU = mX({
        ...UU,
        locatorCoins: UU.locatorCoins - cU.locatorEntryPrice
      }, zU);
      return {
        board: {
          ...QU,
          locatorEntries: QU.locatorEntries.map((UU => UU.locatorEntryId === zU ? {
            ...UU,
            locatorEntryOwned: !0
          } : UU))
        },
        notice: lX("locatorNoticeBought", yU)
      }
    }

    function mX(UU, XU) {
      return {
        ...UU,
        locatorEntries: UU.locatorEntries.map((UU => {
          const zU = UU.locatorEntryId === XU;
          return UU.locatorEntryArmed === zU ? UU : {
            ...UU,
            locatorEntryArmed: zU
          }
        }))
      }
    }

    function lX(UU, XU) {
      return {
        locatorNoticeKey: UU,
        locatorNoticeRefused: !1,
        locatorNoticeName: XU
      }
    }
    const xX = "containmentLocatorView";
    class JX extends UX {
      constructor(UU, XU, zU, cU) {
        super(UU, XU, zU, cU, "locator", nX), this.snapshot = this.buildSnapshot()
      }
      messageOpens(UU) {
        return UU.locatorMessageOpens
      }
      messageNotice(UU) {
        return UU.locatorNotice
      }
      openingSelection(UU) {
        var XU;
        const zU = UU.locatorEntries;
        return (null !== (XU = zU.find((UU => UU.locatorEntryArmed))) && void 0 !== XU ? XU : zU[0]).locatorEntryId
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
    const jX = {
        locatorContained: `${dU}:locatorFlavourContained`,
        locatorEncountered: `${dU}:locatorFlavourEncountered`,
        locatorUnseen: `${dU}:locatorFlavourUnseen`
      },
      KX = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${dU}:locatorAttunedNormal`,
        codexHardOnly: `${dU}:locatorAttunedHard`
      };

    function bX() {
      return (0, WU.jsx)(WU.Fragment, {
        children: Array.from({
          length: 5
        }, ((UU, XU) => (0, WU.jsx)("span", {
          className: "LocatorFly",
          children: (0, WU.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, XU)))
      })
    }

    function TX(UU) {
      let {
        entry: XU
      } = UU;
      const {
        t: zU
      } = (0, YU.I)();
      return XU.locatorEntryArmed ? (0, WU.jsx)("span", {
        className: "BoardBadge Armed",
        children: zU(`${dU}:locatorArmedBadge`)
      }) : XU.locatorEntryOwned ? (0, WU.jsx)("span", {
        className: "BoardBadge",
        children: zU(`${dU}:locatorOwnedBadge`)
      }) : null
    }

    function hX(UU) {
      let {
        entry: XU,
        coins: zU,
        inTile: cU = !1
      } = UU;
      return (0, WU.jsx)(qU, {
        itemName: LU,
        amount: XU.locatorEntryPrice,
        uD: zU,
        inTile: cU
      })
    }

    function Uz(UU) {
      let {
        view: XU,
        controller: zU,
        entry: cU
      } = UU;
      const {
        t: yU
      } = (0, YU.I)(), QU = cU.locatorEntryId, AU = XU.locators.locatorEntries.find((UU => UU.locatorEntryArmed && UU !== cU));
      return (0, WU.jsxs)("div", {
        className: "BoardActions",
        children: [cU.locatorEntryArmed && (0, WU.jsx)(pU.O, {
          disabled: XU.pending,
          onClick: () => {
            zU.act("locatorDisarm", QU)
          },
          children: yU(`${dU}:locatorDisarm`)
        }), cU.locatorEntryOwned && !cU.locatorEntryArmed && (0, WU.jsx)(pU.f, {
          disabled: XU.pending,
          onClick: () => {
            zU.act("locatorArm", QU)
          },
          children: yU(`${dU}:locatorArm`)
        }), !cU.locatorEntryOwned && (0, WU.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, WU.jsx)(hX, {
            entry: cU,
            coins: XU.locators.locatorCoins
          }), (0, WU.jsx)(pU.l, {
            disabled: XU.locators.locatorCoins < cU.locatorEntryPrice || XU.pending,
            onClick: () => {
              zU.act("locatorBuy", QU)
            },
            children: yU(`${dU}:locatorBuy`)
          })]
        }), AU && !cU.locatorEntryArmed && (0, WU.jsx)("span", {
          className: "BoardHint",
          children: yU(`${dU}:locatorReplacesHint`, {
            name: AU.locatorEntryName
          })
        })]
      })
    }

    function Xz(UU) {
      let {
        entry: XU
      } = UU;
      return "locatorUnseen" === XU.locatorEntryStanding ? (0, WU.jsx)(CU, {
        itemName: "Compass"
      }) : (0, WU.jsx)(wU, {
        anomalyId: XU.locatorEntryId,
        caught: "locatorContained" === XU.locatorEntryStanding
      })
    }

    function zz(UU) {
      let {
        view: XU,
        controller: zU,
        entry: cU
      } = UU;
      const {
        t: yU
      } = (0, YU.I)(), QU = KX[cU.locatorEntryDifficulty];
      return (0, WU.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, WU.jsxs)("div", {
          className: DU()("LocatorLabel", {
            Armed: cU.locatorEntryArmed
          }),
          children: [(0, WU.jsx)(uU, {
            icon: (0, WU.jsx)(Xz, {
              entry: cU
            }),
            name: yU(`${dU}:locatorName`, {
              name: cU.locatorEntryName
            }),
            children: (0, WU.jsx)(TX, {
              entry: cU
            })
          }), (0, WU.jsx)("p", {
            className: "BoardDescription",
            children: yU(cU.locatorEntryArmed ? `${dU}:locatorFlavourArmed` : jX[cU.locatorEntryStanding])
          }), null !== QU && (0, WU.jsx)("p", {
            className: "LocatorAttuned",
            children: yU(QU)
          }), (0, WU.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: yU(`${dU}:locatorUsage`)
          })]
        }), (0, WU.jsx)(Uz, {
          view: XU,
          controller: zU,
          entry: cU
        })]
      })
    }

    function cz(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, EU.j)(xX, XU.getSnapshot()),
        {
          t: cU
        } = (0, YU.I)(),
        yU = zU.locators;
      if (null === yU) return null;
      const QU = yU.locatorEntries.find((UU => UU.locatorEntryId === zU.selectedId)),
        AU = zU.notice;
      return (0, WU.jsxs)(eU, {
        open: zU.open,
        onDismiss: XU.dismiss,
        title: cU(`${dU}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, WU.jsx)(bX, {}),
        headerExtra: (0, WU.jsx)(fU, {
          coins: yU.locatorCoins
        }),
        statusRefused: null === AU || void 0 === AU ? void 0 : AU.locatorNoticeRefused,
        status: (0, WU.jsxs)(WU.Fragment, {
          children: [(0, WU.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: cU(`${dU}:locatorKeeperName`)
          }), null !== AU && cU(`${dU}:${AU.locatorNoticeKey}`, {
            name: AU.locatorNoticeName
          })]
        }),
        children: [(0, WU.jsx)("div", {
          className: "BoardTiles",
          children: yU.locatorEntries.map((UU => (0, WU.jsxs)(rU, {
            icon: (0, WU.jsx)(Xz, {
              entry: UU
            }),
            name: UU.locatorEntryName,
            selected: UU === QU,
            locked: !1,
            className: DU()("LocatorTag", {
              Armed: UU.locatorEntryArmed
            }),
            onSelect: () => {
              XU.select(UU.locatorEntryId)
            },
            children: [(0, WU.jsx)(TX, {
              entry: UU
            }), !UU.locatorEntryOwned && (0, WU.jsx)(hX, {
              entry: UU,
              coins: yU.locatorCoins,
              inTile: !0
            })]
          }, UU.locatorEntryId)))
        }), (0, WU.jsx)(zz, {
          view: zU,
          controller: XU,
          entry: QU
        })]
      })
    }

    function yz(UU) {
      let {
        loadout: XU,
        codex: zU,
        locator: cU
      } = UU;
      return (0, WU.jsxs)(WU.Fragment, {
        children: [(0, WU.jsx)(sX, {
          controller: XU
        }), (0, WU.jsx)(TU, {
          controller: zU
        }), (0, WU.jsx)(cz, {
          controller: cU
        })]
      })
    }
    var Qz = zU(39374);
    class Az {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = UU, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Qz.d({
          spacingMs: 0,
          now: XU
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(UU, XU) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, XU(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(UU), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
    }
    var Fz = zU(39353);
    const oz = new Map([
      ["npc_general", aX],
      ["npc_tentacle_guy", Fz]
    ]);

    function Dz(UU) {
      const XU = oz.get(UU);
      if (void 0 === XU) return null;
      const zU = document.createElement("img");
      return zU.src = XU, zU.alt = "", zU.draggable = !1, zU.style.imageRendering = "pixelated", zU
    }
    const Ez = function() {
      let UU, XU = !1,
        zU = null,
        oU = null;
      const DU = [],
        EU = UU => {
          for (const XU of DU) XU !== UU && XU.close();
          (0, FU.r)()
        },
        YU = UU => {
          UU && (0, FU.l)()
        },
        NU = new Az((XU => {
          UU.sendCommand(XU)
        })),
        IU = new IX((UU => {
          AU.k.UY(NX, UU, !0)
        }), EU, YU, NU),
        pU = new MU((UU => {
          AU.k.UY(HU, UU, !0)
        }), EU, YU),
        aU = new JX((UU => {
          AU.k.UY(xX, UU, !0)
        }), EU, YU, NU);
      DU.push(IU, pU, aU);
      return {
        onCreate: XU => {
          UU = XU, zU = (0, FU.u)(null, {
            content: (0, cU.createElement)(yz, {
              loadout: IU,
              codex: pU,
              locator: aU
            }),
            onClose: () => {
              for (const UU of DU) UU.close()
            }
          }), oU = (0, QU.c)(Dz)
        },
        onReceivedMessageFromServer: (UU, XU) => {
          "containmentLoadout" === UU ? IU.PY(XU) : "containmentLoadoutClose" === UU ? IU.isOpen() && (IU.close(), (0, FU.j)()) : "containmentCodex" === UU ? pU.PY(XU) : "containmentLocator" === UU && aU.PY(XU)
        },
        LY: () => {
          XU || yU.e.get("loadingOverlayVisible") || (XU = !0, UU.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var UU, XU;
          null === (UU = zU) || void 0 === UU || UU(), zU = null, null === (XU = oU) || void 0 === XU || XU(), oU = null;
          for (const zU of DU) zU.dispose();
          NU.dispose()
        }
      }
    }
  },
  40164: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40173: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40177: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40184: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40190: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40193: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40196: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40202: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40204: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40211: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40218: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40223: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40226: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40235: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40237: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40241: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  40243: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  40245: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  40252: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  40255: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  39353: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);