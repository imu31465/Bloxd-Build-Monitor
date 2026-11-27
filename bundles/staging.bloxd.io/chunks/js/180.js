export const id = 180;
export const ids = [180];
export const modules = {
  10262: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => OR,
      g: () => DR
    });
    var yR = GR(66),
      tR = GR(32),
      uR = GR(3593),
      ZR = GR(4717),
      qR = GR(10270);
    const iR = 6,
      fR = 4,
      VR = ["HudMove-inventory", "HudLocked-inventory"];

    function KR(RR) {
      let {
        left: JR,
        right: GR,
        height: yR,
        rowTop: tR,
        besideBottom: uR,
        obstacles: ZR
      } = RR;
      const qR = ZR.filter((RR => RR.left < GR + iR && RR.right > JR - iR));
      let VR = uR;
      for (let iR = 0; iR <= qR.length; iR++) {
        const RR = qR.filter((RR => RR.top < VR + fR && RR.bottom > VR - yR - fR));
        if (0 === RR.length) break;
        VR = Math.min(...RR.map((RR => RR.top))) - fR
      }
      return VR === uR ? null : Math.ceil(tR - VR)
    }

    function wR(RR) {
      return Array.from(RR.children).filter((RR => !RR.classList.contains("HotBarRow")))
    }

    function rR(RR) {
      return function(RR) {
        const JR = [],
          GR = (RR, yR) => {
            const tR = RR.getBoundingClientRect();
            if (tR.width > 0 && tR.height > 0) JR.push(RR);
            else if (yR < 2)
              for (const JR of Array.from(RR.children)) GR(JR, yR + 1)
          };
        for (const yR of RR) GR(yR, 0);
        return JR
      }(wR(RR).flatMap((RR => RR.classList.contains("AuraBarWrapper") ? [] : RR.classList.contains("BottomScreenStatBarList") ? Array.from(RR.children) : [RR]))).filter((RR => !RR.matches(eR)))
    }
    const eR = "[data-over-keys]",
      aR = 8;

    function LR(RR, JR, GR) {
      const yR = (RR.top + RR.bottom) / 2;
      let tR = RR.bottom;
      for (let ZR = 0; ZR <= JR.length; ZR++) {
        const GR = tR - (RR.bottom - RR.top),
          uR = JR.filter((JR => JR.left < RR.right && JR.right > RR.left && JR.top < tR + aR && JR.bottom > GR));
        if (0 === uR.length) break;
        const ZR = Math.min(...uR.map((RR => RR.top)));
        if (ZR < yR) return 0;
        tR = ZR - aR
      }
      const uR = Math.ceil(RR.bottom - tR);
      return RR.top - uR < GR ? 0 : uR
    }

    function nR(RR, JR) {
      var GR;
      const yR = null === (GR = RR.querySelector(":scope > .AuraBarWrapper")) || void 0 === GR ? void 0 : GR.getBoundingClientRect();
      return (yR && yR.height > 0 ? yR.top : JR) - fR
    }
    const UR = ".BottomScreenMessage, [role='status']";

    function WR(RR, JR, GR, yR, tR) {
      const uR = RR => RR.map((RR => RR.getBoundingClientRect())),
        ZR = KR({
          ...GR,
          obstacles: uR(GR.obstacles.filter((RR => !RR.matches(UR))))
        }),
        qR = JR.ownerDocument.defaultView,
        iR = `${null===qR||void 0===qR?void 0:qR.innerWidth}x${null===qR||void 0===qR?void 0:qR.innerHeight}:${yR}:${Math.round(GR.rowTop)}`,
        fR = RR.get(JR),
        VR = (null === fR || void 0 === fR ? void 0 : fR.at) === iR ? (wR = fR.rise, rR = ZR, null === wR ? rR : null === rR ? wR : Math.max(wR, rR)) : ZR;
      var wR, rR;
      const eR = KR({
        ...GR,
        besideBottom: null === VR ? GR.besideBottom : GR.rowTop - VR,
        obstacles: uR(GR.obstacles)
      });
      return tR && RR.set(JR, {
        at: iR,
        rise: VR
      }), null !== eR && void 0 !== eR ? eR : VR
    }

    function AR(RR, JR, GR, yR) {
      RR.classList.toggle(JR, null !== yR), null === yR ? RR.style.removeProperty(GR) : RR.style.setProperty(GR, `${yR}px`)
    }
    const CR = new WeakMap,
      XR = new WeakMap,
      MR = "(orientation: portrait) and (max-width: 600px)";

    function BR(RR, JR) {
      const GR = RR.getBoundingClientRect();
      if (0 === GR.width) return null;
      const yR = [GR, ...Array.from(RR.children).filter((RR => !(RR => JR.contains(RR.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(RR))).map((RR => RR.getBoundingClientRect())).filter((RR => RR.width > 0))];
      return {
        left: Math.min(...yR.map((RR => RR.left))),
        top: Math.min(...yR.map((RR => RR.top))),
        right: Math.max(...yR.map((RR => RR.right))),
        bottom: Math.max(...yR.map((RR => RR.bottom)))
      }
    }

    function lR(RR) {
      let {
        slotsLeft: JR,
        slotsRight: GR,
        width: yR,
        zoneRight: tR
      } = RR;
      const uR = Math.max(0, Math.floor(GR - JR - yR));
      return null === tR ? 0 : Math.min(uR, Math.max(0, Math.ceil(tR + iR - JR)))
    }

    function pR(RR) {
      var JR;
      const GR = RR.getBoundingClientRect();
      if (0 === GR.width) return null;
      const yR = null === (JR = RR.parentElement) || void 0 === JR ? void 0 : JR.getBoundingClientRect();
      return yR && yR.width > 0 ? Math.min(GR.right, yR.left + yR.width * gR) : GR.right
    }
    const gR = .35,
      bR = new WeakMap,
      vR = new WeakMap;

    function OR(RR) {
      xR(RR) && xR(RR),
        function(RR) {
          var JR, GR;
          const yR = RR.documentElement.classList;
          if (!yR.contains("TouchHotbar") || !yR.contains("TouchHotbarKeysAbove") || VR.some((RR => yR.contains(RR))) || !1 !== (null === (JR = RR.defaultView) || void 0 === JR || null === (GR = JR.matchMedia) || void 0 === GR ? void 0 : GR.call(JR, MR).matches)) return;
          const tR = RR.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            uR = null === tR || void 0 === tR ? void 0 : tR.closest(".BottomMiddleElements"),
            ZR = null === tR || void 0 === tR ? void 0 : tR.parentElement;
          if (!tR || !uR || !ZR || uR.classList.contains("TouchInventoryOpen") || tR.querySelector("[data-pressing]")) return;
          const qR = BR(tR, yR),
            iR = ZR.getBoundingClientRect().top,
            fR = qR && WR(CR, uR, {
              left: qR.left,
              right: qR.right,
              height: qR.bottom - qR.top,
              rowTop: iR,
              besideBottom: nR(uR, iR),
              obstacles: rR(uR).filter((RR => !RR.classList.contains("BottomScreenMessage")))
            }, `${Math.round(qR.left)}:${Math.round(qR.right-qR.left)}x${Math.round(qR.bottom-qR.top)}`, !0);
          XR.has(uR) && XR.get(uR) === fR || (AR(uR, "KeysAboveUp", "--touch-keys-above-rise", fR), XR.set(uR, fR))
        }(RR),
        function(RR) {
          const JR = RR.querySelector(".BottomMiddleElements"),
            GR = JR ? Array.from(JR.querySelectorAll(eR)) : [];
          if (0 === GR.length || RR.querySelector(".HotBarContainer.Touch .TouchInventoryKey[data-pressing]")) return;
          const yR = Array.from(RR.querySelectorAll(".HotBarContainer.Touch .TouchInventoryKey")).map(qR.d).filter((RR => null !== RR));
          for (const tR of GR) {
            const RR = tR.getBoundingClientRect(),
              JR = parseFloat(tR.style.getPropertyValue("--over-keys-lift")) || 0,
              GR = RR.width > 0 ? LR({
                left: RR.left,
                top: RR.top + JR,
                right: RR.right,
                bottom: RR.bottom + JR
              }, yR, 0) : 0;
            GR !== JR && (0 === GR ? tR.style.removeProperty("--over-keys-lift") : tR.style.setProperty("--over-keys-lift", `${GR}px`))
          }
        }(RR)
    }

    function xR(RR) {
      var JR, GR, yR, tR;
      const uR = RR.documentElement.classList;
      if (!uR.contains("TouchHotbar") || uR.contains("TouchHotbarKeysAbove") || VR.some((RR => uR.contains(RR))) || null === (JR = RR.defaultView) || void 0 === JR || null === (GR = JR.matchMedia) || void 0 === GR || !GR.call(JR, NR).matches) return !1;
      const ZR = RR.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        qR = null === ZR || void 0 === ZR ? void 0 : ZR.parentElement,
        iR = null === ZR || void 0 === ZR ? void 0 : ZR.closest(".BottomMiddleElements"),
        fR = null === iR || void 0 === iR ? void 0 : iR.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!ZR || !qR || !iR || !fR || iR.classList.contains("TouchInventoryOpen")) return !1;
      const KR = ZR.getBoundingClientRect();
      if (0 === KR.width) return !1;
      const wR = RR.querySelector(".JoystickZone"),
        eR = fR.getBoundingClientRect(),
        aR = qR.getBoundingClientRect().top,
        LR = lR({
          slotsLeft: eR.left,
          slotsRight: eR.right,
          width: KR.width,
          zoneRight: wR ? pR(wR) : null
        }),
        UR = bR.get(iR),
        CR = eR.left + LR,
        XR = {
          shift: LR,
          rise: WR(vR, iR, {
            left: CR,
            right: CR + KR.width,
            height: KR.height,
            rowTop: aR,
            besideBottom: nR(iR, aR),
            obstacles: rR(iR)
          }, `${LR}:${Math.round(KR.width)}`, (null !== (yR = null === UR || void 0 === UR ? void 0 : UR.shift) && void 0 !== yR ? yR : 0) === LR)
        };
      return (null === UR || void 0 === UR ? void 0 : UR.shift) !== XR.shift && iR.style.setProperty("--touch-shop-above-shift", `${XR.shift}px`), (null === UR || void 0 === UR ? void 0 : UR.rise) !== XR.rise && AR(iR, "ShopAboveUp", "--touch-shop-above-rise", XR.rise), bR.set(iR, XR), (null !== (tR = null === UR || void 0 === UR ? void 0 : UR.shift) && void 0 !== tR ? tR : 0) !== XR.shift
    }
    const NR = "(orientation: landscape) and (max-height: 500px)";

    function DR(RR, JR, GR) {
      (0, yR.useLayoutEffect)((() => {
        var JR;
        const yR = null === (JR = RR.current) || void 0 === JR ? void 0 : JR.closest(".BottomMiddleElements");
        if (!yR || GR) return;
        const qR = new ResizeObserver((() => {
            KR(!1)
          })),
          iR = () => {
            qR.disconnect();
            const RR = document.querySelector(".JoystickZone");
            for (const JR of [RR, yR, yR.querySelector(".HotBarGameItemsContainer"), ...rR(yR), ...yR.querySelectorAll(eR)]) JR && qR.observe(JR)
          };
        let fR = null,
          VR = !1;
        const KR = RR => {
            VR ||= RR, fR ??= requestAnimationFrame((() => {
              fR = null, VR && (VR = !1, iR()), OR(document)
            }))
          },
          aR = new MutationObserver((() => {
            KR(!0)
          }));
        aR.observe(yR, {
          childList: !0
        });
        for (const RR of wR(yR)) aR.observe(RR, {
          childList: !0,
          subtree: !0
        });
        OR(document), iR();
        const LR = () => {
            KR(!0)
          },
          nR = [(0, tR.q)(uR.h, LR), (0, tR.q)(ZR.e, LR)],
          UR = new MutationObserver((() => {
            KR(!1)
          }));
        return RR.current && UR.observe(RR.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          UR.disconnect(), null !== fR && cancelAnimationFrame(fR), qR.disconnect(), aR.disconnect();
          for (const RR of nR) RR()
        }
      }), [RR, JR, GR])
    }
  },
  10270: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => KR,
      e: () => LR
    });
    var yR = GR(66),
      tR = GR(32),
      uR = GR(10247),
      ZR = GR(3593),
      qR = GR(10260),
      iR = GR(10253),
      fR = GR(4717);

    function VR(RR) {
      const JR = RR.getBoundingClientRect();
      return JR.width > 0 && JR.height > 0 ? (0, uR.d)(JR) : null
    }

    function KR(RR) {
      const JR = RR.ownerDocument.documentElement.classList,
        GR = RR.classList.contains("ShopKey") ? "HudHide-shop" : RR.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== GR && (JR.contains(GR) || JR.contains("HudHide-inventory")) ? null : VR(RR)
    }

    function wR(RR) {
      const JR = VR(RR),
        GR = RR.firstElementChild;
      if (null === JR) return null;
      const {
        x: yR,
        y: tR
      } = (0, uR.b)(JR), ZR = GR.offsetWidth / 2, qR = GR.offsetHeight / 2;
      return {
        left: yR - ZR,
        top: tR - qR,
        right: yR + ZR,
        bottom: tR + qR
      }
    }

    function rR(RR, JR) {
      const GR = RR.ownerDocument.createElement("div");
      GR.className = `TouchSlotProbe TouchSlot${JR}`, RR.append(GR);
      const yR = VR(GR);
      return GR.remove(), yR
    }
    const eR = `.TouchInventoryKey, .TouchSprintKey, ${ZR.e}`;

    function aR(RR, JR) {
      const GR = JR.map((JR => ({
        slot: JR,
        face: rR(RR, JR)
      })));
      if (GR.every((RR => {
          let {
            face: JR
          } = RR;
          return null === JR
        }))) return null;
      return function(RR, JR) {
        const GR = [...JR],
          yR = [],
          tR = [];
        for (const {
            face: qR,
            slot: fR
          }
          of RR) null !== qR && (GR.some((RR => (0, uR.j)(qR, RR, iR.c))) ? tR.push(fR) : (yR.push(fR), GR.push(qR)));
        const ZR = [...yR, ...tR];
        return RR.map((RR => {
          let {
            slot: JR,
            face: GR
          } = RR;
          return null === GR ? JR : ZR.shift()
        }))
      }(GR, [...[...RR.querySelectorAll(":scope > .TouchKeyHit")].filter((RR => RR.classList.contains("BoostKey") || !JR.some((JR => RR.classList.contains(`TouchSlot${JR}`))))).map(wR), ...[...RR.ownerDocument.querySelectorAll(eR)].map(KR)].filter((RR => null !== RR)))
    }

    function LR(RR, JR) {
      const [GR, uR] = (0, yR.useState)((() => (0, qR.l)(RR)));
      return (0, yR.useLayoutEffect)((() => {
        var GR;
        const yR = JR.current;
        if (!yR) return;
        const iR = (0, qR.l)(RR),
          VR = () => {
            const RR = aR(yR, iR);
            uR((JR => {
              const GR = null !== RR && void 0 !== RR ? RR : JR.length === iR.length ? JR : iR;
              return GR.join() === JR.join() ? JR : GR
            }))
          };
        VR(), window.addEventListener("resize", VR);
        const KR = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(VR);
        null === KR || void 0 === KR || KR.observe(null !== (GR = yR.closest(".BottomRightElements")) && void 0 !== GR ? GR : yR);
        const wR = [(0, tR.q)(ZR.h, VR), (0, tR.q)(fR.e, VR), (0, tR.q)(ZR.x, VR)];
        return () => {
          window.removeEventListener("resize", VR), null === KR || void 0 === KR || KR.disconnect();
          for (const RR of wR) RR()
        }
      }), [RR, JR]), GR.length === (0, qR.l)(RR).length ? GR : (0, qR.l)(RR)
    }
  },
  10247: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => uR,
      b: () => tR,
      c: () => qR,
      d: () => yR,
      f: () => aR,
      j: () => rR,
      l: () => VR,
      n: () => ZR,
      o: () => LR,
      p: () => KR,
      s: () => iR,
      u: () => wR,
      y: () => fR,
      z: () => eR
    });
    const yR = RR => ({
      left: RR.left,
      top: RR.top,
      right: RR.right,
      bottom: RR.bottom
    });

    function tR(RR) {
      return {
        x: (RR.left + RR.right) / 2,
        y: (RR.top + RR.bottom) / 2
      }
    }

    function uR(RR) {
      return 0 === RR.length ? null : RR.reduce(((RR, JR) => ({
        left: Math.min(RR.left, JR.left),
        top: Math.min(RR.top, JR.top),
        right: Math.max(RR.right, JR.right),
        bottom: Math.max(RR.bottom, JR.bottom)
      })))
    }

    function ZR(RR, JR) {
      const GR = Math.max(0, (JR - (RR.right - RR.left)) / 2),
        yR = Math.max(0, (JR - (RR.bottom - RR.top)) / 2);
      return {
        left: RR.left - GR,
        top: RR.top - yR,
        right: RR.right + GR,
        bottom: RR.bottom + yR
      }
    }

    function qR(RR, JR) {
      return JR.x >= RR.left && JR.x <= RR.right && JR.y >= RR.top && JR.y <= RR.bottom
    }

    function iR(RR, JR, GR) {
      let yR = null,
        uR = 1 / 0;
      for (const {
          id: tR,
          box: ZR
        }
        of JR) {
        const JR = (ZR.right - ZR.left) * (ZR.bottom - ZR.top);
        qR(ZR, RR) && JR < uR && (uR = JR, yR = tR)
      }
      if (null !== yR) return yR;
      let iR = 1 / 0;
      for (const {
          id: fR,
          box: VR
        }
        of JR) {
        if (!qR(ZR(VR, GR), RR)) continue;
        const JR = tR(VR),
          uR = Math.hypot(RR.x - JR.x, RR.y - JR.y);
        uR < iR && (iR = uR, yR = fR)
      }
      return yR
    }

    function fR(RR, JR, GR) {
      return {
        left: GR.left,
        top: GR.top,
        right: RR - GR.right,
        bottom: JR - GR.bottom
      }
    }

    function VR(RR, JR, GR, yR) {
      const tR = (RR, JR, GR) => Math.max(Math.min(JR, 0), Math.min(Math.max(GR, 0), RR));
      return {
        x: tR(JR, yR.left - RR.left, yR.right - RR.right),
        y: tR(GR, yR.top - RR.top, yR.bottom - RR.bottom)
      }
    }

    function KR(RR, JR, GR, yR, tR) {
      const uR = RR.dx * yR + JR,
        ZR = RR.dy * tR + GR,
        qR = RR => Math.max(-1, Math.min(1, RR));
      return {
        dx: qR(uR / yR),
        dy: qR(ZR / tR)
      }
    }

    function wR(RR, JR, GR, yR) {
      return JR <= 0 || GR <= 0 ? 1 : Math.max(.05, Math.min(1, RR / JR, yR / GR))
    }

    function rR(RR, JR, GR) {
      return Math.min(RR.right, JR.right) - Math.max(RR.left, JR.left) > GR && Math.min(RR.bottom, JR.bottom) - Math.max(RR.top, JR.top) > GR
    }

    function eR(RR, JR) {
      const GR = (RR, JR, GR, yR) => JR - RR > yR - GR ? GR - RR > JR - yR ? yR - JR : GR - RR : RR < GR ? GR - RR : JR > yR ? yR - JR : 0;
      return {
        x: GR(RR.left, RR.right, JR.left, JR.right),
        y: GR(RR.top, RR.bottom, JR.top, JR.bottom)
      }
    }

    function aR(RR, JR, GR) {
      return rR(RR, {
        left: 0,
        top: 0,
        right: JR,
        bottom: GR
      }, 0)
    }

    function LR(RR, JR) {
      let {
        avoid: GR = null,
        bounds: yR = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, tR = 0, uR = 1 / 0;
      return RR.forEach(((RR, ZR) => {
        const qR = JR.filter((JR => rR(RR, JR, 0))).length,
          iR = null !== yR && (RR.left < yR.left || RR.top < yR.top || RR.right > yR.right || RR.bottom > yR.bottom),
          fR = qR + (GR && rR(RR, GR, 0) ? 1e3 : 0) + (iR ? 1e6 : 0);
        fR < uR && (tR = ZR, uR = fR)
      })), tR
    }
  },
  10244: (RR, JR, GR) => {
    GR.d(JR, {
      C: () => fR,
      F: () => rR,
      I: () => wR,
      J: () => KR,
      b: () => qR,
      e: () => AR,
      i: () => WR,
      m: () => UR,
      p: () => iR,
      q: () => eR,
      u: () => VR,
      x: () => XR,
      z: () => CR
    });
    var yR = GR(10247),
      tR = GR(3505);
    const uR = {
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
        ...Object.fromEntries(tR.H.map((RR => [RR, "menu"])))
      },
      ZR = RR => tR.A.filter((JR => uR[JR] === RR)),
      qR = new Set(ZR("cluster")),
      iR = new Set(ZR("inventory")),
      fR = RR => "inventory" === RR || iR.has(RR),
      VR = RR => {
        const JR = uR[RR];
        return void 0 === JR ? [] : [JR, ...VR(JR)]
      },
      KR = RR => [RR, ...VR(RR)],
      wR = (RR, JR, GR) => "shop" === RR && JR ? GR("inventory") ? ["inventory"] : GR("bag") ? [RR, "bag"] : [RR] : [RR],
      rR = (RR, JR, GR, tR) => {
        const uR = RR => {
          const uR = JR[RR],
            {
              x: ZR,
              y: qR
            } = uR && tR(RR) ? (0, yR.z)(uR, GR) : {
              x: 0,
              y: 0
            };
          return uR && {
            left: uR.left + ZR,
            top: uR.top + qR,
            right: uR.right + ZR,
            bottom: uR.bottom + qR
          }
        };
        return RR.flatMap((RR => {
          const ZR = JR[RR];
          if ("inventory" !== RR || !ZR || ZR.right - ZR.left <= GR.right - GR.left && ZR.bottom - ZR.top <= GR.bottom - GR.top) return [RR];
          const [qR, iR] = [uR("shop"), uR("bag")];
          return qR && iR && !(0, yR.j)(qR, iR, 0) ? ["shop", "bag"].filter(tR) : [RR]
        }))
      },
      eR = new Map([
        ["cluster", qR],
        ["inventory", iR]
      ]),
      aR = ["cluster"],
      LR = [...aR, ...tR.A.filter((RR => !aR.includes(RR) && !uR[RR]))],
      nR = RR => [RR, ...ZR(RR).flatMap(nR)],
      UR = LR.flatMap(nR).map((RR => ({
        id: RR,
        label: `hudLayout:${RR}`,
        ...tR.y[RR],
        parent: uR[RR]
      }))),
      WR = Object.fromEntries(UR.map((RR => [RR.id, RR]))),
      AR = "data-hud-el";

    function CR(RR, JR, GR, yR) {
      const tR = GR(function(RR, JR) {
          return "attack" !== RR || JR ? WR[RR].label : "hudLayout:attackContext"
        }(RR, JR)),
        uR = yR[RR];
      return uR ? GR("hudLayout:slotWithKey", {
        slot: tR,
        key: uR
      }) : tR
    }

    function XR(RR, JR, GR, yR) {
      return RR.map((RR => CR(RR, JR, GR, yR))).join(", ")
    }
  },
  10260: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      g: () => uR,
      j: () => tR,
      l: () => ZR,
      p: () => wR,
      r: () => fR,
      s: () => KR,
      u: () => VR,
      v: () => iR
    });
    var yR = GR(3505);
    const tR = ["J", "C", "A", "P", "U", "X", "G", "Z", "D"],
      uR = {
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

    function ZR(RR) {
      return RR ? ["X"] : ["P", "X"]
    }
    const qR = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: yR.H,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function iR(RR, JR, GR) {
      const yR = RR.querySelector(".InGameUi .TouchComponentsButtons");
      if (!yR) return qR;
      const uR = {},
        ZR = {};
      for (const qR of tR) {
        const RR = yR.querySelector(`.TouchSlot${qR} > .TouchKey`);
        if (RR) {
          var iR, fR;
          uR[qR] = RR.cloneNode(!0);
          const JR = (null !== (iR = null === (fR = RR.querySelector(".TouchKeyLabel")) || void 0 === fR ? void 0 : fR.textContent) && void 0 !== iR ? iR : "").split(/\s+/).filter((RR => !/[\d\xd7]/.test(RR))).join(" ");
          JR && (ZR[qR] = JR)
        }
      }
      const VR = JR => {
          const GR = RR.querySelector(`.InGameUi ${JR}`);
          return null !== GR && !GR.classList.contains("Hidden")
        },
        KR = [...RR.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((RR => RR.cloneNode(!0)));
      return {
        faces: Object.keys(uR).length > 0 ? uR : null,
        names: ZR,
        shop: VR(".TouchInventoryKey.ShopKey"),
        bag: VR(".TouchInventoryKey.BagKey"),
        sprint: VR(".TouchSprintHit"),
        items: KR.length > 0 ? KR : null,
        rowIcons: JR,
        pinnedIcons: GR
      }
    }

    function fR(RR, JR) {
      const {
        faces: GR
      } = RR;
      return null === GR || tR.some((RR => uR[RR] === JR && void 0 !== GR[RR]))
    }

    function VR(RR, JR) {
      const GR = {};
      for (const yR of [...ZR(JR), "G"]) {
        const JR = RR.names[yR];
        JR && (GR[uR[yR]] = JR)
      }
      return GR
    }

    function KR(RR, JR) {
      const {
        faces: GR
      } = RR;
      if (null === GR) return [];
      const yR = new Set(Object.keys(GR).map((RR => uR[RR])));
      return ZR(JR).filter((RR => !yR.has(uR[RR])))
    }

    function wR(RR, JR) {
      RR.replaceChildren(...[...JR.childNodes].map((RR => RR.cloneNode(!0))))
    }
  },
  10253: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      d: () => VR
    });
    var yR = GR(10247),
      tR = GR(10244),
      uR = GR(3505),
      ZR = GR(3573);
    const qR = 2,
      iR = new Set(["effects"]),
      fR = (RR, JR, GR) => {
        const yR = (0, tR.u)(JR).includes(RR) ? RR : (0, tR.u)(RR).includes(JR) ? JR : null;
        if (null === yR || "joystick" === yR || "chat" === yR) return !1;
        const qR = yR === RR ? JR : RR;
        if ("menu" === yR) return (0, ZR.E)(qR, GR.hudElements[qR]);
        if ("hotbar" !== yR || !(0, tR.C)(qR)) return !0;
        if ((0, uR.O)(GR.hudElements[qR]) || (0, uR.O)(GR.hudElements.inventory)) return !1;
        return !(GR.hudLocked.includes(qR) || GR.hudLocked.includes("inventory")) || (0, uR.K)(GR.hudElements.hotbar)
      };

    function VR(RR, JR, GR, VR) {
      const KR = RR => (0, tR.J)(RR).some((RR => (0, uR.u)(GR.hudElements, RR) || (0, ZR.A)(RR, GR, VR)));
      if (KR(RR) || iR.has(RR)) return [];
      const wR = RR => {
          var JR, yR;
          return "bag" === RR && 1 !== (null !== (JR = null === (yR = GR.hudElements.shop) || void 0 === yR ? void 0 : yR[2]) && void 0 !== JR ? JR : 1) || (0, tR.J)(RR).some((RR => void 0 !== GR.hudElements[RR]))
        },
        rR = tR.q.get(RR),
        eR = JR.filter((JR => {
          let {
            id: GR
          } = JR;
          return rR ? rR.has(GR) && !KR(GR) : GR === RR
        })),
        aR = new Set;
      for (const tR of JR) tR.id === RR || null !== rR && void 0 !== rR && rR.has(tR.id) || aR.has(tR.id) || KR(tR.id) || iR.has(tR.id) || eR.some((RR => {
        let {
          id: JR,
          box: uR
        } = RR;
        return !fR(JR, tR.id, GR) && (wR(JR) || wR(tR.id)) && (0, yR.j)(uR, tR.box, qR)
      })) && aR.add(tR.id);
      return [...aR]
    }
  },
  10001: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      e: () => yR
    });
    const yR = "controllerOpenKeyboard",
      tR = "controllerKeyboardVisible"
  },
  10136: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => nR,
      f: () => CR,
      j: () => AR,
      n: () => WR,
      r: () => XR,
      t: () => MR
    });
    var yR = GR(377),
      tR = GR(66),
      uR = GR(1581),
      ZR = GR(1270),
      qR = GR(32),
      iR = GR(46),
      fR = GR(10127);
    const VR = "quickChatPhrases",
      KR = "quickChatCustomPhrasesChanged",
      wR = {
        "quickChat:gg": "gg",
        "quickChat:hi": "hi",
        "quickChat:thanks": "thanks",
        "quickChat:gl": "gl",
        "quickChat:brb": "brb",
        "quickChat:yes": "yes",
        "quickChat:no": "no",
        "quickChat:help": "help"
      },
      rR = RR => {
        if ("string" !== typeof RR) return null;
        const JR = RR.trim().slice(0, yR.Yc).trim();
        return "" === JR || JR.startsWith("/") ? null : JR
      },
      eR = RR => {
        const JR = {};
        if (!Array.isArray(RR)) return JR;
        for (const GR of RR) {
          if (!Array.isArray(GR)) continue;
          const RR = fR.e.find((RR => wR[RR] === GR[0])),
            yR = rR(GR[1]);
          void 0 !== RR && null !== yR && (JR[RR] = yR)
        }
        return JR
      };
    let aR = eR(iR.i.getItem(VR));
    const LR = () => {
      aR = eR(iR.i.getItem(VR))
    };
    "undefined" !== typeof window && window.addEventListener("storage", (RR => {
      RR.key !== iR.i.userKeyToStorageKey(VR) && null !== RR.key || (LR(), qR.n.JK(KR, aR))
    }));
    const nR = () => aR,
      UR = RR => {
        aR = RR;
        const JR = (RR => fR.e.flatMap((JR => {
          const GR = RR[JR];
          return void 0 === GR ? [] : [
            [wR[JR], GR]
          ]
        })))(RR);
        0 === JR.length ? iR.i.removeItem(VR) : iR.i.setItem(VR, JR), qR.n.JK(KR, RR)
      },
      WR = (RR, JR, GR) => {
        const yR = rR(JR),
          tR = {
            ...aR
          };
        null === yR || yR === GR ? delete tR[RR] : tR[RR] = yR, tR[RR] !== aR[RR] && UR(tR)
      },
      AR = RR => {
        if (void 0 !== aR[RR]) {
          const JR = {
            ...aR
          };
          delete JR[RR], UR(JR)
        }
      },
      CR = () => {
        Object.keys(aR).length > 0 && UR({})
      },
      XR = () => (0, uR.h)(KR, aR),
      MR = () => {
        const {
          t: RR
        } = (0, ZR.A)(), JR = XR();
        return (0, tR.useMemo)((() => fR.e.map((GR => {
          var yR;
          return null !== (yR = JR[GR]) && void 0 !== yR ? yR : RR(GR)
        }))), [RR, JR])
      }
  },
  10127: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      e: () => yR,
      h: () => tR
    });
    const yR = ["quickChat:gg", "quickChat:hi", "quickChat:thanks", "quickChat:gl", "quickChat:brb", "quickChat:yes", "quickChat:no", "quickChat:help"];
    const tR = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(RR) {
          return !(RR - this.lastSendMs < 2e3) && (this.lastSendMs = RR, !0)
        }
        nextClaimMs() {
          return this.lastSendMs + 2e3
        }
      },
      uR = (RR, JR, GR) => {
        if (!RR.startsWith("/")) return [];
        const yR = [];
        for (let tR = JR.length - 1; tR >= 0 && yR.length < GR; tR--) {
          const GR = JR[tR].trim();
          GR.startsWith(RR) && GR !== RR && !yR.includes(GR) && yR.push(GR)
        }
        return yR
      }
  },
  10238: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => iR
    });
    var yR = GR(25),
      tR = GR(1449),
      uR = GR(103);
    const ZR = {
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

    function qR() {
      return (0, uR.isMobile)() && "function" === typeof navigator.vibrate
    }
    const iR = new class {
      constructor(RR) {
        this.deps = RR, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(RR, JR) {
        var GR;
        if (!this.deps.enabled()) return;
        const yR = ZR[RR],
          tR = null !== JR && void 0 !== JR ? JR : yR.pattern;
        if (null === tR) return void console.warn("No vibration pattern for", RR);
        const uR = this.deps.now();
        uR - this.lastAnyAt < 40 && yR.priority < this.playingPriority || uR - (null !== (GR = this.lastAt.get(RR)) && void 0 !== GR ? GR : -1 / 0) < yR.minGapMs || uR < this.playingUntil && yR.priority < this.playingPriority || (this.lastAt.set(RR, uR), this.lastAnyAt = uR, this.playingUntil = uR + tR.reduce(((RR, JR) => RR + JR), 0), this.playingPriority = yR.priority, this.deps.vibrate(tR))
      }
    }({
      vibrate: RR => {
        navigator.vibrate([...RR])
      },
      now: () => performance.now(),
      enabled: () => qR() && yR.d.get("isTouchScreen") && yR.d.get("clientEscMenuOptions").vibration && !(0, tR.g)()
    })
  },
  10234: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      g: () => ZR,
      j: () => qR,
      l: () => iR
    });
    var yR = GR(32);
    const tR = "touchSprintChanged";
    let uR = !0;

    function ZR() {
      return uR
    }

    function qR(RR) {
      RR !== uR && (uR = RR, yR.n.JK(tR, RR))
    }

    function iR(RR, JR) {
      return null !== RR && null !== JR && RR > JR
    }
  },
  10125: (RR, JR, GR) => {
    function yR(RR, JR) {
      return !RR.hidden && (JR || !RR.isRewardedAd)
    }

    function tR(RR) {
      return "object" === typeof RR ? RR.option : RR
    }

    function uR(RR, JR) {
      var GR;
      if ("dropdown" === (null === (GR = RR.userInput) || void 0 === GR ? void 0 : GR.type) && "object" === typeof RR.userInput.dropdownOptions[0]) {
        for (const GR of RR.userInput.dropdownOptions)
          if (tR(GR) === JR) return "object" === typeof GR ? GR.cost : RR.cost;
        console.error("Didn't find matching option for dropdown item. Item:", RR, "input:", JR)
      }
      return RR.cost
    }

    function ZR(RR, JR, GR) {
      var yR;
      const tR = null !== (yR = GR.excludedPlayers) && void 0 !== yR ? yR : [JR];
      return RR.filter((RR => !tR.includes(RR)))
    }
    GR.d(JR, {
      e: () => uR,
      f: () => tR,
      j: () => ZR,
      n: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);