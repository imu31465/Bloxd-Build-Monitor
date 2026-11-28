export const id = 180;
export const ids = [180];
export const modules = {
  10248: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Yb,
      e: () => Ab
    });
    var eb = Mb(64),
      Hb = Mb(29),
      pb = Mb(3642),
      Vb = Mb(4792),
      gb = Mb(10251);
    const lb = 6,
      Lb = 4,
      Ib = ["HudMove-inventory", "HudLocked-inventory"];

    function Ob(bb) {
      let {
        left: wb,
        right: Mb,
        height: eb,
        rowTop: Hb,
        besideBottom: pb,
        obstacles: Vb
      } = bb;
      const gb = Vb.filter((bb => bb.left < Mb + lb && bb.right > wb - lb));
      let Ib = pb;
      for (let lb = 0; lb <= gb.length; lb++) {
        const bb = gb.filter((bb => bb.top < Ib + Lb && bb.bottom > Ib - eb - Lb));
        if (0 === bb.length) break;
        Ib = Math.min(...bb.map((bb => bb.top))) - Lb
      }
      return Ib === pb ? null : Math.ceil(Hb - Ib)
    }

    function Ub(bb) {
      return Array.from(bb.children).filter((bb => !bb.classList.contains("HotBarRow")))
    }

    function tb(bb) {
      return function(bb) {
        const wb = [],
          Mb = (bb, eb) => {
            const Hb = bb.getBoundingClientRect();
            if (Hb.width > 0 && Hb.height > 0) wb.push(bb);
            else if (eb < 2)
              for (const wb of Array.from(bb.children)) Mb(wb, eb + 1)
          };
        for (const eb of bb) Mb(eb, 0);
        return wb
      }(Ub(bb).flatMap((bb => bb.classList.contains("AuraBarWrapper") ? [] : bb.classList.contains("BottomScreenStatBarList") ? Array.from(bb.children) : [bb]))).filter((bb => !bb.matches(Cb)))
    }
    const Cb = "[data-over-keys]",
      Eb = 8;

    function Fb(bb, wb, Mb) {
      const eb = (bb.top + bb.bottom) / 2;
      let Hb = bb.bottom;
      for (let Vb = 0; Vb <= wb.length; Vb++) {
        const Mb = Hb - (bb.bottom - bb.top),
          pb = wb.filter((wb => wb.left < bb.right && wb.right > bb.left && wb.top < Hb + Eb && wb.bottom > Mb));
        if (0 === pb.length) break;
        const Vb = Math.min(...pb.map((bb => bb.top)));
        if (Vb < eb) return 0;
        Hb = Vb - Eb
      }
      const pb = Math.ceil(bb.bottom - Hb);
      return bb.top - pb < Mb ? 0 : pb
    }

    function Bb(bb, wb) {
      var Mb;
      const eb = null === (Mb = bb.querySelector(":scope > .AuraBarWrapper")) || void 0 === Mb ? void 0 : Mb.getBoundingClientRect();
      return (eb && eb.height > 0 ? eb.top : wb) - Lb
    }
    const sb = ".BottomScreenMessage, [role='status']";

    function mb(bb, wb, Mb, eb, Hb) {
      const pb = bb => bb.map((bb => bb.getBoundingClientRect())),
        Vb = Ob({
          ...Mb,
          obstacles: pb(Mb.obstacles.filter((bb => !bb.matches(sb))))
        }),
        gb = wb.ownerDocument.defaultView,
        lb = `${null===gb||void 0===gb?void 0:gb.innerWidth}x${null===gb||void 0===gb?void 0:gb.innerHeight}:${eb}:${Math.round(Mb.rowTop)}`,
        Lb = bb.get(wb),
        Ib = (null === Lb || void 0 === Lb ? void 0 : Lb.at) === lb ? (Ub = Lb.rise, tb = Vb, null === Ub ? tb : null === tb ? Ub : Math.max(Ub, tb)) : Vb;
      var Ub, tb;
      const Cb = Ob({
        ...Mb,
        besideBottom: null === Ib ? Mb.besideBottom : Mb.rowTop - Ib,
        obstacles: pb(Mb.obstacles)
      });
      return Hb && bb.set(wb, {
        at: lb,
        rise: Ib
      }), null !== Cb && void 0 !== Cb ? Cb : Ib
    }

    function hb(bb, wb, Mb, eb) {
      bb.classList.toggle(wb, null !== eb), null === eb ? bb.style.removeProperty(Mb) : bb.style.setProperty(Mb, `${eb}px`)
    }
    const zb = new WeakMap,
      Xb = new WeakMap,
      xb = "(orientation: portrait) and (max-width: 600px)";

    function jb(bb, wb) {
      const Mb = bb.getBoundingClientRect();
      if (0 === Mb.width) return null;
      const eb = [Mb, ...Array.from(bb.children).filter((bb => !(bb => wb.contains(bb.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(bb))).map((bb => bb.getBoundingClientRect())).filter((bb => bb.width > 0))];
      return {
        left: Math.min(...eb.map((bb => bb.left))),
        top: Math.min(...eb.map((bb => bb.top))),
        right: Math.max(...eb.map((bb => bb.right))),
        bottom: Math.max(...eb.map((bb => bb.bottom)))
      }
    }

    function Kb(bb) {
      let {
        slotsLeft: wb,
        slotsRight: Mb,
        width: eb,
        zoneRight: Hb
      } = bb;
      const pb = Math.max(0, Math.floor(Mb - wb - eb));
      return null === Hb ? 0 : Math.min(pb, Math.max(0, Math.ceil(Hb + lb - wb)))
    }

    function rb(bb) {
      var wb;
      const Mb = bb.getBoundingClientRect();
      if (0 === Mb.width) return null;
      const eb = null === (wb = bb.parentElement) || void 0 === wb ? void 0 : wb.getBoundingClientRect();
      return eb && eb.width > 0 ? Math.min(Mb.right, eb.left + eb.width * Rb) : Mb.right
    }
    const Rb = .35,
      Db = new WeakMap,
      cb = new WeakMap;

    function Yb(bb) {
      Zb(bb) && Zb(bb),
        function(bb) {
          var wb, Mb;
          const eb = bb.documentElement.classList;
          if (!eb.contains("TouchHotbar") || !eb.contains("TouchHotbarKeysAbove") || Ib.some((bb => eb.contains(bb))) || !1 !== (null === (wb = bb.defaultView) || void 0 === wb || null === (Mb = wb.matchMedia) || void 0 === Mb ? void 0 : Mb.call(wb, xb).matches)) return;
          const Hb = bb.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
            pb = null === Hb || void 0 === Hb ? void 0 : Hb.closest(".BottomMiddleElements"),
            Vb = null === Hb || void 0 === Hb ? void 0 : Hb.parentElement;
          if (!Hb || !pb || !Vb || pb.classList.contains("TouchInventoryOpen") || Hb.querySelector("[data-pressing]")) return;
          const gb = jb(Hb, eb),
            lb = Vb.getBoundingClientRect().top,
            Lb = gb && mb(zb, pb, {
              left: gb.left,
              right: gb.right,
              height: gb.bottom - gb.top,
              rowTop: lb,
              besideBottom: Bb(pb, lb),
              obstacles: tb(pb).filter((bb => !bb.classList.contains("BottomScreenMessage")))
            }, `${Math.round(gb.left)}:${Math.round(gb.right-gb.left)}x${Math.round(gb.bottom-gb.top)}`, !0);
          Xb.has(pb) && Xb.get(pb) === Lb || (hb(pb, "KeysAboveUp", "--touch-keys-above-rise", Lb), Xb.set(pb, Lb))
        }(bb),
        function(bb) {
          const wb = bb.querySelector(".BottomMiddleElements"),
            Mb = wb ? Array.from(wb.querySelectorAll(Cb)) : [];
          if (0 === Mb.length || bb.querySelector(".HotBarContainer.Touch .TouchInventoryKey[data-pressing]")) return;
          const eb = Array.from(bb.querySelectorAll(".HotBarContainer.Touch .TouchInventoryKey")).map(gb.d).filter((bb => null !== bb));
          for (const Hb of Mb) {
            const bb = Hb.getBoundingClientRect(),
              wb = parseFloat(Hb.style.getPropertyValue("--over-keys-lift")) || 0,
              Mb = bb.width > 0 ? Fb({
                left: bb.left,
                top: bb.top + wb,
                right: bb.right,
                bottom: bb.bottom + wb
              }, eb, 0) : 0;
            Mb !== wb && (0 === Mb ? Hb.style.removeProperty("--over-keys-lift") : Hb.style.setProperty("--over-keys-lift", `${Mb}px`))
          }
        }(bb)
    }

    function Zb(bb) {
      var wb, Mb, eb, Hb;
      const pb = bb.documentElement.classList;
      if (!pb.contains("TouchHotbar") || pb.contains("TouchHotbarKeysAbove") || Ib.some((bb => pb.contains(bb))) || null === (wb = bb.defaultView) || void 0 === wb || null === (Mb = wb.matchMedia) || void 0 === Mb || !Mb.call(wb, fb).matches) return !1;
      const Vb = bb.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        gb = null === Vb || void 0 === Vb ? void 0 : Vb.parentElement,
        lb = null === Vb || void 0 === Vb ? void 0 : Vb.closest(".BottomMiddleElements"),
        Lb = null === lb || void 0 === lb ? void 0 : lb.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Vb || !gb || !lb || !Lb || lb.classList.contains("TouchInventoryOpen")) return !1;
      const Ob = Vb.getBoundingClientRect();
      if (0 === Ob.width) return !1;
      const Ub = bb.querySelector(".JoystickZone"),
        Cb = Lb.getBoundingClientRect(),
        Eb = gb.getBoundingClientRect().top,
        Fb = Kb({
          slotsLeft: Cb.left,
          slotsRight: Cb.right,
          width: Ob.width,
          zoneRight: Ub ? rb(Ub) : null
        }),
        sb = Db.get(lb),
        zb = Cb.left + Fb,
        Xb = {
          shift: Fb,
          rise: mb(cb, lb, {
            left: zb,
            right: zb + Ob.width,
            height: Ob.height,
            rowTop: Eb,
            besideBottom: Bb(lb, Eb),
            obstacles: tb(lb)
          }, `${Fb}:${Math.round(Ob.width)}`, (null !== (eb = null === sb || void 0 === sb ? void 0 : sb.shift) && void 0 !== eb ? eb : 0) === Fb)
        };
      return (null === sb || void 0 === sb ? void 0 : sb.shift) !== Xb.shift && lb.style.setProperty("--touch-shop-above-shift", `${Xb.shift}px`), (null === sb || void 0 === sb ? void 0 : sb.rise) !== Xb.rise && hb(lb, "ShopAboveUp", "--touch-shop-above-rise", Xb.rise), Db.set(lb, Xb), (null !== (Hb = null === sb || void 0 === sb ? void 0 : sb.shift) && void 0 !== Hb ? Hb : 0) !== Xb.shift
    }
    const fb = "(orientation: landscape) and (max-height: 500px)";

    function Ab(bb, wb, Mb) {
      (0, eb.useLayoutEffect)((() => {
        var wb;
        const eb = null === (wb = bb.current) || void 0 === wb ? void 0 : wb.closest(".BottomMiddleElements");
        if (!eb || Mb) return;
        const gb = new ResizeObserver((() => {
            Ob(!1)
          })),
          lb = () => {
            gb.disconnect();
            const bb = document.querySelector(".JoystickZone");
            for (const wb of [bb, eb, eb.querySelector(".HotBarGameItemsContainer"), ...tb(eb), ...eb.querySelectorAll(Cb)]) wb && gb.observe(wb)
          };
        let Lb = null,
          Ib = !1;
        const Ob = bb => {
            Ib ||= bb, Lb ??= requestAnimationFrame((() => {
              Lb = null, Ib && (Ib = !1, lb()), Yb(document)
            }))
          },
          Eb = new MutationObserver((() => {
            Ob(!0)
          }));
        Eb.observe(eb, {
          childList: !0
        });
        for (const bb of Ub(eb)) Eb.observe(bb, {
          childList: !0,
          subtree: !0
        });
        Yb(document), lb();
        const Fb = () => {
            Ob(!0)
          },
          Bb = [(0, Hb.o)(pb.e, Fb), (0, Hb.o)(Vb.d, Fb)],
          sb = new MutationObserver((() => {
            Ob(!1)
          }));
        return bb.current && sb.observe(bb.current, {
          attributes: !0,
          attributeFilter: ["data-pressing"],
          subtree: !0
        }), () => {
          sb.disconnect(), null !== Lb && cancelAnimationFrame(Lb), gb.disconnect(), Eb.disconnect();
          for (const bb of Bb) bb()
        }
      }), [bb, wb, Mb])
    }
  },
  10251: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      e: () => Fb
    });
    var eb = Mb(64),
      Hb = Mb(29),
      pb = Mb(10233),
      Vb = Mb(3642),
      gb = Mb(10246),
      lb = Mb(10241),
      Lb = Mb(4792);

    function Ib(bb) {
      const wb = bb.getBoundingClientRect();
      return wb.width > 0 && wb.height > 0 ? (0, pb.g)(wb) : null
    }

    function Ob(bb) {
      const wb = bb.ownerDocument.documentElement.classList,
        Mb = bb.classList.contains("ShopKey") ? "HudHide-shop" : bb.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== Mb && (wb.contains(Mb) || wb.contains("HudHide-inventory")) ? null : Ib(bb)
    }

    function Ub(bb) {
      const wb = Ib(bb),
        Mb = bb.firstElementChild;
      if (null === wb) return null;
      const {
        x: eb,
        y: Hb
      } = (0, pb.b)(wb), Vb = Mb.offsetWidth / 2, gb = Mb.offsetHeight / 2;
      return {
        left: eb - Vb,
        top: Hb - gb,
        right: eb + Vb,
        bottom: Hb + gb
      }
    }

    function tb(bb, wb) {
      const Mb = bb.ownerDocument.createElement("div");
      Mb.className = `TouchSlotProbe TouchSlot${wb}`, bb.append(Mb);
      const eb = Ib(Mb);
      return Mb.remove(), eb
    }
    const Cb = `.TouchInventoryKey, .TouchSprintKey, ${Vb.d}`;

    function Eb(bb, wb) {
      const Mb = wb.map((wb => ({
        slot: wb,
        face: tb(bb, wb)
      })));
      if (Mb.every((bb => {
          let {
            face: wb
          } = bb;
          return null === wb
        }))) return null;
      return function(bb, wb) {
        const Mb = [...wb],
          eb = [],
          Hb = [];
        for (const {
            face: gb,
            slot: Lb
          }
          of bb) null !== gb && (Mb.some((bb => (0, pb.k)(gb, bb, lb.e))) ? Hb.push(Lb) : (eb.push(Lb), Mb.push(gb)));
        const Vb = [...eb, ...Hb];
        return bb.map((bb => {
          let {
            slot: wb,
            face: Mb
          } = bb;
          return null === Mb ? wb : Vb.shift()
        }))
      }(Mb, [...[...bb.querySelectorAll(":scope > .TouchKeyHit")].filter((bb => bb.classList.contains("BoostKey") || !wb.some((wb => bb.classList.contains(`TouchSlot${wb}`))))).map(Ub), ...[...bb.ownerDocument.querySelectorAll(Cb)].map(Ob)].filter((bb => null !== bb)))
    }

    function Fb(bb, wb) {
      const [Mb, pb] = (0, eb.useState)((() => (0, gb.o)(bb)));
      return (0, eb.useLayoutEffect)((() => {
        var Mb;
        const eb = wb.current;
        if (!eb) return;
        const lb = (0, gb.o)(bb),
          Ib = () => {
            const bb = Eb(eb, lb);
            pb((wb => {
              const Mb = null !== bb && void 0 !== bb ? bb : wb.length === lb.length ? wb : lb;
              return Mb.join() === wb.join() ? wb : Mb
            }))
          };
        Ib(), window.addEventListener("resize", Ib);
        const Ob = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(Ib);
        null === Ob || void 0 === Ob || Ob.observe(null !== (Mb = eb.closest(".BottomRightElements")) && void 0 !== Mb ? Mb : eb);
        const Ub = [(0, Hb.o)(Vb.e, Ib), (0, Hb.o)(Lb.d, Ib), (0, Hb.o)(Vb.n, Ib)];
        return () => {
          window.removeEventListener("resize", Ib), null === Ob || void 0 === Ob || Ob.disconnect();
          for (const bb of Ub) bb()
        }
      }), [bb, wb]), Mb.length === (0, gb.o)(bb).length ? Mb : (0, gb.o)(bb)
    }
  },
  10233: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Ub,
      B: () => Lb,
      E: () => Cb,
      H: () => pb,
      b: () => Hb,
      c: () => gb,
      g: () => eb,
      i: () => Eb,
      k: () => tb,
      l: () => Ib,
      m: () => Vb,
      p: () => Fb,
      t: () => Ob,
      w: () => lb
    });
    const eb = bb => ({
      left: bb.left,
      top: bb.top,
      right: bb.right,
      bottom: bb.bottom
    });

    function Hb(bb) {
      return {
        x: (bb.left + bb.right) / 2,
        y: (bb.top + bb.bottom) / 2
      }
    }

    function pb(bb) {
      return 0 === bb.length ? null : bb.reduce(((bb, wb) => ({
        left: Math.min(bb.left, wb.left),
        top: Math.min(bb.top, wb.top),
        right: Math.max(bb.right, wb.right),
        bottom: Math.max(bb.bottom, wb.bottom)
      })))
    }

    function Vb(bb, wb) {
      const Mb = Math.max(0, (wb - (bb.right - bb.left)) / 2),
        eb = Math.max(0, (wb - (bb.bottom - bb.top)) / 2);
      return {
        left: bb.left - Mb,
        top: bb.top - eb,
        right: bb.right + Mb,
        bottom: bb.bottom + eb
      }
    }

    function gb(bb, wb) {
      return wb.x >= bb.left && wb.x <= bb.right && wb.y >= bb.top && wb.y <= bb.bottom
    }

    function lb(bb, wb, Mb) {
      let eb = null,
        pb = 1 / 0;
      for (const {
          id: Hb,
          box: Vb
        }
        of wb) {
        const wb = (Vb.right - Vb.left) * (Vb.bottom - Vb.top);
        gb(Vb, bb) && wb < pb && (pb = wb, eb = Hb)
      }
      if (null !== eb) return eb;
      let lb = 1 / 0;
      for (const {
          id: Lb,
          box: Ib
        }
        of wb) {
        if (!gb(Vb(Ib, Mb), bb)) continue;
        const wb = Hb(Ib),
          pb = Math.hypot(bb.x - wb.x, bb.y - wb.y);
        pb < lb && (lb = pb, eb = Lb)
      }
      return eb
    }

    function Lb(bb, wb, Mb) {
      return {
        left: Mb.left,
        top: Mb.top,
        right: bb - Mb.right,
        bottom: wb - Mb.bottom
      }
    }

    function Ib(bb, wb, Mb, eb) {
      const Hb = (bb, wb, Mb) => Math.max(Math.min(wb, 0), Math.min(Math.max(Mb, 0), bb));
      return {
        x: Hb(wb, eb.left - bb.left, eb.right - bb.right),
        y: Hb(Mb, eb.top - bb.top, eb.bottom - bb.bottom)
      }
    }

    function Ob(bb, wb, Mb, eb, Hb) {
      const pb = bb.dx * eb + wb,
        Vb = bb.dy * Hb + Mb,
        gb = bb => Math.max(-1, Math.min(1, bb));
      return {
        dx: gb(pb / eb),
        dy: gb(Vb / Hb)
      }
    }

    function Ub(bb, wb, Mb, eb) {
      return wb <= 0 || Mb <= 0 ? 1 : Math.max(.05, Math.min(1, bb / wb, eb / Mb))
    }

    function tb(bb, wb, Mb) {
      return Math.min(bb.right, wb.right) - Math.max(bb.left, wb.left) > Mb && Math.min(bb.bottom, wb.bottom) - Math.max(bb.top, wb.top) > Mb
    }

    function Cb(bb, wb) {
      const Mb = (bb, wb, Mb, eb) => wb - bb > eb - Mb ? Mb - bb > wb - eb ? eb - wb : Mb - bb : bb < Mb ? Mb - bb : wb > eb ? eb - wb : 0;
      return {
        x: Mb(bb.left, bb.right, wb.left, wb.right),
        y: Mb(bb.top, bb.bottom, wb.top, wb.bottom)
      }
    }

    function Eb(bb, wb, Mb) {
      return tb(bb, {
        left: 0,
        top: 0,
        right: wb,
        bottom: Mb
      }, 0)
    }

    function Fb(bb, wb) {
      let {
        avoid: Mb = null,
        bounds: eb = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Hb = 0, pb = 1 / 0;
      return bb.forEach(((bb, Vb) => {
        const gb = wb.filter((wb => tb(bb, wb, 0))).length,
          lb = null !== eb && (bb.left < eb.left || bb.top < eb.top || bb.right > eb.right || bb.bottom > eb.bottom),
          Lb = gb + (Mb && tb(bb, Mb, 0) ? 1e3 : 0) + (lb ? 1e6 : 0);
        Lb < pb && (Hb = Vb, pb = Lb)
      })), Hb
    }
  },
  10227: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => tb,
      B: () => Ub,
      C: () => Ob,
      d: () => gb,
      h: () => hb,
      i: () => mb,
      j: () => sb,
      m: () => lb,
      n: () => Cb,
      o: () => Ib,
      p: () => Xb,
      t: () => zb,
      w: () => Lb
    });
    var eb = Mb(10233),
      Hb = Mb(3554);
    const pb = {
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
        ...Object.fromEntries(Hb.H.map((bb => [bb, "menu"])))
      },
      Vb = bb => Hb.B.filter((wb => pb[wb] === bb)),
      gb = new Set(Vb("cluster")),
      lb = new Set(Vb("inventory")),
      Lb = bb => "inventory" === bb || lb.has(bb),
      Ib = bb => {
        const wb = pb[bb];
        return void 0 === wb ? [] : [wb, ...Ib(wb)]
      },
      Ob = bb => [bb, ...Ib(bb)],
      Ub = (bb, wb, Mb) => "shop" === bb && wb ? Mb("inventory") ? ["inventory"] : Mb("bag") ? [bb, "bag"] : [bb] : [bb],
      tb = (bb, wb, Mb, Hb) => {
        const pb = bb => {
          const pb = wb[bb],
            {
              x: Vb,
              y: gb
            } = pb && Hb(bb) ? (0, eb.E)(pb, Mb) : {
              x: 0,
              y: 0
            };
          return pb && {
            left: pb.left + Vb,
            top: pb.top + gb,
            right: pb.right + Vb,
            bottom: pb.bottom + gb
          }
        };
        return bb.flatMap((bb => {
          const Vb = wb[bb];
          if ("inventory" !== bb || !Vb || Vb.right - Vb.left <= Mb.right - Mb.left && Vb.bottom - Vb.top <= Mb.bottom - Mb.top) return [bb];
          const [gb, lb] = [pb("shop"), pb("bag")];
          return gb && lb && !(0, eb.k)(gb, lb, 0) ? ["shop", "bag"].filter(Hb) : [bb]
        }))
      },
      Cb = new Map([
        ["cluster", gb],
        ["inventory", lb]
      ]),
      Eb = ["cluster"],
      Fb = [...Eb, ...Hb.B.filter((bb => !Eb.includes(bb) && !pb[bb]))],
      Bb = bb => [bb, ...Vb(bb).flatMap(Bb)],
      sb = Fb.flatMap(Bb).map((bb => ({
        id: bb,
        label: `hudLayout:${bb}`,
        ...Hb.y[bb],
        parent: pb[bb]
      }))),
      mb = Object.fromEntries(sb.map((bb => [bb.id, bb]))),
      hb = "data-hud-el";

    function zb(bb, wb, Mb, eb) {
      const Hb = Mb(function(bb, wb) {
          return "attack" !== bb || wb ? mb[bb].label : "hudLayout:attackContext"
        }(bb, wb)),
        pb = eb[bb];
      return pb ? Mb("hudLayout:slotWithKey", {
        slot: Hb,
        key: pb
      }) : Hb
    }

    function Xb(bb, wb, Mb, eb) {
      return bb.map((bb => zb(bb, wb, Mb, eb))).join(", ")
    }
  },
  10246: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Ib,
      D: () => lb,
      e: () => gb,
      g: () => pb,
      k: () => Hb,
      o: () => Vb,
      q: () => Ub,
      u: () => Lb,
      w: () => Ob
    });
    var eb = Mb(3554);
    const Hb = ["J", "C", "A", "P", "U", "X", "G", "Z", "D"],
      pb = {
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

    function Vb(bb) {
      return bb ? ["X"] : ["P", "X"]
    }
    const gb = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: eb.H,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function lb(bb, wb, Mb) {
      const eb = bb.querySelector(".InGameUi .TouchComponentsButtons");
      if (!eb) return gb;
      const pb = {},
        Vb = {};
      for (const gb of Hb) {
        const bb = eb.querySelector(`.TouchSlot${gb} > .TouchKey`);
        if (bb) {
          var lb, Lb;
          pb[gb] = bb.cloneNode(!0);
          const wb = (null !== (lb = null === (Lb = bb.querySelector(".TouchKeyLabel")) || void 0 === Lb ? void 0 : Lb.textContent) && void 0 !== lb ? lb : "").split(/\s+/).filter((bb => !/[\d\xd7]/.test(bb))).join(" ");
          wb && (Vb[gb] = wb)
        }
      }
      const Ib = wb => {
          const Mb = bb.querySelector(`.InGameUi ${wb}`);
          return null !== Mb && !Mb.classList.contains("Hidden")
        },
        Ob = [...bb.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((bb => bb.cloneNode(!0)));
      return {
        faces: Object.keys(pb).length > 0 ? pb : null,
        names: Vb,
        shop: Ib(".TouchInventoryKey.ShopKey"),
        bag: Ib(".TouchInventoryKey.BagKey"),
        sprint: Ib(".TouchSprintHit"),
        items: Ob.length > 0 ? Ob : null,
        rowIcons: wb,
        pinnedIcons: Mb
      }
    }

    function Lb(bb, wb) {
      const {
        faces: Mb
      } = bb;
      return null === Mb || Hb.some((bb => pb[bb] === wb && void 0 !== Mb[bb]))
    }

    function Ib(bb, wb) {
      const Mb = {};
      for (const eb of [...Vb(wb), "G"]) {
        const wb = bb.names[eb];
        wb && (Mb[pb[eb]] = wb)
      }
      return Mb
    }

    function Ob(bb, wb) {
      const {
        faces: Mb
      } = bb;
      if (null === Mb) return [];
      const eb = new Set(Object.keys(Mb).map((bb => pb[bb])));
      return Vb(wb).filter((bb => !eb.has(pb[bb])))
    }

    function Ub(bb, wb) {
      bb.replaceChildren(...[...wb.childNodes].map((bb => bb.cloneNode(!0))))
    }
  },
  10241: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      h: () => Ib
    });
    var eb = Mb(10233),
      Hb = Mb(10227),
      pb = Mb(3554),
      Vb = Mb(3622);
    const gb = 2,
      lb = new Set(["effects"]),
      Lb = (bb, wb, Mb) => {
        const eb = (0, Hb.o)(wb).includes(bb) ? bb : (0, Hb.o)(bb).includes(wb) ? wb : null;
        if (null === eb || "joystick" === eb || "chat" === eb) return !1;
        const gb = eb === bb ? wb : bb;
        if ("menu" === eb) return (0, Vb.C)(gb, Mb.hudElements[gb]);
        if ("hotbar" !== eb || !(0, Hb.w)(gb)) return !0;
        if ((0, pb.R)(Mb.hudElements[gb]) || (0, pb.R)(Mb.hudElements.inventory)) return !1;
        return !(Mb.hudLocked.includes(gb) || Mb.hudLocked.includes("inventory")) || (0, pb.O)(Mb.hudElements.hotbar)
      };

    function Ib(bb, wb, Mb, Ib) {
      const Ob = bb => (0, Hb.C)(bb).some((bb => (0, pb.x)(Mb.hudElements, bb) || (0, Vb.z)(bb, Mb, Ib)));
      if (Ob(bb) || lb.has(bb)) return [];
      const Ub = bb => {
          var wb, eb;
          return "bag" === bb && 1 !== (null !== (wb = null === (eb = Mb.hudElements.shop) || void 0 === eb ? void 0 : eb[2]) && void 0 !== wb ? wb : 1) || (0, Hb.C)(bb).some((bb => void 0 !== Mb.hudElements[bb]))
        },
        tb = Hb.n.get(bb),
        Cb = wb.filter((wb => {
          let {
            id: Mb
          } = wb;
          return tb ? tb.has(Mb) && !Ob(Mb) : Mb === bb
        })),
        Eb = new Set;
      for (const Hb of wb) Hb.id === bb || null !== tb && void 0 !== tb && tb.has(Hb.id) || Eb.has(Hb.id) || Ob(Hb.id) || lb.has(Hb.id) || Cb.some((bb => {
        let {
          id: wb,
          box: pb
        } = bb;
        return !Lb(wb, Hb.id, Mb) && (Ub(wb) || Ub(Hb.id)) && (0, eb.k)(pb, Hb.box, gb)
      })) && Eb.add(Hb.id);
      return [...Eb]
    }
  },
  10024: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      f: () => eb
    });
    const eb = "controllerOpenKeyboard",
      Hb = "controllerKeyboardVisible"
  },
  10123: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Bb,
      d: () => zb,
      g: () => hb,
      i: () => mb,
      j: () => Xb,
      l: () => xb
    });
    var eb = Mb(382),
      Hb = Mb(64),
      pb = Mb(1611),
      Vb = Mb(1259),
      gb = Mb(29),
      lb = Mb(43),
      Lb = Mb(10115);
    const Ib = "quickChatPhrases",
      Ob = "quickChatCustomPhrasesChanged",
      Ub = {
        "quickChat:gg": "gg",
        "quickChat:hi": "hi",
        "quickChat:thanks": "thanks",
        "quickChat:gl": "gl",
        "quickChat:brb": "brb",
        "quickChat:yes": "yes",
        "quickChat:no": "no",
        "quickChat:help": "help"
      },
      tb = bb => {
        if ("string" !== typeof bb) return null;
        const wb = bb.trim().slice(0, eb.qd).trim();
        return "" === wb || wb.startsWith("/") ? null : wb
      },
      Cb = bb => {
        const wb = {};
        if (!Array.isArray(bb)) return wb;
        for (const Mb of bb) {
          if (!Array.isArray(Mb)) continue;
          const bb = Lb.e.find((bb => Ub[bb] === Mb[0])),
            eb = tb(Mb[1]);
          void 0 !== bb && null !== eb && (wb[bb] = eb)
        }
        return wb
      };
    let Eb = Cb(lb.i.getItem(Ib));
    const Fb = () => {
      Eb = Cb(lb.i.getItem(Ib))
    };
    "undefined" !== typeof window && window.addEventListener("storage", (bb => {
      bb.key !== lb.i.userKeyToStorageKey(Ib) && null !== bb.key || (Fb(), gb.k.iI(Ob, Eb))
    }));
    const Bb = () => Eb,
      sb = bb => {
        Eb = bb;
        const wb = (bb => Lb.e.flatMap((wb => {
          const Mb = bb[wb];
          return void 0 === Mb ? [] : [
            [Ub[wb], Mb]
          ]
        })))(bb);
        0 === wb.length ? lb.i.removeItem(Ib) : lb.i.setItem(Ib, wb), gb.k.iI(Ob, bb)
      },
      mb = (bb, wb, Mb) => {
        const eb = tb(wb),
          Hb = {
            ...Eb
          };
        null === eb || eb === Mb ? delete Hb[bb] : Hb[bb] = eb, Hb[bb] !== Eb[bb] && sb(Hb)
      },
      hb = bb => {
        if (void 0 !== Eb[bb]) {
          const wb = {
            ...Eb
          };
          delete wb[bb], sb(wb)
        }
      },
      zb = () => {
        Object.keys(Eb).length > 0 && sb({})
      },
      Xb = () => (0, pb.h)(Ob, Eb),
      xb = () => {
        const {
          t: bb
        } = (0, Vb.C)(), wb = Xb();
        return (0, Hb.useMemo)((() => Lb.e.map((Mb => {
          var eb;
          return null !== (eb = wb[Mb]) && void 0 !== eb ? eb : bb(Mb)
        }))), [bb, wb])
      }
  },
  10115: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      e: () => eb,
      f: () => Hb
    });
    const eb = ["quickChat:gg", "quickChat:hi", "quickChat:thanks", "quickChat:gl", "quickChat:brb", "quickChat:yes", "quickChat:no", "quickChat:help"];
    const Hb = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(bb) {
          return !(bb - this.lastSendMs < 2e3) && (this.lastSendMs = bb, !0)
        }
        nextClaimMs() {
          return this.lastSendMs + 2e3
        }
      },
      pb = (bb, wb, Mb) => {
        if (!bb.startsWith("/")) return [];
        const eb = [];
        for (let Hb = wb.length - 1; Hb >= 0 && eb.length < Mb; Hb--) {
          const Mb = wb[Hb].trim();
          Mb.startsWith(bb) && Mb !== bb && !eb.includes(Mb) && eb.push(Mb)
        }
        return eb
      }
  },
  10212: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      d: () => lb
    });
    var eb = Mb(26),
      Hb = Mb(1447),
      pb = Mb(110);
    const Vb = {
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

    function gb() {
      return (0, pb.isMobile)() && "function" === typeof navigator.vibrate
    }
    const lb = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, wb) {
        var Mb;
        if (!this.deps.enabled()) return;
        const eb = Vb[bb],
          Hb = null !== wb && void 0 !== wb ? wb : eb.pattern;
        if (null === Hb) return void console.warn("No vibration pattern for", bb);
        const pb = this.deps.now();
        pb - this.lastAnyAt < 40 && eb.priority < this.playingPriority || pb - (null !== (Mb = this.lastAt.get(bb)) && void 0 !== Mb ? Mb : -1 / 0) < eb.minGapMs || pb < this.playingUntil && eb.priority < this.playingPriority || (this.lastAt.set(bb, pb), this.lastAnyAt = pb, this.playingUntil = pb + Hb.reduce(((bb, wb) => bb + wb), 0), this.playingPriority = eb.priority, this.deps.vibrate(Hb))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => gb() && eb.c.get("isTouchScreen") && eb.c.get("clientEscMenuOptions").vibration && !(0, Hb.f)()
    })
  },
  10207: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      g: () => Vb,
      k: () => gb,
      o: () => lb
    });
    var eb = Mb(29);
    const Hb = "touchSprintChanged";
    let pb = !0;

    function Vb() {
      return pb
    }

    function gb(bb) {
      bb !== pb && (pb = bb, eb.k.iI(Hb, bb))
    }

    function lb(bb, wb) {
      return null !== bb && null !== wb && bb > wb
    }
  },
  10112: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return !bb.hidden && (wb || !bb.isRewardedAd)
    }

    function Hb(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function pb(bb, wb) {
      var Mb;
      if ("dropdown" === (null === (Mb = bb.userInput) || void 0 === Mb ? void 0 : Mb.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const Mb of bb.userInput.dropdownOptions)
          if (Hb(Mb) === wb) return "object" === typeof Mb ? Mb.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", wb)
      }
      return bb.cost
    }

    function Vb(bb, wb, Mb) {
      var eb;
      const Hb = null !== (eb = Mb.excludedPlayers) && void 0 !== eb ? eb : [wb];
      return bb.filter((bb => !Hb.includes(bb)))
    }
    Mb.d(wb, {
      d: () => pb,
      f: () => Hb,
      g: () => Vb,
      i: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);