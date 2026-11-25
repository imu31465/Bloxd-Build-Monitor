export const id = 15;
export const ids = [15];
export const modules = {
  40393: (MM, rM, iM) => {
    var OM = {
      "./breach-zero-uncaught.webp": 40398,
      "./breach-zero.webp": 40401,
      "./brood-father-uncaught.webp": 40405,
      "./brood-father.webp": 40408,
      "./carousel-uncaught.webp": 40412,
      "./carousel.webp": 40419,
      "./deadlock-uncaught.webp": 40427,
      "./deadlock.webp": 40433,
      "./frost-revenant-uncaught.webp": 40435,
      "./frost-revenant.webp": 40443,
      "./hollow-choir-uncaught.webp": 40445,
      "./hollow-choir.webp": 40451,
      "./magma-warden-uncaught.webp": 40459,
      "./magma-warden.webp": 40464,
      "./patient-zero-uncaught.webp": 40469,
      "./patient-zero.webp": 40471,
      "./siege-engine-uncaught.webp": 40478,
      "./siege-engine.webp": 40485,
      "./warp-stalker-uncaught.webp": 40489,
      "./warp-stalker.webp": 40496
    };

    function SM(MM) {
      var rM = jM(MM);
      return iM(rM)
    }

    function jM(MM) {
      if (!iM.o(OM, MM)) {
        var rM = new Error("Cannot find module '" + MM + "'");
        throw rM.code = "MODULE_NOT_FOUND", rM
      }
      return OM[MM]
    }
    SM.keys = function() {
      return Object.keys(OM)
    }, SM.resolve = jM, MM.exports = SM, SM.id = 40393
  },
  39578: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    const OM = 4,
      SM = 12e3,
      jM = 1e3;
    class aM {
      constructor() {
        let {
          limit: MM = OM,
          windowMs: rM = SM,
          spacingMs: iM = jM,
          now: aM = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = MM, this.windowMs = rM, this.spacingMs = iM, this.now = aM
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const MM of this.priority) MM.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const MM = this.now();
        this.sent.push(MM), this.lastSentAt = MM, this.schedule(), this.notify()
      }
      addPriority(MM) {
        return this.priority.add(MM), () => {
          this.priority.delete(MM)
        }
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const MM of this.priority)
          if (MM.waiting()) return !0;
        return !1
      }
      prune() {
        const MM = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= MM;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const MM = this.now(),
          rM = this.lastSentAt + this.spacingMs,
          iM = Math.min(rM > MM ? rM : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        iM !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, iM - MM)))
      }
      notify() {
        for (const MM of this.listeners) MM()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  39536: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor(MM, rM, iM) {
        this.Tz = MM, this.beforeOpen = rM, this.afterClose = iM, this.open = !1, this.dh = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.dh && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(MM) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(MM)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.dh = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.dh || (this.snapshot = this.buildSnapshot(), this.Tz(this.snapshot))
      }
    }
  },
  40388: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => zi
    });
    var OM = iM(44);
    var SM = iM(19),
      jM = iM(2022),
      aM = iM(22),
      PM = iM(37542),
      nM = iM(1116),
      QM = iM.n(nM),
      zM = iM(1516),
      LM = iM(1188),
      mM = iM(4917),
      HM = iM(1424),
      hM = iM(1520),
      JM = iM(2026),
      dM = iM(1440),
      yM = iM(2006),
      lM = iM(2084),
      EM = iM(187);
    const UM = iM(40393),
      GM = Object.fromEntries(UM.keys().map((MM => [MM.replace(/^\.\/(.*)\.webp$/, "$1"), UM(MM)]))),
      CM = new Set;

    function eM(MM, rM) {
      const iM = rM ? MM : `${MM}-uncaught`,
        OM = (0, EM.d)(GM, iM);
      return void 0 !== OM || CM.has(iM) || (CM.add(iM), console.warn(`Containment Breach has no mugshot ${iM}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), OM
    }
    var bM = iM(1303);
    const wM = "containmentBreach",
      tM = "Gold Coin";

    function gM(MM) {
      let {
        open: rM,
        onDismiss: iM,
        title: OM,
        className: SM,
        decor: jM,
        headerExtra: aM,
        status: PM,
        statusRefused: nM = !1,
        children: zM
      } = MM;
      const LM = `${SM}Title`;
      return (0, bM.jsx)(mM.e, {
        show: rM,
        close: iM,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, bM.jsxs)("section", {
          className: QM()("ContainmentBoardPanel", SM),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": LM,
          children: [jM && (0, bM.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: jM
          }), (0, bM.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, bM.jsx)("h2", {
              id: LM,
              className: "VisuallyHidden",
              children: OM
            }), aM, (0, bM.jsx)(hM.l, {
              onClick: iM
            })]
          }), (0, bM.jsx)("div", {
            className: "BoardBody",
            children: zM
          }), void 0 !== PM && (0, bM.jsx)("footer", {
            className: QM()("BoardStatus", {
              Refused: nM
            }),
            children: PM
          })]
        })
      })
    }

    function uM(MM) {
      let {
        itemName: rM
      } = MM;
      return (0, bM.jsx)(JM.b, {
        itemName: rM,
        amount: 0
      })
    }

    function RM(MM) {
      let {
        anomalyId: rM,
        caught: iM
      } = MM;
      const SM = (0, OM.useRef)(null);
      return (0, HM.e)(SM, !iM), (0, bM.jsx)("span", {
        ref: SM,
        className: QM()("BoardMugshot", {
          Uncaught: !iM
        }),
        children: (0, bM.jsx)("img", {
          src: eM(rM, iM),
          alt: "",
          draggable: !1
        })
      })
    }

    function pM(MM) {
      let {
        itemName: rM,
        amount: iM,
        sQ: OM,
        inTile: SM = !1
      } = MM;
      return (0, bM.jsx)(dM.i, {
        delayShow: 200,
        hoverOnly: SM,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, bM.jsx)(sM, {
          itemName: rM,
          amount: iM,
          sQ: OM
        }),
        children: (0, bM.jsxs)("span", {
          className: QM()("BoardChip", {
            Short: void 0 !== OM && OM < iM
          }),
          children: [(0, bM.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, bM.jsx)(uM, {
              itemName: rM
            })
          }), iM.toLocaleString()]
        })
      })
    }
    const WM = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function sM(MM) {
      var rM;
      let {
        itemName: iM,
        amount: OM,
        sQ: SM
      } = MM;
      const {
        t: jM
      } = (0, LM.A)(), aM = (0, lM.f)("itemInfo", (MM => MM[iM])), {
        lore: PM,
        droppedBy: nM
      } = function(MM) {
        if ("string" !== typeof MM) return {
          lore: MM,
          droppedBy: null
        };
        const rM = WM.exec(MM);
        return null === rM ? {
          lore: MM,
          droppedBy: null
        } : {
          lore: "" === rM[1] ? void 0 : rM[1],
          droppedBy: rM[2]
        }
      }(null === aM || void 0 === aM ? void 0 : aM.description);
      return (0, bM.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, bM.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, bM.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, bM.jsx)(uM, {
              itemName: iM
            })
          }), (0, bM.jsx)(yM.b, {
            text: null !== (rM = null === aM || void 0 === aM ? void 0 : aM.displayName) && void 0 !== rM ? rM : iM,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== PM || null !== nM) && (0, bM.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== PM && (0, bM.jsx)(yM.b, {
            text: PM,
            className: "BoardChipTooltipDescription"
          }), null !== nM && (0, bM.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, bM.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: jM(`${wM}:chipDroppedBy`)
            }), nM]
          })]
        }), void 0 !== SM && (0, bM.jsxs)("div", {
          className: QM()("BoardChipTooltipHeld", {
            Short: SM < OM
          }),
          children: [(0, bM.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: jM(`${wM}:chipYouHave`)
          }), (0, bM.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, bM.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: SM.toLocaleString()
            }), ` / ${OM.toLocaleString()}`]
          }), (0, bM.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, bM.jsx)("span", {
              style: {
                width: (OM > 0 ? 100 * Math.min(1, SM / OM) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function DM(MM) {
      let {
        icon: rM,
        name: iM,
        selected: OM,
        locked: SM,
        className: jM,
        buttonRef: aM,
        onSelect: PM,
        children: nM
      } = MM;
      return (0, bM.jsxs)("button", {
        ref: aM,
        type: "button",
        className: QM()("BoardTile", jM, {
          Selected: OM,
          Locked: SM
        }),
        onClick: PM,
        children: [(0, bM.jsx)("span", {
          className: "BoardTileIcon",
          children: rM
        }), (0, bM.jsx)("span", {
          className: "BoardTileName",
          children: iM
        }), nM]
      })
    }

    function kM(MM) {
      let {
        icon: rM,
        name: iM,
        children: OM
      } = MM;
      return (0, bM.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, bM.jsx)("span", {
          className: "BoardDetailIcon",
          children: rM
        }), (0, bM.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, bM.jsx)("h3", {
            children: iM
          }), (0, bM.jsx)("span", {
            className: "BoardDetailStatus",
            children: OM
          })]
        })]
      })
    }

    function ZM(MM) {
      let {
        coins: rM,
        children: iM
      } = MM;
      return (0, bM.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, bM.jsx)(pM, {
          itemName: tM,
          amount: rM
        }), iM]
      })
    }
    var oM = iM(39536);
    const fM = "containmentCodexView";
    class YM extends oM.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = MM => {
          this.selectedId = MM, this.emit()
        }
      }
      GL(MM) {
        this.entries = MM.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const NM = {
        codexAnyDifficulty: `${wM}:codexNeedsAny`,
        codexNormalOnly: `${wM}:codexNeedsNormal`,
        codexHardOnly: `${wM}:codexNeedsHard`
      },
      AM = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      xM = {
        codexContained: `${wM}:codexContainedBadge`,
        codexEncountered: `${wM}:codexEncounteredBadge`,
        codexUnidentified: `${wM}:codexUnidentifiedBadge`
      },
      vM = ["94%", "81%", "88%", "46%", "72%"];

    function FM(MM) {
      let {
        entry: rM
      } = MM;
      const {
        t: iM
      } = (0, LM.A)();
      return (0, bM.jsx)("span", {
        className: QM()("BoardBadge", AM[rM.codexEntryState]),
        children: iM(xM[rM.codexEntryState])
      })
    }

    function BM(MM) {
      const {
        t: rM
      } = (0, LM.A)();
      return "codexUnidentified" === MM.codexEntryState ? rM(`${wM}:codexUnidentifiedName`) : MM.codexEntryName
    }

    function XM(MM) {
      let {
        entry: rM
      } = MM;
      return "codexUnidentified" === rM.codexEntryState ? (0, bM.jsx)(uM, {
        itemName: "Book"
      }) : (0, bM.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, bM.jsx)(RM, {
          anomalyId: rM.codexEntryId,
          caught: "codexContained" === rM.codexEntryState
        }), (0, bM.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function IM(MM) {
      let {
        entry: rM,
        selected: iM,
        onSelect: OM
      } = MM;
      const SM = "codexUnidentified" === rM.codexEntryState;
      return (0, bM.jsxs)(DM, {
        icon: (0, bM.jsx)(XM, {
          entry: rM
        }),
        name: BM(rM),
        selected: iM,
        locked: SM,
        className: QM()("CodexFolder", AM[rM.codexEntryState]),
        onSelect: () => {
          OM(rM.codexEntryId)
        },
        children: [!SM && (0, bM.jsx)(FM, {
          entry: rM
        }), SM && (0, bM.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function KM(MM) {
      let {
        count: rM
      } = MM;
      const iM = [];
      for (let OM = Math.min(rM, 25); OM > 0; OM -= 5) iM.push(Math.min(OM, 5));
      return (0, bM.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: iM.map(((MM, rM) => (0, bM.jsx)("span", {
          className: QM()("CodexTallyGroup", {
            Gate: 5 === MM
          }),
          children: Array.from({
            length: Math.min(MM, 4)
          }, ((MM, rM) => (0, bM.jsx)("span", {
            className: "CodexTallyMark"
          }, rM)))
        }, rM)))
      })
    }

    function qM(MM) {
      let {
        contained: rM,
        total: iM
      } = MM;
      const {
        t: OM
      } = (0, LM.A)();
      return (0, bM.jsxs)("div", {
        className: "CodexProgress",
        children: [OM(`${wM}:codexProgress`, {
          contained: String(rM),
          total: String(iM)
        }), (0, bM.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, bM.jsx)("span", {
            style: {
              width: rM / iM * 100 + "%"
            }
          })
        })]
      })
    }

    function TM(MM) {
      let {
        entry: rM,
        fileNumber: iM
      } = MM;
      const {
        t: OM
      } = (0, LM.A)(), SM = "codexContained" === rM.codexEntryState;
      return (0, bM.jsx)("section", {
        className: "BoardDetail",
        children: (0, bM.jsxs)("article", {
          className: QM()("CodexDossier", AM[rM.codexEntryState]),
          children: [(0, bM.jsx)("span", {
            className: "CodexFileNumber",
            children: OM(`${wM}:codexFileNumber`, {
              number: String(iM).padStart(3, "0")
            })
          }), (0, bM.jsx)(kM, {
            icon: (0, bM.jsx)(XM, {
              entry: rM
            }),
            name: BM(rM),
            children: (0, bM.jsx)(FM, {
              entry: rM
            })
          }), SM && (0, bM.jsxs)(bM.Fragment, {
            children: [(0, bM.jsx)("p", {
              className: "BoardDescription",
              children: rM.codexEntryLore
            }), (0, bM.jsxs)("p", {
              className: "CodexTally",
              children: [OM(`${wM}:codexContainments`, {
                count: String(rM.codexEntryContainedCount)
              }), (0, bM.jsx)(KM, {
                count: rM.codexEntryContainedCount
              })]
            }), (0, bM.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: OM(`${wM}:codexContainedBadge`)
            })]
          }), !SM && (0, bM.jsxs)(bM.Fragment, {
            children: [(0, bM.jsxs)("div", {
              className: "CodexRedaction",
              children: [vM.map((MM => (0, bM.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: MM
                }
              }, MM))), (0, bM.jsx)("p", {
                className: "CodexRedacted",
                children: OM(`${wM}:codexRedacted`)
              })]
            }), "" !== rM.codexEntryHint && (0, bM.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, bM.jsx)("h4", {
                children: OM(`${wM}:codexHintLabel`)
              }), (0, bM.jsx)("p", {
                children: rM.codexEntryHint
              })]
            }), (0, bM.jsx)("p", {
              className: "CodexClearance",
              children: OM(NM[rM.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function VM(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, zM.e)(fM, rM.getSnapshot()),
        {
          t: OM
        } = (0, LM.A)();
      if (0 === iM.entries.length) return null;
      const SM = iM.entries.find((MM => MM.codexEntryId === iM.selectedId)),
        jM = iM.entries.filter((MM => "codexContained" === MM.codexEntryState)).length,
        aM = iM.entries.map((MM => MM.codexEntryId)).sort().indexOf(SM.codexEntryId) + 1;
      return (0, bM.jsxs)(gM, {
        open: iM.open,
        onDismiss: rM.dismiss,
        title: OM(`${wM}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, bM.jsx)(qM, {
          contained: jM,
          total: iM.entries.length
        }),
        children: [(0, bM.jsx)("div", {
          className: "BoardTiles",
          children: iM.entries.map((MM => (0, bM.jsx)(IM, {
            entry: MM,
            selected: MM === SM,
            onSelect: rM.select
          }, MM.codexEntryId)))
        }), (0, bM.jsx)(TM, {
          entry: SM,
          fileNumber: aM
        })]
      })
    }
    var cM = iM(332);
    class Mr extends oM.e {
      constructor(MM, rM, iM, OM, SM, jM) {
        super(MM, rM, iM), this.pacer = OM, this.command = SM, this.predict = jM, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = MM => {
          this.selectedId = MM, this.emit()
        }, this.act = (MM, rM) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${MM} ${rM}`, this.rollBack)) return;
          const iM = this.predict(this.board, MM, rM);
          null !== iM && (this.board = iM.board, this.notice = iM.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = OM.subscribe((() => {
          this.emit()
        }))
      }
      GL(MM) {
        const rM = this.messageOpens(MM);
        if (rM && this.open) return this.board === this.confirmed && (this.board = MM), this.confirmed = MM, void this.emit();
        if (this.board = MM, this.confirmed = MM, this.pacer.onReply(), rM) return this.notice = null, this.selectedId = this.openingSelection(MM), void this.show();
        const iM = this.messageNotice(MM);
        null !== iM && (this.notice = iM), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function rr(MM, rM) {
      return MM.loadoutCoins >= rM.loadoutCostCoins && rM.loadoutCostParts.every((rM => function(MM, rM) {
        return ir(MM, rM).loadoutHeldPartAmount
      }(MM, rM.loadoutPartCurrency) >= rM.loadoutPartAmount))
    }

    function ir(MM, rM) {
      return MM.loadoutHeldParts.find((MM => MM.loadoutHeldPartCurrency === rM))
    }

    function Or(MM, rM) {
      return MM.loadoutSlots.find((MM => MM.loadoutSlotKind === rM))
    }

    function Sr(MM) {
      return MM.loadoutPerks.filter((MM => MM.loadoutPerkEquipped)).length >= MM.loadoutMaxPerks
    }

    function jr(MM, rM, iM) {
      for (const SM of MM.loadoutSlots) {
        const OM = SM.loadoutSlotOptions.find((MM => MM.loadoutOptionId === iM));
        if (OM) return "loadoutArmour" === SM.loadoutSlotKind ? Pr(MM, SM, OM, rM) : ar(MM, SM, OM, rM)
      }
      const OM = MM.loadoutPerks.find((MM => MM.loadoutPerkId === iM));
      return OM ? function(MM, rM, iM) {
        const OM = rM.loadoutPerkOwned,
          SM = rM.loadoutPerkEquipped,
          jM = rM.loadoutPerkName,
          aM = Sr(MM);
        if ("loadoutUnlock" === iM) {
          if (OM || !rr(MM, rM.loadoutPerkCost)) return null;
          const iM = {
            ...rM,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !aM
          };
          return {
            board: Qr(zr(MM, rM.loadoutPerkCost), iM),
            notice: Lr(aM ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", jM)
          }
        }
        if ("loadoutUpgrade" === iM || !OM || "loadoutEquip" === iM === SM || !SM && aM) return null;
        return {
          board: Qr(MM, {
            ...rM,
            loadoutPerkEquipped: !SM
          }),
          notice: Lr(SM ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", jM)
        }
      }(MM, OM, rM) : null
    }

    function ar(MM, rM, iM, OM) {
      const SM = iM.loadoutOptionOwnedTier,
        jM = iM.loadoutOptionName;
      if ("loadoutEquip" === OM) return 0 === SM ? null : {
        board: nr(MM, rM, iM.loadoutOptionId, null),
        notice: Lr("loadoutNoticeEquipped", jM)
      };
      const aM = "loadoutUnlock" === OM;
      if (aM && 0 !== SM || "loadoutUpgrade" === OM && (0 === SM || SM >= iM.loadoutOptionTiers.length) || "loadoutUnequip" === OM) return null;
      const PM = iM.loadoutOptionTiers[SM].loadoutTierCost;
      if (!rr(MM, PM)) return null;
      const nM = {
          ...iM,
          loadoutOptionOwnedTier: SM + 1
        },
        QM = aM ? iM.loadoutOptionId : rM.loadoutSlotEquippedId;
      return {
        board: nr(zr(MM, PM), rM, QM, nM),
        notice: aM ? Lr("loadoutNoticeUnlocked", jM) : Lr("loadoutNoticeUpgraded", jM, SM + 1)
      }
    }

    function Pr(MM, rM, iM, OM) {
      const SM = iM.loadoutOptionOwnedTier > 0,
        jM = iM.loadoutOptionName;
      if ("loadoutEquip" === OM && SM) return {
        board: nr(MM, rM, iM.loadoutOptionId, null),
        notice: Lr("loadoutNoticeEquipped", jM)
      };
      const aM = iM.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== OM || SM || !rr(MM, aM) ? null : {
        board: nr(zr(MM, aM), rM, iM.loadoutOptionId, {
          ...iM,
          loadoutOptionOwnedTier: 1
        }),
        notice: Lr("loadoutNoticeUnlocked", jM)
      }
    }

    function nr(MM, rM, iM, OM) {
      const SM = {
        ...rM,
        loadoutSlotEquippedId: iM,
        loadoutSlotOptions: rM.loadoutSlotOptions.map((MM => null !== OM && MM.loadoutOptionId === OM.loadoutOptionId ? OM : MM))
      };
      return {
        ...MM,
        loadoutSlots: MM.loadoutSlots.map((MM => MM === rM ? SM : MM))
      }
    }

    function Qr(MM, rM) {
      return {
        ...MM,
        loadoutPerks: MM.loadoutPerks.map((MM => MM.loadoutPerkId === rM.loadoutPerkId ? rM : MM))
      }
    }

    function zr(MM, rM) {
      return {
        ...MM,
        loadoutCoins: MM.loadoutCoins - rM.loadoutCostCoins,
        loadoutHeldParts: MM.loadoutHeldParts.map((MM => {
          const iM = rM.loadoutCostParts.find((rM => rM.loadoutPartCurrency === MM.loadoutHeldPartCurrency));
          return iM ? {
            ...MM,
            loadoutHeldPartAmount: MM.loadoutHeldPartAmount - iM.loadoutPartAmount
          } : MM
        }))
      }
    }

    function Lr(MM, rM) {
      return {
        loadoutNoticeKey: MM,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: rM,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const mr = "containmentLoadoutView";
    class Hr extends Mr {
      constructor(MM, rM, iM, OM) {
        super(MM, rM, iM, OM, "loadout", jr), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = MM => {
          this.slot = MM, this.selectedId = hr(this.board, MM), this.emit()
        }
      }
      messageOpens(MM) {
        return MM.loadoutMessageOpens
      }
      messageNotice(MM) {
        return MM.loadoutNotice
      }
      openingSelection(MM) {
        return hr(MM, this.slot)
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

    function hr(MM, rM) {
      if ("loadoutPerks" === rM) {
        var iM;
        const rM = MM.loadoutPerks;
        return (null !== (iM = rM.find((MM => MM.loadoutPerkEquipped))) && void 0 !== iM ? iM : rM[0]).loadoutPerkId
      }
      return Or(MM, rM).loadoutSlotEquippedId
    }
    const Jr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var dr = iM(37821),
      yr = iM(1287);
    const lr = {
        loadoutPrimary: `${wM}:loadoutSlotPrimary`,
        loadoutSecondary: `${wM}:loadoutSlotSecondary`,
        loadoutOffensive: `${wM}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${wM}:loadoutSlotSelfHelp`,
        loadoutArmour: `${wM}:loadoutSlotArmour`,
        loadoutPerks: `${wM}:loadoutSlotPerks`
      },
      Er = {
        section: "right",
        LH: "bottom",
        act: "top"
      },
      Ur = (0, OM.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Gr() {
      const {
        step: MM,
        targetRef: rM
      } = (0, OM.useContext)(Ur);
      return (iM, OM) => (null === MM || void 0 === MM ? void 0 : MM.kind) === iM && MM.id === OM ? rM : void 0
    }

    function Cr(MM, rM) {
      const iM = rM.loadoutTargetId;
      if ("loadoutPerks" === rM.loadoutTargetSection) {
        const rM = MM.loadoutPerks.find((MM => MM.loadoutPerkId === iM));
        return {
          name: rM.loadoutPerkName,
          owned: rM.loadoutPerkOwned,
          equipped: rM.loadoutPerkEquipped
        }
      }
      const OM = Or(MM, rM.loadoutTargetSection),
        SM = OM.loadoutSlotOptions.find((MM => MM.loadoutOptionId === iM));
      return {
        name: SM.loadoutOptionName,
        owned: SM.loadoutOptionOwnedTier > 0,
        equipped: OM.loadoutSlotEquippedId === iM
      }
    }

    function er(MM, rM, iM, OM) {
      const [SM, jM] = MM(`${wM}:${rM}`, {
        [iM]: "\x01"
      }).split("\x01");
      return (0, bM.jsxs)(bM.Fragment, {
        children: [SM, (0, bM.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: OM
        }), jM]
      })
    }

    function br(MM) {
      let {
        view: rM,
        onDismiss: iM,
        children: SM
      } = MM;
      const {
        t: jM
      } = (0, LM.A)(), aM = rM.loadout, PM = rM.open ? aM.loadoutWalkthrough.map((MM => ({
        target: MM,
        info: Cr(aM, MM)
      }))).find((MM => {
        let {
          info: rM
        } = MM;
        return !rM.equipped
      })) : void 0;
      let nM = null,
        QM = null;
      if (void 0 !== PM) {
        const {
          target: MM,
          info: iM
        } = PM;
        rM.slot !== MM.loadoutTargetSection ? (nM = {
          kind: "section",
          id: MM.loadoutTargetSection
        }, QM = er(jM, "loadoutWalkthroughSection", "section", jM(lr[MM.loadoutTargetSection]))) : rM.selectedId !== MM.loadoutTargetId ? (nM = {
          kind: "LH",
          id: MM.loadoutTargetId
        }, QM = er(jM, "loadoutWalkthroughPick", "name", iM.name)) : (nM = {
          kind: "act",
          id: MM.loadoutTargetId
        }, QM = er(jM, iM.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", iM.name))
      }
      const zM = null === nM ? null : function(MM) {
          return `${MM.kind}:${MM.id}`
        }(nM),
        [mM, HM] = (0, OM.useState)(null),
        hM = (0, OM.useCallback)((MM => {
          HM((rM => null !== MM ? {
            key: zM,
            node: MM
          } : (null === rM || void 0 === rM ? void 0 : rM.key) === zM ? null : rM))
        }), [zM]),
        JM = null !== zM && (null === mM || void 0 === mM ? void 0 : mM.key) === zM ? mM.node : null;
      return (0, bM.jsxs)(Ur.Provider, {
        value: {
          step: nM,
          targetRef: hM
        },
        children: [SM, null !== nM && null !== JM && (0, bM.jsx)(wr, {
          target: JM,
          placement: Er[nM.kind],
          onDismiss: iM,
          children: QM
        }, zM)]
      })
    }

    function wr(MM) {
      let {
        target: rM,
        placement: iM,
        onDismiss: SM,
        children: jM
      } = MM;
      const {
        t: aM
      } = (0, LM.A)(), PM = (0, OM.useRef)(rM);
      return PM.current = rM, (0, yr.v)("popup", PM, SM), (0, bM.jsxs)(dr.e, {
        target: rM,
        placement: iM,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, bM.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, bM.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Jr,
            alt: "",
            draggable: !1
          }), (0, bM.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: aM(`${wM}:operatorName`)
          }), (0, bM.jsx)(hM.l, {
            onClick: SM,
            ariaLabel: aM(`${wM}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, bM.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: jM
        })]
      })
    }
    const tr = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function gr(MM) {
      let {
        cost: rM,
        loadout: iM
      } = MM;
      const {
        t: OM
      } = (0, LM.A)();
      return rM.loadoutCostCoins <= 0 && 0 === rM.loadoutCostParts.length ? (0, bM.jsx)("span", {
        className: "LoadoutCost",
        children: OM(`${wM}:loadoutFree`)
      }) : (0, bM.jsxs)("span", {
        className: "LoadoutCost",
        children: [rM.loadoutCostCoins > 0 && (0, bM.jsx)(pM, {
          itemName: tM,
          amount: rM.loadoutCostCoins,
          sQ: iM.loadoutCoins
        }), rM.loadoutCostParts.map((MM => {
          const rM = ir(iM, MM.loadoutPartCurrency);
          return (0, bM.jsx)(pM, {
            itemName: rM.loadoutHeldPartItem,
            amount: MM.loadoutPartAmount,
            sQ: rM.loadoutHeldPartAmount
          }, MM.loadoutPartCurrency)
        }))]
      })
    }
    const ur = {
      loadoutStatFireRate: `${wM}:loadoutUnitPerMinute`,
      loadoutStatReload: `${wM}:loadoutUnitSeconds`,
      loadoutStatResupply: `${wM}:loadoutUnitSeconds`
    };

    function Rr(MM) {
      return "loadoutStatPotency" === MM.loadoutStatKind ? (0, cM.T)(MM.loadoutStatValue) : String(MM.loadoutStatValue)
    }

    function pr(MM) {
      var rM;
      let {
        option: iM
      } = MM;
      const {
        t: OM
      } = (0, LM.A)(), SM = iM.loadoutOptionTiers, jM = null === (rM = SM[0]) || void 0 === rM ? void 0 : rM.loadoutTierStats.map((MM => MM.loadoutStatKind));
      if (!jM || 0 === jM.length) return null;
      const aM = iM.loadoutOptionOwnedTier,
        PM = (MM, rM) => {
          var iM;
          return null === (iM = SM[MM]) || void 0 === iM ? void 0 : iM.loadoutTierStats.find((MM => MM.loadoutStatKind === rM))
        };
      return (0, bM.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, bM.jsx)("thead", {
          children: (0, bM.jsxs)("tr", {
            children: [(0, bM.jsx)("th", {}), SM.map(((MM, rM) => (0, bM.jsx)("th", {
              className: QM()({
                Current: rM + 1 === aM,
                Next: rM === aM
              }),
              children: OM(`${wM}:loadoutTier`, {
                tier: (0, cM.T)(rM + 1)
              })
            }, rM)))]
          })
        }), (0, bM.jsx)("tbody", {
          children: jM.map((MM => {
            const rM = ur[MM];
            return (0, bM.jsxs)("tr", {
              children: [(0, bM.jsxs)("th", {
                scope: "row",
                children: [OM(`${wM}:${MM}`), rM && (0, bM.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: OM(rM)
                })]
              }), SM.map(((rM, iM) => {
                const OM = PM(iM, MM),
                  SM = iM > 0 ? PM(iM - 1, MM) : void 0,
                  jM = OM && SM ? OM.loadoutStatValue - SM.loadoutStatValue : 0,
                  nM = tr.has(MM) ? jM < 0 : jM > 0,
                  zM = iM === aM;
                return (0, bM.jsxs)("td", {
                  className: QM()({
                    Current: iM + 1 === aM,
                    Next: zM,
                    Gain: nM,
                    Owned: iM < aM
                  }),
                  children: [zM && nM && (0, bM.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: jM < 0 ? "\u25bc" : "\u25b2"
                  }), OM ? Rr(OM) : "-"]
                }, iM)
              }))]
            }, MM)
          }))
        })]
      })
    }

    function Wr(MM) {
      let {
        view: rM,
        controller: iM,
        slot: OM,
        option: SM
      } = MM;
      const {
        t: jM
      } = (0, LM.A)(), aM = rM.loadout, PM = SM.loadoutOptionOwnedTier, nM = SM.loadoutOptionTiers.length, QM = OM.loadoutSlotEquippedId === SM.loadoutOptionId, zM = PM < nM ? SM.loadoutOptionTiers[PM].loadoutTierCost : null, mM = null !== zM && rr(aM, zM), HM = SM.loadoutOptionId, JM = Gr();
      return (0, bM.jsxs)(bM.Fragment, {
        children: [(0, bM.jsx)(Dr, {
          icon: SM.loadoutOptionIcon,
          name: SM.loadoutOptionName,
          status: 0 === PM ? jM(`${wM}:loadoutLocked`) : nM > 1 ? jM(`${wM}:loadoutTier`, {
            tier: (0, cM.T)(PM)
          }) : null,
          locked: 0 === PM,
          equipped: QM
        }), (0, bM.jsx)("p", {
          className: "BoardDescription",
          children: SM.loadoutOptionDescription
        }), (0, bM.jsx)(pr, {
          option: SM
        }), (0, bM.jsxs)("div", {
          ref: JM("act", HM),
          className: "BoardActions",
          children: [null !== zM && (0, bM.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, bM.jsx)(gr, {
              cost: zM,
              loadout: aM
            }), (0, bM.jsx)(hM.p, {
              disabled: !mM || rM.pending,
              onClick: () => {
                iM.act(0 === PM ? "loadoutUnlock" : "loadoutUpgrade", HM)
              },
              children: 0 === PM ? jM(`${wM}:loadoutUnlock`) : jM(`${wM}:loadoutUpgrade`, {
                tier: (0, cM.T)(PM + 1)
              })
            })]
          }), null === zM && nM > 1 && (0, bM.jsx)("span", {
            className: "BoardHint",
            children: jM(`${wM}:loadoutMaxed`)
          }), PM > 0 && !QM && (0, bM.jsx)(hM.e, {
            disabled: rM.pending,
            onClick: () => {
              iM.act("loadoutEquip", HM)
            },
            children: jM(`${wM}:loadoutEquip`)
          })]
        })]
      })
    }

    function sr(MM) {
      let {
        view: rM,
        controller: iM,
        perk: OM
      } = MM;
      const {
        t: SM
      } = (0, LM.A)(), jM = rM.loadout, aM = Sr(jM), PM = OM.loadoutPerkId, nM = Gr();
      return (0, bM.jsxs)(bM.Fragment, {
        children: [(0, bM.jsx)(Dr, {
          icon: OM.loadoutPerkIcon,
          name: OM.loadoutPerkName,
          status: OM.loadoutPerkOwned ? null : SM(`${wM}:loadoutLocked`),
          locked: !OM.loadoutPerkOwned,
          equipped: OM.loadoutPerkEquipped
        }), (0, bM.jsx)("p", {
          className: "BoardDescription",
          children: OM.loadoutPerkDescription
        }), (0, bM.jsxs)("div", {
          ref: nM("act", PM),
          className: "BoardActions",
          children: [!OM.loadoutPerkOwned && (0, bM.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, bM.jsx)(gr, {
              cost: OM.loadoutPerkCost,
              loadout: jM
            }), (0, bM.jsx)(hM.p, {
              disabled: !rr(jM, OM.loadoutPerkCost) || rM.pending,
              onClick: () => {
                iM.act("loadoutUnlock", PM)
              },
              children: SM(`${wM}:loadoutUnlock`)
            })]
          }), OM.loadoutPerkOwned && !OM.loadoutPerkEquipped && (0, bM.jsx)(hM.e, {
            disabled: aM || rM.pending,
            onClick: () => {
              iM.act("loadoutEquip", PM)
            },
            children: SM(`${wM}:loadoutEquip`)
          }), OM.loadoutPerkOwned && !OM.loadoutPerkEquipped && aM && (0, bM.jsx)("span", {
            className: "BoardHint",
            children: SM(`${wM}:loadoutSocketsFullHint`)
          }), OM.loadoutPerkEquipped && (0, bM.jsx)(hM.V, {
            disabled: rM.pending,
            onClick: () => {
              iM.act("loadoutUnequip", PM)
            },
            children: SM(`${wM}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Dr(MM) {
      let {
        icon: rM,
        name: iM,
        status: OM,
        locked: SM,
        equipped: jM
      } = MM;
      const {
        t: aM
      } = (0, LM.A)();
      return (0, bM.jsxs)(kM, {
        icon: (0, bM.jsx)(uM, {
          itemName: rM
        }),
        name: iM,
        children: [null !== OM && (0, bM.jsx)("span", {
          className: QM()("LoadoutStatusText", {
            Locked: SM
          }),
          children: OM
        }), jM && (0, bM.jsx)("span", {
          className: "BoardBadge",
          children: aM(`${wM}:loadoutEquippedBadge`)
        })]
      })
    }

    function kr(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const OM = rM.loadout;
      if ("loadoutPerks" === rM.slot) {
        const MM = OM.loadoutPerks.find((MM => MM.loadoutPerkId === rM.selectedId));
        return (0, bM.jsx)("section", {
          className: "BoardDetail",
          children: MM && (0, bM.jsx)(sr, {
            view: rM,
            controller: iM,
            perk: MM
          })
        })
      }
      const SM = Or(OM, rM.slot),
        jM = SM.loadoutSlotOptions.find((MM => MM.loadoutOptionId === rM.selectedId));
      return (0, bM.jsx)("section", {
        className: "BoardDetail",
        children: jM && (0, bM.jsx)(Wr, {
          view: rM,
          controller: iM,
          slot: SM,
          option: jM
        })
      })
    }

    function Zr(MM) {
      let {
        owned: rM,
        total: iM
      } = MM;
      return iM <= 1 ? null : (0, bM.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: iM
        }, ((MM, iM) => (0, bM.jsx)("span", {
          className: QM()("LoadoutPip", {
            Filled: iM < rM
          })
        }, iM)))
      })
    }

    function or(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, LM.A)(), SM = rM.loadout, jM = Gr();
      return (0, bM.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": OM(`${wM}:loadoutKit`),
        children: [SM.loadoutSlots.map((MM => {
          const SM = MM.loadoutSlotOptions.find((rM => rM.loadoutOptionId === MM.loadoutSlotEquippedId));
          return (0, bM.jsxs)("button", {
            ref: jM("section", MM.loadoutSlotKind),
            type: "button",
            className: QM()("LoadoutKitSlot", {
              Selected: rM.slot === MM.loadoutSlotKind
            }),
            onClick: () => {
              iM.selectSlot(MM.loadoutSlotKind)
            },
            children: [(0, bM.jsx)("span", {
              className: "LoadoutKitIcon",
              children: SM && (0, bM.jsx)(uM, {
                itemName: SM.loadoutOptionIcon
              })
            }), (0, bM.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, bM.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, bM.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: OM(lr[MM.loadoutSlotKind])
                }), SM && (0, bM.jsx)(Zr, {
                  owned: SM.loadoutOptionOwnedTier,
                  total: SM.loadoutOptionTiers.length
                })]
              }), (0, bM.jsx)("span", {
                className: "LoadoutKitName",
                children: null === SM || void 0 === SM ? void 0 : SM.loadoutOptionName
              })]
            })]
          }, MM.loadoutSlotKind)
        })), (0, bM.jsx)(fr, {
          view: rM,
          controller: iM
        })]
      })
    }

    function fr(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, LM.A)(), SM = rM.loadout, jM = SM.loadoutPerks.filter((MM => MM.loadoutPerkEquipped)), aM = Gr();
      return (0, bM.jsxs)("button", {
        ref: aM("section", "loadoutPerks"),
        type: "button",
        className: QM()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === rM.slot
        }),
        onClick: () => {
          iM.selectSlot("loadoutPerks")
        },
        children: [(0, bM.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, bM.jsx)("span", {
            className: "LoadoutKitLabel",
            children: OM(lr.loadoutPerks)
          }), (0, bM.jsx)("span", {
            className: "LoadoutPerkCount",
            children: OM(`${wM}:loadoutPerkCount`, {
              equipped: String(jM.length),
              max: String(SM.loadoutMaxPerks)
            })
          })]
        }), (0, bM.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: SM.loadoutMaxPerks
          }, ((MM, rM) => {
            const iM = jM[rM];
            return (0, bM.jsxs)("span", {
              className: QM()("LoadoutSocket", {
                Filled: iM,
                Empty: !iM
              }),
              children: [(0, bM.jsx)("span", {
                className: "LoadoutSocketWell",
                children: iM && (0, bM.jsx)(uM, {
                  itemName: iM.loadoutPerkIcon
                })
              }), (0, bM.jsx)("span", {
                className: "LoadoutSocketName",
                children: iM ? iM.loadoutPerkName : OM(`${wM}:loadoutPerkSocketEmpty`)
              })]
            }, rM)
          }))
        })]
      })
    }

    function Yr(MM) {
      let {
        icon: rM,
        name: iM,
        selected: OM,
        equipped: SM,
        locked: jM,
        ownedTier: aM,
        tiers: PM,
        buttonRef: nM,
        onSelect: QM
      } = MM;
      const {
        t: zM
      } = (0, LM.A)();
      return (0, bM.jsxs)(DM, {
        icon: (0, bM.jsx)(uM, {
          itemName: rM
        }),
        name: iM,
        selected: OM,
        locked: jM,
        buttonRef: nM,
        onSelect: QM,
        children: [SM && (0, bM.jsx)("span", {
          className: "BoardBadge",
          children: zM(`${wM}:loadoutEquippedBadge`)
        }), jM && (0, bM.jsx)("span", {
          className: "BoardBadge Muted",
          children: zM(`${wM}:loadoutLocked`)
        }), !jM && (0, bM.jsx)(Zr, {
          owned: aM,
          total: PM
        })]
      })
    }

    function Nr(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const OM = rM.loadout,
        SM = Gr();
      if ("loadoutPerks" === rM.slot) return (0, bM.jsx)("div", {
        className: "BoardTiles",
        children: OM.loadoutPerks.map((MM => (0, bM.jsx)(Yr, {
          icon: MM.loadoutPerkIcon,
          name: MM.loadoutPerkName,
          selected: rM.selectedId === MM.loadoutPerkId,
          equipped: MM.loadoutPerkEquipped,
          locked: !MM.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: SM("LH", MM.loadoutPerkId),
          onSelect: () => {
            iM.select(MM.loadoutPerkId)
          }
        }, MM.loadoutPerkId)))
      });
      const jM = Or(OM, rM.slot);
      return (0, bM.jsx)("div", {
        className: "BoardTiles",
        children: jM.loadoutSlotOptions.map((MM => (0, bM.jsx)(Yr, {
          icon: MM.loadoutOptionIcon,
          name: MM.loadoutOptionName,
          selected: rM.selectedId === MM.loadoutOptionId,
          equipped: jM.loadoutSlotEquippedId === MM.loadoutOptionId,
          locked: 0 === MM.loadoutOptionOwnedTier,
          ownedTier: MM.loadoutOptionOwnedTier,
          tiers: MM.loadoutOptionTiers.length,
          buttonRef: SM("LH", MM.loadoutOptionId),
          onSelect: () => {
            iM.select(MM.loadoutOptionId)
          }
        }, MM.loadoutOptionId)))
      })
    }

    function Ar(MM) {
      let {
        loadout: rM
      } = MM;
      return (0, bM.jsx)(ZM, {
        coins: rM.loadoutCoins,
        children: rM.loadoutHeldParts.filter((MM => MM.loadoutHeldPartAmount > 0)).map((MM => (0, bM.jsx)(pM, {
          itemName: MM.loadoutHeldPartItem,
          amount: MM.loadoutHeldPartAmount
        }, MM.loadoutHeldPartCurrency)))
      })
    }

    function xr(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, zM.e)(mr, rM.getSnapshot()),
        {
          t: OM
        } = (0, LM.A)();
      if (null === iM.loadout) return null;
      const SM = iM.notice;
      return (0, bM.jsx)(br, {
        view: iM,
        onDismiss: rM.dismiss,
        children: (0, bM.jsxs)(gM, {
          open: iM.open,
          onDismiss: rM.dismiss,
          title: OM(`${wM}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, bM.jsx)(Ar, {
            loadout: iM.loadout
          }),
          statusRefused: null === SM || void 0 === SM ? void 0 : SM.loadoutNoticeRefused,
          status: (0, bM.jsxs)(bM.Fragment, {
            children: [(0, bM.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: OM(`${wM}:loadoutRadioBadge`)
            }), null !== SM && OM(`${wM}:${SM.loadoutNoticeKey}`, {
              name: SM.loadoutNoticeName,
              tier: (0, cM.T)(SM.loadoutNoticeTier),
              max: String(iM.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, bM.jsx)(or, {
            view: iM,
            controller: rM
          }), (0, bM.jsx)(Nr, {
            view: iM,
            controller: rM
          }), (0, bM.jsx)(kr, {
            view: iM,
            controller: rM
          })]
        })
      })
    }

    function vr(MM, rM, iM) {
      const OM = MM.locatorEntries.find((MM => MM.locatorEntryId === iM));
      if (!OM) return null;
      const SM = OM.locatorEntryName;
      if ("locatorDisarm" === rM) return OM.locatorEntryArmed ? {
        board: Fr(MM, null),
        notice: Br("locatorNoticeDisarmed", SM)
      } : null;
      if ("locatorArm" === rM) return OM.locatorEntryOwned && !OM.locatorEntryArmed ? {
        board: Fr(MM, iM),
        notice: Br("locatorNoticeArmed", SM)
      } : null;
      if (OM.locatorEntryOwned || MM.locatorCoins < OM.locatorEntryPrice) return null;
      const jM = Fr({
        ...MM,
        locatorCoins: MM.locatorCoins - OM.locatorEntryPrice
      }, iM);
      return {
        board: {
          ...jM,
          locatorEntries: jM.locatorEntries.map((MM => MM.locatorEntryId === iM ? {
            ...MM,
            locatorEntryOwned: !0
          } : MM))
        },
        notice: Br("locatorNoticeBought", SM)
      }
    }

    function Fr(MM, rM) {
      return {
        ...MM,
        locatorEntries: MM.locatorEntries.map((MM => {
          const iM = MM.locatorEntryId === rM;
          return MM.locatorEntryArmed === iM ? MM : {
            ...MM,
            locatorEntryArmed: iM
          }
        }))
      }
    }

    function Br(MM, rM) {
      return {
        locatorNoticeKey: MM,
        locatorNoticeRefused: !1,
        locatorNoticeName: rM
      }
    }
    const Xr = "containmentLocatorView";
    class Ir extends Mr {
      constructor(MM, rM, iM, OM) {
        super(MM, rM, iM, OM, "locator", vr), this.snapshot = this.buildSnapshot()
      }
      messageOpens(MM) {
        return MM.locatorMessageOpens
      }
      messageNotice(MM) {
        return MM.locatorNotice
      }
      openingSelection(MM) {
        var rM;
        const iM = MM.locatorEntries;
        return (null !== (rM = iM.find((MM => MM.locatorEntryArmed))) && void 0 !== rM ? rM : iM[0]).locatorEntryId
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
    const Kr = {
        locatorContained: `${wM}:locatorFlavourContained`,
        locatorEncountered: `${wM}:locatorFlavourEncountered`,
        locatorUnseen: `${wM}:locatorFlavourUnseen`
      },
      qr = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${wM}:locatorAttunedNormal`,
        codexHardOnly: `${wM}:locatorAttunedHard`
      };

    function Tr() {
      return (0, bM.jsx)(bM.Fragment, {
        children: Array.from({
          length: 5
        }, ((MM, rM) => (0, bM.jsx)("span", {
          className: "LocatorFly",
          children: (0, bM.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, rM)))
      })
    }

    function Vr(MM) {
      let {
        entry: rM
      } = MM;
      const {
        t: iM
      } = (0, LM.A)();
      return rM.locatorEntryArmed ? (0, bM.jsx)("span", {
        className: "BoardBadge Armed",
        children: iM(`${wM}:locatorArmedBadge`)
      }) : rM.locatorEntryOwned ? (0, bM.jsx)("span", {
        className: "BoardBadge",
        children: iM(`${wM}:locatorOwnedBadge`)
      }) : null
    }

    function cr(MM) {
      let {
        entry: rM,
        coins: iM,
        inTile: OM = !1
      } = MM;
      return (0, bM.jsx)(pM, {
        itemName: tM,
        amount: rM.locatorEntryPrice,
        sQ: iM,
        inTile: OM
      })
    }

    function Mi(MM) {
      let {
        view: rM,
        controller: iM,
        entry: OM
      } = MM;
      const {
        t: SM
      } = (0, LM.A)(), jM = OM.locatorEntryId, aM = rM.locators.locatorEntries.find((MM => MM.locatorEntryArmed && MM !== OM));
      return (0, bM.jsxs)("div", {
        className: "BoardActions",
        children: [OM.locatorEntryArmed && (0, bM.jsx)(hM.V, {
          disabled: rM.pending,
          onClick: () => {
            iM.act("locatorDisarm", jM)
          },
          children: SM(`${wM}:locatorDisarm`)
        }), OM.locatorEntryOwned && !OM.locatorEntryArmed && (0, bM.jsx)(hM.e, {
          disabled: rM.pending,
          onClick: () => {
            iM.act("locatorArm", jM)
          },
          children: SM(`${wM}:locatorArm`)
        }), !OM.locatorEntryOwned && (0, bM.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, bM.jsx)(cr, {
            entry: OM,
            coins: rM.locators.locatorCoins
          }), (0, bM.jsx)(hM.p, {
            disabled: rM.locators.locatorCoins < OM.locatorEntryPrice || rM.pending,
            onClick: () => {
              iM.act("locatorBuy", jM)
            },
            children: SM(`${wM}:locatorBuy`)
          })]
        }), aM && !OM.locatorEntryArmed && (0, bM.jsx)("span", {
          className: "BoardHint",
          children: SM(`${wM}:locatorReplacesHint`, {
            name: aM.locatorEntryName
          })
        })]
      })
    }

    function ri(MM) {
      let {
        entry: rM
      } = MM;
      return "locatorUnseen" === rM.locatorEntryStanding ? (0, bM.jsx)(uM, {
        itemName: "Compass"
      }) : (0, bM.jsx)(RM, {
        anomalyId: rM.locatorEntryId,
        caught: "locatorContained" === rM.locatorEntryStanding
      })
    }

    function ii(MM) {
      let {
        view: rM,
        controller: iM,
        entry: OM
      } = MM;
      const {
        t: SM
      } = (0, LM.A)(), jM = qr[OM.locatorEntryDifficulty];
      return (0, bM.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, bM.jsxs)("div", {
          className: QM()("LocatorLabel", {
            Armed: OM.locatorEntryArmed
          }),
          children: [(0, bM.jsx)(kM, {
            icon: (0, bM.jsx)(ri, {
              entry: OM
            }),
            name: SM(`${wM}:locatorName`, {
              name: OM.locatorEntryName
            }),
            children: (0, bM.jsx)(Vr, {
              entry: OM
            })
          }), (0, bM.jsx)("p", {
            className: "BoardDescription",
            children: SM(OM.locatorEntryArmed ? `${wM}:locatorFlavourArmed` : Kr[OM.locatorEntryStanding])
          }), null !== jM && (0, bM.jsx)("p", {
            className: "LocatorAttuned",
            children: SM(jM)
          }), (0, bM.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: SM(`${wM}:locatorUsage`)
          })]
        }), (0, bM.jsx)(Mi, {
          view: rM,
          controller: iM,
          entry: OM
        })]
      })
    }

    function Oi(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, zM.e)(Xr, rM.getSnapshot()),
        {
          t: OM
        } = (0, LM.A)(),
        SM = iM.locators;
      if (null === SM) return null;
      const jM = SM.locatorEntries.find((MM => MM.locatorEntryId === iM.selectedId)),
        aM = iM.notice;
      return (0, bM.jsxs)(gM, {
        open: iM.open,
        onDismiss: rM.dismiss,
        title: OM(`${wM}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, bM.jsx)(Tr, {}),
        headerExtra: (0, bM.jsx)(ZM, {
          coins: SM.locatorCoins
        }),
        statusRefused: null === aM || void 0 === aM ? void 0 : aM.locatorNoticeRefused,
        status: (0, bM.jsxs)(bM.Fragment, {
          children: [(0, bM.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: OM(`${wM}:locatorKeeperName`)
          }), null !== aM && OM(`${wM}:${aM.locatorNoticeKey}`, {
            name: aM.locatorNoticeName
          })]
        }),
        children: [(0, bM.jsx)("div", {
          className: "BoardTiles",
          children: SM.locatorEntries.map((MM => (0, bM.jsxs)(DM, {
            icon: (0, bM.jsx)(ri, {
              entry: MM
            }),
            name: MM.locatorEntryName,
            selected: MM === jM,
            locked: !1,
            className: QM()("LocatorTag", {
              Armed: MM.locatorEntryArmed
            }),
            onSelect: () => {
              rM.select(MM.locatorEntryId)
            },
            children: [(0, bM.jsx)(Vr, {
              entry: MM
            }), !MM.locatorEntryOwned && (0, bM.jsx)(cr, {
              entry: MM,
              coins: SM.locatorCoins,
              inTile: !0
            })]
          }, MM.locatorEntryId)))
        }), (0, bM.jsx)(ii, {
          view: iM,
          controller: rM,
          entry: jM
        })]
      })
    }

    function Si(MM) {
      let {
        loadout: rM,
        codex: iM,
        locator: OM
      } = MM;
      return (0, bM.jsxs)(bM.Fragment, {
        children: [(0, bM.jsx)(xr, {
          controller: rM
        }), (0, bM.jsx)(VM, {
          controller: iM
        }), (0, bM.jsx)(Oi, {
          controller: OM
        })]
      })
    }
    var ji = iM(39578);
    class ai {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = MM, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new ji.e({
          spacingMs: 0,
          now: rM
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(MM, rM) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, rM(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(MM), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const MM of this.listeners) MM()
      }
    }
    var Pi = iM(39561);
    const ni = new Map([
      ["npc_general", Jr],
      ["npc_tentacle_guy", Pi]
    ]);

    function Qi(MM) {
      const rM = ni.get(MM);
      if (void 0 === rM) return null;
      const iM = document.createElement("img");
      return iM.src = rM, iM.alt = "", iM.draggable = !1, iM.style.imageRendering = "pixelated", iM
    }
    const zi = function() {
      let MM, rM = !1,
        iM = null,
        nM = null;
      const QM = [],
        zM = MM => {
          for (const rM of QM) rM !== MM && rM.close();
          (0, PM.w)()
        },
        LM = MM => {
          MM && (0, PM.n)()
        },
        mM = new ai((rM => {
          MM.sendCommand(rM)
        })),
        HM = new Hr((MM => {
          aM.i.Tz(mr, MM, !0)
        }), zM, LM, mM),
        hM = new YM((MM => {
          aM.i.Tz(fM, MM, !0)
        }), zM, LM),
        JM = new Ir((MM => {
          aM.i.Tz(Xr, MM, !0)
        }), zM, LM, mM);
      QM.push(HM, hM, JM);
      return {
        onCreate: rM => {
          MM = rM, iM = (0, PM.C)(null, {
            content: (0, OM.createElement)(Si, {
              loadout: HM,
              codex: hM,
              locator: JM
            }),
            onClose: () => {
              for (const MM of QM) MM.close()
            }
          }), nM = (0, jM.e)(Qi)
        },
        onReceivedMessageFromServer: (MM, rM) => {
          "containmentLoadout" === MM ? HM.GL(rM) : "containmentLoadoutClose" === MM ? HM.isOpen() && (HM.close(), (0, PM.k)()) : "containmentCodex" === MM ? hM.GL(rM) : "containmentLocator" === MM && JM.GL(rM)
        },
        bL: () => {
          rM || SM.d.get("loadingOverlayVisible") || (rM = !0, MM.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var MM, rM;
          null === (MM = iM) || void 0 === MM || MM(), iM = null, null === (rM = nM) || void 0 === rM || rM(), nM = null;
          for (const iM of QM) iM.dispose();
          mM.dispose()
        }
      }
    }
  },
  40398: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40401: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40405: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40408: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40412: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40419: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40427: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40433: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40435: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40443: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40445: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40451: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40459: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40464: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40469: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40471: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  40478: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  40485: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  40489: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  40496: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  39561: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);