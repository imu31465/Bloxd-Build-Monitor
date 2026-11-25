export const id = 14;
export const ids = [14];
export const modules = {
  38975: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    const wG = 4,
      SG = 12e3,
      LG = 1e3;
    class yG {
      constructor() {
        let {
          limit: GG = wG,
          windowMs: bG = SG,
          spacingMs: ZG = LG,
          now: yG = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = GG, this.windowMs = bG, this.spacingMs = ZG, this.now = yG
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const GG of this.priority) GG.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const GG = this.now();
        this.sent.push(GG), this.lastSentAt = GG, this.schedule(), this.notify()
      }
      addPriority(GG) {
        return this.priority.add(GG), () => {
          this.priority.delete(GG)
        }
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const GG of this.priority)
          if (GG.waiting()) return !0;
        return !1
      }
      prune() {
        const GG = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= GG;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const GG = this.now(),
          bG = this.lastSentAt + this.spacingMs,
          ZG = Math.min(bG > GG ? bG : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ZG !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ZG - GG)))
      }
      notify() {
        for (const GG of this.listeners) GG()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38950: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      constructor(GG, bG, ZG) {
        this.xh = GG, this.beforeOpen = bG, this.afterClose = ZG, this.open = !1, this.pK = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.pK && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(GG) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(GG)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.pK = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.pK || (this.snapshot = this.buildSnapshot(), this.xh(this.snapshot))
      }
    }
  },
  39717: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => VZ
    });
    var wG = ZG(51);
    var SG = ZG(17),
      LG = ZG(1887),
      yG = ZG(19),
      kG = ZG(36951),
      UG = ZG(1006),
      YG = ZG.n(UG),
      VG = ZG(1389),
      pG = ZG(1151),
      fG = ZG(4549),
      QG = ZG(1304),
      KG = ZG(1393),
      hG = ZG(1889),
      dG = ZG(1320),
      JG = ZG(1876),
      rG = ZG(1945),
      zG = ZG(200);
    const EG = ZG(39724),
      oG = Object.fromEntries(EG.keys().map((GG => [GG.replace(/^\.\/(.*)\.webp$/, "$1"), EG(GG)]))),
      XG = new Set;

    function uG(GG, bG) {
      const ZG = bG ? GG : `${GG}-uncaught`,
        wG = (0, zG.c)(oG, ZG);
      return void 0 !== wG || XG.has(ZG) || (XG.add(ZG), console.warn(`Containment Breach has no mugshot ${ZG}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), wG
    }
    var iG = ZG(1067);
    const CG = "containmentBreach",
      WG = "Gold Coin";

    function mG(GG) {
      let {
        open: bG,
        onDismiss: ZG,
        title: wG,
        className: SG,
        decor: LG,
        headerExtra: yG,
        status: kG,
        statusRefused: UG = !1,
        children: VG
      } = GG;
      const pG = `${SG}Title`;
      return (0, iG.jsx)(fG.b, {
        show: bG,
        close: ZG,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, iG.jsxs)("section", {
          className: YG()("ContainmentBoardPanel", SG),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": pG,
          children: [LG && (0, iG.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: LG
          }), (0, iG.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, iG.jsx)("h2", {
              id: pG,
              className: "VisuallyHidden",
              children: wG
            }), yG, (0, iG.jsx)(KG.j, {
              onClick: ZG
            })]
          }), (0, iG.jsx)("div", {
            className: "BoardBody",
            children: VG
          }), void 0 !== kG && (0, iG.jsx)("footer", {
            className: YG()("BoardStatus", {
              Refused: UG
            }),
            children: kG
          })]
        })
      })
    }

    function IG(GG) {
      let {
        itemName: bG
      } = GG;
      return (0, iG.jsx)(hG.b, {
        itemName: bG,
        amount: 0
      })
    }

    function FG(GG) {
      let {
        anomalyId: bG,
        caught: ZG
      } = GG;
      const SG = (0, wG.useRef)(null);
      return (0, QG.e)(SG, !ZG), (0, iG.jsx)("span", {
        ref: SG,
        className: YG()("BoardMugshot", {
          Uncaught: !ZG
        }),
        children: (0, iG.jsx)("img", {
          src: uG(bG, ZG),
          alt: "",
          draggable: !1
        })
      })
    }

    function vG(GG) {
      let {
        itemName: bG,
        amount: ZG,
        Ik: wG,
        inTile: SG = !1
      } = GG;
      return (0, iG.jsx)(dG.h, {
        delayShow: 200,
        hoverOnly: SG,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, iG.jsx)(cG, {
          itemName: bG,
          amount: ZG,
          Ik: wG
        }),
        children: (0, iG.jsxs)("span", {
          className: YG()("BoardChip", {
            Short: void 0 !== wG && wG < ZG
          }),
          children: [(0, iG.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, iG.jsx)(IG, {
              itemName: bG
            })
          }), ZG.toLocaleString()]
        })
      })
    }
    const aG = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function cG(GG) {
      var bG;
      let {
        itemName: ZG,
        amount: wG,
        Ik: SG
      } = GG;
      const {
        t: LG
      } = (0, pG.w)(), yG = (0, rG.c)("itemInfo", (GG => GG[ZG])), {
        lore: kG,
        droppedBy: UG
      } = function(GG) {
        if ("string" !== typeof GG) return {
          lore: GG,
          droppedBy: null
        };
        const bG = aG.exec(GG);
        return null === bG ? {
          lore: GG,
          droppedBy: null
        } : {
          lore: "" === bG[1] ? void 0 : bG[1],
          droppedBy: bG[2]
        }
      }(null === yG || void 0 === yG ? void 0 : yG.description);
      return (0, iG.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, iG.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, iG.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, iG.jsx)(IG, {
              itemName: ZG
            })
          }), (0, iG.jsx)(JG.c, {
            text: null !== (bG = null === yG || void 0 === yG ? void 0 : yG.displayName) && void 0 !== bG ? bG : ZG,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== kG || null !== UG) && (0, iG.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== kG && (0, iG.jsx)(JG.c, {
            text: kG,
            className: "BoardChipTooltipDescription"
          }), null !== UG && (0, iG.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, iG.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: LG(`${CG}:chipDroppedBy`)
            }), UG]
          })]
        }), void 0 !== SG && (0, iG.jsxs)("div", {
          className: YG()("BoardChipTooltipHeld", {
            Short: SG < wG
          }),
          children: [(0, iG.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: LG(`${CG}:chipYouHave`)
          }), (0, iG.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, iG.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: SG.toLocaleString()
            }), ` / ${wG.toLocaleString()}`]
          }), (0, iG.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, iG.jsx)("span", {
              style: {
                width: (wG > 0 ? 100 * Math.min(1, SG / wG) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function lG(GG) {
      let {
        icon: bG,
        name: ZG,
        selected: wG,
        locked: SG,
        className: LG,
        buttonRef: yG,
        onSelect: kG,
        children: UG
      } = GG;
      return (0, iG.jsxs)("button", {
        ref: yG,
        type: "button",
        className: YG()("BoardTile", LG, {
          Selected: wG,
          Locked: SG
        }),
        onClick: kG,
        children: [(0, iG.jsx)("span", {
          className: "BoardTileIcon",
          children: bG
        }), (0, iG.jsx)("span", {
          className: "BoardTileName",
          children: ZG
        }), UG]
      })
    }

    function jG(GG) {
      let {
        icon: bG,
        name: ZG,
        children: wG
      } = GG;
      return (0, iG.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, iG.jsx)("span", {
          className: "BoardDetailIcon",
          children: bG
        }), (0, iG.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, iG.jsx)("h3", {
            children: ZG
          }), (0, iG.jsx)("span", {
            className: "BoardDetailStatus",
            children: wG
          })]
        })]
      })
    }

    function PG(GG) {
      let {
        coins: bG,
        children: ZG
      } = GG;
      return (0, iG.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, iG.jsx)(vG, {
          itemName: WG,
          amount: bG
        }), ZG]
      })
    }
    var MG = ZG(38950);
    const AG = "containmentCodexView";
    class sG extends MG.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = GG => {
          this.selectedId = GG, this.emit()
        }
      }
      hK(GG) {
        this.entries = GG.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const qG = {
        codexAnyDifficulty: `${CG}:codexNeedsAny`,
        codexNormalOnly: `${CG}:codexNeedsNormal`,
        codexHardOnly: `${CG}:codexNeedsHard`
      },
      nG = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      gG = {
        codexContained: `${CG}:codexContainedBadge`,
        codexEncountered: `${CG}:codexEncounteredBadge`,
        codexUnidentified: `${CG}:codexUnidentifiedBadge`
      },
      eG = ["94%", "81%", "88%", "46%", "72%"];

    function RG(GG) {
      let {
        entry: bG
      } = GG;
      const {
        t: ZG
      } = (0, pG.w)();
      return (0, iG.jsx)("span", {
        className: YG()("BoardBadge", nG[bG.codexEntryState]),
        children: ZG(gG[bG.codexEntryState])
      })
    }

    function TG(GG) {
      const {
        t: bG
      } = (0, pG.w)();
      return "codexUnidentified" === GG.codexEntryState ? bG(`${CG}:codexUnidentifiedName`) : GG.codexEntryName
    }

    function HG(GG) {
      let {
        entry: bG
      } = GG;
      return "codexUnidentified" === bG.codexEntryState ? (0, iG.jsx)(IG, {
        itemName: "Book"
      }) : (0, iG.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, iG.jsx)(FG, {
          anomalyId: bG.codexEntryId,
          caught: "codexContained" === bG.codexEntryState
        }), (0, iG.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function tG(GG) {
      let {
        entry: bG,
        selected: ZG,
        onSelect: wG
      } = GG;
      const SG = "codexUnidentified" === bG.codexEntryState;
      return (0, iG.jsxs)(lG, {
        icon: (0, iG.jsx)(HG, {
          entry: bG
        }),
        name: TG(bG),
        selected: ZG,
        locked: SG,
        className: YG()("CodexFolder", nG[bG.codexEntryState]),
        onSelect: () => {
          wG(bG.codexEntryId)
        },
        children: [!SG && (0, iG.jsx)(RG, {
          entry: bG
        }), SG && (0, iG.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function DG(GG) {
      let {
        count: bG
      } = GG;
      const ZG = [];
      for (let wG = Math.min(bG, 25); wG > 0; wG -= 5) ZG.push(Math.min(wG, 5));
      return (0, iG.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: ZG.map(((GG, bG) => (0, iG.jsx)("span", {
          className: YG()("CodexTallyGroup", {
            Gate: 5 === GG
          }),
          children: Array.from({
            length: Math.min(GG, 4)
          }, ((GG, bG) => (0, iG.jsx)("span", {
            className: "CodexTallyMark"
          }, bG)))
        }, bG)))
      })
    }

    function NG(GG) {
      let {
        contained: bG,
        total: ZG
      } = GG;
      const {
        t: wG
      } = (0, pG.w)();
      return (0, iG.jsxs)("div", {
        className: "CodexProgress",
        children: [wG(`${CG}:codexProgress`, {
          contained: String(bG),
          total: String(ZG)
        }), (0, iG.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, iG.jsx)("span", {
            style: {
              width: bG / ZG * 100 + "%"
            }
          })
        })]
      })
    }

    function OG(GG) {
      let {
        entry: bG,
        fileNumber: ZG
      } = GG;
      const {
        t: wG
      } = (0, pG.w)(), SG = "codexContained" === bG.codexEntryState;
      return (0, iG.jsx)("section", {
        className: "BoardDetail",
        children: (0, iG.jsxs)("article", {
          className: YG()("CodexDossier", nG[bG.codexEntryState]),
          children: [(0, iG.jsx)("span", {
            className: "CodexFileNumber",
            children: wG(`${CG}:codexFileNumber`, {
              number: String(ZG).padStart(3, "0")
            })
          }), (0, iG.jsx)(jG, {
            icon: (0, iG.jsx)(HG, {
              entry: bG
            }),
            name: TG(bG),
            children: (0, iG.jsx)(RG, {
              entry: bG
            })
          }), SG && (0, iG.jsxs)(iG.Fragment, {
            children: [(0, iG.jsx)("p", {
              className: "BoardDescription",
              children: bG.codexEntryLore
            }), (0, iG.jsxs)("p", {
              className: "CodexTally",
              children: [wG(`${CG}:codexContainments`, {
                count: String(bG.codexEntryContainedCount)
              }), (0, iG.jsx)(DG, {
                count: bG.codexEntryContainedCount
              })]
            }), (0, iG.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: wG(`${CG}:codexContainedBadge`)
            })]
          }), !SG && (0, iG.jsxs)(iG.Fragment, {
            children: [(0, iG.jsxs)("div", {
              className: "CodexRedaction",
              children: [eG.map((GG => (0, iG.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: GG
                }
              }, GG))), (0, iG.jsx)("p", {
                className: "CodexRedacted",
                children: wG(`${CG}:codexRedacted`)
              })]
            }), "" !== bG.codexEntryHint && (0, iG.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, iG.jsx)("h4", {
                children: wG(`${CG}:codexHintLabel`)
              }), (0, iG.jsx)("p", {
                children: bG.codexEntryHint
              })]
            }), (0, iG.jsx)("p", {
              className: "CodexClearance",
              children: wG(qG[bG.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function xG(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, VG.j)(AG, bG.getSnapshot()),
        {
          t: wG
        } = (0, pG.w)();
      if (0 === ZG.entries.length) return null;
      const SG = ZG.entries.find((GG => GG.codexEntryId === ZG.selectedId)),
        LG = ZG.entries.filter((GG => "codexContained" === GG.codexEntryState)).length,
        yG = ZG.entries.map((GG => GG.codexEntryId)).sort().indexOf(SG.codexEntryId) + 1;
      return (0, iG.jsxs)(mG, {
        open: ZG.open,
        onDismiss: bG.dismiss,
        title: wG(`${CG}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, iG.jsx)(NG, {
          contained: LG,
          total: ZG.entries.length
        }),
        children: [(0, iG.jsx)("div", {
          className: "BoardTiles",
          children: ZG.entries.map((GG => (0, iG.jsx)(tG, {
            entry: GG,
            selected: GG === SG,
            onSelect: bG.select
          }, GG.codexEntryId)))
        }), (0, iG.jsx)(OG, {
          entry: SG,
          fileNumber: yG
        })]
      })
    }
    var BG = ZG(352);
    class Gb extends MG.c {
      constructor(GG, bG, ZG, wG, SG, LG) {
        super(GG, bG, ZG), this.pacer = wG, this.command = SG, this.predict = LG, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = GG => {
          this.selectedId = GG, this.emit()
        }, this.act = (GG, bG) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${GG} ${bG}`, this.rollBack)) return;
          const ZG = this.predict(this.board, GG, bG);
          null !== ZG && (this.board = ZG.board, this.notice = ZG.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = wG.subscribe((() => {
          this.emit()
        }))
      }
      hK(GG) {
        const bG = this.messageOpens(GG);
        if (bG && this.open) return this.board === this.confirmed && (this.board = GG), this.confirmed = GG, void this.emit();
        if (this.board = GG, this.confirmed = GG, this.pacer.onReply(), bG) return this.notice = null, this.selectedId = this.openingSelection(GG), void this.show();
        const ZG = this.messageNotice(GG);
        null !== ZG && (this.notice = ZG), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function bb(GG, bG) {
      return GG.loadoutCoins >= bG.loadoutCostCoins && bG.loadoutCostParts.every((bG => function(GG, bG) {
        return Zb(GG, bG).loadoutHeldPartAmount
      }(GG, bG.loadoutPartCurrency) >= bG.loadoutPartAmount))
    }

    function Zb(GG, bG) {
      return GG.loadoutHeldParts.find((GG => GG.loadoutHeldPartCurrency === bG))
    }

    function wb(GG, bG) {
      return GG.loadoutSlots.find((GG => GG.loadoutSlotKind === bG))
    }

    function Sb(GG) {
      return GG.loadoutPerks.filter((GG => GG.loadoutPerkEquipped)).length >= GG.loadoutMaxPerks
    }

    function Lb(GG, bG, ZG) {
      for (const SG of GG.loadoutSlots) {
        const wG = SG.loadoutSlotOptions.find((GG => GG.loadoutOptionId === ZG));
        if (wG) return "loadoutArmour" === SG.loadoutSlotKind ? kb(GG, SG, wG, bG) : yb(GG, SG, wG, bG)
      }
      const wG = GG.loadoutPerks.find((GG => GG.loadoutPerkId === ZG));
      return wG ? function(GG, bG, ZG) {
        const wG = bG.loadoutPerkOwned,
          SG = bG.loadoutPerkEquipped,
          LG = bG.loadoutPerkName,
          yG = Sb(GG);
        if ("loadoutUnlock" === ZG) {
          if (wG || !bb(GG, bG.loadoutPerkCost)) return null;
          const ZG = {
            ...bG,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !yG
          };
          return {
            board: Yb(Vb(GG, bG.loadoutPerkCost), ZG),
            notice: pb(yG ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", LG)
          }
        }
        if ("loadoutUpgrade" === ZG || !wG || "loadoutEquip" === ZG === SG || !SG && yG) return null;
        return {
          board: Yb(GG, {
            ...bG,
            loadoutPerkEquipped: !SG
          }),
          notice: pb(SG ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", LG)
        }
      }(GG, wG, bG) : null
    }

    function yb(GG, bG, ZG, wG) {
      const SG = ZG.loadoutOptionOwnedTier,
        LG = ZG.loadoutOptionName;
      if ("loadoutEquip" === wG) return 0 === SG ? null : {
        board: Ub(GG, bG, ZG.loadoutOptionId, null),
        notice: pb("loadoutNoticeEquipped", LG)
      };
      const yG = "loadoutUnlock" === wG;
      if (yG && 0 !== SG || "loadoutUpgrade" === wG && (0 === SG || SG >= ZG.loadoutOptionTiers.length) || "loadoutUnequip" === wG) return null;
      const kG = ZG.loadoutOptionTiers[SG].loadoutTierCost;
      if (!bb(GG, kG)) return null;
      const UG = {
          ...ZG,
          loadoutOptionOwnedTier: SG + 1
        },
        YG = yG ? ZG.loadoutOptionId : bG.loadoutSlotEquippedId;
      return {
        board: Ub(Vb(GG, kG), bG, YG, UG),
        notice: yG ? pb("loadoutNoticeUnlocked", LG) : pb("loadoutNoticeUpgraded", LG, SG + 1)
      }
    }

    function kb(GG, bG, ZG, wG) {
      const SG = ZG.loadoutOptionOwnedTier > 0,
        LG = ZG.loadoutOptionName;
      if ("loadoutEquip" === wG && SG) return {
        board: Ub(GG, bG, ZG.loadoutOptionId, null),
        notice: pb("loadoutNoticeEquipped", LG)
      };
      const yG = ZG.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== wG || SG || !bb(GG, yG) ? null : {
        board: Ub(Vb(GG, yG), bG, ZG.loadoutOptionId, {
          ...ZG,
          loadoutOptionOwnedTier: 1
        }),
        notice: pb("loadoutNoticeUnlocked", LG)
      }
    }

    function Ub(GG, bG, ZG, wG) {
      const SG = {
        ...bG,
        loadoutSlotEquippedId: ZG,
        loadoutSlotOptions: bG.loadoutSlotOptions.map((GG => null !== wG && GG.loadoutOptionId === wG.loadoutOptionId ? wG : GG))
      };
      return {
        ...GG,
        loadoutSlots: GG.loadoutSlots.map((GG => GG === bG ? SG : GG))
      }
    }

    function Yb(GG, bG) {
      return {
        ...GG,
        loadoutPerks: GG.loadoutPerks.map((GG => GG.loadoutPerkId === bG.loadoutPerkId ? bG : GG))
      }
    }

    function Vb(GG, bG) {
      return {
        ...GG,
        loadoutCoins: GG.loadoutCoins - bG.loadoutCostCoins,
        loadoutHeldParts: GG.loadoutHeldParts.map((GG => {
          const ZG = bG.loadoutCostParts.find((bG => bG.loadoutPartCurrency === GG.loadoutHeldPartCurrency));
          return ZG ? {
            ...GG,
            loadoutHeldPartAmount: GG.loadoutHeldPartAmount - ZG.loadoutPartAmount
          } : GG
        }))
      }
    }

    function pb(GG, bG) {
      return {
        loadoutNoticeKey: GG,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: bG,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const fb = "containmentLoadoutView";
    class Qb extends Gb {
      constructor(GG, bG, ZG, wG) {
        super(GG, bG, ZG, wG, "loadout", Lb), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = GG => {
          this.slot = GG, this.selectedId = Kb(this.board, GG), this.emit()
        }
      }
      messageOpens(GG) {
        return GG.loadoutMessageOpens
      }
      messageNotice(GG) {
        return GG.loadoutNotice
      }
      openingSelection(GG) {
        return Kb(GG, this.slot)
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

    function Kb(GG, bG) {
      if ("loadoutPerks" === bG) {
        var ZG;
        const bG = GG.loadoutPerks;
        return (null !== (ZG = bG.find((GG => GG.loadoutPerkEquipped))) && void 0 !== ZG ? ZG : bG[0]).loadoutPerkId
      }
      return wb(GG, bG).loadoutSlotEquippedId
    }
    const hb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var db = ZG(37224),
      Jb = ZG(1239);
    const rb = {
        loadoutPrimary: `${CG}:loadoutSlotPrimary`,
        loadoutSecondary: `${CG}:loadoutSlotSecondary`,
        loadoutOffensive: `${CG}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${CG}:loadoutSlotSelfHelp`,
        loadoutArmour: `${CG}:loadoutSlotArmour`,
        loadoutPerks: `${CG}:loadoutSlotPerks`
      },
      zb = {
        section: "right",
        Df: "bottom",
        act: "top"
      },
      Eb = (0, wG.createContext)({
        step: null,
        targetRef: () => {}
      });

    function ob() {
      const {
        step: GG,
        targetRef: bG
      } = (0, wG.useContext)(Eb);
      return (ZG, wG) => (null === GG || void 0 === GG ? void 0 : GG.kind) === ZG && GG.id === wG ? bG : void 0
    }

    function Xb(GG, bG) {
      const ZG = bG.loadoutTargetId;
      if ("loadoutPerks" === bG.loadoutTargetSection) {
        const bG = GG.loadoutPerks.find((GG => GG.loadoutPerkId === ZG));
        return {
          name: bG.loadoutPerkName,
          owned: bG.loadoutPerkOwned,
          equipped: bG.loadoutPerkEquipped
        }
      }
      const wG = wb(GG, bG.loadoutTargetSection),
        SG = wG.loadoutSlotOptions.find((GG => GG.loadoutOptionId === ZG));
      return {
        name: SG.loadoutOptionName,
        owned: SG.loadoutOptionOwnedTier > 0,
        equipped: wG.loadoutSlotEquippedId === ZG
      }
    }

    function ub(GG, bG, ZG, wG) {
      const [SG, LG] = GG(`${CG}:${bG}`, {
        [ZG]: "\x01"
      }).split("\x01");
      return (0, iG.jsxs)(iG.Fragment, {
        children: [SG, (0, iG.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: wG
        }), LG]
      })
    }

    function ib(GG) {
      let {
        view: bG,
        onDismiss: ZG,
        children: SG
      } = GG;
      const {
        t: LG
      } = (0, pG.w)(), yG = bG.loadout, kG = bG.open ? yG.loadoutWalkthrough.map((GG => ({
        target: GG,
        info: Xb(yG, GG)
      }))).find((GG => {
        let {
          info: bG
        } = GG;
        return !bG.equipped
      })) : void 0;
      let UG = null,
        YG = null;
      if (void 0 !== kG) {
        const {
          target: GG,
          info: ZG
        } = kG;
        bG.slot !== GG.loadoutTargetSection ? (UG = {
          kind: "section",
          id: GG.loadoutTargetSection
        }, YG = ub(LG, "loadoutWalkthroughSection", "section", LG(rb[GG.loadoutTargetSection]))) : bG.selectedId !== GG.loadoutTargetId ? (UG = {
          kind: "Df",
          id: GG.loadoutTargetId
        }, YG = ub(LG, "loadoutWalkthroughPick", "name", ZG.name)) : (UG = {
          kind: "act",
          id: GG.loadoutTargetId
        }, YG = ub(LG, ZG.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", ZG.name))
      }
      const VG = null === UG ? null : function(GG) {
          return `${GG.kind}:${GG.id}`
        }(UG),
        [fG, QG] = (0, wG.useState)(null),
        KG = (0, wG.useCallback)((GG => {
          QG((bG => null !== GG ? {
            key: VG,
            node: GG
          } : (null === bG || void 0 === bG ? void 0 : bG.key) === VG ? null : bG))
        }), [VG]),
        hG = null !== VG && (null === fG || void 0 === fG ? void 0 : fG.key) === VG ? fG.node : null;
      return (0, iG.jsxs)(Eb.Provider, {
        value: {
          step: UG,
          targetRef: KG
        },
        children: [SG, null !== UG && null !== hG && (0, iG.jsx)(Cb, {
          target: hG,
          placement: zb[UG.kind],
          onDismiss: ZG,
          children: YG
        }, VG)]
      })
    }

    function Cb(GG) {
      let {
        target: bG,
        placement: ZG,
        onDismiss: SG,
        children: LG
      } = GG;
      const {
        t: yG
      } = (0, pG.w)(), kG = (0, wG.useRef)(bG);
      return kG.current = bG, (0, Jb.w)("popup", kG, SG), (0, iG.jsxs)(db.e, {
        target: bG,
        placement: ZG,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, iG.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, iG.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: hb,
            alt: "",
            draggable: !1
          }), (0, iG.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: yG(`${CG}:operatorName`)
          }), (0, iG.jsx)(KG.j, {
            onClick: SG,
            ariaLabel: yG(`${CG}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, iG.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: LG
        })]
      })
    }
    const Wb = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function mb(GG) {
      let {
        cost: bG,
        loadout: ZG
      } = GG;
      const {
        t: wG
      } = (0, pG.w)();
      return bG.loadoutCostCoins <= 0 && 0 === bG.loadoutCostParts.length ? (0, iG.jsx)("span", {
        className: "LoadoutCost",
        children: wG(`${CG}:loadoutFree`)
      }) : (0, iG.jsxs)("span", {
        className: "LoadoutCost",
        children: [bG.loadoutCostCoins > 0 && (0, iG.jsx)(vG, {
          itemName: WG,
          amount: bG.loadoutCostCoins,
          Ik: ZG.loadoutCoins
        }), bG.loadoutCostParts.map((GG => {
          const bG = Zb(ZG, GG.loadoutPartCurrency);
          return (0, iG.jsx)(vG, {
            itemName: bG.loadoutHeldPartItem,
            amount: GG.loadoutPartAmount,
            Ik: bG.loadoutHeldPartAmount
          }, GG.loadoutPartCurrency)
        }))]
      })
    }
    const Ib = {
      loadoutStatFireRate: `${CG}:loadoutUnitPerMinute`,
      loadoutStatReload: `${CG}:loadoutUnitSeconds`,
      loadoutStatResupply: `${CG}:loadoutUnitSeconds`
    };

    function Fb(GG) {
      return "loadoutStatPotency" === GG.loadoutStatKind ? (0, BG.X)(GG.loadoutStatValue) : String(GG.loadoutStatValue)
    }

    function vb(GG) {
      var bG;
      let {
        option: ZG
      } = GG;
      const {
        t: wG
      } = (0, pG.w)(), SG = ZG.loadoutOptionTiers, LG = null === (bG = SG[0]) || void 0 === bG ? void 0 : bG.loadoutTierStats.map((GG => GG.loadoutStatKind));
      if (!LG || 0 === LG.length) return null;
      const yG = ZG.loadoutOptionOwnedTier,
        kG = (GG, bG) => {
          var ZG;
          return null === (ZG = SG[GG]) || void 0 === ZG ? void 0 : ZG.loadoutTierStats.find((GG => GG.loadoutStatKind === bG))
        };
      return (0, iG.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, iG.jsx)("thead", {
          children: (0, iG.jsxs)("tr", {
            children: [(0, iG.jsx)("th", {}), SG.map(((GG, bG) => (0, iG.jsx)("th", {
              className: YG()({
                Current: bG + 1 === yG,
                Next: bG === yG
              }),
              children: wG(`${CG}:loadoutTier`, {
                tier: (0, BG.X)(bG + 1)
              })
            }, bG)))]
          })
        }), (0, iG.jsx)("tbody", {
          children: LG.map((GG => {
            const bG = Ib[GG];
            return (0, iG.jsxs)("tr", {
              children: [(0, iG.jsxs)("th", {
                scope: "row",
                children: [wG(`${CG}:${GG}`), bG && (0, iG.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: wG(bG)
                })]
              }), SG.map(((bG, ZG) => {
                const wG = kG(ZG, GG),
                  SG = ZG > 0 ? kG(ZG - 1, GG) : void 0,
                  LG = wG && SG ? wG.loadoutStatValue - SG.loadoutStatValue : 0,
                  UG = Wb.has(GG) ? LG < 0 : LG > 0,
                  VG = ZG === yG;
                return (0, iG.jsxs)("td", {
                  className: YG()({
                    Current: ZG + 1 === yG,
                    Next: VG,
                    Gain: UG,
                    Owned: ZG < yG
                  }),
                  children: [VG && UG && (0, iG.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: LG < 0 ? "\u25bc" : "\u25b2"
                  }), wG ? Fb(wG) : "-"]
                }, ZG)
              }))]
            }, GG)
          }))
        })]
      })
    }

    function ab(GG) {
      let {
        view: bG,
        controller: ZG,
        slot: wG,
        option: SG
      } = GG;
      const {
        t: LG
      } = (0, pG.w)(), yG = bG.loadout, kG = SG.loadoutOptionOwnedTier, UG = SG.loadoutOptionTiers.length, YG = wG.loadoutSlotEquippedId === SG.loadoutOptionId, VG = kG < UG ? SG.loadoutOptionTiers[kG].loadoutTierCost : null, fG = null !== VG && bb(yG, VG), QG = SG.loadoutOptionId, hG = ob();
      return (0, iG.jsxs)(iG.Fragment, {
        children: [(0, iG.jsx)(lb, {
          icon: SG.loadoutOptionIcon,
          name: SG.loadoutOptionName,
          status: 0 === kG ? LG(`${CG}:loadoutLocked`) : UG > 1 ? LG(`${CG}:loadoutTier`, {
            tier: (0, BG.X)(kG)
          }) : null,
          locked: 0 === kG,
          equipped: YG
        }), (0, iG.jsx)("p", {
          className: "BoardDescription",
          children: SG.loadoutOptionDescription
        }), (0, iG.jsx)(vb, {
          option: SG
        }), (0, iG.jsxs)("div", {
          ref: hG("act", QG),
          className: "BoardActions",
          children: [null !== VG && (0, iG.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, iG.jsx)(mb, {
              cost: VG,
              loadout: yG
            }), (0, iG.jsx)(KG.k, {
              disabled: !fG || bG.pending,
              onClick: () => {
                ZG.act(0 === kG ? "loadoutUnlock" : "loadoutUpgrade", QG)
              },
              children: 0 === kG ? LG(`${CG}:loadoutUnlock`) : LG(`${CG}:loadoutUpgrade`, {
                tier: (0, BG.X)(kG + 1)
              })
            })]
          }), null === VG && UG > 1 && (0, iG.jsx)("span", {
            className: "BoardHint",
            children: LG(`${CG}:loadoutMaxed`)
          }), kG > 0 && !YG && (0, iG.jsx)(KG.d, {
            disabled: bG.pending,
            onClick: () => {
              ZG.act("loadoutEquip", QG)
            },
            children: LG(`${CG}:loadoutEquip`)
          })]
        })]
      })
    }

    function cb(GG) {
      let {
        view: bG,
        controller: ZG,
        perk: wG
      } = GG;
      const {
        t: SG
      } = (0, pG.w)(), LG = bG.loadout, yG = Sb(LG), kG = wG.loadoutPerkId, UG = ob();
      return (0, iG.jsxs)(iG.Fragment, {
        children: [(0, iG.jsx)(lb, {
          icon: wG.loadoutPerkIcon,
          name: wG.loadoutPerkName,
          status: wG.loadoutPerkOwned ? null : SG(`${CG}:loadoutLocked`),
          locked: !wG.loadoutPerkOwned,
          equipped: wG.loadoutPerkEquipped
        }), (0, iG.jsx)("p", {
          className: "BoardDescription",
          children: wG.loadoutPerkDescription
        }), (0, iG.jsxs)("div", {
          ref: UG("act", kG),
          className: "BoardActions",
          children: [!wG.loadoutPerkOwned && (0, iG.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, iG.jsx)(mb, {
              cost: wG.loadoutPerkCost,
              loadout: LG
            }), (0, iG.jsx)(KG.k, {
              disabled: !bb(LG, wG.loadoutPerkCost) || bG.pending,
              onClick: () => {
                ZG.act("loadoutUnlock", kG)
              },
              children: SG(`${CG}:loadoutUnlock`)
            })]
          }), wG.loadoutPerkOwned && !wG.loadoutPerkEquipped && (0, iG.jsx)(KG.d, {
            disabled: yG || bG.pending,
            onClick: () => {
              ZG.act("loadoutEquip", kG)
            },
            children: SG(`${CG}:loadoutEquip`)
          }), wG.loadoutPerkOwned && !wG.loadoutPerkEquipped && yG && (0, iG.jsx)("span", {
            className: "BoardHint",
            children: SG(`${CG}:loadoutSocketsFullHint`)
          }), wG.loadoutPerkEquipped && (0, iG.jsx)(KG.K, {
            disabled: bG.pending,
            onClick: () => {
              ZG.act("loadoutUnequip", kG)
            },
            children: SG(`${CG}:loadoutUnequip`)
          })]
        })]
      })
    }

    function lb(GG) {
      let {
        icon: bG,
        name: ZG,
        status: wG,
        locked: SG,
        equipped: LG
      } = GG;
      const {
        t: yG
      } = (0, pG.w)();
      return (0, iG.jsxs)(jG, {
        icon: (0, iG.jsx)(IG, {
          itemName: bG
        }),
        name: ZG,
        children: [null !== wG && (0, iG.jsx)("span", {
          className: YG()("LoadoutStatusText", {
            Locked: SG
          }),
          children: wG
        }), LG && (0, iG.jsx)("span", {
          className: "BoardBadge",
          children: yG(`${CG}:loadoutEquippedBadge`)
        })]
      })
    }

    function jb(GG) {
      let {
        view: bG,
        controller: ZG
      } = GG;
      const wG = bG.loadout;
      if ("loadoutPerks" === bG.slot) {
        const GG = wG.loadoutPerks.find((GG => GG.loadoutPerkId === bG.selectedId));
        return (0, iG.jsx)("section", {
          className: "BoardDetail",
          children: GG && (0, iG.jsx)(cb, {
            view: bG,
            controller: ZG,
            perk: GG
          })
        })
      }
      const SG = wb(wG, bG.slot),
        LG = SG.loadoutSlotOptions.find((GG => GG.loadoutOptionId === bG.selectedId));
      return (0, iG.jsx)("section", {
        className: "BoardDetail",
        children: LG && (0, iG.jsx)(ab, {
          view: bG,
          controller: ZG,
          slot: SG,
          option: LG
        })
      })
    }

    function Pb(GG) {
      let {
        owned: bG,
        total: ZG
      } = GG;
      return ZG <= 1 ? null : (0, iG.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: ZG
        }, ((GG, ZG) => (0, iG.jsx)("span", {
          className: YG()("LoadoutPip", {
            Filled: ZG < bG
          })
        }, ZG)))
      })
    }

    function Mb(GG) {
      let {
        view: bG,
        controller: ZG
      } = GG;
      const {
        t: wG
      } = (0, pG.w)(), SG = bG.loadout, LG = ob();
      return (0, iG.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": wG(`${CG}:loadoutKit`),
        children: [SG.loadoutSlots.map((GG => {
          const SG = GG.loadoutSlotOptions.find((bG => bG.loadoutOptionId === GG.loadoutSlotEquippedId));
          return (0, iG.jsxs)("button", {
            ref: LG("section", GG.loadoutSlotKind),
            type: "button",
            className: YG()("LoadoutKitSlot", {
              Selected: bG.slot === GG.loadoutSlotKind
            }),
            onClick: () => {
              ZG.selectSlot(GG.loadoutSlotKind)
            },
            children: [(0, iG.jsx)("span", {
              className: "LoadoutKitIcon",
              children: SG && (0, iG.jsx)(IG, {
                itemName: SG.loadoutOptionIcon
              })
            }), (0, iG.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, iG.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, iG.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: wG(rb[GG.loadoutSlotKind])
                }), SG && (0, iG.jsx)(Pb, {
                  owned: SG.loadoutOptionOwnedTier,
                  total: SG.loadoutOptionTiers.length
                })]
              }), (0, iG.jsx)("span", {
                className: "LoadoutKitName",
                children: null === SG || void 0 === SG ? void 0 : SG.loadoutOptionName
              })]
            })]
          }, GG.loadoutSlotKind)
        })), (0, iG.jsx)(Ab, {
          view: bG,
          controller: ZG
        })]
      })
    }

    function Ab(GG) {
      let {
        view: bG,
        controller: ZG
      } = GG;
      const {
        t: wG
      } = (0, pG.w)(), SG = bG.loadout, LG = SG.loadoutPerks.filter((GG => GG.loadoutPerkEquipped)), yG = ob();
      return (0, iG.jsxs)("button", {
        ref: yG("section", "loadoutPerks"),
        type: "button",
        className: YG()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === bG.slot
        }),
        onClick: () => {
          ZG.selectSlot("loadoutPerks")
        },
        children: [(0, iG.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, iG.jsx)("span", {
            className: "LoadoutKitLabel",
            children: wG(rb.loadoutPerks)
          }), (0, iG.jsx)("span", {
            className: "LoadoutPerkCount",
            children: wG(`${CG}:loadoutPerkCount`, {
              equipped: String(LG.length),
              max: String(SG.loadoutMaxPerks)
            })
          })]
        }), (0, iG.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: SG.loadoutMaxPerks
          }, ((GG, bG) => {
            const ZG = LG[bG];
            return (0, iG.jsxs)("span", {
              className: YG()("LoadoutSocket", {
                Filled: ZG,
                Empty: !ZG
              }),
              children: [(0, iG.jsx)("span", {
                className: "LoadoutSocketWell",
                children: ZG && (0, iG.jsx)(IG, {
                  itemName: ZG.loadoutPerkIcon
                })
              }), (0, iG.jsx)("span", {
                className: "LoadoutSocketName",
                children: ZG ? ZG.loadoutPerkName : wG(`${CG}:loadoutPerkSocketEmpty`)
              })]
            }, bG)
          }))
        })]
      })
    }

    function sb(GG) {
      let {
        icon: bG,
        name: ZG,
        selected: wG,
        equipped: SG,
        locked: LG,
        ownedTier: yG,
        tiers: kG,
        buttonRef: UG,
        onSelect: YG
      } = GG;
      const {
        t: VG
      } = (0, pG.w)();
      return (0, iG.jsxs)(lG, {
        icon: (0, iG.jsx)(IG, {
          itemName: bG
        }),
        name: ZG,
        selected: wG,
        locked: LG,
        buttonRef: UG,
        onSelect: YG,
        children: [SG && (0, iG.jsx)("span", {
          className: "BoardBadge",
          children: VG(`${CG}:loadoutEquippedBadge`)
        }), LG && (0, iG.jsx)("span", {
          className: "BoardBadge Muted",
          children: VG(`${CG}:loadoutLocked`)
        }), !LG && (0, iG.jsx)(Pb, {
          owned: yG,
          total: kG
        })]
      })
    }

    function qb(GG) {
      let {
        view: bG,
        controller: ZG
      } = GG;
      const wG = bG.loadout,
        SG = ob();
      if ("loadoutPerks" === bG.slot) return (0, iG.jsx)("div", {
        className: "BoardTiles",
        children: wG.loadoutPerks.map((GG => (0, iG.jsx)(sb, {
          icon: GG.loadoutPerkIcon,
          name: GG.loadoutPerkName,
          selected: bG.selectedId === GG.loadoutPerkId,
          equipped: GG.loadoutPerkEquipped,
          locked: !GG.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: SG("Df", GG.loadoutPerkId),
          onSelect: () => {
            ZG.select(GG.loadoutPerkId)
          }
        }, GG.loadoutPerkId)))
      });
      const LG = wb(wG, bG.slot);
      return (0, iG.jsx)("div", {
        className: "BoardTiles",
        children: LG.loadoutSlotOptions.map((GG => (0, iG.jsx)(sb, {
          icon: GG.loadoutOptionIcon,
          name: GG.loadoutOptionName,
          selected: bG.selectedId === GG.loadoutOptionId,
          equipped: LG.loadoutSlotEquippedId === GG.loadoutOptionId,
          locked: 0 === GG.loadoutOptionOwnedTier,
          ownedTier: GG.loadoutOptionOwnedTier,
          tiers: GG.loadoutOptionTiers.length,
          buttonRef: SG("Df", GG.loadoutOptionId),
          onSelect: () => {
            ZG.select(GG.loadoutOptionId)
          }
        }, GG.loadoutOptionId)))
      })
    }

    function nb(GG) {
      let {
        loadout: bG
      } = GG;
      return (0, iG.jsx)(PG, {
        coins: bG.loadoutCoins,
        children: bG.loadoutHeldParts.filter((GG => GG.loadoutHeldPartAmount > 0)).map((GG => (0, iG.jsx)(vG, {
          itemName: GG.loadoutHeldPartItem,
          amount: GG.loadoutHeldPartAmount
        }, GG.loadoutHeldPartCurrency)))
      })
    }

    function gb(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, VG.j)(fb, bG.getSnapshot()),
        {
          t: wG
        } = (0, pG.w)();
      if (null === ZG.loadout) return null;
      const SG = ZG.notice;
      return (0, iG.jsx)(ib, {
        view: ZG,
        onDismiss: bG.dismiss,
        children: (0, iG.jsxs)(mG, {
          open: ZG.open,
          onDismiss: bG.dismiss,
          title: wG(`${CG}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, iG.jsx)(nb, {
            loadout: ZG.loadout
          }),
          statusRefused: null === SG || void 0 === SG ? void 0 : SG.loadoutNoticeRefused,
          status: (0, iG.jsxs)(iG.Fragment, {
            children: [(0, iG.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: wG(`${CG}:loadoutRadioBadge`)
            }), null !== SG && wG(`${CG}:${SG.loadoutNoticeKey}`, {
              name: SG.loadoutNoticeName,
              tier: (0, BG.X)(SG.loadoutNoticeTier),
              max: String(ZG.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, iG.jsx)(Mb, {
            view: ZG,
            controller: bG
          }), (0, iG.jsx)(qb, {
            view: ZG,
            controller: bG
          }), (0, iG.jsx)(jb, {
            view: ZG,
            controller: bG
          })]
        })
      })
    }

    function eb(GG, bG, ZG) {
      const wG = GG.locatorEntries.find((GG => GG.locatorEntryId === ZG));
      if (!wG) return null;
      const SG = wG.locatorEntryName;
      if ("locatorDisarm" === bG) return wG.locatorEntryArmed ? {
        board: Rb(GG, null),
        notice: Tb("locatorNoticeDisarmed", SG)
      } : null;
      if ("locatorArm" === bG) return wG.locatorEntryOwned && !wG.locatorEntryArmed ? {
        board: Rb(GG, ZG),
        notice: Tb("locatorNoticeArmed", SG)
      } : null;
      if (wG.locatorEntryOwned || GG.locatorCoins < wG.locatorEntryPrice) return null;
      const LG = Rb({
        ...GG,
        locatorCoins: GG.locatorCoins - wG.locatorEntryPrice
      }, ZG);
      return {
        board: {
          ...LG,
          locatorEntries: LG.locatorEntries.map((GG => GG.locatorEntryId === ZG ? {
            ...GG,
            locatorEntryOwned: !0
          } : GG))
        },
        notice: Tb("locatorNoticeBought", SG)
      }
    }

    function Rb(GG, bG) {
      return {
        ...GG,
        locatorEntries: GG.locatorEntries.map((GG => {
          const ZG = GG.locatorEntryId === bG;
          return GG.locatorEntryArmed === ZG ? GG : {
            ...GG,
            locatorEntryArmed: ZG
          }
        }))
      }
    }

    function Tb(GG, bG) {
      return {
        locatorNoticeKey: GG,
        locatorNoticeRefused: !1,
        locatorNoticeName: bG
      }
    }
    const Hb = "containmentLocatorView";
    class tb extends Gb {
      constructor(GG, bG, ZG, wG) {
        super(GG, bG, ZG, wG, "locator", eb), this.snapshot = this.buildSnapshot()
      }
      messageOpens(GG) {
        return GG.locatorMessageOpens
      }
      messageNotice(GG) {
        return GG.locatorNotice
      }
      openingSelection(GG) {
        var bG;
        const ZG = GG.locatorEntries;
        return (null !== (bG = ZG.find((GG => GG.locatorEntryArmed))) && void 0 !== bG ? bG : ZG[0]).locatorEntryId
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
    const Db = {
        locatorContained: `${CG}:locatorFlavourContained`,
        locatorEncountered: `${CG}:locatorFlavourEncountered`,
        locatorUnseen: `${CG}:locatorFlavourUnseen`
      },
      Nb = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${CG}:locatorAttunedNormal`,
        codexHardOnly: `${CG}:locatorAttunedHard`
      };

    function Ob() {
      return (0, iG.jsx)(iG.Fragment, {
        children: Array.from({
          length: 5
        }, ((GG, bG) => (0, iG.jsx)("span", {
          className: "LocatorFly",
          children: (0, iG.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, bG)))
      })
    }

    function xb(GG) {
      let {
        entry: bG
      } = GG;
      const {
        t: ZG
      } = (0, pG.w)();
      return bG.locatorEntryArmed ? (0, iG.jsx)("span", {
        className: "BoardBadge Armed",
        children: ZG(`${CG}:locatorArmedBadge`)
      }) : bG.locatorEntryOwned ? (0, iG.jsx)("span", {
        className: "BoardBadge",
        children: ZG(`${CG}:locatorOwnedBadge`)
      }) : null
    }

    function Bb(GG) {
      let {
        entry: bG,
        coins: ZG,
        inTile: wG = !1
      } = GG;
      return (0, iG.jsx)(vG, {
        itemName: WG,
        amount: bG.locatorEntryPrice,
        Ik: ZG,
        inTile: wG
      })
    }

    function GZ(GG) {
      let {
        view: bG,
        controller: ZG,
        entry: wG
      } = GG;
      const {
        t: SG
      } = (0, pG.w)(), LG = wG.locatorEntryId, yG = bG.locators.locatorEntries.find((GG => GG.locatorEntryArmed && GG !== wG));
      return (0, iG.jsxs)("div", {
        className: "BoardActions",
        children: [wG.locatorEntryArmed && (0, iG.jsx)(KG.K, {
          disabled: bG.pending,
          onClick: () => {
            ZG.act("locatorDisarm", LG)
          },
          children: SG(`${CG}:locatorDisarm`)
        }), wG.locatorEntryOwned && !wG.locatorEntryArmed && (0, iG.jsx)(KG.d, {
          disabled: bG.pending,
          onClick: () => {
            ZG.act("locatorArm", LG)
          },
          children: SG(`${CG}:locatorArm`)
        }), !wG.locatorEntryOwned && (0, iG.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, iG.jsx)(Bb, {
            entry: wG,
            coins: bG.locators.locatorCoins
          }), (0, iG.jsx)(KG.k, {
            disabled: bG.locators.locatorCoins < wG.locatorEntryPrice || bG.pending,
            onClick: () => {
              ZG.act("locatorBuy", LG)
            },
            children: SG(`${CG}:locatorBuy`)
          })]
        }), yG && !wG.locatorEntryArmed && (0, iG.jsx)("span", {
          className: "BoardHint",
          children: SG(`${CG}:locatorReplacesHint`, {
            name: yG.locatorEntryName
          })
        })]
      })
    }

    function bZ(GG) {
      let {
        entry: bG
      } = GG;
      return "locatorUnseen" === bG.locatorEntryStanding ? (0, iG.jsx)(IG, {
        itemName: "Compass"
      }) : (0, iG.jsx)(FG, {
        anomalyId: bG.locatorEntryId,
        caught: "locatorContained" === bG.locatorEntryStanding
      })
    }

    function ZZ(GG) {
      let {
        view: bG,
        controller: ZG,
        entry: wG
      } = GG;
      const {
        t: SG
      } = (0, pG.w)(), LG = Nb[wG.locatorEntryDifficulty];
      return (0, iG.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, iG.jsxs)("div", {
          className: YG()("LocatorLabel", {
            Armed: wG.locatorEntryArmed
          }),
          children: [(0, iG.jsx)(jG, {
            icon: (0, iG.jsx)(bZ, {
              entry: wG
            }),
            name: SG(`${CG}:locatorName`, {
              name: wG.locatorEntryName
            }),
            children: (0, iG.jsx)(xb, {
              entry: wG
            })
          }), (0, iG.jsx)("p", {
            className: "BoardDescription",
            children: SG(wG.locatorEntryArmed ? `${CG}:locatorFlavourArmed` : Db[wG.locatorEntryStanding])
          }), null !== LG && (0, iG.jsx)("p", {
            className: "LocatorAttuned",
            children: SG(LG)
          }), (0, iG.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: SG(`${CG}:locatorUsage`)
          })]
        }), (0, iG.jsx)(GZ, {
          view: bG,
          controller: ZG,
          entry: wG
        })]
      })
    }

    function wZ(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, VG.j)(Hb, bG.getSnapshot()),
        {
          t: wG
        } = (0, pG.w)(),
        SG = ZG.locators;
      if (null === SG) return null;
      const LG = SG.locatorEntries.find((GG => GG.locatorEntryId === ZG.selectedId)),
        yG = ZG.notice;
      return (0, iG.jsxs)(mG, {
        open: ZG.open,
        onDismiss: bG.dismiss,
        title: wG(`${CG}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, iG.jsx)(Ob, {}),
        headerExtra: (0, iG.jsx)(PG, {
          coins: SG.locatorCoins
        }),
        statusRefused: null === yG || void 0 === yG ? void 0 : yG.locatorNoticeRefused,
        status: (0, iG.jsxs)(iG.Fragment, {
          children: [(0, iG.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: wG(`${CG}:locatorKeeperName`)
          }), null !== yG && wG(`${CG}:${yG.locatorNoticeKey}`, {
            name: yG.locatorNoticeName
          })]
        }),
        children: [(0, iG.jsx)("div", {
          className: "BoardTiles",
          children: SG.locatorEntries.map((GG => (0, iG.jsxs)(lG, {
            icon: (0, iG.jsx)(bZ, {
              entry: GG
            }),
            name: GG.locatorEntryName,
            selected: GG === LG,
            locked: !1,
            className: YG()("LocatorTag", {
              Armed: GG.locatorEntryArmed
            }),
            onSelect: () => {
              bG.select(GG.locatorEntryId)
            },
            children: [(0, iG.jsx)(xb, {
              entry: GG
            }), !GG.locatorEntryOwned && (0, iG.jsx)(Bb, {
              entry: GG,
              coins: SG.locatorCoins,
              inTile: !0
            })]
          }, GG.locatorEntryId)))
        }), (0, iG.jsx)(ZZ, {
          view: ZG,
          controller: bG,
          entry: LG
        })]
      })
    }

    function SZ(GG) {
      let {
        loadout: bG,
        codex: ZG,
        locator: wG
      } = GG;
      return (0, iG.jsxs)(iG.Fragment, {
        children: [(0, iG.jsx)(gb, {
          controller: bG
        }), (0, iG.jsx)(xG, {
          controller: ZG
        }), (0, iG.jsx)(wZ, {
          controller: wG
        })]
      })
    }
    var LZ = ZG(38975);
    class yZ {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = GG, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new LZ.d({
          spacingMs: 0,
          now: bG
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(GG, bG) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, bG(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(GG), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const GG of this.listeners) GG()
      }
    }
    var kZ = ZG(38971);
    const UZ = new Map([
      ["npc_general", hb],
      ["npc_tentacle_guy", kZ]
    ]);

    function YZ(GG) {
      const bG = UZ.get(GG);
      if (void 0 === bG) return null;
      const ZG = document.createElement("img");
      return ZG.src = bG, ZG.alt = "", ZG.draggable = !1, ZG.style.imageRendering = "pixelated", ZG
    }
    const VZ = function() {
      let GG, bG = !1,
        ZG = null,
        UG = null;
      const YG = [],
        VG = GG => {
          for (const bG of YG) bG !== GG && bG.close();
          (0, kG.m)()
        },
        pG = GG => {
          GG && (0, kG.i)()
        },
        fG = new yZ((bG => {
          GG.sendCommand(bG)
        })),
        QG = new Qb((GG => {
          yG.l.xh(fb, GG, !0)
        }), VG, pG, fG),
        KG = new sG((GG => {
          yG.l.xh(AG, GG, !0)
        }), VG, pG),
        hG = new tb((GG => {
          yG.l.xh(Hb, GG, !0)
        }), VG, pG, fG);
      YG.push(QG, KG, hG);
      return {
        onCreate: bG => {
          GG = bG, ZG = (0, kG.q)(null, {
            content: (0, wG.createElement)(SZ, {
              loadout: QG,
              codex: KG,
              locator: hG
            }),
            onClose: () => {
              for (const GG of YG) GG.close()
            }
          }), UG = (0, LG.g)(YZ)
        },
        onReceivedMessageFromServer: (GG, bG) => {
          "containmentLoadout" === GG ? QG.hK(bG) : "containmentLoadoutClose" === GG ? QG.isOpen() && (QG.close(), (0, kG.f)()) : "containmentCodex" === GG ? KG.hK(bG) : "containmentLocator" === GG && hG.hK(bG)
        },
        Tp: () => {
          bG || SG.e.get("loadingOverlayVisible") || (bG = !0, GG.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var GG, bG;
          null === (GG = ZG) || void 0 === GG || GG(), ZG = null, null === (bG = UG) || void 0 === bG || bG(), UG = null;
          for (const ZG of YG) ZG.dispose();
          fG.dispose()
        }
      }
    }
  },
  39724: (GG, bG, ZG) => {
    var wG = {
      "./breach-zero-uncaught.webp": 39727,
      "./breach-zero.webp": 39732,
      "./brood-father-uncaught.webp": 39737,
      "./brood-father.webp": 39741,
      "./carousel-uncaught.webp": 39750,
      "./carousel.webp": 39754,
      "./deadlock-uncaught.webp": 39762,
      "./deadlock.webp": 39764,
      "./frost-revenant-uncaught.webp": 39769,
      "./frost-revenant.webp": 39775,
      "./hollow-choir-uncaught.webp": 39784,
      "./hollow-choir.webp": 39790,
      "./magma-warden-uncaught.webp": 39793,
      "./magma-warden.webp": 39798,
      "./patient-zero-uncaught.webp": 39801,
      "./patient-zero.webp": 39808,
      "./siege-engine-uncaught.webp": 39815,
      "./siege-engine.webp": 39820,
      "./warp-stalker-uncaught.webp": 39828,
      "./warp-stalker.webp": 39830
    };

    function SG(GG) {
      var bG = LG(GG);
      return ZG(bG)
    }

    function LG(GG) {
      if (!ZG.o(wG, GG)) {
        var bG = new Error("Cannot find module '" + GG + "'");
        throw bG.code = "MODULE_NOT_FOUND", bG
      }
      return wG[GG]
    }
    SG.keys = function() {
      return Object.keys(wG)
    }, SG.resolve = LG, GG.exports = SG, SG.id = 39724
  },
  39727: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39732: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39737: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39741: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39750: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39754: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39762: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39764: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39769: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39775: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39784: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39790: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39793: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39798: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39801: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39808: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39815: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39820: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39828: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39830: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38971: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);