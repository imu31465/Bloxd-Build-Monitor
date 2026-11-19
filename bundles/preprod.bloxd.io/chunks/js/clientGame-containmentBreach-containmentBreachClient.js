export const id = 14;
export const ids = [14];
export const modules = {
  38643: (zz, uz, bz) => {
    var Ez = {
      "./breach-zero-uncaught.webp": 38648,
      "./breach-zero.webp": 38657,
      "./brood-father-uncaught.webp": 38661,
      "./brood-father.webp": 38666,
      "./carousel-uncaught.webp": 38672,
      "./carousel.webp": 38678,
      "./deadlock-uncaught.webp": 38682,
      "./deadlock.webp": 38687,
      "./frost-revenant-uncaught.webp": 38693,
      "./frost-revenant.webp": 38702,
      "./hollow-choir-uncaught.webp": 38709,
      "./hollow-choir.webp": 38717,
      "./magma-warden-uncaught.webp": 38721,
      "./magma-warden.webp": 38730,
      "./patient-zero-uncaught.webp": 38738,
      "./patient-zero.webp": 38747,
      "./siege-engine-uncaught.webp": 38752,
      "./siege-engine.webp": 38755,
      "./warp-stalker-uncaught.webp": 38762,
      "./warp-stalker.webp": 38771
    };

    function nz(zz) {
      var uz = iz(zz);
      return bz(uz)
    }

    function iz(zz) {
      if (!bz.o(Ez, zz)) {
        var uz = new Error("Cannot find module '" + zz + "'");
        throw uz.code = "MODULE_NOT_FOUND", uz
      }
      return Ez[zz]
    }
    nz.keys = function() {
      return Object.keys(Ez)
    }, nz.resolve = iz, zz.exports = nz, nz.id = 38643
  },
  36316: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => vz,
      g: () => oz,
      i: () => Nz,
      j: () => Zz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(56),
      lz = bz(79),
      Mz = bz(1341),
      tz = bz(1419),
      Hz = bz(1332),
      Oz = bz(1266),
      pz = bz(1181),
      dz = bz(36319),
      Fz = bz(1089);

    function Zz(zz) {
      const [uz, bz] = (0, iz.useState)((() => (0, dz.l)(zz)));
      return (0, iz.useEffect)((() => (bz((0, dz.l)(zz)), (0, dz.C)((() => {
        bz((0, dz.l)(zz))
      })))), [zz]), uz
    }

    function Rz(zz, uz) {
      "function" === typeof zz ? zz(uz) : zz && (zz.current = uz)
    }

    function Kz(zz) {
      let {
        tutorial: uz,
        step: bz,
        enabled: Ez = !0
      } = zz;
      const nz = Zz(uz);
      return Ez && nz === bz
    }

    function wz(zz, uz) {
      const bz = (0, dz.o)(zz),
        Ez = bz.indexOf(uz);
      return !bz.slice(Ez + 1).some((uz => (0, dz.t)(zz, uz)))
    }

    function Xz(zz, uz, bz, Ez) {
      let {
        tutorial: nz,
        step: iz,
        waitForClick: lz = !1,
        onPrevious: Mz
      } = zz;
      const tz = uz && (0, dz.s)(nz, iz),
        Hz = uz && !wz(nz, iz),
        pz = lz ? Ez : bz;
      let Fz = null;
      tz ? Fz = () => {
        null === Mz || void 0 === Mz || Mz(), (0, dz.r)(nz, iz)
      } : Hz && (Fz = () => {
        (0, dz.i)(nz)
      }), (0, Oz.u)("popup", null !== pz && void 0 !== pz ? pz : bz, Fz, uz && null !== pz, null, tz ? void 0 : "controller:menusSkipTutorial")
    }

    function fz(zz) {
      let {
        tutorial: uz,
        step: bz,
        text: Ez,
        waitForClick: nz = !1,
        onPrevious: iz
      } = zz;
      const {
        t: lz
      } = (0, pz.F)(), Mz = wz(uz, bz);
      return (0, Fz.jsxs)(Fz.Fragment, {
        children: [(0, Fz.jsx)("div", {
          className: "TutorialStepText",
          children: Ez
        }), (0, Fz.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, dz.s)(uz, bz) && (0, Fz.jsx)(tz.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === iz || void 0 === iz || iz(), (0, dz.r)(uz, bz)
            },
            children: lz("tutorial:back")
          }), !nz && (0, Fz.jsx)(tz.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, dz.e)(bz)
            },
            padDefaultFocus: !0,
            children: lz(Mz ? "tutorial:done" : "tutorial:next")
          }), !Mz && (0, Fz.jsx)(tz.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, dz.i)(uz)
            },
            children: lz("tutorial:skip")
          })]
        })]
      })
    }
    const sz = 6;

    function rz(zz) {
      let {
        rect: uz,
        margin: bz
      } = zz;
      const Ez = Math.max(0, uz.top - bz),
        nz = uz.bottom + bz,
        iz = Math.max(0, uz.left - bz),
        lz = uz.right + bz;
      return (0, Fz.jsxs)(Fz.Fragment, {
        children: [(0, Fz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Ez
          }
        }), (0, Fz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: nz,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Fz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ez,
            left: 0,
            width: iz,
            height: nz - Ez
          }
        }), (0, Fz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ez,
            left: lz,
            right: 0,
            height: nz - Ez
          }
        })]
      })
    }

    function oz(zz) {
      let {
        target: uz,
        placement: bz,
        boxRef: Ez,
        className: tz,
        spotlightMargin: Oz = sz,
        children: pz
      } = zz;
      const {
        getArrowProps: dz,
        getTooltipProps: Zz,
        setTooltipRef: Rz,
        setTriggerRef: Kz
      } = (0, Mz.d)({
        placement: bz,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Oz]
      });
      (0, iz.useLayoutEffect)((() => {
        Kz(uz)
      }), [uz, Kz]);
      const wz = function(zz, uz) {
        const [bz, Ez] = (0, iz.useState)(null);
        return (0, iz.useEffect)((() => {
          if (!uz || !zz) return void Ez(null);
          let bz = 0,
            nz = null;
          const iz = () => {
            const uz = zz.getBoundingClientRect();
            nz && uz.left === nz.left && uz.top === nz.top && uz.width === nz.width && uz.height === nz.height || (nz = uz, Ez(uz)), bz = requestAnimationFrame(iz)
          };
          return iz(), () => {
            cancelAnimationFrame(bz)
          }
        }), [zz, uz]), bz
      }(uz, !0);
      (0, iz.useEffect)((() => {
        null === uz || void 0 === uz || uz.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [uz]);
      const Xz = (0, iz.useCallback)((zz => {
        Rz(zz), Ez && (Ez.current = zz)
      }), [Rz, Ez]);
      return (0, lz.createPortal)((0, Fz.jsxs)(Fz.Fragment, {
        children: [wz && (0, Fz.jsx)(rz, {
          rect: wz,
          margin: Oz
        }), (0, Fz.jsxs)("div", {
          ref: Xz,
          ...Zz({
            className: nz()("tooltip-container SmallTextLight TutorialStep", tz)
          }),
          children: [pz, (0, Fz.jsx)("div", {
            ...dz({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Hz.i)())
    }
    const Nz = (0, iz.forwardRef)((function(zz, uz) {
      let {
        placement: bz = "right",
        children: Ez,
        ...nz
      } = zz;
      const lz = Kz(nz),
        Mz = (0, iz.useRef)(null),
        tz = (0, iz.useRef)(null);
      Xz(nz, lz, Mz, tz);
      const [Hz, Oz] = (0, iz.useState)(null), pz = Ez.ref, dz = (0, iz.useCallback)((zz => {
        tz.current = zz, Oz(zz), Rz(uz, zz), Rz(pz, zz)
      }), [uz, pz]);
      return (0, Fz.jsxs)(Fz.Fragment, {
        children: [(0, iz.cloneElement)(Ez, {
          ref: dz
        }), lz && (0, Fz.jsx)(oz, {
          target: Hz,
          placement: bz,
          boxRef: Mz,
          children: (0, Fz.jsx)(fz, {
            ...nz
          })
        })]
      })
    }));

    function vz(zz) {
      const uz = Kz(zz),
        bz = (0, iz.useRef)(null);
      return Xz(zz, uz, bz, null), uz ? (0, lz.createPortal)((0, Fz.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Fz.jsx)("div", {
          ref: bz,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Fz.jsx)(fz, {
            ...zz
          })
        })
      }), (0, Hz.i)()) : null
    }
  },
  37929: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    const Ez = 4,
      nz = 12e3,
      iz = 1e3;
    class lz {
      constructor() {
        let {
          limit: zz = Ez,
          windowMs: uz = nz,
          spacingMs: bz = iz,
          now: lz = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = zz, this.windowMs = uz, this.spacingMs = bz, this.now = lz
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
          uz = this.lastSentAt + this.spacingMs,
          bz = Math.min(uz > zz ? uz : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        bz !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, bz - zz)))
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36080: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => Rz,
      g: () => Kz,
      h: () => Mz,
      i: () => dz,
      j: () => wz,
      n: () => pz,
      q: () => fz,
      u: () => Zz,
      x: () => Xz
    });
    var Ez = bz(20),
      nz = bz(22);
    const iz = "clientGameInventoryButtonsChanged",
      lz = new Map;

    function Mz() {
      return [...lz.values()].sort(((zz, uz) => {
        var bz, Ez;
        return (null !== (bz = zz.order) && void 0 !== bz ? bz : 0) - (null !== (Ez = uz.order) && void 0 !== Ez ? Ez : 0)
      }))
    }
    let tz = null;

    function Hz(zz) {
      tz = zz
    }
    let Oz = !1;

    function pz(zz) {
      Oz = !0;
      try {
        zz.onClick()
      } finally {
        Oz = !1
      }
      zz.panel && "clientGame" === Ez.e.get("openInGameMenuName") && Hz(zz.id)
    }

    function dz() {
      return Oz
    }

    function Fz() {
      return Mz().filter((zz => zz.panel && !zz.disabled))
    }

    function Zz(zz) {
      const uz = Fz(),
        bz = uz.findIndex((zz => zz.id === tz));
      return !(bz < 0 || uz.length < 2) && (pz(uz[(bz + zz + uz.length) % uz.length]), !0)
    }

    function Rz() {
      return null !== tz && Fz().length > 1
    }

    function Kz() {
      Hz(null)
    }

    function wz() {
      "inventory" !== Ez.e.get("openInGameMenuName") && Hz(null)
    }

    function Xz() {
      const zz = tz;
      return Hz(null), zz
    }

    function fz(zz) {
      return lz.set(zz.id, zz), nz.k.sK(iz, Mz(), !0), () => {
        lz.get(zz.id) === zz && (lz.delete(zz.id), nz.k.sK(iz, Mz()))
      }
    }
  },
  37917: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      constructor(zz, uz, bz) {
        this.sK = zz, this.beforeOpen = uz, this.afterClose = bz, this.open = !1, this.SZ = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.SZ && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.SZ = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.SZ || (this.snapshot = this.buildSnapshot(), this.sK(this.snapshot))
      }
    }
  },
  36071: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      i: () => Kz,
      l: () => wz,
      n: () => dz,
      o: () => Hz,
      p: () => Rz,
      t: () => Fz,
      x: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(36080);
    const Mz = "clientGameUiChanged";
    let tz = null;

    function Hz() {
      return tz
    }

    function Oz(zz, uz) {
      const bz = {
        content: zz,
        menu: uz
      };
      return tz = bz, nz.k.sK(Mz, tz, !0), () => {
        tz === bz && (tz = null, Zz = !1, Kz(), nz.k.sK(Mz, null))
      }
    }
    let pz = null;

    function dz() {
      return pz
    }

    function Fz(zz) {
      return pz = zz, () => {
        pz === zz && (pz = null)
      }
    }
    let Zz = !1;

    function Rz() {
      const zz = Ez.e.get("openInGameMenuName");
      "clientGame" !== zz && (Zz = "inventory" === zz), (0, lz.i)() || (0, lz.g)(), (0, iz.m)(iz.b), Ez.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Kz() {
      Xz(!1)
    }

    function wz() {
      Xz(Zz)
    }

    function Xz(zz) {
      "clientGame" === Ez.e.get("openInGameMenuName") && Ez.e.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, lz.g)(), Zz = !1
    }
  },
  38638: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Ob
    });
    var Ez = bz(56);
    var nz = bz(20),
      iz = bz(1854),
      lz = bz(22),
      Mz = bz(36071),
      tz = bz(1038),
      Hz = bz.n(tz),
      Oz = bz(1417),
      pz = bz(1181),
      dz = bz(4292),
      Fz = bz(1313),
      Zz = bz(1419),
      Rz = bz(1856),
      Kz = bz(1332),
      wz = bz(1846),
      Xz = bz(1912),
      fz = bz(206);
    const sz = bz(38643),
      rz = Object.fromEntries(sz.keys().map((zz => [zz.replace(/^\.\/(.*)\.webp$/, "$1"), sz(zz)]))),
      oz = new Set;

    function Nz(zz, uz) {
      const bz = uz ? zz : `${zz}-uncaught`,
        Ez = (0, fz.e)(rz, bz);
      return void 0 !== Ez || oz.has(bz) || (oz.add(bz), console.warn(`Containment Breach has no mugshot ${bz}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Ez
    }
    var vz = bz(1089);
    const xz = "containmentBreach",
      Jz = "Gold Coin";

    function Az(zz) {
      let {
        open: uz,
        onDismiss: bz,
        title: Ez,
        className: nz,
        decor: iz,
        headerExtra: lz,
        status: Mz,
        statusRefused: tz = !1,
        children: Oz
      } = zz;
      const pz = `${nz}Title`;
      return (0, vz.jsx)(dz.d, {
        show: uz,
        close: bz,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, vz.jsxs)("section", {
          className: Hz()("ContainmentBoardPanel", nz),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": pz,
          children: [iz && (0, vz.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: iz
          }), (0, vz.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, vz.jsx)("h2", {
              id: pz,
              className: "VisuallyHidden",
              children: Ez
            }), lz, (0, vz.jsx)(Zz.m, {
              onClick: bz
            })]
          }), (0, vz.jsx)("div", {
            className: "BoardBody",
            children: Oz
          }), void 0 !== Mz && (0, vz.jsx)("footer", {
            className: Hz()("BoardStatus", {
              Refused: tz
            }),
            children: Mz
          })]
        })
      })
    }

    function Tz(zz) {
      let {
        itemName: uz
      } = zz;
      return (0, vz.jsx)(Rz.c, {
        itemName: uz,
        amount: 0
      })
    }

    function Lz(zz) {
      let {
        anomalyId: uz,
        caught: bz
      } = zz;
      const nz = (0, Ez.useRef)(null);
      return (0, Fz.b)(nz, !bz), (0, vz.jsx)("span", {
        ref: nz,
        className: Hz()("BoardMugshot", {
          Uncaught: !bz
        }),
        children: (0, vz.jsx)("img", {
          src: Nz(uz, bz),
          alt: "",
          draggable: !1
        })
      })
    }

    function Pz(zz) {
      let {
        itemName: uz,
        amount: bz,
        yM: Ez,
        inTile: nz = !1
      } = zz;
      return (0, vz.jsx)(Kz.f, {
        delayShow: 200,
        hoverOnly: nz,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, vz.jsx)(az, {
          itemName: uz,
          amount: bz,
          yM: Ez
        }),
        children: (0, vz.jsxs)("span", {
          className: Hz()("BoardChip", {
            Short: void 0 !== Ez && Ez < bz
          }),
          children: [(0, vz.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, vz.jsx)(Tz, {
              itemName: uz
            })
          }), bz.toLocaleString()]
        })
      })
    }
    const Gz = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function az(zz) {
      var uz;
      let {
        itemName: bz,
        amount: Ez,
        yM: nz
      } = zz;
      const {
        t: iz
      } = (0, pz.F)(), lz = (0, Xz.e)("itemInfo", (zz => zz[bz])), {
        lore: Mz,
        droppedBy: tz
      } = function(zz) {
        if ("string" !== typeof zz) return {
          lore: zz,
          droppedBy: null
        };
        const uz = Gz.exec(zz);
        return null === uz ? {
          lore: zz,
          droppedBy: null
        } : {
          lore: "" === uz[1] ? void 0 : uz[1],
          droppedBy: uz[2]
        }
      }(null === lz || void 0 === lz ? void 0 : lz.description);
      return (0, vz.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, vz.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, vz.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, vz.jsx)(Tz, {
              itemName: bz
            })
          }), (0, vz.jsx)(wz.b, {
            text: null !== (uz = null === lz || void 0 === lz ? void 0 : lz.displayName) && void 0 !== uz ? uz : bz,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== Mz || null !== tz) && (0, vz.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== Mz && (0, vz.jsx)(wz.b, {
            text: Mz,
            className: "BoardChipTooltipDescription"
          }), null !== tz && (0, vz.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, vz.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: iz(`${xz}:chipDroppedBy`)
            }), tz]
          })]
        }), void 0 !== nz && (0, vz.jsxs)("div", {
          className: Hz()("BoardChipTooltipHeld", {
            Short: nz < Ez
          }),
          children: [(0, vz.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: iz(`${xz}:chipYouHave`)
          }), (0, vz.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, vz.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: nz.toLocaleString()
            }), ` / ${Ez.toLocaleString()}`]
          }), (0, vz.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, vz.jsx)("span", {
              style: {
                width: (Ez > 0 ? 100 * Math.min(1, nz / Ez) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Vz(zz) {
      let {
        icon: uz,
        name: bz,
        selected: Ez,
        locked: nz,
        className: iz,
        buttonRef: lz,
        onSelect: Mz,
        children: tz
      } = zz;
      return (0, vz.jsxs)("button", {
        ref: lz,
        type: "button",
        className: Hz()("BoardTile", iz, {
          Selected: Ez,
          Locked: nz
        }),
        onClick: Mz,
        children: [(0, vz.jsx)("span", {
          className: "BoardTileIcon",
          children: uz
        }), (0, vz.jsx)("span", {
          className: "BoardTileName",
          children: bz
        }), tz]
      })
    }

    function mz(zz) {
      let {
        icon: uz,
        name: bz,
        children: Ez
      } = zz;
      return (0, vz.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, vz.jsx)("span", {
          className: "BoardDetailIcon",
          children: uz
        }), (0, vz.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, vz.jsx)("h3", {
            children: bz
          }), (0, vz.jsx)("span", {
            className: "BoardDetailStatus",
            children: Ez
          })]
        })]
      })
    }

    function qz(zz) {
      let {
        coins: uz,
        children: bz
      } = zz;
      return (0, vz.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, vz.jsx)(Pz, {
          itemName: Jz,
          amount: uz
        }), bz]
      })
    }
    var hz = bz(37917);
    const Uz = "containmentCodexView";
    class cz extends hz.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = zz => {
          this.selectedId = zz, this.emit()
        }
      }
      WZ(zz) {
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
    const gz = {
        codexAnyDifficulty: `${xz}:codexNeedsAny`,
        codexNormalOnly: `${xz}:codexNeedsNormal`,
        codexHardOnly: `${xz}:codexNeedsHard`
      },
      Sz = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      yz = {
        codexContained: `${xz}:codexContainedBadge`,
        codexEncountered: `${xz}:codexEncounteredBadge`,
        codexUnidentified: `${xz}:codexUnidentifiedBadge`
      },
      Dz = ["94%", "81%", "88%", "46%", "72%"];

    function Qz(zz) {
      let {
        entry: uz
      } = zz;
      const {
        t: bz
      } = (0, pz.F)();
      return (0, vz.jsx)("span", {
        className: Hz()("BoardBadge", Sz[uz.codexEntryState]),
        children: bz(yz[uz.codexEntryState])
      })
    }

    function Wz(zz) {
      const {
        t: uz
      } = (0, pz.F)();
      return "codexUnidentified" === zz.codexEntryState ? uz(`${xz}:codexUnidentifiedName`) : zz.codexEntryName
    }

    function ez(zz) {
      let {
        entry: uz
      } = zz;
      return "codexUnidentified" === uz.codexEntryState ? (0, vz.jsx)(Tz, {
        itemName: "Book"
      }) : (0, vz.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, vz.jsx)(Lz, {
          anomalyId: uz.codexEntryId,
          caught: "codexContained" === uz.codexEntryState
        }), (0, vz.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function jz(zz) {
      let {
        entry: uz,
        selected: bz,
        onSelect: Ez
      } = zz;
      const nz = "codexUnidentified" === uz.codexEntryState;
      return (0, vz.jsxs)(Vz, {
        icon: (0, vz.jsx)(ez, {
          entry: uz
        }),
        name: Wz(uz),
        selected: bz,
        locked: nz,
        className: Hz()("CodexFolder", Sz[uz.codexEntryState]),
        onSelect: () => {
          Ez(uz.codexEntryId)
        },
        children: [!nz && (0, vz.jsx)(Qz, {
          entry: uz
        }), nz && (0, vz.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Iz(zz) {
      let {
        count: uz
      } = zz;
      const bz = [];
      for (let Ez = Math.min(uz, 25); Ez > 0; Ez -= 5) bz.push(Math.min(Ez, 5));
      return (0, vz.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: bz.map(((zz, uz) => (0, vz.jsx)("span", {
          className: Hz()("CodexTallyGroup", {
            Gate: 5 === zz
          }),
          children: Array.from({
            length: Math.min(zz, 4)
          }, ((zz, uz) => (0, vz.jsx)("span", {
            className: "CodexTallyMark"
          }, uz)))
        }, uz)))
      })
    }

    function Bz(zz) {
      let {
        contained: uz,
        total: bz
      } = zz;
      const {
        t: Ez
      } = (0, pz.F)();
      return (0, vz.jsxs)("div", {
        className: "CodexProgress",
        children: [Ez(`${xz}:codexProgress`, {
          contained: String(uz),
          total: String(bz)
        }), (0, vz.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, vz.jsx)("span", {
            style: {
              width: uz / bz * 100 + "%"
            }
          })
        })]
      })
    }

    function Cz(zz) {
      let {
        entry: uz,
        fileNumber: bz
      } = zz;
      const {
        t: Ez
      } = (0, pz.F)(), nz = "codexContained" === uz.codexEntryState;
      return (0, vz.jsx)("section", {
        className: "BoardDetail",
        children: (0, vz.jsxs)("article", {
          className: Hz()("CodexDossier", Sz[uz.codexEntryState]),
          children: [(0, vz.jsx)("span", {
            className: "CodexFileNumber",
            children: Ez(`${xz}:codexFileNumber`, {
              number: String(bz).padStart(3, "0")
            })
          }), (0, vz.jsx)(mz, {
            icon: (0, vz.jsx)(ez, {
              entry: uz
            }),
            name: Wz(uz),
            children: (0, vz.jsx)(Qz, {
              entry: uz
            })
          }), nz && (0, vz.jsxs)(vz.Fragment, {
            children: [(0, vz.jsx)("p", {
              className: "BoardDescription",
              children: uz.codexEntryLore
            }), (0, vz.jsxs)("p", {
              className: "CodexTally",
              children: [Ez(`${xz}:codexContainments`, {
                count: String(uz.codexEntryContainedCount)
              }), (0, vz.jsx)(Iz, {
                count: uz.codexEntryContainedCount
              })]
            }), (0, vz.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Ez(`${xz}:codexContainedBadge`)
            })]
          }), !nz && (0, vz.jsxs)(vz.Fragment, {
            children: [(0, vz.jsxs)("div", {
              className: "CodexRedaction",
              children: [Dz.map((zz => (0, vz.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: zz
                }
              }, zz))), (0, vz.jsx)("p", {
                className: "CodexRedacted",
                children: Ez(`${xz}:codexRedacted`)
              })]
            }), "" !== uz.codexEntryHint && (0, vz.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, vz.jsx)("h4", {
                children: Ez(`${xz}:codexHintLabel`)
              }), (0, vz.jsx)("p", {
                children: uz.codexEntryHint
              })]
            }), (0, vz.jsx)("p", {
              className: "CodexClearance",
              children: Ez(gz[uz.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Yz(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Oz.h)(Uz, uz.getSnapshot()),
        {
          t: Ez
        } = (0, pz.F)();
      if (0 === bz.entries.length) return null;
      const nz = bz.entries.find((zz => zz.codexEntryId === bz.selectedId)),
        iz = bz.entries.filter((zz => "codexContained" === zz.codexEntryState)).length,
        lz = bz.entries.map((zz => zz.codexEntryId)).sort().indexOf(nz.codexEntryId) + 1;
      return (0, vz.jsxs)(Az, {
        open: bz.open,
        onDismiss: uz.dismiss,
        title: Ez(`${xz}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, vz.jsx)(Bz, {
          contained: iz,
          total: bz.entries.length
        }),
        children: [(0, vz.jsx)("div", {
          className: "BoardTiles",
          children: bz.entries.map((zz => (0, vz.jsx)(jz, {
            entry: zz,
            selected: zz === nz,
            onSelect: uz.select
          }, zz.codexEntryId)))
        }), (0, vz.jsx)(Cz, {
          entry: nz,
          fileNumber: lz
        })]
      })
    }
    var kz = bz(328);
    class zu extends hz.e {
      constructor(zz, uz, bz, Ez, nz, iz) {
        super(zz, uz, bz), this.pacer = Ez, this.command = nz, this.predict = iz, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = zz => {
          this.selectedId = zz, this.emit()
        }, this.act = (zz, uz) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${zz} ${uz}`, this.rollBack)) return;
          const bz = this.predict(this.board, zz, uz);
          null !== bz && (this.board = bz.board, this.notice = bz.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Ez.subscribe((() => {
          this.emit()
        }))
      }
      WZ(zz) {
        const uz = this.messageOpens(zz);
        if (uz && this.open) return this.board === this.confirmed && (this.board = zz), this.confirmed = zz, void this.emit();
        if (this.board = zz, this.confirmed = zz, this.pacer.onReply(), uz) return this.notice = null, this.selectedId = this.openingSelection(zz), void this.show();
        const bz = this.messageNotice(zz);
        null !== bz && (this.notice = bz), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function uu(zz, uz) {
      return zz.loadoutCoins >= uz.loadoutCostCoins && uz.loadoutCostParts.every((uz => function(zz, uz) {
        return bu(zz, uz).loadoutHeldPartAmount
      }(zz, uz.loadoutPartCurrency) >= uz.loadoutPartAmount))
    }

    function bu(zz, uz) {
      return zz.loadoutHeldParts.find((zz => zz.loadoutHeldPartCurrency === uz))
    }

    function Eu(zz, uz) {
      return zz.loadoutSlots.find((zz => zz.loadoutSlotKind === uz))
    }

    function nu(zz) {
      return zz.loadoutPerks.filter((zz => zz.loadoutPerkEquipped)).length >= zz.loadoutMaxPerks
    }

    function iu(zz, uz, bz) {
      for (const nz of zz.loadoutSlots) {
        const Ez = nz.loadoutSlotOptions.find((zz => zz.loadoutOptionId === bz));
        if (Ez) return "loadoutArmour" === nz.loadoutSlotKind ? Mu(zz, nz, Ez, uz) : lu(zz, nz, Ez, uz)
      }
      const Ez = zz.loadoutPerks.find((zz => zz.loadoutPerkId === bz));
      return Ez ? function(zz, uz, bz) {
        const Ez = uz.loadoutPerkOwned,
          nz = uz.loadoutPerkEquipped,
          iz = uz.loadoutPerkName,
          lz = nu(zz);
        if ("loadoutUnlock" === bz) {
          if (Ez || !uu(zz, uz.loadoutPerkCost)) return null;
          const bz = {
            ...uz,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !lz
          };
          return {
            board: Hu(Ou(zz, uz.loadoutPerkCost), bz),
            notice: pu(lz ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", iz)
          }
        }
        if ("loadoutUpgrade" === bz || !Ez || "loadoutEquip" === bz === nz || !nz && lz) return null;
        return {
          board: Hu(zz, {
            ...uz,
            loadoutPerkEquipped: !nz
          }),
          notice: pu(nz ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", iz)
        }
      }(zz, Ez, uz) : null
    }

    function lu(zz, uz, bz, Ez) {
      const nz = bz.loadoutOptionOwnedTier,
        iz = bz.loadoutOptionName;
      if ("loadoutEquip" === Ez) return 0 === nz ? null : {
        board: tu(zz, uz, bz.loadoutOptionId, null),
        notice: pu("loadoutNoticeEquipped", iz)
      };
      const lz = "loadoutUnlock" === Ez;
      if (lz && 0 !== nz || "loadoutUpgrade" === Ez && (0 === nz || nz >= bz.loadoutOptionTiers.length) || "loadoutUnequip" === Ez) return null;
      const Mz = bz.loadoutOptionTiers[nz].loadoutTierCost;
      if (!uu(zz, Mz)) return null;
      const tz = {
          ...bz,
          loadoutOptionOwnedTier: nz + 1
        },
        Hz = lz ? bz.loadoutOptionId : uz.loadoutSlotEquippedId;
      return {
        board: tu(Ou(zz, Mz), uz, Hz, tz),
        notice: lz ? pu("loadoutNoticeUnlocked", iz) : pu("loadoutNoticeUpgraded", iz, nz + 1)
      }
    }

    function Mu(zz, uz, bz, Ez) {
      const nz = bz.loadoutOptionOwnedTier > 0,
        iz = bz.loadoutOptionName;
      if ("loadoutEquip" === Ez && nz) return {
        board: tu(zz, uz, bz.loadoutOptionId, null),
        notice: pu("loadoutNoticeEquipped", iz)
      };
      const lz = bz.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Ez || nz || !uu(zz, lz) ? null : {
        board: tu(Ou(zz, lz), uz, bz.loadoutOptionId, {
          ...bz,
          loadoutOptionOwnedTier: 1
        }),
        notice: pu("loadoutNoticeUnlocked", iz)
      }
    }

    function tu(zz, uz, bz, Ez) {
      const nz = {
        ...uz,
        loadoutSlotEquippedId: bz,
        loadoutSlotOptions: uz.loadoutSlotOptions.map((zz => null !== Ez && zz.loadoutOptionId === Ez.loadoutOptionId ? Ez : zz))
      };
      return {
        ...zz,
        loadoutSlots: zz.loadoutSlots.map((zz => zz === uz ? nz : zz))
      }
    }

    function Hu(zz, uz) {
      return {
        ...zz,
        loadoutPerks: zz.loadoutPerks.map((zz => zz.loadoutPerkId === uz.loadoutPerkId ? uz : zz))
      }
    }

    function Ou(zz, uz) {
      return {
        ...zz,
        loadoutCoins: zz.loadoutCoins - uz.loadoutCostCoins,
        loadoutHeldParts: zz.loadoutHeldParts.map((zz => {
          const bz = uz.loadoutCostParts.find((uz => uz.loadoutPartCurrency === zz.loadoutHeldPartCurrency));
          return bz ? {
            ...zz,
            loadoutHeldPartAmount: zz.loadoutHeldPartAmount - bz.loadoutPartAmount
          } : zz
        }))
      }
    }

    function pu(zz, uz) {
      return {
        loadoutNoticeKey: zz,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: uz,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const du = "containmentLoadoutView";
    class Fu extends zu {
      constructor(zz, uz, bz, Ez) {
        super(zz, uz, bz, Ez, "loadout", iu), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = zz => {
          this.slot = zz, this.selectedId = Zu(this.board, zz), this.emit()
        }
      }
      messageOpens(zz) {
        return zz.loadoutMessageOpens
      }
      messageNotice(zz) {
        return zz.loadoutNotice
      }
      openingSelection(zz) {
        return Zu(zz, this.slot)
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

    function Zu(zz, uz) {
      if ("loadoutPerks" === uz) {
        var bz;
        const uz = zz.loadoutPerks;
        return (null !== (bz = uz.find((zz => zz.loadoutPerkEquipped))) && void 0 !== bz ? bz : uz[0]).loadoutPerkId
      }
      return Eu(zz, uz).loadoutSlotEquippedId
    }
    const Ru = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Ku = bz(36316),
      wu = bz(1266);
    const Xu = {
        loadoutPrimary: `${xz}:loadoutSlotPrimary`,
        loadoutSecondary: `${xz}:loadoutSlotSecondary`,
        loadoutOffensive: `${xz}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${xz}:loadoutSlotSelfHelp`,
        loadoutArmour: `${xz}:loadoutSlotArmour`,
        loadoutPerks: `${xz}:loadoutSlotPerks`
      },
      fu = {
        section: "right",
        NF: "bottom",
        act: "top"
      },
      su = (0, Ez.createContext)({
        step: null,
        targetRef: () => {}
      });

    function ru() {
      const {
        step: zz,
        targetRef: uz
      } = (0, Ez.useContext)(su);
      return (bz, Ez) => (null === zz || void 0 === zz ? void 0 : zz.kind) === bz && zz.id === Ez ? uz : void 0
    }

    function ou(zz, uz) {
      const bz = uz.loadoutTargetId;
      if ("loadoutPerks" === uz.loadoutTargetSection) {
        const uz = zz.loadoutPerks.find((zz => zz.loadoutPerkId === bz));
        return {
          name: uz.loadoutPerkName,
          owned: uz.loadoutPerkOwned,
          equipped: uz.loadoutPerkEquipped
        }
      }
      const Ez = Eu(zz, uz.loadoutTargetSection),
        nz = Ez.loadoutSlotOptions.find((zz => zz.loadoutOptionId === bz));
      return {
        name: nz.loadoutOptionName,
        owned: nz.loadoutOptionOwnedTier > 0,
        equipped: Ez.loadoutSlotEquippedId === bz
      }
    }

    function Nu(zz, uz, bz, Ez) {
      const [nz, iz] = zz(`${xz}:${uz}`, {
        [bz]: "\x01"
      }).split("\x01");
      return (0, vz.jsxs)(vz.Fragment, {
        children: [nz, (0, vz.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Ez
        }), iz]
      })
    }

    function vu(zz) {
      let {
        view: uz,
        onDismiss: bz,
        children: nz
      } = zz;
      const {
        t: iz
      } = (0, pz.F)(), lz = uz.loadout, Mz = uz.open ? lz.loadoutWalkthrough.map((zz => ({
        target: zz,
        info: ou(lz, zz)
      }))).find((zz => {
        let {
          info: uz
        } = zz;
        return !uz.equipped
      })) : void 0;
      let tz = null,
        Hz = null;
      if (void 0 !== Mz) {
        const {
          target: zz,
          info: bz
        } = Mz;
        uz.slot !== zz.loadoutTargetSection ? (tz = {
          kind: "section",
          id: zz.loadoutTargetSection
        }, Hz = Nu(iz, "loadoutWalkthroughSection", "section", iz(Xu[zz.loadoutTargetSection]))) : uz.selectedId !== zz.loadoutTargetId ? (tz = {
          kind: "NF",
          id: zz.loadoutTargetId
        }, Hz = Nu(iz, "loadoutWalkthroughPick", "name", bz.name)) : (tz = {
          kind: "act",
          id: zz.loadoutTargetId
        }, Hz = Nu(iz, bz.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", bz.name))
      }
      const Oz = null === tz ? null : function(zz) {
          return `${zz.kind}:${zz.id}`
        }(tz),
        [dz, Fz] = (0, Ez.useState)(null),
        Zz = (0, Ez.useCallback)((zz => {
          Fz((uz => null !== zz ? {
            key: Oz,
            node: zz
          } : (null === uz || void 0 === uz ? void 0 : uz.key) === Oz ? null : uz))
        }), [Oz]),
        Rz = null !== Oz && (null === dz || void 0 === dz ? void 0 : dz.key) === Oz ? dz.node : null;
      return (0, vz.jsxs)(su.Provider, {
        value: {
          step: tz,
          targetRef: Zz
        },
        children: [nz, null !== tz && null !== Rz && (0, vz.jsx)(xu, {
          target: Rz,
          placement: fu[tz.kind],
          onDismiss: bz,
          children: Hz
        }, Oz)]
      })
    }

    function xu(zz) {
      let {
        target: uz,
        placement: bz,
        onDismiss: nz,
        children: iz
      } = zz;
      const {
        t: lz
      } = (0, pz.F)(), Mz = (0, Ez.useRef)(uz);
      return Mz.current = uz, (0, wu.u)("popup", Mz, nz), (0, vz.jsxs)(Ku.g, {
        target: uz,
        placement: bz,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, vz.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, vz.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Ru,
            alt: "",
            draggable: !1
          }), (0, vz.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: lz(`${xz}:operatorName`)
          }), (0, vz.jsx)(Zz.m, {
            onClick: nz,
            ariaLabel: lz(`${xz}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, vz.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: iz
        })]
      })
    }
    const Ju = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Au(zz) {
      let {
        cost: uz,
        loadout: bz
      } = zz;
      const {
        t: Ez
      } = (0, pz.F)();
      return uz.loadoutCostCoins <= 0 && 0 === uz.loadoutCostParts.length ? (0, vz.jsx)("span", {
        className: "LoadoutCost",
        children: Ez(`${xz}:loadoutFree`)
      }) : (0, vz.jsxs)("span", {
        className: "LoadoutCost",
        children: [uz.loadoutCostCoins > 0 && (0, vz.jsx)(Pz, {
          itemName: Jz,
          amount: uz.loadoutCostCoins,
          yM: bz.loadoutCoins
        }), uz.loadoutCostParts.map((zz => {
          const uz = bu(bz, zz.loadoutPartCurrency);
          return (0, vz.jsx)(Pz, {
            itemName: uz.loadoutHeldPartItem,
            amount: zz.loadoutPartAmount,
            yM: uz.loadoutHeldPartAmount
          }, zz.loadoutPartCurrency)
        }))]
      })
    }
    const Tu = {
      loadoutStatFireRate: `${xz}:loadoutUnitPerMinute`,
      loadoutStatReload: `${xz}:loadoutUnitSeconds`,
      loadoutStatResupply: `${xz}:loadoutUnitSeconds`
    };

    function Lu(zz) {
      return "loadoutStatPotency" === zz.loadoutStatKind ? (0, kz.X)(zz.loadoutStatValue) : String(zz.loadoutStatValue)
    }

    function Pu(zz) {
      var uz;
      let {
        option: bz
      } = zz;
      const {
        t: Ez
      } = (0, pz.F)(), nz = bz.loadoutOptionTiers, iz = null === (uz = nz[0]) || void 0 === uz ? void 0 : uz.loadoutTierStats.map((zz => zz.loadoutStatKind));
      if (!iz || 0 === iz.length) return null;
      const lz = bz.loadoutOptionOwnedTier,
        Mz = (zz, uz) => {
          var bz;
          return null === (bz = nz[zz]) || void 0 === bz ? void 0 : bz.loadoutTierStats.find((zz => zz.loadoutStatKind === uz))
        };
      return (0, vz.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, vz.jsx)("thead", {
          children: (0, vz.jsxs)("tr", {
            children: [(0, vz.jsx)("th", {}), nz.map(((zz, uz) => (0, vz.jsx)("th", {
              className: Hz()({
                Current: uz + 1 === lz,
                Next: uz === lz
              }),
              children: Ez(`${xz}:loadoutTier`, {
                tier: (0, kz.X)(uz + 1)
              })
            }, uz)))]
          })
        }), (0, vz.jsx)("tbody", {
          children: iz.map((zz => {
            const uz = Tu[zz];
            return (0, vz.jsxs)("tr", {
              children: [(0, vz.jsxs)("th", {
                scope: "row",
                children: [Ez(`${xz}:${zz}`), uz && (0, vz.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Ez(uz)
                })]
              }), nz.map(((uz, bz) => {
                const Ez = Mz(bz, zz),
                  nz = bz > 0 ? Mz(bz - 1, zz) : void 0,
                  iz = Ez && nz ? Ez.loadoutStatValue - nz.loadoutStatValue : 0,
                  tz = Ju.has(zz) ? iz < 0 : iz > 0,
                  Oz = bz === lz;
                return (0, vz.jsxs)("td", {
                  className: Hz()({
                    Current: bz + 1 === lz,
                    Next: Oz,
                    Gain: tz,
                    Owned: bz < lz
                  }),
                  children: [Oz && tz && (0, vz.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: iz < 0 ? "\u25bc" : "\u25b2"
                  }), Ez ? Lu(Ez) : "-"]
                }, bz)
              }))]
            }, zz)
          }))
        })]
      })
    }

    function Gu(zz) {
      let {
        view: uz,
        controller: bz,
        slot: Ez,
        option: nz
      } = zz;
      const {
        t: iz
      } = (0, pz.F)(), lz = uz.loadout, Mz = nz.loadoutOptionOwnedTier, tz = nz.loadoutOptionTiers.length, Hz = Ez.loadoutSlotEquippedId === nz.loadoutOptionId, Oz = Mz < tz ? nz.loadoutOptionTiers[Mz].loadoutTierCost : null, dz = null !== Oz && uu(lz, Oz), Fz = nz.loadoutOptionId, Rz = ru();
      return (0, vz.jsxs)(vz.Fragment, {
        children: [(0, vz.jsx)(Vu, {
          icon: nz.loadoutOptionIcon,
          name: nz.loadoutOptionName,
          status: 0 === Mz ? iz(`${xz}:loadoutLocked`) : tz > 1 ? iz(`${xz}:loadoutTier`, {
            tier: (0, kz.X)(Mz)
          }) : null,
          locked: 0 === Mz,
          equipped: Hz
        }), (0, vz.jsx)("p", {
          className: "BoardDescription",
          children: nz.loadoutOptionDescription
        }), (0, vz.jsx)(Pu, {
          option: nz
        }), (0, vz.jsxs)("div", {
          ref: Rz("act", Fz),
          className: "BoardActions",
          children: [null !== Oz && (0, vz.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, vz.jsx)(Au, {
              cost: Oz,
              loadout: lz
            }), (0, vz.jsx)(Zz.q, {
              disabled: !dz || uz.pending,
              onClick: () => {
                bz.act(0 === Mz ? "loadoutUnlock" : "loadoutUpgrade", Fz)
              },
              children: 0 === Mz ? iz(`${xz}:loadoutUnlock`) : iz(`${xz}:loadoutUpgrade`, {
                tier: (0, kz.X)(Mz + 1)
              })
            })]
          }), null === Oz && tz > 1 && (0, vz.jsx)("span", {
            className: "BoardHint",
            children: iz(`${xz}:loadoutMaxed`)
          }), Mz > 0 && !Hz && (0, vz.jsx)(Zz.f, {
            disabled: uz.pending,
            onClick: () => {
              bz.act("loadoutEquip", Fz)
            },
            children: iz(`${xz}:loadoutEquip`)
          })]
        })]
      })
    }

    function au(zz) {
      let {
        view: uz,
        controller: bz,
        perk: Ez
      } = zz;
      const {
        t: nz
      } = (0, pz.F)(), iz = uz.loadout, lz = nu(iz), Mz = Ez.loadoutPerkId, tz = ru();
      return (0, vz.jsxs)(vz.Fragment, {
        children: [(0, vz.jsx)(Vu, {
          icon: Ez.loadoutPerkIcon,
          name: Ez.loadoutPerkName,
          status: Ez.loadoutPerkOwned ? null : nz(`${xz}:loadoutLocked`),
          locked: !Ez.loadoutPerkOwned,
          equipped: Ez.loadoutPerkEquipped
        }), (0, vz.jsx)("p", {
          className: "BoardDescription",
          children: Ez.loadoutPerkDescription
        }), (0, vz.jsxs)("div", {
          ref: tz("act", Mz),
          className: "BoardActions",
          children: [!Ez.loadoutPerkOwned && (0, vz.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, vz.jsx)(Au, {
              cost: Ez.loadoutPerkCost,
              loadout: iz
            }), (0, vz.jsx)(Zz.q, {
              disabled: !uu(iz, Ez.loadoutPerkCost) || uz.pending,
              onClick: () => {
                bz.act("loadoutUnlock", Mz)
              },
              children: nz(`${xz}:loadoutUnlock`)
            })]
          }), Ez.loadoutPerkOwned && !Ez.loadoutPerkEquipped && (0, vz.jsx)(Zz.f, {
            disabled: lz || uz.pending,
            onClick: () => {
              bz.act("loadoutEquip", Mz)
            },
            children: nz(`${xz}:loadoutEquip`)
          }), Ez.loadoutPerkOwned && !Ez.loadoutPerkEquipped && lz && (0, vz.jsx)("span", {
            className: "BoardHint",
            children: nz(`${xz}:loadoutSocketsFullHint`)
          }), Ez.loadoutPerkEquipped && (0, vz.jsx)(Zz.V, {
            disabled: uz.pending,
            onClick: () => {
              bz.act("loadoutUnequip", Mz)
            },
            children: nz(`${xz}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Vu(zz) {
      let {
        icon: uz,
        name: bz,
        status: Ez,
        locked: nz,
        equipped: iz
      } = zz;
      const {
        t: lz
      } = (0, pz.F)();
      return (0, vz.jsxs)(mz, {
        icon: (0, vz.jsx)(Tz, {
          itemName: uz
        }),
        name: bz,
        children: [null !== Ez && (0, vz.jsx)("span", {
          className: Hz()("LoadoutStatusText", {
            Locked: nz
          }),
          children: Ez
        }), iz && (0, vz.jsx)("span", {
          className: "BoardBadge",
          children: lz(`${xz}:loadoutEquippedBadge`)
        })]
      })
    }

    function mu(zz) {
      let {
        view: uz,
        controller: bz
      } = zz;
      const Ez = uz.loadout;
      if ("loadoutPerks" === uz.slot) {
        const zz = Ez.loadoutPerks.find((zz => zz.loadoutPerkId === uz.selectedId));
        return (0, vz.jsx)("section", {
          className: "BoardDetail",
          children: zz && (0, vz.jsx)(au, {
            view: uz,
            controller: bz,
            perk: zz
          })
        })
      }
      const nz = Eu(Ez, uz.slot),
        iz = nz.loadoutSlotOptions.find((zz => zz.loadoutOptionId === uz.selectedId));
      return (0, vz.jsx)("section", {
        className: "BoardDetail",
        children: iz && (0, vz.jsx)(Gu, {
          view: uz,
          controller: bz,
          slot: nz,
          option: iz
        })
      })
    }

    function qu(zz) {
      let {
        owned: uz,
        total: bz
      } = zz;
      return bz <= 1 ? null : (0, vz.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: bz
        }, ((zz, bz) => (0, vz.jsx)("span", {
          className: Hz()("LoadoutPip", {
            Filled: bz < uz
          })
        }, bz)))
      })
    }

    function hu(zz) {
      let {
        view: uz,
        controller: bz
      } = zz;
      const {
        t: Ez
      } = (0, pz.F)(), nz = uz.loadout, iz = ru();
      return (0, vz.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Ez(`${xz}:loadoutKit`),
        children: [nz.loadoutSlots.map((zz => {
          const nz = zz.loadoutSlotOptions.find((uz => uz.loadoutOptionId === zz.loadoutSlotEquippedId));
          return (0, vz.jsxs)("button", {
            ref: iz("section", zz.loadoutSlotKind),
            type: "button",
            className: Hz()("LoadoutKitSlot", {
              Selected: uz.slot === zz.loadoutSlotKind
            }),
            onClick: () => {
              bz.selectSlot(zz.loadoutSlotKind)
            },
            children: [(0, vz.jsx)("span", {
              className: "LoadoutKitIcon",
              children: nz && (0, vz.jsx)(Tz, {
                itemName: nz.loadoutOptionIcon
              })
            }), (0, vz.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, vz.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, vz.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Ez(Xu[zz.loadoutSlotKind])
                }), nz && (0, vz.jsx)(qu, {
                  owned: nz.loadoutOptionOwnedTier,
                  total: nz.loadoutOptionTiers.length
                })]
              }), (0, vz.jsx)("span", {
                className: "LoadoutKitName",
                children: null === nz || void 0 === nz ? void 0 : nz.loadoutOptionName
              })]
            })]
          }, zz.loadoutSlotKind)
        })), (0, vz.jsx)(Uu, {
          view: uz,
          controller: bz
        })]
      })
    }

    function Uu(zz) {
      let {
        view: uz,
        controller: bz
      } = zz;
      const {
        t: Ez
      } = (0, pz.F)(), nz = uz.loadout, iz = nz.loadoutPerks.filter((zz => zz.loadoutPerkEquipped)), lz = ru();
      return (0, vz.jsxs)("button", {
        ref: lz("section", "loadoutPerks"),
        type: "button",
        className: Hz()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === uz.slot
        }),
        onClick: () => {
          bz.selectSlot("loadoutPerks")
        },
        children: [(0, vz.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, vz.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Ez(Xu.loadoutPerks)
          }), (0, vz.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Ez(`${xz}:loadoutPerkCount`, {
              equipped: String(iz.length),
              max: String(nz.loadoutMaxPerks)
            })
          })]
        }), (0, vz.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: nz.loadoutMaxPerks
          }, ((zz, uz) => {
            const bz = iz[uz];
            return (0, vz.jsxs)("span", {
              className: Hz()("LoadoutSocket", {
                Filled: bz,
                Empty: !bz
              }),
              children: [(0, vz.jsx)("span", {
                className: "LoadoutSocketWell",
                children: bz && (0, vz.jsx)(Tz, {
                  itemName: bz.loadoutPerkIcon
                })
              }), (0, vz.jsx)("span", {
                className: "LoadoutSocketName",
                children: bz ? bz.loadoutPerkName : Ez(`${xz}:loadoutPerkSocketEmpty`)
              })]
            }, uz)
          }))
        })]
      })
    }

    function cu(zz) {
      let {
        icon: uz,
        name: bz,
        selected: Ez,
        equipped: nz,
        locked: iz,
        ownedTier: lz,
        tiers: Mz,
        buttonRef: tz,
        onSelect: Hz
      } = zz;
      const {
        t: Oz
      } = (0, pz.F)();
      return (0, vz.jsxs)(Vz, {
        icon: (0, vz.jsx)(Tz, {
          itemName: uz
        }),
        name: bz,
        selected: Ez,
        locked: iz,
        buttonRef: tz,
        onSelect: Hz,
        children: [nz && (0, vz.jsx)("span", {
          className: "BoardBadge",
          children: Oz(`${xz}:loadoutEquippedBadge`)
        }), iz && (0, vz.jsx)("span", {
          className: "BoardBadge Muted",
          children: Oz(`${xz}:loadoutLocked`)
        }), !iz && (0, vz.jsx)(qu, {
          owned: lz,
          total: Mz
        })]
      })
    }

    function gu(zz) {
      let {
        view: uz,
        controller: bz
      } = zz;
      const Ez = uz.loadout,
        nz = ru();
      if ("loadoutPerks" === uz.slot) return (0, vz.jsx)("div", {
        className: "BoardTiles",
        children: Ez.loadoutPerks.map((zz => (0, vz.jsx)(cu, {
          icon: zz.loadoutPerkIcon,
          name: zz.loadoutPerkName,
          selected: uz.selectedId === zz.loadoutPerkId,
          equipped: zz.loadoutPerkEquipped,
          locked: !zz.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: nz("NF", zz.loadoutPerkId),
          onSelect: () => {
            bz.select(zz.loadoutPerkId)
          }
        }, zz.loadoutPerkId)))
      });
      const iz = Eu(Ez, uz.slot);
      return (0, vz.jsx)("div", {
        className: "BoardTiles",
        children: iz.loadoutSlotOptions.map((zz => (0, vz.jsx)(cu, {
          icon: zz.loadoutOptionIcon,
          name: zz.loadoutOptionName,
          selected: uz.selectedId === zz.loadoutOptionId,
          equipped: iz.loadoutSlotEquippedId === zz.loadoutOptionId,
          locked: 0 === zz.loadoutOptionOwnedTier,
          ownedTier: zz.loadoutOptionOwnedTier,
          tiers: zz.loadoutOptionTiers.length,
          buttonRef: nz("NF", zz.loadoutOptionId),
          onSelect: () => {
            bz.select(zz.loadoutOptionId)
          }
        }, zz.loadoutOptionId)))
      })
    }

    function Su(zz) {
      let {
        loadout: uz
      } = zz;
      return (0, vz.jsx)(qz, {
        coins: uz.loadoutCoins,
        children: uz.loadoutHeldParts.filter((zz => zz.loadoutHeldPartAmount > 0)).map((zz => (0, vz.jsx)(Pz, {
          itemName: zz.loadoutHeldPartItem,
          amount: zz.loadoutHeldPartAmount
        }, zz.loadoutHeldPartCurrency)))
      })
    }

    function yu(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Oz.h)(du, uz.getSnapshot()),
        {
          t: Ez
        } = (0, pz.F)();
      if (null === bz.loadout) return null;
      const nz = bz.notice;
      return (0, vz.jsx)(vu, {
        view: bz,
        onDismiss: uz.dismiss,
        children: (0, vz.jsxs)(Az, {
          open: bz.open,
          onDismiss: uz.dismiss,
          title: Ez(`${xz}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, vz.jsx)(Su, {
            loadout: bz.loadout
          }),
          statusRefused: null === nz || void 0 === nz ? void 0 : nz.loadoutNoticeRefused,
          status: (0, vz.jsxs)(vz.Fragment, {
            children: [(0, vz.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Ez(`${xz}:loadoutRadioBadge`)
            }), null !== nz && Ez(`${xz}:${nz.loadoutNoticeKey}`, {
              name: nz.loadoutNoticeName,
              tier: (0, kz.X)(nz.loadoutNoticeTier),
              max: String(bz.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, vz.jsx)(hu, {
            view: bz,
            controller: uz
          }), (0, vz.jsx)(gu, {
            view: bz,
            controller: uz
          }), (0, vz.jsx)(mu, {
            view: bz,
            controller: uz
          })]
        })
      })
    }

    function Du(zz, uz, bz) {
      const Ez = zz.locatorEntries.find((zz => zz.locatorEntryId === bz));
      if (!Ez) return null;
      const nz = Ez.locatorEntryName;
      if ("locatorDisarm" === uz) return Ez.locatorEntryArmed ? {
        board: Qu(zz, null),
        notice: Wu("locatorNoticeDisarmed", nz)
      } : null;
      if ("locatorArm" === uz) return Ez.locatorEntryOwned && !Ez.locatorEntryArmed ? {
        board: Qu(zz, bz),
        notice: Wu("locatorNoticeArmed", nz)
      } : null;
      if (Ez.locatorEntryOwned || zz.locatorCoins < Ez.locatorEntryPrice) return null;
      const iz = Qu({
        ...zz,
        locatorCoins: zz.locatorCoins - Ez.locatorEntryPrice
      }, bz);
      return {
        board: {
          ...iz,
          locatorEntries: iz.locatorEntries.map((zz => zz.locatorEntryId === bz ? {
            ...zz,
            locatorEntryOwned: !0
          } : zz))
        },
        notice: Wu("locatorNoticeBought", nz)
      }
    }

    function Qu(zz, uz) {
      return {
        ...zz,
        locatorEntries: zz.locatorEntries.map((zz => {
          const bz = zz.locatorEntryId === uz;
          return zz.locatorEntryArmed === bz ? zz : {
            ...zz,
            locatorEntryArmed: bz
          }
        }))
      }
    }

    function Wu(zz, uz) {
      return {
        locatorNoticeKey: zz,
        locatorNoticeRefused: !1,
        locatorNoticeName: uz
      }
    }
    const eu = "containmentLocatorView";
    class ju extends zu {
      constructor(zz, uz, bz, Ez) {
        super(zz, uz, bz, Ez, "locator", Du), this.snapshot = this.buildSnapshot()
      }
      messageOpens(zz) {
        return zz.locatorMessageOpens
      }
      messageNotice(zz) {
        return zz.locatorNotice
      }
      openingSelection(zz) {
        var uz;
        const bz = zz.locatorEntries;
        return (null !== (uz = bz.find((zz => zz.locatorEntryArmed))) && void 0 !== uz ? uz : bz[0]).locatorEntryId
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
    const Iu = {
        locatorContained: `${xz}:locatorFlavourContained`,
        locatorEncountered: `${xz}:locatorFlavourEncountered`,
        locatorUnseen: `${xz}:locatorFlavourUnseen`
      },
      Bu = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${xz}:locatorAttunedNormal`,
        codexHardOnly: `${xz}:locatorAttunedHard`
      };

    function Cu() {
      return (0, vz.jsx)(vz.Fragment, {
        children: Array.from({
          length: 5
        }, ((zz, uz) => (0, vz.jsx)("span", {
          className: "LocatorFly",
          children: (0, vz.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, uz)))
      })
    }

    function Yu(zz) {
      let {
        entry: uz
      } = zz;
      const {
        t: bz
      } = (0, pz.F)();
      return uz.locatorEntryArmed ? (0, vz.jsx)("span", {
        className: "BoardBadge Armed",
        children: bz(`${xz}:locatorArmedBadge`)
      }) : uz.locatorEntryOwned ? (0, vz.jsx)("span", {
        className: "BoardBadge",
        children: bz(`${xz}:locatorOwnedBadge`)
      }) : null
    }

    function ku(zz) {
      let {
        entry: uz,
        coins: bz,
        inTile: Ez = !1
      } = zz;
      return (0, vz.jsx)(Pz, {
        itemName: Jz,
        amount: uz.locatorEntryPrice,
        yM: bz,
        inTile: Ez
      })
    }

    function zb(zz) {
      let {
        view: uz,
        controller: bz,
        entry: Ez
      } = zz;
      const {
        t: nz
      } = (0, pz.F)(), iz = Ez.locatorEntryId, lz = uz.locators.locatorEntries.find((zz => zz.locatorEntryArmed && zz !== Ez));
      return (0, vz.jsxs)("div", {
        className: "BoardActions",
        children: [Ez.locatorEntryArmed && (0, vz.jsx)(Zz.V, {
          disabled: uz.pending,
          onClick: () => {
            bz.act("locatorDisarm", iz)
          },
          children: nz(`${xz}:locatorDisarm`)
        }), Ez.locatorEntryOwned && !Ez.locatorEntryArmed && (0, vz.jsx)(Zz.f, {
          disabled: uz.pending,
          onClick: () => {
            bz.act("locatorArm", iz)
          },
          children: nz(`${xz}:locatorArm`)
        }), !Ez.locatorEntryOwned && (0, vz.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, vz.jsx)(ku, {
            entry: Ez,
            coins: uz.locators.locatorCoins
          }), (0, vz.jsx)(Zz.q, {
            disabled: uz.locators.locatorCoins < Ez.locatorEntryPrice || uz.pending,
            onClick: () => {
              bz.act("locatorBuy", iz)
            },
            children: nz(`${xz}:locatorBuy`)
          })]
        }), lz && !Ez.locatorEntryArmed && (0, vz.jsx)("span", {
          className: "BoardHint",
          children: nz(`${xz}:locatorReplacesHint`, {
            name: lz.locatorEntryName
          })
        })]
      })
    }

    function ub(zz) {
      let {
        entry: uz
      } = zz;
      return "locatorUnseen" === uz.locatorEntryStanding ? (0, vz.jsx)(Tz, {
        itemName: "Compass"
      }) : (0, vz.jsx)(Lz, {
        anomalyId: uz.locatorEntryId,
        caught: "locatorContained" === uz.locatorEntryStanding
      })
    }

    function bb(zz) {
      let {
        view: uz,
        controller: bz,
        entry: Ez
      } = zz;
      const {
        t: nz
      } = (0, pz.F)(), iz = Bu[Ez.locatorEntryDifficulty];
      return (0, vz.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, vz.jsxs)("div", {
          className: Hz()("LocatorLabel", {
            Armed: Ez.locatorEntryArmed
          }),
          children: [(0, vz.jsx)(mz, {
            icon: (0, vz.jsx)(ub, {
              entry: Ez
            }),
            name: nz(`${xz}:locatorName`, {
              name: Ez.locatorEntryName
            }),
            children: (0, vz.jsx)(Yu, {
              entry: Ez
            })
          }), (0, vz.jsx)("p", {
            className: "BoardDescription",
            children: nz(Ez.locatorEntryArmed ? `${xz}:locatorFlavourArmed` : Iu[Ez.locatorEntryStanding])
          }), null !== iz && (0, vz.jsx)("p", {
            className: "LocatorAttuned",
            children: nz(iz)
          }), (0, vz.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: nz(`${xz}:locatorUsage`)
          })]
        }), (0, vz.jsx)(zb, {
          view: uz,
          controller: bz,
          entry: Ez
        })]
      })
    }

    function Eb(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Oz.h)(eu, uz.getSnapshot()),
        {
          t: Ez
        } = (0, pz.F)(),
        nz = bz.locators;
      if (null === nz) return null;
      const iz = nz.locatorEntries.find((zz => zz.locatorEntryId === bz.selectedId)),
        lz = bz.notice;
      return (0, vz.jsxs)(Az, {
        open: bz.open,
        onDismiss: uz.dismiss,
        title: Ez(`${xz}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, vz.jsx)(Cu, {}),
        headerExtra: (0, vz.jsx)(qz, {
          coins: nz.locatorCoins
        }),
        statusRefused: null === lz || void 0 === lz ? void 0 : lz.locatorNoticeRefused,
        status: (0, vz.jsxs)(vz.Fragment, {
          children: [(0, vz.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Ez(`${xz}:locatorKeeperName`)
          }), null !== lz && Ez(`${xz}:${lz.locatorNoticeKey}`, {
            name: lz.locatorNoticeName
          })]
        }),
        children: [(0, vz.jsx)("div", {
          className: "BoardTiles",
          children: nz.locatorEntries.map((zz => (0, vz.jsxs)(Vz, {
            icon: (0, vz.jsx)(ub, {
              entry: zz
            }),
            name: zz.locatorEntryName,
            selected: zz === iz,
            locked: !1,
            className: Hz()("LocatorTag", {
              Armed: zz.locatorEntryArmed
            }),
            onSelect: () => {
              uz.select(zz.locatorEntryId)
            },
            children: [(0, vz.jsx)(Yu, {
              entry: zz
            }), !zz.locatorEntryOwned && (0, vz.jsx)(ku, {
              entry: zz,
              coins: nz.locatorCoins,
              inTile: !0
            })]
          }, zz.locatorEntryId)))
        }), (0, vz.jsx)(bb, {
          view: bz,
          controller: uz,
          entry: iz
        })]
      })
    }

    function nb(zz) {
      let {
        loadout: uz,
        codex: bz,
        locator: Ez
      } = zz;
      return (0, vz.jsxs)(vz.Fragment, {
        children: [(0, vz.jsx)(yu, {
          controller: uz
        }), (0, vz.jsx)(Yz, {
          controller: bz
        }), (0, vz.jsx)(Eb, {
          controller: Ez
        })]
      })
    }
    var ib = bz(37929);
    class lb {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = zz, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new ib.e({
          spacingMs: 0,
          now: uz
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(zz, uz) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, uz(), this.notify()
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
    var Mb = bz(37926);
    const tb = new Map([
      ["npc_general", Ru],
      ["npc_tentacle_guy", Mb]
    ]);

    function Hb(zz) {
      const uz = tb.get(zz);
      if (void 0 === uz) return null;
      const bz = document.createElement("img");
      return bz.src = uz, bz.alt = "", bz.draggable = !1, bz.style.imageRendering = "pixelated", bz
    }
    const Ob = function() {
      let zz, uz = !1,
        bz = null,
        tz = null;
      const Hz = [],
        Oz = zz => {
          for (const uz of Hz) uz !== zz && uz.close();
          (0, Mz.p)()
        },
        pz = zz => {
          zz && (0, Mz.l)()
        },
        dz = new lb((uz => {
          zz.sendCommand(uz)
        })),
        Fz = new Fu((zz => {
          lz.k.sK(du, zz, !0)
        }), Oz, pz, dz),
        Zz = new cz((zz => {
          lz.k.sK(Uz, zz, !0)
        }), Oz, pz),
        Rz = new ju((zz => {
          lz.k.sK(eu, zz, !0)
        }), Oz, pz, dz);
      Hz.push(Fz, Zz, Rz);
      return {
        onCreate: uz => {
          zz = uz, bz = (0, Mz.x)(null, {
            content: (0, Ez.createElement)(nb, {
              loadout: Fz,
              codex: Zz,
              locator: Rz
            }),
            onClose: () => {
              for (const zz of Hz) zz.close()
            }
          }), tz = (0, iz.f)(Hb)
        },
        onReceivedMessageFromServer: (zz, uz) => {
          "containmentLoadout" === zz ? Fz.WZ(uz) : "containmentLoadoutClose" === zz ? Fz.isOpen() && (Fz.close(), (0, Mz.i)()) : "containmentCodex" === zz ? Zz.WZ(uz) : "containmentLocator" === zz && Rz.WZ(uz)
        },
        sd: () => {
          uz || nz.e.get("loadingOverlayVisible") || (uz = !0, zz.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var zz, uz;
          null === (zz = bz) || void 0 === zz || zz(), bz = null, null === (uz = tz) || void 0 === uz || uz(), tz = null;
          for (const bz of Hz) bz.dispose();
          dz.dispose()
        }
      }
    }
  },
  36319: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Vz,
      C: () => Uz,
      b: () => tz,
      e: () => Tz,
      h: () => Mz,
      i: () => az,
      l: () => Jz,
      o: () => oz,
      r: () => Gz,
      s: () => Pz,
      t: () => xz,
      v: () => mz,
      w: () => qz,
      y: () => hz
    });
    var Ez = bz(33);
    const nz = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      iz = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      lz = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Mz = iz.filter((zz => "docsButton" !== zz)),
      tz = lz.filter((zz => "aiHelperButton" !== zz)),
      Hz = "codeEditorTutorials",
      Oz = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      pz = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let dz = null,
      Fz = null;
    const Zz = new Set,
      Rz = new Set;
    let Kz = null;
    const wz = new Set,
      Xz = new Set;

    function fz() {
      Xz.forEach((zz => {
        zz()
      }))
    }

    function sz() {
      if (!dz) {
        const zz = Ez.g.getItem(Hz);
        dz = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof zz && null !== zz ? zz : {}
        }
      }
      return dz
    }

    function rz(zz) {
      const uz = sz();
      uz[zz] || (dz = {
        ...uz,
        [zz]: !0
      }, Ez.g.setItem(Hz, dz))
    }

    function oz(zz) {
      return "docsOverview" === zz ? iz : "aiHelperOverview" === zz ? lz : Fz ? nz[Fz] : []
    }

    function Nz(zz) {
      return ("worldCodeButton" !== zz || !sz().worldCodeIntroShown) && !wz.has(zz)
    }

    function vz(zz) {
      var uz;
      return (null === (uz = Kz) || void 0 === uz ? void 0 : uz.name) === zz ? Kz.stepsDone : Zz
    }

    function xz(zz, uz) {
      if (! function(zz) {
          return Kz ? Kz.name === zz : "welcome" === zz
        }(zz) || !Nz(uz) || vz(zz).has(uz)) return !1;
      if (Kz) return !0;
      const bz = Oz[uz];
      return bz ? !sz()[bz] || Rz.has(uz) : !sz()[pz[zz]]
    }

    function Jz(zz) {
      var uz;
      return null !== (uz = oz(zz).find((uz => xz(zz, uz)))) && void 0 !== uz ? uz : null
    }

    function Az(zz) {
      var uz;
      rz(pz[zz]), (null === (uz = Kz) || void 0 === uz ? void 0 : uz.name) === zz && (Kz = null)
    }

    function Tz(zz) {
      const uz = (Kz ? [Kz.name] : ["welcome", "docsOverview"]).find((uz => Jz(uz) === zz));
      if (!uz) return;
      vz(uz).add(zz);
      const bz = Oz[zz];
      bz && (rz(bz), Kz || Rz.add(zz)), null === Jz(uz) && Az(uz), fz()
    }

    function Lz(zz, uz) {
      const bz = oz(zz),
        Ez = vz(zz);
      for (let nz = bz.indexOf(uz) - 1; nz >= 0; nz--)
        if (Ez.has(bz[nz]) && Nz(bz[nz])) return bz[nz];
      return null
    }

    function Pz(zz, uz) {
      return null !== Lz(zz, uz)
    }

    function Gz(zz, uz) {
      const bz = Lz(zz, uz);
      bz && (vz(zz).delete(bz), fz())
    }

    function az(zz) {
      Az(zz), "welcome" === zz && oz("welcome").forEach((zz => {
        const uz = Oz[zz];
        uz && rz(uz)
      })), fz()
    }

    function Vz(zz) {
      Kz = {
        name: zz,
        stepsDone: new Set
      }, fz()
    }

    function mz() {
      (Kz || 0 !== Zz.size || 0 !== Rz.size) && (Kz = null, Zz.clear(), Rz.clear(), fz())
    }

    function qz(zz, uz) {
      const bz = uz ? zz : Fz === zz ? null : Fz;
      bz !== Fz && (Fz = bz, fz())
    }

    function hz(zz, uz) {
      wz.has(zz) === uz && (uz ? wz.delete(zz) : wz.add(zz), fz())
    }

    function Uz(zz) {
      return Xz.add(zz), () => {
        Xz.delete(zz)
      }
    }
  },
  38648: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38657: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38661: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38666: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38672: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38678: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38682: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38687: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38693: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38702: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38709: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38717: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38721: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38730: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38738: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38747: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38752: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38755: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38762: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38771: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  37926: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);