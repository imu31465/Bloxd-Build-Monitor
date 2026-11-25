export const id = 14;
export const ids = [14];
export const modules = {
  38882: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    const su = 4,
      Uu = 12e3,
      Zu = 1e3;
    class Xu {
      constructor() {
        let {
          limit: uu = su,
          windowMs: Eu = Uu,
          spacingMs: ju = Zu,
          now: Xu = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = uu, this.windowMs = Eu, this.spacingMs = ju, this.now = Xu
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const uu of this.priority) uu.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const uu = this.now();
        this.sent.push(uu), this.lastSentAt = uu, this.schedule(), this.notify()
      }
      addPriority(uu) {
        return this.priority.add(uu), () => {
          this.priority.delete(uu)
        }
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const uu of this.priority)
          if (uu.waiting()) return !0;
        return !1
      }
      prune() {
        const uu = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= uu;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const uu = this.now(),
          Eu = this.lastSentAt + this.spacingMs,
          ju = Math.min(Eu > uu ? Eu : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ju !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ju - uu)))
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38851: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su
    });
    class su {
      constructor(uu, Eu, ju) {
        this.TY = uu, this.beforeOpen = Eu, this.afterClose = ju, this.open = !1, this.fO = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.fO && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(uu) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(uu)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.fO = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.fO || (this.snapshot = this.buildSnapshot(), this.TY(this.snapshot))
      }
    }
  },
  39592: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Cj
    });
    var su = ju(58);
    var Uu = ju(22),
      Zu = ju(1969),
      Xu = ju(24),
      lu = ju(36992),
      qu = ju(1105),
      fu = ju.n(qu),
      Cu = ju(1499),
      bu = ju(1244),
      cu = ju(4719),
      Nu = ju(1398),
      Ou = ju(1506),
      Yu = ju(1971),
      hu = ju(1419),
      Du = ju(1964),
      gu = ju(2027),
      Mu = ju(207);
    const eu = ju(39600),
      Gu = Object.fromEntries(eu.keys().map((uu => [uu.replace(/^\.\/(.*)\.webp$/, "$1"), eu(uu)]))),
      pu = new Set;

    function wu(uu, Eu) {
      const ju = Eu ? uu : `${uu}-uncaught`,
        su = (0, Mu.c)(Gu, ju);
      return void 0 !== su || pu.has(ju) || (pu.add(ju), console.warn(`Containment Breach has no mugshot ${ju}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), su
    }
    var Ju = ju(1154);
    const du = "containmentBreach",
      au = "Gold Coin";

    function Pu(uu) {
      let {
        open: Eu,
        onDismiss: ju,
        title: su,
        className: Uu,
        decor: Zu,
        headerExtra: Xu,
        status: lu,
        statusRefused: qu = !1,
        children: Cu
      } = uu;
      const bu = `${Uu}Title`;
      return (0, Ju.jsx)(cu.c, {
        show: Eu,
        close: ju,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, Ju.jsxs)("section", {
          className: fu()("ContainmentBoardPanel", Uu),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": bu,
          children: [Zu && (0, Ju.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Zu
          }), (0, Ju.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, Ju.jsx)("h2", {
              id: bu,
              className: "VisuallyHidden",
              children: su
            }), Xu, (0, Ju.jsx)(Ou.l, {
              onClick: ju
            })]
          }), (0, Ju.jsx)("div", {
            className: "BoardBody",
            children: Cu
          }), void 0 !== lu && (0, Ju.jsx)("footer", {
            className: fu()("BoardStatus", {
              Refused: qu
            }),
            children: lu
          })]
        })
      })
    }

    function ou(uu) {
      let {
        itemName: Eu
      } = uu;
      return (0, Ju.jsx)(Yu.d, {
        itemName: Eu,
        amount: 0
      })
    }

    function ku(uu) {
      let {
        anomalyId: Eu,
        caught: ju
      } = uu;
      const Uu = (0, su.useRef)(null);
      return (0, Nu.d)(Uu, !ju), (0, Ju.jsx)("span", {
        ref: Uu,
        className: fu()("BoardMugshot", {
          Uncaught: !ju
        }),
        children: (0, Ju.jsx)("img", {
          src: wu(Eu, ju),
          alt: "",
          draggable: !1
        })
      })
    }

    function mu(uu) {
      let {
        itemName: Eu,
        amount: ju,
        dl: su,
        inTile: Uu = !1
      } = uu;
      return (0, Ju.jsx)(hu.e, {
        delayShow: 200,
        hoverOnly: Uu,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, Ju.jsx)(Ku, {
          itemName: Eu,
          amount: ju,
          dl: su
        }),
        children: (0, Ju.jsxs)("span", {
          className: fu()("BoardChip", {
            Short: void 0 !== su && su < ju
          }),
          children: [(0, Ju.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, Ju.jsx)(ou, {
              itemName: Eu
            })
          }), ju.toLocaleString()]
        })
      })
    }
    const vu = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function Ku(uu) {
      var Eu;
      let {
        itemName: ju,
        amount: su,
        dl: Uu
      } = uu;
      const {
        t: Zu
      } = (0, bu.A)(), Xu = (0, gu.d)("itemInfo", (uu => uu[ju])), {
        lore: lu,
        droppedBy: qu
      } = function(uu) {
        if ("string" !== typeof uu) return {
          lore: uu,
          droppedBy: null
        };
        const Eu = vu.exec(uu);
        return null === Eu ? {
          lore: uu,
          droppedBy: null
        } : {
          lore: "" === Eu[1] ? void 0 : Eu[1],
          droppedBy: Eu[2]
        }
      }(null === Xu || void 0 === Xu ? void 0 : Xu.description);
      return (0, Ju.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, Ju.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, Ju.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, Ju.jsx)(ou, {
              itemName: ju
            })
          }), (0, Ju.jsx)(Du.d, {
            text: null !== (Eu = null === Xu || void 0 === Xu ? void 0 : Xu.displayName) && void 0 !== Eu ? Eu : ju,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== lu || null !== qu) && (0, Ju.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== lu && (0, Ju.jsx)(Du.d, {
            text: lu,
            className: "BoardChipTooltipDescription"
          }), null !== qu && (0, Ju.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, Ju.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Zu(`${du}:chipDroppedBy`)
            }), qu]
          })]
        }), void 0 !== Uu && (0, Ju.jsxs)("div", {
          className: fu()("BoardChipTooltipHeld", {
            Short: Uu < su
          }),
          children: [(0, Ju.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Zu(`${du}:chipYouHave`)
          }), (0, Ju.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, Ju.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Uu.toLocaleString()
            }), ` / ${su.toLocaleString()}`]
          }), (0, Ju.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, Ju.jsx)("span", {
              style: {
                width: (su > 0 ? 100 * Math.min(1, Uu / su) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Vu(uu) {
      let {
        icon: Eu,
        name: ju,
        selected: su,
        locked: Uu,
        className: Zu,
        buttonRef: Xu,
        onSelect: lu,
        children: qu
      } = uu;
      return (0, Ju.jsxs)("button", {
        ref: Xu,
        type: "button",
        className: fu()("BoardTile", Zu, {
          Selected: su,
          Locked: Uu
        }),
        onClick: lu,
        children: [(0, Ju.jsx)("span", {
          className: "BoardTileIcon",
          children: Eu
        }), (0, Ju.jsx)("span", {
          className: "BoardTileName",
          children: ju
        }), qu]
      })
    }

    function ru(uu) {
      let {
        icon: Eu,
        name: ju,
        children: su
      } = uu;
      return (0, Ju.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, Ju.jsx)("span", {
          className: "BoardDetailIcon",
          children: Eu
        }), (0, Ju.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, Ju.jsx)("h3", {
            children: ju
          }), (0, Ju.jsx)("span", {
            className: "BoardDetailStatus",
            children: su
          })]
        })]
      })
    }

    function Qu(uu) {
      let {
        coins: Eu,
        children: ju
      } = uu;
      return (0, Ju.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, Ju.jsx)(mu, {
          itemName: au,
          amount: Eu
        }), ju]
      })
    }
    var iu = ju(38851);
    const Wu = "containmentCodexView";
    class Su extends iu.d {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = uu => {
          this.selectedId = uu, this.emit()
        }
      }
      NO(uu) {
        this.entries = uu.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const Iu = {
        codexAnyDifficulty: `${du}:codexNeedsAny`,
        codexNormalOnly: `${du}:codexNeedsNormal`,
        codexHardOnly: `${du}:codexNeedsHard`
      },
      Fu = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Bu = {
        codexContained: `${du}:codexContainedBadge`,
        codexEncountered: `${du}:codexEncounteredBadge`,
        codexUnidentified: `${du}:codexUnidentifiedBadge`
      },
      Lu = ["94%", "81%", "88%", "46%", "72%"];

    function tu(uu) {
      let {
        entry: Eu
      } = uu;
      const {
        t: ju
      } = (0, bu.A)();
      return (0, Ju.jsx)("span", {
        className: fu()("BoardBadge", Fu[Eu.codexEntryState]),
        children: ju(Bu[Eu.codexEntryState])
      })
    }

    function xu(uu) {
      const {
        t: Eu
      } = (0, bu.A)();
      return "codexUnidentified" === uu.codexEntryState ? Eu(`${du}:codexUnidentifiedName`) : uu.codexEntryName
    }

    function Tu(uu) {
      let {
        entry: Eu
      } = uu;
      return "codexUnidentified" === Eu.codexEntryState ? (0, Ju.jsx)(ou, {
        itemName: "Book"
      }) : (0, Ju.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, Ju.jsx)(ku, {
          anomalyId: Eu.codexEntryId,
          caught: "codexContained" === Eu.codexEntryState
        }), (0, Ju.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Hu(uu) {
      let {
        entry: Eu,
        selected: ju,
        onSelect: su
      } = uu;
      const Uu = "codexUnidentified" === Eu.codexEntryState;
      return (0, Ju.jsxs)(Vu, {
        icon: (0, Ju.jsx)(Tu, {
          entry: Eu
        }),
        name: xu(Eu),
        selected: ju,
        locked: Uu,
        className: fu()("CodexFolder", Fu[Eu.codexEntryState]),
        onSelect: () => {
          su(Eu.codexEntryId)
        },
        children: [!Uu && (0, Ju.jsx)(tu, {
          entry: Eu
        }), Uu && (0, Ju.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Au(uu) {
      let {
        count: Eu
      } = uu;
      const ju = [];
      for (let su = Math.min(Eu, 25); su > 0; su -= 5) ju.push(Math.min(su, 5));
      return (0, Ju.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: ju.map(((uu, Eu) => (0, Ju.jsx)("span", {
          className: fu()("CodexTallyGroup", {
            Gate: 5 === uu
          }),
          children: Array.from({
            length: Math.min(uu, 4)
          }, ((uu, Eu) => (0, Ju.jsx)("span", {
            className: "CodexTallyMark"
          }, Eu)))
        }, Eu)))
      })
    }

    function nu(uu) {
      let {
        contained: Eu,
        total: ju
      } = uu;
      const {
        t: su
      } = (0, bu.A)();
      return (0, Ju.jsxs)("div", {
        className: "CodexProgress",
        children: [su(`${du}:codexProgress`, {
          contained: String(Eu),
          total: String(ju)
        }), (0, Ju.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, Ju.jsx)("span", {
            style: {
              width: Eu / ju * 100 + "%"
            }
          })
        })]
      })
    }

    function yu(uu) {
      let {
        entry: Eu,
        fileNumber: ju
      } = uu;
      const {
        t: su
      } = (0, bu.A)(), Uu = "codexContained" === Eu.codexEntryState;
      return (0, Ju.jsx)("section", {
        className: "BoardDetail",
        children: (0, Ju.jsxs)("article", {
          className: fu()("CodexDossier", Fu[Eu.codexEntryState]),
          children: [(0, Ju.jsx)("span", {
            className: "CodexFileNumber",
            children: su(`${du}:codexFileNumber`, {
              number: String(ju).padStart(3, "0")
            })
          }), (0, Ju.jsx)(ru, {
            icon: (0, Ju.jsx)(Tu, {
              entry: Eu
            }),
            name: xu(Eu),
            children: (0, Ju.jsx)(tu, {
              entry: Eu
            })
          }), Uu && (0, Ju.jsxs)(Ju.Fragment, {
            children: [(0, Ju.jsx)("p", {
              className: "BoardDescription",
              children: Eu.codexEntryLore
            }), (0, Ju.jsxs)("p", {
              className: "CodexTally",
              children: [su(`${du}:codexContainments`, {
                count: String(Eu.codexEntryContainedCount)
              }), (0, Ju.jsx)(Au, {
                count: Eu.codexEntryContainedCount
              })]
            }), (0, Ju.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: su(`${du}:codexContainedBadge`)
            })]
          }), !Uu && (0, Ju.jsxs)(Ju.Fragment, {
            children: [(0, Ju.jsxs)("div", {
              className: "CodexRedaction",
              children: [Lu.map((uu => (0, Ju.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: uu
                }
              }, uu))), (0, Ju.jsx)("p", {
                className: "CodexRedacted",
                children: su(`${du}:codexRedacted`)
              })]
            }), "" !== Eu.codexEntryHint && (0, Ju.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, Ju.jsx)("h4", {
                children: su(`${du}:codexHintLabel`)
              }), (0, Ju.jsx)("p", {
                children: Eu.codexEntryHint
              })]
            }), (0, Ju.jsx)("p", {
              className: "CodexClearance",
              children: su(Iu[Eu.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function zu(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, Cu.g)(Wu, Eu.getSnapshot()),
        {
          t: su
        } = (0, bu.A)();
      if (0 === ju.entries.length) return null;
      const Uu = ju.entries.find((uu => uu.codexEntryId === ju.selectedId)),
        Zu = ju.entries.filter((uu => "codexContained" === uu.codexEntryState)).length,
        Xu = ju.entries.map((uu => uu.codexEntryId)).sort().indexOf(Uu.codexEntryId) + 1;
      return (0, Ju.jsxs)(Pu, {
        open: ju.open,
        onDismiss: Eu.dismiss,
        title: su(`${du}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, Ju.jsx)(nu, {
          contained: Zu,
          total: ju.entries.length
        }),
        children: [(0, Ju.jsx)("div", {
          className: "BoardTiles",
          children: ju.entries.map((uu => (0, Ju.jsx)(Hu, {
            entry: uu,
            selected: uu === Uu,
            onSelect: Eu.select
          }, uu.codexEntryId)))
        }), (0, Ju.jsx)(yu, {
          entry: Uu,
          fileNumber: Xu
        })]
      })
    }
    var Ru = ju(349);
    class uE extends iu.d {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        super(uu, Eu, ju), this.pacer = su, this.command = Uu, this.predict = Zu, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = uu => {
          this.selectedId = uu, this.emit()
        }, this.act = (uu, Eu) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${uu} ${Eu}`, this.rollBack)) return;
          const ju = this.predict(this.board, uu, Eu);
          null !== ju && (this.board = ju.board, this.notice = ju.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = su.subscribe((() => {
          this.emit()
        }))
      }
      NO(uu) {
        const Eu = this.messageOpens(uu);
        if (Eu && this.open) return this.board === this.confirmed && (this.board = uu), this.confirmed = uu, void this.emit();
        if (this.board = uu, this.confirmed = uu, this.pacer.onReply(), Eu) return this.notice = null, this.selectedId = this.openingSelection(uu), void this.show();
        const ju = this.messageNotice(uu);
        null !== ju && (this.notice = ju), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function EE(uu, Eu) {
      return uu.loadoutCoins >= Eu.loadoutCostCoins && Eu.loadoutCostParts.every((Eu => function(uu, Eu) {
        return jE(uu, Eu).loadoutHeldPartAmount
      }(uu, Eu.loadoutPartCurrency) >= Eu.loadoutPartAmount))
    }

    function jE(uu, Eu) {
      return uu.loadoutHeldParts.find((uu => uu.loadoutHeldPartCurrency === Eu))
    }

    function sE(uu, Eu) {
      return uu.loadoutSlots.find((uu => uu.loadoutSlotKind === Eu))
    }

    function UE(uu) {
      return uu.loadoutPerks.filter((uu => uu.loadoutPerkEquipped)).length >= uu.loadoutMaxPerks
    }

    function ZE(uu, Eu, ju) {
      for (const Uu of uu.loadoutSlots) {
        const su = Uu.loadoutSlotOptions.find((uu => uu.loadoutOptionId === ju));
        if (su) return "loadoutArmour" === Uu.loadoutSlotKind ? lE(uu, Uu, su, Eu) : XE(uu, Uu, su, Eu)
      }
      const su = uu.loadoutPerks.find((uu => uu.loadoutPerkId === ju));
      return su ? function(uu, Eu, ju) {
        const su = Eu.loadoutPerkOwned,
          Uu = Eu.loadoutPerkEquipped,
          Zu = Eu.loadoutPerkName,
          Xu = UE(uu);
        if ("loadoutUnlock" === ju) {
          if (su || !EE(uu, Eu.loadoutPerkCost)) return null;
          const ju = {
            ...Eu,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Xu
          };
          return {
            board: fE(CE(uu, Eu.loadoutPerkCost), ju),
            notice: bE(Xu ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Zu)
          }
        }
        if ("loadoutUpgrade" === ju || !su || "loadoutEquip" === ju === Uu || !Uu && Xu) return null;
        return {
          board: fE(uu, {
            ...Eu,
            loadoutPerkEquipped: !Uu
          }),
          notice: bE(Uu ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Zu)
        }
      }(uu, su, Eu) : null
    }

    function XE(uu, Eu, ju, su) {
      const Uu = ju.loadoutOptionOwnedTier,
        Zu = ju.loadoutOptionName;
      if ("loadoutEquip" === su) return 0 === Uu ? null : {
        board: qE(uu, Eu, ju.loadoutOptionId, null),
        notice: bE("loadoutNoticeEquipped", Zu)
      };
      const Xu = "loadoutUnlock" === su;
      if (Xu && 0 !== Uu || "loadoutUpgrade" === su && (0 === Uu || Uu >= ju.loadoutOptionTiers.length) || "loadoutUnequip" === su) return null;
      const lu = ju.loadoutOptionTiers[Uu].loadoutTierCost;
      if (!EE(uu, lu)) return null;
      const qu = {
          ...ju,
          loadoutOptionOwnedTier: Uu + 1
        },
        fu = Xu ? ju.loadoutOptionId : Eu.loadoutSlotEquippedId;
      return {
        board: qE(CE(uu, lu), Eu, fu, qu),
        notice: Xu ? bE("loadoutNoticeUnlocked", Zu) : bE("loadoutNoticeUpgraded", Zu, Uu + 1)
      }
    }

    function lE(uu, Eu, ju, su) {
      const Uu = ju.loadoutOptionOwnedTier > 0,
        Zu = ju.loadoutOptionName;
      if ("loadoutEquip" === su && Uu) return {
        board: qE(uu, Eu, ju.loadoutOptionId, null),
        notice: bE("loadoutNoticeEquipped", Zu)
      };
      const Xu = ju.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== su || Uu || !EE(uu, Xu) ? null : {
        board: qE(CE(uu, Xu), Eu, ju.loadoutOptionId, {
          ...ju,
          loadoutOptionOwnedTier: 1
        }),
        notice: bE("loadoutNoticeUnlocked", Zu)
      }
    }

    function qE(uu, Eu, ju, su) {
      const Uu = {
        ...Eu,
        loadoutSlotEquippedId: ju,
        loadoutSlotOptions: Eu.loadoutSlotOptions.map((uu => null !== su && uu.loadoutOptionId === su.loadoutOptionId ? su : uu))
      };
      return {
        ...uu,
        loadoutSlots: uu.loadoutSlots.map((uu => uu === Eu ? Uu : uu))
      }
    }

    function fE(uu, Eu) {
      return {
        ...uu,
        loadoutPerks: uu.loadoutPerks.map((uu => uu.loadoutPerkId === Eu.loadoutPerkId ? Eu : uu))
      }
    }

    function CE(uu, Eu) {
      return {
        ...uu,
        loadoutCoins: uu.loadoutCoins - Eu.loadoutCostCoins,
        loadoutHeldParts: uu.loadoutHeldParts.map((uu => {
          const ju = Eu.loadoutCostParts.find((Eu => Eu.loadoutPartCurrency === uu.loadoutHeldPartCurrency));
          return ju ? {
            ...uu,
            loadoutHeldPartAmount: uu.loadoutHeldPartAmount - ju.loadoutPartAmount
          } : uu
        }))
      }
    }

    function bE(uu, Eu) {
      return {
        loadoutNoticeKey: uu,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: Eu,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const cE = "containmentLoadoutView";
    class NE extends uE {
      constructor(uu, Eu, ju, su) {
        super(uu, Eu, ju, su, "loadout", ZE), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = uu => {
          this.slot = uu, this.selectedId = OE(this.board, uu), this.emit()
        }
      }
      messageOpens(uu) {
        return uu.loadoutMessageOpens
      }
      messageNotice(uu) {
        return uu.loadoutNotice
      }
      openingSelection(uu) {
        return OE(uu, this.slot)
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

    function OE(uu, Eu) {
      if ("loadoutPerks" === Eu) {
        var ju;
        const Eu = uu.loadoutPerks;
        return (null !== (ju = Eu.find((uu => uu.loadoutPerkEquipped))) && void 0 !== ju ? ju : Eu[0]).loadoutPerkId
      }
      return sE(uu, Eu).loadoutSlotEquippedId
    }
    const YE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var hE = ju(37282),
      DE = ju(1330);
    const gE = {
        loadoutPrimary: `${du}:loadoutSlotPrimary`,
        loadoutSecondary: `${du}:loadoutSlotSecondary`,
        loadoutOffensive: `${du}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${du}:loadoutSlotSelfHelp`,
        loadoutArmour: `${du}:loadoutSlotArmour`,
        loadoutPerks: `${du}:loadoutSlotPerks`
      },
      ME = {
        section: "right",
        Hc: "bottom",
        act: "top"
      },
      eE = (0, su.createContext)({
        step: null,
        targetRef: () => {}
      });

    function GE() {
      const {
        step: uu,
        targetRef: Eu
      } = (0, su.useContext)(eE);
      return (ju, su) => (null === uu || void 0 === uu ? void 0 : uu.kind) === ju && uu.id === su ? Eu : void 0
    }

    function pE(uu, Eu) {
      const ju = Eu.loadoutTargetId;
      if ("loadoutPerks" === Eu.loadoutTargetSection) {
        const Eu = uu.loadoutPerks.find((uu => uu.loadoutPerkId === ju));
        return {
          name: Eu.loadoutPerkName,
          owned: Eu.loadoutPerkOwned,
          equipped: Eu.loadoutPerkEquipped
        }
      }
      const su = sE(uu, Eu.loadoutTargetSection),
        Uu = su.loadoutSlotOptions.find((uu => uu.loadoutOptionId === ju));
      return {
        name: Uu.loadoutOptionName,
        owned: Uu.loadoutOptionOwnedTier > 0,
        equipped: su.loadoutSlotEquippedId === ju
      }
    }

    function wE(uu, Eu, ju, su) {
      const [Uu, Zu] = uu(`${du}:${Eu}`, {
        [ju]: "\x01"
      }).split("\x01");
      return (0, Ju.jsxs)(Ju.Fragment, {
        children: [Uu, (0, Ju.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: su
        }), Zu]
      })
    }

    function JE(uu) {
      let {
        view: Eu,
        onDismiss: ju,
        children: Uu
      } = uu;
      const {
        t: Zu
      } = (0, bu.A)(), Xu = Eu.loadout, lu = Eu.open ? Xu.loadoutWalkthrough.map((uu => ({
        target: uu,
        info: pE(Xu, uu)
      }))).find((uu => {
        let {
          info: Eu
        } = uu;
        return !Eu.equipped
      })) : void 0;
      let qu = null,
        fu = null;
      if (void 0 !== lu) {
        const {
          target: uu,
          info: ju
        } = lu;
        Eu.slot !== uu.loadoutTargetSection ? (qu = {
          kind: "section",
          id: uu.loadoutTargetSection
        }, fu = wE(Zu, "loadoutWalkthroughSection", "section", Zu(gE[uu.loadoutTargetSection]))) : Eu.selectedId !== uu.loadoutTargetId ? (qu = {
          kind: "Hc",
          id: uu.loadoutTargetId
        }, fu = wE(Zu, "loadoutWalkthroughPick", "name", ju.name)) : (qu = {
          kind: "act",
          id: uu.loadoutTargetId
        }, fu = wE(Zu, ju.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", ju.name))
      }
      const Cu = null === qu ? null : function(uu) {
          return `${uu.kind}:${uu.id}`
        }(qu),
        [cu, Nu] = (0, su.useState)(null),
        Ou = (0, su.useCallback)((uu => {
          Nu((Eu => null !== uu ? {
            key: Cu,
            node: uu
          } : (null === Eu || void 0 === Eu ? void 0 : Eu.key) === Cu ? null : Eu))
        }), [Cu]),
        Yu = null !== Cu && (null === cu || void 0 === cu ? void 0 : cu.key) === Cu ? cu.node : null;
      return (0, Ju.jsxs)(eE.Provider, {
        value: {
          step: qu,
          targetRef: Ou
        },
        children: [Uu, null !== qu && null !== Yu && (0, Ju.jsx)(dE, {
          target: Yu,
          placement: ME[qu.kind],
          onDismiss: ju,
          children: fu
        }, Cu)]
      })
    }

    function dE(uu) {
      let {
        target: Eu,
        placement: ju,
        onDismiss: Uu,
        children: Zu
      } = uu;
      const {
        t: Xu
      } = (0, bu.A)(), lu = (0, su.useRef)(Eu);
      return lu.current = Eu, (0, DE.w)("popup", lu, Uu), (0, Ju.jsxs)(hE.d, {
        target: Eu,
        placement: ju,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, Ju.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, Ju.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: YE,
            alt: "",
            draggable: !1
          }), (0, Ju.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Xu(`${du}:operatorName`)
          }), (0, Ju.jsx)(Ou.l, {
            onClick: Uu,
            ariaLabel: Xu(`${du}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, Ju.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Zu
        })]
      })
    }
    const aE = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function PE(uu) {
      let {
        cost: Eu,
        loadout: ju
      } = uu;
      const {
        t: su
      } = (0, bu.A)();
      return Eu.loadoutCostCoins <= 0 && 0 === Eu.loadoutCostParts.length ? (0, Ju.jsx)("span", {
        className: "LoadoutCost",
        children: su(`${du}:loadoutFree`)
      }) : (0, Ju.jsxs)("span", {
        className: "LoadoutCost",
        children: [Eu.loadoutCostCoins > 0 && (0, Ju.jsx)(mu, {
          itemName: au,
          amount: Eu.loadoutCostCoins,
          dl: ju.loadoutCoins
        }), Eu.loadoutCostParts.map((uu => {
          const Eu = jE(ju, uu.loadoutPartCurrency);
          return (0, Ju.jsx)(mu, {
            itemName: Eu.loadoutHeldPartItem,
            amount: uu.loadoutPartAmount,
            dl: Eu.loadoutHeldPartAmount
          }, uu.loadoutPartCurrency)
        }))]
      })
    }
    const oE = {
      loadoutStatFireRate: `${du}:loadoutUnitPerMinute`,
      loadoutStatReload: `${du}:loadoutUnitSeconds`,
      loadoutStatResupply: `${du}:loadoutUnitSeconds`
    };

    function kE(uu) {
      return "loadoutStatPotency" === uu.loadoutStatKind ? (0, Ru.N)(uu.loadoutStatValue) : String(uu.loadoutStatValue)
    }

    function mE(uu) {
      var Eu;
      let {
        option: ju
      } = uu;
      const {
        t: su
      } = (0, bu.A)(), Uu = ju.loadoutOptionTiers, Zu = null === (Eu = Uu[0]) || void 0 === Eu ? void 0 : Eu.loadoutTierStats.map((uu => uu.loadoutStatKind));
      if (!Zu || 0 === Zu.length) return null;
      const Xu = ju.loadoutOptionOwnedTier,
        lu = (uu, Eu) => {
          var ju;
          return null === (ju = Uu[uu]) || void 0 === ju ? void 0 : ju.loadoutTierStats.find((uu => uu.loadoutStatKind === Eu))
        };
      return (0, Ju.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, Ju.jsx)("thead", {
          children: (0, Ju.jsxs)("tr", {
            children: [(0, Ju.jsx)("th", {}), Uu.map(((uu, Eu) => (0, Ju.jsx)("th", {
              className: fu()({
                Current: Eu + 1 === Xu,
                Next: Eu === Xu
              }),
              children: su(`${du}:loadoutTier`, {
                tier: (0, Ru.N)(Eu + 1)
              })
            }, Eu)))]
          })
        }), (0, Ju.jsx)("tbody", {
          children: Zu.map((uu => {
            const Eu = oE[uu];
            return (0, Ju.jsxs)("tr", {
              children: [(0, Ju.jsxs)("th", {
                scope: "row",
                children: [su(`${du}:${uu}`), Eu && (0, Ju.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: su(Eu)
                })]
              }), Uu.map(((Eu, ju) => {
                const su = lu(ju, uu),
                  Uu = ju > 0 ? lu(ju - 1, uu) : void 0,
                  Zu = su && Uu ? su.loadoutStatValue - Uu.loadoutStatValue : 0,
                  qu = aE.has(uu) ? Zu < 0 : Zu > 0,
                  Cu = ju === Xu;
                return (0, Ju.jsxs)("td", {
                  className: fu()({
                    Current: ju + 1 === Xu,
                    Next: Cu,
                    Gain: qu,
                    Owned: ju < Xu
                  }),
                  children: [Cu && qu && (0, Ju.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Zu < 0 ? "\u25bc" : "\u25b2"
                  }), su ? kE(su) : "-"]
                }, ju)
              }))]
            }, uu)
          }))
        })]
      })
    }

    function vE(uu) {
      let {
        view: Eu,
        controller: ju,
        slot: su,
        option: Uu
      } = uu;
      const {
        t: Zu
      } = (0, bu.A)(), Xu = Eu.loadout, lu = Uu.loadoutOptionOwnedTier, qu = Uu.loadoutOptionTiers.length, fu = su.loadoutSlotEquippedId === Uu.loadoutOptionId, Cu = lu < qu ? Uu.loadoutOptionTiers[lu].loadoutTierCost : null, cu = null !== Cu && EE(Xu, Cu), Nu = Uu.loadoutOptionId, Yu = GE();
      return (0, Ju.jsxs)(Ju.Fragment, {
        children: [(0, Ju.jsx)(VE, {
          icon: Uu.loadoutOptionIcon,
          name: Uu.loadoutOptionName,
          status: 0 === lu ? Zu(`${du}:loadoutLocked`) : qu > 1 ? Zu(`${du}:loadoutTier`, {
            tier: (0, Ru.N)(lu)
          }) : null,
          locked: 0 === lu,
          equipped: fu
        }), (0, Ju.jsx)("p", {
          className: "BoardDescription",
          children: Uu.loadoutOptionDescription
        }), (0, Ju.jsx)(mE, {
          option: Uu
        }), (0, Ju.jsxs)("div", {
          ref: Yu("act", Nu),
          className: "BoardActions",
          children: [null !== Cu && (0, Ju.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Ju.jsx)(PE, {
              cost: Cu,
              loadout: Xu
            }), (0, Ju.jsx)(Ou.p, {
              disabled: !cu || Eu.pending,
              onClick: () => {
                ju.act(0 === lu ? "loadoutUnlock" : "loadoutUpgrade", Nu)
              },
              children: 0 === lu ? Zu(`${du}:loadoutUnlock`) : Zu(`${du}:loadoutUpgrade`, {
                tier: (0, Ru.N)(lu + 1)
              })
            })]
          }), null === Cu && qu > 1 && (0, Ju.jsx)("span", {
            className: "BoardHint",
            children: Zu(`${du}:loadoutMaxed`)
          }), lu > 0 && !fu && (0, Ju.jsx)(Ou.f, {
            disabled: Eu.pending,
            onClick: () => {
              ju.act("loadoutEquip", Nu)
            },
            children: Zu(`${du}:loadoutEquip`)
          })]
        })]
      })
    }

    function KE(uu) {
      let {
        view: Eu,
        controller: ju,
        perk: su
      } = uu;
      const {
        t: Uu
      } = (0, bu.A)(), Zu = Eu.loadout, Xu = UE(Zu), lu = su.loadoutPerkId, qu = GE();
      return (0, Ju.jsxs)(Ju.Fragment, {
        children: [(0, Ju.jsx)(VE, {
          icon: su.loadoutPerkIcon,
          name: su.loadoutPerkName,
          status: su.loadoutPerkOwned ? null : Uu(`${du}:loadoutLocked`),
          locked: !su.loadoutPerkOwned,
          equipped: su.loadoutPerkEquipped
        }), (0, Ju.jsx)("p", {
          className: "BoardDescription",
          children: su.loadoutPerkDescription
        }), (0, Ju.jsxs)("div", {
          ref: qu("act", lu),
          className: "BoardActions",
          children: [!su.loadoutPerkOwned && (0, Ju.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Ju.jsx)(PE, {
              cost: su.loadoutPerkCost,
              loadout: Zu
            }), (0, Ju.jsx)(Ou.p, {
              disabled: !EE(Zu, su.loadoutPerkCost) || Eu.pending,
              onClick: () => {
                ju.act("loadoutUnlock", lu)
              },
              children: Uu(`${du}:loadoutUnlock`)
            })]
          }), su.loadoutPerkOwned && !su.loadoutPerkEquipped && (0, Ju.jsx)(Ou.f, {
            disabled: Xu || Eu.pending,
            onClick: () => {
              ju.act("loadoutEquip", lu)
            },
            children: Uu(`${du}:loadoutEquip`)
          }), su.loadoutPerkOwned && !su.loadoutPerkEquipped && Xu && (0, Ju.jsx)("span", {
            className: "BoardHint",
            children: Uu(`${du}:loadoutSocketsFullHint`)
          }), su.loadoutPerkEquipped && (0, Ju.jsx)(Ou.$, {
            disabled: Eu.pending,
            onClick: () => {
              ju.act("loadoutUnequip", lu)
            },
            children: Uu(`${du}:loadoutUnequip`)
          })]
        })]
      })
    }

    function VE(uu) {
      let {
        icon: Eu,
        name: ju,
        status: su,
        locked: Uu,
        equipped: Zu
      } = uu;
      const {
        t: Xu
      } = (0, bu.A)();
      return (0, Ju.jsxs)(ru, {
        icon: (0, Ju.jsx)(ou, {
          itemName: Eu
        }),
        name: ju,
        children: [null !== su && (0, Ju.jsx)("span", {
          className: fu()("LoadoutStatusText", {
            Locked: Uu
          }),
          children: su
        }), Zu && (0, Ju.jsx)("span", {
          className: "BoardBadge",
          children: Xu(`${du}:loadoutEquippedBadge`)
        })]
      })
    }

    function rE(uu) {
      let {
        view: Eu,
        controller: ju
      } = uu;
      const su = Eu.loadout;
      if ("loadoutPerks" === Eu.slot) {
        const uu = su.loadoutPerks.find((uu => uu.loadoutPerkId === Eu.selectedId));
        return (0, Ju.jsx)("section", {
          className: "BoardDetail",
          children: uu && (0, Ju.jsx)(KE, {
            view: Eu,
            controller: ju,
            perk: uu
          })
        })
      }
      const Uu = sE(su, Eu.slot),
        Zu = Uu.loadoutSlotOptions.find((uu => uu.loadoutOptionId === Eu.selectedId));
      return (0, Ju.jsx)("section", {
        className: "BoardDetail",
        children: Zu && (0, Ju.jsx)(vE, {
          view: Eu,
          controller: ju,
          slot: Uu,
          option: Zu
        })
      })
    }

    function QE(uu) {
      let {
        owned: Eu,
        total: ju
      } = uu;
      return ju <= 1 ? null : (0, Ju.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: ju
        }, ((uu, ju) => (0, Ju.jsx)("span", {
          className: fu()("LoadoutPip", {
            Filled: ju < Eu
          })
        }, ju)))
      })
    }

    function iE(uu) {
      let {
        view: Eu,
        controller: ju
      } = uu;
      const {
        t: su
      } = (0, bu.A)(), Uu = Eu.loadout, Zu = GE();
      return (0, Ju.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": su(`${du}:loadoutKit`),
        children: [Uu.loadoutSlots.map((uu => {
          const Uu = uu.loadoutSlotOptions.find((Eu => Eu.loadoutOptionId === uu.loadoutSlotEquippedId));
          return (0, Ju.jsxs)("button", {
            ref: Zu("section", uu.loadoutSlotKind),
            type: "button",
            className: fu()("LoadoutKitSlot", {
              Selected: Eu.slot === uu.loadoutSlotKind
            }),
            onClick: () => {
              ju.selectSlot(uu.loadoutSlotKind)
            },
            children: [(0, Ju.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Uu && (0, Ju.jsx)(ou, {
                itemName: Uu.loadoutOptionIcon
              })
            }), (0, Ju.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, Ju.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, Ju.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: su(gE[uu.loadoutSlotKind])
                }), Uu && (0, Ju.jsx)(QE, {
                  owned: Uu.loadoutOptionOwnedTier,
                  total: Uu.loadoutOptionTiers.length
                })]
              }), (0, Ju.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Uu || void 0 === Uu ? void 0 : Uu.loadoutOptionName
              })]
            })]
          }, uu.loadoutSlotKind)
        })), (0, Ju.jsx)(WE, {
          view: Eu,
          controller: ju
        })]
      })
    }

    function WE(uu) {
      let {
        view: Eu,
        controller: ju
      } = uu;
      const {
        t: su
      } = (0, bu.A)(), Uu = Eu.loadout, Zu = Uu.loadoutPerks.filter((uu => uu.loadoutPerkEquipped)), Xu = GE();
      return (0, Ju.jsxs)("button", {
        ref: Xu("section", "loadoutPerks"),
        type: "button",
        className: fu()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === Eu.slot
        }),
        onClick: () => {
          ju.selectSlot("loadoutPerks")
        },
        children: [(0, Ju.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, Ju.jsx)("span", {
            className: "LoadoutKitLabel",
            children: su(gE.loadoutPerks)
          }), (0, Ju.jsx)("span", {
            className: "LoadoutPerkCount",
            children: su(`${du}:loadoutPerkCount`, {
              equipped: String(Zu.length),
              max: String(Uu.loadoutMaxPerks)
            })
          })]
        }), (0, Ju.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Uu.loadoutMaxPerks
          }, ((uu, Eu) => {
            const ju = Zu[Eu];
            return (0, Ju.jsxs)("span", {
              className: fu()("LoadoutSocket", {
                Filled: ju,
                Empty: !ju
              }),
              children: [(0, Ju.jsx)("span", {
                className: "LoadoutSocketWell",
                children: ju && (0, Ju.jsx)(ou, {
                  itemName: ju.loadoutPerkIcon
                })
              }), (0, Ju.jsx)("span", {
                className: "LoadoutSocketName",
                children: ju ? ju.loadoutPerkName : su(`${du}:loadoutPerkSocketEmpty`)
              })]
            }, Eu)
          }))
        })]
      })
    }

    function SE(uu) {
      let {
        icon: Eu,
        name: ju,
        selected: su,
        equipped: Uu,
        locked: Zu,
        ownedTier: Xu,
        tiers: lu,
        buttonRef: qu,
        onSelect: fu
      } = uu;
      const {
        t: Cu
      } = (0, bu.A)();
      return (0, Ju.jsxs)(Vu, {
        icon: (0, Ju.jsx)(ou, {
          itemName: Eu
        }),
        name: ju,
        selected: su,
        locked: Zu,
        buttonRef: qu,
        onSelect: fu,
        children: [Uu && (0, Ju.jsx)("span", {
          className: "BoardBadge",
          children: Cu(`${du}:loadoutEquippedBadge`)
        }), Zu && (0, Ju.jsx)("span", {
          className: "BoardBadge Muted",
          children: Cu(`${du}:loadoutLocked`)
        }), !Zu && (0, Ju.jsx)(QE, {
          owned: Xu,
          total: lu
        })]
      })
    }

    function IE(uu) {
      let {
        view: Eu,
        controller: ju
      } = uu;
      const su = Eu.loadout,
        Uu = GE();
      if ("loadoutPerks" === Eu.slot) return (0, Ju.jsx)("div", {
        className: "BoardTiles",
        children: su.loadoutPerks.map((uu => (0, Ju.jsx)(SE, {
          icon: uu.loadoutPerkIcon,
          name: uu.loadoutPerkName,
          selected: Eu.selectedId === uu.loadoutPerkId,
          equipped: uu.loadoutPerkEquipped,
          locked: !uu.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Uu("Hc", uu.loadoutPerkId),
          onSelect: () => {
            ju.select(uu.loadoutPerkId)
          }
        }, uu.loadoutPerkId)))
      });
      const Zu = sE(su, Eu.slot);
      return (0, Ju.jsx)("div", {
        className: "BoardTiles",
        children: Zu.loadoutSlotOptions.map((uu => (0, Ju.jsx)(SE, {
          icon: uu.loadoutOptionIcon,
          name: uu.loadoutOptionName,
          selected: Eu.selectedId === uu.loadoutOptionId,
          equipped: Zu.loadoutSlotEquippedId === uu.loadoutOptionId,
          locked: 0 === uu.loadoutOptionOwnedTier,
          ownedTier: uu.loadoutOptionOwnedTier,
          tiers: uu.loadoutOptionTiers.length,
          buttonRef: Uu("Hc", uu.loadoutOptionId),
          onSelect: () => {
            ju.select(uu.loadoutOptionId)
          }
        }, uu.loadoutOptionId)))
      })
    }

    function FE(uu) {
      let {
        loadout: Eu
      } = uu;
      return (0, Ju.jsx)(Qu, {
        coins: Eu.loadoutCoins,
        children: Eu.loadoutHeldParts.filter((uu => uu.loadoutHeldPartAmount > 0)).map((uu => (0, Ju.jsx)(mu, {
          itemName: uu.loadoutHeldPartItem,
          amount: uu.loadoutHeldPartAmount
        }, uu.loadoutHeldPartCurrency)))
      })
    }

    function BE(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, Cu.g)(cE, Eu.getSnapshot()),
        {
          t: su
        } = (0, bu.A)();
      if (null === ju.loadout) return null;
      const Uu = ju.notice;
      return (0, Ju.jsx)(JE, {
        view: ju,
        onDismiss: Eu.dismiss,
        children: (0, Ju.jsxs)(Pu, {
          open: ju.open,
          onDismiss: Eu.dismiss,
          title: su(`${du}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, Ju.jsx)(FE, {
            loadout: ju.loadout
          }),
          statusRefused: null === Uu || void 0 === Uu ? void 0 : Uu.loadoutNoticeRefused,
          status: (0, Ju.jsxs)(Ju.Fragment, {
            children: [(0, Ju.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: su(`${du}:loadoutRadioBadge`)
            }), null !== Uu && su(`${du}:${Uu.loadoutNoticeKey}`, {
              name: Uu.loadoutNoticeName,
              tier: (0, Ru.N)(Uu.loadoutNoticeTier),
              max: String(ju.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, Ju.jsx)(iE, {
            view: ju,
            controller: Eu
          }), (0, Ju.jsx)(IE, {
            view: ju,
            controller: Eu
          }), (0, Ju.jsx)(rE, {
            view: ju,
            controller: Eu
          })]
        })
      })
    }

    function LE(uu, Eu, ju) {
      const su = uu.locatorEntries.find((uu => uu.locatorEntryId === ju));
      if (!su) return null;
      const Uu = su.locatorEntryName;
      if ("locatorDisarm" === Eu) return su.locatorEntryArmed ? {
        board: tE(uu, null),
        notice: xE("locatorNoticeDisarmed", Uu)
      } : null;
      if ("locatorArm" === Eu) return su.locatorEntryOwned && !su.locatorEntryArmed ? {
        board: tE(uu, ju),
        notice: xE("locatorNoticeArmed", Uu)
      } : null;
      if (su.locatorEntryOwned || uu.locatorCoins < su.locatorEntryPrice) return null;
      const Zu = tE({
        ...uu,
        locatorCoins: uu.locatorCoins - su.locatorEntryPrice
      }, ju);
      return {
        board: {
          ...Zu,
          locatorEntries: Zu.locatorEntries.map((uu => uu.locatorEntryId === ju ? {
            ...uu,
            locatorEntryOwned: !0
          } : uu))
        },
        notice: xE("locatorNoticeBought", Uu)
      }
    }

    function tE(uu, Eu) {
      return {
        ...uu,
        locatorEntries: uu.locatorEntries.map((uu => {
          const ju = uu.locatorEntryId === Eu;
          return uu.locatorEntryArmed === ju ? uu : {
            ...uu,
            locatorEntryArmed: ju
          }
        }))
      }
    }

    function xE(uu, Eu) {
      return {
        locatorNoticeKey: uu,
        locatorNoticeRefused: !1,
        locatorNoticeName: Eu
      }
    }
    const TE = "containmentLocatorView";
    class HE extends uE {
      constructor(uu, Eu, ju, su) {
        super(uu, Eu, ju, su, "locator", LE), this.snapshot = this.buildSnapshot()
      }
      messageOpens(uu) {
        return uu.locatorMessageOpens
      }
      messageNotice(uu) {
        return uu.locatorNotice
      }
      openingSelection(uu) {
        var Eu;
        const ju = uu.locatorEntries;
        return (null !== (Eu = ju.find((uu => uu.locatorEntryArmed))) && void 0 !== Eu ? Eu : ju[0]).locatorEntryId
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
    const AE = {
        locatorContained: `${du}:locatorFlavourContained`,
        locatorEncountered: `${du}:locatorFlavourEncountered`,
        locatorUnseen: `${du}:locatorFlavourUnseen`
      },
      nE = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${du}:locatorAttunedNormal`,
        codexHardOnly: `${du}:locatorAttunedHard`
      };

    function yE() {
      return (0, Ju.jsx)(Ju.Fragment, {
        children: Array.from({
          length: 5
        }, ((uu, Eu) => (0, Ju.jsx)("span", {
          className: "LocatorFly",
          children: (0, Ju.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, Eu)))
      })
    }

    function zE(uu) {
      let {
        entry: Eu
      } = uu;
      const {
        t: ju
      } = (0, bu.A)();
      return Eu.locatorEntryArmed ? (0, Ju.jsx)("span", {
        className: "BoardBadge Armed",
        children: ju(`${du}:locatorArmedBadge`)
      }) : Eu.locatorEntryOwned ? (0, Ju.jsx)("span", {
        className: "BoardBadge",
        children: ju(`${du}:locatorOwnedBadge`)
      }) : null
    }

    function RE(uu) {
      let {
        entry: Eu,
        coins: ju,
        inTile: su = !1
      } = uu;
      return (0, Ju.jsx)(mu, {
        itemName: au,
        amount: Eu.locatorEntryPrice,
        dl: ju,
        inTile: su
      })
    }

    function uj(uu) {
      let {
        view: Eu,
        controller: ju,
        entry: su
      } = uu;
      const {
        t: Uu
      } = (0, bu.A)(), Zu = su.locatorEntryId, Xu = Eu.locators.locatorEntries.find((uu => uu.locatorEntryArmed && uu !== su));
      return (0, Ju.jsxs)("div", {
        className: "BoardActions",
        children: [su.locatorEntryArmed && (0, Ju.jsx)(Ou.$, {
          disabled: Eu.pending,
          onClick: () => {
            ju.act("locatorDisarm", Zu)
          },
          children: Uu(`${du}:locatorDisarm`)
        }), su.locatorEntryOwned && !su.locatorEntryArmed && (0, Ju.jsx)(Ou.f, {
          disabled: Eu.pending,
          onClick: () => {
            ju.act("locatorArm", Zu)
          },
          children: Uu(`${du}:locatorArm`)
        }), !su.locatorEntryOwned && (0, Ju.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, Ju.jsx)(RE, {
            entry: su,
            coins: Eu.locators.locatorCoins
          }), (0, Ju.jsx)(Ou.p, {
            disabled: Eu.locators.locatorCoins < su.locatorEntryPrice || Eu.pending,
            onClick: () => {
              ju.act("locatorBuy", Zu)
            },
            children: Uu(`${du}:locatorBuy`)
          })]
        }), Xu && !su.locatorEntryArmed && (0, Ju.jsx)("span", {
          className: "BoardHint",
          children: Uu(`${du}:locatorReplacesHint`, {
            name: Xu.locatorEntryName
          })
        })]
      })
    }

    function Ej(uu) {
      let {
        entry: Eu
      } = uu;
      return "locatorUnseen" === Eu.locatorEntryStanding ? (0, Ju.jsx)(ou, {
        itemName: "Compass"
      }) : (0, Ju.jsx)(ku, {
        anomalyId: Eu.locatorEntryId,
        caught: "locatorContained" === Eu.locatorEntryStanding
      })
    }

    function jj(uu) {
      let {
        view: Eu,
        controller: ju,
        entry: su
      } = uu;
      const {
        t: Uu
      } = (0, bu.A)(), Zu = nE[su.locatorEntryDifficulty];
      return (0, Ju.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, Ju.jsxs)("div", {
          className: fu()("LocatorLabel", {
            Armed: su.locatorEntryArmed
          }),
          children: [(0, Ju.jsx)(ru, {
            icon: (0, Ju.jsx)(Ej, {
              entry: su
            }),
            name: Uu(`${du}:locatorName`, {
              name: su.locatorEntryName
            }),
            children: (0, Ju.jsx)(zE, {
              entry: su
            })
          }), (0, Ju.jsx)("p", {
            className: "BoardDescription",
            children: Uu(su.locatorEntryArmed ? `${du}:locatorFlavourArmed` : AE[su.locatorEntryStanding])
          }), null !== Zu && (0, Ju.jsx)("p", {
            className: "LocatorAttuned",
            children: Uu(Zu)
          }), (0, Ju.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Uu(`${du}:locatorUsage`)
          })]
        }), (0, Ju.jsx)(uj, {
          view: Eu,
          controller: ju,
          entry: su
        })]
      })
    }

    function sj(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, Cu.g)(TE, Eu.getSnapshot()),
        {
          t: su
        } = (0, bu.A)(),
        Uu = ju.locators;
      if (null === Uu) return null;
      const Zu = Uu.locatorEntries.find((uu => uu.locatorEntryId === ju.selectedId)),
        Xu = ju.notice;
      return (0, Ju.jsxs)(Pu, {
        open: ju.open,
        onDismiss: Eu.dismiss,
        title: su(`${du}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, Ju.jsx)(yE, {}),
        headerExtra: (0, Ju.jsx)(Qu, {
          coins: Uu.locatorCoins
        }),
        statusRefused: null === Xu || void 0 === Xu ? void 0 : Xu.locatorNoticeRefused,
        status: (0, Ju.jsxs)(Ju.Fragment, {
          children: [(0, Ju.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: su(`${du}:locatorKeeperName`)
          }), null !== Xu && su(`${du}:${Xu.locatorNoticeKey}`, {
            name: Xu.locatorNoticeName
          })]
        }),
        children: [(0, Ju.jsx)("div", {
          className: "BoardTiles",
          children: Uu.locatorEntries.map((uu => (0, Ju.jsxs)(Vu, {
            icon: (0, Ju.jsx)(Ej, {
              entry: uu
            }),
            name: uu.locatorEntryName,
            selected: uu === Zu,
            locked: !1,
            className: fu()("LocatorTag", {
              Armed: uu.locatorEntryArmed
            }),
            onSelect: () => {
              Eu.select(uu.locatorEntryId)
            },
            children: [(0, Ju.jsx)(zE, {
              entry: uu
            }), !uu.locatorEntryOwned && (0, Ju.jsx)(RE, {
              entry: uu,
              coins: Uu.locatorCoins,
              inTile: !0
            })]
          }, uu.locatorEntryId)))
        }), (0, Ju.jsx)(jj, {
          view: ju,
          controller: Eu,
          entry: Zu
        })]
      })
    }

    function Uj(uu) {
      let {
        loadout: Eu,
        codex: ju,
        locator: su
      } = uu;
      return (0, Ju.jsxs)(Ju.Fragment, {
        children: [(0, Ju.jsx)(BE, {
          controller: Eu
        }), (0, Ju.jsx)(zu, {
          controller: ju
        }), (0, Ju.jsx)(sj, {
          controller: su
        })]
      })
    }
    var Zj = ju(38882);
    class Xj {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = uu, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Zj.b({
          spacingMs: 0,
          now: Eu
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(uu, Eu) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, Eu(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(uu), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
    }
    var lj = ju(38873);
    const qj = new Map([
      ["npc_general", YE],
      ["npc_tentacle_guy", lj]
    ]);

    function fj(uu) {
      const Eu = qj.get(uu);
      if (void 0 === Eu) return null;
      const ju = document.createElement("img");
      return ju.src = Eu, ju.alt = "", ju.draggable = !1, ju.style.imageRendering = "pixelated", ju
    }
    const Cj = function() {
      let uu, Eu = !1,
        ju = null,
        qu = null;
      const fu = [],
        Cu = uu => {
          for (const Eu of fu) Eu !== uu && Eu.close();
          (0, lu.m)()
        },
        bu = uu => {
          uu && (0, lu.g)()
        },
        cu = new Xj((Eu => {
          uu.sendCommand(Eu)
        })),
        Nu = new NE((uu => {
          Xu.h.TY(cE, uu, !0)
        }), Cu, bu, cu),
        Ou = new Su((uu => {
          Xu.h.TY(Wu, uu, !0)
        }), Cu, bu),
        Yu = new HE((uu => {
          Xu.h.TY(TE, uu, !0)
        }), Cu, bu, cu);
      fu.push(Nu, Ou, Yu);
      return {
        onCreate: Eu => {
          uu = Eu, ju = (0, lu.o)(null, {
            content: (0, su.createElement)(Uj, {
              loadout: Nu,
              codex: Ou,
              locator: Yu
            }),
            onClose: () => {
              for (const uu of fu) uu.close()
            }
          }), qu = (0, Zu.e)(fj)
        },
        onReceivedMessageFromServer: (uu, Eu) => {
          "containmentLoadout" === uu ? Nu.NO(Eu) : "containmentLoadoutClose" === uu ? Nu.isOpen() && (Nu.close(), (0, lu.e)()) : "containmentCodex" === uu ? Ou.NO(Eu) : "containmentLocator" === uu && Yu.NO(Eu)
        },
        Tb: () => {
          Eu || Uu.d.get("loadingOverlayVisible") || (Eu = !0, uu.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var uu, Eu;
          null === (uu = ju) || void 0 === uu || uu(), ju = null, null === (Eu = qu) || void 0 === Eu || Eu(), qu = null;
          for (const ju of fu) ju.dispose();
          cu.dispose()
        }
      }
    }
  },
  39600: (uu, Eu, ju) => {
    var su = {
      "./breach-zero-uncaught.webp": 39605,
      "./breach-zero.webp": 39613,
      "./brood-father-uncaught.webp": 39618,
      "./brood-father.webp": 39621,
      "./carousel-uncaught.webp": 39623,
      "./carousel.webp": 39631,
      "./deadlock-uncaught.webp": 39638,
      "./deadlock.webp": 39643,
      "./frost-revenant-uncaught.webp": 39650,
      "./frost-revenant.webp": 39654,
      "./hollow-choir-uncaught.webp": 39658,
      "./hollow-choir.webp": 39667,
      "./magma-warden-uncaught.webp": 39672,
      "./magma-warden.webp": 39678,
      "./patient-zero-uncaught.webp": 39685,
      "./patient-zero.webp": 39688,
      "./siege-engine-uncaught.webp": 39697,
      "./siege-engine.webp": 39703,
      "./warp-stalker-uncaught.webp": 39710,
      "./warp-stalker.webp": 39714
    };

    function Uu(uu) {
      var Eu = Zu(uu);
      return ju(Eu)
    }

    function Zu(uu) {
      if (!ju.o(su, uu)) {
        var Eu = new Error("Cannot find module '" + uu + "'");
        throw Eu.code = "MODULE_NOT_FOUND", Eu
      }
      return su[uu]
    }
    Uu.keys = function() {
      return Object.keys(su)
    }, Uu.resolve = Zu, uu.exports = Uu, Uu.id = 39600
  },
  39605: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39613: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39618: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39621: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39623: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39631: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39638: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39643: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39650: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39654: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39658: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39667: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39672: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39678: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39685: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39688: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39697: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39703: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39710: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39714: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38873: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);