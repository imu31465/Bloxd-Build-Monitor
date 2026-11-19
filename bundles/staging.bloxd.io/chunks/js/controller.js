export const id = 28;
export const ids = [28];
export const modules = {
  7911: (zz, uz, bz) => {
    var Ez = {
      "./nintendo/A.svg": 7915,
      "./nintendo/B.svg": 7918,
      "./nintendo/Down.svg": 7927,
      "./nintendo/Home.svg": 7929,
      "./nintendo/LB.svg": 7938,
      "./nintendo/LS.svg": 7940,
      "./nintendo/LT.svg": 7946,
      "./nintendo/Left.svg": 7949,
      "./nintendo/LeftStick.svg": 7953,
      "./nintendo/Menu.svg": 7956,
      "./nintendo/RB.svg": 7960,
      "./nintendo/RS.svg": 7967,
      "./nintendo/RT.svg": 7974,
      "./nintendo/Right.svg": 7980,
      "./nintendo/RightStick.svg": 7988,
      "./nintendo/Up.svg": 7994,
      "./nintendo/View.svg": 8001,
      "./nintendo/X.svg": 8010,
      "./nintendo/Y.svg": 8016,
      "./playstation/A.svg": 8025,
      "./playstation/B.svg": 8032,
      "./playstation/Down.svg": 8034,
      "./playstation/Home.svg": 8038,
      "./playstation/LB.svg": 8040,
      "./playstation/LS.svg": 8048,
      "./playstation/LT.svg": 8051,
      "./playstation/Left.svg": 8055,
      "./playstation/LeftStick.svg": 8058,
      "./playstation/Menu.svg": 8060,
      "./playstation/RB.svg": 8062,
      "./playstation/RS.svg": 8064,
      "./playstation/RT.svg": 8067,
      "./playstation/Right.svg": 8075,
      "./playstation/RightStick.svg": 8084,
      "./playstation/Up.svg": 8093,
      "./playstation/View.svg": 8098,
      "./playstation/X.svg": 8100,
      "./playstation/Y.svg": 8108,
      "./steamdeck/A.svg": 8114,
      "./steamdeck/B.svg": 8120,
      "./steamdeck/Down.svg": 8126,
      "./steamdeck/Home.svg": 8134,
      "./steamdeck/LB.svg": 8143,
      "./steamdeck/LS.svg": 8147,
      "./steamdeck/LT.svg": 8152,
      "./steamdeck/Left.svg": 8159,
      "./steamdeck/LeftStick.svg": 8163,
      "./steamdeck/Menu.svg": 8167,
      "./steamdeck/RB.svg": 8173,
      "./steamdeck/RS.svg": 8176,
      "./steamdeck/RT.svg": 8179,
      "./steamdeck/Right.svg": 8184,
      "./steamdeck/RightStick.svg": 8192,
      "./steamdeck/Up.svg": 8197,
      "./steamdeck/View.svg": 8205,
      "./steamdeck/X.svg": 8214,
      "./steamdeck/Y.svg": 8218,
      "./xbox/A.svg": 8227,
      "./xbox/B.svg": 8234,
      "./xbox/Down.svg": 8236,
      "./xbox/Home.svg": 8240,
      "./xbox/LB.svg": 8247,
      "./xbox/LS.svg": 8255,
      "./xbox/LT.svg": 8257,
      "./xbox/Left.svg": 8261,
      "./xbox/LeftStick.svg": 8263,
      "./xbox/Menu.svg": 8267,
      "./xbox/RB.svg": 8272,
      "./xbox/RS.svg": 8276,
      "./xbox/RT.svg": 8282,
      "./xbox/Right.svg": 8288,
      "./xbox/RightStick.svg": 8291,
      "./xbox/Up.svg": 8297,
      "./xbox/View.svg": 8301,
      "./xbox/X.svg": 8305,
      "./xbox/Y.svg": 8312
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
    }, nz.resolve = iz, zz.exports = nz, nz.id = 7911
  },
  4746: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Zz,
      e: () => fz,
      f: () => Rz,
      j: () => Xz
    });
    var Ez = bz(56),
      nz = bz(4753),
      iz = bz(4144),
      lz = bz(1332),
      Mz = bz(4770),
      tz = bz(1038),
      Hz = bz.n(tz),
      Oz = bz(1322),
      pz = bz(1673),
      dz = bz(4776),
      Fz = bz(1089);

    function Zz(zz) {
      let {
        label: uz,
        onClick: bz,
        checked: Ez,
        circleInfoText: nz,
        className: Mz,
        disabled: tz,
        note: Oz
      } = zz;
      return (0, Fz.jsxs)("div", {
        "aria-disabled": tz || void 0,
        "data-pad-focusable": !0,
        className: Hz()("SettingBox CheckboxContainer", {
          [Mz]: Mz,
          SettingBoxDisabled: tz
        }),
        onClick: () => {
          tz || bz(!Ez)
        },
        children: [(0, Fz.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Fz.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Fz.jsx)(iz.b, {
              className: "SettingsCheckbox",
              checked: Ez,
              disabled: tz,
              onChange: () => {}
            })
          }), (0, Fz.jsxs)("div", {
            className: "CheckboxText",
            children: [uz, nz && (0, Fz.jsx)("span", {
              onClick: zz => zz.stopPropagation(),
              children: (0, Fz.jsx)(lz.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: nz
              })
            })]
          })]
        }), Oz && (0, Fz.jsx)("div", {
          className: "SettingNote",
          children: Oz
        })]
      })
    }

    function Rz(zz) {
      let {
        name: uz,
        onChange: bz,
        min: nz,
        max: iz,
        step: Mz,
        initValue: tz,
        circleInfoText: Oz,
        format: pz,
        className: dz,
        padStep: Zz,
        disabled: Rz = !1,
        selectableMax: Kz,
        cappedNote: Xz,
        onChangeComplete: fz
      } = zz;
      const [sz, rz] = (0, Ez.useState)(tz), oz = (0, Ez.useRef)(tz);
      (0, Ez.useEffect)((() => {
        oz.current = tz, rz(tz)
      }), [tz]);
      const Nz = void 0 !== Kz && Kz < iz,
        vz = Nz ? {
          "--slider-selectable": (Kz - nz) / (iz - nz)
        } : void 0;
      return (0, Fz.jsxs)("div", {
        className: Hz()("SettingBox SettingsSliderDiv", {
          [dz]: dz,
          SettingBoxDisabled: Rz,
          SliderCapped: Nz
        }),
        style: vz,
        children: [(0, Fz.jsxs)("div", {
          className: "SliderText",
          children: [`${uz}: ${pz?pz(sz):sz}`, Oz && (0, Fz.jsx)(lz.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Oz
          })]
        }), (0, Fz.jsx)("div", {
          className: "SliderDiv",
          children: (0, Fz.jsx)(wz, {
            value: sz,
            min: nz,
            max: iz,
            step: Mz,
            onChange: zz => {
              if (Nz && zz >= Kz && sz === Kz) return;
              const uz = Nz ? Math.min(zz, Kz) : zz;
              oz.current = uz, rz(uz), bz(uz)
            },
            onChangeComplete: fz && (() => {
              fz(oz.current)
            }),
            format: pz,
            padStep: Zz,
            disabled: Rz
          })
        }), Nz && Xz && (0, Fz.jsx)("div", {
          className: "SettingNote",
          children: Xz
        })]
      })
    }
    const Kz = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function wz(zz) {
      var uz;
      let {
        value: bz,
        min: iz,
        max: lz,
        step: Mz,
        onChange: tz,
        orientation: Hz,
        reverse: Oz,
        setIsChanging: pz,
        tooltip: Zz,
        labels: Rz,
        handleLabel: wz,
        format: Xz,
        onChangeStart: fz,
        onChangeComplete: sz,
        padStep: rz,
        disabled: oz = !1
      } = zz;
      const Nz = (0, Ez.useRef)(null),
        vz = (0, Ez.useRef)(null);
      (0, Ez.useLayoutEffect)((() => {
        var zz, uz, bz;
        const Ez = null !== (zz = null === (uz = Nz.current) || void 0 === uz ? void 0 : uz.querySelector(".rangeslider")) && void 0 !== zz ? zz : null;
        null === Ez || void 0 === Ez || Ez.setAttribute("data-pad-slider", ""), null === Ez || void 0 === Ez || Ez.setAttribute("data-pad-focusable", ""), null === Ez || void 0 === Ez || null === (bz = Ez.querySelector(".rangeslider__handle")) || void 0 === bz || bz.setAttribute("data-pad-slider-handle", ""), vz.current = Ez
      }), []), (0, Ez.useLayoutEffect)((() => {
        var zz, uz;
        oz ? null === (zz = vz.current) || void 0 === zz || zz.setAttribute("aria-disabled", "true") : null === (uz = vz.current) || void 0 === uz || uz.removeAttribute("aria-disabled")
      }), [oz]);
      const xz = (null !== (uz = String(Mz).split(".")[1]) && void 0 !== uz ? uz : "").length,
        Jz = zz => {
          const uz = Number((Math.round((zz - iz) / Mz) * Mz + iz).toFixed(xz));
          return Math.min(lz, Math.max(iz, uz))
        },
        Az = (0, Ez.useRef)(sz);
      Az.current = sz, (0, Ez.useEffect)((() => {
        const zz = Nz.current;
        if (!zz) return;
        const uz = zz => {
          var uz;
          Kz.has(zz.key) && (null === (uz = Az.current) || void 0 === uz || uz.call(Az))
        };
        return zz.addEventListener("keyup", uz), () => {
          zz.removeEventListener("keyup", uz)
        }
      }), []);
      const Tz = (0, Ez.useRef)(!1);
      return (0, dz.f)(vz, {
        adjust: zz => {
          if (oz) return;
          const uz = null !== rz && void 0 !== rz ? rz : Math.max(Mz, Math.round((lz - iz) / 20 / Mz) * Mz),
            Ez = Jz(bz + zz * uz * (Oz ? -1 : 1));
          Ez !== bz && (null === fz || void 0 === fz || fz(), tz(Ez), null === sz || void 0 === sz || sz())
        },
        setFraction: zz => {
          if (oz) return;
          const uz = Jz(iz + (Oz ? 1 - zz : zz) * (lz - iz));
          uz !== bz && (Tz.current || (Tz.current = !0, null === fz || void 0 === fz || fz()), tz(uz))
        },
        endDrag: () => {
          Tz.current && (Tz.current = !1, null === sz || void 0 === sz || sz())
        }
      }), (0, Fz.jsx)("div", {
        ref: Nz,
        style: {
          display: "contents"
        },
        children: (0, Fz.jsx)(nz.c, {
          value: bz,
          min: iz,
          max: lz,
          step: Mz,
          onChange: tz,
          orientation: Hz,
          reverse: Oz,
          tooltip: Zz,
          labels: Rz,
          handleLabel: wz,
          format: Xz,
          onChangeStart: () => {
            null === fz || void 0 === fz || fz(), null === pz || void 0 === pz || pz(!0)
          },
          onChangeComplete: () => {
            null === pz || void 0 === pz || pz(!1), null === sz || void 0 === sz || sz()
          }
        })
      })
    }
    async function Xz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const uz = Oz.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: zz
      });
      !0 === await uz.getResult() && (0, pz.reloadBloxd)()
    }

    function fz(zz) {
      let {
        label: uz,
        options: bz,
        value: Ez,
        onChange: nz,
        circleInfoText: iz
      } = zz;
      return (0, Fz.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Fz.jsxs)("div", {
          className: "SliderText",
          children: [uz, iz && (0, Fz.jsx)(lz.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: iz
          })]
        }), (0, Fz.jsx)(Mz.d, {
          ariaLabel: uz,
          options: bz,
          value: Ez,
          onChange: nz
        })]
      })
    }
  },
  4770: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(1089);

    function lz(zz) {
      let {
        options: uz,
        value: bz,
        onChange: Ez,
        ariaLabel: lz,
        className: Mz,
        reselectable: tz = !1,
        keepsFocus: Hz = !1
      } = zz;
      return (0, iz.jsx)("div", {
        className: nz()("SegmentedToggle", Mz),
        role: "group",
        "aria-label": lz,
        children: uz.map((zz => {
          const uz = zz.value === bz;
          return (0, iz.jsx)("button", {
            type: "button",
            "aria-pressed": uz,
            "aria-label": zz.ariaLabel,
            title: zz.ariaLabel,
            className: nz()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: uz
            }),
            onMouseDown: Hz ? zz => {
              zz.preventDefault()
            } : void 0,
            onClick: () => {
              uz && !tz || Ez(zz.value)
            },
            children: zz.label
          }, zz.value)
        }))
      })
    }
  },
  7859: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => iz,
      g: () => dz,
      h: () => pz,
      l: () => Hz,
      o: () => Mz,
      r: () => Ez,
      s: () => Fz,
      w: () => Zz
    });
    const Ez = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      nz = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Ez
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      iz = {
        jump: "A",
        sneak: "B",
        sneakToggle: "RS",
        sprint: "LS",
        attack: "RT",
        use: "LT",
        hotbarPrevious: "LB",
        hotbarNext: "RB",
        inventory: "Y",
        actionButton: "X",
        perspective: "Up",
        pickBlock: "Up",
        drop: "Down",
        emoteWheel: "Left",
        chat: "Right",
        pause: "Menu",
        leaderboard: "View",
        menuConfirm: "A",
        menuBack: "B",
        menuTabPrevious: "LB",
        menuTabNext: "RB",
        menuPageUp: "LT",
        menuPageDown: "RT",
        menuSecondary: "X",
        menuToggleCursor: "LS",
        inventoryPrimary: "A",
        inventorySecondary: "X",
        inventoryQuickMove: "RS",
        inventoryClose: "B",
        inventoryPanelPrevious: "LB",
        inventoryPanelNext: "RB",
        inventoryDrop: "View",
        inventoryHotbarSwap: "LS",
        keyboardType: "A",
        keyboardBackspace: "X",
        keyboardSpace: "Y",
        keyboardCaretLeft: "LB",
        keyboardCaretRight: "RB",
        keyboardShift: "LT",
        keyboardSymbols: "RT",
        keyboardSubmit: "Menu",
        keyboardClose: "B",
        keyboardChannel: "View"
      },
      lz = ["pickBlock", "perspective"],
      Mz = zz => lz.includes(zz) ? lz : [zz],
      tz = Object.fromEntries(nz.flatMap((zz => {
        let {
          group: uz,
          actions: bz
        } = zz;
        return bz.map((zz => [zz, uz]))
      }))),
      Hz = zz => tz[zz],
      Oz = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      pz = zz => {
        var uz;
        return [Hz(zz), ...null !== (uz = Oz[zz]) && void 0 !== uz ? uz : []]
      },
      dz = new Set(["menu", "inventory", "keyboard"]),
      Fz = {
        jump: "jump",
        crouch: "sneak",
        sprint: "sprint",
        "primary-fire": "attack",
        "alt-fire": "use",
        SpecialAction1: "actionButton",
        SpecialAction2: "actionButton",
        ReloadGun: "actionButton",
        DropItem: "drop",
        SwapCameraZoom: "perspective",
        "mid-fire": "pickBlock",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      Zz = new Set(["forward", "backward", "left", "right"])
  },
  7851: (zz, uz, bz) => {
    bz.d(uz, {
      B: () => vz,
      F: () => fz,
      H: () => Jz,
      K: () => Oz,
      L: () => xz,
      P: () => Lz,
      e: () => Xz,
      h: () => rz,
      i: () => dz,
      l: () => Fz,
      o: () => Gz,
      q: () => Tz,
      u: () => Az,
      w: () => sz,
      y: () => Pz
    });
    var Ez = bz(7859),
      nz = bz(7863),
      iz = bz(7837),
      lz = bz(7877);
    const Mz = zz => "pickBlock" === zz ? "perspective" : zz,
      tz = (zz, uz) => {
        var bz;
        const nz = Mz(uz);
        return null !== (bz = zz[nz]) && void 0 !== bz ? bz : Ez.e[nz]
      },
      Hz = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((zz => {
        let [uz, bz] = zz;
        return [
          [uz, bz],
          [bz, uz]
        ]
      }))),
      Oz = (zz, uz) => null !== zz && void 0 !== zz ? zz : "nintendo" === uz,
      pz = zz => Oz((0, nz.g)().swapConfirmBack, (0, nz.k)()) && Hz.get(zz) || zz,
      dz = zz => tz((0, nz.g)().bindings, pz(zz)),
      Fz = zz => Ez.e[pz(zz)],
      Zz = Object.keys(Ez.e),
      Rz = zz => "gameplay" === (0, Ez.l)(zz) ? ["gameplay"] : (0, Ez.h)(zz),
      Kz = (zz, uz) => {
        const bz = Rz(uz);
        return Rz(zz).some((zz => bz.includes(zz)))
      },
      wz = (zz, uz, bz) => {
        const nz = tz(zz, uz),
          lz = new Set((0, Ez.o)(uz)),
          Hz = [...lz];
        for (let Ez = Hz.pop(); Ez; Ez = Hz.pop())
          for (const uz of Zz) {
            const iz = tz(zz, uz);
            lz.has(uz) || iz !== bz && iz !== nz || !Kz(Ez, uz) || (lz.add(uz), Hz.push(uz))
          }
        const Oz = {
          ...zz
        };
        for (const pz of lz) {
          const uz = tz(zz, pz) === nz ? bz : nz,
            lz = (0, Ez.h)(pz).some((zz => Ez.g.has(zz)));
          if ((0, iz.O)(uz) && lz) return null;
          Oz[Mz(pz)] = uz
        }
        for (const iz of Object.keys(Oz)) Oz[iz] === Ez.e[iz] && delete Oz[iz];
        return Oz
      },
      Xz = (zz, uz) => null !== wz((0, nz.g)().bindings, pz(zz), uz),
      fz = (zz, uz) => {
        if (dz(zz) === uz) return !0;
        const bz = wz((0, nz.g)().bindings, pz(zz), uz);
        return !!bz && ((0, nz.o)({
          bindings: bz
        }), !0)
      },
      sz = (zz, uz) => {
        const bz = (0, Ez.o)(uz);
        return Zz.filter((uz => Mz(uz) === uz && !bz.includes(uz) && tz(zz, pz(uz)) !== dz(uz)))
      },
      rz = ["southpaw", "triggersSwapped"],
      oz = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Nz = zz => Object.keys(oz[zz]),
      vz = (zz, uz) => "southpaw" === zz ? uz.swapSticks : Nz(zz).every((bz => tz(uz.bindings, bz) === oz[zz][bz])),
      xz = (zz, uz) => {
        const bz = (0, nz.g)();
        let iz = bz.bindings;
        for (const nz of Nz(zz)) {
          const bz = uz ? oz[zz][nz] : Ez.e[nz];
          if (iz = wz(iz, nz, bz), !iz) return !1
        }
        return (0, nz.o)({
          swapSticks: "southpaw" === zz ? uz : bz.swapSticks,
          bindings: iz
        }), !0
      },
      Jz = () => {
        (0, nz.o)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Az = () => (0, nz.g)().swapSticks ? "RightStick" : "LeftStick",
      Tz = () => (0, nz.g)().swapSticks ? "LeftStick" : "RightStick",
      Lz = zz => (0, nz.g)().swapSticks && (0, iz.O)(zz),
      Pz = zz => Lz(zz) ? Az() : Tz(),
      Gz = zz => {
        if (Ez.w.has(zz)) return Az();
        const uz = Ez.s[zz];
        return uz && ("leaderboard" !== uz || (0, lz.g)(zz, (0, lz.e)())) ? dz(uz) : null
      }
  },
  7833: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      ControllerCategory: () => Ft,
      ControllerGlyph: () => wi,
      ControllerRoot: () => FM,
      PadLobbyShortcuts: () => LM,
      PadSneakChip: () => sM,
      PadTooltip: () => oM,
      attachPressToContinue: () => UM,
      getBoundButton: () => Oz.i,
      getControllerSettings: () => dz.g,
      getGlyphForNoaAction: () => Oz.o,
      getInventoryCursorState: () => Rt,
      getMenuShortcutButton: () => mE,
      getPadGlyphIconName: () => wM,
      getPadGlyphIconUrl: () => XM,
      getPadRepeatTiming: () => Rz.h,
      handOverPadFocus: () => wt,
      hasActivePad: () => Zt,
      isPadSteppingSlots: () => Kt
    });
    const Ez = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var nz = bz(1181),
      iz = bz(1377),
      lz = bz(7835),
      Mz = bz(79),
      tz = bz(20),
      Hz = bz(22),
      Oz = bz(7851),
      pz = bz(7879),
      dz = bz(7863),
      Fz = bz(7888),
      Zz = bz(7837),
      Rz = bz(8326),
      Kz = bz(8328),
      wz = bz(1613);
    const Xz = (zz, uz, bz) => Math.max(uz, Math.min(bz, zz)),
      fz = zz => Math.min(zz.width, zz.height) / 720,
      sz = zz => Math.max(.15, zz);
    class rz {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(zz, uz) {
        const bz = Math.hypot(zz.x, zz.y) >= (zz => Math.max(.3, zz))(uz);
        return this.locked ? (this.locked = bz, !1) : bz
      }
    }
    const oz = (zz, uz) => {
        const bz = Xz(uz.dtMs, 0, 100),
          Ez = bz / 1e3,
          nz = fz(uz.viewport) * (uz.cursorSpeedPercent / 100),
          iz = (0, Zz.m)(uz.stick, sz(uz.moveDeadzone)),
          lz = Math.hypot(iz.x, iz.y),
          Mz = ((zz, uz, bz) => {
            if (uz < .3) return 0;
            const Ez = bz / 350;
            return uz >= .85 ? Math.min(1, zz + Ez) : Math.max(0, zz - Ez)
          })(zz.speedRamp, lz, bz);
        let tz = zz.x,
          Hz = zz.y;
        if (lz > 0) {
          const zz = .45 + .55 * Mz,
            bz = uz.context.overInteractive ? .45 : 1,
            Oz = 1400 * (zz => {
              const uz = Xz(zz, 0, 1);
              return .3 * uz + .7 * uz * uz
            })(lz) * nz * zz * bz;
          tz += iz.x / lz * Oz * Ez, Hz += iz.y / lz * Oz * Ez
        }
        const Oz = Math.hypot(uz.dpad.x, uz.dpad.y);
        if (Oz > 0) {
          const zz = 500 * nz;
          tz += uz.dpad.x / Oz * zz * Ez, Hz += uz.dpad.y / Oz * zz * Ez
        }
        const pz = uz.context.magnetTarget;
        if (pz && lz < .3 && 0 === Oz) {
          const zz = ((zz, uz, bz, Ez, nz) => {
            const iz = uz.x - zz.x,
              lz = uz.y - zz.y,
              Mz = Math.hypot(iz, lz);
            if (0 === Mz) return {
              x: 0,
              y: 0
            };
            const tz = Math.min(Mz, nz * (1 - Ez / .3));
            let Hz = iz / Mz * tz,
              Oz = lz / Mz * tz;
            if (Ez > 0) {
              const zz = bz.x / Ez,
                uz = bz.y / Ez,
                nz = Hz * zz + Oz * uz;
              nz < 0 && (Hz -= nz * zz, Oz -= nz * uz)
            }
            return {
              x: Hz,
              y: Oz
            }
          })({
            x: tz,
            y: Hz
          }, pz, iz, lz, 120 * fz(uz.viewport) * Ez);
          tz += zz.x, Hz += zz.y
        }
        return {
          x: Xz(tz, 0, Math.max(0, uz.viewport.width - 1)),
          y: Xz(Hz, 0, Math.max(0, uz.viewport.height - 1)),
          speedRamp: Mz
        }
      },
      Nz = zz => {
        const uz = (0, Zz.m)(zz, .2);
        return 0 !== uz.x || 0 !== uz.y
      },
      vz = (zz, uz) => {
        const bz = (0, Zz.m)(zz, .2),
          Ez = Math.hypot(bz.x, bz.y);
        if (0 === Ez) return {
          x: 0,
          y: 0
        };
        const nz = Ez * Ez * 1600,
          iz = Xz(uz, 0, 100) / 1e3;
        return {
          x: bz.x / Ez * nz * iz,
          y: bz.y / Ez * nz * iz
        }
      },
      xz = (zz, uz) => "y" === uz ? zz.scrollHeight > zz.clientHeight + 1 : zz.scrollWidth > zz.clientWidth + 1,
      Jz = (zz, uz) => {
        if (!xz(zz, uz)) return !1;
        const bz = getComputedStyle(zz),
          Ez = "y" === uz ? bz.overflowY : bz.overflowX;
        return "auto" === Ez || "scroll" === Ez
      },
      Az = (zz, uz, bz) => {
        for (let iz = zz instanceof HTMLElement ? zz : null !== (Ez = null === zz || void 0 === zz ? void 0 : zz.parentElement) && void 0 !== Ez ? Ez : null; iz; iz = iz.parentElement) {
          var Ez;
          if (Jz(iz, uz)) return iz;
          if (iz === bz) return null
        }
        if (bz) return null;
        const nz = document.scrollingElement;
        return nz instanceof HTMLElement && xz(nz, uz) ? nz : null
      },
      Tz = new WeakMap,
      Lz = (zz, uz) => {
        const bz = performance.now(),
          Ez = Tz.get(zz);
        if (Ez && Ez.axis === uz && bz - Ez.atMs < 500 && (!Ez.container || Ez.container.isConnected)) return Ez.container;
        const nz = Pz(zz, uz);
        return Tz.set(zz, {
          axis: uz,
          atMs: bz,
          container: nz
        }), nz
      },
      Pz = (zz, uz) => {
        let bz = Jz(zz, uz) ? zz : null,
          Ez = bz ? bz.clientWidth * bz.clientHeight : 0;
        for (const nz of zz.querySelectorAll("*")) {
          const zz = nz.clientWidth * nz.clientHeight;
          zz > Ez && Jz(nz, uz) && (bz = nz, Ez = zz)
        }
        return bz
      },
      Gz = (zz, uz, bz) => "y" === uz ? bz < 0 ? zz.scrollTop > 0 : zz.scrollTop + zz.clientHeight < zz.scrollHeight - 1 : bz < 0 ? zz.scrollLeft > 0 : zz.scrollLeft + zz.clientWidth < zz.scrollWidth - 1,
      az = (zz, uz, bz) => {
        "y" === uz ? zz.scrollBy({
          top: bz,
          behavior: "instant"
        }) : zz.scrollBy({
          left: bz,
          behavior: "instant"
        })
      },
      Vz = zz => {
        if (!zz || zz === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const uz = zz.getBoundingClientRect(),
          bz = Math.max(0, uz.left),
          Ez = Math.max(0, uz.top);
        return new DOMRect(bz, Ez, Math.min(window.innerWidth, uz.right) - bz, Math.min(window.innerHeight, uz.bottom) - Ez)
      },
      mz = (zz, uz) => zz.left < uz.right && uz.left < zz.right && zz.top < uz.bottom && uz.top < zz.bottom;
    var qz = bz(56),
      hz = bz(1038),
      Uz = bz.n(hz),
      cz = bz(1089);
    let gz = 0,
      Sz = !1;
    class yz {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(zz) {
        this.element = zz, this.shownKey = "", this.gap = null
      }
      show(zz) {
        const uz = this.element;
        if (!uz) return;
        const bz = zz ? this.keepOnScreen(uz, zz) : null,
          Ez = bz ? `${bz.left},${bz.top},${bz.width},${bz.height}` : "";
        if (Ez === this.shownKey) return;
        const nz = "" === this.shownKey;
        this.shownKey = Ez, uz.classList.toggle("Visible", null !== bz), bz && (uz.classList.toggle("Snap", nz), uz.style.width = `${bz.width}px`, uz.style.height = `${bz.height}px`, uz.style.transform = `translate(${bz.left}px, ${bz.top}px)`, nz && (uz.offsetWidth, uz.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(zz, uz) {
        var bz;
        const Ez = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Sz){Sz=!0;const zz=document.createElement("div");zz.setAttribute("aria-hidden","true"),zz.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(zz),new ResizeObserver((()=>{gz++})).observe(zz)}return String(gz)})()}`;
        (null === (bz = this.gap) || void 0 === bz ? void 0 : bz.key) !== Ez && (this.gap = {
          px: parseFloat(getComputedStyle(zz).paddingLeft) || 0,
          key: Ez
        });
        const nz = this.gap.px + 2,
          iz = Math.max(uz.left, nz),
          lz = Math.max(uz.top, nz),
          Mz = Math.min(uz.left + uz.width, window.innerWidth - nz),
          tz = Math.min(uz.top + uz.height, window.innerHeight - nz);
        return Mz <= iz || tz <= lz ? uz : {
          left: iz,
          top: lz,
          width: Mz - iz,
          height: tz - lz
        }
      }
    }
    const Dz = zz => {
      let {
        placer: uz,
        className: bz
      } = zz;
      const Ez = (0, qz.useCallback)((zz => {
        uz.setElement(zz)
      }), [uz]);
      return (0, cz.jsx)("div", {
        ref: Ez,
        className: Uz()("PadReticle", bz),
        "aria-hidden": !0
      })
    };
    var Qz = bz(8337),
      Wz = bz(1681);
    const ez = zz => zz >= 56320 && zz <= 57343,
      jz = zz => zz >= 55296 && zz <= 56319,
      Iz = (zz, uz) => uz >= 2 && ez(zz.charCodeAt(uz - 1)) && jz(zz.charCodeAt(uz - 2)) ? uz - 2 : Math.max(0, uz - 1),
      Bz = (zz, uz) => {
        let bz;
        var Ez, nz;
        return bz = zz.start !== zz.end ? uz < 0 ? zz.start : zz.end : uz < 0 ? Iz(zz.value, zz.start) : (Ez = zz.value, (nz = zz.start) + 1 < Ez.length && jz(Ez.charCodeAt(nz)) && ez(Ez.charCodeAt(nz + 1)) ? nz + 2 : Math.min(Ez.length, nz + 1)), {
          value: zz.value,
          start: bz,
          end: bz
        }
      },
      Cz = ["text", "search", "url", "email", "tel", "password", "number"],
      Yz = zz => !(!(0, Wz.b)(zz) || zz.isContentEditable || zz.hasAttribute("data-pad-no-osk")) && (zz instanceof HTMLTextAreaElement || zz instanceof HTMLInputElement && Cz.includes(zz.type)),
      kz = zz => null !== zz.selectionStart,
      zu = zz => {
        var uz, bz;
        const {
          value: Ez
        } = zz;
        return {
          value: Ez,
          start: null !== (uz = zz.selectionStart) && void 0 !== uz ? uz : Ez.length,
          end: null !== (bz = zz.selectionEnd) && void 0 !== bz ? bz : Ez.length
        }
      },
      uu = (zz, uz, bz) => {
        if (zz.readOnly) return;
        const Ez = zz instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Ez, "value").set.call(zz, uz.value), kz(zz) && zz.setSelectionRange(uz.start, uz.end), (0, wz.h)(zz, new InputEvent("input", {
          bubbles: !0,
          inputType: bz
        }))
      };
    let bu = !1;
    const Eu = (zz, uz) => !!document.execCommand(zz, !1, uz) || (bu || (bu = !0, console.warn(`execCommand("${zz}") failed; the on-screen keyboard is setting the value directly`)), !1),
      nu = (zz, uz) => {
        Eu("insertText", uz) || uu(zz, function(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Ez = zz.value.slice(0, zz.start),
            nz = zz.value.slice(zz.end);
          let iz = bz < 0 ? uz.length : Math.max(0, bz - Ez.length - nz.length);
          iz > 0 && iz < uz.length && jz(uz.charCodeAt(iz - 1)) && iz--;
          const lz = uz.slice(0, iz),
            Mz = Ez.length + lz.length;
          return {
            value: Ez + lz + nz,
            start: Mz,
            end: Mz
          }
        }(zu(zz), uz, zz.maxLength), "insertText")
      },
      iu = zz => {
        Eu("delete") || uu(zz, (zz => {
          const uz = zz.start === zz.end ? Iz(zz.value, zz.start) : zz.start;
          return {
            value: zz.value.slice(0, uz) + zz.value.slice(zz.end),
            start: uz,
            end: uz
          }
        })(zu(zz)), "deleteContentBackward")
      },
      lu = (zz, uz) => {
        if (!kz(zz)) return;
        const bz = Bz(zu(zz), uz);
        zz.setSelectionRange(bz.start, bz.end)
      },
      Mu = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      tu = (zz, uz) => {
        if ("function" === typeof zz.checkVisibility) return !zz.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: uz,
          checkOpacity: uz
        });
        const {
          visibility: bz
        } = getComputedStyle(zz);
        if ("hidden" === bz || "collapse" === bz) return !0;
        if (!uz) return !1;
        for (let Ez = zz; Ez; Ez = Ez.parentElement)
          if ("0" === getComputedStyle(Ez).opacity) return !0;
        return !1
      },
      Hu = zz => {
        if (!zz.isConnected || tu(zz, !0)) return !1;
        const uz = zz.getBoundingClientRect();
        return uz.width > 0 && uz.height > 0
      },
      Ou = zz => !!zz.matches(":disabled, [aria-disabled='true']") || "button" === zz.getAttribute("role") && "-1" === zz.getAttribute("tabindex"),
      pu = zz => {
        var uz;
        if (zz.closest("[data-pad-ignore]")) return !0;
        return !!(null === (uz = zz.parentElement) || void 0 === uz ? void 0 : uz.closest("[data-pad-focusable]"))
      },
      du = zz => {
        const uz = zz.querySelectorAll(Mu);
        return zz.matches(Mu) ? [zz, ...uz] : uz
      },
      Fu = zz => {
        const uz = [];
        for (const bz of du(zz)) !pu(bz) && Hu(bz) && uz.push(bz);
        return uz
      },
      Zu = new WeakMap,
      Ru = zz => {
        const uz = Zu.get(zz);
        if (uz && Ku(uz, zz)) return !0;
        for (const bz of du(zz))
          if (!pu(bz) && Hu(bz)) return Zu.set(zz, bz), !0;
        return Zu.delete(zz), !1
      },
      Ku = (zz, uz) => uz.contains(zz) && zz.matches(Mu) && !pu(zz) && Hu(zz),
      wu = (zz, uz) => Ku(zz, uz) && !Ou(zz),
      Xu = zz => {
        const uz = uz => {
          let bz = 0;
          for (let Ez = uz.parentElement; Ez && Ez !== zz; Ez = Ez.parentElement) bz++;
          return bz
        };
        return [...zz.querySelectorAll("[data-pad-initial-area]")].filter(Hu).sort(((zz, bz) => uz(bz) - uz(zz)))
      },
      fu = zz => Yz(zz),
      su = zz => {
        const uz = zz.getBoundingClientRect();
        return {
          x: uz.left + uz.width / 2,
          y: uz.top + uz.height / 2
        }
      },
      ru = (zz, uz, bz) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: zz.x,
        clientY: zz.y,
        screenX: zz.x,
        screenY: zz.y,
        button: uz,
        buttons: bz,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      ou = (zz, uz) => {
        (0, wz.h)(zz, uz)
      },
      Nu = function(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Ez = 0 === bz ? 1 : 2;
        ou(zz, new PointerEvent("pointerdown", ru(uz, bz, Ez))), ou(zz, new MouseEvent("mousedown", ru(uz, bz, Ez)))
      },
      vu = function(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        ou(zz, new PointerEvent("pointerup", ru(uz, bz, 0))), ou(zz, new MouseEvent("mouseup", ru(uz, bz, 0)))
      },
      xu = function(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Nu(zz, uz, bz), vu(zz, uz, bz), ou(zz, 0 === bz ? new MouseEvent("click", ru(uz, 0, 0)) : new MouseEvent("contextmenu", ru(uz, 2, 0)))
      },
      Ju = function(zz, uz, bz) {
        let {
          leaveBelow: Ez = null,
          enterBelow: nz = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (zz !== uz) {
          if (null !== zz && void 0 !== zz && zz.isConnected) {
            const nz = {
              ...ru(bz, 0, 0),
              relatedTarget: uz
            };
            ou(zz, new PointerEvent("pointerout", nz)), ou(zz, new MouseEvent("mouseout", nz));
            const iz = zz => !!uz && zz.contains(uz) || !!Ez && zz.contains(Ez);
            for (let uz = zz; uz && !iz(uz); uz = uz.parentElement) ou(uz, new PointerEvent("pointerleave", {
              ...nz,
              bubbles: !1
            })), ou(uz, new MouseEvent("mouseleave", {
              ...nz,
              bubbles: !1
            }))
          }
          if (uz) {
            const Ez = {
              ...ru(bz, 0, 0),
              relatedTarget: zz
            };
            ou(uz, new PointerEvent("pointerover", Ez)), ou(uz, new MouseEvent("mouseover", Ez));
            const iz = [],
              lz = uz => !(null === zz || void 0 === zz || !zz.isConnected) && uz.contains(zz) || !!nz && uz.contains(nz);
            for (let zz = uz; zz && !lz(zz); zz = zz.parentElement) iz.push(zz);
            for (const zz of iz.reverse()) ou(zz, new PointerEvent("pointerenter", {
              ...Ez,
              bubbles: !1
            })), ou(zz, new MouseEvent("mouseenter", {
              ...Ez,
              bubbles: !1
            }));
            ou(uz, new PointerEvent("pointermove", ru(bz, 0, 0))), ou(uz, new MouseEvent("mousemove", ru(bz, 0, 0)))
          }
        } else uz && (ou(uz, new PointerEvent("pointermove", ru(bz, 0, 0))), ou(uz, new MouseEvent("mousemove", ru(bz, 0, 0))))
      },
      Au = zz => {
        Hz.k.sK(Qz.d, zz)
      },
      Tu = zz => {
        if (fu(zz)) return void Au(zz);
        const uz = zz.hasAttribute("data-pad-focusable") ? zz.querySelector("a[href]") : null,
          bz = null !== uz && void 0 !== uz ? uz : zz;
        xu(bz, su(bz))
      },
      Lu = ".Dropdown-root.is-open",
      Pu = zz => {
        const uz = zz.querySelector(".Dropdown-control");
        return Tu(uz), uz
      },
      Gu = zz => {
        var uz;
        const bz = null !== (uz = zz.closest(Lu)) && void 0 !== uz ? uz : zz.querySelector(Lu);
        return bz ? Pu(bz) : null
      },
      au = zz => {
        for (const uz of document.querySelectorAll(Lu)) uz.contains(zz) || Pu(uz)
      },
      Vu = zz => null !== zz.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      mu = zz => {
        const uz = zz ? document.elementFromPoint(zz.x, zz.y) : null;
        return !(null === uz || void 0 === uz || !uz.closest("[data-pad-repeat]"))
      },
      qu = zz => {
        var uz;
        return null !== (uz = [...zz.querySelectorAll("[data-pad-back]")].find(Hu)) && void 0 !== uz ? uz : null
      },
      hu = zz => {
        const uz = qu(zz);
        return !!uz && (Tu(uz), !0)
      },
      Uu = zz => {
        var uz, bz, Ez, nz;
        return null !== (uz = null !== (bz = null !== (Ez = zz.getAttribute("data-pad-key")) && void 0 !== Ez ? Ez : zz.getAttribute("href")) && void 0 !== bz ? bz : null === (nz = zz.querySelector("a[href]")) || void 0 === nz ? void 0 : nz.getAttribute("href")) && void 0 !== uz ? uz : null
      },
      cu = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const gu = new class {
        constructor() {
          this.state = cu, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(zz) {
          if (uz = this.state, bz = zz, (uz.visible || bz.visible) && (uz.visible !== bz.visible || uz.x !== bz.x || uz.y !== bz.y || uz.pressed !== bz.pressed)) {
            var uz, bz;
            this.state = zz;
            for (const uz of this.listeners) uz(zz)
          }
        }
        hide() {
          this.set(cu)
        }
        subscribe(zz) {
          return this.listeners.add(zz), () => {
            this.listeners.delete(zz)
          }
        }
      },
      Su = (zz, uz) => {
        let {
          kind: bz,
          holding: Ez,
          hasPress: nz,
          hasBack: iz,
          slotHasItem: lz
        } = uz;
        switch (zz) {
          case "primary":
            return "slot" === bz ? "slotPrimary" : "recipe" === bz || "button" === bz ? nz ? "pressPrimary" : "click" : "textField" === bz ? "openKeyboard" : null;
          case "secondary":
            return "slot" === bz ? "slotSecondary" : "button" !== bz && "recipe" !== bz || !nz ? null : "pressSecondary";
          case "quickMove":
            return "slot" === bz && lz ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === bz && lz && !Ez ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Ez ? "cancel" : iz ? "pressBack" : "close"
        }
      },
      yu = zz => {
        const uz = [];
        if (zz.hotbarPicking) return uz.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), uz.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), uz;
        if (zz.holding) "slot" === zz.kind ? (uz.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), uz.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === zz.kind && uz.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), uz.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), uz.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), zz.openButtonCloses && uz.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var bz;
          "slot" === zz.kind && zz.slotHasItem ? (uz.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), uz.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), uz.push({
            actions: ["inventoryQuickMove"],
            labelKey: zz.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), uz.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), uz.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== zz.kind && "recipe" !== zz.kind || !zz.pressHints ? "button" === zz.kind || "recipe" === zz.kind ? uz.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === zz.kind && uz.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (zz.pressHints.primary && uz.push({
            actions: ["inventoryPrimary"],
            labelKey: zz.pressHints.primary
          }), zz.pressHints.secondary && uz.push({
            actions: ["inventorySecondary"],
            labelKey: zz.pressHints.secondary
          }));
          const Ez = null === (bz = zz.pressHints) || void 0 === bz ? void 0 : bz.back;
          Ez && uz.push({
            actions: ["inventoryClose"],
            labelKey: Ez
          });
          const nz = [];
          zz.openButtonCloses && nz.push("inventory"), Ez || nz.push("inventoryClose"), nz.length > 0 && uz.push({
            actions: nz,
            labelKey: "inventoryClose"
          })
        }
        return uz.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), zz.hasCategories ? uz.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : zz.hasList && uz.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), uz
      };
    var Du = bz(8342);
    class Qu {
      constructor(zz) {
        this.probes = zz, this.byContainer = new Map, this.byParent = new Map
      }
      find(zz, uz) {
        const bz = Az(zz, "y", uz);
        if (!bz) return null;
        let Ez = this.byContainer.get(bz);
        return Ez || (this.probes.push({
          element: bz,
          rect: Iu(bz.getBoundingClientRect())
        }), Ez = {
          container: bz,
          box: Vz(bz),
          group: ju(bz)
        }, this.byContainer.set(bz, Ez)), Ez
      }
      findForParent(zz, uz) {
        let bz = this.byParent.get(zz);
        return void 0 === bz && (bz = this.find(zz, uz), this.byParent.set(zz, bz)), bz
      }
    }
    const Wu = new WeakMap;
    let eu = 0;
    const ju = zz => {
        let uz = Wu.get(zz);
        return uz || (uz = "el:" + eu++, Wu.set(zz, uz)), uz
      },
      Iu = zz => ({
        left: zz.left,
        top: zz.top,
        width: zz.width,
        height: zz.height
      }),
      Bu = zz => zz.width > 0 && zz.height > 0,
      Cu = (zz, uz) => Bu(zz) && zz.left + zz.width > 0 && zz.top + zz.height > 0 && zz.left < uz.width && zz.top < uz.height,
      Yu = (zz, uz, bz) => {
        const Ez = zz.top + zz.height / 2;
        return Cu(zz, uz) && (!bz || Ez >= bz.top && Ez <= bz.bottom)
      },
      ku = zz => ({
        x: zz.left + zz.width / 2,
        y: zz.top + zz.height / 2
      }),
      zb = (zz, uz, bz) => zz < 0 ? bz >= 0 ? 0 : uz - 1 : ((zz + bz) % uz + uz) % uz,
      ub = zz => "Left" === zz || "Right" === zz,
      bb = (zz, uz, bz) => {
        const Ez = ub(bz),
          nz = Ez ? zz.top : zz.left,
          iz = Ez ? zz.height : zz.width,
          lz = Ez ? uz.top : uz.left,
          Mz = Ez ? uz.height : uz.width,
          tz = Math.max(0, Math.max(lz - (nz + iz), nz - (lz + Mz)));
        return iz > 1.5 * Mz ? {
          gap: tz,
          offset: Math.max(0, lz - nz) + .1 * Math.max(0, nz - lz)
        } : {
          gap: tz,
          offset: Math.abs(lz + Mz / 2 - (nz + iz / 2))
        }
      },
      Eb = (zz, uz, bz) => {
        const Ez = ((zz, uz, bz) => {
          const Ez = ku(zz),
            nz = ku(uz),
            iz = ub(bz) ? Math.min(zz.width, uz.width) / 4 : Math.min(zz.height, uz.height) / 4;
          switch (bz) {
            case "Right":
              return nz.x - Ez.x >= iz ? Math.max(0, uz.left - (zz.left + zz.width)) : null;
            case "Left":
              return Ez.x - nz.x >= iz ? Math.max(0, zz.left - (uz.left + uz.width)) : null;
            case "Down":
              return nz.y - Ez.y >= iz ? Math.max(0, uz.top - (zz.top + zz.height)) : null;
            case "Up":
              return Ez.y - nz.y >= iz ? Math.max(0, zz.top - (uz.top + uz.height)) : null
          }
        })(zz, uz, bz);
        if (null === Ez) return null;
        const nz = bb(zz, uz, bz);
        return Ez + 3 * nz.gap + .5 * nz.offset
      },
      nb = (zz, uz) => uz.visible || null !== uz.scrollGroup && uz.scrollGroup === zz.scrollGroup,
      ib = (zz, uz, bz, Ez) => {
        let nz = null,
          iz = 1 / 0;
        for (const lz of uz) {
          if (lz.key === zz.key || !nb(zz, lz) || !Ez(lz)) continue;
          const uz = Eb(zz.rect, lz.rect, bz);
          null !== uz && uz < iz && (nz = lz, iz = uz)
        }
        return nz
      },
      lb = (zz, uz, bz) => {
        const Ez = ib(zz, uz, bz, (() => !0));
        if (!Ez || ub(bz) || null === zz.scrollGroup || Ez.scrollGroup === zz.scrollGroup) return Ez;
        const nz = ib(zz, uz, bz, (uz => 0 === bb(zz.rect, uz.rect, bz).gap));
        return null !== nz && void 0 !== nz ? nz : Ez
      },
      Mb = (zz, uz, bz) => {
        let Ez = null,
          nz = 1 / 0;
        for (const iz of uz) {
          if (!iz.visible || bz && !bz(iz)) continue;
          const uz = ku(iz.rect),
            lz = Math.hypot(uz.x - zz.x, uz.y - zz.y);
          lz < nz && (Ez = iz, nz = lz)
        }
        return Ez
      },
      tb = zz => {
        const {
          rect: uz,
          clip: bz
        } = zz;
        if (!bz) return uz;
        const Ez = Math.max(uz.left, bz.left),
          nz = Math.max(uz.top, bz.top);
        return {
          left: Ez,
          top: nz,
          width: Math.min(uz.left + uz.width, bz.left + bz.width) - Ez,
          height: Math.min(uz.top + uz.height, bz.top + bz.height) - nz
        }
      },
      Hb = (zz, uz) => uz.x >= zz.left && uz.x < zz.left + zz.width && uz.y >= zz.top && uz.y < zz.top + zz.height,
      Ob = (zz, uz) => {
        let bz = null,
          Ez = 1 / 0;
        for (const nz of uz) {
          const uz = tb(nz);
          (nz.visible || nz.clip) && Hb(uz, zz) && (uz.width * uz.height < Ez && (bz = nz, Ez = uz.width * uz.height))
        }
        return bz
      },
      pb = zz => {
        let uz = null;
        for (const bz of zz) {
          if (!bz.visible) continue;
          if (!uz) {
            uz = bz;
            continue
          }
          const zz = Math.min(uz.rect.height, bz.rect.height) / 2,
            Ez = bz.rect.top - uz.rect.top;
          (Ez < -zz || Math.abs(Ez) <= zz && bz.rect.left < uz.rect.left) && (uz = bz)
        }
        return uz
      },
      db = (zz, uz, bz, Ez, nz) => {
        const iz = nz % uz,
          lz = Math.floor(nz / uz);
        return {
          left: zz.left + iz * bz,
          top: zz.top + lz * Ez,
          width: zz.width,
          height: zz.height
        }
      },
      Fb = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Zb = ".LazyLoadedItemWrapper",
      Rb = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Kb = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      wb = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Xb = zz => zz.hasAttribute("data-inven-idx") ? "slot" : zz.hasAttribute("data-recipe-key") ? "recipe" : zz.hasAttribute("data-craft-ingredient") || Ou(zz) ? "info" : fu(zz) ? "textField" : "button",
      fb = (zz, uz) => "slot" === uz ? Number(zz.getAttribute("data-inven-idx")) : null,
      sb = zz => zz.matches(Zb) ? zz.querySelector(Rb) : zz,
      rb = zz => {
        var uz, bz;
        return {
          element: zz,
          recipe: null !== (uz = zz && (null === (bz = sb(zz)) || void 0 === bz ? void 0 : bz.getAttribute("data-recipe-key"))) && void 0 !== uz ? uz : null
        }
      },
      ob = zz => {
        const uz = sb(zz);
        if (!uz) return {
          kind: "pending",
          idx: null
        };
        const bz = Xb(uz);
        return {
          kind: bz,
          idx: fb(uz, bz)
        }
      },
      Nb = zz => {
        const uz = [];
        for (const [bz, Ez] of Kb) {
          zz.matches(Ez) && uz.push([bz, zz]);
          for (const nz of zz.querySelectorAll(Ez)) uz.push([bz, nz])
        }
        return uz
      },
      vb = (zz, uz) => {
        for (const [bz, Ez] of zz)
          if (Ez.contains(uz)) return bz;
        return "other"
      },
      xb = (zz, uz, bz, Ez, nz, iz, lz, Mz) => {
        var tz;
        const Hz = zz.children,
          Oz = Iu(Hz[0].getBoundingClientRect()),
          pz = [{
            element: Hz[0],
            rect: Oz
          }];
        if (iz.push(pz[0]), 0 === Oz.width || 0 === Oz.height) return;
        let dz = 1;
        for (; dz < Hz.length && Math.abs(Hz[dz].getBoundingClientRect().top - Oz.top) < 1;) dz++;
        const Fz = zz => {
            const uz = {
              element: Hz[zz],
              rect: Iu(Hz[zz].getBoundingClientRect())
            };
            return iz.push(uz), pz.push(uz), uz.rect
          },
          Zz = dz > 1 ? Fz(1).left - Oz.left : Oz.width,
          Rz = Hz.length > dz ? Fz(dz).top - Oz.top : Oz.height,
          Kz = lz.find(zz, uz);
        let wz = null;
        if (Kz) {
          var Xz;
          const {
            container: zz,
            box: uz
          } = Kz;
          wz = null !== (Xz = Mz.get(zz)) && void 0 !== Xz ? Xz : null, wz || (wz = {
            top: zz.scrollTop,
            left: zz.scrollLeft,
            box: uz,
            viewport: Ez,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, Mz.set(zz, wz)), wz.probes.push(...pz)
        }
        const fz = nz.length;
        for (let Nz = 0; Nz < Hz.length; Nz++) {
          var sz, rz, oz;
          const zz = Hz[Nz],
            uz = db(Oz, dz, Zz, Rz, Nz),
            iz = zz.firstElementChild ? zz.querySelector(Rb) : null,
            lz = iz ? Xb(iz) : "pending";
          nz.push({
            key: ju(zz),
            rect: uz,
            panel: bz,
            scrollGroup: null !== (sz = null === Kz || void 0 === Kz ? void 0 : Kz.group) && void 0 !== sz ? sz : null,
            visible: Yu(uz, Ez, null === Kz || void 0 === Kz ? void 0 : Kz.box),
            clip: null !== (rz = null === Kz || void 0 === Kz ? void 0 : Kz.box) && void 0 !== rz ? rz : null,
            element: zz,
            kind: lz,
            idx: iz ? fb(iz, lz) : null,
            scrollContainer: null !== (oz = null === Kz || void 0 === Kz ? void 0 : Kz.container) && void 0 !== oz ? oz : null
          })
        }
        null === (tz = wz) || void 0 === tz || tz.targets.push(...nz.slice(fz))
      },
      Jb = zz => zz instanceof Element && null !== zz.closest(Zb),
      Ab = zz => null !== zz.scrollContainer && Jb(zz.element);
    class Tb {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(zz, uz, bz, Ez) {
        this.latched = {
          source: zz,
          focusKey: uz,
          sinceMs: bz,
          hold: {
            id: ++this.presses,
            holdMs: Ez
          }
        }
      }
      update(zz, uz, bz) {
        const Ez = this.latched;
        return Ez ? zz && uz === Ez.focusKey ? bz - Ez.sinceMs < Ez.hold.holdMs ? null : (this.latched = null, Ez.source) : (this.latched = null, null) : null
      }
      getHold() {
        var zz, uz;
        return null !== (zz = null === (uz = this.latched) || void 0 === uz ? void 0 : uz.hold) && void 0 !== zz ? zz : null
      }
      reset() {
        this.latched = null
      }
    }
    var Lb = bz(8349);
    const Pb = {
        kind: "none"
      },
      Gb = zz => ({
        x: zz.clientX,
        y: zz.clientY
      }),
      ab = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class Vb {
      constructor() {
        this.hovered = Pb, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(zz, uz, bz, Ez, nz) {
        const iz = null !== uz ? {
            kind: "slot",
            idx: uz
          } : bz ? {
            kind: "element",
            element: bz
          } : Pb,
          lz = `${nz}|${Math.round(Ez.clientX)},${Math.round(Ez.clientY)}`,
          Mz = (tz = this.hovered, Hz = iz, "slot" === tz.kind && "slot" === Hz.kind ? tz.idx === Hz.idx : "element" === tz.kind && "element" === Hz.kind ? tz.element === Hz.element : tz.kind === Hz.kind);
        var tz, Hz;
        if (Mz && lz === this.signature) return;
        const Oz = !Mz || nz !== this.holding || "" === this.signature;
        this.signature = lz, this.holding = nz, this.lastPoint = Ez;
        const pz = this.hovered;
        if (this.hovered = iz, "slot" === iz.kind) return this.leaveElement(pz, null, Ez), void(Oz ? zz.hover(iz.idx, Ez) : zz.moveTo(Ez));
        if (Mz) return void("element" === iz.kind ? Ju(iz.element, iz.element, Gb(Ez)) : zz.hover(null, Ez));
        zz.hover(null, Ez);
        const dz = "element" === iz.kind ? iz.element : null;
        "element" === pz.kind ? Ju(pz.element, dz, Gb(Ez)) : dz && Ju(null, dz, Gb(Ez))
      }
      invalidate() {
        this.signature = ""
      }
      clear(zz) {
        const uz = this.hovered;
        this.hovered = Pb, this.signature = "", "none" !== uz.kind && (this.leaveElement(uz, null, this.lastPoint), zz && "slot" === uz.kind && zz.hover(null, this.lastPoint))
      }
      leaveElement(zz, uz, bz) {
        "element" === zz.kind && Ju(zz.element, uz, Gb(bz))
      }
    }
    class mb {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(zz, uz) {
        Nz(zz) && (this.lastTiltedMs = uz)
      }
      allowsClick(zz) {
        return zz - this.lastTiltedMs > 150
      }
    }
    class qb {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(zz) {
        return 0 !== (0, Zz.m)(zz, .2).y
      }
      step(zz, uz, bz) {
        zz !== this.container && (this.container = zz, this.remainder = 0);
        const Ez = vz(uz, bz).y;
        if (0 === Ez) return this.remainder = 0, !1;
        const nz = this.remainder + Ez,
          iz = Math.trunc(nz);
        if (this.remainder = nz - iz, 0 === iz) return !1;
        const lz = zz.scrollTop;
        return zz.scrollTop = lz + iz, zz.scrollTop !== lz
      }
      current() {
        var zz;
        return null !== (zz = this.container) && void 0 !== zz && zz.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var hb = bz(8356);
    const Ub = "[data-pad-inventory-default]",
      cb = ".HotBarGameItemsContainer .InvenItem.Selected",
      gb = {
        Up: {
          x: 0,
          y: -1
        },
        Down: {
          x: 0,
          y: 1
        },
        Left: {
          x: -1,
          y: 0
        },
        Right: {
          x: 1,
          y: 0
        }
      },
      Sb = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      yb = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Db = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Qb = [...yb, ...Db],
      Wb = () => {
        return zz = (0, Oz.i)("inventory"), !Qb.map(Oz.i).includes(zz) && !(0, Zz.O)(zz);
        var zz
      },
      eb = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      jb = (zz, uz) => {
        const bz = !(null === uz || void 0 === uz || !uz.isHolding());
        return function(zz, uz) {
          const bz = zz.find((zz => zz.visible && uz(zz)));
          if (bz) return bz;
          for (var Ez = arguments.length, nz = new Array(Ez > 2 ? Ez - 2 : 0), iz = 2; iz < Ez; iz++) nz[iz - 2] = arguments[iz];
          for (const lz of nz) {
            const uz = pb(zz.filter(lz));
            if (uz) return uz
          }
          return pb(zz)
        }(zz, (zz => {
          const {
            element: uz
          } = zz;
          return uz.matches(Ub) || null !== uz.querySelector(Ub) || uz.matches(cb)
        }), (zz => "slot" === zz.kind ? bz || null !== zz.idx && !(null === uz || void 0 === uz || !uz.hasItemAt(zz.idx)) : "recipe" === zz.kind || "pending" === zz.kind), (zz => "slot" === zz.kind || "button" === zz.kind))
      };
    class Ib {
      constructor() {
        this.set = null, this.observer = new MutationObserver((zz => {
          zz.some((zz => !Jb(zz.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = zz => {
          this.scrolled(zz.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const zz = [],
              uz = [];
            let bz = !1;
            const Ez = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              nz = new Map,
              iz = new Qu(uz);
            for (const pz of document.querySelectorAll(Fb)) {
              const Oz = Nb(pz);
              bz ||= null !== pz.querySelector(".CreativeCategoryTab");
              for (const bz of pz.querySelectorAll(`${Zb}:first-child`)) {
                const lz = bz.parentElement;
                xb(lz, pz, vb(Oz, lz), Ez, zz, uz, iz, nz)
              }
              for (const bz of pz.querySelectorAll(Rb)) {
                var lz, Mz, tz, Hz;
                if (bz.closest(Zb) || bz.closest("[data-pad-ignore]")) continue;
                const dz = null === (lz = bz.parentElement) || void 0 === lz ? void 0 : lz.closest(Rb);
                if (dz && pz.contains(dz)) continue;
                const Fz = Xb(bz),
                  Zz = fb(bz, Fz);
                if (-1 === Zz) continue;
                const Rz = Iu(bz.getBoundingClientRect());
                uz.push({
                  element: bz,
                  rect: Rz
                });
                const Kz = iz.findForParent(bz.parentElement, pz),
                  wz = Kz && !nz.has(Kz.container) ? Kz : null;
                (wz ? Bu(Rz) : Cu(Rz, Ez)) && zz.push({
                  key: ju(bz),
                  rect: Rz,
                  panel: vb(Oz, bz),
                  scrollGroup: null !== (Mz = null === wz || void 0 === wz ? void 0 : wz.group) && void 0 !== Mz ? Mz : null,
                  visible: Yu(Rz, Ez, null === wz || void 0 === wz ? void 0 : wz.box),
                  clip: null !== (tz = null === wz || void 0 === wz ? void 0 : wz.box) && void 0 !== tz ? tz : null,
                  element: bz,
                  kind: Fz,
                  idx: Zz,
                  scrollContainer: null !== (Hz = null === wz || void 0 === wz ? void 0 : wz.container) && void 0 !== Hz ? Hz : null
                })
              }
            }
            for (const [pz, dz] of nz) dz.holdsOthers = uz.some((zz => zz.element !== pz && pz.contains(zz.element) && !zz.element.closest(Zb)));
            const Oz = new Map;
            for (const pz of zz) Oz.set(pz.element, pz);
            return {
              targets: zz,
              byElement: Oz,
              hasCategories: bz,
              probes: uz,
              scrollers: nz
            }
          })(), this.observer.disconnect();
          for (const zz of document.querySelectorAll(Fb)) this.observer.observe(zz, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(zz) {
        !this.set || zz instanceof Element && ((zz, uz) => {
          const bz = zz.scrollers.get(uz);
          if (!bz || bz.holdsOthers || uz.scrollLeft !== bz.left) return !1;
          const Ez = uz.scrollTop - bz.top;
          if (0 === Ez) return !0;
          bz.top = uz.scrollTop;
          for (const nz of bz.probes) nz.rect.top -= Ez;
          for (const nz of bz.targets) nz.rect.top -= Ez, nz.visible = Yu(nz.rect, bz.viewport, bz.box);
          return !0
        })(this.set, zz) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((zz => {
          return uz = zz.rect, bz = zz.element.getBoundingClientRect(), !(uz.left === bz.left && uz.top === bz.top && uz.width === bz.width && uz.height === bz.height);
          var uz, bz
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Bb = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Zz.H.map((zz => [zz, (0, Rz.e)(Zz.K)]))), this.stickRepeat = new Zz.c((0, Rz.e)(Zz.jb)), this.pageUpTimer = (0, Rz.e)(Zz.hb), this.pageDownTimer = (0, Rz.e)(Zz.hb), this.stickGate = new rz, this.pointer = null, this.activePress = null, this.dropLatch = new Tb, this.scroller = new qb, this.scrollStickClick = new mb, this.hover = new Vb, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new yz, this.targets = new Ib, this.hasCategories = !1, this.wasShowing = !1, this.state = Lb.d, this.isActive = () => (0, Du.g)(), this.isShowing = () => "inventory" === pz.b.getActiveConsumerName() && (0, Fz.h)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Du.d)()), (0, Du.g)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var zz;
            this.reopenSlotIdx = null !== (zz = this.focused ? ob(this.focused).idx : null) && void 0 !== zz ? zz : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Du.r)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = zz => {
            (0, Mz.unstable_batchedUpdates)((() => {
              this.frame(zz)
            }))
          }, this.shouldBlockRealPointer = zz => zz.isTrusted && !(0, wz.r)(zz) && this.isShowing(), this.noteRealPointer = zz => {
            zz instanceof MouseEvent && zz.isTrusted && !(0, wz.r)(zz) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = zz.clientX, this.lastRealPointer.y = zz.clientY)
          }, this.wakePressActs = zz => {
            var uz;
            return zz === (0, Oz.i)("inventoryClose") ? !(null !== (uz = (0, Du.d)()) && void 0 !== uz && uz.isHolding()) : !(zz !== (0, Oz.i)("inventory") || !Wb()) || ((0, Zz.O)(zz) ? this.isNavButton(zz) : Db.some((uz => (0, Oz.i)(uz) === zz)))
          }
        }
        frame(zz) {
          var uz, bz, Ez, nz, iz;
          const lz = (0, Du.d)();
          if (!(0, Fz.h)()) return void(this.wasShowing && (this.endInteraction(lz), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), zz.wokeDevice && this.focusWakePointer(!(null === lz || void 0 === lz || !lz.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, dz.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const Mz = performance.now();
          this.handleNavigation(zz, Mz), this.handlePanels(zz), this.handlePaging(zz, Mz), this.handleScroll(zz), this.handleButtons(zz, Mz, lz), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const tz = this.ensureFocus(),
            Hz = this.focusContext(lz);
          this.ring.show(tz);
          const pz = "slot" === Hz.kind ? Hz.idx : null,
            Zz = null !== (uz = null === (bz = Hz.actionElement) || void 0 === bz ? void 0 : bz.querySelector(".DoCraftItem")) && void 0 !== uz ? uz : Hz.actionElement;
          this.pointer ? (this.hover.sync(lz, pz, Zz, ((zz, uz) => {
            const bz = uz ? ab() : 0;
            return {
              clientX: zz.x - bz,
              clientY: zz.y - bz
            }
          })(this.pointer, Hz.holding), Hz.holding), gu.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: zz.isHeld((0, Oz.i)("inventoryPrimary"))
          })) : tz && this.focused && this.hover.sync(lz, pz, Zz, ((zz, uz) => {
            if (!uz) return {
              clientX: zz.left + zz.width - 10,
              clientY: zz.top + zz.height / 2 - 10
            };
            const bz = ab();
            return {
              clientX: zz.left + zz.width / 2 - bz,
              clientY: zz.top + zz.height / 2 - bz
            }
          })(tz, Hz.holding), Hz.holding), this.publishState({
            showing: !0,
            kind: Hz.kind,
            holding: Hz.holding,
            slotHasItem: Hz.slotHasItem,
            pressHints: null !== (Ez = null === (nz = Hz.press) || void 0 === nz ? void 0 : nz.hints) && void 0 !== Ez ? Ez : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Ab(this.focusTarget),
            openButtonCloses: Wb(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Hz.kind && !(null === (iz = Hz.actionElement) || void 0 === iz || !iz.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(zz) {
          var uz;
          const bz = (0, Fz.d)();
          if (!bz) return;
          this.targets.revalidate();
          const Ez = this.getTargets().targets;
          this.setFocus(null !== (uz = Ob(bz, Ez)) && void 0 !== uz ? uz : zz ? Mb(bz, Ez, (zz => {
            let {
              rect: uz
            } = zz;
            const Ez = Math.max(uz.left - bz.x, 0, bz.x - (uz.left + uz.width)),
              nz = Math.max(uz.top - bz.y, 0, bz.y - (uz.top + uz.height));
            return Math.hypot(Ez, nz) <= Math.min(uz.width, uz.height) / 2
          })) : null, !1), "cursor" === (0, dz.g)().inventoryNavigation && (this.pointer = {
            x: bz.x,
            y: bz.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const zz = this.lastRealPointer;
          if (!zz || "keyboardMouse" !== tz.e.get("activeInputDevice")) return;
          const uz = document.elementFromPoint(zz.x, zz.y);
          uz && Ju(null, uz, zz)
        }
        endInteraction(zz) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const uz of this.dpadTimers.values()) uz.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(zz), this.ring.hide(), this.releasePointer(), this.publishState(Lb.d)
        }
        getTargets() {
          const zz = this.targets.get();
          return this.hasCategories = zz.hasCategories, zz
        }
        currentTarget() {
          var zz;
          return this.focused && null !== (zz = this.getTargets().byElement.get(this.focused)) && void 0 !== zz ? zz : null
        }
        readFocusRect() {
          const zz = this.focused;
          if (null === zz || void 0 === zz || !zz.isConnected || !zz.closest(Fb)) return null;
          const uz = zz.getBoundingClientRect();
          return uz.width > 0 && uz.height > 0 ? {
            left: uz.left,
            top: uz.top,
            width: uz.width,
            height: uz.height
          } : null
        }
        ensureFocus() {
          const zz = this.readFocusRect();
          if (zz || this.pointer) return zz;
          const {
            targets: uz,
            byElement: bz
          } = this.getTargets();
          let Ez = null,
            nz = !1;
          if (this.lastRect) Ez = Mb(ku(this.lastRect), uz);
          else {
            var iz, lz;
            const zz = ((zz, uz) => {
                const bz = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return bz ? jb(zz.filter((zz => bz.contains(zz.element))), uz) : null
              })(uz, (0, Du.d)()),
              Mz = uz.find((zz => null !== zz.idx && zz.idx === this.reopenSlotIdx)),
              tz = document.querySelector(cb);
            nz = null !== zz || void 0 !== Mz, Ez = null !== (iz = null !== (lz = null !== zz && void 0 !== zz ? zz : Mz) && void 0 !== lz ? lz : tz && bz.get(tz)) && void 0 !== iz ? iz : pb(uz)
          }
          return this.setFocus(Ez, nz), this.lastRect
        }
        setFocus(zz) {
          let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          zz && (this.focused = zz.element, this.focusTarget = zz, this.panelMemory.set(zz.panel, zz.element), uz && zz.scrollContainer && ((zz, uz) => {
            const bz = zz.getBoundingClientRect(),
              Ez = Vz(uz),
              nz = uz.scrollTop;
            return bz.top < Ez.top ? uz.scrollTop -= Ez.top - bz.top : bz.bottom > Ez.bottom && (uz.scrollTop += bz.bottom - Ez.bottom), uz.scrollTop !== nz
          })(zz.element, zz.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, dz.g)().inventoryNavigation) {
              if (this.lastRect) {
                const zz = ku(this.lastRect);
                this.pointer = {
                  x: zz.x,
                  y: zz.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const zz = this.lastRect ? ku(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: zz.x,
            y: zz.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, gu.hide()
        }
        hoverAtPointer() {
          var zz;
          const uz = Ob(this.pointer, this.getTargets().targets);
          this.focusTarget = uz, (null === uz || void 0 === uz ? void 0 : uz.element) !== this.focused && (this.focused = null !== (zz = null === uz || void 0 === uz ? void 0 : uz.element) && void 0 !== zz ? zz : null, uz && (this.panelMemory.set(uz.panel, uz.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(zz, uz) {
          const bz = this.focusTarget,
            Ez = bz && (0, dz.g)().cursorMagnetism ? ku(tb(bz)) : null;
          this.pointer = oz(this.pointer, {
            stick: zz.leftStick,
            moveDeadzone: (0, dz.g)().moveDeadzone,
            dpad: uz,
            dtMs: zz.dtMs,
            cursorSpeedPercent: (0, dz.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Ez
            }
          })
        }
        move(zz) {
          this.targets.revalidate();
          const uz = this.currentTarget();
          uz && this.setFocus(lb(uz, this.getTargets().targets, zz))
        }
        step(zz) {
          const uz = this.pointer;
          if (uz && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((zz, uz, bz) => {
            var Ez;
            const nz = {
              key: "",
              rect: {
                left: zz.x,
                top: zz.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Ez = lb(nz, uz, bz)) && void 0 !== Ez ? Ez : Mb(zz, uz)
          })(uz, this.getTargets().targets, zz));
          this.move(zz)
        }
        isNavButton(zz) {
          return !yb.some((uz => (0, Oz.i)(uz) === zz)) && !(zz === (0, Oz.i)("inventory") && Wb())
        }
        handleNavigation(zz, uz) {
          const bz = (0, dz.g)().inventoryNavigation,
            Ez = {
              x: 0,
              y: 0
            };
          let nz = null;
          for (const tz of Zz.H) {
            const iz = this.isNavButton(tz) && zz.isHeld(tz);
            iz && (Ez.x += gb[tz].x, Ez.y += gb[tz].y), this.dpadTimers.get(tz).update(iz, uz) && "cursor" !== bz && (nz ??= tz)
          }
          const iz = this.stickGate.update(zz.leftStick, (0, dz.g)().moveDeadzone);
          if (nz && (this.step(nz), this.stickGate.lock()), "slot" !== bz) {
            const uz = ((zz, uz, bz, Ez) => "hybrid" !== zz ? "cursor" === zz : !Ez && (uz || bz))(bz, null !== this.pointer, iz, null !== nz);
            return uz && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(zz, "cursor" === bz ? Ez : {
              x: 0,
              y: 0
            }))
          }
          const lz = (0, Zz.m)(zz.leftStick, (0, dz.g)().moveDeadzone),
            Mz = this.stickRepeat.update(iz ? (0, Zz.kb)(lz) : null, uz);
          Mz && this.move(Mz)
        }
        applyCategoryPlace() {
          const zz = this.placeAfterCategory;
          if (!zz) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const uz = Mb(ku(zz.rect), this.getTargets().targets, (uz => uz.scrollGroup === zz.scrollGroup));
          this.setFocus(uz, !1)
        }
        applyFocusRequest() {
          const zz = (0, Du.r)();
          zz && (this.targets.invalidate(), this.setFocus((0, Du.c)(this.getTargets().targets, zz)))
        }
        handlePanels(zz) {
          var uz, bz, Ez;
          const nz = zz.wasPressed((0, Oz.i)("inventoryPanelPrevious")),
            iz = zz.wasPressed((0, Oz.i)("inventoryPanelNext"));
          if (!nz && !iz) return;
          const {
            targets: lz
          } = this.getTargets(), Mz = (tz = ((zz, uz) => {
            const bz = [];
            for (const nz of zz) nz.visible && !bz.includes(nz.panel) && bz.push(nz.panel);
            const Ez = zz => {
              const Ez = uz.indexOf(zz);
              return -1 === Ez ? uz.length + bz.indexOf(zz) : Ez
            };
            return bz.sort(((zz, uz) => Ez(zz) - Ez(uz)))
          })(lz, wb), Hz = null !== (uz = null === (bz = this.focusTarget) || void 0 === bz ? void 0 : bz.panel) && void 0 !== uz ? uz : null, pz = iz ? 1 : -1, 0 === tz.length ? null : tz[zb(null === Hz ? -1 : tz.indexOf(Hz), tz.length, pz)]);
          var tz, Hz, pz;
          if (null === Mz) return;
          const dz = this.panelMemory.get(Mz),
            Fz = lz.filter((zz => zz.panel === Mz)),
            Zz = null !== (Ez = Fz.find((zz => zz.element === dz && zz.visible))) && void 0 !== Ez ? Ez : jb(Fz, (0, Du.d)());
          this.setFocus(Zz)
        }
        handlePaging(zz, uz) {
          const bz = (0, Oz.i)("menuPageUp"),
            Ez = (0, Oz.i)("menuPageDown"),
            nz = this.pageUpTimer.update(zz.isHeld(bz), uz),
            iz = this.pageDownTimer.update(zz.isHeld(Ez), uz);
          if (!nz && !iz) return;
          const lz = iz ? 1 : -1;
          if (!zz.wasPressed(iz ? Ez : bz) && this.hasCategories) return;
          if ((zz => {
              const uz = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === uz.length) return !1;
              const bz = uz.findIndex((zz => zz.classList.contains("Selected"))),
                Ez = uz[zb(bz, uz.length, zz)];
              return xu(Ez, su(Ez)), !0
            })(lz)) {
            var Mz, tz;
            this.targets.invalidate();
            const zz = null !== (Mz = null === (tz = this.focusTarget) || void 0 === tz ? void 0 : tz.scrollGroup) && void 0 !== Mz ? Mz : null,
              uz = this.readFocusRect();
            return void(this.placeAfterCategory = null !== zz && uz && !this.pointer ? {
              rect: uz,
              scrollGroup: zz
            } : null)
          }
          const {
            targets: Hz
          } = this.getTargets(), pz = this.currentTarget(), dz = pz && Ab(pz) ? pz : Hz.find((zz => Ab(zz) && zz.visible));
          if (!dz) return;
          const Fz = ((zz, uz, bz, Ez) => {
            if (null === zz.scrollGroup) return null;
            const nz = ku(zz.rect),
              iz = nz.x,
              lz = nz.y + ("Down" === bz ? Ez : -Ez);
            let Mz = null,
              tz = 1 / 0;
            for (const Hz of uz) {
              if (Hz.scrollGroup !== zz.scrollGroup || Hz.key === zz.key) continue;
              const uz = ku(Hz.rect);
              if ("Down" === bz ? uz.y <= nz.y : uz.y >= nz.y) continue;
              const Ez = Math.hypot(uz.x - iz, uz.y - lz);
              Ez < tz && (Mz = Hz, tz = Ez)
            }
            return Mz
          })(dz, Hz, lz > 0 ? "Down" : "Up", dz.scrollContainer.clientHeight);
          this.setFocus(null !== Fz && void 0 !== Fz ? Fz : dz)
        }
        handleScroll(zz) {
          var uz, bz, Ez, nz, iz, lz;
          if (!this.scroller.isScrolling(zz.rightStick)) return void this.scroller.reset();
          const {
            targets: Mz
          } = this.getTargets(), tz = this.pointer, Hz = !tz && this.focusTarget && Ab(this.focusTarget) ? this.focusTarget.scrollContainer : null, Oz = tz && (null === (uz = Mz.find((zz => zz.clip && Hb(zz.clip, tz)))) || void 0 === uz ? void 0 : uz.scrollContainer), pz = null !== (bz = null !== (Ez = null !== (nz = this.scroller.current()) && void 0 !== nz ? nz : Oz) && void 0 !== Ez ? Ez : Hz) && void 0 !== bz ? bz : null === (iz = Mz.find(Ab)) || void 0 === iz ? void 0 : iz.scrollContainer;
          if (!pz || !this.scroller.step(pz, zz.rightStick, zz.dtMs)) return;
          this.targets.scrolled(pz);
          const dz = tz || (null === (lz = this.focusTarget) || void 0 === lz ? void 0 : lz.scrollContainer) !== pz ? null : this.readFocusRect();
          if (!dz) return;
          const Fz = Vz(pz),
            Zz = ku(dz);
          if (Zz.y < Fz.top || Zz.y > Fz.bottom) {
            const zz = this.focusTarget.scrollGroup,
              uz = Mb(Zz, this.getTargets().targets, (uz => uz.scrollGroup === zz));
            this.setFocus(uz, !1)
          }
        }
        focusContext(zz) {
          const {
            kind: uz,
            idx: bz
          } = this.focused ? ob(this.focused) : {
            kind: null,
            idx: null
          }, Ez = this.focused ? sb(this.focused) : null, nz = Ez ? (0, hb.e)(Ez) : null;
          return {
            kind: uz,
            idx: bz,
            actionElement: Ez,
            press: nz,
            hasPress: null !== nz,
            hasBack: !(null === nz || void 0 === nz || !nz.back),
            holding: zz.isHolding(),
            slotHasItem: null !== bz && zz.hasItemAt(bz)
          }
        }
        handleButtons(zz, uz, bz) {
          var Ez, nz;
          if (!this.activePress || zz.isHeld(this.activePress.button) && (Ez = this.activePress.target, nz = this.focused, null !== Ez.recipe ? rb(nz).recipe === Ez.recipe : nz === Ez.element) || this.releasePress(), this.scrollStickClick.update(zz.rightStick, uz), !this.handleHotbarPick(zz, bz)) {
            for (const [Ez, nz] of Sb) {
              const iz = (0, Oz.i)(nz);
              if (!zz.wasPressed(iz) || "openButton" === Ez && !Wb()) continue;
              if ("RS" === iz && !this.scrollStickClick.allowsClick(uz)) continue;
              const lz = this.focusContext(bz),
                Mz = Su(Ez, lz);
              Mz && this.runIntent(Mz, lz, iz, bz)
            }
            this.handleDrop(zz, uz, bz)
          }
        }
        handleHotbarPick(zz, uz) {
          const bz = this.hotbarPick;
          if (!bz) return !1;
          const Ez = zz.wasPressed((0, Oz.i)("inventoryPrimary")) || zz.wasPressed((0, Oz.i)("inventoryHotbarSwap"));
          if (!Ez && !zz.wasPressed((0, Oz.i)("inventoryClose")) && !uz.isHolding()) return !(zz.wasPressed((0, Oz.i)("inventory")) && Wb());
          const nz = this.focusTarget;
          Ez && "hotbar" === (null === nz || void 0 === nz ? void 0 : nz.panel) && null !== nz.idx && nz.idx !== bz.idx && (uz.swapWithHotbar(nz.idx, bz.idx), this.afterAction()), this.hotbarPick = null;
          const iz = bz.element.isConnected ? this.getTargets().byElement.get(bz.element) : void 0;
          return iz && this.setFocus(iz), !0
        }
        startHotbarPick(zz) {
          var uz;
          const {
            targets: bz,
            byElement: Ez
          } = this.getTargets(), nz = document.querySelector(cb), iz = null !== (uz = nz && Ez.get(nz)) && void 0 !== uz ? uz : bz.find((zz => "hotbar" === zz.panel));
          iz && this.focused && (this.hotbarPick = {
            idx: zz,
            element: this.focused
          }, this.setFocus(iz))
        }
        focusKey() {
          return this.focused ? ju(this.focused) : null
        }
        handleDrop(zz, uz, bz) {
          const Ez = (0, Oz.i)("inventoryDrop");
          if (zz.wasPressed(Ez)) {
            const zz = (nz = this.focusContext(bz)).holding ? {
              kind: "yM"
            } : "slot" === nz.kind && nz.slotHasItem && null !== nz.idx ? {
              kind: "slot",
              idx: nz.idx
            } : null;
            return void(zz && (this.dropFrom(zz, !1, bz), this.dropLatch.press(zz, this.focusKey(), uz, Kz.b[(0, dz.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var nz;
          const iz = this.dropLatch.update(zz.isHeld(Ez), this.focusKey(), uz);
          iz && ((zz, uz, bz) => "yM" === zz.kind ? uz : !uz && bz(zz.idx))(iz, bz.isHolding(), bz.hasItemAt) && (this.dropFrom(iz, !0, bz), this.afterAction())
        }
        dropFrom(zz, uz, bz) {
          "yM" === zz.kind ? bz.dropHeld(uz, this.slotPoint()) : bz.dropSlot(zz.idx, uz)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (zz => {
            const uz = ku(zz);
            return {
              clientX: uz.x,
              clientY: uz.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(zz, uz, bz, Ez) {
          const nz = uz.idx,
            iz = uz.actionElement;
          switch (iz && eb.has(zz) && (0, wz.s)(iz), zz) {
            case "slotPrimary":
              Ez.primary(nz, this.slotPoint());
              break;
            case "slotSecondary":
              Ez.secondary(nz, this.slotPoint());
              break;
            case "slotQuickMove":
              Ez.quickMove(nz, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(nz);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(uz.press, "pressPrimary" === zz ? "primary" : "secondary", bz);
              break;
            case "click":
              xu(iz, su(iz));
              break;
            case "openKeyboard":
              fu(iz) && Au(iz);
              break;
            case "pressBack":
              uz.press.back();
              break;
            case "cancel":
              Ez.cancel();
              break;
            case "close":
              return this.releasePress(), void Ez.close()
          }
          this.afterAction()
        }
        startPress(zz, uz, bz) {
          this.releasePress(), zz.press(uz) && (this.activePress = {
            handlers: zz,
            button: bz,
            target: rb(this.focused)
          })
        }
        releasePress() {
          var zz, uz, bz;
          null === (zz = this.activePress) || void 0 === zz || null === (uz = (bz = zz.handlers).release) || void 0 === uz || uz.call(bz), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(zz) {
          ((zz, uz) => {
            var bz, Ez, nz, iz, lz, Mz;
            return zz.showing === uz.showing && zz.kind === uz.kind && zz.holding === uz.holding && zz.slotHasItem === uz.slotHasItem && (null === (bz = zz.pressHints) || void 0 === bz ? void 0 : bz.primary) === (null === (Ez = uz.pressHints) || void 0 === Ez ? void 0 : Ez.primary) && (null === (nz = zz.pressHints) || void 0 === nz ? void 0 : nz.secondary) === (null === (iz = uz.pressHints) || void 0 === iz ? void 0 : iz.secondary) && (null === (lz = zz.pressHints) || void 0 === lz ? void 0 : lz.back) === (null === (Mz = uz.pressHints) || void 0 === Mz ? void 0 : Mz.back) && zz.hasCategories === uz.hasCategories && zz.hasList === uz.hasList && zz.openButtonCloses === uz.openButtonCloses && zz.steppingSlots === uz.steppingSlots && zz.hotbarPicking === uz.hotbarPicking && zz.quickMoveToHotbar === uz.quickMoveToHotbar && zz.dropStackHold === uz.dropStackHold
          })(zz, this.state) || (this.state = zz, Hz.k.sK(Lb.e, zz))
        }
      },
      Cb = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Yb = bz(8358),
      kb = bz(316),
      zE = bz(1595),
      uE = bz(7859);
    const bE = "[data-pad-secondary]",
      EE = zz => zz instanceof HTMLElement && Hu(zz) && !Ou(zz),
      nE = zz => {
        const uz = zz.querySelector(bE);
        if (uz && EE(uz)) return uz;
        for (const nz of null !== (bz = null === (Ez = zz.parentElement) || void 0 === Ez ? void 0 : Ez.children) && void 0 !== bz ? bz : []) {
          var bz, Ez;
          if (nz !== zz && nz.matches(bE) && EE(nz)) return nz
        }
        return null
      },
      iE = (zz, uz, bz, Ez) => Math.max(0, Math.max(zz, bz) - Math.min(uz, Ez)),
      lE = (zz, uz, bz, Ez) => Math.max(0, Math.min(uz, Ez) - Math.max(zz, bz)),
      ME = (zz, uz, bz) => {
        const Ez = (zz.left + zz.right) / 2,
          nz = (zz.top + zz.bottom) / 2,
          iz = (uz.left + uz.right) / 2,
          lz = (uz.top + uz.bottom) / 2;
        if ("Left" === bz || "Right" === bz) {
          const Mz = "Right" === bz ? 1 : -1;
          return {
            forwardGap: "Right" === bz ? uz.left - zz.right : zz.left - uz.right,
            centreForward: (iz - Ez) * Mz,
            sidewaysGap: iE(zz.top, zz.bottom, uz.top, uz.bottom),
            sidewaysOverlap: lE(zz.top, zz.bottom, uz.top, uz.bottom),
            centreSideways: Math.abs(lz - nz),
            startSideways: Math.abs(uz.top - zz.top),
            fromSidewaysSize: zz.bottom - zz.top,
            toSidewaysSize: uz.bottom - uz.top,
            toLength: uz.right - uz.left
          }
        }
        const Mz = "Down" === bz ? 1 : -1;
        return {
          forwardGap: "Down" === bz ? uz.top - zz.bottom : zz.top - uz.bottom,
          centreForward: (lz - nz) * Mz,
          sidewaysGap: iE(zz.left, zz.right, uz.left, uz.right),
          sidewaysOverlap: lE(zz.left, zz.right, uz.left, uz.right),
          centreSideways: Math.abs(iz - Ez),
          startSideways: Math.abs(uz.left - zz.left),
          fromSidewaysSize: zz.right - zz.left,
          toSidewaysSize: uz.right - uz.left,
          toLength: uz.bottom - uz.top
        }
      },
      tE = zz => zz.centreForward > .5 && zz.forwardGap >= -zz.toLength / 2,
      HE = zz => {
        const uz = zz.sidewaysOverlap > 0 ? 0 : 2 * zz.fromSidewaysSize,
          bz = zz.fromSidewaysSize > 1.5 * zz.toSidewaysSize ? zz.startSideways : zz.centreSideways;
        return Math.max(0, zz.forwardGap) + 3 * zz.sidewaysGap + uz + .1 * bz
      },
      OE = (zz, uz) => lE(zz.top, zz.bottom, uz.top, uz.bottom) > 0 || uz.bottom - uz.top > uz.right - uz.left,
      pE = (zz, uz, bz, Ez, nz, iz) => {
        const lz = nz ? FE(zz, uz, bz, nz) : new Set,
          Mz = RE(zz, uz, bz, lz);
        return Mz < 0 && lz.size > 0 && iz ? dE(zz, uz, bz, iz) : Ez && Mz >= 0 ? ZE(zz, uz, bz, Ez, Mz, lz) : Mz
      },
      dE = (zz, uz, bz, Ez) => {
        const nz = new Set,
          iz = RE(zz, uz, "Up", nz) >= 0,
          lz = RE(zz, uz, "Down", nz) >= 0,
          Mz = new Set;
        return uz.forEach(((uz, bz) => {
          const nz = uz.top + uz.bottom < zz.top + zz.bottom;
          Ez[bz] && !(nz ? iz : lz) || Mz.add(bz)
        })), RE(zz, uz, bz, Mz)
      },
      FE = (zz, uz, bz, Ez) => {
        const nz = new Set;
        return "Left" !== bz && "Right" !== bz || uz.forEach(((uz, bz) => {
          Ez[bz] && lE(zz.top, zz.bottom, uz.top, uz.bottom) <= 0 && nz.add(bz)
        })), nz
      },
      ZE = (zz, uz, bz, Ez, nz, iz) => {
        const lz = ME(zz, uz[nz], bz).forwardGap;
        let Mz = nz,
          tz = Ez[nz],
          Hz = 1 / 0;
        return uz.forEach(((uz, Oz) => {
          const pz = Ez[Oz];
          if (iz.has(Oz) || pz < tz || pz === tz && Mz === nz) return;
          const dz = ME(zz, uz, bz);
          if (!tE(dz) || dz.forwardGap < 0 || dz.forwardGap >= lz) return;
          const Fz = HE(dz);
          (pz > tz || Fz < Hz) && (Mz = Oz, tz = pz, Hz = Fz)
        })), Mz
      },
      RE = (zz, uz, bz, Ez) => {
        let nz = -1,
          iz = 1 / 0;
        if (uz.forEach(((uz, lz) => {
            const Mz = ((zz, uz, bz) => {
              const Ez = ME(zz, uz, bz);
              if (!tE(Ez)) return null;
              const nz = Math.max(0, Ez.forwardGap);
              return Ez.sidewaysOverlap <= 0 && Ez.sidewaysGap > 2 * (nz + 1) ? null : HE(Ez)
            })(zz, uz, bz);
            null !== Mz && Mz < iz && !Ez.has(lz) && (iz = Mz, nz = lz)
          })), nz < 0) return -1;
        const lz = uz[nz],
          Mz = ME(zz, lz, bz).forwardGap;
        let tz = Mz,
          Hz = nz;
        return uz.forEach(((uz, iz) => {
          if (iz === nz || Ez.has(iz) || !((zz, uz, bz) => {
              const Ez = "Left" === bz || "Right" === bz,
                nz = Ez ? lE(zz.top, zz.bottom, uz.top, uz.bottom) : lE(zz.left, zz.right, uz.left, uz.right),
                iz = Ez ? Math.min(zz.bottom - zz.top, uz.bottom - uz.top) : Math.min(zz.right - zz.left, uz.right - uz.left);
              return nz > 0 && nz >= iz / 2
            })(uz, lz, bz)) return;
          const Oz = ME(zz, uz, bz);
          tE(Oz) && Oz.forwardGap + Oz.toLength <= Mz + 1 && Oz.forwardGap < tz && (tz = Oz.forwardGap, Hz = iz)
        })), Hz
      },
      KE = (zz, uz) => {
        let bz = -1,
          Ez = 1 / 0;
        return uz.forEach(((uz, nz) => {
          const iz = Math.max(uz.left - zz.x, 0, zz.x - uz.right),
            lz = Math.max(uz.top - zz.y, 0, zz.y - uz.bottom),
            Mz = Math.hypot(iz, lz);
          Mz < Ez && (Ez = Mz, bz = nz)
        })), bz
      },
      wE = (zz, uz) => {
        const bz = Math.min(zz.bottom - zz.top, uz.bottom - uz.top) / 2;
        return Math.abs(zz.top - uz.top) > bz ? zz.top - uz.top : zz.left - uz.left
      },
      XE = zz => {
        let uz = -1;
        for (let bz = 0; bz < zz.length; bz++)(uz < 0 || wE(zz[bz], zz[uz]) < 0) && (uz = bz);
        return uz
      };
    var fE = bz(1633),
      sE = bz(8364),
      rE = bz(8371);
    const oE = zz => {
        if ("death" !== zz || "inGame" !== tz.e.get("gameState") || "off" === (0, dz.g)().quickChat || null === (0, fE.e)()) return !1;
        const uz = (0, Oz.i)("chat");
        return uz !== (0, Oz.i)("menuConfirm") && uz !== (0, Oz.i)("menuBack")
      },
      NE = new sE.d;
    var vE = bz(4090),
      xE = bz(8378);
    const JE = zz => {
        let uz = null;
        for (const bz of zz.querySelectorAll("[data-pad-tabs]")) Hu(bz) && (!uz || Number(bz.dataset.padTabs) < Number(uz.dataset.padTabs)) && (uz = bz);
        return uz
      },
      AE = (zz, uz, bz, Ez) => {
        zz.focusWhenFound((() => {
          const nz = zz.pickInitial(uz);
          if (nz && !bz.has(nz) && (null === Ez || void 0 === Ez || !Ez.contains(nz))) return nz;
          const iz = ((zz, uz) => {
              const bz = uz => zz.getEnabledCandidates(uz).filter((zz => !zz.closest("[data-pad-tabs]")));
              for (const Ez of Xu(uz)) {
                const zz = bz(Ez);
                if (zz.length > 0) return zz
              }
              return bz(uz)
            })(zz, uz).filter((zz => !bz.has(zz))),
            lz = XE(iz.map((zz => zz.getBoundingClientRect())));
          return lz >= 0 ? iz[lz] : null
        }), 3e3)
      },
      TE = (zz, uz, bz, Ez) => {
        var nz;
        const iz = ((zz, uz) => {
          if (0 === zz.length) return null;
          const bz = zz.findIndex((zz => "true" === zz.dataset.padSelected));
          return bz < 0 ? uz > 0 ? zz[0] : zz[zz.length - 1] : zz[(bz + uz + zz.length) % zz.length]
        })([...bz.querySelectorAll("[data-pad-tab]")].filter((zz => Hu(zz) && !Ou(zz))), Ez);
        if (!iz) return;
        const lz = null !== (nz = null === zz || void 0 === zz ? void 0 : zz.getFocused()) && void 0 !== nz ? nz : null,
          Mz = !(null === lz || void 0 === lz || !lz.isConnected) && bz.contains(lz),
          tz = zz && !Mz ? new Set(zz.getEnabledCandidates(uz)) : null;
        Tu(iz), zz && (tz ? AE(zz, uz, tz, bz) : zz.setFocus(iz, {
          byUser: !0
        }))
      },
      LE = zz => {
        var uz;
        const bz = Vz(null !== (uz = Az(zz, "x")) && void 0 !== uz ? uz : zz),
          Ez = Fu(zz).filter((zz => !Ou(zz))),
          nz = Ez.filter((zz => mz(zz.getBoundingClientRect(), bz)));
        return (nz.length > 0 ? nz : Ez).sort(((zz, uz) => wE(zz.getBoundingClientRect(), uz.getBoundingClientRect())))
      },
      PE = (zz, uz, bz) => {
        const Ez = [...uz.querySelectorAll("[data-pad-row]")].filter(Hu),
          nz = zz.getFocused(),
          iz = nz ? Ez.findIndex((zz => zz.contains(nz))) : -1;
        let lz = 0,
          Mz = bz > 0 ? 0 : Ez.length - 1;
        if (iz >= 0 && nz) lz = Math.max(0, LE(Ez[iz]).indexOf(nz)), Mz = iz + bz;
        else if (nz) {
          const zz = nz.getBoundingClientRect(),
            uz = Ez.map((uz => {
              const Ez = uz.getBoundingClientRect();
              return bz > 0 ? Ez.top >= zz.top : Ez.bottom <= zz.bottom
            }));
          Mz = bz > 0 ? uz.indexOf(!0) : uz.lastIndexOf(!0)
        }
        for (let tz = Mz; tz >= 0 && tz < Ez.length; tz += bz) {
          const uz = LE(Ez[tz]);
          if (uz.length > 0) return void zz.setFocus(uz[Math.min(lz, uz.length - 1)], {
            byUser: !0
          })
        }
      },
      GE = (zz, uz, bz) => {
        var Ez, nz;
        const iz = null !== (Ez = null === zz || void 0 === zz ? void 0 : zz.getFocused()) && void 0 !== Ez ? Ez : null,
          lz = null !== iz && void 0 !== iz && iz.closest("[data-pad-row]") ? "x" : "y",
          Mz = null !== (nz = iz ? Az(iz, lz, uz) : null) && void 0 !== nz ? nz : Lz(uz, lz);
        if (!Mz) return;
        const tz = iz ? su(iz) : null;
        if (az(Mz, lz, bz * ("y" === lz ? Mz.clientHeight : Mz.clientWidth) * .85), !zz || !tz) return;
        const Hz = Vz(Mz),
          Oz = zz.getEnabledCandidates(uz).filter((zz => Mz.contains(zz) && mz(zz.getBoundingClientRect(), Hz))),
          pz = KE(tz, Oz.map((zz => zz.getBoundingClientRect())));
        pz >= 0 && zz.setFocus(Oz[pz], {
          scroll: !1,
          byUser: !0
        })
      };
    let aE = null;
    const VE = (zz, uz) => {
        var bz, Ez;
        const nz = uz.querySelector("[data-pad-friends-column]"),
          iz = zz.getFocused();
        if (!nz || !iz || !nz.contains(iz)) return !1;
        const lz = zz.getEnabledCandidates(uz).filter((zz => !nz.contains(zz))),
          Mz = KE(su(iz), lz.map((zz => zz.getBoundingClientRect()))),
          tz = null === (bz = aE) || void 0 === bz ? void 0 : bz.deref();
        return zz.setFocus(null !== tz && void 0 !== tz && tz.isConnected ? tz : null !== (Ez = lz[Mz]) && void 0 !== Ez ? Ez : null, {
          byUser: !0
        }), !0
      },
      mE = zz => {
        const uz = (0, Oz.i)(zz);
        return (0, Zz.O)(uz) || uE.r.some((zz => (0, Oz.i)(zz) === uz)) ? null : uz
      },
      qE = (zz, uz) => {
        const bz = mE(uz);
        return null !== bz && zz.wasPressed(bz)
      },
      hE = function(zz, uz, bz) {
        let Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const nz = (zz => {
            var uz, bz;
            return null !== (uz = null === (bz = JE(zz)) || void 0 === bz ? void 0 : bz.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== uz ? uz : null
          })(uz),
          iz = zz && nz ? new Set(zz.getEnabledCandidates(uz)) : null;
        (0, Yb.e)(), bz === kb.r.SETTINGS && (0, zE.f)(tz.e.get("openEverythingMenuName")) ? tz.e.set({
          openEverythingMenuName: bz
        }) : (0, zE.t)(new Event("padMenuShortcut"), bz, Ez), zz && iz && nz && AE(zz, uz, iz, nz.closest("[data-pad-tabs]"))
      },
      UE = zz => null !== zz.closest(".Dropdown-root") || null !== zz.querySelector(".Dropdown-root.is-open"),
      cE = zz => null !== (0, xE.b)() && "popup" !== zz.layer.kind && !JE(zz.root) && !UE(zz.root),
      gE = (0, Rz.e)(Zz.hb),
      SE = (0, Rz.e)(Zz.hb),
      yE = (zz, uz, bz) => {
        if (((zz, uz) => {
            const bz = (0, Oz.i)("chat");
            return oE(uz) && zz.isHeld(bz) ? "hold" === NE.update(zz.wasPressed(bz), zz.isHeld(bz), performance.now(), Kz.b[(0, dz.g)().tapHoldTime].wheelMs) && (pz.b.consumeButton(bz), Hz.k.sK(rE.p), !0) : (NE.release(), !1)
          })(uz, bz.layer.kind)) return !0;
        const Ez = bz.root;
        for (const [lz, Mz] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (uz.wasPressed((0, Oz.i)(lz))) {
            const uz = UE(Ez) ? null : JE(Ez);
            if (uz) TE(zz, Ez, uz, Mz);
            else if (cE(bz)) {
              var nz;
              const uz = zz ? new Set(zz.getEnabledCandidates(Ez)) : null;
              null !== (nz = (0, xE.b)()) && void 0 !== nz && nz(Mz) && zz && uz && AE(zz, Ez, uz, null)
            } else zz && PE(zz, Ez, Mz);
            return !0
          } for (const [lz, Mz, tz] of [
            ["menuPageUp", -1, gE],
            ["menuPageDown", 1, SE]
          ]) {
          const bz = (0, Oz.i)(lz);
          if (uz.wasPressed(bz) && tz.reset(), tz.update(uz.isHeld(bz), performance.now())) return GE(zz, Ez, Mz), !0
        }
        const iz = "popup" === bz.layer.kind;
        return qE(uz, "pause") ? (iz || (0, zE.p)() && "menu" !== bz.layer.kind || hE(zz, Ez, (0, zE.p)() ? kb.r.SETTINGS : (0, vE.e)()), !0) : !!qE(uz, "leaderboard") && ("home" === bz.layer.kind ? (zz => {
          const uz = [...zz.querySelectorAll("[data-pad-notifications]")].find(Hu);
          uz && Tu(uz)
        })(Ez) : iz || hE(zz, Ez, kb.r.LOBBY_LEADERBOARD, "inGame" === tz.e.get("gameState")), !0)
      },
      DE = (zz, uz, bz) => {
        if (yE(zz, uz, bz)) return !0;
        const Ez = "home" === bz.layer.kind;
        if (uz.wasPressed((0, Oz.i)("menuSecondary"))) {
          const uz = zz.getFocused(),
            nz = uz ? nE(uz) : null;
          if (nz) return Tu(nz), !0;
          if (Ez) {
            const uz = bz.root.querySelector("[data-pad-search] input");
            return uz && wu(uz, bz.root) ? (zz.setFocus(uz, {
              byUser: !0
            }), Tu(uz)) : tz.e.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Ez || !qE(uz, "inventory")) && (((zz, uz) => {
          var bz, Ez;
          const nz = uz.querySelector("[data-pad-friends-column]");
          if (!nz || !Hu(nz)) return void(0, zE.t)(new Event("padMenuShortcut"), kb.r.SOCIAL);
          if (VE(zz, uz)) return;
          const iz = null !== (bz = null === (Ez = nz.querySelector("[data-pad-friends-start]")) || void 0 === Ez ? void 0 : Ez.getBoundingClientRect().top) && void 0 !== bz ? bz : -1 / 0,
            lz = zz.getEnabledCandidates(nz),
            Mz = lz.filter((zz => zz.getBoundingClientRect().top >= iz)),
            tz = Mz.length > 0 ? Mz : lz,
            Hz = XE(tz.map((zz => zz.getBoundingClientRect())));
          zz.setFocus(Hz >= 0 ? tz[Hz] : null, {
            byUser: !0
          })
        })(zz, bz.root), !0)
      },
      QE = zz => {
        var uz, bz, Ez;
        const nz = Uu(zz);
        if (null !== nz) return nz;
        const iz = (null !== (uz = null !== (bz = null !== (Ez = zz.getAttribute("aria-label")) && void 0 !== Ez ? Ez : zz.getAttribute("title")) && void 0 !== bz ? bz : zz.textContent) && void 0 !== uz ? uz : "").replace(/\s+/g, " ").trim();
        return iz ? `${zz.tagName}:${iz.slice(0,100)}` : null
      };
    class WE {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(zz) {
        const uz = this.history.indexOf(zz);
        if (uz >= 0) {
          for (const zz of this.history.splice(uz + 1)) this.remembered.delete(zz);
          return !0
        }
        return this.remembered.delete(zz), this.history.push(zz), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(zz) {
        this.remembered.delete(zz);
        const uz = this.history.indexOf(zz);
        uz >= 0 && this.history.splice(uz, 1)
      }
      remember(zz, uz, bz, Ez) {
        const nz = QE(uz),
          iz = Uu(uz),
          lz = null !== iz && ((zz, uz) => {
            let bz = 0;
            for (const Ez of zz.querySelectorAll("[data-pad-key], [href]"))
              if ((Ez.getAttribute("data-pad-key") === uz || Ez.getAttribute("href") === uz) && (bz++, bz > 1)) return !0;
            return !1
          })(bz, iz) ? Math.max(0, this.twins(Ez(), iz).indexOf(uz)) : 0;
        this.remembered.set(zz, {
          element: new WeakRef(uz),
          identity: nz,
          ordinal: lz
        })
      }
      has(zz) {
        return this.remembered.has(zz)
      }
      recall(zz, uz) {
        var bz, Ez;
        const nz = this.remembered.get(zz);
        if (!nz) return null;
        const iz = nz.element.deref();
        if (iz && uz.includes(iz)) return iz;
        if (null === nz.identity) return null;
        const lz = this.twins(uz, nz.identity);
        return null !== (bz = null !== (Ez = lz[nz.ordinal]) && void 0 !== Ez ? Ez : lz[0]) && void 0 !== bz ? bz : null
      }
      twins(zz, uz) {
        return zz.filter((zz => QE(zz) === uz))
      }
    }
    var eE = bz(1266);
    const jE = zz => {
        const uz = [];
        let bz = zz;
        for (; bz && bz !== document.body;) {
          const zz = getComputedStyle(bz).zIndex;
          "auto" !== zz && uz.push(Number(zz) || 0), bz = bz.parentElement
        }
        return uz.reverse()
      },
      IE = (zz, uz) => {
        const bz = ((zz, uz) => {
          const bz = Math.max(zz.length, uz.length);
          for (let iz = 0; iz < bz; iz++) {
            var Ez, nz;
            const bz = (null !== (Ez = zz[iz]) && void 0 !== Ez ? Ez : 0) - (null !== (nz = uz[iz]) && void 0 !== nz ? nz : 0);
            if (0 !== bz) return bz
          }
          return 0
        })(jE(zz), jE(uz));
        if (0 !== bz) return bz > 0;
        if (zz.contains(uz)) return !1;
        if (uz.contains(zz)) return !0;
        const Ez = zz.compareDocumentPosition(uz);
        return !!(Ez & Node.DOCUMENT_POSITION_PRECEDING) || !(Ez & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      BE = (zz, uz) => {
        var bz;
        return null !== (bz = IE(zz.root, uz.root)) && void 0 !== bz ? bz : zz.order > uz.order
      },
      CE = (zz, uz) => uz.some((uz => !uz.contains(zz) && !zz.contains(uz) && !0 === IE(uz, zz)));
    let YE = null,
      kE = null,
      zn = -1;
    const un = () => {
        var zz;
        const uz = null === (zz = document.timeline) || void 0 === zz ? void 0 : zz.currentTime,
          bz = "number" === typeof uz ? uz : null;
        if (null !== bz && bz === kE && zn === (0, eE.e)()) return YE;
        let Ez = null;
        const nz = [],
          iz = [...document.querySelectorAll("[data-pad-covers]")].filter(Hu);
        for (const lz of (0, eE.h)()) {
          const zz = lz.getRoot(),
            uz = !!zz && Hu(zz) && !CE(zz, iz);
          if (lz.shown && !uz && nz.push(lz), lz.shown = uz, !zz || !uz) continue;
          const bz = {
            layer: lz,
            root: zz,
            order: lz.order
          };
          Ez && !BE(bz, Ez) || (Ez = bz)
        }
        YE = Ez, kE = bz, zn = (0, eE.e)();
        for (const lz of nz)(0, eE.i)(lz);
        return YE
      },
      bn = () => {
        const zz = un();
        return !(null === zz || void 0 === zz || !zz.layer.close) && (zz.layer.close(), kE = null, !0)
      },
      En = () => {
        var zz, uz;
        return null !== (zz = null === (uz = un()) || void 0 === uz ? void 0 : uz.root) && void 0 !== zz ? zz : null
      },
      nn = zz => zz ? {
        ...zz,
        root: En()
      } : null;
    let Mn = null,
      tn = null,
      Hn = (0, dz.g)().menuNavigation,
      On = null;
    const pn = new rz;
    let dn = null;
    Hz.k.subscribe(dz.f, (() => {
      const zz = (0, dz.g)().menuNavigation;
      zz !== Hn && (Hn = zz, Mn = null, tn = null)
    }));
    const Fn = () => {
        var zz;
        return null !== (zz = Mn) && void 0 !== zz ? zz : (0, dz.g)().menuNavigation
      },
      Zn = zz => {
        if (Xn()) {
          if (On = nn(zz), "hybrid" === Fn()) return pn.lock(), void(tn = tn ? null : En());
          Mn = "focus" === Fn() ? "cursor" : "focus"
        }
      },
      Rn = () => {
        const zz = On;
        return On = null, zz
      };
    let Kn = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const wn = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const bz = Kn.root === zz,
          Ez = bz ? Kn.firstSeenMs : uz,
          nz = Kn.has || uz - Ez > 1e3;
        return (!bz || !nz || uz - Kn.atMs > 250) && (Kn = {
          root: zz,
          firstSeenMs: Ez,
          atMs: uz,
          has: Ru(zz)
        }), Kn.has
      },
      Xn = () => {
        const zz = En();
        return null !== zz && wn(zz)
      },
      fn = () => {
        const zz = un();
        return tn && (null === zz || void 0 === zz ? void 0 : zz.root) !== tn && (tn = null), (zz => {
          let {
            mode: uz,
            hasLayer: bz,
            hasCandidates: Ez,
            hybridCursorEngaged: nz
          } = zz;
          return bz ? "cursor" !== uz && Ez() ? "hybrid" === uz && nz ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Fn(),
          hasLayer: null !== zz,
          hasCandidates: () => null !== zz && wn(zz.root),
          hybridCursorEngaged: null !== tn
        })
      },
      sn = () => "hybrid" === Fn() && Xn(),
      rn = "pad-focused";
    var Nn = bz(4303),
      vn = bz(4776);
    const xn = "[data-pad-destructive]",
      Jn = `${xn}, [data-pad-back]`,
      An = zz => ({
        rect: zz.getBoundingClientRect(),
        destructive: zz.matches(xn),
        closes: null !== zz.closest("[data-pad-close-button]"),
        unavailable: zz.matches("[data-pad-unavailable]")
      }),
      Tn = zz => {
        let {
          destructive: uz,
          closes: bz,
          unavailable: Ez
        } = zz;
        return uz ? bz ? 2 : 3 : Ez ? 1 : 0
      },
      Ln = zz => {
        let uz = -1;
        for (let bz = 0; bz < zz.length; bz++) {
          if (uz < 0) {
            uz = bz;
            continue
          }
          const Ez = zz[bz],
            nz = zz[uz];
          Tn(Ez) === Tn(nz) ? wE(Ez.rect, nz.rect) < 0 && (uz = bz) : Tn(Ez) < Tn(nz) && (uz = bz)
        }
        return uz
      },
      Pn = "[data-pad-tabs]",
      Gn = "[data-pad-tab]",
      an = (zz, uz) => {
        const bz = zz.querySelector(`${Gn}[data-pad-selected='true']`);
        return bz && uz.includes(bz) ? bz : null
      },
      Vn = (zz, uz) => {
        let bz = uz;
        for (let Ez = uz.parentElement; Ez && !Ez.contains(zz); Ez = Ez.parentElement) bz = Ez;
        return bz
      };
    class mn {
      constructor() {
        this.contentReturn = null
      }
      redirect(zz, uz, bz, Ez) {
        var nz, iz;
        const lz = zz.closest(Pn),
          Mz = uz.closest(Pn);
        var tz;
        if (Mz && Mz !== lz) return lz || (this.contentReturn = new WeakRef(zz)), null !== (tz = an(Mz, bz)) && void 0 !== tz ? tz : uz;
        if (!lz || Mz) return uz;
        const Hz = Vn(zz, uz),
          Oz = null === (nz = this.contentReturn) || void 0 === nz ? void 0 : nz.deref();
        return Oz && Hz.contains(Oz) && bz.includes(Oz) ? Oz : null !== (iz = this.pickRegionStart(Hz, Az(uz, "y", Ez), bz)) && void 0 !== iz ? iz : uz
      }
      findTabContent(zz, uz, bz) {
        const Ez = zz.closest(Pn);
        if (!Ez || !zz.matches(Gn) || Ez.contains(uz)) return null;
        const nz = uz.closest(Pn);
        if (nz && Number(nz.dataset.padTabs) <= Number(Ez.dataset.padTabs)) return null;
        const iz = Vn(zz, uz);
        return bz.some((zz => iz.contains(zz) && !zz.closest(Jn))) || !uz.closest(Jn) ? iz : null
      }
      pickContentStart(zz, uz, bz) {
        return this.contentReturn = null, this.pickRegionStart(zz, Az(zz, "y", bz), uz)
      }
      pickReplacedContentStart(zz, uz, bz, Ez) {
        if (!uz.contains(zz)) return null;
        const nz = Vn(uz, zz),
          iz = bz.filter((zz => uz.contains(zz) && !nz.contains(zz) && !zz.closest(Jn)));
        return 0 === iz.length ? null : (this.contentReturn = null, this.pickRegionStart(uz, Az(iz[0], "y", Ez), iz))
      }
      backToStrip(zz, uz, bz) {
        if (zz.closest(Pn)) return null;
        const Ez = JE(bz);
        for (const nz of bz.querySelectorAll(Pn)) {
          if (Number(nz.dataset.padTabs) <= 1 || nz === Ez) continue;
          const iz = an(nz, uz),
            lz = iz ? Vn(zz, nz).parentElement : null;
          if (iz && lz && lz !== bz && bz.contains(lz)) return this.contentReturn = new WeakRef(zz), iz
        }
        return null
      }
      pickRegionStart(zz, uz, bz) {
        const Ez = Vz(uz),
          nz = zz => {
            const uz = bz.filter((uz => zz.contains(uz) && !uz.closest(Pn) && mz(uz.getBoundingClientRect(), Ez))),
              nz = Ln(uz.map(An));
            return nz >= 0 ? uz[nz] : null
          };
        for (const iz of Xu(zz)) {
          const zz = nz(iz);
          if (zz) return zz
        }
        for (const iz of zz.querySelectorAll(Pn)) {
          const zz = an(iz, bz);
          if (zz) return zz
        }
        return nz(zz)
      }
    }
    const qn = "[data-pad-default-focus], .Dropdown-option.is-selected",
      hn = ".Dropdown-root.is-open > .Dropdown-menu",
      Un = "[data-pad-no-step-in]",
      cn = "[data-pad-tabs]",
      gn = "[data-pad-press-area]",
      Sn = zz => {
        let uz = zz;
        for (let bz = 0; uz && bz <= 4; bz++, uz = uz.parentElement) {
          const bz = uz.querySelector(".CircleInfo");
          if (bz) return uz === zz || uz.querySelectorAll(Mu).length <= 1 ? bz : null;
          if (uz !== zz && uz.querySelectorAll(Mu).length > 1) return null
        }
        return null
      },
      yn = (zz, uz, bz) => {
        Ju(zz, uz, bz);
        const Ez = null !== zz && void 0 !== zz && zz.isConnected ? Sn(zz) : null,
          nz = Sn(uz);
        Ez !== nz && Ju(Ez, nz, nz ? su(nz) : bz, {
          leaveBelow: zz,
          enterBelow: uz
        })
      },
      Dn = zz => zz.getBoundingClientRect(),
      Qn = (zz, uz, bz) => {
        const Ez = new Set(bz);
        for (let nz = zz; nz; nz = nz === uz ? null : nz.parentElement)
          if (Ez.has(nz)) return nz;
        return null
      },
      Wn = (zz, uz) => !zz.root || zz.root === uz || uz.matches(hn) && zz.root.contains(uz);
    const en = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new WE, this.tabStripNav = new mn, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Rz.e)(Zz.y), this.dpadRepeats = new Map(Zz.H.map((zz => [zz, (0, Rz.e)(Zz.K)]))), this.stickRepeat = new Zz.c((0, Rz.e)(Zz.jb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const zz = pz.b.register({
            name: "focus",
            isActive: () => (0, Fz.h)() && "focus" === fn(),
            onFrame: zz => {
              this.onFrame(zz)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: zz => (0, pz.f)(zz) || zz === (0, Oz.i)("menuConfirm") && mu((0, Fz.d)())
          }),
          uz = (0, eE.l)((zz => {
            const uz = (0, eE.q)(zz);
            null === zz.memoryKey && this.memory.forget(uz), uz === this.layerKey && (this.layerKey = null)
          }));
        let bz = -1 / 0;
        const Ez = lz.g.onFrame((zz => {
            (0, Fz.h)() || zz.timestampMs - bz < 100 || (bz = zz.timestampMs, un())
          })),
          nz = zz => {
            zz.isTrusted && zz.target instanceof Element && lz.g.getActivePad() && this.noteChosenStop(zz.target)
          };
        return document.addEventListener("click", nz, !0), () => {
          zz(), uz(), Ez(), document.removeEventListener("click", nz, !0), this.deactivate()
        }
      }
      noteChosenStop(zz) {
        var uz, bz;
        const Ez = un();
        if (!Ez || !Ez.root.contains(zz)) return;
        const nz = null !== (uz = null === (bz = zz.closest(".Dropdown-root")) || void 0 === bz ? void 0 : bz.querySelector(".Dropdown-control")) && void 0 !== uz ? uz : zz,
          iz = Qn(nz, Ez.root, this.getEnabledCandidates(Ez.root));
        if (!iz) return;
        const lz = (0, eE.q)(Ez.layer);
        lz === this.layerKey && Ez.root === this.layerRoot || this.beginLayer(Ez, lz), this.wasActive ? this.setFocus(iz, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = iz, this.lastFocusedCentre = su(iz), this.rememberFocus(iz), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
      deactivate() {
        var zz;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const zz of this.dpadRepeats.values()) zz.reset();
          this.stickRepeat.reset(), null !== (zz = this.focused) && void 0 !== zz && zz.isConnected && yn(this.focused, null, su(this.focused)), this.notify()
        }
      }
      setFocus(zz) {
        var uz;
        let {
          scroll: bz = !0,
          byUser: Ez = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Ez && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), zz === this.focused) return;
        const nz = null !== (uz = this.focused) && void 0 !== uz && uz.isConnected ? this.focused : null;
        if (this.focused = zz, zz) {
          bz && (zz.classList.add(rn), zz.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Ez && ((zz, uz) => {
            const bz = uz.closest("[data-pad-friends-column]");
            bz && zz && !bz.contains(zz) && (aE = new WeakRef(zz))
          })(nz, zz);
          const uz = su(zz);
          this.lastFocusedCentre = uz, this.movedInLayer && this.rememberFocus(zz), yn(nz, zz, uz), "false" === zz.getAttribute("aria-pressed") && zz.closest("[data-pad-select-on-focus]") && Tu(zz)
        } else nz && yn(nz, null, su(nz));
        this.notify()
      }
      rememberFocus(zz) {
        const uz = this.layerRoot;
        this.layerKey && uz && this.memory.remember(this.layerKey, zz, uz, (() => this.getEnabledCandidates(uz)))
      }
      noteCursorActivation(zz) {
        const uz = un();
        if (!uz || !uz.root.contains(zz)) return;
        const bz = this.getEnabledCandidates(uz.root),
          Ez = new Set(bz);
        let nz = zz;
        for (; nz && !Ez.has(nz);) nz = nz === uz.root ? null : nz.parentElement;
        if (!(nz instanceof HTMLElement)) return;
        const iz = (0, eE.q)(uz.layer);
        this.memory.enter(iz), this.memory.remember(iz, nz, uz.root, (() => bz))
      }
      notePageEnteredByCursor(zz) {
        return this.memory.enter(zz)
      }
      recallStop(zz, uz) {
        return this.findRemembered(zz, uz)
      }
      focusWhenFound(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: zz,
          untilMs: performance.now() + uz,
          holdWhile: bz
        }
      }
      getEnabledCandidates(zz) {
        return Fu(zz).filter((zz => !Ou(zz)))
      }
      onFrame(zz) {
        var uz;
        const bz = un();
        if (!bz) return;
        const Ez = null !== (uz = this.findOpenDropdown(bz)) && void 0 !== uz ? uz : bz,
          nz = performance.now(),
          iz = (0, eE.q)(Ez.layer);
        if (iz !== this.layerKey || Ez.root !== this.layerRoot) {
          const uz = this.focused;
          if (null !== this.layerKey && Ez.root === this.layerRoot && uz && wu(uz, Ez.root)) this.continueLayer(iz, uz), this.wasActive || this.resume(Ez.root, nz);
          else {
            const uz = !this.wasActive && !zz.wokeDevice,
              lz = "death" === this.layerKind || uz,
              Mz = this.enterLayer(Ez, iz);
            "popup" !== Ez.layer.kind || Ez !== bz || Mz ? "menu" === Ez.layer.kind && lz && "inGame" === tz.e.get("gameState") && !(0, Yb.i)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = nz + Nn.c) : (this.pressGuardExtends = uz, this.pressGuardUntilMs = nz + (uz ? Nn.c : lz ? 500 : 250))
          }
        } else this.wasActive || this.resume(Ez.root, nz);
        if (this.layerKind = Ez.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), zz.wokeDevice && this.focusPointedStop(Ez.root), this.validateFocus(Ez, nz), nz < this.pressGuardUntilMs && this.pressGuardExtends && (zz.wasPressed((0, Oz.i)("menuConfirm")) || zz.wasPressed((0, Oz.i)("menuBack"))) && (this.pressGuardUntilMs = nz + Nn.c), nz >= this.pressGuardUntilMs && this.handleButtons(zz, Ez)) return;
        const lz = "hybrid" === Fn();
        if (lz && (zz => {
            const uz = En();
            return uz !== dn && (dn = uz, pn.lock()), pn.update(zz, (0, dz.g)().moveDeadzone)
          })(zz.leftStick)) return Mz = this.getHandoff(), On = nn(Mz), tn = En(), void pz.b.handOffHeldInput();
        var Mz;
        this.handleDirections(zz, Ez, nz, !lz), this.handleScroll(zz, Ez)
      }
      findOpenDropdown(zz) {
        const uz = zz.root.querySelector(hn);
        if (!uz || !Hu(uz)) return null;
        let bz = this.dropdownLayers.get(uz);
        return bz || (this.dropdownLayerCounter++, bz = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: zz.layer.kind,
          getRoot: () => uz,
          close: () => {
            Gu(uz)
          },
          memoryKey: null
        }, this.dropdownLayers.set(uz, bz)), {
          layer: bz,
          root: uz,
          order: zz.order
        }
      }
      focusPointedStop(zz) {
        const uz = (0, Fz.d)(),
          bz = uz ? document.elementFromPoint(uz.x, uz.y) : null;
        if (!bz || !zz.contains(bz)) return;
        const Ez = Qn(bz, zz, this.getEnabledCandidates(zz));
        Ez && this.setFocus(Ez, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(zz, uz) {
        const bz = this.beginLayer(zz, uz),
          Ez = Rn();
        return Ez && Wn(Ez, zz.root) ? (this.takeOver(zz.root, Ez, this.enteredLayerAtMs), bz) : (this.restoreLayerFocus(zz.root, bz), bz)
      }
      beginLayer(zz, uz) {
        return this.layerKey = uz, this.layerRoot = zz.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(uz)
      }
      restoreLayerFocus(zz, uz) {
        const bz = uz && this.layerKey ? this.findRemembered(zz, this.layerKey) : null;
        this.restoredFromMemory = null !== bz, this.setFocus(null !== bz && void 0 !== bz ? bz : this.pickInitial(zz, {
          waitForContent: !0
        }))
      }
      continueLayer(zz, uz) {
        this.layerKey = zz;
        const bz = this.memory.enter(zz);
        this.restoreOnFocusLoss = bz, this.movedInLayer && !bz && this.rememberFocus(uz)
      }
      resume(zz, uz) {
        var bz;
        const Ez = Rn();
        Ez && Wn(Ez, zz) ? this.takeOver(zz, Ez, uz) : null !== (bz = this.focused) && void 0 !== bz && bz.isConnected && yn(null, this.focused, su(this.focused))
      }
      pickPreferred(zz) {
        var uz;
        return null !== (uz = this.layerKey ? this.findRemembered(zz, this.layerKey) : null) && void 0 !== uz ? uz : this.pickInitial(zz, {
          waitForContent: !0
        })
      }
      findRemembered(zz, uz) {
        return this.memory.has(uz) ? this.memory.recall(uz, this.getEnabledCandidates(zz)) : null
      }
      getHandoff() {
        var zz, uz, bz;
        const Ez = null !== (zz = this.focused) && void 0 !== zz && zz.isConnected ? this.focused : null,
          nz = null !== (uz = this.layerRoot) && void 0 !== uz && uz.isConnected ? this.layerRoot : null;
        return {
          point: Ez ? su(Ez) : null !== (bz = this.lastFocusedCentre) && void 0 !== bz ? bz : this.getLayerStartPoint(nz),
          element: Ez,
          direction: null
        }
      }
      getLayerStartPoint(zz) {
        if (!zz) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const uz = this.pickInitial(zz, {
          includeDisabled: !0
        });
        return su(null !== uz && void 0 !== uz ? uz : zz)
      }
      takeOver(zz, uz, bz) {
        const {
          element: Ez,
          direction: nz,
          point: iz
        } = uz, lz = Ez instanceof HTMLElement && wu(Ez, zz) ? Ez : null;
        if (!nz) {
          const uz = this.focused;
          return lz ? this.setFocus(lz, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(zz, iz), void(this.focused && this.focused === uz && this.focused.isConnected && yn(null, this.focused, su(this.focused)))
        }
        if (this.dpadRepeats.get(nz).update(!0, bz), lz) return this.setFocus(lz, {
          scroll: !1,
          byUser: !0
        }), void this.move(zz, nz, bz, !0);
        const Mz = this.getEnabledCandidates(zz),
          tz = Mz.map(Dn),
          Hz = pE(new DOMRect(iz.x, iz.y, 0, 0), tz, nz),
          Oz = Hz >= 0 ? Hz : KE(iz, tz);
        this.setFocus(Oz >= 0 ? Mz[Oz] : this.pickInitial(zz), {
          byUser: !0
        })
      }
      focusNearest(zz, uz) {
        const bz = this.getEnabledCandidates(zz),
          Ez = KE(uz, bz.map(Dn));
        this.setFocus(Ez >= 0 ? bz[Ez] : this.pickInitial(zz), {
          byUser: !0
        })
      }
      pickDefault(zz) {
        let {
          includeDisabled: uz = !1,
          exclude: bz = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ez = [...zz.querySelectorAll(qn)].filter((Ez => (null === bz || void 0 === bz || !bz.has(Ez)) && (uz ? Ku(Ez, zz) : wu(Ez, zz)))),
          nz = Ln(Ez.map(An));
        return nz >= 0 ? Ez[nz] : null
      }
      pickNewAreaStart(zz, uz) {
        const bz = [...zz.querySelectorAll(gn)].filter(Hu);
        for (const Ez of [...Xu(zz), ...bz]) {
          if (uz.has(Ez)) continue;
          const zz = this.getEnabledCandidates(Ez),
            bz = Ln(zz.map(An));
          if (bz >= 0) return zz[bz]
        }
        return null
      }
      pickInitial(zz) {
        let {
          includeDisabled: uz = !1,
          waitForContent: bz = !1,
          enteredAtMs: Ez = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const nz = this.pickDefault(zz, {
          includeDisabled: uz
        });
        if (nz) return nz;
        const iz = zz => uz ? Fu(zz) : this.getEnabledCandidates(zz);
        let lz = [];
        for (const dz of Xu(zz))
          if (lz = iz(dz), lz.length > 0) break;
        if (0 === lz.length) {
          if (bz && performance.now() - Ez < 1e4 && (zz => {
              for (const uz of zz.querySelectorAll("[data-pad-initial-area]"))
                if (!tu(uz, !1)) return !0;
              return !1
            })(zz)) return null;
          lz = iz(zz)
        }
        const Mz = lz.map(Dn),
          tz = Vz(null),
          Hz = lz.filter(((zz, uz) => mz(Mz[uz], tz))),
          Oz = Hz.length > 0 ? Hz : lz,
          pz = Ln(Oz.map(An));
        return pz >= 0 ? Oz[pz] : null
      }
      validateFocus(zz, uz) {
        if (this.pendingFocus) {
          var bz, Ez;
          const nz = this.pendingFocus.find();
          if (nz && wu(nz, zz.root)) return this.pendingFocus = null, void this.setFocus(nz, {
            byUser: !0
          });
          uz > this.pendingFocus.untilMs && (null === (bz = (Ez = this.pendingFocus).holdWhile) || void 0 === bz || !bz.call(Ez)) && (this.pendingFocus = null)
        }
        const nz = this.focused,
          iz = !!nz && wu(nz, zz.root);
        if (!(!iz && nz && nz === this.lastActivated && uz - this.lastActivatedAtMs < 5e3 && zz.root.contains(nz) && Hu(nz) && Ou(nz))) {
          if (!iz && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = uz, void this.restoreLayerFocus(zz.root, !0);
          if ((!iz || !this.movedInLayer && !this.scrolledInLayer) && !(uz - this.lastRefocusCheckMs < (iz ? 200 : 50)))
            if (this.lastRefocusCheckMs = uz, iz) {
              const bz = uz - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(zz.root) : null,
                Ez = null !== bz && void 0 !== bz ? bz : this.restoredFromMemory ? null : this.pickDefault(zz.root);
              Ez && Ez !== nz && this.setFocus(Ez)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const uz = this.pendingFocus;
                return this.focusNearest(zz.root, this.lastFocusedCentre), void(this.pendingFocus = uz)
              }
              this.setFocus(this.pickPreferred(zz.root))
            }
        }
      }
      handleButtons(zz, uz) {
        if (zz.wasPressed((0, Oz.i)("menuToggleCursor"))) return Zn(this.getHandoff()), !0;
        if (zz.wasPressed((0, Oz.i)("menuBack"))) {
          const zz = Gu(uz.root);
          return zz ? this.setFocus(zz, {
            byUser: !0
          }) : VE(this, uz.root) || (hu(uz.root) ? this.returnToOpener(uz.root) : this.backToStrip(uz.root) || bn()), !0
        }
        const bz = (0, Oz.i)("menuConfirm");
        var Ez, nz;
        zz.wasPressed(bz) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Ez = null === (nz = this.focused) || void 0 === nz ? void 0 : nz.getAttribute("data-pad-repeat")) && void 0 !== Ez ? Ez : null, this.confirmRepeated = zz.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (zz.wasReleased(bz)) {
          const zz = this.confirmPressedOn;
          if (this.confirmPressedOn = null, zz && !this.confirmRepeated && zz === this.focused && zz.isConnected && !Ou(zz)) {
            const bz = zz.matches("[data-pad-tab]") ? zz.closest(cn) : null;
            bz ? this.enterTab(zz, bz, uz.root, performance.now()) : this.activate(zz)
          }
          return !0
        }
        return this.repeatConfirm(zz, bz), DE(this, zz, uz)
      }
      repeatConfirm(zz, uz) {
        const bz = this.confirmPressedOn;
        bz && null !== this.confirmRepeatKey && zz.isHeld(uz) && (bz === this.focused && bz.isConnected && !Ou(bz) && bz.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? bz.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(bz)) : this.confirmRepeatKey = null)
      }
      backToStrip(zz) {
        const uz = this.focused;
        if (!(0, dz.g)().menuBackToCategories) return !1;
        const bz = null !== uz && void 0 !== uz && uz.isConnected ? this.tabStripNav.backToStrip(uz, this.getEnabledCandidates(zz), zz) : null;
        return bz && this.setFocus(bz, {
          byUser: !0
        }), null !== bz
      }
      returnToOpener(zz) {
        const uz = this.lastActivatedKey;
        uz && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var bz;
          return null !== (bz = this.getEnabledCandidates(zz).find((zz => Uu(zz) === uz))) && void 0 !== bz ? bz : null
        })))
      }
      activate(zz) {
        var uz;
        if ((0, vn.b)(zz) || Vu(zz)) return;
        this.lastActivatedKey = null !== (uz = Uu(zz)) && void 0 !== uz ? uz : this.lastActivatedKey, this.lastActivated = zz, this.lastActivatedAtMs = performance.now(), this.rememberFocus(zz);
        const bz = this.layerRoot;
        if (bz) {
          const uz = new Set(bz.querySelectorAll(qn)),
            Ez = new Set(bz.querySelectorAll(`[data-pad-initial-area], ${gn}`)),
            nz = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var nz;
            return wu(zz, bz) ? null : null !== (nz = this.pickDefault(bz, {
              exclude: uz
            })) && void 0 !== nz ? nz : this.pickNewAreaStart(bz, Ez)
          }), 5e3, (() => zz.isConnected && Ou(zz) && performance.now() - nz < 6e4))
        }
        Tu(zz), au(zz)
      }
      handleDirections(zz, uz, bz, Ez) {
        const nz = oE(uz.layer.kind) ? (0, Oz.i)("chat") : null;
        for (const Mz of Zz.H) {
          this.dpadRepeats.get(Mz).update(zz.isHeld(Mz), bz) && (Mz !== nz || zz.wasPressed(Mz)) && this.move(uz.root, Mz, bz, !0)
        }
        const iz = Ez ? (0, Zz.m)(zz.leftStick, (0, dz.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          lz = this.stickRepeat.update((0, Zz.kb)(iz), bz);
        if (lz && this.move(uz.root, lz, bz, !0), this.retryMove && bz >= this.retryMove.atMs) {
          const {
            direction: zz
          } = this.retryMove;
          this.retryMove = null, this.move(uz.root, zz, bz, !1)
        }
      }
      move(zz, uz, bz, Ez) {
        var nz;
        let iz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (nz = this.tabOpenWait) || void 0 === nz ? void 0 : nz.wait) && uz === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const lz = this.focused;
        if (!lz || !lz.isConnected) {
          const uz = this.pickInitial(zz);
          return void(uz && this.setFocus(uz, {
            byUser: !0
          }))
        }
        const Mz = "Left" === uz || "Right" === uz,
          tz = Mz ? (0, vn.b)(lz) : null;
        if (tz) return void tz.adjust("Left" === uz ? -1 : 1);
        const Hz = zz => null !== zz.closest("[data-pad-friends-column]"),
          Oz = Hz(lz),
          pz = Dn(lz),
          dz = Mz || lz.closest(cn) ? null : (zz => {
            const uz = new Map;
            return bz => {
              const Ez = bz.closest(cn);
              if (!Ez) return !1;
              let nz = uz.get(Ez);
              if (void 0 === nz) {
                const bz = Dn(Ez);
                nz = OE(zz, bz) && (bz.right <= zz.left || bz.left >= zz.right), uz.set(Ez, nz)
              }
              return nz
            }
          })(pz),
          Fz = null !== lz.closest(Un),
          Zz = this.getEnabledCandidates(zz).filter((zz => zz !== lz && (Mz || Hz(zz) === Oz) && !(null !== dz && void 0 !== dz && dz(zz)) && (Fz || !zz.closest(Un)))),
          Rz = Zz.map(Dn),
          Kz = Az(lz, "y", zz),
          wz = Vz(Kz);
        if (!iz && !mz(pz, wz)) {
          const zz = Zz.filter(((zz, uz) => mz(Rz[uz], wz)));
          if (zz.length > 0) {
            const uz = {
              x: wz.left + wz.width / 2,
              y: wz.top + wz.height / 2
            };
            return void this.setFocus(zz[KE(uz, zz.map(Dn))], {
              byUser: !0
            })
          }
        }
        const Xz = Mz ? ((zz, uz, bz) => {
            const Ez = Dn(zz),
              nz = zz.closest(cn),
              iz = nz ? Dn(nz) : null;
            return uz.map(((uz, lz) => {
              const Mz = bz[lz];
              if (Mz.bottom > Ez.top && Mz.top < Ez.bottom) return !0;
              const tz = uz.closest(cn);
              if (nz && iz) return tz !== nz && (null !== tz || Mz.bottom <= iz.top || Mz.top >= iz.bottom);
              if (tz) return !OE(Ez, Dn(tz));
              let Hz = zz;
              for (let bz = zz.parentElement; bz && !bz.contains(uz); bz = bz.parentElement) Hz = bz;
              const Oz = Dn(Hz);
              return Mz.right > Oz.left && Mz.left < Oz.right
            }))
          })(lz, Zz, Rz) : void 0,
          fz = Mz && !lz.closest(cn) ? (zz => zz.map((zz => !zz.closest(Jn))))(Zz) : void 0,
          sz = ((zz, uz) => {
            const bz = [];
            for (let nz = zz; nz; nz = nz.parentElement) bz.push(nz);
            const Ez = new Map;
            return bz.forEach(((zz, uz) => {
              Ez.set(zz, bz.length - 1 - uz)
            })), uz.map((zz => {
              for (let uz = zz; uz; uz = uz.parentElement) {
                const zz = Ez.get(uz);
                if (void 0 !== zz) return zz
              }
              return -1
            }))
          })(lz, Zz),
          rz = Mz ? "x" : "y",
          oz = Az(lz, rz, zz);
        let Nz = pE(pz, Rz, uz, sz, Xz, fz);
        if (Nz >= 0 && oz && !oz.contains(Zz[Nz])) {
          const zz = Zz.flatMap(((zz, uz) => oz.contains(zz) ? [uz] : [])),
            bz = uz => uz && zz.map((zz => uz[zz])),
            Ez = pE(pz, zz.map((zz => Rz[zz])), uz, zz.map((zz => sz[zz])), bz(Xz), bz(fz));
          Nz = Ez >= 0 ? zz[Ez] : Nz
        }
        if (Nz >= 0) return void this.moveTo(lz, Zz[Nz], Zz, zz, uz, iz);
        if (!Ez) return;
        const vz = "Right" === uz || "Down" === uz ? 1 : -1;
        if (oz && Gz(oz, rz, vz)) {
          const zz = "y" === rz ? oz.clientHeight : oz.clientWidth;
          az(oz, rz, vz * zz * .5), this.retryMove = {
            direction: uz,
            atMs: bz + 80
          }
        }
      }
      moveTo(zz, uz, bz, Ez, nz, iz) {
        const lz = this.tabStripNav.findTabContent(zz, uz, bz);
        lz && "true" !== zz.dataset.padSelected ? this.openTab(zz, lz, Ez, nz) : iz && !lz || this.setFocus(this.tabStripNav.redirect(zz, uz, bz, Ez), {
          byUser: !0
        })
      }
      openTab(zz, uz, bz, Ez) {
        const nz = uz.parentElement;
        Tu(zz), this.focusWhenFound((() => "true" !== zz.dataset.padSelected ? null : uz.isConnected ? this.tabStripNav.pickContentStart(uz, this.getEnabledCandidates(bz), bz) : nz ? this.tabStripNav.pickReplacedContentStart(zz, nz, this.getEnabledCandidates(bz), bz) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Ez
        }
      }
      enterTab(zz, uz, bz, Ez) {
        this.move(bz, (zz => {
          const uz = [...zz.querySelectorAll(Gn)].filter((uz => uz.closest(Pn) === zz));
          if (uz.length >= 2) {
            const zz = uz[0].getBoundingClientRect(),
              bz = uz[1].getBoundingClientRect();
            return Math.abs(bz.top - zz.top) > Math.abs(bz.left - zz.left) ? "Right" : "Down"
          }
          const bz = zz.getBoundingClientRect();
          return bz.height > bz.width ? "Right" : "Down"
        })(uz), Ez, !1, !0), this.focused !== zz || this.pendingFocus || this.activate(zz)
      }
      handleScroll(zz, uz) {
        const bz = (0, Zz.m)(zz.rightStick, .2);
        if (0 === bz.x && 0 === bz.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Ez = zz.dtMs / 1e3;
        for (const iz of ["x", "y"]) {
          var nz;
          const zz = bz[iz];
          if (0 === zz) continue;
          const lz = null !== (nz = Az(this.focused, iz, uz.root)) && void 0 !== nz ? nz : Lz(uz.root, iz);
          if (!lz) continue;
          const Mz = Math.sign(zz) * zz * zz * 1500 * Ez + this.scrollRemainder[iz],
            tz = Math.trunc(Mz);
          this.scrollRemainder[iz] = Mz - tz, 0 !== tz && (az(lz, iz, tz), this.scrolledInLayer = !0)
        }
      }
    };
    var jn = bz(7895);
    var In = bz(8385);
    const Bn = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      Cn = {
        damage: {
          duration: 120,
          strongMagnitude: .45,
          weakMagnitude: .3,
          minIntervalMs: 250,
          needsPadInUse: !0
        },
        blockBreak: {
          duration: 40,
          strongMagnitude: 0,
          weakMagnitude: .25,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        hit: {
          duration: 50,
          strongMagnitude: .15,
          weakMagnitude: .35,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        connect: {
          ...Bn,
          minIntervalMs: 1e3
        },
        preview: {
          ...Bn,
          minIntervalMs: 0
        }
      };
    const Yn = new class {
        constructor(zz) {
          this.deps = zz, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = zz => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", zz))
          }
        }
        play(zz, uz) {
          const bz = Cn[zz];
          if (!this.deps.isVibrationOn() || bz.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Ez = this.lastPlayedMs[zz];
          if (void 0 !== Ez && uz - Ez < bz.minIntervalMs) return !1;
          const nz = this.deps.getActuator();
          if (!nz) return !1;
          this.lastPlayedMs[zz] = uz;
          const {
            duration: iz,
            strongMagnitude: lz,
            weakMagnitude: Mz
          } = bz;
          try {
            nz.playEffect("dual-rumble", {
              duration: iz,
              strongMagnitude: lz,
              weakMagnitude: Mz
            }).catch(this.logFailure)
          } catch (tz) {
            this.logFailure(tz)
          }
          return !0
        }
      }({
        getActuator: () => (zz => {
          const uz = null === zz || void 0 === zz ? void 0 : zz.vibrationActuator;
          return "function" === typeof(null === uz || void 0 === uz ? void 0 : uz.playEffect) ? uz : null
        })(lz.g.getActiveGamepad()),
        isVibrationOn: () => (0, dz.g)().vibration,
        isPadInUse: Fz.h
      }),
      kn = zz => {
        Yn.play(zz, performance.now())
      };
    var zi = bz(7903),
      ui = bz(2709),
      bi = bz(111),
      Ei = bz(33),
      ni = bz(627);
    class ii {
      constructor(zz) {
        this.deps = zz
      }
      check() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const uz = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!uz) return "skipped";
        const bz = zz ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === bz || this.deps.readReportedVisitId() === bz ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(bz), this.deps.xZ(uz, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const li = "controllerUsageReportedVisit";
    var Mi = bz(1322),
      ti = bz(1673),
      Hi = bz(606),
      Oi = bz(1417),
      di = bz(1241);
    const Fi = zz => ({
        translationKey: `controller:${zz}`
      }),
      Zi = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Fi("padButtonView"),
        Menu: Fi("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Fi("padButtonDpadUp"),
        Down: Fi("padButtonDpadDown"),
        Left: Fi("padButtonDpadLeft"),
        Right: Fi("padButtonDpadRight"),
        Home: Fi("padButtonHome"),
        LeftStick: Fi("padButtonLeftStick"),
        RightStick: Fi("padButtonRightStick")
      },
      Ri = {
        xbox: {
          LS: "LS",
          RS: "RS"
        },
        generic: {},
        steamdeck: {
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2"
        },
        playstation: {
          A: "\u2715",
          B: "\u25cb",
          X: "\u25a1",
          Y: "\u25b3",
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2",
          View: Fi("padButtonCreate"),
          Menu: Fi("padButtonOptions")
        },
        nintendo: {
          A: "B",
          B: "A",
          X: "Y",
          Y: "X",
          LB: "L",
          RB: "R",
          LT: "ZL",
          RT: "ZR",
          View: "\u2212",
          Menu: "+"
        }
      },
      Ki = (zz, uz) => {
        var bz;
        const Ez = null !== (bz = Ri[zz][uz]) && void 0 !== bz ? bz : Zi[uz];
        return "string" === typeof Ez ? Ez : (0, nz.x)(di.h.get().getCurrentLanguageCode(), Ez.translationKey)
      },
      wi = zz => {
        let {
          glyph: uz,
          family: bz,
          className: Ez
        } = zz;
        const nz = (0, Fz.C)(),
          iz = null !== bz && void 0 !== bz ? bz : nz,
          lz = (0, zi.c)(iz, uz);
        return (0, cz.jsx)("span", {
          className: Uz()("ControllerGlyph", Ez),
          role: "img",
          "aria-label": Ki(iz, uz),
          style: {
            "--pad-glyph-mask": `url(${lz})`,
            "--pad-glyph-aspect": (0, zi.b)(iz, uz)
          }
        })
      };
    var Xi = bz(1846);
    const fi = zz => {
      let {
        action: uz
      } = zz;
      const {
        t: bz
      } = (0, nz.F)();
      switch (uz.kind) {
        case "reload":
          return (0, cz.jsx)("span", {
            children: bz("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, cz.jsx)(Xi.b, {
            text: uz.description ? [{
              icon: uz.icon
            }, ` ${uz.description}`] : [{
              icon: uz.icon
            }]
          });
        case "touchButton":
          return (0, cz.jsx)(Xi.b, {
            text: uz.label
          })
      }
    };
    var si = bz(8387);
    const ri = zz => {
      let {
        hold: uz
      } = zz;
      return (0, cz.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${uz.holdMs}ms`
        },
        children: (0, cz.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, uz.id)
    };
    var oi = bz(8412),
      Ni = bz(8415),
      vi = bz(8421),
      xi = bz(8407);
    const Ji = () => {
        const {
          gameState: zz
        } = (0, tz.m)(["gameState"]), uz = (0, Fz.z)(), [Ez, nz] = (0, qz.useState)(!1), [iz, lz] = (0, qz.useState)(!1);
        return (0, qz.useEffect)((() => {
          "inGame" === zz && nz(!0)
        }), [zz]), (0, qz.useEffect)((() => {
          if (!Ez) return;
          let zz = null,
            uz = !1;
          return (Hi.x ? Promise.all([bz.e(69), bz.e(259), bz.e(199), bz.e(217), bz.e(216), bz.e(84)]).then((() => bz(39696))).then((zz => zz.startWasmPadGameplay)) : Promise.all([bz.e(69), bz.e(226), bz.e(225), bz.e(94), bz.e(72), bz.e(71), bz.e(70), bz.e(218), bz.e(182), bz.e(222), bz.e(74), bz.e(196), bz.e(215), bz.e(219), bz.e(93), bz.e(83), bz.e(113), bz.e(234), bz.e(73), bz.e(112), bz.e(155), bz.e(217), bz.e(188)]).then((() => bz(39834))).then((zz => zz.startPadGameplay))).then((bz => {
            uz || (zz = bz())
          })).catch((zz => {
            console.error("Pad gameplay failed to load", zz), uz || lz(!0)
          })), () => {
            var bz;
            uz = !0, null === (bz = zz) || void 0 === bz || bz()
          }
        }), [Ez]), (0, qz.useEffect)((() => {
          iz && uz && (lz(!1), Mi.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((zz => {
            !0 === zz && (0, ti.reloadBloxd)()
          })))
        }), [iz, uz]), (0, cz.jsxs)(cz.Fragment, {
          children: [(0, cz.jsx)(Ai, {}), (0, cz.jsx)(Ti, {}), (0, cz.jsx)(Li, {})]
        })
      },
      Ai = () => {
        const {
          t: zz
        } = (0, nz.F)(), uz = (0, Fz.z)(), {
          gameState: bz,
          isUiHidden: Ez
        } = (0, tz.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: iz
        } = (0, dz.q)(), lz = (0, si.k)(), Mz = (0, si.n)(), [Hz, pz] = (0, qz.useState)(vi.e);
        return (0, Oi.g)(xi.q, pz), !uz || iz || Ez || "inGame" !== bz || !lz && !Hz ? null : (0, cz.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [lz && (0, cz.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, cz.jsx)(wi, {
              glyph: (0, Oz.i)("actionButton")
            }), (0, cz.jsx)(fi, {
              action: lz
            }), Mz && (0, cz.jsx)("span", {
              className: "PadActionHintMore",
              children: zz("controller:gameplayActionWheelHint")
            })]
          }), Hz && (0, cz.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, cz.jsx)(wi, {
              glyph: (0, Oz.i)("pickBlock")
            }), (0, cz.jsx)("span", {
              children: zz("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Ti = () => {
        const {
          t: zz
        } = (0, nz.F)(), uz = (0, Fz.z)(), {
          gameState: bz,
          isUiHidden: Ez
        } = (0, tz.m)(["gameState", "isUiHidden"]), [iz, lz] = (0, qz.useState)(oi.d);
        return (0, Oi.g)(xi.m, lz), uz && !Ez && "inGame" === bz && iz ? (0, cz.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, cz.jsx)("span", {
            children: zz("controller:gameplayDropStack")
          }), (0, cz.jsx)(ri, {
            hold: iz
          })]
        }) : null
      },
      Li = () => {
        const {
          t: zz
        } = (0, nz.F)(), uz = (0, Fz.z)(), {
          gameState: bz,
          isUiHidden: Ez
        } = (0, tz.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: iz
        } = (0, dz.q)(), [lz, Mz] = (0, qz.useState)(Ni.c);
        return (0, Oi.g)(xi.j, Mz), uz && !Ez && "inGame" === bz && lz ? (0, cz.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!iz && (0, cz.jsx)(wi, {
            glyph: (0, Oz.i)("attack")
          }), (0, cz.jsx)("span", {
            children: zz("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var Pi = bz(8427),
      Gi = bz(1892),
      ai = bz(2313),
      Vi = bz(7877);
    const mi = zz => zz && !(0, Pi.e)(Gi.b.get("shopInfo")),
      qi = () => {
        const zz = "inGame" === (0, tz.m)(["gameState"]).gameState;
        return (0, ai.f)("shopInfo", (() => {
          (0, Vi.k)(mi(zz))
        })), (0, qz.useEffect)((() => {
          (0, Vi.k)(mi(zz))
        }), [zz]), null
      },
      Ui = () => {
        const {
          t: zz
        } = (0, nz.F)(), {
          hideButtonHints: uz
        } = (0, dz.q)();
        (0, Fz.C)();
        const bz = (0, Lb.k)();
        return (0, qz.useEffect)((() => (() => {
          const zz = pz.b.register({
              name: "inventory",
              isActive: Bb.isActive,
              onFrame: Bb.onFrame,
              onDeactivate: Bb.onDeactivate,
              wakePressActs: Bb.wakePressActs
            }),
            uz = zz => {
              Bb.noteRealPointer(zz), Bb.shouldBlockRealPointer(zz) && zz.stopPropagation()
            };
          for (const lz of Cb) window.addEventListener(lz, uz, !0);
          const bz = (0, Du.h)((() => {
              "inventory" !== pz.b.getActiveConsumerName() && Bb.forgetSurface()
            })),
            Ez = zz => {
              const uz = zz.target;
              (0, Fz.h)() && Yz(uz) && uz.closest(Fb) && (0, Du.g)() && (0, Du.n)(uz)
            };
          document.addEventListener("focusout", Ez, !0);
          const {
            invalidate: nz,
            onScroll: iz
          } = Bb.targets;
          return document.addEventListener("scroll", iz, !0), window.addEventListener("resize", nz), () => {
            zz(), bz();
            for (const zz of Cb) window.removeEventListener(zz, uz, !0);
            document.removeEventListener("scroll", iz, !0), document.removeEventListener("focusout", Ez, !0), window.removeEventListener("resize", nz), Bb.targets.disconnect()
          }
        })()), []), (0, cz.jsxs)(cz.Fragment, {
          children: [(0, cz.jsx)(Dz, {
            placer: Bb.ring,
            className: "InventorySlotCursorRing"
          }), bz.showing && !uz && (0, cz.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: yu(bz).map((uz => {
              let {
                actions: Ez,
                labelKey: nz
              } = uz;
              return (0, cz.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Ez.map((zz => (0, cz.jsx)(wi, {
                  glyph: (0, Oz.i)(zz)
                }, zz))), (0, cz.jsx)("span", {
                  children: zz(`controller:${nz}`)
                }), "inventoryDrop" === nz && bz.dropStackHold && (0, cz.jsx)(ri, {
                  hold: bz.dropStackHold
                })]
              }, nz)
            }))
          })]
        })
      },
      ci = [{
        command: "close",
        action: "keyboardClose",
        repeats: !1
      }, {
        command: "submit",
        action: "keyboardSubmit",
        repeats: !1
      }, {
        command: "backspace",
        action: "keyboardBackspace",
        repeats: !0
      }, {
        command: "space",
        action: "keyboardSpace",
        repeats: !1
      }, {
        command: "caretLeft",
        action: "keyboardCaretLeft",
        repeats: !0
      }, {
        command: "caretRight",
        action: "keyboardCaretRight",
        repeats: !0
      }, {
        command: "shift",
        action: "keyboardShift",
        repeats: !1
      }, {
        command: "page",
        action: "keyboardSymbols",
        repeats: !1
      }, {
        command: "channel",
        action: "keyboardChannel",
        repeats: !1
      }],
      gi = zz => Array.from(zz).map((zz => ({
        type: "char",
        char: zz,
        width: 1
      }))),
      Si = function(zz) {
        return {
          type: "command",
          command: zz,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      yi = [Si("page", 2), Si("otherPage"), Si("caretLeft"), Si("space", 3), Si("caretRight"), Si("close", 1.5), Si("submit", 1.5)],
      Di = [Si("page", 2), Si("otherPage"), Si("caretLeft"), Si("space", 2), Si("caretRight"), Si("newline"), Si("close", 1.5), Si("submit", 1.5)],
      Qi = [
        [...gi("1234567890"), Si("backspace")], gi("qwertyuiop/"), gi("asdfghjkl'?"), [Si("shift", 2), ...gi("zxcvbnm,.")]
      ],
      Wi = [
        [...gi("1234567890"), Si("backspace")], gi("!@#$%^&*()/"), gi('-_=+[]{};:"'), gi("~`|\\<>'\u20ac\xa3,.")
      ],
      ei = {
        letters: Qi,
        accents: [
          [...gi("1234567890"), Si("backspace")], gi("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), gi("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Si("shift", 2), ...gi("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: Wi
      },
      ji = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      Ii = (zz, uz) => "letters" === zz ? uz ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === zz ? "symbols" : "accents"
      },
      Bi = function(zz, uz) {
        const bz = ((zz, uz) => [...ei[zz], uz ? Di : yi])(zz, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === uz) return bz;
        const Ez = Math.min(2, Ci(bz[0]) / uz);
        return [Array.from({
          length: uz
        }, ((zz, uz) => ({
          type: "phrase",
          phraseIndex: uz,
          width: Ez
        }))), ...bz]
      },
      Ci = zz => zz.reduce(((zz, uz) => zz + uz.width), 0),
      Yi = zz => Math.max(...zz.map(Ci)),
      ki = (zz, uz) => {
        const bz = zz[uz.row];
        let Ez = (Yi(zz) - Ci(bz)) / 2;
        for (let nz = 0; nz < uz.col; nz++) Ez += bz[nz].width;
        return Ez + bz[uz.col].width / 2
      },
      zl = (zz, uz, bz) => {
        let Ez = 0,
          nz = 1 / 0;
        for (let iz = 0; iz < zz[uz].length; iz++) {
          const lz = Math.abs(ki(zz, {
            row: uz,
            col: iz
          }) - bz);
          lz < nz - 1e-9 && (Ez = iz, nz = lz)
        }
        return Ez
      },
      ul = (zz, uz) => {
        const bz = Math.max(0, Math.min(zz.length - 1, uz.row));
        return {
          row: bz,
          col: Math.max(0, Math.min(zz[bz].length - 1, uz.col))
        }
      },
      bl = (zz, uz, bz) => "once" === zz && uz - bz <= 400 ? "caps" : "off" === zz ? "once" : "off",
      El = (zz, uz) => "once" === zz && (zz => zz.toLowerCase() !== zz.toUpperCase())(uz) ? "off" : zz,
      nl = (zz, uz, bz) => {
        if ("symbols" === uz || "off" === bz) return zz;
        const Ez = zz.toUpperCase();
        return 1 === Ez.length ? Ez : zz
      };
    var il = bz(8318);
    const ll = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const Ml = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(zz) {
          return !(zz - this.lastSendMs < 2e3) && (this.lastSendMs = zz, !0)
        }
      },
      tl = {
        visible: !1,
        target: null,
        kind: null,
        page: "letters",
        accentsFirst: !1,
        shift: "off",
        focus: {
          row: 0,
          col: 0
        },
        preferredX: 0,
        placement: "bottom",
        maxHeightPx: 0
      },
      Hl = ["cM", "nameTag"],
      Ol = zz => {
        const uz = zz.target instanceof HTMLTextAreaElement && !Hl.includes(zz.kind);
        return Bi(zz.page, "chat" === zz.kind ? ll.length : 0, uz)
      },
      pl = zz => {
        const uz = zz.getBoundingClientRect(),
          bz = window.innerHeight,
          Ez = uz.top + uz.height / 2 < bz / 2 ? "bottom" : "top",
          nz = "bottom" === Ez ? bz - uz.bottom - 6 : uz.top - 6;
        return {
          placement: Ez,
          maxHeightPx: Math.min(.46 * bz, Math.max(.3 * bz, nz))
        }
      },
      dl = zz => {
        (0, fE.m)(zz) ? (0, fE.e)().close(): (en.noteChosenStop(zz), zz.blur())
      };
    class Fl {
      constructor(zz) {
        this.host = zz, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(zz, uz) {
        this.phraseTexts = zz, this.phrasesFill = uz
      }
      pressKey(zz) {
        const uz = this.host.getState(),
          bz = Ol(uz),
          Ez = bz[zz.row][zz.col];
        this.host.setState({
          ...uz,
          focus: zz,
          preferredX: ki(bz, zz)
        }), "char" === Ez.type ? this.typeChar(Ez.char) : "command" === Ez.type ? this.runCommand(Ez.command) : this.sendPhrase(Ez.phraseIndex)
      }
      runCommand(zz) {
        const uz = this.host.getState();
        switch (zz) {
          case "backspace":
            iu(uz.target);
            break;
          case "space":
            nu(uz.target, " ");
            break;
          case "newline":
            nu(uz.target, "\n");
            break;
          case "caretLeft":
            lu(uz.target, -1);
            break;
          case "caretRight":
            lu(uz.target, 1);
            break;
          case "shift": {
            const zz = performance.now();
            this.host.setState({
              ...uz,
              shift: bl(uz.shift, zz, this.lastShiftPressMs)
            }), this.lastShiftPressMs = zz;
            break
          }
          case "page":
          case "otherPage": {
            const bz = Ii(uz.page, uz.accentsFirst)[zz];
            this.host.setState({
              ...uz,
              page: bz,
              focus: ul(Ol({
                ...uz,
                page: bz
              }), uz.focus)
            });
            break
          }
          case "submit":
            this.submit();
            break;
          case "close":
            this.close();
            break;
          case "channel":
            (0, fE.m)(uz.target) && (0, fE.e)().selectNextChannel()
        }
      }
      submit() {
        var zz, uz;
        const {
          target: bz
        } = this.host.getState();
        this.host.hide(), (0, fE.m)(bz) ? (0, fE.e)().submit() : (en.noteChosenStop(bz), null === (zz = (uz = (0, fE.i)(bz)).submit) || void 0 === zz || zz.call(uz), document.activeElement === bz && bz.blur())
      }
      close() {
        const {
          target: zz
        } = this.host.getState();
        this.host.hide(), dl(zz)
      }
      typeChar(zz) {
        const {
          target: uz,
          page: bz,
          shift: Ez
        } = this.host.getState();
        nu(uz, nl(zz, bz, Ez)), this.host.setState({
          ...this.host.getState(),
          shift: El(Ez, zz)
        })
      }
      sendPhrase(zz) {
        if (this.phrasesFill) {
          const {
            target: uz
          } = this.host.getState(), bz = this.phraseTexts[zz];
          bz && (uz.setSelectionRange(0, uz.value.length), nu(uz, bz))
        } else Ml.claim(performance.now()) && (this.host.hide(), (0, fE.e)().sendLine(this.phraseTexts[zz]))
      }
    }
    const Zl = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Rl = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class Kl {
      constructor(zz, uz) {
        this.host = zz, this.editor = uz, this.lastDirection = null, this.navRepeat = new Zz.c((0, Rz.e)(Zl)), this.commandRepeats = new Map(ci.filter((zz => {
          let {
            repeats: uz
          } = zz;
          return uz
        })).map((zz => {
          let {
            command: uz
          } = zz;
          return [uz, (0, Rz.e)(Rl)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const zz of this.commandRepeats.values()) zz.reset()
      }
      onVisibleFrame(zz) {
        const uz = performance.now();
        for (const {
            command: nz,
            action: iz
          }
          of ci) {
          const bz = (0, Oz.i)(iz),
            Ez = this.commandRepeats.get(nz);
          if ((Ez ? Ez.update(zz.isHeld(bz), uz) : zz.wasPressed(bz)) && (this.editor.runCommand(nz), !this.host.getState().visible)) return
        }
        if (zz.wasPressed((0, Oz.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const bz = this.readNavDirection(zz);
        this.lastDirection = bz;
        const Ez = this.navRepeat.update(bz, uz);
        Ez && this.navigate(Ez)
      }
      onHiddenFrame(zz, uz) {
        var bz;
        if (zz.wasPressed((0, Oz.i)("keyboardClose"))) return void dl(uz);
        const Ez = (0, Oz.i)("keyboardType");
        if (zz.wasPressed(Ez)) return pz.b.consumeButton(Ez), void this.host.open(uz);
        const nz = this.readNavDirection(zz),
          iz = null !== nz && nz !== this.lastDirection;
        if (this.lastDirection = nz, !iz || (0, fE.m)(uz)) return;
        const lz = (null === (bz = un()) || void 0 === bz ? void 0 : bz.root.contains(uz)) || null !== uz.closest(".EntireInventoryWrapper");
        dl(uz), lz && pz.b.handOffHeldInput()
      }
      navigate(zz) {
        const uz = this.host.getState();
        if ("Up" === zz && 0 === uz.focus.row && "chat" === uz.kind) return (0, fE.e)().stepHistory(), void this.host.setState({
          ...uz
        });
        const bz = ((zz, uz, bz, Ez) => {
          if ("Left" === bz || "Right" === bz) {
            const Ez = zz[uz.row].length,
              nz = (uz.col + ("Right" === bz ? 1 : -1) + Ez) % Ez,
              iz = {
                row: uz.row,
                col: nz
              };
            return {
              pos: iz,
              preferredX: ki(zz, iz)
            }
          }
          const nz = (uz.row + ("Down" === bz ? 1 : -1) + zz.length) % zz.length;
          return {
            pos: {
              row: nz,
              col: zl(zz, nz, Ez)
            },
            preferredX: Ez
          }
        })(Ol(uz), uz.focus, zz, uz.preferredX);
        this.host.setState({
          ...uz,
          focus: bz.pos,
          preferredX: bz.preferredX
        })
      }
      readNavDirection(zz) {
        for (const uz of Zz.H)
          if (zz.isHeld(uz)) return uz;
        return (0, Zz.kb)((0, Zz.m)(zz.leftStick, (0, dz.g)().moveDeadzone))
      }
    }
    const wl = ["Up", "Down", "Left", "Right"],
      Xl = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const fl = new class {
      constructor() {
        this.state = tl, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Fl(this), this.padInput = new Kl(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(zz) {
        const uz = zz.visible !== this.state.visible;
        this.state = zz;
        for (const bz of this.listeners) bz();
        uz && Hz.k.sK(Qz.c, zz.visible)
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      install() {
        const zz = pz.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || Yz(document.activeElement),
            onFrame: zz => {
              this.onFrame(zz)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: zz => wl.includes(zz) || !this.state.visible && zz === (0, Oz.i)("keyboardType")
          }),
          uz = zz => {
            const uz = zz.target;
            Yz(uz) && (uz === this.pendingChatInput || (0, Fz.h)() ? this.open(uz) : this.state.visible && uz !== this.state.target && (this.ownedField = null, this.hide()))
          },
          bz = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Ez = zz => {
            zz.isTrusted && this.state.visible && (zz => !zz.repeat && !Xl.has(zz.key) && !(0, il.e)(zz.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(zz.key))(zz) && this.hide()
          },
          nz = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...pl(this.state.target)
            })
          };
        document.addEventListener("focusin", uz, !0), document.addEventListener("focusout", bz, !0), window.addEventListener("keydown", Ez, !0), window.addEventListener("resize", nz);
        const iz = Hz.k.subscribe(xi.b, (() => {
            this.openChat()
          })),
          lz = Hz.k.subscribe(Qz.d, (zz => {
            this.openForField(zz)
          }));
        return () => {
          zz(), document.removeEventListener("focusin", uz, !0), document.removeEventListener("focusout", bz, !0), window.removeEventListener("keydown", Ez, !0), window.removeEventListener("resize", nz), Hz.k.unsubscribe(iz), Hz.k.unsubscribe(lz), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const zz = (0, fE.e)();
        zz ? document.activeElement !== zz.input ? (this.clearPendingChat(), this.pendingChatInput = zz.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), zz.open()) : this.open(zz.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(zz) {
        Yz(zz) ? (document.activeElement !== zz && zz.focus(), document.activeElement === zz && this.open(zz)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", zz)
      }
      open(zz) {
        var uz;
        if (this.clearPendingChat(), this.ownedField = zz, this.state.visible && this.state.target === zz) return;
        this.restoreInputMode(), (zz => {
          kz(zz) && 0 === zz.selectionStart && 0 === zz.selectionEnd && zz.setSelectionRange(zz.value.length, zz.value.length)
        })(zz), this.savedInputMode = zz.getAttribute("inputmode"), zz.setAttribute("inputmode", "none");
        const bz = {
          ...tl,
          visible: !0,
          target: zz,
          kind: (0, fE.m)(zz) ? "chat" : null !== (uz = (0, fE.i)(zz).kind) && void 0 !== uz ? uz : null,
          accentsFirst: (Ez = di.h.get().getCurrentLanguageCode(), ji.has(Ez)),
          ...pl(zz)
        };
        var Ez;
        const nz = Ol(bz),
          iz = ((zz, uz) => {
            for (let bz = 0; bz < zz.length; bz++) {
              const Ez = zz[bz].findIndex((zz => "char" === zz.type && zz.char === uz));
              if (-1 !== Ez) return {
                row: bz,
                col: Ez
              }
            }
            return null
          })(nz, "q");
        this.padInput.reset(), this.setState({
          ...bz,
          focus: iz,
          preferredX: ki(nz, iz)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(tl))
      }
      onFrame(zz) {
        if (this.releaseLostField()) return;
        const uz = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(zz) : Yz(uz) && this.padInput.onHiddenFrame(zz, uz)
      }
      releaseLostField() {
        const zz = this.ownedField;
        return !(null === zz || zz.isConnected && document.activeElement === zz) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: zz
        } = this.state;
        zz && (null === this.savedInputMode ? zz.removeAttribute("inputmode") : zz.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var sl = bz(8442);
    const rl = new Map(ci.map((zz => {
        let {
          command: uz,
          action: bz
        } = zz;
        return [uz, bz]
      }))),
      ol = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      Nl = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        cM: "controller:keyboardTargetBookTitle"
      },
      vl = zz => {
        const uz = (() => {
          const [, zz] = (0, qz.useReducer)((zz => zz + 1), 0);
          return zz
        })();
        (0, qz.useEffect)((() => {
          if (!zz) return;
          const bz = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const nz of bz) zz.addEventListener(nz, uz);
          document.addEventListener("selectionchange", uz);
          const Ez = new MutationObserver(uz);
          return Ez.observe(zz, {
            attributeFilter: ["placeholder"]
          }), () => {
            Ez.disconnect();
            for (const Ez of bz) zz.removeEventListener(Ez, uz);
            document.removeEventListener("selectionchange", uz)
          }
        }), [zz, uz])
      },
      xl = zz => {
        zz.preventDefault()
      },
      Jl = zz => {
        "mouse" !== zz.pointerType && zz.preventDefault()
      },
      Al = () => {
        var zz;
        const {
          t: uz
        } = (0, nz.F)(), bz = (() => {
          const [zz, uz] = (0, qz.useState)(fl.getState());
          return (0, qz.useEffect)((() => fl.subscribe((() => {
            uz(fl.getState())
          }))), []), zz
        })(), Ez = (0, Fz.z)(), iz = (0, qz.useRef)(null);
        (0, dz.q)(), (0, Fz.C)(), (0, qz.useEffect)((() => {
          const zz = fl.install(),
            uz = null;
          return () => {
            zz(), null === uz || void 0 === uz || uz()
          }
        }), []);
        const lz = (0, qz.useMemo)((() => ll.map((zz => uz(zz)))), [uz]),
          Mz = bz.visible && "chat" === bz.kind ? bz.target : null;
        vl(Mz);
        const tz = null !== (zz = null === Mz || void 0 === Mz ? void 0 : Mz.value) && void 0 !== zz ? zz : "",
          Hz = ((zz, uz, bz) => {
            if (!zz.startsWith("/")) return [];
            const Ez = [];
            for (let nz = uz.length - 1; nz >= 0 && Ez.length < bz; nz--) {
              const bz = uz[nz].trim();
              bz.startsWith(zz) && bz !== zz && !Ez.includes(bz) && Ez.push(bz)
            }
            return Ez
          })(tz, tz.startsWith("/") ? (0, sl.h)() : [], ll.length),
          pz = tz.startsWith("/"),
          Zz = pz ? ll.map(((zz, uz) => {
            var bz;
            return null !== (bz = Hz[uz]) && void 0 !== bz ? bz : ""
          })) : lz;
        if ((0, qz.useEffect)((() => {
            fl.editor.setPhraseRow(Zz, pz)
          })), (0, qz.useEffect)((() => {
            const zz = iz.current;
            if (zz) return zz.addEventListener("touchstart", xl, {
              passive: !1
            }), () => {
              zz.removeEventListener("touchstart", xl)
            }
          }), [bz.visible]), !bz.visible) return null;
        const Rz = Ol(bz),
          Kz = Yi(Rz),
          wz = zz => "char" === zz.type ? nl(zz.char, bz.page, bz.shift) : "phrase" === zz.type ? Zz[zz.phraseIndex] : (zz => {
            switch (zz) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === bz.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return ol[Ii(bz.page, bz.accentsFirst)[zz]];
              case "space":
                return uz("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return uz("chat" === bz.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(zz.command),
          Xz = zz => {
            fl.editor.pressKey(zz)
          };
        return (0, cz.jsxs)("div", {
          ref: iz,
          className: Uz()(fE.p, "top" === bz.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: bz.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Rz.length,
            "--pad-keyboard-height": `${bz.maxHeightPx}px`
          },
          onPointerDown: Jl,
          onMouseDown: xl,
          children: [(0, cz.jsx)(Tl, {
            target: bz.target,
            label: bz.kind ? uz(Nl[bz.kind]) : bz.target.placeholder || uz("controller:keyboardTargetText")
          }), (0, cz.jsx)("div", {
            className: "PadKeyboardRows",
            children: Rz.map(((zz, uz) => (0, cz.jsx)("div", {
              className: Uz()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === zz[0].type
              }),
              children: zz.map(((zz, nz) => {
                const iz = Ez && bz.focus.row === uz && bz.focus.col === nz,
                  lz = "command" === zz.type ? rl.get(zz.command) : void 0;
                return (0, cz.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: zz.width / Kz * 100 + "%"
                  },
                  children: (0, cz.jsxs)("div", {
                    className: Uz()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: iz,
                      PadKeyboardKeyCommand: "command" === zz.type,
                      PadKeyboardKeyPhrase: "phrase" === zz.type,
                      PadKeyboardKeyActive: "command" === zz.type && "shift" === zz.command && "off" !== bz.shift,
                      PadKeyboardKeySubmit: "command" === zz.type && "submit" === zz.command
                    }),
                    role: "button",
                    onClick: () => {
                      Xz({
                        row: uz,
                        col: nz
                      })
                    },
                    onTouchEnd: zz => {
                      var bz, Ez;
                      zz.preventDefault(), bz = zz.changedTouches[0], Ez = zz.currentTarget.getBoundingClientRect(), bz && bz.clientX >= Ez.left && bz.clientX <= Ez.right && bz.clientY >= Ez.top && bz.clientY <= Ez.bottom && Xz({
                        row: uz,
                        col: nz
                      })
                    },
                    children: [(0, cz.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: wz(zz)
                    }), Ez && lz && (0, cz.jsx)(wi, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Oz.i)(lz)
                    })]
                  })
                }, nz)
              }))
            }, uz)))
          })]
        })
      },
      Tl = zz => {
        let {
          target: uz,
          label: bz
        } = zz;
        vl(uz);
        const Ez = (0, qz.useRef)(null),
          nz = (0, qz.useRef)(null),
          iz = uz instanceof HTMLTextAreaElement;
        (0, qz.useLayoutEffect)((() => {
          const zz = Ez.current,
            uz = nz.current;
          iz ? zz.scrollTop = uz.offsetTop - zz.clientHeight / 2 : zz.scrollLeft = uz.offsetLeft - zz.clientWidth / 2
        }));
        const {
          value: lz,
          start: Mz,
          end: tz
        } = zu(uz), Hz = "password" === uz.type ? "\u2022".repeat(lz.length) : lz;
        return (0, cz.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, cz.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: bz
          }), (0, cz.jsxs)("div", {
            ref: Ez,
            className: Uz()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: iz
            }),
            children: [(0, cz.jsx)("span", {
              children: Hz.slice(0, Mz)
            }), (0, cz.jsx)("span", {
              ref: nz,
              className: "PadKeyboardCaret"
            }), Mz !== tz && (0, cz.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Hz.slice(Mz, tz)
            }), (0, cz.jsx)("span", {
              children: Hz.slice(tz)
            }), 0 === Hz.length && uz.placeholder && uz.placeholder !== bz && (0, cz.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: uz.placeholder
            })]
          })]
        })
      };
    var Ll = bz(1362),
      Pl = bz(3174);
    const Gl = function() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        return uz.map(Oz.i)
      },
      al = (zz, uz) => {
        const bz = mE(zz);
        return bz ? [{
          glyphs: [bz],
          labelKey: uz
        }] : []
      },
      Vl = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      ml = "--pad-hint-bar-clearance",
      ql = "[data-pad-hint-bar-avoid]",
      hl = zz => {
        const uz = [];
        for (const bz of zz) Hu(bz) && uz.push(bz.getBoundingClientRect());
        return uz
      },
      Ul = zz => {
        if (!zz) return null;
        const uz = un(),
          bz = uz ? hl(((zz, uz) => {
            const bz = zz.closest(ql);
            return bz ? [bz] : ("popup" === uz ? document : zz).querySelectorAll(ql)
          })(uz.root, uz.layer.kind)) : [],
          Ez = !uz || uz.root.hasAttribute("data-pad-shows-hud");
        if (((0, Pl.j)(null === uz || void 0 === uz ? void 0 : uz.layer.kind, (0, Pl.n)()) || Ez) && bz.push(...hl(document.querySelectorAll(Vl.join(",")))), 0 === bz.length) return null;
        const {
          width: nz,
          height: iz
        } = zz.getBoundingClientRect(), lz = window.innerHeight - 8, Mz = (0, Pl.u)(lz, {
          width: nz,
          height: iz
        }, window.innerWidth / 2, bz, 8);
        return Mz === lz ? null : Math.round(window.innerHeight - Mz)
      },
      cl = zz => {
        const uz = document.documentElement.style,
          bz = zz ? `${Math.round(window.innerHeight-zz.getBoundingClientRect().top)}px` : "";
        uz.getPropertyValue(ml) !== bz && (bz ? uz.setProperty(ml, bz) : uz.removeProperty(ml))
      },
      gl = () => {
        const {
          t: zz
        } = (0, nz.F)(), {
          hideButtonHints: uz
        } = (0, dz.q)(), bz = (0, Fz.z)(), [Ez, iz] = (0, qz.useState)(!1), [lz, Hz] = (0, qz.useState)([]), [Rz, Kz] = (0, qz.useState)(null), wz = (0, qz.useRef)(null), Xz = (0, qz.useRef)(null);
        (0, Oi.g)(Qz.c, (zz => {
          iz(zz)
        })), (0, Oi.g)(Pl.r, (() => {
          var zz;
          null === (zz = Xz.current) || void 0 === zz || zz.call(Xz)
        }));
        const fz = bz && !uz && !Ez;
        return (0, qz.useEffect)((() => {
          if (!fz) return;
          let zz = null;
          const uz = () => {
            const uz = (() => {
                var zz;
                const uz = pz.b.getActiveConsumerName(),
                  bz = (0, Pl.h)();
                if (bz) {
                  const zz = (0, Oz.i)(bz),
                    uz = "emoteWheel" === bz && "wheel" === (0, dz.g)().emoteButton || !(0, Zz.S)(pz.b.getLastFrame().values, zz) ? {
                      glyphs: Gl("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [zz],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Oz.y)(zz)],
                    labelKey: "controller:wheelChoose"
                  }, uz, {
                    glyphs: Gl("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Ez = un();
                if (!Ez || "focus" !== uz && "cursor" !== uz) return (0, Pl.d)(Oz.i);
                const nz = [],
                  iz = {
                    glyphs: Gl("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  lz = qu(Ez.root),
                  Mz = lz ? !Ou(lz) : Boolean(Ez.layer.close),
                  Hz = !lz && Ez.layer.closeLabelKey ? Ez.layer.closeLabelKey : iz.labelKey,
                  Fz = Mz ? [{
                    ...iz,
                    labelKey: Hz
                  }] : [],
                  Rz = oE(Ez.layer.kind) ? [{
                    glyphs: Gl("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === uz) return nz.push({
                  glyphs: Gl("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), nz.push({
                  glyphs: Gl("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), nz.push(...Fz), nz.push(...Rz), nz.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Xn() && nz.push({
                  glyphs: Gl("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), nz;
                const Kz = en.getFocused();
                Kz && (0, vn.b)(Kz) ? nz.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : Kz && Vu(Kz) ? nz.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : nz.push({
                  glyphs: Gl("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const wz = Kz ? null === (zz = nE(Kz)) || void 0 === zz ? void 0 : zz.dataset.padSecondary : void 0;
                wz && nz.push({
                  glyphs: Gl("menuSecondary"),
                  labelKey: wz
                }), nz.push(...null !== Kz && void 0 !== Kz && Kz.closest("[data-pad-friends-column]") ? [iz] : Fz), nz.push(...Rz);
                const Xz = "home" === Ez.layer.kind;
                UE(Ez.root) || !JE(Ez.root) && !cE(Ez) ? Xz && nz.push({
                  glyphs: Gl("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : nz.push({
                  glyphs: Gl("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Xz && (nz.push(...al("inventory", "controller:menusFriends")), wz || nz.push({
                  glyphs: Gl("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), nz.push(...al("pause", "controller:menusSettings")), nz.push(...al("leaderboard", "controller:menusNotifications")));
                const fz = tz.e.get("openEverythingMenuName");
                return "inGame" === tz.e.get("gameState") && "popup" !== Ez.layer.kind && null !== fz && ((0, zE.f)(fz) ? nz.push(...al("leaderboard", "controller:menusClose")) : fz !== kb.r.LOBBY_LEADERBOARD && nz.push(...al("leaderboard", "controller:menusLobby"))), nz.push({
                  glyphs: Gl("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), nz
              })(),
              bz = Ul(wz.current),
              Ez = ((zz, uz) => `${zz.map((zz=>`${zz.glyphs.join("+")}:${zz.labelKey}`)).join("|")}@${uz}`)(uz, bz);
            Ez !== zz && (zz = Ez, (0, Mz.unstable_batchedUpdates)((() => {
              Hz(uz), Kz(bz)
            }))), cl(wz.current)
          };
          uz(), Xz.current = uz;
          const bz = requestAnimationFrame(uz),
            Ez = setInterval(uz, 150);
          return () => {
            Xz.current = null, cancelAnimationFrame(bz), clearInterval(Ez), cl(null)
          }
        }), [fz]), (0, qz.useLayoutEffect)((() => {
          if (!fz) return;
          if (0 === lz.length) return void cl(null);
          const zz = Ul(wz.current);
          zz === Rz ? cl(wz.current) : Kz(zz)
        }), [fz, lz, Rz]), fz && 0 !== lz.length ? (0, cz.jsx)("div", {
          ref: wz,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Rz ? void 0 : {
            bottom: Rz
          },
          "aria-hidden": !0,
          children: lz.map((uz => (0, cz.jsxs)("div", {
            className: "PadButtonHint",
            children: [uz.glyphs.map((zz => (0, cz.jsx)(wi, {
              glyph: zz,
              className: "PadButtonHintGlyph"
            }, zz))), (0, cz.jsx)("span", {
              children: zz(uz.labelKey)
            })]
          }, uz.labelKey)))
        }) : null
      },
      Sl = [Mu, "label", "[data-pad-slider]"].join(","),
      yl = "data-pad-cursor-probe",
      Dl = zz => {
        var uz;
        const bz = (zz => {
          const uz = [];
          for (let Ez = zz; Ez && Ez !== document.body && Ez !== document.documentElement && (uz.push(Ez), !(uz.length > 8)); Ez = Ez.parentElement);
          const bz = document.documentElement.classList.contains(Fz.q) ? uz[uz.length - 1] : void 0;
          null === bz || void 0 === bz || bz.setAttribute(yl, "");
          try {
            return uz.map((zz => ({
              element: zz,
              cursor: getComputedStyle(zz).cursor
            })))
          } finally {
            null === bz || void 0 === bz || bz.removeAttribute(yl)
          }
        })(zz);
        if ("pointer" !== (null === (uz = bz[0]) || void 0 === uz ? void 0 : uz.cursor)) return null;
        let Ez = 0;
        for (; Ez + 1 < bz.length && "pointer" === bz[Ez + 1].cursor;) Ez++;
        return bz[Ez].element
      },
      Ql = (zz, uz, bz, Ez) => {
        const nz = Ez.root.contains(zz) ? Ez.root : null;
        for (let iz = zz; iz && iz !== document.body && iz !== document.documentElement; iz = iz.parentElement) {
          if (iz instanceof HTMLElement && Jz(iz, uz) && Gz(iz, uz, bz)) return iz;
          if (iz === nz) break
        }
        return "home" === Ez.layer.kind || "gamePage" === Ez.layer.kind ? ((zz, uz) => {
          const bz = document.scrollingElement;
          return bz instanceof HTMLElement && ![document.documentElement, document.body].some((uz => {
            const bz = getComputedStyle(uz),
              Ez = "y" === zz ? bz.overflowY : bz.overflowX;
            return "hidden" === Ez || "clip" === Ez
          })) && Gz(bz, zz, uz) ? bz : null
        })(uz, bz) : null
      };
    const Wl = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Rz.e)(Zz.y), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const zz = pz.b.register({
              name: "cursor",
              isActive: () => "cursor" === fn(),
              onFrame: zz => {
                this.onFrame(zz)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: zz => (0, pz.f)(zz) || zz === (0, Oz.i)("menuConfirm") && mu((0, Fz.d)())
            }),
            uz = (0, eE.l)((zz => {
              const uz = zz.getRoot();
              uz && this.layerPoints.delete(uz), uz === this.layerRoot && (this.layerRoot = null)
            })),
            bz = Hz.k.subscribe("appManagerUpdated|activeInputDevice", (zz => {
              "gamepad" !== zz && this.active && !this.hidden && this.hide()
            }));
          return () => {
            zz(), uz(), Hz.k.unsubscribe(bz), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Fz.h)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.sK()
        }
        activate(zz) {
          this.active = !0, this.hidden = !1;
          const uz = Rn();
          !uz || uz.root && uz.root !== zz.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(zz), this.jumpTo(uz.point))
        }
        jumpTo(zz) {
          this.state = {
            x: zz.x,
            y: zz.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.sK())
        }
        onFrame(zz) {
          const uz = un();
          if (!uz) return;
          if (this.active || this.activate(uz), this.followPage(uz)) return;
          this.followLayer(uz);
          const bz = zz.wokeDevice ? (0, Fz.d)() : null;
          if (bz && this.jumpTo(bz), !(0, Fz.h)()) return void this.hide();
          const Ez = (0, Oz.i)("menuToggleCursor");
          if (zz.wasPressed(Ez)) return pz.b.consumeButton(Ez), void Zn(this.getHandoff(null));
          if (this.handBackToFocus(zz)) return;
          const nz = (0, Oz.i)("menuConfirm"),
            iz = (0, Oz.i)("menuSecondary");
          if (zz.wasPressed((0, Oz.i)("menuBack"))) return Gu(uz.root) || hu(uz.root) || bn(), void this.sK();
          if (yE(null, zz, uz)) return zz.wasReleased(nz) && this.press && (this.updateHit(!1), this.updateConfirm(zz, nz)), void this.sK();
          if (document.pointerLockElement) return void this.hide();
          const lz = sn() ? {
              x: 0,
              y: 0
            } : (zz => {
              const uz = (zz, uz) => (zz ? 1 : 0) - (uz ? 1 : 0);
              return {
                x: uz(zz.isHeld("Right"), zz.isHeld("Left")),
                y: uz(zz.isHeld("Down"), zz.isHeld("Up"))
              }
            })(zz),
            Mz = (0, dz.g)().moveDeadzone,
            tz = ((zz, uz) => {
              const bz = (0, Zz.m)(zz, sz(uz));
              return Math.hypot(bz.x, bz.y)
            })(zz.leftStick, Mz) > 0 || 0 !== lz.x || 0 !== lz.y;
          if (this.hidden) {
            const uz = zz.wasPressed(nz),
              bz = zz.wasPressed(iz);
            if (!tz && !Nz(zz.rightStick) && !uz && !bz && !zz.wokeDevice) return void this.sK();
            if (this.hidden = !1, this.updateHit(!1), uz || bz) return uz && (this.press = {
              kind: "ignored"
            }, zz.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.sK()
          }
          this.movePendingPageStart(tz);
          const Hz = this.getPoint();
          this.state = oz(this.state, {
            stick: zz.leftStick,
            moveDeadzone: Mz,
            dpad: lz,
            dtMs: zz.dtMs,
            cursorSpeedPercent: (0, dz.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Rz = this.state.x !== Hz.x || this.state.y !== Hz.y,
            Kz = [nz, iz].some((uz => zz.wasPressed(uz) || zz.wasReleased(uz)));
          (Rz || Kz || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Rz), this.updateConfirm(zz, nz), this.updateSecondary(zz, iz), this.updateScroll(zz, uz), this.sK()
        }
        followPage(zz) {
          const uz = "home" === zz.layer.kind || "gamePage" === zz.layer.kind,
            bz = this.page;
          if (this.page = uz ? {
              key: (0, eE.q)(zz.layer),
              root: zz.root
            } : null, !this.page || !bz || bz.root !== zz.root || bz.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(zz), "hybrid" === Fn()) return On = null, tn = null, pn.lock(), !0;
          const {
            key: Ez
          } = this.page;
          return this.pendingPageStart = {
            root: zz.root,
            key: Ez,
            returning: en.notePageEnteredByCursor(Ez),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(zz) {
          const uz = this.pendingPageStart;
          if (!uz) return;
          if (zz || uz.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const bz = uz.returning ? en.recallStop(uz.root, uz.key) : null;
          if (!bz && uz.returning && performance.now() - uz.enteredAtMs < 1e3) return;
          const Ez = null !== bz && void 0 !== bz ? bz : en.pickInitial(uz.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: uz.enteredAtMs
          });
          Ez && (this.pendingPageStart = null, this.jumpTo(su(Ez)))
        }
        setLayer(zz) {
          this.layerRoot = zz.root, this.layerOrder = zz.order
        }
        followLayer(zz) {
          var uz;
          if (zz.root === this.layerRoot) return;
          null !== (uz = this.layerRoot) && void 0 !== uz && uz.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const bz = this.layerPoints.get(zz.root),
            Ez = bz && zz.order <= this.layerOrder ? bz : en.getLayerStartPoint(zz.root);
          this.setLayer(zz), this.jumpTo(Ez)
        }
        getHandoff(zz) {
          var uz;
          return {
            point: this.getPoint(),
            element: null !== (uz = this.interactive) && void 0 !== uz ? uz : this.findDraggedSliderNearby(),
            direction: zz
          }
        }
        findDraggedSliderNearby() {
          const zz = this.draggedSlider;
          if (null === zz || void 0 === zz || !zz.isConnected) return null;
          const uz = zz.getBoundingClientRect(),
            {
              y: bz
            } = this.getPoint();
          return bz >= uz.top - 40 && bz <= uz.bottom + 40 ? zz : null
        }
        handBackToFocus(zz) {
          if (!sn()) return !1;
          const uz = Zz.H.find((uz => zz.wasPressed(uz)));
          return !!uz && (bz = this.getHandoff(uz), On = nn(bz), tn = null, pn.lock(), pz.b.handOffHeldInput(), !0);
          var bz
        }
        getAssistContext() {
          const zz = this.interactive;
          if (null === zz || void 0 === zz || !zz.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const uz = zz.getBoundingClientRect();
          if (uz.width > .4 * window.innerWidth || uz.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const bz = (0, dz.g)().cursorMagnetism && !(0, Wz.b)(zz) && !zz.closest("[data-pad-slider]"),
            Ez = this.magnet && this.magnet !== zz && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : uz;
          return {
            overInteractive: !0,
            magnetTarget: bz ? {
              x: Ez.left + Ez.width / 2,
              y: Ez.top + Ez.height / 2
            } : null
          }
        }
        updateHit(zz) {
          this.lastHitTestMs = performance.now();
          const uz = this.getPoint(),
            bz = document.elementFromPoint(uz.x, uz.y),
            Ez = bz && !(0, wz.p)(bz) && (zz => {
              var uz;
              const bz = un();
              return !(bz && !bz.root.contains(zz) && !zz.closest(".tooltip-container")) || !(null !== (uz = document.getElementById("root")) && void 0 !== uz && uz.contains(zz))
            })(bz) ? bz : null;
          if (Ez !== this.hit) return Ju(this.hit, Ez, uz), this.hit = Ez, void this.setInteractive(Ez ? (zz => {
            const uz = zz.closest(Sl);
            if (uz) {
              var bz, Ez;
              const zz = null !== (bz = null === (Ez = uz.parentElement) || void 0 === Ez ? void 0 : Ez.closest("[data-pad-focusable]")) && void 0 !== bz ? bz : uz;
              return Ou(zz) ? {
                element: null,
                magnet: null
              } : {
                element: zz,
                magnet: uz
              }
            }
            const nz = Dl(zz);
            return {
              element: nz,
              magnet: nz
            }
          })(Ez) : {
            element: null,
            magnet: null
          });
          zz && Ez && Ju(Ez, Ez, uz)
        }
        setInteractive(zz) {
          let {
            element: uz,
            magnet: bz
          } = zz;
          this.interactive = uz, this.magnet = bz
        }
        clearHover() {
          this.hit && Ju(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const zz = this.hit;
          if (!zz || Vu(zz)) return {
            kind: "ignored"
          };
          const uz = (0, vn.b)(zz),
            bz = zz.closest("[data-pad-slider]");
          return uz && bz ? {
            kind: "slider",
            slider: bz,
            adjuster: uz
          } : (Nu(zz, this.getPoint()), {
            kind: "pointer",
            target: zz
          })
        }
        applySliderFraction(zz) {
          var uz;
          const bz = zz.slider.getBoundingClientRect(),
            Ez = bz.height > bz.width,
            nz = null === (uz = zz.slider.querySelector("[data-pad-slider-handle]")) || void 0 === uz ? void 0 : uz.getBoundingClientRect(),
            iz = nz ? Ez ? nz.height : nz.width : 0,
            lz = (Ez ? bz.height : bz.width) - iz;
          if (lz <= 0) return;
          const Mz = Ez ? bz.bottom - iz / 2 - this.state.y : this.state.x - bz.left - iz / 2;
          zz.adjuster.setFraction(Math.max(0, Math.min(1, Mz / lz)))
        }
        updateConfirm(zz, uz) {
          zz.wasPressed(uz) && (this.press = zz.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const bz = this.press;
          if (!bz) return;
          if (zz.isHeld(uz)) return "slider" === bz.kind && this.applySliderFraction(bz), void this.updateRepeat();
          this.press = null;
          const Ez = this.repeated;
          if (this.endRepeat(), !zz.wasReleased(uz)) return void this.endPressWithoutClick(bz);
          const nz = this.getPoint(),
            iz = this.hit;
          if ("slider" === bz.kind && bz.adjuster.endDrag(), "pointer" === bz.kind) {
            const zz = null !== iz && void 0 !== iz ? iz : bz.target.isConnected ? bz.target : null;
            zz && vu(zz, nz);
            const uz = iz && bz.target.isConnected && !Ez ? ((zz, uz) => {
              for (let bz = zz; bz; bz = bz.parentElement)
                if (bz.contains(uz)) return bz;
              return null
            })(bz.target, iz) : null;
            uz && (en.noteCursorActivation(uz), (0, wz.h)(uz, new MouseEvent("click", ru(nz, 0, 0))), au(uz), fu(uz) && Au(uz))
          }
        }
        beginRepeat() {
          var zz, uz, bz;
          const Ez = null !== (zz = null === (uz = this.hit) || void 0 === uz ? void 0 : uz.closest("[data-pad-repeat]")) && void 0 !== zz ? zz : null;
          this.repeatStop = Ez, this.repeatKey = null !== (bz = null === Ez || void 0 === Ez ? void 0 : Ez.getAttribute("data-pad-repeat")) && void 0 !== bz ? bz : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const zz = this.repeatStop;
          if (!zz) return;
          const uz = this.hit;
          zz.isConnected && !Ou(zz) && zz.getAttribute("data-pad-repeat") === this.repeatKey && uz && zz.contains(uz) ? zz.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, en.noteCursorActivation(zz), (0, wz.h)(zz, new MouseEvent("click", ru(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(zz) {
          "slider" === zz.kind && zz.adjuster.endDrag(), "pointer" === zz.kind && zz.target.isConnected && vu(zz.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(zz, uz) {
          zz.wasPressed(uz) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !zz.isHeld(uz) && (this.secondaryArmed = !1, zz.wasReleased(uz) && this.hit && xu(this.hit, this.getPoint(), 2))
        }
        updateScroll(zz, uz) {
          const bz = vz(zz.rightStick, zz.dtMs);
          if (0 === bz.x && 0 === bz.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + bz.x,
            y: this.scrollRemainder.y + bz.y
          };
          const Ez = Math.trunc(this.scrollRemainder.x),
            nz = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Ez,
            y: this.scrollRemainder.y - nz
          };
          const iz = this.hit;
          if (!iz) return;
          let lz = !1;
          if (0 !== nz) {
            const zz = Ql(iz, "y", nz > 0 ? 1 : -1, uz);
            zz && (zz.scrollBy({
              top: nz,
              behavior: "instant"
            }), lz = !0)
          }
          if (0 !== Ez) {
            const zz = Ql(iz, "x", Ez > 0 ? 1 : -1, uz);
            zz && (zz.scrollBy({
              left: Ez,
              behavior: "instant"
            }), lz = !0)
          }
          lz && (this.lastHitTestMs = -1 / 0)
        }
        sK() {
          gu.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      el = () => {
        const zz = (0, qz.useMemo)((() => new yz), []),
          uz = (0, Fz.z)();
        return (0, qz.useEffect)((() => {
          if (!uz) return;
          let bz = 0,
            Ez = {
              of: null,
              atMs: 0,
              list: []
            };
          const nz = document.getElementsByClassName(rn),
            iz = zz => {
              for (const uz of [...nz]) uz !== zz && uz.classList.remove(rn)
            },
            lz = () => {
              var uz;
              bz = requestAnimationFrame(lz);
              const nz = (() => {
                const zz = en.getFocused();
                if (en.isActive() && null !== zz && void 0 !== zz && zz.isConnected) return zz;
                const uz = Wl.getHighlighted();
                return null !== uz && void 0 !== uz && uz.isConnected ? uz : null
              })();
              iz(nz), nz && !nz.classList.contains(rn) && nz.classList.add(rn);
              const Mz = null !== (uz = null === nz || void 0 === nz ? void 0 : nz.closest("[data-pad-reticle-box]")) && void 0 !== uz ? uz : nz;
              zz.show(Mz ? ((zz, uz) => {
                let bz = zz.left,
                  Ez = zz.top,
                  nz = zz.right,
                  iz = zz.bottom;
                for (const lz of uz) {
                  if (!lz) continue;
                  const zz = Vz(lz);
                  bz = Math.max(bz, zz.left), Ez = Math.max(Ez, zz.top), nz = Math.min(nz, zz.right), iz = Math.min(iz, zz.bottom)
                }
                return nz <= bz || iz <= Ez ? null : {
                  left: bz,
                  top: Ez,
                  width: nz - bz,
                  height: iz - Ez
                }
              })(Mz.getBoundingClientRect(), (zz => {
                const uz = performance.now();
                return (Ez.of !== zz || uz - Ez.atMs > 500) && (Ez = {
                  of: zz,
                  atMs: uz,
                  list: [Az(zz, "y"), Az(zz, "x")]
                }), Ez.list
              })(Mz)) : null)
            };
          return bz = requestAnimationFrame(lz), () => {
            cancelAnimationFrame(bz), iz(null), zz.hide()
          }
        }), [uz, zz]), (0, cz.jsx)(Dz, {
          placer: zz,
          className: "PadFocusRing"
        })
      },
      jl = (zz, uz) => {
        zz.style.transform = `translate3d(${uz.x}px, ${uz.y}px, 0)`, zz.classList.toggle("Visible", uz.visible), zz.classList.toggle("Pressed", uz.pressed)
      },
      Il = () => {
        const zz = (0, qz.useRef)(null);
        return (0, qz.useEffect)((() => {
          const uz = gu.subscribe((uz => {
            zz.current && jl(zz.current, uz)
          }));
          return zz.current && jl(zz.current, gu.get()), uz
        }), []), (0, cz.jsx)("div", {
          ref: zz,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, cz.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Bl = "#ncmp__modal.ncmp__active",
      Cl = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(Bl) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(Bl),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Yl = "PadOverThirdParty",
      kl = new Set(Cl.map((zz => zz.id))),
      zM = () => {
        const zz = Cl.map((zz => {
            let {
              id: uz,
              find: bz,
              startSelectors: Ez
            } = zz;
            return (0, eE.m)({
              id: uz,
              kind: "popup",
              getRoot: () => {
                const zz = bz(),
                  uz = zz ? ((zz, uz) => {
                    var bz;
                    for (const Ez of uz) {
                      const uz = zz.querySelector(Ez);
                      if (uz) return uz
                    }
                    return null !== (bz = [...zz.querySelectorAll("button")].find((zz => !zz.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== bz ? bz : null
                  })(zz, Ez) : null;
                if (zz && uz && !uz.hasAttribute("data-pad-default-focus")) {
                  for (const uz of zz.querySelectorAll("[data-pad-default-focus]")) uz.removeAttribute("data-pad-default-focus");
                  for (const uz of zz.querySelectorAll("[data-pad-hint-bar-avoid]")) uz.removeAttribute("data-pad-hint-bar-avoid");
                  uz.setAttribute("data-pad-default-focus", ""), ((zz, uz) => {
                    let bz = zz;
                    for (let Ez = zz.parentElement; Ez && uz.contains(Ez) && !(Ez.getBoundingClientRect().height >= window.innerHeight / 2); Ez = Ez.parentElement) bz = Ez;
                    return bz
                  })(uz, zz).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return zz
              },
              close: null,
              memoryKey: null
            })
          })),
          uz = document.documentElement,
          bz = lz.g.onFrame((() => {
            const zz = (0, Fz.h)() ? un() : null,
              bz = !!zz && (Ez = zz.layer, kl.has(Ez.id));
            var Ez;
            uz.classList.contains(Yl) !== bz && uz.classList.toggle(Yl, bz)
          }));
        return () => {
          for (const uz of zz) uz();
          bz(), uz.classList.remove(Yl)
        }
      },
      uM = "PadLargePointer",
      bM = () => {
        (0, qz.useEffect)((() => {
          const zz = (0, wz.n)(document.body),
            uz = en.install(),
            bz = Wl.install(),
            Ez = zM();
          return () => {
            zz(), uz(), bz(), Ez()
          }
        }), []);
        const {
          largePointer: zz
        } = (0, dz.q)(), uz = (0, Ll.p)() && zz;
        return (0, qz.useEffect)((() => {
          if (uz) return document.documentElement.classList.add(uM), () => {
            document.documentElement.classList.remove(uM)
          }
        }), [uz]), (0, Mz.createPortal)((0, cz.jsxs)(cz.Fragment, {
          children: [(0, cz.jsx)(gl, {}), (0, cz.jsx)(el, {}), (0, cz.jsx)(Il, {})]
        }), document.body)
      };
    var EM = bz(8459),
      nM = bz(8481),
      iM = bz(8474);
    bz(8488);
    const lM = (zz, uz) => {
        const [bz, Ez] = (0, qz.useState)(!1), [nz, iz] = (0, qz.useState)(null), lz = (0, qz.useRef)(null), Mz = (0, qz.useCallback)((zz => {
          lz.current = zz, iz(zz)
        }), []), tz = (0, qz.useCallback)((() => {
          Ez(!1), Mz(null)
        }), [Mz]), Oz = (0, qz.useCallback)((() => {
          Ez(!0)
        }), []), pz = (0, qz.useCallback)(((zz, uz) => {
          Mz((0, iM.E)(zz, uz, lz.current))
        }), [Mz]);
        (0, qz.useLayoutEffect)((() => (uz(bz), (0, Pl.A)(zz, bz), Hz.k.sK(Pl.r), () => {
          uz(!1), (0, Pl.A)(zz, !1), Hz.k.sK(Pl.r)
        })), [bz, zz, uz]), (0, Oi.g)("appManagerUpdated|activeInputDevice", (zz => {
          "gamepad" !== zz && tz()
        })), (0, Oi.g)("appManagerUpdated|gameState", (zz => {
          "inGame" !== zz && tz()
        }));
        const dz = () => {
          (0, zE.l)() && tz()
        };
        return (0, Oi.g)("appManagerUpdated|openEverythingMenuName", dz), (0, Oi.g)("appManagerUpdated|openInGameMenuName", dz), {
          open: bz,
          picked: nz,
          pickedRef: lz,
          show: Oz,
          aim: pz,
          close: tz
        }
      },
      MM = zz => {
        let {
          className: uz,
          slotCount: bz,
          picked: Ez,
          slotLabel: nz,
          renderSlot: iz,
          centre: lz
        } = zz;
        const Mz = Array.from({
          length: bz
        }, ((zz, uz) => uz));
        return (0, cz.jsx)("div", {
          className: Uz()("EmoteWheelOverlay PadRadialWheel", uz),
          children: (0, cz.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * iM.t + "rem",
              height: 2 * iM.t + "rem"
            },
            children: [(0, cz.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${iM.m} ${iM.m}`,
              children: [Mz.map((zz => (0, cz.jsx)("path", {
                d: (0, iM.x)(zz, bz, iM.g, iM.j, iM.k),
                className: Uz()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: zz === Ez
                }),
                "aria-label": nz(zz)
              }, zz))), (0, cz.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: iM.g,
                cy: iM.g,
                r: iM.k
              }), (0, cz.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: iM.g,
                cy: iM.g,
                r: iM.j
              }), null !== Ez && (0, cz.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, iM.x)(Ez, bz, iM.g, iM.j, iM.k)
              })]
            }), Mz.map((zz => {
              const uz = (0, iM.A)(zz, bz);
              return (0, cz.jsx)("div", {
                className: Uz()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: zz === Ez
                }),
                style: {
                  left: `calc(50% + ${iM.e*Math.cos(uz)}rem)`,
                  top: `calc(50% + ${iM.e*Math.sin(uz)}rem)`
                },
                "aria-hidden": !0,
                children: iz(zz)
              }, zz)
            })), (0, cz.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: lz
            })]
          })
        })
      },
      tM = ll.length,
      HM = () => {
        const {
          t: zz
        } = (0, nz.F)(), uz = lM("chat", rE.r), bz = (0, qz.useMemo)((() => ll.map((uz => zz(uz)))), [zz]);
        return (0, Oi.g)(rE.p, (() => {
          uz.open || (0, EM.e)() || (0, nM.o)() || "inGame" !== tz.e.get("gameState") || (0, zE.l)() || !(0, fE.e)() || uz.show()
        })), (0, Oi.g)(rE.f, (zz => {
          uz.open && uz.aim(zz, tM)
        })), (0, Oi.g)(rE.n, (() => {
          var zz;
          if (!uz.open) return;
          const Ez = uz.pickedRef.current;
          null !== Ez ? Ml.claim(performance.now()) && (uz.close(), null === (zz = (0, fE.e)()) || void 0 === zz || zz.sendLine(bz[Ez])) : uz.close()
        })), (0, Oi.g)(rE.j, uz.close), uz.open ? (0, cz.jsx)(MM, {
          className: "QuickChatWheel",
          slotCount: tM,
          picked: uz.picked,
          slotLabel: zz => bz[zz],
          renderSlot: zz => bz[zz],
          centre: null !== uz.picked ? bz[uz.picked] : zz("controller:quickChatPick")
        }) : null
      },
      OM = () => {
        const {
          t: zz
        } = (0, nz.F)(), uz = lM("actionButton", nM.p), [bz, Ez] = (0, qz.useState)([]);
        if ((0, Oi.g)(nM.h, (zz => {
            uz.open || (0, EM.e)() || (0, rE.b)() || "inGame" !== tz.e.get("gameState") || (0, zE.l)() || (Ez(zz), uz.show())
          })), (0, Oi.g)(nM.c, (zz => {
            uz.open && uz.aim(zz, bz.length)
          })), (0, Oi.g)(nM.g, (() => {
            if (!uz.open) return;
            const zz = uz.pickedRef.current;
            uz.close(), null !== zz && Hz.k.sK(nM.l, bz[zz])
          })), (0, Oi.g)(nM.f, uz.close), !uz.open) return null;
        const iz = null !== uz.picked ? bz[uz.picked] : null;
        return (0, cz.jsx)(MM, {
          className: "ActionWheel",
          slotCount: bz.length,
          picked: uz.picked,
          slotLabel: uz => {
            const Ez = bz[uz];
            return "reload" === Ez.kind ? zz("controller:gameplayReload") : "customButton" === Ez.kind ? Ez.description || Ez.icon : "touchButton" === Ez.kind && "string" === typeof Ez.label ? Ez.label : ""
          },
          renderSlot: zz => (0, cz.jsx)(fi, {
            action: bz[zz]
          }),
          centre: iz ? (0, cz.jsx)(fi, {
            action: iz
          }) : zz("controller:actionWheelPick")
        })
      };
    var pM = bz(96);
    const dM = () => ((0, qz.useEffect)((() => {
        var zz, uz;
        const bz = (0, wz.n)(document.getElementById("root")),
          Ez = (0, Fz.e)(),
          nz = (() => {
            const zz = [Hz.k.subscribe(In.f, (() => {
                kn("blockBreak")
              })), Hz.k.subscribe("damagedByOtherPlayer", (() => {
                kn("damage")
              })), Hz.k.subscribe("yourAttackHit", (zz => {
                let {
                  hitSelf: uz
                } = zz;
                uz || kn("hit")
              }))],
              uz = lz.g.onActivePadChanged((zz => {
                zz && kn("connect")
              }));
            return () => {
              for (const uz of zz) Hz.k.unsubscribe(uz);
              uz()
            }
          })(),
          iz = (() => {
            const zz = new ii({
              getVisitId: ni.d,
              peekVisitId: ni.peekVisitSessionId,
              readReportedVisitId: () => {
                const zz = Ei.h.getItem(li);
                return "string" === typeof zz ? zz : null
              },
              writeReportedVisitId: zz => {
                Ei.h.setItem(li, zz)
              },
              isPadActive: Fz.h,
              getPadFamily: () => {
                var zz, uz;
                return null !== (zz = null === (uz = lz.g.getActivePad()) || void 0 === uz ? void 0 : uz.family) && void 0 !== zz ? zz : null
              },
              canReport: ui.i,
              getInputType: bi.e,
              xZ: ui.p
            });
            let uz = 0,
              bz = null;
            const Ez = nz => {
                null === bz && ("notReady" !== zz.check(nz) || null !== bz || uz >= 20 || (uz++, bz = setTimeout((() => {
                  bz = null, Ez(!1)
                }), 3e3)))
              },
              nz = Hz.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Ez(!0)
              })),
              iz = (0, ni.i)((() => {
                uz = 0, Ez(!0)
              }));
            return () => {
              Hz.k.unsubscribe(nz), iz(), null !== bz && clearTimeout(bz)
            }
          })(),
          Mz = lz.g.onFrame(((zz, uz) => {
            const bz = (0, Fz.m)(zz);
            pz.b.dispatch(zz, uz, bz)
          }));
        let Oz = null !== (zz = null === (uz = lz.g.getActivePad()) || void 0 === uz ? void 0 : uz.family) && void 0 !== zz ? zz : null;
        const Zz = lz.g.onActivePadChanged((zz => {
            var uz, bz;
            (pz.b.reset(), (0, Fz.u)(), Hz.k.sK(lz.c, zz), (null !== (uz = null === zz || void 0 === zz ? void 0 : zz.family) && void 0 !== uz ? uz : null) !== Oz) && (Oz = null !== (bz = null === zz || void 0 === zz ? void 0 : zz.family) && void 0 !== bz ? bz : null, Hz.k.sK(dz.d, (0, dz.g)()));
            !zz && (0, Fz.h)() && (0, Fz.v)(tz.e.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Rz = () => {
            "visible" !== document.visibilityState && pz.b.clear()
          },
          Kz = () => {
            pz.b.clear()
          };
        document.addEventListener("visibilitychange", Rz), window.addEventListener("blur", Kz), lz.g.start(), (0, zi.i)();
        const Xz = null;
        return () => {
          bz(), Ez(), nz(), iz(), Mz(), Zz(), document.removeEventListener("visibilitychange", Rz), window.removeEventListener("blur", Kz), lz.g.stop(), null === Xz || void 0 === Xz || Xz()
        }
      }), []), (0, cz.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, cz.jsx)(Ji, {}), (0, cz.jsx)(qi, {}), (0, cz.jsx)(Ui, {}), (0, cz.jsx)(Al, {}), (0, cz.jsx)(bM, {}), (0, cz.jsx)(HM, {}), (0, cz.jsx)(OM, {})]
      })),
      FM = () => pM.featureFlags.useControllerSupport ? (0, cz.jsx)(dM, {}) : null;
    var ZM = bz(7867),
      RM = bz(8499);
    const KM = new Set(zi.e),
      wM = zz => `${RM.m}${(0,dz.k)()}/${zz}`,
      XM = zz => {
        if (!(0, RM.i)(zz)) return null;
        const [uz, bz] = zz.slice(RM.m.length).split("/");
        return (0, ZM.f)(uz) && KM.has(bz) ? (0, zi.c)(uz, bz) : null
      };
    var fM = bz(8507);
    const sM = () => {
        const {
          t: zz
        } = (0, nz.F)(), uz = (0, Fz.z)(), {
          gameState: bz,
          isUiHidden: Ez
        } = (0, tz.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: iz,
          sneakMode: lz
        } = (0, dz.q)(), [Mz, Hz] = (0, qz.useState)(fM.d);
        return (0, Oi.g)(xi.u, Hz), uz && !Ez && "inGame" === bz && Mz ? (0, cz.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!iz && (0, cz.jsx)(wi, {
            glyph: (0, Oz.i)("toggle" === lz ? "sneak" : "sneakToggle")
          }), (0, cz.jsx)("span", {
            children: zz("controller:gameplaySneaking")
          })]
        }) : null
      },
      rM = 12,
      oM = zz => {
        let {
          trigger: uz,
          className: bz,
          children: Ez
        } = zz;
        const nz = (0, qz.useRef)(null);
        return (0, qz.useEffect)((() => {
          let zz = 0;
          const bz = Az(uz, "y"),
            Ez = () => {
              zz = requestAnimationFrame(Ez);
              const iz = nz.current;
              if (!iz || null === uz || void 0 === uz || !uz.isConnected) return;
              const {
                left: lz,
                top: Mz
              } = function(zz, uz, bz) {
                let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const iz = zz.left + zz.width / 2,
                  lz = Math.max(rM, bz.width - rM - uz.width),
                  Mz = Math.min(Math.max(iz - uz.width / 2, rM), lz),
                  tz = bz.height - Ez;
                let Hz = 0,
                  Oz = tz;
                if (nz) {
                  const zz = Math.max(0, nz.top),
                    Ez = Math.min(tz, nz.bottom);
                  Ez - zz >= Math.max(bz.height / 2, uz.height + 24) && (Hz = zz, Oz = Ez)
                }
                const pz = zz.top + zz.height / 2 < (Hz + Oz) / 2 ? Oz - rM - uz.height : Hz + rM;
                return {
                  left: Mz,
                  top: Math.max(rM, pz)
                }
              }(uz.getBoundingClientRect(), {
                width: iz.offsetWidth,
                height: iz.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(ml)) || 0, null !== bz && void 0 !== bz && bz.isConnected ? bz.getBoundingClientRect() : null);
              iz.style.transform = `translate3d(${Math.round(lz)}px, ${Math.round(Mz)}px, 0)`, iz.style.visibility = "visible"
            };
          return Ez(), () => {
            cancelAnimationFrame(zz)
          }
        }), [uz]), (0, cz.jsx)("div", {
          ref: nz,
          className: bz,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Ez
        })
      };
    var NM = bz(1047),
      vM = bz(8514),
      xM = bz(1419),
      JM = bz(8519),
      AM = bz(8524);
    const TM = {
        shop: {
          icon: "cart-shopping",
          labelKey: "controller:menusShop"
        },
        tasks: {
          icon: "bars",
          labelKey: "controller:menusTasks"
        },
        invite: {
          icon: "user-plus",
          labelKey: "controller:menusInvite"
        },
        leave: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      LM = () => {
        const {
          t: zz
        } = (0, nz.F)(), uz = (0, Fz.z)(), bz = (0, vM.c)(), Ez = (0, ai.g)("_tasks"), iz = (0, ai.g)("_availableLeaderboards");
        if (!uz) return null;
        const lz = (zz => {
          let {
            hasShop: uz,
            hasTasksOrLeaderboards: bz,
            canInvite: Ez
          } = zz;
          const nz = [];
          return uz && nz.push("shop"), bz && nz.push("tasks"), Ez && nz.push("invite"), nz.push("leave"), nz
        })({
          hasShop: bz,
          hasTasksOrLeaderboards: !(!Ez && !iz),
          canInvite: !!pM.featureFlags.canUseInviteLinks
        });
        return (0, cz.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: lz.map((uz => {
            const {
              icon: bz,
              labelKey: Ez
            } = TM[uz], nz = "leave" === uz ? xM.K : xM.f;
            return (0, cz.jsx)(nz, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (zz => {
                  switch (zz) {
                    case "shop":
                      return Hz.k.sK(AM.l), void tz.e.set({
                        openEverythingMenuName: kb.r.SHOP
                      });
                    case "tasks":
                      return void Hz.k.sK("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Hz.k.sK("toggleMenu", "inviteLink");
                    case "leave":
                      (0, JM.b)()
                  }
                })(uz)
              },
              children: (0, cz.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, cz.jsx)(NM.c, {
                  name: bz
                }), (0, cz.jsx)("span", {
                  children: zz(Ez)
                })]
              })
            }, uz)
          }))
        })
      };
    var PM = bz(1923);
    const GM = Zz.E,
      aM = ["forward", "backward", "left", "right", "sprint"],
      VM = zz => zz.ctrlKey || zz.altKey || "Alt" === zz.key || "ArrowUp" === zz.key || "ArrowDown" === zz.key || "Tab" === zz.code || "/" === zz.key || "Slash" === zz.code;
    class mM {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(Zz.cb).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(zz) {
        this.armed = zz
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || uz ? !zz.repeat && this.swallowedKeys.delete(zz.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(zz.code),
          continues: !1
        } : "Escape" === zz.key || zz.repeat && !this.swallowedKeys.has(zz.code) ? {
          swallow: !1,
          continues: !1
        } : bz ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(zz.code), {
          swallow: !0,
          continues: (0, Fz.f)(zz)
        })
      }
      onKeyUp(zz) {
        return this.swallowedKeys.delete(zz.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nz = (0, Zz.w)(zz.values, this.previousHeld),
          iz = null === bz ? -1 : (0, Zz.q)(bz),
          lz = iz >= 0 && nz[iz] && !this.previousHeld[iz],
          Mz = nz.some(((zz, uz) => zz && !this.previousHeld[uz] && uz !== iz)),
          tz = Math.hypot(zz.leftStick.x, zz.leftStick.y) >= GM,
          Hz = Math.hypot(zz.rightStick.x, zz.rightStick.y) >= GM,
          Oz = tz && !this.leftStickWasPressed || Hz && !this.rightStickWasPressed;
        this.previousHeld = nz, this.leftStickWasPressed = tz, this.rightStickWasPressed = Hz;
        let pz = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, pz = !0);
        const dz = !uz && lz && !Ez,
          Fz = !dz && this.armed && !uz && (Mz || Oz);
        return (dz || Fz) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Fz, pz = !0), {
          continues: Fz,
          back: dz,
          consumeHeld: pz
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const qM = new Set([...PM.j, ...PM.w]),
      hM = zz => ((zz, uz, bz) => {
        const Ez = Object.keys(uz).filter((Ez => !bz.has(Ez) && uz[Ez].includes(zz)));
        return Ez.length > 0 && Ez.every((zz => aM.includes(zz)))
      })(zz, PM.s, qM),
      UM = (zz, uz, bz) => {
        const Ez = new mM,
          nz = zz => {
            if (!zz.isTrusted) return;
            const {
              swallow: bz,
              continues: nz
            } = Ez.onKeyDown(zz, !(0, Fz.E)(zz) || (0, jn.e)() || (0, zE.l)(), hM(zz.code));
            bz && (zz.stopImmediatePropagation(), VM(zz) && zz.preventDefault()), nz && ((0, Fz.v)("keyboardMouse"), uz())
          },
          iz = zz => {
            zz.isTrusted && Ez.onKeyUp(zz) && (zz.stopImmediatePropagation(), VM(zz) && zz.preventDefault())
          },
          Mz = () => {
            Ez.forgetKeys()
          };
        window.addEventListener("keydown", nz, !0), window.addEventListener("keyup", iz, !0), window.addEventListener("blur", Mz);
        const tz = lz.g.onFrame((zz => {
            const nz = pz.b.getActiveConsumerName(),
              iz = bz(),
              lz = iz ? (0, Oz.i)("menuBack") : null,
              Mz = null !== nz && "gameplay" !== nz,
              {
                continues: tz,
                back: Hz,
                consumeHeld: Zz
              } = Ez.onPadFrame(zz, Mz, lz, (0, Fz.j)(zz));
            if (Zz) {
              const zz = (0, dz.g)().swapSticks ? "right" : "left";
              pz.b.consumeAllHeld(Ez.consumeLeavesMoveStick() ? zz : null)
            }
            Hz ? null === iz || void 0 === iz || iz() : tz && uz()
          })),
          Hz = (0, jn.f)(`pressToContinue:${zz}`, (() => Ez.blocksGameplay()));
        return {
          setArmed: zz => {
            Ez.setArmed(zz)
          },
          dispose: () => {
            window.removeEventListener("keydown", nz, !0), window.removeEventListener("keyup", iz, !0), window.removeEventListener("blur", Mz), tz(), Hz()
          }
        }
      };
    var cM = bz(4746),
      gM = bz(3181),
      SM = bz(2882),
      yM = bz(7871);
    const DM = zz => {
        let {
          text: uz
        } = zz;
        return (0, cz.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: uz
        })
      },
      QM = zz => {
        let {
          label: uz,
          hint: bz,
          options: Ez,
          value: iz,
          onChange: lz
        } = zz;
        const {
          t: Mz
        } = (0, nz.F)();
        return (0, cz.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, cz.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, cz.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, cz.jsx)("div", {
                className: "SliderText",
                children: uz
              }), bz && (0, cz.jsx)("div", {
                className: "ControllerSettingsHint",
                children: bz
              })]
            }), (0, cz.jsx)(SM.d, {
              options: Ez.map((zz => ({
                label: "label" in zz ? zz.label : Mz(zz.labelKey),
                value: zz.value
              }))),
              value: iz,
              onChange: zz => {
                lz(zz.value)
              }
            })]
          })
        })
      },
      WM = zz => {
        let {
          settingKey: uz,
          label: bz,
          range: Ez,
          format: nz
        } = zz;
        const iz = (0, dz.q)();
        return (0, cz.jsx)(cM.f, {
          name: bz,
          min: Ez.min,
          max: Ez.max,
          step: Ez.step,
          padStep: Ez.step,
          initValue: iz[uz],
          format: nz,
          onChange: zz => {
            (0, dz.o)({
              [uz]: (0, yM.u)(zz, Ez)
            })
          }
        })
      };
    var eM = bz(8530),
      jM = bz(8534);
    const IM = zz => zz instanceof DOMException && ("SecurityError" === zz.name || "NotAllowedError" === zz.name),
      BM = zz => {
        const [uz] = [...zz.controllers].sort(((zz, uz) => jM.s[zz] - jM.s[uz]));
        return jM.p[uz]
      },
      CM = zz => {
        (0, eM.e)().allowPhoneMotion().catch((uz => {
          zz && IM(uz) ? zz() : console.warn("Could not enable the motion sensor", uz)
        }))
      },
      YM = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      kM = zz => {
        let {
          status: uz
        } = zz;
        const {
          t: bz
        } = (0, nz.F)(), [Ez, iz] = (0, qz.useState)(null), lz = `${uz.controllers.join(",")}|${uz.phoneMotion}`;
        (0, qz.useEffect)((() => {
          iz(null)
        }), [lz]);
        const Mz = () => {
          (0, eM.e)().connectController().then((zz => {
            iz(zz > 0 ? "openFailed" : null)
          })).catch((zz => {
            IM(zz) ? iz("needsClick") : console.warn("Could not connect motion controller", zz)
          }))
        };
        if (uz.hidSupported) {
          let zz = bz("controller:settingsGyroConnectHint");
          return "needsClick" === Ez ? zz = bz("controller:settingsGyroConnectNeedsClick") : "openFailed" === Ez ? zz = bz("controller:settingsGyroOpenFailed") : uz.controllers.length > 0 && (zz = bz("controller:settingsGyroConnected", {
            name: BM(uz)
          })), (0, cz.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, cz.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, cz.jsx)("div", {
                className: "ControllerSettingsHint",
                children: zz
              }), (0, cz.jsx)(xM.f, {
                onClick: Mz,
                children: bz("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === uz.phoneMotion) return (0, cz.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, cz.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Ez && (0, cz.jsx)("div", {
              className: "ControllerSettingsHint",
              children: bz("controller:settingsGyroAllowNeedsTap")
            }), (0, cz.jsx)(xM.f, {
              onClick: () => {
                CM((() => {
                  iz("needsTap")
                }))
              },
              children: bz("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const tz = YM[uz.phoneMotion];
        return tz ? (0, cz.jsx)("div", {
          className: "ControllerSettingsHint",
          children: bz(tz)
        }) : null
      },
      zt = () => {
        const {
          t: zz
        } = (0, nz.F)(), uz = (0, dz.q)(), bz = (0, eM.g)(), Ez = (0, Fz.C)(), iz = !bz.hidSupported && bz.phoneSupported && !bz.padConnected, lz = (bz.hidSupported || bz.phoneSupported) && !iz, Mz = (0, Oz.i)("pause");
        return (0, cz.jsxs)(cz.Fragment, {
          children: [(0, cz.jsx)(DM, {
            text: zz("controller:settingsGyro")
          }), iz && (0, cz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz("controller:settingsGyroPhoneNeedsController")
          }), !lz && !iz && (0, cz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz(bz.hidBlocked || bz.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), lz && (0, cz.jsx)(cM.b, {
            label: zz(bz.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: uz.gyroAiming,
            onClick: zz => {
              var uz, bz;
              (0, dz.o)({
                gyroAiming: zz
              });
              const Ez = null === (uz = null === (bz = navigator.userActivation) || void 0 === bz ? void 0 : bz.isActive) || void 0 === uz || uz;
              if (!zz || !Ez) return;
              const nz = (0, eM.e)(),
                iz = nz.getStatus();
              iz.hidSupported ? nz.connectControllerIfNoneGranted().catch((zz => {
                console.warn("Motion controller picker unavailable", zz)
              })) : "needsPermission" === iz.phoneMotion && CM()
            },
            circleInfoText: zz(bz.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), lz && bz.hidSupported && (0, cz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz("controller:settingsGyroSteamHint")
          }), lz && uz.gyroAiming && (0, cz.jsxs)(cz.Fragment, {
            children: [(0, cz.jsx)(kM, {
              status: bz
            }), (0, cz.jsx)(WM, {
              settingKey: "gyroSensitivity",
              label: zz("controller:settingsGyroSensitivity"),
              range: yM.O,
              format: yM.E
            }), (0, cz.jsx)(QM, {
              label: zz("controller:settingsGyroActivation"),
              hint: "aiming" === uz.gyroActivation && (0, cz.jsx)(gM.b, {
                text: zz("controller:settingsGyroAimingHint", {
                  button: gM.e
                }),
                glyph: (0, Oz.i)("use")
              }),
              options: yM.K,
              value: uz.gyroActivation,
              onChange: zz => {
                (0, dz.o)({
                  gyroActivation: zz
                })
              }
            }), "button" === uz.gyroActivation && (0, cz.jsx)(QM, {
              label: zz("controller:settingsGyroButton"),
              hint: zz("controller:settingsGyroButtonHint"),
              options: yM.o.filter((zz => zz !== Mz || zz === uz.gyroButton)).map((zz => ({
                label: Ki(Ez, zz),
                value: zz
              }))),
              value: uz.gyroButton,
              onChange: zz => {
                (0, dz.o)({
                  gyroButton: zz
                })
              }
            })]
          })]
        })
      };
    var ut = bz(1802);
    const bt = () => {
      const {
        t: zz
      } = (0, nz.F)(), uz = (0, dz.q)(), bz = (0, Fz.C)();
      return (0, cz.jsxs)(cz.Fragment, {
        children: [(0, cz.jsx)(DM, {
          text: zz("controller:settingsAccessibility")
        }), (0, cz.jsx)(cM.b, {
          label: zz("controller:settingsSwapConfirmBack"),
          checked: (0, Oz.K)(uz.swapConfirmBack, bz),
          onClick: zz => {
            (0, dz.o)({
              swapConfirmBack: zz === (0, Oz.K)(null, bz) ? null : zz
            }), ut.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: zz("controller:settingsSwapConfirmBackInfo")
        }), (0, cz.jsx)(QM, {
          label: zz("controller:settingsButtonRepeat"),
          hint: zz("controller:settingsButtonRepeatHint"),
          options: yM.l,
          value: uz.buttonRepeat,
          onChange: zz => {
            (0, dz.o)({
              buttonRepeat: zz
            })
          }
        }), (0, cz.jsx)(QM, {
          label: zz("controller:settingsTapHoldTime"),
          hint: zz("controller:settingsTapHoldTimeHint"),
          options: yM.sb,
          value: uz.tapHoldTime,
          onChange: zz => {
            (0, dz.o)({
              tapHoldTime: zz
            })
          }
        }), (0, cz.jsx)(QM, {
          label: zz("controller:settingsEmoteButton"),
          hint: zz("wheel" === uz.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: yM.A,
          value: uz.emoteButton,
          onChange: zz => {
            (0, dz.o)({
              emoteButton: zz
            })
          }
        }), (0, cz.jsx)(QM, {
          label: zz("controller:settingsAttackMode"),
          hint: zz("toggle" === uz.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: yM.k,
          value: uz.attackMode,
          onChange: zz => {
            (0, dz.o)({
              attackMode: zz
            })
          }
        }), (0, cz.jsx)(cM.b, {
          label: zz("controller:settingsLargePointer"),
          checked: uz.largePointer,
          onClick: zz => {
            (0, dz.o)({
              largePointer: zz
            })
          },
          circleInfoText: zz("controller:settingsLargePointerInfo")
        })]
      })
    };
    var Et = bz(8539);
    const nt = new class {
        constructor(zz) {
          this.router = zz, this.current = null
        }
        claim(zz, uz) {
          const bz = this.current;
          bz && (this.current = null, bz.release(), bz.onTakenOver());
          const Ez = this.router.register({
              ...zz,
              name: "capture"
            }),
            nz = {
              release: Ez,
              onTakenOver: uz
            };
          return this.current = nz, () => {
            this.current === nz && (this.current = null), Ez()
          }
        }
      }(pz.b),
      it = zz => {
        (0, qz.useEffect)((() => {
          if (!zz) return;
          const uz = zz();
          let bz = !1;
          const Ez = () => {
              bz || (bz = !0, uz.onEnd())
            },
            nz = nt.claim({
              isActive: () => !bz,
              onFrame: zz => {
                uz.onFrame(zz, Ez)
              }
            }, Ez),
            iz = void 0 === uz.timeoutMs ? void 0 : window.setTimeout(Ez, uz.timeoutMs),
            lz = zz => {
              "Escape" === zz.key && (zz.preventDefault(), zz.stopPropagation(), Ez())
            };
          return window.addEventListener("keydown", lz, !0), () => {
            bz = !0, nz(), window.clearTimeout(iz), window.removeEventListener("keydown", lz, !0)
          }
        }), [zz])
      },
      lt = zz => {
        let {
          row: uz,
          capturing: bz,
          onCapture: Ez,
          holdFillRef: iz,
          onRebind: lz,
          swapped: Mz
        } = zz;
        const {
          t: tz
        } = (0, nz.F)();
        if ("fixed" === uz.kind) return (0, cz.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, cz.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, cz.jsx)("div", {
              className: "ControlName",
              children: tz(uz.labelKey)
            }), (0, cz.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, cz.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, cz.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, cz.jsx)(wi, {
                    glyph: "move" === uz.stick ? (0, Oz.u)() : (0, Oz.q)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Hz
        } = uz, pz = (0, Oz.i)(Hz), dz = (0, Oz.l)(Hz), Fz = pz !== dz && (0, Oz.e)(Hz, dz);
        return (0, cz.jsxs)("div", {
          className: Uz()("ControlRow PadControlRow", {
            Capturing: bz
          }),
          children: [(0, cz.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, cz.jsx)("div", {
              className: "ControlName",
              children: tz(yM.h[Hz])
            }), (0, cz.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!bz && (0, cz.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, cz.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ez(Hz)
                  },
                  children: (0, cz.jsx)(wi, {
                    glyph: pz
                  })
                }), Fz && (0, cz.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: tz("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    lz(Hz, dz)
                  },
                  children: (0, cz.jsx)(NM.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), bz && (0, cz.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, cz.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, cz.jsx)("span", {
                    children: tz("controller:settingsCapturePrompt")
                  }), (0, cz.jsx)("div", {
                    ref: iz,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, cz.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ez(null)
                  },
                  children: "\xd7"
                })]
              }), bz && (0, cz.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, cz.jsx)(gM.b, {
                  text: tz((0, Oz.e)(Hz, (0, Oz.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: gM.e
                  }),
                  glyph: (0, Oz.i)("menuBack")
                })
              })]
            })]
          }), Mz.map((zz => (0, cz.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, cz.jsx)(gM.b, {
              text: tz("controller:settingsSwapNotice", {
                action: tz(yM.h[zz]),
                button: gM.e
              }),
              glyph: (0, Oz.i)(zz)
            })
          }, zz))), bz && (0, cz.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${yM.r}ms`
            }
          })]
        })
      },
      Mt = [],
      tt = zz => {
        let {
          layoutSetting: uz
        } = zz;
        const {
          t: bz
        } = (0, nz.F)(), Ez = (0, dz.q)();
        (0, Fz.C)();
        const iz = (0, qz.useRef)(null),
          [lz, Mz] = (0, qz.useState)(null),
          tz = (0, qz.useCallback)(((zz, uz) => {
            const bz = (0, dz.g)().bindings;
            (0, Oz.F)(zz, uz);
            const Ez = (0, Oz.w)(bz, zz);
            Mz(Ez.length > 0 ? {
              action: zz,
              swapped: Ez
            } : null)
          }), []),
          [Hz, Rz] = ((zz, uz) => {
            const [bz, Ez] = (0, qz.useState)(null), nz = (0, qz.useMemo)((() => bz ? () => {
              const nz = (0, Oz.i)("menuBack"),
                iz = new yM.b(nz, (0, Oz.i)("menuConfirm"), (zz => (0, Oz.e)(bz, zz)));
              return {
                onFrame: (Ez, lz) => {
                  var Mz;
                  const tz = Ez.frame.timestampMs,
                    Hz = iz.update({
                      ...Ez,
                      isDown: zz => (0, Zz.S)(Ez.frame.values, zz)
                    }, tz);
                  null === (Mz = zz.current) || void 0 === Mz || Mz.style.setProperty("width", 100 * iz.getBindHoldProgress(tz) + "%"), Hz && ("bind" === Hz.kind ? (pz.b.consumeButton(Hz.button), uz(bz, Hz.button)) : pz.b.consumeButton(nz), lz())
                },
                onEnd: () => {
                  Ez(null)
                },
                timeoutMs: yM.r
              }
            } : null), [bz, zz, uz]);
            return it(nz), [bz, Ez]
          })(iz, tz),
          Kz = zz => {
            zz && Mz(null), Rz(zz)
          };
        (0, qz.useEffect)((() => {
          if (!lz) return;
          const zz = window.setTimeout((() => {
            Mz(null)
          }), yM.pb);
          return () => {
            window.clearTimeout(zz)
          }
        }), [lz]);
        const wz = !Ez.swapSticks && 0 === Object.keys(Ez.bindings).length;
        return (0, cz.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, cz.jsx)("div", {
            className: "SliderText",
            children: bz("controller:settingsRemap")
          }), (0, cz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bz("controller:settingsRemapHint")
          }), (0, cz.jsx)(xM.K, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: wz,
            onClick: () => {
              Kz(null), Mz(null), (0, Oz.H)()
            },
            children: bz("controller:settingsResetAll")
          }), uz, yM.kb.map(((zz, uz) => (0, cz.jsx)(Et.c, {
            title: bz(zz.titleKey),
            defaultOpen: 0 === uz,
            children: zz.rows.map((zz => (0, cz.jsx)(lt, {
              row: zz,
              capturing: "action" === zz.kind && zz.action === Hz,
              onCapture: Kz,
              holdFillRef: iz,
              onRebind: tz,
              swapped: "action" === zz.kind && (null === lz || void 0 === lz ? void 0 : lz.action) === zz.action ? lz.swapped : Mt
            }, "action" === zz.kind ? zz.action : zz.labelKey)))
          }, zz.titleKey)))]
        })
      },
      Ht = zz => {
        let {
          deadzone: uz,
          dotRef: bz,
          labelKey: Ez
        } = zz;
        const {
          t: iz
        } = (0, nz.F)();
        return (0, cz.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, cz.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, cz.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * uz + "%",
                height: 100 * uz + "%"
              }
            }), (0, cz.jsx)("div", {
              ref: bz,
              className: "ControllerTesterDot"
            })]
          }), (0, cz.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: iz(Ez)
          })]
        })
      },
      Ot = (zz, uz, bz, Ez) => {
        var nz;
        zz && (zz.style.left = 50 + 50 * Math.max(-1, Math.min(1, uz.x)) + "%", zz.style.top = 50 + 50 * Math.max(-1, Math.min(1, uz.y)) + "%", null === (nz = zz.parentElement) || void 0 === nz || nz.classList.toggle("Active", Ez || Math.hypot(uz.x, uz.y) > bz))
      },
      pt = zz => {
        const uz = {
            deadzone: zz.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          bz = {
            deadzone: zz.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return zz.swapSticks ? {
          left: bz,
          right: uz
        } : {
          left: uz,
          right: bz
        }
      },
      dt = () => {
        const {
          t: zz
        } = (0, nz.F)(), uz = (() => {
          const [zz, uz] = (0, qz.useState)((() => lz.g.getActivePad()));
          return (0, Oi.g)(lz.c, (() => {
            uz(lz.g.getActivePad())
          })), zz
        })(), bz = pt((0, dz.q)()), Ez = (0, qz.useRef)(null), iz = (0, qz.useRef)(null), Mz = (0, qz.useRef)([]), tz = (0, qz.useRef)(null), Hz = (0, qz.useRef)(null), [Fz, Rz] = (zz => {
          const [uz, bz] = (0, qz.useState)(!1), Ez = (0, qz.useMemo)((() => uz ? () => {
            const uz = (0, Oz.i)("menuBack"),
              Ez = new yM.d;
            return {
              onFrame: (bz, nz) => {
                var iz;
                const lz = Ez.update({
                  pressed: bz.wasPressed(uz),
                  yM: bz.isHeld(uz)
                }, bz.frame.timestampMs);
                null === (iz = zz.current) || void 0 === iz || iz.style.setProperty("width", 100 * lz + "%"), lz >= 1 && (pz.b.consumeButton(uz), nz())
              },
              onEnd: () => {
                bz(!1)
              }
            }
          } : null), [uz, zz]);
          return it(Ez), [uz, bz]
        })(iz);
        (0, qz.useEffect)((() => {
          const zz = zz => {
            for (const bz of Zz.eb) {
              const uz = (0, Zz.q)(bz),
                Ez = Mz.current[uz];
              if (!Ez) continue;
              const nz = zz.values[uz];
              Ez.classList.toggle("Pressed", nz >= Zz.E), (0, Zz.V)(uz) && Ez.style.setProperty("--trigger-fill", `${Math.round(100*nz)}%`)
            }
            const uz = pt((0, dz.g)());
            Ot(tz.current, zz.leftStick, uz.left.deadzone, zz.values[(0, Zz.q)("LS")] >= Zz.E), Ot(Hz.current, zz.rightStick, uz.right.deadzone, zz.values[(0, Zz.q)("RS")] >= Zz.E)
          };
          return uz || zz((0, Zz.B)()), lz.g.onFrame(zz)
        }), [uz]), (0, qz.useEffect)((() => {
          uz || Rz(!1)
        }), [uz, Rz]), (0, qz.useEffect)((() => {
          var zz;
          Fz && (null === (zz = Ez.current) || void 0 === zz || zz.scrollIntoView({
            block: "nearest"
          }))
        }), [Fz]);
        const Kz = yM.db.find((zz => zz.value === (null === uz || void 0 === uz ? void 0 : uz.family)));
        return (0, cz.jsxs)("div", {
          ref: Ez,
          className: Uz()("SettingBox ControllerTester", {
            Testing: Fz
          }),
          children: [(0, cz.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, cz.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [uz && (0, cz.jsx)("div", {
                children: zz("controller:settingsTesterFamily", {
                  family: Kz ? zz(Kz.labelKey) : uz.family
                })
              }), uz && (0, cz.jsx)("div", {
                className: "ControllerTesterPadId",
                children: uz.id
              }), !uz && (0, cz.jsx)("div", {
                children: zz("controller:settingsTesterNoPad")
              })]
            }), (uz || Fz) && (0, cz.jsx)(xM.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Rz(!Fz)
              },
              children: zz(Fz ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), uz && !Fz && (0, cz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz("controller:settingsTesterHint")
          }), Fz && (0, cz.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, cz.jsx)(gM.b, {
              text: zz("controller:settingsTesterTesting", {
                button: gM.e
              }),
              glyph: (0, Oz.i)("menuBack")
            }), (0, cz.jsx)("div", {
              ref: iz,
              className: "ControllerTesterExitFill"
            })]
          }), (0, cz.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, cz.jsx)(Ht, {
              deadzone: bz.left.deadzone,
              dotRef: tz,
              labelKey: bz.left.labelKey
            }), (0, cz.jsx)("div", {
              className: "ControllerTesterButtons",
              children: Zz.eb.map((zz => {
                const bz = (0, Zz.q)(zz);
                return (0, cz.jsx)("div", {
                  ref: zz => {
                    Mz.current[bz] = zz
                  },
                  className: (0, Zz.V)(bz) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, cz.jsx)(wi, {
                    glyph: zz,
                    family: null === uz || void 0 === uz ? void 0 : uz.family
                  })
                }, zz)
              }))
            }), (0, cz.jsx)(Ht, {
              deadzone: bz.right.deadzone,
              dotRef: Hz,
              labelKey: bz.right.labelKey
            })]
          })]
        })
      },
      Ft = (0, qz.memo)((function() {
        const {
          t: zz
        } = (0, nz.F)(), uz = (0, dz.q)(), [bz, Ez] = (0, qz.useState)(!1);
        return (0, qz.useEffect)((() => {
          if (!bz) return;
          const zz = window.setTimeout((() => {
            Ez(!1)
          }), yM.pb);
          return () => {
            window.clearTimeout(zz)
          }
        }), [bz]), (0, cz.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, cz.jsx)(DM, {
            text: zz("controller:settingsLook")
          }), (0, cz.jsx)(WM, {
            settingKey: "lookSensitivityX",
            label: zz("controller:settingsLookSensitivityX"),
            range: yM.nb,
            format: yM.G
          }), (0, cz.jsx)(WM, {
            settingKey: "lookSensitivityY",
            label: zz("controller:settingsLookSensitivityY"),
            range: yM.nb,
            format: yM.G
          }), (0, cz.jsx)(WM, {
            settingKey: "aimLookSensitivity",
            label: zz("controller:settingsAimLookSensitivity"),
            range: yM.i,
            format: yM.G
          }), (0, cz.jsx)(QM, {
            label: zz("controller:settingsLookCurve"),
            hint: zz("controller:settingsLookCurveHint"),
            options: yM._,
            value: uz.lookCurve,
            onChange: zz => {
              (0, dz.o)({
                lookCurve: zz
              })
            }
          }), (0, cz.jsx)(cM.b, {
            label: zz("controller:settingsInvertLookX"),
            checked: uz.invertLookX,
            onClick: zz => {
              (0, dz.o)({
                invertLookX: zz
              })
            }
          }), (0, cz.jsx)(cM.b, {
            label: zz("controller:settingsInvertLookY"),
            checked: uz.invertLookY,
            onClick: zz => {
              (0, dz.o)({
                invertLookY: zz
              })
            }
          }), (0, cz.jsx)(WM, {
            settingKey: "lookDeadzone",
            label: zz("controller:settingsLookDeadzone"),
            range: yM.z,
            format: yM.C
          }), (0, cz.jsx)(zt, {}), (0, cz.jsx)(DM, {
            text: zz("controller:settingsMovement")
          }), (0, cz.jsx)(WM, {
            settingKey: "moveDeadzone",
            label: zz("controller:settingsMoveDeadzone"),
            range: yM.z,
            format: yM.C
          }), (0, cz.jsx)(cM.b, {
            label: zz("controller:settingsAutoSprint"),
            checked: uz.autoSprint,
            onClick: zz => {
              (0, dz.o)({
                autoSprint: zz
              })
            },
            circleInfoText: zz("controller:settingsAutoSprintInfo")
          }), (0, cz.jsx)(QM, {
            label: zz("controller:settingsSneak"),
            options: yM.ob,
            value: uz.sneakMode,
            onChange: zz => {
              (0, dz.o)({
                sneakMode: zz
              })
            }
          }), (0, cz.jsx)(DM, {
            text: zz("controller:settingsButtons")
          }), (0, cz.jsx)(QM, {
            label: zz("controller:settingsPromptFamily"),
            options: yM.db,
            value: uz.promptFamily,
            onChange: zz => {
              (0, dz.o)({
                promptFamily: zz
              })
            }
          }), (0, cz.jsx)(cM.b, {
            label: zz("controller:settingsHideButtonHints"),
            checked: uz.hideButtonHints,
            onClick: zz => {
              (0, dz.o)({
                hideButtonHints: zz
              })
            }
          }), (0, cz.jsx)(cM.b, {
            label: zz("controller:settingsVibration"),
            checked: uz.vibration,
            onClick: zz => {
              (0, dz.o)({
                vibration: zz
              }), zz && kn("preview")
            }
          }), (0, cz.jsx)(WM, {
            settingKey: "cursorSpeed",
            label: zz("controller:settingsCursorSpeed"),
            range: yM.w,
            format: yM.G
          }), (0, cz.jsx)(cM.b, {
            label: zz("controller:settingsCursorMagnetism"),
            checked: uz.cursorMagnetism,
            onClick: zz => {
              (0, dz.o)({
                cursorMagnetism: zz
              })
            }
          }), (0, cz.jsx)(cM.b, {
            label: zz("controller:settingsMenuBackToCategories"),
            checked: uz.menuBackToCategories,
            onClick: zz => {
              (0, dz.o)({
                menuBackToCategories: zz
              })
            }
          }), (0, cz.jsx)(tt, {
            layoutSetting: (0, cz.jsxs)(cz.Fragment, {
              children: [Oz.h.map((bz => (0, cz.jsx)(cM.b, {
                label: zz(yM.U[bz]),
                checked: (0, Oz.B)(bz, uz),
                onClick: zz => {
                  Ez(!(0, Oz.L)(bz, zz))
                }
              }, bz))), bz && (0, cz.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: zz("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, cz.jsx)(bt, {}), (0, cz.jsx)(DM, {
            text: zz("controller:settingsAlternatives")
          }), (0, cz.jsx)("div", {
            className: "ControllerSettingsHint",
            children: zz("controller:settingsAlternativesHint")
          }), (0, cz.jsx)(QM, {
            label: zz("controller:settingsMenuNavigation"),
            hint: zz("controller:settingsMenuNavigationHint"),
            options: yM.$,
            value: uz.menuNavigation,
            onChange: zz => {
              (0, dz.o)({
                menuNavigation: zz
              })
            }
          }), (0, cz.jsx)(QM, {
            label: zz("controller:settingsInventoryNavigation"),
            hint: zz("controller:settingsInventoryNavigationHint"),
            options: yM.R,
            value: uz.inventoryNavigation,
            onChange: zz => {
              (0, dz.o)({
                inventoryNavigation: zz
              })
            }
          }), (0, cz.jsx)(QM, {
            label: zz("controller:settingsQuickChat"),
            hint: zz("controller:settingsQuickChatHint"),
            options: yM.gb,
            value: uz.quickChat,
            onChange: zz => {
              (0, dz.o)({
                quickChat: zz
              })
            }
          }), (0, cz.jsx)(QM, {
            label: zz("controller:settingsLeaderboardButton"),
            hint: zz("controller:settingsLeaderboardButtonHint"),
            options: yM.W,
            value: uz.leaderboardButton,
            onChange: zz => {
              (0, dz.o)({
                leaderboardButton: zz
              })
            }
          }), (0, cz.jsx)(DM, {
            text: zz("controller:settingsTester")
          }), (0, cz.jsx)(dt, {})]
        })
      }));
    (0, nz.e)(Ez);
    for (const Xt of (0, iz.t)()) Xt.connected ? lz.g.handleConnectionEvent(Xt) : lz.g.handleDisconnectionEvent(Xt);
    const Zt = () => null !== lz.g.getActivePad(),
      Rt = () => Bb.getState(),
      Kt = () => Bb.isSteppingSlots(),
      wt = (zz, uz) => {
        const bz = en.getFocused();
        en.isActive() && bz && zz.contains(bz) && en.setFocus(uz, {
          scroll: !1
        })
      }
  },
  7842: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => tz,
      f: () => Hz
    });
    var Ez = bz(1397),
      nz = bz(1388);
    const iz = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      lz = "28de",
      Mz = new Set(["1205"]),
      tz = (zz, uz) => {
        const bz = (0, Ez.b)(zz);
        if ((null === bz || void 0 === bz ? void 0 : bz.vendor) === lz) return Mz.has(bz.product) ? "steamdeck" : "xbox";
        if (bz && iz[bz.vendor]) return iz[bz.vendor];
        if ((0, nz.b)(zz)) return "nintendo";
        const tz = `${zz} ${null!==uz&&void 0!==uz?uz:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(tz) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(tz) ? "nintendo" : /steam deck/.test(tz) ? "steamdeck" : "xbox"
      },
      Hz = zz => {
        var uz;
        return (null === (uz = (0, Ez.b)(zz)) || void 0 === uz ? void 0 : uz.vendor) === lz
      }
  },
  7879: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz,
      f: () => Mz
    });
    var Ez = bz(7837);
    const nz = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      iz = new Set(["capture", "gameplay"]),
      lz = ["Up", "Down", "Left", "Right"],
      Mz = zz => lz.includes(zz),
      tz = .25;
    const Hz = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.yM = new Array(Ez.cb).fill(!1), this.previousHeld = new Array(Ez.cb).fill(!1), this.consumedButtons = new Array(Ez.cb).fill(!1), this.suppressedReleases = new Array(Ez.cb).fill(!1), this.wakeOwned = new Array(Ez.cb).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Ez.B)()
      }
      register(zz) {
        return this.consumers.has(zz.name) && console.warn(`Controller consumer "${zz.name}" registered twice; the newer one replaces it.`), this.consumers.set(zz.name, zz), () => {
          var uz;
          this.consumers.get(zz.name) === zz && (this.activeName === zz.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (uz = this.peek) || void 0 === uz ? void 0 : uz.over) === zz.name && (this.peek = null), this.consumers.delete(zz.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(zz) {
        return this.yM[(0, Ez.q)(zz)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.yM = new Array(Ez.cb).fill(!1), this.previousHeld = new Array(Ez.cb).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Ez.B)()
      }
      dispatch(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = zz, this.previousHeld = this.yM, this.yM = (0, Ez.w)(zz.values, this.previousHeld);
        for (let iz = 0; iz < Ez.cb; iz++) this.suppressedReleases[iz] = !this.yM[iz] && this.consumedButtons[iz], this.yM[iz] || (this.consumedButtons[iz] = !1), this.wakeOwned[iz] && (this.yM[iz] ? (this.consumedButtons[iz] = !0, this.wakeOwned[iz] = !1) : zz.values[iz] < Ez.bb && (this.wakeOwned[iz] = !1));
        Math.hypot(zz.leftStick.x, zz.leftStick.y) < tz && (this.leftStickConsumed = !1), Math.hypot(zz.rightStick.x, zz.rightStick.y) < tz && (this.rightStickConsumed = !1);
        const nz = this.pickActive();
        if ((null === nz || void 0 === nz ? void 0 : nz.name) !== this.activeName) {
          var lz, Mz, Hz, Oz, pz, dz;
          const zz = this.activeName,
            uz = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            bz = null !== (lz = null === nz || void 0 === nz || null === (Mz = nz.peek) || void 0 === Mz ? void 0 : Mz.call(nz)) && void 0 !== lz ? lz : null,
            iz = null === zz && !!bz && !(null === (Hz = this.consumers.get(bz.over)) || void 0 === Hz || !Hz.onPeekFrame),
            tz = bz && (bz.over === zz || iz) ? bz : null,
            Fz = null !== this.peek && this.peek.over === (null === nz || void 0 === nz ? void 0 : nz.name) ? this.peek : null;
          this.deactivateCurrent(null !== tz, null !== Fz), this.activeName = null !== (Oz = null === nz || void 0 === nz ? void 0 : nz.name) && void 0 !== Oz ? Oz : null, null === zz || this.handOffPending || this.consumeAllHeld();
          const Zz = null === (pz = null !== tz && void 0 !== tz ? tz : Fz) || void 0 === pz ? void 0 : pz.stick;
          "left" === Zz && uz.left ? this.leftStickConsumed = !1 : "right" === Zz && uz.right && (this.rightStickConsumed = !1), this.peek = tz, nz || null === zz ? nz && (null === (dz = this.idleResume) || void 0 === dz ? void 0 : dz.name) === nz.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: zz,
            left: uz.left && this.leftStickConsumed,
            right: uz.right && this.rightStickConsumed
          }, nz && (this.idleResume = null);
          for (let nz = 0; nz < Ez.cb; nz++) this.previousHeld[nz] && !this.yM[nz] && (this.suppressedReleases[nz] = !0)
        }
        var Fz, Zz;
        (this.handOffPending = !1, nz) && (bz && !iz.has(nz.name) && this.consumeWakePress(nz), nz.onFrame(this.buildInput(zz, uz, bz)), this.peek && (null === (Fz = this.consumers.get(this.peek.over)) || void 0 === Fz || null === (Zz = Fz.onPeekFrame) || void 0 === Zz || Zz.call(Fz, this.buildInput(zz, uz, !1, this.peek.stick))))
      }
      consumeWakePress(zz) {
        for (let nz = 0; nz < Ez.cb; nz++) {
          var uz, bz;
          const iz = Ez.eb[nz];
          (null !== (uz = null === (bz = zz.wakePressActs) || void 0 === bz ? void 0 : bz.call(zz, iz)) && void 0 !== uz ? uz : lz.includes(iz)) || (this.yM[nz] ? this.consumedButtons[nz] = !0 : this.lastFrame.values[nz] >= Ez.ab && (this.wakeOwned[nz] = !0))
        }
      }
      pickActive() {
        for (const zz of nz) {
          const uz = this.consumers.get(zz);
          if (uz && uz.isActive()) return uz
        }
        return null
      }
      deactivateCurrent() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var bz, Ez, nz, iz;
        this.activeName && (null === (bz = this.consumers.get(this.activeName)) || void 0 === bz || null === (Ez = bz.onDeactivate) || void 0 === Ez || Ez.call(bz, zz));
        this.peek && !uz && (null === (nz = this.consumers.get(this.peek.over)) || void 0 === nz || null === (iz = nz.onDeactivate) || void 0 === iz || iz.call(nz, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let nz = 0; nz < Ez.cb; nz++) this.yM[nz] && (this.consumedButtons[nz] = !0);
        const {
          leftStick: uz,
          rightStick: bz
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== zz && (this.leftStickConsumed || Math.hypot(uz.x, uz.y) >= tz), this.rightStickConsumed = "right" !== zz && (this.rightStickConsumed || Math.hypot(bz.x, bz.y) >= tz)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(zz) {
        const uz = (0, Ez.q)(zz);
        this.yM[uz] && (this.consumedButtons[uz] = !0)
      }
      buildInput(zz, uz, bz, nz) {
        const iz = this.yM,
          lz = this.previousHeld,
          Mz = nz ? new Array(Ez.cb).fill(!0) : [...this.consumedButtons],
          tz = nz ? Mz : [...this.suppressedReleases],
          Hz = !this.leftStickConsumed && (!nz || "left" === nz),
          Oz = !this.rightStickConsumed && (!nz || "right" === nz);
        return {
          frame: zz,
          dtMs: uz,
          isHeld: zz => {
            const uz = (0, Ez.q)(zz);
            return iz[uz] && !Mz[uz]
          },
          wasPressed: zz => {
            const uz = (0, Ez.q)(zz);
            return iz[uz] && !lz[uz] && !Mz[uz]
          },
          wasReleased: zz => {
            const uz = (0, Ez.q)(zz);
            return !iz[uz] && lz[uz] && !tz[uz]
          },
          value: uz => {
            const bz = (0, Ez.q)(uz);
            return Mz[bz] ? 0 : zz.values[bz]
          },
          leftStick: Hz ? zz.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Oz ? zz.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: bz
        }
      }
    }
  },
  7863: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => pz.e,
      f: () => pz.g,
      g: () => Az,
      k: () => Tz,
      o: () => Lz,
      q: () => Pz
    });
    var Ez = bz(56),
      nz = bz(22),
      iz = bz(1417),
      lz = bz(33),
      Mz = bz(7867),
      tz = bz(7837),
      Hz = bz(7859),
      Oz = bz(7835),
      pz = bz(1949),
      dz = bz(7871);
    const Fz = {
        lookSensitivityX: 100,
        lookSensitivityY: 100,
        aimLookSensitivity: 100,
        invertLookX: !1,
        invertLookY: !1,
        lookCurve: "exponential",
        lookDeadzone: .12,
        moveDeadzone: .15,
        swapSticks: !1,
        autoSprint: !0,
        sneakMode: "toggle",
        tapHoldTime: "short",
        attackMode: "hold",
        promptFamily: "auto",
        hideButtonHints: !1,
        vibration: !0,
        cursorSpeed: 100,
        cursorMagnetism: !1,
        buttonRepeat: "default",
        largePointer: !1,
        menuBackToCategories: !0,
        swapConfirmBack: null,
        menuNavigation: "hybrid",
        inventoryNavigation: "hybrid",
        quickChat: "wheel",
        leaderboardButton: "shop",
        gyroAiming: !1,
        gyroSensitivity: 2,
        gyroActivation: "always",
        gyroButton: "RB",
        emoteButton: "tapHold",
        bindings: {}
      },
      Zz = "controllerSettings",
      Rz = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      Kz = ["auto", ...Mz.e],
      wz = (zz, uz) => "string" === typeof uz && zz.includes(uz),
      Xz = zz => uz => "number" === typeof uz && Number.isFinite(uz) ? (0, dz.u)(uz, zz) : void 0,
      fz = zz => "boolean" === typeof zz ? zz : void 0,
      sz = zz => uz => wz(zz, uz) ? uz : void 0,
      rz = {
        lookSensitivityX: Xz(dz.nb),
        lookSensitivityY: Xz(dz.nb),
        aimLookSensitivity: Xz(dz.i),
        invertLookX: fz,
        invertLookY: fz,
        lookCurve: sz(tz.Y),
        lookDeadzone: Xz(dz.z),
        moveDeadzone: Xz(dz.z),
        swapSticks: fz,
        autoSprint: fz,
        sneakMode: sz(["toggle", "hold"]),
        tapHoldTime: sz(["short", "medium", "long"]),
        attackMode: sz(["hold", "toggle"]),
        promptFamily: sz(Kz),
        hideButtonHints: fz,
        vibration: fz,
        cursorSpeed: Xz(dz.w),
        cursorMagnetism: fz,
        buttonRepeat: sz(tz.s),
        largePointer: fz,
        menuBackToCategories: fz,
        swapConfirmBack: fz,
        menuNavigation: sz(["hybrid", "focus", "cursor"]),
        inventoryNavigation: sz(["hybrid", "slot", "cursor"]),
        quickChat: sz(["wheel", "off"]),
        leaderboardButton: sz(["shop", "leaderboard"]),
        gyroAiming: fz,
        gyroSensitivity: Xz(dz.O),
        gyroActivation: sz(["always", "aiming", "button"]),
        gyroButton: sz(tz.eb),
        emoteButton: sz(["tapHold", "wheel"])
      },
      oz = [{
        param: "padMenuNav",
        key: "menuNavigation"
      }, {
        param: "padInventoryNav",
        key: "inventoryNavigation"
      }, {
        param: "padQuickChat",
        key: "quickChat"
      }, {
        param: "padSneak",
        key: "sneakMode"
      }, {
        param: "padGyro",
        key: "gyroActivation"
      }, {
        param: "padLeaderboardButton",
        key: "leaderboardButton"
      }],
      Nz = zz => {
        const uz = {};
        if ("object" !== typeof zz || null === zz) return uz;
        for (const [bz, Ez] of Object.entries(zz)) Object.prototype.hasOwnProperty.call(Hz.e, bz) && wz(tz.eb, Ez) && (uz[bz] = Ez);
        return uz
      },
      vz = zz => {
        const uz = {};
        for (const bz of Object.keys(Fz))("bindings" === bz ? Object.keys(zz.bindings).length > 0 : zz[bz] !== Fz[bz]) && (uz[bz] = zz[bz]);
        0 !== Object.keys(uz).length ? lz.g.setItem(Zz, uz) : lz.g.removeItem(Zz)
      };
    let xz = (() => {
        const zz = lz.g.getItem(Zz),
          uz = (zz => {
            const uz = "object" === typeof zz && null !== zz ? zz : {},
              bz = {
                ...Fz,
                bindings: Nz(uz.bindings)
              };
            for (const nz of Object.keys(rz)) {
              const zz = rz[nz](uz[nz]);
              void 0 !== zz && (bz[nz] = zz)
            }
            const Ez = Object.keys(uz).filter((zz => !!Object.prototype.hasOwnProperty.call(Fz, zz) && ("bindings" === zz ? "object" !== typeof uz.bindings || null === uz.bindings || Object.keys(uz.bindings).length !== Object.keys(bz.bindings).length : bz[zz] !== uz[zz])));
            return Ez.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Ez.join(", ")}`), bz
          })(zz);
        return null !== zz && void 0 !== zz && vz(uz), uz
      })(),
      Jz = {
        ...xz,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const zz = {},
            uz = new URLSearchParams(window.location.search);
          for (const {
              param: bz,
              key: Ez
            }
            of oz) {
            const nz = rz[Ez](uz.get(bz));
            void 0 !== nz && (zz[Ez] = nz)
          }
          return zz
        })()
      };
    const Az = () => Jz,
      Tz = () => {
        var zz, uz;
        const bz = Az().promptFamily;
        return "auto" !== bz ? bz : null !== (zz = null === (uz = Oz.g.getActivePad()) || void 0 === uz ? void 0 : uz.family) && void 0 !== zz ? zz : "xbox"
      },
      Lz = zz => {
        const uz = Jz;
        xz = {
          ...xz,
          ...zz
        }, vz(xz), Jz = {
          ...Jz,
          ...zz
        }, (zz => {
          nz.k.sK(pz.g, Jz), Rz.some((uz => zz[uz] !== Jz[uz])) && nz.k.sK(pz.e, Jz)
        })(uz)
      },
      Pz = () => {
        const [zz, uz] = (0, Ez.useState)(Jz);
        return (0, iz.g)(pz.g, uz), zz
      }
  },
  8318: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz
    });
    const Ez = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      nz = zz => Ez.has(zz)
  },
  7835: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Rz.c,
      g: () => fz
    });
    var Ez = bz(7837),
      nz = bz(7842);
    const iz = .1,
      lz = .3;
    class Mz {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(zz, uz) {
        const bz = null === this.lastMs ? 0 : Math.min(Math.max(0, uz - this.lastMs), 100);
        this.lastMs = uz;
        const Ez = Math.hypot(zz.x, zz.y);
        if (Ez >= lz) return this.anchor = null, void(this.returning = !0);
        Ez >= iz || (this.returning = !1);
        const nz = this.anchor;
        if (!nz || Math.hypot(zz.x - nz.x, zz.y - nz.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: zz.x,
          y: zz.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += bz, this.steadyMs < 1e3) return;
        const Mz = Math.max(Ez, Math.hypot(nz.x, nz.y));
        Mz < iz ? this.deadzone = 0 : this.returning && (this.deadzone = Mz + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(zz) {
        return Math.hypot(zz.x, zz.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : zz
      }
    }
    const tz = (zz, uz) => {
        var bz, Ez;
        return null !== (bz = zz && (null === (Ez = Object.getOwnPropertyDescriptor(zz, uz)) || void 0 === Ez ? void 0 : Ez.get)) && void 0 !== bz ? bz : null
      },
      Hz = zz => {
        const uz = zz.vendorName;
        return "string" === typeof uz ? uz : void 0
      },
      Oz = ((zz, uz) => {
        const bz = tz(zz, "index"),
          Ez = tz(zz, "id"),
          nz = tz(zz, "connected"),
          iz = tz(zz, "mapping"),
          lz = tz(zz, "buttons"),
          Mz = tz(zz, "axes"),
          Oz = tz(uz, "pressed"),
          pz = tz(uz, "value");
        return bz && Ez && nz && iz && lz && Mz && Oz && pz ? zz => {
          const uz = lz.call(zz),
            tz = Mz.call(zz),
            dz = {
              index: Number(bz.call(zz)),
              id: String(Ez.call(zz)),
              connected: !0 === nz.call(zz),
              mapping: String(iz.call(zz)),
              buttons: [],
              axes: [],
              vendorName: Hz(zz)
            };
          for (let bz = 0; bz < uz.length; bz++) dz.buttons.push({
            pressed: !0 === Oz.call(uz[bz]),
            value: Number(pz.call(uz[bz]))
          });
          for (let bz = 0; bz < tz.length; bz++) dz.axes.push(Number(tz[bz]));
          return dz
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      pz = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var dz = bz(1381),
      Fz = bz(1388);
    const Zz = zz => ({
      pressed: zz,
      value: zz ? 1 : 0
    });
    var Rz = bz(1949);
    const Kz = lz,
      wz = zz => {
        const uz = new Array(Ez.cb).fill(0);
        for (let bz = 0; bz < Ez.cb && bz < zz.buttons.length; bz++) {
          const nz = zz.buttons[bz];
          uz[bz] = nz.pressed && !(0, Ez.V)(bz) ? Math.max(nz.value, Ez.E) : nz.value
        }
        return uz
      },
      Xz = (zz, uz) => {
        var bz, Ez;
        return {
          x: null !== (bz = zz.axes[uz]) && void 0 !== bz ? bz : 0,
          y: null !== (Ez = zz.axes[uz + 1]) && void 0 !== Ez ? Ez : 0
        }
      };
    const fz = new class {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Oz;
        this.readGamepads = zz, this.requireTrustedPads = uz, this.nativeReader = bz, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = zz => {
          zz.isTrusted && this.trustedIndices.add(zz.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = zz => {
          this.trustedIndices.delete(zz.gamepad.index)
        }, this.sd = zz => {
          if (this.rafId = 0, !this.running) return;
          const uz = 0 === this.lastTimestampMs ? 16 : Math.min(100, zz - this.lastTimestampMs);
          this.lastTimestampMs = zz;
          try {
            this.poll(zz, uz)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.sd))
          }
        }
      }
      start() {
        this.running || "undefined" === typeof navigator || "function" !== typeof navigator.getGamepads || (this.running = !0, this.listenForConnections(), this.wake())
      }
      stop() {
        this.running = !1, cancelAnimationFrame(this.rafId), this.rafId = 0, this.listening = !1, window.removeEventListener("gamepadconnected", this.handleConnectionEvent), window.removeEventListener("gamepaddisconnected", this.handleDisconnectionEvent)
      }
      listenForConnections() {
        this.listening || "undefined" === typeof window || (this.listening = !0, window.addEventListener("gamepadconnected", this.handleConnectionEvent), window.addEventListener("gamepaddisconnected", this.handleDisconnectionEvent))
      }
      onFrame(zz) {
        return this.frameListeners.add(zz), () => {
          this.frameListeners.delete(zz)
        }
      }
      onActivePadChanged(zz) {
        return this.connectionListeners.add(zz), () => {
          this.connectionListeners.delete(zz)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(zz) {
        return this.connectedListeners.add(zz), () => {
          this.connectedListeners.delete(zz)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const zz = this.readPads()[this.activeInfo.index],
          uz = zz ? this.readPad(zz) : null;
        return uz && uz.id === this.activeInfo.id ? zz : null
      }
      poll(zz, uz) {
        var bz, nz;
        const iz = this.readPads();
        let lz = null,
          tz = !1;
        const Hz = [],
          Oz = Math.max(iz.length, this.slots.length);
        for (let fz = 0; fz < Oz; fz++) {
          var pz;
          const uz = fz < iz.length ? iz[fz] : null,
            bz = uz ? this.readPad(uz) : null;
          if (!bz || !bz.connected || !this.isUsable(bz)) {
            this.slots[fz] = null;
            continue
          }
          let nz = this.slots[fz];
          nz && nz.id === bz.id || (nz = {
            id: bz.id,
            yM: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new Mz,
            rightRest: new Mz
          }, this.slots[fz] = nz);
          const Oz = Xz(bz, 0),
            dz = Xz(bz, 2);
          !nz.leftSettled && Math.hypot(Oz.x, Oz.y) < Kz && (nz.leftSettled = !0), !nz.rightSettled && Math.hypot(dz.x, dz.y) < Kz && (nz.rightSettled = !0), nz.leftRest.observe(Oz, zz), nz.rightRest.observe(dz, zz);
          const Fz = wz(bz),
            Zz = (0, Ez.w)(Fz, nz.yM),
            Rz = nz.yM,
            sz = Zz.map(((zz, uz) => zz && !Rz[uz]));
          nz.yM = Zz;
          const rz = {
            pad: bz,
            slot: nz,
            values: Fz
          };
          fz === (null === (pz = this.activeInfo) || void 0 === pz ? void 0 : pz.index) && bz.id === this.activeInfo.id ? (lz = rz, tz = sz.includes(!0)) : sz.includes(!0) && Hz.push({
            polled: rz,
            rose: sz
          })
        }
        const dz = this.slots.some((zz => null !== zz));
        if (dz !== this.anyPadConnected) {
          this.anyPadConnected = dz;
          for (const zz of this.connectedListeners) zz()
        }
        const Fz = null !== (bz = null === (nz = lz) || void 0 === nz ? void 0 : nz.slot.yM) && void 0 !== bz ? bz : [],
          Zz = tz ? void 0 : Hz.find((zz => {
            let {
              rose: uz
            } = zz;
            return uz.some(((zz, uz) => zz && !Fz[uz]))
          }));
        if (Zz ? (lz = Zz.polled, this.setActive(Zz.polled.pad)) : this.activeInfo && !lz && this.setActive(null), !lz || !this.activeInfo) return;
        const Rz = ((zz, uz) => {
          let {
            pad: bz,
            slot: nz,
            values: iz
          } = zz;
          const lz = (0, Ez.B)(uz);
          return lz.values = iz, nz.leftSettled && (lz.leftStick = nz.leftRest.apply(Xz(bz, 0))), nz.rightSettled && (lz.rightStick = nz.rightRest.apply(Xz(bz, 2))), lz
        })(lz, zz);
        for (const Ez of this.frameListeners) Ez(Rz, uz, this.activeInfo)
      }
      readPad(zz) {
        const uz = this.readSnapshot(zz);
        return uz && (0, Fz.c)(uz) ? (zz => {
          const uz = uz => {
              var bz;
              return null !== (bz = zz.buttons[uz]) && void 0 !== bz ? bz : Zz(!1)
            },
            bz = uz => {
              var bz;
              return null !== (bz = zz.axes[uz]) && void 0 !== bz ? bz : 0
            },
            Ez = zz.axes.length > 9,
            nz = Ez ? (zz => {
              const uz = 0 !== zz;
              return {
                up: uz && (zz >= -1 && zz < -.7 || zz >= .95 && zz <= 1),
                right: uz && zz >= -.75 && zz < -.1,
                down: uz && zz >= -.2 && zz < .45,
                left: uz && zz >= .4 && zz <= 1
              }
            })(bz(9)) : {
              up: bz(5) < -.5,
              down: bz(5) > .5,
              left: bz(4) < -.5,
              right: bz(4) > .5
            };
          return {
            ...zz,
            mapping: "standard",
            buttons: [uz(1), uz(2), uz(0), uz(3), uz(4), uz(5), uz(6), uz(7), uz(8), uz(9), uz(10), uz(11), Zz(nz.up), Zz(nz.down), Zz(nz.left), Zz(nz.right), uz(12)],
            axes: [bz(0), bz(1), bz(2), bz(Ez ? 5 : 3)]
          }
        })(uz) : uz
      }
      readSnapshot(zz) {
        if (this.nativeReader) try {
          return this.nativeReader(zz)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (zz => {
          const uz = zz;
          return {
            index: uz.index,
            id: uz.id,
            connected: uz.connected,
            mapping: uz.mapping,
            buttons: Array.from(uz.buttons, (zz => ({
              pressed: zz.pressed,
              value: zz.value
            }))),
            axes: Array.from(uz.axes),
            vendorName: Hz(zz)
          }
        })(zz)
      }
      isUsable(zz) {
        return !(0, dz.f)(zz.id) && ("standard" !== zz.mapping ? (this.warnedNonStandardIds.has(zz.id) || (this.warnedNonStandardIds.add(zz.id), console.warn(`Controller "${zz.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(zz.index))
      }
      setActive(zz) {
        this.activeInfo = zz ? {
          index: zz.index,
          id: zz.id,
          family: (0, nz.b)(zz.id, zz.vendorName)
        } : null;
        for (const uz of this.connectionListeners) uz(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (zz) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", zz)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.sd))
      }
    }((() => pz ? pz.call(navigator) : []), !0);
    fz.listenForConnections()
  },
  8328: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    const Ez = {
      short: {
        wheelMs: 250,
        dropStackMs: 800
      },
      medium: {
        wheelMs: 500,
        dropStackMs: 1e3
      },
      long: {
        wheelMs: 800,
        dropStackMs: 1300
      }
    }
  },
  8415: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      d: () => Mz
    });
    var Ez = bz(22),
      nz = bz(8407);
    let iz = !1;
    const lz = () => iz,
      Mz = zz => {
        zz !== iz && (iz = zz, Ez.k.sK(nz.j, iz))
      }
  },
  8412: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      h: () => tz
    });
    var Ez = bz(22),
      nz = bz(8407);
    let iz = null,
      lz = 0;
    const Mz = () => iz,
      tz = zz => {
        null === zz && null === iz || (iz = null === zz ? null : {
          id: ++lz,
          holdMs: zz
        }, Ez.k.sK(nz.m, iz))
      }
  },
  8421: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      h: () => Mz
    });
    var Ez = bz(22),
      nz = bz(8407);
    let iz = !1;
    const lz = () => iz,
      Mz = zz => {
        zz !== iz && (iz = zz, Ez.k.sK(nz.q, iz))
      }
  },
  8507: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      e: () => Mz
    });
    var Ez = bz(22),
      nz = bz(8407);
    let iz = !1;
    const lz = () => iz,
      Mz = zz => {
        zz !== iz && (iz = zz, Ez.k.sK(nz.u, iz))
      }
  },
  8364: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      constructor() {
        this.downAtMs = null
      }
      update(zz, uz, bz, Ez) {
        if (zz) return this.downAtMs = bz, null;
        if (null === this.downAtMs) return null;
        const nz = bz - this.downAtMs >= Ez;
        return uz ? nz ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, nz ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7903: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => pz,
      c: () => dz,
      e: () => Mz,
      i: () => fz,
      k: () => Xz
    });
    var Ez = bz(33),
      nz = bz(7867),
      iz = bz(7837);
    const lz = (() => {
        try {
          return bz(7911)
        } catch {
          return null
        }
      })(),
      Mz = [...iz.eb, "LeftStick", "RightStick"],
      tz = new Map,
      Hz = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Oz = (new Set(Object.values(Hz)), {
        xbox: {
          LB: 1.5,
          RB: 1.5
        },
        steamdeck: {
          Home: 2,
          Menu: 2,
          View: 2
        }
      }),
      pz = (zz, uz) => {
        var bz, Ez;
        return null !== (bz = null === (Ez = Oz[Hz[zz]]) || void 0 === Ez ? void 0 : Ez[uz]) && void 0 !== bz ? bz : 1
      },
      dz = (zz, uz) => {
        const bz = `./${Hz[zz]}/${uz}.svg`;
        let Ez = tz.get(bz);
        return void 0 === Ez && (Ez = lz ? lz(bz) : "", tz.set(bz, Ez)), Ez
      },
      Fz = new Set,
      Zz = [],
      Rz = zz => {
        if (!Fz.has(zz)) {
          Fz.add(zz);
          for (const uz of Mz) {
            const bz = dz(zz, uz);
            if (bz) {
              const zz = new Image;
              zz.crossOrigin = "anonymous", zz.src = bz, Zz.push(zz)
            }
          }
        }
      },
      Kz = "controllerGlyphFamily";
    let wz = null;
    const Xz = zz => {
        zz !== wz && (wz = zz, Ez.g.setItem(Kz, zz), Rz(zz))
      },
      fz = () => {
        const zz = Ez.g.getItem(Kz);
        (0, nz.f)(zz) && zz !== wz && (wz = zz, Rz(zz))
      }
  },
  8530: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Uz,
      g: () => cz
    });
    var Ez = bz(56),
      nz = bz(22),
      iz = bz(1417),
      lz = bz(7851),
      Mz = bz(7835),
      tz = bz(7879),
      Hz = bz(7863);
    const Oz = {
        x: 0,
        y: 0,
        z: 0
      },
      pz = Math.PI / 180,
      dz = zz => Math.hypot(zz.x, zz.y, zz.z),
      Fz = (zz, uz) => ({
        x: zz.x * uz,
        y: zz.y * uz,
        z: zz.z * uz
      }),
      Zz = (zz, uz) => ({
        x: zz.x + uz.x,
        y: zz.y + uz.y,
        z: zz.z + uz.z
      }),
      Rz = (zz, uz) => ({
        x: zz.x - uz.x,
        y: zz.y - uz.y,
        z: zz.z - uz.z
      }),
      Kz = zz => {
        const uz = dz(zz);
        return 0 === uz ? Oz : Fz(zz, 1 / uz)
      },
      wz = zz => ({
        min: {
          ...zz
        },
        max: {
          ...zz
        }
      }),
      Xz = (zz, uz) => ({
        min: {
          x: Math.min(zz.min.x, uz.x),
          y: Math.min(zz.min.y, uz.y),
          z: Math.min(zz.min.z, uz.z)
        },
        max: {
          x: Math.max(zz.max.x, uz.x),
          y: Math.max(zz.max.y, uz.y),
          z: Math.max(zz.max.z, uz.z)
        }
      }),
      fz = (zz, uz) => zz.max.x - zz.min.x <= uz && zz.max.y - zz.min.y <= uz && zz.max.z - zz.min.z <= uz;
    class sz {
      constructor() {
        this.bias = Oz, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Oz, this.windowSec = 0
      }
      update(zz) {
        const uz = this.gyroRange ? Xz(this.gyroRange, zz.gyro) : wz(zz.gyro),
          bz = zz.accel ? this.accelRange ? Xz(this.accelRange, zz.accel) : wz(zz.accel) : null;
        if (!fz(uz, 1) || bz && !fz(bz, .01)) return void this.restartWindow(zz);
        if (this.gyroRange = uz, this.accelRange = bz, this.sum = Zz(this.sum, Fz(zz.gyro, zz.dtSec)), this.windowSec += zz.dtSec, this.windowSec < 1) return;
        const Ez = Fz(this.sum, 1 / this.windowSec);
        if (dz(Ez) > 5) return;
        const nz = Rz(Ez, this.bias);
        let iz = 0;
        !this.calibrated || this.windowSec >= 3 ? iz = 1 : dz(nz) <= 1 && (iz = Math.min(1, zz.dtSec / 1)), this.bias = Zz(this.bias, Fz(nz, iz)), this.calibrated = this.calibrated || iz > 0
      }
      correct(zz) {
        return Rz(zz, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Oz, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Oz, this.windowSec = 0
      }
      restartWindow(zz) {
        this.gyroRange = wz(zz.gyro), this.accelRange = zz.accel ? wz(zz.accel) : null, this.sum = Oz, this.windowSec = 0
      }
    }
    class rz {
      constructor() {
        this.down = null
      }
      update(zz, uz, bz) {
        const Ez = Kz(Fz(uz, -1));
        if (!this.down) return this.down = Ez, Ez;
        const nz = Fz(zz, pz * bz),
          iz = this.down,
          lz = {
            x: iz.x - (nz.y * iz.z - nz.z * iz.y),
            y: iz.y - (nz.z * iz.x - nz.x * iz.z),
            z: iz.z - (nz.x * iz.y - nz.y * iz.x)
          },
          Mz = 0 === dz(Ez) ? 0 : Math.min(1, bz / .25);
        var tz, Hz;
        return this.down = Kz((Hz = Mz, Zz(tz = lz, Fz(Rz(Ez, tz), Hz)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class oz {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(zz, uz, bz) {
        const Ez = Math.hypot(zz, uz),
          nz = Math.max(0, Math.min(1, (Ez - 2) / 2)),
          iz = {
            yaw: zz * (1 - nz),
            pitch: uz * (1 - nz),
            dtSec: bz
          };
        for (this.entries.push(iz), this.windowSec += bz; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let lz = 0,
          Mz = 0;
        for (const Hz of this.entries) lz += Hz.yaw * Hz.dtSec, Mz += Hz.pitch * Hz.dtSec;
        const tz = this.windowSec > 0 ? {
          yaw: lz / this.windowSec,
          pitch: Mz / this.windowSec
        } : {
          yaw: iz.yaw,
          pitch: iz.pitch
        };
        return {
          yaw: zz * nz + tz.yaw,
          pitch: uz * nz + tz.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Nz {
      constructor() {
        this.calibrator = new sz, this.gravity = new rz, this.smoother = new oz
      }
      process(zz, uz, bz) {
        const Ez = Math.max(0, Math.min(.05, uz));
        this.calibrator.update({
          ...zz,
          dtSec: Ez
        });
        const nz = this.calibrator.correct(zz.gyro);
        let iz = nz.y;
        "player" === bz && zz.accel && (iz = ((zz, uz) => {
          const bz = zz.y * uz.y + zz.z * uz.z;
          return -Math.sign(bz) * Math.min(1.41 * Math.abs(bz), Math.hypot(zz.y, zz.z))
        })(nz, this.gravity.update(nz, zz.accel, Ez)));
        const lz = this.smoother.apply(iz, nz.x, Ez),
          Mz = ((zz, uz) => {
            const bz = Math.hypot(zz, uz);
            if (bz >= 1) return {
              yaw: zz,
              pitch: uz
            };
            const Ez = bz / 1;
            return {
              yaw: zz * Ez,
              pitch: uz * Ez
            }
          })(lz.yaw, lz.pitch);
        return {
          yawDeg: Mz.yaw * Ez,
          pitchDeg: Mz.pitch * Ez
        }
      }
      getCalibration() {
        return {
          calibrated: this.calibrator.isCalibrated(),
          bias: this.calibrator.getBias()
        }
      }
      reset() {
        this.calibrator.reset(), this.gravity.reset(), this.smoother.reset()
      }
    }
    const vz = (zz, uz) => {
      var bz, Ez, nz;
      const iz = uz * pz,
        lz = null !== (bz = zz.beta) && void 0 !== bz ? bz : 0,
        Mz = null !== (Ez = zz.gamma) && void 0 !== Ez ? Ez : 0;
      return {
        x: lz * Math.cos(iz) - Mz * Math.sin(iz),
        y: lz * Math.sin(iz) + Mz * Math.cos(iz),
        z: null !== (nz = zz.alpha) && void 0 !== nz ? nz : 0
      }
    };
    var xz = bz(8534);
    class Jz {
      constructor(zz, uz, bz) {
        this.hid = zz, this.sink = uz, this.onControllersChanged = bz, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = zz => {
          this.openController(zz.device).catch((zz => {
            console.warn("Could not open motion controller", zz)
          }))
        }, this.onDisconnect = zz => {
          this.opening.has(zz.device) && this.disconnectedWhileOpening.add(zz.device);
          const uz = this.controllers.get(zz.device);
          uz && (this.forget(uz), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const zz = await this.hid.getDevices();
        for (const uz of zz) await this.openController(uz).catch((zz => {
          console.warn("Could not open motion controller", zz)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const zz of [...this.controllers.values()]) this.forget(zz);
        this.onControllersChanged()
      }
      async request() {
        const zz = await this.hid.requestDevice({
          filters: xz.m
        });
        let uz = 0;
        for (const bz of zz) await this.openController(bz).catch((zz => {
          console.warn("Could not open motion controller", zz), uz++
        }));
        return uz
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((zz => null !== (0, xz.g)(zz.vendorId, zz.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((zz => zz.kind))
      }
      forget(zz) {
        zz.device.removeEventListener("inputreport", zz.onReport), this.controllers.get(zz.device) === zz && this.controllers.delete(zz.device)
      }
      async openController(zz) {
        const uz = (0, xz.g)(zz.vendorId, zz.productId);
        if (!uz || !this.running || this.controllers.has(zz) || this.opening.has(zz)) return;
        this.opening.add(zz);
        let bz = !1;
        try {
          zz.opened || await zz.open()
        } finally {
          this.opening.delete(zz), bz = this.disconnectedWhileOpening.delete(zz)
        }
        if (bz) return void zz.close().catch((zz => {
          console.debug("Could not close an unplugged motion controller", zz)
        }));
        if (!this.running) return;
        const Ez = {
          device: zz,
          kind: uz,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: zz => {
            this.onReport(Ez, zz)
          }
        };
        this.controllers.set(zz, Ez), zz.addEventListener("inputreport", Ez.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Ez)
        } catch (nz) {
          console.warn(`Could not turn on motion for ${uz}`, nz), this.controllers.get(zz) === Ez && (this.forget(Ez), this.onControllersChanged())
        }
      }
      async enableMotion(zz) {
        let {
          device: uz,
          kind: bz
        } = zz;
        if ((0, xz.j)(bz))
          for (const Ez of xz.y[bz]) await uz.receiveFeatureReport(Ez).catch((zz => {
            console.debug(`Motion controller feature report ${Ez} unavailable`, zz)
          }));
        else
          for (let Ez = 0; Ez < 2; Ez++)
            for (const {
                subcommand: zz,
                args: bz
              }
              of xz.C) await uz.sendReport(xz.G, (0, xz.d)(this.switchPacketCounter++, zz, bz)), await new Promise((zz => {
              setTimeout(zz, 60)
            }))
      }
      onReport(zz, uz) {
        const bz = (0, xz.v)(zz.kind, uz.reportId, uz.data, zz.device.productId);
        if (!bz) return;
        const Ez = null === zz.lastEventMs ? 0 : (uz.timeStamp - zz.lastEventMs) / 1e3;
        zz.lastEventMs = uz.timeStamp;
        let nz = bz.dtSec;
        if (null !== nz && Ez > 0 && (nz = Math.max(.001, Math.min(.017, Ez / bz.readings.length))), null === nz && null !== bz.sensorClock && (0, xz.j)(zz.kind)) {
          const uz = (0, xz.x)(zz.kind, zz.lastClock, bz.sensorClock);
          zz.lastClock = bz.sensorClock, nz = 0 === uz ? null : uz
        }
        if (zz.lastReadingMs = uz.timeStamp, this.isPreferred(zz, uz.timeStamp))
          for (const lz of bz.readings) {
            var iz;
            this.sink(lz, null !== (iz = nz) && void 0 !== iz ? iz : Ez, `hid${zz.openedOrder}`)
          }
      }
      isPreferred(zz, uz) {
        const bz = zz => 1e6 * xz.s[zz.kind] + zz.openedOrder;
        for (const Ez of this.controllers.values())
          if (Ez !== zz && uz - Ez.lastReadingMs < 500 && bz(Ez) < bz(zz)) return !1;
        return !0
      }
    }
    var Az = bz(96);
    const Tz = () => DeviceMotionEvent,
      Lz = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Az.isMobile)(),
      Pz = () => {
        var zz;
        const uz = null === (zz = window.screen.orientation) || void 0 === zz ? void 0 : zz.angle;
        return "number" === typeof uz ? uz : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Gz {
      constructor(zz, uz) {
        this.sink = zz, this.onStateChanged = uz, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((zz => {
            console.warn("Could not enable the motion sensor", zz)
          }))
        }, this.onMotion = zz => {
          const uz = zz.rotationRate;
          if (!uz || null === uz.alpha && null === uz.beta && null === uz.gamma) return;
          const bz = null === this.lastEventMs ? 0 : (zz.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = zz.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: vz(uz, Pz()),
            accel: null
          }, bz, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Tz().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const zz = Tz().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof zz) return void this.listen();
        let uz;
        this.disarmGestureRequest();
        try {
          uz = await zz.call(DeviceMotionEvent)
        } catch (bz) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), bz
        }
        this.wanted && ("granted" === uz ? (this.granted = !0, this.listen()) : this.setState("denied"))
      }
      stop() {
        this.wanted = !1, this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), this.clearNoSensorTimer(), this.lastEventMs = null, this.setState("off")
      }
      armGestureRequest() {
        window.addEventListener("touchend", this.onGesture), window.addEventListener("click", this.onGesture)
      }
      disarmGestureRequest() {
        window.removeEventListener("touchend", this.onGesture), window.removeEventListener("click", this.onGesture)
      }
      listen() {
        this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), window.addEventListener("devicemotion", this.onMotion), this.setState("waiting"), this.clearNoSensorTimer(), this.noSensorTimer = setTimeout((() => {
          this.noSensorTimer = null, "waiting" === this.state && this.setState("noSensor")
        }), 3e3)
      }
      clearNoSensorTimer() {
        null !== this.noSensorTimer && (clearTimeout(this.noSensorTimer), this.noSensorTimer = null)
      }
      setState(zz) {
        this.state !== zz && (this.state = zz, this.onStateChanged())
      }
    }
    const az = "controllerGyroStatusChanged",
      Vz = {
        QJ: 0,
        eJ: 0
      },
      mz = zz => {
        var uz, bz;
        return "undefined" === typeof document || (null === (uz = null === (bz = document.featurePolicy) || void 0 === bz ? void 0 : bz.allowsFeature(zz)) || void 0 === uz || uz)
      };
    class qz {
      constructor() {
        this.processor = new Nz, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = zz => {
          const uz = zz.gyroAiming && Mz.g.hasConnectedPad();
          var bz, Ez;
          uz !== this.phoneRunning && (this.phoneRunning = uz, uz ? null === (bz = this.phone) || void 0 === bz || bz.start() : null === (Ez = this.phone) || void 0 === Ez || Ez.stop());
          if (zz.gyroAiming !== this.running) {
            var nz, iz;
            if (this.running = zz.gyroAiming, this.running) null === (nz = this.hid) || void 0 === nz || nz.start().catch((zz => {
              console.warn("Could not open motion controllers", zz)
            }));
            else null === (iz = this.hid) || void 0 === iz || iz.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          nz.k.sK(az, this.getStatus())
        };
        const zz = (() => {
            var zz;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (zz = navigator.hid) && void 0 !== zz ? zz : null
          })(),
          uz = mz("hid");
        this.hidBlocked = null !== zz && !uz, this.hid = zz && uz ? new Jz(zz, ((zz, uz, bz) => {
          this.lastHidReadingMs = performance.now(), this.feed(zz, uz, "player", bz)
        }), this.publishStatus) : null;
        const bz = mz("accelerometer") && mz("gyroscope");
        this.phoneBlocked = Lz() && !bz, this.phone = Lz() && bz ? new Gz(((zz, uz, bz) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(zz, uz, "local", bz)
        }), this.publishStatus) : null, nz.k.subscribe(Hz.f, this.syncWithSettings), Mz.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Hz.g)()), this.publishStatus()
        })), this.syncWithSettings((0, Hz.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var zz, uz, bz, Ez;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (zz = null === (uz = this.hid) || void 0 === uz ? void 0 : uz.getConnectedKinds()) && void 0 !== zz ? zz : [],
          phoneMotion: null !== (bz = null === (Ez = this.phone) || void 0 === Ez ? void 0 : Ez.getState()) && void 0 !== bz ? bz : "off",
          padConnected: Mz.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var zz;
        await (null === (zz = this.phone) || void 0 === zz ? void 0 : zz.requestPermission())
      }
      drainLookDelta() {
        const zz = performance.now();
        zz - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = zz;
        const uz = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const bz = (0, Hz.g)();
        return bz.gyroAiming && (zz => {
          let {
            activation: uz,
            isHeld: bz,
            useButton: Ez,
            gyroButton: nz
          } = zz;
          return "always" === uz || bz("aiming" === uz ? Ez : nz)
        })({
          activation: bz.gyroActivation,
          isHeld: zz => tz.b.isButtonHeld(zz),
          useButton: (0, lz.i)("use"),
          gyroButton: bz.gyroButton
        }) ? ((zz, uz) => ({
          QJ: -zz.yawDeg * uz * pz,
          eJ: -zz.pitchDeg * uz * pz
        }))(uz, bz.gyroSensitivity) : Vz
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(zz, uz) {
        this.feed(zz, uz, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(zz, uz, bz, Ez) {
        this.source !== Ez && (this.processor.reset(), this.source = Ez);
        const nz = this.processor.process(zz, uz, bz);
        this.pendingYawDeg += nz.yawDeg, this.pendingPitchDeg += nz.pitchDeg
      }
    }
    let hz = null;
    const Uz = () => (hz || (hz = new qz), hz),
      cz = () => {
        const [zz, uz] = (0, Ez.useState)((() => Uz().getStatus()));
        return (0, iz.g)(az, uz), (0, Ez.useEffect)((() => {
          uz(Uz().getStatus())
        }), []), zz
      }
  },
  8534: (zz, uz, bz) => {
    bz.d(uz, {
      C: () => oz,
      G: () => fz,
      d: () => rz,
      g: () => tz,
      j: () => Ez,
      m: () => Mz,
      p: () => Hz,
      s: () => Oz,
      v: () => Xz,
      x: () => Kz,
      y: () => Nz
    });
    const Ez = zz => "dualShock4" === zz || "dualSense" === zz,
      nz = 1356,
      iz = 1406,
      lz = [{
        vendorId: nz,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: nz,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: nz,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: nz,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: nz,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: iz,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: iz,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: iz,
        productId: 8199,
        kind: "joyConRight"
      }],
      Mz = lz.map((zz => {
        let {
          vendorId: uz,
          productId: bz
        } = zz;
        return {
          vendorId: uz,
          productId: bz
        }
      })),
      tz = (zz, uz) => {
        var bz, Ez;
        return null !== (bz = null === (Ez = lz.find((bz => bz.vendorId === zz && bz.productId === uz))) || void 0 === Ez ? void 0 : Ez.kind) && void 0 !== bz ? bz : null
      },
      Hz = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Oz = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      pz = 2e3 / 32767,
      dz = 1 / 8192,
      Fz = 936 / 13371,
      Zz = (zz, uz, bz) => ({
        x: zz.getInt16(uz, !0) * bz,
        y: zz.getInt16(uz + 2, !0) * bz,
        z: zz.getInt16(uz + 4, !0) * bz
      }),
      Rz = zz => 0 === zz.x && 0 === zz.y && 0 === zz.z,
      Kz = (zz, uz, bz) => null === uz ? null : "dualShock4" === zz ? 16 * (bz - uz & 65535) / 3 / 1e6 : (bz - uz >>> 0) / 3 / 1e6,
      wz = (zz, uz) => "joyConRight" === uz ? {
        x: zz.y,
        y: -zz.z,
        z: -zz.x
      } : {
        x: -zz.y,
        y: zz.z,
        z: -zz.x
      },
      Xz = (zz, uz, bz, nz) => Ez(zz) ? ((zz, uz, bz, Ez) => {
        const nz = ((zz, uz, bz) => "dualShock4" === zz ? 1 === uz && bz >= 63 ? 0 : 17 === uz && bz >= 65 ? 2 : null : 1 === uz && bz >= 62 ? 0 : 49 === uz && bz >= 63 ? 1 : null)(zz, uz, bz.byteLength);
        if (null === nz) return null;
        if (2976 === Ez && 1 === uz && 0 !== (4 & bz.getUint8(30))) return null;
        const iz = nz + ("dualShock4" === zz ? 12 : 15),
          lz = Zz(bz, iz, pz),
          Mz = Zz(bz, iz + 6, dz);
        return Rz(lz) && Rz(Mz) ? null : {
          readings: [{
            gyro: lz,
            accel: Mz
          }],
          dtSec: null,
          sensorClock: "dualShock4" === zz ? bz.getUint16(nz + 9, !0) : bz.getUint32(nz + 27, !0)
        }
      })(zz, uz, bz, nz) : ((zz, uz, bz) => {
        if (48 !== uz && 49 !== uz || bz.byteLength < 48) return null;
        const Ez = [];
        for (let nz = 0; nz < 3; nz++) {
          const uz = Zz(bz, 12 + 12 * nz, 244e-6),
            iz = Zz(bz, 18 + 12 * nz, Fz);
          if (Rz(iz) && Rz(uz)) return null;
          Ez.push({
            gyro: wz(iz, zz),
            accel: wz(uz, zz)
          })
        }
        return {
          readings: Ez,
          dtSec: .005,
          sensorClock: null
        }
      })(zz, uz, bz),
      fz = 1,
      sz = [0, 1, 64, 64, 0, 1, 64, 64],
      rz = (zz, uz, bz) => new Uint8Array([15 & zz, ...sz, uz, ...bz]),
      oz = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Nz = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7888: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Tz,
      e: () => qz,
      f: () => wz,
      h: () => Fz.f,
      j: () => Gz,
      m: () => Pz,
      q: () => Xz,
      u: () => az,
      v: () => Fz.l,
      z: () => Fz.p,
      C: () => hz,
      E: () => Fz.q,
      H: () => vz
    });
    var Ez = bz(56),
      nz = bz(20),
      iz = bz(22),
      lz = bz(1417),
      Mz = bz(1269),
      tz = bz(7863),
      Hz = bz(7895),
      Oz = bz(7842),
      pz = bz(7835),
      dz = bz(7903),
      Fz = bz(1362),
      Zz = bz(7837),
      Rz = bz(8318),
      Kz = bz(4157);
    const wz = zz => !zz.repeat && !(0, Rz.e)(zz.key),
      Xz = "PadHidesCursor";
    let fz = !1;
    const sz = zz => {
        zz !== fz && (fz = zz, document.documentElement.classList.toggle(Xz, zz))
      },
      rz = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(zz) {
          let uz = !1,
            bz = !1;
          zz.values.forEach(((zz, Ez) => {
            const nz = zz >= (this.buttonsDown[Ez] ? Zz.bb : Zz.ab);
            nz && !this.buttonsDown[Ez] && (uz = !0, bz = !0), this.buttonsDown[Ez] = nz
          }));
          return [zz.leftStick, zz.rightStick].forEach(((zz, Ez) => {
            const nz = this.stickAnchors[Ez];
            Math.hypot(zz.x, zz.y) < (nz ? Zz.bb : .3) ? this.stickAnchors[Ez] = null : (!nz || Math.hypot(zz.x - nz.x, zz.y - nz.y) >= .3) && (this.stickAnchors[Ez] = {
              x: zz.x,
              y: zz.y
            }, uz = !0, bz ||= !nz)
          })), uz && (this.lastActivityMs = zz.timestampMs), this.onlyMovedOn = uz && !bz, uz
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(zz) {
          return !(zz - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((zz => zz)) || this.stickAnchors.some((zz => null !== zz)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((zz => null !== zz))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let oz = null,
      Nz = !1;
    const vz = () => Nz;
    let xz = null,
      Jz = !1,
      Az = null;
    const Tz = () => Az;
    let Lz = !1;
    const Pz = zz => {
        if (!rz.observe(zz)) return !1;
        if (Lz && rz.wasOnlyMoveOn() && !(0, Fz.f)()) return !1;
        Lz = !1, Nz = !1;
        const uz = !(0, Fz.f)();
        return uz && (oz = zz, Az = !fz && Jz && xz ? {
          ...xz
        } : null), Jz = !1, (0, Fz.l)("gamepad"), sz(!0), (0, dz.k)((0, tz.k)()), uz
      },
      Gz = zz => !(0, Fz.f)() || zz === oz,
      az = () => {
        rz.reset()
      },
      Vz = () => {
        const zz = nz.e.get("activeInputDevice"),
          uz = "gamepad" === zz ? pz.g.getActivePad() : null;
        return {
          device: zz,
          inGame: (0, Mz.q)(),
          padMovesMouse: null !== uz && (0, Oz.f)(uz.id)
        }
      },
      mz = zz => {
        document.pointerLockElement ? xz = null : (xz ??= {
          x: 0,
          y: 0
        }, xz.x = zz.clientX, xz.y = zz.clientY)
      },
      qz = () => {
        const zz = new Kz.c,
          uz = uz => {
            zz.reset(), Lz = !1, (0, Fz.l)(uz)
          },
          bz = zz => {
            if (zz.isTrusted) {
              if (zz instanceof KeyboardEvent) {
                if ((0, Fz.j)(zz), !wz(zz)) return;
                Nz = !0
              }
              if (zz instanceof PointerEvent && "touch" === zz.pointerType) return xz = null, void uz("touch");
              zz instanceof PointerEvent && (mz(zz), Jz = !0), ("pointerdown" !== zz.type || (zz => {
                let {
                  device: uz,
                  inGame: bz,
                  padMovesMouse: Ez
                } = zz;
                return !("gamepad" === uz && Ez && bz)
              })(Vz())) && uz("keyboardMouse")
            }
          },
          Ez = zz => {
            zz.isTrusted && (xz = null, uz("touch"))
          },
          lz = zz => {
            zz.isTrusted && "touch" !== zz.pointerType && !zz.relatedTarget && (xz = null)
          },
          Mz = bz => {
            if (!bz.isTrusted || "touch" === bz.pointerType) return;
            mz(bz);
            const Ez = bz.movementX || 0,
              iz = bz.movementY || 0;
            if (0 === Ez && 0 === iz) return;
            if (Jz = !0, sz(!1), "keyboardMouse" === nz.e.get("activeInputDevice")) return;
            const lz = rz.isHolding(bz.timeStamp),
              Mz = Vz(),
              tz = (zz => {
                let {
                  device: uz,
                  inGame: bz,
                  padMovesMouse: Ez,
                  padHolding: nz
                } = zz;
                return ("gamepad" !== uz || !Ez) && "keyboardMouse" !== uz && (bz || !nz)
              })({
                ...Mz,
                inGame: Mz.inGame && (0, Hz.c)(),
                padHolding: lz
              });
            tz && zz.add(Ez, iz, bz.timeStamp) && (uz("keyboardMouse"), Lz = rz.isStickOffRest())
          },
          tz = zz => {
            sz("gamepad" === zz)
          },
          Oz = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", bz, Oz), window.addEventListener("pointerdown", bz, Oz), window.addEventListener("wheel", bz, Oz), window.addEventListener("touchstart", Ez, Oz), window.addEventListener("pointermove", Mz, Oz), window.addEventListener("pointerout", lz, Oz);
        const pz = iz.k.subscribe("appManagerUpdated|activeInputDevice", tz);
        return tz(nz.e.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", bz, Oz), window.removeEventListener("pointerdown", bz, Oz), window.removeEventListener("wheel", bz, Oz), window.removeEventListener("touchstart", Ez, Oz), window.removeEventListener("pointermove", Mz, Oz), window.removeEventListener("pointerout", lz, Oz), xz = null, iz.k.unsubscribe(pz), sz(!1)
        }
      },
      hz = () => {
        const [zz, uz] = (0, Ez.useState)(tz.k);
        return (0, lz.g)(tz.d, (() => {
          uz((0, tz.k)())
        })), (0, lz.g)(pz.c, (() => {
          uz((0, tz.k)())
        })), zz
      }
  },
  7867: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      f: () => nz
    });
    const Ez = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      nz = zz => Ez.includes(zz)
  },
  7895: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz,
      c: () => Oz,
      e: () => tz,
      f: () => Mz
    });
    var Ez = bz(20),
      nz = bz(1595),
      iz = bz(1681);
    const lz = new Map,
      Mz = (zz, uz) => (lz.has(zz) && console.warn(`Gameplay blocker "${zz}" registered twice; the newer one replaces it.`), lz.set(zz, uz), () => {
        lz.get(zz) === uz && lz.delete(zz)
      }),
      tz = () => (0, iz.b)(document.activeElement),
      Hz = function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [uz, bz] of lz)
          if (!zz.includes(uz) && bz()) return uz;
        return null
      },
      Oz = function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Ez.e.get("gameState") && (!(0, nz.l)() && (!tz() && null === Hz(zz)))
      }
  },
  7837: (zz, uz, bz) => {
    bz.d(uz, {
      B: () => iz,
      E: () => pz,
      H: () => fz,
      K: () => Lz,
      O: () => sz,
      S: () => wz,
      V: () => Kz,
      Y: () => Hz,
      ab: () => dz,
      bb: () => Fz,
      c: () => Gz,
      cb: () => nz,
      eb: () => Ez,
      f: () => Tz,
      hb: () => oz,
      i: () => Oz,
      ib: () => Az,
      jb: () => Pz,
      kb: () => rz,
      m: () => tz,
      q: () => Mz,
      s: () => vz,
      w: () => Xz,
      y: () => Nz
    });
    const Ez = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      nz = Ez.length,
      iz = function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(nz).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: zz
        }
      },
      lz = Object.fromEntries(Ez.map(((zz, uz) => [zz, uz]))),
      Mz = zz => lz[zz],
      tz = function(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Ez = Math.hypot(zz.x, zz.y);
        if (Ez <= uz) return {
          x: 0,
          y: 0
        };
        const nz = Math.min(1, (Ez - uz) / Math.max(1e-4, bz - uz));
        return {
          x: zz.x / Ez * nz,
          y: zz.y / Ez * nz
        }
      },
      Hz = ["exponential", "linear", "boost"],
      Oz = (zz, uz) => {
        const bz = Math.hypot(zz.x, zz.y);
        if (0 === bz) return {
          x: 0,
          y: 0
        };
        const Ez = ((zz, uz) => {
          const bz = Math.max(0, Math.min(1, zz));
          return "linear" === uz ? bz : bz * bz
        })(bz, uz);
        return {
          x: zz.x / bz * Ez,
          y: zz.y / bz * Ez
        }
      },
      pz = .5,
      dz = .3,
      Fz = .2,
      Zz = Mz("LT"),
      Rz = Mz("RT"),
      Kz = zz => zz === Zz || zz === Rz,
      wz = (zz, uz) => {
        const bz = Mz(uz);
        return Kz(bz) ? zz[bz] > .35 : zz[bz] >= pz
      },
      Xz = (zz, uz) => zz.map(((zz, bz) => Kz(bz) ? uz[bz] ? zz > .35 : zz >= .55 : zz >= pz)),
      fz = ["Up", "Down", "Left", "Right"],
      sz = zz => fz.includes(zz),
      rz = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(zz.x, zz.y) < uz ? null : Math.abs(zz.x) > Math.abs(zz.y) ? zz.x > 0 ? "Right" : "Left" : zz.y > 0 ? "Down" : "Up"
      },
      oz = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Nz = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      vz = ["default", "slow", "off"],
      xz = 800,
      Jz = 250,
      Az = (zz, uz) => "off" === uz ? null : "slow" === uz ? {
        initialDelayMs: Math.max(zz.initialDelayMs, xz),
        intervalMs: Math.max(zz.intervalMs, Jz)
      } : zz;
    class Tz {
      constructor(zz) {
        this.readTiming = zz, this.yM = !1, this.timing = null, this.nextFireMs = 0
      }
      update(zz, uz) {
        return zz ? this.yM ? !!(this.timing && uz >= this.nextFireMs) && (this.nextFireMs = uz + this.timing.intervalMs, !0) : (this.yM = !0, this.timing = this.readTiming(), this.nextFireMs = uz + (null !== (bz = null === (Ez = this.timing) || void 0 === Ez ? void 0 : Ez.initialDelayMs) && void 0 !== bz ? bz : 0), !0) : (this.yM = !1, !1);
        var bz, Ez
      }
      reset() {
        this.yM = !1
      }
    }
    const Lz = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Pz = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Gz {
      constructor(zz) {
        this.timer = zz, this.direction = null
      }
      update(zz, uz) {
        return zz !== this.direction && (this.timer.reset(), this.direction = zz), this.timer.update(null !== zz, uz) ? zz : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8358: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      i: () => iz
    });
    let Ez = -1 / 0;
    const nz = () => {
        Ez = performance.now()
      },
      iz = zz => performance.now() - Ez < zz
  },
  8326: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      h: () => iz
    });
    var Ez = bz(7863),
      nz = bz(7837);
    const iz = zz => (0, nz.ib)(zz, (0, Ez.g)().buttonRepeat),
      lz = zz => new nz.f((() => iz(zz)))
  },
  7877: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => tz,
      g: () => iz,
      k: () => Mz
    });
    var Ez = bz(22),
      nz = bz(7863);
    const iz = (zz, uz) => "OpenShop" === zz ? "shop" === uz : "OpenLobbyLeaderboard" !== zz || "leaderboard" === uz;
    let lz = !1;
    const Mz = zz => {
        zz !== lz && (lz = zz, Ez.k.sK(nz.d, (0, nz.g)()))
      },
      tz = () => ((zz, uz) => "shop" === zz && uz ? "shop" : "leaderboard")((0, nz.g)().leaderboardButton, lz)
  },
  7871: (zz, uz, bz) => {
    bz.d(uz, {
      $: () => Kz,
      A: () => rz,
      C: () => dz,
      E: () => Fz,
      G: () => pz,
      K: () => sz,
      O: () => Hz,
      R: () => wz,
      U: () => Jz,
      W: () => fz,
      _: () => Rz,
      b: () => Vz,
      d: () => qz,
      db: () => Zz,
      gb: () => Xz,
      h: () => Az,
      i: () => lz,
      k: () => xz,
      kb: () => Pz,
      l: () => Nz,
      nb: () => iz,
      o: () => Gz,
      ob: () => oz,
      pb: () => mz,
      r: () => az,
      sb: () => vz,
      u: () => Oz,
      w: () => tz,
      z: () => Mz
    });
    var Ez = bz(7859),
      nz = bz(7837);
    const iz = {
        min: 25,
        max: 500,
        step: 5
      },
      lz = {
        min: 25,
        max: 100,
        step: 5
      },
      Mz = {
        min: 0,
        max: .4,
        step: .01
      },
      tz = {
        min: 25,
        max: 300,
        step: 5
      },
      Hz = {
        min: .5,
        max: 6,
        step: .1
      },
      Oz = (zz, uz) => {
        if (!Number.isFinite(zz)) return uz.min;
        const bz = uz.min + Math.round((zz - uz.min) / uz.step) * uz.step,
          Ez = Math.min(uz.max, Math.max(uz.min, bz));
        return Math.round(1e3 * Ez) / 1e3
      },
      pz = zz => `${Math.round(zz)}%`,
      dz = zz => pz(100 * zz),
      Fz = zz => `${zz.toFixed(1)}\xd7`,
      Zz = [{
        value: "auto",
        labelKey: "controller:settingsPromptAuto"
      }, {
        value: "xbox",
        labelKey: "controller:settingsPromptXbox"
      }, {
        value: "playstation",
        labelKey: "controller:settingsPromptPlayStation"
      }, {
        value: "nintendo",
        labelKey: "controller:settingsPromptNintendo"
      }, {
        value: "steamdeck",
        labelKey: "controller:settingsPromptSteamDeck"
      }, {
        value: "generic",
        labelKey: "controller:settingsPromptGeneric"
      }],
      Rz = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      Kz = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      wz = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Xz = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      fz = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      sz = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      rz = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      oz = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Nz = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      vz = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      xz = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Jz = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Az = {
        jump: "controller:settingsActionJump",
        sneak: "controller:settingsActionSneak",
        sneakToggle: "controller:settingsActionSneakToggle",
        sprint: "controller:settingsActionSprint",
        attack: "controller:settingsActionAttack",
        use: "controller:settingsActionUse",
        hotbarPrevious: "controller:settingsActionHotbarPrevious",
        hotbarNext: "controller:settingsActionHotbarNext",
        inventory: "controller:settingsActionInventory",
        actionButton: "controller:settingsActionActionButton",
        perspective: "controller:settingsActionPerspective",
        pickBlock: "controller:settingsActionPickBlock",
        drop: "controller:settingsActionDrop",
        emoteWheel: "controller:settingsActionEmoteWheel",
        chat: "controller:settingsActionChat",
        pause: "controller:settingsActionPause",
        leaderboard: "controller:settingsActionLeaderboard",
        menuConfirm: "controller:settingsActionMenuConfirm",
        menuBack: "controller:settingsActionMenuBack",
        menuTabPrevious: "controller:settingsActionMenuTabPrevious",
        menuTabNext: "controller:settingsActionMenuTabNext",
        menuPageUp: "controller:settingsActionMenuPageUp",
        menuPageDown: "controller:settingsActionMenuPageDown",
        menuSecondary: "controller:settingsActionMenuSecondary",
        menuToggleCursor: "controller:settingsActionMenuToggleCursor",
        inventoryPrimary: "controller:settingsActionInventoryPrimary",
        inventorySecondary: "controller:settingsActionInventorySecondary",
        inventoryQuickMove: "controller:settingsActionInventoryQuickMove",
        inventoryClose: "controller:settingsActionInventoryClose",
        inventoryPanelPrevious: "controller:settingsActionInventoryPanelPrevious",
        inventoryPanelNext: "controller:settingsActionInventoryPanelNext",
        inventoryDrop: "controller:settingsActionInventoryDrop",
        inventoryHotbarSwap: "controller:settingsActionInventoryHotbarSwap",
        keyboardType: "controller:settingsActionKeyboardType",
        keyboardBackspace: "controller:settingsActionKeyboardBackspace",
        keyboardSpace: "controller:settingsActionKeyboardSpace",
        keyboardCaretLeft: "controller:settingsActionKeyboardCaretLeft",
        keyboardCaretRight: "controller:settingsActionKeyboardCaretRight",
        keyboardShift: "controller:settingsActionKeyboardShift",
        keyboardSymbols: "controller:settingsActionKeyboardSymbols",
        keyboardSubmit: "controller:settingsActionKeyboardSubmit",
        keyboardClose: "controller:settingsActionKeyboardClose",
        keyboardChannel: "controller:settingsActionKeyboardChannel"
      },
      Tz = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Lz = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Pz = Ez.d.map((zz => {
        let {
          group: uz,
          actions: bz
        } = zz;
        const Ez = bz.map((zz => ({
          kind: "action",
          action: zz
        })));
        return {
          titleKey: Tz[uz],
          rows: "gameplay" === uz ? [...Lz, ...Ez] : Ez
        }
      })),
      Gz = nz.eb.filter((zz => "Home" !== zz)),
      az = 1e4;
    class Vz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = zz, this.openButton = uz, this.accepts = bz, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(zz, uz) {
        var bz;
        this.updateIgnored(zz, uz);
        const Ez = uz - (null !== (bz = this.startMs) && void 0 !== bz ? bz : uz) >= 250;
        for (const nz of Gz)
          if (nz !== this.cancelButton && Ez && !this.ignoredUntilMs.has(nz) && zz.wasPressed(nz) && this.accepts(nz)) return {
            kind: "bind",
            button: nz
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (zz.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = uz
        }
        return null === this.cancelDownAtMs ? null : zz.isHeld(this.cancelButton) && uz - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : zz.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(zz) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (zz - this.cancelDownAtMs) / 700)
      }
      updateIgnored(zz, uz) {
        if (null === this.startMs) {
          this.startMs = uz;
          for (const uz of Gz) zz.isDown(uz) && this.ignoredUntilMs.set(uz, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, uz + 250)
        }
        for (const [bz, Ez] of this.ignoredUntilMs) {
          const nz = zz.isDown(bz);
          Ez === 1 / 0 ? nz || bz !== this.openButton ? nz || this.ignoredUntilMs.delete(bz) : this.ignoredUntilMs.set(bz, uz + 250) : uz >= Ez ? this.ignoredUntilMs.delete(bz) : nz && this.ignoredUntilMs.set(bz, 1 / 0)
        }
      }
    }
    const mz = 6e3;
    class qz {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(zz, uz) {
        let {
          pressed: bz,
          yM: Ez
        } = zz;
        if (bz) {
          const zz = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== zz && uz - zz < 1500 ? [...this.pressesAtMs, uz] : [uz], this.pressesAtMs.length >= 3) return 1
        }
        return Ez ? (this.downAtMs ??= uz, Math.min(1, (uz - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4776: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      f: () => lz
    });
    var Ez = bz(56);
    const nz = new WeakMap,
      iz = zz => {
        var uz;
        const bz = zz.closest("[data-pad-slider]");
        return bz && null !== (uz = nz.get(bz)) && void 0 !== uz ? uz : null
      },
      lz = (zz, uz) => {
        const bz = (0, Ez.useRef)(uz);
        bz.current = uz, (0, Ez.useEffect)((() => {
          if (zz.current) return ((zz, uz) => (nz.set(zz, uz), () => {
            nz.get(zz) === uz && nz.delete(zz)
          }))(zz.current, {
            adjust: zz => {
              bz.current.adjust(zz)
            },
            setFraction: zz => {
              bz.current.setFraction(zz)
            },
            endDrag: () => {
              bz.current.endDrag()
            }
          })
        }), [zz])
      }
  },
  8385: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      f: () => nz
    });
    var Ez = bz(22);
    const nz = "localBlockBroken";

    function iz() {
      return {
        onPlayerChangeBlock(zz, uz, bz, iz, lz, Mz) {
          "Air" === Mz && Ez.k.sK(nz)
        }
      }
    }
  },
  7915: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7918: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7927: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7929: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7938: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7940: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7946: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7949: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7953: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7956: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7960: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7967: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7974: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7980: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7988: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7994: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8001: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8010: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8016: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8025: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8032: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8034: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8038: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8040: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8048: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8051: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8055: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8058: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8060: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8062: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8064: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8067: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8075: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8084: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8093: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8098: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8100: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8108: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8114: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8120: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8126: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8134: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8143: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8147: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8152: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8159: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8163: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8167: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8173: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8176: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8179: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8184: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8192: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8197: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8205: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8214: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8218: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8227: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8234: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8236: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8240: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8247: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8255: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8257: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8261: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8263: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8267: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8272: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8276: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8282: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8288: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8291: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8297: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8301: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8305: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8312: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);