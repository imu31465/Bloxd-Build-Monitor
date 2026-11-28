export const id = 63;
export const ids = [63];
export const modules = {
  41223: () => {
    ! function() {
      function bb(wb) {
        return (bb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
          return typeof bb
        } : function(bb) {
          return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
        })(wb)
      }

      function wb(wb, Mb, eb) {
        return (Mb = function(wb) {
          var Mb = function(wb) {
            if ("object" != bb(wb) || !wb) return wb;
            var Mb = wb[Symbol.toPrimitive];
            if (void 0 !== Mb) {
              var eb = Mb.call(wb, "string");
              if ("object" != bb(eb)) return eb;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(wb)
          }(wb);
          return "symbol" == bb(Mb) ? Mb : Mb + ""
        }(Mb)) in wb ? Object.defineProperty(wb, Mb, {
          value: eb,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : wb[Mb] = eb, wb
      }

      function Mb(bb, wb) {
        var Mb = Object.keys(bb);
        if (Object.getOwnPropertySymbols) {
          var eb = Object.getOwnPropertySymbols(bb);
          wb && (eb = eb.filter((function(wb) {
            return Object.getOwnPropertyDescriptor(bb, wb).enumerable
          }))), Mb.push.apply(Mb, eb)
        }
        return Mb
      }

      function eb(bb) {
        for (var eb = 1; arguments.length > eb; eb++) {
          var Hb = null != arguments[eb] ? arguments[eb] : {};
          eb % 2 ? Mb(Object(Hb), !0).forEach((function(Mb) {
            wb(bb, Mb, Hb[Mb])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Hb)) : Mb(Object(Hb)).forEach((function(wb) {
            Object.defineProperty(bb, wb, Object.getOwnPropertyDescriptor(Hb, wb))
          }))
        }
        return bb
      }

      function Hb(bb, wb, Mb, eb, Hb, pb, Vb) {
        try {
          var gb = bb[pb](Vb),
            lb = gb.value
        } catch (bb) {
          return void Mb(bb)
        }
        gb.done ? wb(lb) : Promise.resolve(lb).then(eb, Hb)
      }

      function pb(bb) {
        return function() {
          var wb = this,
            Mb = arguments;
          return new Promise((function(eb, pb) {
            var Vb = bb.apply(wb, Mb);

            function gb(bb) {
              Hb(Vb, eb, pb, gb, lb, "next", bb)
            }

            function lb(bb) {
              Hb(Vb, eb, pb, gb, lb, "throw", bb)
            }
            gb(void 0)
          }))
        }
      }
      const Vb = ["type"];
      var gb = function(bb) {
          return bb[bb.DomContentLoaded = 0] = "DomContentLoaded", bb[bb.Load = 1] = "Load", bb[bb.FullSnapshot = 2] = "FullSnapshot", bb[bb.IncrementalSnapshot = 3] = "IncrementalSnapshot", bb[bb.Meta = 4] = "Meta", bb[bb.Custom = 5] = "Custom", bb[bb.Plugin = 6] = "Plugin", bb
        }({}),
        lb = function(bb) {
          return bb[bb.Mutation = 0] = "Mutation", bb[bb.MouseMove = 1] = "MouseMove", bb[bb.MouseInteraction = 2] = "MouseInteraction", bb[bb.Scroll = 3] = "Scroll", bb[bb.ViewportResize = 4] = "ViewportResize", bb[bb.Input = 5] = "Input", bb[bb.TouchMove = 6] = "TouchMove", bb[bb.MediaInteraction = 7] = "MediaInteraction", bb[bb.StyleSheetRule = 8] = "StyleSheetRule", bb[bb.CanvasMutation = 9] = "CanvasMutation", bb[bb.Font = 10] = "Font", bb[bb.Log = 11] = "Log", bb[bb.Drag = 12] = "Drag", bb[bb.StyleDeclaration = 13] = "StyleDeclaration", bb[bb.Selection = 14] = "Selection", bb[bb.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", bb[bb.CustomElement = 16] = "CustomElement", bb
        }({}),
        Lb = function(bb) {
          return bb[bb.MouseUp = 0] = "MouseUp", bb[bb.MouseDown = 1] = "MouseDown", bb[bb.Click = 2] = "Click", bb[bb.ContextMenu = 3] = "ContextMenu", bb[bb.DblClick = 4] = "DblClick", bb[bb.Focus = 5] = "Focus", bb[bb.Blur = 6] = "Blur", bb[bb.TouchStart = 7] = "TouchStart", bb[bb.TouchMove_Departed = 8] = "TouchMove_Departed", bb[bb.TouchEnd = 9] = "TouchEnd", bb[bb.TouchCancel = 10] = "TouchCancel", bb
        }({}),
        Ib = function(bb) {
          return bb[bb.Mouse = 0] = "Mouse", bb[bb.Pen = 1] = "Pen", bb[bb.Touch = 2] = "Touch", bb
        }({}),
        Ob = function(bb) {
          return bb[bb["2D"] = 0] = "2D", bb[bb.WebGL = 1] = "WebGL", bb[bb.WebGL2 = 2] = "WebGL2", bb
        }({}),
        Ub = function(bb) {
          return bb[bb.Play = 0] = "Play", bb[bb.Pause = 1] = "Pause", bb[bb.Seeked = 2] = "Seeked", bb[bb.VolumeChange = 3] = "VolumeChange", bb[bb.RateChange = 4] = "RateChange", bb
        }({}),
        tb = function(bb) {
          return bb[bb.Document = 0] = "Document", bb[bb.DocumentType = 1] = "DocumentType", bb[bb.Element = 2] = "Element", bb[bb.Text = 3] = "Text", bb[bb.CDATA = 4] = "CDATA", bb[bb.Comment = 5] = "Comment", bb
        }({});

      function Cb(bb, wb) {
        return -1 !== bb.indexOf(wb)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var Eb = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${Eb.source}`, "i"), new RegExp(Eb.source, "gi"), "0".repeat(32), "0".repeat(16);
      var Fb = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        Bb = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        sb = {};

      function mb(bb) {
        if (sb[bb]) return sb[bb];
        const wb = function(bb) {
            var wb, Mb;
            const eb = null === (wb = globalThis) || void 0 === wb || null === (wb = wb.Zone) || void 0 === wb || null === (Mb = wb.__symbol__) || void 0 === Mb ? void 0 : Mb.call(wb, bb);
            return eb && globalThis[eb] ? globalThis[eb] : void 0
          }(bb) || globalThis[bb],
          Mb = wb.prototype,
          eb = bb in Fb ? Fb[bb] : void 0,
          Hb = Boolean(eb && eb.every((bb => {
            var wb;
            return Boolean(null === (wb = Object.getOwnPropertyDescriptor(Mb, bb)) || void 0 === wb || null === (wb = wb.get) || void 0 === wb ? void 0 : wb.toString().includes("[native code]"))
          }))),
          pb = bb in Bb ? Bb[bb] : void 0,
          Vb = Boolean(pb && pb.every((bb => {
            var wb;
            return "function" == typeof Mb[bb] && (null === (wb = Mb[bb]) || void 0 === wb ? void 0 : wb.toString().includes("[native code]"))
          })));
        if (Hb && Vb) return sb[bb] = wb.prototype, wb.prototype;
        const gb = document.createElement("iframe");
        gb.style.display = "none";
        let lb = !1;
        try {
          document.body.appendChild(gb);
          const eb = gb.contentWindow;
          if (!eb) return wb.prototype;
          const Hb = eb[bb].prototype;
          return Hb ? (Cb(Lb = navigator.userAgent, "AppleWebKit") && !Cb(Lb, "Chrome") && (gb.classList.add("rr-block", "ph-no-capture"), gb.setAttribute("__rrwebUntaintedPrototype", bb), lb = !0), sb[bb] = Hb) : Mb
        } catch (bb) {
          return Mb
        } finally {
          !lb && gb.parentNode && document.body.removeChild(gb)
        }
        var Lb
      }
      var hb = Object.create(null);

      function zb(bb, wb, Mb) {
        var eb;
        const Hb = hb[bb],
          pb = Hb[Mb];
        if (pb) return pb.call(wb);
        const Vb = mb(bb),
          gb = null === (eb = Object.getOwnPropertyDescriptor(Vb, Mb)) || void 0 === eb ? void 0 : eb.get;
        return gb ? (Hb[Mb] = gb, gb.call(wb)) : wb[Mb]
      }
      hb.Node = Object.create(null), hb.ShadowRoot = Object.create(null), hb.MutationObserver = Object.create(null), hb.Element = Object.create(null);
      var Xb, xb = {};

      function jb(bb, wb, Mb) {
        const eb = `${bb}.${String(Mb)}`;
        if (xb[eb]) return xb[eb].bind(wb);
        const Hb = mb(bb)[Mb];
        return "function" != typeof Hb ? wb[Mb] : (xb[eb] = Hb, Hb.bind(wb))
      }

      function Kb() {
        return mb("MutationObserver").constructor
      }

      function rb(bb, wb, Mb) {
        try {
          if (!(wb in bb)) return () => {};
          const eb = bb[wb],
            Hb = {
              next: eb
            },
            pb = Mb((function() {
              for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
              return Hb.next.apply(this, wb)
            }));
          return "function" == typeof pb && (pb.prototype = pb.prototype || {}, Object.defineProperties(pb, {
            __rrweb_original__: {
              enumerable: !1,
              value: eb
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: Hb
            }
          })), bb[wb] = pb, () => {
            if (bb[wb] === pb) return void(bb[wb] = Hb.next);
            const Mb = bb => {
              var wb;
              return "function" == typeof bb ? null !== (wb = bb.__rrweb_layer__) && void 0 !== wb ? wb : bb.__posthog_layer__ : void 0
            };
            let eb = bb[wb],
              Vb = Mb(eb);
            for (; Vb;) {
              if (Vb.next === pb) return void(Vb.next = Hb.next);
              eb = Vb.next, Vb = Mb(eb)
            }
          }
        } catch (bb) {
          return () => {}
        }
      }
      var Rb = {
        childNodes: bb => zb("Node", bb, "childNodes"),
        parentNode: bb => zb("Node", bb, "parentNode"),
        parentElement: bb => zb("Node", bb, "parentElement"),
        textContent: bb => zb("Node", bb, "textContent"),
        isConnected(bb) {
          if (void 0 === Xb) {
            var wb;
            const bb = null === (wb = Object.getOwnPropertyDescriptor(mb("Node"), "isConnected")) || void 0 === wb ? void 0 : wb.get;
            Xb = (null == bb ? void 0 : bb.toString().includes("[native code]")) ? bb : null
          }
          return null == Xb ? void 0 : Xb.call(bb)
        },
        contains: (bb, wb) => jb("Node", bb, "contains")(wb),
        getRootNode: bb => jb("Node", bb, "getRootNode")(),
        host: bb => bb && "host" in bb ? zb("ShadowRoot", bb, "host") : null,
        styleSheets: bb => bb.styleSheets,
        shadowRoot: bb => bb && "shadowRoot" in bb ? zb("Element", bb, "shadowRoot") : null,
        querySelector: (bb, wb) => jb("Element", bb, "querySelector")(wb),
        querySelectorAll: (bb, wb) => jb("Element", bb, "querySelectorAll")(wb),
        mutationObserver: Kb,
        patch: rb
      };

      function Db() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (bb) {}
        return Date.now()
      }
      var cb = 0,
        Yb = 0;

      function Zb() {
        cb += 1
      }

      function fb() {
        return cb
      }

      function Ab(bb, wb) {
        return (wb !== cb || bb > 6e4) && (Yb += 1, !0)
      }
      var Wb = 0,
        Jb = 0,
        Sb = 0,
        Nb = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        vb = null,
        Qb = null,
        Gb = [],
        qb = 0,
        ab = 0,
        ib = {
          slowestBatchMs: 0
        },
        ub = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function db(bb) {
        var wb;
        (Wb += 1) > 1 || (Nb = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, Gb = [], qb = 0, Qb = (wb = bb) && wb > 0 ? wb : null, Jb = Db(), Sb = cb)
      }

      function Pb() {
        return 0 === Wb ? vb || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (Wb -= 1) > 0 ? Nb : (Nb.durationMs = Db() - Jb, Nb.deferredStylesheetCount = qb, ub.deferredCount += qb, Qb = null, Ab(Nb.durationMs, Sb) ? Nb : vb = Nb)
      }

      function nb(bb, wb, Mb) {
        let eb = bb.length;
        if (Mb >= 32) return eb;
        for (let Hb = 0; bb.length > Hb; Hb++) {
          const pb = bb[Hb];
          try {
            const bb = pb.cssRules;
            if (bb && bb.length) eb += nb(bb, wb, Mb + 1);
            else if (wb && pb.styleSheet) {
              const bb = pb.styleSheet;
              if (!wb.has(bb)) {
                wb.add(bb);
                const Hb = bb.rules || bb.cssRules;
                Hb && (eb += nb(Hb, wb, Mb + 1))
              }
            }
          } catch (bb) {}
        }
        return eb
      }

      function yb(bb) {
        if (0 === Wb) return;
        const wb = nb(bb, null, 0);
        Nb.cssRuleCount += wb, ab > 0 && (Nb.nonDeferrableCssRuleCount += wb)
      }

      function ob(bb) {
        ab += 1;
        try {
          return bb()
        } finally {
          ab -= 1
        }
      }

      function Tb(bb) {
        Wb > 0 && (Nb.stylesheetMs += bb)
      }

      function kb(bb) {
        if (0 === Wb || null === Qb) return !1;
        const wb = Nb.cssRuleCount - Nb.nonDeferrableCssRuleCount;
        return wb >= Qb || wb + function(bb) {
          try {
            const wb = bb && (bb.rules || bb.cssRules);
            if (!wb) return 0;
            const Mb = new WeakSet;
            return Mb.add(bb), nb(wb, Mb, 0)
          } catch (bb) {
            return 0
          }
        }(bb) > Qb
      }

      function bw() {
        const bb = Gb;
        return Gb = [], bb
      }

      function ww() {
        ub.failedCount += 1
      }

      function Mw(bb) {
        bb > 0 && (ub.abandonedCount += bb)
      }

      function ew(bb) {
        return ew = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
          return typeof bb
        } : function(bb) {
          return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
        }, ew(bb)
      }

      function Hw(bb, wb, Mb) {
        return (wb = function(bb) {
          var wb = function(bb) {
            if ("object" != ew(bb) || !bb) return bb;
            var wb = bb[Symbol.toPrimitive];
            if (void 0 !== wb) {
              var Mb = wb.call(bb, "string");
              if ("object" != ew(Mb)) return Mb;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(bb)
          }(bb);
          return "symbol" == ew(wb) ? wb : wb + ""
        }(wb)) in bb ? Object.defineProperty(bb, wb, {
          value: Mb,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : bb[wb] = Mb, bb
      }

      function pw(bb) {
        return bb.nodeType === bb.ELEMENT_NODE
      }

      function Vw(bb) {
        const wb = bb && "host" in bb && "mode" in bb && Rb.host(bb) || null;
        return Boolean(wb && "shadowRoot" in wb && Rb.shadowRoot(wb) === bb)
      }

      function gw(bb) {
        return "[object ShadowRoot]" === {}.toString.call(bb)
      }

      function lw(bb) {
        return bb.includes(" background-clip: text;") && !bb.includes(" -webkit-background-clip: text;") && (bb = bb.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), bb
      }

      function Lw(bb) {
        const {
          cssText: wb
        } = bb;
        if (3 > wb.split('"').length) return wb;
        const Mb = ["@import", `url(${JSON.stringify(bb.href)})`];
        return "" === bb.layerName ? Mb.push("layer") : bb.layerName && Mb.push(`layer(${bb.layerName})`), bb.supportsText && Mb.push(`supports(${bb.supportsText})`), bb.media.length && Mb.push(bb.media.mediaText), Mb.join(" ") + ";"
      }
      var Iw = 0;

      function Ow(bb) {
        const wb = 0 === Iw,
          Mb = wb ? Db() : 0;
        Iw += 1;
        try {
          const wb = bb.rules || bb.cssRules;
          if (!wb) return null;
          yb(wb);
          let Mb = bb.href;
          return !Mb && bb.ownerNode && (Mb = bb.ownerNode.baseURI), lw(Array.from(wb, (bb => Uw(bb, Mb))).join(""))
        } catch (bb) {
          return null
        } finally {
          Iw -= 1, wb && Tb(Db() - Mb)
        }
      }

      function Uw(bb, wb) {
        if (Cw(bb)) {
          let wb;
          try {
            wb = Ow(bb.styleSheet) || Lw(bb)
          } catch (Mb) {
            wb = bb.cssText
          }
          try {
            var Mb;
            if (wb && (null === (Mb = bb.styleSheet) || void 0 === Mb ? void 0 : Mb.href)) return Yw(wb, bb.styleSheet.href)
          } catch (bb) {}
          return wb
        } {
          let Mb = bb.cssText;
          return Ew(bb) && bb.selectorText.includes(":") && (Mb = tw(Mb)), wb ? Yw(Mb, wb) : Mb
        }
      }

      function tw(bb) {
        return bb.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function Cw(bb) {
        return "styleSheet" in bb
      }

      function Ew(bb) {
        return "selectorText" in bb
      }
      var Fw = /^-?[A-Za-z_][\w-]*$/,
        Bw = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var sw = class {
        constructor() {
          Hw(this, "idNodeMap", new Map), Hw(this, "nodeMetaMap", new WeakMap)
        }
        getId(bb) {
          var wb, Mb;
          return bb && null !== (wb = null === (Mb = this.getMeta(bb)) || void 0 === Mb ? void 0 : Mb.id) && void 0 !== wb ? wb : -1
        }
        OHb(bb) {
          return this.idNodeMap.get(bb) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(bb) {
          return this.nodeMetaMap.get(bb) || null
        }
        removeNodeFromMap(bb) {
          const wb = this.getId(bb);
          if (this.idNodeMap.delete(wb), bb.childNodes && bb.childNodes.forEach((bb => this.removeNodeFromMap(bb))), pw(bb)) {
            const wb = Rb.shadowRoot(bb);
            wb && this.removeNodeFromMap(wb), "IFRAME" === bb.nodeName && bb.contentDocument && this.removeNodeFromMap(bb.contentDocument)
          }
        }
        has(bb) {
          return this.idNodeMap.has(bb)
        }
        hasNode(bb) {
          return this.nodeMetaMap.has(bb)
        }
        add(bb, wb) {
          this.idNodeMap.set(wb.id, bb), this.nodeMetaMap.set(bb, wb)
        }
        replace(bb, wb) {
          const Mb = this.OHb(bb);
          if (Mb) {
            const bb = this.nodeMetaMap.get(Mb);
            bb && this.nodeMetaMap.set(wb, bb)
          }
          this.idNodeMap.set(bb, wb)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function mw(bb) {
        let {
          element: wb,
          maskInputOptions: Mb,
          tagName: eb,
          type: Hb,
          value: pb,
          maskInputFn: Vb
        } = bb, gb = pb || "";
        const lb = Hb && hw(Hb);
        return (Mb[eb.toLowerCase()] || lb && Mb[lb]) && (gb = Vb ? Vb(gb, wb) : "*".repeat(gb.length)), gb
      }

      function hw(bb) {
        return bb.toLowerCase()
      }
      var zw = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function Xw(bb) {
        let {
          element: wb,
          name: Mb,
          value: eb,
          maskAllElementAttributes: Hb,
          maskAttributeFn: pb,
          isGenerated: Vb = !1
        } = bb;
        return eb ? Hb ? Vb && zw.has(hw(Mb)) ? eb : "*".repeat(eb.length) : pb ? pb(Mb, eb, wb) : eb : eb
      }
      var xw = "__rrweb_original__";

      function jw(bb) {
        try {
          const wb = bb.type;
          return bb.hasAttribute("data-rr-is-password") ? "password" : wb ? hw(wb) : null
        } catch (bb) {
          return null
        }
      }
      var Kw = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        rw = /^(?:[a-z+]+:)?\/\//i,
        Rw = /^www\..*/i,
        Dw = /^(data:)([^,]*),(.*)/i;

      function Yw(bb, wb) {
        return (bb || "").replace(Kw, ((bb, Mb, eb, Hb, pb, Vb) => {
          const gb = eb || pb || Vb,
            lb = Mb || Hb || "";
          if (!gb) return bb;
          if (rw.test(gb) || Rw.test(gb)) return `url(${lb}${gb}${lb})`;
          if (Dw.test(gb)) return `url(${lb}${gb}${lb})`;
          if ("/" === gb[0]) return `url(${lb}${function(bb){let wb="";return wb=bb.indexOf("//")>-1?bb.split("/").slice(0,3).join("/"):bb.split("/")[0],wb=wb.split("?")[0],wb}(wb)+gb}${lb})`;
          const Lb = wb.split("/"),
            Ib = gb.split("/");
          Lb.pop();
          for (const wb of Ib) "." !== wb && (".." === wb ? Lb.pop() : Lb.push(wb));
          return `url(${lb}${Lb.join("/")}${lb})`
        }))
      }
      var Zw, fw, Aw = new Map,
        Ww = 1,
        Jw = new RegExp("[^a-z0-9-_:]");

      function Sw() {
        return Ww++
      }
      var Nw = !1,
        vw = /^[^ \t\n\r\u000c]+/,
        Qw = /^[, \t\n\r\u000c]+/,
        Gw = new WeakMap;

      function qw(bb, wb) {
        return wb && "" !== wb.trim() ? aw(bb, wb) : wb
      }

      function aw(bb, wb) {
        let Mb = Gw.get(bb);
        if (Mb || (Mb = bb.createElement("a"), Gw.set(bb, Mb)), wb) {
          if (wb.startsWith("blob:") || wb.startsWith("data:")) return wb
        } else wb = "";
        return Mb.setAttribute("href", wb), Mb.href
      }

      function iw(bb, wb) {
        return (null == wb ? void 0 : wb.maxBase64ImageLength) ? function(bb, wb) {
          return wb && bb.length > wb ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : bb
        }(bb, wb.maxBase64ImageLength) : bb
      }

      function uw(bb, wb, Mb, eb, Hb, pb) {
        if (!eb) return eb;
        if ("src" === Mb || "href" === Mb && ("use" !== wb || "#" !== eb[0])) {
          if ("link" === wb && Hb) {
            var Vb;
            const bb = null === (Vb = Hb.sheet) || void 0 === Vb ? void 0 : Vb.href;
            if (bb) return bb
          }
          const Mb = qw(bb, eb);
          if (Mb.startsWith("data:")) {
            if ("img" === wb && Hb) {
              let bb = Mb;
              return ((null == pb ? void 0 : pb.type) || void 0 !== (null == pb ? void 0 : pb.quality)) && (bb = function(bb, wb, Mb, eb) {
                if (1e5 > wb.length) return wb;
                if (!bb.complete || 0 === bb.naturalWidth) return wb;
                if (bb.naturalWidth > 4096 || bb.naturalHeight > 4096) return wb;
                const Hb = Aw.get(wb);
                if (Hb && Hb.type === Mb && Hb.quality === eb) return Hb.result;
                try {
                  const Hb = document.createElement("canvas");
                  Hb.width = bb.naturalWidth, Hb.height = bb.naturalHeight;
                  const pb = Hb.getContext("2d");
                  if (!pb) return wb;
                  pb.drawImage(bb, 0, 0);
                  const Vb = Hb.toDataURL(Mb || "image/webp", null != eb ? eb : .4),
                    gb = wb.length > Vb.length ? Vb : wb;
                  if (Aw.size >= 10) {
                    const bb = Aw.keys().next().value;
                    void 0 !== bb && Aw.delete(bb)
                  }
                  return Aw.set(wb, {
                    type: Mb,
                    quality: eb,
                    result: gb
                  }), gb
                } catch (bb) {
                  return wb
                }
              }(Hb, Mb, pb.type, pb.quality)), iw(bb, pb)
            }
            if ("image" === wb) return iw(Mb, pb)
          }
          return Mb
        }
        if ("xlink:href" === Mb && "#" !== eb[0]) {
          const Mb = qw(bb, eb);
          return "image" === wb && Mb.startsWith("data:") ? iw(Mb, pb) : Mb
        }
        return "background" !== Mb || "table" !== wb && "td" !== wb && "th" !== wb ? "srcset" === Mb ? function(bb, wb) {
          if ("" === wb.trim()) return wb;
          let Mb = 0;

          function eb(bb) {
            let eb;
            const Hb = bb.exec(wb.substring(Mb));
            return Hb ? (eb = Hb[0], Mb += eb.length, eb) : ""
          }
          const Hb = [];
          for (; eb(Qw), wb.length > Mb;) {
            let pb = eb(vw);
            if ("," === pb.slice(-1)) pb = qw(bb, pb.substring(0, pb.length - 1)), Hb.push(pb);
            else {
              let eb = "";
              pb = qw(bb, pb);
              let Vb = !1;
              for (;;) {
                const bb = wb.charAt(Mb);
                if ("" === bb) {
                  Hb.push((pb + eb).trim());
                  break
                }
                if (Vb) ")" === bb && (Vb = !1);
                else {
                  if ("," === bb) {
                    Mb += 1, Hb.push((pb + eb).trim());
                    break
                  }
                  "(" === bb && (Vb = !0)
                }
                eb += bb, Mb += 1
              }
            }
          }
          return Hb.join(", ")
        }(bb, eb) : "style" === Mb ? Yw(eb, aw(bb)) : "object" === wb && "data" === Mb ? qw(bb, eb) : eb : qw(bb, eb)
      }

      function dw(bb, wb, Mb) {
        return ("video" === bb || "audio" === bb) && "autoplay" === hw(wb)
      }

      function Pw(bb) {
        return "string" == typeof bb && hw(bb).split(/\s+/).includes("stylesheet")
      }

      function nw(bb, wb, Mb) {
        if (!bb) return !1;
        if (bb.nodeType !== bb.ELEMENT_NODE) return !!Mb && nw(Rb.parentNode(bb), wb, Mb);
        for (let eb = bb.classList.length; eb--;)
          if (wb.test(bb.classList[eb])) return !0;
        return !!Mb && nw(Rb.parentNode(bb), wb, Mb)
      }

      function yw(bb, wb, Mb, eb) {
        let Hb;
        if (pw(bb)) {
          if (Hb = bb, !Rb.childNodes(Hb).length) return !1
        } else {
          if (null === Rb.parentElement(bb)) return !1;
          Hb = Rb.parentElement(bb)
        }
        try {
          if ("string" == typeof wb) {
            if (eb) {
              if (Hb.closest(`.${wb}`)) return !0
            } else if (Hb.classList.contains(wb)) return !0
          } else if (nw(Hb, wb, eb)) return !0;
          if (Mb)
            if (eb) {
              if (Hb.closest(Mb)) return !0
            } else if (Hb.matches(Mb)) return !0
        } catch (bb) {}
        return !1
      }

      function ow(bb, wb, Mb) {
        const eb = bb.removeEventListener;
        "function" == typeof eb && eb.call(bb, wb, Mb)
      }
      var Tw = new Map;

      function kw(bb, wb) {
        return Array.from(bb.styleSheets).find((bb => bb.href === wb))
      }

      function bM(bb) {
        return null == bb ? "" : bb.toLowerCase()
      }
      var wM = !1,
        MM = !1;

      function eM(bb, wb) {
        const {
          doc: Mb,
          mirror: eb,
          blockClass: Hb,
          blockSelector: pb,
          maskTextClass: Vb,
          maskTextSelector: gb,
          skipChild: lb = !1,
          inlineStylesheet: Lb = !0,
          maskInputOptions: Ib = {},
          maskTextFn: Ob,
          maskInputFn: Ub,
          maskAllElementAttributes: Cb = !1,
          maskAttributeFn: Eb,
          slimDOMOptions: Fb,
          dataURLOptions: Bb = {},
          inlineImages: sb = !1,
          recordCanvas: mb = !1,
          canvasMaskingConfigured: hb,
          onSerialize: zb,
          onIframeLoad: Xb,
          iframeLoadTimeout: xb = 5e3,
          onIframeListenerRegistered: jb,
          onStylesheetLoad: Kb,
          stylesheetLoadTimeout: rb = 5e3,
          keepIframeSrcFn: Db = () => !1,
          newlyAddedElement: cb = !1,
          depth: Yb = 0,
          maxDepth: Zb = 50
        } = wb;
        let {
          needsMask: fb
        } = wb, {
          preserveWhiteSpace: Ab = !0
        } = wb;
        if (Yb >= Zb) return MM = !0, wM || (wM = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Zb}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        fb || (fb = yw(bb, Vb, gb, void 0 === fb)), Wb > 0 && (Nb.nodeCount += 1);
        const Jb = function(bb, wb) {
          const {
            doc: Mb,
            mirror: eb,
            blockClass: Hb,
            blockSelector: pb,
            needsMask: Vb,
            inlineStylesheet: gb,
            maskInputOptions: lb = {},
            maskTextFn: Lb,
            maskInputFn: Ib,
            maskAllElementAttributes: Ob = !1,
            maskAttributeFn: Ub,
            dataURLOptions: Cb = {},
            inlineImages: Eb,
            recordCanvas: Fb,
            canvasMaskingConfigured: Bb,
            keepIframeSrcFn: sb,
            newlyAddedElement: mb = !1
          } = wb, hb = function(bb, wb) {
            if (!wb.hasNode(bb)) return;
            const Mb = wb.getId(bb);
            return 1 === Mb ? void 0 : Mb
          }(Mb, eb);
          switch (bb.nodeType) {
            case bb.DOCUMENT_NODE:
              return "CSS1Compat" !== bb.compatMode ? {
                type: tb.Document,
                childNodes: [],
                compatMode: bb.compatMode
              } : {
                type: tb.Document,
                childNodes: []
              };
            case bb.DOCUMENT_TYPE_NODE:
              return {
                type: tb.DocumentType, name: bb.name, publicId: bb.publicId, systemId: bb.systemId, rootId: hb
              };
            case bb.ELEMENT_NODE:
              return function(bb, wb) {
                const {
                  doc: Mb,
                  blockClass: eb,
                  blockSelector: Hb,
                  inlineStylesheet: pb,
                  maskInputOptions: Vb = {},
                  maskInputFn: gb,
                  maskAllElementAttributes: lb = !1,
                  maskAttributeFn: Lb,
                  dataURLOptions: Ib = {},
                  inlineImages: Ob,
                  recordCanvas: Ub,
                  canvasMaskingConfigured: Cb,
                  keepIframeSrcFn: Eb,
                  newlyAddedElement: Fb = !1,
                  rootId: Bb
                } = wb, sb = function(bb, wb, Mb) {
                  try {
                    if ("string" == typeof wb) {
                      if (bb.classList.contains(wb)) return !0
                    } else
                      for (let Mb = bb.classList.length; Mb--;)
                        if (wb.test(bb.classList[Mb])) return !0;
                    if (Mb) return bb.matches(Mb)
                  } catch (bb) {}
                  return !1
                }(bb, eb, Hb), mb = function(bb) {
                  if (bb instanceof HTMLFormElement) return "form";
                  const wb = hw(bb.tagName);
                  return Jw.test(wb) ? "div" : wb
                }(bb), hb = new Set;
                let zb = {};
                const Xb = bb.attributes.length;
                for (let tb = 0; Xb > tb; tb++) {
                  const wb = bb.attributes[tb];
                  dw(mb, wb.name) || (zb[wb.name] = uw(Mb, mb, hw(wb.name), wb.value, bb, Ib))
                }
                if ("link" === mb && pb && !sb && Pw(zb.rel)) {
                  let wb = bb.sheet;
                  if (!wb) {
                    const eb = function(bb) {
                      return bb.href
                    }(bb);
                    eb && (wb = kw(Mb, eb), !wb && eb.includes(".css")) && (wb = kw(Mb, window.location.origin + "/" + eb.replace(window.location.href, "")))
                  }
                  let eb = null;
                  wb && (kb(wb) ? Wb > 0 && (Gb.push(bb), qb += 1) : eb = Ow(wb)), eb && (delete zb.rel, delete zb.href, zb._cssText = eb)
                }
                var xb;
                if ("style" === mb && bb.sheet && !(bb.innerText || Rb.textContent(bb) || "").trim().length) {
                  const wb = ob((() => Ow(bb.sheet)));
                  wb && (zb._cssText = wb)
                }
                if ("input" === mb || "textarea" === mb || "select" === mb) {
                  const wb = bb.value,
                    Mb = bb.checked;
                  "radio" !== zb.type && "checkbox" !== zb.type && "submit" !== zb.type && "button" !== zb.type && wb ? zb.value = mw({
                    element: bb,
                    type: jw(bb),
                    tagName: mb,
                    value: wb,
                    maskInputOptions: Vb,
                    maskInputFn: gb
                  }) : Mb && (zb.checked = Mb)
                }
                if ("option" === mb && (bb.selected && !Vb.select ? zb.selected = !0 : delete zb.selected), "dialog" === mb && bb.open) {
                  try {
                    zb.rr_open_mode = bb.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (bb) {
                    zb.rr_open_mode = "modal", zb.ph_rr_could_not_detect_modal = !0
                  }
                  hb.add("rr_open_mode")
                }
                if ("canvas" === mb && Ub && !(null == Cb ? void 0 : Cb())) try {
                  if ("2d" === bb.__context)(function(bb) {
                    const wb = bb.getContext("2d");
                    if (!wb) return !0;
                    for (let Mb = 0; bb.width > Mb; Mb += 50)
                      for (let eb = 0; bb.height > eb; eb += 50) {
                        const Hb = wb.getImageData,
                          pb = xw in Hb ? Hb[xw] : Hb;
                        let Vb;
                        try {
                          Vb = pb.call(wb, Mb, eb, Math.min(50, bb.width - Mb), Math.min(50, bb.height - eb))
                        } catch (bb) {
                          return !1
                        }
                        if (new Uint32Array(Vb.data.buffer).some((bb => 0 !== bb))) return !1
                      }
                    return !0
                  })(bb) || (zb.rr_dataURL = bb.toDataURL(Ib.type, Ib.quality));
                  else if (!("__context" in bb)) {
                    const wb = bb.toDataURL(Ib.type, Ib.quality),
                      eb = Mb.createElement("canvas");
                    eb.width = bb.width, eb.height = bb.height, wb !== eb.toDataURL(Ib.type, Ib.quality) && (zb.rr_dataURL = wb)
                  }
                } catch (bb) {
                  "SecurityError" === (null == (xb = bb) ? void 0 : xb.name) ? Nw || (Nw = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", xb)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", xb)
                }
                let jb, Kb = !1;
                if ("img" === mb && Ob) {
                  Zw || (Zw = Mb.createElement("canvas"), fw = Zw.getContext("2d"));
                  const wb = bb,
                    eb = wb.currentSrc || wb.getAttribute("src") || "<unknown-src>",
                    Hb = wb.crossOrigin,
                    pb = (wb, Mb) => Kb ? Xw({
                      element: bb,
                      name: wb,
                      value: Mb,
                      maskAllElementAttributes: lb,
                      maskAttributeFn: Lb
                    }) : Mb,
                    Vb = () => {
                      ow(wb, "load", Vb);
                      try {
                        Zw.width = wb.naturalWidth, Zw.height = wb.naturalHeight, fw.drawImage(wb, 0, 0);
                        const bb = Zw.toDataURL(Ib.type, Ib.quality);
                        zb.rr_dataURL = pb("rr_dataURL", bb)
                      } catch (bb) {
                        if ("anonymous" !== wb.crossOrigin) return wb.crossOrigin = "anonymous", void(wb.complete && 0 !== wb.naturalWidth ? Vb() : wb.addEventListener("load", Vb));
                        console.warn(`Cannot inline img src=${eb}! Error: ${bb}`)
                      }
                      "anonymous" === wb.crossOrigin && (Hb ? zb.crossOrigin = pb("crossOrigin", Hb) : wb.removeAttribute("crossorigin"))
                    };
                  wb.complete && 0 !== wb.naturalWidth ? Vb() : wb.addEventListener("load", Vb)
                }
                if ("audio" === mb || "video" === mb) {
                  const wb = zb;
                  wb.rr_mediaState = bb.paused ? "paused" : "played", hb.add("rr_mediaState"), wb.rr_mediaCurrentTime = bb.currentTime, wb.rr_mediaPlaybackRate = bb.playbackRate, wb.rr_mediaMuted = bb.muted, wb.rr_mediaLoop = bb.loop, wb.rr_mediaVolume = bb.volume
                }
                if (Fb || (bb.scrollLeft && (zb.rr_scrollLeft = bb.scrollLeft), bb.scrollTop && (zb.rr_scrollTop = bb.scrollTop)), sb) {
                  var rb, Db, cb;
                  const {
                    width: wb,
                    height: eb,
                    left: Hb,
                    top: pb
                  } = bb.getBoundingClientRect(), Vb = null === (rb = Mb.defaultView) || void 0 === rb ? void 0 : rb.getComputedStyle(bb);
                  zb = {
                    class: zb.class,
                    rr_width: `${wb}px`,
                    rr_height: `${eb}px`,
                    rr_left: `${Math.floor(Hb+((null===(Db=Mb.defaultView)||void 0===Db?void 0:Db.scrollX)||0))}px`,
                    rr_top: `${Math.floor(pb+((null===(cb=Mb.defaultView)||void 0===cb?void 0:cb.scrollY)||0))}px`
                  }, hb.add("rr_width"), hb.add("rr_height"), hb.add("rr_left"), hb.add("rr_top"), Vb && (zb.rr_position = Vb.position || "static", hb.add("rr_position"), Vb.transform && "none" !== Vb.transform && (zb.rr_transform = Vb.transform, hb.add("rr_transform")), Vb.display && Vb.display.startsWith("inline") && (zb.rr_display = Vb.display, hb.add("rr_display")))
                }
                if ("iframe" !== mb || Eb(zb.src) || (bb.contentDocument || (zb.rr_src = zb.src), delete zb.src), lb || Lb)
                  for (const [tb, Rb] of Object.entries(zb)) "string" != typeof Rb && null !== Rb || (zb[tb] = Xw({
                    element: bb,
                    name: tb,
                    value: Rb,
                    maskAllElementAttributes: lb,
                    maskAttributeFn: Lb,
                    isGenerated: hb.has(tb)
                  }));
                Kb = !0;
                try {
                  customElements.get(mb) && (jb = !0)
                } catch (bb) {}
                return {
                  type: tb.Element,
                  tagName: mb,
                  attributes: zb,
                  childNodes: [],
                  isSVG: (Yb = bb, Boolean("svg" === Yb.tagName || Yb.ownerSVGElement) || void 0),
                  needBlock: sb,
                  rootId: Bb,
                  isCustom: jb
                };
                var Yb
              }(bb, {
                doc: Mb,
                blockClass: Hb,
                blockSelector: pb,
                inlineStylesheet: gb,
                maskInputOptions: lb,
                maskInputFn: Ib,
                maskAllElementAttributes: Ob,
                maskAttributeFn: Ub,
                dataURLOptions: Cb,
                inlineImages: Eb,
                recordCanvas: Fb,
                canvasMaskingConfigured: Bb,
                keepIframeSrcFn: sb,
                newlyAddedElement: mb,
                rootId: hb
              });
            case bb.TEXT_NODE:
              return function(bb, wb) {
                const {
                  needsMask: Mb,
                  maskTextFn: eb,
                  rootId: Hb
                } = wb, pb = Rb.parentNode(bb), Vb = pb && pb.tagName;
                let gb = Rb.textContent(bb);
                const lb = "STYLE" === Vb || void 0,
                  Lb = "SCRIPT" === Vb || void 0;
                if (lb && gb) {
                  try {
                    var Ib;
                    if (bb.nextSibling || bb.previousSibling);
                    else if (kb(pb.sheet));
                    else if (null === (Ib = pb.sheet) || void 0 === Ib ? void 0 : Ib.cssRules) {
                      const bb = Ow(pb.sheet);
                      bb && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(bb) && (gb = bb)
                    }
                  } catch (wb) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${wb}`, bb)
                  }
                  gb = Yw(gb, aw(wb.doc))
                }
                return Lb && (gb = "SCRIPT_PLACEHOLDER"), !lb && !Lb && gb && Mb && (gb = eb ? eb(gb, Rb.parentElement(bb)) : gb.replace(/[\S]/g, "*")), {
                  type: tb.Text,
                  textContent: gb || "",
                  isStyle: lb,
                  rootId: Hb
                }
              }(bb, {
                doc: Mb,
                needsMask: Vb,
                maskTextFn: Lb,
                rootId: hb
              });
            case bb.CDATA_SECTION_NODE:
              return {
                type: tb.CDATA, textContent: "", rootId: hb
              };
            case bb.COMMENT_NODE:
              return {
                type: tb.Comment, textContent: Rb.textContent(bb) || "", rootId: hb
              };
            default:
              return !1
          }
        }(bb, {
          doc: Mb,
          mirror: eb,
          blockClass: Hb,
          blockSelector: pb,
          needsMask: fb,
          inlineStylesheet: Lb,
          maskInputOptions: Ib,
          maskTextFn: Ob,
          maskInputFn: Ub,
          maskAllElementAttributes: Cb,
          maskAttributeFn: Eb,
          dataURLOptions: Bb,
          inlineImages: sb,
          recordCanvas: mb,
          canvasMaskingConfigured: hb,
          keepIframeSrcFn: Db,
          newlyAddedElement: cb
        });
        if (!Jb) return console.warn(bb, "not serialized"), null;
        let Sb;
        Sb = eb.hasNode(bb) ? eb.getId(bb) : function(bb, wb) {
          if (wb.comment && bb.type === tb.Comment) return !0;
          if (bb.type === tb.Element) {
            if (wb.script && ("script" === bb.tagName || "link" === bb.tagName && ("preload" === bb.attributes.rel && "script" === bb.attributes.as || "modulepreload" === bb.attributes.rel) || "link" === bb.tagName && "prefetch" === bb.attributes.rel && "string" == typeof bb.attributes.href && "js" === function(bb) {
                var wb;
                let Mb;
                try {
                  Mb = new URL(bb, window.location.href)
                } catch (bb) {
                  return null
                }
                const eb = Mb.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (wb = null == eb ? void 0 : eb[1]) && void 0 !== wb ? wb : null
              }(bb.attributes.href))) return !0;
            if (wb.headFavicon && ("link" === bb.tagName && "shortcut icon" === bb.attributes.rel || "meta" === bb.tagName && (bM(bb.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === bM(bb.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(bM(bb.attributes.rel))))) return !0;
            if ("meta" === bb.tagName) {
              if (wb.headMetaDescKeywords && bM(bb.attributes.name).match(/^description|keywords$/)) return !0;
              if (wb.headMetaSocial && (bM(bb.attributes.property).match(/^(og|twitter|fb):/) || bM(bb.attributes.name).match(/^(og|twitter):/) || "pinterest" === bM(bb.attributes.name))) return !0;
              if (wb.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(bM(bb.attributes.name))) return !0;
              if (wb.headMetaHttpEquiv && void 0 !== bb.attributes["http-equiv"]) return !0;
              if (wb.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(bM(bb.attributes.name)) || bM(bb.attributes.property).match(/^article:/) || bM(bb.attributes.property).match(/^product:/))) return !0;
              if (wb.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(bM(bb.attributes.name))) return !0
            }
          }
          return !1
        }(Jb, Fb) || !Ab && Jb.type === tb.Text && !Jb.isStyle && !Jb.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : Sw();
        const vb = Object.assign(Jb, {
          id: Sb
        });
        if (eb.add(bb, vb), -2 === Sb) return null;
        zb && zb(bb);
        let Qb = !lb;
        if (vb.type === tb.Element) {
          Qb = Qb && !vb.needBlock, delete vb.needBlock;
          const wb = Rb.shadowRoot(bb);
          wb && gw(wb) && (vb.isShadowHost = !0)
        }
        if ((vb.type === tb.Document || vb.type === tb.Element) && Qb) {
          Fb.headWhitespace && vb.type === tb.Element && "head" === vb.tagName && (Ab = !1);
          const wb = {
            doc: Mb,
            mirror: eb,
            blockClass: Hb,
            blockSelector: pb,
            needsMask: fb,
            maskTextClass: Vb,
            maskTextSelector: gb,
            skipChild: lb,
            inlineStylesheet: Lb,
            maskInputOptions: Ib,
            maskTextFn: Ob,
            maskInputFn: Ub,
            maskAllElementAttributes: Cb,
            maskAttributeFn: Eb,
            slimDOMOptions: Fb,
            dataURLOptions: Bb,
            inlineImages: sb,
            recordCanvas: mb,
            canvasMaskingConfigured: hb,
            preserveWhiteSpace: Ab,
            onSerialize: zb,
            onIframeLoad: Xb,
            iframeLoadTimeout: xb,
            onIframeListenerRegistered: jb,
            onStylesheetLoad: Kb,
            stylesheetLoadTimeout: rb,
            keepIframeSrcFn: Db,
            depth: Yb + 1,
            maxDepth: Zb
          };
          if (vb.type === tb.Element && "textarea" === vb.tagName && void 0 !== vb.attributes.value);
          else
            for (const Mb of Array.from(Rb.childNodes(bb))) {
              const bb = eM(Mb, wb);
              bb && vb.childNodes.push(bb)
            }
          let cb = null;
          if (pw(bb) && (cb = Rb.shadowRoot(bb)))
            for (const bb of Array.from(Rb.childNodes(cb))) {
              const Mb = eM(bb, wb);
              Mb && (gw(cb) && (Mb.isShadow = !0), vb.childNodes.push(Mb))
            }
        }
        const ab = Rb.parentNode(bb);
        if (ab && Vw(ab) && gw(ab) && (vb.isShadow = !0), vb.type === tb.Element && "iframe" === vb.tagName) {
          const wb = function(bb, wb, Mb) {
            const eb = () => {},
              Hb = bb.contentWindow;
            if (!Hb) return eb;
            let pb;
            try {
              pb = Hb.document.readyState
            } catch (bb) {
              return eb
            }
            const Vb = () => wb();
            if ("complete" !== pb) {
              let eb = !1,
                Hb = null;
              const pb = () => {
                  eb || (eb = !0, null !== Hb && (clearTimeout(Hb), Hb = null), ow(bb, "load", gb), bb.addEventListener("load", Vb), wb())
                },
                gb = () => pb();
              return Hb = setTimeout(pb, Mb), bb.addEventListener("load", gb), () => {
                null !== Hb && (clearTimeout(Hb), Hb = null), eb ? ow(bb, "load", Vb) : (eb = !0, ow(bb, "load", gb))
              }
            }
            const gb = "about:blank";
            let lb;
            try {
              lb = Hb.location.href
            } catch (bb) {
              return eb
            }
            if (lb !== gb || bb.src === gb || "" === bb.src) {
              const Mb = setTimeout(wb, 0);
              return bb.addEventListener("load", Vb), () => {
                clearTimeout(Mb), ow(bb, "load", Vb)
              }
            }
            return bb.addEventListener("load", Vb), () => {
              ow(bb, "load", Vb)
            }
          }(bb, (() => {
            const wb = bb.contentDocument;
            if (wb && Xb) {
              const Mb = eM(wb, {
                doc: wb,
                mirror: eb,
                blockClass: Hb,
                blockSelector: pb,
                needsMask: fb,
                maskTextClass: Vb,
                maskTextSelector: gb,
                skipChild: !1,
                inlineStylesheet: Lb,
                maskInputOptions: Ib,
                maskTextFn: Ob,
                maskInputFn: Ub,
                maskAllElementAttributes: Cb,
                maskAttributeFn: Eb,
                slimDOMOptions: Fb,
                dataURLOptions: Bb,
                inlineImages: sb,
                recordCanvas: mb,
                canvasMaskingConfigured: hb,
                preserveWhiteSpace: Ab,
                onSerialize: zb,
                onIframeLoad: Xb,
                iframeLoadTimeout: xb,
                onIframeListenerRegistered: jb,
                onStylesheetLoad: Kb,
                stylesheetLoadTimeout: rb,
                keepIframeSrcFn: Db,
                depth: Yb + 1,
                maxDepth: Zb
              });
              Mb && Xb(bb, Mb)
            }
          }), xb);
          null == jb || jb(bb, wb)
        }
        return vb.type === tb.Element && "link" === vb.tagName && Pw(vb.attributes.rel) && function(wb, lb, tb) {
          if (Tw.has(wb)) return;
          let jb;
          try {
            jb = wb.sheet
          } catch (bb) {
            return
          }
          if (jb) return;
          const Rb = new AbortController;
          let cb = !1;
          const Wb = () => {
              if (!cb) {
                cb = !0;
                try {
                  (() => {
                    if (Kb) {
                      const wb = eM(bb, {
                        doc: Mb,
                        mirror: eb,
                        blockClass: Hb,
                        blockSelector: pb,
                        needsMask: fb,
                        maskTextClass: Vb,
                        maskTextSelector: gb,
                        skipChild: !1,
                        inlineStylesheet: Lb,
                        maskInputOptions: Ib,
                        maskTextFn: Ob,
                        maskInputFn: Ub,
                        maskAllElementAttributes: Cb,
                        maskAttributeFn: Eb,
                        slimDOMOptions: Fb,
                        dataURLOptions: Bb,
                        inlineImages: sb,
                        recordCanvas: mb,
                        canvasMaskingConfigured: hb,
                        preserveWhiteSpace: Ab,
                        onSerialize: zb,
                        onIframeLoad: Xb,
                        iframeLoadTimeout: xb,
                        onStylesheetLoad: Kb,
                        stylesheetLoadTimeout: rb,
                        keepIframeSrcFn: Db,
                        depth: Yb,
                        maxDepth: Zb
                      });
                      wb && Kb(bb, wb)
                    }
                  })()
                } finally {
                  Tw.delete(wb), Rb.abort()
                }
              }
            },
            Jb = setTimeout(Wb, tb);
          Rb.signal.addEventListener("abort", (() => clearTimeout(Jb)), {
            once: !0
          }), wb.addEventListener("load", Wb, {
            signal: Rb.signal,
            once: !0
          }), Tw.set(wb, Rb)
        }(bb, 0, rb), vb
      }

      function HM(bb) {
        return !0 === bb || "all" === bb ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === bb,
          headMetaDescKeywords: "all" === bb,
          headTitleMutations: "all" === bb
        } : !1 === bb ? {} : bb
      }
      var pM = class bb {
        constructor() {
          Hw(this, "parentElement", null), Hw(this, "parentNode", null), Hw(this, "ownerDocument", void 0), Hw(this, "firstChild", null), Hw(this, "lastChild", null), Hw(this, "previousSibling", null), Hw(this, "nextSibling", null), Hw(this, "ELEMENT_NODE", 1), Hw(this, "TEXT_NODE", 3), Hw(this, "nodeType", void 0), Hw(this, "nodeName", void 0), Hw(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const bb = [];
          let wb = this.firstChild;
          for (; wb;) bb.push(wb), wb = wb.nextSibling;
          return bb
        }
        contains(wb) {
          if (!(wb instanceof bb)) return !1;
          if (wb.ownerDocument !== this.ownerDocument) return !1;
          if (wb === this) return !0;
          for (; wb.parentNode;) {
            if (wb.parentNode === this) return !0;
            wb = wb.parentNode
          }
          return !1
        }
        appendChild(bb) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(bb, wb) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(bb) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function VM(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const eb = {
          capture: !0,
          passive: !0
        };
        return Mb.addEventListener(bb, wb, eb), () => gM(Mb, bb, wb, eb)
      }

      function gM(bb, wb, Mb, eb) {
        lM((() => {
          const Hb = bb.removeEventListener;
          "function" == typeof Hb && (void 0 !== eb ? Hb.call(bb, wb, Mb, eb) : Hb.call(bb, wb, Mb))
        }))
      }

      function lM(bb) {
        try {
          bb()
        } catch (bb) {
          if (!(bb instanceof DOMException && "SecurityError" === bb.name)) throw bb
        }
      }

      function LM(bb) {
        bb.forEach((bb => {
          if ("function" == typeof bb) try {
            bb()
          } catch (bb) {}
        }))
      }
      var IM = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        OM = {
          map: {},
          getId: () => (console.warn(IM), -1),
          OHb: () => (console.warn(IM), null),
          removeNodeFromMap() {
            console.warn(IM)
          },
          has: () => (console.warn(IM), !1),
          reset() {
            console.warn(IM)
          }
        };

      function UM(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          eb = null,
          Hb = 0;
        return function() {
          for (var pb = arguments.length, Vb = new Array(pb), gb = 0; gb < pb; gb++) Vb[gb] = arguments[gb];
          const lb = Date.now();
          Hb || !1 !== Mb.leading || (Hb = lb);
          const Lb = wb - (lb - Hb),
            Ib = this;
          0 >= Lb || Lb > wb ? (eb && (clearTimeout(eb), eb = null), Hb = lb, bb.apply(Ib, Vb)) : eb || !1 === Mb.trailing || (eb = setTimeout((() => {
            Hb = !1 === Mb.leading ? 0 : Date.now(), eb = null, bb.apply(Ib, Vb)
          }), Lb))
        }
      }

      function tM(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const pb = Hb.Object.getOwnPropertyDescriptor(bb, wb),
          Vb = () => tM(bb, wb, pb || {}, !0);
        if (eb) return Hb.Object.defineProperty(bb, wb, Mb), Vb;
        const gb = function(bb) {
          let wb = "function" == typeof bb.setTimeout ? bb.setTimeout : void 0;
          try {
            var Mb, eb;
            const Hb = null === (Mb = bb.Zone) || void 0 === Mb || null === (eb = Mb.__symbol__) || void 0 === eb ? void 0 : eb.call(Mb, "setTimeout"),
              pb = Hb ? bb[Hb] : void 0;
            "function" == typeof pb && (wb = pb)
          } catch (bb) {}
          if (!wb) return () => {};
          const Hb = wb;
          return wb => {
            try {
              Hb.call(bb, wb, 0)
            } catch (bb) {}
          }
        }(Hb);
        return Hb.Object.defineProperty(bb, wb, {
          set(bb) {
            if (gb((() => {
                try {
                  Mb.set.call(this, bb)
                } catch (bb) {}
              })), pb && pb.set) {
              if (pb.get) try {
                pb.get.call(this)
              } catch (bb) {
                return
              }
              pb.set.call(this, bb)
            }
          }
        }), Vb
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (OM = new Proxy(OM, {
        get: (bb, wb, Mb) => ("map" === wb && console.warn(IM), Reflect.get(bb, wb, Mb))
      }));
      var CM = Date.now;

      function EM(bb) {
        var wb, Mb, eb, Hb;
        const pb = bb.document;
        return {
          left: pb.scrollingElement ? pb.scrollingElement.scrollLeft : void 0 !== bb.pageXOffset ? bb.pageXOffset : pb.documentElement.scrollLeft || (null == pb ? void 0 : pb.body) && (null === (wb = Rb.parentElement(pb.body)) || void 0 === wb ? void 0 : wb.scrollLeft) || (null == pb || null === (Mb = pb.body) || void 0 === Mb ? void 0 : Mb.scrollLeft) || 0,
          top: pb.scrollingElement ? pb.scrollingElement.scrollTop : void 0 !== bb.pageYOffset ? bb.pageYOffset : (null == pb ? void 0 : pb.documentElement.scrollTop) || (null == pb ? void 0 : pb.body) && (null === (eb = Rb.parentElement(pb.body)) || void 0 === eb ? void 0 : eb.scrollTop) || (null == pb || null === (Hb = pb.body) || void 0 === Hb ? void 0 : Hb.scrollTop) || 0
        }
      }

      function FM() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function BM() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function sM(bb) {
        return bb ? bb.nodeType === bb.ELEMENT_NODE ? bb : Rb.parentElement(bb) : null
      }

      function mM(bb, wb, Mb, eb) {
        if (!bb) return !1;
        const Hb = sM(bb);
        if (!Hb) return !1;
        try {
          if ("string" == typeof wb) {
            if (Hb.classList.contains(wb)) return !0;
            if (eb && null !== Hb.closest("." + wb)) return !0
          } else if (nw(Hb, wb, eb)) return !0
        } catch (bb) {}
        if (Mb) {
          if (Hb.matches(Mb)) return !0;
          if (eb && null !== Hb.closest(Mb)) return !0
        }
        return !1
      }

      function hM(bb, wb, Mb) {
        return !("TITLE" !== bb.tagName || !Mb.headTitleMutations) || -2 === wb.getId(bb)
      }

      function zM(bb, wb) {
        if (Vw(bb)) return !1;
        const Mb = wb.getId(bb);
        if (!wb.has(Mb)) return !0;
        const eb = Rb.parentNode(bb);
        return (!eb || eb.nodeType !== bb.DOCUMENT_NODE) && (!eb || zM(eb, wb))
      }

      function XM(bb) {
        return Boolean(bb.changedTouches)
      }

      function xM(bb, wb) {
        return Boolean("IFRAME" === bb.nodeName && wb.getMeta(bb))
      }

      function jM(bb, wb) {
        return Boolean("LINK" === bb.nodeName && bb.nodeType === bb.ELEMENT_NODE && bb.getAttribute && "stylesheet" === bb.getAttribute("rel") && wb.getMeta(bb))
      }

      function KM(bb) {
        return !!bb && (bb instanceof pM && "shadowRoot" in bb ? Boolean(bb.shadowRoot) : Boolean(Rb.shadowRoot(bb)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (CM = () => (new Date).getTime());
      var rM = class {
        constructor() {
          Hw(this, "id", 1), Hw(this, "styleIDMap", new WeakMap), Hw(this, "idStyleMap", new Map)
        }
        getId(bb) {
          var wb;
          return null !== (wb = this.styleIDMap.get(bb)) && void 0 !== wb ? wb : -1
        }
        has(bb) {
          return this.styleIDMap.has(bb)
        }
        add(bb, wb) {
          if (this.has(bb)) return this.getId(bb);
          let Mb;
          return Mb = void 0 === wb ? this.id++ : wb, this.styleIDMap.set(bb, Mb), this.idStyleMap.set(Mb, bb), Mb
        }
        getStyle(bb) {
          return this.idStyleMap.get(bb) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function RM(bb) {
        var wb;
        let Mb = null;
        return "getRootNode" in bb && (null === (wb = Rb.getRootNode(bb)) || void 0 === wb ? void 0 : wb.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && Rb.host(Rb.getRootNode(bb)) && (Mb = Rb.host(Rb.getRootNode(bb))), Mb
      }

      function DM(bb) {
        const wb = bb.ownerDocument;
        if (!wb) return !1;
        if (Rb.contains(wb, bb)) return !0;
        const Mb = Rb.isConnected(bb);
        return "boolean" == typeof Mb ? Mb : function(bb) {
          const wb = bb.ownerDocument;
          if (!wb) return !1;
          const Mb = function(bb) {
            let wb, Mb = bb;
            for (; wb = RM(Mb);) Mb = wb;
            return Mb
          }(bb);
          return Rb.contains(wb, Mb)
        }(bb)
      }

      function cM(bb) {
        return "__ln" in bb
      }
      var YM, ZM = class {
          constructor() {
            Hw(this, "length", 0), Hw(this, "head", null), Hw(this, "tail", null)
          }
          get(bb) {
            if (bb >= this.length) throw new Error("Position outside of list range");
            let wb = this.head;
            for (let Mb = 0; bb > Mb; Mb++) wb = (null == wb ? void 0 : wb.next) || null;
            return wb
          }
          addNode(bb) {
            const wb = {
              value: bb,
              previous: null,
              next: null
            };
            if (bb.__ln = wb, bb.previousSibling && cM(bb.previousSibling)) {
              const Mb = bb.previousSibling.__ln.next;
              wb.next = Mb, wb.previous = bb.previousSibling.__ln, bb.previousSibling.__ln.next = wb, Mb && (Mb.previous = wb)
            } else if (bb.nextSibling && cM(bb.nextSibling) && bb.nextSibling.__ln.previous) {
              const Mb = bb.nextSibling.__ln.previous;
              wb.previous = Mb, wb.next = bb.nextSibling.__ln, bb.nextSibling.__ln.previous = wb, Mb && (Mb.next = wb)
            } else this.head && (this.head.previous = wb), wb.next = this.head, this.head = wb;
            null === wb.next && (this.tail = wb), this.length++
          }
          removeNode(bb) {
            const wb = bb.__ln;
            this.head && (wb.previous ? (wb.previous.next = wb.next, wb.next ? wb.next.previous = wb.previous : this.tail = wb.previous) : (this.head = wb.next, this.head ? this.head.previous = null : this.tail = null), bb.__ln && delete bb.__ln, this.length--)
          }
        },
        fM = (bb, wb) => `${bb}@${wb}`,
        AM = class {
          constructor() {
            Hw(this, "frozen", !1), Hw(this, "locked", !1), Hw(this, "texts", []), Hw(this, "attributes", []), Hw(this, "attributeMap", new WeakMap), Hw(this, "generatedAttributes", new WeakMap), Hw(this, "removes", []), Hw(this, "mapRemoves", new Set), Hw(this, "movedMap", {}), Hw(this, "addedSet", new Set), Hw(this, "movedSet", new Set), Hw(this, "droppedSet", new Set), Hw(this, "removesSubTreeCache", new Set), Hw(this, "mutationCb", void 0), Hw(this, "blockClass", void 0), Hw(this, "blockSelector", void 0), Hw(this, "maskTextClass", void 0), Hw(this, "maskTextSelector", void 0), Hw(this, "inlineStylesheet", void 0), Hw(this, "maskInputOptions", void 0), Hw(this, "maskTextFn", void 0), Hw(this, "maskInputFn", void 0), Hw(this, "maskAllElementAttributes", void 0), Hw(this, "maskAttributeFn", void 0), Hw(this, "keepIframeSrcFn", void 0), Hw(this, "recordCanvas", void 0), Hw(this, "canvasMaskingConfigured", void 0), Hw(this, "inlineImages", void 0), Hw(this, "slimDOMOptions", void 0), Hw(this, "dataURLOptions", void 0), Hw(this, "doc", void 0), Hw(this, "mirror", void 0), Hw(this, "iframeManager", void 0), Hw(this, "stylesheetManager", void 0), Hw(this, "shadowDomManager", void 0), Hw(this, "canvasManager", void 0), Hw(this, "processedNodeManager", void 0), Hw(this, "unattachedDoc", void 0), Hw(this, "canvasManagerReleased", !1), Hw(this, "processMutations", (bb => {
              bb.forEach(this.processMutation), this.emit()
            })), Hw(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const bb = Db(),
                wb = fb();
              try {
                this.processBufferedMutations()
              } finally {
                Mb = Db() - bb, eb = wb, Wb > 0 || Ab(Mb, null != eb ? eb : cb) || Mb > ib.slowestBatchMs && (ib.slowestBatchMs = Mb)
              }
              var Mb, eb
            })), Hw(this, "processBufferedMutations", (() => {
              const bb = [],
                wb = new Set,
                Mb = new ZM,
                eb = bb => {
                  let wb = bb,
                    Mb = -2;
                  for (; - 2 === Mb;) wb = wb && wb.nextSibling, Mb = wb && this.mirror.getId(wb);
                  return Mb
                };
              let Hb;
              const pb = pb => {
                var Vb;
                const gb = Rb.parentNode(pb);
                if (!gb || !DM(pb) || "TEXTAREA" === gb.tagName) return;
                if (this.isBlockedAtEmission(gb)) return;
                const lb = Vw(gb) ? this.mirror.getId(RM(pb)) : this.mirror.getId(gb),
                  Lb = eb(pb);
                if (-1 === lb || -1 === Lb) return Mb.addNode(pb);
                null !== (Vb = Hb) && void 0 !== Vb || (Hb = {
                  doc: this.doc,
                  mirror: this.mirror,
                  blockClass: this.blockClass,
                  blockSelector: this.blockSelector,
                  maskTextClass: this.maskTextClass,
                  maskTextSelector: this.maskTextSelector,
                  skipChild: !0,
                  newlyAddedElement: !0,
                  inlineStylesheet: this.inlineStylesheet,
                  maskInputOptions: this.maskInputOptions,
                  maskTextFn: this.maskTextFn,
                  maskInputFn: this.maskInputFn,
                  maskAllElementAttributes: this.maskAllElementAttributes,
                  maskAttributeFn: this.maskAttributeFn,
                  slimDOMOptions: this.slimDOMOptions,
                  dataURLOptions: this.dataURLOptions,
                  recordCanvas: this.recordCanvas,
                  canvasMaskingConfigured: this.canvasMaskingConfigured,
                  inlineImages: this.inlineImages,
                  onSerialize: bb => {
                    xM(bb, this.mirror) && this.iframeManager.addIframe(bb), jM(bb, this.mirror) && this.stylesheetManager.trackLinkElement(bb), KM(bb) && !mM(bb, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(Rb.shadowRoot(bb), this.doc)
                  },
                  onIframeLoad: (bb, wb) => {
                    this.iframeManager.attachIframe(bb, wb), this.shadowDomManager.observeAttachShadow(bb)
                  },
                  onIframeListenerRegistered: (bb, wb) => {
                    this.iframeManager.registerLoadListenerDisposer(bb, wb)
                  },
                  onStylesheetLoad: (bb, wb) => {
                    this.stylesheetManager.attachLinkElement(bb, wb)
                  }
                });
                const Ib = eM(pb, Hb);
                Ib && (bb.push({
                  parentId: lb,
                  nextId: Lb,
                  node: Ib
                }), wb.add(Ib.id))
              };
              for (const lb of this.mapRemoves) this.mapRemoves.delete(lb), this.mirror.removeNodeFromMap(lb);
              for (const lb of this.movedSet) JM(this.removesSubTreeCache, lb) && !this.movedSet.has(Rb.parentNode(lb)) || pb(lb);
              for (const lb of this.addedSet) SM(this.droppedSet, lb) || JM(this.removesSubTreeCache, lb) ? SM(this.movedSet, lb) ? pb(lb) : this.droppedSet.add(lb) : pb(lb);
              let Vb = null;
              for (; Mb.length;) {
                let bb = null;
                if (Vb) {
                  const wb = this.mirror.getId(Rb.parentNode(Vb.value)),
                    Mb = eb(Vb.value); - 1 !== wb && -1 !== Mb && (bb = Vb)
                }
                if (!bb) {
                  let wb = Mb.tail;
                  for (; wb;) {
                    const Mb = wb;
                    if (wb = wb.previous, Mb) {
                      const wb = this.mirror.getId(Rb.parentNode(Mb.value));
                      if (-1 === eb(Mb.value)) continue;
                      if (-1 !== wb) {
                        bb = Mb;
                        break
                      } {
                        const wb = Rb.parentNode(Mb.value);
                        if (wb && wb.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const eb = Rb.host(wb);
                          if (-1 !== this.mirror.getId(eb)) {
                            bb = Mb;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!bb) {
                  for (; Mb.head;) Mb.removeNode(Mb.head.value);
                  break
                }
                Vb = bb.previous, Mb.removeNode(bb.value), pb(bb.value)
              }
              const gb = {
                texts: this.texts.filter((bb => !this.isBlockedAtEmission(bb.node))).map((bb => {
                  const wb = bb.node,
                    Mb = Rb.parentNode(wb);
                  return Mb && "TEXTAREA" === Mb.tagName && this.genTextAreaValueMutation(Mb), {
                    id: this.mirror.getId(wb),
                    value: bb.value
                  }
                })).filter((bb => !wb.has(bb.id))).filter((bb => this.mirror.has(bb.id))),
                attributes: this.attributes.filter((bb => !this.isBlockedAtEmission(bb.node))).map((bb => {
                  const {
                    attributes: wb
                  } = bb;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof wb.style) {
                    const Mb = JSON.stringify(bb.styleDiff),
                      eb = JSON.stringify(bb._unchangedStyles);
                    wb.style.length > Mb.length && (Mb + eb).split("var(").length === wb.style.split("var(").length && (wb.style = bb.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [eb, Hb] of Object.entries(wb))
                      if ("string" == typeof Hb || null === Hb) {
                        var Mb;
                        wb[eb] = Xw({
                          element: bb.node,
                          name: eb,
                          value: Hb,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (Mb = this.generatedAttributes.get(bb.node)) || void 0 === Mb ? void 0 : Mb.has(eb)
                        })
                      } return {
                    id: this.mirror.getId(bb.node),
                    attributes: wb
                  }
                })).filter((bb => !wb.has(bb.id))).filter((bb => this.mirror.has(bb.id))),
                removes: this.removes,
                adds: bb
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (gb.texts.length || gb.attributes.length || gb.removes.length || gb.adds.length) && this.mutationCb(gb)
            })), Hw(this, "bufferBelongsToIframe", (bb => this.doc === bb.contentDocument)), Hw(this, "genTextAreaValueMutation", (bb => {
              let wb = this.attributeMap.get(bb);
              wb || (wb = {
                node: bb,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(wb), this.attributeMap.set(bb, wb));
              const Mb = Array.from(Rb.childNodes(bb), (bb => Rb.textContent(bb) || "")).join("");
              wb.attributes.value = mw({
                element: bb,
                maskInputOptions: this.maskInputOptions,
                tagName: bb.tagName,
                type: jw(bb),
                value: Mb,
                maskInputFn: this.maskInputFn
              })
            })), Hw(this, "processMutation", (bb => {
              if (!hM(bb.target, this.mirror, this.slimDOMOptions)) switch (bb.type) {
                case "characterData": {
                  const wb = Rb.textContent(bb.target);
                  mM(bb.target, this.blockClass, this.blockSelector, !1) || wb === bb.oldValue || this.texts.push({
                    value: yw(bb.target, this.maskTextClass, this.maskTextSelector, !0) && wb ? this.maskTextFn ? this.maskTextFn(wb, sM(bb.target)) : wb.replace(/[\S]/g, "*") : wb,
                    node: bb.target
                  });
                  break
                }
                case "attributes": {
                  var wb;
                  const eb = bb.target,
                    Hb = hw(eb.tagName),
                    pb = bb.attributeName,
                    Vb = null !== (wb = bb.attributeNamespace) && void 0 !== wb ? wb : null;
                  let gb = function(bb, wb, Mb) {
                      if (!Mb) return wb;
                      const eb = bb.getAttributeNodeNS(Mb, wb);
                      if (eb) return eb.name;
                      if ("http://www.w3.org/1999/xlink" === Mb) return `xlink:${wb}`;
                      if ("http://www.w3.org/XML/1998/namespace" === Mb) return `xml:${wb}`;
                      if ("http://www.w3.org/2000/xmlns/" === Mb) return "xmlns" === wb ? wb : `xmlns:${wb}`;
                      const Hb = bb.lookupPrefix(Mb);
                      return Hb ? `${Hb}:${wb}` : wb
                    }(eb, pb, Vb),
                    lb = Vb ? eb.getAttributeNS(Vb, pb) : bb.target.getAttribute(pb);
                  if ("value" === gb) {
                    const bb = eb,
                      wb = jw(bb);
                    lb = mw({
                      element: bb,
                      maskInputOptions: this.maskInputOptions,
                      tagName: eb.tagName,
                      type: wb,
                      value: lb,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (mM(bb.target, this.blockClass, this.blockSelector, !1) || lb === bb.oldValue) return;
                  let Lb = this.attributeMap.get(bb.target);
                  const Ib = "iframe" === Hb && "src" === gb;
                  if (Ib && !this.keepIframeSrcFn(lb) && eb.contentDocument) return;
                  if ("type" === gb && "input" === Hb && "password" === (bb.oldValue || "").toLowerCase() && eb.setAttribute("data-rr-is-password", "true"), !dw(Hb, gb)) {
                    var Mb;
                    Lb || (Lb = {
                      node: bb.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(Lb), this.attributeMap.set(bb.target, Lb));
                    const wb = uw(this.doc, Hb, hw(gb), lb, eb, this.dataURLOptions);
                    if (Ib && !this.keepIframeSrcFn(lb) && (gb = "rr_src"), Lb.attributes[gb] = wb, null === (Mb = this.generatedAttributes.get(bb.target)) || void 0 === Mb || Mb.delete(gb), "style" === gb) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (bb) {
                        this.unattachedDoc = this.doc
                      }
                      const wb = this.unattachedDoc.createElement("span"),
                        Mb = eb.style;
                      bb.oldValue && (wb.style.cssText = bb.oldValue);
                      for (const bb of Array.from(Mb)) {
                        const eb = Mb.getPropertyValue(bb),
                          Hb = Mb.getPropertyPriority(bb);
                        eb !== wb.style.getPropertyValue(bb) || Hb !== wb.style.getPropertyPriority(bb) ? Lb.styleDiff[bb] = "" === Hb ? eb : [eb, Hb] : Lb._unchangedStyles[bb] = [eb, Hb]
                      }
                      for (const bb of Array.from(wb.style)) "" === Mb.getPropertyValue(bb) && (Lb.styleDiff[bb] = !1)
                    } else if ("open" === gb && "dialog" === Hb) {
                      Lb.attributes.rr_open_mode = eb.matches("dialog:modal") ? "modal" : "non-modal";
                      let wb = this.generatedAttributes.get(bb.target);
                      wb || (wb = new Set, this.generatedAttributes.set(bb.target, wb)), wb.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (mM(bb.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === bb.target.tagName) return void this.genTextAreaValueMutation(bb.target);
                  bb.addedNodes.forEach((wb => this.genAdds(wb, bb.target))), bb.removedNodes.forEach((wb => {
                    const Mb = this.mirror.getId(wb),
                      eb = Vw(bb.target) ? this.mirror.getId(Rb.host(bb.target)) : this.mirror.getId(bb.target);
                    mM(bb.target, this.blockClass, this.blockSelector, !1) || hM(wb, this.mirror, this.slimDOMOptions) || ! function(bb, wb) {
                      return -1 !== wb.getId(bb)
                    }(wb, this.mirror) || (this.addedSet.has(wb) ? (WM(this.addedSet, wb), this.droppedSet.add(wb)) : this.addedSet.has(bb.target) && -1 === Mb || zM(bb.target, this.mirror) || (this.movedSet.has(wb) && this.movedMap[fM(Mb, eb)] ? WM(this.movedSet, wb) : (this.removes.push({
                      parentId: eb,
                      id: Mb,
                      isShadow: !(!Vw(bb.target) || !gw(bb.target)) || void 0
                    }), function(bb, wb) {
                      const Mb = [bb];
                      for (; Mb.length;) {
                        const bb = Mb.pop();
                        wb.has(bb) || (wb.add(bb), Rb.childNodes(bb).forEach((bb => Mb.push(bb))))
                      }
                    }(wb, this.removesSubTreeCache))), this.mapRemoves.add(wb))
                  }))
              }
            })), Hw(this, "genAdds", ((bb, wb) => {
              if (!this.processedNodeManager.inOtherBuffer(bb, this)) {
                if (this.addedSet.has(bb)) return this.addedSet.delete(bb), void this.addedSet.add(bb);
                if (!this.movedSet.has(bb)) {
                  if (this.mirror.hasNode(bb)) {
                    if (hM(bb, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(bb);
                    let Mb = null;
                    wb && this.mirror.hasNode(wb) && (Mb = this.mirror.getId(wb)), Mb && -1 !== Mb && (this.movedMap[fM(this.mirror.getId(bb), Mb)] = !0)
                  } else this.addedSet.add(bb), this.droppedSet.delete(bb);
                  if (!mM(bb, this.blockClass, this.blockSelector, !1)) {
                    if (bb.nodeType === bb.TEXT_NODE) return;
                    const wb = Rb.childNodes(bb);
                    for (let bb = 0, Mb = wb.length; Mb > bb; bb++) {
                      const Mb = wb[bb];
                      Mb && this.genAdds(Mb)
                    }
                    if (KM(bb)) {
                      const wb = Rb.childNodes(Rb.shadowRoot(bb));
                      for (let Mb = 0, eb = wb.length; eb > Mb; Mb++) {
                        const eb = wb[Mb];
                        eb && (this.processedNodeManager.add(eb, this), this.genAdds(eb, bb))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(bb) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((wb => {
              this[wb] = bb[wb]
            })), this.canvasManager.acquire()
          }
          freeze() {
            this.frozen = !0, this.canvasManager.freeze()
          }
          unfreeze() {
            this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
          }
          isFrozen() {
            return this.frozen
          }
          lock() {
            this.locked = !0, this.canvasManager.lock()
          }
          unlock() {
            this.locked = !1, this.canvasManager.unlock(), this.emit()
          }
          reset() {
            this.releaseCanvasManager()
          }
          releaseCanvasManager() {
            this.canvasManagerReleased || (this.canvasManagerReleased = !0, this.canvasManager.reset())
          }
          bufferDoc() {
            return this.doc
          }
          destroy() {
            for (const bb of this.mapRemoves) this.mapRemoves.delete(bb), this.mirror.removeNodeFromMap(bb)
          }
          isBlockedAtEmission(bb) {
            const wb = this.blockClass,
              Mb = wb && "string" != typeof wb && (wb.global || wb.sticky) ? new RegExp(wb) : null;
            for (; bb;) {
              if (Mb && (Mb.lastIndex = 0), mM(bb, Mb || wb, this.blockSelector, !0)) return !0;
              const eb = "getRootNode" in bb ? Rb.getRootNode(bb) : null;
              bb = (null == eb ? void 0 : eb.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? Rb.host(eb) : null
            }
            return !1
          }
        };

      function WM(bb, wb) {
        const Mb = [wb];
        for (; Mb.length;) {
          const wb = Mb.pop();
          if (bb.delete(wb), wb.nodeType === wb.TEXT_NODE) continue;
          const eb = Rb.childNodes(wb);
          for (let bb = 0, Hb = eb.length; Hb > bb; bb++) {
            const wb = eb[bb];
            wb && Mb.push(wb)
          }
        }
      }

      function JM(bb, wb, Mb) {
        return 0 !== bb.size && function(bb, wb) {
          const Mb = Rb.parentNode(wb);
          return !!Mb && bb.has(Mb)
        }(bb, wb)
      }

      function SM(bb, wb) {
        if (0 === bb.size) return !1;
        let Mb = Rb.parentNode(wb);
        for (; Mb;) {
          if (bb.has(Mb)) return !0;
          Mb = Rb.parentNode(Mb)
        }
        return !1
      }
      var NM = function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return YM ? function() {
            try {
              return bb(...arguments)
            } catch (bb) {
              if (YM && !0 === YM(bb, wb)) return;
              throw bb
            }
          } : bb
        },
        vM = [];

      function QM(bb) {
        try {
          if ("composedPath" in bb) {
            const wb = bb.composedPath();
            if (wb.length) return wb[0]
          } else if ("path" in bb && bb.path.length) return bb.path[0]
        } catch (bb) {}
        return bb && bb.target
      }

      function GM(bb, wb) {
        const Mb = new AM;
        let eb;
        Mb.init(bb);
        try {
          eb = new(Kb())(NM(Mb.processMutations.bind(Mb)));
          const Hb = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return bb.attributeFilter && bb.attributeFilter.length > 0 && (Hb.attributeFilter = bb.attributeFilter), eb.observe(wb, Hb), vM.push(Mb), {
            observer: eb,
            buffer: Mb
          }
        } catch (bb) {
          try {
            null == eb || eb.disconnect(), Mb.destroy(), Mb.reset()
          } catch (bb) {}
          throw bb
        }
      }

      function qM(bb) {
        let {
          scrollCb: wb,
          doc: Mb,
          mirror: eb,
          blockClass: Hb,
          blockSelector: pb,
          sampling: Vb
        } = bb;
        const gb = new Map,
          lb = bb => {
            const Vb = QM(bb);
            if (!Vb || mM(Vb, Hb, pb, !0)) return;
            const lb = eb.getId(Vb);
            let Lb, Ib;
            if (Vb === Mb && Mb.defaultView) {
              const bb = EM(Mb.defaultView);
              Lb = bb.left, Ib = bb.top
            } else Lb = Vb.scrollLeft, Ib = Vb.scrollTop;
            const Ob = `${Lb},${Ib}`;
            gb.get(lb) !== Ob && (gb.set(lb, Ob), wb({
              id: lb,
              x: Lb,
              y: Ib
            }))
          },
          Lb = [VM("scroll", NM(UM(NM((bb => lb(bb))), Vb.scroll || 100)), Mb)];
        return "onscrollend" in Mb && Lb.push(VM("scrollend", NM(lb), Mb)), () => Lb.forEach((bb => bb()))
      }

      function aM(bb, wb) {
        for (let Mb = vM.length - 1; Mb >= 0; Mb--) {
          const eb = vM[Mb];
          if (!eb) continue;
          let Hb = eb.bufferBelongsToIframe(bb);
          !Hb && wb && wb.has(eb.bufferDoc()) && (Hb = !0), Hb && (eb.reset(), vM.splice(Mb, 1))
        }
      }
      var iM = ["INPUT", "TEXTAREA", "SELECT"],
        uM = new WeakMap;

      function dM(bb) {
        return function bb(wb, Mb) {
          if (TM("CSSGroupingRule") && wb.parentRule instanceof CSSGroupingRule || TM("CSSMediaRule") && wb.parentRule instanceof CSSMediaRule || TM("CSSSupportsRule") && wb.parentRule instanceof CSSSupportsRule || TM("CSSConditionRule") && wb.parentRule instanceof CSSConditionRule) {
            const eb = Array.from(wb.parentRule.cssRules).indexOf(wb);
            return Mb.unshift(eb), bb(wb.parentRule, Mb)
          }
          if (wb.parentStyleSheet) {
            const bb = Array.from(wb.parentStyleSheet.cssRules).indexOf(wb);
            Mb.unshift(bb)
          }
          return Mb
        }(bb, [])
      }

      function PM(bb, wb, Mb) {
        let eb, Hb;
        return bb ? (bb.ownerNode ? eb = wb.getId(bb.ownerNode) : Hb = Mb.getId(bb), {
          styleId: Hb,
          id: eb
        }) : {}
      }

      function nM(bb, wb) {
        let {
          mirror: Mb,
          stylesheetManager: eb
        } = bb;
        var Hb, pb;
        let Vb = null;
        Vb = Mb.getId("#document" === wb.nodeName ? wb : Rb.host(wb));
        const gb = "#document" === wb.nodeName ? null === (Hb = wb.defaultView) || void 0 === Hb ? void 0 : Hb.Document : null === (pb = wb.ownerDocument) || void 0 === pb || null === (pb = pb.defaultView) || void 0 === pb ? void 0 : pb.ShadowRoot,
          lb = (null == gb ? void 0 : gb.prototype) ? Object.getOwnPropertyDescriptor(null == gb ? void 0 : gb.prototype, "adoptedStyleSheets") : void 0;
        return null !== Vb && -1 !== Vb && gb && lb ? (Object.defineProperty(wb, "adoptedStyleSheets", {
          configurable: lb.configurable,
          enumerable: lb.enumerable,
          get() {
            var bb;
            return null === (bb = lb.get) || void 0 === bb ? void 0 : bb.call(this)
          },
          set(bb) {
            let wb;
            try {
              var Mb;
              wb = null === (Mb = lb.set) || void 0 === Mb ? void 0 : Mb.call(this, bb)
            } catch (bb) {
              if (bb && "object" == typeof bb && "NotAllowedError" === bb.name) return;
              throw bb
            }
            if (null !== Vb && -1 !== Vb) try {
              eb.adoptStyleSheets(bb, Vb)
            } catch (bb) {}
            return wb
          }
        }), NM((() => {
          Object.defineProperty(wb, "adoptedStyleSheets", {
            configurable: lb.configurable,
            enumerable: lb.enumerable,
            get: lb.get,
            set: lb.set
          })
        }))) : () => {}
      }
      var yM = new Set;

      function oM(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Mb = bb.doc.defaultView;
        if (!Mb) return () => {};
        let Hb, pb;
        ! function(bb, wb) {
          const {
            mutationCb: Mb,
            mousemoveCb: eb,
            mouseInteractionCb: Hb,
            scrollCb: pb,
            viewportResizeCb: Vb,
            inputCb: gb,
            mediaInteractionCb: lb,
            styleSheetRuleCb: Lb,
            styleDeclarationCb: Ib,
            canvasMutationCb: Ob,
            fontCb: Ub,
            selectionCb: tb,
            customElementCb: Cb
          } = bb;
          bb.mutationCb = function() {
            wb.mutation && wb.mutation(...arguments), Mb(...arguments)
          }, bb.mousemoveCb = function() {
            wb.mousemove && wb.mousemove(...arguments), eb(...arguments)
          }, bb.mouseInteractionCb = function() {
            wb.mouseInteraction && wb.mouseInteraction(...arguments), Hb(...arguments)
          }, bb.scrollCb = function() {
            wb.scroll && wb.scroll(...arguments), pb(...arguments)
          }, bb.viewportResizeCb = function() {
            wb.viewportResize && wb.viewportResize(...arguments), Vb(...arguments)
          }, bb.inputCb = function() {
            wb.input && wb.input(...arguments), gb(...arguments)
          }, bb.mediaInteractionCb = function() {
            wb.mediaInteaction && wb.mediaInteaction(...arguments), lb(...arguments)
          }, bb.styleSheetRuleCb = function() {
            wb.styleSheetRule && wb.styleSheetRule(...arguments), Lb(...arguments)
          }, bb.styleDeclarationCb = function() {
            wb.styleDeclaration && wb.styleDeclaration(...arguments), Ib(...arguments)
          }, bb.canvasMutationCb = function() {
            wb.canvasMutation && wb.canvasMutation(...arguments), Ob(...arguments)
          }, bb.fontCb = function() {
            wb.font && wb.font(...arguments), Ub(...arguments)
          }, bb.selectionCb = function() {
            wb.selection && wb.selection(...arguments), tb(...arguments)
          }, bb.customElementCb = function() {
            wb.customElement && wb.customElement(...arguments), Cb(...arguments)
          }
        }(bb, wb);
        const Vb = [],
          gb = NM((() => {
            try {
              if (pb) try {
                pb.destroy(), pb.reset()
              } finally {
                const bb = vM.indexOf(pb); - 1 !== bb && vM.splice(bb, 1)
              }
              bb.shadowDomManager.resetForDoc(bb.doc), null == Hb || Hb.disconnect()
            } finally {
              LM(Vb)
            }
          })),
          Ob = (bb, wb) => {
            const Mb = NM((() => {
              try {
                return wb()
              } catch (wb) {
                throw yM.add(bb), wb
              }
            }))();
            "function" == typeof Mb && Vb.push(Mb)
          };
        try {
          if (bb.recordDOM && Ob("mutation", (() => {
              const wb = GM(bb, bb.doc);
              Hb = wb.observer, pb = wb.buffer
            })), Ob("move", (() => function(bb) {
              let {
                mousemoveCb: wb,
                sampling: Mb,
                doc: eb,
                mirror: Hb
              } = bb;
              if (!1 === Mb.mousemove) return () => {};
              const pb = "number" == typeof Mb.mousemove ? Mb.mousemove : 50,
                Vb = "number" == typeof Mb.mousemoveCallback ? Mb.mousemoveCallback : 500;
              let gb, Lb = [];
              const Ib = UM(NM((bb => {
                  const Mb = Date.now() - gb;
                  wb(Lb.map((bb => (bb.timeOffset -= Mb, bb))), bb), Lb = [], gb = null
                })), Vb),
                Ob = NM(UM(NM((bb => {
                  const wb = QM(bb),
                    {
                      clientX: Mb,
                      clientY: eb
                    } = XM(bb) ? bb.changedTouches[0] : bb;
                  gb || (gb = CM()), Lb.push({
                    x: Mb,
                    y: eb,
                    id: Hb.getId(wb),
                    timeOffset: CM() - gb
                  }), Ib("undefined" != typeof DragEvent && bb instanceof DragEvent ? lb.Drag : bb instanceof MouseEvent ? lb.MouseMove : lb.TouchMove)
                })), pb, {
                  trailing: !1
                })),
                Ub = [VM("mousemove", Ob, eb), VM("touchmove", Ob, eb), VM("drag", Ob, eb)];
              return NM((() => {
                Ub.forEach((bb => bb()))
              }))
            }(bb))), Ob("mouseInteraction", (() => function(bb) {
              let {
                mouseInteractionCb: wb,
                doc: Mb,
                mirror: Hb,
                blockClass: pb,
                blockSelector: Vb,
                sampling: gb
              } = bb;
              if (!1 === gb.mouseInteraction) return () => {};
              const lb = !0 === gb.mouseInteraction || void 0 === gb.mouseInteraction ? {} : gb.mouseInteraction,
                Ob = [];
              let Ub = null;
              return Object.keys(Lb).filter((bb => Number.isNaN(Number(bb)) && !bb.endsWith("_Departed") && !1 !== lb[bb])).forEach((bb => {
                let gb = hw(bb);
                const lb = (bb => Mb => {
                  const gb = QM(Mb);
                  if (mM(gb, pb, Vb, !0)) return;
                  let lb = null,
                    Ob = bb;
                  if ("pointerType" in Mb) {
                    switch (Mb.pointerType) {
                      case "mouse":
                        lb = Ib.Mouse;
                        break;
                      case "touch":
                        lb = Ib.Touch;
                        break;
                      case "pen":
                        lb = Ib.Pen
                    }
                    lb === Ib.Touch && (Lb[bb] === Lb.MouseDown ? Ob = "TouchStart" : Lb[bb] === Lb.MouseUp && (Ob = "TouchEnd"))
                  } else XM(Mb) && (lb = Ib.Touch);
                  null !== lb ? (Ub = lb, (Ob.startsWith("Touch") && lb === Ib.Touch || Ob.startsWith("Mouse") && lb === Ib.Mouse) && (lb = null)) : Lb[bb] === Lb.Click && (lb = Ub, Ub = null);
                  const tb = XM(Mb) ? Mb.changedTouches[0] : Mb;
                  if (!tb) return;
                  const Cb = Hb.getId(gb),
                    {
                      clientX: Eb,
                      clientY: Fb
                    } = tb;
                  NM(wb)(eb({
                    type: Lb[Ob],
                    id: Cb,
                    x: Eb,
                    y: Fb
                  }, null !== lb && {
                    pointerType: lb
                  }))
                })(bb);
                if (window.PointerEvent) switch (Lb[bb]) {
                  case Lb.MouseDown:
                  case Lb.MouseUp:
                    gb = gb.replace("mouse", "pointer");
                    break;
                  case Lb.TouchStart:
                  case Lb.TouchEnd:
                    return
                }
                Ob.push(VM(gb, lb, Mb))
              })), NM((() => {
                Ob.forEach((bb => bb()))
              }))
            }(bb))), Ob("scroll", (() => qM(bb))), Ob("viewportResize", (() => function(bb, wb) {
              let {
                viewportResizeCb: Mb
              } = bb, {
                win: eb
              } = wb, Hb = -1, pb = -1;
              return VM("resize", NM(UM(NM((() => {
                const bb = FM(),
                  wb = BM();
                Hb === bb && pb === wb || (Mb({
                  width: Number(wb),
                  height: Number(bb)
                }), Hb = bb, pb = wb)
              })), 200)), eb)
            }(bb, {
              win: Mb
            }))), Ob("input", (() => function(bb) {
              let {
                inputCb: wb,
                doc: Mb,
                mirror: Hb,
                blockClass: pb,
                blockSelector: Vb,
                ignoreClass: gb,
                ignoreSelector: lb,
                maskInputOptions: Lb,
                maskInputFn: Ib,
                sampling: Ob,
                userTriggeredOnInput: Ub
              } = bb;

              function tb(bb) {
                let wb = QM(bb);
                const eb = bb.isTrusted,
                  Hb = Mb.defaultView;
                if (wb && Hb && !(wb instanceof Hb.HTMLElement)) return;
                const Ob = wb && wb.tagName;
                if (wb && "OPTION" === Ob && (wb = Rb.parentElement(wb)), !wb || !Ob || 0 > iM.indexOf(Ob) || mM(wb, pb, Vb, !0)) return;
                if (wb.classList.contains(gb) || lb && wb.matches(lb)) return;
                let tb = wb.value,
                  Eb = !1;
                const Fb = jw(wb) || "";
                "radio" === Fb || "checkbox" === Fb ? Eb = wb.checked : (Lb[Ob.toLowerCase()] || Lb[Fb]) && (tb = mw({
                  element: wb,
                  maskInputOptions: Lb,
                  tagName: Ob,
                  type: Fb,
                  value: tb,
                  maskInputFn: Ib
                })), Cb(wb, Ub ? {
                  text: tb,
                  isChecked: Eb,
                  userTriggered: eb
                } : {
                  text: tb,
                  isChecked: Eb
                });
                const Bb = wb.name;
                "radio" === Fb && Bb && Eb && Mb.querySelectorAll(`input[type="radio"][name="${Bb}"]`).forEach((bb => {
                  if (bb !== wb) {
                    const wb = bb.value;
                    Cb(bb, Ub ? {
                      text: wb,
                      isChecked: !Eb,
                      userTriggered: !1
                    } : {
                      text: wb,
                      isChecked: !Eb
                    })
                  }
                }))
              }

              function Cb(bb, Mb) {
                const pb = uM.get(bb);
                if (!pb || pb.text !== Mb.text || pb.isChecked !== Mb.isChecked) {
                  uM.set(bb, Mb);
                  const pb = Hb.getId(bb);
                  NM(wb)(eb(eb({}, Mb), {}, {
                    id: pb
                  }))
                }
              }
              const Eb = ("last" === Ob.input ? ["change"] : ["input", "change"]).map((bb => VM(bb, NM(tb), Mb))),
                Fb = Mb.defaultView;
              if (!Fb) return () => {
                Eb.forEach((bb => bb()))
              };
              const Bb = Fb.Object.getOwnPropertyDescriptor(Fb.HTMLInputElement.prototype, "value");
              return Bb && Bb.set && Eb.push(...[
                [Fb.HTMLInputElement.prototype, "value"],
                [Fb.HTMLInputElement.prototype, "checked"],
                [Fb.HTMLSelectElement.prototype, "value"],
                [Fb.HTMLTextAreaElement.prototype, "value"],
                [Fb.HTMLSelectElement.prototype, "selectedIndex"],
                [Fb.HTMLOptionElement.prototype, "selected"]
              ].map((bb => tM(bb[0], bb[1], {
                set() {
                  NM(tb)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, Fb)))), NM((() => {
                LM(Eb)
              }))
            }(bb))), Ob("mediaInteraction", (() => function(bb) {
              let {
                mediaInteractionCb: wb,
                blockClass: Mb,
                blockSelector: eb,
                mirror: Hb,
                sampling: pb,
                doc: Vb
              } = bb;
              const gb = NM((bb => UM(NM((pb => {
                  const Vb = QM(pb);
                  if (!Vb || mM(Vb, Mb, eb, !0)) return;
                  const {
                    currentTime: gb,
                    volume: lb,
                    muted: Lb,
                    playbackRate: Ib,
                    loop: Ob
                  } = Vb;
                  wb({
                    type: bb,
                    id: Hb.getId(Vb),
                    currentTime: gb,
                    volume: lb,
                    muted: Lb,
                    playbackRate: Ib,
                    loop: Ob
                  })
                })), pb.media || 500))),
                lb = [VM("play", gb(Ub.Play), Vb), VM("pause", gb(Ub.Pause), Vb), VM("seeked", gb(Ub.Seeked), Vb), VM("volumechange", gb(Ub.VolumeChange), Vb), VM("ratechange", gb(Ub.RateChange), Vb)];
              return NM((() => {
                lb.forEach((bb => bb()))
              }))
            }(bb))), bb.recordDOM) {
            const wb = function(bb) {
              const wb = new Map,
                Mb = new Set;
              let eb = !0;
              const Hb = bb => {
                  if (eb) try {
                    bb()
                  } catch (bb) {}
                },
                pb = bb => {
                  var Mb;
                  const eb = wb.get(bb);
                  if (eb) {
                    for (; null === (Mb = eb[0]) || void 0 === Mb ? void 0 : Mb.ready;) {
                      const bb = eb.shift();
                      (null == bb ? void 0 : bb.emit) && Hb(bb.emit)
                    }
                    0 === eb.length && wb.delete(bb)
                  }
                };
              return {
                queueMutation(bb, Mb) {
                  if (!bb) return void Hb(Mb);
                  const eb = wb.get(bb);
                  eb ? (eb.push({
                    emit: Mb,
                    ready: !0
                  }), pb(bb)) : Hb(Mb)
                },
                queuePendingMutation(Vb, gb, lb) {
                  if (!eb) return () => {};
                  let Lb = wb.get(Vb);
                  Lb || (Lb = [], wb.set(Vb, Lb));
                  const Ib = {
                    emit: gb,
                    ready: !1
                  };
                  Lb.push(Ib);
                  let Ob, Ub = !1,
                    tb = !1;
                  const Cb = () => {
                    Ub || tb || (Ub = !0, void 0 !== Ob && Mb.delete(Ob), Ib.ready = !0, Ib.emit = void 0, pb(Vb))
                  };
                  try {
                    Ob = bb.setTimeout(Cb, 5e3), Ub || tb ? bb.clearTimeout(Ob) : Mb.add(Ob)
                  } catch (bb) {
                    Cb()
                  }
                  return wb => {
                    !tb && eb && (tb = !0, void 0 !== Ob && (bb.clearTimeout(Ob), Mb.delete(Ob)), Ub ? wb && Hb(lb) : (Ib.ready = !0, wb || (Ib.emit = void 0), pb(Vb)))
                  }
                },
                reset() {
                  eb = !1, Mb.forEach((wb => bb.clearTimeout(wb))), Mb.clear(), wb.clear()
                }
              }
            }(Mb);
            Vb.push(wb.reset), Ob("styleSheet", (() => function(bb, wb) {
              let {
                styleSheetRuleCb: Mb,
                mirror: eb,
                stylesheetManager: Hb
              } = bb, {
                win: pb,
                mutationQueue: Vb
              } = wb;
              if (!pb.CSSStyleSheet || !pb.CSSStyleSheet.prototype) return () => {};
              const gb = pb.CSSStyleSheet.prototype.insertRule;
              pb.CSSStyleSheet.prototype.insertRule = new Proxy(gb, {
                apply: NM(((bb, wb, pb) => {
                  const [gb] = pb, lb = bb.apply(wb, pb);
                  Hb.onCssomSheetMutation(wb);
                  const {
                    id: Lb,
                    styleId: Ib
                  } = PM(wb, eb, Hb.styleMirror);
                  return (Lb && -1 !== Lb || Ib && -1 !== Ib) && Vb.queueMutation(wb, (() => Mb({
                    id: Lb,
                    styleId: Ib,
                    adds: [{
                      rule: gb,
                      index: lb
                    }]
                  }))), lb
                }), "host")
              }), pb.CSSStyleSheet.prototype.addRule = function(bb, wb) {
                let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return pb.CSSStyleSheet.prototype.insertRule.apply(this, [`${bb} { ${wb} }`, Mb])
              };
              const lb = pb.CSSStyleSheet.prototype.deleteRule;
              let Lb, Ib;
              pb.CSSStyleSheet.prototype.deleteRule = new Proxy(lb, {
                apply: NM(((bb, wb, pb) => {
                  const [gb] = pb, lb = bb.apply(wb, pb);
                  Hb.onCssomSheetMutation(wb);
                  const {
                    id: Lb,
                    styleId: Ib
                  } = PM(wb, eb, Hb.styleMirror);
                  return (Lb && -1 !== Lb || Ib && -1 !== Ib) && Vb.queueMutation(wb, (() => Mb({
                    id: Lb,
                    styleId: Ib,
                    removes: [{
                      index: gb
                    }]
                  }))), lb
                }), "host")
              }), pb.CSSStyleSheet.prototype.removeRule = function(bb) {
                return pb.CSSStyleSheet.prototype.deleteRule.apply(this, [bb])
              }, pb.CSSStyleSheet.prototype.replace && (Lb = pb.CSSStyleSheet.prototype.replace, pb.CSSStyleSheet.prototype.replace = new Proxy(Lb, {
                apply: NM(((bb, wb, pb) => {
                  const [gb] = pb, lb = bb.apply(wb, pb);
                  try {
                    const bb = null == lb ? void 0 : lb.then;
                    if (wb.ownerNode || !lb || "function" != typeof bb) return lb;
                    Hb.onCssomSheetMutation(wb);
                    const {
                      id: pb,
                      styleId: Lb
                    } = PM(wb, eb, Hb.styleMirror);
                    if (!(pb && -1 !== pb || Lb && -1 !== Lb)) return lb;
                    const Ib = Vb.queuePendingMutation(wb, (() => Mb({
                      id: pb,
                      styleId: Lb,
                      replace: gb
                    })), (() => {
                      const bb = Ow(wb);
                      null !== bb && Mb({
                        id: pb,
                        styleId: Lb,
                        replace: bb
                      })
                    }));
                    try {
                      bb.call(lb, (() => Ib(!0)), (() => Ib(!1)))
                    } catch (Mb) {
                      Ib(!1)
                    }
                  } catch (Mb) {}
                  return lb
                }), "host")
              })), pb.CSSStyleSheet.prototype.replaceSync && (Ib = pb.CSSStyleSheet.prototype.replaceSync, pb.CSSStyleSheet.prototype.replaceSync = new Proxy(Ib, {
                apply: NM(((bb, wb, pb) => {
                  const [gb] = pb, lb = bb.apply(wb, pb);
                  Hb.onCssomSheetMutation(wb);
                  const {
                    id: Lb,
                    styleId: Ib
                  } = PM(wb, eb, Hb.styleMirror);
                  return (Lb && -1 !== Lb || Ib && -1 !== Ib) && Vb.queueMutation(wb, (() => Mb({
                    id: Lb,
                    styleId: Ib,
                    replaceSync: gb
                  }))), lb
                }), "host")
              }));
              const Ob = {};
              kM("CSSGroupingRule") ? Ob.CSSGroupingRule = pb.CSSGroupingRule : (kM("CSSMediaRule") && (Ob.CSSMediaRule = pb.CSSMediaRule), kM("CSSConditionRule") && (Ob.CSSConditionRule = pb.CSSConditionRule), kM("CSSSupportsRule") && (Ob.CSSSupportsRule = pb.CSSSupportsRule));
              const Ub = {};
              return Object.entries(Ob).forEach((bb => {
                let [wb, pb] = bb;
                Ub[wb] = {
                  insertRule: pb.prototype.insertRule,
                  deleteRule: pb.prototype.deleteRule
                }, pb.prototype.insertRule = new Proxy(Ub[wb].insertRule, {
                  apply: NM(((bb, wb, pb) => {
                    const [gb] = pb, lb = bb.apply(wb, pb);
                    Hb.onCssomSheetMutation(wb.parentStyleSheet);
                    const {
                      id: Lb,
                      styleId: Ib
                    } = PM(wb.parentStyleSheet, eb, Hb.styleMirror);
                    if (wb.parentStyleSheet && (Lb && -1 !== Lb || Ib && -1 !== Ib)) {
                      const bb = [...dM(wb), lb];
                      Vb.queueMutation(wb.parentStyleSheet, (() => Mb({
                        id: Lb,
                        styleId: Ib,
                        adds: [{
                          rule: gb,
                          index: bb
                        }]
                      })))
                    }
                    return lb
                  }), "host")
                }), pb.prototype.deleteRule = new Proxy(Ub[wb].deleteRule, {
                  apply: NM(((bb, wb, pb) => {
                    const [gb] = pb, lb = bb.apply(wb, pb);
                    Hb.onCssomSheetMutation(wb.parentStyleSheet);
                    const {
                      id: Lb,
                      styleId: Ib
                    } = PM(wb.parentStyleSheet, eb, Hb.styleMirror);
                    if (wb.parentStyleSheet && (Lb && -1 !== Lb || Ib && -1 !== Ib)) {
                      const bb = [...dM(wb), gb];
                      Vb.queueMutation(wb.parentStyleSheet, (() => Mb({
                        id: Lb,
                        styleId: Ib,
                        removes: [{
                          index: bb
                        }]
                      })))
                    }
                    return lb
                  }), "host")
                })
              })), NM((() => {
                pb.CSSStyleSheet.prototype.insertRule = gb, pb.CSSStyleSheet.prototype.deleteRule = lb, Lb && (pb.CSSStyleSheet.prototype.replace = Lb), Ib && (pb.CSSStyleSheet.prototype.replaceSync = Ib), Object.entries(Ob).forEach((bb => {
                  let [wb, Mb] = bb;
                  Mb.prototype.insertRule = Ub[wb].insertRule, Mb.prototype.deleteRule = Ub[wb].deleteRule
                }))
              }))
            }(bb, {
              win: Mb,
              mutationQueue: wb
            }))), Ob("adoptedStyleSheet", (() => nM(bb, bb.doc))), Ob("styleDeclaration", (() => function(bb, wb) {
              let {
                styleDeclarationCb: Mb,
                mirror: eb,
                ignoreCSSAttributes: Hb,
                stylesheetManager: pb
              } = bb, {
                win: Vb,
                mutationQueue: gb
              } = wb;
              const lb = Vb.CSSStyleDeclaration.prototype.setProperty;
              Vb.CSSStyleDeclaration.prototype.setProperty = new Proxy(lb, {
                apply: NM(((bb, wb, Vb) => {
                  var lb;
                  const [Lb, Ib, Ob] = Vb, Ub = bb.apply(wb, Vb);
                  if (Hb.has(Lb)) return Ub;
                  const tb = null === (lb = wb.parentRule) || void 0 === lb ? void 0 : lb.parentStyleSheet;
                  pb.onCssomSheetMutation(tb);
                  const {
                    id: Cb,
                    styleId: Eb
                  } = PM(tb, eb, pb.styleMirror);
                  if (Cb && -1 !== Cb || Eb && -1 !== Eb) {
                    const bb = dM(wb.parentRule);
                    gb.queueMutation(tb, (() => Mb({
                      id: Cb,
                      styleId: Eb,
                      set: {
                        property: Lb,
                        value: Ib,
                        priority: Ob
                      },
                      index: bb
                    })))
                  }
                  return Ub
                }), "host")
              });
              const Lb = Vb.CSSStyleDeclaration.prototype.removeProperty;
              return Vb.CSSStyleDeclaration.prototype.removeProperty = new Proxy(Lb, {
                apply: NM(((bb, wb, Vb) => {
                  var lb;
                  const [Lb] = Vb, Ib = bb.apply(wb, Vb);
                  if (Hb.has(Lb)) return Ib;
                  const Ob = null === (lb = wb.parentRule) || void 0 === lb ? void 0 : lb.parentStyleSheet;
                  pb.onCssomSheetMutation(Ob);
                  const {
                    id: Ub,
                    styleId: tb
                  } = PM(Ob, eb, pb.styleMirror);
                  if (Ub && -1 !== Ub || tb && -1 !== tb) {
                    const bb = dM(wb.parentRule);
                    gb.queueMutation(Ob, (() => Mb({
                      id: Ub,
                      styleId: tb,
                      remove: {
                        property: Lb
                      },
                      index: bb
                    })))
                  }
                  return Ib
                }), "host")
              }), NM((() => {
                Vb.CSSStyleDeclaration.prototype.setProperty = lb, Vb.CSSStyleDeclaration.prototype.removeProperty = Lb
              }))
            }(bb, {
              win: Mb,
              mutationQueue: wb
            }))), bb.collectFonts && Ob("font", (() => function(bb) {
              let {
                fontCb: wb,
                doc: Mb
              } = bb;
              const eb = Mb.defaultView;
              if (!eb) return () => {};
              const Hb = [],
                pb = new WeakMap,
                Vb = eb.FontFace;
              eb.FontFace = function(bb, wb, Mb) {
                const eb = new Vb(bb, wb, Mb);
                return pb.set(eb, {
                  family: bb,
                  buffer: "string" != typeof wb,
                  descriptors: Mb,
                  fontSource: "string" == typeof wb ? wb : JSON.stringify(Array.from(new Uint8Array(wb)))
                }), eb
              };
              const gb = rb(Mb.fonts, "add", (function(bb) {
                return function(Mb) {
                  return setTimeout(NM((() => {
                    const bb = pb.get(Mb);
                    bb && (wb(bb), pb.delete(Mb))
                  })), 0), bb.apply(this, [Mb])
                }
              }));
              return Hb.push((() => {
                eb.FontFace = Vb
              })), Hb.push(gb), NM((() => {
                Hb.forEach((bb => bb()))
              }))
            }(bb)))
          }
          Ob("selection", (() => function(bb) {
            const {
              doc: wb,
              mirror: Mb,
              blockClass: eb,
              blockSelector: Hb,
              selectionCb: pb
            } = bb;
            let Vb = !0;
            const gb = NM((() => {
              const bb = wb.getSelection();
              if (!bb || Vb && (null == bb ? void 0 : bb.isCollapsed)) return;
              Vb = bb.isCollapsed || !1;
              const gb = [],
                lb = bb.rangeCount || 0;
              for (let wb = 0; lb > wb; wb++) {
                const {
                  startContainer: pb,
                  startOffset: Vb,
                  endContainer: lb,
                  endOffset: Lb
                } = bb.getRangeAt(wb);
                mM(pb, eb, Hb, !0) || mM(lb, eb, Hb, !0) || gb.push({
                  start: Mb.getId(pb),
                  startOffset: Vb,
                  end: Mb.getId(lb),
                  endOffset: Lb
                })
              }
              pb({
                gF: gb
              })
            }));
            return gb(), VM("selectionchange", gb)
          }(bb))), Ob("customElement", (() => function(bb) {
            let {
              doc: wb,
              customElementCb: Mb
            } = bb;
            const eb = wb.defaultView;
            return eb && eb.customElements ? rb(eb.customElements, "define", (function(bb) {
              return function(wb, eb, Hb) {
                try {
                  Mb({
                    define: {
                      name: wb
                    }
                  })
                } catch (bb) {
                  console.warn(`Custom element callback failed for ${wb}`)
                }
                return bb.apply(this, [wb, eb, Hb])
              }
            })) : () => {}
          }(bb)));
          for (const wb of bb.plugins) Ob(`plugin:${wb.name}`, (() => wb.observer(wb.callback, Mb, wb.options)))
        } catch (bb) {
          try {
            gb()
          } catch (bb) {}
          throw bb
        }
        return gb
      }

      function TM(bb) {
        return void 0 !== window[bb]
      }

      function kM(bb) {
        return Boolean(void 0 !== window[bb] && window[bb].prototype && "insertRule" in window[bb].prototype && "deleteRule" in window[bb].prototype)
      }
      var be = class {
          constructor(bb) {
            Hw(this, "generateIdFn", void 0), Hw(this, "iframeRemoteIdToLocalIdMap", new WeakMap), Hw(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = bb
          }
          getId(bb, wb, Mb, eb) {
            if (0 > wb) return wb;
            const Hb = Mb || this.getRemoteIdToLocalIdMap(bb),
              pb = eb || this.getLocalIdToRemoteIdMap(bb);
            let Vb = Hb.get(wb);
            return void 0 === Vb && (Vb = this.generateIdFn(), Hb.set(wb, Vb), pb.set(Vb, wb)), Vb
          }
          getIds(bb, wb) {
            const Mb = this.getRemoteIdToLocalIdMap(bb),
              eb = this.getLocalIdToRemoteIdMap(bb);
            return wb.map((wb => this.getId(bb, wb, Mb, eb)))
          }
          getRemoteId(bb, wb, Mb) {
            var eb;
            return "number" != typeof wb || 0 > wb ? wb : null !== (eb = (Mb || this.getLocalIdToRemoteIdMap(bb)).get(wb)) && void 0 !== eb ? eb : -1
          }
          getRemoteIds(bb, wb) {
            const Mb = this.getLocalIdToRemoteIdMap(bb);
            return wb.map((wb => this.getRemoteId(bb, wb, Mb)))
          }
          reset(bb) {
            if (!bb) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(bb), this.iframeLocalIdToRemoteIdMap.delete(bb)
          }
          getRemoteIdToLocalIdMap(bb) {
            let wb = this.iframeRemoteIdToLocalIdMap.get(bb);
            return wb || (wb = new Map, this.iframeRemoteIdToLocalIdMap.set(bb, wb)), wb
          }
          getLocalIdToRemoteIdMap(bb) {
            let wb = this.iframeLocalIdToRemoteIdMap.get(bb);
            return wb || (wb = new Map, this.iframeLocalIdToRemoteIdMap.set(bb, wb)), wb
          }
        },
        we = class {
          constructor(bb) {
            Hw(this, "iframes", new WeakMap), Hw(this, "crossOriginIframeMap", new WeakMap), Hw(this, "crossOriginIframeMirror", new be(Sw)), Hw(this, "crossOriginIframeStyleMirror", void 0), Hw(this, "crossOriginIframeRootIdMap", new WeakMap), Hw(this, "mirror", void 0), Hw(this, "mutationCb", void 0), Hw(this, "wrappedEmit", void 0), Hw(this, "loadListener", void 0), Hw(this, "pageHideListener", void 0), Hw(this, "stylesheetManager", void 0), Hw(this, "recordCrossOriginIframes", void 0), Hw(this, "messageHandler", void 0), Hw(this, "nestedIframeListeners", new Map), Hw(this, "attachedWindows", new WeakMap), Hw(this, "attachedDocuments", new WeakMap), Hw(this, "attachedIframes", new Map), Hw(this, "loadListenerDisposers", new WeakMap), Hw(this, "iframeElementsById", new Map), Hw(this, "pageHideHandlers", new WeakMap), this.mutationCb = bb.mutationCb, this.wrappedEmit = bb.wrappedEmit, this.stylesheetManager = bb.stylesheetManager, this.recordCrossOriginIframes = bb.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new be(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = bb.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(bb) {
            this.iframes.set(bb, !0), bb.contentWindow && this.crossOriginIframeMap.set(bb.contentWindow, bb)
          }
          registerLoadListenerDisposer(bb, wb) {
            let Mb = this.loadListenerDisposers.get(bb);
            Mb || (Mb = new Set, this.loadListenerDisposers.set(bb, Mb)), Mb.add(wb);
            const eb = this.mirror.getId(bb); - 1 !== eb && this.iframeElementsById.set(eb, bb)
          }
          getIframeElementById(bb) {
            var wb, Mb, eb;
            return null !== (wb = null !== (Mb = null === (eb = this.attachedIframes.get(bb)) || void 0 === eb ? void 0 : eb.element) && void 0 !== Mb ? Mb : this.iframeElementsById.get(bb)) && void 0 !== wb ? wb : null
          }
          forgetIframeId(bb) {
            this.attachedIframes.delete(bb), this.iframeElementsById.delete(bb)
          }
          disposeLoadListeners(bb) {
            const wb = this.loadListenerDisposers.get(bb);
            wb && (wb.forEach((bb => lM(bb))), this.loadListenerDisposers.delete(bb))
          }
          removePageHideListener(bb) {
            const wb = this.pageHideHandlers.get(bb);
            wb && (wb.forEach((bb => {
              let {
                win: wb,
                handler: Mb
              } = bb;
              gM(wb, "pagehide", Mb)
            })), this.pageHideHandlers.delete(bb))
          }
          addLoadListener(bb) {
            this.loadListener = bb
          }
          addPageHideListener(bb) {
            this.pageHideListener = bb
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(bb, wb) {
            const Mb = this.mirror.getId(bb);
            return this.attachedIframes.set(Mb, {
              element: bb,
              content: wb
            }), Mb
          }
          attachIframe(bb, wb) {
            var Mb;
            const eb = this.trackIframeContent(bb, wb);
            if (bb.contentDocument) {
              let wb = this.attachedDocuments.get(bb);
              wb || (wb = new Set, this.attachedDocuments.set(bb, wb)), wb.add(bb.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: eb,
                nextId: null,
                node: wb
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const Hb = bb.contentWindow;
            if (this.recordCrossOriginIframes && Hb && !this.nestedIframeListeners.has(Hb)) {
              const wb = this.handleMessage.bind(this);
              lM((() => {
                Hb.addEventListener("message", wb), this.nestedIframeListeners.set(Hb, wb);
                let Mb = this.attachedWindows.get(bb);
                Mb || (Mb = new Set, this.attachedWindows.set(bb, Mb)), Mb.add(Hb)
              }))
            }
            lM((() => {
              const wb = bb.contentWindow;
              if (!wb) return;
              let Mb = this.pageHideHandlers.get(bb);
              if (Mb)
                for (const bb of Mb)
                  if (bb.win === wb) return;
              const eb = () => {
                var wb;
                null === (wb = this.pageHideListener) || void 0 === wb || wb.call(this, bb), bb.contentDocument && this.mirror.removeNodeFromMap(bb.contentDocument)
              };
              wb.addEventListener("pagehide", eb), Mb || (Mb = new Set, this.pageHideHandlers.set(bb, Mb)), Mb.add({
                win: wb,
                handler: eb
              })
            })), null === (Mb = this.loadListener) || void 0 === Mb || Mb.call(this, bb), bb.contentDocument && bb.contentDocument.adoptedStyleSheets && bb.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(bb.contentDocument.adoptedStyleSheets, this.mirror.getId(bb.contentDocument))
          }
          handleMessage(bb) {
            const wb = bb;
            if ("rrweb" !== wb.data.type || wb.origin !== wb.data.origin) return;
            if (!bb.source) return;
            const Mb = this.crossOriginIframeMap.get(bb.source);
            if (!Mb) return;
            const eb = this.transformCrossOriginEvent(Mb, wb.data.event);
            eb && this.wrappedEmit(eb, wb.data.isCheckout)
          }
          transformCrossOriginEvent(bb, wb) {
            switch (wb.type) {
              case gb.FullSnapshot: {
                this.crossOriginIframeMirror.reset(bb), this.crossOriginIframeStyleMirror.reset(bb), this.replaceIdOnNode(wb.data.node, bb);
                const Mb = wb.data.node.id;
                return this.crossOriginIframeRootIdMap.set(bb, Mb), this.patchRootIdOnNode(wb.data.node, Mb), this.trackIframeContent(bb, wb.data.node), {
                  timestamp: wb.timestamp,
                  type: gb.IncrementalSnapshot,
                  data: {
                    source: lb.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(bb),
                      nextId: null,
                      node: wb.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case gb.Meta:
              case gb.Load:
              case gb.DomContentLoaded:
                return !1;
              case gb.Plugin:
                return wb;
              case gb.Custom:
                return this.replaceIds(wb.data.payload, bb, ["id", "parentId", "previousId", "nextId"]), wb;
              case gb.IncrementalSnapshot:
                switch (wb.data.source) {
                  case lb.Mutation:
                    return wb.data.adds.forEach((wb => {
                      this.replaceIds(wb, bb, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(wb.node, bb);
                      const Mb = this.crossOriginIframeRootIdMap.get(bb);
                      Mb && this.patchRootIdOnNode(wb.node, Mb)
                    })), wb.data.removes.forEach((wb => {
                      this.replaceIds(wb, bb, ["parentId", "id"])
                    })), wb.data.attributes.forEach((wb => {
                      this.replaceIds(wb, bb, ["id"])
                    })), wb.data.texts.forEach((wb => {
                      this.replaceIds(wb, bb, ["id"])
                    })), wb;
                  case lb.Drag:
                  case lb.TouchMove:
                  case lb.MouseMove:
                    return wb.data.positions.forEach((wb => {
                      this.replaceIds(wb, bb, ["id"])
                    })), wb;
                  case lb.ViewportResize:
                    return !1;
                  case lb.MediaInteraction:
                  case lb.MouseInteraction:
                  case lb.Scroll:
                  case lb.CanvasMutation:
                  case lb.Input:
                    return this.replaceIds(wb.data, bb, ["id"]), wb;
                  case lb.StyleSheetRule:
                  case lb.StyleDeclaration:
                    return this.replaceIds(wb.data, bb, ["id"]), this.replaceStyleIds(wb.data, bb, ["styleId"]), wb;
                  case lb.Font:
                    return wb;
                  case lb.Selection:
                    return wb.data.gF.forEach((wb => {
                      this.replaceIds(wb, bb, ["start", "end"])
                    })), wb;
                  case lb.AdoptedStyleSheet:
                    var Mb;
                    return this.replaceIds(wb.data, bb, ["id"]), this.replaceStyleIds(wb.data, bb, ["styleIds"]), null === (Mb = wb.data.styles) || void 0 === Mb || Mb.forEach((wb => {
                      this.replaceStyleIds(wb, bb, ["styleId"])
                    })), wb
                }
            }
            return !1
          }
          replace(bb, wb, Mb, eb) {
            for (const Hb of eb)(Array.isArray(wb[Hb]) || "number" == typeof wb[Hb]) && (wb[Hb] = Array.isArray(wb[Hb]) ? bb.getIds(Mb, wb[Hb]) : bb.getId(Mb, wb[Hb]));
            return wb
          }
          replaceIds(bb, wb, Mb) {
            return this.replace(this.crossOriginIframeMirror, bb, wb, Mb)
          }
          replaceStyleIds(bb, wb, Mb) {
            return this.replace(this.crossOriginIframeStyleMirror, bb, wb, Mb)
          }
          replaceIdOnNode(bb, wb) {
            this.replaceIds(bb, wb, ["id", "rootId"]), "childNodes" in bb && bb.childNodes.forEach((bb => {
              this.replaceIdOnNode(bb, wb)
            }))
          }
          patchRootIdOnNode(bb, wb) {
            bb.type === tb.Document || bb.rootId || (bb.rootId = wb), "childNodes" in bb && bb.childNodes.forEach((bb => {
              this.patchRootIdOnNode(bb, wb)
            }))
          }
          removeIframeById(bb) {
            const wb = this.attachedIframes.get(bb),
              Mb = (null == wb ? void 0 : wb.element) || this.iframeElementsById.get(bb) || this.mirror.OHb(bb);
            if (this.iframeElementsById.delete(bb), Mb) {
              const bb = Mb.contentWindow,
                wb = this.attachedWindows.get(Mb);
              wb && (wb.forEach((bb => {
                const wb = this.nestedIframeListeners.get(bb);
                wb && (gM(bb, "message", wb), this.nestedIframeListeners.delete(bb)), this.crossOriginIframeMap.delete(bb)
              })), this.attachedWindows.delete(Mb)), bb && this.nestedIframeListeners.has(bb) && (gM(bb, "message", this.nestedIframeListeners.get(bb)), this.nestedIframeListeners.delete(bb)), bb && this.crossOriginIframeMap.delete(bb), this.iframes.delete(Mb), this.disposeLoadListeners(Mb), this.removePageHideListener(Mb);
              const eb = this.attachedDocuments.get(Mb);
              eb && (eb.forEach((bb => {
                lM((() => this.mirror.removeNodeFromMap(bb)))
              })), lM((() => aM(Mb, eb))), this.attachedDocuments.delete(Mb))
            }
            wb && this.attachedIframes.delete(bb)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const bb = [];
            this.attachedIframes.forEach(((wb, Mb) => {
              this.mirror.has(Mb) || bb.push(Mb)
            })), bb.forEach((bb => this.removeIframeById(bb)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((bb, wb) => {
              let {
                content: Mb
              } = bb;
              this.mirror.has(wb) ? this.mutationCb({
                adds: [{
                  parentId: wb,
                  nextId: null,
                  node: Mb
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(wb)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && gM(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((bb, wb) => {
              gM(wb, "message", bb)
            })), this.nestedIframeListeners.clear();
            const bb = new Set;
            this.iframeElementsById.forEach((wb => bb.add(wb))), this.attachedIframes.forEach((wb => {
              let {
                element: Mb
              } = wb;
              return bb.add(Mb)
            })), bb.forEach((bb => {
              this.disposeLoadListeners(bb), this.removePageHideListener(bb)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        Me = class {
          constructor(bb) {
            Hw(this, "shadowDoms", new WeakSet), Hw(this, "mutationCb", void 0), Hw(this, "scrollCb", void 0), Hw(this, "bypassOptions", void 0), Hw(this, "mirror", void 0), Hw(this, "restoreHandlers", []), this.mutationCb = bb.mutationCb, this.scrollCb = bb.scrollCb, this.bypassOptions = bb.bypassOptions, this.mirror = bb.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(bb, wb) {
            var Mb, Hb;
            if (!gw(bb)) return;
            if (this.shadowDoms.has(bb)) return;
            this.shadowDoms.add(bb);
            const pb = null !== (Mb = null === (Hb = Rb.host(bb)) || void 0 === Hb ? void 0 : Hb.ownerDocument) && void 0 !== Mb ? Mb : wb,
              {
                observer: Vb,
                buffer: gb
              } = GM(eb(eb({}, this.bypassOptions), {}, {
                doc: pb,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), bb);
            this.restoreHandlers.push({
              doc: pb,
              handler() {
                Vb.disconnect(), gb.destroy(), gb.releaseCanvasManager();
                const bb = vM.indexOf(gb); - 1 !== bb && vM.splice(bb, 1)
              }
            }), this.restoreHandlers.push({
              doc: pb,
              handler: qM(eb(eb({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: bb,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              bb.adoptedStyleSheets && bb.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(bb.adoptedStyleSheets, this.mirror.getId(Rb.host(bb))), this.restoreHandlers.push({
                doc: pb,
                handler: nM({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, bb)
              })
            }), 0)
          }
          observeAttachShadow(bb) {
            lM((() => {
              const wb = bb.contentWindow,
                Mb = bb.contentDocument;
              wb && Mb && this.patchAttachShadow(wb.Element, Mb)
            }))
          }
          patchAttachShadow(bb, wb) {
            const Mb = this;
            this.restoreHandlers.push({
              doc: wb,
              handler: rb(bb.prototype, "attachShadow", (function(bb) {
                return function(eb) {
                  const Hb = bb.call(this, eb),
                    pb = Rb.shadowRoot(this);
                  return pb && DM(this) && Mb.addShadowRoot(pb, wb), Hb
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((bb => {
              let {
                handler: wb
              } = bb;
              try {
                wb()
              } catch (wb) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(bb) {
            const wb = [];
            for (const Mb of this.restoreHandlers)
              if (Mb.doc === bb) try {
                Mb.handler()
              } catch (bb) {} else wb.push(Mb);
            this.restoreHandlers = wb
          }
        },
        ee = "skip-frame";

      function He(bb) {
        if ("object" != typeof bb || null === bb) return !1;
        const {
          x: wb,
          y: Mb,
          width: eb,
          height: Hb
        } = bb;
        return Number.isFinite(wb) && Number.isFinite(Mb) && Number.isFinite(eb) && Number.isFinite(Hb) && eb >= 0 && Hb >= 0
      }
      for (var pe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ve = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), ge = 0; 64 > ge; ge++) Ve[pe.charCodeAt(ge)] = ge;
      var le = function(bb) {
          var wb, Mb = new Uint8Array(bb),
            eb = Mb.length,
            Hb = "";
          for (wb = 0; eb > wb; wb += 3) Hb += pe[Mb[wb] >> 2], Hb += pe[(3 & Mb[wb]) << 4 | Mb[wb + 1] >> 4], Hb += pe[(15 & Mb[wb + 1]) << 2 | Mb[wb + 2] >> 6], Hb += pe[63 & Mb[wb + 2]];
          return eb % 3 == 2 ? Hb = Hb.substring(0, Hb.length - 1) + "=" : eb % 3 == 1 && (Hb = Hb.substring(0, Hb.length - 2) + "=="), Hb
        },
        Le = !1,
        Ie = new Map,
        Oe = (bb, wb, Mb) => {
          if (!bb || !Ce(bb, wb) && "object" != typeof bb) return;
          const eb = function(bb, wb) {
            let Mb = Ie.get(bb);
            return Mb || (Mb = new Map, Ie.set(bb, Mb)), Mb.has(wb) || Mb.set(wb, []), Mb.get(wb)
          }(Mb, bb.constructor.name);
          let Hb = eb.indexOf(bb);
          return -1 === Hb && (Hb = eb.length, eb.push(bb)), Hb
        };

      function Ue(bb, wb, Mb, eb) {
        if (bb instanceof Array) return bb.map((bb => Ue(bb, wb, Mb, eb)));
        if (null === bb) return bb;
        if (bb instanceof Float32Array || bb instanceof Float64Array || bb instanceof Int32Array || bb instanceof Uint32Array || bb instanceof Uint8Array || bb instanceof Uint16Array || bb instanceof Int16Array || bb instanceof Int8Array || bb instanceof Uint8ClampedArray) return {
          rr_type: bb.constructor.name,
          args: [Object.values(bb)]
        };
        if (bb instanceof ArrayBuffer) return {
          rr_type: bb.constructor.name,
          base64: le(bb)
        };
        if (bb instanceof DataView) return {
          rr_type: bb.constructor.name,
          args: [Ue(bb.buffer, wb, Mb, eb), bb.byteOffset, bb.byteLength]
        };
        if (bb instanceof HTMLImageElement) {
          const wb = bb.constructor.name,
            {
              src: Mb
            } = bb;
          return {
            rr_type: wb,
            src: Mb
          }
        }
        if (bb instanceof HTMLCanvasElement) {
          const wb = "HTMLImageElement";
          let Mb;
          try {
            Mb = bb.toDataURL(eb.type, eb.quality)
          } catch (bb) {
            throw function(bb) {
              "SecurityError" === (null == bb ? void 0 : bb.name) ? Le || (Le = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", bb)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", bb)
            }(bb), bb
          }
          return {
            rr_type: wb,
            src: Mb
          }
        }
        return bb instanceof ImageData ? {
          rr_type: bb.constructor.name,
          args: [Ue(bb.data, wb, Mb, eb), bb.width, bb.height]
        } : Ce(bb, wb) || "object" == typeof bb ? {
          rr_type: bb.constructor.name,
          index: Oe(bb, wb, Mb)
        } : bb
      }
      var te = (bb, wb, Mb, eb) => bb.map((bb => Ue(bb, wb, Mb, eb))),
        Ce = (bb, wb) => {
          const Mb = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((bb => "function" == typeof wb[bb]));
          return Boolean(Mb.find((Mb => bb instanceof wb[Mb])))
        },
        Ee = ["webgl", "webgl2"];

      function Fe(bb) {
        return "nodeType" in bb
      }

      function Be(bb, wb, Mb, Hb) {
        const pb = [];
        try {
          if (Hb) {
            const Hb = function(bb, wb, Mb) {
              const Hb = bb.GPUCanvasContext;
              if ((null == Hb ? void 0 : Hb.prototype) && "function" == typeof Hb.prototype.configure) return rb(Hb.prototype, "configure", (function(Hb) {
                return function(pb) {
                  const Vb = function(bb) {
                    const {
                      canvas: wb
                    } = bb;
                    return wb && "object" == typeof wb ? wb : null
                  }(this);
                  if (!Vb || Fe(Vb) && mM(Vb, wb, Mb, !0)) return Hb.call(this, pb);
                  Fe(Vb) && !("__context" in Vb) && (Vb.__context = "webgpu");
                  const gb = function(bb) {
                    const wb = bb.GPUTextureUsage;
                    return wb ? wb.COPY_SRC | wb.RENDER_ATTACHMENT : null
                  }(bb);
                  return Hb.call(this, null !== gb && pb ? eb(eb({}, pb), {}, {
                    usage: "number" == typeof pb.usage ? pb.usage | gb : gb
                  }) : pb)
                }
              }))
            }(bb, wb, Mb);
            Hb && pb.push(Hb)
          }
          const Vb = rb(bb.HTMLCanvasElement.prototype, "getContext", (function(bb) {
            return function(eb) {
              const pb = function(bb) {
                return "experimental-webgl" === bb ? "webgl" : bb
              }(eb);
              for (var Vb = arguments.length, gb = new Array(Vb > 1 ? Vb - 1 : 0), lb = 1; lb < Vb; lb++) gb[lb - 1] = arguments[lb];
              if (!mM(this, wb, Mb, !0) && ("__context" in this || (this.__context = pb), Hb && Ee.includes(pb)))
                if (gb[0] && "object" == typeof gb[0]) {
                  const bb = gb[0];
                  bb.preserveDrawingBuffer || (bb.preserveDrawingBuffer = !0)
                } else gb.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return bb.apply(this, [eb, ...gb])
            }
          }));
          pb.push(Vb)
        } catch (bb) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          pb.forEach((bb => bb()))
        }
      }

      function se(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = [],
          lb = Object.getOwnPropertyNames(bb);
        for (const Lb of lb)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(Lb)) try {
            if ("function" != typeof bb[Lb]) continue;
            const lb = rb(bb, Lb, (function(bb) {
              return function() {
                for (var gb = arguments.length, lb = new Array(gb), Ib = 0; Ib < gb; Ib++) lb[Ib] = arguments[Ib];
                const Ob = bb.apply(this, lb);
                if (Oe(Ob, pb, this), this.canvas && "tagName" in this.canvas && !mM(this.canvas, eb, Hb, !0)) {
                  let eb;
                  try {
                    eb = te(lb, pb, this, Vb)
                  } catch (bb) {}
                  eb && Mb(this.canvas, {
                    type: wb,
                    property: Lb,
                    args: eb
                  })
                }
                return Ob
              }
            }));
            gb.push(lb)
          } catch (pb) {
            const Vb = tM(bb, Lb, {
              set(bb) {
                this.canvas && "tagName" in this.canvas && !mM(this.canvas, eb, Hb, !0) && Mb(this.canvas, {
                  type: wb,
                  property: Lb,
                  args: [bb],
                  setter: !0
                })
              }
            });
            gb.push(Vb)
          }
        return gb
      }
      var me = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        he = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", me], {
          type: "text/javascript;charset=utf-8"
        });

      function ze(bb) {
        let wb;
        try {
          if (wb = he && (self.URL || self.webkitURL).createObjectURL(he), !wb) throw "";
          const Mb = new Worker(wb, {
            name: null == bb ? void 0 : bb.name
          });
          return Mb.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(wb)
          })), Mb
        } catch (wb) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(me), {
            name: null == bb ? void 0 : bb.name
          })
        }
      }
      var Xe = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function xe(bb) {
        for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
        console.warn(`[replay] canvas capture: ${bb}`, ...Mb)
      }
      var je, Ke, re, Re = class {
          onFullSnapshot() {
            var bb;
            null === (bb = this.resetFrameDedup) || void 0 === bb || bb.call(this)
          }
          acquire() {
            this.refCount += 1
          }
          reset() {
            this.refCount > 0 && (this.refCount -= 1), this.refCount > 0 || this.teardown()
          }
          teardown() {
            this.torndown || (this.torndown = !0, this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers(), null !== this.rafIdTimestamp && (cancelAnimationFrame(this.rafIdTimestamp), this.rafIdTimestamp = null), null !== this.rafIdFlush && (cancelAnimationFrame(this.rafIdFlush), this.rafIdFlush = null))
          }
          freeze() {
            this.frozen = !0
          }
          unfreeze() {
            this.frozen = !1
          }
          lock() {
            this.locked = !0
          }
          unlock() {
            this.locked = !1
          }
          constructor(bb) {
            Hw(this, "pendingCanvasMutations", new Map), Hw(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), Hw(this, "mirror", void 0), Hw(this, "mutationCb", void 0), Hw(this, "resetObservers", void 0), Hw(this, "frozen", !1), Hw(this, "locked", !1), Hw(this, "rafIdTimestamp", null), Hw(this, "rafIdFlush", null), Hw(this, "refCount", 0), Hw(this, "torndown", !1), Hw(this, "resetFrameDedup", null), Hw(this, "processMutation", ((bb, wb) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(bb) || this.pendingCanvasMutations.set(bb, []), this.pendingCanvasMutations.get(bb).push(wb)
            }));
            const {
              sampling: wb = "all",
              win: Mb,
              blockClass: eb,
              blockSelector: Hb,
              recordCanvas: pb,
              dataURLOptions: Vb,
              resolutionScale: gb,
              canvasMasking: lb
            } = bb;
            this.mutationCb = bb.mutationCb, this.mirror = bb.mirror, pb && "all" === wb && this.initCanvasMutationObserver(Mb, eb, Hb, Vb), pb && "number" == typeof wb && this.initCanvasFPSObserver(wb, Mb, eb, Hb, {
              dataURLOptions: Vb,
              resolutionScale: gb,
              canvasMasking: lb
            })
          }
          initCanvasFPSObserver(bb, wb, Mb, eb, Hb) {
            var Vb = this;
            if (!("OffscreenCanvas" in wb)) return void xe("disabled because this browser does not support OffscreenCanvas");
            const gb = "number" == typeof Hb.resolutionScale && Number.isFinite(Hb.resolutionScale) ? Math.min(1, Math.max(.1, Hb.resolutionScale)) : 1,
              lb = Be(wb, Mb, eb, !0),
              Lb = new Map;
            let Ib;
            try {
              Ib = new ze
            } catch (bb) {
              return xe(`disabled because the encode worker did not start. ${Xe}`, bb), void lb()
            }
            let Ub = !1;
            Ib.onerror = bb => {
              var wb;
              Ub = !0, xe(`stopped because the encode worker failed. ${Xe}`, bb), cancelAnimationFrame(Fb), null === (wb = Ib.terminate) || void 0 === wb || wb.call(Ib), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              Ib.postMessage({
                resetFrameDedup: !0
              })
            }, Ib.onmessage = bb => {
              const {
                id: wb
              } = bb.data;
              if (Lb.set(wb, !1), !("base64" in bb.data)) return;
              const {
                base64: Mb,
                type: eb,
                displayWidth: Hb,
                displayHeight: pb
              } = bb.data;
              this.mutationCb({
                id: wb,
                type: Ob["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, Hb, pb]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: Mb
                      }],
                      type: eb
                    }]
                  }, 0, 0, Hb, pb]
                }],
                displayWidth: Hb,
                displayHeight: pb
              })
            };
            let tb = !1,
              Cb = !1;
            const Eb = 1e3 / bb;
            let Fb, Bb = 0;
            const sb = bb => {
              var lb;
              Ub || (Bb && Eb > bb - Bb || (Bb = bb, (() => {
                const bb = [],
                  Hb = wb => {
                    try {
                      wb.querySelectorAll("canvas").forEach((wb => {
                        mM(wb, Mb, eb, !0) || bb.push(wb)
                      })), wb.querySelectorAll("*").forEach((bb => {
                        bb.shadowRoot && Hb(bb.shadowRoot)
                      }))
                    } catch (bb) {}
                  };
                return Hb(wb.document), bb
              })().forEach((lb = pb((function*(bb) {
                const wb = Vb.mirror.getId(bb);
                if (-1 !== wb && !Lb.get(wb) && 0 !== bb.width && 0 !== bb.height) {
                  Lb.set(wb, !0);
                  try {
                    if (["webgl", "webgl2"].includes(bb.__context)) {
                      var Mb, eb;
                      const Hb = bb.getContext(bb.__context);
                      if (null == Hb || null === (Mb = Hb.isContextLost) || void 0 === Mb ? void 0 : Mb.call(Hb)) return void Lb.set(wb, !1);
                      !1 === (null == Hb || null === (eb = Hb.getContextAttributes()) || void 0 === eb ? void 0 : eb.preserveDrawingBuffer) && Hb.clear(Hb.COLOR_BUFFER_BIT)
                    }
                    const pb = bb.clientWidth || bb.width,
                      Vb = bb.clientHeight || bb.height,
                      lb = Math.max(1, Math.round(pb * gb)),
                      Ob = Math.max(1, Math.round(Vb * gb)),
                      Ub = function(bb, wb, Mb, eb, Hb, pb) {
                        if (!bb || "function" != typeof bb.regionsFn) return;
                        let Vb;
                        try {
                          Vb = bb.regionsFn(wb)
                        } catch (bb) {
                          return ee
                        }
                        if (void 0 === Vb) return;
                        if (!Array.isArray(Vb) || !Vb.every(He)) return ee;
                        const gb = Mb / Hb,
                          lb = eb / pb;
                        return Vb.filter((bb => bb.width > 0 && bb.height > 0)).map((bb => {
                          const wb = Math.floor(bb.x * gb),
                            Mb = Math.floor(bb.y * lb);
                          return {
                            x: wb,
                            y: Mb,
                            width: Math.ceil((bb.x + bb.width) * gb) - wb,
                            height: Math.ceil((bb.y + bb.height) * lb) - Mb
                          }
                        }))
                      }(Hb.canvasMasking, bb, lb, Ob, pb, Vb);
                    if ("skip-frame" === Ub) return tb || (tb = !0, xe("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void Lb.set(wb, !1);
                    const Cb = yield createImageBitmap(bb, 1 > gb ? {
                      resizeWidth: lb,
                      resizeHeight: Ob,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: lb,
                      resizeHeight: Ob
                    });
                    Ib.postMessage({
                      id: wb,
                      bitmap: Cb,
                      width: lb,
                      height: Ob,
                      displayWidth: pb,
                      displayHeight: Vb,
                      dataURLOptions: Hb.dataURLOptions,
                      maskRegions: Ub
                    }, [Cb])
                  } catch (bb) {
                    Cb || (Cb = !0, xe("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", bb)), Lb.set(wb, !1)
                  }
                }
              })), function(bb) {
                return lb.apply(this, arguments)
              }))), Fb = requestAnimationFrame(sb))
            };
            Fb = requestAnimationFrame(sb), this.resetObservers = () => {
              var bb;
              lb(), cancelAnimationFrame(Fb), null === (bb = Ib.terminate) || void 0 === bb || bb.call(Ib), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(bb, wb, Mb, eb) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const Hb = Be(bb, wb, Mb, !1),
              pb = function(bb, wb, Mb, eb, Hb) {
                const pb = [],
                  Vb = Object.getOwnPropertyNames(wb.CanvasRenderingContext2D.prototype);
                for (const gb of Vb) try {
                  if ("function" != typeof wb.CanvasRenderingContext2D.prototype[gb]) continue;
                  const Vb = rb(wb.CanvasRenderingContext2D.prototype, gb, (function(pb) {
                    return function() {
                      for (var Vb = arguments.length, lb = new Array(Vb), Lb = 0; Lb < Vb; Lb++) lb[Lb] = arguments[Lb];
                      return mM(this.canvas, Mb, eb, !0) || setTimeout((() => {
                        let Mb;
                        try {
                          Mb = te(lb, wb, this, Hb)
                        } catch (bb) {
                          return
                        }
                        bb(this.canvas, {
                          type: Ob["2D"],
                          property: gb,
                          args: Mb
                        })
                      }), 0), pb.apply(this, lb)
                    }
                  }));
                  pb.push(Vb)
                } catch (Hb) {
                  const Vb = tM(wb.CanvasRenderingContext2D.prototype, gb, {
                    set(wb) {
                      mM(this.canvas, Mb, eb, !0) || bb(this.canvas, {
                        type: Ob["2D"],
                        property: gb,
                        args: [wb],
                        setter: !0
                      })
                    }
                  });
                  pb.push(Vb)
                }
                return () => {
                  pb.forEach((bb => bb()))
                }
              }(this.processMutation.bind(this), bb, wb, Mb, eb),
              Vb = function(bb, wb, Mb, eb, Hb) {
                const pb = [];
                return void 0 !== wb.WebGLRenderingContext && pb.push(...se(wb.WebGLRenderingContext.prototype, Ob.WebGL, bb, Mb, eb, wb, Hb)), void 0 !== wb.WebGL2RenderingContext && pb.push(...se(wb.WebGL2RenderingContext.prototype, Ob.WebGL2, bb, Mb, eb, wb, Hb)), () => {
                  pb.forEach((bb => bb()))
                }
              }(this.processMutation.bind(this), bb, wb, Mb, eb);
            this.resetObservers = () => {
              Hb(), pb(), Vb()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const bb = wb => {
              this.rafStamps.latestId = wb, this.rafIdTimestamp = requestAnimationFrame(bb)
            };
            this.rafIdTimestamp = requestAnimationFrame(bb)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((bb, wb) => {
              const Mb = this.mirror.getId(wb);
              this.flushPendingCanvasMutationFor(wb, Mb)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(bb, wb) {
            if (this.frozen || this.locked) return;
            const Mb = this.pendingCanvasMutations.get(bb);
            if (!Mb || -1 === wb) return;
            const eb = Mb.map((bb => function(bb, wb) {
                if (null == bb) return {};
                var Mb, eb, Hb = function(bb, wb) {
                  if (null == bb) return {};
                  var Mb = {};
                  for (var eb in bb)
                    if ({}.hasOwnProperty.call(bb, eb)) {
                      if (wb.includes(eb)) continue;
                      Mb[eb] = bb[eb]
                    } return Mb
                }(bb, wb);
                if (Object.getOwnPropertySymbols) {
                  var pb = Object.getOwnPropertySymbols(bb);
                  for (eb = 0; pb.length > eb; eb++) wb.includes(Mb = pb[eb]) || {}.propertyIsEnumerable.call(bb, Mb) && (Hb[Mb] = bb[Mb])
                }
                return Hb
              }(bb, Vb))),
              {
                type: Hb
              } = Mb[0];
            this.mutationCb({
              id: wb,
              type: Hb,
              commands: eb
            }), this.pendingCanvasMutations.delete(bb)
          }
        },
        De = class {
          constructor(bb) {
            var wb;
            Hw(this, "trackedLinkElements", new WeakSet), Hw(this, "pendingDeferredSheets", new Set), Hw(this, "mutationCb", void 0), Hw(this, "adoptedStyleSheetCb", void 0), Hw(this, "maskAllElementAttributes", void 0), Hw(this, "maskAttributeFn", void 0), Hw(this, "styleMirror", new rM), this.mutationCb = bb.mutationCb, this.adoptedStyleSheetCb = bb.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (wb = bb.maskAllElementAttributes) && void 0 !== wb && wb, this.maskAttributeFn = bb.maskAttributeFn
          }
          attachLinkElement(bb, wb) {
            "_cssText" in wb.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: wb.id,
                attributes: wb.attributes
              }]
            }), this.trackLinkElement(bb)
          }
          beginDeferredLinkInlining(bb, wb) {
            if (-1 === wb || !bb.isConnected) return null;
            let Mb = null,
              eb = null;
            try {
              eb = bb.sheet, eb && (Mb = function(bb) {
                const wb = [];
                let Mb = !1,
                  eb = null;
                const Hb = new Map;

                function pb(bb) {
                  const Hb = wb.pop();
                  if ("group" === Hb.kind) {
                    if (null === bb) {
                      for (; wb.length > 0 && "group" === wb[wb.length - 1].kind;) wb.pop();
                      return void pb(null)
                    }
                    const Mb = wb[wb.length - 1];
                    return Mb.parts.push(bb), void(Mb.index += 1)
                  }
                  if (!Hb.importRule) return Mb = !0, void(eb = bb);
                  Vb(wb[wb.length - 1], Hb.importRule, bb)
                }

                function Vb(bb, wb, Mb) {
                  try {
                    let Hb;
                    try {
                      Hb = Mb || Lw(wb)
                    } catch (bb) {
                      Hb = wb.cssText
                    }
                    try {
                      var eb;
                      Hb && (null === (eb = wb.styleSheet) || void 0 === eb ? void 0 : eb.href) && (Hb = Yw(Hb, wb.styleSheet.href))
                    } catch (bb) {}
                    Hb && bb.parts.push(Hb), bb.index += 1
                  } catch (bb) {
                    pb(null)
                  }
                }

                function gb(bb) {
                  const Mb = bb.rules[bb.index];
                  if ("sheet" === bb.kind && Cw(Mb)) {
                    const eb = Hb.get(Mb);
                    return null === eb ? (bb.parts.push(Mb.cssText), void(bb.index += 1)) : eb ? void wb.push({
                      kind: "sheet",
                      sheet: eb.sheet,
                      rules: eb.rules,
                      sheetHref: eb.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: Mb
                    }) : void Vb(bb, Mb, null)
                  }
                  if (function(bb, Mb) {
                      try {
                        const eb = function(bb) {
                          const wb = bb;
                          if (!wb.cssRules || 0 === wb.cssRules.length) return null;
                          if (wb.media && "string" == typeof wb.media.mediaText) return `@media ${wb.media.mediaText} {`;
                          if (Ew(bb)) {
                            if ("number" == typeof wb.type && 1 !== wb.type) return null;
                            const Mb = wb.style ? wb.style.cssText : "";
                            return `${bb.selectorText} {${Mb?" "+Mb:""}`
                          }
                          if ("containerName" in wb) return "string" != typeof wb.containerQuery || wb.containerName && !Fw.test(wb.containerName) ? null : `@container ${wb.containerName?`${wb.containerName} `:""}${wb.containerQuery} {`;
                          if ("string" == typeof wb.conditionText) {
                            let eb = "";
                            try {
                              var Mb;
                              eb = (null === (Mb = bb.constructor) || void 0 === Mb ? void 0 : Mb.name) || ""
                            } catch (bb) {
                              return null
                            }
                            return "" === eb || "Object" === eb || "CSSSupportsRule" === eb ? `@supports ${wb.conditionText} {` : null
                          }
                          return "string" == typeof wb.name ? "keyText" in wb.cssRules[0] ? Fw.test(wb.name) ? `@keyframes ${wb.name} {` : null : "" === wb.name ? "@layer {" : Bw.test(wb.name) ? `@layer ${wb.name} {` : null : null
                        }(bb);
                        if (null === eb) return !1;
                        const Hb = Mb.sheetHref;
                        return wb.push({
                          kind: "group",
                          rules: Array.from(bb.cssRules),
                          sheetHref: Hb,
                          index: 0,
                          parts: [],
                          prelude: Hb ? Yw(eb, Hb) : eb,
                          fixColons: "sheet" === Mb.kind && Ew(bb) && bb.selectorText.includes(":")
                        }), !0
                      } catch (bb) {
                        return !1
                      }
                    }(Mb, bb)) return;
                  let eb = Mb.cssText;
                  "sheet" === bb.kind && Ew(Mb) && Mb.selectorText.includes(":") && (eb = tw(eb)), bb.parts.push(bb.sheetHref ? Yw(eb, bb.sheetHref) : eb), bb.index += 1
                }
                return function(bb) {
                  try {
                    const Mb = bb.rules || bb.cssRules;
                    if (!Mb) return !1;
                    yb(Mb);
                    let eb = bb.href;
                    !eb && bb.ownerNode && (eb = bb.ownerNode.baseURI);
                    const pb = Array.from(Mb);
                    return wb.push({
                        kind: "sheet",
                        sheet: bb,
                        rules: pb,
                        sheetHref: eb,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(bb, wb) {
                        const Mb = [{
                          sheet: wb,
                          rules: bb,
                          index: 0
                        }];
                        for (; Mb.length > 0;) {
                          const wb = Mb[Mb.length - 1];
                          if (wb.index >= wb.rules.length) {
                            Mb.pop();
                            continue
                          }
                          const eb = wb.rules[wb.index];
                          if (wb.index += 1, !Cw(eb) || Hb.has(eb)) continue;
                          let pb = null;
                          try {
                            pb = eb.styleSheet
                          } catch (bb) {
                            Hb.set(eb, null);
                            continue
                          }
                          if (pb && !Mb.some((bb => bb.sheet === pb))) try {
                            const bb = pb.rules || pb.cssRules;
                            if (!bb) continue;
                            yb(bb);
                            let wb = pb.href;
                            !wb && pb.ownerNode && (wb = pb.ownerNode.baseURI);
                            const Vb = Array.from(bb);
                            Hb.set(eb, {
                              sheet: pb,
                              rules: Vb,
                              sheetHref: wb
                            }), Mb.push({
                              sheet: pb,
                              rules: Vb,
                              index: 0
                            })
                          } catch (bb) {}
                        }
                      }(pb, bb), !0
                  } catch (bb) {
                    return !1
                  }
                }(bb) || (Mb = !0), {
                  advance(bb) {
                    if (Mb) return !0;
                    const Hb = Db();
                    let Vb = bb > 0 ? bb : 1;
                    try {
                      for (; !Mb && Vb > 0;) {
                        const Mb = wb[wb.length - 1];
                        if (Mb.index >= Mb.rules.length) {
                          let wb = null;
                          try {
                            if ("group" === Mb.kind) {
                              const bb = Mb.prelude + Mb.parts.join("") + "}";
                              wb = Mb.fixColons ? tw(bb) : bb
                            } else wb = lw(Mb.parts.join(""))
                          } catch (bb) {}
                          pb(wb)
                        } else {
                          Vb -= 1;
                          try {
                            gb(Mb)
                          } catch (bb) {
                            pb(null)
                          }
                        }
                      }
                    } catch (bb) {
                      Mb = !0, eb = null
                    } finally {
                      Tb(Db() - Hb)
                    }
                    return Mb
                  },
                  text: () => Mb ? eb : null,
                  remainingRules() {
                    if (Mb) return 0;
                    let bb = 0;
                    for (const Mb of wb) bb += Mb.rules.length - Mb.index;
                    return bb
                  }
                }
              }(eb))
            } catch (bb) {}
            if (!Mb || !eb) return ww(), null;
            const Hb = Mb;
            let pb = !1;
            const Vb = {
              sheet: eb,
              invalidate() {
                pb = !0
              }
            };
            this.pendingDeferredSheets.add(Vb);
            let gb = !1;
            return {
              advance: Mb => {
                if (gb) return !0;
                const lb = Db(),
                  Lb = fb();
                let Ib = !0;
                try {
                  if (pb) return gb = !0, ww(), !0;
                  if (!Hb.advance(Mb)) return Ib = !1, !1;
                  gb = !0;
                  const Vb = Hb.text();
                  if (!bb.isConnected) return !0;
                  let lb = null;
                  try {
                    lb = bb.sheet
                  } catch (bb) {}
                  return lb !== eb ? (ww(), !0) : Vb ? (this.emitCssTextMutation(bb, wb, Vb), !0) : (ww(), !0)
                } finally {
                  Ib && this.pendingDeferredSheets.delete(Vb), Ab(Ob = Db() - lb, null != (Ub = Lb) ? Ub : cb) || (ub.totalMs += Ob, Ob > ub.slowestSliceMs && (ub.slowestSliceMs = Ob))
                }
                var Ob, Ub
              },
              remainingRules: () => Hb.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(Vb)
              }
            }
          }
          onCssomSheetMutation(bb) {
            if (bb && 0 !== this.pendingDeferredSheets.size)
              for (const wb of this.pendingDeferredSheets) wb.sheet === bb && (this.pendingDeferredSheets.delete(wb), wb.invalidate())
          }
          inlineDeferredLinkElement(bb, wb) {
            var Mb;
            null === (Mb = this.beginDeferredLinkInlining(bb, wb)) || void 0 === Mb || Mb.advance(1 / 0)
          }
          emitCssTextMutation(bb, wb, Mb) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: wb,
                attributes: {
                  _cssText: Xw({
                    element: bb,
                    name: "_cssText",
                    value: Mb,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(bb) {
            this.trackedLinkElements.has(bb) || (this.trackedLinkElements.add(bb), this.trackStylesheetInLinkElement(bb))
          }
          adoptStyleSheets(bb, wb) {
            if (0 === bb.length) return;
            const Mb = {
                id: wb,
                styleIds: []
              },
              eb = [];
            for (const Hb of bb) {
              let bb;
              if (this.styleMirror.has(Hb)) bb = this.styleMirror.getId(Hb);
              else {
                const wb = this.styleMirror.add(Hb);
                bb = wb;
                const Mb = Db();
                try {
                  ob((() => {
                    try {
                      const bb = Hb.rules || Hb.cssRules;
                      bb && yb(bb)
                    } catch (bb) {}
                    eb.push({
                      styleId: wb,
                      rules: Array.from(Hb.rules || CSSRule, ((bb, wb) => ({
                        rule: Uw(bb, Hb.href),
                        index: wb
                      })))
                    })
                  }))
                } finally {
                  Tb(Db() - Mb)
                }
              }
              Mb.styleIds.push(bb)
            }
            eb.length > 0 && (Mb.styles = eb), this.adoptedStyleSheetCb(Mb)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), Tw.forEach((bb => bb.abort())), Tw.clear()
          }
          trackStylesheetInLinkElement(bb) {}
        },
        ce = class {
          constructor() {
            Hw(this, "nodeMap", new WeakMap), Hw(this, "active", !1)
          }
          inOtherBuffer(bb, wb) {
            const Mb = this.nodeMap.get(bb);
            return Mb && Array.from(Mb).some((bb => bb !== wb))
          }
          add(bb, wb) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(bb, (this.nodeMap.get(bb) || new Set).add(wb))
          }
          destroy() {}
        },
        Ye = !1;
      try {
        if (2 !== Array.from([1], (bb => 2 * bb))[0]) {
          var Ze;
          const bb = document.createElement("iframe");
          document.body.appendChild(bb), Array.from = (null === (Ze = bb.contentWindow) || void 0 === Ze ? void 0 : Ze.Array.from) || Array.from, document.body.removeChild(bb)
        }
      } catch (bb) {
        console.debug("Unable to override Array.from", bb)
      }
      var fe = new sw,
        Ae = new Set([lb.Mutation, lb.MediaInteraction, lb.StyleSheetRule, lb.CanvasMutation, lb.Font, lb.Log, lb.StyleDeclaration, lb.AdoptedStyleSheet]);

      function We(bb) {
        const wb = window;
        if ("function" == typeof wb.requestIdleCallback) {
          const Mb = wb.requestIdleCallback(bb, {
            timeout: 2e3
          });
          return {
            cancel() {
              var bb;
              return null === (bb = wb.cancelIdleCallback) || void 0 === bb ? void 0 : bb.call(wb, Mb)
            }
          }
        }
        const Mb = setTimeout(bb, 250);
        return {
          cancel: () => clearTimeout(Mb)
        }
      }

      function Je() {
        let bb, wb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Mb = !1,
          Hb = !1;
        const {
          emit: pb,
          checkoutEveryNms: Vb,
          checkoutEveryNth: Lb,
          blockClass: Ib = "rr-block",
          blockSelector: Ob = null,
          ignoreClass: Ub = "rr-ignore",
          ignoreSelector: tb = null,
          maskTextClass: Cb = "rr-mask",
          maskTextSelector: Eb = null,
          inlineStylesheet: Fb = !0,
          inlineStylesheetBudgetRules: Bb,
          maskAllInputs: sb,
          maskInputOptions: mb,
          slimDOMOptions: hb,
          maskInputFn: zb,
          maskTextFn: Xb,
          maskAllElementAttributes: xb = !1,
          maskAttributeFn: jb,
          hooks: Kb,
          packFn: rb,
          sampling: Db = {},
          dataURLOptions: cb = {},
          canvasResolutionScale: Yb,
          canvasMasking: fb,
          mousemoveWait: Ab,
          recordDOM: Wb = !0,
          recordCanvas: Jb = !1,
          recordCrossOriginIframes: Sb = !1,
          recordAfter: Nb = ("DOMContentLoaded" === wb.recordAfter ? wb.recordAfter : "load"),
          userTriggeredOnInput: vb = !1,
          collectFonts: Qb = !1,
          inlineImages: Gb = !1,
          plugins: qb,
          keepIframeSrcFn: ab = () => !1,
          ignoreCSSAttributes: ib = new Set([]),
          attributeFilter: ub,
          errorHandler: nb
        } = wb;
        ! function(bb) {
          YM = bb
        }(nb);
        const yb = eb({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, cb),
          ob = !Sb || window.parent === window;
        let Tb = !1;
        if (!ob) try {
          window.parent.document && (Tb = !1)
        } catch (wb) {
          Tb = !0
        }
        if (ob && !pb) throw new Error("emit function is required");
        if (!ob && !Tb) return () => {};
        void 0 !== Ab && void 0 === Db.mousemove && (Db.mousemove = Ab), fe.reset();
        const kb = !0 === sb ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0
          } : void 0 !== mb ? mb : {
            password: !0
          },
          ww = HM(void 0 !== hb && hb);
        let ew;
        ! function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in bb && !bb.NodeList.prototype.forEach && (bb.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in bb && !bb.DOMTokenList.prototype.forEach && (bb.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let Hw = 0;
        const pw = new Map;
        let Vw, gw;
        const lw = bb => {
          for (const wb of qb || []) wb.eventProcessor && (bb = wb.eventProcessor(bb));
          return rb && !Tb && (bb = rb(bb)), bb
        };
        je = (bb, wb) => {
          var Mb;
          const eb = bb;
          if (eb.timestamp = CM(), !(null === (Mb = vM[0]) || void 0 === Mb ? void 0 : Mb.isFrozen()) || eb.type === gb.FullSnapshot || eb.type === gb.IncrementalSnapshot && Ae.has(eb.data.source) || vM.forEach((bb => bb.unfreeze())), ob) null == pb || pb(lw(eb), wb);
          else if (Tb) {
            const bb = {
              type: "rrweb",
              event: lw(eb),
              origin: window.location.origin,
              isCheckout: wb
            };
            window.parent.postMessage(bb, "*")
          }
          if (eb.type === gb.FullSnapshot) ew = eb, Hw = 0;
          else if (eb.type === gb.IncrementalSnapshot) {
            if (eb.data.source === lb.Mutation && eb.data.isAttachIframe) return;
            Hw++, (Lb && Hw >= Lb || Vb && eb.timestamp - ew.timestamp > Vb) && Ke(!0)
          }
        };
        const Lw = bb => {
            if (bb.removes && bb.removes.length > 0) {
              const wb = bb.adds.length > 0 ? new Set(bb.adds.map((bb => bb.node.id))) : null,
                Mb = new Set;
              if (bb.adds.length > 0)
                for (const eb of bb.adds) {
                  const bb = fe.OHb(eb.node.id);
                  bb && "IFRAME" === bb.nodeName && Mb.add(bb)
                }
              bb.removes.forEach((bb => {
                let {
                  id: eb
                } = bb;
                if (wb && wb.has(eb)) return;
                const Hb = tw.getIframeElementById(eb);
                Hb && Mb.has(Hb) ? tw.forgetIframeId(eb) : (null == Vw || Vw(eb), tw.removeIframeById(eb))
              })), null == gw || gw(), tw.cleanupDetachedIframes()
            }
            je({
              type: gb.IncrementalSnapshot,
              data: eb({
                source: lb.Mutation
              }, bb)
            })
          },
          Iw = bb => je({
            type: gb.IncrementalSnapshot,
            data: eb({
              source: lb.Scroll
            }, bb)
          }),
          Ow = bb => je({
            type: gb.IncrementalSnapshot,
            data: eb({
              source: lb.CanvasMutation
            }, bb)
          }),
          Uw = new De({
            mutationCb: Lw,
            adoptedStyleSheetCb: bb => je({
              type: gb.IncrementalSnapshot,
              data: eb({
                source: lb.AdoptedStyleSheet
              }, bb)
            }),
            maskAllElementAttributes: xb,
            maskAttributeFn: jb
          }),
          tw = new we({
            mirror: fe,
            mutationCb: Lw,
            stylesheetManager: Uw,
            recordCrossOriginIframes: Sb,
            wrappedEmit: je
          });
        for (const eb of qb || []) eb.getMirror && eb.getMirror({
          nodeMirror: fe,
          crossOriginIframeMirror: tw.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: tw.crossOriginIframeStyleMirror
        });
        const Cw = new ce,
          Ew = null == fb ? void 0 : fb.configured;
        re = new Re({
          recordCanvas: Jb,
          mutationCb: Ow,
          win: window,
          blockClass: Ib,
          blockSelector: Ob,
          mirror: fe,
          sampling: Db.canvas,
          dataURLOptions: yb,
          resolutionScale: Yb,
          canvasMasking: fb
        });
        const Fw = new Me({
          mutationCb: Lw,
          scrollCb: Iw,
          bypassOptions: {
            blockClass: Ib,
            blockSelector: Ob,
            maskTextClass: Cb,
            maskTextSelector: Eb,
            inlineStylesheet: Fb,
            maskInputOptions: kb,
            dataURLOptions: yb,
            maskTextFn: Xb,
            maskInputFn: zb,
            maskAllElementAttributes: xb,
            maskAttributeFn: jb,
            recordCanvas: Jb,
            canvasMaskingConfigured: Ew,
            inlineImages: Gb,
            sampling: Db,
            slimDOMOptions: ww,
            iframeManager: tw,
            stylesheetManager: Uw,
            canvasManager: re,
            keepIframeSrcFn: ab,
            processedNodeManager: Cw,
            attributeFilter: ub
          },
          mirror: fe
        });
        Ke = function() {
          let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (Wb) {
            db(Bb);
            try {
              if (je({
                  type: gb.Meta,
                  data: {
                    href: window.location.href,
                    width: BM(),
                    height: FM()
                  }
                }, wb), Mb) return;
              null == bb || bb.cancel(), bb = void 0, Uw.reset(), Fw.init(), vM.forEach((bb => bb.lock()));
              let eb = null,
                Hb = [];
              try {
                eb = function(bb, wb) {
                  const {
                    mirror: Mb = new sw,
                    blockClass: eb = "rr-block",
                    blockSelector: Hb = null,
                    maskTextClass: pb = "rr-mask",
                    maskTextSelector: Vb = null,
                    inlineStylesheet: gb = !0,
                    inlineImages: lb = !1,
                    recordCanvas: Lb = !1,
                    canvasMaskingConfigured: Ib,
                    maskAllInputs: Ob = !1,
                    maskTextFn: Ub,
                    maskInputFn: tb,
                    maskAllElementAttributes: Cb = !1,
                    maskAttributeFn: Eb,
                    slimDOM: Fb = !1,
                    dataURLOptions: Bb,
                    preserveWhiteSpace: sb,
                    onSerialize: mb,
                    onIframeLoad: hb,
                    iframeLoadTimeout: zb,
                    onIframeListenerRegistered: Xb,
                    onStylesheetLoad: xb,
                    stylesheetLoadTimeout: jb,
                    keepIframeSrcFn: Kb = () => !1,
                    maxDepth: rb,
                    inlineStylesheetBudgetRules: Rb
                  } = wb || {}, Db = !0 === Ob ? {
                    color: !0,
                    date: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0,
                    password: !0
                  } : !1 === Ob ? {
                    password: !0
                  } : Ob, cb = HM(Fb);
                  db(Rb);
                  try {
                    return eM(bb, {
                      doc: bb,
                      mirror: Mb,
                      blockClass: eb,
                      blockSelector: Hb,
                      maskTextClass: pb,
                      maskTextSelector: Vb,
                      skipChild: !1,
                      inlineStylesheet: gb,
                      maskInputOptions: Db,
                      maskTextFn: Ub,
                      maskInputFn: tb,
                      maskAllElementAttributes: Cb,
                      maskAttributeFn: Eb,
                      slimDOMOptions: cb,
                      dataURLOptions: Bb,
                      inlineImages: lb,
                      recordCanvas: Lb,
                      canvasMaskingConfigured: Ib,
                      preserveWhiteSpace: sb,
                      onSerialize: mb,
                      onIframeLoad: hb,
                      iframeLoadTimeout: zb,
                      onIframeListenerRegistered: Xb,
                      onStylesheetLoad: xb,
                      stylesheetLoadTimeout: jb,
                      keepIframeSrcFn: Kb,
                      newlyAddedElement: !1,
                      maxDepth: rb
                    })
                  } finally {
                    Pb()
                  }
                }(document, {
                  mirror: fe,
                  blockClass: Ib,
                  blockSelector: Ob,
                  maskTextClass: Cb,
                  maskTextSelector: Eb,
                  inlineStylesheet: Fb,
                  maskAllInputs: kb,
                  inlineStylesheetBudgetRules: Bb,
                  maskTextFn: Xb,
                  maskInputFn: zb,
                  maskAllElementAttributes: xb,
                  maskAttributeFn: jb,
                  slimDOM: ww,
                  dataURLOptions: yb,
                  recordCanvas: Jb,
                  canvasMaskingConfigured: Ew,
                  inlineImages: Gb,
                  onSerialize(bb) {
                    xM(bb, fe) && tw.addIframe(bb), jM(bb, fe) && Uw.trackLinkElement(bb), KM(bb) && Fw.addShadowRoot(Rb.shadowRoot(bb), document)
                  },
                  onIframeLoad(bb, wb) {
                    tw.attachIframe(bb, wb), Fw.observeAttachShadow(bb)
                  },
                  onIframeListenerRegistered(bb, wb) {
                    tw.registerLoadListenerDisposer(bb, wb)
                  },
                  onStylesheetLoad(bb, wb) {
                    Uw.attachLinkElement(bb, wb)
                  },
                  keepIframeSrcFn: ab
                })
              } finally {
                Hb = bw()
              }
              if (Mb) return;
              if (!eb) return console.warn("Failed to snapshot the document");
              if (je({
                  type: gb.FullSnapshot,
                  data: {
                    node: eb,
                    initialOffset: EM(window)
                  }
                }, wb), Mb) return;
              if (vM.forEach((bb => bb.unlock())), re.onFullSnapshot(), Hb.length) {
                const wb = function(bb, wb, Mb) {
                  let eb = !1,
                    Hb = null,
                    pb = 0,
                    Vb = null;
                  const gb = () => null !== Vb || bb.length > pb,
                    lb = () => {
                      const Mb = bb[pb];
                      bb[pb] = null, pb += 1, Mb && lM((() => {
                        Vb = wb.beginDeferredLinkInlining(Mb, fe.getId(Mb))
                      }))
                    },
                    Lb = () => {
                      if (!Vb) return;
                      const bb = Vb;
                      let wb = !0;
                      lM((() => {
                        wb = bb.advance(200)
                      })), wb && (Vb = null)
                    },
                    Ib = bb => {
                      if (Hb = null, eb) return;
                      let wb = 0;
                      do {
                        try {
                          Vb || lb(), Lb()
                        } catch (bb) {
                          null == Vb || Vb.discard(), Vb = null, Mw(1)
                        }
                        wb += 1
                      } while (!eb && gb() && (bb ? !bb.didTimeout && bb.timeRemaining() > 5 : 10 > wb));
                      eb || (gb() ? Hb = We(Ib) : Mb())
                    };
                  return Hb = We(Ib), {
                    cancel() {
                      eb = !0, null == Vb || Vb.discard(), Vb = null, null == Hb || Hb.cancel(), Hb = null
                    },
                    flush() {
                      if (eb) return;
                      eb = !0, null == Hb || Hb.cancel(), Hb = null;
                      let wb = 0,
                        Ib = 0;
                      for (; gb() && 50 > wb;) {
                        Vb || lb();
                        const Mb = Vb;
                        if (Mb)
                          if (Math.floor(Mb.remainingRules() / 200) + 1 > 50 - wb) Mb.discard(), Vb = null, Ib += 1;
                          else {
                            try {
                              Lb()
                            } catch (bb) {
                              null == Vb || Vb.discard(), Vb = null, Ib += 1
                            }
                            wb += 1
                          }
                      }
                      if (gb() || Ib > 0) {
                        let wb = Ib + (null !== Vb ? 1 : 0);
                        for (let Mb = pb; bb.length > Mb; Mb++) null !== bb[Mb] && (wb += 1);
                        Mw(wb), null == Vb || Vb.discard(), Vb = null
                      }
                      Mb()
                    }
                  }
                }(Hb, Uw, (() => {
                  bb === wb && (bb = void 0)
                }));
                bb = wb
              }
              Sb && tw.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Uw.adoptStyleSheets(document.adoptedStyleSheets, fe.getId(document))
            } finally {
              Pb()
            }
          }
        };
        try {
          const wb = [];
          wb.push(VM("pagehide", (() => {
            try {
              null == bb || bb.flush()
            } catch (wb) {}
            bb = void 0
          }), window));
          for (const bb of ["visibilitychange", "freeze", "resume"]) wb.push(VM(bb, Zb, document));
          Vw = bb => {
            const Mb = pw.get(bb);
            Mb && (Mb.forEach((bb => {
              lM(bb);
              const Mb = wb.indexOf(bb); - 1 !== Mb && wb.splice(Mb, 1)
            })), pw.delete(bb))
          }, gw = () => {
            for (const [wb] of pw) {
              const Mb = fe.OHb(wb);
              if (Mb) try {
                Mb.contentDocument && Mb.contentDocument.defaultView || null == Vw || Vw(wb)
              } catch (bb) {
                null == Vw || Vw(wb)
              } else null == Vw || Vw(wb)
            }
          };
          const pb = bb => {
            var wb;
            return NM(oM)({
              mutationCb: Lw,
              mousemoveCb: (bb, wb) => je({
                type: gb.IncrementalSnapshot,
                data: {
                  source: wb,
                  positions: bb
                }
              }),
              mouseInteractionCb: bb => je({
                type: gb.IncrementalSnapshot,
                data: eb({
                  source: lb.MouseInteraction
                }, bb)
              }),
              scrollCb: Iw,
              viewportResizeCb: bb => je({
                type: gb.IncrementalSnapshot,
                data: eb({
                  source: lb.ViewportResize
                }, bb)
              }),
              inputCb: bb => je({
                type: gb.IncrementalSnapshot,
                data: eb({
                  source: lb.Input
                }, bb)
              }),
              mediaInteractionCb: bb => je({
                type: gb.IncrementalSnapshot,
                data: eb({
                  source: lb.MediaInteraction
                }, bb)
              }),
              styleSheetRuleCb: bb => je({
                type: gb.IncrementalSnapshot,
                data: eb({
                  source: lb.StyleSheetRule
                }, bb)
              }),
              styleDeclarationCb: bb => je({
                type: gb.IncrementalSnapshot,
                data: eb({
                  source: lb.StyleDeclaration
                }, bb)
              }),
              canvasMutationCb: Ow,
              fontCb: bb => je({
                type: gb.IncrementalSnapshot,
                data: eb({
                  source: lb.Font
                }, bb)
              }),
              selectionCb(bb) {
                je({
                  type: gb.IncrementalSnapshot,
                  data: eb({
                    source: lb.Selection
                  }, bb)
                })
              },
              customElementCb(bb) {
                je({
                  type: gb.IncrementalSnapshot,
                  data: eb({
                    source: lb.CustomElement
                  }, bb)
                })
              },
              blockClass: Ib,
              ignoreClass: Ub,
              ignoreSelector: tb,
              maskTextClass: Cb,
              maskTextSelector: Eb,
              maskInputOptions: kb,
              inlineStylesheet: Fb,
              sampling: Db,
              recordDOM: Wb,
              recordCanvas: Jb,
              canvasMaskingConfigured: Ew,
              inlineImages: Gb,
              userTriggeredOnInput: vb,
              collectFonts: Qb,
              doc: bb,
              maskInputFn: zb,
              maskTextFn: Xb,
              maskAllElementAttributes: xb,
              maskAttributeFn: jb,
              keepIframeSrcFn: ab,
              blockSelector: Ob,
              slimDOMOptions: ww,
              dataURLOptions: yb,
              mirror: fe,
              iframeManager: tw,
              stylesheetManager: Uw,
              shadowDomManager: Fw,
              processedNodeManager: Cw,
              canvasManager: re,
              ignoreCSSAttributes: ib,
              attributeFilter: ub,
              plugins: (null == qb || null === (wb = qb.filter((bb => bb.observer))) || void 0 === wb ? void 0 : wb.map((bb => ({
                name: bb.name,
                observer: bb.observer,
                options: bb.options,
                callback: wb => je({
                  type: gb.Plugin,
                  data: {
                    plugin: bb.name,
                    payload: wb
                  }
                })
              })))) || []
            }, Kb)
          };
          tw.addLoadListener((bb => {
            try {
              const Mb = fe.getId(bb),
                eb = pb(bb.contentDocument);
              if ("function" == typeof eb && (wb.push(eb), -1 !== Mb)) {
                let bb = pw.get(Mb);
                bb || (bb = new Set, pw.set(Mb, bb)), bb.add(eb)
              }
            } catch (wb) {
              console.warn(wb)
            }
          })), tw.addPageHideListener((bb => {
            const wb = fe.getId(bb);
            null == Vw || Vw(wb), aM(bb)
          }));
          let Vb = -1;
          const Lb = bb => je({
              type: gb.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: bb
              }
            }),
            Bb = () => {
              var bb, wb, Mb, eb;
              const Hb = document,
                pb = null !== (bb = null !== (wb = null !== (Mb = null !== (eb = Hb.fullscreenElement) && void 0 !== eb ? eb : Hb.webkitFullscreenElement) && void 0 !== Mb ? Mb : Hb.mozFullScreenElement) && void 0 !== wb ? wb : Hb.msFullscreenElement) && void 0 !== bb ? bb : null,
                gb = pb ? fe.getId(pb) : -1;
              gb !== Vb && (-1 !== Vb && Lb({
                id: Vb,
                enter: !1
              }), Vb = gb, -1 !== gb && Lb({
                id: gb,
                enter: !0
              }))
            },
            sb = () => {
              if (Mb || Hb) return;
              if (Hb = !0, Ke(), Mb) return;
              const bb = pb(document);
              Mb ? "function" == typeof bb && LM([bb]) : ("function" == typeof bb && wb.push(bb), wb.push(VM("fullscreenchange", Bb)), wb.push(VM("webkitfullscreenchange", Bb)), wb.push(VM("mozfullscreenchange", Bb)), wb.push(VM("MSFullscreenChange", Bb)), Ye = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? sb() : (wb.push(VM("DOMContentLoaded", (() => {
            je({
              type: gb.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === Nb && setTimeout(sb, 0)
          }))), wb.push(VM("load", (() => {
            je({
              type: gb.Load,
              data: {}
            }), "load" === Nb && sb()
          }), window))), () => {
            Mb = !0;
            try {
              null == bb || bb.flush()
            } catch (wb) {}
            bb = void 0, LM(wb), Cw.destroy(), tw.removeLoadListener(), tw.destroy(), pw.clear(), Fw.reset(), fe.reset(), Ye = !1, YM = void 0
          }
        } catch (wb) {
          console.warn(wb)
        }
      }
      Je.addCustomEvent = (bb, wb) => {
        if (!Ye) throw new Error("please add custom event after start recording");
        je({
          type: gb.Custom,
          data: {
            tag: bb,
            payload: wb
          }
        })
      }, Je.freezePage = () => {
        vM.forEach((bb => bb.freeze()))
      }, Je.takeFullSnapshot = bb => {
        if (!Ye) throw new Error("please take full snapshot after start recording");
        Ke(bb)
      }, Je.isRecording = () => Ye, Je.mirror = fe, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var Se = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${Se.source}`, "i"), new RegExp(Se.source, "gi"), "0".repeat(32), "0".repeat(16);
      var Ne = Object.create(null);

      function ve(bb) {
        return ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
          return typeof bb
        } : function(bb) {
          return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
        }, ve(bb)
      }

      function Qe(bb, wb, Mb) {
        return (wb = function(bb) {
          var wb = function(bb) {
            if ("object" != ve(bb) || !bb) return bb;
            var wb = bb[Symbol.toPrimitive];
            if (void 0 !== wb) {
              var Mb = wb.call(bb, "string");
              if ("object" != ve(Mb)) return Mb;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(bb)
          }(bb);
          return "symbol" == ve(wb) ? wb : wb + ""
        }(wb)) in bb ? Object.defineProperty(bb, wb, {
          value: Mb,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : bb[wb] = Mb, bb
      }
      Ne.Node = Object.create(null), Ne.ShadowRoot = Object.create(null), Ne.MutationObserver = Object.create(null), Ne.Element = Object.create(null);
      var Ge = class {
          constructor(bb) {
            Qe(this, "fileName", void 0), Qe(this, "functionName", void 0), Qe(this, "lineNumber", void 0), Qe(this, "columnNumber", void 0), this.fileName = bb.fileName || "", this.functionName = bb.functionName || "", this.lineNumber = bb.lineNumber, this.columnNumber = bb.columnNumber
          }
          toString() {
            const bb = this.lineNumber || "",
              wb = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${bb}:${wb})` : `${this.fileName}:${bb}:${wb}`
          }
        },
        qe = /(^|@)\S+:\d+/,
        ae = /^\s*at .*(\S+:\d+|\(native\))/m,
        ie = /^(eval@)?(\[native code])?$/,
        ue = {
          parse(bb) {
            return bb ? void 0 !== bb.stacktrace || void 0 !== bb["opera#sourceloc"] ? this.parseOpera(bb) : bb.stack && bb.stack.match(ae) ? this.parseV8OrIE(bb) : bb.stack ? this.parseFFOrSafari(bb) : [] : []
          },
          extractLocation(bb) {
            if (-1 === bb.indexOf(":")) return [bb];
            const wb = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(bb.replace(/[()]/g, ""));
            if (!wb) throw new Error(`Cannot parse given url: ${bb}`);
            return [wb[1], wb[2] || void 0, wb[3] || void 0]
          },
          parseV8OrIE(bb) {
            return bb.stack.split("\n").filter((function(bb) {
              return !!bb.match(ae)
            }), this).map((function(bb) {
              bb.indexOf("(eval ") > -1 && (bb = bb.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let wb = bb.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const Mb = wb.match(/ (\((.+):(\d+):(\d+)\)$)/);
              wb = Mb ? wb.replace(Mb[0], "") : wb;
              const eb = wb.split(/\s+/).slice(1),
                Hb = this.extractLocation(Mb ? Mb[1] : eb.pop());
              return new Ge({
                functionName: eb.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(Hb[0]) > -1 ? void 0 : Hb[0],
                lineNumber: Hb[1],
                columnNumber: Hb[2]
              })
            }), this)
          },
          parseFFOrSafari(bb) {
            return bb.stack.split("\n").filter((function(bb) {
              return !bb.match(ie)
            }), this).map((function(bb) {
              if (bb.indexOf(" > eval") > -1 && (bb = bb.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === bb.indexOf("@") && -1 === bb.indexOf(":")) return new Ge({
                functionName: bb
              });
              {
                const wb = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  Mb = bb.match(wb),
                  eb = Mb && Mb[1] ? Mb[1] : void 0,
                  Hb = this.extractLocation(bb.replace(wb, ""));
                return new Ge({
                  functionName: eb,
                  fileName: Hb[0],
                  lineNumber: Hb[1],
                  columnNumber: Hb[2]
                })
              }
            }), this)
          },
          parseOpera(bb) {
            return !bb.stacktrace || bb.message.indexOf("\n") > -1 && bb.message.split("\n").length > bb.stacktrace.split("\n").length ? this.parseOpera9(bb) : bb.stack ? this.parseOpera11(bb) : this.parseOpera10(bb)
          },
          parseOpera9(bb) {
            const wb = /Line (\d+).*script (?:in )?(\S+)/i,
              Mb = bb.message.split("\n"),
              eb = [];
            for (let Hb = 2, pb = Mb.length; pb > Hb; Hb += 2) {
              const bb = wb.exec(Mb[Hb]);
              bb && eb.push(new Ge({
                fileName: bb[2],
                lineNumber: parseFloat(bb[1])
              }))
            }
            return eb
          },
          parseOpera10(bb) {
            const wb = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              Mb = bb.stacktrace.split("\n"),
              eb = [];
            for (let Hb = 0, pb = Mb.length; pb > Hb; Hb += 2) {
              const bb = wb.exec(Mb[Hb]);
              bb && eb.push(new Ge({
                functionName: bb[3] || void 0,
                fileName: bb[2],
                lineNumber: parseFloat(bb[1])
              }))
            }
            return eb
          },
          parseOpera11(bb) {
            return bb.stack.split("\n").filter((function(bb) {
              return !!bb.match(qe) && !bb.match(/^Error created at/)
            }), this).map((function(bb) {
              const wb = bb.split("@"),
                Mb = this.extractLocation(wb.pop());
              return new Ge({
                functionName: (wb.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: Mb[0],
                lineNumber: Mb[1],
                columnNumber: Mb[2]
              })
            }), this)
          }
        };

      function de(bb) {
        if (!bb || !bb.outerHTML) return "";
        let wb = "";
        for (; bb.parentElement;) {
          let Mb = bb.localName;
          if (!Mb) break;
          Mb = Mb.toLowerCase();
          const eb = bb.parentElement,
            Hb = [];
          if (eb.children && eb.children.length > 0)
            for (let bb = 0; eb.children.length > bb; bb++) {
              const wb = eb.children[bb];
              wb.localName && wb.localName.toLowerCase && wb.localName.toLowerCase() === Mb && Hb.push(wb)
            }
          Hb.length > 1 && (Mb += `:eq(${Hb.indexOf(bb)})`), wb = Mb + (wb ? ">" + wb : ""), bb = eb
        }
        return wb
      }

      function Pe(bb) {
        return Array.isArray(bb)
      }

      function ne(bb) {
        return "object" == typeof bb && null !== bb && !Pe(bb)
      }

      function ye(bb, wb) {
        if (0 === wb) return !0;
        const Mb = Object.keys(bb);
        for (const eb of Mb)
          if (ne(bb[eb]) && ye(bb[eb], wb - 1)) return !0;
        return !1
      }

      function oe(bb, wb) {
        const Mb = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(Mb, wb);
        const eb = [],
          Hb = [];
        return JSON.stringify(bb, (function(bb, wb) {
          if (eb.length > 0) {
            const Mb = eb.indexOf(this);
            ~Mb ? eb.splice(Mb + 1) : eb.push(this), ~Mb ? Hb.splice(Mb, 1 / 0, bb) : Hb.push(bb), ~eb.indexOf(wb) && (wb = eb[0] === wb ? "[Circular ~]" : "[Circular ~." + Hb.slice(0, eb.indexOf(wb)).join(".") + "]")
          } else eb.push(wb);
          if (null === wb) return wb;
          if (void 0 === wb) return "undefined";
          if (ne(pb = wb) && Object.keys(pb).length > Mb.numOfKeysLimit || "function" == typeof pb || ne(pb) && ye(pb, Mb.depthOfLimit)) return function(bb) {
            let wb = bb.toString();
            return Mb.stringLengthLimit && wb.length > Mb.stringLengthLimit && (wb = `${wb.slice(0,Mb.stringLengthLimit)}...`), wb
          }(wb);
          var pb;
          if ("bigint" == typeof wb) return wb.toString() + "n";
          if (wb instanceof Event) {
            const bb = {};
            for (const Mb in wb) {
              const eb = wb[Mb];
              bb[Mb] = Pe(eb) ? de(eb.length ? eb[0] : null) : eb
            }
            return bb
          }
          return wb instanceof Node ? wb instanceof HTMLElement ? wb ? wb.outerHTML : "" : wb.nodeName : wb instanceof Error ? wb.stack ? wb.stack + "\nEnd of stack for Error object" : wb.name + ": " + wb.message : wb
        }))
      }
      var Te = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function ke(bb, wb, Mb) {
        const eb = Mb ? Object.assign({}, Te, Mb) : Te,
          Hb = eb.logger;
        if (!Hb) return () => {};
        let pb;
        pb = "string" == typeof Hb ? wb[Hb] : Hb;
        let Vb = 0,
          gb = !1,
          lb = !0;
        const Lb = [];
        if (eb.level.includes("error")) {
          const Mb = wb => {
            const Mb = wb.message;
            bb({
              level: "error",
              trace: ue.parse(wb.error).map((bb => bb.toString())),
              payload: [oe(Mb, eb.stringifyOptions)]
            })
          };
          wb.addEventListener("error", Mb), Lb.push((() => {
            wb.removeEventListener("error", Mb)
          }));
          const Hb = wb => {
            let Mb, Hb;
            wb.reason instanceof Error ? (Mb = wb.reason, Hb = [oe(`Uncaught (in promise) ${Mb.name}: ${Mb.message}`, eb.stringifyOptions)]) : (Mb = new Error, Hb = [oe("Uncaught (in promise)", eb.stringifyOptions), oe(wb.reason, eb.stringifyOptions)]), bb({
              level: "error",
              trace: ue.parse(Mb).map((bb => bb.toString())),
              payload: Hb
            })
          };
          wb.addEventListener("unhandledrejection", Hb), Lb.push((() => {
            wb.removeEventListener("unhandledrejection", Hb)
          }))
        }
        for (const Ob of eb.level) Lb.push(Ib(pb, Ob));
        return () => {
          lb = !1, Lb.forEach((bb => bb()))
        };

        function Ib(wb, Mb) {
          return wb[Mb] ? function(Hb, pb) {
            try {
              if (!(pb in Hb)) return () => {};
              const Lb = Hb[pb],
                Ib = {
                  next: Lb
                },
                Ob = (Hb => function() {
                  for (var pb = arguments.length, Lb = new Array(pb), Ib = 0; Ib < pb; Ib++) Lb[Ib] = arguments[Ib];
                  if (Hb.apply(wb, Lb), lb && !("assert" === Mb && Lb[0] || gb)) {
                    gb = !0;
                    try {
                      const wb = ue.parse(new Error).map((bb => bb.toString())).splice(1),
                        Hb = ("assert" === Mb ? Lb.slice(1) : Lb).map((bb => oe(bb, eb.stringifyOptions)));
                      Vb++, eb.lengthThreshold > Vb ? bb({
                        level: Mb,
                        trace: wb,
                        payload: Hb
                      }) : Vb === eb.lengthThreshold && bb({
                        level: "warn",
                        trace: [],
                        payload: [oe("The number of log records reached the threshold.")]
                      })
                    } catch (bb) {
                      Hb.apply(wb, ["rrweb logger error:", bb, ...Lb])
                    } finally {
                      gb = !1
                    }
                  }
                })((function() {
                  for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
                  return Ib.next.apply(this, wb)
                }));
              return "function" == typeof Ob && (Ob.prototype = Ob.prototype || {}, Object.defineProperties(Ob, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: Lb
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: Ib
                }
              })), Hb[pb] = Ob, () => {
                if (Hb[pb] === Ob) return void(Hb[pb] = Ib.next);
                const bb = bb => {
                  var wb;
                  return "function" == typeof bb ? null !== (wb = bb.__rrweb_layer__) && void 0 !== wb ? wb : bb.__posthog_layer__ : void 0
                };
                let wb = Hb[pb],
                  Mb = bb(wb);
                for (; Mb;) {
                  if (Mb.next === Ob) return void(Mb.next = Ib.next);
                  wb = Mb.next, Mb = bb(wb)
                }
              }
            } catch (bb) {
              return () => {}
            }
          }(wb, Mb) : () => {}
        }
      }
      const bH = "u" > typeof window ? window : void 0,
        wH = "u" > typeof globalThis ? globalThis : bH,
        MH = null == wH ? void 0 : wH.document,
        eH = null == wH ? void 0 : wH.location;
      null != wH && wH.XMLHttpRequest && new wH.XMLHttpRequest;
      const HH = "undefined" != typeof globalThis ? globalThis : bH;
      HH && "undefined" == typeof self && (HH.self = HH), HH && "undefined" == typeof File && (HH.File = function() {});
      const pH = null != bH ? bH : {},
        VH = Object.prototype,
        gH = VH.hasOwnProperty,
        lH = VH.toString,
        LH = Array.isArray || function(bb) {
          return "[object Array]" === lH.call(bb)
        },
        IH = bb => "function" == typeof bb,
        OH = bb => bb === Object(bb) && !LH(bb),
        UH = bb => void 0 === bb,
        tH = bb => "[object String]" == lH.call(bb),
        CH = bb => null === bb,
        EH = bb => UH(bb) || CH(bb),
        FH = bb => "[object Number]" == lH.call(bb) && bb == bb,
        BH = bb => "[object Boolean]" === lH.call(bb),
        sH = bb => bb instanceof FormData;

      function mH(bb, wb, Mb, eb, Hb) {
        return wb > Mb && (eb.warn("min cannot be greater than max."), wb = Mb), FH(bb) ? bb > Mb ? (eb.warn(" cannot be  greater than max: " + Mb + ". Using max value instead."), Mb) : wb > bb ? (eb.warn(" cannot be less than min: " + wb + ". Using min value instead."), wb) : bb : (eb.warn(" must be a number. using max or fallback. max: " + Mb + ", fallback: " + Hb), mH(null != Hb ? Hb : Mb, wb, Mb, eb))
      }
      var hH = class {
        constructor(bb) {
          this.C = {}, this.I = bb.I, this.R = mH(bb.bucketSize, 0, 100, bb.A), this.$ = mH(bb.refillRate, 0, this.R, bb.A), this.O = mH(bb.refillInterval, 0, 864e5, bb.A)
        }
        F(bb, wb) {
          const Mb = Math.floor((wb - bb.lastAccess) / this.O);
          Mb > 0 && (bb.tokens = Math.min(bb.tokens + Mb * this.$, this.R), bb.lastAccess = bb.lastAccess + Mb * this.O)
        }
        consumeRateLimit(bb) {
          var wb;
          const Mb = Date.now(),
            eb = String(bb);
          let Hb = this.C[eb];
          return Hb ? this.F(Hb, Mb) : (Hb = {
            tokens: this.R,
            lastAccess: Mb
          }, this.C[eb] = Hb), 0 === Hb.tokens || (Hb.tokens--, 0 === Hb.tokens && (null === (wb = this.I) || void 0 === wb || wb.call(this, bb)), 0 === Hb.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function zH(bb) {
        return bb ? bb.split("#")[0] : bb
      }
      const XH = "NativeGzipValidationError";
      let xH;
      const jH = bb => {
          throw function(bb, wb) {
            const Mb = new Error(wb);
            try {
              Object.defineProperty(Mb, "name", {
                value: bb,
                writable: !0,
                enumerable: !0,
                configurable: !0
              })
            } catch (bb) {}
            return Mb
          }(XH, `Native gzip produced invalid output: ${bb}`)
        },
        KH = (rH = pb((function*(bb, wb) {
          18 > bb.size && jH("too-short");
          const Mb = new Uint8Array(yield bb.slice(0, 10).arrayBuffer());
          var eb;
          (2 > (eb = Mb).length || 31 !== eb[0] || 139 !== eb[1] || 8 !== Mb[2]) && jH("invalid-header");
          const Hb = new DataView(yield bb.slice(bb.size - 8).arrayBuffer());
          Hb.getUint32(0, !0) !== (bb => {
            const wb = (() => {
              if (xH) return xH;
              xH = [];
              for (let bb = 0; 256 > bb; bb++) {
                let wb = bb;
                for (let bb = 0; 8 > bb; bb++) wb = 1 & wb ? 3988292384 ^ wb >>> 1 : wb >>> 1;
                xH[bb] = wb >>> 0
              }
              return xH
            })();
            let Mb = 4294967295;
            for (let eb = 0; bb.length > eb; eb++) Mb = wb[255 & (Mb ^ bb[eb])] ^ Mb >>> 8;
            return (4294967295 ^ Mb) >>> 0
          })(wb) && jH("invalid-crc");
          const pb = wb.length >>> 0;
          Hb.getUint32(4, !0) !== pb && jH("invalid-size")
        })), function(bb, wb) {
          return rH.apply(this, arguments)
        });
      var rH;

      function RH() {
        return RH = pb((function*(bb) {
          let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const wb = (new TextEncoder).encode(bb),
              Mb = new globalThis.CompressionStream("gzip"),
              Hb = Mb.writable.getWriter(),
              Vb = Hb.write(wb).then((() => Hb.close())).catch((eb = pb((function*(bb) {
                try {
                  yield Hb.abort(bb)
                } catch (bb) {}
                throw bb
              })), function(bb) {
                return eb.apply(this, arguments)
              })),
              gb = new Response(Mb.readable).blob(),
              [lb] = yield Promise.all([gb, Vb]);
            return yield KH(lb, wb), lb
          } catch (bb) {
            if (null == Mb ? void 0 : Mb.rethrow) throw bb;
            return wb && console.error("Failed to gzip compress data", bb), null
          }
          var eb
        })), RH.apply(this, arguments)
      }
      const DH = "0.9.4",
        cH = {
          DEBUG: !1,
          LIB_VERSION: DH,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: DH
        },
        YH = function(bb) {
          let {
            debugEnabled: wb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const Mb = {
            N(Mb) {
              let eb;
              try {
                eb = typeof window > "u" ? void 0 : window
              } catch (bb) {
                return
              }
              for (var Hb = arguments.length, pb = new Array(Hb > 1 ? Hb - 1 : 0), Vb = 1; Vb < Hb; Vb++) pb[Vb - 1] = arguments[Vb];
              eb && (cH.DEBUG || eb.POSTHOG_DEBUG || wb) && !UH(eb.console) && eb.console && ("__rrweb_original__" in eb.console[Mb] ? eb.console[Mb].__rrweb_original__ : eb.console[Mb])(bb, ...pb)
            },
            debug() {
              for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
              Mb.N("debug", ...wb)
            },
            info() {
              for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
              Mb.N("log", ...wb)
            },
            warn() {
              for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
              Mb.N("warn", ...wb)
            },
            error() {
              for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
              Mb.N("error", ...wb)
            },
            critical() {
              for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
              console.error(bb, ...Mb)
            },
            uninitializedWarning(bb) {
              Mb.error(`You must initialize PostHog before calling ${bb}`)
            },
            createLogger: (wb, Mb) => YH(`${bb} ${wb}`, Mb)
          };
          return Mb
        },
        ZH = YH("[PostHog.js]"),
        fH = ZH.createLogger;

      function AH(bb, wb) {
        if (!EH(bb))
          if (LH(bb)) bb.forEach(wb);
          else if (sH(bb)) bb.forEach(((bb, Mb) => wb(bb, Mb)));
        else
          for (const Mb in bb) gH.call(bb, Mb) && wb(bb[Mb], Mb)
      }

      function WH(bb, wb, Mb, eb) {
        const {
          capture: Hb = !1,
          passive: pb = !0
        } = null != eb ? eb : {};
        null == bb || bb.addEventListener(wb, Mb, {
          capture: Hb,
          passive: pb
        })
      }
      const JH = ["localhost", "127.0.0.1"],
        SH = bb => {
          const wb = null == MH ? void 0 : MH.createElement("a");
          return UH(wb) ? null : (wb.href = bb, wb)
        },
        NH = () => {},
        vH = bb => {
          var wb;
          if (IH(bb)) return null !== (wb = bb.__posthog_layer__) && void 0 !== wb ? wb : bb.__rrweb_layer__
        };

      function QH(bb, wb, Mb) {
        try {
          if (!(wb in bb)) return NH;
          const eb = {
              next: bb[wb]
            },
            Hb = Mb((function() {
              for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
              return eb.next.apply(this, wb)
            }));
          return IH(Hb) && (Hb.prototype = Hb.prototype || {}, Object.defineProperties(Hb, {
            __posthog_wrapped__: {
              enumerable: !1,
              value: !0
            },
            __posthog_layer__: {
              enumerable: !1,
              value: eb
            }
          })), bb[wb] = Hb, () => {
            if (bb[wb] === Hb) return void(bb[wb] = eb.next);
            let Mb = bb[wb],
              pb = vH(Mb);
            for (; pb;) {
              if (pb.next === Hb) return void(pb.next = eb.next);
              Mb = pb.next, pb = vH(Mb)
            }
          }
        } catch (bb) {
          return NH
        }
      }

      function GH(bb, wb) {
        var Mb;
        const eb = function(bb) {
            try {
              return "string" == typeof bb ? new URL(bb).hostname : "url" in bb ? new URL(bb.url).hostname : bb.hostname
            } catch (bb) {
              return null
            }
          }(bb),
          Hb = {
            hostname: eb,
            isHostDenied: !1
          };
        if (!(null === (Mb = wb.payloadHostDenyList) || void 0 === Mb ? void 0 : Mb.length) || !(null == eb ? void 0 : eb.trim().length)) return Hb;
        for (const pb of wb.payloadHostDenyList)
          if (eb.endsWith(pb)) return {
            hostname: eb,
            isHostDenied: !0
          };
        return Hb
      }

      function qH(bb) {
        var wb;
        const Mb = null == bH || null === (wb = bH.location) || void 0 === wb ? void 0 : wb.href;
        return UH(Mb) ? void 0 : function(bb, wb) {
          var Mb;
          const eb = null == bb || null === (Mb = bb.config) || void 0 === Mb ? void 0 : Mb.get_current_url;
          if (!IH(eb)) return wb;
          try {
            const bb = eb(wb);
            return tH(bb) && bb ? bb : wb
          } catch (bb) {
            return ZH.error("Error in get_current_url, falling back to window.location.href", bb), wb
          }
        }(bb, Mb)
      }
      const aH = "$stored_person_properties",
        iH = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        uH = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        dH = [16, 15, 14, 13],
        PH = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        nH = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        yH = /[0-9A-Za-z_]/;

      function oH(bb) {
        let wb = 0,
          Mb = !1;
        for (let eb = bb.length - 1; eb >= 0; eb--) {
          let Hb = bb.charCodeAt(eb) - 48;
          Mb && (Hb *= 2, Hb > 9 && (Hb -= 9)), wb += Hb, Mb = !Mb
        }
        return wb % 10 == 0
      }
      const TH = 1e6;

      function kH(bb) {
        var wb;
        return Math.min(TH, null !== (wb = bb.payloadSizeLimitBytes) && void 0 !== wb ? wb : TH)
      }
      const bp = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: bb => bb,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: TH,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        wp = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        Mp = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        ep = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        Hp = bb => {
          EH(bb) || AH(Object.keys(bb), (wb => {
            (bb => {
              const wb = bb.toLowerCase();
              return wp.includes(wb) || ep.some((bb => wb.includes(bb)))
            })(wb) && (bb[wb] = "redacted")
          }))
        },
        pp = ["/s/", "/e/", "/i/"];

      function Vp(bb, wb, Mb, eb) {
        if (EH(bb)) return bb;
        let Hb = (null == wb ? void 0 : wb["content-length"]) || function(bb) {
          return new Blob([bb]).size
        }(bb);
        return tH(Hb) && (Hb = parseInt(Hb)), Hb > Mb ? `[SessionRecording] ${eb} body too large to record (${Hb} bytes)` : bb
      }

      function gp(bb, wb) {
        if (EH(bb)) return bb;
        let Mb = bb;
        return function(bb) {
          let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (EH(bb)) return !1;
          if (tH(bb)) {
            if (bb = bb.trim(), wb ? iH.test((bb || "").replace(/[- ]/g, "")) : function(bb) {
                let wb;
                for (uH.lastIndex = 0; wb = uH.exec(bb);) {
                  const bb = wb[2];
                  if (!bb) continue;
                  const Mb = bb.replace(/[- ]/g, "");
                  for (let wb = 0; Mb.length > wb; wb++)
                    for (const bb of dH) {
                      const eb = wb + bb;
                      if (Mb.length >= eb) {
                        const bb = Mb.slice(wb, eb);
                        if (iH.test(bb) && oH(bb)) return !0
                      }
                    }
                }
                return !1
              }(bb)) return !1;
            if (wb ? PH.test(bb) : function(bb) {
                let wb;
                for (nH.lastIndex = 0; wb = nH.exec(bb);) {
                  const bb = wb[1],
                    Mb = wb[3];
                  if (!(bb && Mb && yH.test(bb) && yH.test(Mb))) return !0
                }
                return !1
              }(bb)) return !1
          }
          return !0
        }(Mb, !1) || (Mb = "[SessionRecording] " + wb + " body redacted"), AH(Mp, (bb => {
          (null == Mb ? void 0 : Mb.length) && -1 !== (null == Mb ? void 0 : Mb.indexOf(bb)) && (Mb = "[SessionRecording] " + wb + " body redacted as might contain: " + bb)
        })), Mb
      }
      const lp = new WeakSet,
        Lp = fH("[Recorder]"),
        Ip = bb => "navigation" === bb.entryType,
        Op = bb => "resource" === bb.entryType,
        Up = () => {};

      function tp(bb, wb) {
        var Mb;
        return Ip(wb) && "complete" === (null === (Mb = bb.document) || void 0 === Mb ? void 0 : Mb.readyState) && wb.loadEventEnd > 0
      }

      function Cp(bb, wb) {
        return wb.recordInitialRequests ? bb.performance.getEntries().filter((Mb => tp(bb, Mb) || Op(Mb) && wb.initiatorTypes.includes(Mb.initiatorType))) : wb.performanceEntryTypeToObserve.includes("navigation") ? function(bb) {
          var wb;
          return "complete" !== (null === (wb = bb.document) || void 0 === wb ? void 0 : wb.readyState) ? [] : bb.performance.getEntriesByType("navigation").filter((wb => tp(bb, wb)))
        }(bb) : []
      }

      function Ep(bb, wb) {
        return !!wb && (BH(wb) || wb[bb])
      }

      function Fp(bb) {
        if ("undefined" == typeof Request) return !1;
        if (bb instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(bb)
        } catch (bb) {
          return !1
        }
      }
      const Bp = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function sp(bb) {
        let {
          type: wb,
          recordBody: Mb,
          headers: eb,
          url: Hb
        } = bb;

        function pb(bb) {
          const wb = Object.keys(eb).find((bb => "content-type" === bb.toLowerCase())),
            Mb = wb && eb[wb];
          return bb.some((bb => null == Mb ? void 0 : Mb.toLowerCase().includes(bb)))
        }
        if (!Mb) return !1;
        if (function bb(wb) {
            try {
              return "string" == typeof wb ? wb.startsWith("blob:") : wb instanceof URL ? "blob:" === wb.protocol : !!Fp(wb) && bb(wb.url)
            } catch (bb) {
              return !1
            }
          }(Hb)) return !1;
        if (pb(Bp)) return !1;
        if (BH(Mb)) return !0;
        if (LH(Mb)) return pb(Mb);
        const Vb = Mb[wb];
        return BH(Vb) ? Vb : pb(Vb)
      }

      function mp(bb, wb, Mb, eb, Hb) {
        return hp.apply(this, arguments)
      }

      function hp() {
        return hp = pb((function*(bb, wb, Mb, eb, Hb) {
          let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (pb > 10) return Lp.warn("Failed to get performance entry for request", {
            url: Mb,
            initiatorType: wb
          }), null;
          const Vb = function(bb, wb) {
            for (let Mb = bb.length - 1; Mb >= 0; Mb -= 1)
              if (wb(bb[Mb])) return bb[Mb]
          }(bb.performance.getEntriesByName(Mb), (bb => Op(bb) && bb.initiatorType === wb && (UH(eb) || bb.startTime >= eb) && (UH(Hb) || Hb >= bb.startTime)));
          return Vb || (yield new Promise((bb => setTimeout(bb, 50 * pb))), mp(bb, wb, Mb, eb, Hb, pb + 1))
        })), hp.apply(this, arguments)
      }

      function zp(bb) {
        let {
          body: wb,
          options: Mb,
          url: eb
        } = bb;
        if (EH(wb)) return null;
        const {
          hostname: Hb,
          isHostDenied: pb
        } = GH(eb, Mb);
        if (pb) return Hb + " is in deny list";
        if (tH(wb)) return wb;
        if ((bb => "u" > typeof Document && bb instanceof Document)(wb)) return wb.textContent;
        if (sH(wb)) return function(bb) {
          let wb, Mb, eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const Hb = [];
          return AH(bb, (function(bb, eb) {
            UH(bb) || UH(eb) || "undefined" === eb || (wb = encodeURIComponent((bb => bb instanceof File)(bb) ? bb.name : bb.toString()), Mb = encodeURIComponent(eb), Hb[Hb.length] = Mb + "=" + wb)
          })), Hb.join(eb)
        }(wb);
        if (OH(wb)) try {
          return JSON.stringify(wb)
        } catch (wb) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(wb)
      }

      function Xp(bb, wb) {
        let {
          entry: Mb,
          method: Hb,
          status: pb,
          networkRequest: Vb,
          isInitial: gb,
          start: lb,
          end: Lb,
          url: Ib,
          initiatorType: Ob
        } = wb;
        lb = Mb ? Mb.startTime : lb, Lb = Mb ? Mb.responseEnd : Lb;
        const Ub = Math.floor(Date.now() - bb.performance.now()),
          tb = Math.floor(Ub + (lb || 0)),
          Cb = [eb(eb({}, Mb ? JSON.parse(JSON.stringify(Mb.toJSON())) : {
            name: Ib
          }), {}, {
            startTime: UH(lb) ? void 0 : Math.round(lb),
            endTime: UH(Lb) ? void 0 : Math.round(Lb),
            timeOrigin: Ub,
            timestamp: tb,
            method: Hb,
            initiatorType: Ob || (Mb ? Mb.initiatorType : void 0),
            status: pb,
            requestHeaders: Vb.requestHeaders,
            requestBody: Vb.requestBody,
            responseHeaders: Vb.responseHeaders,
            responseBody: Vb.responseBody,
            isInitial: gb
          })];
        if ((bb => !CH(bb) && ("navigation" === bb.entryType || "resource" === bb.entryType))(Mb))
          for (const eb of Mb.serverTiming || []) Cb.push({
            timeOrigin: Ub,
            timestamp: tb,
            startTime: Math.round(Mb.startTime),
            name: eb.name,
            duration: eb.duration,
            entryType: "serverTiming"
          });
        return Cb
      }
      const xp = ["video/", "audio/"];

      function jp(bb) {
        return OH(bb) && IH(bb.getReader) && IH(bb.tee)
      }
      const Kp = "[SessionReplay] Timeout while trying to read body",
        rp = "[SessionReplay] Failed to read body";

      function Rp(bb) {
        return `${rp}: ${bb}`
      }

      function Dp(bb) {
        return `[SessionReplay] Body too large to record (> ${bb} bytes)`
      }

      function cp(bb, wb) {
        if (!wb.streamNetworkBody) return function(bb) {
          return new Promise((wb => {
            const Mb = setTimeout((() => wb(Kp)), 500);
            try {
              bb.clone().text().then((bb => wb(bb)), (bb => wb(Rp(bb)))).finally((() => clearTimeout(Mb)))
            } catch (bb) {
              clearTimeout(Mb), wb(rp)
            }
          }))
        }(bb);
        const Mb = kH(wb);
        return function(bb, wb) {
          try {
            var Mb, eb;
            const Hb = null === (Mb = bb.headers) || void 0 === Mb || null === (eb = Mb.get) || void 0 === eb ? void 0 : eb.call(Mb, "content-length");
            if (!Hb) return !1;
            const pb = parseInt(Hb, 10);
            return Number.isFinite(pb) && pb > wb
          } catch (bb) {
            return !1
          }
        }(bb, Mb) ? Promise.resolve(Dp(Mb)) : function(bb, wb) {
          return new Promise((Mb => {
            let eb, Hb = !1;

            function pb() {
              try {
                null == eb || eb.cancel().catch((() => {}))
              } catch (bb) {}
            }

            function Vb(bb) {
              Hb || (Hb = !0, clearTimeout(gb), pb(), Mb(bb))
            }
            const gb = setTimeout((() => Vb(Kp)), 500);
            let lb;
            try {
              lb = bb.clone()
            } catch (bb) {
              return void Vb(rp)
            }
            const Lb = lb.body;
            if (!jp(Lb) || "undefined" == typeof TextDecoder) {
              try {
                lb.text().then((bb => Vb(bb)), (bb => Vb(Rp(bb))))
              } catch (bb) {
                Vb(rp)
              }
              return
            }
            try {
              eb = Lb.getReader()
            } catch (bb) {
              return void Vb(rp)
            }
            const Ib = [];
            let Ob = 0;
            ! function bb() {
              eb.read().then((Mb => {
                let {
                  done: eb,
                  value: gb
                } = Mb;
                if (Hb) pb();
                else if (eb) Vb((new TextDecoder).decode(function(bb, wb) {
                  const Mb = new Uint8Array(wb);
                  let eb = 0;
                  for (const Hb of bb) Mb.set(Hb, eb), eb += Hb.byteLength;
                  return Mb
                }(Ib, Ob)));
                else {
                  if (gb) {
                    if (Ob + gb.byteLength > wb) return void Vb(Dp(wb));
                    Ob += gb.byteLength, Ib.push(gb)
                  }
                  bb()
                }
              }), (bb => Vb(Rp(bb))))
            }()
          }))
        }(bb, Mb)
      }

      function Yp(bb) {
        return Zp.apply(this, arguments)
      }

      function Zp() {
        return (Zp = pb((function*(bb) {
          let {
            r: wb,
            options: Mb,
            url: eb
          } = bb;
          const {
            hostname: Hb,
            isHostDenied: pb
          } = GH(eb, Mb);
          return pb ? Promise.resolve(Hb + " is in deny list") : cp(wb, Mb)
        }))).apply(this, arguments)
      }

      function fp(bb) {
        return Ap.apply(this, arguments)
      }

      function Ap() {
        return (Ap = pb((function*(bb) {
          let {
            r: wb,
            options: Mb,
            url: eb
          } = bb;
          const Hb = function(bb) {
            let {
              r: wb,
              options: Mb,
              url: eb
            } = bb;
            var Hb;
            if ("chunked" === wb.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const pb = null === (Hb = wb.headers.get("Content-Type")) || void 0 === Hb ? void 0 : Hb.toLowerCase(),
              Vb = xp.some((bb => null == pb ? void 0 : pb.startsWith(bb)));
            if (pb && Vb) return `Content-Type ${pb} is not supported`;
            const {
              hostname: gb,
              isHostDenied: lb
            } = GH(eb, Mb);
            return lb ? gb + " is in deny list" : null
          }({
            r: wb,
            options: Mb,
            url: eb
          });
          return CH(Hb) ? cp(wb, Mb) : Promise.resolve(Hb)
        }))).apply(this, arguments)
      }
      let Wp = null;

      function Jp(bb, wb, Mb) {
        if (!("performance" in wb)) return () => {};
        if (Wp) return Lp.warn("Network observer already initialised, doing nothing"), () => {};
        const Hb = Mb ? Object.assign({}, bp, Mb) : bp;
        let Vb = !0,
          gb = !1;
        const lb = wb => {
            if (!Vb) return;
            const Mb = [];
            let pb = !1;
            wb.requests.forEach((bb => {
              const wb = "serverTiming" === bb.entryType;
              if (wb && pb) return;
              let eb;
              try {
                eb = Hb.maskRequestFn(bb)
              } catch (bb) {
                return gb || (gb = !0, Lp.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(wb || (pb = !0))
              }
              wb || (pb = !eb || (bb => !!bb && lp.has(bb))(eb)), eb && Mb.push(eb)
            })), Mb.length > 0 && bb(eb(eb({}, wb), {}, {
              requests: Mb
            }))
          },
          Lb = function(bb, wb, Mb) {
            try {
              bb({
                requests: Cp(wb, Mb).flatMap((bb => Xp(wb, {
                  entry: bb,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (bb) {
              Lp.error("Failed to capture initial performance entries for network capture", bb)
            }
            const eb = wb.PerformanceObserver,
              Hb = null == eb ? void 0 : eb.supportedEntryTypes;
            if (!eb || !LH(Hb)) return;
            const pb = Hb.filter((bb => Mb.performanceEntryTypeToObserve.includes(bb)));
            if (!pb.length) return;
            const Vb = new eb((eb => {
              bb({
                requests: eb.getEntries().filter((bb => Ip(bb) || Op(bb) && Mb.initiatorTypes.includes(bb.initiatorType) && (bb => !Mb.recordBody && !Mb.recordHeaders || "xmlhttprequest" !== bb.initiatorType && "fetch" !== bb.initiatorType)(bb))).flatMap((bb => Xp(wb, {
                  entry: bb,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return Vb.observe({
              entryTypes: pb
            }), () => {
              Vb.disconnect()
            }
          }(lb, wb, Hb),
          Ib = Hb.recordHeaders || Hb.recordBody;
        if (!Lb && !Ib) return Vb = !1, Up;
        let Ob = () => {},
          Ub = () => {};
        return Ib && (Ob = function(bb, wb, Mb) {
          if (!Mb.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const eb = Ep("request", Mb.recordHeaders),
            Hb = Ep("response", Mb.recordHeaders),
            pb = QH(wb.XMLHttpRequest.prototype, "open", (pb => function(Vb, gb) {
              let lb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                Lb = arguments.length > 3 ? arguments[3] : void 0,
                Ib = arguments.length > 4 ? arguments[4] : void 0;
              const Ob = this;
              try {
                const pb = new Request(gb),
                  lb = {};
                let Lb, Ib;
                const Ub = {},
                  tb = Ob.setRequestHeader.bind(Ob);
                Ob.setRequestHeader = (bb, wb) => (Ub[bb] = wb, tb(bb, wb)), eb && (lb.requestHeaders = Ub);
                const Cb = Ob.send.bind(Ob);
                Ob.send = bb => (sp({
                  type: "request",
                  headers: Ub,
                  url: gb,
                  recordBody: Mb.recordBody
                }) && (lb.requestBody = zp({
                  body: bb,
                  options: Mb,
                  url: gb
                })), Lb = wb.performance.now(), Cb(bb));
                const Eb = () => {
                    Ob.removeEventListener("readystatechange", Fb), Ob.removeEventListener("error", Eb), Ob.removeEventListener("abort", Eb), Ob.removeEventListener("timeout", Eb)
                  },
                  Fb = () => {
                    if (Ob.readyState !== Ob.DONE) return;
                    Eb(), Ib = wb.performance.now();
                    const eb = {};
                    Ob.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((bb => {
                      const wb = bb.split(": "),
                        Mb = wb.shift(),
                        Hb = wb.join(": ");
                      Mb && (eb[Mb] = Hb)
                    })), Hb && (lb.responseHeaders = eb), sp({
                      type: "response",
                      headers: eb,
                      url: gb,
                      recordBody: Mb.recordBody
                    }) && (lb.responseBody = zp({
                      body: Ob.response,
                      options: Mb,
                      url: gb
                    })), mp(wb, "xmlhttprequest", pb.url, Lb, Ib).then((Mb => {
                      bb({
                        requests: Xp(wb, {
                          entry: Mb,
                          method: Vb,
                          status: null == Ob ? void 0 : Ob.status,
                          networkRequest: lb,
                          start: Lb,
                          end: Ib,
                          url: gb.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                Ob.addEventListener("readystatechange", Fb), Ob.addEventListener("error", Eb), Ob.addEventListener("abort", Eb), Ob.addEventListener("timeout", Eb)
              } catch (bb) {
                Lp.error("Failed to instrument XHR for network capture", bb)
              }
              pb.call(Ob, Vb, gb.toString(), lb, Lb, Ib)
            }));
          return () => {
            pb()
          }
        }(lb, wb, Hb), Ub = !0 === Hb.captureFetchSynchronously ? function(bb, wb, Mb) {
          if (!Mb.initiatorTypes.includes("fetch")) return () => {};
          const eb = Ep("request", Mb.recordHeaders),
            Hb = Ep("response", Mb.recordHeaders),
            Vb = QH(wb, "fetch", (Vb => function(gb, lb) {
              let Lb;
              try {
                Lb = new Request(gb, lb)
              } catch (bb) {
                Lp.error("Failed to instrument fetch for network capture", bb);
                try {
                  return Promise.resolve(Vb(gb, lb))
                } catch (bb) {
                  return new Promise(((Mb, eb) => eb(bb)))
                }
              }
              const Ib = {};
              let Ob, Ub;
              const tb = pb((function*() {
                  try {
                    const bb = {};
                    Lb.headers.forEach(((wb, Mb) => {
                      bb[Mb] = wb
                    })), eb && (Ib.requestHeaders = bb), !jp(null == lb ? void 0 : lb.body) && sp({
                      type: "request",
                      headers: bb,
                      url: gb,
                      recordBody: Mb.recordBody
                    }) && (Ib.requestBody = yield Yp({
                      r: Lb,
                      options: Mb,
                      url: gb
                    }))
                  } catch (bb) {
                    Lp.error("Failed to record fetch request for network capture", bb)
                  }
                }))(),
                Cb = (Eb = pb((function*(bb) {
                  try {
                    const wb = {};
                    bb.headers.forEach(((bb, Mb) => {
                      wb[Mb] = bb
                    })), Hb && (Ib.responseHeaders = wb), sp({
                      type: "response",
                      headers: wb,
                      url: gb,
                      recordBody: Mb.recordBody
                    }) && (Ib.responseBody = yield fp({
                      r: bb,
                      options: Mb,
                      url: gb
                    }))
                  } catch (bb) {
                    Lp.error("Failed to record fetch response for network capture", bb)
                  }
                })), function(bb) {
                  return Eb.apply(this, arguments)
                });
              var Eb;
              try {
                Ob = wb.performance.now()
              } catch (bb) {}
              let Fb;
              try {
                Fb = Fp(gb) ? Vb(Lb) : Vb(gb, lb)
              } catch (bb) {
                Fb = new Promise(((Mb, eb) => eb(bb)))
              }
              const Bb = Promise.resolve(Fb).then((bb => {
                try {
                  Ub = wb.performance.now()
                } catch (bb) {}
                return {
                  status: "fulfilled",
                  response: bb
                }
              }), (bb => ({
                status: "rejected",
                error: bb
              })));
              return pb((function*() {
                let Mb;
                try {
                  yield tb;
                  const bb = yield Bb;
                  if ("rejected" === bb.status) throw bb.error;
                  return Mb = bb.response, yield Cb(Mb), Mb
                } finally {
                  (eb = Mb, mp(wb, "fetch", Lb.url, Ob, Ub).then((Mb => {
                    bb({
                      requests: Xp(wb, {
                        entry: Mb,
                        method: Lb.method,
                        status: null == eb ? void 0 : eb.status,
                        networkRequest: Ib,
                        start: Ob,
                        end: Ub,
                        url: Lb.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var eb
              }))()
            }));
          return () => {
            Vb()
          }
        }(lb, wb, Hb) : function(bb, wb, Mb) {
          if (!Mb.initiatorTypes.includes("fetch")) return () => {};
          const eb = Ep("request", Mb.recordHeaders),
            Hb = Ep("response", Mb.recordHeaders),
            Vb = QH(wb, "fetch", (Vb => function() {
              var gb = pb((function*(pb, gb) {
                let lb, Lb;
                try {
                  lb = new Request(pb, gb)
                } catch (bb) {
                  return Lp.error("Failed to instrument fetch for network capture", bb), Vb(pb, gb)
                }
                const Ib = {};
                let Ob, Ub;
                try {
                  try {
                    const bb = {};
                    lb.headers.forEach(((wb, Mb) => {
                      bb[Mb] = wb
                    })), eb && (Ib.requestHeaders = bb), !jp(null == gb ? void 0 : gb.body) && sp({
                      type: "request",
                      headers: bb,
                      url: pb,
                      recordBody: Mb.recordBody
                    }) && (Ib.requestBody = yield Yp({
                      r: lb,
                      options: Mb,
                      url: pb
                    }))
                  } catch (bb) {
                    Lp.error("Failed to record fetch request for network capture", bb)
                  }
                  Ob = wb.performance.now(), Lb = Fp(pb) ? yield Vb(lb): yield Vb(pb, gb), Ub = wb.performance.now();
                  try {
                    const bb = {};
                    Lb.headers.forEach(((wb, Mb) => {
                      bb[Mb] = wb
                    })), Hb && (Ib.responseHeaders = bb), sp({
                      type: "response",
                      headers: bb,
                      url: pb,
                      recordBody: Mb.recordBody
                    }) && (Ib.responseBody = yield fp({
                      r: Lb,
                      options: Mb,
                      url: pb
                    }))
                  } catch (bb) {
                    Lp.error("Failed to record fetch response for network capture", bb)
                  }
                  return Lb
                } finally {
                  mp(wb, "fetch", lb.url, Ob, Ub).then((Mb => {
                    bb({
                      requests: Xp(wb, {
                        entry: Mb,
                        method: lb.method,
                        status: null == Lb ? void 0 : Lb.status,
                        networkRequest: Ib,
                        start: Ob,
                        end: Ub,
                        url: lb.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(bb, wb) {
                return gb.apply(this, arguments)
              }
            }()));
          return () => {
            Vb()
          }
        }(lb, wb, Hb)), Wp = () => {
          Vb = !1, null == Lb || Lb(), Ob(), Ub(), Wp = null
        }, Wp
      }
      const Sp = "$replay_override_sampling",
        Np = "$replay_override_linked_flag",
        vp = "$replay_override_url_trigger",
        Qp = "$replay_override_event_trigger",
        Gp = "$session_is_sampled",
        qp = "$session_recording_url_trigger_activated_session",
        ap = "$session_recording_event_trigger_activated_session",
        ip = "$posthog_sr_group_event_trigger_",
        dp = "$posthog_sr_group_url_trigger_",
        Pp = "$sess_rec_flush_size",
        np = "$sdk_debug_replay_event_trigger_status",
        yp = "$sdk_debug_replay_linked_flag_trigger_status",
        op = "$sdk_debug_replay_matched_recording_trigger_groups",
        Tp = "$sdk_debug_replay_pending_trigger_conditions",
        kp = "$sdk_debug_replay_remote_trigger_matching_config",
        bV = "$sdk_debug_replay_trigger_groups_count",
        wV = "$sdk_debug_replay_url_trigger_status",
        MV = "$sdk_debug_rrweb_attached",
        eV = "$sdk_debug_rrweb_start_attempted",
        HV = "$session_recording_start_reason",
        pV = "disabled",
        VV = "sampled",
        gV = "active",
        lV = "buffering",
        LV = "paused",
        IV = "rrweb_error",
        OV = "trigger_activated",
        UV = "trigger_pending",
        tV = "trigger_disabled";

      function CV(bb, wb, Mb, eb, Hb, pb) {
        return 0 === wb ? tV : (null == bb ? void 0 : bb.get_property(Mb ? eb + Mb : Hb)) === pb ? OV : UV
      }

      function EV(bb, wb, Mb) {
        return wb.some((wb => {
          var eb;
          return "regex" === wb.matching && (null !== (eb = null == Mb ? void 0 : Mb.get(wb.url)) && void 0 !== eb ? eb : new RegExp(wb.url)).test(bb)
        }))
      }

      function FV(bb) {
        return bb.includes("trigger_activated") ? OV : bb.includes("trigger_pending") ? UV : tV
      }

      function BV(bb) {
        const wb = new Set(bb);
        switch (wb.delete(tV), wb.size) {
          case 0:
            return tV;
          case 1:
            return Array.from(wb)[0];
          default:
            return UV
        }
      }
      var sV = class {
          constructor(bb) {
            this.q = bb
          }
          triggerStatus(bb) {
            return FV(this.q.map((wb => wb.triggerStatus(bb))))
          }
          triggerStatusNoSideEffects(bb) {
            return FV(this.q.map((wb => wb.triggerStatusNoSideEffects(bb))))
          }
          stop() {
            this.q.forEach((bb => bb.stop()))
          }
        },
        mV = class {
          constructor(bb) {
            this.q = bb
          }
          triggerStatus(bb) {
            return BV(this.q.map((wb => wb.triggerStatus(bb))))
          }
          triggerStatusNoSideEffects(bb) {
            return BV(this.q.map((wb => wb.triggerStatusNoSideEffects(bb))))
          }
          stop() {
            this.q.forEach((bb => bb.stop()))
          }
        },
        hV = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return OV
          }
          stop() {}
        };
      const zV = bb => "sessionRecording" in bb;
      var XV = class {
          constructor(bb, wb) {
            this._instance = bb, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = wb
          }
          onConfig(bb) {
            var wb, Mb;
            this.j = (zV(bb) ? OH(bb.sessionRecording) ? null === (wb = bb.sessionRecording) || void 0 === wb ? void 0 : wb.urlTriggers : [] : null == bb ? void 0 : bb.urlTriggers) || [], this.B = (zV(bb) ? OH(bb.sessionRecording) ? null === (Mb = bb.sessionRecording) || void 0 === Mb ? void 0 : Mb.urlBlocklist : [] : null == bb ? void 0 : bb.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const bb of this.j)
              if ("regex" === bb.matching && !this.H.has(bb.url)) try {
                this.H.set(bb.url, new RegExp(bb.url))
              } catch (wb) {
                ZH.error("Invalid URL trigger regex pattern:", bb.url, wb)
              }
            for (const bb of this.B)
              if ("regex" === bb.matching && !this.U.has(bb.url)) try {
                this.U.set(bb.url, new RegExp(bb.url))
              } catch (wb) {
                ZH.error("Invalid URL blocklist regex pattern:", bb.url, wb)
              }
          }
          onRemoteConfig(bb) {
            this.onConfig(bb)
          }
          Z(bb) {
            return CV(this._instance, this.j.length, this.V, dp, qp, bb)
          }
          triggerStatus(bb) {
            const wb = this.triggerStatusNoSideEffects(bb);
            return this._instance.register_for_session({
              [wV]: wb
            }), wb
          }
          triggerStatusNoSideEffects(bb) {
            return this.Z(bb)
          }
          isCurrentUrlBlocked() {
            const bb = qH(this._instance);
            if (!bb) return !1;
            try {
              return EV(bb, this.B, this.U)
            } catch (bb) {
              return !0
            }
          }
          checkUrlBlocklist(bb, wb) {
            const Mb = qH(this._instance);
            if (!Mb) return;
            if (Mb === this.W) return;
            this.W = Mb;
            const eb = this.urlBlocked,
              Hb = EV(Mb, this.B, this.U);
            eb && Hb || (Hb && !eb ? bb() : !Hb && eb && wb())
          }
          checkUrlTriggerConditions(bb, wb, Mb, eb) {
            const Hb = qH(this._instance);
            if (!Hb) return;
            if (Hb === this.W) return;
            this.W = Hb;
            const pb = this.urlBlocked,
              Vb = EV(Hb, this.B, this.U);
            Vb && !pb ? bb() : !Vb && pb && wb();
            const gb = this.Z(eb) === OV,
              lb = EV(Hb, this.j, this.H);
            !gb && lb && Mb("url", Hb)
          }
          stop() {
            this.W = ""
          }
        },
        xV = class {
          constructor(bb) {
            this._instance = bb, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const bb = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [yp]: bb
            }), bb
          }
          triggerStatusNoSideEffects() {
            let bb = UV;
            return EH(this.linkedFlag) && (bb = tV), this.linkedFlagSeen && (bb = OV), bb
          }
          onConfig(bb, wb) {
            var Mb;
            if (this.linkedFlag = (zV(bb) ? OH(bb.sessionRecording) ? null === (Mb = bb.sessionRecording) || void 0 === Mb ? void 0 : Mb.linkedFlag : null : null == bb ? void 0 : bb.linkedFlag) || null, !EH(this.linkedFlag) && !this.linkedFlagSeen) {
              const bb = tH(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                Mb = tH(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((eb, Hb) => {
                let pb = !1;
                if (OH(Hb) && bb in Hb) {
                  const wb = Hb[bb];
                  pb = BH(wb) ? !0 === wb : Mb ? wb === Mb : !!wb
                }
                const Vb = pb && !this.linkedFlagSeen;
                this.linkedFlagSeen = pb, Vb && wb(bb, Mb)
              }))
            }
          }
          onRemoteConfig(bb, wb) {
            this.onConfig(bb, wb)
          }
          stop() {
            this.J()
          }
        },
        jV = class {
          constructor(bb, wb) {
            this._instance = bb, this.K = [], this.V = wb
          }
          onConfig(bb) {
            var wb;
            this.K = (zV(bb) ? OH(bb.sessionRecording) ? null === (wb = bb.sessionRecording) || void 0 === wb ? void 0 : wb.eventTriggers : [] : null == bb ? void 0 : bb.eventTriggers) || []
          }
          onRemoteConfig(bb) {
            this.onConfig(bb)
          }
          X(bb) {
            return CV(this._instance, this.K.length, this.V, ip, ap, bb)
          }
          triggerStatus(bb) {
            const wb = this.triggerStatusNoSideEffects(bb);
            return this._instance.register_for_session({
              [np]: wb
            }), wb
          }
          triggerStatusNoSideEffects(bb) {
            return this.X(bb)
          }
          checkEventTriggerConditions(bb, wb, Mb) {
            if (0 === this.K.length) return;
            const eb = this.X(Mb) === OV,
              Hb = this.K.includes(bb);
            !eb && Hb && wb("event", bb)
          }
          stop() {}
        },
        KV = class {
          constructor(bb, wb, Mb) {
            if (this._instance = bb, this.group = wb, this.Y = new XV(bb, wb.id), this.tt = new jV(bb, wb.id), this.et = new xV(bb), wb.conditions.events && wb.conditions.events.length > 0 || wb.conditions.urls && wb.conditions.urls.length > 0 || wb.conditions.flag) {
              const bb = (wb.conditions.events || []).map((bb => bb.name)),
                eb = {
                  urlTriggers: wb.conditions.urls || [],
                  eventTriggers: bb,
                  linkedFlag: wb.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(eb), this.tt.onConfig(eb), this.et.onConfig(eb, Mb);
              const Hb = [this.tt, this.Y, this.et];
              this.nt = "any" === wb.conditions.matchType ? new sV(Hb) : new mV(Hb)
            } else this.nt = new hV
          }
          triggerStatus(bb) {
            return this.nt.triggerStatus(bb)
          }
          triggerStatusNoSideEffects(bb) {
            return this.nt.triggerStatusNoSideEffects(bb)
          }
          getPendingTriggerConditions(bb) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(bb) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(bb)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(bb)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((bb => {
              let {
                status: wb
              } = bb;
              return wb === UV
            })).map((bb => {
              let {
                label: wb
              } = bb;
              return wb
            }))
          }
          checkEventTriggerConditions(bb, wb, Mb) {
            this.tt.checkEventTriggerConditions(bb, wb, Mb)
          }
          checkUrlTriggerConditions(bb, wb, Mb, eb) {
            this.Y.checkUrlTriggerConditions(bb, wb, Mb, eb)
          }
          activateTrigger(bb, wb) {
            var Mb;
            const eb = "url" === bb ? dp + this.group.id : ip + this.group.id;
            null === (Mb = this._instance.persistence) || void 0 === Mb || Mb.register({
              [eb]: wb
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function rV(bb) {
        if (bb.rrwebError) return IV;
        if (!bb.receivedFlags) return lV;
        if (!bb.isRecordingEnabled) return pV;
        if (bb.urlTriggerMatching.urlBlocked) return LV;
        const wb = !0 === bb.isSampled,
          Mb = new sV([bb.eventTriggerMatching, bb.urlTriggerMatching, bb.linkedFlagMatching]).triggerStatus(bb.sessionId);
        return wb ? VV : "trigger_activated" === Mb ? gV : "trigger_pending" === Mb ? lV : !1 === bb.isSampled ? pV : gV
      }

      function RV(bb) {
        if (bb.rrwebError) return IV;
        if (!bb.receivedFlags) return lV;
        if (!bb.isRecordingEnabled) return pV;
        if (bb.urlTriggerMatching.urlBlocked) return LV;
        const wb = new mV([bb.eventTriggerMatching, bb.urlTriggerMatching, bb.linkedFlagMatching]).triggerStatus(bb.sessionId),
          Mb = wb !== tV,
          eb = BH(bb.isSampled);
        return Mb && "trigger_pending" === wb ? lV : Mb && "trigger_disabled" === wb || eb && !bb.isSampled ? pV : !0 === bb.isSampled ? VV : gV
      }

      function DV() {
        const bb = [];
        return function(wb, Mb) {
          if (OH(Mb) || LH(Mb)) {
            for (; bb.length > 0 && bb[bb.length - 1] !== this;) bb.pop();
            return bb.includes(Mb) ? "[Circular]" : (bb.push(Mb), Mb)
          }
          return Mb
        }
      }

      function cV(bb) {
        try {
          const wb = JSON.stringify(bb, DV());
          return wb ? new Blob([wb]).size : 0
        } catch (bb) {
          return -1
        }
      }

      function YV(bb) {
        if (CH(bb)) return 4;
        if (UH(bb)) return 0;
        switch (typeof bb) {
          case "string":
            return bb.length + 2;
          case "number":
            return String(bb).length;
          case "boolean":
            return bb ? 4 : 5;
          case "object": {
            if (LH(bb)) {
              let wb = 2;
              for (let Mb = 0; bb.length > Mb; Mb++) {
                Mb > 0 && (wb += 1);
                const eb = bb[Mb];
                wb += UH(eb) || CH(eb) ? 4 : YV(eb)
              }
              return wb
            }
            const wb = bb;
            let Mb = 2,
              eb = !0;
            for (const bb in wb) {
              if (!{}.hasOwnProperty.call(wb, bb)) continue;
              const Hb = wb[bb];
              UH(Hb) || (eb || (Mb += 1), eb = !1, Mb += bb.length + 3 + YV(Hb))
            }
            return Mb
          }
          default:
            return 0
        }
      }

      function ZV(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (bb.size >= wb && bb.data.length > 1) {
          const wb = Math.floor(bb.data.length / 2),
            Mb = bb.sizes.slice(0, wb),
            eb = bb.sizes.slice(wb);
          return [ZV({
            size: Mb.reduce(((bb, wb) => bb + wb), 0),
            data: bb.data.slice(0, wb),
            sizes: Mb,
            sessionId: bb.sessionId,
            windowId: bb.windowId
          }), ZV({
            size: eb.reduce(((bb, wb) => bb + wb), 0),
            data: bb.data.slice(wb),
            sizes: eb,
            sessionId: bb.sessionId,
            windowId: bb.windowId
          })].flatMap((bb => bb))
        }
        return [bb]
      }
      var fV = Uint8Array,
        AV = Uint16Array,
        WV = Uint32Array,
        JV = new fV([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        SV = new fV([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        NV = new fV([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        vV = function(bb, wb) {
          for (var Mb = new AV(31), eb = 0; 31 > eb; ++eb) Mb[eb] = wb += 1 << bb[eb - 1];
          var Hb = new WV(Mb[30]);
          for (eb = 1; 30 > eb; ++eb)
            for (var pb = Mb[eb]; Mb[eb + 1] > pb; ++pb) Hb[pb] = pb - Mb[eb] << 5 | eb;
          return [Mb, Hb]
        },
        QV = vV(JV, 2),
        GV = QV[1];
      QV[0][28] = 258, GV[258] = 28;
      for (var qV = vV(SV, 0)[1], aV = new AV(32768), iV = 0; 32768 > iV; ++iV) {
        var uV = (43690 & iV) >>> 1 | (21845 & iV) << 1;
        aV[iV] = ((65280 & (uV = (61680 & (uV = (52428 & uV) >>> 2 | (13107 & uV) << 2)) >>> 4 | (3855 & uV) << 4)) >>> 8 | (255 & uV) << 8) >>> 1
      }
      var dV = function(bb, wb, Mb) {
          for (var eb = bb.length, Hb = 0, pb = new AV(wb); eb > Hb; ++Hb) ++pb[bb[Hb] - 1];
          var Vb, gb = new AV(wb);
          for (Hb = 0; wb > Hb; ++Hb) gb[Hb] = gb[Hb - 1] + pb[Hb - 1] << 1;
          if (Mb) {
            Vb = new AV(1 << wb);
            var lb = 15 - wb;
            for (Hb = 0; eb > Hb; ++Hb)
              if (bb[Hb])
                for (var Lb = Hb << 4 | bb[Hb], Ib = wb - bb[Hb], Ob = gb[bb[Hb] - 1]++ << Ib, Ub = Ob | (1 << Ib) - 1; Ub >= Ob; ++Ob) Vb[aV[Ob] >>> lb] = Lb
          } else
            for (Vb = new AV(eb), Hb = 0; eb > Hb; ++Hb) Vb[Hb] = aV[gb[bb[Hb] - 1]++] >>> 15 - bb[Hb];
          return Vb
        },
        PV = new fV(288);
      for (iV = 0; 144 > iV; ++iV) PV[iV] = 8;
      for (iV = 144; 256 > iV; ++iV) PV[iV] = 9;
      for (iV = 256; 280 > iV; ++iV) PV[iV] = 7;
      for (iV = 280; 288 > iV; ++iV) PV[iV] = 8;
      var nV = new fV(32);
      for (iV = 0; 32 > iV; ++iV) nV[iV] = 5;
      var yV = dV(PV, 9, 0),
        oV = dV(nV, 5, 0),
        TV = function(bb) {
          return (bb / 8 | 0) + (7 & bb && 1)
        },
        kV = function(bb, wb, Mb) {
          (null == wb || 0 > wb) && (wb = 0), (null == Mb || Mb > bb.length) && (Mb = bb.length);
          var eb = new(bb instanceof AV ? AV : bb instanceof WV ? WV : fV)(Mb - wb);
          return eb.set(bb.subarray(wb, Mb)), eb
        },
        bg = function(bb, wb, Mb) {
          var eb = wb / 8 | 0;
          bb[eb] |= Mb <<= 7 & wb, bb[eb + 1] |= Mb >>> 8
        },
        wg = function(bb, wb, Mb) {
          var eb = wb / 8 | 0;
          bb[eb] |= Mb <<= 7 & wb, bb[eb + 1] |= Mb >>> 8, bb[eb + 2] |= Mb >>> 16
        },
        Mg = function(bb, wb) {
          for (var Mb = [], eb = 0; bb.length > eb; ++eb) bb[eb] && Mb.push({
            s: eb,
            f: bb[eb]
          });
          var Hb = Mb.length,
            pb = Mb.slice();
          if (!Hb) return [new fV(0), 0];
          if (1 == Hb) {
            var Vb = new fV(Mb[0].s + 1);
            return Vb[Mb[0].s] = 1, [Vb, 1]
          }
          Mb.sort((function(bb, wb) {
            return bb.f - wb.f
          })), Mb.push({
            s: -1,
            f: 25001
          });
          var gb = Mb[0],
            lb = Mb[1],
            Lb = 0,
            Ib = 1,
            Ob = 2;
          for (Mb[0] = {
              s: -1,
              f: gb.f + lb.f,
              l: gb,
              r: lb
            }; Ib != Hb - 1;) gb = Mb[Mb[Ob].f > Mb[Lb].f ? Lb++ : Ob++], lb = Mb[Lb != Ib && Mb[Ob].f > Mb[Lb].f ? Lb++ : Ob++], Mb[Ib++] = {
            s: -1,
            f: gb.f + lb.f,
            l: gb,
            r: lb
          };
          var Ub = pb[0].s;
          for (eb = 1; Hb > eb; ++eb) pb[eb].s > Ub && (Ub = pb[eb].s);
          var tb = new AV(Ub + 1),
            Cb = eg(Mb[Ib - 1], tb, 0);
          if (Cb > wb) {
            eb = 0;
            var Eb = 0,
              Fb = Cb - wb,
              Bb = 1 << Fb;
            for (pb.sort((function(bb, wb) {
                return tb[wb.s] - tb[bb.s] || bb.f - wb.f
              })); Hb > eb; ++eb) {
              var sb = pb[eb].s;
              if (wb >= tb[sb]) break;
              Eb += Bb - (1 << Cb - tb[sb]), tb[sb] = wb
            }
            for (Eb >>>= Fb; Eb > 0;) {
              var mb = pb[eb].s;
              wb > tb[mb] ? Eb -= 1 << wb - tb[mb]++ - 1 : ++eb
            }
            for (; eb >= 0 && Eb; --eb) {
              var hb = pb[eb].s;
              tb[hb] == wb && (--tb[hb], ++Eb)
            }
            Cb = wb
          }
          return [new fV(tb), Cb]
        },
        eg = function(bb, wb, Mb) {
          return -1 == bb.s ? Math.max(eg(bb.l, wb, Mb + 1), eg(bb.r, wb, Mb + 1)) : wb[bb.s] = Mb
        },
        Hg = function(bb) {
          for (var wb = bb.length; wb && !bb[--wb];);
          for (var Mb = new AV(++wb), eb = 0, Hb = bb[0], pb = 1, Vb = function(bb) {
              Mb[eb++] = bb
            }, gb = 1; wb >= gb; ++gb)
            if (bb[gb] == Hb && gb != wb) ++pb;
            else {
              if (!Hb && pb > 2) {
                for (; pb > 138; pb -= 138) Vb(32754);
                pb > 2 && (Vb(pb > 10 ? pb - 11 << 5 | 28690 : pb - 3 << 5 | 12305), pb = 0)
              } else if (pb > 3) {
                for (Vb(Hb), --pb; pb > 6; pb -= 6) Vb(8304);
                pb > 2 && (Vb(pb - 3 << 5 | 8208), pb = 0)
              }
              for (; pb--;) Vb(Hb);
              pb = 1, Hb = bb[gb]
            } return [Mb.subarray(0, eb), wb]
        },
        pg = function(bb, wb) {
          for (var Mb = 0, eb = 0; wb.length > eb; ++eb) Mb += bb[eb] * wb[eb];
          return Mb
        },
        Vg = function(bb, wb, Mb) {
          var eb = Mb.length,
            Hb = TV(wb + 2);
          bb[Hb] = 255 & eb, bb[Hb + 1] = eb >>> 8, bb[Hb + 2] = 255 ^ bb[Hb], bb[Hb + 3] = 255 ^ bb[Hb + 1];
          for (var pb = 0; eb > pb; ++pb) bb[Hb + pb + 4] = Mb[pb];
          return 8 * (Hb + 4 + eb)
        },
        gg = function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
          bg(wb, Ib++, Mb), ++Hb[256];
          for (var Ob = Mg(Hb, 15), Ub = Ob[0], tb = Ob[1], Cb = Mg(pb, 15), Eb = Cb[0], Fb = Cb[1], Bb = Hg(Ub), sb = Bb[0], mb = Bb[1], hb = Hg(Eb), zb = hb[0], Xb = hb[1], xb = new AV(19), jb = 0; sb.length > jb; ++jb) xb[31 & sb[jb]]++;
          for (jb = 0; zb.length > jb; ++jb) xb[31 & zb[jb]]++;
          for (var Kb = Mg(xb, 7), rb = Kb[0], Rb = Kb[1], Db = 19; Db > 4 && !rb[NV[Db - 1]]; --Db);
          var cb, Yb, Zb, fb, Ab = Lb + 5 << 3,
            Wb = pg(Hb, PV) + pg(pb, nV) + Vb,
            Jb = pg(Hb, Ub) + pg(pb, Eb) + Vb + 14 + 3 * Db + pg(xb, rb) + (2 * xb[16] + 3 * xb[17] + 7 * xb[18]);
          if (Wb >= Ab && Jb >= Ab) return Vg(wb, Ib, bb.subarray(lb, lb + Lb));
          if (bg(wb, Ib, 1 + (Wb > Jb)), Ib += 2, Wb > Jb) {
            cb = dV(Ub, tb, 0), Yb = Ub, Zb = dV(Eb, Fb, 0), fb = Eb;
            var Sb = dV(rb, Rb, 0);
            for (bg(wb, Ib, mb - 257), bg(wb, Ib + 5, Xb - 1), bg(wb, Ib + 10, Db - 4), Ib += 14, jb = 0; Db > jb; ++jb) bg(wb, Ib + 3 * jb, rb[NV[jb]]);
            Ib += 3 * Db;
            for (var Nb = [sb, zb], vb = 0; 2 > vb; ++vb) {
              var Qb = Nb[vb];
              for (jb = 0; Qb.length > jb; ++jb) bg(wb, Ib, Sb[Gb = 31 & Qb[jb]]), Ib += rb[Gb], Gb > 15 && (bg(wb, Ib, Qb[jb] >>> 5 & 127), Ib += Qb[jb] >>> 12)
            }
          } else cb = yV, Yb = PV, Zb = oV, fb = nV;
          for (jb = 0; gb > jb; ++jb)
            if (eb[jb] > 255) {
              var Gb;
              wg(wb, Ib, cb[257 + (Gb = eb[jb] >>> 18 & 31)]), Ib += Yb[Gb + 257], Gb > 7 && (bg(wb, Ib, eb[jb] >>> 23 & 31), Ib += JV[Gb]);
              var qb = 31 & eb[jb];
              wg(wb, Ib, Zb[qb]), Ib += fb[qb], qb > 3 && (wg(wb, Ib, eb[jb] >>> 5 & 8191), Ib += SV[qb])
            } else wg(wb, Ib, cb[eb[jb]]), Ib += Yb[eb[jb]];
          return wg(wb, Ib, cb[256]), Ib + Yb[256]
        },
        lg = new WV([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        Lg = (new fV(0), function() {
          for (var bb = new WV(256), wb = 0; 256 > wb; ++wb) {
            for (var Mb = wb, eb = 9; --eb;) Mb = (1 & Mb && 3988292384) ^ Mb >>> 1;
            bb[wb] = Mb
          }
          return bb
        }()),
        Ig = function(bb, wb, Mb) {
          for (; Mb; ++wb) bb[wb] = Mb, Mb >>>= 8
        };

      function Og(bb, wb) {
        var Mb = "";
        if (!wb && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(bb);
        for (var eb = 0; bb.length > eb;) {
          var Hb = bb[eb++];
          128 > Hb || wb ? Mb += String.fromCharCode(Hb) : 224 > Hb ? Mb += String.fromCharCode((31 & Hb) << 6 | 63 & bb[eb++]) : 240 > Hb ? Mb += String.fromCharCode((15 & Hb) << 12 | (63 & bb[eb++]) << 6 | 63 & bb[eb++]) : (Hb = ((15 & Hb) << 18 | (63 & bb[eb++]) << 12 | (63 & bb[eb++]) << 6 | 63 & bb[eb++]) - 65536, Mb += String.fromCharCode(55296 | Hb >> 10, 56320 | 1023 & Hb))
        }
        return Mb
      }
      var Ug = class {
        constructor(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var Mb, eb, Hb, pb;
          this._rrweb = bb, this.it = wb, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const bb = Date.now(),
              wb = bb - this.ot;
            wb > 0 ? (this.ct = Math.min(this.dt, this.ct + wb / 1e3 * this.ht), this.ot = bb) : this.ot = bb
          }, this.ft = bb => {
            if (!this.rt[bb]) {
              var wb, Mb;
              this.rt[bb] = !0;
              const eb = this.vt(bb);
              null === (wb = (Mb = this.it).onBlockedNode) || void 0 === wb || wb.call(Mb, bb, eb)
            }
          }, this.yt = bb => {
            const wb = this.vt(bb);
            if ("svg" !== (null == wb ? void 0 : wb.nodeName) && wb instanceof Element) {
              const bb = wb.closest("svg");
              if (bb) return [this._rrweb.mirror.getId(bb), bb]
            }
            return [bb, wb]
          }, this.vt = bb => this._rrweb.mirror.OHb(bb), this.bt = bb => {
            var wb, Mb, eb, Hb, pb, Vb, gb, lb;
            return (null !== (wb = null === (Mb = bb.removes) || void 0 === Mb ? void 0 : Mb.length) && void 0 !== wb ? wb : 0) + (null !== (eb = null === (Hb = bb.attributes) || void 0 === Hb ? void 0 : Hb.length) && void 0 !== eb ? eb : 0) + (null !== (pb = null === (Vb = bb.texts) || void 0 === Vb ? void 0 : Vb.length) && void 0 !== pb ? pb : 0) + (null !== (gb = null === (lb = bb.adds) || void 0 === lb ? void 0 : lb.length) && void 0 !== gb ? gb : 0)
          }, this.throttleMutations = bb => {
            if (3 !== bb.type || 0 !== bb.data.source) return bb;
            const wb = bb.data,
              Mb = this.bt(wb);
            if (wb.attributes) {
              const bb = wb.attributes.length;
              wb.attributes = wb.attributes.filter((bb => {
                const [wb] = this.yt(bb.id);
                return !this.wt.consumeRateLimit(wb) && bb
              }));
              const Mb = bb - wb.attributes.length;
              var eb, Hb;
              Mb > 0 && (null === (eb = (Hb = this.it).onDroppedAttributeMutations) || void 0 === eb || eb.call(Hb, Mb))
            }
            const pb = this.bt(wb);
            if (0 === pb && Mb !== pb) return;
            if (this.kt) return bb;
            this.ut();
            const Vb = YV(bb);
            var gb, lb;
            return Vb > this.ct ? (null === (gb = (lb = this.it).onDroppedOversizedMutation) || void 0 === gb || gb.call(lb, Vb), void this._t()) : (this.ct -= Vb, bb)
          }, this._t = () => {
            if (this.St) return;
            const bb = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var bb, wb;
              this.St = void 0, this.st = Date.now(), null === (bb = (wb = this.it).requestFullSnapshot) || void 0 === bb || bb.call(wb)
            }), bb)
          }, this.wt = new hH({
            bucketSize: null !== (Mb = this.it.bucketSize) && void 0 !== Mb ? Mb : 100,
            refillRate: null !== (eb = this.it.refillRate) && void 0 !== eb ? eb : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: ZH
          }), this.dt = null !== (Hb = this.it.bytesBucketSize) && void 0 !== Hb ? Hb : 0, this.ht = null !== (pb = this.it.bytesRefillRate) && void 0 !== pb ? pb : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const Vb = this.it.resyncIntervalMs;
          this.xt = FH(Vb) && Number.isFinite(Vb) && Vb > 0 ? Vb : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(bb) {
        return 0 > bb ? Math.ceil(bb) : Math.floor(bb)
      }), Number.isInteger || (Number.isInteger = function(bb) {
        return FH(bb) && isFinite(bb) && Math.floor(bb) === bb
      }), bH && !UH(bH.crypto) && crypto;
      let tg = null;
      const Cg = {
        At() {
          if (!CH(tg)) return tg;
          if (tg = !0, UH(bH)) tg = !1;
          else try {
            const bb = "__support__";
            Cg.$t(bb, "xyz"), '"xyz"' !== Cg.Ot(bb) && (tg = !1), Cg.Pt(bb)
          } catch (bb) {
            tg = !1
          }
          return tg
        },
        Lt(bb) {
          ZH.error("sessionStorage error: ", bb)
        },
        Ot(bb) {
          try {
            return null == bH ? void 0 : bH.sessionStorage.getItem(bb)
          } catch (bb) {
            Cg.Lt(bb)
          }
          return null
        },
        Dt(bb) {
          try {
            return JSON.parse(Cg.Ot(bb)) || null
          } catch (bb) {}
          return null
        },
        $t(bb, wb) {
          try {
            return null == bH || bH.sessionStorage.setItem(bb, JSON.stringify(wb)), !0
          } catch (bb) {
            Cg.Lt(bb)
          }
          return !1
        },
        Pt(bb) {
          try {
            null == bH || bH.sessionStorage.removeItem(bb)
          } catch (bb) {
            Cg.Lt(bb)
          }
        }
      };
      cH.DEBUG = !1, cH.LIB_VERSION = "1.438.7", cH.LIB_NAME = "web";
      var Eg = cH,
        Fg = class {
          constructor(bb) {
            if (!bb.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = bb.get_property.bind(bb), this.Nt = bb.persistence.set_property.bind(bb.persistence)
          }
          trackSize(bb, wb) {
            this.Nt(Pp, {
              sessionId: bb,
              size: this.currentTrackedSize(bb) + wb
            })
          }
          currentTrackedSize(bb) {
            const wb = this.Ft(Pp);
            return OH(Mb = wb) && tH(Mb.sessionId) && FH(Mb.size) && wb.sessionId === bb ? wb.size : 0;
            var Mb
          }
        };

      function Bg(bb, wb) {
        return function(bb) {
          let wb = 0;
          for (let Mb = 0; bb.length > Mb; Mb++) wb = (wb << 5) - wb + bb.charCodeAt(Mb), wb |= 0;
          return Math.abs(wb)
        }(bb) % 100 < mH(100 * wb, 0, 100, ZH)
      }
      const sg = (bb, wb) => {
          if (!(bb => {
              try {
                new RegExp(bb)
              } catch (bb) {
                return !1
              }
              return !0
            })(wb)) return !1;
          try {
            return new RegExp(wb).test(bb)
          } catch (bb) {
            return !1
          }
        },
        mg = bb => bb.toLowerCase(),
        hg = {
          exact: (bb, wb) => wb.some((wb => bb.some((bb => wb === bb)))),
          is_not: (bb, wb) => wb.every((wb => bb.every((bb => wb !== bb)))),
          regex: (bb, wb) => wb.some((wb => bb.some((bb => sg(wb, bb))))),
          not_regex: (bb, wb) => wb.every((wb => bb.every((bb => !sg(wb, bb))))),
          icontains: (bb, wb) => wb.map(mg).some((wb => bb.map(mg).some((bb => wb.includes(bb))))),
          not_icontains: (bb, wb) => wb.map(mg).every((wb => bb.map(mg).every((bb => !wb.includes(bb))))),
          gt: (bb, wb) => wb.some((wb => {
            const Mb = parseFloat(wb);
            return !isNaN(Mb) && bb.some((bb => Mb > parseFloat(bb)))
          })),
          lt: (bb, wb) => wb.some((wb => {
            const Mb = parseFloat(wb);
            return !isNaN(Mb) && bb.some((bb => Mb < parseFloat(bb)))
          }))
        },
        zg = new Set(["is_not", "not_icontains", "not_regex"]);

      function Xg(bb, wb, Mb) {
        return !bb || 0 === bb.length || bb.every((bb => {
          const eb = "person" === bb.type ? Mb : wb,
            Hb = null == eb ? void 0 : eb[bb.key],
            pb = bb.operator || "exact";
          if (UH(Hb) || CH(Hb)) return zg.has(pb);
          const Vb = hg[pb];
          return !!Vb && !UH(bb.value) && !CH(bb.value) && Vb(LH(bb.value) ? bb.value.map(String) : [String(bb.value)], LH(Hb) ? Hb.map(String) : [String(Hb)])
        }))
      }
      const xg = fH("[SessionRecording]");

      function jg(bb, wb) {
        return wb ? bb : "!" + bb
      }

      function Kg(bb, wb) {
        return bb === wb || bb !== "!" + wb && null
      }
      var rg = class {
          constructor(bb, wb, Mb, eb, Hb, pb, Vb) {
            this._instance = bb, this.Y = wb, this.tt = Mb, this.et = eb, this.qt = Hb, this.jt = pb, this.Bt = Vb, this.zt = null, this.Ht = RV
          }
          onRemoteConfig(bb) {
            this.zt = FH(bb.sampleRate) ? bb.sampleRate : null, "any" === bb.triggerMatchType ? (this.Ut = new sV([this.tt, this.Y]), this.Ht = rV) : (this.Ut = new mV([this.tt, this.Y]), this.Ht = RV), this._instance.register_for_session({
              [kp]: bb.triggerMatchType
            }), this.Y.onConfig(bb), this.tt.onConfig(bb), this.et.onConfig(bb, ((bb, wb) => {
              this.qt("linked_flag_matched", {
                flag: bb,
                variant: wb
              }), this.Bt()
            }))
          }
          getStatus(bb) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: bb.isSampled,
              rrwebError: bb.rrwebError,
              urlTriggerMatching: bb.urlTriggerMatching,
              eventTriggerMatching: bb.eventTriggerMatching,
              linkedFlagMatching: bb.linkedFlagMatching,
              sessionId: bb.sessionId
            })
          }
          getMinimumDuration(bb) {
            const wb = this._instance.get_property("$session_recording_remote_config"),
              Mb = null == wb ? void 0 : wb.minimumDurationMilliseconds;
            return FH(Mb) ? Mb : null
          }
          checkUrlTriggers(bb, wb, Mb, eb) {
            this.Y.checkUrlTriggerConditions(wb, Mb, eb, bb)
          }
          setupEventTriggerListeners(bb, wb, Mb) {
            if (0 !== this.tt.K.length && EH(this.Wt)) return this.Wt = bb((bb => {
              try {
                this.tt.checkEventTriggerConditions(bb.event, Mb, wb)
              } catch (bb) {
                xg.error("Could not activate event trigger", bb)
              }
            })), this.Wt
          }
          makeSamplingDecisions(bb) {
            var wb;
            const Mb = this.zt;
            var eb, Hb;
            if (!FH(Mb)) return null === (eb = this._instance.persistence) || void 0 === eb || eb.unregister("$session_is_sampled"), void(null === (Hb = this._instance.persistence) || void 0 === Hb || Hb.unregister("$replay_sample_rate"));
            const pb = this._instance.get_property(Gp),
              Vb = this._instance.get_property("$replay_sample_rate"),
              gb = Kg(pb, bb),
              lb = FH(Vb) && Vb !== Mb,
              Lb = UH(Vb) && pb === bb,
              Ib = lb || Lb || !BH(gb),
              Ob = Ib ? Bg(bb, Mb) : gb;
            Ib && (Ob ? this.qt("sampled") : xg.warn(`Sample rate (${Mb}) has determined that this sessionId (${bb}) will not be sent to the server.`)), null === (wb = this._instance.persistence) || void 0 === wb || wb.register({
              $session_is_sampled: jg(bb, Ob),
              $replay_sample_rate: CH(Vb) && pb === bb ? null : Mb
            })
          }
          ensureSamplingDecision(bb) {
            if (!FH(this.zt)) return;
            const wb = this._instance.get_property(Gp);
            BH(Kg(wb, bb)) || this.makeSamplingDecisions(bb)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var bb, wb, Mb, eb, Hb;
            null === (bb = this._instance.persistence) || void 0 === bb || bb.unregister("$session_recording_event_trigger_activated_session"), null === (wb = this._instance.persistence) || void 0 === wb || wb.unregister("$session_recording_url_trigger_activated_session"), null === (Mb = this._instance.persistence) || void 0 === Mb || Mb.unregister("$session_is_sampled"), null === (eb = this._instance.persistence) || void 0 === eb || eb.unregister("$replay_sample_rate"), null === (Hb = this._instance.persistence) || void 0 === Hb || Hb.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(bb) {}
          hasPendingTriggers(bb) {
            var wb;
            return (null === (wb = this.Ut) || void 0 === wb ? void 0 : wb.triggerStatus(bb)) === UV
          }
          getPendingTriggerConditions(bb) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(bb)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(bb)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((bb => {
              let {
                status: wb
              } = bb;
              return wb === UV
            })).map((bb => {
              let {
                label: wb
              } = bb;
              return wb
            }))
          }
          stop() {
            var bb;
            null === (bb = this.Wt) || void 0 === bb || bb.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        Rg = class {
          constructor(bb, wb, Mb, eb, Hb) {
            this._instance = bb, this.Y = wb, this.qt = Mb, this.Vt = eb, this.Bt = Hb, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(bb) {
            bb.triggerGroups && 0 !== bb.triggerGroups.length ? (this.Jt(bb.triggerGroups), this._instance.register_for_session({
              [kp]: "v2_trigger_groups",
              [bV]: bb.triggerGroups.length
            }), this.Y.onConfig(bb)) : xg.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(bb) {
            return function(bb) {
              if (bb.rrwebError) return IV;
              if (!bb.receivedFlags) return lV;
              if (!bb.isRecordingEnabled) return pV;
              if (bb.urlTriggerMatching.urlBlocked) return LV;
              const wb = bb.triggerGroupMatchers,
                Mb = bb.triggerGroupSamplingResults;
              if (0 === wb.length) return pV;
              let eb = !1,
                Hb = !1;
              for (const pb of wb) {
                const wb = pb.triggerStatus(bb.sessionId);
                if ("trigger_activated" === wb) {
                  const bb = pb.group.id,
                    wb = Mb.get(bb);
                  UH(wb) ? ZH.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: bb
                  }) : !0 === wb && (Hb = !0)
                } else "trigger_pending" === wb && (eb = !0)
              }
              return Hb ? VV : eb ? lV : pV
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: bb.isSampled,
              rrwebError: bb.rrwebError,
              urlTriggerMatching: bb.urlTriggerMatching,
              eventTriggerMatching: bb.eventTriggerMatching,
              linkedFlagMatching: bb.linkedFlagMatching,
              sessionId: bb.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(bb.sessionId)
            })
          }
          getMinimumDuration(bb) {
            let wb = null;
            for (const Mb of this.Gt)
              if ("trigger_activated" === Mb.triggerStatus(bb)) {
                const bb = Mb.group.minDurationMs;
                FH(bb) && (CH(wb) || wb > bb) && (wb = bb)
              } return wb
          }
          checkUrlTriggers(bb, wb, Mb, eb) {
            this.Y.checkUrlBlocklist(wb, Mb);
            for (const Hb of this.Gt) Hb.checkUrlTriggerConditions(wb, Mb, (wb => {
              this.Kt(Hb, void 0) && (Hb.activateTrigger(wb, bb), this.updateActiveTriggers(bb), this.Bt(wb))
            }), bb)
          }
          setupEventTriggerListeners(bb, wb, Mb) {
            return this.Wt = bb((bb => {
              var Mb;
              if (this.Zt) return xg.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (Mb = this.Wt) || void 0 === Mb || Mb.call(this), void(this.Wt = void 0);
              try {
                for (const Mb of this.Gt) Mb.checkEventTriggerConditions(bb.event, (eb => {
                  if (!this.Kt(Mb, bb.properties)) return;
                  const Hb = (Mb.group.conditions.events || []).filter((wb => wb.name === bb.event)),
                    pb = this._instance.get_property(aH);
                  Hb.some((wb => !wb.properties || 0 === wb.properties.length || Xg(wb.properties, bb.properties, pb))) && (Mb.activateTrigger(eb, wb), this.updateActiveTriggers(wb), this.Bt(eb))
                }), wb)
              } catch (bb) {
                xg.error("Could not activate event trigger for trigger groups", bb)
              }
            })), this.Wt
          }
          makeSamplingDecisions(bb) {
            for (const Mb of this.Gt) {
              var wb;
              const eb = Mb.group,
                Hb = eb.id,
                pb = eb.sampleRate,
                Vb = "$posthog_sr_group_sampling_" + Hb,
                gb = this._instance.get_property(Vb);
              let lb = null,
                Lb = !1,
                Ib = !1,
                Ob = !1;
              if (OH(gb)) {
                const wb = gb.sessionId,
                  Mb = gb.sampleRate,
                  eb = gb.sampled;
                Lb = "string" == typeof wb && wb !== bb, Ib = FH(Mb) && Mb !== pb, lb = wb === bb && FH(Mb) && Mb === pb && BH(eb) ? eb : null
              } else lb = gb === bb || null, Lb = "string" == typeof gb && gb !== bb, Ob = gb === bb;
              const Ub = Lb || Ib || Ob || !BH(lb),
                tb = Ub ? Bg(bb + Hb, pb) : lb;
              Ub && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: Hb,
                group_name: eb.name,
                sampleRate: pb,
                isSampled: tb
              }), this.Qt.set(Hb, tb), null === (wb = this._instance.persistence) || void 0 === wb || wb.register({
                [Vb]: {
                  sessionId: bb,
                  sampleRate: pb,
                  sampled: tb
                }
              })
            }
            this.updateActiveTriggers(bb)
          }
          ensureSamplingDecision(bb) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var bb, wb, Mb;
            null === (bb = this._instance.persistence) || void 0 === bb || bb.unregister("$session_is_sampled"), null === (wb = this._instance.persistence) || void 0 === wb || wb.unregister("$replay_sample_rate"), null === (Mb = this._instance.persistence) || void 0 === Mb || Mb.unregister("$session_past_minimum_duration");
            for (const Vb of this.Gt) {
              var eb, Hb, pb;
              const bb = Vb.group.id;
              null === (eb = this._instance.persistence) || void 0 === eb || eb.unregister("$posthog_sr_group_event_trigger_" + bb), null === (Hb = this._instance.persistence) || void 0 === Hb || Hb.unregister("$posthog_sr_group_url_trigger_" + bb), null === (pb = this._instance.persistence) || void 0 === pb || pb.unregister("$posthog_sr_group_sampling_" + bb)
            }
          }
          updateActiveTriggers(bb) {
            const wb = [];
            for (const Mb of this.Gt) {
              const eb = Mb.group,
                Hb = eb.id,
                pb = "trigger_activated" === Mb.triggerStatus(bb),
                Vb = !0 === this.Qt.get(Hb);
              pb && wb.push({
                id: Hb,
                name: eb.name,
                matched: !0,
                sampled: Vb
              })
            }
            this._instance.register_for_session({
              [op]: wb
            })
          }
          hasPendingTriggers(bb) {
            for (const wb of this.Gt)
              if ("trigger_pending" === wb.triggerStatus(bb)) return !0;
            return !1
          }
          getPendingTriggerConditions(bb) {
            return this.Gt.flatMap((wb => "trigger_pending" !== wb.triggerStatusNoSideEffects(bb) ? [] : wb.getPendingTriggerConditions(bb).map((bb => `trigger group "${wb.group.name}": ${bb}`))))
          }
          stop() {
            var bb;
            null === (bb = this.Wt) || void 0 === bb || bb.call(this), this.Wt = void 0, this.Gt.forEach((bb => bb.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(bb, wb) {
            const Mb = bb.group.conditions.properties;
            return !Mb || 0 === Mb.length || Xg(Mb, wb, this._instance.get_property(aH))
          }
          Jt(bb) {
            this.Gt.forEach((bb => bb.stop())), this.Gt = [], this.Qt.clear();
            for (const wb of bb) {
              const bb = new KV(this._instance, wb, ((bb, Mb) => {
                this.qt("linked_flag_matched", {
                  flag: bb,
                  variant: Mb,
                  group_id: wb.id,
                  group_name: wb.name
                }), this.Bt()
              }));
              this.Gt.push(bb)
            }
          }
        };
      const Dg = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        cg = 1e5,
        Yg = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        Zg = [],
        fg = () => !1,
        Ag = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        Wg = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        Jg = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        Sg = "Accommodation AdministrativeArea Country Place State".split(" "),
        Ng = {
          AggregateOffer: {
            offers: ["Offer"]
          },
          Brand: {
            name: !0
          },
          BreadcrumbList: {
            itemListElement: ["ListItem"]
          },
          CreativeWork: {
            genre: !0,
            dateCreated: !0,
            dateModified: !0,
            datePublished: !0,
            expires: !0,
            learningResourceType: !0,
            educationalLevel: !0,
            educationalUse: !0,
            interactivityType: !0,
            aggregateRating: ["AggregateRating"],
            potentialAction: Wg,
            publisher: Jg
          },
          Event: {
            startDate: !0,
            endDate: !0,
            previousStartDate: !0,
            aggregateRating: ["AggregateRating"],
            offers: ["AggregateOffer", "Offer"]
          },
          ItemList: {
            itemListElement: ["ListItem"]
          },
          ListItem: {
            item: Zg
          },
          Offer: {
            seller: Jg
          },
          Organization: {
            name: !0,
            legalName: !0,
            foundingDate: !0,
            dissolutionDate: !0,
            aggregateRating: ["AggregateRating"],
            brand: ["Brand"]
          },
          Place: {
            aggregateRating: ["AggregateRating"]
          },
          Product: {
            name: !0,
            sku: !0,
            mpn: !0,
            gtin: !0,
            gtin8: !0,
            gtin12: !0,
            gtin13: !0,
            gtin14: !0,
            productID: !0,
            productGroupID: !0,
            asin: !0,
            model: !0,
            category: !0,
            color: !0,
            material: !0,
            pattern: !0,
            size: !0,
            productionDate: !0,
            releaseDate: !0,
            brand: ["Brand", "Organization"],
            manufacturer: Jg,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: Jg,
            areaServed: Sg,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: Zg
          }
        },
        vg = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), Ng.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), Ng.Event],
          [Jg, Ng.Organization],
          [Sg, Ng.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), Ng.Product]
        ];

      function Qg(bb, wb) {
        return gH.call(bb, wb) ? bb[wb] : void 0
      }

      function Gg(bb) {
        const wb = typeof bb;
        return CH(bb) || "string" === wb || "number" === wb || "boolean" === wb
      }

      function qg(bb, wb) {
        return wb && function(bb) {
          return tH(bb) && /^(https?:\/\/|\/|\.\.?\/)/i.test(bb.trim())
        }(bb) ? wb(bb.trim()) || void 0 : bb
      }

      function ag(bb, wb) {
        return LH(bb) && bb.every(Gg) ? bb.map((bb => qg(bb, wb))).filter((bb => !UH(bb))) : Gg(bb) ? qg(bb, wb) : void 0
      }

      function ig(bb, wb) {
        if ("string" != typeof bb) return;
        const Mb = bb.trim(),
          eb = Mb.indexOf("#"),
          Hb = 0 > eb ? Mb : Mb.slice(eb + 1);
        if (Hb && !(0 > eb && (/^[a-z][a-z\d+.-]*:/i.test(Mb) || Mb.includes("/") || Mb.includes("?")))) try {
          return wb(Hb) ? Hb : void 0
        } catch (bb) {
          return
        }
      }

      function ug(bb) {
        if (gH.call(Ng, bb)) return Ng[bb];
        for (const [wb, Mb] of vg)
          if (wb.includes(bb)) return Mb
      }

      function dg(bb, wb, Mb) {
        Object.defineProperty(bb, wb, {
          configurable: !0,
          enumerable: !0,
          value: Mb,
          writable: !0
        })
      }

      function Pg(bb, wb, Mb, eb) {
        if (LH(bb)) {
          const Hb = bb.map((bb => Pg(bb, wb, Mb, eb))).filter((bb => !UH(bb)));
          return Hb.length ? Hb : void 0
        }
        return ng(bb, wb, Mb, eb) || void 0
      }

      function ng(bb, wb, Mb, eb) {
        if (!OH(bb) || ! function(bb) {
            return bb.remainingNodes ? (bb.remainingNodes--, !0) : (bb.exceeded = !0, !1)
          }(Mb)) return null;
        const Hb = Qg(bb, "@type"),
          pb = function(bb) {
            const wb = new Set,
              Mb = "string" == typeof bb ? [bb] : LH(bb) ? bb : [],
              eb = [];
            for (const Hb of Mb) {
              if ("string" != typeof Hb) continue;
              const bb = Hb.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= bb.length && Yg.test(bb) && !wb.has(bb) && (wb.add(bb), eb.push(bb), 20 === eb.length)) break
            }
            return eb
          }(Hb),
          Vb = pb.filter((bb => !!ug(bb) && (!eb || !eb.length || eb.includes(bb)))),
          gb = {};
        for (const Lb of Ag) {
          const eb = "@type" === Lb ? pb.length ? "string" == typeof Hb ? pb[0] : pb : void 0 : "@id" === Lb ? ig(Qg(bb, Lb), wb) : ag(Qg(bb, Lb), Mb.maskUrl);
          UH(eb) || dg(gb, Lb, eb)
        }
        for (const Lb of Vb) {
          const eb = ug(Lb);
          for (const Hb of Object.keys(eb)) {
            const pb = Qg(bb, Hb),
              Vb = eb[Hb];
            if (!0 === Vb) {
              const bb = ag(pb, Mb.maskUrl);
              UH(bb) || dg(gb, Hb, bb)
            } else {
              const bb = Pg(pb, wb, Mb, Vb);
              UH(bb) || dg(gb, Hb, bb)
            }
          }
        }
        const lb = Pg(Qg(bb, "@graph"), wb, Mb);
        return UH(lb) || dg(gb, "@graph", lb), Object.keys(gb).length ? gb : null
      }

      function yg(bb, wb, Mb) {
        if (!OH(bb)) return null;
        const Hb = Qg(bb, "@context");
        if ("string" != typeof Hb || !/^https?:\/\/schema\.org\/?$/.test(Hb)) return null;
        const pb = ng(bb, wb, Mb);
        return pb ? eb({
          "@context": "https://schema.org"
        }, pb) : null
      }

      function og(bb) {
        var wb;
        return "SCRIPT" === bb.nodeName && "application/ld+json" === (null === (wb = bb.getAttribute("type")) || void 0 === wb ? void 0 : wb.trim().toLowerCase())
      }

      function Tg(bb, wb, Mb) {
        if ("string" == typeof wb ? bb.classList.contains(wb) : wb && Array.from(bb.classList).some((bb => (wb.lastIndex = 0, wb.test(bb))))) return !0;
        try {
          return !!Mb && bb.matches(Mb)
        } catch (bb) {
          return !1
        }
      }

      function kg(bb, wb, Mb) {
        for (let eb = bb; eb;) {
          if (Tg(eb, wb, Mb)) return !0;
          const bb = eb.parentNode;
          eb = eb.parentElement || (bb && bb.nodeType === bb.DOCUMENT_FRAGMENT_NODE ? bb.host : null)
        }
        return !1
      }

      function bl(bb) {
        return og(bb) ? [bb] : bb.nodeType !== bb.ELEMENT_NODE ? [] : Array.from(bb.querySelectorAll("script")).filter(og)
      }

      function wl(bb) {
        return OH(bb) ? bb.network_timing : bb
      }
      const Ml = fH("[SessionRecording]"),
        el = [1, 2, 3, 4, 5, 6, 7, 12],
        Hl = bb => ({
          rrwebMethod: bb,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function pl() {
        var bb;
        return null == pH || null === (bb = pH.__PosthogExtensions__) || void 0 === bb ? void 0 : bb.rrweb
      }

      function Vl() {
        var bb;
        return null === (bb = pl()) || void 0 === bb ? void 0 : bb.record
      }

      function gl(bb) {
        try {
          return JSON.stringify(bb)
        } catch (wb) {
          if (wb instanceof RangeError) throw wb;
          return JSON.stringify(bb, DV())
        }
      }

      function ll(bb) {
        return Og(function(bb, wb) {
          void 0 === wb && (wb = {});
          var Mb = function() {
              var bb = 4294967295;
              return {
                p(wb) {
                  for (var Mb = bb, eb = 0; wb.length > eb; ++eb) Mb = Lg[255 & Mb ^ wb[eb]] ^ Mb >>> 8;
                  bb = Mb
                },
                d: () => 4294967295 ^ bb
              }
            }(),
            eb = bb.length;
          Mb.p(bb);
          var Hb, pb, Vb, gb, lb = (gb = 10 + ((Hb = wb).filename && Hb.filename.length + 1 || 0), function(bb, wb, Mb, eb, Hb, pb) {
              var Vb = bb.length,
                gb = new fV(eb + Vb + 5 * (1 + Math.floor(Vb / 7e3)) + 8),
                lb = gb.subarray(eb, gb.length - 8),
                Lb = 0;
              if (!wb || 8 > Vb)
                for (var Ib = 0; Vb >= Ib; Ib += 65535) {
                  var Ob = Ib + 65535;
                  Vb > Ob ? Lb = Vg(lb, Lb, bb.subarray(Ib, Ob)) : (lb[Ib] = pb, Lb = Vg(lb, Lb, bb.subarray(Ib, Vb)))
                } else {
                  for (var Ub = lg[wb - 1], tb = Ub >>> 13, Cb = 8191 & Ub, Eb = (1 << Mb) - 1, Fb = new AV(32768), Bb = new AV(Eb + 1), sb = Math.ceil(Mb / 3), mb = 2 * sb, hb = function(wb) {
                      return (bb[wb] ^ bb[wb + 1] << sb ^ bb[wb + 2] << mb) & Eb
                    }, zb = new WV(25e3), Xb = new AV(288), xb = new AV(32), jb = 0, Kb = 0, rb = (Ib = 0, 0), Rb = 0, Db = 0; Vb > Ib; ++Ib) {
                    var cb = hb(Ib),
                      Yb = 32767 & Ib,
                      Zb = Bb[cb];
                    if (Fb[Yb] = Zb, Bb[cb] = Yb, Ib >= Rb) {
                      var fb = Vb - Ib;
                      if ((jb > 7e3 || rb > 24576) && fb > 423) {
                        Lb = gg(bb, lb, 0, zb, Xb, xb, Kb, rb, Db, Ib - Db, Lb), rb = jb = Kb = 0, Db = Ib;
                        for (var Ab = 0; 286 > Ab; ++Ab) Xb[Ab] = 0;
                        for (Ab = 0; 30 > Ab; ++Ab) xb[Ab] = 0
                      }
                      var Wb = 2,
                        Jb = 0,
                        Sb = Cb,
                        Nb = Yb - Zb & 32767;
                      if (fb > 2 && cb == hb(Ib - Nb))
                        for (var vb = Math.min(tb, fb) - 1, Qb = Math.min(32767, Ib), Gb = Math.min(258, fb); Qb >= Nb && --Sb && Yb != Zb;) {
                          if (bb[Ib + Wb] == bb[Ib + Wb - Nb]) {
                            for (var qb = 0; Gb > qb && bb[Ib + qb] == bb[Ib + qb - Nb]; ++qb);
                            if (qb > Wb) {
                              if (Wb = qb, Jb = Nb, qb > vb) break;
                              var ab = Math.min(Nb, qb - 2),
                                ib = 0;
                              for (Ab = 0; ab > Ab; ++Ab) {
                                var ub = Ib - Nb + Ab + 32768 & 32767,
                                  db = ub - Fb[ub] + 32768 & 32767;
                                db > ib && (ib = db, Zb = ub)
                              }
                            }
                          }
                          Nb += (Yb = Zb) - (Zb = Fb[Yb]) + 32768 & 32767
                        }
                      if (Jb) {
                        zb[rb++] = 268435456 | GV[Wb] << 18 | qV[Jb];
                        var Pb = 31 & GV[Wb],
                          nb = 31 & qV[Jb];
                        Kb += JV[Pb] + SV[nb], ++Xb[257 + Pb], ++xb[nb], Rb = Ib + Wb, ++jb
                      } else zb[rb++] = bb[Ib], ++Xb[bb[Ib]]
                    }
                  }
                  Lb = gg(bb, lb, pb, zb, Xb, xb, Kb, rb, Db, Ib - Db, Lb)
                }
              return kV(gb, 0, eb + TV(Lb) + 8)
            }(pb = bb, null == (Vb = wb).level ? 6 : Vb.level, null == Vb.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(pb.length)))) : 12 + Vb.mem, gb, 0, !0)),
            Lb = lb.length;
          return function(bb, wb) {
            var Mb = wb.filename;
            if (bb[0] = 31, bb[1] = 139, bb[2] = 8, bb[8] = 2 > wb.level ? 4 : 9 == wb.level ? 2 : 0, bb[9] = 3, 0 != wb.mtime && Ig(bb, 4, Math.floor(new Date(wb.mtime || Date.now()) / 1e3)), Mb) {
              bb[3] = 8;
              for (var eb = 0; Mb.length >= eb; ++eb) bb[eb + 10] = Mb.charCodeAt(eb)
            }
          }(lb, wb), Ig(lb, Lb - 8, Mb.d()), Ig(lb, Lb - 4, eb), lb
        }(function(bb) {
          var wb = bb.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(bb);
          for (var Mb = new fV(bb.length + (bb.length >>> 1)), eb = 0, Hb = function(bb) {
              Mb[eb++] = bb
            }, pb = 0; wb > pb; ++pb) {
            if (eb + 5 > Mb.length) {
              var Vb = new fV(eb + 8 + (wb - pb << 1));
              Vb.set(Mb), Mb = Vb
            }
            var gb = bb.charCodeAt(pb);
            128 > gb ? Hb(gb) : 2048 > gb ? (Hb(192 | gb >>> 6), Hb(128 | 63 & gb)) : gb > 55295 && 57344 > gb ? (Hb(240 | (gb = 65536 + (1047552 & gb) | 1023 & bb.charCodeAt(++pb)) >>> 18), Hb(128 | gb >>> 12 & 63), Hb(128 | gb >>> 6 & 63), Hb(128 | 63 & gb)) : (Hb(224 | gb >>> 12), Hb(128 | gb >>> 6 & 63), Hb(128 | 63 & gb))
          }
          return kV(Mb, 0, eb)
        }(gl(bb))), !0)
      }

      function Ll(bb) {
        return Il.apply(this, arguments)
      }

      function Il() {
        return Il = pb((function*(bb) {
          const wb = yield function(bb) {
            return RH.apply(this, arguments)
          }(gl(bb), Eg.DEBUG, {
            rethrow: !0
          });
          return Og(new Uint8Array(yield wb.arrayBuffer()), !0)
        })), Il.apply(this, arguments)
      }
      let Ol, Ul;
      const tl = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let Cl = !1;

      function El(bb) {
        var wb;
        return LH(bb) && 0 === bb.length ? (Ol = null !== (wb = Ol) && void 0 !== wb ? wb : ll([]), Ol) : ll(bb)
      }

      function Fl(bb) {
        return Bl.apply(this, arguments)
      }

      function Bl() {
        return (Bl = pb((function*(bb) {
          var wb;
          return LH(bb) && 0 === bb.length ? Ol || (Ul = null !== (wb = Ul) && void 0 !== wb ? wb : Ll([]).then((bb => (Ol = bb, bb))).catch((bb => {
            throw Ol = void 0, Ul = void 0, bb
          })), Ul) : Ll(bb)
        }))).apply(this, arguments)
      }

      function sl(bb) {
        return tl && !Cl && function(bb) {
          return 2 === bb.type || 3 === bb.type && (0 === bb.data.source || 8 === bb.data.source)
        }(bb)
      }

      function ml(bb) {
        return {
          event: bb,
          size: YV(bb)
        }
      }

      function hl(bb, wb) {
        return eb(eb({}, bb), {}, {
          data: wb,
          cv: "2024-10"
        })
      }

      function zl(bb, wb) {
        return eb(eb({}, bb), {}, {
          cv: "2024-10",
          data: eb(eb({}, bb.data), wb)
        })
      }

      function Xl(bb) {
        try {
          if (2 === bb.type) return ml(hl(bb, ll(bb.data)));
          if (3 === bb.type && 0 === bb.data.source) return ml(zl(bb, {
            texts: El(bb.data.texts),
            attributes: El(bb.data.attributes),
            removes: El(bb.data.removes),
            adds: El(bb.data.adds)
          }));
          if (3 === bb.type && 8 === bb.data.source) return ml(zl(bb, {
            adds: bb.data.adds ? ll(bb.data.adds) : void 0,
            removes: bb.data.removes ? ll(bb.data.removes) : void 0
          }))
        } catch (bb) {
          Ml.warn("could not compress event - will use uncompressed event", bb)
        }
        return {
          event: bb,
          size: cV(bb)
        }
      }

      function xl() {
        return (xl = pb((function*(bb) {
          try {
            if (2 === bb.type) return ml(hl(bb, yield Ll(bb.data)));
            if (3 === bb.type && 0 === bb.data.source) {
              const [wb, Mb, eb, Hb] = yield Promise.all([Fl(bb.data.texts), Fl(bb.data.attributes), Fl(bb.data.removes), Fl(bb.data.adds)]);
              return ml(zl(bb, {
                texts: wb,
                attributes: Mb,
                removes: eb,
                adds: Hb
              }))
            }
            if (3 === bb.type && 8 === bb.data.source) {
              const [wb, Mb] = yield Promise.all([bb.data.adds ? Ll(bb.data.adds) : void 0, bb.data.removes ? Ll(bb.data.removes) : void 0]);
              return ml(zl(bb, {
                adds: wb,
                removes: Mb
              }))
            }
          } catch (wb) {
            return (bb => {
              if (!bb || "object" != typeof bb) return !1;
              const wb = "name" in bb ? String(bb.name) : "";
              return (bb => !(!bb || "object" != typeof bb) && "NotReadableError" === ("name" in bb ? String(bb.name) : ""))(bb) || wb === XH
            })(wb) && (Cl = !0), Ml.warn("could not compress event asynchronously - trying synchronous compression", wb), Xl(bb)
          }
          return {
            event: bb,
            size: cV(bb)
          }
        }))).apply(this, arguments)
      }

      function jl(bb, wb) {
        return 5 === bb.type && bb.data.tag === wb
      }

      function Kl(bb) {
        return jl(bb, "sessionIdle")
      }

      function rl(bb) {
        return jl(bb, "$session_ending")
      }

      function Rl(bb) {
        return jl(bb, "$session_starting")
      }
      var Dl = class {
        get sessionId() {
          return this.Xt
        }
        get Yt() {
          if (!this._instance.sessionManager) throw new Error("[SessionRecording] must be started with a valid sessionManager.");
          return this._instance.sessionManager
        }
        get te() {
          return this._instance.config.session_recording.session_idle_threshold_ms || 3e5
        }
        get ee() {
          return Kg(this._instance.get_property(Gp), this.sessionId)
        }
        get zt() {
          var bb;
          const wb = null === (bb = this.ne) || void 0 === bb ? void 0 : bb.sampleRate;
          return FH(wb) ? wb : null
        }
        get ie() {
          var bb, wb;
          return null !== (bb = null === (wb = this.re) || void 0 === wb ? void 0 : wb.getMinimumDuration(this.sessionId)) && void 0 !== bb ? bb : null
        }
        constructor(bb, wb) {
          this._instance = bb, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (bb, wb, Mb) => {
            var eb, Hb, pb, Vb;
            if (!Mb) return;
            if (bb === this.Xt && wb === this.je) return;
            const gb = !Mb.noSessionId && (Mb.activityTimeout || Mb.sessionPastMaximumLength),
              lb = this.Xt,
              Lb = this.je;
            var Ib;
            if (gb && this.Vt("$session_ending", {
                currentSessionId: lb,
                currentWindowId: Lb,
                nextSessionId: bb,
                nextWindowId: wb,
                changeReason: Mb,
                lastActivityTimestamp: this.le,
                flushed_size: null === (Ib = this.Be) || void 0 === Ib ? void 0 : Ib.currentTrackedSize(lb)
              }), null === (eb = this._instance.persistence) || void 0 === eb || eb.unregister("$debug_first_full_snapshot_timestamp"), null === (Hb = pl()) || void 0 === Hb || null === (pb = Hb.resetMaxDepthState) || void 0 === pb || pb.call(Hb), this.Vt("$session_id_change", {
                sessionId: bb,
                windowId: wb,
                changeReason: Mb
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === bb && this.je === wb)) {
              const wb = this.Xt !== bb && !1 !== this.de;
              this.de = "unknown", this.He(wb)
            }
            gb && this.Vt("$session_starting", {
              previousSessionId: lb,
              previousWindowId: Lb,
              nextSessionId: bb,
              nextWindowId: wb,
              changeReason: Mb,
              lastActivityTimestamp: this.le
            }), null === (Vb = this.re) || void 0 === Vb || Vb.makeSamplingDecisions(bb)
          }, this.Ue = !1, this.We = () => {
            var bb;
            return (null === (bb = this._instance.persistence) || void 0 === bb ? void 0 : bb.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var bb, wb;
            if (0 === this.Rt.data.length) return null;
            const Mb = null === (bb = this.Rt.data[0]) || void 0 === bb ? void 0 : bb.timestamp,
              eb = null === (wb = this.Rt.data[this.Rt.data.length - 1]) || void 0 === wb ? void 0 : wb.timestamp;
            return FH(Mb) && FH(eb) ? eb - Mb : null
          }, this.Ge = () => {
            var bb, wb;
            const Mb = this.ie;
            if (!FH(Mb)) return !1;
            if (null === (bb = null === (wb = this._instance.config.session_recording) || void 0 === wb ? void 0 : wb.strictMinimumDuration) || void 0 === bb || !bb) {
              const bb = this.Qe;
              return FH(bb) && bb >= 0 && Mb > bb
            }
            if (this.We()) return !1;
            const eb = this.Ve();
            return !!CH(eb) || Mb > eb || (null === (Hb = this._instance.persistence) || void 0 === Hb || Hb.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var Hb
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == MH ? void 0 : MH.visibilityState) && ("visible" === MH.visibilityState && (this.Je = !0), this.Vt("window " + MH.visibilityState, {}))
          }, this.Je = null == wb || wb;
          const {
            sessionId: Mb,
            windowId: eb,
            sessionStartTimestamp: Hb
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = Mb, this.je = eb, this._sessionStartTimestamp = Hb, this.et = new xV(this._instance), this.Y = new XV(this._instance), this.tt = new jV(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || Ml.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new Fg(this._instance)
        }
        setDocumentWasEverVisible(bb) {
          bb && (this.Je = !0)
        }
        get ln() {
          var bb, wb, Mb, eb, Hb, pb, Vb, gb, lb;
          const Lb = null === (bb = this.ne) || void 0 === bb ? void 0 : bb.masking,
            Ib = {
              maskAllInputs: null === (wb = this._instance.config.session_recording) || void 0 === wb ? void 0 : wb.maskAllInputs,
              maskTextSelector: null === (Mb = this._instance.config.session_recording) || void 0 === Mb ? void 0 : Mb.maskTextSelector,
              blockSelector: null === (eb = this._instance.config.session_recording) || void 0 === eb ? void 0 : eb.blockSelector,
              maskAllElementAttributes: null === (Hb = this._instance.config.session_recording) || void 0 === Hb ? void 0 : Hb.maskAllElementAttributes
            },
            Ob = null !== (pb = null == Ib ? void 0 : Ib.maskAllInputs) && void 0 !== pb ? pb : null == Lb ? void 0 : Lb.maskAllInputs,
            Ub = null !== (Vb = null == Ib ? void 0 : Ib.maskTextSelector) && void 0 !== Vb ? Vb : null == Lb ? void 0 : Lb.maskTextSelector,
            tb = null !== (gb = null == Ib ? void 0 : Ib.blockSelector) && void 0 !== gb ? gb : null == Lb ? void 0 : Lb.blockSelector,
            Cb = null !== (lb = null == Ib ? void 0 : Ib.maskAllElementAttributes) && void 0 !== lb ? lb : null == Lb ? void 0 : Lb.maskAllElementAttributes;
          return UH(Ob) && UH(Ub) && UH(tb) && UH(Cb) ? void 0 : {
            maskAllInputs: null == Ob || Ob,
            maskTextSelector: Ub,
            blockSelector: tb,
            maskAllElementAttributes: Cb
          }
        }
        un() {
          var bb;
          if (this.xe) return;
          const wb = null === (bb = this.ne) || void 0 === bb ? void 0 : bb.masking;
          if (EH(wb)) return;
          const Mb = this._instance.config.session_recording,
            eb = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((bb => {
              const eb = null == Mb ? void 0 : Mb[bb],
                Hb = wb[bb];
              return !UH(eb) && eb !== Hb
            }));
          0 !== eb.length && (this.xe = !0, Ml.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + eb.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == Mb ? void 0 : Mb.maskAllInputs,
              maskTextSelector: null == Mb ? void 0 : Mb.maskTextSelector,
              blockSelector: null == Mb ? void 0 : Mb.blockSelector,
              maskAllElementAttributes: null == Mb ? void 0 : Mb.maskAllElementAttributes
            },
            project: wb
          }))
        }
        get cn() {
          var bb;
          return mH(null === (bb = this._instance.config.session_recording.canvasCapture) || void 0 === bb ? void 0 : bb.resolutionScale, .1, 1, fH("canvas recording resolution scale"), 1)
        }
        get dn() {
          var bb, wb, Mb, eb, Hb, pb, Vb;
          const gb = this._instance.config.session_recording.captureCanvas,
            lb = null === (bb = this.ne) || void 0 === bb ? void 0 : bb.canvasRecording,
            Lb = null !== (wb = null !== (Mb = null == gb ? void 0 : gb.recordCanvas) && void 0 !== Mb ? Mb : null == lb ? void 0 : lb.enabled) && void 0 !== wb && wb,
            Ib = null !== (eb = null !== (Hb = null == gb ? void 0 : gb.canvasFps) && void 0 !== Hb ? Hb : null == lb ? void 0 : lb.fps) && void 0 !== eb ? eb : 4;
          let Ob = null !== (pb = null !== (Vb = null == gb ? void 0 : gb.canvasQuality) && void 0 !== Vb ? Vb : null == lb ? void 0 : lb.quality) && void 0 !== pb ? pb : .4;
          if ("string" == typeof Ob) {
            const bb = parseFloat(Ob);
            Ob = isNaN(bb) ? .4 : bb
          }
          return {
            enabled: Lb,
            fps: mH(Ib, 0, 12, fH("canvas recording fps"), 4),
            quality: mH(Ob, 0, 1, fH("canvas recording quality"), .4)
          }
        }
        get hn() {
          var bb;
          const wb = !!(null === (bb = this.ne) || void 0 === bb ? void 0 : bb.consoleLogRecordingEnabled),
            Mb = this._instance.config.enable_recording_console_log;
          return null != Mb ? Mb : wb
        }
        get kI() {
          var bb, wb, Mb;
          const eb = null === (bb = this.ne) || void 0 === bb ? void 0 : bb.networkPayloadCapture,
            Hb = {
              recordHeaders: null === (wb = this._instance.config.session_recording) || void 0 === wb ? void 0 : wb.recordHeaders,
              recordBody: null === (Mb = this._instance.config.session_recording) || void 0 === Mb ? void 0 : Mb.recordBody
            },
            pb = (null == Hb ? void 0 : Hb.recordHeaders) || (null == eb ? void 0 : eb.recordHeaders),
            Vb = (null == Hb ? void 0 : Hb.recordBody) || (null == eb ? void 0 : eb.recordBody),
            gb = wl(this._instance.config.capture_performance),
            lb = wl(null == eb ? void 0 : eb.capturePerformance),
            Lb = !!(BH(gb) ? gb : lb);
          return pb || Vb || Lb ? {
            recordHeaders: pb,
            recordBody: Vb,
            recordPerformance: Lb
          } : void 0
        }
        vn() {
          var bb, wb;
          const Mb = [],
            Hb = null === (bb = pH.__PosthogExtensions__) || void 0 === bb || null === (bb = bb.rrwebPlugins) || void 0 === bb ? void 0 : bb.getRecordConsolePlugin;
          Hb && this.hn && Mb.push(Hb());
          const pb = null === (wb = pH.__PosthogExtensions__) || void 0 === wb || null === (wb = wb.rrwebPlugins) || void 0 === wb ? void 0 : wb.getRecordNetworkPlugin;
          if (this.kI && IH(pb))
            if (!JH.includes(eH.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const bb = IH(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              Mb.push(pb(eb(eb({}, ((bb, wb, Mb) => {
                const Hb = {
                    payloadSizeLimitBytes: bp.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...bp.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...wb.payloadHostDenyList || [], ...bp.payloadHostDenyList]
                  },
                  pb = !1 !== bb.session_recording.recordHeaders && wb.recordHeaders,
                  Vb = !1 !== bb.session_recording.recordBody && wb.recordBody,
                  gb = !1 !== bb.capture_performance && wb.recordPerformance,
                  lb = (bb => {
                    const wb = kH(bb);
                    return bb => ((null == bb ? void 0 : bb.requestBody) && (bb.requestBody = Vp(bb.requestBody, bb.requestHeaders, wb, "Request")), (null == bb ? void 0 : bb.responseBody) && (bb.responseBody = Vp(bb.responseBody, bb.responseHeaders, wb, "Response")), bb)
                  })(Hb),
                  Lb = wb => {
                    return lb(((bb, wb, Mb) => {
                      var eb;
                      if (null == Mb ? void 0 : Mb(bb.name)) return;
                      const Hb = SH(bb.name);
                      let pb = 0 === wb.indexOf("http") ? null === (eb = SH(wb)) || void 0 === eb ? void 0 : eb.pathname : wb;
                      "/" === pb && (pb = "");
                      const Vb = null == Hb ? void 0 : Hb.pathname.replace(pb || "", "");
                      return Hb && Vb && pp.some((bb => 0 === Vb.indexOf(bb))) ? void 0 : bb
                    })((Hp((eb = wb).requestHeaders), Hp(eb.responseHeaders), eb), bb.api_host, Mb));
                    var eb
                  },
                  Ib = IH(bb.session_recording.maskNetworkRequestFn);
                return Ib && IH(bb.session_recording.maskCapturedNetworkRequestFn) ? ZH.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : Ib && (bb.session_recording.maskCapturedNetworkRequestFn = wb => {
                  const Mb = bb.session_recording.maskNetworkRequestFn({
                    url: wb.name
                  });
                  return !Mb && wb.isInitial ? Mb : eb(eb({}, wb), {}, {
                    name: null == Mb ? void 0 : Mb.url
                  })
                }), Hb.maskRequestFn = IH(bb.session_recording.maskCapturedNetworkRequestFn) ? wb => {
                  var Mb, eb;
                  const Hb = Lb(wb);
                  if (!Hb) return;
                  const pb = Hb.isInitial ? {
                      name: "",
                      entryType: Hb.entryType,
                      startTime: Hb.startTime,
                      duration: Hb.duration,
                      endTime: Hb.endTime,
                      timeOrigin: Hb.timeOrigin,
                      timestamp: Hb.timestamp,
                      isInitial: !0
                    } : void 0,
                    Vb = null === (Mb = (eb = bb.session_recording).maskCapturedNetworkRequestFn) || void 0 === Mb ? void 0 : Mb.call(eb, Hb);
                  return EH(Vb) && pb ? (lp.add(pb), pb) : null != Vb ? Vb : void 0
                } : bb => function(bb) {
                  if (!UH(bb)) return bb.requestBody = gp(bb.requestBody, "Request"), bb.responseBody = gp(bb.responseBody, "Response"), bb
                }(Lb(bb)), eb(eb(eb({}, bp), Hb), {}, {
                  recordHeaders: pb,
                  recordBody: Vb,
                  recordPerformance: gb,
                  recordInitialRequests: gb,
                  streamNetworkBody: !0 === bb.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.kI, bb)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else Ml.info("NetworkCapture not started because we are on localhost.");
          return Mb
        }
        pn(bb) {
          return this._instance.config.disable_capture_url_hashes ? zH(bb) : bb
        }
        mn(bb) {
          const wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? zH(bb) : this.pn(bb),
            Mb = this._instance.config.mask_personal_data_properties ? [...Dg, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(bb, wb) {
            if (!bb || !wb || !wb.length) return bb;
            const Mb = bb.split("#"),
              eb = Mb[1],
              Hb = (Mb[0] || "").split("?"),
              pb = Hb[1],
              Vb = Hb[0],
              gb = (pb || "").split("&"),
              lb = [];
            for (let Ib = 0; gb.length > Ib; Ib++) {
              const bb = gb[Ib].split("=");
              LH(bb) && (wb.includes(bb[0]) ? lb.push(bb[0] + "=<masked>") : lb.push(gb[Ib]))
            }
            let Lb = Vb;
            return null != pb && (Lb += "?" + lb.join("&")), null != eb && (Lb += "#" + eb), Lb
          }(wb, Mb))
        }
        gn(bb) {
          const wb = this._instance.config.session_recording;
          if (wb.maskCapturedNetworkRequestFn) {
            var Mb;
            const eb = wb.maskCapturedNetworkRequestFn({
              name: bb
            });
            return null !== (Mb = null == eb ? void 0 : eb.name) && void 0 !== Mb ? Mb : null == eb ? void 0 : eb.url
          }
          if (wb.maskNetworkRequestFn) {
            const Mb = wb.maskNetworkRequestFn({
              url: bb
            });
            return null == Mb ? void 0 : Mb.url
          }
          return bb
        }
        yn(bb) {
          try {
            return bb.rrwebMethod(), !0
          } catch (wb) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: bb.enqueuedAt || Date.now(),
              attempt: bb.attempt + 1,
              rrwebMethod: bb.rrwebMethod
            }) : Ml.warn("could not emit queued rrweb event.", wb, bb), !1
          }
        }
        Vt(bb, wb) {
          return this.yn(Hl((() => Vl().addCustomEvent(bb, wb))))
        }
        bn() {
          var bb;
          return this.ae && !0 === (null === (bb = this._instance.config.session_recording) || void 0 === bb ? void 0 : bb.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(bb) {
          if (!this.bn()) return !1;
          try {
            const wb = Vl();
            return !!wb && (wb.addCustomEvent("$json_ld", bb), this.bn())
          } catch (bb) {
            return !1
          }
        }
        kn() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var wb;
            return null === (wb = this._n) || void 0 === wb ? void 0 : wb.scan(bb)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !bH) return;
            const bb = new URL(bH.location.href),
              wb = this.mn(bb.origin + bb.pathname + bb.search);
            this.xn !== wb && (this.xn = wb, this.Vt("$url_changed", {
              href: wb
            }))
          } catch (bb) {}
        }
        Cn() {
          if (this.ce.length) {
            const bb = [...this.ce];
            this.ce = [], bb.forEach((bb => {
              Date.now() - bb.enqueuedAt > 2e3 || this.yn(bb)
            }))
          }
        }
        jt() {
          return this.yn(Hl((() => Vl().takeFullSnapshot())))
        }
        get In() {
          var bb, wb, Mb;
          if ((null === (bb = this.re) || void 0 === bb ? void 0 : bb.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var eb;
            const bb = null === (eb = this._instance.config.session_recording) || void 0 === eb ? void 0 : eb.trigger_pending_buffer_interval_millis;
            return FH(bb) && Number.isFinite(bb) && bb >= 1e3 && 36e5 >= bb ? bb : 6e4
          }
          return null !== (wb = null === (Mb = this._instance.config.session_recording) || void 0 === Mb ? void 0 : Mb.full_snapshot_interval_millis) && void 0 !== wb ? wb : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const bb = this.In;
          bb && (this.Tn = setInterval((() => {
            this.jt()
          }), bb))
        }
        Bt(bb) {
          "event" === bb && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var bb;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (bb = this._n) || void 0 === bb || bb.scan(), clearInterval(this.Tn), Ml.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var bb;
          this.Y.urlBlocked && (null === (bb = this._n) || void 0 === bb || bb.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), Ml.info("recording resumed"))
        }
        $n(bb, wb) {
          var Mb;
          if ("event" === bb && this.Rn(), !this.ue && (null === (Mb = this.re) || void 0 === Mb ? void 0 : Mb.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var eb, Hb;
              const Mb = "url" === bb ? qp : ap;
              null === (eb = this._instance.persistence) || void 0 === eb || eb.register({
                [Mb]: this.sessionId
              }), null === (Hb = this.re) || void 0 === Hb || Hb.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(bb + "_trigger_matched", {
                ["url" === bb ? "matchedUrl" : "matchedEvent"]: wb
              })
            } finally {
              this.ue = !1
            }
          }
        }
        get isStarted() {
          return !!this.se
        }
        get ne() {
          const bb = this._instance.get_property("$session_recording_remote_config");
          if (!bb) return;
          let wb;
          try {
            wb = OH(bb) ? bb : JSON.parse(bb)
          } catch (bb) {
            return void Ml.warn("persisted remote config for session recording is invalid and will be ignored", bb)
          }
          if (!this.isStarted && !this.Ue) {
            var Mb;
            const eb = null !== (Mb = wb.cache_timestamp) && void 0 !== Mb ? Mb : Date.now();
            if (Date.now() - eb > 36e5) return void Ml.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: eb,
              persistedConfig: bb
            })
          }
          return wb
        }
        On(bb, wb, Mb) {
          this._instance.get_property(bb) && (wb(), Mb())
        }
        start(bb) {
          var wb, Mb;
          const eb = this.ne;
          if (!eb) return void Ml.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const bb = !1 !== this.de && !this.we;
            this.Ke(bb ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = bb, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: Hb,
            windowId: pb,
            sessionStartTimestamp: Vb
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = Hb, this.je = pb, this._sessionStartTimestamp = Vb, this.Ln(), null === (wb = this._instance.persistence) || void 0 === wb || wb.unregister("$debug_first_full_snapshot_timestamp"), (null == eb ? void 0 : eb.endpoint) && (this.oe = null == eb ? void 0 : eb.endpoint), this.re = 2 === (null == eb ? void 0 : eb.version) && (null == eb ? void 0 : eb.triggerGroups) && eb.triggerGroups.length > 0 ? new Rg(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new rg(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(eb), null === (Mb = this.Wt) || void 0 === Mb || Mb.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((bb, wb) => this.$n(bb, wb))), this.On(Sp, (() => {
            this.overrideSampling()
          }), (() => {
            var bb;
            return null === (bb = this._instance.persistence) || void 0 === bb ? void 0 : bb.unregister(Sp)
          })), this.On(Np, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var bb;
            return null === (bb = this._instance.persistence) || void 0 === bb ? void 0 : bb.unregister(Np)
          })), this.On(Qp, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var bb;
            return null === (bb = this._instance.persistence) || void 0 === bb ? void 0 : bb.unregister(Qp)
          })), this.On(vp, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var bb;
            return null === (bb = this._instance.persistence) || void 0 === bb ? void 0 : bb.unregister(vp)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (WH(bH, "beforeunload", this.Ze), WH(bH, "pagehide", this.en), WH(bH, "offline", this.nn), WH(bH, "online", this.rn), WH(MH, "visibilitychange", this.sn), !this.De && IH(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && IH(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((bb, wb, Mb) => {
              var eb;
              null === (eb = this.Ne) || void 0 === eb || eb.call(this), this.Ne = void 0, this.qe(bb, wb, Mb)
            }))
          })) : IH(this.Yt.on) || Ml.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), EH(this.Le) && (this.Le = this._instance.on("eventCaptured", (bb => {
            try {
              if ("$pageview" === bb.event) {
                const wb = (null == bb ? void 0 : bb.properties.$current_url) ? this.mn(bb.properties.$current_url) : "";
                if (!wb) return;
                this.Vt("$pageview", {
                  href: wb
                })
              }
            } catch (bb) {
              Ml.error("Could not add $pageview to rrweb session", bb)
            }
          }))), "active" === this.status && this.qt(bb || "recording_initialized"))
        }
        Fn() {
          var bb, wb, Mb, eb, Hb, pb;
          null == bH || bH.removeEventListener("beforeunload", this.Ze), null == bH || bH.removeEventListener("pagehide", this.en), null == bH || bH.removeEventListener("offline", this.nn), null == bH || bH.removeEventListener("online", this.rn), null == MH || MH.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (bb = this.Le) || void 0 === bb || bb.call(this), this.Le = void 0, null === (wb = this.Wt) || void 0 === wb || wb.call(this), this.Wt = void 0, null === (Mb = this.De) || void 0 === Mb || Mb.call(this), this.De = void 0, null === (eb = this.Fe) || void 0 === eb || eb.call(this), this.Fe = void 0, null === (Hb = this.Ne) || void 0 === Hb || Hb.call(this), this.Ne = void 0, null === (pb = this.re) || void 0 === pb || pb.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var bb, wb;
          null === (bb = this.Bn) || void 0 === bb || bb.stop(), this.ce = [], null === (wb = this._n) || void 0 === wb || wb.stop(), this._n = void 0, this.ae = !1;
          try {
            var Mb;
            null === (Mb = this.se) || void 0 === Mb || Mb.call(this)
          } catch (bb) {
            Ml.warn("could not stop rrweb", bb)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const bb = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            bb === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), Ml.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), Ml.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), Ml.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(bb) {
          this.Ue = !0, this.le = Date.now();
          try {
            var wb, Mb;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (wb = pl()) || void 0 === wb || null === (Mb = wb.resetSnapshotCostState) || void 0 === Mb || Mb.call(wb), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(bb ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(bb) {
          let {
            preserveLogDedup: wb = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !UH(bb), this.Hn = bb, UH(bb)) return void(wb || (this.Vn = void 0));
          if (this.Ue) return;
          const Mb = `${this.sessionId}:${bb}`;
          Mb !== this.Vn && (this.Vn = Mb, Ml.info(`holding buffer: ${bb}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: bb = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, bb && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), Ml.info("discarded")
        }
        Qn(bb, wb, Mb, eb, Hb) {
          if (-1 === Mb) return this.me += 1, void Ml.warn("could not stringify event - dropping it to keep the rest of the recording");
          const pb = {
            $snapshot_bytes: Mb,
            $snapshot_data: wb,
            $session_id: eb,
            $window_id: Hb
          };
          "disabled" !== this.status ? (this.Zn(bb, eb), this.Jn(pb)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (bb) {
            this.Se || (this.Se = !0, Ml.error("could not track full snapshot cost", bb))
          }
        }
        Xn() {
          var bb, wb;
          const Mb = null === (bb = pl()) || void 0 === bb || null === (wb = bb.getLastSnapshotCost) || void 0 === wb ? void 0 : wb.call(bb);
          Mb && Mb !== this.Wn && (this.Wn = Mb, 500 > Mb.durationMs || Ml.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(Mb.durationMs),
            stylesheetMs: Math.round(Mb.stylesheetMs),
            nodeCount: Mb.nodeCount,
            cssRuleCount: Mb.cssRuleCount,
            nonDeferrableCssRuleCount: Mb.nonDeferrableCssRuleCount,
            deferredStylesheetCount: Mb.deferredStylesheetCount
          }))
        }
        Zn(bb, wb) {
          2 !== bb.type ? 3 === bb.type && (UH(this.Te) || this.Te === wb || this.Re === wb || (this.Re = wb, Ml.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: wb
          }), this.jt())) : this.Te = wb
        }
        Yn(bb) {
          bb.counted && bb.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), bb.counted = !1, this.Ae = this.Ae.filter((wb => wb !== bb))
        }
        ti(bb, wb, Mb) {
          bb.processed || bb.generation !== this.Oe || (bb.processed = !0, this.Qn(bb.event, wb, Mb, bb.targetSessionId, bb.targetWindowId))
        }
        ei(bb) {
          try {
            let wb, Mb = bb.event;
            if (bb.compressionEnabled) try {
              ({
                event: Mb,
                size: wb
              } = Xl(bb.event))
            } catch (bb) {
              Ml.warn("could not process queued compression event - will use uncompressed event", bb)
            }
            UH(wb) && (wb = cV(bb.event));
            try {
              this.ti(bb, Mb, wb)
            } catch (bb) {
              Ml.warn("could not capture queued compression event", bb)
            }
          } finally {
            this.Yn(bb)
          }
        }
        Xe() {
          [...this.Ae].forEach((bb => {
            try {
              this.ei(bb)
            } catch (bb) {
              Ml.warn("could not drain queued compression event", bb)
            }
          }))
        }
        ni(bb, wb, Mb, eb) {
          var Hb = this;
          const Vb = {
            event: bb,
            compressionEnabled: wb,
            targetSessionId: Mb,
            targetWindowId: eb,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(Vb), this.$e += 1;
          const gb = (lb = pb((function*() {
            try {
              if (Vb.processed) return;
              let Mb, eb;
              try {
                const Hb = wb ? sl(bb) ? yield function(bb) {
                  return xl.apply(this, arguments)
                }(bb): Xl(bb): {
                  event: bb,
                  size: cV(bb)
                };
                Mb = Hb.event, eb = Hb.size
              } catch (wb) {
                Ml.warn("could not process queued compression event - will use uncompressed event", wb), Mb = bb, eb = cV(bb)
              }
              Hb.ti(Vb, Mb, eb)
            } finally {
              Hb.Yn(Vb)
            }
          })), function() {
            return lb.apply(this, arguments)
          });
          var lb;
          this.jn = this.jn ? this.jn.catch((() => {})).then(gb) : gb()
        }
        onRRwebEmit(bb) {
          var wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !bb || !OH(bb)) return;
          if (4 === bb.type) {
            const wb = this.mn(bb.data.href);
            if (this.xn = wb, !wb) return;
            bb.data.href = wb
          } else this.Sn();
          if (null === (wb = this.re) || void 0 === wb || wb.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((bb, wb) => this.$n(bb, wb))), this.Y.urlBlocked && (5 !== (Ib = bb).type || "recording paused" !== Ib.data.tag)) return;
          2 === bb.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (Ob = this.Bn) || void 0 === Ob || Ob.reset(), null === (Ub = this._instance.persistence) || void 0 === Ub || Ub.register_once({
            $debug_first_full_snapshot_timestamp: bb.timestamp
          }, void 0));
          const tb = 2 === bb.type && (null === (Mb = this.re) || void 0 === Mb ? void 0 : Mb.hasPendingTriggers(this.sessionId));
          tb && this.ii();
          const Cb = this.Bn ? this.Bn.throttleMutations(bb) : bb;
          if (!Cb) return void(!0 === this.de && this.he++);
          const Eb = function(bb) {
              const wb = bb;
              if (wb && OH(wb) && 6 === wb.type && OH(wb.data) && "rrweb/console@1" === wb.data.plugin) {
                wb.data.payload.payload.length > 10 && (wb.data.payload.payload = wb.data.payload.payload.slice(0, 10), wb.data.payload.payload.push("...[truncated]"));
                const Mb = [];
                for (let bb = 0; wb.data.payload.payload.length > bb; bb++) Mb.push(wb.data.payload.payload[bb] && wb.data.payload.payload[bb].length > 2e3 ? wb.data.payload.payload[bb].slice(0, 2e3) + "...[truncated]" : wb.data.payload.payload[bb]);
                return wb.data.payload.payload = Mb, bb
              }
              return bb
            }(Cb),
            Fb = function(bb) {
              return rl(bb) ? bb.data.payload : null
            }(Eb),
            Bb = function(bb) {
              return Rl(bb) ? bb.data.payload : null
            }(Eb),
            sb = function(bb) {
              return Kl(bb) ? bb.data.payload : null
            }(Eb);
          Fb || Bb ? (null == Fb ? void 0 : Fb.lastActivityTimestamp) && (Eb.timestamp = Fb.lastActivityTimestamp) : (null == sb ? void 0 : sb.sessionId) || this.ri(Eb);
          const mb = null !== (eb = null !== (Hb = null !== (pb = null == Fb ? void 0 : Fb.currentSessionId) && void 0 !== pb ? pb : null == Bb ? void 0 : Bb.nextSessionId) && void 0 !== Hb ? Hb : null == sb ? void 0 : sb.sessionId) && void 0 !== eb ? eb : this.Xt,
            hb = null !== (Vb = null !== (gb = null !== (lb = null == Fb ? void 0 : Fb.currentWindowId) && void 0 !== lb ? lb : null == Bb ? void 0 : Bb.nextWindowId) && void 0 !== gb ? gb : null == sb ? void 0 : sb.windowId) && void 0 !== Vb ? Vb : this.je;
          if (!0 === this.de && ! function(bb) {
              return Kl(bb) || rl(bb) || Rl(bb)
            }(Eb)) return void(function(bb) {
            return 2 === bb.type || 4 === bb.type || 3 === bb.type && 9 !== bb.data.source
          }(Eb) && this.he++);
          2 === Eb.type && (this.he = 0), sb && (Eb.timestamp = sb.lastActivityTimestamp + sb.threshold);
          const zb = this.ae;
          this.ae = !0, tb ? this.kn(!0) : zb || this.kn();
          const Xb = null === (Lb = this._instance.config.session_recording.compress_events) || void 0 === Lb || Lb;
          if (5 === Eb.type && "$json_ld" === Eb.data.tag) {
            let wb;
            try {
              wb = bH ? this.mn(bH.location.href) : void 0
            } catch (bb) {}
            Eb.data.href = wb
          }
          if (this.$e > 0 || Xb && sl(Eb)) return void this.ni(Eb, Xb, mb, hb);
          const {
            event: xb,
            size: jb
          } = Xb ? Xl(Eb) : {
            event: Eb,
            size: cV(Eb)
          };
          this.Qn(Eb, xb, jb, mb, hb)
        }
        get status() {
          return this.re ? this.re.getStatus({
            instance: this._instance,
            sessionId: this.sessionId,
            isSampled: this.ee,
            rrwebError: this.ke,
            urlTriggerMatching: this.Y,
            eventTriggerMatching: this.tt,
            linkedFlagMatching: this.et,
            remoteConfig: this.ne
          }) : pV
        }
        log(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var Mb;
          null === (Mb = this._instance.sessionRecording) || void 0 === Mb || Mb.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: wb,
                trace: [],
                payload: [JSON.stringify(bb)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var bb;
          null === (bb = this._instance.persistence) || void 0 === bb || bb.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(bb) {
          this.$n(bb), this.Rn()
        }
        oi() {
          try {
            var bb;
            const wb = null == bH || null === (bb = bH.location) || void 0 === bb ? void 0 : bb.href;
            if (!wb) return;
            const Mb = this.mn(wb);
            if (!Mb) return;
            return new URL(Mb).hostname || void 0
          } catch (bb) {
            return
          }
        }
        Nn() {
          this.si && (clearTimeout(this.si), this.si = void 0)
        }
        Gn() {
          this.si || (this.si = setTimeout((() => {
            this.Ye()
          }), 2e3))
        }
        ai() {
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((bb => 5 === (null == bb ? void 0 : bb.type) && !rl(bb) && !Rl(bb)))
        }
        li() {
          var bb, wb;
          return null !== (bb = null === (wb = this.re) || void 0 === wb ? void 0 : wb.getPendingTriggerConditions(this.sessionId)) && void 0 !== bb ? bb : []
        }
        ui(bb) {
          if ("buffering" !== bb) return UH(this.ci) || this._instance.register_for_session({
            [Tp]: []
          }), void(this.ci = void 0);
          const wb = this.li();
          if (0 === wb.length) return UH(this.ci) || this._instance.register_for_session({
            [Tp]: []
          }), void(this.ci = void 0);
          const Mb = wb.join(", "),
            eb = `${this.sessionId}:${Mb}`;
          eb !== this.ci && (this.ci = eb, this._instance.register_for_session({
            [Tp]: wb
          }), Ml.info(`buffering: ${Mb}`))
        }
        di() {
          var bb;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (bb = this._instance.persistence) || void 0 === bb ? void 0 : bb.hi) && Cg.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, Cg.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const bb = Cg.Dt(this.an);
          Cg.Pt(this.an), OH(bb) && LH(bb.data) && 0 !== bb.data.length && LH(bb.sizes) && bb.sizes.length === bb.data.length && FH(bb.size) && bb.sessionId === this.Xt && bb.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = bb))
        }
        Ye() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var wb;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (bb && this.fi(), this.Rt);
          const Mb = this.Rt;
          null === (wb = this.re) || void 0 === wb || wb.ensureSamplingDecision(this.sessionId);
          const Hb = this.Ge(),
            pb = this.status;
          if (this.ui(pb), "buffering" === pb || "paused" === pb || "disabled" === pb || Hb) return !bb || "active" !== pb && "sampled" !== pb || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== Mb) return this.Rt;
          if (Mb.data.length > 0) {
            var Vb;
            const bb = this.oi();
            ZV(Mb).forEach((wb => {
              try {
                var Mb;
                null === (Mb = this.Be) || void 0 === Mb || Mb.trackSize(wb.sessionId, wb.size), this.mi(eb(eb(eb(eb({
                  $snapshot_bytes: wb.size,
                  $snapshot_data: wb.data,
                  $session_id: wb.sessionId,
                  $window_id: wb.windowId,
                  $lib: Eg.LIB_NAME,
                  $lib_version: Eg.LIB_VERSION,
                  $snapshot_host: bb
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (bb) {
                Ml.warn("could not capture snapshot chunk - skipping it", bb)
              }
            })), UH(this.pi) || (Cg.Pt(this.an), this.pi = void 0), null === (Vb = this.re) || void 0 === Vb || Vb.onFlushComplete()
          }
          return this.tn()
        }
        Jn(bb) {
          var wb;
          const Mb = 2 + ((null === (wb = this.Rt) || void 0 === wb ? void 0 : wb.data.length) || 0),
            eb = bb.$session_id,
            Hb = this.Rt.sessionId !== eb;
          if (Hb || !0 !== this.de && !this.ge && this.Rt.size + bb.$snapshot_bytes + Mb > 943718.4) {
            const wb = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== wb) return;
            Hb && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = eb, this.Rt.windowId = bb.$window_id
          }
          this.ge && (this.be || this.Rt.size + bb.$snapshot_bytes + Mb > 943718.4) ? this.be = !0 : (this.Rt.size += bb.$snapshot_bytes, this.Rt.data.push(bb.$snapshot_data), this.Rt.sizes.push(bb.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(bb) {
          this._instance.capture("$snapshot", bb, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var bb, wb;
          const Mb = null === (bb = this.Rt) || void 0 === bb ? void 0 : bb.data[(null === (wb = this.Rt) || void 0 === wb ? void 0 : wb.data.length) - 1];
          return Mb ? Mb.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let bb = -1;
          for (let wb = this.Rt.data.length - 1; wb >= 0; wb--)
            if (4 === this.Rt.data[wb].type) {
              bb = wb;
              break
            } return 0 > bb ? this.tn() : (this.Rt.data = this.Rt.data.slice(bb), this.Rt.sizes = this.Rt.sizes.slice(bb), this.Rt.size = this.Rt.sizes.reduce(((bb, wb) => bb + wb), 0), this.Rt)
        }
        tn() {
          return this.Rt = {
            size: 0,
            data: [],
            sizes: [],
            sessionId: this.Xt,
            windowId: this.je
          }, this.Rt
        }
        qt(bb, wb) {
          this._instance.register_for_session({
            [HV]: bb
          }), Ml.info(bb.replace("_", " "), wb), "session_id_changed" !== bb && this.Vt("$recording_started", eb({
            reason: bb
          }, wb))
        }
        gi(bb) {
          var wb;
          return 3 === bb.type && -1 !== el.indexOf(null === (wb = bb.data) || void 0 === wb ? void 0 : wb.source)
        }
        ri(bb) {
          const wb = this.gi(bb);
          wb || !0 === this.de || bb.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: bb.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: Mb,
            sessionId: eb
          } = this.Yt.checkAndGetSessionAndWindowId(!wb, bb.timestamp);
          let Hb = !1;
          if (wb && (this.le = bb.timestamp, this.de)) {
            const wb = "unknown" === this.de;
            this.de = !1, wb || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: bb.type
            }), Hb = !0)
          }
          const pb = this.Xt !== eb,
            Vb = this.je !== Mb;
          if (this.je = Mb, this.Xt = eb, pb || Vb) {
            const bb = pb && !1 !== this.de;
            bb && (this.de = "unknown"), this.He(bb)
          } else if (wb && this.Rn(), Hb) {
            var gb;
            const bb = ["sampled", "active"].includes(this.status) || (null === (gb = this.re) || void 0 === gb ? void 0 : gb.hasPendingTriggers(this.sessionId));
            this.he > 0 && bb && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var bb;
          null === (bb = this.re) || void 0 === bb || bb.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var bb;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (bb = this.Be) || void 0 === bb ? void 0 : bb.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [MV]: this.yi,
            [eV]: this._e
          }
        }
        get yi() {
          var bb, wb, Mb;
          return !!this.se && (null === (bb = null === (wb = Vl()) || void 0 === wb || null === (Mb = wb.isRecording) || void 0 === Mb ? void 0 : Mb.call(wb)) || void 0 === bb || bb)
        }
        Dn() {
          var bb;
          if (this.se) return;
          this._e = !0;
          const wb = {
              blockClass: "ph-no-capture",
              blockSelector: void 0,
              ignoreClass: "ph-ignore-input",
              maskTextClass: "ph-mask",
              maskTextSelector: void 0,
              maskTextFn: void 0,
              maskAllInputs: !0,
              maskInputOptions: {
                password: !0
              },
              maskInputFn: void 0,
              maskAllElementAttributes: !1,
              maskAttributeFn: void 0,
              slimDOMOptions: {},
              collectFonts: !1,
              inlineStylesheet: !0,
              inlineStylesheetBudgetRules: 1e4,
              recordCrossOriginIframes: !1,
              sampling: void 0,
              attributeFilter: void 0
            },
            Mb = this._instance.config.session_recording;
          for (const [Ib, Ob] of Object.entries(Mb || {}))
            if (Ib in wb)
              if ("maskInputOptions" === Ib) wb.maskInputOptions = eb({
                password: !0
              }, Ob);
              else if ("sampling" === Ib) {
            const bb = null != Ob ? Ob : {},
              Mb = {};
            UH(bb.mousemove) || (Mb.mousemove = bb.mousemove), UH(bb.mouseInteraction) || (Mb.mouseInteraction = bb.mouseInteraction), wb.sampling = Mb
          } else wb[Ib] = Ob;
          var Hb, pb, Vb, gb;
          !0 === (null == Mb ? void 0 : Mb.captureJsonLd) && !0 !== wb.slimDOMOptions && "all" !== wb.slimDOMOptions && (wb.slimDOMOptions = eb(eb({}, wb.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (wb.recordCanvas = !0, wb.sampling = eb(eb({}, wb.sampling), {}, {
            canvas: this.dn.fps
          }), wb.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, wb.canvasResolutionScale = this.cn, wb.canvasMasking = {
            configured: () => {
              var bb;
              return IH(null === (bb = this._instance.config.session_recording) || void 0 === bb || null === (bb = bb.canvasCapture) || void 0 === bb ? void 0 : bb.maskRegionsFn)
            },
            regionsFn: bb => {
              var wb;
              const Mb = null === (wb = this._instance.config.session_recording) || void 0 === wb || null === (wb = wb.canvasCapture) || void 0 === wb ? void 0 : wb.maskRegionsFn;
              if (IH(Mb)) try {
                var eb;
                return null !== (eb = Mb(bb)) && void 0 !== eb ? eb : null
              } catch (bb) {
                return this.Ie || (this.Ie = !0, Ml.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", bb)), null
              }
            }
          }), this.ln && (wb.maskAllInputs = null === (Hb = this.ln.maskAllInputs) || void 0 === Hb || Hb, wb.maskTextSelector = null !== (pb = this.ln.maskTextSelector) && void 0 !== pb ? pb : void 0, wb.blockSelector = null !== (Vb = this.ln.blockSelector) && void 0 !== Vb ? Vb : void 0, wb.maskAllElementAttributes = null !== (gb = this.ln.maskAllElementAttributes) && void 0 !== gb && gb), wb.maskAllElementAttributes && wb.maskAttributeFn && (wb.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, Ml.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const lb = Vl();
          if (!lb) return void Ml.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (bb = this.Bn) && void 0 !== bb ? bb : new Ug(lb, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (bb, wb) => {
              const Mb = `Too many mutations on node '${bb}'. Rate limiting. This could be due to SVG animations or something similar`;
              Ml.info(Mb, {
                node: wb
              }), this.log("[SessionRecording] " + Mb, "warn")
            },
            onDroppedAttributeMutations: bb => this.fe += bb,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: bb => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += bb
            },
            requestFullSnapshot: () => this.jt()
          });
          const Lb = this.vn();
          if (this.se = lb(eb(eb({
              emit: bb => {
                this.onRRwebEmit(bb)
              },
              plugins: Lb,
              errorHandler: (bb, wb) => "rrweb" === wb && (this.Me || (this.Me = !0, Ml.error("rrweb internal error - recording will continue but may be incomplete", bb)), !0)
            }, wb), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void Ml.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == Mb ? void 0 : Mb.captureJsonLd) && MH && (null == bH ? void 0 : bH.MutationObserver) && !this._n && (this._n = function(bb, wb, Mb) {
            const eb = new WeakMap,
              Hb = Mb.getCaptureState || (() => !0);
            let pb = cg;
            const Vb = function(bb, wb) {
                const Mb = wb.attributeFilter;
                return wb.maskAllElementAttributes || wb.maskAttributeFn || (null == Mb ? void 0 : Mb.length) && !Mb.includes("id") ? fg : Mb => {
                  const eb = bb.getElementById(Mb);
                  return !!eb && "SCRIPT" !== eb.nodeName && (!wb.isRecordedElement || wb.isRecordedElement(eb)) && !kg(eb, wb.blockClass, wb.blockSelector)
                }
              }(bb, Mb),
              gb = wb => {
                try {
                  const gb = Hb();
                  if (!pb || !1 === gb || !wb.isConnected || wb.ownerDocument !== bb || function(bb, wb) {
                      return kg(bb, wb.blockClass, wb.blockSelector) || kg(bb, wb.maskTextClass, wb.maskTextSelector)
                    }(wb, Mb)) return;
                  const lb = function(bb) {
                    let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fg,
                      Mb = arguments.length > 2 ? arguments[2] : void 0;
                    if (!bb || bb.length > cg) return null;
                    try {
                      const eb = JSON.parse(bb),
                        Hb = {
                          maskUrl: Mb,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        pb = LH(eb) ? eb.map((bb => yg(bb, wb, Hb))) : yg(eb, wb, Hb);
                      if (Hb.exceeded || CH(pb) || LH(pb) && (!pb.length || pb.some(CH))) return null;
                      const Vb = JSON.stringify(pb);
                      return Vb.length > 2e4 ? null : [pb, Vb]
                    } catch (bb) {
                      return null
                    }
                  }(wb.text, Vb, Mb.maskUrl);
                  if (!lb) return void eb.delete(wb);
                  const [Lb, Ib] = lb;
                  if (CH(gb)) return void eb.set(wb, Ib);
                  if (eb.get(wb) !== Ib) {
                    if (Ib.length > pb) return void(pb = 0);
                    Mb.emit(Lb) && (eb.set(wb, Ib), pb -= Ib.length)
                  }
                } catch (bb) {
                  return
                }
              };
            try {
              const Mb = new wb((bb => {
                try {
                  if (!pb || !1 === Hb()) return;
                  const wb = bb => {
                    for (const wb of bl(bb)) gb(wb)
                  };
                  for (const Mb of bb)
                    if ("childList" === Mb.type) og(Mb.target) && gb(Mb.target), Mb.addedNodes.forEach(wb);
                    else if ("characterData" === Mb.type) {
                    const bb = Mb.target.parentNode;
                    bb && og(bb) && gb(bb)
                  } else "attributes" === Mb.type && og(Mb.target) && gb(Mb.target)
                } catch (bb) {
                  return
                }
              }));
              return Mb.observe(bb, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  pb && !1 !== Hb() && bl(bb.documentElement).forEach((bb => {
                    wb && eb.delete(bb), gb(bb)
                  }))
                },
                stop: () => Mb.disconnect()
              }
            } catch (bb) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(MH, bH.MutationObserver, {
            maskUrl: bb => this.mn(bb),
            attributeFilter: wb.attributeFilter,
            blockClass: wb.blockClass,
            blockSelector: wb.blockSelector,
            isRecordedElement: bb => lb.mirror.getId(bb) > 0,
            maskAllElementAttributes: wb.maskAllElementAttributes,
            maskAttributeFn: wb.maskAttributeFn,
            maskTextClass: wb.maskTextClass,
            maskTextSelector: wb.maskTextSelector,
            getCaptureState: () => {
              var bb;
              return !0 !== (null === (bb = this._instance.config.session_recording) || void 0 === bb ? void 0 : bb.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: bb => this.wn(bb)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = BH(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: wb,
            activePlugins: Lb.map((bb => null == bb ? void 0 : bb.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(bb, wb) {
          return this.Vt(bb, wb)
        }
      };
      pH.__PosthogExtensions__ = pH.__PosthogExtensions__ || {}, pH.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: bb => ({
          name: "rrweb/console@1",
          observer: ke,
          options: bb
        }),
        getRecordNetworkPlugin: bb => ({
          name: "rrweb/network@1",
          observer: Jp,
          options: bb
        })
      }, pH.__PosthogExtensions__.rrweb = {
        record: Je,
        version: "v2",
        wasMaxDepthReached: () => MM,
        resetMaxDepthState() {
          MM = !1, wM = !1
        },
        getLastSnapshotCost: () => vb,
        getMutationCost: () => eb({}, ib),
        getDeferredStylesheetStats: () => eb({}, ub),
        getDiscardedDurationSamples: () => Yb,
        getObserverInitFailures: () => yM.size ? Array.from(yM) : void 0,
        resetSnapshotCostState() {
          Wb = 0, Jb = 0, Sb = 0, cb = 0, Yb = 0, Nb = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, vb = null, Qb = null, Gb = [], qb = 0, ab = 0, ib = {
            slowestBatchMs: 0
          }, ub = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, pH.__PosthogExtensions__.initSessionRecording = (bb, wb) => new Dl(bb, wb)
    }()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);