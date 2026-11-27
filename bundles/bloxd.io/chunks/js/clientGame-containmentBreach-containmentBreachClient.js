export const id = 15;
export const ids = [15];
export const modules = {
  39370: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    const ye = 4,
      be = 12e3,
      Me = 1e3;
    class Ke {
      constructor() {
        let {
          limit: ee = ye,
          windowMs: ie = be,
          spacingMs: He = Me,
          now: Ke = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = ee, this.windowMs = ie, this.spacingMs = He, this.now = Ke
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const ee of this.priority) ee.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const ee = this.now();
        this.sent.push(ee), this.lastSentAt = ee, this.schedule(), this.notify()
      }
      addPriority(ee) {
        return this.priority.add(ee), () => {
          this.priority.delete(ee)
        }
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const ee of this.priority)
          if (ee.waiting()) return !0;
        return !1
      }
      prune() {
        const ee = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= ee;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const ee = this.now(),
          ie = this.lastSentAt + this.spacingMs,
          He = Math.min(ie > ee ? ie : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        He !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, He - ee)))
      }
      notify() {
        for (const ee of this.listeners) ee()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  39327: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    class ye {
      constructor(ee, ie, He) {
        this.yR = ee, this.beforeOpen = ie, this.afterClose = He, this.open = !1, this.xf = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.xf && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(ee) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(ee)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.xf = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.xf || (this.snapshot = this.buildSnapshot(), this.yR(this.snapshot))
      }
    }
  },
  40133: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => kH
    });
    var ye = He(59);
    var be = He(18),
      Me = He(1965),
      Ke = He(27),
      Ue = He(37424),
      Fe = He(1053),
      Je = He.n(Fe),
      oe = He(1432),
      Re = He(1127),
      ke = He(4922),
      qe = He(1335),
      fe = He(1438),
      Te = He(1970),
      pe = He(1351),
      Xe = He(1956),
      ze = He(2029),
      Be = He(198);
    const Ee = He(40138),
      ge = Object.fromEntries(Ee.keys().map((ee => [ee.replace(/^\.\/(.*)\.webp$/, "$1"), Ee(ee)]))),
      Oe = new Set;

    function de(ee, ie) {
      const He = ie ? ee : `${ee}-uncaught`,
        ye = (0, Be.b)(ge, He);
      return void 0 !== ye || Oe.has(He) || (Oe.add(He), console.warn(`Containment Breach has no mugshot ${He}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), ye
    }
    var We = He(1228);
    const te = "containmentBreach",
      Ze = "Gold Coin";

    function we(ee) {
      let {
        open: ie,
        onDismiss: He,
        title: ye,
        className: be,
        decor: Me,
        headerExtra: Ke,
        status: Ue,
        statusRefused: Fe = !1,
        children: oe
      } = ee;
      const Re = `${be}Title`;
      return (0, We.jsx)(ke.e, {
        show: ie,
        close: He,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, We.jsxs)("section", {
          className: Je()("ContainmentBoardPanel", be),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Re,
          children: [Me && (0, We.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Me
          }), (0, We.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, We.jsx)("h2", {
              id: Re,
              className: "VisuallyHidden",
              children: ye
            }), Ke, (0, We.jsx)(fe.i, {
              onClick: He
            })]
          }), (0, We.jsx)("div", {
            className: "BoardBody",
            children: oe
          }), void 0 !== Ue && (0, We.jsx)("footer", {
            className: Je()("BoardStatus", {
              Refused: Fe
            }),
            children: Ue
          })]
        })
      })
    }

    function De(ee) {
      let {
        itemName: ie
      } = ee;
      return (0, We.jsx)(Te.c, {
        itemName: ie,
        amount: 0
      })
    }

    function Pe(ee) {
      let {
        anomalyId: ie,
        caught: He
      } = ee;
      const be = (0, ye.useRef)(null);
      return (0, qe.e)(be, !He), (0, We.jsx)("span", {
        ref: be,
        className: Je()("BoardMugshot", {
          Uncaught: !He
        }),
        children: (0, We.jsx)("img", {
          src: de(ie, He),
          alt: "",
          draggable: !1
        })
      })
    }

    function Ae(ee) {
      let {
        itemName: ie,
        amount: He,
        lJ: ye,
        inTile: be = !1
      } = ee;
      return (0, We.jsx)(pe.g, {
        delayShow: 200,
        hoverOnly: be,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, We.jsx)(Ve, {
          itemName: ie,
          amount: He,
          lJ: ye
        }),
        children: (0, We.jsxs)("span", {
          className: Je()("BoardChip", {
            Short: void 0 !== ye && ye < He
          }),
          children: [(0, We.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, We.jsx)(De, {
              itemName: ie
            })
          }), He.toLocaleString()]
        })
      })
    }
    const Ye = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function Ve(ee) {
      var ie;
      let {
        itemName: He,
        amount: ye,
        lJ: be
      } = ee;
      const {
        t: Me
      } = (0, Re.v)(), Ke = (0, ze.g)("itemInfo", (ee => ee[He])), {
        lore: Ue,
        droppedBy: Fe
      } = function(ee) {
        if ("string" !== typeof ee) return {
          lore: ee,
          droppedBy: null
        };
        const ie = Ye.exec(ee);
        return null === ie ? {
          lore: ee,
          droppedBy: null
        } : {
          lore: "" === ie[1] ? void 0 : ie[1],
          droppedBy: ie[2]
        }
      }(null === Ke || void 0 === Ke ? void 0 : Ke.description);
      return (0, We.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, We.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, We.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, We.jsx)(De, {
              itemName: He
            })
          }), (0, We.jsx)(Xe.e, {
            text: null !== (ie = null === Ke || void 0 === Ke ? void 0 : Ke.displayName) && void 0 !== ie ? ie : He,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== Ue || null !== Fe) && (0, We.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== Ue && (0, We.jsx)(Xe.e, {
            text: Ue,
            className: "BoardChipTooltipDescription"
          }), null !== Fe && (0, We.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, We.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Me(`${te}:chipDroppedBy`)
            }), Fe]
          })]
        }), void 0 !== be && (0, We.jsxs)("div", {
          className: Je()("BoardChipTooltipHeld", {
            Short: be < ye
          }),
          children: [(0, We.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Me(`${te}:chipYouHave`)
          }), (0, We.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, We.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: be.toLocaleString()
            }), ` / ${ye.toLocaleString()}`]
          }), (0, We.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, We.jsx)("span", {
              style: {
                width: (ye > 0 ? 100 * Math.min(1, be / ye) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function ae(ee) {
      let {
        icon: ie,
        name: He,
        selected: ye,
        locked: be,
        className: Me,
        buttonRef: Ke,
        onSelect: Ue,
        children: Fe
      } = ee;
      return (0, We.jsxs)("button", {
        ref: Ke,
        type: "button",
        className: Je()("BoardTile", Me, {
          Selected: ye,
          Locked: be
        }),
        onClick: Ue,
        children: [(0, We.jsx)("span", {
          className: "BoardTileIcon",
          children: ie
        }), (0, We.jsx)("span", {
          className: "BoardTileName",
          children: He
        }), Fe]
      })
    }

    function ce(ee) {
      let {
        icon: ie,
        name: He,
        children: ye
      } = ee;
      return (0, We.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, We.jsx)("span", {
          className: "BoardDetailIcon",
          children: ie
        }), (0, We.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, We.jsx)("h3", {
            children: He
          }), (0, We.jsx)("span", {
            className: "BoardDetailStatus",
            children: ye
          })]
        })]
      })
    }

    function xe(ee) {
      let {
        coins: ie,
        children: He
      } = ee;
      return (0, We.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, We.jsx)(Ae, {
          itemName: Ze,
          amount: ie
        }), He]
      })
    }
    var Le = He(39327);
    const Ce = "containmentCodexView";
    class ve extends Le.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = ee => {
          this.selectedId = ee, this.emit()
        }
      }
      DR(ee) {
        this.entries = ee.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const ue = {
        codexAnyDifficulty: `${te}:codexNeedsAny`,
        codexNormalOnly: `${te}:codexNeedsNormal`,
        codexHardOnly: `${te}:codexNeedsHard`
      },
      me = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      le = {
        codexContained: `${te}:codexContainedBadge`,
        codexEncountered: `${te}:codexEncounteredBadge`,
        codexUnidentified: `${te}:codexUnidentifiedBadge`
      },
      Se = ["94%", "81%", "88%", "46%", "72%"];

    function ne(ee) {
      let {
        entry: ie
      } = ee;
      const {
        t: He
      } = (0, Re.v)();
      return (0, We.jsx)("span", {
        className: Je()("BoardBadge", me[ie.codexEntryState]),
        children: He(le[ie.codexEntryState])
      })
    }

    function je(ee) {
      const {
        t: ie
      } = (0, Re.v)();
      return "codexUnidentified" === ee.codexEntryState ? ie(`${te}:codexUnidentifiedName`) : ee.codexEntryName
    }

    function se(ee) {
      let {
        entry: ie
      } = ee;
      return "codexUnidentified" === ie.codexEntryState ? (0, We.jsx)(De, {
        itemName: "Book"
      }) : (0, We.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, We.jsx)(Pe, {
          anomalyId: ie.codexEntryId,
          caught: "codexContained" === ie.codexEntryState
        }), (0, We.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Ie(ee) {
      let {
        entry: ie,
        selected: He,
        onSelect: ye
      } = ee;
      const be = "codexUnidentified" === ie.codexEntryState;
      return (0, We.jsxs)(ae, {
        icon: (0, We.jsx)(se, {
          entry: ie
        }),
        name: je(ie),
        selected: He,
        locked: be,
        className: Je()("CodexFolder", me[ie.codexEntryState]),
        onSelect: () => {
          ye(ie.codexEntryId)
        },
        children: [!be && (0, We.jsx)(ne, {
          entry: ie
        }), be && (0, We.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function he(ee) {
      let {
        count: ie
      } = ee;
      const He = [];
      for (let ye = Math.min(ie, 25); ye > 0; ye -= 5) He.push(Math.min(ye, 5));
      return (0, We.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: He.map(((ee, ie) => (0, We.jsx)("span", {
          className: Je()("CodexTallyGroup", {
            Gate: 5 === ee
          }),
          children: Array.from({
            length: Math.min(ee, 4)
          }, ((ee, ie) => (0, We.jsx)("span", {
            className: "CodexTallyMark"
          }, ie)))
        }, ie)))
      })
    }

    function Ne(ee) {
      let {
        contained: ie,
        total: He
      } = ee;
      const {
        t: ye
      } = (0, Re.v)();
      return (0, We.jsxs)("div", {
        className: "CodexProgress",
        children: [ye(`${te}:codexProgress`, {
          contained: String(ie),
          total: String(He)
        }), (0, We.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, We.jsx)("span", {
            style: {
              width: ie / He * 100 + "%"
            }
          })
        })]
      })
    }

    function Ge(ee) {
      let {
        entry: ie,
        fileNumber: He
      } = ee;
      const {
        t: ye
      } = (0, Re.v)(), be = "codexContained" === ie.codexEntryState;
      return (0, We.jsx)("section", {
        className: "BoardDetail",
        children: (0, We.jsxs)("article", {
          className: Je()("CodexDossier", me[ie.codexEntryState]),
          children: [(0, We.jsx)("span", {
            className: "CodexFileNumber",
            children: ye(`${te}:codexFileNumber`, {
              number: String(He).padStart(3, "0")
            })
          }), (0, We.jsx)(ce, {
            icon: (0, We.jsx)(se, {
              entry: ie
            }),
            name: je(ie),
            children: (0, We.jsx)(ne, {
              entry: ie
            })
          }), be && (0, We.jsxs)(We.Fragment, {
            children: [(0, We.jsx)("p", {
              className: "BoardDescription",
              children: ie.codexEntryLore
            }), (0, We.jsxs)("p", {
              className: "CodexTally",
              children: [ye(`${te}:codexContainments`, {
                count: String(ie.codexEntryContainedCount)
              }), (0, We.jsx)(he, {
                count: ie.codexEntryContainedCount
              })]
            }), (0, We.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: ye(`${te}:codexContainedBadge`)
            })]
          }), !be && (0, We.jsxs)(We.Fragment, {
            children: [(0, We.jsxs)("div", {
              className: "CodexRedaction",
              children: [Se.map((ee => (0, We.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: ee
                }
              }, ee))), (0, We.jsx)("p", {
                className: "CodexRedacted",
                children: ye(`${te}:codexRedacted`)
              })]
            }), "" !== ie.codexEntryHint && (0, We.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, We.jsx)("h4", {
                children: ye(`${te}:codexHintLabel`)
              }), (0, We.jsx)("p", {
                children: ie.codexEntryHint
              })]
            }), (0, We.jsx)("p", {
              className: "CodexClearance",
              children: ye(ue[ie.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function re(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, oe.j)(Ce, ie.getSnapshot()),
        {
          t: ye
        } = (0, Re.v)();
      if (0 === He.entries.length) return null;
      const be = He.entries.find((ee => ee.codexEntryId === He.selectedId)),
        Me = He.entries.filter((ee => "codexContained" === ee.codexEntryState)).length,
        Ke = He.entries.map((ee => ee.codexEntryId)).sort().indexOf(be.codexEntryId) + 1;
      return (0, We.jsxs)(we, {
        open: He.open,
        onDismiss: ie.dismiss,
        title: ye(`${te}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, We.jsx)(Ne, {
          contained: Me,
          total: He.entries.length
        }),
        children: [(0, We.jsx)("div", {
          className: "BoardTiles",
          children: He.entries.map((ee => (0, We.jsx)(Ie, {
            entry: ee,
            selected: ee === be,
            onSelect: ie.select
          }, ee.codexEntryId)))
        }), (0, We.jsx)(Ge, {
          entry: be,
          fileNumber: Ke
        })]
      })
    }
    var Qe = He(347);
    class ei extends Le.b {
      constructor(ee, ie, He, ye, be, Me) {
        super(ee, ie, He), this.pacer = ye, this.command = be, this.predict = Me, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = ee => {
          this.selectedId = ee, this.emit()
        }, this.act = (ee, ie) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${ee} ${ie}`, this.rollBack)) return;
          const He = this.predict(this.board, ee, ie);
          null !== He && (this.board = He.board, this.notice = He.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = ye.subscribe((() => {
          this.emit()
        }))
      }
      DR(ee) {
        const ie = this.messageOpens(ee);
        if (ie && this.open) return this.board === this.confirmed && (this.board = ee), this.confirmed = ee, void this.emit();
        if (this.board = ee, this.confirmed = ee, this.pacer.onReply(), ie) return this.notice = null, this.selectedId = this.openingSelection(ee), void this.show();
        const He = this.messageNotice(ee);
        null !== He && (this.notice = He), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function ii(ee, ie) {
      return ee.loadoutCoins >= ie.loadoutCostCoins && ie.loadoutCostParts.every((ie => function(ee, ie) {
        return Hi(ee, ie).loadoutHeldPartAmount
      }(ee, ie.loadoutPartCurrency) >= ie.loadoutPartAmount))
    }

    function Hi(ee, ie) {
      return ee.loadoutHeldParts.find((ee => ee.loadoutHeldPartCurrency === ie))
    }

    function yi(ee, ie) {
      return ee.loadoutSlots.find((ee => ee.loadoutSlotKind === ie))
    }

    function bi(ee) {
      return ee.loadoutPerks.filter((ee => ee.loadoutPerkEquipped)).length >= ee.loadoutMaxPerks
    }

    function Mi(ee, ie, He) {
      for (const be of ee.loadoutSlots) {
        const ye = be.loadoutSlotOptions.find((ee => ee.loadoutOptionId === He));
        if (ye) return "loadoutArmour" === be.loadoutSlotKind ? Ui(ee, be, ye, ie) : Ki(ee, be, ye, ie)
      }
      const ye = ee.loadoutPerks.find((ee => ee.loadoutPerkId === He));
      return ye ? function(ee, ie, He) {
        const ye = ie.loadoutPerkOwned,
          be = ie.loadoutPerkEquipped,
          Me = ie.loadoutPerkName,
          Ke = bi(ee);
        if ("loadoutUnlock" === He) {
          if (ye || !ii(ee, ie.loadoutPerkCost)) return null;
          const He = {
            ...ie,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Ke
          };
          return {
            board: Ji(oi(ee, ie.loadoutPerkCost), He),
            notice: Ri(Ke ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Me)
          }
        }
        if ("loadoutUpgrade" === He || !ye || "loadoutEquip" === He === be || !be && Ke) return null;
        return {
          board: Ji(ee, {
            ...ie,
            loadoutPerkEquipped: !be
          }),
          notice: Ri(be ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Me)
        }
      }(ee, ye, ie) : null
    }

    function Ki(ee, ie, He, ye) {
      const be = He.loadoutOptionOwnedTier,
        Me = He.loadoutOptionName;
      if ("loadoutEquip" === ye) return 0 === be ? null : {
        board: Fi(ee, ie, He.loadoutOptionId, null),
        notice: Ri("loadoutNoticeEquipped", Me)
      };
      const Ke = "loadoutUnlock" === ye;
      if (Ke && 0 !== be || "loadoutUpgrade" === ye && (0 === be || be >= He.loadoutOptionTiers.length) || "loadoutUnequip" === ye) return null;
      const Ue = He.loadoutOptionTiers[be].loadoutTierCost;
      if (!ii(ee, Ue)) return null;
      const Fe = {
          ...He,
          loadoutOptionOwnedTier: be + 1
        },
        Je = Ke ? He.loadoutOptionId : ie.loadoutSlotEquippedId;
      return {
        board: Fi(oi(ee, Ue), ie, Je, Fe),
        notice: Ke ? Ri("loadoutNoticeUnlocked", Me) : Ri("loadoutNoticeUpgraded", Me, be + 1)
      }
    }

    function Ui(ee, ie, He, ye) {
      const be = He.loadoutOptionOwnedTier > 0,
        Me = He.loadoutOptionName;
      if ("loadoutEquip" === ye && be) return {
        board: Fi(ee, ie, He.loadoutOptionId, null),
        notice: Ri("loadoutNoticeEquipped", Me)
      };
      const Ke = He.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== ye || be || !ii(ee, Ke) ? null : {
        board: Fi(oi(ee, Ke), ie, He.loadoutOptionId, {
          ...He,
          loadoutOptionOwnedTier: 1
        }),
        notice: Ri("loadoutNoticeUnlocked", Me)
      }
    }

    function Fi(ee, ie, He, ye) {
      const be = {
        ...ie,
        loadoutSlotEquippedId: He,
        loadoutSlotOptions: ie.loadoutSlotOptions.map((ee => null !== ye && ee.loadoutOptionId === ye.loadoutOptionId ? ye : ee))
      };
      return {
        ...ee,
        loadoutSlots: ee.loadoutSlots.map((ee => ee === ie ? be : ee))
      }
    }

    function Ji(ee, ie) {
      return {
        ...ee,
        loadoutPerks: ee.loadoutPerks.map((ee => ee.loadoutPerkId === ie.loadoutPerkId ? ie : ee))
      }
    }

    function oi(ee, ie) {
      return {
        ...ee,
        loadoutCoins: ee.loadoutCoins - ie.loadoutCostCoins,
        loadoutHeldParts: ee.loadoutHeldParts.map((ee => {
          const He = ie.loadoutCostParts.find((ie => ie.loadoutPartCurrency === ee.loadoutHeldPartCurrency));
          return He ? {
            ...ee,
            loadoutHeldPartAmount: ee.loadoutHeldPartAmount - He.loadoutPartAmount
          } : ee
        }))
      }
    }

    function Ri(ee, ie) {
      return {
        loadoutNoticeKey: ee,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: ie,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const ki = "containmentLoadoutView";
    class qi extends ei {
      constructor(ee, ie, He, ye) {
        super(ee, ie, He, ye, "loadout", Mi), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = ee => {
          this.slot = ee, this.selectedId = fi(this.board, ee), this.emit()
        }
      }
      messageOpens(ee) {
        return ee.loadoutMessageOpens
      }
      messageNotice(ee) {
        return ee.loadoutNotice
      }
      openingSelection(ee) {
        return fi(ee, this.slot)
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

    function fi(ee, ie) {
      if ("loadoutPerks" === ie) {
        var He;
        const ie = ee.loadoutPerks;
        return (null !== (He = ie.find((ee => ee.loadoutPerkEquipped))) && void 0 !== He ? He : ie[0]).loadoutPerkId
      }
      return yi(ee, ie).loadoutSlotEquippedId
    }
    const Ti = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Xi = He(37708),
      zi = He(1215);
    const Bi = {
        loadoutPrimary: `${te}:loadoutSlotPrimary`,
        loadoutSecondary: `${te}:loadoutSlotSecondary`,
        loadoutOffensive: `${te}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${te}:loadoutSlotSelfHelp`,
        loadoutArmour: `${te}:loadoutSlotArmour`,
        loadoutPerks: `${te}:loadoutSlotPerks`
      },
      Ei = {
        section: "right",
        tq: "bottom",
        act: "top"
      },
      gi = (0, ye.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Oi() {
      const {
        step: ee,
        targetRef: ie
      } = (0, ye.useContext)(gi);
      return (He, ye) => (null === ee || void 0 === ee ? void 0 : ee.kind) === He && ee.id === ye ? ie : void 0
    }

    function di(ee, ie) {
      const He = ie.loadoutTargetId;
      if ("loadoutPerks" === ie.loadoutTargetSection) {
        const ie = ee.loadoutPerks.find((ee => ee.loadoutPerkId === He));
        return {
          name: ie.loadoutPerkName,
          owned: ie.loadoutPerkOwned,
          equipped: ie.loadoutPerkEquipped
        }
      }
      const ye = yi(ee, ie.loadoutTargetSection),
        be = ye.loadoutSlotOptions.find((ee => ee.loadoutOptionId === He));
      return {
        name: be.loadoutOptionName,
        owned: be.loadoutOptionOwnedTier > 0,
        equipped: ye.loadoutSlotEquippedId === He
      }
    }

    function Wi(ee, ie, He, ye) {
      const [be, Me] = ee(`${te}:${ie}`, {
        [He]: "\x01"
      }).split("\x01");
      return (0, We.jsxs)(We.Fragment, {
        children: [be, (0, We.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: ye
        }), Me]
      })
    }

    function ti(ee) {
      let {
        view: ie,
        onDismiss: He,
        children: be
      } = ee;
      const {
        t: Me
      } = (0, Re.v)(), Ke = ie.loadout, Ue = ie.open ? Ke.loadoutWalkthrough.map((ee => ({
        target: ee,
        info: di(Ke, ee)
      }))).find((ee => {
        let {
          info: ie
        } = ee;
        return !ie.equipped
      })) : void 0;
      let Fe = null,
        Je = null;
      if (void 0 !== Ue) {
        const {
          target: ee,
          info: He
        } = Ue;
        ie.slot !== ee.loadoutTargetSection ? (Fe = {
          kind: "section",
          id: ee.loadoutTargetSection
        }, Je = Wi(Me, "loadoutWalkthroughSection", "section", Me(Bi[ee.loadoutTargetSection]))) : ie.selectedId !== ee.loadoutTargetId ? (Fe = {
          kind: "tq",
          id: ee.loadoutTargetId
        }, Je = Wi(Me, "loadoutWalkthroughPick", "name", He.name)) : (Fe = {
          kind: "act",
          id: ee.loadoutTargetId
        }, Je = Wi(Me, He.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", He.name))
      }
      const oe = null === Fe ? null : function(ee) {
          return `${ee.kind}:${ee.id}`
        }(Fe),
        [ke, qe] = (0, ye.useState)(null),
        fe = (0, ye.useCallback)((ee => {
          qe((ie => null !== ee ? {
            key: oe,
            node: ee
          } : (null === ie || void 0 === ie ? void 0 : ie.key) === oe ? null : ie))
        }), [oe]),
        Te = null !== oe && (null === ke || void 0 === ke ? void 0 : ke.key) === oe ? ke.node : null;
      return (0, We.jsxs)(gi.Provider, {
        value: {
          step: Fe,
          targetRef: fe
        },
        children: [be, null !== Fe && null !== Te && (0, We.jsx)(Zi, {
          target: Te,
          placement: Ei[Fe.kind],
          onDismiss: He,
          children: Je
        }, oe)]
      })
    }

    function Zi(ee) {
      let {
        target: ie,
        placement: He,
        onDismiss: be,
        children: Me
      } = ee;
      const {
        t: Ke
      } = (0, Re.v)(), Ue = (0, ye.useRef)(ie);
      return Ue.current = ie, (0, zi.t)("popup", Ue, be), (0, We.jsxs)(Xi.d, {
        target: ie,
        placement: He,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, We.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, We.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Ti,
            alt: "",
            draggable: !1
          }), (0, We.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Ke(`${te}:operatorName`)
          }), (0, We.jsx)(fe.i, {
            onClick: be,
            ariaLabel: Ke(`${te}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, We.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Me
        })]
      })
    }
    const wi = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Di(ee) {
      let {
        cost: ie,
        loadout: He
      } = ee;
      const {
        t: ye
      } = (0, Re.v)();
      return ie.loadoutCostCoins <= 0 && 0 === ie.loadoutCostParts.length ? (0, We.jsx)("span", {
        className: "LoadoutCost",
        children: ye(`${te}:loadoutFree`)
      }) : (0, We.jsxs)("span", {
        className: "LoadoutCost",
        children: [ie.loadoutCostCoins > 0 && (0, We.jsx)(Ae, {
          itemName: Ze,
          amount: ie.loadoutCostCoins,
          lJ: He.loadoutCoins
        }), ie.loadoutCostParts.map((ee => {
          const ie = Hi(He, ee.loadoutPartCurrency);
          return (0, We.jsx)(Ae, {
            itemName: ie.loadoutHeldPartItem,
            amount: ee.loadoutPartAmount,
            lJ: ie.loadoutHeldPartAmount
          }, ee.loadoutPartCurrency)
        }))]
      })
    }
    const Pi = {
      loadoutStatFireRate: `${te}:loadoutUnitPerMinute`,
      loadoutStatReload: `${te}:loadoutUnitSeconds`,
      loadoutStatResupply: `${te}:loadoutUnitSeconds`
    };

    function Ai(ee) {
      return "loadoutStatPotency" === ee.loadoutStatKind ? (0, Qe.T)(ee.loadoutStatValue) : String(ee.loadoutStatValue)
    }

    function Yi(ee) {
      var ie;
      let {
        option: He
      } = ee;
      const {
        t: ye
      } = (0, Re.v)(), be = He.loadoutOptionTiers, Me = null === (ie = be[0]) || void 0 === ie ? void 0 : ie.loadoutTierStats.map((ee => ee.loadoutStatKind));
      if (!Me || 0 === Me.length) return null;
      const Ke = He.loadoutOptionOwnedTier,
        Ue = (ee, ie) => {
          var He;
          return null === (He = be[ee]) || void 0 === He ? void 0 : He.loadoutTierStats.find((ee => ee.loadoutStatKind === ie))
        };
      return (0, We.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, We.jsx)("thead", {
          children: (0, We.jsxs)("tr", {
            children: [(0, We.jsx)("th", {}), be.map(((ee, ie) => (0, We.jsx)("th", {
              className: Je()({
                Current: ie + 1 === Ke,
                Next: ie === Ke
              }),
              children: ye(`${te}:loadoutTier`, {
                tier: (0, Qe.T)(ie + 1)
              })
            }, ie)))]
          })
        }), (0, We.jsx)("tbody", {
          children: Me.map((ee => {
            const ie = Pi[ee];
            return (0, We.jsxs)("tr", {
              children: [(0, We.jsxs)("th", {
                scope: "row",
                children: [ye(`${te}:${ee}`), ie && (0, We.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: ye(ie)
                })]
              }), be.map(((ie, He) => {
                const ye = Ue(He, ee),
                  be = He > 0 ? Ue(He - 1, ee) : void 0,
                  Me = ye && be ? ye.loadoutStatValue - be.loadoutStatValue : 0,
                  Fe = wi.has(ee) ? Me < 0 : Me > 0,
                  oe = He === Ke;
                return (0, We.jsxs)("td", {
                  className: Je()({
                    Current: He + 1 === Ke,
                    Next: oe,
                    Gain: Fe,
                    Owned: He < Ke
                  }),
                  children: [oe && Fe && (0, We.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Me < 0 ? "\u25bc" : "\u25b2"
                  }), ye ? Ai(ye) : "-"]
                }, He)
              }))]
            }, ee)
          }))
        })]
      })
    }

    function Vi(ee) {
      let {
        view: ie,
        controller: He,
        slot: ye,
        option: be
      } = ee;
      const {
        t: Me
      } = (0, Re.v)(), Ke = ie.loadout, Ue = be.loadoutOptionOwnedTier, Fe = be.loadoutOptionTiers.length, Je = ye.loadoutSlotEquippedId === be.loadoutOptionId, oe = Ue < Fe ? be.loadoutOptionTiers[Ue].loadoutTierCost : null, ke = null !== oe && ii(Ke, oe), qe = be.loadoutOptionId, Te = Oi();
      return (0, We.jsxs)(We.Fragment, {
        children: [(0, We.jsx)(ci, {
          icon: be.loadoutOptionIcon,
          name: be.loadoutOptionName,
          status: 0 === Ue ? Me(`${te}:loadoutLocked`) : Fe > 1 ? Me(`${te}:loadoutTier`, {
            tier: (0, Qe.T)(Ue)
          }) : null,
          locked: 0 === Ue,
          equipped: Je
        }), (0, We.jsx)("p", {
          className: "BoardDescription",
          children: be.loadoutOptionDescription
        }), (0, We.jsx)(Yi, {
          option: be
        }), (0, We.jsxs)("div", {
          ref: Te("act", qe),
          className: "BoardActions",
          children: [null !== oe && (0, We.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, We.jsx)(Di, {
              cost: oe,
              loadout: Ke
            }), (0, We.jsx)(fe.m, {
              disabled: !ke || ie.pending,
              onClick: () => {
                He.act(0 === Ue ? "loadoutUnlock" : "loadoutUpgrade", qe)
              },
              children: 0 === Ue ? Me(`${te}:loadoutUnlock`) : Me(`${te}:loadoutUpgrade`, {
                tier: (0, Qe.T)(Ue + 1)
              })
            })]
          }), null === oe && Fe > 1 && (0, We.jsx)("span", {
            className: "BoardHint",
            children: Me(`${te}:loadoutMaxed`)
          }), Ue > 0 && !Je && (0, We.jsx)(fe.c, {
            disabled: ie.pending,
            onClick: () => {
              He.act("loadoutEquip", qe)
            },
            children: Me(`${te}:loadoutEquip`)
          })]
        })]
      })
    }

    function ai(ee) {
      let {
        view: ie,
        controller: He,
        perk: ye
      } = ee;
      const {
        t: be
      } = (0, Re.v)(), Me = ie.loadout, Ke = bi(Me), Ue = ye.loadoutPerkId, Fe = Oi();
      return (0, We.jsxs)(We.Fragment, {
        children: [(0, We.jsx)(ci, {
          icon: ye.loadoutPerkIcon,
          name: ye.loadoutPerkName,
          status: ye.loadoutPerkOwned ? null : be(`${te}:loadoutLocked`),
          locked: !ye.loadoutPerkOwned,
          equipped: ye.loadoutPerkEquipped
        }), (0, We.jsx)("p", {
          className: "BoardDescription",
          children: ye.loadoutPerkDescription
        }), (0, We.jsxs)("div", {
          ref: Fe("act", Ue),
          className: "BoardActions",
          children: [!ye.loadoutPerkOwned && (0, We.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, We.jsx)(Di, {
              cost: ye.loadoutPerkCost,
              loadout: Me
            }), (0, We.jsx)(fe.m, {
              disabled: !ii(Me, ye.loadoutPerkCost) || ie.pending,
              onClick: () => {
                He.act("loadoutUnlock", Ue)
              },
              children: be(`${te}:loadoutUnlock`)
            })]
          }), ye.loadoutPerkOwned && !ye.loadoutPerkEquipped && (0, We.jsx)(fe.c, {
            disabled: Ke || ie.pending,
            onClick: () => {
              He.act("loadoutEquip", Ue)
            },
            children: be(`${te}:loadoutEquip`)
          }), ye.loadoutPerkOwned && !ye.loadoutPerkEquipped && Ke && (0, We.jsx)("span", {
            className: "BoardHint",
            children: be(`${te}:loadoutSocketsFullHint`)
          }), ye.loadoutPerkEquipped && (0, We.jsx)(fe.M, {
            disabled: ie.pending,
            onClick: () => {
              He.act("loadoutUnequip", Ue)
            },
            children: be(`${te}:loadoutUnequip`)
          })]
        })]
      })
    }

    function ci(ee) {
      let {
        icon: ie,
        name: He,
        status: ye,
        locked: be,
        equipped: Me
      } = ee;
      const {
        t: Ke
      } = (0, Re.v)();
      return (0, We.jsxs)(ce, {
        icon: (0, We.jsx)(De, {
          itemName: ie
        }),
        name: He,
        children: [null !== ye && (0, We.jsx)("span", {
          className: Je()("LoadoutStatusText", {
            Locked: be
          }),
          children: ye
        }), Me && (0, We.jsx)("span", {
          className: "BoardBadge",
          children: Ke(`${te}:loadoutEquippedBadge`)
        })]
      })
    }

    function xi(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const ye = ie.loadout;
      if ("loadoutPerks" === ie.slot) {
        const ee = ye.loadoutPerks.find((ee => ee.loadoutPerkId === ie.selectedId));
        return (0, We.jsx)("section", {
          className: "BoardDetail",
          children: ee && (0, We.jsx)(ai, {
            view: ie,
            controller: He,
            perk: ee
          })
        })
      }
      const be = yi(ye, ie.slot),
        Me = be.loadoutSlotOptions.find((ee => ee.loadoutOptionId === ie.selectedId));
      return (0, We.jsx)("section", {
        className: "BoardDetail",
        children: Me && (0, We.jsx)(Vi, {
          view: ie,
          controller: He,
          slot: be,
          option: Me
        })
      })
    }

    function Li(ee) {
      let {
        owned: ie,
        total: He
      } = ee;
      return He <= 1 ? null : (0, We.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: He
        }, ((ee, He) => (0, We.jsx)("span", {
          className: Je()("LoadoutPip", {
            Filled: He < ie
          })
        }, He)))
      })
    }

    function Ci(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Re.v)(), be = ie.loadout, Me = Oi();
      return (0, We.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": ye(`${te}:loadoutKit`),
        children: [be.loadoutSlots.map((ee => {
          const be = ee.loadoutSlotOptions.find((ie => ie.loadoutOptionId === ee.loadoutSlotEquippedId));
          return (0, We.jsxs)("button", {
            ref: Me("section", ee.loadoutSlotKind),
            type: "button",
            className: Je()("LoadoutKitSlot", {
              Selected: ie.slot === ee.loadoutSlotKind
            }),
            onClick: () => {
              He.selectSlot(ee.loadoutSlotKind)
            },
            children: [(0, We.jsx)("span", {
              className: "LoadoutKitIcon",
              children: be && (0, We.jsx)(De, {
                itemName: be.loadoutOptionIcon
              })
            }), (0, We.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, We.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, We.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: ye(Bi[ee.loadoutSlotKind])
                }), be && (0, We.jsx)(Li, {
                  owned: be.loadoutOptionOwnedTier,
                  total: be.loadoutOptionTiers.length
                })]
              }), (0, We.jsx)("span", {
                className: "LoadoutKitName",
                children: null === be || void 0 === be ? void 0 : be.loadoutOptionName
              })]
            })]
          }, ee.loadoutSlotKind)
        })), (0, We.jsx)(vi, {
          view: ie,
          controller: He
        })]
      })
    }

    function vi(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Re.v)(), be = ie.loadout, Me = be.loadoutPerks.filter((ee => ee.loadoutPerkEquipped)), Ke = Oi();
      return (0, We.jsxs)("button", {
        ref: Ke("section", "loadoutPerks"),
        type: "button",
        className: Je()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === ie.slot
        }),
        onClick: () => {
          He.selectSlot("loadoutPerks")
        },
        children: [(0, We.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, We.jsx)("span", {
            className: "LoadoutKitLabel",
            children: ye(Bi.loadoutPerks)
          }), (0, We.jsx)("span", {
            className: "LoadoutPerkCount",
            children: ye(`${te}:loadoutPerkCount`, {
              equipped: String(Me.length),
              max: String(be.loadoutMaxPerks)
            })
          })]
        }), (0, We.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: be.loadoutMaxPerks
          }, ((ee, ie) => {
            const He = Me[ie];
            return (0, We.jsxs)("span", {
              className: Je()("LoadoutSocket", {
                Filled: He,
                Empty: !He
              }),
              children: [(0, We.jsx)("span", {
                className: "LoadoutSocketWell",
                children: He && (0, We.jsx)(De, {
                  itemName: He.loadoutPerkIcon
                })
              }), (0, We.jsx)("span", {
                className: "LoadoutSocketName",
                children: He ? He.loadoutPerkName : ye(`${te}:loadoutPerkSocketEmpty`)
              })]
            }, ie)
          }))
        })]
      })
    }

    function ui(ee) {
      let {
        icon: ie,
        name: He,
        selected: ye,
        equipped: be,
        locked: Me,
        ownedTier: Ke,
        tiers: Ue,
        buttonRef: Fe,
        onSelect: Je
      } = ee;
      const {
        t: oe
      } = (0, Re.v)();
      return (0, We.jsxs)(ae, {
        icon: (0, We.jsx)(De, {
          itemName: ie
        }),
        name: He,
        selected: ye,
        locked: Me,
        buttonRef: Fe,
        onSelect: Je,
        children: [be && (0, We.jsx)("span", {
          className: "BoardBadge",
          children: oe(`${te}:loadoutEquippedBadge`)
        }), Me && (0, We.jsx)("span", {
          className: "BoardBadge Muted",
          children: oe(`${te}:loadoutLocked`)
        }), !Me && (0, We.jsx)(Li, {
          owned: Ke,
          total: Ue
        })]
      })
    }

    function mi(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const ye = ie.loadout,
        be = Oi();
      if ("loadoutPerks" === ie.slot) return (0, We.jsx)("div", {
        className: "BoardTiles",
        children: ye.loadoutPerks.map((ee => (0, We.jsx)(ui, {
          icon: ee.loadoutPerkIcon,
          name: ee.loadoutPerkName,
          selected: ie.selectedId === ee.loadoutPerkId,
          equipped: ee.loadoutPerkEquipped,
          locked: !ee.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: be("tq", ee.loadoutPerkId),
          onSelect: () => {
            He.select(ee.loadoutPerkId)
          }
        }, ee.loadoutPerkId)))
      });
      const Me = yi(ye, ie.slot);
      return (0, We.jsx)("div", {
        className: "BoardTiles",
        children: Me.loadoutSlotOptions.map((ee => (0, We.jsx)(ui, {
          icon: ee.loadoutOptionIcon,
          name: ee.loadoutOptionName,
          selected: ie.selectedId === ee.loadoutOptionId,
          equipped: Me.loadoutSlotEquippedId === ee.loadoutOptionId,
          locked: 0 === ee.loadoutOptionOwnedTier,
          ownedTier: ee.loadoutOptionOwnedTier,
          tiers: ee.loadoutOptionTiers.length,
          buttonRef: be("tq", ee.loadoutOptionId),
          onSelect: () => {
            He.select(ee.loadoutOptionId)
          }
        }, ee.loadoutOptionId)))
      })
    }

    function li(ee) {
      let {
        loadout: ie
      } = ee;
      return (0, We.jsx)(xe, {
        coins: ie.loadoutCoins,
        children: ie.loadoutHeldParts.filter((ee => ee.loadoutHeldPartAmount > 0)).map((ee => (0, We.jsx)(Ae, {
          itemName: ee.loadoutHeldPartItem,
          amount: ee.loadoutHeldPartAmount
        }, ee.loadoutHeldPartCurrency)))
      })
    }

    function Si(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, oe.j)(ki, ie.getSnapshot()),
        {
          t: ye
        } = (0, Re.v)();
      if (null === He.loadout) return null;
      const be = He.notice;
      return (0, We.jsx)(ti, {
        view: He,
        onDismiss: ie.dismiss,
        children: (0, We.jsxs)(we, {
          open: He.open,
          onDismiss: ie.dismiss,
          title: ye(`${te}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, We.jsx)(li, {
            loadout: He.loadout
          }),
          statusRefused: null === be || void 0 === be ? void 0 : be.loadoutNoticeRefused,
          status: (0, We.jsxs)(We.Fragment, {
            children: [(0, We.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: ye(`${te}:loadoutRadioBadge`)
            }), null !== be && ye(`${te}:${be.loadoutNoticeKey}`, {
              name: be.loadoutNoticeName,
              tier: (0, Qe.T)(be.loadoutNoticeTier),
              max: String(He.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, We.jsx)(Ci, {
            view: He,
            controller: ie
          }), (0, We.jsx)(mi, {
            view: He,
            controller: ie
          }), (0, We.jsx)(xi, {
            view: He,
            controller: ie
          })]
        })
      })
    }

    function ni(ee, ie, He) {
      const ye = ee.locatorEntries.find((ee => ee.locatorEntryId === He));
      if (!ye) return null;
      const be = ye.locatorEntryName;
      if ("locatorDisarm" === ie) return ye.locatorEntryArmed ? {
        board: ji(ee, null),
        notice: si("locatorNoticeDisarmed", be)
      } : null;
      if ("locatorArm" === ie) return ye.locatorEntryOwned && !ye.locatorEntryArmed ? {
        board: ji(ee, He),
        notice: si("locatorNoticeArmed", be)
      } : null;
      if (ye.locatorEntryOwned || ee.locatorCoins < ye.locatorEntryPrice) return null;
      const Me = ji({
        ...ee,
        locatorCoins: ee.locatorCoins - ye.locatorEntryPrice
      }, He);
      return {
        board: {
          ...Me,
          locatorEntries: Me.locatorEntries.map((ee => ee.locatorEntryId === He ? {
            ...ee,
            locatorEntryOwned: !0
          } : ee))
        },
        notice: si("locatorNoticeBought", be)
      }
    }

    function ji(ee, ie) {
      return {
        ...ee,
        locatorEntries: ee.locatorEntries.map((ee => {
          const He = ee.locatorEntryId === ie;
          return ee.locatorEntryArmed === He ? ee : {
            ...ee,
            locatorEntryArmed: He
          }
        }))
      }
    }

    function si(ee, ie) {
      return {
        locatorNoticeKey: ee,
        locatorNoticeRefused: !1,
        locatorNoticeName: ie
      }
    }
    const Ii = "containmentLocatorView";
    class Ni extends ei {
      constructor(ee, ie, He, ye) {
        super(ee, ie, He, ye, "locator", ni), this.snapshot = this.buildSnapshot()
      }
      messageOpens(ee) {
        return ee.locatorMessageOpens
      }
      messageNotice(ee) {
        return ee.locatorNotice
      }
      openingSelection(ee) {
        var ie;
        const He = ee.locatorEntries;
        return (null !== (ie = He.find((ee => ee.locatorEntryArmed))) && void 0 !== ie ? ie : He[0]).locatorEntryId
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
    const Gi = {
        locatorContained: `${te}:locatorFlavourContained`,
        locatorEncountered: `${te}:locatorFlavourEncountered`,
        locatorUnseen: `${te}:locatorFlavourUnseen`
      },
      ri = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${te}:locatorAttunedNormal`,
        codexHardOnly: `${te}:locatorAttunedHard`
      };

    function Qi() {
      return (0, We.jsx)(We.Fragment, {
        children: Array.from({
          length: 5
        }, ((ee, ie) => (0, We.jsx)("span", {
          className: "LocatorFly",
          children: (0, We.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, ie)))
      })
    }

    function eH(ee) {
      let {
        entry: ie
      } = ee;
      const {
        t: He
      } = (0, Re.v)();
      return ie.locatorEntryArmed ? (0, We.jsx)("span", {
        className: "BoardBadge Armed",
        children: He(`${te}:locatorArmedBadge`)
      }) : ie.locatorEntryOwned ? (0, We.jsx)("span", {
        className: "BoardBadge",
        children: He(`${te}:locatorOwnedBadge`)
      }) : null
    }

    function iH(ee) {
      let {
        entry: ie,
        coins: He,
        inTile: ye = !1
      } = ee;
      return (0, We.jsx)(Ae, {
        itemName: Ze,
        amount: ie.locatorEntryPrice,
        lJ: He,
        inTile: ye
      })
    }

    function HH(ee) {
      let {
        view: ie,
        controller: He,
        entry: ye
      } = ee;
      const {
        t: be
      } = (0, Re.v)(), Me = ye.locatorEntryId, Ke = ie.locators.locatorEntries.find((ee => ee.locatorEntryArmed && ee !== ye));
      return (0, We.jsxs)("div", {
        className: "BoardActions",
        children: [ye.locatorEntryArmed && (0, We.jsx)(fe.M, {
          disabled: ie.pending,
          onClick: () => {
            He.act("locatorDisarm", Me)
          },
          children: be(`${te}:locatorDisarm`)
        }), ye.locatorEntryOwned && !ye.locatorEntryArmed && (0, We.jsx)(fe.c, {
          disabled: ie.pending,
          onClick: () => {
            He.act("locatorArm", Me)
          },
          children: be(`${te}:locatorArm`)
        }), !ye.locatorEntryOwned && (0, We.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, We.jsx)(iH, {
            entry: ye,
            coins: ie.locators.locatorCoins
          }), (0, We.jsx)(fe.m, {
            disabled: ie.locators.locatorCoins < ye.locatorEntryPrice || ie.pending,
            onClick: () => {
              He.act("locatorBuy", Me)
            },
            children: be(`${te}:locatorBuy`)
          })]
        }), Ke && !ye.locatorEntryArmed && (0, We.jsx)("span", {
          className: "BoardHint",
          children: be(`${te}:locatorReplacesHint`, {
            name: Ke.locatorEntryName
          })
        })]
      })
    }

    function yH(ee) {
      let {
        entry: ie
      } = ee;
      return "locatorUnseen" === ie.locatorEntryStanding ? (0, We.jsx)(De, {
        itemName: "Compass"
      }) : (0, We.jsx)(Pe, {
        anomalyId: ie.locatorEntryId,
        caught: "locatorContained" === ie.locatorEntryStanding
      })
    }

    function bH(ee) {
      let {
        view: ie,
        controller: He,
        entry: ye
      } = ee;
      const {
        t: be
      } = (0, Re.v)(), Me = ri[ye.locatorEntryDifficulty];
      return (0, We.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, We.jsxs)("div", {
          className: Je()("LocatorLabel", {
            Armed: ye.locatorEntryArmed
          }),
          children: [(0, We.jsx)(ce, {
            icon: (0, We.jsx)(yH, {
              entry: ye
            }),
            name: be(`${te}:locatorName`, {
              name: ye.locatorEntryName
            }),
            children: (0, We.jsx)(eH, {
              entry: ye
            })
          }), (0, We.jsx)("p", {
            className: "BoardDescription",
            children: be(ye.locatorEntryArmed ? `${te}:locatorFlavourArmed` : Gi[ye.locatorEntryStanding])
          }), null !== Me && (0, We.jsx)("p", {
            className: "LocatorAttuned",
            children: be(Me)
          }), (0, We.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: be(`${te}:locatorUsage`)
          })]
        }), (0, We.jsx)(HH, {
          view: ie,
          controller: He,
          entry: ye
        })]
      })
    }

    function MH(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, oe.j)(Ii, ie.getSnapshot()),
        {
          t: ye
        } = (0, Re.v)(),
        be = He.locators;
      if (null === be) return null;
      const Me = be.locatorEntries.find((ee => ee.locatorEntryId === He.selectedId)),
        Ke = He.notice;
      return (0, We.jsxs)(we, {
        open: He.open,
        onDismiss: ie.dismiss,
        title: ye(`${te}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, We.jsx)(Qi, {}),
        headerExtra: (0, We.jsx)(xe, {
          coins: be.locatorCoins
        }),
        statusRefused: null === Ke || void 0 === Ke ? void 0 : Ke.locatorNoticeRefused,
        status: (0, We.jsxs)(We.Fragment, {
          children: [(0, We.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: ye(`${te}:locatorKeeperName`)
          }), null !== Ke && ye(`${te}:${Ke.locatorNoticeKey}`, {
            name: Ke.locatorNoticeName
          })]
        }),
        children: [(0, We.jsx)("div", {
          className: "BoardTiles",
          children: be.locatorEntries.map((ee => (0, We.jsxs)(ae, {
            icon: (0, We.jsx)(yH, {
              entry: ee
            }),
            name: ee.locatorEntryName,
            selected: ee === Me,
            locked: !1,
            className: Je()("LocatorTag", {
              Armed: ee.locatorEntryArmed
            }),
            onSelect: () => {
              ie.select(ee.locatorEntryId)
            },
            children: [(0, We.jsx)(eH, {
              entry: ee
            }), !ee.locatorEntryOwned && (0, We.jsx)(iH, {
              entry: ee,
              coins: be.locatorCoins,
              inTile: !0
            })]
          }, ee.locatorEntryId)))
        }), (0, We.jsx)(bH, {
          view: He,
          controller: ie,
          entry: Me
        })]
      })
    }

    function KH(ee) {
      let {
        loadout: ie,
        codex: He,
        locator: ye
      } = ee;
      return (0, We.jsxs)(We.Fragment, {
        children: [(0, We.jsx)(Si, {
          controller: ie
        }), (0, We.jsx)(re, {
          controller: He
        }), (0, We.jsx)(MH, {
          controller: ye
        })]
      })
    }
    var UH = He(39370);
    class FH {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = ee, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new UH.e({
          spacingMs: 0,
          now: ie
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(ee, ie) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, ie(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(ee), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const ee of this.listeners) ee()
      }
    }
    var JH = He(39358);
    const oH = new Map([
      ["npc_general", Ti],
      ["npc_tentacle_guy", JH]
    ]);

    function RH(ee) {
      const ie = oH.get(ee);
      if (void 0 === ie) return null;
      const He = document.createElement("img");
      return He.src = ie, He.alt = "", He.draggable = !1, He.style.imageRendering = "pixelated", He
    }
    const kH = function() {
      let ee, ie = !1,
        He = null,
        Fe = null;
      const Je = [],
        oe = ee => {
          for (const ie of Je) ie !== ee && ie.close();
          (0, Ue.s)()
        },
        Re = ee => {
          ee && (0, Ue.l)()
        },
        ke = new FH((ie => {
          ee.sendCommand(ie)
        })),
        qe = new qi((ee => {
          Ke.h.yR(ki, ee, !0)
        }), oe, Re, ke),
        fe = new ve((ee => {
          Ke.h.yR(Ce, ee, !0)
        }), oe, Re),
        Te = new Ni((ee => {
          Ke.h.yR(Ii, ee, !0)
        }), oe, Re, ke);
      Je.push(qe, fe, Te);
      return {
        onCreate: ie => {
          ee = ie, He = (0, Ue.z)(null, {
            content: (0, ye.createElement)(KH, {
              loadout: qe,
              codex: fe,
              locator: Te
            }),
            onClose: () => {
              for (const ee of Je) ee.close()
            }
          }), Fe = (0, Me.c)(RH)
        },
        onReceivedMessageFromServer: (ee, ie) => {
          "containmentLoadout" === ee ? qe.DR(ie) : "containmentLoadoutClose" === ee ? qe.isOpen() && (qe.close(), (0, Ue.h)()) : "containmentCodex" === ee ? fe.DR(ie) : "containmentLocator" === ee && Te.DR(ie)
        },
        YR: () => {
          ie || be.e.get("loadingOverlayVisible") || (ie = !0, ee.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var ee, ie;
          null === (ee = He) || void 0 === ee || ee(), He = null, null === (ie = Fe) || void 0 === ie || ie(), Fe = null;
          for (const He of Je) He.dispose();
          ke.dispose()
        }
      }
    }
  },
  40138: (ee, ie, He) => {
    var ye = {
      "./breach-zero-uncaught.webp": 40141,
      "./breach-zero.webp": 40147,
      "./brood-father-uncaught.webp": 40149,
      "./brood-father.webp": 40158,
      "./carousel-uncaught.webp": 40164,
      "./carousel.webp": 40170,
      "./deadlock-uncaught.webp": 40175,
      "./deadlock.webp": 40180,
      "./doom-warlord-uncaught.webp": 40182,
      "./doom-warlord.webp": 40185,
      "./frost-revenant-uncaught.webp": 40193,
      "./frost-revenant.webp": 40197,
      "./hollow-choir-uncaught.webp": 40199,
      "./hollow-choir.webp": 40204,
      "./magma-warden-uncaught.webp": 40211,
      "./magma-warden.webp": 40216,
      "./patient-zero-uncaught.webp": 40224,
      "./patient-zero.webp": 40231,
      "./siege-engine-uncaught.webp": 40238,
      "./siege-engine.webp": 40245,
      "./warp-stalker-uncaught.webp": 40250,
      "./warp-stalker.webp": 40258
    };

    function be(ee) {
      var ie = Me(ee);
      return He(ie)
    }

    function Me(ee) {
      if (!He.o(ye, ee)) {
        var ie = new Error("Cannot find module '" + ee + "'");
        throw ie.code = "MODULE_NOT_FOUND", ie
      }
      return ye[ee]
    }
    be.keys = function() {
      return Object.keys(ye)
    }, be.resolve = Me, ee.exports = be, be.id = 40138
  },
  40141: (ee, ie, He) => {
    ee.exports = He.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40147: (ee, ie, He) => {
    ee.exports = He.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40149: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40158: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40164: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40170: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40175: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40180: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40182: (ee, ie, He) => {
    ee.exports = He.p + "static/media/doom-warlord-uncaught.b25b11d54326d386a901.webp"
  },
  40185: (ee, ie, He) => {
    ee.exports = He.p + "static/media/doom-warlord.d9ef07d4167ff931b0f0.webp"
  },
  40193: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40197: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40199: (ee, ie, He) => {
    ee.exports = He.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40204: (ee, ie, He) => {
    ee.exports = He.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40211: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40216: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40224: (ee, ie, He) => {
    ee.exports = He.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40231: (ee, ie, He) => {
    ee.exports = He.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  40238: (ee, ie, He) => {
    ee.exports = He.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  40245: (ee, ie, He) => {
    ee.exports = He.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  40250: (ee, ie, He) => {
    ee.exports = He.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  40258: (ee, ie, He) => {
    ee.exports = He.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  39358: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);