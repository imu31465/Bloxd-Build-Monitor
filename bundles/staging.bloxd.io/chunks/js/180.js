export const id = 180;
export const ids = [180];
export const modules = {
  10027: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Pr,
      i: () => Rr
    });
    var Zr = Qr(72),
      Wr = Qr(34),
      ar = Qr(3515),
      jr = Qr(4645),
      Ir = Qr(10034);
    const fr = 6,
      Er = 4,
      pr = ["HudMove-inventory", "HudLocked-inventory"];

    function xr(rr) {
      let {
        left: Sr,
        right: Qr,
        height: Zr,
        rowTop: Wr,
        besideBottom: ar,
        obstacles: jr
      } = rr;
      const Ir = jr.filter((rr => rr.left < Qr + fr && rr.right > Sr - fr));
      let pr = ar;
      for (let fr = 0; fr <= Ir.length; fr++) {
        const rr = Ir.filter((rr => rr.top < pr + Er && rr.bottom > pr - Zr - Er));
        if (0 === rr.length) break;
        pr = Math.min(...rr.map((rr => rr.top))) - Er
      }
      return pr === ar ? null : Math.ceil(Wr - pr)
    }

    function mr(rr) {
      return Array.from(rr.children).filter((rr => !rr.classList.contains("HotBarRow")))
    }

    function Nr(rr) {
      return function(rr) {
        const Sr = [],
          Qr = (rr, Zr) => {
            const Wr = rr.getBoundingClientRect();
            if (Wr.width > 0 && Wr.height > 0) Sr.push(rr);
            else if (Zr < 2)
              for (const Sr of Array.from(rr.children)) Qr(Sr, Zr + 1)
          };
        for (const Zr of rr) Qr(Zr, 0);
        return Sr
      }(mr(rr).flatMap((rr => rr.classList.contains("AuraBarWrapper") ? [] : rr.classList.contains("BottomScreenStatBarList") ? Array.from(rr.children) : [rr]))).filter((rr => !rr.matches(Ur)))
    }
    const Ur = "[data-over-keys]",
      tr = 8;

    function hr(rr, Sr, Qr) {
      const Zr = (rr.top + rr.bottom) / 2;
      let Wr = rr.bottom;
      for (let jr = 0; jr <= Sr.length; jr++) {
        const Qr = Wr - (rr.bottom - rr.top),
          ar = Sr.filter((Sr => Sr.left < rr.right && Sr.right > rr.left && Sr.top < Wr + tr && Sr.bottom > Qr));
        if (0 === ar.length) break;
        const jr = Math.min(...ar.map((rr => rr.top)));
        if (jr < Zr) return 0;
        Wr = jr - tr
      }
      const ar = Math.ceil(rr.bottom - Wr);
      return rr.top - ar < Qr ? 0 : ar
    }

    function zr(rr, Sr) {
      var Qr;
      const Zr = null === (Qr = rr.querySelector(":scope > .AuraBarWrapper")) || void 0 === Qr ? void 0 : Qr.getBoundingClientRect();
      return (Zr && Zr.height > 0 ? Zr.top : Sr) - Er
    }
    const Yr = ".BottomScreenMessage, [role='status']";

    function nr(rr, Sr, Qr, Zr, Wr) {
      const ar = rr => rr.map((rr => rr.getBoundingClientRect())),
        jr = xr({
          ...Qr,
          obstacles: ar(Qr.obstacles.filter((rr => !rr.matches(Yr))))
        }),
        Ir = Sr.ownerDocument.defaultView,
        fr = `${null===Ir||void 0===Ir?void 0:Ir.innerWidth}x${null===Ir||void 0===Ir?void 0:Ir.innerHeight}:${Zr}:${Math.round(Qr.rowTop)}`,
        Er = rr.get(Sr),
        pr = (null === Er || void 0 === Er ? void 0 : Er.at) === fr ? (mr = Er.rise, Nr = jr, null === mr ? Nr : null === Nr ? mr : Math.max(mr, Nr)) : jr;
      var mr, Nr;
      const Ur = xr({
        ...Qr,
        besideBottom: null === pr ? Qr.besideBottom : Qr.rowTop - pr,
        obstacles: ar(Qr.obstacles)
      });
      return Wr && rr.set(Sr, {
        at: fr,
        rise: pr
      }), null !== Ur && void 0 !== Ur ? Ur : pr
    }

    function er(rr, Sr, Qr, Zr) {
      rr.classList.toggle(Sr, null !== Zr), null === Zr ? rr.style.removeProperty(Qr) : rr.style.setProperty(Qr, `${Zr}px`)
    }
    const Kr = new WeakMap,
      yr = new WeakMap,
      Br = "(orientation: portrait) and (max-width: 600px)";

    function Tr(rr, Sr) {
      const Qr = rr.getBoundingClientRect();
      if (0 === Qr.width) return null;
      const Zr = [Qr, ...Array.from(rr.children).filter((rr => !(rr => Sr.contains(rr.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(rr))).map((rr => rr.getBoundingClientRect())).filter((rr => rr.width > 0))];
      return {
        left: Math.min(...Zr.map((rr => rr.left))),
        top: Math.min(...Zr.map((rr => rr.top))),
        right: Math.max(...Zr.map((rr => rr.right))),
        bottom: Math.max(...Zr.map((rr => rr.bottom)))
      }
    }

    function vr(rr) {
      let {
        slotsLeft: Sr,
        slotsRight: Qr,
        width: Zr,
        zoneRight: Wr
      } = rr;
      const ar = Math.max(0, Math.floor(Qr - Sr - Zr));
      return null === Wr ? 0 : Math.min(ar, Math.max(0, Math.ceil(Wr + fr - Sr)))
    }

    function Or(rr) {
      var Sr;
      const Qr = rr.getBoundingClientRect();
      if (0 === Qr.width) return null;
      const Zr = null === (Sr = rr.parentElement) || void 0 === Sr ? void 0 : Sr.getBoundingClientRect();
      return Zr && Zr.width > 0 ? Math.min(Qr.right, Zr.left + Zr.width * Lr) : Qr.right
    }
    const Lr = .35,
      lr = new WeakMap,
      Xr = new WeakMap;

    function Pr(rr) {
      Hr(rr) && Hr(rr),
        function(rr) {
          var Sr, Qr;
          const Zr = rr.documentElement.classList;
          if (!Zr.contains("TouchHotbar") || !Zr.contains("TouchHotbarKeysAbove") || pr.some((rr => Zr.contains(rr))) || !1 !== (null === (Sr = rr.defaultView) || void 0 === Sr || null === (Qr = Sr.matchMedia) || void 0 === Qr ? void 0 : Qr.call(Sr, Br).matches)) return;
          const Wr = rr.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            ar = null === Wr || void 0 === Wr ? void 0 : Wr.closest(".BottomMiddleElements"),
            jr = null === Wr || void 0 === Wr ? void 0 : Wr.parentElement;
          if (!Wr || !ar || !jr || ar.classList.contains("TouchInventoryOpen") || Wr.querySelector("[data-pressing]")) return;
          const Ir = Tr(Wr, Zr),
            fr = jr.getBoundingClientRect().top,
            Er = Ir && nr(Kr, ar, {
              left: Ir.left,
              right: Ir.right,
              height: Ir.bottom - Ir.top,
              rowTop: fr,
              besideBottom: zr(ar, fr),
              obstacles: Nr(ar).filter((rr => !rr.classList.contains("BottomScreenMessage")))
            }, `${Math.round(Ir.left)}:${Math.round(Ir.right-Ir.left)}x${Math.round(Ir.bottom-Ir.top)}`, !0);
          yr.has(ar) && yr.get(ar) === Er || (er(ar, "KeysAboveUp", "--touch-keys-above-rise", Er), yr.set(ar, Er))
        }(rr),
        function(rr) {
          const Sr = rr.querySelector(".BottomMiddleElements"),
            Qr = Sr ? Array.from(Sr.querySelectorAll(Ur)) : [];
          if (0 === Qr.length || rr.querySelector(".HotBarContainer.Touch .TouchInventoryKey[data-pressing]")) return;
          const Zr = Array.from(rr.querySelectorAll(".HotBarContainer.Touch .TouchInventoryKey")).map(Ir.e).filter((rr => null !== rr));
          for (const Wr of Qr) {
            const rr = Wr.getBoundingClientRect(),
              Sr = parseFloat(Wr.style.getPropertyValue("--over-keys-lift")) || 0,
              Qr = rr.width > 0 ? hr({
                left: rr.left,
                top: rr.top + Sr,
                right: rr.right,
                bottom: rr.bottom + Sr
              }, Zr, 0) : 0;
            Qr !== Sr && (0 === Qr ? Wr.style.removeProperty("--over-keys-lift") : Wr.style.setProperty("--over-keys-lift", `${Qr}px`))
          }
        }(rr)
    }

    function Hr(rr) {
      var Sr, Qr, Zr, Wr;
      const ar = rr.documentElement.classList;
      if (!ar.contains("TouchHotbar") || ar.contains("TouchHotbarKeysAbove") || pr.some((rr => ar.contains(rr))) || null === (Sr = rr.defaultView) || void 0 === Sr || null === (Qr = Sr.matchMedia) || void 0 === Qr || !Qr.call(Sr, qr).matches) return !1;
      const jr = rr.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Ir = null === jr || void 0 === jr ? void 0 : jr.parentElement,
        fr = null === jr || void 0 === jr ? void 0 : jr.closest(".BottomMiddleElements"),
        Er = null === fr || void 0 === fr ? void 0 : fr.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!jr || !Ir || !fr || !Er || fr.classList.contains("TouchInventoryOpen")) return !1;
      const xr = jr.getBoundingClientRect();
      if (0 === xr.width) return !1;
      const mr = rr.querySelector(".JoystickZone"),
        Ur = Er.getBoundingClientRect(),
        tr = Ir.getBoundingClientRect().top,
        hr = vr({
          slotsLeft: Ur.left,
          slotsRight: Ur.right,
          width: xr.width,
          zoneRight: mr ? Or(mr) : null
        }),
        Yr = lr.get(fr),
        Kr = Ur.left + hr,
        yr = {
          shift: hr,
          rise: nr(Xr, fr, {
            left: Kr,
            right: Kr + xr.width,
            height: xr.height,
            rowTop: tr,
            besideBottom: zr(fr, tr),
            obstacles: Nr(fr)
          }, `${hr}:${Math.round(xr.width)}`, (null !== (Zr = null === Yr || void 0 === Yr ? void 0 : Yr.shift) && void 0 !== Zr ? Zr : 0) === hr)
        };
      return (null === Yr || void 0 === Yr ? void 0 : Yr.shift) !== yr.shift && fr.style.setProperty("--touch-shop-above-shift", `${yr.shift}px`), (null === Yr || void 0 === Yr ? void 0 : Yr.rise) !== yr.rise && er(fr, "ShopAboveUp", "--touch-shop-above-rise", yr.rise), lr.set(fr, yr), (null !== (Wr = null === Yr || void 0 === Yr ? void 0 : Yr.shift) && void 0 !== Wr ? Wr : 0) !== yr.shift
    }
    const qr = "(orientation: landscape) and (max-height: 500px)";

    function Rr(rr, Sr, Qr) {
      (0, Zr.useLayoutEffect)((() => {
        var Sr;
        const Zr = null === (Sr = rr.current) || void 0 === Sr ? void 0 : Sr.closest(".BottomMiddleElements");
        if (!Zr || Qr) return;
        const Ir = new ResizeObserver((() => {
            xr(!1)
          })),
          fr = () => {
            Ir.disconnect();
            const rr = document.querySelector(".JoystickZone");
            for (const Sr of [rr, Zr, Zr.querySelector(".HotBarGameItemsContainer"), ...Nr(Zr), ...Zr.querySelectorAll(Ur)]) Sr && Ir.observe(Sr)
          };
        let Er = null,
          pr = !1;
        const xr = rr => {
            pr ||= rr, Er ??= requestAnimationFrame((() => {
              Er = null, pr && (pr = !1, fr()), Pr(document)
            }))
          },
          tr = new MutationObserver((() => {
            xr(!0)
          }));
        tr.observe(Zr, {
          childList: !0
        });
        for (const rr of mr(Zr)) tr.observe(rr, {
          childList: !0,
          subtree: !0
        });
        Pr(document), fr();
        const hr = () => {
            xr(!0)
          },
          zr = [(0, Wr.j)(ar.g, hr), (0, Wr.j)(jr.e, hr)],
          Yr = new MutationObserver((() => {
            xr(!1)
          }));
        return rr.current && Yr.observe(rr.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          Yr.disconnect(), null !== Er && cancelAnimationFrame(Er), Ir.disconnect(), tr.disconnect();
          for (const rr of zr) rr()
        }
      }), [rr, Sr, Qr])
    }
  },
  10034: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => xr,
      h: () => hr
    });
    var Zr = Qr(72),
      Wr = Qr(34),
      ar = Qr(10011),
      jr = Qr(3515),
      Ir = Qr(10024),
      fr = Qr(10016),
      Er = Qr(4645);

    function pr(rr) {
      const Sr = rr.getBoundingClientRect();
      return Sr.width > 0 && Sr.height > 0 ? (0, ar.m)(Sr) : null
    }

    function xr(rr) {
      const Sr = rr.ownerDocument.documentElement.classList,
        Qr = rr.classList.contains("ShopKey") ? "HudHide-shop" : rr.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== Qr && (Sr.contains(Qr) || Sr.contains("HudHide-inventory")) ? null : pr(rr)
    }

    function mr(rr) {
      const Sr = pr(rr),
        Qr = rr.firstElementChild;
      if (null === Sr) return null;
      const {
        x: Zr,
        y: Wr
      } = (0, ar.e)(Sr), jr = Qr.offsetWidth / 2, Ir = Qr.offsetHeight / 2;
      return {
        left: Zr - jr,
        top: Wr - Ir,
        right: Zr + jr,
        bottom: Wr + Ir
      }
    }

    function Nr(rr, Sr) {
      const Qr = rr.ownerDocument.createElement("div");
      Qr.className = `TouchSlotProbe TouchSlot${Sr}`, rr.append(Qr);
      const Zr = pr(Qr);
      return Qr.remove(), Zr
    }
    const Ur = `.TouchInventoryKey, .TouchSprintKey, ${jr.e}`;

    function tr(rr, Sr) {
      const Qr = Sr.map((Sr => ({
        slot: Sr,
        face: Nr(rr, Sr)
      })));
      if (Qr.every((rr => {
          let {
            face: Sr
          } = rr;
          return null === Sr
        }))) return null;
      return function(rr, Sr) {
        const Qr = [...Sr],
          Zr = [],
          Wr = [];
        for (const {
            face: Ir,
            slot: Er
          }
          of rr) null !== Ir && (Qr.some((rr => (0, ar.r)(Ir, rr, fr.d))) ? Wr.push(Er) : (Zr.push(Er), Qr.push(Ir)));
        const jr = [...Zr, ...Wr];
        return rr.map((rr => {
          let {
            slot: Sr,
            face: Qr
          } = rr;
          return null === Qr ? Sr : jr.shift()
        }))
      }(Qr, [...[...rr.querySelectorAll(":scope > .TouchKeyHit")].filter((rr => rr.classList.contains("BoostKey") || !Sr.some((Sr => rr.classList.contains(`TouchSlot${Sr}`))))).map(mr), ...[...rr.ownerDocument.querySelectorAll(Ur)].map(xr)].filter((rr => null !== rr)))
    }

    function hr(rr, Sr) {
      const [Qr, ar] = (0, Zr.useState)((() => (0, Ir.n)(rr)));
      return (0, Zr.useLayoutEffect)((() => {
        var Qr;
        const Zr = Sr.current;
        if (!Zr) return;
        const fr = (0, Ir.n)(rr),
          pr = () => {
            const rr = tr(Zr, fr);
            ar((Sr => {
              const Qr = null !== rr && void 0 !== rr ? rr : Sr.length === fr.length ? Sr : fr;
              return Qr.join() === Sr.join() ? Sr : Qr
            }))
          };
        pr(), window.addEventListener("resize", pr);
        const xr = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(pr);
        null === xr || void 0 === xr || xr.observe(null !== (Qr = Zr.closest(".BottomRightElements")) && void 0 !== Qr ? Qr : Zr);
        const mr = [(0, Wr.j)(jr.g, pr), (0, Wr.j)(Er.e, pr), (0, Wr.j)(jr.u, pr)];
        return () => {
          window.removeEventListener("resize", pr), null === xr || void 0 === xr || xr.disconnect();
          for (const rr of mr) rr()
        }
      }), [rr, Sr]), Qr.length === (0, Ir.n)(rr).length ? Qr : (0, Ir.n)(rr)
    }
  },
  10011: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => fr,
      D: () => mr,
      G: () => Er,
      K: () => Ur,
      M: () => ar,
      e: () => Wr,
      i: () => Ir,
      m: () => Zr,
      q: () => tr,
      r: () => Nr,
      t: () => pr,
      u: () => jr,
      w: () => hr,
      z: () => xr
    });
    const Zr = rr => ({
      left: rr.left,
      top: rr.top,
      right: rr.right,
      bottom: rr.bottom
    });

    function Wr(rr) {
      return {
        x: (rr.left + rr.right) / 2,
        y: (rr.top + rr.bottom) / 2
      }
    }

    function ar(rr) {
      return 0 === rr.length ? null : rr.reduce(((rr, Sr) => ({
        left: Math.min(rr.left, Sr.left),
        top: Math.min(rr.top, Sr.top),
        right: Math.max(rr.right, Sr.right),
        bottom: Math.max(rr.bottom, Sr.bottom)
      })))
    }

    function jr(rr, Sr) {
      const Qr = Math.max(0, (Sr - (rr.right - rr.left)) / 2),
        Zr = Math.max(0, (Sr - (rr.bottom - rr.top)) / 2);
      return {
        left: rr.left - Qr,
        top: rr.top - Zr,
        right: rr.right + Qr,
        bottom: rr.bottom + Zr
      }
    }

    function Ir(rr, Sr) {
      return Sr.x >= rr.left && Sr.x <= rr.right && Sr.y >= rr.top && Sr.y <= rr.bottom
    }

    function fr(rr, Sr, Qr) {
      let Zr = null,
        ar = 1 / 0;
      for (const {
          id: Wr,
          box: jr
        }
        of Sr) {
        const Sr = (jr.right - jr.left) * (jr.bottom - jr.top);
        Ir(jr, rr) && Sr < ar && (ar = Sr, Zr = Wr)
      }
      if (null !== Zr) return Zr;
      let fr = 1 / 0;
      for (const {
          id: Er,
          box: pr
        }
        of Sr) {
        if (!Ir(jr(pr, Qr), rr)) continue;
        const Sr = Wr(pr),
          ar = Math.hypot(rr.x - Sr.x, rr.y - Sr.y);
        ar < fr && (fr = ar, Zr = Er)
      }
      return Zr
    }

    function Er(rr, Sr, Qr) {
      return {
        left: Qr.left,
        top: Qr.top,
        right: rr - Qr.right,
        bottom: Sr - Qr.bottom
      }
    }

    function pr(rr, Sr, Qr, Zr) {
      const Wr = (rr, Sr, Qr) => Math.max(Math.min(Sr, 0), Math.min(Math.max(Qr, 0), rr));
      return {
        x: Wr(Sr, Zr.left - rr.left, Zr.right - rr.right),
        y: Wr(Qr, Zr.top - rr.top, Zr.bottom - rr.bottom)
      }
    }

    function xr(rr, Sr, Qr, Zr, Wr) {
      const ar = rr.dx * Zr + Sr,
        jr = rr.dy * Wr + Qr,
        Ir = rr => Math.max(-1, Math.min(1, rr));
      return {
        dx: Ir(ar / Zr),
        dy: Ir(jr / Wr)
      }
    }

    function mr(rr, Sr, Qr, Zr) {
      return Sr <= 0 || Qr <= 0 ? 1 : Math.max(.05, Math.min(1, rr / Sr, Zr / Qr))
    }

    function Nr(rr, Sr, Qr) {
      return Math.min(rr.right, Sr.right) - Math.max(rr.left, Sr.left) > Qr && Math.min(rr.bottom, Sr.bottom) - Math.max(rr.top, Sr.top) > Qr
    }

    function Ur(rr, Sr) {
      const Qr = (rr, Sr, Qr, Zr) => Sr - rr > Zr - Qr ? Qr - rr > Sr - Zr ? Zr - Sr : Qr - rr : rr < Qr ? Qr - rr : Sr > Zr ? Zr - Sr : 0;
      return {
        x: Qr(rr.left, rr.right, Sr.left, Sr.right),
        y: Qr(rr.top, rr.bottom, Sr.top, Sr.bottom)
      }
    }

    function tr(rr, Sr, Qr) {
      return Nr(rr, {
        left: 0,
        top: 0,
        right: Sr,
        bottom: Qr
      }, 0)
    }

    function hr(rr, Sr) {
      let {
        avoid: Qr = null,
        bounds: Zr = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Wr = 0, ar = 1 / 0;
      return rr.forEach(((rr, jr) => {
        const Ir = Sr.filter((Sr => Nr(rr, Sr, 0))).length,
          fr = null !== Zr && (rr.left < Zr.left || rr.top < Zr.top || rr.right > Zr.right || rr.bottom > Zr.bottom),
          Er = Ir + (Qr && Nr(rr, Qr, 0) ? 1e3 : 0) + (fr ? 1e6 : 0);
        Er < ar && (Wr = jr, ar = Er)
      })), Wr
    }
  },
  10007: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => mr,
      D: () => xr,
      b: () => Ir,
      c: () => er,
      d: () => nr,
      f: () => Yr,
      h: () => fr,
      k: () => Ur,
      o: () => pr,
      s: () => yr,
      t: () => Kr,
      u: () => Er,
      x: () => Nr
    });
    var Zr = Qr(10011),
      Wr = Qr(3443);
    const ar = {
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
        ...Object.fromEntries(Wr.H.map((rr => [rr, "menu"])))
      },
      jr = rr => Wr.z.filter((Sr => ar[Sr] === rr)),
      Ir = new Set(jr("cluster")),
      fr = new Set(jr("inventory")),
      Er = rr => "inventory" === rr || fr.has(rr),
      pr = rr => {
        const Sr = ar[rr];
        return void 0 === Sr ? [] : [Sr, ...pr(Sr)]
      },
      xr = rr => [rr, ...pr(rr)],
      mr = (rr, Sr, Qr) => "shop" === rr && Sr ? Qr("inventory") ? ["inventory"] : Qr("bag") ? [rr, "bag"] : [rr] : [rr],
      Nr = (rr, Sr, Qr, Wr) => {
        const ar = rr => {
          const ar = Sr[rr],
            {
              x: jr,
              y: Ir
            } = ar && Wr(rr) ? (0, Zr.K)(ar, Qr) : {
              x: 0,
              y: 0
            };
          return ar && {
            left: ar.left + jr,
            top: ar.top + Ir,
            right: ar.right + jr,
            bottom: ar.bottom + Ir
          }
        };
        return rr.flatMap((rr => {
          const jr = Sr[rr];
          if ("inventory" !== rr || !jr || jr.right - jr.left <= Qr.right - Qr.left && jr.bottom - jr.top <= Qr.bottom - Qr.top) return [rr];
          const [Ir, fr] = [ar("shop"), ar("bag")];
          return Ir && fr && !(0, Zr.r)(Ir, fr, 0) ? ["shop", "bag"].filter(Wr) : [rr]
        }))
      },
      Ur = new Map([
        ["cluster", Ir],
        ["inventory", fr]
      ]),
      tr = ["cluster"],
      hr = [...tr, ...Wr.z.filter((rr => !tr.includes(rr) && !ar[rr]))],
      zr = rr => [rr, ...jr(rr).flatMap(zr)],
      Yr = hr.flatMap(zr).map((rr => ({
        id: rr,
        label: `hudLayout:${rr}`,
        ...Wr.x[rr],
        parent: ar[rr]
      }))),
      nr = Object.fromEntries(Yr.map((rr => [rr.id, rr]))),
      er = "data-hud-el";

    function Kr(rr, Sr, Qr, Zr) {
      const Wr = Qr(function(rr, Sr) {
          return "attack" !== rr || Sr ? nr[rr].label : "hudLayout:attackContext"
        }(rr, Sr)),
        ar = Zr[rr];
      return ar ? Qr("hudLayout:slotWithKey", {
        slot: Wr,
        key: ar
      }) : Wr
    }

    function yr(rr, Sr, Qr, Zr) {
      return rr.map((rr => Kr(rr, Sr, Qr, Zr))).join(", ")
    }
  },
  10024: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      i: () => ar,
      l: () => Wr,
      n: () => jr,
      p: () => mr,
      q: () => Er,
      t: () => xr,
      u: () => pr,
      v: () => fr
    });
    var Zr = Qr(3443);
    const Wr = ["J", "C", "A", "P", "U", "X", "G", "Z", "D"],
      ar = {
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

    function jr(rr) {
      return rr ? ["X"] : ["P", "X"]
    }
    const Ir = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: Zr.H,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function fr(rr, Sr, Qr) {
      const Zr = rr.querySelector(".InGameUi .TouchComponentsButtons");
      if (!Zr) return Ir;
      const ar = {},
        jr = {};
      for (const Ir of Wr) {
        const rr = Zr.querySelector(`.TouchSlot${Ir} > .TouchKey`);
        if (rr) {
          var fr, Er;
          ar[Ir] = rr.cloneNode(!0);
          const Sr = (null !== (fr = null === (Er = rr.querySelector(".TouchKeyLabel")) || void 0 === Er ? void 0 : Er.textContent) && void 0 !== fr ? fr : "").split(/\s+/).filter((rr => !/[\d\xd7]/.test(rr))).join(" ");
          Sr && (jr[Ir] = Sr)
        }
      }
      const pr = Sr => {
          const Qr = rr.querySelector(`.InGameUi ${Sr}`);
          return null !== Qr && !Qr.classList.contains("Hidden")
        },
        xr = [...rr.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((rr => rr.cloneNode(!0)));
      return {
        faces: Object.keys(ar).length > 0 ? ar : null,
        names: jr,
        shop: pr(".TouchInventoryKey.ShopKey"),
        bag: pr(".TouchInventoryKey.BagKey"),
        sprint: pr(".TouchSprintHit"),
        items: xr.length > 0 ? xr : null,
        rowIcons: Sr,
        pinnedIcons: Qr
      }
    }

    function Er(rr, Sr) {
      const {
        faces: Qr
      } = rr;
      return null === Qr || Wr.some((rr => ar[rr] === Sr && void 0 !== Qr[rr]))
    }

    function pr(rr, Sr) {
      const Qr = {};
      for (const Zr of [...jr(Sr), "G"]) {
        const Sr = rr.names[Zr];
        Sr && (Qr[ar[Zr]] = Sr)
      }
      return Qr
    }

    function xr(rr, Sr) {
      const {
        faces: Qr
      } = rr;
      if (null === Qr) return [];
      const Zr = new Set(Object.keys(Qr).map((rr => ar[rr])));
      return jr(Sr).filter((rr => !Zr.has(ar[rr])))
    }

    function mr(rr, Sr) {
      rr.replaceChildren(...[...Sr.childNodes].map((rr => rr.cloneNode(!0))))
    }
  },
  10016: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      g: () => pr
    });
    var Zr = Qr(10011),
      Wr = Qr(10007),
      ar = Qr(3443),
      jr = Qr(3499);
    const Ir = 2,
      fr = new Set(["effects"]),
      Er = (rr, Sr, Qr) => {
        const Zr = (0, Wr.o)(Sr).includes(rr) ? rr : (0, Wr.o)(rr).includes(Sr) ? Sr : null;
        if (null === Zr || "joystick" === Zr || "chat" === Zr) return !1;
        const Ir = Zr === rr ? Sr : rr;
        if ("menu" === Zr) return (0, jr.B)(Ir, Qr.hudElements[Ir]);
        if ("hotbar" !== Zr || !(0, Wr.u)(Ir)) return !0;
        if ((0, ar.O)(Qr.hudElements[Ir]) || (0, ar.O)(Qr.hudElements.inventory)) return !1;
        return !(Qr.hudLocked.includes(Ir) || Qr.hudLocked.includes("inventory")) || (0, ar.L)(Qr.hudElements.hotbar)
      };

    function pr(rr, Sr, Qr, pr) {
      const xr = rr => (0, Wr.D)(rr).some((rr => (0, ar.u)(Qr.hudElements, rr) || (0, jr.y)(rr, Qr, pr)));
      if (xr(rr) || fr.has(rr)) return [];
      const mr = rr => {
          var Sr, Zr;
          return "bag" === rr && 1 !== (null !== (Sr = null === (Zr = Qr.hudElements.shop) || void 0 === Zr ? void 0 : Zr[2]) && void 0 !== Sr ? Sr : 1) || (0, Wr.D)(rr).some((rr => void 0 !== Qr.hudElements[rr]))
        },
        Nr = Wr.k.get(rr),
        Ur = Sr.filter((Sr => {
          let {
            id: Qr
          } = Sr;
          return Nr ? Nr.has(Qr) && !xr(Qr) : Qr === rr
        })),
        tr = new Set;
      for (const Wr of Sr) Wr.id === rr || null !== Nr && void 0 !== Nr && Nr.has(Wr.id) || tr.has(Wr.id) || xr(Wr.id) || fr.has(Wr.id) || Ur.some((rr => {
        let {
          id: Sr,
          box: ar
        } = rr;
        return !Er(Sr, Wr.id, Qr) && (mr(Sr) || mr(Wr.id)) && (0, Zr.r)(ar, Wr.box, Ir)
      })) && tr.add(Wr.id);
      return [...tr]
    }
  },
  9769: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      f: () => Zr
    });
    const Zr = "controllerOpenKeyboard",
      Wr = "controllerKeyboardVisible"
  },
  9899: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => zr,
      f: () => Kr,
      i: () => er,
      l: () => nr,
      m: () => yr,
      p: () => Br
    });
    var Zr = Qr(379),
      Wr = Qr(72),
      ar = Qr(1573),
      jr = Qr(1251),
      Ir = Qr(34),
      fr = Qr(43),
      Er = Qr(9895);
    const pr = "quickChatPhrases",
      xr = "quickChatCustomPhrasesChanged",
      mr = {
        "quickChat:gg": "gg",
        "quickChat:hi": "hi",
        "quickChat:thanks": "thanks",
        "quickChat:gl": "gl",
        "quickChat:brb": "brb",
        "quickChat:yes": "yes",
        "quickChat:no": "no",
        "quickChat:help": "help"
      },
      Nr = rr => {
        if ("string" !== typeof rr) return null;
        const Sr = rr.trim().slice(0, Zr.Vc).trim();
        return "" === Sr || Sr.startsWith("/") ? null : Sr
      },
      Ur = rr => {
        const Sr = {};
        if (!Array.isArray(rr)) return Sr;
        for (const Qr of rr) {
          if (!Array.isArray(Qr)) continue;
          const rr = Er.c.find((rr => mr[rr] === Qr[0])),
            Zr = Nr(Qr[1]);
          void 0 !== rr && null !== Zr && (Sr[rr] = Zr)
        }
        return Sr
      };
    let tr = Ur(fr.j.getItem(pr));
    const hr = () => {
      tr = Ur(fr.j.getItem(pr))
    };
    "undefined" !== typeof window && window.addEventListener("storage", (rr => {
      rr.key !== fr.j.userKeyToStorageKey(pr) && null !== rr.key || (hr(), Ir.i.Jp(xr, tr))
    }));
    const zr = () => tr,
      Yr = rr => {
        tr = rr;
        const Sr = (rr => Er.c.flatMap((Sr => {
          const Qr = rr[Sr];
          return void 0 === Qr ? [] : [
            [mr[Sr], Qr]
          ]
        })))(rr);
        0 === Sr.length ? fr.j.removeItem(pr) : fr.j.setItem(pr, Sr), Ir.i.Jp(xr, rr)
      },
      nr = (rr, Sr, Qr) => {
        const Zr = Nr(Sr),
          Wr = {
            ...tr
          };
        null === Zr || Zr === Qr ? delete Wr[rr] : Wr[rr] = Zr, Wr[rr] !== tr[rr] && Yr(Wr)
      },
      er = rr => {
        if (void 0 !== tr[rr]) {
          const Sr = {
            ...tr
          };
          delete Sr[rr], Yr(Sr)
        }
      },
      Kr = () => {
        Object.keys(tr).length > 0 && Yr({})
      },
      yr = () => (0, ar.g)(xr, tr),
      Br = () => {
        const {
          t: rr
        } = (0, jr.E)(), Sr = yr();
        return (0, Wr.useMemo)((() => Er.c.map((Qr => {
          var Zr;
          return null !== (Zr = Sr[Qr]) && void 0 !== Zr ? Zr : rr(Qr)
        }))), [rr, Sr])
      }
  },
  9895: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      c: () => Zr,
      g: () => Wr
    });
    const Zr = ["quickChat:gg", "quickChat:hi", "quickChat:thanks", "quickChat:gl", "quickChat:brb", "quickChat:yes", "quickChat:no", "quickChat:help"];
    const Wr = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(rr) {
          return !(rr - this.lastSendMs < 2e3) && (this.lastSendMs = rr, !0)
        }
        nextClaimMs() {
          return this.lastSendMs + 2e3
        }
      },
      ar = (rr, Sr, Qr) => {
        if (!rr.startsWith("/")) return [];
        const Zr = [];
        for (let Wr = Sr.length - 1; Wr >= 0 && Zr.length < Qr; Wr--) {
          const Qr = Sr[Wr].trim();
          Qr.startsWith(rr) && Qr !== rr && !Zr.includes(Qr) && Zr.push(Qr)
        }
        return Zr
      }
  },
  1e4: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      f: () => fr
    });
    var Zr = Qr(26),
      Wr = Qr(1422),
      ar = Qr(109);
    const jr = {
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

    function Ir() {
      return (0, ar.isMobile)() && "function" === typeof navigator.vibrate
    }
    const fr = new class {
      constructor(rr) {
        this.deps = rr, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(rr, Sr) {
        var Qr;
        if (!this.deps.enabled()) return;
        const Zr = jr[rr],
          Wr = null !== Sr && void 0 !== Sr ? Sr : Zr.pattern;
        if (null === Wr) return void console.warn("No vibration pattern for", rr);
        const ar = this.deps.now();
        ar - this.lastAnyAt < 40 && Zr.priority < this.playingPriority || ar - (null !== (Qr = this.lastAt.get(rr)) && void 0 !== Qr ? Qr : -1 / 0) < Zr.minGapMs || ar < this.playingUntil && Zr.priority < this.playingPriority || (this.lastAt.set(rr, ar), this.lastAnyAt = ar, this.playingUntil = ar + Wr.reduce(((rr, Sr) => rr + Sr), 0), this.playingPriority = Zr.priority, this.deps.vibrate(Wr))
      }
    }({
      vibrate: rr => {
        navigator.vibrate([...rr])
      },
      now: () => performance.now(),
      enabled: () => Ir() && Zr.c.get("isTouchScreen") && Zr.c.get("clientEscMenuOptions").vibration && !(0, Wr.e)()
    })
  },
  9996: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      g: () => jr,
      i: () => Ir,
      j: () => fr
    });
    var Zr = Qr(34);
    const Wr = "touchSprintChanged";
    let ar = !0;

    function jr() {
      return ar
    }

    function Ir(rr) {
      rr !== ar && (ar = rr, Zr.i.Jp(Wr, rr))
    }

    function fr(rr, Sr) {
      return null !== rr && null !== Sr && rr > Sr
    }
  },
  9890: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return !rr.hidden && (Sr || !rr.isRewardedAd)
    }

    function Wr(rr) {
      return "object" === typeof rr ? rr.option : rr
    }

    function ar(rr, Sr) {
      var Qr;
      if ("dropdown" === (null === (Qr = rr.userInput) || void 0 === Qr ? void 0 : Qr.type) && "object" === typeof rr.userInput.dropdownOptions[0]) {
        for (const Qr of rr.userInput.dropdownOptions)
          if (Wr(Qr) === Sr) return "object" === typeof Qr ? Qr.cost : rr.cost;
        console.error("Didn't find matching option for dropdown item. Item:", rr, "input:", Sr)
      }
      return rr.cost
    }

    function jr(rr, Sr, Qr) {
      var Zr;
      const Wr = null !== (Zr = Qr.excludedPlayers) && void 0 !== Zr ? Zr : [Sr];
      return rr.filter((rr => !Wr.includes(rr)))
    }
    Qr.d(Sr, {
      e: () => ar,
      f: () => Wr,
      j: () => jr,
      m: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);