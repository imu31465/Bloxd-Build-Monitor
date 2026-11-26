export const id = 15;
export const ids = [15];
export const modules = {
  39728: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    const JV = 4,
      YV = 12e3,
      UV = 1e3;
    class yV {
      constructor() {
        let {
          limit: VV = JV,
          windowMs: eV = YV,
          spacingMs: xV = UV,
          now: yV = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = VV, this.windowMs = eV, this.spacingMs = xV, this.now = yV
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const VV of this.priority) VV.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const VV = this.now();
        this.sent.push(VV), this.lastSentAt = VV, this.schedule(), this.notify()
      }
      addPriority(VV) {
        return this.priority.add(VV), () => {
          this.priority.delete(VV)
        }
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const VV of this.priority)
          if (VV.waiting()) return !0;
        return !1
      }
      prune() {
        const VV = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= VV;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const VV = this.now(),
          eV = this.lastSentAt + this.spacingMs,
          xV = Math.min(eV > VV ? eV : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        xV !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, xV - VV)))
      }
      notify() {
        for (const VV of this.listeners) VV()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  39687: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      constructor(VV, eV, xV) {
        this.QZ = VV, this.beforeOpen = eV, this.afterClose = xV, this.open = !1, this.ik = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.ik && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(VV) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(VV)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.ik = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.ik || (this.snapshot = this.buildSnapshot(), this.QZ(this.snapshot))
      }
    }
  },
  40517: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => wx
    });
    var JV = xV(62);
    var YV = xV(27),
      UV = xV(2033),
      yV = xV(32),
      pV = xV(37762),
      QV = xV(1146),
      nV = xV.n(QV),
      wV = xV(1542),
      ZV = xV(1220),
      vV = xV(5011),
      rV = xV(1435),
      kV = xV(1551),
      bV = xV(2039),
      EV = xV(1446),
      BV = xV(2021),
      jV = xV(2100),
      qV = xV(220);
    const tV = xV(40525),
      FV = Object.fromEntries(tV.keys().map((VV => [VV.replace(/^\.\/(.*)\.webp$/, "$1"), tV(VV)]))),
      TV = new Set;

    function PV(VV, eV) {
      const xV = eV ? VV : `${VV}-uncaught`,
        JV = (0, qV.b)(FV, xV);
      return void 0 !== JV || TV.has(xV) || (TV.add(xV), console.warn(`Containment Breach has no mugshot ${xV}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), JV
    }
    var AV = xV(1321);
    const NV = "containmentBreach",
      XV = "Gold Coin";

    function MV(VV) {
      let {
        open: eV,
        onDismiss: xV,
        title: JV,
        className: YV,
        decor: UV,
        headerExtra: yV,
        status: pV,
        statusRefused: QV = !1,
        children: wV
      } = VV;
      const ZV = `${YV}Title`;
      return (0, AV.jsx)(vV.e, {
        show: eV,
        close: xV,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, AV.jsxs)("section", {
          className: nV()("ContainmentBoardPanel", YV),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": ZV,
          children: [UV && (0, AV.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: UV
          }), (0, AV.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, AV.jsx)("h2", {
              id: ZV,
              className: "VisuallyHidden",
              children: JV
            }), yV, (0, AV.jsx)(kV.k, {
              onClick: xV
            })]
          }), (0, AV.jsx)("div", {
            className: "BoardBody",
            children: wV
          }), void 0 !== pV && (0, AV.jsx)("footer", {
            className: nV()("BoardStatus", {
              Refused: QV
            }),
            children: pV
          })]
        })
      })
    }

    function zV(VV) {
      let {
        itemName: eV
      } = VV;
      return (0, AV.jsx)(bV.e, {
        itemName: eV,
        amount: 0
      })
    }

    function GV(VV) {
      let {
        anomalyId: eV,
        caught: xV
      } = VV;
      const YV = (0, JV.useRef)(null);
      return (0, rV.e)(YV, !xV), (0, AV.jsx)("span", {
        ref: YV,
        className: nV()("BoardMugshot", {
          Uncaught: !xV
        }),
        children: (0, AV.jsx)("img", {
          src: PV(eV, xV),
          alt: "",
          draggable: !1
        })
      })
    }

    function WV(VV) {
      let {
        itemName: eV,
        amount: xV,
        hn: JV,
        inTile: YV = !1
      } = VV;
      return (0, AV.jsx)(EV.d, {
        delayShow: 200,
        hoverOnly: YV,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, AV.jsx)(gV, {
          itemName: eV,
          amount: xV,
          hn: JV
        }),
        children: (0, AV.jsxs)("span", {
          className: nV()("BoardChip", {
            Short: void 0 !== JV && JV < xV
          }),
          children: [(0, AV.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, AV.jsx)(zV, {
              itemName: eV
            })
          }), xV.toLocaleString()]
        })
      })
    }
    const RV = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function gV(VV) {
      var eV;
      let {
        itemName: xV,
        amount: JV,
        hn: YV
      } = VV;
      const {
        t: UV
      } = (0, ZV.A)(), yV = (0, jV.e)("itemInfo", (VV => VV[xV])), {
        lore: pV,
        droppedBy: QV
      } = function(VV) {
        if ("string" !== typeof VV) return {
          lore: VV,
          droppedBy: null
        };
        const eV = RV.exec(VV);
        return null === eV ? {
          lore: VV,
          droppedBy: null
        } : {
          lore: "" === eV[1] ? void 0 : eV[1],
          droppedBy: eV[2]
        }
      }(null === yV || void 0 === yV ? void 0 : yV.description);
      return (0, AV.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, AV.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, AV.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, AV.jsx)(zV, {
              itemName: xV
            })
          }), (0, AV.jsx)(BV.b, {
            text: null !== (eV = null === yV || void 0 === yV ? void 0 : yV.displayName) && void 0 !== eV ? eV : xV,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== pV || null !== QV) && (0, AV.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== pV && (0, AV.jsx)(BV.b, {
            text: pV,
            className: "BoardChipTooltipDescription"
          }), null !== QV && (0, AV.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, AV.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: UV(`${NV}:chipDroppedBy`)
            }), QV]
          })]
        }), void 0 !== YV && (0, AV.jsxs)("div", {
          className: nV()("BoardChipTooltipHeld", {
            Short: YV < JV
          }),
          children: [(0, AV.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: UV(`${NV}:chipYouHave`)
          }), (0, AV.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, AV.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: YV.toLocaleString()
            }), ` / ${JV.toLocaleString()}`]
          }), (0, AV.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, AV.jsx)("span", {
              style: {
                width: (JV > 0 ? 100 * Math.min(1, YV / JV) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function DV(VV) {
      let {
        icon: eV,
        name: xV,
        selected: JV,
        locked: YV,
        className: UV,
        buttonRef: yV,
        onSelect: pV,
        children: QV
      } = VV;
      return (0, AV.jsxs)("button", {
        ref: yV,
        type: "button",
        className: nV()("BoardTile", UV, {
          Selected: JV,
          Locked: YV
        }),
        onClick: pV,
        children: [(0, AV.jsx)("span", {
          className: "BoardTileIcon",
          children: eV
        }), (0, AV.jsx)("span", {
          className: "BoardTileName",
          children: xV
        }), QV]
      })
    }

    function iV(VV) {
      let {
        icon: eV,
        name: xV,
        children: JV
      } = VV;
      return (0, AV.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, AV.jsx)("span", {
          className: "BoardDetailIcon",
          children: eV
        }), (0, AV.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, AV.jsx)("h3", {
            children: xV
          }), (0, AV.jsx)("span", {
            className: "BoardDetailStatus",
            children: JV
          })]
        })]
      })
    }

    function CV(VV) {
      let {
        coins: eV,
        children: xV
      } = VV;
      return (0, AV.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, AV.jsx)(WV, {
          itemName: XV,
          amount: eV
        }), xV]
      })
    }
    var aV = xV(39687);
    const oV = "containmentCodexView";
    class cV extends aV.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = VV => {
          this.selectedId = VV, this.emit()
        }
      }
      RZ(VV) {
        this.entries = VV.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const hV = {
        codexAnyDifficulty: `${NV}:codexNeedsAny`,
        codexNormalOnly: `${NV}:codexNeedsNormal`,
        codexHardOnly: `${NV}:codexNeedsHard`
      },
      lV = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      LV = {
        codexContained: `${NV}:codexContainedBadge`,
        codexEncountered: `${NV}:codexEncounteredBadge`,
        codexUnidentified: `${NV}:codexUnidentifiedBadge`
      },
      fV = ["94%", "81%", "88%", "46%", "72%"];

    function mV(VV) {
      let {
        entry: eV
      } = VV;
      const {
        t: xV
      } = (0, ZV.A)();
      return (0, AV.jsx)("span", {
        className: nV()("BoardBadge", lV[eV.codexEntryState]),
        children: xV(LV[eV.codexEntryState])
      })
    }

    function KV(VV) {
      const {
        t: eV
      } = (0, ZV.A)();
      return "codexUnidentified" === VV.codexEntryState ? eV(`${NV}:codexUnidentifiedName`) : VV.codexEntryName
    }

    function HV(VV) {
      let {
        entry: eV
      } = VV;
      return "codexUnidentified" === eV.codexEntryState ? (0, AV.jsx)(zV, {
        itemName: "Book"
      }) : (0, AV.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, AV.jsx)(GV, {
          anomalyId: eV.codexEntryId,
          caught: "codexContained" === eV.codexEntryState
        }), (0, AV.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function uV(VV) {
      let {
        entry: eV,
        selected: xV,
        onSelect: JV
      } = VV;
      const YV = "codexUnidentified" === eV.codexEntryState;
      return (0, AV.jsxs)(DV, {
        icon: (0, AV.jsx)(HV, {
          entry: eV
        }),
        name: KV(eV),
        selected: xV,
        locked: YV,
        className: nV()("CodexFolder", lV[eV.codexEntryState]),
        onSelect: () => {
          JV(eV.codexEntryId)
        },
        children: [!YV && (0, AV.jsx)(mV, {
          entry: eV
        }), YV && (0, AV.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function sV(VV) {
      let {
        count: eV
      } = VV;
      const xV = [];
      for (let JV = Math.min(eV, 25); JV > 0; JV -= 5) xV.push(Math.min(JV, 5));
      return (0, AV.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: xV.map(((VV, eV) => (0, AV.jsx)("span", {
          className: nV()("CodexTallyGroup", {
            Gate: 5 === VV
          }),
          children: Array.from({
            length: Math.min(VV, 4)
          }, ((VV, eV) => (0, AV.jsx)("span", {
            className: "CodexTallyMark"
          }, eV)))
        }, eV)))
      })
    }

    function SV(VV) {
      let {
        contained: eV,
        total: xV
      } = VV;
      const {
        t: JV
      } = (0, ZV.A)();
      return (0, AV.jsxs)("div", {
        className: "CodexProgress",
        children: [JV(`${NV}:codexProgress`, {
          contained: String(eV),
          total: String(xV)
        }), (0, AV.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, AV.jsx)("span", {
            style: {
              width: eV / xV * 100 + "%"
            }
          })
        })]
      })
    }

    function IV(VV) {
      let {
        entry: eV,
        fileNumber: xV
      } = VV;
      const {
        t: JV
      } = (0, ZV.A)(), YV = "codexContained" === eV.codexEntryState;
      return (0, AV.jsx)("section", {
        className: "BoardDetail",
        children: (0, AV.jsxs)("article", {
          className: nV()("CodexDossier", lV[eV.codexEntryState]),
          children: [(0, AV.jsx)("span", {
            className: "CodexFileNumber",
            children: JV(`${NV}:codexFileNumber`, {
              number: String(xV).padStart(3, "0")
            })
          }), (0, AV.jsx)(iV, {
            icon: (0, AV.jsx)(HV, {
              entry: eV
            }),
            name: KV(eV),
            children: (0, AV.jsx)(mV, {
              entry: eV
            })
          }), YV && (0, AV.jsxs)(AV.Fragment, {
            children: [(0, AV.jsx)("p", {
              className: "BoardDescription",
              children: eV.codexEntryLore
            }), (0, AV.jsxs)("p", {
              className: "CodexTally",
              children: [JV(`${NV}:codexContainments`, {
                count: String(eV.codexEntryContainedCount)
              }), (0, AV.jsx)(sV, {
                count: eV.codexEntryContainedCount
              })]
            }), (0, AV.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: JV(`${NV}:codexContainedBadge`)
            })]
          }), !YV && (0, AV.jsxs)(AV.Fragment, {
            children: [(0, AV.jsxs)("div", {
              className: "CodexRedaction",
              children: [fV.map((VV => (0, AV.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: VV
                }
              }, VV))), (0, AV.jsx)("p", {
                className: "CodexRedacted",
                children: JV(`${NV}:codexRedacted`)
              })]
            }), "" !== eV.codexEntryHint && (0, AV.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, AV.jsx)("h4", {
                children: JV(`${NV}:codexHintLabel`)
              }), (0, AV.jsx)("p", {
                children: eV.codexEntryHint
              })]
            }), (0, AV.jsx)("p", {
              className: "CodexClearance",
              children: JV(hV[eV.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function dV(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, wV.j)(oV, eV.getSnapshot()),
        {
          t: JV
        } = (0, ZV.A)();
      if (0 === xV.entries.length) return null;
      const YV = xV.entries.find((VV => VV.codexEntryId === xV.selectedId)),
        UV = xV.entries.filter((VV => "codexContained" === VV.codexEntryState)).length,
        yV = xV.entries.map((VV => VV.codexEntryId)).sort().indexOf(YV.codexEntryId) + 1;
      return (0, AV.jsxs)(MV, {
        open: xV.open,
        onDismiss: eV.dismiss,
        title: JV(`${NV}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, AV.jsx)(SV, {
          contained: UV,
          total: xV.entries.length
        }),
        children: [(0, AV.jsx)("div", {
          className: "BoardTiles",
          children: xV.entries.map((VV => (0, AV.jsx)(uV, {
            entry: VV,
            selected: VV === YV,
            onSelect: eV.select
          }, VV.codexEntryId)))
        }), (0, AV.jsx)(IV, {
          entry: YV,
          fileNumber: yV
        })]
      })
    }
    var OV = xV(375);
    class Ve extends aV.c {
      constructor(VV, eV, xV, JV, YV, UV) {
        super(VV, eV, xV), this.pacer = JV, this.command = YV, this.predict = UV, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = VV => {
          this.selectedId = VV, this.emit()
        }, this.act = (VV, eV) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${VV} ${eV}`, this.rollBack)) return;
          const xV = this.predict(this.board, VV, eV);
          null !== xV && (this.board = xV.board, this.notice = xV.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = JV.subscribe((() => {
          this.emit()
        }))
      }
      RZ(VV) {
        const eV = this.messageOpens(VV);
        if (eV && this.open) return this.board === this.confirmed && (this.board = VV), this.confirmed = VV, void this.emit();
        if (this.board = VV, this.confirmed = VV, this.pacer.onReply(), eV) return this.notice = null, this.selectedId = this.openingSelection(VV), void this.show();
        const xV = this.messageNotice(VV);
        null !== xV && (this.notice = xV), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function ee(VV, eV) {
      return VV.loadoutCoins >= eV.loadoutCostCoins && eV.loadoutCostParts.every((eV => function(VV, eV) {
        return xe(VV, eV).loadoutHeldPartAmount
      }(VV, eV.loadoutPartCurrency) >= eV.loadoutPartAmount))
    }

    function xe(VV, eV) {
      return VV.loadoutHeldParts.find((VV => VV.loadoutHeldPartCurrency === eV))
    }

    function Je(VV, eV) {
      return VV.loadoutSlots.find((VV => VV.loadoutSlotKind === eV))
    }

    function Ye(VV) {
      return VV.loadoutPerks.filter((VV => VV.loadoutPerkEquipped)).length >= VV.loadoutMaxPerks
    }

    function Ue(VV, eV, xV) {
      for (const YV of VV.loadoutSlots) {
        const JV = YV.loadoutSlotOptions.find((VV => VV.loadoutOptionId === xV));
        if (JV) return "loadoutArmour" === YV.loadoutSlotKind ? pe(VV, YV, JV, eV) : ye(VV, YV, JV, eV)
      }
      const JV = VV.loadoutPerks.find((VV => VV.loadoutPerkId === xV));
      return JV ? function(VV, eV, xV) {
        const JV = eV.loadoutPerkOwned,
          YV = eV.loadoutPerkEquipped,
          UV = eV.loadoutPerkName,
          yV = Ye(VV);
        if ("loadoutUnlock" === xV) {
          if (JV || !ee(VV, eV.loadoutPerkCost)) return null;
          const xV = {
            ...eV,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !yV
          };
          return {
            board: ne(we(VV, eV.loadoutPerkCost), xV),
            notice: Ze(yV ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", UV)
          }
        }
        if ("loadoutUpgrade" === xV || !JV || "loadoutEquip" === xV === YV || !YV && yV) return null;
        return {
          board: ne(VV, {
            ...eV,
            loadoutPerkEquipped: !YV
          }),
          notice: Ze(YV ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", UV)
        }
      }(VV, JV, eV) : null
    }

    function ye(VV, eV, xV, JV) {
      const YV = xV.loadoutOptionOwnedTier,
        UV = xV.loadoutOptionName;
      if ("loadoutEquip" === JV) return 0 === YV ? null : {
        board: Qe(VV, eV, xV.loadoutOptionId, null),
        notice: Ze("loadoutNoticeEquipped", UV)
      };
      const yV = "loadoutUnlock" === JV;
      if (yV && 0 !== YV || "loadoutUpgrade" === JV && (0 === YV || YV >= xV.loadoutOptionTiers.length) || "loadoutUnequip" === JV) return null;
      const pV = xV.loadoutOptionTiers[YV].loadoutTierCost;
      if (!ee(VV, pV)) return null;
      const QV = {
          ...xV,
          loadoutOptionOwnedTier: YV + 1
        },
        nV = yV ? xV.loadoutOptionId : eV.loadoutSlotEquippedId;
      return {
        board: Qe(we(VV, pV), eV, nV, QV),
        notice: yV ? Ze("loadoutNoticeUnlocked", UV) : Ze("loadoutNoticeUpgraded", UV, YV + 1)
      }
    }

    function pe(VV, eV, xV, JV) {
      const YV = xV.loadoutOptionOwnedTier > 0,
        UV = xV.loadoutOptionName;
      if ("loadoutEquip" === JV && YV) return {
        board: Qe(VV, eV, xV.loadoutOptionId, null),
        notice: Ze("loadoutNoticeEquipped", UV)
      };
      const yV = xV.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== JV || YV || !ee(VV, yV) ? null : {
        board: Qe(we(VV, yV), eV, xV.loadoutOptionId, {
          ...xV,
          loadoutOptionOwnedTier: 1
        }),
        notice: Ze("loadoutNoticeUnlocked", UV)
      }
    }

    function Qe(VV, eV, xV, JV) {
      const YV = {
        ...eV,
        loadoutSlotEquippedId: xV,
        loadoutSlotOptions: eV.loadoutSlotOptions.map((VV => null !== JV && VV.loadoutOptionId === JV.loadoutOptionId ? JV : VV))
      };
      return {
        ...VV,
        loadoutSlots: VV.loadoutSlots.map((VV => VV === eV ? YV : VV))
      }
    }

    function ne(VV, eV) {
      return {
        ...VV,
        loadoutPerks: VV.loadoutPerks.map((VV => VV.loadoutPerkId === eV.loadoutPerkId ? eV : VV))
      }
    }

    function we(VV, eV) {
      return {
        ...VV,
        loadoutCoins: VV.loadoutCoins - eV.loadoutCostCoins,
        loadoutHeldParts: VV.loadoutHeldParts.map((VV => {
          const xV = eV.loadoutCostParts.find((eV => eV.loadoutPartCurrency === VV.loadoutHeldPartCurrency));
          return xV ? {
            ...VV,
            loadoutHeldPartAmount: VV.loadoutHeldPartAmount - xV.loadoutPartAmount
          } : VV
        }))
      }
    }

    function Ze(VV, eV) {
      return {
        loadoutNoticeKey: VV,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: eV,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const ve = "containmentLoadoutView";
    class re extends Ve {
      constructor(VV, eV, xV, JV) {
        super(VV, eV, xV, JV, "loadout", Ue), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = VV => {
          this.slot = VV, this.selectedId = ke(this.board, VV), this.emit()
        }
      }
      messageOpens(VV) {
        return VV.loadoutMessageOpens
      }
      messageNotice(VV) {
        return VV.loadoutNotice
      }
      openingSelection(VV) {
        return ke(VV, this.slot)
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

    function ke(VV, eV) {
      if ("loadoutPerks" === eV) {
        var xV;
        const eV = VV.loadoutPerks;
        return (null !== (xV = eV.find((VV => VV.loadoutPerkEquipped))) && void 0 !== xV ? xV : eV[0]).loadoutPerkId
      }
      return Je(VV, eV).loadoutSlotEquippedId
    }
    const be = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Ee = xV(38067),
      Be = xV(1309);
    const je = {
        loadoutPrimary: `${NV}:loadoutSlotPrimary`,
        loadoutSecondary: `${NV}:loadoutSlotSecondary`,
        loadoutOffensive: `${NV}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${NV}:loadoutSlotSelfHelp`,
        loadoutArmour: `${NV}:loadoutSlotArmour`,
        loadoutPerks: `${NV}:loadoutSlotPerks`
      },
      qe = {
        section: "right",
        Pr: "bottom",
        act: "top"
      },
      te = (0, JV.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Fe() {
      const {
        step: VV,
        targetRef: eV
      } = (0, JV.useContext)(te);
      return (xV, JV) => (null === VV || void 0 === VV ? void 0 : VV.kind) === xV && VV.id === JV ? eV : void 0
    }

    function Te(VV, eV) {
      const xV = eV.loadoutTargetId;
      if ("loadoutPerks" === eV.loadoutTargetSection) {
        const eV = VV.loadoutPerks.find((VV => VV.loadoutPerkId === xV));
        return {
          name: eV.loadoutPerkName,
          owned: eV.loadoutPerkOwned,
          equipped: eV.loadoutPerkEquipped
        }
      }
      const JV = Je(VV, eV.loadoutTargetSection),
        YV = JV.loadoutSlotOptions.find((VV => VV.loadoutOptionId === xV));
      return {
        name: YV.loadoutOptionName,
        owned: YV.loadoutOptionOwnedTier > 0,
        equipped: JV.loadoutSlotEquippedId === xV
      }
    }

    function Pe(VV, eV, xV, JV) {
      const [YV, UV] = VV(`${NV}:${eV}`, {
        [xV]: "\x01"
      }).split("\x01");
      return (0, AV.jsxs)(AV.Fragment, {
        children: [YV, (0, AV.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: JV
        }), UV]
      })
    }

    function Ae(VV) {
      let {
        view: eV,
        onDismiss: xV,
        children: YV
      } = VV;
      const {
        t: UV
      } = (0, ZV.A)(), yV = eV.loadout, pV = eV.open ? yV.loadoutWalkthrough.map((VV => ({
        target: VV,
        info: Te(yV, VV)
      }))).find((VV => {
        let {
          info: eV
        } = VV;
        return !eV.equipped
      })) : void 0;
      let QV = null,
        nV = null;
      if (void 0 !== pV) {
        const {
          target: VV,
          info: xV
        } = pV;
        eV.slot !== VV.loadoutTargetSection ? (QV = {
          kind: "section",
          id: VV.loadoutTargetSection
        }, nV = Pe(UV, "loadoutWalkthroughSection", "section", UV(je[VV.loadoutTargetSection]))) : eV.selectedId !== VV.loadoutTargetId ? (QV = {
          kind: "Pr",
          id: VV.loadoutTargetId
        }, nV = Pe(UV, "loadoutWalkthroughPick", "name", xV.name)) : (QV = {
          kind: "act",
          id: VV.loadoutTargetId
        }, nV = Pe(UV, xV.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", xV.name))
      }
      const wV = null === QV ? null : function(VV) {
          return `${VV.kind}:${VV.id}`
        }(QV),
        [vV, rV] = (0, JV.useState)(null),
        kV = (0, JV.useCallback)((VV => {
          rV((eV => null !== VV ? {
            key: wV,
            node: VV
          } : (null === eV || void 0 === eV ? void 0 : eV.key) === wV ? null : eV))
        }), [wV]),
        bV = null !== wV && (null === vV || void 0 === vV ? void 0 : vV.key) === wV ? vV.node : null;
      return (0, AV.jsxs)(te.Provider, {
        value: {
          step: QV,
          targetRef: kV
        },
        children: [YV, null !== QV && null !== bV && (0, AV.jsx)(Ne, {
          target: bV,
          placement: qe[QV.kind],
          onDismiss: xV,
          children: nV
        }, wV)]
      })
    }

    function Ne(VV) {
      let {
        target: eV,
        placement: xV,
        onDismiss: YV,
        children: UV
      } = VV;
      const {
        t: yV
      } = (0, ZV.A)(), pV = (0, JV.useRef)(eV);
      return pV.current = eV, (0, Be.s)("popup", pV, YV), (0, AV.jsxs)(Ee.h, {
        target: eV,
        placement: xV,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, AV.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, AV.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: be,
            alt: "",
            draggable: !1
          }), (0, AV.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: yV(`${NV}:operatorName`)
          }), (0, AV.jsx)(kV.k, {
            onClick: YV,
            ariaLabel: yV(`${NV}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, AV.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: UV
        })]
      })
    }
    const Xe = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Me(VV) {
      let {
        cost: eV,
        loadout: xV
      } = VV;
      const {
        t: JV
      } = (0, ZV.A)();
      return eV.loadoutCostCoins <= 0 && 0 === eV.loadoutCostParts.length ? (0, AV.jsx)("span", {
        className: "LoadoutCost",
        children: JV(`${NV}:loadoutFree`)
      }) : (0, AV.jsxs)("span", {
        className: "LoadoutCost",
        children: [eV.loadoutCostCoins > 0 && (0, AV.jsx)(WV, {
          itemName: XV,
          amount: eV.loadoutCostCoins,
          hn: xV.loadoutCoins
        }), eV.loadoutCostParts.map((VV => {
          const eV = xe(xV, VV.loadoutPartCurrency);
          return (0, AV.jsx)(WV, {
            itemName: eV.loadoutHeldPartItem,
            amount: VV.loadoutPartAmount,
            hn: eV.loadoutHeldPartAmount
          }, VV.loadoutPartCurrency)
        }))]
      })
    }
    const ze = {
      loadoutStatFireRate: `${NV}:loadoutUnitPerMinute`,
      loadoutStatReload: `${NV}:loadoutUnitSeconds`,
      loadoutStatResupply: `${NV}:loadoutUnitSeconds`
    };

    function Ge(VV) {
      return "loadoutStatPotency" === VV.loadoutStatKind ? (0, OV.O)(VV.loadoutStatValue) : String(VV.loadoutStatValue)
    }

    function We(VV) {
      var eV;
      let {
        option: xV
      } = VV;
      const {
        t: JV
      } = (0, ZV.A)(), YV = xV.loadoutOptionTiers, UV = null === (eV = YV[0]) || void 0 === eV ? void 0 : eV.loadoutTierStats.map((VV => VV.loadoutStatKind));
      if (!UV || 0 === UV.length) return null;
      const yV = xV.loadoutOptionOwnedTier,
        pV = (VV, eV) => {
          var xV;
          return null === (xV = YV[VV]) || void 0 === xV ? void 0 : xV.loadoutTierStats.find((VV => VV.loadoutStatKind === eV))
        };
      return (0, AV.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, AV.jsx)("thead", {
          children: (0, AV.jsxs)("tr", {
            children: [(0, AV.jsx)("th", {}), YV.map(((VV, eV) => (0, AV.jsx)("th", {
              className: nV()({
                Current: eV + 1 === yV,
                Next: eV === yV
              }),
              children: JV(`${NV}:loadoutTier`, {
                tier: (0, OV.O)(eV + 1)
              })
            }, eV)))]
          })
        }), (0, AV.jsx)("tbody", {
          children: UV.map((VV => {
            const eV = ze[VV];
            return (0, AV.jsxs)("tr", {
              children: [(0, AV.jsxs)("th", {
                scope: "row",
                children: [JV(`${NV}:${VV}`), eV && (0, AV.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: JV(eV)
                })]
              }), YV.map(((eV, xV) => {
                const JV = pV(xV, VV),
                  YV = xV > 0 ? pV(xV - 1, VV) : void 0,
                  UV = JV && YV ? JV.loadoutStatValue - YV.loadoutStatValue : 0,
                  QV = Xe.has(VV) ? UV < 0 : UV > 0,
                  wV = xV === yV;
                return (0, AV.jsxs)("td", {
                  className: nV()({
                    Current: xV + 1 === yV,
                    Next: wV,
                    Gain: QV,
                    Owned: xV < yV
                  }),
                  children: [wV && QV && (0, AV.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: UV < 0 ? "\u25bc" : "\u25b2"
                  }), JV ? Ge(JV) : "-"]
                }, xV)
              }))]
            }, VV)
          }))
        })]
      })
    }

    function Re(VV) {
      let {
        view: eV,
        controller: xV,
        slot: JV,
        option: YV
      } = VV;
      const {
        t: UV
      } = (0, ZV.A)(), yV = eV.loadout, pV = YV.loadoutOptionOwnedTier, QV = YV.loadoutOptionTiers.length, nV = JV.loadoutSlotEquippedId === YV.loadoutOptionId, wV = pV < QV ? YV.loadoutOptionTiers[pV].loadoutTierCost : null, vV = null !== wV && ee(yV, wV), rV = YV.loadoutOptionId, bV = Fe();
      return (0, AV.jsxs)(AV.Fragment, {
        children: [(0, AV.jsx)(De, {
          icon: YV.loadoutOptionIcon,
          name: YV.loadoutOptionName,
          status: 0 === pV ? UV(`${NV}:loadoutLocked`) : QV > 1 ? UV(`${NV}:loadoutTier`, {
            tier: (0, OV.O)(pV)
          }) : null,
          locked: 0 === pV,
          equipped: nV
        }), (0, AV.jsx)("p", {
          className: "BoardDescription",
          children: YV.loadoutOptionDescription
        }), (0, AV.jsx)(We, {
          option: YV
        }), (0, AV.jsxs)("div", {
          ref: bV("act", rV),
          className: "BoardActions",
          children: [null !== wV && (0, AV.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, AV.jsx)(Me, {
              cost: wV,
              loadout: yV
            }), (0, AV.jsx)(kV.m, {
              disabled: !vV || eV.pending,
              onClick: () => {
                xV.act(0 === pV ? "loadoutUnlock" : "loadoutUpgrade", rV)
              },
              children: 0 === pV ? UV(`${NV}:loadoutUnlock`) : UV(`${NV}:loadoutUpgrade`, {
                tier: (0, OV.O)(pV + 1)
              })
            })]
          }), null === wV && QV > 1 && (0, AV.jsx)("span", {
            className: "BoardHint",
            children: UV(`${NV}:loadoutMaxed`)
          }), pV > 0 && !nV && (0, AV.jsx)(kV.f, {
            disabled: eV.pending,
            onClick: () => {
              xV.act("loadoutEquip", rV)
            },
            children: UV(`${NV}:loadoutEquip`)
          })]
        })]
      })
    }

    function ge(VV) {
      let {
        view: eV,
        controller: xV,
        perk: JV
      } = VV;
      const {
        t: YV
      } = (0, ZV.A)(), UV = eV.loadout, yV = Ye(UV), pV = JV.loadoutPerkId, QV = Fe();
      return (0, AV.jsxs)(AV.Fragment, {
        children: [(0, AV.jsx)(De, {
          icon: JV.loadoutPerkIcon,
          name: JV.loadoutPerkName,
          status: JV.loadoutPerkOwned ? null : YV(`${NV}:loadoutLocked`),
          locked: !JV.loadoutPerkOwned,
          equipped: JV.loadoutPerkEquipped
        }), (0, AV.jsx)("p", {
          className: "BoardDescription",
          children: JV.loadoutPerkDescription
        }), (0, AV.jsxs)("div", {
          ref: QV("act", pV),
          className: "BoardActions",
          children: [!JV.loadoutPerkOwned && (0, AV.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, AV.jsx)(Me, {
              cost: JV.loadoutPerkCost,
              loadout: UV
            }), (0, AV.jsx)(kV.m, {
              disabled: !ee(UV, JV.loadoutPerkCost) || eV.pending,
              onClick: () => {
                xV.act("loadoutUnlock", pV)
              },
              children: YV(`${NV}:loadoutUnlock`)
            })]
          }), JV.loadoutPerkOwned && !JV.loadoutPerkEquipped && (0, AV.jsx)(kV.f, {
            disabled: yV || eV.pending,
            onClick: () => {
              xV.act("loadoutEquip", pV)
            },
            children: YV(`${NV}:loadoutEquip`)
          }), JV.loadoutPerkOwned && !JV.loadoutPerkEquipped && yV && (0, AV.jsx)("span", {
            className: "BoardHint",
            children: YV(`${NV}:loadoutSocketsFullHint`)
          }), JV.loadoutPerkEquipped && (0, AV.jsx)(kV.M, {
            disabled: eV.pending,
            onClick: () => {
              xV.act("loadoutUnequip", pV)
            },
            children: YV(`${NV}:loadoutUnequip`)
          })]
        })]
      })
    }

    function De(VV) {
      let {
        icon: eV,
        name: xV,
        status: JV,
        locked: YV,
        equipped: UV
      } = VV;
      const {
        t: yV
      } = (0, ZV.A)();
      return (0, AV.jsxs)(iV, {
        icon: (0, AV.jsx)(zV, {
          itemName: eV
        }),
        name: xV,
        children: [null !== JV && (0, AV.jsx)("span", {
          className: nV()("LoadoutStatusText", {
            Locked: YV
          }),
          children: JV
        }), UV && (0, AV.jsx)("span", {
          className: "BoardBadge",
          children: yV(`${NV}:loadoutEquippedBadge`)
        })]
      })
    }

    function ie(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const JV = eV.loadout;
      if ("loadoutPerks" === eV.slot) {
        const VV = JV.loadoutPerks.find((VV => VV.loadoutPerkId === eV.selectedId));
        return (0, AV.jsx)("section", {
          className: "BoardDetail",
          children: VV && (0, AV.jsx)(ge, {
            view: eV,
            controller: xV,
            perk: VV
          })
        })
      }
      const YV = Je(JV, eV.slot),
        UV = YV.loadoutSlotOptions.find((VV => VV.loadoutOptionId === eV.selectedId));
      return (0, AV.jsx)("section", {
        className: "BoardDetail",
        children: UV && (0, AV.jsx)(Re, {
          view: eV,
          controller: xV,
          slot: YV,
          option: UV
        })
      })
    }

    function Ce(VV) {
      let {
        owned: eV,
        total: xV
      } = VV;
      return xV <= 1 ? null : (0, AV.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: xV
        }, ((VV, xV) => (0, AV.jsx)("span", {
          className: nV()("LoadoutPip", {
            Filled: xV < eV
          })
        }, xV)))
      })
    }

    function ae(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, ZV.A)(), YV = eV.loadout, UV = Fe();
      return (0, AV.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": JV(`${NV}:loadoutKit`),
        children: [YV.loadoutSlots.map((VV => {
          const YV = VV.loadoutSlotOptions.find((eV => eV.loadoutOptionId === VV.loadoutSlotEquippedId));
          return (0, AV.jsxs)("button", {
            ref: UV("section", VV.loadoutSlotKind),
            type: "button",
            className: nV()("LoadoutKitSlot", {
              Selected: eV.slot === VV.loadoutSlotKind
            }),
            onClick: () => {
              xV.selectSlot(VV.loadoutSlotKind)
            },
            children: [(0, AV.jsx)("span", {
              className: "LoadoutKitIcon",
              children: YV && (0, AV.jsx)(zV, {
                itemName: YV.loadoutOptionIcon
              })
            }), (0, AV.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, AV.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, AV.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: JV(je[VV.loadoutSlotKind])
                }), YV && (0, AV.jsx)(Ce, {
                  owned: YV.loadoutOptionOwnedTier,
                  total: YV.loadoutOptionTiers.length
                })]
              }), (0, AV.jsx)("span", {
                className: "LoadoutKitName",
                children: null === YV || void 0 === YV ? void 0 : YV.loadoutOptionName
              })]
            })]
          }, VV.loadoutSlotKind)
        })), (0, AV.jsx)(oe, {
          view: eV,
          controller: xV
        })]
      })
    }

    function oe(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, ZV.A)(), YV = eV.loadout, UV = YV.loadoutPerks.filter((VV => VV.loadoutPerkEquipped)), yV = Fe();
      return (0, AV.jsxs)("button", {
        ref: yV("section", "loadoutPerks"),
        type: "button",
        className: nV()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === eV.slot
        }),
        onClick: () => {
          xV.selectSlot("loadoutPerks")
        },
        children: [(0, AV.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, AV.jsx)("span", {
            className: "LoadoutKitLabel",
            children: JV(je.loadoutPerks)
          }), (0, AV.jsx)("span", {
            className: "LoadoutPerkCount",
            children: JV(`${NV}:loadoutPerkCount`, {
              equipped: String(UV.length),
              max: String(YV.loadoutMaxPerks)
            })
          })]
        }), (0, AV.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: YV.loadoutMaxPerks
          }, ((VV, eV) => {
            const xV = UV[eV];
            return (0, AV.jsxs)("span", {
              className: nV()("LoadoutSocket", {
                Filled: xV,
                Empty: !xV
              }),
              children: [(0, AV.jsx)("span", {
                className: "LoadoutSocketWell",
                children: xV && (0, AV.jsx)(zV, {
                  itemName: xV.loadoutPerkIcon
                })
              }), (0, AV.jsx)("span", {
                className: "LoadoutSocketName",
                children: xV ? xV.loadoutPerkName : JV(`${NV}:loadoutPerkSocketEmpty`)
              })]
            }, eV)
          }))
        })]
      })
    }

    function ce(VV) {
      let {
        icon: eV,
        name: xV,
        selected: JV,
        equipped: YV,
        locked: UV,
        ownedTier: yV,
        tiers: pV,
        buttonRef: QV,
        onSelect: nV
      } = VV;
      const {
        t: wV
      } = (0, ZV.A)();
      return (0, AV.jsxs)(DV, {
        icon: (0, AV.jsx)(zV, {
          itemName: eV
        }),
        name: xV,
        selected: JV,
        locked: UV,
        buttonRef: QV,
        onSelect: nV,
        children: [YV && (0, AV.jsx)("span", {
          className: "BoardBadge",
          children: wV(`${NV}:loadoutEquippedBadge`)
        }), UV && (0, AV.jsx)("span", {
          className: "BoardBadge Muted",
          children: wV(`${NV}:loadoutLocked`)
        }), !UV && (0, AV.jsx)(Ce, {
          owned: yV,
          total: pV
        })]
      })
    }

    function he(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const JV = eV.loadout,
        YV = Fe();
      if ("loadoutPerks" === eV.slot) return (0, AV.jsx)("div", {
        className: "BoardTiles",
        children: JV.loadoutPerks.map((VV => (0, AV.jsx)(ce, {
          icon: VV.loadoutPerkIcon,
          name: VV.loadoutPerkName,
          selected: eV.selectedId === VV.loadoutPerkId,
          equipped: VV.loadoutPerkEquipped,
          locked: !VV.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: YV("Pr", VV.loadoutPerkId),
          onSelect: () => {
            xV.select(VV.loadoutPerkId)
          }
        }, VV.loadoutPerkId)))
      });
      const UV = Je(JV, eV.slot);
      return (0, AV.jsx)("div", {
        className: "BoardTiles",
        children: UV.loadoutSlotOptions.map((VV => (0, AV.jsx)(ce, {
          icon: VV.loadoutOptionIcon,
          name: VV.loadoutOptionName,
          selected: eV.selectedId === VV.loadoutOptionId,
          equipped: UV.loadoutSlotEquippedId === VV.loadoutOptionId,
          locked: 0 === VV.loadoutOptionOwnedTier,
          ownedTier: VV.loadoutOptionOwnedTier,
          tiers: VV.loadoutOptionTiers.length,
          buttonRef: YV("Pr", VV.loadoutOptionId),
          onSelect: () => {
            xV.select(VV.loadoutOptionId)
          }
        }, VV.loadoutOptionId)))
      })
    }

    function le(VV) {
      let {
        loadout: eV
      } = VV;
      return (0, AV.jsx)(CV, {
        coins: eV.loadoutCoins,
        children: eV.loadoutHeldParts.filter((VV => VV.loadoutHeldPartAmount > 0)).map((VV => (0, AV.jsx)(WV, {
          itemName: VV.loadoutHeldPartItem,
          amount: VV.loadoutHeldPartAmount
        }, VV.loadoutHeldPartCurrency)))
      })
    }

    function Le(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, wV.j)(ve, eV.getSnapshot()),
        {
          t: JV
        } = (0, ZV.A)();
      if (null === xV.loadout) return null;
      const YV = xV.notice;
      return (0, AV.jsx)(Ae, {
        view: xV,
        onDismiss: eV.dismiss,
        children: (0, AV.jsxs)(MV, {
          open: xV.open,
          onDismiss: eV.dismiss,
          title: JV(`${NV}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, AV.jsx)(le, {
            loadout: xV.loadout
          }),
          statusRefused: null === YV || void 0 === YV ? void 0 : YV.loadoutNoticeRefused,
          status: (0, AV.jsxs)(AV.Fragment, {
            children: [(0, AV.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: JV(`${NV}:loadoutRadioBadge`)
            }), null !== YV && JV(`${NV}:${YV.loadoutNoticeKey}`, {
              name: YV.loadoutNoticeName,
              tier: (0, OV.O)(YV.loadoutNoticeTier),
              max: String(xV.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, AV.jsx)(ae, {
            view: xV,
            controller: eV
          }), (0, AV.jsx)(he, {
            view: xV,
            controller: eV
          }), (0, AV.jsx)(ie, {
            view: xV,
            controller: eV
          })]
        })
      })
    }

    function fe(VV, eV, xV) {
      const JV = VV.locatorEntries.find((VV => VV.locatorEntryId === xV));
      if (!JV) return null;
      const YV = JV.locatorEntryName;
      if ("locatorDisarm" === eV) return JV.locatorEntryArmed ? {
        board: me(VV, null),
        notice: Ke("locatorNoticeDisarmed", YV)
      } : null;
      if ("locatorArm" === eV) return JV.locatorEntryOwned && !JV.locatorEntryArmed ? {
        board: me(VV, xV),
        notice: Ke("locatorNoticeArmed", YV)
      } : null;
      if (JV.locatorEntryOwned || VV.locatorCoins < JV.locatorEntryPrice) return null;
      const UV = me({
        ...VV,
        locatorCoins: VV.locatorCoins - JV.locatorEntryPrice
      }, xV);
      return {
        board: {
          ...UV,
          locatorEntries: UV.locatorEntries.map((VV => VV.locatorEntryId === xV ? {
            ...VV,
            locatorEntryOwned: !0
          } : VV))
        },
        notice: Ke("locatorNoticeBought", YV)
      }
    }

    function me(VV, eV) {
      return {
        ...VV,
        locatorEntries: VV.locatorEntries.map((VV => {
          const xV = VV.locatorEntryId === eV;
          return VV.locatorEntryArmed === xV ? VV : {
            ...VV,
            locatorEntryArmed: xV
          }
        }))
      }
    }

    function Ke(VV, eV) {
      return {
        locatorNoticeKey: VV,
        locatorNoticeRefused: !1,
        locatorNoticeName: eV
      }
    }
    const He = "containmentLocatorView";
    class ue extends Ve {
      constructor(VV, eV, xV, JV) {
        super(VV, eV, xV, JV, "locator", fe), this.snapshot = this.buildSnapshot()
      }
      messageOpens(VV) {
        return VV.locatorMessageOpens
      }
      messageNotice(VV) {
        return VV.locatorNotice
      }
      openingSelection(VV) {
        var eV;
        const xV = VV.locatorEntries;
        return (null !== (eV = xV.find((VV => VV.locatorEntryArmed))) && void 0 !== eV ? eV : xV[0]).locatorEntryId
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
    const se = {
        locatorContained: `${NV}:locatorFlavourContained`,
        locatorEncountered: `${NV}:locatorFlavourEncountered`,
        locatorUnseen: `${NV}:locatorFlavourUnseen`
      },
      Se = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${NV}:locatorAttunedNormal`,
        codexHardOnly: `${NV}:locatorAttunedHard`
      };

    function Ie() {
      return (0, AV.jsx)(AV.Fragment, {
        children: Array.from({
          length: 5
        }, ((VV, eV) => (0, AV.jsx)("span", {
          className: "LocatorFly",
          children: (0, AV.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, eV)))
      })
    }

    function de(VV) {
      let {
        entry: eV
      } = VV;
      const {
        t: xV
      } = (0, ZV.A)();
      return eV.locatorEntryArmed ? (0, AV.jsx)("span", {
        className: "BoardBadge Armed",
        children: xV(`${NV}:locatorArmedBadge`)
      }) : eV.locatorEntryOwned ? (0, AV.jsx)("span", {
        className: "BoardBadge",
        children: xV(`${NV}:locatorOwnedBadge`)
      }) : null
    }

    function Oe(VV) {
      let {
        entry: eV,
        coins: xV,
        inTile: JV = !1
      } = VV;
      return (0, AV.jsx)(WV, {
        itemName: XV,
        amount: eV.locatorEntryPrice,
        hn: xV,
        inTile: JV
      })
    }

    function Vx(VV) {
      let {
        view: eV,
        controller: xV,
        entry: JV
      } = VV;
      const {
        t: YV
      } = (0, ZV.A)(), UV = JV.locatorEntryId, yV = eV.locators.locatorEntries.find((VV => VV.locatorEntryArmed && VV !== JV));
      return (0, AV.jsxs)("div", {
        className: "BoardActions",
        children: [JV.locatorEntryArmed && (0, AV.jsx)(kV.M, {
          disabled: eV.pending,
          onClick: () => {
            xV.act("locatorDisarm", UV)
          },
          children: YV(`${NV}:locatorDisarm`)
        }), JV.locatorEntryOwned && !JV.locatorEntryArmed && (0, AV.jsx)(kV.f, {
          disabled: eV.pending,
          onClick: () => {
            xV.act("locatorArm", UV)
          },
          children: YV(`${NV}:locatorArm`)
        }), !JV.locatorEntryOwned && (0, AV.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, AV.jsx)(Oe, {
            entry: JV,
            coins: eV.locators.locatorCoins
          }), (0, AV.jsx)(kV.m, {
            disabled: eV.locators.locatorCoins < JV.locatorEntryPrice || eV.pending,
            onClick: () => {
              xV.act("locatorBuy", UV)
            },
            children: YV(`${NV}:locatorBuy`)
          })]
        }), yV && !JV.locatorEntryArmed && (0, AV.jsx)("span", {
          className: "BoardHint",
          children: YV(`${NV}:locatorReplacesHint`, {
            name: yV.locatorEntryName
          })
        })]
      })
    }

    function ex(VV) {
      let {
        entry: eV
      } = VV;
      return "locatorUnseen" === eV.locatorEntryStanding ? (0, AV.jsx)(zV, {
        itemName: "Compass"
      }) : (0, AV.jsx)(GV, {
        anomalyId: eV.locatorEntryId,
        caught: "locatorContained" === eV.locatorEntryStanding
      })
    }

    function xx(VV) {
      let {
        view: eV,
        controller: xV,
        entry: JV
      } = VV;
      const {
        t: YV
      } = (0, ZV.A)(), UV = Se[JV.locatorEntryDifficulty];
      return (0, AV.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, AV.jsxs)("div", {
          className: nV()("LocatorLabel", {
            Armed: JV.locatorEntryArmed
          }),
          children: [(0, AV.jsx)(iV, {
            icon: (0, AV.jsx)(ex, {
              entry: JV
            }),
            name: YV(`${NV}:locatorName`, {
              name: JV.locatorEntryName
            }),
            children: (0, AV.jsx)(de, {
              entry: JV
            })
          }), (0, AV.jsx)("p", {
            className: "BoardDescription",
            children: YV(JV.locatorEntryArmed ? `${NV}:locatorFlavourArmed` : se[JV.locatorEntryStanding])
          }), null !== UV && (0, AV.jsx)("p", {
            className: "LocatorAttuned",
            children: YV(UV)
          }), (0, AV.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: YV(`${NV}:locatorUsage`)
          })]
        }), (0, AV.jsx)(Vx, {
          view: eV,
          controller: xV,
          entry: JV
        })]
      })
    }

    function Jx(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, wV.j)(He, eV.getSnapshot()),
        {
          t: JV
        } = (0, ZV.A)(),
        YV = xV.locators;
      if (null === YV) return null;
      const UV = YV.locatorEntries.find((VV => VV.locatorEntryId === xV.selectedId)),
        yV = xV.notice;
      return (0, AV.jsxs)(MV, {
        open: xV.open,
        onDismiss: eV.dismiss,
        title: JV(`${NV}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, AV.jsx)(Ie, {}),
        headerExtra: (0, AV.jsx)(CV, {
          coins: YV.locatorCoins
        }),
        statusRefused: null === yV || void 0 === yV ? void 0 : yV.locatorNoticeRefused,
        status: (0, AV.jsxs)(AV.Fragment, {
          children: [(0, AV.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: JV(`${NV}:locatorKeeperName`)
          }), null !== yV && JV(`${NV}:${yV.locatorNoticeKey}`, {
            name: yV.locatorNoticeName
          })]
        }),
        children: [(0, AV.jsx)("div", {
          className: "BoardTiles",
          children: YV.locatorEntries.map((VV => (0, AV.jsxs)(DV, {
            icon: (0, AV.jsx)(ex, {
              entry: VV
            }),
            name: VV.locatorEntryName,
            selected: VV === UV,
            locked: !1,
            className: nV()("LocatorTag", {
              Armed: VV.locatorEntryArmed
            }),
            onSelect: () => {
              eV.select(VV.locatorEntryId)
            },
            children: [(0, AV.jsx)(de, {
              entry: VV
            }), !VV.locatorEntryOwned && (0, AV.jsx)(Oe, {
              entry: VV,
              coins: YV.locatorCoins,
              inTile: !0
            })]
          }, VV.locatorEntryId)))
        }), (0, AV.jsx)(xx, {
          view: xV,
          controller: eV,
          entry: UV
        })]
      })
    }

    function Yx(VV) {
      let {
        loadout: eV,
        codex: xV,
        locator: JV
      } = VV;
      return (0, AV.jsxs)(AV.Fragment, {
        children: [(0, AV.jsx)(Le, {
          controller: eV
        }), (0, AV.jsx)(dV, {
          controller: xV
        }), (0, AV.jsx)(Jx, {
          controller: JV
        })]
      })
    }
    var Ux = xV(39728);
    class yx {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = VV, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Ux.c({
          spacingMs: 0,
          now: eV
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(VV, eV) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, eV(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(VV), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const VV of this.listeners) VV()
      }
    }
    var px = xV(39714);
    const Qx = new Map([
      ["npc_general", be],
      ["npc_tentacle_guy", px]
    ]);

    function nx(VV) {
      const eV = Qx.get(VV);
      if (void 0 === eV) return null;
      const xV = document.createElement("img");
      return xV.src = eV, xV.alt = "", xV.draggable = !1, xV.style.imageRendering = "pixelated", xV
    }
    const wx = function() {
      let VV, eV = !1,
        xV = null,
        QV = null;
      const nV = [],
        wV = VV => {
          for (const eV of nV) eV !== VV && eV.close();
          (0, pV.r)()
        },
        ZV = VV => {
          VV && (0, pV.m)()
        },
        vV = new yx((eV => {
          VV.sendCommand(eV)
        })),
        rV = new re((VV => {
          yV.h.QZ(ve, VV, !0)
        }), wV, ZV, vV),
        kV = new cV((VV => {
          yV.h.QZ(oV, VV, !0)
        }), wV, ZV),
        bV = new ue((VV => {
          yV.h.QZ(He, VV, !0)
        }), wV, ZV, vV);
      nV.push(rV, kV, bV);
      return {
        onCreate: eV => {
          VV = eV, xV = (0, pV.z)(null, {
            content: (0, JV.createElement)(Yx, {
              loadout: rV,
              codex: kV,
              locator: bV
            }),
            onClose: () => {
              for (const VV of nV) VV.close()
            }
          }), QV = (0, UV.d)(nx)
        },
        onReceivedMessageFromServer: (VV, eV) => {
          "containmentLoadout" === VV ? rV.RZ(eV) : "containmentLoadoutClose" === VV ? rV.isOpen() && (rV.close(), (0, pV.i)()) : "containmentCodex" === VV ? kV.RZ(eV) : "containmentLocator" === VV && bV.RZ(eV)
        },
        iZ: () => {
          eV || YV.b.get("loadingOverlayVisible") || (eV = !0, VV.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var VV, eV;
          null === (VV = xV) || void 0 === VV || VV(), xV = null, null === (eV = QV) || void 0 === eV || eV(), QV = null;
          for (const xV of nV) xV.dispose();
          vV.dispose()
        }
      }
    }
  },
  40525: (VV, eV, xV) => {
    var JV = {
      "./breach-zero-uncaught.webp": 40528,
      "./breach-zero.webp": 40536,
      "./brood-father-uncaught.webp": 40539,
      "./brood-father.webp": 40541,
      "./carousel-uncaught.webp": 40549,
      "./carousel.webp": 40556,
      "./deadlock-uncaught.webp": 40565,
      "./deadlock.webp": 40571,
      "./frost-revenant-uncaught.webp": 40579,
      "./frost-revenant.webp": 40584,
      "./hollow-choir-uncaught.webp": 40589,
      "./hollow-choir.webp": 40597,
      "./magma-warden-uncaught.webp": 40605,
      "./magma-warden.webp": 40611,
      "./patient-zero-uncaught.webp": 40620,
      "./patient-zero.webp": 40622,
      "./siege-engine-uncaught.webp": 40627,
      "./siege-engine.webp": 40629,
      "./warp-stalker-uncaught.webp": 40632,
      "./warp-stalker.webp": 40636
    };

    function YV(VV) {
      var eV = UV(VV);
      return xV(eV)
    }

    function UV(VV) {
      if (!xV.o(JV, VV)) {
        var eV = new Error("Cannot find module '" + VV + "'");
        throw eV.code = "MODULE_NOT_FOUND", eV
      }
      return JV[VV]
    }
    YV.keys = function() {
      return Object.keys(JV)
    }, YV.resolve = UV, VV.exports = YV, YV.id = 40525
  },
  40528: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40536: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40539: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40541: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40549: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40556: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40565: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40571: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40579: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40584: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40589: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40597: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40605: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40611: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40620: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40622: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  40627: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  40629: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  40632: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  40636: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  39714: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);