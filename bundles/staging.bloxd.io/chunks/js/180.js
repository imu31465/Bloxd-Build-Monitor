export const id = 180;
export const ids = [180];
export const modules = {
  10058: (dd, Od, md) => {
    md.d(Od, {
      d: () => ud,
      g: () => rd
    });
    var Wd = md(66),
      Fd = md(32),
      Rd = md(3510),
      Xd = md(4627),
      Kd = md(10064);
    const hd = 6,
      vd = 4,
      Qd = ["HudMove-inventory", "HudLocked-inventory"];

    function td(dd) {
      let {
        left: Od,
        right: md,
        height: Wd,
        rowTop: Fd,
        besideBottom: Rd,
        obstacles: Xd
      } = dd;
      const Kd = Xd.filter((dd => dd.left < md + hd && dd.right > Od - hd));
      let Qd = Rd;
      for (let hd = 0; hd <= Kd.length; hd++) {
        const dd = Kd.filter((dd => dd.top < Qd + vd && dd.bottom > Qd - Wd - vd));
        if (0 === dd.length) break;
        Qd = Math.min(...dd.map((dd => dd.top))) - vd
      }
      return Qd === Rd ? null : Math.ceil(Fd - Qd)
    }

    function od(dd) {
      return Array.from(dd.children).filter((dd => !dd.classList.contains("HotBarRow")))
    }

    function Nd(dd) {
      return function(dd) {
        const Od = [],
          md = (dd, Wd) => {
            const Fd = dd.getBoundingClientRect();
            if (Fd.width > 0 && Fd.height > 0) Od.push(dd);
            else if (Wd < 2)
              for (const Od of Array.from(dd.children)) md(Od, Wd + 1)
          };
        for (const Wd of dd) md(Wd, 0);
        return Od
      }(od(dd).flatMap((dd => dd.classList.contains("AuraBarWrapper") ? [] : dd.classList.contains("BottomScreenStatBarList") ? Array.from(dd.children) : [dd]))).filter((dd => !dd.matches(qd)))
    }
    const qd = "[data-over-keys]",
      Hd = 8;

    function yd(dd, Od, md) {
      const Wd = (dd.top + dd.bottom) / 2;
      let Fd = dd.bottom;
      for (let Xd = 0; Xd <= Od.length; Xd++) {
        const md = Fd - (dd.bottom - dd.top),
          Rd = Od.filter((Od => Od.left < dd.right && Od.right > dd.left && Od.top < Fd + Hd && Od.bottom > md));
        if (0 === Rd.length) break;
        const Xd = Math.min(...Rd.map((dd => dd.top)));
        if (Xd < Wd) return 0;
        Fd = Xd - Hd
      }
      const Rd = Math.ceil(dd.bottom - Fd);
      return dd.top - Rd < md ? 0 : Rd
    }

    function bd(dd, Od) {
      var md;
      const Wd = null === (md = dd.querySelector(":scope > .AuraBarWrapper")) || void 0 === md ? void 0 : md.getBoundingClientRect();
      return (Wd && Wd.height > 0 ? Wd.top : Od) - vd
    }
    const Td = ".BottomScreenMessage, [role='status']";

    function pd(dd, Od, md, Wd, Fd) {
      const Rd = dd => dd.map((dd => dd.getBoundingClientRect())),
        Xd = td({
          ...md,
          obstacles: Rd(md.obstacles.filter((dd => !dd.matches(Td))))
        }),
        Kd = Od.ownerDocument.defaultView,
        hd = `${null===Kd||void 0===Kd?void 0:Kd.innerWidth}x${null===Kd||void 0===Kd?void 0:Kd.innerHeight}:${Wd}:${Math.round(md.rowTop)}`,
        vd = dd.get(Od),
        Qd = (null === vd || void 0 === vd ? void 0 : vd.at) === hd ? (od = vd.rise, Nd = Xd, null === od ? Nd : null === Nd ? od : Math.max(od, Nd)) : Xd;
      var od, Nd;
      const qd = td({
        ...md,
        besideBottom: null === Qd ? md.besideBottom : md.rowTop - Qd,
        obstacles: Rd(md.obstacles)
      });
      return Fd && dd.set(Od, {
        at: hd,
        rise: Qd
      }), null !== qd && void 0 !== qd ? qd : Qd
    }

    function Yd(dd, Od, md, Wd) {
      dd.classList.toggle(Od, null !== Wd), null === Wd ? dd.style.removeProperty(md) : dd.style.setProperty(md, `${Wd}px`)
    }
    const gd = new WeakMap,
      wd = new WeakMap,
      Ed = "(orientation: portrait) and (max-width: 600px)";

    function Jd(dd, Od) {
      const md = dd.getBoundingClientRect();
      if (0 === md.width) return null;
      const Wd = [md, ...Array.from(dd.children).filter((dd => !(dd => Od.contains(dd.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(dd))).map((dd => dd.getBoundingClientRect())).filter((dd => dd.width > 0))];
      return {
        left: Math.min(...Wd.map((dd => dd.left))),
        top: Math.min(...Wd.map((dd => dd.top))),
        right: Math.max(...Wd.map((dd => dd.right))),
        bottom: Math.max(...Wd.map((dd => dd.bottom)))
      }
    }

    function Ud(dd) {
      let {
        slotsLeft: Od,
        slotsRight: md,
        width: Wd,
        zoneRight: Fd
      } = dd;
      const Rd = Math.max(0, Math.floor(md - Od - Wd));
      return null === Fd ? 0 : Math.min(Rd, Math.max(0, Math.ceil(Fd + hd - Od)))
    }

    function xd(dd) {
      var Od;
      const md = dd.getBoundingClientRect();
      if (0 === md.width) return null;
      const Wd = null === (Od = dd.parentElement) || void 0 === Od ? void 0 : Od.getBoundingClientRect();
      return Wd && Wd.width > 0 ? Math.min(md.right, Wd.left + Wd.width * Bd) : md.right
    }
    const Bd = .35,
      Sd = new WeakMap,
      sd = new WeakMap;

    function ud(dd) {
      Vd(dd) && Vd(dd),
        function(dd) {
          var Od, md;
          const Wd = dd.documentElement.classList;
          if (!Wd.contains("TouchHotbar") || !Wd.contains("TouchHotbarKeysAbove") || Qd.some((dd => Wd.contains(dd))) || !1 !== (null === (Od = dd.defaultView) || void 0 === Od || null === (md = Od.matchMedia) || void 0 === md ? void 0 : md.call(Od, Ed).matches)) return;
          const Fd = dd.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            Rd = null === Fd || void 0 === Fd ? void 0 : Fd.closest(".BottomMiddleElements"),
            Xd = null === Fd || void 0 === Fd ? void 0 : Fd.parentElement;
          if (!Fd || !Rd || !Xd || Rd.classList.contains("TouchInventoryOpen") || Fd.querySelector("[data-pressing]")) return;
          const Kd = Jd(Fd, Wd),
            hd = Xd.getBoundingClientRect().top,
            vd = Kd && pd(gd, Rd, {
              left: Kd.left,
              right: Kd.right,
              height: Kd.bottom - Kd.top,
              rowTop: hd,
              besideBottom: bd(Rd, hd),
              obstacles: Nd(Rd).filter((dd => !dd.classList.contains("BottomScreenMessage")))
            }, `${Math.round(Kd.left)}:${Math.round(Kd.right-Kd.left)}x${Math.round(Kd.bottom-Kd.top)}`, !0);
          wd.has(Rd) && wd.get(Rd) === vd || (Yd(Rd, "KeysAboveUp", "--touch-keys-above-rise", vd), wd.set(Rd, vd))
        }(dd),
        function(dd) {
          const Od = dd.querySelector(".BottomMiddleElements"),
            md = Od ? Array.from(Od.querySelectorAll(qd)) : [];
          if (0 === md.length || dd.querySelector(".HotBarContainer.Touch .TouchInventoryKey[data-pressing]")) return;
          const Wd = Array.from(dd.querySelectorAll(".HotBarContainer.Touch .TouchInventoryKey")).map(Kd.c).filter((dd => null !== dd));
          for (const Fd of md) {
            const dd = Fd.getBoundingClientRect(),
              Od = parseFloat(Fd.style.getPropertyValue("--over-keys-lift")) || 0,
              md = dd.width > 0 ? yd({
                left: dd.left,
                top: dd.top + Od,
                right: dd.right,
                bottom: dd.bottom + Od
              }, Wd, 0) : 0;
            md !== Od && (0 === md ? Fd.style.removeProperty("--over-keys-lift") : Fd.style.setProperty("--over-keys-lift", `${md}px`))
          }
        }(dd)
    }

    function Vd(dd) {
      var Od, md, Wd, Fd;
      const Rd = dd.documentElement.classList;
      if (!Rd.contains("TouchHotbar") || Rd.contains("TouchHotbarKeysAbove") || Qd.some((dd => Rd.contains(dd))) || null === (Od = dd.defaultView) || void 0 === Od || null === (md = Od.matchMedia) || void 0 === md || !md.call(Od, Ad).matches) return !1;
      const Xd = dd.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Kd = null === Xd || void 0 === Xd ? void 0 : Xd.parentElement,
        hd = null === Xd || void 0 === Xd ? void 0 : Xd.closest(".BottomMiddleElements"),
        vd = null === hd || void 0 === hd ? void 0 : hd.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Xd || !Kd || !hd || !vd || hd.classList.contains("TouchInventoryOpen")) return !1;
      const td = Xd.getBoundingClientRect();
      if (0 === td.width) return !1;
      const od = dd.querySelector(".JoystickZone"),
        qd = vd.getBoundingClientRect(),
        Hd = Kd.getBoundingClientRect().top,
        yd = Ud({
          slotsLeft: qd.left,
          slotsRight: qd.right,
          width: td.width,
          zoneRight: od ? xd(od) : null
        }),
        Td = Sd.get(hd),
        gd = qd.left + yd,
        wd = {
          shift: yd,
          rise: pd(sd, hd, {
            left: gd,
            right: gd + td.width,
            height: td.height,
            rowTop: Hd,
            besideBottom: bd(hd, Hd),
            obstacles: Nd(hd)
          }, `${yd}:${Math.round(td.width)}`, (null !== (Wd = null === Td || void 0 === Td ? void 0 : Td.shift) && void 0 !== Wd ? Wd : 0) === yd)
        };
      return (null === Td || void 0 === Td ? void 0 : Td.shift) !== wd.shift && hd.style.setProperty("--touch-shop-above-shift", `${wd.shift}px`), (null === Td || void 0 === Td ? void 0 : Td.rise) !== wd.rise && Yd(hd, "ShopAboveUp", "--touch-shop-above-rise", wd.rise), Sd.set(hd, wd), (null !== (Fd = null === Td || void 0 === Td ? void 0 : Td.shift) && void 0 !== Fd ? Fd : 0) !== wd.shift
    }
    const Ad = "(orientation: landscape) and (max-height: 500px)";

    function rd(dd, Od, md) {
      (0, Wd.useLayoutEffect)((() => {
        var Od;
        const Wd = null === (Od = dd.current) || void 0 === Od ? void 0 : Od.closest(".BottomMiddleElements");
        if (!Wd || md) return;
        const Kd = new ResizeObserver((() => {
            td(!1)
          })),
          hd = () => {
            Kd.disconnect();
            const dd = document.querySelector(".JoystickZone");
            for (const Od of [dd, Wd, Wd.querySelector(".HotBarGameItemsContainer"), ...Nd(Wd), ...Wd.querySelectorAll(qd)]) Od && Kd.observe(Od)
          };
        let vd = null,
          Qd = !1;
        const td = dd => {
            Qd ||= dd, vd ??= requestAnimationFrame((() => {
              vd = null, Qd && (Qd = !1, hd()), ud(document)
            }))
          },
          Hd = new MutationObserver((() => {
            td(!0)
          }));
        Hd.observe(Wd, {
          childList: !0
        });
        for (const dd of od(Wd)) Hd.observe(dd, {
          childList: !0,
          subtree: !0
        });
        ud(document), hd();
        const yd = () => {
            td(!0)
          },
          bd = [(0, Fd.l)(Rd.c, yd), (0, Fd.l)(Xd.d, yd)],
          Td = new MutationObserver((() => {
            td(!1)
          }));
        return dd.current && Td.observe(dd.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          Td.disconnect(), null !== vd && cancelAnimationFrame(vd), Kd.disconnect(), Hd.disconnect();
          for (const dd of bd) dd()
        }
      }), [dd, Od, md])
    }
  },
  10064: (dd, Od, md) => {
    md.d(Od, {
      c: () => td,
      d: () => yd
    });
    var Wd = md(66),
      Fd = md(32),
      Rd = md(10042),
      Xd = md(3510),
      Kd = md(10053),
      hd = md(10051),
      vd = md(4627);

    function Qd(dd) {
      const Od = dd.getBoundingClientRect();
      return Od.width > 0 && Od.height > 0 ? (0, Rd.l)(Od) : null
    }

    function td(dd) {
      const Od = dd.ownerDocument.documentElement.classList,
        md = dd.classList.contains("ShopKey") ? "HudHide-shop" : dd.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== md && (Od.contains(md) || Od.contains("HudHide-inventory")) ? null : Qd(dd)
    }

    function od(dd) {
      const Od = Qd(dd),
        md = dd.firstElementChild;
      if (null === Od) return null;
      const {
        x: Wd,
        y: Fd
      } = (0, Rd.e)(Od), Xd = md.offsetWidth / 2, Kd = md.offsetHeight / 2;
      return {
        left: Wd - Xd,
        top: Fd - Kd,
        right: Wd + Xd,
        bottom: Fd + Kd
      }
    }

    function Nd(dd, Od) {
      const md = dd.ownerDocument.createElement("div");
      md.className = `TouchSlotProbe TouchSlot${Od}`, dd.append(md);
      const Wd = Qd(md);
      return md.remove(), Wd
    }
    const qd = `.TouchInventoryKey, .TouchSprintKey, ${Xd.b}`;

    function Hd(dd, Od) {
      const md = Od.map((Od => ({
        slot: Od,
        face: Nd(dd, Od)
      })));
      if (md.every((dd => {
          let {
            face: Od
          } = dd;
          return null === Od
        }))) return null;
      return function(dd, Od) {
        const md = [...Od],
          Wd = [],
          Fd = [];
        for (const {
            face: Kd,
            slot: vd
          }
          of dd) null !== Kd && (md.some((dd => (0, Rd.s)(Kd, dd, hd.e))) ? Fd.push(vd) : (Wd.push(vd), md.push(Kd)));
        const Xd = [...Wd, ...Fd];
        return dd.map((dd => {
          let {
            slot: Od,
            face: md
          } = dd;
          return null === md ? Od : Xd.shift()
        }))
      }(md, [...[...dd.querySelectorAll(":scope > .TouchKeyHit")].filter((dd => dd.classList.contains("BoostKey") || !Od.some((Od => dd.classList.contains(`TouchSlot${Od}`))))).map(od), ...[...dd.ownerDocument.querySelectorAll(qd)].map(td)].filter((dd => null !== dd)))
    }

    function yd(dd, Od) {
      const [md, Rd] = (0, Wd.useState)((() => (0, Kd.l)(dd)));
      return (0, Wd.useLayoutEffect)((() => {
        var md;
        const Wd = Od.current;
        if (!Wd) return;
        const hd = (0, Kd.l)(dd),
          Qd = () => {
            const dd = Hd(Wd, hd);
            Rd((Od => {
              const md = null !== dd && void 0 !== dd ? dd : Od.length === hd.length ? Od : hd;
              return md.join() === Od.join() ? Od : md
            }))
          };
        Qd(), window.addEventListener("resize", Qd);
        const td = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(Qd);
        null === td || void 0 === td || td.observe(null !== (md = Wd.closest(".BottomRightElements")) && void 0 !== md ? md : Wd);
        const od = [(0, Fd.l)(Xd.c, Qd), (0, Fd.l)(vd.d, Qd), (0, Fd.l)(Xd.l, Qd)];
        return () => {
          window.removeEventListener("resize", Qd), null === td || void 0 === td || td.disconnect();
          for (const dd of od) dd()
        }
      }), [dd, Od]), md.length === (0, Kd.l)(dd).length ? md : (0, Kd.l)(dd)
    }
  },
  10042: (dd, Od, md) => {
    md.d(Od, {
      A: () => yd,
      C: () => td,
      D: () => hd,
      E: () => od,
      F: () => vd,
      H: () => qd,
      K: () => Rd,
      e: () => Fd,
      i: () => Kd,
      l: () => Wd,
      p: () => Hd,
      s: () => Nd,
      w: () => Qd,
      z: () => Xd
    });
    const Wd = dd => ({
      left: dd.left,
      top: dd.top,
      right: dd.right,
      bottom: dd.bottom
    });

    function Fd(dd) {
      return {
        x: (dd.left + dd.right) / 2,
        y: (dd.top + dd.bottom) / 2
      }
    }

    function Rd(dd) {
      return 0 === dd.length ? null : dd.reduce(((dd, Od) => ({
        left: Math.min(dd.left, Od.left),
        top: Math.min(dd.top, Od.top),
        right: Math.max(dd.right, Od.right),
        bottom: Math.max(dd.bottom, Od.bottom)
      })))
    }

    function Xd(dd, Od) {
      const md = Math.max(0, (Od - (dd.right - dd.left)) / 2),
        Wd = Math.max(0, (Od - (dd.bottom - dd.top)) / 2);
      return {
        left: dd.left - md,
        top: dd.top - Wd,
        right: dd.right + md,
        bottom: dd.bottom + Wd
      }
    }

    function Kd(dd, Od) {
      return Od.x >= dd.left && Od.x <= dd.right && Od.y >= dd.top && Od.y <= dd.bottom
    }

    function hd(dd, Od, md) {
      let Wd = null,
        Rd = 1 / 0;
      for (const {
          id: Fd,
          box: Xd
        }
        of Od) {
        const Od = (Xd.right - Xd.left) * (Xd.bottom - Xd.top);
        Kd(Xd, dd) && Od < Rd && (Rd = Od, Wd = Fd)
      }
      if (null !== Wd) return Wd;
      let hd = 1 / 0;
      for (const {
          id: vd,
          box: Qd
        }
        of Od) {
        if (!Kd(Xd(Qd, md), dd)) continue;
        const Od = Fd(Qd),
          Rd = Math.hypot(dd.x - Od.x, dd.y - Od.y);
        Rd < hd && (hd = Rd, Wd = vd)
      }
      return Wd
    }

    function vd(dd, Od, md) {
      return {
        left: md.left,
        top: md.top,
        right: dd - md.right,
        bottom: Od - md.bottom
      }
    }

    function Qd(dd, Od, md, Wd) {
      const Fd = (dd, Od, md) => Math.max(Math.min(Od, 0), Math.min(Math.max(md, 0), dd));
      return {
        x: Fd(Od, Wd.left - dd.left, Wd.right - dd.right),
        y: Fd(md, Wd.top - dd.top, Wd.bottom - dd.bottom)
      }
    }

    function td(dd, Od, md, Wd, Fd) {
      const Rd = dd.dx * Wd + Od,
        Xd = dd.dy * Fd + md,
        Kd = dd => Math.max(-1, Math.min(1, dd));
      return {
        dx: Kd(Rd / Wd),
        dy: Kd(Xd / Fd)
      }
    }

    function od(dd, Od, md, Wd) {
      return Od <= 0 || md <= 0 ? 1 : Math.max(.05, Math.min(1, dd / Od, Wd / md))
    }

    function Nd(dd, Od, md) {
      return Math.min(dd.right, Od.right) - Math.max(dd.left, Od.left) > md && Math.min(dd.bottom, Od.bottom) - Math.max(dd.top, Od.top) > md
    }

    function qd(dd, Od) {
      const md = (dd, Od, md, Wd) => Od - dd > Wd - md ? md - dd > Od - Wd ? Wd - Od : md - dd : dd < md ? md - dd : Od > Wd ? Wd - Od : 0;
      return {
        x: md(dd.left, dd.right, Od.left, Od.right),
        y: md(dd.top, dd.bottom, Od.top, Od.bottom)
      }
    }

    function Hd(dd, Od, md) {
      return Nd(dd, {
        left: 0,
        top: 0,
        right: Od,
        bottom: md
      }, 0)
    }

    function yd(dd, Od) {
      let {
        avoid: md = null,
        bounds: Wd = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Fd = 0, Rd = 1 / 0;
      return dd.forEach(((dd, Xd) => {
        const Kd = Od.filter((Od => Nd(dd, Od, 0))).length,
          hd = null !== Wd && (dd.left < Wd.left || dd.top < Wd.top || dd.right > Wd.right || dd.bottom > Wd.bottom),
          vd = Kd + (md && Nd(dd, md, 0) ? 1e3 : 0) + (hd ? 1e6 : 0);
        vd < Rd && (Fd = Xd, Rd = vd)
      })), Fd
    }
  },
  10034: (dd, Od, md) => {
    md.d(Od, {
      A: () => gd,
      C: () => vd,
      G: () => Nd,
      I: () => od,
      K: () => td,
      e: () => Kd,
      i: () => Yd,
      k: () => pd,
      n: () => Td,
      o: () => hd,
      s: () => qd,
      v: () => Qd,
      w: () => wd
    });
    var Wd = md(10042),
      Fd = md(3444);
    const Rd = {
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
        ...Object.fromEntries(Fd.B.map((dd => [dd, "menu"])))
      },
      Xd = dd => Fd.u.filter((Od => Rd[Od] === dd)),
      Kd = new Set(Xd("cluster")),
      hd = new Set(Xd("inventory")),
      vd = dd => "inventory" === dd || hd.has(dd),
      Qd = dd => {
        const Od = Rd[dd];
        return void 0 === Od ? [] : [Od, ...Qd(Od)]
      },
      td = dd => [dd, ...Qd(dd)],
      od = (dd, Od, md) => "shop" === dd && Od ? md("inventory") ? ["inventory"] : md("bag") ? [dd, "bag"] : [dd] : [dd],
      Nd = (dd, Od, md, Fd) => {
        const Rd = dd => {
          const Rd = Od[dd],
            {
              x: Xd,
              y: Kd
            } = Rd && Fd(dd) ? (0, Wd.H)(Rd, md) : {
              x: 0,
              y: 0
            };
          return Rd && {
            left: Rd.left + Xd,
            top: Rd.top + Kd,
            right: Rd.right + Xd,
            bottom: Rd.bottom + Kd
          }
        };
        return dd.flatMap((dd => {
          const Xd = Od[dd];
          if ("inventory" !== dd || !Xd || Xd.right - Xd.left <= md.right - md.left && Xd.bottom - Xd.top <= md.bottom - md.top) return [dd];
          const [Kd, hd] = [Rd("shop"), Rd("bag")];
          return Kd && hd && !(0, Wd.s)(Kd, hd, 0) ? ["shop", "bag"].filter(Fd) : [dd]
        }))
      },
      qd = new Map([
        ["cluster", Kd],
        ["inventory", hd]
      ]),
      Hd = ["cluster"],
      yd = [...Hd, ...Fd.u.filter((dd => !Hd.includes(dd) && !Rd[dd]))],
      bd = dd => [dd, ...Xd(dd).flatMap(bd)],
      Td = yd.flatMap(bd).map((dd => ({
        id: dd,
        label: `hudLayout:${dd}`,
        ...Fd.t[dd],
        parent: Rd[dd]
      }))),
      pd = Object.fromEntries(Td.map((dd => [dd.id, dd]))),
      Yd = "data-hud-el";

    function gd(dd, Od, md, Wd) {
      const Fd = md(function(dd, Od) {
          return "attack" !== dd || Od ? pd[dd].label : "hudLayout:attackContext"
        }(dd, Od)),
        Rd = Wd[dd];
      return Rd ? md("hudLayout:slotWithKey", {
        slot: Fd,
        key: Rd
      }) : Fd
    }

    function wd(dd, Od, md, Wd) {
      return dd.map((dd => gd(dd, Od, md, Wd))).join(", ")
    }
  },
  10053: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      g: () => Rd,
      k: () => Fd,
      l: () => Xd,
      n: () => od,
      p: () => vd,
      q: () => td,
      t: () => Qd,
      v: () => hd
    });
    var Wd = md(3444);
    const Fd = ["J", "C", "A", "P", "U", "X", "G", "Z", "D"],
      Rd = {
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

    function Xd(dd) {
      return dd ? ["X"] : ["P", "X"]
    }
    const Kd = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: Wd.B,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function hd(dd, Od, md) {
      const Wd = dd.querySelector(".InGameUi .TouchComponentsButtons");
      if (!Wd) return Kd;
      const Rd = {},
        Xd = {};
      for (const Kd of Fd) {
        const dd = Wd.querySelector(`.TouchSlot${Kd} > .TouchKey`);
        if (dd) {
          var hd, vd;
          Rd[Kd] = dd.cloneNode(!0);
          const Od = (null !== (hd = null === (vd = dd.querySelector(".TouchKeyLabel")) || void 0 === vd ? void 0 : vd.textContent) && void 0 !== hd ? hd : "").split(/\s+/).filter((dd => !/[\d\xd7]/.test(dd))).join(" ");
          Od && (Xd[Kd] = Od)
        }
      }
      const Qd = Od => {
          const md = dd.querySelector(`.InGameUi ${Od}`);
          return null !== md && !md.classList.contains("Hidden")
        },
        td = [...dd.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((dd => dd.cloneNode(!0)));
      return {
        faces: Object.keys(Rd).length > 0 ? Rd : null,
        names: Xd,
        shop: Qd(".TouchInventoryKey.ShopKey"),
        bag: Qd(".TouchInventoryKey.BagKey"),
        sprint: Qd(".TouchSprintHit"),
        items: td.length > 0 ? td : null,
        rowIcons: Od,
        pinnedIcons: md
      }
    }

    function vd(dd, Od) {
      const {
        faces: md
      } = dd;
      return null === md || Fd.some((dd => Rd[dd] === Od && void 0 !== md[dd]))
    }

    function Qd(dd, Od) {
      const md = {};
      for (const Wd of [...Xd(Od), "G"]) {
        const Od = dd.names[Wd];
        Od && (md[Rd[Wd]] = Od)
      }
      return md
    }

    function td(dd, Od) {
      const {
        faces: md
      } = dd;
      if (null === md) return [];
      const Wd = new Set(Object.keys(md).map((dd => Rd[dd])));
      return Xd(Od).filter((dd => !Wd.has(Rd[dd])))
    }

    function od(dd, Od) {
      dd.replaceChildren(...[...Od.childNodes].map((dd => dd.cloneNode(!0))))
    }
  },
  10051: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      g: () => Qd
    });
    var Wd = md(10042),
      Fd = md(10034),
      Rd = md(3444),
      Xd = md(3495);
    const Kd = 2,
      hd = new Set(["effects"]),
      vd = (dd, Od, md) => {
        const Wd = (0, Fd.v)(Od).includes(dd) ? dd : (0, Fd.v)(dd).includes(Od) ? Od : null;
        if (null === Wd || "joystick" === Wd || "chat" === Wd) return !1;
        const Kd = Wd === dd ? Od : dd;
        if ("menu" === Wd) return (0, Xd.y)(Kd, md.hudElements[Kd]);
        if ("hotbar" !== Wd || !(0, Fd.C)(Kd)) return !0;
        if ((0, Rd.H)(md.hudElements[Kd]) || (0, Rd.H)(md.hudElements.inventory)) return !1;
        return !(md.hudLocked.includes(Kd) || md.hudLocked.includes("inventory")) || (0, Rd.G)(md.hudElements.hotbar)
      };

    function Qd(dd, Od, md, Qd) {
      const td = dd => (0, Fd.K)(dd).some((dd => (0, Rd.s)(md.hudElements, dd) || (0, Xd.w)(dd, md, Qd)));
      if (td(dd) || hd.has(dd)) return [];
      const od = dd => {
          var Od, Wd;
          return "bag" === dd && 1 !== (null !== (Od = null === (Wd = md.hudElements.shop) || void 0 === Wd ? void 0 : Wd[2]) && void 0 !== Od ? Od : 1) || (0, Fd.K)(dd).some((dd => void 0 !== md.hudElements[dd]))
        },
        Nd = Fd.s.get(dd),
        qd = Od.filter((Od => {
          let {
            id: md
          } = Od;
          return Nd ? Nd.has(md) && !td(md) : md === dd
        })),
        Hd = new Set;
      for (const Fd of Od) Fd.id === dd || null !== Nd && void 0 !== Nd && Nd.has(Fd.id) || Hd.has(Fd.id) || td(Fd.id) || hd.has(Fd.id) || qd.some((dd => {
        let {
          id: Od,
          box: Rd
        } = dd;
        return !vd(Od, Fd.id, md) && (od(Od) || od(Fd.id)) && (0, Wd.s)(Rd, Fd.box, Kd)
      })) && Hd.add(Fd.id);
      return [...Hd]
    }
  },
  9805: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      f: () => Wd
    });
    const Wd = "controllerOpenKeyboard",
      Fd = "controllerKeyboardVisible"
  },
  9927: (dd, Od, md) => {
    md.d(Od, {
      d: () => bd,
      g: () => gd,
      i: () => Yd,
      m: () => pd,
      n: () => wd,
      p: () => Ed
    });
    var Wd = md(405),
      Fd = md(66),
      Rd = md(1566),
      Xd = md(1238),
      Kd = md(32),
      hd = md(46),
      vd = md(9920);
    const Qd = "quickChatPhrases",
      td = "quickChatCustomPhrasesChanged",
      od = {
        "quickChat:gg": "gg",
        "quickChat:hi": "hi",
        "quickChat:thanks": "thanks",
        "quickChat:gl": "gl",
        "quickChat:brb": "brb",
        "quickChat:yes": "yes",
        "quickChat:no": "no",
        "quickChat:help": "help"
      },
      Nd = dd => {
        if ("string" !== typeof dd) return null;
        const Od = dd.trim().slice(0, Wd.Xc).trim();
        return "" === Od || Od.startsWith("/") ? null : Od
      },
      qd = dd => {
        const Od = {};
        if (!Array.isArray(dd)) return Od;
        for (const md of dd) {
          if (!Array.isArray(md)) continue;
          const dd = vd.f.find((dd => od[dd] === md[0])),
            Wd = Nd(md[1]);
          void 0 !== dd && null !== Wd && (Od[dd] = Wd)
        }
        return Od
      };
    let Hd = qd(hd.k.getItem(Qd));
    const yd = () => {
      Hd = qd(hd.k.getItem(Qd))
    };
    "undefined" !== typeof window && window.addEventListener("storage", (dd => {
      dd.key !== hd.k.userKeyToStorageKey(Qd) && null !== dd.key || (yd(), Kd.j.lQ(td, Hd))
    }));
    const bd = () => Hd,
      Td = dd => {
        Hd = dd;
        const Od = (dd => vd.f.flatMap((Od => {
          const md = dd[Od];
          return void 0 === md ? [] : [
            [od[Od], md]
          ]
        })))(dd);
        0 === Od.length ? hd.k.removeItem(Qd) : hd.k.setItem(Qd, Od), Kd.j.lQ(td, dd)
      },
      pd = (dd, Od, md) => {
        const Wd = Nd(Od),
          Fd = {
            ...Hd
          };
        null === Wd || Wd === md ? delete Fd[dd] : Fd[dd] = Wd, Fd[dd] !== Hd[dd] && Td(Fd)
      },
      Yd = dd => {
        if (void 0 !== Hd[dd]) {
          const Od = {
            ...Hd
          };
          delete Od[dd], Td(Od)
        }
      },
      gd = () => {
        Object.keys(Hd).length > 0 && Td({})
      },
      wd = () => (0, Rd.i)(td, Hd),
      Ed = () => {
        const {
          t: dd
        } = (0, Xd.G)(), Od = wd();
        return (0, Fd.useMemo)((() => vd.f.map((md => {
          var Wd;
          return null !== (Wd = Od[md]) && void 0 !== Wd ? Wd : dd(md)
        }))), [dd, Od])
      }
  },
  9920: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      f: () => Wd,
      g: () => Fd
    });
    const Wd = ["quickChat:gg", "quickChat:hi", "quickChat:thanks", "quickChat:gl", "quickChat:brb", "quickChat:yes", "quickChat:no", "quickChat:help"];
    const Fd = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(dd) {
          return !(dd - this.lastSendMs < 2e3) && (this.lastSendMs = dd, !0)
        }
        nextClaimMs() {
          return this.lastSendMs + 2e3
        }
      },
      Rd = (dd, Od, md) => {
        if (!dd.startsWith("/")) return [];
        const Wd = [];
        for (let Fd = Od.length - 1; Fd >= 0 && Wd.length < md; Fd--) {
          const md = Od[Fd].trim();
          md.startsWith(dd) && md !== dd && !Wd.includes(md) && Wd.push(md)
        }
        return Wd
      }
  },
  10023: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      i: () => hd
    });
    var Wd = md(29),
      Fd = md(1415),
      Rd = md(107);
    const Xd = {
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

    function Kd() {
      return (0, Rd.isMobile)() && "function" === typeof navigator.vibrate
    }
    const hd = new class {
      constructor(dd) {
        this.deps = dd, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(dd, Od) {
        var md;
        if (!this.deps.enabled()) return;
        const Wd = Xd[dd],
          Fd = null !== Od && void 0 !== Od ? Od : Wd.pattern;
        if (null === Fd) return void console.warn("No vibration pattern for", dd);
        const Rd = this.deps.now();
        Rd - this.lastAnyAt < 40 && Wd.priority < this.playingPriority || Rd - (null !== (md = this.lastAt.get(dd)) && void 0 !== md ? md : -1 / 0) < Wd.minGapMs || Rd < this.playingUntil && Wd.priority < this.playingPriority || (this.lastAt.set(dd, Rd), this.lastAnyAt = Rd, this.playingUntil = Rd + Fd.reduce(((dd, Od) => dd + Od), 0), this.playingPriority = Wd.priority, this.deps.vibrate(Fd))
      }
    }({
      vibrate: dd => {
        navigator.vibrate([...dd])
      },
      now: () => performance.now(),
      enabled: () => Kd() && Wd.e.get("isTouchScreen") && Wd.e.get("clientEscMenuOptions").vibration && !(0, Fd.c)()
    })
  },
  10017: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      e: () => Xd,
      f: () => Kd,
      i: () => hd
    });
    var Wd = md(32);
    const Fd = "touchSprintChanged";
    let Rd = !0;

    function Xd() {
      return Rd
    }

    function Kd(dd) {
      dd !== Rd && (Rd = dd, Wd.j.lQ(Fd, dd))
    }

    function hd(dd, Od) {
      return null !== dd && null !== Od && dd > Od
    }
  },
  9911: (dd, Od, md) => {
    function Wd(dd, Od) {
      return !dd.hidden && (Od || !dd.isRewardedAd)
    }

    function Fd(dd) {
      return "object" === typeof dd ? dd.option : dd
    }

    function Rd(dd, Od) {
      var md;
      if ("dropdown" === (null === (md = dd.userInput) || void 0 === md ? void 0 : md.type) && "object" === typeof dd.userInput.dropdownOptions[0]) {
        for (const md of dd.userInput.dropdownOptions)
          if (Fd(md) === Od) return "object" === typeof md ? md.cost : dd.cost;
        console.error("Didn't find matching option for dropdown item. Item:", dd, "input:", Od)
      }
      return dd.cost
    }

    function Xd(dd, Od, md) {
      var Wd;
      const Fd = null !== (Wd = md.excludedPlayers) && void 0 !== Wd ? Wd : [Od];
      return dd.filter((dd => !Fd.includes(dd)))
    }
    md.d(Od, {
      b: () => Rd,
      c: () => Fd,
      d: () => Xd,
      f: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);