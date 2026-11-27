export const id = 180;
export const ids = [180];
export const modules = {
  10146: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => uW,
      f: () => eW
    });
    var mW = OW(62),
      EW = OW(27),
      NW = OW(3457),
      PW = OW(4613),
      LW = OW(10154);
    const cW = 6,
      wW = 4,
      tW = ["HudMove-inventory", "HudLocked-inventory"];

    function ZW(WW) {
      let {
        left: iW,
        right: OW,
        height: mW,
        rowTop: EW,
        besideBottom: NW,
        obstacles: PW
      } = WW;
      const LW = PW.filter((WW => WW.left < OW + cW && WW.right > iW - cW));
      let tW = NW;
      for (let cW = 0; cW <= LW.length; cW++) {
        const WW = LW.filter((WW => WW.top < tW + wW && WW.bottom > tW - mW - wW));
        if (0 === WW.length) break;
        tW = Math.min(...WW.map((WW => WW.top))) - wW
      }
      return tW === NW ? null : Math.ceil(EW - tW)
    }

    function xW(WW) {
      return Array.from(WW.children).filter((WW => !WW.classList.contains("HotBarRow")))
    }

    function lW(WW) {
      return function(WW) {
        const iW = [],
          OW = (WW, mW) => {
            const EW = WW.getBoundingClientRect();
            if (EW.width > 0 && EW.height > 0) iW.push(WW);
            else if (mW < 2)
              for (const iW of Array.from(WW.children)) OW(iW, mW + 1)
          };
        for (const mW of WW) OW(mW, 0);
        return iW
      }(xW(WW).flatMap((WW => WW.classList.contains("AuraBarWrapper") ? [] : WW.classList.contains("BottomScreenStatBarList") ? Array.from(WW.children) : [WW]))).filter((WW => !WW.matches(AW)))
    }
    const AW = "[data-over-keys]",
      bW = 8;

    function jW(WW, iW, OW) {
      const mW = (WW.top + WW.bottom) / 2;
      let EW = WW.bottom;
      for (let PW = 0; PW <= iW.length; PW++) {
        const OW = EW - (WW.bottom - WW.top),
          NW = iW.filter((iW => iW.left < WW.right && iW.right > WW.left && iW.top < EW + bW && iW.bottom > OW));
        if (0 === NW.length) break;
        const PW = Math.min(...NW.map((WW => WW.top)));
        if (PW < mW) return 0;
        EW = PW - bW
      }
      const NW = Math.ceil(WW.bottom - EW);
      return WW.top - NW < OW ? 0 : NW
    }

    function UW(WW, iW) {
      var OW;
      const mW = null === (OW = WW.querySelector(":scope > .AuraBarWrapper")) || void 0 === OW ? void 0 : OW.getBoundingClientRect();
      return (mW && mW.height > 0 ? mW.top : iW) - wW
    }
    const kW = ".BottomScreenMessage, [role='status']";

    function sW(WW, iW, OW, mW, EW) {
      const NW = WW => WW.map((WW => WW.getBoundingClientRect())),
        PW = ZW({
          ...OW,
          obstacles: NW(OW.obstacles.filter((WW => !WW.matches(kW))))
        }),
        LW = iW.ownerDocument.defaultView,
        cW = `${null===LW||void 0===LW?void 0:LW.innerWidth}x${null===LW||void 0===LW?void 0:LW.innerHeight}:${mW}:${Math.round(OW.rowTop)}`,
        wW = WW.get(iW),
        tW = (null === wW || void 0 === wW ? void 0 : wW.at) === cW ? (xW = wW.rise, lW = PW, null === xW ? lW : null === lW ? xW : Math.max(xW, lW)) : PW;
      var xW, lW;
      const AW = ZW({
        ...OW,
        besideBottom: null === tW ? OW.besideBottom : OW.rowTop - tW,
        obstacles: NW(OW.obstacles)
      });
      return EW && WW.set(iW, {
        at: cW,
        rise: tW
      }), null !== AW && void 0 !== AW ? AW : tW
    }

    function MW(WW, iW, OW, mW) {
      WW.classList.toggle(iW, null !== mW), null === mW ? WW.style.removeProperty(OW) : WW.style.setProperty(OW, `${mW}px`)
    }
    const KW = new WeakMap,
      SW = new WeakMap,
      YW = "(orientation: portrait) and (max-width: 600px)";

    function yW(WW, iW) {
      const OW = WW.getBoundingClientRect();
      if (0 === OW.width) return null;
      const mW = [OW, ...Array.from(WW.children).filter((WW => !(WW => iW.contains(WW.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(WW))).map((WW => WW.getBoundingClientRect())).filter((WW => WW.width > 0))];
      return {
        left: Math.min(...mW.map((WW => WW.left))),
        top: Math.min(...mW.map((WW => WW.top))),
        right: Math.max(...mW.map((WW => WW.right))),
        bottom: Math.max(...mW.map((WW => WW.bottom)))
      }
    }

    function TW(WW) {
      let {
        slotsLeft: iW,
        slotsRight: OW,
        width: mW,
        zoneRight: EW
      } = WW;
      const NW = Math.max(0, Math.floor(OW - iW - mW));
      return null === EW ? 0 : Math.min(NW, Math.max(0, Math.ceil(EW + cW - iW)))
    }

    function JW(WW) {
      var iW;
      const OW = WW.getBoundingClientRect();
      if (0 === OW.width) return null;
      const mW = null === (iW = WW.parentElement) || void 0 === iW ? void 0 : iW.getBoundingClientRect();
      return mW && mW.width > 0 ? Math.min(OW.right, mW.left + mW.width * hW) : OW.right
    }
    const hW = .35,
      HW = new WeakMap,
      nW = new WeakMap;

    function uW(WW) {
      oW(WW) && oW(WW),
        function(WW) {
          var iW, OW;
          const mW = WW.documentElement.classList;
          if (!mW.contains("TouchHotbar") || !mW.contains("TouchHotbarKeysAbove") || tW.some((WW => mW.contains(WW))) || !1 !== (null === (iW = WW.defaultView) || void 0 === iW || null === (OW = iW.matchMedia) || void 0 === OW ? void 0 : OW.call(iW, YW).matches)) return;
          const EW = WW.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            NW = null === EW || void 0 === EW ? void 0 : EW.closest(".BottomMiddleElements"),
            PW = null === EW || void 0 === EW ? void 0 : EW.parentElement;
          if (!EW || !NW || !PW || NW.classList.contains("TouchInventoryOpen") || EW.querySelector("[data-pressing]")) return;
          const LW = yW(EW, mW),
            cW = PW.getBoundingClientRect().top,
            wW = LW && sW(KW, NW, {
              left: LW.left,
              right: LW.right,
              height: LW.bottom - LW.top,
              rowTop: cW,
              besideBottom: UW(NW, cW),
              obstacles: lW(NW).filter((WW => !WW.classList.contains("BottomScreenMessage")))
            }, `${Math.round(LW.left)}:${Math.round(LW.right-LW.left)}x${Math.round(LW.bottom-LW.top)}`, !0);
          SW.has(NW) && SW.get(NW) === wW || (MW(NW, "KeysAboveUp", "--touch-keys-above-rise", wW), SW.set(NW, wW))
        }(WW),
        function(WW) {
          const iW = WW.querySelector(".BottomMiddleElements"),
            OW = iW ? Array.from(iW.querySelectorAll(AW)) : [];
          if (0 === OW.length || WW.querySelector(".HotBarContainer.Touch .TouchInventoryKey[data-pressing]")) return;
          const mW = Array.from(WW.querySelectorAll(".HotBarContainer.Touch .TouchInventoryKey")).map(LW.b).filter((WW => null !== WW));
          for (const EW of OW) {
            const WW = EW.getBoundingClientRect(),
              iW = parseFloat(EW.style.getPropertyValue("--over-keys-lift")) || 0,
              OW = WW.width > 0 ? jW({
                left: WW.left,
                top: WW.top + iW,
                right: WW.right,
                bottom: WW.bottom + iW
              }, mW, 0) : 0;
            OW !== iW && (0 === OW ? EW.style.removeProperty("--over-keys-lift") : EW.style.setProperty("--over-keys-lift", `${OW}px`))
          }
        }(WW)
    }

    function oW(WW) {
      var iW, OW, mW, EW;
      const NW = WW.documentElement.classList;
      if (!NW.contains("TouchHotbar") || NW.contains("TouchHotbarKeysAbove") || tW.some((WW => NW.contains(WW))) || null === (iW = WW.defaultView) || void 0 === iW || null === (OW = iW.matchMedia) || void 0 === OW || !OW.call(iW, dW).matches) return !1;
      const PW = WW.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        LW = null === PW || void 0 === PW ? void 0 : PW.parentElement,
        cW = null === PW || void 0 === PW ? void 0 : PW.closest(".BottomMiddleElements"),
        wW = null === cW || void 0 === cW ? void 0 : cW.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!PW || !LW || !cW || !wW || cW.classList.contains("TouchInventoryOpen")) return !1;
      const ZW = PW.getBoundingClientRect();
      if (0 === ZW.width) return !1;
      const xW = WW.querySelector(".JoystickZone"),
        AW = wW.getBoundingClientRect(),
        bW = LW.getBoundingClientRect().top,
        jW = TW({
          slotsLeft: AW.left,
          slotsRight: AW.right,
          width: ZW.width,
          zoneRight: xW ? JW(xW) : null
        }),
        kW = HW.get(cW),
        KW = AW.left + jW,
        SW = {
          shift: jW,
          rise: sW(nW, cW, {
            left: KW,
            right: KW + ZW.width,
            height: ZW.height,
            rowTop: bW,
            besideBottom: UW(cW, bW),
            obstacles: lW(cW)
          }, `${jW}:${Math.round(ZW.width)}`, (null !== (mW = null === kW || void 0 === kW ? void 0 : kW.shift) && void 0 !== mW ? mW : 0) === jW)
        };
      return (null === kW || void 0 === kW ? void 0 : kW.shift) !== SW.shift && cW.style.setProperty("--touch-shop-above-shift", `${SW.shift}px`), (null === kW || void 0 === kW ? void 0 : kW.rise) !== SW.rise && MW(cW, "ShopAboveUp", "--touch-shop-above-rise", SW.rise), HW.set(cW, SW), (null !== (EW = null === kW || void 0 === kW ? void 0 : kW.shift) && void 0 !== EW ? EW : 0) !== SW.shift
    }
    const dW = "(orientation: landscape) and (max-height: 500px)";

    function eW(WW, iW, OW) {
      (0, mW.useLayoutEffect)((() => {
        var iW;
        const mW = null === (iW = WW.current) || void 0 === iW ? void 0 : iW.closest(".BottomMiddleElements");
        if (!mW || OW) return;
        const LW = new ResizeObserver((() => {
            ZW(!1)
          })),
          cW = () => {
            LW.disconnect();
            const WW = document.querySelector(".JoystickZone");
            for (const iW of [WW, mW, mW.querySelector(".HotBarGameItemsContainer"), ...lW(mW), ...mW.querySelectorAll(AW)]) iW && LW.observe(iW)
          };
        let wW = null,
          tW = !1;
        const ZW = WW => {
            tW ||= WW, wW ??= requestAnimationFrame((() => {
              wW = null, tW && (tW = !1, cW()), uW(document)
            }))
          },
          bW = new MutationObserver((() => {
            ZW(!0)
          }));
        bW.observe(mW, {
          childList: !0
        });
        for (const WW of xW(mW)) bW.observe(WW, {
          childList: !0,
          subtree: !0
        });
        uW(document), cW();
        const jW = () => {
            ZW(!0)
          },
          UW = [(0, EW.n)(NW.d, jW), (0, EW.n)(PW.c, jW)],
          kW = new MutationObserver((() => {
            ZW(!1)
          }));
        return WW.current && kW.observe(WW.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          kW.disconnect(), null !== wW && cancelAnimationFrame(wW), LW.disconnect(), bW.disconnect();
          for (const WW of UW) WW()
        }
      }), [WW, iW, OW])
    }
  },
  10154: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => ZW,
      c: () => jW
    });
    var mW = OW(62),
      EW = OW(27),
      NW = OW(10128),
      PW = OW(3457),
      LW = OW(10142),
      cW = OW(10134),
      wW = OW(4613);

    function tW(WW) {
      const iW = WW.getBoundingClientRect();
      return iW.width > 0 && iW.height > 0 ? (0, NW.j)(iW) : null
    }

    function ZW(WW) {
      const iW = WW.ownerDocument.documentElement.classList,
        OW = WW.classList.contains("ShopKey") ? "HudHide-shop" : WW.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== OW && (iW.contains(OW) || iW.contains("HudHide-inventory")) ? null : tW(WW)
    }

    function xW(WW) {
      const iW = tW(WW),
        OW = WW.firstElementChild;
      if (null === iW) return null;
      const {
        x: mW,
        y: EW
      } = (0, NW.d)(iW), PW = OW.offsetWidth / 2, LW = OW.offsetHeight / 2;
      return {
        left: mW - PW,
        top: EW - LW,
        right: mW + PW,
        bottom: EW + LW
      }
    }

    function lW(WW, iW) {
      const OW = WW.ownerDocument.createElement("div");
      OW.className = `TouchSlotProbe TouchSlot${iW}`, WW.append(OW);
      const mW = tW(OW);
      return OW.remove(), mW
    }
    const AW = `.TouchInventoryKey, .TouchSprintKey, ${PW.c}`;

    function bW(WW, iW) {
      const OW = iW.map((iW => ({
        slot: iW,
        face: lW(WW, iW)
      })));
      if (OW.every((WW => {
          let {
            face: iW
          } = WW;
          return null === iW
        }))) return null;
      return function(WW, iW) {
        const OW = [...iW],
          mW = [],
          EW = [];
        for (const {
            face: LW,
            slot: wW
          }
          of WW) null !== LW && (OW.some((WW => (0, NW.l)(LW, WW, cW.d))) ? EW.push(wW) : (mW.push(wW), OW.push(LW)));
        const PW = [...mW, ...EW];
        return WW.map((WW => {
          let {
            slot: iW,
            face: OW
          } = WW;
          return null === OW ? iW : PW.shift()
        }))
      }(OW, [...[...WW.querySelectorAll(":scope > .TouchKeyHit")].filter((WW => WW.classList.contains("BoostKey") || !iW.some((iW => WW.classList.contains(`TouchSlot${iW}`))))).map(xW), ...[...WW.ownerDocument.querySelectorAll(AW)].map(ZW)].filter((WW => null !== WW)))
    }

    function jW(WW, iW) {
      const [OW, NW] = (0, mW.useState)((() => (0, LW.k)(WW)));
      return (0, mW.useLayoutEffect)((() => {
        var OW;
        const mW = iW.current;
        if (!mW) return;
        const cW = (0, LW.k)(WW),
          tW = () => {
            const WW = bW(mW, cW);
            NW((iW => {
              const OW = null !== WW && void 0 !== WW ? WW : iW.length === cW.length ? iW : cW;
              return OW.join() === iW.join() ? iW : OW
            }))
          };
        tW(), window.addEventListener("resize", tW);
        const ZW = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(tW);
        null === ZW || void 0 === ZW || ZW.observe(null !== (OW = mW.closest(".BottomRightElements")) && void 0 !== OW ? OW : mW);
        const xW = [(0, EW.n)(PW.d, tW), (0, EW.n)(wW.c, tW), (0, EW.n)(PW.p, tW)];
        return () => {
          window.removeEventListener("resize", tW), null === ZW || void 0 === ZW || ZW.disconnect();
          for (const WW of xW) WW()
        }
      }), [WW, iW]), OW.length === (0, LW.k)(WW).length ? OW : (0, LW.k)(WW)
    }
  },
  10128: (WW, iW, OW) => {
    OW.d(iW, {
      D: () => AW,
      E: () => NW,
      d: () => EW,
      g: () => LW,
      j: () => mW,
      k: () => bW,
      l: () => lW,
      n: () => tW,
      o: () => PW,
      q: () => jW,
      u: () => ZW,
      v: () => cW,
      x: () => xW,
      z: () => wW
    });
    const mW = WW => ({
      left: WW.left,
      top: WW.top,
      right: WW.right,
      bottom: WW.bottom
    });

    function EW(WW) {
      return {
        x: (WW.left + WW.right) / 2,
        y: (WW.top + WW.bottom) / 2
      }
    }

    function NW(WW) {
      return 0 === WW.length ? null : WW.reduce(((WW, iW) => ({
        left: Math.min(WW.left, iW.left),
        top: Math.min(WW.top, iW.top),
        right: Math.max(WW.right, iW.right),
        bottom: Math.max(WW.bottom, iW.bottom)
      })))
    }

    function PW(WW, iW) {
      const OW = Math.max(0, (iW - (WW.right - WW.left)) / 2),
        mW = Math.max(0, (iW - (WW.bottom - WW.top)) / 2);
      return {
        left: WW.left - OW,
        top: WW.top - mW,
        right: WW.right + OW,
        bottom: WW.bottom + mW
      }
    }

    function LW(WW, iW) {
      return iW.x >= WW.left && iW.x <= WW.right && iW.y >= WW.top && iW.y <= WW.bottom
    }

    function cW(WW, iW, OW) {
      let mW = null,
        NW = 1 / 0;
      for (const {
          id: EW,
          box: PW
        }
        of iW) {
        const iW = (PW.right - PW.left) * (PW.bottom - PW.top);
        LW(PW, WW) && iW < NW && (NW = iW, mW = EW)
      }
      if (null !== mW) return mW;
      let cW = 1 / 0;
      for (const {
          id: wW,
          box: tW
        }
        of iW) {
        if (!LW(PW(tW, OW), WW)) continue;
        const iW = EW(tW),
          NW = Math.hypot(WW.x - iW.x, WW.y - iW.y);
        NW < cW && (cW = NW, mW = wW)
      }
      return mW
    }

    function wW(WW, iW, OW) {
      return {
        left: OW.left,
        top: OW.top,
        right: WW - OW.right,
        bottom: iW - OW.bottom
      }
    }

    function tW(WW, iW, OW, mW) {
      const EW = (WW, iW, OW) => Math.max(Math.min(iW, 0), Math.min(Math.max(OW, 0), WW));
      return {
        x: EW(iW, mW.left - WW.left, mW.right - WW.right),
        y: EW(OW, mW.top - WW.top, mW.bottom - WW.bottom)
      }
    }

    function ZW(WW, iW, OW, mW, EW) {
      const NW = WW.dx * mW + iW,
        PW = WW.dy * EW + OW,
        LW = WW => Math.max(-1, Math.min(1, WW));
      return {
        dx: LW(NW / mW),
        dy: LW(PW / EW)
      }
    }

    function xW(WW, iW, OW, mW) {
      return iW <= 0 || OW <= 0 ? 1 : Math.max(.05, Math.min(1, WW / iW, mW / OW))
    }

    function lW(WW, iW, OW) {
      return Math.min(WW.right, iW.right) - Math.max(WW.left, iW.left) > OW && Math.min(WW.bottom, iW.bottom) - Math.max(WW.top, iW.top) > OW
    }

    function AW(WW, iW) {
      const OW = (WW, iW, OW, mW) => iW - WW > mW - OW ? OW - WW > iW - mW ? mW - iW : OW - WW : WW < OW ? OW - WW : iW > mW ? mW - iW : 0;
      return {
        x: OW(WW.left, WW.right, iW.left, iW.right),
        y: OW(WW.top, WW.bottom, iW.top, iW.bottom)
      }
    }

    function bW(WW, iW, OW) {
      return lW(WW, {
        left: 0,
        top: 0,
        right: iW,
        bottom: OW
      }, 0)
    }

    function jW(WW, iW) {
      let {
        avoid: OW = null,
        bounds: mW = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, EW = 0, NW = 1 / 0;
      return WW.forEach(((WW, PW) => {
        const LW = iW.filter((iW => lW(WW, iW, 0))).length,
          cW = null !== mW && (WW.left < mW.left || WW.top < mW.top || WW.right > mW.right || WW.bottom > mW.bottom),
          wW = LW + (OW && lW(WW, OW, 0) ? 1e3 : 0) + (cW ? 1e6 : 0);
        wW < NW && (EW = PW, NW = wW)
      })), EW
    }
  },
  10125: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => wW,
      G: () => lW,
      I: () => xW,
      K: () => ZW,
      c: () => LW,
      g: () => MW,
      i: () => sW,
      j: () => kW,
      l: () => cW,
      p: () => AW,
      t: () => tW,
      w: () => SW,
      y: () => KW
    });
    var mW = OW(10128),
      EW = OW(3383);
    const NW = {
        sprint: "joystick",
        quickChat: "chat",
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        zoom: "cluster",
        drop: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        shop: "inventory",
        bag: "inventory",
        ...Object.fromEntries(EW.L.map((WW => [WW, "menu"])))
      },
      PW = WW => EW.D.filter((iW => NW[iW] === WW)),
      LW = new Set(PW("cluster")),
      cW = new Set(PW("inventory")),
      wW = WW => "inventory" === WW || cW.has(WW),
      tW = WW => {
        const iW = NW[WW];
        return void 0 === iW ? [] : [iW, ...tW(iW)]
      },
      ZW = WW => [WW, ...tW(WW)],
      xW = (WW, iW, OW) => "shop" === WW && iW ? OW("inventory") ? ["inventory"] : OW("bag") ? [WW, "bag"] : [WW] : [WW],
      lW = (WW, iW, OW, EW) => {
        const NW = WW => {
          const NW = iW[WW],
            {
              x: PW,
              y: LW
            } = NW && EW(WW) ? (0, mW.D)(NW, OW) : {
              x: 0,
              y: 0
            };
          return NW && {
            left: NW.left + PW,
            top: NW.top + LW,
            right: NW.right + PW,
            bottom: NW.bottom + LW
          }
        };
        return WW.flatMap((WW => {
          const PW = iW[WW];
          if ("inventory" !== WW || !PW || PW.right - PW.left <= OW.right - OW.left && PW.bottom - PW.top <= OW.bottom - OW.top) return [WW];
          const [LW, cW] = [NW("shop"), NW("bag")];
          return LW && cW && !(0, mW.l)(LW, cW, 0) ? ["shop", "bag"].filter(EW) : [WW]
        }))
      },
      AW = new Map([
        ["cluster", LW],
        ["inventory", cW]
      ]),
      bW = ["cluster"],
      jW = [...bW, ...EW.D.filter((WW => !bW.includes(WW) && !NW[WW]))],
      UW = WW => [WW, ...PW(WW).flatMap(UW)],
      kW = jW.flatMap(UW).map((WW => ({
        id: WW,
        label: `hudLayout:${WW}`,
        ...EW.A[WW],
        parent: NW[WW]
      }))),
      sW = Object.fromEntries(kW.map((WW => [WW.id, WW]))),
      MW = "data-hud-el";

    function KW(WW, iW, OW, mW) {
      const EW = OW(function(WW, iW) {
          return "attack" !== WW || iW ? sW[WW].label : "hudLayout:attackContext"
        }(WW, iW)),
        NW = mW[WW];
      return NW ? OW("hudLayout:slotWithKey", {
        slot: EW,
        key: NW
      }) : EW
    }

    function SW(WW, iW, OW, mW) {
      return WW.map((WW => KW(WW, iW, OW, mW))).join(", ")
    }
  },
  10142: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      h: () => NW,
      j: () => EW,
      k: () => PW,
      l: () => xW,
      p: () => wW,
      s: () => ZW,
      t: () => tW,
      u: () => cW
    });
    var mW = OW(3383);
    const EW = ["J", "C", "A", "P", "U", "X", "G", "Z", "D"],
      NW = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game",
        Z: "zoom",
        D: "drop"
      };

    function PW(WW) {
      return WW ? ["X"] : ["P", "X"]
    }
    const LW = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: mW.L,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function cW(WW, iW, OW) {
      const mW = WW.querySelector(".InGameUi .TouchComponentsButtons");
      if (!mW) return LW;
      const NW = {},
        PW = {};
      for (const LW of EW) {
        const WW = mW.querySelector(`.TouchSlot${LW} > .TouchKey`);
        if (WW) {
          var cW, wW;
          NW[LW] = WW.cloneNode(!0);
          const iW = (null !== (cW = null === (wW = WW.querySelector(".TouchKeyLabel")) || void 0 === wW ? void 0 : wW.textContent) && void 0 !== cW ? cW : "").split(/\s+/).filter((WW => !/[\d\xd7]/.test(WW))).join(" ");
          iW && (PW[LW] = iW)
        }
      }
      const tW = iW => {
          const OW = WW.querySelector(`.InGameUi ${iW}`);
          return null !== OW && !OW.classList.contains("Hidden")
        },
        ZW = [...WW.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((WW => WW.cloneNode(!0)));
      return {
        faces: Object.keys(NW).length > 0 ? NW : null,
        names: PW,
        shop: tW(".TouchInventoryKey.ShopKey"),
        bag: tW(".TouchInventoryKey.BagKey"),
        sprint: tW(".TouchSprintHit"),
        items: ZW.length > 0 ? ZW : null,
        rowIcons: iW,
        pinnedIcons: OW
      }
    }

    function wW(WW, iW) {
      const {
        faces: OW
      } = WW;
      return null === OW || EW.some((WW => NW[WW] === iW && void 0 !== OW[WW]))
    }

    function tW(WW, iW) {
      const OW = {};
      for (const mW of [...PW(iW), "G"]) {
        const iW = WW.names[mW];
        iW && (OW[NW[mW]] = iW)
      }
      return OW
    }

    function ZW(WW, iW) {
      const {
        faces: OW
      } = WW;
      if (null === OW) return [];
      const mW = new Set(Object.keys(OW).map((WW => NW[WW])));
      return PW(iW).filter((WW => !mW.has(NW[WW])))
    }

    function xW(WW, iW) {
      WW.replaceChildren(...[...iW.childNodes].map((WW => WW.cloneNode(!0))))
    }
  },
  10134: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      g: () => tW
    });
    var mW = OW(10128),
      EW = OW(10125),
      NW = OW(3383),
      PW = OW(3439);
    const LW = 2,
      cW = new Set(["effects"]),
      wW = (WW, iW, OW) => {
        const mW = (0, EW.t)(iW).includes(WW) ? WW : (0, EW.t)(WW).includes(iW) ? iW : null;
        if (null === mW || "joystick" === mW || "chat" === mW) return !1;
        const LW = mW === WW ? iW : WW;
        if ("menu" === mW) return (0, PW.t)(LW, OW.hudElements[LW]);
        if ("hotbar" !== mW || !(0, EW.C)(LW)) return !0;
        if ((0, NW.U)(OW.hudElements[LW]) || (0, NW.U)(OW.hudElements.inventory)) return !1;
        return !(OW.hudLocked.includes(LW) || OW.hudLocked.includes("inventory")) || (0, NW.S)(OW.hudElements.hotbar)
      };

    function tW(WW, iW, OW, tW) {
      const ZW = WW => (0, EW.K)(WW).some((WW => (0, NW.w)(OW.hudElements, WW) || (0, PW.s)(WW, OW, tW)));
      if (ZW(WW) || cW.has(WW)) return [];
      const xW = WW => {
          var iW, mW;
          return "bag" === WW && 1 !== (null !== (iW = null === (mW = OW.hudElements.shop) || void 0 === mW ? void 0 : mW[2]) && void 0 !== iW ? iW : 1) || (0, EW.K)(WW).some((WW => void 0 !== OW.hudElements[WW]))
        },
        lW = EW.p.get(WW),
        AW = iW.filter((iW => {
          let {
            id: OW
          } = iW;
          return lW ? lW.has(OW) && !ZW(OW) : OW === WW
        })),
        bW = new Set;
      for (const EW of iW) EW.id === WW || null !== lW && void 0 !== lW && lW.has(EW.id) || bW.has(EW.id) || ZW(EW.id) || cW.has(EW.id) || AW.some((WW => {
        let {
          id: iW,
          box: NW
        } = WW;
        return !wW(iW, EW.id, OW) && (xW(iW) || xW(EW.id)) && (0, mW.l)(NW, EW.box, LW)
      })) && bW.add(EW.id);
      return [...bW]
    }
  },
  9913: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      e: () => mW
    });
    const mW = "controllerOpenKeyboard",
      EW = "controllerKeyboardVisible"
  },
  10020: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => UW,
      g: () => KW,
      j: () => MW,
      l: () => sW,
      m: () => SW,
      n: () => YW
    });
    var mW = OW(344),
      EW = OW(62),
      NW = OW(1526),
      PW = OW(1172),
      LW = OW(27),
      cW = OW(39),
      wW = OW(10011);
    const tW = "quickChatPhrases",
      ZW = "quickChatCustomPhrasesChanged",
      xW = {
        "quickChat:gg": "gg",
        "quickChat:hi": "hi",
        "quickChat:thanks": "thanks",
        "quickChat:gl": "gl",
        "quickChat:brb": "brb",
        "quickChat:yes": "yes",
        "quickChat:no": "no",
        "quickChat:help": "help"
      },
      lW = WW => {
        if ("string" !== typeof WW) return null;
        const iW = WW.trim().slice(0, mW.Uc).trim();
        return "" === iW || iW.startsWith("/") ? null : iW
      },
      AW = WW => {
        const iW = {};
        if (!Array.isArray(WW)) return iW;
        for (const OW of WW) {
          if (!Array.isArray(OW)) continue;
          const WW = wW.f.find((WW => xW[WW] === OW[0])),
            mW = lW(OW[1]);
          void 0 !== WW && null !== mW && (iW[WW] = mW)
        }
        return iW
      };
    let bW = AW(cW.i.getItem(tW));
    const jW = () => {
      bW = AW(cW.i.getItem(tW))
    };
    "undefined" !== typeof window && window.addEventListener("storage", (WW => {
      WW.key !== cW.i.userKeyToStorageKey(tW) && null !== WW.key || (jW(), LW.l.iZ(ZW, bW))
    }));
    const UW = () => bW,
      kW = WW => {
        bW = WW;
        const iW = (WW => wW.f.flatMap((iW => {
          const OW = WW[iW];
          return void 0 === OW ? [] : [
            [xW[iW], OW]
          ]
        })))(WW);
        0 === iW.length ? cW.i.removeItem(tW) : cW.i.setItem(tW, iW), LW.l.iZ(ZW, WW)
      },
      sW = (WW, iW, OW) => {
        const mW = lW(iW),
          EW = {
            ...bW
          };
        null === mW || mW === OW ? delete EW[WW] : EW[WW] = mW, EW[WW] !== bW[WW] && kW(EW)
      },
      MW = WW => {
        if (void 0 !== bW[WW]) {
          const iW = {
            ...bW
          };
          delete iW[WW], kW(iW)
        }
      },
      KW = () => {
        Object.keys(bW).length > 0 && kW({})
      },
      SW = () => (0, NW.g)(ZW, bW),
      YW = () => {
        const {
          t: WW
        } = (0, PW.B)(), iW = SW();
        return (0, EW.useMemo)((() => wW.f.map((OW => {
          var mW;
          return null !== (mW = iW[OW]) && void 0 !== mW ? mW : WW(OW)
        }))), [WW, iW])
      }
  },
  10011: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      f: () => mW,
      g: () => EW
    });
    const mW = ["quickChat:gg", "quickChat:hi", "quickChat:thanks", "quickChat:gl", "quickChat:brb", "quickChat:yes", "quickChat:no", "quickChat:help"];
    const EW = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(WW) {
          return !(WW - this.lastSendMs < 2e3) && (this.lastSendMs = WW, !0)
        }
        nextClaimMs() {
          return this.lastSendMs + 2e3
        }
      },
      NW = (WW, iW, OW) => {
        if (!WW.startsWith("/")) return [];
        const mW = [];
        for (let EW = iW.length - 1; EW >= 0 && mW.length < OW; EW--) {
          const OW = iW[EW].trim();
          OW.startsWith(WW) && OW !== WW && !mW.includes(OW) && mW.push(OW)
        }
        return mW
      }
  },
  10114: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW,
      g: () => cW
    });
    var mW = OW(25),
      EW = OW(1351),
      NW = OW(100);
    const PW = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function LW() {
      return (0, NW.isMobile)() && "function" === typeof navigator.vibrate
    }
    const cW = new class {
      constructor(WW) {
        this.deps = WW, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(WW, iW) {
        var OW;
        if (!this.deps.enabled()) return;
        const mW = PW[WW],
          EW = null !== iW && void 0 !== iW ? iW : mW.pattern;
        if (null === EW) return void console.warn("No vibration pattern for", WW);
        const NW = this.deps.now();
        NW - this.lastAnyAt < 40 && mW.priority < this.playingPriority || NW - (null !== (OW = this.lastAt.get(WW)) && void 0 !== OW ? OW : -1 / 0) < mW.minGapMs || NW < this.playingUntil && mW.priority < this.playingPriority || (this.lastAt.set(WW, NW), this.lastAnyAt = NW, this.playingUntil = NW + EW.reduce(((WW, iW) => WW + iW), 0), this.playingPriority = mW.priority, this.deps.vibrate(EW))
      }
    }({
      vibrate: WW => {
        navigator.vibrate([...WW])
      },
      now: () => performance.now(),
      enabled: () => LW() && mW.d.get("isTouchScreen") && mW.d.get("clientEscMenuOptions").vibration && !(0, EW.f)()
    })
  },
  10106: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      e: () => PW,
      h: () => LW,
      j: () => cW
    });
    var mW = OW(27);
    const EW = "touchSprintChanged";
    let NW = !0;

    function PW() {
      return NW
    }

    function LW(WW) {
      WW !== NW && (NW = WW, mW.l.iZ(EW, WW))
    }

    function cW(WW, iW) {
      return null !== WW && null !== iW && WW > iW
    }
  },
  10006: (WW, iW, OW) => {
    function mW(WW, iW) {
      return !WW.hidden && (iW || !WW.isRewardedAd)
    }

    function EW(WW) {
      return "object" === typeof WW ? WW.option : WW
    }

    function NW(WW, iW) {
      var OW;
      if ("dropdown" === (null === (OW = WW.userInput) || void 0 === OW ? void 0 : OW.type) && "object" === typeof WW.userInput.dropdownOptions[0]) {
        for (const OW of WW.userInput.dropdownOptions)
          if (EW(OW) === iW) return "object" === typeof OW ? OW.cost : WW.cost;
        console.error("Didn't find matching option for dropdown item. Item:", WW, "input:", iW)
      }
      return WW.cost
    }

    function PW(WW, iW, OW) {
      var mW;
      const EW = null !== (mW = OW.excludedPlayers) && void 0 !== mW ? mW : [iW];
      return WW.filter((WW => !EW.includes(WW)))
    }
    OW.d(iW, {
      b: () => NW,
      c: () => EW,
      d: () => PW,
      g: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);