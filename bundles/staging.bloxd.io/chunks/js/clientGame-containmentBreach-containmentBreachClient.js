export const id = 14;
export const ids = [14];
export const modules = {
  36297: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Jz,
      e: () => xz,
      g: () => mz,
      j: () => wz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(65),
      Oz = sz(78),
      oz = sz(1336),
      vz = sz(1419),
      Uz = sz(1333),
      Kz = sz(1264),
      uz = sz(1173),
      Nz = sz(36303),
      bz = sz(1087);

    function wz(zz) {
      const [tz, sz] = (0, Xz.useState)((() => (0, Nz.o)(zz)));
      return (0, Xz.useEffect)((() => (sz((0, Nz.o)(zz)), (0, Nz.J)((() => {
        sz((0, Nz.o)(zz))
      })))), [zz]), tz
    }

    function Dz(zz, tz) {
      "function" === typeof zz ? zz(tz) : zz && (zz.current = tz)
    }

    function gz(zz) {
      let {
        tutorial: tz,
        step: sz,
        enabled: Fz = !0
      } = zz;
      const Wz = wz(tz);
      return Fz && Wz === sz
    }

    function Hz(zz, tz) {
      const sz = (0, Nz.s)(zz),
        Fz = sz.indexOf(tz);
      return !sz.slice(Fz + 1).some((tz => (0, Nz.B)(zz, tz)))
    }

    function Bz(zz, tz, sz, Fz) {
      let {
        tutorial: Wz,
        step: Xz,
        waitForClick: Oz = !1,
        onPrevious: oz
      } = zz;
      const vz = tz && (0, Nz.y)(Wz, Xz),
        Uz = tz && !Hz(Wz, Xz),
        uz = Oz ? Fz : sz;
      let bz = null;
      vz ? bz = () => {
        null === oz || void 0 === oz || oz(), (0, Nz.w)(Wz, Xz)
      } : Uz && (bz = () => {
        (0, Nz.l)(Wz)
      }), (0, Kz.s)("popup", null !== uz && void 0 !== uz ? uz : sz, bz, tz && null !== uz, null, vz ? void 0 : "controller:menusSkipTutorial")
    }

    function Pz(zz) {
      let {
        tutorial: tz,
        step: sz,
        text: Fz,
        waitForClick: Wz = !1,
        onPrevious: Xz
      } = zz;
      const {
        t: Oz
      } = (0, uz.B)(), oz = Hz(tz, sz);
      return (0, bz.jsxs)(bz.Fragment, {
        children: [(0, bz.jsx)("div", {
          className: "TutorialStepText",
          children: Fz
        }), (0, bz.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Nz.y)(tz, sz) && (0, bz.jsx)(vz.l, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Xz || void 0 === Xz || Xz(), (0, Nz.w)(tz, sz)
            },
            children: Oz("tutorial:back")
          }), !Wz && (0, bz.jsx)(vz.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Nz.d)(sz)
            },
            padDefaultFocus: !0,
            children: Oz(oz ? "tutorial:done" : "tutorial:next")
          }), !oz && (0, bz.jsx)(vz.l, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Nz.l)(tz)
            },
            children: Oz("tutorial:skip")
          })]
        })]
      })
    }
    const rz = 6;

    function Yz(zz) {
      let {
        rect: tz,
        margin: sz
      } = zz;
      const Fz = Math.max(0, tz.top - sz),
        Wz = tz.bottom + sz,
        Xz = Math.max(0, tz.left - sz),
        Oz = tz.right + sz;
      return (0, bz.jsxs)(bz.Fragment, {
        children: [(0, bz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Fz
          }
        }), (0, bz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wz,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, bz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Fz,
            left: 0,
            width: Xz,
            height: Wz - Fz
          }
        }), (0, bz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Fz,
            left: Oz,
            right: 0,
            height: Wz - Fz
          }
        })]
      })
    }

    function xz(zz) {
      let {
        target: tz,
        placement: sz,
        boxRef: Fz,
        className: vz,
        spotlightMargin: Kz = rz,
        children: uz
      } = zz;
      const {
        getArrowProps: Nz,
        getTooltipProps: wz,
        setTooltipRef: Dz,
        setTriggerRef: gz
      } = (0, oz.e)({
        placement: sz,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Kz]
      });
      (0, Xz.useLayoutEffect)((() => {
        gz(tz)
      }), [tz, gz]);
      const Hz = function(zz, tz) {
        const [sz, Fz] = (0, Xz.useState)(null);
        return (0, Xz.useEffect)((() => {
          if (!tz || !zz) return void Fz(null);
          let sz = 0,
            Wz = null;
          const Xz = () => {
            const tz = zz.getBoundingClientRect();
            Wz && tz.left === Wz.left && tz.top === Wz.top && tz.width === Wz.width && tz.height === Wz.height || (Wz = tz, Fz(tz)), sz = requestAnimationFrame(Xz)
          };
          return Xz(), () => {
            cancelAnimationFrame(sz)
          }
        }), [zz, tz]), sz
      }(tz, !0);
      (0, Xz.useEffect)((() => {
        null === tz || void 0 === tz || tz.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [tz]);
      const Bz = (0, Xz.useCallback)((zz => {
        Dz(zz), Fz && (Fz.current = zz)
      }), [Dz, Fz]);
      return (0, Oz.createPortal)((0, bz.jsxs)(bz.Fragment, {
        children: [Hz && (0, bz.jsx)(Yz, {
          rect: Hz,
          margin: Kz
        }), (0, bz.jsxs)("div", {
          ref: Bz,
          ...wz({
            className: Wz()("tooltip-container SmallTextLight TutorialStep", vz)
          }),
          children: [uz, (0, bz.jsx)("div", {
            ...Nz({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Uz.k)())
    }
    const mz = (0, Xz.forwardRef)((function(zz, tz) {
      let {
        placement: sz = "right",
        children: Fz,
        ...Wz
      } = zz;
      const Oz = gz(Wz),
        oz = (0, Xz.useRef)(null),
        vz = (0, Xz.useRef)(null);
      Bz(Wz, Oz, oz, vz);
      const [Uz, Kz] = (0, Xz.useState)(null), uz = Fz.ref, Nz = (0, Xz.useCallback)((zz => {
        vz.current = zz, Kz(zz), Dz(tz, zz), Dz(uz, zz)
      }), [tz, uz]);
      return (0, bz.jsxs)(bz.Fragment, {
        children: [(0, Xz.cloneElement)(Fz, {
          ref: Nz
        }), Oz && (0, bz.jsx)(xz, {
          target: Uz,
          placement: sz,
          boxRef: oz,
          children: (0, bz.jsx)(Pz, {
            ...Wz
          })
        })]
      })
    }));

    function Jz(zz) {
      const tz = gz(zz),
        sz = (0, Xz.useRef)(null);
      return Bz(zz, tz, sz, null), tz ? (0, Oz.createPortal)((0, bz.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, bz.jsx)("div", {
          ref: sz,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, bz.jsx)(Pz, {
            ...zz
          })
        })
      }), (0, Uz.k)()) : null
    }
  },
  37967: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    const Fz = 4,
      Wz = 12e3,
      Xz = 1e3;
    class Oz {
      constructor() {
        let {
          limit: zz = Fz,
          windowMs: tz = Wz,
          spacingMs: sz = Xz,
          now: Oz = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = zz, this.windowMs = tz, this.spacingMs = sz, this.now = Oz
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const zz of this.priority) zz.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const zz = this.now();
        this.sent.push(zz), this.lastSentAt = zz, this.schedule(), this.notify()
      }
      addPriority(zz) {
        return this.priority.add(zz), () => {
          this.priority.delete(zz)
        }
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const zz of this.priority)
          if (zz.waiting()) return !0;
        return !1
      }
      prune() {
        const zz = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= zz;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const zz = this.now(),
          tz = this.lastSentAt + this.spacingMs,
          sz = Math.min(tz > zz ? tz : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        sz !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, sz - zz)))
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36090: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Dz,
      i: () => gz,
      k: () => oz,
      m: () => Nz,
      p: () => Hz,
      r: () => uz,
      t: () => Pz,
      w: () => wz,
      z: () => Bz
    });
    var Fz = sz(30),
      Wz = sz(34);
    const Xz = "clientGameInventoryButtonsChanged",
      Oz = new Map;

    function oz() {
      return [...Oz.values()].sort(((zz, tz) => {
        var sz, Fz;
        return (null !== (sz = zz.order) && void 0 !== sz ? sz : 0) - (null !== (Fz = tz.order) && void 0 !== Fz ? Fz : 0)
      }))
    }
    let vz = null;

    function Uz(zz) {
      vz = zz
    }
    let Kz = !1;

    function uz(zz) {
      Kz = !0;
      try {
        zz.onClick()
      } finally {
        Kz = !1
      }
      zz.panel && "clientGame" === Fz.b.get("openInGameMenuName") && Uz(zz.id)
    }

    function Nz() {
      return Kz
    }

    function bz() {
      return oz().filter((zz => zz.panel && !zz.disabled))
    }

    function wz(zz) {
      const tz = bz(),
        sz = tz.findIndex((zz => zz.id === vz));
      return !(sz < 0 || tz.length < 2) && (uz(tz[(sz + zz + tz.length) % tz.length]), !0)
    }

    function Dz() {
      return null !== vz && bz().length > 1
    }

    function gz() {
      Uz(null)
    }

    function Hz() {
      "inventory" !== Fz.b.get("openInGameMenuName") && Uz(null)
    }

    function Bz() {
      const zz = vz;
      return Uz(null), zz
    }

    function Pz(zz) {
      return Oz.set(zz.id, zz), Wz.o.Yg(Xz, oz(), !0), () => {
        Oz.get(zz.id) === zz && (Oz.delete(zz.id), Wz.o.Yg(Xz, oz()))
      }
    }
  },
  37953: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    class Fz {
      constructor(zz, tz, sz) {
        this.Yg = zz, this.beforeOpen = tz, this.afterClose = sz, this.open = !1, this.lw = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.lw && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(zz) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(zz)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.lw = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.lw || (this.snapshot = this.buildSnapshot(), this.Yg(this.snapshot))
      }
    }
  },
  36086: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      h: () => gz,
      j: () => Hz,
      l: () => Nz,
      o: () => Uz,
      s: () => Dz,
      w: () => bz,
      x: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(36090);
    const oz = "clientGameUiChanged";
    let vz = null;

    function Uz() {
      return vz
    }

    function Kz(zz, tz) {
      const sz = {
        content: zz,
        menu: tz
      };
      return vz = sz, Wz.o.Yg(oz, vz, !0), () => {
        vz === sz && (vz = null, wz = !1, gz(), Wz.o.Yg(oz, null))
      }
    }
    let uz = null;

    function Nz() {
      return uz
    }

    function bz(zz) {
      return uz = zz, () => {
        uz === zz && (uz = null)
      }
    }
    let wz = !1;

    function Dz() {
      const zz = Fz.b.get("openInGameMenuName");
      "clientGame" !== zz && (wz = "inventory" === zz), (0, Oz.m)() || (0, Oz.i)(), (0, Xz.n)(Xz.c), Fz.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gz() {
      Bz(!1)
    }

    function Hz() {
      Bz(wz)
    }

    function Bz(zz) {
      "clientGame" === Fz.b.get("openInGameMenuName") && Fz.b.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, Oz.i)(), wz = !1
    }
  },
  38669: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => us
    });
    var Fz = sz(65);
    var Wz = sz(30),
      Xz = sz(1842),
      Oz = sz(34),
      oz = sz(36086),
      vz = sz(1020),
      Uz = sz.n(vz),
      Kz = sz(1416),
      uz = sz(1173),
      Nz = sz(4175),
      bz = sz(1314),
      wz = sz(1419),
      Dz = sz(1845),
      gz = sz(1333),
      Hz = sz(1831),
      Bz = sz(1901),
      Pz = sz(214);
    const rz = sz(38672),
      Yz = Object.fromEntries(rz.keys().map((zz => [zz.replace(/^\.\/(.*)\.webp$/, "$1"), rz(zz)]))),
      xz = new Set;

    function mz(zz, tz) {
      const sz = tz ? zz : `${zz}-uncaught`,
        Fz = (0, Pz.e)(Yz, sz);
      return void 0 !== Fz || xz.has(sz) || (xz.add(sz), console.warn(`Containment Breach has no mugshot ${sz}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Fz
    }
    var Jz = sz(1087);
    const Iz = "containmentBreach",
      Cz = "Gold Coin";

    function ez(zz) {
      let {
        open: tz,
        onDismiss: sz,
        title: Fz,
        className: Wz,
        decor: Xz,
        headerExtra: Oz,
        status: oz,
        statusRefused: vz = !1,
        children: Kz
      } = zz;
      const uz = `${Wz}Title`;
      return (0, Jz.jsx)(Nz.b, {
        show: tz,
        close: sz,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, Jz.jsxs)("section", {
          className: Uz()("ContainmentBoardPanel", Wz),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": uz,
          children: [Xz && (0, Jz.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Xz
          }), (0, Jz.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, Jz.jsx)("h2", {
              id: uz,
              className: "VisuallyHidden",
              children: Fz
            }), Oz, (0, Jz.jsx)(wz.n, {
              onClick: sz
            })]
          }), (0, Jz.jsx)("div", {
            className: "BoardBody",
            children: Kz
          }), void 0 !== oz && (0, Jz.jsx)("footer", {
            className: Uz()("BoardStatus", {
              Refused: vz
            }),
            children: oz
          })]
        })
      })
    }

    function Zz(zz) {
      let {
        itemName: tz
      } = zz;
      return (0, Jz.jsx)(Dz.c, {
        itemName: tz,
        amount: 0
      })
    }

    function Gz(zz) {
      let {
        anomalyId: tz,
        caught: sz
      } = zz;
      const Wz = (0, Fz.useRef)(null);
      return (0, bz.b)(Wz, !sz), (0, Jz.jsx)("span", {
        ref: Wz,
        className: Uz()("BoardMugshot", {
          Uncaught: !sz
        }),
        children: (0, Jz.jsx)("img", {
          src: mz(tz, sz),
          alt: "",
          draggable: !1
        })
      })
    }

    function Tz(zz) {
      let {
        itemName: tz,
        amount: sz,
        po: Fz,
        inTile: Wz = !1
      } = zz;
      return (0, Jz.jsx)(gz.h, {
        delayShow: 200,
        hoverOnly: Wz,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, Jz.jsx)(jz, {
          itemName: tz,
          amount: sz,
          po: Fz
        }),
        children: (0, Jz.jsxs)("span", {
          className: Uz()("BoardChip", {
            Short: void 0 !== Fz && Fz < sz
          }),
          children: [(0, Jz.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, Jz.jsx)(Zz, {
              itemName: tz
            })
          }), sz.toLocaleString()]
        })
      })
    }
    const cz = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function jz(zz) {
      var tz;
      let {
        itemName: sz,
        amount: Fz,
        po: Wz
      } = zz;
      const {
        t: Xz
      } = (0, uz.B)(), Oz = (0, Bz.h)("itemInfo", (zz => zz[sz])), {
        lore: oz,
        droppedBy: vz
      } = function(zz) {
        if ("string" !== typeof zz) return {
          lore: zz,
          droppedBy: null
        };
        const tz = cz.exec(zz);
        return null === tz ? {
          lore: zz,
          droppedBy: null
        } : {
          lore: "" === tz[1] ? void 0 : tz[1],
          droppedBy: tz[2]
        }
      }(null === Oz || void 0 === Oz ? void 0 : Oz.description);
      return (0, Jz.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, Jz.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, Jz.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, Jz.jsx)(Zz, {
              itemName: sz
            })
          }), (0, Jz.jsx)(Hz.c, {
            text: null !== (tz = null === Oz || void 0 === Oz ? void 0 : Oz.displayName) && void 0 !== tz ? tz : sz,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== oz || null !== vz) && (0, Jz.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== oz && (0, Jz.jsx)(Hz.c, {
            text: oz,
            className: "BoardChipTooltipDescription"
          }), null !== vz && (0, Jz.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, Jz.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Xz(`${Iz}:chipDroppedBy`)
            }), vz]
          })]
        }), void 0 !== Wz && (0, Jz.jsxs)("div", {
          className: Uz()("BoardChipTooltipHeld", {
            Short: Wz < Fz
          }),
          children: [(0, Jz.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Xz(`${Iz}:chipYouHave`)
          }), (0, Jz.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, Jz.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Wz.toLocaleString()
            }), ` / ${Fz.toLocaleString()}`]
          }), (0, Jz.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, Jz.jsx)("span", {
              style: {
                width: (Fz > 0 ? 100 * Math.min(1, Wz / Fz) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Az(zz) {
      let {
        icon: tz,
        name: sz,
        selected: Fz,
        locked: Wz,
        className: Xz,
        buttonRef: Oz,
        onSelect: oz,
        children: vz
      } = zz;
      return (0, Jz.jsxs)("button", {
        ref: Oz,
        type: "button",
        className: Uz()("BoardTile", Xz, {
          Selected: Fz,
          Locked: Wz
        }),
        onClick: oz,
        children: [(0, Jz.jsx)("span", {
          className: "BoardTileIcon",
          children: tz
        }), (0, Jz.jsx)("span", {
          className: "BoardTileName",
          children: sz
        }), vz]
      })
    }

    function yz(zz) {
      let {
        icon: tz,
        name: sz,
        children: Fz
      } = zz;
      return (0, Jz.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, Jz.jsx)("span", {
          className: "BoardDetailIcon",
          children: tz
        }), (0, Jz.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, Jz.jsx)("h3", {
            children: sz
          }), (0, Jz.jsx)("span", {
            className: "BoardDetailStatus",
            children: Fz
          })]
        })]
      })
    }

    function Mz(zz) {
      let {
        coins: tz,
        children: sz
      } = zz;
      return (0, Jz.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, Jz.jsx)(Tz, {
          itemName: Cz,
          amount: tz
        }), sz]
      })
    }
    var dz = sz(37953);
    const hz = "containmentCodexView";
    class Qz extends dz.d {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = zz => {
          this.selectedId = zz, this.emit()
        }
      }
      Sw(zz) {
        this.entries = zz.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const kz = {
        codexAnyDifficulty: `${Iz}:codexNeedsAny`,
        codexNormalOnly: `${Iz}:codexNeedsNormal`,
        codexHardOnly: `${Iz}:codexNeedsHard`
      },
      iz = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Lz = {
        codexContained: `${Iz}:codexContainedBadge`,
        codexEncountered: `${Iz}:codexEncounteredBadge`,
        codexUnidentified: `${Iz}:codexUnidentifiedBadge`
      },
      lz = ["94%", "81%", "88%", "46%", "72%"];

    function nz(zz) {
      let {
        entry: tz
      } = zz;
      const {
        t: sz
      } = (0, uz.B)();
      return (0, Jz.jsx)("span", {
        className: Uz()("BoardBadge", iz[tz.codexEntryState]),
        children: sz(Lz[tz.codexEntryState])
      })
    }

    function az(zz) {
      const {
        t: tz
      } = (0, uz.B)();
      return "codexUnidentified" === zz.codexEntryState ? tz(`${Iz}:codexUnidentifiedName`) : zz.codexEntryName
    }

    function qz(zz) {
      let {
        entry: tz
      } = zz;
      return "codexUnidentified" === tz.codexEntryState ? (0, Jz.jsx)(Zz, {
        itemName: "Book"
      }) : (0, Jz.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, Jz.jsx)(Gz, {
          anomalyId: tz.codexEntryId,
          caught: "codexContained" === tz.codexEntryState
        }), (0, Jz.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Sz(zz) {
      let {
        entry: tz,
        selected: sz,
        onSelect: Fz
      } = zz;
      const Wz = "codexUnidentified" === tz.codexEntryState;
      return (0, Jz.jsxs)(Az, {
        icon: (0, Jz.jsx)(qz, {
          entry: tz
        }),
        name: az(tz),
        selected: sz,
        locked: Wz,
        className: Uz()("CodexFolder", iz[tz.codexEntryState]),
        onSelect: () => {
          Fz(tz.codexEntryId)
        },
        children: [!Wz && (0, Jz.jsx)(nz, {
          entry: tz
        }), Wz && (0, Jz.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Vz(zz) {
      let {
        count: tz
      } = zz;
      const sz = [];
      for (let Fz = Math.min(tz, 25); Fz > 0; Fz -= 5) sz.push(Math.min(Fz, 5));
      return (0, Jz.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: sz.map(((zz, tz) => (0, Jz.jsx)("span", {
          className: Uz()("CodexTallyGroup", {
            Gate: 5 === zz
          }),
          children: Array.from({
            length: Math.min(zz, 4)
          }, ((zz, tz) => (0, Jz.jsx)("span", {
            className: "CodexTallyMark"
          }, tz)))
        }, tz)))
      })
    }

    function Rz(zz) {
      let {
        contained: tz,
        total: sz
      } = zz;
      const {
        t: Fz
      } = (0, uz.B)();
      return (0, Jz.jsxs)("div", {
        className: "CodexProgress",
        children: [Fz(`${Iz}:codexProgress`, {
          contained: String(tz),
          total: String(sz)
        }), (0, Jz.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, Jz.jsx)("span", {
            style: {
              width: tz / sz * 100 + "%"
            }
          })
        })]
      })
    }

    function pz(zz) {
      let {
        entry: tz,
        fileNumber: sz
      } = zz;
      const {
        t: Fz
      } = (0, uz.B)(), Wz = "codexContained" === tz.codexEntryState;
      return (0, Jz.jsx)("section", {
        className: "BoardDetail",
        children: (0, Jz.jsxs)("article", {
          className: Uz()("CodexDossier", iz[tz.codexEntryState]),
          children: [(0, Jz.jsx)("span", {
            className: "CodexFileNumber",
            children: Fz(`${Iz}:codexFileNumber`, {
              number: String(sz).padStart(3, "0")
            })
          }), (0, Jz.jsx)(yz, {
            icon: (0, Jz.jsx)(qz, {
              entry: tz
            }),
            name: az(tz),
            children: (0, Jz.jsx)(nz, {
              entry: tz
            })
          }), Wz && (0, Jz.jsxs)(Jz.Fragment, {
            children: [(0, Jz.jsx)("p", {
              className: "BoardDescription",
              children: tz.codexEntryLore
            }), (0, Jz.jsxs)("p", {
              className: "CodexTally",
              children: [Fz(`${Iz}:codexContainments`, {
                count: String(tz.codexEntryContainedCount)
              }), (0, Jz.jsx)(Vz, {
                count: tz.codexEntryContainedCount
              })]
            }), (0, Jz.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Fz(`${Iz}:codexContainedBadge`)
            })]
          }), !Wz && (0, Jz.jsxs)(Jz.Fragment, {
            children: [(0, Jz.jsxs)("div", {
              className: "CodexRedaction",
              children: [lz.map((zz => (0, Jz.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: zz
                }
              }, zz))), (0, Jz.jsx)("p", {
                className: "CodexRedacted",
                children: Fz(`${Iz}:codexRedacted`)
              })]
            }), "" !== tz.codexEntryHint && (0, Jz.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, Jz.jsx)("h4", {
                children: Fz(`${Iz}:codexHintLabel`)
              }), (0, Jz.jsx)("p", {
                children: tz.codexEntryHint
              })]
            }), (0, Jz.jsx)("p", {
              className: "CodexClearance",
              children: Fz(kz[tz.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function fz(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, Kz.h)(hz, tz.getSnapshot()),
        {
          t: Fz
        } = (0, uz.B)();
      if (0 === sz.entries.length) return null;
      const Wz = sz.entries.find((zz => zz.codexEntryId === sz.selectedId)),
        Xz = sz.entries.filter((zz => "codexContained" === zz.codexEntryState)).length,
        Oz = sz.entries.map((zz => zz.codexEntryId)).sort().indexOf(Wz.codexEntryId) + 1;
      return (0, Jz.jsxs)(ez, {
        open: sz.open,
        onDismiss: tz.dismiss,
        title: Fz(`${Iz}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, Jz.jsx)(Rz, {
          contained: Xz,
          total: sz.entries.length
        }),
        children: [(0, Jz.jsx)("div", {
          className: "BoardTiles",
          children: sz.entries.map((zz => (0, Jz.jsx)(Sz, {
            entry: zz,
            selected: zz === Wz,
            onSelect: tz.select
          }, zz.codexEntryId)))
        }), (0, Jz.jsx)(pz, {
          entry: Wz,
          fileNumber: Oz
        })]
      })
    }
    var Ez = sz(321);
    class zt extends dz.d {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        super(zz, tz, sz), this.pacer = Fz, this.command = Wz, this.predict = Xz, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = zz => {
          this.selectedId = zz, this.emit()
        }, this.act = (zz, tz) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${zz} ${tz}`, this.rollBack)) return;
          const sz = this.predict(this.board, zz, tz);
          null !== sz && (this.board = sz.board, this.notice = sz.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Fz.subscribe((() => {
          this.emit()
        }))
      }
      Sw(zz) {
        const tz = this.messageOpens(zz);
        if (tz && this.open) return this.board === this.confirmed && (this.board = zz), this.confirmed = zz, void this.emit();
        if (this.board = zz, this.confirmed = zz, this.pacer.onReply(), tz) return this.notice = null, this.selectedId = this.openingSelection(zz), void this.show();
        const sz = this.messageNotice(zz);
        null !== sz && (this.notice = sz), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function tt(zz, tz) {
      return zz.loadoutCoins >= tz.loadoutCostCoins && tz.loadoutCostParts.every((tz => function(zz, tz) {
        return st(zz, tz).loadoutHeldPartAmount
      }(zz, tz.loadoutPartCurrency) >= tz.loadoutPartAmount))
    }

    function st(zz, tz) {
      return zz.loadoutHeldParts.find((zz => zz.loadoutHeldPartCurrency === tz))
    }

    function Ft(zz, tz) {
      return zz.loadoutSlots.find((zz => zz.loadoutSlotKind === tz))
    }

    function Wt(zz) {
      return zz.loadoutPerks.filter((zz => zz.loadoutPerkEquipped)).length >= zz.loadoutMaxPerks
    }

    function Xt(zz, tz, sz) {
      for (const Wz of zz.loadoutSlots) {
        const Fz = Wz.loadoutSlotOptions.find((zz => zz.loadoutOptionId === sz));
        if (Fz) return "loadoutArmour" === Wz.loadoutSlotKind ? ot(zz, Wz, Fz, tz) : Ot(zz, Wz, Fz, tz)
      }
      const Fz = zz.loadoutPerks.find((zz => zz.loadoutPerkId === sz));
      return Fz ? function(zz, tz, sz) {
        const Fz = tz.loadoutPerkOwned,
          Wz = tz.loadoutPerkEquipped,
          Xz = tz.loadoutPerkName,
          Oz = Wt(zz);
        if ("loadoutUnlock" === sz) {
          if (Fz || !tt(zz, tz.loadoutPerkCost)) return null;
          const sz = {
            ...tz,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Oz
          };
          return {
            board: Ut(Kt(zz, tz.loadoutPerkCost), sz),
            notice: ut(Oz ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Xz)
          }
        }
        if ("loadoutUpgrade" === sz || !Fz || "loadoutEquip" === sz === Wz || !Wz && Oz) return null;
        return {
          board: Ut(zz, {
            ...tz,
            loadoutPerkEquipped: !Wz
          }),
          notice: ut(Wz ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Xz)
        }
      }(zz, Fz, tz) : null
    }

    function Ot(zz, tz, sz, Fz) {
      const Wz = sz.loadoutOptionOwnedTier,
        Xz = sz.loadoutOptionName;
      if ("loadoutEquip" === Fz) return 0 === Wz ? null : {
        board: vt(zz, tz, sz.loadoutOptionId, null),
        notice: ut("loadoutNoticeEquipped", Xz)
      };
      const Oz = "loadoutUnlock" === Fz;
      if (Oz && 0 !== Wz || "loadoutUpgrade" === Fz && (0 === Wz || Wz >= sz.loadoutOptionTiers.length) || "loadoutUnequip" === Fz) return null;
      const oz = sz.loadoutOptionTiers[Wz].loadoutTierCost;
      if (!tt(zz, oz)) return null;
      const vz = {
          ...sz,
          loadoutOptionOwnedTier: Wz + 1
        },
        Uz = Oz ? sz.loadoutOptionId : tz.loadoutSlotEquippedId;
      return {
        board: vt(Kt(zz, oz), tz, Uz, vz),
        notice: Oz ? ut("loadoutNoticeUnlocked", Xz) : ut("loadoutNoticeUpgraded", Xz, Wz + 1)
      }
    }

    function ot(zz, tz, sz, Fz) {
      const Wz = sz.loadoutOptionOwnedTier > 0,
        Xz = sz.loadoutOptionName;
      if ("loadoutEquip" === Fz && Wz) return {
        board: vt(zz, tz, sz.loadoutOptionId, null),
        notice: ut("loadoutNoticeEquipped", Xz)
      };
      const Oz = sz.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Fz || Wz || !tt(zz, Oz) ? null : {
        board: vt(Kt(zz, Oz), tz, sz.loadoutOptionId, {
          ...sz,
          loadoutOptionOwnedTier: 1
        }),
        notice: ut("loadoutNoticeUnlocked", Xz)
      }
    }

    function vt(zz, tz, sz, Fz) {
      const Wz = {
        ...tz,
        loadoutSlotEquippedId: sz,
        loadoutSlotOptions: tz.loadoutSlotOptions.map((zz => null !== Fz && zz.loadoutOptionId === Fz.loadoutOptionId ? Fz : zz))
      };
      return {
        ...zz,
        loadoutSlots: zz.loadoutSlots.map((zz => zz === tz ? Wz : zz))
      }
    }

    function Ut(zz, tz) {
      return {
        ...zz,
        loadoutPerks: zz.loadoutPerks.map((zz => zz.loadoutPerkId === tz.loadoutPerkId ? tz : zz))
      }
    }

    function Kt(zz, tz) {
      return {
        ...zz,
        loadoutCoins: zz.loadoutCoins - tz.loadoutCostCoins,
        loadoutHeldParts: zz.loadoutHeldParts.map((zz => {
          const sz = tz.loadoutCostParts.find((tz => tz.loadoutPartCurrency === zz.loadoutHeldPartCurrency));
          return sz ? {
            ...zz,
            loadoutHeldPartAmount: zz.loadoutHeldPartAmount - sz.loadoutPartAmount
          } : zz
        }))
      }
    }

    function ut(zz, tz) {
      return {
        loadoutNoticeKey: zz,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: tz,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Nt = "containmentLoadoutView";
    class bt extends zt {
      constructor(zz, tz, sz, Fz) {
        super(zz, tz, sz, Fz, "loadout", Xt), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = zz => {
          this.slot = zz, this.selectedId = wt(this.board, zz), this.emit()
        }
      }
      messageOpens(zz) {
        return zz.loadoutMessageOpens
      }
      messageNotice(zz) {
        return zz.loadoutNotice
      }
      openingSelection(zz) {
        return wt(zz, this.slot)
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

    function wt(zz, tz) {
      if ("loadoutPerks" === tz) {
        var sz;
        const tz = zz.loadoutPerks;
        return (null !== (sz = tz.find((zz => zz.loadoutPerkEquipped))) && void 0 !== sz ? sz : tz[0]).loadoutPerkId
      }
      return Ft(zz, tz).loadoutSlotEquippedId
    }
    const Dt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var gt = sz(36297),
      Ht = sz(1264);
    const Bt = {
        loadoutPrimary: `${Iz}:loadoutSlotPrimary`,
        loadoutSecondary: `${Iz}:loadoutSlotSecondary`,
        loadoutOffensive: `${Iz}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${Iz}:loadoutSlotSelfHelp`,
        loadoutArmour: `${Iz}:loadoutSlotArmour`,
        loadoutPerks: `${Iz}:loadoutSlotPerks`
      },
      Pt = {
        section: "right",
        gb: "bottom",
        act: "top"
      },
      rt = (0, Fz.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Yt() {
      const {
        step: zz,
        targetRef: tz
      } = (0, Fz.useContext)(rt);
      return (sz, Fz) => (null === zz || void 0 === zz ? void 0 : zz.kind) === sz && zz.id === Fz ? tz : void 0
    }

    function xt(zz, tz) {
      const sz = tz.loadoutTargetId;
      if ("loadoutPerks" === tz.loadoutTargetSection) {
        const tz = zz.loadoutPerks.find((zz => zz.loadoutPerkId === sz));
        return {
          name: tz.loadoutPerkName,
          owned: tz.loadoutPerkOwned,
          equipped: tz.loadoutPerkEquipped
        }
      }
      const Fz = Ft(zz, tz.loadoutTargetSection),
        Wz = Fz.loadoutSlotOptions.find((zz => zz.loadoutOptionId === sz));
      return {
        name: Wz.loadoutOptionName,
        owned: Wz.loadoutOptionOwnedTier > 0,
        equipped: Fz.loadoutSlotEquippedId === sz
      }
    }

    function mt(zz, tz, sz, Fz) {
      const [Wz, Xz] = zz(`${Iz}:${tz}`, {
        [sz]: "\x01"
      }).split("\x01");
      return (0, Jz.jsxs)(Jz.Fragment, {
        children: [Wz, (0, Jz.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Fz
        }), Xz]
      })
    }

    function Jt(zz) {
      let {
        view: tz,
        onDismiss: sz,
        children: Wz
      } = zz;
      const {
        t: Xz
      } = (0, uz.B)(), Oz = tz.loadout, oz = tz.open ? Oz.loadoutWalkthrough.map((zz => ({
        target: zz,
        info: xt(Oz, zz)
      }))).find((zz => {
        let {
          info: tz
        } = zz;
        return !tz.equipped
      })) : void 0;
      let vz = null,
        Uz = null;
      if (void 0 !== oz) {
        const {
          target: zz,
          info: sz
        } = oz;
        tz.slot !== zz.loadoutTargetSection ? (vz = {
          kind: "section",
          id: zz.loadoutTargetSection
        }, Uz = mt(Xz, "loadoutWalkthroughSection", "section", Xz(Bt[zz.loadoutTargetSection]))) : tz.selectedId !== zz.loadoutTargetId ? (vz = {
          kind: "gb",
          id: zz.loadoutTargetId
        }, Uz = mt(Xz, "loadoutWalkthroughPick", "name", sz.name)) : (vz = {
          kind: "act",
          id: zz.loadoutTargetId
        }, Uz = mt(Xz, sz.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", sz.name))
      }
      const Kz = null === vz ? null : function(zz) {
          return `${zz.kind}:${zz.id}`
        }(vz),
        [Nz, bz] = (0, Fz.useState)(null),
        wz = (0, Fz.useCallback)((zz => {
          bz((tz => null !== zz ? {
            key: Kz,
            node: zz
          } : (null === tz || void 0 === tz ? void 0 : tz.key) === Kz ? null : tz))
        }), [Kz]),
        Dz = null !== Kz && (null === Nz || void 0 === Nz ? void 0 : Nz.key) === Kz ? Nz.node : null;
      return (0, Jz.jsxs)(rt.Provider, {
        value: {
          step: vz,
          targetRef: wz
        },
        children: [Wz, null !== vz && null !== Dz && (0, Jz.jsx)(It, {
          target: Dz,
          placement: Pt[vz.kind],
          onDismiss: sz,
          children: Uz
        }, Kz)]
      })
    }

    function It(zz) {
      let {
        target: tz,
        placement: sz,
        onDismiss: Wz,
        children: Xz
      } = zz;
      const {
        t: Oz
      } = (0, uz.B)(), oz = (0, Fz.useRef)(tz);
      return oz.current = tz, (0, Ht.s)("popup", oz, Wz), (0, Jz.jsxs)(gt.e, {
        target: tz,
        placement: sz,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, Jz.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, Jz.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Dt,
            alt: "",
            draggable: !1
          }), (0, Jz.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Oz(`${Iz}:operatorName`)
          }), (0, Jz.jsx)(wz.n, {
            onClick: Wz,
            ariaLabel: Oz(`${Iz}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, Jz.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Xz
        })]
      })
    }
    const Ct = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function et(zz) {
      let {
        cost: tz,
        loadout: sz
      } = zz;
      const {
        t: Fz
      } = (0, uz.B)();
      return tz.loadoutCostCoins <= 0 && 0 === tz.loadoutCostParts.length ? (0, Jz.jsx)("span", {
        className: "LoadoutCost",
        children: Fz(`${Iz}:loadoutFree`)
      }) : (0, Jz.jsxs)("span", {
        className: "LoadoutCost",
        children: [tz.loadoutCostCoins > 0 && (0, Jz.jsx)(Tz, {
          itemName: Cz,
          amount: tz.loadoutCostCoins,
          po: sz.loadoutCoins
        }), tz.loadoutCostParts.map((zz => {
          const tz = st(sz, zz.loadoutPartCurrency);
          return (0, Jz.jsx)(Tz, {
            itemName: tz.loadoutHeldPartItem,
            amount: zz.loadoutPartAmount,
            po: tz.loadoutHeldPartAmount
          }, zz.loadoutPartCurrency)
        }))]
      })
    }
    const Zt = {
      loadoutStatFireRate: `${Iz}:loadoutUnitPerMinute`,
      loadoutStatReload: `${Iz}:loadoutUnitSeconds`,
      loadoutStatResupply: `${Iz}:loadoutUnitSeconds`
    };

    function Gt(zz) {
      return "loadoutStatPotency" === zz.loadoutStatKind ? (0, Ez.S)(zz.loadoutStatValue) : String(zz.loadoutStatValue)
    }

    function Tt(zz) {
      var tz;
      let {
        option: sz
      } = zz;
      const {
        t: Fz
      } = (0, uz.B)(), Wz = sz.loadoutOptionTiers, Xz = null === (tz = Wz[0]) || void 0 === tz ? void 0 : tz.loadoutTierStats.map((zz => zz.loadoutStatKind));
      if (!Xz || 0 === Xz.length) return null;
      const Oz = sz.loadoutOptionOwnedTier,
        oz = (zz, tz) => {
          var sz;
          return null === (sz = Wz[zz]) || void 0 === sz ? void 0 : sz.loadoutTierStats.find((zz => zz.loadoutStatKind === tz))
        };
      return (0, Jz.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, Jz.jsx)("thead", {
          children: (0, Jz.jsxs)("tr", {
            children: [(0, Jz.jsx)("th", {}), Wz.map(((zz, tz) => (0, Jz.jsx)("th", {
              className: Uz()({
                Current: tz + 1 === Oz,
                Next: tz === Oz
              }),
              children: Fz(`${Iz}:loadoutTier`, {
                tier: (0, Ez.S)(tz + 1)
              })
            }, tz)))]
          })
        }), (0, Jz.jsx)("tbody", {
          children: Xz.map((zz => {
            const tz = Zt[zz];
            return (0, Jz.jsxs)("tr", {
              children: [(0, Jz.jsxs)("th", {
                scope: "row",
                children: [Fz(`${Iz}:${zz}`), tz && (0, Jz.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Fz(tz)
                })]
              }), Wz.map(((tz, sz) => {
                const Fz = oz(sz, zz),
                  Wz = sz > 0 ? oz(sz - 1, zz) : void 0,
                  Xz = Fz && Wz ? Fz.loadoutStatValue - Wz.loadoutStatValue : 0,
                  vz = Ct.has(zz) ? Xz < 0 : Xz > 0,
                  Kz = sz === Oz;
                return (0, Jz.jsxs)("td", {
                  className: Uz()({
                    Current: sz + 1 === Oz,
                    Next: Kz,
                    Gain: vz,
                    Owned: sz < Oz
                  }),
                  children: [Kz && vz && (0, Jz.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Xz < 0 ? "\u25bc" : "\u25b2"
                  }), Fz ? Gt(Fz) : "-"]
                }, sz)
              }))]
            }, zz)
          }))
        })]
      })
    }

    function ct(zz) {
      let {
        view: tz,
        controller: sz,
        slot: Fz,
        option: Wz
      } = zz;
      const {
        t: Xz
      } = (0, uz.B)(), Oz = tz.loadout, oz = Wz.loadoutOptionOwnedTier, vz = Wz.loadoutOptionTiers.length, Uz = Fz.loadoutSlotEquippedId === Wz.loadoutOptionId, Kz = oz < vz ? Wz.loadoutOptionTiers[oz].loadoutTierCost : null, Nz = null !== Kz && tt(Oz, Kz), bz = Wz.loadoutOptionId, Dz = Yt();
      return (0, Jz.jsxs)(Jz.Fragment, {
        children: [(0, Jz.jsx)(At, {
          icon: Wz.loadoutOptionIcon,
          name: Wz.loadoutOptionName,
          status: 0 === oz ? Xz(`${Iz}:loadoutLocked`) : vz > 1 ? Xz(`${Iz}:loadoutTier`, {
            tier: (0, Ez.S)(oz)
          }) : null,
          locked: 0 === oz,
          equipped: Uz
        }), (0, Jz.jsx)("p", {
          className: "BoardDescription",
          children: Wz.loadoutOptionDescription
        }), (0, Jz.jsx)(Tt, {
          option: Wz
        }), (0, Jz.jsxs)("div", {
          ref: Dz("act", bz),
          className: "BoardActions",
          children: [null !== Kz && (0, Jz.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Jz.jsx)(et, {
              cost: Kz,
              loadout: Oz
            }), (0, Jz.jsx)(wz.p, {
              disabled: !Nz || tz.pending,
              onClick: () => {
                sz.act(0 === oz ? "loadoutUnlock" : "loadoutUpgrade", bz)
              },
              children: 0 === oz ? Xz(`${Iz}:loadoutUnlock`) : Xz(`${Iz}:loadoutUpgrade`, {
                tier: (0, Ez.S)(oz + 1)
              })
            })]
          }), null === Kz && vz > 1 && (0, Jz.jsx)("span", {
            className: "BoardHint",
            children: Xz(`${Iz}:loadoutMaxed`)
          }), oz > 0 && !Uz && (0, Jz.jsx)(wz.h, {
            disabled: tz.pending,
            onClick: () => {
              sz.act("loadoutEquip", bz)
            },
            children: Xz(`${Iz}:loadoutEquip`)
          })]
        })]
      })
    }

    function jt(zz) {
      let {
        view: tz,
        controller: sz,
        perk: Fz
      } = zz;
      const {
        t: Wz
      } = (0, uz.B)(), Xz = tz.loadout, Oz = Wt(Xz), oz = Fz.loadoutPerkId, vz = Yt();
      return (0, Jz.jsxs)(Jz.Fragment, {
        children: [(0, Jz.jsx)(At, {
          icon: Fz.loadoutPerkIcon,
          name: Fz.loadoutPerkName,
          status: Fz.loadoutPerkOwned ? null : Wz(`${Iz}:loadoutLocked`),
          locked: !Fz.loadoutPerkOwned,
          equipped: Fz.loadoutPerkEquipped
        }), (0, Jz.jsx)("p", {
          className: "BoardDescription",
          children: Fz.loadoutPerkDescription
        }), (0, Jz.jsxs)("div", {
          ref: vz("act", oz),
          className: "BoardActions",
          children: [!Fz.loadoutPerkOwned && (0, Jz.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Jz.jsx)(et, {
              cost: Fz.loadoutPerkCost,
              loadout: Xz
            }), (0, Jz.jsx)(wz.p, {
              disabled: !tt(Xz, Fz.loadoutPerkCost) || tz.pending,
              onClick: () => {
                sz.act("loadoutUnlock", oz)
              },
              children: Wz(`${Iz}:loadoutUnlock`)
            })]
          }), Fz.loadoutPerkOwned && !Fz.loadoutPerkEquipped && (0, Jz.jsx)(wz.h, {
            disabled: Oz || tz.pending,
            onClick: () => {
              sz.act("loadoutEquip", oz)
            },
            children: Wz(`${Iz}:loadoutEquip`)
          }), Fz.loadoutPerkOwned && !Fz.loadoutPerkEquipped && Oz && (0, Jz.jsx)("span", {
            className: "BoardHint",
            children: Wz(`${Iz}:loadoutSocketsFullHint`)
          }), Fz.loadoutPerkEquipped && (0, Jz.jsx)(wz.Q, {
            disabled: tz.pending,
            onClick: () => {
              sz.act("loadoutUnequip", oz)
            },
            children: Wz(`${Iz}:loadoutUnequip`)
          })]
        })]
      })
    }

    function At(zz) {
      let {
        icon: tz,
        name: sz,
        status: Fz,
        locked: Wz,
        equipped: Xz
      } = zz;
      const {
        t: Oz
      } = (0, uz.B)();
      return (0, Jz.jsxs)(yz, {
        icon: (0, Jz.jsx)(Zz, {
          itemName: tz
        }),
        name: sz,
        children: [null !== Fz && (0, Jz.jsx)("span", {
          className: Uz()("LoadoutStatusText", {
            Locked: Wz
          }),
          children: Fz
        }), Xz && (0, Jz.jsx)("span", {
          className: "BoardBadge",
          children: Oz(`${Iz}:loadoutEquippedBadge`)
        })]
      })
    }

    function yt(zz) {
      let {
        view: tz,
        controller: sz
      } = zz;
      const Fz = tz.loadout;
      if ("loadoutPerks" === tz.slot) {
        const zz = Fz.loadoutPerks.find((zz => zz.loadoutPerkId === tz.selectedId));
        return (0, Jz.jsx)("section", {
          className: "BoardDetail",
          children: zz && (0, Jz.jsx)(jt, {
            view: tz,
            controller: sz,
            perk: zz
          })
        })
      }
      const Wz = Ft(Fz, tz.slot),
        Xz = Wz.loadoutSlotOptions.find((zz => zz.loadoutOptionId === tz.selectedId));
      return (0, Jz.jsx)("section", {
        className: "BoardDetail",
        children: Xz && (0, Jz.jsx)(ct, {
          view: tz,
          controller: sz,
          slot: Wz,
          option: Xz
        })
      })
    }

    function Mt(zz) {
      let {
        owned: tz,
        total: sz
      } = zz;
      return sz <= 1 ? null : (0, Jz.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: sz
        }, ((zz, sz) => (0, Jz.jsx)("span", {
          className: Uz()("LoadoutPip", {
            Filled: sz < tz
          })
        }, sz)))
      })
    }

    function dt(zz) {
      let {
        view: tz,
        controller: sz
      } = zz;
      const {
        t: Fz
      } = (0, uz.B)(), Wz = tz.loadout, Xz = Yt();
      return (0, Jz.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Fz(`${Iz}:loadoutKit`),
        children: [Wz.loadoutSlots.map((zz => {
          const Wz = zz.loadoutSlotOptions.find((tz => tz.loadoutOptionId === zz.loadoutSlotEquippedId));
          return (0, Jz.jsxs)("button", {
            ref: Xz("section", zz.loadoutSlotKind),
            type: "button",
            className: Uz()("LoadoutKitSlot", {
              Selected: tz.slot === zz.loadoutSlotKind
            }),
            onClick: () => {
              sz.selectSlot(zz.loadoutSlotKind)
            },
            children: [(0, Jz.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Wz && (0, Jz.jsx)(Zz, {
                itemName: Wz.loadoutOptionIcon
              })
            }), (0, Jz.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, Jz.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, Jz.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Fz(Bt[zz.loadoutSlotKind])
                }), Wz && (0, Jz.jsx)(Mt, {
                  owned: Wz.loadoutOptionOwnedTier,
                  total: Wz.loadoutOptionTiers.length
                })]
              }), (0, Jz.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Wz || void 0 === Wz ? void 0 : Wz.loadoutOptionName
              })]
            })]
          }, zz.loadoutSlotKind)
        })), (0, Jz.jsx)(ht, {
          view: tz,
          controller: sz
        })]
      })
    }

    function ht(zz) {
      let {
        view: tz,
        controller: sz
      } = zz;
      const {
        t: Fz
      } = (0, uz.B)(), Wz = tz.loadout, Xz = Wz.loadoutPerks.filter((zz => zz.loadoutPerkEquipped)), Oz = Yt();
      return (0, Jz.jsxs)("button", {
        ref: Oz("section", "loadoutPerks"),
        type: "button",
        className: Uz()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === tz.slot
        }),
        onClick: () => {
          sz.selectSlot("loadoutPerks")
        },
        children: [(0, Jz.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, Jz.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Fz(Bt.loadoutPerks)
          }), (0, Jz.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Fz(`${Iz}:loadoutPerkCount`, {
              equipped: String(Xz.length),
              max: String(Wz.loadoutMaxPerks)
            })
          })]
        }), (0, Jz.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Wz.loadoutMaxPerks
          }, ((zz, tz) => {
            const sz = Xz[tz];
            return (0, Jz.jsxs)("span", {
              className: Uz()("LoadoutSocket", {
                Filled: sz,
                Empty: !sz
              }),
              children: [(0, Jz.jsx)("span", {
                className: "LoadoutSocketWell",
                children: sz && (0, Jz.jsx)(Zz, {
                  itemName: sz.loadoutPerkIcon
                })
              }), (0, Jz.jsx)("span", {
                className: "LoadoutSocketName",
                children: sz ? sz.loadoutPerkName : Fz(`${Iz}:loadoutPerkSocketEmpty`)
              })]
            }, tz)
          }))
        })]
      })
    }

    function Qt(zz) {
      let {
        icon: tz,
        name: sz,
        selected: Fz,
        equipped: Wz,
        locked: Xz,
        ownedTier: Oz,
        tiers: oz,
        buttonRef: vz,
        onSelect: Uz
      } = zz;
      const {
        t: Kz
      } = (0, uz.B)();
      return (0, Jz.jsxs)(Az, {
        icon: (0, Jz.jsx)(Zz, {
          itemName: tz
        }),
        name: sz,
        selected: Fz,
        locked: Xz,
        buttonRef: vz,
        onSelect: Uz,
        children: [Wz && (0, Jz.jsx)("span", {
          className: "BoardBadge",
          children: Kz(`${Iz}:loadoutEquippedBadge`)
        }), Xz && (0, Jz.jsx)("span", {
          className: "BoardBadge Muted",
          children: Kz(`${Iz}:loadoutLocked`)
        }), !Xz && (0, Jz.jsx)(Mt, {
          owned: Oz,
          total: oz
        })]
      })
    }

    function kt(zz) {
      let {
        view: tz,
        controller: sz
      } = zz;
      const Fz = tz.loadout,
        Wz = Yt();
      if ("loadoutPerks" === tz.slot) return (0, Jz.jsx)("div", {
        className: "BoardTiles",
        children: Fz.loadoutPerks.map((zz => (0, Jz.jsx)(Qt, {
          icon: zz.loadoutPerkIcon,
          name: zz.loadoutPerkName,
          selected: tz.selectedId === zz.loadoutPerkId,
          equipped: zz.loadoutPerkEquipped,
          locked: !zz.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Wz("gb", zz.loadoutPerkId),
          onSelect: () => {
            sz.select(zz.loadoutPerkId)
          }
        }, zz.loadoutPerkId)))
      });
      const Xz = Ft(Fz, tz.slot);
      return (0, Jz.jsx)("div", {
        className: "BoardTiles",
        children: Xz.loadoutSlotOptions.map((zz => (0, Jz.jsx)(Qt, {
          icon: zz.loadoutOptionIcon,
          name: zz.loadoutOptionName,
          selected: tz.selectedId === zz.loadoutOptionId,
          equipped: Xz.loadoutSlotEquippedId === zz.loadoutOptionId,
          locked: 0 === zz.loadoutOptionOwnedTier,
          ownedTier: zz.loadoutOptionOwnedTier,
          tiers: zz.loadoutOptionTiers.length,
          buttonRef: Wz("gb", zz.loadoutOptionId),
          onSelect: () => {
            sz.select(zz.loadoutOptionId)
          }
        }, zz.loadoutOptionId)))
      })
    }

    function it(zz) {
      let {
        loadout: tz
      } = zz;
      return (0, Jz.jsx)(Mz, {
        coins: tz.loadoutCoins,
        children: tz.loadoutHeldParts.filter((zz => zz.loadoutHeldPartAmount > 0)).map((zz => (0, Jz.jsx)(Tz, {
          itemName: zz.loadoutHeldPartItem,
          amount: zz.loadoutHeldPartAmount
        }, zz.loadoutHeldPartCurrency)))
      })
    }

    function Lt(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, Kz.h)(Nt, tz.getSnapshot()),
        {
          t: Fz
        } = (0, uz.B)();
      if (null === sz.loadout) return null;
      const Wz = sz.notice;
      return (0, Jz.jsx)(Jt, {
        view: sz,
        onDismiss: tz.dismiss,
        children: (0, Jz.jsxs)(ez, {
          open: sz.open,
          onDismiss: tz.dismiss,
          title: Fz(`${Iz}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, Jz.jsx)(it, {
            loadout: sz.loadout
          }),
          statusRefused: null === Wz || void 0 === Wz ? void 0 : Wz.loadoutNoticeRefused,
          status: (0, Jz.jsxs)(Jz.Fragment, {
            children: [(0, Jz.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Fz(`${Iz}:loadoutRadioBadge`)
            }), null !== Wz && Fz(`${Iz}:${Wz.loadoutNoticeKey}`, {
              name: Wz.loadoutNoticeName,
              tier: (0, Ez.S)(Wz.loadoutNoticeTier),
              max: String(sz.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, Jz.jsx)(dt, {
            view: sz,
            controller: tz
          }), (0, Jz.jsx)(kt, {
            view: sz,
            controller: tz
          }), (0, Jz.jsx)(yt, {
            view: sz,
            controller: tz
          })]
        })
      })
    }

    function lt(zz, tz, sz) {
      const Fz = zz.locatorEntries.find((zz => zz.locatorEntryId === sz));
      if (!Fz) return null;
      const Wz = Fz.locatorEntryName;
      if ("locatorDisarm" === tz) return Fz.locatorEntryArmed ? {
        board: nt(zz, null),
        notice: qt("locatorNoticeDisarmed", Wz)
      } : null;
      if ("locatorArm" === tz) return Fz.locatorEntryOwned && !Fz.locatorEntryArmed ? {
        board: nt(zz, sz),
        notice: qt("locatorNoticeArmed", Wz)
      } : null;
      if (Fz.locatorEntryOwned || zz.locatorCoins < Fz.locatorEntryPrice) return null;
      const Xz = nt({
        ...zz,
        locatorCoins: zz.locatorCoins - Fz.locatorEntryPrice
      }, sz);
      return {
        board: {
          ...Xz,
          locatorEntries: Xz.locatorEntries.map((zz => zz.locatorEntryId === sz ? {
            ...zz,
            locatorEntryOwned: !0
          } : zz))
        },
        notice: qt("locatorNoticeBought", Wz)
      }
    }

    function nt(zz, tz) {
      return {
        ...zz,
        locatorEntries: zz.locatorEntries.map((zz => {
          const sz = zz.locatorEntryId === tz;
          return zz.locatorEntryArmed === sz ? zz : {
            ...zz,
            locatorEntryArmed: sz
          }
        }))
      }
    }

    function qt(zz, tz) {
      return {
        locatorNoticeKey: zz,
        locatorNoticeRefused: !1,
        locatorNoticeName: tz
      }
    }
    const St = "containmentLocatorView";
    class Vt extends zt {
      constructor(zz, tz, sz, Fz) {
        super(zz, tz, sz, Fz, "locator", lt), this.snapshot = this.buildSnapshot()
      }
      messageOpens(zz) {
        return zz.locatorMessageOpens
      }
      messageNotice(zz) {
        return zz.locatorNotice
      }
      openingSelection(zz) {
        var tz;
        const sz = zz.locatorEntries;
        return (null !== (tz = sz.find((zz => zz.locatorEntryArmed))) && void 0 !== tz ? tz : sz[0]).locatorEntryId
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
    const Rt = {
        locatorContained: `${Iz}:locatorFlavourContained`,
        locatorEncountered: `${Iz}:locatorFlavourEncountered`,
        locatorUnseen: `${Iz}:locatorFlavourUnseen`
      },
      pt = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${Iz}:locatorAttunedNormal`,
        codexHardOnly: `${Iz}:locatorAttunedHard`
      };

    function ft() {
      return (0, Jz.jsx)(Jz.Fragment, {
        children: Array.from({
          length: 5
        }, ((zz, tz) => (0, Jz.jsx)("span", {
          className: "LocatorFly",
          children: (0, Jz.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, tz)))
      })
    }

    function Et(zz) {
      let {
        entry: tz
      } = zz;
      const {
        t: sz
      } = (0, uz.B)();
      return tz.locatorEntryArmed ? (0, Jz.jsx)("span", {
        className: "BoardBadge Armed",
        children: sz(`${Iz}:locatorArmedBadge`)
      }) : tz.locatorEntryOwned ? (0, Jz.jsx)("span", {
        className: "BoardBadge",
        children: sz(`${Iz}:locatorOwnedBadge`)
      }) : null
    }

    function zs(zz) {
      let {
        entry: tz,
        coins: sz,
        inTile: Fz = !1
      } = zz;
      return (0, Jz.jsx)(Tz, {
        itemName: Cz,
        amount: tz.locatorEntryPrice,
        po: sz,
        inTile: Fz
      })
    }

    function ts(zz) {
      let {
        view: tz,
        controller: sz,
        entry: Fz
      } = zz;
      const {
        t: Wz
      } = (0, uz.B)(), Xz = Fz.locatorEntryId, Oz = tz.locators.locatorEntries.find((zz => zz.locatorEntryArmed && zz !== Fz));
      return (0, Jz.jsxs)("div", {
        className: "BoardActions",
        children: [Fz.locatorEntryArmed && (0, Jz.jsx)(wz.Q, {
          disabled: tz.pending,
          onClick: () => {
            sz.act("locatorDisarm", Xz)
          },
          children: Wz(`${Iz}:locatorDisarm`)
        }), Fz.locatorEntryOwned && !Fz.locatorEntryArmed && (0, Jz.jsx)(wz.h, {
          disabled: tz.pending,
          onClick: () => {
            sz.act("locatorArm", Xz)
          },
          children: Wz(`${Iz}:locatorArm`)
        }), !Fz.locatorEntryOwned && (0, Jz.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, Jz.jsx)(zs, {
            entry: Fz,
            coins: tz.locators.locatorCoins
          }), (0, Jz.jsx)(wz.p, {
            disabled: tz.locators.locatorCoins < Fz.locatorEntryPrice || tz.pending,
            onClick: () => {
              sz.act("locatorBuy", Xz)
            },
            children: Wz(`${Iz}:locatorBuy`)
          })]
        }), Oz && !Fz.locatorEntryArmed && (0, Jz.jsx)("span", {
          className: "BoardHint",
          children: Wz(`${Iz}:locatorReplacesHint`, {
            name: Oz.locatorEntryName
          })
        })]
      })
    }

    function ss(zz) {
      let {
        entry: tz
      } = zz;
      return "locatorUnseen" === tz.locatorEntryStanding ? (0, Jz.jsx)(Zz, {
        itemName: "Compass"
      }) : (0, Jz.jsx)(Gz, {
        anomalyId: tz.locatorEntryId,
        caught: "locatorContained" === tz.locatorEntryStanding
      })
    }

    function Fs(zz) {
      let {
        view: tz,
        controller: sz,
        entry: Fz
      } = zz;
      const {
        t: Wz
      } = (0, uz.B)(), Xz = pt[Fz.locatorEntryDifficulty];
      return (0, Jz.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, Jz.jsxs)("div", {
          className: Uz()("LocatorLabel", {
            Armed: Fz.locatorEntryArmed
          }),
          children: [(0, Jz.jsx)(yz, {
            icon: (0, Jz.jsx)(ss, {
              entry: Fz
            }),
            name: Wz(`${Iz}:locatorName`, {
              name: Fz.locatorEntryName
            }),
            children: (0, Jz.jsx)(Et, {
              entry: Fz
            })
          }), (0, Jz.jsx)("p", {
            className: "BoardDescription",
            children: Wz(Fz.locatorEntryArmed ? `${Iz}:locatorFlavourArmed` : Rt[Fz.locatorEntryStanding])
          }), null !== Xz && (0, Jz.jsx)("p", {
            className: "LocatorAttuned",
            children: Wz(Xz)
          }), (0, Jz.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Wz(`${Iz}:locatorUsage`)
          })]
        }), (0, Jz.jsx)(ts, {
          view: tz,
          controller: sz,
          entry: Fz
        })]
      })
    }

    function Ws(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, Kz.h)(St, tz.getSnapshot()),
        {
          t: Fz
        } = (0, uz.B)(),
        Wz = sz.locators;
      if (null === Wz) return null;
      const Xz = Wz.locatorEntries.find((zz => zz.locatorEntryId === sz.selectedId)),
        Oz = sz.notice;
      return (0, Jz.jsxs)(ez, {
        open: sz.open,
        onDismiss: tz.dismiss,
        title: Fz(`${Iz}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, Jz.jsx)(ft, {}),
        headerExtra: (0, Jz.jsx)(Mz, {
          coins: Wz.locatorCoins
        }),
        statusRefused: null === Oz || void 0 === Oz ? void 0 : Oz.locatorNoticeRefused,
        status: (0, Jz.jsxs)(Jz.Fragment, {
          children: [(0, Jz.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Fz(`${Iz}:locatorKeeperName`)
          }), null !== Oz && Fz(`${Iz}:${Oz.locatorNoticeKey}`, {
            name: Oz.locatorNoticeName
          })]
        }),
        children: [(0, Jz.jsx)("div", {
          className: "BoardTiles",
          children: Wz.locatorEntries.map((zz => (0, Jz.jsxs)(Az, {
            icon: (0, Jz.jsx)(ss, {
              entry: zz
            }),
            name: zz.locatorEntryName,
            selected: zz === Xz,
            locked: !1,
            className: Uz()("LocatorTag", {
              Armed: zz.locatorEntryArmed
            }),
            onSelect: () => {
              tz.select(zz.locatorEntryId)
            },
            children: [(0, Jz.jsx)(Et, {
              entry: zz
            }), !zz.locatorEntryOwned && (0, Jz.jsx)(zs, {
              entry: zz,
              coins: Wz.locatorCoins,
              inTile: !0
            })]
          }, zz.locatorEntryId)))
        }), (0, Jz.jsx)(Fs, {
          view: sz,
          controller: tz,
          entry: Xz
        })]
      })
    }

    function Xs(zz) {
      let {
        loadout: tz,
        codex: sz,
        locator: Fz
      } = zz;
      return (0, Jz.jsxs)(Jz.Fragment, {
        children: [(0, Jz.jsx)(Lt, {
          controller: tz
        }), (0, Jz.jsx)(fz, {
          controller: sz
        }), (0, Jz.jsx)(Ws, {
          controller: Fz
        })]
      })
    }
    var Os = sz(37967);
    class os {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = zz, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Os.c({
          spacingMs: 0,
          now: tz
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(zz, tz) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, tz(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(zz), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
    }
    var vs = sz(37964);
    const Us = new Map([
      ["npc_general", Dt],
      ["npc_tentacle_guy", vs]
    ]);

    function Ks(zz) {
      const tz = Us.get(zz);
      if (void 0 === tz) return null;
      const sz = document.createElement("img");
      return sz.src = tz, sz.alt = "", sz.draggable = !1, sz.style.imageRendering = "pixelated", sz
    }
    const us = function() {
      let zz, tz = !1,
        sz = null,
        vz = null;
      const Uz = [],
        Kz = zz => {
          for (const tz of Uz) tz !== zz && tz.close();
          (0, oz.s)()
        },
        uz = zz => {
          zz && (0, oz.j)()
        },
        Nz = new os((tz => {
          zz.sendCommand(tz)
        })),
        bz = new bt((zz => {
          Oz.o.Yg(Nt, zz, !0)
        }), Kz, uz, Nz),
        wz = new Qz((zz => {
          Oz.o.Yg(hz, zz, !0)
        }), Kz, uz),
        Dz = new Vt((zz => {
          Oz.o.Yg(St, zz, !0)
        }), Kz, uz, Nz);
      Uz.push(bz, wz, Dz);
      return {
        onCreate: tz => {
          zz = tz, sz = (0, oz.x)(null, {
            content: (0, Fz.createElement)(Xs, {
              loadout: bz,
              codex: wz,
              locator: Dz
            }),
            onClose: () => {
              for (const zz of Uz) zz.close()
            }
          }), vz = (0, Xz.f)(Ks)
        },
        onReceivedMessageFromServer: (zz, tz) => {
          "containmentLoadout" === zz ? bz.Sw(tz) : "containmentLoadoutClose" === zz ? bz.isOpen() && (bz.close(), (0, oz.h)()) : "containmentCodex" === zz ? wz.Sw(tz) : "containmentLocator" === zz && Dz.Sw(tz)
        },
        wN: () => {
          tz || Wz.b.get("loadingOverlayVisible") || (tz = !0, zz.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var zz, tz;
          null === (zz = sz) || void 0 === zz || zz(), sz = null, null === (tz = vz) || void 0 === tz || tz(), vz = null;
          for (const sz of Uz) sz.dispose();
          Nz.dispose()
        }
      }
    }
  },
  36303: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Iz,
      E: () => yz,
      G: () => Mz,
      H: () => dz,
      I: () => Az,
      J: () => hz,
      c: () => vz,
      d: () => Zz,
      h: () => oz,
      l: () => jz,
      o: () => Cz,
      s: () => xz,
      w: () => cz,
      y: () => Tz
    });
    var Fz = sz(44);
    const Wz = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Xz = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Oz = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      oz = Xz.filter((zz => "docsButton" !== zz)),
      vz = Oz.filter((zz => "aiHelperButton" !== zz)),
      Uz = "codeEditorTutorials",
      Kz = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      uz = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Nz = null,
      bz = null;
    const wz = new Set,
      Dz = new Set;
    let gz = null;
    const Hz = new Set,
      Bz = new Set;

    function Pz() {
      Bz.forEach((zz => {
        zz()
      }))
    }

    function rz() {
      if (!Nz) {
        const zz = Fz.f.getItem(Uz);
        Nz = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof zz && null !== zz ? zz : {}
        }
      }
      return Nz
    }

    function Yz(zz) {
      const tz = rz();
      tz[zz] || (Nz = {
        ...tz,
        [zz]: !0
      }, Fz.f.setItem(Uz, Nz))
    }

    function xz(zz) {
      return "docsOverview" === zz ? Xz : "aiHelperOverview" === zz ? Oz : bz ? Wz[bz] : []
    }

    function mz(zz) {
      return ("worldCodeButton" !== zz || !rz().worldCodeIntroShown) && !Hz.has(zz)
    }

    function Jz(zz) {
      var tz;
      return (null === (tz = gz) || void 0 === tz ? void 0 : tz.name) === zz ? gz.stepsDone : wz
    }

    function Iz(zz, tz) {
      if (! function(zz) {
          return gz ? gz.name === zz : "welcome" === zz
        }(zz) || !mz(tz) || Jz(zz).has(tz)) return !1;
      if (gz) return !0;
      const sz = Kz[tz];
      return sz ? !rz()[sz] || Dz.has(tz) : !rz()[uz[zz]]
    }

    function Cz(zz) {
      var tz;
      return null !== (tz = xz(zz).find((tz => Iz(zz, tz)))) && void 0 !== tz ? tz : null
    }

    function ez(zz) {
      var tz;
      Yz(uz[zz]), (null === (tz = gz) || void 0 === tz ? void 0 : tz.name) === zz && (gz = null)
    }

    function Zz(zz) {
      const tz = (gz ? [gz.name] : ["welcome", "docsOverview"]).find((tz => Cz(tz) === zz));
      if (!tz) return;
      Jz(tz).add(zz);
      const sz = Kz[zz];
      sz && (Yz(sz), gz || Dz.add(zz)), null === Cz(tz) && ez(tz), Pz()
    }

    function Gz(zz, tz) {
      const sz = xz(zz),
        Fz = Jz(zz);
      for (let Wz = sz.indexOf(tz) - 1; Wz >= 0; Wz--)
        if (Fz.has(sz[Wz]) && mz(sz[Wz])) return sz[Wz];
      return null
    }

    function Tz(zz, tz) {
      return null !== Gz(zz, tz)
    }

    function cz(zz, tz) {
      const sz = Gz(zz, tz);
      sz && (Jz(zz).delete(sz), Pz())
    }

    function jz(zz) {
      ez(zz), "welcome" === zz && xz("welcome").forEach((zz => {
        const tz = Kz[zz];
        tz && Yz(tz)
      })), Pz()
    }

    function Az(zz) {
      gz = {
        name: zz,
        stepsDone: new Set
      }, Pz()
    }

    function yz() {
      (gz || 0 !== wz.size || 0 !== Dz.size) && (gz = null, wz.clear(), Dz.clear(), Pz())
    }

    function Mz(zz, tz) {
      const sz = tz ? zz : bz === zz ? null : bz;
      sz !== bz && (bz = sz, Pz())
    }

    function dz(zz, tz) {
      Hz.has(zz) === tz && (tz ? Hz.delete(zz) : Hz.add(zz), Pz())
    }

    function hz(zz) {
      return Bz.add(zz), () => {
        Bz.delete(zz)
      }
    }
  },
  38672: (zz, tz, sz) => {
    var Fz = {
      "./breach-zero-uncaught.webp": 38676,
      "./breach-zero.webp": 38682,
      "./brood-father-uncaught.webp": 38684,
      "./brood-father.webp": 38686,
      "./carousel-uncaught.webp": 38692,
      "./carousel.webp": 38696,
      "./deadlock-uncaught.webp": 38699,
      "./deadlock.webp": 38706,
      "./frost-revenant-uncaught.webp": 38708,
      "./frost-revenant.webp": 38716,
      "./hollow-choir-uncaught.webp": 38718,
      "./hollow-choir.webp": 38725,
      "./magma-warden-uncaught.webp": 38734,
      "./magma-warden.webp": 38736,
      "./patient-zero-uncaught.webp": 38745,
      "./patient-zero.webp": 38747,
      "./siege-engine-uncaught.webp": 38756,
      "./siege-engine.webp": 38765,
      "./warp-stalker-uncaught.webp": 38771,
      "./warp-stalker.webp": 38775
    };

    function Wz(zz) {
      var tz = Xz(zz);
      return sz(tz)
    }

    function Xz(zz) {
      if (!sz.o(Fz, zz)) {
        var tz = new Error("Cannot find module '" + zz + "'");
        throw tz.code = "MODULE_NOT_FOUND", tz
      }
      return Fz[zz]
    }
    Wz.keys = function() {
      return Object.keys(Fz)
    }, Wz.resolve = Xz, zz.exports = Wz, Wz.id = 38672
  },
  38676: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38682: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38684: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38686: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38692: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38696: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38699: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38706: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38708: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38716: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38718: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38725: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38734: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38736: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38745: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38747: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38756: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38765: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38771: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38775: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  37964: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);